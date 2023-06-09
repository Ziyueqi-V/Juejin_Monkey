

(function () {
  'use strict';

  // Your code here...
  const vistopiaCSS = `
  /* CSS_PLACEHOLDER */
  `;
  GM_addStyle(vistopiaCSS);

  const style = document.createElement('style')
  const hides = [
    '#juejin > div.view-container div.sidebar.article-sidebar > ul.sidebar-bd-entry',
    '#juejin > div.view-container div.sidebar.article-sidebar > div.sidebar-block.wechat-sidebar-block.pure',
    '#juejin > div.view-container div.main-area.article-area > div.article-end > div.extension-banner',
    '#juejin > div.view-container li.nav-item.vip-entry',
    '#juejin > div.view-container ul > li.nav-item.link-item.special-activity-item',
  ].filter(Boolean)

  style.innerHTML = [
    `${hides.join(',')}{ display: none !important; }`,
  ].join('')

  document.body.appendChild(style)
})();