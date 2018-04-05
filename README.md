# react-redux-yahoo-api
React + Redux + WebAPI(thunkミドルウェア)を利用したアプリケーション

# ライブラリ
```
$ npm install --save redux react-redux redux-thunk redux-logger superagent
$ npm install --save react-router-dom history react-router-redux@next
```

# Yahoo Client ID
環境変数で以下のように定義しておく。
.env
```
REACT_APP_YAHOO_CLIENT_ID=<ここに定義>
```

# ビルド
```
$ npm run build
```

# ローカル起動
```
$ npm start
```

## 注意点
ローカル起動して実行した際にAPIは正常に200 OKを返すが、Chrome側で「Origin is not allowed by Access-Control-Allow-Origin」エラーとして検知されてしまったため、Chrome Extensionの「Allow-Control-Allow-Origin: *」を有効化して抑止した。
