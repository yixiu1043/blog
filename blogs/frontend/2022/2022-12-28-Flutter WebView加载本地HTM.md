---
title: Flutter WebView加载本地HTM
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

### 组件代码
```dart
Scaffold(
  appBar: AppBar(title: const Text('WebView页面')),
  body: WebView(
    javascriptMode: JavascriptMode.unrestricted,
    onWebViewCreated: onWebViewCreated(WebViewController controller) {
      String filePath = 'assets/web/demo.html';
      final fileText = await rootBundle.loadString(filePath);
      controller.loadUrl(Uri.dataFromString(
        fileText,
        mimeType: 'text/html',
        encoding: Encoding.getByName('utf-8'),
      ).toString());
    }
  ),
)
```