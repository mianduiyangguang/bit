# Jshop小程序商城


#### 项目介绍
Jshop小程序商城，是一款开源的电商系统，为中小企业提供最佳的移动电子商务解决方案。后台采用Thinkphp5.1框架开发，执行效率、扩展性、稳定性值得信赖，前台H5采用VUE开发，增加用户体验。


#### 关于开源
这不是一款免费的系统，商用记得授权哦，当然了，我们目前也不会强制授权，代码没有任何限制。你觉得对你有点用处的话，就拿去用吧，用的好了再顺便授权一下就行。

之所以不彻底免费，一方面是可以让我们有持续维护下去的动力和资源，另外一方面也是不想让您有后顾之忧，避免后期尴尬。

我们的团队水平有限，没有大牛，只有菜鸟，我们也是在探索中学习，在改进。之所以开源，就是为了方便大家，也是为了提升下该项目的质量，我们相信有您的参与，可以使我们的系统更加完善和健壮。


#### 功能介绍

 + 商品管理，单规格、多规格商品管理，品牌、分类管理、商品评价
 + 订单管理，订单支付、发货、取消、售后等
 + 会员管理，会员列表，消息管理等
 + 运营管理，广告管理、文章管理
 + 微信管理，小程序管理、微信公众号管理、模板列表、公众号菜单管理
 + 促销管理，商品促销、订单促销、优惠券、团购秒杀
 + 财务管理，支付单、退款单管理、提现管理、账户资金管理
 + 控制面板，计划任务、插件、图片、地区、消息、店铺配置、支付方式、配送方式、物流公司管理。信任登录插件、阿里云OSS插件、阿里云短信插件、微信消息模板插件、分销功能
 + 门店管理，门店列表。门店核销、店员管理、提货单管理。

#### H5端说明
H5端采用Vue开发，数据和页面分离，可以使前端页面访问效果更好，封装APP时体验效果也更好。H5端可以放在任意地方，比如单独服务器、电脑桌面、PAD、手机、广告机等，没有任何约束。

提供APP打包方案，可支持调起微信、支付宝付款、分享、第三方快捷登录等。

#### 项目演示
- 前台H5演示：[https://b2c.jihainet.com/](https://b2c.jihainet.com/)
- 后台演示：[https://b2c.jihainet.com/manage/](https://b2c.jihainet.com/manage/)
- QQ交流群：823732583
- 小程序体验二维码

![输入图片说明](https://images.gitee.com/uploads/images/2018/1018/184408_a1c0d706_8503.jpeg "gh_03bc4364b4dc_344.jpg")

- 安卓APP体验二维码

![输入图片说明](https://images.gitee.com/uploads/images/2018/1026/163026_31132341_8503.png "1540542519.png")
 


#### 项目截图
![输入图片说明](https://images.gitee.com/uploads/images/2018/1019/104933_383a7831_8503.png "img(1).png")
#### 后台截图
![输入图片说明](https://images.gitee.com/uploads/images/2018/1019/104952_d154e8b4_8503.png "首页.png")
![输入图片说明](https://images.gitee.com/uploads/images/2018/1019/105206_a2dfa9e2_8503.png "商品列表.png")
![输入图片说明](https://images.gitee.com/uploads/images/2018/1019/105222_7caa99b6_8503.png "添加商品.png")
![输入图片说明](https://images.gitee.com/uploads/images/2018/1019/105317_82da6a34_8503.png "添加优惠券.png")


#### 目录结构
初始的目录结构如下：
~~~
wwwroot  WEB部署目录（或者子目录）
├─addons                应用插件目录
├─application           应用目录
│  ├─api                api接口模块目录
│  ├─b2c                前台模块
│  ├─common             公共模块目录
│  ├─crontab            定时任务目录
│  ├─job                任务队列目录
│  ├─manage             后台管理目录
│  ├─wechat             接收微信消息目录
│  ├─command.php        命令行工具配置文件
│  ├─common.php         公共函数文件
│  ├─tags.php           应用行为扩展定义文件
│
├─config                配置文件目录
├─h5                    前台H5源码
├─public                WEB目录（对外访问目录）
│  ├─install            自动安装目录
│  ├─static             前台静态文件
│  ├─wap                前台手机端运行目录
│  ├─index.php          入口文件
│  └─.htaccess          用于apache的重写
│
├─thinkphp              thinkphp框架系统目录
├─update                版本升级包
├─extend                扩展类库目录
├─runtime               应用的运行时目录（可写，可定制）
├─vendor                第三方类库目录（Composer依赖库）
├─wechat_app            微信小程序源码
├─build.php             自动生成定义文件（参考）
├─composer.json         composer 定义文件
├─LICENSE.txt           授权说明文件
├─README.md             README 文件
├─think                 命令行入口文件
├─crontab               定时任务命令行入口文件
~~~

#### 更新说明

2018-11-30 更新内容
1. 优化用户微信信息修复字段兼容问题
2. 修复小程序和H5物流信息展示
3. 增加小程序和H5物流信息详情
4. 优化下单时使用积分和优惠券
5. H5下单增加积分和门店功能
6. 修复小程序海报功能
7. 优化小程序登录
8. 修复积分显示问题
9. 修复推荐问题以及推荐修改
10. 修复订单详情页支付时间问题
11. 优化默认地址提示
12. 优化门店地址
13. 后台增加提现设置、地图设置、快递100设置
14. H5增加订单核销功能
15. 修复支付方式bug
16. 后台付款优化
17. 订单来源修复
18. 用户列表优化
19. 后台样式优化
20. 修复小程序首页团购商品追加显示问题
21. 优化商品重量提示语
22. H5邀请优化

2018-11-23 更新内容，更新请先备份数据库
1. 增加商品分享海报
2. 修复购物车商品详情bug
3. 优化邀请关系绑定
4. 修复门店订单问题
5. 修复申请提现驳回后bug
6. 优化余额变更类型
7. 节点重新优化梳理
8. 优化后台添加图片，选择文件卡的问题（非常感谢热心好友周大静的帮助）
9. 修复设置分类演示图不显示问题（非常感谢热心好友周大静的帮助）
10. 优化团购规格字数超长时显示问题
11. 会员邀请增加生成海报功能
12. 修复三级分销插件无法安装bug

2018-11-16 更新内容，更新请先备份数据库
1. 增加微信公众号菜单
2. 后台物流信息bug修改
3. 积分功能小程序增加签到和开启控制
4. 优化小程序收货地址问题
5. 小程序增加输入优惠券功能
6. 小程序前台布局调整，将进行可视化功能开发
7. H5公众号信任登录优化
8. 小程序增加默认头像
9. 三级分销功能。
10. 修复团购秒杀bug
11. 微信支付配置优化
12. 优化微信小程序会员中心布局
13. 小程序增加一级、二级分类显示控制
14. 门店地址修复
15. H5增加下单使用积分功能
16. 物流公司管理


2018-11-9 更新内容，本次更新有风险，请先备份数据库。 更新文件目录：update
1. 支付证书移动到配置目录
2. H5增加加载gif图优化
3. 修复微信退款
4. 修复微信支付bug
5. 导出任务增加检查机制
6. 修复评论问题
7. 修复小程序商品浏览记录问题
8. 增加门店店员管理
9. 增加阿里云oss图片上传功能
10. 增加小程序团购/秒杀功能
11. 增加微信公众号设置
12. 增加微信H5授权登录
13. 增加提货单管理
14. 商品规格样式优化
15. 增加小程序端核销功能、提货功能
16. 小程序增加门店下单功能
17. 订单确认签收后评价bug修复
18. 优惠券增加后台导出功能
19. 修复安装程序问题

#### 环境要求
- Nginx/Apache/IIS
- PHP5.6+
- MySQL5.5+

建议使用环境：Linux + Nginx1.14 + PHP7 + MySQL5.6

#### 部署说明

[安装部署](https://gitee.com/hnjihai/jshop_mall/wikis/%E5%AE%89%E8%A3%85%E9%83%A8%E7%BD%B2?sort_id=881805)

#### nginx 伪静态配置
~~~
    location / {
        if (!-e $request_filename){
            rewrite  ^(.*)$  /index.php?s=$1  last;   break;
        }
    }
~~~
#### 安全&缺陷
如果你发现了一个安全漏洞或缺陷，请发送邮件到 jima@jihainet.com。所有的安全漏洞都将及时得到解决。


#### License

Jshop小程序商城遵循JPPL（吉海科技Jshop系列付费产品许可）协议。

本项目包含的第三方源码和二进制文件之版权信息另行标注。

版权所有Copyright © 2018 by 吉海科技 (https://www.jihainet.com)

All rights reserved。

吉海科技Jshop系列付费产品许可协议详情请参阅 [LICENSE.txt](LICENSE.txt)