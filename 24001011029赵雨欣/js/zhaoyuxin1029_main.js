/*
  文件名称：js/zhaoyuxin1029_main.js
  作者：赵雨欣
  建立时间：2026-11-02 14:27:17
  使用模型：DeepSeek-V4-Pro
  功能名称及简介：影视排行榜页面初始化脚本 —— 页面 DOM 加载完成后，
                  调用可复用选项卡组件 zhaoyuxin1029_initTabs，
                  为 .zhaoyuxin1029_tabs 容器启用选项卡切换功能。
*/

/*
  功能名称及简介：页面初始化 —— 监听 DOMContentLoaded 事件，
  在 DOM 就绪后调用可复用组件的初始化函数，为选项卡容器绑定切换逻辑。
  作者：赵雨欣  建立时间：2026-11-02  使用模型：DeepSeek-V4-Pro
*/
document.addEventListener("DOMContentLoaded", function () {
  zhaoyuxin1029_initTabs(".zhaoyuxin1029_tabs");
});