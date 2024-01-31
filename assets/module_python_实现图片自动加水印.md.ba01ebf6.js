import{_ as s,o as n,c as a,N as l}from"./chunks/framework.60272d8a.js";const B=JSON.parse('{"title":"python 实现图片自动加水印","description":"","frontmatter":{},"headers":[],"relativePath":"module/python/实现图片自动加水印.md","lastUpdated":1706686109000}'),p={name:"module/python/实现图片自动加水印.md"},o=l(`<h1 id="python-实现图片自动加水印" tabindex="-1">python 实现图片自动加水印 <a class="header-anchor" href="#python-实现图片自动加水印" aria-label="Permalink to &quot;python 实现图片自动加水印&quot;">​</a></h1><blockquote><p>由于我用的是 GitHub 图层，配合 utools 的图床工具上传，但没有加水印功能，于是打算利用 github action 自动加水印。</p></blockquote><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> PIL </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> Image</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> ImageDraw</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> ImageFont</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">img </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> Image</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">open</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test.png</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#BABED8;">text </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">御驾亲征</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 字体 注意换成自己的字体</span></span>
<span class="line"><span style="color:#BABED8;">font </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> ImageFont</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">truetype</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Shouxieti.ttf</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">75</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 将图片转为图层</span></span>
<span class="line"><span style="color:#BABED8;">layer </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> img</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">convert</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">RGBA</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#生成对应图片</span></span>
<span class="line"><span style="color:#BABED8;">text_layer </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> Image</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">new</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">RGBA</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">img</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">size</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">]*</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;">img</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">size</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]*</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">),</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">255</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">255</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">255</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">))</span></span>
<span class="line"><span style="color:#BABED8;">Image_draw </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> ImageDraw</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Draw</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">text_layer</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">#画图</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#获取文本大小</span></span>
<span class="line"><span style="color:#BABED8;">textsize_x</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> textsize_y </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> Image_draw</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">textsize</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">text</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#BABED8;font-style:italic;">font</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">font</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#BABED8;">nums </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">max</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">round</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">layer</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">size</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">]</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">/</span><span style="color:#82AAFF;"> textsize_x</span><span style="color:#89DDFF;">),</span><span style="color:#82AAFF;"> round</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">layer</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">size</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">/</span><span style="color:#82AAFF;"> textsize_y</span><span style="color:#89DDFF;">))</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">nums</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#BABED8;"> i </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">range </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;">nums</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#BABED8;"> j </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">range</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;">nums</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#676E95;font-style:italic;">#设置文本文字位置</span></span>
<span class="line"><span style="color:#BABED8;">        text_xy </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">textsize_x</span><span style="color:#89DDFF;">*(</span><span style="color:#BABED8;">i</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)*</span><span style="color:#F78C6C;">1.5</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;">textsize_y</span><span style="color:#89DDFF;">*(</span><span style="color:#BABED8;">j</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)*</span><span style="color:#F78C6C;">2.5</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;"># 设置文本颜色和透明度位置</span></span>
<span class="line"><span style="color:#BABED8;">        Image_draw</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">text</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">text_xy</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> text</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#BABED8;font-style:italic;">font</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">font</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#BABED8;font-style:italic;">fill</span><span style="color:#89DDFF;">=(</span><span style="color:#F78C6C;">255</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">255</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">255</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">50</span><span style="color:#89DDFF;">))</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 将新图层旋转45度后裁剪和图片一样大，新图层必须和图片一样大，否则无法合并</span></span>
<span class="line"><span style="color:#BABED8;">text_layer </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> text_layer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">rotate</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">45</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#BABED8;">text_layer </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> text_layer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">crop</span><span style="color:#89DDFF;">((</span><span style="color:#82AAFF;">text_layer</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">size</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">]/</span><span style="color:#F78C6C;">2</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">-</span><span style="color:#82AAFF;"> img</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">size</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">]/</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> text_layer</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">size</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]/</span><span style="color:#F78C6C;">2</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">-</span><span style="color:#82AAFF;"> img</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">size</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]/</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> text_layer</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">size</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">]/</span><span style="color:#F78C6C;">2</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">+</span><span style="color:#82AAFF;"> img</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">size</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">]/</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> text_layer</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">size</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]/</span><span style="color:#F78C6C;">2</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">+</span><span style="color:#82AAFF;"> img</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">size</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]/</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 合并图层</span></span>
<span class="line"><span style="color:#BABED8;">after </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> Image</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">alpha_composite</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">layer</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> text_layer</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#BABED8;">after</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">save</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">output.png</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div>`,3),e=[o];function t(F,r,c,y,D,A){return n(),a("div",null,e)}const C=s(p,[["render",t]]);export{B as __pageData,C as default};
