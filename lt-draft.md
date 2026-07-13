# LT構成案

## タイトル案

**ReactでVBフォームを再発明する**


---

# 1. 導入：最近のフロントエンド、見た目のインパクトがない

```text
React、Tailwind、shadcn/ui、Radix、Headless UI……
便利だけど、見た目はだいたい今っぽくなる。

でも、ふと思ったんです。

「昔の業務アプリっぽいUI、ReactとTailwindで作ればいいんじゃないか？」
```

![alt text](image-1.png)

```text
今日は、これを捨てます。
目指すのは、Windows 95 / Visual Basic の Form1 です。
```

---

# 2. ゴール：作りたいもの

これが完成イメージです。

![alt text](image.png)

```tsx
<VBWindow title="社員ﾏｽﾀﾒﾝﾃ" status={status}>
  <VBForm onSubmit={handleSubmit}>
    <VBFrame title="【社員情報】">
      <VBTextBox label="ﾒｰﾙｱﾄﾞﾚｽ：" type="email" value={employee.email} />
      <div className="grid grid-cols-2 gap-4 max-[560px]:grid-cols-1 max-[560px]:gap-3">
        <VBTextBox label="姓：" value={employee.lastName} />
        <VBTextBox label="名：" value={employee.firstName} />
      </div>
    </VBFrame>

    <div className="mt-3 flex justify-end gap-2">
      <VBButton type="submit">登録</VBButton>
      <VBButton type="button">ｸﾘｱ</VBButton>
    </div>
  </VBForm>
</VBWindow>
```

ここで言いたいことは、

```text
やっていることは普通のReactコンポーネント。
でも見た目は完全にレガシー。
```


---

# 3. Windows 95 / VBっぽさの正体


```text
・背景は #c0c0c0
・角丸なし
・フォントは 14px
・「ｶﾀｶﾅ」は半角
・余白は狭い
・ボタンは左上が明るく、右下が暗い
・入力欄は逆に沈んでいる
・タイトルバーは濃い青
・全部ちょっと窮屈
```


```text
「古いUIっぽさ」は、雰囲気ではなくCSSで分解できる
```

---

# 4. Tailwindで立体ボタンを作る

ここで具体例。

```tsx
<button
  className="
    bg-[#c0c0c0] px-4 py-[2px] text-[11px]
    border
    border-t-white border-l-white
    border-r-[#404040] border-b-[#404040]
    shadow-[inset_-1px_-1px_0_#808080,inset_1px_1px_0_#dfdfdf]
  "
>
  OK
</button>
```

説明はシンプルでいいです。

```text
左上を白くする
右下を黒くする
これだけで「押せそう」になる
```

そして押下状態。

```tsx
active:border-t-[#404040]
active:border-l-[#404040]
active:border-r-white
active:border-b-white
active:translate-x-[1px]
active:translate-y-[1px]
```

ここで笑いどころ。

```text
現代UIでは影をふわっと付けます。
Windows 95では、白と黒で殴ります。
```

---

# 5. TextBoxは「沈ませる」

ボタンと逆に、入力欄は沈んでいるように見せます。

```tsx
<input
  className="
    bg-white px-1 py-[2px] text-[11px]
    border
    border-t-[#404040] border-l-[#404040]
    border-r-white border-b-white
    shadow-[inset_1px_1px_0_#808080,inset_-1px_-1px_0_#dfdfdf]
  "
/>
```

ここで整理。

```text
Button: raised
TextBox: sunken
Panel: raised / sunken
GroupBox: line + legend
```

つまり、VB風UIの基本は **raised と sunken の2種類**でかなり作れる。

---

# 6. Reactコンポーネント化する

ここでLTの技術的なメインに入ります。

```tsx
import type { ButtonHTMLAttributes } from 'react';

export type VBButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
};

export function VBButton({
  className = '',
  children,
  label,
  ...props
}: VBButtonProps) {
  return (
    <button className={`vb-button ${className}`} {...props}>
      {label ?? children}
    </button>
  );
}
```

ここで言いたいこと。

```text
Tailwindを直接HTMLに書き続けると地獄。
でもReactコンポーネントに閉じ込めると、急に扱いやすくなる。
```

さらに、

```text
見た目のルールをコンポーネントに封じ込める
= 小さなデザインシステム
```

とつなげると、ちゃんと技術LTになります。

---

# 7. ここで気づく：ReactはVBだった？

ここが一番おいしいパートです。

比較します。

```text
Visual Basic:
Form に Label / TextBox / CommandButton を置く

React:
Component に Label / TextBox / Button を置く
```

スライドに並べると面白いです。

```text
VB6                         React
------------------------------------------------
Form1                       <Win95Window>
Label                       <Win95Label>
TextBox                     <Win95TextBox>
CommandButton               <Win95Button>
Frame                       <Win95GroupBox>
```

そして一言。

```text
つまり、Reactコンポーネントは
令和のVBコントロールだったのでは？
```

ここはウケると思います。

---

# 8. でも中身はちゃんとモダン

ネタで終わらせず、React/Tailwindの良さを整理します。

```text
・見た目はVB風
・実装はReact
・スタイルはTailwind
・型はTypeScript
・状態管理も普通にできる
・アクセシビリティもちゃんと考えられる
・レスポンシブにもできる
```

ここで、

```text
見た目が古いだけで、設計まで古くする必要はない
```

というメッセージにすると締まります。

---

# 9. ハマりどころ

軽く実装上の注意点も入れると実用感が出ます。

```text
・checkbox / radio / select はブラウザ差が出やすい
・scrollbar の再現は面倒
・フォントは環境依存
・完全再現を目指すと沼
・雰囲気再現なら raised / sunken で十分
```

特にこの一言がいいです。

```text
完全再現を目指すと、WindowsのUI仕様と戦うことになります。
今日は雰囲気で勝ちます。
```

---

# 10. まとめ

最後はこういう感じ。

```text
React + Tailwind で、VBアプリ風UIは簡単に作れる

ポイントは3つ

1. レガシーっぽさをCSSのルールに分解する
2. raised / sunken を部品化する
3. Reactコンポーネントとして再利用する

そして気づきました。

Reactは、昔のVBフォームデザイナの夢を
Web上で再発明していたのかもしれません。
```

最後のスライドに、

```text
令和の Form1、完成。
```

と出すときれいです。

---

# スライド枚数案

5分LTなら **10〜12枚** くらいがちょうどいいです。

```text
1. タイトル：ReactコンポーネントはVBのコントロールだった説
2. 最近のフロントエンド、だいたい今っぽい
3. 今日はWindows 95/VB風フォームを作る
4. 完成イメージ
5. VBっぽさの正体
6. Tailwindでボタンを作る
7. TextBoxは沈ませる
8. Reactコンポーネント化する
9. VBとReactの対応表
10. でも中身はモダン
11. ハマりどころ
12. まとめ：令和のForm1
```

7〜10分なら、デモを入れて15枚くらいにしても良いです。

---

# このLTの一番強い軸

このネタは単なる懐古ではなく、ちゃんと以下につながります。

```text
見た目の再現
→ Tailwindの表現力

部品化
→ Reactコンポーネント設計

共通ルール化
→ デザインシステム

VBとの比較
→ UI部品配置の歴史

レガシー風だが中身はモダン
→ 技術移行・モダン化の話
```

なので、結論はこれが良さそうです。

**「ReactでVB風UIを作る」というネタを通じて、コンポーネント化とデザインシステムの本質を説明するLT**

これなら、笑えるし、技術的にも残ります。
