---
title: Flutter Web 如何插入视频
date: 2022/12/22
tags:
  - flutter
category: 前端
---

### 方案一
纯flutter方式实现
#### 添加依赖
```yaml
dependencies:
  chewie: ^1.3.6
  video_player: ^2.4.10
  video_player_web: ^2.0.13
```
#### 组件代码
```dart
/// video_player.dart
import 'package:chewie/chewie.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:video_player/video_player.dart';

class VideoPlayer extends StatefulWidget {
  const VideoPlayer({Key? key}) : super(key: key);

  @override
  State<VideoPlayer> createState() => _VideoPlayerState();
}

class _VideoPlayerState extends State<VideoPlayer> {
late final VideoPlayerController _controller;
late ChewieController _chewieController;

  @override
  void initState() {
    super.initState();
    initVideoController();
  }

  Future<void> initVideoController() async {
    _controller = VideoPlayerController.asset('assets/video/fa.mp4');
    _chewieController = ChewieController(
      videoPlayerController: _controller,
      deviceOrientationsAfterFullScreen: [
        DeviceOrientation.landscapeRight,
        DeviceOrientation.landscapeLeft,
        DeviceOrientation.portraitUp,
        DeviceOrientation.portraitDown,
      ],
      allowFullScreen: false,
      autoInitialize: true,
      autoPlay: false,
      looping: true,
      aspectRatio: 16 / 9,
      showControls: true,
    );
    // _controller.play();
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    return Chewie(controller: _chewieController);
  }

  @override
  void dispose() {
    _controller.dispose();
    _chewieController.dispose();
    super.dispose();
  }
}
```
#### 打包命令
```bash
fvm flutter build web --release --pwa-strategy none --web-renderer auto -t lib/flavor/main_qa.dart
```
:::tip
用--web-renderer html 打包访问会黑屏。
:::

优点：
- 在安卓默认浏览器上播放视频不会漂浮在其他组件上面
- 纯flutter实现

缺点：
- 对手机系统有较高的要求，老旧机器打开滑不动或直接黑屏
- 需要增加额外的包


### 方案二
用Iframe内嵌html方式实现。
#### 组件代码
```dart
/// video_player_web.dart
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:ob_zr_activity/utils/fake.dart'
    if (dart.library.html) 'dart:html';
import 'package:ob_zr_activity/utils/fake.dart' if (dart.library.html) 'dart:ui'
    as ui;

class VideoPlayer extends StatefulWidget {
  const VideoPlayer({super.key});

  @override
  State<VideoPlayer> createState() => _VideoPlayerState();
}

class _VideoPlayerState extends State<VideoPlayer> {
  final String _viewId = 'video-player';

  @override
  void initState() {
    super.initState();
    // ignore:undefined_prefixed_name
    ui.platformViewRegistry.registerViewFactory(_viewId, (int viewId) {
      IFrameElement element = IFrameElement();
      element.style.border = 'none';
      element.src =
          kReleaseMode ? 'assets/assets/web/video.html' : 'assets/web/video.html';
      return element;
    });
  }

  @override
  Widget build(BuildContext context) {
    return SizedBox(height: 200, child: HtmlElementView(viewType: _viewId));
  }
}
```

如果要原生也可以跑，需要添加以下代码
```dart
/// fake.dart
final window = Window(Navigator(''), Location(''));

class Window {
  final Navigator navigator;
  final Location location;

  Window(this.navigator, this.location);
}

class Navigator {
  final String userAgent;

  Navigator(this.userAgent);
}

class Location {
  final String href;

  Location(this.href);
}

class IFrameElement {
  set src(String value) => value;

  Style get style => Style();

  addEventListener(String name, Function callback) {}
}

class Style {
  set border(String value) => value;
}
```

#### HTML代码
使用video.js实现，[video.js文档](https://videojs.com/getting-started)
```html
/// assets/web/video.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Document</title>
  <link href="https://vjs.zencdn.net/7.20.3/video-js.css" rel="stylesheet"/>
  <style>
    * {
      margin: 0;
      padding: 0;
    }
    html,
    body {
      background-color: #000000;
      overflow: hidden;
      width: 100%;
      height: 100%;
    }
    button.vjs-picture-in-picture-control,
    button.vjs-fullscreen-control,
    button.vjs-big-play-button {
      display: none !important;
    }
    #my-video {
      background-color: #000000;
      margin: auto;
      width: 100%;
      height: 100%;
      max-width: 100%;
      min-height: 100%;
    }
  </style>
</head>
<body>
  <video
    id="my-video"
    class="video-js"
    controls
    preload="auto"
    autoplay
    muted
    loop
    poster="../video/fa_bg.png"
    disablePictureInPicture
    data-setup="{}"
    controlslist="nodownload nofullscreen noremoteplayback"
    webkit-playsinline
    playsinline
    x5-playsinline
    t7-video-player-type="inline"
    x5-video-player-type="h5-page"
  >
    <source
      src="../video/fa.mp4"
      type="video/mp4"
    />
    <p class="vjs-no-js">
      To view this video please enable JavaScript, and consider upgrading to a
      web browser that
      <a href="https://videojs.com/html5-video-support/" target="_blank"
      >supports HTML5 video</a
      >
    </p>
  </video>

<script src="https://vjs.zencdn.net/7.20.3/video.min.js"></script>
</body>
</html>
```

#### 打包命令
```bash
fvm flutter build web --release --pwa-strategy none --web-renderer html -t lib/flavor/main_qa.dart
```

优点：
- 无需增加额外的包
- 兼容性好

缺点：
- 在安卓默认浏览器上播放视频会有漂浮在其他组件上面
- 实现复杂
