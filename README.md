# CAR ATELIER — Three.js 3D 名车互动展厅

基于 **Three.js + Vite + TypeScript** 的网页 3D 名车展厅。目前已接入高精度 CC BY 4.0 的 **Car Concept GLB** 作为默认展车，保留程序化 AURORA S1 样车；支持鼠标或触摸旋转、缩放、视角切换、车漆换色与全屏操作。

Car Concept 现在支持其原生 **Carmine Candy / Pearly Swirly / Torched Graphite** 三套车漆及内饰材质变体。模型几何体已使用 Meshopt 无损压缩，GLB 体积从约 11.77 MB 降至 **9.00 MB**。

页面以 **3D 车辆为主视觉**：右下角使用一个统一控制器，集中提供 **车辆信息 / 视角与车漆 / 车型列表** 三个选项。点击某项向上展开，再次点击或使用面板关闭按钮可收起；其他内容自动隐藏。手机端控制器固定在底部，横屏时收窄靠右并限制展开高度。也可点击展车区域或按 `Esc` 关闭面板。顶部保留纯净观车模式和可记住选择的**中文 / English** 切换。

模型二进制数据采用有容量限制的内存缓存；车辆静止时不再持续提交 WebGL 绘制，拖动、镜头过渡、切换车型及配色时正常重绘。

> Car Concept 是独立的高精度概念车型素材，不代表保时捷、法拉利等厂商的官方车型授权。作者、许可、来源、哈希及商标处理见[开发方案中的素材记录](docs/development-scheme.md#7-已用模型及授权证据)。

## 本地启动

环境要求：Node.js 20.19+ 或 22.12+。项目已提供 `package-lock.json`，新环境优先按锁文件安装：

```bash
npm ci
npm run dev
```

打开终端输出的本地地址。生产构建与本地预览：

```bash
npm run build
npm run preview
```

若本机配置的 npm 镜像缺少某个锁定版本，可以指定官方源安装：`npm ci --registry=https://registry.npmjs.org`。只有修改依赖清单时才运行 `npm install` 并同步提交更新的锁文件。

## 静态部署

1. 在 Node.js 环境执行 `npm ci` 和 `npm run build`。
2. 把 `dist/` **目录内的全部文件**部署到网站根目录，包括 `index.html`、`assets/`、`models/car-concept.glb` 和 `favicon.svg`；生产网站无需 Node.js 常驻进程。
3. 使用 HTTPS 打开网站，检查车型加载、材质切换、模型来源链接、中文/英文及控制面板。部署后仍需在真实手机上检查触摸、安全区和性能。

当前资源地址以网站根路径 `/models/...` 等形式引用，因此建议部署在域名根目录；如需部署在子路径，须同时调整 Vite `base` 与模型资源路径。

## 文档

从[文档中心](docs/README.md)统一进入：[开发方案](docs/development-scheme.md)记录技术设计、工程结构、模型接入与素材授权；[开发计划](docs/development-plan.md)记录阶段状态、待办与车型调查；`docs/plans/` 按日期记录实际完成的功能、修改与验证结果。文档维护规则也在文档中心。
