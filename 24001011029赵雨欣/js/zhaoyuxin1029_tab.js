/*
  文件名称：js/zhaoyuxin1029_tab.js
  作者：赵雨欣
  建立时间：2026-11-02 14:18:45
  使用模型：GLM-5.3-Flash
  功能名称及简介：可复用选项卡（Tab）组件 —— 任意页面引入本文件后，
                  调用 zhaoyuxin1029_initTabs(容器选择器) 即可为该容器内的
                  选项卡绑定点击切换逻辑，无需重复编写代码。
                  实现方式与课堂案例（wy_ 前缀版本）一致：
                  querySelector 找容器、querySelectorAll 找按钮与面板、
                  forEach + index 索引对应面板、addEventListener 注册事件监听。
*/

/*
  功能名称及简介：zhaoyuxin1029_initTabs —— 可复用选项卡初始化函数。
  参数：groupSelector —— 选项卡容器的 CSS 选择器（字符串）。
  约定：选项卡按钮使用 class "zhaoyuxin1029_tab_btn"，内容面板使用
        class "zhaoyuxin1029_tab_panel"，按钮与面板按索引一一对应；
        选中状态类名为 "zhaoyuxin1029_active"。
  作者：赵雨欣  建立时间：2026-11-02  使用模型：GLM-5.3-Flash
*/
function zhaoyuxin1029_initTabs(groupSelector) {
  // 通过选择器查找（querySelector）获取选项卡容器；未找到直接返回，保证复用安全
  var zhaoyuxin1029_group = document.querySelector(groupSelector);
  if (!zhaoyuxin1029_group) return;

  // 通过选择器查找（querySelectorAll）获取容器内全部选项卡按钮与页面中全部内容面板
  var zhaoyuxin1029_buttons = zhaoyuxin1029_group.querySelectorAll(".zhaoyuxin1029_tab_btn");
  var zhaoyuxin1029_panels = document.querySelectorAll(".zhaoyuxin1029_tab_panel");

  // 遍历选项卡按钮（index 为按钮索引，与面板索引一一对应）
  zhaoyuxin1029_buttons.forEach(function (zhaoyuxin1029_btn, zhaoyuxin1029_index) {
    // 事件监听：为每个选项卡按钮注册"点击"事件
    zhaoyuxin1029_btn.addEventListener("click", function () {
      // 第一步：清除所有选项卡的选中状态（按钮高亮与面板显示全部重置）
      zhaoyuxin1029_clearActive(zhaoyuxin1029_buttons, zhaoyuxin1029_panels);
      // 第二步：设置当前元素的选中状态（当前按钮高亮，对应索引的面板显示）
      this.classList.add("zhaoyuxin1029_active");
      zhaoyuxin1029_panels[zhaoyuxin1029_index].classList.add("zhaoyuxin1029_active");
    });
  });
}

/*
  功能名称及简介：zhaoyuxin1029_clearActive —— 清除所有选项卡的选中状态。
  移除全部选项卡按钮的 zhaoyuxin1029_active 类（取消选中高亮），
  同时隐藏全部内容面板，是切换选项卡前的"重置"步骤。
  参数：buttons —— 选项卡按钮集合；panels —— 内容面板集合。
  作者：赵雨欣  建立时间：2026-11-02  使用模型：GLM-5.3-Flash
*/
function zhaoyuxin1029_clearActive(zhaoyuxin1029_buttons, zhaoyuxin1029_panels) {
  // 清除所有选项卡按钮的选中状态
  zhaoyuxin1029_buttons.forEach(function (zhaoyuxin1029_btn) {
    zhaoyuxin1029_btn.classList.remove("zhaoyuxin1029_active");
  });
  // 隐藏所有内容面板
  zhaoyuxin1029_panels.forEach(function (zhaoyuxin1029_panel) {
    zhaoyuxin1029_panel.classList.remove("zhaoyuxin1029_active");
  });
}
