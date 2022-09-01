import{_ as s,c as n,o as a,a as l}from"./app.11ac45a6.js";const u=JSON.parse('{"title":"1. \u6982\u8FF0","description":"","frontmatter":{},"headers":[{"level":2,"title":"2.1 \u4FEE\u9970\u7C7B","slug":"_2-1-\u4FEE\u9970\u7C7B","link":"#_2-1-\u4FEE\u9970\u7C7B","children":[]},{"level":2,"title":"2.2 \u4FEE\u9970\u65B9\u6CD5","slug":"_2-2-\u4FEE\u9970\u65B9\u6CD5","link":"#_2-2-\u4FEE\u9970\u65B9\u6CD5","children":[]},{"level":2,"title":"2.3 \u4FEE\u9970\u53D8\u91CF-\u5C40\u90E8\u53D8\u91CF","slug":"_2-3-\u4FEE\u9970\u53D8\u91CF-\u5C40\u90E8\u53D8\u91CF","link":"#_2-3-\u4FEE\u9970\u53D8\u91CF-\u5C40\u90E8\u53D8\u91CF","children":[]},{"level":2,"title":"2.4 \u4FEE\u9970\u53D8\u91CF-\u5B9E\u4F8B\u6210\u5458\u53D8\u91CF","slug":"_2-4-\u4FEE\u9970\u53D8\u91CF-\u5B9E\u4F8B\u6210\u5458\u53D8\u91CF","link":"#_2-4-\u4FEE\u9970\u53D8\u91CF-\u5B9E\u4F8B\u6210\u5458\u53D8\u91CF","children":[]}],"relativePath":"backend/JavaSE/final\u5173\u952E\u5B57.md","lastUpdated":1662012857000}'),p={name:"backend/JavaSE/final\u5173\u952E\u5B57.md"},e=l(`<h1 id="_1-\u6982\u8FF0" tabindex="-1">1. \u6982\u8FF0 <a class="header-anchor" href="#_1-\u6982\u8FF0" aria-hidden="true">#</a></h1><p>\u5B66\u4E60\u4E86\u7EE7\u627F\u540E\uFF0C\u6211\u4EEC\u77E5\u9053\uFF0C\u5B50\u7C7B\u53EF\u4EE5\u5728\u7236\u7C7B\u7684\u57FA\u7840\u4E0A\u6539\u5199\u7236\u7C7B\u5185\u5BB9\uFF0C\u6BD4\u5982\uFF0C\u65B9\u6CD5\u91CD\u5199\u3002\u90A3\u4E48\u6211\u4EEC\u80FD\u4E0D\u80FD\u968F\u610F\u7684\u7EE7\u627FAPI\u4E2D\u63D0\u4F9B\u7684\u7C7B\uFF0C\u6539\u5199\u5176\u5185\u5BB9\u5462\uFF1F\u663E\u7136\u8FD9\u662F\u4E0D\u5408\u9002\u7684\u3002\u4E3A\u4E86\u907F\u514D\u8FD9\u79CD\u968F\u610F\u6539\u5199\u7684\u60C5\u51B5\uFF0CJava\u63D0\u4F9B\u4E86<code>final</code> \u5173\u952E\u5B57\uFF0C\u7528\u4E8E\u4FEE\u9970<strong>\u4E0D\u53EF\u6539\u53D8</strong>\u5185\u5BB9\u3002</p><ul><li><strong>final</strong>\uFF1A \u4E0D\u53EF\u6539\u53D8\uFF0C\u6700\u7EC8\u7684\u542B\u4E49\u3002\u53EF\u4EE5\u7528\u4E8E\u4FEE\u9970\u7C7B\u3001\u65B9\u6CD5\u548C\u53D8\u91CF\u3002 <ul><li>\u7C7B\uFF1A\u88AB\u4FEE\u9970\u7684\u7C7B\uFF0C\u4E0D\u80FD\u88AB\u7EE7\u627F\u3002</li><li>\u65B9\u6CD5\uFF1A\u88AB\u4FEE\u9970\u7684\u65B9\u6CD5\uFF0C\u4E0D\u80FD\u88AB\u91CD\u5199\u3002</li><li>\u53D8\u91CF\uFF1A\u88AB\u4FEE\u9970\u7684\u53D8\u91CF\uFF0C\u6709\u4E14\u4EC5\u80FD\u88AB\u8D4B\u503C\u4E00\u6B21\u3002</li></ul></li></ul><h1 id="_2-\u4F7F\u7528\u65B9\u5F0F" tabindex="-1">2. \u4F7F\u7528\u65B9\u5F0F <a class="header-anchor" href="#_2-\u4F7F\u7528\u65B9\u5F0F" aria-hidden="true">#</a></h1><h2 id="_2-1-\u4FEE\u9970\u7C7B" tabindex="-1">2.1 \u4FEE\u9970\u7C7B <a class="header-anchor" href="#_2-1-\u4FEE\u9970\u7C7B" aria-hidden="true">#</a></h2><p>final\u4FEE\u9970\u7684\u7C7B\uFF0C\u4E0D\u80FD\u88AB\u7EE7\u627F\u3002</p><p>\u683C\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-java line-numbers-mode"><button class="copy"></button><span class="lang">java</span><pre><code><span class="line"><span style="color:#FF7B72;">final</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">class</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">\u7C7B\u540D</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4EE3\u7801:</p><div class="language-java line-numbers-mode"><button class="copy"></button><span class="lang">java</span><pre><code><span class="line"><span style="color:#FF7B72;">final</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">class</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">Fu</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"><span style="color:#8B949E;">// class Zi extends Fu {} // \u62A5\u9519,\u4E0D\u80FD\u7EE7\u627Ffinal\u7684\u7C7B</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u67E5\u8BE2API\u53D1\u73B0\u50CF <code>public final class String</code> \u3001<code>public final class Math</code> \u3001<code>public final class Scanner</code> \u7B49\uFF0C\u5F88\u591A\u6211\u4EEC\u5B66\u4E60\u8FC7\u7684\u7C7B\uFF0C\u90FD\u662F\u88ABfinal\u4FEE\u9970\u7684\uFF0C\u76EE\u7684\u5C31\u662F\u4F9B\u6211\u4EEC\u4F7F\u7528\uFF0C\u800C\u4E0D\u8BA9\u6211\u4EEC\u6240\u4EE5\u6539\u53D8\u5176\u5185\u5BB9\u3002</p><h2 id="_2-2-\u4FEE\u9970\u65B9\u6CD5" tabindex="-1">2.2 \u4FEE\u9970\u65B9\u6CD5 <a class="header-anchor" href="#_2-2-\u4FEE\u9970\u65B9\u6CD5" aria-hidden="true">#</a></h2><p>final\u4FEE\u9970\u7684\u65B9\u6CD5\uFF0C\u4E0D\u80FD\u88AB\u91CD\u5199\u3002 \u683C\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-java line-numbers-mode"><button class="copy"></button><span class="lang">java</span><pre><code><span class="line"><span style="color:#C9D1D9;">\u4FEE\u9970\u7B26 </span><span style="color:#FF7B72;">final</span><span style="color:#C9D1D9;"> \u8FD4\u56DE\u503C\u7C7B\u578B \u65B9\u6CD5\u540D(\u53C2\u6570\u5217\u8868){</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">//\u65B9\u6CD5\u4F53</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4EE3\u7801:</p><div class="language-java line-numbers-mode"><button class="copy"></button><span class="lang">java</span><pre><code><span class="line"><span style="color:#FF7B72;">class</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">Fu2</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">	</span><span style="color:#FF7B72;">public</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">final</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">void</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">show1</span><span style="color:#C9D1D9;">() {</span></span>
<span class="line"><span style="color:#C9D1D9;">		System.out.</span><span style="color:#D2A8FF;">println</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;Fu2 show1&quot;</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"><span style="color:#C9D1D9;">	}</span></span>
<span class="line"><span style="color:#C9D1D9;">	</span><span style="color:#FF7B72;">public</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">void</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">show2</span><span style="color:#C9D1D9;">() {</span></span>
<span class="line"><span style="color:#C9D1D9;">		System.out.</span><span style="color:#D2A8FF;">println</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;Fu2 show2&quot;</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"><span style="color:#C9D1D9;">	}</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">class</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">Zi2</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">extends</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">Fu2</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#8B949E;">//	@Override</span></span>
<span class="line"><span style="color:#8B949E;">//	public void show1() {</span></span>
<span class="line"><span style="color:#8B949E;">//		System.out.println(&quot;Zi2 show1&quot;);</span></span>
<span class="line"><span style="color:#8B949E;">//	}</span></span>
<span class="line"><span style="color:#C9D1D9;">	@</span><span style="color:#FF7B72;">Override</span></span>
<span class="line"><span style="color:#C9D1D9;">	</span><span style="color:#FF7B72;">public</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">void</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">show2</span><span style="color:#C9D1D9;">() {</span></span>
<span class="line"><span style="color:#C9D1D9;">		System.out.</span><span style="color:#D2A8FF;">println</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;Zi2 show2&quot;</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"><span style="color:#C9D1D9;">	}</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="_2-3-\u4FEE\u9970\u53D8\u91CF-\u5C40\u90E8\u53D8\u91CF" tabindex="-1">2.3 \u4FEE\u9970\u53D8\u91CF-\u5C40\u90E8\u53D8\u91CF <a class="header-anchor" href="#_2-3-\u4FEE\u9970\u53D8\u91CF-\u5C40\u90E8\u53D8\u91CF" aria-hidden="true">#</a></h2><p>\u57FA\u672C\u7C7B\u578B\u7684\u5C40\u90E8\u53D8\u91CF\uFF0C\u88ABfinal\u4FEE\u9970\u540E\uFF0C\u53EA\u80FD\u8D4B\u503C\u4E00\u6B21\uFF0C\u4E0D\u80FD\u518D\u66F4\u6539\u3002\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-java line-numbers-mode"><button class="copy"></button><span class="lang">java</span><pre><code><span class="line"><span style="color:#FF7B72;">public</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">class</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">FinalDemo1</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">public</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">static</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">void</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">main</span><span style="color:#C9D1D9;">(</span><span style="color:#FF7B72;">String</span><span style="color:#C9D1D9;">[] </span><span style="color:#FFA657;">args</span><span style="color:#C9D1D9;">) {</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#8B949E;">// \u58F0\u660E\u53D8\u91CF\uFF0C\u4F7F\u7528final\u4FEE\u9970</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#FF7B72;">final</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">int</span><span style="color:#FFA657;"> </span><span style="color:#C9D1D9;">a;</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#8B949E;">// \u7B2C\u4E00\u6B21\u8D4B\u503C </span></span>
<span class="line"><span style="color:#C9D1D9;">        a </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">10</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#8B949E;">// \u7B2C\u4E8C\u6B21\u8D4B\u503C</span></span>
<span class="line"><span style="color:#C9D1D9;">        a </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">20</span><span style="color:#C9D1D9;">; </span><span style="color:#8B949E;">// \u62A5\u9519,\u4E0D\u53EF\u91CD\u65B0\u8D4B\u503C</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#8B949E;">// \u58F0\u660E\u53D8\u91CF\uFF0C\u76F4\u63A5\u8D4B\u503C\uFF0C\u4F7F\u7528final\u4FEE\u9970</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#FF7B72;">final</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">int</span><span style="color:#FFA657;"> </span><span style="color:#C9D1D9;">b</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">10</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#8B949E;">// \u7B2C\u4E8C\u6B21\u8D4B\u503C</span></span>
<span class="line"><span style="color:#C9D1D9;">        b </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">20</span><span style="color:#C9D1D9;">; </span><span style="color:#8B949E;">// \u62A5\u9519,\u4E0D\u53EF\u91CD\u65B0\u8D4B\u503C</span></span>
<span class="line"><span style="color:#C9D1D9;">    }</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u601D\u8003\uFF0C\u5982\u4E0B\u4E24\u79CD\u5199\u6CD5\uFF0C\u54EA\u79CD\u53EF\u4EE5\u901A\u8FC7\u7F16\u8BD1\uFF1F</p><p>\u5199\u6CD51\uFF1A</p><div class="language-java line-numbers-mode"><button class="copy"></button><span class="lang">java</span><pre><code><span class="line"><span style="color:#FF7B72;">final</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">int</span><span style="color:#FFA657;"> </span><span style="color:#C9D1D9;">c</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#FF7B72;">for</span><span style="color:#C9D1D9;"> (</span><span style="color:#FF7B72;">int</span><span style="color:#FFA657;"> </span><span style="color:#C9D1D9;">i</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">; i </span><span style="color:#FF7B72;">&lt;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">10</span><span style="color:#C9D1D9;">; i</span><span style="color:#FF7B72;">++</span><span style="color:#C9D1D9;">) {</span></span>
<span class="line"><span style="color:#C9D1D9;">    c </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> i;</span></span>
<span class="line"><span style="color:#C9D1D9;">    System.out.</span><span style="color:#D2A8FF;">println</span><span style="color:#C9D1D9;">(c);</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5199\u6CD52\uFF1A</p><div class="language-java line-numbers-mode"><button class="copy"></button><span class="lang">java</span><pre><code><span class="line"><span style="color:#FF7B72;">for</span><span style="color:#C9D1D9;"> (</span><span style="color:#FF7B72;">int</span><span style="color:#FFA657;"> </span><span style="color:#C9D1D9;">i</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">; i </span><span style="color:#FF7B72;">&lt;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">10</span><span style="color:#C9D1D9;">; i</span><span style="color:#FF7B72;">++</span><span style="color:#C9D1D9;">) {</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">final</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">int</span><span style="color:#FFA657;"> </span><span style="color:#C9D1D9;">c</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> i;</span></span>
<span class="line"><span style="color:#C9D1D9;">    System.out.</span><span style="color:#D2A8FF;">println</span><span style="color:#C9D1D9;">(c);</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u6839\u636E <code>final</code> \u7684\u5B9A\u4E49\uFF0C\u5199\u6CD51\u62A5\u9519\uFF01\u5199\u6CD52\uFF0C\u4E3A\u4EC0\u4E48\u901A\u8FC7\u7F16\u8BD1\u5462\uFF1F\u56E0\u4E3A\u6BCF\u6B21\u5FAA\u73AF\uFF0C\u90FD\u662F\u4E00\u6B21\u65B0\u7684\u53D8\u91CFc\u3002\u8FD9\u4E5F\u662F\u5927\u5BB6\u9700\u8981\u6CE8\u610F\u7684\u5730\u65B9\u3002</p><h2 id="_2-4-\u4FEE\u9970\u53D8\u91CF-\u5B9E\u4F8B\u6210\u5458\u53D8\u91CF" tabindex="-1">2.4 \u4FEE\u9970\u53D8\u91CF-\u5B9E\u4F8B\u6210\u5458\u53D8\u91CF <a class="header-anchor" href="#_2-4-\u4FEE\u9970\u53D8\u91CF-\u5B9E\u4F8B\u6210\u5458\u53D8\u91CF" aria-hidden="true">#</a></h2><p>\u6210\u5458\u53D8\u91CF\u6D89\u53CA\u5230\u521D\u59CB\u5316\u7684\u95EE\u9898\uFF0C\u521D\u59CB\u5316\u65B9\u5F0F\u6709\u663E\u793A\u521D\u59CB\u5316\u548C\u6784\u9020\u5668\u521D\u59CB\u5316\uFF0C\u53EA\u80FD\u9009\u62E9\u5176\u4E2D\u4E00\u4E2A\uFF1A</p><ul><li>\u663E\u793A\u521D\u59CB\u5316(\u5728\u5B9A\u4E49\u6210\u5458\u53D8\u91CF\u7684\u65F6\u5019\u7ACB\u9A6C\u8D4B\u503C)\uFF1B</li></ul><div class="language-java line-numbers-mode"><button class="copy"></button><span class="lang">java</span><pre><code><span class="line"><span style="color:#FF7B72;">public</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">class</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">Student</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">final</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">int</span><span style="color:#FFA657;"> </span><span style="color:#C9D1D9;">num</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">10</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li><p>\u6784\u9020\u5668\u521D\u59CB\u5316(\u5728\u6784\u9020\u5668\u4E2D\u8D4B\u503C\u4E00\u6B21)\u3002</p><p><strong>\u6CE8\u610F\uFF1A\u6BCF\u4E2A\u6784\u9020\u5668\u4E2D\u90FD\u8981\u8D4B\u503C\u4E00\u6B21\uFF01</strong></p></li></ul><div class="language-java line-numbers-mode"><button class="copy"></button><span class="lang">java</span><pre><code><span class="line"><span style="color:#FF7B72;">public</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">class</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">Student</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">final</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">int</span><span style="color:#FFA657;"> </span><span style="color:#C9D1D9;">num</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">10</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">final</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">int</span><span style="color:#FFA657;"> </span><span style="color:#C9D1D9;">num2;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">public</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">Student</span><span style="color:#C9D1D9;">() {</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.num2 </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">20</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#8B949E;">//     this.num2 = 20;</span></span>
<span class="line"><span style="color:#C9D1D9;">    }</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span></span>
<span class="line"><span style="color:#C9D1D9;">     </span><span style="color:#FF7B72;">public</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">Student</span><span style="color:#C9D1D9;">(String </span><span style="color:#FFA657;">name</span><span style="color:#C9D1D9;">) {</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.num2 </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">20</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#8B949E;">//     this.num2 = 20;</span></span>
<span class="line"><span style="color:#C9D1D9;">    }</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><blockquote><p>\u88ABfinal\u4FEE\u9970\u7684\u5E38\u91CF\u540D\u79F0\uFF0C\u4E00\u822C\u90FD\u6709\u4E66\u5199\u89C4\u8303\uFF0C\u6240\u6709\u5B57\u6BCD\u90FD<strong>\u5927\u5199</strong>\u3002</p></blockquote>`,32),o=[e];function c(r,t,i,D,y,F){return a(),n("div",null,o)}const C=s(p,[["render",c]]);export{u as __pageData,C as default};
