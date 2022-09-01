import{_ as s,c as n,o as a,a as e}from"./app.11ac45a6.js";const y=JSON.parse('{"title":"React\u4E2Drefs\u7684\u7406\u89E3","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u63CF\u8FF0","slug":"\u63CF\u8FF0","link":"#\u63CF\u8FF0","children":[]},{"level":2,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528","link":"#\u4F7F\u7528","children":[{"level":3,"title":"\u5B57\u7B26\u4E32","slug":"\u5B57\u7B26\u4E32","link":"#\u5B57\u7B26\u4E32","children":[]},{"level":3,"title":"\u56DE\u8C03","slug":"\u56DE\u8C03","link":"#\u56DE\u8C03","children":[]},{"level":3,"title":"API\u521B\u5EFA","slug":"api\u521B\u5EFA","link":"#api\u521B\u5EFA","children":[]}]},{"level":2,"title":"\u793A\u4F8B","slug":"\u793A\u4F8B","link":"#\u793A\u4F8B","children":[]},{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003","link":"#\u53C2\u8003","children":[]}],"relativePath":"frontend/React/React\u4E2Drefs\u7684\u7406\u89E3.md","lastUpdated":1662012857000}'),l={name:"frontend/React/React\u4E2Drefs\u7684\u7406\u89E3.md"},p=e(`<h1 id="react\u4E2Drefs\u7684\u7406\u89E3" tabindex="-1">React\u4E2Drefs\u7684\u7406\u89E3 <a class="header-anchor" href="#react\u4E2Drefs\u7684\u7406\u89E3" aria-hidden="true">#</a></h1><p><code>Refs</code>\u63D0\u4F9B\u4E86\u4E00\u79CD\u65B9\u5F0F\uFF0C\u5141\u8BB8\u6211\u4EEC\u8BBF\u95EE<code>DOM</code>\u8282\u70B9\u6216\u5728<code>render</code>\u65B9\u6CD5\u4E2D\u521B\u5EFA\u7684<code>React</code>\u5143\u7D20\u3002</p><h2 id="\u63CF\u8FF0" tabindex="-1">\u63CF\u8FF0 <a class="header-anchor" href="#\u63CF\u8FF0" aria-hidden="true">#</a></h2><p>\u5728\u5178\u578B\u7684<code>React</code>\u6570\u636E\u6D41\u4E2D\uFF0C<code>props</code>\u662F\u7236\u7EC4\u4EF6\u4E0E\u5B50\u7EC4\u4EF6\u4EA4\u4E92\u7684\u552F\u4E00\u65B9\u5F0F\uFF0C\u8981\u4FEE\u6539\u4E00\u4E2A\u5B50\u7EC4\u4EF6\uFF0C\u4F60\u9700\u8981\u4F7F\u7528\u65B0\u7684<code>props</code>\u6765\u91CD\u65B0\u6E32\u67D3\u5B83\uFF0C\u4F46\u662F\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u4F60\u9700\u8981\u5728\u5178\u578B\u6570\u636E\u6D41\u4E4B\u5916\u5F3A\u5236\u4FEE\u6539\u5B50\u7EC4\u4EF6\uFF0C\u88AB\u4FEE\u6539\u7684\u5B50\u7EC4\u4EF6\u53EF\u80FD\u662F\u4E00\u4E2A<code>React</code>\u7EC4\u4EF6\u7684\u5B9E\u4F8B\uFF0C\u4E5F\u53EF\u80FD\u662F\u4E00\u4E2A<code>DOM</code>\u5143\u7D20\uFF0C\u5BF9\u4E8E\u8FD9\u4E24\u79CD\u60C5\u51B5<code>React</code>\u90FD\u63D0\u4F9B\u4E86\u89E3\u51B3\u529E\u6CD5\u3002<br> \u907F\u514D\u4F7F\u7528<code>refs</code>\u6765\u505A\u4EFB\u4F55\u53EF\u4EE5\u901A\u8FC7\u58F0\u660E\u5F0F\u5B9E\u73B0\u6765\u5B8C\u6210\u7684\u4E8B\u60C5\uFF0C\u901A\u5E38\u5728\u53EF\u4EE5\u4F7F\u7528<code>props</code>\u4E0E<code>state</code>\u7684\u60C5\u51B5\u4E0B\u52FF\u4F9D\u8D56<code>refs</code>\uFF0C\u4E0B\u9762\u662F\u51E0\u4E2A\u9002\u5408\u4F7F\u7528<code>refs</code>\u7684\u60C5\u51B5:</p><ul><li>\u7BA1\u7406\u7126\u70B9\u3001\u6587\u672C\u9009\u62E9\u6216\u5A92\u4F53\u64AD\u653E\u3002</li><li>\u89E6\u53D1\u5F3A\u5236\u52A8\u753B\u3002</li><li>\u96C6\u6210\u7B2C\u4E09\u65B9<code>DOM</code>\u5E93\u3002</li></ul><h2 id="\u4F7F\u7528" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a></h2><p><code>React</code>\u63D0\u4F9B\u7684\u8FD9\u4E2A<code>ref</code>\u5C5E\u6027\uFF0C\u8868\u793A\u4E3A\u5BF9\u7EC4\u4EF6\u771F\u6B63\u5B9E\u4F8B\u7684\u5F15\u7528\uFF0C\u5176\u5B9E\u5C31\u662F<code>ReactDOM.render()</code>\u8FD4\u56DE\u7684\u7EC4\u4EF6\u5B9E\u4F8B\uFF0C\u9700\u8981\u533A\u5206\u4E00\u4E0B\u6E32\u67D3\u7EC4\u4EF6\u4E0E\u6E32\u67D3\u539F\u751F<code>DOM</code>\u5143\u7D20\uFF0C\u6E32\u67D3\u7EC4\u4EF6\u65F6\u8FD4\u56DE\u7684\u662F\u7EC4\u4EF6\u5B9E\u4F8B\uFF0C\u800C\u6E32\u67D3<code>DOM</code>\u5143\u7D20\u65F6\uFF0C\u8FD4\u56DE\u662F\u5177\u4F53\u7684<code>DOM</code>\u8282\u70B9\uFF0C<code>React</code>\u7684<code>ref</code>\u6709<code>3</code>\u79CD\u7528\u6CD5\u3002</p><h3 id="\u5B57\u7B26\u4E32" tabindex="-1">\u5B57\u7B26\u4E32 <a class="header-anchor" href="#\u5B57\u7B26\u4E32" aria-hidden="true">#</a></h3><p><code>ref</code>\u53EF\u4EE5\u76F4\u63A5\u8BBE\u7F6E\u4E3A\u5B57\u7B26\u4E32\u503C\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u57FA\u672C\u4E0D\u63A8\u8350\u4F7F\u7528\uFF0C\u6216\u8005\u5728\u672A\u6765\u7684<code>React</code>\u7248\u672C\u4E2D\u4E0D\u4F1A\u518D\u652F\u6301\u8BE5\u65B9\u5F0F\u3002\u8FD9\u4E3B\u8981\u662F\u56E0\u4E3A\u4F7F\u7528\u5B57\u7B26\u4E32\u5BFC\u81F4\u7684\u4E00\u4E9B\u95EE\u9898\uFF0C\u4F8B\u5982\u5F53<code>ref</code>\u5B9A\u4E49\u4E3A<code>string</code>\u65F6\uFF0C\u9700\u8981<code>React</code>\u8FFD\u8E2A\u5F53\u524D\u6B63\u5728\u6E32\u67D3\u7684\u7EC4\u4EF6\uFF0C\u5728<code>reconciliation</code>\u9636\u6BB5\uFF0C<code>React Element</code>\u521B\u5EFA\u548C\u66F4\u65B0\u7684\u8FC7\u7A0B\u4E2D\uFF0C<code>ref</code>\u4F1A\u88AB\u5C01\u88C5\u4E3A\u4E00\u4E2A\u95ED\u5305\u51FD\u6570\uFF0C\u7B49\u5F85<code>commit</code>\u9636\u6BB5\u88AB\u6267\u884C\uFF0C\u8FD9\u4F1A\u5BF9<code>React</code>\u7684\u6027\u80FD\u4EA7\u751F\u4E00\u4E9B\u5F71\u54CD\u7B49\u3002</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#c9d1d9;">class InputOne extends React.Component {</span></span>
<span class="line"><span style="color:#c9d1d9;">    componentDidMount() {</span></span>
<span class="line"><span style="color:#c9d1d9;">        this.refs.inputRef.value = 1;</span></span>
<span class="line"><span style="color:#c9d1d9;">      }</span></span>
<span class="line"><span style="color:#c9d1d9;">    render() {</span></span>
<span class="line"><span style="color:#c9d1d9;">        return &lt;input ref=&quot;inputRef&quot; /&gt;;</span></span>
<span class="line"><span style="color:#c9d1d9;">    }</span></span>
<span class="line"><span style="color:#c9d1d9;">}</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="\u56DE\u8C03" tabindex="-1">\u56DE\u8C03 <a class="header-anchor" href="#\u56DE\u8C03" aria-hidden="true">#</a></h3><p><code>React</code>\u652F\u6301\u7ED9\u4EFB\u610F\u7EC4\u4EF6\u6DFB\u52A0\u7279\u6B8A\u5C5E\u6027\uFF0C<code>ref</code>\u5C5E\u6027\u63A5\u53D7\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\uFF0C\u5176\u5728\u7EC4\u4EF6\u88AB\u52A0\u8F7D\u6216\u5378\u8F7D\u65F6\u4F1A\u7ACB\u5373\u6267\u884C\u3002</p><ul><li>\u5F53\u7ED9<code>HTML</code>\u5143\u7D20\u6DFB\u52A0<code>ref</code>\u5C5E\u6027\u65F6\uFF0C<code>ref</code>\u56DE\u8C03\u63A5\u6536\u4E86\u5E95\u5C42\u7684<code>DOM</code>\u5143\u7D20\u4F5C\u4E3A\u53C2\u6570\u3002</li><li>\u5F53\u7ED9\u7EC4\u4EF6\u6DFB\u52A0<code>ref</code>\u5C5E\u6027\u65F6\uFF0C<code>ref</code>\u56DE\u8C03\u63A5\u6536\u5F53\u524D\u7EC4\u4EF6\u5B9E\u4F8B\u4F5C\u4E3A\u53C2\u6570\u3002</li><li>\u5F53\u7EC4\u4EF6\u5378\u8F7D\u7684\u65F6\u5019\uFF0C\u4F1A\u4F20\u5165<code>null</code>\u3002</li><li><code>ref</code>\u56DE\u8C03\u4F1A\u5728<code>componentDidMount</code>\u6216<code>componentDidUpdate</code>\u7B49\u751F\u547D\u5468\u671F\u56DE\u8C03\u4E4B\u524D\u6267\u884C\u3002</li></ul><p><code>Callback Ref</code>\u6211\u4EEC\u901A\u5E38\u4F1A\u4F7F\u7528\u5185\u8054\u51FD\u6570\u7684\u5F62\u5F0F\uFF0C\u90A3\u4E48\u6BCF\u6B21\u6E32\u67D3\u90FD\u4F1A\u91CD\u65B0\u521B\u5EFA\uFF0C\u7531\u4E8E<code>React</code>\u4F1A\u6E05\u7406\u65E7\u7684<code>ref</code>\u7136\u540E\u8BBE\u7F6E\u65B0\u7684\uFF0C\u56E0\u6B64\u66F4\u65B0\u671F\u95F4\u4F1A\u8C03\u7528\u4E24\u6B21\uFF0C\u7B2C\u4E00\u6B21\u4E3A<code>null</code>\uFF0C\u5982\u679C\u5728<code>Callback</code>\u4E2D\u5E26\u6709\u4E1A\u52A1\u903B\u8F91\u7684\u8BDD\uFF0C\u53EF\u80FD\u4F1A\u51FA\u9519\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5C06<code>Callback</code>\u5B9A\u4E49\u6210\u7C7B\u6210\u5458\u51FD\u6570\u5E76\u8FDB\u884C\u7ED1\u5B9A\u7684\u65B9\u5F0F\u907F\u514D\u3002</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#c9d1d9;">class InputTwo extends React.Component {</span></span>
<span class="line"><span style="color:#c9d1d9;">    componentDidMount() {</span></span>
<span class="line"><span style="color:#c9d1d9;">        this.inputRef.value = 2;</span></span>
<span class="line"><span style="color:#c9d1d9;">      }</span></span>
<span class="line"><span style="color:#c9d1d9;">    render() {</span></span>
<span class="line"><span style="color:#c9d1d9;">        return &lt;input ref={(element) =&gt;this.inputRef = element} /&gt;;</span></span>
<span class="line"><span style="color:#c9d1d9;">    }</span></span>
<span class="line"><span style="color:#c9d1d9;">}</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="api\u521B\u5EFA" tabindex="-1">API\u521B\u5EFA <a class="header-anchor" href="#api\u521B\u5EFA" aria-hidden="true">#</a></h3><p>\u5728<code>React v16.3</code>\u4E2D\u7ECF<code>0017-new-create-ref</code>\u63D0\u6848\u5F15\u5165\u4E86\u65B0\u7684<code>React.createRef</code>\u7684<code>API</code>\uFF0C\u5F53<code>ref</code>\u88AB\u4F20\u9012\u7ED9<code>render</code>\u4E2D\u7684\u5143\u7D20\u65F6\uFF0C\u5BF9\u8BE5\u8282\u70B9\u7684\u5F15\u7528\u53EF\u4EE5\u5728<code>ref</code>\u7684<code>current</code>\u5C5E\u6027\u4E2D\u88AB\u8BBF\u95EE\uFF0C<code>ref</code>\u7684\u503C\u6839\u636E\u8282\u70B9\u7684\u7C7B\u578B\u800C\u6709\u6240\u4E0D\u540C\uFF1A</p><ul><li>\u5F53<code>ref</code>\u5C5E\u6027\u7528\u4E8E<code>HTML</code>\u5143\u7D20\u65F6\uFF0C\u6784\u9020\u51FD\u6570\u4E2D\u4F7F\u7528<code>React.createRef()</code>\u521B\u5EFA\u7684<code>ref</code>\u63A5\u6536\u5E95\u5C42<code>DOM</code>\u5143\u7D20\u4F5C\u4E3A\u5176<code>current</code>\u5C5E\u6027\u3002</li><li>\u5F53<code>ref</code>\u5C5E\u6027\u7528\u4E8E\u81EA\u5B9A\u4E49<code>class</code>\u7EC4\u4EF6\u65F6\uFF0C<code>ref</code>\u5BF9\u8C61\u63A5\u6536\u7EC4\u4EF6\u7684\u6302\u8F7D\u5B9E\u4F8B\u4F5C\u4E3A\u5176<code>current</code>\u5C5E\u6027\u3002</li><li>\u4E0D\u80FD\u5728\u51FD\u6570\u7EC4\u4EF6\u4E0A\u4F7F\u7528<code>ref</code>\u5C5E\u6027\uFF0C\u56E0\u4E3A\u4ED6\u4EEC\u6CA1\u6709\u5B9E\u4F8B\u3002</li></ul><p>\u5BF9\u6BD4\u65B0\u7684<code>CreateRef</code>\u4E0E<code>Callback Ref</code>\uFF0C\u5E76\u6CA1\u6709\u538B\u5012\u6027\u7684\u4F18\u52BF\uFF0C\u53EA\u662F\u5E0C\u671B\u6210\u4E3A\u4E00\u4E2A\u4FBF\u6377\u7684\u7279\u6027\uFF0C\u5728\u6027\u80FD\u4E0A\u4F1A\u4F1A\u6709\u5FAE\u5C0F\u7684\u4F18\u52BF\uFF0C<code>Callback Ref</code>\u91C7\u7528\u4E86\u7EC4\u4EF6<code>Render</code>\u8FC7\u7A0B\u4E2D\u5728\u95ED\u5305\u51FD\u6570\u4E2D\u5206\u914D<code>ref</code>\u7684\u6A21\u5F0F\uFF0C\u800C<code>CreateRef</code>\u5219\u91C7\u7528\u4E86<code>Object Ref</code>\u3002</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#c9d1d9;">class InputThree extends React.Component {</span></span>
<span class="line"><span style="color:#c9d1d9;">    constructor(props) {</span></span>
<span class="line"><span style="color:#c9d1d9;">        super(props);</span></span>
<span class="line"><span style="color:#c9d1d9;">        this.inputRef = React.createRef();</span></span>
<span class="line"><span style="color:#c9d1d9;">    }</span></span>
<span class="line"><span style="color:#c9d1d9;">    componentDidMount() {</span></span>
<span class="line"><span style="color:#c9d1d9;">        this.inputRef.current.value = 3;</span></span>
<span class="line"><span style="color:#c9d1d9;">    }</span></span>
<span class="line"><span style="color:#c9d1d9;">    render() {</span></span>
<span class="line"><span style="color:#c9d1d9;">        return &lt;input ref={this.inputRef} /&gt;;</span></span>
<span class="line"><span style="color:#c9d1d9;">    }</span></span>
<span class="line"><span style="color:#c9d1d9;">}</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="\u793A\u4F8B" tabindex="-1">\u793A\u4F8B <a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#c9d1d9;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;">&lt;html&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;">    &lt;meta charset=&quot;UTF-8&quot; /&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;">    &lt;title&gt;React&lt;/title&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;">    &lt;div id=&quot;root&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;">&lt;script src=&quot;https://unpkg.com/react@17/umd/react.development.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;">&lt;script src=&quot;https://unpkg.com/react-dom@17/umd/react-dom.development.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;">&lt;script src=&quot;https://unpkg.com/@babel/standalone/babel.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;">&lt;script type=&quot;text/babel&quot;&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;">    class InputOne extends React.Component {</span></span>
<span class="line"><span style="color:#c9d1d9;">        componentDidMount() {</span></span>
<span class="line"><span style="color:#c9d1d9;">            this.refs.inputRef.value = 1;</span></span>
<span class="line"><span style="color:#c9d1d9;">          }</span></span>
<span class="line"><span style="color:#c9d1d9;">        render() {</span></span>
<span class="line"><span style="color:#c9d1d9;">            return &lt;input ref=&quot;inputRef&quot; /&gt;;</span></span>
<span class="line"><span style="color:#c9d1d9;">        }</span></span>
<span class="line"><span style="color:#c9d1d9;">    }</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">    class InputTwo extends React.Component {</span></span>
<span class="line"><span style="color:#c9d1d9;">        componentDidMount() {</span></span>
<span class="line"><span style="color:#c9d1d9;">            this.inputRef.value = 2;</span></span>
<span class="line"><span style="color:#c9d1d9;">          }</span></span>
<span class="line"><span style="color:#c9d1d9;">        render() {</span></span>
<span class="line"><span style="color:#c9d1d9;">            return &lt;input ref={(element) =&gt;this.inputRef = element} /&gt;;</span></span>
<span class="line"><span style="color:#c9d1d9;">        }</span></span>
<span class="line"><span style="color:#c9d1d9;">    }</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">    class InputThree extends React.Component {</span></span>
<span class="line"><span style="color:#c9d1d9;">        constructor(props) {</span></span>
<span class="line"><span style="color:#c9d1d9;">            super(props);</span></span>
<span class="line"><span style="color:#c9d1d9;">            this.inputRef = React.createRef();</span></span>
<span class="line"><span style="color:#c9d1d9;">        }</span></span>
<span class="line"><span style="color:#c9d1d9;">        componentDidMount() {</span></span>
<span class="line"><span style="color:#c9d1d9;">            this.inputRef.current.value = 3;</span></span>
<span class="line"><span style="color:#c9d1d9;">        }</span></span>
<span class="line"><span style="color:#c9d1d9;">        render() {</span></span>
<span class="line"><span style="color:#c9d1d9;">            return &lt;input ref={this.inputRef} /&gt;;</span></span>
<span class="line"><span style="color:#c9d1d9;">        }</span></span>
<span class="line"><span style="color:#c9d1d9;">    }</span></span>
<span class="line"><span style="color:#c9d1d9;">    </span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">    var vm = ReactDOM.render(</span></span>
<span class="line"><span style="color:#c9d1d9;">        &lt;&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;">            &lt;InputOne /&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;">            &lt;InputTwo /&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;">            &lt;InputThree /&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;">        &lt;/&gt;,</span></span>
<span class="line"><span style="color:#c9d1d9;">        document.getElementById(&quot;root&quot;)</span></span>
<span class="line"><span style="color:#c9d1d9;">    );</span></span>
<span class="line"><span style="color:#c9d1d9;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;">&lt;/html&gt;</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br></div></div><h2 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#c9d1d9;">https://zhuanlan.zhihu.com/p/40462264</span></span>
<span class="line"><span style="color:#c9d1d9;">https://www.jianshu.com/p/4e2357ea1ba1</span></span>
<span class="line"><span style="color:#c9d1d9;">https://juejin.cn/post/6844903809274085389</span></span>
<span class="line"><span style="color:#c9d1d9;">https://juejin.cn/post/6844904048882106375</span></span>
<span class="line"><span style="color:#c9d1d9;">https://segmentfault.com/a/1190000008665915</span></span>
<span class="line"><span style="color:#c9d1d9;">https://zh-hans.reactjs.org/docs/refs-and-the-dom.html</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,24),c=[p];function r(o,d,t,i,u,b){return a(),n("div",null,c)}const h=s(l,[["render",r]]);export{y as __pageData,h as default};
