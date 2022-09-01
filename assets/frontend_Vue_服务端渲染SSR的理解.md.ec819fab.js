import{_ as e,c as d,o as c,a as o}from"./app.11ac45a6.js";const b=JSON.parse('{"title":"\u670D\u52A1\u7AEF\u6E32\u67D3SSR\u7684\u7406\u89E3","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5BA2\u6237\u7AEF\u6E32\u67D3CSR","slug":"\u5BA2\u6237\u7AEF\u6E32\u67D3csr","link":"#\u5BA2\u6237\u7AEF\u6E32\u67D3csr","children":[{"level":3,"title":"\u4F18\u70B9","slug":"\u4F18\u70B9","link":"#\u4F18\u70B9","children":[]},{"level":3,"title":"\u7F3A\u70B9","slug":"\u7F3A\u70B9","link":"#\u7F3A\u70B9","children":[]}]},{"level":2,"title":"\u670D\u52A1\u7AEF\u6E32\u67D3SSR","slug":"\u670D\u52A1\u7AEF\u6E32\u67D3ssr","link":"#\u670D\u52A1\u7AEF\u6E32\u67D3ssr","children":[{"level":3,"title":"\u4F18\u70B9","slug":"\u4F18\u70B9-1","link":"#\u4F18\u70B9-1","children":[]},{"level":3,"title":"\u7F3A\u70B9","slug":"\u7F3A\u70B9-1","link":"#\u7F3A\u70B9-1","children":[]}]},{"level":2,"title":"\u9884\u6E32\u67D3Prerendering","slug":"\u9884\u6E32\u67D3prerendering","link":"#\u9884\u6E32\u67D3prerendering","children":[{"level":3,"title":"\u4F18\u70B9","slug":"\u4F18\u70B9-2","link":"#\u4F18\u70B9-2","children":[]},{"level":3,"title":"\u7F3A\u70B9","slug":"\u7F3A\u70B9-2","link":"#\u7F3A\u70B9-2","children":[]}]},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3","link":"#\u603B\u7ED3","children":[]},{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003","link":"#\u53C2\u8003","children":[]}],"relativePath":"frontend/Vue/\u670D\u52A1\u7AEF\u6E32\u67D3SSR\u7684\u7406\u89E3.md","lastUpdated":1662012857000}'),a={name:"frontend/Vue/\u670D\u52A1\u7AEF\u6E32\u67D3SSR\u7684\u7406\u89E3.md"},n=o(`<h1 id="\u670D\u52A1\u7AEF\u6E32\u67D3ssr\u7684\u7406\u89E3" tabindex="-1">\u670D\u52A1\u7AEF\u6E32\u67D3SSR\u7684\u7406\u89E3 <a class="header-anchor" href="#\u670D\u52A1\u7AEF\u6E32\u67D3ssr\u7684\u7406\u89E3" aria-hidden="true">#</a></h1><p><code>SSR</code>\u670D\u52A1\u7AEF\u6E32\u67D3<code>Server Side Render</code>\u5C31\u662F\u5F53\u8FDB\u884C\u8BF7\u6C42\u65F6\uFF0C\u9875\u9762\u4E0A\u7684\u5185\u5BB9\u662F\u901A\u8FC7\u670D\u52A1\u7AEF\u6E32\u67D3\u751F\u6210\u7684\uFF0C\u6D4F\u89C8\u5668\u76F4\u63A5\u663E\u793A\u670D\u52A1\u7AEF\u8FD4\u56DE\u7684<code>HTML</code>\u5373\u53EF\u3002</p><h2 id="\u5BA2\u6237\u7AEF\u6E32\u67D3csr" tabindex="-1">\u5BA2\u6237\u7AEF\u6E32\u67D3CSR <a class="header-anchor" href="#\u5BA2\u6237\u7AEF\u6E32\u67D3csr" aria-hidden="true">#</a></h2><p>\u901A\u5E38\u5728\u6784\u5EFA\u4E00\u4E2A\u666E\u901A\u7684<code>SPA</code>\u5355\u9875\u5E94\u7528\u65F6\uFF0C\u5C31\u662F\u6784\u5EFA\u7684\u5BA2\u6237\u7AEF\u6E32\u67D3\u7684\u5E94\u7528\uFF0C<code>CSR</code>\u5BA2\u6237\u7AEF\u6E32\u67D3<code>Client Side Render</code>\u5C31\u662F\u5F53\u8FDB\u884C\u8BF7\u6C42\u65F6\uFF0C\u9875\u9762\u4E0A\u7684\u5185\u5BB9\u662F\u901A\u8FC7\u52A0\u8F7D\u7684<code>Js</code>\u6587\u4EF6\u6E32\u67D3\u51FA\u6765\u7684\uFF0C<code>Js</code>\u6587\u4EF6\u52A8\u6001\u8FD0\u884C\u5728\u6D4F\u89C8\u5668\u4E0A\u9762\uFF0C\u670D\u52A1\u7AEF\u53EA\u8FD4\u56DE\u4E00\u4E2A<code>HTML</code>\u6A21\u677F\u3002</p><h3 id="\u4F18\u70B9" tabindex="-1">\u4F18\u70B9 <a class="header-anchor" href="#\u4F18\u70B9" aria-hidden="true">#</a></h3><ul><li>\u4F7F\u5F97\u670D\u52A1\u5668\u8BA1\u7B97\u538B\u529B\u53D8\u8F7B\u3002</li><li>\u505A\u5230\u4E86\u524D\u540E\u7AEF\u5206\u79BB\uFF0C\u5728\u56E2\u961F\u5F00\u53D1\u4E2D\u53EA\u8981\u8D1F\u8D23\u5404\u81EA\u7684\u4EFB\u52A1\u5373\u53EF\uFF0C\u4F7F\u5F00\u53D1\u6548\u7387\u6709\u660E\u663E\u63D0\u5347\u3002</li></ul><h3 id="\u7F3A\u70B9" tabindex="-1">\u7F3A\u70B9 <a class="header-anchor" href="#\u7F3A\u70B9" aria-hidden="true">#</a></h3><ul><li>\u4E0D\u5229\u4E8E<code>SEO</code>\u3001\u641C\u7D22\u5F15\u64CE\u722C\u866B\u65E0\u6CD5\u5B8C\u6574\u89E3\u6790\u7528\u6237\u9875\u9762\u3002</li><li>\u8BF7\u6C42\u589E\u591A\u65F6\u7528\u6237\u7B49\u5F85\u65F6\u95F4\u53D8\u957F\uFF0C\u5BFC\u81F4\u9996\u5C4F\u6E32\u67D3\u6162\u3002</li><li>\u6D88\u8017\u7684\u662F\u7528\u6237\u6D4F\u89C8\u5668\u7684\u6027\u80FD\u3002</li></ul><h2 id="\u670D\u52A1\u7AEF\u6E32\u67D3ssr" tabindex="-1">\u670D\u52A1\u7AEF\u6E32\u67D3SSR <a class="header-anchor" href="#\u670D\u52A1\u7AEF\u6E32\u67D3ssr" aria-hidden="true">#</a></h2><p><code>SSR</code>\u670D\u52A1\u7AEF\u6E32\u67D3<code>Server Side Render</code>\u5C31\u662F\u5F53\u8FDB\u884C\u8BF7\u6C42\u65F6\uFF0C\u9875\u9762\u4E0A\u7684\u5185\u5BB9\u662F\u901A\u8FC7\u670D\u52A1\u7AEF\u6E32\u67D3\u751F\u6210\u7684\uFF0C\u6D4F\u89C8\u5668\u76F4\u63A5\u663E\u793A\u670D\u52A1\u7AEF\u8FD4\u56DE\u7684<code>HTML</code>\u5373\u53EF\u3002\u5BF9\u4E8E\u4F20\u7EDF\u670D\u52A1\u7AEF\u6E32\u67D3\uFF0C\u4E5F\u79F0\u4E3A\u540E\u7AEF\u6A21\u677F\u6E32\u67D3\uFF0C\u5982<code>jsp</code>\u6216\u8005<code>php</code>\u7B49\uFF0C\u8FD9\u662F\u6700\u65E9\u65F6\u671F\u7684<code>web</code>\uFF0C\u662F\u6307\u5BA2\u6237\u7AEF\u8BF7\u6C42\u65F6\uFF0C\u5728\u670D\u52A1\u5668\u4E0A\u4F7F\u7528\u6A21\u677F\u5F15\u64CE\u5C06\u6A21\u677F\u4E0E\u6570\u636E\u62FC\u63A5\u6210\u5B8C\u6574\u7684<code>HTML</code>\uFF0C\u518D\u53D1\u9001\u7ED9\u5BA2\u6237\u7AEF\uFF0C\u5BA2\u6237\u7AEF\u63A5\u6536\u540E\u76F4\u63A5\u89E3\u6790<code>HTML</code>\u5C31\u53EF\u4EE5\u5728\u6D4F\u89C8\u5668\u4E0A\u5C55\u793A\u51FA\u6765\uFF0C\u4E0D\u9700\u8981\u989D\u5916\u7684\u5F02\u6B65\u8BF7\u6C42\u83B7\u53D6\u6570\u636E\uFF0C\u5982\u679C\u8981\u4F7F<code>web</code>\u6709\u4EA4\u4E92\u6027\uFF0C\u5BA2\u6237\u7AEF\u9700\u8981\u518D\u7528<code>Js</code>\u53BB\u64CD\u4F5C<code>DOM</code>\u6216\u8005\u6E32\u67D3\u5176\u4ED6\u52A8\u6001\u7684\u90E8\u5206\u3002</p><h3 id="\u4F18\u70B9-1" tabindex="-1">\u4F18\u70B9 <a class="header-anchor" href="#\u4F18\u70B9-1" aria-hidden="true">#</a></h3><ul><li>\u66F4\u597D\u7684<code>SEO</code>\uFF0C\u7531\u4E8E\u641C\u7D22\u5F15\u64CE\u722C\u866B\u6293\u53D6\u5DE5\u5177\u53EF\u4EE5\u76F4\u63A5\u67E5\u770B\u5B8C\u5168\u6E32\u67D3\u7684\u9875\u9762\uFF0C\u5982\u679C<code>SEO</code>\u5BF9\u7AD9\u70B9\u81F3\u5173\u91CD\u8981\uFF0C\u800C\u9875\u9762\u53C8\u662F\u5F02\u6B65\u83B7\u53D6\u5185\u5BB9\uFF0C\u5219\u53EF\u80FD\u9700\u8981\u670D\u52A1\u5668\u7AEF\u6E32\u67D3<code>SSR</code>\u89E3\u51B3\u6B64\u95EE\u9898\u3002</li><li>\u66F4\u5FEB\u7684\u5185\u5BB9\u5230\u8FBE\u65F6\u95F4<code>time-to-content</code>\uFF0C\u7279\u522B\u662F\u5BF9\u4E8E\u7F13\u6162\u7684\u7F51\u7EDC\u60C5\u51B5\u6216\u8FD0\u884C\u7F13\u6162\u7684\u8BBE\u5907\uFF0C\u65E0\u9700\u7B49\u5F85\u6240\u6709\u7684<code>JavaScript</code>\u90FD\u5B8C\u6210\u4E0B\u8F7D\u5E76\u6267\u884C\uFF0C\u7528\u6237\u5C06\u4F1A\u66F4\u5FEB\u901F\u5730\u770B\u5230\u5B8C\u6574\u6E32\u67D3\u7684\u9875\u9762\uFF0C\u901A\u5E38\u53EF\u4EE5\u4EA7\u751F\u66F4\u597D\u7684\u7528\u6237\u4F53\u9A8C\uFF0C\u5E76\u4E14\u5BF9\u4E8E\u90A3\u4E9B\u5185\u5BB9\u5230\u8FBE\u65F6\u95F4<code>time-to-content</code>\u4E0E\u8F6C\u5316\u7387\u76F4\u63A5\u76F8\u5173\u7684\u5E94\u7528\u7A0B\u5E8F\u800C\u8A00\uFF0C\u670D\u52A1\u5668\u7AEF\u6E32\u67D3<code>SSR</code>\u81F3\u5173\u91CD\u8981\u3002</li></ul><h3 id="\u7F3A\u70B9-1" tabindex="-1">\u7F3A\u70B9 <a class="header-anchor" href="#\u7F3A\u70B9-1" aria-hidden="true">#</a></h3><ul><li>\u5F00\u53D1\u6761\u4EF6\u6240\u9650\uFF0C\u6D4F\u89C8\u5668\u7279\u5B9A\u7684\u4EE3\u7801\uFF0C\u53EA\u80FD\u5728\u67D0\u4E9B\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570<code>lifecycle hook</code>\u4E2D\u4F7F\u7528\uFF0C\u4E00\u4E9B\u5916\u90E8\u6269\u5C55\u5E93<code>external library</code>\u53EF\u80FD\u9700\u8981\u7279\u6B8A\u5904\u7406\uFF0C\u624D\u80FD\u5728\u670D\u52A1\u5668\u6E32\u67D3\u5E94\u7528\u7A0B\u5E8F\u4E2D\u8FD0\u884C\u3002</li><li>\u6D89\u53CA\u6784\u5EFA\u8BBE\u7F6E\u548C\u90E8\u7F72\u7684\u66F4\u591A\u8981\u6C42\uFF0C\u4E0E\u53EF\u4EE5\u90E8\u7F72\u5728\u4EFB\u4F55\u9759\u6001\u6587\u4EF6\u670D\u52A1\u5668\u4E0A\u7684\u5B8C\u5168\u9759\u6001\u5355\u9875\u9762\u5E94\u7528\u7A0B\u5E8F<code>SPA</code>\u4E0D\u540C\uFF0C\u670D\u52A1\u5668\u6E32\u67D3\u5E94\u7528\u7A0B\u5E8F\uFF0C\u901A\u5E38\u9700\u8981\u5904\u4E8E<code>Node.js server</code>\u8FD0\u884C\u73AF\u5883\u3002</li><li>\u66F4\u5927\u7684\u670D\u52A1\u5668\u7AEF\u8D1F\u8F7D\uFF0C\u5728<code>Node.js</code>\u4E2D\u6E32\u67D3\u5B8C\u6574\u7684\u5E94\u7528\u7A0B\u5E8F\uFF0C\u663E\u7136\u4F1A\u6BD4\u4EC5\u4EC5\u63D0\u4F9B\u9759\u6001\u6587\u4EF6\u7684<code>server</code>\u66F4\u52A0\u5927\u91CF\u5360\u7528<code>CPU</code>\u8D44\u6E90<code>CPU-intensive</code>-<code>CPU</code>\u5BC6\u96C6\u578B\uFF0C\u56E0\u6B64\u5982\u679C\u9884\u6599\u5728\u9AD8\u6D41\u91CF\u73AF\u5883<code>high traffic</code>\u4E0B\u4F7F\u7528\uFF0C\u9700\u8981\u51C6\u5907\u76F8\u5E94\u7684\u670D\u52A1\u5668\u8D1F\u8F7D\uFF0C\u5E76\u660E\u667A\u5730\u91C7\u7528\u7F13\u5B58\u7B56\u7565\u3002</li></ul><h2 id="\u9884\u6E32\u67D3prerendering" tabindex="-1">\u9884\u6E32\u67D3Prerendering <a class="header-anchor" href="#\u9884\u6E32\u67D3prerendering" aria-hidden="true">#</a></h2><p>\u5982\u679C\u4F7F\u7528\u670D\u52A1\u5668\u7AEF\u6E32\u67D3<code>SSR</code>\u53EA\u662F\u7528\u6765\u6539\u5584\u5C11\u6570\u8425\u9500\u9875\u9762\uFF0C\u4F8B\u5982<code>/</code>\u3001<code>/about</code>\u3001<code>/contact</code>\u7B49\u7684<code>SEO</code>\uFF0C\u90A3\u4E48\u4F60\u53EF\u80FD\u9700\u8981\u9884\u6E32\u67D3\uFF0C\u65E0\u9700\u4F7F\u7528<code>web</code>\u670D\u52A1\u5668\u5B9E\u65F6\u52A8\u6001\u7F16\u8BD1<code>HTML</code>\uFF0C\u800C\u662F\u4F7F\u7528\u9884\u6E32\u67D3\u65B9\u5F0F\uFF0C\u5728\u6784\u5EFA\u65F6<code>build time</code>\u7B80\u5355\u5730\u751F\u6210\u9488\u5BF9\u7279\u5B9A\u8DEF\u7531\u7684\u9759\u6001<code>HTML</code>\u6587\u4EF6\u3002\u5982\u679C\u4F7F\u7528<code>webpack</code>\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528<code>prerender-spa-plugin</code>\u8F7B\u677E\u5730\u6DFB\u52A0\u9884\u6E32\u67D3\u3002</p><h3 id="\u4F18\u70B9-2" tabindex="-1">\u4F18\u70B9 <a class="header-anchor" href="#\u4F18\u70B9-2" aria-hidden="true">#</a></h3><ul><li>\u8BBE\u7F6E\u9884\u6E32\u67D3\u66F4\u7B80\u5355\uFF0C\u5E76\u53EF\u4EE5\u5C06\u524D\u7AEF\u5E94\u7528\u4F5C\u4E3A\u4E00\u4E2A\u5B8C\u5168\u9759\u6001\u7684\u7AD9\u70B9\u3002</li></ul><h3 id="\u7F3A\u70B9-2" tabindex="-1">\u7F3A\u70B9 <a class="header-anchor" href="#\u7F3A\u70B9-2" aria-hidden="true">#</a></h3><ul><li>\u53EA\u9002\u5408\u5BF9\u4E8E\u7279\u5B9A\u9759\u6001\u9875\u9762\u800C\u5E94\u7528\u3002</li></ul><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><p>\u672C\u8D28\u4E0A\u5BF9\u4E8E\u6E32\u67D3\u90FD\u662F\u4E00\u6837\u7684\uFF0C\u90FD\u662F\u8FDB\u884C\u7684\u5B57\u7B26\u4E32\u62FC\u63A5\u751F\u6210<code>HTML</code>,\u4E24\u8005\u7684\u5DEE\u522B\u6700\u7EC8\u4F53\u73B0\u5728\u65F6\u95F4\u6D88\u8017\u4EE5\u53CA\u6027\u80FD\u6D88\u8017\u4E0A\u3002\u5BA2\u6237\u7AEF\u5728\u4E0D\u540C\u7F51\u7EDC\u73AF\u5883\u4E0B\u8FDB\u884C\u6570\u636E\u8BF7\u6C42\uFF0C\u5BA2\u6237\u7AEF\u9700\u8981\u7ECF\u5386\u4ECE<code>Js</code>\u52A0\u8F7D\u5B8C\u6210\u5230\u6570\u636E\u8BF7\u6C42\u518D\u5230\u9875\u9762\u6E32\u67D3\u8FD9\u4E2A\u65F6\u95F4\u6BB5\uFF0C\u5BFC\u81F4\u4E86\u5927\u91CF\u65F6\u95F4\u7684\u6D88\u8017\u4EE5\u53CA\u6D4F\u89C8\u5668\u6027\u80FD\u7684\u6D88\u8017\u3002\u800C\u670D\u52A1\u7AEF\u5728\u5185\u7F51\u8BF7\u6C42\uFF0C\u6570\u636E\u54CD\u5E94\u5FEB\uFF0C\u4E0D\u9700\u8981\u7B49\u5F85<code>Js</code>\u4EE3\u7801\u52A0\u8F7D\uFF0C\u53EF\u4EE5\u5148\u8BF7\u6C42\u6570\u636E\u518D\u6E32\u67D3\u53EF\u89C6\u90E8\u5206\u7136\u540E\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\uFF0C\u5BA2\u6237\u7AEF\u518D\u505A\u4E8C\u6B21\u6E32\u67D3,\u8FD9\u6837\u5927\u90E8\u5206\u6D88\u8017\u7684\u662F\u670D\u52A1\u7AEF\u7684\u6027\u80FD\uFF0C\u5BA2\u6237\u7AEF\u9875\u9762\u54CD\u5E94\u65F6\u95F4\u4E5F\u66F4\u5FEB\u3002<br><code>SSR</code>\u670D\u52A1\u7AEF\u6E32\u67D3\u4E3B\u8981\u89E3\u51B3\u7684\u662F\u9996\u5C4F\u6E32\u67D3\u548C<code>SEO</code>\u4F18\u5316\uFF0C\u662F\u5426\u9700\u8981<code>SSR</code>\u670D\u52A1\u7AEF\u6E32\u67D3\u4E3B\u8981\u53D6\u51B3\u4E8E<code>SEO</code>\u5BF9\u4E8E\u7F51\u7AD9\u662F\u5426\u975E\u5E38\u91CD\u8981\u4EE5\u53CA\u5185\u5BB9\u5230\u8FBE\u65F6\u95F4<code>time-to-content</code>\u5BF9\u5E94\u7528\u7A0B\u5E8F\u7684\u91CD\u8981\u7A0B\u5EA6\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u4F60\u6B63\u5728\u6784\u5EFA\u4E00\u4E2A\u5185\u90E8\u4EEA\u8868\u76D8\uFF0C\u521D\u59CB\u52A0\u8F7D\u65F6\u7684\u989D\u5916\u51E0\u767E\u6BEB\u79D2\u5E76\u4E0D\u91CD\u8981\uFF0C\u8FD9\u79CD\u60C5\u51B5\u4E0B\u53BB\u4F7F\u7528\u670D\u52A1\u5668\u7AEF\u6E32\u67D3<code>SSR</code>\u5C06\u662F\u4E00\u4E2A\u5C0F\u9898\u5927\u4F5C\u4E4B\u4E3E\u3002\u7136\u800C\u5982\u679C\u5927\u91CF\u7684\u8BBF\u95EE\u6D41\u91CF\u6765\u81EA\u4E8E\u641C\u7D22\u5F15\u64CE\u7684\u6293\u53D6\uFF0C\u90A3\u4E48\u670D\u52A1\u7AEF\u6E32\u67D3<code>SSR</code>\u5C06\u662F\u52BF\u5728\u5FC5\u884C\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u6216\u8005\u5185\u5BB9\u5230\u8FBE\u65F6\u95F4<code>time-to-content</code>\u8981\u6C42\u662F\u7EDD\u5BF9\u5173\u952E\u7684\u6307\u6807\uFF0C\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\u670D\u52A1\u5668\u7AEF\u6E32\u67D3<code>SSR</code>\u53EF\u4EE5\u5E2E\u52A9\u4F60\u5B9E\u73B0\u6700\u4F73\u7684\u521D\u59CB\u52A0\u8F7D\u6027\u80FD\u3002\u603B\u800C\u8A00\u4E4B\uFF0C\u5F00\u53D1\u9700\u8981\u6839\u636E\u5B9E\u9645\u573A\u666F\u5BFB\u627E\u89E3\u51B3\u65B9\u6848\u3002</p><h2 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#c9d1d9;">https://ssr.vuejs.org/zh/</span></span>
<span class="line"><span style="color:#c9d1d9;">https://zhuanlan.zhihu.com/p/90746589</span></span>
<span class="line"><span style="color:#c9d1d9;">https://www.jianshu.com/p/10b6074d772c</span></span>
<span class="line"><span style="color:#c9d1d9;">https://github.com/yacan8/blog/issues/30</span></span>
<span class="line"><span style="color:#c9d1d9;">https://juejin.im/post/6890810591968477191</span></span>
<span class="line"><span style="color:#c9d1d9;">https://juejin.im/post/6844903959241424910</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,24),s=[n];function l(i,r,t,h,p,u){return c(),d("div",null,s)}const _=e(a,[["render",l]]);export{b as __pageData,_ as default};
