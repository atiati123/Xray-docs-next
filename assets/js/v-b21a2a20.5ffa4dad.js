(self.webpackChunkXray_docs_next=self.webpackChunkXray_docs_next||[]).push([[6515],{4735:(n,s,e)=>{"use strict";e.r(s),e.d(s,{data:()=>a});const a={key:"v-b21a2a20",path:"/document/level-1/fallbacks-lv1.html",title:"回落 (fallbacks) 功能简析",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"1. 回顾《小小白白话文》中的回落",slug:"_1-回顾《小小白白话文》中的回落",children:[]},{level:2,title:"2. 重新认识回落 (WHAT, HOW v1)",slug:"_2-重新认识回落-what-how-v1",children:[]},{level:2,title:"3. 为什么要回落 (WHY v1)",slug:"_3-为什么要回落-why-v1",children:[]},{level:2,title:"4. 重新认识【回落の完全体】 (WHAT, WHY, HOW v2)",slug:"_4-重新认识【回落の完全体】-what-why-how-v2",children:[]},{level:2,title:"5. 多层回落示例及解读",slug:"_5-多层回落示例及解读",children:[{level:3,title:"5.1 首先，我将服务器端配置的 443 监听段摘抄如下：",slug:"_5-1-首先-我将服务器端配置的-443-监听段摘抄如下",children:[]},{level:3,title:"5.2 后续监听处理的配置段摘抄如下：",slug:"_5-2-后续监听处理的配置段摘抄如下",children:[]}]},{level:2,title:"6. 结语",slug:"_6-结语",children:[]},{level:2,title:"7. 附加题",slug:"_7-附加题",children:[]}],filePathRelative:"document/level-1/fallbacks-lv1.md",git:{updatedTime:1617517861e3,contributors:[]}}},9685:(n,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>D});var a=e(6252);const l=(0,a.Wm)("h1",{id:"回落-fallbacks-功能简析"},[(0,a.Wm)("a",{class:"header-anchor",href:"#回落-fallbacks-功能简析"},"#"),(0,a.Uk)(" 回落 (fallbacks) 功能简析")],-1),o=(0,a.Wm)("p",null,"在使用 Xray 的过程中，你一定无数次的听说了【回落】这个功能。本文就稍微说明一下这个功能的逻辑以及使用方式。",-1),r=(0,a.Wm)("h2",{id:"_1-回顾《小小白白话文》中的回落"},[(0,a.Wm)("a",{class:"header-anchor",href:"#_1-回顾《小小白白话文》中的回落"},"#"),(0,a.Uk)(" 1. 回顾《小小白白话文》中的回落")],-1),t=(0,a.Uk)("如果你用了《小小白白话文》中的"),p=(0,a.Uk)("Xray 配置"),c=(0,a.Uk)("，并完成了"),u=(0,a.Uk)("HTTP 自动跳转 HTTPS 优化"),b=(0,a.Uk)("，那么你已经有了基于 "),i=(0,a.Wm)("code",null,"VLESS",-1),d=(0,a.Uk)(" 协议的简易回落："),m=(0,a.uE)('<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&quot;inbounds&quot;: [\n    {\n        &quot;port&quot;: 443,\n        &quot;protocol&quot;: &quot;vless&quot;,\n        &quot;settings&quot;: {\n            &quot;clients&quot;: [\n                ...\n            ],\n            &quot;decryption&quot;: &quot;none&quot;,\n            &quot;fallbacks&quot;: [\n                {\n                    &quot;dest&quot;: 8080 // 默认回落到防探测的代理\n                }\n            ]\n        },\n        &quot;streamSettings&quot;: {\n            ...\n        }\n    }\n]\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>这一段配置用人话要怎么解释呢？</p><ol><li><p><strong><code>Xray</code> 的入站端口 <code>[inbound port]</code> 是 <code>443</code></strong></p><p>即由 <code>Xray</code> 负责监听 <code>443</code> 端口的 <code>HTTPS</code> 流量</p></li><li><p><strong><code>Xray</code> 的入站协议 <code>[inbound protocol]</code> 是 <code>vless</code></strong></p><p>只有 <code>vless</code> 协议的流量才会流入 <code>Xray</code> 中做后续处理。</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p><strong>注：</strong> <code>VLESS</code> 这个轻量协议开发的初衷就是给 <code>xray</code> 及 <code>v2fly</code> 等核心引入回落功能、并同时减少冗余校验/加密。（当然，到目前为止，<code>xray</code> 中的 <code>trojan</code> 协议也已完整支持回落功能。）</p></div></li><li><p><strong>回落目标端口 <code>[fallback dest]</code> 是 <code>8080</code></strong></p><p><code>Xray</code> 接受 <code>443</code> 端口的访问流量后，属于 <code>vless</code> 协议的流量、由 <code>Xray</code> 进行内部处理并转发至出站模块。而其他非 <code>vless</code> 协议的流量，则转发至 <code>8080</code> 端口。</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p><strong>问：到底是单数还是复数？</strong></p><p>答：一定有聪明的同学发现，配置文件中，明明是复数 <code>inbounds</code>, <code>fallbacks</code>，为什么我解释的时候都是单数：<code>inbound</code>, <code>fallback</code> 呢？</p><p>因为，配置文件中用复数，说明 <code>xray</code> 支持 N 个同等级的元素（即 N 个入站，M 个回落等等），上面的示例解析中仅仅是其中一个，所以我用了单数。</p></div></li><li><p><strong>回落给 <code>8080</code> 端口的流量，由后续程序处理</strong></p><p>小小白白话文中的示例，就是 <code>8080</code> 端口由 <code>Nginx</code> 处理，根据配置找到并展示小熊猫的网页。</p></li><li><p><strong>总结，小小白白话文示例中的最简单回落，完整数据路线如下：</strong></p><div class="language-mermaid ext-mermaid line-numbers-mode"><pre class="language-mermaid"><code>graph LR;\n\nW(外部 HTTP:80 请求) --&gt; N80(HTTP:80)\n\nsubgraph Nginx 外部监听\nN80 -.- N301(301转写) -.- N443(HTTPS:443)\nend\n\nN443 --&gt; X(Xray 监听 443) .- X1{入站判断}\nX1 --&gt; |接收 VLESS 流量| X2(Xray内部规则)\nX2 --&gt; O(Xray Outbounds 出站)\nX1 ==&gt; |回落 非VLESS 流量| N8080(Nginx:8080)\nN8080:::nginxclass ==&gt; H(index.html)\n\nH:::nginxclass\nclassDef nginxclass fill:#FFFFDE\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div></li></ol><h2 id="_2-重新认识回落-what-how-v1"><a class="header-anchor" href="#_2-重新认识回落-what-how-v1">#</a> 2. 重新认识回落 (WHAT, HOW <code>v1</code>)</h2><p>基于上面的示例，你应该就可以明白什么是回落（What）和怎么回落（How）了，简单地说就是下面这几个要素：</p><ol><li>回落的时间是流量进入 <code>Xray监听端口</code> 后</li><li>回落的依据是 <code>协议类型</code> 等流量特征</li><li>回落的目标是某个 <code>端口</code></li><li>被回落的流量由监听 <code>回落端口</code> 的后续程序接手</li></ol><h2 id="_3-为什么要回落-why-v1"><a class="header-anchor" href="#_3-为什么要回落-why-v1">#</a> 3. 为什么要回落 (WHY <code>v1</code>)</h2><p>最初，是为了防御 <strong>【主动探测】</strong> (Active Probing)</p><p><strong>主动探测：</strong> 简单粗暴的理解，就是指外部通过发送特定的网络请求，并解读服务器的回应内容，来推测服务器端是否运行了 <code>xray</code>, <code>v2fly</code>, <code>shadowsocks</code> 等代理工具。一旦可以准确认定，则服务器可能受到干扰或阻断。</p><p>之所以可以根据服务器回应内容进行解读，就是因为一次完整的数据请求，其实有很多数据交换的步骤，每一个步骤，都会产生一些软件特征。用大白话说就是：</p><ul><li>正常的网站的回应，一定【会有】类似 <code>Nginx</code>, <code>Apache</code>, <code>MySQL</code> 的 Web 服务、数据库等工具的特征</li><li>正常的网站的回应，一定【不会有】类似 <code>xray</code>, <code>v2fly</code>, <code>shadowsocks</code> 等代理工具的特征</li></ul><p>于是，当我们给 <code>Xray</code> 提供了【回落】功能后（如上例，回落给 <code>Nginx</code>），面对任何用来探测的请求，产生的结果是：</p><ul><li>探测流量无法掌握你的 <code>VLESS</code> 要素，故都会被回落至 <code>Nginx</code></li><li>探测流量全都回落进入 <code>Nginx</code> ，故 VPS 服务器的回应一定【会有】 <code>Nginx</code> 的特征</li><li>因为 <code>Xray</code> 本身不对探测流量做任何回应 ，所以 VPS 的回应一定【不会有】 <code>Xray</code> 的特征</li></ul><p>至此，【回落】功能就从数据交互逻辑上解决了服务器被 <strong>【主动探测】</strong> 的安全隐患。</p><h2 id="_4-重新认识【回落の完全体】-what-why-how-v2"><a class="header-anchor" href="#_4-重新认识【回落の完全体】-what-why-how-v2">#</a> 4. 重新认识【回落の完全体】 (WHAT, WHY, HOW <code>v2</code>)</h2><p>为什么又要再次认识回落呢？ 因为，上面仅仅说清楚了基于“协议”的、抵抗【主动探测】的初版回落。</p>',16),q=(0,a.Uk)("在 "),g={href:"https://github.com/rprx",target:"_blank",rel:"noopener noreferrer"},h=(0,a.Uk)("rprx"),v=(0,a.Uk)(" 不断开发迭代 "),X=(0,a.Wm)("code",null,"VLESS",-1),x=(0,a.Uk)(" 协议及 "),y=(0,a.Wm)("code",null,"fallback",-1),k=(0,a.Uk)(" 功能的过程种，逐渐发现，回落完全可以更加灵活强大，只要在保证抵抗【主动探测】的前提下，充分利用数据首包中的信息，其实可以做到多元素、多层次的回落。（如 "),S=(0,a.Wm)("code",null,"path",-1),w=(0,a.Uk)(", "),f=(0,a.Wm)("code",null,"alpn",-1),W=(0,a.Uk)(" 等）"),T=(0,a.uE)('<p>基于这个开发理念，【回落】功能才逐渐成长为现在的完全体，即完成了 <code>纯伪装 --&gt; ws分流 --&gt; 多协议多特征分流</code> 的进化。最终版甚至完全替代了以前要用 Web 服务器、其他工具才能完成的分流的功能。且由于上述的【回落/分流】处理都在首包判断阶段以毫秒级的速度完成、不涉及任何数据操作，所以几乎没有任何过程损耗。</p><p><strong>因此，现在 <code>Xray</code> 中【完整体的回落功能】，同时具备下述属性：</strong></p><ul><li><strong>安全：</strong> 充分抵御主动探测攻击</li><li><strong>高效：</strong> 几乎毫无性能损失</li><li><strong>灵活：</strong> 数据灵活分流、常用端口复用（如 443）</li></ul><div class="custom-container tip"><p class="custom-container-title">啰嗦君</p><p>这样多轮介绍虽然略显繁琐，但只有这样层层深入展开，才能充分的说明【回落の完全体】独有的强大！</p></div><h2 id="_5-多层回落示例及解读"><a class="header-anchor" href="#_5-多层回落示例及解读">#</a> 5. 多层回落示例及解读</h2>',5),E=(0,a.Uk)("理解了【回落の完全体】是什么，那就可以动手操作配置多层回落了。其实，项目已经提供了非常完整的示例，即官方模板中的 "),H={href:"https://github.com/XTLS/Xray-examples/blob/main/VLESS-TCP-XTLS-WHATEVER/",target:"_blank",rel:"noopener noreferrer"},_=(0,a.Uk)("VLESS-TCP-XTLS-WHATEVER"),P=(0,a.Uk)("。"),A=(0,a.uE)('<h3 id="_5-1-首先-我将服务器端配置的-443-监听段摘抄如下"><a class="header-anchor" href="#_5-1-首先-我将服务器端配置的-443-监听段摘抄如下">#</a> 5.1 首先，我将服务器端配置的 443 监听段摘抄如下：</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;port&quot;: 443,\n    &quot;protocol&quot;: &quot;vless&quot;,\n    &quot;settings&quot;: {\n        &quot;clients&quot;: [\n            {\n                    &quot;id&quot;: &quot;&quot;, // 填写你的 UUID\n                    &quot;flow&quot;: &quot;xtls-rprx-direct&quot;,\n                    &quot;level&quot;: 0,\n                    &quot;email&quot;: &quot;love@example.com&quot;\n            }\n        ],\n        &quot;decryption&quot;: &quot;none&quot;,\n        &quot;fallbacks&quot;: [\n            {\n                &quot;dest&quot;: 1310, // 默认回落到 Xray 的 Trojan 协议\n                &quot;xver&quot;: 1\n            },\n            {\n                &quot;path&quot;: &quot;/websocket&quot;, // 必须换成自定义的 PATH\n                &quot;dest&quot;: 1234,\n                &quot;xver&quot;: 1\n            },\n            {\n                &quot;path&quot;: &quot;/vmesstcp&quot;, // 必须换成自定义的 PATH\n                &quot;dest&quot;: 2345,\n                &quot;xver&quot;: 1\n            },\n            {\n                &quot;path&quot;: &quot;/vmessws&quot;, // 必须换成自定义的 PATH\n                &quot;dest&quot;: 3456,\n                &quot;xver&quot;: 1\n            }\n        ]\n    },\n    &quot;streamSettings&quot;: {\n        &quot;network&quot;: &quot;tcp&quot;,\n        &quot;security&quot;: &quot;xtls&quot;,\n        &quot;xtlsSettings&quot;: {\n            &quot;alpn&quot;: [\n                &quot;http/1.1&quot;\n            ],\n            &quot;certificates&quot;: [\n                {\n                    &quot;certificateFile&quot;: &quot;/path/to/fullchain.crt&quot;, // 换成你的证书，绝对路径\n                    &quot;keyFile&quot;: &quot;/path/to/private.key&quot; // 换成你的私钥，绝对路径\n                }\n            ]\n        }\n    }\n},\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div><p>这一段配置用人话要怎么解释呢？</p><ol><li><p><strong><code>Xray</code> 的入站端口 (<code>inbound port</code>) 是 <code>443</code></strong></p><p>即由 <code>Xray</code> 负责监听 <code>443</code> 端口的 <code>HTTPS</code> 流量，并使用 <code>certificates</code> 项下设定的 <code>TLS</code> 证书来进行验证</p></li><li><p><strong><code>Xray</code> 的入站协议 (<code>inbound protocol</code>) 是 <code>vless</code></strong></p><p><code>vless</code> 协议流量直接流入 <code>Xray</code> 中做后续处理</p></li><li><p><strong>非 <code>VLESS</code> 协议流量有 4 个不同的回落目标：</strong></p><ol><li><code>path</code> 为 <code>websocket</code> 的流量，回落给端口 <code>1234</code> 后续处理</li><li><code>path</code> 为 <code>vmesstcp</code> 的流量，回落给端口 <code>2345</code> 后续处理</li><li><code>path</code> 为 <code>vmessws</code> 的流量，回落给端口 <code>3456</code> 后续处理</li><li>其它所有流量，回落给端口 <code>1310</code> 后续处理</li></ol></li><li><p><strong><code>xver</code> 为 <code>1</code> 表示开启 <code>proxy protocol</code> 功能，向后传递来源真实 IP</strong></p></li><li><p><strong>上述回落结构如下图所示：</strong></p><div class="language-mermaid ext-mermaid line-numbers-mode"><pre class="language-mermaid"><code>graph LR;\n\nW443(外部 HTTP:443 请求) --&gt; X443(Xray-inbound: 443) .- X1{入站判断}\nX1 --&gt; |协议 = VLESS 的流量| X2(Xray内部规则)\nX2 --&gt; O(Xray Outbounds 出站)\n\nX1 --&gt; |path = /websocket 的流量| X1234(Xray-inbound:1234)\nX1 --&gt; |path = /vmesstcp 的流量| X2345(Xray-inbound:2345)\nX1 --&gt; |path = /vmessws 的流量| X3456(Xray-inbound:3456)\nX1 --&gt; |其它所有流量| X1310(Xray-inbound:1310)\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></li><li><p><strong>网页回落不见了！</strong></p><p>没错，聪明的同学应该发现了，防御【主动探测】的 <code>nginx回落</code> 不见了！！！这是为什么呢？会不会不安全？别急，我们继续分析：</p></li></ol><h3 id="_5-2-后续监听处理的配置段摘抄如下"><a class="header-anchor" href="#_5-2-后续监听处理的配置段摘抄如下">#</a> 5.2 后续监听处理的配置段摘抄如下：</h3><ol><li><p>后续处理回落至 <code>1310</code> 端口的流量，按照下面的配置验证、处理：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;port&quot;: 1310,\n    &quot;listen&quot;: &quot;127.0.0.1&quot;,\n    &quot;protocol&quot;: &quot;trojan&quot;,\n    &quot;settings&quot;: {\n        &quot;clients&quot;: [\n            {\n                &quot;password&quot;: &quot;&quot;, // 填写你的密码\n                &quot;level&quot;: 0,\n                &quot;email&quot;: &quot;love@example.com&quot;\n            }\n        ],\n        &quot;fallbacks&quot;: [\n            {\n                &quot;dest&quot;: 80 // 或者回落到其它也防探测的代理\n            }\n        ]\n    },\n    &quot;streamSettings&quot;: {\n        &quot;network&quot;: &quot;tcp&quot;,\n        &quot;security&quot;: &quot;none&quot;,\n        &quot;tcpSettings&quot;: {\n            &quot;acceptProxyProtocol&quot;: true\n        }\n    }\n},\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>看，神奇的事情发生了， <code>trojan</code> 协议这里又出现了一个新的 <code>fallbacks</code>。前面已经说过，<code>xray</code> 中的 <code>trojan</code> 协议也具有完整的回落能力，所以，此时 <code>trojan</code> 协议可以再次做判断和回落（这也就是传说中的套娃回落了）：</p><ul><li>所有 <code>trojan</code> 协议的流量，流入 <code>Xray</code> 中做后续处理</li><li>所有非 <code>trojan</code> 协议的流量，转发至 <code>80</code> 端口，【主动探测】的防御，完成！</li></ul></li><li><p>后续处理回落至 <code>1234</code> 端口的流量，仔细看！它其实是 <code>vless+ws</code>：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;port&quot;: 1234,\n    &quot;listen&quot;: &quot;127.0.0.1&quot;,\n    &quot;protocol&quot;: &quot;vless&quot;,\n    &quot;settings&quot;: {\n        &quot;clients&quot;: [\n            {\n                &quot;id&quot;: &quot;&quot;, // 填写你的 UUID\n                &quot;level&quot;: 0,\n                &quot;email&quot;: &quot;love@example.com&quot;\n            }\n        ],\n        &quot;decryption&quot;: &quot;none&quot;\n    },\n    &quot;streamSettings&quot;: {\n        &quot;network&quot;: &quot;ws&quot;,\n        &quot;security&quot;: &quot;none&quot;,\n        &quot;wsSettings&quot;: {\n            &quot;acceptProxyProtocol&quot;: true, // 提醒：若你用 Nginx/Caddy 等反代 WS，需要删掉这行\n            &quot;path&quot;: &quot;/websocket&quot; // 必须换成自定义的 PATH，需要和分流的一致\n        }\n    }\n},\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div></li><li><p>后续处理回落至 <code>2345</code> 端口的流量，仔细看！它其实是 <code>vmess直连</code>：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;port&quot;: 2345,\n    &quot;listen&quot;: &quot;127.0.0.1&quot;,\n    &quot;protocol&quot;: &quot;vmess&quot;,\n    &quot;settings&quot;: {\n        &quot;clients&quot;: [\n            {\n                &quot;id&quot;: &quot;&quot;, // 填写你的 UUID\n                &quot;level&quot;: 0,\n                &quot;email&quot;: &quot;love@example.com&quot;\n            }\n        ]\n    },\n    &quot;streamSettings&quot;: {\n        &quot;network&quot;: &quot;tcp&quot;,\n        &quot;security&quot;: &quot;none&quot;,\n        &quot;tcpSettings&quot;: {\n            &quot;acceptProxyProtocol&quot;: true,\n            &quot;header&quot;: {\n                &quot;type&quot;: &quot;http&quot;,\n                &quot;request&quot;: {\n                    &quot;path&quot;: [\n                        &quot;/vmesstcp&quot; // 必须换成自定义的 PATH，需要和分流的一致\n                    ]\n                }\n            }\n        }\n    }\n},\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div></li><li><p>后续处理回落至 <code>3456</code> 端口的流量，再仔细看！它其实是是 <code>vmess+ws(+cdn)</code>。</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p><strong>说明：</strong> 你没看错，这就是 v2fly 曾经的推荐组合之一，并可完整支持 <code>CDN</code>。现已加入完美回落套餐哦！</p></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;port&quot;: 3456,\n    &quot;listen&quot;: &quot;127.0.0.1&quot;,\n    &quot;protocol&quot;: &quot;vmess&quot;,\n    &quot;settings&quot;: {\n        &quot;clients&quot;: [\n            {\n                &quot;id&quot;: &quot;&quot;, // 填写你的 UUID\n                &quot;level&quot;: 0,\n                &quot;email&quot;: &quot;love@example.com&quot;\n            }\n        ]\n    },\n    &quot;streamSettings&quot;: {\n        &quot;network&quot;: &quot;ws&quot;,\n        &quot;security&quot;: &quot;none&quot;,\n        &quot;wsSettings&quot;: {\n            &quot;acceptProxyProtocol&quot;: true, // 提醒：若你用 Nginx/Caddy 等反代 WS，需要删掉这行\n            &quot;path&quot;: &quot;/vmessws&quot; // 必须换成自定义的 PATH，需要和分流的一致\n        }\n    }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div></li><li><p>至此，我们就能够完整的画出模板的回落路线了：</p></li></ol><div class="language-mermaid ext-mermaid line-numbers-mode"><pre class="language-mermaid"><code>    graph LR;\n\n    W443(外部 HTTP:443 请求) --&gt; X443(Xray-inbound: 443) .- X1{入站判断}\n    X1 --&gt; |协议 = VLESS 的流量| X2(Xray内部规则)\n    X2 --&gt; XO(Xray Outbounds 出站)\n\n    X1 --&gt; |path = /websocket 的流量| X1234(Xray-inbound:1234)\n    X1 --&gt; |path = /vmesstcp 的流量| X2345(Xray-inbound:2345)\n    X1 --&gt; |path = /vmessws 的流量| X3456(Xray-inbound:3456)\n    X1 --&gt; |其它所有流量| X1310(Xray-inbound:1310)\n\n    X1234 --&gt; X2\n    X2345 --&gt; X2\n    X3456 --&gt; X2\n\n    X1310 --&gt; |协议 = trojan 的流量| X2\n    X1310 --&gt; |其他所有流量| N80(Nginx:80)\n\n    N80:::nginxclass --&gt; H(index.html)\n\n    H:::nginxclass\n    classDef nginxclass fill:#FFFFDE\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="_6-结语"><a class="header-anchor" href="#_6-结语">#</a> 6. 结语</h2><p>至此，<code>Xray</code> 的【回落】功能就介绍完了。希望本文能够对你理解 <code>Xray</code> 的强大有所帮助。</p><h2 id="_7-附加题"><a class="header-anchor" href="#_7-附加题">#</a> 7. 附加题</h2>',10),N=(0,a.Uk)("我再无耻的留一个附加题：本文详解的 "),U={href:"https://github.com/XTLS/Xray-examples/blob/main/VLESS-TCP-XTLS-WHATEVER/",target:"_blank",rel:"noopener noreferrer"},L=(0,a.Uk)("VLESS-TCP-XTLS-WHATEVER"),V=(0,a.Uk)(" 模板？是否有可以优化的地方？"),C=(0,a.Wm)("p",null,"提示：HTTP 自动跳转 HTTPS",-1),D={render:function(n,s){const e=(0,a.up)("RouterLink"),D=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.j4)(a.HY,null,[l,o,r,(0,a.Wm)("p",null,[t,(0,a.Wm)(e,{to:"/document/level-0/ch07-xray-server.html#_7-4-%E9%85%8D%E7%BD%AExray"},{default:(0,a.w5)((()=>[p])),_:1}),c,(0,a.Wm)(e,{to:"/document/level-0/ch07-xray-server.html#_7-8-%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%BC%98%E5%8C%96%E4%B9%8B%E4%BA%8C-%E5%BC%80%E5%90%AFhttp%E8%87%AA%E5%8A%A8%E8%B7%B3%E8%BD%AChttps"},{default:(0,a.w5)((()=>[u])),_:1}),b,i,d]),m,(0,a.Wm)("p",null,[q,(0,a.Wm)("a",g,[h,(0,a.Wm)(D)]),v,X,x,y,k,S,w,f,W]),T,(0,a.Wm)("p",null,[E,(0,a.Wm)("a",H,[_,(0,a.Wm)(D)]),P]),A,(0,a.Wm)("p",null,[N,(0,a.Wm)("a",U,[L,(0,a.Wm)(D)]),V]),C],64)}}}}]);