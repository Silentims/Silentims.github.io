"use strict";(self.webpackChunkswbook=self.webpackChunkswbook||[]).push([[776],{6952:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-484f956b",path:"/about/about-docs-plugin-algolia.html",title:"关于 - Algolia DocSearch 的使用",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"注册与登录",slug:"注册与登录",children:[]},{level:2,title:"生成 API Key",slug:"生成-api-key",children:[]},{level:2,title:"参数配置",slug:"参数配置",children:[]},{level:2,title:"爬取索引",slug:"爬取索引",children:[]},{level:2,title:"网站集成",slug:"网站集成",children:[]}],filePathRelative:"about/about-docs-plugin-algolia.md",git:{updatedTime:162886258e4}}},8668:(n,s,a)=>{a.r(s),a.d(s,{default:()=>B});var e=a(6252),l=a(9815);const t=(0,e._)("h1",{id:"关于-algolia-docsearch-的使用",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#关于-algolia-docsearch-的使用","aria-hidden":"true"},"#"),(0,e.Uk)(" 关于 - Algolia DocSearch 的使用")],-1),o=(0,e._)("p",null,"Algolia DocSearch 是一个适用于文档网站的搜索工具，它可以根据网站的标题和内容，创建搜索索引来支持对网站中内容的全站搜索，Vuepress 官方已经集成了该插件，由于网站初始内容不较少，无法通过官方帮助爬取来获得 API Key，所以需要自行注册和爬取网站来创建索引，以下是个人按照官方文档说明成功爬取网站，生成索引和使用插件的操作流程。",-1),r=(0,e._)("div",{class:"custom-container tip"},[(0,e._)("p",{class:"custom-container-title"},"提示"),(0,e._)("p",null,"以下内容均在云服务器和 MacOS 上实践过,本篇主要以云服务器操作演示")],-1),c=(0,e._)("h2",{id:"注册与登录",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#注册与登录","aria-hidden":"true"},"#"),(0,e.Uk)(" 注册与登录")],-1),p=(0,e.Uk)("打开"),_={href:"https://www.algolia.com/",target:"_blank",rel:"noopener noreferrer"},u=(0,e.Uk)("Algolia DocSearch官网"),i=(0,e.Uk)("注册，亦可通过 Github 等第三方账号授权登录"),k=(0,e._)("h2",{id:"生成-api-key",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#生成-api-key","aria-hidden":"true"},"#"),(0,e.Uk)(" 生成 API Key")],-1),b=(0,e.Uk)("登录成功后，进入「Dashboard」控制后台，在「API Keys」中，可以查看自己的"),d=(0,e._)("code",null,"Application ID",-1),m=(0,e.Uk)("和许多带有不同权限的"),h=(0,e._)("code",null,"API Key",-1),U=(0,e.Uk)("，由于我们是自行创建搜索索引，所以此处按照"),g={href:"https://docsearch.algolia.com/docs/run-your-own/",target:"_blank",rel:"noopener noreferrer"},f=(0,e.Uk)("官方说明文档"),v=(0,e.Uk)("，需要一个包含"),y=(0,e._)("code",null,"addObject",-1),x=(0,e.Uk)("、"),A=(0,e._)("code",null,"editSettings",-1),I=(0,e.Uk)("、"),j=(0,e._)("code",null,"deleteIndex",-1),w=(0,e.Uk)("权限的密钥，所以先创建具有这三个权限的 API Key"),P=(0,e._)("p",null,[(0,e._)("img",{src:l,alt:"image-20210813170903002"})],-1),D=(0,e._)("h2",{id:"参数配置",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#参数配置","aria-hidden":"true"},"#"),(0,e.Uk)(" 参数配置")],-1),q=(0,e._)("p",null,"主要包括两部分参数：",-1),K=(0,e._)("ol",null,[(0,e._)("li",null,[(0,e._)("code",null,".env"),(0,e.Uk)("配置文件")])],-1),S=(0,e._)("p",null,[(0,e.Uk)("在电脑上根目录新增"),(0,e._)("code",null,".env"),(0,e.Uk)("文件，配置如下信息并保存")],-1),C=(0,e._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,e._)("pre",{class:"language-bash"},[(0,e._)("code",null,[(0,e._)("span",{class:"token assign-left variable"},"APPLICATION_ID"),(0,e._)("span",{class:"token operator"},"="),(0,e.Uk)("你的Application ID\n"),(0,e._)("span",{class:"token assign-left variable"},"API_KEY"),(0,e._)("span",{class:"token operator"},"="),(0,e.Uk)("上述中在管理后台生成的 API Key\n")])]),(0,e._)("div",{class:"line-numbers"},[(0,e._)("span",{class:"line-number"},"1"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"2"),(0,e._)("br")])],-1),E=(0,e._)("ol",null,[(0,e._)("li",null,[(0,e._)("code",null,"config.json"),(0,e.Uk)("爬取脚本文件")])],-1),O=(0,e._)("p",null,[(0,e.Uk)("按下面配置文件进行适当的修改，其中"),(0,e._)("code",null,"index_name"),(0,e.Uk)("为索引名，免费版默认都使用 example")],-1),L=(0,e._)("div",{class:"language-json ext-json line-numbers-mode"},[(0,e._)("pre",{class:"language-json"},[(0,e._)("code",null,[(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n  "),(0,e._)("span",{class:"token property"},'"index_name"'),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},'"example"'),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n  "),(0,e._)("span",{class:"token property"},'"start_urls"'),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"["),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token string"},'"https://www.techxiang.com/"'),(0,e.Uk)("\n  "),(0,e._)("span",{class:"token punctuation"},"]"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n  "),(0,e._)("span",{class:"token property"},'"stop_urls"'),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"["),(0,e._)("span",{class:"token punctuation"},"]"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n  "),(0,e._)("span",{class:"token property"},'"selectors"'),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token property"},'"lvl0"'),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n      "),(0,e._)("span",{class:"token property"},'"selector"'),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},'".sidebar-heading.active"'),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n      "),(0,e._)("span",{class:"token property"},'"global"'),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token boolean"},"true"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n      "),(0,e._)("span",{class:"token property"},'"default_value"'),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},'"Documentation"'),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token punctuation"},"}"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token property"},'"lvl1"'),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},'".theme-default-content h1"'),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token property"},'"lvl2"'),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},'".theme-default-content h2"'),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token property"},'"lvl3"'),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},'".theme-default-content h3"'),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token property"},'"lvl4"'),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},'".theme-default-content h4"'),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token property"},'"lvl5"'),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},'".theme-default-content h5"'),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token property"},'"text"'),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},'".theme-default-content p, .theme-default-content li"'),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token property"},'"lang"'),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n      "),(0,e._)("span",{class:"token property"},'"selector"'),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},'"/html/@lang"'),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n      "),(0,e._)("span",{class:"token property"},'"type"'),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token string"},'"xpath"'),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n      "),(0,e._)("span",{class:"token property"},'"global"'),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token boolean"},"true"),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n  "),(0,e._)("span",{class:"token punctuation"},"}"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n  "),(0,e._)("span",{class:"token property"},'"custom_settings"'),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token property"},'"attributesForFaceting"'),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"["),(0,e._)("span",{class:"token string"},'"lang"'),(0,e._)("span",{class:"token punctuation"},"]"),(0,e.Uk)("\n  "),(0,e._)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n")])]),(0,e._)("div",{class:"line-numbers"},[(0,e._)("span",{class:"line-number"},"1"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"2"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"3"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"4"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"5"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"6"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"7"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"8"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"9"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"10"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"11"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"12"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"13"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"14"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"15"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"16"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"17"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"18"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"19"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"20"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"21"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"22"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"23"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"24"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"25"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"26"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"27"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"28"),(0,e._)("br")])],-1),F=(0,e._)("h2",{id:"爬取索引",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#爬取索引","aria-hidden":"true"},"#"),(0,e.Uk)(" 爬取索引")],-1),N=(0,e._)("p",null,"本文主要通过 docke 创建官方的镜像进行爬取",-1),W=(0,e._)("blockquote",null,[(0,e._)("p",null,"确保爬取前外网可访问的网站中已经是最新的文章")],-1),G=(0,e.Uk)("安装一个 Json 解析器工具"),T={href:"https://github.com/stedolan/jq/wiki/Installation",target:"_blank",rel:"noopener noreferrer"},Y=(0,e.Uk)("jq"),z=(0,e.Uk)("，我是在云服务器中安装的"),H=(0,e._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,e._)("pre",{class:"language-bash"},[(0,e._)("code",null,[(0,e._)("span",{class:"token comment"},"# 安装EPEL源："),(0,e.Uk)("\nyum "),(0,e._)("span",{class:"token function"},"install"),(0,e.Uk)(" epel-release\n\n"),(0,e._)("span",{class:"token comment"},"# 安装完EPEL源后，可以查看下jq包是否存在："),(0,e.Uk)("\nyum list jq\n\n"),(0,e._)("span",{class:"token comment"},"# 安装jq："),(0,e.Uk)("\nyum "),(0,e._)("span",{class:"token function"},"install"),(0,e.Uk)(" jq\n")])]),(0,e._)("div",{class:"line-numbers"},[(0,e._)("span",{class:"line-number"},"1"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"2"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"3"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"4"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"5"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"6"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"7"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"8"),(0,e._)("br")])],-1),J=(0,e._)("ul",null,[(0,e._)("li",null,"docker 拉取官方镜像")],-1),M=(0,e._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,e._)("pre",{class:"language-bash"},[(0,e._)("code",null,"docker pull algolia/docsearch-scraper\n")]),(0,e._)("div",{class:"line-numbers"},[(0,e._)("span",{class:"line-number"},"1"),(0,e._)("br")])],-1),R=(0,e._)("ul",null,[(0,e._)("li",null,[(0,e.Uk)("docker 运行镜像，加载"),(0,e._)("code",null,".env"),(0,e.Uk)("配置和"),(0,e._)("code",null,"config.json"),(0,e.Uk)("文件(路径为实际存放路径)")])],-1),V=(0,e._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,e._)("pre",{class:"language-bash"},[(0,e._)("code",null,[(0,e.Uk)("docker run -it --env-file"),(0,e._)("span",{class:"token operator"},"="),(0,e.Uk)("/root/docsearch/.env -e "),(0,e._)("span",{class:"token string"},[(0,e.Uk)('"CONFIG='),(0,e._)("span",{class:"token variable"},[(0,e._)("span",{class:"token variable"},"$("),(0,e._)("span",{class:"token function"},"cat"),(0,e.Uk)(" /root/docsearch/config.json "),(0,e._)("span",{class:"token operator"},"|"),(0,e.Uk)(" jq -r tostring"),(0,e._)("span",{class:"token variable"},")")]),(0,e.Uk)('"')]),(0,e.Uk)(" algolia/docsearch-scraper\n")])]),(0,e._)("div",{class:"line-numbers"},[(0,e._)("span",{class:"line-number"},"1"),(0,e._)("br")])],-1),$=(0,e._)("h2",{id:"网站集成",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#网站集成","aria-hidden":"true"},"#"),(0,e.Uk)(" 网站集成")],-1),B={render:function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[t,o,r,c,(0,e._)("p",null,[p,(0,e._)("a",_,[u,(0,e.Wm)(a)]),i]),k,(0,e._)("p",null,[b,d,m,h,U,(0,e._)("a",g,[f,(0,e.Wm)(a)]),v,y,x,A,I,j,w]),P,D,q,K,S,C,E,O,L,F,N,W,(0,e._)("ul",null,[(0,e._)("li",null,[G,(0,e._)("a",T,[Y,(0,e.Wm)(a)]),z])]),H,J,M,R,V,$],64)}}},9815:(n,s,a)=>{n.exports=a.p+"assets/img/image-20210813170903002.4f6befa4.png"}}]);