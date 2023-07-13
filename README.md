# react18-antd5-template

致力打造成一个基于新版主流技术的React中后台模版
[预览地址](https://cszo.github.io/react18-antd5-template)

## 技术栈

`react18`、`vite4`、`antd5`、`typescript`、`react-router-dom6`

- [React-Router](https://reactrouter.com/en/main)
- [ReactJS](https://react.dev/)
- [Vite](https://vitejs.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Antd5](https://ant.design)
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)
- [emotion](https://emotion.sh/docs/introduction)

## 目录结构

```markdown
react18-antd5-template

├─src
| ├─components      // 公共组件
| ├─hooks           // 公共 hooks
| ├─layouts         // 页面布局
| ├─pages           // 典型页面
| ├─routes          // 路由配置
| ├─utils           // 工具函数
├─tsconfig.json     // ts配置
├─vite.config.ts    // vite配置
```

### 开始

- 安装依赖

   ```bash
   pnpm install
   ```

- 本地启动项目

   ```bash
   pnpm dev
   ```

- 生产环境打包

  ```bash
  pnpm build:prod
  ```

### 提交格式

- `feat`: 新增功能
- `fix`: 修复 bug
- `docs`: 仅仅修改了文档，比如 README, CHANGELOG 等等
- `test`: 增加/修改测试用例，包括单元测试、集成测试等
- `style`: 修改了空行、缩进格式、引用包排序等等（不改变代码逻辑）
- `perf`: 优化相关内容，比如提升性能、体验、算法等
- `refactor`: 代码重构，「没有新功能或者 bug 修复」
- `chore`: 改变构建流程、或者增加依赖库、工具等
- `revert`: 回滚到上一个版本
- `merge`: 代码合并
