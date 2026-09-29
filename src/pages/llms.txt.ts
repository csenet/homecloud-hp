import type { APIRoute } from 'astro';
import { books } from '../data/books';

export const GET: APIRoute = ({ site }) => {
  const url = (path: string) => new URL(path, site).href;
  const content = `# おうちクラウド研究部

> 自宅サーバーやKubernetes、クラウド技術の実践をテーマに、技術同人誌を執筆・頒布するサークルです。

このサイトでは出版物とイベント参加歴を紹介しています。書籍の購入は技術書典またはBOOTHで行えます。価格、在庫、販売条件は各販売サイトをご確認ください。

## これまでの出版物

${books.map(book => `- [${book.title}](${url(`/books/${book.slug}/`)}): ${book.description}`).join('\n')}

## サークル情報

- [おうちクラウド研究部](${url('/')}): サークル紹介、出版物一覧、最近の活動歴。
- [特定商取引法に基づく表記](${url('/legal/')}): 販売事業者情報の開示請求先と販売条件の案内。

## 販売サイト

- [技術書典](https://techbookfest.org/organization/7ZKV9gyQ1aSZn92Jb8XA5K): サークルの書籍を頒布しています。
- [BOOTH](https://homecloud-lab.booth.pm/): サークルのオンラインショップです。
`;

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
