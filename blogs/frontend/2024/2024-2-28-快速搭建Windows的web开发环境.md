---
title: 快速搭建Windows的web开发环境
date: 2024/2/28
tags:
  - Windows
category: 前端
---

# 快速搭建 Windows 的 web 开发环境

## 搭建 web 环境

主体思路使用 Chocolatey 搭建统一的环境

### 安装 chocolatey

> [Chocolatey](https://gitee.com/link?target=https%3A%2F%2Fchocolatey.org%2F)是 Windows 平台上的包管理器，通过它可以集中安装、管理、更新各种各样的软件。

> [Chocolatey](https://gitee.com/link?target=https%3A%2F%2Fchocolatey.org%2F)是和 apt-get，brew 差不都的一个东西。特别适合管理一些小众、轻量的开源软件。 **可以一条命令更新全部软件**，除了直接自动化从程序官网拽安装包，自动化安装外。官方的源里面，还有一些绿化的软件、净化软件可以开袋即食。 总体而言，如果不想特殊设置的话，Chocolatey 整体的操作与使用还是比较亲民的。 ###安装教程 chocolate 的安装也很简单，官网[https://chocolatey.org/](https://gitee.com/link?target=https%3A%2F%2Fchocolatey.org%2F) 上有非常详细的说明，只需要几条命令即可。

1. 以管理员模式打开 Windows 系统中 powershell

2. 在 powershell 中运行命令`Get-ExecutionPolicy`以查看其运行策略，显示 AllSigned 可以进行下一步操作，如果显示 Restricted，则执行`Set-ExecutionPolicy AllSigned`，修改运行策略。

3. 在 powershell 中运行以下命令安装 chocolatey

   ```bash
   Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
   ```

4. 确认是否安装成功，运行`choco`，得到版本号。

5. chocolatey 升级方法

   升级非常简单，只需要一行命令即可`choco upgrade chocolatey`。

6. 常用命令

   ```bash
   choco search <keyword>    搜索软件
   choco list <keyword>  跟 search 命令功能类似
   choco install <package1 package2 package3...>  安装软件
   choco install <package>  -version *** 安装指定版本
   choco uninstall name 卸载软件
   choco version <package>  查看安装包的版本情况
   choco upgrade <package>   更新某个软件
   choco list -localonly        查看一下所有安装在本地的包的列表
   choco list -lo       功能同上
   ```

7. 批量安装软件方法

支持批量安装软件，特别适合装机的朋友，把常用的软件写在命令里面即可，例如：安装谷歌浏览器、7zip 和微信

```
choco install --yes 7zip googlechrome wechat
```

> --yes 是自动安装，不加的话每一步都要输入 y 确认安装

7.  批量升级软件方法

```bash
choco upgrade all
```

### 安装 Node

1. 以管理员身份打开 powershell 窗口
2. 运行`choco search node.js`，搜索 node.js 版本
3. 安装指定版本`choco install nodejs -version 21.6.2`，或者安装最新版本`choco install nodejs`
4. 重新打开一个 powershell 窗口，运行`node --version`检查是否安装成功
5. 升级 node.js 到最新版本`choco  upgrade nodejs`或者升级到指定版本`choco  upgrade nodejs -version 7.3.0`

### 安装 Node 版本管理工具 NVM

1. 以管理员身份打开 powershell 窗口

2. 运行`choco install nvm`

3. 重新打开一个 powershell 窗口，运行`node --version`检查是否安装成功

4. 常用命令

   ```
   nvm ls available       查看可以安装的版本
   nvm install 版本号      安装指定版本
   nvm uninstall 版本号    卸载指定版本
   nvm current            当前最新版本
   nvm list               显示已安装的列表
   nvm use 版本号          使用指定版本
   nmv root               安装目录
   ```

### 安装 Yarn

1. 以管理员身份打开 powershell 窗口
2. 运行`choco install yarn`
3. 重新打开一个 powershell 窗口，运行`yarn --version`检查是否安装成功

### 安装 Git

参考：[Git 详细安装教程（详解 Git 安装过程的每一个步骤）\_git 安装-CSDN 博客](https://blog.csdn.net/mukes/article/details/115693833)

### 安装编辑器

- vscode
- webStorm，淘宝激活

## 搭建 Flutter 环境

### 安装 JAVA

1. 以管理员身份打开 powershell 窗口
2. 运行`choco install jdk8`
3. 重新打开一个 powershell 窗口，运行`java --version`检查是否安装成功

### 安装 JAVA 版本管理工具 SDKMAN

首先确保 Git Bash 已经安装成功，安装 sdkman 所需要工具包有 curl、unzip、zip 和 sed。

1. 打开 git bash 窗口查看工具包是否已安装

   ```
   curl -V
   unzip -v
   sed --version
   ```

   显示版本号表示安装成功。

2. zip 工具包需要单独安装

   下载地址：[https://sourceforge.net/projects/gnuwin32/files/](https://links.jianshu.com/go?to=https%3A%2F%2Fsourceforge.net%2Fprojects%2Fgnuwin32%2Ffiles%2F)并找到 zip

   ![image-20240223152946839](../../image/image-20240223152946839.png)

   ![image-20240223153043767](../../image/image-20240223153043767.png)

   下载完 zip-3.0-bin.zip 之后，把里面的 zip.exe 复制到 Git Bash 下 mingw\bin 目录下

3. 运行`curl -s "https://get.sdkman.io" | bash`，注意这个地址不是很稳定，也有一定几率网络连接失败，可以多试试。

4. 在重新打开一个 Git Bash 或者执行下面的命令就可以把 sdkman 加入到 PATH 中，然后就可以使用 sdk 命令了

   ```bash
   source "$HOME/.sdkman/bin/sdkman-init.sh"
   ```

5. 运行`sdk version`，查看版本

6. SDKMAN 基础使用

   ```bash
   $ sdk help

   Usage: sdk <command> [candidate] [version]
          sdk offline <enable|disable>

      commands:
          install   or i    <candidate> [version] [local-path]
          uninstall or rm   <candidate> <version>
          list      or ls   [candidate]
          use       or u    <candidate> <version>
          default   or d    <candidate> [version]
          current   or c    [candidate]
          upgrade   or ug   [candidate]
          version   or v
          broadcast or b
          help      or h
          offline           [enable|disable]
          selfupdate        [force]
          update
          flush             <broadcast|archives|temp>

      candidate  :  the SDK to install: groovy, scala, grails, gradle, kotlin, etc.
                    use list command for comprehensive list of candidates
                    eg: $ sdk list
      version    :  where optional, defaults to latest stable if not provided
                    eg: $ sdk install groovy
      local-path :  optional path to an existing local installation
   ```

7. 使用 sdk 安装 maven（前端不装）

   ```bash
   $ sdk ls maven
   ================================================================================
   Available Maven Versions
   ================================================================================
      * 3.6.3
        3.6.2
        3.6.1
        3.6.0
        3.5.4
        3.5.3
        3.5.2
        3.5.0
        3.3.9
   ================================================================================
   + - local version
   * - installed
   > - currently in use
   ================================================================================
   ```

   ```bash
   $ sdk install maven 3.6.3
   Downloading: maven 3.6.3
   In progress...
   ######################################################################## 100.0%
   Installing: maven 3.6.3
   Done installing!
   Setting maven 3.6.3 as default.
   ```

   ```bash
   $ mvn -v
   Apache Maven 3.6.3 (cecedd343002696d0abb50b32b541b8a6ba2883f)
   Maven home: C:\Users\gary.fu\.sdkman\candidates\maven\current
   Java version: 11.0.3, vendor: Amazon.com Inc., runtime: C:\softs\Java\jdk11.0.3_7
   Default locale: zh_CN, platform encoding: GBK
   OS name: "windows 7", version: "6.1", arch: "amd64", family: "windows"
   ```

### 安装 Flutter

1. 以管理员身份打开 powershell 窗口
2. 运行`choco install flutter`
3. 重新打开一个 powershell 窗口，运行`flutter --version`检查是否安装成功

### 安装 Flutter 版本管理工具 FVM

1. 以管理员身份打开 powershell 窗口

2. 运行`dart pub global activate fvm`或者`choco install fvm`

3. 重新打开一个 powershell 窗口，运行`fvm --version`检查是否安装成功

4. FVM 基础使用

   ```bash
   fvm releases       	  查看可用的flutter发行版本
   fvm install 版本号  	安装指定版本
   fvm list           	  查看已安装的版本
   fvm use 版本号         切换指定版本
   fvm uninstall 版本号   卸载指定版本
   fvm flutter --version 查看当前目录的版本信息
   ```

### 安装 Android Studio

1. 下载地址[Download Android Studio & App Tools - Android Developers](https://developer.android.com/studio)，同意协议后开始下载

2. 根据引导程序安装完成，详细过程可以网上找教程。

3. 下载 Android SDK

   ![image-20240223162029373](../../image/image-20240223162029373.png)

   根据需要勾选常用的 SDK

   ![image-20240223162157981](../../image/image-20240223162157981.png)

   下载 Android SDK Command-line Tools

   ![image-20240223171356398](../../image/image-20240223171356398.png)

   ### 运行 flutter 项目

   1. 运行`flutter doctor`检查 flutter 所需依赖是否完备

      ![image-20240223171807951](../../image/image-20240223171807951.png)

   2. 运行`flutter doctor --android-licenses`接受安卓协议

   3. 使用 fvm 安装多几个 flutter 版本，下载慢可以从浏览器下载压缩包拖到 fvm 的 version 文件夹中

      ```bash
      fvm install 3.19.1
      fvm install 3.16.9
      ```

      fvm 下载地址参考如下![image-20240223175338562](../../image/image-20240223175338562.png)

   4. 打开 Android Studio，新建 Flutter 项目

      ![image-20240223172104519](../../image/image-20240223172104519.png)

   5. 设置 flutter sdk 路径

      ![image-20240223175739619](../../image/image-20240223175739619.png)

   6. 配置 flutter sdk 路径

      ![image-20240226101330855](../../image/image-20240226101330855.png)

   7. 配置项目名称，只勾选 Android、ios、web，开始创建项目

      ![image-20240226101536950](../../image/image-20240226101536950.png)

   8. 第一次跑项目会非常漫长，可能要 30 分钟，请耐心等待

## 进阶

### Windows 通过 Git Bash 配置 Oh My Zsh

参考：[Windows 通过 Git Bash 配置 Oh My Zsh - Seepine's Blog](https://www.seepine.com/git/oh-my-zsh/)

​

### 谷歌插件

参考：https://juejin.cn/post/6998300409173377032#heading-14

## 常见问题

### Windows 使用 fvm use 命令报错

![image-20240226160110548](../../image/image-20240226160110548.png)

需要开启开发人员模式

![image-20240226160207125](../../image/image-20240226160207125.png)

## GitLab 拉取代码

内网权限必须先开放，hosts 映射设置完成

1. 询问 gitlab 账号，并进项目

2. 完成 google authenticator 绑定

3. 设置 Access Tokens

   ![image-20240226172705470](../../image/image-20240226172705470.png)

4. 拼接 git 仓库地址

   例如：

   ​ Access Token：glpat-yzrzDzHsmRZ6cXEraAeq

   ​ 仓库地址为：git@git.xxx.com:frontend/xxxxxxxxxxxxxx.git

   ​ 拼接后为：https://oauth2:glpat-yzrzDzHsmRZ6cXEraAeq@git.xxx.com/frontend/xxxxxxxxxxxxxx.git

5. 如果提示 https 证书错误，使用 `git config --global http.sslVerify false`
