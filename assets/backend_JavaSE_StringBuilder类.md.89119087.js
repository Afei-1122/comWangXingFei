import{_ as s,c as n,o as a,a as l}from"./app.11ac45a6.js";const d=JSON.parse('{"title":"1. \u5B57\u7B26\u4E32\u62FC\u63A5\u95EE\u9898","description":"","frontmatter":{},"headers":[{"level":2,"title":"append\u65B9\u6CD5","slug":"append\u65B9\u6CD5","link":"#append\u65B9\u6CD5","children":[]},{"level":2,"title":"toString\u65B9\u6CD5","slug":"tostring\u65B9\u6CD5","link":"#tostring\u65B9\u6CD5","children":[]}],"relativePath":"backend/JavaSE/StringBuilder\u7C7B.md","lastUpdated":1662012857000}'),p={name:"backend/JavaSE/StringBuilder\u7C7B.md"},o=l(`<h1 id="_1-\u5B57\u7B26\u4E32\u62FC\u63A5\u95EE\u9898" tabindex="-1">1. \u5B57\u7B26\u4E32\u62FC\u63A5\u95EE\u9898 <a class="header-anchor" href="#_1-\u5B57\u7B26\u4E32\u62FC\u63A5\u95EE\u9898" aria-hidden="true">#</a></h1><p>\u7531\u4E8EString\u7C7B\u7684\u5BF9\u8C61\u5185\u5BB9\u4E0D\u53EF\u6539\u53D8\uFF0C\u6240\u4EE5\u6BCF\u5F53\u8FDB\u884C\u5B57\u7B26\u4E32\u62FC\u63A5\u65F6\uFF0C\u603B\u662F\u4F1A\u5728\u5185\u5B58\u4E2D\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61\u3002\u4F8B\u5982\uFF1A</p><div class="language-java line-numbers-mode"><button class="copy"></button><span class="lang">java</span><pre><code><span class="line"><span style="color:#FF7B72;">public</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">class</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">StringDemo</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">public</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">static</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">void</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">main</span><span style="color:#C9D1D9;">(</span><span style="color:#FF7B72;">String</span><span style="color:#C9D1D9;">[] </span><span style="color:#FFA657;">args</span><span style="color:#C9D1D9;">) {</span></span>
<span class="line"><span style="color:#C9D1D9;">        String</span><span style="color:#FFA657;"> </span><span style="color:#C9D1D9;">s</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&quot;Hello&quot;</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">        s </span><span style="color:#FF7B72;">+=</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&quot;World&quot;</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">        System.out.</span><span style="color:#D2A8FF;">println</span><span style="color:#C9D1D9;">(s);</span></span>
<span class="line"><span style="color:#C9D1D9;">    }</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u5728API\u4E2D\u5BF9String\u7C7B\u6709\u8FD9\u6837\u7684\u63CF\u8FF0\uFF1A\u5B57\u7B26\u4E32\u662F\u5E38\u91CF\uFF0C\u5B83\u4EEC\u7684\u503C\u5728\u521B\u5EFA\u540E\u4E0D\u80FD\u88AB\u66F4\u6539\u3002</p><p>\u6839\u636E\u8FD9\u53E5\u8BDD\u5206\u6790\u6211\u4EEC\u7684\u4EE3\u7801\uFF0C\u5176\u5B9E\u603B\u5171\u4EA7\u751F\u4E86\u4E09\u4E2A\u5B57\u7B26\u4E32\uFF0C\u5373<code>&quot;Hello&quot;</code>\u3001<code>&quot;World&quot;</code>\u548C<code>&quot;HelloWorld&quot;</code>\u3002\u5F15\u7528\u53D8\u91CFs\u9996\u5148\u6307\u5411<code>Hello</code>\u5BF9\u8C61\uFF0C\u6700\u7EC8\u6307\u5411\u62FC\u63A5\u51FA\u6765\u7684\u65B0\u5B57\u7B26\u4E32\u5BF9\u8C61\uFF0C\u5373<code>HelloWord</code> \u3002</p><p>\u7531\u6B64\u53EF\u77E5\uFF0C\u5982\u679C\u5BF9\u5B57\u7B26\u4E32\u8FDB\u884C\u62FC\u63A5\u64CD\u4F5C\uFF0C\u6BCF\u6B21\u62FC\u63A5\uFF0C\u90FD\u4F1A\u6784\u5EFA\u4E00\u4E2A\u65B0\u7684String\u5BF9\u8C61\uFF0C\u65E2\u8017\u65F6\uFF0C\u53C8\u6D6A\u8D39\u7A7A\u95F4\u3002\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E00\u95EE\u9898\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>java.lang.StringBuilder</code>\u7C7B\u3002</p><h1 id="_2-stringbuilder\u6982\u8FF0" tabindex="-1">2. StringBuilder\u6982\u8FF0 <a class="header-anchor" href="#_2-stringbuilder\u6982\u8FF0" aria-hidden="true">#</a></h1><p>\u67E5\u9605<code>java.lang.StringBuilder</code>\u7684API\uFF0CStringBuilder\u53C8\u79F0\u4E3A\u53EF\u53D8\u5B57\u7B26\u5E8F\u5217\uFF0C\u5B83\u662F\u4E00\u4E2A\u7C7B\u4F3C\u4E8E String \u7684\u5B57\u7B26\u4E32\u7F13\u51B2\u533A\uFF0C\u901A\u8FC7\u67D0\u4E9B\u65B9\u6CD5\u8C03\u7528\u53EF\u4EE5\u6539\u53D8\u8BE5\u5E8F\u5217\u7684\u957F\u5EA6\u548C\u5185\u5BB9\u3002</p><p>\u539F\u6765StringBuilder\u662F\u4E2A\u5B57\u7B26\u4E32\u7684\u7F13\u51B2\u533A\uFF0C\u5373\u5B83\u662F\u4E00\u4E2A\u5BB9\u5668\uFF0C\u5BB9\u5668\u4E2D\u53EF\u4EE5\u88C5\u5F88\u591A\u5B57\u7B26\u4E32\u3002\u5E76\u4E14\u80FD\u591F\u5BF9\u5176\u4E2D\u7684\u5B57\u7B26\u4E32\u8FDB\u884C\u5404\u79CD\u64CD\u4F5C\u3002</p><p>\u5B83\u7684\u5185\u90E8\u62E5\u6709\u4E00\u4E2A\u6570\u7EC4\u7528\u6765\u5B58\u653E\u5B57\u7B26\u4E32\u5185\u5BB9\uFF0C\u8FDB\u884C\u5B57\u7B26\u4E32\u62FC\u63A5\u65F6\uFF0C\u76F4\u63A5\u5728\u6570\u7EC4\u4E2D\u52A0\u5165\u65B0\u5185\u5BB9\u3002StringBuilder\u4F1A\u81EA\u52A8\u7EF4\u62A4\u6570\u7EC4\u7684\u6269\u5BB9\u3002\u539F\u7406\u5982\u4E0B\u56FE\u6240\u793A\uFF1A(\u9ED8\u8BA416\u5B57\u7B26\u7A7A\u95F4\uFF0C\u8D85\u8FC7\u81EA\u52A8\u6269\u5145)</p><h1 id="_3-\u6784\u9020\u65B9\u6CD5" tabindex="-1">3. \u6784\u9020\u65B9\u6CD5 <a class="header-anchor" href="#_3-\u6784\u9020\u65B9\u6CD5" aria-hidden="true">#</a></h1><p>\u6839\u636EStringBuilder\u7684API\u6587\u6863\uFF0C\u5E38\u7528\u6784\u9020\u65B9\u6CD5\u67092\u4E2A\uFF1A</p><ul><li><code>public StringBuilder()</code>\uFF1A\u6784\u9020\u4E00\u4E2A\u7A7A\u7684StringBuilder\u5BB9\u5668\u3002</li><li><code>public StringBuilder(String str)</code>\uFF1A\u6784\u9020\u4E00\u4E2AStringBuilder\u5BB9\u5668\uFF0C\u5E76\u5C06\u5B57\u7B26\u4E32\u6DFB\u52A0\u8FDB\u53BB\u3002</li></ul><div class="language-java line-numbers-mode"><button class="copy"></button><span class="lang">java</span><pre><code><span class="line"><span style="color:#FF7B72;">public</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">class</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">StringBuilderDemo</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">public</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">static</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">void</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">main</span><span style="color:#C9D1D9;">(</span><span style="color:#FF7B72;">String</span><span style="color:#C9D1D9;">[] </span><span style="color:#FFA657;">args</span><span style="color:#C9D1D9;">) {</span></span>
<span class="line"><span style="color:#C9D1D9;">        StringBuilder</span><span style="color:#FFA657;"> </span><span style="color:#C9D1D9;">sb1</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">new</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">StringBuilder</span><span style="color:#C9D1D9;">();</span></span>
<span class="line"><span style="color:#C9D1D9;">        System.out.</span><span style="color:#D2A8FF;">println</span><span style="color:#C9D1D9;">(sb1); </span><span style="color:#8B949E;">// (\u7A7A\u767D)</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#8B949E;">// \u4F7F\u7528\u5E26\u53C2\u6784\u9020</span></span>
<span class="line"><span style="color:#C9D1D9;">        StringBuilder</span><span style="color:#FFA657;"> </span><span style="color:#C9D1D9;">sb2</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">new</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">StringBuilder</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;github&quot;</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"><span style="color:#C9D1D9;">        System.out.</span><span style="color:#D2A8FF;">println</span><span style="color:#C9D1D9;">(sb2); </span><span style="color:#8B949E;">// itcast</span></span>
<span class="line"><span style="color:#C9D1D9;">    }</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h1 id="_4-\u5E38\u7528\u65B9\u6CD5" tabindex="-1">4. \u5E38\u7528\u65B9\u6CD5 <a class="header-anchor" href="#_4-\u5E38\u7528\u65B9\u6CD5" aria-hidden="true">#</a></h1><p>StringBuilder\u5E38\u7528\u7684\u65B9\u6CD5\u67092\u4E2A\uFF1A</p><ul><li><code>public StringBuilder append(...)</code>\uFF1A\u6DFB\u52A0\u4EFB\u610F\u7C7B\u578B\u6570\u636E\u7684\u5B57\u7B26\u4E32\u5F62\u5F0F\uFF0C\u5E76\u8FD4\u56DE\u5F53\u524D\u5BF9\u8C61\u81EA\u8EAB\u3002</li><li><code>public String toString()</code>\uFF1A\u5C06\u5F53\u524DStringBuilder\u5BF9\u8C61\u8F6C\u6362\u4E3AString\u5BF9\u8C61\u3002</li></ul><h2 id="append\u65B9\u6CD5" tabindex="-1">append\u65B9\u6CD5 <a class="header-anchor" href="#append\u65B9\u6CD5" aria-hidden="true">#</a></h2><p>append\u65B9\u6CD5\u5177\u6709\u591A\u79CD\u91CD\u8F7D\u5F62\u5F0F\uFF0C\u53EF\u4EE5\u63A5\u6536\u4EFB\u610F\u7C7B\u578B\u7684\u53C2\u6570\u3002\u4EFB\u4F55\u6570\u636E\u4F5C\u4E3A\u53C2\u6570\u90FD\u4F1A\u5C06\u5BF9\u5E94\u7684\u5B57\u7B26\u4E32\u5185\u5BB9\u6DFB\u52A0\u5230StringBuilder\u4E2D\u3002\u4F8B\u5982\uFF1A</p><div class="language-java line-numbers-mode"><button class="copy"></button><span class="lang">java</span><pre><code><span class="line"><span style="color:#FF7B72;">public</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">class</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">Demo02StringBuilder</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">	</span><span style="color:#FF7B72;">public</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">static</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">void</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">main</span><span style="color:#C9D1D9;">(</span><span style="color:#FF7B72;">String</span><span style="color:#C9D1D9;">[] </span><span style="color:#FFA657;">args</span><span style="color:#C9D1D9;">) {</span></span>
<span class="line"><span style="color:#C9D1D9;">		</span><span style="color:#8B949E;">//\u521B\u5EFA\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#C9D1D9;">		StringBuilder</span><span style="color:#FFA657;"> </span><span style="color:#C9D1D9;">builder</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">new</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">StringBuilder</span><span style="color:#C9D1D9;">();</span></span>
<span class="line"><span style="color:#C9D1D9;">		</span><span style="color:#8B949E;">//public StringBuilder append(\u4EFB\u610F\u7C7B\u578B)</span></span>
<span class="line"><span style="color:#C9D1D9;">		StringBuilder</span><span style="color:#FFA657;"> </span><span style="color:#C9D1D9;">builder2</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> builder.</span><span style="color:#D2A8FF;">append</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;hello&quot;</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"><span style="color:#C9D1D9;">		</span><span style="color:#8B949E;">//\u5BF9\u6BD4\u4E00\u4E0B</span></span>
<span class="line"><span style="color:#C9D1D9;">		System.out.</span><span style="color:#D2A8FF;">println</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;builder:&quot;</span><span style="color:#FF7B72;">+</span><span style="color:#C9D1D9;">builder);</span></span>
<span class="line"><span style="color:#C9D1D9;">		System.out.</span><span style="color:#D2A8FF;">println</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;builder2:&quot;</span><span style="color:#FF7B72;">+</span><span style="color:#C9D1D9;">builder2);</span></span>
<span class="line"><span style="color:#C9D1D9;">		System.out.</span><span style="color:#D2A8FF;">println</span><span style="color:#C9D1D9;">(builder </span><span style="color:#FF7B72;">==</span><span style="color:#C9D1D9;"> builder2); </span><span style="color:#8B949E;">//true</span></span>
<span class="line"><span style="color:#C9D1D9;">	    </span><span style="color:#8B949E;">// \u53EF\u4EE5\u6DFB\u52A0 \u4EFB\u4F55\u7C7B\u578B</span></span>
<span class="line"><span style="color:#C9D1D9;">		builder.</span><span style="color:#D2A8FF;">append</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;hello&quot;</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"><span style="color:#C9D1D9;">		builder.</span><span style="color:#D2A8FF;">append</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;world&quot;</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"><span style="color:#C9D1D9;">		builder.</span><span style="color:#D2A8FF;">append</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">true</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"><span style="color:#C9D1D9;">		builder.</span><span style="color:#D2A8FF;">append</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">100</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"><span style="color:#C9D1D9;">		</span><span style="color:#8B949E;">// \u5728\u6211\u4EEC\u5F00\u53D1\u4E2D\uFF0C\u4F1A\u9047\u5230\u8C03\u7528\u4E00\u4E2A\u65B9\u6CD5\u540E\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\u7684\u60C5\u51B5\u3002\u7136\u540E\u4F7F\u7528\u8FD4\u56DE\u7684\u5BF9\u8C61\u7EE7\u7EED\u8C03\u7528\u65B9\u6CD5\u3002</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#8B949E;">// \u8FD9\u79CD\u65F6\u5019\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u628A\u4EE3\u7801\u73B0\u5728\u4E00\u8D77\uFF0C\u5982append\u65B9\u6CD5\u4E00\u6837\uFF0C\u4EE3\u7801\u5982\u4E0B</span></span>
<span class="line"><span style="color:#C9D1D9;">		</span><span style="color:#8B949E;">//\u94FE\u5F0F\u7F16\u7A0B</span></span>
<span class="line"><span style="color:#C9D1D9;">		builder.</span><span style="color:#D2A8FF;">append</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;hello&quot;</span><span style="color:#C9D1D9;">).</span><span style="color:#D2A8FF;">append</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;world&quot;</span><span style="color:#C9D1D9;">).</span><span style="color:#D2A8FF;">append</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">true</span><span style="color:#C9D1D9;">).</span><span style="color:#D2A8FF;">append</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">100</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"><span style="color:#C9D1D9;">		System.out.</span><span style="color:#D2A8FF;">println</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;builder:&quot;</span><span style="color:#FF7B72;">+</span><span style="color:#C9D1D9;">builder);</span></span>
<span class="line"><span style="color:#C9D1D9;">	}</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><blockquote><p>\u5907\u6CE8\uFF1AStringBuilder\u5DF2\u7ECF\u8986\u76D6\u91CD\u5199\u4E86Object\u5F53\u4E2D\u7684toString\u65B9\u6CD5\u3002</p></blockquote><h2 id="tostring\u65B9\u6CD5" tabindex="-1">toString\u65B9\u6CD5 <a class="header-anchor" href="#tostring\u65B9\u6CD5" aria-hidden="true">#</a></h2><p>\u901A\u8FC7toString\u65B9\u6CD5\uFF0CStringBuilder\u5BF9\u8C61\u5C06\u4F1A\u8F6C\u6362\u4E3A\u4E0D\u53EF\u53D8\u7684String\u5BF9\u8C61\u3002\u5982\uFF1A</p><div class="language-java line-numbers-mode"><button class="copy"></button><span class="lang">java</span><pre><code><span class="line"><span style="color:#FF7B72;">public</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">class</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">Demo16StringBuilder</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">public</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">static</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">void</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">main</span><span style="color:#C9D1D9;">(</span><span style="color:#FF7B72;">String</span><span style="color:#C9D1D9;">[] </span><span style="color:#FFA657;">args</span><span style="color:#C9D1D9;">) {</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#8B949E;">// \u94FE\u5F0F\u521B\u5EFA</span></span>
<span class="line"><span style="color:#C9D1D9;">        StringBuilder</span><span style="color:#FFA657;"> </span><span style="color:#C9D1D9;">sb</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">new</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">StringBuilder</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;Hello&quot;</span><span style="color:#C9D1D9;">).</span><span style="color:#D2A8FF;">append</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;World&quot;</span><span style="color:#C9D1D9;">).</span><span style="color:#D2A8FF;">append</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;Java&quot;</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#8B949E;">// \u8C03\u7528\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#C9D1D9;">        String</span><span style="color:#FFA657;"> </span><span style="color:#C9D1D9;">str</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> sb.</span><span style="color:#D2A8FF;">toString</span><span style="color:#C9D1D9;">();</span></span>
<span class="line"><span style="color:#C9D1D9;">        System.out.</span><span style="color:#D2A8FF;">println</span><span style="color:#C9D1D9;">(str); </span><span style="color:#8B949E;">// HelloWorldJava</span></span>
<span class="line"><span style="color:#C9D1D9;">    }</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1>`,25),e=[o];function r(t,c,D,i,y,F){return a(),n("div",null,e)}const b=s(p,[["render",r]]);export{d as __pageData,b as default};
