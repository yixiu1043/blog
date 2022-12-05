(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{470:function(t,_,i){"use strict";i.r(_);var v=i(3),n=Object(v.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"jenkins-集群系统配置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#jenkins-集群系统配置"}},[t._v("#")]),t._v(" jenkins + 集群系统配置")]),t._v(" "),_("h2",{attrs:{id:"jenkins配置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#jenkins配置"}},[t._v("#")]),t._v(" jenkins配置")]),t._v(" "),_("h3",{attrs:{id:"新增任务items"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#新增任务items"}},[t._v("#")]),t._v(" 新增任务items")]),t._v(" "),_("ol",[_("li",[t._v("任务名：task_name")]),t._v(" "),_("li",[t._v("勾选Free-style选项")])]),t._v(" "),_("h3",{attrs:{id:"配置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),_("ol",[_("li",[t._v("忽略旧Builds")])]),t._v(" "),_("ul",[_("li",[t._v("Strategy：log rotation")]),t._v(" "),_("li",[t._v("构建文件最小保留天数：30")]),t._v(" "),_("li",[t._v("构建文件最大保留天数：50")])]),t._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[t._v("参数设置\n新增下拉框参数（是否第一次构建）")])]),t._v(" "),_("ul",[_("li",[t._v("名称：init")]),t._v(" "),_("li",[t._v("选项：\n否\n是")])]),t._v(" "),_("p",[t._v("新增下拉框参数（是否需要安装依赖）")]),t._v(" "),_("ul",[_("li",[t._v("名称：npm")]),t._v(" "),_("li",[t._v("选项：\n否\n是")])]),t._v(" "),_("p",[t._v("新增字符串参数（目标git分支）")]),t._v(" "),_("ul",[_("li",[t._v("名称：branch")]),t._v(" "),_("li",[t._v("預設值：dev")])]),t._v(" "),_("p",[t._v("新增字符串参数（拉取的目标版本号）")]),t._v(" "),_("ul",[_("li",[t._v("名称：commit")]),t._v(" "),_("li",[t._v("预设值：HEAD （默认HEAD表示拉取最新版本）")])]),t._v(" "),_("h3",{attrs:{id:"构建"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#构建"}},[t._v("#")]),t._v(" 构建")]),t._v(" "),_("ul",[_("li",[t._v("配置shell脚本\nssh\n#工作目录\ncd /home/jenkins")])]),t._v(" "),_("p",[t._v("#变量\nPROJECT_NAME=task_name\nJOB_NAME=$PROJECT_NAME")]),t._v(" "),_("p",[t._v("#如果是第一次构建\nif [ $init == '是' ] ;then\ngit clone http://xxxx:xxxx/$PROJECT_NAME.git\nfi")]),t._v(" "),_("p",[t._v("cd $PROJECT_NAME")]),t._v(" "),_("p",[t._v("git checkout $branch\ngit pull origin $branch\ngit reset --hard $commit\ngit_ver="),_("code",[t._v("git rev-parse $commit")])]),t._v(" "),_("p",[t._v("#构建nodejs\nif [ $npm == '是' ] ;then\nnpm i --production\nfi")]),t._v(" "),_("p",[t._v('#打包\necho "$git_ver" > /root/.jenkins/workspace/$JOB_NAME/version.txt\nzip -r $JOB_NAME.zip ./* -x version.txt\nmv $JOB_NAME.zip /root/.jenkins/workspace/$JOB_NAME/$JOB_NAME.zip')]),t._v(" "),_("h3",{attrs:{id:"构建后配置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#构建后配置"}},[t._v("#")]),t._v(" 构建后配置")]),t._v(" "),_("ul",[_("li",[t._v("封存成品\n要封存的檔案："),_("em",[t._v(".")])])]),t._v(" "),_("h3",{attrs:{id:"运行build-with-parameters"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#运行build-with-parameters"}},[t._v("#")]),t._v(" 运行Build with Parameters")])])}),[],!1,null,null,null);_.default=n.exports}}]);