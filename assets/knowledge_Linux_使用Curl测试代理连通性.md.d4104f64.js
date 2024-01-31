import{_ as a,o as e,c as t,N as p}from"./chunks/framework.60272d8a.js";const m=JSON.parse('{"title":"使用Curl测试代理连通性 - 知乎","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/Linux/使用Curl测试代理连通性.md","lastUpdated":1706686109000}'),r={name:"knowledge/Linux/使用Curl测试代理连通性.md"},n=p(`<h1 id="使用curl测试代理连通性-知乎" tabindex="-1">使用Curl测试代理连通性 - 知乎 <a class="header-anchor" href="#使用curl测试代理连通性-知乎" aria-label="Permalink to &quot;使用Curl测试代理连通性 - 知乎&quot;">​</a></h1><hr><p>在linux系统上或者新版本的win10系统上面，可以使用curl去测试代理ip是否可用</p><p>先输入curl -V 看下是否能够看到curl的版本号，</p><p>如果可以，则可以使用curl去检测代理可用性</p><p><strong>目标网站：<strong>你要访问的网站，如百度等，不过为了检验代理ip是否使用成功， 最好访问</strong>【检测来源ip的url】</strong></p><p>比如</p><p><a href="https://link.zhihu.com/?target=http%3A//myip.ipip.net" target="_blank" rel="noreferrer">http://myip.ipip.net</a></p><p><a href="https://link.zhihu.com/?target=https%3A//haoip.cn" target="_blank" rel="noreferrer">https://haoip.cn</a></p><p><a href="https://link.zhihu.com/?target=https%3A//api.ip.sb/ip" target="_blank" rel="noreferrer">https://api.ip.sb/ip</a></p><p><a href="https://link.zhihu.com/?target=http%3A//ip.3322.net" target="_blank" rel="noreferrer">http://ip.3322.net</a></p><p><a href="https://link.zhihu.com/?target=http%3A//ip.qaros.com" target="_blank" rel="noreferrer">http://ip.qaros.com</a></p><p><a href="https://link.zhihu.com/?target=http%3A//ip.cip.cc" target="_blank" rel="noreferrer">http://ip.cip.cc</a></p><p><a href="https://link.zhihu.com/?target=http%3A//icanhazip.com" target="_blank" rel="noreferrer">http://icanhazip.com</a></p><p><a href="https://link.zhihu.com/?target=https%3A//api.ipify.org" target="_blank" rel="noreferrer">https://api.ipify.org</a></p><p><a href="https://link.zhihu.com/?target=http%3A//httpbin.org/ip" target="_blank" rel="noreferrer">http://httpbin.org/ip</a></p><h2 id="不使用代理" tabindex="-1">不使用代理： <a class="header-anchor" href="#不使用代理" aria-label="Permalink to &quot;不使用代理：&quot;">​</a></h2><p>命令： curl 目标网站</p><p>示例</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">curl http://myip.ipip.net </span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="使用代理" tabindex="-1">使用代理 <a class="header-anchor" href="#使用代理" aria-label="Permalink to &quot;使用代理&quot;">​</a></h2><p>假设</p><p><strong>代理账号</strong>为 2021202120212021</p><p><strong>代理密码</strong>为 abcdefjhijklmn</p><p><strong>代理服务器ip</strong>为 11.22.33.44</p><p><strong>代理服务器端口</strong>为 5678</p><p>目标网站为 <a href="https://link.zhihu.com/?target=http%3A//myip.ipip.net" target="_blank" rel="noreferrer">http://myip.ipip.net</a></p><h3 id="使用http代理" tabindex="-1">使用http代理： <a class="header-anchor" href="#使用http代理" aria-label="Permalink to &quot;使用http代理：&quot;">​</a></h3><p>命令： curl -x 代理账号:代理密码@代理服务器ip:代理服务器端口 目标网站</p><p>示例：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">curl -x 2021202120212021:abcdefjhijklmn@11.22.33.44:5678 http://myip.ipip.net </span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="使用socks5代理" tabindex="-1">使用socks5代理 <a class="header-anchor" href="#使用socks5代理" aria-label="Permalink to &quot;使用socks5代理&quot;">​</a></h3><p>命令： curl --socks5 代理账号:代理密码@代理服务器ip:代理服务器端口 目标网站</p><p>示例：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">curl --socks5 2021202120212021:abcdefjhijklmn@11.22.33.44:5678 http://myip.ipip.net</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>如果用户名或者密码中有特殊字符要怎么处理呢，我试了直接转义好像不行</p><p><code>加引号</code></p>`,37),s=[n];function i(l,o,h,c,d,u){return e(),t("div",null,s)}const g=a(r,[["render",i]]);export{m as __pageData,g as default};
