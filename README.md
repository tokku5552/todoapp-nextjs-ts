# TodoApp sample Next.js/TypeScript

```
npx create-next-app todoapp --example with-typescript
```

# コマンド集

- コンテナを起動するとき

```
docker-compose up
docker-compose run -p 3000:3000 node-container /bin/bash
```

- 起動済みのコンテナに接続するとき

```
docker ps
docker exec -i -t <CONTAINER ID> /bin/bash
```

- コンテナを停止するとき

```
docker-compose down
```

- リポジトリからクローンしてきたとき

```
npm install
```

- ローカルでのサーバ立ち上げ

```
npm run dev
```

- デプロイ

```
npm run deploy
```
