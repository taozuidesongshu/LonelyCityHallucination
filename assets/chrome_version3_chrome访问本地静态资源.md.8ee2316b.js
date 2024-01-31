import{_ as s,o as a,c as n,N as e}from"./chunks/framework.60272d8a.js";const _=JSON.parse('{"title":"chrome访问本地静态资源","description":"","frontmatter":{},"headers":[],"relativePath":"chrome/version3/chrome访问本地静态资源.md","lastUpdated":1706686109000}'),l={name:"chrome/version3/chrome访问本地静态资源.md"},o=e(`<h1 id="chrome访问本地静态资源" tabindex="-1">chrome访问本地静态资源 <a class="header-anchor" href="#chrome访问本地静态资源" aria-label="Permalink to &quot;chrome访问本地静态资源&quot;">​</a></h1><h2 id="以img和iframe以例子" tabindex="-1">以img和iframe以例子： <a class="header-anchor" href="#以img和iframe以例子" aria-label="Permalink to &quot;以img和iframe以例子：&quot;">​</a></h2><p>1.在manifest中添加web_accessible_resources声明静态资源地址：</p><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">web_accessible_resources</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">:</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">iframes/test.html</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>然后进行引入：</p><div class="language-text line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">URL = chrome-extension://插件ID/iframes/test.html</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>注意 ：因为插件的id是动态的 所以需要动态的获取</p><p>css中：<strong>__MSG_@@extension_id__</strong></p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">src:url(</span><span style="color:#FFCB6B;">chrome-extension</span><span style="color:#BABED8;">://__MSG_@@extension_id__/css/fonts/</span><span style="color:#FFCB6B;">element-icons</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">woff</span><span style="color:#BABED8;">)format(&quot;woff&quot;)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>js中：<strong>chrome.runtime.getURL</strong>(&quot;iframes/notSupport.html&quot;)</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\${chrome.runtime.getURL(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">iframes</span><span style="color:#89DDFF;">/</span><span style="color:#BABED8;">notSupport</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">html</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">)}</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,11),p=[o];function r(t,c,i,m,d,u){return a(),n("div",null,p)}const h=s(l,[["render",r]]);export{_ as __pageData,h as default};
