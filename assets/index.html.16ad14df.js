import{_ as n,d as s}from"./app.2c8e1465.js";const a={},e=s(`<h2 id="_1-\u65B0\u5EFA-git-\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#_1-\u65B0\u5EFA-git-\u4ED3\u5E93" aria-hidden="true">#</a> 1. \u65B0\u5EFA git \u4ED3\u5E93</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5728\u5F53\u524D\u76EE\u5F55\u65B0\u5EFA\u4E00\u4E2A Git \u4ED3\u5E93</span>
<span class="token function">git</span> init

<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2A\u76EE\u5F55\uFF0C\u5C06\u5176\u521D\u59CB\u5316\u4E3A Git \u4ED3\u5E93</span>
<span class="token function">git</span> init <span class="token punctuation">[</span>project-name<span class="token punctuation">]</span>

<span class="token comment"># \u4E0B\u8F7D\u4E00\u4E2A\u9879\u76EE\u548C\u5B83\u7684\u6574\u4E2A\u4EE3\u7801\u5386\u53F2</span>
<span class="token function">git</span> clone <span class="token punctuation">[</span>url<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="_2-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_2-\u914D\u7F6E" aria-hidden="true">#</a> 2. \u914D\u7F6E</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u663E\u793A\u5F53\u524D\u7684Git\u914D\u7F6E</span>
<span class="token function">git</span> config --list

<span class="token comment"># \u8BBE\u7F6E\u63D0\u4EA4\u4EE3\u7801\u65F6\u7684\u7528\u6237\u4FE1\u606F</span>
<span class="token function">git</span> config <span class="token punctuation">[</span>--global<span class="token punctuation">]</span> user.name <span class="token string">&quot;\u540D\u79F0&quot;</span>
<span class="token function">git</span> config <span class="token punctuation">[</span>--global<span class="token punctuation">]</span> user.email <span class="token string">&quot;\u90AE\u7BB1\u5730\u5740&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="_3-\u5411\u6682\u5B58\u533A\u6DFB\u52A0-\u5220\u9664\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-\u5411\u6682\u5B58\u533A\u6DFB\u52A0-\u5220\u9664\u6587\u4EF6" aria-hidden="true">#</a> 3. \u5411\u6682\u5B58\u533A\u6DFB\u52A0 / \u5220\u9664\u6587\u4EF6</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6DFB\u52A0\u6307\u5B9A\u6587\u4EF6\u6216\u6307\u5B9A\u76EE\u5F55\u5230\u6682\u5B58\u533A</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token punctuation">[</span>\u6587\u4EF6\u8DEF\u5F84 / \u76EE\u5F55\u8DEF\u5F84<span class="token punctuation">]</span>

<span class="token comment"># \u6DFB\u52A0\u6240\u6709\u6587\u4EF6\u5230\u6682\u5B58\u533A</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>

<span class="token comment"># \u505C\u6B62\u8FFD\u8E2A\u6307\u5B9A\u6587\u4EF6\u5E76\u4FDD\u7559\u5728\u5DE5\u4F5C\u533A</span>
<span class="token function">git</span> <span class="token function">rm</span> --cached <span class="token punctuation">[</span>\u6587\u4EF6\u8DEF\u5F84<span class="token punctuation">]</span>

<span class="token comment"># \u5220\u9664\u5DE5\u4F5C\u533A\u6587\u4EF6\u5E76\u4E14\u63D0\u4EA4\u5230\u6682\u5B58\u533A</span>
<span class="token function">git</span> <span class="token function">rm</span> <span class="token punctuation">[</span>\u6587\u4EF6\u8DEF\u5F84<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="_4-\u4EE3\u7801\u63D0\u4EA4" tabindex="-1"><a class="header-anchor" href="#_4-\u4EE3\u7801\u63D0\u4EA4" aria-hidden="true">#</a> 4. \u4EE3\u7801\u63D0\u4EA4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u63D0\u4EA4\u6682\u5B58\u533A\u5230\u4ED3\u5E93\u533A</span>
<span class="token function">git</span> commit -m <span class="token punctuation">[</span>\u63D0\u4EA4\u4FE1\u606F<span class="token punctuation">]</span>

<span class="token comment"># \u66FF\u6362\u4E0A\u4E00\u6B21 commit\uFF08\u5982\u65E0\u4EE3\u7801\u6539\u52A8\uFF0C\u5C31\u91CD\u5199\u4E0A\u4E00\u6B21 commit \u7684\u63D0\u4EA4\u4FE1\u606F\uFF09</span>
<span class="token function">git</span> commit --amend -m <span class="token punctuation">[</span>\u63D0\u4EA4\u4FE1\u606F<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="_5-\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#_5-\u5206\u652F" aria-hidden="true">#</a> 5.\u5206\u652F</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5217\u51FA\u6240\u6709\u672C\u5730\u5206\u652F</span>
<span class="token function">git</span> branch

<span class="token comment"># \u5217\u51FA\u6240\u6709\u8FDC\u7A0B\u5206\u652F</span>
<span class="token function">git</span> branch -r

<span class="token comment"># \u5217\u51FA\u6240\u6709\u672C\u5730\u5206\u652F\u548C\u8FDC\u7A0B\u5206\u652F</span>
<span class="token function">git</span> branch -a

<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2A\u5206\u652F\uFF0C\u4F46\u4F9D\u7136\u505C\u7559\u5728\u5F53\u524D\u5206\u652F</span>
<span class="token function">git</span> branch <span class="token punctuation">[</span>\u5206\u652F\u540D<span class="token punctuation">]</span>

<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2A\u5206\u652F\uFF0C\u5E76\u5207\u6362\u5230\u8BE5\u5206\u652F</span>
<span class="token function">git</span> checkout -b <span class="token punctuation">[</span>\u5206\u652F\u540D<span class="token punctuation">]</span>

<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2A\u5206\u652F\uFF0C\u6307\u5411\u6307\u5B9Acommit</span>
<span class="token function">git</span> branch <span class="token punctuation">[</span>\u5206\u652F\u540D<span class="token punctuation">]</span> <span class="token punctuation">[</span>commit id<span class="token punctuation">]</span>

<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2A\u5206\u652F\uFF0C\u4E0E\u6307\u5B9A\u7684\u8FDC\u7A0B\u5206\u652F\u5EFA\u7ACB\u8FFD\u8E2A\u5173\u7CFB</span>
<span class="token function">git</span> branch --track <span class="token punctuation">[</span>\u5206\u652F\u540D<span class="token punctuation">]</span> <span class="token punctuation">[</span>\u8FDC\u7A0B\u5206\u652F\u540D<span class="token punctuation">]</span>

<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2A\u7A7A\u767D\u5206\u652F</span>
<span class="token function">git</span> checkout --orphan <span class="token punctuation">[</span>\u5206\u652F\u540D<span class="token punctuation">]</span>

<span class="token comment"># \u5207\u6362\u5230\u6307\u5B9A\u5206\u652F\uFF0C\u5E76\u66F4\u65B0\u5DE5\u4F5C\u533A</span>
<span class="token function">git</span> checkout <span class="token punctuation">[</span>\u5206\u652F\u540D<span class="token punctuation">]</span>

<span class="token comment"># \u5207\u6362\u5230\u4E0A\u4E00\u4E2A\u5206\u652F</span>
<span class="token function">git</span> checkout -

<span class="token comment"># \u5408\u5E76\u6307\u5B9A\u5206\u652F\u5230\u5F53\u524D\u5206\u652F</span>
<span class="token function">git</span> merge <span class="token punctuation">[</span>\u5206\u652F\u540D<span class="token punctuation">]</span>

<span class="token comment"># \u5220\u9664\u5206\u652F</span>
<span class="token function">git</span> branch -d <span class="token punctuation">[</span>\u5206\u652F\u540D<span class="token punctuation">]</span>

<span class="token comment"># \u5220\u9664\u8FDC\u7A0B\u5206\u652F</span>
<span class="token function">git</span> push origin --delete <span class="token punctuation">[</span>\u5206\u652F\u540D<span class="token punctuation">]</span>
<span class="token function">git</span> branch -dr <span class="token punctuation">[</span>remote/\u5206\u652F\u540D<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><h2 id="_6-\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#_6-\u6807\u7B7E" aria-hidden="true">#</a> 6.\u6807\u7B7E</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5217\u51FA\u6240\u6709 tag</span>
<span class="token function">git</span> tag

<span class="token comment"># \u6839\u636E\u5F53\u524D commit \u521B\u5EFA\u4E00\u4E2A tag</span>
<span class="token function">git</span> tag <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>

<span class="token comment"># \u6839\u636E\u6307\u5B9A commit \u521B\u5EFA\u4E00\u4E2A tag</span>
<span class="token function">git</span> tag <span class="token punctuation">[</span>tag<span class="token punctuation">]</span> <span class="token punctuation">[</span>commit id<span class="token punctuation">]</span>

<span class="token comment"># \u5220\u9664\u672C\u5730 tag</span>
<span class="token function">git</span> tag -d <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>

<span class="token comment"># \u5220\u9664\u8FDC\u7A0B tag</span>
<span class="token function">git</span> push origin :refs/tags/<span class="token punctuation">[</span>tagName<span class="token punctuation">]</span>

<span class="token comment"># \u67E5\u770B tag \u4FE1\u606F</span>
<span class="token function">git</span> show <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>

<span class="token comment"># \u63D0\u4EA4\u6307\u5B9Atag</span>
<span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>

<span class="token comment"># \u63D0\u4EA4\u6240\u6709tag</span>
<span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> --tags

<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2A\u5206\u652F\uFF0C\u6307\u5411\u67D0\u4E2Atag</span>
<span class="token function">git</span> checkout -b <span class="token punctuation">[</span>\u5206\u652F\u540D<span class="token punctuation">]</span> <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="_7-\u67E5\u770B\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#_7-\u67E5\u770B\u4FE1\u606F" aria-hidden="true">#</a> 7. \u67E5\u770B\u4FE1\u606F</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u663E\u793A\u53D8\u66F4\u7684\u6587\u4EF6</span>
<span class="token function">git</span> status

<span class="token comment"># \u663E\u793A\u5F53\u524D\u5206\u652F\u7684\u7248\u672C\u5386\u53F2</span>
<span class="token function">git</span> log

<span class="token comment"># \u663E\u793Acommit\u5386\u53F2\uFF0C\u4EE5\u53CA\u6BCF\u6B21commit\u53D1\u751F\u53D8\u66F4\u7684\u6587\u4EF6</span>
<span class="token function">git</span> log --stat

<span class="token comment"># \u641C\u7D22\u63D0\u4EA4\u5386\u53F2\uFF0C\u6839\u636E\u5173\u952E\u8BCD</span>
<span class="token function">git</span> log -S <span class="token punctuation">[</span>keyword<span class="token punctuation">]</span>

<span class="token comment"># \u663E\u793A\u67D0\u4E2A\u6587\u4EF6\u7684\u7248\u672C\u5386\u53F2\uFF0C\u5305\u62EC\u6587\u4EF6\u6539\u540D</span>
<span class="token function">git</span> log --follow <span class="token punctuation">[</span>\u6587\u4EF6\u8DEF\u5F84<span class="token punctuation">]</span>
<span class="token function">git</span> whatchanged <span class="token punctuation">[</span>\u6587\u4EF6\u8DEF\u5F84<span class="token punctuation">]</span>

<span class="token comment"># \u663E\u793A\u6307\u5B9A\u6587\u4EF6\u76F8\u5173\u7684\u6BCF\u4E00\u6B21diff</span>
<span class="token function">git</span> log -p <span class="token punctuation">[</span>\u6587\u4EF6\u8DEF\u5F84<span class="token punctuation">]</span>

<span class="token comment"># \u663E\u793A\u8FC7\u53BB5\u6B21\u63D0\u4EA4</span>
<span class="token function">git</span> log -5 --pretty --oneline

<span class="token comment"># \u663E\u793A\u6240\u6709\u63D0\u4EA4\u8FC7\u7684\u7528\u6237\uFF0C\u6309\u63D0\u4EA4\u6B21\u6570\u6392\u5E8F</span>
<span class="token function">git</span> shortlog -sn

<span class="token comment"># \u663E\u793A\u6307\u5B9A\u6587\u4EF6\u662F\u4EC0\u4E48\u4EBA\u5728\u4EC0\u4E48\u65F6\u95F4\u4FEE\u6539\u8FC7</span>
<span class="token function">git</span> blame <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># \u663E\u793A\u6682\u5B58\u533A\u548C\u5DE5\u4F5C\u533A\u7684\u5DEE\u5F02</span>
<span class="token function">git</span> <span class="token function">diff</span>

<span class="token comment"># \u663E\u793A\u5DE5\u4F5C\u533A\u4E0E\u5F53\u524D\u5206\u652F\u6700\u65B0 commit \u4E4B\u95F4\u7684\u5DEE\u5F02</span>
<span class="token function">git</span> <span class="token function">diff</span> HEAD

<span class="token comment"># \u663E\u793A\u4ECA\u5929\u4F60\u5199\u4E86\u591A\u5C11\u884C\u4EE3\u7801</span>
<span class="token function">git</span> <span class="token function">diff</span> --shortstat <span class="token string">&quot;@{0 day ago}&quot;</span>

<span class="token comment"># \u663E\u793A\u5F53\u524D\u5206\u652F\u7684\u6700\u8FD1\u51E0\u6B21\u63D0\u4EA4</span>
<span class="token function">git</span> reflog
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><h2 id="_8-\u63D0\u4EA4" tabindex="-1"><a class="header-anchor" href="#_8-\u63D0\u4EA4" aria-hidden="true">#</a> 8. \u63D0\u4EA4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4E0B\u8F7D\u8FDC\u7A0B\u4ED3\u5E93\u7684\u6240\u6709\u53D8\u52A8</span>
<span class="token function">git</span> fetch <span class="token punctuation">[</span>remote<span class="token punctuation">]</span>

<span class="token comment"># \u663E\u793A\u6240\u6709\u8FDC\u7A0B\u4ED3\u5E93</span>
<span class="token function">git</span> remote -v

<span class="token comment"># \u663E\u793A\u67D0\u4E2A\u8FDC\u7A0B\u4ED3\u5E93\u7684\u4FE1\u606F</span>
<span class="token function">git</span> remote show <span class="token punctuation">[</span>remote<span class="token punctuation">]</span>

<span class="token comment"># \u589E\u52A0\u4E00\u4E2A\u65B0\u7684\u8FDC\u7A0B\u4ED3\u5E93\uFF0C\u5E76\u547D\u540D</span>
<span class="token function">git</span> remote <span class="token function">add</span> <span class="token punctuation">[</span>shortname<span class="token punctuation">]</span> <span class="token punctuation">[</span>url<span class="token punctuation">]</span>

<span class="token comment"># \u53D6\u56DE\u8FDC\u7A0B\u4ED3\u5E93\u7684\u53D8\u5316\uFF0C\u5E76\u4E0E\u672C\u5730\u5206\u652F\u5408\u5E76</span>
<span class="token function">git</span> pull <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token punctuation">[</span>branch<span class="token punctuation">]</span>

<span class="token comment"># \u4E0A\u4F20\u672C\u5730\u6307\u5B9A\u5206\u652F\u5230\u8FDC\u7A0B\u4ED3\u5E93</span>
<span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token punctuation">[</span>branch<span class="token punctuation">]</span>

<span class="token comment"># \u5F3A\u884C\u63A8\u9001\u5F53\u524D\u5206\u652F\u5230\u8FDC\u7A0B\u4ED3\u5E93\uFF0C\u5373\u4F7F\u6709\u51B2\u7A81</span>
<span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> --force

<span class="token comment"># \u63A8\u9001\u6240\u6709\u5206\u652F\u5230\u8FDC\u7A0B\u4ED3\u5E93</span>
<span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> --all
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="_9-\u64A4\u9500" tabindex="-1"><a class="header-anchor" href="#_9-\u64A4\u9500" aria-hidden="true">#</a> 9. \u64A4\u9500</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u91CD\u7F6E\u6682\u5B58\u533A\u7684\u6307\u5B9A\u6587\u4EF6\uFF0C\u4E0E\u4E0A\u4E00\u6B21 commit \u4FDD\u6301\u4E00\u81F4\uFF0C\u4F46\u5DE5\u4F5C\u533A\u4E0D\u53D8</span>
<span class="token function">git</span> reset <span class="token punctuation">[</span>\u6587\u4EF6\u8DEF\u5F84<span class="token punctuation">]</span>

<span class="token comment"># \u91CD\u7F6E\u6682\u5B58\u533A\u4E0E\u5DE5\u4F5C\u533A\uFF0C\u4E0E\u4E0A\u4E00\u6B21 commit \u4FDD\u6301\u4E00\u81F4</span>
<span class="token function">git</span> reset --hard

<span class="token comment"># \u91CD\u7F6E\u5F53\u524D\u5206\u652F\u7684\u6307\u9488\u4E3A\u6307\u5B9A commit\uFF0C\u540C\u65F6\u91CD\u7F6E\u6682\u5B58\u533A\uFF0C\u4F46\u5DE5\u4F5C\u533A\u4E0D\u53D8</span>
<span class="token function">git</span> reset <span class="token punctuation">[</span>commit id<span class="token punctuation">]</span>

<span class="token comment"># \u91CD\u7F6E\u5F53\u524D\u5206\u652F\u7684 HEAD \u4E3A\u6307\u5B9A commit\uFF0C\u540C\u65F6\u91CD\u7F6E\u6682\u5B58\u533A\u548C\u5DE5\u4F5C\u533A\uFF0C\u4E0E\u6307\u5B9A commit \u4E00\u81F4</span>
<span class="token function">git</span> reset --hard <span class="token punctuation">[</span>commit id<span class="token punctuation">]</span>

<span class="token comment"># \u91CD\u7F6E\u5F53\u524D HEAD \u4E3A\u6307\u5B9A commit\uFF0C\u4F46\u4FDD\u6301\u6682\u5B58\u533A\u548C\u5DE5\u4F5C\u533A\u4E0D\u53D8</span>
<span class="token function">git</span> reset --keep <span class="token punctuation">[</span>commit id<span class="token punctuation">]</span>

<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2A commit\uFF0C\u7528\u6765\u64A4\u9500\u6307\u5B9A commit \u540E\u8005\u7684\u6240\u6709\u53D8\u5316\u90FD\u5C06\u88AB\u524D\u8005\u62B5\u6D88\uFF0C\u5E76\u4E14\u5E94\u7528\u5230\u5F53\u524D\u5206\u652F</span>
<span class="token function">git</span> revert <span class="token punctuation">[</span>commit id<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="_10-\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#_10-\u65E5\u5FD7" aria-hidden="true">#</a> 10. \u65E5\u5FD7</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u63D0\u4EA4\u8FC7\u7684\u5B8C\u6574\u65E5\u5FD7</span>
<span class="token function">git</span> log

<span class="token comment"># \u67E5\u770B\u7CBE\u7B80\u65E5\u5FD7\uFF08\u7CBE\u7B80\u7248\u672C\u53F7\u548C\u63D0\u4EA4\u4FE1\u606F\uFF09</span>
<span class="token function">git</span> log --oneline

<span class="token comment"># \u67E5\u770B\u7CBE\u7B80\u65E5\u5FD7\uFF08\u5B8C\u6574\u7248\u672C\u53F7\u548C\u63D0\u4EA4\u4FE1\u606F\uFF09</span>
<span class="token function">git</span> log --pretty<span class="token operator">=</span>oneline

<span class="token comment"># \u67E5\u770B\u6240\u6709\u5206\u652F\u7684\u6240\u6709\u64CD\u4F5C\u8BB0\u5F55\uFF08\u5305\u62EC\u88AB\u5220\u9664\u7684 commit \u8BB0\u5F55\u548C reset \u64CD\u4F5C\uFF09</span>
<span class="token function">git</span> reflog
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="\u7F16\u5199-workflow-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7F16\u5199-workflow-\u6587\u4EF6" aria-hidden="true">#</a> \u7F16\u5199 workflow \u6587\u4EF6</h2><ol><li>\u70B9\u51FB\u4ED3\u5E93\u7684 Actions \u6309\u94AE</li><li>\u70B9\u51FB Set up a workflow yourself \u6309\u94AE</li><li>\u590D\u5236\u5982\u4E0B\u5185\u5BB9</li><li>name: GitHub Actions Build and Deploy</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u89E6\u53D1\u6761\u4EF6: push \u5230 master \u5206\u652F\u540E</span>
on:
  push:
    branches:
      - master

<span class="token comment"># \u8BBE\u7F6E\u4E0A\u6D77\u65F6\u533A</span>
env:
  TZ: Asia/Shanghai

<span class="token comment"># \u4EFB\u52A1</span>
jobs:
  build-and-deploy:
    <span class="token comment"># \u670D\u52A1\u5668\u73AF\u5883\uFF1A\u6700\u65B0\u7248 ubuntu</span>
    runs-on: ubuntu-latest
    steps:
      <span class="token comment"># \u62C9\u53D6\u4EE3\u7801</span>
      - name: Checkout
        uses: actions/checkout@v2
        with:
          persist-credentials: <span class="token boolean">false</span>

      <span class="token comment"># \u6253\u5305\u9759\u6001\u6587\u4EF6</span>
      - name: Build
        run: <span class="token function">npm</span> <span class="token function">install</span> <span class="token operator">&amp;&amp;</span> <span class="token function">npm</span> run build

      <span class="token comment"># \u90E8\u7F72</span>
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@releases/v3
        with:
          <span class="token comment"># GitHub \u5BC6\u94A5</span>
          ACCESS_TOKEN: <span class="token variable">\${{ secrets.ACCESS_TOKEN }</span><span class="token punctuation">}</span>
          <span class="token comment"># GitHub Pages \u8BFB\u53D6\u7684\u5206\u652F</span>
          BRANCH: gh-pages
          <span class="token comment"># \u9759\u6001\u6587\u4EF6\u6240\u5728\u76EE\u5F55</span>
          FOLDER: dist
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><h2 id="\u6682\u5B58\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u6682\u5B58\u64CD\u4F5C" aria-hidden="true">#</a> \u6682\u5B58\u64CD\u4F5C</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6682\u5B58\u64CD\u4F5C</span>
<span class="token comment"># \u53EA\u6682\u5B58\u88AB\u8FFD\u8E2A\u7684\u6587\u4EF6</span>
<span class="token function">git</span> stash
<span class="token comment"># \u6682\u5B58\u6240\u6709\u6587\u4EF6\u5E76\u6DFB\u52A0\u8BF4\u660E</span>
<span class="token function">git</span> stash <span class="token punctuation">[</span>save <span class="token string">&#39;\u8BF4\u660E\u4FE1\u606F&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>-u<span class="token punctuation">]</span>
<span class="token comment"># \u67E5\u770B stash \u5217\u8868</span>
<span class="token function">git</span> stash list
<span class="token comment"># \u53D6\u51FA\u6700\u8FD1\u4E00\u6B21\u7684 stash</span>
<span class="token function">git</span> stash apply
<span class="token comment"># \u53D6\u51FA stash \u5217\u8868\u91CC\u5BF9\u5E94\u6570\u5B57\u7684\u6682\u5B58</span>
<span class="token function">git</span> stash apply \u6570\u5B57
<span class="token comment"># \u53D6\u51FA\u5E76\u5220\u9664\u6700\u8FD1\u4E00\u6B21\u7684 stash</span>
<span class="token function">git</span> stash pop
<span class="token comment"># \u6E05\u7A7A\u6240\u6709 stash</span>
<span class="token function">git</span> stash <span class="token function">clear</span>
<span class="token comment"># \u53D6\u6D88\u3010\u53D6\u56DE\u6682\u5B58\u4EE3\u7801\u3011</span>
<span class="token function">git</span> reset --hard
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="\u5176\u4ED6\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u547D\u4EE4" aria-hidden="true">#</a> \u5176\u4ED6\u547D\u4EE4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token comment"># \u6E05\u9664\u7F13\u5B58</span>
<span class="token function">npm</span> cache clean --force
<span class="token comment"># \u67E5\u770B\u5168\u5C40\u5B89\u88C5\u7684 npm \u5305</span>
<span class="token function">npm</span> list -g --depth <span class="token number">0</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,27);function p(c,t){return e}var i=n(a,[["render",p],["__file","index.html.vue"]]);export{i as default};
