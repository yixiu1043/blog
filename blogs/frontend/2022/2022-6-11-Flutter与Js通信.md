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
</body>
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

### 子访问父
#### Flutter向Window对象注入数据
```dart
// 父
import 'package:demo/utils/fake.dart' if (dart.library.html) 'dart:html';
import 'package:demo/utils/fake.dart' if (dart.library.html) 'dart:ui' as ui;

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

#### Js访问注入Window对象的数据
```html
// 子
<body>
  <script>
    var isProd = window.parent.isProd; // 接收数据
    console.log(isProd);
  </script>
</body>
```

### 父访问子
#### Flutter调用Window对象的方法
```html
// 父
import 'package:demo/utils/fake.dart' if (dart.library.html) 'dart:html';
import 'package:demo/utils/fake.dart' if (dart.library.html) 'dart:ui' as ui;

class VideoPlayer extends StatefulWidget {
  const VideoPlayer({Key? key}) : super(key: key);

  @override
  State<VideoPlayer> createState() => _VideoPlayerState();
}

class _VideoPlayerState extends State<VideoPlayer> {
  final String _viewId = 'video-player';
  late final StreamSubscription? listener;

  @override
  void initState() {
    super.initState();
    _listener();
    ui.platformViewRegistry.registerViewFactory(_viewId, (int viewId) {
      IFrameElement element = IFrameElement();
      element.style.border = 'none';
      element.src = 'assets/web/index.html';
      return element;
    });
  }

  void _listener() {
    listener = window.onMessage.listen((event) {
      final code = event.data['code'];
      switch (code) {
        case 1000:
          // print("onReady");
          js.context.callMethod("setEnv", ['prod']);
          break;
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return HtmlElementView(viewType: _viewId);
  }

  @override
  void dispose() {
    listener?.cancel();
    super.dispose();
  }
}
```

#### Js向Window对象注入数据
```html
// 子
<body>
  <script>
    window.onload = () => {
      window.parent.postMessage({ code: 1000 });
    }
    var _env;
    function setEnv(env) {
      _env = env;
    }
    window.parent.setEnv = setEnv;
  </script>
</body>
```