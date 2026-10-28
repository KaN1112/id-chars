# ID CHARS

ゲームIDに使いたい特殊文字を検索し、ワンクリックでコピーできるWebツールです。お気に入り、コピー履歴、ID作成、英字のUnicodeスタイル変換をブラウザ内だけで利用できます。

## 開発

```bash
npm install
npm run dev
```

本番ビルドは `npm run build`、ローカル確認は `npm run preview` です。

## Vercelへのデプロイ

GitHubリポジトリをVercelへインポートし、Framework Presetに「Vite」を選択してください。

- Build Command: `npm run build`
- Output Directory: `dist`
- 環境変数: 不要

独自ドメインが決まった後、必要に応じて `index.html` のcanonical URLとOGP画像、`public/sitemap.xml`を追加してください。仮のURLは設定していません。

## 注意

収録文字が各ゲームで使えることを保証するものではありません。利用するサービスの最新ルールと実際の入力画面で確認してください。お気に入りと履歴はlocalStorageに保存され、外部へ送信されません。
