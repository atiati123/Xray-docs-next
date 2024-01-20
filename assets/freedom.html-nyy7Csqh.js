import{_ as l,r as c,o as i,c as d,a as e,b as o,d as t,w as s,e as a}from"./app--OHw3-J5.js";const u={},r=a(`<h1 id="freedom" tabindex="-1"><a class="header-anchor" href="#freedom" aria-hidden="true">#</a> Freedom</h1><p>Freedom is an outbound protocol that can be used to send (normal) TCP or UDP data to any network.</p><h2 id="outboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#outboundconfigurationobject" aria-hidden="true">#</a> OutboundConfigurationObject</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;domainStrategy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;AsIs&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;redirect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1:3366&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;userLevel&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;fragment&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;packets&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tlshello&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;length&quot;</span><span class="token operator">:</span> <span class="token string">&quot;100-200&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;interval&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10-20&quot;</span> <span class="token comment">// ms</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>domainStrategy</code>: &quot;AsIs&quot; | &quot;UseIP&quot; | &quot;UseIPv4&quot; | &quot;UseIPv6&quot;</p></blockquote><p>When the destination address is a domain name, configure the corresponding value for Freedom&#39;s behavior:</p>`,6),p=e("li",null,[e("code",null,'"AsIs"'),o(": Freedom resolves the domain name using the system DNS server and connects to it.")],-1),h=e("code",null,'"UseIP"',-1),m=e("code",null,'"UseIPv4"',-1),v=e("code",null,'"UseIPv6"',-1),f=e("code",null,'"AsIs"',-1),_={class:"custom-container tip"},q=e("p",{class:"custom-container-title"},"TIP 1",-1),k=e("code",null,'"UseIP"',-1),b=e("code",null,"sendThrough",-1),g=e("code",null,"sendThrough",-1),y=a('<div class="custom-container tip"><p class="custom-container-title">TIP 2</p><p>When using the <code>&quot;UseIPv4&quot;</code> or <code>&quot;UseIPv6&quot;</code> mode, Freedom will only use the corresponding IPv4 or IPv6 address. If <code>sendThrough</code> specifies a mismatched local address, the connection will fail.</p></div><blockquote><p><code>redirect</code>: address_port</p></blockquote><p>Freedom will force all data to be sent to the specified address (instead of the address specified in the inbound).</p><p>It is a string value, for example: <code>&quot;127.0.0.1:80&quot;</code>, <code>&quot;:1234&quot;</code>.</p><p>When the address is not specified, such as <code>&quot;:443&quot;</code>, Freedom will not modify the original destination address. When the port is <code>0</code>, such as <code>&quot;xray.com:0&quot;</code>, Freedom will not modify the original port.</p><blockquote><p><code>userLevel</code>: number</p></blockquote>',6),I=e("code",null,"userLevel",-1),P=e("code",null,"level",-1),w=e("blockquote",null,[e("p",null,[e("code",null,"fragment"),o(": map")])],-1),T=e("p",null,"A key-value map used to control TCP fragmentation，under some circumstances it can cheat the censor syetem, like bypass a SNI blacklist.",-1),U=e("p",null,[e("code",null,'"packets"'),o('：support two different methods. "1-3" is for segmentation at TCP layer, applying to the beginning 1 to 3 data writes by the client. "tlshello" is for TLS client hello packet fragmentation.')],-1),x=e("p",null,[e("code",null,'"length"'),o(": length to make the cut")],-1),j=e("p",null,[e("code",null,'"interval"'),o(": time between fragments（ms）")],-1);function F(N,S){const n=c("RouterLink");return i(),d("div",null,[r,e("ul",null,[p,e("li",null,[h,o(", "),m,o(", and "),v,o(": Xray resolves the domain name using the built-in "),t(n,{to:"/en/config/dns.html"},{default:s(()=>[o("DNS server")]),_:1}),o(" and connects to it. The default value is "),f,o(".")])]),e("div",_,[q,e("p",null,[o("When using the "),k,o(" mode and the "),b,o(" field is specified in the "),t(n,{to:"/en/config/outbound.html#outboundobject"},{default:s(()=>[o("outbound connection configuration")]),_:1}),o(", Freedom will automatically determine the required IP type, IPv4 or IPv6, based on the value of "),g,o(".")])]),y,e("p",null,[o("User level. The connection will use the corresponding "),t(n,{to:"/en/config/policy.html#levelpolicyobject"},{default:s(()=>[o("local policy")]),_:1}),o(" for this user level.")]),e("p",null,[o("The value of "),I,o(" corresponds to the value of "),P,o(" in the "),t(n,{to:"/en/config/policy.html#policyobject"},{default:s(()=>[o("policy")]),_:1}),o(". If not specified, the default value is 0.")]),w,T,U,x,j])}const L=l(u,[["render",F],["__file","freedom.html.vue"]]);export{L as default};
