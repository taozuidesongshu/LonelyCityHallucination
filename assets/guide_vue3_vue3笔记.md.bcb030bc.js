import{_ as s,o as n,c as a,N as e}from"./chunks/framework.60272d8a.js";const y=JSON.parse('{"title":"Vue3.0笔记","description":"","frontmatter":{},"headers":[],"relativePath":"guide/vue3/vue3笔记.md","lastUpdated":1706686109000}'),p={name:"guide/vue3/vue3笔记.md"},l=e(`<h1 id="vue3-0笔记" tabindex="-1">Vue3.0笔记 <a class="header-anchor" href="#vue3-0笔记" aria-label="Permalink to &quot;Vue3.0笔记&quot;">​</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>不知不觉中，使用 <code>Vue3</code> 开发挺长一段时间了，经历过大大小小的项目，其中项目形式主要涉及两种，要么是 <code>Vue3+Webpack</code> 要么就是 <code>Vue3+Vite</code>，而对于 <code>TS</code> 并不会每个项目都会使用，像比较小且急的项目就不会考虑使用 <code>TS</code> ，感觉没啥必要，增加 <code>TS</code> 只会徒增编译时间、开发难度、开发成本等等。呃...总的来说，还是要看实际的场景考虑吧。</p><p>然后对于为什么会有两种项目形式的选择，也就是 <code>Webpack</code> 与 <code>Vite</code> 的比拼，这其中考虑的因素有很多，但最重要的一个衡量点觉得还是在于项目的规模，对于项目规模太大的项目，还是不太敢上 <code>Vue3+Vite</code> 形式，怕其中带来的后果承担不起&gt;_&lt;。</p><ul><li><code>Vite</code> 可用插件还不是很多。</li><li><code>Vite</code> 开发环境与生产环境打包器不同，线上出现bug不容易定位问题。</li><li>可能你会想，用上Vue3不用Vite不是白用了？直接用vue2不就行了？Vue3的优点有很多，可不止 <code>Vite</code>，像代码体积更小，底层性能更佳等等。</li></ul><h2 id="vue3优点" tabindex="-1">Vue3优点 <a class="header-anchor" href="#vue3优点" aria-label="Permalink to &quot;Vue3优点&quot;">​</a></h2><p><strong>1.源码体积小</strong>：<code>Vue2</code> 压缩后的体积大约有20kb，<code>Vue3</code> 压缩后的体积只有10kb。<code>Vue3</code> 中移除了部分API，如 <code>filter</code>、<code>$on</code>、<code>$off</code>、<code>$once</code>、<code>$destory</code>、按键修饰符全部改用按键名，不再支持按键值。</p><p><strong>2.响应式系统升级</strong>：将原来的 <code>Object.defineProperty</code> 替换成了ES6中的 <code>Proxy</code> ，它是通过在目标对象前加了一层拦截，代理的是对象而不是对象的属性，比原来的颗粒度变大了。现在可以监听到对象的新增与删除属性的操作、数组的索引赋值操作、数组的 <code>length</code> 属性操作。</p><p><strong>3.更友好的静态类型支持</strong>：<code>Vue2</code> 需要额外采用 <a href="https://link.juejin.cn/?target=https%3A%2F%2Fflow.org%2Fen%2Fdocs%2Fgetting-started%2F" title="https://flow.org/en/docs/getting-started/" target="_blank" rel="noreferrer">Flow</a> 作为静态类型检查，它是由 Facebook 出品的 <code>JavaScript</code> 静态类型检查工具；而 <code>Vue3</code> 直接全部采用 <code>TS</code> 进行开发，对 <code>TS</code> 支持更友好。</p><p><strong>4.性能提升</strong>：<code>Vue3</code> 重写了虚拟 <code>DOM</code> 和底层的 <code>Diff</code> 算法，拥有更好的 <code>tree-shaking</code> 支持，整体性能得很大的一个提升。</p><p><strong>5.CompositionAPI</strong>：<code>Vue3</code> 最大的一个变动应该就是推出了 <code>CompositionAPI</code>，可以说它受<code>ReactHook</code> 启发而来；它我们编写逻辑更灵活，便于提取公共逻辑，代码的复用率得到了提高，也不用再使用 <code>mixin</code> 担心命名冲突的问题。</p><p><strong>6.更先进的组件</strong>：<code>Teleport</code> - 传送/瞬移组件、<code>Suspense</code> - 等待异步组件过程中可以先提前渲染占位内容、<code>Fragment</code> - 多根性质等等。</p><p><strong>7.自定义渲染器</strong>：<code>Vue3</code> 支持创建自定义的渲染器，能实现跨平台，通过改写 <code>Vue</code> 底层渲染逻辑，如渲染成小程序形式等等。</p><h2 id="一、初始化项目" tabindex="-1">一、初始化项目 <a class="header-anchor" href="#一、初始化项目" aria-label="Permalink to &quot;一、初始化项目&quot;">​</a></h2><p>初始化 <code>Vue3+Vite</code> 项目：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">npm init vue@latest</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// or</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">npm init vite@latest projectName</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>初始化 <code>Vue3+Webpack</code> 项目：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">vue create projectName</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="二、setup" tabindex="-1">二、setup <a class="header-anchor" href="#二、setup" aria-label="Permalink to &quot;二、setup&quot;">​</a></h2><p><code>setup()</code>函数是 <code>Vue3</code> 新增的一个选项，它是组合式 <code>API</code> 的统一入口，简单来说，就是所有的 <code>CompositionAPI</code> 新特性都应该写在这个函数内部。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#babed8;">export default {</span></span>
<span class="line"><span style="color:#babed8;">  setup(props, context) {</span></span>
<span class="line"><span style="color:#babed8;">    return {}</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>它接收两个参数：</p><ul><li><code>props</code>：这个还是和 <code>Vue2</code> 使用的组件之间通信的 <code>props</code>一样。</li><li><code>context</code>：定义上下文，这个参数身上有一些我们比较常用的属性，比如 <ul><li><code>context.emit</code>：等同于 <code>Vue2</code> 的 <code>this.$emit</code>。</li><li><code>context.slots</code>：等同于 <code>Vue2</code> 的 <code>this.$slots</code>。</li><li><code>context.attrs</code>：等同于 <code>Vue2</code> 的 <code>this.$attrs</code>。</li><li><code>context.expose()</code>：当前组件对外暴露属性的函数。</li></ul></li></ul><h3 id="expose" tabindex="-1">expose <a class="header-anchor" href="#expose" aria-label="Permalink to &quot;expose&quot;">​</a></h3><p>关于 <code>context.expose()</code> 函数，下面写两个例子，看完你应该就能明白了。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">// parent.vue</span></span>
<span class="line"><span style="color:#babed8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;child ref=&quot;childRef&quot; /&gt;    </span></span>
<span class="line"><span style="color:#babed8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#babed8;">import { ref, onMounted } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#babed8;">import child from &#39;./components/child.vue&#39;</span></span>
<span class="line"><span style="color:#babed8;">export default {</span></span>
<span class="line"><span style="color:#babed8;">  components: { child },</span></span>
<span class="line"><span style="color:#babed8;">  setup() {</span></span>
<span class="line"><span style="color:#babed8;">   let childRef = ref(null)</span></span>
<span class="line"><span style="color:#babed8;">   onMounted(() =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">     console.log(child.value.name)</span></span>
<span class="line"><span style="color:#babed8;">     console.log(child.value.age)</span></span>
<span class="line"><span style="color:#babed8;">   })</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">   return { childRef }</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">//child.vue</span></span>
<span class="line"><span style="color:#babed8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;div&gt;子组件&lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#babed8;">import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#babed8;">export default {</span></span>
<span class="line"><span style="color:#babed8;">  setup() {</span></span>
<span class="line"><span style="color:#babed8;">    let name = ref(&#39;橙某人&#39;)</span></span>
<span class="line"><span style="color:#babed8;">    let age = ref(18)</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    return { name, age };</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1cec56d0b00848f08739f39096b040f7~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="image.png"></p><p>从上面例子中，我们可以看到子组件在 <code>setup()</code> 函数中返回的所有东西都可以被父组件直接访问，也就是子组件所有方法或数据等都是公开的。</p><p>但如果你想开发一个开源的组件或库，你有可能想保持一些内部方法的私有性，并不想它能被父类所调用，那么这个时候应该怎么做呢？我们来看看下面这个例子，给子组件添加 <code>context.expose()</code> 函数。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">//child.vue</span></span>
<span class="line"><span style="color:#babed8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;div&gt;子组件&lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#babed8;">import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#babed8;">export default {</span></span>
<span class="line"><span style="color:#babed8;">  setup(props, context) {</span></span>
<span class="line"><span style="color:#babed8;">    let name = ref(&#39;橙某人&#39;)</span></span>
<span class="line"><span style="color:#babed8;">    let age = ref(18)</span></span>
<span class="line"><span style="color:#babed8;">    </span></span>
<span class="line"><span style="color:#babed8;">    context.expose({</span></span>
<span class="line"><span style="color:#babed8;">      name: &#39;ydydydq&#39;,</span></span>
<span class="line"><span style="color:#babed8;">    })</span></span>
<span class="line"><span style="color:#babed8;">    return { name, age };</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/180234aee72149d3b5e528fc7811556f~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="image.png"></p><p>可以看到，父组件已经无法访问 <code>age</code> 属性了，而且 <code>name</code> 属性值也是我们重新规定的值了，并不会访问到组件内部的数据。</p><p>这就是 <code>context.expose()</code> 函数的作用，它更加直观的允许组件暴露规定的一切方法和数据。</p><h2 id="三、生命周期" tabindex="-1">三、生命周期 <a class="header-anchor" href="#三、生命周期" aria-label="Permalink to &quot;三、生命周期&quot;">​</a></h2><p><code>Vue3</code> 生命周期相比 <code>Vue2</code> 做了一些改动，如下：</p><ul><li><p><code>Vue3</code> 用 <code>setup()</code> 函数替代了 <code>beforeCreate</code>和<code>create</code> 钩子。</p></li><li><p><code>Vue3</code> 生命周期钩子都以 <code>on+xxx</code> 开头，并且需要手动导入且只能在 <code>setup()</code> 函数内部使用。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#babed8;">  import { onMounted }from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#babed8;">  export default {</span></span>
<span class="line"><span style="color:#babed8;">    setup(props, context) {</span></span>
<span class="line"><span style="color:#babed8;">      onMounted(() =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">        console.log(&#39;onMounted&#39;);</span></span>
<span class="line"><span style="color:#babed8;">      })</span></span>
<span class="line"><span style="color:#babed8;">      return {}</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></li><li><p>卸载组件过程的两个钩子名称改变，<code>beforeDestroy</code> 变成 <code>onBeforeUnmount</code>、<code>destroyed</code> 变成 <code>onUnmounted</code>。</p></li></ul><table><thead><tr><th>vue2</th><th>说明</th><th>vue3</th><th>说明</th></tr></thead><tbody><tr><td>beforeCreate</td><td>在实例初始化之后、进行数据侦听和事件/侦听器的配置之前同步调用。</td><td>setup()</td><td><code>setup</code> 函数会比 <code>beforeCreate</code> 与 <code>created</code> 先执行，记住它是入口，会最先跑。</td></tr><tr><td>created</td><td>在实例创建完成后被立即同步调用，这个阶段挂载还没开始，所以 <code>$el</code> 还不能使用。</td><td>setup()</td><td>同上</td></tr><tr><td>beforeMount</td><td>在挂载开始之前被调用，相关的<code>render</code>函数首次被调用，<code>$el</code> 依旧还不能用。</td><td>onBeforeMount</td><td>相同</td></tr><tr><td>mounted</td><td>在实例挂载完成后被调用，这个时候 <code>$el</code> 能使用，但是这个阶段不能保证所有的子组件都挂载完成，如果你希望等待整个视图渲染完毕，可以使用 <code>$nextTick</code>。</td><td>onMounted</td><td>相同</td></tr><tr><td>beforeUpdate</td><td>在数据发生改变后，DOM 被更新之前被调用（使用该钩子要注意死循环）。</td><td>onBeforeUpdate</td><td>相同</td></tr><tr><td>updated</td><td>在数据更改导致的虚拟 DOM 重新渲染和更新完毕之后被调用（使用该钩子要注意死循环）。</td><td>onUpdated</td><td>相同</td></tr><tr><td>beforeDestroy</td><td>实例销毁之前调用，但在这一步，实例仍然完全可用。</td><td>onBeforeUnmount</td><td>相同</td></tr><tr><td>destroyed</td><td>实例销毁后调用，包括子实例也会被销毁。</td><td>onUnmounted</td><td>相同</td></tr></tbody></table><p>最后我们放一张钩子执行的对比图，可以发现 <code>Vue3</code> 的生命周期钩子是比 <code>Vue2</code> 优先执行的。</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7ab3662eed044a45b5ee523b93cf153f~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="image.png"></p><h2 id="四、ref与reactive" tabindex="-1">四、ref与reactive <a class="header-anchor" href="#四、ref与reactive" aria-label="Permalink to &quot;四、ref与reactive&quot;">​</a></h2><p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fv3.cn.vuejs.org%2Fapi%2Frefs-api.html%23ref" title="https://v3.cn.vuejs.org/api/refs-api.html#ref" target="_blank" rel="noreferrer">ref</a> 与 <a href="https://link.juejin.cn/?target=https%3A%2F%2Fv3.cn.vuejs.org%2Fapi%2Fbasic-reactivity.html%23reactive" title="https://v3.cn.vuejs.org/api/basic-reactivity.html#reactive" target="_blank" rel="noreferrer">reactive</a> 是 <code>Vue3</code> 新推出的主要 <code>API</code> 之一，它们主要用于响应式数据的创建。</p><p>既然它们俩都是用于创建响应式数据，那么它们又有什么区别呢？</p><p>我们带着这个疑问往下看，先来看看它们俩的基本使用：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;div&gt;count1: {{count1}}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;div&gt;count2: {{count2.val}}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;div&gt;count3: {{count3.val}}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;button @click=&quot;add&quot;&gt;按钮&lt;/button&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#babed8;">import { ref, reactive } from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#babed8;">export default {</span></span>
<span class="line"><span style="color:#babed8;">  setup() {</span></span>
<span class="line"><span style="color:#babed8;">    const count1 = ref(0);</span></span>
<span class="line"><span style="color:#babed8;">    const count2 = ref({ val: 0 });</span></span>
<span class="line"><span style="color:#babed8;">    const count3 = reactive({ val: 0 }); // reactive只能接收引用类型, Object、Array...</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    function add() {</span></span>
<span class="line"><span style="color:#babed8;">      count1.value++;</span></span>
<span class="line"><span style="color:#babed8;">      count2.value.val++;</span></span>
<span class="line"><span style="color:#babed8;">      count3.val++;</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    return { count1, count2, count3, add }</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>上面写了一个很简单的计数叠加例子，从中可以得到一些结论：</p><ul><li><code>template</code> 模板中使用的数据和方法，都需要通过 <code>setup</code> 函数 <code>return</code> 出去才可以被使用。</li><li><code>ref</code> 函数创建的响应式数据，在模板中可以直接被使用，在 <code>JS</code> 中需要通过 <code>.value</code> 的形式才能使用。</li><li><code>ref</code> 函数可以接收<strong>原始数据类型</strong>与<strong>引用数据类型</strong>。</li><li><code>reactive</code> 函数只能接收<strong>引用数据类型</strong>。</li></ul><p>这里我们就知道它们俩的区别了！但是既然这样为啥还需要 <code>reactive</code> ，全部使用 <code>ref</code> 一把梭不就行了吗？难道是存在什么情况是 <code>reactive</code> 能做，但是 <code>ref</code> 做不了的？</p><p>答案：<strong>没有这种情况</strong>，反而是 <code>reactive</code> 能做的，<code>ref</code> 都能胜任，<strong>并且 <code>ref</code> 底层还是使用 <code>reactive</code> 来做的!!!</strong></p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/448345a6c45a44f6b835af6a3d0b5ae7~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="3E9488F5.jpg"></p><p>通过 <code>Vue3</code> 的源码是可以证实这个结论的，具体过程感谢兴趣的小伙伴可以<a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub1s.com%2Fvuejs%2Fcore%2Fblob%2Fmain%2Fpackages%2Freactivity%2Fsrc%2Fref.ts" title="https://github1s.com/vuejs/core/blob/main/packages/reactivity/src/ref.ts" target="_blank" rel="noreferrer">自行查阅</a>，这里就不做过多阐述了。</p><blockquote><p>反正简单来说就是， <strong><code>ref</code> 是在 <code>reactive</code> 上在进行了封装</strong>，增强了其能力，使它支持了对原始数据类型的处理，所以在 <code>Vue3</code> 中 <code>reactive</code> 能做的，<code>ref</code> 也能做，<code>reactive</code> 不能做的，<code>ref</code> 也能做。</p></blockquote><h2 id="五、toref与torefs" tabindex="-1">五、toRef与toRefs <a class="header-anchor" href="#五、toref与torefs" aria-label="Permalink to &quot;五、toRef与toRefs&quot;">​</a></h2><h3 id="toref" tabindex="-1"><a href="https://link.juejin.cn/?target=https%3A%2F%2Fv3.cn.vuejs.org%2Fapi%2Frefs-api.html%23toref" title="https://v3.cn.vuejs.org/api/refs-api.html#toref" target="_blank" rel="noreferrer">toRef</a> <a class="header-anchor" href="#toref" aria-label="Permalink to &quot;[toRef](https://link.juejin.cn/?target=https%3A%2F%2Fv3.cn.vuejs.org%2Fapi%2Frefs-api.html%23toref &quot;https://v3.cn.vuejs.org/api/refs-api.html#toref&quot;)&quot;">​</a></h3><p>官网对它的解释是<strong>可以用来为源响应式对象上的某个 <code>property</code> 新创建一个<code>ref</code>。然后，<code>ref</code> 可以被传递，它会保持对其源 <code>property</code> 的响应式连接。</strong> 按我的理解就是把 <code>reactive</code> 创建的响应对象中的某个属性变成一个单独的 <code>ref</code> ，但这个新 <code>ref</code> 与原对象是保持响应式连接的。</p><p>概念不理解没关系，我们直接来看看例子：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;div&gt;姓名: {{person.name}}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;div&gt;年龄: {{person.age}}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;div&gt;新年龄: {{newAge}}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;button @click=&quot;update&quot;&gt;按钮&lt;/button&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#babed8;">import { reactive, toRef } from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#babed8;">export default {</span></span>
<span class="line"><span style="color:#babed8;">  setup() {</span></span>
<span class="line"><span style="color:#babed8;">    const person = reactive({</span></span>
<span class="line"><span style="color:#babed8;">      name: &#39;橙某人&#39;,</span></span>
<span class="line"><span style="color:#babed8;">      age: 18</span></span>
<span class="line"><span style="color:#babed8;">    });</span></span>
<span class="line"><span style="color:#babed8;">    const newAge = toRef(person, &#39;age&#39;);</span></span>
<span class="line"><span style="color:#babed8;">    </span></span>
<span class="line"><span style="color:#babed8;">    function update() {</span></span>
<span class="line"><span style="color:#babed8;">      // person.age = 20 一样会同步响应</span></span>
<span class="line"><span style="color:#babed8;">      newAge.value = 20</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    return { person, newAge, add }</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cffad7ed24bd4d97af7324bc4c7e3417~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="1.gif"></p><p>从上面效果图可以看到，通过 <code>toRef</code> 创建的变量是具有响应式的并与原对象是保持响应式连接的。</p><h3 id="torefs" tabindex="-1"><a href="https://link.juejin.cn/?target=https%3A%2F%2Fv3.cn.vuejs.org%2Fapi%2Frefs-api.html%23torefs" title="https://v3.cn.vuejs.org/api/refs-api.html#torefs" target="_blank" rel="noreferrer">toRefs</a> <a class="header-anchor" href="#torefs" aria-label="Permalink to &quot;[toRefs](https://link.juejin.cn/?target=https%3A%2F%2Fv3.cn.vuejs.org%2Fapi%2Frefs-api.html%23torefs &quot;https://v3.cn.vuejs.org/api/refs-api.html#torefs&quot;)&quot;">​</a></h3><p>与前者相比多了一个 &quot;s&quot;，你可以认为它是 <code>toRef</code> 的批量操作，它的主要作用，觉得有这两方面：</p><ul><li>将 <code>reactive</code> 创建的响应对象中每个属性变成单独的 <code>ref</code>。</li><li>结合 <code>ES6</code> 的解构，可以使 <code>reactive</code> 对象的属性在模板中直接被使用，再也不需要通过 <code>xx.属性</code> 的形式。</li></ul><blockquote><p>需要注意的是，若直接对 <code>reactive</code> 创建的对象解构，会失去响应式！</p></blockquote><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;div&gt;昵称: {{name}}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;div&gt;年龄: {{age}}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;button @click=&quot;update&quot;&gt;按钮&lt;/button&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#babed8;">import { reactive, toRef, toRefs } from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#babed8;">export default {</span></span>
<span class="line"><span style="color:#babed8;">  setup() {</span></span>
<span class="line"><span style="color:#babed8;">    const person1 = reactive({</span></span>
<span class="line"><span style="color:#babed8;">      name: &#39;橙某人&#39;,</span></span>
<span class="line"><span style="color:#babed8;">    });</span></span>
<span class="line"><span style="color:#babed8;">    const person2 = reactive({</span></span>
<span class="line"><span style="color:#babed8;">      age: 18,</span></span>
<span class="line"><span style="color:#babed8;">    });</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    function update() {</span></span>
<span class="line"><span style="color:#babed8;">      person1.name = &#39;YDYDYDQ&#39;</span></span>
<span class="line"><span style="color:#babed8;">      person2.age = 20</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    return { </span></span>
<span class="line"><span style="color:#babed8;">      ...toRefs(person1), </span></span>
<span class="line"><span style="color:#babed8;">      ...person2, // 直接解构, 会失去响应式</span></span>
<span class="line"><span style="color:#babed8;">      add </span></span>
<span class="line"><span style="color:#babed8;">    };</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6f234b03c0814d039dee5dcd86b264c8~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="2.gif"></p><p>从效果图可以看到 <code>person2.age</code> 是没有响应变化的。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">person1 的类型:</span></span>
<span class="line"><span style="color:#babed8;">{</span></span>
<span class="line"><span style="color:#babed8;">  name: Ref&lt;string&gt;,</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">person2 的类型:</span></span>
<span class="line"><span style="color:#babed8;">{</span></span>
<span class="line"><span style="color:#babed8;">  age: number,</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="六、响应式对象判断" tabindex="-1">六、响应式对象判断 <a class="header-anchor" href="#六、响应式对象判断" aria-label="Permalink to &quot;六、响应式对象判断&quot;">​</a></h2><h3 id="isref" tabindex="-1"><a href="https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2Fapi%2Freactivity-utilities.html%23isref" title="https://cn.vuejs.org/api/reactivity-utilities.html#isref" target="_blank" rel="noreferrer">isRef</a> <a class="header-anchor" href="#isref" aria-label="Permalink to &quot;[isRef](https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2Fapi%2Freactivity-utilities.html%23isref &quot;https://cn.vuejs.org/api/reactivity-utilities.html#isref&quot;)&quot;">​</a></h3><p>从名称可以直接看出这个方法的作用，<strong>它用于检查值是否为一个 <code>ref</code> 对象。</strong></p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#babed8;">import { ref, isRef } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#babed8;">export default {</span></span>
<span class="line"><span style="color:#babed8;">  setup() {</span></span>
<span class="line"><span style="color:#babed8;">    const name = ref(&#39;橙某人&#39;);</span></span>
<span class="line"><span style="color:#babed8;">    const age = 18;</span></span>
<span class="line"><span style="color:#babed8;">    console.log(isRef(name)); // true</span></span>
<span class="line"><span style="color:#babed8;">    console.log(isRef(age)); // false</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="unref" tabindex="-1"><a href="https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2Fapi%2Freactivity-utilities.html%23unref" title="https://cn.vuejs.org/api/reactivity-utilities.html#unref" target="_blank" rel="noreferrer">unref</a> <a class="header-anchor" href="#unref" aria-label="Permalink to &quot;[unref](https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2Fapi%2Freactivity-utilities.html%23unref &quot;https://cn.vuejs.org/api/reactivity-utilities.html#unref&quot;)&quot;">​</a></h3><p>如果参数是一个<code>ref</code>，则返回内部值，否则返回参数本身。这个方法可能平常使用到的几率会比较少，它本质是 <code>isRef</code> 的三元判断语法糖，等同 <code>val = isRef(val) ? val.value : val</code> 。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#babed8;">import { ref, unref } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#babed8;">export default {</span></span>
<span class="line"><span style="color:#babed8;">  setup() {</span></span>
<span class="line"><span style="color:#babed8;">    const name = ref(&#39;橙某人&#39;);</span></span>
<span class="line"><span style="color:#babed8;">    const age = 18;</span></span>
<span class="line"><span style="color:#babed8;">    console.log(unref(name)); // 橙某人</span></span>
<span class="line"><span style="color:#babed8;">    console.log(unref(age)); // 18</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><blockquote><p>你可以认为 <code>name.value</code> === <code>unref(name)</code>。</p></blockquote><h3 id="isreactive" tabindex="-1"><a href="https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2Fapi%2Freactivity-utilities.html%23isreactive" title="https://cn.vuejs.org/api/reactivity-utilities.html#isreactive" target="_blank" rel="noreferrer">isReactive</a> <a class="header-anchor" href="#isreactive" aria-label="Permalink to &quot;[isReactive](https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2Fapi%2Freactivity-utilities.html%23isreactive &quot;https://cn.vuejs.org/api/reactivity-utilities.html#isreactive&quot;)&quot;">​</a></h3><p>检查一个对象是否是由<code>reactive</code>或<a href="https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2Fapi%2Freactivity-advanced.html%23shallowreactive" title="https://cn.vuejs.org/api/reactivity-advanced.html#shallowreactive" target="_blank" rel="noreferrer">shallowReactive</a>创建的代理。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#babed8;">import { ref, reactive, isReactive } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#babed8;">export default {</span></span>
<span class="line"><span style="color:#babed8;">  setup() {</span></span>
<span class="line"><span style="color:#babed8;">    const name = ref(&#39;橙某人&#39;);</span></span>
<span class="line"><span style="color:#babed8;">    const person = reactive({});</span></span>
<span class="line"><span style="color:#babed8;">    console.log(isReactive(name)); // false</span></span>
<span class="line"><span style="color:#babed8;">    console.log(isReactive(person)); // true</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="isproxy" tabindex="-1"><a href="https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2Fapi%2Freactivity-utilities.html%23isproxy" title="https://cn.vuejs.org/api/reactivity-utilities.html#isproxy" target="_blank" rel="noreferrer">isProxy</a> <a class="header-anchor" href="#isproxy" aria-label="Permalink to &quot;[isProxy](https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2Fapi%2Freactivity-utilities.html%23isproxy &quot;https://cn.vuejs.org/api/reactivity-utilities.html#isproxy&quot;)&quot;">​</a></h3><p>检查一个对象是否是由<code>reactive</code>、<code>readonly</code>、<code>shallowReactive</code>或<code>shallowReadonly</code>创建的代理。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#babed8;">import { ref, reactive, isProxy } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#babed8;">export default {</span></span>
<span class="line"><span style="color:#babed8;">  setup() {</span></span>
<span class="line"><span style="color:#babed8;">    const name = ref(&#39;橙某人&#39;);</span></span>
<span class="line"><span style="color:#babed8;">    const person = reactive({});</span></span>
<span class="line"><span style="color:#babed8;">    const age = 18;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    console.log(isProxy(name)); // false</span></span>
<span class="line"><span style="color:#babed8;">    console.log(isProxy(person)); // true</span></span>
<span class="line"><span style="color:#babed8;">    console.log(isProxy(age)); // false</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="isreadonly" tabindex="-1"><a href="https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2Fapi%2Freactivity-utilities.html%23isreadonly" title="https://cn.vuejs.org/api/reactivity-utilities.html#isreadonly" target="_blank" rel="noreferrer">isReadonly</a> <a class="header-anchor" href="#isreadonly" aria-label="Permalink to &quot;[isReadonly](https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2Fapi%2Freactivity-utilities.html%23isreadonly &quot;https://cn.vuejs.org/api/reactivity-utilities.html#isreadonly&quot;)&quot;">​</a></h3><p>检查一个对象是否是由<code>readonly</code>或<code>shallowReadonly</code>创建的代理。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#babed8;">import { ref, reactive, isProxy } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#babed8;">export default {</span></span>
<span class="line"><span style="color:#babed8;">  setup() {</span></span>
<span class="line"><span style="color:#babed8;">    const name = ref(&#39;橙某人&#39;);</span></span>
<span class="line"><span style="color:#babed8;">    const person = reactive({});</span></span>
<span class="line"><span style="color:#babed8;">    const student = readonly({}); // 接受一个对象(不论是响应式还是普通的)或是一个 ref, 返回一个原值的只读代理.</span></span>
<span class="line"><span style="color:#babed8;">    const age = 18;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    console.log(isReadonly(name)); // false</span></span>
<span class="line"><span style="color:#babed8;">    console.log(isReadonly(person)); // false</span></span>
<span class="line"><span style="color:#babed8;">    console.log(isReadonly(student)); // true</span></span>
<span class="line"><span style="color:#babed8;">    console.log(isReadonly(age)); // false</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="七、computed" tabindex="-1">七、computed <a class="header-anchor" href="#七、computed" aria-label="Permalink to &quot;七、computed&quot;">​</a></h2><p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fv3.cn.vuejs.org%2Fapi%2Fcomputed-watch-api.html%23computed" title="https://v3.cn.vuejs.org/api/computed-watch-api.html#computed" target="_blank" rel="noreferrer">computed()</a> 与 <code>Vue2</code> 中的 <code>computed</code> 作用基本一致，它可以接收一个<strong>函数</strong>或<strong>对象</strong>作为参数，会返回一个<strong>只读</strong>的 <code>ref</code> 对象。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;div&gt;{{info}}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#babed8;">import { computed, reactive } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#babed8;">export default {</span></span>
<span class="line"><span style="color:#babed8;">  setup() {</span></span>
<span class="line"><span style="color:#babed8;">    const person = reactive({</span></span>
<span class="line"><span style="color:#babed8;">      name: &#39;橙某人&#39;,</span></span>
<span class="line"><span style="color:#babed8;">      age: 18</span></span>
<span class="line"><span style="color:#babed8;">    });</span></span>
<span class="line"><span style="color:#babed8;">    const info = computed(() =&gt; \`姓名：\${person.name}，年龄\${person.age}\`)</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    return { info }</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/748dc47975274a74b54c49c946dd0f5d~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="image.png"></p><h3 id="修改计算属性" tabindex="-1">修改计算属性 <a class="header-anchor" href="#修改计算属性" aria-label="Permalink to &quot;修改计算属性&quot;">​</a></h3><p>如果你尝试修改计算属性的返回值，控制台会有出现提示信息并且修改不会成功。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">info.value = &#39;修改computed()返回值&#39;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/eb92053c26ee469ca22eab4301912f0e~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="image.png"></p><p>但假如你一定要修改 <code>computed()</code> 的返回值，我们可以使用它的对象参数来间接修改，该对象需要提供 <code>set</code> 与 <code>get</code> 方法。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;div&gt;{{info}}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#babed8;">import { computed, reactive } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#babed8;">export default {</span></span>
<span class="line"><span style="color:#babed8;">  setup() {</span></span>
<span class="line"><span style="color:#babed8;">    const person = reactive({</span></span>
<span class="line"><span style="color:#babed8;">      name: &#39;橙某人&#39;,</span></span>
<span class="line"><span style="color:#babed8;">      age: 18</span></span>
<span class="line"><span style="color:#babed8;">    });</span></span>
<span class="line"><span style="color:#babed8;">    let info = computed({</span></span>
<span class="line"><span style="color:#babed8;">      set: newValue =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">        person.name = newValue</span></span>
<span class="line"><span style="color:#babed8;">      },</span></span>
<span class="line"><span style="color:#babed8;">      get: () =&gt; \`姓名：\${person.name}，年龄\${person.age}\`</span></span>
<span class="line"><span style="color:#babed8;">    });</span></span>
<span class="line"><span style="color:#babed8;">   </span></span>
<span class="line"><span style="color:#babed8;">    info.value = &#39;修改computed()返回值&#39;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    return { info }</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cb74f8d2fcfa47f28d27cdac0e6738b9~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="image.png"></p><h2 id="八、watch" tabindex="-1">八、watch <a class="header-anchor" href="#八、watch" aria-label="Permalink to &quot;八、watch&quot;">​</a></h2><p><code>Vue3</code> 的 <a href="https://link.juejin.cn/?target=https%3A%2F%2Fv3.cn.vuejs.org%2Fapi%2Fcomputed-watch-api.html%23watch" title="https://v3.cn.vuejs.org/api/computed-watch-api.html#watch" target="_blank" rel="noreferrer">watch()</a> 与 <code>Vue2</code> 的 <code>watch</code> 选项和 <a href="https://link.juejin.cn/?target=https%3A%2F%2Fv3.cn.vuejs.org%2Fapi%2Finstance-methods.html%23watch" title="https://v3.cn.vuejs.org/api/instance-methods.html#watch" target="_blank" rel="noreferrer">this.$watch</a> API 完全等效。</p><p>我们先来看看它的基本两种基本用法：</p><h3 id="监听单一源" tabindex="-1">监听单一源 <a class="header-anchor" href="#监听单一源" aria-label="Permalink to &quot;监听单一源&quot;">​</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;div&gt;昵称: {{name}}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;div&gt;年龄: {{person.age}}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;button @click=&quot;update&quot;&gt;按钮&lt;/button&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#babed8;">import { ref, reactive, watch } from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#babed8;">export default {</span></span>
<span class="line"><span style="color:#babed8;">  setup() {</span></span>
<span class="line"><span style="color:#babed8;">    // 直接监听一个ref</span></span>
<span class="line"><span style="color:#babed8;">    const name = ref(&#39;橙某人&#39;);</span></span>
<span class="line"><span style="color:#babed8;">    watch(name, (newValue, oldValue) =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">      console.log(&#39;新name：&#39;, newValue, oldValue);</span></span>
<span class="line"><span style="color:#babed8;">    });</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    // 监听对象单个属性</span></span>
<span class="line"><span style="color:#babed8;">    const person = reactive({</span></span>
<span class="line"><span style="color:#babed8;">      age: 18</span></span>
<span class="line"><span style="color:#babed8;">    })</span></span>
<span class="line"><span style="color:#babed8;">    watch(() =&gt; person.age, (newValue, oldValue) =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">      console.log(&#39;新age：&#39;, newValue, oldValue);</span></span>
<span class="line"><span style="color:#babed8;">    });</span></span>
<span class="line"><span style="color:#babed8;">    </span></span>
<span class="line"><span style="color:#babed8;">    function update() {</span></span>
<span class="line"><span style="color:#babed8;">      name.value = &#39;YDYDYDQ&#39;</span></span>
<span class="line"><span style="color:#babed8;">      person.age = 20</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    return { name, person, add }</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/aeb77f2048de43c9ad34521253fdada0~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="image.png"></p><h3 id="监听多个源" tabindex="-1">监听多个源 <a class="header-anchor" href="#监听多个源" aria-label="Permalink to &quot;监听多个源&quot;">​</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;div&gt;昵称: {{name}}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;div&gt;年龄: {{age}}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;button @click=&quot;update&quot;&gt;按钮&lt;/button&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#babed8;">import { ref, watch } from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#babed8;">export default {</span></span>
<span class="line"><span style="color:#babed8;">  setup() {</span></span>
<span class="line"><span style="color:#babed8;">    const name = ref(&#39;橙某人&#39;);</span></span>
<span class="line"><span style="color:#babed8;">    const age = ref(18);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    watch([name, age], (newValue, oldValue) =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">      console.log(newValue, oldValue)</span></span>
<span class="line"><span style="color:#babed8;">    });</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    function update() {</span></span>
<span class="line"><span style="color:#babed8;">      name.value = &#39;YDYDYDQ&#39;;</span></span>
<span class="line"><span style="color:#babed8;">      age.value = 20;</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    return { name, age, add }</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bcb97f068310495fafea5f51e008d899~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="image.png"></p><p><code>watch()</code> 可以使用数组形式同时监听多个源，并且得到的 <code>newValue</code> 与 <code>oldValue</code> 也是以数组的形式返回的。</p><blockquote><p>当我们只修改 <code>name</code> 得到的结果： <img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/77ac5e02186a41dc80845b170eff5e90~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="image.png"></p></blockquote><p>如果是想监听 <code>reactive</code> 对象的多个属性，可以这么写：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">const person = reactive({</span></span>
<span class="line"><span style="color:#babed8;">  name: &#39;橙某人&#39;,</span></span>
<span class="line"><span style="color:#babed8;">  age: 18</span></span>
<span class="line"><span style="color:#babed8;">});</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">watch([() =&gt; person.name, () =&gt; person.age], (newValue, oldValue) =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">  console.log(newValue, oldValue); // [...], [...]</span></span>
<span class="line"><span style="color:#babed8;">});</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="immediate与deep参数" tabindex="-1">immediate与deep参数 <a class="header-anchor" href="#immediate与deep参数" aria-label="Permalink to &quot;immediate与deep参数&quot;">​</a></h3><p><code>Vue</code> 中 <code>watch</code> 选项还有 <strong>immediate</strong> 与 <strong>deep</strong> 参数，在 <code>Vue3</code> 中一样还能继续使用。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">import { reactive, watch } from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#babed8;">export default {</span></span>
<span class="line"><span style="color:#babed8;">  setup() {</span></span>
<span class="line"><span style="color:#babed8;">    const person = reactive({</span></span>
<span class="line"><span style="color:#babed8;">        name: &#39;橙某人&#39;,</span></span>
<span class="line"><span style="color:#babed8;">        age: 18</span></span>
<span class="line"><span style="color:#babed8;">    });</span></span>
<span class="line"><span style="color:#babed8;">    </span></span>
<span class="line"><span style="color:#babed8;">    watch(() =&gt; person, (newValue, oldValue) =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">      console.log(newValue, oldValue)</span></span>
<span class="line"><span style="color:#babed8;">    }, {</span></span>
<span class="line"><span style="color:#babed8;">      deep: true,</span></span>
<span class="line"><span style="color:#babed8;">      immediate: true</span></span>
<span class="line"><span style="color:#babed8;">    });</span></span>
<span class="line"><span style="color:#babed8;">    </span></span>
<span class="line"><span style="color:#babed8;">    function add() {</span></span>
<span class="line"><span style="color:#babed8;">      person.value.name = &#39;YDYDYDQ&#39;;</span></span>
<span class="line"><span style="color:#babed8;">      person.value.age = 20;</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">    </span></span>
<span class="line"><span style="color:#babed8;">    return { add };</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8c43a04862dc4645836706fe9c1bf481~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="image.png"></p><p>但是这里有两个小坑需要小伙伴们注意，都是针对 <code>oldValue</code> 参数：</p><ul><li>开启 <strong>immediate</strong> 参数后，初次监听的 <code>oldValue</code> 值是 <code>undefined</code>。</li><li>监听一整个 <strong>引用类型</strong> 变化时，<code>oldValue</code> 值与 <code>newValue</code> 值一样 (用 <code>ref</code> 来定义也是一样)。</li></ul><h3 id="停止监听" tabindex="-1">停止监听 <a class="header-anchor" href="#停止监听" aria-label="Permalink to &quot;停止监听&quot;">​</a></h3><p>当我们在<code>setup</code>函数内创建 <code>watch</code> 监听，它会在当前组件被销毁的时候自动停止。但如果你想要手动地停止某个 <code>watch</code>，可以调用<code>watch</code>函数的返回值即可。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#babed8;">import { ref, watch } from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#babed8;">export default {</span></span>
<span class="line"><span style="color:#babed8;">  setup() {</span></span>
<span class="line"><span style="color:#babed8;">    const name = ref(&#39;橙某人&#39;);</span></span>
<span class="line"><span style="color:#babed8;">    </span></span>
<span class="line"><span style="color:#babed8;">    const stopWatch = watch(name, (newValue, oldValue) =&gt; {});</span></span>
<span class="line"><span style="color:#babed8;">    </span></span>
<span class="line"><span style="color:#babed8;">    // 停止watch</span></span>
<span class="line"><span style="color:#babed8;">    stopWatch();</span></span>
<span class="line"><span style="color:#babed8;">    </span></span>
<span class="line"><span style="color:#babed8;">    stopWatch</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="九、watcheffect" tabindex="-1">九、watchEffect <a class="header-anchor" href="#九、watcheffect" aria-label="Permalink to &quot;九、watchEffect&quot;">​</a></h2><p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fv3.cn.vuejs.org%2Fapi%2Fcomputed-watch-api.html%23watcheffect" title="https://v3.cn.vuejs.org/api/computed-watch-api.html#watcheffect" target="_blank" rel="noreferrer">watchEffect</a> 是 <code>Vue3</code> 的新函数，你可以认为它是 <code>watch</code> 的升级版或加强版，它功能和 <code>watch</code> 相似，但却更加强大。</p><p><strong>它接收一个函数作为参数，并会立即执行传入的函数，同时响应式追踪其依赖，并在其依赖变更时重新运行该函数。</strong></p><p>定义看不懂-.-，没关系，我们一样先来看看它的使用方式：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;button @click=&quot;update1&quot;&gt;按钮1&lt;/button&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;button @click=&quot;update2&quot;&gt;按钮2&lt;/button&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#babed8;">import { ref, watchEffect } from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#babed8;">export default {</span></span>
<span class="line"><span style="color:#babed8;">  setup() {</span></span>
<span class="line"><span style="color:#babed8;">    const name = ref(&#39;橙某人&#39;);</span></span>
<span class="line"><span style="color:#babed8;">    const age = ref(18);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    watchEffect(() =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">      console.log(&#39;**********&#39;);</span></span>
<span class="line"><span style="color:#babed8;">      console.log(name.value);</span></span>
<span class="line"><span style="color:#babed8;">      console.log(age.value);</span></span>
<span class="line"><span style="color:#babed8;">    });</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    function update1() {</span></span>
<span class="line"><span style="color:#babed8;">      name.value = &#39;YDYDYDQ&#39;;</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">    function update2() {</span></span>
<span class="line"><span style="color:#babed8;">      name.value = 20;</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    return { add1, add2 }</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6ccb4f99a2de45c893d04dd06012594b~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="image.png"></p><p>从上图中可以看到，<code>watchEffect</code> 会被立即执行(可以认为 <code>immediate: true</code>)，并且不管是修改 <code>name</code> 还是 <code>age</code> 都会触发 <code>watchEffect</code> 执行。</p><blockquote><p>你可以认为 <code>watchEffect</code> 内部使用到什么响应数据，就监听了什么响应数据，只要这些响应数据发生变化，就会触发 <code>watchEffect</code>。</p></blockquote><h3 id="停止监听-1" tabindex="-1">停止监听 <a class="header-anchor" href="#停止监听-1" aria-label="Permalink to &quot;停止监听&quot;">​</a></h3><p>当<code>watchEffect</code>在组件的<a href="https://link.juejin.cn/?target=https%3A%2F%2Fv3.cn.vuejs.org%2Fguide%2Fcomposition-api-setup.html" title="https://v3.cn.vuejs.org/guide/composition-api-setup.html" target="_blank" rel="noreferrer">setup</a>函数或 <a href="https://link.juejin.cn/?target=https%3A%2F%2Fv3.cn.vuejs.org%2Fguide%2Fcomposition-api-lifecycle-hooks.html" title="https://v3.cn.vuejs.org/guide/composition-api-lifecycle-hooks.html" target="_blank" rel="noreferrer">生命周期钩子</a> 被调用时，监听器会被链接到该组件的生命周期，并在组件卸载时自动停止。当然它和 <code>watch</code> 一样，也能被手动停止。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">const stopWatchEffect = watchEffect(() =&gt; {});</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 停止WatchEffect</span></span>
<span class="line"><span style="color:#babed8;">stopWatchEffect();</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="清除副作用" tabindex="-1">清除副作用 <a class="header-anchor" href="#清除副作用" aria-label="Permalink to &quot;清除副作用&quot;">​</a></h3><p>首先，什么是副作用呢？</p><p>在纯函数中，副作用指的是如果一个函数在输入和输出之外还做了其他的事情，那么这个函数额外做的事情就被称为 <strong>副作用</strong>，而产生副作用的函数被称为 <strong>副作用函数</strong>。</p><blockquote><p>纯函数：你可以简单认为，我调用一个函数，给它传入参数，会得到一个结果，但这个函数在调用过程中不会对程序中的其他变量进行修改，这种函数即可称之为纯函数。</p></blockquote><p><code>watchEffect(effect)</code> 的回调函数(<code>effect</code>)就是一个副作用函数，因为我们使用<code>watchEffect</code>就是为了监听响应数据变化后做一些其他操作。</p><p>一旦副作用函数被执行时，它势必会对程序带来一些影响。有时副作用函数会执行一些异步的副作用，而<strong>异步</strong>则会带来一些响应(副作用)是&quot;失效&quot;的，我们需要及时清除这些响应。</p><p>而 <code>watchEffect((onInvalidate) =&gt; {})</code> 监听器可以接收一个<code>onInvalidate</code>函数作为入参，用来注册清理失效时的回调。</p><p>当以下情况发生时，这个失效回调会被触发：</p><ul><li>副作用即将重新执行时。</li><li>监听被停止。(如果在<code>setup</code>或生命周期钩子函数中使用了<code>watchEffect</code>，则在组件卸载时)</li></ul><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b7c42e2b198d4fd69b233aabbe05005c~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="1B716F69.png"></p><p>看不懂！！！Em...那我们继续来看例子：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;div&gt;count: {{count}}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;button @click=&quot;update&quot;&gt;按钮&lt;/button&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#babed8;">import { ref, watchEffect } from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#babed8;">export default {</span></span>
<span class="line"><span style="color:#babed8;">  setup() {</span></span>
<span class="line"><span style="color:#babed8;">    const count = ref(1);</span></span>
<span class="line"><span style="color:#babed8;">    watchEffect(onInvalidate =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">      const timer = setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">        console.log(&#39;发请网络请求&#39;)</span></span>
<span class="line"><span style="color:#babed8;">      }, 1000);</span></span>
<span class="line"><span style="color:#babed8;">      onInvalidate(() =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">        clearTimeout(timer)</span></span>
<span class="line"><span style="color:#babed8;">      });</span></span>
<span class="line"><span style="color:#babed8;">      console.log(count.value);</span></span>
<span class="line"><span style="color:#babed8;">    });</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    function update() {</span></span>
<span class="line"><span style="color:#babed8;">      count.value++;</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    return { count, update }</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fd15bf1e9d264f8a92dff3d334cb904a~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="4.gif"></p><p>从上面效果图可以看到，当我们不断点击去修改 <code>count</code> 的值时(修改过程时间超过 <code>1s</code>)，会频繁触发 <code>watchEffect</code>，但是其中的 <code>setTimeout</code> 却不会在规定时间内被执行，而是当停止更改后 <code>1s</code> 后才被执行。</p><p>从这个现象有没有让你想起什么呢？没错，就是它，<strong>节流函数</strong>。</p><p>我们把 <code>DEMO</code> 修改修改：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;input v-model=&quot;inputValue&quot; /&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#babed8;">import { ref, watchEffect } from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#babed8;">export default {</span></span>
<span class="line"><span style="color:#babed8;">  setup() {</span></span>
<span class="line"><span style="color:#babed8;">    const inputValue = ref(&#39;&#39;);</span></span>
<span class="line"><span style="color:#babed8;">    watchEffect(onInvalidate =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">      const timer = setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">        console.log(&#39;输入结束200ms才去请求接口&#39;)</span></span>
<span class="line"><span style="color:#babed8;">      }, 200);</span></span>
<span class="line"><span style="color:#babed8;">      onInvalidate(() =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">        clearTimeout(timer)</span></span>
<span class="line"><span style="color:#babed8;">      });</span></span>
<span class="line"><span style="color:#babed8;">      console.log(&#39;输入框的值：&#39;, inputValue.value)</span></span>
<span class="line"><span style="color:#babed8;">    })</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    return { inputValue }</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ee4172e5128e4924baa28eff98f30a98~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="image.png"></p><p>从这个例子里有没有让你悟出些什么呢？</p><h2 id="十、provide与inject" tabindex="-1">十、provide与inject <a class="header-anchor" href="#十、provide与inject" aria-label="Permalink to &quot;十、provide与inject&quot;">​</a></h2><p><code>provide</code> 与 <code>inject</code> 是一种跨层级组件（祖孙）通信方式。当组件多层嵌套时，不需要将数据一层一层的向下传递，通过它俩可以实现跨层级组件通信。</p><h3 id="provide" tabindex="-1"><a href="https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2Fapi%2Fcomposition-api-dependency-injection.html%23provide" title="https://cn.vuejs.org/api/composition-api-dependency-injection.html#provide" target="_blank" rel="noreferrer">provide</a> <a class="header-anchor" href="#provide" aria-label="Permalink to &quot;[provide](https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2Fapi%2Fcomposition-api-dependency-injection.html%23provide &quot;https://cn.vuejs.org/api/composition-api-dependency-injection.html#provide&quot;)&quot;">​</a></h3><p>注入一个值，可以被后代组件接收。</p><p>它接受两个参数：</p><ul><li>第一个参数是要注入的 <code>key</code>，可以是一个字符串或者一个 <code>symbol</code>。</li><li>第二个参数是要注入的值。</li></ul><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;button @click=&quot;update&quot;&gt;按钮&lt;/button&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;PChild /&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#babed8;">import { ref, provide, reactive } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#babed8;">import PChild from &#39;./PChild.vue&#39;;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">export default {</span></span>
<span class="line"><span style="color:#babed8;">  components: { PChild },</span></span>
<span class="line"><span style="color:#babed8;">  setup() {</span></span>
<span class="line"><span style="color:#babed8;">    // 静态值</span></span>
<span class="line"><span style="color:#babed8;">    let name = &#39;橙某人&#39;;</span></span>
<span class="line"><span style="color:#babed8;">    provide(&#39;nameKey&#39;, name);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    // 响应式值</span></span>
<span class="line"><span style="color:#babed8;">    let age = ref(18);</span></span>
<span class="line"><span style="color:#babed8;">    provide(&#39;ageKey&#39;, age);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    // 响应式值</span></span>
<span class="line"><span style="color:#babed8;">    let person = reactive({</span></span>
<span class="line"><span style="color:#babed8;">      sex: &#39;男&#39;</span></span>
<span class="line"><span style="color:#babed8;">    });</span></span>
<span class="line"><span style="color:#babed8;">    provide(&#39;personKey&#39;, person);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    function update() {</span></span>
<span class="line"><span style="color:#babed8;">      name = &#39;YDYDYDQ&#39;;</span></span>
<span class="line"><span style="color:#babed8;">      age.value = 20;</span></span>
<span class="line"><span style="color:#babed8;">      person.sex = &#39;女&#39;</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    return { update };</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><h3 id="inject" tabindex="-1"><a href="https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2Fapi%2Fcomposition-api-dependency-injection.html%23inject" title="https://cn.vuejs.org/api/composition-api-dependency-injection.html#inject" target="_blank" rel="noreferrer">inject</a> <a class="header-anchor" href="#inject" aria-label="Permalink to &quot;[inject](https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2Fapi%2Fcomposition-api-dependency-injection.html%23inject &quot;https://cn.vuejs.org/api/composition-api-dependency-injection.html#inject&quot;)&quot;">​</a></h3><p>接收一个由祖先组件或整个应用 (通过<code>app.provide()</code>) 注入的值。</p><p>它接受两个参数：</p><ul><li><p>第一个参数是注入的 <code>key</code>，找不到对应的 <code>key</code>，则返回 <code>undefined</code> 或默认值。</p><p><code>Vue</code> 会遍历父组件链，通过匹配 <code>key</code> 来确定所提供的值。如果父组件链上多个组件对同一个 <code>key</code> 提供了值，那么离得更近的组件将会 &quot;覆盖&quot; 链上更远的组件所提供的值。如果没有能通过 <code>key</code> 匹配到值，<code>inject</code>将返回<code>undefined</code>，除非提供了一个默认值。</p></li><li><p>第二个参数是默认值，非必填，也可以是一个工厂函数。</p><p>如果默认值本身就是一个函数，那么你必须将<code>false</code>作为第三个参数传入，表明这个函数就是默认值，而不是一个工厂函数。<br><code>const fn = inject(&#39;function&#39;, () =&gt; {}, false)</code></p></li></ul><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;h3&gt;第二层子组件&lt;/h3&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;div&gt;昵称: {{name}}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;div&gt;年龄: {{age}}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;div&gt;性别：{{person.sex}}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#babed8;">import { inject } from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#babed8;">export default {</span></span>
<span class="line"><span style="color:#babed8;">  setup() {</span></span>
<span class="line"><span style="color:#babed8;">    const name = inject(&#39;nameKey&#39;);</span></span>
<span class="line"><span style="color:#babed8;">    const age = inject(&#39;ageKey&#39;);</span></span>
<span class="line"><span style="color:#babed8;">    const person = inject(&#39;personKey&#39;);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    return { name, age, person };</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/13e6fea0775f477a91696e071f8b79c9~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="5.gif"></p><p>从效果图可以看到，修改静态值视图是不更新的，而修改响应式值视图是可以同步更新的。</p><h3 id="后代组件修改注入的值" tabindex="-1">后代组件修改注入的值 <a class="header-anchor" href="#后代组件修改注入的值" aria-label="Permalink to &quot;后代组件修改注入的值&quot;">​</a></h3><p><code>Vue</code> 是单向数据流，子组件直接修改父组件传递的数据是不被允许的，这样容易造成数据混乱，来源不明等问题。</p><p>然而，有时我们确实需要在子组件修改注入的数据，这种情况下我们需要怎么做呢？我们可以在父组件再注入一个方法，提供给后代组件们调用。</p><p>父组件：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#babed8;">import { ref, provide } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#babed8;">export default {</span></span>
<span class="line"><span style="color:#babed8;">  setup() {</span></span>
<span class="line"><span style="color:#babed8;">    let name = ref(&#39;橙某人&#39;);</span></span>
<span class="line"><span style="color:#babed8;">    provide(&#39;nameKey&#39;, name);</span></span>
<span class="line"><span style="color:#babed8;">    </span></span>
<span class="line"><span style="color:#babed8;">    function updateName(newName) {</span></span>
<span class="line"><span style="color:#babed8;">      name.value = newName;</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">    provide(&#39;updateNameKey&#39;, updateName);</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>后代组件：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;div&gt;昵称: {{name}}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;button @click=&quot;updateName(&#39;YDYDYDQ&#39;)&quot;&gt;按钮&lt;/button&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#babed8;">import { inject } from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#babed8;">export default {</span></span>
<span class="line"><span style="color:#babed8;">  setup() {</span></span>
<span class="line"><span style="color:#babed8;">    const name = inject(&#39;nameKey&#39;);</span></span>
<span class="line"><span style="color:#babed8;">    const updateName = inject(&#39;updateNameKey&#39;);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    return { name, updateName }</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="禁止后代组件修改注入的值" tabindex="-1">禁止后代组件修改注入的值 <a class="header-anchor" href="#禁止后代组件修改注入的值" aria-label="Permalink to &quot;禁止后代组件修改注入的值&quot;">​</a></h3><p>如果要确保注入的数据不会被后代组件更改，我们可以使用 <a href="https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2Fapi%2Freactivity-core.html%23readonly" title="https://cn.vuejs.org/api/reactivity-core.html#readonly" target="_blank" rel="noreferrer">readonly</a> 来加上这个保证。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#babed8;">import { ref, provide, readonly } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#babed8;">export default {</span></span>
<span class="line"><span style="color:#babed8;">  setup() {</span></span>
<span class="line"><span style="color:#babed8;">    let name = ref(&#39;橙某人&#39;);</span></span>
<span class="line"><span style="color:#babed8;">    provide(&#39;nameKey&#39;, readonly(name)); // readonly</span></span>
<span class="line"><span style="color:#babed8;">    </span></span>
<span class="line"><span style="color:#babed8;">    function updateName(newName) {</span></span>
<span class="line"><span style="color:#babed8;">      name.value = newName;</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">    provide(&#39;updateNameKey&#39;, updateName);</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>增加 <code>readonly</code> 后，如果你尝试去修改 <code>inject</code> 接收的值，则控制台会报出提醒。</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f45e930bee1947fc93eaabc12fd62389~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="image.png"></p><blockquote><p>当然，即使增加了 <code>readonly</code> ，<code>name</code> 的响应式可不会消失哦，一样还是响应式的！</p></blockquote><h2 id="十一、全局api" tabindex="-1">十一、全局API <a class="header-anchor" href="#十一、全局api" aria-label="Permalink to &quot;十一、全局API&quot;">​</a></h2><table><thead><tr><th>2.x 全局 API（<code>Vue</code>）</th><th>3.x 实例 API (<code>app</code>)</th></tr></thead><tbody><tr><td><a href="https://link.juejin.cn/?target=https%3A%2F%2Fv2.cn.vuejs.org%2Fv2%2Fapi%2F%23%25E5%2585%25A8%25E5%25B1%2580%25E9%2585%258D%25E7%25BD%25AE" title="https://v2.cn.vuejs.org/v2/api/#%E5%85%A8%E5%B1%80%E9%85%8D%E7%BD%AE" target="_blank" rel="noreferrer">Vue.config.xxx</a></td><td><a href="https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2Fapi%2Fapplication.html%23app-config" title="https://cn.vuejs.org/api/application.html#app-config" target="_blank" rel="noreferrer">app.config.xxx</a></td></tr><tr><td><a href="https://link.juejin.cn/?target=https%3A%2F%2Fv2.cn.vuejs.org%2Fv2%2Fapi%2F%23productionTip" title="https://v2.cn.vuejs.org/v2/api/#productionTip" target="_blank" rel="noreferrer">Vue.config.productionTip</a></td><td><strong>移除</strong></td></tr><tr><td><a href="https://link.juejin.cn/?target=https%3A%2F%2Fv2.cn.vuejs.org%2Fv2%2Fapi%2F%23Vue-component" title="https://v2.cn.vuejs.org/v2/api/#Vue-component" target="_blank" rel="noreferrer">Vue.component</a></td><td><a href="https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2Fapi%2Fapplication.html%23app-component" title="https://cn.vuejs.org/api/application.html#app-component" target="_blank" rel="noreferrer">app.component</a></td></tr><tr><td><a href="https://link.juejin.cn/?target=https%3A%2F%2Fv2.cn.vuejs.org%2Fv2%2Fapi%2F%23Vue-directive" title="https://v2.cn.vuejs.org/v2/api/#Vue-directive" target="_blank" rel="noreferrer">Vue.directive</a></td><td><a href="https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2Fapi%2Fapplication.html%23app-directive" title="https://cn.vuejs.org/api/application.html#app-directive" target="_blank" rel="noreferrer">app.directive</a></td></tr><tr><td><a href="https://link.juejin.cn/?target=https%3A%2F%2Fv2.cn.vuejs.org%2Fv2%2Fapi%2F%23Vue-mixin" title="https://v2.cn.vuejs.org/v2/api/#Vue-mixin" target="_blank" rel="noreferrer">Vue.mixin</a></td><td><a href="https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2Fapi%2Fapplication.html%23app-mixin" title="https://cn.vuejs.org/api/application.html#app-mixin" target="_blank" rel="noreferrer">app.mixin</a></td></tr><tr><td><a href="https://link.juejin.cn/?target=https%3A%2F%2Fv2.cn.vuejs.org%2Fv2%2Fapi%2F%23Vue-use" title="https://v2.cn.vuejs.org/v2/api/#Vue-use" target="_blank" rel="noreferrer">Vue.use</a></td><td><a href="https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2Fapi%2Fapplication.html%23app-use" title="https://cn.vuejs.org/api/application.html#app-use" target="_blank" rel="noreferrer">app.use</a></td></tr><tr><td><a href="https://link.juejin.cn/?target=https%3A%2F%2Fv2.cn.vuejs.org%2Fv2%2Fapi%2F%23vm-mount" title="https://v2.cn.vuejs.org/v2/api/#vm-mount" target="_blank" rel="noreferrer">Vue.$mount</a></td><td><a href="https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2Fapi%2Fapplication.html%23app-mount" title="https://cn.vuejs.org/api/application.html#app-mount" target="_blank" rel="noreferrer">app.mount</a></td></tr><tr><td>Vue.prototype</td><td><a href="https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2Fapi%2Fapplication.html%23app-config-globalproperties" title="https://cn.vuejs.org/api/application.html#app-config-globalproperties" target="_blank" rel="noreferrer">app.config.globalProperties</a></td></tr><tr><td><strong>无</strong></td><td><a href="https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2Fapi%2Fapplication.html%23app-provide" title="https://cn.vuejs.org/api/application.html#app-provide" target="_blank" rel="noreferrer">app.provide</a></td></tr><tr><td><strong>无</strong></td><td><a href="https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2Fapi%2Fapplication.html%23app-unmount" title="https://cn.vuejs.org/api/application.html#app-unmount" target="_blank" rel="noreferrer">unmount</a></td></tr></tbody></table><h2 id="十二、其余不常用api" tabindex="-1">十二、其余不常用API <a class="header-anchor" href="#十二、其余不常用api" aria-label="Permalink to &quot;十二、其余不常用API&quot;">​</a></h2><h3 id="readonly" tabindex="-1">readonly <a class="header-anchor" href="#readonly" aria-label="Permalink to &quot;readonly&quot;">​</a></h3><p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2Fapi%2Freactivity-core.html%23readonly" title="https://cn.vuejs.org/api/reactivity-core.html#readonly" target="_blank" rel="noreferrer">readonly</a> 接受一个对象 (不论是响应式还是普通的) 或是一个<code>ref</code>，返回一个原值的只读代理。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#babed8;">import { readonly } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#babed8;">export default {</span></span>
<span class="line"><span style="color:#babed8;">  setup() {</span></span>
<span class="line"><span style="color:#babed8;">    const student = readonly({</span></span>
<span class="line"><span style="color:#babed8;">       name: &#39;橙某人&#39;</span></span>
<span class="line"><span style="color:#babed8;">    });</span></span>
<span class="line"><span style="color:#babed8;">    student.name = &#39;YDYDYDQ&#39;; // 不可修改</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>当你尝试修改 <code>readonly</code> 创建的对象时，控制台会有提示：</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4c810dac03e94e1da298939346c3263d~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="image.png"></p><h3 id="shallowref与shallowreactive" tabindex="-1">shallowRef与shallowReactive <a class="header-anchor" href="#shallowref与shallowreactive" aria-label="Permalink to &quot;shallowRef与shallowReactive&quot;">​</a></h3><p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2Fapi%2Freactivity-advanced.html%23shallowref" title="https://cn.vuejs.org/api/reactivity-advanced.html#shallowref" target="_blank" rel="noreferrer">shallowRef</a> 是 <code>ref()</code>的<strong>浅层作用形式</strong>。说白了就是把对象的第一层数据变成响应式的，深层的数据不会变成响应式的。</p><p><code>shallowRef</code> 如果用来定义<strong>原始数据类型</strong>，那么它和 <code>ref</code> 是等同的。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;div&gt;{{person}}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;button @click=&quot;update1&quot;&gt;按钮一&lt;/button&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;button @click=&quot;update2&quot;&gt;按钮二&lt;/button&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#babed8;">import { shallowRef, shallowReactive } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#babed8;">export default {</span></span>
<span class="line"><span style="color:#babed8;">  setup() {</span></span>
<span class="line"><span style="color:#babed8;">    const person = shallowRef({</span></span>
<span class="line"><span style="color:#babed8;">      name: &#39;橙某人&#39;,</span></span>
<span class="line"><span style="color:#babed8;">    });</span></span>
<span class="line"><span style="color:#babed8;">    </span></span>
<span class="line"><span style="color:#babed8;">    function update1() {</span></span>
<span class="line"><span style="color:#babed8;">      person.value.name = &#39;YDYDYDQ&#39;;</span></span>
<span class="line"><span style="color:#babed8;">      console.log(person.value); // {name: &#39;YDYDYDQ&#39;}</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    function update2() {</span></span>
<span class="line"><span style="color:#babed8;">      person.value = {</span></span>
<span class="line"><span style="color:#babed8;">        name: &#39;ydydydq&#39;</span></span>
<span class="line"><span style="color:#babed8;">      };</span></span>
<span class="line"><span style="color:#babed8;">      console.log(person.value); // {name: &#39;ydydydq&#39;}</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    return { person, update1, update2 };</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>点击按钮一：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5239eef986784c289ea9bb2ea09f0416~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="image.png"></p><p>点击按钮二：</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/95c0d6eda09c4ead9f26274bb211672f~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="image.png"></p><p>你会发现点击 &quot;按钮一&quot; 数据虽然更改了，但是视图却没有更新，这就是 <code>shallowRef</code> 的作用。</p><p>而 <a href="https://link.juejin.cn/?target=url" title="url" target="_blank" rel="noreferrer">shallowReactive</a> 与 <code>shallowRef</code> 类似，就不多说了。</p><blockquote><p><code>shallowRef()</code> 的作用常常用于对大型数据结构的性能优化或是与外部的状态管理系统集成。</p></blockquote><h3 id="triggerref" tabindex="-1">triggerRef <a class="header-anchor" href="#triggerref" aria-label="Permalink to &quot;triggerRef&quot;">​</a></h3><p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2Fapi%2Freactivity-advanced.html%23triggerref" title="https://cn.vuejs.org/api/reactivity-advanced.html#triggerref" target="_blank" rel="noreferrer">triggerRef</a> 用于强制触发依赖于一个<a href="https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2Fapi%2Freactivity-advanced.html%23shallowref" title="https://cn.vuejs.org/api/reactivity-advanced.html#shallowref" target="_blank" rel="noreferrer">浅层 ref</a>的副作用，这通常在对浅引用的内部值进行深度变更后使用。说人话就是替 <code>shallowRef</code> 去更新视图。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;div&gt;{{person}}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;button @click=&quot;update1&quot;&gt;按钮一&lt;/button&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;button @click=&quot;update2&quot;&gt;按钮二&lt;/button&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#babed8;">import { shallowRef, triggerRef } from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#babed8;">export default {</span></span>
<span class="line"><span style="color:#babed8;">  setup() {</span></span>
<span class="line"><span style="color:#babed8;">    const person = shallowRef({</span></span>
<span class="line"><span style="color:#babed8;">       name: &#39;橙某人&#39;</span></span>
<span class="line"><span style="color:#babed8;">    });</span></span>
<span class="line"><span style="color:#babed8;">    function update1() {</span></span>
<span class="line"><span style="color:#babed8;">      person.value.name = &#39;YDYDYDQ&#39;;</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">    function update2() {</span></span>
<span class="line"><span style="color:#babed8;">      triggerRef(person)</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">    return { person, update1, update2 }</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/403450d41f1641f5916e0b06eeb0744c~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="9.gif"></p><p>你是否在想有 <code>triggerRef</code> 那应该就有 <code>triggerReactive</code> 吧？还真没有。</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f041a8e177b14946a5b79c3d14163659~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="273DDC3C.gif"></p><h3 id="customref" tabindex="-1">customRef <a class="header-anchor" href="#customref" aria-label="Permalink to &quot;customRef&quot;">​</a></h3><p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2Fapi%2Freactivity-advanced.html%23customref" title="https://cn.vuejs.org/api/reactivity-advanced.html#customref" target="_blank" rel="noreferrer">customRef</a> 用于创建一个自定义的 <code>ref</code>，显式声明对其依赖追踪和更新触发的控制方式。</p><p>可能前半句你看懂了，但后半句直接就懵逼了吧(-.-)。没事，概念这种东西也不是非记住不可，只要知道有那么一回事（可以自定义一个 <code>ref</code>）就可以啦(✪ω✪)。</p><p>来看看它具体是如何使用的：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#babed8;"> &lt;div&gt;姓名：{{ name }}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;"> &lt;button @click=&quot;update&quot;&gt;按钮&lt;/button&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#babed8;">import { customRef } from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">export default {</span></span>
<span class="line"><span style="color:#babed8;">  setup() {</span></span>
<span class="line"><span style="color:#babed8;">    function myRef(value) {</span></span>
<span class="line"><span style="color:#babed8;">      return customRef((track, trigger) =&gt; ({</span></span>
<span class="line"><span style="color:#babed8;">        get() {</span></span>
<span class="line"><span style="color:#babed8;">          track();</span></span>
<span class="line"><span style="color:#babed8;">          return value;</span></span>
<span class="line"><span style="color:#babed8;">        },</span></span>
<span class="line"><span style="color:#babed8;">        set(newVal) {</span></span>
<span class="line"><span style="color:#babed8;">          value = newVal;</span></span>
<span class="line"><span style="color:#babed8;">          trigger();</span></span>
<span class="line"><span style="color:#babed8;">        }</span></span>
<span class="line"><span style="color:#babed8;">      }))</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">    </span></span>
<span class="line"><span style="color:#babed8;">    const name = myRef(&#39;橙某人&#39;);</span></span>
<span class="line"><span style="color:#babed8;">    function update() { </span></span>
<span class="line"><span style="color:#babed8;">      name.value = &#39;YDYDYDQ&#39;;</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">    return { name, update };</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p>上面的例子中，<code>myRef()</code> 方法的效果就等同于 <code>Vue</code> 里面的 <code>ref</code>。而其中的关键代码应该是 <code>track()</code> 与 <code>trigger()</code> 方法了，可惜在 <a href="https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2Fapi%2Freactivity-advanced.html%23customref" title="https://cn.vuejs.org/api/reactivity-advanced.html#customref" target="_blank" rel="noreferrer">文档</a> 中只有寥寥数语的介绍。</p><blockquote><p>一般来说，<code>track()</code>应该在<code>get()</code>方法中调用，而<code>trigger()</code>应该在<code>set()</code>中调用。然而事实上，你对何时调用、是否应该调用他们有完全的控制权。</p></blockquote><p>不过，问题不大，猜，我们都能大概猜出，执行这两个方法是要干些什么事情了(＾ω＾) 。</p><ul><li><code>track()</code>：<strong>跟踪数据</strong>，收集数据被使用的情况(依赖)，后续数据被更改了才知道去更新哪里的视图。</li><li><code>trigger()</code>：<strong>更新视图</strong>，当数据被更改了，需要手动通知 <code>Vue</code> 去更新视图。</li></ul><h3 id="shallowreadonly" tabindex="-1">shallowReadonly <a class="header-anchor" href="#shallowreadonly" aria-label="Permalink to &quot;shallowReadonly&quot;">​</a></h3><p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2Fapi%2Freactivity-advanced.html%23shallowreadonly" title="https://cn.vuejs.org/api/reactivity-advanced.html#shallowreadonly" target="_blank" rel="noreferrer">shallowReadonly</a> 是 <a href="https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2Fapi%2Freactivity-core.html%23readonly" title="https://cn.vuejs.org/api/reactivity-core.html#readonly" target="_blank" rel="noreferrer">readonly</a>的浅层作用形式。</p><p>这个API很简单，我们直接看个例子就算了。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#babed8;"> &lt;button @click=&quot;update&quot;&gt;按钮&lt;/button&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#babed8;">import { shallowReadonly } from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">export default {</span></span>
<span class="line"><span style="color:#babed8;">  setup() {</span></span>
<span class="line"><span style="color:#babed8;">    const person = shallowReadonly({</span></span>
<span class="line"><span style="color:#babed8;">      name: &#39;橙某人&#39;,</span></span>
<span class="line"><span style="color:#babed8;">      other: {</span></span>
<span class="line"><span style="color:#babed8;">        age: 18</span></span>
<span class="line"><span style="color:#babed8;">      },</span></span>
<span class="line"><span style="color:#babed8;">      arr: [1, 2, 3]</span></span>
<span class="line"><span style="color:#babed8;">    })</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    function update() {</span></span>
<span class="line"><span style="color:#babed8;">      person.name = &#39;YDYDYDQ&#39;;</span></span>
<span class="line"><span style="color:#babed8;">      person.other.age = 20;</span></span>
<span class="line"><span style="color:#babed8;">      person.arr = [];</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">      console.log(person); // { name: &#39;YDYDYDQ&#39;, other: { age: 20 }, arr: [1, 2, 3] }</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    return { update }</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p>需要注意的是，<code>Vue</code> 并不希望我们把它用在嵌套的响应式对象中。</p><blockquote><p>谨慎使用</p><p>浅层数据结构应该只用于组件中的根级状态。请避免将其嵌套在深层次的响应式对象中，因为它创建的树具有不一致的响应行为，这可能很难理解和调试。</p></blockquote><h3 id="toraw" tabindex="-1">toRaw <a class="header-anchor" href="#toraw" aria-label="Permalink to &quot;toRaw&quot;">​</a></h3><p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2Fapi%2Freactivity-advanced.html%23toraw" title="https://cn.vuejs.org/api/reactivity-advanced.html#toraw" target="_blank" rel="noreferrer">toRaw</a> 根据一个 <code>Vue</code> 创建的代理返回其原始对象。</p><p><code>toRaw()</code>可以返回由<code>reactive()</code>、<code>readonly()</code>、<code>shallowReactive()</code>或者<code>shallowReadonly()</code>创建的代理对应的原始对象。</p><p>以上是官方文档的解释，看着有点懵，我们直接来看个例子：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;div&gt;{{ reactivePerson }}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;div&gt;{{ toRawPerson }}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;button @click=&quot;update&quot;&gt;按钮&lt;/button&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#babed8;">import { reactive, toRaw } from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">export default {</span></span>
<span class="line"><span style="color:#babed8;">  setup() {</span></span>
<span class="line"><span style="color:#babed8;">    const person = { name: &#39;橙某人&#39;, age: 18 };</span></span>
<span class="line"><span style="color:#babed8;">    const reactivePerson = reactive(person);</span></span>
<span class="line"><span style="color:#babed8;">    const toRawPerson =  toRaw(reactivePerson);</span></span>
<span class="line"><span style="color:#babed8;">    </span></span>
<span class="line"><span style="color:#babed8;">    console.log(person === toRawPerson); // true</span></span>
<span class="line"><span style="color:#babed8;">    </span></span>
<span class="line"><span style="color:#babed8;">    function update() {</span></span>
<span class="line"><span style="color:#babed8;">      toRawPerson.name = &#39;YDYDYDQ&#39;;</span></span>
<span class="line"><span style="color:#babed8;">      console.log(person, reactivePerson, toRawPerson);</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    return { reactivePerson, toRawPerson, update };</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>点击按钮后，可以发现数据被更改了，但是视图并没有更新。</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/790148db3a6f4cb6a6d022ba417be3c8~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="image.png"></p><p>这就是 <code>toRaw</code> 想要表达的一个作用。</p><p>因为平常我们修改 <code>ref</code> 或 <code>reactive</code> 等的数据，每次都会自动同步去更新视图，这在某些场景下是对性能的损耗。有时，我们单纯只希望修改数据而已，并不希望视图同样也跟着去更新，这个时候你就可以使用 <code>toRaw</code> 方法拿到它的原生数据，对原生数据进行修改，这个操作过程数据不会被追踪，不会去更新视图，这对性能有一定的优化作用。</p><h3 id="markraw" tabindex="-1">markRaw <a class="header-anchor" href="#markraw" aria-label="Permalink to &quot;markRaw&quot;">​</a></h3><p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2Fapi%2Freactivity-advanced.html%23markraw" title="https://cn.vuejs.org/api/reactivity-advanced.html#markraw" target="_blank" rel="noreferrer">markRaw</a> 将一个对象标记为不可被转为代理。返回该对象本身。</p><p>说人话就是标记一个对象，使其永远不会再成为响应式对象。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;div&gt;{{ reactivePerson }}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;button @click=&quot;update&quot;&gt;按钮&lt;/button&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#babed8;">import { markRaw, reactive } from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#babed8;">export default {</span></span>
<span class="line"><span style="color:#babed8;">  setup() {</span></span>
<span class="line"><span style="color:#babed8;">    let person = { name: &#39;橙某人&#39; };</span></span>
<span class="line"><span style="color:#babed8;">    person = markRaw(person);</span></span>
<span class="line"><span style="color:#babed8;">    const reactivePerson = reactive(person);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    function update() {</span></span>
<span class="line"><span style="color:#babed8;">      reactivePerson.name = &#39;YDYDYDQ&#39;; // 视图不会更新</span></span>
<span class="line"><span style="color:#babed8;">      console.log(reactivePerson);</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    return { reactivePerson, update }</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d925f22b620548f893860ae32b52d81b~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="image.png"></p><p>它和 <code>toRaw</code> 相似，但也不全一样，可不要搞混了哦。</p><h2 id="十三、多根性质-fragment" tabindex="-1">十三、多根性质-Fragment <a class="header-anchor" href="#十三、多根性质-fragment" aria-label="Permalink to &quot;十三、多根性质-Fragment&quot;">​</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;!-- Vue2这么写会报错 --&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;div&gt;昵称: &lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;div&gt;年龄: &lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;div&gt;性别：&lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>相信应该有小伙伴在 <code>Vue2</code> 中会遇到这么一个报错：</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e741154c4ec545e680abe602f02bb143~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="image.png"></p><p>这报错提示大概的意思是说组件只能有<strong>一个根节点</strong>，很多时候我们都会手动包裹一个 <code>div</code> 作为根节点。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;div&gt;昵称: &lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;div&gt;年龄: &lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;div&gt;性别：&lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>虽然这可能不是一个多大的问题，但这并不友好，大多数情况下我们可能并不需要这个根节点。</p><blockquote><p><code>Vue2</code> 为什么不引入 <code>Fragments</code> ？</p><p><code>Vue2</code> 限制组件只能有一个根节点， 主要原因是虚拟 DOM <strong>Diff 算法</strong>依赖于具有单个根的组件，如果允许 <code>Fragments</code> 需要对该算法进行重大更改，不仅要使其正常工作，而且必须使其具有高性能，这是一项非常艰巨的任务。</p></blockquote><p><code>Vue3</code> 中解决了这个问题，它新增了一个类似 <code>DOM</code> 的标签元素 <code>&lt;Fragment /&gt;</code>。如果在组件中出现多元素节点，那么在编译时 <code>Vue</code> 会自动为这些元素节点包裹一个<code>&lt;Fragment /&gt;</code> 标签，并且<strong>该标签不会出现在 <code>DOM</code> 树中</strong>。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;!-- Vue3允许这么写 --&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;div&gt;昵称: &lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;div&gt;年龄: &lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;div&gt;性别：&lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><blockquote><p><code>Vue2</code> 中可以使用 <a href="https://link.juejin.cn/?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fvue-fragments" title="https://www.npmjs.com/package/vue-fragments" target="_blank" rel="noreferrer">vue-fragments</a> 库来实现 <code>&lt;Fragment /&gt;</code>。</p></blockquote><h2 id="十四、teleport-传送组件" tabindex="-1">十四、Teleport-传送组件 <a class="header-anchor" href="#十四、teleport-传送组件" aria-label="Permalink to &quot;十四、Teleport-传送组件&quot;">​</a></h2><p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2Fapi%2Fbuilt-in-components.html%23teleport" title="https://cn.vuejs.org/api/built-in-components.html#teleport" target="_blank" rel="noreferrer">Teleport</a> 是 <code>Vue3</code> 新增的一个内置组件，它能将其插槽内容渲染到 <code>DOM</code> 中的另一个位置。因为它的性质，我们也常常称呼它为瞬移组件、传送组件、传送门等等。</p><p>我们举个栗子来说明(✪ω✪)：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;div id=&quot;box&quot;&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;p&gt;id选择器&lt;/p&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;div class=&quot;box&quot;&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;p&gt;class选择器&lt;/p&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;div data-box&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;p&gt;class选择器&lt;/p&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;!--teleport--&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;teleport :to=&quot;target&quot;&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;h2&gt;橙某人&lt;/h2&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;/teleport&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;button @click=&quot;update(&#39;body&#39;)&quot;&gt;传送到body中&lt;/button&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;button @click=&quot;update(&#39;#box&#39;)&quot;&gt;传送到id选择器中&lt;/button&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;button @click=&quot;update(&#39;.box&#39;)&quot;&gt;传送到class选择器中&lt;/button&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;button @click=&quot;update(&#39;[data-box]&#39;)&quot;&gt;传送到属性选择器中&lt;/button&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#babed8;">import { ref } from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#babed8;">export default {</span></span>
<span class="line"><span style="color:#babed8;">  setup() {</span></span>
<span class="line"><span style="color:#babed8;">    const target = ref(&#39;#app&#39;); // 初始化渲染的位置</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    function update(selector) {</span></span>
<span class="line"><span style="color:#babed8;">      target.value = selector;</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    return { target, update }</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6c89f948543d4b6a96e01ed5cf0dd068~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="6.gif"></p><p>通过上面的例子，可以看到使用 <code>teleport</code> 的 <code>to</code> 属性，我们可以很方便、随意的控制其插槽内容渲染的位置，<code>to</code> 属性可以接收各种 <strong>选择器或实际元素</strong>。</p><blockquote><p><strong><code>&lt;teleport /&gt;</code>挂载时，传送的<code>to</code>目标必须已经存在于 <code>DOM</code> 中</strong>。理想情况下，这应该是整个 <code>Vue</code> 应用 <code>DOM</code> 树外部的一个元素。如果目标元素也是由 <code>Vue</code> 渲染的，你需要确保在挂载<code>&lt;Teleport&gt;</code>之前先挂载该元素。</p></blockquote><p>借用 <code>teleport</code> 组件的这种性质，现在就能很容易解决 <code>Vue2</code> 中组件内部嵌套 <code>Modal</code> 或 <code>Toast</code> 组件的定位、 <code>z-index</code> 层级的问题了。</p><h3 id="禁用-teleport" tabindex="-1">禁用 Teleport <a class="header-anchor" href="#禁用-teleport" aria-label="Permalink to &quot;禁用 Teleport&quot;">​</a></h3><p><code>&lt;teleport /&gt;</code> 标签一共接收两个属性，除了 <code>to</code> 属性，还有一个 <code>disabled</code> 属性，顾名思义，用于禁用功能的。</p><p>还是上面的例子，我们给它添加 <code>disabled</code> 属性：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#babed8;">  ...</span></span>
<span class="line"><span style="color:#babed8;">  &lt;!--teleport--&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;teleport :to=&quot;target&quot; :disabled=&quot;true&quot;&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;h2&gt;橙某人&lt;/h2&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;/teleport&gt;</span></span>
<span class="line"><span style="color:#babed8;">  ...</span></span>
<span class="line"><span style="color:#babed8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/79dcb6aa6fa04562b3b4b257bf1f2867~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="image.png"></p><p>可以发现，<code>&lt;teleport /&gt;</code> 会直接就渲染插槽的内容，并且点击任何按钮的切换是没有效果的，也就是相当于 <code>to</code> 属性完全不生效了。</p><h2 id="十五、suspense组件" tabindex="-1">十五、Suspense组件 <a class="header-anchor" href="#十五、suspense组件" aria-label="Permalink to &quot;十五、Suspense组件&quot;">​</a></h2><p><code>Vue3</code> 内置组件一共增加了两个，除了 <code>&lt;teleport /&gt;</code> 组件，另一个就是 <code>&lt;suspense /&gt;</code> 组件了。</p><p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2Fapi%2Fbuilt-in-components.html%23suspense" title="https://cn.vuejs.org/api/built-in-components.html#suspense" target="_blank" rel="noreferrer">Suspense</a> 它用于协调对组件树中嵌套的异步依赖的处理。看定义应该有点懵，我们还是一样，实践出真理，举个栗子先。</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1189505300234382bb6f0a73c9fb8258~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="1539F504.gif"></p><blockquote><p>当然，官网说这还是一个实验性功能！！！</p><p><code>&lt;Suspense&gt;</code>是一项实验性功能，它不一定会最终成为稳定功能，并且在稳定之前相关 API 也可能会发生变化。</p></blockquote><p>新建 <code>AsyncCom.vue</code> 组件：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;h1&gt;我是一个异步组件&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#babed8;">export default {</span></span>
<span class="line"><span style="color:#babed8;">  async setup() {</span></span>
<span class="line"><span style="color:#babed8;">    const res = new Promise((resolve) =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">      setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">        resolve();</span></span>
<span class="line"><span style="color:#babed8;">      }, 3000);</span></span>
<span class="line"><span style="color:#babed8;">    });</span></span>
<span class="line"><span style="color:#babed8;">    return await res;</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>在 <code>App.vue</code> 中使用：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;h1&gt;Suspense&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;Suspense&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;template v-slot:default&gt;</span></span>
<span class="line"><span style="color:#babed8;">      &lt;AsyncCom /&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;/template&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;template v-slot:fallback&gt;</span></span>
<span class="line"><span style="color:#babed8;">      &lt;h3&gt;Loading...&lt;/h3&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;/template&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;/Suspense&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#babed8;">import { defineAsyncComponent } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#babed8;">const AsyncCom = defineAsyncComponent(() =&gt; import(&#39;./AsyncCom.vue&#39;));</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">export default {</span></span>
<span class="line"><span style="color:#babed8;">  components: { AsyncCom }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c111d3dd4db54225aa9f889f30021511~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="65.gif"></p><p><code>&lt;Suspense /&gt;</code> 组件实际上是一个提升用户友好度的组件，当如果你在渲染时遇到异步依赖项 (<a href="https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2Fguide%2Fcomponents%2Fasync.html" title="https://cn.vuejs.org/guide/components/async.html" target="_blank" rel="noreferrer">异步组件</a>或者具有<a href="https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2Fguide%2Fbuilt-ins%2Fsuspense.html%23async-setup" title="https://cn.vuejs.org/guide/built-ins/suspense.html#async-setup" target="_blank" rel="noreferrer"><code>async setup()</code></a>的组件)，它将等到所有异步依赖项解析完成时再显示默认插槽。</p><blockquote><p>可以先详细看看下面的异步组件内容，再回过头来看 <code>&lt;Suspense /&gt;</code> 组件，会有更好的理解。</p></blockquote><h2 id="十六、异步组件" tabindex="-1">十六、异步组件 <a class="header-anchor" href="#十六、异步组件" aria-label="Permalink to &quot;十六、异步组件&quot;">​</a></h2><p>在大型应用中，我们可能需要将应用分割成小一些的代码块，并且只在需要的时候才从服务器加载一个模块。为了简化，<code>Vue</code> 允许你以一个工厂函数的方式定义你的组件，这个工厂函数会异步解析你的组件定义。<code>Vue</code> 只有在这个组件需要被渲染的时候才会触发该工厂函数，且会把结果缓存起来供未来重渲染。</p><p>这是 <code>Vue2</code> 中对于异步组件的定义介绍，看了这个定义可能你和一样懵，那么我们就先来看看如何定义、使用一个异步组件。</p><p>我们先在 <code>main.js</code> 中定义异步组件：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">import Vue from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#babed8;">import App from &#39;./App.vue&#39;;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 定义一个异步组件</span></span>
<span class="line"><span style="color:#babed8;">Vue.component(&#39;first-async-com&#39;, (resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">  setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">    const comConfig = {</span></span>
<span class="line"><span style="color:#babed8;">      render: h =&gt; h(&#39;p&#39;, &#39;我是第一个异步组件，我五秒后才加载！！！&#39;)</span></span>
<span class="line"><span style="color:#babed8;">    };</span></span>
<span class="line"><span style="color:#babed8;">    resolve(comConfig);</span></span>
<span class="line"><span style="color:#babed8;">  }, 5000)</span></span>
<span class="line"><span style="color:#babed8;">});</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">Vue.config.productionTip = false;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">new Vue({</span></span>
<span class="line"><span style="color:#babed8;">  render: h =&gt; h(App)</span></span>
<span class="line"><span style="color:#babed8;">}).$mount(&#39;#app&#39;);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>然后在 <code>App.vue</code> 中使用：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;h1&gt;异步组件&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;first-async-com /&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8c1ddbd323244e2cb6e06411bb70da4d~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="7.gif"></p><p>从效果图中可以看到，我们的异步组件会在五秒后才被挂载到 <code>DOM</code> 树上，这对页面性能来说是一个非常好的优化。当然，我们也可以把 <code>comConfig</code> 单独写在一个文件中，丢到服务器上，再通过请求去获取，这也是一个优化项目体积的手段。</p><p>总得来说，异步组件的作用是对于性能的优化。</p><blockquote><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/210545a7e88a4dfe875ff26188264957~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="image.png"></p><p>如果你注册子组件模板想使用 <code>template</code> 配置项，那么你可能会遇到上方的报错。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">Vue.component(&#39;first-async-com&#39;, (resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">  setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">    const comConfig = {</span></span>
<span class="line"><span style="color:#babed8;">      template: &#39;&lt;p&gt;我是第一个异步组件，我五秒后才加载！！！&lt;/p&gt;&#39;, // 报错</span></span>
<span class="line"><span style="color:#babed8;">    };</span></span>
<span class="line"><span style="color:#babed8;">    resolve(comConfig);</span></span>
<span class="line"><span style="color:#babed8;">  }, 1000)</span></span>
<span class="line"><span style="color:#babed8;">});</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>这是因为 <code>Vue</code> 有两种形式的代码 <code>compiler</code> 模式和 <code>runtime</code> 模式，<code>Vue</code> 模块的 <code>package.json</code> 的 <code>main</code> 字段默认为 <code>runtime</code> 模式，指向了 <code>dist/vue.runtime.common.js</code> 位置。</p><p>解决方式：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">import Vue from &#39;vue/dist/vue.js&#39;;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">new Vue({</span></span>
<span class="line"><span style="color:#babed8;">  el: &#39;#app&#39;,</span></span>
<span class="line"><span style="color:#babed8;">  template: &#39;&lt;App/&gt;&#39;,</span></span>
<span class="line"><span style="color:#babed8;">  components: { App },</span></span>
<span class="line"><span style="color:#babed8;">})</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>我们重新引入 <code>Vue</code> 的 <code>compiler</code> 模式的包，再修改一下 <code>Vue</code> 初始化的形式，那么子组件的注册即可使用 <code>template</code> 配置项了。</p></blockquote><h3 id="配合webpack实现异步组件" tabindex="-1">配合webpack实现异步组件 <a class="header-anchor" href="#配合webpack实现异步组件" aria-label="Permalink to &quot;配合webpack实现异步组件&quot;">​</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">Vue.component(&#39;async-webpack-example&#39;, (resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">  // webpack会内置实现 require() 方法</span></span>
<span class="line"><span style="color:#babed8;"> require([&#39;@/components/my-async-component&#39;], resolve)</span></span>
<span class="line"><span style="color:#babed8;">})</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>上面这个例子是 <a href="https://link.juejin.cn/?target=https%3A%2F%2Fv2.cn.vuejs.org%2Fv2%2Fguide%2Fcomponents-dynamic-async.html" title="https://v2.cn.vuejs.org/v2/guide/components-dynamic-async.html" target="_blank" rel="noreferrer">官方</a> 介绍的另一种结合 <code>webpack</code> 实现异步组件的方式。</p><p>通过这个特殊的 <code>require</code> 语法将会告诉 <code>webpack</code> 自动将你的构建代码切割成多个包，这些包会通过 <code>Ajax</code> 请求加载。</p><h3 id="局部注册异步组件" tabindex="-1">局部注册异步组件 <a class="header-anchor" href="#局部注册异步组件" aria-label="Permalink to &quot;局部注册异步组件&quot;">​</a></h3><p>前面我们介绍的是全局注册异步组件，接下来就看看如何在局部中注册异步组件。</p><p>先创建一个新组件：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;div&gt;我是第二个异步组件&lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>在 <code>App.vue</code> 中局部注册异步组件：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;div&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;second-async-com /&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#babed8;">export default{</span></span>
<span class="line"><span style="color:#babed8;">  components: {</span></span>
<span class="line"><span style="color:#babed8;">    &#39;SecondAsyncCom&#39;: () =&gt; import(&#39;@/components/SecondAsyncCom.vue&#39;)</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/430bedf26bce4d59abab2d9714954f09~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="image.png"></p><p>从上图中，可以看到该组件会被单独异步加载获取。</p><p>这是借用 <code>import()</code> 语法来实现的导入，你也可以直接提供一个返回<code>Promise</code>的函数，例如：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#babed8;">export default {</span></span>
<span class="line"><span style="color:#babed8;">  components: {</span></span>
<span class="line"><span style="color:#babed8;">    &#39;SecondAsyncCom&#39;: () =&gt; new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">      setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">        resolve({</span></span>
<span class="line"><span style="color:#babed8;">          template: &#39;&lt;div&gt;我是第二个异步组件&lt;/div&gt;&#39;</span></span>
<span class="line"><span style="color:#babed8;">        })</span></span>
<span class="line"><span style="color:#babed8;">      }, 1000)</span></span>
<span class="line"><span style="color:#babed8;">    })</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>最后，我们把例子改成同步的形式来进行对比：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#babed8;">import SecondAsyncCom from &#39;@/components/SecondAsyncCom.vue&#39;;</span></span>
<span class="line"><span style="color:#babed8;">export default {</span></span>
<span class="line"><span style="color:#babed8;">  components: {</span></span>
<span class="line"><span style="color:#babed8;">    SecondAsyncCom</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7a90d07b100543588b3e19932e6207b7~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="image.png"></p><p>可以发现同步形式并没有单独加载组件，它会被打包到一起，并同步加载、顺序渲染。</p><h3 id="vue3的异步组件" tabindex="-1">Vue3的异步组件 <a class="header-anchor" href="#vue3的异步组件" aria-label="Permalink to &quot;Vue3的异步组件&quot;">​</a></h3><p>上面罗里吧嗦回顾了一下 <code>Vue2</code> 异步组件的内容，那么 <code>Vue3</code> 中的异步组件又是如何的呢？</p><p>整体来说，没啥改变，可能更多的是在语法方面的改变而已。</p><p>我们直接来看看，在 <code>Vue3</code> 项目的 <code>App.vue</code> 文件中：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;AsyncCom /&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#babed8;">import { defineAsyncComponent } from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">export default {</span></span>
<span class="line"><span style="color:#babed8;">  components: {</span></span>
<span class="line"><span style="color:#babed8;">    &#39;AsyncCom&#39;: defineAsyncComponent(() =&gt; import(&#39;./components/AsyncCom.vue&#39;))</span></span>
<span class="line"><span style="color:#babed8;">  },</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>同样，你也可以直接提供一个返回 <code>Promise</code> 的函数即可：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">import { defineAsyncComponent } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">const AsyncComp = defineAsyncComponent(() =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">  return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">    // ...从服务器获取组件</span></span>
<span class="line"><span style="color:#babed8;">    resolve(/* 获取到的组件 */)</span></span>
<span class="line"><span style="color:#babed8;">  })</span></span>
<span class="line"><span style="color:#babed8;">})</span></span>
<span class="line"><span style="color:#babed8;">// ... 像使用其他一般组件一样使用 \`AsyncComp\`</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="十七、vue3响应式原理" tabindex="-1">十七、Vue3响应式原理 <a class="header-anchor" href="#十七、vue3响应式原理" aria-label="Permalink to &quot;十七、Vue3响应式原理&quot;">​</a></h2><p>文章字数有点多了，滚动起来总是一卡顿一卡顿的，原理这块只能单独再写一篇文章了，写完会回来补上链接。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/be58159c556048ae9bc2abfeb642561b~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="01886908.gif"></p><h2 id="十八、路由" tabindex="-1">十八、路由 <a class="header-anchor" href="#十八、路由" aria-label="Permalink to &quot;十八、路由&quot;">​</a></h2><p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fvuejs%2Frouter" title="https://github.com/vuejs/router" target="_blank" rel="noreferrer">vue-router</a> 相信使用过 <code>Vue</code> 的小伙伴都不陌生了，<code>Vue</code> 通过它来实现对路由的管理，而在 <code>Vue3</code> 中使用 <code>vue-router</code> 的版本至少需要为 <code>4.x.x</code> 以上，下面我们就来看看它的具体使用过程。</p><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">npm install vue-router@4 --save</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h3><h4 id="基础配置与使用" tabindex="-1">基础配置与使用 <a class="header-anchor" href="#基础配置与使用" aria-label="Permalink to &quot;基础配置与使用&quot;">​</a></h4><p>创建 <code>router/index.js</code> 文件：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">import { createRouter, createWebHashHistory, createWebHistory } from &#39;vue-router&#39;;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">const routes = [</span></span>
<span class="line"><span style="color:#babed8;">  { path: &#39;/&#39;, name: &#39;Main&#39;, component: ()=&gt; import(&#39;../views/main.vue&#39;)  },</span></span>
<span class="line"><span style="color:#babed8;">  { path: &#39;/login&#39;, name: &#39;login&#39;, component: ()=&gt; import(&#39;../views/login.vue&#39;)  },</span></span>
<span class="line"><span style="color:#babed8;">];</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">const router = createRouter({</span></span>
<span class="line"><span style="color:#babed8;">  history: createWebHashHistory(), // createWebHashHistory() || createWebHistory()</span></span>
<span class="line"><span style="color:#babed8;">  routes</span></span>
<span class="line"><span style="color:#babed8;">})</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">export default router;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>在 <code>main.js</code> 中引入：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">import { createApp } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#babed8;">import App from &#39;./App.vue&#39;</span></span>
<span class="line"><span style="color:#babed8;">import router from &#39;./router/index&#39;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">const app = createApp(App)</span></span>
<span class="line"><span style="color:#babed8;">app.use(router)</span></span>
<span class="line"><span style="color:#babed8;">app.mount(&#39;#app&#39;)</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>在 <code>App.vue</code> 中使用：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;router-link to=&quot;/&quot;&gt;主页&lt;/router-link&gt; | </span></span>
<span class="line"><span style="color:#babed8;">  &lt;router-link to=&quot;/login&quot;&gt;登陆页&lt;/router-link&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;router-view /&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="具体业务使用router" tabindex="-1">具体业务使用router <a class="header-anchor" href="#具体业务使用router" aria-label="Permalink to &quot;具体业务使用router&quot;">​</a></h4><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#babed8;">import { useRouter, useRoute } from &#39;vue-router&#39;;</span></span>
<span class="line"><span style="color:#babed8;">export default {</span></span>
<span class="line"><span style="color:#babed8;">  setup() {</span></span>
<span class="line"><span style="color:#babed8;">    const router = useRouter();</span></span>
<span class="line"><span style="color:#babed8;">    const route = useRoute();</span></span>
<span class="line"><span style="color:#babed8;">    // 获取路由携带的参数信息</span></span>
<span class="line"><span style="color:#babed8;">    console.log(route.query)</span></span>
<span class="line"><span style="color:#babed8;">    </span></span>
<span class="line"><span style="color:#babed8;">    // 路由跳转</span></span>
<span class="line"><span style="color:#babed8;">    function toMainPage() {</span></span>
<span class="line"><span style="color:#babed8;">      router.push({</span></span>
<span class="line"><span style="color:#babed8;">        path: &#39;/&#39;,</span></span>
<span class="line"><span style="color:#babed8;">        query: {</span></span>
<span class="line"><span style="color:#babed8;">          a: 1</span></span>
<span class="line"><span style="color:#babed8;">        }</span></span>
<span class="line"><span style="color:#babed8;">      })</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">    </span></span>
<span class="line"><span style="color:#babed8;">    return { toMainPage }</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="十九、eventbus与mitt" tabindex="-1">十九、EventBus与mitt <a class="header-anchor" href="#十九、eventbus与mitt" aria-label="Permalink to &quot;十九、EventBus与mitt&quot;">​</a></h2><p><code>Vue2</code> 中我们使用 <code>EventBus</code> 来实现跨组件之间的一些通信，它依赖于 <code>Vue</code> 自带的 <code>$on/$emit/$off</code> 等方法，这种方式使用非常简单方便，但如果使用不当也会带来难以维护的毁灭灾难。</p><p>而 <code>Vue3</code> 中移除了这些相关方法，这意味着 <code>EventBus</code> 这种方式我们使用不了， <code>Vue3</code> 推荐尽可能使用 <code>props/emits</code>、<code>provide/inject</code>、<code>vuex</code> 等其他方式来替代。</p><p>当然，如果 <code>Vue3</code> 内部的方式无法满足你，官方建议使用一些外部的辅助库，例如：<a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fdevelopit%2Fmitt" title="https://github.com/developit/mitt" target="_blank" rel="noreferrer">mitt</a>。</p><h3 id="优点" tabindex="-1">优点 <a class="header-anchor" href="#优点" aria-label="Permalink to &quot;优点&quot;">​</a></h3><ul><li>非常小，压缩后仅有 <code>200 bytes</code>。</li><li>完整 <code>TS</code> 支持，源码由 <code>TS</code> 编码。</li><li>跨框架，它并不是只能用在 <code>Vue</code> 中，<code>React</code>、<code>JQ</code> 等框架中也可以使用。</li><li>使用简单，仅有 <code>on</code>、<code>emit</code>、<code>off</code> 等少量实用API。</li></ul><h3 id="安装-1" tabindex="-1">安装 <a class="header-anchor" href="#安装-1" aria-label="Permalink to &quot;安装&quot;">​</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">npm install mitt --save</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="基本使用-1" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用-1" aria-label="Permalink to &quot;基本使用&quot;">​</a></h3><p>新建 <code>bus.js</code> 文件：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">import mitt from &#39;mitt&#39;;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">const emiter = mitt();</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">export default emiter;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>在 <code>main.vue</code> 组件中引入并监听：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#babed8;">import emitter from &#39;../utils/bus.js&#39;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">export default {</span></span>
<span class="line"><span style="color:#babed8;">  setup() {</span></span>
<span class="line"><span style="color:#babed8;">    emitter.on(&#39;EventName&#39;, res =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">      console.log(res)</span></span>
<span class="line"><span style="color:#babed8;">    });</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>在 <code>login.vue</code> 组件中引入并发送信息：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;button @click=&quot;send&quot;&gt;点击发送信息&lt;/button&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#babed8;">import { onBeforeUnmount } from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#babed8;">import emitter from &#39;../utils/bus.js&#39;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">export default {</span></span>
<span class="line"><span style="color:#babed8;">  setup() {</span></span>
<span class="line"><span style="color:#babed8;">    function send() {</span></span>
<span class="line"><span style="color:#babed8;">       emitter.emit(&#39;EventName&#39;, &#39;我发送个信息&#39;)</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">    </span></span>
<span class="line"><span style="color:#babed8;">    onBeforeUnmount(() =&gt; { </span></span>
<span class="line"><span style="color:#babed8;">        emitter.off(&#39;EventName&#39;); </span></span>
<span class="line"><span style="color:#babed8;">    });</span></span>
<span class="line"><span style="color:#babed8;">    </span></span>
<span class="line"><span style="color:#babed8;">    return { send }</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h3 id="源码" tabindex="-1">源码 <a class="header-anchor" href="#源码" aria-label="Permalink to &quot;源码&quot;">​</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">export default function mitt(all) {</span></span>
<span class="line"><span style="color:#babed8;">  all = all || new Map();</span></span>
<span class="line"><span style="color:#babed8;">  return {</span></span>
<span class="line"><span style="color:#babed8;">    all: all,</span></span>
<span class="line"><span style="color:#babed8;">    on: function (type, handler) {</span></span>
<span class="line"><span style="color:#babed8;">      var handlers = all.get(type);</span></span>
<span class="line"><span style="color:#babed8;">      if (handlers) {</span></span>
<span class="line"><span style="color:#babed8;">        handlers.push(handler);</span></span>
<span class="line"><span style="color:#babed8;">      } else {</span></span>
<span class="line"><span style="color:#babed8;">        all.set(type, [handler]);</span></span>
<span class="line"><span style="color:#babed8;">      }</span></span>
<span class="line"><span style="color:#babed8;">    },</span></span>
<span class="line"><span style="color:#babed8;">    off: function (type, handler) {</span></span>
<span class="line"><span style="color:#babed8;">      var handlers = all.get(type);</span></span>
<span class="line"><span style="color:#babed8;">      if (handlers) {</span></span>
<span class="line"><span style="color:#babed8;">        if (handler) {</span></span>
<span class="line"><span style="color:#babed8;">          handlers.splice(handlers.indexOf(handler) &gt;&gt;&gt; 0, 1); // 无符号右移运算符</span></span>
<span class="line"><span style="color:#babed8;">        } else {</span></span>
<span class="line"><span style="color:#babed8;">          all.set(type, []);</span></span>
<span class="line"><span style="color:#babed8;">        }</span></span>
<span class="line"><span style="color:#babed8;">      }</span></span>
<span class="line"><span style="color:#babed8;">    },</span></span>
<span class="line"><span style="color:#babed8;">    emit: function (type, evt) {</span></span>
<span class="line"><span style="color:#babed8;">      var handlers = all.get(type);</span></span>
<span class="line"><span style="color:#babed8;">      if (handlers) {</span></span>
<span class="line"><span style="color:#babed8;">        handlers.slice().map(function (handler) {</span></span>
<span class="line"><span style="color:#babed8;">          handler(evt);</span></span>
<span class="line"><span style="color:#babed8;">        });</span></span>
<span class="line"><span style="color:#babed8;">      }</span></span>
<span class="line"><span style="color:#babed8;">      handlers = all.get(&quot;*&quot;);</span></span>
<span class="line"><span style="color:#babed8;">      if (handlers) {</span></span>
<span class="line"><span style="color:#babed8;">        handlers.slice().map(function (handler) {</span></span>
<span class="line"><span style="color:#babed8;">          handler(type, evt);</span></span>
<span class="line"><span style="color:#babed8;">        });</span></span>
<span class="line"><span style="color:#babed8;">      }</span></span>
<span class="line"><span style="color:#babed8;">    },</span></span>
<span class="line"><span style="color:#babed8;">  };</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><p>以上是精简之后的 <code>JS</code> 核心源码，整体来说并不是很难吧(✪ω✪)，它围绕着发布订阅者模式而展开。</p><p>可能唯一让人感到陌生的代码是无符号右移运算符（<a href="https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FJavaScript%2FReference%2FOperators%2FUnsigned_right_shift" title="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift" target="_blank" rel="noreferrer">&gt;&gt;&gt;</a>），关于它的作用小伙伴们就要自行去了解啦。</p><h2 id="二十、pinia" tabindex="-1">二十、Pinia <a class="header-anchor" href="#二十、pinia" aria-label="Permalink to &quot;二十、Pinia&quot;">​</a></h2><p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fvuejs%2Fpinia" title="https://github.com/vuejs/pinia" target="_blank" rel="noreferrer">Pinia</a> 是 <code>Vue</code> 官方团队成员专门开发的一个全新状态管理库，并且 <code>Vue</code> 的官方状态管理库已经更改为了 <code>Pinia</code>。在 <a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fvuejs%2Fvuex" title="https://github.com/vuejs/vuex" target="_blank" rel="noreferrer">Vuex</a> 官方仓库中也介绍说可以把 <code>Pinia</code> 当成是不同名称的 <code>Vuex 5</code>，这也意味不会再出 <code>5</code> 版本了。</p><blockquote><p>当然，<code>Pinia</code> 可不是 <code>Vue3</code> 专属，它同样也是适用于 <code>Vue2</code> 的。</p></blockquote><p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fpinia.web3doc.top%2F" title="https://pinia.web3doc.top/" target="_blank" rel="noreferrer">中文文档</a></p><h3 id="优点-1" tabindex="-1">优点 <a class="header-anchor" href="#优点-1" aria-label="Permalink to &quot;优点&quot;">​</a></h3><ul><li>更加轻量级，压缩后提交只有<code>1.6kb</code>。</li><li>完整的 <code>TS</code> 的支持，<code>Pinia</code> 源码完全由 <code>TS</code> 编码完成。</li><li>移除 <code>mutations</code>，只剩下 <code>state</code> 、 <code>actions</code> 、 <code>getters</code> 。</li><li>没有了像 <code>Vuex</code> 那样的模块镶嵌结构，它只有 <code>store</code> 概念，并支持多个 <code>store</code>，且都是互相独立隔离的。当然，你也可以手动从一个模块中导入另一个模块，来实现模块的镶嵌结构。</li><li>无需手动添加每个 <code>store</code>，它的模块默认情况下创建就自动注册。</li><li>支持服务端渲染（<code>SSR</code>）。</li><li>支持 <code>Vue DevTools</code>。</li><li>更友好的代码分割机制，<a href="https://juejin.cn/post/7057439040911441957#heading-2" title="https://juejin.cn/post/7057439040911441957#heading-2" target="_blank" rel="noreferrer">传送门</a>。</li></ul><h3 id="安装-2" tabindex="-1">安装 <a class="header-anchor" href="#安装-2" aria-label="Permalink to &quot;安装&quot;">​</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">npm install pinia --save</span></span>
<span class="line"><span style="color:#babed8;">// or</span></span>
<span class="line"><span style="color:#babed8;">npm i pinia -S</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="基本使用-2" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用-2" aria-label="Permalink to &quot;基本使用&quot;">​</a></h3><h4 id="初始化并挂载pinia" tabindex="-1">初始化并挂载Pinia <a class="header-anchor" href="#初始化并挂载pinia" aria-label="Permalink to &quot;初始化并挂载Pinia&quot;">​</a></h4><p>我们还是根据老传统，在<code>src</code> 文件夹下，新建 <code>store/index.js</code> 文件：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">import { createPinia } from &#39;pinia&#39;;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">const pinia = createPinia();</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">export default pinia;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>在 <code>main.js</code> 文件中进行全局挂载：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">import { createApp } from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#babed8;">import App from &#39;./App.vue&#39;;</span></span>
<span class="line"><span style="color:#babed8;">import pinia from &#39;./store&#39;;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">const app = createApp(App);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">app.use(pinia);</span></span>
<span class="line"><span style="color:#babed8;">app.mount(&#39;#app&#39;);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h4 id="创建store" tabindex="-1">创建store <a class="header-anchor" href="#创建store" aria-label="Permalink to &quot;创建store&quot;">​</a></h4><p>完成 <code>Pinia</code> 的初始化后，就可以来定义 <code>store</code> 进入具体使用了，而定义 <code>store</code> 一共有三种不同形式的写法，下面我们一一列举。</p><p>创建 <code>src/store/modules/user.js</code> 文件：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">import { defineStore } from &#39;pinia&#39;;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// options API模式</span></span>
<span class="line"><span style="color:#babed8;">export const usePersonStore = defineStore(&#39;person&#39;, {</span></span>
<span class="line"><span style="color:#babed8;">  state: () =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">    return {</span></span>
<span class="line"><span style="color:#babed8;">      name: &#39;人类&#39;</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">  },</span></span>
<span class="line"><span style="color:#babed8;">  actions: {</span></span>
<span class="line"><span style="color:#babed8;">    updateName(newName) {</span></span>
<span class="line"><span style="color:#babed8;">      this.name = newName;</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">  },</span></span>
<span class="line"><span style="color:#babed8;">  getters: { // getters基本与Vue的计算属性一致</span></span>
<span class="line"><span style="color:#babed8;">    getFullName() {</span></span>
<span class="line"><span style="color:#babed8;">      return &#39;Full&#39; + this.name;</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">})</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 对象形式</span></span>
<span class="line"><span style="color:#babed8;">export const useTeacherStore = defineStore({</span></span>
<span class="line"><span style="color:#babed8;">  id: &#39;teacher&#39;,</span></span>
<span class="line"><span style="color:#babed8;">  state: () =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">    return {</span></span>
<span class="line"><span style="color:#babed8;">      name: &#39;老师&#39;</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">  },</span></span>
<span class="line"><span style="color:#babed8;">  actions: {</span></span>
<span class="line"><span style="color:#babed8;">    updateName(newName) {</span></span>
<span class="line"><span style="color:#babed8;">      this.name = newName;</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">  },</span></span>
<span class="line"><span style="color:#babed8;">  getters: {</span></span>
<span class="line"><span style="color:#babed8;">    getFullName() {</span></span>
<span class="line"><span style="color:#babed8;">      return &#39;Full&#39; + this.name;</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">})</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// setup模式</span></span>
<span class="line"><span style="color:#babed8;">import { computed, ref } from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#babed8;">export const useStudentStore = defineStore(&#39;student&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">  const name = ref(&#39;学生&#39;);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  function updateName(newName) {</span></span>
<span class="line"><span style="color:#babed8;">    name.value = newName;</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  const getFullName = computed(() =&gt; &#39;Full&#39; + name.value);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  return { name, updateName, getFullName }</span></span>
<span class="line"><span style="color:#babed8;">})</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br></div></div><p>上面例子中，我们列举了同个 <code>DEMO</code> 不同的三种写法，它们效果都一样，第一和第二种类似，比较简单；第三种适合 <code>Vue3</code> 的 <code>script setup</code> 的形式。</p><p>需要我们注意的是其中的 <code>id</code> 是必填且需要唯一的。</p><h4 id="具体业务使用store" tabindex="-1">具体业务使用store <a class="header-anchor" href="#具体业务使用store" aria-label="Permalink to &quot;具体业务使用store&quot;">​</a></h4><p>在 <code>App.vue</code> 中使用：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;h1&gt;Pinia&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;div&gt;state: {{personStore.name}} ****** getter: {{personStore.getFullName}}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;div&gt;state: {{studentStore.name}} ****** getter: {{studentStore.getFullName}}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;div&gt;state: {{teacherStore.name}} ****** getter: {{teacherStore.getFullName}}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;button @click=&quot;updateName&quot;&gt;点击&lt;/button&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#babed8;">import { usePersonStore, useStudentStore, useTeacherStore } from &#39;@/store/modules/user.js&#39;;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">export default {</span></span>
<span class="line"><span style="color:#babed8;">  setup() {</span></span>
<span class="line"><span style="color:#babed8;">    const personStore = usePersonStore();</span></span>
<span class="line"><span style="color:#babed8;">    const studentStore = useStudentStore();</span></span>
<span class="line"><span style="color:#babed8;">    const teacherStore = useTeacherStore();</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    function updateName() {</span></span>
<span class="line"><span style="color:#babed8;">      personStore.updateName(&#39;人类-updated&#39;)</span></span>
<span class="line"><span style="color:#babed8;">      studentStore.updateName(&#39;学生-updated&#39;)</span></span>
<span class="line"><span style="color:#babed8;">      teacherStore.updateName(&#39;老师-updated&#39;)</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    return {</span></span>
<span class="line"><span style="color:#babed8;">      personStore,</span></span>
<span class="line"><span style="color:#babed8;">      studentStore,</span></span>
<span class="line"><span style="color:#babed8;">      teacherStore,</span></span>
<span class="line"><span style="color:#babed8;">      updateName</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/479a1bfa9ee745b1b0ed394f6a4f9ff9~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="9.gif"></p><p>上面我们通过 <code>actions</code> 来修改 <code>state</code> ，当然你也可以直接就去 <code>state</code> ，但是更推荐使用前者。<code>actions</code> 支持同步与异步，也支持 <code>await</code> 形式。</p><h3 id="第三种修改state方法-patch" tabindex="-1">第三种修改state方法-$patch() <a class="header-anchor" href="#第三种修改state方法-patch" aria-label="Permalink to &quot;第三种修改state方法-$patch()&quot;">​</a></h3><p>在 <code>Pinia</code> 中，一共有三种修改 <code>state</code> 的方式：</p><ul><li>直接修改 <code>state</code> 。</li><li>通过 <code>actions</code> 修改。</li><li>通过 <code>$patch</code> 批量修改。</li></ul><p>新建 <code>src/store/modules/count.js</code> 文件：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">import { defineStore } from &#39;pinia&#39;;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">export const useCountStore = defineStore(&#39;count&#39;, {</span></span>
<span class="line"><span style="color:#babed8;">  state: () =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">    return {</span></span>
<span class="line"><span style="color:#babed8;">      count1: 0,</span></span>
<span class="line"><span style="color:#babed8;">      count2: 0,</span></span>
<span class="line"><span style="color:#babed8;">      count3: 0,</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">  },</span></span>
<span class="line"><span style="color:#babed8;">})</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>在 <code>App.vue</code> 中使用：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;h1&gt;Pinia&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;div&gt;count1: {{countStore.count1}}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;div&gt;count2: {{countStore.count2}}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;div&gt;count3: {{countStore.count3}}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;button @click=&quot;updateName&quot;&gt;点击&lt;/button&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#babed8;">import { useCountStore } from &#39;@/store/modules/count.js&#39;;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">export default {</span></span>
<span class="line"><span style="color:#babed8;">  setup() {</span></span>
<span class="line"><span style="color:#babed8;">    const countStore = useCountStore();</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    function updateName() {</span></span>
<span class="line"><span style="color:#babed8;">      // 直接修改</span></span>
<span class="line"><span style="color:#babed8;">      // countStore.count1++;</span></span>
<span class="line"><span style="color:#babed8;">      // countStore.count2++;</span></span>
<span class="line"><span style="color:#babed8;">      // countStore.count3++;</span></span>
<span class="line"><span style="color:#babed8;">      </span></span>
<span class="line"><span style="color:#babed8;">      // 通过$patch批量修改</span></span>
<span class="line"><span style="color:#babed8;">      countStore.$patch(state =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">        state.count1++;</span></span>
<span class="line"><span style="color:#babed8;">        state.count2++;</span></span>
<span class="line"><span style="color:#babed8;">        state.count3++;</span></span>
<span class="line"><span style="color:#babed8;">      });</span></span>
<span class="line"><span style="color:#babed8;">      // $patch的另外一种形式</span></span>
<span class="line"><span style="color:#babed8;">      // countStore.$patch({</span></span>
<span class="line"><span style="color:#babed8;">      //   count1: 2,</span></span>
<span class="line"><span style="color:#babed8;">      //   count2: 2,</span></span>
<span class="line"><span style="color:#babed8;">      //   count3: 2</span></span>
<span class="line"><span style="color:#babed8;">      // })</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    return { countStore, updateName }</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><p>上面我们展示了直接修改与通过 <code>$patch()</code> 方法进行批量修改的两种形式，它们效果一样。那它们有些什么更具体的区别呢？从网上的一些文章看到说通过 <code>$patch()</code> 修改 <code>state</code> 更具性能优势，也就是<code>$patch()</code> 方法是经过性能调优的，但是在 <a href="https://link.juejin.cn/?target=https%3A%2F%2Fpinia.vuejs.org%2Fapi%2Finterfaces%2Fpinia._StoreWithState.html%23patch" title="https://pinia.vuejs.org/api/interfaces/pinia._StoreWithState.html#patch" target="_blank" rel="noreferrer">官网</a> 却好像并没有找到相关介绍。如果小伙伴们有找到这方面的东西，欢迎给我留留言告知，感谢感谢。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ac00cf18f0d84c4f8bf5f39788e07dc9~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="5E1F6DB0.gif"></p><h3 id="pinia解构方法-storetorefs" tabindex="-1">Pinia解构方法-storeToRefs <a class="header-anchor" href="#pinia解构方法-storetorefs" aria-label="Permalink to &quot;Pinia解构方法-storeToRefs&quot;">​</a></h3><p>上面的例子中，我们都是通过 <code>.xxx</code> 来访问数据，但是当很多数据被使用时，为了更简洁的使用这些数据，我们都会采用解构的方式来优化。</p><p><code>ES6</code> 中普通的解构形式虽然能获取到值，但是却会失去响应式。</p><p><code>Pinia</code> 为我们提供了 <a href="https://link.juejin.cn/?target=https%3A%2F%2Fpinia.vuejs.org%2Fapi%2Fmodules%2Fpinia.html%23storetorefs" title="https://pinia.vuejs.org/api/modules/pinia.html#storetorefs" target="_blank" rel="noreferrer">storetorefs</a> API 方便一次性获取所有的数据，并且它们依旧是具备响应式的。</p><p>新建 <code>src/store/modules/info.js</code> 文件：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">import { defineStore } from &#39;pinia&#39;;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">export const useInfoStore = defineStore(&#39;info&#39;, {</span></span>
<span class="line"><span style="color:#babed8;">  state: () =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">    return {</span></span>
<span class="line"><span style="color:#babed8;">      name: &#39;橙某人&#39;,</span></span>
<span class="line"><span style="color:#babed8;">      age: 18</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">})</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>在 <code>App.vue</code> 文件中使用：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;h1&gt;Pinia&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;div&gt;{{ name }}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;div&gt;{{ age }}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;button @click=&quot;update&quot;&gt;点击&lt;/button&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#babed8;">import { useInfoStore } from &#39;@/store/modules/info.js&#39;;</span></span>
<span class="line"><span style="color:#babed8;">import { storeToRefs } from &#39;pinia&#39;;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">export default {</span></span>
<span class="line"><span style="color:#babed8;">  setup() {</span></span>
<span class="line"><span style="color:#babed8;">    const infoStore = useInfoStore();</span></span>
<span class="line"><span style="color:#babed8;">    const { name, age } = storeToRefs(infoStore); // 解构</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    function update() {</span></span>
<span class="line"><span style="color:#babed8;">      infoStore.name = &#39;YDYDYDQ&#39;;</span></span>
<span class="line"><span style="color:#babed8;">      infoStore.age = 20;</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    return { name, age, update }</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3bd6e63592254028a772e1dcf7c6d3da~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="image.png"></p><h3 id="store互相调用" tabindex="-1">store互相调用 <a class="header-anchor" href="#store互相调用" aria-label="Permalink to &quot;store互相调用&quot;">​</a></h3><p>新建 <code>src/store/modules/other.js</code> 文件：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">import { defineStore } from &#39;pinia&#39;;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">export const useOtherStore = defineStore(&#39;other&#39;, {</span></span>
<span class="line"><span style="color:#babed8;">  state: () =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">    return {</span></span>
<span class="line"><span style="color:#babed8;">      hobby: [&#39;吃饭&#39;, &#39;睡觉&#39;, &#39;打豆豆&#39;]</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">})</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>在 <code>src/store/modules/info.js</code> 文件中引入：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">import { defineStore } from &#39;pinia&#39;;</span></span>
<span class="line"><span style="color:#babed8;">import { useOtherStore } from &#39;./other&#39;;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">export const useInfoStore = defineStore(&#39;info&#39;, {</span></span>
<span class="line"><span style="color:#babed8;">  state: () =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">    return {</span></span>
<span class="line"><span style="color:#babed8;">      name: &#39;橙某人&#39;,</span></span>
<span class="line"><span style="color:#babed8;">      age: 18</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">  },</span></span>
<span class="line"><span style="color:#babed8;">  getters: {</span></span>
<span class="line"><span style="color:#babed8;">    getHobby() {</span></span>
<span class="line"><span style="color:#babed8;">      return useOtherStore().hobby // 获取爱好列表</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">})</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="数据持久化" tabindex="-1">数据持久化 <a class="header-anchor" href="#数据持久化" aria-label="Permalink to &quot;数据持久化&quot;">​</a></h3><p>项目中的状态管理一般我们需要把它进行数据持久化，否则一刷新就会造成数据丢失。而 <code>Pinia</code> 配套有个插件 <a href="https://link.juejin.cn/?target=https%3A%2F%2Fseb-l.github.io%2Fpinia-plugin-persist%2F" title="https://seb-l.github.io/pinia-plugin-persist/" target="_blank" rel="noreferrer">pinia-plugin-persist</a> 可以帮助我们来做这件事情。</p><p>安装</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">npm i pinia-plugin-persist -S</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>初始化</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">import { createPinia } from &#39;pinia&#39;;</span></span>
<span class="line"><span style="color:#babed8;">import piniaPluginPersist from &#39;pinia-plugin-persist&#39;;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">const pinia = createPinia();</span></span>
<span class="line"><span style="color:#babed8;">pinia.use(piniaPluginPersist);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">export default pinia;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>在对应的 <code>store</code> 中开启缓存：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">// info.js</span></span>
<span class="line"><span style="color:#babed8;">import { defineStore } from &#39;pinia&#39;;</span></span>
<span class="line"><span style="color:#babed8;">import { useOtherStore } from &#39;./other&#39;;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">export const useInfoStore = defineStore(&#39;info&#39;, {</span></span>
<span class="line"><span style="color:#babed8;">  state: () =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">    return {</span></span>
<span class="line"><span style="color:#babed8;">      name: &#39;橙某人&#39;,</span></span>
<span class="line"><span style="color:#babed8;">      age: 18</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">  },</span></span>
<span class="line"><span style="color:#babed8;">  getters: {</span></span>
<span class="line"><span style="color:#babed8;">    getHobby() {</span></span>
<span class="line"><span style="color:#babed8;">      return useOtherStore().hobby</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">  },</span></span>
<span class="line"><span style="color:#babed8;">  persist: {</span></span>
<span class="line"><span style="color:#babed8;">    enabled: true, // 开启缓存</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">})</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>开启缓存后，默认数据是缓存在 <code>sessionStorage</code> 里面的。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2250677070c4433fa42af08ff2d49daa~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="image.png"></p><p>也可以指定成 <code>localStorage</code> 作为缓存：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">// info.js</span></span>
<span class="line"><span style="color:#babed8;">import { defineStore } from &#39;pinia&#39;;</span></span>
<span class="line"><span style="color:#babed8;">import { useOtherStore } from &#39;./other&#39;;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">export const useInfoStore = defineStore(&#39;info&#39;, {</span></span>
<span class="line"><span style="color:#babed8;">  state: () =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">    return {</span></span>
<span class="line"><span style="color:#babed8;">      name: &#39;橙某人&#39;,</span></span>
<span class="line"><span style="color:#babed8;">      age: 18</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">  },</span></span>
<span class="line"><span style="color:#babed8;">  getters: {</span></span>
<span class="line"><span style="color:#babed8;">    getHobby() {</span></span>
<span class="line"><span style="color:#babed8;">      return useOtherStore().hobby</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">  },</span></span>
<span class="line"><span style="color:#babed8;">  persist: {</span></span>
<span class="line"><span style="color:#babed8;">    enabled: true, // 开启缓存</span></span>
<span class="line"><span style="color:#babed8;">    strategies: [</span></span>
<span class="line"><span style="color:#babed8;">      {</span></span>
<span class="line"><span style="color:#babed8;">        key: &#39;infoStore&#39;, // 修改缓存的key</span></span>
<span class="line"><span style="color:#babed8;">        storage: localStorage,    // 指定localStorage作为缓存</span></span>
<span class="line"><span style="color:#babed8;">        paths: [&#39;name&#39;]  // 只缓存name</span></span>
<span class="line"><span style="color:#babed8;">      }</span></span>
<span class="line"><span style="color:#babed8;">    ]</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">})</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7a8fe0e9e1af4125aeb3f0f29b5cb926~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="image.png"></p>`,398),r=[l];function c(t,o,b,i,d,u){return n(),a("div",null,r)}const g=s(p,[["render",c]]);export{y as __pageData,g as default};
