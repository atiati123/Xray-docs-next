import{_ as p,r as i,o as c,c as l,a as e,b as n,d as s,w as t,f as u,e as a}from"./app--OHw3-J5.js";const d={},h=e("h1",{id:"vless",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vless","aria-hidden":"true"},"#"),n(" VLESS")],-1),v=e("div",{class:"custom-container danger"},[e("p",{class:"custom-container-title"},"Danger"),e("p",null,"Currently, VLESS does not have built-in encryption, please use it on a reliable channel, such as TLS.")],-1),m=e("p",null,"VLESS is a stateless lightweight transport protocol, which is divided into inbound and outbound parts, and can be used as a bridge between Xray clients and servers.",-1),b=a(`<h2 id="outboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#outboundconfigurationobject" aria-hidden="true">#</a> OutboundConfigurationObject</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;vnext&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;example.com&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">443</span><span class="token punctuation">,</span>
      <span class="token property">&quot;users&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5783a3e7-e373-51cd-8642-c83782b807c5&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;encryption&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;flow&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xtls-rprx-vision&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>vnext</code>: [ <a href="#serverobject">ServerObject</a> ]</p></blockquote><p>An array, representing the VLESS server list, containing a set of configurations pointing to the server, each of which is a server configuration.</p><h3 id="serverobject" tabindex="-1"><a class="header-anchor" href="#serverobject" aria-hidden="true">#</a> ServerObject</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;example.com&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">443</span><span class="token punctuation">,</span>
  <span class="token property">&quot;users&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5783a3e7-e373-51cd-8642-c83782b807c5&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;encryption&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;flow&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xtls-rprx-vision&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>address</code>: address</p></blockquote><p>Server address, pointing to the server, supporting domain names, IPv4, and IPv6.</p><blockquote><p><code>port</code>: number</p></blockquote><p>Server port, usually the same as the port listened by the server.</p><blockquote><p><code>users</code>: [ <a href="#userobject">UserObject</a> ]</p></blockquote><p>Array, a list of users recognized by the server, each of which is a user configuration.</p><h3 id="userobject" tabindex="-1"><a class="header-anchor" href="#userobject" aria-hidden="true">#</a> UserObject</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5783a3e7-e373-51cd-8642-c83782b807c5&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;encryption&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;flow&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xtls-rprx-vision&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>id</code>: string</p></blockquote><p>The user ID of VLESS, which can be any string less than 30 bytes, or a valid UUID. Custom strings and their mapped UUIDs are equivalent, which means you can write an id in the configuration file to identify the same user, i.e.</p><ul><li>Write <code>&quot;id&quot;: &quot;I love 🍉 teacher 1314&quot;</code>,</li><li>Or write <code>&quot;id&quot;: &quot;5783a3e7-e373-51cd-8642-c83782b807c5&quot;</code> (this UUID is the UUID mapping of <code>I love 🍉 teacher 1314</code>)</li></ul>`,17),k={href:"https://github.com/XTLS/Xray-core/issues/158",target:"_blank",rel:"noopener noreferrer"},q=a("<p>You can use the command <code>xray uuid -i &quot;custom string&quot;</code> to generate the UUID mapped by the custom string, or use the command <code>xray uuid</code> to generate a random UUID.</p><blockquote><p><code>encryption</code>: &quot;none&quot;</p></blockquote><p>Need to fill in <code>&quot;none&quot;</code>, cannot be left empty.</p><p>This requirement is to remind users that there is no encryption and to prevent users from filling in the wrong attribute name or location, causing exposure when encryption methods come out in the future.</p><p>If the value of encryption is not set correctly, an error message will be received when using Xray or -test.</p><blockquote><p><code>flow</code>: string</p></blockquote><p>Flow control mode, used to select the XTLS algorithm.</p><p>Currently, there are the following flow control modes available in the outbound protocol:</p><ul><li>No <code>flow</code>, empty character or <code>none</code>: using regular TLS proxy</li><li><code>xtls-rprx-vision</code>: using the new XTLS mode includes inner handshake random padding supports uTLS client fingerprint simulation</li><li><code>xtls-rprx-vision-udp443</code>: same as <code>xtls-rprx-vision</code>, but allows UDP traffic with a destination of port 443</li></ul><p>In addition, currently, XTLS only supports TCP, mKCP, and DomainSocket transport modes.</p>",10),g=a('<div class="custom-container tip"><p class="custom-container-title">About xtls-rprx-*-udp443 flow control mode</p><p>When using Xray-core&#39;s XTLS, traffic to UDP port 443 is blocked by default (generally for QUIC), so the application will use TLS instead of QUIC, and XTLS will take effect. In fact, QUIC itself is not suitable for proxying because it has its own TCP functionality. When it is transmitted as UDP traffic through the VLESS protocol, the underlying protocol is TCP, which is equivalent to two layers of TCP.</p><p>If you do not need to block it, please fill in <code>xtls-rprx-*-udp443</code> on the client side and do not change the server side.</p></div><div class="custom-container tip"><p class="custom-container-title">About Splice mode</p><p>Splice is a function provided by the Linux Kernel. The system kernel directly forwards TCP without going through Xray&#39;s memory, greatly reducing the number of data copies and CPU context switches.</p><p>The usage restrictions of Splice mode are:</p><ul><li>Linux environment</li><li>Inbound protocols are <code>Dokodemo door</code>, <code>Socks</code>, <code>HTTP</code>, etc., pure TCP connections, or other inbound protocols that use XTLS</li><li>Outbound protocol is VLESS + XTLS</li><li>It is worth noting that when using the mKCP protocol, Splice will not be used (yes, although there is no error, it is not used at all)</li></ul><p>In addition, when using Splice, the speed display will lag behind, which is a feature, not a bug.</p><p>Using Vision mode will automatically enable Splice if the above conditions are met.</p></div><blockquote><p><code>level</code>: number</p></blockquote>',3),f=e("code",null,"level",-1);function y(w,S){const o=i("RouterLink"),r=i("ExternalLinkIcon");return c(),l("div",null,[h,v,m,e("p",null,[n("Unlike "),s(o,{to:"/en/config/outbounds/vmess.html"},{default:t(()=>[n("VMess")]),_:1}),n(", VLESS does not rely on system time, and the authentication method is also UUID.")]),b,e("p",null,[n("The mapping standard is in "),e("a",k,[n("VLESS UUID mapping standard: mapping custom strings to a UUIDv5"),s(r)])]),q,u(" prettier-ignore "),g,e("p",null,[n("User level, the connection will use the "),s(o,{to:"/en/config/policy.html#levelpolicyobject"},{default:t(()=>[n("local policy")]),_:1}),n(" corresponding to this user level.")]),e("p",null,[n("The value of level corresponds to the value of "),f,n(" in "),s(o,{to:"/en/config/policy.html#policyobject"},{default:t(()=>[n("policy")]),_:1}),n(". If not specified, the default is 0.")])])}const _=p(d,[["render",y],["__file","vless.html.vue"]]);export{_ as default};
