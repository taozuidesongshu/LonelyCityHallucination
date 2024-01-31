import{_ as e,o,c as t,N as a}from"./chunks/framework.60272d8a.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"guide/js/JS实现将文本或JSON内容下载到文件中.md","lastUpdated":1706686109000}'),p={name:"guide/js/JS实现将文本或JSON内容下载到文件中.md"},s=a('<p>前端开发可能遇到这样的需求场景：<strong>需要将页面上的文本内容下载到文件中，内容可能是某个大的文本字段，比如博客文章，也可能是后端接口返回的 JSON 数据。</strong></p><h2 id="_1、下载文本" tabindex="-1">1、下载文本 <a class="header-anchor" href="#_1、下载文本" aria-label="Permalink to &quot;1、下载文本&quot;">​</a></h2><p>那么需要如何实现 JS 下载文本内容呢？可以借助于<strong>Blob 对象和 a 标签的 download属性</strong>来实现，具体代码如下：</p><blockquote><p><code>Blob</code>对象表示一个不可变、原始数据的类文件对象。它的数据可以按文本或二进制的格式进行读取，也可以转换成<code>ReadableStream</code>来用于数据操作；</p><p><code>a</code>标签的 download 属性是 HTML5 中新增的，用来直接进行文件下载；</p></blockquote><p>下面来测试一下，可以直接在 Chrome 的 console 中进行测试：</p><p><img src="https://media.mybj123.com/wp-content/uploads/2022/06/1655170992-84ba08b5f9b9be2.png" alt="JS实现将文本或JSON内容下载到文件中"></p><p>运行后，可以看到浏览器会下载一个名为 test.txt 的文件。</p><h2 id="_2、下载json" tabindex="-1">2、下载JSON <a class="header-anchor" href="#_2、下载json" aria-label="Permalink to &quot;2、下载JSON&quot;">​</a></h2><p>有时候后端接口返回了一个JSON对象，为了方便查看和核对数据，可能想将其下载到文件中，那么只需要将下载文本的方法稍微改造一下即可，具体代码如下：</p><p>下面来测试一下：</p><p>运行后，浏览器会自动下载一个名为 test.json 的文件，其内容如下：</p><h2 id="_3、下载json并格式化" tabindex="-1">3、下载JSON并格式化 <a class="header-anchor" href="#_3、下载json并格式化" aria-label="Permalink to &quot;3、下载JSON并格式化&quot;">​</a></h2><p>有的时候可能希望保存到文件中的 json 数据是格式化的，这样方便查看，那么只需要稍微调整一下 <code>JSON.stringify()</code> 方法即可，先来看看 <code>JSON.stringify()</code> 方法的定义：</p><p><code>value</code></p><ul><li>将要序列化成 一个 JSON 字符串的值。</li></ul><p><code>replacer</code>可选</p><ul><li>如果该参数是一个函数，则在序列化过程中，被序列化的值的每个属性都会经过该函数的转换和处理；如果该参数是一个数组，则只有包含在这个数组中的属性名才会被序列化到最终的 JSON 字符串中；如果该参数为 null 或者未提供，则对象所有的属性都会被序列化。</li></ul><p><code>space</code>可选</p><ul><li>指定缩进用的空白字符串，用于美化输出（pretty-print）；如果参数是个数字，它代表有多少的空格；上限为 10。该值若小于 1，则意味着没有空格；如果该参数为字符串（当字符串长度超过 10 个字母，取其前 10 个字母），该字符串将被作为空格；如果该参数没有提供（或者为 null），将没有空格。</li></ul><p>如果想要格式化 JSON，那么可以传入一个 space 参数，具体如下：</p><p>除了使用4个空格外，还可以制表符（\\t）来缩进，如下：</p><p>下载格式化JSON方法修改如下：</p><p>下面来测试一下：</p><p>运行后，浏览器会自动下载一个名为 test.json 的文件，其内容如下：</p>',24),c=[s];function l(n,d,r,_,i,S){return o(),t("div",null,c)}const J=e(p,[["render",l]]);export{h as __pageData,J as default};
