import proxmoxCover from '../assets/books/proxmox-kubernetes.png';
import practiceCover from '../assets/books/kubernetes-practice.png';
import swarmCover from '../assets/books/docker-swarm.png';
import checkoutCover from '../assets/books/serverless-checkout.png';

export const books = [
  {
    slug: 'proxmox-kubernetes',
    chapters: ['Kubernetesの基礎とハードウェア選び', 'ネットワークの構築とProxmoxの導入', 'Kubernetesクラスターの構築とアプリケーションのデプロイ', 'TailscaleによるアクセスとIaC・CDの活用'],
    title: 'Proxmoxで始めるおうちKubernetes超入門',
    cover: proxmoxCover,
    description: 'おうちでKubernetesを始めるための超入門書。基礎から丁寧に解説します。',
    shopUrl: 'https://techbookfest.org/product/dRrkud2mGwsmUJs9JJp1g1',
    boothUrl: 'https://homecloud-lab.booth.pm/items/6531584',
    tags: ['Kubernetes', '入門', 'おうちクラウド']
  },
  {
    slug: 'kubernetes-practice',
    chapters: ['Kubernetesリソースとクラスター構築', 'Ingressなどのネットワーク整備', 'ストレージとシークレットの管理', 'クラスター管理の効率化'],
    title: '実践！おうちKubernetes活用術',
    cover: practiceCover,
    description: 'Kubernetesをおうちで活用するための実践的なテクニックを紹介します。',
    shopUrl: 'https://techbookfest.org/product/pwKksfKHgCd77VFRssPgK0',
    boothUrl: 'https://homecloud-lab.booth.pm/items/7050197',
    tags: ['Kubernetes', '実践', '運用']
  },
  {
    slug: 'docker-swarm',
    chapters: ['Docker Swarmの基礎とクラスター構築', 'サービスのデプロイ・更新・スケール', 'Traefikによるサービス公開とストレージ整備', 'swarm-cdとSOPSを使ったGitOps'],
    title: 'Docker Swarmで始めるお手軽コンテナ運用',
    cover: swarmCover,
    description: 'Docker Swarmのクラスター構築からサービス公開、ストレージ、GitOpsまでを紹介します。',
    shopUrl: 'https://techbookfest.org/product/tCWHr7CQQFWm7ZjTEXZrxH',
    tags: ['Docker Swarm', 'コンテナ', '運用']
  },
  {
    slug: 'serverless-checkout',
    chapters: ['タッチディスプレイ・バーコードリーダー・レシートプリンタの調達', 'Cloudflare Workers・Hono・D1によるレジシステムの実装', 'Square APIとの連携とセルフ返金フロー', '音声フィードバックとイベントでの運用'],
    title: 'Cloudflareで作るサーバーレスセルフレジ開発記',
    cover: checkoutCover,
    description: '機材の調達から、Cloudflare Workers・D1・Square APIを使ったセルフレジの実装まで。イベントでの運用経験を交えて紹介します。',
    shopUrl: 'https://techbookfest.org/product/7X97gwedWvAgcLnjXtfiz',
    tags: ['Cloudflare', 'サーバーレス', 'セルフレジ']
  }
];

