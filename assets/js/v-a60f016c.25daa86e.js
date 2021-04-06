(self.webpackChunkXray_docs_next=self.webpackChunkXray_docs_next||[]).push([[6550],{7786:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-a60f016c",path:"/config/outbounds/vless.html",title:"VLESS",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"OutboundConfigurationObject",slug:"outboundconfigurationobject",children:[{level:3,title:"ServerObject",slug:"serverobject",children:[]},{level:3,title:"UserObject",slug:"userobject",children:[]}]}],filePathRelative:"config/outbounds/vless.md",git:{updatedTime:1617707135e3,contributors:[]}}},7495:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>K});var e=a(6252);const o=(0,e.Wm)("h1",{id:"vless"},[(0,e.Wm)("a",{class:"header-anchor",href:"#vless"},"#"),(0,e.Uk)(" VLESS")],-1),t=(0,e.Wm)("div",{class:"custom-container danger"},[(0,e.Wm)("p",{class:"custom-container-title"},"WARNING"),(0,e.Wm)("p",null,"目前 VLESS 没有自带加密，请用于可靠信道，如 TLS。 目前 VLESS 不支持分享。")],-1),p=(0,e.Wm)("p",null,"VLESS 是一个无状态的轻量传输协议，它分为入站和出站两部分，可以作为 Xray 客户端和服务器之间的桥梁。",-1),c=(0,e.Uk)("与 "),l=(0,e.Uk)("VMess"),r=(0,e.Uk)(" 不同，VLESS 不依赖于系统时间，认证方式同样为 UUID，但不需要 alterId。"),u=(0,e.uE)('<h2 id="outboundconfigurationobject"><a class="header-anchor" href="#outboundconfigurationobject">#</a> OutboundConfigurationObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;vnext&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;example.com&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">443</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;users&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n          <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5783a3e7-e373-51cd-8642-c83782b807c5&quot;</span><span class="token punctuation">,</span>\n          <span class="token property">&quot;encryption&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>\n          <span class="token property">&quot;flow&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xtls-rprx-direct&quot;</span><span class="token punctuation">,</span>\n          <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><blockquote><p><code>vnext</code>: [ <a href="#serverobject">ServerObject</a> ]</p></blockquote><p>一个数组, 表示 VLESS 服务器列表，包含一组指向服务端的配置, 其中每一项是一个服务器配置。</p><h3 id="serverobject"><a class="header-anchor" href="#serverobject">#</a> ServerObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;example.com&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">443</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;users&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5783a3e7-e373-51cd-8642-c83782b807c5&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;encryption&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;flow&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xtls-rprx-direct&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><blockquote><p><code>address</code>: address</p></blockquote><p>服务端地址，指向服务端，支持域名、IPv4、IPv6。</p><blockquote><p><code>port</code>: number</p></blockquote><p>服务端端口，通常与服务端监听的端口相同。</p><blockquote><p><code>users</code>: [ <a href="#userobject">UserObject</a> ]</p></blockquote><p>数组, 一组服务端认可的用户列表, 其中每一项是一个用户配置</p><h3 id="userobject"><a class="header-anchor" href="#userobject">#</a> UserObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5783a3e7-e373-51cd-8642-c83782b807c5&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;encryption&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;flow&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xtls-rprx-direct&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><blockquote><p><code>id</code>: string</p></blockquote><p>VLESS 的用户 ID，可以是任意小于 30 字节的字符串, 也可以是一个合法的 UUID. 自定义字符串和其映射的 UUID 是等价的, 这意味着你将可以这样在配置文件中写 id 来标识同一用户,即</p><ul><li>写 <code>&quot;id&quot;: &quot;我爱🍉老师1314&quot;</code>,</li><li>或写 <code>&quot;id&quot;: &quot;5783a3e7-e373-51cd-8642-c83782b807c5&quot;</code> (此 UUID 是 <code>我爱🍉老师1314</code> 的 UUID 映射)</li></ul>',17),i=(0,e.Uk)("其映射标准在 "),d={href:"https://github.com/XTLS/Xray-core/issues/158",target:"_blank",rel:"noopener noreferrer"},b=(0,e.Uk)("VLESS UUID 映射标准：将自定义字符串映射为一个 UUIDv5"),k=(0,e.uE)("<p>你可以使用命令 <code>xray uuid -i &quot;自定义字符串&quot;</code> 生成自定义字符串所映射的的 UUID，也可以使用命令 <code>xray uuid</code> 生成随机的 UUID。</p><blockquote><p><code>encryption</code>: &quot;none&quot;</p></blockquote><p>需要填 <code>&quot;none&quot;</code>，不能留空。</p><p>该要求是为了提醒使用者没有加密，也为了以后出加密方式时，防止使用者填错属性名或填错位置导致裸奔。</p><p>若未正确设置 encryption 的值，使用 Xray 或 -test 时会收到错误信息。</p><blockquote><p><code>flow</code>: string</p></blockquote><p>流控模式，用于选择 XTLS 的算法。</p><p>目前出站协议中有以下流控模式可选：</p><ul><li><code>xtls-rprx-origin</code>：最初的流控模式。该模式纪念价值大于实际使用价值</li><li><code>xtls-rprx-origin-udp443</code>：同 <code>xtls-rprx-origin</code>, 但放行了目标为 443 端口的 UDP 流量</li><li><code>xtls-rprx-direct</code>：所有平台皆可使用的典型流控模式</li><li><code>xtls-rprx-direct-udp443</code>：同 <code>xtls-rprx-direct</code>, 但是放行了目标为 443 端口的 UDP 流量</li><li><code>xtls-rprx-splice</code>：Linux 平台下最建议使用的流控模式</li><li><code>xtls-rprx-splice-udp443</code>：同 <code>xtls-rprx-splice</code>, 但是放行了目标为 443 端口的 UDP 流量</li></ul>",9),m={class:"custom-container warning"},q=(0,e.Wm)("p",{class:"custom-container-title"},"注意",-1),g=(0,e.Uk)("当 "),U=(0,e.Wm)("code",null,"flow",-1),v=(0,e.Uk)(" 被指定时，还需要将该出站协议的 "),S=(0,e.Wm)("code",null,"streamSettings.security",-1),x=(0,e.Uk)(" 一项指定为 "),y=(0,e.Wm)("code",null,"xtls",-1),h=(0,e.Uk)("，"),f=(0,e.Wm)("code",null,"tlsSettings",-1),j=(0,e.Uk)(" 改为 "),W=(0,e.Wm)("code",null,"xtlsSettings",-1),L=(0,e.Uk)("。详情请参考 "),T=(0,e.Uk)("streamSettings"),C=(0,e.Uk)("。"),I=(0,e.Wm)("p",null,"此外，目前 XTLS 仅支持 TCP、mKCP、DomainSocket 这三种传输方式。",-1),P=(0,e.uE)('<div class="custom-container tip"><p class="custom-container-title">关于 xtls-rprx-*-udp443 流控模式</p><p>启用了 Xray-core 的 XTLS 时，通往 UDP 443 端口的流量默认会被拦截（一般情况下为 QUIC），这样应用就不会使用 QUIC 而会使用 TLS，XTLS 才会真正生效。实际上，QUIC 本身也不适合被代理，因为 QUIC 自带了 TCP 的功能，它作为 UDP 流量在通过 VLESS 协议传输时，底层协议为 TCP，就相当于两层 TCP 了。</p><p>若不需要拦截，请在客户端填写 <code>xtls-rprx-*-udp443</code>，服务端不变。</p></div><div class="custom-container tip"><p class="custom-container-title">关于 Splice 模式</p><p>Splice 是 Linux Kernel 提供的函数，系统内核直接转发 TCP，不再经过 Xray 的内存，大大减少了数据拷贝、CPU 上下文切换的次数。</p></div><p>Splice 模式的的使用限制：</p><ul><li>Linux 环境</li><li>入站协议为 <code>Dokodemo door</code>、<code>Socks</code>、<code>HTTP</code> 等纯净的 TCP 连接, 或其它使用了 XTLS 的入站协议</li><li>出站协议为 VLESS + XTLS 或 Trojan + XTLS</li></ul><p>此外，使用 Splice 时网速显示会滞后，这是特性，不是 bug。</p><p>需要注意的是，使用 mKCP 协议时不会使用 Splice（是的，虽然没有报错，但实际上根本没用到）。</p><blockquote><p><code>level</code>: number</p></blockquote>',7),D=(0,e.Uk)("用户等级，连接会使用这个用户等级对应的 "),X=(0,e.Uk)("本地策略"),E=(0,e.Uk)("。"),w=(0,e.Uk)("level 的值, 对应 "),V=(0,e.Uk)("policy"),O=(0,e.Uk)(" 中 "),_=(0,e.Wm)("code",null,"level",-1),Q=(0,e.Uk)(" 的值。 如不指定, 默认为 0。"),K={render:function(n,s){const a=(0,e.up)("RouterLink"),K=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[o,t,p,(0,e.Wm)("p",null,[c,(0,e.Wm)(a,{to:"/config/outbounds/vmess.html"},{default:(0,e.w5)((()=>[l])),_:1}),r]),u,(0,e.Wm)("p",null,[i,(0,e.Wm)("a",d,[b,(0,e.Wm)(K)])]),k,(0,e.Wm)("div",m,[q,(0,e.Wm)("p",null,[g,U,v,S,x,y,h,f,j,W,L,(0,e.Wm)(a,{to:"/config/transport.html#streamsettingsobject"},{default:(0,e.w5)((()=>[T])),_:1}),C]),I]),P,(0,e.Wm)("p",null,[D,(0,e.Wm)(a,{to:"/config/policy.html#levelpolicyobject"},{default:(0,e.w5)((()=>[X])),_:1}),E]),(0,e.Wm)("p",null,[w,(0,e.Wm)(a,{to:"/config/policy.html#policyobject"},{default:(0,e.w5)((()=>[V])),_:1}),O,_,Q])],64)}}}}]);