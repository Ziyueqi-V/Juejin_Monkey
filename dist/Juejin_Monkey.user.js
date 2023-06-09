// ==UserScript==
// @name         Junjin Monkey - 掘金猴
// @namespace    http://tampermonkey.net/
// @version      0.0.2
// @description  better Juejin experience, remove ads and other useless things, make it clean and simple, just like a monkey!
// @author       Sherlock-V
// @match        https://juejin.cn
// @match        https://juejin.cn/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=juejin.cn
// @grant        GM_addStyle
// @run-at       document-body
// @license      MIT
// ==/UserScript==


(function () {
  'use strict';

  // Your code here...
  const vistopiaCSS = `
  
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