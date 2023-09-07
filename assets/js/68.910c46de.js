(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{539:function(t,a,s){"use strict";s.r(a);var e=s(2),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"pixi学习笔记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pixi学习笔记"}},[t._v("#")]),t._v(" PIXI学习笔记")]),t._v(" "),a("h2",{attrs:{id:"pixi-appcation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pixi-appcation"}},[t._v("#")]),t._v(" PIXI.Appcation")]),t._v(" "),a("p",[t._v("创建一个PIXI应用实例")]),t._v(" "),a("h3",{attrs:{id:"renderer-渲染器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#renderer-渲染器"}},[t._v("#")]),t._v(" renderer 渲染器")]),t._v(" "),a("ul",[a("li",[t._v("width")]),t._v(" "),a("li",[t._v("height")]),t._v(" "),a("li",[t._v("backgroundColor (hex16进制颜色)")]),t._v(" "),a("li",[t._v("resize (function) 重置画布大小")]),t._v(" "),a("li",[t._v("autoResize")]),t._v(" "),a("li",[t._v("view canvas标签\n"),a("ul",[a("li",[t._v("style")])])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('let app = new Application({\n  width: 256, // 默认: 800\n  height: 256, // 默认: 800                   \n  antialias: true, // 抗锯齿，默认: false\n  transparent: false, // 设置透明度\n  resolution: 1 // 设置分辨率，一般1\n});\n\n// 改变背景色\napp.renderer.backgroundColor = 0x061639;\n\n// 重置画布大小\napp.renderer.autoResize = true;\napp.renderer.resize(512, 512);\n\n// 全屏画布\napp.renderer.view.style.position = "absolute";\napp.renderer.view.style.display = "block";\napp.renderer.autoResize = true;\napp.renderer.resize(window.innerWidth, window.innerHeight);\n\ndocument.body.appendChild(app.view);\n')])])]),a("h3",{attrs:{id:"ticker-定时器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ticker-定时器"}},[t._v("#")]),t._v(" ticker 定时器")]),t._v(" "),a("ul",[a("li",[t._v("add")]),t._v(" "),a("li",[t._v("addOnce")]),t._v(" "),a("li",[t._v("destroy")]),t._v(" "),a("li",[t._v("remove")]),t._v(" "),a("li",[t._v("start")]),t._v(" "),a("li",[t._v("stop")]),t._v(" "),a("li",[t._v("update")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ticker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("animate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("animate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tsprite"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rotation "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"stage-舞台"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stage-舞台"}},[t._v("#")]),t._v(" stage 舞台")]),t._v(" "),a("ul",[a("li",[t._v("addChild 添加子元素")])]),t._v(" "),a("h2",{attrs:{id:"pixi-loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pixi-loader"}},[t._v("#")]),t._v(" PIXI.loader")]),t._v(" "),a("h3",{attrs:{id:"add"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add"}},[t._v("#")]),t._v(" add")]),t._v(" "),a("p",[t._v("添加文件")]),t._v(" "),a("ul",[a("li",[t._v("name (string): 加载源文件的别名,如果没设置，url就会被放在这.")]),t._v(" "),a("li",[t._v("url (string): 源文件的地址，是加载器 baseUrl的相对地址.")]),t._v(" "),a("li",[t._v("options (object literal): 加载设置.")]),t._v(" "),a("li",[t._v("options.crossOrigin (Boolean): 源文件请求跨域不？默认是自动设定的。")]),t._v(" "),a("li",[t._v("options.loadType: 源文件是怎么加载进来的？默认是Resource.LOAD_TYPE.XHR。 options.xhrType: 用XHR的时候该怎么处理数据？ 默认是Resource.XHR_RESPONSE_TYPE.DEFAULT。")]),t._v(" "),a("li",[t._v("callbackFunction: 当这个特定的资源加载完后，这个函数将会被执行。")])]),t._v(" "),a("h4",{attrs:{id:"传入对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#传入对象"}},[t._v("#")]),t._v(" 传入对象")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(".add({\n  name: 'key3',\n  url: 'http://...'\n  onComplete: function () {}\n})\n")])])]),a("h4",{attrs:{id:"传入数组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#传入数组"}},[t._v("#")]),t._v(" 传入数组")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(".add([\n  {name: 'key4', url: 'http://...', onComplete: function () {} },\n  {url: 'http://...', onComplete: function () {} },\n]);\n")])])]),a("h3",{attrs:{id:"progress"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#progress"}},[t._v("#")]),t._v(" progress")]),t._v(" "),a("p",[t._v("加载进程")]),t._v(" "),a("h3",{attrs:{id:"resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resources"}},[t._v("#")]),t._v(" resources")]),t._v(" "),a("p",[t._v("文件资源信息")]),t._v(" "),a("ul",[a("li",[t._v("url (string) 文件地址")]),t._v(" "),a("li",[t._v("error (string) 错误日志")]),t._v(" "),a("li",[t._v("data (buffer) 二进制文件数据")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('loader\n  .add([\n    "images/game-ddz.png",\n    "images/dog2.jpg",\n  ])\n  .on("progress", loadProgressHandler)\n  .load(setup);\n\n// 监视加载进程\nfunction loadProgressHandler(loader, resource) {\n  // 当前在加载的文件\n  console.log("loading: " + resource.url);\n  // 已经加载的进程\n  console.log("progress: " + loader.progress + "%");\n\n  // 打印错误\n  console.log("error: " + resource.error);\n\n  // 打印文件原始二进制数据\n  console.log("error: " + resource.data);\n\n}\n\n// 加载完毕callback\nfunction setup() {\n  console.log(\'loader finish\');\n  let ddz = new Sprite(\n    resources["images/game-ddz.png"].texture\n  );\n  let dog = new Sprite(\n    resources["images/dog2.jpg"].texture\n  );\n  app.stage.addChild(dog);\n  app.stage.addChild(ddz);\n}\n')])])]),a("h2",{attrs:{id:"pixi-texture"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pixi-texture"}},[t._v("#")]),t._v(" PIXI.Texture")]),t._v(" "),a("ul",[a("li",[t._v("from")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" texture "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PIXI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Texture"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sprite.png'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[t._v("fromBuffer")])]),t._v(" "),a("h2",{attrs:{id:"pixi-sprite"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pixi-sprite"}},[t._v("#")]),t._v(" PIXI.Sprite")]),t._v(" "),a("p",[t._v('创造精灵\nlet sprite = new Sprite(resources["images/game-ddz.png"].texture);')]),t._v(" "),a("ul",[a("li",[t._v("anchor 锚点\nsprite.anchor.set(0.5,0.5); 百分比，相对单位")]),t._v(" "),a("li",[t._v("position\nsprite.position.set(x,y); 像素")]),t._v(" "),a("li",[t._v("pivot 原点\nsprite.pivot.set(x,y); 像素")]),t._v(" "),a("li",[t._v("buttonMode(bool) 按钮")]),t._v(" "),a("li",[t._v("tint(string) 着色")]),t._v(" "),a("li",[t._v("width")]),t._v(" "),a("li",[t._v("height")]),t._v(" "),a("li",[t._v("texture")]),t._v(" "),a("li",[t._v("ratation(number) 旋转")]),t._v(" "),a("li",[t._v("alpha(float) 透明度")])]),t._v(" "),a("h2",{attrs:{id:"pixi-point"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pixi-point"}},[t._v("#")]),t._v(" PIXI.Point")]),t._v(" "),a("p",[t._v("new PIXI.Point(x, y);")]),t._v(" "),a("h2",{attrs:{id:"pixi-container"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pixi-container"}},[t._v("#")]),t._v(" PIXI.Container")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" container "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PIXI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Container")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("container"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncontainer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sprite"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"pixi-rectangle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pixi-rectangle"}},[t._v("#")]),t._v(" PIXI.Rectangle")]),t._v(" "),a("p",[t._v("创建矩形\nlet rectangle = new PIXI.Rectangle(x, y, width, height);")])])}),[],!1,null,null,null);a.default=n.exports}}]);