# Portfolio 项目规范

## 技术栈
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS 4 (utility-first)
- Vitest + Testing Library (测试)

## 代码规范
- 组件使用 `"use client"` 当需要客户端交互时
- 页面组件默认服务端组件
- Tailwind 类名按此顺序：布局 → 尺寸 → 颜色 → 交互
- 数据文件放在 `src/lib/` 下
- 组件文件放在 `src/components/` 下

## 测试
- 每个组件至少有一个 describe 块
- 使用 @testing-library/react 进行渲染测试
- 使用 vi.mock() 模拟 next/navigation

## 提交信息格式
- `feat:` 新功能
- `fix:` 修复
- `docs:` 文档
- `test:` 测试
- `chore:` 工具/配置变更
