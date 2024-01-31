import{_ as s,o as n,c as a,N as e}from"./chunks/framework.60272d8a.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"guide/js/bind、call、apply 区别？.md","lastUpdated":1706686109000}'),l={name:"guide/js/bind、call、apply 区别？.md"},p=e(`<h2 id="bind、call、apply的作用" tabindex="-1">bind、call、apply的作用 <a class="header-anchor" href="#bind、call、apply的作用" aria-label="Permalink to &quot;bind、call、apply的作用&quot;">​</a></h2><p><code>call</code>、<code>apply</code>、<code>bind</code>作用是改变函数执行时的上下文，就是改变<code>this</code>指向</p><p>那么什么情况下需要改变<code>this</code>的指向呢？</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">var name = &quot;lucy&quot;;</span></span>
<span class="line"><span style="color:#babed8;">var obj = {</span></span>
<span class="line"><span style="color:#babed8;">    name: &quot;martin&quot;,</span></span>
<span class="line"><span style="color:#babed8;">    say: function () {</span></span>
<span class="line"><span style="color:#babed8;">        console.log(this.name);</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">};</span></span>
<span class="line"><span style="color:#babed8;">obj.say(); // martin，this 指向 obj 对象</span></span>
<span class="line"><span style="color:#babed8;">setTimeout(obj.say,0); // lucy，this 指向 window 对象</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>从上面可以看到，正常情况<code>say</code>方法输出<code>martin</code></p><p>但是我们把<code>say</code>放在<code>setTimeout</code>方法中，在定时器中是作为回调函数来执行的，因此回到主栈执行时是在全局执行上下文的环境中执行的，这时候<code>this</code>指向<code>window</code>，所以输出<code>lucy</code></p><p>我们实际需要的是<code>this</code>指向<code>obj</code>对象，这时候就需要该改变<code>this</code>指向了</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">setTimeout(obj.say.bind(obj),0); //martin，this指向obj对象</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="apply" tabindex="-1">apply <a class="header-anchor" href="#apply" aria-label="Permalink to &quot;apply&quot;">​</a></h3><p><code>apply</code>接受两个参数，第一个参数是<code>this</code>的指向，第二个参数是函数接受的参数，以数组的形式传入</p><p>改变<code>this</code>指向后原函数会立即执行，且此方法只是临时改变<code>this</code>指向一次</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">function fn(...args){</span></span>
<span class="line"><span style="color:#babed8;">    console.log(this,args);</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">let obj = {</span></span>
<span class="line"><span style="color:#babed8;">    myname:&quot;张三&quot;</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">fn.apply(obj,[1,2]); // this会变成传入的obj，传入的参数必须是一个数组；</span></span>
<span class="line"><span style="color:#babed8;">fn(1,2) // this指向window</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>当第一个参数为<code>null</code>、<code>undefined</code>的时候，默认指向<code>window</code>(在浏览器中)</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">fn.apply(null,[1,2]); // this指向window</span></span>
<span class="line"><span style="color:#babed8;">fn.apply(undefined,[1,2]); // this指向window</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="call" tabindex="-1">call <a class="header-anchor" href="#call" aria-label="Permalink to &quot;call&quot;">​</a></h3><p><code>call</code>方法的第一个参数也是<code>this</code>的指向，后面传入的是一个参数列表</p><p>跟<code>apply</code>一样，改变<code>this</code>指向后原函数会立即执行，且此方法只是临时改变<code>this</code>指向一次</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">function fn(...args){</span></span>
<span class="line"><span style="color:#babed8;">    console.log(this,args);</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">let obj = {</span></span>
<span class="line"><span style="color:#babed8;">    myname:&quot;张三&quot;</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">fn.call(obj,1,2); // this会变成传入的obj，传入的参数必须是一个数组；</span></span>
<span class="line"><span style="color:#babed8;">fn(1,2) // this指向window</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>同样的，当第一个参数为<code>null</code>、<code>undefined</code>的时候，默认指向<code>window</code>(在浏览器中)</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">fn.call(null,[1,2]); // this指向window</span></span>
<span class="line"><span style="color:#babed8;">fn.call(undefined,[1,2]); // this指向window</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="bind" tabindex="-1">bind <a class="header-anchor" href="#bind" aria-label="Permalink to &quot;bind&quot;">​</a></h3><p>bind方法和call很相似，第一参数也是<code>this</code>的指向，后面传入的也是一个参数列表(但是这个参数列表可以分多次传入)</p><p>改变<code>this</code>指向后不会立即执行，而是返回一个永久改变<code>this</code>指向的函数</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">function fn(...args){</span></span>
<span class="line"><span style="color:#babed8;">    console.log(this,args);</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">let obj = {</span></span>
<span class="line"><span style="color:#babed8;">    myname:&quot;张三&quot;</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">const bindFn = fn.bind(obj); // this 也会变成传入的obj ，bind不是立即执行需要执行一次</span></span>
<span class="line"><span style="color:#babed8;">bindFn(1,2) // this指向obj</span></span>
<span class="line"><span style="color:#babed8;">fn(1,2) // this指向window</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="区别" tabindex="-1">区别 <a class="header-anchor" href="#区别" aria-label="Permalink to &quot;区别&quot;">​</a></h2><p>从上面可以看到，<code>apply</code>、<code>call</code>、<code>bind</code>三者的区别在于：</p><ul><li>三者都可以改变函数的<code>this</code>对象指向</li><li>三者第一个参数都是<code>this</code>要指向的对象，如果如果没有这个参数或参数为<code>undefined</code>或<code>null</code>，则默认指向全局<code>window</code></li><li>三者都可以传参，但是<code>apply</code>是数组，而<code>call</code>是参数列表，且<code>apply</code>和<code>call</code>是一次性传入参数，而<code>bind</code>可以分为多次传入</li><li><code>bind</code>是返回绑定this之后的函数，<code>apply</code>、<code>call</code> 则是立即执行</li></ul><h2 id="实现" tabindex="-1">实现 <a class="header-anchor" href="#实现" aria-label="Permalink to &quot;实现&quot;">​</a></h2><p>实现<code>bind</code>的步骤，我们可以分解成为三部分：</p><ul><li>修改<code>this</code>指向</li><li>动态传递参数</li></ul><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">// 方式一：只在bind中传递函数参数</span></span>
<span class="line"><span style="color:#babed8;">fn.bind(obj,1,2)()</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 方式二：在bind中传递函数参数，也在返回函数中传递参数</span></span>
<span class="line"><span style="color:#babed8;">fn.bind(obj,1)(2)</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li>兼容<code>new</code>关键字</li></ul><p>整体实现代码如下：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">Function.prototype.myBind = function (context) {</span></span>
<span class="line"><span style="color:#babed8;">    // 判断调用对象是否为函数</span></span>
<span class="line"><span style="color:#babed8;">    if (typeof this !== &quot;function&quot;) {</span></span>
<span class="line"><span style="color:#babed8;">        throw new TypeError(&quot;Error&quot;);</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    // 获取参数</span></span>
<span class="line"><span style="color:#babed8;">    const args = [...arguments].slice(1),</span></span>
<span class="line"><span style="color:#babed8;">          fn = this;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    return function Fn() {</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">        // 根据调用方式，传入不同绑定值</span></span>
<span class="line"><span style="color:#babed8;">        return fn.apply(this instanceof Fn ? new fn(...arguments) : context, args.concat(...arguments)); </span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>`,34),c=[p];function o(i,b,r,d,t,u){return n(),a("div",null,c)}const h=s(l,[["render",o]]);export{y as __pageData,h as default};
