import{_ as a,o as l,c as p,N as n,x as s}from"./chunks/framework.60272d8a.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"guide/vue/自定义指令.md","lastUpdated":1706686109000}'),e={name:"guide/vue/自定义指令.md"},o=n("",5),t=s("ul",null,[s("li",{"a:1,b:2":""},"方式一：v-zoom:"),s("li",null,"对于{a:1,b:2}，在binding属性中，以字符串的形式传递，故可以写[1,2]、true等数据格式，但是最后拿到的都是字符串类型。"),s("li",null,'方式二：v-zoom="{width: 800, height: 1000}"'),s("li",null,"等号后面的{width: 800, height: 1000}，可以在binding的value属性中获取的数据的类型没有变化，"),s("li",null,"可以直接使用。width后面的数字,可以用当前组件的参数替换。"),s("li",null,"方式三：v-zoom.a.b")],-1),r=n("",7),c=[o,t,r];function i(D,y,b,u,d,B){return l(),p("div",null,c)}const A=a(e,[["render",i]]);export{m as __pageData,A as default};
