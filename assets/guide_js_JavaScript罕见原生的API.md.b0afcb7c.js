import{_ as s,o as n,c as a,N as e}from"./chunks/framework.60272d8a.js";const y=JSON.parse('{"title":"5 个 JavaScript “罕见”原生的 API","description":"","frontmatter":{},"headers":[],"relativePath":"guide/js/JavaScript罕见原生的API.md","lastUpdated":1706686109000}'),l={name:"guide/js/JavaScript罕见原生的API.md"},p=e(`<h1 id="_5-个-javascript-罕见-原生的-api" tabindex="-1">5 个 JavaScript “罕见”原生的 API <a class="header-anchor" href="#_5-个-javascript-罕见-原生的-api" aria-label="Permalink to &quot;5 个 JavaScript “罕见”原生的 API&quot;">​</a></h1><h2 id="window-getcomputedstyle" tabindex="-1">window.getComputedStyle() <a class="header-anchor" href="#window-getcomputedstyle" aria-label="Permalink to &quot;window.getComputedStyle()&quot;">​</a></h2><p><code>window.getComputedStyle()</code>方法返回一个 <a href="https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FCSSStyleDeclaration" title="https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration" target="_blank" rel="noreferrer">CSSStyleDeclaration</a> 对象，与 style 属性的类型相同，其中包含元素的计算样式；</p><p>用法如下：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">document.defaultView.getComputedStyle(element, [pseudo-element])</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// or</span></span>
<span class="line"><span style="color:#babed8;">window.getComputedStyle(element, [pseudo-element])</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>它有两个参数，第一个是计算样式的元素，第二个是伪元素；若伪元素不存在，则传 null；</p><p>看例子就明白了：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;html&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;style type=&quot;text/css&quot;&gt;</span></span>
<span class="line"><span style="color:#babed8;">        #root {</span></span>
<span class="line"><span style="color:#babed8;">            background-color: pink;</span></span>
<span class="line"><span style="color:#babed8;">            width: 100px;</span></span>
<span class="line"><span style="color:#babed8;">            height: 200px;</span></span>
<span class="line"><span style="color:#babed8;">        }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">        #root::after {</span></span>
<span class="line"><span style="color:#babed8;">            content: &#39;Haskell&#39;;</span></span>
<span class="line"><span style="color:#babed8;">            display: table;</span></span>
<span class="line"><span style="color:#babed8;">            clear: both;</span></span>
<span class="line"><span style="color:#babed8;">        }</span></span>
<span class="line"><span style="color:#babed8;">    &lt;/style&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;div id=&quot;root&quot; style=&quot;background-color: rgb(135, 206, 235);&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#babed8;">    function getStyleByAttr(node, name) {</span></span>
<span class="line"><span style="color:#babed8;">        return window.getComputedStyle(node, null)[name]</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    const node = document.getElementById(&#39;root&#39;)</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    // rgb(135, 206, 235)</span></span>
<span class="line"><span style="color:#babed8;">    console.log(getStyleByAttr(node, &#39;backgroundColor&#39;))</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    // 100px</span></span>
<span class="line"><span style="color:#babed8;">    console.log(getStyleByAttr(node, &#39;width&#39;))</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    // 200px</span></span>
<span class="line"><span style="color:#babed8;">    console.log(getStyleByAttr(node, &#39;height&#39;))</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    // table</span></span>
<span class="line"><span style="color:#babed8;">    console.log(window.getComputedStyle(node, &#39;::after&#39;).display)</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    // Haskell</span></span>
<span class="line"><span style="color:#babed8;">    console.log(window.getComputedStyle(node, &#39;::after&#39;).content)</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">&lt;/html&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><h2 id="getboundingclientrect" tabindex="-1"><strong><strong>getBoundingClientRect()</strong></strong> <a class="header-anchor" href="#getboundingclientrect" aria-label="Permalink to &quot;****getBoundingClientRect()****&quot;">​</a></h2><p>该<code>Element.getBoundingClientRect()</code>方法返回一个 <a href="https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FDOMRect" title="https://developer.mozilla.org/en-US/docs/Web/API/DOMRect" target="_blank" rel="noreferrer">DOMRect</a> 对象，该对象提供元素大小及其相对于<a href="https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FGlossary%2FViewport" title="https://developer.mozilla.org/en-US/docs/Glossary/Viewport" target="_blank" rel="noreferrer">视口</a>的位置信息；</p><p>用法如下：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">domRect = element.getBoundingClientRect();</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>返回元素的 left, top, right, bottom, x, y, width, and height 值；</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fc7fca56726943a4b4bed39e8de8213a~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="image.png"> 比如说要获得 DOM 元素相对于网页左上角的定位距离 top 和 left 的值：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">const h3 = document.querySelector(&quot;h3&quot;);</span></span>
<span class="line"><span style="color:#babed8;">const rect = h3.getBoundingClientRect();</span></span>
<span class="line"><span style="color:#babed8;">const topElement = document.documentElement;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">const positionTop = topElement.scrollTop + rect.top;</span></span>
<span class="line"><span style="color:#babed8;">const positionLeft = topElement.scrollLeft + rect.left;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="once-true" tabindex="-1">once: true <a class="header-anchor" href="#once-true" aria-label="Permalink to &quot;once: true&quot;">​</a></h2><p>once: true 可不是 API，它长得也不像 API，它是用来做属性配置的，有了它，再也不用 lodash 的once 了；</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">const container = document.querySelector&lt;HTMLDivElement&gt;(&#39;.container&#39;);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">container?.addEventListener(&#39;click&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">  console.log(&#39;I will only do it once !&#39;)</span></span>
<span class="line"><span style="color:#babed8;">}, {</span></span>
<span class="line"><span style="color:#babed8;">  // 配置 once 后，最多调用一次</span></span>
<span class="line"><span style="color:#babed8;">  once: true</span></span>
<span class="line"><span style="color:#babed8;">})</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>哇！原来 JS 就一直自带，你知道吗？</p><h2 id="clipboard-readtext" tabindex="-1">clipboard.readText() <a class="header-anchor" href="#clipboard-readtext" aria-label="Permalink to &quot;clipboard.readText()&quot;">​</a></h2><p>粘贴板，想必是常见要用功能吧~</p><p>要从剪贴板读取文本，调用<code>navigator.clipboard.readText()</code>并等待返回的 Promise 以进行解析：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">async function getClipboardContents() {</span></span>
<span class="line"><span style="color:#babed8;">  try {</span></span>
<span class="line"><span style="color:#babed8;">    const text = await navigator.clipboard.readText();</span></span>
<span class="line"><span style="color:#babed8;">    console.log(&#39;Pasted content: &#39;, text);</span></span>
<span class="line"><span style="color:#babed8;">  } catch (err) {</span></span>
<span class="line"><span style="color:#babed8;">    console.error(&#39;Failed to read clipboard contents: &#39;, err);</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>而要将文本复制到剪贴板，则是调用<code>writeText()</code></p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">async function copyPageUrl() {</span></span>
<span class="line"><span style="color:#babed8;">  try {</span></span>
<span class="line"><span style="color:#babed8;">    await navigator.clipboard.writeText(location.href);</span></span>
<span class="line"><span style="color:#babed8;">    console.log(&#39;Page URL copied to clipboard&#39;);</span></span>
<span class="line"><span style="color:#babed8;">  } catch (err) {</span></span>
<span class="line"><span style="color:#babed8;">    console.error(&#39;Failed to copy: &#39;, err);</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="getmodifierstate" tabindex="-1"><strong>getModifierState()</strong> <a class="header-anchor" href="#getmodifierstate" aria-label="Permalink to &quot;**getModifierState()**&quot;">​</a></h2><p>如果按下或激活指定的修改键，<strong>getModifierState()</strong> 方法会返回true。</p><p>我们可以借助它，比如监听用户输入的时候是否按大小切换键，再根据情况给出合适的提示；</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;input type=&quot;text&quot; size=&quot;40&quot; onkeydown=&quot;myFunction(event)&quot;&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">&lt;p id=&quot;demo&quot;&gt;&lt;/p&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#babed8;">    function myFunction(event) {</span></span>
<span class="line"><span style="color:#babed8;">        var x = event.getModifierState(&quot;CapsLock&quot;);</span></span>
<span class="line"><span style="color:#babed8;">        document.getElementById(&quot;demo&quot;).innerHTML = &quot;大写锁定激活: &quot; + x;</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,29),t=[p];function r(o,c,b,i,d,u){return n(),a("div",null,t)}const g=s(l,[["render",r]]);export{y as __pageData,g as default};
