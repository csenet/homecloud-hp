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

- メタタグ（description, keywords, author等）
- Open Graph Protocol (OGP) タグ
- Twitter Card タグ
- 構造化データ（JSON-LD）
  - Organization（組織情報）
  - ItemList（書籍一覧）
- Sitemap.xml
- Robots.txt

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
