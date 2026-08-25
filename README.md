# Legacy React Form

Visual Basic 6（VB6）風の業務フォームを、React・TypeScript・Tailwind CSSで再現したUIサンプルプロジェクトです。

レガシーUIらしい配色や立体的なコントロールをコンポーネント化し、現代的なUIとの比較やスタイルガイドも収録しています。

![form](./image.png)

## 主な機能

- VB6風のウィンドウ、タイトルバー、メニューバー、ステータスバー
- テキストボックス、セレクトボックス、ラジオボタン、ボタンなどのフォーム部品
- 共通コンポーネントを組み合わせた社員台帳
- VB6風UIと現代風UIの比較
- レスポンシブ表示
- VB6風スタイルの実装方法を紹介するスタイルガイド

## サンプルページ

| パス | 内容 |
| --- | --- |
| `/` | サンプルギャラリー |
| `/components` | `src/components` の全コンポーネント表示サンプル |
| `/employee-master` | VB6風社員台帳 |
| `/modern-master` | 現代風社員マスタ |
| `/guide` | VB6 UIスタイルガイド |

## 使用技術

- React 19
- TypeScript 6
- Vite 8
- Tailwind CSS 4
- Oxlint

## 必要な環境

- Node.js 20.19以降、または22.12以降
- npm

## セットアップ

リポジトリを取得し、依存パッケージをインストールします。

```bash
git clone https://github.com/murasuke/legacy-react-form.git
cd legacy-react-form
npm install
```

開発サーバーを起動します。

```bash
npm run dev
```

起動後、ターミナルに表示されるURL（通常は `http://localhost:5173`）をブラウザで開いてください。

## npmスクリプト

| コマンド | 内容 |
| --- | --- |
| `npm run dev` | 開発サーバーを起動します |
| `npm run build` | TypeScriptを検査し、本番用ファイルを生成します |
| `npm run lint` | Oxlintでソースコードを検査します |
| `npm run preview` | 本番ビルドをローカルでプレビューします |

## ディレクトリ構成

```text
legacy-react-form/
├── public/              # 静的ファイル
├── src/
│   ├── assets/          # 画像などのアセット
│   ├── components/      # VB6風の共通UIコンポーネント
│   ├── pages/           # 各サンプルページ
│   ├── App.tsx          # 画面の振り分けとトップページ
│   ├── index.css        # Tailwind CSSと共通スタイル
│   └── main.tsx         # アプリケーションのエントリーポイント
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## コンポーネント

`src/components` には、以下のVB6風UIコンポーネントがあります。

- `VBWindow` — ウィンドウ全体
- `VBTitleBar` — タイトルバー
- `VBMenuBar` — メニューバー
- `VBStatusBar` — ステータスバー
- `VBForm` — フォーム
- `VBFrame` — グループフレーム
- `VBTextBox` — テキスト入力
- `VBTextArea` — 複数行テキスト入力
- `VBCheckbox` — チェックボックス
- `VBSelect` — セレクトボックス
- `VBRadioGroup` — ラジオボタングループ
- `VBButton` — ボタン

各コンポーネントの表示と操作は `/components` で確認できます。

## ビルド

次のコマンドで本番用ファイルを生成します。

```bash
npm run build
```

生成されたファイルは `dist/` に出力されます。

## ライセンス

このプロジェクトは [MIT License](./LICENSE) のもとで公開されています。

商用・非商用を問わず、利用、複製、変更、再配布が可能です。詳細は [LICENSE](./LICENSE) を確認してください。
