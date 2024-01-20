import{_ as p,r as a,o as i,c as r,a as s,b as n,d as o,w as l,e as c}from"./app--OHw3-J5.js";const u={},d=s("h1",{id:"shadowsocks",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#shadowsocks","aria-hidden":"true"},"#"),n(" Shadowsocks")],-1),k={href:"https://zh.wikipedia.org/wiki/Shadowsocks",target:"_blank",rel:"noopener noreferrer"},h=c("<p>目前兼容性如下：</p><ul><li>支持 TCP 和 UDP 数据包转发，其中 UDP 可选择性关闭；</li><li>推荐的加密方式： <ul><li>2022-blake3-aes-128-gcm</li><li>2022-blake3-aes-256-gcm</li><li>2022-blake3-chacha20-poly1305</li></ul></li><li>其他加密方式 <ul><li>aes-256-gcm</li><li>aes-128-gcm</li><li>chacha20-poly1305 或称 chacha20-ietf-poly1305</li><li>xchacha20-poly1305 或称 xchacha20-ietf-poly1305</li><li>none 或 plain</li></ul></li></ul><p>Shadowsocks 2022 新协议格式提升了性能并带有完整的重放保护，解决了旧协议的以下安全问题：</p>",3),b={href:"https://github.com/shadowsocks/shadowsocks-org/issues/183",target:"_blank",rel:"noopener noreferrer"},q=s("li",null,"原有 TCP 重放过滤器误报率随时间增加",-1),m=s("li",null,"没有 UDP 重放保护",-1),v=s("li",null,"可用于主动探测的 TCP 行为",-1),g=c(`<div class="custom-container danger"><p class="custom-container-title">警告</p><p>&quot;none&quot; 不加密方式下流量将明文传输。为确保安全性, 不要在公共网络上使用。</p></div><h2 id="inboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#inboundconfigurationobject" aria-hidden="true">#</a> InboundConfigurationObject</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;密码&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;aes-256-gcm&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;love@xray.com&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;network&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tcp,udp&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>network</code>: &quot;tcp&quot; | &quot;udp&quot; | &quot;tcp,udp&quot;</p></blockquote><p>可接收的网络协议类型。比如当指定为 <code>&quot;tcp&quot;</code> 时，仅会接收 TCP 流量。默认值为 <code>&quot;tcp&quot;</code>。</p><h2 id="clientobject" tabindex="-1"><a class="header-anchor" href="#clientobject" aria-hidden="true">#</a> ClientObject</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;密码&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;aes-256-gcm&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;love@xray.com&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>method</code>: string</p></blockquote><p>必填。</p><blockquote><p><code>password</code>: string</p></blockquote><p>必填。</p><ul><li>Shadowsocks 2022</li></ul><p>使用与 WireGuard 类似的预共享密钥作为密码。</p><p>使用 <code>openssl rand -base64 &lt;长度&gt;</code> 以生成与 shadowsocks-rust 兼容的密钥，长度取决于所使用的加密方法。</p><table><thead><tr><th>加密方法</th><th style="text-align:right;">密钥长度</th></tr></thead><tbody><tr><td>2022-blake3-aes-128-gcm</td><td style="text-align:right;">16</td></tr><tr><td>2022-blake3-aes-256-gcm</td><td style="text-align:right;">32</td></tr><tr><td>2022-blake3-chacha20-poly1305</td><td style="text-align:right;">32</td></tr></tbody></table><p>在 Go 实现中，32 位密钥始终工作。</p><ul><li>其他加密方法</li></ul><p>任意字符串。 不限制密码长度，但短密码会更可能被破解，建议使用 16 字符或更长的密码。</p><blockquote><p><code>level</code>: number</p></blockquote>`,19),_=s("code",null,"level",-1),y=s("code",null,"level",-1),f=s("blockquote",null,[s("p",null,[s("code",null,"email"),n(": string")])],-1),w=s("p",null,"用户邮箱，用于区分不同用户的流量（日志、统计）。",-1);function x(j,C){const t=a("ExternalLinkIcon"),e=a("RouterLink");return i(),r("div",null,[d,s("p",null,[s("a",k,[n("Shadowsocks"),o(t)]),n(" 协议，兼容大部分其它版本的实现。")]),h,s("ul",null,[s("li",null,[s("a",b,[n("Shadowsocks AEAD 加密方式设计存在严重漏洞，无法保证通信内容的可靠性"),o(t)])]),q,m,v]),g,s("p",null,[n("用户等级，连接会使用这个用户等级对应的 "),o(e,{to:"/config/policy.html#levelpolicyobject"},{default:l(()=>[n("本地策略")]),_:1}),n("。")]),s("p",null,[_,n(" 的值, 对应 "),o(e,{to:"/config/policy.html#levelpolicyobject"},{default:l(()=>[n("policy")]),_:1}),n(" 中 "),y,n(" 的值。 如不指定, 默认为 0。")]),f,w])}const S=p(u,[["render",x],["__file","shadowsocks.html.vue"]]);export{S as default};
