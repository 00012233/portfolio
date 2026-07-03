# 饶蓓（Astre）个人作品集网站 — 项目交接文档

> **最后更新**: 2026-07-03  
> **版本**: V3  
> **项目路径**: `C:\Users\86188\portfolio`  
> **GitHub**: `git@github.com:00012233/portfolio.git`（master 分支）

---

## 1. 项目概述

### 1.1 项目定位

为**饶蓓（Astre）**构建的个人作品集网站。Astre 是江西某高校的学生，专业方向为**项目运营、市场营销、品牌运营与内容运营**。网站目标是在不依赖第三方平台的前提下，完整、独立地展示她的项目经历、运营能力和数据思维。

### 1.2 网站目标效果

- 一张可以发给招聘方、导师、合作方的"数字名片"
- 不只是展示做了什么，更展示怎么做的、效果如何——侧重于运营过程和数据驱动
- 用她运营过的 QQ空间书法社团数据，做一个真正的**数据大屏**，作为她"运营+数据"双能力的证明
- 设计质感对标 Apple、Notion、Linear、Stripe——避免模板/博客/简历网站感
- 中英文双语，默认中文（zh-CN），支持切换英文（en-US）
- 多页结构（不是单页滚动），每页独立路由
- 部署在 GitHub Pages，中国可访问

### 1.3 当前开发阶段

**V3 重构已完成**（12 页全部构建通过，`npm run build` 零错误）。核心功能均已实现，但**内容多为占位数据**：3 段工作经历描述未填，所有图片/照片文件夹为空，Calligraphy Dashboard 使用的是 30 条示例数据而非真实的 95 张截图 OCR 结果。

**整体进度：≈75% 完成**（框架 100%，内容 ≈30%，部署 ≈80%）

---

## 2. 用户需求与设计理念

### 2.1 核心需求回顾

| 需求 | 状态 |
|------|------|
| 100% 双语，零硬编码字符串 | ✅ 已完成 |
| Morandi 绿色美学 | ✅ 已完成 |
| 7 大页面 + 独立项目详情页 | ✅ 已完成 |
| 联系弹窗（邮箱/电话复制 + 简历下载） | ✅ 已完成 |
| 书法社数据大屏（OCR → KPI → 图表 → AI 报告） | ✅ 框架完成，数据为示例 |
| 管理后台（密码保护编辑） | ✅ 简单版完成 |
| 文件级 CMS（content/ 文件夹结构） | ✅ 目录已建，自动加载尚未实现 |
| 工作 VS 项目经历的分离 | ✅ 已完成 |
| 用户照片轮播 | ✅ 组件完成，图片为空 |
| Canva 作品集展示 | ✅ 已预留 |
| GitHub Pages 部署 | ✅ 基础配置完成，国内访问不稳定 |

### 2.2 设计偏好

1. **色彩方案（Morandi Green）**：
   - 主色 `#A8C3A0`（莫兰迪绿）
   - 背景 `#F4F7F3`（暖白/浅绿底）
   - 文字主色 `#2E3A34`（深绿黑）
   - 辅助文字 `#6B7F75`（中绿灰）
   - 柔和文字 `#8FA398`
   - 强调色 `#9BB8A7`
   - 边框 `#D4E0D5`

2. **字体**：`Inter` + `PingFang SC` + `Noto Sans SC`（优先系统字体，避免额外加载）

3. **交互风格**：
   - Framer Motion 动画：元素淡入上移、卡片悬浮微抬、交错入场
   - 导航栏 Glass-morphism（毛玻璃效果）
   - 所有交互应"轻盈且安静"，不花哨
   - 移动端汉堡菜单、响应式布局优先

4. **命名与身份**：
   - 使用 **Astre**（不是"饶蓓"或"Astre Rao"）
   - 职称用 **Executive Chairperson**（不是 President）
   - 网站标题不含姓氏

5. **关键决策**：
   - 选择 Next.js App Router + 静态导出（`output: 'export'`），而非 SPA —— 确保 SEO 友好，每页独立 HTML
   - 不依赖后端/数据库 —— 全部静态文件，数据硬编码在 `src/data/content.ts`
   - GitHub Pages 而非 Vercel —— Vercel 在中国被墙
   - SSH 密钥认证推送 GitHub —— 中国网络 HTTPS 被阻
   - 不使用外部 CDN 字体/图标库 —— 避免大陆网络加载超时

---

## 3. 当前已完成内容

### 3.1 已完成的页面（12 页）

| 路由 | 文件 | 说明 |
|------|------|------|
| `/` | `src/app/page.tsx` | 首页 Hero：头像区域 + 姓名/头衔/个人简介 + 两个 CTA 按钮 + 联系弹窗 |
| `/about` | `src/app/about/page.tsx` | 关于我：左列头像+轮播预留，右列 4 段个人陈述 |
| `/experience` | `src/app/experience/page.tsx` | 经历页：工作经历(3) + 项目经历(3)，带卡片悬浮动画 |
| `/project/student-union` | `src/app/project/[id]/page.tsx` + `ProjectDetailClient.tsx` | 学生会项目详情：6 个内容区、案例研究、图片预留 |
| `/project/calligraphy` | 同上 | 书法社项目详情：5 个内容区、案例研究、大屏链接 |
| `/project/innovation` | 同上 | 创新项目详情：6 个内容区、案例研究 |
| `/project/calligraphy/dashboard` | `src/app/project/calligraphy/dashboard/page.tsx` | 数据大屏（最复杂的单文件≈362行） |
| `/skills` | `src/app/skills/page.tsx` | 技能页：工具+AI工具+Claude Code 卡片，可展开 |
| `/admin` | `src/app/admin/page.tsx` | 管理后台：密码登录 + 内容管理提示 |

### 3.2 已完成的功能

- **双语系统**：`LanguageContext` + `t()` 函数 + `pick()` 函数，LocalStorage 持久化
- **联系弹窗**：点击复制邮箱/电话（`navigator.clipboard.writeText`），简历下载链接
- **语言切换**：固定在导航栏右侧，`中文`/`EN` 按钮
- **管理认证**：密码 `admin123`，LocalStorage 存储，AdminContext 全局状态
- **照片轮播**：`PhotoCarousel` 组件，自动轮播 4s，悬停暂停，前后按钮 + 圆点指示器
- **数据大屏**：KPI 卡片、时间线分隔、Before/After 对比、月度趋势折线图、内容类型柱状图、Top 10 排名、可编辑表格（管理员）、AI 运营报告
- **响应式**：移动端汉堡菜单、网格自适应
- **动画**：页面入场交错动画、卡片悬浮效果、弹窗缩放淡入

### 3.3 已完成的组件

| 组件 | 文件 | 功能 |
|------|------|------|
| `Navbar` | `src/components/layout/Navbar.tsx` | 固定导航，毛玻璃背景，移动端汉堡菜单 + Framer Motion 动画 |
| `Footer` | `src/components/layout/Footer.tsx` | 版权信息 + 技术栈声明 |
| `LanguageToggle` | `src/components/layout/LanguageToggle.tsx` | 中/英切换按钮 |
| `ContactModal` | `src/components/ui/ContactModal.tsx` | 全屏遮罩弹窗，邮箱/电话复制，简历下载 |
| `PhotoCarousel` | `src/components/ui/PhotoCarousel.tsx` | 自动轮播，空状态兜底 |

### 3.4 已完成的数据结构

所有类型定义在 `src/types/index.ts`：
- `Bilingual<T>` — 双语字段泛型（`{ zh: T; en: T }`）
- `WorkItem` — 工作经历（公司名、时间段、描述）
- `ProjectItem` — 项目经历（标题、角色、时间段、摘要 + 分区数组 `ProjectSection[]`）
- `SkillItem` — 技能（名称、用途、类型 tool/ai/automation）
- `CaseStudyData` — 深度案例研究
- `AnalyticsPost` — 书法社 QQ空间帖子数据
- `AnalyticsData` — 数据分析结果（KPI + Before/After）

### 3.5 已完成的样式设计

- `src/app/globals.css`：TailwindCSS v4 `@theme inline` 自定义颜色令牌
- 自定义滚动条样式（Morandi 绿色）
- `::selection` 选中色
- `prefers-reduced-motion` 无障碍支持
- 完整的 CSS 变量命名：`--color-primary`, `--color-bg`, `--color-text-primary` 等

---

## 4. 当前项目结构

### 4.1 目录树

```
portfolio/
├── .git/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions 自动部署到 gh-pages
├── .next/                          # Next.js 构建缓存
├── content/                        # 文件级 CMS 资源文件夹（所有子目录为空）
│   ├── photos/
│   │   ├── avatar.jpg              # （待放置）
│   │   ├── life/                   # 生活照片
│   │   └── campus/                 # 校园/活动照片
│   ├── work/
│   │   ├── roche/                  # 罗氏制药相关文件
│   │   ├── novonordisk/            # 诺和诺德相关文件
│   │   └── ganzhou/                # 赣州银行相关文件
│   ├── projects/
│   │   ├── student-union/
│   │   │   ├── images/
│   │   │   ├── videos/
│   │   │   └── docs/
│   │   ├── calligraphy/
│   │   │   ├── images/
│   │   │   ├── videos/
│   │   │   └── docs/
│   │   └── innovation/
│   │       ├── images/
│   │       ├── videos/
│   │       └── docs/
│   └── skills/
│       └── canva/
│           └── gallery/
├── node_modules/
├── out/                            # 静态导出输出目录（npm run build 生成）
├── public/                         # Next.js 公共静态资源（包含遗留 QR 文件）
│   ├── qr*.html                    # 遗留 QR 码页面
│   ├── qrcode*.png/svg/txt         # 遗留 QR 码文件
│   ├── *.svg                       # 占位 SVG（部分不需要）
│   └── favicon.ico                 # （已在 src/app/ 下）
├── src/
│   ├── app/
│   │   ├── layout.tsx              # ⭐ 根布局：metadata + LanguageProvider + AdminProvider
│   │   ├── page.tsx                # ⭐ 首页：Hero + ContactModal
│   │   ├── globals.css             # ⭐ 全局样式：Tailwind 主题 + 颜色令牌
│   │   ├── about/
│   │   │   └── page.tsx            # 关于我
│   │   ├── experience/
│   │   │   └── page.tsx            # 经历（工作+项目）
│   │   ├── skills/
│   │   │   └── page.tsx            # 技能
│   │   ├── admin/
│   │   │   └── page.tsx            # 管理后台
│   │   └── project/
│   │       ├── [id]/
│   │       │   ├── page.tsx        # 服务端组件：generateStaticParams + 数据查找
│   │       │   └── ProjectDetailClient.tsx  # 客户端组件：项目详情渲染
│   │       └── calligraphy/
│   │           └── dashboard/
│   │               └── page.tsx    # ⭐ 数据大屏（最复杂单文件）
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          # 导航栏
│   │   │   ├── Footer.tsx          # 页脚
│   │   │   └── LanguageToggle.tsx  # 语言切换
│   │   └── ui/
│   │       ├── ContactModal.tsx    # 联系弹窗
│   │       └── PhotoCarousel.tsx   # 照片轮播
│   ├── context/
│   │   ├── LanguageContext.tsx     # ⭐ 双语引擎核心
│   │   └── AdminContext.tsx        # 管理认证
│   ├── data/
│   │   └── content.ts              # ⭐ 全部网站内容（个人信息、经历、技能、案例）
│   ├── i18n/
│   │   ├── zh-CN.json              # 中文翻译字典
│   │   └── en-US.json              # 英文翻译字典
│   └── types/
│       └── index.ts                # TypeScript 类型定义
├── next.config.ts                  # Next.js 配置（output: 'export'）
├── tsconfig.json                   # TypeScript 配置（路径别名 @/ → src/）
├── tailwind.config.ts              # TailwindCSS 配置
├── package.json                    # 依赖声明
├── postcss.config.mjs              # PostCSS 配置
├── eslint.config.mjs               # ESLint 配置
├── README.md
└── PROJECT-HANDOVER.md             # 📍 本文档
```

### 4.2 关键文件作用


---

## 5. 技术实现

### 5.1 技术栈

| 层次 | 技术 | 版本 | 选择原因 |
|------|------|------|----------|
| 框架 | Next.js (App Router) | 16.2.9 | 支持静态导出 + 动态路由 + 中文生态良好 |
| UI | React | 19.2.4 | Next.js 内置 |
| 样式 | TailwindCSS | v4 | Utility-first，自定义主题令牌 |
| 动画 | Framer Motion | 12.42.2 | 声明式动画，AnimatePresence 支持 |
| 语言 | TypeScript | 5.x | 类型安全 |
| 部署 | GitHub Pages | — | 中国大陆可访问（不稳定但可用） |
| CGI | GitHub Actions | — | push → master 即自动部署 |
| OCR | tesseract.js | 7.0.0 | 浏览器端 OCR（已安装但未批量使用） |
| QR | qrcode | 1.5.4 | 本地生成 QR 码 PNG（遗留用途） |
| 测试 | Playwright | 1.61.1 | 已安装但未编写测试 |

### 5.2 重要实现方案

#### 5.2.1 双语系统

这是整个项目最核心的架构决策之一。

**Context 引擎** (`src/context/LanguageContext.tsx`)：
```ts
const { lang, setLang, t, pick } = useLanguage();

// t() 用于纯翻译文本（JSON 字典查找）
t('nav.home')  // → '首页' or 'Home'

// pick() 用于内容数据（选择对应语言的字段）
pick(item.title)  // → 根据当前语言返回 item.title.zh 或 item.title.en
```

- `lang` 持久化到 `localStorage` key `portfolio-lang`
- 首屏加载前执行内联 `<script>`（`layout.tsx` head 中），先读 localStorage 设置 `html.lang`，避免中文→英文闪烁
- 翻译字典在 `src/i18n/zh-CN.json` 和 `en-US.json`
- `t()` 支持点号嵌套路径：`t('contact.copyEmail')` → 深度查找

**所有文本必须经过 `t()` 或 `pick()`** —— 零硬编码字符串是设计目标。当前 Dashboard 中还存在少量硬编码的双语判断（如 `lang === 'zh-CN' ? '中文' : 'English'`），这是因为 dashboard 翻译未添加到 JSON 字典中，是待优化的点。

#### 5.2.2 多页架构 + 静态导出

- `next.config.ts` 中 `output: 'export'` —— 构建后在 `/out` 目录生成纯静态 HTML/CSS/JS
- 项目详情页使用 `generateStaticParams()` 预生成 3 个项目的静态页面
- `[id]/page.tsx` 是服务端组件（可以做 `generateStaticParams`），渲染逻辑委托给 `ProjectDetailClient.tsx`（客户端组件，可以使用 hooks）
- 这是解决 **Next.js 不允许在 'use client' 组件中使用 generateStaticParams** 的标准模式

#### 5.2.3 Framer Motion 类型问题

Framer Motion 的 `ease: 'easeOut'` 字符串直接传递会导致 TypeScript 错误（`Type 'string' is not assignable to type 'Easing'`）。解决方法：给 variant 对象加 `as const` 断言，并对 `ease` 值单独加 `as const`。

```ts
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } }
} as const;
```

#### 5.2.4 GitHub 部署（SSH 认证）

中国网络环境对 GitHub HTTPS 访问不稳定。解决方案：
1. 生成 SSH 密钥对：`ssh-keygen -t ed25519`
2. 在 GitHub 账户 Settings → SSH and GPG keys 添加公钥
3. 仓库远程地址设为 SSH：`git@github.com:00012233/portfolio.git`
4. GitHub Actions workflow（`.github/workflows/deploy.yml`）在 push master 时自动 `npm ci` → `npm run build` → 部署 `out/` 到 `gh-pages` 分支
5. GitHub Pages 设置：Source = "Deploy from a branch"，分支 = `gh-pages`，路径 = `/ (root)`

#### 5.2.5 自定义 HTTP 服务器

`next start` 会拦截静态 HTML 文件（如 `qr-local.html`），导致空白。解决方法：不需要生产服务器——直接用 `npx serve out/` 或任何静态文件服务器即可。`npm run dev` 用于开发即可。

---

## 6. 当前存在的问题

### 6.1 已知 Bug / 问题

1. **Dashboard 硬编码双语**：`dashboard/page.tsx` 中大量使用 `lang === 'zh-CN' ? '中文' : 'English'` 而不是 `t()` 调用，因为翻译未添加到 JSON 字典。应该添加到 `zh-CN.json` 和 `en-US.json` 中。

2. **ContactModal 初次渲染挂载事件监听**：ContactModal 在组件函数体内直接 `window.__openContact = ...`，这在 React Strict Mode 下可能产生问题。应移到 `useEffect` 中。

3. **AdminContext 在未挂载时返回 null**：`AdminProvider` 中 `if (!mounted) return null`，意味着在 SSR/hydration 阶段任何使用 `useAdmin()` 的组件都会报错。当前只有 Dashboard 使用了 `useAdmin`（仅在客户端渲染），因此暂时未暴露。

4. **PhotoCarousel 空数组**：`PhotoCarousel` 通过 `images.length === 0` 显示占位状态是正确的，但所有页面都给空数组 `[]`，用户看不到真实照片。

5. **GitHub Pages 中国访问不稳定**：部分网络可以访问，部分不行。未配置自定义域名（目前是 `00012233.github.io/portfolio`）。

6. **`qr*.html` 和 `qr*.*` 遗留文件**：`public/` 目录下有大量 QR 码生成的遗留文件（开发过程中尝试了多种方案），与当前网站功能无关。

### 6.2 尚未解决的问题

1. **OCR 流水线未批量运行**：`tesseract.js` 已安装并成功测试了单张图片 OCR（可以提取中文文字），但仅此而已。95 张QQ空间截图未被批量处理，Dashboard 使用的是 30 条手工编写的示例数据。

2. **文件级 CMS 未实现**：`content/` 目录结构已创建，但 `src/data/content.ts` 中的数据是硬编码的。没有实现"从 content 文件夹自动加载图片/文件"的功能。

3. **简历文件缺失**：ContactModal 中的"下载简历"指向 `/resume.pdf`，但 `public/` 和 `content/` 中都没有这个文件。

4. **用户头像缺失**：所有头像位置显示的是 SVG 占位图标。

5. **工作经历描述为占位文本**：3 段工作经历（罗氏制药、诺和诺德、赣州银行）的 description 字段都是"（待补充内容）"。

### 6.3 需要优化的地方

1. **Dashboard 翻译字典化**：将 Dashboard 的所有 UI 文本提取到 `zh-CN.json` / `en-US.json`
2. **SEO metadata 优化**：当前只设置了全局 metadata，各页面应该设置独立的 title/description
3. **代码拆分**：`dashboard/page.tsx` ≈362 行，包含页面逻辑 + 图表组件 + 数据分析函数，建议拆分为独立组件和工具函数
4. **测试覆盖**：Playwright 已安装但未编写任何测试
5. **性能优化**：`framer-motion` 包体较大（~150KB gzipped），如果需要可以迁移到更轻量的动画库或使用 CSS animation
6. **`content/` 与 `public/` 职责不清**：content 是文件 CMS 目录，public 是 Next.js 的静态资源目录。目前 content 下全是空文件夹，public 下是遗留文件，需要清理和明确职责

### 6.4 以后需要重构的地方

1. **管理后台功能极简**：Admin 页面只显示"编辑 src/data/ 和 src/i18n/，放入 content/ 文件夹"的提示，没有任何实际编辑功能。真正的 CMS 需要实现：内容编辑表单、图片上传、保存到 localStorage 或使用 GitHub API 提交
2. **数据和 UI 未分离**：`content.ts` 混合了展示数据和业务逻辑，应该分离
3. **CaseStudy 未正确关联**：`caseStudies` 数组定义了 3 个案例（student-assembly, immersive-script, society-growth），但与 `projectExperiences` 的关联逻辑有误——caseStudy 的 id 与 project 的 id 不一致

---

## 7. 未完成任务（按优先级排序）

### P0 — 阻塞上线

| # | 任务 | 建议实现方式 |
|---|------|-------------|
| 1 | **填充工作经历描述** | 用户在 `content.ts` 中修改 `workExperiences` 的 `description` 字段（当前是"待补充内容"），提供真实工作内容描述 |
| 2 | **添加用户照片** | 用户将个人照片放入 `content/photos/`：放入 `avatar.jpg`、`life/` 生活照、`campus/` 活动照。然后更新 `content.ts` 中的 `photoCarouselImages` 数组（目前为空数组 `[]`），填入文件路径 |
| 3 | **添加简历 PDF** | 将简历 PDF 放到 `public/resume.pdf`，使 ContactModal 的下载链接生效 |
| 4 | **清理 public/ 遗留文件** | 删除 `public/qr*.html`、`public/qrcode*.*` 等 QR 相关文件，以及不需要的 SVG 占位文件 |

### P1 — 重要功能

| # | 任务 | 建议实现方式 |
|---|------|-------------|
| 5 | **批量 OCR 处理 95 张截图** | 写一个 Node.js 脚本：遍历截图文件夹 → `tesseract.js` 识别 → 解析日期/浏览量/点赞/内容 → 输出替换 `SAMPLE_POSTS` 数组。脚本可放在 `scripts/ocr-batch.js` |
| 6 | **Dashboard 翻译字典化** | 将所有 Dashboard 中 `lang === 'zh-CN' ? '...' : '...'` 替换为 `t('dashboard.xxx')`，在两份 JSON 字典中添加 `dashboard` 区块 |
| 7 | **修复 CaseStudy 关联逻辑** | 重审 `src/app/project/[id]/page.tsx` 第 10 行：`caseStudies.find((c) => c.id === params.id || project?.id === c.id)` —— 目前 `student-union` 对应的 caseStudy id 是 `student-assembly`，需要重新对齐 |
| 8 | **图片上传到 content 文件夹** | 将各类活动的真实照片和截图放入对应的 `content/projects/[id]/images/` 目录，更新 `content.ts` 中 `sections` 的 `images` 字段 |

### P2 — 体验提升

| # | 任务 | 建议实现方式 |
|---|------|-------------|
| 9 | **各页面独立 SEO metadata** | 在每个 `page.tsx` 中导出 `metadata` 对象（仅服务端组件可以导出），客户端组件页面需要用服务端 wrapper 包装，或使用 `generateMetadata` |
| 10 | **拆分 Dashboard 代码** | 将 `BarChart`、`SimpleLineChart`、`KpiCard` 移到 `src/components/ui/` 下独立文件，`computeAnalytics` 移到 `src/data/analytics.ts` |
| 11 | **Canva 作品集展示** | 将 Canva 设计稿导出图片放入 `content/skills/canva/gallery/`，在技能页的 Canva 卡片展开时显示图片画廊 |
| 12 | **添加页面过渡动画** | 使用 Framer Motion `AnimatePresence` 包裹 layout children，实现路由切换的淡入淡出效果 |
| 13 | **添加 404 页面** | Next.js App Router 的 `not-found.tsx` 放在 `src/app/not-found.tsx`，设计匹配主题的自定义 404 页 |
| 14 | **ContactModal 改用 useEffect** | 把 `window.__openContact = ...` 移到 `useEffect(() => { ... }, [])` 中 |

### P3 — 可选增强

| # | 任务 | 建议实现方式 |
|---|------|-------------|
| 15 | **真实 CMS 编辑功能** | 可以使用 `localStorage` 作为存储，在 Admin 页面添加表单编辑 personalInfo、workExperiences 等字段。更高级的方案：用 GitHub API 直接提交修改到 content.ts |
| 16 | **Playwright 端到端测试** | 编写关键流程的测试：首页加载 → 点击联系 → 弹窗出现 → 切换语言 → 所有页面正常渲染 |
| 17 | **自定义域名** | 购买域名，配置 CNAME 指向 `00012233.github.io`，GitHub Pages 设置 Custom domain |
| 18 | **暗色模式** | 添加 Tailwind 的 `dark:` 变体支持，在 LanguageContext 旁增加 ThemeContext |
| 19 | **视频支持** | `ProjectSection` 类型中已有 `videoUrl` 字段，但 `ProjectDetailClient` 没有渲染视频播放器 |

---

## 8. 下一步开发建议

### 立即执行（本周，约需 30 分钟）

1. **联系用户获取内容**：工作经历描述、个人照片（avatar + life + campus）、简历 PDF
2. **清理遗留文件**：删除 `public/qr*.*` 等不需要的文件，减少混淆
3. **填充照片路径**：照片放入 `content/photos/` 后，更新 `content.ts` 中 `photoCarouselImages` 数组

### 短期优先（2-3 天）

1. **批量 OCR**：这是整个项目最有技术含量的部分，也是 Dashboard 数据真实性的关键。写一个批量处理脚本，跑通 95 张截图 → 替换示例数据
2. **Dashboard 翻译字典化**：消除硬编码双语，补充 `dashboard` 翻译区到 JSON 字典
3. **修复 CaseStudy 关联**：确保项目详情页正确匹配到对应的深度案例

### 中期规划（1-2 周）

1. **拆分大文件**、提高代码可维护性
2. **添加 404 页面 + SEO metadata**
3. **Canva 作品集展示功能**

---

## 9. 给新的 Claude Code Session 的说明

> **如果你是一个新的 Claude Code Session，请在继续任何开发工作前阅读以下内容。**

### 项目速览

这是一个名为 **Astre** 的学生（饶蓓）的个人作品集网站。项目在 `C:\Users\86188\portfolio`，使用 Next.js 16 App Router + TailwindCSS v4 + Framer Motion 构建。核心卖点是**完全双语**（zh-CN 默认 + en-US）和**书法社运营数据大屏**。

**构建命令**：`npm run build`（所有页面应零错误）

**开发命令**：`npm run dev`

### 三件必须知道的事

1. **永远不要硬编码文本**——所有 UI 文本通过 `useLanguage()` 的 `t('key.path')` 获取（查 `src/i18n/zh-CN.json` / `en-US.json`），所有内容文本通过 `pick(bilingualObject)` 获取。如果不确定某个文本是否在字典中，先查字典再添加。

2. **这是一个纯静态网站**（`next.config.ts` 中 `output: 'export'`）——不能使用 API Routes、Server Actions、Middleware、ISR 等动态功能。所有数据必须在构建时可用，在客户端通过 React state 管理。

3. **动态路由项目详情页的架构模式**：`src/app/project/[id]/page.tsx`（服务端组件，做 generateStaticParams + 查找数据）→ 传给 `ProjectDetailClient.tsx`（客户端组件，做 hooks 和动画）。这是模板——所有新增的动态路由页应遵循此模式。

### 项目状态

- **V3 重构已完成**，12 页全部构建通过
- **内容 70% 为占位数据**：工作描述未填、照片为空、Dashboard 数据为示例
- **核心内容文件**：`src/data/content.ts`（个人信息、经历、技能、案例，约 105 行）
- **最复杂文件**：`src/app/project/calligraphy/dashboard/page.tsx`（≈362 行，含图表组件和内联数据）
- **双语引擎**：`src/context/LanguageContext.tsx`
- **包管理器**：npm（不是 yarn 或 pnpm，package-lock.json 已存在）

### 当前会话的状态

上一步工作停止在 V3 构建完成后。网站已在 localhost:3000 打开（使用自定义 HTTP 服务器或 `npm run dev`）。Git 仓库当前在 `master` 分支，远程为 `git@github.com:00012233/portfolio.git`。

**V3 代码已构建但未推送到 GitHub**——当前的 out/ 和 .next/ 内容是最后一次构建的结果。

### 建议的第一个动作

1. 运行 `npm run build` 确认一切正常
2. 阅读 `src/data/content.ts` 理解数据模型
3. 查看 `src/app/project/calligraphy/dashboard/page.tsx` 理解最复杂的页面
4. 对于任何修改，先在 `src/i18n/` 字典中检查/添加翻译键

### 重要：中文字符注意

JSON 文件中使用中文全角引号 `「」` 替代 `""` —— 中文双引号会被 JSON 解析器误认为字符串结束符。在 `content.ts` 中也是如此，确保不把中文双引号直接放在 JSON/JS 字符串语法中。

---

> **文档维护**：本文件应随着项目重大变更而更新。建议在每次大阶段完成后更新"当前开发阶段"、问题状态和未完成任务列表。
