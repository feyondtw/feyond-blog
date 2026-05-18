/* ============================================================
 * FEYOND JOURNAL · GA4 Event Tracking
 * ------------------------------------------------------------
 * 共用追蹤邏輯，所有頁面引用同一份。
 * 修改任何事件邏輯只需動這個檔案，全站自動同步。
 *
 * 追蹤事件:
 *   1. article_read_complete   讀者捲到文章底部
 *   2. subscribe_inquiry_click 點擊訂閱會員連結
 *   3. paywall_view            看到付費牆
 *   4. article_card_click      首頁文章卡片點擊
 *
 * 設計原則:
 *   - 完全附加式 (additive only),不修改既有 DOM
 *   - 每個事件每次造訪只觸發一次,避免重複計數
 *   - 安全防護: 若 gtag 未載入或頁面無對應元素,靜默跳過
 *   - 不依賴任何外部函式庫
 * ============================================================ */

(function() {
  'use strict';

  // 確保 gtag 已載入,否則靜默離開
  if (typeof gtag !== 'function') return;

  // 避免重複觸發的旗標
  const fired = {
    readComplete: false,
    paywallView: false
  };

  /* ---------- 1. article_read_complete ----------
   * 偵測讀者是否捲動到 .article-footer 區塊
   * 觸發條件: footer 元素進入視窗中央以上
   */
  function setupReadCompleteTracking() {
    const footer = document.querySelector('.article-footer');
    if (!footer) return; // 非文章頁,跳過

    // 從 <title> 抓取文章名作為事件參數
    const articleTitle = document.title.split('｜')[0].trim();

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting && !fired.readComplete) {
          fired.readComplete = true;
          gtag('event', 'article_read_complete', {
            article_title: articleTitle,
            page_path: window.location.pathname
          });
          observer.disconnect();
        }
      });
    }, {
      threshold: 0.5 // footer 顯示一半即觸發
    });

    observer.observe(footer);
  }

  /* ---------- 2. subscribe_inquiry_click ----------
   * 偵測讀者點擊任何訂閱會員相關連結
   * 涵蓋: CYBERBIZ 會員連結 + contact.html
   */
  function setupSubscribeTracking() {
    document.addEventListener('click', function(e) {
      const link = e.target.closest('a');
      if (!link) return;

      const href = link.getAttribute('href') || '';
      const isMembershipLink =
        href.includes('cyberbiz.co/products/feyond-membership') ||
        href.includes('contact.html');

      if (!isMembershipLink) return;

      // 判斷點擊位置 (paywall / footer / inline)
      let location = 'inline';
      if (link.closest('.paywall-preview, #paywall-section, .paywall-wrapper, .paywall-cta')) {
        location = 'paywall';
      } else if (link.closest('.membership-invite')) {
        location = 'membership_invite';
      } else if (link.closest('.site-footer, .article-footer')) {
        location = 'footer';
      } else if (link.closest('.free-banner')) {
        location = 'free_banner';
      }

      gtag('event', 'subscribe_inquiry_click', {
        click_location: location,
        link_url: href,
        page_path: window.location.pathname,
        article_title: document.title.split('｜')[0].trim()
      });
    });
  }

  /* ---------- 3. paywall_view ----------
   * 偵測讀者捲到付費牆區塊
   * 涵蓋 cistus-labdanum 與 geranium-bourbon 兩種結構
   */
  function setupPaywallViewTracking() {
    const paywall = document.querySelector(
      '#paywall-section, .paywall-preview, .paywall-wrapper'
    );
    if (!paywall) return;

    const articleTitle = document.title.split('｜')[0].trim();

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting && !fired.paywallView) {
          fired.paywallView = true;
          gtag('event', 'paywall_view', {
            article_title: articleTitle,
            page_path: window.location.pathname
          });
          observer.disconnect();
        }
      });
    }, {
      threshold: 0.3 // paywall 顯示三成即觸發
    });

    observer.observe(paywall);
  }

  /* ---------- 4. article_card_click ----------
   * 首頁文章卡片點擊追蹤
   * 自動偵測 index.html 上的 .article-card / .featured-card / .list-item
   */
  function setupCardClickTracking() {
    // 只在首頁啟用 (避免文章頁誤觸)
    const isHomepage =
      window.location.pathname === '/' ||
      window.location.pathname.endsWith('/index.html') ||
      window.location.pathname.endsWith('feyond.muzen.store/');

    if (!isHomepage) return;

    document.addEventListener('click', function(e) {
      const card = e.target.closest(
        '.article-card, .featured-card, .list-item, [data-article-card]'
      );
      if (!card) return;

      // 嘗試抓出卡片標題
      const titleEl = card.querySelector(
        '.card-title, .featured-title, .list-title, h2, h3'
      );
      const cardTitle = titleEl ? titleEl.textContent.trim() : '(未命名)';

      // 嘗試抓出目標連結
      const link = card.querySelector('a') || (card.tagName === 'A' ? card : null);
      const targetUrl = link ? (link.getAttribute('href') || '') : '';

      // 判斷卡片位置區塊
      let section = 'unknown';
      if (card.classList.contains('featured-card')) section = 'featured';
      else if (card.classList.contains('list-item')) section = 'list';
      else if (card.classList.contains('article-card')) section = 'cards';

      gtag('event', 'article_card_click', {
        card_title: cardTitle,
        target_url: targetUrl,
        section: section
      });
    });
  }

  /* ---------- 初始化 ---------- */
  function init() {
    setupReadCompleteTracking();
    setupSubscribeTracking();
    setupPaywallViewTracking();
    setupCardClickTracking();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
