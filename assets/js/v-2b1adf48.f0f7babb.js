(self.webpackChunkXray_docs_next=self.webpackChunkXray_docs_next||[]).push([[1992],{2946:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-2b1adf48",path:"/document/config.html",title:"配置运行",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"服务端配置",slug:"服务端配置",children:[]},{level:2,title:"客户端配置",slug:"客户端配置",children:[]},{level:2,title:"运行",slug:"运行",children:[]}],filePathRelative:"document/config.md",git:{updatedTime:1616738467e3,contributors:[]}}},7837:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>d});var p=a(6252);const t=(0,p.Wm)("h1",{id:"配置运行"},[(0,p.Wm)("a",{class:"header-anchor",href:"#配置运行"},"#"),(0,p.Uk)(" 配置运行")],-1),o=(0,p.Wm)("p",null,[(0,p.Wm)("a",{href:"./install"},"下载并安装"),(0,p.Uk)(" 了 Xray 之后，您需要对它进行一下配置。")],-1),e=(0,p.Wm)("p",null,"为了演示，这里只介绍简单的配置方式.",-1),l=(0,p.Uk)("如需配置更复杂的功能，请参考更详细的 "),c=(0,p.Uk)("配置文件"),r=(0,p.Uk)(" 中相关说明。"),u=(0,p.uE)('<h2 id="服务端配置"><a class="header-anchor" href="#服务端配置">#</a> 服务端配置</h2><p>你需要一台防火墙外的服务器，来运行服务器端的 Xray。配置如下：</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;inbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">10086</span><span class="token punctuation">,</span> <span class="token comment">// 服务器监听端口</span>\n      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vmess&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;clients&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;b831381d-6324-4d53-ad4f-8cda48b30811&quot;</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">]</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;outbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;freedom&quot;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>服务器的配置中需要确保 <code>id</code> 和端口与客户端一致，就可以正常连接了。</p><h2 id="客户端配置"><a class="header-anchor" href="#客户端配置">#</a> 客户端配置</h2><p>在你的 PC（或手机）中，需要用以下配置运行 Xray ：</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;inbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">1080</span><span class="token punctuation">,</span> <span class="token comment">// SOCKS 代理端口，在浏览器中需配置代理并指向这个端口</span>\n      <span class="token property">&quot;listen&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;socks&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;udp&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;outbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vmess&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;vnext&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;server&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 服务器地址，请修改为你自己的服务器 ip 或域名</span>\n            <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">10086</span><span class="token punctuation">,</span> <span class="token comment">// 服务器端口</span>\n            <span class="token property">&quot;users&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n              <span class="token punctuation">{</span>\n                <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;b831381d-6324-4d53-ad4f-8cda48b30811&quot;</span>\n              <span class="token punctuation">}</span>\n            <span class="token punctuation">]</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">]</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;freedom&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;direct&quot;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;routing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;domainStrategy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;IPOnDemand&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;ip&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;geoip:private&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;direct&quot;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><p>上述配置唯一要更改的地方是你的服务器 IP，配置中已注明。上述配置会把除局域网（比如访问路由器）以外的所有流量转发至你的服务器。</p><h2 id="运行"><a class="header-anchor" href="#运行">#</a> 运行</h2><ul><li>在 Windows 和 macOS 中，配置文件通常是 Xray 同目录下的 <code>config.json</code> 文件。 <ul><li>直接运行 <code>Xray</code> 或 <code>Xray.exe</code> 即可。</li></ul></li><li>在 Linux 中，配置文件通常位于 <code>/etc/xray/</code> 或 <code>/usr/local/etc/xray/</code> 目录下。 <ul><li>运行 <code>xray run -c /etc/xray/config.json</code></li><li>或使用 systemd 等工具将 Xray 作为服务在后台运行。</li></ul></li></ul>',10),i=(0,p.Uk)("更多详细的说明可以参考 "),k=(0,p.Uk)("配置文档"),b=(0,p.Uk)(" 和 "),m=(0,p.Uk)("使用心得"),q=(0,p.Uk)("。"),d={render:function(n,s){const a=(0,p.up)("RouterLink");return(0,p.wg)(),(0,p.j4)(p.HY,null,[t,o,e,(0,p.Wm)("p",null,[l,(0,p.Wm)(a,{to:"/config/"},{default:(0,p.w5)((()=>[c])),_:1}),r]),u,(0,p.Wm)("p",null,[i,(0,p.Wm)(a,{to:"/config/"},{default:(0,p.w5)((()=>[k])),_:1}),b,(0,p.Wm)(a,{to:"/documents/"},{default:(0,p.w5)((()=>[m])),_:1}),q])],64)}}}}]);