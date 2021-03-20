(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{402:function(t,s,a){"use strict";a.r(s);var e=a(26),o=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由"}},[t._v("#")]),t._v(" 路由")]),t._v(" "),a("p",[t._v("路由功能模块可以将入站数据按不同规则由不同的出站连接发出，以达到按需代理的目的。")]),t._v(" "),a("p",[t._v("如常见用法是分流国内外流量，Xray 可以通过内部机制判断不同地区的流量，然后将它们发送到不同的出站代理。")]),t._v(" "),a("h2",{attrs:{id:"routingobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#routingobject"}},[t._v("#")]),t._v(" RoutingObject")]),t._v(" "),a("p",[a("code",[t._v("RoutingObject")]),t._v(" 对应配置文件的 "),a("code",[t._v("routing")]),t._v(" 项。")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"routing"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"domainStrategy"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AsIs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rules"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"balancers"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("domainStrategy")]),t._v(': "AsIs" | "IPIfNonMatch" | "IPOnDemand"')])]),t._v(" "),a("p",[t._v("域名解析策略，根据不同的设置使用不同的策略。")]),t._v(" "),a("ul",[a("li",[a("code",[t._v('"AsIs"')]),t._v("：只使用域名进行路由选择。默认值。")]),t._v(" "),a("li",[a("code",[t._v('"IPIfNonMatch"')]),t._v("：当域名没有匹配任何规则时，将域名解析成 IP（A 记录或 AAAA 记录）再次进行匹配；\n"),a("ul",[a("li",[t._v("当一个域名有多个 A 记录时，会尝试匹配所有的 A 记录，直到其中一个与某个规则匹配为止；")]),t._v(" "),a("li",[t._v("解析后的 IP 仅在路由选择时起作用，转发的数据包中依然使用原始域名；")])])]),t._v(" "),a("li",[a("code",[t._v('"IPOnDemand"')]),t._v("：当匹配时碰到任何基于 IP 的规则，将域名立即解析为 IP 进行匹配；")])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("rules")]),t._v(": ["),a("a",{attrs:{href:"#ruleobject"}},[t._v("RuleObject")]),t._v("]")])]),t._v(" "),a("p",[t._v("对应一个数组，数组中每一项是一个规则。")]),t._v(" "),a("p",[t._v("对于每一个连接，路由将根据这些规则依次进行判断，当一个规则生效时，即将这个连接转发至它所指定的 "),a("code",[t._v("outboundTag")]),t._v("或 "),a("code",[t._v("balancerTag")]),t._v("。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("当没有匹配到任何规则时，流量默认由第一个outbound发出。")])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("balancers")]),t._v(": [ "),a("a",{attrs:{href:"#balancerobject"}},[t._v("BalancerObject")]),t._v(" ]")])]),t._v(" "),a("p",[t._v("一个数组，数组中每一项是一个负载均衡器的配置。")]),t._v(" "),a("p",[t._v("当一个规则指向一个负载均衡器时，Xray 会通过此负载均衡器选出一个 outbound, 然后由它转发流量。")]),t._v(" "),a("h3",{attrs:{id:"ruleobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ruleobject"}},[t._v("#")]),t._v(" RuleObject")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"field"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"domain"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"baidu.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"qq.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"geosite:cn"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ip"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.0.0.0/8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"10.0.0.0/8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fc00::/7"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fe80::/10"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"geoip:cn"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"53,443,1000-2000"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sourcePort"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"53,443,1000-2000"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"network"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tcp"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"source"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"10.0.0.1"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"user"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"love@xray.com"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"inboundTag"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tag-vmess"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tls"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bittorrent"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"attrs"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"attrs[':method'] == 'GET'\"")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"outboundTag"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"direct"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"balancerTag"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"balancer"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("当多个属性同时指定时，这些属性需要"),a("strong",[t._v("同时")]),t._v("满足，才可以使当前规则生效。")])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("type")]),t._v(': "field"')])]),t._v(" "),a("p",[t._v("目前只支持"),a("code",[t._v('"field"')]),t._v("这一个选项。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("domain")]),t._v(": [string]")])]),t._v(" "),a("p",[t._v("一个数组，数组每一项是一个域名的匹配。有以下几种形式：")]),t._v(" "),a("ul",[a("li",[t._v('纯字符串：当此字符串匹配目标域名中任意部分，该规则生效。比如 "sina.com" 可以匹配 "sina.com"、"sina.com.cn" 和 "www.sina.com"，但不匹配 "sina.cn"。')]),t._v(" "),a("li",[t._v("正则表达式：由 "),a("code",[t._v('"regexp:"')]),t._v(' 开始，余下部分是一个正则表达式。当此正则表达式匹配目标域名时，该规则生效。例如 "regexp:\\\\.goo.*\\\\.com$" 匹配 "www.google.com" 或 "fonts.googleapis.com"，但不匹配 "google.com"。')]),t._v(" "),a("li",[t._v("子域名（推荐）：由 "),a("code",[t._v('"domain:"')]),t._v(' 开始，余下部分是一个域名。当此域名是目标域名或其子域名时，该规则生效。例如 "domain:xray.com" 匹配 "www.xray.com"、"xray.com"，但不匹配 "wxray.com"。')]),t._v(" "),a("li",[t._v("完整匹配：由 "),a("code",[t._v('"full:"')]),t._v(' 开始，余下部分是一个域名。当此域名完整匹配目标域名时，该规则生效。例如 "full:xray.com" 匹配 "xray.com" 但不匹配 "www.xray.com"。')]),t._v(" "),a("li",[t._v("预定义域名列表：由 "),a("code",[t._v('"geosite:"')]),t._v(" 开头，余下部分是一个名称，如 "),a("code",[t._v("geosite:google")]),t._v(" 或者 "),a("code",[t._v("geosite:cn")]),t._v("。名称及域名列表参考 "),a("a",{attrs:{href:"#%E9%A2%84%E5%AE%9A%E4%B9%89%E5%9F%9F%E5%90%8D%E5%88%97%E8%A1%A8"}},[t._v("预定义域名列表")]),t._v("。")]),t._v(" "),a("li",[t._v("从文件中加载域名：形如 "),a("code",[t._v('"ext:file:tag"')]),t._v("，必须以 "),a("code",[t._v("ext:")]),t._v("（小写）开头，后面跟文件名和标签，文件存放在 "),a("RouterLink",{attrs:{to:"/config/features/env.html#资源文件路径"}},[t._v("资源目录")]),t._v(" 中，文件格式与 "),a("code",[t._v("geosite.dat")]),t._v(" 相同，标签必须在文件中存在。")],1)]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[a("code",[t._v('"ext:geoip.dat:cn"')]),t._v(" 等价于 "),a("code",[t._v('"geoip:cn"')])])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("ip")]),t._v(": [string]")])]),t._v(" "),a("p",[t._v("一个数组，数组内每一项代表一个 IP 范围。当某一项匹配目标 IP 时，此规则生效。有以下几种形式：")]),t._v(" "),a("ul",[a("li",[t._v("IP：形如 "),a("code",[t._v('"127.0.0.1"')]),t._v("。")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing",target:"_blank",rel:"noopener noreferrer"}},[t._v("CIDR"),a("OutboundLink")],1),t._v("：形如 "),a("code",[t._v('"10.0.0.0/8"')]),t._v("。")]),t._v(" "),a("li",[t._v("预定义IP列表：此列表预置于每一个 Xray 的安装包中，文件名为 "),a("code",[t._v("geoip.dat")]),t._v("。使用方式形如 "),a("code",[t._v('"geoip:cn"')]),t._v("，必须以 "),a("code",[t._v("geoip:")]),t._v("（小写）开头，后面跟双字符国家代码，支持几乎所有可以上网的国家。\n"),a("ul",[a("li",[t._v("特殊值："),a("code",[t._v('"geoip:private"')]),t._v("，包含所有私有地址，如 "),a("code",[t._v("127.0.0.1")]),t._v("。")])])]),t._v(" "),a("li",[t._v("从文件中加载 IP：形如 "),a("code",[t._v('"ext:file:tag"')]),t._v("，必须以 "),a("code",[t._v("ext:")]),t._v("（小写）开头，后面跟文件名和标签，文件存放在 "),a("RouterLink",{attrs:{to:"/config/features/env.html#资源文件路径"}},[t._v("资源目录")]),t._v(" 中，文件格式与 "),a("code",[t._v("geoip.dat")]),t._v(" 相同标签必须在文件中存在。")],1)]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("port")]),t._v("：number | string")])]),t._v(" "),a("p",[t._v("目标端口范围，有三种形式：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v('"a-b"')]),t._v("：a 和 b 均为正整数，且小于 65536。这个范围是一个前后闭合区间，当目标端口落在此范围内时，此规则生效。")]),t._v(" "),a("li",[a("code",[t._v("a")]),t._v("：a 为正整数，且小于 65536。当目标端口为 a 时，此规则生效。")]),t._v(" "),a("li",[t._v('以上两种形式的混合，以逗号 "," 分隔。形如：'),a("code",[t._v('"53,443,1000-2000"')]),t._v("。")])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("sourcePort")]),t._v("：number | string")])]),t._v(" "),a("p",[t._v("来源端口，有三种形式：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v('"a-b"')]),t._v("：a 和 b 均为正整数，且小于 65536。这个范围是一个前后闭合区间，当目标端口落在此范围内时，此规则生效。")]),t._v(" "),a("li",[a("code",[t._v("a")]),t._v("：a 为正整数，且小于 65536。当目标端口为 a 时，此规则生效。")]),t._v(" "),a("li",[t._v('以上两种形式的混合，以逗号 "," 分隔。形如：'),a("code",[t._v('"53,443,1000-2000"')]),t._v("。")])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("network")]),t._v(': "tcp" | "udp" | "tcp,udp"')])]),t._v(" "),a("p",[t._v('可选的值有 "tcp"、"udp" 或 "tcp,udp"，当连接方式是指定的方式时，此规则生效。')]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("source")]),t._v(": [string]")])]),t._v(" "),a("p",[t._v("一个数组，数组内每一项代表一个 IP 范围，形式有 IP、CIDR、GeoIP 和从文件中加载 IP。当某一项匹配来源 IP 时，此规则生效。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("user")]),t._v(": [string]")])]),t._v(" "),a("p",[t._v("一个数组，数组内每一项是一个邮箱地址。当某一项匹配来源用户时，此规则生效。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("inboundTag")]),t._v(": [string]")])]),t._v(" "),a("p",[t._v("一个数组，数组内每一项是一个标识。当某一项匹配入站协议的标识时，此规则生效。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("protocol")]),t._v(': [ "http" | "tls" | "bittorrent" ]')])]),t._v(" "),a("p",[t._v("一个数组，数组内每一项表示一种协议。当某一个协议匹配当前连接的协议类型时，此规则生效。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("必须开启入站代理中的 "),a("code",[t._v("sniffing")]),t._v(" 选项, 才能嗅探出连接所使用的协议类型.")])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("attrs")]),t._v(": string")])]),t._v(" "),a("p",[t._v("一段脚本，用于检测流量的属性值。当此脚本返回真值时，此规则生效。")]),t._v(" "),a("p",[t._v("脚本语言为 "),a("a",{attrs:{href:"https://github.com/bazelbuild/starlark",target:"_blank",rel:"noopener noreferrer"}},[t._v("Starlark"),a("OutboundLink")],1),t._v("，它的语法是 Python 的子集。脚本接受一个全局变量 "),a("code",[t._v("attrs")]),t._v("，其中包含了流量相关的属性。")]),t._v(" "),a("p",[t._v("目前只有 http 入站代理会设置这一属性。")]),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),a("ul",[a("li",[t._v("检测 HTTP GET："),a("code",[t._v("\"attrs[':method'] == 'GET'\"")])]),t._v(" "),a("li",[t._v("检测 HTTP Path："),a("code",[t._v("\"attrs[':path'].startswith('/test')\"")])]),t._v(" "),a("li",[t._v("检测 Content Type："),a("code",[t._v("\"attrs['accept'].index('text/html') >= 0\"")])])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("outboundTag")]),t._v(": string")])]),t._v(" "),a("p",[t._v("对应一个outbound的标识。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("balancerTag")]),t._v(": string")])]),t._v(" "),a("p",[t._v("对应一个Balancer的标识。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[a("code",[t._v("balancerTag")]),t._v(" 和 "),a("code",[t._v("outboundTag")]),t._v(" 须二选一。当同时指定时，"),a("code",[t._v("outboundTag")]),t._v(" 生效。")])]),t._v(" "),a("h3",{attrs:{id:"balancerobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#balancerobject"}},[t._v("#")]),t._v(" BalancerObject")]),t._v(" "),a("p",[t._v("负载均衡器配置。当一个负载均衡器生效时，它会从指定的outbound中，按配置选出一个最合适的outbound，进行流量转发。")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tag"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"balancer"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"selector"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("tag")]),t._v(": string")])]),t._v(" "),a("p",[t._v("此负载均衡器的标识，用于匹配 "),a("code",[t._v("RuleObject")]),t._v(" 中的 "),a("code",[t._v("balancerTag")]),t._v("。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("selector")]),t._v(": [ string ]")])]),t._v(" "),a("p",[t._v("一个字符串数组，其中每一个字符串将用于和outbound标识的前缀匹配。在以下几个outbound标识中："),a("code",[t._v('[ "a", "ab", "c", "ba" ]')]),t._v("，"),a("code",[t._v('"selector": ["a"]')]),t._v(" 将匹配到 "),a("code",[t._v('[ "a", "ab" ]')]),t._v("。")]),t._v(" "),a("p",[t._v("如果匹配到多个outbound，负载均衡器目前会从中随机选出一个作为最终的outbound。")]),t._v(" "),a("h3",{attrs:{id:"预定义域名列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预定义域名列表"}},[t._v("#")]),t._v(" 预定义域名列表")]),t._v(" "),a("p",[t._v("此列表预置于每一个 Xray 的安装包中，文件名为 "),a("code",[t._v("geosite.dat")]),t._v("。这个文件包含了一些常见的域名，使用方式："),a("code",[t._v("geosite:filename")]),t._v("，如 "),a("code",[t._v("geosite:google")]),t._v(" 表示对文件内符合 "),a("code",[t._v("google")]),t._v(" 内包含的域名，进行路由筛选或 DNS 筛选。")]),t._v(" "),a("p",[t._v("常见的域名有：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("category-ads")]),t._v("：包含了常见的广告域名。")]),t._v(" "),a("li",[a("code",[t._v("category-ads-all")]),t._v("：包含了常见的广告域名，以及广告提供商的域名。")]),t._v(" "),a("li",[a("code",[t._v("cn")]),t._v("：相当于 "),a("code",[t._v("geolocation-cn")]),t._v(" 和 "),a("code",[t._v("tld-cn")]),t._v(" 的合集。")]),t._v(" "),a("li",[a("code",[t._v("apple")]),t._v("：包含了 Apple 旗下绝大部分域名。")]),t._v(" "),a("li",[a("code",[t._v("google")]),t._v("：包含了 Google 旗下绝大部分域名。")]),t._v(" "),a("li",[a("code",[t._v("microsoft")]),t._v("：包含了 Microsoft 旗下绝大部分域名。")]),t._v(" "),a("li",[a("code",[t._v("facebook")]),t._v("：包含了 Facebook 旗下绝大部分域名。")]),t._v(" "),a("li",[a("code",[t._v("twitter")]),t._v("：包含了 Twitter 旗下绝大部分域名。")]),t._v(" "),a("li",[a("code",[t._v("telegram")]),t._v("：包含了 Telegram 旗下绝大部分域名。")]),t._v(" "),a("li",[a("code",[t._v("geolocation-cn")]),t._v("：包含了常见的大陆站点域名。")]),t._v(" "),a("li",[a("code",[t._v("geolocation-!cn")]),t._v("：包含了常见的非大陆站点域名，同时包含了 "),a("code",[t._v("tld-!cn")]),t._v("。")]),t._v(" "),a("li",[a("code",[t._v("tld-cn")]),t._v("：包含了 CNNIC 管理的用于中国大陆的顶级域名，如以 "),a("code",[t._v(".cn")]),t._v("、"),a("code",[t._v(".中国")]),t._v(" 结尾的域名。")]),t._v(" "),a("li",[a("code",[t._v("tld-!cn")]),t._v("：包含了非中国大陆使用的顶级域名，如以 "),a("code",[t._v(".hk")]),t._v("（香港）、"),a("code",[t._v(".tw")]),t._v("（台湾）、"),a("code",[t._v(".jp")]),t._v("（日本）、"),a("code",[t._v(".sg")]),t._v("（新加坡）、"),a("code",[t._v(".us")]),t._v("（美国）"),a("code",[t._v(".ca")]),t._v("（加拿大）等结尾的域名。")])])])}),[],!1,null,null,null);s.default=o.exports}}]);