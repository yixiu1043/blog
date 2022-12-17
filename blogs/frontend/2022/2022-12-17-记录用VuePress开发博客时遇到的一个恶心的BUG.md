---
title: 记录VuePress打包后的一个BUG
date: 2022/6/11
tags:
  - VuePress
category: 前端
banner: /blog/img/banner/62.jpeg
---

# 记录VuePress打包后的一个BUG

## 回顾
只在IOS无法运行，其他设备（PC、Android）都没问题，排查了很久，一开始以为是插件兼容问题，就一个个的试，也没解决问题。

## 解决
由于在移动设备没法看控制台错误，所以只能盲猜。后面突然想到可以利用vConsole这个移动端控制台插件，真是如获至宝。
```js
// .vuepress/config.js
 [
    "script",
    {
      src: "https://unpkg.com/vconsole/dist/vconsole.min.js",
    },
  ],
  [
    "script",
    {},
    `
    new VConsole();
    `
  ],
``` 
:::tip
无法在enhanceApp.js中使用，只能通过这种办法了。
:::

打包后，果然在控制台出现了错误信息`RangeError: date value is not finite in DateTimeFormat.format()`
后面搜索到原因是因为IOS不支持转换2011-04-12格式的日期。而我的博客头部日期配置这块，全部都是用的短横线。
```yaml
---
title: Guide
date: 2022-12-13
---
```
用VSCode全局搜索`date: (\d+)(-)(\d+)(-)(\d+)`，然后全局替换短横线`date: $1/$3/$5`。

问题解决，这个问题真是隐蔽呀！
