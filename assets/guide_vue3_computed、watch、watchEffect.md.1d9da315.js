import{_ as s,o as a,c as n,N as e}from"./chunks/framework.60272d8a.js";const h=JSON.parse('{"title":"【Vue3】computed、watch、watchEffect","description":"","frontmatter":{},"headers":[],"relativePath":"guide/vue3/computed、watch、watchEffect.md","lastUpdated":1706686109000}'),l={name:"guide/vue3/computed、watch、watchEffect.md"},p=e(`<h1 id="【vue3】computed、watch、watcheffect" tabindex="-1">【Vue3】computed、watch、watchEffect <a class="header-anchor" href="#【vue3】computed、watch、watcheffect" aria-label="Permalink to &quot;【Vue3】computed、watch、watchEffect&quot;">​</a></h1><h2 id="先比较一下" tabindex="-1">先比较一下 <a class="header-anchor" href="#先比较一下" aria-label="Permalink to &quot;先比较一下&quot;">​</a></h2><p>三者都是侦听工具，实现的是观察者模式，所以我们可以把三者放在一起，做一下横向对比，辅助大家理解。</p><table><thead><tr><th>对比依据</th><th>computed</th><th>watch</th><th>watchEffect</th></tr></thead><tbody><tr><td>是否自动收集依赖（1）</td><td>自动</td><td>需要指定依赖对象</td><td>自动</td></tr><tr><td>有无返回值</td><td>有</td><td>无</td><td>有</td></tr><tr><td>是否可以赋值</td><td>可以</td><td>不能</td><td>不能</td></tr><tr><td>使用场景</td><td>简单情况</td><td>复杂情况</td><td>简单情况</td></tr><tr><td>是否立即执行</td><td>是</td><td>看参数（2）</td><td>是</td></tr><tr><td>本质</td><td>class</td><td>function</td><td>function</td></tr></tbody></table><ul><li>（1）依赖：指的是响应性依赖，也就是侦听 ref、reactive 这类具有响应性的对象。</li><li>（2）watch：默认情况下，被侦听对象变化时才会执行，但是可以通过 options 参数设置为可以立即执行</li></ul><h2 id="computed" tabindex="-1">computed <a class="header-anchor" href="#computed" aria-label="Permalink to &quot;computed&quot;">​</a></h2><p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2Fapi%2Freactivity-core.html%23computed" title="https://cn.vuejs.org/api/reactivity-core.html#computed" target="_blank" rel="noreferrer">computed</a> 这个单词比较有误导性，看表面是计算用的，但是除了计算之外还可以有其他的功能，比如做个判断、做个序列化、赋值等。</p><p><strong>但这些都不是重点，重点是，它和 watch 一样，是侦听用的。</strong></p><p>自动侦听 getter 里有响应性的对象，当发生变化时重新执行一次 get 函数，将返回结果存入 _value 缓存，并且通知 template 刷新页面。</p><p>所以说，计不计算的不是重点，侦听才是重点。</p><h2 id="基础示例" tabindex="-1">基础示例 <a class="header-anchor" href="#基础示例" aria-label="Permalink to &quot;基础示例&quot;">​</a></h2><p>举个例子，我想在网页里看看对象的序列化，用 computed 的实现方式：</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">  </span><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> model </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">reactive</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">演示一下</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> json </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">computed</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stringify</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">model</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>定义一个 reactive 和 一个 computed，使用 JSON.stringify 实现序列化。</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">el-input</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">json</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:rows</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">5</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">textarea</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  &gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">el-input</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>自动收集依赖，侦听 model 的变化，序列化之后交给 template 的 el-input。</p><p>这样我们就可以在网页里面实时看到对象的序列化情况了。</p><h2 id="结构和本质" tabindex="-1">结构和本质 <a class="header-anchor" href="#结构和本质" aria-label="Permalink to &quot;结构和本质&quot;">​</a></h2><p>我们打印一下 computed ，看看结构：</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3bba3756149c42fe95a9fd094ddbefa4~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?" alt="550computed的结构.jpg"></p><p>看起来挺复杂的，其实简化一下就简单了，主体是一个 class，其中有若干“私有成员”，然后用访问器实现我们常用的 value 属性，即：</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">myComputed</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">#_value</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">any</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">getter</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">_setter</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 设置内部成员</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 相关操作</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#C792EA;">get</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 相关操作，比如查看缓存是否需要更新</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">#_value</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#C792EA;">set</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">newValue</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 相关操作</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">_setter</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">newValue</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>主要结构是这样，当然还需要很多细节才能实现 computed 的功能，如果对细节感兴趣的话，可以看看 Vue 的源码。</p><h2 id="计算属性缓存" tabindex="-1">计算属性缓存 <a class="header-anchor" href="#计算属性缓存" aria-label="Permalink to &quot;计算属性缓存&quot;">​</a></h2><p>其实看看源码就好理解了，执行 get 方法时，会把返回值存入 _value ，template 直接从 _value 属性获取数据，在需要更新缓存的时候才会调用 getter，这样就实现了缓存功能。</p><p>也就是说，使用 _value 属性缓存了执行结果。</p><h2 id="可以赋值的方式" tabindex="-1">可以赋值的方式 <a class="header-anchor" href="#可以赋值的方式" aria-label="Permalink to &quot;可以赋值的方式&quot;">​</a></h2><p>computed 也可以开启赋值模式，方法就是传入一个对象，拥有 get 和 set 的对象，可以用在 props 在模板上的绑定。</p><p>props 的属性是只读的，不能用于 template 的 v-model，那么怎么办？我们可以使用 computed 的赋值模式作为中转站：</p><ul><li>子组件：</li></ul><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">  const props = defineProps&lt;{</span></span>
<span class="line"><span style="color:#babed8;">    modelValue: string</span></span>
<span class="line"><span style="color:#babed8;">  }&gt;()</span></span>
<span class="line"><span style="color:#babed8;">  const emit = defineEmits([&#39;update:modelValue&#39;])</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  const myName = computed({</span></span>
<span class="line"><span style="color:#babed8;">    get() {</span></span>
<span class="line"><span style="color:#babed8;">      return props.modelValue</span></span>
<span class="line"><span style="color:#babed8;">    },</span></span>
<span class="line"><span style="color:#babed8;">    set(value) {</span></span>
<span class="line"><span style="color:#babed8;">      emit(&#39;update:modelValue&#39;, value)</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">  })</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>在子组件里面定义 props 和 emit，然后可以用computed实现“中转”功能，get 里面获取 props 的属性值，set 里面使用 emit 提交更改申请。</p><p><strong>当然，现在 Vue3.3+ 推出了语法糖 <a href="https://juejin.cn/post/7233337405376954429" title="https://juejin.cn/post/7233337405376954429" target="_blank" rel="noreferrer">defineModel</a>，就不需要我们自己折腾了。</strong></p><h2 id="watch" tabindex="-1">watch <a class="header-anchor" href="#watch" aria-label="Permalink to &quot;watch&quot;">​</a></h2><p>composition API 的 <a href="https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2Fapi%2Freactivity-core.html%23watch" title="https://cn.vuejs.org/api/reactivity-core.html#watch" target="_blank" rel="noreferrer">watch</a> 非常好理解，他是一个函数，第一个参数要指定一个被侦听对象，第二个参数是回调函数，在被侦听的对象发生变化时，执行回调函数。（当初看option 的watch，怎么看都看不懂。。。）</p><h2 id="基础示例-1" tabindex="-1">基础示例 <a class="header-anchor" href="#基础示例-1" aria-label="Permalink to &quot;基础示例&quot;">​</a></h2><p>还是上面那个例子，我们看看用 watch 如何实现：（watch 并不适合实现这样的需求，这里仅做对比）</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">  const josn = ref(&#39;&#39;)</span></span>
<span class="line"><span style="color:#babed8;">  watch(model, () =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">    josn.value = JSON.stringify(model, null, 2)</span></span>
<span class="line"><span style="color:#babed8;">  })</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>我们先定义一个 ref，然后用 watch 侦听 model，发生变化的时候再做序列化的操作，给 ref 赋值。</p><p>对比一下就会发现，对于这种简单的需求，使用 watch 明显没有使用 computed 方便。</p><p>不过 watch 可以明确指定侦听的对象，这样对于复杂的情况就不容易乱，不用担心自动收集依赖，把不想被侦听的对象也给收集进来。</p><p>watch的更多用法可以看看<a href="https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2Fapi%2Freactivity-core.html%23watch" title="https://cn.vuejs.org/api/reactivity-core.html#watch" target="_blank" rel="noreferrer">官网</a></p><h2 id="watcheffect" tabindex="-1">watchEffect <a class="header-anchor" href="#watcheffect" aria-label="Permalink to &quot;watchEffect&quot;">​</a></h2><p>一开始没弄明白 <a href="https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2Fapi%2Freactivity-core.html%23watcheffect" title="https://cn.vuejs.org/api/reactivity-core.html#watcheffect" target="_blank" rel="noreferrer">watchEffect</a>，后来把三者放在一起一对比就好懂了。</p><ul><li>和 computed 对比，相当于没有返回值的 computed，当然也不能 set。</li><li>和 watch 对比，可以自动收集依赖，无需手动指定。</li></ul><p>这样想就清晰了，排列组合的结果。</p><p>是否自动收集依赖、是否有返回值组合一下，</p><ul><li>自动收集依赖、无返回：watchEffect</li><li>自动收集依赖、有返回：computed</li><li>需要指定依赖、无返回：watch</li></ul><p>那么需要指定依赖，还有返回的是谁呢？好像没有。。。</p><h2 id="基础示例-2" tabindex="-1">基础示例 <a class="header-anchor" href="#基础示例-2" aria-label="Permalink to &quot;基础示例&quot;">​</a></h2><p>还是上面那个例子：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">  const josn = ref(&#39;&#39;)</span></span>
<span class="line"><span style="color:#babed8;">  watchEffect(() =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">    josn.value = JSON.stringify(model, null, 2)</span></span>
<span class="line"><span style="color:#babed8;">  })</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>不需要自定侦听对象，而是像computed那样可以自动收集，然后还是当model变化时执行序列化的操作，赋值给 ref。</p><p><em>官网的例子只有一个 console.log ，还以为只是做调试用的呢。。。</em></p><p>当然 watchEffect 还有其的功能，比如停止侦听等，这里就不细说了，可以看看<a href="https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2Fapi%2Freactivity-core.html%23watcheffect" title="https://cn.vuejs.org/api/reactivity-core.html#watcheffect" target="_blank" rel="noreferrer">官网</a>。</p>`,55),t=[p];function o(c,r,i,d,u,b){return a(),n("div",null,t)}const m=s(l,[["render",o]]);export{h as __pageData,m as default};
