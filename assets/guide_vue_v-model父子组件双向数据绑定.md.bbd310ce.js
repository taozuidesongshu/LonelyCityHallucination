import{_ as s,o as n,c as a,N as l}from"./chunks/framework.60272d8a.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"guide/vue/v-model父子组件双向数据绑定.md","lastUpdated":1706686109000}'),p={name:"guide/vue/v-model父子组件双向数据绑定.md"},e=l(`<h2 id="v-model在自定义组件上的使用" tabindex="-1">v-model在自定义组件上的使用 <a class="header-anchor" href="#v-model在自定义组件上的使用" aria-label="Permalink to &quot;v-model在自定义组件上的使用&quot;">​</a></h2><h3 id="通常我们看到v-model都会想到input输入框啥的-其实不仅仅是在input上可以双向数据绑定-同时可以作用在父子组件通信上。" tabindex="-1">通常我们看到v-model都会想到input输入框啥的，其实不仅仅是在input上可以双向数据绑定，同时可以作用在父子组件通信上。 <a class="header-anchor" href="#通常我们看到v-model都会想到input输入框啥的-其实不仅仅是在input上可以双向数据绑定-同时可以作用在父子组件通信上。" aria-label="Permalink to &quot;通常我们看到v-model都会想到input输入框啥的，其实不仅仅是在input上可以双向数据绑定，同时可以作用在父子组件通信上。&quot;">​</a></h3><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#BABED8;">!</span><span style="color:#F07178;">DOCTYPE</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">&lt;html lang=&quot;zh-cn&quot;&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  &lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot; /&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  &lt;title&gt;&lt;/title&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  &lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;./fontFace.css&quot;&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  &lt;script crossorigin=&quot;anonymous&quot; integrity=&quot;sha384-+jvb+jCJ37FkNjPyYLI3KJzQeD8pPFXUra3B/QJFqQ3txYrUPIP1eOfxK4h3cKZP&quot;</span></span>
<span class="line"><span style="color:#BABED8;">          src=&quot;https://lib.baomitu.com/vue/2.6.11/vue.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">&lt;/head&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#BABED8;">&lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  &lt;div class=&quot;details&quot;&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    &lt;my-component v-model=&#39;show&#39; style=&quot;border:1px solid #ccc;&quot;&gt;&lt;/my-component&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    &lt;button @click=&quot;changeValue&quot;&gt;切换状态&lt;/button&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    {{show}}</span></span>
<span class="line"><span style="color:#BABED8;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#BABED8;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#BABED8;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#BABED8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  Vue.component(&#39;my-component&#39;, {</span></span>
<span class="line"><span style="color:#BABED8;">    template: \`&lt;div v-if=&quot;value&quot;&gt;</span></span>
<span class="line"><span style="color:#BABED8;">                &lt;p&gt;默认初始值是{{value}}，所以是显示的&lt;/p&gt;</span></span>
<span class="line"><span style="color:#BABED8;">                &lt;button @click.stop=&quot;closeDiv&quot;&gt;关闭&lt;/button&gt;</span></span>
<span class="line"><span style="color:#BABED8;">             &lt;/div&gt;\`,</span></span>
<span class="line"><span style="color:#BABED8;">    props: [&#39;value&#39;], //这个接收值必须是value，固定的</span></span>
<span class="line"><span style="color:#BABED8;">    /*props: {</span></span>
<span class="line"><span style="color:#BABED8;">     value: {</span></span>
<span class="line"><span style="color:#BABED8;">     type: Boolean,</span></span>
<span class="line"><span style="color:#BABED8;">     default: false</span></span>
<span class="line"><span style="color:#BABED8;">     },</span></span>
<span class="line"><span style="color:#BABED8;">     },*/</span></span>
<span class="line"><span style="color:#BABED8;">    methods: {</span></span>
<span class="line"><span style="color:#BABED8;">      closeDiv() {</span></span>
<span class="line"><span style="color:#BABED8;">        //触发 input 事件，并传入新值，注意，这个input是搭配v-model的固定写法</span></span>
<span class="line"><span style="color:#BABED8;">        this.$emit(&#39;input&#39;, false);</span></span>
<span class="line"><span style="color:#BABED8;">      }</span></span>
<span class="line"><span style="color:#BABED8;">    }</span></span>
<span class="line"><span style="color:#BABED8;">  })</span></span>
<span class="line"><span style="color:#BABED8;">  new Vue({</span></span>
<span class="line"><span style="color:#BABED8;">    el: &quot;#app&quot;,</span></span>
<span class="line"><span style="color:#BABED8;">    data() {</span></span>
<span class="line"><span style="color:#BABED8;">      return {</span></span>
<span class="line"><span style="color:#BABED8;">        show: true,</span></span>
<span class="line"><span style="color:#BABED8;">      }</span></span>
<span class="line"><span style="color:#BABED8;">    },</span></span>
<span class="line"><span style="color:#BABED8;">    methods: {</span></span>
<span class="line"><span style="color:#BABED8;">      changeValue() {</span></span>
<span class="line"><span style="color:#BABED8;">        this.show = !this.show</span></span>
<span class="line"><span style="color:#BABED8;">      }</span></span>
<span class="line"><span style="color:#BABED8;">    }</span></span>
<span class="line"><span style="color:#BABED8;">  })</span></span>
<span class="line"><span style="color:#BABED8;">&lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">&lt;/html&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br></div></div><h3 id="如何改变固定属性value" tabindex="-1">如何改变固定属性value <a class="header-anchor" href="#如何改变固定属性value" aria-label="Permalink to &quot;如何改变固定属性value&quot;">​</a></h3><p>上面案例中所说的子组件中接收值必须是value，其实vue.js也没有那么笨拙，修改也是可以的，只是代码就没那么清爽了，当然，value作为一个常用关键词，能规避还是规避下比较好，将上面script部分改为下面内容即可！</p><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">	Vue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">component</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">my-component</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">&lt;div v-if=&quot;zdy&quot;&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">                &lt;p&gt;默认初始值是{{zdy}}，所以是显示的&lt;/p&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">                &lt;button @click.stop=&quot;closeDiv&quot;&gt;关闭&lt;/button&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">             &lt;/div&gt;</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#F07178;">model</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">// props：设置收到父组件v-model绑定的属性名，默认就是value</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#F07178;">prop</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">zdy</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">// event：设置this.$emit的事件名，默认是&#39;input&#39;&#39;</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#F07178;">event</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">zidingyi</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">// props: [&#39;value&#39;], //这个接收值默认是value</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#F07178;">props</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#F07178;">zdy</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> Boolean</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#F07178;">default</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#F07178;">methods</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#F07178;">closeDiv</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">//触发 input 事件，并传入新值，注意，通过v-model方式事件名默认是&#39;input&#39;，可以通过model去修改</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">// this.$emit(&#39;input&#39;, false);</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">$emit</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">zidingyi</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#89DDFF;">new</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">Vue</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#F07178;">el</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	show</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#F07178;">methods</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#F07178;">changeValue</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">show</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!this.</span><span style="color:#BABED8;">show</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><h3 id="通过v-model方式特别简洁清爽-比async修饰符显得更简单" tabindex="-1">通过v-model方式特别简洁清爽，比async修饰符显得更简单 <a class="header-anchor" href="#通过v-model方式特别简洁清爽-比async修饰符显得更简单" aria-label="Permalink to &quot;通过v-model方式特别简洁清爽，比async修饰符显得更简单&quot;">​</a></h3><p>当然也可以直接在子组件内，修改v-model的值，不用this.$emit</p>`,8),o=[e];function t(c,r,i,D,y,u){return n(),a("div",null,o)}const B=s(p,[["render",t]]);export{F as __pageData,B as default};
