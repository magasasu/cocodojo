/* =========================================================================
   ★ 勉強項目の追加はこの CATEGORIES に足すだけ ★
   1カテゴリ = { name, items:[ item, ... ] }
   1 item = {
     name, sub, desc, tags:[...], prep:[{s,d},...],
     html?(省略=BASE), css?(省略=BASE),
     variations:[ { label, code }, ... ]
   }
   ========================================================================= */
/* 土台HTML：item.html が無い項目で使う。英語表示でボタン文字が日本語のままにならないよう {ja,en} で持つ */
const BASE_HTML={ja:`<button id="test" class="test">テスト</button>`,en:`<button id="test" class="test">Test</button>`};
const BASE_CSS=`body {
  display: grid;
  place-items: center;
  min-height: 74vh;
}

.test {
  padding: 15px 40px;
  font-size: 20px;
  border: none;
  border-radius: 12px;
  background: #8b5cf6;
  color: #fff;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(139,92,246,.4);
}`;

/* HTMLトラックで item.css が無い項目のCSS窓に入れる土台。
   空文字だとCSS窓が真っ白のまま残り、画面の一区画が常に無意味になっていた。
   触って結果が変わる最小の内容にして、そのまま実験台として使えるようにする */
const BASE_CSS_MARKUP=`body {
  font-family: system-ui, sans-serif;
  line-height: 1.9;
  color: #222;
}`;

const CATEGORIES=[
/* ============ 基礎編：本当に最初の一歩 ============ */
{name:"基礎", items:[
  {name:{ja:"JSとは？",en:"What is JS?"}, sub:{ja:"最初に読む",en:"Read me first"}, desc:{ja:`<b>JavaScript（JS）</b>は、Webページに<b>「動き」</b>をつける言語です。HTMLが骨組み・CSSが見た目なら、<b>JSは動作</b>（クリックで開く／数を数える／時間で変わる…）を担当します。ボタンを押すと反応する、あれは全部JSです！<br>※ 結果が出る場所は2つ：<b>文字はログ欄</b>、<b>色や動きはプレビュー欄</b>。項目によって見る場所が変わります。`,en:`<b>JavaScript (JS)</b> is the language that adds <b>"motion"</b> to a web page. If HTML is the skeleton and CSS is the look, then <b>JS handles behavior</b> (open on click / count numbers / change over time…). Every button that reacts when you press it is JS!<br>* Results appear in two places: <b>text goes to the log pane</b>, <b>colors and motion go to the preview pane</b>. Which one to watch depends on the item.`},
   tags:["JavaScript",{ja:"入門",en:"intro"}], prep:[
     {s:'HTML',d:{ja:'ページの<b>骨組み</b>（文章や部品）。',en:'The <b>skeleton</b> of the page (text and parts).'}},
     {s:'CSS',d:{ja:'<b>見た目</b>（色・大きさ・配置）。',en:'The <b>look</b> (color, size, layout).'}},
     {s:'JavaScript',d:{ja:'<b>動き</b>（押す・変わる・計算する）。',en:'The <b>behavior</b> (press, change, calculate).'}}],
   variations:[{label:{ja:"まず動かしてみる",en:"Run it first"}, code:{ja:`// これがJavaScript。結果は「ログ」欄に出ます
console.log("JavaScript へ ようこそ！");
console.log("これから、動きの作り方を学びます");
// 「実行」ボタンやバリエーションで動きます`,en:`// This is JavaScript. Results appear in the "log" pane
console.log("Welcome to JavaScript!");
console.log("Let's learn how to create motion");
// Run it with the "Run" button, or the variations`}}]},

  {name:{ja:"まず1行 動かす",en:"Run your first line"}, sub:{ja:"はじめの一歩",en:"The first step"}, desc:{ja:`プログラムとは「コンピュータへの<b>命令</b>」を上から順に書いたもの。まずは有名な <b>console.log</b> で文字を表示します。<br><b>使い方</b>：<b>console.log( )</b> と書き、<b>( ) の中</b>に表示したいものを入れる。文字は必ず <b>" "</b> で囲む（囲み忘れはエラーの定番）。結果は<b>「ログ」欄</b>に出ます。`,en:`A program is a set of <b>commands</b> to the computer, written top to bottom. Let's start with the famous <b>console.log</b> to display text.<br><b>How to use</b>: write <b>console.log( )</b> and put what you want to show <b>inside the ( )</b>. Text must always be wrapped in <b>" "</b> (forgetting them is a classic error). Results appear in the <b>"log" pane</b>.`},
   tags:["console.log"], prep:[
     {s:'console.log("…")',d:{ja:'( ) の中の文字を<b>表示</b>する命令。「コンソール・ログ」と読む。',en:'A command that <b>displays</b> the text inside the ( ). Read as "console log".'}},
     {s:{ja:'結果はどこ？',en:'Where is the result?'},d:{ja:'<b>「ログ」欄</b>に出ます。',en:'It appears in the <b>"log"</b> pane.'}}],
   variations:[
     {label:{ja:"こんにちは",en:"Hello"}, code:{ja:`// これがJavaScriptの最初の1行。
// 「ログ」欄を見てね
console.log("こんにちは！");`,en:`// This is your first line of JavaScript.
// Watch the "log" pane
console.log("Hello!");`}},
     {label:{ja:"自己紹介",en:"Introduce yourself"}, code:{ja:`console.log("わたしの名前は たろう です");
console.log("JavaScript を 勉強中です");`,en:`console.log("My name is Taro");
console.log("I'm studying JavaScript");`}}]},

  {name:{ja:"なぜログに出すの？",en:"Why log things?"}, sub:{ja:"確認の道具",en:"A checking tool"}, desc:{ja:`console.log は<b>「今どうなってる？」を確かめる道具</b>です。プログラムの中身は目に見えないので、途中の値をログに出して<b>正しく動いているか確認</b>します。<br><b>使い方</b>：<b>カンマ</b>で区切ると複数を一度に出せる（例: console.log("答えは", ans)）。プロも毎日使う超重要テクニックです。`,en:`console.log is a <b>tool to check "what's happening right now?"</b>. A program's insides are invisible, so you log intermediate values to <b>confirm it works correctly</b>.<br><b>How to use</b>: separate with a <b>comma</b> to show several at once (e.g. console.log("answer is", ans)). Even pros use this every day — a hugely important technique.`},
   tags:["console.log"], prep:[
     {s:{ja:'console.log(調べたいもの)',en:'console.log(thing to inspect)'},d:{ja:'変数や計算の<b>途中経過</b>を出して、目で確認できる。',en:'Prints the <b>intermediate state</b> of a variable or calculation so you can check it visually.'}}],
   variations:[{label:{ja:"途中を確かめる",en:"Check the steps"}, code:{ja:`// 計算の途中を、ログで確かめながら進める
console.log("スタート");
console.log("1 + 1 は", 1 + 1);
console.log("おわり");`,en:`// Check the steps of a calculation as you go
console.log("start");
console.log("1 + 1 is", 1 + 1);
console.log("end");`}}]},

  {name:{ja:"変数（箱に入れる）",en:"Variables (a box)"}, sub:{ja:"値に名前を付ける",en:"Name a value"}, desc:{ja:`数や文字を<b>名前つきの箱</b>に入れておく仕組み（<b>変数</b>）。箱に入れると、あとから<b>名前を書くだけ</b>で中身を何度でも使えます。<br><b>ルール</b>：まずは <b>const</b> を使う。あとで中身を変えたい時だけ <b>let</b>。const の箱に入れ直そうとするとエラー。名前は英数字・_・$（日本語も可）だが、<b>数字始まりは不可</b>。`,en:`A mechanism for storing numbers or text in a <b>named box</b> (a <b>variable</b>). Once stored, you can reuse the contents as many times as you like just by <b>writing the name</b>.<br><b>Rules</b>: use <b>const</b> first. Only use <b>let</b> when you'll change the contents later. Re-assigning a const box is an error. Names can use letters/numbers/_/$ (Japanese too), but <b>cannot start with a number</b>.`},
   tags:["const","=","let"], prep:[
     {s:{ja:'const 名前 = 中身',en:'const name = value'},d:{ja:'「名前」という箱に「中身」を入れる。<b>=</b> は「入れる」の意味。',en:'Puts "value" into a box called "name". <b>=</b> means "put into".'}},
     {s:'const',d:{ja:'あとで<b>変えない</b>箱（まずはこれを使う）。',en:'A box you <b>won\'t change</b> later (use this first).'}},
     {s:'let',d:{ja:'あとで<b>中身を変えたい</b>ときの箱。',en:'A box for when you\'ll <b>change the contents</b> later.'}}],
   variations:[
     {label:{ja:"名前を箱に",en:"Name into a box"}, code:{ja:`// name という箱に "たろう" を入れる
const name = "たろう";

// 箱の名前を書くと、中身が出てくる
console.log(name);
console.log(name, "さん、こんにちは！");`,en:`// Put "Taro" into a box called name
const name = "Taro";

// Write the box's name to get its contents
console.log(name);
console.log("Hello, " + name + "!");`}},
     {label:{ja:"あとで変える(let)",en:"Change later (let)"}, code:{ja:`let count = 0;      // let は 中身を変えられる箱
console.log(count);

count = 10;         // 中身を入れ替える
console.log(count);`,en:`let count = 0;      // let is a box you can change
console.log(count);

count = 10;         // replace the contents
console.log(count);`}}]},

  {name:{ja:"数と文字はちがう",en:"Numbers vs. text"}, sub:{ja:'"5" と 5',en:'"5" and 5'}, desc:{ja:`同じ5でも、<b>クオートで囲むと「文字」</b>、囲まないと「数」になります。数は計算でき、文字はくっつくだけ。<br><b>注意</b>：<b>"5" + 5</b> のように混ぜると、数が文字に引きずられて <b>"55"</b>（くっつく）になります。ここは初心者が必ずつまずくポイント！`,en:`The same 5 becomes <b>"text" when wrapped in quotes</b>, and a "number" when not. Numbers can be calculated; text just gets joined.<br><b>Warning</b>: mixing them like <b>"5" + 5</b> drags the number into text, giving <b>"55"</b> (joined). This is a spot every beginner trips over!`},
   tags:['"…"',"+"], prep:[
     {s:'"5"',d:{ja:'<b>文字</b>の5（計算しない）。',en:'The <b>text</b> 5 (no math).'}},
     {s:'5',d:{ja:'<b>数</b>の5（計算できる）。',en:'The <b>number</b> 5 (can do math).'}},
     {s:'+',d:{ja:'数どうしなら足し算、文字どうしなら<b>くっつける</b>。',en:'Adds two numbers, or <b>joins</b> two pieces of text.'}}],
   variations:[{label:{ja:"違いを見る",en:"See the difference"}, code:{ja:`console.log(5 + 5);      // 数どうし → 10
console.log("5" + "5");  // 文字どうし → "55"（くっつく）

// クオートの有無だけで、結果がまったく変わる！`,en:`console.log(5 + 5);      // number + number -> 10
console.log("5" + "5");  // text + text -> "55" (joined)

// Just the presence of quotes changes everything!`}}]},

  {name:{ja:"計算してみる",en:"Try calculating"}, sub:"+ - * / %", desc:{ja:`JavaScriptは<b>電卓</b>にもなります。かけ算は <b>*</b>、わり算は <b>/</b>、あまりは <b>%</b>（×や÷は使いません）。<br><b>ルール</b>：計算の順番は算数と同じで <b>*・/ が先、+・- が後</b>。順番を変えたい時は <b>( )</b> で囲む。<b>%</b>（あまり）は偶数・奇数の判定によく使います。`,en:`JavaScript is also a <b>calculator</b>. Multiply with <b>*</b>, divide with <b>/</b>, remainder with <b>%</b> (× and ÷ are not used).<br><b>Rules</b>: order of operations is like math — <b>* and / first, + and - later</b>. Wrap in <b>( )</b> to change the order. <b>%</b> (remainder) is often used to test even/odd.`},
   tags:["+","-","*","/","%"], prep:[
     {s:'*',d:{ja:'かけ算（× のかわり）。',en:'Multiply (instead of ×).'}},
     {s:'/',d:{ja:'わり算（÷ のかわり）。',en:'Divide (instead of ÷).'}},
     {s:'%',d:{ja:'わった<b>あまり</b>。',en:'The <b>remainder</b> of a division.'}}],
   variations:[
     {label:{ja:"四則計算",en:"Four operations"}, code:{ja:`console.log("たし算:", 10 + 3);
console.log("ひき算:", 10 - 3);
console.log("かけ算:", 10 * 3);
console.log("わり算:", 10 / 3);`,en:`console.log("add:", 10 + 3);
console.log("subtract:", 10 - 3);
console.log("multiply:", 10 * 3);
console.log("divide:", 10 / 3);`}},
     {label:{ja:"あまり(%)",en:"Remainder (%)"}, code:{ja:`// % は「わったあまり」。偶数・奇数の判定に使う
console.log(10 % 3);   // 10÷3 の あまり → 1
console.log(10 % 2);   // あまり0 → 偶数のしるし`,en:`// % is the remainder. Used to test even/odd
console.log(10 % 3);   // remainder of 10/3 -> 1
console.log(10 % 2);   // remainder 0 -> a sign it's even`}}]},

  {name:{ja:"メモを書く（//）",en:"Write notes (//)"}, sub:{ja:"コメント",en:"Comments"}, desc:{ja:`行の <b>//</b> より後ろは、コンピュータに<b>無視される</b>メモ（コメント）です。自分や他人への説明を書いたり、命令を一時的に止めたり（コメントアウト）できます。<br><b>使い方</b>：1行は <b>//</b>、複数行まとめては <b>/* … */</b> で囲む。コメントは動作に影響しないので、迷ったら書いておくと安心です。`,en:`Anything after <b>//</b> on a line is a note (comment) that the computer <b>ignores</b>. Use it to explain things to yourself or others, or to temporarily disable a command (commenting out).<br><b>How to use</b>: <b>//</b> for one line, <b>/* … */</b> to wrap several lines. Comments don't affect behavior, so when in doubt, write one.`},
   tags:["//"], prep:[
     {s:{ja:'// メモ',en:'// note'},d:{ja:'ここは実行されない。日本語で自由に書ける。',en:'This is not executed. Write freely in any language.'}}],
   variations:[{label:{ja:"メモと無効化",en:"Notes & disabling"}, code:{ja:`// ↓これはメモ。実行されない
console.log("これは出る");
// console.log("これは出ない"); ← 先頭に // を付けて止めた
console.log("これも出る");`,en:`// This is a note. Not executed
console.log("this shows");
// console.log("this does not show"); <- disabled with a leading //
console.log("this shows too");`}}]},

  {name:{ja:"文の終わり（;）",en:"End of statement (;)"}, sub:{ja:"セミコロン",en:"Semicolon"}, desc:{ja:`1つの命令の<b>終わりの印</b>。日本語の「。」に近く、命令ごとに付けます。<br><b>ルール</b>：<b>1行に1命令、行末に ;</b> と覚えればOK。無くても動く場合が多いですが、付ける習慣にするとトラブルが減ります。<b>if・for・関数宣言</b>の <b>{ }</b> の後ろは不要。ただし <b>const f = () =&gt; {…};</b> のように箱に入れる形は代入文なので <b>;</b> を付けます。`,en:`The <b>end marker</b> of a single command, like a period. Add one after each command.<br><b>Rule</b>: just remember <b>one command per line, ; at the end</b>. It often works without them, but the habit prevents trouble. Not needed after the <b>{ }</b> of <b>if / for / function declarations</b>. But a form that stores into a box, like <b>const f = () =&gt; {…};</b>, is an assignment, so add a <b>;</b>.`},
   tags:[";"], prep:[
     {s:';',d:{ja:'命令の終わり。「。」のイメージ。',en:'End of a command. Think of it as a period.'}}],
   variations:[{label:{ja:"区切ってみる",en:"Separate them"}, code:{ja:`console.log("1つ目の命令");
console.log("2つ目の命令");
// 各行の終わりに ; が付いている`,en:`console.log("first command");
console.log("second command");
// each line ends with a ;`}}]},

  {name:{ja:"エラーは友だち",en:"Errors are friends"}, sub:{ja:"こわくない",en:"Not scary"}, desc:{ja:`間違えると<b>エラー</b>が出ますが、こわくありません。ログ欄が<b>日本語で原因</b>を教えてくれます。<br><b>コツ</b>：エラーは「どこで・何が」起きたかを示す<b>ヒント</b>。よくあるのは「箱を作る前に使った」「<b>"</b> の閉じ忘れ」「<b>( )</b> の対応ミス」。わざと間違えて、エラーに慣れておきましょう！`,en:`When you make a mistake an <b>error</b> appears, but don't be scared. The log pane tells you <b>the cause in plain language</b>.<br><b>Tip</b>: an error is a <b>hint</b> about "where and what" went wrong. Common ones: "used a box before creating it", "forgot to close a <b>"</b>", "mismatched <b>( )</b>". Make mistakes on purpose and get used to errors!`},
   tags:[{ja:"エラー",en:"error"}], prep:[
     {s:{ja:'エラー',en:'error'},d:{ja:'書き方の間違い。<b>ログ欄</b>が直し方のヒントを出してくれる。',en:'A mistake in how it\'s written. The <b>log pane</b> gives hints on how to fix it.'}}],
   variations:[
     {label:{ja:"わざと間違える",en:"Break it on purpose"}, code:{ja:`// namae という箱は作っていないのに使う → エラーになる
console.log(namae);
// ↓ ログ欄に、日本語で原因が出ます`,en:`// Using a box called namae that was never created -> error
console.log(namae);
// v The log pane shows the cause`}},
     {label:{ja:"直したもの",en:"The fixed version"}, code:{ja:`// さっきのエラーを直したversion
const namae = "たろう";
console.log(namae);   // 今度はちゃんと出る！`,en:`// The version with the earlier error fixed
const namae = "Taro";
console.log(namae);   // now it shows correctly!`}}]},

  {name:{ja:"true と false",en:"true and false"}, sub:{ja:"はい / いいえ",en:"yes / no"}, desc:{ja:`JavaScriptの「はい・いいえ」を表す2つの値（<b>真偽値</b>）。<b>true</b>=はい（正しい）、<b>false</b>=いいえ（ちがう）。<br><b>使い方</b>：<b>&gt;</b>（より大きい）、<b>&lt;</b>（より小さい）、<b>===</b>（等しい）などで比べると true / false が返ります。この後の「if（もし〜なら）」の土台になります。`,en:`The two values that mean "yes/no" in JavaScript (<b>booleans</b>). <b>true</b> = yes (correct), <b>false</b> = no (wrong).<br><b>How to use</b>: comparing with <b>&gt;</b> (greater), <b>&lt;</b> (less), <b>===</b> (equal), etc. returns true / false. This is the foundation of the upcoming "if" statement.`},
   tags:["true","false",{ja:"真偽値",en:"boolean"}], prep:[
     {s:'true',d:{ja:'正しい・はい・ON。',en:'correct / yes / ON.'}},
     {s:'false',d:{ja:'ちがう・いいえ・OFF。',en:'wrong / no / OFF.'}}],
   variations:[{label:{ja:"見てみる",en:"Take a look"}, code:{ja:`console.log(true);         // はい
console.log(false);        // いいえ

// 比べると true / false が返ってくる
console.log(10 > 3);       // 10は3より大きい？ → true
console.log(2 > 5);        // 2は5より大きい？ → false`,en:`console.log(true);         // yes
console.log(false);        // no

// Comparing returns true / false
console.log(10 > 3);       // is 10 greater than 3? -> true
console.log(2 > 5);        // is 2 greater than 5? -> false`}}]},

  {name:{ja:"もし〜なら",en:"If ~ then"}, sub:{ja:"if 超入門",en:"if for beginners"}, desc:{ja:`条件が<b>true のときだけ</b>、{ } の中を実行します。<b>else</b> で「そうでないとき」、<b>else if</b> で「別の条件」も書けます。<br><b>ルール</b>：条件は <b>( )</b> の中、実行する中身は <b>{ }</b> の中に書く。等しいか比べる時は <b>=</b>（代入）ではなく <b>===</b> を使う（ここ超重要）。プログラムに「判断」をさせる第一歩！`,en:`Runs the { } block <b>only when the condition is true</b>. Use <b>else</b> for "otherwise", and <b>else if</b> for "another condition".<br><b>Rules</b>: the condition goes inside <b>( )</b>, the body inside <b>{ }</b>. To test equality use <b>===</b>, not <b>=</b> (assignment) — this is super important. The first step in letting a program "decide"!`},
   tags:["if","else"], prep:[
     {s:{ja:'if (条件) { … }',en:'if (condition) { … }'},d:{ja:'条件が true なら中を実行。',en:'Runs the body if the condition is true.'}},
     {s:'else { … }',d:{ja:'そうでないときに実行。',en:'Runs otherwise.'}}],
   variations:[
     {label:{ja:"合格判定",en:"Pass/fail check"}, code:{ja:`const ten = 80;   // てんすう

if (ten >= 60) {
  console.log("合格！");
} else {
  console.log("残念…");
}`,en:`const score = 80;

if (score >= 60) {
  console.log("Pass!");
} else {
  console.log("Too bad...");
}`}},
     {label:{ja:"3つに分ける",en:"Three branches"}, code:{ja:`const ten = 75;

if (ten >= 80) {
  console.log("優");
} else if (ten >= 60) {   // else if で条件を追加できる
  console.log("良");
} else {
  console.log("もう一歩");
}`,en:`const score = 75;

if (score >= 80) {
  console.log("A");
} else if (score >= 60) {   // else if adds another condition
  console.log("B");
} else {
  console.log("Almost there");
}`}}]},

  {name:{ja:"くりかえす（for）",en:"Repeat (for)"}, sub:{ja:"何回もやる",en:"Do it many times"}, desc:{ja:`同じ処理を<b>何回もくり返す</b>命令。「10回」「リストの数だけ」などをまとめて実行できます。<br><b>仕組み</b>：<b>for (let i = 0; i &lt; 5; i++)</b> は「iを0から始め／iが5未満の間／毎回iを1増やす」= <b>5回</b>。回数は <b>&lt;（未満）</b>か<b>&lt;=（以下）</b>かで変わるので注意。手で10行書くより断然ラク！`,en:`A command that <b>repeats the same work many times</b>. Run "10 times" or "once per list item" in one go.<br><b>How it works</b>: <b>for (let i = 0; i &lt; 5; i++)</b> means "start i at 0 / while i is under 5 / add 1 to i each time" = <b>5 times</b>. The count changes with <b>&lt; (under)</b> vs <b>&lt;= (or equal)</b>, so be careful. Far easier than writing 10 lines by hand!`},
   tags:["for"], prep:[
     {s:'for (let i = 0; i < 5; i++) { … }',d:{ja:'i を 0 から 4 まで、<b>5回</b>くり返す。',en:'Repeats <b>5 times</b>, i from 0 to 4.'}},
     {s:'i++',d:{ja:'i を<b>1増やす</b>（i = i + 1 と同じ）。',en:'<b>Adds 1</b> to i (same as i = i + 1).'}}],
   variations:[
     {label:{ja:"5回くり返す",en:"Repeat 5 times"}, code:{ja:`// i が 0,1,2,3,4 と変わりながら 5回まわる
for (let i = 0; i < 5; i++) {
  console.log(i + " 回目");
}`,en:`// i changes 0,1,2,3,4 as it loops 5 times
for (let i = 0; i < 5; i++) {
  console.log("time #" + i);
}`}},
     {label:{ja:"1〜10の合計",en:"Sum of 1 to 10"}, code:{ja:`let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum = sum + i;   // sum にどんどん足していく
}
console.log("1〜10の合計:", sum);   // 55`,en:`let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum = sum + i;   // keep adding into sum
}
console.log("sum of 1 to 10:", sum);   // 55`}}]},

  {name:{ja:"処理に名前を付ける",en:"Name a process"}, sub:{ja:"関数 超入門",en:"functions for beginners"}, desc:{ja:`よく使う処理に<b>名前を付けて</b>、あとは名前を呼ぶだけで動かせる仕組み（<b>関数</b>）。同じことを何度も書かずに済みます。<br><b>使い方</b>：<b>const 名前 = () =&gt; { 処理 }</b> で作り、<b>名前()</b> で実行。<b>()</b> を付け忘れると実行されず、関数そのものが返るだけなので注意。`,en:`A mechanism (<b>function</b>) for <b>naming</b> a frequently-used process, then running it just by calling its name. No more writing the same thing over and over.<br><b>How to use</b>: create with <b>const name = () =&gt; { work }</b>, run with <b>name()</b>. Forgetting the <b>()</b> won't run it — it just returns the function itself, so be careful.`},
   tags:["const","() =>"], prep:[
     {s:'() =>',d:{ja:'「これから処理を書くよ」の合図（<b>アロー関数</b>）。<b>()</b> は受け取るもの、<b>=></b> の右が処理の中身。',en:'A signal that "the process follows" (<b>arrow function</b>). <b>()</b> is what it receives; the right of <b>=></b> is the body.'}},
     {s:{ja:'const あいさつ = () => { … }',en:'const greet = () => { … }'},d:{ja:'「あいさつ」という名前の処理を作る。',en:'Creates a process named "greet".'}},
     {s:{ja:'あいさつ()',en:'greet()'},d:{ja:'名前のうしろに <b>()</b> を付けて実行。',en:'Run it by adding <b>()</b> after the name.'}}],
   variations:[{label:{ja:"あいさつを作る",en:"Make a greeting"}, code:{ja:`// あいさつ という名前の処理を作る（日本語の名前もOK）
const あいさつ = () => {
  console.log("おはよう");
  console.log("今日もがんばろう");
};

// 名前を呼ぶだけで、中身がまとめて動く
あいさつ();
あいさつ();   // 何回でも呼べる`,en:`// Create a process named greet
const greet = () => {
  console.log("Good morning");
  console.log("Let's do our best today");
};

// Just call the name and the whole body runs
greet();
greet();   // call it as many times as you like`}}]},

  {name:{ja:"ふやす・へらす",en:"Increase / decrease"}, sub:"+= -= ++", desc:{ja:`変数の数を<b>増やしたり減らしたり</b>する短い書き方。カウンターやスコアで大活躍します。<br><b>使い方</b>：<b>x += 3</b> は「x = x + 3」の短縮。<b>x++</b> は1だけ増やす、<b>x--</b> は1だけ減らす。増減する変数は変えられる箱＝<b>let</b> で作ります（const は不可）。`,en:`Short ways to <b>increase or decrease</b> a variable's number. Great for counters and scores.<br><b>How to use</b>: <b>x += 3</b> is short for "x = x + 3". <b>x++</b> adds 1, <b>x--</b> subtracts 1. A variable you change must be a changeable box — made with <b>let</b> (not const).`},
   tags:["+=","-=","++"], prep:[
     {s:'x += 3',d:{ja:'x に3を足す（x = x + 3 と同じ）。',en:'Adds 3 to x (same as x = x + 3).'}},
     {s:'x++',d:{ja:'x を1だけ増やす。',en:'Adds just 1 to x.'}}],
   variations:[{label:{ja:"増減してみる",en:"Try it"}, code:{ja:`let score = 10;
console.log(score);   // 10

score += 5;           // 5増やす
console.log(score);   // 15

score -= 2;           // 2減らす
console.log(score);   // 13

score++;              // 1増やす
console.log(score);   // 14`,en:`let score = 10;
console.log(score);   // 10

score += 5;           // add 5
console.log(score);   // 15

score -= 2;           // subtract 2
console.log(score);   // 13

score++;              // add 1
console.log(score);   // 14`}}]},

  {name:{ja:"文字のべんり技",en:"Handy string tricks"}, sub:{ja:".length など",en:".length and more"}, desc:{ja:`文字は「<b>.</b>（ドット）」のうしろに命令（<b>メソッド</b>）を付けると、<b>長さを数えたり大文字にしたり</b>できます。<br><b>ポイント</b>：これらは<b>元の文字を変えず</b>、加工した<b>新しい文字を返す</b>だけ。結果を使いたければ変数で受け取るか、その場でログに出します。`,en:`Add a command (a <b>method</b>) after a <b>.</b> (dot) on a string to <b>count its length or make it uppercase</b>, and more.<br><b>Key point</b>: these <b>don't change the original</b> — they only <b>return a new processed string</b>. To use the result, store it in a variable or log it right there.`},
   tags:[".length",".toUpperCase()",".includes()"], prep:[
     {s:{ja:'文字.length',en:'text.length'},d:{ja:'文字数を数える。',en:'Counts the number of characters.'}},
     {s:{ja:'文字.toUpperCase()',en:'text.toUpperCase()'},d:{ja:'全部<b>大文字</b>にする。',en:'Makes it all <b>uppercase</b>.'}},
     {s:{ja:'文字.includes("e")',en:'text.includes("e")'},d:{ja:'"e" が含まれるか（true/false）。',en:'Whether it contains "e" (true/false).'}}],
   variations:[{label:{ja:"文字を調べる",en:"Inspect a string"}, code:{ja:`const word = "Hello";

console.log("長さ:", word.length);            // 5
console.log("大文字:", word.toUpperCase());   // HELLO
console.log("小文字:", word.toLowerCase());   // hello
console.log("eを含む?:", word.includes("e")); // true`,en:`const word = "Hello";

console.log("length:", word.length);              // 5
console.log("upper:", word.toUpperCase());        // HELLO
console.log("lower:", word.toLowerCase());        // hello
console.log("has e?:", word.includes("e"));       // true`}}]},

  {name:{ja:"Math で計算",en:"Calculate with Math"}, sub:{ja:"四捨五入・最大",en:"round, max"}, desc:{ja:`<b>Math</b> は計算の便利屋（自分で作らなくても最初から使える道具）。四捨五入・切り上げ・切り捨て・最大最小・ランダムな数が使えます。<br><b>使い方</b>：<b>Math.round</b>四捨五入 / <b>Math.ceil</b>切り上げ / <b>Math.floor</b>切り捨て。<b>Math.random()</b> は 0以上1未満。1〜6のサイコロは <b>Math.floor(Math.random()*6)+1</b>。`,en:`<b>Math</b> is a calculation helper (a built-in tool you don't have to make yourself). It offers rounding, ceiling, floor, max/min, and random numbers.<br><b>How to use</b>: <b>Math.round</b> rounds / <b>Math.ceil</b> rounds up / <b>Math.floor</b> rounds down. <b>Math.random()</b> is 0 or more, under 1. A 1–6 die is <b>Math.floor(Math.random()*6)+1</b>.`},
   tags:["Math.round","Math.max","Math.random"], prep:[
     {s:'Math.round(3.6)',d:{ja:'四捨五入 → 4。',en:'Round -> 4.'}},
     {s:'Math.max(a, b)',d:{ja:'大きいほうを返す。',en:'Returns the larger one.'}},
     {s:'Math.random()',d:{ja:'0以上1未満のランダムな数。',en:'A random number, 0 or more and under 1.'}}],
   variations:[{label:{ja:"いろいろ計算",en:"Various calcs"}, code:{ja:`console.log(Math.round(3.6));    // 四捨五入 → 4
console.log(Math.ceil(3.1));     // 切り上げ → 4
console.log(Math.floor(3.9));    // 切り捨て → 3
console.log(Math.max(5, 12, 3)); // 一番大きい → 12
console.log(Math.min(5, 12, 3)); // 一番小さい → 3`,en:`console.log(Math.round(3.6));    // round -> 4
console.log(Math.ceil(3.1));     // round up -> 4
console.log(Math.floor(3.9));    // round down -> 3
console.log(Math.max(5, 12, 3)); // largest -> 12
console.log(Math.min(5, 12, 3)); // smallest -> 3`}}]},

  {name:{ja:"種類を調べる",en:"Check the type"}, sub:"typeof", desc:{ja:`その値が<b>数なのか文字なのか</b>など、「種類（<b>型</b>）」を調べる命令。エラーの原因さがしに役立ちます。<br><b>結果の例</b>：数=<b>number</b>、文字=<b>string</b>、true/false=<b>boolean</b>、配列やオブジェクト=<b>object</b>。「計算できないのはなぜ？」という時、文字になっていないかを typeof で確認します。`,en:`A command to check a value's "type" — <b>whether it's a number or text</b>, etc. Useful for tracking down the cause of errors.<br><b>Example results</b>: number = <b>number</b>, text = <b>string</b>, true/false = <b>boolean</b>, arrays and objects = <b>object</b>. When you wonder "why can't I calculate?", use typeof to check whether it's secretly text.`},
   tags:["typeof"], prep:[
     {s:{ja:'typeof 値',en:'typeof value'},d:{ja:'値の種類を文字で返す（number, string, boolean など）。',en:'Returns the value\'s type as text (number, string, boolean, etc.).'}}],
   variations:[{label:{ja:"種類を見る",en:"See the types"}, code:{ja:`console.log(typeof 5);          // number（数）
console.log(typeof "こんにちは"); // string（文字）
console.log(typeof true);       // boolean（true/false）
console.log(typeof [1, 2]);     // object（配列も仲間）`,en:`console.log(typeof 5);          // number
console.log(typeof "hello");    // string (text)
console.log(typeof true);       // boolean (true/false)
console.log(typeof [1, 2]);     // object (arrays count too)`}}]},

  {name:{ja:"くりかえす（while）",en:"Repeat (while)"}, sub:{ja:"条件が続く間",en:"While the condition holds"}, desc:{ja:`<b>条件が true の間ずっと</b>くり返す命令。回数が決まっていない時に便利です（回数が決まっているなら for 向き）。<br><b>ルール（重要）</b>：中で<b>条件をいつか false にする</b>処理（例: n を増やす）を必ず入れる。入れ忘れると永遠に止まらない<b>無限ループ</b>になります。`,en:`A command that repeats <b>as long as the condition is true</b>. Handy when the number of repeats isn't fixed (use for when it is).<br><b>Rule (important)</b>: always include work inside that <b>eventually makes the condition false</b> (e.g. increment n). Forget it and you get an <b>infinite loop</b> that never stops.`},
   tags:["while"], prep:[
     {s:{ja:'while (条件) { … }',en:'while (condition) { … }'},d:{ja:'条件が true の間、中をくり返す。',en:'Repeats the body while the condition is true.'}},
     {s:{ja:'注意',en:'Caution'},d:{ja:'条件がずっとtrueだと<b>無限ループ</b>。必ず終わる工夫を入れる。',en:'If the condition stays true it\'s an <b>infinite loop</b>. Always add a way to end it.'}}],
   variations:[{label:{ja:"3になるまで",en:"Until it reaches 3"}, code:{ja:`let n = 0;
while (n < 3) {     // n が3未満の間くり返す
  console.log(n);
  n = n + 1;        // これが無いと無限ループ！
}
console.log("おわり");`,en:`let n = 0;
while (n < 3) {     // repeat while n is under 3
  console.log(n);
  n = n + 1;        // without this, infinite loop!
}
console.log("end");`}}]},

  {name:{ja:"文字を切り出す",en:"Slice out text"}, sub:"slice", desc:{ja:`文字の<b>一部だけ</b>を取り出します。<b>slice(開始, 終了)</b> で位置を指定。<br><b>ルール</b>：位置は<b>0から数える</b>。終了位置は<b>「その手前まで」</b>（その位置は含まない）。第2引数を省くと<b>最後まで</b>。マイナスを渡すと<b>後ろから</b>数えます。`,en:`Extracts <b>just part</b> of a string. Specify positions with <b>slice(start, end)</b>.<br><b>Rules</b>: positions <b>count from 0</b>. The end is <b>"up to but not including"</b> that position. Omit the second argument to go <b>to the end</b>. Pass a negative to count <b>from the back</b>.`},
   tags:["slice"], prep:[
     {s:{ja:'文字.slice(0, 3)',en:'text.slice(0, 3)'},d:{ja:'0番目から3番目の<b>手前</b>まで取り出す。',en:'Extracts from index 0 up to <b>just before</b> index 3.'}}],
   variations:[{label:{ja:"取り出す",en:"Extract"}, code:{ja:`const word = "JavaScript";

console.log(word.slice(0, 4));   // "Java"（0〜3）
console.log(word.slice(4));      // "Script"（4〜最後）
console.log(word.slice(-6));     // "Script"（後ろから6文字）`,en:`const word = "JavaScript";

console.log(word.slice(0, 4));   // "Java" (0-3)
console.log(word.slice(4));      // "Script" (4 to end)
console.log(word.slice(-6));     // "Script" (last 6 chars)`}}]},

  {name:{ja:"配列に足す・取る",en:"Add to / take from array"}, sub:"push / pop", desc:{ja:`配列（値を順番に並べた箱、[ ] で作る）の<b>後ろに追加(push)・後ろから取り出す(pop)</b>。リスト操作の基本です。<br><b>ポイント</b>：push / pop は<b>元の配列そのものを変える</b>。pop は取り出した値を返すので、変数で受け取れます。（配列の詳しくは初級「配列（リスト）」で）`,en:`<b>Add to the back (push) and take from the back (pop)</b> of an array (a box holding values in order, made with [ ]). The basics of list handling.<br><b>Key point</b>: push / pop <b>modify the original array itself</b>. pop returns the removed value, so you can store it in a variable. (More on arrays in Beginner "Arrays (lists)".)`},
   tags:["push","pop"], prep:[
     {s:{ja:'["A", "B"] とは',en:'What is ["A", "B"]'},d:{ja:'<b>配列</b>＝値を順番に並べて入れる箱。[ ] で作る（くわしくは初級「配列（リスト）」で）。',en:'An <b>array</b> = a box holding values in order. Made with [ ] (more in Beginner "Arrays (lists)").'}},
     {s:{ja:'配列.push(値)',en:'array.push(value)'},d:{ja:'後ろに<b>追加</b>する。',en:'<b>Adds</b> to the back.'}},
     {s:{ja:'配列.pop()',en:'array.pop()'},d:{ja:'後ろを<b>取り出して削除</b>する。',en:'<b>Removes and returns</b> the last item.'}}],
   variations:[{label:{ja:"足し引きする",en:"Add and remove"}, code:{ja:`const stack = ["A", "B"];

stack.push("C");           // 後ろに追加
console.log(stack);        // ["A", "B", "C"]

const last = stack.pop();  // 後ろを取り出す
console.log(last);         // "C"
console.log(stack);        // ["A", "B"]`,en:`const stack = ["A", "B"];

stack.push("C");           // add to the back
console.log(stack);        // ["A", "B", "C"]

const last = stack.pop();  // take from the back
console.log(last);         // "C"
console.log(stack);        // ["A", "B"]`}}]},

  {name:{ja:"数と文字の変換",en:"Number/text conversion"}, sub:"Number / String", desc:{ja:`"10"（文字）と 10（数）は別もの。文字のまま足すと "1"+"2"="12" になってしまいます。計算する前に <b>Number()</b> で数に変換するのが鉄則。逆は <b>String()</b>。あとで習う「入力欄」から取る値は全部文字なので、この変換が必須になります。`,en:`"10" (text) and 10 (number) are different. Adding text gives "1"+"2"="12". The rule: convert to a number with <b>Number()</b> before calculating. The reverse is <b>String()</b>. Values from an input field (learned later) are all text, so this conversion becomes essential.`},
   tags:["Number()","String()"], prep:[
     {s:'Number("3")',d:{ja:'文字の"3"を<b>数の3</b>に変える。計算できるようになる。',en:'Turns text "3" into the <b>number 3</b>, so you can calculate.'}},
     {s:'String(3)',d:{ja:'数の3を<b>文字の"3"</b>に変える。',en:'Turns the number 3 into <b>text "3"</b>.'}}],
   variations:[{label:{ja:"変換して計算",en:"Convert then calc"}, code:{ja:`const a = "10";              // 入力欄から来る値は文字
console.log(a + 5);          // "105" ← くっついちゃう！

const n = Number(a);         // 数に変換してから
console.log(n + 5);          // 15 ← ちゃんと計算できた`,en:`const a = "10";              // values from an input are text
console.log(a + 5);          // "105" <- it joins!

const n = Number(a);         // convert to a number first
console.log(n + 5);          // 15 <- now it calculates`}}]},

  {name:{ja:"undefined と null",en:"undefined and null"}, sub:{ja:"「無い」を表す値",en:"Values that mean 'nothing'"}, desc:{ja:`エラーでよく見る2つ。<b>undefined</b>＝「まだ何も入れてない」、<b>null</b>＝「わざと空にしてある」。この違いが分かるとエラー文が怖くなくなります。`,en:`Two you'll often see in errors. <b>undefined</b> = "nothing put in yet", <b>null</b> = "deliberately left empty". Once you understand the difference, error messages stop being scary.`},
   tags:["undefined","null"], prep:[
     {s:'undefined',d:{ja:'箱は作ったけど<b>中身を入れ忘れている</b>状態。',en:'A box was created but you <b>forgot to put anything in it</b>.'}},
     {s:'null',d:{ja:'「空です」と<b>自分で入れた</b>値。要素が見つからない時も null。',en:'A value you <b>put in yourself</b> to mean "empty". Also null when an element isn\'t found.'}}],
   variations:[{label:{ja:"見てみる",en:"Take a look"}, code:{ja:`let box;                     // 作っただけ（何も入れてない）
console.log(box);            // undefined

const nothing = null;        // わざと「空」を入れた
console.log(nothing);        // null

// undefined のまま計算すると NaN（数じゃない）になる
console.log(box + 1);        // NaN ← エラーの元によくなる`,en:`let box;                     // just created (nothing put in)
console.log(box);            // undefined

const nothing = null;        // deliberately put in "empty"
console.log(nothing);        // null

// Calculating with undefined gives NaN (not a number)
console.log(box + 1);        // NaN <- a common source of errors`}}]}
]},

/* ============ 初級編：記号とタグ ============ */
{name:"初級", items:[
  {name:{ja:'" " クオート',en:'" " Quotes'}, sub:{ja:"文字の合図",en:"The text signal"}, desc:{ja:`文字を囲む印（クオート）。<b>囲むと「文字」</b>、囲まないと「名前（変数）」扱いになります。数字も囲むと文字に。<br><b>ルール</b>：<b>" "（ダブル）と ' '（シングル）どちらでもOK</b>だが、始めと終わりは<b>同じ種類でそろえる</b>。片方の閉じ忘れは定番のエラー。`,en:`The marks that wrap text (quotes). <b>Wrapped = "text"</b>, unwrapped = treated as a name (variable). Numbers become text when wrapped too.<br><b>Rules</b>: <b>either " " (double) or ' ' (single) is fine</b>, but the start and end <b>must match</b>. Forgetting to close one is a classic error.`},
   tags:['" "',"' '"], prep:[{s:'"5"',d:{ja:'<b>文字</b>の5。',en:'The <b>text</b> 5.'}},{s:'5',d:{ja:'<b>数</b>の5。計算できる。',en:'The <b>number</b> 5. Can do math.'}}],
   variations:[{label:{ja:"文字 vs 数",en:"Text vs. number"}, code:{ja:`const a = "5" + "5";   // 文字をくっつける → "55"
const b = 5 + 5;        // 数を足す → 10
console.log("文字:", a);
console.log("数:", b);`,en:`const a = "5" + "5";   // join text -> "55"
const b = 5 + 5;        // add numbers -> 10
console.log("text:", a);
console.log("number:", b);`}}]},

  {name:{ja:"( ) 丸かっこ",en:"( ) Parentheses"}, sub:{ja:"実行と引数",en:"Run & arguments"}, desc:{ja:`命令を<b>実行する</b>合図であり、中に<b>渡すもの（引数）</b>を入れる箱。<b>console.log(…)</b> の (…) がそれ。<br><b>使い方</b>：カンマで複数の引数を渡せる（順番に意味あり）。渡すものが無くても実行には <b>( )</b> が必要。計算の順番を変える <b>( )</b> も同じ記号です。`,en:`A signal to <b>run</b> a command, and a box for <b>what you pass in (arguments)</b>. The (…) in <b>console.log(…)</b> is exactly this.<br><b>How to use</b>: pass multiple arguments with commas (order matters). Even with nothing to pass, running needs <b>( )</b>. The <b>( )</b> that changes calculation order is the same symbol.`},
   tags:["( )",","], prep:[{s:'( )',d:{ja:'命令に<b>渡すもの（引数）</b>を入れる。',en:'Holds <b>what you pass (arguments)</b> to a command.'}},{s:{ja:'カンマ ,',en:'comma ,'},d:{ja:'引数を<b>複数</b>渡すときの区切り。',en:'The separator when passing <b>multiple</b> arguments.'}}],
   variations:[{label:{ja:"例を見る",en:"See an example"}, code:{ja:`console.log("かっこの中が引数だよ");
console.log("引数は", "カンマで", "複数OK");`,en:`console.log("what's inside the parens is an argument");
console.log("arguments", "with commas", "can be multiple");`}}]},

  {name:{ja:"{ } 波かっこ",en:"{ } Braces"}, sub:{ja:"処理のまとまり",en:"A block of work"}, desc:{ja:`複数の命令を<b>ひとまとめ</b>にする箱。基礎でふれた「if（もし〜なら）」や、「関数」「クリックしたら」などの<b>やること</b>を、この { } で囲みます。`,en:`A box that <b>groups</b> multiple commands together. The <b>work</b> for "if" (from Basics), "functions", "on click", and so on is wrapped in these { }.`},
   tags:["{ }"], prep:[
     {s:{ja:'if (条件) { … }',en:'if (condition) { … }'},d:{ja:'条件が正しいときだけ、<b>{ } の中</b>を実行する。',en:'Runs <b>inside the { }</b> only when the condition is true.'}},
     {s:{ja:'{ } の中',en:'inside { }'},d:{ja:'命令を何行でも入れられる「処理の部屋」。',en:'A "room for work" that can hold any number of commands.'}}],
   variations:[{label:{ja:"かたまりを見る",en:"See a block"}, code:{ja:`const n = 7;

// if のうしろの { } が「n が5より大きいときに やること」のかたまり
if (n > 5) {
  console.log("nは5より大きい");
  console.log("だから、この2行が動いた");
}
// ※ if のくわしい使い方は基礎「もし〜なら」を見てね`,en:`const n = 7;

// The { } after if is the block of "what to do when n > 5"
if (n > 5) {
  console.log("n is greater than 5");
  console.log("so these two lines ran");
}
// * For if in detail, see Basics "If ~ then"`}}]},

  {name:{ja:"比較する（===）",en:"Compare (===)"}, sub:"true / false", desc:{ja:`2つを比べて<b>true(はい)/false(いいえ)</b>を返します。<b>===</b>は「等しい？」の意味。<b>=</b>（代入＝箱に入れる）とは別物なので注意。<br><b>ルール</b>：等しさは <b>==</b> でなく <b>===</b> を使う。=== は<b>型（数か文字か）も一緒に</b>見るので <b>5 === "5" は false</b>。== は型を自動でそろえてから比べるため、予想外の結果になりがち。`,en:`Compares two things and returns <b>true (yes) / false (no)</b>. <b>===</b> means "are they equal?". Note it's different from <b>=</b> (assignment = putting into a box).<br><b>Rule</b>: use <b>===</b>, not <b>==</b>, for equality. === <b>also checks the type</b> (number or text), so <b>5 === "5" is false</b>. == coerces types first, so it often gives surprising results.`},
   tags:["===","!==",">","<"], prep:[{s:'===',d:{ja:'等しいか判定（==より安全）。',en:'Tests equality (safer than ==).'}},{s:'!==',d:{ja:'等しくないか。',en:'Not equal.'}}],
   variations:[{label:{ja:"比べてみる",en:"Compare them"}, code:`console.log(5 === 5);     // true
console.log(5 === 3);     // false
console.log(10 > 3);      // true
console.log("a" === "b"); // false`}]},

  {name:{ja:"配列（リスト）",en:"Arrays (lists)"}, sub:{ja:"[ ] で並べる",en:"Line up with [ ]"}, desc:{ja:`複数の値を<b>順番に並べた箱</b>。<b>[ ]</b>で作り、カンマで並べます。<br><b>ルール</b>：番号（インデックス）は<b>0から</b>。1個目が [0]、2個目が [1]。個数は <b>.length</b>、最後は <b>配列[配列.length - 1]</b>。1個ずつ処理は <b>forEach</b> や for...of。`,en:`A box holding <b>multiple values in order</b>. Made with <b>[ ]</b>, separated by commas.<br><b>Rules</b>: the index starts <b>from 0</b>. First is [0], second is [1]. Count with <b>.length</b>, last is <b>array[array.length - 1]</b>. Process one at a time with <b>forEach</b> or for...of.`},
   tags:["[ ]","length","forEach"], prep:[
     {s:'[a, b, c]',d:{ja:'カンマ区切りで並べる。',en:'Line up, separated by commas.'}},
     {s:{ja:'配列[0]',en:'array[0]'},d:{ja:'0番目＝1個目（数え始めが0）。',en:'Index 0 = the first item (counting starts at 0).'}},
     {s:'.length',d:{ja:'入っている個数。',en:'The number of items.'}},
     {s:{ja:'配列.forEach((x) => { … })',en:'array.forEach((x) => { … })'},d:{ja:'中身を<b>1個ずつ順番に</b>取り出して処理する。',en:'Takes each item <b>one at a time in order</b> and processes it.'}}],
   variations:[{label:{ja:"リストを使う",en:"Use a list"}, code:{ja:`const fruits = ["りんご", "みかん", "ぶどう"];

console.log("1個目:", fruits[0]);
console.log("個数:", fruits.length);

fruits.forEach((f) => console.log("・" + f));`,en:`const fruits = ["apple", "orange", "grape"];

console.log("first:", fruits[0]);
console.log("count:", fruits.length);

fruits.forEach((f) => console.log("- " + f));`}}]},

  {name:{ja:"要素を取ってくる",en:"Grab an element"}, sub:"querySelector", desc:{ja:`HTMLの部品をJSで<b>つかまえる</b>命令。これが「動きを付ける」第一歩。名札が <b>#id</b> なら「#」、<b>.class</b> なら「.」を付けて狙います。<br><b>ルール</b>：見つかった<b>最初の1個だけ</b>を返す。見つからないと <b>null</b>（そのまま操作すると「nullは操作できない」エラー）。全部取るなら次の querySelectorAll。`,en:`A command that <b>catches</b> an HTML part with JS. This is step one of "adding behavior". Target by name tag: <b>#</b> for an <b>#id</b>, <b>.</b> for a <b>.class</b>.<br><b>Rules</b>: returns <b>only the first match</b>. Not found gives <b>null</b> (operating on it raises a "cannot operate on null" error). To get them all, use querySelectorAll next.`},
   tags:["querySelector","#id",".class"], prep:[
     {s:'document.querySelector("#test")',d:{ja:'id="test" の部品を<b>1個</b>つかまえる。',en:'Catches <b>one</b> part with id="test".'}},
     {s:{ja:'#test とは',en:'What is #test'},d:{ja:'プレビューに最初からある<b>「テスト」ボタン</b>のこと（HTML窓の id="test"）。',en:'The <b>"test" button</b> that\'s in the preview by default (id="test" in the HTML pane).'}},
     {s:'#',d:{ja:'<b>id</b>を狙う印。',en:'The mark for targeting an <b>id</b>.'}},
     {s:'.',d:{ja:'<b>class</b>を狙う印。',en:'The mark for targeting a <b>class</b>.'}}],
   variations:[{label:{ja:"つかまえて変える",en:"Catch & change"}, code:{ja:`// HTMLの id="test" のボタンをつかまえて、el という箱に入れる
const el = document.querySelector("#test");

// つかまえた部品の「文字」と「色」を変える
el.textContent = "つかまえた！";      // 中の文字を変える
el.style.background = "#F5C24B";     // 背景の色を変える
el.style.color = "#1a1305";          // 文字の色を変える`,en:`// Catch the id="test" button and store it in el
const el = document.querySelector("#test");

// Change the caught part's text and color
el.textContent = "Caught it!";       // change the inner text
el.style.background = "#F5C24B";     // change the background
el.style.color = "#1a1305";          // change the text color`}}]},

  {name:{ja:"関数を作る",en:"Make a function"}, sub:{ja:"処理に名前を付ける",en:"Name a process"}, desc:{ja:`よく使う処理に<b>名前を付けて</b>、呼ぶだけで動かせるようにする仕組み。<b>() => { }</b> の形（アロー関数）が今の定番です。`,en:`A mechanism for <b>naming</b> a frequently-used process so you can run it just by calling it. The <b>() => { }</b> form (arrow function) is today's standard.`},
   tags:["const","() =>","return"], prep:[
     {s:'const f = () => { … }',d:{ja:'「f」という名前の関数を作る（この時点ではまだ動かない）。',en:'Creates a function named "f" (it doesn\'t run yet at this point).'}},
     {s:'f()',d:{ja:'名前のうしろに <b>()</b> を付けると<b>実行</b>される。',en:'Adding <b>()</b> after the name <b>runs</b> it.'}},
     {s:'return',d:{ja:'計算した<b>答えを返す</b>。',en:'<b>Returns the answer</b> it computed.'}},
     {s:{ja:'(x) => 式',en:'(x) => expression'},d:{ja:'{ } を省いた短い書き方。<b>式の結果が自動でreturnされる</b>。例: (n) => n * 2。',en:'A short form without { }. <b>The expression\'s result is returned automatically</b>. e.g. (n) => n * 2.'}}],
   variations:[
     {label:{ja:"あいさつ関数",en:"Greeting function"}, code:{ja:`// greet という名前の関数を作る（まだ実行はされていない）
const greet = (name) => {
  return "こんにちは、" + name + "さん！";
};

// 名前のうしろに () を付けると、はじめて中身が動く
console.log(greet("たろう"));
console.log(greet("はなこ"));`,en:`// Create a function named greet (not run yet)
const greet = (name) => {
  return "Hello, " + name + "!";
};

// Adding () after the name finally runs the body
console.log(greet("Taro"));
console.log(greet("Hanako"));`}},
     {label:{ja:"足し算関数",en:"Add function"}, code:{ja:`// 2つの数を受け取って、合計を返す関数
const add = (a, b) => {
  return a + b;   // return で答えを外に返す
};

console.log("3 + 5 =", add(3, 5));
console.log("10 + 20 =", add(10, 20));`,en:`// A function that takes two numbers and returns the sum
const add = (a, b) => {
  return a + b;   // return sends the answer back out
};

console.log("3 + 5 =", add(3, 5));
console.log("10 + 20 =", add(10, 20));`}}]},

  {name:{ja:"文字に値を混ぜる",en:"Embed values in text"}, sub:{ja:"テンプレート文字列",en:"Template literals"}, desc:{ja:`バッククオート <b>\`</b> で囲むと、文字の中に <b>\${ }</b> で値を直接はめ込めます。+ でつなぐより読みやすい書き方。`,en:`Wrap in backticks <b>\`</b> and you can drop values straight into text with <b>\${ }</b>. More readable than joining with +.`},
   tags:["\`…\`","\${ }"], prep:[
     {s:{ja:'\`やあ \${name}\`',en:'\`Hi \${name}\`'},d:{ja:'<b>\${ }</b> の中に変数や計算を書くと、その値に置きかわる。',en:'Write a variable or calculation inside <b>\${ }</b> and it\'s replaced with that value.'}},
     {s:{ja:'バッククオート \`',en:'backtick \`'},d:{ja:'キーボードの左上あたりにある記号。ふつうのクオート（ダブル・シングル）とは別物です。',en:'The symbol near the top-left of the keyboard. Different from normal quotes (double/single).'}}],
   variations:[{label:{ja:"混ぜてみる",en:"Mix it in"}, code:{ja:`const name = "たろう";
const age = 20;

// \${ } の中身が、その値に置きかわる
console.log(\`\${name}さんは\${age}歳です\`);
console.log(\`来年は\${age + 1}歳になります\`);`,en:`const name = "Taro";
const age = 20;

// What's inside \${ } is replaced with that value
console.log(\`\${name} is \${age} years old\`);
console.log(\`Next year they turn \${age + 1}\`);`}}]},

  {name:{ja:"オブジェクト",en:"Objects"}, sub:{ja:"{ } キーと値",en:"{ } keys and values"}, desc:{ja:`関係する値を<b>名前つきでひとまとめ</b>にする箱。<b>{ キー: 値 }</b> の形で作り、<b>ドット(.)</b>で中身を取り出します。<br><b>配列との違い</b>：配列は<b>順番（番号）</b>で管理、オブジェクトは<b>名前（キー）</b>で管理。人の情報のように「名前・年齢…」と<b>ラベルを付けて</b>持ちたい時に使います。`,en:`A box that <b>groups related values by name</b>. Make it as <b>{ key: value }</b> and read it out with a <b>dot (.)</b>.<br><b>Difference from arrays</b>: arrays are managed by <b>order (index)</b>, objects by <b>name (key)</b>. Use it when you want <b>labeled</b> data like "name, age…" for a person.`},
   tags:["{ }",{ja:"キー: 値",en:"key: value"},{ja:'.キー',en:'.key'}], prep:[
     {s:'{ name: "…", age: 20 }',d:{ja:'「キー: 値」をカンマで並べる。',en:'List "key: value" pairs separated by commas.'}},
     {s:'user.name',d:{ja:'ドットのうしろにキー名で<b>取り出す</b>。',en:'<b>Read out</b> with a key name after the dot.'}}],
   variations:[{label:{ja:"まとめて使う",en:"Group and use"}, code:{ja:`// 人ひとりの情報を、1つの箱にまとめる
const user = {
  name: "たろう",   // キー name の値
  age: 20,          // キー age の値
};

// ドット(.)でキーを指定して取り出す
console.log(user.name + "は" + user.age + "歳");`,en:`// Group one person's info into a single box
const user = {
  name: "Taro",   // value of key name
  age: 20,        // value of key age
};

// Read out by specifying a key with a dot (.)
console.log(user.name + " is " + user.age);`}}]},

  {name:{ja:"$ ドル記号",en:"$ Dollar sign"}, sub:{ja:"ただの文字",en:"Just a character"}, desc:{ja:`<b>$</b> はJSの特別な記号ではなく、ただ名前に使える<b>ふつうの文字</b>です。<b>jQuery</b>という昔の人気ツールが目印に使ったので有名。自分で querySelector の<b>あだ名</b>にもできます。`,en:`<b>$</b> is not a special JS symbol — it's just an <b>ordinary character</b> you can use in names. It's famous because <b>jQuery</b>, a once-popular tool, used it as its marker. You can make it your own <b>nickname</b> for querySelector too.`},
   tags:["$"], prep:[
     {s:'const $ = (s) => document.querySelector(s)',d:{ja:'<b>$</b> に「探す関数」を入れる。以後 $("#id") と短く書ける。',en:'Put a "find function" into <b>$</b>. After that you can write $("#id") for short.'}}],
   variations:[{label:{ja:"$を自作してみる",en:"Make your own $"}, code:{ja:`// $ を querySelector のあだ名にする（名前は自分で決められる）
const $ = (s) => document.querySelector(s);

// 以後は $ で短く要素をつかまえられる
$("#test").textContent = "$ で取得！";
$("#test").style.background = "#F5C24B";
$("#test").style.color = "#1a1305";`,en:`// Make $ a nickname for querySelector (name is your choice)
const $ = (s) => document.querySelector(s);

// After this, catch elements with the short $
$("#test").textContent = "Got it with $!";
$("#test").style.background = "#F5C24B";
$("#test").style.color = "#1a1305";`}}]},

  {name:{ja:"複数の要素を取る",en:"Grab multiple elements"}, sub:"querySelectorAll", desc:{ja:`同じ仲間の部品を<b>ぜんぶ一度に</b>つかまえる命令。取ったあと <b>forEach</b> で1個ずつ処理するのが定番です。<br><b>注意</b>：返るのは<b>配列によく似た並び</b>（NodeList）。forEach は使えますが push などの配列命令は使えません。1個も無い時は<b>空（長さ0）</b>で、null にはなりません。`,en:`A command that catches <b>all</b> parts of the same kind <b>at once</b>. It's standard to process them one at a time with <b>forEach</b> afterward.<br><b>Note</b>: it returns a <b>list very much like an array</b> (a NodeList). forEach works, but array commands like push don't. When there are none it's <b>empty (length 0)</b>, not null.`},
   tags:["querySelectorAll","forEach"], prep:[
     {s:'document.querySelectorAll(".item")',d:{ja:'class="item" の部品を<b>全部</b>つかまえる。',en:'Catches <b>all</b> parts with class="item".'}},
     {s:'.forEach((el) => { … })',d:{ja:'取れた全部を1個ずつ処理する。',en:'Processes each caught element one at a time.'}}],
   html:`<button class="item">A</button>
<button class="item">B</button>
<button class="item">C</button>`,
   css:`body {
  display: grid;
  place-items: center;
  gap: 10px;
  min-height: 74vh;
}

.item {
  padding: 12px 24px;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  background: #8b5cf6;
  color: #fff;
  cursor: pointer;
}`,
   variations:[{label:{ja:"全部に色をつける",en:"Color them all"}, code:{ja:`// class="item" のボタンを全部つかまえる
const items = document.querySelectorAll(".item");

// 取れた全部を、1個ずつ順番に処理
items.forEach((el) => {
  el.style.background = "#F5C24B";
  el.style.color = "#1a1305";
});`,en:`// Catch all buttons with class="item"
const items = document.querySelectorAll(".item");

// Process every caught element one at a time
items.forEach((el) => {
  el.style.background = "#F5C24B";
  el.style.color = "#1a1305";
});`}}]},

  {name:{ja:"かつ・または",en:"And / or"}, sub:{ja:'&& と ||',en:'&& and ||'}, desc:{ja:`条件を<b>組み合わせる</b>記号。<b>&&</b>＝かつ（両方true）、<b>||</b>＝または（どちらかtrue）。ifと一緒に使います。<br><b>ポイント</b>：「20以上 <b>かつ</b> 65未満」のように範囲を作れる。<b>!</b> を付けると<b>反対</b>（!true は false）。&& と || を混ぜる時は <b>( )</b> でくくると安全。`,en:`Symbols that <b>combine</b> conditions. <b>&&</b> = and (both true), <b>||</b> = or (either true). Used together with if.<br><b>Key point</b>: you can make ranges like "20 or more <b>and</b> under 65". Adding <b>!</b> gives the <b>opposite</b> (!true is false). When mixing && and ||, wrapping in <b>( )</b> is safer.`},
   tags:["&&","||"], prep:[
     {s:'A && B',d:{ja:'A も B も true のときだけ true。',en:'True only when both A and B are true.'}},
     {s:'A || B',d:{ja:'A か B のどちらかが true なら true。',en:'True if either A or B is true.'}}],
   variations:[{label:{ja:"組み合わせる",en:"Combine them"}, code:{ja:`const age = 25;

// 20以上 かつ 65未満
if (age >= 20 && age < 65) {
  console.log("大人です");
}

const day = "土";
// 土 または 日
if (day === "土" || day === "日") {
  console.log("週末！");
}`,en:`const age = 25;

// 20 or more AND under 65
if (age >= 20 && age < 65) {
  console.log("An adult");
}

const day = "Sat";
// Sat OR Sun
if (day === "Sat" || day === "Sun") {
  console.log("Weekend!");
}`}}]},

  {name:{ja:"タグごと書き換える",en:"Rewrite with tags"}, sub:"innerHTML", desc:{ja:`<b>innerHTML</b> は中身を<b>HTMLタグごと</b>書き換えます。textContent（文字だけ）との違いに注意。注意：<b>他人が入力した文字</b>を innerHTML に入れると、その中のタグが実行されて乗っ取りの入口になります（だから普段は textContent が安全）。`,en:`<b>innerHTML</b> rewrites the contents <b>including HTML tags</b>. Note the difference from textContent (text only). Warning: putting <b>text entered by someone else</b> into innerHTML runs the tags inside it — a doorway to hijacking (which is why textContent is usually safer).`},
   tags:["innerHTML","textContent"], prep:[
     {s:{ja:'element.innerHTML = "<b>太字</b>"',en:'element.innerHTML = "<b>bold</b>"'},d:{ja:'タグが<b>効いた状態</b>で入る。',en:'Goes in with the tags <b>active</b>.'}},
     {s:{ja:'textContent との違い',en:'vs. textContent'},d:{ja:'textContent はタグも<b>ただの文字</b>として表示する。',en:'textContent shows tags as <b>plain text</b>.'}}],
   variations:[{label:{ja:"違いを見る",en:"See the difference"}, code:{ja:`const el = document.querySelector("#test");

// innerHTML → タグが効く（太字になる）
el.innerHTML = "これは <b>太字</b> です";

// textContent なら <b> もそのまま文字として出る
// el.textContent = "これは <b>太字</b> です";`,en:`const el = document.querySelector("#test");

// innerHTML -> tags take effect (becomes bold)
el.innerHTML = "This is <b>bold</b>";

// With textContent, <b> shows as plain text
// el.textContent = "This is <b>bold</b>";`}}]},

  {name:{ja:"親・子・きょうだい",en:"Parent, child, sibling"}, sub:{ja:"DOMを行き来",en:"Move around the DOM"}, desc:{ja:`ある要素を起点に、<b>親・子・となりの要素</b>へ移動できます。アコーディオンなどで活躍します。`,en:`From a given element, you can move to its <b>parent, children, or neighbor</b>. Great for accordions and the like.`},
   tags:["parentElement","children","nextElementSibling"], prep:[
     {s:'el.parentElement',d:{ja:'1つ上の<b>親</b>要素。',en:'The <b>parent</b> one level up.'}},
     {s:'el.children',d:{ja:'中の<b>子</b>要素たち。',en:'The <b>child</b> elements inside.'}},
     {s:'el.nextElementSibling',d:{ja:'すぐ<b>となり</b>の要素。',en:'The immediate <b>next</b> sibling element.'}}],
   html:{ja:`<div class="box">
  <p id="me">わたし</p>
  <p>となりさん</p>
</div>`,en:`<div class="box">
  <p id="me">me</p>
  <p>neighbor</p>
</div>`},
   css:`body {
  padding: 24px;
  font-family: sans-serif;
}

.box {
  padding: 16px;
  border: 2px solid #8b5cf6;
  border-radius: 8px;
}`,
   variations:[{label:{ja:"行き来する",en:"Move around"}, code:{ja:`const me = document.querySelector("#me");

// 親をつかまえて、背景の色を変える
me.parentElement.style.background = "#f2eefe";

// となりの要素の文字を変える
me.nextElementSibling.textContent = "となりを変えた！";`,en:`const me = document.querySelector("#me");

// Catch the parent and change its background
me.parentElement.style.background = "#f2eefe";

// Change the neighbor element's text
me.nextElementSibling.textContent = "Changed the neighbor!";`}}]},

  {name:{ja:"リストを1つずつ",en:"List, one by one"}, sub:"for...of", desc:{ja:`配列の中身を<b>先頭から順に</b>取り出す、いちばん読みやすいループ。<b>for (const x of 配列)</b> で、x に1個ずつ入ってきます。`,en:`The most readable loop for taking array items <b>in order from the start</b>. With <b>for (const x of array)</b>, x receives one item at a time.`},
   tags:["for...of"], prep:[
     {s:{ja:'for (const x of 配列)',en:'for (const x of array)'},d:{ja:'配列から<b>1個ずつ</b> x に入れて、{ } の中をくり返す。',en:'Puts each array item into x <b>one at a time</b> and repeats the { } block.'}}],
   variations:[{label:{ja:"順番に出す",en:"Print in order"}, code:{ja:`const fruits = ["りんご", "みかん", "ぶどう"];

for (const f of fruits) {
  console.log(f);
}
// りんご → みかん → ぶどう と順に出る`,en:`const fruits = ["apple", "orange", "grape"];

for (const f of fruits) {
  console.log(f);
}
// prints apple -> orange -> grape in order`}}]},

  {name:{ja:"含まれてる？",en:"Is it included?"}, sub:"includes", desc:{ja:`配列や文字の中に<b>「それが入ってるか」</b>を true / false で教えてくれます。会員リストや NGワードのチェックに。<br><b>注意</b>：<b>大文字と小文字は区別</b>されます（"ABC".includes("abc") は false）。ゆれを無視したい時は、先に toLowerCase でそろえてから調べます。`,en:`Tells you with true / false <b>whether something is in</b> an array or string. Good for member lists or banned-word checks.<br><b>Note</b>: it's <b>case-sensitive</b> ("ABC".includes("abc") is false). To ignore case, normalize with toLowerCase first, then check.`},
   tags:["includes"], prep:[
     {s:{ja:'配列.includes(値)',en:'array.includes(value)'},d:{ja:'その値が<b>あれば true</b>、無ければ false。',en:'<b>true if</b> the value is present, false if not.'}}],
   variations:[{label:{ja:"あるか調べる",en:"Check presence"}, code:{ja:`const members = ["たろう", "はなこ"];
console.log(members.includes("たろう"));  // true
console.log(members.includes("じろう"));  // false

const word = "JavaScript";
console.log(word.includes("Script"));     // true`,en:`const members = ["Taro", "Hanako"];
console.log(members.includes("Taro"));    // true
console.log(members.includes("Jiro"));    // false

const word = "JavaScript";
console.log(word.includes("Script"));     // true`}}]},

  {name:{ja:"1行で分岐",en:"Branch in one line"}, sub:{ja:"? :（三項演算子）",en:"? : (ternary)"}, desc:{ja:`if を<b>1行</b>で書ける書き方。<b>条件 ? A : B</b>。「A か B か、どっちの値にする？」を短く決められます。`,en:`A way to write an if <b>in one line</b>. <b>condition ? A : B</b>. Lets you decide "which value, A or B?" concisely.`},
   tags:["? :"], prep:[
     {s:{ja:'条件 ? A : B',en:'condition ? A : B'},d:{ja:'条件が true なら<b>A</b>、false なら<b>B</b> という「値」になる。',en:'Becomes the value <b>A</b> if the condition is true, <b>B</b> if false.'}}],
   variations:[{label:{ja:"点数で判定",en:"Judge by score"}, code:{ja:`const score = 80;
const result = score >= 60 ? "合格" : "不合格";
console.log(result);             // "合格"

const n = 7;
console.log(n % 2 === 0 ? "偶数" : "奇数");  // "奇数"`,en:`const score = 80;
const result = score >= 60 ? "Pass" : "Fail";
console.log(result);             // "Pass"

const n = 7;
console.log(n % 2 === 0 ? "even" : "odd");  // "odd"`}}]},

  {name:{ja:"たくさんの分岐",en:"Many branches"}, sub:"switch", desc:{ja:`「値が A ならこれ、B ならこれ…」と<b>たくさんに枝分かれ</b>するとき、if を並べるより読みやすい書き方。<br><b>ルール（重要）</b>：各 case の最後に <b>break</b> を必ず書く。忘れると<b>次の case まで続けて実行</b>される（fall-through）。一致判定は <b>===</b> と同じ厳密比較です。`,en:`When you have <b>many branches</b> like "if value is A do this, if B do that…", this reads better than stacking ifs.<br><b>Rule (important)</b>: always write <b>break</b> at the end of each case. Forget it and it <b>keeps running into the next case</b> (fall-through). Matching is strict, like <b>===</b>.`},
   tags:["switch","case"], prep:[
     {s:{ja:'switch (値) { case A: … }',en:'switch (value) { case A: … }'},d:{ja:'値が<b>case の値と一致</b>したところを実行。<b>break</b> で抜ける。',en:'Runs where the value <b>matches a case</b>. Exit with <b>break</b>.'}},
     {s:'default',d:{ja:'どれにも当てはまらない時の受け皿。',en:'The catch-all when nothing else matches.'}}],
   variations:[{label:{ja:"曜日で分ける",en:"Branch by weekday"}, code:{ja:`const day = 3;
switch (day) {
  case 1: console.log("月曜"); break;
  case 3: console.log("水曜"); break;
  case 5: console.log("金曜"); break;
  default: console.log("その他の曜日");
}`,en:`const day = 3;
switch (day) {
  case 1: console.log("Monday"); break;
  case 3: console.log("Wednesday"); break;
  case 5: console.log("Friday"); break;
  default: console.log("another day");
}`}}]},

  {name:{ja:"文字を置き換える",en:"Replace text"}, sub:"replaceAll", desc:{ja:`文字の中の一部を<b>別の文字に置き換え</b>ます。「様→さん」の一括変換や、余計な記号の削除に。`,en:`<b>Replaces part</b> of a string with other text. Good for bulk swaps or stripping unwanted symbols.`},
   tags:["replaceAll","replace"], prep:[
     {s:{ja:'文字.replaceAll("A", "B")',en:'text.replaceAll("A", "B")'},d:{ja:'文字の中の<b>すべてのA</b>をBに置き換えた新しい文字を返す。',en:'Returns a new string with <b>every A</b> replaced by B.'}},
     {s:{ja:'文字.replace("A", "B")',en:'text.replace("A", "B")'},d:{ja:'<b>最初の1個だけ</b>置き換える。',en:'Replaces <b>only the first one</b>.'}}],
   variations:[{label:{ja:"置き換える",en:"Replace"}, code:{ja:`const s = "たろう様、じろう様、こんにちは";
console.log(s.replaceAll("様", "さん"));
// たろうさん、じろうさん、こんにちは

const tel = "090-1234-5678";
console.log(tel.replaceAll("-", ""));  // 09012345678`,en:`const s = "Mr. Taro, Mr. Jiro, hello";
console.log(s.replaceAll("Mr. ", ""));
// Taro, Jiro, hello

const tel = "090-1234-5678";
console.log(tel.replaceAll("-", ""));  // 09012345678`}}]},

  {name:{ja:"配列の何番目？",en:"Which index?"}, sub:{ja:"[0] から始まる番号",en:"Indexing from [0]"}, desc:{ja:`配列の中身は <b>[番号]</b> で取り出します。注意：番号は<b>0から</b>始まる！ 最初が [0]、2番目が [1]。ここは全員が一度は間違えるポイント。`,en:`Get array items with <b>[index]</b>. Note: indexes start <b>from 0</b>! First is [0], second is [1]. Everyone trips on this once.`},
   tags:["[0]",{ja:"インデックス",en:"index"}], prep:[
     {s:{ja:'配列[0]',en:'array[0]'},d:{ja:'<b>最初</b>の中身（1番目なのに0！）。',en:'The <b>first</b> item (index 0 even though it\'s "first"!).'}},
     {s:{ja:'配列[配列.length - 1]',en:'array[array.length - 1]'},d:{ja:'<b>最後</b>の中身を取る定番の書き方。',en:'The standard way to get the <b>last</b> item.'}}],
   variations:[{label:{ja:"取り出す",en:"Extract"}, code:{ja:`const fruits = ["りんご", "みかん", "ぶどう"];

console.log(fruits[0]);      // りんご（最初は 0 番）
console.log(fruits[1]);      // みかん
console.log(fruits[fruits.length - 1]);  // ぶどう（最後）`,en:`const fruits = ["apple", "orange", "grape"];

console.log(fruits[0]);      // apple (first is index 0)
console.log(fruits[1]);      // orange
console.log(fruits[fruits.length - 1]);  // grape (last)`}}]},

  {name:{ja:"文字を分ける・つなぐ",en:"Split & join text"}, sub:"split / join", desc:{ja:`<b>split（スプリット）</b>は文字を<b>区切りでバラして配列に</b>、<b>join（ジョイン）</b>は<b>配列をつないで1つの文字に</b>戻します。カンマ区切りのデータやタグの処理で大活躍。ペアで覚えると便利です。`,en:`<b>split</b> <b>breaks text by a delimiter into an array</b>; <b>join</b> <b>joins an array back into one string</b>. Great for comma-separated data and tags. Handy to learn as a pair.`},
   tags:["split","join"], prep:[
     {s:'"a,b,c".split(",")',d:{ja:'カンマで区切って <b>["a","b","c"]</b> の配列にする。( )の中が区切り文字。',en:'Splits on the comma into the array <b>["a","b","c"]</b>. What\'s in ( ) is the delimiter.'}},
     {s:{ja:'配列.join("-")',en:'array.join("-")'},d:{ja:'配列を <b>"a-b-c"</b> のように<b>つなぐ</b>。( )の中がつなぎ目。',en:'<b>Joins</b> the array like <b>"a-b-c"</b>. What\'s in ( ) is the glue.'}}],
   variations:[
     {label:{ja:"バラす（split）",en:"Break up (split)"}, code:{ja:`const data = "りんご,みかん,ぶどう";
const arr = data.split(",");   // カンマでバラして配列に
console.log(arr);              // ["りんご", "みかん", "ぶどう"]
console.log(arr.length);       // 3（個数が分かる）`,en:`const data = "apple,orange,grape";
const arr = data.split(",");   // break on comma into an array
console.log(arr);              // ["apple", "orange", "grape"]
console.log(arr.length);       // 3 (you get the count)`}},
     {label:{ja:"つなぐ（join）",en:"Join up (join)"}, code:{ja:`const parts = ["2026", "07", "06"];
console.log(parts.join("/"));  // "2026/07/06"
console.log(parts.join(""));   // "20260706"（つなぎ目なし）`,en:`const parts = ["2026", "07", "06"];
console.log(parts.join("/"));  // "2026/07/06"
console.log(parts.join(""));   // "20260706" (no glue)`}}]},

  {name:{ja:"大文字・小文字にする",en:"Upper / lower case"}, sub:"toUpperCase / toLowerCase", desc:{ja:`英語を<b>全部大文字／全部小文字</b>に変える命令。入力のゆれ（Apple と APPLE）をそろえて比べたいときに便利。`,en:`Commands to make English <b>all uppercase / all lowercase</b>. Handy for normalizing input variations (Apple vs APPLE) before comparing.`},
   tags:["toUpperCase","toLowerCase"], prep:[
     {s:{ja:'文字.toUpperCase()',en:'text.toUpperCase()'},d:{ja:'<b>大文字</b>にした新しい文字を返す。',en:'Returns a new <b>uppercase</b> string.'}},
     {s:{ja:'文字.toLowerCase()',en:'text.toLowerCase()'},d:{ja:'<b>小文字</b>にした新しい文字を返す。',en:'Returns a new <b>lowercase</b> string.'}}],
   variations:[{label:{ja:"変換してみる",en:"Convert it"}, code:`const s = "Hello";
console.log(s.toUpperCase());    // "HELLO"
console.log(s.toLowerCase());    // "hello"`}]},

  {name:{ja:"小数を丸める",en:"Round decimals"}, sub:".toFixed", desc:{ja:`<b>0.1 + 0.2</b> が <b>0.30000…</b> になる、あの困ったやつを解決。<b>.toFixed(桁数)</b> で「小数◯桁まで」に整えます（四捨五入）。金額表示で必須。<br><b>注意</b>：返るのは<b>「文字」</b>なので、その後さらに計算するなら <b>Number()</b> で数に戻します。`,en:`Fixes that annoying thing where <b>0.1 + 0.2</b> becomes <b>0.30000…</b>. <b>.toFixed(digits)</b> trims to a set number of decimal places (rounding). Essential for money display.<br><b>Note</b>: it returns <b>text</b>, so to calculate further, convert back to a number with <b>Number()</b>.`},
   tags:[".toFixed"], prep:[
     {s:{ja:'数.toFixed(2)',en:'num.toFixed(2)'},d:{ja:'小数<b>2桁</b>に丸めた「文字」を返す（四捨五入）。',en:'Returns text rounded to <b>2 decimal places</b>.'}}],
   variations:[{label:{ja:"2桁にそろえる",en:"To 2 places"}, code:`const price = 0.1 + 0.2;
console.log(price);              // 0.30000000000000004
console.log(price.toFixed(2));   // "0.30"

const tax = 500 * 1.1;
console.log(tax.toFixed(0));     // "550"`}]},

  {name:{ja:"今の日付・時刻",en:"Current date & time"}, sub:"new Date", desc:{ja:`<b>new Date()</b> で「今この瞬間」を取り出せます。年・月・日・時・分・秒がバラバラに取れるので、時計やカレンダーが作れます。`,en:`<b>new Date()</b> grabs "this very moment". You can get year, month, day, hour, minute, and second separately, so you can build clocks and calendars.`},
   tags:["Date","getFullYear"], prep:[
     {s:'new',d:{ja:'「<b>新しく1個作る</b>」の合図。Date（日時）の実物を作るときに付ける。',en:'A signal to <b>make a new one</b>. Add it when creating an actual Date.'}},
     {s:'new Date()',d:{ja:'<b>今の日時</b>が入った箱を作る。',en:'Creates a box holding the <b>current date & time</b>.'}},
     {s:'.getFullYear()',d:{ja:'西暦（年）を取り出す。月は <b>.getMonth()+1</b>（0始まりなので+1）。',en:'Gets the year. For month use <b>.getMonth()+1</b> (0-based, so +1).'}}],
   variations:[{label:{ja:"今を表示",en:"Show now"}, code:{ja:`const now = new Date();
console.log("年:", now.getFullYear());
console.log("月:", now.getMonth() + 1);   // 0始まりなので +1
console.log("日:", now.getDate());
console.log("時:", now.getHours());`,en:`const now = new Date();
console.log("year:", now.getFullYear());
console.log("month:", now.getMonth() + 1);   // 0-based, so +1
console.log("day:", now.getDate());
console.log("hour:", now.getHours());`}}]},

  {name:{ja:"const と let の使い分け",en:"const vs. let"}, sub:{ja:"箱の種類を選ぶ",en:"Choosing box types"}, desc:{ja:`変数を作る箱には <b>const</b> と <b>let</b> の2種類。<b>const</b>＝あとで<b>中身を変えない</b>箱、<b>let</b>＝あとで<b>中身を変える</b>箱。<br><b>ルール</b>：まず <b>const で書き、変える必要が出たら let に</b>するのが今の定番（うっかり書き換えを防げる）。<b>var は古い書き方</b>なので新しく書くコードでは使いません。const の箱に入れ直すと<b>エラー</b>で教えてくれます。`,en:`There are two kinds of variable box: <b>const</b> and <b>let</b>. <b>const</b> = a box you <b>won't change</b> later; <b>let</b> = a box you <b>will change</b> later.<br><b>Rule</b>: the modern default is to <b>write const first, switch to let only when you need to change it</b> (prevents accidental overwrites). <b>var is an old style</b>, not used in new code. Re-assigning a const box tells you with an <b>error</b>.`},
   tags:["const","let"], prep:[
     {s:{ja:'const 名前 = 値',en:'const name = value'},d:{ja:'あとで<b>変えない</b>箱。まずはこれ。',en:'A box you <b>won\'t change</b>. Start here.'}},
     {s:{ja:'let 名前 = 値',en:'let name = value'},d:{ja:'あとで<b>変える</b>箱（カウンターなど）。',en:'A box you <b>will change</b> (counters, etc.).'}},
     {s:{ja:'const を入れ直す',en:'Reassign a const'},d:{ja:'エラーになる（＝壊れる前に気づける）。',en:'Causes an error (so you catch it before things break).'}}],
   variations:[
     {label:{ja:"使い分ける",en:"Use each"}, code:{ja:`const tax = 1.1;      // 変えない値 → const
let total = 0;         // これから増やす → let

total = 100 * tax;
console.log(total);    // 110
// tax = 1.2;          // ← const を変えようとするとエラー`,en:`const tax = 1.1;      // value that won't change -> const
let total = 0;         // will be increased -> let

total = 100 * tax;
console.log(total);    // 110
// tax = 1.2;          // <- changing a const is an error`}},
     {label:{ja:"const は安全",en:"const is safe"}, code:{ja:`const name = "たろう";
// name = "はなこ";    // これはエラー！
console.log(name);     // "たろう"（勝手に変わらない安心感）`,en:`const name = "Taro";
// name = "Hanako";    // this is an error!
console.log(name);     // "Taro" (the safety of never changing)`}}]},

  {name:{ja:"アロー関数（=>）",en:"Arrow functions (=>)"}, sub:{ja:"短い関数の書き方",en:"A shorter function form"}, desc:{ja:`<b>() =&gt; { … }</b> は関数を<b>短く書く</b>今どきの書き方（アロー＝矢印）。<b>function</b> と同じ働きで、map や forEach、addEventListener に渡すときに大活躍します。<br><b>ルール</b>：<b>( )</b> は受け取るもの（引数）、<b>=&gt;</b> の右が処理。中身が<b>1行で値を返すだけ</b>なら <b>{ } と return を省略</b>できます（例: n =&gt; n * 2）。`,en:`<b>() =&gt; { … }</b> is the modern, <b>shorter</b> way to write a function (arrow = the arrow symbol). It works like <b>function</b> and shines when passed to map, forEach, or addEventListener.<br><b>Rules</b>: <b>( )</b> is what it receives (arguments), the right of <b>=&gt;</b> is the body. If the body is <b>a single line that just returns a value</b>, you can <b>omit { } and return</b> (e.g. n =&gt; n * 2).`},
   tags:["=>",{ja:"アロー関数",en:"arrow function"}], prep:[
     {s:'() => { … }',d:{ja:'引数なしの関数。',en:'A function with no arguments.'}},
     {s:'(x) => x * 2',d:{ja:'1行なら { } と return を<b>省略</b>できる。',en:'For one line you can <b>omit</b> { } and return.'}}],
   variations:[
     {label:{ja:"functionと同じ",en:"Same as function"}, code:{ja:`// この2つは同じ意味
const hello1 = function() { return "やあ"; };
const hello2 = () => "やあ";        // 短い！

console.log(hello1());   // "やあ"
console.log(hello2());   // "やあ"`,en:`// These two mean the same thing
const hello1 = function() { return "Hi"; };
const hello2 = () => "Hi";          // shorter!

console.log(hello1());   // "Hi"
console.log(hello2());   // "Hi"`}},
     {label:{ja:"引数つき",en:"With arguments"}, code:{ja:`const double = (n) => n * 2;   // 1行なら return も省略
console.log(double(5));         // 10

const add = (a, b) => a + b;
console.log(add(3, 4));         // 7`,en:`const double = (n) => n * 2;   // one line, so return is omitted
console.log(double(5));         // 10

const add = (a, b) => a + b;
console.log(add(3, 4));         // 7`}}]}
]},

/* ============ 中級編：基本の動き ============ */
{name:"中級", items:[
  {name:{ja:"フェードイン",en:"Fade in"}, sub:{ja:"ふわっと現れる",en:"Appear softly"}, desc:{ja:`透明から表示へ。<b>opacityを0→1</b>に変えるだけ。方向をつけたいなら<b>transform</b>も一緒に動かす。<br>必須：<b>transition</b>（なめらか化）。`,en:`From transparent to visible. Just change <b>opacity from 0 to 1</b>. For a direction, move <b>transform</b> too.<br>Required: <b>transition</b> (for smoothness).`},
   tags:["opacity","transform","transition"], prep:[
     {s:'element.style.opacity',d:{ja:'透明度。"0"で透明（見えない）、"1"で表示。',en:'Opacity. "0" is transparent (invisible), "1" is visible.'}},
     {s:'element.style.transform',d:{ja:'位置を動かす。X=横（−で左・＋で右）、Y=縦（<b>−で上・＋で下</b>）。',en:'Moves the position. X = horizontal (− left, + right), Y = vertical (<b>− up, + down</b>).'}},
     {s:'transition',d:{ja:'変化を<b>なめらか</b>にする指定。"all .6s ease"＝0.6秒かけて。これが無いとパッと変わる。',en:'Makes changes <b>smooth</b>. "all .6s ease" = over 0.6s. Without it, changes snap instantly.'}},
     {s:'void element.offsetWidth',d:{ja:'<b>おまじないの1行</b>（今は意味が分からなくてOK）。「透明の状態を先に画面へ反映させる」ためのもので、これが無いと変化が一瞬で終わり、動きが見えません。',en:'A <b>"magic" line</b> (fine not to understand yet). It flushes the transparent state to the screen first; without it the change finishes instantly and you see no motion.'}}],
   variations:[
     {label:{ja:"その場でふわっ",en:"Soft, in place"}, code:`const el = document.querySelector("#test");
el.style.opacity = "0";
void el.offsetWidth;
el.style.transition = "opacity .6s ease";
el.style.opacity = "1";`},
     {label:{ja:"上から",en:"From top"}, code:`const el = document.querySelector("#test");
el.style.opacity = "0";
el.style.transform = "translateY(-40px)";
void el.offsetWidth;
el.style.transition = "all .6s ease";
el.style.opacity = "1";
el.style.transform = "translateY(0)";`},
     {label:{ja:"下から",en:"From bottom"}, code:`const el = document.querySelector("#test");
el.style.opacity = "0";
el.style.transform = "translateY(40px)";
void el.offsetWidth;
el.style.transition = "all .6s ease";
el.style.opacity = "1";
el.style.transform = "translateY(0)";`},
     {label:{ja:"左から",en:"From left"}, code:`const el = document.querySelector("#test");
el.style.opacity = "0";
el.style.transform = "translateX(-80px)";
void el.offsetWidth;
el.style.transition = "all .6s ease";
el.style.opacity = "1";
el.style.transform = "translateX(0)";`},
     {label:{ja:"右から",en:"From right"}, code:`const el = document.querySelector("#test");
el.style.opacity = "0";
el.style.transform = "translateX(80px)";
void el.offsetWidth;
el.style.transition = "all .6s ease";
el.style.opacity = "1";
el.style.transform = "translateX(0)";`}]},

  {name:{ja:"フェードアウト",en:"Fade out"}, sub:{ja:"すーっと消える",en:"Vanish smoothly"}, desc:{ja:`表示から透明へ。<b>opacityを1→0</b>にするだけ。消えながら流したいなら transform も。`,en:`From visible to transparent. Just change <b>opacity from 1 to 0</b>. To drift while fading, use transform too.`},
   tags:["opacity","transition"], prep:[{s:'opacity = "0"',d:{ja:'透明＝<b>消える</b>。',en:'Transparent = <b>disappears</b>.'}},{s:'transition',d:{ja:'じわっと消えるように。',en:'So it fades gradually.'}}],
   variations:[
     {label:{ja:"その場で消える",en:"Vanish in place"}, code:`const el = document.querySelector("#test");
el.style.transition = "opacity .6s ease";
el.style.opacity = "1";
void el.offsetWidth;
el.style.opacity = "0";`},
     {label:{ja:"右へ消える",en:"Vanish rightward"}, code:`const el = document.querySelector("#test");
el.style.transition = "all .6s ease";
void el.offsetWidth;
el.style.opacity = "0";
el.style.transform = "translateX(80px)";`}]},

  {name:{ja:"スライドイン",en:"Slide in"}, sub:{ja:"横/縦から滑り込む",en:"Slide from a side"}, desc:{ja:`フェードなしで<b>位置だけ</b>を動かす。<b>transform: translate</b>を使う定番。`,en:`Move <b>only the position</b>, no fade. The standard is <b>transform: translate</b>.`},
   tags:["transform","translateX","transition"], prep:[{s:'translateX(px)',d:{ja:'横。マイナスで左。',en:'Horizontal. Negative = left.'}},{s:'translateY(px)',d:{ja:'縦。マイナスで上。',en:'Vertical. Negative = up.'}}],
   variations:[
     {label:{ja:"左から",en:"From left"}, code:`const el = document.querySelector("#test");
el.style.transform = "translateX(-140px)";
void el.offsetWidth;
el.style.transition = "transform .5s ease";
el.style.transform = "translateX(0)";`},
     {label:{ja:"右から",en:"From right"}, code:`const el = document.querySelector("#test");
el.style.transform = "translateX(140px)";
void el.offsetWidth;
el.style.transition = "transform .5s ease";
el.style.transform = "translateX(0)";`},
     {label:{ja:"上から",en:"From top"}, code:`const el = document.querySelector("#test");
el.style.transform = "translateY(-120px)";
void el.offsetWidth;
el.style.transition = "transform .5s ease";
el.style.transform = "translateY(0)";`}]},

  {name:{ja:"文字を書き換える",en:"Rewrite text"}, sub:"textContent", desc:{ja:`要素の<b>中の文字</b>を書き換えます。<b>textContent</b> に新しい文字を入れる（代入する）だけ。<br><b>ポイント</b>：入れた文字は<b>すべてただの文字</b>として表示（タグを書いても効かない）＝<b>安全</b>。タグを効かせたい時だけ innerHTML（初級参照。他人の入力には使わない）。`,en:`Rewrites the <b>text inside</b> an element. Just assign new text to <b>textContent</b>.<br><b>Key point</b>: whatever you put in shows as <b>plain text</b> (tags don't take effect) = <b>safe</b>. Only use innerHTML when you need tags to work (see Beginner; never on others' input).`},
   tags:["textContent"], prep:[{s:'element.textContent = "…"',d:{ja:'中身の文字を<b>差し替える</b>。',en:'<b>Replaces</b> the inner text.'}}],
   variations:[
     {label:{ja:"書き換える",en:"Rewrite"}, code:{ja:`const el = document.querySelector("#test");
el.textContent = "文字が変わった！";`,en:`const el = document.querySelector("#test");
el.textContent = "The text changed!";`}},
     {label:{ja:"数を混ぜる",en:"Mix in a number"}, code:{ja:`const el = document.querySelector("#test");
const kazu = 3 + 4;
el.textContent = "答えは " + kazu + " です";`,en:`const el = document.querySelector("#test");
const num = 3 + 4;
el.textContent = "The answer is " + num;`}},
     {label:{ja:"絵文字も入る",en:"Emoji work too"}, code:{ja:`const el = document.querySelector("#test");
el.textContent = "🎉 おめでとう！ 🎉";`,en:`const el = document.querySelector("#test");
el.textContent = "🎉 Congrats! 🎉";`}}]},

  {name:{ja:"見た目を変える",en:"Change the look"}, sub:"style", desc:{ja:`<b>element.style.○○</b> でCSSをJSから直接変えます。色・大きさ・角丸など自由自在。<br><b>ルール</b>：プロパティ名は<b>キャメルケース</b>（CSSの <b>background-color</b> は JSで <b>backgroundColor</b>）。値は<b>文字</b>で入れ、<b>px や #色</b>などの単位・記号も忘れずに（例: "20px"）。`,en:`Change CSS directly from JS with <b>element.style.xxx</b>. Color, size, rounded corners — all free.<br><b>Rules</b>: property names are <b>camelCase</b> (CSS <b>background-color</b> is <b>backgroundColor</b> in JS). Pass values as <b>text</b>, and don't forget units/symbols like <b>px or #color</b> (e.g. "20px").`},
   tags:["style","background","color"], prep:[{s:'element.style.background',d:{ja:'背景色を変える。',en:'Changes the background color.'}},{s:'element.style.color',d:{ja:'文字色を変える。',en:'Changes the text color.'}}],
   variations:[{label:{ja:"色を変える",en:"Change color"}, code:`const el = document.querySelector("#test");
el.style.background = "#F5C24B";
el.style.color = "#1a1305";
el.style.borderRadius = "999px";`}]},

  {name:{ja:"クラスを切り替える",en:"Toggle a class"}, sub:"classList", desc:{ja:`見た目の変化を<b>CSS側に用意しておき</b>、JSは<b>クラスを付け外しするだけ</b>にする定番テク。JSがすっきりします。<b>toggle</b>は押すたびON↔OFF。`,en:`A staple technique: <b>define the look changes in CSS</b>, and have JS <b>just add/remove a class</b>. Keeps JS clean. <b>toggle</b> flips ON↔OFF each press.`},
   tags:["classList.toggle"], prep:[
     {s:'el.addEventListener("click", () => { … })',d:{ja:'「クリックされたら { } の中を実行して」という<b>予約</b>。ここが初登場（くわしくは上級で）。',en:'A <b>reservation</b> meaning "when clicked, run the { }". First seen here (details in Advanced).'}},
     {s:'classList.toggle("on")',d:{ja:'「on」クラスが<b>付いてたら外す・無ければ付ける</b>。',en:'<b>Removes the "on" class if present, adds it if not</b>.'}},
     {s:{ja:'CSS の .test.on { }',en:'CSS .test.on { }'},d:{ja:'「on」が付いたときの見た目を、あらかじめCSSに書いておく。',en:'Define in CSS ahead of time how it looks when "on" is applied.'}}],
   css:{ja:`body {
  display: grid;
  place-items: center;
  min-height: 74vh;
}

/* ふだんの見た目 */
.test {
  padding: 15px 40px;
  font-size: 20px;
  border: none;
  border-radius: 12px;
  background: #8b5cf6;
  color: #fff;
  cursor: pointer;
  transition: .2s;        /* 変化をなめらかに */
}

/* 「on」クラスが付いたときだけの見た目 */
.test.on {
  background: #F5C24B;     /* 色を金色に */
  color: #1a1305;
  transform: scale(1.1);  /* 少し大きく */
}`,en:`body {
  display: grid;
  place-items: center;
  min-height: 74vh;
}

/* the normal look */
.test {
  padding: 15px 40px;
  font-size: 20px;
  border: none;
  border-radius: 12px;
  background: #8b5cf6;
  color: #fff;
  cursor: pointer;
  transition: .2s;        /* make changes smooth */
}

/* the look only when the "on" class is applied */
.test.on {
  background: #F5C24B;     /* color to gold */
  color: #1a1305;
  transform: scale(1.1);  /* a bit bigger */
}`},
   variations:[
     {label:{ja:"クリックで切替",en:"Toggle on click"}, code:{ja:`// ボタンをつかまえる
const el = document.querySelector("#test");

// クリックされるたびに実行される
el.addEventListener("click", () => {
  el.classList.toggle("on");   // on クラスを付けたり外したり
});
// プレビューのボタンを何回か押してね`,en:`// Catch the button
const el = document.querySelector("#test");

// Runs every time it's clicked
el.addEventListener("click", () => {
  el.classList.toggle("on");   // add/remove the on class
});
// Press the preview button a few times`}},
     {label:{ja:"最初からON",en:"On from the start"}, code:{ja:`const el = document.querySelector("#test");
el.classList.add("on");     // 最初から on を付けておく
el.addEventListener("click", () => {
  el.classList.remove("on"); // 押したら on を外す（＝元に戻る）
});
// 押すと金色→むらさきに戻る`,en:`const el = document.querySelector("#test");
el.classList.add("on");     // start with on applied
el.addEventListener("click", () => {
  el.classList.remove("on"); // click removes on (back to normal)
});
// Pressing reverts gold -> purple`}}]},

  {name:{ja:"クリックで数える",en:"Count on click"}, sub:{ja:"カウンター",en:"Counter"}, desc:{ja:`押した<b>回数を変数で数えて</b>表示。変数＋イベント＋書き換えの合わせ技。`,en:`<b>Count clicks with a variable</b> and display it. A combo of variable + event + rewrite.`},
   tags:["let","addEventListener","textContent"], prep:[{s:'count = count + 1',d:{ja:'カウントを1増やす。',en:'Increase the count by 1.'}}],
   variations:[{label:{ja:"数える",en:"Count"}, code:{ja:`const el = document.querySelector("#test");
let count = 0;
el.addEventListener("click", () => {
  count = count + 1;
  el.textContent = count + " 回押した";
});
// プレビューのボタンを連打してみて`,en:`const el = document.querySelector("#test");
let count = 0;
el.addEventListener("click", () => {
  count = count + 1;
  el.textContent = "pressed " + count + " times";
});
// Tap the preview button repeatedly`}}]},

  {name:{ja:"色をランダムに",en:"Random color"}, sub:"Math.random", desc:{ja:`<b>Math.random()</b>でランダムな数を作り、押すたび色を変える。`,en:`Make a random number with <b>Math.random()</b> and change the color on each press.`},
   tags:["Math.random","Math.floor"], prep:[{s:'Math.random()',d:{ja:'0〜1のランダムな数。',en:'A random number from 0 to 1.'}},{s:'Math.floor()',d:{ja:'小数を切り捨て。',en:'Drops the decimal part.'}},{s:{ja:'hsl(角度, 70%, 60%)',en:'hsl(hue, 70%, 60%)'},d:{ja:'色を<b>0〜360の角度</b>で指定するCSSの書き方（0=赤、120=緑、240=青）。ランダム色と相性抜群。',en:'A CSS way to specify color by a <b>0–360 angle</b> (0=red, 120=green, 240=blue). Perfect for random colors.'}}],
   variations:[{label:{ja:"ランダム色",en:"Random color"}, code:{ja:`const el = document.querySelector("#test");
el.addEventListener("click", () => {
  const r = Math.floor(Math.random() * 360);
  el.style.background = "hsl(" + r + ", 70%, 60%)";
  el.textContent = "色 " + r;
});
// 押すたびに色が変わる`,en:`const el = document.querySelector("#test");
el.addEventListener("click", () => {
  const r = Math.floor(Math.random() * 360);
  el.style.background = "hsl(" + r + ", 70%, 60%)";
  el.textContent = "color " + r;
});
// The color changes on each press`}}]},

  {name:{ja:"表示・非表示を切り替える",en:"Show / hide toggle"}, sub:"style.display", desc:{ja:`部品を<b>消したり出したり</b>する定番。<b>display</b>を "none"（消える）↔ "" （出る）で切り替えます。<br><b>注意</b>：<b>none は場所ごと消える</b>（まわりが詰まる）。場所を残して見えなくするだけなら visibility:hidden。"" は「指定を消して元のCSSに戻す」意味です。`,en:`The staple way to <b>hide and show</b> a part. Toggle <b>display</b> between "none" (gone) and "" (shown).<br><b>Note</b>: <b>none removes its space too</b> (things reflow). To hide but keep the space, use visibility:hidden. "" means "clear the override and revert to the original CSS".`},
   tags:["style.display"], prep:[
     {s:'element.style.display = "none"',d:{ja:'その部品を<b>消す</b>（場所ごと無くなる）。',en:'<b>Hides</b> the part (its space is removed too).'}},
     {s:'element.style.display = ""',d:{ja:'消した指定を取り消して<b>元に戻す</b>。',en:'Clears the override and <b>reverts</b>.'}}],
   html:{ja:`<button id="btn">切り替え</button>
<p id="target">わたしは消えたり出たりします</p>`,en:`<button id="btn">Toggle</button>
<p id="target">I appear and disappear</p>`},
   css:`body {
  padding: 24px;
  font-family: sans-serif;
}

button {
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  background: #8b5cf6;
  color: #fff;
  cursor: pointer;
}`,
   variations:[{label:{ja:"消す/出す",en:"Hide / show"}, code:{ja:`const btn = document.querySelector("#btn");
const target = document.querySelector("#target");

btn.addEventListener("click", () => {
  // いま消えている？ → 消えてたら出す、出てたら消す
  if (target.style.display === "none") {
    target.style.display = "";       // 出す
  } else {
    target.style.display = "none";   // 消す
  }
});
// プレビューのボタンを押してみて`,en:`const btn = document.querySelector("#btn");
const target = document.querySelector("#target");

btn.addEventListener("click", () => {
  // Is it hidden now? -> show if hidden, hide if shown
  if (target.style.display === "none") {
    target.style.display = "";       // show
  } else {
    target.style.display = "none";   // hide
  }
});
// Press the preview button`}}]},

  {name:{ja:"マウスで反応",en:"React to the mouse"}, sub:"mouseover / mouseout", desc:{ja:`マウスを<b>乗せた時</b>と<b>離した時</b>で見た目を変えます。クリックしなくても反応するのがポイント。`,en:`Change the look <b>when the mouse enters</b> and <b>when it leaves</b>. The point: it reacts without a click.`},
   tags:["mouseover","mouseout"], prep:[
     {s:'addEventListener("mouseover", …)',d:{ja:'マウスが<b>乗った</b>瞬間に実行。',en:'Runs the moment the mouse <b>enters</b>.'}},
     {s:'addEventListener("mouseout", …)',d:{ja:'マウスが<b>離れた</b>瞬間に実行。',en:'Runs the moment the mouse <b>leaves</b>.'}}],
   variations:[{label:{ja:"乗せると色が変わる",en:"Color on hover"}, code:{ja:`const el = document.querySelector("#test");

// マウスが乗ったら金色に
el.addEventListener("mouseover", () => {
  el.style.background = "#F5C24B";
  el.style.color = "#1a1305";
});

// マウスが離れたら元のむらさきに
el.addEventListener("mouseout", () => {
  el.style.background = "#8b5cf6";
  el.style.color = "#fff";
});
// プレビューのボタンにマウスを乗せたり外したり`,en:`const el = document.querySelector("#test");

// Turn gold when the mouse enters
el.addEventListener("mouseover", () => {
  el.style.background = "#F5C24B";
  el.style.color = "#1a1305";
});

// Back to purple when the mouse leaves
el.addEventListener("mouseout", () => {
  el.style.background = "#8b5cf6";
  el.style.color = "#fff";
});
// Move the mouse on and off the preview button`}}]},

  {name:{ja:"2つの状態を切り替える",en:"Toggle two states"}, sub:{ja:'! と ? :',en:'! and ? :'}, desc:{ja:`押すたびに<b>ON↔OFF</b>のように2つの状態を行き来させる定番。ここで出る <b>!（反転）</b> と <b>? :（もし〜なら）</b> はとても便利なので、コメントでしっかり解説します。`,en:`The staple of flipping between two states like <b>ON↔OFF</b> on each press. The <b>! (invert)</b> and <b>? : (if-then)</b> that appear here are very handy, so the comments explain them carefully.`},
   tags:["!","? :","true / false"], prep:[
     {s:{ja:'!（エクスクラメーション）',en:'! (exclamation)'},d:{ja:'<b>反転</b>の記号。true↔false を入れ替える（!true は false）。',en:'The <b>invert</b> symbol. Swaps true↔false (!true is false).'}},
     {s:'A ? B : C',d:{ja:'「Aが正しいなら B、違えば C」の<b>短い書き方</b>。',en:'A <b>short form</b> for "if A is true then B, else C".'}}],
   html:{ja:`<div id="box" class="box">OFF</div>
<button id="btn">切り替え</button>`,en:`<div id="box" class="box">OFF</div>
<button id="btn">Toggle</button>`},
   css:`body {
  padding: 24px;
  font-family: sans-serif;
  text-align: center;
}

.box {
  display: inline-block;
  min-width: 120px;
  padding: 22px;
  font-size: 22px;
  border-radius: 12px;
  background: #ccc;
}

button {
  display: block;
  margin: 14px auto 0;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  background: #8b5cf6;
  color: #fff;
  cursor: pointer;
}`,
   variations:[{label:{ja:"行き来させる",en:"Flip back and forth"}, code:{ja:`const box = document.querySelector("#box");
const btn = document.querySelector("#btn");
let on = false;   // いまONか？（最初はOFF）

btn.addEventListener("click", () => {
  on = !on;   // ! で反転。false↔true が入れ替わる

  // on が true なら "ON"、false なら "OFF"（A ? B : C の形）
  box.textContent = on ? "ON" : "OFF";
  box.style.background = on ? "#6CE0C0" : "#ccc";
});
// プレビューのボタンを何回か押してみて`,en:`const box = document.querySelector("#box");
const btn = document.querySelector("#btn");
let on = false;   // is it ON now? (starts OFF)

btn.addEventListener("click", () => {
  on = !on;   // ! inverts. false<->true swap

  // "ON" if on is true, "OFF" if false (the A ? B : C form)
  box.textContent = on ? "ON" : "OFF";
  box.style.background = on ? "#6CE0C0" : "#ccc";
});
// Press the preview button a few times`}}]},

  {name:{ja:"透明にする",en:"Make transparent"}, sub:"opacity", desc:{ja:`部品の<b>透明度</b>を変えます。<b>0で透明・1でふつう</b>。0.5ならうっすら半透明。`,en:`Change a part's <b>opacity</b>. <b>0 is transparent, 1 is normal</b>. 0.5 is faintly translucent.`},
   tags:["opacity"], prep:[{s:'element.style.opacity',d:{ja:'0(透明)〜1(不透明)の値。',en:'A value from 0 (transparent) to 1 (opaque).'}}],
   variations:[
     {label:{ja:"うっすら",en:"Faint"}, code:{ja:`const el = document.querySelector("#test");
el.style.opacity = "0.4";   // 40%だけ見える`,en:`const el = document.querySelector("#test");
el.style.opacity = "0.4";   // only 40% visible`}},
     {label:{ja:"だんだん消える",en:"Gradually vanish"}, code:{ja:`const el = document.querySelector("#test");
el.style.transition = "opacity 1s";
void el.offsetWidth;
el.style.opacity = "0";     // 1秒かけて消える`,en:`const el = document.querySelector("#test");
el.style.transition = "opacity 1s";
void el.offsetWidth;
el.style.opacity = "0";     // vanish over 1 second`}},
     {label:{ja:"点滅させる",en:"Blink"}, code:{ja:`const el = document.querySelector("#test");
let on = true;
// setInterval ＝ 0.4秒ごとに { } をくり返す命令（くわしくは上級で）
setInterval(() => {
  on = !on;                       // ON↔OFFを反転（! は「逆にする」）
  el.style.opacity = on ? "1" : "0.2";
}, 400);`,en:`const el = document.querySelector("#test");
let on = true;
// setInterval = repeat the { } every 0.4s (details in Advanced)
setInterval(() => {
  on = !on;                       // flip ON<->OFF (! means "invert")
  el.style.opacity = on ? "1" : "0.2";
}, 400);`}}]},

  {name:{ja:"大きさを変える",en:"Change size"}, sub:"scale", desc:{ja:`<b>transform: scale()</b> で拡大・縮小。1がふつう、2で2倍、0.5で半分の大きさ。`,en:`Scale up/down with <b>transform: scale()</b>. 1 is normal, 2 is double, 0.5 is half size.`},
   tags:["transform","scale"], prep:[{s:'scale(1.5)',d:{ja:'1.5倍の大きさ。1未満で小さく。',en:'1.5× the size. Under 1 shrinks it.'}}],
   variations:[
     {label:{ja:"大きく",en:"Bigger"}, code:`const el = document.querySelector("#test");
el.style.transition = "transform .3s";
void el.offsetWidth;
el.style.transform = "scale(1.5)";`},
     {label:{ja:"小さく",en:"Smaller"}, code:`const el = document.querySelector("#test");
el.style.transition = "transform .3s";
void el.offsetWidth;
el.style.transform = "scale(0.6)";`},
     {label:{ja:"押すたび拡大",en:"Grow on press"}, code:{ja:`const el = document.querySelector("#test");
let s = 1;
el.style.transition = "transform .2s";
el.addEventListener("click", () => {
  s = s + 0.2;                    // 押すたび0.2ずつ大きく
  el.style.transform = "scale(" + s + ")";
});`,en:`const el = document.querySelector("#test");
let s = 1;
el.style.transition = "transform .2s";
el.addEventListener("click", () => {
  s = s + 0.2;                    // grow 0.2 each press
  el.style.transform = "scale(" + s + ")";
});`}}]},

  {name:{ja:"影をつける",en:"Add a shadow"}, sub:"box-shadow", desc:{ja:`部品の下に<b>影</b>をつけて、浮いて見せます。JSからは <b>style.boxShadow</b> で設定します。`,en:`Add a <b>shadow</b> under a part to make it look lifted. Set it from JS with <b>style.boxShadow</b>.`},
   tags:["boxShadow"], prep:[
     {s:'element.style.boxShadow',d:{ja:'「横 縦 ぼかし 色」の順で影を指定。',en:'Specify the shadow as "x y blur color".'}}],
   variations:[
     {label:{ja:"影で浮かせる",en:"Lift with a shadow"}, code:{ja:`const el = document.querySelector("#test");
el.style.transition = "box-shadow .3s";
void el.offsetWidth;
// 横0・下14・ぼかし30 の半透明の影
el.style.boxShadow = "0 14px 30px rgba(0,0,0,.35)";`,en:`const el = document.querySelector("#test");
el.style.transition = "box-shadow .3s";
void el.offsetWidth;
// x0, y14, blur30 semi-transparent shadow
el.style.boxShadow = "0 14px 30px rgba(0,0,0,.35)";`}},
     {label:{ja:"光らせる",en:"Glow"}, code:`const el = document.querySelector("#test");
el.style.boxShadow = "0 0 24px #F5C24B";`}]},

  {name:{ja:"傾ける・回す",en:"Tilt / rotate"}, sub:"rotate", desc:{ja:`<b>transform: rotate()</b> で部品を回します。deg は角度（360で1回転）。`,en:`Rotate a part with <b>transform: rotate()</b>. deg is the angle (360 = one full turn).`},
   tags:["transform","rotate"], prep:[
     {s:'rotate(20deg)',d:{ja:'20度かたむける。マイナスで逆回り。',en:'Tilt 20 degrees. Negative turns the other way.'}}],
   variations:[
     {label:{ja:"少し傾ける",en:"Slight tilt"}, code:`const el = document.querySelector("#test");
el.style.transition = "transform .3s";
void el.offsetWidth;
el.style.transform = "rotate(-8deg)";`},
     {label:{ja:"1回転",en:"Full spin"}, code:`const el = document.querySelector("#test");
el.style.transition = "transform .8s";
void el.offsetWidth;
el.style.transform = "rotate(360deg)";`}]},

  {name:{ja:"背景をグラデに",en:"Gradient background"}, sub:"linear-gradient", desc:{ja:`背景を<b>2色のグラデーション</b>にします。<b>linear-gradient</b> で「向き, 色1, 色2」を指定。`,en:`Make the background a <b>two-color gradient</b>. Specify "direction, color1, color2" with <b>linear-gradient</b>.`},
   tags:["background","linear-gradient"], prep:[
     {s:{ja:'linear-gradient(45deg, 色1, 色2)',en:'linear-gradient(45deg, color1, color2)'},d:{ja:'45度の向きで 色1→色2 へ変化。',en:'Shifts color1 -> color2 at a 45-degree angle.'}}],
   variations:[{label:{ja:"グラデにする",en:"Apply a gradient"}, code:`const el = document.querySelector("#test");
el.style.background = "linear-gradient(45deg, #8b5cf6, #F5C24B)";
el.style.color = "#1a1305";`}]},

  {name:{ja:"角を丸くする",en:"Round the corners"}, sub:"borderRadius", desc:{ja:`<b>borderRadius</b> で角の丸みを変えます。大きくすると丸ボタン、999pxで完全なカプセル形に。`,en:`Change corner roundness with <b>borderRadius</b>. Larger makes a rounded button; 999px gives a full capsule shape.`},
   tags:["borderRadius"], prep:[
     {s:'element.style.borderRadius',d:{ja:'角の丸みの大きさ（px）。',en:'The corner radius (px).'}}],
   variations:[
     {label:{ja:"少し丸く",en:"Slightly rounded"}, code:`const el = document.querySelector("#test");
el.style.transition = "border-radius .3s";
void el.offsetWidth;
el.style.borderRadius = "24px";`},
     {label:{ja:"まん丸カプセル",en:"Full capsule"}, code:`const el = document.querySelector("#test");
el.style.borderRadius = "999px";`}]},

  {name:{ja:"色をなめらかに変える",en:"Smoothly change color"}, sub:"transition", desc:{ja:`色や大きさを<b>パッ</b>ではなく<b>ジワッ</b>と変えるには、CSSに <b>transition</b> を1行書くのがコツ。あとはJSで style を変えるだけで自動でなめらかに。`,en:`To change color or size <b>gradually</b> instead of <b>instantly</b>, the trick is one <b>transition</b> line in CSS. After that, just changing style from JS animates automatically.`},
   tags:["transition","background"], prep:[
     {s:'transition: 0.4s',d:{ja:'見た目が変わるとき<b>0.4秒かけて</b>変化させる（CSS側に書く）。',en:'Animate look changes <b>over 0.4s</b> (written in CSS).'}}],
   css:{ja:`#test {
  padding: 12px 20px;
  transition: 0.4s;   /* この1行が「なめらか」の正体 */
}`,en:`#test {
  padding: 12px 20px;
  transition: 0.4s;   /* this one line is what makes it smooth */
}`},
   variations:[{label:{ja:"じわっと変わる",en:"Change gradually"}, code:{ja:`const el = document.querySelector("#test");
el.style.background = "#00d4ff";
el.style.color = "#000";
el.style.padding = "24px 40px";
// transition のおかげで、パッではなくジワッと`,en:`const el = document.querySelector("#test");
el.style.background = "#00d4ff";
el.style.color = "#000";
el.style.padding = "24px 40px";
// thanks to transition, gradual instead of instant`}}]},

  {name:{ja:"上下にふわふわ",en:"Float up and down"}, sub:{ja:"@keyframes（浮遊）",en:"@keyframes (floating)"}, desc:{ja:`ずっと<b>ゆらゆら浮く</b>動き。CSSの <b>@keyframes</b> で上下する振り付けを作り、JSでクラスを付けて<b>スタート</b>させます。`,en:`A constant <b>gentle bobbing</b> motion. Define the up-down choreography in CSS <b>@keyframes</b>, then <b>start</b> it by adding a class from JS.`},
   tags:["@keyframes","animation"], prep:[
     {s:{ja:'@keyframes 名前 { … }',en:'@keyframes name { … }'},d:{ja:'アニメの<b>振り付け</b>を定義（0%と100%で位置を指定）。',en:'Defines the animation <b>choreography</b> (positions at 0% and 100%).'}},
     {s:{ja:'animation: 名前 1s infinite',en:'animation: name 1s infinite'},d:{ja:'その振り付けを<b>ずっとくり返す</b>。',en:'<b>Repeats</b> that choreography forever.'}}],
   css:{ja:`#test {
  padding: 12px 20px;
}
@keyframes floaty {
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-16px); }  /* 上へ */
  100% { transform: translateY(0); }
}
#test.floating {
  animation: floaty 1.2s ease-in-out infinite;
}`,en:`#test {
  padding: 12px 20px;
}
@keyframes floaty {
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-16px); }  /* up */
  100% { transform: translateY(0); }
}
#test.floating {
  animation: floaty 1.2s ease-in-out infinite;
}`},
   variations:[{label:{ja:"ふわふわ開始",en:"Start floating"}, code:{ja:`const el = document.querySelector("#test");
el.classList.add("floating");   // CSSアニメがスタート`,en:`const el = document.querySelector("#test");
el.classList.add("floating");   // the CSS animation starts`}}]},

  {name:{ja:"震わせる（シェイク）",en:"Shake"}, sub:{ja:"ブルブルッ",en:"A quick shudder"}, desc:{ja:`エラーの時によく見る<b>左右にブルブル</b>する動き。@keyframes で左右に細かく往復させ、JSでクラスを付けて発動。「入力が違うよ！」の合図に最適。`,en:`The <b>side-to-side shudder</b> often seen on errors. Make it bounce left-right finely with @keyframes and trigger it by adding a class from JS. Perfect as an "input is wrong!" cue.`},
   tags:["@keyframes","animation"], prep:[
     {s:'translateX(-6px)',d:{ja:'左へ6px。+なら右へ。これを細かく往復させる。',en:'6px left. + is right. Bounce this back and forth finely.'}},
     {s:'animation: shake 0.4s',d:{ja:'0.4秒だけ再生（infiniteを付けなければ1回で止まる）。',en:'Plays for just 0.4s (stops after one run without infinite).'}}],
   css:{ja:`#test {
  padding: 12px 20px;
}
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-6px); }
  40% { transform: translateX(6px); }
  60% { transform: translateX(-4px); }
  80% { transform: translateX(4px); }
}
#test.error {
  animation: shake 0.4s;
  background: #e5484d;   /* エラーっぽく赤に */
}`,en:`#test {
  padding: 12px 20px;
}
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-6px); }
  40% { transform: translateX(6px); }
  60% { transform: translateX(-4px); }
  80% { transform: translateX(4px); }
}
#test.error {
  animation: shake 0.4s;
  background: #e5484d;   /* red, error-like */
}`},
   variations:[{label:{ja:"ブルブルさせる",en:"Make it shake"}, code:{ja:`const el = document.querySelector("#test");

el.addEventListener("click", () => {
  el.classList.remove("error");   // 一度外して
  void el.offsetWidth;            // おまじない（連続再生を可能に）
  el.classList.add("error");      // もう一度付ける→再生
});
// プレビューのボタンを押してね`,en:`const el = document.querySelector("#test");

el.addEventListener("click", () => {
  el.classList.remove("error");   // remove it first
  void el.offsetWidth;            // magic line (allows re-triggering)
  el.classList.add("error");      // add again -> plays
});
// Press the preview button`}}]},

  {name:{ja:"くるくるスピナー",en:"Spinner"}, sub:{ja:"読み込み中の輪",en:"Loading ring"}, desc:{ja:`「読み込み中…」でおなじみの<b>回り続ける輪</b>。丸い枠線の一部だけ色を変えて、<b>rotateで無限回転</b>させるだけの意外とシンプルな仕組み。`,en:`The <b>endlessly spinning ring</b> familiar from "Loading…". Surprisingly simple: color just part of a round border, then <b>rotate it infinitely</b>.`},
   tags:["rotate","infinite","border"], prep:[
     {s:'border-top-color',d:{ja:'枠線の<b>上側だけ</b>別の色に→回すと動いて見える。',en:'Give <b>only the top</b> of the border a different color -> spinning makes it look alive.'}},
     {s:'animation: … infinite',d:{ja:'<b>ずっと</b>くり返す。linear で一定速度に。',en:'Repeats <b>forever</b>. linear keeps a constant speed.'}}],
   html:`<div id="spinner"></div>`,
   css:{ja:`body {
  display: grid;
  place-items: center;
  min-height: 74vh;
}
#spinner {
  width: 48px;
  height: 48px;
  border: 5px solid #ddd;        /* 薄い輪 */
  border-top-color: #8b5cf6;     /* 上だけ紫→回転で動きが見える */
  border-radius: 50%;            /* まん丸に */
}
@keyframes spin {
  to { transform: rotate(360deg); }
}
.loading {
  animation: spin 0.8s linear infinite;
}`,en:`body {
  display: grid;
  place-items: center;
  min-height: 74vh;
}
#spinner {
  width: 48px;
  height: 48px;
  border: 5px solid #ddd;        /* faint ring */
  border-top-color: #8b5cf6;     /* only top purple -> motion shows when spinning */
  border-radius: 50%;            /* perfect circle */
}
@keyframes spin {
  to { transform: rotate(360deg); }
}
.loading {
  animation: spin 0.8s linear infinite;
}`},
   variations:[{label:{ja:"回す",en:"Spin"}, code:{ja:`const sp = document.querySelector("#spinner");
sp.classList.add("loading");    // 回転スタート`,en:`const sp = document.querySelector("#spinner");
sp.classList.add("loading");    // spinning starts`}},
     {label:{ja:"3秒後に止める",en:"Stop after 3s"}, code:{ja:`const sp = document.querySelector("#spinner");
sp.classList.add("loading");

setTimeout(() => {
  sp.classList.remove("loading");  // クラスを外すと止まる
}, 3000);`,en:`const sp = document.querySelector("#spinner");
sp.classList.add("loading");

setTimeout(() => {
  sp.classList.remove("loading");  // removing the class stops it
}, 3000);`}}]},

  {name:{ja:"データを仕込んで読む",en:"Store & read data"}, sub:{ja:"data属性 / dataset",en:"data attributes / dataset"}, desc:{ja:`HTMLの部品に <b>data-◯◯="値"</b> という形で<b>好きな情報をこっそり持たせて</b>おき、JSから読み出せます。「押されたボタンの値段」「カードのID」などを部品自身に覚えさせるのに便利。クイズや商品一覧で大活躍します。`,en:`Quietly attach <b>any info</b> to an HTML part as <b>data-xxx="value"</b> and read it from JS. Handy for letting a part remember "the price of the pressed button" or "a card's ID". Great for quizzes and product lists.`},
   tags:["data-*","dataset"], prep:[
     {s:'data-price="120"',d:{ja:'HTMLタグに書く<b>自分専用の情報</b>。名前は必ず data- で始める（HTML側に書く）。',en:'Your <b>custom info</b> written on an HTML tag. The name must start with data- (written in HTML).'}},
     {s:{ja:'要素.dataset.price',en:'element.dataset.price'},d:{ja:'JSから読む書き方。<b>data-price</b> は <b>.dataset.price</b> になる（data- を省いて読む）。',en:'How to read it from JS. <b>data-price</b> becomes <b>.dataset.price</b> (drop the data-).'}},
     {s:{ja:'ハイフンは大文字に',en:'hyphens become capitals'},d:{ja:'data-user-name は .dataset.<b>userName</b>（- のうしろが大文字になる）。',en:'data-user-name becomes .dataset.<b>userName</b> (the letter after - is capitalized).'}}],
   html:{ja:`<button id="apple" data-price="120">りんご</button>
<button id="melon" data-price="800">メロン</button>
<p id="out">ボタンを押すと値段が出ます</p>`,en:`<button id="apple" data-price="120">Apple</button>
<button id="melon" data-price="800">Melon</button>
<p id="out">Press a button to see the price</p>`},
   css:`button {
  padding: 10px 16px;
  margin: 4px;
  cursor: pointer;
}
#out {
  margin-top: 10px;
  font-weight: bold;
}`,
   variations:[{label:{ja:"値段を読む",en:"Read the price"}, code:{ja:`const out = document.querySelector("#out");

document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => {
    // data-price を dataset.price で読む（結果はプレビュー右）
    out.textContent = btn.textContent + " は " + btn.dataset.price + "円";
  });
});
// プレビューのボタンを押してみて`,en:`const out = document.querySelector("#out");

document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => {
    // read data-price via dataset.price (result in the preview)
    out.textContent = btn.textContent + " is " + btn.dataset.price + " yen";
  });
});
// Press a button in the preview`}}]},

  {name:{ja:"配列を切り出す・逆順",en:"Slice & reverse arrays"}, sub:"slice / reverse", desc:{ja:`<b>slice（スライス）</b>は配列の<b>一部を切り出して新しい配列に</b>、<b>reverse（リバース）</b>は<b>並びを逆さま</b>にします。「上位3件だけ」「新しい順に並べ替え」などで使います。`,en:`<b>slice</b> <b>cuts out part of an array into a new array</b>; <b>reverse</b> <b>flips the order</b>. Used for "just the top 3" or "sort newest-first".`},
   tags:["slice","reverse"], prep:[
     {s:{ja:'配列.slice(0, 3)',en:'array.slice(0, 3)'},d:{ja:'<b>0番目から「3番目の手前」まで</b>を切り出す（結果は3個。元の配列は変えない）。2つ目の数字は「個数」ではなく<b>終わりの位置</b>。',en:'Cuts <b>from index 0 up to "just before 3"</b> (3 items; the original is unchanged). The second number is the <b>end position</b>, not a count.'}},
     {s:{ja:'配列.reverse()',en:'array.reverse()'},d:{ja:'並びを<b>逆さま</b>にする。',en:'<b>Flips</b> the order.'}},
     {s:{ja:'[...配列]',en:'[...array]'},d:{ja:'reverse は元の並びを壊すので、<b>コピーしてから</b>使うと安全。この [...] の書き方は特級「スプレッド構文」でくわしく。',en:'reverse destroys the original order, so it\'s safer to <b>copy first</b>. This [...] form is covered in Expert "Spread syntax".'}}],
   variations:[
     {label:{ja:"上位3件（slice）",en:"Top 3 (slice)"}, code:{ja:`const ranking = ["金", "銀", "銅", "4位", "5位"];
const top3 = ranking.slice(0, 3);   // 先頭から3個を切り出す
console.log(top3);                  // ["金", "銀", "銅"]
console.log(ranking.length);        // 5（元はそのまま）`,en:`const ranking = ["Gold", "Silver", "Bronze", "4th", "5th"];
const top3 = ranking.slice(0, 3);   // cut the first 3 from the start
console.log(top3);                  // ["Gold", "Silver", "Bronze"]
console.log(ranking.length);        // 5 (original untouched)`}},
     {label:{ja:"逆順にする（reverse）",en:"Reverse (reverse)"}, code:{ja:`const list = [1, 2, 3, 4, 5];
// コピーしてから逆順にする（元を壊さない）
const reversed = [...list].reverse();
console.log(reversed);              // [5, 4, 3, 2, 1]
console.log(list);                 // [1, 2, 3, 4, 5]（元は無事）`,en:`const list = [1, 2, 3, 4, 5];
// copy first, then reverse (doesn't destroy the original)
const reversed = [...list].reverse();
console.log(reversed);              // [5, 4, 3, 2, 1]
console.log(list);                 // [1, 2, 3, 4, 5] (original safe)`}}]},

  {name:{ja:"キー入力を受け取る",en:"Receive key input"}, sub:"keydown", desc:{ja:`<b>キーボードのキー</b>が押されたら反応します。「どのキーが押されたか」は <b>e.key</b> で分かります。`,en:`React when a <b>keyboard key</b> is pressed. Find out "which key" with <b>e.key</b>.`},
   tags:["keydown","(e)","e.key"], prep:[
     {s:'addEventListener("keydown", …)',d:{ja:'キーが押されたら実行する予約（画面全体＝documentに付ける）。',en:'A reservation to run when a key is pressed (attach to the whole page = document).'}},
     {s:{ja:'(e) の e',en:'the e in (e)'},d:{ja:'<b>起きたことの情報</b>が自動で入る箱。自分で作らなくてもJSが用意してくれる。',en:'A box that automatically holds <b>info about what happened</b>. JS provides it; you don\'t make it yourself.'}},
     {s:'e.key',d:{ja:'押したキーの名前（例 "a"、"Enter"）。',en:'The name of the pressed key (e.g. "a", "Enter").'}}],
   variations:[{label:{ja:"キーを表示",en:"Show the key"}, code:{ja:`const el = document.querySelector("#test");
document.addEventListener("keydown", (e) => {
  el.textContent = "押したキー: " + e.key;
});
// プレビューをクリックしてから何かキーを押す`,en:`const el = document.querySelector("#test");
document.addEventListener("keydown", (e) => {
  el.textContent = "key pressed: " + e.key;
});
// Click the preview first, then press any key`}}]},

  {name:{ja:"入力欄の値を取る",en:"Get an input's value"}, sub:"input / value", desc:{ja:`<b>入力欄(input)に打った文字</b>を、打つそばからリアルタイムで受け取って表示します。フォームの基礎。`,en:`Receive and display the <b>text typed into an input</b> in real time as you type. The basics of forms.`},
   tags:["input","value"], prep:[
     {s:'input.value',d:{ja:'入力欄に<b>今入っている文字</b>。',en:'The text <b>currently in</b> the input.'}},
     {s:'addEventListener("input", …)',d:{ja:'1文字打つ<b>たびに</b>実行される。',en:'Runs <b>every time</b> a character is typed.'}}],
   html:{ja:`<!-- placeholder = 何も打ってない時にうっすら出る案内文 -->
<input id="box" placeholder="ここに入力">
<!-- 打った文字をここに映す -->
<p id="out">ここに映る</p>`,en:`<!-- placeholder = faint hint text shown when empty -->
<input id="box" placeholder="type here">
<!-- typed text is mirrored here -->
<p id="out">shows here</p>`},
   css:`body {
  padding: 24px;
  font-family: sans-serif;
}

input {
  padding: 8px 12px;
  font-size: 16px;
}

#out {
  font-size: 20px;
  color: #8b5cf6;
}`,
   variations:[
     {label:{ja:"打った文字を映す",en:"Mirror typed text"}, code:{ja:`const box = document.querySelector("#box");
const out = document.querySelector("#out");

// 1文字打つたびに、入力欄の中身を p にコピー
box.addEventListener("input", () => {
  out.textContent = box.value;
});
// プレビューの入力欄に打ってみて`,en:`const box = document.querySelector("#box");
const out = document.querySelector("#out");

// On each keystroke, copy the input's contents to the p
box.addEventListener("input", () => {
  out.textContent = box.value;
});
// Type into the preview's input field`}},
     {label:{ja:"文字数をかぞえる",en:"Count characters"}, code:{ja:`const box = document.querySelector("#box");
const out = document.querySelector("#out");

box.addEventListener("input", () => {
  // .length で文字数がわかる
  out.textContent = box.value.length + " 文字";
});`,en:`const box = document.querySelector("#box");
const out = document.querySelector("#out");

box.addEventListener("input", () => {
  // .length gives the character count
  out.textContent = box.value.length + " chars";
});`}}]}
]},

/* ============ 上級編：応用の動き ============ */
{name:"上級", items:[
  {name:{ja:"ポップ（拡大）",en:"Pop (scale up)"}, sub:{ja:"ぼよんと大きく",en:"Springy grow"}, desc:{ja:`小さい→通常へ。<b>transform: scale</b>を0→1に。行き過ぎて戻る easing で“ぼよん”と弾む。`,en:`From tiny to normal. Change <b>transform: scale</b> from 0 to 1. An overshoot-and-settle easing makes it "boing".`},
   tags:["scale","cubic-bezier"], prep:[{s:'scale(0)',d:{ja:'大きさ0（見えない点）→1で通常。',en:'Size 0 (an invisible dot) -> 1 is normal.'}},{s:'cubic-bezier(...)',d:{ja:'加速カーブ。中の4つの数字は<b>今は意味が分からなくてOKのおまじない</b>（この組み合わせで“ぼよん”と弾む）。',en:'The acceleration curve. The four numbers are a <b>"magic" combo you don\'t need to understand yet</b> (this set gives the "boing").'}}],
   variations:[
     {label:{ja:"ぼよん登場",en:"Boing in"}, code:`const el = document.querySelector("#test");
el.style.transform = "scale(0)";
void el.offsetWidth;
el.style.transition = "transform .45s cubic-bezier(.34,1.56,.64,1)";
el.style.transform = "scale(1)";`},
     {label:{ja:"横に伸びて登場",en:"Stretch in horizontally"}, code:{ja:`const el = document.querySelector("#test");
el.style.transform = "scaleX(0)";        // 横だけ0
void el.offsetWidth;
el.style.transition = "transform .5s cubic-bezier(.34,1.56,.64,1)";
el.style.transform = "scaleX(1)";`,en:`const el = document.querySelector("#test");
el.style.transform = "scaleX(0)";        // width only at 0
void el.offsetWidth;
el.style.transition = "transform .5s cubic-bezier(.34,1.56,.64,1)";
el.style.transform = "scaleX(1)";`}}]},

  {name:{ja:"回転して登場",en:"Spin in"}, sub:{ja:"くるっと回る",en:"A quick twirl"}, desc:{ja:`回転(rotate)・拡大(scale)・フェードを<b>まとめて</b>動かすと派手な登場に。`,en:`Move rotate, scale, and fade <b>all together</b> for a flashy entrance.`},
   tags:["rotate","scale","opacity"], prep:[{s:'rotate(-180deg)',d:{ja:'回転。degは角度。',en:'Rotation. deg is the angle.'}},{s:'"rotate(..) scale(..)"',d:{ja:'空白で並べて<b>同時指定</b>。',en:'List with a space to <b>apply both at once</b>.'}}],
   variations:[{label:{ja:"くるっと登場",en:"Twirl in"}, code:`const el = document.querySelector("#test");
el.style.opacity = "0";
el.style.transform = "rotate(-180deg) scale(0)";
void el.offsetWidth;
el.style.transition = "all .6s ease";
el.style.opacity = "1";
el.style.transform = "rotate(0) scale(1)";`}]},

  {name:{ja:"ホバーでふわっと",en:"Lift on hover"}, sub:{ja:"乗せると浮く",en:"Float when hovered"}, desc:{ja:`マウスを<b>乗せたら浮いて拡大、離したら戻る</b>。mouseenter / mouseleave を使う。`,en:`<b>Lift and enlarge on hover, revert on leave</b>. Use mouseenter / mouseleave.`},
   tags:["mouseenter","mouseleave","transform"], prep:[{s:'mouseenter',d:{ja:'乗った瞬間。離れるのは mouseleave。',en:'The moment the mouse enters. Leaving is mouseleave.'}},{s:'transform = "none"',d:{ja:'元に戻す。',en:'Reverts to normal.'}}],
   variations:[{label:{ja:"浮き上がる",en:"Float up"}, code:{ja:`const el = document.querySelector("#test");
el.style.transition = "transform .2s ease";
el.addEventListener("mouseenter", () => {
  el.style.transform = "translateY(-8px) scale(1.06)";
});
el.addEventListener("mouseleave", () => {
  el.style.transform = "none";
});
// プレビューのボタンにマウスを乗せてね`,en:`const el = document.querySelector("#test");
el.style.transition = "transform .2s ease";
el.addEventListener("mouseenter", () => {
  el.style.transform = "translateY(-8px) scale(1.06)";
});
el.addEventListener("mouseleave", () => {
  el.style.transform = "none";
});
// Hover the mouse over the preview button`}}]},

  {name:{ja:"クリックで色変え",en:"Change color on click"}, sub:{ja:"押すと変身",en:"Transform on press"}, desc:{ja:`<b>addEventListener("click", …)</b> で「押されたら { } を実行して」と<b>予約</b>します。色や文字を変える定番。<br><b>ポイント</b>：第1引数がイベント名（"click"など）、第2引数が実行する関数。予約は<b>何個でも</b>付けられ、一度付ければ<b>押すたび毎回</b>実行されます。`,en:`With <b>addEventListener("click", …)</b> you <b>reserve</b> "when clicked, run the { }". A staple for changing color or text.<br><b>Key point</b>: the first argument is the event name ("click", etc.), the second is the function to run. You can attach <b>any number</b> of reservations, and once attached it runs <b>every time</b> it's pressed.`},
   tags:["addEventListener","click","textContent"], prep:[{s:'addEventListener("click",…)',d:{ja:'クリックの予約。',en:'A click reservation.'}},{s:'textContent',d:{ja:'中の文字を書き換え。',en:'Rewrites the inner text.'}}],
   variations:[
     {label:{ja:"クリックで変身",en:"Transform on click"}, code:{ja:`const el = document.querySelector("#test");
el.addEventListener("click", () => {
  el.style.background = "#F5C24B";
  el.style.color = "#1a1305";
  el.textContent = "クリックされた！";
});
// プレビューのボタンを押してね`,en:`const el = document.querySelector("#test");
el.addEventListener("click", () => {
  el.style.background = "#F5C24B";
  el.style.color = "#1a1305";
  el.textContent = "Clicked!";
});
// Press the preview button`}},
     {label:{ja:"押すたび色トグル",en:"Toggle color each press"}, code:{ja:`const el = document.querySelector("#test");
let gold = false;
el.addEventListener("click", () => {
  gold = !gold;                       // 押すたび反転
  el.style.background = gold ? "#F5C24B" : "#8b5cf6";
});
// 押すたび むらさき↔金 が入れ替わる`,en:`const el = document.querySelector("#test");
let gold = false;
el.addEventListener("click", () => {
  gold = !gold;                       // invert each press
  el.style.background = gold ? "#F5C24B" : "#8b5cf6";
});
// Each press swaps purple <-> gold`}}]},

  {name:{ja:"ジャンプ（バウンス）",en:"Jump (bounce)"}, sub:{ja:"ぴょんぴょん",en:"Hop hop"}, desc:{ja:`連続する動きは <b>element.animate()</b> が便利。<b>[地点の配列]</b>と<b>{時間・回数}</b>を渡すと、CSSを書かずにJSだけでアニメできます。<br><b>ポイント</b>：配列は「始まり→途中→終わり」の各コマ。<b>iterations</b> でくり返し回数（Infinity で無限）。`,en:`For multi-step motion, <b>element.animate()</b> is handy. Pass <b>[an array of keyframes]</b> and <b>{timing, count}</b> to animate in JS alone, no CSS.<br><b>Key point</b>: the array holds each frame "start -> middle -> end". <b>iterations</b> sets the repeat count (Infinity for endless).`},
   tags:["element.animate","iterations"], prep:[{s:'element.animate([...], {...})',d:{ja:'[地点]と{時間・回数}を渡す。',en:'Pass [keyframes] and {timing, count}.'}},{s:'iterations',d:{ja:'くり返し回数。',en:'The repeat count.'}}],
   variations:[{label:{ja:"3回ジャンプ",en:"Jump 3 times"}, code:`const el = document.querySelector("#test");
el.animate(
  [
    { transform: "translateY(0)" },
    { transform: "translateY(-26px)" },
    { transform: "translateY(0)" }
  ],
  { duration: 550, iterations: 3, easing: "ease" }
);`}]},

  {name:{ja:"ダブルクリック",en:"Double click"}, sub:"dblclick", desc:{ja:`<b>すばやく2回</b>クリックで発火するイベント。`,en:`An event that fires on <b>two quick</b> clicks.`},
   tags:["dblclick"], prep:[{s:'addEventListener("dblclick",…)',d:{ja:'ダブルクリックの予約。',en:'A double-click reservation.'}}],
   variations:[{label:{ja:"2回押す",en:"Press twice"}, code:{ja:`const el = document.querySelector("#test");
el.addEventListener("dblclick", () => {
  el.textContent = "ダブルクリック！";
  el.style.background = "#4EC9B0";
});
// プレビューのボタンを素早く2回`,en:`const el = document.querySelector("#test");
el.addEventListener("dblclick", () => {
  el.textContent = "Double clicked!";
  el.style.background = "#4EC9B0";
});
// Press the preview button twice quickly`}}]},

  {name:{ja:"時間差で実行",en:"Run after a delay"}, sub:"setTimeout", desc:{ja:`<b>○秒後に1回</b>だけ実行する予約。時間は<b>ミリ秒</b>（1000=1秒）で指定。<br><b>注意</b>：JSは待ち時間の間<b>止まらず先へ進みます</b>（予約だけして次の行へ）。取り消したい時は <b>id = setTimeout(...)</b> を保存し <b>clearTimeout(id)</b>。`,en:`A reservation to run <b>once after N seconds</b>. Time is in <b>milliseconds</b> (1000 = 1s).<br><b>Note</b>: JS <b>doesn't pause</b> during the wait — it books it and moves to the next line. To cancel, save <b>id = setTimeout(...)</b> and call <b>clearTimeout(id)</b>.`},
   tags:["setTimeout"], prep:[{s:{ja:'setTimeout(処理, 1000)',en:'setTimeout(callback, 1000)'},d:{ja:'1秒後に処理。',en:'Run the process after 1 second.'}}],
   variations:[{label:{ja:"1秒後に変化",en:"Change after 1s"}, code:{ja:`const el = document.querySelector("#test");
el.textContent = "1秒待ってて…";
setTimeout(() => {
  el.textContent = "変わった！";
  el.style.background = "#F5C24B";
}, 1000);`,en:`const el = document.querySelector("#test");
el.textContent = "Wait 1 second...";
setTimeout(() => {
  el.textContent = "Changed!";
  el.style.background = "#F5C24B";
}, 1000);`}}]},

  {name:{ja:"くり返し実行",en:"Run repeatedly"}, sub:"setInterval", desc:{ja:`<b>○秒ごとにずっと</b>くり返す。時計やアニメに使う。<br><b>ルール（重要）</b>：放っておくと<b>永遠に動き続ける</b>ので、<b>id = setInterval(...)</b> を保存し、止めたい時に <b>clearInterval(id)</b> を呼ぶ。止め忘れは動作が重くなる原因。`,en:`Repeats <b>forever every N seconds</b>. Used for clocks and animations.<br><b>Rule (important)</b>: left alone it <b>runs forever</b>, so save <b>id = setInterval(...)</b> and call <b>clearInterval(id)</b> to stop. Forgetting to stop it slows things down.`},
   tags:["setInterval"], prep:[{s:{ja:'setInterval(処理, 1000)',en:'setInterval(callback, 1000)'},d:{ja:'1秒ごとにくり返す。',en:'Repeat every 1 second.'}}],
   variations:[{label:{ja:"数字を増やし続ける",en:"Keep counting up"}, code:{ja:`const el = document.querySelector("#test");
let n = 0;
setInterval(() => {
  n = n + 1;
  el.textContent = n + " 秒";
}, 1000);`,en:`const el = document.querySelector("#test");
let n = 0;
setInterval(() => {
  n = n + 1;
  el.textContent = n + " sec";
}, 1000);`}}]},

  {name:{ja:"要素を追加する",en:"Add an element"}, sub:"createElement", desc:{ja:`JSで<b>新しいHTML部品を作って</b>ページに足します。押すたびリストが増える、などに。<br><b>ルール</b>：createElement で作っただけでは<b>まだ画面に出ません</b>。<b>親.appendChild(子)</b> で入れて初めて表示。中の文字は textContent で入れます。`,en:`Make a <b>new HTML part in JS</b> and add it to the page. Good for growing a list on each press.<br><b>Rule</b>: just creating it with createElement <b>won't show it yet</b>. It appears only once you insert it with <b>parent.appendChild(child)</b>. Put its inner text with textContent.`},
   tags:["createElement","appendChild"], prep:[{s:'document.createElement("li")',d:{ja:'新しい要素を作る。',en:'Creates a new element.'}},{s:{ja:'親.appendChild(子)',en:'parent.appendChild(child)'},d:{ja:'中に入れる。',en:'Inserts it inside.'}}],
   html:{ja:`<button id="add">項目を追加</button>
<!-- ul = リストの入れ物。最初は空っぽで、JSが li を足していく -->
<ul id="list"></ul>`,en:`<button id="add">Add item</button>
<!-- ul = the list container. Empty at first; JS adds li's -->
<ul id="list"></ul>`},
   css:`body {
  padding: 24px;
  font-family: sans-serif;
}

button {
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  background: #8b5cf6;
  color: #fff;
  cursor: pointer;
}

li {
  padding: 6px 0;
}`,
   variations:[{label:{ja:"追加する",en:"Add"}, code:{ja:`const btn = document.querySelector("#add");
const list = document.querySelector("#list");
let n = 0;

btn.addEventListener("click", () => {
  n = n + 1;
  const li = document.createElement("li"); // 新しい<li>を作る（まだ画面には無い）
  li.textContent = "項目 " + n;             // その中に文字を入れる
  list.appendChild(li);                     // ul の中に入れて、はじめて画面に出る
});`,en:`const btn = document.querySelector("#add");
const list = document.querySelector("#list");
let n = 0;

btn.addEventListener("click", () => {
  n = n + 1;
  const li = document.createElement("li"); // make a new <li> (not on screen yet)
  li.textContent = "item " + n;             // put text inside it
  list.appendChild(li);                     // insert into ul -> now it shows
});`}}]},

  {name:{ja:"要素を消す",en:"Remove an element"}, sub:"remove", desc:{ja:`クリックした<b>その要素自身を消す</b>。<b>element.remove()</b> だけ。`,en:`<b>Delete the very element</b> you clicked. Just <b>element.remove()</b>.`},
   tags:["remove"], prep:[{s:'element.remove()',d:{ja:'その要素をページから削除。',en:'Removes that element from the page.'}}],
   variations:[{label:{ja:"押すと消える",en:"Press to vanish"}, code:{ja:`const el = document.querySelector("#test");
el.addEventListener("click", () => {
  el.remove();   // 自分を消す
});
// プレビューのボタンを押すと消える`,en:`const el = document.querySelector("#test");
el.addEventListener("click", () => {
  el.remove();   // removes itself
});
// The preview button vanishes when pressed`}}]},

  {name:{ja:"マウスを追いかける",en:"Follow the mouse"}, sub:"mousemove", desc:{ja:`マウスを動かすと、その<b>座標(x, y)がリアルタイム</b>で分かります。この座標を要素の位置に使えば「カーソルに付いてくる」演出も作れます（まずは座標を見るところから）。`,en:`As the mouse moves, you get its <b>(x, y) coordinates in real time</b>. Use them as an element's position to make things "follow the cursor" (start by just watching the coordinates).`},
   tags:["mousemove","e.clientX","e.clientY"], prep:[
     {s:'addEventListener("mousemove", …)',d:{ja:'マウスが<b>動くたび</b>に実行。',en:'Runs <b>every time</b> the mouse moves.'}},
     {s:'e.clientX / e.clientY',d:{ja:'マウスの<b>横位置 / 縦位置</b>（ピクセル）。',en:'The mouse\'s <b>x / y position</b> (pixels).'}}],
   variations:[{label:{ja:"座標を表示",en:"Show coordinates"}, code:{ja:`const el = document.querySelector("#test");

// プレビュー全体でマウスの動きを見張る
document.addEventListener("mousemove", (e) => {
  // e.clientX = 横位置, e.clientY = 縦位置
  el.textContent = "X:" + e.clientX + " Y:" + e.clientY;
});
// プレビューの上でマウスを動かしてみて`,en:`const el = document.querySelector("#test");

// Watch mouse movement across the whole preview
document.addEventListener("mousemove", (e) => {
  // e.clientX = x position, e.clientY = y position
  el.textContent = "X:" + e.clientX + " Y:" + e.clientY;
});
// Move the mouse over the preview`}}]},

  {name:{ja:"ランダムに1つ選ぶ",en:"Pick one at random"}, sub:{ja:"配列＋Math.random",en:"array + Math.random"}, desc:{ja:`配列に候補を並べ、<b>ランダムに1つ</b>取り出します。おみくじ・ガチャの基礎。`,en:`List choices in an array and pick <b>one at random</b>. The basics of fortunes and gacha.`},
   tags:["Math.random","Math.floor",{ja:"配列[i]",en:"array[i]"}], prep:[
     {s:'Math.random()',d:{ja:'0〜1のランダムな数。',en:'A random number from 0 to 1.'}},
     {s:{ja:'Math.floor(乱数 * 個数)',en:'Math.floor(random * count)'},d:{ja:'0〜(個数-1)の<b>ランダムな番号</b>を作る式。',en:'A formula that makes a <b>random index</b> from 0 to (count-1).'}}],
   variations:[{label:{ja:"おみくじ",en:"Fortune"}, code:{ja:`const el = document.querySelector("#test");
const kuji = ["大吉", "中吉", "小吉", "吉", "凶"];

el.addEventListener("click", () => {
  // 0〜4 のランダムな番号を作る
  const i = Math.floor(Math.random() * kuji.length);
  el.textContent = kuji[i];   // その番号の中身を取り出す
});
// プレビューのボタンを押すたびに結果が変わる`,en:`const el = document.querySelector("#test");
const kuji = ["Great luck", "Good luck", "Small luck", "Luck", "Bad luck"];

el.addEventListener("click", () => {
  // make a random index from 0 to 4
  const i = Math.floor(Math.random() * kuji.length);
  el.textContent = kuji[i];   // take the item at that index
});
// The result changes each time you press the button`}}]},

  {name:{ja:"一定時間ごとに切り替え",en:"Cycle on a timer"}, sub:{ja:"setInterval＋配列",en:"setInterval + array"}, desc:{ja:`配列の中身を<b>順番に自動で切り替え</b>ます。スライドショーや電光掲示板の基礎。`,en:`<b>Automatically cycle</b> through an array's items in order. The basics of slideshows and marquees.`},
   tags:["setInterval",{ja:'配列',en:'array'},{ja:'%（あまり）',en:'% (remainder)'}], prep:[
     {s:{ja:'i = (i + 1) % 個数',en:'i = (i + 1) % count'},d:{ja:'番号を1つ進め、最後まで行ったら0に戻す定番の式。',en:'The staple formula to advance the index and wrap back to 0 at the end.'}}],
   variations:[{label:{ja:"文字を巡回",en:"Cycle text"}, code:{ja:`const el = document.querySelector("#test");
const words = ["こんにちは", "Hello", "你好", "Bonjour"];
let i = 0;

setInterval(() => {
  el.textContent = words[i];
  i = (i + 1) % words.length;  // 次へ。最後まで来たら 0 に戻る
}, 1000);
// 1秒ごとに表示があいさつ言語を巡回する`,en:`const el = document.querySelector("#test");
const words = ["こんにちは", "Hello", "你好", "Bonjour"];
let i = 0;

setInterval(() => {
  el.textContent = words[i];
  i = (i + 1) % words.length;  // next; wrap to 0 at the end
}, 1000);
// Every second the display cycles through greeting languages`}}]},

  {name:{ja:"長押しで反応",en:"React to press-and-hold"}, sub:"mousedown / mouseup", desc:{ja:`ボタンを<b>押している間だけ</b>反応させます。押した瞬間(mousedown)と離した瞬間(mouseup)の2つを使います。`,en:`React <b>only while a button is held</b>. Use the moment of press (mousedown) and release (mouseup).`},
   tags:["mousedown","mouseup"], prep:[
     {s:'addEventListener("mousedown", …)',d:{ja:'ボタンを<b>押した瞬間</b>。',en:'The moment the button is <b>pressed</b>.'}},
     {s:'addEventListener("mouseup", …)',d:{ja:'ボタンを<b>離した瞬間</b>。',en:'The moment the button is <b>released</b>.'}}],
   variations:[{label:{ja:"押してる間だけ光る",en:"Glow while held"}, code:{ja:`const el = document.querySelector("#test");

// 押した瞬間
el.addEventListener("mousedown", () => {
  el.style.background = "#F5C24B";
  el.textContent = "押してる…";
});

// 離した瞬間
el.addEventListener("mouseup", () => {
  el.style.background = "#8b5cf6";
  el.textContent = "はなした";
});
// プレビューのボタンを押しっぱなしにしてみて`,en:`const el = document.querySelector("#test");

// the moment of press
el.addEventListener("mousedown", () => {
  el.style.background = "#F5C24B";
  el.textContent = "holding...";
});

// the moment of release
el.addEventListener("mouseup", () => {
  el.style.background = "#8b5cf6";
  el.textContent = "released";
});
// Hold down the preview button`}}]},

  {name:{ja:"入力欄にフォーカス",en:"Input focus"}, sub:"focus / blur", desc:{ja:`入力欄を<b>クリックした時(focus)と離れた時(blur)</b>で反応させます。枠を光らせる定番の演出。`,en:`React when an input is <b>clicked into (focus) and left (blur)</b>. The staple effect of lighting up the border.`},
   tags:["focus","blur"], prep:[
     {s:'addEventListener("focus", …)',d:{ja:'入力欄が<b>選ばれた</b>瞬間。',en:'The moment the input is <b>selected</b>.'}},
     {s:'addEventListener("blur", …)',d:{ja:'入力欄から<b>離れた</b>瞬間。',en:'The moment focus <b>leaves</b> the input.'}}],
   html:{ja:`<input id="box" placeholder="ここをクリック">
<p id="out">状態がここに出ます</p>`,en:`<input id="box" placeholder="click here">
<p id="out">status shows here</p>`},
   css:{ja:`body {
  padding: 24px;
  font-family: sans-serif;
}

input {
  padding: 8px 12px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 8px;
  transition: .2s;
}

/* 選択中だけ枠を紫に */
input.active {
  border-color: #8b5cf6;
}`,en:`body {
  padding: 24px;
  font-family: sans-serif;
}

input {
  padding: 8px 12px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 8px;
  transition: .2s;
}

/* purple border only while focused */
input.active {
  border-color: #8b5cf6;
}`},
   variations:[{label:{ja:"枠を光らせる",en:"Light up the border"}, code:{ja:`const box = document.querySelector("#box");
const out = document.querySelector("#out");

box.addEventListener("focus", () => {
  box.classList.add("active");
  out.textContent = "入力中…";
});

box.addEventListener("blur", () => {
  box.classList.remove("active");
  out.textContent = "離れました";
});
// プレビューの入力欄をクリック→別の場所をクリック`,en:`const box = document.querySelector("#box");
const out = document.querySelector("#out");

box.addEventListener("focus", () => {
  box.classList.add("active");
  out.textContent = "typing...";
});

box.addEventListener("blur", () => {
  box.classList.remove("active");
  out.textContent = "left the field";
});
// Click the preview input, then click elsewhere`}}]},

  {name:{ja:"数字カウントアップ",en:"Number count-up"}, sub:{ja:"0から増やす演出",en:"Rise from 0"}, desc:{ja:`数字が<b>0からパラパラと目標まで増えていく</b>演出。setIntervalで少しずつ足していきます。`,en:`The effect of a number <b>ticking up from 0 to a target</b>. Add a little at a time with setInterval.`},
   tags:["setInterval","clearInterval"], prep:[
     {s:{ja:'目標に達したら',en:'when the target is reached'},d:{ja:'clearInterval で止める。',en:'Stop with clearInterval.'}}],
   variations:[{label:{ja:"100まで数える",en:"Count to 100"}, code:{ja:`const el = document.querySelector("#test");
let n = 0;
const goal = 100;

const id = setInterval(() => {
  n = n + 2;                 // 2ずつ増やす
  el.textContent = n;
  if (n >= goal) {
    clearInterval(id);       // 目標に達したら止める
    el.textContent = goal;
  }
}, 30);`,en:`const el = document.querySelector("#test");
let n = 0;
const goal = 100;

const id = setInterval(() => {
  n = n + 2;                 // add 2 at a time
  el.textContent = n;
  if (n >= goal) {
    clearInterval(id);       // stop when the target is reached
    el.textContent = goal;
  }
}, 30);`}}]},

  {name:{ja:"押した場所に印",en:"Mark where you click"}, sub:{ja:"クリック座標",en:"Click coordinates"}, desc:{ja:`プレビューを<b>クリックした場所に丸を出す</b>お絵かきの基礎。座標(e.clientX/Y)と要素づくりの合わせ技。`,en:`The basics of drawing: <b>place a dot where you click</b> in the preview. A combo of coordinates (e.clientX/Y) and element creation.`},
   tags:["click","createElement","e.clientX"], prep:[
     {s:'e.clientX / e.clientY',d:{ja:'クリックした<b>場所</b>の座標。',en:'The coordinates of the <b>spot</b> clicked.'}}],
   html:{ja:`<p style="font-family:sans-serif;padding:16px">この画面をクリック！</p>`,en:`<p style="font-family:sans-serif;padding:16px">Click this screen!</p>`},
   css:{ja:`body {
  margin: 0;
  height: 100vh;
  background: #f6f3ff;
}

.dot {
  position: absolute;
  width: 20px;
  height: 20px;
  margin: -10px 0 0 -10px;   /* 中心をクリック点に合わせる */
  background: #8b5cf6;
  border-radius: 50%;
  pointer-events: none;
}`,en:`body {
  margin: 0;
  height: 100vh;
  background: #f6f3ff;
}

.dot {
  position: absolute;
  width: 20px;
  height: 20px;
  margin: -10px 0 0 -10px;   /* center the dot on the click point */
  background: #8b5cf6;
  border-radius: 50%;
  pointer-events: none;
}`},
   variations:[{label:{ja:"クリックで丸",en:"Dot on click"}, code:{ja:`document.addEventListener("click", (e) => {
  const dot = document.createElement("div");  // 丸を作る
  dot.className = "dot";
  dot.style.left = e.clientX + "px";           // 押した横位置
  dot.style.top = e.clientY + "px";            // 押した縦位置
  document.body.appendChild(dot);              // 画面に出す
});
// プレビュー内をいろいろクリックしてみて`,en:`document.addEventListener("click", (e) => {
  const dot = document.createElement("div");  // make a dot
  dot.className = "dot";
  dot.style.left = e.clientX + "px";           // clicked x position
  dot.style.top = e.clientY + "px";            // clicked y position
  document.body.appendChild(dot);              // show it on screen
});
// Click around inside the preview`}}]},

  {name:{ja:"矢印キーで動かす",en:"Move with arrow keys"}, sub:{ja:"keydown で移動",en:"Move with keydown"}, desc:{ja:`<b>キーボードの矢印キー</b>で部品を動かします。ゲームの基礎！ e.key で押されたキーを見分けます。`,en:`Move a part with the <b>keyboard arrow keys</b>. The basics of games! Tell which key was pressed with e.key.`},
   tags:["keydown","e.key"], prep:[
     {s:'e.key === "ArrowRight"',d:{ja:'右矢印キーが押されたか。上下左は "ArrowUp/Down/Left"。',en:'Whether the right arrow was pressed. Others are "ArrowUp/Down/Left".'}}],
   html:{ja:`<p style="font-family:sans-serif;padding:8px 16px;margin:0">プレビューをクリックしてから矢印キー↑↓←→</p>
<div id="ball" class="ball"></div>`,en:`<p style="font-family:sans-serif;padding:8px 16px;margin:0">Click the preview, then use arrow keys up/down/left/right</p>
<div id="ball" class="ball"></div>`},
   css:`body {
  margin: 0;
  height: 100vh;
}

.ball {
  position: absolute;
  top: 120px;
  left: 120px;
  width: 50px;
  height: 50px;
  background: #8b5cf6;
  border-radius: 50%;
  transition: .05s;
}`,
   variations:[{label:{ja:"矢印で移動",en:"Move with arrows"}, code:{ja:`const ball = document.querySelector("#ball");
let x = 120, y = 120;

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") x += 20;
  if (e.key === "ArrowLeft")  x -= 20;
  if (e.key === "ArrowUp")    y -= 20;
  if (e.key === "ArrowDown")  y += 20;
  ball.style.left = x + "px";
  ball.style.top = y + "px";
});
// プレビューをクリックしてから矢印キーを押す`,en:`const ball = document.querySelector("#ball");
let x = 120, y = 120;

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") x += 20;
  if (e.key === "ArrowLeft")  x -= 20;
  if (e.key === "ArrowUp")    y -= 20;
  if (e.key === "ArrowDown")  y += 20;
  ball.style.left = x + "px";
  ball.style.top = y + "px";
});
// Click the preview first, then press arrow keys`}}]},

  {name:{ja:"画面の大きさを知る",en:"Know the screen size"}, sub:"resize", desc:{ja:`ウィンドウの<b>幅・高さ</b>を取得し、<b>大きさが変わるたび</b>に反応します。レスポンシブ対応の基礎。`,en:`Get the window's <b>width and height</b>, and react <b>every time the size changes</b>. The basics of responsive design.`},
   tags:["innerWidth","resize"], prep:[
     {s:'window.innerWidth',d:{ja:'今の画面の<b>横幅</b>（px）。',en:'The current screen <b>width</b> (px).'}},
     {s:'addEventListener("resize", …)',d:{ja:'大きさが<b>変わるたび</b>実行。',en:'Runs <b>every time</b> the size changes.'}}],
   variations:[{label:{ja:"サイズを表示",en:"Show the size"}, code:{ja:`const el = document.querySelector("#test");

const show = () => {
  el.textContent = window.innerWidth + " x " + window.innerHeight;
};
show();                                   // 最初に1回
window.addEventListener("resize", show);  // 変わるたびに更新
// ブラウザの窓の大きさを変えてみて`,en:`const el = document.querySelector("#test");

const show = () => {
  el.textContent = window.innerWidth + " x " + window.innerHeight;
};
show();                                   // once at the start
window.addEventListener("resize", show);  // update on every change
// Try resizing the browser window`}}]},

  {name:{ja:"クリップボードにコピー",en:"Copy to clipboard"}, sub:"navigator.clipboard", desc:{ja:`ボタンを押したら文字を<b>コピー</b>。<b>navigator.clipboard.writeText</b> の1行でOK。「クーポンコードをコピー」などでよく見ます。`,en:`<b>Copy</b> text on button press. One line of <b>navigator.clipboard.writeText</b> does it. Common for "copy coupon code" and the like.`},
   tags:["clipboard","writeText"], prep:[
     {s:{ja:'navigator.clipboard.writeText("文字")',en:'navigator.clipboard.writeText("text")'},d:{ja:'その文字を<b>クリップボードにコピー</b>する。',en:'<b>Copies</b> that text <b>to the clipboard</b>.'}}],
   variations:[{label:{ja:"コピーする",en:"Copy"}, code:{ja:`const el = document.querySelector("#test");
el.textContent = "クリックでコピー";

el.addEventListener("click", () => {
  navigator.clipboard.writeText("コピーされた文字です");
  el.textContent = "コピーしました！";
});`,en:`const el = document.querySelector("#test");
el.textContent = "Click to copy";

el.addEventListener("click", () => {
  navigator.clipboard.writeText("This is the copied text");
  el.textContent = "Copied!";
});`}}]},

  {name:{ja:"スクロール位置を知る",en:"Know scroll position"}, sub:"scrollY", desc:{ja:`ページを<b>どれだけ下にスクロールしたか</b>を数値で取れます。「上に戻るボタン」や「スクロールで色を変える」の土台になります。`,en:`Get a number for <b>how far down the page is scrolled</b>. The basis for "back to top" buttons and "change color on scroll".`},
   tags:["scrollY","scroll"], prep:[
     {s:'window.scrollY',d:{ja:'一番上からの<b>スクロール量</b>（px）。',en:'The <b>scroll amount</b> from the top (px).'}},
     {s:{ja:'"scroll" イベント',en:'"scroll" event'},d:{ja:'スクロールする<b>たび</b>に発火する。',en:'Fires <b>every time</b> you scroll.'}}],
   html:{ja:`<div id="test">スクロールしてね</div>
<div style="height:800px"></div>`,en:`<div id="test">Scroll me</div>
<div style="height:800px"></div>`},
   variations:[{label:{ja:"位置を表示",en:"Show position"}, code:{ja:`const el = document.querySelector("#test");

window.addEventListener("scroll", () => {
  el.textContent = "スクロール量: " + Math.round(window.scrollY) + "px";
});
// プレビュー内を下へスクロール`,en:`const el = document.querySelector("#test");

window.addEventListener("scroll", () => {
  el.textContent = "scrolled: " + Math.round(window.scrollY) + "px";
});
// Scroll down inside the preview`}}]},

  {name:{ja:"右クリックに反応",en:"React to right-click"}, sub:"contextmenu", desc:{ja:`右クリックした瞬間を捕まえられます。<b>e.preventDefault()</b> で「いつものメニュー」を止めれば、自分だけの右クリックメニューも作れます。`,en:`Catch the moment of a right-click. Stop the "usual menu" with <b>e.preventDefault()</b> and you can build your own right-click menu.`},
   tags:["contextmenu","preventDefault"], prep:[
     {s:{ja:'"contextmenu" イベント',en:'"contextmenu" event'},d:{ja:'<b>右クリック</b>した瞬間に発火。',en:'Fires the moment of a <b>right-click</b>.'}},
     {s:'e.preventDefault()',d:{ja:'ブラウザ標準の動き（右クリックメニュー）を<b>キャンセル</b>する。',en:'<b>Cancels</b> the browser default (the right-click menu).'}}],
   variations:[{label:{ja:"右クリックを奪う",en:"Hijack right-click"}, code:{ja:`const el = document.querySelector("#test");

el.addEventListener("contextmenu", (e) => {
  e.preventDefault();          // いつものメニューを出さない
  el.textContent = "右クリックされた！";
});
// プレビューのボタンを右クリックしてみて`,en:`const el = document.querySelector("#test");

el.addEventListener("contextmenu", (e) => {
  e.preventDefault();          // don't show the usual menu
  el.textContent = "Right-clicked!";
});
// Right-click the preview button`}}]},

  {name:{ja:"Enterキーで確定",en:"Confirm with Enter"}, sub:{ja:"入力→Enter",en:"type -> Enter"}, desc:{ja:`入力欄で<b>Enterを押したら実行</b>する、検索窓やチャットの定番パターン。「どのキーが押されたか」を <b>e.key</b> で調べて Enter のときだけ動かします。`,en:`<b>Run when Enter is pressed</b> in an input — the staple pattern for search boxes and chat. Check "which key" with <b>e.key</b> and act only on Enter.`},
   tags:["keydown","e.key","Enter"], prep:[
     {s:'e.key',d:{ja:'押されたキーの名前（"Enter" "a" "ArrowUp" など）。',en:'The name of the pressed key ("Enter", "a", "ArrowUp", etc.).'}},
     {s:'if (e.key === "Enter")',d:{ja:'Enterのときだけ中を実行。',en:'Run the body only when it\'s Enter.'}}],
   html:{ja:`<input id="box" type="text" placeholder="入力してEnter">
<div id="out"></div>`,en:`<input id="box" type="text" placeholder="type and press Enter">
<div id="out"></div>`},
   css:`input {
  padding: 8px;
  font-size: 15px;
}
#out {
  margin-top: 10px;
  font-weight: bold;
}`,
   variations:[{label:{ja:"Enterで送信",en:"Send on Enter"}, code:{ja:`const box = document.querySelector("#box");
const out = document.querySelector("#out");

box.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    out.textContent = "送信: " + box.value;
    box.value = "";              // 入力欄を空に
  }
});
// 入力してEnterを押してみて`,en:`const box = document.querySelector("#box");
const out = document.querySelector("#out");

box.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    out.textContent = "sent: " + box.value;
    box.value = "";              // clear the input
  }
});
// Type something and press Enter`}}]},

  {name:{ja:"要素の位置と大きさ",en:"Element position & size"}, sub:"getBoundingClientRect", desc:{ja:`その要素が<b>画面のどこに・どの大きさで</b>あるかを数値で取れます。ツールチップの位置決めや当たり判定など、少し凝った動きの土台。`,en:`Get numbers for <b>where and how big</b> an element is on screen. The basis for tooltip positioning, hit detection, and other fancier effects.`},
   tags:["getBoundingClientRect"], prep:[
     {s:'el.getBoundingClientRect()',d:{ja:'位置と大きさが入った箱を返す。<b>.top .left</b>（位置）、<b>.width .height</b>（大きさ）。',en:'Returns a box of position and size. <b>.top .left</b> (position), <b>.width .height</b> (size).'}}],
   variations:[{label:{ja:"測ってみる",en:"Measure it"}, code:{ja:`const el = document.querySelector("#test");
const r = el.getBoundingClientRect();

console.log("左から:", Math.round(r.left) + "px");
console.log("上から:", Math.round(r.top) + "px");
console.log("幅:", Math.round(r.width) + "px");
console.log("高さ:", Math.round(r.height) + "px");`,en:`const el = document.querySelector("#test");
const r = el.getBoundingClientRect();

console.log("from left:", Math.round(r.left) + "px");
console.log("from top:", Math.round(r.top) + "px");
console.log("width:", Math.round(r.width) + "px");
console.log("height:", Math.round(r.height) + "px");`}}]},

  {name:{ja:"スクロールで出現",en:"Appear on scroll"}, sub:"IntersectionObserver", desc:{ja:`下へスクロールして<b>その要素が画面に入った瞬間</b>にふわっと表示する、今どきのサイトで定番の演出。<b>IntersectionObserver（インターセクション・オブザーバー＝交差の見張り役）</b>を使うと、スクロール量を自分で計算せずに「見えたら実行」が書けます。`,en:`As you scroll down, fade in <b>the moment an element enters the screen</b> — a staple effect on modern sites. With <b>IntersectionObserver (a "crossing watcher")</b> you can write "run when visible" without computing scroll amounts yourself.`},
   tags:["IntersectionObserver","isIntersecting"], prep:[
     {s:{ja:'new IntersectionObserver(関数)',en:'new IntersectionObserver(callback)'},d:{ja:'「要素が見えた／隠れた」ときに<b>関数を呼ぶ見張り役</b>を作る。',en:'Creates a <b>watcher that calls a function</b> when an element becomes visible/hidden.'}},
     {s:'observer.observe(el)',d:{ja:'その el を<b>見張り対象に登録</b>する。',en:'<b>Registers</b> that el as a watch target.'}},
     {s:'entry.isIntersecting',d:{ja:'その要素が今<b>画面内に入っているか</b>（true / false）。',en:'Whether the element is <b>currently on screen</b> (true / false).'}}],
   html:{ja:`<p>↓ 下へスクロールしてね</p>
<div style="height:400px"></div>
<div class="card">見えたら出現！</div>
<div style="height:200px"></div>`,en:`<p>v Scroll down</p>
<div style="height:400px"></div>
<div class="card">Appears when visible!</div>
<div style="height:200px"></div>`},
   css:{ja:`.card {
  padding: 30px;
  background: #7C9885;
  color: #fff;
  border-radius: 10px;
  opacity: 0;                     /* 最初は透明 */
  transform: translateY(30px);
  transition: 0.6s;
}
.card.show {
  opacity: 1;                     /* 見えたら表示 */
  transform: translateY(0);
}`,en:`.card {
  padding: 30px;
  background: #7C9885;
  color: #fff;
  border-radius: 10px;
  opacity: 0;                     /* transparent at first */
  transform: translateY(30px);
  transition: 0.6s;
}
.card.show {
  opacity: 1;                     /* shown once visible */
  transform: translateY(0);
}`},
   variations:[{label:{ja:"見えたら出す",en:"Show when visible"}, code:{ja:`const card = document.querySelector(".card");

// 「見えたら教えてくれる見張り役」を作る
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {     // 画面に入った？
      card.classList.add("show");   // → フェードイン
    }
  });
});

observer.observe(card);             // card を見張り対象にする
// プレビュー内を下へスクロールしてみて`,en:`const card = document.querySelector(".card");

// Create a "watcher that tells you when it's visible"
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {     // entered the screen?
      card.classList.add("show");   // -> fade in
    }
  });
});

observer.observe(card);             // make card a watch target
// Scroll down inside the preview`}}]}
]},

/* ============ 特級編：一歩進んだJSの技 ============ */
{name:"特級", items:[
  {name:{ja:"安全に取り出す（?. と ??）",en:"Safe access (?. and ??)"}, sub:{ja:"オプショナルチェーン / Null合体",en:"Optional chaining / nullish coalescing"}, desc:{ja:`「無いかもしれない値」を<b>エラーにせず</b>扱う今どきの2つ。<b>?.</b>（オプショナルチェーン）＝途中が <b>null / undefined</b> なら<b>その場で undefined</b>を返して止まる（＝真っ赤なエラーにならない）。<b>??</b>（Null合体）＝<b>左が null / undefined のときだけ</b>右の値を使う。<br><b>ルール</b>：<b>??</b> は <b>||</b> と似ているが、<b>0 や "" を「あり」</b>として扱う点が違う（|| は 0 も空文字も「無し」にしてしまう）。フォーム初期値やAPIの返り値でよく使います。`,en:`Two modern tools for handling "maybe-missing values" <b>without errors</b>. <b>?.</b> (optional chaining) = if a step is <b>null / undefined</b>, it <b>returns undefined right there</b> and stops (no red error). <b>??</b> (nullish coalescing) = use the right value <b>only when the left is null / undefined</b>.<br><b>Rule</b>: <b>??</b> is like <b>||</b>, but it treats <b>0 and "" as "present"</b> (|| treats 0 and empty string as "absent"). Common for form defaults and API return values.`},
   tags:["?.","??"], prep:[
     {s:'obj?.prop',d:{ja:'obj が null/undefined なら<b>undefined</b>を返す（エラーにしない）。',en:'If obj is null/undefined it returns <b>undefined</b> (no error).'}},
     {s:{ja:'値 ?? 既定値',en:'value ?? default'},d:{ja:'左が null/undefined の<b>ときだけ</b>右を使う。',en:'Uses the right <b>only when</b> the left is null/undefined.'}}],
   variations:[
     {label:{ja:"?. でエラー回避",en:"?. avoids errors"}, code:{ja:`const user = { name: "たろう" };   // address は無い

// address が無くても、エラーではなく undefined になる
console.log(user.address?.city);   // undefined
// console.log(user.address.city); // ← これはエラーで止まる`,en:`const user = { name: "Taro" };   // no address

// Even without address, it's undefined instead of an error
console.log(user.address?.city);   // undefined
// console.log(user.address.city); // <- this stops with an error`}},
     {label:{ja:"?? で既定値",en:"?? for defaults"}, code:{ja:`const input = "";        // 空文字（入力なしのつもり）
const zero = 0;

console.log(input ?? "未入力");  // ""（?? は空文字を「あり」とみなす）
console.log(zero ?? 10);         // 0（0も「あり」）
console.log(input || "未入力");  // "未入力"（|| は空文字を「無し」に）`,en:`const input = "";        // empty string (meant as no input)
const zero = 0;

console.log(input ?? "no input");  // "" (?? treats "" as present)
console.log(zero ?? 10);           // 0 (0 is present too)
console.log(input || "no input");  // "no input" (|| treats "" as absent)`}}]},

  {name:{ja:"配列を加工する",en:"Transform arrays"}, sub:"map / filter", desc:{ja:`配列から<b>新しい配列を作る</b>強力な道具。<b>map</b>＝全部を変換、<b>filter</b>＝条件で絞り込み。実務で毎日使います。<br><b>ルール</b>：どちらも<b>元の配列は変えず</b>、加工後の<b>新しい配列を返す</b>。map は関数が<b>返した値</b>、filter は<b>true を返した要素</b>が集まります。`,en:`Powerful tools that <b>build a new array</b> from one. <b>map</b> = transform every item; <b>filter</b> = keep by condition. Used daily in real work.<br><b>Rule</b>: both <b>leave the original unchanged</b> and <b>return a new array</b>. map collects the <b>values the function returns</b>; filter collects the <b>items for which it returns true</b>.`},
   tags:["map","filter"], prep:[
     {s:{ja:'配列.map((x) => 新しい値)',en:'array.map((x) => newValue)'},d:{ja:'全要素を<b>変換</b>した新しい配列を作る。',en:'Builds a new array with every item <b>transformed</b>.'}},
     {s:{ja:'配列.filter((x) => 条件)',en:'array.filter((x) => condition)'},d:{ja:'条件が true の要素<b>だけ</b>集めた新配列。',en:'A new array of <b>only</b> items where the condition is true.'}}],
   variations:[
     {label:{ja:"map で2倍",en:"Double with map"}, code:{ja:`const nums = [1, 2, 3, 4];

// 全部を2倍にした「新しい配列」を作る
const doubled = nums.map((n) => n * 2);
console.log(doubled);   // [2, 4, 6, 8]`,en:`const nums = [1, 2, 3, 4];

// Build a "new array" with everything doubled
const doubled = nums.map((n) => n * 2);
console.log(doubled);   // [2, 4, 6, 8]`}},
     {label:{ja:"filter で絞る",en:"Narrow with filter"}, code:{ja:`const nums = [1, 2, 3, 4, 5, 6];

// 偶数だけ（2で割ったあまりが0）集める
const even = nums.filter((n) => n % 2 === 0);
console.log(even);      // [2, 4, 6]`,en:`const nums = [1, 2, 3, 4, 5, 6];

// Collect only evens (remainder of dividing by 2 is 0)
const even = nums.filter((n) => n % 2 === 0);
console.log(even);      // [2, 4, 6]`}}]},

  {name:{ja:"待ってから実行",en:"Run after waiting"}, sub:"Promise / async", desc:{ja:`「<b>時間のかかる処理を待つ</b>」ための仕組み。通信などで必須です。ここでは setTimeout を Promise で包んで、<b>await</b> で待ってみます。`,en:`The mechanism for <b>waiting on time-consuming work</b>. Essential for network requests. Here we wrap setTimeout in a Promise and wait with <b>await</b>.`},
   tags:["Promise","async","await"], prep:[
     {s:'await',d:{ja:'その処理が<b>終わるまで待つ</b>（async関数の中でだけ使える）。',en:'<b>Waits until</b> that work finishes (usable only inside an async function).'}},
     {s:'new Promise(...)',d:{ja:'「あとで結果が出る」約束を表す箱。',en:'A box representing a promise that "a result comes later".'}}],
   variations:[{label:{ja:"1秒待つ",en:"Wait 1 second"}, code:{ja:`// 指定ミリ秒だけ待つ関数（Promiseで包む定番の書き方）
const wait = (ms) => new Promise((ok) => setTimeout(ok, ms));

const main = async () => {
  console.log("スタート");
  await wait(1000);        // ここで1秒 待つ
  console.log("1秒たった！");
};
main();`,en:`// A function that waits N ms (the standard Promise wrapper)
const wait = (ms) => new Promise((ok) => setTimeout(ok, ms));

const main = async () => {
  console.log("start");
  await wait(1000);        // wait 1 second here
  console.log("1 second passed!");
};
main();`}}]},

  {name:{ja:"分割代入",en:"Destructuring"}, sub:{ja:"まとめて取り出す",en:"Extract in one go"}, desc:{ja:`配列やオブジェクトから、<b>複数の値を一度に取り出して</b>変数にする書き方。コードがぐっとすっきりします。`,en:`A way to <b>extract several values at once</b> from an array or object into variables. Makes code much cleaner.`},
   tags:[{ja:'分割代入',en:'destructuring'},"{ }","[ ]"], prep:[
     {s:'const { a, b } = obj',d:{ja:'obj から a と b を<b>一気に</b>取り出す。',en:'Extracts a and b from obj <b>at once</b>.'}},
     {s:'const [x, y] = arr',d:{ja:'配列の1個目・2個目を取り出す。',en:'Extracts the first and second items of an array.'}}],
   variations:[
     {label:{ja:"オブジェクトから",en:"From an object"}, code:{ja:`const user = { name: "たろう", age: 20 };

// name と age を一気に取り出す
const { name, age } = user;
console.log(name, age);   // たろう 20`,en:`const user = { name: "Taro", age: 20 };

// Extract name and age at once
const { name, age } = user;
console.log(name, age);   // Taro 20`}},
     {label:{ja:"配列から",en:"From an array"}, code:{ja:`const point = [100, 200];

// 1個目→x、2個目→y に取り出す
const [x, y] = point;
console.log("x:", x, "y:", y);`,en:`const point = [100, 200];

// first -> x, second -> y
const [x, y] = point;
console.log("x:", x, "y:", y);`}}]},

  {name:{ja:"スプレッド構文",en:"Spread syntax"}, sub:{ja:"... で展開",en:"Expand with ..."}, desc:{ja:`<b>...</b> を付けると、配列やオブジェクトの中身を<b>ばらまいて</b>コピー・合体できます。`,en:`Add <b>...</b> to <b>spread out</b> an array's or object's contents to copy or merge them.`},
   tags:["...",{ja:'配列',en:'array'},{ja:'オブジェクト',en:'object'}], prep:[
     {s:'[...a, ...b]',d:{ja:'配列 a と b を<b>つなげた</b>新配列。',en:'A new array <b>joining</b> arrays a and b.'}},
     {s:{ja:'{ ...obj, 追加 }',en:'{ ...obj, extra }'},d:{ja:'obj をコピーして値を足す・上書きする。',en:'Copies obj and adds/overrides values.'}}],
   variations:[
     {label:{ja:"配列を合体",en:"Merge arrays"}, code:{ja:`const a = [1, 2];
const b = [3, 4];

// ... で中身を展開してつなげる
const c = [...a, ...b];
console.log(c);   // [1, 2, 3, 4]`,en:`const a = [1, 2];
const b = [3, 4];

// spread the contents with ... and join
const c = [...a, ...b];
console.log(c);   // [1, 2, 3, 4]`}},
     {label:{ja:"オブジェクトをコピー",en:"Copy an object"}, code:{ja:`const base = { name: "たろう", age: 20 };

// コピーして age だけ上書き
const updated = { ...base, age: 21 };
console.log(updated);`,en:`const base = { name: "Taro", age: 20 };

// copy and override only age
const updated = { ...base, age: 21 };
console.log(updated);`}}]},

  {name:{ja:"エラー処理",en:"Error handling"}, sub:"try / catch", desc:{ja:`失敗しそうな処理を <b>try</b> で囲み、<b>catch</b> で失敗時の対応を書きます。エラーで全部止まらず、優しく処理を続けられます。`,en:`Wrap risky work in <b>try</b> and handle failures in <b>catch</b>. Instead of everything stopping on an error, you can continue gracefully.`},
   tags:["try","catch"], prep:[
     {s:'try { … }',d:{ja:'失敗するかもしれない処理を入れる。',en:'Put work that might fail here.'}},
     {s:'catch (e) { … }',d:{ja:'失敗したときの対応。e にエラー情報が入る。',en:'What to do on failure. e holds the error info.'}}],
   variations:[{label:{ja:"失敗を受け止める",en:"Catch the failure"}, code:{ja:`try {
  // わざと壊れたデータを読む → エラーになる
  const data = JSON.parse("こわれてる");
  console.log(data);
} catch (e) {
  // 止まらずに、ここで受け止める
  console.log("失敗したけど大丈夫:", e.name);
}
console.log("プログラムは続く");`,en:`try {
  // deliberately read broken data -> error
  const data = JSON.parse("broken");
  console.log(data);
} catch (e) {
  // caught here without stopping
  console.log("failed but it's fine:", e.name);
}
console.log("the program continues");`}}]},

  {name:{ja:"データを保存する",en:"Save data"}, sub:"localStorage", desc:{ja:`ブラウザに<b>データを保存</b>して、次に開いたときも覚えておける仕組み。設定やスコアの保存に使います。<br><b>ルール</b>：保存できるのは<b>文字だけ</b>。数は読み出す時 <b>Number()</b>、オブジェクトや配列は <b>JSON.stringify</b> で文字にして保存し、読む時 <b>JSON.parse</b> で戻します。`,en:`A way to <b>save data</b> in the browser so it's remembered next time you open the page. Used for settings and scores.<br><b>Rule</b>: only <b>text</b> can be saved. For numbers, use <b>Number()</b> when reading; for objects and arrays, save as text with <b>JSON.stringify</b> and restore with <b>JSON.parse</b>.`},
   tags:["localStorage","setItem","getItem"], prep:[
     {s:{ja:'localStorage.setItem("キー", 値)',en:'localStorage.setItem("key", value)'},d:{ja:'値を<b>保存</b>する。',en:'<b>Saves</b> a value.'}},
     {s:{ja:'localStorage.getItem("キー")',en:'localStorage.getItem("key")'},d:{ja:'保存した値を<b>読み出す</b>。',en:'<b>Reads</b> a saved value.'}},
     {s:{ja:'取得した値 || 0',en:'retrieved || 0'},d:{ja:'左が空っぽ（null）のとき<b>代わりに0を使う</b>という書き方。初回の「まだ何も保存してない」対策。',en:'When the left is empty (null), <b>use 0 instead</b>. Handles the first-time "nothing saved yet" case.'}}],
   variations:[{label:{ja:"回数を覚える",en:"Remember a count"}, code:{ja:`// 前回までの回数を読み出す（無ければ0）
let count = Number(localStorage.getItem("myCount") || 0);
count = count + 1;

localStorage.setItem("myCount", count);   // 保存する
console.log("このコードは通算", count, "回 実行されました");
// もう一度「実行」すると数字が増える（＝覚えている）`,en:`// Read the count so far (0 if none)
let count = Number(localStorage.getItem("myCount") || 0);
count = count + 1;

localStorage.setItem("myCount", count);   // save it
console.log("this code has run", count, "times in total");
// Press "Run" again and the number grows (it remembers)`}}]},

  {name:{ja:"ドラッグで動かす",en:"Move by dragging"}, sub:"mousedown/move/up", desc:{ja:`部品を<b>マウスでつまんで動かす</b>技。押した(down)→動かす(move)→離す(up)の3つを組み合わせます。少し難しいですが定番！`,en:`The technique of <b>grabbing and moving</b> a part with the mouse. Combine press (down) -> move (move) -> release (up). A bit tricky, but a staple!`},
   tags:["mousedown","mousemove","mouseup"], prep:[
     {s:'mousedown',d:{ja:'つかんだ（ドラッグ開始）。',en:'Grabbed (drag start).'}},
     {s:'mousemove',d:{ja:'動かしている間ずっと。',en:'Continuously while moving.'}},
     {s:'mouseup',d:{ja:'はなした（終了）。',en:'Released (end).'}}],
   html:{ja:`<div id="box" class="box">ドラッグ</div>`,en:`<div id="box" class="box">Drag</div>`},
   css:{ja:`body {
  margin: 0;
  height: 100vh;
  font-family: sans-serif;
}

.box {
  position: absolute;   /* 自由な位置に置ける */
  top: 60px;
  left: 60px;
  width: 90px;
  height: 90px;
  display: grid;
  place-items: center;
  background: #8b5cf6;
  color: #fff;
  border-radius: 12px;
  cursor: grab;
  user-select: none;    /* ドラッグ中に文字が選択されないように */
}`,en:`body {
  margin: 0;
  height: 100vh;
  font-family: sans-serif;
}

.box {
  position: absolute;   /* can be placed freely */
  top: 60px;
  left: 60px;
  width: 90px;
  height: 90px;
  display: grid;
  place-items: center;
  background: #8b5cf6;
  color: #fff;
  border-radius: 12px;
  cursor: grab;
  user-select: none;    /* prevent text selection while dragging */
}`},
   variations:[{label:{ja:"つまんで動かす",en:"Grab and move"}, code:{ja:`const box = document.querySelector("#box");
let dragging = false;

// ① つかんだ
box.addEventListener("mousedown", () => {
  dragging = true;
});

// ② 動かしている間、マウスの位置へ箱を移動（-45は箱の半分ぶん）
document.addEventListener("mousemove", (e) => {
  if (!dragging) return;               // つかんでない時は何もしない
  box.style.left = (e.clientX - 45) + "px";
  box.style.top = (e.clientY - 45) + "px";
});

// ③ はなした
document.addEventListener("mouseup", () => {
  dragging = false;
});
// プレビューの箱をドラッグしてみて`,en:`const box = document.querySelector("#box");
let dragging = false;

// (1) grabbed
box.addEventListener("mousedown", () => {
  dragging = true;
});

// (2) while moving, move the box to the mouse (-45 = half the box)
document.addEventListener("mousemove", (e) => {
  if (!dragging) return;               // do nothing when not grabbed
  box.style.left = (e.clientX - 45) + "px";
  box.style.top = (e.clientY - 45) + "px";
});

// (3) released
document.addEventListener("mouseup", () => {
  dragging = false;
});
// Drag the box in the preview`}}]},

  {name:{ja:"連打を抑える",en:"Suppress rapid fire"}, sub:{ja:"デバウンス",en:"Debounce"}, desc:{ja:`入力などが<b>連続した時、最後の1回だけ</b>実行する高等テク。検索の「打ち終わってから検索」でおなじみ。`,en:`An advanced technique that runs <b>only the last time</b> when events fire in quick succession. Familiar as "search after you finish typing".`},
   tags:["setTimeout","clearTimeout"], prep:[
     {s:{ja:'clearTimeout(前の予約)',en:'clearTimeout(prevTimer)'},d:{ja:'直前の予約を<b>取り消す</b>。',en:'<b>Cancels</b> the previous reservation.'}},
     {s:{ja:'デバウンス',en:'Debounce'},d:{ja:'「静かになったら実行」という考え方。',en:'The idea of "run once things go quiet".'}}],
   html:{ja:`<input id="box" placeholder="すばやく打ってみて">
<p id="out">打ち終わってから、ここに出ます</p>`,en:`<input id="box" placeholder="type quickly">
<p id="out">shows here after you stop typing</p>`},
   css:`body {
  padding: 24px;
  font-family: sans-serif;
}

input {
  padding: 8px 12px;
  font-size: 16px;
}

#out {
  color: #8b5cf6;
}`,
   variations:[{label:{ja:"打ち終わりを待つ",en:"Wait until done typing"}, code:{ja:`const box = document.querySelector("#box");
const out = document.querySelector("#out");
let timer;

box.addEventListener("input", () => {
  clearTimeout(timer);                 // 前の予約を取り消す
  // 0.5秒 何も打たなければ実行する（＝打ち終わりとみなす）
  timer = setTimeout(() => {
    out.textContent = "検索: " + box.value;
  }, 500);
});`,en:`const box = document.querySelector("#box");
const out = document.querySelector("#out");
let timer;

box.addEventListener("input", () => {
  clearTimeout(timer);                 // cancel the previous reservation
  // run if nothing typed for 0.5s (= treat as done typing)
  timer = setTimeout(() => {
    out.textContent = "search: " + box.value;
  }, 500);
});`}}]},

  {name:{ja:"JSONを扱う",en:"Work with JSON"}, sub:"stringify / parse", desc:{ja:`データを<b>保存や通信に使える文字列</b>にしたり(stringify)、文字列を<b>元のデータに戻したり</b>(parse)します。localStorageや通信で必須。`,en:`Turn data into a <b>string usable for saving or transfer</b> (stringify), or turn a string <b>back into data</b> (parse). Essential for localStorage and networking.`},
   tags:["JSON.stringify","JSON.parse"], prep:[
     {s:'JSON.stringify(obj)',d:{ja:'オブジェクト→<b>文字列</b>。',en:'Object -> <b>string</b>.'}},
     {s:{ja:'JSON.parse(文字列)',en:'JSON.parse(string)'},d:{ja:'文字列→<b>オブジェクト</b>に戻す。',en:'String -> back to an <b>object</b>.'}}],
   variations:[{label:{ja:"変換してみる",en:"Convert it"}, code:{ja:`const user = { name: "たろう", age: 20 };

// オブジェクト → 文字列
const text = JSON.stringify(user);
console.log(text);          // {"name":"たろう","age":20}

// 文字列 → オブジェクトに戻す
const back = JSON.parse(text);
console.log(back.name);     // たろう`,en:`const user = { name: "Taro", age: 20 };

// object -> string
const text = JSON.stringify(user);
console.log(text);          // {"name":"Taro","age":20}

// string -> back to object
const back = JSON.parse(text);
console.log(back.name);     // Taro`}}]},

  {name:{ja:"データを取ってくる",en:"Fetch data"}, sub:{ja:"fetch（API通信の入門）",en:"fetch (intro to API calls)"}, desc:{ja:`<b>fetch(URL)</b> は、サーバーやファイルから<b>データを取ってくる</b>命令。ニュース一覧・天気・ログインなど、今のWebアプリの多くはこれで外部からデータを受け取っています。<br><b>ルール</b>：fetch は<b>時間がかかる</b>ので結果は Promise で返る → <b>await</b>（または .then）で待つ。受け取った返事は <b>res.json()</b> で扱えるデータに変換（これも await）。通信は<b>失敗することがある</b>ので try/catch とセットが基本。<br>※ この道場には実サーバーが無いので、下の例は「その場に用意した data: のデータ」を取ってくる形で fetch の流れを体験します。実際は "https://…" のURLを渡します。`,en:`<b>fetch(URL)</b> is the command to <b>get data</b> from a server or file. News lists, weather, login — most modern web apps receive external data this way.<br><b>Rules</b>: fetch <b>takes time</b>, so it returns a Promise -> wait with <b>await</b> (or .then). Convert the response into usable data with <b>res.json()</b> (also await). Networking <b>can fail</b>, so pairing with try/catch is standard.<br>* This dojo has no real server, so the example below fetches "on-the-spot data: data" to experience the fetch flow. In reality you pass a "https://…" URL.`},
   tags:["fetch","await","res.json()"], prep:[
     {s:'await fetch(URL)',d:{ja:'URLへ<b>取りに行って待つ</b>。返事(res)が返る。',en:'<b>Goes to the URL and waits</b>. A response (res) comes back.'}},
     {s:'await res.json()',d:{ja:'返事を<b>JSONデータ</b>に変換して取り出す。',en:'Converts the response into <b>JSON data</b> and extracts it.'}},
     {s:'try / catch',d:{ja:'通信は失敗し得るので<b>囲んで</b>備える。',en:'Networking can fail, so <b>wrap it</b> to be safe.'}}],
   variations:[
     {label:{ja:"取ってきて表示",en:"Fetch and show"}, code:{ja:`// 本物のAPIでは "https://…" を渡す。ここでは data: で代用
const url = "data:application/json," + encodeURIComponent(JSON.stringify({ name: "たろう", age: 20 }));

const main = async () => {
  try {
    const res = await fetch(url);      // ① 取りに行く
    const data = await res.json();     // ② データに変換
    console.log("名前:", data.name);   // たろう
    console.log("年齢:", data.age);    // 20
  } catch (e) {
    console.log("通信に失敗:", e.message);
  }
};
main();`,en:`// A real API takes "https://…". Here we substitute data:
const url = "data:application/json," + encodeURIComponent(JSON.stringify({ name: "Taro", age: 20 }));

const main = async () => {
  try {
    const res = await fetch(url);      // (1) go fetch
    const data = await res.json();     // (2) convert to data
    console.log("name:", data.name);   // Taro
    console.log("age:", data.age);     // 20
  } catch (e) {
    console.log("request failed:", e.message);
  }
};
main();`}},
     {label:{ja:".then で書く",en:"Write with .then"}, code:{ja:`const url = "data:application/json," + encodeURIComponent(JSON.stringify([10, 20, 30]));

// await の代わりに .then をつなげる書き方
fetch(url)
  .then((res) => res.json())
  .then((list) => console.log("合計:", list[0] + list[1] + list[2]))
  .catch((e) => console.log("失敗:", e.message));`,en:`const url = "data:application/json," + encodeURIComponent(JSON.stringify([10, 20, 30]));

// chaining .then instead of await
fetch(url)
  .then((res) => res.json())
  .then((list) => console.log("total:", list[0] + list[1] + list[2]))
  .catch((e) => console.log("failed:", e.message));`}}]},

  {name:{ja:"合計する（reduce）",en:"Sum (reduce)"}, sub:{ja:"畳み込み",en:"Folding"}, desc:{ja:`配列を<b>1つの値にまとめる</b>強力な命令。合計や最大などに使います。少し難しいですが超便利。`,en:`A powerful command that <b>reduces an array to a single value</b>. Used for sums, maxes, and more. A bit tricky but extremely useful.`},
   tags:["reduce"], prep:[
     {s:{ja:'配列.reduce((合計, x) => 合計 + x, 0)',en:'array.reduce((total, x) => total + x, 0)'},d:{ja:'0から始めて、全部を足し込む。',en:'Start at 0 and add everything up.'}}],
   variations:[{label:{ja:"合計を出す",en:"Get the total"}, code:{ja:`const prices = [100, 250, 80, 300];

// 合計を計算（0 からスタートして足していく）
const total = prices.reduce((sum, p) => sum + p, 0);
console.log("合計:", total);   // 730`,en:`const prices = [100, 250, 80, 300];

// compute the total (start at 0 and add)
const total = prices.reduce((sum, p) => sum + p, 0);
console.log("total:", total);   // 730`}}]},

  {name:{ja:"重複を消す",en:"Remove duplicates"}, sub:"Set", desc:{ja:`配列から<b>ダブりを消して</b>1種類ずつにする裏技。<b>new Set</b> に入れて配列に戻すだけ。タグの整理などで便利。`,en:`A trick to <b>drop duplicates</b> and keep one of each. Just put into <b>new Set</b> and convert back to an array. Handy for cleaning up tags.`},
   tags:["Set",{ja:'スプレッド',en:'spread'}], prep:[
     {s:{ja:'new Set(配列)',en:'new Set(array)'},d:{ja:'<b>重複を自動で除いた</b>集合を作る。',en:'Makes a set with <b>duplicates removed automatically</b>.'}},
     {s:{ja:'[...集合]',en:'[...set]'},d:{ja:'集合を<b>配列に戻す</b>（スプレッド構文）。',en:'<b>Converts a set back to an array</b> (spread syntax).'}}],
   variations:[{label:{ja:"ダブりを消す",en:"Drop duplicates"}, code:`const tags = ["JS", "CSS", "JS", "HTML", "CSS"];
const unique = [...new Set(tags)];
console.log(unique);   // ["JS", "CSS", "HTML"]`}]},

  {name:{ja:"並べ替える",en:"Sort"}, sub:"sort", desc:{ja:`配列を<b>小さい順／大きい順</b>に並べ替えます。数の並べ替えは <b>(a,b) => a - b</b> がお約束（これを書かないと文字扱いで変な順になる）。<br><b>注意</b>：sort は<b>元の配列を並べ替えて変えて</b>しまう（破壊的）。元を残したい時は <b>[...配列].sort(...)</b> とコピーしてから。`,en:`Sort an array <b>ascending or descending</b>. For numbers, <b>(a,b) => a - b</b> is the convention (without it, they're treated as text and sort oddly).<br><b>Note</b>: sort <b>rearranges the original array</b> (destructive). To keep the original, copy first with <b>[...array].sort(...)</b>.`},
   tags:["sort"], prep:[
     {s:{ja:'配列.sort((a,b) => a - b)',en:'array.sort((a,b) => a - b)'},d:{ja:'<b>小さい順</b>に並べる。<b>b - a</b> にすると大きい順。',en:'Sorts <b>ascending</b>. <b>b - a</b> gives descending.'}}],
   variations:[{label:{ja:"数を並べる",en:"Sort numbers"}, code:`const nums = [5, 1, 10, 3];
console.log([...nums].sort((a, b) => a - b));  // [1, 3, 5, 10]
console.log([...nums].sort((a, b) => b - a));  // [10, 5, 3, 1]`}]},

  {name:{ja:"正規表現で判定",en:"Test with regex"}, sub:{ja:"パターン照合",en:"Pattern matching"}, desc:{ja:`文字が<b>あるルールに合っているか</b>を調べる強力な道具。メールアドレスや電話番号のチェックの定番。まずは「数字だけか？」から。`,en:`A powerful tool to check whether text <b>matches a rule</b>. The staple for validating emails and phone numbers. Start with "is it only digits?".`},
   tags:[{ja:'正規表現',en:'regex'},"test"], prep:[
     {s:'/^[0-9]+$/',d:{ja:'「<b>最初から最後まで数字だけ</b>」という<b>ルール</b>。',en:'A <b>rule</b> for "<b>only digits from start to end</b>".'}},
     {s:{ja:'ルール.test(文字)',en:'rule.test(text)'},d:{ja:'合っていれば<b>true</b>。',en:'<b>true</b> if it matches.'}}],
   variations:[{label:{ja:"数字だけ？",en:"Only digits?"}, code:`const onlyNum = /^[0-9]+$/;
console.log(onlyNum.test("12345"));   // true
console.log(onlyNum.test("12a45"));   // false`}]},

  {name:{ja:"オブジェクトを回す",en:"Loop an object"}, sub:"Object.entries", desc:{ja:`オブジェクト（名前:値 のセット）を<b>1組ずつ取り出して</b>ループします。設定一覧やデータの表示で活躍。`,en:`Loop over an object (name:value pairs), <b>taking one pair at a time</b>. Great for settings lists and data display.`},
   tags:["Object.entries","for...of"], prep:[
     {s:'Object.entries(obj)',d:{ja:'{名前:値} を<b>[名前, 値] の配列</b>の集まりに変換。',en:'Converts {name:value} into a collection of <b>[name, value] arrays</b>.'}}],
   variations:[{label:{ja:"全部表示",en:"Show all"}, code:{ja:`const user = { name: "たろう", age: 20, city: "東京" };

for (const [key, value] of Object.entries(user)) {
  console.log(key + " → " + value);
}
// name → たろう / age → 20 / city → 東京`,en:`const user = { name: "Taro", age: 20, city: "Tokyo" };

for (const [key, value] of Object.entries(user)) {
  console.log(key + " -> " + value);
}
// name -> Taro / age -> 20 / city -> Tokyo`}}]},

  {name:{ja:"配列から探す",en:"Search an array"}, sub:"find", desc:{ja:`配列の中から<b>条件に合う最初の1個</b>を取り出します。「idが3の商品を探す」のような、データ処理の超定番。`,en:`Get the <b>first item matching a condition</b> from an array. A data-processing staple like "find the product with id 3".`},
   tags:["find","findIndex"], prep:[
     {s:{ja:'配列.find((x) => 条件)',en:'array.find((x) => condition)'},d:{ja:'条件に合う<b>最初の1個</b>を返す。無ければ undefined。',en:'Returns the <b>first match</b>. undefined if none.'}},
     {s:{ja:'配列.findIndex(…)',en:'array.findIndex(…)'},d:{ja:'合う要素の<b>番号</b>を返す。無ければ -1。',en:'Returns the matching item\'s <b>index</b>. -1 if none.'}}],
   variations:[{label:{ja:"探す",en:"Search"}, code:{ja:`const users = [
  { id: 1, name: "たろう" },
  { id: 2, name: "はなこ" },
  { id: 3, name: "じろう" }
];

const target = users.find((u) => u.id === 2);
console.log(target.name);          // はなこ

console.log(users.findIndex((u) => u.name === "じろう"));  // 2`,en:`const users = [
  { id: 1, name: "Taro" },
  { id: 2, name: "Hanako" },
  { id: 3, name: "Jiro" }
];

const target = users.find((u) => u.id === 2);
console.log(target.name);          // Hanako

console.log(users.findIndex((u) => u.name === "Jiro"));  // 2`}}]},

  {name:{ja:"全部？どれか？",en:"All? Any?"}, sub:"every / some", desc:{ja:`配列の中身が<b>「全部」条件を満たすか</b>（every）、<b>「1個でも」満たすか</b>（some）を true/false で返します。合格判定・在庫チェックなどに。`,en:`Return true/false for whether <b>"all" items meet a condition</b> (every) or <b>"at least one" does</b> (some). For pass checks, stock checks, etc.`},
   tags:["every","some"], prep:[
     {s:{ja:'配列.every((x) => 条件)',en:'array.every((x) => condition)'},d:{ja:'<b>全員</b>合格なら true。',en:'true if <b>all</b> pass.'}},
     {s:{ja:'配列.some((x) => 条件)',en:'array.some((x) => condition)'},d:{ja:'<b>1人でも</b>合格なら true。',en:'true if <b>even one</b> passes.'}}],
   variations:[{label:{ja:"判定する",en:"Judge"}, code:{ja:`const scores = [80, 92, 65];

console.log(scores.every((s) => s >= 60));  // true（全員60以上）
console.log(scores.every((s) => s >= 70));  // false（65がいる）
console.log(scores.some((s) => s >= 90));   // true（92がいる）`,en:`const scores = [80, 92, 65];

console.log(scores.every((s) => s >= 60));  // true (all >= 60)
console.log(scores.every((s) => s >= 70));  // false (65 is there)
console.log(scores.some((s) => s >= 90));   // true (92 is there)`}}]},

  {name:{ja:"クラス（設計図）",en:"Classes (blueprints)"}, sub:{ja:"class構文",en:"class syntax"}, desc:{ja:`同じ形のオブジェクトをたくさん作るための<b>設計図</b>。<b>new</b> で実物を量産できます。ゲームのキャラ・商品データなど「同じ型のもの」を扱う時の道具。`,en:`A <b>blueprint</b> for mass-producing objects of the same shape. Make instances with <b>new</b>. The tool for "same-type things" like game characters or product data.`},
   tags:["class","new","constructor"], prep:[
     {s:{ja:'class 名前 { … }',en:'class Name { … }'},d:{ja:'設計図を定義。名前は<b>大文字始まり</b>が慣習。',en:'Defines a blueprint. Names conventionally <b>start with a capital</b>.'}},
     {s:{ja:'constructor(引数)',en:'constructor(args)'},d:{ja:'<b>new した瞬間</b>に走る初期設定。this.名前 = 値 で覚えさせる。',en:'Setup that runs <b>the moment you new it</b>. Remember values with this.name = value.'}},
     {s:{ja:'new 名前(値)',en:'new Name(value)'},d:{ja:'設計図から<b>実物を1個作る</b>。',en:'<b>Makes one instance</b> from the blueprint.'}}],
   variations:[{label:{ja:"量産する",en:"Mass-produce"}, code:{ja:`class Hero {
  constructor(name, hp) {
    this.name = name;   // this = 「今作っている実物」
    this.hp = hp;
  }
  attack() {
    console.log(this.name + " の攻撃！");
  }
}

const a = new Hero("勇者", 100);
const b = new Hero("魔法使い", 60);
a.attack();                  // 勇者 の攻撃！
console.log(b.name, b.hp);   // 魔法使い 60`,en:`class Hero {
  constructor(name, hp) {
    this.name = name;   // this = "the instance being made"
    this.hp = hp;
  }
  attack() {
    console.log(this.name + "'s attack!");
  }
}

const a = new Hero("Warrior", 100);
const b = new Hero("Mage", 60);
a.attack();                  // Warrior's attack!
console.log(b.name, b.hp);   // Mage 60`}}]},

  {name:{ja:"キーと値のペア",en:"Key-value pairs"}, sub:"Map", desc:{ja:`<b>Map（マップ）</b>は「名前 → 値」のペアをたくさん覚えておける入れ物。オブジェクト {} と似ていますが、<b>個数が .size で一発で分かる</b>・<b>キーに文字以外（数字など）も使える</b>・入れた順番を覚える、といった強みがあります。在庫表や集計に便利。※ 結果は文字なので<b>ログ欄</b>に出ます。`,en:`A <b>Map</b> is a container that remembers many "name -> value" pairs. Similar to an object {}, but with strengths: <b>.size gives the count instantly</b>, <b>keys can be non-strings (numbers, etc.)</b>, and it keeps insertion order. Handy for stock tables and tallies. * Results are text, so they appear in the <b>log pane</b>.`},
   tags:["Map","set","get"], prep:[
     {s:'new Map()',d:{ja:'からっぽの Map を作る。',en:'Creates an empty Map.'}},
     {s:{ja:'map.set(キー, 値)',en:'map.set(key, value)'},d:{ja:'ペアを<b>登録</b>する。',en:'<b>Registers</b> a pair.'}},
     {s:{ja:'map.get(キー)',en:'map.get(key)'},d:{ja:'キーから<b>値を取り出す</b>。',en:'<b>Gets the value</b> by key.'}},
     {s:'map.size',d:{ja:'入っているペアの<b>個数</b>。',en:'The <b>count</b> of pairs.'}},
     {s:{ja:'for (const [キー, 値] of map)',en:'for (const [key, value] of map)'},d:{ja:'Map も配列と同じく <b>for...of で回せる</b>。1周ごとに <b>[キー, 値]</b> のペアが来る（分割代入で受け取る）。',en:'A Map can be looped with <b>for...of</b> like an array. Each pass yields a <b>[key, value]</b> pair (received via destructuring).'}}],
   variations:[{label:{ja:"在庫表を作る",en:"Build a stock table"}, code:{ja:`const stock = new Map();
stock.set("りんご", 5);
stock.set("メロン", 2);

console.log(stock.get("りんご"));   // 5
console.log(stock.size);           // 2（ペアの数）

// 全部を順番に取り出す（[キー, 値]で受け取る）
for (const [name, num] of stock) {
  console.log(name + ": " + num + "個");
}`,en:`const stock = new Map();
stock.set("apple", 5);
stock.set("melon", 2);

console.log(stock.get("apple"));   // 5
console.log(stock.size);           // 2 (number of pairs)

// take all in order (received as [key, value])
for (const [name, num] of stock) {
  console.log(name + ": " + num);
}`}}]},

  {name:{ja:"日付の差を求める",en:"Difference between dates"}, sub:{ja:"○日後・あと何日",en:"N days later / days left"}, desc:{ja:`2つの日付を<b>引き算</b>すると、その「差」がミリ秒で出ます。1日ぶんのミリ秒(86400000)で割れば<b>日数</b>に直せます。「イベントまであと何日」「経過日数」などの計算に。`,en:`<b>Subtract</b> two dates and the "difference" comes out in milliseconds. Divide by one day's milliseconds (86400000) to convert to <b>days</b>. For "days until an event", "days elapsed", and so on.`},
   tags:["Date",{ja:'日付の引き算',en:'date subtraction'}], prep:[
     {s:'new Date("2026-12-25")',d:{ja:'その日の<b>日付データ</b>を作る。',en:'Creates the <b>date data</b> for that day.'}},
     {s:{ja:'日付A - 日付B',en:'dateA - dateB'},d:{ja:'日付どうしを引き算すると<b>差がミリ秒</b>で出る。',en:'Subtracting dates gives the <b>difference in milliseconds</b>.'}},
     {s:'/ (1000 * 60 * 60 * 24)',d:{ja:'ミリ秒を<b>日数</b>に直す割り算（1日 = 86400000ミリ秒）。',en:'Division to convert milliseconds to <b>days</b> (1 day = 86400000 ms).'}}],
   variations:[
     {label:{ja:"あと何日？",en:"How many days left?"}, code:{ja:`const today = new Date("2026-07-06");
const xmas  = new Date("2026-12-25");

const diff = xmas - today;                  // 差（ミリ秒）
const days = diff / (1000 * 60 * 60 * 24);  // 日数に変換
console.log("クリスマスまで あと " + days + " 日");
// 結果はログ欄に出ます`,en:`const today = new Date("2026-07-06");
const xmas  = new Date("2026-12-25");

const diff = xmas - today;                  // difference (ms)
const days = diff / (1000 * 60 * 60 * 24);  // convert to days
console.log(days + " days until Christmas");
// The result appears in the log pane`}},
     {label:{ja:"経過日数",en:"Days elapsed"}, code:{ja:`const start = new Date("2026-01-01");
const now   = new Date("2026-07-06");
const days = (now - start) / (1000 * 60 * 60 * 24);
console.log("今年は " + days + " 日 経過しました");`,en:`const start = new Date("2026-01-01");
const now   = new Date("2026-07-06");
const days = (now - start) / (1000 * 60 * 60 * 24);
console.log(days + " days have elapsed this year");`}}]}
]},

/* ============ 応用編：組み合わせ・実用パーツ ============ */
{name:"応用", items:[
  {name:{ja:"ハンバーガーメニュー",en:"Hamburger menu"}, sub:{ja:"☰ 開閉メニュー",en:"☰ toggle menu"}, desc:{ja:`スマホでよく見る<b>☰ を押すと出るメニュー</b>。仕組みは超シンプルで、JSは<b>「open」というクラスを付け外しするだけ</b>。実際に開くアニメは<b>CSSが担当</b>します（JSとCSSの役割分担がポイント）。`,en:`The <b>menu that appears when you press ☰</b>, common on mobile. The mechanism is very simple: JS <b>just adds/removes an "open" class</b>. The actual opening animation is <b>handled by CSS</b> (the JS/CSS division of labor is the point).`},
   tags:["classList.toggle","max-height","transition"], prep:[
     {s:'classList.toggle("open")',d:{ja:'メニューに「open」を<b>付いてたら外す・無ければ付ける</b>。これで開閉が切り替わる。',en:'<b>Removes "open" if present, adds it if not</b> on the menu. This toggles open/closed.'}},
     {s:{ja:'max-height (CSS側)',en:'max-height (in CSS)'},d:{ja:'高さを 0 ↔ 広げる、で<b>スルスル開閉</b>して見せる仕掛け。',en:'The trick that makes it <b>slide open/closed</b> by expanding height between 0 and a value.'}},
     {s:{ja:'transition (CSS側)',en:'transition (in CSS)'},d:{ja:'高さの変化を<b>なめらか</b>にする（これが無いとパッと開く）。',en:'Makes the height change <b>smooth</b> (without it, it snaps open).'}}],
   html:{ja:`<!-- ① 開くための ☰ ボタン。id="btn" は JS でつかまえる名札 -->
<button id="btn" class="hbtn">☰ メニュー</button>

<!-- ② メニュー本体。id="menu" を JS でつかまえ、open クラスを付け外しする -->
<nav id="menu" class="menu">
  <!-- ③ 中身のリンク。実サイトでは href に行き先ページを書く -->
  <a href="#">ホーム</a>
  <a href="#">サービス</a>
  <a href="#">お問い合わせ</a>
</nav>`,en:`<!-- (1) the ☰ button to open. id="btn" is the tag JS catches -->
<button id="btn" class="hbtn">☰ Menu</button>

<!-- (2) the menu itself. JS catches id="menu" and toggles the open class -->
<nav id="menu" class="menu">
  <!-- (3) the links inside. On a real site, put destination pages in href -->
  <a href="#">Home</a>
  <a href="#">Services</a>
  <a href="#">Contact</a>
</nav>`},
   css:{ja:`body {
  padding: 24px;
  font-family: sans-serif;
}

/* ☰ ボタンの見た目 */
.hbtn {
  font-size: 18px;
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  background: #8b5cf6;
  color: #fff;
  cursor: pointer;
}

/* メニュー本体。ふだんは max-height:0 で「たたまれて」見えない */
.menu {
  list-style: none;
  margin: 12px 0 0;
  padding: 0;
  display: grid;
  gap: 6px;
  overflow: hidden;               /* はみ出しを隠す＝たたむのに必須 */
  max-height: 0;                  /* 高さ0＝閉じている状態 */
  transition: max-height .35s ease; /* 高さ変化をなめらかに */
}

/* open が付いたら高さを広げる＝開く */
.menu.open {
  max-height: 240px;
}

/* メニューの中の各リンク */
.menu a {
  display: block;
  padding: 11px 14px;
  background: #f2eefe;
  color: #333;
  border-radius: 8px;
  text-decoration: none;          /* リンクの下線を消す */
}`,en:`body {
  padding: 24px;
  font-family: sans-serif;
}

/* the ☰ button's look */
.hbtn {
  font-size: 18px;
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  background: #8b5cf6;
  color: #fff;
  cursor: pointer;
}

/* the menu itself. Normally max-height:0 so it's "folded" and hidden */
.menu {
  list-style: none;
  margin: 12px 0 0;
  padding: 0;
  display: grid;
  gap: 6px;
  overflow: hidden;               /* hide overflow = essential for folding */
  max-height: 0;                  /* height 0 = closed state */
  transition: max-height .35s ease; /* smooth height change */
}

/* when open is added, expand the height = open */
.menu.open {
  max-height: 240px;
}

/* each link inside the menu */
.menu a {
  display: block;
  padding: 11px 14px;
  background: #f2eefe;
  color: #333;
  border-radius: 8px;
  text-decoration: none;          /* remove the link underline */
}`},
   variations:[{label:{ja:"開閉させる",en:"Toggle it"}, code:{ja:`// ① ☰ ボタンをつかまえる
const btn = document.querySelector("#btn");

// ② メニュー本体をつかまえる
const menu = document.querySelector("#menu");

// ③ ボタンが押されるたびに、中の処理が動く
btn.addEventListener("click", () => {
  // ④ open クラスを付けたり外したり（付く=開く / 外れる=閉じる）
  //    見た目の開閉アニメは CSS の .menu.open が担当している
  menu.classList.toggle("open");
});

// プレビューの ☰ ボタンを押してね`,en:`// (1) catch the ☰ button
const btn = document.querySelector("#btn");

// (2) catch the menu itself
const menu = document.querySelector("#menu");

// (3) the body runs every time the button is pressed
btn.addEventListener("click", () => {
  // (4) add/remove the open class (added = open / removed = closed)
  //     the CSS .menu.open handles the visual open/close animation
  menu.classList.toggle("open");
});

// Press the ☰ button in the preview`}}]},

  {name:{ja:"モーダル窓",en:"Modal window"}, sub:{ja:"ポップアップ",en:"Popup"}, desc:{ja:`ボタンで<b>ふわっと出る窓</b>を開き、閉じるボタンや背景クリックで閉じる。<b>overlay に showクラス</b>を付け外し。`,en:`A button opens a <b>window that fades in</b>; a close button or background click closes it. Toggle a <b>show class on the overlay</b>.`},
   tags:["classList.add","classList.remove","position:fixed"], prep:[{s:'classList.add("show")',d:{ja:'showを付けて<b>表示</b>。',en:'Add show to <b>display</b>.'}},{s:'classList.remove("show")',d:{ja:'外して<b>非表示</b>。',en:'Remove it to <b>hide</b>.'}}],
   html:{ja:`<!-- ① 窓を開くきっかけのボタン -->
<button id="open" class="mbtn">窓を開く</button>

<!-- ② 画面全体をおおう黒い幕(overlay)。その中に白い窓(modal)を置く -->
<div id="overlay" class="overlay">
  <div class="modal">
    <p>これはモーダル窓です</p>
    <!-- ③ 閉じるボタン -->
    <button id="close" class="mbtn">閉じる</button>
  </div>
</div>`,en:`<!-- (1) the button that opens the window -->
<button id="open" class="mbtn">Open window</button>

<!-- (2) a dark overlay covering the whole screen. Put the white modal inside -->
<div id="overlay" class="overlay">
  <div class="modal">
    <p>This is a modal window</p>
    <!-- (3) the close button -->
    <button id="close" class="mbtn">Close</button>
  </div>
</div>`},
   css:{ja:`body {
  padding: 24px;
  font-family: sans-serif;
}

.mbtn {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background: #8b5cf6;
  color: #fff;
  cursor: pointer;
}

/* 黒い幕。ふだんは display:none で隠れている */
.overlay {
  position: fixed;        /* 画面に貼り付けて動かさない */
  inset: 0;               /* 上下左右すべて0＝画面いっぱい */
  background: rgba(0,0,0,.5); /* 半透明の黒 */
  display: none;          /* ふだんは非表示 */
  place-items: center;    /* 中の窓を中央に */
  opacity: 0;
  transition: opacity .25s;
}

/* show が付いたら表示する */
.overlay.show {
  display: grid;
  opacity: 1;
}

/* 白い窓本体 */
.modal {
  background: #fff;
  padding: 26px;
  border-radius: 14px;
  display: grid;
  gap: 14px;
}`,en:`body {
  padding: 24px;
  font-family: sans-serif;
}

.mbtn {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background: #8b5cf6;
  color: #fff;
  cursor: pointer;
}

/* the dark overlay. Normally display:none so it's hidden */
.overlay {
  position: fixed;        /* pinned to the screen, doesn't move */
  inset: 0;               /* all sides 0 = full screen */
  background: rgba(0,0,0,.5); /* semi-transparent black */
  display: none;          /* hidden normally */
  place-items: center;    /* center the inner window */
  opacity: 0;
  transition: opacity .25s;
}

/* show when the show class is added */
.overlay.show {
  display: grid;
  opacity: 1;
}

/* the white window itself */
.modal {
  background: #fff;
  padding: 26px;
  border-radius: 14px;
  display: grid;
  gap: 14px;
}`},
   variations:[{label:{ja:"開く/閉じる",en:"Open / close"}, code:{ja:`// 黒い幕をつかまえておく
const overlay = document.querySelector("#overlay");

// 「窓を開く」ボタン → show を付けて表示
document.querySelector("#open").addEventListener("click", () => {
  overlay.classList.add("show");
});

// 「閉じる」ボタン → show を外して非表示
document.querySelector("#close").addEventListener("click", () => {
  overlay.classList.remove("show");
});
// プレビューの「窓を開く」を押してね`,en:`// catch the dark overlay
const overlay = document.querySelector("#overlay");

// "Open window" button -> add show to display
document.querySelector("#open").addEventListener("click", () => {
  overlay.classList.add("show");
});

// "Close" button -> remove show to hide
document.querySelector("#close").addEventListener("click", () => {
  overlay.classList.remove("show");
});
// Press "Open window" in the preview`}}]},

  {name:{ja:"タブ切り替え",en:"Tab switching"}, sub:{ja:"タブUI",en:"Tab UI"}, desc:{ja:`タブを押すと<b>対応する中身だけ表示</b>。実サイトで多用。<br><b>仕組み</b>：<b>①全部の active を外す→②押したものだけ付ける</b>の2手が定番。どのタブがどの中身かは <b>data-属性</b>（data-i）で結びつけます。`,en:`Pressing a tab <b>shows only the matching content</b>. Heavily used on real sites.<br><b>Mechanism</b>: the staple two steps are <b>(1) remove active from all -> (2) add it to only the pressed one</b>. Which tab maps to which content is linked with a <b>data attribute</b> (data-i).`},
   tags:["querySelectorAll","dataset","classList"], prep:[{s:'querySelectorAll',d:{ja:'条件に合う要素を<b>ぜんぶ</b>取る。',en:'Gets <b>all</b> matching elements.'}},{s:'forEach',d:{ja:'全部に処理を付ける。',en:'Attaches handling to all of them.'}}],
   html:{ja:`<!-- ① タブのボタン3つ。data-i は「何番目の中身か」を覚えさせる目印 -->
<div class="tabs">
  <button class="tab active" data-i="0">タブA</button>
  <button class="tab" data-i="1">タブB</button>
  <button class="tab" data-i="2">タブC</button>
</div>

<!-- ② 中身3つ。active が付いたものだけ表示される -->
<div class="panel active">中身A</div>
<div class="panel">中身B</div>
<div class="panel">中身C</div>`,en:`<!-- (1) three tab buttons. data-i marks "which content index" -->
<div class="tabs">
  <button class="tab active" data-i="0">Tab A</button>
  <button class="tab" data-i="1">Tab B</button>
  <button class="tab" data-i="2">Tab C</button>
</div>

<!-- (2) three contents. Only the one with active shows -->
<div class="panel active">Content A</div>
<div class="panel">Content B</div>
<div class="panel">Content C</div>`},
   css:{ja:`body {
  padding: 24px;
  font-family: sans-serif;
}

.tab {
  padding: 8px 16px;
  border: none;
  background: #eee;
  cursor: pointer;
}

/* 選ばれているタブの見た目 */
.tab.active {
  background: #8b5cf6;
  color: #fff;
}

/* 中身はふだん非表示 */
.panel {
  display: none;
  padding: 20px;
  background: #f6f3ff;
  margin-top: 8px;
  border-radius: 8px;
}

/* active が付いた中身だけ表示 */
.panel.active {
  display: block;
}`,en:`body {
  padding: 24px;
  font-family: sans-serif;
}

.tab {
  padding: 8px 16px;
  border: none;
  background: #eee;
  cursor: pointer;
}

/* the look of the selected tab */
.tab.active {
  background: #8b5cf6;
  color: #fff;
}

/* content is hidden normally */
.panel {
  display: none;
  padding: 20px;
  background: #f6f3ff;
  margin-top: 8px;
  border-radius: 8px;
}

/* only content with active shows */
.panel.active {
  display: block;
}`},
   variations:[{label:{ja:"切り替える",en:"Switch"}, code:{ja:`// タブ全部・中身全部をまとめてつかまえる（querySelectorAll＝全部）
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

// タブ1つ1つに、クリックの処理を付ける
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // ① まず全部の active を外す（＝一旦すべて選択解除）
    tabs.forEach((t) => t.classList.remove("active"));
    panels.forEach((p) => p.classList.remove("active"));
    // ② 押されたタブと、対応する中身にだけ active を付ける
    tab.classList.add("active");
    // HTMLの data-i="0" は、JSでは dataset.i で取り出せる（頭の data- は自動で外れる）
    panels[tab.dataset.i].classList.add("active");
  });
});`,en:`// catch all tabs and all contents at once (querySelectorAll = all)
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

// attach a click handler to each tab
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // (1) first remove active from everything (deselect all)
    tabs.forEach((t) => t.classList.remove("active"));
    panels.forEach((p) => p.classList.remove("active"));
    // (2) add active only to the pressed tab and its content
    tab.classList.add("active");
    // HTML data-i="0" is read in JS as dataset.i (the data- prefix drops automatically)
    panels[tab.dataset.i].classList.add("active");
  });
});`}}]},

  {name:{ja:"アコーディオン",en:"Accordion"}, sub:{ja:"開閉FAQ",en:"Collapsible FAQ"}, desc:{ja:`質問を押すと<b>答えがスッと開く</b>FAQの形。<br><b>仕組み</b>：質問の<b>すぐ下</b>に答えを置き、JSは <b>nextElementSibling</b>（すぐ次の要素）に開くクラスを付けるだけ。高さのアニメは <b>CSS(max-height)</b> が担当します。`,en:`An FAQ layout where pressing a question <b>slides the answer open</b>.<br><b>Mechanism</b>: place the answer <b>right below</b> the question; JS just adds an open class to the <b>nextElementSibling</b> (the immediate next element). The height animation is <b>handled by CSS (max-height)</b>.`},
   tags:["classList.toggle","nextElementSibling"], prep:[{s:'nextElementSibling',d:{ja:'すぐ次の要素（＝答え）。',en:'The immediate next element (= the answer).'}}],
   html:{ja:`<!-- 質問(.q)のすぐ下に答え(.a)を置くのがポイント。JSは「押した質問の次の要素」を開く -->
<div class="q">Q. JSって難しい？</div>
<div class="a">A. 少しずつやれば大丈夫！</div>
<div class="q">Q. 何から始める？</div>
<div class="a">A. この道場で動きを試そう。</div>`,en:`<!-- Key: put the answer (.a) right below the question (.q). JS opens "the next element after the pressed question" -->
<div class="q">Q. Is JS hard?</div>
<div class="a">A. Take it step by step and you'll be fine!</div>
<div class="q">Q. Where do I start?</div>
<div class="a">A. Try the effects in this dojo.</div>`},
   css:{ja:`body {
  padding: 24px;
  font-family: sans-serif;
}

/* 質問（押せる見出し） */
.q {
  padding: 12px;
  background: #8b5cf6;
  color: #fff;
  cursor: pointer;
  margin-top: 6px;
  border-radius: 6px;
}

/* 答え。ふだんは max-height:0 でたたまれている */
.a {
  max-height: 0;
  overflow: hidden;
  transition: max-height .3s;
  background: #f6f3ff;
  border-radius: 6px;
}

/* open が付いたら開く */
.a.open {
  max-height: 80px;
  padding: 12px;
}`,en:`body {
  padding: 24px;
  font-family: sans-serif;
}

/* the question (a clickable heading) */
.q {
  padding: 12px;
  background: #8b5cf6;
  color: #fff;
  cursor: pointer;
  margin-top: 6px;
  border-radius: 6px;
}

/* the answer. Normally folded with max-height:0 */
.a {
  max-height: 0;
  overflow: hidden;
  transition: max-height .3s;
  background: #f6f3ff;
  border-radius: 6px;
}

/* opens when open is added */
.a.open {
  max-height: 80px;
  padding: 12px;
}`},
   variations:[{label:{ja:"開閉する",en:"Open/close"}, code:{ja:`// 質問(.q)を全部つかまえ、1つずつクリック処理を付ける
document.querySelectorAll(".q").forEach((q) => {
  q.addEventListener("click", () => {
    // nextElementSibling = すぐ次の要素（＝この質問の答え .a）
    q.nextElementSibling.classList.toggle("open");
  });
});
// プレビューの質問を押してね`,en:`// catch all questions (.q) and attach a click handler to each
document.querySelectorAll(".q").forEach((q) => {
  q.addEventListener("click", () => {
    // nextElementSibling = the next element (= this question's answer .a)
    q.nextElementSibling.classList.toggle("open");
  });
});
// Press a question in the preview`}}]},

  {name:{ja:"トグルスイッチ",en:"Toggle switch"}, sub:"ON / OFF", desc:{ja:`押すたび<b>ON/OFFが切り替わる</b>スイッチ。<br><b>仕組み</b>：JSは on を付け外しするだけ。丸の移動・色は <b>CSS</b> が担当。今ONかは <b>contains("on")</b> で調べます。`,en:`A switch that <b>flips ON/OFF</b> each press.<br><b>Mechanism</b>: JS just toggles on. The knob's movement and color are <b>handled by CSS</b>. Check whether it's ON with <b>contains("on")</b>.`},
   tags:["classList.toggle","classList.contains"], prep:[{s:'classList.contains("on")',d:{ja:'onが付いてるか調べる。',en:'Checks whether on is applied.'}}],
   html:{ja:`<!-- switch=土台、knob=中で動く丸ボタン。JSは on クラスを付け外しするだけ -->
<div id="sw" class="switch"><div class="knob"></div></div>
<p id="state">OFF</p>`,en:`<!-- switch = the base, knob = the round button that slides. JS just toggles the on class -->
<div id="sw" class="switch"><div class="knob"></div></div>
<p id="state">OFF</p>`},
   css:{ja:`body {
  padding: 24px;
  font-family: sans-serif;
  text-align: center;
}

/* スイッチの土台（横長のカプセル） */
.switch {
  width: 64px;
  height: 32px;
  background: #ccc;
  border-radius: 999px;   /* 大きい値で完全な丸端に */
  cursor: pointer;
  padding: 3px;
  transition: .2s;
  margin: 0 auto;         /* 中央ぞろえ */
}

/* ON のとき土台を緑に */
.switch.on {
  background: #6CE0C0;
}

/* 中で動く丸ボタン */
.knob {
  width: 26px;
  height: 26px;
  background: #fff;
  border-radius: 50%;
  transition: .2s;
}

/* ON のとき丸を右へスライド */
.switch.on .knob {
  transform: translateX(32px);
}`,en:`body {
  padding: 24px;
  font-family: sans-serif;
  text-align: center;
}

/* the switch base (a wide capsule) */
.switch {
  width: 64px;
  height: 32px;
  background: #ccc;
  border-radius: 999px;   /* a large value for fully round ends */
  cursor: pointer;
  padding: 3px;
  transition: .2s;
  margin: 0 auto;         /* center it */
}

/* base turns green when ON */
.switch.on {
  background: #6CE0C0;
}

/* the sliding round knob */
.knob {
  width: 26px;
  height: 26px;
  background: #fff;
  border-radius: 50%;
  transition: .2s;
}

/* slide the knob right when ON */
.switch.on .knob {
  transform: translateX(32px);
}`},
   variations:[{label:{ja:"切り替える",en:"Toggle"}, code:{ja:`const sw = document.querySelector("#sw");
const state = document.querySelector("#state");

sw.addEventListener("click", () => {
  sw.classList.toggle("on");   // on を付け外し（見た目はCSSが担当）
  // contains("on") = on が付いているか調べる（true/false）
  // ? : は「もし〜なら〜、違えば〜」の短い書き方
  state.textContent = sw.classList.contains("on") ? "ON" : "OFF";
});`,en:`const sw = document.querySelector("#sw");
const state = document.querySelector("#state");

sw.addEventListener("click", () => {
  sw.classList.toggle("on");   // toggle on (CSS handles the look)
  // contains("on") = check whether on is applied (true/false)
  // ? : is the short form for "if ~ then ~, else ~"
  state.textContent = sw.classList.contains("on") ? "ON" : "OFF";
});`}}]},

  {name:{ja:"カウントダウン",en:"Countdown"}, sub:{ja:"タイマー",en:"Timer"}, desc:{ja:`<b>数字が1秒ずつ減って</b>0で合図。setInterval＋clearInterval。<br><b>仕組み</b>：setInterval で1秒ごとに減らし、0以下になったら <b>clearInterval</b> で停止（止め忘れ厳禁）。`,en:`<b>A number drops by 1 each second</b> and signals at 0. setInterval + clearInterval.<br><b>Mechanism</b>: decrease once per second with setInterval, and stop with <b>clearInterval</b> at 0 or below (never forget to stop it).`},
   tags:["setInterval","clearInterval"], prep:[{s:'clearInterval(id)',d:{ja:'くり返しを<b>止める</b>。',en:'<b>Stops</b> the repetition.'}}],
   variations:[{label:{ja:"5秒カウントダウン",en:"5-second countdown"}, code:{ja:`const el = document.querySelector("#test");
let t = 5;
el.textContent = t;
const id = setInterval(() => {
  t = t - 1;
  el.textContent = t;
  if (t <= 0) {
    clearInterval(id);
    el.textContent = "終了！";
  }
}, 1000);`,en:`const el = document.querySelector("#test");
let t = 5;
el.textContent = t;
const id = setInterval(() => {
  t = t - 1;
  el.textContent = t;
  if (t <= 0) {
    clearInterval(id);
    el.textContent = "Done!";
  }
}, 1000);`}}]},

  {name:{ja:"タイピング風",en:"Typewriter effect"}, sub:{ja:"1文字ずつ",en:"One char at a time"}, desc:{ja:`文字を<b>1文字ずつ順番に</b>出すタイプライター演出。<br><b>仕組み</b>：<b>text[i]</b> で i 番目の1文字を取り、<b>+=</b> で継ぎ足す。最後まで行ったら clearInterval で停止。`,en:`A typewriter effect that reveals text <b>one character at a time in order</b>.<br><b>Mechanism</b>: take the i-th character with <b>text[i]</b> and append with <b>+=</b>. Stop with clearInterval once you reach the end.`},
   tags:["setInterval",{ja:"文字列[i]",en:"string[i]"}], prep:[{s:'text[i]',d:{ja:'i番目の1文字。',en:'The i-th character.'}},{s:'+=',d:{ja:'後ろに足していく。',en:'Appends to the end.'}}],
   variations:[{label:{ja:"タイプする",en:"Type it out"}, code:{ja:`const el = document.querySelector("#test");
const text = "ようこそJS道場へ！";
let i = 0;
el.textContent = "";
const id = setInterval(() => {
  el.textContent += text[i];
  i = i + 1;
  if (i >= text.length) clearInterval(id);
}, 150);`,en:`const el = document.querySelector("#test");
const text = "Welcome to the JS dojo!";
let i = 0;
el.textContent = "";
const id = setInterval(() => {
  el.textContent += text[i];
  i = i + 1;
  if (i >= text.length) clearInterval(id);
}, 150);`}}]},

  {name:{ja:"いいねボタン",en:"Like button"}, sub:{ja:"❤ カウント",en:"❤ count"}, desc:{ja:`押すと<b>ハートが増えてポップ</b>。カウント＋アニメの合わせ技。<br><b>仕組み</b>：数を変数で数えて表示を更新し、<b>animate</b> でポップ演出。数字だけを span で分けておくと更新しやすい。`,en:`Press to <b>increase the heart count with a pop</b>. A combo of counting + animation.<br><b>Mechanism</b>: count with a variable, update the display, and pop with <b>animate</b>. Separating just the number into a span makes updates easy.`},
   tags:["textContent","animate"], prep:[{s:'element.animate',d:{ja:'ポップのアニメ。',en:'The pop animation.'}}],
   html:{ja:`<!-- span id="n" は数字だけを入れる場所。JSがここの数字を書き換える -->
<button id="like" class="like">❤ <span id="n">0</span></button>`,en:`<!-- span id="n" holds just the number. JS rewrites the number here -->
<button id="like" class="like">❤ <span id="n">0</span></button>`},
   css:`body {
  display: grid;
  place-items: center;
  min-height: 74vh;
}

.like {
  font-size: 22px;
  padding: 12px 22px;
  border: none;
  border-radius: 999px;
  background: #ff4d6d;
  color: #fff;
  cursor: pointer;
}`,
   variations:[{label:{ja:"いいねする",en:"Like it"}, code:{ja:`const like = document.querySelector("#like");
const n = document.querySelector("#n");   // 数字だけの部分
let count = 0;

like.addEventListener("click", () => {
  count = count + 1;      // 1増やす
  n.textContent = count;  // 画面の数字を更新

  // animate = ポップの動き。[通常→少し大きく→通常] を250ミリ秒で
  like.animate(
    [{ transform: "scale(1)" }, { transform: "scale(1.3)" }, { transform: "scale(1)" }],
    { duration: 250 }
  );
});`,en:`const like = document.querySelector("#like");
const n = document.querySelector("#n");   // the number-only part
let count = 0;

like.addEventListener("click", () => {
  count = count + 1;      // add 1
  n.textContent = count;  // update the on-screen number

  // animate = the pop. [normal -> a bit bigger -> normal] over 250ms
  like.animate(
    [{ transform: "scale(1)" }, { transform: "scale(1.3)" }, { transform: "scale(1)" }],
    { duration: 250 }
  );
});`}}]},

  {name:{ja:"ダークモード切替",en:"Dark mode toggle"}, sub:{ja:"明↔暗",en:"light <-> dark"}, desc:{ja:`ボタンで<b>ページ全体を明↔暗</b>に。bodyにクラスを付けるだけ。<br><b>仕組み</b>：<b>body</b> に dark を付け外しするだけ。暗い配色は <b>CSS の body.dark</b> に用意しておく（役割分担）。`,en:`A button flips <b>the whole page light <-> dark</b>. Just add a class to body.<br><b>Mechanism</b>: just toggle dark on <b>body</b>. Prepare the dark palette in <b>CSS's body.dark</b> (division of labor).`},
   tags:["classList.toggle","document.body"], prep:[{s:'document.body.classList',d:{ja:'ページ全体(body)のクラス。',en:'The class of the whole page (body).'}}],
   html:{ja:`<button id="toggle" class="tg">🌙 切り替え</button>
<p>ここが明るくなったり暗くなったり</p>`,en:`<button id="toggle" class="tg">🌙 Toggle</button>
<p>This gets lighter and darker</p>`},
   css:{ja:`body {
  padding: 24px;
  font-family: sans-serif;
  transition: .3s;        /* 明↔暗の変化をなめらかに */
}

/* body に dark が付いたときの見た目（暗い配色） */
body.dark {
  background: #1e1e1e;
  color: #eee;
}

.tg {
  padding: 10px 18px;
  border: none;
  border-radius: 8px;
  background: #8b5cf6;
  color: #fff;
  cursor: pointer;
}`,en:`body {
  padding: 24px;
  font-family: sans-serif;
  transition: .3s;        /* smooth light <-> dark change */
}

/* the look when dark is added to body (dark palette) */
body.dark {
  background: #1e1e1e;
  color: #eee;
}

.tg {
  padding: 10px 18px;
  border: none;
  border-radius: 8px;
  background: #8b5cf6;
  color: #fff;
  cursor: pointer;
}`},
   variations:[{label:{ja:"切り替える",en:"Toggle"}, code:{ja:`const btn = document.querySelector("#toggle");

btn.addEventListener("click", () => {
  // ページ全体(body)に dark クラスを付け外し
  // dark が付くと CSS の body.dark が効いて暗くなる
  document.body.classList.toggle("dark");
});
// プレビューのボタンで明暗が切り替わる`,en:`const btn = document.querySelector("#toggle");

btn.addEventListener("click", () => {
  // toggle the dark class on the whole page (body)
  // when dark is on, CSS body.dark kicks in and it goes dark
  document.body.classList.toggle("dark");
});
// The preview button toggles light/dark`}}]},

  {name:{ja:"パスワード表示切替",en:"Show/hide password"}, sub:{ja:"見える👁/隠す",en:"reveal 👁 / hide"}, desc:{ja:`パスワード欄の<b>●●●を一時的に見える化</b>する定番。input の <b>type</b> を "password"↔"text" で切り替えます。`,en:`The staple of <b>temporarily revealing the dots</b> in a password field. Toggle the input's <b>type</b> between "password" and "text".`},
   tags:["type","password","text"], prep:[
     {s:'input.type = "text"',d:{ja:'中身を<b>そのまま見せる</b>。',en:'<b>Shows</b> the contents as-is.'}},
     {s:'input.type = "password"',d:{ja:'中身を<b>●で隠す</b>。',en:'<b>Hides</b> the contents with dots.'}}],
   html:{ja:`<input id="pw" type="password" value="himitsu123">
<button id="btn">👁 表示</button>`,en:`<input id="pw" type="password" value="secret123">
<button id="btn">👁 Show</button>`},
   css:`body {
  padding: 24px;
  font-family: sans-serif;
}

input {
  padding: 8px 12px;
  font-size: 16px;
}

button {
  padding: 8px 14px;
  border: none;
  border-radius: 8px;
  background: #8b5cf6;
  color: #fff;
  cursor: pointer;
}`,
   variations:[{label:{ja:"見る/隠す",en:"Show/hide"}, code:{ja:`const pw = document.querySelector("#pw");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  // いま隠れている(password)なら見せる、そうでなければ隠す
  if (pw.type === "password") {
    pw.type = "text";      // 見える
    btn.textContent = "🙈 隠す";
  } else {
    pw.type = "password";  // 隠す
    btn.textContent = "👁 表示";
  }
});`,en:`const pw = document.querySelector("#pw");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  // if hidden (password) now, reveal; otherwise hide
  if (pw.type === "password") {
    pw.type = "text";      // visible
    btn.textContent = "🙈 Hide";
  } else {
    pw.type = "password";  // hidden
    btn.textContent = "👁 Show";
  }
});`}}]},

  {name:{ja:"スムーススクロール",en:"Smooth scroll"}, sub:{ja:"すーっと移動",en:"Glide to a spot"}, desc:{ja:`ボタンを押すと<b>目的の場所までなめらかに移動</b>。ページ内リンクの定番演出。<b>scrollIntoView</b>を使います。`,en:`A button <b>glides smoothly to a target spot</b>. The staple effect for in-page links. Uses <b>scrollIntoView</b>.`},
   tags:["scrollIntoView","behavior:smooth"], prep:[
     {s:'element.scrollIntoView({ behavior:"smooth" })',d:{ja:'その要素が見える位置まで<b>ぬるっと</b>移動。',en:'<b>Glides</b> to where the element is visible.'}}],
   html:{ja:`<button id="btn">下までスクロール</button>
<div style="height:400px"></div>
<p id="goal">🎯 ここがゴール！</p>`,en:`<button id="btn">Scroll to bottom</button>
<div style="height:400px"></div>
<p id="goal">🎯 This is the goal!</p>`},
   css:`body {
  padding: 24px;
  font-family: sans-serif;
}

button {
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  background: #8b5cf6;
  color: #fff;
  cursor: pointer;
}

#goal {
  font-size: 22px;
  color: #8b5cf6;
}`,
   variations:[{label:{ja:"ゴールへ移動",en:"Move to goal"}, code:{ja:`const btn = document.querySelector("#btn");
const goal = document.querySelector("#goal");

btn.addEventListener("click", () => {
  // goal の位置まで、なめらかにスクロール
  goal.scrollIntoView({ behavior: "smooth" });
});
// プレビュー内でボタンを押すと下まで移動`,en:`const btn = document.querySelector("#btn");
const goal = document.querySelector("#goal");

btn.addEventListener("click", () => {
  // smoothly scroll to the goal's position
  goal.scrollIntoView({ behavior: "smooth" });
});
// Pressing the button moves down inside the preview`}}]},

  {name:{ja:"入力チェック",en:"Input validation"}, sub:{ja:"空欄なら警告",en:"warn if empty"}, desc:{ja:`送信前に<b>空欄でないか確かめる</b>、フォーム検証のいちばん基本。<b>.trim()</b>で空白だけの入力もはじきます。`,en:`<b>Check it isn't empty</b> before submitting — the most basic form validation. <b>.trim()</b> also rejects whitespace-only input.`},
   tags:["value",".trim()","if"], prep:[
     {s:'input.value.trim()',d:{ja:'前後の空白を取り除いた中身。これが空 "" なら未入力。',en:'The contents with leading/trailing spaces removed. If this is empty "", it\'s not filled in.'}},
     {s:{ja:'if (中身 === "")',en:'if (content === "")'},d:{ja:'「中身が<b>空っぽの文字なら</b>」という判定。',en:'A check for "if the content is an <b>empty string</b>".'}}],
   html:{ja:`<input id="name" placeholder="名前を入力">
<button id="btn">送信</button>
<p id="msg"></p>`,en:`<input id="name" placeholder="enter your name">
<button id="btn">Submit</button>
<p id="msg"></p>`},
   css:`body {
  padding: 24px;
  font-family: sans-serif;
}

input {
  padding: 8px 12px;
  font-size: 16px;
}

button {
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  background: #8b5cf6;
  color: #fff;
  cursor: pointer;
}

.ng { color: #e5484d; }
.ok { color: #2a9d5c; }`,
   variations:[{label:{ja:"チェックする",en:"Validate"}, code:{ja:`const name = document.querySelector("#name");
const btn = document.querySelector("#btn");
const msg = document.querySelector("#msg");

btn.addEventListener("click", () => {
  // trim() で前後の空白を消してから、中身が空か調べる
  if (name.value.trim() === "") {
    msg.textContent = "⚠ 名前を入力してください";
    msg.className = "ng";   // className = クラスをまるごと設定（classList は付け外し）
  } else {
    msg.textContent = "✓ " + name.value + " さん、送信OK！";
    msg.className = "ok";
  }
});`,en:`const name = document.querySelector("#name");
const btn = document.querySelector("#btn");
const msg = document.querySelector("#msg");

btn.addEventListener("click", () => {
  // strip spaces with trim(), then check if empty
  if (name.value.trim() === "") {
    msg.textContent = "⚠ Please enter your name";
    msg.className = "ng";   // className = set the whole class (classList toggles)
  } else {
    msg.textContent = "✓ " + name.value + ", submit OK!";
    msg.className = "ok";
  }
});`}}]},

  {name:{ja:"星評価",en:"Star rating"}, sub:{ja:"★ レビュー",en:"★ review"}, desc:{ja:`星を<b>クリックした数だけ光らせる</b>レビューUI。<b>querySelectorAll＋forEach</b>の実用例です。<br><b>仕組み</b>：各星に <b>data-n</b> で番号を持たせ、押された番号<b>以下</b>の星に on を付ける（<b>toggle(class, 条件)</b> の第2引数で一括判定）。`,en:`A review UI that <b>lights up as many stars as you click</b>. A practical example of <b>querySelectorAll + forEach</b>.<br><b>Mechanism</b>: give each star a number with <b>data-n</b>, and add on to stars with a number <b>at or below</b> the pressed one (using the second argument of <b>toggle(class, condition)</b> to decide in bulk).`},
   tags:["querySelectorAll","forEach","dataset"], prep:[
     {s:'star.dataset.n',d:{ja:'その星が<b>何個目</b>か（data-n の番号）。',en:'<b>Which position</b> the star is (the data-n number).'}},
     {s:'Number("3")',d:{ja:'文字の"3"を<b>数の3</b>に変える。比べる前に必要。',en:'Turns text "3" into the <b>number 3</b>. Needed before comparing.'}}],
   html:{ja:`<!-- 星5つ。data-n で「何個目の星か」を覚えさせる -->
<div id="stars">
  <span class="star" data-n="1">★</span>
  <span class="star" data-n="2">★</span>
  <span class="star" data-n="3">★</span>
  <span class="star" data-n="4">★</span>
  <span class="star" data-n="5">★</span>
</div>`,en:`<!-- 5 stars. data-n remembers "which star this is" -->
<div id="stars">
  <span class="star" data-n="1">★</span>
  <span class="star" data-n="2">★</span>
  <span class="star" data-n="3">★</span>
  <span class="star" data-n="4">★</span>
  <span class="star" data-n="5">★</span>
</div>`},
   css:{ja:`body {
  display: grid;
  place-items: center;
  min-height: 74vh;
}

.star {
  font-size: 40px;
  color: #ccc;           /* ふだんは灰色 */
  cursor: pointer;
  transition: .1s;
}

/* on が付いた星だけ金色に */
.star.on {
  color: #F5C24B;
}`,en:`body {
  display: grid;
  place-items: center;
  min-height: 74vh;
}

.star {
  font-size: 40px;
  color: #ccc;           /* gray normally */
  cursor: pointer;
  transition: .1s;
}

/* only stars with on turn gold */
.star.on {
  color: #F5C24B;
}`},
   variations:[{label:{ja:"星をつける",en:"Rate with stars"}, code:{ja:`const stars = document.querySelectorAll(".star");

stars.forEach((star) => {
  star.addEventListener("click", () => {
    const n = Number(star.dataset.n);  // 押した星の番号（1〜5）
    stars.forEach((s) => {
      // 番号が n 以下の星を光らせる（toggleの第2引数で付け外しを指定）
      s.classList.toggle("on", Number(s.dataset.n) <= n);
    });
  });
});
// プレビューの星をクリックしてみて`,en:`const stars = document.querySelectorAll(".star");

stars.forEach((star) => {
  star.addEventListener("click", () => {
    const n = Number(star.dataset.n);  // the pressed star's number (1-5)
    stars.forEach((s) => {
      // light up stars numbered <= n (toggle's 2nd arg sets on/off)
      s.classList.toggle("on", Number(s.dataset.n) <= n);
    });
  });
});
// Click the stars in the preview`}}]},

  {name:{ja:"トースト通知",en:"Toast notification"}, sub:{ja:"ふわっと出て消える",en:"fade in, auto-hide"}, desc:{ja:`画面下から<b>お知らせがふわっと出て、数秒で自動で消える</b>通知。<b>setTimeout</b>で消すのがポイント。<br><b>仕組み</b>：出す時に show を付け、<b>setTimeout</b> で数秒後に外す。位置とアニメは <b>CSS(transform/opacity)</b> が担当。`,en:`A notification that <b>fades in from the bottom and auto-hides after a few seconds</b>. The key is hiding it with <b>setTimeout</b>.<br><b>Mechanism</b>: add show to display, and remove it after a few seconds with <b>setTimeout</b>. Position and animation are <b>handled by CSS (transform/opacity)</b>.`},
   tags:["classList","setTimeout"], prep:[
     {s:'classList.add("show")',d:{ja:'通知を<b>出す</b>。',en:'<b>Shows</b> the notification.'}},
     {s:'setTimeout(…, 2000)',d:{ja:'2秒後に<b>消す</b>予約。',en:'Schedules a <b>hide</b> after 2 seconds.'}}],
   html:{ja:`<button id="btn">通知を出す</button>
<!-- ふだんは画面外に隠れている通知 -->
<div id="toast" class="toast">保存しました！</div>`,en:`<button id="btn">Show notification</button>
<!-- notification hidden off-screen normally -->
<div id="toast" class="toast">Saved!</div>`},
   css:{ja:`body {
  padding: 24px;
  font-family: sans-serif;
}

button {
  padding: 10px 18px;
  border: none;
  border-radius: 8px;
  background: #8b5cf6;
  color: #fff;
  cursor: pointer;
}

/* 通知本体。ふだんは下にずらして透明＝隠れている */
.toast {
  position: fixed;
  left: 50%;
  bottom: 24px;
  transform: translateX(-50%) translateY(80px);
  background: #333;
  color: #fff;
  padding: 12px 20px;
  border-radius: 999px;
  opacity: 0;
  transition: .3s;
}

/* show が付いたら定位置へ出てくる */
.toast.show {
  transform: translateX(-50%) translateY(0);
  opacity: 1;
}`,en:`body {
  padding: 24px;
  font-family: sans-serif;
}

button {
  padding: 10px 18px;
  border: none;
  border-radius: 8px;
  background: #8b5cf6;
  color: #fff;
  cursor: pointer;
}

/* the toast. Normally shifted down and transparent = hidden */
.toast {
  position: fixed;
  left: 50%;
  bottom: 24px;
  transform: translateX(-50%) translateY(80px);
  background: #333;
  color: #fff;
  padding: 12px 20px;
  border-radius: 999px;
  opacity: 0;
  transition: .3s;
}

/* comes to its resting spot when show is added */
.toast.show {
  transform: translateX(-50%) translateY(0);
  opacity: 1;
}`},
   variations:[{label:{ja:"通知を出す",en:"Show a toast"}, code:{ja:`const btn = document.querySelector("#btn");
const toast = document.querySelector("#toast");

btn.addEventListener("click", () => {
  toast.classList.add("show");        // ふわっと出す
  setTimeout(() => {
    toast.classList.remove("show");   // 2秒後に自動で消す
  }, 2000);
});
// プレビューのボタンを押してみて`,en:`const btn = document.querySelector("#btn");
const toast = document.querySelector("#toast");

btn.addEventListener("click", () => {
  toast.classList.add("show");        // fade it in
  setTimeout(() => {
    toast.classList.remove("show");   // auto-hide after 2 seconds
  }, 2000);
});
// Press the preview button`}}]},

  {name:{ja:"プログレスバー",en:"Progress bar"}, sub:{ja:"進み具合を見せる",en:"show progress"}, desc:{ja:`読み込みや達成度を<b>棒グラフで表す</b>UI。バーの幅(width)を % で変えるだけ。<br><b>仕組み</b>：外側の溝＋内側のバーの2枚重ね。内側の <b>width</b> を % で変え、<b>transition</b> でなめらかに伸ばします。`,en:`A UI that <b>shows loading or completion as a bar</b>. Just change the bar's width in %.<br><b>Mechanism</b>: an outer track plus an inner bar, layered. Change the inner <b>width</b> in %, and grow it smoothly with <b>transition</b>.`},
   tags:["style.width"], prep:[
     {s:'bar.style.width = "50%"',d:{ja:'バーの<b>長さ</b>を割合で指定。',en:'Sets the bar\'s <b>length</b> as a percentage.'}}],
   html:{ja:`<div class="track"><div id="bar" class="bar"></div></div>
<button id="btn">進める</button>`,en:`<div class="track"><div id="bar" class="bar"></div></div>
<button id="btn">Advance</button>`},
   css:{ja:`body {
  padding: 24px;
  font-family: sans-serif;
}

/* バーの土台（灰色の溝） */
.track {
  width: 100%;
  height: 20px;
  background: #eee;
  border-radius: 999px;
  overflow: hidden;
}

/* 中身のバー。最初は幅0% */
.bar {
  width: 0%;
  height: 100%;
  background: #8b5cf6;
  transition: width .3s;
}

button {
  margin-top: 12px;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  background: #8b5cf6;
  color: #fff;
  cursor: pointer;
}`,en:`body {
  padding: 24px;
  font-family: sans-serif;
}

/* the bar's track (gray groove) */
.track {
  width: 100%;
  height: 20px;
  background: #eee;
  border-radius: 999px;
  overflow: hidden;
}

/* the inner bar. Starts at width 0% */
.bar {
  width: 0%;
  height: 100%;
  background: #8b5cf6;
  transition: width .3s;
}

button {
  margin-top: 12px;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  background: #8b5cf6;
  color: #fff;
  cursor: pointer;
}`},
   variations:[{label:{ja:"押すと伸びる",en:"Grows on press"}, code:{ja:`const bar = document.querySelector("#bar");
const btn = document.querySelector("#btn");
let p = 0;

btn.addEventListener("click", () => {
  p = p + 20;                  // 20%ずつ進める
  if (p > 100) p = 100;        // 100%を超えないように
  bar.style.width = p + "%";   // バーの長さを更新
});`,en:`const bar = document.querySelector("#bar");
const btn = document.querySelector("#btn");
let p = 0;

btn.addEventListener("click", () => {
  p = p + 20;                  // advance 20% each time
  if (p > 100) p = 100;        // don't exceed 100%
  bar.style.width = p + "%";   // update the bar's length
});`}}]},

  {name:{ja:"TODOリスト",en:"To-do list"}, sub:{ja:"追加して消す",en:"add and remove"}, desc:{ja:`入力した文字を<b>リストに追加し、クリックで消す</b>ミニアプリ。要素の作成・追加・削除の総合練習です。<br><b>仕組み</b>：追加＝createElement→appendChild、削除＝その項目に <b>remove()</b> を仕込む。<b>.trim() === ""</b> で空入力をはじくのが定番。`,en:`A mini-app that <b>adds typed text to a list and removes it on click</b>. A full workout of creating, adding, and removing elements.<br><b>Mechanism</b>: add = createElement -> appendChild; remove = wire <b>remove()</b> onto the item. Rejecting empty input with <b>.trim() === ""</b> is standard.`},
   tags:["createElement","appendChild","remove"], prep:[
     {s:'li.addEventListener("click", …)',d:{ja:'各項目に「押したら消す」を付ける。',en:'Give each item a "remove on click" handler.'}},
     {s:'.trim()',d:{ja:'前後の空白を取り除く（空チェック用）。',en:'Strips leading/trailing spaces (for empty checks).'}}],
   html:{ja:`<input id="box" placeholder="やることを入力">
<button id="add">追加</button>
<ul id="list"></ul>`,en:`<input id="box" placeholder="enter a task">
<button id="add">Add</button>
<ul id="list"></ul>`},
   css:{ja:`body {
  padding: 24px;
  font-family: sans-serif;
}

input {
  padding: 8px 12px;
  font-size: 15px;
}

button {
  padding: 8px 14px;
  border: none;
  border-radius: 8px;
  background: #8b5cf6;
  color: #fff;
  cursor: pointer;
}

li {
  padding: 8px 10px;
  margin-top: 6px;
  background: #f2eefe;
  border-radius: 6px;
  cursor: pointer;
  list-style: none;
}

/* マウスを乗せると「消せるよ」と分かるように */
li:hover {
  text-decoration: line-through;
  color: #999;
}`,en:`body {
  padding: 24px;
  font-family: sans-serif;
}

input {
  padding: 8px 12px;
  font-size: 15px;
}

button {
  padding: 8px 14px;
  border: none;
  border-radius: 8px;
  background: #8b5cf6;
  color: #fff;
  cursor: pointer;
}

li {
  padding: 8px 10px;
  margin-top: 6px;
  background: #f2eefe;
  border-radius: 6px;
  cursor: pointer;
  list-style: none;
}

/* on hover, show it's removable */
li:hover {
  text-decoration: line-through;
  color: #999;
}`},
   variations:[{label:{ja:"追加＆削除",en:"Add & remove"}, code:{ja:`const box = document.querySelector("#box");
const add = document.querySelector("#add");
const list = document.querySelector("#list");

add.addEventListener("click", () => {
  if (box.value.trim() === "") return;   // 空なら何もしない

  const li = document.createElement("li"); // 新しい項目を作る
  li.textContent = box.value;
  // この項目をクリックしたら、自分を消す
  li.addEventListener("click", () => li.remove());
  list.appendChild(li);                    // リストに追加

  box.value = "";                          // 入力欄を空に戻す
});
// 入力→追加→できた項目をクリックで消える`,en:`const box = document.querySelector("#box");
const add = document.querySelector("#add");
const list = document.querySelector("#list");

add.addEventListener("click", () => {
  if (box.value.trim() === "") return;   // do nothing if empty

  const li = document.createElement("li"); // make a new item
  li.textContent = box.value;
  // clicking this item removes itself
  li.addEventListener("click", () => li.remove());
  list.appendChild(li);                    // add to the list

  box.value = "";                          // clear the input
});
// type -> add -> click an item to remove it`}}]},

  {name:{ja:"ストップウォッチ",en:"Stopwatch"}, sub:{ja:"時間を計る",en:"measure time"}, desc:{ja:`スタートで<b>時間を計り</b>、ストップで止める計測ツール。setInterval と経過時間の計算を組み合わせます。<br><b>仕組み</b>：開始時刻を <b>Date.now()</b> で覚え、setInterval で「今 − 開始」を表示。id を見て、動作中なら二重起動しないのがコツ。`,en:`A tool that <b>measures time</b> on start and halts on stop. Combines setInterval with elapsed-time calculation.<br><b>Mechanism</b>: remember the start time with <b>Date.now()</b>, and show "now − start" with setInterval. The trick: check the id and don't double-start while running.`},
   tags:["setInterval","Date.now"], prep:[
     {s:'Date.now()',d:{ja:'今の時刻をミリ秒で取得。差で経過時間が出る。',en:'Gets the current time in ms. The difference gives elapsed time.'}},
     {s:'sec.toFixed(1)',d:{ja:'小数第1位までに整える。',en:'Trims to one decimal place.'}}],
   html:{ja:`<p id="time" style="font-size:34px;font-family:monospace">0.0</p>
<button id="start">スタート</button>
<button id="stop">ストップ</button>`,en:`<p id="time" style="font-size:34px;font-family:monospace">0.0</p>
<button id="start">Start</button>
<button id="stop">Stop</button>`},
   css:`body {
  padding: 24px;
  font-family: sans-serif;
  text-align: center;
}

button {
  margin: 4px;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  background: #8b5cf6;
  color: #fff;
  cursor: pointer;
}`,
   variations:[{label:{ja:"計ってみる",en:"Measure it"}, code:{ja:`const time = document.querySelector("#time");
let startAt = 0;
let id = null;

document.querySelector("#start").addEventListener("click", () => {
  if (id) return;                        // すでに動いてたら無視
  startAt = Date.now();
  id = setInterval(() => {
    const sec = (Date.now() - startAt) / 1000;
    time.textContent = sec.toFixed(1);   // 小数第1位まで表示
  }, 100);
});

document.querySelector("#stop").addEventListener("click", () => {
  clearInterval(id);   // 止める
  id = null;
});`,en:`const time = document.querySelector("#time");
let startAt = 0;
let id = null;

document.querySelector("#start").addEventListener("click", () => {
  if (id) return;                        // ignore if already running
  startAt = Date.now();
  id = setInterval(() => {
    const sec = (Date.now() - startAt) / 1000;
    time.textContent = sec.toFixed(1);   // show to one decimal
  }, 100);
});

document.querySelector("#stop").addEventListener("click", () => {
  clearInterval(id);   // stop
  id = null;
});`}}]},

  {name:{ja:"トップへ戻るボタン",en:"Back-to-top button"}, sub:{ja:"スクロール＆表示",en:"scroll & reveal"}, desc:{ja:`下にスクロールすると<b>「↑上へ」ボタンが出て</b>、押すと一気に上まで戻る、よくあるパーツ。`,en:`A common part: scroll down and <b>an "↑ top" button appears</b>; press it to jump back to the top.`},
   tags:["scroll","scrollTo"], prep:[
     {s:'window.scrollY',d:{ja:'今どれだけ下にスクロールしたか。',en:'How far down you\'ve scrolled.'}},
     {s:'window.scrollTo({top:0, behavior:"smooth"})',d:{ja:'なめらかに一番上へ。',en:'Smoothly to the very top.'}}],
   html:{ja:`<div style="height:1200px;padding:16px;font-family:sans-serif">下までスクロールしてね ↓</div>
<button id="top" class="top">↑ 上へ</button>`,en:`<div style="height:1200px;padding:16px;font-family:sans-serif">Scroll down ↓</div>
<button id="top" class="top">↑ Top</button>`},
   css:{ja:`.top {
  position: fixed;
  right: 20px;
  bottom: 20px;
  padding: 10px 14px;
  border: none;
  border-radius: 999px;
  background: #8b5cf6;
  color: #fff;
  cursor: pointer;
  opacity: 0;                 /* ふだんは隠れている */
  transition: opacity .3s;
  pointer-events: none;
}

/* show が付いたら見えるようになる */
.top.show {
  opacity: 1;
  pointer-events: auto;
}`,en:`.top {
  position: fixed;
  right: 20px;
  bottom: 20px;
  padding: 10px 14px;
  border: none;
  border-radius: 999px;
  background: #8b5cf6;
  color: #fff;
  cursor: pointer;
  opacity: 0;                 /* hidden by default */
  transition: opacity .3s;
  pointer-events: none;
}

/* becomes visible once .show is added */
.top.show {
  opacity: 1;
  pointer-events: auto;
}`},
   variations:[{label:{ja:"出す＆戻る",en:"Reveal & return"}, code:{ja:`const btn = document.querySelector("#top");

// スクロールを見張って、200pxより下でボタンを出す
window.addEventListener("scroll", () => {
  btn.classList.toggle("show", window.scrollY > 200);
});

// 押したら一番上へ、なめらかに戻る
btn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
// プレビュー内を下へスクロールしてみて`,en:`const btn = document.querySelector("#top");

// watch scrolling; show the button past 200px
window.addEventListener("scroll", () => {
  btn.classList.toggle("show", window.scrollY > 200);
});

// on press, smoothly return to the top
btn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
// Scroll down inside the preview`}}]},

  {name:{ja:"文字数カウンター",en:"Character counter"}, sub:{ja:"入力を数える",en:"count input"}, desc:{ja:`入力欄に打つたび<b>残り文字数</b>を表示。SNSの投稿欄の「あと◯文字」の仕組み。<b>input</b> イベント＋<b>.length</b> の合わせ技。`,en:`Show the <b>remaining character count</b> as you type. The "N chars left" mechanism of social post boxes. A combo of the <b>input</b> event and <b>.length</b>.`},
   tags:["input",".length","value"], prep:[
     {s:{ja:'"input" イベント',en:'"input" event'},d:{ja:'入力欄の中身が<b>変わるたび</b>に発火。',en:'Fires <b>every time</b> the input\'s contents change.'}},
     {s:{ja:'入力欄.value.length',en:'input.value.length'},d:{ja:'今入力されている<b>文字数</b>。',en:'The current <b>character count</b>.'}}],
   html:{ja:`<input id="box" type="text" placeholder="ここに入力">
<div id="count">0 / 20</div>`,en:`<input id="box" type="text" placeholder="type here">
<div id="count">0 / 20</div>`},
   css:`input {
  padding: 8px;
  font-size: 15px;
}
#count {
  margin-top: 8px;
  color: #888;
}`,
   variations:[{label:{ja:"残り文字を出す",en:"Show remaining"}, code:`const box = document.querySelector("#box");
const count = document.querySelector("#count");
const max = 20;

box.addEventListener("input", () => {
  const len = box.value.length;
  count.textContent = len + " / " + max;
  count.style.color = len > max ? "red" : "#888";
});`}]},

  {name:{ja:"リアルタイム検索",en:"Live search"}, sub:{ja:"絞り込み表示",en:"filter display"}, desc:{ja:`入力に合わせてリストを<b>その場で絞り込む</b>実用パーツ。<b>includes</b> で「打った文字を含む項目だけ表示」。`,en:`A practical part that <b>filters a list on the fly</b> as you type. With <b>includes</b>, "show only items containing the typed text".`},
   tags:["input","includes","filter"], prep:[
     {s:{ja:'項目.includes(入力)',en:'item.includes(query)'},d:{ja:'その項目に入力文字が<b>含まれるか</b>を判定。',en:'Checks whether the item <b>contains</b> the typed text.'}}],
   html:{ja:`<input id="q" type="text" placeholder="くだものを検索">
<ul id="list2">
  <li>りんご</li><li>みかん</li><li>ぶどう</li>
  <li>もも</li><li>いちご</li>
</ul>`,en:`<input id="q" type="text" placeholder="search fruit">
<ul id="list2">
  <li>apple</li><li>orange</li><li>grape</li>
  <li>peach</li><li>strawberry</li>
</ul>`},
   css:`input {
  padding: 8px;
  font-size: 15px;
}
li {
  padding: 4px 0;
}`,
   variations:[{label:{ja:"絞り込む",en:"Filter"}, code:{ja:`const q = document.querySelector("#q");
const items = document.querySelectorAll("#list2 li");

q.addEventListener("input", () => {
  const word = q.value;
  items.forEach((li) => {
    // 含まれていれば表示、なければ隠す
    li.style.display = li.textContent.includes(word) ? "" : "none";
  });
});`,en:`const q = document.querySelector("#q");
const items = document.querySelectorAll("#list2 li");

q.addEventListener("input", () => {
  const word = q.value;
  items.forEach((li) => {
    // show if it contains the text, hide if not
    li.style.display = li.textContent.includes(word) ? "" : "none";
  });
});`}}]},

  {name:{ja:"スライダーの仕組み",en:"How a slider works"}, sub:{ja:"カルーセル",en:"Carousel"}, desc:{ja:`「◀ ▶」で<b>1枚ずつ切り替える</b>おなじみのスライダーの土台。今の番号を変数で覚えておき、ボタンで増減するのが基本。ここでは文字で仕組みを学びます（画像に差し替えれば画像スライダーに！）。`,en:`The foundation of the familiar slider that <b>switches one at a time</b> with "◀ ▶". The basics: remember the current index in a variable and increment/decrement with buttons. Here we learn the mechanism with text (swap in images and it's an image slider!).`},
   tags:["carousel","%","index"], prep:[
     {s:{ja:'現在番号',en:'current index'},d:{ja:'今どのスライドを見ているかを<b>変数</b>で記憶。',en:'Remember which slide you\'re on in a <b>variable</b>.'}},
     {s:{ja:'% 枚数',en:'% count'},d:{ja:'最後まで行ったら<b>0に戻す</b>ための「あまり」計算。',en:'A remainder calc to <b>wrap back to 0</b> at the end.'}}],
   html:{ja:`<div id="slide">スライド 1</div>
<button id="prev">◀</button>
<button id="next">▶</button>`,en:`<div id="slide">Slide 1</div>
<button id="prev">◀</button>
<button id="next">▶</button>`},
   css:`#slide {
  padding: 40px;
  background: #7b2ff7;
  color: #fff;
  font-size: 20px;
  text-align: center;
  border-radius: 8px;
}
button {
  margin-top: 10px;
  padding: 8px 16px;
}`,
   variations:[{label:{ja:"切り替える",en:"Switch"}, code:{ja:`const slide = document.querySelector("#slide");
const total = 4;
let index = 0;

const show = () => {
  slide.textContent = "スライド " + (index + 1);
};
document.querySelector("#next").addEventListener("click", () => {
  index = (index + 1) % total;      // 最後の次は最初へ
  show();
});
document.querySelector("#prev").addEventListener("click", () => {
  index = (index - 1 + total) % total;
  show();
});`,en:`const slide = document.querySelector("#slide");
const total = 4;
let index = 0;

const show = () => {
  slide.textContent = "Slide " + (index + 1);
};
document.querySelector("#next").addEventListener("click", () => {
  index = (index + 1) % total;      // after the last, back to the first
  show();
});
document.querySelector("#prev").addEventListener("click", () => {
  index = (index - 1 + total) % total;
  show();
});`}}]},

  {name:{ja:"クイズ（正誤判定）",en:"Quiz (right/wrong)"}, sub:{ja:"押して答え合わせ",en:"press to check"}, desc:{ja:`選択肢を押すと<b>正解／不正解を判定</b>するミニクイズ。「押されたのがどれか」を調べて分岐する、これまでの知識の総まとめです。`,en:`A mini-quiz that <b>judges right/wrong</b> when you press a choice. It checks "which was pressed" and branches — a summary of everything so far.`},
   tags:["dataset","if","classList"], prep:[
     {s:'data-answer="true"',d:{ja:'正解の選択肢だけに付けておく<b>目印</b>（HTML側）。',en:'A <b>marker</b> put only on the correct choice (in HTML).'}},
     {s:'btn.dataset.answer',d:{ja:'その目印を読む。文字の "true" が返る点に注意。',en:'Reads that marker. Note it returns the text "true".'}}],
   html:{ja:`<p>Q. JavaScriptの仕事はどれ？</p>
<button class="q" data-answer="false">骨組みを作る</button>
<button class="q" data-answer="false">見た目を整える</button>
<button class="q" data-answer="true">動きをつける</button>
<p id="result"></p>`,en:`<p>Q. Which is JavaScript's job?</p>
<button class="q" data-answer="false">Build the skeleton</button>
<button class="q" data-answer="false">Style the look</button>
<button class="q" data-answer="true">Add behavior</button>
<p id="result"></p>`},
   css:`.q {
  display: block;
  width: 220px;
  margin: 8px 0;
  padding: 10px;
  cursor: pointer;
}
#result {
  font-size: 20px;
  font-weight: bold;
}`,
   variations:[{label:{ja:"答え合わせ",en:"Check the answer"}, code:{ja:`const result = document.querySelector("#result");

document.querySelectorAll(".q").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.dataset.answer === "true") {
      result.textContent = "正解！🎉";
      result.style.color = "green";
    } else {
      result.textContent = "ざんねん…もう一度！";
      result.style.color = "red";
    }
  });
});
// プレビューの選択肢を押してみて`,en:`const result = document.querySelector("#result");

document.querySelectorAll(".q").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.dataset.answer === "true") {
      result.textContent = "Correct! 🎉";
      result.style.color = "green";
    } else {
      result.textContent = "Too bad... try again!";
      result.style.color = "red";
    }
  });
});
// Press a choice in the preview`}}]},

  {name:{ja:"デジタル時計",en:"Digital clock"}, sub:{ja:"動き続ける時計",en:"a running clock"}, desc:{ja:`<b>new Date（今の時刻）＋ setInterval（毎秒くり返し）</b>の合わせ技で、本物の時計が作れます。2つの知識が組み合わさる気持ちよさを体験！`,en:`Combine <b>new Date (current time) + setInterval (repeat every second)</b> to build a real clock. Feel the satisfaction of two pieces of knowledge coming together!`},
   tags:["Date","setInterval","padStart"], prep:[
     {s:{ja:'setInterval(処理, 1000)',en:'setInterval(callback, 1000)'},d:{ja:'1000ミリ秒（1秒）ごとに処理をくり返す。',en:'Repeats the work every 1000 ms (1 second).'}},
     {s:'String(5).padStart(2, "0")',d:{ja:'"5"を<b>"05"</b>にする（2桁にそろえる）。',en:'Turns "5" into <b>"05"</b> (pad to two digits).'}}],
   html:`<div id="clock">--:--:--</div>`,
   css:`body {
  display: grid;
  place-items: center;
  min-height: 74vh;
}
#clock {
  font-family: monospace;
  font-size: 48px;
  letter-spacing: 4px;
}`,
   variations:[{label:{ja:"時計を動かす",en:"Run the clock"}, code:{ja:`const clock = document.querySelector("#clock");

const tick = () => {
  const now = new Date();
  // 1桁のとき "5" → "05" にそろえる
  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  const s = String(now.getSeconds()).padStart(2, "0");
  clock.textContent = h + ":" + m + ":" + s;
}

tick();                    // まず1回表示
setInterval(tick, 1000);   // あとは毎秒更新`,en:`const clock = document.querySelector("#clock");

const tick = () => {
  const now = new Date();
  // pad single digits: "5" -> "05"
  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  const s = String(now.getSeconds()).padStart(2, "0");
  clock.textContent = h + ":" + m + ":" + s;
}

tick();                    // show once first
setInterval(tick, 1000);   // then update every second`}}]},

  {name:{ja:"じゃんけんゲーム",en:"Rock-paper-scissors"}, sub:{ja:"勝敗を判定",en:"judge win/lose"}, desc:{ja:`ボタンで<b>グー・チョキ・パー</b>を出し、コンピュータと勝負。<b>ランダム選択・条件分岐・DOM操作</b>という、これまでの知識の総合演習です。勝敗は「まず あいこ→次に 勝ちの3パターン→それ以外は負け」の順で考えるのがコツ。`,en:`Throw <b>rock, scissors, or paper</b> with a button and play the computer. A full exercise in <b>random selection, branching, and DOM manipulation</b>. The trick for judging: "first check tie -> then the 3 winning patterns -> otherwise lose".`},
   tags:["Math.random","if","dataset"], prep:[
     {s:'hands[Math.floor(Math.random() * 3)]',d:{ja:'配列から<b>ランダムに1つ</b>選ぶ定番の形（相手の手を決める）。',en:'The staple form for picking <b>one at random</b> from an array (decides the opponent\'s hand).'}},
     {s:{ja:'勝ちの3パターン',en:'the 3 winning patterns'},d:{ja:'グー→チョキ、チョキ→パー、パー→グー に勝つ。これを || でつなぐ。',en:'rock beats scissors, scissors beats paper, paper beats rock. Join these with ||.'}}],
   html:{ja:`<p>手を選んでね</p>
<button data-hand="グー">✊ グー</button>
<button data-hand="チョキ">✌️ チョキ</button>
<button data-hand="パー">✋ パー</button>
<p id="result"></p>`,en:`<p>Choose your hand</p>
<button data-hand="rock">✊ Rock</button>
<button data-hand="scissors">✌️ Scissors</button>
<button data-hand="paper">✋ Paper</button>
<p id="result"></p>`},
   css:`button {
  padding: 10px 16px;
  margin: 4px;
  font-size: 15px;
  cursor: pointer;
}
#result {
  margin-top: 12px;
  font-size: 18px;
  font-weight: bold;
}`,
   variations:[{label:{ja:"勝負する",en:"Play"}, code:{ja:`const hands = ["グー", "チョキ", "パー"];
const result = document.querySelector("#result");

document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const you = btn.dataset.hand;               // 押した手
    const cpu = hands[Math.floor(Math.random() * 3)];  // 相手はランダム

    let msg;
    if (you === cpu) {
      msg = "あいこ！";
    } else if (
      (you === "グー"   && cpu === "チョキ") ||
      (you === "チョキ" && cpu === "パー") ||
      (you === "パー"   && cpu === "グー")
    ) {
      msg = "勝ち！🎉";
    } else {
      msg = "負け…";
    }
    result.textContent = "あなた:" + you + " / 相手:" + cpu + " → " + msg;
  });
});
// プレビューのボタンで勝負！`,en:`const hands = ["rock", "scissors", "paper"];
const result = document.querySelector("#result");

document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const you = btn.dataset.hand;               // your hand
    const cpu = hands[Math.floor(Math.random() * 3)];  // opponent is random

    let msg;
    if (you === cpu) {
      msg = "Tie!";
    } else if (
      (you === "rock"     && cpu === "scissors") ||
      (you === "scissors" && cpu === "paper") ||
      (you === "paper"    && cpu === "rock")
    ) {
      msg = "Win! 🎉";
    } else {
      msg = "Lose...";
    }
    result.textContent = "you:" + you + " / cpu:" + cpu + " -> " + msg;
  });
});
// Play with the preview buttons!`}}]},

  {name:{ja:"カラーピッカー",en:"Color picker"}, sub:{ja:"色を選んで反映",en:"pick & apply a color"}, desc:{ja:`<b>&lt;input type="color"&gt;</b> で色を選ぶと、その色を<b>リアルタイムで画面に反映</b>します。テーマカラー設定などで使う実用パーツ。「選んだ瞬間」を input イベントで捕まえます。`,en:`Pick a color with <b>&lt;input type="color"&gt;</b> and <b>apply it to the screen in real time</b>. A practical part for theme-color settings. Catch "the moment of picking" with the input event.`},
   tags:["input[type=color]",{ja:"input イベント",en:'"input" event'}], prep:[
     {s:'<input type="color">',d:{ja:'クリックすると<b>色を選ぶパレット</b>が出る入力欄（HTML側に書く）。',en:'An input that opens a <b>color palette</b> on click (written in HTML).'}},
     {s:'picker.value',d:{ja:'選ばれた色（"#7c9885" のような形の文字）。',en:'The chosen color (text like "#7c9885").'}},
     {s:{ja:'"input" イベント',en:'"input" event'},d:{ja:'色を<b>選ぶたび</b>に発火する。',en:'Fires <b>every time</b> a color is picked.'}}],
   html:{ja:`<input id="picker" type="color" value="#7c9885">
<div id="box">この色が変わります</div>`,en:`<input id="picker" type="color" value="#7c9885">
<div id="box">this color changes</div>`},
   css:`#box {
  margin-top: 12px;
  padding: 40px;
  background: #7c9885;
  color: #fff;
  border-radius: 10px;
  text-align: center;
}`,
   variations:[
     {label:{ja:"背景に反映",en:"Apply to background"}, code:{ja:`const picker = document.querySelector("#picker");
const box = document.querySelector("#box");

picker.addEventListener("input", () => {
  // 選んだ色を箱の背景に反映（結果はプレビュー右）
  box.style.background = picker.value;
  box.textContent = picker.value;
});
// プレビューの色ボタンを押して色を選んでみて`,en:`const picker = document.querySelector("#picker");
const box = document.querySelector("#box");

picker.addEventListener("input", () => {
  // apply the chosen color to the box background (result in the preview)
  box.style.background = picker.value;
  box.textContent = picker.value;
});
// Press the color button in the preview and pick a color`}},
     {label:{ja:"枠の色にする",en:"Use as border color"}, code:`const picker = document.querySelector("#picker");
const box = document.querySelector("#box");
box.style.background = "#fff";
box.style.color = "#333";

picker.addEventListener("input", () => {
  box.style.border = "6px solid " + picker.value;
});`}]}
]}
];

/* =========================================================================
   jQuery版カテゴリ。素のJSで学んだ動きを「jQueryだと1行」で書けることを体感する。
   ========================================================================= */
const JQCATEGORIES=[
/* ============ jQuery基礎 ============ */
{name:"基礎", items:[
  {name:{ja:"jQueryとは？",en:"What is jQuery?"}, sub:{ja:"最初に読む",en:"Read me first"}, desc:{ja:`<b>jQuery（ジェイクエリー）</b>は、JavaScriptを<b>もっと短く・簡単に</b>書けるようにする「道具（ライブラリ）」です。長いJSのコードが <b>$()</b> を使うと1〜2行に。昔からの定番で、今も多くのサイトで動いています。まずは「JSの短縮版」と考えればOK！<br>※ 結果の出る場所は2つ：<b>文字はログ欄</b>、<b>色や動きはプレビュー欄</b>。<br>※ できれば<b>先に左上を「JS」にして基礎から</b>触ると、より分かりやすいです。`,en:`<b>jQuery</b> is a "tool (library)" that lets you write JavaScript <b>shorter and simpler</b>. Long JS shrinks to 1–2 lines with <b>$()</b>. A long-time standard, still running on many sites. For now, think of it as "shorthand JS"!<br>* Results appear in two places: <b>text in the log pane</b>, <b>colors and motion in the preview pane</b>.<br>* If you can, it's clearer to <b>set the top-left to "JS" first and start from the basics</b>.`},
   tags:["jQuery","$",{ja:"ライブラリ",en:"library"}], prep:[
     {s:{ja:'ライブラリ',en:'library'},d:{ja:'よく使う機能を<b>まとめた便利な道具箱</b>。読み込むと使える。',en:'A <b>handy toolbox</b> bundling common features. Usable once loaded.'}},
     {s:'$',d:{ja:'jQueryの<b>目印</b>。$() で要素を操作する。',en:'jQuery\'s <b>marker</b>. Operate on elements with $().'}}],
   variations:[{label:{ja:"jQueryを体感",en:"Feel jQuery"}, code:{ja:`// jQueryなら、これだけで文字と色を変えられる
$("#test").text("jQuery、便利！");
$("#test").css("background", "#F5C24B");
// 素のJSより短いのが分かります`,en:`// With jQuery, just this changes text and color
$("#test").text("jQuery is handy!");
$("#test").css("background", "#F5C24B");
// You can see it's shorter than plain JS`}}]},

  {name:{ja:"読み込み後に実行",en:"Run after load"}, sub:"$(function(){})", desc:{ja:`<b>$(function(){ … })</b> は「HTMLの準備ができてから実行」の合図。すべての jQuery コードは<b>これで囲むのが基本</b>。※この道場では仕組み上いつも準備完了後に動くので囲まなくても動きますが、<b>自分のサイトで書くとき</b>は必ず囲みます（囲まないと「要素がまだ無い」エラーの原因に）。`,en:`<b>$(function(){ … })</b> signals "run once the HTML is ready". As a rule, <b>wrap all jQuery code in this</b>. * In this dojo it always runs after ready anyway, so it works unwrapped, but <b>on your own site</b> always wrap it (otherwise it causes "the element isn't there yet" errors).`},
   tags:["$(function)","ready"], prep:[
     {s:'$(function(){ … })',d:{ja:'ページの準備完了後に、中を実行する。',en:'Runs the body after the page is ready.'}}],
   variations:[{label:{ja:"準備できてから",en:"After it's ready"}, code:{ja:`// この中は、HTMLの準備が整ってから動く
$(function() {
  $("#test").text("準備OK！");
  console.log("ページの準備が完了しました");
});`,en:`// This body runs once the HTML is ready
$(function() {
  $("#test").text("Ready!");
  console.log("the page is ready");
});`}}]},

  {name:{ja:"JSとjQueryの違い",en:"JS vs. jQuery"}, sub:{ja:"見くらべる",en:"Compare them"}, desc:{ja:`<b>やること（結果）は同じ</b>でも、書き方が違います。jQueryは<b>短く書ける</b>のが利点。ただし今は素のJSも十分便利なので、<b>両方読める</b>のが理想です。下で同じ動きを見くらべましょう。`,en:`<b>The result is the same</b>, but the way it's written differs. jQuery's advantage is <b>brevity</b>. But plain JS is plenty capable now, so ideally you can <b>read both</b>. Compare the same behavior below.`},
   tags:[{ja:"比較",en:"compare"},"$","querySelector"], prep:[
     {s:{ja:'素のJS',en:'plain JS'},d:{ja:'document.querySelector(...) などやや長め。追加の読み込みは不要。',en:'A bit longer, e.g. document.querySelector(...). No extra loading needed.'}},
     {s:'jQuery',d:{ja:'$(...) で短い。ただし jQuery 本体の読み込みが必要。',en:'Short with $(...). But it needs jQuery itself loaded.'}},
     {s:'.text(…).css(…)',d:{ja:'同じ部品への命令は「<b>.（ドット）</b>」でつなげて続け書きできる（くわしくは特級で）。',en:'Commands to the same element can be chained with a <b>. (dot)</b> (details in Expert).'}}],
   variations:[
     {label:{ja:"jQueryで書く",en:"Write in jQuery"}, code:{ja:`// jQuery：ドットでつないで、文字・色・背景を一気に
$("#test").text("jQueryだと1行").css("color", "#1a1305").css("background", "#F5C24B");`,en:`// jQuery: chain with dots to set text, color, background at once
$("#test").text("one line in jQuery").css("color", "#1a1305").css("background", "#F5C24B");`}},
     {label:{ja:"素のJSで書く",en:"Write in plain JS"}, code:{ja:`// 素のJS：まったく同じ動きを、ふつうのJSで書くとこうなる
const el = document.querySelector("#test");
el.textContent = "JSだと数行";
el.style.color = "#1a1305";
el.style.background = "#F5C24B";
// ↑ 2つを押しくらべてみて。結果は同じ、書き方が違うだけ！`,en:`// Plain JS: the exact same behavior written in ordinary JS
const el = document.querySelector("#test");
el.textContent = "a few lines in JS";
el.style.color = "#1a1305";
el.style.background = "#F5C24B";
// ^ Compare the two. Same result, just a different way of writing!`}}]},

  {name:{ja:"$ で要素を取る",en:"Grab elements with $"}, sub:{ja:"セレクタ",en:"Selectors"}, desc:{ja:`jQueryの基本。<b>$("セレクタ")</b> でHTML要素をつかまえます。CSSと同じ書き方（#id .class）で狙えるのが魅力。素のJSの querySelector にあたります。<br><b>ポイント</b>：見つからなくても<b>エラーにならず「空の集合」</b>（.length が 0）。取れたものにはそのまま <b>.text() や .css() を続け書き</b>できます。`,en:`jQuery's basics. Catch HTML elements with <b>$("selector")</b>. The appeal: target them with CSS-style syntax (#id .class). It corresponds to plain JS's querySelector.<br><b>Key point</b>: not found gives <b>no error, just an "empty set"</b> (.length is 0). You can <b>chain .text() or .css()</b> straight onto what you catch.`},
   tags:["$",{ja:"セレクタ",en:"selector"}], prep:[
     {s:'$("#test")',d:{ja:'id="test" をつかまえる（<b>document.querySelector</b> の短縮版）。',en:'Catches id="test" (short for <b>document.querySelector</b>).'}},
     {s:'$(".box")',d:{ja:'class="box" を<b>全部</b>つかまえる。',en:'Catches <b>all</b> class="box".'}}],
   variations:[{label:{ja:"つかまえて変える",en:"Catch & change"}, code:{ja:`// 素のJS: document.querySelector("#test").textContent = "…"
// jQuery なら↓これだけ
$("#test").text("jQueryで取得！");`,en:`// Plain JS: document.querySelector("#test").textContent = "…"
// In jQuery, just this:
$("#test").text("Got it with jQuery!");`}}]},

  {name:{ja:"文字を変える",en:"Change text"}, sub:".text() / .html()", desc:{ja:`<b>.text()</b> で中の文字、<b>.html()</b> でタグごと書き換え。素のJSの textContent / innerHTML にあたります。<br><b>ポイント</b>：<b>引数なし</b>で呼ぶと<b>今の中身を取得</b>、引数ありで<b>書き換え</b>。.html() はタグが効くので、<b>他人の入力には使わない</b>（安全なのは .text()）。`,en:`<b>.text()</b> rewrites the inner text, <b>.html()</b> rewrites including tags. They correspond to plain JS's textContent / innerHTML.<br><b>Key point</b>: called <b>with no argument</b> it <b>gets the current content</b>; with an argument it <b>rewrites</b>. .html() makes tags active, so <b>don't use it on others' input</b> (.text() is the safe one).`},
   tags:[".text()",".html()"], prep:[
     {s:'$(el).text("…")',d:{ja:'文字を書き換え（textContent 相当）。',en:'Rewrites text (like textContent).'}},
     {s:'$(el).html("<b>…</b>")',d:{ja:'タグ入りで書き換え（innerHTML 相当）。',en:'Rewrites with tags (like innerHTML).'}}],
   variations:[
     {label:{ja:"文字を変える",en:"Change text"}, code:{ja:`$("#test").text("文字が変わった！");`,en:`$("#test").text("The text changed!");`}},
     {label:{ja:"タグごと変える",en:"Change with tags"}, code:{ja:`$("#test").html("これは <b>太字</b> です");`,en:`$("#test").html("This is <b>bold</b>");`}}]},

  {name:{ja:"見た目を変える",en:"Change the look"}, sub:".css()", desc:{ja:`<b>.css("プロパティ", "値")</b> でスタイル変更。素のJSの element.style にあたります。{ } でまとめて指定も可能。<br><b>ポイント</b>：プロパティ名は <b>"background-color"</b>（ハイフン）でも <b>backgroundColor</b>（キャメル）でもOK。名前だけ渡すと<b>今の値を取得</b>もできます。`,en:`Change style with <b>.css("property", "value")</b>. It corresponds to plain JS's element.style. You can also set several at once with { }.<br><b>Key point</b>: property names work as <b>"background-color"</b> (hyphen) or <b>backgroundColor</b> (camel). Passing just a name <b>gets the current value</b>.`},
   tags:[".css()"], prep:[
     {s:'$(el).css("background", "#F5C24B")',d:{ja:'背景色を変える。',en:'Changes the background color.'}},
     {s:'$(el).css({ … })',d:{ja:'オブジェクトで<b>まとめて</b>指定。',en:'Set <b>several at once</b> with an object.'}}],
   variations:[
     {label:{ja:"色を変える",en:"Change color"}, code:`$("#test").css("background", "#F5C24B");
$("#test").css("color", "#1a1305");`},
     {label:{ja:"まとめて指定",en:"Set all at once"}, code:{ja:`// { } で一気に指定できる
$("#test").css({
  background: "#F5C24B",
  color: "#1a1305",
  borderRadius: "999px"
});`,en:`// set everything at once with { }
$("#test").css({
  background: "#F5C24B",
  color: "#1a1305",
  borderRadius: "999px"
});`}}]},

  {name:{ja:"クラスを切り替える",en:"Toggle a class"}, sub:".toggleClass()", desc:{ja:`<b>.addClass / .removeClass / .toggleClass</b> でクラス操作。素のJSの classList にあたります。`,en:`Manipulate classes with <b>.addClass / .removeClass / .toggleClass</b>. Corresponds to plain JS's classList.`},
   tags:[".toggleClass()","function(){}","$(this)"], prep:[
     {s:'$(el).toggleClass("on")',d:{ja:'on クラスを（トグル＝<b>付けたり外したり</b>）する。',en:'Toggles the on class (<b>add/remove</b>).'}},
     {s:'$(el).on("click", …)',d:{ja:'「クリックされたら実行して」の予約（くわしくは<b>次の項目</b>で）。',en:'A "run when clicked" reservation (details in the <b>next item</b>).'}},
     {s:'function() { … }',d:{ja:'「押されたときに動く中身」のかたまり。今は<b>おまじない</b>として、{ } の中に処理を書くと覚えればOK。',en:'The block that runs "when pressed". For now, treat it as <b>magic</b>: write your work inside the { }.'}},
     {s:'$(this)',d:{ja:'クリックされた<b>まさにその部品</b>（自分）を指す。$("#test") と書き直さずに済む。くわしくは上級で。',en:'Refers to <b>the very element</b> that was clicked (itself). Saves rewriting $("#test"). Details in Advanced.'}}],
   css:`body {
  display: grid;
  place-items: center;
  min-height: 74vh;
}

.test {
  padding: 15px 40px;
  font-size: 20px;
  border: none;
  border-radius: 12px;
  background: #8b5cf6;
  color: #fff;
  cursor: pointer;
  transition: .2s;
}

.test.on {
  background: #F5C24B;
  color: #1a1305;
  transform: scale(1.1);
}`,
   variations:[
     {label:{ja:"まず1回切り替える",en:"Toggle once"}, code:{ja:`// 実行するたびに on が付いたり外れたりする
$("#test").toggleClass("on");
// もう一度「実行」を押すと元に戻るよ`,en:`// each run adds or removes on
$("#test").toggleClass("on");
// press "Run" again and it reverts`}},
     {label:{ja:"クリックで切替",en:"Toggle on click"}, code:{ja:`// クリックのたびに on を付け外し
$("#test").on("click", function() {
  $(this).toggleClass("on");   // $(this) は押された自分
});
// プレビューのボタンを押してね`,en:`// toggle on with each click
$("#test").on("click", function() {
  $(this).toggleClass("on");   // $(this) is the pressed element itself
});
// Press the preview button`}}]},

  {name:{ja:"クリックに反応",en:"React to clicks"}, sub:".on()", desc:{ja:`<b>.on("click", 関数)</b> で「押されたら」を予約。素のJSの addEventListener にあたります。<br><b>ポイント</b>：関数の中の <b>$(this)</b> は<b>押された自分</b>。"click" を "mouseenter" などに変えれば別の反応に。1つの要素に何個でも予約できます。`,en:`Reserve "when pressed" with <b>.on("click", fn)</b>. Corresponds to plain JS's addEventListener.<br><b>Key point</b>: <b>$(this)</b> inside the function is <b>the pressed element itself</b>. Change "click" to "mouseenter" etc. for other reactions. You can attach any number to one element.`},
   tags:[".on()","click"], prep:[
     {s:'$(el).on("click", function(){ … })',d:{ja:'クリックの予約。',en:'A click reservation.'}},
     {s:'$(this)',d:{ja:'クリックされた<b>その要素</b>。',en:'<b>The element</b> that was clicked.'}}],
   variations:[{label:{ja:"押すと変身",en:"Transform on press"}, code:{ja:`$("#test").on("click", function() {
  $(this).text("押された！");
  $(this).css({ background: "#F5C24B", color: "#1a1305" });
});
// プレビューのボタンを押してね`,en:`$("#test").on("click", function() {
  $(this).text("Pressed!");
  $(this).css({ background: "#F5C24B", color: "#1a1305" });
});
// Press the preview button`}}]},

  {name:{ja:"要素を隠す・出す",en:"Hide / show elements"}, sub:".hide / .show", desc:{ja:`<b>.hide()</b> で隠す、<b>.show()</b> で出す。素のJSの style.display 切り替えが1語で書けます。まずはここから。<br><b>ポイント</b>：<b>.toggle()</b> なら「隠す⇄出す」を1語で交互に。<b>.hide(300)</b> のように時間を渡すとアニメ付きで消せます（中級で）。`,en:`<b>.hide()</b> hides, <b>.show()</b> shows. Plain JS's display toggle in one word. Start here.<br><b>Key point</b>: <b>.toggle()</b> alternates hide⇄show in one word. Passing a time like <b>.hide(300)</b> hides with animation (in Intermediate).`},
   tags:[".hide()",".show()"], prep:[
     {s:'$(el).hide()',d:{ja:'その要素を<b>隠す</b>（見えなくする）。',en:'<b>Hides</b> the element (makes it invisible).'}},
     {s:'$(el).show()',d:{ja:'また<b>表示</b>する。',en:'<b>Shows</b> it again.'}}],
   variations:[
     {label:{ja:"隠す",en:"Hide"}, code:{ja:`$("#test").hide();   // ボタンが消える`,en:`$("#test").hide();   // the button disappears`}},
     {label:{ja:"出す",en:"Show"}, code:{ja:`$("#test").show();   // また出てくる`,en:`$("#test").show();   // it reappears`}}]},

  {name:{ja:"複数まとめて変える",en:"Change many at once"}, sub:{ja:"クラスで選ぶ",en:"select by class"}, desc:{ja:`<b>$(".クラス名")</b> と書くと、<b>同じクラスの要素すべて</b>を一度に操作できます。素のJSのように1個ずつループしなくてOK。`,en:`Writing <b>$(".className")</b> lets you operate on <b>all elements of that class</b> at once. No need to loop one by one like plain JS.`},
   tags:['$(".x")',".css()"], prep:[
     {s:'$(".item")',d:{ja:'class="item" の要素を<b>全部まとめて</b>選ぶ。',en:'Selects <b>all</b> class="item" elements together.'}}],
   html:`<div class="item">A</div>
<div class="item">B</div>
<div class="item">C</div>`,
   css:`.item {
  display: inline-block;
  padding: 12px 18px;
  margin: 4px;
  background: #eee;
}`,
   variations:[{label:{ja:"全部の色を変える",en:"Color them all"}, code:{ja:`// .item 全部を一度に変える（ループ不要）
$(".item").css({ background: "#7b2ff7", color: "#fff" });`,en:`// change all .item at once (no loop)
$(".item").css({ background: "#7b2ff7", color: "#fff" });`}}]},

  {name:{ja:"要素の数を数える",en:"Count elements"}, sub:".length", desc:{ja:`<b>$(…).length</b> で「何個見つかったか」が分かります。<b>0なら見つかっていない</b>ということ。セレクタの書き間違いチェックにも超便利。`,en:`<b>$(…).length</b> tells you "how many were found". <b>0 means nothing was found</b>. Super handy for catching selector typos too.`},
   tags:[".length"], prep:[
     {s:'$(".item").length',d:{ja:'見つかった<b>個数</b>。0 なら「1個も無い」。',en:'The <b>count</b> found. 0 means "none at all".'}}],
   html:`<div class="item">A</div>
<div class="item">B</div>
<div class="item">C</div>`,
   css:`.item {
  display: inline-block;
  padding: 12px 18px;
  margin: 4px;
  background: #eee;
}`,
   variations:[{label:{ja:"数える",en:"Count"}, code:{ja:`console.log($(".item").length);   // 3

// セレクタを間違えると 0 = 「見つかってない」の合図
console.log($(".itemm").length);  // 0`,en:`console.log($(".item").length);   // 3

// a wrong selector gives 0 = "found nothing"
console.log($(".itemm").length);  // 0`}}]}
]},

/* ============ jQuery初級 ============ */
{name:"初級", items:[
  {name:{ja:"属性を変える",en:"Change attributes"}, sub:".attr()", desc:{ja:`<b>.attr（アトリビュート＝属性の略）</b>を使うと、href や src などの<b>属性</b>を変更・取得できます。素のJSの setAttribute にあたります。`,en:`With <b>.attr</b> (short for attribute) you can set or get <b>attributes</b> like href and src. Corresponds to plain JS's setAttribute.`},
   tags:[".attr()"], prep:[
     {s:'$(el).attr("href", "…")',d:{ja:'属性を<b>変更</b>する。',en:'<b>Sets</b> an attribute.'}},
     {s:'$(el).attr("href")',d:{ja:'値を省くと<b>取得</b>になる。',en:'Omit the value to <b>get</b> it.'}}],
   html:{ja:`<a id="link" href="#">わたしはリンク</a>`,en:`<a id="link" href="#">I am a link</a>`},
   css:`body {
  padding: 24px;
  font-family: sans-serif;
}

a {
  color: #8b5cf6;
  font-size: 18px;
}`,
   variations:[{label:{ja:"属性を変える",en:"Change attribute"}, code:{ja:`// リンクの文字と行き先(href)を変える
$("#link").text("行き先を変えたリンク");
$("#link").attr("href", "https://example.com");

// 値を省くと「取得」になる
console.log("今のhref:", $("#link").attr("href"));`,en:`// change the link's text and destination (href)
$("#link").text("Link with a new destination");
$("#link").attr("href", "https://example.com");

// omitting the value "gets" it
console.log("current href:", $("#link").attr("href"));`}}]},

  {name:{ja:"要素を消す・空にする",en:"Remove / empty elements"}, sub:".remove() / .empty()", desc:{ja:`<b>.remove()</b> で要素ごと削除、<b>.empty()</b> で中身だけ空に。素のJSの remove にあたります。`,en:`<b>.remove()</b> deletes the whole element; <b>.empty()</b> clears just the contents. Corresponds to plain JS's remove.`},
   tags:[".remove()",".empty()"], prep:[
     {s:'$(el).remove()',d:{ja:'その要素を<b>まるごと消す</b>。',en:'<b>Deletes the whole element</b>.'}},
     {s:'$(el).empty()',d:{ja:'中身だけ<b>空</b>にする（枠は残る）。',en:'<b>Empties</b> just the contents (the frame stays).'}}],
   variations:[{label:{ja:"押すと消える",en:"Press to vanish"}, code:{ja:`$("#test").on("click", function() {
  $(this).remove();   // 自分をまるごと消す
});
// プレビューのボタンを押すと消える`,en:`$("#test").on("click", function() {
  $(this).remove();   // deletes itself entirely
});
// The preview button vanishes when pressed`}}]},

  {name:{ja:"前後に足す",en:"Add before / after"}, sub:".before() / .after()", desc:{ja:`要素の<b>前(before)・後(after)</b>に新しい要素を差し込みます。あとで習う <b>.append</b> は「中の最後に足す」で、before/after は「<b>外側の前後</b>に足す」という違いがあります。`,en:`Insert new elements <b>before</b> or <b>after</b> an element. The <b>.append</b> you'll learn later "adds to the end inside", while before/after "add <b>outside, before/after</b>" — that's the difference.`},
   tags:[".before()",".after()"], prep:[
     {s:'$(el).after("<p>…</p>")',d:{ja:'その要素の<b>すぐ後ろ</b>に足す。',en:'Adds <b>right after</b> the element.'}},
     {s:'$(el).before("<p>…</p>")',d:{ja:'その要素の<b>すぐ前</b>に足す。',en:'Adds <b>right before</b> the element.'}}],
   html:{ja:`<p id="me">わたし（基準）</p>
<button id="btn">前後に足す</button>`,en:`<p id="me">me (reference)</p>
<button id="btn">Add before/after</button>`},
   css:`body {
  padding: 24px;
  font-family: sans-serif;
}

button {
  margin-top: 12px;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  background: #8b5cf6;
  color: #fff;
  cursor: pointer;
}`,
   variations:[{label:{ja:"前後に差し込む",en:"Insert before/after"}, code:{ja:`$("#btn").on("click", function() {
  $("#me").before("<p>↑ 前に足したよ</p>");
  $("#me").after("<p>↓ 後ろに足したよ</p>");
});
// プレビューのボタンを押してね`,en:`$("#btn").on("click", function() {
  $("#me").before("<p>↑ added before</p>");
  $("#me").after("<p>↓ added after</p>");
});
// Press the preview button`}}]},

  {name:{ja:"クラスを付ける・外す",en:"Add / remove a class"}, sub:"addClass / removeClass", desc:{ja:`見た目はCSSに書いておき、<b>.addClass("名前")</b> で付ける／<b>.removeClass()</b> で外す。toggleClass の兄弟です。<br><b>ポイント</b>：付いてるか調べるのは <b>.hasClass("名前")</b>。付け外しを<b>交互に</b>するなら <b>.toggleClass()</b> が便利です。`,en:`Write the look in CSS, then add with <b>.addClass("name")</b> / remove with <b>.removeClass()</b>. Siblings of toggleClass.<br><b>Key point</b>: check whether it's applied with <b>.hasClass("name")</b>. To <b>alternate</b> adding/removing, <b>.toggleClass()</b> is handy.`},
   tags:[".addClass()",".removeClass()"], prep:[
     {s:'$(el).addClass("on")',d:{ja:'クラス「on」を<b>付ける</b>（CSSの .on が効く）。',en:'<b>Adds</b> the "on" class (the CSS .on takes effect).'}},
     {s:'$(el).removeClass("on")',d:{ja:'クラスを<b>外す</b>。',en:'<b>Removes</b> the class.'}}],
   css:`#test {
  padding: 12px 20px;
  transition: 0.3s;
}
#test.on {
  background: #00d4ff;
  color: #000;
  transform: scale(1.1);
}`,
   variations:[
     {label:{ja:"付ける",en:"Add"}, code:`$("#test").addClass("on");`},
     {label:{ja:"外す",en:"Remove"}, code:`$("#test").removeClass("on");`}]},

  {name:{ja:"チェックの状態",en:"Checkbox state"}, sub:".prop()", desc:{ja:`チェックボックスが<b>ONかOFFか</b>は <b>.prop("checked")</b> で調べます。true/false を渡せば<b>JSから切り替え</b>もできます。`,en:`Check whether a checkbox is <b>ON or OFF</b> with <b>.prop("checked")</b>. Pass true/false to <b>toggle it from JS</b> too.`},
   tags:[".prop()","checked"], prep:[
     {s:'$(el).prop("checked")',d:{ja:'ONなら<b>true</b>、OFFなら false。',en:'<b>true</b> if ON, false if OFF.'}},
     {s:'$(el).prop("checked", true)',d:{ja:'JSから<b>ONにする</b>。',en:'<b>Turns it ON</b> from JS.'}}],
   html:{ja:`<label><input id="agree" type="checkbox"> 利用規約に同意する</label>
<button id="check">状態を見る</button>
<div id="out"></div>`,en:`<label><input id="agree" type="checkbox"> I agree to the terms</label>
<button id="check">Check state</button>
<div id="out"></div>`},
   css:`label {
  display: block;
  margin-bottom: 10px;
}
button {
  padding: 8px 14px;
}`,
   variations:[{label:{ja:"状態を調べる",en:"Check the state"}, code:{ja:`$("#check").on("click", function() {
  const ok = $("#agree").prop("checked");   // true か false
  if (ok) {
    $("#out").text("同意ずみ！");
  } else {
    $("#out").text("まだ同意していません");
  }
});
// チェックを入れたり外したりして押してみて`,en:`$("#check").on("click", function() {
  const ok = $("#agree").prop("checked");   // true or false
  if (ok) {
    $("#out").text("Agreed!");
  } else {
    $("#out").text("Not agreed yet");
  }
});
// Toggle the checkbox and press`}}]},

  {name:{ja:"コピーを作る",en:"Make a copy"}, sub:".clone()", desc:{ja:`要素の<b>コピー（複製）</b>を作って好きな場所に置けます。「同じカードをもう1枚」が1行で。`,en:`Make a <b>copy (clone)</b> of an element and place it anywhere. "One more of the same card" in one line.`},
   tags:[".clone()",".appendTo()"], prep:[
     {s:'$(el).clone()',d:{ja:'その要素の<b>そっくりなコピー</b>を作る（まだ画面には出ない）。',en:'Makes an <b>exact copy</b> of the element (not on screen yet).'}},
     {s:'.appendTo("#list")',d:{ja:'作ったコピーを<b>#listの中に置く</b>。',en:'<b>Places the copy inside #list</b>.'}}],
   html:{ja:`<div id="card">カード</div>
<button id="copy">複製する</button>`,en:`<div id="card">Card</div>
<button id="copy">Duplicate</button>`},
   css:`#card, .card {
  padding: 12px 18px;
  margin: 6px 0;
  background: #8b5cf6;
  color: #fff;
  border-radius: 8px;
  width: 120px;
  text-align: center;
}
button {
  padding: 8px 14px;
}`,
   variations:[{label:{ja:"複製する",en:"Duplicate"}, code:{ja:`$("#copy").on("click", function() {
  $("#card").clone()
    .removeAttr("id")        // idの重複を避ける（idは1個だけのルール）
    .addClass("card")
    .insertBefore(this);     // ボタンの前に置く
});
// 押すたびカードが増えるよ`,en:`$("#copy").on("click", function() {
  $("#card").clone()
    .removeAttr("id")        // avoid duplicate ids (an id must be unique)
    .addClass("card")
    .insertBefore(this);     // place before the button
});
// A card is added each press`}}]}
]},

/* ============ jQuery中級 ============ */
{name:"中級", items:[
  {name:{ja:"フェード",en:"Fade"}, sub:".fadeIn / .fadeOut", desc:{ja:`jQueryなら<b>1行でふわっと</b>表示・非表示。素のJSで opacity+transition を書くより手軽です。<br><b>ポイント</b>：( ) の数字は<b>ミリ秒</b>（"slow"/"fast" もOK）。<b>.fadeToggle()</b> で交互に。消え終わった後に処理したい時は後ろに関数を渡します（コールバック＝特級）。`,en:`jQuery fades in/out <b>softly in one line</b> — easier than writing opacity+transition in plain JS.<br><b>Key point</b>: the number in ( ) is <b>milliseconds</b> ("slow"/"fast" work too). <b>.fadeToggle()</b> alternates. To run code after it finishes, pass a function afterward (a callback — Expert).`},
   tags:[".fadeIn()",".fadeOut()",".fadeToggle()"], prep:[
     {s:'$(el).fadeOut(600)',d:{ja:'600ミリ秒かけて<b>消える</b>。',en:'<b>Fades out</b> over 600 ms.'}},
     {s:'$(el).fadeIn(600)',d:{ja:'かけて<b>現れる</b>。',en:'<b>Fades in</b> over that time.'}}],
   variations:[
     {label:{ja:"消える",en:"Fade out"}, code:{ja:`$("#test").fadeOut(800);   // 0.8秒かけて消える`,en:`$("#test").fadeOut(800);   // fade out over 0.8s`}},
     {label:{ja:"消えて出る",en:"Out then in"}, code:{ja:`// 消えたあと、1秒後にまた出す
$("#test").fadeOut(600);
// setTimeout ＝ 1000ミリ秒(1秒)後に1回だけ実行する命令（くわしくは特級で）
setTimeout(function() {
  $("#test").fadeIn(600);
}, 1000);`,en:`// fade out, then show again after 1 second
$("#test").fadeOut(600);
// setTimeout = run once after 1000 ms (1s) (details in Expert)
setTimeout(function() {
  $("#test").fadeIn(600);
}, 1000);`}},
     {label:{ja:"トグル",en:"Toggle"}, code:{ja:`// 出てたら消える・消えてたら出る
$("#test").fadeToggle(600);`,en:`// out if shown, in if hidden
$("#test").fadeToggle(600);`}}]},

  {name:{ja:"スライド",en:"Slide"}, sub:".slideToggle()", desc:{ja:`高さを<b>スルスル</b>変えて開閉。メニューやFAQに便利。ハンバーガーメニューも一瞬で作れます。`,en:`Open/close by <b>smoothly</b> changing height. Handy for menus and FAQs. You can build a hamburger menu instantly.`},
   tags:[".slideUp()",".slideDown()",".slideToggle()"], prep:[
     {s:'$(el).slideToggle(400)',d:{ja:'開いてたら閉じ、閉じてたら開く。',en:'Closes if open, opens if closed.'}}],
   html:{ja:`<button id="btn">開閉</button>
<!-- 最初は display:none で閉じておく。1回目のクリックで開く -->
<div id="panel" style="display:none;background:#f2eefe;padding:16px;border-radius:8px;margin-top:8px">中身がスライドで開閉します</div>`,en:`<button id="btn">Toggle</button>
<!-- start closed with display:none. The first click opens it -->
<div id="panel" style="display:none;background:#f2eefe;padding:16px;border-radius:8px;margin-top:8px">The content slides open and closed</div>`},
   css:`body {
  padding: 24px;
  font-family: sans-serif;
}

button {
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  background: #8b5cf6;
  color: #fff;
  cursor: pointer;
}`,
   variations:[{label:{ja:"開閉する",en:"Toggle open/close"}, code:{ja:`$("#btn").on("click", function() {
  $("#panel").slideToggle(400);
});
// プレビューのボタンを押してね`,en:`$("#btn").on("click", function() {
  $("#panel").slideToggle(400);
});
// Press the preview button`}}]},

  {name:{ja:"アニメーション",en:"Animation"}, sub:".animate()", desc:{ja:`<b>.animate()</b> でCSSの値をなめらかに変化させます。複数まとめて動かせます。<br><b>注意</b>：動かせるのは<b>数値系のプロパティ</b>（幅・位置・opacityなど）。<b>色は animate では変えられません</b>（色は .css や CSSの transition で行う）。`,en:`<b>.animate()</b> smoothly changes CSS values. You can animate several at once.<br><b>Note</b>: only <b>numeric properties</b> can be animated (width, position, opacity, etc.). <b>Color can't be animated with animate</b> (do color via .css or CSS transition).`},
   tags:[".animate()"], prep:[
     {s:{ja:'$(el).animate({ … }, 時間)',en:'$(el).animate({ … }, duration)'},d:{ja:'{ }に目標のスタイル、時間はミリ秒。',en:'Target styles in { }, time in milliseconds.'}}],
   variations:[{label:{ja:"動かす",en:"Animate"}, code:{ja:`// 少し右へ移動しながら、少し透明に
$("#test").animate({
  marginLeft: "80px",
  opacity: 0.5
}, 700);`,en:`// move a bit right while going slightly transparent
$("#test").animate({
  marginLeft: "80px",
  opacity: 0.5
}, 700);`}}]},

  {name:{ja:"表示・非表示",en:"Show / hide"}, sub:".hide / .show / .toggle", desc:{ja:`<b>.hide() / .show() / .toggle()</b> で出し入れ。時間を渡すとアニメ付きに。<br><b>ポイント</b>：中身は素のJSの <b>display</b> の切り替え。<b>.toggle()</b> は「出てたら消す・消えてたら出す」を1語で。時間なしは即座、<b>.toggle(400)</b> でアニメ付き。`,en:`Show/hide with <b>.hide() / .show() / .toggle()</b>. Pass a time for animation.<br><b>Key point</b>: under the hood it toggles plain JS's <b>display</b>. <b>.toggle()</b> does "hide if shown, show if hidden" in one word. No time = instant; <b>.toggle(400)</b> animates.`},
   tags:[".toggle()",".hide()",".show()"], prep:[
     {s:'$(el).toggle(400)',d:{ja:'出てたら消す・消えてたら出す（0.4秒）。',en:'Hide if shown, show if hidden (0.4s).'}}],
   variations:[{label:{ja:"しまう",en:"Put it away"}, code:{ja:`$("#test").hide(400);   // 0.4秒でしまう`,en:`$("#test").hide(400);   // hide over 0.4s`}}]},

  {name:{ja:"間を置いて動かす",en:"Animate with a pause"}, sub:".delay()", desc:{ja:`アニメとアニメの<b>あいだに待ち時間</b>をはさむのが <b>.delay(ミリ秒)</b>（ディレイ＝遅らせる）。チェーンにつなぐだけで「消えて→1秒待って→出る」が書けます。`,en:`<b>.delay(ms)</b> inserts a <b>wait between animations</b>. Just chain it to write "fade out -> wait 1s -> fade in".`},
   tags:[".delay()"], prep:[
     {s:'$(el).fadeOut(400).delay(1000).fadeIn(400)',d:{ja:'消える→<b>1秒待つ</b>→出る、を左から順に実行。',en:'Runs left to right: out -> <b>wait 1s</b> -> in.'}},
     {s:{ja:'注意',en:'Note'},d:{ja:'.delay が効くのは fadeIn などの<b>アニメ系だけ</b>（.text() などには効かない）。',en:'.delay only affects <b>animation methods</b> like fadeIn (not .text() etc.).'}}],
   variations:[
     {label:{ja:"消えて→待って→出る",en:"Out -> wait -> in"}, code:{ja:`$("#test").fadeOut(400).delay(1000).fadeIn(400);
// setTimeout を書かなくても「待ち」が作れる`,en:`$("#test").fadeOut(400).delay(1000).fadeIn(400);
// you get a "wait" without writing setTimeout`}},
     {label:{ja:"順番に点滅",en:"Blink in sequence"}, code:`$("#test")
  .fadeTo(300, 0.2).delay(200)
  .fadeTo(300, 1).delay(200)
  .fadeTo(300, 0.2).delay(200)
  .fadeTo(300, 1);`}]},

  {name:{ja:"半透明にする",en:"Make translucent"}, sub:".fadeTo()", desc:{ja:`<b>.fadeTo(時間, 濃さ)</b> で、完全に消さず<b>好きな濃さまで</b>フェードできます。「無効になったボタン」のような薄い表現に。`,en:`<b>.fadeTo(time, opacity)</b> fades to <b>any opacity</b> without fully hiding. Good for faded looks like a "disabled button".`},
   tags:[".fadeTo()"], prep:[
     {s:'$(el).fadeTo(400, 0.3)',d:{ja:'0.4秒かけて<b>濃さ30%</b>（うっすら）に。1で元通り。',en:'Fade to <b>30% opacity</b> (faint) over 0.4s. 1 restores it.'}}],
   variations:[
     {label:{ja:"うっすらに",en:"Faint"}, code:{ja:`$("#test").fadeTo(400, 0.3);   // 30%の濃さまで薄く`,en:`$("#test").fadeTo(400, 0.3);   // faint, down to 30% opacity`}},
     {label:{ja:"元に戻す",en:"Restore"}, code:{ja:`$("#test").fadeTo(400, 1);     // 100%＝元通り`,en:`$("#test").fadeTo(400, 1);     // 100% = back to normal`}}]},

  {name:{ja:"アニメを止める",en:"Stop animation"}, sub:".stop()", desc:{ja:`ボタン連打で<b>アニメが順番待ちして暴走</b>した経験、ありませんか？ <b>.stop()</b> を頭に付けると「今のアニメを中断して新しいのを始める」ので連打しても安全。実務の必須テク。`,en:`Ever had <b>animations queue up and run wild</b> from button mashing? Prefix <b>.stop()</b> to "cancel the current animation and start the new one", so mashing is safe. An essential real-world technique.`},
   tags:[".stop()"], prep:[
     {s:'$(el).stop().slideToggle(300)',d:{ja:'進行中のアニメを<b>止めてから</b>次を実行。連打対策の定番。',en:'<b>Stops</b> the running animation, then runs the next. The staple anti-mashing move.'}},
     {s:'.stop(true)',d:{ja:'止めるついでに、<b>順番待ちのアニメも全部捨てる</b>。連打対策はこちらがより確実。',en:'While stopping, also <b>discards all queued animations</b>. More reliable against mashing.'}}],
   html:{ja:`<button id="btn">連打してみて</button>
<div id="panel">.stop() が無いと連打分だけ延々と開閉し続けます</div>`,en:`<button id="btn">Try mashing</button>
<div id="panel">Without .stop(), it keeps opening/closing once per mash</div>`},
   css:`#panel {
  margin-top: 8px;
  padding: 16px;
  background: #8b5cf6;
  color: #fff;
}
button {
  padding: 8px 14px;
}`,
   variations:[
     {label:{ja:"stopあり（安全）",en:"with stop (safe)"}, code:{ja:`$("#btn").on("click", function() {
  $("#panel").stop(true).slideToggle(400);
});
// 連打しても暴走しない`,en:`$("#btn").on("click", function() {
  $("#panel").stop(true).slideToggle(400);
});
// mashing doesn't run wild`}},
     {label:{ja:"stopなし（暴走）",en:"no stop (runs wild)"}, code:{ja:`$("#btn").on("click", function() {
  $("#panel").slideToggle(400);
});
// 10回連打→10回ぶん開閉し続ける…`,en:`$("#btn").on("click", function() {
  $("#panel").slideToggle(400);
});
// 10 mashes -> keeps opening/closing 10 times...`}}]},

  {name:{ja:"今見えてる？",en:"Is it visible now?"}, sub:'.is(":visible")', desc:{ja:`要素が<b>今 表示されているか隠れているか</b>を調べて、処理を分けられます。<b>.is(":visible")</b>（イズ・ビジブル）が true / false を返すので、「見えてたら閉じる・隠れてたら開く」を自分の条件で書けます。`,en:`Check whether an element is <b>currently shown or hidden</b> and branch accordingly. <b>.is(":visible")</b> returns true / false, so you can write "close if visible, open if hidden" with your own condition.`},
   tags:['.is(":visible")'], prep:[
     {s:{ja:'if ( 条件 .is(":visible") )',en:'if ( cond .is(":visible") )'},d:{ja:'返ってきた true / false を <b>if の中に入れて</b>分岐に使う。',en:'Put the returned true / false <b>inside an if</b> to branch.'}},
     {s:'$(el).is(":visible")',d:{ja:'その要素が表示中なら<b>true</b>、隠れていれば false。',en:'<b>true</b> if the element is shown, false if hidden.'}},
     {s:':visible',d:{ja:'「今 画面に見えている要素」を表すjQueryの目印。',en:'A jQuery marker for "elements currently visible on screen".'}}],
   html:{ja:`<button id="btn">状態を見て開閉</button>
<div id="box">わたしは箱です</div>`,en:`<button id="btn">Toggle by state</button>
<div id="box">I am a box</div>`},
   css:`#box {
  margin-top: 10px;
  padding: 20px;
  background: #9A8FBF;
  color: #fff;
}`,
   variations:[{label:{ja:"見て分岐",en:"Check & branch"}, code:{ja:`$("#btn").on("click", function() {
  if ($("#box").is(":visible")) {
    $("#box").slideUp(300);      // 見えてる → しまう
  } else {
    $("#box").slideDown(300);    // 隠れてる → 出す
  }
});
// プレビューのボタンを押してみて`,en:`$("#btn").on("click", function() {
  if ($("#box").is(":visible")) {
    $("#box").slideUp(300);      // visible -> put away
  } else {
    $("#box").slideDown(300);    // hidden -> show
  }
});
// Press the preview button`}}]},

  {name:{ja:"上までスクロール",en:"Scroll to top"}, sub:".animate(scrollTop)", desc:{ja:`「トップへ戻る」ボタンの中身。<b>.animate({ scrollTop: 0 }, 時間)</b> で、ページの<b>一番上までなめらかに移動</b>します。長いページで定番のパーツ。数値を変えれば途中の位置にも飛べます。`,en:`The guts of a "back to top" button. <b>.animate({ scrollTop: 0 }, time)</b> <b>smoothly moves to the top</b> of the page. A staple on long pages. Change the number to jump to a midway position.`},
   tags:[".animate()","scrollTop"], prep:[
     {s:'$("html, body").animate({ scrollTop: 0 }, 400)',d:{ja:'0.4秒かけて<b>一番上</b>へスルスル移動。html と body 両方に指定するのがお約束。',en:'Smoothly moves to the <b>top</b> over 0.4s. It\'s convention to target both html and body.'}},
     {s:'scrollTop: 200',d:{ja:'0以外にすると、上から<b>その位置(px)まで</b>移動できる。',en:'A non-zero value moves <b>to that position (px)</b> from the top.'}}],
   html:{ja:`<div>↓ 下までスクロールしてボタンを押してね</div>
<div style="height:600px;background:linear-gradient(#EFEAF7,#fff)"></div>
<button id="top">▲ 上へ戻る</button>`,en:`<div>↓ Scroll down and press the button</div>
<div style="height:600px;background:linear-gradient(#EFEAF7,#fff)"></div>
<button id="top">▲ Back to top</button>`},
   css:`button {
  padding: 10px 16px;
  cursor: pointer;
}`,
   variations:[
     {label:{ja:"上へ戻る",en:"Back to top"}, code:{ja:`$("#top").on("click", function() {
  $("html, body").animate({ scrollTop: 0 }, 400);
});
// 下までスクロールしてボタンを押してみて`,en:`$("#top").on("click", function() {
  $("html, body").animate({ scrollTop: 0 }, 400);
});
// Scroll down and press the button`}},
     {label:{ja:"途中まで移動",en:"Move partway"}, code:{ja:`$("#top").on("click", function() {
  // 上から200pxの位置まで移動
  $("html, body").animate({ scrollTop: 200 }, 400);
});`,en:`$("#top").on("click", function() {
  // move to 200px from the top
  $("html, body").animate({ scrollTop: 200 }, 400);
});`}}]},

  {name:{ja:"全部に処理",en:"Process all"}, sub:{ja:".each() 入門",en:".each() intro"}, desc:{ja:`つかまえた要素<b>全部に順番に</b>処理します（イーチ＝each「それぞれ」）。素のJSの forEach にあたります。※まずはこの簡単版から。番号も使う発展版は特級「要素を全部処理」で。`,en:`Process <b>all caught elements in order</b> (each = "each one"). Corresponds to plain JS's forEach. * Start with this simple version. The advanced version that also uses the index is in Expert "Process every element".`},
   tags:[".each()"], prep:[
     {s:'$(".item").each(function(){ … })',d:{ja:'全要素をループ。$(this) が今の要素。',en:'Loops all elements. $(this) is the current one.'}}],
   html:`<button class="item">A</button>
<button class="item">B</button>
<button class="item">C</button>`,
   css:`body {
  display: grid;
  place-items: center;
  gap: 10px;
  min-height: 74vh;
}

.item {
  padding: 12px 24px;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  background: #8b5cf6;
  color: #fff;
  cursor: pointer;
}`,
   variations:[{label:{ja:"全部に色をつける",en:"Color them all"}, code:`$(".item").each(function() {
  $(this).css({ background: "#F5C24B", color: "#1a1305" });
});`}]}
]},

/* ============ jQuery上級 ============ */
{name:"上級", items:[
  {name:{ja:"いろんなイベント",en:"Various events"}, sub:"dblclick / hover", desc:{ja:`<b>.on("イベント名", …)</b> はクリック以外にも使えます。ダブルクリックやマウス乗せ(mouseenter)など。`,en:`<b>.on("eventName", …)</b> works for more than clicks — double-click, hover (mouseenter), and so on.`},
   tags:[".on()","dblclick","mouseenter"], prep:[
     {s:'.on("dblclick", …)',d:{ja:'すばやく2回クリック。',en:'Two quick clicks.'}},
     {s:'.on("mouseenter", …)',d:{ja:'マウスが乗った瞬間（離れるのは mouseleave）。',en:'The moment the mouse enters (leaving is mouseleave).'}}],
   variations:[
     {label:{ja:"ダブルクリック",en:"Double click"}, code:{ja:`$("#test").on("dblclick", function() {
  $(this).text("ダブルクリック！").css("background", "#4EC9B0");
});
// プレビューのボタンを素早く2回`,en:`$("#test").on("dblclick", function() {
  $(this).text("Double clicked!").css("background", "#4EC9B0");
});
// Press the preview button twice quickly`}},
     {label:{ja:"乗せると反応",en:"React on hover"}, code:{ja:`// チェーンで2つのイベントをまとめて登録
$("#test")
  .on("mouseenter", function() { $(this).css("background", "#F5C24B"); })
  .on("mouseleave", function() { $(this).css("background", "#8b5cf6"); });
// プレビューのボタンにマウスを乗せてね`,en:`// register two events at once by chaining
$("#test")
  .on("mouseenter", function() { $(this).css("background", "#F5C24B"); })
  .on("mouseleave", function() { $(this).css("background", "#8b5cf6"); });
// Hover the mouse over the preview button`}}]},

  {name:{ja:"キー入力",en:"Key input"}, sub:'.on("keydown")', desc:{ja:`キーボードの入力に反応します。押されたキーは <b>e.key</b> に入ります（素のJSと同じ）。`,en:`React to keyboard input. The pressed key is in <b>e.key</b> (same as plain JS).`},
   tags:[".on()","keydown","e.key"], prep:[
     {s:'.on("keydown", function(e){…})',d:{ja:'キーが押されたら実行。<b>(e)</b> は「何が起きたか」の詳しい情報が入る箱。',en:'Runs when a key is pressed. <b>(e)</b> is a box with detailed info about "what happened".'}},
     {s:'$(document)',d:{ja:'ページ<b>全体</b>で受け取る。どこを見ていてもキーを拾える。',en:'Receives on the <b>whole page</b>. Catches keys no matter where you are.'}},
     {s:'e.key',d:{ja:'押したキーの名前（"a" "Enter" "ArrowUp" など）。',en:'The pressed key\'s name ("a", "Enter", "ArrowUp", etc.).'}}],
   variations:[{label:{ja:"キーを表示",en:"Show the key"}, code:{ja:`$(document).on("keydown", function(e) {
  $("#test").text("押したキー: " + e.key);
});
// プレビューをクリックしてから何かキーを押す`,en:`$(document).on("keydown", function(e) {
  $("#test").text("key pressed: " + e.key);
});
// Click the preview first, then press any key`}}]},

  {name:{ja:"要素をたどる",en:"Traverse elements"}, sub:".parent / .next / .find", desc:{ja:`ある要素を起点に<b>親・となり・子孫</b>へ移動します。素のJSより短く書けます。<br><b>ポイント</b>：仲間に <b>.prev()</b>（前）、<b>.children()</b>（直接の子）、<b>.closest(".x")</b>（一番近い先祖）も。<b>ドットでつなげて</b>連続移動できます。`,en:`From an element, move to its <b>parent, sibling, or descendant</b>. Shorter than plain JS.<br><b>Key point</b>: related methods include <b>.prev()</b> (previous), <b>.children()</b> (direct children), <b>.closest(".x")</b> (nearest ancestor). <b>Chain with dots</b> to move repeatedly.`},
   tags:[".parent()",".next()",".find()"], prep:[
     {s:'$(el).parent()',d:{ja:'親要素へ。',en:'To the parent element.'}},
     {s:'$(el).next()',d:{ja:'すぐ次の要素へ。',en:'To the next element.'}},
     {s:'$(el).find(".x")',d:{ja:'中から探す。',en:'Search within.'}}],
   html:{ja:`<div class="box">
  <p id="me">わたし</p>
  <p>となりさん</p>
</div>`,en:`<div class="box">
  <p id="me">me</p>
  <p>neighbor</p>
</div>`},
   css:`body {
  padding: 24px;
  font-family: sans-serif;
}

.box {
  padding: 16px;
  border: 2px solid #8b5cf6;
  border-radius: 8px;
}`,
   variations:[{label:{ja:"たどってみる",en:"Traverse"}, code:{ja:`// 親の背景を変える
$("#me").parent().css("background", "#f2eefe");
// となりの文字を変える
$("#me").next().text("となりを変えた！");`,en:`// change the parent's background
$("#me").parent().css("background", "#f2eefe");
// change the neighbor's text
$("#me").next().text("Changed the neighbor!");`}}]},

  {name:{ja:"$(this) を使う",en:"Use $(this)"}, sub:{ja:"自分自身",en:"itself"}, desc:{ja:`イベントの中の <b>$(this)</b> は「<b>今 操作された要素</b>」を指します。同じ処理を多数の要素に付けるとき大活躍。`,en:`Inside an event, <b>$(this)</b> refers to <b>the element just acted on</b>. Great when attaching the same handler to many elements.`},
   tags:["$(this)"], prep:[
     {s:'$(this)',d:{ja:'イベントが起きた、その要素自身。',en:'The element itself where the event occurred.'}}],
   html:`<button class="item">A</button>
<button class="item">B</button>
<button class="item">C</button>`,
   css:`body {
  display: grid;
  place-items: center;
  gap: 10px;
  min-height: 74vh;
}

.item {
  padding: 12px 24px;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  background: #8b5cf6;
  color: #fff;
  cursor: pointer;
}`,
   variations:[{label:{ja:"押したボタンだけ",en:"Only the pressed one"}, code:{ja:`// 3つ全部に同じ処理。でも $(this) のおかげで押した1つだけ変わる
$(".item").on("click", function() {
  $(this).css({ background: "#F5C24B", color: "#1a1305" });
});
// どれか押してみて`,en:`// same handler on all three, but $(this) changes only the pressed one
$(".item").on("click", function() {
  $(this).css({ background: "#F5C24B", color: "#1a1305" });
});
// Press any one`}}]},

  {name:{ja:"入力に反応する",en:"React to input"}, sub:".on('input')", desc:{ja:`入力欄に打つ<b>たび</b>に反応。<b>$(this).val()</b> で今の中身が取れます。文字数カウンターやリアルタイム検索に。`,en:`React <b>every time</b> you type in a field. Get the current content with <b>$(this).val()</b>. For character counters and live search.`},
   tags:[".on('input')",".val()"], prep:[
     {s:'.on("input", …)',d:{ja:'入力欄の中身が<b>変わるたび</b>に実行。',en:'Runs <b>every time</b> the input\'s content changes.'}},
     {s:'$(this).val()',d:{ja:'今<b>入力されている文字</b>を取り出す。',en:'Gets the <b>currently typed text</b>.'}}],
   html:{ja:`<input id="box" type="text" placeholder="入力してね">
<div id="out">ここに映ります</div>`,en:`<input id="box" type="text" placeholder="type here">
<div id="out">shows here</div>`},
   css:`input {
  padding: 8px;
  font-size: 15px;
}
#out {
  margin-top: 8px;
}`,
   variations:[{label:{ja:"打つと映る",en:"Mirror as you type"}, code:{ja:`$("#box").on("input", function() {
  $("#out").text("入力中: " + $(this).val());
});
// プレビューの入力欄に打ってみて`,en:`$("#box").on("input", function() {
  $("#out").text("typing: " + $(this).val());
});
// Type into the preview's input`}}]},

  {name:{ja:"ホバーで切り替え",en:"Switch on hover"}, sub:".hover()", desc:{ja:`マウスを<b>乗せた時・離した時</b>の2つの動きを一度に書ける便利メソッド。メニューのハイライトなどに。`,en:`A handy method to write both the <b>enter and leave</b> behaviors at once. For menu highlights and the like.`},
   tags:[".hover()"], prep:[
     {s:{ja:'$(el).hover(乗せた時, 離した時)',en:'$(el).hover(onEnter, onLeave)'},d:{ja:'関数を<b>2つ</b>渡す。1つ目=乗せた瞬間、2つ目=離した瞬間。',en:'Pass <b>two</b> functions. First = on enter, second = on leave.'}}],
   variations:[{label:{ja:"乗せると光る",en:"Glow on hover"}, code:{ja:`$("#test").hover(
  function() { $(this).css({ background: "#F5C24B", color: "#000" }); },
  function() { $(this).css({ background: "", color: "" }); }
);
// プレビューのボタンにマウスを乗せてみて`,en:`$("#test").hover(
  function() { $(this).css({ background: "#F5C24B", color: "#000" }); },
  function() { $(this).css({ background: "", color: "" }); }
);
// Hover the mouse over the preview button`}}]},

  {name:{ja:"あとから増えた要素にも",en:"Even to future elements"}, sub:{ja:"イベント委譲",en:"Event delegation"}, desc:{ja:`普通の .on は<b>その時点で存在する要素</b>にしか効きません。あとから append した要素にも効かせるには、<b>親に .on を仕掛けて対象を第2引数で指定</b>します。超重要テク。`,en:`A plain .on only affects <b>elements that exist at that moment</b>. To also affect elements appended later, <b>attach .on to a parent and specify the target as the second argument</b>. A hugely important technique.`},
   tags:[{ja:"委譲",en:"delegation"},".on(event, selector, fn)"], prep:[
     {s:'$(document).on("click", ".x", …)',d:{ja:'documentで受けて「押されたのが <b>.x</b> なら実行」。<b>あとから増えた .x にも効く</b>。',en:'Receive on document and "run if the pressed thing is <b>.x</b>". <b>Works even on .x added later</b>.'}}],
   html:{ja:`<button id="add">要素を追加</button>
<div id="list"></div>`,en:`<button id="add">Add element</button>
<div id="list"></div>`},
   css:`#list div {
  padding: 8px;
  margin: 4px 0;
  background: #eee;
  cursor: pointer;
}
button {
  padding: 8px 14px;
}`,
   variations:[
     {label:{ja:"委譲あり（効く）",en:"With delegation (works)"}, code:{ja:`$("#add").on("click", function() {
  $("#list").append("<div>あとから来た要素（押してみて）</div>");
});

// 親(document)に仕掛ける→未来の要素にも効く
$(document).on("click", "#list div", function() {
  $(this).css({ background: "#F5C24B" });
});`,en:`$("#add").on("click", function() {
  $("#list").append("<div>added later (try clicking)</div>");
});

// attach to the parent (document) -> works on future elements too
$(document).on("click", "#list div", function() {
  $(this).css({ background: "#F5C24B" });
});`}},
     {label:{ja:"普通のon（効かない）",en:"Plain on (doesn't work)"}, code:{ja:`$("#add").on("click", function() {
  $("#list").append("<div>あとから来た要素（押しても無反応）</div>");
});

// この時点で #list div は0個→誰にも登録されない
$("#list div").on("click", function() {
  $(this).css({ background: "#F5C24B" });
});`,en:`$("#add").on("click", function() {
  $("#list").append("<div>added later (no reaction on click)</div>");
});

// at this point there are 0 #list div -> nothing gets registered
$("#list div").on("click", function() {
  $(this).css({ background: "#F5C24B" });
});`}}]},

  {name:{ja:"イベントを解除する",en:"Remove an event"}, sub:".off()", desc:{ja:`<b>.off()</b> で「もう反応しないで」と登録を解除できます。「1回だけ有効なボタン」などに。1回限定なら <b>.one()</b> という便利版も。`,en:`Use <b>.off()</b> to unregister, telling it "stop reacting". For "buttons valid only once" etc. For a one-time handler there's the handy <b>.one()</b>.`},
   tags:[".off()",".one()"], prep:[
     {s:'$(el).off("click")',d:{ja:'clickの登録を<b>ぜんぶ解除</b>。',en:'<b>Removes all</b> click registrations.'}},
     {s:'$(el).one("click", …)',d:{ja:'<b>1回だけ</b>実行して自動で解除される。',en:'Runs <b>once</b> and auto-unregisters.'}}],
   variations:[
     {label:{ja:"1回だけ反応",en:"React only once"}, code:{ja:`$("#test").one("click", function() {
  $(this).text("もう押せません");
  $(this).css({ background: "#999" });
});
// 2回目からは何も起きない`,en:`$("#test").one("click", function() {
  $(this).text("Can't press again");
  $(this).css({ background: "#999" });
});
// nothing happens from the second press on`}}]},

  {name:{ja:"カーソルを移す",en:"Move the cursor"}, sub:".focus()", desc:{ja:`<b>.focus（フォーカス）</b>を呼ぶと、その入力欄に<b>カーソルを自動でセット</b>できます。「開いたらすぐ入力欄にカーソル」「未入力の欄へ引き戻す」など、ユーザーの手間を減らせます。`,en:`Calling <b>.focus</b> <b>places the cursor automatically</b> in that input. Reduces user effort — "cursor in the field the moment it opens", "pull back to an empty field", etc.`},
   tags:[".focus()"], prep:[
     {s:'$(input).focus()',d:{ja:'その入力欄に<b>カーソルを移す</b>（すぐ打ち始められる状態にする）。',en:'<b>Moves the cursor</b> to that input (ready to type right away).'}},
     {s:{ja:'"blur" イベント',en:'"blur" event'},d:{ja:'入力欄から<b>カーソルが外れた</b>瞬間に発火（ブラー）。2つ目の例で使用。',en:'Fires the moment <b>focus leaves</b> the input (blur). Used in the second example.'}},
     {s:'.val().trim() === ""',d:{ja:'入力値の前後の空白を取り除いて、<b>空かどうか</b>を判定。',en:'Strips surrounding spaces and checks <b>whether it\'s empty</b>.'}}],
   html:{ja:`<button id="go">押すと下の欄にカーソル</button>
<input id="box" type="text" placeholder="ここに移ります">`,en:`<button id="go">Press to focus the field below</button>
<input id="box" type="text" placeholder="cursor moves here">`},
   css:`button {
  padding: 8px 14px;
  cursor: pointer;
}
input {
  display: block;
  margin-top: 10px;
  padding: 8px;
  font-size: 15px;
}`,
   variations:[
     {label:{ja:"カーソルを移す",en:"Move the cursor"}, code:{ja:`$("#go").on("click", function() {
  $("#box").focus();      // 入力欄にカーソルがセットされる
});
// ボタンを押すと下の欄に自動でカーソル`,en:`$("#go").on("click", function() {
  $("#box").focus();      // the cursor is set in the input
});
// Pressing the button auto-focuses the field below`}},
     {label:{ja:"空なら引き戻す",en:"Pull back if empty"}, code:{ja:`// 未入力のまま離れたら、その欄へカーソルを戻す
$("#box").on("blur", function() {
  if ($(this).val().trim() === "") {
    $(this).focus();      // 埋めるまで先へ進ませない
  }
});
// 空のまま欄の外をクリックしてみて`,en:`// if left empty, return the cursor to that field
$("#box").on("blur", function() {
  if ($(this).val().trim() === "") {
    $(this).focus();      // don't let them move on until filled
  }
});
// Click outside the field while it's empty`}}]},

  {name:{ja:"値を集める",en:"Collect values"}, sub:".map()", desc:{ja:`選んだ要素<b>それぞれから値を取り出して、1本の配列にまとめる</b>のが <b>.map（マップ）</b>。チェックされた項目名の一覧づくりなどで活躍します。最後に <b>.get()</b> を付けて普通の配列に変換するのがお約束。`,en:`<b>.map</b> <b>pulls a value from each selected element and gathers them into one array</b>. Great for building a list of checked item names. It's convention to add <b>.get()</b> at the end to convert to a plain array.`},
   tags:[".map()",".get()"], prep:[
     {s:{ja:'$(".x").map(function(){ return 値 })',en:'$(".x").map(function(){ return value })'},d:{ja:'各要素から<b>return した値</b>を集める。',en:'Collects the <b>value returned</b> from each element.'}},
     {s:'this.value',d:{ja:'map の中で、<b>いま処理中の入力欄の値</b>（$ を付けない書き方。1個ずつを指す）。',en:'Inside map, <b>the value of the input being processed</b> (the no-$ form; refers to each one).'}},
     {s:'.get()',d:{ja:'jQueryの集まりを<b>普通の配列</b>に変換する（チェーンの最後に付ける）。',en:'Converts the jQuery set into a <b>plain array</b> (added at the end of the chain).'}},
     {s:':checked',d:{ja:'<b>チェックが入っている</b>入力欄だけを選ぶ目印。',en:'A marker to select only <b>checked</b> inputs.'}}],
   html:{ja:`<label><input class="fruit" type="checkbox" value="りんご" checked> りんご</label><br>
<label><input class="fruit" type="checkbox" value="みかん" checked> みかん</label><br>
<label><input class="fruit" type="checkbox" value="ぶどう"> ぶどう</label><br>
<button id="show">選んだものを集める</button>`,en:`<label><input class="fruit" type="checkbox" value="apple" checked> apple</label><br>
<label><input class="fruit" type="checkbox" value="orange" checked> orange</label><br>
<label><input class="fruit" type="checkbox" value="grape"> grape</label><br>
<button id="show">Collect selected</button>`},
   css:`label {
  display: inline-block;
  margin: 3px 0;
}
button {
  margin-top: 8px;
  padding: 8px 14px;
}`,
   variations:[{label:{ja:"チェックを集める",en:"Collect checks"}, code:{ja:`$("#show").on("click", function() {
  // チェックされた項目の value を集めて配列にする
  const checked = $(".fruit:checked").map(function() {
    return this.value;
  }).get();

  console.log(checked);   // 例: ["りんご", "みかん"]（結果はログ欄）
});
// チェックを変えてボタンを押してみて`,en:`$("#show").on("click", function() {
  // collect the values of checked items into an array
  const checked = $(".fruit:checked").map(function() {
    return this.value;
  }).get();

  console.log(checked);   // e.g. ["apple", "orange"] (result in the log)
});
// Change the checks and press the button`}}]}
]},

/* ============ jQuery特級 ============ */
{name:"特級", items:[
  {name:{ja:"メソッドチェーン",en:"Method chaining"}, sub:{ja:"連結して書く",en:"link calls together"}, desc:{ja:`jQueryは <b>.text().css().fadeIn()</b> のように<b>ドットでつなげて</b>連続実行できます。短くまとまるのが最大の魅力。<br><b>仕組み</b>：各メソッドが<b>jQueryオブジェクトを返す</b>から次を続けられる。ただし <b>.text()</b> のように<b>値を取得</b>する呼び方をすると、そこでチェーンは途切れます。`,en:`jQuery can run calls in a row by <b>chaining with dots</b>, like <b>.text().css().fadeIn()</b>. The compactness is its biggest appeal.<br><b>How it works</b>: each method <b>returns the jQuery object</b>, so you can continue. But a call that <b>gets a value</b> (like <b>.text()</b> with no argument) breaks the chain there.`},
   tags:[{ja:"チェーン",en:"chain"}], prep:[
     {s:'$(el).A().B().C()',d:{ja:'同じ要素への操作を<b>つなげて</b>書ける。',en:'Write operations on the same element <b>chained together</b>.'}}],
   variations:[{label:{ja:"つなげて書く",en:"Write chained"}, code:{ja:`// 1つの要素に、文字→色→背景→角丸を一気に
$("#test")
  .text("チェーンで一気に！")
  .css("color", "#1a1305")
  .css("background", "#F5C24B")
  .css("border-radius", "999px");`,en:`// text -> color -> background -> radius on one element at once
$("#test")
  .text("All at once with a chain!")
  .css("color", "#1a1305")
  .css("background", "#F5C24B")
  .css("border-radius", "999px");`}}]},

  {name:{ja:"データ属性",en:"Data attributes"}, sub:".data()", desc:{ja:`HTMLの <b>data-○○</b> 属性を <b>.data("○○")</b> で読み取れます。要素に情報を持たせるのに便利。<br><b>ポイント</b>：<b>data-user-name</b> は <b>.data("userName")</b> で読む（ハイフンの後が大文字＝キャメル）。素のJSの dataset と同じ考え方です。`,en:`Read HTML <b>data-xxx</b> attributes with <b>.data("xxx")</b>. Handy for attaching info to elements.<br><b>Key point</b>: <b>data-user-name</b> is read as <b>.data("userName")</b> (letter after a hyphen is capitalized = camelCase). Same idea as plain JS's dataset.`},
   tags:[".data()","data-"], prep:[
     {s:'$(el).data("name")',d:{ja:'data-name の値を取得する。',en:'Gets the data-name value.'}}],
   html:{ja:`<button class="user" data-name="たろう">ユーザーA</button>
<button class="user" data-name="はなこ">ユーザーB</button>
<p id="out"></p>`,en:`<button class="user" data-name="Taro">User A</button>
<button class="user" data-name="Hanako">User B</button>
<p id="out"></p>`},
   css:`body {
  padding: 24px;
  font-family: sans-serif;
}

button {
  margin: 4px;
  padding: 8px 14px;
  border: none;
  border-radius: 8px;
  background: #8b5cf6;
  color: #fff;
  cursor: pointer;
}`,
   variations:[{label:{ja:"データを取り出す",en:"Read the data"}, code:{ja:`$(".user").on("click", function() {
  // data-name の値を読み取る
  const name = $(this).data("name");
  $("#out").text("選んだ人: " + name);
});
// ボタンを押すと、隠し持った名前が出る`,en:`$(".user").on("click", function() {
  // read the data-name value
  const name = $(this).data("name");
  $("#out").text("chosen: " + name);
});
// Press a button to reveal the hidden name`}}]},

  {name:{ja:"アニメの完了後",en:"After animation"}, sub:{ja:"コールバック",en:"Callback"}, desc:{ja:`<b>.fadeOut(時間, 完了後の処理)</b> のように、アニメが<b>終わったあとに動く処理</b>を渡せます。順番に演出したい時に。`,en:`Pass work that <b>runs after the animation finishes</b>, like <b>.fadeOut(time, done)</b>. For staging effects in sequence.`},
   tags:[".fadeOut()",{ja:"コールバック",en:"callback"}], prep:[
     {s:'.fadeOut(600, function(){…})',d:{ja:'消え終わったら、中の処理を実行する。',en:'Runs the body once it has finished fading out.'}}],
   variations:[{label:{ja:"消えてから実行",en:"Run after fading out"}, code:{ja:`// 消え終わってから、文字を変えて また出す
$("#test").fadeOut(600, function() {
  $(this).text("消えて…また出た！").fadeIn(600);
});`,en:`// after fading out, change the text and fade back in
$("#test").fadeOut(600, function() {
  $(this).text("Gone... and back!").fadeIn(600);
});`}}]},

  {name:{ja:"要素を全部処理",en:"Process every element"}, sub:{ja:".each() 発展",en:".each() advanced"}, desc:{ja:`応用の「全部に処理」の<b>発展版</b>。.each（イーチ）は<b>何番目か（index）</b>も受け取れて、番号を振ったり順にアニメさせたりできます。`,en:`The <b>advanced version</b> of Applied's "process all". .each can also receive <b>the index</b>, so you can number items or animate them in order.`},
   tags:[".each()","index"], prep:[
     {s:'$(el).each(function(i) { … })',d:{ja:'要素を1個ずつ処理。<b>i</b> は 0 から始まる番号。',en:'Process elements one by one. <b>i</b> is the index starting from 0.'}}],
   html:`<div class="row">A</div>
<div class="row">B</div>
<div class="row">C</div>`,
   css:`.row {
  padding: 8px;
  background: #eee;
  margin: 4px 0;
}`,
   variations:[{label:{ja:"番号を振る",en:"Number them"}, code:{ja:`$(".row").each(function(i) {
  // i は 0,1,2 … 表示は +1 して 1,2,3
  $(this).text((i + 1) + "番目: " + $(this).text());
});`,en:`$(".row").each(function(i) {
  // i is 0,1,2 … display as +1 to get 1,2,3
  $(this).text("#" + (i + 1) + ": " + $(this).text());
});`}}]},

  {name:{ja:"少し待って実行",en:"Run after a short wait"}, sub:{ja:"setTimeout と併用",en:"with setTimeout"}, desc:{ja:`jQuery自体には遅延はないので、<b>setTimeout</b> と組み合わせます。「押した2秒後に消す」など、タイミングをずらす技。`,en:`jQuery itself has no delay, so combine it with <b>setTimeout</b>. A technique for shifting timing, like "hide 2 seconds after pressing".`},
   tags:["setTimeout",".fadeOut()"], prep:[
     {s:{ja:'setTimeout(処理, 2000)',en:'setTimeout(callback, 2000)'},d:{ja:'<b>2000ミリ秒(=2秒)後</b>に処理を1回実行。',en:'Runs the work once <b>after 2000 ms (=2s)</b>.'}}],
   variations:[{label:{ja:"2秒後に消える",en:"Vanish after 2s"}, code:{ja:`$("#test").text("2秒後に消えます");

setTimeout(function() {
  $("#test").fadeOut(500);
}, 2000);`,en:`$("#test").text("Vanishes in 2 seconds");

setTimeout(function() {
  $("#test").fadeOut(500);
}, 2000);`}}]},

  {name:{ja:"絞り込む",en:"Narrow down"}, sub:".filter / .not", desc:{ja:`選んだ要素の中から<b>条件に合うものだけ残す</b>（filter）／<b>除外する</b>（not）。「offクラス以外を全部光らせる」のような細かい指定が1行に。`,en:`From selected elements, <b>keep only those matching</b> (filter) / <b>exclude</b> (not). Fine-grained specs like "light up everything except .off" fit in one line.`},
   tags:[".filter()",".not()"], prep:[
     {s:'$(".x").filter(".on")',d:{ja:'.x のうち <b>.on が付いたものだけ</b>に絞る。',en:'Narrows .x to <b>only those with .on</b>.'}},
     {s:'$(".x").not(".on")',d:{ja:'.x のうち .on を<b>除いたもの</b>。',en:'The .x with .on <b>excluded</b>.'}}],
   html:`<div class="box on">A</div>
<div class="box">B</div>
<div class="box on">C</div>
<div class="box">D</div>`,
   css:`.box {
  display: inline-block;
  padding: 14px 18px;
  margin: 4px;
  background: #eee;
}`,
   variations:[
     {label:{ja:"onだけ紫に",en:"Only .on to purple"}, code:{ja:`$(".box").filter(".on").css({ background: "#8b5cf6", color: "#fff" });
// AとCだけ変わる`,en:`$(".box").filter(".on").css({ background: "#8b5cf6", color: "#fff" });
// only A and C change`}},
     {label:{ja:"on以外を薄く",en:"Fade non-.on"}, code:{ja:`$(".box").not(".on").css({ opacity: 0.3 });
// BとDだけ薄くなる`,en:`$(".box").not(".on").css({ opacity: 0.3 });
// only B and D fade`}}]},

  {name:{ja:"何番目を選ぶ？",en:"Which index?"}, sub:".eq() / .index()", desc:{ja:`並んだ要素の<b>◯番目だけ</b>操作するなら <b>.eq(番号)</b>（0始まり）。逆に「押されたのは何番目？」は <b>.index()</b> で分かります。`,en:`To operate on <b>just the Nth</b> of lined-up elements, use <b>.eq(index)</b> (0-based). Conversely, "which one was pressed?" is answered by <b>.index()</b>.`},
   tags:[".eq()",".index()"], prep:[
     {s:'$(".x").eq(1)',d:{ja:'見つかった中の<b>2番目</b>（0から数えるので1）。',en:'The <b>2nd</b> of those found (index 1 since counting starts at 0).'}},
     {s:'$(this).index()',d:{ja:'兄弟の中で<b>何番目か</b>（0始まり）を返す。',en:'Returns <b>its position</b> among siblings (0-based).'}}],
   html:{ja:`<div class="row">1行目</div>
<div class="row">2行目</div>
<div class="row">3行目</div>`,en:`<div class="row">row 1</div>
<div class="row">row 2</div>
<div class="row">row 3</div>`},
   css:`.row {
  padding: 8px;
  margin: 4px 0;
  background: #eee;
  cursor: pointer;
}`,
   variations:[
     {label:{ja:"2番目だけ変える",en:"Change only the 2nd"}, code:{ja:`$(".row").eq(1).css({ background: "#F5C24B" });
// 0,1,2… と数えるので eq(1) は2行目`,en:`$(".row").eq(1).css({ background: "#F5C24B" });
// counting 0,1,2… so eq(1) is the 2nd row`}},
     {label:{ja:"何番目か知る",en:"Know the index"}, code:{ja:`$(".row").on("click", function() {
  console.log("押されたのは " + ($(this).index() + 1) + " 行目");
});
// どれか押してみて（結果はログ）`,en:`$(".row").on("click", function() {
  console.log("pressed row " + ($(this).index() + 1));
});
// Press any one (result in the log)`}}]},

  {name:{ja:"イベントを起こす",en:"Fire an event"}, sub:".trigger()", desc:{ja:`<b>.trigger（トリガー）</b>を使うと、実際に押さなくても<b>プログラムからクリックなどを発生</b>させられます（.trigger("click") でクリックを発火）。「開いた瞬間に自動で1回押しておく」「あるボタンを押したら別の処理も連動させる」といった連携に使います。`,en:`With <b>.trigger</b> you can <b>fire a click (etc.) from code</b> without an actual press (.trigger("click") fires a click). Use it for coordination like "auto-press once on open" or "pressing one button also runs another action".`},
   tags:[".trigger()"], prep:[
     {s:'$(el).trigger("click")',d:{ja:'その要素の click を<b>プログラムから発火</b>する（人が押したのと同じ扱いになる）。',en:'<b>Fires the element\'s click from code</b> (treated the same as a real press).'}}],
   html:{ja:`<button id="real">本物のボタン（数える）</button>
<button id="auto">こっちで上を自動3回押す</button>
<p id="count">0 回</p>`,en:`<button id="real">Real button (counts)</button>
<button id="auto">This auto-presses the above 3 times</button>
<p id="count">0 times</p>`},
   css:`button {
  padding: 8px 14px;
  margin: 4px;
  cursor: pointer;
}
#count {
  font-weight: bold;
}`,
   variations:[{label:{ja:"自動で押す",en:"Auto-press"}, code:{ja:`let n = 0;
$("#real").on("click", function() {
  n = n + 1;
  $("#count").text(n + " 回");
});

$("#auto").on("click", function() {
  // 本物のボタンを、プログラムから3回押す
  $("#real").trigger("click");
  $("#real").trigger("click");
  $("#real").trigger("click");
});
// プレビューのボタンを押すと数字が3ずつ増える`,en:`let n = 0;
$("#real").on("click", function() {
  n = n + 1;
  $("#count").text(n + " times");
});

$("#auto").on("click", function() {
  // press the real button 3 times from code
  $("#real").trigger("click");
  $("#real").trigger("click");
  $("#real").trigger("click");
});
// Pressing the lower button increases the count by 3`}}]}
]},

/* ============ jQuery応用 ============ */
{name:"応用", items:[
  {name:{ja:"要素を追加",en:"Add an element"}, sub:".append()", desc:{ja:`<b>.append（アペンド＝末尾に追加）</b>で要素の中に新しい要素を足します。リスト追加などが1行で書けます。<br><b>ポイント</b>：<b>.append</b> は中の<b>最後</b>、<b>.prepend</b> は中の<b>最初</b>に足す。<b>外側</b>の前後は初級の .before / .after。文字列でタグを書くだけで新要素になります。`,en:`<b>.append</b> (add to the end) adds a new element inside another. List additions fit in one line.<br><b>Key point</b>: <b>.append</b> adds to the <b>end</b> inside, <b>.prepend</b> to the <b>start</b> inside. For <b>outside</b> before/after, use Beginner's .before / .after. Just writing tags as a string makes a new element.`},
   tags:[".append()"], prep:[
     {s:'$(el).append("<li>…</li>")',d:{ja:'中の<b>最後</b>に足す。',en:'Adds to the <b>end</b> inside.'}}],
   html:{ja:`<button id="add">追加</button>
<ul id="list"></ul>`,en:`<button id="add">Add</button>
<ul id="list"></ul>`},
   css:`body {
  padding: 24px;
  font-family: sans-serif;
}

button {
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  background: #8b5cf6;
  color: #fff;
  cursor: pointer;
}`,
   variations:[{label:{ja:"押すと増える",en:"Grows on press"}, code:{ja:`let n = 0;
$("#add").on("click", function() {
  n++;
  $("#list").append("<li>項目 " + n + "</li>");
});`,en:`let n = 0;
$("#add").on("click", function() {
  n++;
  $("#list").append("<li>item " + n + "</li>");
});`}}]},

  {name:{ja:"入力欄の値",en:"Input value"}, sub:".val()", desc:{ja:`<b>.val（バル＝value「値」の略）</b>で入力欄の中身を取得・設定。フォームで活躍します。<br><b>ポイント</b>：<b>引数なし</b>で取得、<b>.val("文字")</b> で<b>設定</b>（入力欄に文字を入れる／空にする）。select の選択値も .val で扱えます（チェックのON/OFFは .prop("checked") で）。`,en:`<b>.val</b> (short for value) gets or sets an input's content. Great in forms.<br><b>Key point</b>: <b>no argument</b> gets it; <b>.val("text")</b> <b>sets</b> it (put text in / clear the field). A select's chosen value is also handled with .val (checkbox ON/OFF is via .prop("checked")).`},
   tags:[".val()"], prep:[
     {s:'$(input).val()',d:{ja:'今の入力値を取得する。',en:'Gets the current input value.'}}],
   html:{ja:`<input id="box" placeholder="打ってみて">
<p id="out"></p>`,en:`<input id="box" placeholder="type something">
<p id="out"></p>`},
   css:`body {
  padding: 24px;
  font-family: sans-serif;
}

input {
  padding: 8px 12px;
  font-size: 16px;
}

#out {
  font-size: 20px;
  color: #8b5cf6;
}`,
   variations:[{label:{ja:"打った文字を映す",en:"Mirror typed text"}, code:{ja:`$("#box").on("input", function() {
  $("#out").text($(this).val());
});
// プレビューの入力欄に打ってみて`,en:`$("#box").on("input", function() {
  $("#out").text($(this).val());
});
// Type into the preview's input`}}]},

  {name:{ja:"アコーディオン",en:"Accordion"}, sub:{ja:"jQuery版",en:"jQuery version"}, desc:{ja:`質問を押すと答えがスッと開くFAQ。<b>$(this).next()</b>（押した質問の次＝答え）を <b>.slideToggle()</b> で開閉します。`,en:`An FAQ where pressing a question slides the answer open. Toggle <b>$(this).next()</b> (the element after the pressed question = the answer) with <b>.slideToggle()</b>.`},
   tags:[".next()",".slideToggle()"], prep:[
     {s:'$(this).next()',d:{ja:'押した質問の<b>すぐ次</b>の要素（＝答え）。',en:'The element <b>right after</b> the pressed question (= the answer).'}}],
   html:{ja:`<div class="q">Q. jQueryは簡単？</div>
<div class="a" style="display:none">A. slideToggleで一瞬！</div>
<div class="q">Q. 何から始める？</div>
<div class="a" style="display:none">A. この道場で試そう。</div>`,en:`<div class="q">Q. Is jQuery easy?</div>
<div class="a" style="display:none">A. Instant with slideToggle!</div>
<div class="q">Q. Where do I start?</div>
<div class="a" style="display:none">A. Try it in this dojo.</div>`},
   css:`body {
  padding: 24px;
  font-family: sans-serif;
}

.q {
  padding: 12px;
  background: #8b5cf6;
  color: #fff;
  cursor: pointer;
  margin-top: 6px;
  border-radius: 6px;
}

.a {
  padding: 12px;
  background: #f6f3ff;
  border-radius: 6px;
}`,
   variations:[{label:{ja:"開閉する",en:"Open/close"}, code:{ja:`$(".q").on("click", function() {
  // 押した質問の「次の要素（＝答え）」だけを開閉
  $(this).next().slideToggle(250);
});
// プレビューの質問を押してね`,en:`$(".q").on("click", function() {
  // toggle only "the next element (= the answer)" of the pressed question
  $(this).next().slideToggle(250);
});
// Press a question in the preview`}}]},

  {name:{ja:"リストに追加",en:"Add to a list"}, sub:{ja:"入力→append",en:"input -> append"}, desc:{ja:`入力した文字を<b>ボタンでリストに追加</b>する実用パーツ。<b>.append()</b> で末尾に足すだけ。ミニTODOの土台。`,en:`A practical part that <b>adds typed text to a list with a button</b>. Just add to the end with <b>.append()</b>. The basis of a mini to-do.`},
   tags:[".append()",".val()"], prep:[
     {s:'$("<li>")',d:{ja:'新しい&lt;li&gt;要素を<b>その場で作る</b>書き方。',en:'A way to <b>create a new &lt;li&gt; on the spot</b>.'}},
     {s:'.text(text).appendTo("#tasks")',d:{ja:'文字を安全に入れて、リストの<b>末尾に置く</b>（アペンド＝追加）。',en:'Safely set the text and <b>place it at the end</b> of the list (append).'}},
     {s:'$(input).val("")',d:{ja:'入力欄を<b>空に戻す</b>（追加後に便利）。',en:'<b>Clears the input</b> (handy after adding).'}}],
   html:{ja:`<input id="task" type="text" placeholder="やること">
<button id="add">追加</button>
<ul id="tasks"></ul>`,en:`<input id="task" type="text" placeholder="a task">
<button id="add">Add</button>
<ul id="tasks"></ul>`},
   css:`input {
  padding: 8px;
}
button {
  padding: 8px 14px;
}
li {
  padding: 4px 0;
}`,
   variations:[{label:{ja:"追加する",en:"Add"}, code:{ja:`$("#add").on("click", function() {
  const text = $("#task").val();
  if (text === "") return;        // 空なら追加しない
  // "<li>"+text ではなく .text(text) を使う。
  // 入力された文字をタグとして実行させない安全な書き方
  $("<li>").text(text).appendTo("#tasks");
  $("#task").val("");             // 入力欄を空に
});
// 入力して「追加」を押してね`,en:`$("#add").on("click", function() {
  const text = $("#task").val();
  if (text === "") return;        // don't add if empty
  // use .text(text), not "<li>"+text.
  // the safe way that doesn't run typed text as tags
  $("<li>").text(text).appendTo("#tasks");
  $("#task").val("");             // clear the input
});
// Type and press "Add"`}}]},

  {name:{ja:"全選択チェック",en:"Select-all checkbox"}, sub:{ja:"まとめてON/OFF",en:"toggle all"}, desc:{ja:`「すべて選択」を押すと<b>下のチェックが全部ON/OFF</b>になる、メール画面などの定番。<b>.prop("checked", …)</b> をまとめて適用するだけ。`,en:`Press "Select all" to <b>turn every checkbox below ON/OFF</b> — a staple of email screens. Just apply <b>.prop("checked", …)</b> in bulk.`},
   tags:[".prop()","checked"], prep:[
     {s:{ja:'"change" イベント',en:'"change" event'},d:{ja:'チェックの状態が<b>変わった瞬間</b>に発火（clickでも動くがこちらが正式）。',en:'Fires the moment the check state <b>changes</b> (click works too, but this is the proper one).'}},
     {s:'$(".item-check").prop("checked", true)',d:{ja:'該当チェックを<b>全部ON</b>に。',en:'Turns those checkboxes <b>all ON</b>.'}},
     {s:'$(this).prop("checked")',d:{ja:'押した親チェック自身の<b>今の状態</b>（true/false）。',en:'The parent checkbox\'s <b>current state</b> (true/false).'}}],
   html:{ja:`<label><input id="all" type="checkbox"> <b>すべて選択</b></label>
<hr>
<label><input class="item-check" type="checkbox"> りんご</label><br>
<label><input class="item-check" type="checkbox"> みかん</label><br>
<label><input class="item-check" type="checkbox"> ぶどう</label>`,en:`<label><input id="all" type="checkbox"> <b>Select all</b></label>
<hr>
<label><input class="item-check" type="checkbox"> apple</label><br>
<label><input class="item-check" type="checkbox"> orange</label><br>
<label><input class="item-check" type="checkbox"> grape</label>`},
   css:`label {
  display: inline-block;
  margin: 4px 0;
}`,
   variations:[{label:{ja:"連動させる",en:"Link them"}, code:{ja:`$("#all").on("change", function() {
  // 親の状態(true/false)を、子ぜんぶにコピー
  const on = $(this).prop("checked");
  $(".item-check").prop("checked", on);
});
// 「すべて選択」を押してみて`,en:`$("#all").on("change", function() {
  // copy the parent's state (true/false) to all children
  const on = $(this).prop("checked");
  $(".item-check").prop("checked", on);
});
// Press "Select all"`}}]},

  {name:{ja:"モーダル窓（jQuery版）",en:"Modal (jQuery version)"}, sub:{ja:"fadeで開閉",en:"open/close with fade"}, desc:{ja:`素のJSでは class 切替＋CSSで作ったモーダルが、jQueryなら <b>.fadeIn / .fadeOut</b> だけで完成。比べると「jQueryの楽さ」がよく分かります。`,en:`A modal that took class toggling + CSS in plain JS is done in jQuery with just <b>.fadeIn / .fadeOut</b>. Comparing shows how easy jQuery is.`},
   tags:[".fadeIn()",".fadeOut()"], prep:[
     {s:'$("#overlay").fadeIn(200)',d:{ja:'暗幕ごと<b>ふわっと表示</b>。',en:'<b>Fades in</b> along with the backdrop.'}},
     {s:'e.target',d:{ja:'実際にクリックされた要素。暗幕自身なら閉じる、に使う。',en:'The actually-clicked element. Used to close when it\'s the backdrop itself.'}}],
   html:{ja:`<button id="open">モーダルを開く</button>
<div id="overlay" style="display:none">
  <div id="modal">
    <h3>お知らせ</h3>
    <p>これがモーダル窓です</p>
    <button id="close">閉じる</button>
  </div>
</div>`,en:`<button id="open">Open modal</button>
<div id="overlay" style="display:none">
  <div id="modal">
    <h3>Notice</h3>
    <p>This is a modal window</p>
    <button id="close">Close</button>
  </div>
</div>`},
   css:{ja:`#overlay {
  position: fixed;
  inset: 0;                      /* 画面全体に広げる */
  background: rgba(0,0,0,.55);   /* 半透明の暗幕 */
  display: grid;
  place-items: center;
}
#modal {
  background: #fff;
  padding: 24px 32px;
  border-radius: 12px;
  text-align: center;
}
button {
  padding: 8px 16px;
  cursor: pointer;
}`,en:`#overlay {
  position: fixed;
  inset: 0;                      /* cover the whole screen */
  background: rgba(0,0,0,.55);   /* semi-transparent backdrop */
  display: grid;
  place-items: center;
}
#modal {
  background: #fff;
  padding: 24px 32px;
  border-radius: 12px;
  text-align: center;
}
button {
  padding: 8px 16px;
  cursor: pointer;
}`},
   variations:[{label:{ja:"開閉させる",en:"Open/close"}, code:{ja:`$("#open").on("click", function() {
  $("#overlay").fadeIn(200);
});

$("#close").on("click", function() {
  $("#overlay").fadeOut(200);
});

// 暗幕（外側）を押しても閉じる
$("#overlay").on("click", function(e) {
  if (e.target === this) $(this).fadeOut(200);
});`,en:`$("#open").on("click", function() {
  $("#overlay").fadeIn(200);
});

$("#close").on("click", function() {
  $("#overlay").fadeOut(200);
});

// clicking the backdrop (outside) also closes it
$("#overlay").on("click", function(e) {
  if (e.target === this) $(this).fadeOut(200);
});`}}]},

  {name:{ja:"入力フォーム検証",en:"Form validation"}, sub:{ja:"空欄チェック",en:"empty check"}, desc:{ja:`入力欄を離れた瞬間に<b>空欄をチェックして、問題があれば枠を赤く</b>する実用フォーム。<b>.blur</b>（入力欄から離れた瞬間）で都度チェックし、<b>.focus</b>（クリックして入り直した瞬間）で赤をリセットします。会員登録などで毎回見るあの動きです。`,en:`A practical form that, the moment you leave a field, <b>checks for emptiness and reddens the border if there's a problem</b>. Check each time on <b>.blur</b> (leaving the field) and reset the red on <b>.focus</b> (clicking back in). The behavior you see in every sign-up form.`},
   tags:[".on('blur')",".on('focus')",".val()"], prep:[
     {s:{ja:'"blur" イベント',en:'"blur" event'},d:{ja:'入力欄から<b>カーソルが外れた</b>瞬間に発火（ブラー）。',en:'Fires the moment <b>focus leaves</b> the input (blur).'}},
     {s:{ja:'"focus" イベント',en:'"focus" event'},d:{ja:'入力欄を<b>クリックして入った</b>瞬間に発火（フォーカス）。',en:'Fires the moment you <b>click into</b> the input (focus).'}},
     {s:'.val().trim()',d:{ja:'入力値の前後の空白を取り除く。これが空 "" なら未入力。',en:'Strips surrounding spaces of the input. Empty "" means not filled in.'}}],
   html:{ja:`<input id="name" type="text" placeholder="お名前（必須）">
<p id="msg"></p>`,en:`<input id="name" type="text" placeholder="Your name (required)">
<p id="msg"></p>`},
   css:{ja:`input {
  padding: 8px;
  font-size: 15px;
  border: 2px solid #E2DDD3;
  border-radius: 6px;
}
input.ng {
  border-color: #C25D5D;   /* エラー時は赤枠 */
  background: #FBF0F0;
}
#msg {
  color: #C25D5D;
  font-size: 12px;
  margin-top: 6px;
}`,en:`input {
  padding: 8px;
  font-size: 15px;
  border: 2px solid #E2DDD3;
  border-radius: 6px;
}
input.ng {
  border-color: #C25D5D;   /* red border on error */
  background: #FBF0F0;
}
#msg {
  color: #C25D5D;
  font-size: 12px;
  margin-top: 6px;
}`},
   variations:[{label:{ja:"検証する",en:"Validate"}, code:{ja:`$("#name").on("blur", function() {
  // 欄から離れた瞬間に、空かどうかチェック
  if ($(this).val().trim() === "") {
    $(this).addClass("ng");
    $("#msg").text("お名前を入力してください");
  }
});

$("#name").on("focus", function() {
  // 入り直したら赤をリセット
  $(this).removeClass("ng");
  $("#msg").text("");
});
// 何も入れずに欄の外をクリックしてみて`,en:`$("#name").on("blur", function() {
  // the moment you leave the field, check if it's empty
  if ($(this).val().trim() === "") {
    $(this).addClass("ng");
    $("#msg").text("Please enter your name");
  }
});

$("#name").on("focus", function() {
  // reset the red when you click back in
  $(this).removeClass("ng");
  $("#msg").text("");
});
// Click outside the field without entering anything`}}]},

  {name:{ja:"ドロップダウンメニュー",en:"Dropdown menu"}, sub:{ja:"hoverで開く",en:"open on hover"}, desc:{ja:`親メニューに<b>マウスを乗せると下にサブメニューが開く</b>、ナビの定番。CSSで最初は隠しておき、<b>.hover()</b> で開閉します。連続ホバーでの暴走を防ぐため <b>.stop(true, true)</b> を頭に付けるのがコツ。`,en:`A navigation staple where <b>hovering a parent menu opens a submenu below</b>. Hide it initially in CSS and toggle with <b>.hover()</b>. The trick: prefix <b>.stop(true, true)</b> to prevent runaway animation from repeated hovering.`},
   tags:[".hover()",".slideDown()",".stop()"], prep:[
     {s:{ja:'$(el).hover(乗せた時, 離れた時)',en:'$(el).hover(onEnter, onLeave)'},d:{ja:'マウスを<b>乗せた／離した</b>2つの動きを一度に書く。',en:'Write both the <b>enter and leave</b> behaviors at once.'}},
     {s:'$(this).find(".sub")',d:{ja:'乗せたメニューの<b>中にあるサブメニュー</b>を探す。',en:'Finds the <b>submenu inside</b> the hovered menu.'}},
     {s:'.stop(true, true)',d:{ja:'連続ホバーでの<b>アニメ暴走を防ぐ</b>（今の動きを止めて、溜まった動作も捨てる）。',en:'<b>Prevents runaway animation</b> from repeated hovering (stops the current one and discards the queue).'}}],
   html:{ja:`<div class="menu">
  <div class="parent">メニュー ▼</div>
  <ul class="sub">
    <li>プロフィール</li>
    <li>設定</li>
    <li>ログアウト</li>
  </ul>
</div>`,en:`<div class="menu">
  <div class="parent">Menu ▼</div>
  <ul class="sub">
    <li>Profile</li>
    <li>Settings</li>
    <li>Log out</li>
  </ul>
</div>`},
   css:{ja:`.parent {
  display: inline-block;
  padding: 10px 16px;
  background: #7c9885;
  color: #fff;
  cursor: pointer;
}
.sub {
  display: none;          /* 最初は隠しておく */
  margin: 0;
  padding: 0;
  list-style: none;
  width: 160px;
  border: 1px solid #ddd;
}
.sub li {
  padding: 10px 16px;
  background: #fff;
}
.sub li:hover {
  background: #eef;
}`,en:`.parent {
  display: inline-block;
  padding: 10px 16px;
  background: #7c9885;
  color: #fff;
  cursor: pointer;
}
.sub {
  display: none;          /* hidden at first */
  margin: 0;
  padding: 0;
  list-style: none;
  width: 160px;
  border: 1px solid #ddd;
}
.sub li {
  padding: 10px 16px;
  background: #fff;
}
.sub li:hover {
  background: #eef;
}`},
   variations:[{label:{ja:"ホバーで開閉",en:"Toggle on hover"}, code:{ja:`$(".menu").hover(
  function() {
    // 乗せたら開く
    $(this).find(".sub").stop(true, true).slideDown(200);
  },
  function() {
    // 離れたら閉じる
    $(this).find(".sub").stop(true, true).slideUp(200);
  }
);
// プレビューの「メニュー ▼」にマウスを乗せてみて`,en:`$(".menu").hover(
  function() {
    // open on enter
    $(this).find(".sub").stop(true, true).slideDown(200);
  },
  function() {
    // close on leave
    $(this).find(".sub").stop(true, true).slideUp(200);
  }
);
// Hover the mouse over "Menu ▼" in the preview`}}]}
]}
];


/* 表示順＝DOM順＝Tabフォーカス順を「HTML CSS / JS jQuery」に一致させる（アクセシビリティ WCAG 2.4.3） */
const LANGS=[
  {name:"HTML",   kind:"html", cats:HTMLCATEGORIES},
  {name:"CSS",    kind:"css",  cats:CSSCATEGORIES},
  {name:"JS",     kind:"js",   cats:CATEGORIES},
  {name:"jQuery", kind:"jq",   cats:JQCATEGORIES}
];
let langIndex=0;
function curCats(){ return LANGS[langIndex].cats; }

/* ============ 多言語（日本語 / English） ============ */
// 表示言語：localStorage の保存を最優先、無ければブラウザ言語で自動判定（ja系→ja、他→en）
let LANG = 'ja';
try{ const saved=localStorage.getItem('cn_lang'); LANG = saved || (/^ja/i.test(navigator.language||navigator.userLanguage||'')?'ja':'en'); }catch(e){}
// データ用：文字列 or {ja,en} を受け取り、現在言語を返す（未翻訳は日本語へフォールバック）
function tr(v){
  if(v&&typeof v==='object'&&!Array.isArray(v)&&('ja'in v||'en'in v)) return LANG==='en'?(v.en!=null?v.en:v.ja):(v.ja!=null?v.ja:v.en);
  return v;
}
// カテゴリ名（データに共通で頻出するため辞書で対応）
const CAT_NAMES={'基礎':'Basics','初級':'Beginner','中級':'Intermediate','上級':'Advanced','特級':'Expert','応用':'Applied'};
function catLabel(n){ return LANG==='en' ? (CAT_NAMES[n]||n) : n; }
// UI文字列辞書
const UI={
  tagline:{ja:'動くコード辞書 — HTML / CSS / JavaScript / jQuery を引いて、その場で動かせます',en:'A living code dictionary — look up HTML / CSS / JavaScript / jQuery and run it on the spot'},
  about:{ja:'◇ このサイトについて',en:'◇ About'},
  menu:{ja:'☰ メニュー',en:'☰ Menu'},
  menu_open_aria:{ja:'項目メニューを開く',en:'Open the index menu'},
  menu_close_aria:{ja:'項目メニューを閉じる',en:'Close the index menu'},
  skip:{ja:'本文へスキップ',en:'Skip to content'},
  grp_lang:{ja:'言語',en:'Language'},
  grp_level:{ja:'難易度でしぼる',en:'Filter by level'},
  ed_help:{ja:'Tab＝インデント／Esc を押してから Tab＝窓の外へ移動',en:'Tab = indent / press Esc then Tab = leave the editor'},
  autorun:{ja:'自動実行',en:'Auto-run'},
  reset:{ja:'↺ リセット',en:'↺ Reset'},
  run:{ja:'▶ 実行',en:'▶ Run'},
  pane_items:{ja:'項目を選ぶ',en:'Choose a topic'},
  search_ph:{ja:'検索（例: flex / 配列）',en:'Search (e.g. flex / array)'},
  search_al:{ja:'全言語から項目を検索',en:'Search topics across all languages'},
  search_clear:{ja:'検索をクリア',en:'Clear search'},
  noscript:{ja:'JavaScriptを有効にしてください。',en:'Please enable JavaScript.'},
  desc_default:{ja:'この項目の説明',en:'About this topic'},
  desc_code:{ja:'この命令の説明',en:'About this command'},
  desc_markup:{ja:'このタグ・プロパティの説明',en:'About this tag / property'},
  prev_default:{ja:'プレビュー（表示結果）',en:'Preview (result)'},
  prev_code:{ja:'プレビュー（実際の動き）',en:'Preview (live result)'},
  prev_markup:{ja:'プレビュー（表示結果）',en:'Preview (rendered result)'},
  prep_title:{ja:'◆ このコードで使う言葉',en:'◆ Words used in this code'},
  vars:{ja:'バリエーション',en:'Variations'},
  var_hint:{ja:'押すとコード窓に入り、すぐ反映されます。',en:'Tap one to load it into the code pane — it runs instantly.'},
  log:{ja:'ログ',en:'Log'},
  log_idle:{ja:'// 動かない時は、ここに原因を日本語で出します',en:'// If it does not run, the reason appears here'},
  log_running:{ja:'// 実行中…',en:'// Running…'},
  log_noerr:{ja:'// エラーなし ✓（console.log の出力があればここに出ます）',en:'// No errors ✓ (console.log output appears here)'},
  copy:{ja:'⧉ コピー',en:'⧉ Copy'},
  copy_done:{ja:'✓ コピー済み',en:'✓ Copied'},
  copy_tt:{ja:'コードをコピー',en:'Copy code'},
  share:{ja:'🔗 共有',en:'🔗 Share'},
  share_tt:{ja:'この項目へのリンクをコピー',en:'Copy a link to this topic'},
  share_done:{ja:'✓ コピー',en:'✓ Copied'},
  share_fail:{ja:'コピー失敗',en:'Copy failed'},
  foot_about:{ja:'このサイトについて',en:'About'},
  foot_privacy:{ja:'プライバシー',en:'Privacy'},
  foot_contact:{ja:'お問い合わせ',en:'Contact'},
  foot_upd:{ja:'最終更新',en:'Last updated'},
  like_add:{ja:'をいいねに追加',en:' — add to likes'},
  like_del:{ja:'のいいねを解除',en:' — remove from likes'},
  like_tab:{ja:'♥ いいね',en:'♥ Likes'},
  /* 空状態：何が起きているかと、次にどうするかをセットで示す */
  likes_empty_t:{ja:'いいねはまだ空です',en:'No likes yet'},
  likes_empty_b:{ja:'各項目の <b>♡</b> を押すと、言語をまたいでここに集まります。よく引く項目を入れておくと便利です。',en:'Tap the <b>♡</b> on any topic and it collects here, across all languages. Handy for the ones you look up often.'},
  search_empty_t:{ja:'見つかりませんでした',en:'Nothing found'},
  search_empty_b:{ja:'「<b>{q}</b>」に一致する項目はありません。<br>別の言葉や、タグ名（例: flex / addEventListener）でも試せます。',en:'Nothing matches “<b>{q}</b>”.<br>Try another word, or a tag name (e.g. flex / addEventListener).'},
  search_empty_cta:{ja:'検索をクリアして一覧へ戻る',en:'Clear search and go back'},
  no_transition:{ja:'（このプレビューではページ遷移は無効です）',en:'(Page navigation is disabled in this preview)'},
  acc_close:{ja:'▾ 閉じる',en:'▾ Close'},
  acc_open:{ja:'▸ 開く',en:'▸ Open'},
  toggle_to:{ja:'EN',en:'日本語'},
  toggle_aria:{ja:'Switch to English',en:'日本語に切り替え'},
  ls_full:{ja:'保存できる量の上限に達したため、これ以上は保存していません（練習用の一時保存です）。',en:'The storage limit was reached, so nothing further was saved (this is temporary practice storage).'},
  doc_title:{ja:'CoDictionary — 動くコード辞書｜HTML・CSS・JavaScript・jQuery',en:'CoDictionary — a living code dictionary｜HTML, CSS, JavaScript & jQuery'},
  doc_desc:{ja:'CoDictionary は、HTML・CSS・JavaScript・jQuery を引いてその場で動かせる無料のコード辞書。タグ・プロパティ・命令の意味を、丁寧な説明とすぐ動くプレビューで確かめられます。',en:'CoDictionary is a free code dictionary for HTML, CSS, JavaScript and jQuery — look anything up and run it on the spot, with clear explanations and instant live previews.'}
};
function t(k){ const e=UI[k]; return e?(e[LANG]!=null?e[LANG]:e.ja):''; }
function applyLang(){
  const d=document;
  d.documentElement.lang=LANG;
  d.documentElement.setAttribute('data-lang',LANG);
  // 属性ベースの差し替え
  d.querySelectorAll('[data-i18n]').forEach(el=>{ el.textContent=t(el.getAttribute('data-i18n')); });
  d.querySelectorAll('[data-i18n-html]').forEach(el=>{ el.innerHTML=t(el.getAttribute('data-i18n-html')); });
  d.querySelectorAll('[data-i18n-ph]').forEach(el=>{ el.setAttribute('placeholder',t(el.getAttribute('data-i18n-ph'))); });
  d.querySelectorAll('[data-i18n-al]').forEach(el=>{ el.setAttribute('aria-label',t(el.getAttribute('data-i18n-al'))); });
  d.querySelectorAll('[data-i18n-tt]').forEach(el=>{ const v=t(el.getAttribute('data-i18n-tt')); el.setAttribute('title',v); });
  // head
  d.title=t('doc_title');
  const md=d.querySelector('meta[name="description"]'); if(md)md.setAttribute('content',t('doc_desc'));
  // 言語トグル
  const tg=d.getElementById('langToggle'); if(tg){ tg.textContent=t('toggle_to'); tg.setAttribute('aria-label',t('toggle_aria')); }
  // ハンバーガーは開閉で読み上げが変わる（aria-expanded と文言を食い違わせない）
  syncMenuLabel();
  // 動的部分を再構築
  rebuildClock();
  if(typeof renderTabs==='function' && LANGS[langIndex]){
    const kind=LANGS[langIndex].kind, isCode=(kind==='js'||kind==='jq');
    const dh=d.getElementById('descHead'); if(dh)dh.textContent = item ? (isCode?t('desc_code'):t('desc_markup')) : t('desc_default');
    const ph=d.getElementById('prevHead'); if(ph)ph.textContent = isCode?t('prev_code'):t('prev_markup');
    renderTabs();
    // renderTabs() はタブを作り直すため .on が消える。ここで現在地を戻さないと
    // 起動直後と言語切替直後に「どの難易度を見ているか」が画面からもATからも失われる
    syncTabSelection();
    renderList();
    if(item!=null){
      const kv=curVar;
      selectItem(curIdx,false,true);   // 履歴とプレビュー再実行を伴わせない
      if(item&&item.variations&&item.variations[kv]) applyVar(kv);
    }
  }
}
// 現在選択中のタブ（難易度 or いいね）に .on と aria-selected を戻す
function syncTabSelection(){
  const tabs=[...document.querySelectorAll('.tab')];
  if(!tabs.length) return;
  const active = likesMode ? tabs[tabs.length-1] : tabs[catIndex];
  tabs.forEach(tb=>{ tb.classList.remove('on'); tb.setAttribute('aria-selected','false'); tb.tabIndex=-1; });
  if(active){ active.classList.add('on'); active.setAttribute('aria-selected','true'); active.tabIndex=0; }
}
function setLang(l){ if(l===LANG)return; LANG=l; try{localStorage.setItem('cn_lang',l);}catch(e){} applyLang(); }
let curIdx=0, curVar=0;

/* ============ 要素 ============ */
const edHTML=document.getElementById('edHTML');
const edJS=document.getElementById('edJS');
const edCSS=document.getElementById('edCSS');
let preview=document.getElementById('preview');
/* preview.srcdoc への代入は iframe の「ページ遷移」として扱われ、そのたびにブラウザの履歴が1件積まれる。
   自動実行が既定ONなので、コードを書き換えるたびに履歴が伸び、戻るボタンでページから出られなくなる。
   iframe 要素ごと新品に差し替えれば履歴は増えない（実測：5回実行で履歴増加0件） */
/* 差し替えは1フレームに1回へまとめる。selectItem 1回で run() は3回走るため、
   同一タスク内で3連続差し替えると Chrome が読み込みを取りこぼしプレビューが白紙になる（実測） */
let pendingDoc=null, pendingRaf=0;
function setPreviewDoc(html){
  pendingDoc=html;
  if(pendingRaf) return;
  pendingRaf=requestAnimationFrame(()=>{
    pendingRaf=0;
    const doc=pendingDoc; pendingDoc=null;
    const fresh=preview.cloneNode(false);   // 属性（sandbox・title）はコピーされる
    fresh.removeAttribute('srcdoc');        // 挿入時に前回の中身を読み込み始めさせない（二重読み込みで白紙になる）
    preview.replaceWith(fresh);
    preview=fresh;
    preview.srcdoc=doc;
  });
}
const logEl=document.getElementById('log');
const tabsEl=document.getElementById('tabs');
const listEl=document.getElementById('list');
const varsEl=document.getElementById('vars');
const langsEl=document.getElementById('langs');
const autorun=document.getElementById('autorun');
let catIndex=0, item=null, timer=null, likesMode=false, searchQuery='';

/* ============ いいね（お気に入り）＝この端末に保存 ============ */
const LIKE_KEY='jsdojo_likes';
let likes=new Set();
try{ likes=new Set(JSON.parse(localStorage.getItem(LIKE_KEY)||'[]')); }catch(e){}
/* プレビュー内 localStorage の代替ストア（sandbox内は localStorage が SecurityError になるため、親が保持し各実行に注入して永続化する） */
const PREVIEW_LS_KEY='jsdojo_preview_ls';
let previewLS={};
try{ previewLS=JSON.parse(localStorage.getItem(PREVIEW_LS_KEY)||'{}')||{}; }catch(e){}
// 表示言語に依存しない安定ID（名前は常にjaを基準）。kind を明示できるようにして全言語を横断できる形にする
function itemId(it,kind){ const nm=(it.name&&typeof it.name==='object')?(it.name.ja||it.name.en):it.name; return (kind||LANGS[langIndex].kind)+'|'+nm; }
function isLiked(it,kind){ return likes.has(itemId(it,kind)); }
function saveLikes(){ try{ localStorage.setItem(LIKE_KEY, JSON.stringify([...likes])); }catch(e){} }
// いいねは全言語を横断して集める。localStorage には元々全言語分が入っているのに
// 現在の言語しか走査しておらず、HTMLで付けたいいねがJSタブでは「0件」に見えていた
function likedItems(){ const out=[]; LANGS.forEach((L,li)=>L.cats.forEach((c,ci)=>c.items.forEach(it=>{ if(likes.has(itemId(it,L.kind))) out.push({li,ci,it}); }))); return out; }
function normLC(s){ return String(s||'').toLowerCase(); }
function matchItem(it,q){ const desc=String(tr(it.desc)||'').replace(/<[^>]*>/g,' '); return (normLC(tr(it.name))+' '+normLC(tr(it.sub))+' '+normLC((it.tags||[]).map(tr).join(' '))+' '+normLC(desc)).indexOf(q)>=0; }
function globalSearch(){ const q=normLC(searchQuery).trim(); const out=[]; if(!q) return out; LANGS.forEach((L,li)=>L.cats.forEach((c,ci)=>c.items.forEach(it=>{ if(matchItem(it,q)) out.push({li,ci,it}); }))); return out; }  // 全言語を横断
function listItems(){ return curCats()[catIndex].items; }  // 通常一覧の出どころ（検索中・いいね一覧は別レンダラが担当）
// 一覧が「現在カテゴリの項目そのもの」を並べている時だけ index による選択ハイライトが成立する。
// 検索中・いいね一覧は全言語横断の別集合なので、index が食い違いハイライトが別項目に付く
function isPlainList(){ return !likesMode && !searchQuery.trim(); }

/* ============ 東京リアルタイム時計（言語で表記切替） ============ */
let clockFmt=null, clockTimer=null;
function rebuildClock(){
  const el=document.getElementById('clock'); if(!el) return;
  clockFmt=new Intl.DateTimeFormat(LANG==='en'?'en-GB':'ja-JP',{timeZone:'Asia/Tokyo',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false});
  const tick=()=>{
    const o={}; clockFmt.formatToParts(new Date()).forEach(p=>o[p.type]=p.value);
    el.textContent = LANG==='en'
      ? (o.year+'-'+o.month+'-'+o.day+' '+o.hour+':'+o.minute+':'+o.second+' JST')
      : (o.year+'年'+o.month+'月'+o.day+'日 '+o.hour+'時'+o.minute+'分'+o.second+'秒');
  };
  tick();
  if(clockTimer)clearInterval(clockTimer);
  clockTimer=setInterval(tick,1000);
}

/* ============ 言語（HTML / CSS / JS / jQuery）＆タブ ============ */
LANGS.forEach((L,i)=>{
  const b=document.createElement('button');
  b.className='lang'+(i===0?' on':'');
  b.type='button';
  b.textContent=L.name;
  b.setAttribute('role','tab');                    // 選択状態を支援技術へ伝える（class だけでは伝わらない）
  b.setAttribute('aria-selected',i===0?'true':'false');
  b.tabIndex=i===0?0:-1;
  b.onclick=()=>selectLang(i,true);
  langsEl.appendChild(b);
});
function selectLang(li,hist){
  langIndex=li;
  document.querySelectorAll('.lang').forEach((el,k)=>{
    const on=(k===li);
    el.classList.toggle('on',on);
    el.setAttribute('aria-selected',on?'true':'false');
    el.tabIndex=on?0:-1;
  });
  const kind=LANGS[li].kind;
  document.getElementById('jsLabel').textContent=LANGS[li].name==='jQuery'?'jQuery':'JavaScript';
  // HTML/CSSモードではログ窓・JS窓を隠すためのフラグ（CSS側で制御）
  document.body.setAttribute('data-kind', kind);
  // 見出し語を言語に合わせて出し分け（HTML/CSSは「命令」ではないため）
  const isCode=(kind==='js'||kind==='jq');
  document.getElementById('descHead').textContent = isCode ? t('desc_code') : t('desc_markup');
  document.getElementById('prevHead').textContent = isCode ? t('prev_code') : t('prev_markup');
  renderTabs();
  selectCat(0,hist);
}
function renderTabs(){
  tabsEl.innerHTML='';
  curCats().forEach((c,i)=>{
    const b=document.createElement('button');
    b.className='tab';
    b.type='button';
    b.textContent=catLabel(c.name);
    b.setAttribute('role','tab');
    b.setAttribute('aria-selected','false');
    b.tabIndex=-1;
    b.onclick=()=>selectCat(i,true);
    tabsEl.appendChild(b);
  });
  const lb=document.createElement('button');
  lb.className='tab like-tab';
  lb.type='button';
  lb.setAttribute('role','tab');
  lb.setAttribute('aria-selected','false');
  lb.tabIndex=-1;
  lb.onclick=()=>selectCat('likes');
  tabsEl.appendChild(lb);
  updateLikeTab();
}
function updateLikeTab(){
  const lb=tabsEl.querySelector('.like-tab');
  if(!lb) return;
  const n=likedItems().length;
  lb.textContent = n>0 ? (t('like_tab')+' '+n) : t('like_tab');
}
function selectCat(ci,hist){
  clearSearch();          // タブを選んだら検索を解除
  likesMode=(ci==='likes');
  if(!likesMode) catIndex=ci;
  syncTabSelection();
  renderList();
  // いいね一覧は全言語横断の別集合。検索結果と同じく「押してその項目へ飛ぶ」ため、
  // ここで index 指定の selectItem を呼ぶと表示と選択が食い違う
  // hist=true でタブ切替を履歴に積む。replace のままだと直前に見ていた項目の履歴が消え、
  // 「戻る」を押しても戻れなかった
  if(!likesMode) selectItem(0,hist);
}
function toggleLike(it,row,kind){
  const id=itemId(it,kind);
  if(likes.has(id)) likes.delete(id); else likes.add(id);
  saveLikes();
  updateLikeTab();
  if(likesMode){ renderList(); return; }   // いいね一覧を見ている時は、外したらその場で消える
  const liked=likes.has(id);
  if(row){ const h=row.querySelector('.like'); if(h){ h.textContent=liked?'♥':'♡'; h.classList.toggle('on',liked); h.setAttribute('aria-pressed',liked?'true':'false'); h.setAttribute('aria-label',tr(it.name)+t(liked?'like_del':'like_add')); } }
}
// badge を渡すと言語バッジ（検索・いいね一覧）、渡さないと ♡ ボタン（通常一覧）
function makeItemRow(it, onOpen, badge, kind){
  const wrap=document.createElement('div'); wrap.className='fx-item';
  const b=document.createElement('button'); b.type='button'; b.className='fx';
  b.innerHTML='<span></span><small></small>';
  b.children[0].textContent=tr(it.name);
  b.children[1].textContent=tr(it.sub)||'';
  b.tabIndex=-1;                              // ロービングtabindex：Tabで止まるのは現在行だけ（項目は最大144個ある）
  b.onclick=onOpen;
  wrap.appendChild(b);
  if(badge){
    const bd=document.createElement('span'); bd.className='lang-badge k-'+badge.kind; bd.textContent=badge.name;
    wrap.appendChild(bd);
  }else{
    const liked=isLiked(it,kind);
    const like=document.createElement('button'); like.type='button'; like.className='like'+(liked?' on':'');
    like.textContent=liked?'♥':'♡';
    // 「いいね」が10個並ぶと、読み上げでどの項目のものか分からない
    like.setAttribute('aria-label',tr(it.name)+t(liked?'like_del':'like_add'));
    like.setAttribute('aria-pressed',liked?'true':'false');
    like.tabIndex=-1;
    like.onclick=(e)=>{ e.stopPropagation(); toggleLike(it,wrap,kind); };
    wrap.appendChild(like);
  }
  return {wrap,b};
}
// 空状態：何が起きたかと、次にどうするかをセットで見せる
function renderEmpty(titleKey,bodyHtml,ctaKey,onCta){
  const box=document.createElement('div'); box.className='empty-state';
  const ic=document.createElement('span'); ic.className='em-icon'; ic.textContent=ctaKey?'🔍':'♡'; ic.setAttribute('aria-hidden','true');
  const ti=document.createElement('p'); ti.className='em-title'; ti.textContent=t(titleKey);
  const bd=document.createElement('p'); bd.className='em-body'; bd.innerHTML=bodyHtml;
  box.appendChild(ic); box.appendChild(ti); box.appendChild(bd);
  if(ctaKey){
    const cta=document.createElement('button'); cta.type='button'; cta.className='em-cta'; cta.textContent=t(ctaKey);
    cta.onclick=onCta; box.appendChild(cta);
  }
  listEl.appendChild(box);
}
function renderSearchResults(){
  listEl.innerHTML='';
  const results=globalSearch();
  if(results.length===0){
    const q=searchQuery.trim();
    renderEmpty('search_empty_t', t('search_empty_b').replace('{q}',esc(q)), 'search_empty_cta', ()=>{
      if(searchEl) searchEl.value='';
      selectCat(catIndex);
      if(searchEl) searchEl.focus();
    });
    return;
  }
  results.forEach(r=>{
    const {wrap}=makeItemRow(r.it, ()=>openLocation(r), {kind:LANGS[r.li].kind, name:LANGS[r.li].name}, LANGS[r.li].kind);
    listEl.appendChild(wrap);
  });
  focusRoving();
}
// 検索結果・いいね一覧から、その項目のある言語・カテゴリへ移動して開く
function openLocation(r){
  clearSearch();
  likesMode=false;
  if(langIndex!==r.li) selectLang(r.li);
  selectCat(r.ci);
  const items=curCats()[r.ci].items;
  const idx=items.indexOf(r.it);
  selectItem(idx>=0?idx:0, true);
  closeMenu();
}
function renderLikesList(){
  listEl.innerHTML='';
  const results=likedItems();
  if(results.length===0){ renderEmpty('likes_empty_t', t('likes_empty_b'), null, null); return; }
  results.forEach(r=>{
    const {wrap}=makeItemRow(r.it, ()=>openLocation(r), {kind:LANGS[r.li].kind, name:LANGS[r.li].name}, LANGS[r.li].kind);
    listEl.appendChild(wrap);
  });
  focusRoving();
}
function renderList(){
  if(searchQuery.trim()){ renderSearchResults(); return; }
  if(likesMode){ renderLikesList(); return; }
  listEl.innerHTML='';
  const kind=LANGS[langIndex].kind;
  listItems().forEach((it,ii)=>{
    const {wrap}=makeItemRow(it, ()=>{ selectItem(ii, true); closeMenu(); }, null, kind);
    listEl.appendChild(wrap);
  });
  focusRoving();
}
/* 項目一覧のキーボード操作：Tabで止まるのは1箇所だけ、上下キーで項目間を移動する。
   全項目をTab対象にすると、本文へ辿り着くのに40回近くTabを押すことになる（項目は最大144個） */
function focusRoving(){
  const rows=[...listEl.querySelectorAll('.fx-item')];
  if(!rows.length) return;
  let cur=rows.findIndex(r=>r.querySelector('.fx').classList.contains('on'));
  if(cur<0) cur=0;
  rows.forEach((r,i)=>{
    const on=(i===cur);
    r.querySelector('.fx').tabIndex=on?0:-1;
    const lk=r.querySelector('.like'); if(lk) lk.tabIndex=on?0:-1;
  });
}
listEl.addEventListener('keydown',e=>{
  if(e.key!=='ArrowDown'&&e.key!=='ArrowUp'&&e.key!=='Home'&&e.key!=='End') return;
  const rows=[...listEl.querySelectorAll('.fx-item')];
  if(!rows.length) return;
  const here=e.target.closest('.fx-item'); if(!here) return;
  e.preventDefault();
  let i=rows.indexOf(here);
  if(e.key==='ArrowDown') i=Math.min(rows.length-1,i+1);
  else if(e.key==='ArrowUp') i=Math.max(0,i-1);
  else if(e.key==='Home') i=0;
  else i=rows.length-1;
  rows.forEach((r,k)=>{
    const on=(k===i);
    r.querySelector('.fx').tabIndex=on?0:-1;
    const lk=r.querySelector('.like'); if(lk) lk.tabIndex=on?0:-1;
  });
  rows[i].querySelector('.fx').focus();
});

/* ============ 項目を選ぶ ============ */
// CSSを1宣言=1行に整形（連続で書かれた宣言を ; で改行し、ネストもインデント）
function fmtCSS(src){
  if(src==null) return src;
  const s=String(src);
  if(s.indexOf('{')<0) return s;
  const IND='  ';
  let res='', depth=0, paren=0, buf='', i=0;
  const line=(text,d)=>{ const t=text.trim().replace(/[ \t]+/g,' '); if(t) res+=IND.repeat(Math.max(0,d))+t+'\n'; };
  const space=()=>{ if(buf&&!/\s$/.test(buf)) buf+=' '; };
  // 直前に連続するバックスラッシュが偶数なら、その引用符は「閉じ」である。
  // s[i-1]!=='\\' だけで判定すると "C:\\" の閉じ引用符を見逃し、以降の全CSSを文字列として飲み込む
  const escaped=(str,pos)=>{ let n=0,k=pos-1; while(k>=0&&str[k]==='\\'){ n++; k--; } return n%2===1; };
  while(i<s.length){
    const c=s[i];
    if(c==='"'||c==="'"){ const q=c; buf+=c; i++; while(i<s.length){ buf+=s[i]; if(s[i]===q&&!escaped(s,i)){ i++; break; } i++; } continue; }
    if(c==='/'&&s[i+1]==='*'){
      if(buf.trim())line(buf,depth); buf='';
      let cm='/*'; i+=2;
      while(i<s.length&&!(s[i]==='*'&&s[i+1]==='/')){ cm+=s[i]; i++; }
      // 閉じられていないコメントに */ を足すと、入力に無い文字を勝手に出力することになる
      if(i<s.length){ cm+='*/'; i+=2; }
      line(cm,depth); continue;
    }
    // 括弧の中では ; { } は区切りではない。追わないと url(data:image/png;base64,…) が
    // 「url(data:image/png;」で切られ、background-image が丸ごと消える（正当なCSSが壊れる）
    if(c==='('){ paren++; buf+=c; i++; continue; }
    if(c===')'){ if(paren>0)paren--; buf+=c; i++; continue; }
    if(paren>0){ buf+=c; i++; continue; }
    if(c==='{'){ line(buf.trim()+' {',depth); buf=''; depth++; i++; continue; }
    if(c==='}'){ if(buf.trim())line(buf+';',depth); buf=''; depth=Math.max(0,depth-1); line('}',depth); i++; continue; }
    if(c===';'){ line(buf+';',depth); buf=''; i++; continue; }
    if(c==='\n'||c==='\t'||c==='\r'){ space(); i++; continue; }
    buf+=c; i++;
  }
  if(buf.trim())line(buf,depth);
  return res.replace(/\n$/,'');
}

function selectItem(ii, hist, quiet){
  const items=listItems();
  if(!items.length){
    item=null;
    document.getElementById('descTitle').textContent='';
    document.getElementById('descLead').innerHTML='';
    document.getElementById('tagsLine').innerHTML='';
    document.getElementById('prep').innerHTML='';
    varsEl.innerHTML='';
    setPreviewDoc('<!doctype html><meta charset="utf-8">');
    return;
  }
  if(ii>=items.length) ii=0;
  item=items[ii]; curIdx=ii;
  // 一覧が現在カテゴリそのものを並べている時だけ index でハイライトできる。
  // 検索中・いいね一覧は全言語横断の別集合で、index が食い違い別項目に付いてしまう
  if(isPlainList()){
    document.querySelectorAll('.fx').forEach((n,k)=>{
      const on=(k===ii);
      n.classList.toggle('on',on);
      if(on) n.setAttribute('aria-current','true'); else n.removeAttribute('aria-current');
    });
    focusRoving();
  }

  // 説明（ピンク）
  document.getElementById('descTitle').textContent=tr(item.name);   // 大見出し（ジャンプ率確保）
  preview.title=tr(item.name)+(LANG==='en'?' — preview':'のプレビュー');           // スクリーンリーダー向けに具体化
  document.getElementById('descLead').innerHTML=tr(item.desc);
  const tl=document.getElementById('tagsLine'); tl.innerHTML='';
  (item.tags||[]).forEach(tag=>{ const s=document.createElement('span'); s.className='t'; s.textContent=tr(tag); tl.appendChild(s); });
  const prep=document.getElementById('prep'); prep.innerHTML='';
  (item.prep||[]).forEach(p=>{ const r=document.createElement('div'); r.className='row';
    r.innerHTML='<span class="sym"></span><span class="d">'+tr(p.d)+'</span>'; r.querySelector('.sym').textContent=tr(p.s); prep.appendChild(r); });

  // バリエーション（コード窓の中身は applyVar が入れる。ここで入れても直後に上書きされるだけ）
  renderVars();
  if(!quiet){
    applyVar(0);
    writeHash(hist?'push':'replace');   // 現在の項目をURLへ反映（ディープリンク）
  }
}

/* ============ URLディープリンク（#kind/カテゴリ/項目）＋共有 ============ */
function kindIndex(kind){ for(let i=0;i<LANGS.length;i++) if(LANGS[i].kind===kind) return i; return -1; }
function itemLocation(it){ const cats=curCats(); for(let ci=0;ci<cats.length;ci++){ const ii=cats[ci].items.indexOf(it); if(ii>=0) return {ci,ii}; } return null; }
function currentHash(){ if(!item) return ''; const loc=itemLocation(item); if(!loc) return ''; return '#'+LANGS[langIndex].kind+'/'+loc.ci+'/'+loc.ii; }
function writeHash(mode){
  if(restoringHash) return;   // 復元の途中経過をURLへ書き戻さない（#js/0/5 の復元中に #js/0/0 を挟んでいた）
  const h=currentHash(); if(!h || location.hash===h) return;   // 同一URLの再書き込み（履歴重複）を防ぐ
  try{ if(mode==='push') history.pushState(null,'',h); else history.replaceState(null,'',h); }
  catch(e){ try{ location.hash=h; }catch(_){} }
}
let restoringHash=false;
function applyStateFromHash(){
  const m=/^#([a-z]+)\/(\d+)\/(\d+)$/.exec(location.hash||'');
  if(!m){ dropBadHash(); return false; }
  const li=kindIndex(m[1]);
  if(li<0){ dropBadHash(); return false; }
  restoringHash=true;
  try{
    if(langIndex!==li) selectLang(li);
    const cats=curCats(); let ci=+m[2]; if(ci<0||ci>=cats.length) ci=0;
    selectCat(ci);
    const items=curCats()[ci].items; let ii=+m[3]; if(ii<0||ii>=items.length) ii=0;
    selectItem(ii);
  } finally { restoringHash=false; }
  writeHash('replace');   // 範囲外indexを丸めた場合に、URLを実際の表示内容へ揃える
  return true;
}
// 壊れたhash（#zz/0/0 等）はUIが既定表示に落ちてもアドレスバーに残り続け、
// そのまま共有されると壊れたリンクが広まる。表示と一致しないURLは消す
function dropBadHash(){
  if(!location.hash) return;
  try{ history.replaceState(null,'',location.pathname+location.search); }catch(e){}
}

function renderVars(){
  varsEl.innerHTML='';
  item.variations.forEach((v,vi)=>{
    const b=document.createElement('button');
    b.className='var';
    b.textContent=tr(v.label);
    b.onclick=()=>applyVar(vi);
    varsEl.appendChild(b);
  });
}
function applyVar(vi){
  curVar=vi;
  document.querySelectorAll('.var').forEach((n,k)=>{
    const on=(k===vi);
    n.classList.toggle('on',on);
    n.setAttribute('aria-pressed',on?'true':'false');
  });
  const kind=LANGS[langIndex].kind;
  const code=tr(item.variations[vi].code);
  // 学ぶコードを入れる窓を言語で変える（HTML→HTML窓 / CSS→CSS窓 / JS・jQuery→JS窓）
  if(kind==='html'){
    edHTML.value=code;
    edCSS.value=fmtCSS(tr(item.css)||BASE_CSS_MARKUP);
    edJS.value='';
  }else if(kind==='css'){
    edHTML.value=tr(item.html)||tr(BASE_HTML);
    edCSS.value=fmtCSS(code);
    edJS.value='';
  }else{
    edHTML.value=tr(item.html)||tr(BASE_HTML);
    edCSS.value=fmtCSS(tr(item.css)||BASE_CSS);
    edJS.value=code;
  }
  refreshAll();
  run();
  // HTML/CSSモードはログ窓自体が非表示（CSS側で display:none）のため、ここでログに書いても誰にも見えない。
  // 「HTMLの書き方です」の類は画面を見れば分かる冗長な文でもあるので、コードモードだけに絞る。
  // ※ 記法ミスによるエラーは pushErr がログ窓ごと自動で開くので、見逃しは起きない
  const isCode=(kind==='js'||kind==='jq');
  if(isCode){
    const hint=(/addEventListener|\.on\(/.test(code)
      ? (LANG==='en'?'👉 Try interacting with the elements in the preview!':'👉 プレビューの要素を操作してみて！')
      : (LANG==='en'?'Press “↺ Reset” to replay.':'もう一度は「↺ リセット」。'));
    const nm=tr(item.name), lb=tr(item.variations[vi].label);
    pushLog('info', LANG==='en' ? ('Ran “'+nm+' ('+lb+')”. '+hint) : ('「'+nm+'（'+lb+'）」を再生。'+hint));
  }
}

function resetBase(){
  applyVar(0);
  pushLog('info', LANG==='en'?'Reset the code to its initial state.':'コードを初期状態に戻しました。');
}

/* ============ 実行（iframeへ反映） ============ */
// HTMLの未閉じコメントは、それ以降のすべて（ユーザーJSも含む）をブラウザが飲み込む。
// 何も起きず、エラーも出ないため原因不明で詰む。実行前に見つけて日本語で伝える
function hasUnclosedComment(s){
  let i=0;
  for(;;){
    const a=s.indexOf('<!--',i); if(a<0) return false;
    const b=s.indexOf('-->',a+4); if(b<0) return true;
    i=b+3;
  }
}
function run(){
  clearLog();
  // HTML仕様では </script のあとが 空白 / "/" / ">" ならそこでスクリプトが終わる。
  // </script> だけを見ていたため "</script >" や "</script/>" が素通しになり、
  // スクリプトが途中で切れて残りのコードが画面に生テキストで漏れていた
  const js=edJS.value.replace(/<\/script(?=[\s/>])/gi,'<\\/script');
  // 同じ理屈で <style> も </style で終わる。content:"</style>" という正当なCSSでプレビューが壊れていた。
  // \3c は CSS における "<" のエスケープ（末尾の空白がエスケープの終端）
  const cssSrc=edCSS.value.replace(/<\/style/gi,'\\3c /style');
  // sandbox内では localStorage が SecurityError になるため、親が保持する代替ストアを注入（教材「データを保存する」用。実行をまたいで永続化）
  const lsSeed=JSON.stringify(previewLS).replace(/</g,'\\u003c');
  const lsShim='var __seed='+lsSeed+';try{window.localStorage.getItem("__probe__");}catch(e){(function(){var m=Object.assign({},__seed);function post(){try{parent.postMessage({t:"ls",d:m},"*");}catch(_){}}var s={getItem:function(k){k=String(k);return Object.prototype.hasOwnProperty.call(m,k)?m[k]:null;},setItem:function(k,v){m[String(k)]=String(v);post();},removeItem:function(k){delete m[String(k)];post();},clear:function(){m={};post();},key:function(i){return Object.keys(m)[i]||null;}};Object.defineProperty(s,"length",{get:function(){return Object.keys(m).length;}});try{Object.defineProperty(window,"localStorage",{configurable:true,value:s});}catch(_){}})();}';
  // iframe内で発生した error / console.log を親へ送るガード
  const guard=
    lsShim+
    'window.onerror=function(m,s,l,c,e){var nm=(e&&e.name)?e.name:"Error";var ms=(e&&e.message)?e.message:m;parent.postMessage({t:"err",n:nm,m:ms,l:l},"*");return false;};'+
    '(function(){var o=console.log;console.log=function(){var a=[].slice.call(arguments).map(function(x){try{return typeof x==="object"?JSON.stringify(x):String(x);}catch(e){return String(x);}}).join(" ");try{parent.postMessage({t:"log",m:a},"*");}catch(e){}o&&o.apply(console,arguments);};})();'+
    /* プレビュー内のリンク(<a>)クリックでの画面遷移を止める（学習用なので遷移不要・道場本体が開くのを防ぐ）*/
    'document.addEventListener("click",function(ev){var t=ev.target;while(t&&t.nodeName!=="A")t=t.parentNode;if(t){ev.preventDefault();try{parent.postMessage({t:"log",m:"'+t('no_transition').replace(/["\\]/g,'\\$&')+'"},"*");}catch(e){}}},true);';
  const base='*{box-sizing:border-box}body{font-family:system-ui,"Yu Gothic",sans-serif;margin:0;padding:24px;color:#222;background:#fff;}';
  // jQueryモードのときだけ、埋め込んだjQuery本体をユーザーコードの前に注入する
  const jq=(LANGS[langIndex].kind==='jq')?('<'+'script>'+window.JQ_SRC+'</'+'script>'):'';
  // 注意: この文字列に閉じタグ（body や script 等）を“生”で書くと、ブラウザがscriptを途中終了し、
  // さらに VSCode Live Server の自動リロード注入がそこへ割り込んで壊れる。必ず '<'+'body>' のように分割する。
  // ガードとjQueryは head へ置く：body側のHTMLが壊れていても、エラー通知の仕組みだけは先に生きている状態を作る
  const open='<!DOCTYPE html><'+'html lang="'+(LANG==='en'?'en':'ja')+'"><'+'head><meta charset="utf-8"><'+'style>'+base+'\n'+cssSrc+'</'+'style><'+'script>'+guard+'</'+'script>'+jq+'</'+'head><'+'body>';
  const s2='<'+'script>'+js+'</'+'script>';
  const close='</'+'body></'+'html>';
  setPreviewDoc(open+edHTML.value+s2+close);
  // ユーザーJSはHTMLの後ろに置くしかない（要素が先に無いと querySelector が失敗するため）。
  // そのためHTMLの未閉じコメントはJSごと飲み込んでしまう。ブラウザは何も教えてくれないので自分で伝える
  if(hasUnclosedComment(edHTML.value)){
    pushLog('err', LANG==='en'
      ? 'The HTML has an unclosed comment. “<!--” needs a matching “-->”. Everything after it — including your JavaScript — is ignored by the browser.'
      : 'HTML窓のコメントが閉じられていません。「<!--」には「-->」が必要です。閉じるまでの間、その後ろにある内容（JavaScriptを含む）はすべて無視されます。');
  }
}

/* ============ ログ（緑）＝日本語でやさしく ============ */
function friendlyError(name,message){
  const m=message||'', en=(LANG==='en');
  if(name==='SyntaxError')
    return en
      ? 'There is a syntax error. Check for an unclosed ( ) { } or quote " ", or full-width symbols mixed in by accident.'
      : '書き方に誤りがあります。かっこ ( ) { } やクオート " " の閉じ忘れ、または<b>全角の記号</b>（（）「」）が混ざっていないか確認してください。';
  if(name==='ReferenceError'){
    const r=m.match(/(\w[\w$]*) is not defined/);
    if(r&&(r[1]==='$'||r[1]==='jQuery')) return en
      ? 'jQuery is not loaded. Make sure you are in “jQuery” mode, or reload the page.'
      : 'jQueryが読み込めていません。「jQuery」モードで動かしているか、ページを再読み込みしてみてください。';
    if(en){ const who=r?('“'+esc(r[1])+'”'):'That name'; return who+' is not found. It may be a <b>typo</b>, or <b>not declared yet</b>.'; }
    const who=r?('「'+esc(r[1])+'」'):'その名前';
    return who+' が見つかりません。<b>スペルミス</b>、または <b>まだ作っていない（宣言していない）</b>可能性があります。';
  }
  if(name==='TypeError'){
    if(/constant variable/.test(m)) return en
      ? 'A box made with const <b>cannot be reassigned</b>. Use let if you need to change it.'
      : 'const で作った箱は<b>書き換えできません</b>。変えたいなら let で作ってください。';
    if(/is not a function/.test(m)){ const f=m.match(/([\w$.]+) is not a function/); return en
      ? ((f?('“'+esc(f[1])+'”'):'That')+' is <b>not a function</b>. Check the spelling of the method name.')
      : ((f?('「'+esc(f[1])+'」'):'それ')+' は<b>関数ではありません</b>。メソッド名のスペルを確認してください。'); }
    if(/(null|undefined)/.test(m)) return en
      ? 'You are operating on an <b>element that was not found</b>. Check that your querySelector selector (#id or .class) matches the HTML pane.'
      : '対象の<b>要素が見つからないまま</b>操作しようとしています。querySelector のセレクタ（#id や .class）がHTML窓と合っているか確認してください。';
    return en ? ('The value types do not match ('+esc(m)+').') : ('値の種類が合っていません（'+esc(m)+'）。');
  }
  if(name==='SecurityError')
    return en
      ? 'This preview sandbox restricts some browser features. Saved data here is kept temporarily for practice.'
      : 'このプレビューは安全のため一部のブラウザ機能を制限しています。ここでの保存データは練習用に一時的に保持されます。';
  return esc(m)||(en?'An unknown error occurred.':'原因不明のエラーです。');
}
function clearLog(){
  document.body.classList.remove('has-error');
  logEl.innerHTML='<div class="cl idle">'+esc(t('log_running'))+'</div>';
  setTimeout(()=>{ const only=logEl.children.length===1&&logEl.querySelector('.idle'); if(only)logEl.innerHTML='<div class="cl idle">'+esc(t('log_noerr'))+'</div>'; },70);
}
function stamp(){ return new Date().toLocaleTimeString('ja-JP',{hour12:false}); }
function pushLog(type,msg){
  const idle=logEl.querySelector('.idle'); if(idle)idle.remove();
  // HTML/CSSモードではログ窓を隠しているが、エラーだけは隠したままにできない（原因が永久に見えなくなる）
  if(type==='err') document.body.classList.add('has-error');
  const cl=document.createElement('div'); cl.className='cl '+(type==='err'?'log-err':(type==='info'?'log-info':'log-ok'));
  cl.innerHTML='<span class="m"></span>';
  cl.querySelector('.m').textContent=(type==='err'?'⨯ ':(type==='info'?'◇ ':'▸ '))+msg;
  logEl.appendChild(cl); logEl.scrollTop=logEl.scrollHeight;
}
function pushErr(name,message,line){
  const idle=logEl.querySelector('.idle'); if(idle)idle.remove();
  document.body.classList.add('has-error');
  const cl=document.createElement('div'); cl.className='cl log-err';
  const raw=name+': '+message+(line?('  (行'+line+')'):'');
  cl.innerHTML='<span class="m">⨯ 動きませんでした<span class="hint"></span><span class="raw" style="color:#B7A7AD;display:block;margin-top:2px;font-size:12px"></span></span>';
  cl.querySelector('.hint').innerHTML='→ '+friendlyError(name,message);
  cl.querySelector('.raw').textContent='（英語の原文: '+raw+'）';
  logEl.appendChild(cl); logEl.scrollTop=logEl.scrollHeight;
}
/* プレビューが持ち込む保存データの受け入れ口。
   ここを素通しにすると、プレビュー内のコードが親のlocalStorageを無制限に食い潰し
   （4MBの文字列も実測で着弾した）、しかも失敗は catch に握り潰されて無言で消えていた */
const PREVIEW_LS_MAX=512*1024;
let lsWarned=false;
function acceptPreviewLS(d){
  if(!d||typeof d!=='object'||Array.isArray(d)) return;
  const norm={}; let bytes=0, over=false;
  for(const k of Object.keys(d)){
    // 本物の localStorage はキーも値も必ず文字列。オブジェクトをそのまま保持すると
    // getItem がオブジェクトを返し、辞書が「嘘の仕様」を教えることになる
    const key=String(k), val=String(d[k]);
    bytes+=key.length+val.length+4;
    if(bytes>PREVIEW_LS_MAX){ over=true; break; }
    norm[key]=val;
  }
  previewLS=norm;
  try{ localStorage.setItem(PREVIEW_LS_KEY,JSON.stringify(previewLS)); }
  catch(_){ over=true; }
  if(over&&!lsWarned){ lsWarned=true; pushLog('err', t('ls_full')); }
}
window.addEventListener('message',e=>{
  if(e.source!==preview.contentWindow)return;   // プレビューiframe以外からのメッセージは無視
  if(!e.data||!e.data.t)return;
  if(e.data.t==='ls'){ acceptPreviewLS(e.data.d); return; }
  const msg=typeof e.data.m==='string'?e.data.m:String(e.data.m);
  if(e.data.t==='err')pushErr(String(e.data.n||'Error'),msg,e.data.l);
  if(e.data.t==='log')pushLog('ok',msg);
});

/* ============ 入力・ボタン ============ */
/* ===== VSCode風シンタックスハイライト（色付き<pre>を透明textareaの下に重ねる） ===== */
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function sp(c,t){return '<span class="'+c+'">'+esc(t)+'</span>';}
function hlJS(src){
  var re=/(\/\*[\s\S]*?\*\/|\/\/[^\n]*)|(`(?:\\[\s\S]|[^`\\])*`|"(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*')|\b(const|let|var|function|return|if|else|for|while|do|switch|case|break|continue|new|delete|of|in|typeof|instanceof|void|null|undefined|true|false|this|class|extends|import|from|export|default|await|async|try|catch|finally|throw)\b|(\b\d[\w.]*\b)|\.([A-Za-z_$][\w$]*)(?=\s*\()|\.([A-Za-z_$][\w$]*)|([A-Za-z_$][\w$]*)(?=\s*\()|[A-Za-z_$][\w$]*/g;
  var out='',last=0,m;
  while((m=re.exec(src))!==null){
    out+=esc(src.slice(last,m.index));
    if(m[1])out+=sp('tok-com',m[1]);
    else if(m[2])out+=sp('tok-str',m[2]);
    else if(m[3])out+=sp('tok-key',m[3]);
    else if(m[4])out+=sp('tok-num',m[4]);
    else if(m[5]!==undefined)out+='.'+sp('tok-fn',m[5]);
    else if(m[6]!==undefined)out+='.'+sp('tok-prop',m[6]);
    else if(m[7]!==undefined)out+=sp('tok-fn',m[7]);
    else out+=esc(m[0]);
    last=re.lastIndex;
  }
  return out+esc(src.slice(last));
}
function hlCSS(src){
  var re=/(\/\*[\s\S]*?\*\/)|("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')|(#[0-9a-fA-F]{3,8}\b)|(-?\b\d[\d.]*(?:px|em|rem|vh|vw|vmin|vmax|%|s|ms|deg|fr|pt)?\b)|(@[\w-]+)|([.#][A-Za-z_][\w-]*)|([A-Za-z-]+)(?=\s*:)|([{}();:,])/g;
  var out='',last=0,m;
  while((m=re.exec(src))!==null){
    out+=esc(src.slice(last,m.index));
    if(m[1])out+=sp('tok-com',m[1]);
    else if(m[2])out+=sp('tok-str',m[2]);
    else if(m[3])out+=sp('tok-num',m[3]);
    else if(m[4])out+=sp('tok-num',m[4]);
    else if(m[5])out+=sp('tok-key',m[5]);
    else if(m[6])out+=sp('tok-sel',m[6]);
    else if(m[7])out+=sp('tok-prop',m[7]);
    else if(m[8])out+=sp('tok-punc',m[8]);
    else out+=esc(m[0]);
    last=re.lastIndex;
  }
  return out+esc(src.slice(last));
}
function hlHTML(src){
  // \x3c=< \x3e=> （HTMLの生タグを正規表現ソースに書かず、リンター/パーサ誤認を避ける）
  var re=/(\x3c!--[\s\S]*?--\x3e)|(\x3c\/?)([a-zA-Z][\w-]*)|([a-zA-Z_:][\w:.-]*)(=)("[^"]*"|'[^']*')|(\/?\x3e)/g;
  var out='',last=0,m;
  while((m=re.exec(src))!==null){
    out+=esc(src.slice(last,m.index));
    if(m[1])out+=sp('tok-com',m[1]);
    else if(m[2]!==undefined)out+=sp('tok-punc',m[2])+sp('tok-tag',m[3]);
    else if(m[4]!==undefined)out+=sp('tok-attr',m[4])+esc(m[5])+sp('tok-str',m[6]);
    else if(m[7])out+=sp('tok-punc',m[7]);
    else out+=esc(m[0]);
    last=re.lastIndex;
  }
  return out+esc(src.slice(last));
}
const HLFN={js:hlJS,css:hlCSS,html:hlHTML};
const EDITORS=[
  {ta:edJS, code:document.getElementById('hlJS'), lang:'js'},
  {ta:edHTML, code:document.getElementById('hlHTML'), lang:'html'},
  {ta:edCSS, code:document.getElementById('hlCSS'), lang:'css'}
];
function syncScroll(ed){ const pre=ed.code.parentNode; pre.scrollTop=ed.ta.scrollTop; pre.scrollLeft=ed.ta.scrollLeft; }
/* ハイライタは打鍵のたびに同期実行される。正規表現は1行の長さに対して二次関数的に遅くなるため、
   長いdata URIを1行貼り付けただけで1打鍵ごとに数秒固まる（実測: 1行4万字で5.8秒）。
   色付けは「読みやすさ」の付加価値であり、入力の応答性より優先されるものではないので、
   重すぎる時は色を諦めて素のテキストを表示する（編集自体は問題なく続けられる） */
const HL_MAX_TOTAL=20000, HL_MAX_LINE=2000;
function tooHeavyToHighlight(v){
  if(v.length>HL_MAX_TOTAL) return true;
  let start=0;
  for(;;){
    const nl=v.indexOf('\n',start);
    const end=nl<0?v.length:nl;
    if(end-start>HL_MAX_LINE) return true;
    if(nl<0) return false;
    start=nl+1;
  }
}
function refresh(ed){
  const v=ed.ta.value;
  if(tooHeavyToHighlight(v)) ed.code.textContent=v+'\n';
  else ed.code.innerHTML=HLFN[ed.lang](v)+'\n';
  syncScroll(ed);
}
function refreshAll(){ EDITORS.forEach(refresh); }

function scheduleRun(){ if(!autorun.checked)return; clearTimeout(timer); timer=setTimeout(run,500); }
EDITORS.forEach(ed=>{
  const ta=ed.ta;
  let escaping=false;   // Escape の直後だけ Tab を素通しさせ、窓から出られるようにする（VS Codeと同じ作法）
  ta.addEventListener('input',()=>{ refresh(ed); scheduleRun(); });
  ta.addEventListener('scroll',()=>syncScroll(ed));
  ta.addEventListener('blur',()=>{ escaping=false; });
  ta.addEventListener('keydown',e=>{
    // ドロワー用の「Escで閉じる」に伝播させない（コード窓のEscは脱出予約のため）
    if(e.key==='Escape'){ escaping=true; e.stopPropagation(); return; }
    if(e.key!=='Tab'){ escaping=false; return; }
    // Tab を無条件に奪っていたため、キーボードだけの利用者はコード窓に入ると二度と出られなかった。
    // Shift+Tab も奪っていた（逆方向にも逃げられない）＝WCAG 2.1.2 キーボードトラップ。
    // Esc直後 と Shift+Tab は素通しして、確実に外へ出られる経路を残す
    if(escaping||e.shiftKey){ escaping=false; return; }
    e.preventDefault();
    const s=ta.selectionStart,en=ta.selectionEnd;
    ta.value=ta.value.slice(0,s)+'  '+ta.value.slice(en);
    ta.selectionStart=ta.selectionEnd=s+2;
    refresh(ed);
    scheduleRun();
  });
});
/* 「自動実行」がONの間は実行ボタンを押す必要がない＝脈動させない（CTAの主張と実態を一致させる） */
function syncRunEmphasis(){ document.body.classList.toggle('manual-run', !autorun.checked); }
autorun.addEventListener('change', syncRunEmphasis);
syncRunEmphasis();
document.getElementById('runBtn').onclick=run;
document.getElementById('resetBtn').onclick=resetBase;

// タブレット以下では 自動実行/リセット/実行 をバリエ・プレビューの下（stack内）へ移す
(function(){
  const controls=document.getElementById('controls');
  const toolbar=document.querySelector('.toolbar');
  const slot=document.getElementById('mobileControls');
  if(!controls||!toolbar||!slot)return;
  const mq=matchMedia('(max-width:1024px)');
  const place=()=>{ (mq.matches?slot:toolbar).appendChild(controls); };
  place();
  mq.addEventListener('change',place);
})();

/* ============ ハンバーガーメニュー（タブレット以下で「動きを学ぶ」を開閉） ============ */
const menuToggleEl=document.getElementById('menuToggle');
const menuBackdropEl=document.getElementById('menuBackdrop');
const effectsPaneEl=document.getElementById('effectsPane');
let lastFocusBeforeMenu=null;
// 開閉で読み上げ文言を切り替える（aria-expanded="true" なのに「開く」と読ませない）
function syncMenuLabel(){
  if(!menuToggleEl) return;
  const open=document.body.classList.contains('menu-open');
  menuToggleEl.setAttribute('aria-label', t(open?'menu_close_aria':'menu_open_aria'));
}
function openMenu(){
  lastFocusBeforeMenu=document.activeElement;
  document.body.classList.add('menu-open');
  if(menuToggleEl)menuToggleEl.setAttribute('aria-expanded','true');
  syncMenuLabel(); syncPaneRole(); syncPaneInert();
  if(effectsPaneEl){
    const first=document.getElementById('search')||effectsPaneEl.querySelector('button,input,a');
    if(first)first.focus();
  }
}
function closeMenu(){
  const wasOpen=document.body.classList.contains('menu-open');
  document.body.classList.remove('menu-open');
  if(menuToggleEl)menuToggleEl.setAttribute('aria-expanded','false');
  syncMenuLabel(); syncPaneRole(); syncPaneInert();
  if(wasOpen && lastFocusBeforeMenu && lastFocusBeforeMenu.focus){ lastFocusBeforeMenu.focus(); }
  lastFocusBeforeMenu=null;
}
function toggleMenu(){ document.body.classList.contains('menu-open')?closeMenu():openMenu(); }
if(menuToggleEl) menuToggleEl.addEventListener('click',toggleMenu);
if(menuBackdropEl) menuBackdropEl.addEventListener('click',closeMenu);
document.addEventListener('keydown',e=>{ if(e.key==='Escape') closeMenu(); });
// サイドバーの役割を画面幅で出し分け：≤1024px=ドロワー→dialog / PC=常時表示→通常領域（role/aria-modalを外す）
const paneMq=matchMedia('(max-width:1024px)');
function syncPaneRole(){
  if(!effectsPaneEl)return;
  if(paneMq.matches){
    effectsPaneEl.setAttribute('role','dialog');
    effectsPaneEl.setAttribute('aria-modal', document.body.classList.contains('menu-open')?'true':'false');
  }else{
    effectsPaneEl.removeAttribute('role');
    effectsPaneEl.removeAttribute('aria-modal');
  }
}
/* inert で「操作できる範囲」を実態に合わせる。
   - 閉じている時：ドロワーは transform で画面外にあるだけで中身は生きており、
     Tabを4回押すと画面外(x=-292)の検索欄へフォーカスが飛んでいた
   - 開いている時：背後が生きており、aria-modal だけでは背景へフォーカスが漏れていた
   PC（>1024px）はドロワーではなく常時表示の領域なので、どちらも不活性にしない */
function syncPaneInert(){
  if(!effectsPaneEl) return;
  const drawer=paneMq.matches;
  const open=document.body.classList.contains('menu-open');
  effectsPaneEl.inert = drawer && !open;
  [document.querySelector('.header'),document.querySelector('.toolbar'),
   document.querySelector('.stack'),document.querySelector('.ticker')]
    .forEach(el=>{ if(el) el.inert = drawer && open; });
}
paneMq.addEventListener('change',()=>{ syncPaneRole(); syncPaneInert(); });
syncPaneRole(); syncPaneInert();
// ドロワー内でTabを循環させる（簡易フォーカストラップ）
if(effectsPaneEl) effectsPaneEl.addEventListener('keydown',e=>{
  if(e.key!=='Tab'||!document.body.classList.contains('menu-open'))return;
  const list=[...effectsPaneEl.querySelectorAll('button:not([hidden]),input,a[href],[tabindex]:not([tabindex="-1"])')].filter(el=>el.offsetParent!==null);
  if(!list.length)return;
  const first=list[0], last=list[list.length-1];
  if(e.shiftKey && document.activeElement===first){ e.preventDefault(); last.focus(); }
  else if(!e.shiftKey && document.activeElement===last){ e.preventDefault(); first.focus(); }
});

/* ============ 検索（全言語横断） ============ */
function clearSearch(){
  searchQuery='';
  const se=document.getElementById('search'); if(se&&se.value)se.value='';
  const sc=document.getElementById('searchClear'); if(sc)sc.hidden=true;
}
const searchEl=document.getElementById('search');
const searchClearEl=document.getElementById('searchClear');
if(searchEl){
  searchEl.addEventListener('input',()=>{
    searchQuery=searchEl.value;
    const has=!!searchQuery.trim();
    if(searchClearEl) searchClearEl.hidden=!has;
    if(has){
      document.querySelectorAll('.tab').forEach(t=>t.classList.remove('on'));
      renderList();          // 全言語の結果一覧を表示（クリックでその言語へ移動）
    } else {
      selectCat(catIndex);   // 検索が空になったらカテゴリ表示へ戻す
    }
  });
  // 検索文字が入っている時のEscは「検索を消す」。ここで止めないと document 側のEscにも届き、
  // 検索だけ消したいのにドロワーごと閉じてしまう。空の時は伝播させて閉じる（そちらが期待どおり）
  searchEl.addEventListener('keydown',e=>{
    if(e.key!=='Escape') return;
    if(searchEl.value){ e.stopPropagation(); searchEl.value=''; selectCat(catIndex); }
  });
}
if(searchClearEl){
  searchClearEl.addEventListener('click',()=>{ if(searchEl) searchEl.value=''; selectCat(catIndex); if(searchEl) searchEl.focus(); });
}

/* ============ コードのコピー ============ */
document.querySelectorAll('.copybtn').forEach(btn=>{
  btn.addEventListener('click',async(e)=>{
    e.stopPropagation();   // 見出しタップの開閉に伝播させない
    const ta=document.getElementById(btn.dataset.target);
    if(!ta) return;
    let ok=false;
    try{ await navigator.clipboard.writeText(ta.value); ok=true; }
    catch(e){
      try{ const a=ta.selectionStart,b=ta.selectionEnd; ta.focus(); ta.select(); ok=document.execCommand('copy'); ta.setSelectionRange(a,b); }catch(_){}
    }
    const prev=btn.textContent;
    btn.textContent = ok ? t('copy_done') : (LANG==='en'?'Failed':'失敗');
    btn.classList.toggle('done',ok);
    setTimeout(()=>{ btn.textContent = ok ? t('copy') : prev; btn.classList.remove('done'); },1200);
  });
});

/* ============ 共有（この項目へのリンクをコピー） ============ */
(function(){
  const sb=document.getElementById('shareBtn');
  if(!sb) return;
  sb.addEventListener('click',async()=>{
    writeHash('replace');            // 現在の項目でURLを最新化
    const url=location.href;
    let ok=false;
    try{ await navigator.clipboard.writeText(url); ok=true; }
    catch(e){ try{ const ta=document.createElement('textarea'); ta.value=url; ta.style.position='fixed'; ta.style.left='-9999px'; document.body.appendChild(ta); ta.select(); ok=document.execCommand('copy'); document.body.removeChild(ta); }catch(_){} }
    sb.textContent = ok ? t('share_done') : t('share_fail');
    sb.classList.toggle('done',ok);
    pushLog('info', ok ? (LANG==='en'?('Link copied: '+url):('リンクをコピーしました: '+url)) : (LANG==='en'?'Copy failed':'コピーに失敗しました'));
    setTimeout(()=>{ sb.textContent=t('share'); sb.classList.remove('done'); },1400);
  });
})();

/* ============ 下段パネルの開閉（タブレット以下でアコーディオン） ============ */
document.querySelectorAll('.p-log .pane-toggle, .p-js .pane-toggle, .p-html .pane-toggle, .p-css .pane-toggle').forEach(btn=>{
  btn.addEventListener('click',()=>{
    if(!matchMedia('(max-width:1024px)').matches) return;   // PCでは常時展開（アコーディオンはタブレット以下のみ）
    const collapsed=btn.closest('.pane').classList.toggle('collapsed');   // 既定は開。押すと閉じる
    btn.setAttribute('aria-expanded', collapsed?'false':'true');
  });
});
/* PCではアコーディオンにならない（押しても何も起きない）のに aria-expanded="true" を名乗っていた。
   状態を持たないなら属性ごと外すのが正しい */
function syncAccordionRole(){
  const drawer=matchMedia('(max-width:1024px)').matches;
  document.querySelectorAll('.p-log .pane-toggle, .p-js .pane-toggle, .p-html .pane-toggle, .p-css .pane-toggle').forEach(btn=>{
    const pane=btn.closest('.pane');
    if(drawer){
      btn.setAttribute('aria-expanded', pane.classList.contains('collapsed')?'false':'true');
    }else{
      btn.removeAttribute('aria-expanded');
      pane.classList.remove('collapsed');   // 閉じたままPC幅へ戻ってコードが消えるのを防ぐ
    }
  });
}
paneMq.addEventListener('change',syncAccordionRole);
syncAccordionRole();

/* ============ 言語トグル ============ */
(function(){
  const tg=document.getElementById('langToggle');
  if(tg) tg.addEventListener('click',()=>setLang(LANG==='en'?'ja':'en'));
})();

/* ============ 起動 ============ */
const bootHash=location.hash;
// applyLang を先に済ませてから描画する。逆順だと selectLang の描画を applyLang が作り直し、
// 起動しただけでプレビューが2回実行されていた
applyLang();
selectLang(0);
// 共有リンク/ブックマークの #kind/カテゴリ/項目 から状態を復元
if(bootHash && /^#[a-z]+\/\d+\/\d+$/.test(bootHash)){
  try{ history.replaceState(null,'',bootHash); }catch(e){}
  applyStateFromHash();
}
window.addEventListener('popstate', applyStateFromHash);
window.addEventListener('hashchange', ()=>{ if(!restoringHash) applyStateFromHash(); });
if(!listEl.children.length){
  listEl.innerHTML='<p style="color:#FF6076;font-size:12px;padding:8px;line-height:1.6">'+
    esc(LANG==='en'?'Failed to load. Please open this page in an up-to-date Chrome, Edge or Firefox.':'読み込みに失敗しました。最新のChrome/Edge/Firefoxで開いてください。')+'</p>';
}
