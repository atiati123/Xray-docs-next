import{_ as e,r as p,o as l,c,a as n,b as s,d as a,w as o,e as u}from"./app--OHw3-J5.js";const i={},r=u(`<blockquote><p><strong>这个章节将告诉您所有的 Xray 配置细节，掌握这些内容，在您手中 Xray 将发挥更大威力。</strong></p></blockquote><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p>Xray 的配置文件为 json 格式, 客户端和服务端的配置格式没有区别, 只是实际的配置内容不一样。<br> 形式如下:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;log&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;api&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;dns&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;routing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;policy&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;inbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;outbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;transport&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;stats&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;reverse&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;fakedns&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;metrics&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),d={class:"custom-container warning"},k=n("p",{class:"custom-container-title"},"注意",-1),_=n("h2",{id:"基础配置模块",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#基础配置模块","aria-hidden":"true"},"#"),s(" 基础配置模块")],-1),b=n("p",null,"日志配置，控制 Xray 输出日志的方式.",-1),m=n("p",null,"提供了一些 API 接口供远程调用。",-1),h=n("p",null,"内置的 DNS 服务器. 如果没有配置此项，则使用系统的 DNS 设置。",-1),v=n("p",null,"路由功能。可以设置规则分流数据从不同的 outbound 发出.",-1),q=n("p",null,"本地策略，可以设置不同的用户等级和对应的策略设置。",-1),f=n("p",null,"一个数组，每个元素是一个入站连接配置。",-1),g=n("p",null,"一个数组，每个元素是一个出站连接配置。",-1),y=n("p",null,"用于配置 Xray 其它服务器建立和使用网络连接的方式。",-1),j=n("p",null,"用于配置流量数据的统计。",-1),O=n("p",null,"反向代理。可以把服务器端的流量向客户端转发，即逆向流量转发。",-1),x=n("p",null,"FakeDNS 配置。可配合透明代理使用，以获取实际域名。",-1),N=n("p",null,"metrics 配置。更直接（希望更好）的统计导出方式。",-1);function X(D,S){const t=p("RouterLink");return l(),c("div",null,[r,n("div",d,[k,n("p",null,[s("如果你刚接触 Xray, 您可以先点击查看"),a(t,{to:"/document/install.html"},{default:o(()=>[s("快速入门中的配置运行")]),_:1}),s(", 学习最基本的配置方式, 然后查看本章节内容以掌握所有 Xray 的配置方式。")])]),_,n("blockquote",null,[n("p",null,[s("log:"),a(t,{to:"/config/log.html"},{default:o(()=>[s("LogObject")]),_:1})])]),b,n("blockquote",null,[n("p",null,[s("api:"),a(t,{to:"/config/api.html"},{default:o(()=>[s("ApiObject")]),_:1})])]),m,n("blockquote",null,[n("p",null,[s("dns: "),a(t,{to:"/config/dns.html"},{default:o(()=>[s("DnsObject")]),_:1})])]),h,n("blockquote",null,[n("p",null,[s("routing: "),a(t,{to:"/config/routing.html"},{default:o(()=>[s("RoutingObject")]),_:1})])]),v,n("blockquote",null,[n("p",null,[s("policy: "),a(t,{to:"/config/policy.html"},{default:o(()=>[s("PolicyObject")]),_:1})])]),q,n("blockquote",null,[n("p",null,[s("inbounds: [ "),a(t,{to:"/config/inbound.html"},{default:o(()=>[s("InboundObject")]),_:1}),s(" ]")])]),f,n("blockquote",null,[n("p",null,[s("outbounds: [ "),a(t,{to:"/config/outbound.html"},{default:o(()=>[s("OutboundObject")]),_:1}),s(" ]")])]),g,n("blockquote",null,[n("p",null,[s("transport: "),a(t,{to:"/config/transport.html"},{default:o(()=>[s("TransportObject")]),_:1})])]),y,n("blockquote",null,[n("p",null,[s("stats: "),a(t,{to:"/config/stats.html"},{default:o(()=>[s("StatsObject")]),_:1})])]),j,n("blockquote",null,[n("p",null,[s("reverse: "),a(t,{to:"/config/reverse.html"},{default:o(()=>[s("ReverseObject")]),_:1})])]),O,n("blockquote",null,[n("p",null,[s("fakedns: "),a(t,{to:"/config/fakedns.html"},{default:o(()=>[s("FakeDnsObject")]),_:1})])]),x,n("blockquote",null,[n("p",null,[s("metrics: "),a(t,{to:"/config/metrics.html"},{default:o(()=>[s("metricsObject")]),_:1})])]),N])}const V=e(i,[["render",X],["__file","index.html.vue"]]);export{V as default};
