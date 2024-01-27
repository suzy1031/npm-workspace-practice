## init command

ref: [npm workspaceを利用してNestJS + Create React Appをモノレポ化しよう](https://note.com/shift_tech/n/nbecb007ac2ee)

```
// packages配下にcommon / backend / frontendワークスペースを作成
// optionで-wを指定
npm init -w packages/common -w packages/backend -w packages/frontend

# backend
npm i -g @nestjs/cli
npx nest new packages/backend

# packages/backend/package.json
{
    "name": "@monorepo-project/backend",
}

# frontend
npx create-react-app packages/frontend --use-npm --template typescript

# packages/frontend/package.json
{
    "name": "@monorepo-project/frontend",
}
```
