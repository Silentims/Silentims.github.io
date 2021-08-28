"use strict";(self.webpackChunkswbook=self.webpackChunkswbook||[]).push([[577],{4465:(a,n,s)=>{s.r(n),s.d(n,{data:()=>e});const e={key:"v-5061ce2f",path:"/tool/idea-install-jdk8-resource.html",title:"IDEA 阅读和调试 jdk8 源码",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"准备",slug:"准备",children:[]},{level:2,title:"创建项目",slug:"创建项目",children:[]},{level:2,title:"配置与添加依赖",slug:"配置与添加依赖",children:[]},{level:2,title:"启动和遇到的问题",slug:"启动和遇到的问题",children:[]},{level:2,title:"源码注释",slug:"源码注释",children:[]},{level:2,title:"正确的食用方法",slug:"正确的食用方法",children:[]},{level:2,title:"参考",slug:"参考",children:[]}],filePathRelative:"tool/idea-install-jdk8-resource.md"}},1577:(a,n,s)=>{s.r(n),s.d(n,{default:()=>aa});var e=s(6252),l=s(4737),t=s(8287),c=s(9445),o=s(6506),p=s(8785),r=s(8560),i=s(1832),_=s(3994),u=s(3239);const k=(0,e._)("h1",{id:"idea-阅读和调试-jdk8-源码",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#idea-阅读和调试-jdk8-源码","aria-hidden":"true"},"#"),(0,e.Uk)(" IDEA 阅读和调试 jdk8 源码")],-1),d=(0,e._)("div",{class:"custom-container tip"},[(0,e._)("p",{class:"custom-container-title"},"写在前面"),(0,e._)("p",null,"目的：为了更好的阅读和学习 Java 底层源码")],-1),m=(0,e._)("div",{class:"custom-container warning"},[(0,e._)("p",{class:"custom-container-title"},"说明"),(0,e._)("ul",null,[(0,e._)("li",null,"MacOS 是通过 HomeBrew 安装的 openJDK8"),(0,e._)("li",null,"Windows 系统可参考文中最后的链接教程")])],-1),g=(0,e._)("h2",{id:"准备",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#准备","aria-hidden":"true"},"#"),(0,e.Uk)(" 准备")],-1),U=(0,e._)("p",null,[(0,e.Uk)("找到电脑中安装 jdk8 的位置，本篇需要的源码就是安装目录中的 "),(0,e._)("code",null,"src.zip")],-1),h=(0,e._)("p",null,[(0,e._)("img",{src:l,alt:"image-20210825144312894"})],-1),b=(0,e._)("h2",{id:"创建项目",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#创建项目","aria-hidden":"true"},"#"),(0,e.Uk)(" 创建项目")],-1),v=(0,e._)("p",null,"打开 idea，创建一个简单的 Java 项目",-1),j=(0,e._)("p",null,[(0,e._)("img",{src:t,alt:"image-20210825144857732"})],-1),x=(0,e._)("p",null,"创建一个命令行的简单项目（只有一个 main 方法）",-1),f=(0,e._)("p",null,[(0,e._)("img",{src:c,alt:"image-20210825145046119"})],-1),w=(0,e._)("p",null,"自定义项目名，项目位置，包名",-1),S=(0,e._)("p",null,[(0,e._)("img",{src:o,alt:"image-20210825145207108"})],-1),y=(0,e._)("p",null,[(0,e.Uk)("打开创建的项目的实际位置，并将 "),(0,e._)("code",null,"src.zip"),(0,e.Uk)(" 解压到项目中的 "),(0,e._)("code",null,"src"),(0,e.Uk)(" 中即可，解压完后项目目录如下（图中是已经移除报错不要的部分，后面的问题会说到具体删除了哪些文件）")],-1),D=(0,e._)("p",null,[(0,e._)("img",{src:p,alt:"image-20210825151429150"})],-1),J=(0,e._)("h2",{id:"配置与添加依赖",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#配置与添加依赖","aria-hidden":"true"},"#"),(0,e.Uk)(" 配置与添加依赖")],-1),A=(0,e._)("p",null,"进入设置，调整编译的堆大小，默认为 700，此处调整为 1700（避免启动编译默认的堆内存不足导致启动失败）",-1),K=(0,e._)("p",null,[(0,e._)("img",{src:r,alt:"image-20210825145831569"})],-1),z=(0,e._)("p",null,"打开 File--Project Structure--Libraries，添加依赖（即引用原安装的 jdk 中的 lib 文件夹下的 jar 包），",-1),H=(0,e._)("p",null,[(0,e._)("img",{src:i,alt:"image-20210825150236947"})],-1),M=(0,e._)("h2",{id:"启动和遇到的问题",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#启动和遇到的问题","aria-hidden":"true"},"#"),(0,e.Uk)(" 启动和遇到的问题")],-1),C=(0,e._)("p",null,"运行 main 方法，遇到的错误：",-1),L=(0,e._)("div",{class:"language-java ext-java line-numbers-mode"},[(0,e._)("pre",{class:"language-java"},[(0,e._)("code",null,[(0,e._)("span",{class:"token operator"},"/"),(0,e._)("span",{class:"token class-name"},"Users"),(0,e._)("span",{class:"token operator"},"/"),(0,e.Uk)("xin"),(0,e._)("span",{class:"token operator"},"/"),(0,e.Uk)("main"),(0,e._)("span",{class:"token operator"},"/"),(0,e.Uk)("xin"),(0,e._)("span",{class:"token operator"},"/"),(0,e.Uk)("src"),(0,e._)("span",{class:"token operator"},"/"),(0,e._)("span",{class:"token class-name"},"JavaSource"),(0,e._)("span",{class:"token operator"},"/"),(0,e.Uk)("src"),(0,e._)("span",{class:"token operator"},"/"),(0,e.Uk)("com"),(0,e._)("span",{class:"token operator"},"/"),(0,e.Uk)("sun"),(0,e._)("span",{class:"token operator"},"/"),(0,e.Uk)("jmx"),(0,e._)("span",{class:"token operator"},"/"),(0,e.Uk)("snmp"),(0,e._)("span",{class:"token operator"},"/"),(0,e.Uk)("daemon"),(0,e._)("span",{class:"token operator"},"/"),(0,e._)("span",{class:"token class-name"},"SnmpAdaptorServer"),(0,e._)("span",{class:"token punctuation"},"."),(0,e.Uk)("java"),(0,e._)("span",{class:"token operator"},":"),(0,e._)("span",{class:"token number"},"53"),(0,e._)("span",{class:"token operator"},":"),(0,e._)("span",{class:"token number"},"24"),(0,e.Uk)("\njava"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(" 找不到符号\n  符号"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)("   类 "),(0,e._)("span",{class:"token class-name"},"SnmpOid"),(0,e.Uk)("\n  位置"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(" 程序包 com"),(0,e._)("span",{class:"token punctuation"},"."),(0,e.Uk)("sun"),(0,e._)("span",{class:"token punctuation"},"."),(0,e.Uk)("jmx"),(0,e._)("span",{class:"token punctuation"},"."),(0,e.Uk)("snmp\n")])]),(0,e._)("div",{class:"line-numbers"},[(0,e._)("span",{class:"line-number"},"1"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"2"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"3"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"4"),(0,e._)("br")])],-1),O=(0,e._)("p",null,"解决办法：",-1),P=(0,e._)("ol",null,[(0,e._)("li",null,[(0,e.Uk)("把 "),(0,e._)("code",null,"src/com/sun/jmx"),(0,e.Uk)(" 文件夹整体删除 ;")]),(0,e._)("li",null,[(0,e.Uk)("把 "),(0,e._)("code",null,"src/sun"),(0,e.Uk)(" 文件夹整体删除；")])],-1),W=(0,e._)("blockquote",null,[(0,e._)("p",null,"经过查阅很多网上的问题解决办法，都没有查到我遇到的这个问题，倒是其他问题什么样的都有，所以可能每个人遇到的报错都不一样；"),(0,e._)("p",null,"当然，总的来说，只是为了学习 Java 开发工具包中的源码，有一些底层、可视化或者系统支持的包实际上是不需要的，可以根据实际酌情删除后，反复启动项目来排查问题。")],-1),q=(0,e._)("h2",{id:"源码注释",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#源码注释","aria-hidden":"true"},"#"),(0,e.Uk)(" 源码注释")],-1),E=(0,e._)("p",null,"项目启动成功后，在 main 方法中写一个简单的代码",-1),F=(0,e._)("div",{class:"language-java ext-java line-numbers-mode"},[(0,e._)("pre",{class:"language-java"},[(0,e._)("code",null,[(0,e._)("span",{class:"token keyword"},"public"),(0,e.Uk)(),(0,e._)("span",{class:"token keyword"},"class"),(0,e.Uk)(),(0,e._)("span",{class:"token class-name"},"Main"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n\n    "),(0,e._)("span",{class:"token keyword"},"public"),(0,e.Uk)(),(0,e._)("span",{class:"token keyword"},"static"),(0,e.Uk)(),(0,e._)("span",{class:"token keyword"},"void"),(0,e.Uk)(),(0,e._)("span",{class:"token function"},"main"),(0,e._)("span",{class:"token punctuation"},"("),(0,e._)("span",{class:"token class-name"},"String"),(0,e._)("span",{class:"token punctuation"},"["),(0,e._)("span",{class:"token punctuation"},"]"),(0,e.Uk)(" args"),(0,e._)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n\t\t\t\t"),(0,e._)("span",{class:"token comment"},"// write your code here"),(0,e.Uk)("\n        "),(0,e._)("span",{class:"token class-name"},"HashMap"),(0,e._)("span",{class:"token generics"},[(0,e._)("span",{class:"token punctuation"},"<"),(0,e._)("span",{class:"token class-name"},"String"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)(),(0,e._)("span",{class:"token class-name"},"String"),(0,e._)("span",{class:"token punctuation"},">")]),(0,e.Uk)(" map "),(0,e._)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e._)("span",{class:"token keyword"},"new"),(0,e.Uk)(),(0,e._)("span",{class:"token class-name"},"HashMap"),(0,e._)("span",{class:"token generics"},[(0,e._)("span",{class:"token punctuation"},"<"),(0,e._)("span",{class:"token punctuation"},">")]),(0,e._)("span",{class:"token punctuation"},"("),(0,e._)("span",{class:"token punctuation"},")"),(0,e._)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n        map"),(0,e._)("span",{class:"token punctuation"},"."),(0,e._)("span",{class:"token function"},"put"),(0,e._)("span",{class:"token punctuation"},"("),(0,e._)("span",{class:"token string"},'"AAA"'),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)(),(0,e._)("span",{class:"token string"},'"aaa"'),(0,e._)("span",{class:"token punctuation"},")"),(0,e._)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n")])]),(0,e._)("div",{class:"line-numbers"},[(0,e._)("span",{class:"line-number"},"1"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"2"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"3"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"4"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"5"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"6"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"7"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"8"),(0,e._)("br")])],-1),I=(0,e._)("p",null,[(0,e.Uk)("此时点击 "),(0,e._)("code",null,"put"),(0,e.Uk)(" 方法进入会发现，是 .class 文件，不可编辑，因为项目引入的 SDK 是安装的 jdk 目录，为了能点击进入到的是本项目的 .java 文件位置，同时如果想添加源码注释，就需要修改 "),(0,e._)("code",null,"SDKs"),(0,e.Uk)(" 目录：")],-1),B=(0,e._)("p",null,"打开 File--Project Structure--Libraries，新增一个 SDKs 配置",-1),N=(0,e._)("blockquote",null,[(0,e._)("p",null,[(0,e.Uk)("注意：图中 "),(0,e._)("code",null,"1.8src"),(0,e.Uk)(" 就是新增的配置，源码路径为当前项目的路径，新增的原因是避免直接修改默认的配置可能会导致别的项目出现引用错误")])],-1),R=(0,e._)("p",null,[(0,e._)("img",{src:_,alt:"image-20210825151956199"})],-1),Y=(0,e._)("p",null,[(0,e.Uk)("修改本项目引用的 sdk 为 "),(0,e._)("code",null,"1.8_src"),(0,e.Uk)("，保存后，再次点击代码跳转，就是本项目的实际 java 文件位置了")],-1),G=(0,e._)("p",null,[(0,e._)("img",{src:u,alt:"image-20210825152714034"})],-1),Q=(0,e._)("p",null,[(0,e.Uk)("不管是点击方法看源码，或者debug进入源码，都是当前项目的"),(0,e._)("code",null,".java"),(0,e.Uk)("文件")],-1),T=(0,e._)("h2",{id:"正确的食用方法",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#正确的食用方法","aria-hidden":"true"},"#"),(0,e.Uk)(" 正确的食用方法")],-1),V=(0,e._)("ol",null,[(0,e._)("li",null,"在需要调试的源码入口打断点；"),(0,e._)("li",null,"若需要对源码进行添加注释，一定要在当前行备注，避免换行导致编译执行报错与实际代码位置不符的问题，不方便排查")],-1),X=(0,e._)("h2",{id:"参考",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#参考","aria-hidden":"true"},"#"),(0,e.Uk)(" 参考")],-1),Z={href:"https://blog.csdn.net/yiyihuazi/article/details/111661769",target:"_blank",rel:"noopener noreferrer"},$=(0,e.Uk)("Windows系统：idea搭建Java源码（JDK源码）调试环境"),aa={render:function(a,n){const s=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[k,d,m,g,U,h,b,v,j,x,f,w,S,y,D,J,A,K,z,H,M,C,L,O,P,W,q,E,F,I,B,N,R,Y,G,Q,T,V,X,(0,e._)("p",null,[(0,e._)("a",Z,[$,(0,e.Wm)(s)])])],64)}}},4737:(a,n,s)=>{a.exports=s.p+"assets/img/image-20210825144312894.184a4dd2.png"},8287:(a,n,s)=>{a.exports=s.p+"assets/img/image-20210825144857732.226d65c0.png"},9445:(a,n,s)=>{a.exports=s.p+"assets/img/image-20210825145046119.c20a253e.png"},6506:(a,n,s)=>{a.exports=s.p+"assets/img/image-20210825145207108.0f9fe65a.png"},8560:(a,n,s)=>{a.exports=s.p+"assets/img/image-20210825145831569.e4e4fa6d.png"},1832:(a,n,s)=>{a.exports=s.p+"assets/img/image-20210825150236947.dd25daf4.png"},8785:(a,n,s)=>{a.exports=s.p+"assets/img/image-20210825151429150.1831d9b9.png"},3994:(a,n,s)=>{a.exports=s.p+"assets/img/image-20210825151956199.17097fe9.png"},3239:(a,n,s)=>{a.exports=s.p+"assets/img/image-20210825152714034.99acd84c.png"}}]);