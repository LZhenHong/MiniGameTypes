# MiniGameTypes

小游戏平台 TypeScript 类型定义文件集合。

> [!WARNING]
> **本项目中的类型定义文件由AI自动生成，可能存在不准确或不完整的情况。使用前请务必：**
> - 对照官方文档验证类型定义的准确性
> - 在实际项目中进行充分测试
> - 发现问题时以官方文档为准
> - 建议用户根据实际需求进行调整和完善

> [!CAUTION]
> 使用本项目即表示您理解并接受上述风险，请谨慎使用并自行承担相关责任。

## 项目说明

本项目包含芒果TV、抖音和支付宝小游戏平台的 TypeScript 类型定义文件，基于官方API文档制作。

## 支持的平台

| 平台         | 文件        | 官方文档            |
| ------------ | ----------- | ------------------- |
| 芒果TV小游戏 | `mgtv.d.ts` | [芒果TV开放平台][1] |
| 抖音小游戏   | `tt.d.ts`   | [抖音开放平台][2]   |
| 支付宝小游戏 | `my.d.ts`   | [支付宝开放平台][3] |

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

<!-- 链接 -->
[1]: https://open.mgtv.com/docs/minigame/api
[2]: https://developer.open-douyin.com/docs/resource/zh-CN/mini-game/develop/api/overview
[3]: https://opendocs.alipay.com/mini-game/
