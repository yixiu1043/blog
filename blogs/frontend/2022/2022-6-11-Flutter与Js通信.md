---
title: Flutter与Js通信
date: 2022/6/11
tags:
  - flutter
category: 前端
banner: /blog/img/banner/62.jpeg
---

## Flutter原生与JS通信
该场景适用于Flutter使用WebView加载HTML。

### 安装依赖
```yaml
/// pubspec.yaml
dependencies:
  webview_flutter: ^4.0.0
```

### Js发送消息
```javascript
 <body>
  <button onclick="onButtonClick()" style="width: 200px; height: 60px">
    发送消息
  </button>

  <script>
    function onButtonClick() {
      console.log("onButtonClick");
      var data = {
        method: "back",
        data: "aaaa",
      };
      // 发送消息
      FlutterBridge.postMessage(JSON.stringify(data));
    }
  </script>
</body
```

### Flutter接收消息
```dart
Scaffold(
  appBar: AppBar(title: const Text('WebView页面')),
  body: WebView(
    initialUrl: 'http://127.0.0.1:5500/index.html',
    javascriptMode: JavascriptMode.unrestricted,
    javascriptChannels: <JavascriptChannel>{
      JavascriptChannel(
        name: "FlutterBridge", // js 通信管道
        onMessageReceived: (JavascriptMessage javascriptMessage) {
          /// 接收js发来的消息
          final message = jsonDecode(javascriptMessage.message);
          final method = message['method'];
          final data = message['data'];
          switch(method) {
            case: 'back':
            	Get.back();
            	break;
            	...
          }
        },
      )
    },
  ),
)
```


## Flutter Web与JS通信
该场景适用于Flutter Web使用Iframe加载HTML。

### Flutter往window对象注入数据
```dart
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
      element.src = kReleaseMode
          ? 'assets/assets/web/video.html'
          : 'assets/web/video.html';
      return element;
    });
    // ignore:undefined_prefixed_name
    js.context["isProd"] = isProd; // 注入数据
  }

  @override
  Widget build(BuildContext context) {
    return SizedBox(height: 200, child: HtmlElementView(viewType: _viewId));
  }
}
```

### Js访问注入的数据
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link href="https://vjs.zencdn.net/7.20.3/video-js.css" rel="stylesheet" />
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
        autoplay
        muted
        loop
        disablePictureInPicture
        controlslist="nodownload nofullscreen noremoteplayback"
        webkit-playsinline
        playsinline
        x5-playsinline
        t7-video-player-type="inline"
        x5-video-player-type="h5-page"
    >
        <p class="vjs-no-js">
            To view this video please enable JavaScript, and consider upgrading to a
            web browser that
            <a href="https://videojs.com/html5-video-support/" target="_blank"
            >supports HTML5 video</a
            >
        </p>
    </video>

    <script src="https://vjs.zencdn.net/7.20.3/video.min.js"></script>
    <script>
      var isProd = window.parent.isProd; // 接收数据
      videojs(document.getElementById("my-video"), {
        poster: isProd
          ? "http://jimg.bvd58s.com/static/img/jcbg.jpg"
          : "../video/fa_bg.png",
        sources: [
          {
            src: isProd
              ? "https://media.w3.org/2010/05/sintel/trailer.mp4"
              : "../video/fa.mp4",
            type: "video/mp4",
          },
        ],
      });
    </script>
</body>
</html>

```