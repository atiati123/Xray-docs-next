(self.webpackChunkXray_docs_next=self.webpackChunkXray_docs_next||[]).push([[8424],{3749:(s,n,a)=>{"use strict";a.r(n),a.d(n,{data:()=>e});const e={key:"v-15f5452a",path:"/config/outbounds/socks.html",title:"Socks",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"OutboundConfigurationObject",slug:"outboundconfigurationobject",children:[{level:3,title:"ServerObject",slug:"serverobject",children:[]}]}],filePathRelative:"config/outbounds/socks.md",git:{updatedTime:1616738467e3,contributors:[]}}},9643:(s,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>j});var e=a(6252);const p=(0,e.Wm)("h1",{id:"socks"},[(0,e.Wm)("a",{class:"header-anchor",href:"#socks"},"#"),(0,e.Uk)(" Socks")],-1),o=(0,e.Uk)("标准 Socks 协议实现，兼容 "),t={href:"http://ftp.icm.edu.pl/packages/socks/socks4/SOCKS4.protocol",target:"_blank",rel:"noopener noreferrer"},c=(0,e.Uk)("Socks 4"),r=(0,e.Uk)("、Socks 4a 和 "),l={href:"http://ftp.icm.edu.pl/packages/socks/socks4/SOCKS4.protocol",target:"_blank",rel:"noopener noreferrer"},u=(0,e.Uk)("Socks 5"),i=(0,e.Uk)("。"),k=(0,e.uE)('<div class="custom-container danger"><p class="custom-container-title">WARNING</p><p><strong>socks 协议没有对传输加密，不适宜经公网中传输</strong></p></div><h2 id="outboundconfigurationobject"><a class="header-anchor" href="#outboundconfigurationobject">#</a> OutboundConfigurationObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;servers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">1234</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;users&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n          <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test user&quot;</span><span class="token punctuation">,</span>\n          <span class="token property">&quot;pass&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test pass&quot;</span><span class="token punctuation">,</span>\n          <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><blockquote><p><code>servers</code>: [ <a href="#serverobject">ServerObject</a> ]</p></blockquote><p>Socks 服务器列表，其中每一项是一个服务器配置。</p><h3 id="serverobject"><a class="header-anchor" href="#serverobject">#</a> ServerObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">1234</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;users&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test user&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;pass&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test pass&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><blockquote><p><code>address</code>: address</p></blockquote><p>服务器地址, 必填</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>仅支持连接到 Socks 5 服务器。</p></div><blockquote><p><code>port</code>: number</p></blockquote><p>服务器端口, 必填</p><blockquote><p><code>users</code>: [ <a href="#userobject">UserObject</a> ]</p></blockquote><p>一个数组表示的用户列表，数组中每个元素为一个用户配置。</p><p>当列表不为空时，Socks 客户端会使用用户信息进行认证；如未指定，则不进行认证。</p><p>默认值为空。</p><h4 id="userobject"><a class="header-anchor" href="#userobject">#</a> UserObject</h4><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test user&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;pass&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test pass&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p><code>user</code>: string</p></blockquote><p>用户名，字符串类型。必填。</p><blockquote><p><code>pass</code>: string</p></blockquote><p>密码，字符串类型。必填。</p><blockquote><p><code>level</code>: number</p></blockquote>',23),b=(0,e.Uk)("用户等级，连接会使用这个用户等级对应的 "),d=(0,e.Uk)("本地策略"),m=(0,e.Uk)("。"),q=(0,e.Uk)("userLevel 的值, 对应 "),g=(0,e.Uk)("policy"),h=(0,e.Uk)(" 中 "),v=(0,e.Wm)("code",null,"level",-1),f=(0,e.Uk)(" 的值。 如不指定, 默认为 0。"),j={render:function(s,n){const a=(0,e.up)("OutboundLink"),j=(0,e.up)("RouterLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[p,(0,e.Wm)("p",null,[o,(0,e.Wm)("a",t,[c,(0,e.Wm)(a)]),r,(0,e.Wm)("a",l,[u,(0,e.Wm)(a)]),i]),k,(0,e.Wm)("p",null,[b,(0,e.Wm)(j,{to:"/config/policy.html#levelpolicyobject"},{default:(0,e.w5)((()=>[d])),_:1}),m]),(0,e.Wm)("p",null,[q,(0,e.Wm)(j,{to:"/config/policy.html#policyobject"},{default:(0,e.w5)((()=>[g])),_:1}),h,v,f])],64)}}}}]);