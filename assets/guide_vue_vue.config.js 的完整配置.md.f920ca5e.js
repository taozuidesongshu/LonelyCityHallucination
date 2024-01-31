import{_ as s,o as n,c as a,N as e}from"./chunks/framework.60272d8a.js";const y=JSON.parse('{"title":"vue.config.js 的完整配置（超详细）！","description":"","frontmatter":{},"headers":[],"relativePath":"guide/vue/vue.config.js 的完整配置.md","lastUpdated":1706686109000}'),l={name:"guide/vue/vue.config.js 的完整配置.md"},p=e(`<h1 id="vue-config-js-的完整配置-超详细" tabindex="-1">vue.config.js 的完整配置（超详细）！ <a class="header-anchor" href="#vue-config-js-的完整配置-超详细" aria-label="Permalink to &quot;vue.config.js 的完整配置（超详细）！&quot;">​</a></h1><blockquote><p>前段时间，对部门的个别项目进行<code>Vue3.0+ts</code>框架的迁移，刚开始研究的时候也是踩坑特别多，尤其我们的项目还有些特殊的<code>webpack</code>配置，所以，研究<code>vue.config.js</code>的配置的时候也是查阅了各种资料文档，最终，完成了项目<code>webpack</code>的特殊配置。</p></blockquote><p>今天分享一下，我们项目当中的一些<code>webpack</code>配置，希望能给大家有所启发；只要配置多了，你就会发现其实所有的配置的都是相似的，尤其像插件的配置，都是十分相似的。</p><p><strong>我们现在开始进入今天的主题啦~~</strong></p><h3 id="_1-介绍" tabindex="-1"><strong>1 介绍</strong> <a class="header-anchor" href="#_1-介绍" aria-label="Permalink to &quot;**1 介绍**&quot;">​</a></h3><p>之前，我有提到过，当然大家肯定也都知道，Vue3.0不在有<code>webpack.config.js</code>的配置；但是不可避免,在项目开发中我们肯定会存在一些特殊的需求需要调整<code>webpack</code>, 这个时候，在Vue3.0的项目当中，我们就需要在根目录创建<code>vue.config.js</code>去完成<code>webpack</code>的一些特殊配置,默认它会被<code>@vue/cli-service</code>自动加载。</p><p>此刻，你需要创建<code>vue.config.js</code>文件。</p><h4 id="查看默认的webpack配置" tabindex="-1"><strong>查看默认的webpack配置</strong> <a class="header-anchor" href="#查看默认的webpack配置" aria-label="Permalink to &quot;**查看默认的webpack配置**&quot;">​</a></h4><blockquote><p>Vue CLI 官方文档：<code>vue-cli-service</code>暴露了<code>inspect</code>命令用于审查解析好的<code>webpack</code>配置。那个全局的 vue 可执行程序同样提供了<code>inspect</code>命令，这个命令只是简单的把<code>vue-cli-service\`\`inspect</code>代理到了你的项目中。</p></blockquote><p>被抽象化的<code>webpack</code>，我们要想去理解它默认的一些配置的话是比较困难的，所以我们可以通过指令去查看。<br> 该指令会将<code>webpack</code>的配置输出到<code>output.js</code>文件，这样方便去查看。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">vue inspect &gt; output.js</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="vue-config-js文件" tabindex="-1"><strong>vue.config.js文件</strong> <a class="header-anchor" href="#vue-config-js文件" aria-label="Permalink to &quot;**vue.config.js文件**&quot;">​</a></h4><p>这个文件导出了一个包含了选项的对象：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">module.exports = {</span></span>
<span class="line"><span style="color:#babed8;">  // 选项...</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>接下来，详细介绍一些选项及配置：</p><h3 id="_2-基本配置" tabindex="-1"><strong>2 基本配置</strong> <a class="header-anchor" href="#_2-基本配置" aria-label="Permalink to &quot;**2 基本配置**&quot;">​</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">module.exports = {</span></span>
<span class="line"><span style="color:#babed8;">    productionSourceMap: false,</span></span>
<span class="line"><span style="color:#babed8;">    publicPath: &#39;./&#39;,</span></span>
<span class="line"><span style="color:#babed8;">    outputDir: &#39;dist&#39;,</span></span>
<span class="line"><span style="color:#babed8;">    assetsDir: &#39;assets&#39;,</span></span>
<span class="line"><span style="color:#babed8;">    devServer: {</span></span>
<span class="line"><span style="color:#babed8;">        port: 8090,</span></span>
<span class="line"><span style="color:#babed8;">        host: &#39;0.0.0.0&#39;,</span></span>
<span class="line"><span style="color:#babed8;">        https: false,</span></span>
<span class="line"><span style="color:#babed8;">        open: true</span></span>
<span class="line"><span style="color:#babed8;">    },</span></span>
<span class="line"><span style="color:#babed8;">    // 其他配置</span></span>
<span class="line"><span style="color:#babed8;">    ...</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><ul><li><p><strong>productionSourceMap</strong>：生产环境是否要生成<code>sourceMap</code></p></li><li><p><strong>publicPath</strong>：部署应用包时的基本 URL,用法和<code>webpack</code>本身的<code>output.publicPath</code>一致</p><ul><li>可以通过三元运算去配置<code>dev</code>和<code>prod</code>环境,<code>publicPath: p<wbr>rocess.env.NODE_ENV === &#39;production&#39; ? &#39;/prod/&#39; : &#39;./&#39;</code></li></ul></li><li><p><strong>outputDir</strong>:<code>build</code>时输出的文件目录</p></li><li><p><strong>assetsDir</strong>: 放置静态文件夹目录</p></li><li><p><strong>devServer</strong>: dev环境下，<code>webpack-dev-server</code>相关配置</p><ul><li><strong>port</strong>: 开发运行时的端口</li><li><strong>host</strong>: 开发运行时域名，设置成<code>&#39;0.0.0.0&#39;</code>,在同一个局域网下，如果你的项目在运行，同时可以通过你的<code>http://ip:port/...访问你的项目</code></li><li><strong>https</strong>: 是否启用<code>https</code></li><li><strong>open</strong>:<code>npm run serve</code>时是否直接打开浏览器</li></ul></li></ul><h3 id="_3-插件及规则的配置" tabindex="-1"><strong>3 插件及规则的配置</strong> <a class="header-anchor" href="#_3-插件及规则的配置" aria-label="Permalink to &quot;**3 插件及规则的配置**&quot;">​</a></h3><p>在<code>vue.config.js</code>如果要<code>新增/修改\`\`webpack</code>的<code>plugins</code>或者<code>rules</code>, 有2种方式。</p><h4 id="configurewebpack方式" tabindex="-1"><code>configureWebpack</code>方式 <a class="header-anchor" href="#configurewebpack方式" aria-label="Permalink to &quot;\`configureWebpack\`方式&quot;">​</a></h4><p>configureWebpack 是相对比较简单的一种方式</p><ul><li>它可以是一个<code>对象</code>：和<code>webpack</code>本身配置方式是一致，该对象将会被<code>webpack-merge</code>合并入最终的<code>webpack</code>配置</li><li>它也可以是一个<code>函数</code>：直接在函数内部进行修改配置</li></ul><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">configureWebpack: {</span></span>
<span class="line"><span style="color:#babed8;">    rules:[],</span></span>
<span class="line"><span style="color:#babed8;">    plugins: []</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">configureWebpack: (config) =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">    // 例如，通过判断运行环境，设置mode</span></span>
<span class="line"><span style="color:#babed8;">    config.mode = &#39;production&#39;</span></span>
<span class="line"><span style="color:#babed8;">} </span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h4 id="chainwebpack方式" tabindex="-1"><code>chainWebpack</code>方式 <a class="header-anchor" href="#chainwebpack方式" aria-label="Permalink to &quot;\`chainWebpack\`方式&quot;">​</a></h4><p>chainWebpack 链式操作 (高级)，接下来所有的配置我都会在该选项中进行配置</p><h3 id="_4-规则rules的配置" tabindex="-1"><strong>4 规则rules的配置</strong> <a class="header-anchor" href="#_4-规则rules的配置" aria-label="Permalink to &quot;**4 规则rules的配置**&quot;">​</a></h3><p>关于<code>rules</code>的配置，我会分别从新增/修改进行介绍。</p><h4 id="_4-1-rules的新增" tabindex="-1"><strong>4.1 rules的新增</strong> <a class="header-anchor" href="#_4-1-rules的新增" aria-label="Permalink to &quot;**4.1 rules的新增**&quot;">​</a></h4><p>在<code>webpack</code>中<code>rules</code>是<code>module</code>的配置项，而所有的配置的都是挂载到<code>config</code>下的，所以新增一个rule方式：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">config.module</span></span>
<span class="line"><span style="color:#babed8;">  .rule(name)</span></span>
<span class="line"><span style="color:#babed8;">    .use(name)</span></span>
<span class="line"><span style="color:#babed8;">      .loader(loader)</span></span>
<span class="line"><span style="color:#babed8;">      .options(options)</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h5 id="案例-style-resources-loader来添加less全局变量" tabindex="-1">案例：<code>style-resources-loader</code>来添加<code>less</code>全局变量 <a class="header-anchor" href="#案例-style-resources-loader来添加less全局变量" aria-label="Permalink to &quot;案例：\`style-resources-loader\`来添加\`less\`全局变量&quot;">​</a></h5><h5 id="案例-svg-sprite-loader将svg图片以雪碧图的方式在项目中加载" tabindex="-1">案例：<code>svg-sprite-loader</code>将svg图片以雪碧图的方式在项目中加载 <a class="header-anchor" href="#案例-svg-sprite-loader将svg图片以雪碧图的方式在项目中加载" aria-label="Permalink to &quot;案例：\`svg-sprite-loader\`将svg图片以雪碧图的方式在项目中加载&quot;">​</a></h5><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">module.exports = {</span></span>
<span class="line"><span style="color:#babed8;">    chainWebpack: (config) =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">        // 通过 style-resources-loader 来添加less全局变量</span></span>
<span class="line"><span style="color:#babed8;">        const types = [&#39;vue-modules&#39;, &#39;vue&#39;, &#39;normal-modules&#39;, &#39;normal&#39;];</span></span>
<span class="line"><span style="color:#babed8;">        types.forEach(type =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">            let rule = config.module.rule(&#39;less&#39;).oneOf(type)</span></span>
<span class="line"><span style="color:#babed8;">            rule.use(&#39;style-resource&#39;)</span></span>
<span class="line"><span style="color:#babed8;">                .loader(&#39;style-resources-loader&#39;)</span></span>
<span class="line"><span style="color:#babed8;">                .options({</span></span>
<span class="line"><span style="color:#babed8;">                    patterns: [path.resolve(__dirname, &#39;./lessVariates.less&#39;)]</span></span>
<span class="line"><span style="color:#babed8;">                });</span></span>
<span class="line"><span style="color:#babed8;">        });</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">        // \`svg-sprite-loader\`: 将svg图片以雪碧图的方式在项目中加载</span></span>
<span class="line"><span style="color:#babed8;">        config.module</span></span>
<span class="line"><span style="color:#babed8;">            .rule(&#39;svg&#39;)</span></span>
<span class="line"><span style="color:#babed8;">            .test(/.svg$/) // 匹配svg文件</span></span>
<span class="line"><span style="color:#babed8;">            .include.add(resolve(&#39;src/svg&#39;)) // 主要匹配src/svg</span></span>
<span class="line"><span style="color:#babed8;">            .end() </span></span>
<span class="line"><span style="color:#babed8;">            .use(&#39;svg-sprite-loader&#39;)</span></span>
<span class="line"><span style="color:#babed8;">            .loader(&#39;svg-sprite-loader&#39;) // 使用的loader，主要要npm该插件</span></span>
<span class="line"><span style="color:#babed8;">            .options({symbolId: &#39;svg-[name]&#39;}) // 参数配置</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h4 id="_4-2-rules的修改" tabindex="-1"><strong>4.2 rules的修改</strong> <a class="header-anchor" href="#_4-2-rules的修改" aria-label="Permalink to &quot;**4.2 rules的修改**&quot;">​</a></h4><p>针对已经存在的<code>rule</code>, 如果需要修改它的参数, 可以使用<code>tap</code>方法：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">config.module</span></span>
<span class="line"><span style="color:#babed8;">  .rule(name)</span></span>
<span class="line"><span style="color:#babed8;">    .use(name)</span></span>
<span class="line"><span style="color:#babed8;">      .tap(options =&gt; newOptions)</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h5 id="案例-修改url-loader的参数" tabindex="-1">案例：修改<code>url-loader</code>的参数 <a class="header-anchor" href="#案例-修改url-loader的参数" aria-label="Permalink to &quot;案例：修改\`url-loader\`的参数&quot;">​</a></h5><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">module.exports = {</span></span>
<span class="line"><span style="color:#babed8;">    chainWebpack: (config) =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">        // \`url-loader\`是webpack默认已经配置的，现在我们来修改它的参数</span></span>
<span class="line"><span style="color:#babed8;">        config.module.rule(&#39;images&#39;)</span></span>
<span class="line"><span style="color:#babed8;">            .use(&#39;url-loader&#39;)</span></span>
<span class="line"><span style="color:#babed8;">            .tap(options =&gt; ({</span></span>
<span class="line"><span style="color:#babed8;">                name: &#39;./assets/images/[name].[ext]&#39;,</span></span>
<span class="line"><span style="color:#babed8;">                quality: 85,</span></span>
<span class="line"><span style="color:#babed8;">                limit: 0,</span></span>
<span class="line"><span style="color:#babed8;">                esModule: false,</span></span>
<span class="line"><span style="color:#babed8;">            }))</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="_5-插件plugins-的配置" tabindex="-1"><strong>5 插件plugins 的配置</strong> <a class="header-anchor" href="#_5-插件plugins-的配置" aria-label="Permalink to &quot;**5 插件plugins 的配置**&quot;">​</a></h3><p>关于<code>plugins</code>的配置，我会分别从<code>新增/修改/删除</code>进行介绍。</p><h4 id="_5-1-plugins的新增" tabindex="-1"><strong>5.1 plugins的新增</strong> <a class="header-anchor" href="#_5-1-plugins的新增" aria-label="Permalink to &quot;**5.1 plugins的新增**&quot;">​</a></h4><ul><li>注意：这里WebpackPlugin不需要通过<code>new WebpackPlugin()</code>使用。</li></ul><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">config</span></span>
<span class="line"><span style="color:#babed8;">  .plugin(name)</span></span>
<span class="line"><span style="color:#babed8;">  .use(WebpackPlugin, args)</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h5 id="案例-新增hot-hash-webpack-plugin" tabindex="-1">案例：新增<code>hot-hash-webpack-plugin</code> <a class="header-anchor" href="#案例-新增hot-hash-webpack-plugin" aria-label="Permalink to &quot;案例：新增\`hot-hash-webpack-plugin\`&quot;">​</a></h5><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">const HotHashWebpackPlugin = require(&#39;hot-hash-webpack-plugin&#39;);</span></span>
<span class="line"><span style="color:#babed8;">module.exports = {</span></span>
<span class="line"><span style="color:#babed8;">    chainWebpack: (config) =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">        // 新增一个\`hot-hash-webpack-plugin\`</span></span>
<span class="line"><span style="color:#babed8;">        // 注意：这里use的时候不需要使用\`new HotHashWebpackPlugin()\`</span></span>
<span class="line"><span style="color:#babed8;">        config.plugin(&#39;hotHash&#39;)</span></span>
<span class="line"><span style="color:#babed8;">              .use(HotHashWebpackPlugin, [{ version: &#39;1.0.0&#39; }]);</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h4 id="_5-2-plugins的修改" tabindex="-1"><strong>5.2 plugins的修改</strong> <a class="header-anchor" href="#_5-2-plugins的修改" aria-label="Permalink to &quot;**5.2 plugins的修改**&quot;">​</a></h4><p>同理,<code>plugin</code>参数的修改也是通过<code>tap</code>去修改。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">config</span></span>
<span class="line"><span style="color:#babed8;">    .plugin(name)</span></span>
<span class="line"><span style="color:#babed8;">    .tap(args =&gt; newArgs)</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h5 id="案例-修改打包后css抽离后的filename及抽离所属目录" tabindex="-1">案例：修改打包后<code>css</code>抽离后的<code>filename</code>及抽离所属目录 <a class="header-anchor" href="#案例-修改打包后css抽离后的filename及抽离所属目录" aria-label="Permalink to &quot;案例：修改打包后\`css\`抽离后的\`filename\`及抽离所属目录&quot;">​</a></h5><h5 id="案例-删除console和debugger" tabindex="-1">案例：删除<code>console</code>和<code>debugger</code> <a class="header-anchor" href="#案例-删除console和debugger" aria-label="Permalink to &quot;案例：删除\`console\`和\`debugger\`&quot;">​</a></h5><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">const HotHashWebpackPlugin = require(&#39;hot-hash-webpack-plugin&#39;);</span></span>
<span class="line"><span style="color:#babed8;">module.exports = {</span></span>
<span class="line"><span style="color:#babed8;">    chainWebpack: (config) =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">        // 修改打包时css抽离后的filename及抽离所属目录</span></span>
<span class="line"><span style="color:#babed8;">        config.plugin(&#39;extract-css&#39;)</span></span>
<span class="line"><span style="color:#babed8;">                .tap(args =&gt; [{</span></span>
<span class="line"><span style="color:#babed8;">                    filename: &#39;css/[name].[contenthash:8].css&#39;,</span></span>
<span class="line"><span style="color:#babed8;">                    chunkFilename: &#39;css/[name].[contenthash:8].css&#39;</span></span>
<span class="line"><span style="color:#babed8;">                }]);</span></span>
<span class="line"><span style="color:#babed8;">        </span></span>
<span class="line"><span style="color:#babed8;">        // 正式环境下，删除console和debugger</span></span>
<span class="line"><span style="color:#babed8;">        config.optimization</span></span>
<span class="line"><span style="color:#babed8;">                .minimize(true)</span></span>
<span class="line"><span style="color:#babed8;">                .minimizer(&#39;terser&#39;)</span></span>
<span class="line"><span style="color:#babed8;">                .tap(args =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">                    let { terserOptions } = args[0];</span></span>
<span class="line"><span style="color:#babed8;">                    terserOptions.compress.drop_console = true;</span></span>
<span class="line"><span style="color:#babed8;">                    terserOptions.compress.drop_debugger = true;</span></span>
<span class="line"><span style="color:#babed8;">                    return args</span></span>
<span class="line"><span style="color:#babed8;">                });</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h4 id="_5-3-plugins的删除" tabindex="-1"><strong>5.3 plugins的删除</strong> <a class="header-anchor" href="#_5-3-plugins的删除" aria-label="Permalink to &quot;**5.3 plugins的删除**&quot;">​</a></h4><p>对于一些<code>webpack</code>默认的<code>plugin</code>，如果不需要可以进行删除</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">config.plugins.delete(name)</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h5 id="案例-删除vue-cli3-x模块的自动分割抽离" tabindex="-1">案例：删除<code>vue-cli3.X</code>模块的自动分割抽离 <a class="header-anchor" href="#案例-删除vue-cli3-x模块的自动分割抽离" aria-label="Permalink to &quot;案例：删除\`vue-cli3.X\`模块的自动分割抽离&quot;">​</a></h5><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">module.exports = {</span></span>
<span class="line"><span style="color:#babed8;">    chainWebpack: (config) =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">        // vue-cli3.X 会自动进行模块分割抽离，如果不需要进行分割,可以手动删除</span></span>
<span class="line"><span style="color:#babed8;">        config.optimization.delete(&#39;splitChunks&#39;); </span></span>
<span class="line"><span style="color:#babed8;">        </span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="_6-一些常见的配置" tabindex="-1"><strong>6 一些常见的配置</strong> <a class="header-anchor" href="#_6-一些常见的配置" aria-label="Permalink to &quot;**6 一些常见的配置**&quot;">​</a></h3><h4 id="_6-1-修改enter文件" tabindex="-1"><strong>6.1 修改enter文件</strong> <a class="header-anchor" href="#_6-1-修改enter文件" aria-label="Permalink to &quot;**6.1 修改enter文件**&quot;">​</a></h4><p><code>webpack</code>默认的<code>entry</code>入口是<code>scr/main.ts</code></p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">config.entryPoints.clear(); // 清空默认入口</span></span>
<span class="line"><span style="color:#babed8;">config.entry(&#39;test&#39;).add(getPath(&#39;./test/main.ts&#39;)); // 重新设置</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="_6-2-defineplugin" tabindex="-1"><strong>6.2 DefinePlugin</strong> <a class="header-anchor" href="#_6-2-defineplugin" aria-label="Permalink to &quot;**6.2 DefinePlugin**&quot;">​</a></h4><p>定义全局全局变量，<code>DefinePlugin</code>是<code>webpack</code>已经默认配置的，我们可以对参数进行修改</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">config.plugin(&#39;define&#39;).tap(args =&gt; [{ </span></span>
<span class="line"><span style="color:#babed8;">    ...args, </span></span>
<span class="line"><span style="color:#babed8;">    &quot;window.isDefine&quot;: JSON.stringify(true),</span></span>
<span class="line"><span style="color:#babed8;">    }]);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="_6-3-自定义filename-及-chunkfilename" tabindex="-1"><strong>6.3 自定义filename 及 chunkFilename</strong> <a class="header-anchor" href="#_6-3-自定义filename-及-chunkfilename" aria-label="Permalink to &quot;**6.3 自定义filename 及 chunkFilename**&quot;">​</a></h4><p>自定义打包后js文件的路径及文件名字</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">config.output.filename(&#39;./js/[name].[chunkhash:8].js&#39;);</span></span>
<span class="line"><span style="color:#babed8;">config.output.chunkFilename(&#39;./js/[name].[chunkhash:8].js&#39;);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="_6-4-修改html-webpack-plugin参数" tabindex="-1"><strong>6.4 修改html-webpack-plugin参数</strong> <a class="header-anchor" href="#_6-4-修改html-webpack-plugin参数" aria-label="Permalink to &quot;**6.4 修改html-webpack-plugin参数**&quot;">​</a></h4><p><code>html-webpack-plugin</code>是<code>webpack</code>已经默认配置的，默认的源模版文件是<code>public/index.html</code>;我们可以对其参数进行修改</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"> config.plugin(&#39;html&#39;)</span></span>
<span class="line"><span style="color:#babed8;">        .tap(options =&gt; [{</span></span>
<span class="line"><span style="color:#babed8;">            template: &#39;../../index.html&#39; // 修改源模版文件</span></span>
<span class="line"><span style="color:#babed8;">            title: &#39;test&#39;,</span></span>
<span class="line"><span style="color:#babed8;">        }]);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h4 id="_6-5-设置别名alias" tabindex="-1"><strong>6.5 设置别名alias</strong> <a class="header-anchor" href="#_6-5-设置别名alias" aria-label="Permalink to &quot;**6.5 设置别名alias**&quot;">​</a></h4><p><code>webpack</code>默认是将<code>src</code>的别名设置为<code>@</code>, 此外，我们可以进行添加</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">config.resolve.alias</span></span>
<span class="line"><span style="color:#babed8;">        .set(&#39;@&#39;, resolve(&#39;src&#39;)) </span></span>
<span class="line"><span style="color:#babed8;">        .set(&#39;api&#39;, resolve(&#39;src/apis&#39;))</span></span>
<span class="line"><span style="color:#babed8;">        .set(&#39;common&#39;, resolve(&#39;src/common&#39;))</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="_7-附上一份我的vue-config-js的配置" tabindex="-1"><strong>7 附上一份我的vue.config.js的配置</strong> <a class="header-anchor" href="#_7-附上一份我的vue-config-js的配置" aria-label="Permalink to &quot;**7 附上一份我的vue.config.js的配置**&quot;">​</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">const path = require(&#39;path&#39;);</span></span>
<span class="line"><span style="color:#babed8;">const HotHashWebpackPlugin = require(&#39;hot-hash-webpack-plugin&#39;);</span></span>
<span class="line"><span style="color:#babed8;">const WebpackBar = require(&#39;webpackbar&#39;);</span></span>
<span class="line"><span style="color:#babed8;">const resolve = (dir) =&gt; path.join(__dirname, &#39;.&#39;, dir);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">module.exports = {</span></span>
<span class="line"><span style="color:#babed8;">    productionSourceMap: false,</span></span>
<span class="line"><span style="color:#babed8;">    publicPath: &#39;./&#39;,</span></span>
<span class="line"><span style="color:#babed8;">    outputDir: &#39;dist&#39;,</span></span>
<span class="line"><span style="color:#babed8;">    assetsDir: &#39;assets&#39;,</span></span>
<span class="line"><span style="color:#babed8;">    devServer: {</span></span>
<span class="line"><span style="color:#babed8;">        port: 9999,</span></span>
<span class="line"><span style="color:#babed8;">        host: &#39;0.0.0.0&#39;,</span></span>
<span class="line"><span style="color:#babed8;">        https: false,</span></span>
<span class="line"><span style="color:#babed8;">        open: true</span></span>
<span class="line"><span style="color:#babed8;">    },</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    chainWebpack: (config) =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">        const types = [&#39;vue-modules&#39;, &#39;vue&#39;, &#39;normal-modules&#39;, &#39;normal&#39;];</span></span>
<span class="line"><span style="color:#babed8;">        types.forEach(type =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">            let rule = config.module.rule(&#39;less&#39;).oneOf(type)</span></span>
<span class="line"><span style="color:#babed8;">            rule.use(&#39;style-resource&#39;)</span></span>
<span class="line"><span style="color:#babed8;">                .loader(&#39;style-resources-loader&#39;)</span></span>
<span class="line"><span style="color:#babed8;">                .options({</span></span>
<span class="line"><span style="color:#babed8;">                    patterns: [path.resolve(__dirname, &#39;./lessVariates.less&#39;)]</span></span>
<span class="line"><span style="color:#babed8;">                });</span></span>
<span class="line"><span style="color:#babed8;">        });</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">        config.resolve.alias</span></span>
<span class="line"><span style="color:#babed8;">            .set(&#39;@&#39;, resolve(&#39;src&#39;)) </span></span>
<span class="line"><span style="color:#babed8;">            .set(&#39;api&#39;, resolve(&#39;src/apis&#39;))</span></span>
<span class="line"><span style="color:#babed8;">            .set(&#39;common&#39;, resolve(&#39;src/common&#39;))</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">        config.module.rule(&#39;images&#39;).use(&#39;url-loader&#39;)</span></span>
<span class="line"><span style="color:#babed8;">            .tap(options =&gt; ({</span></span>
<span class="line"><span style="color:#babed8;">                name: &#39;./assets/images/[name].[ext]&#39;,</span></span>
<span class="line"><span style="color:#babed8;">                quality: 85,</span></span>
<span class="line"><span style="color:#babed8;">                limit: 0,</span></span>
<span class="line"><span style="color:#babed8;">                esModule: false,</span></span>
<span class="line"><span style="color:#babed8;">            }));</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">        config.module.rule(&#39;svg&#39;)</span></span>
<span class="line"><span style="color:#babed8;">            .test(/.svg$/)</span></span>
<span class="line"><span style="color:#babed8;">            .include.add(resolve(&#39;src/svg&#39;))</span></span>
<span class="line"><span style="color:#babed8;">            .end()</span></span>
<span class="line"><span style="color:#babed8;">            .use(&#39;svg-sprite-loader&#39;)</span></span>
<span class="line"><span style="color:#babed8;">            .loader(&#39;svg-sprite-loader&#39;);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">        config.plugin(&#39;define&#39;).tap(args =&gt; [{</span></span>
<span class="line"><span style="color:#babed8;">            ...args, </span></span>
<span class="line"><span style="color:#babed8;">            &quot;window.isDefine&quot;: JSON.stringify(true)</span></span>
<span class="line"><span style="color:#babed8;">        }]);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">        // 生产环境配置</span></span>
<span class="line"><span style="color:#babed8;">        if (p<wbr>rocess.env.NODE_ENV === &#39;production&#39;) {</span></span>
<span class="line"><span style="color:#babed8;">            config.output.filename(&#39;./js/[name].[chunkhash:8].js&#39;);</span></span>
<span class="line"><span style="color:#babed8;">            config.output.chunkFilename(&#39;./js/[name].[chunkhash:8].js&#39;);</span></span>
<span class="line"><span style="color:#babed8;">            config.plugin(&#39;extract-css&#39;).tap(args =&gt; [{</span></span>
<span class="line"><span style="color:#babed8;">                filename: &#39;css/[name].[contenthash:8].css&#39;,</span></span>
<span class="line"><span style="color:#babed8;">                chunkFilename: &#39;css/[name].[contenthash:8].css&#39;</span></span>
<span class="line"><span style="color:#babed8;">            }]);</span></span>
<span class="line"><span style="color:#babed8;">            config.plugin(&#39;hotHash&#39;).use(HotHashWebpackPlugin, [{ version : &#39;1.0.0&#39;}]);</span></span>
<span class="line"><span style="color:#babed8;">            config.plugin(&#39;webpackBar&#39;).use(WebpackBar);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">            config.optimization.minimize(true)</span></span>
<span class="line"><span style="color:#babed8;">                .minimizer(&#39;terser&#39;)</span></span>
<span class="line"><span style="color:#babed8;">                .tap(args =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">                    let { terserOptions } = args[0];</span></span>
<span class="line"><span style="color:#babed8;">                    terserOptions.compress.drop_console = true;</span></span>
<span class="line"><span style="color:#babed8;">                    terserOptions.compress.drop_debugger = true;</span></span>
<span class="line"><span style="color:#babed8;">                    return args</span></span>
<span class="line"><span style="color:#babed8;">                });</span></span>
<span class="line"><span style="color:#babed8;">            config.optimization.splitChunks({</span></span>
<span class="line"><span style="color:#babed8;">                cacheGroups: {</span></span>
<span class="line"><span style="color:#babed8;">                    common: {</span></span>
<span class="line"><span style="color:#babed8;">                        name: &#39;common&#39;,</span></span>
<span class="line"><span style="color:#babed8;">                        chunks: &#39;all&#39;,</span></span>
<span class="line"><span style="color:#babed8;">                        minSize: 1,</span></span>
<span class="line"><span style="color:#babed8;">                        minChunks: 2,</span></span>
<span class="line"><span style="color:#babed8;">                        priority: 1</span></span>
<span class="line"><span style="color:#babed8;">                    },</span></span>
<span class="line"><span style="color:#babed8;">                    vendor: {</span></span>
<span class="line"><span style="color:#babed8;">                        name: &#39;chunk-libs&#39;,</span></span>
<span class="line"><span style="color:#babed8;">                        chunks: &#39;all&#39;,</span></span>
<span class="line"><span style="color:#babed8;">                        test: /[\\/]node_modules[\\/]/,</span></span>
<span class="line"><span style="color:#babed8;">                        priority: 10</span></span>
<span class="line"><span style="color:#babed8;">                    }</span></span>
<span class="line"><span style="color:#babed8;">                }</span></span>
<span class="line"><span style="color:#babed8;">            });</span></span>
<span class="line"><span style="color:#babed8;">        }</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">};</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br></div></div>`,75),r=[p];function c(o,b,i,t,d,u){return n(),a("div",null,r)}const g=s(l,[["render",c]]);export{y as __pageData,g as default};
