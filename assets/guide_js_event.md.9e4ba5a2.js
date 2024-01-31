import{_ as s,o as n,c as a,N as l}from"./chunks/framework.60272d8a.js";const u=JSON.parse('{"title":"event的用法——如何获取当前兄弟元素，子元素，父元素","description":"","frontmatter":{},"headers":[],"relativePath":"guide/js/event.md","lastUpdated":1706686109000}'),p={name:"guide/js/event.md"},e=l(`<h1 id="event的用法——如何获取当前兄弟元素-子元素-父元素" tabindex="-1">event的用法——如何获取当前兄弟元素，子元素，父元素 <a class="header-anchor" href="#event的用法——如何获取当前兄弟元素-子元素-父元素" aria-label="Permalink to &quot;event的用法——如何获取当前兄弟元素，子元素，父元素&quot;">​</a></h1><h2 id="vue中使用" tabindex="-1">vue中使用 <a class="header-anchor" href="#vue中使用" aria-label="Permalink to &quot;vue中使用&quot;">​</a></h2><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">   </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> @click=&quot;getEvent($event)&quot;&gt;点击&lt;/button&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">   &lt;/div&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#89DDFF;"> </span></span>
<span class="line"><span style="color:#89DDFF;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">   </span><span style="color:#C792EA;">export</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">default</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#82AAFF;">data</span><span style="color:#BABED8;">()</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">        return</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">      methods:</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">         </span><span style="color:#F07178;">getEvent</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">e</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">           </span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">e</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">           </span><span style="color:#676E95;font-style:italic;">// e.target 是你当前点击的元素</span></span>
<span class="line"><span style="color:#89DDFF;">           </span><span style="color:#676E95;font-style:italic;">// e.currentTarget 是你绑定事件的元素</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#89DDFF;">           </span><span style="color:#676E95;font-style:italic;">// 获得点击元素的前一个元素</span></span>
<span class="line"><span style="color:#89DDFF;">           </span><span style="color:#676E95;font-style:italic;">// e.currentTarget.previousElementSibling.innerHTML</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#89DDFF;">           </span><span style="color:#676E95;font-style:italic;">// 获得点击元素的第一个子元素</span></span>
<span class="line"><span style="color:#89DDFF;">           </span><span style="color:#676E95;font-style:italic;">// e.currentTarget.firstElementChild</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#89DDFF;">           </span><span style="color:#676E95;font-style:italic;">// 获得点击元素的下一个元素</span></span>
<span class="line"><span style="color:#89DDFF;">           </span><span style="color:#676E95;font-style:italic;">// e.currentTarget.nextElementSibling</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#89DDFF;">           </span><span style="color:#676E95;font-style:italic;">// 获得点击元素中id为string的元素</span></span>
<span class="line"><span style="color:#89DDFF;">           </span><span style="color:#676E95;font-style:italic;">// e.currentTarget.getElementById(&quot;string&quot;)</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#89DDFF;">           </span><span style="color:#676E95;font-style:italic;">// 获得点击元素的string属性</span></span>
<span class="line"><span style="color:#89DDFF;">           </span><span style="color:#676E95;font-style:italic;">// e.currentTarget.getAttributeNode(&#39;string&#39;)</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#89DDFF;">           </span><span style="color:#676E95;font-style:italic;">// 获得点击元素的父级元素</span></span>
<span class="line"><span style="color:#89DDFF;">           </span><span style="color:#676E95;font-style:italic;">// e.currentTarget.parentElement</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#89DDFF;">           </span><span style="color:#676E95;font-style:italic;">// 获得点击元素的前一个元素的第一个子元素的HTML值</span></span>
<span class="line"><span style="color:#89DDFF;">           </span><span style="color:#676E95;font-style:italic;">// e.currentTarget.previousElementSibling.firstElementChild.innerHTML</span></span>
<span class="line"><span style="color:#F07178;">         </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">   </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#89DDFF;"> </span></span>
<span class="line"><span style="color:#89DDFF;"> </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div>`,3),t=[e];function r(o,c,i,y,F,D){return n(),a("div",null,t)}const m=s(p,[["render",r]]);export{u as __pageData,m as default};
