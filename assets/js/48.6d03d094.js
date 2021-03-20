(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{409:function(t,e,a){"use strict";a.r(e);var s=a(26),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mkcp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mkcp"}},[t._v("#")]),t._v(" mKCP")]),t._v(" "),a("p",[t._v("mKCP 使用 UDP 来模拟 TCP 连接。")]),t._v(" "),a("p",[t._v("mKCP 牺牲带宽来降低延迟。传输同样的内容，mKCP 一般比 TCP 消耗更多的流量。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("请确定主机上的防火墙配置正确")])]),t._v(" "),a("h2",{attrs:{id:"kcpobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kcpobject"}},[t._v("#")]),t._v(" KcpObject")]),t._v(" "),a("p",[a("code",[t._v("KcpObject")]),t._v(" 对应传输配置的 "),a("code",[t._v("kcpSettings")]),t._v(" 项。")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mtu"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1350")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tti"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"uplinkCapacity"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"downlinkCapacity"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"congestion"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"readBufferSize"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"writeBufferSize"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"header"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"none"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"seed"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Password"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("mtu")]),t._v(": number")])]),t._v(" "),a("p",[t._v("最大传输单元（maximum transmission unit）\n请选择一个介于 576 - 1460 之间的值。")]),t._v(" "),a("p",[t._v("默认值为 "),a("code",[t._v("1350")]),t._v("。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("tti")]),t._v(": number")])]),t._v(" "),a("p",[t._v("传输时间间隔（transmission time interval），单位毫秒（ms），mKCP 将以这个时间频率发送数据。\n请选译一个介于 10 - 100 之间的值。")]),t._v(" "),a("p",[t._v("默认值为 "),a("code",[t._v("50")]),t._v("。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("uplinkCapacity")]),t._v(": number")])]),t._v(" "),a("p",[t._v("上行链路容量，即主机发出数据所用的最大带宽，单位 MB/s，注意是 Byte 而非 bit。\n可以设置为 0，表示一个非常小的带宽。")]),t._v(" "),a("p",[t._v("默认值 "),a("code",[t._v("5")]),t._v("。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("downlinkCapacity")]),t._v(": number")])]),t._v(" "),a("p",[t._v("下行链路容量，即主机接收数据所用的最大带宽，单位 MB/s，注意是 Byte 而非 bit。\n可以设置为 0，表示一个非常小的带宽。")]),t._v(" "),a("p",[t._v("默认值 "),a("code",[t._v("20")]),t._v("。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[a("code",[t._v("uplinkCapacity")]),t._v(" 和 "),a("code",[t._v("downlinkCapacity")]),t._v(" 决定了 mKCP 的传输速度。\n以客户端发送数据为例，客户端的 "),a("code",[t._v("uplinkCapacity")]),t._v(" 指定了发送数据的速度，而服务器端的 "),a("code",[t._v("downlinkCapacity")]),t._v(" 指定了接收数据的速度。两者的值以较小的一个为准。")]),t._v(" "),a("p",[t._v("推荐把 "),a("code",[t._v("downlinkCapacity")]),t._v(" 设置为一个较大的值，比如 100，而 "),a("code",[t._v("uplinkCapacity")]),t._v(" 设为实际的网络速度。当速度不够时，可以逐渐增加 "),a("code",[t._v("uplinkCapacity")]),t._v(" 的值，直到带宽的两倍左右。")])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("congestion")]),t._v(": true | false")])]),t._v(" "),a("p",[t._v("是否启用拥塞控制。")]),t._v(" "),a("p",[t._v("开启拥塞控制之后，Xray 会自动监测网络质量，当丢包严重时，会自动降低吞吐量；当网络畅通时，也会适当增加吞吐量。")]),t._v(" "),a("p",[t._v("默认值为 "),a("code",[t._v("false")])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("readBufferSize")]),t._v(": number")])]),t._v(" "),a("p",[t._v("单个连接的读取缓冲区大小，单位是 MB。")]),t._v(" "),a("p",[t._v("默认值为 "),a("code",[t._v("2")]),t._v("。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("writeBufferSize")]),t._v(": number")])]),t._v(" "),a("p",[t._v("单个连接的写入缓冲区大小，单位是 MB。")]),t._v(" "),a("p",[t._v("默认值为 "),a("code",[t._v("2")]),t._v("。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[a("code",[t._v("readBufferSize")]),t._v(" 和 "),a("code",[t._v("writeBufferSize")]),t._v(" 指定了单个连接所使用的内存大小。\n在需要高速传输时，指定较大的 "),a("code",[t._v("readBufferSize")]),t._v(" 和 "),a("code",[t._v("writeBufferSize")]),t._v(" 会在一定程度上提高速度，但也会使用更多的内存。")]),t._v(" "),a("p",[t._v("在网速不超过 20MB/s 时，默认值 1MB 可以满足需求；超过之后，可以适当增加 "),a("code",[t._v("readBufferSize")]),t._v(" 和 "),a("code",[t._v("writeBufferSize")]),t._v(" 的值，然后手动平衡速度和内存的关系。")])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("header")]),t._v(": "),a("a",{attrs:{href:"#headerobject"}},[t._v("HeaderObject")])])]),t._v(" "),a("p",[t._v("数据包头部伪装设置")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("seed")]),t._v(": string")])]),t._v(" "),a("p",[t._v("可选的混淆密码，使用 AES-128-GCM 算法混淆流量数据，客户端和服务端需要保持一致。")]),t._v(" "),a("p",[t._v("本混淆机制不能用于保证通信内容的安全，但可能可以对抗部分封锁。")]),t._v(" "),a("blockquote",[a("p",[t._v("目前测试环境下开启此设置后没有出现原版未混淆版本的封端口现象")])]),t._v(" "),a("h3",{attrs:{id:"headerobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#headerobject"}},[t._v("#")]),t._v(" HeaderObject")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"none"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("type")]),t._v(": string")])]),t._v(" "),a("p",[t._v("伪装类型，可选的值有：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v('"none"')]),t._v("：默认值，不进行伪装，发送的数据是没有特征的数据包。")]),t._v(" "),a("li",[a("code",[t._v('"srtp"')]),t._v("：伪装成 SRTP 数据包，会被识别为视频通话数据（如 FaceTime）。")]),t._v(" "),a("li",[a("code",[t._v('"utp"')]),t._v("：伪装成 uTP 数据包，会被识别为 BT 下载数据。")]),t._v(" "),a("li",[a("code",[t._v('"wechat-video"')]),t._v("：伪装成微信视频通话的数据包。")]),t._v(" "),a("li",[a("code",[t._v('"dtls"')]),t._v("：伪装成 DTLS 1.2 数据包。")]),t._v(" "),a("li",[a("code",[t._v('"wireguard"')]),t._v("：伪装成 WireGuard 数据包。（并不是真正的 WireGuard 协议）")])]),t._v(" "),a("h2",{attrs:{id:"鸣谢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#鸣谢"}},[t._v("#")]),t._v(" 鸣谢")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/skywind3000",target:"_blank",rel:"noopener noreferrer"}},[t._v("@skywind3000"),a("OutboundLink")],1),t._v(" 发明并实现了 KCP 协议。")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/xtaci",target:"_blank",rel:"noopener noreferrer"}},[t._v("@xtaci"),a("OutboundLink")],1),t._v(" 将 KCP 由 C 语言实现翻译成 Go。")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/xiaokangwang",target:"_blank",rel:"noopener noreferrer"}},[t._v("@xiaokangwang"),a("OutboundLink")],1),t._v(" 测试 KCP 与 Xray 的整合并提交了最初的 PR。")])]),t._v(" "),a("h2",{attrs:{id:"对-kcp-协议的改进"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对-kcp-协议的改进"}},[t._v("#")]),t._v(" 对 KCP 协议的改进")]),t._v(" "),a("h3",{attrs:{id:"更小的协议头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更小的协议头"}},[t._v("#")]),t._v(" 更小的协议头")]),t._v(" "),a("p",[t._v("原生 KCP 协议使用了 24 字节的固定头部，而 mKCP 修改为数据包 18 字节，确认（ACK）包 16 字节。更小的头部有助于躲避特征检查，并加快传输速度。")]),t._v(" "),a("p",[t._v("另外，原生 KCP 的单个确认包只能确认一个数据包已收到，也就是说当 KCP 需要确认 100 个数据已收到时，它会发出 24 * 100 = 2400 字节的数据。其中包含了大量重复的头部数据，造成带宽的浪费。mKCP 会对多个确认包进行压缩，100 个确认包只需要 16 + 2 + 100 * 4 = 418 字节，相当于原生的六分之一。")]),t._v(" "),a("h3",{attrs:{id:"确认包重传"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#确认包重传"}},[t._v("#")]),t._v(" 确认包重传")]),t._v(" "),a("p",[t._v("原生 KCP 协议的确认（ACK）包只发送一次，如果确认包丢失，则一定会导致数据重传，造成不必要的带宽浪费。而 mKCP 会以一定的频率重发确认包，直到发送方确认为止。单个确认包的大小为 22 字节，相比起数据包的 1000 字节以上，重传确认包的代价要小得多。")]),t._v(" "),a("h3",{attrs:{id:"连接状态控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#连接状态控制"}},[t._v("#")]),t._v(" 连接状态控制")]),t._v(" "),a("p",[t._v("mKCP 可以有效地开启和关闭连接。当远程主机主动关闭连接时，连接会在两秒钟之内释放；当远程主机断线时，连接会在最多 30 秒内释放。")]),t._v(" "),a("p",[t._v("原生 KCP 不支持这个场景。")])])}),[],!1,null,null,null);e.default=r.exports}}]);