import{_ as s,c as n,o as a,a as l}from"./app.11ac45a6.js";const b=JSON.parse('{"title":"valueOf\u4E0EtoString","description":"","frontmatter":{},"headers":[{"level":2,"title":"valueOf","slug":"valueof","link":"#valueof","children":[]},{"level":2,"title":"toString","slug":"tostring","link":"#tostring","children":[]},{"level":2,"title":"\u5BF9\u6BD4","slug":"\u5BF9\u6BD4","link":"#\u5BF9\u6BD4","children":[]},{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003","link":"#\u53C2\u8003","children":[]}],"relativePath":"frontend/JavaScript/valueOf\u4E0EtoString.md","lastUpdated":1662012857000}'),p={name:"frontend/JavaScript/valueOf\u4E0EtoString.md"},o=l(`<h1 id="valueof\u4E0Etostring" tabindex="-1">valueOf\u4E0EtoString <a class="header-anchor" href="#valueof\u4E0Etostring" aria-hidden="true">#</a></h1><p><code>valueOf</code>\u548C<code>toString</code>\u662F<code>Object.prototype</code>\u4E0A\u7684\u65B9\u6CD5\uFF0C\u5728<code>Js</code>\u51E0\u4E4E\u6240\u6709\u7684\u5BF9\u8C61\u90FD\u4F1A\u7EE7\u627F\u81EA<code>Object</code>\uFF0C\u540C\u6837\u7531\u4E8E\u5305\u88C5\u5BF9\u8C61\u7684\u539F\u56E0\uFF0C\u51E0\u4E4E\u6240\u6709\u7684\u6570\u636E\u7C7B\u578B\u90FD\u80FD\u591F\u8C03\u7528\u8FD9\u4E24\u4E2A\u65B9\u6CD5\uFF0C\u65E0\u6CD5\u8C03\u7528\u7684\u6709\u4F8B\u5982<code>null</code>\u3001<code>undefined</code>\u4EE5\u53CA<code>Object.create(null)</code>\u521B\u5EFA\u7684\u5BF9\u8C61\u7B49\uFF0C\u901A\u5E38\u6211\u4EEC\u4E00\u822C\u4E0D\u4F1A\u4E3B\u52A8\u8C03\u7528\u8FD9\u4E24\u4E2A\u65B9\u6CD5\uFF0C\u800C\u5728\u4EE3\u7801\u6267\u884C\u7684\u8FC7\u7A0B\u4E2D\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u4F1A\u7ECF\u5E38\u88AB\u5077\u5077\u7684\u8C03\u7528\uFF0C\u800C\u4E14\u5728\u4E0D\u540C\u7684\u60C5\u51B5\u4E0B\u4F1A\u6709\u9009\u62E9\u7684\u8FDB\u884C\u8C03\u7528\u3002</p><h2 id="valueof" tabindex="-1">valueOf <a class="header-anchor" href="#valueof" aria-hidden="true">#</a></h2><p><code>JavaScript</code>\u901A\u8FC7\u8C03\u7528<code>valueOf</code>\u65B9\u6CD5\u5C06\u5BF9\u8C61\u8F6C\u6362\u4E3A\u539F\u59CB\u503C\uFF0C\u6211\u4EEC\u5F88\u5C11\u9700\u8981\u81EA\u5DF1\u8C03\u7528<code>valueOf</code>\u65B9\u6CD5\uFF0C\u5F53\u9047\u5230\u8981\u9884\u671F\u7684\u539F\u59CB\u503C\u7684\u5BF9\u8C61\u65F6\uFF0C<code>JavaScript</code>\u4F1A\u81EA\u52A8\u8C03\u7528\u5B83\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C<code>valueOf</code>\u65B9\u6CD5\u7531<code>Object</code>\u540E\u9762\u7684\u6BCF\u4E2A\u5BF9\u8C61\u7EE7\u627F\u3002\u6BCF\u4E2A\u5185\u7F6E\u7684\u6838\u5FC3\u5BF9\u8C61\u90FD\u4F1A\u8986\u76D6\u6B64\u65B9\u6CD5\u4EE5\u8FD4\u56DE\u9002\u5F53\u7684\u503C\uFF0C\u5982\u679C\u5BF9\u8C61\u6CA1\u6709\u539F\u59CB\u503C\uFF0C\u5219<code>valueOf</code>\u5C06\u8FD4\u56DE\u5BF9\u8C61\u672C\u8EAB\u3002<br><code>JavaScript</code>\u7684\u8BB8\u591A\u5185\u7F6E\u5BF9\u8C61\u90FD\u91CD\u5199\u4E86\u8BE5\u51FD\u6570\uFF0C\u4EE5\u5B9E\u73B0\u66F4\u9002\u5408\u81EA\u8EAB\u7684\u529F\u80FD\u9700\u8981\u3002\u56E0\u6B64\u4E0D\u540C\u7C7B\u578B\u5BF9\u8C61\u7684<code>valueOf</code>\u65B9\u6CD5\u7684\u8FD4\u56DE\u503C\u548C\u8FD4\u56DE\u503C\u7C7B\u578B\u5747\u53EF\u80FD\u4E0D\u540C\u3002</p><table><thead><tr><th>\u5BF9\u8C61</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td><code>Array</code></td><td>\u8FD4\u56DE\u6570\u7EC4\u5BF9\u8C61\u672C\u8EAB\u3002</td></tr><tr><td><code>Boolean</code></td><td>\u5E03\u5C14\u503C\u3002</td></tr><tr><td><code>Date</code></td><td>\u5B58\u50A8\u7684\u65F6\u95F4\u662F\u4ECE<code>1970</code>\u5E74<code>1</code>\u6708<code>1</code>\u65E5\u5348\u591C\u5F00\u59CB\u8BA1\u7684\u6BEB\u79D2\u6570<code>UTC</code>\u3002</td></tr><tr><td><code>Function</code></td><td>\u51FD\u6570\u672C\u8EAB\u3002</td></tr><tr><td><code>Number</code></td><td>\u6570\u5B57\u503C\u3002</td></tr><tr><td><code>Object</code></td><td>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u8FD4\u56DE\u5BF9\u8C61\u672C\u8EAB\u3002</td></tr><tr><td><code>String</code></td><td>\u5B57\u7B26\u4E32\u503C\u3002</td></tr></tbody></table><div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#FF7B72;">var</span><span style="color:#C9D1D9;"> arr </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> [];</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(arr.</span><span style="color:#D2A8FF;">valueOf</span><span style="color:#C9D1D9;">() </span><span style="color:#FF7B72;">===</span><span style="color:#C9D1D9;"> arr); </span><span style="color:#8B949E;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">var</span><span style="color:#C9D1D9;"> date </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">new</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">Date</span><span style="color:#C9D1D9;">();</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(date.</span><span style="color:#D2A8FF;">valueOf</span><span style="color:#C9D1D9;">()); </span><span style="color:#8B949E;">// 1376838719230</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">var</span><span style="color:#C9D1D9;"> num </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;">  </span><span style="color:#79C0FF;">1</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(num.</span><span style="color:#D2A8FF;">valueOf</span><span style="color:#C9D1D9;">()); </span><span style="color:#8B949E;">// 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">var</span><span style="color:#C9D1D9;"> bool </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">true</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(bool.</span><span style="color:#D2A8FF;">valueOf</span><span style="color:#C9D1D9;">() </span><span style="color:#FF7B72;">===</span><span style="color:#C9D1D9;"> bool); </span><span style="color:#8B949E;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">var</span><span style="color:#C9D1D9;"> newBool </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">new</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">Boolean</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">true</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(newBool.</span><span style="color:#D2A8FF;">valueOf</span><span style="color:#C9D1D9;">() </span><span style="color:#FF7B72;">===</span><span style="color:#C9D1D9;"> newBool); </span><span style="color:#8B949E;">// false // \u524D\u8005\u662Fbool \u540E\u8005\u662Fobject</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">function</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">funct</span><span style="color:#C9D1D9;">(){}</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(funct.</span><span style="color:#D2A8FF;">valueOf</span><span style="color:#C9D1D9;">() </span><span style="color:#FF7B72;">===</span><span style="color:#C9D1D9;"> funct); </span><span style="color:#8B949E;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">var</span><span style="color:#C9D1D9;"> obj </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> {};</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(obj.</span><span style="color:#D2A8FF;">valueOf</span><span style="color:#C9D1D9;">() </span><span style="color:#FF7B72;">===</span><span style="color:#C9D1D9;"> obj); </span><span style="color:#8B949E;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">var</span><span style="color:#C9D1D9;"> str </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&quot;&quot;</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(str.</span><span style="color:#D2A8FF;">valueOf</span><span style="color:#C9D1D9;">() </span><span style="color:#FF7B72;">===</span><span style="color:#C9D1D9;"> str); </span><span style="color:#8B949E;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">var</span><span style="color:#C9D1D9;"> newStr </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">new</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">String</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;&quot;</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(newStr.</span><span style="color:#D2A8FF;">valueOf</span><span style="color:#C9D1D9;">() </span><span style="color:#FF7B72;">===</span><span style="color:#C9D1D9;"> newStr); </span><span style="color:#8B949E;">// false // \u524D\u8005\u662Fbool \u540E\u8005\u662Fobject</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>\u524D\u6587\u63D0\u5230\u8FC7\u5728<code>JavaScript</code>\u8FD0\u884C\u7684\u8FC7\u7A0B\u4E2D<code>valueOf</code>\u65B9\u6CD5\u7ECF\u5E38\u4F1A\u88AB\u5077\u5077\u7684\u8C03\u7528\uFF0C\u6211\u4EEC\u53EF\u4EE5\u81EA\u884C\u91CD\u5199<code>valueOf</code>\u65B9\u6CD5\uFF0C\u5728<code>def.js</code>\u4E2D\u751A\u81F3\u76F8\u5F53\u7075\u6D3B\u4F7F\u7528<code>valueOf</code>\u7B49\u65B9\u5F0F\u5B9E\u73B0\u4E86<code>Ruby</code>\u98CE\u683C\u7684\u7C7B\u5B9A\u4E49\u5DE5\u5382\uFF0C\u4EE5<code>Child &lt;&lt; Parent</code>\u7684\u98CE\u683C\u5B9E\u73B0\u4E86\u7EE7\u627F\u3002</p><div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#FF7B72;">class</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">ValueOfTest</span><span style="color:#C9D1D9;">{</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">constructor</span><span style="color:#C9D1D9;">(</span><span style="color:#FFA657;">val</span><span style="color:#C9D1D9;">){</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.val </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> val;</span></span>
<span class="line"><span style="color:#C9D1D9;">    }</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#D2A8FF;">valueOf</span><span style="color:#C9D1D9;">(){</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.val;</span></span>
<span class="line"><span style="color:#C9D1D9;">    }</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">var</span><span style="color:#C9D1D9;"> v </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">new</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">ValueOfTest</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">10</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(v </span><span style="color:#FF7B72;">+</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">1</span><span style="color:#C9D1D9;">); </span><span style="color:#8B949E;">// 11</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="tostring" tabindex="-1">toString <a class="header-anchor" href="#tostring" aria-hidden="true">#</a></h2><p><code>JavaScript</code>\u901A\u8FC7\u8C03\u7528<code>toString</code>\u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u8868\u793A\u8BE5\u5BF9\u8C61\u7684\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2A\u5BF9\u8C61\u90FD\u6709\u4E00\u4E2A<code>toString</code>\u65B9\u6CD5\uFF0C\u5F53\u8BE5\u5BF9\u8C61\u88AB\u8868\u793A\u4E3A\u4E00\u4E2A\u6587\u672C\u503C\u65F6\uFF0C\u6216\u8005\u4E00\u4E2A\u5BF9\u8C61\u4EE5\u9884\u671F\u7684\u5B57\u7B26\u4E32\u65B9\u5F0F\u5F15\u7528\u65F6\u81EA\u52A8\u8C03\u7528\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C<code>toString()</code>\u65B9\u6CD5\u88AB\u6BCF\u4E2A<code>Object</code>\u5BF9\u8C61\u7EE7\u627F\uFF0C\u5982\u679C\u6B64\u65B9\u6CD5\u5728\u81EA\u5B9A\u4E49\u5BF9\u8C61\u4E2D\u672A\u88AB\u8986\u76D6\uFF0C<code>toString</code>\u8FD4\u56DE<code>[object type]</code>\uFF0C\u5176\u4E2D<code>type</code>\u662F\u5BF9\u8C61\u7684\u7C7B\u578B\u3002<br><code>JavaScript</code>\u7684\u8BB8\u591A\u5185\u7F6E\u5BF9\u8C61\u90FD\u91CD\u5199\u4E86\u8BE5\u51FD\u6570\uFF0C\u4EE5\u5B9E\u73B0\u66F4\u9002\u5408\u81EA\u8EAB\u7684\u529F\u80FD\u9700\u8981\u3002\u56E0\u6B64\u4E0D\u540C\u7C7B\u578B\u5BF9\u8C61\u7684<code>toString</code>\u65B9\u6CD5\u7684\u8FD4\u56DE\u503C\u548C\u8FD4\u56DE\u503C\u7C7B\u578B\u5747\u53EF\u80FD\u4E0D\u540C\u3002</p><table><thead><tr><th>\u5BF9\u8C61</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td><code>Array</code></td><td>\u4EE5\u9017\u53F7\u5206\u5272\u7684\u5B57\u7B26\u4E32\uFF0C\u5982<code>[1,2]</code>\u7684<code>toString</code>\u8FD4\u56DE\u503C\u4E3A<code>1,2</code>\u3002</td></tr><tr><td><code>Boolean</code></td><td>\u5E03\u5C14\u503C\u7684\u5B57\u7B26\u4E32\u5F62\u5F0F\u3002</td></tr><tr><td><code>Date</code></td><td>\u53EF\u8BFB\u7684\u65F6\u95F4\u5B57\u7B26\u4E32\uFF0C\u4F8B\u5982<code>Tue Oct 27 2020 16:08:48 GMT+0800</code> (\u4E2D\u56FD\u6807\u51C6\u65F6\u95F4)</td></tr><tr><td><code>Function</code></td><td>\u58F0\u660E\u51FD\u6570\u7684<code>Js</code>\u6E90\u4EE3\u7801\u5B57\u7B26\u4E32\u3002</td></tr><tr><td><code>Number</code></td><td>\u6570\u5B57\u503C\u7684\u5B57\u7B26\u4E32\u5F62\u5F0F\u3002</td></tr><tr><td><code>Object</code></td><td><code>[object Object]</code>\u5B57\u7B26\u4E32\u3002</td></tr><tr><td><code>String</code></td><td>\u5B57\u7B26\u4E32\u3002</td></tr></tbody></table><div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#FF7B72;">var</span><span style="color:#C9D1D9;"> arr </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> [</span><span style="color:#79C0FF;">1</span><span style="color:#C9D1D9;">, </span><span style="color:#79C0FF;">2</span><span style="color:#C9D1D9;">, </span><span style="color:#79C0FF;">3</span><span style="color:#C9D1D9;">];</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(arr.</span><span style="color:#D2A8FF;">toString</span><span style="color:#C9D1D9;">()); </span><span style="color:#8B949E;">// 1,2,3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">var</span><span style="color:#C9D1D9;"> date </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">new</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">Date</span><span style="color:#C9D1D9;">();</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(date.</span><span style="color:#D2A8FF;">toString</span><span style="color:#C9D1D9;">()); </span><span style="color:#8B949E;">// Tue Oct 27 2020 16:12:35 GMT+0800 (\u4E2D\u56FD\u6807\u51C6\u65F6\u95F4)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">var</span><span style="color:#C9D1D9;"> num </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;">  </span><span style="color:#79C0FF;">1</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(num.</span><span style="color:#D2A8FF;">toString</span><span style="color:#C9D1D9;">()); </span><span style="color:#8B949E;">// 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">var</span><span style="color:#C9D1D9;"> bool </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">true</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(bool.</span><span style="color:#D2A8FF;">toString</span><span style="color:#C9D1D9;">()); </span><span style="color:#8B949E;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">function</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">funct</span><span style="color:#C9D1D9;">(){ </span><span style="color:#FF7B72;">var</span><span style="color:#C9D1D9;"> a </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">1</span><span style="color:#C9D1D9;">; }</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(funct.</span><span style="color:#D2A8FF;">toString</span><span style="color:#C9D1D9;">()); </span><span style="color:#8B949E;">// function funct(){ var a = 1; }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">var</span><span style="color:#C9D1D9;"> obj </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> {a: </span><span style="color:#79C0FF;">1</span><span style="color:#C9D1D9;">};</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(obj.</span><span style="color:#D2A8FF;">toString</span><span style="color:#C9D1D9;">()); </span><span style="color:#8B949E;">// [object Object]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">var</span><span style="color:#C9D1D9;"> str </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&quot;1&quot;</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(str.</span><span style="color:#D2A8FF;">toString</span><span style="color:#C9D1D9;">()); </span><span style="color:#8B949E;">// 1</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="\u5BF9\u6BD4" tabindex="-1">\u5BF9\u6BD4 <a class="header-anchor" href="#\u5BF9\u6BD4" aria-hidden="true">#</a></h2><p><code>JavaScript</code>\u5728\u4E0D\u540C\u60C5\u51B5\u4E0B\uFF0C\u4F1A\u8C03\u7528\u4E0D\u540C\u7684\u65B9\u6CD5\u53BB\u5904\u7406\u503C\uFF0C\u901A\u5E38\u6765\u8BF4\u662F\u4F1A\u4F18\u5148\u8C03\u7528<code>toString()</code>\u65B9\u6CD5\uFF0C\u800C\u6709\u8FD0\u7B97\u64CD\u4F5C\u7B26\u7684\u60C5\u51B5\u4E0B<code>valueOf()</code>\u7684\u4F18\u5148\u7EA7\u9AD8\u4E8E<code>toString()</code>\uFF0C\u5F53\u8C03\u7528<code>valueOf()</code>\u65B9\u6CD5\u65E0\u6CD5\u8FD0\u7B97\u540E\u8FD8\u662F\u4F1A\u518D\u8C03\u7528<code>toString()</code>\u65B9\u6CD5\u3002</p><div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#FF7B72;">var</span><span style="color:#C9D1D9;"> v </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">    val: </span><span style="color:#79C0FF;">10</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#D2A8FF;">valueOf</span><span style="color:#C9D1D9;">: </span><span style="color:#FF7B72;">function</span><span style="color:#C9D1D9;">(){</span></span>
<span class="line"><span style="color:#C9D1D9;">        console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;valueOf&quot;</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.val;</span></span>
<span class="line"><span style="color:#C9D1D9;">    },</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#D2A8FF;">toString</span><span style="color:#C9D1D9;">: </span><span style="color:#FF7B72;">function</span><span style="color:#C9D1D9;">(){</span></span>
<span class="line"><span style="color:#C9D1D9;">        console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;toString&quot;</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.val;</span></span>
<span class="line"><span style="color:#C9D1D9;">    }</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">var</span><span style="color:#C9D1D9;"> obj </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> {</span><span style="color:#A5D6FF;">&quot;10&quot;</span><span style="color:#C9D1D9;">: </span><span style="color:#79C0FF;">1</span><span style="color:#C9D1D9;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(v); </span><span style="color:#8B949E;">// {val: 10, valueOf: \u0192, toString: \u0192}</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">1</span><span style="color:#FF7B72;">+</span><span style="color:#C9D1D9;">v); </span><span style="color:#8B949E;">// valueOf // 11</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(obj[v]); </span><span style="color:#8B949E;">// toString // 1</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;&quot;</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">+</span><span style="color:#C9D1D9;"> v); </span><span style="color:#8B949E;">// valueOf // 10</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#D2A8FF;">String</span><span style="color:#C9D1D9;">(v)); </span><span style="color:#8B949E;">// toString // 10</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#D2A8FF;">Number</span><span style="color:#C9D1D9;">(v)); </span><span style="color:#8B949E;">// valueOf // 10</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(v </span><span style="color:#FF7B72;">==</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">10</span><span style="color:#C9D1D9;">); </span><span style="color:#8B949E;">// valueOf // true // \u53EA\u6709\u5728==\u7684\u60C5\u51B5\u4E0B\u624D\u6709\u53EF\u80FD\u8C03\u7528valueOf \u5728===\u7684\u60C5\u51B5\u4E0Bobject\u4E0Enumber\u4E0D\u53EF\u80FD\u76F8\u7B49</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#c9d1d9;">https://github.com/tobytailor/def.js</span></span>
<span class="line"><span style="color:#c9d1d9;">https://juejin.im/post/6844903812117839879</span></span>
<span class="line"><span style="color:#c9d1d9;">https://juejin.im/post/6844903967097356302</span></span>
<span class="line"><span style="color:#c9d1d9;">https://cloud.tencent.com/developer/article/1495536</span></span>
<span class="line"><span style="color:#c9d1d9;">https://www.cnblogs.com/rubylouvre/archive/2010/10/01/1839748.html</span></span>
<span class="line"><span style="color:#c9d1d9;">https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf</span></span>
<span class="line"><span style="color:#c9d1d9;">https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,17),e=[o];function c(r,t,D,y,i,d){return a(),n("div",null,e)}const u=s(p,[["render",c]]);export{b as __pageData,u as default};
