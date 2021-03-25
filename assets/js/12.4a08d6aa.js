(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{407:function(_,v,n){_.exports=n.p+"assets/img/ch08-img01-flow.85b74922.png"},408:function(_,v,n){_.exports=n.p+"assets/img/ch08-img02-buzz.61e0c171.png"},491:function(_,v,n){"use strict";n.r(v);var o=n(20),e=Object(o.a)({},(function(){var _=this,v=_.$createElement,o=_._self._c||v;return o("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[o("h1",{attrs:{id:"【第8章】xray客户端篇"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#【第8章】xray客户端篇"}},[_._v("#")]),_._v(" 【第8章】Xray客户端篇")]),_._v(" "),o("h2",{attrs:{id:"_8-1-xray的工作原理简述"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_8-1-xray的工作原理简述"}},[_._v("#")]),_._v(" 8.1 Xray的工作原理简述")]),_._v(" "),o("p",[_._v("要正确的配置和使用"),o("code",[_._v("Xray")]),_._v("，就需要正确的理解其工作原理，对于新人，可以先看看下面简化的示意图（省略了许多复杂的设置）：")]),_._v(" "),o("img",{attrs:{src:n(407),alt:"Xray数据流向"}}),_._v(" "),o("p",[_._v("这其中的关键点是：")]),_._v(" "),o("ol",[o("li",[o("p",[_._v("APP要主动或借助转发工具，将数据【流入("),o("code",[_._v("inbounds")]),_._v(")】"),o("code",[_._v("Xray")]),_._v(" 客户端")])]),_._v(" "),o("li",[o("p",[_._v("流量进入客户端后，会被【客户端路由("),o("code",[_._v("routing")]),_._v(")】按规则处理后，向不同方向【流出"),o("code",[_._v("(outbounds)")]),_._v("】"),o("code",[_._v("Xray")]),_._v(" 客户端。比如：")]),_._v(" "),o("ol",[o("li",[_._v("国内流量直连（"),o("code",[_._v("direct")]),_._v("）")]),_._v(" "),o("li",[_._v("国外流量转发VPS（"),o("code",[_._v("proxy")]),_._v("）")]),_._v(" "),o("li",[_._v("广告流量屏蔽（"),o("code",[_._v("block")]),_._v("）")])])]),_._v(" "),o("li",[o("p",[_._v("向VPS转发的国外流量，会跨过防火墙，【流入("),o("code",[_._v("inbounds")]),_._v(")】 "),o("code",[_._v("Xray")]),_._v(" 服务器端")])]),_._v(" "),o("li",[o("p",[_._v("流量进入服务器端后，与客户端一样，会被【服务器端路由("),o("code",[_._v("routing")]),_._v(")】按规则处理后，向不同方向【流出"),o("code",[_._v("(outbounds)")]),_._v("】：")]),_._v(" "),o("ol",[o("li",[_._v("因为已经在防火墙之外，所以流量默认直连，你就可以访问到不存在网站们了（"),o("code",[_._v("direct")]),_._v("）")]),_._v(" "),o("li",[_._v("如果需要在不同的VPS之间做链式转发，就可以继续配置转发规则（"),o("code",[_._v("proxy")]),_._v("）")]),_._v(" "),o("li",[_._v("你可以在服务器端继续禁用各种你想禁用的流量，如广告、BT下载等（"),o("code",[_._v("block")]),_._v("）")])])])]),_._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[_._v("注意")]),_._v(" "),o("p",[o("strong",[_._v("注意：")]),_._v(" 请务必记得，"),o("code",[_._v("Xray")]),_._v(" 的路由配置非常灵活，上面的说明只是无限可能性中的一种。")]),_._v(" "),o("p",[_._v("借助 "),o("code",[_._v("geosite.dat")]),_._v(" 和 "),o("code",[_._v("geoip.dat")]),_._v(" 这两个文件，可以很灵活的从【域名】和【IP】这两个角度、不留死角的控制流量流出的方向。这比曾经单一笼统的 "),o("code",[_._v("GFWList")]),_._v(" 强大很多很多，可以做到非常细致的微调：比如可以指定Apple域名直连或转发、指定亚马逊域名代理或转发，百度的域名屏蔽等等。。。）")]),_._v(" "),o("p",[_._v("现在，"),o("a",{attrs:{href:"../../level-1/routing-lv1-part1"}},[_._v("《路由 (routing) 功能简析》")]),_._v(" 已经上线，我建议对路由功能有兴趣的同学，先继续跟着本文完成客户端的基础配置，之后再去这里详细学习。")])]),_._v(" "),o("h2",{attrs:{id:"_8-2-客户端与服务器端正确连接"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_8-2-客户端与服务器端正确连接"}},[_._v("#")]),_._v(" 8.2 客户端与服务器端正确连接")]),_._v(" "),o("p",[_._v("现在你已经理解了 "),o("code",[_._v("Xray")]),_._v(" 的工作原理，那么接下来的配置，其实就是【告诉你的客户端如何连接VPS服务器】。这和你已经很熟悉的、告诉"),o("code",[_._v("PuTTY")]),_._v("如何远程连接服务器是一样的。只不过Xray连接时的要素不止是【IP地址】+【端口】+【用户名】+【密码】这四要素了。")]),_._v(" "),o("p",[_._v("实际上，"),o("code",[_._v("Xray")]),_._v("的连接要素是由不同的"),o("RouterLink",{attrs:{to:"/config/inbound-protocols/"}},[_._v("协议")]),_._v("决定的。本文在第7章的配置文件 "),o("code",[_._v("config.json")]),_._v(" 里，我们使用 "),o("code",[_._v("Xray")]),_._v(" 下独特而强大的 "),o("code",[_._v("VLESS")]),_._v(" 协议 + "),o("code",[_._v("XTLS")]),_._v(" 流控。所以看看那个配置文件的内容就能知道，这个协议组合的连接要素有：")],1),_._v(" "),o("ul",[o("li",[_._v("服务器【地址】: "),o("code",[_._v("a-name.yourdomain.com")])]),_._v(" "),o("li",[_._v("服务器【端口】: "),o("code",[_._v("443")])]),_._v(" "),o("li",[_._v("连接的【协议】: "),o("code",[_._v("vless")])]),_._v(" "),o("li",[_._v("连接的【流控】: "),o("code",[_._v("xtls-rprx-direct")]),_._v(" (direct模式适合全平台，若是Linux/安卓用户，可改成 "),o("code",[_._v("xtls-rprx-splice")]),_._v(" 性能全开)")]),_._v(" "),o("li",[_._v("连接的【验证】: "),o("code",[_._v("uuiduuid-uuid-uuid-uuiduuiduuid")])]),_._v(" "),o("li",[_._v("连接的【安全】: "),o("code",[_._v('"allowInsecure": false')])])]),_._v(" "),o("p",[_._v("鉴于新人一般都会使用手机APP或者电脑的GUI客户端，我就把常用的客户端罗列在下面。每个客户端都有自己独特的配置界面，逐一截图展示并不现实，所以请你务必仔细阅读这些客户端的说明、然后把上述要素填入合适的地方即可。")]),_._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[_._v("注意")]),_._v(" "),o("p",[_._v("许多工具其实是同时支持 "),o("code",[_._v("xray-core")]),_._v(" 和 "),o("code",[_._v("v2fly-core")]),_._v(" 的，但默认内置的不一定是哪个，所以别忘记检查一下是否是你想要的那个在工作哦！")])]),_._v(" "),o("ul",[o("li",[o("p",[o("strong",[_._v("v2rayN - 适用于Windows平台")])]),_._v(" "),o("ul",[o("li",[_._v("请从它的"),o("a",{attrs:{href:"https://github.com/2dust/v2rayN/releases",target:"_blank",rel:"noopener noreferrer"}},[_._v("GitHub仓库Release页面"),o("OutboundLink")],1),_._v("获取最新版")]),_._v(" "),o("li",[_._v("请根据该客户端的说明进行设置")])])]),_._v(" "),o("li",[o("p",[o("strong",[_._v("v2rayNG - 适用于Android平台")])]),_._v(" "),o("ul",[o("li",[_._v("请从它的"),o("a",{attrs:{href:"https://github.com/2dust/v2rayNG/releases",target:"_blank",rel:"noopener noreferrer"}},[_._v("GitHub仓库Release页面"),o("OutboundLink")],1),_._v("获取最新版")]),_._v(" "),o("li",[_._v("请根据该客户端的说明进行设置")])])]),_._v(" "),o("li",[o("p",[o("strong",[_._v("Shadowrocket - 适用于iOS, 基于苹果M芯片的macOS")])]),_._v(" "),o("ul",[o("li",[_._v("你需要注册一个【非中国区】的iCloud账户")]),_._v(" "),o("li",[_._v("你需要通过 App Store 搜索并购买")]),_._v(" "),o("li",[_._v("请根据该客户端的说明进行设置")])])]),_._v(" "),o("li",[o("p",[o("strong",[_._v("Qv2ray - 跨平台图形界面，适用于Linux, Windows, macOS")])]),_._v(" "),o("ul",[o("li",[_._v("请从它的"),o("a",{attrs:{href:"https://github.com/Qv2ray/Qv2ray/releases",target:"_blank",rel:"noopener noreferrer"}},[_._v("GitHub仓库Release页面"),o("OutboundLink")],1),_._v("获取最新版（还可以从它的"),o("a",{attrs:{href:"https://github.com/Qv2ray/Qv2ray/actions",target:"_blank",rel:"noopener noreferrer"}},[_._v("GitHub自动构建仓库"),o("OutboundLink")],1),_._v("寻找更新的版本）")]),_._v(" "),o("li",[_._v("请从它的"),o("a",{attrs:{href:"https://qv2ray.net/",target:"_blank",rel:"noopener noreferrer"}},[_._v("项目主页"),o("OutboundLink")],1),_._v("学习文档")]),_._v(" "),o("li",[_._v("请根据该客户端的说明进行设置")])])])]),_._v(" "),o("p",[_._v("到这一步，你的全套配置就已经可以正常使用啦！")]),_._v(" "),o("h2",{attrs:{id:"_8-3-附加题-1-在pc端手工配置-xray-core"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_8-3-附加题-1-在pc端手工配置-xray-core"}},[_._v("#")]),_._v(" 8.3 附加题 1：在PC端手工配置 "),o("code",[_._v("xray-core")])]),_._v(" "),o("p",[_._v("虽然到上面一步已经可以结束了，但是如果你是个好奇心强、记忆力好的的同学，一定会想起来我在上一章说过，你把"),o("code",[_._v("xray-core")]),_._v(" 的二进制文件“放在服务器运行，它就是服务器端；你把它下载到本地电脑运行，它就是客户端。” 那究竟要怎样直接使用 "),o("code",[_._v("xray-core")]),_._v(" 做客户端呢？")]),_._v(" "),o("p",[_._v("为了回答这个问题，我加入了附加题章节，有一点点超纲，有一点点麻烦，但费这个笔墨是因为这个方式有它的优势：")]),_._v(" "),o("ul",[o("li",[o("p",[_._v("第一时间获得最新版而无需等待APP升级适配")])]),_._v(" "),o("li",[o("p",[_._v("灵活自由的路由配置能力（当然GUI客户端中Qv2ray的高级路由编辑器非常强大，也可以完整实现xray-core的路由配置功能）")])]),_._v(" "),o("li",[o("p",[_._v("节约系统资源 （GUI界面一定会有资源消耗，消耗的多少则取决于客户端的实现）")])])]),_._v(" "),o("p",[_._v("它的劣势应该就是【需要手写配置文件】有点麻烦了。但其实，你想想，服务器上你已经成功的写过一次了，现在又有什么区别呢？接下来，还是老样子，我们分解一下步骤：")]),_._v(" "),o("ol",[o("li",[o("p",[_._v("首先请从Xray官方的 "),o("a",{attrs:{href:"https://github.com/XTLS/Xray-core/releases",target:"_blank",rel:"noopener noreferrer"}},[_._v("GitHub仓库Release页面"),o("OutboundLink")],1),_._v(" 获取对应平台的版本，并解压缩到合适的文件夹")])]),_._v(" "),o("li",[o("p",[_._v("在合适的文件夹建立空白配置文件："),o("code",[_._v("config.json")]),_._v(" （自己常用平台下新建文件大家肯定都会，这就真不用啰嗦了）")])]),_._v(" "),o("li",[o("p",[_._v("至于什么是“合适的文件夹”？这就取决于具体的平台了~")])]),_._v(" "),o("li",[o("p",[_._v("填写客户端配置")]),_._v(" "),o("ul",[o("li",[_._v("我就以 "),o("code",[_._v("8.1")]),_._v(" 原理说明里展示的基本三类分流（国内流量直连、国际流量转发VPS、广告流量屏蔽），结合 "),o("code",[_._v("8.2")]),_._v(" 的连接要素，写成一个配置文件")]),_._v(" "),o("li",[_._v("请将 "),o("code",[_._v("uuid")]),_._v(" 替换成与你服务器一致的 "),o("code",[_._v("uuid")])]),_._v(" "),o("li",[_._v("请将 "),o("code",[_._v("address")]),_._v(" 替换成你的真实域名")]),_._v(" "),o("li",[_._v("请将 "),o("code",[_._v("serverName")]),_._v(" 替换成你的真实域名")]),_._v(" "),o("li",[_._v("各个配置模块的说明我都已经（很啰嗦的）放在对应的配置点上了")])]),_._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[_._v('// REFERENCE:\n// https://github.com/XTLS/Xray-examples\n// https://xtls.github.io/config/\n    \n// 常用的config文件，不论服务器端还是客户端，都有5个部分。外加小小白解读：\n// ┌─ 1_log          日志设置 - 日志写什么，写哪里（出错时有据可查）\n// ├─ 2_dns          DNS-设置 - DNS怎么查（防DNS污染、防偷窥、避免国内外站匹配到国外服务器等）\n// ├─ 3_routing      分流设置 - 流量怎么分类处理（是否过滤广告、是否国内外分流）\n// ├─ 4_inbounds     入站设置 - 什么流量可以流入Xray\n// └─ 5_outbounds    出站设置 - 流出Xray的流量往哪里去\n    \n    \n{\n    // 1_日志设置\n    // 注意，本例中我默认注释掉了日志文件，因为windows, macOS, Linux 需要写不同的路径，请自行配置\n    "log": {\n        // "access": "/home/local/xray_log/access.log",    // 访问记录\n        // "error": "/home/local/xray_log/error.log",    // 错误记录\n        "loglevel": "warning"        // 内容从少到多: "none", "error", "warning", "info", "debug" \n    },\n    \n    // 2_DNS设置\n    "dns": {\n        "servers": [\n            // 2.1 国外域名使用国外DNS查询\n            {\n                "address": "1.1.1.1",\n                "domains": [\n                    "geosite:geolocation-!cn"\n                ]\n            },\n            // 2.2 国内域名使用国内DNS查询，并期待返回国内的IP，若不是国内IP则舍弃，用下一个查询\n            {\n                "address": "223.5.5.5",\n                "domains": [\n                    "geosite:cn"\n                ],\n                "expectIPs": [\n                    "geoip:cn"\n                ]\n            },\n            // 2.3 作为2.2的备份，对国内网站进行二次查询\n            {\n                "address": "114.114.114.114",\n                "domains": [\n                    "geosite:cn"\n                ]\n            },\n            // 2.4 最后的备份，上面全部失败时，用本机DNS查询\n            "localhost"\n        ]\n    },\n    \n    // 3_分流设置\n    // 所谓分流，就是将符合否个条件的流量，用指定`tag`的出站协议去处理（对应配置的5.x内容）\n    "routing": {\n        "domainStrategy": "AsIs",\n        "rules": [\n            // 3.1 广告域名屏蔽\n            {\n                "type": "field",\n                "domain": [\n                    "geosite:category-ads-all"\n                ],\n                "outboundTag": "block"\n            },\n            // 3.2 国内域名直连\n            {\n                "type": "field",\n                "domain": [\n                    "geosite:cn"\n                ],\n                "outboundTag": "direct"\n            },\n            // 3.3 国内IP直连\n            {\n                "type": "field",\n                "ip": [\n                    "geoip:cn",\n                    "geoip:private"\n                ],\n                "outboundTag": "direct"\n            },\n            // 3.4 国外域名代理\n            {\n                "type": "field",\n                "domain": [\n                    "geosite:geolocation-!cn"\n                ],\n                "outboundTag": "proxy"\n            }\n            // 3.5 默认规则\n            // 在Xray中，任何不符合上述路由规则的流量，都会默认使用【第一个outbound（5.1）】的设置，所以一定要把转发VPS的outbound放第一个\n        ]\n    },\n\n    // 4_入站设置\n    "inbounds": [\n        // 4.1 一般都默认使用socks5协议作本地转发\n        {\n            "tag": "socks-in",\n            "protocol": "socks",\n            "listen": "127.0.0.1",   // 这个是通过socks5协议做本地转发的地址\n            "port": 10800,           // 这个是通过socks5协议做本地转发的端口\n            "settings": {\n                "udp": true\n            }\n        },\n        // 4.2 有少数APP不兼容socks协议，需要用http协议做转发，则可以用下面的端口\n        {\n            "tag": "http-in",\n            "protocol": "http",\n            "listen": "127.0.0.1",   // 这个是通过http协议做本地转发的地址\n            "port": 10801            // 这个是通过http协议做本地转发的端口\n        }\n    ],\n    \n    // 5_出站设置\n    "outbounds": [\n    // 5.1 默认转发VPS\n    // 一定放在第一个，在routing 3.5 里面已经说明了，这等于是默认规则，所有不符合任何规则的流量都走这个\n        {\n            "tag": "proxy",\n            "protocol": "vless",\n            "settings": {\n                "vnext": [\n                    {\n                        "address": "a-name.yourdomain.com",  // 替换成你的真实域名\n                        "port": 443,\n                        "users": [\n                            {\n                                "id": "uuiduuid-uuid-uuid-uuid-uuiduuiduuid",  // 和服务器端的一致\n                                "flow": "xtls-rprx-direct",       // Windows, macOS 同学保持这个不变\n                                // "flow": "xtls-rprx-splice",    // Linux和安卓同学请改成Splice性能更强\n                                "encryption": "none",\n                                "level": 0\n                            }\n                        ]\n                    }\n                ]\n            },\n            "streamSettings": {\n                "network": "tcp",\n                "security": "xtls",\n                "xtlsSettings": {\n                    "serverName": "a-name.yourdomain.com",  // 替换成你的真实域名\n                    "allowInsecure": false  // 禁止不安全证书\n                }\n            }\n        },\n        // 5.2 用`freedom`协议直连出站，即当routing中指定\'direct\'流出时，调用这个协议做处理\n        {\n            "tag": "direct",\n            "protocol": "freedom"\n        },\n        // 5.3 用`blackhole`协议屏蔽流量，即当routing中指定\'block\'时，调用这个协议做处理\n        {\n            "tag": "block",\n            "protocol": "blackhole"\n        }\n    ]    \n}\n')])])])])]),_._v(" "),o("h2",{attrs:{id:"_8-4-附加题-2-在pc端手工运行-xray-core"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_8-4-附加题-2-在pc端手工运行-xray-core"}},[_._v("#")]),_._v(" 8.4 附加题 2：在PC端手工运行 "),o("code",[_._v("xray-core")])]),_._v(" "),o("p",[_._v("写好了配置文件该，要怎么让 "),o("code",[_._v("xray-core")]),_._v(" 运行起来呢？双击好像并没有反应啊？")]),_._v(" "),o("p",[_._v("首先，你要找到电脑上的【命令行界面】。")]),_._v(" "),o("ol",[o("li",[_._v("Linux桌面、macOS系统的同学肯定已经比较熟悉了，搜索 "),o("code",[_._v("Console")]),_._v(" 或者 "),o("code",[_._v("Terminal")]),_._v(" 就可以")]),_._v(" "),o("li",[_._v("Windows就可以搜索使用 "),o("code",[_._v("Cmd")]),_._v(" 或者 "),o("code",[_._v("Powershell")]),_._v(" 等程序（WSL的同学你坐下，你的 "),o("code",[_._v("Console")]),_._v(" 当然也可以）")])]),_._v(" "),o("p",[_._v("其次，我们要做的事情是【让 "),o("code",[_._v("xray")]),_._v(" 找到并读取配置文件 "),o("code",[_._v("config.json")]),_._v("，然后运行】，所以：")]),_._v(" "),o("ol",[o("li",[o("p",[_._v("在Windows下，假设你的 "),o("code",[_._v("Xray")]),_._v(" 程序位置是 "),o("code",[_._v("C:\\Xray-windows-64\\xray.exe")]),_._v("，配置文件位置是"),o("code",[_._v("C:\\Xray-windows-64\\config.json")]),_._v("，那么正确的启动命令就是：")]),_._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[_._v("C:\\Xray-windows-64\\xray.exe -c C:\\Xray-windows-64\\config.json\n")])])]),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[_._v("说明")]),_._v(" "),o("p",[_._v("这里的 "),o("code",[_._v("-c")]),_._v(" 就是指定配置文件路径的参数，告诉 "),o("code",[_._v("xray")]),_._v(" 去后面的位置找配置文件")])])]),_._v(" "),o("li",[o("p",[_._v("相似的，在Linux和macOS下，假设你的 "),o("code",[_._v("Xray")]),_._v(" 程序位置是 "),o("code",[_._v("/usr/local/bin/xray")]),_._v("，配置文件位置是"),o("code",[_._v("/usr/local/etc/xray/config.json")]),_._v("，那么正确的启动命令就是")]),_._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[_._v("$ /usr/local/bin/xray -c /usr/local/etc/xray/config.json\n")])])]),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[_._v("说明")]),_._v(" "),o("p",[_._v("每个系统都有系统路径变量，所以写 "),o("code",[_._v("Xray")]),_._v(" 程序时不一定要写绝对路径。但是写了肯定没错，所以我就如此演示了。")])])])]),_._v(" "),o("h2",{attrs:{id:"_8-5-附加题-3-在pc端开机自动运行-xray-core"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_8-5-附加题-3-在pc端开机自动运行-xray-core"}},[_._v("#")]),_._v(" 8.5 附加题 3：在PC端开机自动运行 "),o("code",[_._v("xray-core")])]),_._v(" "),o("p",[_._v("如果你真的尝试了手动运行 "),o("code",[_._v("xray-core")]),_._v("，你一定会发现这个方式还有点小问题：")]),_._v(" "),o("ol",[o("li",[_._v("每次运行 "),o("code",[_._v("Xray")]),_._v(" 都要出现一个黑乎乎的窗口，很丑")]),_._v(" "),o("li",[_._v("不能开机自动运行，每次都要手工输入，十分不方便")])]),_._v(" "),o("p",[_._v("我可以肯定的告诉你："),o("strong",[_._v("完全可以解决")]),_._v("。但是具体的解决方式，就当作课外作业留给大家吧！（友情提示，文档站的问答区有线索哦）")]),_._v(" "),o("h2",{attrs:{id:"_8-6-圆满完成"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_8-6-圆满完成"}},[_._v("#")]),_._v(" 8.6 圆满完成！")]),_._v(" "),o("p",[_._v("我相信，有耐心看到这里的同学，都是兼具好奇心和行动力的学习派！我现在要郑重的恭喜你，因为到了这里，你已经完完整整的【"),o("strong",[_._v("从第一条命令开始，完成了VPS服务器部署，并成功的在客户端配置使用Xray")]),_._v("】了！这毫无疑问是一个巨大的胜利！")]),_._v(" "),o("p",[_._v("我相信，你现在一定对"),o("code",[_._v("Linux")]),_._v("不再恐惧，对"),o("code",[_._v("Xray")]),_._v("不再陌生了吧！")]),_._v(" "),o("p",[o("strong",[_._v("至此，小小白白话文圆满结束！")])]),_._v(" "),o("blockquote",[o("p",[_._v("⬛⬛⬛⬛⬛⬛⬛⬛ 100%")])]),_._v(" "),o("h2",{attrs:{id:"_8-7-to-infinity-and-beyond"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_8-7-to-infinity-and-beyond"}},[_._v("#")]),_._v(" 8.7 TO INFINITY AND BEYOND!")]),_._v(" "),o("p",[o("strong",[_._v("但现在你看到的，远远不是Xray的全貌。")])]),_._v(" "),o("p",[o("code",[_._v("Xray")]),_._v("是一个强大而丰富的网络工具集合，平台化的提供了众多模块，可以像瑞士军刀一样，通过灵活的配置组合解决各种不同的问题。而本文，仅仅蜻蜓点水的用了"),o("strong",[_._v("最简单")]),_._v("、"),o("strong",[_._v("最直观")]),_._v("的配置来做"),o("strong",[_._v("基础演示")]),_._v("。")]),_._v(" "),o("p",[_._v("如果你觉得现在已经完全够用了，那就好好的享受它给你带来的信息自由。但如果你的好奇心依然不能停歇，那就去继续挖掘它无限的可能性吧！")]),_._v(" "),o("p",[_._v("需要更多信息，可以到这里寻找：")]),_._v(" "),o("ol",[o("li",[o("a",{attrs:{href:"https://xtls.github.io/",target:"_blank",rel:"noopener noreferrer"}},[_._v("xtls.github.io"),o("OutboundLink")],1),_._v(" - 官方文档站")]),_._v(" "),o("li",[o("a",{attrs:{href:"https://t.me/projectXray",target:"_blank",rel:"noopener noreferrer"}},[_._v("官方Telegram群组"),o("OutboundLink")],1),_._v(" - 活跃而友善的官方讨论社区")])]),_._v(" "),o("img",{attrs:{src:n(408),alt:"TO INFINITY AND BEYOND!"}}),_._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[_._v("不算后记的后记")]),_._v(" "),o("p",[_._v("希望我陪你走过的这一段小小的旅程，可以成为你网络生活中的一份小小助力。")]),_._v(" "),o("p",[_._v("这篇文章里的工具和信息难免会一点点的陈旧过时，但你一定会逐渐成长为大佬。未来的某个时间，若你能偶尔想起这篇教程、想起我写下本文的初衷，那我衷心希望你能够薪火相传、把最新的知识分享给后来人，让这一份小小的助力在社区里坚定的传递下去。")]),_._v(" "),o("p",[_._v("这是个大雪封山乌云密布的世界，人们孤独的走在各自的路上试图寻找阳光，如果大家偶尔交汇时不能守望相助互相鼓励，那最终剩下的，恐怕只有【千山鸟飞绝 万径人踪灭】的凄凉了吧。")])])])}),[],!1,null,null,null);v.default=e.exports}}]);