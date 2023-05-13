// ==UserScript==
// @name         Amazon seller filter & checker
// @namespace    https://github.com/motoacs
// @version      1.0
// @description  Amazonの検索ページにマーケットプレイス商品を除外・解除するボタンを追加したり、商品ページにサクラチェッカーの検索結果を開くボタンを追加するUserScript
// @author       motoacs
// @match        https://www.amazon.co.jp/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=amazon.co.jp
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  // seller filter
  const filterKey = 'emi';
  const filterValue = 'AN1VRQENFRJN5';
  const filterEnabledKey = 'rh';
  // sakura checker search path
  const sakuraCheckerSearch = 'https://sakura-checker.jp/search/';

  function onload() {
    // search page
    if (window.location.pathname === '/s') {
      const url = new URL(window.location.href);
      const filterEnabled = url.searchParams.get(filterEnabledKey)?.includes(filterValue);
      const buttonTemplate = `
      <button id="seller-filter" style="background-color:${filterEnabled ? '#1565C0' : '#C62828'}; z-index:99999; position:fixed; margin:4px; padding:4px 8px 4px 4px; top:0; left:0; color:#FAFAFA; font-weight:bold; line-height:1.5em; border: none; border-radius:4px;">
        ${filterEnabled ? '✅ Amazon' : '⚠️ All'}
      </button>
      `;

      // append button element
      appendButton(buttonTemplate);
      // add click event listener
      document.getElementById('seller-filter').addEventListener('click', () => {
        if (filterEnabled) url.searchParams.delete(filterEnabledKey);
        else url.searchParams.append(filterKey, filterValue);
        window.location.href = url.href;
      });
    }

    // item page
    else if (/\/dp\/\w+/.test(window.location.pathname)) {
      const buttonTemplate = `
      <button id="sakura-checker" style="background-color:#FCE4EC; z-index:99999; position:fixed; margin:4px; padding:4px; top:0; left:0; border: none; border-radius:4px;">
        🌸
      </button>
      `;

      // append button element
      appendButton(buttonTemplate);
      // add click event listener
      document.getElementById('sakura-checker').addEventListener('click', () => {
        const dpid = window.location.pathname.match(/\/dp\/\w+/);
        // open sakura checker
        if (dpid != null) window.open(sakuraCheckerSearch + dpid[0].replace('/dp/', ''));
      });
    }

    function appendButton(template) {
      const div = document.createElement('div');
      div.innerHTML = template;
      document.body.appendChild(div);
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', onload);
  else onload();
})();
