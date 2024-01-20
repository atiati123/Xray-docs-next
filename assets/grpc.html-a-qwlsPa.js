import{_ as s,r as n,o as a,c as i,a as e,b as c,d as r,e as t}from"./app--OHw3-J5.js";const l={},d=t(`<h1 id="grpc" tabindex="-1"><a class="header-anchor" href="#grpc" aria-hidden="true">#</a> gRPC</h1><p>An modified transport protocol based on gRPC.</p><p>gRPC is based on the HTTP/2 protocol and can theoretically be relayed by other servers that support HTTP/2, such as Nginx.</p><p>gRPC and HTTP/2 has built-in multiplexing, so it is not recommended to enable <code>mux.cool</code> when using gRPC or HTTP/2.</p><div class="custom-container warning"><p class="custom-container-title">⚠⚠⚠</p><ul><li>gRPC doesn&#39;t support specifying the Host. Please enter the <strong>correct domain name</strong> in the outbound proxy address, or fill in <code>ServerName</code> in <code>(x)tlsSettings</code>, otherwise connection cannot be established.</li><li>gRPC doesn&#39;t support fallback to other services.</li><li>gRPC services are at risk of being actively probed. It is recommended to use reverse proxy tools such as Caddy or Nginx to perform path-based routing.</li></ul></div><div class="custom-container tip"><p class="custom-container-title">Tip</p><p>If you are using a reverse proxy such as Caddy or Nginx, please note the following:</p><ul><li>Make sure that the reverse proxy server has enabled HTTP/2.</li><li>Use HTTP/2 or h2c (Caddy), grpc_pass (Nginx) to connect to Xray.</li><li>The path for regular mode is <code>/\${serviceName}/Tun</code>, and for Multi mode it is <code>/\${serviceName}/TunMulti</code>.</li><li>If you need to receive the client IP address, you can use the <code>X-Real-IP</code> header sent by Caddy / Nginx to pass the client IP.</li></ul></div><div class="custom-container tip"><p class="custom-container-title">Tip</p><p>If you are using fallback, please note the following:</p><ul><li>Fallback to gRPC is not recommended, as there is a risk of being actively probed.</li><li>Please make sure that <code>h2</code> is the first priority in <code>(x)tlsSettings.alpn</code>, otherwise gRPC (HTTP/2) may not be able to complete TLS handshake.</li><li>gRPC cannot perform path-based routing by Xray.</li></ul></div><h2 id="grpcobject" tabindex="-1"><a class="header-anchor" href="#grpcobject" aria-hidden="true">#</a> GRPCObject</h2><p><code>GRPCObject</code> corresponds to the <code>grpcSettings</code> item.</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;serviceName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;multiMode&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;idle_timeout&quot;</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
  <span class="token property">&quot;health_check_timeout&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
  <span class="token property">&quot;permit_without_stream&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;initial_windows_size&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>serviceName</code>: string</p></blockquote><p>A string that specifies the service name, similar to the <code>path</code> in HTTP/2.</p><p>The client will use this name for communication, and the server will verify whether the service name matches.</p>`,13),p=e("code",null,"multiMode",-1),u=t('<p><code>true</code> enables <code>multiMode</code>, with a default value of <code>false</code>.</p><p>This is an <strong>experimental</strong> option that may not be retained for the long term, and cross-version compatibility is not guaranteed. This mode can bring about a performance improvement of around 20% in <strong>test environments</strong>, but actual effects may vary depending on the transmission rate.</p><div class="custom-container tip"><p class="custom-container-title">Tip</p><p><strong>Only need to be configured</strong> in <code>outbound</code> <strong>(client)</strong>.</p></div><blockquote><p><code>idle_timeout</code>: number</p></blockquote><p>The health check is performed when no data transmission occurs for a certain period of time, measured in seconds. If this value is set to less than <code>10</code>, <code>10</code> will be used as the minimum value.</p><div class="custom-container tip"><p class="custom-container-title">Tip</p><p>If you are not using reverse proxy tools such as Caddy or Nginx (<strong>which is usually the case</strong>), if this value is set to less than <code>60</code>, the server may send &quot;unexpected h2 GOAWAY&quot; frames to close existing connections.</p></div><p>By default, the health check is <strong>not enabled</strong>.</p><div class="custom-container tip"><p class="custom-container-title">Tip</p><p><strong>Only need to be configured</strong> in <code>outbound</code> <strong>(client)</strong>.</p></div><div class="custom-container tip"><p class="custom-container-title">Tip</p><p>Enabling health checks may help solve some &quot;connection drop&quot; issues.</p></div><blockquote><p><code>health_check_timeout</code>: number</p></blockquote><p>The timeout for the health check, measured in seconds. If the health check is not completed within this time period, it is considered to have failed. The default value is <code>20</code></p><div class="custom-container tip"><p class="custom-container-title">Tip</p><p><strong>Only need to be configured</strong> in <code>outbound</code> <strong>(client)</strong>.</p></div><blockquote><p><code>permit_without_stream</code>: true | false</p></blockquote><p><code>true</code> allows health checks to be performed when there are no sub-connections. The default value is <code>false</code>.</p><div class="custom-container tip"><p class="custom-container-title">Tip</p><p><strong>Only need to be configured</strong> in <code>outbound</code> <strong>(client)</strong>.</p></div><blockquote><p><code>initial_windows_size</code>: number</p></blockquote><p>The initial window size of the h2 stream. When the value is less than or equal to <code>0</code>, this feature does not take effect. When the value is greater than <code>65535</code>, the Dynamic Window mechanism will be disabled. The default value is <code>0</code>, which means it is not effective.</p><div class="custom-container tip"><p class="custom-container-title">Tip</p><p><strong>Only need to be configured</strong> in <code>outbound</code> <strong>(client)</strong>.</p></div><div class="custom-container tip"><p class="custom-container-title">Tip</p><p>When using Cloudflare CDN, set the value to <code>35536</code> or higher to disable the Dynamic Window mechanism and prevent Cloudflare CDN from sending &quot;unexpected h2 GOAWAY&quot; frames to close existing connections.</p></div>',19);function h(m,g){const o=n("Badge");return a(),i("div",null,[d,e("blockquote",null,[e("p",null,[p,c(": true | false "),r(o,{text:"BETA",type:"warning"})])]),u])}const b=s(l,[["render",h],["__file","grpc.html.vue"]]);export{b as default};
