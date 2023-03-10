(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{528:function(t,s,a){"use strict";a.r(s);var e=a(2),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"生命周期图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生命周期图"}},[t._v("#")]),t._v(" 生命周期图")]),t._v(" "),s("p",[s("img",{attrs:{src:"/blog/img/post/react-lifecycle.png",alt:"image"}})]),t._v(" "),s("p",[t._v("参考："),s("a",{attrs:{href:"http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/",target:"_blank",rel:"noopener noreferrer"}},[t._v("生命周期图"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"挂载阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#挂载阶段"}},[t._v("#")]),t._v(" 挂载阶段")]),t._v(" "),s("p",[t._v("组件的初始化阶段，就是将我们的组件插入到DOM中，只会发生一次")]),t._v(" "),s("ul",[s("li",[t._v("constructor")]),t._v(" "),s("li",[t._v("getDerivedStateFromProps")]),t._v(" "),s("li",[s("s",[t._v("componentWillMount/UNSAVE_componentWillMount")])]),t._v(" "),s("li",[t._v("render")]),t._v(" "),s("li",[t._v("componentDidMount")])]),t._v(" "),s("h3",{attrs:{id:"constructor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#constructor"}},[t._v("#")]),t._v(" constructor")]),t._v(" "),s("p",[t._v("如果显示定义了 constructor 构造函数，我们就必须在构造函数第一行执行 super(props) ，否则我们无法在构造函数里拿到 this")]),t._v(" "),s("ol",[s("li",[t._v("初始化state")]),t._v(" "),s("li",[t._v("给自定义方法绑定this")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("count")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("handleChange "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleChange1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("禁止在构造函数中调用setState")])]),t._v(" "),s("h3",{attrs:{id:"getderivedstatefromprops"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getderivedstatefromprops"}},[t._v("#")]),t._v(" getDerivedStateFromProps")]),t._v(" "),s("p",[s("code",[t._v("static getDerivedStateFromProps(props, state)")])]),t._v(" "),s("p",[t._v("React 16.3 的版本中 getDerivedStateFromProps 的触发范围是和 16.4^ 是不同的，主要区别是在 setState 和 forceUpdate 时会不会触发")]),t._v(" "),s("p",[t._v("getDerivedStateFromProps 的作用就是为了让 props 能更新到组件内部 state 中")]),t._v(" "),s("p",[t._v("它应返回一个对象来更新 state，如果返回 null 则不更新任何内容")]),t._v(" "),s("p",[t._v("这个方法就是为了取代之前的componentWillMount、componentWillReceiveProps和componentWillUpdate")]),t._v(" "),s("p",[t._v("当我们接收到新的属性想去修改我们state，可以使用getDerivedStateFromProps")]),t._v(" "),s("p",[t._v("使用场景：")]),t._v(" "),s("ol",[s("li",[t._v("无条件的根据 prop 来更新内部 state，也就是只要有传入 prop 值， 就更新 state")]),t._v(" "),s("li",[t._v("只有 prop 值和 state 值不同时才更新 state 值")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ColorPicker")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("React"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Component")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  state "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#000000'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("prevPropColor")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDerivedStateFromProps")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" state")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置一个单独的变量保存之前的props，解决16.4版本后更新state，一直为之前props的bug")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prevPropColor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("prevPropColor")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 选择颜色方法")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 显示颜色和选择颜色操作")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("注意：")]),t._v(" "),s("ol",[s("li",[t._v("因为这个生命周期是静态方法，同时要保持它是纯函数，不要产生副作用。")]),t._v(" "),s("li",[t._v("在使用此生命周期时，要注意把传入的 prop 值和之前传入的 prop 进行比较。")])]),t._v(" "),s("h3",{attrs:{id:"render"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#render"}},[t._v("#")]),t._v(" render")]),t._v(" "),s("p",[t._v("React中最核心的方法，一个组件中必须要有这个方法")]),t._v(" "),s("p",[t._v("返回的类型有以下几种：")]),t._v(" "),s("ol",[s("li",[t._v("原生的DOM，如div")]),t._v(" "),s("li",[t._v("React组件")]),t._v(" "),s("li",[t._v("Fragment（片段）")]),t._v(" "),s("li",[t._v("Portals（插槽）")]),t._v(" "),s("li",[t._v("字符串和数字，被渲染成text节点")]),t._v(" "),s("li",[t._v("Boolean和null，不会渲染任何东西")])]),t._v(" "),s("h3",{attrs:{id:"componentdidmount"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#componentdidmount"}},[t._v("#")]),t._v(" componentDidMount")]),t._v(" "),s("p",[t._v("组件装载之后调用，此时我们可以获取到DOM节点并操作，比如对canvas，svg的操作，服务器请求，订阅都可以写在这个里面，但是记得在componentWillUnmount中取消订阅")]),t._v(" "),s("p",[t._v("在componentDidMount中调用setState会触发一次额外的渲染，多调用了一次render函数，但是用户对此没有感知，因为它是在浏览器刷新屏幕前执行的。")]),t._v(" "),s("h2",{attrs:{id:"更新阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新阶段"}},[t._v("#")]),t._v(" 更新阶段")]),t._v(" "),s("p",[t._v("更新阶段，当组件的props改变了，或组件内部调用了setState或者forceUpdate发生，会发生多次")]),t._v(" "),s("ul",[s("li",[s("s",[t._v("componentWillReceiveProps/UNSAFE_componentWillReceiveProps")])]),t._v(" "),s("li",[t._v("getDerivedStateFromProps")]),t._v(" "),s("li",[t._v("shouldComponentUpdate")]),t._v(" "),s("li",[s("s",[t._v("componentWillUpdate/UNSAFE_componentWillUpdate")])]),t._v(" "),s("li",[t._v("render")]),t._v(" "),s("li",[t._v("getSnapshotBeforeUpdate")]),t._v(" "),s("li",[t._v("componentDidUpdate")])]),t._v(" "),s("h3",{attrs:{id:"shouldcomponentupdate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shouldcomponentupdate"}},[t._v("#")]),t._v(" shouldComponentUpdate")]),t._v(" "),s("p",[s("code",[t._v("shouldComponentUpdate(nextProps, nextState)")])]),t._v(" "),s("p",[t._v("有两个参数nextProps和nextState，表示新的属性和变化之后的state，返回一个布尔值，true表示会触发重新渲染，false表示不会触发重新渲染，默认返回true")]),t._v(" "),s("p",[t._v("注意当我们调用forceUpdate并不会触发此方法")]),t._v(" "),s("p",[t._v("因为默认是返回true，也就是只要接收到新的属性和调用了setState都会触发重新的渲染，这会带来一定的性能问题，所以我们需要将this.props与nextProps以及this.state与nextState进行比较来决定是否返回false，来减少重新渲染")]),t._v(" "),s("p",[t._v("但是官方提倡我们使用PureComponent来减少重新渲染的次数而不是手工编写shouldComponentUpdate代码，具体该怎么选择，全凭开发者自己选择")]),t._v(" "),s("h3",{attrs:{id:"getsnapshotbeforeupdate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getsnapshotbeforeupdate"}},[t._v("#")]),t._v(" getSnapshotBeforeUpdate")]),t._v(" "),s("p",[s("code",[t._v("getSnapshotBeforeUpdate(prevProps, prevState)")])]),t._v(" "),s("p",[t._v("获取render之前的dom状态")]),t._v(" "),s("p",[t._v("这个方法在render之后，componentDidUpdate之前调用，有两个参数prevProps和prevState，表示之前的属性和之前的state，这个函数有一个返回值，会作为第三个参数传给componentDidUpdate，如果你不想要返回值，请返回null，不写的话控制台会有警告")]),t._v(" "),s("p",[t._v("还有这个方法一定要和componentDidUpdate一起使用，否则控制台也会有警告")]),t._v(" "),s("p",[t._v("这个方法时用来代替componentWillUpdate/UNSAVE_componentWillUpdate")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ScrollingList")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("React"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Component")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("listRef "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" React"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createRef")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSnapshotBeforeUpdate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("prevProps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prevState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prevProps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" list "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("listRef"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollHeight "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentDidUpdate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("prevProps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prevState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" snapshot")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("snapshot "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" list "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("listRef"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollHeight "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" snapshot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div ref"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("listRef"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ...contents... */")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"componentdidupdate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#componentdidupdate"}},[t._v("#")]),t._v(" componentDidUpdate")]),t._v(" "),s("p",[t._v("该方法在getSnapshotBeforeUpdate方法之后被调用，有三个参数prevProps，prevState，snapshot，表示之前的props，之前的state，和snapshot。第三个参数是getSnapshotBeforeUpdate返回的")]),t._v(" "),s("p",[t._v("在这个函数里我们可以操作DOM，和发起服务器请求，还可以setState，但是注意一定要用if语句控制，否则会导致无限循环")]),t._v(" "),s("h2",{attrs:{id:"卸载阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#卸载阶段"}},[t._v("#")]),t._v(" 卸载阶段")]),t._v(" "),s("p",[t._v("卸载阶段，当我们的组件被卸载或者销毁了")]),t._v(" "),s("ul",[s("li",[t._v("componentWillUnmount")])]),t._v(" "),s("p",[t._v("当我们的组件被卸载或者销毁了就会调用，我们可以在这个函数里去清除一些定时器，取消网络请求，清理无效的DOM元素等垃圾清理工作")]),t._v(" "),s("p",[t._v("注意不要在这个函数里去调用setState，因为组件不会重新渲染了")]),t._v(" "),s("h2",{attrs:{id:"setstate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setstate"}},[t._v("#")]),t._v(" setState")]),t._v(" "),s("p",[t._v("可以调用setState的生命周期函数")]),t._v(" "),s("ol",[s("li",[t._v("componentWillMount()")]),t._v(" "),s("li",[t._v("componentDidMount()")]),t._v(" "),s("li",[t._v("componentDidUpdate()")]),t._v(" "),s("li",[t._v("componentWillReceiveProps(nextProps)")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("是否可以执行setState")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("生命周期函数")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("可以执行")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("componentWillReceiveProps")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("尽量避免")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("constructor、componentDidMount、 componentDidUpdate")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("无意义")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("componentWillMount、componentWillUnMount")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("禁止")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("shouldComponentUpdate、 componentWillUpdate")])])])]),t._v(" "),s("h2",{attrs:{id:"参考链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[t._v("#")]),t._v(" 参考链接")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/react-component.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("react 官网"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.im/post/5c71050ef265da2db27938b5",target:"_blank",rel:"noopener noreferrer"}},[t._v("【React深入】setState的执行机制"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://bixuwen.com/post/5cdd6c405188257cf051a235",target:"_blank",rel:"noopener noreferrer"}},[t._v("React 生命周期"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.im/post/5c70e67f6fb9a049ba42326b",target:"_blank",rel:"noopener noreferrer"}},[t._v("为何要在componentDidMount里面发送请求？"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.im/post/5a575c72518825734f52a049",target:"_blank",rel:"noopener noreferrer"}},[t._v("React组件的DidMount事件里的setState事件"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/superman66/front-end-blog/issues/2",target:"_blank",rel:"noopener noreferrer"}},[t._v("React Component 生命周期"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.im/post/5b6f1800f265da282d45a79a",target:"_blank",rel:"noopener noreferrer"}},[t._v("我对 React v16.4 生命周期的理解"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.im/post/5c3ad49be51d45521053fde0",target:"_blank",rel:"noopener noreferrer"}},[t._v("React 中 getDerivedStateFromProps 的用法和反模式"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=n.exports}}]);