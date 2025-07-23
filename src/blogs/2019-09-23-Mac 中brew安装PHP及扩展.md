---
title: Mac 中brew安装PHP及扩展
cover: 
icon: pen-to-square
date: 2019-09-23
category:
  - 软件安装
tag:
  - Mac
  - brew
  - php
---


### Mac 中brew安装PHP及扩展
#### brew安装php

```
    brew search php  使用此命令搜索可用的PHP版本
    brew install php@7.1 使用此命令安装指定版本的php
    brew install brew-php-switcher 安装php多版本切换工具
    brew-php-switcher 7.1 切换PHP版本到7.1（需要brew安装多个版本）
	
	brew tap exolnet/homebrew-deprecated
	brew install php@5.6 -vvv
```

<!-- more -->

PHP -v 查询版本信息，确定是否安装成功（如果显示的是系统自带版本，则需要配置环境变量，修改~/.bash_profile中/usr/local/bin的优先级）

#### brew安装PHP扩展

```
pecl version 查看版本信息
pecl help 可以查看命令帮助
pecl search xdebug  搜索可以安装的扩展信息
pecl install xdebug 安装扩展

```
#### 配置扩展

因为PHP@7.2的默认扩展目录为/usr/local/Cellar/php@7.2/7.2.15/lib/php/20170718
所以我们可以直接将/usr/local/Cellar/php@7.2/7.2.15/pecl/20170718目录下的.so文件复制到默认目录下，然后在/usr/local/etc/php/7.2/conf.d中新建一个扩展配置文件extension.ini，写入配置

```
[xdebug]
zend_extension="xdebug.so"
```

再通过php --ini查看php加载的配置文件路径，并删除php.ini中的

```
zend_extension="xdebug.so"
```