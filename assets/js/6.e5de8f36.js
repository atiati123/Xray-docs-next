(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{360:function(t,s,a){t.exports=a.p+"assets/img/dns_flow.58f656ff.png"},371:function(t,s,a){"use strict";a.r(s);var e=a(26),o=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"内置dns服务器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内置dns服务器"}},[t._v("#")]),t._v(" 内置DNS服务器")]),t._v(" "),e("h2",{attrs:{id:"dns-服务器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dns-服务器"}},[t._v("#")]),t._v(" DNS 服务器")]),t._v(" "),e("p",[t._v("Xray 内置的 DNS 模块，主要有两大用途：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("在路由阶段, 解析域名为 IP, 并且根据域名解析得到的 IP 进行规则匹配以分流. 是否解析域名及分流和路由配置模块中 "),e("code",[t._v("domainStrategy")]),t._v(" 的值有关, 只有在设置以下两种值时,才会使用内置 DNS 服务器进行 DNS 查询:")]),t._v(" "),e("ul",[e("li",[t._v('"IPIfNonMatch", 请求一个域名时，进行路由里面的 domain 进行匹配，若无法匹配到结果，则对这个域名使用内置 DNS 服务器进行 DNS 查询，并且使用查询返回的 IP 地址再重新进行 IP 路由匹配。')]),t._v(" "),e("li",[t._v('"IPOnDemand", 当匹配时碰到任何基于 IP 的规则，将域名立即解析为 IP 进行匹配。')])])]),t._v(" "),e("li",[e("p",[t._v("解析目标地址进行连接。")]),t._v(" "),e("ul",[e("li",[t._v("如 在 "),e("code",[t._v("freedom")]),t._v(" 出站中，将 "),e("code",[t._v("domainStrategy")]),t._v(" 设置为 "),e("code",[t._v("UseIP")]),t._v(", 由此出站发出的请求, 会先将域名通过内置服务器解析成 IP, 然后进行连接。")]),t._v(" "),e("li",[t._v("如 在 "),e("code",[t._v("sockopt")]),t._v(" 中，将 "),e("code",[t._v("domainStrategy")]),t._v(" 设置为 "),e("code",[t._v("UseIP")]),t._v(", 此出站发起的系统连接，将先由内置服务器解析为 IP, 然后进行连接。")])])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP 1")]),t._v(" "),e("p",[t._v("内置 DNS 服务器所发出的 DNS 查询请求，会自动根据路由配置进行转发。")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP 2")]),t._v(" "),e("p",[t._v("只支持最基本的 IP 查询（A 和 AAAA 记录）。其他查询不会进入内置 DNS 服务器。")])]),t._v(" "),e("h2",{attrs:{id:"dns-处理流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dns-处理流程"}},[t._v("#")]),t._v(" DNS 处理流程")]),t._v(" "),e("p",[t._v("DNS 服务器配置模块可以配置多个DNS服务器, 并且指定优先匹配列表.")]),t._v(" "),e("ol",[e("li",[t._v("查询的域名与某个 DNS 服务器指定的域名列表匹配时，Xray 会优先使用这个 DNS 服务器进行查询。")]),t._v(" "),e("li",[t._v("无匹配时, 按从上往下的顺序进行查询，并且会跳过 1 步骤中使用的最后一个服务器。")]),t._v(" "),e("li",[t._v("只返回匹配 expectIPs 的 IP 列表。")])]),t._v(" "),e("p",[t._v("DNS 服务器的处理流程示意图如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(360),alt:""}})]),t._v(" "),e("h2",{attrs:{id:"dnsobject"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dnsobject"}},[t._v("#")]),t._v(" DnsObject")]),t._v(" "),e("p",[e("code",[t._v("DnsObject")]),t._v(" 对应配置文件的 "),e("code",[t._v("dns")]),t._v(" 项。")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dns"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hosts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"baidu.com"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"servers"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8.8.8.8"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8.8.4.4"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.2.3.4"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5353")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"domains"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"domain:xray.com"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"expectIPs"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"geoip:cn"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localhost"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"clientIp"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.2.3.4"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tag"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dns_inbound"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("blockquote",[e("p",[e("code",[t._v("hosts")]),t._v(": map{string: address}")])]),t._v(" "),e("p",[t._v('静态 IP 列表，其值为一系列的 "域名": "地址"。其中地址可以是 IP 或者域名。在解析域名时，如果域名匹配这个列表中的某一项:')]),t._v(" "),e("ul",[e("li",[t._v("当该项的地址为 IP 时，则解析结果为该项的 IP")]),t._v(" "),e("li",[t._v("当该项的地址为域名时，会使用此域名进行 IP 解析，而不使用原始域名。")])]),t._v(" "),e("p",[t._v("域名的格式有以下几种形式：")]),t._v(" "),e("ul",[e("li",[t._v('纯字符串：当此字符串完整匹配目标域名时，该规则生效。例如 "xray.com" 匹配 "xray.com"，但不匹配 "www.xray.com"。')]),t._v(" "),e("li",[t._v("正则表达式：由 "),e("code",[t._v('"regexp:"')]),t._v(' 开始，余下部分是一个正则表达式。当此正则表达式匹配目标域名时，该规则生效。例如 "regexp:\\\\.goo.*\\\\.com$" 匹配 "www.google.com"、"fonts.googleapis.com"，但不匹配 "google.com"。')]),t._v(" "),e("li",[t._v("子域名 (推荐)：由 "),e("code",[t._v('"domain:"')]),t._v(' 开始，余下部分是一个域名。当此域名是目标域名或其子域名时，该规则生效。例如 "domain:xray.com" 匹配 "www.xray.com" 与 "xray.com"，但不匹配 "wxray.com"。')]),t._v(" "),e("li",[t._v("子串：由 "),e("code",[t._v('"keyword:"')]),t._v(' 开始，余下部分是一个字符串。当此字符串匹配目标域名中任意部分，该规则生效。比如 "keyword:sina.com" 可以匹配 "sina.com"、"sina.com.cn" 和 "www.sina.com"，但不匹配 "sina.cn"。')]),t._v(" "),e("li",[t._v("预定义域名列表：由 "),e("code",[t._v('"geosite:"')]),t._v(" 开头，余下部分是一个名称，如 "),e("code",[t._v("geosite:google")]),t._v(" 或者 "),e("code",[t._v("geosite:cn")]),t._v("。名称及域名列表参考 "),e("RouterLink",{attrs:{to:"/config/routing.html#预定义域名列表"}},[t._v("预定义域名列表")]),t._v("。")],1)]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("servers")]),t._v(": [string | "),e("a",{attrs:{href:"#serverobject"}},[t._v("ServerObject")]),t._v(" ]")])]),t._v(" "),e("p",[t._v("一个 DNS 服务器列表，支持的类型有两种：DNS 地址（字符串形式）和 "),e("a",{attrs:{href:"#serverobject"}},[t._v("ServerObject")]),t._v(" 。")]),t._v(" "),e("p",[t._v("当它的值是一个 DNS IP 地址时，如 "),e("code",[t._v('"8.8.8.8"')]),t._v("，Xray 会使用此地址的 53 端口进行 DNS 查询。")]),t._v(" "),e("p",[t._v("当值为 "),e("code",[t._v('"localhost"')]),t._v(" 时，表示使用本机预设的 DNS 配置。")]),t._v(" "),e("p",[t._v("当值是 "),e("code",[t._v('"https://host:port/dns-query"')]),t._v(" 的形式，如 "),e("code",[t._v('"https://dns.google/dns-query"')]),t._v("，Xray 会使用 "),e("code",[t._v("DNS over HTTPS")]),t._v(" (RFC8484, 简称 DOH) 进行查询。有些服务商拥有 IP 别名的证书，可以直接写 IP 形式，比如 "),e("code",[t._v("https://1.1.1.1/dns-query")]),t._v("。也可使用非标准端口和路径，如 "),e("code",[t._v('"https://a.b.c.d:8443/my-dns-query"')])]),t._v(" "),e("p",[t._v("当值是 "),e("code",[t._v('"https+local://host:port/dns-query"')]),t._v(" 的形式，如 "),e("code",[t._v('"https+local://dns.google/dns-query"')]),t._v("，Xray 会使用 "),e("code",[t._v("DOH本地模式")]),t._v(" 进行查询，即 DOH 请求不会经过 Routing/Outbound 等组件，直接对外请求，以降低耗时。一般适合在服务端使用。也可使用非标端口和路径。")]),t._v(" "),e("p",[t._v("当值是 "),e("code",[t._v("fakedns")]),t._v(" 时，将使用 FakeDNS 功能进行查询。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP 1")]),t._v(" "),e("p",[t._v("当使用 "),e("code",[t._v("localhost")]),t._v(" 时，本机的 DNS 请求不受 Xray 控制，需要额外的配置才可以使 DNS 请求由 Xray 转发。")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP 2")]),t._v(" "),e("p",[t._v("不同规则初始化得到的 DNS 客户端会在 Xray 启动日志中以 "),e("code",[t._v("info")]),t._v(" 级别体现，比如 "),e("code",[t._v("local DOH")]),t._v("、"),e("code",[t._v("remote DOH")]),t._v(" 和 "),e("code",[t._v("udp")]),t._v(" 等模式。")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP 3")]),t._v(" "),e("p",[t._v("(v1.4.0+) 可以在 "),e("RouterLink",{attrs:{to:"/config/log.html"}},[t._v("日志")]),t._v(" 中打开 DNS 查询日志。")],1)]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("clientIp")]),t._v(": string")])]),t._v(" "),e("p",[t._v("用于 DNS 查询时通知服务器以指定IP位置。不能是私有地址。")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("tag")]),t._v(": string")])]),t._v(" "),e("p",[t._v("由内置 DNS 发出的查询流量，除 "),e("code",[t._v("localhost")]),t._v(" 和 "),e("code",[t._v("DOHL_")]),t._v(" 模式外，都可以用此标识在路由使用 "),e("code",[t._v("inboundTag")]),t._v(" 进行匹配。")]),t._v(" "),e("h3",{attrs:{id:"serverobject"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#serverobject"}},[t._v("#")]),t._v(" ServerObject")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.2.3.4"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5353")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"domains"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"domain:xray.com"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"expectIPs"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"geoip:cn"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("blockquote",[e("p",[e("code",[t._v("address")]),t._v(": address")])]),t._v(" "),e("p",[t._v("一个 DNS 服务器列表，支持的类型有两种：DNS 地址（字符串形式）和 ServerObject 。")]),t._v(" "),e("p",[t._v('当它的值是一个 DNS IP 地址时，如 "8.8.8.8"，Xray 会使用此地址的 53 端口进行 DNS 查询。')]),t._v(" "),e("p",[t._v('当值为 "localhost" 时，表示使用本机预设的 DNS 配置。')]),t._v(" "),e("p",[t._v('当值是 "https://host:port/dns-query" 的形式，如 "https://dns.google/dns-query"，Xray 会使用 DNS over HTTPS (RFC8484, 简称 DOH) 进行查询。有些服务商拥有 IP 别名的证书，可以直接写 IP 形式，比如 https://1.1.1.1/dns-query。也可使用非标准端口和路径，如 "https://a.b.c.d:8443/my-dns-query"')]),t._v(" "),e("p",[t._v('当值是 "https+local://host:port/dns-query" 的形式，如 "https+local://dns.google/dns-query"，Xray 会使用 DOH本地模式 进行查询，即 DOH 请求不会经过 Routing/Outbound 等组件，直接对外请求，以降低耗时。一般适合在服务端使用。也可使用非标端口和路径。')]),t._v(" "),e("p",[t._v("当值是 "),e("code",[t._v("fakedns")]),t._v(" 时，将使用 FakeDNS 功能进行查询。")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("port")]),t._v(": number")])]),t._v(" "),e("p",[t._v("DNS 服务器端口，如 "),e("code",[t._v("53")]),t._v("。此项缺省时默认为 "),e("code",[t._v("53")]),t._v("。当使用 DOH 模式该项无效，非标端口应在 URL 中指定。")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("domains")]),t._v(": [string]")])]),t._v(" "),e("p",[t._v("一个域名列表，此列表包含的域名，将优先使用此服务器进行查询。域名格式和 "),e("RouterLink",{attrs:{to:"/config/routing.html#ruleobject"}},[t._v("路由配置")]),t._v(" 中相同。")],1),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("expectIPs")]),t._v(":[string]")])]),t._v(" "),e("p",[t._v("一个 IP 范围列表，格式和 "),e("RouterLink",{attrs:{to:"/config/routing.html#ruleobject"}},[t._v("路由配置")]),t._v(" 中相同。")],1),t._v(" "),e("p",[t._v("当配置此项时，Xray DNS 会对返回的 IP 的进行校验，只返回包含 expectIPs 列表中的地址。")]),t._v(" "),e("p",[t._v("如果未配置此项，会原样返回 IP 地址。")])])}),[],!1,null,null,null);s.default=o.exports}}]);