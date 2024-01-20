import{_ as n,o as a,c as s,e as t}from"./app--OHw3-J5.js";const e="/Xray-docs-next/assets/ch05-img01-nginx-default-running-gZQeEn-L.png",o="/Xray-docs-next/assets/ch05-img02-nginx-conf-full-v03jv5Nl.gif",i="/Xray-docs-next/assets/ch05-img03-nginx-http-running-pMqjJEDb.png",l={},p=t(`<h1 id="chapter-5-website-building" tabindex="-1"><a class="header-anchor" href="#chapter-5-website-building" aria-hidden="true">#</a> Chapter 5: Website Building</h1><h2 id="_5-1-why-should-you-create-a-website" tabindex="-1"><a class="header-anchor" href="#_5-1-why-should-you-create-a-website" aria-hidden="true">#</a> 5.1 Why should you create a website?</h2><p>Some newcomers may be confused: why do I need to build a website for securing an open digital environment? I don&#39;t know how to code! Isn&#39;t it very complicated?</p><p>First, let&#39;s answer the first question. The reasons for building a website are:</p><ol><li>Apply for a legitimate TLS certificate (very important)</li><li>Provide reasonable fallback to prevent active probing attacks and improve security</li><li>Set up a camouflage site (such as a blog, private cloud storage, multimedia site, game site, etc.) with a reasonable frontend when directly accessed, making traffic usage look more legitimate.</li></ol><p>Now let&#39;s answer the second question:</p><ol><li>As a demonstration, this article uses only the simplest &quot;single-file HTML page + Nginx&quot; setup to achieve the above objectives, so it is <strong>very easy</strong>.</li><li>This website can not only be used for camouflage but also for real development and growth. The complexity depends entirely on you.</li><li>For the goals of &quot;camouflage&quot; and &quot;website operation&quot;, uniqueness and personalization are needed. Students who need this can search and learn by themselves. This content has completely deviated from scientific online access, so this article will not go into depth.</li></ol><h2 id="_5-2-log-in-to-vps-install-and-run-nginx" tabindex="-1"><a class="header-anchor" href="#_5-2-log-in-to-vps-install-and-run-nginx" aria-hidden="true">#</a> 5.2 Log in to VPS, install and run Nginx</h2><ol><li><p>Here we use commands that have been explained in detail before, so they won&#39;t be repeated. If you don&#39;t understand, please refer to the previous chapters.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>After completion, Nginx will automatically run. Open the browser on Windows and enter <code>http://100.200.300.400:80</code>. If you see the interface shown below, it means Nginx is running normally.</p><p><img src="`+e+`" alt="Nginx default interface"></p></li></ol><h2 id="_5-3-create-the-simplest-web-page" tabindex="-1"><a class="header-anchor" href="#_5-3-create-the-simplest-web-page" aria-hidden="true">#</a> 5.3 Create the simplest web page</h2><ol><li><p>Basic Linux commands for beginners:</p><table><thead><tr><th style="text-align:center;">No.</th><th style="text-align:center;">Command Name</th><th style="text-align:center;">Command Description</th></tr></thead><tbody><tr><td style="text-align:center;"><code>cmd-10</code></td><td style="text-align:center;"><code>mkdir</code></td><td style="text-align:center;">Create a new folder</td></tr><tr><td style="text-align:center;"><code>cmd-11</code></td><td style="text-align:center;"><code>systemctl reload</code></td><td style="text-align:center;">Reload a specific service</td></tr></tbody></table></li><li><p>Basic Linux configuration files for beginners:</p><table><thead><tr><th style="text-align:center;">No.</th><th style="text-align:center;">Configuration File Location</th><th style="text-align:center;">File Description</th></tr></thead><tbody><tr><td style="text-align:center;"><code>conf-02</code></td><td style="text-align:center;"><code>/etc/nginx/nginx.conf</code></td><td style="text-align:center;">Nginx program settings</td></tr></tbody></table></li><li><p>Create a dedicated folder <code>/home/vpsadmin/www/webpage/</code> for the website and create the web page file <code>index.html</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> ~/www/webpage/ <span class="token operator">&amp;&amp;</span> <span class="token function">nano</span> ~/www/webpage/index.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><div class="custom-container warning"><p class="custom-container-title">Warning</p><p>If you are not using the username <code>vpsadmin</code>, please be sure to understand the meaning of the &quot;~&quot; symbol in this command (this is related to Step 5 content):</p><ul><li>If it is a <strong>non-root user</strong>, &quot;~&quot; is equivalent to <code>/home/username</code></li><li>If it is a <strong>root user</strong>, &quot;~&quot; is equivalent to <code>/root</code></li></ul></div><ol start="4"><li><p>Copy the entire content below, save (<code>ctrl+o</code>) and exit (<code>ctrl+x</code>).</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- Text between angle brackets is an HTML tag and is not displayed.
        Most tags, such as the HTML and /HTML tags that surround the contents of
        a page, come in pairs; some tags, like HR, for a horizontal rule, stand
        alone. Comments, such as the text you&#39;re reading, are not displayed when
        the Web page is shown. The information between the HEAD and /HEAD tags is
        not displayed. The information between the BODY and /BODY tags is displayed.--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Enter a title, displayed at the top of the window.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- The information between the BODY and /BODY tags is displayed.--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Enter the main heading, usually the same as the title.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Be <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">&gt;</span></span>bold<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">&gt;</span></span> in stating your key points. Put them in a list:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>The first item in your list<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>The second item; <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span><span class="token punctuation">&gt;</span></span>italicize<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span> key words<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Improve your image by including an image.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://i.imgur.com/SEBww.jpg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>A Great HTML Resource<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
      Add a link to your favorite
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://www.dummies.com/<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Web site<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>. Break up your page
      with a horizontal rule or two.
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
      Finally, link to <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>page2.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>another page<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span> in your own Web
      site.
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- And add a copyright notice.--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>© Wiley Publishing, 2011<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Modify <code>nginx.conf</code> and restart the <code>Nginx</code> service, directing the http access on port 80 to the newly created <code>html</code> page.</p><ol><li><p>Modify <code>nginx.conf</code>.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">nano</span> /etc/nginx/nginx.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Add the following content inside<code>http{}</code>, then save (<code>ctrl+o</code>) and exit (<code>ctrl+x</code>). (Remember to replace the domain name with the real domain name you prepared earlier, including the subdomain)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        server {
                listen 80;
                server_name subdomain.your_domain.com;
                root /home/vpsadmin/www/webpage;
                index index.html;
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">Be extra careful!</p><p>As mentioned in Step 3 of section 5.3, make sure to change <code>/home/vpsadmin/www/webpage</code> to your actual file path.</p></div></li><li><p>Make <code>nginx</code> reload the configuration to take effect.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl reload nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>The complete setup process is as follows:</p><p><img src="`+o+'" alt="Web page settings demonstration"></p></li><li><p>Now, if you visit <code>http://subdomain.your_domain.com</code>, you should see this page, indicating success:</p><p><img src="'+i+'" alt="http web page success"></p></li></ol></li></ol><h2 id="_5-4-common-error-explanations" tabindex="-1"><a class="header-anchor" href="#_5-4-common-error-explanations" aria-hidden="true">#</a> 5.4 Common error explanations</h2><p>First of all, if you follow the instructions in the article step by step and are careful enough, you will definitely not encounter any errors. So, I don&#39;t intend to change how this article is written.</p><p>Then why do some students still get stuck at this step, and the web page just won&#39;t open? There are basically two words: <strong>carelessness</strong>. Because there are only two possible issues with the configuration here, and there are only two reasons for them.</p><p>I. Two types of issues:</p><ul><li>In <code>nginx.conf</code>, the <code>/home/vpsadmin/www/webpage</code> does not match the actual file path; <code>nginx</code> cannot find the file</li><li>The path is correct, but <code>nginx</code> doesn&#39;t have permission to access it</li></ul><p>II. Two reasons:</p><ul><li>Use a <strong>non-root user</strong> but still directly copy the commands in the text without modification. (This is basically like copying the name of another student when copying answers)</li><li>Insist on using a <strong>root user</strong></li></ul><p>If you encounter any errors, please carefully review the explanations in Steps 3 and 5-2 of Section 5.3.</p><div class="custom-container warning"><p class="custom-container-title">Warning</p><p>In the early stages of this article, a lot of space has been devoted to explaining the importance of using a <strong>non-root user</strong> for security, and the entire article is written based on this premise. So, issues caused by using a <strong>root user</strong> are not within the scope of this article.</p><p>But I believe that students who persist in using the <code>root</code> user should have their own opinions, strong hands-on ability, or have a certain foundation in Linux. I have already explained the crux of the problem, and I believe you can solve it on your own.</p><h2 id="_5-5-your-progress" tabindex="-1"><a class="header-anchor" href="#_5-5-your-progress" aria-hidden="true">#</a> 5.5 Your Progress</h2><p>So far, Xray&#39;s first infrastructure [webpage] has been established. Let&#39;s now move on to the second infrastructure [certificate]!</p><blockquote><p>⬛⬛⬛⬛⬛⬜⬜⬜ 62.5%</p></blockquote></div>',22),c=[p];function u(r,d){return a(),s("div",null,c)}const h=n(l,[["render",u],["__file","ch05-webpage.html.vue"]]);export{h as default};
