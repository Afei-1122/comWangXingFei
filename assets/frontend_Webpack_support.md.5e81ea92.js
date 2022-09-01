import{_ as s,c as a,o as n,a as p}from"./app.11ac45a6.js";const b=JSON.parse('{"title":"5. \u8865\u5145","description":"","frontmatter":{},"headers":[{"level":2,"title":"5.1 Webpack\u7684\u4EE3\u7801\u5206\u5305","slug":"_5-1-webpack\u7684\u4EE3\u7801\u5206\u5305","link":"#_5-1-webpack\u7684\u4EE3\u7801\u5206\u5305","children":[]}],"relativePath":"frontend/Webpack/support.md","lastUpdated":1662012857000}'),l={name:"frontend/Webpack/support.md"},e=p(`<h1 id="_5-\u8865\u5145" tabindex="-1">5. \u8865\u5145 <a class="header-anchor" href="#_5-\u8865\u5145" aria-hidden="true">#</a></h1><h2 id="_5-1-webpack\u7684\u4EE3\u7801\u5206\u5305" tabindex="-1">5.1 Webpack\u7684\u4EE3\u7801\u5206\u5305 <a class="header-anchor" href="#_5-1-webpack\u7684\u4EE3\u7801\u5206\u5305" aria-hidden="true">#</a></h2><ul><li><p>\u9ED8\u8BA4\u7684\u6253\u5305\u8FC7\u7A0B\uFF1A</p><ul><li><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5728\u6784\u5EFA\u6574\u4E2A\u7EC4\u4EF6\u6811\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u56E0\u4E3A\u7EC4\u4EF6\u548C\u7EC4\u4EF6\u4E4B\u95F4\u662F\u901A\u8FC7\u6A21\u5757\u5316\u76F4\u63A5\u4F9D\u8D56\u7684\uFF0C\u90A3\u4E48webpack\u5728\u6253\u5305\u65F6\u5C31\u4F1A\u5C06\u7EC4 \u4EF6\u6A21\u5757\u6253\u5305\u5230\u4E00\u8D77\uFF08\u6BD4\u5982\u4E00\u4E2Aapp.js\u6587\u4EF6\u4E2D\uFF09\uFF1B</p></li><li><p>\u8FD9\u4E2A\u65F6\u5019\u968F\u7740\u9879\u76EE\u7684\u4E0D\u65AD\u5E9E\u5927\uFF0Capp.js\u6587\u4EF6\u7684\u5185\u5BB9\u8FC7\u5927\uFF0C\u4F1A\u9020\u6210\u9996\u5C4F\u7684\u6E32\u67D3\u901F\u5EA6\u53D8\u6162\uFF1B</p></li></ul></li><li><p>\u6253\u5305\u65F6\uFF0C\u4EE3\u7801\u7684\u5206\u5305\uFF1A</p><ul><li><p>\u6240\u4EE5\uFF0C\u5BF9\u4E8E\u4E00\u4E9B\u4E0D\u9700\u8981\u7ACB\u5373\u4F7F\u7528\u7684\u7EC4\u4EF6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5355\u72EC\u5BF9\u5B83\u4EEC\u8FDB\u884C\u62C6\u5206\uFF0C\u62C6\u5206\u6210\u4E00\u4E9B\u5C0F\u7684\u4EE3\u7801\u5757chunk.js\uFF1B</p></li><li><p>\u8FD9\u4E9Bchunk.js\u4F1A\u5728\u9700\u8981\u65F6\u4ECE\u670D\u52A1\u5668\u52A0\u8F7D\u4E0B\u6765\uFF0C\u5E76\u4E14\u8FD0\u884C\u4EE3\u7801\uFF0C\u663E\u793A\u5BF9\u5E94\u7684\u5185\u5BB9\uFF1B</p></li></ul></li><li><p>vue\u5728\u6253\u5305\u7684\u65F6\u5019\u6211\u4EEC\u53EF\u4EE5\u5728main.js\u4F7F\u7528<strong>import</strong> \u89E3\u51B3</p><ul><li><p>\u901A\u8FC7import\u51FD\u6570\u5BFC\u5165\u7684\u6A21\u5757, \u540E\u7EEDwebpack\u5BF9\u5176\u8FDB\u884C\u6253\u5305\u7684\u65F6\u5019\u5C31\u4F1A\u8FDB\u884C\u5206\u5305\u7684\u64CD\u4F5C</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;./12_\u5F02\u6B65\u7EC4\u4EF6\u7684\u4F7F\u7528/utils/math&quot;</span><span style="color:#C9D1D9;">).</span><span style="color:#D2A8FF;">then</span><span style="color:#C9D1D9;">((</span><span style="color:#FFA657;">res</span><span style="color:#C9D1D9;">) </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(res.</span><span style="color:#D2A8FF;">sum</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">20</span><span style="color:#C9D1D9;">, </span><span style="color:#79C0FF;">30</span><span style="color:#C9D1D9;">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li></ul></li></ul>`,3),o=[e];function t(r,c,i,u,d,_){return n(),a("div",null,o)}const h=s(l,[["render",t]]);export{b as __pageData,h as default};
