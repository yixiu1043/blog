---
title: Flutter WebView加载本地HTML
date: 2022/12/28
tags:
  - flutter
category: 前端
---

### 安装依赖
```yaml
/// pubspec.yaml
dependencies:
  webview_flutter: ^4.0.0
```

### 加载本地文件
```dart
Scaffold(
  appBar: AppBar(title: const Text('WebView页面')),
  body: WebView(
    javascriptMode: JavascriptMode.unrestricted,
    onWebViewCreated: onWebViewCreated(WebViewController controller) {
      String filePath = 'assets/web/video.html';
      final fileText = await rootBundle.loadString(filePath);
      controller.loadUrl(Uri.dataFromString(
        fileText,
        mimeType: 'text/html',
        encoding: Encoding.getByName('utf-8'),
      ).toString());
    },
    allowsInlineMediaPlayback: true, // 允许行内播放视频
    initialMediaPlaybackPolicy: AutoMediaPlaybackPolicy.always_allow, // 允许自动播放
  ),
)
```

### 加载HTML String
```dart
final htmlString = '''
<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/mui-player@1.7.0/dist/mui-player.min.css"/>
          <script src="https://cdn.jsdelivr.net/npm/mui-player@1.7.0/dist/mui-player.min.js"></script>
          <title>${'util_deposit_title'.tr}</title>
          <style>
            * {
              margin: 0;
              padding: 0;
            }
            html, body {
              background-color: #000000;
              overflow: hidden;
            }
            #mui-player {
              background-color: #000000;
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              margin: auto;
              width: auto;
              height: auto;
              max-width: 100%;
              min-height: 100%;
            }
            #full-switch {
              display: none;
            }
            #mplayer-header, #mplayer-footer {
              background: transparent !important; 
            }
          </style>
        </head>
        <body>
          <div id="mui-player"></div>
          <script>
            var mp = new MuiPlayer({
              container:"#mui-player",
              src: "$url",
              themeColor: "#FD5B03",
              autoplay: true,
              loop: true,
              title: "${'util_deposit_title'.tr}",
              videoAttribute: [
                { attrKey: "webkit-playsinline", attrValue: "" },
                { attrKey: "playsinline", attrValue: "" },
                { attrKey: "x5-playsinline", attrValue: "" },
                { attrKey: "t7-video-player-type", attrValue: "inline" },
                { attrKey: "x5-video-player-type", attrValue: "h5-page" },
                { attrKey: "x-webkit-airplay", attrValue: "allow" },
                { attrKey: "controlslist", attrValue: "nodownload nofullscreen" },
              ],
              poster: "http://jimg.bvd58s.com/static/img/jcbg.jpg",
            })
            // 监听播放器头部返回按钮事件
            mp.on("back",function(event) {
              var data = {
                method: "back",
              };
              FlutterBridge.postMessage(JSON.stringify(data));
            });
          </script>
        </body>
      </html>
'''

Scaffold(
  appBar: AppBar(title: const Text('WebView页面')),
  body: WebView(
    javascriptMode: JavascriptMode.unrestricted,
    onWebViewCreated: onWebViewCreated(WebViewController controller) {
      //for webview_flutter any version
      controller.loadUrl(Uri.dataFromString(
        htmlString,
        mimeType: 'text/html',
        encoding: Encoding.getByName('utf-8'),
      ).toString());
      //for webview_flutter >= 2.4.0
      controller.loadHtmlString(htmlString);
    },
    allowsInlineMediaPlayback: true, // 允许行内播放视频
    initialMediaPlaybackPolicy: AutoMediaPlaybackPolicy.always_allow, // 允许自动播放
  ),
)
```