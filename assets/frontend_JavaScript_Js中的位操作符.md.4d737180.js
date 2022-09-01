import{_ as s,c as n,o as a,a as l}from"./app.11ac45a6.js";const C=JSON.parse('{"title":"Js\u4E2D\u7684\u4F4D\u64CD\u4F5C\u7B26","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u63CF\u8FF0","slug":"\u63CF\u8FF0","link":"#\u63CF\u8FF0","children":[{"level":3,"title":"& \u6309\u4F4D\u4E0E(AND)","slug":"\u6309\u4F4D\u4E0E-and","link":"#\u6309\u4F4D\u4E0E-and","children":[]},{"level":3,"title":"| \u6309\u4F4D\u6216(OR)","slug":"\u6309\u4F4D\u6216-or","link":"#\u6309\u4F4D\u6216-or","children":[]},{"level":3,"title":"^ \u6309\u4F4D\u5F02\u6216(XOR)","slug":"\u6309\u4F4D\u5F02\u6216-xor","link":"#\u6309\u4F4D\u5F02\u6216-xor","children":[]},{"level":3,"title":"~ \u6309\u4F4D\u975E(NOT)","slug":"\u6309\u4F4D\u975E-not","link":"#\u6309\u4F4D\u975E-not","children":[]},{"level":3,"title":"<< \u5DE6\u79FB","slug":"\u5DE6\u79FB","link":"#\u5DE6\u79FB","children":[]},{"level":3,"title":">> \u6709\u7B26\u53F7\u53F3\u79FB","slug":"\u6709\u7B26\u53F7\u53F3\u79FB","link":"#\u6709\u7B26\u53F7\u53F3\u79FB","children":[]},{"level":3,"title":">>> \u65E0\u7B26\u53F7\u53F3\u79FB","slug":"\u65E0\u7B26\u53F7\u53F3\u79FB","link":"#\u65E0\u7B26\u53F7\u53F3\u79FB","children":[]}]},{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003","link":"#\u53C2\u8003","children":[]}],"relativePath":"frontend/JavaScript/Js\u4E2D\u7684\u4F4D\u64CD\u4F5C\u7B26.md","lastUpdated":1662012857000}'),p={name:"frontend/JavaScript/Js\u4E2D\u7684\u4F4D\u64CD\u4F5C\u7B26.md"},o=l(`<h1 id="js\u4E2D\u7684\u4F4D\u64CD\u4F5C\u7B26" tabindex="-1">Js\u4E2D\u7684\u4F4D\u64CD\u4F5C\u7B26 <a class="header-anchor" href="#js\u4E2D\u7684\u4F4D\u64CD\u4F5C\u7B26" aria-hidden="true">#</a></h1><p><code>JavaScript</code>\u7684\u6570\u5B57\u7C7B\u578B\u4E3A\u53CC\u7CBE\u5EA6<code>IEEE 754 64</code>\u4F4D\u6D6E\u70B9\u7C7B\u578B\uFF0C\u4F46\u662F\u5728\u4F4D\u8FD0\u7B97\u4E2D\u4F4D\u8FD0\u7B97\u7B26\u7528\u4E8E<code>32</code>\u4F4D\u7684\u6570\u5B57\u4E0A, \u4EFB\u4F55\u7684\u6570\u5B57\u64CD\u4F5C\u90FD\u5C06\u8F6C\u4E3A<code>32</code>\u4F4D, \u8FD0\u7B97\u7ED3\u679C\u518D\u8F6C\u5316\u4E3A<code>Js</code>\u6570\u5B57\u7C7B\u578B\u3002</p><h2 id="\u63CF\u8FF0" tabindex="-1">\u63CF\u8FF0 <a class="header-anchor" href="#\u63CF\u8FF0" aria-hidden="true">#</a></h2><p>\u6240\u6709\u7684\u6309\u4F4D\u64CD\u4F5C\u7B26\u7684\u64CD\u4F5C\u6570\u90FD\u4F1A\u88AB\u8F6C\u6210\u8865\u7801\u5F62\u5F0F\u7684\u6709\u7B26\u53F7<code>32</code>\u4F4D\u6574\u6570\uFF0C\u4ECE\u6982\u5FF5\u4E0A\u8BB2\uFF0C\u6309\u4F4D\u903B\u8F91\u64CD\u4F5C\u7B26\u6309\u9075\u5B88\u4E0B\u9762\u89C4\u5219\uFF1A</p><ul><li>\u64CD\u4F5C\u6570\u88AB\u8F6C\u6362\u621032\u4F4D\u6574\u6570\uFF0C\u7528\u6BD4\u7279\u5E8F\u5217(<code>0</code>\u548C<code>1</code>\u7EC4\u6210)\u8868\u793A\uFF0C\u8D85\u8FC7<code>32</code>\u4F4D\u7684\u6570\u5B57\u4F1A\u88AB\u4E22\u5F03\u3002</li><li>\u7B2C\u4E00\u4E2A\u64CD\u4F5C\u6570\u7684\u6BCF\u4E2A\u6BD4\u7279\u4F4D\u4E0E\u7B2C\u4E8C\u4E2A\u64CD\u4F5C\u6570\u7684\u76F8\u5E94\u6BD4\u7279\u4F4D\u5339\u914D\uFF0C\u7B2C\u4E00\u4F4D\u5BF9\u5E94\u7B2C\u4E00\u4F4D\uFF0C\u7B2C\u4E8C\u4F4D\u5BF9\u5E94\u7B2C\u4E8C\u4F4D\uFF0C\u4EE5\u6B64\u7C7B\u63A8\u3002</li><li>\u4F4D\u8FD0\u7B97\u7B26\u5E94\u7528\u5230\u6BCF\u5BF9\u6BD4\u7279\u4F4D\uFF0C\u7ED3\u679C\u662F\u65B0\u7684\u6BD4\u7279\u503C\u3002</li></ul><h3 id="\u6309\u4F4D\u4E0E-and" tabindex="-1">&amp; \u6309\u4F4D\u4E0E(AND) <a class="header-anchor" href="#\u6309\u4F4D\u4E0E-and" aria-hidden="true">#</a></h3><p>\u5BF9\u4E8E\u6BCF\u4E00\u4E2A\u6BD4\u7279\u4F4D\uFF0C\u53EA\u6709\u4E24\u4E2A\u64CD\u4F5C\u6570\u76F8\u5E94\u7684\u6BD4\u7279\u4F4D\u90FD\u662F<code>1</code>\u65F6\uFF0C\u7ED3\u679C\u624D\u4E3A<code>1</code>\uFF0C\u5426\u5219\u4E3A<code>0</code>\uFF0C\u771F\u503C\u8868\u5982\u4E0B\uFF1A</p><table><thead><tr><th>a</th><th>b</th><th>a &amp; b</th></tr></thead><tbody><tr><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>1</td><td>0</td></tr><tr><td>1</td><td>0</td><td>0</td></tr><tr><td>1</td><td>1</td><td>1</td></tr></tbody></table><p>\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528<code>&amp;</code>\u64CD\u4F5C\u7B26\u6765\u5224\u65AD\u6570\u503C\u7684\u5947\u5076\u6027\u3002</p><div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">7</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">&amp;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">1</span><span style="color:#C9D1D9;">);    </span><span style="color:#8B949E;">// 1</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">8</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">&amp;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">1</span><span style="color:#C9D1D9;">) ;   </span><span style="color:#8B949E;">// 0</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u6309\u4F4D\u6216-or" tabindex="-1">| \u6309\u4F4D\u6216(OR) <a class="header-anchor" href="#\u6309\u4F4D\u6216-or" aria-hidden="true">#</a></h3><p>\u5BF9\u4E8E\u6BCF\u4E00\u4E2A\u6BD4\u7279\u4F4D\uFF0C\u5F53\u4E24\u4E2A\u64CD\u4F5C\u6570\u76F8\u5E94\u7684\u6BD4\u7279\u4F4D\u81F3\u5C11\u6709\u4E00\u4E2A<code>1</code>\u65F6\uFF0C\u7ED3\u679C\u4E3A<code>1</code>\uFF0C\u5426\u5219\u4E3A<code>0</code>\uFF0C\u771F\u503C\u8868\u5982\u4E0B\uFF1A</p><table><thead><tr><th>a</th><th>b</th><th>a | b</th></tr></thead><tbody><tr><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>1</td><td>1</td></tr><tr><td>1</td><td>0</td><td>1</td></tr><tr><td>1</td><td>1</td><td>1</td></tr></tbody></table><p>\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528<code>|</code>\u64CD\u4F5C\u7B26\u6765\u5F3A\u5236\u8F6C\u6362\u503C\u4E3A<code>int 32</code>\u5373<code>32</code>\u4F4D\u6574\u6570\u7C7B\u578B\u3002</p><div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">11.11</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">);      </span><span style="color:#8B949E;">// 11</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;11.11&quot;</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">);    </span><span style="color:#8B949E;">// 11</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;-11.11&quot;</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">);   </span><span style="color:#8B949E;">// -11</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">1.23E2</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">);     </span><span style="color:#8B949E;">// 123</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">([] </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">);         </span><span style="color:#8B949E;">// 0</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(({}) </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">);       </span><span style="color:#8B949E;">// 0</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="\u6309\u4F4D\u5F02\u6216-xor" tabindex="-1">^ \u6309\u4F4D\u5F02\u6216(XOR) <a class="header-anchor" href="#\u6309\u4F4D\u5F02\u6216-xor" aria-hidden="true">#</a></h3><p>\u5BF9\u4E8E\u6BCF\u4E00\u4E2A\u6BD4\u7279\u4F4D\uFF0C\u5F53\u4E24\u4E2A\u64CD\u4F5C\u6570\u76F8\u5E94\u7684\u6BD4\u7279\u4F4D\u6709\u4E14\u53EA\u6709\u4E00\u4E2A<code>1</code>\u65F6\uFF0C\u7ED3\u679C\u4E3A<code>1</code>\uFF0C\u5426\u5219\u4E3A<code>0</code>\uFF0C\u771F\u503C\u8868\u5982\u4E0B\uFF1A</p><table><thead><tr><th>a</th><th>b</th><th>a ^ b</th></tr></thead><tbody><tr><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>1</td><td>1</td></tr><tr><td>1</td><td>0</td><td>1</td></tr><tr><td>1</td><td>1</td><td>0</td></tr></tbody></table><p>\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528<code>^</code>\u64CD\u4F5C\u7B26\u6765\u4EA4\u6362\u6570\u503C\u3002</p><div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#FF7B72;">let</span><span style="color:#C9D1D9;"> a </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">7</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#FF7B72;">let</span><span style="color:#C9D1D9;"> b </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">1</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">a </span><span style="color:#FF7B72;">^=</span><span style="color:#C9D1D9;"> b;</span></span>
<span class="line"><span style="color:#C9D1D9;">b </span><span style="color:#FF7B72;">^=</span><span style="color:#C9D1D9;"> a;</span></span>
<span class="line"><span style="color:#C9D1D9;">a </span><span style="color:#FF7B72;">^=</span><span style="color:#C9D1D9;"> b;</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(a);   </span><span style="color:#8B949E;">// 1</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(b);   </span><span style="color:#8B949E;">// 7</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">// \u4E5F\u53EF\u4EE5\u501F\u52A9\u6570\u7EC4</span></span>
<span class="line"><span style="color:#C9D1D9;">b </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> [a, a </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> b][</span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">// \u5F53\u7136\u89E3\u6784\u8D4B\u503C\u66F4\u7B80\u5355</span></span>
<span class="line"><span style="color:#C9D1D9;">[a, b] </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> [b, a];</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u4E5F\u53EF\u4EE5\u7528\u6765\u5224\u65AD\u503C\u7684\u7B26\u53F7\u662F\u5426\u76F8\u540C\u3002</p><div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#FF7B72;">let</span><span style="color:#C9D1D9;"> a </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">1</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#FF7B72;">let</span><span style="color:#C9D1D9;"> b </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">1</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">((a </span><span style="color:#FF7B72;">^</span><span style="color:#C9D1D9;"> b) </span><span style="color:#FF7B72;">&gt;=</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">);    </span><span style="color:#8B949E;">// true</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">((a </span><span style="color:#FF7B72;">^</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">-</span><span style="color:#C9D1D9;">b) </span><span style="color:#FF7B72;">&gt;=</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">);   </span><span style="color:#8B949E;">// false</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u6309\u4F4D\u975E-not" tabindex="-1">~ \u6309\u4F4D\u975E(NOT) <a class="header-anchor" href="#\u6309\u4F4D\u975E-not" aria-hidden="true">#</a></h3><p>\u5BF9\u4E8E\u6BCF\u4E00\u4E2A\u6BD4\u7279\u4F4D\uFF0C\u53CD\u8F6C\u64CD\u4F5C\u6570\u7684\u6BD4\u7279\u4F4D\uFF0C\u5373<code>0</code>\u53D8\u6210<code>1</code>\uFF0C<code>1</code>\u53D8\u6210<code>0</code>\uFF0C\u771F\u503C\u8868\u5982\u4E0B\uFF1A</p><table><thead><tr><th>a</th><th>~ a</th></tr></thead><tbody><tr><td>0</td><td>1</td></tr><tr><td>1</td><td>0</td></tr></tbody></table><p>\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528<code>~</code>\u64CD\u4F5C\u7B26\u6765\u5F3A\u5236\u8F6C\u6362\u503C\u4E3A<code>int 32</code>\u5373<code>32</code>\u4F4D\u6574\u6570\u7C7B\u578B\u3002</p><div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#FF7B72;">~~</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">11.11</span><span style="color:#C9D1D9;">));      </span><span style="color:#8B949E;">// 11</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#FF7B72;">~~</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;11.11&quot;</span><span style="color:#C9D1D9;">));    </span><span style="color:#8B949E;">// 11</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#FF7B72;">~~</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;-11.11&quot;</span><span style="color:#C9D1D9;">));   </span><span style="color:#8B949E;">// -11</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#FF7B72;">~~</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">1.23E2</span><span style="color:#C9D1D9;">));     </span><span style="color:#8B949E;">// 123</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#FF7B72;">~~</span><span style="color:#C9D1D9;">([]));         </span><span style="color:#8B949E;">// 0</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#FF7B72;">~~</span><span style="color:#C9D1D9;">({}));         </span><span style="color:#8B949E;">// 0</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="\u5DE6\u79FB" tabindex="-1">&lt;&lt; \u5DE6\u79FB <a class="header-anchor" href="#\u5DE6\u79FB" aria-hidden="true">#</a></h3><p>\u5C06\u503C\u7684\u4E8C\u8FDB\u5236\u5F62\u5F0F\u5411\u5DE6\u79FB<code>n (n &lt; 32)</code>\u6BD4\u7279\u4F4D\uFF0C\u53F3\u8FB9\u7528<code>0</code>\u586B\u5145\u3002<br> \u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528<code>&lt;&lt;</code>\u64CD\u4F5C\u7B26\u6765\u8FDB\u884C\u6574\u6570\u7684<code>* 2^n</code>\u8FD0\u7B97\u3002</p><div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">11</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">&lt;&lt;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">2</span><span style="color:#C9D1D9;">);         </span><span style="color:#8B949E;">// 44</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">11.11</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">&lt;&lt;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">1</span><span style="color:#C9D1D9;">);      </span><span style="color:#8B949E;">// 22</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;11.11&quot;</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">&lt;&lt;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">1</span><span style="color:#C9D1D9;">);    </span><span style="color:#8B949E;">// 22</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528<code>&lt;&lt;</code>\u64CD\u4F5C\u7B26\u6765\u5F3A\u5236\u8F6C\u6362\u503C\u4E3A<code>int 32</code>\u5373<code>32</code>\u4F4D\u6574\u6570\u7C7B\u578B\u3002</p><div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">11.11</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">&lt;&lt;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">);      </span><span style="color:#8B949E;">// 11</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;11.11&quot;</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">&lt;&lt;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">);    </span><span style="color:#8B949E;">// 11</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;-11.11&quot;</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">&lt;&lt;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">);   </span><span style="color:#8B949E;">// -11</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">1.23E2</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">&lt;&lt;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">);     </span><span style="color:#8B949E;">// 123</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">([] </span><span style="color:#FF7B72;">&lt;&lt;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">);         </span><span style="color:#8B949E;">// 0</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(({}) </span><span style="color:#FF7B72;">&lt;&lt;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">);       </span><span style="color:#8B949E;">// 0</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="\u6709\u7B26\u53F7\u53F3\u79FB" tabindex="-1">&gt;&gt; \u6709\u7B26\u53F7\u53F3\u79FB <a class="header-anchor" href="#\u6709\u7B26\u53F7\u53F3\u79FB" aria-hidden="true">#</a></h3><p>\u5C06\u503C\u7684\u4E8C\u8FDB\u5236\u8868\u793A\u5411\u53F3\u79FB<code>n (n &lt; 32)</code>\u4F4D\uFF0C\u4E22\u5F03\u88AB\u79FB\u51FA\u7684\u4F4D\u3002<br> \u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528<code>&lt;&lt;</code>\u64CD\u4F5C\u7B26\u6765\u8FDB\u884C\u6574\u6570\u7684<code>/ 2^n</code>\u8FD0\u7B97\u3002</p><div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">32</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">&gt;&gt;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">2</span><span style="color:#C9D1D9;">);         </span><span style="color:#8B949E;">// 8</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">32.11</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">&gt;&gt;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">1</span><span style="color:#C9D1D9;">);      </span><span style="color:#8B949E;">// 16</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;32.11&quot;</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">&gt;&gt;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">1</span><span style="color:#C9D1D9;">);    </span><span style="color:#8B949E;">// 16</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528<code>&gt;&gt;</code>\u64CD\u4F5C\u7B26\u6765\u5F3A\u5236\u8F6C\u6362\u503C\u4E3A<code>int 32</code>\u5373<code>32</code>\u4F4D\u6574\u6570\u7C7B\u578B\u3002</p><div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">11.11</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">&gt;&gt;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">);      </span><span style="color:#8B949E;">// 11</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;11.11&quot;</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">&gt;&gt;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">);    </span><span style="color:#8B949E;">// 11</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;-11.11&quot;</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">&gt;&gt;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">);   </span><span style="color:#8B949E;">// -11</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">1.23E2</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">&gt;&gt;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">);     </span><span style="color:#8B949E;">// 123</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">([] </span><span style="color:#FF7B72;">&gt;&gt;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">);         </span><span style="color:#8B949E;">// 0</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(({}) </span><span style="color:#FF7B72;">&gt;&gt;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">);       </span><span style="color:#8B949E;">// 0</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="\u65E0\u7B26\u53F7\u53F3\u79FB" tabindex="-1">&gt;&gt;&gt; \u65E0\u7B26\u53F7\u53F3\u79FB <a class="header-anchor" href="#\u65E0\u7B26\u53F7\u53F3\u79FB" aria-hidden="true">#</a></h3><p>\u5C06\u503C\u7684\u4E8C\u8FDB\u5236\u8868\u793A\u5411\u53F3\u79FB<code>n (n&lt; 32)</code>\u4F4D\uFF0C\u4E22\u5F03\u88AB\u79FB\u51FA\u7684\u4F4D\uFF0C\u5E76\u4F7F\u7528<code>0</code>\u5728\u5DE6\u4FA7\u586B\u5145\uFF0C\u6240\u4EE5\u7ED3\u679C\u603B\u662F\u975E\u8D1F\u7684\uFF0C\u5373\u4FBF\u53F3\u79FB<code>0</code>\u4E2A\u6BD4\u7279\uFF0C\u7ED3\u679C\u4E5F\u662F\u975E\u8D1F\u7684\uFF0C\u6240\u4EE5\u5BF9\u4E8E<code>&gt;&gt;&gt;</code>\u4E00\u822C\u4E0D\u7528\u4E8E\u8D1F\u6570\u64CD\u4F5C\u3002<br> \u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528<code>&lt;&lt;</code>\u64CD\u4F5C\u7B26\u6765\u8FDB\u884C\u6574\u6570\u7684<code>/ 2^n</code>\u8FD0\u7B97\uFF0C\u6CE8\u610F\u4E0D\u7528\u4E8E\u8D1F\u6570\u7684\u8FD0\u7B97\u3002</p><div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">32</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">&gt;&gt;&gt;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">2</span><span style="color:#C9D1D9;">);         </span><span style="color:#8B949E;">// 8</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">32.11</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">&gt;&gt;&gt;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">1</span><span style="color:#C9D1D9;">);      </span><span style="color:#8B949E;">// 16</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;32.11&quot;</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">&gt;&gt;&gt;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">1</span><span style="color:#C9D1D9;">);    </span><span style="color:#8B949E;">// 16</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528<code>&gt;&gt;</code>\u64CD\u4F5C\u7B26\u6765\u5F3A\u5236\u8F6C\u6362\u503C\u4E3A<code>int 32</code>\u5373<code>32</code>\u4F4D\u6574\u6570\u7C7B\u578B\uFF0C\u6CE8\u610F\u4E0D\u7528\u4E8E\u8D1F\u6570\u7684\u8FD0\u7B97\u3002</p><div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">11.11</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">&gt;&gt;&gt;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">);      </span><span style="color:#8B949E;">// 11</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;11.11&quot;</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">&gt;&gt;&gt;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">);    </span><span style="color:#8B949E;">// 11</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">1.23E2</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">&gt;&gt;&gt;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">);     </span><span style="color:#8B949E;">// 123</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">null</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">&gt;&gt;&gt;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">);       </span><span style="color:#8B949E;">// 0</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">([] </span><span style="color:#FF7B72;">&gt;&gt;&gt;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">);         </span><span style="color:#8B949E;">// 0</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(({}) </span><span style="color:#FF7B72;">&gt;&gt;&gt;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">);       </span><span style="color:#8B949E;">// 0</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#c9d1d9;">https://www.jianshu.com/p/6c3851ce83f7</span></span>
<span class="line"><span style="color:#c9d1d9;">https://www.cnblogs.com/mtl-key/p/13150674.html</span></span>
<span class="line"><span style="color:#c9d1d9;">https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,44),e=[o];function c(t,r,D,y,d,F){return a(),n("div",null,e)}const b=s(p,[["render",c]]);export{C as __pageData,b as default};
