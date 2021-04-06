(self.webpackChunkXray_docs_next=self.webpackChunkXray_docs_next||[]).push([[9830],{3441:(s,a,e)=>{"use strict";e.r(a),e.d(a,{data:()=>n});const n={key:"v-83b3fa90",path:"/development/build.html",title:"编译文档",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"前序工作",slug:"前序工作",children:[]},{level:2,title:"拉取 Xray 源代码",slug:"拉取-xray-源代码",children:[]},{level:2,title:"构建二进制",slug:"构建二进制",children:[{level:3,title:"Windows(Powershell):",slug:"windows-powershell",children:[]},{level:3,title:"macOS, Linux:",slug:"macos-linux",children:[]}]},{level:2,title:"交叉编译：",slug:"交叉编译",children:[]},{level:2,title:"可复现构建：",slug:"可复现构建",children:[]}],filePathRelative:"development/build.md",git:{updatedTime:1616738467e3,contributors:[]}}},6842:(s,a,e)=>{"use strict";e.r(a),e.d(a,{default:()=>b});var n=e(6252);const l=(0,n.Wm)("h1",{id:"编译文档"},[(0,n.Wm)("a",{class:"header-anchor",href:"#编译文档"},"#"),(0,n.Uk)(" 编译文档")],-1),o=(0,n.Wm)("h2",{id:"前序工作"},[(0,n.Wm)("a",{class:"header-anchor",href:"#前序工作"},"#"),(0,n.Uk)(" 前序工作")],-1),r=(0,n.Uk)("Xray 使用 "),t={href:"https://golang.org/",target:"_blank",rel:"noopener noreferrer"},p=(0,n.Uk)("Golang"),c=(0,n.Uk)(" 作为编程语言，你需要先安装最新版本 Golang 才能够编译。"),i={class:"custom-container tip"},d=(0,n.Wm)("p",{class:"custom-container-title"},"TIP",-1),u=(0,n.Uk)("安装 Golang: "),h={href:"https://golang.org/doc/install",target:"_blank",rel:"noopener noreferrer"},g=(0,n.Uk)("golang.org/doc/install"),m=(0,n.uE)('<blockquote><p>如果你不幸使用 Windows, 请 <strong>务必</strong> 使用 Powershell</p></blockquote><h2 id="拉取-xray-源代码"><a class="header-anchor" href="#拉取-xray-源代码">#</a> 拉取 Xray 源代码</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/XTLS/Xray-core.git\n<span class="token builtin class-name">cd</span> Xray-core <span class="token operator">&amp;&amp;</span> go mod download\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote><p>如果你闲的没事干，可以试试 GitHub 官方工具: <code>gh repo clone XTLS/Xray-core</code></p></blockquote><p>注意：在无法正常访问 Google 的网络环境，依赖无法被正常拉取，需要先设置 <code>GOPROXY</code>：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>go <span class="token function">env</span> -w <span class="token assign-left variable">GOPROXY</span><span class="token operator">=</span>https://goproxy.io,direct\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="构建二进制"><a class="header-anchor" href="#构建二进制">#</a> 构建二进制</h2><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>本小节的命令需要在 Xray 根目录内运行。</p></div><h3 id="windows-powershell"><a class="header-anchor" href="#windows-powershell">#</a> Windows(Powershell):</h3><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code><span class="token variable">$env</span>:CGO_ENABLED=0\ngo build <span class="token operator">-</span>o xray<span class="token punctuation">.</span>exe <span class="token operator">-</span>trimpath <span class="token operator">-</span>ldflags <span class="token string">&quot;-s -w -buildid=&quot;</span> <span class="token punctuation">.</span><span class="token operator">/</span>main\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="macos-linux"><a class="header-anchor" href="#macos-linux">#</a> macOS, Linux:</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">CGO_ENABLED</span><span class="token operator">=</span><span class="token number">0</span> go build -o xray -trimpath -ldflags <span class="token string">&quot;-s -w -buildid=&quot;</span> ./main\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>运行以上命令会在目录下生成 xray 可执行文件。</p><h2 id="交叉编译"><a class="header-anchor" href="#交叉编译">#</a> 交叉编译：</h2><p>这里以在 Windows(Powershell) 环境中，编译到 Linux 服务器为例：</p><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code><span class="token variable">$env</span>:CGO_ENABLED=0\n<span class="token variable">$env</span>:GOOS=<span class="token string">&quot;linux&quot;</span>\n<span class="token variable">$env</span>:GOARCH=<span class="token string">&quot;amd64&quot;</span>\n\ngo build <span class="token operator">-</span>o xray <span class="token operator">-</span>trimpath <span class="token operator">-</span>ldflags <span class="token string">&quot;-s -w -buildid=&quot;</span> <span class="token punctuation">.</span><span class="token operator">/</span>main\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>上传到服务器后，记得在服务器终端内执行 <code>chmod +x xray</code></p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>执行 <code>go tool dist list</code> 查看所有支持的系统与架构。</p></div><h2 id="可复现构建"><a class="header-anchor" href="#可复现构建">#</a> 可复现构建：</h2><p>按照上述步骤，能够编译出与 Release 中完全相同的二进制文件。</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>请先确认您使用的 Golang 版本与编译 Release 的一致。</p></div>',21),b={render:function(s,a){const e=(0,n.up)("OutboundLink");return(0,n.wg)(),(0,n.j4)(n.HY,null,[l,o,(0,n.Wm)("p",null,[r,(0,n.Wm)("a",t,[p,(0,n.Wm)(e)]),c]),(0,n.Wm)("div",i,[d,(0,n.Wm)("p",null,[u,(0,n.Wm)("a",h,[g,(0,n.Wm)(e)])])]),m],64)}}}}]);