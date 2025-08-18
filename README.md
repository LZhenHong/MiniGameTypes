# MiniGameTypes

小游戏平台 TypeScript 类型定义文件集合。

## 项目说明

本项目包含芒果TV和抖音小游戏平台的 TypeScript 类型定义文件，基于官方API文档制作。

## 支持的平台

| 平台         | 文件        | 官方文档                                                                                             |
| ------------ | ----------- | ---------------------------------------------------------------------------------------------------- |
| 芒果TV小游戏 | `mgtv.d.ts` | [芒果TV开放平台](https://open.mgtv.com/docs/minigame/introduction)                                   |
| 抖音小游戏   | `tt.d.ts`   | [抖音开放平台](https://developer.open-douyin.com/docs/resource/zh-CN/mini-game/develop/api/overview) |

## 使用方法

1. 下载对应平台的 `.d.ts` 文件
2. 将文件放置到项目的 `types` 目录下
3. 在 `tsconfig.json` 中配置类型文件路径：

```json
{
  "compilerOptions": {
    "typeRoots": ["./types", "./node_modules/@types"]
  }
}
```

## 许可证

MIT
