import{_ as s,o as a,c as n,N as l}from"./chunks/framework.60272d8a.js";const B=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/数据库/Node.js+Mongodb数据库常用基本操作.md","lastUpdated":1706686109000}'),p={name:"knowledge/数据库/Node.js+Mongodb数据库常用基本操作.md"},o=l(`<h3 id="记录node-js-mongodb数据库一些常用基本操作方法" tabindex="-1">记录Node.js+Mongodb数据库一些常用基本操作方法 <a class="header-anchor" href="#记录node-js-mongodb数据库一些常用基本操作方法" aria-label="Permalink to &quot;记录Node.js+Mongodb数据库一些常用基本操作方法&quot;">​</a></h3><h2 id="新增数据" tabindex="-1">新增数据 <a class="header-anchor" href="#新增数据" aria-label="Permalink to &quot;新增数据&quot;">​</a></h2><ul><li>语法：db.集合名.save(文档)</li><li>说明：如果不指定_id字段，save()方法类似于insert()方法。如果指定_id字段，则会更新_id字段的数据</li><li>示例1：db.student.save({name:&quot;poi&quot;, age:22, gender:1,address:&quot;石家庄&quot;, isDelete:0})</li><li>示例2：db.student.save({_id:ObjectId(&quot;59950962019723fe2a0d8d17&quot;),name:&quot;poi&quot;, age:23, gender:1,address:&quot;石家庄&quot;, isDelete:0})</li></ul><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">router</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">post</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/setColor</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">async</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">next</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">try</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">Color</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">mongoose</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">model</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Color</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">newColor</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Color</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> colorValue</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">request</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">body</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">colorValue</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">newColor</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">save</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#BABED8;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">body</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        code</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        message</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">颜色值设置成功</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">catch</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">error</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">body</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> code</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">500</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> message</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">error</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="删除数据" tabindex="-1">删除数据 <a class="header-anchor" href="#删除数据" aria-label="Permalink to &quot;删除数据&quot;">​</a></h2><p>remove()方法已经过时了，现在官方推荐使用deleteOne()和deleteMany()方法。</p><p>deleteMany参数为{}时候删除全部</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#BABED8;"> Color</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">deleteMany</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">{}</span><span style="color:#BABED8;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>删除指定数据</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">db</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">inventory</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">deleteMany</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">status </span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">A</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="数据查询" tabindex="-1">数据查询 <a class="header-anchor" href="#数据查询" aria-label="Permalink to &quot;数据查询&quot;">​</a></h2><p>查询可能是我们用的最多的，通常有find、findOne、findById（参数是数据库默认生成的_id）</p><ul><li>findOne({ name: ”张三” })查询，返回的只会是第一个张三</li><li>find({ name: ”张三” })查询的话，就会返回所有张三了</li></ul><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">router</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/getColor</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">async</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">next</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">try</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">Color</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">mongoose</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">model</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Color</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">Color</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">find</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{},</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">err</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;font-style:italic;">res</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// {}为查询所有</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#BABED8;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">body</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        code</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        data</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">res</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sort</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">_id</span><span style="color:#89DDFF;">:-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 根据_id字段进行倒叙返回，默认1</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">catch</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">error</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">body</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> code</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">500</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> message</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">error</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="数据更新" tabindex="-1">数据更新 <a class="header-anchor" href="#数据更新" aria-label="Permalink to &quot;数据更新&quot;">​</a></h2><p>常用的有update、findByIdAndUpdate（参数是数据库默认生成的_id）</p><ul><li>参数说明：</li><li>query：update的查询条件，类似于sql里update语句内where后面的内容</li><li>update：update的对象和一些更新的操作符($set,$inc)等，$set直接更新，$inc在原有的基础上累加后更新</li><li>upset：可选，如果不存在update的记录，是否当新数据插入，true为插入，False为不插入，默认为false</li><li>multi：可选，mongodb默认是false，只更新找到的第一条记录，如果这个参数为true,就按照条件查找出来的数据全部更新</li></ul><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#BABED8;"> User</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">update</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">userName</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">小名同学</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">},{</span><span style="color:#F07178;">userName</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">QQ糖果</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">},</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">err</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">res</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">更新数据，欧耶</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;">err</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;">res</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#BABED8;"> User</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">findByIdAndUpdate</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">5d2da91b76accfce15fdfbfe</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">userName</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">修改id为5d2dxxxx的数据属性userName</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">},</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">err</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">res</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">err</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">err</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">res</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="查询条件操作符" tabindex="-1">查询条件操作符 <a class="header-anchor" href="#查询条件操作符" aria-label="Permalink to &quot;查询条件操作符&quot;">​</a></h2><p>作用：条件操作符用于比较两个表达式并从Mongodb集合中获取数据</p><h3 id="大于-gt" tabindex="-1">大于 - $gt <a class="header-anchor" href="#大于-gt" aria-label="Permalink to &quot;大于 - $gt&quot;">​</a></h3><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">语法：db</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">集合名</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">find</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;">&lt;key&gt;</span><span style="color:#89DDFF;">:{</span><span style="color:#F07178;">$gt</span><span style="color:#89DDFF;">:&lt;</span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">}})</span></span>
<span class="line"><span style="color:#BABED8;">示例：db.student.find(</span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;">age:</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">$gt</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">}}</span><span style="color:#BABED8;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="大于等于-gte" tabindex="-1">大于等于 - $gte <a class="header-anchor" href="#大于等于-gte" aria-label="Permalink to &quot;大于等于 - $gte&quot;">​</a></h3><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">语法：db</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">集合名</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">find</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;">&lt;key&gt;</span><span style="color:#89DDFF;">:{</span><span style="color:#F07178;">$gte</span><span style="color:#89DDFF;">:&lt;</span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">}})</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="小于-lt" tabindex="-1">小于 - $lt <a class="header-anchor" href="#小于-lt" aria-label="Permalink to &quot;小于 - $lt&quot;">​</a></h3><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">语法：db</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">集合名</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">find</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;">&lt;key&gt;</span><span style="color:#89DDFF;">:{</span><span style="color:#F07178;">$lt</span><span style="color:#89DDFF;">:&lt;</span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">}})</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="小于等于-lte" tabindex="-1">小于等于 - $lte <a class="header-anchor" href="#小于等于-lte" aria-label="Permalink to &quot;小于等于 - $lte&quot;">​</a></h3><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">语法：db</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">集合名</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">find</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;">&lt;key&gt;</span><span style="color:#89DDFF;">:{</span><span style="color:#F07178;">$lte</span><span style="color:#89DDFF;">:&lt;</span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">}})</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="大于等于-和-小于等于-gte-和-lte" tabindex="-1">大于等于 和 小于等于 - $gte 和 $lte <a class="header-anchor" href="#大于等于-和-小于等于-gte-和-lte" aria-label="Permalink to &quot;大于等于 和 小于等于 - $gte 和 $lte&quot;">​</a></h3><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">语法：db</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">集合名</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">find</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;">&lt;key&gt;</span><span style="color:#89DDFF;">:{</span><span style="color:#F07178;">$gte</span><span style="color:#89DDFF;">:&lt;</span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">,$lte:</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">}})</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="等于" tabindex="-1">等于 - : <a class="header-anchor" href="#等于" aria-label="Permalink to &quot;等于 - :&quot;">​</a></h3><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">语法：db</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">集合名</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">find</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;">&lt;key&gt;</span><span style="color:#89DDFF;">:&lt;</span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="使用-id进行查询" tabindex="-1">使用_id进行查询 <a class="header-anchor" href="#使用-id进行查询" aria-label="Permalink to &quot;使用\\_id进行查询&quot;">​</a></h3><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">语法：db</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">student</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">find</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">_id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;">ObjectId</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">id值</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span></span>
<span class="line"><span style="color:#BABED8;">示例：db</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">student</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">find</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">_id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;">ObjectId</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">5995084b019723fe2a0d8d14</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="查询某个结果集的数据条数" tabindex="-1">查询某个结果集的数据条数 <a class="header-anchor" href="#查询某个结果集的数据条数" aria-label="Permalink to &quot;查询某个结果集的数据条数&quot;">​</a></h3><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">db</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">student</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">find</span><span style="color:#BABED8;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">count</span><span style="color:#BABED8;">()</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="查询某个字段的值当中是否包含另一个值" tabindex="-1">查询某个字段的值当中是否包含另一个值 <a class="header-anchor" href="#查询某个字段的值当中是否包含另一个值" aria-label="Permalink to &quot;查询某个字段的值当中是否包含另一个值&quot;">​</a></h3><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">示例：db</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">student</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">find</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">ile</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="查询某个字段的值是否以另一个值开头" tabindex="-1">查询某个字段的值是否以另一个值开头 <a class="header-anchor" href="#查询某个字段的值是否以另一个值开头" aria-label="Permalink to &quot;查询某个字段的值是否以另一个值开头&quot;">​</a></h3><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">示例：db</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">student</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">find</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#C3E88D;">li</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="limit、skip" tabindex="-1">limit、skip <a class="header-anchor" href="#limit、skip" aria-label="Permalink to &quot;limit、skip&quot;">​</a></h2><ul><li>limit()：读取指定数量的数据记录，db.student.find().limit(3)</li><li>skip()：跳过指定数量的数据，db.student.find().skip(3)</li><li>skip与limit联合使用，通常用这种方式来实现分页功能，示例：db.student.find().skip(3).limit(3)</li></ul><h2 id="数据排序" tabindex="-1">数据排序 <a class="header-anchor" href="#数据排序" aria-label="Permalink to &quot;数据排序&quot;">​</a></h2><ul><li>语法：db.集合名.find().sort({:1|-1})</li><li>示例：db.student.find().sort({age:1})</li><li>注意：1表示升序，-1表示降序（如果用参数_id，最新的在最前面）</li></ul><h2 id="关联查询" tabindex="-1">关联查询 <a class="header-anchor" href="#关联查询" aria-label="Permalink to &quot;关联查询&quot;">​</a></h2><p>可以了解下:$lookup，aggregate</p><h2 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结" aria-label="Permalink to &quot;小结&quot;">​</a></h2><p>node最大的优势就是和js完美无缝对接，通过js对数据的操作也能达到一些我们想要的目的，这点很棒。</p>`,49),e=[o];function t(r,c,F,y,i,D){return a(),n("div",null,e)}const u=s(p,[["render",t]]);export{B as __pageData,u as default};
