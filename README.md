# おうちクラウド研究部 公式サイト

おうちクラウド研究部の活動を紹介する公式サイトです。

## 技術スタック

- [Astro](https://astro.build/) - 静的サイトジェネレーター
- TypeScript

## 開発環境のセットアップ

### 必要な環境

- Node.js 18以上
- pnpm

### インストール

```bash
pnpm install
```

### 開発サーバーの起動

```bash
pnpm dev
```

ブラウザで http://localhost:4321 にアクセスしてください。

### ビルド

```bash
pnpm build
```

ビルドされたファイルは `dist/` ディレクトリに生成されます。

### プレビュー

```bash
pnpm preview
```

## SEO対策

以下のSEO対策を実装しています：

- ページごとに固有のタイトル・description・canonical URL
- Open Graph Protocol (OGP) タグ
- Twitter Card タグ
- 構造化データ（JSON-LD）
  - Organization / WebSite / WebPage（サークル・サイト・ページ情報）
  - ItemList（書籍一覧）、Book（書籍情報）、BreadcrumbList（パンくず）
- `/books/` 配下の書籍別紹介ページと関連書籍へのリンク
- Sitemap.xml
- Robots.txt

書籍情報は `src/data/books.ts` で管理します。書籍ページは静的生成され、サイトマップにも自動で追加されます。
公開URLは `astro.config.mjs` の `site` で指定します。ドメイン変更時は `public/robots.txt` のサイトマップURLも更新してください。

`/llms.txt` は書籍データからMarkdownとして静的生成します。AIエージェントやAPIを提供していないため、ARDの `ai-catalog.json` は公開していません。
`src/pages/404.astro` が出力する `/404.html` は、Cloudflare Pagesで未存在URLを正しく404にするために必要です。これを削除するとトップページへのSPAフォールバックが有効になり、Lighthouseが未存在のカタログを不正なJSONとして検出します。

faviconは `public/favicon.svg` が原本です。変更後に `npm run icons` を実行すると、ICO（16/32/48px）とApple Touch Iconを再生成できます。

公開後はGoogle Search Consoleでサイトマップを送信し、URL検査でクロール状況を確認してください。構造化データの追加自体は検索順位やリッチリザルト表示を保証するものではありません。

## プロジェクト構造

```
/
├── public/
│   ├── favicon.svg
│   ├── logo.png
│   └── robots.txt
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## ライセンス

© 2024 おうちクラウド研究部 All rights reserved.
