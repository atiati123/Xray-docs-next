(self.webpackChunkXray_docs_next=self.webpackChunkXray_docs_next||[]).push([[3994],{7804:(o,e,n)=>{"use strict";n.r(e),n.d(e,{data:()=>s});const s={key:"v-1d860c29",path:"/config/log.html",title:"日志配置",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"LogObject",slug:"logobject",children:[]}],filePathRelative:"config/log.md",git:{updatedTime:1616738467e3,contributors:[]}}},1427:(o,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>a});const s=(0,n(6252).uE)('<h1 id="日志配置"><a class="header-anchor" href="#日志配置">#</a> 日志配置</h1><p>日志配置，控制 Xray 输出日志的方式.</p><p>Xray 有两种日志, 访问日志和错误日志, 你可以分别配置两种日志的输出方式.</p><h2 id="logobject"><a class="header-anchor" href="#logobject">#</a> LogObject</h2><p>LogObject 对应配置文件的 <code>log</code> 项。</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;log&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;access&quot;</span><span class="token operator">:</span> <span class="token string">&quot;文件地址&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;error&quot;</span><span class="token operator">:</span> <span class="token string">&quot;文件地址&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;loglevel&quot;</span><span class="token operator">:</span> <span class="token string">&quot;warning&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;dnsLog&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><blockquote><p><code>access</code>: string</p></blockquote><p>访问日志的文件地址，其值是一个合法的文件地址，如<code>&quot;/var/log/Xray/access.log&quot;</code>（Linux）或者<code>&quot;C:\\\\Temp\\\\Xray\\\\_access.log&quot;</code>（Windows）。当此项不指定或为空值时，表示将日志输出至 stdout。</p><ul><li>特殊值<code>none</code>，即关闭 access log。</li></ul><blockquote><p><code>error</code>: string</p></blockquote><p>错误日志的文件地址，其值是一个合法的文件地址，如<code>&quot;/var/log/Xray/error.log&quot;</code>（Linux）或者<code>&quot;C:\\\\Temp\\\\Xray\\\\_error.log&quot;</code>（Windows）。当此项不指定或为空值时，表示将日志输出至 stdout。</p><ul><li>特殊值<code>none</code>，即关闭 error log。</li></ul><blockquote><p><code>loglevel</code>: &quot;debug&quot; | &quot;info&quot; | &quot;warning&quot; | &quot;error&quot; | &quot;none&quot;</p></blockquote><p>error 日志的级别, 指示 error 日志需要记录的信息. 默认值为 <code>&quot;warning&quot;</code>。</p><ul><li><code>&quot;debug&quot;</code>：调试程序时用到的输出信息。同时包含所有 <code>&quot;info&quot;</code> 内容。</li><li><code>&quot;info&quot;</code>：运行时的状态信息等，不影响正常使用。同时包含所有 <code>&quot;warning&quot;</code> 内容。</li><li><code>&quot;warning&quot;</code>：发生了一些并不影响正常运行的问题时输出的信息，但有可能影响用户的体验。同时包含所有 <code>&quot;error&quot;</code> 内容。</li><li><code>&quot;error&quot;</code>：Xray 遇到了无法正常运行的问题，需要立即解决。</li><li><code>&quot;none&quot;</code>：不记录任何内容。</li></ul><blockquote><p><code>dnsLog</code>: bool</p></blockquote><p>是否启用 DNS 查询日志，例如：<code>DOH//doh.server got answer: domain.com -&gt; [ip1, ip2] 2.333ms</code></p>',17),a={render:function(o,e){return s}}}}]);