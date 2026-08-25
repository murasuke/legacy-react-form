import { useState } from 'react';
import { VBButton } from '../components/VBButton';
import { VBStatusBar } from '../components/VBStatusBar';
import { VBTextBox } from '../components/VBTextBox';
import { VBTitleBar } from '../components/VBTitleBar';

type CodeBlockProps = {
  children: string;
};

function CodeBlock({ children }: CodeBlockProps) {
  return (
    <pre className="vb-sunken mt-3 overflow-x-auto bg-[#000080] p-3 font-mono text-[12px] leading-5 text-white">
      <code>{children}</code>
    </pre>
  );
}
function SectionLabel({ children }: { children: string }) {
  return (
    <p className="mb-3 border-l-8 border-[#ff0000] bg-[#000080] px-2 py-1 text-[12px] font-bold text-white">
      <span className="mr-2 text-[#ffff00]">■</span>{children}
    </p>
  );
}
export function Vb6StyleGuidePage() {
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('Ready');

  function handleSubmit() {
    setMessage(
      userName
        ? `${userName} さんを登録しました。`
        : '名前を入力してください。',
    );
  }

  function handleClear() {
    setUserName('');
    setMessage('入力をクリアしました。');
  }

  return (
    <main className="min-h-screen bg-[#008080] px-2 py-4 text-[13px] text-black sm:px-4">
      <div className="mx-auto max-w-5xl border-2 border-t-white border-l-white border-r-[#404040] border-b-[#404040] bg-[#c0c0c0] p-1 shadow-[3px_3px_0_#000]">
        <header className="border border-[#000080] bg-[#000080] px-3 py-3 text-white">
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold text-[#ffff00]">
            <span>LEGACY REACT FORM</span>
            <span className="text-white">&gt;</span>
            <span>TECHNICAL DOCUMENT</span>
          </div>
          <h1 className="mt-1 font-serif text-2xl font-bold sm:text-3xl">
            VB6風フォームを、Reactで作る
          </h1>
          <p className="mt-2 text-[12px] leading-5">
            昔の業務アプリらしい密度と立体感を、ReactのコンポーネントとTailwind
            CSSで組み立てます。
          </p>
        </header>

        <nav className="mt-1 border border-[#808080] bg-[#d4d0c8] px-2 py-1" aria-label="パンくずリスト">
          <a className="text-[#0000ee] underline" href="/">HOME</a>
          <span className="mx-2">&gt;</span>
          <span className="font-bold">VB6 UI スタイルガイド</span>
        </nav>

        <div className="mt-1 grid gap-3 border border-[#808080] bg-white p-3">
          <div className="space-y-3">
            <section className="vb-raised bg-[#c0c0c0] p-4">
              <SectionLabel>01 / Environment</SectionLabel>
              <h2 className="text-xl font-bold text-[#000080]">
                まずは環境を確認
              </h2>
              <p className="mt-3 text-sm leading-7 text-black">
                ViteでReact + TypeScriptの開発環境を用意し、Tailwind CSS
                v4をViteプラグイン経由で読み込みます。
                JSXにクラスを書くと、必要なCSSだけが生成されます。
              </p>
              <CodeBlock>{`npm create vite@latest . -- --template react-ts
npm install -D tailwindcss @tailwindcss/vite`}</CodeBlock>
            </section>

            <section className="vb-raised bg-[#c0c0c0] p-4">
              <SectionLabel>02 / Tailwind recap</SectionLabel>
              <h2 className="text-xl font-bold text-[#000080]">
                Tailwindを深掘りする
              </h2>

              <div className="mt-5 border-t border-[#808080] pt-5">
                <h3 className="text-base font-bold text-[#000080]">
                  `@utility`：名前付きの見た目を定義する
                </h3>
                <p className="mt-2 text-sm leading-7 text-black">
                  Tailwind
                  v4の`@utility`を使うと、プロジェクト独自のユーティリティクラスを定義できます。
                  `vb-raised`や`vb-sunken`のように、役割が伝わる名前を付けるのがポイントです。
                </p>
                <CodeBlock>{`@utility vb-sunken {
  @apply border border-t-[#404040] border-l-[#404040]
    border-r-white border-b-white
    shadow-[inset_1px_1px_0_#808080,inset_-1px_-1px_0_#dfdfdf];
}`}</CodeBlock>
                <div className="mt-3 grid gap-2 text-sm text-black">
                  <p>
                    <strong className="text-[#000080]">定義：</strong>{' '}
                    ひとまとまりの見た目に名前を付けます。
                  </p>
                  <p>
                    <strong className="text-[#000080]">利用：</strong>{' '}
                    JSXでは通常のTailwindクラスと同じように指定します。
                  </p>
                  <p>
                    <strong className="text-[#000080]">効果：</strong>{' '}
                    Button、Panel、TitleBarなどで表現を共有できます。
                  </p>
                </div>
              </div>

              <div className="mt-5 border-t border-[#808080] pt-5">
                <h3 className="text-base font-bold text-[#000080]">
                  `@apply`：既存のルールを組み合わせる
                </h3>
                <p className="mt-2 text-sm leading-7 text-black">
                  `@apply`は、既存のTailwindユーティリティを自作クラスの中へ展開します。
                  小さな共通ルールを`@utility`で作り、コントロール毎の見た目を`@apply`で組み立てるイメージです。
                </p>
                <CodeBlock>{`
.vb-textbox {
  @apply vb-base vb-sunken min-h-[19px]
    bg-white px-1 py-0;
}`}</CodeBlock>
              </div>

              <div className="mt-5 border-t border-[#808080] pt-5">
                <h3 className="text-base font-bold text-[#000080]">
                  へこみと膨らみをつくる
                </h3>
                <p className="mt-2 text-sm leading-7 text-black">
                  左上から光が当たっていると考え、四辺の色と内側の影を組み合わせます。
                  Tailwindでは、四辺を個別に指定する`border-t/l/r/b-*`と、任意値を指定できる`shadow-[...]`を使います。
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <div className="vb-raised grid min-h-20 place-items-center bg-[#c0c0c0] p-3 text-sm font-bold text-[#000080]">
                    vb-raised
                  </div>
                  <div className="vb-sunken grid min-h-20 place-items-center bg-[#c0c0c0] p-3 text-sm font-bold text-[#000080]">
                    vb-sunken
                  </div>
                </div>
                <div className="mt-4 grid gap-3 text-sm text-black">
                  <div className="border-l-4 border-[#000080] bg-[#ffffcc] p-3">
                    <strong className="text-[#000080]">膨らみ：`vb-raised`</strong>
                    <p className="mt-1 leading-6">
                      `border`で1pxの境界線を作り、`border-t-white border-l-white`で上・左を明るく、
                      `border-r-[#404040] border-b-[#404040]`で右・下を暗くします。
                      さらに`shadow-[inset_-1px_-1px_0_#808080,inset_1px_1px_0_#dfdfdf]`で内側にも補助的な明暗を加えます。
                    </p>
                  </div>
                  <div className="border-l-4 border-[#808080] bg-white p-3">
                    <strong className="text-[#000080]">へこみ：`vb-sunken`</strong>
                    <p className="mt-1 leading-6">
                      膨らみの色を反転し、`border-t-[#404040] border-l-[#404040]`で上・左を暗く、
                      `border-r-white border-b-white`で右・下を明るくします。
                      影も`shadow-[inset_1px_1px_0_#808080,inset_-1px_-1px_0_#dfdfdf]`と反対向きにします。
                    </p>
                  </div>
                </div>
                <CodeBlock>{`/* 膨らみ：上・左が明るく、右・下が暗い */
@utility vb-raised {
  @apply border
    border-t-white border-l-white
    border-r-[#404040] border-b-[#404040]
    shadow-[inset_-1px_-1px_0_#808080,inset_1px_1px_0_#dfdfdf];
}

/* へこみ：上・左が暗く、右・下が明るい */
@utility vb-sunken {
  @apply border
    border-t-[#404040] border-l-[#404040]
    border-r-white border-b-white
    shadow-[inset_1px_1px_0_#808080,inset_-1px_-1px_0_#dfdfdf];
}`}</CodeBlock>
                <div className="mt-3 grid gap-2 text-sm text-black">
                  <p><strong className="text-[#000080]">`border`：</strong> 境界線の太さを作ります。</p>
                  <p><strong className="text-[#000080]">`border-t/l/r/b-*`：</strong> 上・左・右・下を別々の色にして、光と影を表現します。</p>
                  <p><strong className="text-[#000080]">`shadow-[...]`：</strong> 任意値の`inset`影です。`_`は値の区切り、2つの影はカンマで区切ります。</p>
                  <p><strong className="text-[#000080]">使い分け：</strong> Buttonや外枠には`vb-raised`、TextBoxやStatusBarには`vb-sunken`を適用します。</p>
                </div>
              </div>

              <div className="mt-5 border-t border-[#808080] pt-5">
                <h3 className="text-base font-bold text-[#000080]">
                  共通と個別を分ける
                </h3>
                <p className="mt-2 text-sm leading-7 text-black">
                  凹凸のルールは共通CSSに置き、画面ごとの幅や余白は呼び出し側の`className`で調整します。
                </p>
                <CodeBlock>{`/* 共通の見た目 */
.vb-button {
  @apply vb-base vb-raised bg-[#c0c0c0]
    px-3 py-[3px];
}

/* 画面固有の値 */
<VBButton className="min-w-[96px]">
  登録
</VBButton>`}</CodeBlock>
              </div>
            </section>
          </div>

          <div className="space-y-3">
            <section className="vb-raised bg-[#c0c0c0] p-4">
              <SectionLabel>03 / Components</SectionLabel>
              <h2 className="text-xl font-bold text-[#000080]">
                TextBoxとButtonを部品にする
              </h2>
              <p className="mt-3 text-sm leading-7 text-black">
                見た目をコンポーネントに閉じ込めると、画面側は「何を並べるか」に集中できます。
                ラベルや入力値はpropsで受け取ります。
              </p>
              <div className="mt-4 grid gap-3">
                <CodeBlock>{`export function VBTextBox({ label, ...props }) {
  return (
    <label className="vb-field">
      <span className="vb-field__label">{label}</span>
      <input className="vb-textbox" {...props} />
    </label>
  );
}`}</CodeBlock>
                <CodeBlock>{`export function VBButton({ children, ...props }) {
  return (
    <button className="vb-button" {...props}>
      {children}
    </button>
  );
}`}</CodeBlock>
              </div>
            </section>

            <section className="vb-raised bg-[#c0c0c0] p-4">
              <SectionLabel>04 / Live example</SectionLabel>
              <h2 className="text-xl font-bold text-[#000080]">
                フォームとして並べてみる
              </h2>
              <p className="mt-3 text-sm leading-7 text-black">
                共通部品を組み合わせるだけで、VB6風の入力フォームになります。
                画面固有の幅や余白は、呼び出し側の`className`で調整します。
              </p>

              <div className="vb-sunken mt-4 overflow-hidden bg-[#008080] p-3 sm:p-6">
                <section
                  className="vb-window mx-auto w-full max-w-[620px]"
                  aria-label="サンプルフォーム"
                >
                  <VBTitleBar title="顧客台帳 - 顧客の編集" />
                  <div className="vb-client-area min-h-0 p-4 sm:p-5">
                    <form
                      className="w-full"
                      onSubmit={(event) => {
                        event.preventDefault();
                        handleSubmit();
                      }}
                    >
                      <fieldset className="vb-groupbox p-3 sm:p-4">
                        <legend>顧客情報</legend>
                        <div className="grid gap-2">
                          <VBTextBox
                            label="顧客名："
                            value={userName}
                            onChange={(event) =>
                              setUserName(event.target.value)
                            }
                            autoFocus
                          />
                          <VBTextBox label="備考：" className="w-full" />
                        </div>
                      </fieldset>
                      <div className="mt-3 flex justify-end gap-2">
                        <VBButton type="submit">登録</VBButton>
                        <VBButton type="button" onClick={handleClear}>
                          クリア
                        </VBButton>
                      </div>
                    </form>
                  </div>
                  <VBStatusBar message={message} />
                </section>
              </div>

              <CodeBlock>{`<VBTextBox label="顧客名：" />
<VBTextBox label="備考：" className="w-full" />
<VBButton type="submit">登録</VBButton>`}</CodeBlock>
            </section>
          </div>
        </div>

        <footer className="mt-1 border border-[#808080] bg-[#000080] px-3 py-2 text-center text-[11px] text-white">
          <a className="text-[#ffff00] underline" href="/">トップページへ戻る</a>
          <span className="mx-2">｜</span>
          React × TypeScript × Tailwind CSS
        </footer>
      </div>
    </main>
  );
}
