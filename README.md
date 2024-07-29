# KidShift Webフロントエンド
## kidshift-web

### 概要 - Overview
- KidShiftのWebフロントエンド
- Vue.js + Quasar Framework
- Androidアプリ側の子供モードと同等の機能を提供

### 既知の問題 - Known Issues
- 初回ログイン時、2回以上のリロードが必要(キャッシュ処理不備)
- 特定のIMEでログインコードが正しく入力できない場合がある
- タスクを完了した際、自動で残高が更新されない（デスクトップで使用した場合のみ, モバイルではウォレットへの切り替えで再度取得される）
- タスク履歴をキャッシュしていない

<details>
<summary>デフォルトのREADME</summary>


# KidShift (kidshift-web)

KidShift web client

## Install the dependencies
```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```


### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).

</details>

### その他 - Others
- Github側（ミラー元, プライベートリポジトリ) でmainへのコミット時[Vercel](https://kidshift-web.vercel.app)に自動デプロイしています

### 関連
- [KidShift Alexa Skills](https://ns1b-gitea.nem.one/kidshift/kidshift-skills)
- [KidShift Androidクライアント](https://ns1b-gitea.nem.one/kidshift/KidShift)
- [KisShift バックエンド](https://ns1b-gitea.nem.one/kidshift/kidshift-be)
