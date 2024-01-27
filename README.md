## node

```
node -v
v18.13.0
```

**特定のワークスペースのみにインストールする場合は -w オプションをつけて実行**

```
npm i パッケージ -w ワークスペース名
```

**バックエンドとフロントエンドから共通モジュールを利用する**

```
npm run compile
```

**バックエンドとフロントエンドのpackage.jsonに共通モジュールのnameを依存関係に追記することで、共通モジュールを利用することが可能**

```
# packages/backend/package.json
# packages/frontend/package.json
{
  "dependencies": {
    "@monorepo-project/common": "^0.0.0", // 依存関係に追記
  }
}
```

**アプリの起動**

```
npm install

// 下記を別ターミナルで起動する
npm run start:dev:api
npm run start:app
```
