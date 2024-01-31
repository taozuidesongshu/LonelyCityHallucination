import{_ as s,o as n,c as a,N as e}from"./chunks/framework.60272d8a.js";const y=JSON.parse('{"title":"[保姆级] Vue3 开发文档 - 掘金","description":"","frontmatter":{},"headers":[],"relativePath":"guide/vue3/Vue3开发文档.md","lastUpdated":1706686109000}'),l={name:"guide/vue3/Vue3开发文档.md"},p=e(`<h1 id="保姆级-vue3-开发文档-掘金" tabindex="-1">[保姆级] Vue3 开发文档 - 掘金 <a class="header-anchor" href="#保姆级-vue3-开发文档-掘金" aria-label="Permalink to &quot;[保姆级] Vue3 开发文档 - 掘金&quot;">​</a></h1><p>本文所有语法为 <code>Vue 3.2.41</code> 版本，如果是3.0到3.2以内的版本个别地方可能会有些许不一样，但绝大部分都是一样的</p><h2 id="开发文档" tabindex="-1">开发文档 <a class="header-anchor" href="#开发文档" aria-label="Permalink to &quot;开发文档&quot;">​</a></h2><h3 id="获取-this" tabindex="-1">获取 this <a class="header-anchor" href="#获取-this" aria-label="Permalink to &quot;获取 this&quot;">​</a></h3><p>Vue2 中每个组件里使用 this 都指向当前组件实例，this 上还包含了全局挂载的东西、路由、状态管理等啥啥都有</p><p>而 Vue3 中没有 this，如果想要类似的用法，有两种，一是获取当前组件实例，二是获取全局实例，如下自己可以去打印出来看看</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#babed8;">import { getCurrentInstance } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// proxy 就是当前组件实例，可以理解为组件级别的 this，没有全局的、路由、状态管理之类的</span></span>
<span class="line"><span style="color:#babed8;">const { proxy, appContext } = getCurrentInstance()</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 这个 global 就是全局实例</span></span>
<span class="line"><span style="color:#babed8;">const global = appContext.config.globalProperties</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="全局注册-属性-方法" tabindex="-1">全局注册(属性/方法) <a class="header-anchor" href="#全局注册-属性-方法" aria-label="Permalink to &quot;全局注册(属性/方法)&quot;">​</a></h3><p>Vue2 中我们要往全局上挂载东西通常就是如下，然后在所有组件里都可以通过 <code>this.xxx</code> 获取到了</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">Vue.prototype.xxx = xxx</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>而 Vue3 中不能这么写了，换成了一个能被所有组件访问到的全局对象，就是上面说的全局实例的那个对象，比如在 <code>main.js</code> 中做全局注册</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">// main.js</span></span>
<span class="line"><span style="color:#babed8;">import { createApp } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#babed8;">import App from &#39;./App.vue&#39;</span></span>
<span class="line"><span style="color:#babed8;">const app = createApp(App)</span></span>
<span class="line"><span style="color:#babed8;">// 添加全局属性</span></span>
<span class="line"><span style="color:#babed8;">app.config.globalProperties.name = &#39;沐华&#39;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>在其他组件中调用</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#babed8;">import { getCurrentInstance } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#babed8;">const { appContext } = getCurrentInstance()</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">const global = appContext.config.globalProperties</span></span>
<span class="line"><span style="color:#babed8;">console.log(global.name) // 沐华</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="template" tabindex="-1">template <a class="header-anchor" href="#template" aria-label="Permalink to &quot;template&quot;">​</a></h3><p>Vue2 中只能有一个根节点，而 Vue3 中支持多个根节点，这个大家都知道</p><p>其实本质上 Vue3 每个组件还是一个根节点，因为 <strong>DOM 树只能是树状结构的</strong>，只是 Vue3 在编译阶段新增了判断，如果当前组件不只一个根元素，就添加一个 <code>fragment</code> 组件把这个多根组件的给包起来，相当于这个组件还是只有一个根节点。而 <code>fragment</code> 跟 <code>keep-alive</code> 一样是一个不会被渲染出来的内置组件</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;div&gt;1&lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;div&gt;2&lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="获取-dom" tabindex="-1">获取 DOM <a class="header-anchor" href="#获取-dom" aria-label="Permalink to &quot;获取 DOM&quot;">​</a></h3><p>Vue3 中获取 DOM 如下</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;el-form ref=&quot;formRef&quot;&gt;&lt;/el-form&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;child-component /&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span style="color:#babed8;">import ChildComponent from &#39;./child.vue&#39;</span></span>
<span class="line"><span style="color:#babed8;">import { getCurrentInstance } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#babed8;">import { ElForm } from &#39;element-plus&#39;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 方法一，这个变量名和 DOM 上的 ref 属性必须同名，会自动形成绑定</span></span>
<span class="line"><span style="color:#babed8;">const formRef = ref(null)</span></span>
<span class="line"><span style="color:#babed8;">console.log(formRef.value) // 这就获取到 DOM 了</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 方法二</span></span>
<span class="line"><span style="color:#babed8;">const { proxy } = getCurrentInstance()</span></span>
<span class="line"><span style="color:#babed8;">proxy.$refs.formRef.validate((valid) =&gt; { ... })</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 方法三，比如在 ts 里，可以直接获取到组件类型</span></span>
<span class="line"><span style="color:#babed8;">// 可以这样获取子组件</span></span>
<span class="line"><span style="color:#babed8;">const formRef = ref&lt;InstanceType&lt;typeof ChildComponent&gt;&gt;()</span></span>
<span class="line"><span style="color:#babed8;">// 也可以这样 获取 element ui 的组件类型</span></span>
<span class="line"><span style="color:#babed8;">const formRef = ref&lt;InstanceType&lt;typeof ElForm&gt;&gt;()</span></span>
<span class="line"><span style="color:#babed8;">formRef.value?.validate((valid) =&gt; { ... })</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h3 id="初始化" tabindex="-1">初始化 <a class="header-anchor" href="#初始化" aria-label="Permalink to &quot;初始化&quot;">​</a></h3><p>Vue2 中进入页面就请求接口，或者其他一些初始化的操作，一般放在 <code>created</code> 或 <code>mounted</code>，而 Vue3 中 <code>beforeCreated</code> 和 <code>created</code> 这俩钩子就不用了，因为 setup 在这俩之前执行，还要这俩的话就多此一举了</p><p>所以以前用在 <code>beforeCreated / created / beforeMount / mounted</code> 这几个钩子里的内容，在 Vue3 中可以直接放在 <code>setup</code> 里，或者放在 <code>onMounted/onBeforeMount</code> 里</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#babed8;">import { onMounted } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 请求接口函数</span></span>
<span class="line"><span style="color:#babed8;">const getData = () =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">    xxxApi.then(() =&gt; { ... })</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">onMounted(() =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">    getData()</span></span>
<span class="line"><span style="color:#babed8;">})</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="解除绑定" tabindex="-1">解除绑定 <a class="header-anchor" href="#解除绑定" aria-label="Permalink to &quot;解除绑定&quot;">​</a></h3><p>Vue2 中一般清除定时器、监听之类的操作有两种方法：</p><ul><li>一是用<code>$once</code> 搭配 <code>hook: BeforeDestroy</code> 使用，这个 Vue3 不支持了</li><li>二是用 <code>beforeDestroy / deactivated</code> 这俩钩子，Vue3 中只是把钩子函数重命名了一下</li></ul><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#babed8;">import { onBeforeUnmount, onDeactivated } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 组件卸载前，对应 Vue2 的 beforeDestroy</span></span>
<span class="line"><span style="color:#babed8;">onBeforeUnmount(() =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">    clearTimeout(timer)</span></span>
<span class="line"><span style="color:#babed8;">    window.removeAddEventListener(&#39;...&#39;)</span></span>
<span class="line"><span style="color:#babed8;">})</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 退出缓存组件，对应 Vue2 的 deactivated</span></span>
<span class="line"><span style="color:#babed8;">onDeactivated(() =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">    clearTimeout(timer)</span></span>
<span class="line"><span style="color:#babed8;">    window.removeAddEventListener(&#39;...&#39;)</span></span>
<span class="line"><span style="color:#babed8;">})</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="ref-和-reactive" tabindex="-1">ref 和 reactive <a class="header-anchor" href="#ref-和-reactive" aria-label="Permalink to &quot;ref 和 reactive&quot;">​</a></h3><p>这两都是用于创建响应式对象，<code>ref</code> 通常用于创建基础类型，<code>reactive</code> 通常用于创建响应式，这是官方推荐的，现实中也不尽然，有人也用 <code>ref</code> 来定义数组，也有人一个组件只定义一个 <code>reactive</code>，所有数据都放里面，就像 Vue2 的 <code>data</code> 一样，也有人都用</p><p>需要知道的有两点：</p><ul><li><code>ref</code> 如果传入的是引用类型，内部源码也是调用 <code>reactive</code> 来实现的</li><li><code>ref</code> 返回的属性在 <code>template</code> 中使用，直接用就是了，但是在 JS 中使用，需要通过 <code>.value</code> 获取，如下。因为 ref 返回的是一个包装对象</li></ul><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;div&gt;{{ count }}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#babed8;">import { ref, reactive } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#babed8;">const count = ref(1)</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 有人这么用 </span></span>
<span class="line"><span style="color:#babed8;">const arr = ref([])</span></span>
<span class="line"><span style="color:#babed8;">console.log(arr.value) // []</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 也有人这么用，一个组件里所有的属性全部定义在一个对象里，有点 Vue2 data 的味道</span></span>
<span class="line"><span style="color:#babed8;">const data = reactive({</span></span>
<span class="line"><span style="color:#babed8;">    name: &#39;沐华&#39;,</span></span>
<span class="line"><span style="color:#babed8;">    age: 18,</span></span>
<span class="line"><span style="color:#babed8;">    ...</span></span>
<span class="line"><span style="color:#babed8;">})</span></span>
<span class="line"><span style="color:#babed8;">console.log(data.name) // 沐华</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 也有人一个组件里 ref 和 reactive 两种都用，随便你</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>为什么 <code>ref</code> 要返回一个包装对象？Vue2 中 <code>data</code> 都是返回一个对象这都知道</p><p>因为对象引用类型，可以用来做代理或劫持，如果只返回基础类型的话，存储在栈中，执行栈里执行完就回收了，没有办法添加代理或劫持，自然就没办法追踪后续的变化，所以不得不返回一个对象，这样才能有响应式</p><h3 id="toref-和-torefs" tabindex="-1">toRef 和 toRefs <a class="header-anchor" href="#toref-和-torefs" aria-label="Permalink to &quot;toRef 和 toRefs&quot;">​</a></h3><p>这两共同点就是用来创建响应式的引用的，主要用来取出响应式对象里的属性，或者解构响应式对象，解构出来的属性值依然是响应式属性，如果不用这两直接解构的话是会丢失响应式效果的</p><p>主要就是方便我们使用直接变量 <code>xxx</code>，而不需要 <code>data.xxx</code>。并且我们修改 <code>xxx</code> 的时候也是直接修改源对象属性的</p><p>这两的区别：带 s 和不带 s，就是单数和复数嘛，意思就是取一个和取一堆咯</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#babed8;">import { reactive, toRef, toRefs } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">const data = reactive({</span></span>
<span class="line"><span style="color:#babed8;">    name: &#39;沐华&#39;,</span></span>
<span class="line"><span style="color:#babed8;">    age: 18</span></span>
<span class="line"><span style="color:#babed8;">})</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 这样虽然能拿到 name / age，但是会变成普通变量，没有响应式效果了</span></span>
<span class="line"><span style="color:#babed8;">const { name, age } = data</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 取出来一个响应式属性</span></span>
<span class="line"><span style="color:#babed8;">const name = toRef(data, &#39;name&#39;)</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 这样解构出来的所有属性都是有响应式的</span></span>
<span class="line"><span style="color:#babed8;">const { name, age } = toRefs(data)</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 不管是 toRef 还是 toRefs，这样修改是会把 data 里的 name 改掉的</span></span>
<span class="line"><span style="color:#babed8;">// 就是会改变源对象属性，这才是响应式该有的样子</span></span>
<span class="line"><span style="color:#babed8;">name.value = &#39;沐沐华华&#39;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="watch" tabindex="-1">watch <a class="header-anchor" href="#watch" aria-label="Permalink to &quot;watch&quot;">​</a></h3><p><code>watch</code> 就是用来监听一个已有属性，发生变化的时候做某些操作，Vue2 中常用有如下三种写法</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">watch: {</span></span>
<span class="line"><span style="color:#babed8;">    userId: &#39;getData&#39;,</span></span>
<span class="line"><span style="color:#babed8;">    userName (newName, oldName) {</span></span>
<span class="line"><span style="color:#babed8;">        this.getData()</span></span>
<span class="line"><span style="color:#babed8;">    },</span></span>
<span class="line"><span style="color:#babed8;">    userInfo: {</span></span>
<span class="line"><span style="color:#babed8;">        handler (newVal, newVal) { this.getData() },</span></span>
<span class="line"><span style="color:#babed8;">        immediate: true,</span></span>
<span class="line"><span style="color:#babed8;">        deep: true</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>而 Vue3 中监听的写法就丰富得多了</p><p>Vue3 的 <code>watch</code> 是一个函数，能接收三个参数，参数一是监听的属性，参数二是接收新值和老值的回调函数，参数三是配置项</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#babed8;">import { watch, ref, reactive } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">const name = ref(&#39;沐华&#39;)</span></span>
<span class="line"><span style="color:#babed8;">const data = reactive({</span></span>
<span class="line"><span style="color:#babed8;">    age: 18,</span></span>
<span class="line"><span style="color:#babed8;">    money: 100000000000000000000,</span></span>
<span class="line"><span style="color:#babed8;">    children: []</span></span>
<span class="line"><span style="color:#babed8;">})</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 监听 ref 属性</span></span>
<span class="line"><span style="color:#babed8;">watch(name, (newName, oldName) =&gt; { ... })</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 监听其他属性、路由或者状态管理的都这样</span></span>
<span class="line"><span style="color:#babed8;">watch(</span></span>
<span class="line"><span style="color:#babed8;">    () =&gt; data.age, </span></span>
<span class="line"><span style="color:#babed8;">    (newAge, oldAge) =&gt; { ... }</span></span>
<span class="line"><span style="color:#babed8;">)</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 监听多个属性，数组放多个值，返回的新值和老值也是数组形式</span></span>
<span class="line"><span style="color:#babed8;">watch([data.age, data.money], ([newAge, newMoney], [oldAge, oldMoney]) =&gt; { ... })</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 第三个参数是一个对象，为可配置项，有5个可配置属性</span></span>
<span class="line"><span style="color:#babed8;">watch(data.children, (newList, oldList) =&gt; { ... }, {</span></span>
<span class="line"><span style="color:#babed8;">    // 这两个和 Vue2 一样，没啥说的</span></span>
<span class="line"><span style="color:#babed8;">    immediate: true,</span></span>
<span class="line"><span style="color:#babed8;">    deep: true,</span></span>
<span class="line"><span style="color:#babed8;">    // 回调函数的执行时机，默认在组件更新之前调用。更新后调用改成post</span></span>
<span class="line"><span style="color:#babed8;">    flush: &#39;pre&#39;, // 默认值是 pre，可改成 post 或 sync</span></span>
<span class="line"><span style="color:#babed8;">    // 下面两个是调试用的</span></span>
<span class="line"><span style="color:#babed8;">    onTrack (e) { debugger }</span></span>
<span class="line"><span style="color:#babed8;">    onTrigger (e) { debugger }</span></span>
<span class="line"><span style="color:#babed8;">})</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><p>关于副作用，<code>watch</code> 和后面说到的 <code>watchEffect</code> 是一样的。</p><p>在 <code>watch</code> 回调函数中能接收第三个参数 <code>onInvalidate</code>，为清除副作用的函数，首次触发监听的回调函数(handler)不会执行 <code>onInvalidate</code>，之后每次触发<strong>默认</strong>会先执行 <code>onInvalidate</code></p><p>就是说<strong>默认</strong>它的执行机制在更新之前调用，比如如下代码，当 <code>key</code> 触发更新时会先打印 <code>222</code> 再打印 <code>沐华</code>，如果需要在更新之后调用，可以在 <code>watch</code> 第三个配置项中添加 <code>flush: post</code>，</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">// 回调函数接收一个参数，为清除副作用的函数</span></span>
<span class="line"><span style="color:#babed8;">watch(key, (newKey, oldKey, onInvalidate) =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">    console.log(&#39;沐华&#39;)</span></span>
<span class="line"><span style="color:#babed8;">    // 获取DOM默认获取到的是更新前的dom，如果是flush: post，可以获取到更新后的dom</span></span>
<span class="line"><span style="color:#babed8;">    console.log(&#39;DOM节点：&#39;, dom.innterHTML)</span></span>
<span class="line"><span style="color:#babed8;">    onInvalidate(() =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">        console.log(2222)</span></span>
<span class="line"><span style="color:#babed8;">    })</span></span>
<span class="line"><span style="color:#babed8;">})</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><code>onInvalidate</code> 的使用场景就是：比如监听的回调函数(handler)里有一些异步操作，当再次触发 <code>watch</code> 的时候可以用它来对前面未完成的异步任务执行取消/忽略/重置/初始化某些操作，比如取消上一次触发 <code>watch</code> 时未完成的请求</p><p>监听还没完呢</p><h3 id="watcheffect" tabindex="-1">watchEffect <a class="header-anchor" href="#watcheffect" aria-label="Permalink to &quot;watchEffect&quot;">​</a></h3><p>Vue3 中除了 <code>watch</code> 还增加了一个 <code>watchEffect</code>。区别是：</p><ul><li><code>watch</code> 是对传入的一个或多个值进行监听，触发时会返回新值和老值，且默认第一次不会执行</li><li><code>watchEffect</code> 是传入一个立即执行函数，所以默认第一次就会执行，且不需要传入监听内容，会自动收集函数内的数据源作为依赖，当依赖发生变化时会重新执行函数(有点像<code>computed</code>的味道)，而且不会返回新值和老值</li><li>清除副作用和副作用的刷新时机是一样的，区别是 <code>watch</code> 中会作为回调的第三个参数传入，<code>watchEffect</code> 中是回调函数的第一个参数</li><li>正常情况下组件销毁/卸载后这两都会自动停止监听，但也有例外，比如异步的方式，在 <code>setTimeout</code> 里创建的监听就都需要手动停止监听，停止方式如下</li></ul><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">// 监听方法赋值</span></span>
<span class="line"><span style="color:#babed8;">const unwatch = watch(&#39;key&#39;, callback)</span></span>
<span class="line"><span style="color:#babed8;">const unwatchEffect = watchEffect(() =&gt; {})</span></span>
<span class="line"><span style="color:#babed8;">// 需要停止监听的时候，手动调用停止监听</span></span>
<span class="line"><span style="color:#babed8;">unwatch()</span></span>
<span class="line"><span style="color:#babed8;">unwatchEffect()</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><code>watchEffect</code> 使用：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#babed8;">import { watchEffect } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 正常使用</span></span>
<span class="line"><span style="color:#babed8;">watchEffect(() =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">    // 会自动收集这个函数使用到的属性作为依赖，进行监听</span></span>
<span class="line"><span style="color:#babed8;">    // 监听的是 userInfo.name 属性，不会监听 userInfo</span></span>
<span class="line"><span style="color:#babed8;">    console.log(userInfo.name)</span></span>
<span class="line"><span style="color:#babed8;">})</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 有两个参数，参数一是触发监听回调函数，参数二是可选配置项</span></span>
<span class="line"><span style="color:#babed8;">watchEffect(() =&gt; {...}, {</span></span>
<span class="line"><span style="color:#babed8;">    // 这里是可配置项，意思和 watch 是一样的，不过这只有3个可配置的</span></span>
<span class="line"><span style="color:#babed8;">    flush: &#39;pre&#39;,</span></span>
<span class="line"><span style="color:#babed8;">    onTrack (e) { debugger }</span></span>
<span class="line"><span style="color:#babed8;">    onTrigger (e) { debugger }</span></span>
<span class="line"><span style="color:#babed8;">})</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 回调函数接收一个参数，为清除副作用的函数，和 watch 的同理</span></span>
<span class="line"><span style="color:#babed8;">watchEffect(onInvalidate =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">    console.log(&#39;沐华&#39;)</span></span>
<span class="line"><span style="color:#babed8;">    onInvalidate(() =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">        console.log(2222)</span></span>
<span class="line"><span style="color:#babed8;">    })</span></span>
<span class="line"><span style="color:#babed8;">})</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p><code>watchEffect</code> 如果需要修改配置项 <code>flush</code> 为 <code>post</code> 或 <code>sync</code> 时，可以直接使用别名，如下</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">watchEffect(() =&gt; {...}, {</span></span>
<span class="line"><span style="color:#babed8;">    flush: &#39;post&#39;,</span></span>
<span class="line"><span style="color:#babed8;">})</span></span>
<span class="line"><span style="color:#babed8;">// 和下面这个是一样的</span></span>
<span class="line"><span style="color:#babed8;">watchPostEffect(() =&gt; {})</span></span>
<span class="line"><span style="color:#babed8;">-----------------------------</span></span>
<span class="line"><span style="color:#babed8;">watchEffect(() =&gt; {...}, {</span></span>
<span class="line"><span style="color:#babed8;">    flush: &#39;sync&#39;,</span></span>
<span class="line"><span style="color:#babed8;">})</span></span>
<span class="line"><span style="color:#babed8;">// 和下面这个是一样的</span></span>
<span class="line"><span style="color:#babed8;">watchSyncEffect(() =&gt; {})</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="computed" tabindex="-1">computed <a class="header-anchor" href="#computed" aria-label="Permalink to &quot;computed&quot;">​</a></h3><p>Vue2 中 <code>computed</code> 最见的使用场景一般有： <code>mapGetters/mapState</code> 获取状态管理的属性、 获取 url 上的属性、条件判断、类型转换之类的，支持函数和对象两种写法</p><p>而 Vue3 中 <code>computed</code> 不再是一个对象，而是一个函数，用法其实基本差不多，函数第一个参数是侦听器源，用于返回计算的新值，也支持对象写法，第二个参数可用于调试</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#babed8;">import { computed } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#babed8;">const props = defineProps([&#39;visible&#39;, &#39;type&#39;])</span></span>
<span class="line"><span style="color:#babed8;">const emit = defineEmits([&quot;myClick&quot;])</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 函数写法，计算类型</span></span>
<span class="line"><span style="color:#babed8;">const isFirst = computed(() =&gt; props.type === 1)</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 对象写法</span></span>
<span class="line"><span style="color:#babed8;">const status = computed({</span></span>
<span class="line"><span style="color:#babed8;">    get () { return props.visible }, // 相当于 Vue2中的 this.visible</span></span>
<span class="line"><span style="color:#babed8;">    set (val) { emit(&#39;myClick&#39;, val) } // 相当于 Vue2中的 this.$emit(&#39;input&#39;, val)</span></span>
<span class="line"><span style="color:#babed8;">})</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// computed 第二个参数也是一个对象，调试用的</span></span>
<span class="line"><span style="color:#babed8;">const hehe = computed(参数一上面两种都可， {</span></span>
<span class="line"><span style="color:#babed8;">    onTrack (e) { debugger }</span></span>
<span class="line"><span style="color:#babed8;">    onTrigger (e) { debugger }</span></span>
<span class="line"><span style="color:#babed8;">})</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h3 id="nexttick" tabindex="-1">nextTick <a class="header-anchor" href="#nexttick" aria-label="Permalink to &quot;nextTick&quot;">​</a></h3><p><code>nextTick</code> 的使用方法，除了不能用 <code>this</code> 其他的和 Vue2 一模一样，还是三种方式</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#babed8;">import { nextTick} from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 方式 一</span></span>
<span class="line"><span style="color:#babed8;">const handleClick = async () =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">  await nextTick()</span></span>
<span class="line"><span style="color:#babed8;">  console.log(&#39;沐华&#39;)</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 方式二</span></span>
<span class="line"><span style="color:#babed8;">nextTick(() =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">    console.log(&#39;沐华&#39;)</span></span>
<span class="line"><span style="color:#babed8;">})</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 方式三</span></span>
<span class="line"><span style="color:#babed8;">nextTick().then(() =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">    console.log(&#39;沐华&#39;)</span></span>
<span class="line"><span style="color:#babed8;">  })</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="mixins-和-hooks" tabindex="-1">mixins 和 hooks <a class="header-anchor" href="#mixins-和-hooks" aria-label="Permalink to &quot;mixins 和 hooks&quot;">​</a></h3><p>Vue2 中逻辑的抽离复用一般用 <code>mixins</code>，缺点有三：</p><ul><li>没有独立命名空间，mixins 会和组件内部产生命名冲突</li><li>不去翻代码不知道引入的 mixins 里面有啥</li><li>引入多个 mixins 时不知道自己使用的是来自哪一个 mixins 的</li></ul><p>Vue3 中逻辑抽离复用的 <code>hooks</code> 语法，其实就是一个函数，可以传参，拿返回值来用。或者可以这样理解：平时要封装公用的方法是怎么写的？Vue3 里就可以怎么写</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">// xxx.js</span></span>
<span class="line"><span style="color:#babed8;">expport const getData = () =&gt; {}</span></span>
<span class="line"><span style="color:#babed8;">export default function unInstance () {</span></span>
<span class="line"><span style="color:#babed8;">    ...</span></span>
<span class="line"><span style="color:#babed8;">    return {...}</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// xxx.vue</span></span>
<span class="line"><span style="color:#babed8;">import unInstance, { getData } from &#39;xx.js&#39;</span></span>
<span class="line"><span style="color:#babed8;">const { ... } = unInstance()</span></span>
<span class="line"><span style="color:#babed8;">onMounted(() =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">    getData()</span></span>
<span class="line"><span style="color:#babed8;">})</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>关于 <code>hooks</code> 如何写出更优雅的代码，还个需要多写，多实践，这不是几句话几行代码就能熟练运用的</p><h3 id="组件通信" tabindex="-1">组件通信 <a class="header-anchor" href="#组件通信" aria-label="Permalink to &quot;组件通信&quot;">​</a></h3><p>Vue3 组件通信的方式，有如下几种</p><ul><li>props + defineProps</li><li>defineEmits</li><li>defineExpose / ref</li><li>useAttrs</li><li>v-model(支持多个)</li><li>provide / inject</li><li>Vuex / Pinia</li></ul><p>关于 Vue 组件通信的使用方式，我以前写过一篇文章，用法上面都介绍的很详细了，就不搬过来了</p><p><a href="https://juejin.cn/post/6999687348120190983#heading-7" title="https://juejin.cn/post/6999687348120190983#heading-7" target="_blank" rel="noreferrer">Vue3的8种和Vue2的12种组件通信</a></p><h3 id="多个-v-model" tabindex="-1">多个 v-model <a class="header-anchor" href="#多个-v-model" aria-label="Permalink to &quot;多个 v-model&quot;">​</a></h3><p>Vue2 中每个组件上只能写一个 <code>v-model</code>，子组件没有写 <code>model</code> 的话，默认在 <code>props</code> 接收 <code>value</code> 即可，修改就是用 <code>this.$emit(&#39;input&#39;)</code> 事件</p><p>Vue3 中每个组件每个组件上支持写多个 <code>v-model</code>，没有了 <code>.sync</code> 和 <code>model</code> 重命名的操作，也不需要了，写v-model 的时候就需要把命名一起写上去了，如下：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">// 父组件写法</span></span>
<span class="line"><span style="color:#babed8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;child v-model:name=&quot;name&quot; v-model:age=&quot;age&quot; /&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#babed8;">import { ref } from &quot;vue&quot;</span></span>
<span class="line"><span style="color:#babed8;">const name = ref(&#39;沐华&#39;)</span></span>
<span class="line"><span style="color:#babed8;">const age = ref(18)</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 子组件</span></span>
<span class="line"><span style="color:#babed8;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#babed8;">const emit = defineEmits([&#39;update:name&#39;, &#39;update:age&#39;])</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">const handleClick = () =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">    console.log(&#39;点击了&#39;)</span></span>
<span class="line"><span style="color:#babed8;">    emit(&#39;update:name&#39;, &#39;这是新的名字&#39;)</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="状态管理" tabindex="-1">状态管理 <a class="header-anchor" href="#状态管理" aria-label="Permalink to &quot;状态管理&quot;">​</a></h3><p>Vuex 用法和 Vue2 基本一样，从0开始的话建议直接用 <code>Pinia</code> 吧，Pinia 详细使用方式，我以前也写过一篇文章，也不搬过来了</p><p><a href="https://juejin.cn/post/7075491793642455077" title="https://juejin.cn/post/7075491793642455077" target="_blank" rel="noreferrer">上手 Vue 新的状态管理 Pinia，一篇文章就够了</a></p><p>Vuex 4 用法如下</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">// main.js</span></span>
<span class="line"><span style="color:#babed8;">import { createApp } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#babed8;">import App from &#39;./App.vue&#39;</span></span>
<span class="line"><span style="color:#babed8;">import Store from &#39;./store&#39;</span></span>
<span class="line"><span style="color:#babed8;">const app = createApp(App)</span></span>
<span class="line"><span style="color:#babed8;">app.use(Store)</span></span>
<span class="line"><span style="color:#babed8;">...</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 模块：store/user/index.js</span></span>
<span class="line"><span style="color:#babed8;">export default {</span></span>
<span class="line"><span style="color:#babed8;">    state: {},</span></span>
<span class="line"><span style="color:#babed8;">    getters: {},</span></span>
<span class="line"><span style="color:#babed8;">    actions: {},</span></span>
<span class="line"><span style="color:#babed8;">    mutations: {}</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// store/index.js</span></span>
<span class="line"><span style="color:#babed8;">import { createStore } from &#39;vuex&#39;</span></span>
<span class="line"><span style="color:#babed8;">import user from &#39;./user&#39;</span></span>
<span class="line"><span style="color:#babed8;">const store = createStore({</span></span>
<span class="line"><span style="color:#babed8;">    state: {},</span></span>
<span class="line"><span style="color:#babed8;">    getters: {},</span></span>
<span class="line"><span style="color:#babed8;">    actions: {},</span></span>
<span class="line"><span style="color:#babed8;">    mutations: {},</span></span>
<span class="line"><span style="color:#babed8;">    modules: {</span></span>
<span class="line"><span style="color:#babed8;">        user</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">})</span></span>
<span class="line"><span style="color:#babed8;">export default store</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 需要用到状态管理的 .vue 文件里</span></span>
<span class="line"><span style="color:#babed8;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#babed8;">import { useStore } from &#39;vuex&#39; </span></span>
<span class="line"><span style="color:#babed8;">const store = useStore()</span></span>
<span class="line"><span style="color:#babed8;">// 打这个 store 打印出来看下，相当于 Vue2 里的 this.$store，用法基本一样</span></span>
<span class="line"><span style="color:#babed8;">console.log(store)</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><h3 id="路由" tabindex="-1">路由 <a class="header-anchor" href="#路由" aria-label="Permalink to &quot;路由&quot;">​</a></h3><p>Vue-Router 4 使用如下，主要是 <code>route</code> 和 <code>router</code> 打印出来看一下就知道了</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">// main.js</span></span>
<span class="line"><span style="color:#babed8;">import { createApp } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#babed8;">import App from &#39;./App.vue&#39;</span></span>
<span class="line"><span style="color:#babed8;">import Router from &#39;./router&#39;</span></span>
<span class="line"><span style="color:#babed8;">const app = createApp(App)</span></span>
<span class="line"><span style="color:#babed8;">app.use(Router)</span></span>
<span class="line"><span style="color:#babed8;">...</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// router/index.js</span></span>
<span class="line"><span style="color:#babed8;">import { createRouter, createWebHistory, RouteRecordRaw } from &#39;vue-router&#39;</span></span>
<span class="line"><span style="color:#babed8;">// 这个 routes 数组里面就和 vue2 一样写</span></span>
<span class="line"><span style="color:#babed8;">const routes = [  // ts版这行就是 const routes: Array&lt;RouteRecordRaw&gt; = [</span></span>
<span class="line"><span style="color:#babed8;">  { path: &#39;/&#39;, redirect: { name: &#39;login&#39; } }</span></span>
<span class="line"><span style="color:#babed8;">]</span></span>
<span class="line"><span style="color:#babed8;">const router = createRouter({</span></span>
<span class="line"><span style="color:#babed8;">  history: createWebHistory(p<wbr>rocess.env.BASE_URL), // 项目没用这个就不传</span></span>
<span class="line"><span style="color:#babed8;">  routes</span></span>
<span class="line"><span style="color:#babed8;">})</span></span>
<span class="line"><span style="color:#babed8;">export default router</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 需要用到路由的 .vue 文件里</span></span>
<span class="line"><span style="color:#babed8;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#babed8;">import { useRoute, useRouter } from &quot;vue-router&quot;</span></span>
<span class="line"><span style="color:#babed8;">// route 对应 Vue2 里的 this.$route</span></span>
<span class="line"><span style="color:#babed8;">const route = useRoute()</span></span>
<span class="line"><span style="color:#babed8;">// router 对应 Vue2 里的 this.$router</span></span>
<span class="line"><span style="color:#babed8;">const router = useRouter()</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h3 id="css-样式穿透" tabindex="-1">CSS 样式穿透 <a class="header-anchor" href="#css-样式穿透" aria-label="Permalink to &quot;CSS 样式穿透&quot;">​</a></h3><p>Vue2 中在 <code>scoped</code> 中修改子组件或者组件库中的组件样式，改不了的情况下，就可以用样式穿透，不管是 <code>Less</code> 还是 <code>SASS</code> 都是用 <code>/deep/ .class {}</code> 来做样式穿透，而 Vue3 中就不支持 <code>/deep/</code> 的写法了，换成 <code>:deep(.class)</code></p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;style lang=&quot;scss&quot; scoped&gt;</span></span>
<span class="line"><span style="color:#babed8;">// 这样写不生效的话</span></span>
<span class="line"><span style="color:#babed8;">.el-form {</span></span>
<span class="line"><span style="color:#babed8;">    .el-form-item { ... }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">// Vue2 中这样写</span></span>
<span class="line"><span style="color:#babed8;">/deep/ .el-form {</span></span>
<span class="line"><span style="color:#babed8;">    .el-form-item { ... }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">// Vue3 中这样写</span></span>
<span class="line"><span style="color:#babed8;">:deep(.el-form) {</span></span>
<span class="line"><span style="color:#babed8;">    .el-form-item { ... }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">&lt;/style&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 别再一看没生效，就这样加一个没有 scoped 的 style 标签了，一鼓脑全都加到全局上去了</span></span>
<span class="line"><span style="color:#babed8;">// 除非是全局都要改的</span></span>
<span class="line"><span style="color:#babed8;">// 还有些需要加到全局的场景，但只改当前页的，比如有些ui组件是挂在全局上的，可以加个当前页独有的类名就是了</span></span>
<span class="line"><span style="color:#babed8;">// &lt;style lang=&quot;scss&quot;&gt;</span></span>
<span class="line"><span style="color:#babed8;">//  .el-form {</span></span>
<span class="line"><span style="color:#babed8;">//     .el-form-item { ... }</span></span>
<span class="line"><span style="color:#babed8;">//  }</span></span>
<span class="line"><span style="color:#babed8;">// &lt;/style&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h3 id="css-绑定-js-变量" tabindex="-1">CSS 绑定 JS 变量 <a class="header-anchor" href="#css-绑定-js-变量" aria-label="Permalink to &quot;CSS 绑定 JS 变量&quot;">​</a></h3><p>就是 CSS 中可以使用 JS 的变量来赋值，如下</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;div class=&quot;name&quot;&gt;沐华&lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#babed8;">import { ref } from &quot;vue&quot;</span></span>
<span class="line"><span style="color:#babed8;">const str = ref(&#39;#f00&#39;) // 红色</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;style scoped lang=&quot;scss&quot;&gt;</span></span>
<span class="line"><span style="color:#babed8;">.name {</span></span>
<span class="line"><span style="color:#babed8;">    background-color: v-bind(str); // JS 中的色值变量 #f00 就赋值到这来了</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">&lt;/style&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,97),r=[p];function c(b,o,i,t,d,u){return n(),a("div",null,r)}const h=s(l,[["render",c]]);export{y as __pageData,h as default};
