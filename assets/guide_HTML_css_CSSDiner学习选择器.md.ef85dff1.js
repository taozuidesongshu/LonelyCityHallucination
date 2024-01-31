import{_ as t,o as d,c as e,N as r}from"./chunks/framework.60272d8a.js";const f=JSON.parse(`{"title":"CSS：CSSDiner学习选择器 - 前端 | Lavender's Blog = lavender = 浩瀚众星，皆降为尘","description":"","frontmatter":{},"headers":[],"relativePath":"guide/HTML&css/CSSDiner学习选择器.md","lastUpdated":1706686109000}`),o={name:"guide/HTML&css/CSSDiner学习选择器.md"},l=r('<h1 id="css-cssdiner学习选择器-前端-lavender-s-blog-lavender-浩瀚众星-皆降为尘" tabindex="-1">CSS：CSSDiner学习选择器 - 前端 | Lavender&#39;s Blog = lavender = 浩瀚众星，皆降为尘 <a class="header-anchor" href="#css-cssdiner学习选择器-前端-lavender-s-blog-lavender-浩瀚众星-皆降为尘" aria-label="Permalink to &quot;CSS：CSSDiner学习选择器 - 前端 | Lavender&#39;s Blog = lavender = 浩瀚众星，皆降为尘&quot;">​</a></h1><p>有些关卡有多种方法，第一种标准方法按照右侧指定的格式，其他举一反三；很多其实复杂化了，看看就好</p><table><thead><tr><th>选择器</th><th>例子</th><th>例子描述</th></tr></thead><tbody><tr><td>.class</td><td>.intro</td><td>选择 class=&quot;intro&quot; 的所有元素。</td></tr><tr><td>.class1.class2</td><td>.name1.name2</td><td>选择 class 属性中同时有 name1 和 name2 的所有元素。</td></tr><tr><td>.class1 .class2</td><td>.name1 .name2</td><td>选择作为类名 name1 元素后代的所有类名 name2 元素。</td></tr><tr><td>#id</td><td>#firstname</td><td>选择 id=&quot;firstname&quot; 的元素。</td></tr><tr><td>*</td><td>*</td><td>选择所有元素。</td></tr><tr><td>element</td><td>p</td><td>选择所有 <code>&lt;p&gt;</code> 元素。</td></tr><tr><td>element.class</td><td>p.intro</td><td>选择 class=&quot;intro&quot; 的所有 <code>&lt;p&gt;</code> 元素。</td></tr><tr><td>element,element</td><td>div, p</td><td>选择所有 <code>&lt;div&gt;</code> 元素和所有 <code>&lt;p&gt;</code> 元素。</td></tr><tr><td>element element</td><td>div p</td><td>选择 <code>&lt;div&gt;</code> 元素内的所有 <code>&lt;p&gt;</code> 元素。</td></tr><tr><td>element&gt;element</td><td>div &gt; p</td><td>选择父元素是 <code>&lt;div&gt;</code> 的所有 <code>&lt;p&gt;</code> 元素。</td></tr><tr><td>element+element</td><td>div + p</td><td>选择紧跟 <code>&lt;div&gt;</code> 元素的首个 <code>&lt;p&gt;</code> 元素。</td></tr><tr><td>element1~element2</td><td>p ~ ul</td><td>选择前面有 <code>&lt;p&gt;</code> 元素的每个 <code>&lt;div&gt;</code> 元素。</td></tr><tr><td>[attribute]</td><td>[target]</td><td>选择带有 target 属性的所有元素。</td></tr><tr><td>[attribute=value]</td><td>[target=_blank]</td><td>选择带有 target=&quot;_blank&quot; 属性的所有元素。</td></tr><tr><td>[attribute~=value]</td><td>[title~=flower]</td><td>选择 title 属性包含单词 &quot;flower&quot; 的所有元素。</td></tr><tr><td>[attribute</td><td>=value]</td><td>[lang</td></tr><tr><td>[attribute^=value]</td><td>a[href^=&quot;https&quot;]</td><td>选择其 src 属性值以 &quot;https&quot; 开头的每个 <code>&lt;a&gt;</code> 元素。</td></tr><tr><td>[attribute$=value]</td><td>a[href$=&quot;.pdf&quot;]</td><td>选择其 src 属性以 &quot;.pdf&quot; 结尾的所有 <code>&lt;a&gt;</code> 元素。</td></tr><tr><td>[attribute*=value]</td><td>a[href*=&quot;w3schools&quot;]</td><td>选择其 href 属性值中包含 &quot;abc&quot; 子串的每个 <code>&lt;a&gt;</code> 元素。</td></tr><tr><td>:active</td><td>a:active</td><td>选择活动链接。</td></tr><tr><td>::after</td><td>p::after</td><td>在每个 <code>&lt;p&gt;</code> 的内容之后插入内容。</td></tr><tr><td>::before</td><td>p::before</td><td>在每个 <code>&lt;p&gt;</code> 的内容之前插入内容。</td></tr><tr><td>:checked</td><td>input:checked</td><td>选择每个被选中的 <code>&lt;input&gt;</code> 元素。</td></tr><tr><td>:default</td><td>input:default</td><td>选择默认的 <code>&lt;input&gt;</code> 元素。</td></tr><tr><td>:disabled</td><td>input:disabled</td><td>选择每个被禁用的 <code>&lt;input&gt;</code> 元素。</td></tr><tr><td>:empty</td><td>p:empty</td><td>选择没有子元素的每个 <code>&lt;p&gt;</code> 元素（包括文本节点）。</td></tr><tr><td>:enabled</td><td>input:enabled</td><td>选择每个启用的 <code>&lt;input&gt;</code> 元素。</td></tr><tr><td>:first-child</td><td>p:first-child</td><td>选择属于父元素的第一个子元素的每个 <code>&lt;p&gt;</code> 元素。</td></tr><tr><td>::first-letter</td><td>p::first-letter</td><td>选择每个 <code>&lt;p&gt;</code> 元素的首字母。</td></tr><tr><td>::first-line</td><td>p::first-line</td><td>选择每个 <code>&lt;p&gt;</code> 元素的首行。</td></tr><tr><td>:first-of-type</td><td>p:first-of-type</td><td>选择属于其父元素的首个 <code>&lt;p&gt;</code> 元素的每个 <code>&lt;p&gt;</code> 元素。</td></tr><tr><td>:focus</td><td>input:focus</td><td>选择获得焦点的 input 元素。</td></tr><tr><td>:fullscreen</td><td>:fullscreen</td><td>选择处于全屏模式的元素。</td></tr><tr><td>:hover</td><td>a:hover</td><td>选择鼠标指针位于其上的链接。</td></tr><tr><td>:in-range</td><td>input:in-range</td><td>选择其值在指定范围内的 input 元素。</td></tr><tr><td>:indeterminate</td><td>input:indeterminate</td><td>选择处于不确定状态的 input 元素。</td></tr><tr><td>:invalid</td><td>input:invalid</td><td>选择具有无效值的所有 input 元素。</td></tr><tr><td>:lang(language)</td><td>p:lang(it)</td><td>选择 lang 属性等于 &quot;it&quot;（意大利）的每个 <code>&lt;p&gt;</code> 元素。</td></tr><tr><td>:last-child</td><td>p:last-child</td><td>选择属于其父元素最后一个子元素每个 <code>&lt;p&gt;</code> 元素。</td></tr><tr><td>:last-of-type</td><td>p:last-of-type</td><td>选择属于其父元素的最后 <code>&lt;p&gt;</code> 元素的每个 <code>&lt;p&gt;</code> 元素。</td></tr><tr><td>:link</td><td>a:link</td><td>选择所有未访问过的链接。</td></tr><tr><td>:not(selector)</td><td>:not(p)</td><td>选择非 <code>&lt;p&gt;</code> 元素的每个元素。</td></tr><tr><td>:nth-child(n)</td><td>p:nth-child(2)</td><td>选择属于其父元素的第二个子元素的每个 <code>&lt;p&gt;</code> 元素。</td></tr><tr><td>:nth-last-child(n)</td><td>p:nth-last-child(2)</td><td>同上，从最后一个子元素开始计数。</td></tr><tr><td>:nth-of-type(n)</td><td>p:nth-of-type(2)</td><td>选择属于其父元素第二个 <code>&lt;p&gt;</code> 元素的每个 <code>&lt;p&gt;</code> 元素。</td></tr><tr><td>:nth-last-of-type(n)</td><td>p:nth-last-of-type(2)</td><td>同上，但是从最后一个子元素开始计数。</td></tr><tr><td>:only-of-type</td><td>p:only-of-type</td><td>选择属于其父元素唯一的 <code>&lt;p&gt;</code> 元素的每个 <code>&lt;p&gt;</code> 元素。</td></tr><tr><td>:only-child</td><td>p:only-child</td><td>选择属于其父元素的唯一子元素的每个 <code>&lt;p&gt;</code> 元素。</td></tr><tr><td>:nth-child(odd)</td><td>p:nth-child(odd)</td><td>选择属于其父元素的奇数个子元素的每个 <code>&lt;p&gt;</code> 元素。</td></tr><tr><td>:nth-child(even)</td><td>:nth-child(even)</td><td>选择属于其父元素的偶数个子元素的每个 <code>&lt;p&gt;</code> 元素。</td></tr><tr><td>:nth-child(2n+3)</td><td>:nth-child(2n+3)</td><td>选择属于其父元素的 2n+3 个子元素的每个 <code>&lt;p&gt;</code> 元素。</td></tr><tr><td>:optional</td><td>input:optional</td><td>选择不带 &quot;required&quot; 属性的 input 元素。</td></tr><tr><td>:out-of-range</td><td>input:out-of-range</td><td>选择值超出指定范围的 input 元素。</td></tr><tr><td>::placeholder</td><td>input::placeholder</td><td>选择已规定 &quot;placeholder&quot; 属性的 input 元素。</td></tr><tr><td>:read-only</td><td>input:read-only</td><td>选择已规定 &quot;readonly&quot; 属性的 input 元素。</td></tr><tr><td>:read-write</td><td>input:read-write</td><td>选择未规定 &quot;readonly&quot; 属性的 input 元素。</td></tr><tr><td>:required</td><td>input:required</td><td>选择已规定 &quot;required&quot; 属性的 input 元素。</td></tr><tr><td>:root</td><td>:root</td><td>选择文档的根元素。</td></tr><tr><td>::selection</td><td>::selection</td><td>选择用户已选取的元素部分。</td></tr><tr><td>:target</td><td>#news:target</td><td>选择当前活动的 #news 元素。</td></tr><tr><td>:valid</td><td>input:valid</td><td>选择带有有效值的所有 input 元素。</td></tr><tr><td>:visited</td><td>a:visited</td><td>选择所有已访问的链接。</td></tr><tr><td></td><td></td><td></td></tr></tbody></table><h2 id="css-选择器优先级" tabindex="-1"><a href="https://www.lavenderdh.cn/posts/1419053408/#css%E9%80%89%E6%8B%A9%E5%99%A8%E4%BC%98%E5%85%88%E7%BA%A7" target="_blank" rel="noreferrer">#</a> CSS 选择器优先级 <a class="header-anchor" href="#css-选择器优先级" aria-label="Permalink to &quot;[#](https://www.lavenderdh.cn/posts/1419053408/#css%E9%80%89%E6%8B%A9%E5%99%A8%E4%BC%98%E5%85%88%E7%BA%A7) CSS 选择器优先级&quot;">​</a></h2><blockquote><p>总结排序：!important &gt; 行内样式 &gt; ID 选择器 &gt; 类选择器 &gt; 标签 &gt; 通配符 &gt; 继承 &gt; 浏览器默认属性</p></blockquote><ul><li><p>！important 规则最重要，大于其它规则<br> 行内样式规则，加 1000<br> 对于选择器中给定的各个 ID 属性值，加 100<br> 对于选择器中给定的各个类属性、属性选择器或者伪类选择器，加 10<br> 对于选择其中给定的各个元素标签选择器，加 1<br> 如果权值一样，则按照样式规则的先后顺序来应用，顺序靠后的覆盖靠前的规则</p></li><li><p>注意：通用选择器（*）、子选择器（&gt;）和相邻同胞选择器（+）并不在这四个等级中，所以他们的权值都为 0。 权重值大的选择器其优先级也高，相同权重的优先级又遵循后定义覆盖前面定义的情况。</p></li></ul>',6),n=[l];function c(a,i,p,s,u,g){return d(),e("div",null,n)}const q=t(o,[["render",c]]);export{f as __pageData,q as default};
