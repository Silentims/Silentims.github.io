"use strict";(self.webpackChunkswbook=self.webpackChunkswbook||[]).push([[185],{9224:(e,l,r)=>{r.r(l),r.d(l,{data:()=>a});const a={key:"v-2f178263",path:"/about/about-algorithm-daily-challenge.html",title:"LeetCode  21 天挑战日志",lang:"zh-CN",frontmatter:{sidebar:"auto"},excerpt:"",headers:[{level:2,title:"为什么参加算法挑战 ？",slug:"为什么参加算法挑战",children:[]},{level:2,title:"第一周 数组",slug:"第一周-数组",children:[{level:3,title:"Day01 原地修改数组",slug:"day01-原地修改数组",children:[]},{level:3,title:"Day02 前缀和技巧",slug:"day02-前缀和技巧",children:[]},{level:3,title:"Day03 差分数组技巧",slug:"day03-差分数组技巧",children:[]},{level:3,title:"Day04 回文串的判断",slug:"day04-回文串的判断",children:[]},{level:3,title:"Day05 二分搜索原理",slug:"day05-二分搜索原理",children:[]}]}],filePathRelative:"about/about-algorithm-daily-challenge.md"}},2988:(e,l,r)=>{r.r(l),r.d(l,{default:()=>te});var a=r(6252);const n=(0,a._)("h1",{id:"leetcode-21-天挑战日志",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#leetcode-21-天挑战日志","aria-hidden":"true"},"#"),(0,a.Uk)(" LeetCode 21 天挑战日志")],-1),t=(0,a._)("p",null,"写一个流水式日志，来记录自己在参加 21 天算法挑战过程中，刷题遇到的问题和一些想法：",-1),o=(0,a._)("h2",{id:"为什么参加算法挑战",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#为什么参加算法挑战","aria-hidden":"true"},"#"),(0,a.Uk)(" 为什么参加算法挑战 ？")],-1),d=(0,a._)("ol",null,[(0,a._)("li",null,"算法一直是自己久攻不下和很难坚持下去的弱项。"),(0,a._)("li",null,"许多大厂目前基本上都要考算法，即便是中小厂也会涉及算法题，虽然社招岗位对算法要求没有那么高，但是不能完全不会。"),(0,a._)("li",null,"培养算法的思维，我觉得学习算法就是学习计算机思维，从计算机的角度思考代码实现，在日后的实际工作中也能多一个分析角度，对了解许多技术底层原理和选择合适的底层数据结构都有所帮助。")],-1),i={href:"https://www.yuque.com/books/share/f7a1194d-fe2f-4096-8548-a470790543d2",target:"_blank",rel:"noopener noreferrer"},u=(0,a.Uk)("课程目录"),h=(0,a._)("h2",{id:"第一周-数组",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#第一周-数组","aria-hidden":"true"},"#"),(0,a.Uk)(" 第一周 数组")],-1),p=(0,a._)("h3",{id:"day01-原地修改数组",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#day01-原地修改数组","aria-hidden":"true"},"#"),(0,a.Uk)(" Day01 原地修改数组")],-1),s=(0,a._)("p",null,"今天是第一天，课程内容是「原地修改数组」",-1),_=(0,a._)("p",null,"必做作业有 2 题：",-1),c={href:"https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/",target:"_blank",rel:"noopener noreferrer"},m=(0,a.Uk)("26.删除排序数组中的重复项（简单）"),f={href:"https://leetcode-cn.com/problems/remove-element/",target:"_blank",rel:"noopener noreferrer"},b=(0,a.Uk)("27.移除元素（简单）"),k=(0,a._)("p",null,"选做题有 2 题：",-1),y={href:"https://leetcode-cn.com/problems/move-zeroes/",target:"_blank",rel:"noopener noreferrer"},g=(0,a.Uk)("283.移动零（简单）"),U={href:"https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/",target:"_blank",rel:"noopener noreferrer"},v=(0,a.Uk)("83.删除排序链表中的重复元素（简单）"),W=(0,a.uE)('<ul><li>整体感受：</li></ul><p>首先 4 题中有 2 题在 4 个月前刷过，分别是 27 和 283，即移除元素和移动零，虽然刷过，但是看完题目，依旧没什么思路，简单看了下课件分析后，回想起了双指针，所以后面解题思路就清晰一些，但是实际编码的质量不高，居然还会存在语法的问题舒适不应该，其次判断条件的临界值没弄清楚，导致频繁出现数组越界的问题。不过比前几个月刷题的感觉要顺手多了，可能是最近看了许多与底层数据结构相关的内容有关系。</p><ul><li>主要收获：</li></ul><p>学习到有关数组双指针和链表入门的解题思路：</p><ol><li>双指针如果都是从左开始移动遍历，那么其中有一个负责移动探路，另一个完成赋值或替换，其中优化的题解中，还引入中间临时变量temp来交换（移除零这题）看完题解后有被“哇”到；</li><li>双指针也可以是左指针和右指针同时像中间移动，时间复杂度进一步降低；</li><li>链表的解题思路关键点在于node中的next指向；</li></ol><h3 id="day02-前缀和技巧" tabindex="-1"><a class="header-anchor" href="#day02-前缀和技巧" aria-hidden="true">#</a> Day02 前缀和技巧</h3><p>今天的课程是「day2.前缀和技巧」</p><p>必做作业有 1 题：</p>',8),D={href:"https://leetcode-cn.com/problems/subarray-sum-equals-k/",target:"_blank",rel:"noopener noreferrer"},x=(0,a.Uk)("560.和为K的子数组（中等）"),w=(0,a._)("p",null,"选做题有 1 题：",-1),j={href:"https://leetcode-cn.com/problems/range-sum-query-2d-immutable/",target:"_blank",rel:"noopener noreferrer"},C=(0,a.Uk)("304.二维区域和检索 - 矩阵不可变（中等）"),q=(0,a._)("ul",null,[(0,a._)("li",null,"整体感受：")],-1),L=(0,a._)("p",null,"对于数组的解题思路有了新的收获，对于采用哈希表结构的解法开始理解有一些吃力，看完动图题解后恍然大悟",-1),z=(0,a._)("ul",null,[(0,a._)("li",null,"主要收获：")],-1),E=(0,a._)("p",null,"前缀和的应用场景是，需要对某个区间[i...j]频繁查询累计和，避免每次查询都遍历这个区间。",-1),H=(0,a._)("h3",{id:"day03-差分数组技巧",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#day03-差分数组技巧","aria-hidden":"true"},"#"),(0,a.Uk)(" Day03 差分数组技巧")],-1),K=(0,a._)("p",null,"今天的课程是「day3：差分数组技巧」",-1),N=(0,a._)("p",null,"必做作业有 1 题：",-1),O={href:"https://leetcode-cn.com/problems/car-pooling/",target:"_blank",rel:"noopener noreferrer"},P=(0,a.Uk)("1094.拼车（中等）"),R=(0,a._)("p",null,"选做题有 1 题：",-1),Y={href:"https://leetcode-cn.com/problems/corporate-flight-bookings/",target:"_blank",rel:"noopener noreferrer"},A=(0,a.Uk)("1109.航班预订统计（中等）"),B=(0,a._)("ul",null,[(0,a._)("li",null,"整体感受与收获：")],-1),F=(0,a._)("p",null,"与前缀和的思路差不多，学习到了差分数组：",-1),G=(0,a._)("p",null,"差分数组的应用场景是，需要对某个区间[i...j]频繁地加或减某一值，避免每次都遍历这个区间。比如拼车的题中，既有上车，也有下车，所以可以遍历每个站点，上车的加人，下车的减人。而航班预定的题思路则是，遍历每一个航班，涉及出航定订单加，后边不涉及的减，本质上也是利用分差数组，即求区间[i,j]，则从i开始往后的求和，减去j+1往后的求和，就是i到j之间的和。",-1),I=(0,a._)("h3",{id:"day04-回文串的判断",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#day04-回文串的判断","aria-hidden":"true"},"#"),(0,a.Uk)(" Day04 回文串的判断")],-1),J=(0,a._)("p",null,"今天的课程是「day4：回文串的判断」",-1),M=(0,a._)("p",null,"必做作业有 1 题：",-1),Q={href:"https://leetcode-cn.com/problems/longest-palindromic-substring/",target:"_blank",rel:"noopener noreferrer"},S=(0,a.Uk)("5.最长回文子串（中等）"),T=(0,a._)("p",null,"整体感受：",-1),V=(0,a._)("p",null,"注意理解此题的陷阱，并不是简单的反转找重复字符串，而是要找到数组从中间开始往两头遍历查找。不过此题还需要多理解，对于解法有些疑惑。",-1),X=(0,a._)("h3",{id:"day05-二分搜索原理",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#day05-二分搜索原理","aria-hidden":"true"},"#"),(0,a.Uk)(" Day05 二分搜索原理")],-1),Z=(0,a._)("p",null,"今天的课程是「day5：二分搜索原理」",-1),$=(0,a._)("p",null,"必做作业有 1 题：",-1),ee={href:"https://leetcode-cn.com/problems/binary-search/",target:"_blank",rel:"noopener noreferrer"},le=(0,a.Uk)("704.二分查找（简单）"),re=(0,a._)("p",null,"选做题 1 道：",-1),ae={href:"https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/",target:"_blank",rel:"noopener noreferrer"},ne=(0,a.Uk)("34.在排序数组中查找元素的第一个和最后一个位置（中等）"),te={render:function(e,l){const r=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[n,t,o,d,(0,a._)("p",null,[(0,a._)("a",i,[u,(0,a.Wm)(r)])]),h,p,s,_,(0,a._)("p",null,[(0,a._)("a",c,[m,(0,a.Wm)(r)])]),(0,a._)("p",null,[(0,a._)("a",f,[b,(0,a.Wm)(r)])]),k,(0,a._)("p",null,[(0,a._)("a",y,[g,(0,a.Wm)(r)])]),(0,a._)("p",null,[(0,a._)("a",U,[v,(0,a.Wm)(r)])]),W,(0,a._)("p",null,[(0,a._)("a",D,[x,(0,a.Wm)(r)])]),w,(0,a._)("p",null,[(0,a._)("a",j,[C,(0,a.Wm)(r)])]),q,L,z,E,H,K,N,(0,a._)("p",null,[(0,a._)("a",O,[P,(0,a.Wm)(r)])]),R,(0,a._)("p",null,[(0,a._)("a",Y,[A,(0,a.Wm)(r)])]),B,F,G,I,J,M,(0,a._)("p",null,[(0,a._)("a",Q,[S,(0,a.Wm)(r)])]),T,V,X,Z,$,(0,a._)("p",null,[(0,a._)("a",ee,[le,(0,a.Wm)(r)])]),re,(0,a._)("p",null,[(0,a._)("a",ae,[ne,(0,a.Wm)(r)])])],64)}}}}]);