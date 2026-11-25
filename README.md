# 一般教養サイト（仮称）

日常の疑問から知識を深め、世界の仕組みを探求するサイト。Astro + Starlight による静的サイトです。

正式なブランド名は未決定です。既存の Digital Literacy とデザイン・編集理念を共有します。

## 開発

Node.js 22.23.4 以上と npm が必要です。

```sh
npm ci
npm run dev
npm run build
npm run preview
```

## 記事の追加

記事は `src/content/docs/<分野>/<記事-slug>.md` に置きます。分野は暫定の6分野とし、追加・見直しは必要に応じて行います。3階層の分類は設けていません。

フロントマターの必須項目は `title` と `description` です。任意の `subtitle` はタイトルとサイドバーに表示されます。`sidebar.order` で分野内の表示順を指定します。概要は各分野の `index.md` に置きます。

同一サイトの内部リンクは表示ページの URL からの相対パス（末尾スラッシュあり）。サイトをまたぐ場合は公開先の絶対 URL を使用します。実在するページだけをリンクしてください。画像は記事と同じディレクトリに置き、相対パスを使います。

## 公開

公開予定 URL: https://pepe092788-sys.github.io/general-knowledge/

GitHub Settings → Pages → Build and deployment → Source を GitHub Actions に設定します。main の更新で `Deploy to GitHub Pages` が起動します。ビルド・公開の成否は Actions と実際のページで確認してください。
