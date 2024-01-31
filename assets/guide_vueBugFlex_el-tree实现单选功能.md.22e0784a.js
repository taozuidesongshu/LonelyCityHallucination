import{_ as e,o as s,c as t,N as a}from"./chunks/framework.60272d8a.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"guide/vueBugFlex/el-tree实现单选功能.md","lastUpdated":1706686109000}'),n={name:"guide/vueBugFlex/el-tree实现单选功能.md"},o=a(`<p>el-tree是不支持单选的，可以通过选中事件进行处理，实现单选</p><p>主要思路：</p><p>1，check 事件 共两个参数，依次为：传递给<code>data</code>属性的数组中该节点所对应的对象、树目前的选中状态对象。</p><p>2，判断选中的对象大于1时，调用使用setCheckedKeys方法，选中当前节点。</p><p>代码如下：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;el-tree  lazy :load=&quot;loadNodeTreeMyself&quot; :props=&quot;defaultProps&quot;:show-checkbox=&quot;true&quot; //显示选择框:check-on-click-node=&quot;true&quot; //点击节点的时候选中节点:check-strictly=&quot;true&quot; //在显示复选框的情况下，严格的遵循父子不互相关联的做法node-key=&quot;PHY_ID&quot;     @check=&quot;treeCheck&quot; //选中后事件，在此事件中实现单选ref=&quot;treeForm&quot;&gt;&lt;/el-tree&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">treeCheck:function(node,list){if (list.checkedKeys.length == 2) {this.$refs.treeForm.setCheckedKeys([node.PHY_ID]);     }}</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>示例：</p><p><img src="https://img-blog.csdnimg.cn/ad56d3c8ac434909a799108eb7c16e2c.gif" alt=""></p>`,9),l=[o];function c(p,r,i,d,u,_){return s(),t("div",null,l)}const m=e(n,[["render",c]]);export{h as __pageData,m as default};
