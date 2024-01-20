import{_ as i,r as a,o as r,c as p,a as e,b as s,d as n,w as c,e as l}from"./app--OHw3-J5.js";const d={},u=e("h1",{id:"shadowsocks",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#shadowsocks","aria-hidden":"true"},"#"),s(" Shadowsocks")],-1),h={href:"https://en.wikipedia.org/wiki/Shadowsocks",target:"_blank",rel:"noopener noreferrer"},k=l('<h3 id="supported-encryption-methods" tabindex="-1"><a class="header-anchor" href="#supported-encryption-methods" aria-hidden="true">#</a> Supported Encryption Methods</h3><p>The currently supported methods are following:</p><ul><li>Recommended encryption methods: <ul><li><code>2022-blake3-aes-128-gcm</code></li><li><code>2022-blake3-aes-256-gcm</code></li><li><code>2022-blake3-chacha20-poly1305</code></li></ul></li><li>Other encryption methods: <ul><li><code>aes-256-gcm</code></li><li><code>aes-128-gcm</code></li><li><code>chacha20-poly1305</code>/<code>chacha20-ietf-poly1305</code></li><li><code>xchacha20-poly1305</code>/<code>xchacha20-ietf-poly1305</code></li><li><code>none</code>/<code>plain</code></li></ul></li></ul><p>The Shadowsocks 2022 new protocol format improves performance and includes complete replay protection, addressing the following security issues in the old protocol:</p>',4),m={href:"https://github.com/shadowsocks/shadowsocks-org/issues/183",target:"_blank",rel:"noopener noreferrer"},b=e("li",null,"Increasing false positive rate of the original TCP replay filter over time",-1),g=e("li",null,"Lack of UDP replay protection",-1),v=e("li",null,"TCP behaviors that can be used for active probing",-1),f=l(`<div class="custom-container danger"><p class="custom-container-title">Danger</p><p>Traffic transmitted without encryption using the &quot;none&quot; method will be in plain text. <strong>Do not use it on public networks</strong> for security reasons.</p></div><h2 id="inboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#inboundconfigurationobject" aria-hidden="true">#</a> InboundConfigurationObject</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;clients&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;aes-256-gcm&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;love@xray.com&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;network&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tcp,udp&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>clients</code>: a list of <a href="#clientobject"><code>ClientObject</code></a>, empty list considered valid</p></blockquote><p>The <code>password</code> parameter can be specified for the server at all, but also in the <a href="#clientobject"><code>ClientObject</code></a> being dedicated to the given user. Server-level <code>password</code> is not guaranteed to override the client-specific one.</p><blockquote><p><code>network</code>: &quot;tcp&quot; | &quot;udp&quot; | &quot;tcp,udp&quot;</p></blockquote><p>The supported network protocol type. For example, when specified as <code>&quot;tcp&quot;</code>, it will only handle TCP traffic. The default value is <code>&quot;tcp&quot;</code>.</p><h2 id="clientobject" tabindex="-1"><a class="header-anchor" href="#clientobject" aria-hidden="true">#</a> ClientObject</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;密码&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;aes-256-gcm&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;love@xray.com&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>method</code>: string, any of the <a href="#supportedencryptionmethods">supported methods</a></p></blockquote><p>Required.</p><blockquote><p><code>password</code>: string</p></blockquote><p>Required. For <strong>Shadowsocks 2022</strong> a pre-shared <code>base64</code> random key similar to WireGuard&#39;s keys should be used as the password. The command</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>openssl rand <span class="token parameter variable">-base64</span> <span class="token operator">&lt;</span>length<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>could used to generate a key. The length of the required key for <code>shadowsocks-rust</code> implementation depends on the encryption method:</p><table><thead><tr><th>Encryption Method</th><th style="text-align:right;">Key Length</th></tr></thead><tbody><tr><td><code>2022-blake3-aes-128-gcm</code></td><td style="text-align:right;">16</td></tr><tr><td><code>2022-blake3-aes-256-gcm</code></td><td style="text-align:right;">32</td></tr><tr><td><code>2022-blake3-chacha20-poly1305</code></td><td style="text-align:right;">32</td></tr></tbody></table><p>In the <code>go-shadowsocks</code> implementation written in Golang, a 32-byte key always works.</p><p>For <strong>any other encryption method</strong> <em>any string</em> could be used. There is no limitation on the password length, but shorter passwords are more susceptible to cracking. It is recommended to use a random-generated password of 16 characters or longer. The following example generates 40-characters length password:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> strings /dev/urandom <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-o</span> <span class="token string">&#39;[[:alnum:]]&#39;</span> <span class="token operator">|</span> <span class="token function">head</span> <span class="token parameter variable">-n</span> <span class="token number">40</span> <span class="token operator">|</span> <span class="token function">tr</span> <span class="token parameter variable">-d</span> <span class="token string">&#39;\\n&#39;</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><code>level</code>: number</p></blockquote>`,20),y=e("code",null,"level",-1),q=e("code",null,"level",-1),w=e("blockquote",null,[e("p",null,[e("code",null,"email"),s(": string")])],-1),_=e("p",null,"The user's email, used to differentiate traffic from different users for logs or statistics.",-1);function x(T,j){const o=a("ExternalLinkIcon"),t=a("RouterLink");return r(),p("div",null,[u,e("p",null,[s("The "),e("a",h,[s("Shadowsocks"),n(o)]),s(" protocol is compatible with most other implementations of Shadowsocks. The server supports TCP and UDP packet forwarding, with an option to selectively disable UDP.")]),k,e("ul",null,[e("li",null,[e("a",m,[s("Serious vulnerabilities in Shadowsocks AEAD encryption, which cannot guarantee the integrity of the communication content"),n(o)])]),b,g,v]),f,e("p",null,[s("The user level that the connection will use to determine the corresponding "),n(t,{to:"/en/config/policy.html#levelpolicyobject"},{default:c(()=>[s("Local Policy")]),_:1}),s(".")]),e("p",null,[s("The value of "),y,s(" corresponds to the value of "),q,s(" in the "),n(t,{to:"/en/config/policy.html#policyobject"},{default:c(()=>[s("policy")]),_:1}),s(". If not specified, the default value is 0.")]),w,_])}const C=i(d,[["render",x],["__file","shadowsocks.html.vue"]]);export{C as default};
