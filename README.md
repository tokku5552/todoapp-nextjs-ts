# TodoApp sample Next.js/TypeScript

```
npx create-next-app todoapp --example with-typescript
```

# packages

```
npm install --save firebase
```

# setting firebase

```
firebase login
firebase init
```

# コマンド集

- コンテナを起動するとき

```
docker-compose up
docker-compose run -p 3000:3000 -p 4000:4000 -p 5000:5000 -p 5001:5001 -p 8080:8080 -p 9005:9005 node-container /bin/bash
```

- 起動済みのコンテナに接続するとき

```
docker ps
docker exec -it <CONTAINER ID> /bin/bash
docker exec -it "$(docker ps -qf "name=node-container")" /bin/bash
docker exec -it "$(docker ps -qf "name=node-container")" npm run dev
```

- コンテナを停止するとき

```
docker-compose down
docker-compose down --rmi all
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
