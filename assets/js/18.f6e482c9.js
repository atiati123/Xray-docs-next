(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{379:function(t,s,a){"use strict";a.r(s);var n=a(26),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"入站代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#入站代理"}},[t._v("#")]),t._v(" 入站代理")]),t._v(" "),a("p",[t._v("入站连接用于接收发来的数据，可用的协议请见"),a("RouterLink",{attrs:{to:"/config/inbounds/"}},[t._v("inbound 可用协议列表")]),t._v("。")],1),t._v(" "),a("h2",{attrs:{id:"inboundobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inboundobject"}},[t._v("#")]),t._v(" InboundObject")]),t._v(" "),a("p",[a("code",[t._v("InboundObject")]),t._v(" 对应配置文件中 "),a("code",[t._v("inbounds")]),t._v(" 项的一个子元素。")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"inbounds"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"listen"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1080")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"协议名称"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"settings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"streamSettings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tag"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"标识"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sniffing"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"enabled"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"destOverride"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tls"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"allocate"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"strategy"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"always"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"refresh"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"concurrency"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("listen")]),t._v(": address")])]),t._v(" "),a("p",[t._v("监听地址，IP 地址或 Unix domain socket，默认值为 "),a("code",[t._v('"0.0.0.0"')]),t._v("，表示接收所有网卡上的连接.")]),t._v(" "),a("p",[t._v("可以指定一个系统可用的 IP 地址。")]),t._v(" "),a("p",[t._v("支持填写 Unix domain socket，格式为绝对路径，形如 "),a("code",[t._v('"/dev/shm/domain.socket"')]),t._v("，可在开头加 "),a("code",[t._v("@")]),t._v(" 代表 "),a("a",{attrs:{href:"https://www.man7.org/linux/man-pages/man7/unix.7.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("abstract"),a("OutboundLink")],1),t._v("，"),a("code",[t._v("@@")]),t._v(" 则代表带 padding 的 abstract。")]),t._v(" "),a("p",[t._v("填写 Unix domain socket 时，"),a("code",[t._v("port")]),t._v(" 和 "),a("code",[t._v("allocate")]),t._v(" 将被忽略，协议目前可选 VLESS、VMess、Trojan，传输方式可选 TCP、WebSocket、HTTP/2。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("port")]),t._v(': number | "env:variable" | string')])]),t._v(" "),a("p",[t._v("端口。接受的格式如下:")]),t._v(" "),a("ul",[a("li",[t._v("整型数值：实际的端口号。")]),t._v(" "),a("li",[t._v("环境变量：以 "),a("code",[t._v('"env:"')]),t._v(" 开头，后面是一个环境变量的名称，如 "),a("code",[t._v('"env:PORT"')]),t._v("。Xray 会以字符串形式解析这个环境变量。")]),t._v(" "),a("li",[t._v("字符串：可以是一个数值类型的字符串，如 "),a("code",[t._v('"1234"')]),t._v("；或者一个数值范围，如 "),a("code",[t._v('"5-10"')]),t._v(" 表示端口 5 到端口 10，这 6 个端口。")])]),t._v(" "),a("p",[t._v("当只有一个端口时，Xray 会在此端口监听入站连接。当指定了一个端口范围时，取决于 "),a("code",[t._v("allocate")]),t._v(" 设置。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("protocol")]),t._v(": string")])]),t._v(" "),a("p",[t._v("连接协议名称，可选的协议类型见 "),a("RouterLink",{attrs:{to:"/config/inbounds/"}},[t._v("inbound 可用协议列表")]),t._v("。")],1),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("settings")]),t._v(": InboundConfigurationObject")])]),t._v(" "),a("p",[t._v("具体的配置内容，视协议不同而不同。详见每个协议中的 "),a("code",[t._v("InboundConfigurationObject")]),t._v("。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("streamSettings")]),t._v(": "),a("RouterLink",{attrs:{to:"/config/transport.html#streamsettingsobject"}},[t._v("StreamSettingsObject")])],1)]),t._v(" "),a("p",[t._v("底层传输方式（transport）是当前 Xray 节点和其它节点对接的方式")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("tag")]),t._v(": string\n此入站连接的标识，用于在其它的配置中定位此连接。")])]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("当其不为空时，其值必须在所有 "),a("code",[t._v("tag")]),t._v(" 中"),a("strong",[t._v("唯一")]),t._v("。")])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("sniffing")]),t._v(": "),a("a",{attrs:{href:"#sniffingobject"}},[t._v("SniffingObject")])])]),t._v(" "),a("p",[t._v("流量探测主要作用于在透明代理等用途.\n比如一个典型流程如下:")]),t._v(" "),a("ol",[a("li",[t._v("如有一个设备上网,去访问abc.com,首先设备通过DNS查询得到abc.com的IP是1.2.3.4,然后设备会向1.2.3.4去发起连接.")]),t._v(" "),a("li",[t._v("如果不设置嗅探,Xray收到的连接请求是1.2.3.4,并不能用于域名规则的路由分流.")]),t._v(" "),a("li",[t._v("当设置了sniffing中的enable为true,Xray处理此连接的流量时,会从流量的数据中,嗅探出域名,即abc.com")]),t._v(" "),a("li",[t._v("Xray会把1.2.3.4重置为abc.com.路由就可以根据域名去进行路由的域名规则的分流")])]),t._v(" "),a("p",[t._v("因为变成了一个向abc.com请求的连接, 就可以做更多的事情, 除了路由域名规则分流, 还能重新做DNS解析等其他工作.")]),t._v(" "),a("p",[t._v('当设置了sniffing中的enable为true, 还能嗅探出bittorrent类型的流量, 然后可以在路由中配置"protocol"项来设置规则处理BT流量, 比如服务端用来拦截BT流量, 或客户端固定转发BT流量到某个VPS去等.')]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("allocate")]),t._v(": "),a("a",{attrs:{href:"#allocateobject"}},[t._v("AllocateObject")])])]),t._v(" "),a("p",[t._v("当设置了多个port时, 端口分配的具体设置")]),t._v(" "),a("h3",{attrs:{id:"sniffingobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sniffingobject"}},[t._v("#")]),t._v(" SniffingObject")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"enabled"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"destOverride"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tls"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fakedns"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"metadataOnly"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("enabled")]),t._v(": true | false")])]),t._v(" "),a("p",[t._v("是否开启流量探测。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("destOverride")]),t._v(': ["http" | "tls" | "fakedns" ]')])]),t._v(" "),a("p",[t._v("当流量为指定类型时，按其中包括的目标地址重置当前连接的目标。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("metadataOnly")]),t._v(": true | false")])]),t._v(" "),a("p",[t._v("当启用时，将仅使用连接的元数据嗅探目标地址。此时，"),a("code",[t._v("http")]),t._v(" 与 "),a("code",[t._v("tls")]),t._v(" 将不能使用。")]),t._v(" "),a("h3",{attrs:{id:"allocateobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#allocateobject"}},[t._v("#")]),t._v(" AllocateObject")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"strategy"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"always"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"refresh"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"concurrency"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("strategy")]),t._v(': "always" | "random"')])]),t._v(" "),a("p",[t._v("端口分配策略。")]),t._v(" "),a("ul",[a("li",[a("code",[t._v('"always"')]),t._v(" 表示总是分配所有已指定的端口，"),a("code",[t._v("port")]),t._v(" 中指定了多少个端口，Xray 就会监听这些端口。")]),t._v(" "),a("li",[a("code",[t._v('"random"')]),t._v(" 表示随机开放端口，每隔 "),a("code",[t._v("refresh")]),t._v(" 分钟在 "),a("code",[t._v("port")]),t._v(" 范围中随机选取 "),a("code",[t._v("concurrency")]),t._v(" 个端口来监听。")])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("refresh")]),t._v(": number")])]),t._v(" "),a("p",[t._v("随机端口刷新间隔，单位为分钟。最小值为 "),a("code",[t._v("2")]),t._v("，建议值为 "),a("code",[t._v("5")]),t._v("。这个属性仅当 "),a("code",[t._v("strategy")]),t._v(" 设置为 "),a("code",[t._v('"random"')]),t._v(" 时有效。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("concurrency")]),t._v(": number")])]),t._v(" "),a("p",[t._v("随机端口数量。最小值为 "),a("code",[t._v("1")]),t._v("，最大值为 "),a("code",[t._v("port")]),t._v(" 范围的三分之一。建议值为 "),a("code",[t._v("3")]),t._v("。")])])}),[],!1,null,null,null);s.default=e.exports}}]);