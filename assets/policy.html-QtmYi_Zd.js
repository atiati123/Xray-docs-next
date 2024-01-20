import{_ as n,o as s,c as a,e}from"./app--OHw3-J5.js";const o={},t=e(`<h1 id="本地策略" tabindex="-1"><a class="header-anchor" href="#本地策略" aria-hidden="true">#</a> 本地策略</h1><p>本地策略，可以设置不同的用户等级和对应的策略设置，比如连接超时设置。Xray 处理的每一个连接都对应一个用户，按照用户的等级（level）应用不同的策略。</p><h2 id="policyobject" tabindex="-1"><a class="header-anchor" href="#policyobject" aria-hidden="true">#</a> PolicyObject</h2><p><code>PolicyObject</code> 对应配置文件的 <code>policy</code> 项。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;policy&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;levels&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;0&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;handshake&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
        <span class="token property">&quot;connIdle&quot;</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
        <span class="token property">&quot;uplinkOnly&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;downlinkOnly&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;statsUserUplink&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;statsUserDownlink&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;bufferSize&quot;</span><span class="token operator">:</span> <span class="token number">4</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;system&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;statsInboundUplink&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">&quot;statsInboundDownlink&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">&quot;statsOutboundUplink&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">&quot;statsOutboundDownlink&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>level</code>: map{string: <a href="#levelpolicyobject">LevelPolicyObject</a>}</p></blockquote><p>一组键值对，每个键是一个字符串形式的数字（JSON 的要求），比如 <code>&quot;0&quot;</code>、<code>&quot;1&quot;</code> 等，双引号不能省略，此数字对应用户等级。每一个值是一个 <a href="#levelpolicyobject">LevelPolicyObject</a>.</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>每个入站出站代理现在都可以设置用户等级，Xray 会根据实际的用户等级应用不同的本地策略。</p></div><blockquote><p><code>system</code>: <a href="#systempolicyobject">SystemPolicyObject</a></p></blockquote><p>Xray 系统级别的策略</p><h3 id="levelpolicyobject" tabindex="-1"><a class="header-anchor" href="#levelpolicyobject" aria-hidden="true">#</a> LevelPolicyObject</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;handshake&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
  <span class="token property">&quot;connIdle&quot;</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
  <span class="token property">&quot;uplinkOnly&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token property">&quot;downlinkOnly&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
  <span class="token property">&quot;statsUserUplink&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;statsUserDownlink&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;bufferSize&quot;</span><span class="token operator">:</span> <span class="token number">10240</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>handshake</code>: number</p></blockquote><p>连接建立时的握手时间限制。单位为秒。默认值为 <code>4</code>。在入站代理处理一个新连接时，在握手阶段如果使用的时间超过这个时间，则中断该连接。</p><blockquote><p><code>connIdle</code>: number</p></blockquote><p>连接空闲的时间限制。单位为秒。默认值为 <code>300</code>。inbound/outbound 处理一个连接时，如果在 <code>connIdle</code> 时间内，没有任何数据被传输（包括上行和下行数据），则中断该连接。</p><blockquote><p><code>uplinkOnly</code>: number</p></blockquote><p>当连接下行线路关闭后的时间限制。单位为秒。默认值为 <code>2</code>。当服务器（如远端网站）关闭下行连接时，出站代理会在等待 <code>uplinkOnly</code> 时间后中断连接。</p><blockquote><p><code>downlinkOnly</code>: number</p></blockquote><p>当连接上行线路关闭后的时间限制。单位为秒。默认值为 <code>5</code>。当客户端（如浏览器）关闭上行连接时，入站代理会在等待 <code>downlinkOnly</code> 时间后中断连接。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>在 HTTP 浏览的场景中，可以将 <code>uplinkOnly</code> 和 <code>downlinkOnly</code> 设为 <code>0</code>，以提高连接关闭的效率。</p></div><blockquote><p><code>statsUserUplink</code>: true | false</p></blockquote><p>当值为 <code>true</code> 时，开启当前等级的所有用户的上行流量统计。</p><blockquote><p><code>statsUserDownlink</code>: true | false</p></blockquote><p>当值为 <code>true</code> 时，开启当前等级的所有用户的下行流量统计。</p><blockquote><p><code>bufferSize</code>: number</p></blockquote><p>每个连接的内部缓存大小。单位为 kB。当值为 <code>0</code> 时，内部缓存被禁用。</p><p>默认值:</p><ul><li>在 ARM、MIPS、MIPSLE 平台上，默认值为 <code>0</code>。</li><li>在 ARM64、MIPS64、MIPS64LE 平台上，默认值为 <code>4</code>。</li><li>在其它平台上，默认值为 <code>512</code>。</li></ul><h3 id="systempolicyobject" tabindex="-1"><a class="header-anchor" href="#systempolicyobject" aria-hidden="true">#</a> SystemPolicyObject</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;statsInboundUplink&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;statsInboundDownlink&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;statsOutboundUplink&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;statsOutboundDownlink&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>statsInboundUplink</code>: true | false</p></blockquote><p>当值为 <code>true</code> 时，开启所有入站代理的上行流量统计。</p><blockquote><p><code>statsInboundDownlink</code>: true | false</p></blockquote><p>当值为 <code>true</code> 时，开启所有入站代理的下行流量统计。</p><blockquote><p><code>statsOutboundUplink</code>: true | false</p></blockquote><p>当值为 <code>true</code> 时，开启所有出站代理的上行流量统计。</p><blockquote><p><code>statsOutboundDownlink</code>: true | false</p></blockquote><p>当值为 <code>true</code> 时，开启所有出站代理的下行流量统计。</p>`,39),p=[t];function c(l,u){return s(),a("div",null,p)}const r=n(o,[["render",c],["__file","policy.html.vue"]]);export{r as default};
