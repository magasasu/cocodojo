/* =========================================================================
   HTML/CSS カテゴリ（HTML/CSS DOJO から移植・統合用）
   このファイルは codojo.js より前に読み込む。
   HTMLトラック: variations.code=HTMLソース, item.css=任意のプレビュー用CSS
   CSSトラック : item.html=固定サンプル, variations.code=CSSソース
   ========================================================================= */
const HTMLCATEGORIES = [
{name:"基礎", items:[
  {name:{ja:"HTMLとは？",en:"What is HTML?"}, sub:{ja:"最初に読む",en:"Read me first"}, desc:{ja:`<b>HTML</b>はWebページの<b>骨組み</b>を作る言語。文章や部品を<b>タグ</b>で囲んで「これは見出し」「これは段落」と<b>意味づけ</b>します。<br>基本は <b>&lt;タグ&gt;中身&lt;/タグ&gt;</b> の形。開始タグと終了タグ（/付き）で挟みます。<br>※結果はプレビューに出ます。HTML窓を書き換えて試そう。`,en:`<b>HTML</b> is the language that builds the <b>skeleton</b> of a web page. You wrap text and parts in <b>tags</b> to give them <b>meaning</b> — "this is a heading", "this is a paragraph".<br>The basic form is <b>&lt;tag&gt;content&lt;/tag&gt;</b>: an opening tag and a closing tag (with /).<br>※The result shows in the preview. Edit the HTML pane to try it.`},
   tags:[{ja:"タグ",en:"tag"},{ja:"要素",en:"element"}], prep:[
     {s:{ja:'<p>中身</p>',en:'<p>content</p>'},d:{ja:'<b>開始タグ</b>と<b>終了タグ</b>で中身を挟む。これで1つの「要素」。',en:'An <b>opening tag</b> and a <b>closing tag</b> wrap the content — that is one "element".'}},
     {s:'</p>',d:{ja:'<b>/</b> が付くと<b>終了</b>タグ。閉じ忘れると崩れる原因に。',en:'A <b>/</b> marks the <b>closing</b> tag. Forgetting it breaks the layout.'}}],
   variations:[
     {label:{ja:"基本の形",en:"The basic form"}, code:{ja:`<h1>これは見出し</h1>
<p>これは段落です。タグで囲むと意味がつきます。</p>`,en:`<h1>This is a heading</h1>
<p>This is a paragraph. Wrapping text in tags gives it meaning.</p>`}},
     {label:{ja:"入れ子にする",en:"Nesting"}, code:{ja:`<!-- div = 意味を持たない「ただの箱」。まとめる時に使う -->
<div>
  <h2>箱の中の見出し</h2>
  <p>タグの中にタグを入れる（入れ子）のが基本です。</p>
</div>`,en:`<!-- div = a "plain box" with no meaning. Use it to group things -->
<div>
  <h2>Heading inside a box</h2>
  <p>Putting tags inside tags (nesting) is the basics.</p>
</div>`}}]},

  {name:{ja:"見出しタグ",en:"Heading tags"}, sub:"h1〜h6", desc:{ja:`<b>&lt;h1&gt;〜&lt;h6&gt;</b>は見出し。数字が小さいほど大きく重要です。<br><b>ルール</b>：<b>h1はページに原則1つ</b>（そのページの主題）。h2→h3…と<b>順番を飛ばさない</b>（h1の次にいきなりh4はNG）。「文字を大きくしたいだけ」でhタグを使わない（それはCSSの仕事）。`,en:`<b>&lt;h1&gt;–&lt;h6&gt;</b> are headings. The smaller the number, the larger and more important.<br><b>Rules</b>: use <b>one h1 per page</b> (its main topic). Go h2→h3… <b>without skipping levels</b> (h1 straight to h4 is wrong). Don't use an h tag just to make text bigger — that's CSS's job.`},
   tags:["h1","h2",{ja:"見出し",en:"heading"}], prep:[
     {s:'<h1>',d:{ja:'ページで<b>一番大事な見出し</b>。原則1ページに1つ。',en:'The <b>most important heading</b> on the page. One per page as a rule.'}},
     {s:'<h2> <h3>',d:{ja:'その下の中見出し・小見出し。順番に使う。',en:'The sub-headings below it. Use them in order.'}}],
   variations:[{label:{ja:"見出しの階層",en:"Heading hierarchy"}, code:{ja:`<h1>記事のタイトル（h1は1つ）</h1>
<h2>大きな章</h2>
<h3>その中の節</h3>
<h2>次の章</h2>`,en:`<h1>Article title (only one h1)</h1>
<h2>A big chapter</h2>
<h3>A section within it</h3>
<h2>Next chapter</h2>`}}]},

  {name:{ja:"段落と改行",en:"Paragraphs & line breaks"}, sub:"p / br", desc:{ja:`<b>&lt;p&gt;</b>は段落（paragraph）。文章のかたまりごとに使います。<b>&lt;br&gt;</b>は<b>改行</b>だけを入れる特殊なタグで、<b>終了タグが無い</b>（空要素）。<br>注意：段落の間隔を空けたいのに &lt;br&gt; を連打するのはNG。段落は &lt;p&gt; で分けるのが正解です。`,en:`<b>&lt;p&gt;</b> is a paragraph. Use one per block of text. <b>&lt;br&gt;</b> is a special tag that inserts only a <b>line break</b> and has <b>no closing tag</b> (an empty element).<br>Note: don't spam &lt;br&gt; to add space between paragraphs — split them with &lt;p&gt; instead.`},
   tags:["p","br",{ja:"空要素",en:"empty element"}], prep:[
     {s:{ja:'<p>文章</p>',en:'<p>text</p>'},d:{ja:'1つの<b>段落</b>。前後に自動で余白がつく。',en:'One <b>paragraph</b>. Space is added automatically before and after.'}},
     {s:'<br>',d:{ja:'<b>改行</b>だけ。閉じタグ不要（空要素）。',en:'Just a <b>line break</b>. No closing tag (empty element).'}}],
   variations:[{label:{ja:"段落と改行",en:"Paragraphs & breaks"}, code:{ja:`<p>これは1つ目の段落です。まとまった文章を入れます。</p>
<p>2つ目の段落。<br>ここで改行（br）しました。</p>`,en:`<p>This is the first paragraph. Put a block of text here.</p>
<p>The second paragraph.<br>A line break (br) here.</p>`}}]},

  {name:{ja:"文字を強調する",en:"Emphasizing text"}, sub:"strong / em", desc:{ja:`文章の一部を目立たせるタグ。<b>&lt;strong&gt;</b>は「重要」（多くは太字）、<b>&lt;em&gt;</b>は「強調」（多くは斜体）。<br>ポイント：見た目のためではなく<b>「意味」で選ぶ</b>。ただ太字にしたいだけなら本来はCSSの仕事です。`,en:`Tags that make part of the text stand out. <b>&lt;strong&gt;</b> means "important" (usually bold); <b>&lt;em&gt;</b> means "emphasis" (usually italic).<br>Key point: choose them by <b>meaning</b>, not looks. If you only want bold, that's really CSS's job.`},
   tags:["strong","em"], prep:[
     {s:{ja:'<strong>重要</strong>',en:'<strong>important</strong>'},d:{ja:'<b>重要な語</b>。太字で表示されることが多い。',en:'An <b>important</b> word. Often shown in bold.'}},
     {s:{ja:'<em>強調</em>',en:'<em>emphasis</em>'},d:{ja:'<b>強調したい語</b>。斜体で表示されることが多い。',en:'A word to <b>emphasize</b>. Often shown in italics.'}}],
   variations:[{label:{ja:"強調してみる",en:"Try emphasis"}, code:{ja:`<p>これは <strong>とても大事</strong> な文です。</p>
<p>ここを <em>強調</em> して読んでほしい。</p>`,en:`<p>This is a <strong>very important</strong> sentence.</p>
<p>Please read this part with <em>emphasis</em>.</p>`}}]},

  {name:{ja:"箇条書き",en:"Bulleted lists"}, sub:"ul / ol / li", desc:{ja:`リストは2種類。<b>&lt;ul&gt;</b>=順序なし（・）、<b>&lt;ol&gt;</b>=順序あり（1.2.3）。中の項目は必ず<b>&lt;li&gt;</b>。<br><b>ルール</b>：&lt;li&gt; は <b>&lt;ul&gt; か &lt;ol&gt; の直下だけ</b>に置きます。ul の直接の子に &lt;p&gt; などを置いてはいけません。`,en:`Two kinds of list. <b>&lt;ul&gt;</b> = unordered (•), <b>&lt;ol&gt;</b> = ordered (1. 2. 3.). Every item must be an <b>&lt;li&gt;</b>.<br><b>Rule</b>: put &lt;li&gt; <b>only directly inside &lt;ul&gt; or &lt;ol&gt;</b>. Never put &lt;p&gt; etc. as a direct child of ul.`},
   tags:["ul","ol","li"], prep:[
     {s:'<ul><li>…</li></ul>',d:{ja:'<b>・</b>の箇条書き。',en:'A <b>bulleted</b> list.'}},
     {s:'<ol>',d:{ja:'<b>番号つき</b>リストに変わる（中身のliは同じ）。',en:'Turns it into a <b>numbered</b> list (the li items are the same).'}}],
   variations:[
     {label:{ja:"順序なし(ul)",en:"Unordered (ul)"}, code:{ja:`<ul>
  <li>りんご</li>
  <li>みかん</li>
  <li>ぶどう</li>
</ul>`,en:`<ul>
  <li>Apple</li>
  <li>Orange</li>
  <li>Grape</li>
</ul>`}},
     {label:{ja:"順序あり(ol)",en:"Ordered (ol)"}, code:{ja:`<ol>
  <li>顔を洗う</li>
  <li>歯をみがく</li>
  <li>着替える</li>
</ol>`,en:`<ol>
  <li>Wash your face</li>
  <li>Brush your teeth</li>
  <li>Get dressed</li>
</ol>`}}]},

  {name:{ja:"リンク",en:"Links"}, sub:"a / href", desc:{ja:`<b>&lt;a&gt;</b>は別ページへ飛ぶリンク。行き先を <b>href</b> 属性に書きます。<b>target="_blank"</b> で新しいタブで開けます。<br>href に <b>「#」だけ</b>を書くと同じページ内へのリンク（ページ先頭など）になります。プレビューは小さな窓なので、実際の遷移は自分のサイトで試しましょう。`,en:`<b>&lt;a&gt;</b> is a link to another page. Write the destination in the <b>href</b> attribute. <b>target="_blank"</b> opens it in a new tab.<br>Writing just <b>"#"</b> in href makes a link within the same page (e.g. to the top). The preview is a tiny window, so test real navigation on your own site.`},
   tags:["a","href","target"], prep:[
     {s:{ja:'<a href="URL">文字</a>',en:'<a href="URL">text</a>'},d:{ja:'その文字が<b>URL</b>へのリンクになる。',en:'That text becomes a link to the <b>URL</b>.'}},
     {s:'target="_blank"',d:{ja:'<b>新しいタブ</b>で開く。',en:'Opens in a <b>new tab</b>.'}}],
   variations:[{label:{ja:"リンクを作る",en:"Make a link"}, code:{ja:`<p>詳しくは <a href="https://example.com">こちら</a> をご覧ください。</p>
<a href="https://example.com" target="_blank">新しいタブで開くリンク</a>`,en:`<p>See <a href="https://example.com">here</a> for details.</p>
<a href="https://example.com" target="_blank">A link that opens in a new tab</a>`}}]},

  {name:{ja:"画像",en:"Images"}, sub:"img / alt", desc:{ja:`<b>&lt;img&gt;</b>は画像を表示。<b>src</b>に画像の場所、<b>alt</b>に「画像の説明文」を書きます。imgは<b>終了タグの無い空要素</b>。<br><b>ルール</b>：alt は必須級です。画像が表示できない時や、目の見えない人の読み上げで使われます。`,en:`<b>&lt;img&gt;</b> shows an image. Put the image location in <b>src</b> and a "description of the image" in <b>alt</b>. img is an <b>empty element with no closing tag</b>.<br><b>Rule</b>: alt is essential — it's used when the image can't load and by screen readers for blind users.`},
   tags:["img","src","alt"], prep:[
     {s:'<img src="…" alt="…">',d:{ja:'src=画像の場所、alt=画像の説明。',en:'src = image location, alt = image description.'}},
     {s:{ja:'空要素',en:'empty element'},d:{ja:'imgは中身を挟まないので<b>終了タグ不要</b>。',en:'img wraps no content, so <b>no closing tag</b> is needed.'}}],
   variations:[{label:{ja:"画像を出す",en:"Show an image"}, code:{ja:`<img src="https://placehold.co/180x110/7b2ff7/fff?text=IMG" alt="サンプル画像">
<p>画像が出ないときは、alt の文字が代わりに表示されます。</p>`,en:`<img src="https://placehold.co/180x110/7b2ff7/fff?text=IMG" alt="Sample image">
<p>If the image doesn't load, the alt text shows instead.</p>`}}]},

  {name:{ja:"太字とハイライト",en:"Bold & highlight"}, sub:"b / mark / small", desc:{ja:`見た目を少し変える<b>インライン</b>タグ。<b>&lt;b&gt;</b>は特に意味の無い太字、<b>&lt;mark&gt;</b>は<b>蛍光ペン</b>のハイライト、<b>&lt;small&gt;</b>は注釈などの小さめ文字。<br><b>使い分け</b>：「重要」なら strong、ただ太字にしたいだけなら b。mark は「検索で一致した箇所」など"目立たせる"意味に使います。`,en:`<b>Inline</b> tags that slightly change appearance. <b>&lt;b&gt;</b> is bold with no special meaning, <b>&lt;mark&gt;</b> is a <b>highlighter</b> mark, <b>&lt;small&gt;</b> is smaller text for notes.<br><b>Which to use</b>: for "important" use strong; for plain bold use b. Use mark to "make something stand out", like a search match.`},
   tags:["b","mark","small"], prep:[
     {s:'<mark>',d:{ja:'<b>蛍光ペン</b>のように目立たせる。',en:'Makes text stand out like a <b>highlighter</b>.'}},
     {s:'<small>',d:{ja:'注釈・免責など<b>小さめ</b>の文字。',en:'<b>Smaller</b> text for notes or disclaimers.'}}],
   variations:[{label:{ja:"3つの違い",en:"The three compared"}, code:{ja:`<p>これは <b>ただの太字</b>、これは <mark>ハイライト</mark>。</p>
<p>価格 <b>¥1,000</b> <small>（税込・送料別）</small></p>`,en:`<p>This is <b>plain bold</b>, and this is <mark>highlight</mark>.</p>
<p>Price <b>$10.00</b> <small>(tax incl. / shipping extra)</small></p>`}}]},

  {name:{ja:"上付き・下付き",en:"Superscript & subscript"}, sub:"sup / sub", desc:{ja:`<b>&lt;sup&gt;</b>は<b>上付き</b>（2乗・注釈番号など）、<b>&lt;sub&gt;</b>は<b>下付き</b>（化学式のH₂Oなど）。<br>例：x² は x&lt;sup&gt;2&lt;/sup&gt;、H₂O は H&lt;sub&gt;2&lt;/sub&gt;O と書きます。`,en:`<b>&lt;sup&gt;</b> is <b>superscript</b> (squares, note numbers); <b>&lt;sub&gt;</b> is <b>subscript</b> (like H₂O in chemistry).<br>Example: x² is x&lt;sup&gt;2&lt;/sup&gt;, and H₂O is H&lt;sub&gt;2&lt;/sub&gt;O.`},
   tags:["sup","sub"], prep:[
     {s:'<sup>',d:{ja:'<b>上付き</b>文字（2乗や注釈番号）。',en:'<b>Superscript</b> (squares or note numbers).'}},
     {s:'<sub>',d:{ja:'<b>下付き</b>文字（化学式など）。',en:'<b>Subscript</b> (chemical formulas, etc.).'}}],
   variations:[{label:{ja:"数式と化学式",en:"Math & chemistry"}, code:{ja:`<p>面積は a<sup>2</sup> で求めます。</p>
<p>水の化学式は H<sub>2</sub>O です。</p>
<p>注釈つきの文<sup>※1</sup></p>`,en:`<p>Area is found with a<sup>2</sup>.</p>
<p>Water's formula is H<sub>2</sub>O.</p>
<p>A sentence with a note<sup>*1</sup></p>`}}]},

  {name:{ja:"日時を表す",en:"Marking dates & times"}, sub:"time", desc:{ja:`<b>&lt;time&gt;</b>は「これは<b>日付や時刻</b>ですよ」と機械にも分かる形で示すタグ。<b>datetime</b>属性に機械用の正確な日時（2026-07-07 など）を書き、中身には人間向けの表記を入れます。<br>利点：カレンダー連携や検索エンジンが日時を正しく認識できます。`,en:`<b>&lt;time&gt;</b> marks something as a <b>date or time</b> in a machine-readable way. Put an exact machine value (like 2026-07-07) in the <b>datetime</b> attribute, and human-friendly text as the content.<br>Benefit: calendars and search engines can recognize the date/time correctly.`},
   tags:["time","datetime"], prep:[
     {s:'<time datetime="2026-07-07">',d:{ja:'datetimeに機械用の正確な日時を書く。',en:'Put the exact machine date/time in datetime.'}},
     {s:{ja:'中身',en:'content'},d:{ja:'「2026年7月7日」など<b>人が読む</b>表記を入れる。',en:'Put <b>human-readable</b> text like "July 7, 2026".'}}],
   variations:[{label:{ja:"日付を意味づけ",en:"Give a date meaning"}, code:{ja:`<p>公開日：<time datetime="2026-07-07">2026年7月7日</time></p>
<p>受付は <time datetime="19:00">午後7時</time> から。</p>`,en:`<p>Published: <time datetime="2026-07-07">July 7, 2026</time></p>
<p>Reception opens at <time datetime="19:00">7:00 PM</time>.</p>`}}]}
]},

{name:"初級", items:[
  {name:{ja:"ページの土台",en:"The page skeleton"}, sub:"DOCTYPE / html / head / body", desc:{ja:`本物のHTMLファイルは<b>決まった骨組み</b>から始まります。<b>&lt;!DOCTYPE html&gt;</b>（HTMLの宣言）→ <b>&lt;html&gt;</b>（全体）→ その中に<b>&lt;head&gt;</b>（設定：見えない部分）と<b>&lt;body&gt;</b>（本文：見える部分）。<br>この道場のHTML窓は body の中身だけを書く仕様ですが、実ファイルではこの土台が必要です。`,en:`A real HTML file starts from a <b>fixed skeleton</b>. <b>&lt;!DOCTYPE html&gt;</b> (the HTML declaration) → <b>&lt;html&gt;</b> (everything) → inside it <b>&lt;head&gt;</b> (settings: the invisible part) and <b>&lt;body&gt;</b> (content: the visible part).<br>This dojo's HTML pane only writes what's inside body, but a real file needs this skeleton.`},
   tags:["DOCTYPE","head","body"], prep:[
     {s:'<!DOCTYPE html>',d:{ja:'「これはHTML5です」の宣言。1行目に書く。',en:'Declares "this is HTML5". Write it on the first line.'}},
     {s:'<head>',d:{ja:'設定を書く場所（表示されない）。titleやmeta。',en:'Where settings go (not displayed): title, meta.'}},
     {s:'<body>',d:{ja:'画面に<b>表示される</b>中身。',en:'The content that is <b>shown</b> on screen.'}}],
   variations:[
     {label:{ja:"ファイル全体の形",en:"The whole file"}, code:{ja:`<!-- 実ファイルの全体像（プレビューでは body 内だけ描画） -->
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>ページのタイトル</title>
</head>
<body>
  <h1>ここが表示される本文</h1>
</body>
</html>`,en:`<!-- The whole real file (the preview only renders inside body) -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Page title</title>
</head>
<body>
  <h1>This body is what gets shown</h1>
</body>
</html>`}}]},

  {name:{ja:"属性で情報を足す",en:"Adding info with attributes"}, sub:{ja:"class / id / 属性",en:"class / id / attributes"}, desc:{ja:`タグには<b>属性</b>で追加情報を書けます。形は <b>&lt;タグ 属性="値"&gt;</b>。<br>よく使うのは <b>class</b>（CSSでまとめて指定する目印。同じ名前を何個でも付けてよい）と <b>id</b>（<b>同じ名前はページ内で1回だけ</b>使う目印）。`,en:`Tags can carry extra info via <b>attributes</b>, in the form <b>&lt;tag attribute="value"&gt;</b>.<br>Common ones are <b>class</b> (a label to style many elements together in CSS — you may reuse the same name) and <b>id</b> (a label used <b>only once per page</b>).`},
   tags:["class","id",{ja:"属性",en:"attribute"}], prep:[
     {s:'class="note"',d:{ja:'CSSやJSで<b>まとめて</b>指定する目印。重複OK。',en:'A label to target <b>together</b> in CSS/JS. Reuse OK.'}},
     {s:'id="main"',d:{ja:'目印。<b>同じid名</b>はページ内で1回だけ（別名のidは何個でもOK）。',en:'A label. <b>The same id name</b> is used once per page (different ids are fine).'}},
     {s:'title="…"',d:{ja:'マウスを乗せると出る<b>ヒント</b>を付ける属性。',en:'An attribute that adds a <b>hint</b> shown on hover.'}}],
   css:`.note { color: #7b2ff7; font-weight: bold; }
#special { background: #f0e9ff; padding: 6px 10px; border-radius: 6px; }`,
   variations:[
     {label:{ja:"classとid",en:"class and id"}, code:{ja:`<p class="note">これは class="note" を付けた段落</p>
<p id="special">これは id="special" を付けた段落</p>`,en:`<p class="note">A paragraph with class="note"</p>
<p id="special">A paragraph with id="special"</p>`}},
     {label:{ja:"title属性",en:"title attribute"}, code:{ja:`<p title="マウスを乗せると出る説明文">この段落にホバーしてみて</p>
<abbr title="HyperText Markup Language">HTML</abbr> の略。`,en:`<p title="A tooltip that appears on hover">Hover over this paragraph</p>
Short for <abbr title="HyperText Markup Language">HTML</abbr>.`}}]},

  {name:{ja:"divとspan",en:"div and span"}, sub:{ja:"意味を持たない箱",en:"meaningless boxes"}, desc:{ja:`<b>&lt;div&gt;</b>と<b>&lt;span&gt;</b>は「意味を持たない入れ物」。CSSをまとめて当てる時に使います。<br>違いは<b>並び方</b>：divは<b>ブロック</b>（縦に積む・横幅いっぱい）、spanは<b>インライン</b>（文章の途中に置く・文字の幅だけ）。`,en:`<b>&lt;div&gt;</b> and <b>&lt;span&gt;</b> are "meaningless containers", used to apply CSS in bulk.<br>The difference is <b>how they flow</b>: div is a <b>block</b> (stacks vertically, full width); span is <b>inline</b> (sits mid-sentence, only as wide as its text).`},
   tags:["div","span","block","inline"], prep:[
     {s:'<div>',d:{ja:'<b>ブロック</b>の箱。前後で改行され縦に積まれる。',en:'A <b>block</b> box. Breaks before/after and stacks vertically.'}},
     {s:'<span>',d:{ja:'<b>インライン</b>の箱。文章の一部だけを囲む。',en:'An <b>inline</b> box. Wraps just part of a sentence.'}}],
   css:`div { background: #f0e9ff; margin-bottom: 6px; padding: 8px; }
span { background: #d8f5f5; padding: 2px 6px; }`,
   variations:[
     {label:{ja:"div(縦積み)",en:"div (stacks)"}, code:{ja:`<div>1つ目のdiv（横幅いっぱい・縦に積む）</div>
<div>2つ目のdiv</div>`,en:`<div>First div (full width, stacks vertically)</div>
<div>Second div</div>`}},
     {label:{ja:"span(文中)",en:"span (in text)"}, code:{ja:`<p>文章の <span>この部分だけ</span> を span で囲みました。</p>`,en:`<p>Only <span>this part</span> of the sentence is wrapped in a span.</p>`}}]},

  {name:{ja:"表を作る",en:"Making tables"}, sub:"table / tr / td / th", desc:{ja:`表は<b>&lt;table&gt;</b>の中に<b>&lt;tr&gt;</b>（行）、その中に<b>&lt;td&gt;</b>（データのマス）を並べます。見出しのマスは<b>&lt;th&gt;</b>（太字＋中央）。<br><b>ルール</b>：見た目のレイアウト目的でtableを使わない。あくまで「表形式のデータ」を表すためのもの。`,en:`A table puts <b>&lt;tr&gt;</b> (rows) inside <b>&lt;table&gt;</b>, and <b>&lt;td&gt;</b> (data cells) inside each row. Header cells are <b>&lt;th&gt;</b> (bold + centered).<br><b>Rule</b>: don't use table for visual layout — it's only for representing "tabular data".`},
   tags:["table","tr","td","th"], prep:[
     {s:'<tr>',d:{ja:'<b>行</b>（横一列）。table row の略。',en:'A <b>row</b> (one horizontal line). Short for table row.'}},
     {s:'<td> / <th>',d:{ja:'td=データのマス、th=<b>見出し</b>のマス。',en:'td = data cell, th = <b>header</b> cell.'}}],
   css:`table { border-collapse: collapse; }
th, td { border: 1px solid #999; padding: 6px 12px; }`,
   variations:[
     {label:{ja:"基本の表",en:"A basic table"}, code:{ja:`<table>
  <tr><th>名前</th><th>年齢</th></tr>
  <tr><td>田中</td><td>20</td></tr>
  <tr><td>鈴木</td><td>25</td></tr>
</table>`,en:`<table>
  <tr><th>Name</th><th>Age</th></tr>
  <tr><td>Tanaka</td><td>20</td></tr>
  <tr><td>Suzuki</td><td>25</td></tr>
</table>`}}]},

  {name:{ja:"特殊文字",en:"Special characters"}, sub:{ja:"&amp;lt; などの実体参照",en:"entities like &amp;lt;"}, desc:{ja:`<b>&lt;</b> や <b>&amp;</b> はHTMLの記号なので、そのまま書くとタグと勘違いされます。文字として画面に出すには<b>実体参照</b>を使います。<br><b>&amp;lt;</b>→ &lt; 、<b>&amp;gt;</b>→ &gt; 、<b>&amp;amp;</b>→ &amp; 。コード例を文字で見せたい時に必要です。`,en:`<b>&lt;</b> and <b>&amp;</b> are HTML symbols, so writing them directly is mistaken for tags. To show them as text, use <b>entity references</b>.<br><b>&amp;lt;</b>→ &lt; , <b>&amp;gt;</b>→ &gt; , <b>&amp;amp;</b>→ &amp; . Needed when you want to show code as text.`},
   tags:[{ja:"実体参照",en:"entity"},{ja:"エスケープ",en:"escape"}], prep:[
     {s:'&lt;  →  <',d:{ja:'「小なり」記号を<b>文字</b>として表示。',en:'Shows the "less-than" sign as <b>text</b>.'}},
     {s:'&amp;  →  &',d:{ja:'アンパサンドを<b>文字</b>として表示。',en:'Shows an ampersand as <b>text</b>.'}}],
   variations:[
     {label:{ja:"記号を文字で出す",en:"Show symbols as text"}, code:{ja:`<p>HTMLで段落は &lt;p&gt; と書きます。</p>
<p>A &amp; B のように &amp;amp; でアンパサンドも出せます。</p>`,en:`<p>In HTML a paragraph is written &lt;p&gt;.</p>
<p>You can show an ampersand with &amp;amp;, as in A &amp; B.</p>`}}]},

  {name:{ja:"引用",en:"Quotations"}, sub:"blockquote / cite", desc:{ja:`他から引用した文章は<b>&lt;blockquote&gt;</b>（段落まるごとの引用）で囲み「これは引用です」と意味づけします。<b>&lt;cite&gt;</b>は<b>作品名</b>（本・記事・映画などのタイトル）を表すタグ。<br>単なる字下げのためにblockquoteを使うのはNG（それはCSSの仕事）。`,en:`Wrap quoted text in <b>&lt;blockquote&gt;</b> (a whole-paragraph quote) to mark it as "this is a quote". <b>&lt;cite&gt;</b> marks a <b>work's title</b> (a book, article, film, etc.).<br>Don't use blockquote just for indentation — that's CSS's job.`},
   tags:["blockquote","cite"], prep:[
     {s:'<blockquote>',d:{ja:'段落まるごとの<b>引用</b>。字下げ表示される。',en:'A whole-paragraph <b>quote</b>. Shown indented.'}},
     {s:'<cite>',d:{ja:'<b>作品名</b>（本・記事などのタイトル）を表す。',en:"Marks a <b>title of a work</b> (book, article, etc.)."}}],
   variations:[
     {label:{ja:"引用を書く",en:"Write a quotation"}, code:{ja:`<blockquote>
  学ぶとは、まず真似ることから始まる。
</blockquote>
<p>出典: <cite>『学びのすすめ』</cite></p>`,en:`<blockquote>
  To learn is, first of all, to imitate.
</blockquote>
<p>Source: <cite>An Encouragement of Learning</cite></p>`}}]},

  {name:{ja:"コメント",en:"Comments"}, sub:"&lt;!-- --&gt;", desc:{ja:`<b>&lt;!-- --&gt;</b> で囲むとコメント（メモ）。ブラウザに表示されず、コードの説明を残せます。<br>注意：コメントも「ページのソース」には残るので、パスワードなど秘密は書かない。`,en:`Wrap text in <b>&lt;!-- --&gt;</b> to make a comment (a note). It isn't shown in the browser and lets you leave explanations in the code.<br>Note: comments still remain in the "page source", so never write secrets like passwords.`},
   tags:[{ja:"コメント",en:"comment"}], prep:[
     {s:{ja:'<!-- メモ -->',en:'<!-- note -->'},d:{ja:'表示されない<b>メモ</b>。閉じ忘れると以降が消える原因に。',en:"A <b>note</b> that isn't shown. Forgetting to close it can hide what follows."}}],
   variations:[
     {label:{ja:"コメントを使う",en:"Use a comment"}, code:{ja:`<!-- ここはお知らせ欄 -->
<p>コメントは画面に出ません。</p>
<!-- <p>この行はコメントアウトで非表示</p> -->`,en:`<!-- This is the announcements area -->
<p>Comments do not appear on screen.</p>
<!-- <p>This line is hidden by commenting out</p> -->`}}]},

  {name:{ja:"コードを見せる",en:"Showing code"}, sub:"code / pre / kbd", desc:{ja:`プログラムや操作を表すタグ。<b>&lt;code&gt;</b>は<b>コードの断片</b>（等幅フォント）、<b>&lt;pre&gt;</b>は<b>書いたまま</b>（スペースや改行を保持）、<b>&lt;kbd&gt;</b>は<b>キー入力</b>（Ctrl+C など）。<br>複数行のコードは &lt;pre&gt;&lt;code&gt;…&lt;/code&gt;&lt;/pre&gt; と組み合わせるのが定番です。`,en:`Tags for programs and actions. <b>&lt;code&gt;</b> is a <b>code fragment</b> (monospace), <b>&lt;pre&gt;</b> keeps it <b>as written</b> (preserves spaces and line breaks), <b>&lt;kbd&gt;</b> is <b>keyboard input</b> (like Ctrl+C).<br>For multi-line code, the classic combo is &lt;pre&gt;&lt;code&gt;…&lt;/code&gt;&lt;/pre&gt;.`},
   tags:["code","pre","kbd"], prep:[
     {s:'<code>',d:{ja:'コードの<b>断片</b>。等幅フォントで表示。',en:'A <b>fragment</b> of code. Shown in monospace.'}},
     {s:'<pre>',d:{ja:'<b>書いたまま</b>（改行・空白を保持）表示。',en:'Shows text <b>as written</b> (keeps line breaks and spaces).'}},
     {s:'<kbd>',d:{ja:'<b>キーボード入力</b>を表す（Ctrl など）。',en:'Represents <b>keyboard input</b> (Ctrl, etc.).'}}],
   css:`code, pre { background: #f4f2fa; border-radius: 4px; }
pre { padding: 10px; }
code { padding: 1px 5px; }
kbd { background: #333; color: #fff; border-radius: 4px; padding: 1px 6px; font-size: 13px; }`,
   variations:[{label:{ja:"コードとキー",en:"Code & keys"}, code:{ja:`<p>変数は <code>const x = 5;</code> と書きます。</p>
<p>コピーは <kbd>Ctrl</kbd> + <kbd>C</kbd>。</p>
<pre><code>function hello() {
  console.log("hi");
}</code></pre>`,en:`<p>A variable is written <code>const x = 5;</code>.</p>
<p>Copy is <kbd>Ctrl</kbd> + <kbd>C</kbd>.</p>
<pre><code>function hello() {
  console.log("hi");
}</code></pre>`}}]},

  {name:{ja:"略語と定義",en:"Abbreviations & definitions"}, sub:"abbr / dfn", desc:{ja:`<b>&lt;abbr&gt;</b>は<b>略語</b>。title属性に正式名称を書くと、マウスを乗せた時に出ます。<b>&lt;dfn&gt;</b>はその文で初めて<b>定義される用語</b>を示します。<br>例：&lt;abbr title="HyperText Markup Language"&gt;HTML&lt;/abbr&gt; にホバーすると正式名称が表示されます。`,en:`<b>&lt;abbr&gt;</b> is an <b>abbreviation</b>. Put the full name in the title attribute and it appears on hover. <b>&lt;dfn&gt;</b> marks a <b>term being defined</b> for the first time in that sentence.<br>Example: hovering &lt;abbr title="HyperText Markup Language"&gt;HTML&lt;/abbr&gt; shows the full name.`},
   tags:["abbr","dfn","title"], prep:[
     {s:'<abbr title="…">',d:{ja:'略語。titleに<b>正式名称</b>を書く。',en:'An abbreviation. Put the <b>full name</b> in title.'}},
     {s:'<dfn>',d:{ja:'その文で<b>初めて定義</b>する用語。',en:'A term being <b>defined for the first time</b> in the sentence.'}}],
   variations:[{label:{ja:"略語にホバー",en:"Hover an abbreviation"}, code:{ja:`<p><dfn>HTML</dfn> とは、<abbr title="HyperText Markup Language">HTML</abbr> の略で、Webページの骨組みを作る言語です。</p>
<p><abbr title="Cascading Style Sheets">CSS</abbr> にもマウスを乗せてみて。</p>`,en:`<p><dfn>HTML</dfn> is short for <abbr title="HyperText Markup Language">HTML</abbr>, the language that builds the skeleton of a web page.</p>
<p>Hover over <abbr title="Cascading Style Sheets">CSS</abbr> too.</p>`}}]},

  {name:{ja:"用語リスト",en:"Description lists"}, sub:"dl / dt / dd", desc:{ja:`<b>「用語」と「その説明」</b>のペアを並べるリストが<b>&lt;dl&gt;</b>（定義リスト）。<b>&lt;dt&gt;</b>が用語（term）、<b>&lt;dd&gt;</b>が説明（description）。<br>用語集・FAQ・スペック表など「見出し＋説明」の繰り返しに最適。ul/olとは別の"意味"を持つリストです。`,en:`A list that pairs <b>a term with its description</b> is a <b>&lt;dl&gt;</b> (description list). <b>&lt;dt&gt;</b> is the term, <b>&lt;dd&gt;</b> is the description.<br>Perfect for glossaries, FAQs and spec tables — any repeated "heading + description". It's a list with a different "meaning" than ul/ol.`},
   tags:["dl","dt","dd"], prep:[
     {s:'<dt>',d:{ja:'用語（見出し）。',en:'The term (heading).'}},
     {s:'<dd>',d:{ja:'その用語の<b>説明</b>。',en:'The <b>description</b> of that term.'}}],
   css:`dt { font-weight: bold; color: #7b2ff7; }
dd { margin: 0 0 10px 16px; color: #555; }`,
   variations:[{label:{ja:"用語集を作る",en:"Make a glossary"}, code:{ja:`<dl>
  <dt>HTML</dt>
  <dd>Webページの骨組みを作る言語。</dd>
  <dt>CSS</dt>
  <dd>見た目を整える言語。</dd>
</dl>`,en:`<dl>
  <dt>HTML</dt>
  <dd>The language that builds a web page's skeleton.</dd>
  <dt>CSS</dt>
  <dd>The language that styles the appearance.</dd>
</dl>`}}]}
]},

{name:"中級", items:[
  {name:{ja:"開閉できる(details)",en:"Collapsible (details)"}, sub:{ja:"アコーディオン",en:"accordion"}, desc:{ja:`<b>&lt;details&gt;</b>と<b>&lt;summary&gt;</b>を使うと、<b>JavaScriptなしでHTMLだけ</b>で「クリックで開閉」するアコーディオンが作れます！ summary が見出し、それ以外が開いたとき出る中身です。<br>details/summaryはブラウザ標準機能なので<b>プレビューでも開閉できます</b>。`,en:`With <b>&lt;details&gt;</b> and <b>&lt;summary&gt;</b> you can build a "click to open/close" accordion <b>with HTML alone, no JavaScript</b>! summary is the heading; everything else is the content shown when open.<br>details/summary are built into the browser, so <b>they open and close even in the preview</b>.`},
   tags:["details","summary"], prep:[
     {s:'<details>…</details>',d:{ja:'開閉できる箱。<b>JS不要</b>。',en:'A collapsible box. <b>No JS needed</b>.'}},
     {s:'<summary>',d:{ja:'いつも見えている<b>クリックする見出し</b>。',en:'The always-visible <b>heading you click</b>.'}}],
   variations:[{label:{ja:"FAQを作る",en:"Make a FAQ"}, code:{ja:`<details>
  <summary>Q. HTMLだけで開閉できる？</summary>
  <p>はい！ details と summary を使えばJSなしで開閉できます。</p>
</details>
<details>
  <summary>Q. 最初から開いておける？</summary>
  <p>&lt;details open&gt; と書くと、最初から開いた状態になります。</p>
</details>`,en:`<details>
  <summary>Q. Can I open/close with HTML alone?</summary>
  <p>Yes! With details and summary you can open/close without JS.</p>
</details>
<details>
  <summary>Q. Can it start open?</summary>
  <p>Write &lt;details open&gt; to make it start in the open state.</p>
</details>`}}]},

  {name:{ja:"セマンティックHTML",en:"Semantic HTML"}, sub:{ja:"意味でタグを選ぶ",en:"choose tags by meaning"}, desc:{ja:`同じ「箱」でも、意味に合ったタグを選ぶ考え方が<b>セマンティック</b>（意味的）HTML。何でも &lt;div&gt; にせず、ヘッダーなら<b>&lt;header&gt;</b>、メニューなら<b>&lt;nav&gt;</b>を使う。<br><b>利点</b>：検索エンジンや読み上げソフトが構造を理解でき、コードも読みやすくなります。`,en:`Choosing a tag that fits the meaning — even for the same "box" — is <b>semantic</b> HTML. Instead of making everything a &lt;div&gt;, use <b>&lt;header&gt;</b> for a header and <b>&lt;nav&gt;</b> for a menu.<br><b>Benefit</b>: search engines and screen readers understand the structure, and the code is easier to read.`},
   tags:[{ja:"セマンティック",en:"semantic"},{ja:"構造",en:"structure"}], prep:[
     {s:{ja:'意味で選ぶ',en:'choose by meaning'},d:{ja:'見た目でなく<b>役割</b>でタグを選ぶ。',en:'Pick tags by their <b>role</b>, not their look.'}},
     {s:{ja:'<div>は最後の手段',en:'<div> is a last resort'},d:{ja:'ぴったりのタグが無い時だけ div。',en:'Use div only when no fitting tag exists.'}}],
   variations:[
     {label:{ja:"✕ divだらけ",en:"✕ all divs"}, code:{ja:`<div class="header">サイト名</div>
<div class="nav">メニュー</div>
<div class="main">本文</div>`,en:`<div class="header">Site name</div>
<div class="nav">Menu</div>
<div class="main">Content</div>`}},
     {label:{ja:"○ 意味のあるタグ",en:"○ meaningful tags"}, code:{ja:`<header>サイト名</header>
<nav>メニュー</nav>
<main>本文</main>`,en:`<header>Site name</header>
<nav>Menu</nav>
<main>Content</main>`}}]},

  {name:{ja:"ページの骨格",en:"Page structure"}, sub:"header / nav / main / footer", desc:{ja:`1ページは大きく<b>&lt;header&gt;</b>（導入部・ロゴやタイトル）、<b>&lt;nav&gt;</b>（メニュー＝リンクのまとまり）、<b>&lt;main&gt;</b>（主役の中身）、<b>&lt;footer&gt;</b>（締め・著作権など）に分けられます。<br><b>ルール</b>：<b>&lt;main&gt; は1ページに1つ</b>。そのページの主要コンテンツを表します。`,en:`A page divides broadly into <b>&lt;header&gt;</b> (intro: logo/title), <b>&lt;nav&gt;</b> (menu = a group of links), <b>&lt;main&gt;</b> (the star content), and <b>&lt;footer&gt;</b> (closing: copyright, etc.).<br><b>Rule</b>: <b>one &lt;main&gt; per page</b>. It holds the page's primary content.`},
   tags:["header","nav","main","footer"], prep:[
     {s:'<header> / <footer>',d:{ja:'ページや記事の<b>導入部・締め</b>の役割。',en:'The <b>intro and closing</b> of a page or article.'}},
     {s:'<main>',d:{ja:'そのページの<b>主役</b>。1ページ1つだけ。',en:"The page's <b>star</b>. Only one per page."}}],
   variations:[
     {label:{ja:"骨格を組む",en:"Build the structure"}, code:{ja:`<header>
  <h1>私のブログ</h1>
  <nav>
    <a href="#">ホーム</a> / <a href="#">記事一覧</a> / <a href="#">お問い合わせ</a>
  </nav>
</header>
<main>
  <p>ここがページの主役の中身です。</p>
</main>
<footer>© 2026 私のブログ</footer>`,en:`<header>
  <h1>My Blog</h1>
  <nav>
    <a href="#">Home</a> / <a href="#">Articles</a> / <a href="#">Contact</a>
  </nav>
</header>
<main>
  <p>This is the star content of the page.</p>
</main>
<footer>© 2026 My Blog</footer>`}}]},

  {name:{ja:"section と article",en:"section and article"}, sub:{ja:"まとまりの分け方",en:"how to group content"}, desc:{ja:`<b>&lt;section&gt;</b>は「意味のあるまとまり（章）」、<b>&lt;article&gt;</b>は「それ単体で完結する内容」（記事・投稿・商品カードなど）。<br><b>ルール</b>：section には原則<b>見出し(h)を1つ</b>置く。「単独で切り出しても意味が通るか？」がYESなら article。`,en:`<b>&lt;section&gt;</b> is a "meaningful group (chapter)"; <b>&lt;article&gt;</b> is "content that stands on its own" (an article, post, product card, etc.).<br><b>Rule</b>: a section should generally have <b>one heading (h)</b>. If "does it still make sense pulled out on its own?" is YES, use article.`},
   tags:["section","article"], prep:[
     {s:'<article>',d:{ja:'単体で成立する内容。ブログ記事・口コミ1件など。',en:'Self-contained content: a blog post, a single review, etc.'}},
     {s:'<section>',d:{ja:'テーマでまとめた区切り。中に見出しを持つ。',en:'A themed grouping. Contains a heading.'}}],
   variations:[
     {label:{ja:"記事を組む",en:"Build an article"}, code:{ja:`<article>
  <h2>記事のタイトル</h2>
  <p>この記事だけで完結する内容。SNSに貼っても意味が通る。</p>
  <section>
    <h3>記事内の章</h3>
    <p>記事の中を section で章分けもできます。</p>
  </section>
</article>`,en:`<article>
  <h2>Article title</h2>
  <p>Content complete on its own. It still makes sense pasted on social media.</p>
  <section>
    <h3>A chapter within the article</h3>
    <p>You can split the article into chapters with section.</p>
  </section>
</article>`}}]},

  {name:"aside", sub:{ja:"補足・余談",en:"notes & asides"}, desc:{ja:`<b>&lt;aside&gt;</b>は本筋から少し外れた<b>補足</b>や余談。サイドバー、広告、関連リンク、用語のミニ解説などに使います。「無くても本文は成立する」情報が目安。`,en:`<b>&lt;aside&gt;</b> is a <b>supplement</b> or aside, slightly off the main thread. Use it for sidebars, ads, related links, or mini glossary notes. A good test: "the main text still works without it".`},
   tags:["aside"], prep:[
     {s:'<aside>',d:{ja:'メイン内容の<b>わき</b>にある補足情報。',en:'Supplementary info <b>beside</b> the main content.'}}],
   css:`aside { background: #f0e9ff; padding: 10px 14px; border-left: 4px solid #7b2ff7; }`,
   variations:[
     {label:{ja:"補足を添える",en:"Add a note"}, code:{ja:`<main>
  <p>本文：CSSでレイアウトを組む方法を解説します。</p>
  <aside>
    <p>豆知識：昔は table でレイアウトを組んでいました。</p>
  </aside>
</main>`,en:`<main>
  <p>Main text: how to build a layout with CSS.</p>
  <aside>
    <p>Trivia: layouts used to be built with tables.</p>
  </aside>
</main>`}}]},

  {name:{ja:"figure と figcaption",en:"figure and figcaption"}, sub:{ja:"画像＋説明のセット",en:"image + caption set"}, desc:{ja:`画像・図・コードなどに<b>キャプション（説明）</b>を添えるまとまりが<b>&lt;figure&gt;</b>。説明文は<b>&lt;figcaption&gt;</b>。本文から「図1参照」のように参照される図に使います。`,en:`<b>&lt;figure&gt;</b> groups an image, diagram, or code with a <b>caption</b>. The caption is <b>&lt;figcaption&gt;</b>. Use it for figures referenced from the text, like "see Figure 1".`},
   tags:["figure","figcaption"], prep:[
     {s:'<figure>',d:{ja:'画像＋説明を<b>1セット</b>にする箱。',en:'A box that makes an image + caption <b>one set</b>.'}},
     {s:'<figcaption>',d:{ja:'その図の<b>キャプション</b>（説明文）。',en:"That figure's <b>caption</b>."}}],
   css:`figure { margin: 0; }
figcaption { color: #666; font-size: 13px; margin-top: 4px; }`,
   variations:[
     {label:{ja:"図に説明を付ける",en:"Caption a figure"}, code:{ja:`<figure>
  <img src="https://placehold.co/220x120/7b2ff7/fff?text=Graph" alt="棒グラフ">
  <figcaption>図1：月ごとの売上（サンプル）</figcaption>
</figure>`,en:`<figure>
  <img src="https://placehold.co/220x120/7b2ff7/fff?text=Graph" alt="Bar chart">
  <figcaption>Figure 1: Monthly sales (sample)</figcaption>
</figure>`}}]},

  {name:{ja:"表の意味づけ",en:"Semantic tables"}, sub:"thead / tbody / th scope", desc:{ja:`表は<b>&lt;thead&gt;</b>（見出し行）と<b>&lt;tbody&gt;</b>（データ行）に分けると構造が明確に。見出しセル&lt;th&gt;には<b>scope="col"</b>（列見出し）や<b>scope="row"</b>（行見出し）を付けると、読み上げソフトが正しく対応します。`,en:`Split a table into <b>&lt;thead&gt;</b> (header rows) and <b>&lt;tbody&gt;</b> (data rows) to clarify its structure. On header cells &lt;th&gt;, add <b>scope="col"</b> (column header) or <b>scope="row"</b> (row header) so screen readers map them correctly.`},
   tags:["thead","tbody","scope"], prep:[
     {s:'<thead> / <tbody>',d:{ja:'表の<b>見出し部</b>と<b>本体部</b>を分ける。',en:"Separates the table's <b>header</b> and <b>body</b>."}},
     {s:'th scope="col"',d:{ja:'その見出しが<b>列</b>用（rowなら行用）だと示す。',en:'Shows the header is for a <b>column</b> (row for a row).'}}],
   css:`table { border-collapse: collapse; }
th, td { border: 1px solid #999; padding: 6px 12px; }
thead { background: #f0f0f0; }`,
   variations:[
     {label:{ja:"意味づけした表",en:"A semantic table"}, code:{ja:`<table>
  <thead>
    <tr><th scope="col">商品</th><th scope="col">値段</th></tr>
  </thead>
  <tbody>
    <tr><th scope="row">りんご</th><td>150円</td></tr>
    <tr><th scope="row">みかん</th><td>100円</td></tr>
  </tbody>
</table>`,en:`<table>
  <thead>
    <tr><th scope="col">Item</th><th scope="col">Price</th></tr>
  </thead>
  <tbody>
    <tr><th scope="row">Apple</th><td>$1.50</td></tr>
    <tr><th scope="row">Orange</th><td>$1.00</td></tr>
  </tbody>
</table>`}}]},

  {name:{ja:"進捗と数値",en:"Progress & values"}, sub:"progress / meter", desc:{ja:`<b>&lt;progress&gt;</b>は<b>進捗バー</b>（ダウンロード中など、ゴールに向かう進み具合）、<b>&lt;meter&gt;</b>は<b>ある範囲の中の量</b>（ディスク使用量・点数など）。<br><b>value</b>に現在値、<b>max</b>に最大値を書きます。CSSを書かなくてもブラウザ標準のバーが表示されます。`,en:`<b>&lt;progress&gt;</b> is a <b>progress bar</b> (progress toward a goal, like a download); <b>&lt;meter&gt;</b> is <b>an amount within a range</b> (disk usage, a score).<br>Write the current value in <b>value</b> and the maximum in <b>max</b>. The browser draws a standard bar with no CSS.`},
   tags:["progress","meter","value"], prep:[
     {s:'<progress value max>',d:{ja:'ゴールへの<b>進み具合</b>を表すバー。',en:'A bar showing <b>progress</b> toward a goal.'}},
     {s:'<meter value min max>',d:{ja:'範囲の中の<b>今の量</b>を表す。',en:'Shows the <b>current amount</b> within a range.'}}],
   variations:[{label:{ja:"バーを出す",en:"Show a bar"}, code:{ja:`<p>アップロード中：</p>
<progress value="70" max="100">70%</progress>

<p>今日の達成度：</p>
<meter value="6" min="0" max="10">6/10</meter>`,en:`<p>Uploading:</p>
<progress value="70" max="100">70%</progress>

<p>Today's achievement:</p>
<meter value="6" min="0" max="10">6/10</meter>`}}]},

  {name:{ja:"連絡先",en:"Contact info"}, sub:"address", desc:{ja:`<b>&lt;address&gt;</b>は、その記事やサイトの<b>連絡先</b>（メール・住所・SNS）を表すタグ。<br><b>注意</b>：単なる住所全般ではなく「<b>この文書の問い合わせ先</b>」に使うのが正しい用法。多くのブラウザで斜体表示されます。`,en:`<b>&lt;address&gt;</b> marks the <b>contact info</b> (email, address, social) for an article or site.<br><b>Note</b>: it's not for addresses in general — the correct use is "the contact point for this document". Most browsers show it in italics.`},
   tags:["address"], prep:[
     {s:'<address>',d:{ja:'その文書やサイトの<b>問い合わせ先</b>。',en:'The <b>contact point</b> for that document or site.'}}],
   variations:[{label:{ja:"問い合わせ先",en:"Contact point"}, code:{ja:`<footer>
  <address>
    お問い合わせ：<a href="mailto:info@example.com">info@example.com</a><br>
    東京都千代田区1-2-3
  </address>
</footer>`,en:`<footer>
  <address>
    Contact: <a href="mailto:info@example.com">info@example.com</a><br>
    1-2-3 Chiyoda, Tokyo
  </address>
</footer>`}}]}
]},

{name:"上級", items:[
  {name:{ja:"フォームの基本",en:"Form basics"}, sub:"form / label / input", desc:{ja:`入力欄のまとまりは<b>&lt;form&gt;</b>で囲みます。中に<b>&lt;label&gt;</b>（項目名）と<b>&lt;input&gt;</b>（入力欄）を置くのが基本。<br><b>ルール</b>：label の <b>for</b> と input の <b>id</b> を<b>同じ値</b>にすると、ラベルを押しても入力欄が反応し、格段に使いやすくなります。`,en:`Wrap a group of inputs in <b>&lt;form&gt;</b>. Inside, the basics are <b>&lt;label&gt;</b> (the field name) and <b>&lt;input&gt;</b> (the input box).<br><b>Rule</b>: make the label's <b>for</b> and the input's <b>id</b> the <b>same value</b> — then clicking the label focuses the input, which is far more usable.`},
   tags:["form","label","input","for"], prep:[
     {s:'<label for="x">',d:{ja:'入力欄の見出し。forをinputのidと合わせる。',en:"An input's heading. Match for to the input's id."}},
     {s:'<input id="x">',d:{ja:'入力欄そのもの。空要素（閉じタグ不要）。',en:'The input box itself. An empty element (no closing tag).'}}],
   css:`form { display: grid; gap: 6px; max-width: 300px; }
label { font-weight: bold; font-size: 14px; }
input { padding: 8px 10px; border: 1px solid #bbb; border-radius: 6px; }`,
   variations:[
     {label:{ja:"ラベル付き入力",en:"Labeled inputs"}, code:{ja:`<form>
  <label for="name">お名前</label>
  <input id="name" type="text" placeholder="山田 太郎">

  <label for="mail">メール</label>
  <input id="mail" type="email" placeholder="you@example.com">
</form>`,en:`<form>
  <label for="name">Name</label>
  <input id="name" type="text" placeholder="John Smith">

  <label for="mail">Email</label>
  <input id="mail" type="email" placeholder="you@example.com">
</form>`}}]},

  {name:{ja:"いろいろな入力欄",en:"Kinds of input"}, sub:"input type", desc:{ja:`&lt;input&gt;は<b>type属性</b>で種類が変わります。<b>text</b>（文字）、<b>email</b>（メール用キーボード）、<b>password</b>（伏字）、<b>number</b>（数値）、<b>date</b>（日付ピッカー）、<b>color</b>（色選び）など。<br>スマホでは type に合わせて<b>最適なキーボード</b>が出るので、正しく選ぶと親切です。`,en:`&lt;input&gt; changes with its <b>type attribute</b>: <b>text</b>, <b>email</b> (email keyboard), <b>password</b> (masked), <b>number</b>, <b>date</b> (date picker), <b>color</b> (color picker), and more.<br>On phones the <b>best keyboard</b> appears for the type, so choosing correctly is helpful.`},
   tags:["type","password","date"], prep:[
     {s:'type="password"',d:{ja:'入力が<b>伏字</b>になる。',en:'Input is <b>masked</b>.'}},
     {s:'type="date"',d:{ja:'カレンダーの<b>日付ピッカー</b>が出る。',en:'Shows a calendar <b>date picker</b>.'}},
     {s:'type="number"',d:{ja:'数値専用。上下ボタンが付く。',en:'Numbers only. Comes with up/down buttons.'}}],
   css:`form { display: grid; gap: 8px; max-width: 260px; }
label { font-size: 14px; font-weight: bold; }
input { padding: 8px; border: 1px solid #bbb; border-radius: 6px; }`,
   variations:[
     {label:{ja:"種類いろいろ",en:"A variety of types"}, code:{ja:`<form>
  <label>パスワード</label>
  <input type="password" placeholder="••••••">
  <label>生年月日</label>
  <input type="date">
  <label>好きな色</label>
  <input type="color" value="#7b2ff7">
</form>`,en:`<form>
  <label>Password</label>
  <input type="password" placeholder="••••••">
  <label>Date of birth</label>
  <input type="date">
  <label>Favorite color</label>
  <input type="color" value="#7b2ff7">
</form>`}}]},

  {name:{ja:"選択肢を選ぶ",en:"Choosing options"}, sub:"select / option / textarea", desc:{ja:`決まった選択肢から選ぶなら<b>&lt;select&gt;</b>とその中の<b>&lt;option&gt;</b>。長い文章の入力欄は<b>&lt;textarea&gt;</b>（複数行）。<br>ヒント：selectは選択肢が多い時、次に学ぶラジオボタンは選択肢が少なく一覧で見せたい時に向きます。`,en:`To pick from fixed choices, use <b>&lt;select&gt;</b> with <b>&lt;option&gt;</b> inside. For long text, use <b>&lt;textarea&gt;</b> (multi-line).<br>Tip: select suits many options; radio buttons (learned next) suit a few options you want visible at once.`},
   tags:["select","option","textarea"], prep:[
     {s:'<select><option>…',d:{ja:'プルダウンの選択肢。optionが1つ1つの候補。',en:'A dropdown of choices. Each option is one candidate.'}},
     {s:'<textarea>',d:{ja:'<b>複数行</b>の文字入力欄。',en:'A <b>multi-line</b> text input.'}}],
   css:`form { display: grid; gap: 8px; max-width: 260px; }
label { font-size: 14px; font-weight: bold; }
select, textarea { padding: 8px; border: 1px solid #bbb; border-radius: 6px; }`,
   variations:[
     {label:{ja:"プルダウンと入力",en:"Dropdown & input"}, code:{ja:`<form>
  <label>お住まいの地域</label>
  <select>
    <option>北海道</option>
    <option>東京都</option>
    <option>沖縄県</option>
  </select>
  <label>ご意見</label>
  <textarea rows="3" placeholder="自由に入力"></textarea>
</form>`,en:`<form>
  <label>Your region</label>
  <select>
    <option>Hokkaido</option>
    <option>Tokyo</option>
    <option>Okinawa</option>
  </select>
  <label>Your comment</label>
  <textarea rows="3" placeholder="Type freely"></textarea>
</form>`}}]},

  {name:{ja:"チェックとラジオ",en:"Checkboxes & radios"}, sub:"checkbox / radio", desc:{ja:`<b>type="checkbox"</b>は<b>複数選べる</b>チェックボックス、<b>type="radio"</b>は<b>1つだけ選ぶ</b>ラジオボタン。<br><b>超重要ルール</b>：ラジオは<b>同じ name をグループ全部に付ける</b>と「1つだけ選択」になります。nameが違うと全部別々に選べてしまいます。`,en:`<b>type="checkbox"</b> is a checkbox that lets you <b>select multiple</b>; <b>type="radio"</b> is a radio button that selects <b>only one</b>.<br><b>Crucial rule</b>: give <b>the same name to the whole radio group</b> to make it "select only one". Different names let all of them be selected separately.`},
   tags:["checkbox","radio","name"], prep:[
     {s:'type="checkbox"',d:{ja:'複数選択できる四角いチェック。',en:'A square check you can select multiple of.'}},
     {s:{ja:'type="radio" + 同じname',en:'type="radio" + same name'},d:{ja:'同じnameで<b>1つだけ</b>選ぶグループになる。',en:'The same name makes a group where <b>only one</b> is chosen.'}}],
   css:`fieldset { border: 1px solid #ccc; border-radius: 8px; }
label { display: block; margin: 4px 0; }`,
   variations:[
     {label:{ja:"チェック(複数)",en:"Checkboxes (multiple)"}, code:{ja:`<fieldset>
  <legend>好きな果物（複数可）</legend>
  <label><input type="checkbox"> りんご</label>
  <label><input type="checkbox"> みかん</label>
  <label><input type="checkbox"> ぶどう</label>
</fieldset>`,en:`<fieldset>
  <legend>Favorite fruits (multiple)</legend>
  <label><input type="checkbox"> Apple</label>
  <label><input type="checkbox"> Orange</label>
  <label><input type="checkbox"> Grape</label>
</fieldset>`}},
     {label:{ja:"ラジオ(1つ)",en:"Radios (one)"}, code:{ja:`<fieldset>
  <legend>お支払い方法（1つ）</legend>
  <label><input type="radio" name="pay"> クレジット</label>
  <label><input type="radio" name="pay"> 銀行振込</label>
  <label><input type="radio" name="pay"> 代金引換</label>
</fieldset>`,en:`<fieldset>
  <legend>Payment method (one)</legend>
  <label><input type="radio" name="pay"> Credit card</label>
  <label><input type="radio" name="pay"> Bank transfer</label>
  <label><input type="radio" name="pay"> Cash on delivery</label>
</fieldset>`}}]},

  {name:{ja:"ボタンの種類",en:"Button types"}, sub:"button type", desc:{ja:`<b>&lt;button&gt;</b>は<b>type</b>で役割が変わります。<b>submit</b>（フォーム送信・省略時の初期値）、<b>reset</b>（入力を全消し）、<b>button</b>（ただのボタン）。<br>注意：form の中で type を省いた button は<b>自動でsubmit扱い</b>になり、意図せず送信されることがあります。ただの操作ボタンには type="button" を明記しましょう。`,en:`<b>&lt;button&gt;</b> changes role by <b>type</b>: <b>submit</b> (submit the form — the default), <b>reset</b> (clear all inputs), <b>button</b> (just a button).<br>Note: inside a form, a button with no type is <b>treated as submit automatically</b> and may submit unintentionally. For a plain action button, always write type="button".`},
   tags:["button","type","submit"], prep:[
     {s:'type="submit"',d:{ja:'フォームを<b>送信</b>する（初期値）。',en:'<b>Submits</b> the form (default).'}},
     {s:'type="button"',d:{ja:'送信しない<b>ただのボタン</b>。',en:"A <b>plain button</b> that doesn't submit."}}],
   css:`button { padding: 10px 20px; border: none; border-radius: 8px; margin-right: 6px; cursor: pointer; }
.send { background: #7b2ff7; color: #fff; }
.clear { background: #eee; }`,
   variations:[
     {label:{ja:"送信とリセット",en:"Submit & reset"}, code:{ja:`<form>
  <button type="submit" class="send">送信する</button>
  <button type="reset" class="clear">クリア</button>
</form>`,en:`<form>
  <button type="submit" class="send">Send</button>
  <button type="reset" class="clear">Clear</button>
</form>`}}]},

  {name:{ja:"入力を助ける属性",en:"Attributes that help input"}, sub:{ja:"placeholder / required など",en:"placeholder / required, etc."}, desc:{ja:`入力欄を親切にする属性たち。<b>placeholder</b>（薄いヒント文）、<b>required</b>（未入力だと送信をブロック）、<b>maxlength</b>（最大文字数）、<b>value</b>（初期値）。<br>注意：placeholderは<b>ラベルの代わりにはなりません</b>（入力すると消えるため）。&lt;label&gt;は別途必ず付けます。`,en:`Attributes that make inputs friendlier: <b>placeholder</b> (faint hint text), <b>required</b> (blocks submit if empty), <b>maxlength</b> (max characters), <b>value</b> (initial value).<br>Note: placeholder is <b>not a substitute for a label</b> (it disappears once you type). Always add a &lt;label&gt; as well.`},
   tags:["placeholder","required","value"], prep:[
     {s:{ja:'placeholder="例：山田"',en:'placeholder="e.g. Smith"'},d:{ja:'入力前に薄く出る<b>ヒント</b>。ラベルの代用は不可。',en:'A faint <b>hint</b> shown before typing. Not a label substitute.'}},
     {s:'required',d:{ja:'<b>必須</b>。未入力だと送信できない。',en:"<b>Required</b>. Can't submit if empty."}}],
   css:`form { display: grid; gap: 6px; max-width: 280px; }
label { font-size: 14px; font-weight: bold; }
input { padding: 8px; border: 1px solid #bbb; border-radius: 6px; }`,
   variations:[
     {label:{ja:"必須つき入力",en:"Required input"}, code:{ja:`<form>
  <label for="u">ユーザー名（必須）</label>
  <input id="u" type="text" placeholder="半角英数" required maxlength="12">
  <button type="submit">登録</button>
</form>`,en:`<form>
  <label for="u">Username (required)</label>
  <input id="u" type="text" placeholder="letters & numbers" required maxlength="12">
  <button type="submit">Register</button>
</form>`}}]},

  {name:{ja:"入力の検証",en:"Input validation"}, sub:"required / pattern / min / max", desc:{ja:`フォームは<b>属性だけで入力チェック</b>ができます。<b>required</b>（必須）、<b>pattern</b>（正規表現で形式を指定）、<b>min/max</b>（数値や日付の範囲）、<b>minlength/maxlength</b>（文字数）。<br>ブラウザが送信時に自動でチェックし、エラーを表示します（この道場では送信は行いません）。`,en:`Forms can <b>validate input with attributes alone</b>: <b>required</b>, <b>pattern</b> (a regex format), <b>min/max</b> (number or date range), <b>minlength/maxlength</b> (length).<br>The browser checks automatically on submit and shows errors (this dojo doesn't actually submit).`},
   tags:["required","pattern","min","max"], prep:[
     {s:'pattern="[0-9]{3}-[0-9]{4}"',d:{ja:'入力の<b>形式</b>を正規表現で指定。',en:'Specify the input <b>format</b> with a regex.'}},
     {s:'min="0" max="120"',d:{ja:'数値・日付の<b>範囲</b>を制限。',en:'Limit the <b>range</b> of numbers or dates.'}}],
   css:`form { display: grid; gap: 8px; max-width: 280px; }
label { font-weight: bold; font-size: 14px; }
input { padding: 8px; border: 1px solid #bbb; border-radius: 6px; }
button { padding: 10px; border: none; border-radius: 8px; background: #7b2ff7; color: #fff; cursor: pointer; }`,
   variations:[{label:{ja:"検証つき入力",en:"Validated input"}, code:{ja:`<form>
  <label>郵便番号（3桁-4桁）</label>
  <input type="text" pattern="[0-9]{3}-[0-9]{4}" placeholder="100-0001" required>
  <label>年齢（0〜120）</label>
  <input type="number" min="0" max="120">
  <button type="submit">確認</button>
</form>`,en:`<form>
  <label>Postal code (3-4 digits)</label>
  <input type="text" pattern="[0-9]{3}-[0-9]{4}" placeholder="100-0001" required>
  <label>Age (0–120)</label>
  <input type="number" min="0" max="120">
  <button type="submit">Confirm</button>
</form>`}}]},

  {name:{ja:"入力候補",en:"Input suggestions"}, sub:"datalist", desc:{ja:`<b>&lt;datalist&gt;</b>は入力欄に<b>候補（サジェスト）</b>を出す仕組み。inputの<b>list</b>属性と datalist の<b>id</b>を同じ値にして紐づけます。<br>selectとの違い：datalistは<b>候補以外も自由に入力できる</b>点。「よく使う値」を提案しつつ自由入力も許したい時に便利です。`,en:`<b>&lt;datalist&gt;</b> provides <b>suggestions</b> for an input. Link it by making the input's <b>list</b> attribute equal the datalist's <b>id</b>.<br>Difference from select: with datalist you can <b>still type anything besides the suggestions</b>. Great when you want to suggest common values but allow free input.`},
   tags:["datalist","list"], prep:[
     {s:'input list="fruits"',d:{ja:'候補リストのidを指定して紐づける。',en:'Links to the suggestion list by its id.'}},
     {s:'<datalist id="fruits">',d:{ja:'&lt;option&gt;で候補を並べる。',en:'Lists suggestions with &lt;option&gt;.'}}],
   variations:[{label:{ja:"候補を出す",en:"Show suggestions"}, code:{ja:`<label>好きな果物</label>
<input type="text" list="fruits" placeholder="入力すると候補が出る">
<datalist id="fruits">
  <option value="りんご">
  <option value="みかん">
  <option value="ぶどう">
</datalist>`,en:`<label>Favorite fruit</label>
<input type="text" list="fruits" placeholder="type to see suggestions">
<datalist id="fruits">
  <option value="Apple">
  <option value="Orange">
  <option value="Grape">
</datalist>`}}]}
]},

{name:"特級", items:[
  {name:{ja:"メタ情報とSEO",en:"Meta info & SEO"}, sub:"meta / title", desc:{ja:`&lt;head&gt;の中の<b>&lt;meta&gt;</b>や<b>&lt;title&gt;</b>は、画面には出ませんが超重要。<b>charset="utf-8"</b>（文字化け防止）、<b>viewport</b>（スマホ対応の必須設定）、<b>title</b>（タブや検索結果に出る題名）、<b>description</b>（検索結果の説明文）。<br>特にviewportが無いと、スマホで極端に縮小表示されます。`,en:`<b>&lt;meta&gt;</b> and <b>&lt;title&gt;</b> inside &lt;head&gt; don't appear on screen but are crucial. <b>charset="utf-8"</b> (prevents garbled text), <b>viewport</b> (essential for mobile), <b>title</b> (the name on the tab and in search results), <b>description</b> (the summary in search results).<br>Without viewport in particular, phones show the page shrunk extremely small.`},
   tags:["meta","viewport","title"], prep:[
     {s:'meta charset="utf-8"',d:{ja:'文字コード指定。<b>文字化け</b>を防ぐ。',en:'Sets the character encoding. Prevents <b>garbled text</b>.'}},
     {s:'meta name="viewport" …',d:{ja:'スマホで正しい幅にする<b>必須</b>設定。',en:'The <b>essential</b> setting for correct width on phones.'}},
     {s:'meta name="description"',d:{ja:'検索結果に出る<b>説明文</b>。',en:'The <b>summary</b> shown in search results.'}}],
   variations:[
     {label:{ja:"head の中身",en:"Inside head"}, code:{ja:`<!-- これは <head> の中に書く（表示されない設定たち） -->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>私のサイト｜HTML入門</title>
<meta name="description" content="HTMLの基本を学べるサイトです">`,en:`<!-- Write this inside <head> (invisible settings) -->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>My Site | Intro to HTML</title>
<meta name="description" content="A site for learning the basics of HTML">`}}]},

  {name:{ja:"動画と音声",en:"Video & audio"}, sub:"video / audio", desc:{ja:`<b>&lt;video&gt;</b>で動画、<b>&lt;audio&gt;</b>で音声を埋め込めます。<b>controls</b>属性を付けると再生バーが出ます。中に<b>&lt;source&gt;</b>で複数の形式を用意すると、対応する形式で再生されます。<br>ヒント：autoplayは多くのブラウザで<b>muted（消音）でないと動きません</b>（勝手に音が出るのを防ぐため）。`,en:`Embed video with <b>&lt;video&gt;</b> and sound with <b>&lt;audio&gt;</b>. Add the <b>controls</b> attribute to show a playback bar. Provide multiple formats with <b>&lt;source&gt;</b> inside, and the supported one plays.<br>Tip: in most browsers autoplay <b>only works when muted</b> (to stop sound playing on its own).`},
   tags:["video","audio","controls"], prep:[
     {s:'<video controls>',d:{ja:'再生・停止バー付きの動画。',en:'A video with play/pause controls.'}},
     {s:'<source src="…">',d:{ja:'再生する動画/音声ファイルを指定。',en:'Specifies the video/audio file to play.'}}],
   variations:[
     {label:{ja:"動画を埋め込む",en:"Embed a video"}, code:{ja:`<!-- controls で再生バーを表示（実際のファイルのURLが必要） -->
<video controls width="280" poster="https://placehold.co/280x160/7b2ff7/fff?text=Video">
  <source src="movie.mp4" type="video/mp4">
  お使いのブラウザは動画に対応していません。
</video>`,en:`<!-- controls shows a playback bar (a real file URL is needed) -->
<video controls width="280" poster="https://placehold.co/280x160/7b2ff7/fff?text=Video">
  <source src="movie.mp4" type="video/mp4">
  Your browser does not support video.
</video>`}}]},

  {name:{ja:"リンクとパス",en:"Links & paths"}, sub:{ja:"相対パス / 絶対パス",en:"relative / absolute paths"}, desc:{ja:`hrefやsrcの<b>場所の書き方</b>。<b>絶対パス</b>は「https://…」で始まる完全な住所。<b>相対パス</b>は「今のファイルから見た道順」。<br><b>./</b>＝同じ場所、<b>../</b>＝1つ上の階層、<b>/</b>始まり＝サイトの一番上から。例：../img/logo.png は「1つ上の中の img フォルダの logo.png」。`,en:`How to <b>write locations</b> for href and src. An <b>absolute path</b> is a full address starting with "https://…". A <b>relative path</b> is "directions from the current file".<br><b>./</b> = same place, <b>../</b> = one level up, starting with <b>/</b> = from the site root. Example: ../img/logo.png means "logo.png in the img folder one level up".`},
   tags:[{ja:"相対パス",en:"relative path"},{ja:"絶対パス",en:"absolute path"},"../"], prep:[
     {s:'./file.html',d:{ja:'<b>同じフォルダ</b>のファイル（./は省略可）。',en:'A file in the <b>same folder</b> (./ can be omitted).'}},
     {s:'../img/a.png',d:{ja:'<b>1つ上</b>のフォルダの中の img/a.png。',en:'img/a.png in the folder <b>one level up</b>.'}},
     {s:'https://…',d:{ja:'<b>絶対パス</b>。どこからでも同じ完全な住所。',en:'An <b>absolute path</b>. The same full address from anywhere.'}}],
   variations:[
     {label:{ja:"パスの書き方",en:"Writing paths"}, code:{ja:`<!-- 同じ階層 -->
<a href="about.html">会社概要</a>
<!-- 1つ上の階層の img フォルダ -->
<img src="../img/logo.png" alt="ロゴ">
<!-- 外部サイト（絶対パス） -->
<a href="https://example.com">外部サイト</a>`,en:`<!-- Same level -->
<a href="about.html">About us</a>
<!-- img folder one level up -->
<img src="../img/logo.png" alt="Logo">
<!-- External site (absolute path) -->
<a href="https://example.com">External site</a>`}}]},

  {name:{ja:"埋め込み",en:"Embedding"}, sub:"iframe", desc:{ja:`<b>&lt;iframe&gt;</b>は<b>別のページを窓のように埋め込む</b>タグ。地図・動画・他サイトの表示に使われます（この道場のプレビューもiframeです）。<br>注意：<b>title属性</b>で中身の説明を付けるのがアクセシビリティの推奨。外部サイトによっては埋め込みを禁止している場合もあります。`,en:`<b>&lt;iframe&gt;</b> <b>embeds another page like a window</b>. Used for maps, videos, and showing other sites (this dojo's preview is an iframe too).<br>Note: adding a <b>title attribute</b> to describe the content is recommended for accessibility. Some external sites forbid being embedded.`},
   tags:["iframe",{ja:"埋め込み",en:"embed"}], prep:[
     {s:'<iframe src="URL">',d:{ja:'そのURLのページを窓として埋め込む。',en:'Embeds the page at that URL as a window.'}},
     {s:'title="…"',d:{ja:'埋め込みの<b>説明</b>。付けるのが推奨。',en:'A <b>description</b> of the embed. Recommended.'}}],
   variations:[
     {label:{ja:"ページを埋め込む",en:"Embed a page"}, code:{ja:`<iframe
  src="https://example.com"
  width="300" height="180"
  title="サンプルサイトの埋め込み"
  style="border:1px solid #ccc; border-radius:8px;">
</iframe>`,en:`<iframe
  src="https://example.com"
  width="300" height="180"
  title="Embedded sample site"
  style="border:1px solid #ccc; border-radius:8px;">
</iframe>`}}]},

  {name:{ja:"アクセシビリティ",en:"Accessibility"}, sub:"alt / aria / role", desc:{ja:`<b>誰もが使えるページ</b>にするための配慮。<b>alt</b>（画像の説明）、<b>aria-label</b>（アイコンだけのボタンに名前を付ける）、<b>見出しの順序</b>（h1→h2…を飛ばさない）が基本の3点。<br>読み上げソフトはこれらを頼りに画面を伝えます。例えば「×」だけのボタンには aria-label="閉じる" を付けます。`,en:`Care that makes a page <b>usable by everyone</b>. The three basics: <b>alt</b> (image description), <b>aria-label</b> (naming icon-only buttons), and <b>heading order</b> (h1→h2… without skipping).<br>Screen readers rely on these to convey the screen. For example, a button showing only "×" gets aria-label="Close".`},
   tags:["alt","aria-label","role"], prep:[
     {s:'alt="…"',d:{ja:'画像の<b>意味</b>を文字で。装飾画像は alt="" で空に。',en:'The image\'s <b>meaning</b> in text. Use alt="" for decorative images.'}},
     {s:{ja:'aria-label="閉じる"',en:'aria-label="Close"'},d:{ja:'文字が無い部品に<b>名前</b>を与える。',en:'Gives a <b>name</b> to a part that has no text.'}}],
   css:`button { font-size: 20px; padding: 6px 12px; border: none; border-radius: 8px; background: #7b2ff7; color: #fff; cursor: pointer; }`,
   variations:[
     {label:{ja:"アイコンに名前を付ける",en:"Name an icon"}, code:{ja:`<!-- 見た目は × だけ。読み上げには「閉じる」と伝わる -->
<button aria-label="閉じる">×</button>
<img src="https://placehold.co/40/7b2ff7/fff" alt="山田さんのプロフィール写真">`,en:`<!-- Looks like just ×. Read aloud as "Close" -->
<button aria-label="Close">×</button>
<img src="https://placehold.co/40/7b2ff7/fff" alt="Yamada's profile photo">`}}]},

  {name:{ja:"レスポンシブ画像",en:"Responsive images"}, sub:"picture / source", desc:{ja:`画面や環境に応じて<b>最適な画像を出し分ける</b>仕組み。<b>&lt;picture&gt;</b>の中に複数の<b>&lt;source&gt;</b>を置き、条件に合うものが選ばれます。<br>用途：スマホには小さい画像、PCには大きい画像を配信して<b>通信量を節約</b>。最後に必ず &lt;img&gt; を保険として置きます。プレビュー幅を変えると切り替わります。`,en:`A mechanism to <b>serve the best image</b> for the screen or environment. Place multiple <b>&lt;source&gt;</b> inside <b>&lt;picture&gt;</b>, and the matching one is chosen.<br>Use: send a small image to phones and a large one to PCs to <b>save bandwidth</b>. Always put an &lt;img&gt; at the end as a fallback. It switches when you change the preview width.`},
   tags:["picture","source","media"], prep:[
     {s:'<source media="(min-width:600px)">',d:{ja:'条件に合えばこの画像を使う。',en:'Uses this image if the condition matches.'}},
     {s:{ja:'最後の <img>',en:'the final <img>'},d:{ja:'どのsourceにも当たらない時の<b>保険</b>。省略不可。',en:'A <b>fallback</b> when no source matches. Required.'}}],
   variations:[{label:{ja:"幅で画像を切替",en:"Switch by width"}, code:{ja:`<picture>
  <source media="(min-width: 600px)"
          srcset="https://placehold.co/400x150/7b2ff7/fff?text=Wide">
  <img src="https://placehold.co/200x150/e5484d/fff?text=Narrow"
       alt="レスポンシブ画像">
</picture>
<!-- プレビュー幅を600px以上/未満で変えると画像が変わります -->`,en:`<picture>
  <source media="(min-width: 600px)"
          srcset="https://placehold.co/400x150/7b2ff7/fff?text=Wide">
  <img src="https://placehold.co/200x150/e5484d/fff?text=Narrow"
       alt="Responsive image">
</picture>
<!-- Change the preview width above/below 600px to swap the image -->`}}]},

  {name:{ja:"SNSシェア設定",en:"Social share settings"}, sub:"OGP", desc:{ja:`SNSでURLを貼った時に出る<b>カード（画像＋タイトル）</b>を決めるのが<b>OGP</b>。&lt;head&gt;内に <b>&lt;meta property="og:…"&gt;</b> で指定します。<br>主要4つ：<b>og:title</b>（題名）、<b>og:description</b>（説明）、<b>og:image</b>（画像）、<b>og:url</b>（URL）。設定しないとSNSで味気ない表示になります。`,en:`<b>OGP</b> decides the <b>card (image + title)</b> shown when a URL is posted on social media. Set it in &lt;head&gt; with <b>&lt;meta property="og:…"&gt;</b>.<br>The main four: <b>og:title</b>, <b>og:description</b>, <b>og:image</b>, <b>og:url</b>. Without them, links look plain on social media.`},
   tags:["OGP","og:image","meta"], prep:[
     {s:'<meta property="og:title">',d:{ja:'SNSカードに出る<b>題名</b>。',en:'The <b>title</b> shown on the social card.'}},
     {s:'og:image',d:{ja:'カードの<b>画像</b>。第一印象を左右する。',en:'The card <b>image</b>. It shapes the first impression.'}}],
   variations:[{label:{ja:"シェア用メタ情報",en:"Share meta tags"}, code:{ja:`<!-- <head> 内に書く（SNSでの見え方を決める・画面には出ない） -->
<meta property="og:title" content="私のサイト">
<meta property="og:description" content="HTMLを学べるサイト">
<meta property="og:image" content="https://example.com/card.png">
<meta property="og:url" content="https://example.com">`,en:`<!-- Write in <head> (decides social appearance, not shown on screen) -->
<meta property="og:title" content="My Site">
<meta property="og:description" content="A site to learn HTML">
<meta property="og:image" content="https://example.com/card.png">
<meta property="og:url" content="https://example.com">`}}]}
]},

{name:"応用", items:[
  {name:{ja:"カードの構造",en:"Card structure"}, sub:{ja:"article でまとめる",en:"group with article"}, desc:{ja:`商品やブログの<b>カード1枚</b>を、意味の通るHTMLで組みます。単体で完結するので<b>&lt;article&gt;</b>が最適。中は 画像→見出し(h3)→説明(p)→リンク の順が定番。<br>ポイント：見た目（角丸・影）はCSSの担当。ここでは<b>構造だけ</b>を正しく作ります。`,en:`Build <b>a single card</b> for a product or blog in meaningful HTML. Since it stands on its own, <b>&lt;article&gt;</b> is ideal. The classic order inside is image → heading (h3) → description (p) → link.<br>Point: appearance (rounded corners, shadow) is CSS's job. Here we build <b>only the structure</b> correctly.`},
   tags:["article",{ja:"構造",en:"structure"},{ja:"カード",en:"card"}], prep:[
     {s:'<article>',d:{ja:'カード＝単体で成立する内容の入れ物。',en:'A card = a container for self-contained content.'}},
     {s:{ja:'見出し→本文→操作',en:'heading→body→action'},d:{ja:'情報の順序を意味に沿って並べる。',en:'Order the information by meaning.'}}],
   css:`article { max-width: 240px; border: 1px solid #e5e0f0; border-radius: 12px; overflow: hidden; }
article img { width: 100%; display: block; }
.body { padding: 12px; }
.body h3 { margin: 0 0 6px; }
.body p { margin: 0 0 10px; color: #555; font-size: 14px; }`,
   variations:[
     {label:{ja:"商品カード",en:"Product card"}, code:{ja:`<article>
  <img src="https://placehold.co/240x130/7b2ff7/fff?text=Item" alt="商品の写真">
  <div class="body">
    <h3>商品名</h3>
    <p>この商品の短い説明が入ります。</p>
    <a href="#">詳しく見る</a>
  </div>
</article>`,en:`<article>
  <img src="https://placehold.co/240x130/7b2ff7/fff?text=Item" alt="Product photo">
  <div class="body">
    <h3>Product name</h3>
    <p>A short description of this product goes here.</p>
    <a href="#">Learn more</a>
  </div>
</article>`}}]},

  {name:{ja:"ナビの構造",en:"Nav structure"}, sub:"nav > ul > li > a", desc:{ja:`メニューの正しい形は<b>&lt;nav&gt;</b>の中に<b>&lt;ul&gt;</b>、各項目を<b>&lt;li&gt;</b>、その中に<b>&lt;a&gt;</b>。<br>「なぜリスト？」→ メニューは<b>リンクの一覧</b>なので、ulで囲むのが意味的に正しく、読み上げも「メニュー4項目」と伝わります。横並びの見た目はCSS（list-style:none + flex）で作ります。`,en:`The correct shape of a menu: <b>&lt;ul&gt;</b> inside <b>&lt;nav&gt;</b>, each item an <b>&lt;li&gt;</b>, with an <b>&lt;a&gt;</b> inside.<br>"Why a list?" → a menu is <b>a list of links</b>, so wrapping it in ul is semantically correct and reads as "menu, 4 items". The horizontal look is made with CSS (list-style:none + flex).`},
   tags:["nav","ul","li","a"], prep:[
     {s:'<nav><ul><li><a>',d:{ja:'メニューの定番構造。',en:'The classic menu structure.'}},
     {s:'list-style: none',d:{ja:'黒丸を消して横並びにするのはCSSの仕事。',en:"Removing the bullets and going horizontal is CSS's job."}}],
   css:`nav ul { list-style: none; display: flex; gap: 20px; padding: 0; margin: 0; }
nav a { text-decoration: none; color: #7b2ff7; font-weight: bold; }`,
   variations:[
     {label:{ja:"メニューを組む",en:"Build a menu"}, code:{ja:`<nav>
  <ul>
    <li><a href="#">ホーム</a></li>
    <li><a href="#">サービス</a></li>
    <li><a href="#">料金</a></li>
    <li><a href="#">お問い合わせ</a></li>
  </ul>
</nav>`,en:`<nav>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Pricing</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>`}}]},

  {name:{ja:"記事ページの構造",en:"Article page structure"}, sub:{ja:"全体を組む",en:"assemble the whole"}, desc:{ja:`これまで学んだタグを組み合わせて、<b>1ページ分の骨格</b>を作ります。header（題）→ main（article本文 ＋ aside補足）→ footer（締め）。<br>この「意味のある入れ子」ができると、CSSでレイアウトを組むのも、SEOも、保守もすべて楽になります。HTMLの総仕上げです。`,en:`Combine the tags you've learned into <b>a full page skeleton</b>: header (title) → main (article body + aside notes) → footer (closing).<br>Once you can do this "meaningful nesting", building layouts with CSS, SEO, and maintenance all get easier. It's the capstone of HTML.`},
   tags:["header","main","article","footer"], prep:[
     {s:'header / main / footer',d:{ja:'ページの大きな3ブロック。',en:'The three big blocks of a page.'}},
     {s:'article + aside',d:{ja:'本文と、その脇の補足。',en:'The main body and a note beside it.'}}],
   css:`main { display: flex; gap: 16px; }
article { flex: 2; } aside { flex: 1; background: #f0e9ff; padding: 10px; border-radius: 8px; }
header, footer { padding: 8px 0; }`,
   variations:[
     {label:{ja:"ページ全体",en:"The whole page"}, code:{ja:`<header>
  <h1>ブログ記事のタイトル</h1>
</header>
<main>
  <article>
    <h2>本文の見出し</h2>
    <p>記事の中身がここに入ります。</p>
  </article>
  <aside>
    <h3>関連リンク</h3>
    <p>脇に添える補足情報。</p>
  </aside>
</main>
<footer>© 2026 My Blog</footer>`,en:`<header>
  <h1>Blog article title</h1>
</header>
<main>
  <article>
    <h2>Body heading</h2>
    <p>The article content goes here.</p>
  </article>
  <aside>
    <h3>Related links</h3>
    <p>Supplementary info on the side.</p>
  </aside>
</main>
<footer>© 2026 My Blog</footer>`}}]},

  {name:{ja:"問い合わせフォーム",en:"Contact form"}, sub:{ja:"form 一式",en:"a full form"}, desc:{ja:`名前・メール・本文・送信ボタンをそろえた<b>実用フォーム</b>を組みます。<b>&lt;fieldset&gt;</b>で関連項目をグループ化し、<b>&lt;legend&gt;</b>でその見出しを付けるのがプロの作法。<br>各inputに &lt;label for&gt; を必ず対応させ、必須には required を付けます。`,en:`Build a <b>practical form</b> with name, email, message, and a submit button. Grouping related fields with <b>&lt;fieldset&gt;</b> and titling them with <b>&lt;legend&gt;</b> is the professional way.<br>Always pair each input with a &lt;label for&gt;, and add required to mandatory fields.`},
   tags:["form","fieldset","legend"], prep:[
     {s:'<fieldset>',d:{ja:'関連する入力を<b>グループ</b>で囲む枠。',en:'A frame that <b>groups</b> related inputs.'}},
     {s:'<legend>',d:{ja:'そのグループの<b>見出し</b>。',en:"That group's <b>heading</b>."}}],
   css:`fieldset { border: 1px solid #ccc; border-radius: 10px; max-width: 300px; display: grid; gap: 8px; }
label { font-weight: bold; font-size: 14px; }
input, textarea { padding: 8px; border: 1px solid #bbb; border-radius: 6px; }
button { padding: 10px; border: none; border-radius: 8px; background: #7b2ff7; color: #fff; cursor: pointer; }`,
   variations:[
     {label:{ja:"お問い合わせ",en:"Contact"}, code:{ja:`<form>
  <fieldset>
    <legend>お問い合わせ</legend>
    <label for="n">お名前</label>
    <input id="n" type="text" required>
    <label for="e">メール</label>
    <input id="e" type="email" required>
    <label for="m">内容</label>
    <textarea id="m" rows="3"></textarea>
    <button type="submit">送信する</button>
  </fieldset>
</form>`,en:`<form>
  <fieldset>
    <legend>Contact</legend>
    <label for="n">Name</label>
    <input id="n" type="text" required>
    <label for="e">Email</label>
    <input id="e" type="email" required>
    <label for="m">Message</label>
    <textarea id="m" rows="3"></textarea>
    <button type="submit">Send</button>
  </fieldset>
</form>`}}]},

  {name:{ja:"データ表",en:"Data table"}, sub:{ja:"caption 付きの表",en:"table with a caption"}, desc:{ja:`表の総仕上げ。<b>&lt;caption&gt;</b>で表の<b>タイトル</b>を付け、thead/tbodyで構造化、scopeで見出しの向きを示します。<br>captionは「この表が何のデータか」を伝える大事な要素。読み上げでも最初に読まれます。見た目の罫線はCSSで整えます。`,en:`The capstone of tables. Give the table a <b>title</b> with <b>&lt;caption&gt;</b>, structure it with thead/tbody, and indicate header direction with scope.<br>caption conveys "what data this table shows" and is read first by screen readers. Style the borders with CSS.`},
   tags:["caption","thead","scope"], prep:[
     {s:'<caption>',d:{ja:'表全体の<b>タイトル</b>。tableの直後に置く。',en:'The <b>title</b> of the whole table. Place it right after table.'}},
     {s:'scope="col" / "row"',d:{ja:'見出しが列用か行用かを示す。',en:'Shows whether a header is for a column or a row.'}}],
   css:`table { border-collapse: collapse; width: 100%; max-width: 340px; }
caption { font-weight: bold; margin-bottom: 6px; text-align: left; }
th, td { border: 1px solid #ccc; padding: 8px 12px; }
thead { background: #f0e9ff; }`,
   variations:[
     {label:{ja:"料金表",en:"Pricing table"}, code:{ja:`<table>
  <caption>プラン別 月額料金</caption>
  <thead>
    <tr><th scope="col">プラン</th><th scope="col">月額</th></tr>
  </thead>
  <tbody>
    <tr><th scope="row">無料</th><td>¥0</td></tr>
    <tr><th scope="row">標準</th><td>¥980</td></tr>
    <tr><th scope="row">プロ</th><td>¥1,980</td></tr>
  </tbody>
</table>`,en:`<table>
  <caption>Monthly price by plan</caption>
  <thead>
    <tr><th scope="col">Plan</th><th scope="col">Monthly</th></tr>
  </thead>
  <tbody>
    <tr><th scope="row">Free</th><td>$0</td></tr>
    <tr><th scope="row">Standard</th><td>$9.80</td></tr>
    <tr><th scope="row">Pro</th><td>$19.80</td></tr>
  </tbody>
</table>`}}]},

  {name:{ja:"ヒーローの構造",en:"Hero structure"}, sub:{ja:"section で見せ場",en:"showcase with section"}, desc:{ja:`ページ最上部の<b>大きな見せ場</b>（ヒーロー）を、意味の通る構造で組みます。<b>&lt;section&gt;</b>の中に見出し(h1)・キャッチコピー(p)・行動ボタン(a/button)。<br>見た目（背景・中央寄せ）はCSSの担当。ここでは"何を置くか"の骨組みを正しく作ります。`,en:`Build the <b>big showcase</b> at the top of a page (the hero) with meaningful structure: heading (h1), tagline (p), and an action button (a/button) inside a <b>&lt;section&gt;</b>.<br>Appearance (background, centering) is CSS's job. Here we build the "what goes where" skeleton correctly.`},
   tags:["section","hero",{ja:"構造",en:"structure"}], prep:[
     {s:'<section>',d:{ja:'見せ場のまとまり。中に見出しを持つ。',en:'A showcase grouping. Contains a heading.'}},
     {s:{ja:'h1 → p → ボタン',en:'h1 → p → button'},d:{ja:'題名→説明→行動、の順で並べる。',en:'Order: title → description → action.'}}],
   css:`section { background: linear-gradient(135deg, #7b2ff7, #4fe6e6); color: #fff; padding: 50px 24px; text-align: center; border-radius: 14px; }
section h1 { margin: 0 0 8px; }
.cta { display: inline-block; margin-top: 12px; background: #fff; color: #7b2ff7; padding: 10px 28px; border-radius: 999px; text-decoration: none; font-weight: bold; }`,
   variations:[{label:{ja:"トップの見せ場",en:"Top showcase"}, code:{ja:`<section>
  <h1>ようこそ</h1>
  <p>あなたの学びを、ここから。</p>
  <a href="#" class="cta">はじめる</a>
</section>`,en:`<section>
  <h1>Welcome</h1>
  <p>Your learning starts here.</p>
  <a href="#" class="cta">Get started</a>
</section>`}}]},

  {name:{ja:"パンくずの構造",en:"Breadcrumb structure"}, sub:"nav + ol", desc:{ja:`「今どこにいるか」を示す<b>パンくずリスト</b>の正しい構造。<b>&lt;nav&gt;</b>で囲み、<b>aria-label="パンくず"</b>で役割を明示、中身は<b>順序のある&lt;ol&gt;</b>（階層に順番があるため）。<br>区切りの「›」は文字ではなくCSS（::before）で足すのが定番。現在地はリンクにしません。`,en:`The correct structure of a <b>breadcrumb</b> that shows "where you are". Wrap it in <b>&lt;nav&gt;</b>, state its role with <b>aria-label="Breadcrumb"</b>, and use an <b>ordered &lt;ol&gt;</b> (because the hierarchy has an order).<br>Add the "›" separator with CSS (::before), not as text. Don't make the current page a link.`},
   tags:["nav","ol","aria-label"], prep:[
     {s:{ja:'<nav aria-label="パンくず">',en:'<nav aria-label="Breadcrumb">'},d:{ja:'ナビの役割を読み上げに伝える。',en:"Tells screen readers the nav's role."}},
     {s:'<ol>',d:{ja:'階層は順序があるので<b>ol</b>で。',en:'Use <b>ol</b> since the hierarchy is ordered.'}}],
   css:`.breadcrumb ol { list-style: none; display: flex; gap: 8px; padding: 0; margin: 0; }
.breadcrumb li + li::before { content: "›"; margin-right: 8px; color: #aaa; }
.breadcrumb a { color: #7b2ff7; text-decoration: none; }`,
   variations:[{label:{ja:"現在地ナビ",en:"Location nav"}, code:{ja:`<nav class="breadcrumb" aria-label="パンくず">
  <ol>
    <li><a href="#">ホーム</a></li>
    <li><a href="#">商品一覧</a></li>
    <li>商品の詳細</li>
  </ol>
</nav>`,en:`<nav class="breadcrumb" aria-label="Breadcrumb">
  <ol>
    <li><a href="#">Home</a></li>
    <li><a href="#">Products</a></li>
    <li>Product detail</li>
  </ol>
</nav>`}}]}
]}
];

/* ============================ CSS ============================ */
const CSSCATEGORIES = [
{name:"基礎", items:[
  {name:{ja:"CSSとは？",en:"What is CSS?"}, sub:{ja:"最初に読む",en:"Read me first"}, desc:{ja:`<b>CSS</b>は<b>見た目</b>を決める言語。「<b>どれを</b>（セレクタ） <b>どうする</b>（プロパティ:値）」の形で書きます。<br>例: <b>p { color: purple; }</b> ＝「pタグの文字を紫に」。CSS窓を書き換えると、プレビューに反映されます。`,en:`<b>CSS</b> is the language that decides <b>appearance</b>. You write it as "<b>which one</b> (selector) → <b>do what</b> (property: value)".<br>Example: <b>p { color: purple; }</b> = "make p text purple". Edit the CSS pane and it shows in the preview.`},
   tags:[{ja:"セレクタ",en:"selector"},{ja:"プロパティ",en:"property"}], prep:[
     {s:{ja:'セレクタ { … }',en:'selector { … }'},d:{ja:'変えたい相手。<b>p</b>（タグ）・<b>.class</b>・<b>#id</b> で指定。',en:'The target to change. Use <b>p</b> (tag), <b>.class</b>, or <b>#id</b>.'}},
     {s:{ja:'プロパティ: 値;',en:'property: value;'},d:{ja:'何をどうするか。行末の <b>;</b> で1つずつ区切る。',en:'What to change and how. Separate each with a <b>;</b> at the line end.'}}],
   html:{ja:`<p>スタイルが当たる文章です</p>`,en:`<p>Text that the style applies to</p>`},
   variations:[{label:{ja:"見てみる",en:"Take a look"}, code:`p {
  color: #7b2ff7;
  font-size: 22px;
}`}]},

  {name:{ja:"文字の色",en:"Text color"}, sub:"color", desc:{ja:`<b>color</b>で文字の色を変えます。色は<b>名前</b>（red, blue）や<b>#16進数</b>（#ff0000）で指定できます。<br>16進数は # の後に6桁で「赤・緑・青」の混ぜ具合を表します。例えば #ff0000 は赤だけ最大＝真っ赤。`,en:`<b>color</b> changes text color. Colors can be <b>names</b> (red, blue) or a <b>#hex code</b> (#ff0000).<br>A hex code is 6 digits after # for the mix of "red, green, blue". For example #ff0000 is max red only = pure red.`},
   tags:["color",{ja:"#16進数",en:"#hex"}], prep:[
     {s:'color: red;',d:{ja:'色の<b>名前</b>で指定（かんたん）。',en:'Specify by color <b>name</b> (easy).'}},
     {s:'color: #3366ff;',d:{ja:'<b>#</b>で細かい色（赤・緑・青の混ぜ具合）。',en:'<b>#</b> for a precise color (mix of red, green, blue).'}}],
   html:{ja:`<p class="a">赤にする段落</p>
<p class="b">青にする段落</p>`,en:`<p class="a">A paragraph turned red</p>
<p class="b">A paragraph turned blue</p>`},
   variations:[
     {label:{ja:"名前で指定",en:"By name"}, code:`.a { color: red; }
.b { color: blue; }`},
     {label:{ja:"#で指定",en:"By #hex"}, code:`.a { color: #e5484d; }
.b { color: #3366ff; }`}]},

  {name:{ja:"背景の色",en:"Background color"}, sub:"background", desc:{ja:`<b>background</b>で背景を塗ります。色のほか、グラデーション（や、応用では画像）も指定できます。<br>コツ：背景と文字の色は<b>明暗差（コントラスト）</b>を付けると読みやすい。濃い背景には白文字、が基本です。`,en:`<b>background</b> fills the background. Besides a color, you can set a gradient (and, later, an image).<br>Tip: give the background and text a strong <b>contrast</b> for readability. White text on a dark background is the basic rule.`},
   tags:["background"], prep:[
     {s:'background: #eee;',d:{ja:'背景を薄いグレーに。',en:'Make the background light gray.'}},
     {s:'background: linear-gradient(…);',d:{ja:'<b>グラデ</b>ーションも背景にできる。',en:'A <b>gradient</b> can be a background too.'}}],
   html:{ja:`<div class="box">背景つきの箱</div>`,en:`<div class="box">A box with a background</div>`},
   variations:[
     {label:{ja:"色を塗る",en:"Fill with color"}, code:`.box {
  background: #7b2ff7;
  color: #fff;
  padding: 24px;
}`},
     {label:{ja:"グラデにする",en:"Make a gradient"}, code:`.box {
  background: linear-gradient(45deg, #7b2ff7, #4fe6e6);
  color: #fff;
  padding: 24px;
}`}]},

  {name:{ja:"文字の大きさ",en:"Font size"}, sub:"font-size", desc:{ja:`<b>font-size</b>で文字の大きさを変えます。単位は主に<b>px</b>（ピクセル）。<b>font-weight: bold</b>で太字にもできます。<br>目安：本文16px前後、見出しは24px以上、注釈は12〜14px。本文は16pxを下回らないのが無難です。`,en:`<b>font-size</b> changes text size. The main unit is <b>px</b> (pixels). <b>font-weight: bold</b> makes it bold.<br>Guide: body around 16px, headings 24px+, notes 12–14px. It's safest not to go below 16px for body text.`},
   tags:["font-size","font-weight"], prep:[
     {s:'font-size: 24px;',d:{ja:'文字を<b>24px</b>の大きさに。',en:'Set text to <b>24px</b>.'}},
     {s:'font-weight: bold;',d:{ja:'文字を<b>太く</b>する。',en:'Make text <b>bold</b>.'}}],
   html:{ja:`<p class="big">大きい文字</p>
<p class="small">小さい文字</p>`,en:`<p class="big">Large text</p>
<p class="small">Small text</p>`},
   variations:[{label:{ja:"大小をつける",en:"Big and small"}, code:`.big {
  font-size: 30px;
  font-weight: bold;
}
.small {
  font-size: 12px;
}`}]},

  {name:{ja:"余白",en:"Spacing"}, sub:"margin / padding", desc:{ja:`余白は2種類。<b>padding</b>=枠の<b>内側</b>の余白（中身と枠の間）、<b>margin</b>=枠の<b>外側</b>の余白（隣との間）。<br>初心者が必ず迷うポイント。「padding＝中の詰め物、margin＝外の間隔」と覚え、色をつけて見比べましょう。`,en:`Two kinds of space. <b>padding</b> = space <b>inside</b> the box (between content and edge); <b>margin</b> = space <b>outside</b> the box (between neighbors).<br>A spot beginners always mix up. Remember "padding = inner stuffing, margin = outer gap" and compare them with colors.`},
   tags:["margin","padding"], prep:[
     {s:'padding: 20px;',d:{ja:'<b>内側</b>の余白。背景色が広がる。',en:'<b>Inner</b> space. The background expands.'}},
     {s:'margin: 20px;',d:{ja:'<b>外側</b>の余白。まわりが空く。',en:'<b>Outer</b> space. Gaps open around it.'}}],
   html:{ja:`<div class="box">padding と margin</div>
<div class="box2">となりの箱</div>`,en:`<div class="box">padding and margin</div>
<div class="box2">Neighbor box</div>`},
   variations:[{label:{ja:"内と外の余白",en:"Inner & outer space"}, code:{ja:`.box {
  background: #7b2ff7;
  color: #fff;
  padding: 20px;    /* 内側：背景が広がる */
  margin: 24px;     /* 外側：まわりが空く */
}
.box2 {
  background: #eee;
  padding: 10px;
}`,en:`.box {
  background: #7b2ff7;
  color: #fff;
  padding: 20px;    /* inner: background expands */
  margin: 24px;     /* outer: space around it */
}
.box2 {
  background: #eee;
  padding: 10px;
}`}}]},

  {name:{ja:"中央ぞろえ",en:"Centering text"}, sub:"text-align", desc:{ja:`<b>text-align: center</b>で中身の文字や画像を<b>中央</b>に。left（左）、right（右）も。<br>※「箱そのもの」を中央に置くのは別の技（margin:auto や flex）で、これは<b>中身の位置</b>を変える指定です。混同しやすいので注意。`,en:`<b>text-align: center</b> puts the content's text or images in the <b>center</b>. left and right also work.<br>※Centering "the box itself" is a different technique (margin:auto or flex) — this changes the <b>content's position</b>. Easy to confuse.`},
   tags:["text-align"], prep:[
     {s:'text-align: center;',d:{ja:'中身を<b>中央</b>ぞろえに。',en:'<b>Center</b>-align the content.'}},
     {s:'text-align: right;',d:{ja:'<b>右</b>ぞろえに（数字など）。',en:'<b>Right</b>-align (numbers, etc.).'}}],
   html:{ja:`<p class="c">中央にそろえる</p>
<p class="r">右にそろえる</p>`,en:`<p class="c">Centered</p>
<p class="r">Right-aligned</p>`},
   variations:[{label:{ja:"位置を変える",en:"Change position"}, code:`.c { text-align: center; }
.r { text-align: right; }`}]},

  {name:{ja:"枠線と角丸",en:"Borders & rounded corners"}, sub:"border / border-radius", desc:{ja:`<b>border</b>で要素の周りに<b>枠線</b>を引きます。「太さ 種類 色」の順（例: 2px solid red）。<b>border-radius</b>で<b>角を丸く</b>できます。<br>種類は solid（実線）・dashed（破線）・dotted（点線）。radiusを999pxにすると完全な丸/カプセルになります。`,en:`<b>border</b> draws a <b>border</b> around an element, in the order "width style color" (e.g. 2px solid red). <b>border-radius</b> <b>rounds the corners</b>.<br>Styles: solid, dashed, dotted. A radius of 999px makes a full circle/capsule.`},
   tags:["border","border-radius"], prep:[
     {s:'border: 2px solid #333;',d:{ja:'<b>2pxの実線</b>の枠。solid=実線、dashed=破線。',en:'A <b>2px solid</b> border. solid = line, dashed = dashes.'}},
     {s:'border-radius: 10px;',d:{ja:'角を<b>10px</b>丸くする。大きくするほど丸に近づく。',en:'Round corners by <b>10px</b>. Bigger = rounder.'}}],
   html:{ja:`<div class="box">枠線つきの箱</div>`,en:`<div class="box">A box with a border</div>`},
   variations:[
     {label:{ja:"枠をつける",en:"Add a border"}, code:`.box {
  border: 3px solid #7b2ff7;
  padding: 20px;
}`},
     {label:{ja:"角を丸く",en:"Round the corners"}, code:`.box {
  border: 3px solid #7b2ff7;
  border-radius: 16px;
  padding: 20px;
}`}]},

  {name:{ja:"色の透明度",en:"Color transparency"}, sub:"opacity / rgba", desc:{ja:`<b>opacity</b>は要素<b>まるごと</b>の透明度（0〜1、中の文字も薄くなる）。文字は濃いまま<b>背景だけ</b>透かすなら、色を<b>rgba(赤,緑,青,不透明度)</b>で指定します。<br>例：rgba(0,0,0,0.5) は半透明の黒。写真の上に敷いて文字を読みやすくする"オーバーレイ"に使います。`,en:`<b>opacity</b> is the transparency of the <b>whole element</b> (0–1; the text fades too). To keep text solid and fade <b>only the background</b>, set the color as <b>rgba(red, green, blue, alpha)</b>.<br>Example: rgba(0,0,0,0.5) is semi-transparent black. Used as an "overlay" over photos to keep text readable.`},
   tags:["opacity","rgba"], prep:[
     {s:'opacity: 0.5;',d:{ja:'要素<b>全体</b>を半透明に（文字も薄くなる）。',en:'Makes the <b>whole</b> element semi-transparent (text fades too).'}},
     {s:'rgba(0,0,0,0.5)',d:{ja:'<b>背景だけ</b>半透明に（文字は濃いまま）。',en:'Makes <b>only the background</b> semi-transparent (text stays solid).'}}],
   html:{ja:`<div class="a">opacity 0.5</div>
<div class="b">rgba 背景</div>`,en:`<div class="a">opacity 0.5</div>
<div class="b">rgba background</div>`},
   variations:[{label:{ja:"2つの透け方",en:"Two ways to fade"}, code:{ja:`body { background: #7b2ff7; }
.a, .b { color: #fff; padding: 20px; margin-bottom: 10px; border-radius: 8px; }
.a { background: #000; opacity: 0.5; }   /* 文字も薄くなる */
.b { background: rgba(0,0,0,0.5); }      /* 文字は濃いまま */`,en:`body { background: #7b2ff7; }
.a, .b { color: #fff; padding: 20px; margin-bottom: 10px; border-radius: 8px; }
.a { background: #000; opacity: 0.5; }   /* text fades too */
.b { background: rgba(0,0,0,0.5); }      /* text stays solid */`}}]},

  {name:{ja:"まとめて指定",en:"Shorthand values"}, sub:{ja:"余白の省略記法",en:"spacing shorthand"}, desc:{ja:`padding や margin は<b>1行で4方向</b>指定できます。<b>値4つ</b>は「上・右・下・左」（時計回り）、<b>2つ</b>は「上下・左右」、<b>1つ</b>は全方向。<br>例：padding: 10px 20px は「上下10px・左右20px」。border-radius も同じ発想で角ごとに指定できます。`,en:`padding and margin can set <b>4 sides in one line</b>. <b>Four values</b> = top, right, bottom, left (clockwise); <b>two</b> = top/bottom, left/right; <b>one</b> = all sides.<br>Example: padding: 10px 20px = "10px top/bottom, 20px left/right". border-radius works the same way per corner.`},
   tags:["padding","margin",{ja:"省略記法",en:"shorthand"}], prep:[
     {s:'padding: 10px 20px;',d:{ja:'2つは「上下 / 左右」。',en:'Two = "top/bottom / left/right".'}},
     {s:'padding: 5px 40px 5px 40px;',d:{ja:'4つは「上 右 下 左」（時計回り）。',en:'Four = "top right bottom left" (clockwise).'}}],
   html:{ja:`<div class="a">上下10・左右40</div>
<div class="b">上5 右40 下5 左40</div>`,en:`<div class="a">10 vert / 40 horiz</div>
<div class="b">top5 right40 bottom5 left40</div>`},
   variations:[{label:{ja:"まとめ書き",en:"Shorthand"}, code:{ja:`.a, .b { background: #7b2ff7; color: #fff; margin-bottom: 10px; display: inline-block; }
.a { padding: 10px 40px; }          /* 上下 / 左右 */
.b { padding: 5px 40px 5px 40px; }  /* 上 右 下 左 */`,en:`.a, .b { background: #7b2ff7; color: #fff; margin-bottom: 10px; display: inline-block; }
.a { padding: 10px 40px; }          /* top/bottom / left/right */
.b { padding: 5px 40px 5px 40px; }  /* top right bottom left */`}}]}
]},

{name:"初級", items:[
  {name:{ja:"セレクタを詳しく",en:"Selectors in detail"}, sub:{ja:"タグ / class / id / 子孫",en:"tag / class / id / descendant"}, desc:{ja:`「どれに当てるか」を決めるのがセレクタ。<b>p</b>＝そのタグ全部、<b>.box</b>＝class、<b>#main</b>＝id、<b>スペース区切り</b>＝子孫（中にある物）。カンマ区切りで<b>まとめて</b>指定もできます。<br>例：.card p は「.cardの中にあるp」だけに当たります。`,en:`Selectors decide "what to apply to". <b>p</b> = all those tags, <b>.box</b> = a class, <b>#main</b> = an id, <b>space-separated</b> = descendants (things inside). Comma-separated targets <b>several at once</b>.<br>Example: .card p applies only to "p inside .card".`},
   tags:[{ja:"セレクタ",en:"selector"},"class",{ja:"子孫",en:"descendant"}], prep:[
     {s:'.card',d:{ja:'class="card" の要素すべて。<b>ドット</b>で始める。',en:'All elements with class="card". Starts with a <b>dot</b>.'}},
     {s:'#main',d:{ja:'id="main" の要素。<b>#</b>で始める。1ページ1つ。',en:'The element with id="main". Starts with <b>#</b>. One per page.'}},
     {s:'.card p',d:{ja:'.card の<b>中にある</b> p。スペースは「子孫」の意味。',en:'p <b>inside</b> .card. A space means "descendant".'}}],
   html:{ja:`<div class="card"><p>カードの中の段落</p></div>
<p>カードの外の段落</p>`,en:`<div class="card"><p>Paragraph inside the card</p></div>
<p>Paragraph outside the card</p>`},
   variations:[
     {label:{ja:"子孫で絞る",en:"Filter by descendant"}, code:`.card p {
  color: #7b2ff7;
  font-weight: bold;
}`},
     {label:{ja:"タグ全部",en:"All of a tag"}, code:`p {
  color: #e5484d;
}`}]},

  {name:{ja:"フォントと行間",en:"Font & line height"}, sub:"font-family / line-height", desc:{ja:`<b>font-family</b>で書体、<b>line-height</b>で行の高さ（読みやすさに直結）を指定。font-familyは<b>候補をカンマ区切りで複数</b>書き、無い時は次の候補が使われます。最後に総称（sans-serif等）を書くのが定番。<br>line-heightは<b>1.6〜1.8</b>が読みやすい目安です。`,en:`<b>font-family</b> sets the typeface; <b>line-height</b> sets line height (directly tied to readability). Write <b>several font candidates comma-separated</b>; if one is missing, the next is used. End with a generic family (sans-serif, etc.).<br>A line-height of <b>1.6–1.8</b> is a readable guide.`},
   tags:["font-family","line-height"], prep:[
     {s:'font-family: "Yu Gothic", sans-serif;',d:{ja:'左から順に探し、無ければ最後のゴシック系。',en:'Tries left to right; falls back to the final sans-serif.'}},
     {s:'line-height: 1.8;',d:{ja:'行の高さ。<b>1.6〜1.8</b>くらいが読みやすい。',en:'Line height. About <b>1.6–1.8</b> reads well.'}}],
   html:{ja:`<p>行間とフォントで、文章の読みやすさは大きく変わります。長めの文章で見比べてみましょう。これは日本語のサンプル文です。</p>`,en:`<p>Line height and font greatly change how readable text is. Compare using a longer passage. This is a sample sentence in English.</p>`},
   variations:[
     {label:{ja:"ゆったり",en:"Relaxed"}, code:`p {
  font-family: "Yu Gothic", sans-serif;
  line-height: 2;
}`},
     {label:{ja:"詰める",en:"Tight"}, code:`p {
  line-height: 1.1;
}`}]},

  {name:{ja:"単位",en:"Units"}, sub:"px / % / em / rem", desc:{ja:`大きさの単位。<b>px</b>＝固定、<b>%</b>＝親に対する割合（幅なら親の幅）、<b>em</b>＝<b>その要素の文字サイズ</b>が基準（font-sizeに使う時は親の文字サイズ）、<b>rem</b>＝ページ全体(html)の文字サイズが基準。<br>emは基準が変わりつまずきやすいので、まずは統一しやすい<b>rem</b>が安全で人気です。`,en:`Size units. <b>px</b> = fixed, <b>%</b> = a ratio of the parent (for width, the parent's width), <b>em</b> = based on <b>that element's font size</b> (for font-size, the parent's), <b>rem</b> = based on the whole page's (html) font size.<br>em's base shifts and trips people up, so <b>rem</b> — easy to keep consistent — is a safe, popular first choice.`},
   tags:["px","rem","%"], prep:[
     {s:'16px',d:{ja:'固定の大きさ。分かりやすいが拡大に弱い。',en:'A fixed size. Clear, but weak for zooming.'}},
     {s:'1.5rem',d:{ja:'ルート(html)の文字サイズ×1.5。全体で統一しやすい。',en:'The root (html) font size × 1.5. Easy to keep consistent.'}},
     {s:'width: 80%;',d:{ja:'幅の%は<b>親の幅</b>が基準。',en:"For width, % is based on the <b>parent's width</b>."}}],
   html:{ja:`<div class="outer"><div class="inner">サンプルの箱</div></div>
<p class="big">1.5remの文字</p>`,en:`<div class="outer"><div class="inner">Sample box</div></div>
<p class="big">1.5rem text</p>`},
   variations:[
     {label:{ja:"remで文字",en:"Text with rem"}, code:`.big {
  font-size: 1.5rem;
}
.inner {
  background: #7b2ff7;
  color: #fff;
  padding: 10px;
}`},
     {label:{ja:"%で幅",en:"Width with %"}, code:`.inner {
  width: 80%;
  background: #4fe6e6;
  color: #fff;
  padding: 10px;
}`}]},

  {name:{ja:"display",en:"display"}, sub:"block / inline / inline-block", desc:{ja:`要素の<b>並び方</b>を決める基本プロパティ。<b>block</b>＝縦積み・幅いっぱい（div,p）、<b>inline</b>＝文中に流れる・<b>幅指定が効かない</b>（span,a）、<b>inline-block</b>＝横並びなのに幅や高さを指定できる<b>いいとこ取り</b>。<br>下の例で「inlineだと width が効かない」ことを確認しましょう。`,en:`The basic property that decides how elements <b>flow</b>. <b>block</b> = stacks vertically, full width (div, p); <b>inline</b> = flows within text, <b>width has no effect</b> (span, a); <b>inline-block</b> = flows horizontally yet lets you set width/height — the <b>best of both</b>.<br>In the example below, confirm that "width has no effect on inline".`},
   tags:["display","inline-block"], prep:[
     {s:'display: block;',d:{ja:'縦に積む。幅・高さ・上下marginが効く。',en:'Stacks vertically. width, height, and vertical margin work.'}},
     {s:'display: inline;',d:{ja:'横に流れる。幅指定は<b>効かない</b>。',en:'Flows horizontally. Width <b>has no effect</b>.'}},
     {s:'display: inline-block;',d:{ja:'横並び＋サイズ指定<b>可</b>。',en:'Horizontal + size settings <b>allowed</b>.'}}],
   html:`<span class="tag">A</span>
<span class="tag">B</span>
<span class="tag">C</span>`,
   variations:[
     {label:{ja:"inline(初期)",en:"inline (default)"}, code:{ja:`.tag {
  background: #7b2ff7;
  color: #fff;
  padding: 8px 14px;
  width: 80px;    /* inlineだと効かない */
}`,en:`.tag {
  background: #7b2ff7;
  color: #fff;
  padding: 8px 14px;
  width: 80px;    /* has no effect on inline */
}`}},
     {label:{ja:"inline-block",en:"inline-block"}, code:{ja:`.tag {
  display: inline-block;
  width: 80px;    /* 効くようになる */
  background: #7b2ff7;
  color: #fff;
  padding: 8px;
  text-align: center;
}`,en:`.tag {
  display: inline-block;
  width: 80px;    /* now it works */
  background: #7b2ff7;
  color: #fff;
  padding: 8px;
  text-align: center;
}`}}]},

  {name:{ja:"影をつける",en:"Adding shadows"}, sub:"box-shadow / text-shadow", desc:{ja:`<b>box-shadow</b>は要素に影を落として立体感を出す。値は<b>「横 縦 ぼかし 色」</b>の順。<b>text-shadow</b>は文字に影。<br>影を薄く大きくするほど「高く浮いている」印象に。カードのぷっくり感の正体です。`,en:`<b>box-shadow</b> casts a shadow for depth. The values go in the order <b>"x y blur color"</b>. <b>text-shadow</b> shadows text.<br>The fainter and larger the shadow, the more it looks "floating high". That's the source of a card's puffy feel.`},
   tags:["box-shadow","text-shadow"], prep:[
     {s:'box-shadow: 0 4px 12px rgba(0,0,0,.2);',d:{ja:'横0・下4px・ぼかし12pxの薄い影。',en:'x0, y4px, blur12px — a faint shadow.'}},
     {s:'text-shadow: 0 0 8px cyan;',d:{ja:'文字のまわりに<b>光る</b>ような影。',en:'A <b>glowing</b> shadow around text.'}}],
   html:{ja:`<div class="card">影のついたカード</div>`,en:`<div class="card">A card with a shadow</div>`},
   variations:[
     {label:{ja:"ふつうの影",en:"A normal shadow"}, code:`.card {
  background: #fff;
  padding: 24px;
  box-shadow: 0 6px 20px rgba(0,0,0,.18);
}`},
     {label:{ja:"光る文字",en:"Glowing text"}, code:`.card {
  background: #111;
  color: #4fe6e6;
  padding: 24px;
  text-shadow: 0 0 10px #4fe6e6;
}`}]},

  {name:{ja:"文字の装飾",en:"Text decoration"}, sub:{ja:"text-decoration など",en:"text-decoration, etc."}, desc:{ja:`<b>text-decoration</b>で下線・打ち消し線。リンクの下線を<b>消す</b>時にもよく使う（none）。<b>letter-spacing</b>で字間、<b>text-transform</b>で英字の大文字化もできます。<br>例：セール前の価格に line-through で取り消し線を引く、など。`,en:`<b>text-decoration</b> adds underlines or strikethroughs. Often used to <b>remove</b> a link's underline (none). <b>letter-spacing</b> sets letter spacing, and <b>text-transform</b> can uppercase Latin letters.<br>Example: strike through a pre-sale price with line-through.`},
   tags:["text-decoration","letter-spacing"], prep:[
     {s:'text-decoration: none;',d:{ja:'リンクなどの<b>下線を消す</b>。underlineで付ける。',en:'<b>Removes the underline</b> from links, etc. underline adds it.'}},
     {s:'letter-spacing: 4px;',d:{ja:'文字と文字の<b>間隔</b>を広げる。',en:'Widens the <b>spacing</b> between letters.'}}],
   html:{ja:`<a href="#">下線を消したリンク</a>
<p class="sp">spaced heading</p>`,en:`<a href="#">A link with no underline</a>
<p class="sp">spaced heading</p>`},
   variations:[
     {label:{ja:"装飾いろいろ",en:"Various decorations"}, code:`a {
  text-decoration: none;
  color: #7b2ff7;
}
.sp {
  letter-spacing: 4px;
  text-transform: uppercase;
}`},
     {label:{ja:"打ち消し線",en:"Strikethrough"}, code:`.sp {
  text-decoration: line-through;
  color: #999;
}`}]},

  {name:{ja:"カーソルの形",en:"Cursor shape"}, sub:"cursor", desc:{ja:`<b>cursor</b>はマウスを乗せた時の<b>カーソルの形</b>。<b>pointer</b>（指マーク＝押せる）、<b>not-allowed</b>（禁止＝押せない）、<b>text</b>（I字＝文字選択）など。<br>ボタンには cursor: pointer を付けると「押せる」と直感的に伝わります。地味ですがUIの分かりやすさに効きます。`,en:`<b>cursor</b> is the <b>cursor shape</b> on hover. <b>pointer</b> (hand = clickable), <b>not-allowed</b> (forbidden = can't click), <b>text</b> (I-beam = select text), etc.<br>Adding cursor: pointer to buttons intuitively signals "clickable". Subtle, but it improves UI clarity.`},
   tags:["cursor","pointer"], prep:[
     {s:'cursor: pointer;',d:{ja:'指マーク。「押せる」ことを示す。',en:'A hand. Signals "clickable".'}},
     {s:'cursor: not-allowed;',d:{ja:'禁止マーク。「押せない」ことを示す。',en:'A forbidden mark. Signals "can\'t click".'}}],
   html:{ja:`<button class="ok">押せる</button>
<button class="ng">押せない</button>`,en:`<button class="ok">Clickable</button>
<button class="ng">Disabled</button>`},
   variations:[{label:{ja:"カーソルを比べる",en:"Compare cursors"}, code:`button { padding: 12px 20px; border: none; border-radius: 8px; color: #fff; margin-right: 8px; }
.ok { background: #7b2ff7; cursor: pointer; }
.ng { background: #bbb; cursor: not-allowed; }`}]},

  {name:{ja:"リストの見た目",en:"List appearance"}, sub:"list-style", desc:{ja:`リスト先頭の黒丸や番号は<b>list-style</b>で変えられます。<b>none</b>で<b>消す</b>（メニューを作る定番）、<b>square</b>で四角など。<br>メニューは「黒丸を消して(list-style:none)、余白を消して(padding:0)、横に並べる(flex)」の3点セットで作ります。`,en:`You can change the bullet or number at the start of a list with <b>list-style</b>. <b>none</b> <b>removes</b> them (the classic way to build a menu), <b>square</b> makes squares, etc.<br>Build a menu with the three-part set: remove bullets (list-style:none), remove padding (padding:0), lay out horizontally (flex).`},
   tags:["list-style","none"], prep:[
     {s:'list-style: none;',d:{ja:'先頭の黒丸・番号を<b>消す</b>。メニューで多用。',en:'<b>Removes</b> the leading bullet/number. Common in menus.'}},
     {s:'list-style: square;',d:{ja:'マークを四角などに変える。',en:'Change the marker to a square, etc.'}}],
   html:{ja:`<ul class="menu">
  <li>ホーム</li>
  <li>概要</li>
  <li>連絡先</li>
</ul>`,en:`<ul class="menu">
  <li>Home</li>
  <li>Overview</li>
  <li>Contact</li>
</ul>`},
   variations:[
     {label:{ja:"マークを消す",en:"Remove markers"}, code:`.menu { list-style: none; padding: 0; }
.menu li { padding: 10px; border-bottom: 1px solid #eee; }`},
     {label:{ja:"四角マーク",en:"Square markers"}, code:`.menu { list-style: square; color: #7b2ff7; }`}]},

  {name:{ja:"背景画像",en:"Background image"}, sub:"background-image", desc:{ja:`<b>background-image: url(...)</b>で背景に画像を敷きます。相棒は<b>background-size: cover</b>（枠いっぱい）と<b>background-position: center</b>（中央寄せ）、<b>background-repeat: no-repeat</b>（繰り返さない）。<br>半透明グラデを上に重ねると、写真の上でも文字が読みやすくなります。`,en:`<b>background-image: url(...)</b> lays an image in the background. Its partners are <b>background-size: cover</b> (fill the box), <b>background-position: center</b>, and <b>background-repeat: no-repeat</b>.<br>Layering a semi-transparent gradient on top keeps text readable over a photo.`},
   tags:["background-image","cover"], prep:[
     {s:'background-image: url("…");',d:{ja:'背景に画像を敷く。',en:'Lays an image in the background.'}},
     {s:'background-size: cover;',d:{ja:'枠いっぱいに広げる（はみ出しは切る）。',en:'Spreads to fill the box (crops overflow).'}}],
   html:{ja:`<div class="hero"><h2>背景の上の文字</h2></div>`,en:`<div class="hero"><h2>Text over a background</h2></div>`},
   variations:[
     {label:{ja:"背景を敷く",en:"Lay a background"}, code:`.hero {
  height: 160px;
  background-image: url("https://placehold.co/600x160/7b2ff7/fff");
  background-size: cover;
  background-position: center;
  color: #fff; display: grid; place-items: center;
  border-radius: 10px;
}`},
     {label:{ja:"暗くして文字を乗せる",en:"Darken & overlay text"}, code:`.hero {
  height: 160px;
  background:
    linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)),
    url("https://placehold.co/600x160/7b2ff7/fff");
  background-size: cover;
  color: #fff; display: grid; place-items: center;
  border-radius: 10px;
}`}]}
]},

{name:"中級", items:[
  {name:{ja:"ボックスモデル",en:"The box model"}, sub:"padding / border / margin", desc:{ja:`すべての要素は<b>中身 → padding → border → margin</b>の4層の箱。幅の計算で混乱しがちなので<b>box-sizing: border-box</b>を指定すると、widthに<b>paddingとborderを含めて</b>くれて直感的になります（現場の定番）。<br>下の例で「border-boxは240pxに収まる／content-boxは広がる」違いを確認。`,en:`Every element is a 4-layer box: <b>content → padding → border → margin</b>. Width math gets confusing, so setting <b>box-sizing: border-box</b> makes width <b>include padding and border</b>, which is intuitive (the industry standard).<br>In the example, confirm the difference: border-box fits in 240px / content-box expands.`},
   tags:["box-sizing","padding","margin"], prep:[
     {s:'content / padding / border / margin',d:{ja:'中身・内側余白・枠・外側余白の<b>4層</b>。',en:'The <b>4 layers</b>: content, inner padding, border, outer margin.'}},
     {s:'box-sizing: border-box;',d:{ja:'width に padding と border を<b>含める</b>。ズレ防止。',en:'<b>Includes</b> padding and border in width. Prevents drift.'}}],
   html:{ja:`<div class="box">border-box（width:240pxに収まる）</div>
<div class="box2">content-box（240pxより広がる）</div>`,en:`<div class="box">border-box (fits in width:240px)</div>
<div class="box2">content-box (grows past 240px)</div>`},
   variations:[
     {label:{ja:"並べて比較",en:"Compare side by side"}, code:{ja:`.box, .box2 {
  width: 240px;
  padding: 20px;
  border: 4px solid #7b2ff7;
  background: #eee;
  margin-bottom: 10px;
}
.box  { box-sizing: border-box; }   /* 240pxの中に padding/border が収まる */
.box2 { box-sizing: content-box; }  /* 240 + padding + border ぶん外に広がる */`,en:`.box, .box2 {
  width: 240px;
  padding: 20px;
  border: 4px solid #7b2ff7;
  background: #eee;
  margin-bottom: 10px;
}
.box  { box-sizing: border-box; }   /* padding/border fit within 240px */
.box2 { box-sizing: content-box; }  /* grows outward by 240 + padding + border */`}},
     {label:{ja:"どちらもborder-box",en:"Both border-box"}, code:`.box, .box2 {
  box-sizing: border-box;
  width: 240px;
  padding: 20px;
  border: 4px solid #7b2ff7;
  background: #eee;
  margin-bottom: 10px;
}`}]},

  {name:{ja:"Flexbox 基本",en:"Flexbox basics"}, sub:"display: flex", desc:{ja:`親に<b>display: flex</b>をつけると、子要素が<b>横並び</b>になります。これが現代レイアウトの主役。並ぶ向きは<b>flex-direction</b>（row＝横／column＝縦）で変えられます。<br>覚え方：flexは「親に」書く。並ぶのは「その子」たち。`,en:`Add <b>display: flex</b> to a parent and its children line up <b>horizontally</b>. This is the star of modern layout. Change the direction with <b>flex-direction</b> (row = horizontal / column = vertical).<br>Remember: write flex on <b>the parent</b>. It's the <b>children</b> that line up.`},
   tags:["flex","flex-direction"], prep:[
     {s:'display: flex;',d:{ja:'この要素の<b>子</b>を横並びにする。',en:"Lays this element's <b>children</b> out horizontally."}},
     {s:'flex-direction: column;',d:{ja:'並ぶ向きを<b>縦</b>に変える。',en:'Changes the direction to <b>vertical</b>.'}}],
   html:`<div class="row">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>`,
   variations:[
     {label:{ja:"横並び",en:"Horizontal"}, code:`.row {
  display: flex;
}
.item {
  background: #7b2ff7;
  color: #fff;
  padding: 20px;
  margin: 4px;
}`},
     {label:{ja:"縦並び",en:"Vertical"}, code:`.row {
  display: flex;
  flex-direction: column;
}
.item {
  background: #7b2ff7;
  color: #fff;
  padding: 20px;
  margin: 4px;
}`}]},

  {name:{ja:"Flexで揃える",en:"Aligning with Flex"}, sub:"justify-content / align-items / gap", desc:{ja:`flexの中身の<b>配置</b>を決める3点セット。<b>justify-content</b>＝主軸（横）方向の寄せ、<b>align-items</b>＝交差軸（縦）方向の寄せ、<b>gap</b>＝子どうしの<b>すき間</b>。「上下左右まん中に置く」はこれで完成します。<br>space-between は「両端に寄せて間を均等に」で、ナビバーの定番です。`,en:`The three-part set that decides the <b>arrangement</b> inside flex. <b>justify-content</b> = alignment on the main (horizontal) axis, <b>align-items</b> = on the cross (vertical) axis, <b>gap</b> = the <b>space</b> between children. "Place it dead center" is done with these.<br>space-between means "push to both ends with even gaps", the classic for nav bars.`},
   tags:["justify-content","align-items","gap"], prep:[
     {s:'justify-content: center;',d:{ja:'横方向に<b>中央</b>。space-betweenで両端＋均等配置。',en:'<b>Center</b> horizontally. space-between = ends + even spacing.'}},
     {s:'align-items: center;',d:{ja:'縦方向に<b>中央</b>。高さ方向の中央寄せ。',en:'<b>Center</b> vertically. Centering along the height.'}},
     {s:'gap: 12px;',d:{ja:'子要素どうしの<b>間隔</b>。marginより手軽。',en:'The <b>gap</b> between children. Easier than margin.'}}],
   html:`<div class="row">
  <div class="item">A</div>
  <div class="item">B</div>
  <div class="item">C</div>
</div>`,
   variations:[
     {label:{ja:"中央に集める",en:"Gather in the center"}, code:`.row {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  height: 160px;
  background: #eee;
}
.item {
  background: #7b2ff7;
  color: #fff;
  padding: 16px;
}`},
     {label:{ja:"両端に配置",en:"Place at both ends"}, code:`.row {
  display: flex;
  justify-content: space-between;
  background: #eee;
  padding: 10px;
}
.item {
  background: #7b2ff7;
  color: #fff;
  padding: 16px;
}`}]},

  {name:{ja:"position",en:"position"}, sub:"relative / absolute", desc:{ja:`要素の<b>位置</b>を細かく操作します。<b>relative</b>＝元の位置を基準に少しズラす（かつ、中の absolute の基準にもなる）。<b>absolute</b>＝<b>親(relative)を基準</b>に自由配置。<br>定番のセット：親に relative、子に absolute。バッジやツールチップに必須です。`,en:`Finely control an element's <b>position</b>. <b>relative</b> = nudge from its original spot (and it becomes the reference for absolute inside). <b>absolute</b> = place it freely <b>relative to the parent (relative)</b>.<br>Classic set: relative on the parent, absolute on the child. Essential for badges and tooltips.`},
   tags:["position","relative","absolute"], prep:[
     {s:'position: relative;',d:{ja:'基準を作る。top/leftで少しズラせる。',en:'Creates a reference. Nudge with top/left.'}},
     {s:'position: absolute; top:0; right:0;',d:{ja:'親の<b>右上</b>にピタッと配置。',en:'Pins to the <b>top-right</b> of the parent.'}}],
   html:{ja:`<div class="card">
  <span class="badge">NEW</span>
  商品カード
</div>`,en:`<div class="card">
  <span class="badge">NEW</span>
  Product card
</div>`},
   variations:[
     {label:{ja:"右上にバッジ",en:"Badge at top-right"}, code:`.card {
  position: relative;
  background: #eee;
  padding: 30px;
}
.badge {
  position: absolute;
  top: 8px;
  right: 8px;
  background: #e5484d;
  color: #fff;
  padding: 4px 8px;
  border-radius: 6px;
}`}]},

  {name:{ja:"重なり順",en:"Stacking order"}, sub:"z-index", desc:{ja:`要素が<b>重なった</b>時、どれを手前に出すかが<b>z-index</b>（数字が大きいほど手前）。<br><b>注意</b>：z-indexは<b>positionが指定された要素</b>にだけ効きます（static のままだと効かない）。まず position: relative などを付けてから使います。`,en:`When elements <b>overlap</b>, <b>z-index</b> decides which comes to the front (higher number = more front).<br><b>Note</b>: z-index only works on <b>elements with a position set</b> (no effect while static). Add position: relative etc. first.`},
   tags:["z-index",{ja:"重なり",en:"overlap"}], prep:[
     {s:'z-index: 10;',d:{ja:'数字が<b>大きい</b>ほど手前に来る。',en:'A <b>higher</b> number comes to the front.'}},
     {s:{ja:'※positionが必要',en:'※position required'},d:{ja:'static(初期)のままだと z-index は<b>無効</b>。',en:'z-index is <b>ignored</b> while static (the default).'}}],
   html:`<div class="stage">
  <div class="box a">A</div>
  <div class="box b">B</div>
</div>`,
   variations:[
     {label:{ja:"Bを手前に",en:"B in front"}, code:`.stage { position: relative; height: 160px; }
.box {
  position: absolute;
  width: 90px; height: 90px;
  color: #fff; padding: 10px;
}
.a { background: #7b2ff7; left: 20px; top: 20px; z-index: 1; }
.b { background: #e5484d; left: 60px; top: 50px; z-index: 2; }`},
     {label:{ja:"Aを手前に",en:"A in front"}, code:`.stage { position: relative; height: 160px; }
.box {
  position: absolute;
  width: 90px; height: 90px;
  color: #fff; padding: 10px;
}
.a { background: #7b2ff7; left: 20px; top: 20px; z-index: 5; }
.b { background: #e5484d; left: 60px; top: 50px; z-index: 2; }`}]},

  {name:{ja:"hoverと変化",en:"Hover & change"}, sub:":hover / transition", desc:{ja:`<b>:hover</b>はマウスが乗った時のスタイル。<b>transition</b>を足すと、変化が<b>ふわっと</b>なめらかになります。ボタンの反応でよく使う組み合わせ。<br>プレビューのボタンに<b>実際にマウスを乗せて</b>試してみましょう。`,en:`<b>:hover</b> is the style while the mouse is over. Adding <b>transition</b> makes the change smooth and <b>gradual</b>. A combo often used for button feedback.<br><b>Actually hover</b> the button in the preview to try it.`},
   tags:[":hover","transition"], prep:[
     {s:'.btn:hover { … }',d:{ja:'マウスが<b>乗った時</b>だけのスタイル。',en:'Style only <b>while hovered</b>.'}},
     {s:'transition: .2s;',d:{ja:'変化に<b>0.2秒</b>かけてなめらかにする。',en:'Smooths the change over <b>0.2s</b>.'}}],
   html:{ja:`<button class="btn">ホバーしてみて</button>`,en:`<button class="btn">Hover over me</button>`},
   variations:[
     {label:{ja:"色が変わる",en:"Color changes"}, code:`.btn {
  background: #7b2ff7;
  color: #fff;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  transition: .2s;
}
.btn:hover {
  background: #4fe6e6;
  color: #111;
}`},
     {label:{ja:"浮き上がる",en:"Lifts up"}, code:`.btn {
  background: #7b2ff7;
  color: #fff;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  transition: .2s;
}
.btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 18px rgba(0,0,0,.3);
}`}]},

  {name:{ja:"変化をなめらかに",en:"Smooth transitions"}, sub:{ja:"transition（単独）",en:"transition (standalone)"}, desc:{ja:`<b>transition</b>は、値が変わったとき<b>パッではなくジワッ</b>と変化させる指定。:hover と組むのが定番ですが、transition 自体は<b>「何を・何秒・どんな速さで」</b>変えるかを決める独立した仕組みです。<br><b>書き方</b>：<b>transition: 対象 時間 速さカーブ 遅延;</b>（例 transition: background .3s ease;）。対象を <b>all</b> にすると<b>すべての変化</b>が対象に。<b>ease / linear / ease-in-out</b> で加速の仕方が変わります。<br><b>注意</b>：<b>変化前と後の両方に値が必要</b>。display:none ↔ block のような「途中が無い」変化はアニメしないので、消し隠しは opacity を使います。`,en:`<b>transition</b> makes a value change <b>gradually rather than instantly</b>. It's classically paired with :hover, but transition itself is an independent mechanism deciding <b>"what, over how long, at what speed"</b>.<br><b>Syntax</b>: <b>transition: target duration speed-curve delay;</b> (e.g. transition: background .3s ease;). Setting target to <b>all</b> covers <b>every change</b>. <b>ease / linear / ease-in-out</b> change how it accelerates.<br><b>Note</b>: <b>you need values both before and after</b>. Changes with "no in-between" like display:none ↔ block don't animate, so use opacity for hide/show.`},
   tags:["transition","ease"], prep:[
     {s:'transition: .3s;',d:{ja:'すべての変化に<b>0.3秒</b>かける（一番簡単）。',en:'Applies <b>0.3s</b> to every change (the simplest).'}},
     {s:'transition: background .3s ease;',d:{ja:'<b>背景だけ</b>を0.3秒・ease で変える。',en:'Changes <b>only the background</b> over 0.3s with ease.'}},
     {s:'transition: transform .4s ease-in-out .1s;',d:{ja:'対象・時間・カーブ・<b>遅延</b>の順。',en:'Order: target, duration, curve, <b>delay</b>.'}}],
   html:{ja:`<div class="box">ホバーしてね</div>`,en:`<div class="box">Hover me</div>`},
   variations:[
     {label:{ja:"複数をまとめて",en:"Several at once"}, code:{ja:`.box {
  width: 140px;
  padding: 30px;
  text-align: center;
  color: #fff;
  border-radius: 10px;
  background: #7b2ff7;
  /* 背景と大きさ、両方をなめらかに */
  transition: background .4s ease, transform .4s ease;
}
.box:hover {
  background: #4fe6e6;
  color: #111;
  transform: scale(1.1);
}`,en:`.box {
  width: 140px;
  padding: 30px;
  text-align: center;
  color: #fff;
  border-radius: 10px;
  background: #7b2ff7;
  /* smooth both background and size */
  transition: background .4s ease, transform .4s ease;
}
.box:hover {
  background: #4fe6e6;
  color: #111;
  transform: scale(1.1);
}`}},
     {label:{ja:"対象を1つに絞る",en:"Limit to one target"}, code:{ja:`.box {
  width: 140px;
  padding: 30px;
  text-align: center;
  color: #fff;
  border-radius: 10px;
  background: #7b2ff7;
  /* 色だけなめらか。大きさは即時に変わる */
  transition: background .5s ease;
}
.box:hover {
  background: #e5484d;
  transform: scale(1.1);
}`,en:`.box {
  width: 140px;
  padding: 30px;
  text-align: center;
  color: #fff;
  border-radius: 10px;
  background: #7b2ff7;
  /* only color is smooth; size changes instantly */
  transition: background .5s ease;
}
.box:hover {
  background: #e5484d;
  transform: scale(1.1);
}`}}]},

  {name:{ja:"折り返しと伸縮",en:"Wrapping & flexing"}, sub:"flex-wrap / flex: 1", desc:{ja:`flexの便利技2つ。<b>flex-wrap: wrap</b>は、入りきらない子を<b>次の行へ折り返し</b>ます（タグ群やカード一覧に必須）。<b>flex: 1</b>は子に付けると<b>余ったスペースを埋めるように伸び</b>ます。<br>例：入力欄に flex:1、隣の送信ボタンは自然な幅、で「残り全部が入力欄」になります。`,en:`Two handy flex tricks. <b>flex-wrap: wrap</b> makes children that don't fit <b>wrap to the next line</b> (essential for tag groups and card lists). <b>flex: 1</b> on a child makes it <b>grow to fill the leftover space</b>.<br>Example: flex:1 on the input and a natural width on the send button makes "the input take all the rest".`},
   tags:["flex-wrap","flex"], prep:[
     {s:'flex-wrap: wrap;',d:{ja:'入りきらない子を次の行へ折り返す。',en:"Wraps children that don't fit to the next line."}},
     {s:'flex: 1;',d:{ja:'余ったスペースを埋めるように伸びる。',en:'Grows to fill the leftover space.'}}],
   html:{ja:`<div class="row">
  <input type="text" placeholder="キーワード">
  <button>検索</button>
</div>
<div class="tags">
  <span>HTML</span><span>CSS</span><span>JS</span><span>React</span><span>Vue</span>
</div>`,en:`<div class="row">
  <input type="text" placeholder="keyword">
  <button>Search</button>
</div>
<div class="tags">
  <span>HTML</span><span>CSS</span><span>JS</span><span>React</span><span>Vue</span>
</div>`},
   variations:[{label:{ja:"伸縮と折り返し",en:"Flex & wrap"}, code:`.row { display: flex; gap: 8px; margin-bottom: 16px; }
.row input { flex: 1; padding: 10px; border: 1px solid #ccc; border-radius: 8px; }
.row button { padding: 10px 18px; border: none; border-radius: 8px; background: #7b2ff7; color: #fff; }

.tags { display: flex; flex-wrap: wrap; gap: 8px; }
.tags span { background: #7b2ff7; color: #fff; padding: 6px 14px; border-radius: 999px; }`}]},

  {name:{ja:"はみ出しの制御",en:"Controlling overflow"}, sub:"overflow", desc:{ja:`箱より中身が大きい時、<b>overflow</b>で扱いを決めます。<b>hidden</b>で切り取る、<b>auto</b>で必要な時だけスクロールバー、<b>scroll</b>で常にバー。<br>使い所：固定サイズのカードに長文が入ってもレイアウトを崩さない、角丸から画像をはみ出させない(hidden)、など。`,en:`When content is bigger than its box, <b>overflow</b> decides what happens. <b>hidden</b> clips it, <b>auto</b> shows a scrollbar only when needed, <b>scroll</b> always shows one.<br>Uses: keep a fixed-size card from breaking when long text is added, keep an image from spilling out of rounded corners (hidden), etc.`},
   tags:["overflow","hidden","auto"], prep:[
     {s:'overflow: auto;',d:{ja:'必要なときだけ<b>スクロール</b>できる。',en:'Lets it <b>scroll</b> only when needed.'}},
     {s:'overflow: hidden;',d:{ja:'はみ出た部分を<b>切り取る</b>。',en:'<b>Clips</b> the overflowing part.'}}],
   html:{ja:`<div class="box">長い文章長い文章長い文章長い文章長い文章長い文章長い文章長い文章長い文章長い文章長い文章長い文章</div>`,en:`<div class="box">Long text long text long text long text long text long text long text long text long text long text long text long text</div>`},
   variations:[
     {label:{ja:"スクロールさせる",en:"Make it scroll"}, code:`.box {
  width: 200px; height: 90px;
  padding: 12px; background: #f2eefe; border-radius: 8px;
  overflow: auto;
}`},
     {label:{ja:"切り取る",en:"Clip it"}, code:`.box {
  width: 200px; height: 90px;
  padding: 12px; background: #f2eefe; border-radius: 8px;
  overflow: hidden;
}`}]},

  {name:{ja:"箱を中央に",en:"Centering a box"}, sub:"margin: auto", desc:{ja:`<b>幅を決めた箱</b>を左右中央に置く定番が<b>margin: 0 auto</b>。左右の外余白を auto（自動＝均等）にすると、箱が中央に来ます。<br><b>ルール</b>：先に width か max-width で幅を決めること（幅いっぱいの箱は中央にしようがない）。text-align:center（中身の文字寄せ）とは別物です。`,en:`The classic for centering <b>a box with a set width</b> horizontally is <b>margin: 0 auto</b>. Setting the left/right outer margins to auto (equal) centers the box.<br><b>Rule</b>: set a width or max-width first (a full-width box can't be centered). It's different from text-align:center (which aligns the content's text).`},
   tags:["margin","auto","max-width"], prep:[
     {s:'margin: 0 auto;',d:{ja:'上下0・左右autoで<b>左右中央</b>に置く。',en:'0 top/bottom, auto left/right centers it <b>horizontally</b>.'}},
     {s:{ja:'先に幅を決める',en:'set a width first'},d:{ja:'width か max-width が必要。',en:'A width or max-width is required.'}}],
   html:{ja:`<div class="wrap">中央のコンテンツ</div>`,en:`<div class="wrap">Centered content</div>`},
   variations:[{label:{ja:"箱を中央に",en:"Center a box"}, code:`body { background: #eee; }
.wrap {
  max-width: 280px;
  margin: 0 auto;
  padding: 24px;
  background: #7b2ff7; color: #fff;
  border-radius: 12px; text-align: center;
}`}]},

  {name:{ja:"画面幅で変える",en:"Change by screen width"}, sub:{ja:"@media（レスポンシブ）",en:"@media (responsive)"}, desc:{ja:`<b>@media</b>は<b>画面の幅に応じて</b>CSSを切り替える仕組み（レスポンシブ）。「PCは3列、スマホは1列」などの出し分けの核。<br><b>max-width: 600px</b>は「その幅<b>以下</b>のとき」。<b>プレビューの幅を狭める</b>と、下の箱の色と列数が変わります。試してみて。`,en:`<b>@media</b> switches CSS <b>based on screen width</b> (responsive). The core of "3 columns on PC, 1 on phone".<br><b>max-width: 600px</b> means "when the width is <b>at most</b> that". <b>Narrow the preview</b> and the box's color and column count below change. Try it.`},
   tags:["@media",{ja:"レスポンシブ",en:"responsive"}], prep:[
     {s:'@media (max-width: 600px) { … }',d:{ja:'画面幅が600px以下のときだけ適用。',en:'Applies only when the width is 600px or less.'}},
     {s:'max-width / min-width',d:{ja:'〜以下 / 〜以上、の境目を指定。',en:'Sets the "at most / at least" breakpoint.'}}],
   html:`<div class="grid">
  <div class="c">1</div><div class="c">2</div>
  <div class="c">3</div><div class="c">4</div>
</div>`,
   variations:[
     {label:{ja:"幅で列数が変わる",en:"Columns change by width"}, code:{ja:`.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
.c { background: #7b2ff7; color: #fff; padding: 20px; border-radius: 8px; text-align: center; }

/* 狭いときだけ 2列＋ピンクに */
@media (max-width: 600px) {
  .grid { grid-template-columns: 1fr 1fr; }
  .c { background: #e5484d; }
}`,en:`.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
.c { background: #7b2ff7; color: #fff; padding: 20px; border-radius: 8px; text-align: center; }

/* only when narrow: 2 columns + pink */
@media (max-width: 600px) {
  .grid { grid-template-columns: 1fr 1fr; }
  .c { background: #e5484d; }
}`}}]}
]},

{name:"上級", items:[
  {name:{ja:"変形させる",en:"Transform"}, sub:"transform", desc:{ja:`<b>transform</b>で要素を<b>移動・拡大・回転・傾け</b>できます。<b>translate</b>(移動)、<b>scale</b>(拡大)、<b>rotate</b>(回転)、<b>skew</b>(傾け)。<br>ポイント：transformは<b>周りのレイアウトに影響を与えず</b>見た目だけ動かします。:hoverやtransitionと組むと生き生きします。複数まとめて transform: scale(1.1) rotate(5deg) とも書けます。`,en:`<b>transform</b> lets you <b>move, scale, rotate, or skew</b> an element: <b>translate</b> (move), <b>scale</b> (resize), <b>rotate</b>, <b>skew</b>.<br>Point: transform <b>doesn't affect the surrounding layout</b> — it only moves the appearance. It comes alive combined with :hover and transition. You can combine several: transform: scale(1.1) rotate(5deg).`},
   tags:["transform","scale","rotate"], prep:[
     {s:'transform: translateY(-8px);',d:{ja:'上へ8px動かす。',en:'Move up by 8px.'}},
     {s:'transform: scale(1.2);',d:{ja:'1.2倍に拡大。',en:'Scale to 1.2×.'}},
     {s:'transform: rotate(10deg);',d:{ja:'10度かたむける。',en:'Tilt by 10 degrees.'}}],
   html:{ja:`<div class="card">ホバーしてね</div>`,en:`<div class="card">Hover me</div>`},
   variations:[
     {label:{ja:"拡大",en:"Scale up"}, code:`.card {
  width: 180px; padding: 40px;
  background: #7b2ff7; color: #fff;
  border-radius: 12px; text-align: center;
  transition: transform .3s;
}
.card:hover { transform: scale(1.12); }`},
     {label:{ja:"傾けて回す",en:"Tilt & rotate"}, code:`.card {
  width: 180px; padding: 40px;
  background: #e5484d; color: #fff;
  border-radius: 12px; text-align: center;
  transition: transform .4s;
}
.card:hover { transform: rotate(-6deg) scale(1.05); }`}]},

  {name:{ja:"アニメーション",en:"Animation"}, sub:"@keyframes / animation", desc:{ja:`ずっと動き続けるアニメは<b>@keyframes</b>で<b>振り付け</b>を作り、<b>animation</b>で再生します。0%〜100%で「どの時点でどうなるか」を書きます。<br><b>infinite</b>で無限ループ、<b>ease-in-out</b>で滑らかな加減速。例えば0%と100%を同じ位置に、50%で上へ、で上下に揺れます。`,en:`For motion that keeps going, define the <b>choreography</b> with <b>@keyframes</b> and play it with <b>animation</b>. Write "what happens when" from 0% to 100%.<br><b>infinite</b> loops forever, <b>ease-in-out</b> smooths the acceleration. E.g. 0% and 100% at the same spot and 50% higher makes it bob up and down.`},
   tags:["@keyframes","animation","infinite"], prep:[
     {s:{ja:'@keyframes 名前 { … }',en:'@keyframes name { … }'},d:{ja:'0%〜100%で動きの<b>振り付け</b>を定義。',en:'Define the motion <b>choreography</b> from 0% to 100%.'}},
     {s:{ja:'animation: 名前 1s infinite;',en:'animation: name 1s infinite;'},d:{ja:'その振り付けを1秒で<b>無限にくり返す</b>。',en:'Play it, <b>looping forever</b> over 1s.'}}],
   html:`<div class="ball">●</div>`,
   variations:[
     {label:{ja:"ふわふわ浮く",en:"Float gently"}, code:`@keyframes floaty {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-24px); }
}
.ball {
  font-size: 50px; color: #7b2ff7; text-align: center;
  animation: floaty 1.4s ease-in-out infinite;
}`},
     {label:{ja:"くるくる回る",en:"Spin around"}, code:`@keyframes spin { to { transform: rotate(360deg); } }
.ball {
  width: 44px; height: 44px; margin: 20px auto;
  border-radius: 50%;
  border: 6px solid #eee; border-top-color: #7b2ff7;
  animation: spin .9s linear infinite;
  color: transparent;
}`}]},

  {name:{ja:"グラデーション",en:"Gradients"}, sub:"linear / radial", desc:{ja:`背景を<b>なめらかな色の変化</b>にします。<b>linear-gradient</b>は直線状（向き, 色1, 色2…）、<b>radial-gradient</b>は円状に広がります。<br>向きは to right（右へ）や 45deg（角度）。色は3つ以上並べてもOK。ボタンやヒーロー背景を華やかにする定番です。`,en:`Make a background a <b>smooth color change</b>. <b>linear-gradient</b> is straight (direction, color1, color2…); <b>radial-gradient</b> spreads in a circle.<br>Direction can be to right or 45deg. You can list 3+ colors. A classic for making buttons and hero backgrounds vivid.`},
   tags:["linear-gradient","radial-gradient"], prep:[
     {s:{ja:'linear-gradient(45deg, 色1, 色2)',en:'linear-gradient(45deg, color1, color2)'},d:{ja:'45度の向きで直線グラデ。',en:'A straight gradient at a 45° angle.'}},
     {s:{ja:'radial-gradient(circle, 色1, 色2)',en:'radial-gradient(circle, color1, color2)'},d:{ja:'中心から円状に広がるグラデ。',en:'A gradient spreading in a circle from the center.'}}],
   html:`<div class="a">linear</div>
<div class="b">radial</div>`,
   variations:[
     {label:{ja:"2種類",en:"Two kinds"}, code:`.a, .b {
  padding: 40px; margin-bottom: 12px;
  color: #fff; text-align: center; border-radius: 12px;
}
.a { background: linear-gradient(45deg, #7b2ff7, #4fe6e6); }
.b { background: radial-gradient(circle, #e5484d, #7b2ff7); }`},
     {label:{ja:"3色グラデ",en:"Three-color gradient"}, code:{ja:`.a, .b {
  padding: 40px; margin-bottom: 12px;
  color: #fff; text-align: center; border-radius: 12px;
}
/* 色は3つ以上並べてもOK */
.a { background: linear-gradient(to right, #e5484d, #f5a623, #7b2ff7); }
.b { background: linear-gradient(135deg, #7b2ff7, #4fe6e6, #22a06b); }`,en:`.a, .b {
  padding: 40px; margin-bottom: 12px;
  color: #fff; text-align: center; border-radius: 12px;
}
/* you can list 3 or more colors */
.a { background: linear-gradient(to right, #e5484d, #f5a623, #7b2ff7); }
.b { background: linear-gradient(135deg, #7b2ff7, #4fe6e6, #22a06b); }`}}]},

  {name:{ja:"疑似要素で飾る",en:"Decorate with pseudo-elements"}, sub:"::before / ::after", desc:{ja:`<b>::before</b>と<b>::after</b>は、HTMLを増やさずに<b>要素の前後に飾りを追加</b>できる機能。<b>content</b>で中身を指定します（空でも content: "" が必須）。<br>例：チェック項目の前に「✓」を足す、見出しの下に飾り線を引く、吹き出しのしっぽを作る、など装飾で大活躍。`,en:`<b>::before</b> and <b>::after</b> add decoration <b>before or after an element</b> without extra HTML. Set the content with <b>content</b> (even empty needs content: "").<br>Uses: add a "✓" before a checklist item, draw a decorative line under a heading, make a speech-bubble tail, and more.`},
   tags:["::before","::after","content"], prep:[
     {s:'.x::before { content: "★"; }',d:{ja:'.x の前に★を付け足す。',en:'Adds a ★ before .x.'}},
     {s:'content',d:{ja:'疑似要素に<b>必須</b>。表示する文字。空なら content: "";',en:'<b>Required</b> for pseudo-elements. The text to show; empty is content: "".'}}],
   html:{ja:`<p class="check">資料を用意する</p>
<p class="check">メールを送る</p>`,en:`<p class="check">Prepare the documents</p>
<p class="check">Send the email</p>`},
   variations:[
     {label:{ja:"前に印を付ける",en:"Add a mark before"}, code:`.check::before {
  content: "✓ ";
  color: #22a06b;
  font-weight: bold;
}
.check { font-size: 20px; line-height: 2; }`},
     {label:{ja:"注意マークにする",en:"Make it a warning"}, code:`.check::before {
  content: "⚠ ";
  color: #e5484d;
}
.check { font-size: 20px; line-height: 2; }`}]},

  {name:{ja:"色を変数にする",en:"Colors as variables"}, sub:{ja:"CSS変数 --",en:"CSS variables --"}, desc:{ja:`何度も使う色や数値を<b>変数</b>にまとめられます。<b>:root</b> に <b>--名前: 値;</b> で定義し、<b>var(--名前)</b> で呼び出す。<br>利点：テーマ色を1か所直すだけで、ボタン・見出し・枠線すべてが一斉に変わります。大きなサイトほど効きます。`,en:`You can collect frequently used colors or numbers into <b>variables</b>. Define with <b>--name: value;</b> in <b>:root</b> and call it with <b>var(--name)</b>.<br>Benefit: change the theme color in one place and buttons, headings, and borders all update at once. The bigger the site, the more it helps.`},
   tags:[{ja:"--変数",en:"--variable"},"var()",":root"], prep:[
     {s:':root { --main: #7b2ff7; }',d:{ja:'ページ全体で使える変数を定義。',en:'Define a variable usable across the whole page.'}},
     {s:'color: var(--main);',d:{ja:'定義した変数を呼び出して使う。',en:'Call and use the defined variable.'}}],
   html:{ja:`<button class="btn">ボタン</button>
<p class="txt">同じ色の文字</p>
<div class="bar"></div>`,en:`<button class="btn">Button</button>
<p class="txt">Text in the same color</p>
<div class="bar"></div>`},
   variations:[
     {label:{ja:"変数でそろえる",en:"Unify with a variable"}, code:`:root {
  --main: #7b2ff7;
}
.btn { background: var(--main); color: #fff; border: none; padding: 12px 24px; border-radius: 8px; }
.txt { color: var(--main); font-weight: bold; }
.bar { height: 6px; background: var(--main); border-radius: 3px; margin-top: 12px; }`}]},

  {name:{ja:"ぼかしなどの効果",en:"Effects like blur"}, sub:"filter", desc:{ja:`<b>filter</b>は要素に<b>画像加工のような効果</b>を掛けます。<b>blur</b>(ぼかし)、<b>grayscale</b>(白黒)、<b>brightness</b>(明るさ)など。<br>例：写真を白黒にして、:hoverで色を戻すと「乗せると色が付く」演出に。値0%で元通り、100%で最大の効果です。`,en:`<b>filter</b> applies <b>photo-editing-like effects</b> to an element: <b>blur</b>, <b>grayscale</b>, <b>brightness</b>, etc.<br>Example: make a photo grayscale and restore color on :hover for a "color on hover" effect. 0% is the original, 100% is the maximum effect.`},
   tags:["filter","blur","grayscale"], prep:[
     {s:'filter: grayscale(100%);',d:{ja:'白黒にする。0%で元に戻る。',en:'Make it grayscale. 0% restores it.'}},
     {s:'filter: blur(4px);',d:{ja:'4pxぼかす。',en:'Blur by 4px.'}}],
   html:`<img class="photo" src="https://placehold.co/220x140/7b2ff7/fff?text=Photo" alt="">`,
   variations:[
     {label:{ja:"乗せると色が戻る",en:"Color returns on hover"}, code:`.photo {
  border-radius: 12px;
  filter: grayscale(100%);
  transition: filter .4s;
}
.photo:hover { filter: grayscale(0%); }`},
     {label:{ja:"ぼかしを外す",en:"Remove the blur"}, code:`.photo {
  border-radius: 12px;
  filter: blur(4px);
  transition: filter .4s;
}
.photo:hover { filter: blur(0); }`}]},

  {name:{ja:"何番目かで指定",en:"Select by position"}, sub:":nth-child()", desc:{ja:`<b>:nth-child()</b>は「<b>何番目の要素か</b>」で狙うセレクタ。<b>even</b>（偶数番）で表の行を1行おきに色付け（ゼブラ模様）、<b>odd</b>（奇数番）、<b>3</b>（3番目だけ）など。<br>リストや表を見やすくする定番。数式 2n+1 のような指定もできます。`,en:`<b>:nth-child()</b> targets by "<b>which position</b> an element is". <b>even</b> color-codes table rows every other row (zebra striping), plus <b>odd</b>, or <b>3</b> (only the 3rd), etc.<br>A classic for making lists and tables readable. You can even use formulas like 2n+1.`},
   tags:[":nth-child","even","odd"], prep:[
     {s:':nth-child(even)',d:{ja:'偶数番目（2,4,6…）に適用。',en:'Applies to even positions (2, 4, 6…).'}},
     {s:':nth-child(3)',d:{ja:'3番目だけに適用。',en:'Applies to only the 3rd.'}}],
   html:{ja:`<ul>
  <li>1行目</li><li>2行目</li><li>3行目</li><li>4行目</li><li>5行目</li>
</ul>`,en:`<ul>
  <li>Row 1</li><li>Row 2</li><li>Row 3</li><li>Row 4</li><li>Row 5</li>
</ul>`},
   variations:[
     {label:{ja:"ゼブラ模様",en:"Zebra striping"}, code:`ul { list-style: none; padding: 0; width: 240px; }
li { padding: 12px 16px; }
li:nth-child(odd) { background: #f2eefe; }
li:nth-child(even) { background: #fff; }`},
     {label:{ja:"3番目だけ強調",en:"Emphasize only the 3rd"}, code:`ul { list-style: none; padding: 0; width: 240px; }
li { padding: 12px 16px; }
li:nth-child(3) { background: #7b2ff7; color: #fff; font-weight: bold; }`}]},

  {name:{ja:"〜以外を狙う",en:"Target all but"}, sub:":not()", desc:{ja:`<b>:not()</b>は「<b>◯◯以外</b>」を狙うセレクタ。<br>例：li:not(:last-child) は「最後以外の項目」＝これに下線を引けば、末尾だけ線が消えてキレイに区切れます。「1つを除いて全部」に適用したい時、余計な打ち消しCSSを書かずに済みます。`,en:`<b>:not()</b> targets "<b>everything except</b>". <br>Example: li:not(:last-child) is "every item but the last" — underline it and the last item alone has no line, dividing them cleanly. When you want "all but one", it saves writing extra override CSS.`},
   tags:[":not",":last-child"], prep:[
     {s:'li:not(:last-child)',d:{ja:'最後の項目<b>以外</b>に適用。',en:'Applies to <b>all but</b> the last item.'}},
     {s:':not(.active)',d:{ja:'activeが付いていない要素に適用。',en:'Applies to elements without active.'}}],
   html:{ja:`<ul>
  <li>1つ目</li><li>2つ目</li><li>3つ目</li><li>最後</li>
</ul>`,en:`<ul>
  <li>First</li><li>Second</li><li>Third</li><li>Last</li>
</ul>`},
   variations:[{label:{ja:"末尾だけ線を消す",en:"Remove only the last line"}, code:`ul { list-style: none; padding: 0; width: 220px; }
li { padding: 12px 4px; }
li:not(:last-child) { border-bottom: 1px solid #ddd; }`}]},

  {name:{ja:"アニメの遅延",en:"Animation delay"}, sub:"animation-delay", desc:{ja:`<b>animation-delay</b>で、アニメの<b>開始を遅らせ</b>られます。複数の要素に少しずつ遅延を付けると、<b>波打つ</b>ような動きに。<br>例：3つの点を 0秒・0.15秒・0.3秒 とずらして跳ねさせると「読み込み中…」の定番アニメになります。`,en:`<b>animation-delay</b> can <b>delay the start</b> of an animation. Adding a slightly larger delay to each of several elements creates a <b>rippling</b> motion.<br>Example: bounce three dots offset by 0s, 0.15s, 0.3s and you get the classic "loading…" animation.`},
   tags:["animation-delay"], prep:[
     {s:'animation-delay: 0.15s;',d:{ja:'アニメの開始を0.15秒遅らせる。',en:'Delays the animation start by 0.15s.'}},
     {s:{ja:'ずらす',en:'stagger'},d:{ja:'少しずつ遅延を付けると波打つ動きに。',en:'Small increasing delays make a rippling motion.'}}],
   html:`<div class="dots"><span></span><span></span><span></span></div>`,
   variations:[{label:{ja:"波打つ3点",en:"Three rippling dots"}, code:`@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-16px); }
}
.dots { display: flex; gap: 10px; justify-content: center; padding: 20px; }
.dots span {
  width: 16px; height: 16px; border-radius: 50%; background: #7b2ff7;
  animation: bounce .7s ease-in-out infinite;
}
.dots span:nth-child(2) { animation-delay: .15s; }
.dots span:nth-child(3) { animation-delay: .3s; }`}]}
]},

{name:"特級", items:[
  {name:{ja:"Gridで格子に並べる",en:"Grid layout"}, sub:"display: grid", desc:{ja:`<b>display: grid</b>と<b>grid-template-columns</b>で、要素を<b>格子（マス目）</b>状に並べます。<b>repeat(3, 1fr)</b>は「等幅の列を3つ」＝3等分。<br>flexが「1方向の並び」なら、gridは「行と列の2次元」が得意。カード一覧・ギャラリーの定番です。1fr は「余りを分け合う」単位。`,en:`<b>display: grid</b> with <b>grid-template-columns</b> lays elements in a <b>grid</b>. <b>repeat(3, 1fr)</b> = "three equal-width columns" = 3 even parts.<br>If flex is "one direction", grid excels at "2D rows and columns". A classic for card lists and galleries. 1fr is a unit that "shares the leftover".`},
   tags:["grid","grid-template-columns","fr"], prep:[
     {s:'display: grid;',d:{ja:'格子レイアウトにする。',en:'Turns on grid layout.'}},
     {s:'grid-template-columns: repeat(3, 1fr);',d:{ja:'等幅の<b>3列</b>を作る。',en:'Makes <b>3 equal columns</b>.'}},
     {s:'gap: 12px;',d:{ja:'マス目どうしのすき間。',en:'The gap between cells.'}}],
   html:`<div class="grid">
  <div class="c">1</div><div class="c">2</div><div class="c">3</div>
  <div class="c">4</div><div class="c">5</div><div class="c">6</div>
</div>`,
   variations:[
     {label:{ja:"3列に並べる",en:"Three columns"}, code:`.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}
.c { background: #7b2ff7; color: #fff; padding: 24px; border-radius: 8px; text-align: center; }`},
     {label:{ja:"2:1の幅",en:"2:1 widths"}, code:`.grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 12px;
}
.c { background: #7b2ff7; color: #fff; padding: 24px; border-radius: 8px; text-align: center; }`}]},

  {name:{ja:"伸び縮みする値",en:"Fluid values"}, sub:"clamp() / min() / max()", desc:{ja:`<b>clamp(最小, 理想, 最大)</b>は値を<b>範囲内で自動調整</b>する関数。<br>例：font-size: clamp(16px, 5vw, 40px) は「最小16px・画面幅の5%を理想・最大40px」。@mediaを書かずに滑らかに変わる文字が作れます。<b>vw</b>は画面幅に対する割合（100vw＝画面いっぱい）。`,en:`<b>clamp(min, ideal, max)</b> <b>auto-adjusts a value within a range</b>.<br>Example: font-size: clamp(16px, 5vw, 40px) means "min 16px, ideal 5% of screen width, max 40px". Text that scales smoothly without @media. <b>vw</b> is a ratio of screen width (100vw = full width).`},
   tags:["clamp","vw","min/max"], prep:[
     {s:'clamp(16px, 5vw, 40px)',d:{ja:'最小・理想・最大。範囲内で自動調整。',en:'Min, ideal, max. Auto-adjusts within range.'}},
     {s:'width: min(90%, 600px)',d:{ja:'90%と600pxの<b>小さい方</b>。広がりすぎ防止。',en:'The <b>smaller</b> of 90% and 600px. Prevents over-widening.'}}],
   html:{ja:`<h1 class="title">幅で伸び縮み</h1>
<div class="box">min(90%, 400px)</div>`,en:`<h1 class="title">Scales with width</h1>
<div class="box">min(90%, 400px)</div>`},
   variations:[
     {label:{ja:"自動で伸縮",en:"Auto-scale"}, code:`.title {
  font-size: clamp(20px, 6vw, 48px);
  color: #7b2ff7;
}
.box {
  width: min(90%, 400px);
  margin-top: 16px; padding: 20px;
  background: #7b2ff7; color: #fff; border-radius: 10px; text-align: center;
}`}]},

  {name:{ja:"縦横比を保つ",en:"Keep aspect ratio"}, sub:"aspect-ratio", desc:{ja:`<b>aspect-ratio</b>で要素の<b>縦横の比率</b>を固定します。<b>16 / 9</b>は動画、<b>1 / 1</b>は正方形。<br>幅が変わっても比率が崩れないので、サムネイルや埋め込み動画に最適。昔は難しいテクが必要でしたが、今はこれ1行で済みます。`,en:`<b>aspect-ratio</b> fixes an element's <b>width-to-height ratio</b>. <b>16 / 9</b> for video, <b>1 / 1</b> for a square.<br>The ratio holds even as width changes, ideal for thumbnails and embedded videos. This used to need tricky techniques; now it's one line.`},
   tags:["aspect-ratio"], prep:[
     {s:'aspect-ratio: 16 / 9;',d:{ja:'横16：縦9の比率を保つ。',en:'Keeps a 16:9 (width:height) ratio.'}},
     {s:'aspect-ratio: 1 / 1;',d:{ja:'正方形を保つ。',en:'Keeps a square.'}}],
   html:`<div class="video">16 : 9</div>`,
   variations:[
     {label:{ja:"比率を固定",en:"Fix the ratio"}, code:`.video {
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #7b2ff7; color: #fff;
  display: grid; place-items: center;
  border-radius: 12px;
}`}]},

  {name:{ja:"スクロールで固定",en:"Stick on scroll"}, sub:"position: sticky", desc:{ja:`<b>position: sticky</b>は、スクロールしても<b>指定位置でピタッと止まる</b>配置。<b>top: 0</b>と組むと、見出しやヘッダーが画面上部に貼り付きます。<br>fixedとの違い：stickyは<b>親要素の範囲内でだけ</b>貼り付きます。プレビュー内をスクロールすると効果が見えます。`,en:`<b>position: sticky</b> is placement that <b>sticks at a set spot even while scrolling</b>. Combined with <b>top: 0</b>, a heading or header pins to the top of the screen.<br>Difference from fixed: sticky sticks <b>only within its parent's range</b>. Scroll inside the preview to see it.`},
   tags:["position","sticky","top"], prep:[
     {s:'position: sticky; top: 0;',d:{ja:'上端まで来たら、そこで固定される。',en:'Once it reaches the top, it stays there.'}},
     {s:{ja:'fixedとの違い',en:'vs. fixed'},d:{ja:'stickyは親の範囲内でだけ貼り付く。',en:"sticky sticks only within the parent's range."}}],
   html:{ja:`<div class="head">貼り付くヘッダー</div>
<p>スクロールしてね</p>
<div style="height:400px"></div>
<p>下のほうの文章</p>`,en:`<div class="head">Sticky header</div>
<p>Scroll down</p>
<div style="height:400px"></div>
<p>Text further down</p>`},
   variations:[
     {label:{ja:"貼り付く見出し",en:"Sticky heading"}, code:`.head {
  position: sticky; top: 0;
  background: #7b2ff7; color: #fff;
  padding: 16px; border-radius: 0 0 8px 8px;
}`}]},

  {name:{ja:"画像の収め方",en:"Fitting images"}, sub:"object-fit", desc:{ja:`枠にはめた画像が<b>ゆがまないように</b>収めるのが<b>object-fit</b>。<b>cover</b>は枠いっぱいに（はみ出しは切る）、<b>contain</b>は全体が見えるように収めます（余白ができる）。<br>正方形サムネに横長写真を入れるなら cover が定番。imgに width/height を指定した上で使います。`,en:`<b>object-fit</b> fits an image into a frame <b>without distortion</b>. <b>cover</b> fills the frame (crops overflow); <b>contain</b> fits the whole image (leaving gaps).<br>For a wide photo in a square thumbnail, cover is the classic. Use it after setting the img's width/height.`},
   tags:["object-fit","cover","contain"], prep:[
     {s:'object-fit: cover;',d:{ja:'比率を保ち枠を<b>埋める</b>（端は切れる）。',en:'Keeps ratio and <b>fills</b> the frame (edges get cropped).'}},
     {s:'object-fit: contain;',d:{ja:'比率を保ち<b>全体を見せる</b>（余白ができる）。',en:'Keeps ratio and <b>shows the whole image</b> (leaves gaps).'}}],
   html:`<img class="a" src="https://placehold.co/400x200/7b2ff7/fff?text=cover" alt="">
<img class="b" src="https://placehold.co/400x200/e5484d/fff?text=contain" alt="">`,
   variations:[
     {label:{ja:"枠に収める",en:"Fit into frame"}, code:`img {
  width: 150px; height: 150px;
  border-radius: 12px; margin-right: 12px;
}
.a { object-fit: cover; }
.b { object-fit: contain; background: #eee; }`}]},

  {name:{ja:"自動で折り返す格子",en:"Auto-wrapping grid"}, sub:"auto-fit / minmax", desc:{ja:`@mediaを書かずに<b>自動で折り返す格子</b>を作る現代技。<b>repeat(auto-fit, minmax(120px, 1fr))</b>は「1マス最低120px、入るだけ横に並べ、余りは均等に伸ばす」。<br>画面が狭くなると自動で列数が減ります。カード一覧を1行でレスポンシブにできる魔法の呪文。プレビュー幅を変えて確認を。`,en:`A modern technique for a <b>grid that wraps automatically</b> without @media. <b>repeat(auto-fit, minmax(120px, 1fr))</b> means "each cell at least 120px, fit as many across as possible, stretch the leftover evenly".<br>As the screen narrows, the column count drops automatically. A magic spell that makes a card list responsive in one line. Change the preview width to see it.`},
   tags:["auto-fit","minmax"], prep:[
     {s:'repeat(auto-fit, minmax(120px, 1fr))',d:{ja:'最小120pxで入るだけ並べ、自動で折り返す。',en:'Fits as many as possible at min 120px and wraps automatically.'}}],
   html:`<div class="grid">
  <div class="c">1</div><div class="c">2</div><div class="c">3</div>
  <div class="c">4</div><div class="c">5</div><div class="c">6</div>
</div>`,
   variations:[{label:{ja:"自動レスポンシブ格子",en:"Auto-responsive grid"}, code:`.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  gap: 12px;
}
.c { background: #7b2ff7; color: #fff; padding: 28px; border-radius: 8px; text-align: center; }`}]},

  {name:{ja:"すりガラス効果",en:"Frosted glass effect"}, sub:"backdrop-filter", desc:{ja:`<b>backdrop-filter: blur()</b>は要素の<b>背後をぼかす</b>効果。半透明の背景と合わせると、今どきの<b>すりガラス</b>風UIに。<br>ポイント：背景を rgba などで<b>半透明</b>にすること（透けていないと後ろがぼけない）。Safari対策で -webkit- も併記します。`,en:`<b>backdrop-filter: blur()</b> <b>blurs what's behind</b> an element. Combined with a semi-transparent background, it gives a modern <b>frosted-glass</b> UI.<br>Point: make the background <b>semi-transparent</b> with rgba (nothing blurs if it isn't see-through). Add -webkit- too for Safari.`},
   tags:["backdrop-filter","blur"], prep:[
     {s:'backdrop-filter: blur(10px);',d:{ja:'要素の後ろを10pxぼかす。',en:'Blurs what is behind the element by 10px.'}},
     {s:'background: rgba(…,0.2);',d:{ja:'半透明にして後ろを透けさせるのが前提。',en:'It must be semi-transparent so the back shows through.'}}],
   html:{ja:`<div class="glass">すりガラス</div>`,en:`<div class="glass">Frosted glass</div>`},
   variations:[{label:{ja:"すりガラス",en:"Frosted glass"}, code:`body {
  min-height: 200px; display: grid; place-items: center;
  background: linear-gradient(45deg, #7b2ff7, #4fe6e6, #f5a623);
}
.glass {
  padding: 30px 50px; border-radius: 16px;
  background: rgba(255,255,255,0.2);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  color: #fff; font-size: 20px;
  border: 1px solid rgba(255,255,255,0.4);
}`}]},

  {name:{ja:"文字を…で省略",en:"Truncate with …"}, sub:"text-overflow", desc:{ja:`長い文字が枠からはみ出す時、<b>末尾を「…」で省略</b>できます。3点セット：<b>white-space: nowrap</b>（折り返さない）＋<b>overflow: hidden</b>（隠す）＋<b>text-overflow: ellipsis</b>（…を付ける）。<br>ニュース見出しやファイル名を1行に収める定番。3つ揃わないと効きません。`,en:`When long text overflows its box, you can <b>truncate the end with "…"</b>. The three-part set: <b>white-space: nowrap</b> (no wrapping) + <b>overflow: hidden</b> (hide) + <b>text-overflow: ellipsis</b> (add …).<br>A classic for keeping news headlines or file names on one line. It only works with all three.`},
   tags:["text-overflow","ellipsis","nowrap"], prep:[
     {s:'white-space: nowrap;',d:{ja:'折り返しを止めて1行にする。',en:'Stops wrapping to keep one line.'}},
     {s:'text-overflow: ellipsis;',d:{ja:'省略した所に「…」を出す。',en:'Shows "…" where it truncates.'}}],
   html:{ja:`<p class="title">とても長いニュースの見出しがここに入っていて枠に収まりきりません</p>`,en:`<p class="title">A very long news headline goes here and does not fit in the box at all</p>`},
   variations:[{label:{ja:"1行で省略",en:"Truncate on one line"}, code:`.title {
  width: 240px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background: #f2eefe; padding: 12px; border-radius: 8px;
}`}]}
]},

{name:"応用", items:[
  {name:{ja:"ボタンを作る",en:"Building a button"}, sub:{ja:"button の仕上げ",en:"finishing a button"}, desc:{ja:`色・余白・角丸・影・transition・hoverを組み合わせて、<b>押したくなるボタン</b>を仕上げます。<br>ホバーで少し浮き、押した時（:active）に少し沈む…といった演出。cursor: pointer で「押せる」感を出すのも忘れずに。実務のボタンはこの組み合わせが基本形です。`,en:`Combine color, spacing, rounded corners, shadow, transition, and hover to finish a <b>button you want to press</b>.<br>Effects like lifting slightly on hover and sinking slightly on press (:active). Don't forget cursor: pointer for a "clickable" feel. Real-world buttons use this combo as the base.`},
   tags:["button","hover","transition"], prep:[
     {s:'cursor: pointer;',d:{ja:'指マークで「押せる」ことを伝える。',en:'Signals "clickable" with a hand cursor.'}},
     {s:':active',d:{ja:'押している間のスタイル（沈む演出）。',en:'The style while pressed (the sink effect).'}}],
   html:{ja:`<button class="btn">送信する</button>`,en:`<button class="btn">Send</button>`},
   variations:[
     {label:{ja:"浮くボタン",en:"Floating button"}, code:`.btn {
  padding: 14px 32px; font-size: 16px; font-weight: bold;
  border: none; border-radius: 10px; cursor: pointer;
  color: #fff; background: #7b2ff7;
  box-shadow: 0 6px 16px rgba(123,47,247,.4);
  transition: .2s;
}
.btn:hover { transform: translateY(-2px); box-shadow: 0 10px 22px rgba(123,47,247,.55); }
.btn:active { transform: translateY(0); }`},
     {label:{ja:"枠だけボタン",en:"Outline button"}, code:`.btn {
  padding: 14px 32px; font-size: 16px; font-weight: bold;
  background: transparent; color: #7b2ff7;
  border: 2px solid #7b2ff7; border-radius: 10px; cursor: pointer;
  transition: .2s;
}
.btn:hover { background: #7b2ff7; color: #fff; }`}]},

  {name:{ja:"カードを作る",en:"Building a card"}, sub:{ja:"card の仕上げ",en:"finishing a card"}, desc:{ja:`画像・見出し・本文をまとめた<b>カード</b>を、影と角丸で「浮いた1枚」に見せます。<br>ポイント：<b>overflow: hidden</b>を付けて、角丸から画像の角がはみ出さないように。内側は padding で余白をとります。商品一覧・記事一覧の主役です。`,en:`Make a <b>card</b> combining image, heading, and body look like a "floating sheet" with shadow and rounded corners.<br>Point: add <b>overflow: hidden</b> so the image corners don't stick out past the rounded corners. Use padding for inner spacing. The star of product and article lists.`},
   tags:["card","box-shadow","overflow"], prep:[
     {s:'overflow: hidden;',d:{ja:'角丸から画像の角がはみ出さないように切る。',en:"Clips so image corners don't stick past the rounded corners."}},
     {s:'box-shadow',d:{ja:'浮遊感を出す影。',en:'A shadow that gives a floating feel.'}}],
   html:{ja:`<div class="card">
  <img src="https://placehold.co/280x140/7b2ff7/fff?text=Photo" alt="">
  <div class="body">
    <h3>カードの見出し</h3>
    <p>ここに説明文が入ります。</p>
  </div>
</div>`,en:`<div class="card">
  <img src="https://placehold.co/280x140/7b2ff7/fff?text=Photo" alt="">
  <div class="body">
    <h3>Card heading</h3>
    <p>Description text goes here.</p>
  </div>
</div>`},
   variations:[
     {label:{ja:"画像つきカード",en:"Card with image"}, code:`.card {
  width: 260px; background: #fff;
  border-radius: 14px; overflow: hidden;
  box-shadow: 0 8px 24px rgba(0,0,0,.14);
}
.card img { width: 100%; display: block; }
.body { padding: 16px; }
.body h3 { margin: 0 0 8px; }
.body p { margin: 0; color: #666; line-height: 1.6; }`}]},

  {name:{ja:"ナビバーを作る",en:"Building a navbar"}, sub:{ja:"navbar の仕上げ",en:"finishing a navbar"}, desc:{ja:`ページ上部の<b>ナビゲーションバー</b>を仕上げます。<b>flex</b>でロゴを左、メニューを右に。決め手は<b>justify-content: space-between</b>（両端に寄せる）と<b>align-items: center</b>（縦中央）。<br>メニューの黒丸は list-style: none で消します。`,en:`Finish a <b>navigation bar</b> at the top of the page. Use <b>flex</b> to put the logo on the left and menu on the right. The keys are <b>justify-content: space-between</b> (push to both ends) and <b>align-items: center</b> (vertical center).<br>Remove the menu bullets with list-style: none.`},
   tags:["flex","space-between","nav"], prep:[
     {s:'justify-content: space-between;',d:{ja:'子要素を<b>両端</b>に振り分ける。',en:'Splits children to <b>both ends</b>.'}},
     {s:'align-items: center;',d:{ja:'縦位置を中央にそろえる。',en:'Vertically centers them.'}}],
   html:{ja:`<nav class="bar">
  <span class="logo">LOGO</span>
  <ul class="menu">
    <li><a href="#">ホーム</a></li>
    <li><a href="#">概要</a></li>
    <li><a href="#">連絡</a></li>
  </ul>
</nav>`,en:`<nav class="bar">
  <span class="logo">LOGO</span>
  <ul class="menu">
    <li><a href="#">Home</a></li>
    <li><a href="#">Overview</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>`},
   variations:[
     {label:{ja:"ヘッダーメニュー",en:"Header menu"}, code:`.bar {
  display: flex; justify-content: space-between; align-items: center;
  padding: 16px 24px; background: #7b2ff7;
}
.logo { color: #fff; font-weight: bold; font-size: 20px; }
.menu { list-style: none; display: flex; gap: 20px; margin: 0; padding: 0; }
.menu a { color: #fff; text-decoration: none; }
.menu a:hover { text-decoration: underline; }`}]},

  {name:{ja:"入力欄の見た目",en:"Styling inputs"}, sub:"input / :focus", desc:{ja:`フォームの<b>入力欄</b>を見やすく整えます。<b>:focus</b>（入力中）のとき枠の色を変えると、今どこを入力しているか一目瞭然。<br>コツ：outline: none で標準枠を消し、自前の枠＋淡い光（box-shadow）に置き換えます。ただし消しっぱなしは避け、必ず代わりの目印を付けます。`,en:`Make form <b>inputs</b> look clear. Changing the border color on <b>:focus</b> (while typing) makes it obvious where you're entering.<br>Tip: remove the default outline with outline: none and replace it with your own border + a soft glow (box-shadow). But never just remove it — always add a replacement marker.`},
   tags:["input",":focus","outline"], prep:[
     {s:'input:focus { … }',d:{ja:'入力欄が<b>選択中</b>のときの見た目。',en:'The look while the input is <b>focused</b>.'}},
     {s:{ja:'box-shadow で光らせる',en:'glow with box-shadow'},d:{ja:'フォーカスの目印を自前で用意。',en:'Provide your own focus indicator.'}}],
   html:{ja:`<input class="field" type="text" placeholder="お名前を入力">`,en:`<input class="field" type="text" placeholder="Enter your name">`},
   variations:[
     {label:{ja:"フォーカスで反応",en:"React on focus"}, code:`.field {
  width: 260px; padding: 12px 14px; font-size: 16px;
  border: 2px solid #ddd; border-radius: 8px;
  outline: none; transition: .2s;
}
.field:focus {
  border-color: #7b2ff7;
  box-shadow: 0 0 0 3px rgba(123,47,247,.2);
}`}]},

  {name:{ja:"ローディング表示",en:"Loading display"}, sub:"spinner", desc:{ja:`読み込み中を示す<b>スピナー</b>。円の一部だけ色を付け、@keyframesで回転させます。<br>作り方：正方形に border-radius:50% で円を作り、border を薄い色に、border-top だけ濃い色にして回転。待ち時間の体感をやわらげる定番パーツです。`,en:`A <b>spinner</b> showing loading. Color only part of a circle and rotate it with @keyframes.<br>How: make a circle with border-radius:50% on a square, a light border, and only border-top a dark color, then rotate. A classic part to ease the feel of waiting.`},
   tags:["spinner","@keyframes","animation"], prep:[
     {s:{ja:'border-top-color だけ濃く',en:'darken only border-top-color'},d:{ja:'円の一部だけ色を付けて回すと弧に見える。',en:'Coloring only part of the circle makes an arc as it spins.'}},
     {s:'animation: spin ... infinite',d:{ja:'ずっと回転させる。',en:'Rotates forever.'}}],
   html:`<div class="spinner"></div>`,
   variations:[
     {label:{ja:"回転スピナー",en:"Rotating spinner"}, code:`@keyframes spin { to { transform: rotate(360deg); } }
.spinner {
  width: 48px; height: 48px; margin: 30px auto;
  border-radius: 50%;
  border: 6px solid #eee;
  border-top-color: #7b2ff7;
  animation: spin .8s linear infinite;
}`}]},

  {name:{ja:"ツールチップ",en:"Tooltip"}, sub:"tooltip", desc:{ja:`マウスを乗せると出る<b>小さな説明ふきだし</b>。<b>::after</b>で吹き出しを作り、普段は opacity:0 で隠し、<b>:hover</b>で表示します。<br><b>content: attr(data-tip)</b> を使うと、HTML側の data-tip 属性の文字を吹き出しに出せて再利用しやすくなります。`,en:`A <b>small explanatory bubble</b> that appears on hover. Make the bubble with <b>::after</b>, hide it with opacity:0 normally, and show it on <b>:hover</b>.<br>Using <b>content: attr(data-tip)</b> lets you show the text from the HTML data-tip attribute in the bubble, which is reusable.`},
   tags:["tooltip","::after","attr()"], prep:[
     {s:'content: attr(data-tip)',d:{ja:'HTMLのdata-tip属性の文字を吹き出しに表示。',en:'Shows the HTML data-tip attribute text in the bubble.'}},
     {s:{ja:'opacity 0 → :hoverで1',en:'opacity 0 → 1 on :hover'},d:{ja:'普段は隠し、乗せた時だけ見せる。',en:'Hidden normally, shown only on hover.'}}],
   html:{ja:`<span class="tip" data-tip="これは説明文です">？ホバーしてね</span>`,en:`<span class="tip" data-tip="This is an explanation">? Hover me</span>`},
   variations:[
     {label:{ja:"ホバーで説明",en:"Explain on hover"}, code:`.tip {
  position: relative; color: #7b2ff7; cursor: help;
  border-bottom: 1px dashed #7b2ff7;
}
.tip::after {
  content: attr(data-tip);
  position: absolute; bottom: 150%; left: 0;
  background: #333; color: #fff; padding: 6px 10px; border-radius: 6px;
  font-size: 13px; white-space: nowrap;
  opacity: 0; transition: .2s; pointer-events: none;
}
.tip:hover::after { opacity: 1; }`}]},

  {name:{ja:"トグルスイッチ",en:"Toggle switch"}, sub:":checked", desc:{ja:`ON/OFFの<b>スイッチ</b>。丸いレールの中に丸いツマミを置き、<b>:checked</b>（チェックON）の時にツマミを右へ動かします。<br>テクニック：本物のチェックボックスを display:none で隠し、その<b>隣</b>（+ セレクタ）のラベルを装飾。設定画面の「通知オン/オフ」などに使います。`,en:`An ON/OFF <b>switch</b>. Place a round knob in a rounded rail and move it right when <b>:checked</b> (checkbox on).<br>Technique: hide the real checkbox with display:none and style the label <b>next to it</b> (+ selector). Used for things like "notifications on/off" in settings.`},
   tags:[":checked","+","transition"], prep:[
     {s:':checked',d:{ja:'チェックが入った状態を狙う疑似クラス。',en:'A pseudo-class targeting the checked state.'}},
     {s:{ja:'+ （隣接セレクタ）',en:'+ (adjacent selector)'},d:{ja:'すぐ隣の要素を狙う（チェック時に隣を動かす）。',en:'Targets the immediately next element (move the neighbor when checked).'}}],
   html:{ja:`<label class="switch">
  <input type="checkbox" checked>
  <span class="slider"></span>
</label>
<p>クリックで切り替え</p>`,en:`<label class="switch">
  <input type="checkbox" checked>
  <span class="slider"></span>
</label>
<p>Click to toggle</p>`},
   variations:[{label:{ja:"ON/OFFスイッチ",en:"ON/OFF switch"}, code:`.switch input { display: none; }
.slider {
  display: inline-block; width: 52px; height: 28px;
  background: #ccc; border-radius: 999px; position: relative;
  transition: .25s; cursor: pointer;
}
.slider::before {
  content: ""; position: absolute; top: 3px; left: 3px;
  width: 22px; height: 22px; background: #fff; border-radius: 50%;
  transition: .25s;
}
.switch input:checked + .slider { background: #7b2ff7; }
.switch input:checked + .slider::before { transform: translateX(24px); }`}]},

  {name:{ja:"バッジ・タグ",en:"Badges & tags"}, sub:"badge", desc:{ja:`「NEW」「SALE」などの<b>小さなラベル</b>。<b>display: inline-block</b>で文字幅ぴったりの箱にし、丸めて色を付けます。<br>コツ：font-size は12px前後、padding は小さめ、border-radius: 999px で角を完全に丸めるとバッジらしくなります。`,en:`<b>Small labels</b> like "NEW" or "SALE". Use <b>display: inline-block</b> to make a box exactly as wide as the text, then round it and color it.<br>Tip: font-size around 12px, small padding, and border-radius: 999px to fully round the corners makes it look like a badge.`},
   tags:["badge","inline-block"], prep:[
     {s:'display: inline-block;',d:{ja:'中身の幅ぶんだけの箱にする。',en:'Makes a box only as wide as its content.'}},
     {s:'border-radius: 999px;',d:{ja:'角を完全に丸めてピル形に。',en:'Fully rounds the corners into a pill.'}}],
   html:{ja:`<span class="tag new">NEW</span>
<span class="tag sale">SALE</span>
<span class="tag info">お知らせ</span>`,en:`<span class="tag new">NEW</span>
<span class="tag sale">SALE</span>
<span class="tag info">Notice</span>`},
   variations:[{label:{ja:"ラベルを並べる",en:"Line up labels"}, code:`.tag {
  display: inline-block;
  padding: 4px 12px; border-radius: 999px;
  color: #fff; font-size: 12px; font-weight: bold;
}
.new { background: #7b2ff7; }
.sale { background: #e5484d; }
.info { background: #2f80ed; }`}]},

  {name:{ja:"モーダル風オーバーレイ",en:"Modal overlay"}, sub:"overlay", desc:{ja:`画面を暗くして中央にダイアログを出す<b>モーダル</b>の見た目。半透明の黒い<b>オーバーレイ</b>を全面に敷き（position + rgba）、その上に白いパネルを flex で中央配置。<br>開閉のJSは別途必要ですが、<b>見た目はCSSだけ</b>で作れます。inset:0 は top/right/bottom/left:0 の省略形。`,en:`The look of a <b>modal</b> that darkens the screen and shows a dialog in the center. Lay a semi-transparent black <b>overlay</b> over everything (position + rgba) and center a white panel on it with flex.<br>The open/close JS is separate, but the <b>look is pure CSS</b>. inset:0 is shorthand for top/right/bottom/left:0.`},
   tags:["overlay","rgba","flex"], prep:[
     {s:'position: fixed; inset: 0;',d:{ja:'画面全面を覆う（inset:0は四辺0の省略）。',en:'Covers the whole screen (inset:0 = all four sides 0).'}},
     {s:'background: rgba(0,0,0,0.5);',d:{ja:'半透明の黒で後ろを暗くする。',en:'Darkens the back with semi-transparent black.'}}],
   html:{ja:`<div class="overlay">
  <div class="modal">
    <h3>削除しますか？</h3>
    <p>この操作は取り消せません。</p>
    <button class="ok">削除</button>
    <button class="cancel">やめる</button>
  </div>
</div>`,en:`<div class="overlay">
  <div class="modal">
    <h3>Delete this?</h3>
    <p>This action can't be undone.</p>
    <button class="ok">Delete</button>
    <button class="cancel">Cancel</button>
  </div>
</div>`},
   variations:[{label:{ja:"確認ダイアログ",en:"Confirm dialog"}, code:`.overlay {
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex; justify-content: center; align-items: center;
}
.modal {
  background: #fff; padding: 28px; border-radius: 14px;
  text-align: center; width: 260px;
}
.modal h3 { margin: 0 0 8px; }
.modal p { color: #666; }
.modal button { padding: 10px 18px; border: none; border-radius: 8px; margin: 8px 4px 0; cursor: pointer; }
.ok { background: #e5484d; color: #fff; }
.cancel { background: #eee; }`}]}
]}
];
