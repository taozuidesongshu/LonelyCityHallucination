import{_ as s,o as n,c as a,N as l}from"./chunks/framework.60272d8a.js";const y=JSON.parse('{"title":"vue3中hooks","description":"","frontmatter":{},"headers":[],"relativePath":"guide/vue3/vue3中hooks.md","lastUpdated":1706686109000}'),e={name:"guide/vue3/vue3中hooks.md"},p=l(`<h1 id="vue3中hooks" tabindex="-1">vue3中hooks <a class="header-anchor" href="#vue3中hooks" aria-label="Permalink to &quot;vue3中hooks&quot;">​</a></h1><hr><h2 id="_0-前置知识" tabindex="-1">0.前置知识 <a class="header-anchor" href="#_0-前置知识" aria-label="Permalink to &quot;0.前置知识&quot;">​</a></h2><h3 id="_0-1-mixin是什么" tabindex="-1">0.1 mixin是什么？ <a class="header-anchor" href="#_0-1-mixin是什么" aria-label="Permalink to &quot;0.1 mixin是什么？&quot;">​</a></h3><p>mixin,翻译过来就是混入，不仅仅在vue框架中存在mixin，确切的说mixin是一种思想，一种混入的思想。混入的内容就是可以在被混入的地方使用，他会自动的将混入的东西准确的分配到指定的组件中。在vue中，mixin相当于指定混入的变量&amp;函数放入他不混入时候该放的地方。可以认为，vue中的mixin就是相当于组件中的组件。组件A中的watch中处理的逻辑hanldleParams,在组件B中的watch中同样需要这样的逻辑hanldleParams。</p><p><strong>那么有两种方法：</strong>（<strong>这两种方法的区别就代表了mixin和utils的区别</strong>）<br> 1.抽函数：hanldleParams函数抽出来，然后在watch中调用hanldleParams；<br> 2.mixin：上一种抽函数但是我们还是需要在组件中写watch，毕竟两个组件都是在watch这个钩子中调用，如果每个组件都写watch，那么watch也是重复的东西，因此mixin就是将watch钩子都可以抽出来的组件，也就是说，mixin抽出来不仅仅是纯函数逻辑，还可以将vue组件特有的钩子等逻辑也可以抽出来，达到进一步复用，这就是mixin的作用。那么组件A\\B通过mixin共用一个watch，导入即可，不需要开发人将其放置在指定位置。<br> 特点：Mixin中的数据和方法都是独立的，组件之间使用后是互相不影响的</p><h3 id="_0-2-mixin解决了什么问题" tabindex="-1">0.2 mixin解决了什么问题？ <a class="header-anchor" href="#_0-2-mixin解决了什么问题" aria-label="Permalink to &quot;0.2 mixin解决了什么问题？&quot;">​</a></h3><p>mixin解决了逻辑复用 &amp; vue配置复用 注意：组件配置复用是指，组件中的选项式API（例如：data，computed，watch）或者组件的生命周期钩子（created、mounted、destroyed）</p><h3 id="_0-3-使用-使用场景" tabindex="-1">0.3 使用&amp;使用场景？ <a class="header-anchor" href="#_0-3-使用-使用场景" aria-label="Permalink to &quot;0.3 使用&amp;使用场景？&quot;">​</a></h3><p>在vue中，mixin定义的就是一个对象，对象中放置的vue组件相应的<strong>选项式API</strong>和对应的<strong>生命周期钩</strong>子</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">export const mixins = {</span></span>
<span class="line"><span style="color:#babed8;">  data() {</span></span>
<span class="line"><span style="color:#babed8;">    return {};</span></span>
<span class="line"><span style="color:#babed8;">  },</span></span>
<span class="line"><span style="color:#babed8;">  computed: {},</span></span>
<span class="line"><span style="color:#babed8;">  created() {},</span></span>
<span class="line"><span style="color:#babed8;">  mounted() {},</span></span>
<span class="line"><span style="color:#babed8;">  methods: {},</span></span>
<span class="line"><span style="color:#babed8;">};</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>记住：mixin中一般都是存在vue组件中的选项API和组件生命周期钩子，因为函数的抽象也是要放在组件中特定的API或者钩子中，因此mixin考虑了这一点，直接配置好了所有的API，只要在函数中放置即可。例如抽象一个hanldleParams函数，我们一般是在config文件中导出，然后在组件中引入使用，data中method中使用处理data，并且都要设置在data中变量b，那么这段逻辑就可以抽离出来在mixin中放置。而对于与组件业务有关的数据或者逻辑一般都是写在组件中的。</p><p>例如：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">// 定义一个mixin</span></span>
<span class="line"><span style="color:#babed8;">export const mixins = {</span></span>
<span class="line"><span style="color:#babed8;">  data() {</span></span>
<span class="line"><span style="color:#babed8;">    return {</span></span>
<span class="line"><span style="color:#babed8;">      msg: &quot;我是小猪课堂&quot;,</span></span>
<span class="line"><span style="color:#babed8;">    };</span></span>
<span class="line"><span style="color:#babed8;">  },</span></span>
<span class="line"><span style="color:#babed8;">  computed: {},</span></span>
<span class="line"><span style="color:#babed8;">  created() {</span></span>
<span class="line"><span style="color:#babed8;">    console.log(&quot;我是mixin中的created生命周期函数&quot;);</span></span>
<span class="line"><span style="color:#babed8;">  },</span></span>
<span class="line"><span style="color:#babed8;">  mounted() {</span></span>
<span class="line"><span style="color:#babed8;">    console.log(&quot;我是mixin中的mounted生命周期函数&quot;);</span></span>
<span class="line"><span style="color:#babed8;">  },</span></span>
<span class="line"><span style="color:#babed8;">  methods: {</span></span>
<span class="line"><span style="color:#babed8;">    clickMe() {</span></span>
<span class="line"><span style="color:#babed8;">      console.log(&quot;我是mixin中的点击事件&quot;);</span></span>
<span class="line"><span style="color:#babed8;">    },</span></span>
<span class="line"><span style="color:#babed8;">  },</span></span>
<span class="line"><span style="color:#babed8;">};</span></span>
<span class="line"><span style="color:#babed8;">//</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// src/App.vue中使用导出的mixin</span></span>
<span class="line"><span style="color:#babed8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;img alt=&quot;Vue logo&quot; src=&quot;./assets/logo.png&quot; /&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;button @click=&quot;clickMe&quot;&gt;点击我&lt;/button&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#babed8;">import { mixins } from &quot;./mixin/index&quot;;</span></span>
<span class="line"><span style="color:#babed8;">export default {</span></span>
<span class="line"><span style="color:#babed8;">  name: &quot;App&quot;,</span></span>
<span class="line"><span style="color:#babed8;">  mixins: [mixins], // 注册mixin，这样mixin中所有的钩子函数等同于组件中钩子</span></span>
<span class="line"><span style="color:#babed8;">  components: {},</span></span>
<span class="line"><span style="color:#babed8;">  created(){</span></span>
<span class="line"><span style="color:#babed8;">    console.log(&quot;组件调用minxi数据&quot;,this.msg);</span></span>
<span class="line"><span style="color:#babed8;">  },</span></span>
<span class="line"><span style="color:#babed8;">  mounted(){</span></span>
<span class="line"><span style="color:#babed8;">    console.log(&quot;我是组件的mounted生命周期函数&quot;)</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">};</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><p>注意：mixin中和vue组件中相同的钩子的优先级：</p><ul><li>mixin中的生命周期函数会和组件的生命周期函数一起合并执行。</li><li>mixin中的data数据在组件中也可以使用。</li><li>mixin中的方法在组件内部可以直接调用。</li><li>生命周期函数合并后执行顺序：先执行mixin中的，后执行组件的。</li></ul><p>此外，mixin对于不同组件的导入，相互之间数据是不会影响的，例如：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">// mixin文件</span></span>
<span class="line"><span style="color:#babed8;">export const mixins = {</span></span>
<span class="line"><span style="color:#babed8;">  data() {</span></span>
<span class="line"><span style="color:#babed8;">    return {</span></span>
<span class="line"><span style="color:#babed8;">      msg: &quot;我是小猪课堂&quot;,</span></span>
<span class="line"><span style="color:#babed8;">    };</span></span>
<span class="line"><span style="color:#babed8;">  },</span></span>
<span class="line"><span style="color:#babed8;">  computed: {},</span></span>
<span class="line"><span style="color:#babed8;">  created() {</span></span>
<span class="line"><span style="color:#babed8;">    console.log(&quot;我是mixin中的created生命周期函数&quot;);</span></span>
<span class="line"><span style="color:#babed8;">  },</span></span>
<span class="line"><span style="color:#babed8;">  mounted() {</span></span>
<span class="line"><span style="color:#babed8;">    console.log(&quot;我是mixin中的mounted生命周期函数&quot;);</span></span>
<span class="line"><span style="color:#babed8;">  },</span></span>
<span class="line"><span style="color:#babed8;">  methods: {</span></span>
<span class="line"><span style="color:#babed8;">    clickMe() {</span></span>
<span class="line"><span style="color:#babed8;">      console.log(&quot;我是mixin中的点击事件&quot;);</span></span>
<span class="line"><span style="color:#babed8;">    },</span></span>
<span class="line"><span style="color:#babed8;">  },</span></span>
<span class="line"><span style="color:#babed8;">};</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>在文件app中使用mixin，并通过changeMsg函数来更改mixin中data的变量msg，此时对于其他组件使用的这个msg变量是不变的。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;img alt=&quot;Vue logo&quot; src=&quot;./assets/logo.png&quot; /&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;button @click=&quot;clickMe&quot;&gt;点击我&lt;/button&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;button @click=&quot;changeMsg&quot;&gt;更改mixin数据&lt;/button&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;demo&gt;&lt;/demo&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#babed8;">import { mixins } from &quot;./mixin/index&quot;;</span></span>
<span class="line"><span style="color:#babed8;">import demo from &quot;./components/demo.vue&quot;;</span></span>
<span class="line"><span style="color:#babed8;">export default {</span></span>
<span class="line"><span style="color:#babed8;">  name: &quot;App&quot;,</span></span>
<span class="line"><span style="color:#babed8;">  mixins: [mixins],</span></span>
<span class="line"><span style="color:#babed8;">  components: { demo },</span></span>
<span class="line"><span style="color:#babed8;">  created() {</span></span>
<span class="line"><span style="color:#babed8;">    console.log(&quot;组件调用minxi数据&quot;, this.msg);</span></span>
<span class="line"><span style="color:#babed8;">  },</span></span>
<span class="line"><span style="color:#babed8;">  mounted() {</span></span>
<span class="line"><span style="color:#babed8;">    console.log(&quot;我是组件的mounted生命周期函数&quot;);</span></span>
<span class="line"><span style="color:#babed8;">  },</span></span>
<span class="line"><span style="color:#babed8;">  methods: {</span></span>
<span class="line"><span style="color:#babed8;">    changeMsg() {</span></span>
<span class="line"><span style="color:#babed8;">      this.msg = &quot;我是变异的小猪课堂&quot;;</span></span>
<span class="line"><span style="color:#babed8;">      console.log(&quot;更改后的msg:&quot;, this.msg);</span></span>
<span class="line"><span style="color:#babed8;">    },</span></span>
<span class="line"><span style="color:#babed8;">  },</span></span>
<span class="line"><span style="color:#babed8;">};</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h3 id="_0-4-存在的缺点是什么" tabindex="-1">0.4 存在的缺点是什么 <a class="header-anchor" href="#_0-4-存在的缺点是什么" aria-label="Permalink to &quot;0.4 存在的缺点是什么&quot;">​</a></h3><p>mixin<br> 优点：组件中钩子函数的注册复用<br> 缺点：<br> 相同钩子中注册的函数名相同会发生冲突（vue中冲突的解决方案是本组件中优先级高于mixin）<br> 定位错误需要花费时间<br> 滥用会造成维护问题</p><h2 id="_1-hooks是什么" tabindex="-1">1.hooks是什么 <a class="header-anchor" href="#_1-hooks是什么" aria-label="Permalink to &quot;1.hooks是什么&quot;">​</a></h2><p>一般来说，我们开发中会自动抽象出逻辑函数放在utils中，utils中放的纯逻辑，不存在属于组件的东西，例如狗子函数等。而hooks就是在utils的基础上再包一层组件级别的东西(钩子函数等)。例如：我们每次点击button都会弹出一个弹窗，自动显示当前日期。但是我将函数放在util中，每次复用都需要click=handleClick 函数放入日期函数，通过handleClick函数管理utils，那么我不如直接将handleClick也封装起来，下次直接调用，复用了methods注册的环节</p><h2 id="_2-为什么会出现hooks" tabindex="-1">2.为什么会出现hooks <a class="header-anchor" href="#_2-为什么会出现hooks" aria-label="Permalink to &quot;2.为什么会出现hooks&quot;">​</a></h2><p>hooks与mixin的区别<br> mixin是options API的体现，一个是composition API的体现</p><p><strong>1.mixin</strong></p><ul><li>在vue2 中有一个东西：Mixins 可以实现这个功能</li><li>mixins就是将这些多个相同的逻辑抽离出来，各个组件只需要引入mixins，就能实现代码复用</li><li>弊端一： 会涉及到覆盖的问题</li><li>组件的data、methods、filters会覆盖mixins里的同名data、methods、filters</li><li>弊端二：隐式传入，变量来源不明确，不利于阅读，使代码变得难以维护</li><li>弊端三：mixin无法传入灵活的传入参数，例如(弊端3的举例)： 我需要定一个一个变量name，但是name的初始值是随机的，那么name定义在mixin中的时候，他的初始化一定是固定的，我们如果要改只能再method中注册一个方法来修改name的值：</li></ul><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">// 混入文件：name-mixin.js</span></span>
<span class="line"><span style="color:#babed8;">export default {</span></span>
<span class="line"><span style="color:#babed8;">  data() {</span></span>
<span class="line"><span style="color:#babed8;">    return {</span></span>
<span class="line"><span style="color:#babed8;">      name: &#39;zhng&#39;</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">  },</span></span>
<span class="line"><span style="color:#babed8;">  methods: {</span></span>
<span class="line"><span style="color:#babed8;">    setName(name) {</span></span>
<span class="line"><span style="color:#babed8;">      this.name = name</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 组件：my-component.vue</span></span>
<span class="line"><span style="color:#babed8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;div&gt;{{ name }}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#babed8;">import nameMixin from &#39;./name-mixin&#39;;</span></span>
<span class="line"><span style="color:#babed8;">export default {</span></span>
<span class="line"><span style="color:#babed8;">  mixins: [nameMixin],</span></span>
<span class="line"><span style="color:#babed8;">  mounted() {</span></span>
<span class="line"><span style="color:#babed8;">    setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">      this.setName(&#39;Tom&#39;) // 通过在组件中调用setName传入参数值，无法传入参数，限制了Mixin的灵活性</span></span>
<span class="line"><span style="color:#babed8;">    }, 3000)</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p>而使用hooks的方法</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">import { computed, ref, Ref } from &quot;vue&quot;</span></span>
<span class="line"><span style="color:#babed8;">// 定义hook方法</span></span>
<span class="line"><span style="color:#babed8;">type CountResultProps = {</span></span>
<span class="line"><span style="color:#babed8;">    count:Ref&lt;number&gt;;</span></span>
<span class="line"><span style="color:#babed8;">    multiple:Ref&lt;number&gt;;</span></span>
<span class="line"><span style="color:#babed8;">    increase:(delta?:number)=&gt;void;</span></span>
<span class="line"><span style="color:#babed8;">    decrease:(delta?:number)=&gt; void;</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">export default function useCount(initValue = 1):CountResultProps{</span></span>
<span class="line"><span style="color:#babed8;">    const count = ref(initValue)</span></span>
<span class="line"><span style="color:#babed8;">    const increase = (delta?:number):void =&gt;{</span></span>
<span class="line"><span style="color:#babed8;">        if(typeof delta !== &#39;undefined&#39;){</span></span>
<span class="line"><span style="color:#babed8;">            count.value += delta</span></span>
<span class="line"><span style="color:#babed8;">        }else{</span></span>
<span class="line"><span style="color:#babed8;">            count.value += 1</span></span>
<span class="line"><span style="color:#babed8;">        }</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">    const multiple  = computed(()=&gt;count.value * 2)</span></span>
<span class="line"><span style="color:#babed8;">    const decrease = (delta?:number):void=&gt;{</span></span>
<span class="line"><span style="color:#babed8;">        if(typeof delta !== &quot;undefined&quot;){</span></span>
<span class="line"><span style="color:#babed8;">            count.value -= delta</span></span>
<span class="line"><span style="color:#babed8;">        }else{</span></span>
<span class="line"><span style="color:#babed8;">            count.value -= 1</span></span>
<span class="line"><span style="color:#babed8;">        }</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">    return {</span></span>
<span class="line"><span style="color:#babed8;">        count,</span></span>
<span class="line"><span style="color:#babed8;">        increase,</span></span>
<span class="line"><span style="color:#babed8;">        decrease,</span></span>
<span class="line"><span style="color:#babed8;">        multiple</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;"> </span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 在组件中的使用</span></span>
<span class="line"><span style="color:#babed8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#babed8;">   &lt;p&gt;count:{{count}}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#babed8;">   &lt;p&gt;倍数:{{multiple}}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#babed8;">   &lt;div&gt;</span></span>
<span class="line"><span style="color:#babed8;">     &lt;button @click=&quot;increase(10)&quot;&gt;加一&lt;/button&gt;</span></span>
<span class="line"><span style="color:#babed8;">     &lt;button @click=&quot;decrease(10)&quot;&gt;减一&lt;/button&gt; // 在模版中直接使用hooks中的方法作为回调函数</span></span>
<span class="line"><span style="color:#babed8;">   &lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span style="color:#babed8;">import useCount from &quot;../views/Hook&quot;</span></span>
<span class="line"><span style="color:#babed8;">const {count,multiple,increase,decrease}  = useCount(10)</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#babed8;"> </span></span>
<span class="line"><span style="color:#babed8;">&lt;/style&gt; </span></span>
<span class="line"><span style="color:#babed8;">        </span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div><p><strong>2.hooks：</strong></p><ul><li>Vue3中我们可以： 自定义Hook</li><li>Vue3 的 hook函数 相当于 vue2 的 mixin, 但是： hooks 是函数</li><li>Vue3 的 hook函数 可以帮助我们提高代码的复用性, 让我们能在不同的组件中都利用 hooks 函数</li></ul><h2 id="_3-hooks使用场景-自定义hook" tabindex="-1">3.hooks使用场景-自定义hook <a class="header-anchor" href="#_3-hooks使用场景-自定义hook" aria-label="Permalink to &quot;3.hooks使用场景-自定义hook&quot;">​</a></h2><h3 id="_3-1-hooks中常见的业务使用场景" tabindex="-1">3.1 hooks中常见的业务使用场景 <a class="header-anchor" href="#_3-1-hooks中常见的业务使用场景" aria-label="Permalink to &quot;3.1 hooks中常见的业务使用场景&quot;">​</a></h3><p>重复造轮子的组件，除开一些毫无必要的重复以外，有一些功能组件确实需要封装一下，比如说，一些需要请求后端字典到前端展示的下来选择框，点击之后要展示loading状态的按钮，带有查询条件的表单，这些非常常用的业务场景，我们就可以封装成组件，但是封装成组件就会遇到前面说的问题，每个人的使用习惯和封装习惯不一样，很难让每个人都满意，这种场景，就可以让hook来解决。</p><h3 id="_3-2-自定义hook需要满足的规范" tabindex="-1">3.2 自定义hook需要满足的规范 <a class="header-anchor" href="#_3-2-自定义hook需要满足的规范" aria-label="Permalink to &quot;3.2 自定义hook需要满足的规范&quot;">​</a></h3><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3ab6ffb0e3f249768a811801b0334862~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?" alt="image.png"></p><h3 id="_3-3-自定义hooks使用举例" tabindex="-1">3.3 自定义hooks使用举例 <a class="header-anchor" href="#_3-3-自定义hooks使用举例" aria-label="Permalink to &quot;3.3 自定义hooks使用举例&quot;">​</a></h3><h4 id="例子1" tabindex="-1">例子1 <a class="header-anchor" href="#例子1" aria-label="Permalink to &quot;例子1&quot;">​</a></h4><p><strong>hooks-1自定义：useCut</strong></p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">import {ref,watch} from &quot;vue&quot;</span></span>
<span class="line"><span style="color:#babed8;">export function useCut({num1,num2}){</span></span>
<span class="line"><span style="color:#babed8;">   const cutNum = ref(0);</span></span>
<span class="line"><span style="color:#babed8;">   watch([num1,num2],(num1,num2)=&gt;{</span></span>
<span class="line"><span style="color:#babed8;">    cutFunc(num1,num2)</span></span>
<span class="line"><span style="color:#babed8;">  })</span></span>
<span class="line"><span style="color:#babed8;">  const cutFunc = (num1,num2)=&gt;{</span></span>
<span class="line"><span style="color:#babed8;">    cutNum.value = num1+num2</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">  return {</span></span>
<span class="line"><span style="color:#babed8;">    cutNum,</span></span>
<span class="line"><span style="color:#babed8;">    cutFunc</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p><strong>hooks2自定义</strong></p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">import {ref,watch} from &quot;vue&quot;</span></span>
<span class="line"><span style="color:#babed8;">const useAdd = ({num1,num2})=&gt;{</span></span>
<span class="line"><span style="color:#babed8;">  const addNum = ref(0);</span></span>
<span class="line"><span style="color:#babed8;">  watch([num1,num2],(num1,num2)=&gt;{</span></span>
<span class="line"><span style="color:#babed8;">    addFunc(num1,num2)</span></span>
<span class="line"><span style="color:#babed8;">  })</span></span>
<span class="line"><span style="color:#babed8;">  const addFunc = (num1,num2)=&gt;{</span></span>
<span class="line"><span style="color:#babed8;">    addNum.value = num1+num2</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">  return {</span></span>
<span class="line"><span style="color:#babed8;">    addNum,</span></span>
<span class="line"><span style="color:#babed8;">    addFunc</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">export default useAdd</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p><strong>组件中使用自定义hooks</strong></p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#babed8;">        num1:&lt;input v-model.number=&quot;num1&quot; style=&quot;width:100px&quot; /&gt;</span></span>
<span class="line"><span style="color:#babed8;">        &lt;br /&gt;</span></span>
<span class="line"><span style="color:#babed8;">        num2:&lt;input v-model.number=&quot;num2&quot; style=&quot;width:100px&quot; /&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;span&gt;加法等于:{{ addNum }}&lt;/span&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;br /&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;span&gt;减法等于:{{ cutNum }}&lt;/span&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#babed8;">import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#babed8;">import useAdd from &#39;./addHook.js&#39;     //引入自动hook </span></span>
<span class="line"><span style="color:#babed8;">import { useCut } from &#39;./cutHook.js&#39; //引入自动hook </span></span>
<span class="line"><span style="color:#babed8;">const num1 = ref(2)</span></span>
<span class="line"><span style="color:#babed8;">const num2 = ref(1)</span></span>
<span class="line"><span style="color:#babed8;">const { addNum, addFunc } = useAdd({ num1, num2 })  // 加法功能-自定义Hook（将响应式变量或者方法形式暴露出来）</span></span>
<span class="line"><span style="color:#babed8;">// 因为hooks是函数，不像mixin是对象形式，所以更方便的传入组件中的data变量，交给抽象逻辑使用</span></span>
<span class="line"><span style="color:#babed8;">addFn(num1.value, num2.value)</span></span>
<span class="line"><span style="color:#babed8;">const { cutNum, cutFunc } = useCut({ num1, num2 }) // 减法功能-自定义Hook (将响应式变量或者方法形式暴露出来)</span></span>
<span class="line"><span style="color:#babed8;">subFn(num1.value, num2.value)</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><blockquote><p>参考文献：<a href="https://juejin.cn/post/7113582820877926436" title="https://juejin.cn/post/7113582820877926436" target="_blank" rel="noreferrer">juejin.cn/post/711358…</a> <a href="https://link.juejin.cn/?target=https%3A%2F%2Fblog.csdn.net%2Flongxiaobao123%2Farticle%2Fdetails%2F128784119%25E5%25B0%2581%25E8%25A3%2585%25E4%25B8%2580%25E4%25B8%25AA%25E5%25BC%25B9%25E7%25AA%2597" title="https://blog.csdn.net/longxiaobao123/article/details/128784119%E5%B0%81%E8%A3%85%E4%B8%80%E4%B8%AA%E5%BC%B9%E7%AA%97" target="_blank" rel="noreferrer">blog.csdn.net/longxiaobao…</a></p><p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fblog.csdn.net%2Fqq_39197547%2Farticle%2Fdetails%2F125740319%3Fspm%3D1001.2101.3001.6661.1%26utm_medium%3Ddistribute.pc_relevant_t0.none-task-blog-2%257Edefault%257ECTRLIST%257EPayColumn-1-125740319-blog-127127644.pc_relevant_default%26depth_1-utm_source%3Ddistribute.pc_relevant_t0.none-task-blog-2%257Edefault%257ECTRLIST%257EPayColumn-1-125740319-blog-127127644.pc_relevant_default%26utm_relevant_index%3D1" title="https://blog.csdn.net/qq_39197547/article/details/125740319?spm=1001.2101.3001.6661.1&amp;utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7EPayColumn-1-125740319-blog-127127644.pc_relevant_default&amp;depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7EPayColumn-1-125740319-blog-127127644.pc_relevant_default&amp;utm_relevant_index=1" target="_blank" rel="noreferrer">blog.csdn.net/qq_39197547…</a></p></blockquote>`,47),b=[p];function r(o,c,t,i,u,m){return n(),a("div",null,b)}const h=s(e,[["render",r]]);export{y as __pageData,h as default};
