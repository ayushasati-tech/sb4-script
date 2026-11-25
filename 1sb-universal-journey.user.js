// ==UserScript==
// @name         1SB Universal Journey Runner (all LOBs · Demo/Dev/Test · distributor portals)
// @namespace    1silverbullet.autofill
// @version      5.38.0
// @description  One script for every 1SB portal: asks Assisted / DIY → environment → LOB → category → product, then fills every page with consistent test data and clicks through to the Thank You page. Records PASS/BLOCKED per journey (with the failing API) and, in batch mode, moves on to the next product when a journey cannot proceed.
// @match        https://login.demo.insurance.1silverbullet.tech/*
// @match        https://login.dev.insurance.1silverbullet.tech/*
// @match        https://login.test.insurance.1silverbullet.tech/*
// @match        https://*.term.insurance.1silverbullet.tech/*
// @match        https://*.health.insurance.1silverbullet.tech/*
// @match        https://*.savings.insurance.1silverbullet.tech/*
// @match        https://*.saving.insurance.1silverbullet.tech/*
// @match        https://*.motor.insurance.1silverbullet.tech/*
// @match        https://*.life.insurance.1silverbullet.tech/*
// @match        https://loan.dev.insurance.1silverbullet.com/*
// @match        https://al-ui-uat.d2bll1r9jl65el.amplifyapp.com/*
// @match        https://al-ui-uat.d346c6xuvawzoq.amplifyapp.com/*
// @match        https://al-ui-dev.da8gsjjpimphh.amplifyapp.com/*
// @match        https://al-ui-dev.dierhs3k7b5l8.amplifyapp.com/*
// @match        https://al-ui-test.d1pwf813b1dipr.amplifyapp.com/*
// @match        *://al-ui-ins-uat.d193uknmpu2hlu.amplifyapp.com/*
// @match        *://al-ui-ins-uat.d2i1f89dww8f0k.amplifyapp.com/*
// @match        *://al-ui-ins-uat.d2miyo6j6xefqd.amplifyapp.com/*
// @match        *://al-ui-ins-uat.d2x80d432y8b2m.amplifyapp.com/*
// @match        *://al-ui-ins-uat.d3a4e5n4ofqh92.amplifyapp.com/*
// @match        *://al-ui-ins-uat.dbpk3jcy15ol1.amplifyapp.com/*
// @match        *://al-ui-ins-uat.dypegmpg7o2ks.amplifyapp.com/*
// @match        *://demo.d26zm2ikxewd3a.amplifyapp.com/*
// @match        *://demo.d2chvs4w6spbl1.amplifyapp.com/*
// @match        *://demo.d2rcmhy6bkxdnz.amplifyapp.com/*
// @match        *://demo.d2ur1v1v4b9z6w.amplifyapp.com/*
// @match        *://demo.d3q5bb5hhfwdpj.amplifyapp.com/*
// @match        *://embeddeduat.northernarc.com/*
// @match        *://health.coversure.click/*
// @match        *://health.insuretoday.in/*
// @match        *://health.nyvo.in/*
// @match        *://health.policyboss.com/*
// @match        *://health.policyguru.org.in/*
// @match        *://health.uat.policyguru.org.in/*
// @match        *://health.wealth-right.com/*
// @match        *://healthinsureuat.hdfcsec.com/*
// @match        *://healthuat.armourrinsurance.com/*
// @match        *://healthuat.northernarc.com/*
// @match        *://insuranceselectoruat.northernarc.com/*
// @match        *://insuranceuat.icicihfc.com/*
// @match        *://insure.kvbank.in/*
// @match        *://insureuat.hdfcsec.com/*
// @match        *://investmentlife.coversure.click/*
// @match        *://kvb1sb-health.kvbank.in/*
// @match        *://kvb1sb-savings.kvbank.in/*
// @match        *://kvb1sb-term.kvbank.in/*
// @match        *://kvb1sbuat.health.kvbank.in/*
// @match        *://kvb1sbuat.savings.kvbank.in/*
// @match        *://kvb1sbuat.term.kvbank.in/*
// @match        *://life.choiceinsurance.in/*
// @match        *://life.uat.choiceinsurance.in/*
// @match        *://motor.coversure.click/*
// @match        *://motor.wealth-right.com/*
// @match        *://reports.uat.asldt.com/*
// @match        *://retailinsurance.ltfinance.com/*
// @match        *://retailinsuranceuat.ltfinance.com/*
// @match        *://savingsinsureuat.hdfcsec.com/*
// @match        *://savinguat.armourrinsurance.com/*
// @match        *://savinguat.northernarc.com/*
// @match        *://term.assetplus.in/*
// @match        *://term.policyboss.com/*
// @match        *://term.policyguru.org.in/*
// @match        *://term.uat.policyguru.org.in/*
// @match        *://term.wealth-right.com/*
// @match        *://termlife.coversure.click/*
// @match        *://termlife.pincinsurance.com/*
// @match        *://termlife.staypinc.com/*
// @match        *://termuat.armourrinsurance.com/*
// @match        *://termuat.northernarc.com/*
// @match        *://uat-embeddedinsurance.araffinity.com/*
// @match        *://uat-generalinsurance.yesinvest.in/*
// @match        *://uat-health.assetplus.in/*
// @match        *://uat-health.policyboss.com/*
// @match        *://uat-health.wealth-right.com/*
// @match        *://uat-healthinsurance.geojit.com/*
// @match        *://uat-healthinsurance.yesinvest.in/*
// @match        *://uat-lifeinsurance.yesinvest.in/*
// @match        *://uat-motor.wealth-right.com/*
// @match        *://uat-savinginsurance.geojit.com/*
// @match        *://uat-sherpashield.geojit.com/*
// @match        *://uat-term.assetplus.in/*
// @match        *://uat-term.policyboss.com/*
// @match        *://uat-term.wealth-right.com/*
// @match        *://uat-terminsurance.geojit.com/*
// @match        *://uatapp.niveshinsurance.com/*
// @match        *://uathealth-sherpashield.geojit.com/*
// @match        *://uathealth.inkasure.com/*
// @match        *://uathealth.lminsurancebroking.com/*
// @match        *://uathealth.niveshinsurance.com/*
// @match        *://uathealth.nyvo.in/*
// @match        *://uathealth.oneinsure.com/*
// @match        *://uathealth.policyera.com/*
// @match        *://uatlifesave.nyvo.in/*
// @match        *://uatlifeterm.nyvo.in/*
// @match        *://uatmotor-sherpashield.geojit.com/*
// @match        *://uatsavings.lminsurancebroking.com/*
// @match        *://uatsavings.niveshinsurance.com/*
// @match        *://uatsavings.oneinsure.com/*
// @match        *://uatterm-sherpashield.geojit.com/*
// @match        *://uatterm.inkasure.com/*
// @match        *://uatterm.lminsurancebroking.com/*
// @match        *://uatterm.niveshinsurance.com/*
// @match        *://uatterm.oneinsure.com/*
// @match        *://uatterm.policyera.com/*
// @include      /^https?:\/\/[^\/]*(insur|lifesave|lifeterm)[^\/]*\//
// @include      /^https?:\/\/[^\/]*\.1silverbullet\.(tech|com)\//
// @exclude      *://*.atlassian.net/wiki/*
// @exclude      *://*.bitbucket.org/*
// @exclude      *://*.postman.co/*
// @exclude      *://*.google.com/*
// @exclude      *://*.slack.com/*
// @exclude      *://*.github.com/*
// @exclude      *://*.office.com/*
// @exclude      *://*.microsoft.com/*
// @exclude      *://*.live.com/*
// @exclude      *://*.notion.so/*
// @exclude      *://*.figma.com/*
// @exclude      *://claude.ai/*
// @include      /^https?:\/\/[^\/]*\.amplifyapp\.com\//
// @match        *://*/*
// @updateURL    https://raw.githubusercontent.com/ayushasati-tech/sb4-script/main/1sb-universal-journey.meta.js
// @downloadURL  https://raw.githubusercontent.com/ayushasati-tech/sb4-script/main/1sb-universal-journey.user.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js
// @connect      *
// @run-at       document-start
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_xmlhttpRequest
// @grant        GM_openInTab
// @connect      upload.wikimedia.org
// @grant        unsafeWindow
// @sandbox      JavaScript
// @noframes
// ==/UserScript==
/* 1SB universal journey engine – core (LOB-agnostic). Wrapped by the Tampermonkey header in build.py */
(function () {
  'use strict';
  // The address the page was opened with, read at document-start (before the portal's router can drop a "?sb4=run…" workbook link); the rest waits for the DOM.
  const BOOT_URL = (() => { try { if (window.__SB_BOOT_URL) return String(window.__SB_BOOT_URL); } catch (e) {} return location.href; })();
  try { window.__SB_BOOT_URL = BOOT_URL; } catch (e) {}
  const sbMain = () => {
  const SB_VERSION = '5.38.0';
  const PW = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
  try { if (typeof GM_getValue === 'function' && localStorage.getItem('sb4_dev') === '1' && !window.__SB_DEVRUN) {        /* developer override: an unreleased build stored in this portal's localStorage (sb4_devsrc + sb4_dev=1) runs instead of the installed one – ONLY while it is newer than the installed script and less than 6 h old; otherwise it is deleted on the spot (v5.20.4: a stale override left behind showed an old version after a fresh install) */
      const src = localStorage.getItem('sb4_devsrc') || ''; const dv = (src.match(/SB_VERSION = '([^']+)'/) || [])[1] || '0'; const num = (v) => String(v).split('.').map((x) => +x || 0).reduce((a, x) => a * 1000 + x, 0);
      const fresh = Date.now() - (+localStorage.getItem('sb4_devat') || 0) < 6 * 3600 * 1000;
      if (src && fresh && num(dv) > num(SB_VERSION)) { window.__SB_DEVRUN = true; new Function(src)(); return; }
      ['sb4_dev', 'sb4_devsrc', 'sb4_devat'].forEach((k) => { localStorage.removeItem(k); try { sessionStorage.removeItem(k); } catch (e) {} }); console.log('[SB4] stale developer override removed (v' + dv + ' vs installed v' + SB_VERSION + ')'); } } catch (e) {}
  try { if (PW.__SB_VERSION && PW.__SB_VERSION !== SB_VERSION && !(typeof GM_getValue === 'function') && !PW.__SB_RELOAD && document.getElementById('sb-panel')) { /* an installed (Tampermonkey) copy is already running on this page; the injected dev copy steps back */ return; } PW.__SB_VERSION = SB_VERSION; PW.__SB_RELOAD = false; } catch (e) {}
  // Two INSTALLED copies on one page (v5.20.2): an older copy left in Tampermonkey next to the new one would run with its own storage – journeys started by one copy are invisible to the other
  // ("paused", OFF, empty Start dialog). The newer copy wins, the older one stops, and a notice says which entry to delete.
  const vnum = (v) => String(v || '0').split('.').map((x) => +x || 0).reduce((a, x) => a * 1000 + x, 0);
  const dupNote = (older, newer) => { try { const show = () => { if (document.getElementById('sb-dupnote') || !document.body) return; const d = document.createElement('div'); d.id = 'sb-dupnote'; d.style.cssText = 'position:fixed;top:12px;left:50%;transform:translateX(-50%);z-index:2147483646;background:#7f1d1d;color:#fff;border-radius:10px;padding:10px 14px;font:13px system-ui;box-shadow:0 6px 24px rgba(0,0,0,.35);max-width:720px';
        d.innerHTML = `<b>Two copies of the 1SB Journey Runner are installed in Tampermonkey</b> (${/^\d/.test(older) ? 'v' + older : 'an older one'} and v${newer}). Only v${newer} is running on this page – open the Tampermonkey dashboard and delete the ${/^\d/.test(older) ? 'v' + older : 'older'} entry, then reload. <button style="margin-left:10px;background:none;border:1px solid #fff;color:#fff;border-radius:6px;padding:2px 8px;cursor:pointer" onclick="this.parentElement.remove()">OK</button>`; document.body.appendChild(d); };
      if (document.body) show(); else document.addEventListener('DOMContentLoaded', show); } catch (e) {} };
  const INSTALLED = typeof GM_getValue === 'function' && !window.__SB_DEVRUN; const MINE = {};   // MINE marks this instance's own panel element
  if (INSTALLED) {
    const other = PW.__SB_INSTALLED;
    if (other && other.version && vnum(other.version) >= vnum(SB_VERSION)) { dupNote(SB_VERSION, other.version); return; }     // a newer (or the same) copy already runs here: this one stays out
    if (other && other.kill) { try { other.kill(); } catch (e) {} dupNote(other.version, SB_VERSION); }
    PW.__SB_INSTALLED = { version: SB_VERSION, kill: () => { try { PW.__SB && PW.__SB.kill && PW.__SB.kill('sb4-takeover'); } catch (e) {} } };
  }
  if (window.__SB && window.__SB.kill) { if (INSTALLED && window.__SB.alive) dupNote(window.__SB.version || 'older', SB_VERSION); window.__SB.kill('sb4-reload'); }   // an older installed copy already on the page (its handle is visible through the sandbox window): stopped, and the notice names it

  /* ---------------- storage (GM = shared across all portals; fallback localStorage) ---------------- */
  const hasGM = typeof GM_getValue === 'function' && !(window.__SB_DEVRUN && localStorage.getItem('sb4_dev') === '1');   // a developer-override build keeps its state in localStorage (per portal), not in the shared GM store
  const S = {    // Tampermonkey: GM storage (shared across all portals). Injected fallback: localStorage, mirrored to sessionStorage because some portals wipe localStorage on entry.
    get(k, d) { try { if (hasGM) { const v = GM_getValue(k); return v === undefined || v === null ? d : v; } let v = localStorage.getItem('sb4_' + k); if (v == null) v = sessionStorage.getItem('sb4_' + k); if (v == null) return d; return JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { if (hasGM) GM_setValue(k, v); else { const j = JSON.stringify(v); localStorage.setItem('sb4_' + k, j); sessionStorage.setItem('sb4_' + k, j); } } catch (e) {} },
  };
  // One journey per browser tab (v5.17): the tab's id lives in window.name (it survives reloads and navigations inside the tab, never leaks to another tab),
  // and the journey configuration is stored under it – a page opened in another tab starts idle and runs its own journey.
  const TAB_ID = (() => { try { const m = (window.name || '').match(/sb4tab:([a-z0-9]+)/); let id = m ? m[1] : null;
      let ss = null; try { ss = sessionStorage.getItem('sb4_tab'); } catch (e) {}                       // the id is kept in two places: window.name (survives cross-origin hops) and sessionStorage (survives a portal that resets window.name)
      if (!id) id = ss || Math.random().toString(36).slice(2, 10);
      if (!m) { try { window.name = (window.name || '') + ' sb4tab:' + id; } catch (e) {} }
      if (ss !== id) { try { sessionStorage.setItem('sb4_tab', id); } catch (e) {} }
      return id; } catch (e) { return 'x'; } })();
  const CFGK = () => 'cfg_' + TAB_ID; const ADVK = () => 'adv_' + TAB_ID;
  try { const seen = S.get('tabsSeen', {}); const now = Date.now(); seen[TAB_ID] = now; Object.keys(seen).forEach((id) => { if (now - seen[id] > 3 * 86400000) { delete seen[id]; S.set('cfg_' + id, null); S.set('adv_' + id, null); S.set('off_' + id, null); } }); S.set('tabsSeen', seen); } catch (e) {}   // configurations of tabs not seen for 3 days are dropped

  /* ---------------- environments / LOBs ---------------- */
  const IDS = { assisted: '00000000-0000-0000-0000-000000000000', diy: '00000000-0000-0000-0000-000000000010' };
  const URLS = {
    demo: { 'Life Term': 'https://demo.term.insurance.1silverbullet.tech/#/?id=', Health: 'https://demo.health.insurance.1silverbullet.tech/#/?id=',
      'Health V-2': 'https://al-ui-uat.d2bll1r9jl65el.amplifyapp.com/?id=', Investment: 'https://demo.savings.insurance.1silverbullet.tech/#/?id=',
      'Motor Insurance': 'https://demo.motor.insurance.1silverbullet.tech/#/?id=', Embedded: 'https://al-ui-uat.d346c6xuvawzoq.amplifyapp.com/#/?id=',
      NBFC: 'https://loan.dev.insurance.1silverbullet.com/#/', '3-Click': 'https://demo.life.insurance.1silverbullet.tech/' },
    dev: { 'Life Term': 'https://dev.term.insurance.1silverbullet.tech/#/?id=', Health: 'https://dev.health.insurance.1silverbullet.tech/#/?id=',
      'Health V-2': 'https://al-ui-dev.da8gsjjpimphh.amplifyapp.com/?id=', Investment: 'https://dev.saving.insurance.1silverbullet.tech/#/?id=',
      'Motor Insurance': 'https://dev.motor.insurance.1silverbullet.tech/#/?id=', Embedded: 'https://al-ui-dev.dierhs3k7b5l8.amplifyapp.com/#/?id=',
      '3-Click': 'https://dev.life.insurance.1silverbullet.tech/' },
    test: { 'Life Term': 'https://test.term.insurance.1silverbullet.tech/#/?id=', Health: 'https://test.health.insurance.1silverbullet.tech/#/?id=',
      'Health V-2': 'https://al-ui-test.d1pwf813b1dipr.amplifyapp.com/?id=', Investment: 'https://test.saving.insurance.1silverbullet.tech/#/?id=',
      'Motor Insurance': 'https://test.motor.insurance.1silverbullet.tech/#/?id=', '3-Click': 'https://test.life.insurance.1silverbullet.tech/' },
  };
  // Distributor portals (from the Confluence "Distributers" pages; embedded at build time). Each becomes an "environment" like "Geojit (GFSL) · UAT".
  const DISTRIBUTORS = [{"name":"HDFC Securities Limited (HSL)","urls":[{"lob":"Life Term","env":"uat","url":"https://insureuat.hdfcsec.com/#/?id=00000000-0000-0000-0000-000000000000"},{"lob":"Life Term","env":"uat","url":"https://insureuat.hdfcsec.com/#/?id=00000000-0000-0000-0000-000000000010"},{"lob":"Health","env":"uat","url":"https://healthinsureuat.hdfcsec.com/#/?id=00000000-0000-0000-0000-000000000000"},{"lob":"Health","env":"uat","url":"https://healthinsureuat.hdfcsec.com/#/?id=00000000-0000-0000-0000-000000000010"},{"lob":"Investment","env":"uat","url":"https://savingsinsureuat.hdfcsec.com/#/?id=00000000-0000-0000-0000-000000000000"},{"lob":"Investment","env":"uat","url":"https://savingsinsureuat.hdfcsec.com/#/?id=00000000-0000-0000-0000-000000000010"}]},{"name":"PINC","urls":[{"lob":"Life Term","env":"uat","url":"http://termlife.staypinc.com"},{"lob":"Life Term","env":"prod","url":"http://termlife.pincinsurance.com"}]},{"name":"Choice India","urls":[{"lob":"Life Term","env":"uat","url":"http://life.uat.choiceinsurance.in/"},{"lob":"Life Term","env":"prod","url":"http://life.choiceinsurance.in/"}]},{"name":"Nivesh","urls":[{"lob":"Life Term","env":"uat","url":"https://uatterm.niveshinsurance.com/#/?id=00000000-0000-0000-0000-000000000000"},{"lob":"Investment","env":"uat","url":"https://uatsavings.niveshinsurance.com/#/?id=00000000-0000-0000-0000-000000000000"},{"lob":"Health","env":"uat","url":"https://uathealth.niveshinsurance.com/#/?id=00000000-0000-0000-0000-000000000000"},{"lob":"Life Term","env":"uat","url":"https://uatapp.niveshinsurance.com/#/?id=00000000-0000-0000-0000-000000000000"},{"lob":"Health","env":"uat","url":"https://al-ui-ins-uat.d2miyo6j6xefqd.amplifyapp.com/#/?id=00000000-0000-0000-0000-000000000000"},{"lob":"Health","env":"uat","url":"https://al-ui-ins-uat.d2miyo6j6xefqd.amplifyapp.com/#/?id=00000000-0000-0000-0000-000000000010"},{"lob":"Investment","env":"uat","url":"https://al-ui-ins-uat.dypegmpg7o2ks.amplifyapp.com/#/?id=00000000-0000-0000-0000-000000000000"}]},{"name":"AngelOne","urls":[{"lob":"Investment","env":"uat","url":"https://al-ui-ins-uat.d2x80d432y8b2m.amplifyapp.com/#/?id=00000000-0000-0000-0000-000000000040"},{"lob":"Life Term","env":"uat","url":"https://al-ui-ins-uat.d193uknmpu2hlu.amplifyapp.com/#/?id=00000000-0000-0000-0000-000000000040"}]},{"name":"karur vysya bank","urls":[{"lob":"Investment","env":"uat","url":"https://kvb1sbuat.savings.kvbank.in/#/?id=00000000-0000-0000-0000-000000000000"},{"lob":"Life Term","env":"uat","url":"https://kvb1sbuat.term.kvbank.in/#/?id=00000000-0000-0000-0000-000000000000"},{"lob":"Health","env":"uat","url":"https://kvb1sbuat.health.kvbank.in/#/?id=00000000-0000-0000-0000-000000000000"},{"lob":"Investment","env":"prod","url":"https://kvb1sb-savings.kvbank.in/#/?id=00000000-0000-0000-0000-000000000000"},{"lob":"Life Term","env":"prod","url":"https://kvb1sb-term.kvbank.in/#/?id=00000000-0000-0000-0000-000000000000"},{"lob":"Health","env":"prod","url":"https://kvb1sb-health.kvbank.in/#/?id=00000000-0000-0000-0000-000000000000"},{"lob":"Launcher","env":"prod","url":"https://insure.kvbank.in/#/?id=00000000-0000-0000-0000-000000000000"}]},{"name":"CoverSure","urls":[{"lob":"Investment","env":"uat","url":"https://investmentlife.coversure.click/#/?id=00000000-0000-0000-0000-000000000000"},{"lob":"Life Term","env":"uat","url":"https://termlife.coversure.click/#/?id=00000000-0000-0000-0000-000000000000"},{"lob":"Health","env":"uat","url":"https://health.coversure.click/#/?id=00000000-0000-0000-0000-000000000000"},{"lob":"Motor Insurance","env":"uat","url":"https://motor.coversure.click/#/?id=00000000-0000-0000-0000-000000000000"}]},{"name":"Armourr KuvarJi","urls":[{"lob":"Life Term","env":"uat","url":"http://termuat.armourrinsurance.com/#/?id=00000000-0000-0000-0000-000000000000"},{"lob":"Health","env":"uat","url":"http://healthuat.armourrinsurance.com/#/?id=00000000-0000-0000-0000-000000000000"},{"lob":"Health","env":"prod","url":"https://health.insuretoday.in/#/?id=00000000-0000-0000-0000-000000000000"},{"lob":"Investment","env":"uat","url":"http://savinguat.armourrinsurance.com/#/?id=00000000-0000-0000-0000-000000000000"}]},{"name":"OneInfinity","urls":[{"lob":"Investment","env":"uat","url":"https://al-ui-ins-uat.d3a4e5n4ofqh92.amplifyapp.com/#/?id=00000000-0000-0000-0000-000000000000"},{"lob":"Life Term","env":"uat","url":"https://al-ui-ins-uat.dbpk3jcy15ol1.amplifyapp.com/#/?id=00000000-0000-0000-0000-000000000000"},{"lob":"Health","env":"uat","url":"https://al-ui-ins-uat.d2i1f89dww8f0k.amplifyapp.com/#/?id=00000000-0000-0000-0000-000000000000"},{"lob":"Motor Insurance","env":"uat","url":"https://demo.d2chvs4w6spbl1.amplifyapp.com/#/?id=00000000-0000-0000-0000-000000000000"}]},{"name":"Assetplus","urls":[{"lob":"Life Term","env":"uat","url":"https://uat-term.assetplus.in/#/?id=00000000-0000-0000-0000-000000000010"},{"lob":"Health","env":"uat","url":"https://uat-health.assetplus.in/#/?id=00000000-0000-0000-0000-000000000010"},{"lob":"Life Term","env":"prod","url":"https://term.assetplus.in/#/?id=00000000-0000-0000-0000-000000000010"}]},{"name":"Latin","urls":[{"lob":"Life Term","env":"uat","url":"http://uatterm.lminsurancebroking.com/#/?id=00000000-0000-0000-0000-000000000000"},{"lob":"Life Term","env":"uat","url":"http://uatterm.lminsurancebroking.com/#/?id=00000000-0000-0000-0000-000000000010"},{"lob":"Health","env":"uat","url":"http://uathealth.lminsurancebroking.com/#/?id=00000000-0000-0000-0000-000000000000"},{"lob":"Health","env":"uat","url":"http://uathealth.lminsurancebroking.com/#/?id=00000000-0000-0000-0000-000000000010"},{"lob":"Investment","env":"uat","url":"http://uatsavings.lminsurancebroking.com/#/?id=00000000-0000-0000-0000-000000000000"},{"lob":"Investment","env":"uat","url":"http://uatsavings.lminsurancebroking.com/#/?id=00000000-0000-0000-0000-000000000010"},{"lob":"Motor Insurance","env":"uat","url":"https://demo.d2rcmhy6bkxdnz.amplifyapp.com/#?id=00000000-0000-0000-0000-000000000000"}]},{"name":"Wealth right","urls":[{"lob":"Life Term","env":"uat","url":"https://uat-term.wealth-right.com/#/?id=00000000-0000-0000-0000-000000000000"},{"lob":"Motor Insurance","env":"uat","url":"https://uat-motor.wealth-right.com/#/?id=00000000-0000-0000-0000-000000000000"},{"lob":"Health","env":"uat","url":"https://uat-health.wealth-right.com/#/?id=00000000-0000-0000-0000-000000000000"},{"lob":"Life Term","env":"prod","url":"https://term.wealth-right.com/#/?id=00000000-0000-0000-0000-000000000000"},{"lob":"Motor Insurance","env":"prod","url":"https://motor.wealth-right.com/#/?id=00000000-0000-0000-0000-000000000000"},{"lob":"Health","env":"prod","url":"https://health.wealth-right.com/#/?id=00000000-0000-0000-0000-000000000000"}]},{"name":"Insurance Padosi","urls":[{"lob":"Health","env":"uat","url":"https://uathealth.inkasure.com/#/?id=00000000-0000-0000-0000-000000000010"},{"lob":"Life Term","env":"uat","url":"https://uatterm.inkasure.com/#/?id=00000000-0000-0000-0000-000000000010"}]},{"name":"ImpactGuru(PolicyGuru)","urls":[{"lob":"Life Term","env":"uat","url":"https://term.uat.policyguru.org.in/#/?id=00000000-0000-0000-0000-000000000000"},{"lob":"Life Term","env":"uat","url":"https://term.uat.policyguru.org.in/#/?id=00000000-0000-0000-0000-000000000010"},{"lob":"Life Term","env":"prod","url":"https://term.policyguru.org.in/#/?id=00000000-0000-0000-0000-000000000010"},{"lob":"Health","env":"uat","url":"https://health.uat.policyguru.org.in/#/?id=00000000-0000-0000-0000-000000000000"},{"lob":"Health","env":"uat","url":"https://health.uat.policyguru.org.in/#/?id=00000000-0000-0000-0000-000000000010"},{"lob":"Health","env":"prod","url":"https://health.policyguru.org.in/#/?id=00000000-0000-0000-0000-000000000010"}]},{"name":"AutoHangar","urls":[{"lob":"Life Term","env":"uat","url":"https://demo.d26zm2ikxewd3a.amplifyapp.com/#/?id=00000000-0000-0000-0000-000000000000"},{"lob":"Health","env":"uat","url":"https://demo.d2ur1v1v4b9z6w.amplifyapp.com/#/?id=00000000-0000-0000-0000-000000000000"},{"lob":"Motor Insurance","env":"uat","url":"https://demo.d3q5bb5hhfwdpj.amplifyapp.com/#/?id=00000000-0000-0000-0000-000000000000"}]},{"name":"PolicyEra","urls":[{"lob":"Health","env":"uat","url":"https://uathealth.policyera.com/#/?id=00000000-0000-0000-0000-000000000000"},{"lob":"Life Term","env":"uat","url":"https://uatterm.policyera.com/#/?id=00000000-0000-0000-0000-000000000000"}]},{"name":"OneInsure(Robinhood)","urls":[{"lob":"Life Term","env":"uat","url":"https://uatterm.oneinsure.com/#/?id=00000000-0000-0000-0000-000000000000"},{"lob":"Life Term","env":"uat","url":"https://uatterm.oneinsure.com/#/?id=00000000-0000-0000-0000-000000000010"},{"lob":"Investment","env":"uat","url":"https://uatsavings.oneinsure.com/#/?id=00000000-0000-0000-0000-000000000000"},{"lob":"Investment","env":"uat","url":"https://uatsavings.oneinsure.com/#/?id=00000000-0000-0000-0000-000000000010"},{"lob":"Health","env":"uat","url":"https://uathealth.oneinsure.com/#/?id=00000000-0000-0000-0000-000000000000"},{"lob":"Health","env":"uat","url":"https://uathealth.oneinsure.com/#/?id=00000000-0000-0000-0000-000000000010"}]},{"name":"L&T Finance","urls":[{"lob":"Life Term","env":"uat","url":"https://retailinsuranceuat.ltfinance.com/term/#/?id=00000000-0000-0000-0000-000000000000"},{"lob":"Health","env":"uat","url":"https://retailinsuranceuat.ltfinance.com/health/#/login"},{"lob":"Health","env":"prod","url":"https://retailinsurance.ltfinance.com/health/#/login"},{"lob":"Investment","env":"uat","url":"https://retailinsuranceuat.ltfinance.com/savings/#/?id=00000000-0000-0000-0000-000000000000"},{"lob":"Motor Insurance","env":"uat","url":"https://retailinsuranceuat.ltfinance.com/motor/#/?id=00000000-0000-0000-0000-000000000000"}]},{"name":"Axis Securities","urls":[{"lob":"Health","env":"uat","url":"https://reports.uat.asldt.com/health/#/?id=00000000-0000-0000-0000-000000000000"}]},{"name":"Northern ARC (Altifi)","urls":[{"lob":"Launcher","env":"uat","url":"https://insuranceselectoruat.northernarc.com"},{"lob":"Investment","env":"uat","url":"https://savinguat.northernarc.com/"},{"lob":"Health","env":"uat","url":"https://healthuat.northernarc.com/"},{"lob":"Life Term","env":"uat","url":"https://termuat.northernarc.com/"},{"lob":"Embedded","env":"uat","url":"https://embeddeduat.northernarc.com/"}]},{"name":"Anand Rathi","urls":[{"lob":"Embedded","env":"uat","url":"http://uat-embeddedinsurance.araffinity.com/embedded/#/?id=00000000-0000-0000-0000-000000000000"}]},{"name":"Yes securities","urls":[{"lob":"Health","env":"uat","url":"https://uat-healthinsurance.yesinvest.in/#/?id=00000000-0000-0000-0000-000000000000"},{"lob":"Investment","env":"uat","url":"https://uat-lifeinsurance.yesinvest.in/#/?id=00000000-0000-0000-0000-000000000000"},{"lob":"Other","env":"uat","url":"https://uat-generalinsurance.yesinvest.in/#/?id=00000000-0000-0000-0000-000000000000"}]},{"name":"NYVO - NYISL","urls":[{"lob":"Health","env":"uat","url":"https://uathealth.nyvo.in/#/?id=00000000-0000-0000-0000-000000000000"},{"lob":"Health","env":"uat","url":"https://uathealth.nyvo.in/#/?id=00000000-0000-0000-0000-000000000010"},{"lob":"Health","env":"prod","url":"https://health.nyvo.in/#/"},{"lob":"Investment","env":"uat","url":"https://uatlifesave.nyvo.in/#/?id=00000000-0000-0000-0000-000000000000"},{"lob":"Investment","env":"uat","url":"https://uatlifesave.nyvo.in/#/?id=00000000-0000-0000-0000-000000000010"},{"lob":"Life Term","env":"uat","url":"https://uatlifeterm.nyvo.in/#/?id=00000000-0000-0000-0000-000000000010"}]},{"name":"Geojit (GFSL)","urls":[{"lob":"Life Term","env":"uat","url":"https://uat-terminsurance.geojit.com/#/?id=00000000-0000-0000-0000-000000000000"},{"lob":"Health","env":"uat","url":"https://uat-healthinsurance.geojit.com/#/?id=00000000-0000-0000-0000-000000000000"},{"lob":"Investment","env":"uat","url":"https://uat-savinginsurance.geojit.com/#/?id=00000000-0000-0000-0000-000000000000"}]},{"name":"PolicyBoss","urls":[{"lob":"Health","env":"uat","url":"https://uat-health.policyboss.com/#/?id=00000000-0000-0000-0000-000000000000"},{"lob":"Life Term","env":"uat","url":"https://uat-term.policyboss.com/#/?id=00000000-0000-0000-0000-000000000000"},{"lob":"Health","env":"prod","url":"https://health.policyboss.com/"},{"lob":"Life Term","env":"prod","url":"https://term.policyboss.com/"}]},{"name":"Sherpa - Geojit","urls":[{"lob":"Embedded","env":"uat","url":"https://uat-sherpashield.geojit.com//#/?id=00000000-0000-0000-0000-000000000010"},{"lob":"Health","env":"uat","url":"https://uathealth-sherpashield.geojit.com//#/?id=00000000-0000-0000-0000-000000000010"},{"lob":"Life Term","env":"uat","url":"https://uatterm-sherpashield.geojit.com//#/?id=00000000-0000-0000-0000-000000000010"},{"lob":"Motor Insurance","env":"uat","url":"https://uatmotor-sherpashield.geojit.com//#/?id=00000000-0000-0000-0000-000000000010"}]},{"name":"ICICI Home Finance","urls":[{"lob":"Embedded","env":"uat","url":"https://insuranceuat.icicihfc.com/#/?id=00000000-0000-0000-0000-000000000000"}]}];
  const DIST_ENVS = {};                                  // env key -> { name, env: 'uat'|'prod', lobs: { lob: {assisted, diy} } }
  DISTRIBUTORS.forEach((d) => (d.urls || []).forEach((u) => {
    if (!u.url || !/^https?:/i.test(u.url) || !u.lob || u.lob === 'Other' || u.lob === 'Launcher') return;
    const key = `${d.name} · ${u.env === 'prod' ? 'Production' : 'UAT'}`;
    const ent = DIST_ENVS[key] || (DIST_ENVS[key] = { name: d.name, env: u.env, lobs: {} });
    const l = ent.lobs[u.lob] || (ent.lobs[u.lob] = {}); const url = u.url.replace(/\/\/#/, '/#').trim();
    const id = (url.match(/[?&]id=([0-9a-f-]{36})/i) || [])[1];
    if (id && /0010$/.test(id)) l.diy = l.diy || url; else if (id && /0040$/.test(id)) { l.assisted = l.assisted || url; l.diy = l.diy || url; } else l.assisted = l.assisted || url;
    URLS[key] = URLS[key] || {}; URLS[key][u.lob] = l;
  }));
  const NEVER_HOST = /atlassian\.net|jira|confluence|bitbucket|github|gitlab|postman|google\.|gstatic|slack\.com|notion\.so|office\.com|microsoft|outlook|live\.com|zoho|mail\.|teams\.|zoom\.us|figma|chatgpt|openai|anthropic|claude\.ai/i;
  const LAUNCHER = { demo: 'https://login.demo.insurance.1silverbullet.tech/', dev: 'https://login.dev.insurance.1silverbullet.tech/', test: 'https://login.test.insurance.1silverbullet.tech/' };
  function startUrl(env, lob, mode) {
    if (env === 'custom') { const c = S.get(CFGK(), {}); return c.customUrl || null; }
    const u = (URLS[env] || {})[lob]; if (!u) return null;
    if (typeof u === 'object') return (mode === 'diy' ? u.diy || u.assisted : u.assisted || u.diy) || null;     // distributor portal: B2B (…0000) / B2C (…0010) links
    return /\?id=$/.test(u) ? u + IDS[mode === 'diy' ? 'diy' : 'assisted'] : u;
  }
  const urlOf = (u) => typeof u === 'object' ? (u.assisted || u.diy || '') : u;
  const isLanding = () => { const h = (location.hash || '').split('?')[0]; return (h === '' || h === '#' || h === '#/' || /^#\/(info|home|landing|quick-?form)?$/i.test(h)) && !/quote|proposal|kyc|payment|thank/i.test(location.pathname); };
  const samePortal = (a, b) => { try { const A = new URL(a), B = new URL(b); return A.origin === B.origin && A.pathname.replace(/\/+$/, '') === B.pathname.replace(/\/+$/, ''); } catch (e) { return false; } };
  // LOB from the host name / path (distributor portals follow the same naming: term / health / saving(s) / motor / life / embedded)
  function lobFromUrl(h) {
    const s = String(h || location.href).toLowerCase().replace(/[?#].*/, '');
    const path = s.replace(/^https?:\/\/[^/]+/, '');
    const pick = (x) => /embedded|sherpashield|grouphealth|grpterm/.test(x) ? 'Embedded' : /motor|vehicle|car|bike/.test(x) ? 'Motor Insurance' : /health|medi/.test(x) ? 'Health' : /saving|savings|lifesave|invest|wealth|annuity|pension|lifeinsurance/.test(x) ? 'Investment' : /term|protect|insureuat|^insure\./.test(x) ? 'Life Term' : /3click|threeclick/.test(x) ? '3-Click' : /loan|nbfc/.test(x) ? 'NBFC' : '';
    return pick(path) || pick(s.replace(/^https?:\/\//, '').split('/')[0]) || '';
  }
  // LOB from what the page shows (used when the host name says nothing, e.g. amplifyapp hosts) – re-evaluated on every tick until known
  function lobFromPage() {
    const hs = location.hash.toLowerCase(); const txt = (document.body && document.body.innerText || '').slice(0, 4000).toLowerCase();
    if (/insurance embedded/i.test(document.title || '') || /loan protection simplified|group term|group health/.test(txt)) return 'Embedded';   /* distributor embedded apps (ICICI HFC …) use the same form-wizard route as Motor – the title decides first (v5.35) */
    if (/termplanqte|policydetails|termplan/.test(hs) || /term plan|life cover|sum assured/.test(txt) && /smok|tobacco|annual income/.test(txt)) return 'Life Term';
    if (/categoryselection|multiquote|savingsplan/.test(hs) || /guaranteed|retirement|market linked|investment/.test(txt) && /plan/.test(txt)) return 'Investment';
    if (/form-wizard|policy-quote|new-journey/.test(hs) || /car insurance|bike insurance|registration number/.test(txt)) return 'Motor Insurance';
    if (/retail|group|top ?up/.test(txt) && /health|members|insured/.test(txt)) return 'Health';
    if (/select plan|group term|group health/.test(txt)) return 'Embedded';
    return '';
  }
  function whereAmI() {
    const h = location.href;
    for (const env of Object.keys(URLS)) for (const [lob, u] of Object.entries(URLS[env])) { const base = urlOf(u); if (!base) continue; try { if (samePortal(h, base) || (!DIST_ENVS[env] && h.startsWith(new URL(base).origin))) return { env, lob }; } catch (e) {} }
    if (/login\.(demo|dev|test)\./.test(location.host)) { const q = new URLSearchParams(location.search).get('env'); return { env: /^(demo|dev|test)$/.test(q || '') ? q : location.host.split('.')[1], lob: 'Launcher' }; }
    const c = S.get(CFGK(), {}); if (c.env === 'custom' && c.customUrl && samePortal(h, c.customUrl)) return { env: 'custom', lob: c.lob || lobFromUrl(h) || lobFromPage() || '?' };
    if (NEVER_HOST.test(location.host)) return { env: '?', lob: '?' };
    const l = lobFromUrl(h); return { env: l ? 'custom' : '?', lob: l || '?' };
  }
  const HERE = whereAmI();
  function refreshHere() {          // unknown host: keep looking at the page until the LOB is clear
    if (HERE.lob !== '?') return; if (!document.body) return;
    const l = lobFromUrl() || lobFromPage(); if (l) { HERE.lob = l; if (HERE.env === '?') HERE.env = 'custom'; }
  }
  // Is this page a 1SB-built portal at all? (the script is also allowed on generic hosts – only show the panel on real portals)
  function isPortal() {
    if (NEVER_HOST.test(location.host)) return false;                 // never on the tools the team works in (Jira, Confluence, Postman, mail…)
    if (HERE.env !== '?') return true;                               // known 1SB env, a distributor portal, or a host whose name says term/health/saving/motor…
    if (/[?&]id=[0-9a-f-]{36}/i.test(location.href)) return true;
    const txt = (document.body && document.body.innerText || '').slice(0, 6000);
    if (/silverbullet|9platforms|intended for demonstration|journey id|jid-|irdai/i.test(txt)) return true;
    if (document.querySelector('.p-select, .p-dropdown, .p-component, [data-v-app]') && /insur|premium|policy|quote|proposal|nominee|sum (assured|insured)/i.test(txt)) return true;
    if (lobFromPage()) return true;
    return genericForm();
  }
  // Any other page with a real form (v5.12): the panel appears and "Fill this form" works with the same test person – no portal-specific logic, no auto-start
  function genericForm() {
    if (!document.body || NEVER_HOST.test(location.host)) return false;
    const fields = Q('input:not([type=hidden]):not([type=submit]):not([type=button]):not([type=password]):not([type=search]), select, textarea').filter((e) => vis(e) && !ours(e) && !e.closest('#sb-panel, #sb-dialog, #sb-picker, #sb-menu'));
    const ok = fields.length >= 3 || (fields.length >= 2 && !!document.querySelector('form'));
    if (ok && HERE.lob === '?') { HERE.lob = 'Form'; HERE.env = 'custom'; }
    return ok;
  }

  /* ---------------- network capture (issue reports + Postman collection export) ---------------- */
  const NET = (window.__SBNET = window.__SBNET || []);
  // Full request/response capture of the portal's API calls for the current journey (Results → "Postman collection").
  // Kept in sessionStorage (survives hash navigation and reloads on the same portal) – bodies capped so storage stays small.
  // Captured calls live in memory and in IndexedDB (sessionStorage is too small for proposal bodies and is shared with the portal's own data).
  const CAP_MAX = 500, BODY_MAX = 120000; let CAP = []; let capReady = false;
  let capDbP = null;                                   // one connection per script instance (closed on kill)
  const capDb = () => capDbP || (capDbP = new Promise((res, rej) => { const r = indexedDB.open('sb4_capture', 1); r.onupgradeneeded = () => { r.result.createObjectStore('cap', { keyPath: 'id', autoIncrement: true }); }; r.onsuccess = () => { r.result.onversionchange = () => r.result.close(); res(r.result); }; r.onerror = () => { capDbP = null; rej(r.error); }; r.onblocked = () => { capDbP = null; rej(new Error('blocked')); }; setTimeout(() => rej(new Error('idb open timeout')), 8000); }));
  const capInit = (async () => { try { const d = await capDb(); const old = await new Promise((res) => { const q = d.transaction('cap').objectStore('cap').getAll(); q.onsuccess = () => res(q.result || []); q.onerror = () => res([]); });
    const have = new Set(CAP.map((x) => x.t + '|' + x.url)); CAP = old.filter((x) => !have.has(x.t + '|' + x.url)).concat(CAP).sort((a, b) => a.t - b.t); } catch (e) {} capReady = true; })();
  const capLoad = () => CAP;
  const capSave = (rec) => { capDb().then((d) => { const tx = d.transaction('cap', 'readwrite'); tx.objectStore('cap').put(rec); }).catch(() => {}); };
  const capClear = () => { CAP = []; capDb().then((d) => { const tx = d.transaction('cap', 'readwrite'); tx.objectStore('cap').clear(); }).catch(() => {}); };
  const CAP_SKIP = /\.(js|css|png|jpe?g|gif|svg|woff2?|ttf|ico|map|webp|mp4)(\?|$)|google|gstatic|facebook|sentry|hotjar|clarity|analytics|amplitude|segment\.io|mixpanel|newrelic|datadog|launchdarkly|cloudfront\.net\/static|fonts\./i;
  function capPush(rec) {
    window.__sbCapCount = (window.__sbCapCount || 0) + 1;
    if (!rec.url || CAP_SKIP.test(rec.url)) return;
    if (PW.__sbSkipCap && PW.__sbSkipCap.has(rec.url)) { PW.__sbSkipCap.delete(rec.url); return; }   /* the script's own console reads (v5.38) */
    const c = cfg();
    rec.t = Date.now(); rec.page = (location.hash || location.pathname).split('?')[0]; rec.journey = c.fresh || 0; rec.lob = HERE.lob; rec.env = HERE.env;
    const big = /quote|proposal|gateCriteria|product\//i.test(rec.url) || /console/i.test(location.host) ? 3000000 : BODY_MAX;   /* console API-log answers are kept whole (v5.37) */      // quote / proposal bodies are kept whole (the gateway collection needs them)
    if (rec.reqBody && rec.reqBody.length > big) rec.reqBody = rec.reqBody.slice(0, big) + '…[truncated]';
    if (rec.resBody && rec.resBody.length > big) rec.resBody = rec.resBody.slice(0, big) + '…[truncated]';
    CAP.push(rec); while (CAP.length > CAP_MAX) CAP.shift(); capSave(rec);
  }
  if (!(typeof unsafeWindow !== 'undefined' ? unsafeWindow : window).__SBNETHOOK) {
    (typeof unsafeWindow !== 'undefined' ? unsafeWindow : window).__SBNETHOOK = 1;
    const push = (u, m, st, body) => { if (!/api|quote|proposal|policy|premium|journey/i.test(u)) return; let err = '';
      try { const j = JSON.parse(body); const e = j.errors || j.error || j.message || (j.data && (j.data.errors || j.data.error)); if (e && (Array.isArray(e) ? e.length : true)) err = (typeof e === 'string' ? e : JSON.stringify(e)).slice(0, 3000); if (j.data && j.data.isPollComplete === false) err = err || 'isPollComplete=false'; } catch (x) { if (st >= 400) err = String(body).slice(0, 200); }
      NET.push({ t: Date.now(), u: String(u).replace(/[?#].*/, ''), m, st, err }); if (NET.length > 60) NET.shift();
      try { if (/quote\/poll/i.test(String(u)) && /"isPollComplete"\s*:\s*true/.test(String(body || '')) && typeof onPollSeen === 'function') onPollSeen(JSON.parse(body)); } catch (x) {} };
    const W = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;     // page window (Tampermonkey) or window (injected)
    const bodyStr = (b) => { try { if (b == null) return ''; if (typeof b === 'string') return b; if (b instanceof URLSearchParams) return b.toString(); if (typeof FormData !== 'undefined' && b instanceof FormData) { const o = {}; b.forEach((v, k) => (o[k] = v instanceof File ? `<file ${v.name} ${v.size}B>` : String(v))); return JSON.stringify(o); } if (b instanceof ArrayBuffer || ArrayBuffer.isView(b)) return `<binary ${b.byteLength}B>`; if (b instanceof Blob) return `<blob ${b.size}B>`; return JSON.stringify(b); } catch (e) { return ''; } };
    const absU = (u) => { try { return new URL(u, location.href).href; } catch (e) { return String(u); } };
    const NF = W.__sbNet = W.__sbNet || { n: 0, last: 0, start: 0 };            // requests in flight (API calls only) – the next button is never pressed while the portal is still talking to its backend
    const apiU = (u) => { const x = String(u && u.url || u || ''); return !CAP_SKIP.test(x) && !/atlassian|\.1silverbullet\.tech\/(assets|static)/i.test(x); };
    const nfStart = () => { if (!NF.n) NF.start = Date.now(); NF.n++; }; const nfEnd = () => { NF.n = Math.max(0, NF.n - 1); NF.last = Date.now(); };
    const XP = W.XMLHttpRequest.prototype; const o = XP.open, sd = XP.send, srh = XP.setRequestHeader;
    XP.open = function (m, u) { this.__sbu = u; this.__sbm = m; this.__sbh = {}; return o.apply(this, arguments); };
    XP.setRequestHeader = function (k, v) { try { (this.__sbh = this.__sbh || {})[k] = v; } catch (e) {} return srh.apply(this, arguments); };
    XP.send = function (body) { const rb = bodyStr(body); const cnt = apiU(this.__sbu); if (cnt) nfStart(); this.addEventListener('loadend', () => { if (cnt) nfEnd(); try { const res = this.responseType && this.responseType !== 'text' ? `<${this.responseType}>` : this.responseText; push(this.__sbu, this.__sbm, this.status, res);
      const rh = {}; (this.getAllResponseHeaders() || '').trim().split(/[\r\n]+/).forEach((l) => { const i = l.indexOf(':'); if (i > 0) rh[l.slice(0, i).trim()] = l.slice(i + 1).trim(); });
      capPush({ kind: 'xhr', method: (this.__sbm || 'GET').toUpperCase(), url: absU(this.__sbu), reqHeaders: this.__sbh || {}, reqBody: rb, status: this.status, resHeaders: rh, resBody: res }); } catch (e) {} }); return sd.apply(this, arguments); };
    const f = W.fetch; W.fetch = async function (u, opt) { const t0 = Date.now(); const cnt = apiU(u); if (cnt) nfStart(); let r; try { r = await f.apply(this, arguments); } finally { if (cnt) nfEnd(); } try { const req = u && u.url ? u : null; const hdr = {}; const h = (opt && opt.headers) || (req && req.headers); if (h) { if (typeof h.forEach === 'function') h.forEach((v, k) => (hdr[k] = v)); else Object.assign(hdr, h); }
      const rb = bodyStr(opt && opt.body); const rh = {}; r.headers.forEach((v, k) => (rh[k] = v));
      r.clone().text().then((t) => { push(u && u.url || u, (opt || {}).method || (req && req.method) || 'GET', r.status, t); capPush({ kind: 'fetch', method: ((opt && opt.method) || (req && req.method) || 'GET').toUpperCase(), url: absU(u && u.url || u), reqHeaders: hdr, reqBody: rb, status: r.status, resHeaders: rh, resBody: t, ms: Date.now() - t0 }); }); } catch (e) {} return r; };
  }
  /* ---- Postman collection (v2.1) from the captured calls of the current journey ---- */
  function postmanCollection(journeyOnly) {
    const c = cfg(); const all = capLoad(); const calls = journeyOnly && c.fresh ? all.filter((x) => x.journey === c.fresh) : all;
    const lastRes = S.get('results', []).slice(-1)[0] || {}; const jid = (lastRes.ref || '').replace(/^.*?(JID[-A-Z0-9]+).*$/i, '$1') || '';
    const name = `1SB ${HERE.lob} · ${HERE.env} · ${c.mode === 'diy' ? 'DIY' : 'Assisted'}${c.product && c.product !== '*' ? ' · ' + c.product : ''}${jid ? ' · ' + jid : ''}`;
    const hosts = [...new Set(calls.map((x) => { try { return new URL(x.url).origin; } catch (e) { return ''; } }).filter(Boolean))];
    const vars = [{ key: 'baseUrl', value: hosts[0] || '', type: 'string' }, { key: 'token', value: '', type: 'string', description: 'Bearer / x-auth token – paste from a fresh portal session' }, { key: 'consumerId', value: IDS[c.mode === 'diy' ? 'diy' : 'assisted'], type: 'string' }];
    hosts.slice(1).forEach((h, i) => vars.push({ key: 'baseUrl' + (i + 2), value: h, type: 'string' }));
    const hostVar = (origin) => { const i = hosts.indexOf(origin); return i === 0 ? '{{baseUrl}}' : `{{baseUrl${i + 1}}}`; };
    const SECRET = /^(authorization|x-auth-token|x-api-key|token|cookie|x-access-token|x-csrf-token)$/i;
    const HOP = /^(content-length|host|connection|accept-encoding|origin|referer|sec-|user-agent|pragma|cache-control)/i;
    // secrets never go into the collection: JWTs / session tokens / api keys / passwords in bodies and headers become {{token}}
    const scrub = (s) => String(s || '').replace(/eyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}/g, '{{token}}').replace(/("(?:[a-zA-Z_]*)(token|secret|password|apikey|api_key|authorization|sessionid|session_id|cookie)"\s*:\s*")[^"]*(")/gi, '$1{{token}}$3');
    const pretty = (s) => { s = scrub(s); try { return JSON.stringify(JSON.parse(s), null, 2); } catch (e) { return s || ''; } };
    const folders = {}; const order = [];
    // polling loops (same GET repeated until isPollComplete) are collapsed to first + last call
    const squashed = []; calls.forEach((x) => { const prev = squashed[squashed.length - 1]; const sig = (y) => y.method + ' ' + y.url.replace(/[?#].*/, '') + ' ' + y.status;
      if (prev && x.method === 'GET' && sig(prev) === sig(x)) { prev.repeat = (prev.repeat || 1) + 1; prev.last = x; } else squashed.push(Object.assign({}, x)); });
    const flat = []; squashed.forEach((x) => { if (x.repeat > 1) { const last = x.last; delete x.last; x.name_suffix = ` (1st of ${x.repeat})`; flat.push(x); flat.push(Object.assign({}, last, { name_suffix: ` (last of ${x.repeat})` })); } else flat.push(x); });
    flat.forEach((x, n) => {
      let u; try { u = new URL(x.url); } catch (e) { return; }
      const path = u.pathname.replace(/\/$/, ''); const key = x.page || '/';
      if (!folders[key]) { folders[key] = []; order.push(key); }
      const headers = Object.entries(x.reqHeaders || {}).filter(([k]) => !HOP.test(k)).map(([k, v]) => ({ key: k, value: SECRET.test(k) ? (/^authorization$/i.test(k) && /^bearer /i.test(v) ? 'Bearer {{token}}' : '{{token}}') : scrub(v) }));
      const isJson = /json/i.test((x.reqHeaders || {})['Content-Type'] || (x.reqHeaders || {})['content-type'] || '') || /^\s*[\[{]/.test(x.reqBody || '');
      const item = { name: `${n + 1}. ${x.method} ${path.split('/').slice(-3).join('/')}${x.status ? ' → ' + x.status : ''}${x.name_suffix || ''}`,
        request: { method: x.method, header: headers, url: { raw: scrub(hostVar(u.origin) + u.pathname + u.search), host: [hostVar(u.origin)], path: u.pathname.split('/').filter(Boolean), query: [...u.searchParams].map(([k, v]) => ({ key: k, value: v })) },
          description: `Captured on page ${x.page} at ${new Date(x.t).toISOString()} (${x.kind})` },
        response: [{ name: `Captured response (${x.status})`, originalRequest: undefined, status: String(x.status), code: x.status, _postman_previewlanguage: 'json', header: Object.entries(x.resHeaders || {}).filter(([k]) => /content-type|x-request-id|x-trace/i.test(k)).map(([k, v]) => ({ key: k, value: scrub(v) })), body: pretty(x.resBody) }] };
      if (x.reqBody && !/^<(file|binary|blob)/.test(x.reqBody)) item.request.body = isJson ? { mode: 'raw', raw: pretty(x.reqBody), options: { raw: { language: 'json' } } } : { mode: 'raw', raw: scrub(x.reqBody) };
      folders[key].push(item);
    });
    return { info: { name, description: `Captured by 1SB Universal Journey Runner v${SB_VERSION} on ${new Date().toISOString()}.\nJourney: ${HERE.lob} / ${HERE.env} / ${c.mode}${c.category ? ' / ' + c.category : ''}${c.product ? ' / ' + c.product : ''}${jid ? '\nReference: ' + jid : ''}\nTest person: ${P.first} ${P.last}, ${P.gender}, age ${P.age}, mobile ${P.phone}\n${calls.length} API calls grouped by the portal page they were made from. Auth headers are replaced by {{token}}.`, schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json' },
      variable: vars, item: order.map((k) => ({ name: `Page ${k}`, item: folders[k] })) };
  }
  /* ---- Gateway collection (v5.22): the same layout as the team's working sanity collections – runs end to end in the Collection Runner once the
         environment holds baseUrl / authUser / authPass (Basic auth to the 1SB gateway), optionally channel / distributorID / agentID.
         MQ POST → MQ Poll (loop) → Gate criteria → Proposal form → SQ POST → SQ Poll (loop, keeps the quote) → Proposal POST (built live from the
         captured proposal + the fresh quote) → Proposal Poll (loop, applicationNumber) → [Payment Intimation when the journey made one]. ---- */
  function gatewayCollection() {
    const c = cfg(); const all = capLoad(); const calls = (c.fresh ? all.filter((x) => x.journey === c.fresh) : all).filter((x) => x.url);
    const J = (s) => { try { return JSON.parse(s); } catch (e) { return null; } };
    const path = (x) => { try { return new URL(x.url).pathname; } catch (e) { return ''; } };
    const qs = (x) => { try { return new URL(x.url).searchParams; } catch (e) { return new URLSearchParams(); } };
    const cat = (calls.map((x) => (path(x).match(/\/v2\/([a-z0-9]+)\//i) || [])[1]).find(Boolean) || { 'Life Term': 'lifeterm', Health: 'health', Investment: 'lifesave', 'Motor Insurance': 'motor', Embedded: 'grphlth' }[HERE.lob] || 'lifeterm');
    const quotes = calls.filter((x) => x.method === 'POST' && /\/quote\/?$/.test(path(x)) && J(x.reqBody));
    const multi = quotes.find((x) => /multi/i.test((J(x.reqBody) || {}).typeOfQuote || '')) || null;
    const singles = quotes.filter((x) => /single/i.test((J(x.reqBody) || {}).typeOfQuote || '')); const single = singles[singles.length - 1] || (!multi ? quotes[quotes.length - 1] : null);
    const pollAfter = (q) => q && calls.filter((x) => x.method === 'GET' && /quote\/poll/.test(path(x)) && x.t > q.t).sort((a, b) => a.t - b.t);
    const lastGood = (list) => { if (!list || !list.length) return null; const done = list.filter((x) => { const j = J(x.resBody); return j && j.data && j.data.isPollComplete !== false && Array.isArray(j.data.quote) && j.data.quote.length; }); return done[done.length - 1] || list[list.length - 1]; };
    const multiPoll = lastGood(pollAfter(multi)); const singlePoll = lastGood(pollAfter(single));
    const gateGet = calls.find((x) => x.method === 'GET' && /gateCriteria/.test(path(x)));
    const gatePost = calls.filter((x) => x.method === 'POST' && /gateCriteria/.test(path(x)) && J(x.reqBody)).pop();
    const propForm = calls.find((x) => x.method === 'GET' && /\/proposal\/?$/.test(path(x)));
    const drafts = calls.filter((x) => x.method === 'POST' && /proposal\/draft/.test(path(x)) && J(x.reqBody));
    const explicit = calls.filter((x) => x.method === 'POST' && /\/proposal\/?$/.test(path(x)) && J(x.reqBody)).pop();
    const bestDraft = drafts.map((x) => ({ x, j: J(x.reqBody) })).filter((o) => o.j && o.j.proposal_json).sort((a, b) => JSON.stringify(b.j.proposal_json).length - JSON.stringify(a.j.proposal_json).length)[0];
    const submit = explicit || (bestDraft && bestDraft.x) || drafts[drafts.length - 1];
    const propPoll = calls.filter((x) => x.method === 'GET' && /proposal\/poll/.test(path(x))).pop();
    const payment = calls.filter((x) => x.method === 'POST' && /payment\/intimation/i.test(path(x)) && J(x.reqBody)).pop();
    const sq = J((single || multi || {}).reqBody || '') || {};
    const mid = (gateGet && qs(gateGet).get('manufacturerId')) || (propForm && qs(propForm).get('manufacturerId')) || (sq.product && sq.product.insuranceAndProducts && sq.product.insuranceAndProducts[0] && sq.product.insuranceAndProducts[0].insuranceCompanyCode) || '';
    const pid = (gateGet && qs(gateGet).get('productId')) || (propForm && qs(propForm).get('productId')) || (sq.product && sq.product.insuranceAndProducts && sq.product.insuranceAndProducts[0] && [].concat(sq.product.insuranceAndProducts[0].productCode)[0]) || '';
    const jid = (() => { for (const x of calls) { const j = J(x.reqBody); const id = j && j.journey_id && /^JID-/i.test(j.journey_id) ? j.journey_id : null; if (id) return id; } for (const x of calls) { const j = J(x.resBody); const id = j && j.data && j.data.journey_id; if (id) return id; } return ''; })();
    const dist = (sq.distributor || {}); const distributorID = dist.distributorID || 'BCIBL'; const agentID = String(dist.agentID || ''); const channel = dist.channelType || (c.mode === 'diy' ? 'B2C' : 'B2B');
    const groupId = { lifeterm: 'LifeTerm', lifesave: 'LifeSave', health: 'Health', motor: 'Motor', grphlth: 'GroupHealth' }[cat] || cat;
    const base = '{{baseUrl}}/insurance/' + cat + '/v1';                                   // the portal's own /v2/<cat>/… paths are its session-bound proxy; the gateway (Basic auth) is /insurance/<cat>/v1/…
    const row = `${mid}-${pid}-${channel}`;
    // ---- templating: the captured bodies become re-runnable – distributor identity from the environment, fresh ids, no journey id
    const tmplQuote = (body) => { const j = JSON.parse(JSON.stringify(body)); j.journey_id = ''; j.customer_identifier = j.customer_identifier === undefined ? undefined : '';
      j.distributor = j.distributor || {}; j.distributor.distributorID = '{{distributorID}}'; if (j.distributor.agentID !== undefined) j.distributor.agentID = '{{agentID}}'; j.distributor.channelType = '{{channelType}}';
      (j.distributor.varFields || []).forEach((f) => { if (f && f.fieldName === 'typeOfSale') f.fieldValue = '{{typeOfSale}}'; }); return j; };
    const tmplData = (d) => { const j = JSON.parse(JSON.stringify(d)); try { const fg = j.fieldGroups || {}; const di = (fg.distributor || {}).fields || {}; if (di.distributorID) di.distributorID.input = '{{distributorID}}'; if (di.channelType) di.channelType.input = '{{channelType}}'; if (di.agentCode && agentID) di.agentCode.input = '{{agentID}}';
      const ti = (fg.traceInfo || {}).fields || {}; if (ti['1SBproposalRefId']) ti['1SBproposalRefId'].input = '{{$guid}}'; } catch (e) {} return j; };
    const pretty = (o) => { try { return JSON.stringify(typeof o === 'string' ? JSON.parse(o) : o, null, 2); } catch (e) { return String(o); } };
    const HELPERS = [
      "function classify(errs, http){ const e=(errs&&errs[0])||{}; const code=e.errorCode||''; const msg=e.errorMessage||e.errorDisplayMessage||e.message||''; let cls='OTHER';",
      "  if(!errs||!errs.length) cls = http>=500?'INFRA':(http===401||http===403)?'AUTH':'NONE';",
      "  else if(/MANUFACTURER/i.test(code)) cls='INSURER';",
      "  else if(/SB_VALIDATION|JINJA|TEMPLATE/i.test(code)||/manufacturer request/i.test(msg)) cls='1SB_JINJA';",
      "  else if(/AUTHORI/i.test(code)||http===401||http===403) cls='AUTH';",
      "  else if(/INTERNAL/i.test(code)||http>=500) cls='INFRA';",
      "  else if(/VALIDATION|INVALID|REQUIRED|INCORRECT|RANGE|LIST|PPF|GENERAL|FIELDS_NOT_MATCHED|MANDATORY/i.test(code)) cls='1SB_VALIDATION';",
      "  return {cls:cls, code:code, msg:String(msg).slice(0,200)}; }",
      "function errs(j){ return j.errors||j.listOfErrors||[]; }",
      "function report(line){ try{ let r=pm.collectionVariables.get('run_report')||''; if(r.length<120000){ pm.collectionVariables.set('run_report', r+line+'\\n'); } }catch(e){} }",
      "function log(stage,status,extra){ const line='['+pm.variables.get('row_id')+'] '+stage+' | '+status+' | '+(extra||''); console.log(line); if(!/^(PASS|OK|200)$/.test(String(status))) report(line); }",
      "function authCheck(){ if(pm.response.code===401||pm.response.code===403){ pm.test('AUTH FAILED ('+pm.response.code+') – set authUser / authPass (gateway Basic auth) and baseUrl in the environment', ()=>pm.expect(pm.response.code).to.be.below(400)); postman.setNextRequest(null); return true; } return false; }",
    ].join('\n');
    const PRE = (next) => [
      `pm.variables.set('next_item', ${JSON.stringify(next || '')} || null);`,
      "const ch = pm.environment.get('channel') || pm.collectionVariables.get('channel') || 'B2B';",
      "pm.variables.set('channelType', ch); pm.variables.set('typeOfSale', ch==='B2B'?'assisted':'nonassisted');",
      `pm.variables.set('distributorID', pm.environment.get('distributorID_${mid}') || pm.environment.get('distributorID') || pm.collectionVariables.get('distributorID') || ${JSON.stringify(distributorID)});`,
      `pm.variables.set('agentID', pm.environment.get('agentID') || pm.collectionVariables.get('agentID') || ${JSON.stringify(agentID)});`,
      "pm.variables.set('userId', pm.environment.get('userId') || pm.variables.get('agentID'));",
      `pm.variables.set('row_id', ${JSON.stringify(row)});`,
      "if(!pm.environment.get('baseUrl') && !pm.collectionVariables.get('baseUrl')) console.log('baseUrl is empty – set it (and authUser / authPass) in the Postman environment');",
    ];
    const req = (name, method, pathStr, body, pre, test, opts) => {
      const r = { name, request: { method, header: body !== undefined && body !== null ? [{ key: 'Content-Type', value: 'application/json' }] : [], url: { raw: base + pathStr, host: ['{{baseUrl}}'], path: ['insurance', cat, 'v1'].concat(pathStr.split('?')[0].split('/').filter(Boolean)), query: [...new URLSearchParams(pathStr.split('?')[1] || '')].map(([k, v]) => ({ key: k, value: v })) }, description: (opts && opts.desc) || '' }, response: [], event: [] };
      if (body !== undefined && body !== null) r.request.body = { mode: 'raw', raw: typeof body === 'string' ? body : pretty(body), options: { raw: { language: 'json' } } };
      r.event.push({ listen: 'prerequest', script: { type: 'text/javascript', exec: PRE(opts && opts.next).concat(pre || []) } });
      if (test) r.event.push({ listen: 'test', script: { type: 'text/javascript', exec: test } });
      if (opts && opts.sample) { let sbod = pretty(opts.sample.body || ''); if (sbod.length > 150000) sbod = sbod.slice(0, 150000) + '\n…[captured response truncated at 150 KB]'; r.response.push({ name: 'Captured on the portal (' + (opts.sample.status || 200) + ')', originalRequest: r.request, status: 'OK', code: opts.sample.status || 200, _postman_previewlanguage: 'json', header: [{ key: 'Content-Type', value: 'application/json' }], body: sbod }); }
      return r; };
    const POLL = (kind, maxVar, onDone) => [
      "eval(pm.collectionVariables.get('helpers')); if(authCheck()) return;",
      "let attempt=parseInt(pm.collectionVariables.get('poll_attempt')||'0')+1; pm.collectionVariables.set('poll_attempt', String(attempt));",
      `const max=parseInt(pm.collectionVariables.get('${maxVar}')||'30'); let b={}; try{b=pm.response.json();}catch(e){}`,
      kind === 'proposal' ? "const done=!!(b.data&&(b.data.isPollComplete===true||b.data.ManufacturerTracking||b.data.status));" : "const done=!!(b.data&&b.data.isPollComplete===true);",
      "if(!done && attempt<max){ setTimeout(()=>{}, parseInt(pm.collectionVariables.get('pollMs')||'2000')); postman.setNextRequest(pm.info.requestName); return; }",
      "pm.collectionVariables.set('poll_attempt','0'); const row=pm.variables.get('row_id');",
    ].concat(onDone);
    const items = []; const names = []; const nm = (n) => { names.push(n); return n; };
    const N_MQ = '00 MQ POST', N_MQP = '00 MQ Poll', N_GATE = '01 Gate criteria', N_GATEP = '01 Gate criteria (POST)', N_FORM = '02 Proposal form', N_SQ = '03 SQ POST', N_SQP = '04 SQ Poll', N_PROP = '05 Proposal POST', N_PROPP = '06 Proposal Poll', N_PAY = '07 Payment Intimation';
    const firstProduct = gateGet || pid ? N_GATE : gatePost ? N_GATEP : N_FORM;
    if (multi) {
      items.push(req(nm(N_MQ), 'POST', '/quote', tmplQuote(J(multi.reqBody)), ["pm.collectionVariables.set('run_report','');"], [
        "eval(pm.collectionVariables.get('helpers')); if(authCheck()) return;",
        "let j={}; try{j=pm.response.json();}catch(e){} const e=errs(j); pm.collectionVariables.set('mq_req_id', j.reqId||''); pm.collectionVariables.set('poll_attempt','0');",
        "pm.test('MQ POST accepted reqId='+(j.reqId||''), ()=>{pm.expect(e.length).to.eql(0); pm.expect(j.reqId).to.not.be.empty;});",
        "if(e.length||!j.reqId) postman.setNextRequest(pm.variables.get('next_item')||null);",
      ], { next: firstProduct, desc: `Multi-quote as the portal sent it (${multi.url.replace(/[?#].*/, '')}); journey_id blank, distributor from the environment.`, sample: { body: multi.resBody, status: multi.status } }));
      items.push(req(nm(N_MQP), 'GET', '/quote/poll/{{mq_req_id}}', null, [], POLL('quote', 'mqMaxPoll', [
        "const ok=((b.data&&(b.data.quote||b.data.quotes))||[]).map(q=>{const ip=q.insuranceAndProducts||{}; return ip.insuranceCompanyCode+'/'+ip.productCode;});",
        "const bad=(b.errors||[]).map(x=>{const f=(x.listOfErrors||[])[0]||{}; return x.manufacturerId+'/'+x.productId+' ['+classify([f],400).cls+'] '+(f.errorCode||'')+' '+String(f.errorMessage||'').slice(0,80);});",
        "const okSet=[...new Set(ok)], badSet=[...new Set(bad)]; console.log('MQ complete='+done+' ok='+okSet.length+' errors='+badSet.length); okSet.forEach(x=>console.log('  OK  '+x)); badSet.forEach(x=>console.log('  ERR '+x));",
        "pm.test('MQ returned '+okSet.length+' healthy products'+(done?'':' (poll timeout)'), ()=>pm.expect(okSet.length).to.be.above(0));",
        `pm.test('MQ lists ${mid}/${pid}', ()=>pm.expect(okSet.some(x=>x==='${mid}/${pid}'), '${mid}/${pid} quoted').to.be.true);`,
      ]), { next: firstProduct, desc: 'Repeats itself every pollMs until data.isPollComplete is true (mqMaxPoll attempts).', sample: multiPoll ? { body: multiPoll.resBody, status: multiPoll.status } : undefined }));
    }
    const GATE_TEST = [
      "eval(pm.collectionVariables.get('helpers')); if(authCheck()) return;",
      "let j={}; try{j=pm.response.json();}catch(e){} const e=errs(j); const row=pm.variables.get('row_id'); const c=classify(e,pm.response.code); const ok=(pm.response.code<300&&!e.length);",
      "pm.test(row+' Gate '+(ok?'PASS':'FAIL ['+c.cls+'] '+c.code+' '+c.msg), ()=>{ pm.expect(pm.response.code).to.be.below(300); pm.expect(e.length).to.eql(0); });",
      "log('GATE', ok?'PASS':'FAIL', c.code+' '+c.msg);",
    ];
    if (gateGet || pid) items.push(req(nm(N_GATE), 'GET', `/quote/gateCriteria?productId=${pid}&manufacturerId=${mid}`, null, [], GATE_TEST, { next: gatePost ? N_GATEP : N_FORM, sample: gateGet ? { body: gateGet.resBody, status: gateGet.status } : undefined }));
    if (gatePost) { const gb = JSON.parse(JSON.stringify(J(gatePost.reqBody))); try { const d = gb.eligibilityMapping.fieldGroups.distributor.fields; if (d.distributorID) d.distributorID.input = '{{distributorID}}'; if (d.channelType) d.channelType.input = '{{channelType}}'; if (d.agentCode && agentID) d.agentCode.input = '{{agentID}}'; } catch (e) {}
      items.push(req(nm(N_GATEP), 'POST', `/quote/gateCriteria${/\?/.test(gatePost.url) ? '?' + gatePost.url.split('?')[1].replace(/#.*/, '') : ''}`, gb, [], GATE_TEST, { next: N_FORM, desc: 'Gate-criteria answers exactly as the portal submitted them (suitability / hierarchy), distributor from the environment.', sample: { body: gatePost.resBody, status: gatePost.status } })); }
    items.push(req(nm(N_FORM), 'GET', `/proposal?productId=${pid}&manufacturerId=${mid}`, null, [], [
      "eval(pm.collectionVariables.get('helpers')); if(authCheck()) return;",
      "let j={}; try{j=pm.response.json();}catch(e){} const e=errs(j); const row=pm.variables.get('row_id'); const d=j.data||{}; const fg=d.fieldGroups||{};",
      "const ok=(pm.response.code===200 && !e.length && Object.keys(fg).length>0); const c=classify(e,pm.response.code);",
      "pm.test(row+' Proposal form '+(ok?'OK groups='+Object.keys(fg).length:'FAIL ['+c.cls+'] '+c.code+' '+c.msg), ()=>{ pm.expect(pm.response.code).to.eql(200); pm.expect(e.length).to.eql(0); });",
      "pm.collectionVariables.set('form_ok', ok?'1':'0'); log('FORM', ok?'OK':'FAIL', 'groups='+Object.keys(fg).length);",
    ], { next: N_SQ, desc: 'The live proposal form for this product (the Proposal POST is built from the journey\'s own filled form, so this is a health check).', sample: propForm ? { body: propForm.resBody, status: propForm.status } : undefined }));
    if (single) {
      items.push(req(nm(N_SQ), 'POST', '/quote', tmplQuote(J(single.reqBody)), [], [
        "eval(pm.collectionVariables.get('helpers')); if(authCheck()) return;",
        "let j={}; try{j=pm.response.json();}catch(e){} const e=errs(j); const reqId=j.reqId||''; const row=pm.variables.get('row_id');",
        "pm.collectionVariables.set('req_id', reqId); pm.collectionVariables.set('poll_attempt','0'); pm.collectionVariables.set('sq_pass','0');",
        "if(e.length||!reqId){ const c=classify(e,pm.response.code); pm.test(row+' SQ FAIL at POST ['+c.cls+'] '+c.code+' '+c.msg, ()=>{pm.expect(e.length,'errors').to.eql(0); pm.expect(reqId,'reqId').to.not.be.empty;}); log('SQ POST','FAIL',c.cls+' '+c.code+' '+c.msg); postman.setNextRequest(null); return; }",
        "pm.test(row+' SQ submitted reqId='+reqId, ()=>pm.expect(reqId).to.not.be.empty); log('SQ POST','200','reqId '+reqId);",
        "try{ pm.collectionVariables.set('sq_request', pm.variables.replaceIn(pm.request.body.raw)); }catch(x){ pm.collectionVariables.set('sq_request',''); }",
      ], { next: N_SQP, desc: `Single quote exactly as the portal sent it after the plan was chosen (${single.url.replace(/[?#].*/, '')}).`, sample: { body: single.resBody, status: single.status } }));
      items.push(req(nm(N_SQP), 'GET', '/quote/poll/{{req_id}}', null, [], POLL('quote', 'maxPoll', [
        "if(!done){ pm.test(row+' SQ INCONCLUSIVE (poll timeout)', ()=>pm.expect(done,'poll complete').to.be.true); log('SQ','INCONCLUSIVE'); postman.setNextRequest(null); return; }",
        "const e2=b.errors||(b.data&&b.data.errors)||[]; const q=((b.data&&(b.data.quote||b.data.quotes))||[])[0]||{}; const all=e2.length?e2:(q.errors||[]);",
        "const s=JSON.stringify(b.data||{}); const prem=(s.match(/\"premiumValue\":\\s*\"?([\\d.]+)/)||[])[1]||''; const bi=/\"biUrl\":\\s*\"[^\"]{20,}/.test(s);",
        "const c=classify(all,200); const pass=(!all.length&&prem);",
        "pm.test(row+' SQ '+(all.length?'FAIL ['+c.cls+'] '+c.code+' '+c.msg:(prem?'PASS premium='+prem+(bi?' BI=yes':' BI=no'):'FAIL no premiumValue')), ()=>{ pm.expect(all.length,'errors').to.eql(0); pm.expect(prem,'premiumValue').to.not.eql(''); });",
        "pm.collectionVariables.set('last_poll_body', JSON.stringify(b)); pm.collectionVariables.set('sq_pass', pass?'1':'0'); log('SQ', pass?'PASS':'FAIL', c.cls+' '+c.code+' '+c.msg);",
        "if(!pass) postman.setNextRequest(null);",
      ]), { next: N_PROP, desc: 'Repeats itself until data.isPollComplete is true; keeps the quote for the Proposal POST (quoteResponse).', sample: singlePoll ? { body: singlePoll.resBody, status: singlePoll.status } : undefined }));
    }
    let propTemplate = '';
    if (submit) { const sb = J(submit.reqBody) || {};
      const pj = sb.proposal_json || (sb.data && sb.data.fieldGroups ? sb.data : null) || null;
      const data = pj && pj.fieldGroups ? Object.assign({ productId: pid, manufacturerId: mid, productGroupId: groupId, productGroupType: 'Insurance', shorterJourney: 'NO' }, pj) : pj ? { productId: pid, fieldGroups: pj, manufacturerId: mid, productGroupId: groupId, productGroupType: 'Insurance', shorterJourney: 'NO' } : (sb.data || sb);
      propTemplate = JSON.stringify(tmplData(data));
      items.push(req(nm(N_PROP), 'POST', '/proposal', '{{proposal_body}}', [
        "if(pm.collectionVariables.get('sq_pass')!=='1'){ console.log('['+pm.variables.get('row_id')+'] skip proposal: SQ not passed'); postman.setNextRequest(null); }",
        "let pb={}; try{pb=JSON.parse(pm.collectionVariables.get('last_poll_body')||'{}');}catch(x){} let sqReq={}; try{sqReq=JSON.parse(pm.collectionVariables.get('sq_request')||'{}');}catch(x){}",
        "// the gateway expects quoteResponse.data = { quote:[the fresh SQ poll quotes], request:<the SQ request that produced them> }",
        "const qr={data:{quote:(pb.data&&(pb.data.quote||pb.data.quotes))||[], request:(pb.data&&pb.data.request)||sqReq}};",
        "// data = the proposal exactly as this journey filled it on the portal (collection variable proposal_template), distributor / ids from the environment, a fresh 1SBproposalRefId",
        "let d={}; try{ d=JSON.parse(pm.variables.replaceIn(pm.collectionVariables.get('proposal_template')||'{}')); }catch(x){ console.log('proposal_template is not valid JSON: '+x.message); }",
        "try{ const q0=qr.data.quote[0]||{}; const ti=(d.fieldGroups.traceInfo||{}).fields||{}; if(ti.manufacturerQuoteID && q0.trackInfo && q0.trackInfo.manufacturerQuoteID) ti.manufacturerQuoteID.input=q0.trackInfo.manufacturerQuoteID; }catch(e){}",
        "pm.variables.set('proposal_body', JSON.stringify({quoteResponse:qr, data:d}));",
      ], [
        "eval(pm.collectionVariables.get('helpers')); if(authCheck()) return;",
        "let j={}; try{j=pm.response.json();}catch(e){} const e=errs(j); const reqId=j.reqId||''; const row=pm.variables.get('row_id');",
        "pm.collectionVariables.set('prop_req_id', reqId); pm.collectionVariables.set('poll_attempt','0');",
        "if(e.length||!reqId){ const c=classify(e,pm.response.code); pm.test(row+' Proposal FAIL at POST ['+c.cls+'] '+c.code+' '+c.msg, ()=>{pm.expect(e.length).to.eql(0); pm.expect(reqId,'reqId').to.not.be.empty;}); log('PROPOSAL POST','FAIL',c.code+' '+c.msg); postman.setNextRequest(null); return; }",
        "pm.test(row+' Proposal submitted reqId='+reqId, ()=>pm.expect(reqId).to.not.be.empty); log('PROPOSAL POST','200','reqId '+reqId);",
      ], { next: N_PROPP, desc: `Body is built in the pre-request script: quoteResponse from the fresh SQ poll + data = the proposal this journey submitted on the portal (${submit.url.replace(/[?#].*/, '')}${(J(submit.reqBody) || {}).tag_name ? ', tag ' + (J(submit.reqBody) || {}).tag_name : ''}).`, sample: { body: submit.resBody, status: submit.status } })); }
    items.push(req(nm(N_PROPP), 'GET', `/proposal/poll?manufacturerId=${mid}&productId=${pid}&version=1&requestId={{prop_req_id}}`, null, [], POLL('proposal', 'maxPoll', [
      "pm.collectionVariables.set('app_no','');",
      "const e3=b.errors||[]; const mt=(b.data&&b.data.ManufacturerTracking)||{}; const app=mt.applicationNumber||mt.proposalNumber||''; const c=classify(e3,200);",
      "pm.test(row+' Proposal '+((!e3.length&&app)?'PASS applicationNumber='+app:'FAIL ['+c.cls+'] '+c.code+' '+c.msg), ()=>{ pm.expect(e3.length).to.eql(0); pm.expect(app).to.not.eql(''); });",
      "log('PROPOSAL', (!e3.length&&app)?'PASS':'FAIL', app||c.msg); pm.collectionVariables.set('app_no', (!e3.length&&app)?app:'');",
      payment ? "if(!app) postman.setNextRequest(null);" : "postman.setNextRequest(null);",
    ]), { next: payment ? N_PAY : '', desc: 'Repeats itself until the insurer answers; PASS = an applicationNumber in data.ManufacturerTracking.', sample: propPoll ? { body: propPoll.resBody, status: propPoll.status } : undefined }));
    if (payment) { const pb = JSON.parse(JSON.stringify(J(payment.reqBody))); try { pb.distributor.distributorID = '{{distributorID}}'; pb.distributor.channelType = '{{channelType}}'; } catch (e) {}
      items.push(req(nm(N_PAY), 'POST', '/proposal/payment/intimation', '{{payment_body}}', [
        "const app=pm.collectionVariables.get('app_no')||''; if(!app){ console.log('no applicationNumber – payment intimation skipped'); postman.setNextRequest(null); }",
        `let body=${JSON.stringify(pb)}; body=JSON.parse(pm.variables.replaceIn(JSON.stringify(body)));`,
        "try{ body.trackInfo=Object.assign(body.trackInfo||{}, {manuApplicationNo:app, manufacturerQuoteID:app, policyNumber:app}); const txn='RUN'+Date.now(); body.paymentDetails=Object.assign(body.paymentDetails||{}, {paymentTransactionId:txn, paymentOrderID:txn, consumerReferenceNo:'pay_'+txn}); }catch(e){}",
        "pm.variables.set('payment_body', JSON.stringify(body));",
      ], [
        "eval(pm.collectionVariables.get('helpers')); if(authCheck()) return;",
        "let j={}; try{j=pm.response.json();}catch(e){} const e=errs(j); const row=pm.variables.get('row_id'); const c=classify(e,pm.response.code); const ok=(pm.response.code<300&&!e.length);",
        "pm.test(row+' Payment intimation '+(ok?'PASS':'FAIL ['+c.cls+'] '+c.code+' '+c.msg), ()=>{ pm.expect(pm.response.code).to.be.below(300); pm.expect(e.length,'errors').to.eql(0); }); log('PAYMENT', ok?'PASS':'FAIL', c.code+' '+c.msg); postman.setNextRequest(null);",
      ], { next: '', desc: 'Payment intimation as the portal sent it, with the fresh applicationNumber and a new transaction id.', sample: { body: payment.resBody, status: payment.status } })); }
    const host = (() => { try { return new URL((multi || single || calls[0]).url).origin; } catch (e) { return ''; } })();
    const name = `${HERE.env} Gateway Collection ${HERE.lob}-${(c.product && c.product !== '*' ? c.product : pid) || ''}_${channel}${jid ? '_' + jid : ''}`.replace(/\s+/g, ' ');
    const defBase = HERE.env === 'demo' ? 'https://demo.api.1silverbullet.tech' : '';
    return { info: { name, description: `Gateway collection made by 1SB Universal Journey Runner v${SB_VERSION} on ${new Date().toISOString()} from a journey on ${host}.\nManufacturer ${mid} · product ${pid} · ${channel}${jid ? ' · journey ' + jid : ''}\n\nHOW TO RUN: select the "1SB ${HERE.env}" environment (baseUrl = the gateway, authUser / authPass = the gateway Basic-auth credentials, optionally channel / distributorID / agentID), then Run collection. Every request carries the collection's Basic auth; polls repeat themselves; a failed step ends the run with the reason in the test name and in the run_report variable.\n\nFlow: ${items.map((i) => i.name).join(' → ')}`, schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json' },
      auth: { type: 'basic', basic: [{ key: 'username', value: '{{authUser}}', type: 'string' }, { key: 'password', value: '{{authPass}}', type: 'string' }] },
      variable: [
        { key: 'baseUrl', value: defBase, type: 'string' }, { key: 'authUser', value: '', type: 'string' }, { key: 'authPass', value: '', type: 'string' },
        { key: 'channel', value: channel }, { key: 'distributorID', value: distributorID }, { key: 'agentID', value: agentID },
        { key: 'manufacturerId', value: mid }, { key: 'productId', value: pid }, { key: 'journey_id', value: jid },
        { key: 'req_id', value: '' }, { key: 'mq_req_id', value: '' }, { key: 'prop_req_id', value: '' }, { key: 'poll_attempt', value: '0' }, { key: 'maxPoll', value: '30' }, { key: 'mqMaxPoll', value: '90' }, { key: 'pollMs', value: '2000' },
        { key: 'last_poll_body', value: '' }, { key: 'sq_request', value: '' }, { key: 'sq_pass', value: '0' }, { key: 'form_ok', value: '' }, { key: 'app_no', value: '' }, { key: 'run_report', value: '' },
        { key: 'proposal_template', value: propTemplate }, { key: 'helpers', value: HELPERS },
      ],
      item: items };
  }
  function downloadGateway() {
    const col = gatewayCollection(); if (!col.item.length) { banner('Postman', 'No quote/proposal calls captured yet – run a journey first'); return; }
    saveBlob(new Blob([JSON.stringify(col, null, 2)], { type: 'application/json' }), col.info.name.replace(/[^\w.-]+/g, '_').replace(/_+/g, '_').slice(0, 150) + '.postman_collection.json');
    banner('Postman', `Gateway collection downloaded: ${col.item.map((i) => i.name).join(' → ')}`);
  }
  function downloadPostman(journeyOnly) {
    const col = postmanCollection(journeyOnly); if (!col.item.length) { banner('Postman', 'No API calls captured yet – run a journey first (capture starts when the script is on the page)'); return; }
    const blob = new Blob([JSON.stringify(col, null, 2)], { type: 'application/json' }); const a = document.createElement('a'); a.href = URL.createObjectURL(blob);
    a.download = col.info.name.replace(/[^\w.-]+/g, '_').replace(/_+/g, '_') + '.postman_collection.json'; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 2000);
    banner('Postman', `Collection downloaded: ${col.item.reduce((s, f) => s + f.item.length, 0)} requests in ${col.item.length} page folders – import it in Postman (File → Import)`);
  }
  function netSummary() {
    const recent = NET.filter((x) => Date.now() - x.t < 180000);
    const bad = recent.filter((x) => x.st >= 400 || (x.err && x.err !== 'isPollComplete=false'));
    const polls = recent.filter((x) => x.err === 'isPollComplete=false');
    const parts = [];
    if (bad.length) { const b = bad[bad.length - 1]; parts.push(`API ${b.m || ''} ${b.u.replace(/^https?:\/\/[^/]+/, '')} -> ${b.st}${b.err ? ' ' + b.err : ''}`); }
    if (polls.length >= 5) { const p = polls[polls.length - 1]; parts.push(`${p.u.replace(/^https?:\/\/[^/]+/, '')} polled ${polls.length}x, never completed`); }
    return parts.join(' | ');
  }

  /* ---------------- profile ---------------- */
  const FIRST = { Male: ['Rahul', 'Amit', 'Vikram', 'Rohan', 'Arjun', 'Sandeep', 'Nikhil', 'Karan'], Female: ['Priya', 'Neha', 'Anjali', 'Pooja', 'Sneha', 'Kavita', 'Ritu', 'Shreya'] };
  const LAST = ['Sharma', 'Verma', 'Patel', 'Mehta', 'Joshi', 'Gupta', 'Iyer', 'Deshmukh', 'Nair', 'Kulkarni'];
  const ADDR = { '411001': ['Flat 12, Shanti Residency', 'MG Road, Camp', 'Near Central Mall'], '400001': ['Flat 804, Sea View Towers', 'P D Mello Road, Fort', 'Near GPO'], '560001': ['Flat 21, Prestige Towers', 'Residency Road', 'Near Brigade Road'], '110001': ['Flat 9, Sunder Apartments', 'Connaught Place', 'Near Palika Bazar'],
    '600001': ['Flat 5, Marina Residency', 'Rajaji Salai, Parrys', 'Near High Court'], '500001': ['Flat 17, Lake View Residency', 'Abids Road', 'Near GPO'], '380001': ['Flat 33, Sapphire Heights', 'Relief Road', 'Near Lal Darwaja'], '302001': ['Flat 6, Pink City Residency', 'MI Road', 'Near Statue Circle'] };
  const NOM_COMBOS = [['Mother', 'Mother (default)'], ['Father', 'Father'], ['Spouse', 'Spouse'], ['Brother – Brother', 'Brother – Brother (life assured male, nominee his brother)'], ['Brother – Sister', 'Brother – Sister (life assured male, nominee his sister)'], ['Sister – Brother', 'Sister – Brother (life assured female, nominee her brother)'], ['Sister – Sister', 'Sister – Sister (life assured female, nominee her sister)'], ['Son', 'Son'], ['Daughter', 'Daughter']];
  const PINS = [['411001', 'Pune', 'MAHARASHTRA'], ['400001', 'Mumbai', 'MAHARASHTRA'], ['560001', 'Bengaluru', 'KARNATAKA'], ['110001', 'New Delhi', 'DELHI'],
    ['600001', 'Chennai', 'TAMIL NADU'], ['500001', 'Hyderabad', 'TELANGANA'], ['380001', 'Ahmedabad', 'GUJARAT'], ['302001', 'Jaipur', 'RAJASTHAN']];
  const rnd = (a) => a[Math.floor(Math.random() * a.length)];
  const pad = (n) => String(n).padStart(2, '0');
  const digits = (n) => String(Math.floor(Math.random() * Math.pow(10, n))).padStart(n, '0');
  const RTO = { MAHARASHTRA: 'MH12', KARNATAKA: 'KA01', DELHI: 'DL01', 'TAMIL NADU': 'TN01', TELANGANA: 'TS09', GUJARAT: 'GJ01', RAJASTHAN: 'RJ14' };
  function generateProfile() {
    const gender = rnd(['Male', 'Female']); const first = rnd(FIRST[gender]); const last = rnd(LAST);
    const year = 1980 + Math.floor(Math.random() * 16), month = 1 + Math.floor(Math.random() * 12), day = 1 + Math.floor(Math.random() * 28);
    const [pin, city, state] = rnd(PINS); const motherFirst = rnd(FIRST.Female); let fatherFirst = rnd(FIRST.Male); while (fatherFirst === first) fatherFirst = rnd(FIRST.Male);
    const spouseG = gender === 'Male' ? 'Female' : 'Male';
    return {
      gender, first, middle: rnd(['Kumar', 'Singh', 'Raj', '']), last, pin, city, state,
      dobISO: `${year}-${pad(month)}-${pad(day)}`, dobDMY: `${pad(day)}-${pad(month)}-${year}`, dobSlash: `${pad(day)}/${pad(month)}/${year}`,
      age: Math.floor((Date.now() - new Date(year, month - 1, day)) / 31557600000),
      phone: '9' + digits(9), income: String((15 + Math.floor(Math.random() * 16)) * 100000),
      email: `${first}.${last}.test${digits(3)}@example.com`.toLowerCase(),
      education: rnd(['Graduate', 'Post Graduate']), occupation: 'Salaried', tobacco: 'No', residentStatus: 'Resident Indian', relation: 'Self', marital: 'Married',
      father: `${fatherFirst} ${last}`, mother: `${motherFirst} ${last}`,
      spouse: { first: rnd(FIRST[spouseG]), last, gender: spouseG, dobISO: `${year + 1}-0${1 + Math.floor(Math.random() * 8)}-15` },
      nominee: { first: motherFirst, last, gender: 'Female', relation: 'Mother', dobISO: `${year - 25}-04-12`, share: '100', email: `${motherFirst}.${last}.test@example.com`.toLowerCase(), phone: '9' + digits(9) },
      pan: 'ABCP' + last[0].toUpperCase() + digits(4) + 'F',
      address1: `Flat ${1 + Math.floor(Math.random() * 90)}, Shanti Residency`, address2: 'MG Road', landmark: 'Near Central Mall',
      bank: { ifsc: 'HDFC0000240', account: '5010' + digits(10), micr: '411240002', name: 'HDFC Bank', type: 'Saving' },
      heightCm: 160 + Math.floor(Math.random() * 20), weightKg: 58 + Math.floor(Math.random() * 25),
      vehicle: { reg: `${RTO[state] || 'MH12'}${String.fromCharCode(65 + Math.floor(Math.random() * 26))}${String.fromCharCode(65 + Math.floor(Math.random() * 26))}${digits(4)}`,
        engine: 'ENG' + digits(9), chassis: 'MA3' + digits(14), year: String(2019 + Math.floor(Math.random() * 4)) },
      createdAt: new Date().toISOString(),
    };
  }
  let P = S.get('profile', null); if (!P || !P.vehicle) { P = generateProfile(); S.set('profile', P); }
  if (P.father && P.father.split(' ')[0] === P.first) { const alt = FIRST.Male.find((n) => n !== P.first) || 'Suresh'; P.father = `${alt} ${P.last}`; S.set('profile', P); }   // father must not carry the proposer's own first name
  // KYC test identity: a PAN (+ DOB) that the environment's CKYC actually answers. Taught by typing it on a KYC page; the whole journey
  // then uses that PAN and DOB (so quote age, proposer DOB and KYC agree). Seeded from the team's known-good values per environment.
  const KYC_SEED = { demo: { pan: 'DTLPA0484B', dob: '11-11-2001' }, dev: { pan: 'DTLPA0484B', dob: '11-11-2001' }, test: { pan: 'DTLPA0484B', dob: '11-11-2001' } };   // the CKYC registries of demo / dev / test all answer this PAN + DOB
  const kycIdentity = () => { const all = Object.assign({}, KYC_SEED, S.get('kycId', {})); return all[HERE.env] || null; };
  function applyKycIdentity() {
    const k = kycIdentity(); if (!k || !k.pan) return; if (P.panCustom) return;   // a PAN typed in the Start dialog wins over the environment's KYC identity
    const n = Object.assign({}, P); n.pan = k.pan.toUpperCase();
    if (/^\d{2}-\d{2}-\d{4}$/.test(k.dob || '') && !P.ageCustom && !/retire|pension|annuity/i.test((S.get(CFGK(), {}) || {}).category || '')) {   /* an age typed in the Start dialog wins over the identity's date of birth; retirement products need an older life assured – the identity DOB is skipped there */ const [d, m, y] = k.dob.split('-'); n.dobISO = `${y}-${m}-${d}`; n.dobDMY = k.dob; n.dobSlash = `${d}/${m}/${y}`; n.age = Math.floor((Date.now() - new Date(+y, +m - 1, +d)) / 31557600000); }
    P = n;                                                   // not persisted: the stored profile stays the person's own; the identity is applied on load
  }
  function learnKycIdentity(part, val) {
    const all = S.get('kycId', {}); const cur = Object.assign({}, KYC_SEED[HERE.env] || {}, all[HERE.env] || {}); cur[part] = val; cur.at = new Date().toISOString().slice(0, 10); all[HERE.env] = cur; S.set('kycId', all); applyKycIdentity();
    teachNote(`KYC identity for ${HERE.env}: ${part.toUpperCase()} ${val} – used for every journey on ${HERE.env} from now on`);
  }
  applyKycIdentity();

  /* user-entered test person: name, gender, age, mobile, email, PIN, income – everything derived is recomputed */
  // a date written the way the field already shows one (react-datepicker "03 Nov 2026", "Nov 3, 2026", "03/11/2026", ISO …) – a date in the wrong format crashes some React forms
  function fmtDateLike(el, iso) {
    const [y, m, d] = String(iso).split('-'); const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']; const FULL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const sample = String(el.value || el.placeholder || el.getAttribute('data-date-format') || el.getAttribute('format') || '').trim();
    if (/^\d{1,2} [A-Za-z]{3} \d{4}$/.test(sample) || /^dd? ?MMM ?yyyy$/i.test(sample)) return `${d} ${MON[+m - 1]} ${y}`;
    if (/^\d{1,2} [A-Za-z]{4,9},? \d{4}$/.test(sample)) return `${d} ${FULL[+m - 1]} ${y}`;
    if (/^[A-Za-z]{3} \d{1,2}, \d{4}$/.test(sample)) return `${MON[+m - 1]} ${+d}, ${y}`;
    if (/^[A-Za-z]{4,9} \d{1,2}, \d{4}$/.test(sample)) return `${FULL[+m - 1]} ${+d}, ${y}`;
    if (/^\d{4}-\d{2}-\d{2}$/.test(sample) || /^yyyy-mm-dd$/i.test(sample)) return `${y}-${m}-${d}`;
    if (/^mm\/dd\/yyyy$/i.test(sample) || /^MM\/DD\/YYYY$/.test(sample)) return `${m}/${d}/${y}`;
    if (/\//.test(sample)) return `${d}/${m}/${y}`;
    return `${d}-${m}-${y}`;
  }
  function dobForAge(age, base) {
    const now = new Date(); const [, bm, bd] = (base || '1990-06-15').split('-').map(Number);
    let y = now.getFullYear() - age; const had = (now.getMonth() + 1 > bm) || (now.getMonth() + 1 === bm && now.getDate() >= bd);
    if (!had) y -= 1;                              // birthday still to come this year
    return `${y}-${pad(bm)}-${pad(bd)}`;
  }
  function validatePerson(v) {
    const e = {};
    if (!/^[A-Za-z][A-Za-z ]{1,29}$/.test(v.first || '')) e.first = 'Letters only, 2–30';
    if (v.middle && !/^[A-Za-z ]{1,30}$/.test(v.middle)) e.middle = 'Letters only';
    if (!/^[A-Za-z][A-Za-z ]{0,29}$/.test(v.last || '')) e.last = 'Letters only';
    if (!(Number.isInteger(+v.age) && +v.age >= 18 && +v.age <= 90)) e.age = 'Whole number 18 – 90';
    if (!/^[6-9]\d{9}$/.test(v.phone || '')) e.phone = '10 digits, starts 6-9';
    if (!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(v.email || '')) e.email = 'Valid email';
    if (!/^[1-9]\d{5}$/.test(v.pin || '')) e.pin = '6-digit PIN';
    if (!(+v.income >= 1 && +v.income <= 500)) e.income = '1 – 500 lakh';
    if (v.pan !== undefined && !/^[A-Z]{5}\d{4}[A-Z]$/i.test(v.pan || '')) e.pan = 'Format ABCDE1234F';
    if (v.aadhaar !== undefined && !/^\d{12}$/.test(String(v.aadhaar || '').replace(/\s/g, ''))) e.aadhaar = '12 digits';
    if (v.ckyc !== undefined && v.ckyc !== '' && !/^\d{14}$/.test(v.ckyc)) e.ckyc = '14 digits (or blank)';
    if (v.account !== undefined && !/^\d{9,18}$/.test(v.account || '')) e.account = '9 – 18 digits';
    if (v.ifsc !== undefined && !/^[A-Z]{4}0[A-Z0-9]{6}$/i.test(v.ifsc || '')) e.ifsc = 'Format HDFC0000240';
    if (v.bankName !== undefined && !/^[A-Za-z][A-Za-z .&-]{1,60}$/.test(v.bankName || '')) e.bankName = 'Bank name';
    return e;
  }
  function applyPerson(v) {
    const n = Object.assign({}, P);
    const cap = (x) => String(x || '').trim().replace(/\s+/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
    n.first = cap(v.first); n.middle = cap(v.middle); n.last = cap(v.last); n.gender = v.gender === 'Female' ? 'Female' : 'Male';
    n.dobISO = dobForAge(+v.age, P.dobISO); const [y, m, d] = n.dobISO.split('-');
    n.dobDMY = `${d}-${m}-${y}`; n.dobSlash = `${d}/${m}/${y}`; n.age = +v.age; n.ageCustom = +v.age !== +P.age || !!P.ageCustom;
    n.phone = String(v.phone).trim(); n.email = String(v.email).trim().toLowerCase(); n.income = String(Math.round(+v.income * 100000));
    const known = PINS.find((x) => x[0] === String(v.pin).trim());
    n.pin = String(v.pin).trim(); n.city = known ? known[1] : (v.city || P.city); n.state = known ? known[2] : (v.state || P.state);
    n.pan = v.pan !== undefined && /^[A-Z]{5}\d{4}[A-Z]$/i.test(v.pan) ? String(v.pan).toUpperCase() : (P.panCustom ? P.pan : 'ABCP' + n.last[0].toUpperCase() + P.pan.slice(5, 9) + 'F'); n.panCustom = v.pan !== undefined ? n.pan !== 'ABCP' + n.last[0].toUpperCase() + P.pan.slice(5, 9) + 'F' : !!P.panCustom;
    if (v.aadhaar !== undefined) n.aadhaar = String(v.aadhaar).replace(/\s/g, ''); if (v.ckyc !== undefined) n.ckyc = String(v.ckyc).trim();
    n.bank = Object.assign({}, P.bank, v.account !== undefined ? { account: String(v.account).trim() } : {}, v.ifsc !== undefined ? { ifsc: String(v.ifsc).toUpperCase().trim() } : {}, v.bankName !== undefined ? { name: String(v.bankName).trim() } : {});
    n.father = `${P.father.split(' ')[0]} ${n.last}`; n.mother = `${P.mother.split(' ')[0]} ${n.last}`;
    n.spouse = Object.assign({}, P.spouse, { last: n.last, gender: n.gender === 'Male' ? 'Female' : 'Male', dobISO: `${+y + 1}-${pad(Math.max(1, (+m % 12) || 1))}-15` });
    n.nominee = Object.assign({}, P.nominee, { last: n.last, dobISO: `${+y - 25}-04-12`, email: `${P.nominee.first}.${n.last}.nominee@example.com`.toLowerCase(),
      phone: n.phone === P.nominee.phone ? '8' + digits(9) : P.nominee.phone });
    if (n.nominee.phone === n.phone) n.nominee.phone = '8' + digits(9);
    { const a = ADDR[n.pin]; if (a && (n.pin !== P.pin || v.address !== undefined)) { n.address1 = a[0]; n.address2 = a[1]; n.landmark = a[2]; } }   // the address follows the chosen PIN / city preset
    if (v.nomRel !== undefined && v.nomRel) {                                   // "Life assured – nominee" combination from the dialog
      const rel = String(v.nomRel); const parts = rel.split(/\s*–\s*/); const la = parts.length === 2 ? parts[0] : ''; const nom = parts.length === 2 ? parts[1] : rel;
      if (la === 'Brother') n.gender = 'Male'; if (la === 'Sister') n.gender = 'Female';
      const ng = /mother|sister|daughter|wife/i.test(nom) ? 'Female' : /father|brother|son|husband/i.test(nom) ? 'Male' : (n.gender === 'Male' ? 'Female' : 'Male');
      const nrel = nom === 'Spouse' ? (n.gender === 'Male' ? 'Wife' : 'Husband') : nom;
      const yy = +y; const ndob = /mother|father/i.test(nom) ? `${yy - 25}-04-12` : /son|daughter/i.test(nom) ? `${Math.min(yy + 22, new Date().getFullYear() - 18)}-04-12` : /spouse/i.test(nom) ? `${yy + 1}-05-15` : `${yy - 3}-04-12`;
      let nf = P.nominee.first; if (P.nominee.gender !== ng || /mother|father|spouse|son|daughter|brother|sister/i.test(P.nominee.relation) !== /mother|father|spouse|son|daughter|brother|sister/i.test(nom) || n.nomRel !== rel) { nf = rnd(FIRST[ng]); while (nf === n.first) nf = rnd(FIRST[ng]); }
      n.nominee = Object.assign({}, n.nominee, { first: nf, gender: ng, relation: nrel, relationKey: nom, dobISO: ndob, email: `${nf}.${n.last}.nominee@example.com`.toLowerCase() }); n.nomRel = rel;
      if (/spouse/i.test(nom)) n.marital = 'Married';
      n.spouse = Object.assign({}, n.spouse, { gender: n.gender === 'Male' ? 'Female' : 'Male', first: FIRST[n.gender === 'Male' ? 'Female' : 'Male'].includes(n.spouse.first) ? n.spouse.first : rnd(FIRST[n.gender === 'Male' ? 'Female' : 'Male']) }); }
    n.vehicle = Object.assign({}, P.vehicle, { reg: (RTO[n.state] || P.vehicle.reg.slice(0, 4)) + P.vehicle.reg.slice(4) });
    n.custom = true; P = n; S.set('profile', P); applyKycIdentity(); return P;
  }

  /* ---------------- helpers ---------------- */
  // Background tabs (v5.17.1): Chrome slows page timers down to once a minute when the tab is hidden – the journey would crawl. Timers run in a Web Worker instead
  // (worker timers are not throttled) and, while a journey runs, a near-silent looping sound keeps the tab out of the "intensive throttling" bucket.
  const WT = (() => { let w = null, seq = 0; const cbs = {}; let dead = false;
    const spawn = () => { try { const src = 'onmessage=function(e){var d=e.data;setTimeout(function(){postMessage(d.id)},d.ms)}'; const Wk = (typeof unsafeWindow !== 'undefined' && unsafeWindow.Worker) || window.Worker; const wk = new Wk(URL.createObjectURL(new Blob([src], { type: 'application/javascript' })));
      wk.onmessage = (e) => { const c = cbs[e.data]; delete cbs[e.data]; if (c) c.fn(); }; wk.onerror = () => { dead = true; w = null; fallback(); }; return wk; } catch (e) { dead = true; return null; } };
    const fallback = () => { Object.keys(cbs).forEach((id) => { const c = cbs[id]; delete cbs[id]; setTimeout(c.fn, Math.max(0, c.due - Date.now())); }); };   // the worker is gone (CSP, crash): pending timers continue on the page clock
    w = spawn();
    setInterval(() => { const now = Date.now(); const late = Object.keys(cbs).filter((id) => now - cbs[id].due > 4000); if (!late.length) return;   // the worker has not answered timers that were due 4 s ago: it is gone – fire them on the page clock and stop using it
      if (w) { try { w.terminate(); } catch (e) {} w = null; dead = true; try { HEALTH.note('worker timer stopped – page clock takes over'); } catch (e) {} }
      late.forEach((id) => { const c = cbs[id]; delete cbs[id]; try { c.fn(); } catch (e) {} }); }, 2000);
    return { ok: () => !!w, set(fn, ms) { ms = Math.max(0, ms | 0); if (!w) return setTimeout(fn, ms); const id = ++seq; cbs[id] = { fn, due: Date.now() + ms }; try { w.postMessage({ id, ms }); } catch (e) { delete cbs[id]; return setTimeout(fn, ms); } return -id; }, clear(h) { if (typeof h === 'number' && h < 0) delete cbs[-h]; else clearTimeout(h); } }; })();
  const SPEED = () => (S.get('speed', 'fast') === 'normal' ? 1 : 0.5);   // ⚡ fast (default): every wait inside the filler is shortened to 40 % – the page is still polled for readiness, so nothing is skipped
  const sleep = (ms) => new Promise((r) => WT.set(r, Math.max(16, Math.round(ms * SPEED()))));
  const uwait = (ms) => new Promise((r) => WT.set(r, ms));
  /* ---------------- supervisor (v5.20): every tick has a time budget, a hung step is cut off and the loop goes on; tick timings are kept for the diagnosis ---------------- */
  const HEALTH = { ticks: 0, slow: 0, hung: 0, lastMs: 0, maxMs: 0, log: [], stage: '', gen: 0, wait: '',
    note(msg) { this.log.push({ at: new Date().toISOString(), msg: String(msg).slice(0, 200), route: (location.hash || location.pathname).split('?')[0] }); if (this.log.length > 60) this.log.shift(); console.warn('[SB4] health:', msg); try { const H = S.get('health', []); H.push(this.log[this.log.length - 1]); S.set('health', H.slice(-120)); } catch (e) {} } };
  function withTimeout(promise, ms, label) {         // a step that does not finish in time is abandoned (the loop must never wait for ever on one await)
    let h; const to = new Promise((_, rej) => { h = setTimeout(() => rej(new Error('timeout: ' + label + ' > ' + Math.round(ms / 1000) + ' s')), ms); });
    return Promise.race([promise, to]).finally(() => clearTimeout(h));
  }                     // an UNscaled wait: the time a dropdown / overlay needs to render is the portal's, not the script's – fast mode never shortens it
  let awakeEl = null, rtc = null;
  async function rtcOn() {               // a loop-back WebRTC data channel inside the page: Chrome exempts pages with an active peer connection from intensive timer throttling (no sound, no click needed)
    if (rtc) return; try { const RPC = PW.RTCPeerConnection || window.RTCPeerConnection; if (!RPC) return; const a = new RPC(), b = new RPC(); rtc = { a, b, ping: null };
      a.onicecandidate = (e) => { if (e.candidate) b.addIceCandidate(e.candidate).catch(() => {}); }; b.onicecandidate = (e) => { if (e.candidate) a.addIceCandidate(e.candidate).catch(() => {}); };
      const dc = a.createDataChannel('sb4-keepalive'); rtc.dc = dc; dc.onopen = () => { rtc.ping = setInterval(() => { try { dc.send('p'); } catch (e) {} }, 15000); };
      const offer = await a.createOffer(); await a.setLocalDescription(offer); await b.setRemoteDescription(offer); const ans = await b.createAnswer(); await b.setLocalDescription(ans); await a.setRemoteDescription(ans);
    } catch (e) { try { if (rtc) { rtc.a.close(); rtc.b.close(); } } catch (x) {} rtc = null; }
  }
  function rtcOff() { if (!rtc) return; try { clearInterval(rtc.ping); rtc.a.close(); rtc.b.close(); } catch (e) {} rtc = null; }
  function keepAwake(on) {              // a looping 25 Hz tone at -50 dBFS (below hearing, above Chrome's silence threshold): an audible tab is not throttled or discarded
    try { if (!on) { rtcOff(); if (awakeEl) { awakeEl.pause(); awakeEl.remove(); awakeEl = null; } return; } if (S.get('keepAwake', true) === false) return; rtcOn(); if (awakeEl) return;
      const rate = 8000, secs = 2, n = rate * secs; const buf = new ArrayBuffer(44 + n * 2); const v = new DataView(buf); const str = (o, t) => { for (let i = 0; i < t.length; i++) v.setUint8(o + i, t.charCodeAt(i)); };
      str(0, 'RIFF'); v.setUint32(4, 36 + n * 2, true); str(8, 'WAVE'); str(12, 'fmt '); v.setUint32(16, 16, true); v.setUint16(20, 1, true); v.setUint16(22, 1, true); v.setUint32(24, rate, true); v.setUint32(28, rate * 2, true); v.setUint16(32, 2, true); v.setUint16(34, 16, true); str(36, 'data'); v.setUint32(40, n * 2, true);
      for (let i = 0; i < n; i++) v.setInt16(44 + i * 2, Math.round(Math.sin(2 * Math.PI * 25 * i / rate) * 100), true);
      const a = document.createElement('audio'); a.id = 'sb-awake'; a.loop = true; a.volume = 1; a.src = URL.createObjectURL(new Blob([buf], { type: 'audio/wav' })); a.style.display = 'none'; document.body.appendChild(a); awakeEl = a;
      a.play().catch(() => { /* autoplay blocked until a click – retried on the next user gesture */ a.dataset.blocked = '1'; });
    } catch (e) {}
  }
  document.addEventListener('pointerdown', () => { if (awakeEl && awakeEl.dataset.blocked) { awakeEl.dataset.blocked = ''; awakeEl.play().catch(() => (awakeEl.dataset.blocked = '1')); } }, true);
  const vis = (el) => !!(el && (el.offsetParent !== null || (el.getClientRects && el.getClientRects().length && getComputedStyle(el).visibility !== 'hidden')));
  const usable = (el) => vis(el) && !el.disabled && !el.readOnly;
  const Q = (s, root = document) => [...root.querySelectorAll(s)];
  const norm = (s) => String(s || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  const esc = (s) => String(s).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const OUR = '#sb-panel, #sb-dialog, #sb-picker, #sb-issues, #sb-banner, #sb-loader';
  const ours = (el) => !!el.closest(OUR);

  function setNative(el, v) {
    if (String(el.value) === String(v)) return;
    const proto = el.tagName === 'TEXTAREA' ? HTMLTextAreaElement.prototype : el.tagName === 'SELECT' ? HTMLSelectElement.prototype : HTMLInputElement.prototype;
    Object.getOwnPropertyDescriptor(proto, 'value').set.call(el, v);
    ['input', 'change', 'blur'].forEach((t) => el.dispatchEvent(new Event(t, { bubbles: true })));
  }
  let fillGen = 0; const staleFill = () => { if (filling && fillGen !== HEALTH.gen) throw new Error('stale fill abandoned'); };   // a fill the supervisor cut off stops at its next field instead of typing over the fresh one
  async function typeInto(el, text) {
    staleFill();
    el.focus(); setNative(el, '');
    for (const ch of String(text)) {
      el.dispatchEvent(new KeyboardEvent('keydown', { key: ch, bubbles: true }));
      Object.getOwnPropertyDescriptor(el.tagName === 'TEXTAREA' ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype, 'value').set.call(el, el.value + ch);
      el.dispatchEvent(new InputEvent('input', { bubbles: true, data: ch, inputType: 'insertText' }));
      el.dispatchEvent(new KeyboardEvent('keyup', { key: ch, bubbles: true }));
    }
    el.dispatchEvent(new Event('change', { bubbles: true }));
    const other = Q('input').find((i) => i !== el && vis(i) && !i.disabled && !['radio', 'checkbox', 'date', 'file'].includes(i.type) && !ours(i));
    if (other) other.focus(); else el.dispatchEvent(new Event('blur', { bubbles: true }));
  }
  const isFilterBox = (el) => {        // an input that filters a dropdown's option list (v5.18): never a field to fill – its "label" is whatever the neighbouring select shows
    try { if (el.type === 'search' || el.getAttribute('role') === 'searchbox' || /search|filter|type to|start typing/i.test(el.placeholder || '')) return true;
      if (el.closest('[role="listbox"], [role="menu"], .p-select-overlay, .p-dropdown-panel, .p-select-filter-container, .dropdown-menu, .select-dropdown, .select__menu, [class*="dropdown-panel"], [class*="dropdown-menu"], [class*="select-panel"], [class*="options-panel"], [class*="overlay-panel"], [class*="popover"], .vs__dropdown-menu, .ng-dropdown-panel, .multiselect-dropdown')) return true;
      const box = el.closest('div, section, ul'); const up = box && box.parentElement;
      for (let p = box, i = 0; p && i < 3; p = p.parentElement, i++) { const txt = (p.innerText || '').slice(0, 300); if (/no results? found|no data found|no options|no match/i.test(txt) && Q('li, [role="option"], .option, [class*="option"]', p).length < 30) return true; if (Q('li, [role="option"], [class*="option"]', p).length >= 2 && Q('input:not([type=hidden])', p).length === 1 && !Q('label', p).length) return true; }
      return false; } catch (e) { return false; }
  };
  function labelOf(el) {
    let t = '';
    if (el.id) { const l = document.querySelector(`label[for="${CSS.escape(el.id)}"]`); if (l) t = l.textContent; }
    if (!t) { const w = el.closest('label'); if (w) t = w.textContent; }
    if (!t && el.getAttribute('aria-labelledby')) { const l = document.getElementById(el.getAttribute('aria-labelledby').split(' ')[0]); if (l) t = l.textContent; }
    if (!t) {                                   // nearest ancestor that wraps only this control and has its own label
      const CTRL = 'input:not([type=hidden]), select, textarea, .p-select, .p-dropdown, .MuiSelect-select, .react-select__control, .vs__dropdown-toggle, .ng-select-container';
      let p = el.parentElement;
      for (let i = 0; i < 5 && p && !t; i++, p = p.parentElement) {
        const ctrls = Q(CTRL, p).filter((c) => !c.parentElement.closest('.p-select, .p-dropdown') && c.type !== 'radio');
        if (ctrls.length > 1 && el.type !== 'radio') break;
        const l = Q('label, legend, .form-label, .form-item-label, [class*="label"]:not(.p-select-label):not(.p-dropdown-label)', p).find((x) => !x.querySelector(CTRL) && x.textContent.trim() && !x.contains(el));
        if (l) t = l.textContent;
      }
    }
    if (!t) { let p = el; for (let i = 0; i < 4 && p && !t; i++) { const l = p.previousElementSibling; if (l && l.innerText && l.innerText.trim() && l.innerText.length < 90 && !l.querySelector('input,select,textarea,.p-select,.p-dropdown') && !/^(e\.?g\.?|ex\.?|example|please |invalid|required|this field)/i.test(l.innerText.trim()) && !/error|hint|help|invalid|danger|warning/i.test(l.className || '') && !/\d+\s*(years?|yrs|cr|lac|lakh)\b/i.test(l.innerText.trim().split('\n').pop())) { t = l.innerText; break; } p = p.parentElement; } }   // the control's own previous sibling first (<p>Pay For</p><div class=p-select>), then the wrappers'
    if (!t && el.type === 'radio') { const row = el.closest('.row, .d-flex, div'); if (row) t = row.textContent; }
    if (!t) t = el.placeholder || el.getAttribute('aria-label') || el.name || '';
    return t.replace(/\s+/g, ' ').trim().slice(0, 140);
  }
  const blockText = (el) => { let e = el; for (let i = 0; i < 12 && e; i++) { e = e.parentElement; if (e && /^(FIELDSET|SECTION)$/.test(e.tagName) || (e && /card|accordion|panel/.test(e.className || ''))) return e.innerText || ''; } return ''; };
  const HEAD = 'h1,h2,h3,h4,h5,h6,legend,.card-header,[class*="title"],[class*="heading"],[class*="header"]';
  function sectionTitle(el) {                       // closest heading that precedes el inside an ancestor
    let p = el.parentElement;
    for (let i = 0; i < 10 && p; i++, p = p.parentElement) {           // up to and including <body>: a heading can be the form's sibling
      const hs = Q(HEAD, p).filter((h) => !h.contains(el) && (h.compareDocumentPosition(el) & Node.DOCUMENT_POSITION_FOLLOWING) && h.innerText && h.innerText.trim().length < 80 && !h.querySelector('input,select'));
      if (hs.length) return hs[hs.length - 1].innerText.trim();
      if (p === document.body) break;
    }
    return '';
  }
  const inNominee = (el) => /nominee|appointee/i.test(sectionTitle(el)) || /nominee/i.test(blockText(el).slice(0, 120));
  const inSpouse = (el) => /spouse|wife|husband/i.test(sectionTitle(el));
  const inFamily = (el) => /family member|family details|family history|sibling|parent/i.test(sectionTitle(el));
  function radioKey(r) {        // group radios that use per-option names (genderMALE/genderFEMALE, ropYes/ropNo) – never strip a bare index digit (aliveOrDeceased1 ≠ aliveOrDeceased2)
    let n = r.name || (/[a-z]/i.test(r.id || '') ? r.id : '');      // a bare numeric id (661/662) is a Vue uid, not a group name
    if (!n) {                     // nameless radios (Vue "financed? YES/NO" tiles) – group by their container, identified by its position in the DOM
      let c = r.closest('[role="radiogroup"], fieldset, .radio-btn-grp, .radio-group, .form-group, .form-check-group') || r.parentElement;
      for (let i = 0; i < 6 && c && c !== document.body && c.querySelectorAll('input[type="radio"]').length < 2; i++) c = c.parentElement;   // climb until the container holds the whole group
      const path = []; let p = c; for (let i = 0; i < 4 && p && p !== document.body; i++) { path.unshift([...p.parentElement.children].indexOf(p)); p = p.parentElement; }
      return 'grp:' + path.join('.') + ':' + (c.innerText || '').replace(/\s+/g, ' ').trim().slice(0, 40);
    }
    const tails = [r.value, labelOf(r)].map((x) => String(x || '').replace(/[^a-z0-9]/gi, '')).filter((x) => x && x.length < 20 && /[a-z]/i.test(x));
    for (const t of tails) if (n.length > t.length && n.toLowerCase().endsWith(t.toLowerCase())) { n = n.slice(0, -t.length); break; }
    return n.replace(/[-_ ]?(yes|no|true|false)$/i, '').replace(/[-_ ]$/, '');
  }
  function matchText(opts, want) {
    const w = String(want || '').toLowerCase().trim(); if (!w) return null;
    return opts.find((x) => x.textContent.trim().toLowerCase() === w) || opts.find((x) => x.textContent.trim().toLowerCase().startsWith(w)) || opts.find((x) => x.textContent.trim().toLowerCase().includes(w)) || null;
  }

  /* ---------------- value maps ---------------- */
  const byName = () => {
    const m = {
      firstname: P.first, middlename: P.middle, lastname: P.last, fullname: `${P.first} ${P.last}`, name: `${P.first} ${P.last}`,
      dateofbirth: P.dobISO, dob: P.dobISO, annualincome: P.income, income: P.income,
      emailid: P.email, email: P.email, mobilenumber: P.phone, mobno: P.phone, mobnumber: P.phone, mobnum: P.phone, mobile: P.phone, phone: P.phone, phonenumber: P.phone, contactnumber: P.phone,
      zipcode: P.pin, pincode: P.pin, pin: P.pin, isportfolioheld: '500000',
      fathername: P.father, mothername: P.mother, placeofbirth: P.city.replace(/[^A-Za-z]/g, ''), place: P.city.replace(/[^A-Za-z]/g, ''), pannumber: P.pan, pan: P.pan, panno: P.pan,
      addressline1: P.address1, addressline2: P.address2, address: P.address1, landmark: P.landmark, city: P.city,
      q1806: String(P.heightCm), q3: String(P.weightKg), height: String(P.heightCm), weight: String(P.weightKg),
      ifsccode: P.bank.ifsc, ifsc: P.bank.ifsc, accountnumber: P.bank.account, micrcode: P.bank.micr, bankname: P.bank.name,
      acr34: 'Software Engineer', acr36: P.income, acr20: 'No', eianumber: '1000000000001', eia: '1000000000001',
      firstname1: P.nominee.first, lastname1: P.nominee.last, dateofbirth1: P.nominee.dobISO, percentageshare1: P.nominee.share,
      registrationnumber: P.vehicle.reg, regno: P.vehicle.reg, vehiclenumber: P.vehicle.reg, rtonumber: P.vehicle.reg,
      enginenumber: P.vehicle.engine, engineno: P.vehicle.engine, chassisnumber: P.vehicle.chassis, chassisno: P.vehicle.chassis,
    };
    return m;
  };
  const byLabel = () => ([
    [/percent|\(%\)|% of|share of|allocation/i, '100'],
    [/identification mark|identity mark|birth ?mark|distinguishing mark|\bmole\b/i, 'Mole on left hand'],
    [/\beia\b|e-?insurance account|eia number/i, '1000000000001'],
    [/purpose of (your )?stay|purpose of (your )?(current )?visit/i, 'Employment'], [/duration of (your )?stay/i, '24'], [/visa status|visa type/i, 'Work Visa'], [/\btin\b|tax identification/i, 'TIN' + digits(9)], [/date of issue|issue date/i, ''], [/place of issue/i, P.city], [/passport number|passport no/i, 'M1234567'], [/(identity|id|address|age) proof (number|no)|document (number|no)|proof number/i, 'M1234567'], [/university|institution/i, 'NA'], [/course/i, 'NA'], [/employer.*abroad|foreign employer/i, 'Acme Global Inc'], [/last\s*4\s*digit/i, '7058'], [/payer.*name|payor.*name|premium payer/i, `${P.first} ${P.last}`], [/\brank\b/i, 'Officer'], [/posting/i, P.city], [/nature of duties|duties/i, 'Administrative'], [/maiden/i, P.last], [/spouse.*name|husband.*name|wife.*name/i, `${P.spouse.first} ${P.last}`], [/nominee.*name|appointee.*name/i, `${P.nominee.first} ${P.last}`], [/first\s*name/i, P.first], [/middle\s*name/i, P.middle], [/last\s*name|surname/i, P.last], [/full\s*name|^name\b|proposer name|insured name/i, `${P.first} ${P.last}`],
    [/phone|mobile|contact\s*no/i, P.phone], [/annual\s*income|income/i, P.income], [/pin\s*code|pincode|zip/i, P.pin],
    [/e-?mail/i, P.email], [/weight/i, String(P.weightKg)], [/height.*cm|height/i, String(P.heightCm)],
    [/ifsc/i, P.bank.ifsc], [/account\s*number|a\/c/i, P.bank.account], [/micr/i, P.bank.micr], [/bank\s*name/i, P.bank.name],
    [/\bgst(in)?\b/i, gstin(P.pan)], [/policy (id|no\b|number)/i, 'POL' + digits(8)], [/registration|reg\.?\s*no|vehicle\s*number|car\s*number|bike\s*number/i, P.vehicle.reg], [/engine/i, P.vehicle.engine], [/chassis/i, P.vehicle.chassis],
    [/nature of work|designation/i, 'Software Engineer'], [/employer|company name|organi[sz]ation/i, 'Acme Technologies Pvt Ltd'],
    [/applied.*insurance|other insur/i, 'No'], [/\bpan\b/i, P.pan], [/ckyc/i, P.ckyc || '10001234567890'], [/aadha?a?r/i, AADHAAR_RAW()], [/gst/i, ''],
    [/address\s*(line)?\s*1|house|flat|building/i, P.address1], [/address/i, P.address2], [/landmark|area|locality|street/i, P.landmark], [/city|district/i, P.city],
    [/place/i, P.city.replace(/[^A-Za-z]/g, '')], [/(father|spouse).*(first|given)/i, (P.father || 'Suresh').split(' ')[0]], [/(father|spouse).*(last|sur)/i, (P.father || 'Suresh Kumar').split(' ').slice(-1)[0]], [/(mother).*(first|given)/i, (P.mother || 'Sunita').split(' ')[0]], [/(mother).*(last|sur)/i, (P.mother || 'Sunita Devi').split(' ').slice(-1)[0]], [/father/i, P.father], [/mother/i, P.mother], [/percentage|share/i, '100'], [/remark|detail|describ|specify|reason/i, 'NA'],
    [/age at death/i, '70'], [/age of (family|the) member|family member.*age|current age of/i, String(Math.min(99, P.age + 28))], [/^age\b|current age/i, String(P.age)], [/holder.*name|account.*name|name.*holder/i, `${P.first} ${P.middle} ${P.last}`.replace(/\s+/g, ' ')], [/branch/i, 'MG Road Branch'],
    [/rm emp(loyee)? code|employee code|emp code|rm code|agent code|sp code|advisor code|partner code|branch code|lg code|lc code|fls code|sm code/i, 'EMP12345'], [/aadh?a+r/i, '999941057058'], [/passport/i, 'M1234567'], [/voter/i, 'ABC1234567'], [/driving|licen/i, 'MH0120200012345'], [/ckyc/i, '10001234567890'],
    [/sum\s*(assured|insured)|cover\s*amount|loan\s*amount/i, '1000000'], [/premium/i, '25000'], [/tenure|term/i, '10'], [/salary/i, '100000'],
  ]);
  const selectWants = () => ([
    [/number of nominee/i, '1'], [/industry/i, ['Information Technology', 'IT', 'Software', 'Services', 'Finance', 'Others']], [/organi[sz]ation type|employer type|company type|type of (organi[sz]ation|employer|company)/i, ['Private Limited', 'Private', 'Pvt', 'Proprietorship', 'Public Limited', 'Limited', 'MNC', 'Government', 'PSU']], [/relation/i, [P.relation, P.nominee.relation]], [/gender/i, P.gender], [/title|salutation/i, P.gender === 'Male' ? 'Mr' : 'Ms'],
    [/qualification|education/i, P.education], [/occupation|profession/i, [P.occupation, 'Salaried', 'Employee', 'Service', 'Private']], [/tobacco|smok/i, P.tobacco],
    [/resident|residen(t|cy) status|residential/i, ['Resident Indian', 'Indian Resident', 'Resident', 'Indian', 'India']], [/marital/i, P.marital], [/nationality/i, ['Indian', 'India']], [/country/i, 'India'],
    [/account\s*type/i, P.bank.type], [/politically/i, ['No', 'None']], [/income\s*(source\s*)?type|source of income/i, 'Salaried'], [/income proof/i, ['Salary', 'ITR', 'Yes']],
    [/life\s*stage/i, ['Married', 'Single']], [/goal/i, ['Protection', 'Savings']], [/risk/i, ['Balanced', 'Moderate']],
    [/assets.*home/i, ['Owned', 'Yes']], [/assets.*vehicle/i, ['4 Wheeler', 'Yes']], [/^place/i, P.state], [/state/i, P.state], [/city|district/i, P.city],
    [/know the life/i, ['Relative', 'Friend']], [/how long/i, ['6-12', '1-3', '5']], [/purpose|objective/i, ['Savings', 'Retirement']],
    [/family member alive|is .* alive|alive\?/i, ['Alive', 'Yes', 'Living']], [/number of sibling|no\.? of sibling|siblings?$/i, ['0', 'None', '1']],   // family history: everyone alive, no siblings – no age-at-death questions
    [/source of fund/i, ['Salary', 'Business Income']], [/repository/i, 'CAMS'], [/height.*(feet|ft)\b|^feet|\bfeet\b/i, ['5ft 06', '5 ft 06', '5 feet 06', '5ft 6', '5 ft 6', '5.6', '5']], [/height.*inch|\binch/i, ['6', '06']], [/height/i, ['5 feet 06', '5 ft', '5', '165']],
    [/proof of identity|identity proof|\bid proof\b|photo id/i, ['PAN', 'Aadhaar', 'Passport', 'Voter', 'Driving']], [/proof of address|address proof|age proof/i, ['Aadhaar', 'Passport', 'Voter', 'Driving', 'Masked']],   // Aadhaar / PAN come from the real-layout templates (pass the portal's Aadhaar OCR) [/year|manufactur/i, P.vehicle.year], [/fuel/i, 'Petrol'],
    [/previous insurer|insurer/i, ['ICICI', 'HDFC', 'Bajaj']], [/ncb|no claim/i, ['20', '0']],
  ]);
  function gstin(pan) {                                   // 27 + PAN + 1Z + check digit (the official mod-36 checksum)
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'; const base = '27' + String(pan || 'ABCPX1234F').toUpperCase() + '1Z'; let sum = 0;
    for (let i = 0; i < base.length; i++) { const v = chars.indexOf(base[i]); const f = (i % 2 === 0) ? 1 : 2; const p = v * f; sum += Math.floor(p / 36) + (p % 36); }
    return base + chars[(36 - (sum % 36)) % 36];
  }
  const yesLabel = /same.*address|photo.*submitted|physical.*copy|agree|alive|good health|i confirm/i;
  const NO_Q = /politically exposed|\bpep\b|disab|convict|criminal|hazardous|tobacco|alcohol|smok|pregnan|surgery|hospitali|diabet|engaged in any|mentioned industr|involved in any|associated with any|scrap deal|stock broking|jewell|import\/export|adverse|investigat|prosecut|bankrupt|insolven|refused|rejected|pending (claim|proposal)|declined|postponed|existing (policy|insurance)|policies .*(held|applied)|insurance.*(held|applied) with|mediclaim|extra premium|reinstatement|lost more than|family members?.*diagnosed|any claim under/i;   // risk questions: always No, even when the portal pre-selected Yes
  const DECL_Q = /hereby declare|good health|free from (any )?disease|not suffering|i confirm|i agree|i understand|\bghd\b/i;
  const radioLabel = (r, n, group) => { const strip = (t) => { t = String(t || '').replace(/\s+/g, ' ').trim(); (group || []).forEach((x) => { const l = (labelOf(x) || '').trim(); if (l && l.length < 40) t = t.replace(new RegExp('\\s*' + esc(l) + '\\s*$', 'i'), '').replace(new RegExp('\\s*' + esc(l) + '\\s*(?=[A-Z(]|$)', 'g'), ' ').trim(); }); return t.replace(/\s+/g, ' ').replace(/[\s:*]+$/, '').trim(); };
    const g = strip(labelOf(r.closest('fieldset, [role=radiogroup], .form-group, .mb-3') || r.parentElement)); if (g.length > 5 && !/^(yes|no|y|n|true|false)$/i.test(g)) return g.slice(0, 120); const q = strip(qTextOf(r)); return (q.length > 3 ? q.slice(0, 120) : '') || n; };   // the question a radio group answers (workbook key) without the option captions   // the question a radio group answers (workbook key)
  const lastOpts = new WeakMap(); const liveOptsText = (el) => { try { return lastOpts.get(el) || []; } catch (e) { return []; } };   // options a custom dropdown showed when the script last opened it
  function qTextOf(r) {        // the question a radio belongs to: the nearest ancestor whose text is more than the Yes / No labels (embedded portals wrap each radio in its own .form-group, the declaration sits in a <p> two levels up)
    let el = r.closest('fieldset, [role=radiogroup], .form-group, .mb-3, .question, [class*="question"]') || r.parentElement?.parentElement; let n = 0;
    while (el && el !== document.body && n++ < 6) { const t = (el.innerText || '').replace(/\s+/g, ' ').trim(); if (t.length > 30 && !/^(yes|no|y|n)(\s+(yes|no|y|n))*$/i.test(t.replace(/[^a-z\s]/gi, '').trim())) return t.slice(0, 400); el = el.parentElement; }
    return ((r.closest('.form-group, .mb-3, fieldset, [role=radiogroup]') || r.parentElement?.parentElement)?.innerText || '').replace(/\s+/g, ' ').slice(0, 400);
  }   // a declaration-type question is answered Yes (every other medical question stays No)

  /* ---------------- dropdown adapters (PrimeVue, native, MUI, react-select, vue-select, ng-select, generic listbox) ---------------- */
  const noOptionsAt = new Map(); const noOptions = { has: (k) => noOptionsAt.has(k) && Date.now() - noOptionsAt.get(k) < 8000, add: (k) => noOptionsAt.set(k, Date.now()) };
  const OPTSEL = '.p-select-overlay li[role="option"], .p-dropdown-panel li[role="option"], .p-dropdown-items li, [role="listbox"] [role="option"], .MuiAutocomplete-option, .react-select__option, [class*="-option"][id*="react-select"], .vs__dropdown-option, .ng-option, .multiselect__element, .multiselect-dropdown .multiselect-option, .dropdown-menu.show .dropdown-item, ul.dropdown-menu.show li';
  const liveOpts = () => Q(OPTSEL).filter((x) => vis(x) && !/no available options|no results|no options|not found/i.test(x.textContent) && x.getAttribute('aria-disabled') !== 'true' && !x.classList.contains('p-disabled'));
  function customSelects() {
    return Q('.p-select, .p-dropdown, [role="combobox"]:not(input), input[role="combobox"]:not([aria-autocomplete="both"]):not(.p-datepicker-input):not([name*="date" i]), .MuiSelect-select, .react-select__control, div[class*="-control"]:has([class*="indicatorContainer"]), .vs__dropdown-toggle, .ng-select-container, .multiselect')
      .filter((el) => vis(el) && !ours(el) && !(el.parentElement && el.parentElement.closest('.p-select, .p-dropdown, .MuiInputBase-root .MuiSelect-select, .react-select__control, .ng-select-container, .vs__dropdown-toggle, div[class*="-control"]:has([class*="indicatorContainer"])')));   // the search input inside a react-select control is not a second dropdown
  }
  function isEmptyCustom(el) {
    if (el.tagName === 'INPUT') return !el.value || /^(select|choose)\b/i.test(el.value);
    if (/\bmultiselect\b/.test(el.className) && (el.querySelector('.multiselect-wrapper') || el.querySelector('.multiselect-tags, .multiselect-dropdown'))) return !el.querySelector('.multiselect-tag, .multiselect-single-label, .multiselect-multiple-label');   // @vueform/multiselect (with or without the wrapper div)
    if (el.matches('.p-select, .p-dropdown')) { const lt = ((el.querySelector('.p-select-label, .p-dropdown-label') || {}).textContent || '').trim(); return !!el.querySelector('.p-placeholder') || !lt || /^(select|choose|--|please select)\b/i.test(lt); }
    if (el.matches('.MuiSelect-select')) return !el.textContent.trim() || /​/.test(el.textContent);
    if (el.matches('.react-select__control, div[class*="-control"]')) return !!el.querySelector('[class*="placeholder"]');
    if (el.matches('.vs__dropdown-toggle')) return !el.querySelector('.vs__selected');
    if (el.matches('.ng-select-container')) return !!el.querySelector('.ng-placeholder') && !el.querySelector('.ng-value');
    if (el.matches('.multiselect')) return !!el.querySelector('.multiselect__placeholder');
    if (el.matches('[data-slot="select-trigger"], button[role="combobox"]')) return el.hasAttribute('data-placeholder') || !el.textContent.replace(/[▼▾⌄\s]/g, '') || /^\s*(select|choose|please select|--)\b/i.test(el.textContent.trim());   // Base UI / Radix Select: data-placeholder until a value is chosen, or placeholder text
    return !el.textContent.trim() || /^\s*(select|choose|please select|--)\b/i.test(el.textContent.trim());
  }
  function isDisabledCustom(el) { return el.classList.contains('p-disabled') || el.getAttribute('aria-disabled') === 'true' || el.classList.contains('Mui-disabled') || /(^|\s)(is-disabled|disabled)(\s|$)/.test(el.className); }
  async function pointerTap(el) {                  // a real-looking pointer press for headless-UI libraries (Base UI, Radix) that ignore a bare click()
    try { el.scrollIntoView({ block: 'nearest' }); } catch (e) {} await uwait(120);
    const r = el.getBoundingClientRect(); const x = r.left + Math.min(12, r.width / 2), y = r.top + Math.min(12, r.height / 2);
    const at = document.elementFromPoint(x, y); const tgt = at && el.contains(at) ? at : el;      // dispatch on the element that really sits under the pointer (the option's inner span)
    const o = { bubbles: true, cancelable: true, composed: true, clientX: x, clientY: y, button: 0, buttons: 1, pointerId: 1, pointerType: 'mouse', isPrimary: true };
    tgt.dispatchEvent(new PointerEvent('pointerdown', o)); tgt.dispatchEvent(new MouseEvent('mousedown', o)); await uwait(80);
    tgt.dispatchEvent(new PointerEvent('pointerup', Object.assign({}, o, { buttons: 0 }))); tgt.dispatchEvent(new MouseEvent('mouseup', Object.assign({}, o, { buttons: 0 }))); tgt.dispatchEvent(new MouseEvent('click', Object.assign({}, o, { buttons: 0 }))); await uwait(350);
  }
  async function openCustom(el) {
    const target = el.querySelector('.multiselect-wrapper') || el;        // @vueform/multiselect: the focusable wrapper opens the list
    if (target !== el || el.matches('.multiselect')) target.focus();     // @vueform/multiselect opens on focus
    if (el.matches('[data-slot="select-trigger"], [role="combobox"][aria-haspopup="listbox"]')) {     // Base UI / Radix Select: needs the full pointer sequence (pointerdown → mouseup → click)
      await pointerTap(el); if (liveOpts().length) return; }
    target.dispatchEvent(new MouseEvent('mousedown', { bubbles: true })); target.click(); await uwait(350);
    if (!liveOpts().length) { target.dispatchEvent(new MouseEvent('mouseup', { bubbles: true })); await uwait(250); }
  }
  async function pickCustom(el, wants) {
    staleFill();
    const key = el.id || labelOf(el) || el; if (noOptions.has(key)) return null;
    await openCustom(el);
    const real = (l) => l.filter((x) => x.textContent.trim());        // placeholder rows with no text are never a choice
    let opts = real(liveOpts());
    for (let i = 0; i < 5 && !opts.length; i++) { await uwait(300); opts = real(liveOpts()); }          // PrimeVue renders the overlay a moment after the click
    if (!opts.length) { await openCustom(el); await uwait(400); opts = real(liveOpts()); }          // one re-open: the first click sometimes only focuses the control
    if (!opts.length) { console.log('[SB4] no options opened for', labelOf(el), el.id, 'expanded=' + el.getAttribute('aria-expanded')); noOptions.add(key); closeOverlays(); return null; }
    let o = null; for (const w of [].concat(wants || [])) { o = matchText(opts.filter((x) => !/j\s*&\s*k|jammu/i.test(x.textContent)), w) || matchText(opts, w); if (o) break; }
    if (!o && wants && opts.length >= 8) {                       // long (virtual-scrolled / filterable) list: filter or scroll until the wanted option is rendered
      const overlay = opts[0].closest('.p-select-overlay, .p-dropdown-panel, .p-overlay') || opts[0].closest('[class*="overlay"], [class*="panel"], [class*="menu"]') || opts[0].closest('[role="listbox"]') || opts[0].parentElement;
      const filt = overlay && Q('input', overlay).find((i) => vis(i) && !ours(i));
      const wl = [].concat(wants).map(String);
      if (filt) {
        const all = opts; const probes = (w) => [...new Set([w.slice(0, 5), (w.match(/^[A-Za-z0-9]+/) || [w.slice(0, 3)])[0], w.slice(0, 2)])].filter(Boolean);   // "5 feet 06" → "5 fee", "5"; "Afghanistan" → "Afgha", "Afghanistan", "Af"
        for (const w of wl) { for (const p of probes(w)) { setNative(filt, p); await uwait(450); opts = real(liveOpts()); o = matchText(opts, w); if (o) break; } if (o) break; }
        if (!o) { setNative(filt, ''); await uwait(400); opts = real(liveOpts()); if (!opts.length) opts = all; }     // nothing matched: clear the filter so the full list is back for the fallback pick
      }
      else { const sc = overlay && (overlay.querySelector('.p-virtualscroller, .p-select-list-container, .p-dropdown-items-wrapper, [class*="scroll"]') || overlay); let last = -1;
        for (let i = 0; i < 40 && sc && !o; i++) { sc.scrollTop += Math.max(120, sc.clientHeight * 0.8); await uwait(160); opts = real(liveOpts()); for (const w of wl) { o = matchText(opts, w); if (o) break; } if (sc.scrollTop === last) break; last = sc.scrollTop; }
        if (!o) { sc.scrollTop = 0; await uwait(200); opts = real(liveOpts()); } }
    }
    try { lastOpts.set(el, opts.map((x) => x.textContent.trim()).filter(Boolean).slice(0, 40)); } catch (e) {}   // the options seen (for the workbook)
    const AVOID = /^\s*(select|choose|--)|\bnri\b|non.?resident|foreign|overseas|\bpio\b|\boci\b|others?$|not applicable|^n\/?a$|j\s*&\s*k|jammu|\b(crpf|bsf|cisf|itbp|army|navy|air ?force|police|defen[cs]e|military|paramilitary|armed)\b/i;   // never the armed-forces / police options: they open a page of posting / rank / combat questions
    if (!o) o = opts.find((x) => !AVOID.test(x.textContent.trim())) || opts.find((x) => !/^\s*(select|choose|--)/i.test(x.textContent)) || opts[0];
    if (!o) { closeOverlays(); return null; }
    o.scrollIntoView({ block: 'nearest' }); if (o.closest('[id*="base-ui"], [data-slot="select-content"], [data-radix-popper-content-wrapper]')) { await uwait(150); o.click(); await uwait(400); if (liveOpts().includes(o) && vis(o)) { await pointerTap(o); await uwait(300); } } else { o.dispatchEvent(new MouseEvent('mousedown', { bubbles: true })); o.click(); } await uwait(250);
    if (el.matches && el.matches('.multiselect')) { await uwait(250); for (const tg of Q('.multiselect-tag', el).slice(1)) { (tg.querySelector('.multiselect-tag-remove, [class*="remove"]') || tg).click(); await uwait(120); }   // one value only: drop any extra tags
      closeOverlays(); try { el.blur(); (el.querySelector('.multiselect-wrapper') || el).blur(); } catch (e) {} await uwait(150); }   // multiselect lists stay open after a pick – one value is enough
    return o.textContent.trim();
  }
  function closeOverlays() {
    const esc = () => new KeyboardEvent('keydown', { key: 'Escape', code: 'Escape', keyCode: 27, bubbles: true });
    [document.activeElement, ...Q('.p-datepicker-input, .p-datepicker input, input[aria-expanded="true"]')].filter(Boolean).forEach((e) => e.dispatchEvent(esc()));
    document.dispatchEvent(esc());
    // click empty page space (never a heading/link – on some portals the first heading is a "Back" control)
    const x = Math.max(2, innerWidth - 6), y = Math.max(2, innerHeight - 6); let spot = document.elementFromPoint(x, y);
    if (!spot || spot.closest('a, button, input, select, textarea, label, [role=button], [onclick], #sb-panel') || ours(spot)) spot = document.body;
    ['mousedown', 'mouseup', 'click'].forEach((t) => spot.dispatchEvent(new MouseEvent(t, { bubbles: true, clientX: x, clientY: y })));
  }

  /* ---------------- photo for uploads ---------------- */
  // Test KYC documents, drawn to look like the real document type so OCR-based KYC reads name / number / DOB from them
  // (clearly marked "SPECIMEN – TEST" so nobody can mistake them for real documents). Type is taken from the field label.
  const AADHAAR_RAW = () => String((P && P.aadhaar) || '999941057058').replace(/\D/g, '').slice(0, 12); const AADHAAR_NO = () => AADHAAR_RAW().replace(/(\d{4})(?=\d)/g, '$1 ');
  function docKind(title) { const s = String(title || '').toLowerCase(); const head = s.slice(0, 40);
    if (/aadh?a+r|uid\b|uidai/.test(head)) return /back|rear|address side/.test(head) ? 'aadhaar-back' : 'aadhaar'; if (/\bpan\b|permanent account/.test(head)) return 'pan';   // the chosen document type comes first
    if (/photo|selfie|picture|image of|passport size/.test(s) && !/proof|card|aadh|\bpan\b|no flash/.test(s)) return 'photo'; if (/aadh?a+r|uid\b|uidai/.test(s)) return /back|rear|address side/.test(s) ? 'aadhaar-back' : 'aadhaar';
    if (/\bpan\b|permanent account/.test(s)) return 'pan'; if (/cheque|check leaf|bank|passbook|statement/.test(s)) return 'cheque'; if (/passport/.test(s)) return 'passport'; if (/driving|licen/.test(s)) return 'dl'; if (/voter|epic/.test(s)) return 'voter';
    if (/salary|itr|income|form ?16|payslip/.test(s)) return 'income'; if (/signature|sign\b/.test(s)) return 'signature'; if (/address/.test(s)) return 'aadhaar'; if (/identity|id proof|poi/.test(s)) return 'pan'; return 'doc'; }
  // Real-layout templates: the public CC BY-SA "computer rendered sample" cards on Wikimedia Commons (placeholder data only), fetched once in the
  // browser, cached, and filled with the test person's details – an OCR sees the genuine Aadhaar / PAN layout instead of a drawing.
  const TEMPLATES = {
    aadhaar: { url: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/A_sample_of_Aadhaar_card.jpg', w: 400, h: 244, s: 3 },
    pan: { url: 'https://upload.wikimedia.org/wikipedia/commons/3/31/A_sample_of_Permanent_Account_Number_%28PAN%29_Card.jpg', w: 509, h: 314, s: 2 },
  };
  const tplCache = {};
  async function templateImage(key) {
    if (tplCache[key]) return tplCache[key];
    const tp = TEMPLATES[key]; let dataUrl = S.get('tpl_' + key, '');
    if (!dataUrl) {
      let blob = null;
      try { const r = await fetch(tp.url, { mode: 'cors' }); if (r.ok) blob = await r.blob(); } catch (e) {}
      if (!blob && typeof GM_xmlhttpRequest === 'function') blob = await new Promise((res) => { try { GM_xmlhttpRequest({ method: 'GET', url: tp.url, responseType: 'blob', onload: (x) => res(x.response), onerror: () => res(null), ontimeout: () => res(null), timeout: 15000 }); } catch (e) { res(null); } });
      if (!blob) return null;
      dataUrl = await new Promise((res) => { const fr = new FileReader(); fr.onload = () => res(fr.result); fr.onerror = () => res(''); fr.readAsDataURL(blob); });
      if (!dataUrl) return null; try { S.set('tpl_' + key, dataUrl); } catch (e) {}
    }
    const img = await new Promise((res) => { const i = new Image(); i.onload = () => res(i); i.onerror = () => res(null); i.src = dataUrl; });
    if (img) tplCache[key] = img; return img;
  }
  async function makeFromTemplate(kind) {
    const key = kind === 'pan' ? 'pan' : kind === 'aadhaar' ? 'aadhaar' : null; if (!key) return null;
    const img = await templateImage(key); if (!img) return null;
    const tp = TEMPLATES[key], s = tp.s; const extra = key === 'aadhaar' ? 46 : 0;
    const c = document.createElement('canvas'); c.width = tp.w * s; c.height = (tp.h + extra) * s; const g = c.getContext('2d');
    g.fillStyle = '#fff'; g.fillRect(0, 0, c.width, c.height); g.drawImage(img, 0, 0, tp.w * s, tp.h * s);
    const cover = (x, y, w, h, a) => { g.fillStyle = `rgba(255,255,255,${a || 1})`; g.fillRect(x * s, y * s, w * s, h * s); };
    const T = (str, x, y, size, bold, color) => { g.fillStyle = color || '#111'; g.font = `${bold ? 'bold ' : ''}${size * s}px Arial, sans-serif`; g.fillText(str, x * s, y * s); };
    const name = `${P.first} ${P.middle} ${P.last}`.replace(/\s+/g, ' ').trim(); const father = P.father || `Suresh ${P.last}`;
    if (key === 'aadhaar') {
      cover(80, 122, 132, 66); T('Name', 85, 133, 9.5, false, '#555'); T(name, 85, 146, 9.5, true); T('DOB / ' + P.dobDMY.replace(/-/g, '/'), 85, 162, 9.5, true); T('Sex / ' + P.gender.toUpperCase(), 85, 178, 9.5, true);
      cover(214, 122, 190, 84); T('Address', 226, 135, 11, false, '#555');
      [`S/O ${father}, ${P.address1}`, `${P.address2 || ''}${P.landmark ? ', ' + P.landmark : ''}`, `${P.city}, ${P.state} - ${P.pin}`].forEach((l, i) => T(l, 226, 150 + i * 13, 8.3, true));
      g.fillStyle = '#d97706'; g.fillRect(0, tp.h * s, tp.w * s, 2 * s); T(AADHAAR_NO(), 120, tp.h + 28, 24, true, '#111');
      T('Specimen for testing', 300, tp.h + 42, 5, false, '#bbb');
    } else {
      cover(112, 112, 300, 24, 0.92); T(name.toUpperCase(), 115, 129, 11.5, true); cover(118, 152, 290, 24, 0.92); T(father.toUpperCase(), 121, 169, 11.5, true);
      cover(118, 199, 230, 24, 0.92); T(P.dobDMY.replace(/-/g, '/'), 121, 216, 11.5, true); cover(116, 235, 220, 24, 0.92); T(P.pan, 119, 252, 12.5, true);
      T('Specimen for testing', 400, 308, 5, false, '#eee');
    }
    return fitJpg(c);
  }
  const DOC_VARIANTS = ['default', 'smaller JPG (60%)', 'PNG', 'PDF', 'other proof type', 'plain drawn card'];
  async function adaptDoc(file, variant, what) {          // re-encode the specimen to answer an upload complaint: 1 smaller, 2 PNG, 3 PDF, 4 same picture (other type picked), 5 the plain drawn card
    if (variant === 3) return new File([makePdf(what)], 'kyc-document.pdf', { type: 'application/pdf' });
    if (variant === 5) { const b = await makeJpg('', true); return new File([b], 'document.jpg', { type: 'image/jpeg' }); }
    const url = URL.createObjectURL(file); const img = await new Promise((res, rej) => { const i = new Image(); i.onload = () => res(i); i.onerror = rej; i.src = url; }); URL.revokeObjectURL(url);
    const sc = variant === 1 ? 0.6 : 1; const c = document.createElement('canvas'); c.width = Math.round(img.width * sc); c.height = Math.round(img.height * sc); c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
    const type = variant === 2 ? 'image/png' : 'image/jpeg'; const blob = await new Promise((res) => c.toBlob(res, type, variant === 1 ? 0.6 : 0.9));
    return new File([blob], file.name.replace(/\.\w+$/, '') + (variant === 2 ? '.png' : '.jpg'), { type });
  }
  async function makeJpg(title, forceDoc) {
    const kind = forceDoc === true && !title ? 'doc' : docKind(title);
    if (kind === 'aadhaar' || kind === 'pan') { try { const b = await makeFromTemplate(kind); if (b) return b; } catch (e) { console.log('[SB4] template failed', e.message); } }
    const photo = kind === 'photo'; const W = photo ? 360 : 860, H = photo ? 480 : 540;
    const c = document.createElement('canvas'); c.width = W; c.height = H; const g = c.getContext('2d');
    const noise = (base, amp) => { const img = g.createImageData(W, H); for (let i = 0; i < img.data.length; i += 4) { const v = base + Math.floor(Math.random() * amp); img.data[i] = v; img.data[i + 1] = v - 6; img.data[i + 2] = v + 4; img.data[i + 3] = 255; } g.putImageData(img, 0, 0); };
    const name = `${P.first} ${P.middle} ${P.last}`.replace(/\s+/g, ' ').trim(); const father = P.father || `Suresh ${P.last}`;
    const T = (s, x, y, size, color, bold) => { g.fillStyle = color || '#111'; g.font = `${bold ? 'bold ' : ''}${size}px Arial, sans-serif`; g.fillText(s, x, y); };
    const face = (x, y, w, h) => { g.fillStyle = '#d9c4b0'; g.fillRect(x, y, w, h); g.fillStyle = '#8a6a52'; g.beginPath(); g.arc(x + w / 2, y + h * 0.42, w * 0.28, 0, Math.PI * 2); g.fill(); g.fillRect(x + w * 0.2, y + h * 0.66, w * 0.6, h * 0.34); };
    const specimen = () => { g.save(); g.globalAlpha = 0.18; g.translate(W / 2, H / 2); g.rotate(-0.35); T('SPECIMEN – TEST ONLY', -300, 20, 56, '#b91c1c', true); g.restore(); };
    if (photo) { noise(190, 50); g.fillStyle = 'rgba(203,213,225,.55)'; g.fillRect(0, 0, W, H); face(60, 60, 240, 330); }
    else if (kind === 'aadhaar') { g.fillStyle = '#fff'; g.fillRect(0, 0, W, H); g.fillStyle = '#f97316'; g.fillRect(0, 0, W, 14); g.fillStyle = '#16a34a'; g.fillRect(0, H - 14, W, 14);
      // emblem placeholder (circle + pillars) and tricolour band, as on the real card – the OCR looks for the card layout and the 12-digit number
      g.fillStyle = '#7f5c3b'; g.beginPath(); g.arc(80, 70, 30, 0, Math.PI * 2); g.fill(); g.fillStyle = '#fff'; g.fillRect(66, 52, 8, 36); g.fillRect(90, 52, 8, 36);
      T('भारत सरकार', 150, 60, 22, '#333'); T('GOVERNMENT OF INDIA', 150, 90, 24, '#222', true);
      g.fillStyle = '#b91c1c'; g.beginPath(); g.arc(760, 70, 34, 0, Math.PI * 2); g.fill(); g.fillStyle = '#fbbf24'; g.beginPath(); g.arc(760, 70, 16, 0, Math.PI * 2); g.fill();
      face(40, 130, 180, 220);
      T(name, 250, 175, 30, '#111', true); T(`जन्म तिथि/DOB: ${P.dobDMY.replace(/-/g, '/')}`, 250, 220, 26, '#111'); T(`${P.gender === 'Female' ? 'महिला / FEMALE' : 'पुरुष / MALE'}`, 250, 262, 26, '#111');
      g.fillStyle = '#111'; for (let i = 0; i < 12; i++) for (let j = 0; j < 12; j++) if ((i * 7 + j * 13 + i * j) % 3 === 0) g.fillRect(690 + i * 10, 150 + j * 10, 9, 9);   // QR-like block
      T(AADHAAR_NO(), 250, 360, 56, '#111', true);
      g.fillStyle = '#b91c1c'; g.fillRect(0, 395, W, 3); T('आधार - आम आदमी का अधिकार', 250, 440, 24, '#b91c1c', true); T('Mera Aadhaar, Meri Pehchan', 250, 475, 20, '#444');
      g.save(); g.globalAlpha = 0.12; g.translate(W / 2, H / 2); g.rotate(-0.35); T('SPECIMEN – TEST ONLY', -280, 20, 48, '#b91c1c', true); g.restore(); }
    else if (kind === 'aadhaar-back') { noise(236, 18); g.fillStyle = '#fff'; g.fillRect(20, 20, W - 40, H - 40); g.fillStyle = '#f97316'; g.fillRect(20, 20, W - 40, 10); g.fillStyle = '#16a34a'; g.fillRect(20, H - 30, W - 40, 10);
      T('Unique Identification Authority of India', 60, 80, 22, '#222', true); T('Address:', 60, 140, 24, '#111', true);
      [`S/O ${father},`, P.address1, P.address2 || '', `${P.landmark || ''}`, `${P.city}, ${P.state} - ${P.pin}`].filter(Boolean).forEach((l, i) => T(l, 60, 180 + i * 34, 24, '#111'));
      T(AADHAAR_NO(), 60, 430, 48, '#111', true); T('help@uidai.gov.in   www.uidai.gov.in   1947', 60, 480, 18, '#444'); specimen(); }
    else if (kind === 'pan') { noise(232, 20); g.fillStyle = '#e8eef9'; g.fillRect(20, 20, W - 40, H - 40);
      T('आयकर विभाग', 60, 70, 22, '#1e3a8a', true); T('INCOME TAX DEPARTMENT', 60, 100, 22, '#1e3a8a', true); T('भारत सरकार', 600, 70, 22, '#1e3a8a', true); T('GOVT. OF INDIA', 600, 100, 22, '#1e3a8a', true);
      T('Permanent Account Number Card', 60, 150, 22, '#111'); T(P.pan, 60, 200, 44, '#111', true);
      T('Name', 60, 250, 16, '#555'); T(name.toUpperCase(), 60, 285, 28, '#111', true); T("Father's Name", 60, 325, 16, '#555'); T(father.toUpperCase(), 60, 360, 28, '#111', true);
      T('Date of Birth', 60, 400, 16, '#555'); T(P.dobDMY.replace(/-/g, '/'), 60, 435, 28, '#111', true); face(640, 150, 170, 210); T('Signature', 640, 420, 16, '#555'); T(P.first, 640, 455, 26, '#1e3a8a'); specimen(); }
    else if (kind === 'cheque') { noise(240, 14); g.fillStyle = '#fdf6e3'; g.fillRect(20, 20, W - 40, H - 40);
      T(P.bank.name || 'STATE BANK OF INDIA', 60, 80, 30, '#1e3a8a', true); T(`${P.bank.branch || 'MG Road Branch'}   IFSC: ${P.bank.ifsc || 'SBIN0001234'}`, 60, 115, 20, '#333');
      T('PAY ____________________________________ OR BEARER', 60, 190, 22, '#111'); T('RUPEES ________________________________________', 60, 240, 22, '#111'); g.strokeStyle = '#111'; g.strokeRect(600, 200, 200, 50); T('₹', 610, 237, 28, '#111');
      T(`A/C No. ${P.bank.account || '12345678901'}`, 60, 320, 26, '#111', true); T(name.toUpperCase(), 540, 420, 24, '#111', true); T('"000123"  110002021:  000001"  31', 60, 490, 26, '#111', true);
      g.save(); g.globalAlpha = 0.5; T('CANCELLED', 250, 340, 70, '#b91c1c', true); g.restore(); specimen(); }
    else if (kind === 'signature') { g.fillStyle = '#fff'; g.fillRect(0, 0, W, H); g.strokeStyle = '#1e3a8a'; g.lineWidth = 4; g.beginPath(); g.moveTo(80, 300); for (let x = 80; x < 700; x += 20) g.quadraticCurveTo(x + 10, 300 + (Math.random() * 160 - 80), x + 20, 300); g.stroke(); T(P.first, 90, 420, 40, '#1e3a8a'); }
    else { noise(232, 22); g.fillStyle = '#fff'; g.fillRect(20, 20, W - 40, H - 40);
      const head = { passport: 'REPUBLIC OF INDIA · PASSPORT', dl: 'DRIVING LICENCE', voter: 'ELECTION COMMISSION OF INDIA · ELECTOR PHOTO IDENTITY CARD', income: 'SALARY SLIP / INCOME PROOF' }[kind] || String(title || 'TEST DOCUMENT').slice(0, 60);
      T(head, 60, 80, 24, '#1e3a8a', true); face(640, 120, 170, 210);
      const no = { passport: 'M1234567', dl: 'MH0120200012345', voter: 'ABC1234567', income: `Gross: ₹${Math.round(P.income / 12)} / month` }[kind] || '';
      [`Name: ${name}`, `Father: ${father}`, `DOB: ${P.dobDMY}   Gender: ${P.gender}`, no ? `No: ${no}` : `PAN: ${P.pan}`, `Address: ${P.address1}, ${P.city} ${P.pin}`].forEach((l, i) => T(l, 60, 150 + i * 44, 26, '#111'));
      if (kind === 'passport') { const mrz = (s) => s.toUpperCase().replace(/[^A-Z0-9<]/g, '<').padEnd(44, '<').slice(0, 44); g.font = '22px "Courier New", monospace'; g.fillStyle = '#111'; g.fillText(mrz(`P<IND${P.last}<<${P.first}`), 40, 480); g.fillText(mrz(`${no}<1IND${P.dobISO.slice(2).replace(/-/g, '')}${P.gender[0]}3012319<<<<<<<<<<<<<<04`), 40, 512); }
      specimen(); }
    g.strokeStyle = '#94a3b8'; g.lineWidth = 2; g.strokeRect(8, 8, W - 16, H - 16);
    return fitJpg(c);
  }
  // portals check the file size in KB – Tata's DIY proposal wants the photo "more than 50KB and less than 200KB", Motor 0.001–5 MB, most others ≥ 10 KB: 60–95 KB satisfies every rule seen so far
  async function fitJpg(c, minKB = 60, maxKB = 95) {
    const enc = (q) => new Promise((r) => c.toBlob(r, 'image/jpeg', q)); const g = c.getContext('2d'); const W = c.width, H = c.height;
    let q = 0.9, b = await enc(q);
    for (let i = 0; i < 6 && b && b.size < minKB * 1024; i++) {      // too small: add fine texture (JPEG cannot compress noise) until the size is right
      const img = g.getImageData(0, 0, W, H); const d = img.data; for (let k = 0; k < d.length; k += 4) { const v = Math.floor(Math.random() * 18) - 9; d[k] += v; d[k + 1] += v; d[k + 2] += v; } g.putImageData(img, 0, 0); b = await enc(q);
    }
    for (let i = 0; i < 6 && b && b.size > maxKB * 1024 && q > 0.3; i++) { q -= 0.12; b = await enc(q); }
    return b;
  }
  function makePdf(title) {             // minimal valid one-page PDF with the test details (padded to ~60 KB)
    const lines = ['TEST DOCUMENT - NOT VALID', String(title || 'KYC document').replace(/[()\\]/g, ''), `Name: ${P.first} ${P.last}`, `DOB: ${P.dobDMY}`, `PAN: ${P.pan}`, `Address: ${P.address1}, ${P.city} ${P.pin}`];
    const stream = 'BT /F1 16 Tf 50 780 Td ' + lines.map((l, i) => (i ? '0 -26 Td ' : '') + `(${l.replace(/[^\x20-\x7e]/g, '')}) Tj`).join(' ') + ' ET';
    const objs = ['<< /Type /Catalog /Pages 2 0 R >>', '<< /Type /Pages /Kids [3 0 R] /Count 1 >>', '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>',
      `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`, '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>'];
    let out = '%PDF-1.4\n', offs = []; objs.forEach((o, i) => { offs.push(out.length); out += `${i + 1} 0 obj\n${o}\nendobj\n`; });
    out += '%' + 'x'.repeat(60000) + '\n';
    const xref = out.length; out += `xref\n0 ${objs.length + 1}\n0000000000 65535 f \n` + offs.map((o) => String(o).padStart(10, '0') + ' 00000 n \n').join('') + `trailer\n<< /Size ${objs.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`;
    return new Blob([out], { type: 'application/pdf' });
  }

  /* ---------------- adapters (per-LOB hooks; filled in below) ---------------- */
  const ADAPTERS = {};      // lob -> { beforeFill(log), afterFill(log), chooseCard(), extraButtons:[] }
  const v2Health = () => HERE.lob === 'Health' && !/^#\//.test(location.hash) && /^\/(info|multi-quote|single-quote|proposal|kyc|payment|thank|summary|addon|rider|member|nominee|medical)/i.test(location.pathname);   // dev/test Health use the V-2 (path-routed) layout
  const A = () => (v2Health() && ADAPTERS['Health V-2']) || ADAPTERS[HERE.lob] || {};

  /* ---------------- fix fields that show a validation error ---------------- */
  const ERRSEL = '.invalid-feedback, .error, .error-text, .error-msg, .error-message, .text-danger, .p-error, .Mui-error.MuiFormHelperText-root, .help-block, small[class*="danger"], span[class*="error"], div[class*="error-msg"], .text-mandatory, [id^="error_"], [class*="text-red"], [class*="validation-msg"]';
  const fixed = new WeakMap();
  function fieldForError(e) {          // the control a validation message belongs to
    let box = e.parentElement;
    for (let i = 0; i < 4 && box; i++, box = box.parentElement) {
      const c = Q('input:not([type=hidden]), select, textarea, .p-select, .p-dropdown, [role=combobox], [role=radiogroup]', box).find((x) => !ours(x) && (vis(x) || vis(x.parentElement)));
      if (c) return c;
    }
    return null;
  }
  const errorList = () => Q(ERRSEL).filter((x) => vis(x) && x.innerText.trim() && x.innerText.trim().length < 200 && !ours(x)).map((x) => { const f = fieldForError(x); return (f ? labelOf(f).replace(/\s*\*\s*$/, '') + ': ' : '') + x.innerText.trim(); });
  async function fixFromErrors(log) {
    for (const e of Q(ERRSEL).filter((x) => vis(x) && x.innerText.trim() && !ours(x))) {
      const msg = e.innerText.trim();
      if (/select (your |a )?(correct|valid)|invalid (selection|option|value)/i.test(msg)) {          // a dropdown that shows a value the portal did not register: pick it again
        let b = e.parentElement, cs = null; for (let i = 0; i < 3 && b && !cs; i++, b = b.parentElement) cs = customSelects().find((c) => b.contains(c) && !isEmptyCustom(c));
        if (cs && cs.dataset.sbRepick !== msg) { cs.dataset.sbRepick = msg; const cur = cs.innerText.replace(/[▼▾⌄]/g, '').trim(); const got = await pickCustom(cs, [cur]); if (got) { log.push(`${labelOf(cs)} re-picked ${got} (${msg})`); continue; } }
        else if (cs && cs.dataset.sbRepick === msg && cs.dataset.sbAlt !== msg) {                   // the same value is refused again: take another option (Single for marital status)
          cs.dataset.sbAlt = msg; const cur = cs.innerText.replace(/[▼▾⌄]/g, '').trim(); const alt = /marital/i.test(labelOf(cs)) ? ['Single', 'Unmarried'] : [];
          const got = await pickCustom(cs, alt.length ? alt : ['__other__']); if (got && got !== cur) { log.push(`${labelOf(cs)} changed to ${got} (${msg})`); continue; } } }
      let box = e.parentElement, inp = null;
      for (let i = 0; i < 4 && box && !inp; i++, box = box.parentElement) {
        if (customSelects().some((c) => box.contains(c))) break;          // dropdown field: handled below
        inp = Q('input:not([type=hidden]):not([type=radio]):not([type=checkbox]), textarea', box).find((x) => vis(x) && !x.disabled && !x.readOnly && !x.closest('.p-select, .p-dropdown, .p-hidden-accessible'));
      }
      if (!inp) {                                  // a dropdown showing a value but still flagged (e.g. "0" treated as empty): pick another option
        let b2 = e.parentElement, sel = null;
        for (let i = 0; i < 4 && b2 && !sel; i++, b2 = b2.parentElement) sel = customSelects().find((c) => b2.contains(c));
        if (sel && /title.*(sync|match|relation|gender)|gender.*(sync|match).*title|appropriate title|salutation/i.test(msg)) {   // "Title should be in sync with Relation/Gender" – set the title from the gender shown next to it (else flip it)
          const k = (fixed.get(sel) || 0); if (k < 3) { fixed.set(sel, k + 1);
            const row = sel.closest('.row, .form-row, .form-fields, form') || sel.parentElement.parentElement;
            const ts = customSelects().filter((c) => /title|salutation/i.test(labelOf(c)) && row && row.contains(c)); const tsel = ts[0] || sel;
            const gs = customSelects().find((c) => /gender/i.test(labelOf(c)) && row && row.contains(c)); const gtxt = gs ? gs.innerText.trim() : '';
            const cur = tsel.innerText.trim(); const fem = /^(ms|mrs|miss)/i.test(cur);
            const want = /female/i.test(gtxt) ? ['Mrs', 'Ms', 'Miss'] : /male/i.test(gtxt) ? ['Mr'] : fem ? ['Mr'] : ['Ms', 'Mrs', 'Miss'];
            const got = await pickCustom(tsel, want); if (got) log.push(`fix title -> ${got}`); } continue; }
        if (sel && /required|select/i.test(msg)) { const k = (fixed.get(sel) || 0); if (k < 2) { fixed.set(sel, k + 1);
          const cur = sel.innerText.trim(); await openCustom(sel); const opts = liveOpts(); const o = opts.find((x) => x.textContent.trim() !== cur) || opts[0];
          if (o) { o.click(); await sleep(250); log.push(`fix select "${labelOf(sel)}" -> ${o.textContent.trim()}`); } else closeOverlays(); } }
        continue;
      }
      const n = (fixed.get(inp) || 0); if (n >= 3 && !/\bpan\b/i.test(inp.name + ' ' + inp.id + ' ' + labelOf(inp))) continue; fixed.set(inp, n + 1);   // the PAN retry keeps its own counter
      const what = norm(inp.name + ' ' + labelOf(inp) + ' ' + inp.type);
      let v = null;
      if (/not (be )?(greater|more) than (\d+) days? in (the )?future/i.test(msg) && (inp.type === 'date' || /date/.test(what))) {   // "Expiry Date can not be greater than 60 days in future"
        const n = +(msg.match(/(\d+) days?/) || [0, 30])[1]; const d = new Date(); d.setDate(d.getDate() + Math.max(1, Math.min(10, n - 1))); const dd = pad(d.getDate()), mm = pad(d.getMonth() + 1), yy = d.getFullYear();
        v = inp.type === 'date' ? `${yy}-${mm}-${dd}` : /\//.test(inp.placeholder || '') ? `${dd}/${mm}/${yy}` : `${dd}-${mm}-${yy}`;
      } else if (/future date|should be (after|greater than) today|date (must|should) be in the future|past date not/i.test(msg) && (inp.type === 'date' || /date/.test(what))) {   // an expiry / validity date that came out in the past
        const d = new Date(); d.setFullYear(d.getFullYear() + 5); const dd = pad(d.getDate()), mm = pad(d.getMonth() + 1), yy = d.getFullYear();
        v = inp.type === 'date' ? `${yy}-${mm}-${dd}` : /\//.test(inp.placeholder || '') ? `${dd}/${mm}/${yy}` : `${dd}-${mm}-${yy}`;
      } else if (/past date|should be (before|less than) today|cannot be (a )?future/i.test(msg) && (inp.type === 'date' || /date/.test(what))) {
        const d = new Date(); d.setDate(d.getDate() - 10); const dd = pad(d.getDate()), mm = pad(d.getMonth() + 1), yy = d.getFullYear();
        v = inp.type === 'date' ? `${yy}-${mm}-${dd}` : /\//.test(inp.placeholder || '') ? `${dd}/${mm}/${yy}` : `${dd}-${mm}-${yy}`;
      } else if (/\bpan\b/i.test(what + ' ' + msg) && /invalid|valid pan|incorrect|as per document|pattern/i.test(msg) && /pan/i.test(what)) {   // a PAN the portal refuses: try the surname-initial PAN, the identity PAN, lower case, a generic one – then report the field as broken
        const sur = (P.last || 'K')[0].toUpperCase(); const tries = [P.pan, 'ABCP' + sur + '7111F', (kycIdentity() || {}).pan, String(inp.value || '').toLowerCase(), 'AAAPA1234A'].filter((x, i, a) => x && a.indexOf(x) === i && x !== inp.value);
        const k = +(inp.dataset.sbPanTry || 0);
        if (k < tries.length) { v = tries[k]; inp.dataset.sbPanTry = String(k + 1); log.push(`PAN rejected (${msg.slice(0, 40)}) – trying ${v}`); }
        else { onBlocked(`PAN field rejects every value (${[inp.value].concat(tries).join(', ')}) – "${msg.slice(0, 80)}": the proposal-form validation for "pan" is broken (it lower-cases the input before testing an upper-case-only regex), fix the field's validation expression in the proposal-form config`); return; }
      } else if (/different|same as|already|duplicate|cannot be/i.test(msg)) {
        if (/email/.test(what) || /e-?mail/i.test(msg)) v = `alt${n}.${P.nominee.email}`;
        else if (/mob|phone|contact/.test(what) || /mobile|phone/i.test(msg)) v = '8' + digits(9);
        else if (/pan/.test(what)) v = 'ABCP' + 'Z' + digits(4) + 'K';
      } else if (/special char|numbers? (are |is )?not allowed|only (alphabet|letter|character)|alphabets only|letters only/i.test(msg)) {
        v = String(inp.value || '').replace(/[^A-Za-z]/g, '') || (P.city || 'Pune').replace(/[^A-Za-z]/g, '');
        if (/space/i.test(msg) === false && /city|place/i.test(what) && v === String(inp.value)) v = 'Pune';
      } else if (/(min(imum)?|max(imum)?)\b.*\b(length|characters?|digits?)|length.*(min|max)/i.test(msg)) {
        const n2 = +(msg.match(/(\d+)/) || [0, 0])[1]; const cur = String(inp.value || '');
        if (/min/i.test(msg)) v = /^\d*$/.test(cur) ? (cur + digits(n2)).slice(0, Math.max(n2, cur.length)) : (cur + 'abcdefghij').slice(0, Math.max(n2, cur.length));
        else v = cur.slice(0, n2);
      } else if (/only (numbers|digits|numeric)/i.test(msg)) {
        v = String(inp.value || '').replace(/\D/g, '') || digits(6);
      } else if (/(greater|more|minimum|min\.?|at least|less|lower|maximum|max\.?|not exceed|between)/i.test(msg) && /\d/.test(msg)) {
        const unit = (u) => /cr/i.test(u || '') ? 1e7 : /la?kh|lac/i.test(u || '') ? 1e5 : /k\b|thousand/i.test(u || '') ? 1e3 : 1;
        const nums = [...msg.matchAll(/(?:₹|rs\.?|inr)?\s*([\d,]+(?:\.\d+)?)\s*(crores?|cr|lakhs?|lacs?|lakh|k|thousand)?/gi)].map((m) => parseFloat(m[1].replace(/,/g, '')) * unit(m[2])).filter((x) => !isNaN(x));
        if (nums.length) {
          let target;
          if (/between/i.test(msg) && nums.length >= 2) target = Math.round((Math.min(...nums) + Math.max(...nums)) / 2);
          else if (/greater|more|minimum|min|at least/i.test(msg)) target = Math.ceil(Math.max(...nums) * (/equal/i.test(msg) ? 1 : 1.1));
          else target = Math.floor(Math.min(...nums) * (/equal/i.test(msg) ? 1 : 0.9));
          if (/income/i.test(what + msg) && target >= 100000) P.income = String(target), S.set('profile', P);
          v = String(target);
        }
      } else if (/required|mandatory|cannot be (blank|empty)|please enter/i.test(msg) && !String(inp.value || '').trim()) {   // a field the generic fill left empty (e.g. a mandatory middle name)
        if (/middle/.test(what)) v = 'Kumar'; else if (/landmark/.test(what)) v = 'NearCentralMall'; else if (/father|spouse/.test(what)) v = (P.father || 'Suresh').split(' ')[0]; else if (/mother/.test(what)) v = (P.mother || 'Sunita').split(' ')[0];
      } else if (/valid|invalid|format|incorrect/i.test(msg)) {
        if (/pan/.test(what)) v = 'ABCPK' + digits(4) + 'F';
        else if (/ifsc/.test(what)) v = 'HDFC0000240';
        else if (/email/.test(what)) v = `${P.first}.${P.last}${digits(2)}@gmail.com`.toLowerCase();
        else if (/mob|phone/.test(what)) v = '9' + digits(9);
        else if (/pin|zip/.test(what)) { const alts = PINS.filter((x) => x[0] !== String(inp.value || '').trim()); const a = alts[n % alts.length]; v = a[0]; P.pin = a[0]; P.city = a[1]; P.state = a[2]; S.set('profile', P); }   // a pin the environment's zipcode master does not know: another metro pin (the profile follows)
        else if (/aadha/.test(what)) v = AADHAAR_RAW();
      }
      if (v) { if (inp.type === 'tel' || /mob|phone|pin/.test(what)) await typeInto(inp, v); else setNative(inp, v); log.push(`fix "${msg.slice(0, 50)}" -> ${v}`); }
    }
  }

  /* ---------------- OTP (default test OTP 234567, editable in the Journey dialog) ---------------- */
  const OTPRE = /\botp\b|one.?time.?(pass|code|pin)|verification code|enter (the )?code|security code/i;
  function isOtp(el) {
    if (!el || el.tagName !== 'INPUT' || ['hidden', 'radio', 'checkbox', 'file', 'password'].includes(el.type)) return false;
    const t = labelOf(el) + ' ' + (el.name || '') + ' ' + (el.id || '') + ' ' + (el.placeholder || '') + ' ' + (el.getAttribute('aria-label') || '');
    if (OTPRE.test(t)) return true;
    // autocomplete="one-time-code" counts only when the field has no other identity (some portals put it on every input to stop browser autofill)
    if (/one-time-code/i.test(el.getAttribute('autocomplete') || '') && !/[a-z]{3,}/i.test(t.replace(/\b(otp|code|pin|digit|enter|the)\b/gi, ''))) return true;
    // single-character boxes sitting in an OTP block (e.g. 6 separate boxes)
    if (el.maxLength === 1) { const blk = (el.closest('form, [role=dialog], .modal, .p-dialog, div') || el.parentElement); return OTPRE.test((blk.closest('[role=dialog], .modal, .p-dialog, form') || blk).innerText || ''); }
    return false;
  }
  const OTP_OK = /otp (has been |is )?(validated|verified|confirmed)( successfully)?|otp verification successful|otp verified|verified successfully/i;
  const otpDone = () => OTP_OK.test((document.body && document.body.innerText || '').slice(0, 20000));   // the portal already accepted the OTP – do not press Validate again
  async function fillOtp(log) {
    const boxes = Q('input').filter((i) => vis(i) && !i.disabled && !i.readOnly && !ours(i) && isOtp(i));
    if (!boxes.length) return false;
    if (otpDone() && boxes.every((b) => b.value)) return true;
    const code = OTP(); let did = false;
    const singles = boxes.filter((b) => b.maxLength === 1);
    if (singles.length >= 4) {                                   // split boxes: one digit each
      for (let i = 0; i < singles.length; i++) { const d = code[i] || ''; if (singles[i].value !== d) { singles[i].focus(); await typeInto(singles[i], d); did = true; } }
    } else for (const b of boxes) if (b.value !== code) { await typeInto(b, code); did = true; }
    if (did) log.push('OTP <- ' + code);
    return true;
  }

  /* ---------------- fill one page ---------------- */
  const attached = new WeakSet();
  let filling = false, flagAt = 0;             // flagAt: when filling / advancing was last raised – a flag older than the tick budget is stale and is dropped by the loop
  /* ---------------- evidence: screenshots · one PDF of the whole journey · video recording ----------------
     Settings (start dialog step 7, saved as 'evidence'): shots = every page as a JPG (zip at the end), pdf = all pages in one PDF at the end,
     video = record the tab. Pages are captured just before the script presses Next (so the filled form is on the picture), on the quote list
     and at the end (Thank You / error). Pictures are rendered from the page (html2canvas, no prompt) or – while a recording runs – taken from the
     shared tab itself (exact pixels). Everything stays in the browser (IndexedDB of the portal) until it is downloaded. */
  const EVD = () => Object.assign({ shots: false, pdf: false, video: false }, S.get('evidence', {}));
  const H2C = () => (typeof html2canvas === 'function' ? html2canvas : (window.html2canvas || PW.html2canvas || null));
  let dbp = null;
  function idb() {
    if (dbp) return dbp;
    dbp = new Promise((res, rej) => { const r = indexedDB.open('sb4_evidence', 1);
      r.onupgradeneeded = () => { const d = r.result; d.createObjectStore('shots', { keyPath: 'id', autoIncrement: true }).createIndex('j', 'journey'); d.createObjectStore('video', { keyPath: 'id', autoIncrement: true }).createIndex('rec', 'rec'); };
      r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); });
    return dbp;
  }
  async function idbGet(store, idx, key) { try { const d = await idb(); return await new Promise((res) => { const s = d.transaction(store).objectStore(store); const q = idx ? s.index(idx).getAll(key) : s.getAll(); q.onsuccess = () => res(q.result || []); q.onerror = () => res([]); }); } catch (e) { return []; } }
  async function idbPut(store, val) { try { const d = await idb(); return await new Promise((res) => { const tx = d.transaction(store, 'readwrite'); tx.objectStore(store).put(val); tx.oncomplete = () => res(true); tx.onerror = () => res(false); }); } catch (e) { return false; } }
  async function idbDel(store, rows) { try { const d = await idb(); return await new Promise((res) => { const tx = d.transaction(store, 'readwrite'); rows.forEach((r) => tx.objectStore(store).delete(r.id)); tx.oncomplete = () => res(rows.length); tx.onerror = () => res(0); }); } catch (e) { return 0; } }
  const jidOnPage = () => ((document.body.innerText.match(/JID[-A-Z0-9]{6,}/) || [])[0]) || '';
  const fileBase = (what) => { const c = cfg(); return ['1SB', what, HERE.lob, HERE.env, c.product && !['*', '__ALL__'].includes(c.product) ? c.product : '', jidOnPage(), new Date().toISOString().slice(0, 16).replace(/[:T]/g, '-')].filter(Boolean).join('_').replace(/[^\w.-]+/g, '_').replace(/_+/g, '_').slice(0, 160); };
  const saveBlob = (blob, name) => { const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name; a.style.display = 'none'; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 5000); };
  const toJpeg = (c, q) => new Promise((r) => c.toBlob(r, 'image/jpeg', q || 0.72));
  let rec = null;                                    // active recording { stream, mr, id, video }
  async function grabPage(full) {
    const hide = Q('#sb-panel, #sb-banner, #sb-dialog, #sb-picker, #sb-issues, #sb-recask').filter((e) => e.style.visibility !== 'hidden'); hide.forEach((e) => (e.style.visibility = 'hidden'));
    try {
      if (rec && rec.video && rec.video.videoWidth) { await sleep(150); const v = rec.video; const c = document.createElement('canvas'); c.width = v.videoWidth; c.height = v.videoHeight; c.getContext('2d').drawImage(v, 0, 0); return c; }
      const h = H2C(); if (!h) return null;
      const de = document.documentElement; const sx = scrollX, sy = scrollY;
      if (full && (sx || sy)) { scrollTo(0, 0); await sleep(80); }                 // render from the top so the whole page is in the picture
      try { const H = Math.min(full ? Math.max(de.scrollHeight, document.body.scrollHeight) : innerHeight, 9000);
        return await h(document.body, { useCORS: true, logging: false, backgroundColor: '#ffffff', scale: Math.min(1.5, devicePixelRatio || 1), windowWidth: de.clientWidth, windowHeight: full ? H : innerHeight, height: H, x: 0, y: full ? 0 : sy,
          ignoreElements: (el) => el.id === 'sb-loader' || (el.closest && ours(el)) });
      } finally { if (full && (sx || sy)) scrollTo(sx, sy); }
    } catch (e) { console.warn('[SB4] screenshot failed', e); return null; } finally { hide.forEach((e) => (e.style.visibility = '')); }
  }
  const pageTitle = () => ((document.querySelector('h1,h2,h3,.page-title,.p-steps-item-active,.step.active') || {}).innerText || '').trim().replace(/\s+/g, ' ').slice(0, 90);
  let lastShotSig = '';
  async function journeyShot(reason, force) {        // one picture per page state of the running journey
    const e = EVD(); if (!force && !(e.shots || e.pdf)) return false; if (!force && !running() && reason !== 'end') return false;
    const route = (location.hash || location.pathname).split('?')[0];
    const sig = route + '|' + pageTitle() + '|' + Q('input, select, textarea').filter((x) => vis(x) && (x.value || x.checked)).length + '|' + (reason === 'end' ? 'end' : '');
    if (!force && sig === lastShotSig) return false; lastShotSig = sig;
    const c = await grabPage(true); if (!c) return false; const blob = await toJpeg(c); if (!blob) return false;
    await idbPut('shots', { journey: cfg().fresh || 0, t: Date.now(), route, title: pageTitle(), reason, w: c.width, h: c.height, blob, host: location.host });
    return true;
  }
  async function screenshotNow() {                   // panel 📷: full page now → JPG download (and into the journey PDF when one is running)
    const c = await grabPage(true); if (!c) { banner('Screenshot', 'Could not take the screenshot (page renderer not loaded) – start a recording (⏺) to capture the tab itself'); return; }
    const blob = await toJpeg(c, 0.85); saveBlob(blob, fileBase('screenshot') + '.jpg');
    if (running()) await idbPut('shots', { journey: cfg().fresh || 0, t: Date.now(), route: (location.hash || location.pathname).split('?')[0], title: pageTitle(), reason: 'manual', w: c.width, h: c.height, blob, host: location.host });
    banner('Screenshot', 'Saved to Downloads' + (running() ? ' and added to this journey\'s PDF' : ''));
  }
  /* minimal PDF writer: a cover page with the journey details, then one page per picture (A4 width, page height follows the picture) */
  async function buildPdf(shots, meta) {
    const enc = new TextEncoder(); const chunks = []; let len = 0; const offs = {};
    const add = (x) => { const b = typeof x === 'string' ? enc.encode(x) : x; chunks.push(b); len += b.length; };
    const ps = (s) => '(' + String(s == null ? '' : s).replace(/[^\x20-\x7e]/g, '?').replace(/([()\\])/g, '\\$1') + ')';
    const T = (x, y, size, s) => `BT /F1 ${size} Tf ${x} ${y} Td ${ps(s)} Tj ET\n`;
    let n = 0; const id = () => ++n; const CAT = id(), PAGES = id(), FONT = id(); const objs = []; const kids = [];
    const W = 595, M = 24;
    const coverId = id(), coverC = id(); kids.push(coverId);
    let cy = 800; let cover = T(M, cy, 18, '1SB journey evidence'); cy -= 26;
    meta.forEach(([k, v]) => { cover += T(M, cy, 10, k + ':'); cover += T(M + 110, cy, 10, String(v || '-').slice(0, 85)); cy -= 15; });
    cy -= 10; cover += T(M, cy, 11, 'Pages'); cy -= 16;
    shots.slice(0, 40).forEach((s, i) => { cover += T(M, cy, 9, `${i + 1}. ${new Date(s.t).toLocaleTimeString()}  ${s.route}  ${s.title || ''}  (${s.reason})`.slice(0, 110)); cy -= 12; });
    objs.push([coverC, [`<< /Length ${enc.encode(cover).length} >>\nstream\n`, cover, '\nendstream']]);
    objs.push([coverId, [`<< /Type /Page /Parent ${PAGES} 0 R /MediaBox [0 0 ${W} 842] /Resources << /Font << /F1 ${FONT} 0 R >> >> /Contents ${coverC} 0 R >>`]]);
    for (let i = 0; i < shots.length; i++) {
      const s = shots[i]; const bytes = new Uint8Array(await s.blob.arrayBuffer());
      const iw = W - 2 * M; const ih = Math.max(20, Math.round(s.h * iw / s.w)); const H = Math.min(14000, ih + M + 36);
      const img = id(), cont = id(), pg = id(); kids.push(pg);
      const c = `q ${iw} 0 0 ${H - M - 36} ${M} ${M} cm /Im0 Do Q\n` + T(M, H - 22, 9, `${i + 1}/${shots.length}  ${new Date(s.t).toLocaleString()}  ${s.host || ''}${s.route}  ${s.title || ''}  [${s.reason}]`.slice(0, 120));
      objs.push([img, [`<< /Type /XObject /Subtype /Image /Width ${s.w} /Height ${s.h} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${bytes.length} >>\nstream\n`, bytes, '\nendstream']]);
      objs.push([cont, [`<< /Length ${enc.encode(c).length} >>\nstream\n`, c, '\nendstream']]);
      objs.push([pg, [`<< /Type /Page /Parent ${PAGES} 0 R /MediaBox [0 0 ${W} ${H}] /Resources << /Font << /F1 ${FONT} 0 R >> /XObject << /Im0 ${img} 0 R >> >> /Contents ${cont} 0 R >>`]]);
    }
    objs.push([CAT, [`<< /Type /Catalog /Pages ${PAGES} 0 R >>`]]);
    objs.push([PAGES, [`<< /Type /Pages /Kids [${kids.map((k) => k + ' 0 R').join(' ')}] /Count ${kids.length} >>`]]);
    objs.push([FONT, ['<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>']]);
    objs.sort((a, b) => a[0] - b[0]);
    add('%PDF-1.4\n'); add(new Uint8Array([37, 226, 227, 207, 211, 10]));
    objs.forEach(([oid, parts]) => { offs[oid] = len; add(`${oid} 0 obj\n`); parts.forEach(add); add('\nendobj\n'); });
    const xref = len; add(`xref\n0 ${n + 1}\n0000000000 65535 f \n`); for (let i = 1; i <= n; i++) add(String(offs[i]).padStart(10, '0') + ' 00000 n \n');
    add(`trailer\n<< /Size ${n + 1} /Root ${CAT} 0 R >>\nstartxref\n${xref}\n%%EOF\n`);
    return new Blob(chunks, { type: 'application/pdf' });
  }
  /* minimal ZIP writer (stored, no compression – JPGs are already compressed) */
  const CRC = (() => { const t = new Uint32Array(256); for (let i = 0; i < 256; i++) { let c = i; for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[i] = c >>> 0; } return (b) => { let c = 0xFFFFFFFF; for (let i = 0; i < b.length; i++) c = t[(c ^ b[i]) & 255] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; }; })();
  async function buildZip(files) {
    const enc = new TextEncoder(); const out = []; const cen = []; let off = 0;
    const u16 = (v) => [v & 255, (v >>> 8) & 255], u32 = (v) => [v & 255, (v >>> 8) & 255, (v >>> 16) & 255, (v >>> 24) & 255];
    for (const f of files) { const data = new Uint8Array(await f.blob.arrayBuffer()); const name = enc.encode(f.name); const crc = CRC(data);
      const head = new Uint8Array([...u32(0x04034b50), ...u16(20), ...u16(0), ...u16(0), ...u16(0), ...u16(0), ...u32(crc), ...u32(data.length), ...u32(data.length), ...u16(name.length), ...u16(0)]);
      out.push(head, name, data); cen.push(new Uint8Array([...u32(0x02014b50), ...u16(20), ...u16(20), ...u16(0), ...u16(0), ...u16(0), ...u16(0), ...u32(crc), ...u32(data.length), ...u32(data.length), ...u16(name.length), ...u16(0), ...u16(0), ...u16(0), ...u16(0), ...u32(0), ...u32(off)]), name);
      off += head.length + name.length + data.length; }
    const cenLen = cen.reduce((s, b) => s + b.length, 0);
    return new Blob([...out, ...cen, new Uint8Array([...u32(0x06054b50), ...u16(0), ...u16(0), ...u16(files.length), ...u16(files.length), ...u32(cenLen), ...u32(off), ...u16(0)])], { type: 'application/zip' });
  }
  const journeyMeta = (status, msg) => { const c = cfg(); return [['Line of business', HERE.lob], ['Portal / env', `${HERE.env} (${location.host})`], ['Journey type', c.mode === 'diy' ? 'DIY' : 'Assisted'], ['Category', c.category], ['Product', c.product], ['Reference', jidOnPage()], ['Result', status ? status + (msg ? ' - ' + msg : '') : 'in progress'], ['Test person', `${P.first} ${P.last}, ${P.gender}, age ${P.age}, ${P.phone}`], ['Script', 'v' + SB_VERSION], ['Created', new Date().toLocaleString()]]; };
  async function exportEvidence(kind, status, msg) {   // kind: 'pdf' | 'zip'
    const shots = (await idbGet('shots', 'j', cfg().fresh || 0)).sort((a, b) => a.t - b.t);
    if (!shots.length) { banner('Evidence', 'No pages captured for this journey yet – tick "Screenshots" or "PDF" in the start dialog, or press 📷'); return false; }
    if (kind === 'pdf') saveBlob(await buildPdf(shots, journeyMeta(status, msg)), fileBase('journey') + '.pdf');
    else saveBlob(await buildZip(shots.map((s, i) => ({ name: `${String(i + 1).padStart(2, '0')}_${(s.route.replace(/[^\w]+/g, '_') || 'page')}_${s.reason.replace(/[^\w]+/g, '_').slice(0, 30)}.jpg`, blob: s.blob }))), fileBase('screenshots') + '.zip');
    return true;
  }
  async function finishEvidence(status, msg) {
    const e = EVD(); const j = cfg().fresh || 0;
    try { if (e.shots || e.pdf) { await sleep(1200); await journeyShot('end', true); }
      if (e.pdf) await exportEvidence('pdf', status, msg);
      if (e.shots) await exportEvidence('zip', status, msg);
      if (e.shots || e.pdf) { await idbDel('shots', await idbGet('shots', 'j', j)); lastShotSig = ''; }
    } catch (x) { console.warn('[SB4] evidence', x); }
    if (rec) stopRecording();
  }
  /* video: getDisplayMedia (Chrome asks once which tab to share – "This tab" is preselected), MediaRecorder in 3 s chunks kept in IndexedDB so a reload does not lose it */
  async function startRecording() {
    if (rec) return true;
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({ video: { displaySurface: 'browser', frameRate: 15 }, audio: false, preferCurrentTab: true, selfBrowserSurface: 'include', surfaceSwitching: 'exclude' });
      const mime = ['video/mp4;codecs=avc1', 'video/webm;codecs=vp9', 'video/webm;codecs=vp8', 'video/webm'].find((t) => window.MediaRecorder && MediaRecorder.isTypeSupported(t)) || '';
      const mr = new MediaRecorder(stream, mime ? { mimeType: mime, videoBitsPerSecond: 2500000 } : {});
      const rid = 'rec-' + Date.now(); let seq = 0; const name = fileBase('video');
      mr.ondataavailable = (ev) => { if (ev.data && ev.data.size) idbPut('video', { rec: rid, seq: seq++, at: Date.now(), mime: mr.mimeType || mime || 'video/webm', blob: ev.data, name }); };
      mr.onstop = () => setTimeout(() => saveRecording(rid), 700);
      stream.getVideoTracks()[0].addEventListener('ended', () => stopRecording());       // "Stop sharing" in Chrome's bar
      const video = document.createElement('video'); video.muted = true; video.playsInline = true; video.srcObject = stream; video.play().catch(() => {});
      mr.start(3000); rec = { stream, mr, id: rid, video }; refreshPanel(); banner('REC', 'Recording this tab – ⏹ in the panel (or Chrome\'s "Stop sharing") saves the video'); return true;
    } catch (e) { banner('REC', 'Recording not started: ' + (e.message || e.name)); return false; }
  }
  function stopRecording() { if (!rec) return; const r = rec; rec = null; try { if (r.mr.state !== 'inactive') r.mr.stop(); } catch (e) {} r.stream.getTracks().forEach((t) => t.stop()); refreshPanel(); }
  async function saveRecording(rid) {
    const parts = (await idbGet('video', 'rec', rid)).sort((a, b) => a.seq - b.seq); if (!parts.length) return;
    const mime = parts[0].mime || 'video/webm'; saveBlob(new Blob(parts.map((p) => p.blob), { type: mime.split(';')[0] }), (parts[0].name || fileBase('video')) + (/mp4/.test(mime) ? '.mp4' : '.webm'));
    await idbDel('video', parts); banner('REC', 'Video saved to Downloads');
  }
  let recAsked = false, recWait = 0, evStarted = false;
  async function evidenceOnLoad() {                  // once per page load: save a recording a reload interrupted; clean up old pictures
    if (evStarted) return; evStarted = true;
    const vids = await idbGet('video'); const lastAt = (r) => Math.max(...vids.filter((x) => x.rec === r).map((x) => +String(r).split('-')[1] || 0), ...vids.filter((x) => x.rec === r).map((x) => x.at || 0));
    const left = [...new Set(vids.map((x) => x.rec))].filter((r) => Date.now() - lastAt(r) > 10000);    // older than 10 s = not another tab's live recording
    for (const r of left) { await saveRecording(r); banner('REC', 'The page reloaded – the recording up to that point was saved to Downloads. Press ⏺ to continue recording.'); }
    const old = (await idbGet('shots')).filter((s) => Date.now() - s.t > 2 * 86400000); if (old.length) idbDel('shots', old);
  }
  function askRecording() {                          // browsers only allow screen capture after a click – ask once per page load while a journey with "video" runs
    if (recAsked || rec || document.getElementById('sb-recask')) return; recAsked = true; recWait = 0;        // v5.20.1: the journey never waits for this bar – it runs on at once; press ⏺ any time to record the rest
    const d = document.createElement('div'); d.id = 'sb-recask'; d.style.cssText = 'position:fixed;top:12px;left:50%;transform:translateX(-50%);z-index:2147483600;background:#0f172a;color:#fff;border-radius:10px;padding:10px 14px;font:13px system-ui;box-shadow:0 6px 24px rgba(0,0,0,.35);display:flex;gap:10px;align-items:center';
    d.innerHTML = `<span>🎥 Video is on for this journey – press ⏺ to record this tab (the journey is already running)</span><button id="sb-recgo" style="${BTN};background:#dc2626">⏺ Start recording</button><button id="sb-recno" style="${BTN};background:#475569">Skip</button>`;
    document.body.appendChild(d); const done = () => { d.remove(); recWait = 0; };
    d.querySelector('#sb-recgo').onclick = async () => { done(); await startRecording(); };
    d.querySelector('#sb-recno').onclick = done; setTimeout(() => { if (document.getElementById('sb-recask')) done(); }, 30000);
  }

  const CHANGELOG = { '5.38.0': 'Request IDs → document, fast and complete (v5.38): the console is now read through its own API – the 1SB call by request ID (any date, no 3-day window), the insurer calls under it and their payloads – six IDs at a time, about a second for ten IDs, no clicking on the page. IDs that were reported as not found are found. New choice in the dialog: 1SB + insurer, insurer request & response only, or 1SB only (the summary table follows). Timestamps (IST), API name and latency are shown; request headers are no longer printed (they carried user names).', '5.37.0': 'Request IDs → document (v5.37): on the 1SB console (demo.console.1silverbullet.tech) a 📄 button – or menu → 📄 Request IDs → document from any portal – takes a list of request IDs and builds one Word document (.docx, plus .html): a summary table (timestamp, what differs in the request, 1SB response, insurer response, premium) and per ID the 1SB request / response and the insurer request / response from API Logs. The first run types the ID into the console search and opens the entries itself (or you do it once by hand → Build from what the page loaded); the console calls that carry a request ID are remembered and every later ID is fetched directly. Token calls, authorization headers and passwords are never included; encrypted payload strings become a length marker unless ticked.', '5.36.0': 'Validation sweep (v5.36): menu → 🧪 Validation sweep ON, then start any journey – on every form page the script first enters wrong values field by field (bad PAN / mobile / e-mail / PIN / IFSC, a minor\'s and a future date of birth, age 5 / 150, income 0, name 123, nominee under 18, every required field empty …), reads the message the portal shows (under the field, as a toast, or after Next), puts the right value back and continues. At the end the report (HTML + Markdown: page, field, wrong value, message shown / NO MESSAGE) is downloaded; menu → 🧪 Validation report any time.', '5.35.0': 'Portals tab (v5.35): paste any number of portal links (distributor UAT / production, 1SB demo / dev / test – ICICI Home Finance is the first) into the Portals tab of the dashboard, one per row with Mode, Product (all = every plan) and an optional test person; ▶ Run runs that portal start to end, ▶ Run ALL portals runs every row one after the other. Each journey is logged in the Portal results tab (portal, product, status, reason, journey id) and the row keeps Journeys / Pass / Fail / last result. Distributor embedded apps (form-wizard route) are recognised as Embedded.', '5.34.0': 'One hosted copy updates every installation (v5.34): the script carries @updateURL / @downloadURL – publish the two files of the HOSTING bundle at one folder URL (GitHub repo, S3 bucket, any https host), install the script once from that URL, and every laptop picks up each new version by itself (Tampermonkey checks daily; Utilities → Check for userscript updates does it at once). No more sending the file around.', '5.33.4': 'Jira tickets reach the backlog (v5.33.4): the INSB workflow has no direct Draft → Backlog step, so a new ticket is now walked Draft → DRAFT REVIEW → business grooming → Tech Grooming → IN BACKLOG right after creation (the path is editable in 🎫 Jira settings → Status path). The Jira log names every step taken and, when the workflow offers no step, the transitions it does offer.', '5.33.0': 'Test-case sheets (v5.33): a Google Sheet of insurer test cases in 1SB request terms (gender, age, quoteAmount, PPT, PT, PPF, optionSelected, multiple, proposer …) runs case by case from its ▶ Run links – the product is asked for by its product code (a virtual rule when the rules master does not know it), quoted with exactly the case\'s values (no filter ladder), and the case passes when the quote comes back (premium written to the sheet) or, for a Negative case, when it is rejected. Links take rows=all and filter=Header:Value (Type:Negative, Status:FAIL, Status: = not run yet). One Apps Script deployment serves the dashboard and every test-case file.', '5.32.1': 'Ordinary journeys run exactly as before the dashboard (v5.32.1): the scenario probe (flipping Yes/No questions to see what appears), the posting of captured fields / scenarios to the Google Sheet and the sheet write-back only happen in a journey started from a ▶ Run link of the dashboard – never from the ▶ Start dialog, the quote-page picker or a batch. The field log is written at most every 5 s and only when something new was captured (it used to be rewritten after every fill).', '5.32.0': 'Scenarios (v5.32): every branch of a form – a Yes/No question answered the other way and the fields that appear then (alcohol → type, quantity, years, abstinence; two nominees → share …) – is a row of the "Scenarios – <LOB>" tab of the Google Sheet. ▶ Scenarios in a product row runs that product once per enabled scenario (base run first); row 3 has ▶ Run all rows and ▶ All rows × scenarios for the whole tab. While a page is filled the script switches every Yes/No question to Yes for a moment to see which fields appear, puts it back, and sends what it found to the Scenarios tab (new questions only – your rows are never changed). Each scenario run writes its status to the product row, the scenario row and the "Scenario results" log.', '5.31.0': 'Google Sheet dashboard complete (v5.31): every product of every category and LOB (Investment, Health, Health V-2, Life Term, Embedded, Motor, NBFC, 3-Click) has its own row in the "Fields – <LOB>" tabs, for demo / dev / test, Assisted and DIY, every field prefilled. Row 3 of each tab is the ⚙ Defaults row: change a value there and every product follows; change a product\'s own cell and only that product changes; a real run fills in the product\'s own values where a row still shows the defaults. Results → "📗 All products → Sheet" seeds a tab from the fields captured so far.', '5.25.0': 'Any plan chosen at the start now finds its own way (v5.25): every multi-quote answer is read – which plans are quoted and under which tab (Guaranteed / Non-Guaranteed / Market Linked / Retirement, from the plan\'s own savingsProductType) and which plans came back with an error and why. A plan quoted under another tab makes the script switch the tab; a plan picked from the rules master opens the right category straight away once it has been seen once; a plan the poll rejects is reported at once with the insurer\'s / 1SB\'s exact validation message instead of waiting a minute for the list to settle – and when the message names the cure (minimum premium amount, frequency, premium payment term, entry age) the script changes that filter on the quote page and quotes again (twice at most). A plan the portal never asks for is reported as "not enabled for this distributor" with the insurer\'s plans that were in the multi-quote. The Start dialog shows the last reason a plan was missing and what the script will change.', '5.24.0': 'Jira ticket autofill from the journey itself: Org ID from the journey id (JID-DEMO-BCIBL-… → BCIBL), Manufacturer and Prod ID from the product-scoped calls in the Network tab (gateCriteria?product_id=309&manufacturer_id=BALIC, proposal, product/information) – never from another insurer\'s block in the multi-quote poll – insurer title / label / Manufacturer option from that manufacturer id, product name from the plan chosen, Environment from the portal address (production → Production, uat / demo → UAT, dev / test → Test). Assignee and Product Owner are asked, sprint stays the active one. The Epic list holds ALL epics of INSB (paged, typed search asks Jira too). Only the API payload(s) with an error for THIS product are attached (one per failing API, not every poll), and the response error shown is this product\'s block.', '5.23.0': 'Rejected values heal themselves (v5.23): a field the portal marks with an error after Next ("Name should be exactly as per valid Id Proof", "Type as per valid id proof", share must be 100, too short, duplicate…) gets the next value that fits it – never the same value twice, the error text steers the choice (name pools, two-word names when a middle name is suggested, other dates / numbers / e-mails) – and Next is pressed again at once instead of eight times. A nominee prefilled with the proposer\'s own name is corrected before the first click. What finally got the page through is learned per block (nominee / spouse / family values are kept apart from the proposer\'s), together with the values that were rejected, so the next journey fills the correction straight away – even over a portal prefill.', '5.22.0': 'Postman gateway collection rebuilt in the team\'s working sanity layout: Basic auth from {{authUser}} / {{authPass}}, requests on {{baseUrl}}/insurance/<lob>/v1/… (the gateway – the old export pointed at the portal\'s own session-bound /v2 proxy, which answered 403 AUTHORIZATION_ERROR), MQ POST → MQ Poll → Gate criteria (GET and the portal\'s POST) → Proposal form → SQ POST → SQ Poll → Proposal POST (built live from the journey\'s own filled proposal + the fresh quote) → Proposal Poll → Payment Intimation when captured. Polls repeat themselves, failures end the run with the reason, distributor / agent / channel come from the environment. Select the 1SB <env> environment and press Run.', '5.21.0': '■ STOP is per tab: it stops the journey in the tab where it is pressed, journeys in other tabs keep running (also Alt+X). Menu → ⏹ Stop on ALL tabs does what STOP used to do.', '5.20.4': 'A developer test build left in a portal\'s browser storage can no longer replace the installed script: such an override only runs while it is NEWER than the installed version and less than 6 h old, and is deleted otherwise. (A leftover v5.19.3 test build on the login page was what kept showing the old version after a clean reinstall – not the installation.)', '5.20.3': 'The newer copy now wins even when the older copy loads later or tries to stop it (older versions stop whatever script they find on the page): the panel, dialog and journey always belong to the newest installed version, and the red notice names the entry to delete.', '5.20.2': 'Two installed copies (an older entry left in Tampermonkey next to the new one) no longer fight over the page: the newer copy runs, the older one stops, and a red notice names the entry to delete. With two copies each had its own storage – a journey started from one copy\'s dialog looked paused / OFF to the other.', '5.20.1': 'The journey no longer waits for the "Start recording / Skip" bar (it used to hold the first page for up to 30 s when the 🎥 video option was on – that looked like the script not responding right after an update). The bar stays for 30 s; press ⏺ any time.', '5.20.0': 'Supervisor (v5.20): every step of the loop has a time budget (fill 45 s, click 20 s, whole tick 60 s) – a step that hangs (a dropdown that never renders, a renderer that never answers, a timer that stops) is cut off and the next tick carries on; a stale step can no longer click. Worker timers that stop answering are replaced by the page clock within 4 s. A page already filled and unchanged is not filled again before the click. A listed plan on the quote page is chosen at once, even while other insurers are still loading (this alone saved 30–40 s per journey on the savings portal). The per-tab journey id is kept in two places so a portal that resets the tab name cannot leave the journey idle. Hover the panel text to see what the script is waiting for; __SB.health has the timings.', '5.19.3': 'Stability: fast mode runs at 50 % (was 40 %), and the time a dropdown list or overlay needs to render is never shortened by fast mode (an option list that had not rendered yet left Address Proof / Age Proof empty on the proposal page). A product missing from the quote list now reports that insurer\'s own error (e.g. BALIC: bad response during manufacturer request) instead of the first insurer\'s. Verified live: ICICI iProtect Smart Plus passed three times in a row, about a minute each.', '5.19.2': 'Suitability Declaration (ICICI iProtect Smart Plus and every other pop-up): while a dialog is open only ITS buttons are pressed (Yes), never the page\'s Submit behind it – that re-submitted the gate criteria five times, re-opened the dialog each time and left the portal on the blank "Preparing to collect your details…" screen. Verified live: the dialog now appears once, Yes is pressed, the journey runs to Thank You in about a minute.', '5.19.1': 'Blank "Preparing to collect your details…" loader fixed: the script now counts the portal\'s own API calls and never presses Next (or picks a plan) while one is in flight or finished less than 0.6 s ago – a submit during a gate-criteria / premium / lookup call is what left the page on that loader. A loader that is still showing after 25 s with no request pending is recognised as dead at once and the page is redone one step back (was 90 s).', '5.19.0': '⚡ Fast mode (default): every wait inside the filler is cut to 50 % and the page is polled every 1.2 s instead of 3 s – forms fill in a blink; readiness checks (spinners, loading blocks, quote lists) are unchanged, so nothing is skipped. Menu → Speed switches back to normal for a slow portal.', '5.18.3': 'Next is never pressed while a spinner / loading block is showing (a submit during a fetch left the term portal on a blank "Preparing to collect your details" screen and re-opened the Suitability dialog); a loading screen that stays for 75 s makes the script step back once and redo the page before reporting.', '5.18.2': 'The "Script updated" notice is a small two-second flash shown once per version; the change log lives in ? Help.', '5.18.1': 'Faster second runs: every guessed value (an unknown field filled "NA", a dropdown where the first allowed option was taken, a question answered by default, a self-heal) is learned the moment the page moves on, so the next journey fills it at once instead of searching again. "Are you engaged in any of the mentioned industries" and similar risk questions are answered No. Self-heal starts after 8 s.', '5.18.0': 'Self-healing forms (v5.18): when a page does not move on (required field left empty for 12 s, or Next pressed twice with errors showing) the script repairs it field by field – empty dropdowns get an option, flagged dropdowns the next option, text fields a value that fits their name, unanswered questions No, flagged checkboxes a tick – then presses Next again, up to six rounds per page; the values that got the page through are learned for the next run. A dropdown\'s search box is never mistaken for a field any more.', '5.17.2': 'Background tabs: a loop-back WebRTC connection keeps the page exempt from Chrome\'s intensive throttling even before the first click (no sound needed), in addition to the keep-awake tone and worker timers.', '5.17.1': 'Keeps going in a background tab: timers run in a Web Worker (not slowed down by Chrome when the tab is hidden) and a near-silent sound keeps the tab awake while a journey runs – switch to another tab, window or the desktop and the journey continues.', '5.17.0': 'One journey per tab: the journey you start belongs to the page (tab) it was started in. A page opened in another tab starts idle and runs its own journey; a tab that moves to another portal becomes idle instead of filling it. No more "journey running in another tab".', '5.16.1': 'Jira: the Epic is chosen in the dialog (no automatic parent); Prod ID / manufacturer / product name / request id / failing calls are saved with every BLOCKED result, so a ticket raised later from Results is still filled from the API traffic.', '5.16.0': 'Jira (v5.16): tickets are Bugs under the product\'s epic (Epic optional), with searchable pickers for every field – assignee and product owner from the project\'s user list (type to search), sprint (active sprint of the INSURANCE board), parent epic, RCA category, environment, priority – plus a wider request-id capture (body, headers, screen text) and a live duplicate / epic check in the dialog.', '5.15.2': 'A developer-override build left in a portal\'s storage now expires after 6 hours instead of replacing the installed script for ever.', '5.15.1': 'Jira fixes: search via the current Jira API, product id / insurer / name read from the journey\'s own API traffic, two error sections (screen + API response, with request id), payload files per failed 1SB call in the console layout, optional API-log console lookup by request id (manufacturer payload), and a Jira-tab fallback when Jira refuses cross-site calls.', '5.15.0': 'Jira (v5.15): a failed journey can become an INSB ticket in the team\'s format (AUSFB_<Insurer>_ProdID_<id>_<name>; Org ID / Insurer / ProdID / Product Name + the error from the response; Priority High, Life Insurance Team, labels, Distributor, Manufacturer, Line of Business, assignee + product owner per insurer, PI#1 / NA / Agent) with the screenshot and the failing API payload attached; an existing ticket for the Prod ID is updated instead of duplicated. Menu → 🎫 Jira settings: ask (button on the failure banner) / auto / off.', '5.14.0': 'Journey workbook (v5.14): one Excel / Google Sheet for everything – a sheet per line of business, a row per product (every env, Assisted + DIY, every category) with all form values prefilled as dropdown cells, ▶ Run link per row, structure locked (password), shared link auto-refresh; the ▶ Start dialog has an optional "Use values from the workbook" section (off = the script fills as before).', '5.13.0': 'Workbook (v5.13): every value the script fills is captured per product and page – menu → 📗 Workbook exports one Excel file (Products with ▶ Run links, Fields, Persons). Edit the values, load the file (or a shared link) back and click ▶ Run in the sheet: the portal opens and the journey runs with those values.', '5.12.0': 'Any page with a form (v5.12): dates are written the way the field shows them (e.g. "03 Nov 2026") and react-datepicker fields get the whole date at once; a react-select search box is no longer mistaken for a second dropdown. Any page with a form: the panel now appears on every site that shows a real form (3+ fields), not only on 1SB portals – ▶ Start → person details → "Fill this form" / "Fill & auto-click Next" fill it with the same test person and the same field logic (names, DOB, mobile, email, PIN, PAN, dropdowns, radios, declarations). The script never touches such a site\'s own storage and still stays off Jira / Confluence / Postman / mail / Google / Slack pages.', '5.11.0': 'Simpler start: ▶ Start on the panel now opens one small dialog – the test person\'s details (edit them or press New person) and two buttons, "Fill this form" (every page is filled, you press Next) and "Fill this form & auto-click Next" (fills and clicks through to the quote page, where the plan list appears as before – pick a plan, then Auto or Fill only). The full journey dialog (portal, LOB, plan, batch of all plans) is under "Advanced" and in the menu.', '5.10.1': 'Embedded (Assisted and DIY): the next journey no longer lands on "Quote form data is missing" – the signed-in embedded app rejects a re-entry through "?id=", so the script restarts every journey through the form wizard (full page load); if the portal still shows that error right after a start, the wizard is reopened once automatically.', '5.10.0': 'DIY (Non Assisted) on Demo/Dev/Test for every LOB: the review page\'s unlabeled "I/We declare" checkbox is ticked so Proceed and the OTP pop-up work, the Investment DIY document-upload page is filled, generated photos / documents are 60–95 KB (Tata wants 50–200 KB), good-health declarations stay Yes (they used to be flipped to No and the Embedded journey ended with "We cannot continue"), "Type of organisation" never picks an armed-forces option, father / spouse first and last names are single words, mandatory middle names get a value, "Session Expiry Warning" pop-ups are acknowledged, and a quote page without plans reports what the portal says (e.g. "No valid product is found for this consumer request").', '5.9.0': 'Motor on Demo/Dev/Test: "all plans" covers every quote tab (Bundled / Comprehensive / Third Party), the insurer is read from the card logo, new vehicles are registered today and renewals two years back (previous-policy expiry within 60 days), CKYC with the test identity on dev and test as well; a rejected KYC document is re-made to fit the complaint (smaller JPG → PNG → PDF → the other proof type → plain card) before the journey is recorded as blocked, and the API error is kept in the result; "Confirm & Proceed" review pages are submitted, only real payment pages stop the script. Embedded (demo / dev): a PAN the portal keeps refusing is retried with the surname-initial PAN, the KYC identity PAN, lower case and a generic one, then the result names the broken proposal-form validation; a stale Thank You page is never counted as a second PASS.', '5.8.0': 'Investment on Demo/Dev/Test: "Run ALL plans of EVERY category" (Guaranteed → Non-Guaranteed → Market Linked → Pension → Annuity back to back); the Pension / Annuity and ULIP / TULIP sub-tabs are opened by the script; the portal\'s sticky annuity mode (empty category page after a retirement run – also by hand) is reset at every journey start; older life assured for retirement (45 / 50); plans missing from a run are retried once at the end of the batch and late-listed plans join it; GSTIN with checksum, Income Source type (multiselect), Height 5ft 06, risk questions always No (even when pre-selected Yes), ID-proof numbers, future expiry dates, Industry / Organisation type; clearer error-page messages.', '5.7.0': 'Real-layout Aadhaar and PAN test documents: the public sample cards (placeholder data) are fetched once, cached, and filled with the test person\'s name / DOB / number – the portal Aadhaar OCR now accepts them (verified on test: Care Supreme upload 200 OK, no "No Aadhaar detected"). Aadhaar is again the first choice for Proof of Address.', '5.6.0': 'Health on Demo/Dev/Test: CKYC test identity (PAN DTLPA0484B / DOB 11-11-2001 on demo – typing a PAN or DOB on a KYC page teaches a new one); specimen documents per type (Aadhaar front/back, PAN, passport with MRZ, cheque, photo, signature) chosen from the document-type picker, Passport/PAN preferred because portals run an Aadhaar OCR; Dev/Test "V-2" layout (Base UI dropdowns, document-type pickers, declaration questions answered Yes); insurer KYC pop-ups (HyperVerge / Niva Bupa) and "proposal submitted → payment page" recognised; loading screens get up to 5 min; "Leave site?" prompts never hang a tab.', '5.5.0': 'Quote-page plan list: ✕ close / "I will pick on the page", and after choosing a plan you decide: Auto (click through to Thank You) or Fill only (you press Next).', '5.4.0': 'OTP 234567 everywhere: a portal that answers "OTP validated successfully" is recognised and the journey moves on (Bajaj eTouch II now passes on demo and dev).', '5.3.0': 'Life Term on Demo/Dev/Test in one go: @vueform multiselects (Income Source type), percentage-of-income fields, spouse/proposer titles in sync with gender, unknown required text fields get a visible "NA" guess (teach the right value), "Leave site?" guards cleared before the next journey.', '5.2.0': 'Postman: "gateway collection" export in the team\'s layout (Multi Quote → Poll → Criteria → Single Quote → Poll → Proposal Form → Proposal Submission → Poll) with journey_id / req_id / single_quote_response variables; API capture moved to IndexedDB (full quote/proposal bodies).', '5.1.0': 'Life Term hardening: the script never runs on Jira/Confluence/Postman/mail tabs, PASS is only recorded after a real quote→proposal journey, one journey at a time per browser (a second tab is told to wait), category no longer carries over between LOBs.', '5.0.0': 'One-button panel (■ STOP switches the script off everywhere; click the status text for the menu, Alt+S / Alt+X); the script now works on every portal URL, with or without ?id=.', '4.9.0': 'Screenshots (📷), one PDF of all journey pages, video recording (⏺), and product search by name or ID in the start dialog and on the quote page.', '4.8.0': 'Self-learning: when the script is stuck it asks you to show the way and remembers it; Results → "Export for Claude" bundles issues + learned data for the next version; teammates can import learned data.' };
  function announceVersion() {           // once per version, two seconds, no changelog on screen (it is in ? Help)
    if (HERE.lob === 'Form') return; let seen = ''; try { seen = S.get('seenVersion', '') || localStorage.getItem('sb4_seenVersion') || ''; } catch (e) {} if (seen === SB_VERSION) return;
    S.set('seenVersion', SB_VERSION); try { localStorage.setItem('sb4_seenVersion', SB_VERSION); } catch (e) {}
    setTimeout(() => { const d = document.createElement('div'); d.id = 'sb-verflash'; d.textContent = `Script updated to v${SB_VERSION}`; d.style.cssText = 'position:fixed;top:70px;left:50%;transform:translateX(-50%);z-index:2147483001;background:#0f172a;color:#fff;border-radius:999px;padding:6px 14px;font:13px system-ui,sans-serif;opacity:.95'; document.body.appendChild(d); setTimeout(() => d.remove(), 2000); }, 800);
  }
  /* ---------------- self-learning ("Script Doctor") ----------------
     The script learns from the tester. Whatever a person types, chooses or clicks on a page while a journey is running is
     remembered – field values per LOB + field label, dropdown choices per LOB + label, the button that moved a page on per
     LOB + page – and used automatically next time. Values equal to the test person's details are stored as {{tokens}}
     (e.g. {{phone}}), never as raw data. Nothing here runs new code: it only adds data the normal fill/click logic consults first.
     Learned data can be exported (with the BLOCKED diagnostics) for the next release and imported by teammates. */
  const LEARNED_SEED = {};
  const LKEY = (l) => String(l || '').replace(/\*/g, '').replace(/\s+/g, ' ').trim().toLowerCase().slice(0, 80);
  const lobKey = () => HERE.lob || '?';
  const routeKey = () => lobKey() + '|' + (location.hash || location.pathname).split('?')[0].replace(/[0-9a-f]{8}-[0-9a-f-]{27,}|JID[-A-Z0-9]+|\d{4,}/gi, ':id');
  const NOLEARN = /password|\botp\b|captcha|\bcard\b|cvv|expiry|\bupi\b|account ?(no|number)|ifsc|aadh?a+r|\bpan\b|passport/i;   // raw values of these are never stored
  const PTOK = ['first', 'middle', 'last', 'phone', 'email', 'pin', 'city', 'state', 'pan', 'dobDMY', 'dobISO', 'address1', 'address2', 'landmark', 'father', 'mother', 'occupation', 'education'];
  const toToken = (v) => { const k = PTOK.find((x) => P[x] && String(P[x]).toLowerCase() === String(v).toLowerCase()); return k ? `{{${k}}}` : null; };
  const fromToken = (v) => String(v).replace(/\{\{(\w+)\}\}/g, (_, k) => (P[k] != null ? String(P[k]) : ''));
  function learnedDb() { const L = S.get('learned', {}); const m = (k) => Object.assign({}, LEARNED_SEED[k] || {}, L[k] || {}); return { fields: m('fields'), selects: m('selects'), buttons: m('buttons') }; }
  function learnPut(kind, key, val, meta) {
    const L = S.get('learned', {}); L[kind] = L[kind] || {}; const prev = L[kind][key];
    const e = { v: val, n: prev && prev.v === val ? (prev.n || 1) + 1 : 1, at: new Date().toISOString().slice(0, 10), host: location.host, ver: SB_VERSION };
    if (meta && meta.rej) { e.fix = true; e.rej = [...new Set(((prev && prev.rej) || []).concat(meta.rej))].slice(-12); }   // a correction: the portal rejected these values – next time the field is set to e.v even when the portal prefilled it
    L[kind][key] = e; S.set('learned', L);
  }
  const learnedFix = (label, el) => { if (!label) return null; const db = learnedDb().fields; const sec = sectionKey(el); const e = db[lobKey() + '|' + (sec ? sec + ':' : '') + LKEY(label)]; return e && e.fix ? e : null; };
  const sectionKey = (el) => { try { if (!el) return ''; return inNominee(el) ? 'nominee' : inSpouse(el) ? 'spouse' : inFamily(el) ? 'family' : ''; } catch (e) { return ''; } };   // "First Name" inside the nominee block is not the proposer's first name: learned values for such blocks are keyed by the block
  const learnedValue = (kind, label, el) => { if (!label) return undefined; const db = learnedDb()[kind]; const sec = sectionKey(el); const e = (sec && db[lobKey() + '|' + sec + ':' + LKEY(label)]) || (!sec && (db[lobKey() + '|' + LKEY(label)] || db['*|' + LKEY(label)])); return e ? fromToken(e.v) : undefined; };
  const learnedButton = () => { const e = learnedDb().buttons[routeKey()]; return e ? e.v : ''; };
  const teachNote = (msg) => { console.log('[SB4] learned', msg); const n = S.get('learnNotes', []); n.push(new Date().toLocaleTimeString() + ' ' + msg); S.set('learnNotes', n.slice(-30)); const p = document.getElementById('sb-learn'); if (p) { p.textContent = '🎓 ' + msg; p.style.display = 'inline'; clearTimeout(p._t); p._t = setTimeout(() => (p.style.display = 'none'), 6000); } };
  let teachOpen = null; const pendingBtn = { text: '', route: '', at: 0 }; let selfUntil = 0;   // events caused by the script's own clicks are "trusted" change events – ignore them while it works
  const selfActing = () => filling || advancing || Date.now() < selfUntil;
  function watchTeacher() {
    if (window.__sbTeachHooked) return; window.__sbTeachHooked = 1;
    document.addEventListener('change', (ev) => { try {
      if (!ev.isTrusted || !running() || selfActing()) return; const el = ev.target; if (!el || !el.tagName || ours(el)) return;   // isTrusted + not while the script itself is filling/clicking
      const label = labelOf(el); if (!label || ['file', 'password', 'hidden'].includes(el.type)) return;
      if (el.tagName === 'SELECT') { const o = el.options[el.selectedIndex]; const v = o && o.text.trim(); if (v && !/^(select|choose|--)/i.test(v) && !NOLEARN.test(label)) { learnPut('selects', lobKey() + '|' + LKEY(label), v); teachNote(`"${label.replace(/\*/g, '').trim()}" → ${v}`); } return; }
      if (el.type === 'radio') { const grp = labelOf(el.closest('fieldset, [role=radiogroup], .form-group, .mb-3') || el.parentElement) || ''; const v = labelOf(el); if (grp && v && grp !== v && !/^(yes|no|y|n|male|female|true|false)$/i.test(grp.trim()) && grp.trim().length > 5) { learnPut('selects', lobKey() + '|radio:' + LKEY(grp).slice(0, 60), v); teachNote(`"${grp.slice(0, 40)}" → ${v}`); } return; }
      if (el.type === 'checkbox') return;
      const raw = String(el.value || '').trim(); if (!raw) return;
      if (/kyc|ovd|proposer/i.test(location.hash + location.pathname)) {           // a PAN / DOB typed by hand on a KYC page = the identity CKYC accepts here
        if (/\bpan\b/i.test(label + ' ' + (el.name || '') + ' ' + (el.id || '')) && /^[A-Z]{5}\d{4}[A-Z]$/i.test(raw)) { learnKycIdentity('pan', raw.toUpperCase()); return; }
        if (/date of birth|\bdob\b/i.test(label) && /^\d{2}[-\/]\d{2}[-\/]\d{4}$/.test(raw)) { learnKycIdentity('dob', raw.replace(/\//g, '-')); return; } }
      const tok = toToken(raw); if (!tok && NOLEARN.test(label + ' ' + (el.name || ''))) return;
      learnPut('fields', lobKey() + '|' + LKEY(label), tok || raw); teachNote(`"${label.replace(/\*/g, '').trim()}" ← ${tok || raw}`);
    } catch (e) {} }, true);
    document.addEventListener('click', (ev) => { try {
      if (!ev.isTrusted || !running() || selfActing()) return; const t = ev.target; if (!t || !t.closest || ours(t)) return;
      const cs = customSelects().find((c) => c.contains(t)); if (cs) { teachOpen = labelOf(cs); return; }
      const opt = t.closest(OPTSEL); if (opt && teachOpen) { const v = opt.textContent.trim(); if (v && !NOLEARN.test(teachOpen)) { learnPut('selects', lobKey() + '|' + LKEY(teachOpen), toToken(v) || v); teachNote(`"${teachOpen.replace(/\*/g, '').trim()}" → ${v}`); } teachOpen = null; return; }
      const b = t.closest('button, a.btn, [role="button"], input[type="submit"]'); if (!b) return; const txt = (b.innerText || b.value || '').trim().replace(/\s+/g, ' ');
      if (txt && txt.length < 60 && !/\bpay(ment)?\b|razorpay|payu|billdesk|log ?out|sign ?out|^\s*back\b|cancel|delete|remove|reset|close/i.test(txt)) Object.assign(pendingBtn, { text: txt, route: routeKey(), at: Date.now() });
    } catch (e) {} }, true);
  }
  function confirmPendingButton() {   // the page moved on shortly after the person pressed a button → that button is what moves this page on
    if (pendingBtn.text && Date.now() - pendingBtn.at < 15000) { if (learnedButton() !== pendingBtn.text) { learnPut('buttons', pendingBtn.route, pendingBtn.text); teachNote(`on ${pendingBtn.route.split('|')[1]} press "${pendingBtn.text}"`); } }
    pendingBtn.text = '';
  }
  // what the page looked like when a journey was BLOCKED – labels, types, required/filled flags, buttons, errors, last API calls. No values.
  function diagnose() {
    try {
      const fields = Q('input:not([type=hidden]):not([type=file]), textarea, select').filter((e) => vis(e) && !ours(e)).slice(0, 60).map((e) => ({ l: labelOf(e).replace(/\s+/g, ' ').slice(0, 70), t: e.type || e.tagName.toLowerCase(), req: /\*/.test(labelOf(e)) || !!e.required, filled: e.type === 'checkbox' || e.type === 'radio' ? e.checked : !!String(e.value || '').trim(), learned: learnedValue(e.tagName === 'SELECT' ? 'selects' : 'fields', labelOf(e)) !== undefined }));
      customSelects().slice(0, 30).forEach((c) => fields.push({ l: labelOf(c).replace(/\s+/g, ' ').slice(0, 70), t: 'dropdown', req: /\*/.test(labelOf(c)), filled: !isEmptyCustom(c), learned: learnedValue('selects', labelOf(c)) !== undefined }));
      const buttons = [...new Set(Q('button, a.btn, [role="button"], input[type="submit"]').filter((b) => vis(b) && !ours(b)).map((b) => (b.innerText || b.value || '').trim().replace(/\s+/g, ' ').slice(0, 40)).filter(Boolean))].slice(0, 30);
      return { v: SB_VERSION, host: location.host, route: routeKey(), title: ((document.querySelector('h1,h2,h3,.page-title') || {}).innerText || '').trim().slice(0, 80), fields, buttons, errors: errorList().slice(0, 8), empty: emptyRequired().slice(0, 12), learnedButton: learnedButton(),
        api: NET.slice(-6).map((x) => ({ m: x.m, u: x.u.replace(/^https?:\/\/[^/]+/, ''), st: x.st, err: (x.err || '').slice(0, 300) })) };
    } catch (e) { return { error: String(e) }; }
  }
  function exportDoctor() {
    const issues = S.get('results', []).filter((r) => /BLOCKED|PAUSED/.test(r.status)).slice(-60);
    const pass = S.get('results', []).filter((r) => /PASS/.test(r.status)).slice(-60).map((r) => ({ at: r.at, env: r.env, lob: r.lob, product: r.product, ref: r.ref }));
    const out = { kind: '1sb-script-doctor', version: SB_VERSION, exportedAt: new Date().toISOString(), issues, passed: pass, learned: S.get('learned', {}), notes: S.get('learnNotes', []) };
    const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([JSON.stringify(out, null, 2)], { type: 'application/json' })); a.download = `1sb-script-doctor-v${SB_VERSION}-${new Date().toISOString().slice(0, 10)}.json`; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 2000);
    banner('Doctor', `Exported ${issues.length} issue(s) and ${['fields', 'selects', 'buttons'].reduce((s, k) => s + Object.keys((S.get('learned', {})[k]) || {}).length, 0)} learned item(s) – send the file to Claude to build the next version`);
  }
  function importLearned(file) {
    file.text().then((txt) => { try { const j = JSON.parse(txt); const inc = j.learned || j; const L = S.get('learned', {}); let n = 0;
      ['fields', 'selects', 'buttons'].forEach((k) => Object.entries(inc[k] || {}).forEach(([key, val]) => { if (!L[k]) L[k] = {}; if (!L[k][key] || (val.n || 1) >= (L[k][key].n || 1)) { L[k][key] = val; n++; } }));
      S.set('learned', L); banner('Doctor', `Imported ${n} learned item(s)`); } catch (e) { banner('Doctor', 'Not a learned-data file: ' + e.message); } });
  }

  async function fillPage() {
    if (filling) { if (Date.now() - flagAt > 20000) { filling = false; HEALTH.note('fill flag stuck for 20 s – reset'); console.warn('[SB4] fill flag stuck – reset'); } else return []; }   /* a fill that never came back (a renderer that hung) must not block every later fill of the page */ if (A().skipFill && A().skipFill()) return []; if (A().quoteCards && A().quoteCards() !== null && !A().fillOnQuote) return []; filling = true; flagAt = Date.now(); fillGen = HEALTH.gen; const log = [];
    try {
      if (A().beforeFill) await A().beforeFill(log);
      const names = byName(), labels = byLabel();
      await fillOtp(log);

      // nominee count first (reveals nominee block)
      for (const el of customSelects()) if (/number of nominee/i.test(labelOf(el)) && isEmptyCustom(el)) { const g = await pickCustom(el, '1'); if (g) log.push('nominees ' + g); await sleep(400); }

      // radios
      const radios = Q('input[type="radio"]').filter((r) => (vis(r) || vis(r.closest('label')) || vis(r.parentElement)) && !ours(r));
      const rk = (r) => radioKey(r);
      const answered = (k) => radios.some((r) => r.checked && rk(r) === k);
      for (const n of [...new Set(radios.map(rk))]) {
        if (!n) continue;
        { const grpAll = radios.filter((r) => rk(r) === n && !r.disabled);                                   // workbook value for this question wins over every rule below
          if (grpAll.length >= 2) { const rl = radioLabel(grpAll[0], n, grpAll); const sv = sheetValue(rl, 'radio');
            if (sv !== undefined && sv !== '') { const hit = grpAll.find((r) => LKEY(labelOf(r)) === LKEY(sv) || norm(r.value) === norm(sv)) || grpAll.find((r) => LKEY(labelOf(r)).includes(LKEY(sv)));
              if (hit) { if (!hit.checked) { (hit.closest('label') || hit).click(); if (!hit.checked) hit.click(); log.push(`radio ${n}=${sv} (workbook)`); } flNote('radio', rl, labelOf(hit) || hit.value, grpAll.map((r) => labelOf(r) || r.value), 'workbook'); continue; }
              log.push(`workbook value "${sv}" not among the options of ${rl}`); }
            const on = grpAll.find((r) => r.checked); if (on && !sv) flNote('radio', rl, labelOf(on) || on.value, grpAll.map((r) => labelOf(r) || r.value), 'portal'); } }
        if (answered(n)) {                                   // already answered (portal default / prefill): a risk question left on Yes is flipped to No once
          const on = radios.find((r) => r.checked && rk(r) === n); const grp = radios.filter((r) => rk(r) === n && !r.disabled);
          const qt = n + ' ' + labelOf(on) + ' ' + qTextOf(on);
          if (on && grp.length >= 2 && !on.dataset.sbNoFix && /^(1|y|yes|true)$/i.test(on.value || '') && NO_Q.test(qt) && !DECL_Q.test(qt.slice(0, 260))) {
            const no = grp.find((r) => /^(0|n|no|false)$/i.test(r.value || '') || /^\s*no\s*$/i.test(labelOf(r)));
            if (no) { on.dataset.sbNoFix = '1'; (no.closest('label') || no).click(); if (!no.checked) no.click(); log.push(`radio ${n}: Yes→No`); }
          } else if (on && grp.length >= 2 && !on.dataset.sbYesFix && /^(0|n|no|false)$/i.test(on.value || '') && DECL_Q.test(qt.slice(0, 260))) {   // a good-health declaration left on No (portal default) blocks the journey ("We cannot continue…") – it is a declaration, so Yes
            const yes = grp.find((r) => /^(1|y|yes|true)$/i.test(r.value || '') || /^\s*yes\s*$/i.test(labelOf(r)));
            if (yes) { on.dataset.sbYesFix = '1'; (yes.closest('label') || yes).click(); if (!yes.checked) yes.click(); log.push(`radio ${n}: declaration No→Yes`); }
          }
          continue;
        }
        const group = radios.filter((r) => rk(r) === n && !r.disabled);
        if (group.length < 2) continue;                    // lone radio = a tab/segment (category etc.), never auto-click
        const gw = inNominee(group[0]) ? P.nominee.gender : inSpouse(group[0]) ? P.spouse.gender : P.gender;
        const g = group.find((r) => new RegExp('^\\s*' + gw + '\\s*$', 'i').test(labelOf(r)) || norm(r.value) === norm(gw));
        if (g) { (g.closest('label') || g).click(); log.push('gender ' + n); continue; }
        const qtext = qTextOf(group[0]);
        const lab = labelOf(group[0]) + ' ' + n + (DECL_Q.test(qtext.slice(0, 260)) ? ' good health declaration' : '');
        let pick = null;
        { const grpLabel = labelOf(group[0].closest('fieldset, [role=radiogroup], .form-group, .mb-3') || group[0].parentElement) || ''; const lv = grpLabel && grpLabel.trim().length > 5 && !/^(yes|no|y|n|true|false)$/i.test(grpLabel.trim()) && !NO_Q.test(qtext) && learnedDb().selects[lobKey() + '|radio:' + LKEY(grpLabel).slice(0, 60)];   // a learned answer never applies to a bare yes/no key or to a risk question
          if (lv) pick = group.find((r) => LKEY(labelOf(r)) === LKEY(fromToken(lv.v))) || null; }
        if (yesLabel.test(lab) || (qtext.length < 160 && yesLabel.test(qtext))) pick = group.find((r) => /^(1|y|yes|true)$/i.test(r.value) || /^yes$/i.test(labelOf(r).trim()));
        if (!pick) pick = group.find((r) => /^(0|n|no|false)$/i.test(r.value) || /^\s*no\s*$/i.test(labelOf(r)));
        if (!pick && A().radioPick) pick = A().radioPick(group, lab);
        let guessed = false; if (!pick) { pick = group[0]; guessed = true; }
        if (pick) { (pick.closest('label') || pick).click(); if (!pick.checked) pick.click(); log.push(`radio ${n}=${pick.value}`); if (guessed) healNote(pick, radioLabel(group[0], n, group), 'radio', labelOf(pick) || pick.value); flNote('radio', radioLabel(group[0], n, group), labelOf(pick) || pick.value, group.map((r) => labelOf(r) || r.value)); }
      }
      await sleep(200);

      // text-like inputs
      for (const el of Q('input:not([type="radio"]):not([type="checkbox"]):not([type="hidden"]):not([type="password"]):not([type="file"]):not([type="submit"]):not([type="button"]), textarea')) {
        if (!vis(el) || el.readOnly || ours(el)) continue;
        if (el.getAttribute('aria-hidden') === 'true' || (el.tabIndex === -1 && el.parentElement && el.parentElement.querySelector('[role="combobox"], [data-slot="select-trigger"]'))) continue;   // the hidden value input behind a headless-UI select
        if (el.getAttribute('role') === 'combobox' && el.getAttribute('aria-autocomplete') !== 'both' && !el.classList.contains('p-datepicker-input') && !/date/i.test(el.name || '')) continue;
        if (el.closest('.p-select, .p-dropdown, .react-select__control, div[class*="-control"]:has([class*="indicatorContainer"]), .vs__dropdown-toggle, .ng-select-container, .MuiAutocomplete-root, .multiselect')) continue;
        if (isFilterBox(el)) continue;                                                        // the search box inside an open dropdown is not a form field
        const name = norm(el.name || el.id || ''), label = labelOf(el);
        if (el.disabled) { if (/bankname/.test(name) && !el.value) { el.disabled = false; setNative(el, P.bank.name); log.push('bankName forced'); } continue; }
        if (/captcha|password/i.test(label + name) || el.type === 'password') continue;      // never fill captcha / passwords
        if (isOtp(el)) continue;                                                              // OTP boxes are filled by fillOtp()
        if (inNominee(el) && /^(email|mobilenumber)$/.test(name) && (el.value === P.email || el.value === P.phone || !el.value)) { setNative(el, /email/.test(name) ? P.nominee.email : P.nominee.phone); log.push('nominee ' + name); continue; }
        if (inNominee(el) && el.value && /first ?name|^firstname/i.test(label + ' ' + name) && el.value.trim().toLowerCase() === String(P.first).toLowerCase()) { const lv = learnedValue('fields', label, el); setNative(el, lv || P.nominee.first); log.push('nominee first name (was the proposer\'s)'); continue; }   // a nominee prefilled with the proposer's own name is rejected ("as per valid Id Proof")
        if (inNominee(el) && el.value && /last ?name|surname|^lastname/i.test(label + ' ' + name) && el.value.trim().toLowerCase() === String(P.last).toLowerCase() && learnedValue('fields', label, el)) { setNative(el, learnedValue('fields', label, el)); log.push('nominee last name (learned)'); continue; }
        { const sv = sheetValue(label || name, el.type === 'date' ? 'date' : 'text');                                                   // workbook value: written once, even over a prefilled value
          if (sv !== undefined) { if (el.dataset.sbSheet) continue; el.dataset.sbSheet = '1'; flNote('text', label || name, sv, null, 'workbook');
            if (sv === '') { if (el.value) { setNative(el, ''); log.push(`${label || name} cleared (workbook)`); } continue; }
            let v = sv; if (el.type === 'date') { const m = v.match(/^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/); if (m) v = `${m[3]}-${pad(+m[2])}-${pad(+m[1])}`; } else if (/^\d{4}-\d{2}-\d{2}$/.test(v) && /date|dob|birth/i.test(label + ' ' + name)) v = fmtDateLike(el, v);
            if (el.value === v) continue;
            if (el.closest('.react-datepicker-wrapper, .react-datepicker__input-container')) { el.focus(); Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set.call(el, v); el.dispatchEvent(new InputEvent('input', { bubbles: true, inputType: 'insertText', data: v })); el.dispatchEvent(new Event('change', { bubbles: true })); await sleep(150); el.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', keyCode: 13, bubbles: true })); closeOverlays(); }
            else if (el.type === 'date') setNative(el, v);
            else if (el.classList.contains('p-datepicker-input')) { await typeInto(el, v); el.dispatchEvent(new Event('blur', { bubbles: true })); await sleep(150); }
            else if (el.type === 'tel' || /mob|phone|pin|zip|reg|date|dob/i.test(name + ' ' + label) || el.inputMode === 'numeric') await typeInto(el, v);
            else setNative(el, v);
            log.push(`${label || name} <- ${v} (workbook)`); continue; } }
        const landingFresh = running() && isLanding() && sessionStorage.getItem('sb4_landing') !== String(cfg().fresh || '');   // first page of a new journey: the portal may prefill the RM's own details – the test person wins
        if (el.value && el.value.replace(/^\+91\s?/, '').trim() && !landingFresh) {                   // prefilled by the portal: keep it unless it is plainly invalid (e.g. an OTP left in the mobile box)
          const v = el.value.replace(/^\+91\s?/, '').trim(); const lb = label + ' ' + name; let bad = false;
          if (/mobile|phone|contact/i.test(lb) && !/landline|std|alternate/i.test(lb)) bad = !/^[6-9]\d{9}$/.test(v);
          else if (/pin ?code|pincode|zip/i.test(lb)) bad = !/^\d{6}$/.test(v);
          else if (/e-?mail/i.test(lb)) bad = !/^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(v);
          const fx = learnedFix(label || name, el); if (fx && (fx.rej || []).some((r) => String(r).toLowerCase() === v.toLowerCase()) && fromToken(fx.v) !== v) { setNative(el, fromToken(fx.v)); el.dataset.sbFixed = '1'; log.push(`${label || name}: "${v}" was rejected last time -> ${fromToken(fx.v)} (learned)`); continue; }   // the portal prefilled a value it rejected in an earlier run: the learned correction goes in at once
          if (!bad || el.dataset.sbFixed) { if (!el.dataset.sbNoted) { el.dataset.sbNoted = '1'; flNote(el.type === 'date' ? 'date' : 'text', label || name, v, null, 'portal'); } continue; } el.dataset.sbFixed = '1'; log.push(`${label || name}: invalid "${v}" replaced`);
        }
        let val = null;
        const nomi = inNominee(el), spo = inSpouse(el), fam = !nomi && !spo && inFamily(el);
        if (A().valueFor) val = A().valueFor(el, name, label);
        if ((val === null || val === undefined) && fam) {        // "Family Member-N" blocks (Tata family history): another person – a sibling named like the proposer is refused ("no special characters allowed"), DOB from the "current age" in the same block
          const blk = el.closest('.card, .row, fieldset, section, [class*="family"], .col-12') || el.parentElement.parentElement; const ageIn = Q('input', blk).find((i) => /current age|\bage\b/i.test(labelOf(i)) && /^\d{1,3}$/.test(i.value || '')); const age = ageIn ? +ageIn.value : 55;
          const fem = /female/i.test(Q('select, [role=combobox], .p-select, .multiselect', blk).map((x) => x.tagName === 'SELECT' ? (x.options[x.selectedIndex] || {}).text || '' : x.textContent).join(' ')) || /sister|mother|daughter|wife/i.test(blk.innerText || '');
          if (/first/i.test(label) || /^firstname$/.test(name)) val = fem ? 'Priya' : 'Rohit';
          else if (/middle/i.test(label)) val = '';
          else if (/last|surname/i.test(label)) val = P.last;
          else if (el.type === 'date' || /birth|dob/i.test(label + name)) { const d = new Date(); d.setFullYear(d.getFullYear() - age); d.setMonth(5, 15); const y = d.getFullYear();
            if (el.type === 'date') { setNative(el, `${y}-06-15`); log.push(`${label} family dob`); flNote('date', label || name, `15-06-${y}`); continue; } await typeInto(el, /\//.test(el.placeholder || '') ? `15/06/${y}` : `15-06-${y}`); log.push(`${label} family dob`); flNote('date', label || name, `15-06-${y}`); continue; }
        }
        if ((val === null || val === undefined) && el.type !== 'date' && !/birth|\bdob\b|\bage\b|\bpan\b|aadh|mobile|phone|e-?mail/i.test(label + ' ' + name)) { /* identity-type fields always come from the test person, never from learned data */ const lv = learnedValue('fields', label, el); if (lv !== undefined && lv !== '') { val = lv; log.push('learned ' + label); } }
        if (val === null || val === undefined) {
          if (el.type === 'date' && !/expir|\bend\b|till|valid|issue|proposal|policy|start|commence|joining|purchase|registration|effective/i.test(label + ' ' + name)) val = nomi ? P.nominee.dobISO : spo ? P.spouse.dobISO : P.dobISO;
          else if (/birth|dob/i.test(label + name) && !/place/i.test(label + name)) { const d = nomi ? P.nominee.dobISO : spo ? P.spouse.dobISO : P.dobISO; if (el.closest('.react-datepicker-wrapper, .react-datepicker__input-container')) { el.focus(); Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set.call(el, fmtDateLike(el, d)); el.dispatchEvent(new InputEvent('input', { bubbles: true, inputType: 'insertText', data: fmtDateLike(el, d) })); el.dispatchEvent(new Event('change', { bubbles: true })); await sleep(150); el.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', keyCode: 13, bubbles: true })); closeOverlays(); }   // react-datepicker: the whole date in one go – an empty value in between makes some forms crash on a null date
            else await typeInto(el, fmtDateLike(el, d)); log.push(`${label} dob`); flNote('date', label || name, fmtDateLike(el, d)); continue; }
          else if ((/date/i.test(label + ' ' + name) || el.type === 'date') && !/birth|dob/i.test(label + ' ' + name)) {
            const d = new Date(); if (/expir|valid/i.test(label) && /policy|damage|third|\btp\b|\bod\b|insur|cover/i.test(label + ' ' + sectionTitle(el))) d.setDate(d.getDate() + 10); else if (/expir|valid/i.test(label)) d.setFullYear(d.getFullYear() + 5); else if (/\bend\b|till/i.test(label)) d.setDate(d.getDate() + 15); else if (/registration|purchase|invoice|bought|manufactur|delivery/i.test(label)) { d.setFullYear(d.getFullYear() - 2); d.setMonth(5, 15); } else if (/previous|last|start of previous/i.test(label)) d.setFullYear(d.getFullYear() - 1);
            const dd = pad(d.getDate()), mm = pad(d.getMonth() + 1), yy = d.getFullYear();
            if (el.type === 'date') { setNative(el, `${yy}-${mm}-${dd}`); } else { await typeInto(el, /\//.test(el.placeholder || '') ? `${dd}/${mm}/${yy}` : `${dd}-${mm}-${yy}`); if (el.classList.contains('p-datepicker-input')) { el.dispatchEvent(new Event('blur', { bubbles: true })); await sleep(150); } }
            log.push(`${label} date`); flNote('date', label || name, `${dd}-${mm}-${yy}`); continue;
          }
          else if (nomi && /first/i.test(label)) val = P.nominee.first;
          else if (spo && /first|name/i.test(label)) val = P.spouse.first;
          else if (names[name] !== undefined) val = names[name];
          else { const h = labels.find(([re]) => re.test(label)); if (h) val = typeof h[1] === 'function' ? h[1]() : h[1]; }
        }
        if ((val === null || val === undefined || val === '') && /\*/.test(label) && el.type !== 'date' && !/\b(no|number|code|id|pan|account|ifsc|pin|zip|amount|income|salary|premium|otp|date|dob|mobile|phone|email)\b/i.test(label + ' ' + name) && (el.maxLength < 0 || el.maxLength >= 4)) {
          val = 'NA'; log.push('guess "NA" for unknown required field: ' + label); teachNote(`Unknown field "${label.replace(/\*/g, '').trim()}" – filled "NA"; type the right value to teach me`); healNote(el, label, 'fields', val);   // last resort: a visible guess the tester can correct (and the script will learn)
        }
        if (val === null || val === undefined || val === '') { if (/\*/.test(label)) log.push('SKIP required: ' + label); continue; }
        if (el.classList.contains('p-datepicker-input')) { await typeInto(el, String(val)); el.dispatchEvent(new Event('blur', { bubbles: true })); await sleep(150); }   // PrimeVue date picker parses on blur
        else if (el.type === 'tel' || /mob|phone|pin|zip|reg/i.test(name) || el.inputMode === 'numeric') await typeInto(el, String(val));
        else setNative(el, String(val));
        log.push(`${label || name} <- ${val}`); flNote(el.type === 'date' ? 'date' : 'text', label || name, el.type === 'date' ? String(val).replace(/^(\d{4})-(\d{2})-(\d{2})$/, '$3-$2-$1') : val);
      }

      // custom dropdowns (2 passes: dependent lists re-render)
      for (let pass = 0; pass < 2; pass++) {
        const wants = selectWants();
        for (const el of customSelects()) {
          if (isDisabledCustom(el)) continue;
          { const lb0 = labelOf(el); const multi = el.getAttribute('aria-multiselectable') === 'true' || !!el.querySelector('[aria-multiselectable="true"]') || /multiselect/.test(el.className);
            if (!/\*/.test(lb0) && (multi || /if any|ailment|disease|illness|condition|disorder|optional|\(if\b/i.test(lb0))) continue; }   // optional medical / ailment pickers stay empty – choosing one would trigger underwriting
          { const lbs = labelOf(el); const sv = sheetValue(lbs, 'select');                                   // workbook value for this dropdown
            if (sv !== undefined) { if (sv === '') continue; const cur = isEmptyCustom(el) ? '' : el.textContent.replace(/[▼▾⌄]/g, ' ').trim();
              if (cur && (LKEY(cur) === LKEY(sv) || LKEY(cur).includes(LKEY(sv)))) { flNote('select', lbs, cur, null, 'workbook'); continue; }
              if (el.dataset.sbSheetTry >= 2) continue; el.dataset.sbSheetTry = String((+el.dataset.sbSheetTry || 0) + 1);
              const got = await pickCustom(el, sv); if (got) { log.push(`${lbs} -> ${got} (workbook)`); flNote('select', lbs, got, null, 'workbook'); } else log.push(`workbook value "${sv}" not found in ${lbs}`); continue; }
            if (!isEmptyCustom(el) && !el.dataset.sbNoted) { el.dataset.sbNoted = '1'; flNote('select', lbs, el.textContent.replace(/[▼▾⌄]/g, ' ').trim().slice(0, 80), null, 'portal'); } }
          if (!isEmptyCustom(el)) {           // preset value: only correct an age that does not match the profile
            const lb = labelOf(el); if (!(/\bage\b/i.test(lb) && !/age proof|till age|cover till|up ?to age|pay for|policy term|premium|maturity|retire/i.test(lb) && /^\s*\d+\s*(year|yr)/i.test(el.innerText) && el.dataset.sbAge !== '1' && !/spouse|son|daughter|father|mother/i.test((el.closest('.row, .card, li') || el).innerText))) continue;
            el.dataset.sbAge = '1'; if (parseInt(el.innerText) === P.age) continue;
          }
          const label = labelOf(el); let want;
          if (A().selectFor) want = A().selectFor(el, label);
          if (want === undefined) want = learnedValue('selects', label, el);
          if (want === undefined && inNominee(el)) { if (/gender/i.test(label)) want = P.nominee.gender; else if (/relation/i.test(label)) want = P.nominee.relation; else if (/title|salutation/i.test(label)) want = P.nominee.gender === 'Female' ? (/wife|mother|spouse/i.test(P.nominee.relation) ? ['Mrs', 'Ms'] : ['Ms', 'Miss', 'Mrs']) : 'Mr'; }
          if (want === undefined && /title|salutation/i.test(label)) { const col = el.closest('[class*="col-"], .form-control1, .field, .form-group') || el.parentElement; const near = [col, col && col.previousElementSibling, col && col.nextElementSibling].map((x) => (x && x.innerText) || '').join(' ');
            if (inSpouse(el) || /spouse|wife|husband/i.test(near)) want = P.spouse.gender === 'Female' ? ['Mrs', 'Ms'] : 'Mr'; }
          if (want === undefined && /title|salutation/i.test(label)) { const blk = blockText(el); if (/sister|mother|daughter|wife|aunt|female/i.test(blk)) want = ['Ms', 'Mrs', 'Miss']; else if (/brother|father|son|husband|uncle|male/i.test(blk)) want = 'Mr'; }
          if (want === undefined && (/\bage\b/i.test(label) || (/^age$|[-_]age$/i.test(el.id || '') && !label)) && !/age proof|stage|percentage|message|average|till age|cover till|up ?to age|pay for|policy term|premium|maturity|retire/i.test(label)) {      // member age must match the DOB used later (not "Cover till age" / "Pay for")
            const idm = (el.id || '').match(/^(self|spouse|son|daughter|father|mother|child)/i);
            const blk = idm ? idm[1] : ((el.closest('.row, .card, li, tr, [class*="member"]') || el.parentElement).innerText || '');
            const a = /spouse|wife|husband/i.test(blk) ? P.age - 1 : /son|daughter|child|kid/i.test(blk) ? 8 : /father|mother|parent/i.test(blk) ? P.age + 28 : P.age;
            want = [`${a} Year`, `${a} Years`, `${a} Yrs`, String(a)];
          }
          if (want === undefined && /gender/i.test(label)) { const blk = blockText(el); if (/sister|mother|daughter|wife|aunt/i.test(blk)) want = 'Female'; else if (/brother|father|son|husband|uncle/i.test(blk)) want = 'Male'; }
          if (want === undefined) { const h = wants.find(([re]) => re.test(label)); want = h ? h[1] : undefined; }
          const got = await pickCustom(el, want); if (got) { log.push(`${label || el.id} -> ${got}`); flNote('select', label || el.id, got, liveOptsText(el)); if (want === undefined || ![].concat(want).some((w) => got.toLowerCase().includes(String(w).toLowerCase()))) healNote(el, label || el.id, 'selects', got); }
        }
        await sleep(300);
      }
      // native selects
      for (const s of Q('select')) {
        if (!usable(s) || ours(s)) continue;
        const cur = s.options[s.selectedIndex]; const lbs = labelOf(s); const sv = sheetValue(lbs, 'select');
        if (sv !== undefined) { if (sv === '') continue; const o = [...s.options].find((x) => LKEY(x.text) === LKEY(sv) || x.value === sv) || [...s.options].find((x) => LKEY(x.text).includes(LKEY(sv)));
          if (!o) { if (!s.dataset.sbSheetMiss) { s.dataset.sbSheetMiss = '1'; log.push(`workbook value "${sv}" not among the options of ${lbs}`); } } else if (s.value !== o.value) { setNative(s, o.value); log.push(`${lbs} -> ${o.text} (workbook)`); flNote('select', lbs, o.text, [...s.options].map((x) => x.text), 'workbook'); }
          continue; }
        if (s.value && !['0', '-1'].includes(s.value) && cur && !cur.disabled && !/^\s*(select|choose|please select|--)\b|^\s*-+\s*$|^\s*(mfg|year|month|day)\b.*$/i.test(cur.text)) { if (!s.dataset.sbNoted) { s.dataset.sbNoted = '1'; flNote('select', lbs, cur.text, [...s.options].map((x) => x.text), 'portal'); } continue; }
        const label = lbs; let want = A().selectFor ? A().selectFor(s, label) : undefined; if (want === undefined) want = learnedValue('selects', label);
        if (want === undefined) { const h = selectWants().find(([re]) => re.test(label)); want = h ? h[1] : undefined; }
        const opts = [...s.options].filter((o) => o.value && !['0', '-1'].includes(o.value) && !o.disabled && !/^\s*(select|choose|--)/i.test(o.text));
        let o = want !== undefined && opts.find((x) => [].concat(want).some((w) => x.text.trim().toLowerCase().includes(String(w).toLowerCase())));
        const wanted = !!o; if (!o) o = opts.find((x) => !/\bnri\b|non.?resident|foreign|overseas|others?$|not applicable|\b(crpf|bsf|cisf|itbp|army|navy|air ?force|police|defen[cs]e|military|paramilitary|armed)\b/i.test(x.text)) || opts[0];
        if (o) { setNative(s, o.value); log.push(`${label} -> ${o.text}`); flNote('select', label, o.text, opts.map((x) => x.text)); if (!wanted) healNote(s, label, 'selects', o.text); }
      }
      // uploads – when the portal / insurer rejected the last document, the next one is adapted to the complaint (smaller, other format, other type)
      const upRoute = (location.hash || location.pathname).split('?')[0]; const upKey = 'sb4_docvar_' + upRoute; let docVar = +(sessionStorage.getItem(upKey) || 0);
      { const lastTry = +(sessionStorage.getItem(upKey + '_t') || 0);
        const bad = NET.slice(-12).find((x) => x.t > lastTry && /upload|document|ocr|kyc/i.test(x.u) && (x.st >= 400 || (x.err && /size|large|exceed|format|invalid|not (a )?valid|blur|clear|readable|detect|unsupported|corrupt|mismatch|not match|does not match/i.test(x.err))));
        const pageErr = !bad && lastTry && Date.now() - lastTry > 4000 && errorList().find((m) => /size|large|exceed|format|invalid (file|document|image)|not (a )?valid|blur|clear|readable|detect|unsupported|corrupt|mismatch|does not match/i.test(m));
        if ((bad || pageErr) && docVar < 5) { docVar++; sessionStorage.setItem(upKey, String(docVar)); sessionStorage.setItem(upKey + '_t', String(Date.now()));
          const why = bad ? (bad.err || ('HTTP ' + bad.st)) : pageErr; log.push(`document rejected (${String(why).slice(0, 80)}) – trying variant ${docVar}`); banner('Documents', `Upload rejected: ${String(why).slice(0, 90)} – trying ${DOC_VARIANTS[docVar]}`);
          Q('input[type="file"]').forEach((e) => { attached.delete(e); try { e.value = ''; } catch (_) {} });
          if (docVar === 4) for (const s of customSelects().concat(Q('select'))) { const lb = labelOf(s); if (/proof|document type|id type|kyc/i.test(lb)) { const cur = s.tagName === 'SELECT' ? (s.options[s.selectedIndex] || {}).text : s.textContent; const alt = /aadh/i.test(cur || '') ? ['PAN', 'Passport', 'Voter', 'Driving'] : ['Aadhaar', 'Passport', 'Voter', 'Driving']; if (s.tagName === 'SELECT') { const o = [...s.options].find((x) => alt.some((a) => new RegExp(a, 'i').test(x.text))); if (o) { setNative(s, o.value); log.push(`${lb} -> ${o.text}`); } } else await pickCustom(s, alt); } }   // the other proof type
          await sleep(600); }
      }
      for (const f of Q('input[type="file"]').filter((e) => !e.disabled && !attached.has(e) && !ours(e) && (vis(e) || vis(e.parentElement) || vis(e.closest('label'))))) {
        attached.add(f); if (!sessionStorage.getItem(upKey + '_t')) sessionStorage.setItem(upKey + '_t', String(Date.now()));
        let card = f.parentElement; const allSel = customSelects().concat(Q('select'));          // smallest ancestor that holds exactly one document-type picker = this upload's own card
        for (let i = 0; i < 8 && card && card !== document.body; i++) { const n = allSel.filter((c) => card.contains(c)).length; if (n >= 1) break; card = card.parentElement; }
        const own = card && allSel.filter((c) => card.contains(c)).length === 1 ? card : null;
        const chosen = own ? allSel.filter((c) => own.contains(c)).map((c) => c.tagName === 'SELECT' ? ((c.options[c.selectedIndex] || {}).text || '') : (isEmptyCustom(c) ? '' : c.textContent.replace(/[▼▾⌄]/g, ' '))).join(' ').trim() : '';
        const svf = sheetValue(labelOf(f) || f.name || f.id || sectionTitle(f), 'file'); if (svf === '') { log.push('upload skipped (workbook): ' + (labelOf(f) || f.id)); continue; }
        const what = (svf ? svf + ' ' : '') + (chosen ? chosen + ' ' : '') + (labelOf(f) + ' ' + (f.name || '') + ' ' + (f.id || '') + ' ' + sectionTitle(f) + ' ' + (own ? (own.innerText || '').slice(0, 120) : '')).replace(/\s+/g, ' ').trim();   // the document type chosen in the same card (Proof of Address → Aadhaar) decides the specimen
        const acc = (f.accept || '').toLowerCase(); const pdfOnly = /pdf/.test(acc) && !/image|jpe?g|png/.test(acc);
        const isPhoto = docKind(what) === 'photo';
        let file = pdfOnly ? new File([makePdf(what)], 'kyc-document.pdf', { type: 'application/pdf' })
          : new File([await makeJpg(isPhoto ? 'photo' : (what || 'KYC document'), !isPhoto)], (isPhoto ? 'photo' : docKind(what)) + '.jpg', { type: 'image/jpeg' });
        if (docVar && !pdfOnly) { try { file = await adaptDoc(file, docVar, what); log.push('variant ' + DOC_VARIANTS[docVar] + ' ' + file.name + ' ' + Math.round(file.size / 1024) + 'kB'); } catch (e) { console.log('[SB4] adaptDoc', e.message); } }
        const dt = new DataTransfer(); dt.items.add(file);
        f.files = dt.files; f.dispatchEvent(new Event('change', { bubbles: true })); f.dispatchEvent(new Event('input', { bubbles: true })); log.push('upload ' + (labelOf(f) || f.id)); flNote('file', labelOf(f) || f.name || f.id || sectionTitle(f), svf || (pdfOnly ? 'pdf' : isPhoto ? 'photo' : docKind(what)), ['pan', 'aadhaar', 'photo', 'passport', 'voter', 'driving', 'bank', 'income', 'pdf'], svf ? 'workbook' : 'script');
      }
      // checkboxes – workbook first (Yes / No), then the declaration rules
      for (const c of Q('input[type="checkbox"]').filter((c) => (vis(c) || vis(c.parentElement)) && !c.disabled && !ours(c))) {
        const lbl = c.id ? document.querySelector(`label[for="${CSS.escape(c.id)}"]`) : null; const own = (labelOf(c) + ' ' + (lbl ? lbl.innerText : '')).replace(/\s+/g, ' ').trim() || ((c.parentElement && c.parentElement.innerText) || '').replace(/\s+/g, ' ').trim().slice(0, 80);
        const sv = sheetValue(own, 'checkbox'); if (sv === undefined) continue; c.dataset.sbSheet = '1';
        const want = /^(y|yes|true|1|on|check|tick)/i.test(sv); if (c.checked !== want) { (lbl || c).click(); if (c.checked !== want) c.click(); log.push(`checkbox ${own.slice(0, 40)} = ${want ? 'Yes' : 'No'} (workbook)`); }
        flNote('checkbox', own, want ? 'Yes' : 'No', ['Yes', 'No'], 'workbook');
      }
      for (const c of Q('input[type="checkbox"]').filter((c) => (vis(c) || vis(c.parentElement)) && !c.checked && !c.disabled && !ours(c) && !c.dataset.sbSheet)) {
        const lbl = c.id ? document.querySelector(`label[for="${CSS.escape(c.id)}"]`) : null;
        const own = labelOf(c) + ' ' + (lbl ? lbl.innerText : '');
        const full = own + ' ' + ((c.parentElement && c.parentElement.innerText) || '');
        const isDecl = /\*\s*$/.test(own.trim()) || /declar|certify|i agree|agree to|consent|authori[sz]|explained|understood|true and correct|correct and valid|accept|terms and|terms &|t&c|allowed to share|share my personal|standing instruction/i.test(own) || (kycDefer() && /customer complete kyc/i.test(own))
          || /\b(i\s*\/?\s*we|i)\s+(hereby\s+)?(declare|agree|confirm|authori[sz]e|understand|accept|acknowledge)/i.test(full.replace(/\s+/g, ' ').slice(0, 400)) || /disclaimer|declaration|consent|terms/i.test(c.className + ' ' + ((c.parentElement || {}).className || ''));   // DIY review pages: an unlabeled checkbox beside a long "I/We declare…" disclaimer (the text mentions "premium", so it must not look like a priced add-on)
        if (!isDecl && /₹|rs\.?\s?\d|premium|add to compare|compare|rider|add-?on|cover\b|whatsapp|newsletter|promotional|marketing|select plan/i.test(full)) { if (!c.dataset.sbNoted && own.trim()) { c.dataset.sbNoted = '1'; flNote('checkbox', own.replace(/\s+/g, ' ').trim().slice(0, 80), 'No', ['Yes', 'No'], 'portal'); } continue; }   // optional priced add-ons / compare / opt-ins (noted for the workbook, where "Yes" turns them on)
        if (c.getAttribute('role') === 'switch' && !/kyc|declar|agree|consent/i.test(own) || /theme|dark|mode-toggle|night/i.test(c.className + ' ' + (c.parentElement || {}).className + ' ' + c.id) || c.closest('header, nav, .navbar, [class*="header"]')) continue;   // theme / UI switches
        const deferBox = /customer complete kyc|complete kyc later|skip kyc|defer.*kyc/i.test(own + ' ' + c.id);
        if (deferBox && !kycDefer()) continue;                    // KYC mode "fill": do the KYC ourselves
        if (isDecl || deferBox || /declare|certify|agree|confirm|consent|authori|allowed to share|share my personal|standing instruction|ecs|income tax|pan details|explained|understood|correct and valid|true and correct|accept|terms/i.test(full) || /^declaration-/.test(c.id)) { (lbl || c).click(); if (!c.checked) c.click(); log.push('check ' + full.trim().slice(0, 40)); flNote('checkbox', own.replace(/\s+/g, ' ').trim() || full.replace(/\s+/g, ' ').trim().slice(0, 80), 'Yes', ['Yes', 'No']); }
      }
      await fixFromErrors(log);
      if (A().afterFill) await A().afterFill(log);
      { const c0 = cfg(); if (c0.fromSheet && c0.gsRow && S.get('probe', true) && !netBusy()) await probeConditionals(log); }   // dashboard runs only (v5.32.1): which fields a Yes would reveal (once per question) → "Scenarios – <LOB>" tab; an ordinary journey never touches a radio twice
    } catch (e) { console.warn('[SB4] fill error', e); } finally { filling = false; selfUntil = Date.now() + 2500 * SPEED(); }
    if (log.length) { console.log('[SB4]', HERE.lob, location.hash, log); flFlush(); }
    return log;
  }

  /* ---------------- run config ---------------- */
  // cfg = { mode:'assisted'|'diy', env, lob, category, product, queue:[product...], batch:true|false }
  const cfg = () => S.get(CFGK(), {});
  const setCfg = (c) => S.set(CFGK(), Object.assign(cfg(), c));
  const advanceOn = () => S.get(ADVK(), true);
  const OTP = () => String(S.get('otp', '234567') || '234567');                    // default test OTP for every portal
  const kycDefer = () => S.get('kycMode', 'fill') === 'defer' || sessionStorage.getItem('sb4_kycdefer') === '1';

  /* ---------------- issues / results log (shared across portals via GM) ---------------- */
  let recExtra = null;   // extra fields for the next recorded result (premium of a test-case quote …)
  function quotePremium(q) { try { if (!q) return ''; const tp = q.totalPremiumDetails || (q.productDetails && q.productDetails.totalPremiumDetails); const arr = Array.isArray(tp) ? tp : tp ? [tp] : []; for (const t of arr) { const v = t.premiumValue || t.totalPremiumValue || t.totalPremium || t.value; if (v) return String(v); } const m = JSON.stringify(q).match(/"(?:totalPremium(?:Value)?|premiumValue|annualPremium|totalPremiumAmount)"\s*:\s*"?(\d+(?:\.\d+)?)/); return m ? m[1] : ''; } catch (e) { return ''; } }
  function record(status, msg, extra) {
    const c = cfg(); const list = S.get('results', []);
    const page = (document.querySelector('h1,h2,h3,.page-title,.step.active,.p-steps-item-active') || {}).innerText || '';
    const errs = errorList();
    const uiErrors = (() => { try { const alerts = Q('[role="alert"], .toast, .toast-body, .p-toast-message-text, .swal2-html-container, .alert-danger, .alert-error, .error-banner, .v-snack__content, .MuiAlert-message, .ant-message, .notification, [class*="error-message"], [class*="errorMessage"], [class*="error_msg"], .text-danger, .modal.show .modal-body, [role="dialog"] .modal-body').filter((x) => vis(x) && !ours(x)).map((x) => x.innerText.replace(/\s+/g, ' ').trim()).filter((t) => t && t.length < 400 && /error|fail|unable|invalid|not |sorry|wrong|cannot|can't|try again|issue|rejected|denied|expired|exceed|minimum|maximum|required/i.test(t)); return [...new Set(alerts.concat(errs))].slice(0, 8); } catch (e) { return errs.slice(0, 8); } })();
    const known = Object.values((CATS()[HERE.env + '|' + HERE.lob] || {}).products || {}).flat(); const bt = document.body.innerText;
    const prodName = (c.product && c.product !== '*' ? c.product : '') || (A().productName && A().productName()) || known.find((k) => bt.includes(k)) || c.product || '';
    if (!extra && recExtra) { extra = recExtra; recExtra = null; }
    const entry = { at: new Date().toISOString(), env: HERE.env, mode: c.mode || '', lob: HERE.lob, category: c.category || '', product: prodName, status, step: location.hash || location.pathname, page: page.trim().slice(0, 80), msg: (c.scenario ? '[' + c.scenario + '] ' : '') + msg, scenario: c.scenario || '', errors: [...new Set(errs)].slice(0, 6), uiErrors, ref: (document.body.innerText.match(/JID-[A-Z0-9-]+|(?:proposal|application|policy|reference)\s*(?:no|number)?\.?\s*[:#-]?\s*([A-Z0-9-]{6,})/i) || [''])[0], ...(extra || {}) };
    const api = /^PASS|PAUSED/.test(status) ? '' : netSummary(); if (api) entry.api = api.slice(0, 600);
    entry.profile = `${P.first} ${P.last}, ${P.gender}, age ${P.age}, income ${P.income}, pin ${P.pin}`; entry.journey = c.fresh || 0; entry.startedAt = c.startedAt || 0;
    try { const H = S.get('heals', []).filter((h) => h.at >= new Date(c.startedAt || 0).toISOString()); if (H.length) entry.healed = H.map((h) => h.route.replace(/^#\/?/, '/') + ': ' + h.fields.join(', ')).slice(-8); } catch (e) {}
    if (c.variation) { entry.variation = c.variation; const blocked = /BLOCKED/.test(status); entry.expected = c.expectFail ? (blocked ? 'as expected (rejected)' : 'UNEXPECTED – portal accepted an out-of-range case') : (blocked ? 'UNEXPECTED – in-range case was blocked' : 'as expected'); }
    if (c.ruleId) entry.rule = c.ruleId;
    if (extra && typeof extra === 'object') Object.assign(entry, extra);
    if (/BLOCKED/.test(status) && !(extra && extra.product)) entry.diag = diagnose();
    if (/BLOCKED/.test(status)) { try { jiraSnapshot(entry); } catch (e) {} }
    list.push(entry); S.set('results', list); console.log('[SB4] RESULT', entry);
    try { if (c.gsRow && /PASS|BLOCKED|PAUSED/.test(status) && gsLink()) { flFlush(true); const fk = [HERE.env, c.mode || modeHere(), HERE.lob, c.category || '', prodName].join('|'); gsSendFields(fk, (m) => console.log('[SB4] sheet fields:', m)).then(() => gsSendScenarios((m) => console.log('[SB4] sheet scenarios:', m))); } } catch (e) {}   // every run's captured form fields → "Fields – <LOB>" tab of the dashboard
    try { if (c.gsRow && /PASS|BLOCKED|PAUSED/.test(status)) { entry.gsRow = c.gsRow; S.set('results', list); const more = !!(c.gsPortal && c.batch && ((c.queue || []).length || (c.nextCats || []).length));   /* a Portals row runs every plan of the portal: the row keeps collecting until the batch is done (v5.35) */
        if (!more) setCfg({ gsRow: 0 }); gsWriteBack(entry).finally(() => { if (/PASS|BLOCKED/.test(status) && !more) gsNext(); }); } } catch (e) {}   // Google Sheet dashboard: the row gets its result, then the next row of the batch runs
    return entry;
  }

  /* ---------------- auto-advance ---------------- */
  const STOP_AT = /thank|success|(?<!confirm-?|review-?|summary-?)payment|congrat|errorhandle|error/i;   // a "confirm & proceed" review page before payment is still ours to submit
  function activeModal() {                // the topmost open dialog (Suitability Declaration, confirmation pop-ups…): while it is up only ITS buttons may be pressed – the page behind it is inert, and pressing its Submit again only re-opens the same dialog
    const ds0 = Q('[role="dialog"], .modal, .p-dialog, .swal2-popup, .MuiDialog-paper, .v-dialog, .el-dialog, .ant-modal, [class*="modal"], [class*="popup"], [class*="dialog"]').filter((d) => d !== document.body && d !== document.documentElement && vis(d) && !ours(d) && !/(^|\s)(modal-open|modal-backdrop|dialog-open)(\s|$)|(modal|dialog|popup)[-_]?(header|footer|body|title|close|backdrop|overlay|mask|actions|buttons|wrapper)(\s|$|-)/i.test(String(d.className)) && d.querySelector('button, a.btn, [role="button"], input[type="submit"]') && d.getBoundingClientRect().height > 40);
    const floating = (d) => { if (d.getAttribute('role') === 'dialog' || d.getAttribute('aria-modal') === 'true') return true; let n = d; for (let i = 0; i < 5 && n && n !== document.body; i++, n = n.parentElement) { const cs = getComputedStyle(n); if ((cs.position === 'fixed' || cs.position === 'absolute') && +cs.zIndex >= 1) return true; } return false; };   // a real pop-up floats above the page; a "popup-wrapper" that is part of the page flow does not count
    const ds = ds0.filter(floating);
    if (!ds.length) return null;
    const z = (e) => { let n = e, best = 0; while (n && n !== document.body) { const v = +getComputedStyle(n).zIndex; if (v > best) best = v; n = n.parentElement; } return best; };
    const inner = ds.filter((d) => !ds.some((o) => o !== d && d.contains(o)));            // innermost containers only (the dialog, not the overlay wrapping it)
    return inner.sort((a, b) => z(b) - z(a))[0] || null;
  }
  function primaryButton() {
    const modal = activeModal();
    const btns = Q('button, a.btn, [role="button"], input[type="submit"]').filter((b) => vis(b) && !b.disabled && !/(^|\s)(disabled|is-disabled|btn-disabled|p-disabled|Mui-disabled)(\s|$)/.test(b.className) && b.getAttribute('aria-disabled') !== 'true' && !ours(b) && !/\bpay(ment)?\b|razorpay|payu|billdesk|log ?out|sign ?out|^\s*back\b|cancel|delete|remove|reset/i.test(b.innerText || b.value || ''));
    const inModal = modal ? btns.filter((b) => modal.contains(b)) : [];
    const lb = inModal.length ? '' : learnedButton();
    const otpOk = otpDone();
    const order = (lb ? [new RegExp('^\\s*' + esc(lb) + '\\s*$', 'i')] : []).concat(A().buttonOrder || []).concat([/^continue with (the )?proposal/i, /^proceed (with|to) (the )?proposal/i]).concat(!otpOk && Q('input').some((i) => vis(i) && isOtp(i) && i.value) ? [/^(submit|verify|confirm|validate)\s*otp/i, /^verify$/i, /^submit$/i, /^confirm$/i] : []).concat(kycDefer() ? [/^continue without kyc/i] : [/^fetch\s*(c?kyc|details)/i, /^verify\s*(c?kyc|pan|aadha)/i, /^(upload|submit)\s*(documents?|kyc)/i]).concat([/^skip(?!.*kyc)/i, /^yes$/i, /^continue$/i, /^next/i, /^save\s*(&|and)\s*(continue|next|proceed)/i, /^submit/i, /^proceed(?!.*pay)/i, /^checkout/i, /^get\s*(quote|quotes|started|details|plans|offer)/i, /^view\s*(quote|plans)/i, /^calculate/i, /^confirm/i, /^buy\s*now/i, /^fetch\s*(kyc|details)/i, /^verify/i, /^send otp|^get otp|^generate otp/i, /^validate/i, /^save$/i, /^done$/i, /^ok$/i, /^accept/i, /^(i )?agree/i, /^review/i, /^apply/i]);
    // a button that has already been clicked 4× on this route without moving on is demoted (e.g. "Fetch KYC" that only
    // re-fetches while "Continue with Proposal" sits next to it) – OTP submits keep their own limit
    const tried = JSON.parse(sessionStorage.getItem('sb4_btnclicks') || '{}'); const rk = (location.hash || location.pathname).split('?')[0] + '|';
    const worn = (x) => (tried[rk + (x.innerText || x.value || '').trim().toLowerCase().slice(0, 40)] || 0) >= 4 && !/otp/i.test(x.innerText || x.value || '');
    const skipKyc = kycDefer() ? /^(fetch|verify)\s*(c?kyc)/i : null;          // KYC deferred to the customer: never press Fetch/Verify KYC again
    const skipOtp = otpOk ? /otp/i : null;
    const pool = inModal.length ? inModal : btns;
    const fresh = pool.filter((x) => !worn(x) && !(skipKyc && skipKyc.test((x.innerText || x.value || '').trim())) && !(skipOtp && skipOtp.test((x.innerText || x.value || '').trim())));
    for (const re of order) { const b = fresh.find((x) => re.test((x.innerText || x.value || '').trim())); if (b) return b; }
    const dead = (x) => (tried[rk + (x.innerText || x.value || '').trim().toLowerCase().slice(0, 40)] || 0) >= 8 && !/otp/i.test(x.innerText || x.value || '');   // 8× on one route: give up on it (the watchdog records the page)
    for (const re of order) { const b = pool.find((x) => re.test((x.innerText || x.value || '').trim()) && !dead(x) && !(skipKyc && skipKyc.test((x.innerText || x.value || '').trim())) && !(skipOtp && skipOtp.test((x.innerText || x.value || '').trim()))); if (b) return b; }
    if (A().extraButtons && !inModal.length) { const ex = A().extraButtons(); for (const re of order) { const b = ex.find((x) => re.test(x.text)); if (b) return b.el; } }
    return null;
  }
  function emptyRequired() {
    const e1 = Q('input, textarea').filter((e) => usable(e) && !ours(e) && !['radio', 'checkbox', 'hidden', 'file', 'submit', 'button'].includes(e.type) && !e.value && (/\*/.test(labelOf(e)) || e.required) && !/captcha/i.test(labelOf(e) + e.name) && !isOtp(e));
    const e2 = customSelects().filter((s) => isEmptyCustom(s) && !isDisabledCustom(s) && /\*/.test(labelOf(s)) && !noOptions.has(s.id || labelOf(s) || s));
    return e1.map(labelOf).concat(e2.map(labelOf));
  }
  /* ---------------- generic quote-list handling (adapter supplies quoteCards()) ---------------- */
  let qState = { url: '', since: 0, count: -1, stableSince: 0 };
  /* ---------- multi-quote poll intelligence (v5.25): every poll answer tells which products exist, in which category, and why a product is NOT shown ---------- */
  let lastPoll = null;                                   // { t, json } – the last complete multi-quote poll seen on this page
  const MQ_HINTS = [
    [/minimum (?:premium|investment|annual premium|amount)[^0-9]{0,40}?([\d,]+)/i, (m) => ({ amount: +m[1].replace(/,/g, ''), hint: `increase the investment / premium amount to at least ${m[1]}` })],
    [/(?:premium|investment|amount)[^.]{0,60}?(?:should|must) be (?:at least|minimum|greater than|>=?)\s*(?:Rs\.?|₹)?\s*([\d,]+)/i, (m) => ({ amount: +m[1].replace(/,/g, ''), hint: `increase the investment / premium amount to at least ${m[1]}` })],
    [/maximum (?:premium|investment|annual premium|amount)[^0-9]{0,40}?([\d,]+)/i, (m) => ({ amount: +m[1].replace(/,/g, ''), hint: `reduce the investment / premium amount to at most ${m[1]}` })],
    [/frequency[^.]{0,80}?\b(yearly|annual(?:ly)?|half[- ]?yearly|quarterly|monthly|single|one[- ]?time)\b/i, (m) => ({ freq: m[1], hint: `choose the ${m[1]} premium frequency` })],
    [/\b(?:ppt|premium payment term)[^.]{0,60}?(\d{1,2})\s*(?:years?|yrs?)?/i, (m) => ({ ppt: +m[1], hint: `set the premium payment term to ${m[1]} years` })],
    [/\bage\b[^.]{0,60}?(?:between|from|minimum|min\.?|at least|should be)\s*(\d{2})/i, (m) => ({ age: +m[1] + 1, hint: `use a life assured aged ${+m[1] + 1}` })],
    [/\bage\b[^.]{0,60}?(?:maximum|max\.?|at most|not more than|below|less than)\s*(\d{2})/i, (m) => ({ age: Math.max(18, +m[1] - 1), hint: `use a life assured aged ${Math.max(18, +m[1] - 1)}` })],
  ];
  function quoteFixFor(msg) { const t = String(msg || ''); for (const [re, fn] of MQ_HINTS) { const m = t.match(re); if (m) { const r = fn(m); if (r.amount) r.amount = Math.ceil(r.amount / 100) * 100; return r; } } return null; }
  function pollErrors(json) { const out = []; const errs = (json && (json.errors || (json.data && json.data.errors))) || []; errs.forEach((e) => { const le = (e.listOfErrors || [])[0] || {}; const cands = [le.errorMessage, le.errorDisplayMessage, e.errorMessage, e.message].filter((x) => typeof x === 'string' && x.trim()); let msg = cands.sort((a, b) => b.length - a.length)[0] || '';   // the longest text carries the detail ("args: ['Minimum premium amount for M frequency should be 10,284']")
      const argv = [...String(msg).matchAll(/'?args'?\s*[:=]\s*\[([^\]]*)\]/g)].map((m) => [...m[1].matchAll(/'([^']*)'|"([^"]*)"/g)].map((x) => (x[1] != null ? x[1] : x[2]).trim())).filter((a) => a.length);
      { const args = [...String(msg).matchAll(/'?args'?\s*[:=]\s*\[([^\]]*)\]/g)].map((m) => m[1].replace(/['"]/g, '').trim()).filter(Boolean); if (args.length) msg = args.join(' | ') + ' (' + String(msg).split(/[:[]/)[0].trim() + ')'; } out.push({ args: argv, code: String(e.productId || e.productCode || ''), manu: String(e.manufacturerId || e.manufacturerCode || '').toUpperCase(), name: e.productName || e.planName || '', msg: String(msg).replace(/\s+/g, ' ').trim().slice(0, 400), ecode: le.errorCode || '' }); }); return out; }
  function pollQuotes(json) { const q = (json && json.data && (json.data.quote || json.data.quotes)) || []; return q.map((x) => { const ip = x.insuranceAndProducts || {}; return { code: String(ip.productCode || ''), manu: String(ip.insuranceCompanyCode || '').toUpperCase(), name: ip.productName || '', q: x }; }); }
  function onPollSeen(json) {              // called by the network hook for every complete multi-quote poll
    try { if (!json || !json.data || json.data.isPollComplete === false) return; const quotes = pollQuotes(json); const errs = pollErrors(json); if (!quotes.length && !errs.length) return;
      lastPoll = { t: Date.now(), json, quotes, errs };
      const a = A(); const key = HERE.env + '|' + HERE.lob; const cat = CATS(); const e = cat[key] || { categories: [], products: {} }; let changed = 0;
      quotes.forEach((x) => { const cn = (a.pollCategory && a.pollCategory(x.q)) || cfg().category || 'All'; if (!cn || !x.name || /^other products/i.test(cn)) return; if (!e.categories.includes(cn)) e.categories.push(cn); const list = e.products[cn] || []; if (!list.some((n) => nkey(n) === nkey(x.name))) { list.push(x.name); changed++; } e.products[cn] = list; });
      if (changed) { cat[key] = e; S.set('catalog', cat); }
      const codes = S.get('codes', {}); let cc = 0; quotes.concat(errs).forEach((x) => { if (x.code && x.name && codes[x.manu + '|' + x.code] !== x.name) { codes[x.manu + '|' + x.code] = x.name; cc++; } }); if (cc) S.set('codes', codes);
      const M = S.get('mqErrors', {}); const now = new Date().toISOString(); errs.forEach((x) => { if (!x.code && !x.name) return; M[HERE.env + '|' + HERE.lob + '|' + (x.manu ? x.manu + '|' : '') + (x.code || nkey(x.name))] = { manu: x.manu, code: x.code, name: x.name, msg: x.msg, ecode: x.ecode, at: now, fix: quoteFixFor(x.msg) }; });
      quotes.forEach((x) => { delete M[HERE.env + '|' + HERE.lob + '|' + (x.manu ? x.manu + '|' : '') + x.code]; });   // quoted now: the old reason is gone
      const keys = Object.keys(M); if (keys.length > 400) keys.slice(0, keys.length - 400).forEach((k) => delete M[k]); S.set('mqErrors', M);
    } catch (e) { console.log('[SB4] poll intel', e.message); }
  }
  function mqReasonFor(env, lob, product, code, manu) {   // why this product was not on the quote page last time (from the multi-quote poll), with the fix if the message names one
    const M = S.get('mqErrors', {}); const pk = nkey(product || ''); const hits = Object.entries(M).filter(([k, v]) => k.startsWith(env + '|' + lob + '|') && ((code && v.code === String(code) && (!manu || !v.manu || v.manu === String(manu).toUpperCase())) || (pk && nkey(v.name) === pk))).map(([, v]) => v);
    return hits.sort((a, b) => (a.at < b.at ? 1 : -1))[0] || null;
  }
  function pollLookup(want, code, manu) {   // the last complete poll: is the wanted product quoted (and under which category), or did it come back with an error?
    if (!lastPoll) return null; const pk = nkey(want || ''); const a = A();
    const q = lastPoll.quotes.find((x) => (code && x.code === String(code) && (!manu || !x.manu || x.manu === String(manu).toUpperCase())) || (pk && nkey(x.name) === pk));
    if (q) return { listed: true, name: q.name, category: a.pollCategory ? a.pollCategory(q.q) : '' };
    const e = lastPoll.errs.find((x) => (code && x.code === String(code) && (!manu || !x.manu || x.manu === String(manu).toUpperCase())) || (pk && nkey(x.name) === pk));
    if (e) return { listed: false, name: e.name, error: e.msg, ecode: e.ecode, args: e.args || [], fix: quoteFixFor(e.msg) };
    return null;
  }
  /* ---------- quote solver (v5.26): the chosen product is quoted alone (deep link), its own error says what to change, the filters are changed and the portal quotes again – until the plan is listed ---------- */
  const QS_AMT = { M: 10000, Q: 30000, HY: 60000, Y: 120000, S: 500000 }; const QS_PPTS = [10, 5, 7, 8, 12];
  const QS_ANN = { M: 12, Q: 4, HY: 2, Y: 1, S: 1 }; const qsNice = (x) => { const m = Math.pow(10, Math.max(2, Math.floor(Math.log10(x)) - 1)); return Math.ceil(x / m) * m; };
  const qsNum = (x) => { const n = parseFloat(String(x).replace(/[,\s₹]|Rs\.?/gi, '')); return isFinite(n) ? n : null; };
  const qsSig = (p) => [p.ppf, p.ppt, p.amount, p.pt || 'Any'].join('/');
  const qsPpfList = (rr) => { const L = String((rr && rr.a && rr.a.ppf) || '').split(',').map((x) => x.trim().toUpperCase()).filter((x) => QS_AMT[x]); return L.length ? L : ['M', 'Q', 'HY', 'Y', 'S']; };
  const qsPptOpts = (rr) => { const o = rr && rr.a && rr.a.minPPT; const list = o && o.options ? o.options.flat() : Array.isArray(o) ? o : []; return [...new Set(list.map((x) => parseInt(x, 10)).filter((x) => x > 0 && x < 60))]; };
  function qsSetPpf(p, f) { if (p.ppf === f) return p; const was = p.ppf; p.ppf = f; p.amount = QS_AMT[f] || p.amount; if (f === 'S') p.ppt = 1; else if (was === 'S' || p.ppt === 1) p.ppt = 10; return p; }
  const QS_FREQ = [[/^(s|single|one[- ]?time|lump ?sum)$/i, 'S'], [/^(y|yearly|annual(ly)?)$/i, 'Y'], [/^(hy|h|half[- ]?yearly|semi[- ]?annual(ly)?)$/i, 'HY'], [/^(q|quarterly)$/i, 'Q'], [/^(m|monthly)$/i, 'M']];
  function quoteHint(info) {              // what the insurer / gateway validation asks for: { lo, hi, ppts, ppfs, pts, age }
    const h = {}; const range = (vals) => { const flat = vals.join(' , '); const m = flat.match(/(\d[\d,.]*)\s*(?:to|and|-|–)\s*(\d[\d,.]*)/i); if (m) return [qsNum(m[1]), qsNum(m[2])]; const ns = vals.map(qsNum).filter((x) => x != null); return ns.length >= 2 ? [Math.min(...ns), Math.max(...ns)] : ns.length ? [ns[0], null] : null; };
    (info.args || []).forEach((a) => { const f = String(a[0] || ''); const vals = a.slice(1); if (!vals.length) return;
      if (/quoteAmount|premium(?!Payment)|investment|^amount/i.test(f)) { const r = range(vals); if (r) { h.lo = r[0]; h.hi = r[1]; } }
      else if (/premiumPaymentTerm|^ppt$/i.test(f)) { const r = /\b(to|and)\b/i.test(vals.join(' ')) ? range(vals) : null; h.ppts = r && r[1] ? QS_PPTS.concat([6, 9, 11, 15, 20]).filter((x) => x >= r[0] && x <= r[1]) : vals.map((x) => parseInt(x, 10)).filter((x) => x > 0); if (!h.ppts.length) delete h.ppts; }
      else if (/premiumPaymentFrequency|frequency|^ppf$/i.test(f)) { h.ppfs = vals.flatMap((v) => String(v).split(/[,/]/)).map((v) => (QS_FREQ.find(([re]) => re.test(v.trim())) || [])[1]).filter(Boolean); if (!h.ppfs.length) delete h.ppfs; }
      else if (/policyTerm|^pt$/i.test(f)) { const r = /\b(to|and)\b/i.test(vals.join(' ')) ? range(vals) : null; h.pts = r && r[1] ? [r[0], r[1]] : vals.map((x) => parseInt(x, 10)).filter((x) => x > 0); if (!h.pts.length) delete h.pts; }
      else if (/\bage\b|ageAtEntry|entryAge/i.test(f)) { const r = range(vals); if (r) h.age = r[1] && P.age > r[1] ? Math.max(1, r[1] - 1) : r[0] + 1; } });
    { const t = String(info.error || ''); let m;
      if (!h.pts && /policy\s*term|\bPT\b/i.test(t) && (m = t.match(/calculated\s*:?\s*(\d+)\s*,?\s*provided\s*:?\s*(\d+)/i))) h.pts = [+m[1]];   // "PT should be equal to … Calculated: 28, Provided: 30"
      if (!h.pts && (m = t.match(/policy\s*term[^.]{0,40}?between\s+(\d+)\s*(?:and|to|-)\s*(\d+)/i))) h.pts = [+m[1], +m[2]];
      if (!h.ppts && (m = t.match(/(?:premium\s*pay(?:ment|ing)\s*term|\bppt\b)[^.]{0,40}?between\s+(\d+)\s*(?:and|to|-)\s*(\d+)/i))) h.ppts = QS_PPTS.concat([6, 9, 11, 15, 20]).filter((x) => x >= +m[1] && x <= +m[2]);
      if (h.ppts && !h.ppts.length) delete h.ppts; }
    if (!Object.keys(h).length) { const fx = quoteFixFor(info.error); if (fx) { if (fx.amount) { if (/maximum|at most|reduce/i.test(fx.hint || '')) h.hi = fx.amount; else h.lo = fx.amount; } if (fx.freq) { const c = (QS_FREQ.find(([re]) => re.test(fx.freq)) || [])[1]; if (c) h.ppfs = [c]; } if (fx.ppt) h.ppts = [fx.ppt]; if (fx.age) h.age = fx.age; } }
    return Object.keys(h).length ? h : null;
  }
  function quoteGuess(rr) {               // first guess from the product-rules master: a plan that has no Monthly mode / is single pay / has no 10-year paying term is not asked with the portal defaults
    if (!rr || !rr.a || /annuity|pension/i.test(rr.grp || '')) return null; const a = rr.a; const L = qsPpfList(rr);   /* retirement plans keep the portal's own defaults (one-time purchase price) */ const opts = qsPptOpts(rr); const p = { ppf: 'M', ppt: 10, amount: QS_AMT.M, pt: 'Any' }; let ch = false;
    if (!L.includes('M')) { qsSetPpf(p, L.includes('Y') ? 'Y' : L.includes('S') ? 'S' : L[0]); ch = true; }
    if (L.includes('S') && p.ppf !== 'S' && ((opts.length && opts.every((x) => x === 1)) || (String(a.ppo) === '1' && L.length === 1))) { qsSetPpf(p, 'S'); ch = true; }
    if (p.ppf !== 'S' && opts.length && !opts.includes(p.ppt)) { const q = QS_PPTS.find((x) => opts.includes(x)) || opts.find((x) => x > 1); if (q) { p.ppt = q; ch = true; } }
    if (p.ppf === 'M' && typeof a.minPrem === 'number' && a.minPrem > p.amount && a.minPrem < 1000000) { p.amount = Math.ceil(a.minPrem / 100) * 100; ch = true; }
    return ch ? p : null;
  }
  function quoteNext(cur, info, rr, tried) {   // the next filter combination to quote with: follow the message first, then a short grid of the combinations the plan's rules allow
    const L = qsPpfList(rr); const h = quoteHint(info); const p = Object.assign({ pt: 'Any' }, cur);
    if (h) {
      if (h.age && !h.lo && !h.ppts && !h.ppfs) return { age: h.age };
      if (h.ppfs && !h.ppfs.includes(p.ppf)) qsSetPpf(p, ['Y', 'S', 'HY', 'Q', 'M'].find((f) => h.ppfs.includes(f)));
      if (h.ppts && !h.ppts.includes(p.ppt)) { p.ppt = QS_PPTS.find((x) => h.ppts.includes(x)) || h.ppts[0]; if (p.ppt === 1 && L.includes('S')) qsSetPpf(p, 'S'); else if (p.ppf === 'S' && p.ppt > 1) { const keep = p.ppt; qsSetPpf(p, L.includes('Y') ? 'Y' : L.find((f) => f !== 'S') || 'Y'); p.ppt = keep; } }
      if (h.pts) { const cand = h.pts.length === 2 && h.pts[1] - h.pts[0] > 1 ? Math.min(h.pts[1], Math.max(h.pts[0], p.ppt + 5)) : h.pts[0]; if (cand) p.pt = String(cand); }
      if (h.lo != null && p.amount < h.lo) { const annual = p.amount * (QS_ANN[p.ppf] || 1);
        if (h.lo >= annual * 20) {                       // a bound 20× the yearly premium is a bound on the cover (sum assured = a multiple of the premium), not on the premium: go yearly, then raise the premium step by step – the smallest premium that quotes is kept
          if (p.ppf === 'M' && L.includes('Y') && !tried.some((t) => t.startsWith('Y/'))) qsSetPpf(p, 'Y');
          else { let am = p.amount; for (let i = 0; i < 12; i++) { am = qsNice(am * 1.3); if (am >= h.lo || !tried.includes(qsSig(Object.assign({}, p, { amount: am })))) break; } p.amount = Math.min(am, Math.ceil(h.lo / 100) * 100); } }
        else p.amount = Math.ceil(h.lo / 100) * 100; }
      if (h.hi != null && p.amount > h.hi) p.amount = Math.floor(h.hi / 100) * 100;
      if (!tried.includes(qsSig(p))) return p;
    }
    const opts = qsPptOpts(rr); const ppts = QS_PPTS.filter((x) => !opts.length || opts.includes(x)).concat(opts.filter((x) => x > 1 && !QS_PPTS.includes(x))); const grid = [];
    const add = (f, t) => { if (L.includes(f)) grid.push({ ppf: f, ppt: t, amount: QS_AMT[f], pt: 'Any' }); };
    add('Y', ppts[0] || 10); add('S', 1); add('M', ppts[0] || 10); ppts.slice(1).forEach((t) => add('Y', t)); ppts.slice(1, 3).forEach((t) => add('M', t)); add('HY', ppts[0] || 10); add('Q', ppts[0] || 10);
    return grid.find((g) => !tried.includes(qsSig(g))) || null;
  }
  const QS_NAME = { M: 'Monthly', Q: 'Quarterly', HY: 'Half-Yearly', Y: 'Yearly', S: 'One Time' };
  const qsText = (p) => `${QS_NAME[p.ppf] || p.ppf} ₹${Number(p.amount).toLocaleString('en-IN')}, pay for ${p.ppt} yr${p.pt && p.pt !== 'Any' ? ', policy term ' + p.pt : ''}`;
  const quoteSolKey = (rr) => HERE.env + '|' + String(rr.m).toUpperCase() + '|' + rr.id;
  function quotePostError(since) {         // the multi-quote POST itself was refused (no poll follows) – e.g. INSGW_NO_VALID_PRODUCT_FOUND: the product is not enabled for this distributor
    const t0 = (typeof performance !== 'undefined' && performance.timeOrigin) || since; const rec = capLoad().filter((x) => x.method === 'POST' && /\/quote$/i.test(String(x.url).split('?')[0])).slice(-1)[0]; if (rec && rec.t < Math.min(t0, since) - 500) return null;   // only the request this page made itself if (!rec || !rec.resBody) return null;
    try { const j = JSON.parse(rec.resBody); if (j && j.data && (j.data.request_id || j.data.requestId || j.request_id)) return null; const errs = j.errors || (j.data && j.data.errors) || (j.error ? [j.error] : []); const e0 = Array.isArray(errs) ? errs[0] : errs; if (!e0 && rec.status < 400) return null;
      const le = (e0 && (e0.listOfErrors || [])[0]) || e0 || {}; const msg = [le.errorMessage, le.errorDisplayMessage, le.message, j.message].filter((x) => typeof x === 'string' && x.trim())[0] || ('HTTP ' + rec.status); const ecode = le.errorCode || le.code || (String(rec.resBody).match(/INSGW_[A-Z_]+/) || [''])[0];
      return { listed: false, post: true, error: (ecode ? ecode + ' – ' : '') + msg, ecode, args: [], fix: null }; } catch (e) { return rec.status >= 400 ? { listed: false, post: true, error: 'HTTP ' + rec.status + ' on the multi-quote request', ecode: '', args: [], fix: null } : null; }
  }
  function quoteRule(c, want) {            // the rules-master product behind the chosen name – among same-named twins (FGPlus / FGPlus_P …) the one this portal's multi-quote has shown; sure = the name match is exact enough to quote that product alone
    const best = rulesFor(c.lob || HERE.lob, want); if (!best) return null; const k = (r) => nkey(r.mname || r.name);
    const twins = Object.values(RULES).filter((r) => r.lob === best.lob && r.m === best.m && k(r) === k(best)); const codes = S.get('codes', {}); const seen = twins.filter((r) => codes[String(r.m).toUpperCase() + '|' + r.id]);
    const picked = c.ruleId && twins.find((r) => r.m + '|' + r.id === c.ruleId); const r = (seen.length ? (seen.includes(picked) ? picked : seen.includes(best) ? best : seen[0]) : picked || best);
    const n = nkey(want), low = String(want).toLowerCase(); const sure = !!r.id && !!r.m && (nkey(r.name) === n || nkey(r.mname) === n || (r.name && r.name.length > 5 && low.includes(String(r.name).toLowerCase())) || (r.mname && r.mname.length > 5 && low.includes(String(r.mname).toLowerCase())));
    return { r, sure };
  }
  async function quoteSolve(a, c, want, cards) {   // true = the solver acted (filters changed / tab switched / blocked) and this pass is over
    const qr = quoteRule(c, want); const rr = qr && qr.r; const key = String(c.fresh || '') + '|' + want; const deep = a.deepLinkOn ? a.deepLinkOn() : false;
    if (a.prepareQuote && /multiquote/i.test(location.hash)) { const l = []; let ch = false; try { ch = await a.prepareQuote(l); } catch (e) {} if (ch) { console.log('[SB4] quote prepare', l); banner('Quote page', l.join('; ').slice(0, 160)); await a.applyQuoteParams(null, c.category); return true; } }
    if (a.setDeepLink && rr && qr.sure && !deep && c.deepOff !== key && sessionStorage.getItem('sb4_qdl') !== key) { sessionStorage.setItem('sb4_qdl', key);   // the single-product quote is not on yet (the journey reached this page another way): switch it on and quote again
      if (a.setDeepLink(rr.m, rr.id)) { banner('Quote page', `"${want}": asking the portal for ${rr.m} ${rr.id} only`); await a.applyQuoteParams(a.wantedParams ? a.wantedParams(rr) : null, c.category); return true; } }
    if (a.wantedParams && rr && qr.sure && deep && !(c.qs && c.qs.key === key) && sessionStorage.getItem('sb4_qenf') !== key) {   // the first quote of the journey is asked with the filters this product needs (learned / from its rules / the portal defaults) – never with what the previous journey left behind
      const asked = a.quoteParams(true); if (!asked && Date.now() - qState.since < 6000) return true;   // the page has not sent its quote request yet (after 6 s: it is showing an older request's answer – a fresh one is asked for)
      sessionStorage.setItem('sb4_qenf', key); const w = a.wantedParams(rr);
      if (w && (!asked || qsSig(w) !== qsSig(asked))) { banner('Quote page', `"${want}": quoting with ${qsText(w)}`); console.log('[SB4] quote filters', asked ? qsSig(asked) : '(no request seen)', '→', qsSig(w)); await a.applyQuoteParams(w, c.category); return true; } }
    if (findCard(cards, want)) return false;
    const fresh = lastPoll && lastPoll.t >= qState.since - 1500; const info = (fresh ? pollLookup(want, rr && rr.id, rr && rr.m) : null) || quotePostError(qState.since);
    if (!info) {
      if (deep && fresh && !cards.length && !lastPoll.quotes.length && !lastPoll.errs.length) return false;
      if (deep && fresh && (lastPoll.quotes.length || lastPoll.errs.length) && c.deepOff !== key) { setCfg({ deepOff: key }); banner('Quote page', `The single-product quote did not answer for "${want}" – asking for the full list`); try { a.clearDeepLink(); } catch (e) {} await a.applyQuoteParams(null, c.category); return true; }   // the rule's product code is not what this portal calls the plan: back to the full list
      return false;
    }
    if (info.listed) {
      if (info.category && info.category !== c.category && !qState.catSwitched) { qState.catSwitched = true; banner('Quote page', `"${want}" is quoted under ${info.category} – switching the tab`); setCfg({ category: info.category }); learn([]); refreshPanel(); let ok = false; try { ok = await a.goCategory(info.category); } catch (e) {} if (!ok || deep) { await a.applyQuoteParams(null, info.category); return true; } qState = { url: location.href, since: Date.now(), count: -1, stableSince: Date.now(), catSwitched: true }; return true; }
      if (deep && cards.length && rr && lastPoll.quotes.every((x) => x.code === String(rr.id))) { const pick = findCard(cards, info.name) || cards[0]; qState.pickName = pick.name; return false; }   // only this product was asked for: its card is the one on the page, whatever the insurer calls the variant
      return false;
    }
    if (info.post && deep && c.deepOff !== key) { setCfg({ deepOff: key }); banner('Quote page', `The single-product quote for "${want}" was refused (${info.error.slice(0, 80)}) – asking for the full list`); try { a.clearDeepLink(); } catch (e) {} await a.applyQuoteParams(null, c.category); return true; }
    const qs = c.qs && c.qs.key === key ? c.qs : { key, tried: [], n: 0, same: 0 }; const cur = a.quoteParams(); const tried = [...new Set(qs.tried.concat(qsSig(cur)))]; const hist = (qs.hist || []).concat(qsText(cur) + ' → ' + String(info.error).replace(/\(Received bad response[^)]*\)/i, '').trim().slice(0, 140)).slice(-10);
    const transient = !quoteHint(info) && /time(d)? ?out|connection|unable to connect|temporar|service unavailable|gateway|50[234]|try again|no response/i.test(info.error) && !/NO_VALID_PRODUCT/i.test(info.ecode + info.error);
    if (transient && qs.same < 1) { setCfg({ qs: Object.assign({}, qs, { tried, hist, same: qs.same + 1, last: info.error }), running: true }); banner('Quote again', `"${want}": the insurer did not answer (${info.error.slice(0, 90)}) – quoting once more`); progress.touch('quote again'); await a.applyQuoteParams(cur, c.category); return true; }
    if (c.strictQuote) { onBlocked(`Test case ${c.tc ? c.tc.id : ''}: "${want}"${rr ? ' (' + rr.m + ' ' + rr.id + ')' : ''} not quoted with ${qsText(cur)} – the insurer / gateway answers: ${info.error}`); return true; }   // a test case is quoted with its own values only – no filter ladder
    const max = /NO_VALID_PRODUCT/i.test(info.ecode + info.error) ? 3 : 8; const next = qs.n < max ? quoteNext(cur, info, rr, tried) : null;
    if (next && next.age && sessionStorage.getItem('sb4_qsage') !== want + '|' + next.age) { sessionStorage.setItem('sb4_qsage', want + '|' + next.age); banner('Quote fix', `"${want}" not quoted: ${info.error.slice(0, 120)} → life assured aged ${next.age} – starting again`); try { applyPerson(Object.assign({}, P, { age: next.age, income: Math.round(+P.income / 100000) })); } catch (e) {} startJourney(c.env || HERE.env, c.lob || HERE.lob, c.mode || 'assisted'); return true; }
    if (next && !next.age) { setCfg({ qs: Object.assign({}, qs, { tried, hist, n: qs.n + 1, last: info.error }), running: true }); banner('Quote fix ' + (qs.n + 1), `"${want}" not quoted: ${info.error.slice(0, 110)} → trying ${qsText(next)}`); progress.touch('quote fix ' + (qs.n + 1)); console.log('[SB4] quote fix', qs.n + 1, info.error, '→', qsText(next));
      const cat = (rr && ruleCategory(rr)) || c.category; await a.applyQuoteParams(next, /^other products|^$/i.test(c.category || '') ? cat : c.category); return true; }
    const notEnabled = /NO_VALID_PRODUCT/i.test(info.ecode + info.error);
    onBlocked(`Product "${want}"${rr ? ' (' + rr.m + ' ' + rr.id + ')' : ''} ${notEnabled ? 'is not enabled for this distributor on ' + HERE.env + ' – the gateway answers' : 'is not quoted – the insurer / gateway answers'}: ${info.error}. Tried ${hist.length} filter combination(s): ${hist.join(' | ').slice(0, 1100)}`);
    return true;
  }
  function learn(names) {
    const c = cfg(); const key = HERE.env + '|' + HERE.lob; const cat = CATS(); const e = cat[key] || { categories: [], products: {} };
    const cn = c.category || 'All'; if (/^other products/i.test(cn)) return; if (!e.categories.includes(cn)) e.categories.push(cn);
    e.products[cn] = [...new Set((e.products[cn] || []).concat(names))]; cat[key] = e; S.set('catalog', cat);
  }
  function uniqueNames(cards) { const seen = {}; return cards.map((x) => { seen[x.name] = (seen[x.name] || 0) + 1; return seen[x.name] > 1 ? `${x.name} #${seen[x.name]}` : x.name; }); }
  function findCard(cards, want) {
    const m = String(want).match(/^(.*) #(\d+)$/); const base = (m ? m[1] : want).trim().toLowerCase(); const nth = m ? +m[2] : 1;
    const exact = cards.filter((x) => x.name.trim().toLowerCase() === base); if (exact.length) return exact[nth - 1] || exact[0];
    const starts = cards.filter((x) => x.name.trim().toLowerCase().startsWith(base) && !/^[\w+]/.test(x.name.trim().slice(base.length))); if (starts.length) return starts[nth - 1] || starts[0];
    const word = cards.filter((x) => new RegExp('(^|[^\\w-])' + esc(base) + '($|[^\\w+])', 'i').test(x.name)); if (word.length) return word[nth - 1] || word[0];
    return cards.find((x) => x.name.toLowerCase().includes(base)) || null;
  }
  async function handleQuotes() {
    const a = A(); if (!a.quoteCards) return false;
    const cards = a.quoteCards(); if (!cards) { qState.url = ''; return false; }
    if (location.href !== qState.url) { qState = { url: location.href, since: Date.now(), count: -1, stableSince: Date.now() }; }
    if (a.beforeFill && !qState.bf) { try { const l = []; await a.beforeFill(l); if (l.length) { qState.bf = true; qState.since = Date.now(); qState.stableSince = Date.now(); return true; } } catch (e) {} }   // sub-tabs on the quote page (Pension / Annuity, ULIP / TULIP) – the list is re-fetched after the switch
    if (a.onQuotePage && sessionStorage.getItem('sb4_qset') !== location.href) { sessionStorage.setItem('sb4_qset', location.href); await a.onQuotePage(); return true; }
    if (cards.length !== qState.count) { qState.count = cards.length; qState.stableSince = Date.now(); }
    const loading = a.quotesLoading ? a.quotesLoading() : /fetching|loading/i.test(document.body.innerText.slice(0, 3000));
    const stable = Date.now() - qState.stableSince > 25000 && Date.now() - qState.since > 45000 && !loading;   // insurers answer in bursts – a 10 s pause is not the end of the list
    const waited = Date.now() - qState.since;
    if (cards.length) learn(cards.map((x) => x.name));
    let c = cfg(); let want = c.product || '';
    if (want && want !== '*' && !c.batchAll && a.applyQuoteParams && a.quoteParams) { let acted = false; try { acted = await quoteSolve(a, c, want, cards); } catch (e) { console.log('[SB4] quote solver', e.message); } if (acted) return true; c = cfg(); want = c.product || ''; }
    if (!cards.length) { if ((waited > 60000 && !loading) || waited > 180000) { const why = (a.noQuoteReason && a.noQuoteReason()) || (Q('*').find((e) => vis(e) && e.children.length === 0 && /no (valid )?products?\b|not (found|available)|no plans?\b|unable to fetch|something went wrong|no quotes?/i.test(e.textContent || '') && (e.textContent || '').trim().length < 200) || {}).textContent || '';
        onBlocked('No products listed on the quote page' + (why ? ' – portal says: "' + why.trim() + '"' : '')); } return true; }
    if (c.batchAll && (stable || waited > 120000) && a.sweep && !qState.swept) { qState.swept = true; try { await a.sweep(); } catch (e) {} return true; }   // some portals split the list into tabs – read them all before the batch is built
    if (c.batchAll && (stable || waited > 120000)) { const names = uniqueNames(cards); setCfg({ batchAll: false, product: names[0], queue: names.slice(1), batch: true, seen: names, retried: [] }); want = names[0]; refreshPanel(); c = cfg(); }
    else if (c.batchAll) return true;
    if (c.batch && c.seen) {                                           // plans that appear later (slow insurers) join the batch as soon as they are listed
      const fresh = uniqueNames(cards).filter((n) => !c.seen.includes(n) && nkey(n) !== nkey(want));
      if (fresh.length) { setCfg({ queue: (c.queue || []).concat(fresh), seen: c.seen.concat(fresh) }); banner('Batch', `${fresh.length} more plan(s) listed – added to the batch`); c = cfg(); refreshPanel(); }
    }
    if (!want && sessionStorage.getItem('sb4_picker_closed')) return true;                     // the person closed the list and picks on the page
    if (!want) { const pk = document.getElementById('sb-picker'); if (pk && +pk.dataset.count !== cards.length) pk.remove();
      if (!document.getElementById('sb-picker')) showPicker('Which product?', uniqueNames(cards), (name, i, all, rest) => { setCfg({ product: name, batch: !!all, queue: all ? rest : [] }); refreshPanel(); }, cards.length + ' plan(s) listed' + (loading ? ' – still loading more' : '')); return true; }
    if (c.batch && stable && !loading && c.queue && c.queue.length && !qState.pruned) {        // the list is final for this run: queued plans that are not on it are recorded now instead of waiting one by one
      qState.pruned = true; const keep = [], gone = [], retry = [], tried = c.retried || [];
      for (const q of c.queue) (findCard(cards, q) ? keep : tried.includes(q) ? gone : retry).push(q);     // insurers time out now and then: an unlisted plan gets one more run at the end of the batch
      if (gone.length) gone.forEach((q) => record('BLOCKED', `Product "${q}" is not listed on the quote page in two runs (no quote returned for this profile; ${cards.length} plan(s) listed)`, { product: q }));
      if (gone.length || retry.length) { setCfg({ queue: keep.concat(retry), retried: tried.concat(retry) }); banner('Batch', `${retry.length ? retry.length + ' plan(s) not quoted in this run – moved to the end of the batch for one retry; ' : ''}${gone.length ? gone.length + ' recorded as BLOCKED; ' : ''}${keep.length + retry.length} left`); c = cfg(); }
    }
    let hit = want === '*' ? cards[0] : findCard(cards, want) || (qState.pickName ? findCard(cards, qState.pickName) : null);
    if (hit && c.tcOpt) { const o = String(c.tcOpt).toLowerCase(); const same = cards.filter((x) => x.name.toLowerCase().includes(o)); if (same.length) hit = same[0]; }   // a test case names the variant (optionSelected → Options tab): among the product's cards the one whose name carries it
    if (!hit && want && want !== '*' && !c.batchAll) {                 // the multi-quote poll already knows whether the plan exists, where it is, and why it is missing – no need to wait for the list to settle
      const rr = rulesFor(c.lob || HERE.lob, want); const info = pollLookup(want, rr && rr.id, rr && rr.m);
      if (a.applyQuoteParams && info && !info.listed) { /* handled by the quote solver */ }
      else if (info && info.listed && info.category && info.category !== c.category && a.goCategory && !qState.catSwitched) { qState.catSwitched = true; banner('Quote page', `"${want}" is quoted under ${info.category} – switching the tab`); setCfg({ category: info.category }); try { await a.goCategory(info.category); } catch (e) {} learn([]); qState = { url: location.href, since: Date.now(), count: -1, stableSince: Date.now(), catSwitched: true }; refreshPanel(); return true; }
      if (info && !info.listed && info.error && !a.applyQuoteParams) {
        const tried = +(c.quoteFixTried || 0);
        if (info.fix && (info.fix.amount || info.fix.freq || info.fix.ppt || info.fix.age) && tried < 2) {        // the message names what to change: change it and run the quote again, at most twice
          banner('Quote fix', `"${want}" not quoted: ${info.error.slice(0, 120)} → ${info.fix.hint} – quoting again`); setCfg({ quoteFix: info.fix, quoteFixTried: tried + 1, running: true }); progress.touch('quote fix');
          if (info.fix.age) { try { applyPerson(Object.assign({}, P, { age: info.fix.age, income: Math.round(+P.income / 100000) })); } catch (e) {} }
          let applied = false; if (a.applyQuoteFix && !info.fix.age) { lastPoll = null; const l = []; try { applied = await a.applyQuoteFix(l); } catch (e) {} if (l.length) console.log('[SB4] quote fix', l); }
          if (applied) { qState = { url: location.href, since: Date.now(), count: -1, stableSince: Date.now() }; return true; }   // the portal quotes again with the new filter – the next poll decides
          startJourney(c.env || HERE.env, c.lob || HERE.lob, c.mode || 'assisted'); return true; }
        onBlocked(`Product "${want}" is not shown on the quote page – ${rr && rr.m ? rr.m + ' ' : ''}${rr && rr.id ? rr.id + ': ' : ''}${info.error}${info.fix ? ' (fix: ' + info.fix.hint + (tried ? '; tried ' + tried + '×' : '') + ')' : ''} (listed: ${cards.map((x) => x.name).join('; ').slice(0, 200)})`); return true; }
      if (!info && lastPoll && Date.now() - lastPoll.t < 600000 && (stable || waited > 20000)) {     // the poll is complete and names neither a quote nor an error for this plan: the portal never asked for it – it is not enabled for this distributor / journey
        const same = lastPoll.quotes.concat(lastPoll.errs).filter((x) => rr && rr.m && x.manu === String(rr.m).toUpperCase()).map((x) => x.code + (x.name ? ' ' + x.name : '')).slice(0, 12);
        onBlocked(`Product "${want}"${rr ? ' (' + rr.m + ' ' + rr.id + ')' : ''} is not part of this portal's multi-quote at all – ${lastPoll.quotes.length} plan(s) quoted and ${lastPoll.errs.length} with errors, none of them this one: the product is not enabled for this distributor / category on ${HERE.env}${same.length ? '. ' + (rr.m || 'this insurer') + ' plans in the multi-quote: ' + same.join('; ') : ''}`); return true; }
    }
    if (!hit) {
      const seenBefore = (() => { try { return Object.values((CATS()[c.env + '|' + (c.lob || HERE.lob)] || {}).products || {}).flat().some((n) => nkey(n) === nkey(want)); } catch (e) { return false; } })();
      if ((stable && (!seenBefore || waited > 75000)) || (waited > 60000 && !loading && !seenBefore) || waited > 150000) {        // a product this portal listed before gets up to 2–3 min to appear
        if (c.batch && c.queue && c.queue.length && !(c.retried || []).includes(want)) {       // first miss in a batch: park it at the end and carry on with the next plan on this very list
          setCfg({ product: c.queue[0], queue: c.queue.slice(1).concat(want), retried: (c.retried || []).concat(want) }); banner('Batch', `"${want}" not quoted in this run – moved to the end of the batch for one retry`); refreshPanel(); return true; }
        const word = want.split(/\s+/)[0].toLowerCase(); const why = [];
        const ALIAS = { bajaj: 'balic', icici: 'icici', hdfc: 'hdfc', tata: 'tata', max: 'maxlife', axis: 'maxlife', aditya: 'abslifei', absli: 'abslifei', pnb: 'pnb', sbi: 'sbi', kotak: 'kotak', bandhan: 'aegon', aegon: 'aegon', canara: 'chil', indiafirst: 'ifli', star: 'sudlife', ageas: 'ageas', edelweiss: 'zuno', zuno: 'zuno', lic: 'lic' };
        const hits = (txt) => String(txt).split(/(?=\{"productId")/).filter((blk) => { const b = blk.toLowerCase(); return b.includes(word) || (ALIAS[word] && b.includes('"manufacturerid":"' + ALIAS[word])) ; });   // the poll body is kept truncated – read the failing product's own block, not the first insurer's
        NET.filter((x) => x.err).forEach((x) => hits(x.err).forEach((blk) => { const m = blk.match(/"manufacturerId":"([^"]*)"/); const pid = blk.match(/"productId":"([^"]*)"/); const msgs = [...blk.matchAll(/"(?:errorDisplayMessage|errorMessage)":"([^"]{3,200})"/g)].map((r) => r[1]); if (msgs.length) why.push(`${m ? m[1] : ''} ${pid ? pid[1] : ''}: ${[...new Set(msgs)].join(' / ')}`.trim()); }));
        onBlocked(`Product "${want}" is not listed on the quote page${why.length ? ' – insurer error: ' + [...new Set(why)].join(' | ').slice(0, 400) : ' (no quote returned for this profile)'} (listed: ${cards.map((x) => x.name).join('; ').slice(0, 250)})`);
      }
      return true;
    }
    if (want === '*') setCfg({ product: hit.name });
    if (c.stopAt === 'quote') {                                        // a test case ends at the quote: the product is quoted with the case's values – its premium is the result
      const rr0 = rulesFor(c.lob || HERE.lob, want); const pq = lastPoll && lastPoll.quotes.find((x) => (rr0 && x.code === String(rr0.id)) || nkey(x.name) === nkey(hit.name)); const prem = quotePremium(pq && pq.q) || (hit.el && (String(hit.el.textContent || '').match(/₹\s*([\d,]+(?:\.\d+)?)/) || [])[1]) || '';
      const cur = a.quoteParams ? a.quoteParams() : null; try { await journeyShot('quote'); } catch (e) {}
      recExtra = { premium: prem, quoted: cur ? qsText(cur) : '' }; finishJourney('PASS', `Quoted${prem ? ' – premium ₹' + prem : ''}: ${hit.name}${cur ? ' with ' + qsText(cur) : ''}${c.tc && c.tc.expected ? ' (expected: ' + c.tc.expected + ')' : ''}`); return true; }
    if (a.quoteParams && want !== '*') { try { const qr = quoteRule(c, want); const rr = qr && qr.r; const cur = a.quoteParams(); if (rr && rr.id && cur && cur.ppf) { const M = S.get('quoteSol', {}); const k = quoteSolKey(rr); const dflt = cur.ppf === 'M' && +cur.ppt === 10 && +cur.amount === 10000 && (cur.pt || 'Any') === 'Any';
        if (!dflt || M[k]) { M[k] = Object.assign({}, cur, { at: new Date().toISOString(), cat: c.category || '' }); S.set('quoteSol', M); if (c.qs && c.qs.n) banner('Quote fix', `"${want}" is quoted with ${qsText(cur)} – remembered for the next run`); } } } catch (e) {} }
    try { await journeyShot('quote list'); } catch (e) {}
    try { sessionStorage.setItem('sb4_qdl', String(c.fresh || '') + '|' + want); if (a.clearDeepLink && a.deepLinkOn && a.deepLinkOn()) a.clearDeepLink(); } catch (e) {}   // the plan is found: the rest of the journey (single quote, proposal) runs on the portal's normal state
    lastClickAt = Date.now(); progress.touch('choose ' + hit.name); console.log('[SB4] choose product', hit.name); await hit.click(); selfUntil = Date.now() + 2500; return true;
  }

  let advancing = false, lastClickAt = 0;
  let emptyState = { key: '', since: 0, tries: 0 };
  function keepSessionAlive() {        // "Session Expiry Warning – your session is about to expire, click Ok" pop-ups (motor DIY): press Ok / Continue so the OTP / payment step is not lost
    const dlg = Q('[role="dialog"], .modal, .p-dialog, .swal2-popup, [class*="modal"], [class*="popup"]').filter((d) => vis(d) && !ours(d) && /session/i.test(d.innerText || '') && /expir|about to|time ?out|extend|stay (logged|signed)/i.test(d.innerText || ''));
    for (const d of dlg) { const b = Q('button, a.btn, [role="button"]', d).find((x) => vis(x) && /^(ok(ay)?|yes|continue|extend|stay|keep)\b/i.test((x.innerText || '').trim())); if (b && !b.dataset.sbSess) { b.dataset.sbSess = '1'; b.click(); progress.touch('session kept alive'); } }
  }
  /* ---------------- self-healing (v5.18): a page that will not move on is repaired field by field, and what worked is learned for the next run ---------------- */
  const healState = { route: '', at: 0, n: 0, pending: {}, tried: {} };
  const healRoute = () => (location.hash || location.pathname).split('?')[0];
  const healGuess = (el, label) => {      // a value that fits the field's name when nothing else is known
    const w = (label + ' ' + (el.name || '') + ' ' + (el.id || '') + ' ' + (el.placeholder || '')).toLowerCase();
    if (inNominee(el)) { if (/first ?name/.test(w)) return P.nominee.first; if (/last ?name|surname/.test(w)) return P.nominee.last || P.last; if (/\bdob\b|birth/.test(w)) return fmtDateLike(el, P.nominee.dobISO); if (/e-?mail/.test(w)) return P.nominee.email; if (/mobile|phone/.test(w)) return P.nominee.phone; if (/percent|share/.test(w)) return '100'; }
    if (inSpouse(el)) { if (/first ?name/.test(w)) return P.spouse.first; if (/last ?name|surname/.test(w)) return P.last; if (/\bdob\b|birth/.test(w)) return fmtDateLike(el, P.spouse.dobISO); }
    if (/e-?mail/.test(w)) return P.email; if (/mobile|phone|contact ?no/.test(w)) return P.phone; if (/pin ?code|pincode|zip/.test(w)) return P.pin; if (/city|town/.test(w)) return P.city; if (/state/.test(w) && !/estate/.test(w)) return P.state;
    if (/\bdob\b|birth/.test(w)) return fmtDateLike(el, P.dobISO); if (/date/.test(w)) { const d = new Date(); d.setDate(d.getDate() + 5); return fmtDateLike(el, d.toISOString().slice(0, 10)); }
    if (/\bpan\b/.test(w)) return P.pan; if (/aadha|uid/.test(w)) return AADHAAR_RAW(); if (/ifsc/.test(w)) return 'HDFC0000240'; if (/account/.test(w)) return '50102066713918'; if (/gst/.test(w)) return gstin(P.pan);
    if (/income|salary|amount|premium|sum|value|price|turnover/.test(w)) return String(P.income || 500000); if (/age\b/.test(w)) return String(P.age); if (/height/.test(w)) return '165'; if (/weight/.test(w)) return '67'; if (/percent|share/.test(w)) return '100';
    if (/first ?name/.test(w)) return P.first; if (/last ?name|surname/.test(w)) return P.last; if (/middle/.test(w)) return 'Kumar'; if (/father/.test(w)) return P.father; if (/mother/.test(w)) return P.mother; if (/spouse|wife|husband/.test(w)) return P.spouse.first + ' ' + P.last; if (/nominee/.test(w)) return P.nominee.first + ' ' + P.last; if (/name/.test(w)) return P.first + ' ' + P.last;
    if (/address|line ?1|house|flat|street/.test(w)) return P.address1 || 'Flat 3, Shanti Residency'; if (/landmark/.test(w)) return 'Near Central Mall'; if (/organi|company|employer/.test(w)) return 'Acme Technologies Pvt Ltd'; if (/designation|occupation|profession|job/.test(w)) return 'Software Engineer';
    if (/\b(no|number|code|id|ref|policy|reg)\b/.test(w) || el.inputMode === 'numeric' || el.type === 'number') return digits(el.maxLength > 0 && el.maxLength < 12 ? el.maxLength : 8);
    return 'NA';
  };
  const FIRSTS = ['Priya', 'Rohan', 'Neha', 'Vikram', 'Anjali', 'Suresh', 'Meera', 'Arjun', 'Kavita', 'Rajesh'], LASTS = ['Sharma', 'Verma', 'Iyer', 'Patel', 'Reddy', 'Nair', 'Mehta', 'Joshi'];
  const fieldError = (el) => { try { let b = el.parentElement; for (let i = 0; i < 4 && b; i++, b = b.parentElement) { const e = Q(ERRSEL, b).find((x) => vis(x) && x.innerText.trim() && !ours(x)); if (e) return e.innerText.trim().slice(0, 200); } } catch (e) {} return ''; };
  function healAlt(el, label, cur, tried, msg) {      // the value the portal rejected is replaced by the next candidate that fits the field – the error text steers it (name as per ID proof, duplicate, too short…)
    const w = (label + ' ' + (el.name || '') + ' ' + (el.id || '')).toLowerCase(); const m = (msg || '').toLowerCase(); const own = [P.first, P.last, P.middle].filter(Boolean).map((x) => String(x).toLowerCase());
    const notOwn = (list) => list.filter((x) => !own.includes(x.toLowerCase()));
    let cands = [];
    if (/first ?name/.test(w) || (/\bname\b/.test(w) && !/last|sur|middle|father|mother|bank|organi|company|employer|relation/.test(w))) cands = (inNominee(el) ? [P.nominee.first] : inSpouse(el) ? [P.spouse.first] : [P.first]).concat(notOwn(FIRSTS));
    else if (/last ?name|surname/.test(w)) cands = (inNominee(el) && P.nominee.last ? [P.nominee.last] : []).concat(notOwn(LASTS)).concat([P.last]);
    else if (/middle/.test(w)) cands = ['Kumar', 'Lal', 'Devi', 'Singh'];
    else if (/e-?mail/.test(w)) cands = [1, 2, 3, 4].map((n) => `alt${n}.${inNominee(el) ? P.nominee.email : P.email}`);
    else if (/mobile|phone|contact/.test(w)) cands = [1, 2, 3, 4].map(() => (inNominee(el) ? '8' : '9') + digits(9));
    else if (/pin ?code|pincode|zip/.test(w)) cands = ['400001', '560001', '110001', '411001', '600001'];
    else if (/percent|share/.test(w)) cands = ['100', '50', '60'];
    else if (/\bdob\b|birth|date/.test(w)) { const base = /\bdob\b|birth/.test(w) ? (inNominee(el) ? P.nominee.dobISO : inSpouse(el) ? P.spouse.dobISO : P.dobISO) : new Date().toISOString().slice(0, 10); cands = [-5, -10, 5, -20].map((y) => fmtDateLike(el, String(+base.slice(0, 4) + y) + base.slice(4))); }
    else if (/\bpan\b/.test(w)) cands = [1, 2, 3].map(() => 'ABCP' + String.fromCharCode(65 + Math.floor(Math.random() * 26)) + digits(4) + String.fromCharCode(65 + Math.floor(Math.random() * 26)));
    else if (/ifsc/.test(w)) cands = ['HDFC0000240', 'SBIN0000300', 'ICIC0000001'];
    else if (/account/.test(w)) cands = [1, 2, 3].map(() => digits(14));
    else if (/income|salary|amount|premium|sum/.test(w)) cands = ['800000', '1200000', '500000', '2500000'];
    else if (/height/.test(w)) cands = ['170', '160', '175']; else if (/weight/.test(w)) cands = ['70', '62', '80']; else if (/age\b/.test(w)) cands = [String(P.age + 2), String(P.age - 2), '35'];
    else if (/^\d+$/.test(cur) || el.inputMode === 'numeric' || el.type === 'number') { const len = /at least (\d+)|minimum (\d+)|min(?:imum)? (\d+) (digits|characters)/.exec(m); const n = len ? +(len[1] || len[2] || len[3]) : cur.length || 8; cands = [digits(n), digits(n), digits(Math.max(2, n - 1)), digits(n + 1)]; }
    else cands = ['Test', 'NA', 'Not Applicable', 'Sample ' + digits(3)];
    if (/middle name/.test(m) && /first ?name/.test(w)) cands = cands.map((x) => x + ' Kumar').concat(cands);   // "if you wish to add middle name, please add it here": a two-word name is also tried
    cands = cands.map(String).filter((x) => x && x !== cur && !tried.includes(x));
    return cands[0] || null;
  }
  const tried_ = (el, label, v) => (healState.tried[healRoute() + '|fields|' + sectionKey(el) + LKEY(label || el.name)] || []).includes(String(v));
  const healNote = (el, label, kind, value) => { const r = healRoute(); if (healState.route !== r) { healState.route = r; healState.n = 0; healState.pending = {}; healState.tried = {}; } if (!label || NOLEARN.test(label)) return; const k = r + '|' + kind + '|' + sectionKey(el) + LKEY(label); const rej = (healState.tried[k] || []).filter((x) => x !== String(value)); healState.pending[k] = { label, kind, value: String(value), lob: lobKey(), sec: sectionKey(el), at: Date.now(), rej }; healState.tried[k] = (healState.tried[k] || []).concat(String(value)).slice(-8); };   // a guessed value: learned as soon as the page moves on (next run fills it at once)
  async function selfHeal(log) {         // called when the page did not move on: empty required fields and error-marked fields get the best alternative value, one step further each time
    const route = healRoute(); if (healState.route !== route) { healState.route = route; healState.n = 0; healState.pending = {}; healState.tried = {}; } healState.n++; healState.at = Date.now();
    const step = healState.n; const touched = [];
    const errBoxes = Q(ERRSEL).filter((x) => vis(x) && x.innerText.trim() && !ours(x)); const FLD = 'input:not([type=hidden]), select, textarea, .p-select, .p-dropdown, [role="combobox"], .multiselect';
    const errOwner = (e) => { let b = e.parentElement; for (let i = 0; i < 5 && b && b !== document.body; i++, b = b.parentElement) { const n = Q(FLD, b).filter((f) => vis(f) && !ours(f)).length; if (n >= 1) return n <= 2 ? b : null; } return null; };   // the error box belongs to the ONE field in its own container – never to every field of the form
    const owners = errBoxes.map(errOwner).filter(Boolean); const flagged = (el) => owners.some((b) => b.contains(el));
    for (const el of customSelects()) { if (isDisabledCustom(el) || ours(el)) continue; const label = labelOf(el); const req = /\*/.test(label) || flagged(el); if (!req) continue; const empty = isEmptyCustom(el); if (!empty && !flagged(el)) continue;
      { const sk = healRoute() + '|selN|' + LKEY(label); const n = (healState.tried[sk] || 0) + 1; if (n > 3) continue; healState.tried[sk] = n; }   // a list changed three times without the page moving on is not what holds the page back
      const cur = empty ? '' : el.innerText.replace(/[▼▾⌄]/g, ' ').trim(); await openCustom(el); let opts = liveOpts().filter((o) => o.textContent.trim()); for (let i = 0; i < 4 && !opts.length; i++) { await sleep(250); opts = liveOpts().filter((o) => o.textContent.trim()); }
      const good = opts.filter((o) => !/^\s*(select|choose|--)/i.test(o.textContent) && o.textContent.trim() !== cur); const o = good[(step - 1) % Math.max(1, good.length)] || good[0];
      if (o) { o.scrollIntoView({ block: 'nearest' }); o.click(); await sleep(300); const got = o.textContent.trim(); log.push(`heal select "${label}" -> ${got}`); healNote(el, label, 'selects', got); touched.push(label); } else closeOverlays(); }
    for (const sel of Q('select')) { if (!usable(sel) || ours(sel)) continue; const label = labelOf(sel); const o = sel.options[sel.selectedIndex]; const empty = !sel.value || ['0', '-1'].includes(sel.value) || (o && /^\s*(select|choose|--)/i.test(o.text)); if (!(empty && (/\*/.test(label) || sel.required)) && !flagged(sel)) continue;
      const opts = [...sel.options].filter((x) => x.value && !['0', '-1'].includes(x.value) && !x.disabled && !/^\s*(select|choose|--)/i.test(x.text) && x !== o); const pick = opts[(step - 1) % Math.max(1, opts.length)]; if (pick) { setNative(sel, pick.value); log.push(`heal select "${label}" -> ${pick.text}`); healNote(sel, label, 'selects', pick.text); touched.push(label); } }
    for (const el of Q('input:not([type=radio]):not([type=checkbox]):not([type=hidden]):not([type=file]):not([type=submit]):not([type=button]):not([type=password]), textarea')) {
      if (!usable(el) || ours(el) || isOtp(el) || isFilterBox(el) || el.closest('.p-select, .p-dropdown, .react-select__control, .vs__dropdown-toggle, .ng-select-container, .multiselect')) continue; const label = labelOf(el); if (/captcha/i.test(label + el.name)) continue;
      const empty = !String(el.value || '').trim(); const bad = flagged(el); if (!((empty && (/\*/.test(label) || el.required)) || bad)) continue;
      let v = healGuess(el, label);
      if (bad && !empty) { const cur = String(el.value); const tk = healRoute() + '|fields|' + sectionKey(el) + LKEY(label || el.name); healState.tried[tk] = (healState.tried[tk] || []).concat(cur).slice(-10); const tried = healState.tried[tk]; const msg = fieldError(el);
        v = healAlt(el, label, cur, tried, msg); if (!v) { const g = healGuess(el, label); v = g !== cur && !tried.includes(g) ? g : null; } if (!v) continue;   // every candidate tried: leave the field to the portal's own validation
        console.log('[SB4] rejected value', JSON.stringify(cur), 'for', label || el.name, '→', v, msg ? '(' + msg.slice(0, 60) + ')' : ''); }
      else if (tried_(el, label, v)) { const alt = healAlt(el, label, v, healState.tried[healRoute() + '|fields|' + sectionKey(el) + LKEY(label || el.name)] || [], ''); if (alt) v = alt; }
      if (el.type === 'date' && !/^\d{4}-\d{2}-\d{2}$/.test(v)) { const m = String(v).match(/(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})/); v = m ? `${m[3]}-${pad(+m[2])}-${pad(+m[1])}` : P.dobISO; }
      if (el.type === 'tel' || el.inputMode === 'numeric' || /mob|phone|pin|date|dob/i.test(label + ' ' + el.name)) await typeInto(el, String(v)); else setNative(el, String(v));
      log.push(`heal "${label || el.name}" -> ${v}`); healNote(el, label || el.name, 'fields', v); touched.push(label || el.name); }
    { const radios = Q('input[type="radio"]').filter((r) => (vis(r) || vis(r.closest('label')) || vis(r.parentElement)) && !ours(r) && !r.disabled); const groups = [...new Set(radios.map(radioKey))];
      for (const n of groups) { const g = radios.filter((r) => radioKey(r) === n); if (g.length < 2) continue; const on = g.find((r) => r.checked); const need = !on || flagged(g[0]); if (!need) continue;
        const order = g.filter((r) => r !== on); const pick = order.find((r) => /^(0|n|no|false)$/i.test(r.value) || /^\s*no\s*$/i.test(labelOf(r))) && step === 1 ? order.find((r) => /^(0|n|no|false)$/i.test(r.value) || /^\s*no\s*$/i.test(labelOf(r))) : order[(step - 1) % order.length];
        if (pick) { (pick.closest('label') || pick).click(); if (!pick.checked) pick.click(); log.push(`heal radio ${n} -> ${labelOf(pick) || pick.value}`); healNote(pick, radioLabel(g[0], n, g), 'radio', labelOf(pick) || pick.value); touched.push(n); } } }
    for (const c of Q('input[type="checkbox"]').filter((c) => (vis(c) || vis(c.parentElement)) && !c.checked && !c.disabled && !ours(c) && flagged(c))) { const lbl = c.id ? document.querySelector(`label[for="${CSS.escape(c.id)}"]`) : null; (lbl || c).click(); if (!c.checked) c.click(); log.push('heal check ' + (labelOf(c) || '').slice(0, 40)); touched.push(labelOf(c)); }
    if (touched.length) { try { const t = JSON.parse(sessionStorage.getItem('sb4_btnclicks') || '{}'); const rk = route + '|'; Object.keys(t).forEach((k) => { if (k.startsWith(rk)) t[k] = Math.min(t[k], 1); }); sessionStorage.setItem('sb4_btnclicks', JSON.stringify(t)); } catch (e) {}   // the page changed: Next may be pressed again (the 'worn button' counter restarts)
      banner('Self-heal ' + step, `Page did not move on – filled / changed: ${touched.slice(0, 5).join(', ')}${touched.length > 5 ? ' …' : ''}`); progress.touch('heal ' + step); try { const c = cfg(); const H = S.get('heals', []); H.push({ at: new Date().toISOString(), env: HERE.env, lob: HERE.lob, product: c.product || '', route, step, fields: touched.slice(0, 20) }); S.set('heals', H.slice(-300)); } catch (e) {} }
    return touched.length;
  }
  function healCommit() {                // the route moved on after a heal: the values that got the page through are learned for the next journey (fields / selects / radios)
    const keys = Object.keys(healState.pending); if (!keys.length) return; let n = 0;
    keys.forEach((k) => { const h = healState.pending[k]; if (!h || NOLEARN.test(h.label)) return; const key = (h.lob || lobKey()) + '|' + (h.kind === 'radio' ? 'radio:' : '') + (h.sec ? h.sec + ':' : '') + LKEY(h.label).slice(0, 80); learnPut(h.kind === 'fields' ? 'fields' : 'selects', key, (h.sec ? null : toToken(h.value)) || h.value, h.rej && h.rej.length ? { rej: h.rej } : null); n++; });
    healState.pending = {}; if (n) teachNote(`${n} value(s) that got the page through were learned – next run fills them directly`);
  }
  const BUSY_SEL = '[class*="spinner"], [class*="loader"], [class*="loading"], [class*="skeleton"], [class*="shimmer"], .p-progress-spinner, [role="progressbar"], .v-progress-circular, .MuiCircularProgress-root';
  let busySince = 0;
  function pageBusy() {                  // a spinner / loading block / "please wait" text is showing: the next button must not be pressed yet (a submit during a fetch leaves portals on a blank loader)
    const spinEl = Q(BUSY_SEL).find((e) => vis(e) && !ours(e) && !/lazy|loaded|preload|loader-hidden/i.test(e.className) && e.getBoundingClientRect().width > 8 && e.getBoundingClientRect().height > 8
      && !e.matches('button, a, input, select, label') && !e.querySelector('button, a[href], input, select, textarea') && (e.innerText || '').trim().length <= 60);   // a "loading-button-wrapper" around a working Get Details button, or a content block with a loading-ish class name, is not a spinner
    const spin = !!spinEl;
    const txtEl = !spin && Q('body *').find((e) => vis(e) && !ours(e) && e.children.length === 0 && /^(loading|please wait|fetching|calculating|processing|preparing|submitting|generating|validating)/i.test((e.textContent || '').trim()) && e.textContent.length < 60);
    const txt = !!txtEl;
    const busy = spin || txt; HEALTH.busyEl = busy ? ((spinEl || txtEl).tagName + '.' + String((spinEl || txtEl).className).slice(0, 40) + ' "' + ((spinEl || txtEl).innerText || '').trim().slice(0, 40) + '"') : ''; if (!busy) { busySince = 0; return false; } if (!busySince) busySince = Date.now();
    return Date.now() - busySince < 40000;                                    // a spinner that never goes away is ignored after 40 s
  }
  function netBusy() {                   // an API call is in flight (or finished < 0.6 s ago – the page is still applying its answer): nothing is clicked yet; a call hanging for 30 s no longer counts
    const NF = (typeof unsafeWindow !== 'undefined' ? unsafeWindow : window).__sbNet; if (!NF) return false;
    if (NF.n > 0 && Date.now() - NF.start < 30000) return true;
    return Date.now() - NF.last < 600;
  }
  async function netIdle(max) { const t0 = Date.now(); while (netBusy() && Date.now() - t0 < (max || 8000)) await sleep(150); return !netBusy(); }
  async function maybeAdvance(my) {
    if (my === undefined) my = HEALTH.gen;
    if (!advanceOn() || advancing) { HEALTH.wait = advancing ? 'click in progress' : 'fill-only mode'; return; }
    if (A().quoteCards && A().quoteCards() !== null && !(recWait && Date.now() - recWait < 30000)) { if (await handleQuotes()) { HEALTH.wait = 'quote list'; return; } }   // the quote list has its own readiness logic: a plan already listed is chosen while slower insurers are still loading (the page-wide spinner must not hold it for 40 s)
    if (pageBusy()) { HEALTH.wait = 'spinner / loading text on the page: ' + HEALTH.busyEl; return; }
    if (netBusy() && !(await netIdle(6000))) { HEALTH.wait = 'portal API call in flight'; return; }              // the portal is still fetching (gate criteria, premium, lookup…): pressing Next now leaves it on a blank "Preparing…" loader
    if (recWait && Date.now() - recWait < 30000) { HEALTH.wait = 'waiting for Start recording / Skip'; return; }            // waiting for the tester to start (or skip) the video recording
    if (STOP_AT.test((location.hash || '').split('?')[0] + ' ' + location.pathname)) { HEALTH.wait = 'stop page (payment / end)'; return; }   // the route only – "#/ckyc?nextRef=payment" is the KYC page, not the payment page
    if (Date.now() - lastClickAt < 2500 * SPEED()) { HEALTH.wait = 'just clicked'; return; }
    await sleep(400);
    const ov = Q('.p-select-overlay, .p-datepicker-panel, .MuiPopover-root, .react-select__menu, .dp__menu, .mx-datepicker-popup, .vdp-datepicker__calendar, .datepicker-dropdown, .flatpickr-calendar.open, [class*="datepicker"][class*="popup"]').filter(vis);
    if (ov.length) { if (liveOpts().length) { closeOverlays(); await sleep(250); } else { closeOverlays(); await sleep(250); } }
    if (await handleQuotes()) { HEALTH.wait = 'quote list'; return; }
    if (A().chooseCard) { const r = await A().chooseCard(); if (r) { lastClickAt = Date.now(); return; } }
    { const clicksHere = Object.entries(JSON.parse(sessionStorage.getItem('sb4_btnclicks') || '{}')).filter(([k]) => k.startsWith((location.hash || location.pathname).split('?')[0] + '|')).reduce((a, [, n]) => a + n, 0);
      const dead = customSelects().filter((s) => isEmptyCustom(s) && !isDisabledCustom(s) && (/\*/.test(labelOf(s)) || clicksHere >= 2) && noOptionsAt.has(s.id || labelOf(s) || s));   // an unstarred empty list also counts once the page refuses to move on
      if (dead.length) { const k = 'sb4_noopt_' + (location.hash || location.pathname).split('?')[0]; const n = +(sessionStorage.getItem(k) || 0) + 1; sessionStorage.setItem(k, n);
        if (n >= 3) { sessionStorage.removeItem(k); onBlocked(`Required dropdown "${labelOf(dead[0]).replace(/\s*\*\s*$/, '')}" has no options to choose from – portal / master data missing for this plan` + (netSummary() ? ' – ' + netSummary().slice(0, 200) : '')); return; } } }
    { const em = emptyRequired(); const ek = (location.hash || location.pathname).split('?')[0];   // keyed by route only: the list of empty fields may flicker while the page re-renders, the clock must not restart
      if (em.length) { if (emptyState.key !== ek) emptyState = { key: ek, since: Date.now(), tries: 0 };
        if (Date.now() - emptyState.since > 4000 && !emptyState.refilled && !netBusy() && !pageBusy()) { emptyState.refilled = true; lastFill = { sig: '', at: 0, clean: false }; filling = false; const l = await withTimeout(fillPage(), 45000, 'fill'); if (l && l.length) { console.log('[SB4] refill', l); HEALTH.note('required fields were empty after the first fill – filled again'); return; } }   // the page was (re)rendered after the first fill: the ordinary filler runs once more before any self-heal
        if (Date.now() - emptyState.since > 8000 && Date.now() - healState.at > 8000 && (healState.route !== (location.hash || location.pathname).split('?')[0] || healState.n < 6)) { const l = []; const n = await selfHeal(l); if (n) { console.log('[SB4] self-heal', l); return; } }   // empty required fields for 12 s: repair them instead of waiting
        HEALTH.wait = 'required field still empty: ' + em.slice(0, 3).join(', '); if (Date.now() - emptyState.since < 45000 + emptyState.tries * 30000) return;       // a required field the filler cannot clear for 45 s (a filled dropdown the portal still flags, a stray overlay…): press the button anyway – the portal's own validation decides
        emptyState.tries++; emptyState.since = Date.now(); console.log('[SB4] pressing on despite empty-looking fields:', em.join(', ')); }
      else emptyState = { key: '', since: 0, tries: 0 }; }
    { const clicksHere = Object.entries(JSON.parse(sessionStorage.getItem('sb4_btnclicks') || '{}')).filter(([k]) => k.startsWith((location.hash || location.pathname).split('?')[0] + '|')).reduce((a, [, n]) => a + n, 0);
      if (clicksHere >= 1 && Date.now() - lastClickAt > (isLanding() ? 6000 : 2500) && !netBusy() && !pageBusy() && Date.now() - healState.at > 5000 && (healState.route !== (location.hash || location.pathname).split('?')[0] || healState.n < 8) && (errorList().length || emptyRequired().length)) { const l = []; const n = await selfHeal(l); if (n) { console.log('[SB4] self-heal', l); return; } } }   // the button was pressed and the page shows errors: repair first, press again on the next pass
    if (vsOn() && !vsDoneHere() && !vsBusy && !netBusy() && !pageBusy() && !activeModal()) { vsBusy = true; HEALTH.wait = 'validation sweep'; vsSweepPage().catch((e) => console.log('[SB4] validation', e.message)).finally(() => { vsBusy = false; }); return; }   /* v5.36 */
    const b = primaryButton(); if (!b) { HEALTH.wait = 'no next button found'; return; }
    if (/otp|verify|submit|confirm/i.test(b.innerText || b.value || '') && Q('input').some((i) => vis(i) && isOtp(i) && i.value)) { const k = 'sb4_otpsubmits_' + (cfg().fresh || '') + (location.hash || location.pathname).split('?')[0]; sessionStorage.setItem(k, +(sessionStorage.getItem(k) || 0) + 1); }
    { const tried = JSON.parse(sessionStorage.getItem('sb4_btnclicks') || '{}'); const k = (location.hash || location.pathname).split('?')[0] + '|' + (b.innerText || b.value || '').trim().toLowerCase().slice(0, 40); tried[k] = (tried[k] || 0) + 1; sessionStorage.setItem('sb4_btnclicks', JSON.stringify(tried)); }
    advancing = true; flagAt = Date.now(); lastClickAt = Date.now(); progress.touch('click ' + (b.innerText || b.value || '').trim());
    try { await journeyShot('before "' + (b.innerText || b.value || '').trim().slice(0, 30) + '"'); } catch (e) {}
    if (netBusy()) { await netIdle(6000); if (pageBusy() || !b.isConnected || !vis(b)) { advancing = false; return; } }   // a value just filled triggered a call: let it finish before the button goes
    if (my !== HEALTH.gen) { advancing = false; return; }                                  // this tick was cut off by the supervisor meanwhile: a fresh tick decides, not a stale one
    HEALTH.wait = ''; lastFill = { sig: '', at: 0, clean: false }; console.log('[SB4] click', (b.innerText || '').trim(), location.hash); b.click(); await sleep(1500); advancing = false; selfUntil = Date.now() + 2500 * SPEED();
  }

  /* ---------------- progress / stall watchdog + batch queue ---------------- */
  const STALL_MS = () => S.get('stallMs', 90000);
  const LOAD_MAX = 300000;                                   // a loading screen may stay up to 5 min (CKYC fetch on demo takes 2–3 min)
  const progress = {
    sig: '', since: Date.now(), last: '',
    touch(what) { this.last = what; },
    seen: new Set(),
    check() {
      const route = location.href.split('?')[0];
      const sig = route + '|' + (document.querySelector('h1,h2,h3,.active') || {}).innerText + '|' + Q('input, select, textarea, .p-select').filter(vis).map((e) => e.name || e.id || labelOf(e)).join(',');
      if (!sig.startsWith(this.route || '#none')) { if (this.route && Object.keys(healState.pending).length && healState.route && route !== healState.route.split('?')[0] && !route.endsWith(healState.route)) healCommit(); this.seen = new Set(); this.route = route + '|'; this.routeSince = Date.now(); }
      const NFq = (typeof unsafeWindow !== 'undefined' ? unsafeWindow : window).__sbNet || { n: 0, last: 0 }; const quiet = NFq.n === 0 && Date.now() - NFq.last > 15000;   // nothing has been requested for 15 s: a loader still showing is waiting for nothing
      const stuckFor = Date.now() - (this.routeSince || Date.now()); const limit = quiet ? 25000 : Math.max(STALL_MS(), 75000);
      if (running() && advanceOn() && stuckFor > limit && !STOP_AT.test(route.replace(/^https?:\/\/[^/]+/, ''))) {   // a loading screen that never finishes: go one step back and redo the page (twice at most), then report
        const ld = Q('body *').find((e) => vis(e) && e.children.length === 0 && /preparing|please wait|loading|fetching|processing|calculating|submitting/i.test(e.textContent || '') && e.textContent.length < 80);
        const k = 'sb4_back_' + route.replace(/^https?:\/\/[^/]+/, ''); const n = +(sessionStorage.getItem(k) || 0);
        if (ld && n < 2 && Q('input, select, textarea').filter((e) => vis(e) && !ours(e)).length === 0) { sessionStorage.setItem(k, String(n + 1)); this.routeSince = Date.now(); banner('Recover', `Loading screen "${ld.textContent.trim().slice(0, 50)}" stuck for ${Math.round(stuckFor / 1000)} s${quiet ? ' with no request pending' : ''} – going one step back to redo the page (${n + 1}/2)`); progress.touch('back'); try { history.back(); } catch (e) {} return; }
      }
      if (running() && advanceOn() && Date.now() - (this.routeSince || Date.now()) > Math.max(STALL_MS() * 3, 180000)) {
        this.routeSince = Date.now(); const ld = Q('body *').find((e) => vis(e) && e.children.length === 0 && /preparing|please wait|loading|fetching|processing|calculating|submitting|uploading/i.test(e.textContent || '') && e.textContent.length < 80);
        onBlocked(`Stuck on ${route.replace(/^https?:\/\/[^/]+/, '')} for ${Math.round(Math.max(STALL_MS() * 3, 180000) / 60000)} min` + (ld ? ` (loading screen "${ld.textContent.trim()}")` : '')); return;
      }
      if (!this.seen.has(sig)) {                                   // only a page state never seen on this route counts as progress
        this.seen.add(sig);
        this.sig = sig; this.since = Date.now(); this.routeSince = Date.now();
        sessionStorage.removeItem('sb4_btnclicks');                 // the page moved on – button click counters start again
        confirmPendingButton();
        if (running()) {                                   // loop detection: same route entered again and again
          const route = (location.hash || location.pathname).split('?')[0]; const key = 'sb4_visits_' + (cfg().fresh || '');
          const v = JSON.parse(sessionStorage.getItem(key) || '{}'); const last = sessionStorage.getItem(key + '_last');
          if (last !== route) { v[route] = (v[route] || 0) + 1; sessionStorage.setItem(key, JSON.stringify(v)); sessionStorage.setItem(key + '_last', route); }
          if (v[route] > 4) { const path = Object.entries(v).filter(([, n]) => n > 2).map(([r, n]) => `${r}×${n}`).join(', '); onBlocked(`Journey loops – keeps returning to ${route} (${path})`); }
        }
        return;
      }
      if (!running() || !advanceOn()) { this.since = Date.now(); return; }
      { // a visible "Fetching / Loading / Please wait" means the portal (or the insurer) is still working: wait up to LOAD_MAX before calling it a stall
        const ld = Q('body *').find((e) => vis(e) && e.children.length === 0 && /preparing|please wait|loading|fetching|processing|calculating|submitting|uploading/i.test(e.textContent || '') && e.textContent.length < 80);
        if (ld) { this.loadingSince = this.loadingSince || Date.now(); if (Date.now() - this.loadingSince < LOAD_MAX) { this.since = Date.now(); return; } } else this.loadingSince = 0; }
      if (Date.now() - this.since > STALL_MS()) { this.since = Date.now();
        const tk = 'sb4_teach_' + (cfg().fresh || '') + routeKey();
        if (!sessionStorage.getItem(tk)) { sessionStorage.setItem(tk, '1'); const em = emptyRequired();     // first stall on this page: ask the person to show the way, learn it, give one more period
          banner('TEACH ME', `I am stuck on this page${em.length ? ' – empty: ' + em.slice(0, 4).join(', ') : ''}. Fill the missing field(s) or press the right button yourself – I will remember it for next time. Waiting ${Math.round(STALL_MS() / 1000)}s more before recording BLOCKED.`); return; }
        const ld = Q('body *').find((e) => vis(e) && e.children.length === 0 && /preparing|please wait|loading|fetching|processing|calculating|submitting|uploading/i.test(e.textContent || '') && e.textContent.length < 80);
        onBlocked((ld ? 'Stuck on loading screen "' + ld.textContent.trim() + '"' : 'No progress') + ' for ' + Math.round(STALL_MS() / 1000) + 's' + (emptyRequired().length ? '; empty required: ' + emptyRequired().join(', ') : '') + (this.last ? '; last action: ' + this.last : '')); }
    },
  };
  // one journey at a time per browser: the tab that started it owns it (window.name survives navigation, even across portals)
  const otherTab = () => false;                      // every tab has its own journey now
  const running = () => !!cfg().running && !isOff() && !otherTab();
  const OFFK = () => 'off_' + TAB_ID;
  const isOff = () => S.get(OFFK(), false) === true || S.get('off', false) === true;       // this tab's own STOP, or the (menu) "stop on all tabs"
  function switchOff(all) {           // ■ STOP (v5.21): stops the journey in THIS tab only – journeys in other tabs keep running; menu → "Stop on all tabs" switches every tab off
    S.set(OFFK(), true); if (all) S.set('off', true); setCfg({ running: false, batch: false, batchAll: false, queue: [], tab: '' }); S.set(ADVK(), false);
    try { if (rec) stopRecording(); } catch (e) {}
    ['sb-dialog', 'sb-picker', 'sb-issues', 'sb-banner', 'sb-recask', 'sb-menu'].forEach((id) => { const x = document.getElementById(id); if (x) x.remove(); });
    refreshPanel();
  }
  function switchOn() { S.set(OFFK(), false); S.set('off', false); S.set(ADVK(), true); refreshPanel(); }   // ▶ Start here lifts this tab's stop and a global stop (the tab you start in is the one you want running)
  let passSeen = 0;
  function amendPassIfError() {            // the portal showed Thank You and then an error page: correct the record
    const list = S.get('results', []); const last = list[list.length - 1]; if (!last || !/^PASS$/.test(last.status) || Date.now() - new Date(last.at).getTime() > 45000 || last.amended) return;
    const t = (document.body && document.body.innerText || '').slice(0, 1500);
    if (/#\/alert|errorhandle|\/error/i.test(location.hash) || /application error|no response received|something went wrong|please try again/i.test(t)) {
      last.status = 'BLOCKED'; last.amended = true; last.msg = 'Thank You page was followed by an error page: ' + ((t.match(/application error[^.]*\.?[^.]*\.?/i) || [''])[0] || t.slice(0, 160)).trim(); last.step = location.hash || location.pathname; last.api = netSummary().slice(0, 600);
      S.set('results', list); banner('BLOCKED', last.msg);
    }
  }
  const ERR = /facing some issue|something went wrong|internal server error|unable to process|service unavailable|application error|no response received|session (has )?expired|request failed|error response from insurer|errormessage\s*:|error code\s*:?\s*\d{3}|failed to (load|fetch)|server caught|unexceptional error|cannot continue with|contact your admin|details? (is|are) missing|not configured|configuration (is )?missing|invalid (agent|distributor|consumer) ?id|unauthori[sz]ed access|quota .{0,30}exceed|limit exceeded|not authori[sz]ed|no product avail|credentials are not defined/i;
  function detectEnd() {
    if (!running()) return;
    let t = document.body.innerText; for (const id of ['sb-panel', 'sb-banner', 'sb-picker', 'sb-dialog', 'sb-issues']) { const e = document.getElementById(id); if (e && e.innerText) t = t.replace(e.innerText, ''); }
    const visited = Object.keys(JSON.parse(sessionStorage.getItem('sb4_visits_' + (cfg().fresh || '')) || '{}'));
    if (/complete (the )?kyc in (a )?new (tab|window)|enable pop-?ups for this site/i.test(t) || (window.__sbPopUrl && /valid for the next \d+ mins?/i.test(t) && /click here to cancel/i.test(t))) {       // insurer KYC runs on the insurer's own page in a pop-up: not something the runner can fill
      const cancel = Q('button, a').find((b) => vis(b) && /click here to cancel|cancel/i.test(b.innerText || '')); if (cancel) { try { cancel.click(); } catch (e) {} }
      onBlocked(`Insurer KYC opens in a new tab (pop-up)${window.__sbPopUrl ? ' – ' + String(window.__sbPopUrl).slice(0, 120) : ' – the browser blocked the pop-up'}; it has to be completed by hand on the insurer's KYC page (allow pop-ups for this site and run the journey in "Fill only" mode)`); return; }
    { const m = t.match(/status\s*:?\s*(awaiting|pending|waiting for)\s+[^\n]{0,40}?(approval|verification|review)/i) || t.match(/\b(awaiting|pending)\s+(av|agent|advisor|branch|manager|rm)\s+(approval|verification)\b/i);   // DIY review page parked on "Status: Awaiting AV Approval" – nothing to click, the proposal waits for an approver
      if (m && /review|check|summary|proposal/i.test(location.hash + location.pathname) && !primaryButton() && Date.now() - (cfg().fresh || 0) > 20000) { onBlocked(`Proposal parked by the portal – "${m[0].trim().slice(0, 60)}": the DIY journey waits for an approval on the 1SB side (no button to continue with), nothing more the customer can do here`); return; } }
    const journeyed = visited.some((r) => /quote|proposal|checkout|policy|kyc|payment|review|summary/i.test(r)) || (A().journeyed && A().journeyed());
    const heads = Q('h1, h2, h3, h4, .page-title, [class*="thank"], [class*="success"]').filter(vis).map((e) => (e.innerText || '').trim()).join(' | ');
    const successHead = /thank\s*you|congratulations|successfully submitted|proposal (has been )?submitted|application (has been )?submitted|policy (has been )?issued/i.test(heads) || /thank\s*you|congratulations/i.test(t.slice(0, 600));
    const passNow = (/thank-?you|success|congrat/i.test(location.hash) || successHead) && journeyed && !/error|failed|no response|try again/i.test(t.slice(0, 600));
    if (passNow) { const ref = (t.match(/\b(JID|JRN|APP|TXN)[A-Z0-9-]*[-_]?\d{3,}\b|Application (Number|No\.?)\s*:?\s*\d{6,}/i) || [''])[0];
      if (ref && ref === sessionStorage.getItem('sb4_lastpassref')) return;                 // the previous journey's Thank You page is still on screen – not a new result
      if (!passSeen) { passSeen = Date.now(); return; } if (Date.now() - passSeen > 2500) { if (ref) sessionStorage.setItem('sb4_lastpassref', ref); finishJourney('PASS', 'Reached Thank You / success page'); return; } return; }   // the success page must still be there 2.5 s later (some portals flash it before an error page)
    passSeen = 0;
    if (journeyed && /proposal submitted|preparing your payment page|fetching your payment link|redirecting (you )?to (the )?payment/i.test(t.slice(0, 1500))) { finishJourney('PASS (stopped at payment)', 'Proposal submitted – portal is opening the insurer payment page; the script never pays'); return; }
    const routeOnly = (location.hash || location.pathname).split('?')[0];                    // never the query string: an error page's msg=…premiumPaymentTerm… is not a payment page
    if (!/errorhandle|\/error|alert/i.test(routeOnly) && (/(^|[\/#_.-])(?<!confirm-|review-|summary-)(payment|razorpay|payu|billdesk|pay-?now)(?=$|[\/#_.?\s-])/i.test(routeOnly + ' ' + location.host) || (/proceed to pay|pay now|make payment/i.test(t) && !primaryButton() && !ERR.test(t.slice(0, 600))))) { finishJourney('PASS (stopped at payment)', 'Reached payment step – script never pays'); return; }
    // OTP: filled with the test OTP by fillOtp(); if the same OTP screen is still there after 3 submits, record it
    const otpIn = Q('input').find((i) => vis(i) && !i.disabled && !ours(i) && isOtp(i));
    const otpKey = 'sb4_otpsubmits_' + (cfg().fresh || '') + (location.hash || location.pathname).split('?')[0];
    if (!otpIn) sessionStorage.removeItem(otpKey);
    else if (otpDone()) sessionStorage.removeItem(otpKey);
    else if (advanceOn() && +(sessionStorage.getItem(otpKey) || 0) >= 3) { sessionStorage.removeItem(otpKey); onBlocked(`OTP ${OTP()} not accepted after 3 submits (field "${labelOf(otpIn)}")` + (errorList().length ? ': ' + errorList().join('; ') : '')); return; }
    // KYC: if the KYC page comes back twice with "fill" mode, switch this journey to "let customer complete KYC"
    if (/kyc|upload-?doc|ovd|documents/i.test(location.hash + location.pathname) && !kycDefer()) { const v = JSON.parse(sessionStorage.getItem('sb4_visits_' + (cfg().fresh || '')) || '{}'); const r = (location.hash || location.pathname).split('?')[0];
      const tried = JSON.parse(sessionStorage.getItem('sb4_btnclicks') || '{}'); const fetches = Object.entries(tried).filter(([k]) => k.startsWith(r + '|') && /fetch|verify|upload|submit/.test(k)).reduce((s, [, n]) => s + n, 0);
      const deferCtl = Q('input[type=checkbox], button').filter((e) => vis(e) && /customer complete kyc|continue without kyc|complete kyc later/i.test(labelOf(e) + ' ' + (e.innerText || '')));
      const docTries = +(sessionStorage.getItem('sb4_docvar_' + (location.hash || location.pathname).split('?')[0]) || 0);
      if (docTries > 0 && docTries < 5 && fetches < 8) return;                           // document variants are still being tried (smaller / PNG / PDF / other type / plain card)
      if (fetches >= 3 && !deferCtl.length && /kyc|ocr|document|upload|already (present|exists)/i.test(netSummary() || '')) { onBlocked('KYC document upload / fetch is not accepted' + (docTries ? ` (tried ${docTries} document variants: ${DOC_VARIANTS.slice(1, docTries + 1).join(', ')})` : '') + ' and this page has no "Let customer complete KYC" option – ' + (netSummary() || '').slice(0, 300)); return; }
      if (fetches >= 3 && deferCtl.length && deferCtl.every((e) => e.disabled || /p-disabled|disabled/.test((e.parentElement || {}).className || ''))) { onBlocked('KYC (fetch / document upload) is not accepted and "Let customer complete KYC" is disabled on this portal' + (netSummary() ? ' – ' + netSummary().slice(0, 300) : '')); return; }
      if (((v[r] || 0) >= 2 || fetches >= 3) && deferCtl.some((e) => !e.disabled)) { sessionStorage.setItem('sb4_kycdefer', '1'); banner('KYC', (fetches >= 3 ? 'KYC fetch / upload gives no result (' + (netSummary().split('\n')[0] || 'no API error shown').slice(0, 120) + ')' : 'KYC with test documents was not accepted') + ' – continuing with "Let customer complete KYC"'); } }
    // ERR is defined at module level (used above as well)
    const kycRoute = /kyc|upload-?doc|ovd|documents/i.test(location.hash + location.pathname);
    const deferOK = kycRoute && !kycDefer() && Q('input[type=checkbox], button').some((e) => vis(e) && !e.disabled && !/p-disabled/.test((e.parentElement || {}).className || '') && /customer complete kyc|continue without kyc|complete kyc later/i.test(labelOf(e) + ' ' + (e.innerText || '')));
    if (deferOK && ERR.test(t) && !otpIn) { sessionStorage.setItem('sb4_kycdefer', '1'); banner('KYC', 'KYC service error on this page (' + ((t.split('\n').find((l) => ERR.test(l)) || '').trim().slice(0, 100)) + ') – continuing with "Let customer complete KYC"'); return; }
    if (HERE.lob === 'Embedded' && /quote form data is missing/i.test(t) && Date.now() - (cfg().fresh || 0) < 120000 && sessionStorage.getItem('sb4_embretry') !== String(cfg().fresh || '')) {   // embedded app lost its wizard state on the way in – open it again with a full page load (once per journey)
      sessionStorage.setItem('sb4_embretry', String(cfg().fresh || '')); banner('Embedded', 'Portal says "Quote form data is missing" – reopening the form wizard'); location.assign(location.origin + '/?sb=' + Date.now() + '#/form-wizard'); return; }
    if (/errorhandle|#\/alert|\/error/i.test(location.hash) || (ERR.test(t) && !otpIn)) { const NOISE = /intended for demonstration purposes|^dashboard$|^home$/i; const near = t.split('\n').map((l) => l.trim()).filter((l) => l && !NOISE.test(l)); const hashMsg = decodeURIComponent((location.hash.match(/[?&]msg(?:Error)?=([^&]*)/) || [])[1] || '').replace(/\+/g, ' ').trim(); const i = near.findIndex((l) => ERR.test(l)); const line = i >= 0 ? near[i] : hashMsg; onBlocked(('Portal error page: ' + [line, near[i + 1], near[i + 2], near[i + 3]].filter((l) => l && !/^go back|^retry|^try again|^dashboard|^home$/i.test(l) && !/\*\s*$|^select$/i.test(l)).join(' – ').replace(/Request Id:\s*[0-9a-f-]{20,}\.?/i, '').replace(/\s+–\s+–/g, ' –').slice(0, 320)) + (netSummary() && /^Oops|something went wrong/i.test(line) ? ' – ' + netSummary().slice(0, 220) : '')); }
  }
  let ending = false;
  function onBlocked(msg) { finishJourney('BLOCKED', msg); }
  let endedFresh = null;
  function finishJourney(status, msg) {
    if (ending) return; ending = true; endedFresh = cfg().fresh || null;
    const entry = record(status, msg); banner(status, msg); const evP = finishEvidence(status, msg);
    try { if (vsOn() && ((S.get('vsReport', {}) || {}).pages || []).length) setTimeout(vsDownload, 1500); } catch (e) {}   /* v5.36: the validation report at the end of the swept journey */
    try { jiraOnResult(entry); } catch (e) { console.log('[SB4] jira', e.message); }
    setCfg({ running: false, tab: '' });
    const c = cfg();
    if (c.batch && c.queue && c.queue.length) {
      const next = c.queue.shift(); setCfg({ queue: c.queue, product: next });
      setTimeout(() => evP.finally(() => { if (!cfg().batch) { ending = false; return; } const n = generateProfile(); if (!P.custom) P = Object.assign({}, P, { phone: n.phone, email: `${P.first}.${P.last}.test${digits(3)}@example.com`.toLowerCase(), nominee: Object.assign({}, P.nominee, { phone: n.nominee.phone }) }); S.set('profile', P); ending = false; startJourney(c.env || HERE.env, c.lob || HERE.lob, c.mode); }), 4000);   // after the PDF / pictures / video of this journey are saved; same person for the whole batch so every queued plan is quoted again
    } else if (c.batch && (c.nextCats || []).length) {                 // "all categories": the next category's full list is the next batch
      const nc = c.nextCats[0]; setCfg({ category: nc, nextCats: c.nextCats.slice(1), product: '*', queue: [], batch: true, batchAll: true, seen: null, retried: [] }); banner('BATCH', `Category "${c.category}" done – starting "${nc}" in 4 s`);
      setTimeout(() => evP.finally(() => { if (!cfg().batch) { ending = false; return; } ending = false; startJourney(c.env || HERE.env, c.lob || HERE.lob, c.mode); }), 4000);
    } else if (c.batch) { banner('BATCH DONE', 'All products in the queue were run. Open "Results" for the table.'); setCfg({ batch: false }); }
  }

  function startJourney(env, lob, mode) {
    const u = startUrl(env, lob, mode); if (!u) { banner('BLOCKED', `${lob} is not available on ${env}`); return; }
    { const cat = cfg().category || ''; const needAge = /annuity/i.test(cat) ? 50 : /retire|pension/i.test(cat) ? 45 : 0;     // retirement plans: immediate / deferred annuities want 40–70 (some 45+), pension ≥ 40 for most insurers
      if (needAge && P.age < needAge) applyPerson(Object.assign({}, P, { age: needAge, income: Math.round(+P.income / 100000) })); }
    ending = false; keepAwake(true); const keep = cfg(); S.set(CFGK(), { tab: TAB_ID, mode: keep.mode, env, lob, quoteFix: keep.quoteFixTried ? keep.quoteFix : null, quoteFixTried: keep.quoteFixTried || 0, category: keep.lob === lob ? keep.category || '' : '', product: keep.product || '', queue: keep.queue || [], batch: !!keep.batch, batchAll: !!keep.batchAll, retried: keep.batch ? keep.retried || [] : [], seen: keep.batch ? keep.seen || null : null, nextCats: keep.batch ? keep.nextCats || [] : [], variation: keep.variation || '', expectFail: !!keep.expectFail, ruleId: keep.ruleId || '', customUrl: keep.customUrl || '', gsRow: keep.gsPortal ? keep.gsRow || 0 : 0, gsPortal: !!keep.gsPortal, fromSheet: !!(keep.gsPortal && keep.fromSheet), running: true, fresh: Date.now() });
    sessionStorage.removeItem('sb4_qset'); sessionStorage.removeItem('sb4_relaunched'); sessionStorage.removeItem('sb4_btnclicks'); capClear(); sessionStorage.removeItem('sb4_picker_closed');
    unblockUnload();
    if (location.origin === new URL(u).origin) { freshen();
      if (lob === 'Embedded') {   // embedded app: a plain hash change to "?id=" is handled by its router mid-journey and lands on "Quote form data is missing" (the reload then stays on the error page) – a changed query string forces a full page load straight into the wizard
        if (!hasGM && window.__SB_DEVNORELOAD) { location.assign(location.origin + '/#/form-wizard'); return; }
        location.assign(location.origin + '/?sb=' + Date.now() + '#/form-wizard'); return; }   // the signed-in app (sessionStorage "auth") answers "?id=" with that error even on a full load; its Home route (form-wizard) restarts the journey for the same consumer id
      location.assign(u); if (hasGM || !window.__SB_DEVNORELOAD) setTimeout(() => location.reload(), 300); } else location.assign(u);
  }
  function unblockUnload() {   // Thank-You / proposal pages register "Leave site?" guards – they must not stop the next journey from opening
    try { window.onbeforeunload = null; if (window.__sbUnblocked) return; window.__sbUnblocked = 1;
      const quiet = (e) => { try { Object.defineProperty(e, 'returnValue', { get: () => undefined, set() {}, configurable: true }); e.preventDefault = () => {}; } catch (x) {} e.stopImmediatePropagation(); };
      window.addEventListener('beforeunload', quiet, true); document.addEventListener('beforeunload', quiet, true); } catch (e) {}
  }
  try { if (!window.__sbOpenHooked) { window.__sbOpenHooked = 1; const wo = window.open; window.open = function (u) { try { window.__sbPopUrl = String(u || ''); } catch (e) {} return wo.apply(this, arguments); }; } } catch (e) {}
  unblockUnload();                                            // the runner navigates between journeys itself – "Leave site?" prompts would hang the tab
  function freshen() {        // wipe the portal's own journey state so the new journey does not resume the old one
    const c = cfg(); if (!c.fresh || sessionStorage.getItem('sb4_fresh') === String(c.fresh)) return false;
    if (HERE.lob === 'Form') { sessionStorage.setItem('sb4_fresh', String(c.fresh)); return false; }     // a page that is not a 1SB portal: its own storage is never touched
    // dev/test portals keep the launcher login (token / isAuthenticated) in storage – wiping it bounces the journey back to the launcher,
    // so auth-looking keys are kept and persisted stores (vuex) only lose their journey fields.
    const KEEP = /token|auth|login|logged|user|session|expiry|rm_data|\bdiy\b|distribut|quickform|theme|lang|i18n|consent|cookie|uijourney|currentrole|permission|configdata|deeplink|ptandppt/i;   // app mode / role / config must survive (savings: uiJourney decides savings vs annuity)
    const JOURNEY = /journey|quote|proposal|plan|select|form|step|kyc|premium|payment|customer|member|insured|vehicle|nominee|address|otp|order|cart|rider|addon|category|product/i;
    const PERSON = /^userdata$|^user_data$|quickform(?!.*window)|sp_details|personaldetails|proposer/i;   // the previous journey's person (savings 'userData', quick form) – always starts fresh so the test person is consistent
    const scrub = (store, k) => {
      const raw = store.getItem(k); if (raw == null) return;
      if (/^[\[{]/.test(raw.trim())) {                                  // JSON blob (vuex, pinia, redux-persist …) → reset journey fields, keep auth
        try { const o = JSON.parse(raw); if (o && typeof o === 'object' && !Array.isArray(o)) {
          let touched = false;
          Object.keys(o).forEach((f) => { if (PERSON.test(f)) { /* reset below */ } else if (KEEP.test(f) || !JOURNEY.test(f)) return; const v = o[f]; o[f] = Array.isArray(v) ? [] : v && typeof v === 'object' ? {} : typeof v === 'string' ? '' : typeof v === 'number' ? 0 : typeof v === 'boolean' ? false : null; touched = true; });
          if (touched) store.setItem(k, JSON.stringify(o)); return; } } catch (_) { /* not JSON after all */ }
      }
      if (!KEEP.test(k) || PERSON.test(k)) store.removeItem(k);
    };
    Object.keys(sessionStorage).filter((k) => !/^sb4_/.test(k)).forEach((k) => scrub(sessionStorage, k));
    Object.keys(localStorage).filter((k) => /journey|quote|proposal|vuex|pinia|persist|filled|selected_plan|reqid|state/i.test(k) && !/^sb4_/.test(k)).forEach((k) => scrub(localStorage, k));
    try {                                                                 // savings portal: the app mode (savings / pension / annuity) sticks in the persisted store – a retirement run would leave the category page empty for the next journey
      const raw = sessionStorage.getItem('vuex'); if (raw && /uiJourney/.test(raw)) { const o = JSON.parse(raw); const want = 'savings';                                           /* every journey starts from the savings category page; the Pension / Annuity tab sets its own mode */
        if (o.uiJourney !== want) { o.uiJourney = want; o.configData = ''; sessionStorage.setItem('vuex', JSON.stringify(o));                         // the cached config of the old mode has no category cards – drop it so the portal fetches the savings one
          try { const st = PW.document.querySelector('#app').__vue_app__.config.globalProperties.$store; st.commit('setUiJourney', want); st.commit('setConfigData', ''); } catch (e) {} } }
    } catch (e) {}
    sessionStorage.removeItem('sb4_kycdefer'); sessionStorage.setItem('sb4_fresh', String(c.fresh)); return true;
  }

  /* ---------------- workbook (v5.13): field log → Excel, Excel → form values, Run links ---------------- */
  // Every value the script puts into a form is noted (page, field, type, options, value) and merged into S 'fieldlog' under env|type|lob|category|product.
  // "Export workbook" turns that into one .xlsx (Products / Fields / Persons); "Load workbook" reads an edited copy back – its values win over everything else.
  const FL = { fresh: null, items: {} };
  const flPage = () => (location.hash || location.pathname).split('?')[0].replace(/[0-9a-f]{8}-[0-9a-f-]{27,}|JID[-A-Z0-9]+|\d{4,}/gi, ':id').replace(/^#\/?/, '/') || '/';
  const flCtx = () => { const c = cfg(); const prod = c.product && c.product !== '*' ? c.product : ''; return { env: HERE.env, mode: c.mode || modeHere(), lob: HERE.lob, category: c.category || '', product: prod }; };
  const flKey = (x) => [x.env, x.mode, x.lob, x.category, x.product].join('|');
  const FL_SKIP = /password|\botp\b|captcha|cvv|\bupi\b|card ?(no|number)/i;
  function flNote(type, label, value, options, src) {
    try {
      const lb = String(label || '').replace(/\*/g, '').replace(/\s+/g, ' ').trim(); if (!lb || FL_SKIP.test(lb)) return;
      const c = cfg(); if (FL.fresh !== (c.fresh || null)) { FL.fresh = c.fresh || null; FL.items = {}; }
      const k = flPage() + '|' + type + '|' + LKEY(lb); const prev = FL.items[k] || {};
      let val = value == null ? '' : String(value).slice(0, 200); if (/text|date/.test(type) && val) { const tok = toToken(val) || (val === P.dobISO ? '{{dobISO}}' : val === P.dobSlash ? '{{dobSlash}}' : null); if (tok) val = tok; }   // the person's own details are stored as {{first}}, {{email}}, {{dobDMY}} … so a row follows whichever Person runs it
      FL.changed = true; FL.items[k] = { page: flPage(), label: lb, key: LKEY(lb), type, value: val, options: options && options.length ? [...new Set(options.map((o) => String(o).trim()).filter(Boolean))].slice(0, 40).join(' | ') : prev.options || '', req: /\*/.test(String(label || '')) || prev.req || false, src: src || 'script', at: new Date().toISOString().slice(0, 16) };
    } catch (e) {}
  }
  let flLast = 0;
  function flFlush(force) {   // the journey's fields so far → S 'fieldlog' under the current product (pre-quote pages first live under product '' and move once the plan is known); at most every 5 s, only when something new was noted
    try {
      if (!Object.keys(FL.items).length || (!force && !FL.changed)) return; if (!force && Date.now() - flLast < 5000) return; FL.changed = false; flLast = Date.now();
      const ctx = flCtx(); if (HERE.lob === 'Form') { ctx.env = 'custom'; ctx.product = location.host; }
      const key = flKey(ctx); const L = S.get('fieldlog', {}); const e = L[key] || { fields: {} };
      Object.assign(e.fields, FL.items); e.at = new Date().toISOString().slice(0, 16); e.ctx = ctx; L[key] = e;
      if (ctx.product) { const k0 = flKey(Object.assign({}, ctx, { product: '' })); if (L[k0] && L[k0].at && Date.now() - new Date(L[k0].at).getTime() < 3 * 3600 * 1000) delete L[k0]; }
      const keys = Object.keys(L); if (keys.length > 400) keys.slice(0, keys.length - 400).forEach((k) => delete L[k]);
      S.set('fieldlog', L);
    } catch (e) { console.log('[SB4] fieldlog', e.message); }
  }

  try { window.addEventListener('beforeunload', () => flFlush(true)); } catch (e) {}   // a full page load must not lose the last seconds of notes
  // ---- values from the loaded workbook ----
  let SHEET_IDX = { at: '', ctx: '', map: null };
  const sheetDb = () => S.get('sheet', null);
  const sheetOk = (a, b) => { a = String(a == null ? '' : a).trim(); if (!a || a === '*') return true; return a.toLowerCase() === String(b || '').toLowerCase(); };
  const prodOk = (a, b) => { a = String(a == null ? '' : a).trim(); if (!a || a === '*') return true; if (!b) return false; if (a.toLowerCase() === String(b).toLowerCase() || nkey(a) === nkey(b)) return true; const r = rulesFor(HERE.lob, b); return !!(r && (r.id === a || (r.m + '|' + r.id) === a)); };
  function sheetIndex() {
    if (!cfg().fromSheet) return null;                 // ordinary journeys: no sheet lookup at all (the big 'sheet' record is not even read)
    const sh = sheetDb(); if (!sh || !sh.rows || !sh.rows.length) return null;                 // only a journey started from a ▶ Run link or with "Use values from the workbook" ticked takes values from the file – otherwise the script fills as it always did
    const ctx = flCtx(); const ck = flKey(ctx) + '|' + (sh.at || '');
    if (SHEET_IDX.map && SHEET_IDX.ctx === ck) return SHEET_IDX.map;
    const map = {}; const page = flPage();
    for (const r of sh.rows) {
      if (!sheetOk(r.env, ctx.env) || !sheetOk(r.mode, ctx.mode) || !sheetOk(r.lob, ctx.lob) || !sheetOk(r.category, ctx.category) || !prodOk(r.product, ctx.product)) continue;
      const k = LKEY(r.key || r.field); if (!k) continue;
      const spec = (r.product && r.product !== '*' ? 8 : 0) + (r.category && r.category !== '*' ? 4 : 0) + (r.env && r.env !== '*' ? 2 : 0) + (r.lob && r.lob !== '*' ? 1 : 0) + (r.page && r.page === page ? 16 : 0);
      if (r.page && r.page !== '*' && r.page !== page) continue;
      const t = String(r.type || '').toLowerCase().trim(); const slot = (map[k] = map[k] || {});
      if (!slot[t] || slot[t].spec <= spec) slot[t] = { v: r.value == null ? '' : String(r.value).trim(), spec };
    }
    { const ed = (S.get('sheetEdits', {}) || {})[flKey(ctx)] || {}; Object.entries(ed).forEach(([k, v]) => { const slot = (map[LKEY(k)] = map[LKEY(k)] || {}); Object.keys(slot).forEach((t) => (slot[t] = { v: String(v), spec: 99 })); if (!Object.keys(slot).length) slot[''] = { v: String(v), spec: 99 }; }); }   // values changed in the ▶ Start dialog win over the file
    SHEET_IDX = { ctx: ck, map }; return map;
  }
  function sheetValue(label, type) {         // the workbook's value for this field (undefined = not in the workbook; '' = leave empty)
    try { const m = sheetIndex(); if (!m || !label) return undefined; const slot = m[LKEY(label)]; if (!slot) return undefined; const e = slot[type] || slot[''] || slot[Object.keys(slot)[0]]; if (!e) return undefined; const v = fromToken(e.v); return /^\((blank|empty|skip)\)$/i.test(v) ? '' : v; } catch (e) { return undefined; }
  }
  const sheetHas = () => { const sh = sheetDb(); return !!(sh && sh.rows && sh.rows.length); };

  // ---- Excel in / out ----
  const ENVS3 = ['demo', 'dev', 'test'];
  const PERSON_COLS = ['first', 'middle', 'last', 'gender', 'age', 'phone', 'email', 'income', 'pin'];
  function personRow(id, p) { return { id, first: p.first, middle: p.middle || '', last: p.last, gender: p.gender, age: p.age, phone: p.phone, email: p.email, income: Math.round(+p.income / 100000), pin: p.pin }; }
  function runBase(env, lob, mode) {
    const u = startUrl(env, lob, mode); if (!u) return '';     // the parameters go at the very end: into the hash query of a "#/?id=…" portal (the apps drop a real query string), else the query string
    const h = u.indexOf('#'); const tail = h < 0 ? u : u.slice(h);
    return u + (tail.includes('?') ? '&' : '?') + 'sb4=run&env=' + enc(env) + '&mode=' + enc(mode) + '&lob=' + enc(lob);
  }
  const enc = (x) => encodeURIComponent(String(x == null ? '' : x));
  const ID_COLS = ['Env', 'Journey type', 'LOB', 'Category', 'Product', 'Code', 'Insurer', 'Person', 'Auto', '▶ Run', 'Run (Person / Auto of this row)', 'Last status', 'Reference', 'Values from'];
  const FIELD_START = ID_COLS.length;                                   // first field column (0-based) on a journey sheet
  const SHEET_PASS = () => String(S.get('sheetPass', '1sb') || '1sb');

  // One row per product; one column per field the forms of that LOB have (v5.14). Values: this product's own run, else the latest run of the same portal, else the LOB's.
  function wbModel() {
    const L = S.get('fieldlog', {}); const results = S.get('results', []); const sh = sheetDb(); const edits = S.get('sheetEdits', {});
    const persons = Object.assign({}, (sh && sh.persons) || {}); if (!Object.keys(persons).length) persons.P1 = personRow('P1', P);
    const byLob = {};
    const colOf = (lob) => (byLob[lob] = byLob[lob] || { cols: {}, order: [], rows: [], tpl: {} });
    const colKey = (f) => f.type + '|' + f.key;
    Object.values(L).forEach((e) => { const c = e.ctx || {}; if (!c.lob || c.lob === 'Form') return; const B = colOf(c.lob);
      Object.values(e.fields).forEach((f) => { const k = colKey(f); if (!B.cols[k]) { B.cols[k] = { key: f.key, type: f.type, label: f.label, page: f.page, options: new Set(), at: f.at || '' }; B.order.push(k); }
        const col = B.cols[k]; if (f.options) f.options.split(' | ').forEach((o) => o && col.options.add(o)); if (f.value && /select|radio|checkbox|file/.test(f.type)) col.options.add(f.value);
        [c.env + '|' + c.mode, c.env, '*'].forEach((tk) => { const t = (B.tpl[tk] = B.tpl[tk] || {}); if (!t[k] || (t[k].at || '') <= (f.at || '')) t[k] = { v: f.value, at: f.at || '' }; }); }); });
    if (sh && sh.cols) Object.entries(sh.cols).forEach(([k, c]) => { const B = colOf(c.lob || ''); if (!c.lob) return; if (!B.cols[k]) { B.cols[k] = { key: c.key, type: c.type, label: c.label, page: c.page || '', options: new Set(c.options || []), at: '' }; B.order.push(k); } else (c.options || []).forEach((o) => B.cols[k].options.add(o)); });   // columns of the loaded workbook survive a re-export
    Object.values(byLob).forEach((B) => B.order.sort((a, b) => (B.cols[a].at || '').localeCompare(B.cols[b].at || '') || B.cols[a].page.localeCompare(B.cols[b].page) || B.cols[a].label.localeCompare(B.cols[b].label)));
    const loaded = {}; if (sh && sh.wide) sh.wide.forEach((r) => (loaded[r.rowKey] = r));
    for (const env of ENVS3) for (const mode of ['assisted', 'diy']) for (const lob of (mode === 'diy' ? LOBS_DIY : LOBS_ASSISTED)) {
      if (!startUrl(env, lob, mode)) continue; const cat = catalogFor(env, lob); const B = colOf(lob);
      for (const [category, list] of Object.entries(cat)) for (const name of (list.length ? list : [''])) {
        const r = rulesFor(lob, name); const rowKey = [env, mode, lob, category, name].join('|');
        const last = results.slice().reverse().find((x) => x.env === env && (x.mode || 'assisted') === mode && x.lob === lob && nkey(x.product) === nkey(name) && name);
        const own = L[rowKey]; const tpl = B.tpl[env + '|' + mode] || B.tpl[env] || B.tpl['*'] || {}; const ld = loaded[rowKey]; const ed = edits[rowKey] || {};
        const values = {}; let from = own ? 'this product' : Object.keys(tpl).length ? (B.tpl[env + '|' + mode] ? 'other plans on this portal' : 'other portals of this LOB') : '';
        B.order.forEach((k) => { const c = B.cols[k]; let v = own && own.fields ? (Object.values(own.fields).find((f) => colKey(f) === k) || {}).value : undefined; if (v === undefined && tpl[k]) v = tpl[k].v; if (ld && ld.values && ld.values[c.key] !== undefined && ld.values[c.key] !== '') { v = ld.values[c.key]; from = 'workbook'; } if (ed[c.key] !== undefined) { v = ed[c.key]; from = 'edited in the script'; } values[c.key] = v === undefined ? '' : String(v); });
        const base = runBase(env, lob, mode); const person = (ld && ld.person) || 'P1', auto = (ld && ld.auto) || 'yes';
        B.rows.push({ rowKey, env, mode, lob, category, name, code: r ? r.id : '', m: r ? r.m : '', person, auto, base, link: base ? base + '&category=' + enc(category) + '&product=' + enc(name) + '&code=' + enc(r ? r.id : '') + '&person=' + enc(person) + '&auto=' + enc(auto) : '', status: last ? last.status : '', ref: last ? last.ref || '' : '', from, values });
      }
    }
    return { byLob, persons };
  }
  function exportWorkbook() {
    const M = wbModel(); const name = '1sb-journeys-' + new Date().toISOString().slice(0, 10);
    const readme = [['1SB Universal Journey Runner – journey workbook', ''], ['', ''],
      ['One sheet per line of business', 'one row per environment × journey type × category × product; one column per form field (the columns after "Values from"). Row 1 = field name, row 2 (hidden) = the key the script matches. The yellow cells are the only editable ones: Person, Auto and the field values – a cell with a dropdown lists the options the portal offered; a text cell takes the value as typed (dd-mm-yyyy for dates; pan / aadhaar / passport / photo for uploads; "(blank)" leaves the field empty; an empty cell = the script\'s own default).'],
      ['▶ Run', 'click the link in column J: the portal opens and the journey for that row starts with the values of that row (person P1, auto-click). Column K is a formula link that uses the Person and Auto cells of the row instead (Excel / Google Sheets calculate it): Auto = yes (fill and press Next up to payment) | quote (stop on the quote page and show the plan list) | no (fill only, you press Next).'],
      ['Values from', 'this product = values captured in a run of this very product; other plans on this portal / other portals of this LOB = prefilled from runs of other plans (change what differs); workbook / edited in the script = your own edits that were loaded back.'],
      ['{{first}}, {{email}} …', 'a value written as {{…}} is taken from the Person of the row (first, middle, last, phone, email, pin, city, state, pan, dobDMY, dobISO, father, mother …) – keep it so every person works; replace it with a plain value to fix that field.'],
      ['Persons', 'P1 is the current test person. Add P2, P3 … (first / middle / last / gender / age / phone / email / income in ₹ lakh / pin) and put the id in the Person column.'],
      ['Locked structure', 'every sheet is protected (password: ' + SHEET_PASS() + ' – set another one in the script\'s Workbook dialog before exporting): columns and rows cannot be added or removed, only the yellow cells can be changed. Review → Unprotect Sheet in Excel to change the structure.'],
      ['Sharing', 'save this file in OneDrive / SharePoint / Google Drive and paste its link in the script (📗 Workbook → shared link): everyone with the script loads the same values, and the file is fetched again before every run. In Google Sheets the protection is kept as "Protected sheets and ranges" – re-apply it there if the import drops it.'],
      ['How to use', '1. Save this file. 2. Script menu → 📗 Workbook → load this file (or paste its shared link). 3. Change the yellow cells, save. 4. Click ▶ Run in the row. Log in to the dev / test launcher first; the script never types passwords.'],
      ['Version', SB_VERSION], ['Exported', new Date().toISOString().slice(0, 16).replace('T', ' ')]];
    const sheets = [{ name: 'README', rows: readme, cols: [26, 150], wrap: true }];
    const lists = { rows: [], cols: [] }; const listRef = (opts, label) => { const arr = [...opts].filter(Boolean).slice(0, 500); if (!arr.length) return ''; const c = lists.cols.length; lists.cols.push([label].concat(arr)); return "Lists!$" + colName(c) + "$2:$" + colName(c) + "$" + (arr.length + 1); };
    Object.entries(M.byLob).forEach(([lob, B]) => {
      if (!B.rows.length) return;
      const fcols = B.order.map((k) => B.cols[k]);
      const row1 = ID_COLS.concat(fcols.map((c) => c.label));
      const row2 = ['env', 'mode', 'lob', 'category', 'product', 'code', 'insurer', 'person', 'auto', 'run', 'run2', 'status', 'ref', 'from'].concat(fcols.map((c) => c.type + '|' + c.key + '|' + c.page));
      const rows = [row1, row2]; const links = []; const vals = fcols.map((c) => ({ type: c.type, ref: /select|radio|checkbox|file/.test(c.type) ? listRef(c.type === 'checkbox' ? new Set(['Yes', 'No', ...c.options]) : c.type === 'file' ? new Set(['pan', 'aadhaar', 'passport', 'voter', 'driving', 'photo', 'bank', 'income', 'pdf', '(blank)', ...c.options]) : c.options, c.label) : '' }));
      B.rows.forEach((r, i) => { const n = i + 3;
        rows.push([r.env, r.mode, r.lob, r.category, r.name, r.code, r.m, r.person, r.auto, r.link ? { v: '▶ Run ' + r.name, l: r.link } : '', r.base ? { v: '▶ Run (custom)', f: `HYPERLINK("${r.base.replace(/"/g, '""')}&category="&ENCODEURL(D${n})&"&product="&ENCODEURL(E${n})&"&code="&F${n}&"&person="&H${n}&"&auto="&I${n},"▶ Run (custom)")` } : '', r.status, r.ref, r.from].concat(fcols.map((c) => r.values[c.key] || ''))); });
      sheets.push({ name: lob.replace(/[\[\]\*\?\/\\:]/g, ' ').slice(0, 31), rows, cols: [7, 9, 12, 20, 34, 7, 8, 7, 6, 30, 15, 18, 22, 20].concat(fcols.map((c) => Math.min(40, Math.max(12, c.label.length + 2)))), hiddenRows: [2], freeze: { r: 2, c: 5 }, autoFilter: true,
        unlocked: (ri, ci) => ri >= 2 && (ci === 7 || ci === 8 || ci >= FIELD_START), validations: vals.map((v, j) => (v.ref ? { col: FIELD_START + j, r1: 3, r2: B.rows.length + 2, ref: v.ref } : null)).concat([{ col: 7, r1: 3, r2: B.rows.length + 2, ref: 'Persons!$A$2:$A$50' }, { col: 8, r1: 3, r2: B.rows.length + 2, list: ['yes', 'quote', 'no'] }]).filter(Boolean), protect: true });
    });
    const prow = [['Id'].concat(PERSON_COLS)].concat(Object.values(M.persons).map((p) => [p.id].concat(PERSON_COLS.map((k) => (p[k] == null ? '' : String(p[k]))))));
    for (let i = prow.length; i < 51; i++) prow.push(['', '', '', '', '', '', '', '', '', '']);
    sheets.push({ name: 'Persons', rows: prow, cols: [6, 12, 12, 12, 8, 5, 12, 30, 12, 8], unlocked: (ri) => ri >= 1, protect: true, validations: [{ col: 4, r1: 2, r2: 51, list: ['Male', 'Female'] }] });
    const lrows = []; const h = Math.max(0, ...lists.cols.map((c) => c.length)); for (let i = 0; i < h; i++) lrows.push(lists.cols.map((c) => c[i] || ''));
    sheets.push({ name: 'Lists', rows: lrows, hidden: true, protect: true });
    xlsxBuild(sheets, SHEET_PASS()).then((blob) => { dl(blob, name + '.xlsx'); const n = Object.values(M.byLob).reduce((a, B) => a + B.rows.length, 0), nc = Object.values(M.byLob).reduce((a, B) => a + B.order.length, 0); banner('Workbook', `${name}.xlsx: ${n} product rows, ${nc} field columns, ${Object.keys(M.persons).length} person(s) – structure locked (password ${SHEET_PASS()})`); })
      .catch((e) => banner('Workbook', 'Export failed: ' + e.message));
  }
  // ---- minimal .xlsx writer (SheetJS community edition writes neither cell protection nor dropdown validation): inline strings, formulas, hyperlinks, hidden rows / sheets, frozen panes, list validation, sheet protection ----
  const colName = (c) => { let s = ''; c++; while (c > 0) { const m = (c - 1) % 26; s = String.fromCharCode(65 + m) + s; c = (c - m - 1) / 26; } return s; };
  const xmlEsc = (x) => String(x == null ? '' : x).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, '');
  const xlsxPass = (p) => { let h = 0; for (let i = p.length - 1; i >= 0; i--) { h = ((h >> 14) & 1) | ((h << 1) & 0x7fff); h ^= p.charCodeAt(i); } h = ((h >> 14) & 1) | ((h << 1) & 0x7fff); h ^= p.length; h ^= 0xCE4B; return h.toString(16).toUpperCase(); };
  async function xlsxBuild(sheets, password) {
    const files = []; const add = (n, t) => files.push({ name: n, data: new TextEncoder().encode(t) });
    add('[Content_Types].xml', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>${sheets.map((_, i) => `<Override PartName="/xl/worksheets/sheet${i + 1}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>`).join('')}</Types>`);
    add('_rels/.rels', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>`);
    add('xl/workbook.xml', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><bookViews><workbookView activeTab="1"/></bookViews><sheets>${sheets.map((s, i) => `<sheet name="${xmlEsc(s.name)}" sheetId="${i + 1}"${s.hidden ? ' state="hidden"' : ''} r:id="rId${i + 1}"/>`).join('')}</sheets></workbook>`);
    add('xl/_rels/workbook.xml.rels', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">${sheets.map((_, i) => `<Relationship Id="rId${i + 1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet${i + 1}.xml"/>`).join('')}<Relationship Id="rId${sheets.length + 1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>`);
    // styles: 0 locked plain, 1 unlocked (yellow), 2 header (bold, grey), 3 locked grey text (meta row), 4 link, 5 wrapped text
    add('xl/styles.xml', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><fonts count="4"><font><sz val="11"/><name val="Calibri"/></font><font><b/><sz val="11"/><name val="Calibri"/></font><font><sz val="9"/><color rgb="FF94A3B8"/><name val="Calibri"/></font><font><u/><sz val="11"/><color rgb="FF2563EB"/><name val="Calibri"/></font></fonts><fills count="4"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill><fill><patternFill patternType="solid"><fgColor rgb="FFFFF9C4"/></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFE2E8F0"/></patternFill></fill></fills><borders count="1"><border/></borders><cellXfs count="6"><xf numFmtId="49" fontId="0" fillId="0" borderId="0" applyNumberFormat="1"/><xf numFmtId="49" fontId="0" fillId="2" borderId="0" applyFill="1" applyNumberFormat="1" applyProtection="1"><protection locked="0"/></xf><xf numFmtId="0" fontId="1" fillId="3" borderId="0" applyFont="1" applyFill="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="0" applyFont="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="0" applyFont="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyAlignment="1"><alignment wrapText="1" vertical="top"/></xf></cellXfs></styleSheet>`);
    sheets.forEach((s, si) => {
      const rels = []; const hl = []; const rowsXml = [];
      s.rows.forEach((row, ri) => { const cells = [];
        row.forEach((cell, ci) => { if (cell === '' || cell == null) { if (s.unlocked && s.unlocked(ri, ci)) cells.push(`<c r="${colName(ci)}${ri + 1}" s="1"/>`); return; }
          const o = typeof cell === 'object' ? cell : { v: cell }; const ref = colName(ci) + (ri + 1);
          let st = s.unlocked && s.unlocked(ri, ci) ? 1 : ri === 0 && s.protect ? 2 : ri === 1 && s.hiddenRows ? 3 : s.wrap ? 5 : 0; if (o.l || o.f) st = 4;
          if (o.l) { rels.push(o.l); hl.push(`<hyperlink ref="${ref}" r:id="rId${rels.length}"/>`); }
          if (o.f) cells.push(`<c r="${ref}" s="${st}" t="str"><f>${xmlEsc(o.f)}</f><v>${xmlEsc(o.v)}</v></c>`);
          else if (typeof o.v === 'number') cells.push(`<c r="${ref}" s="${st}"><v>${o.v}</v></c>`);
          else cells.push(`<c r="${ref}" s="${st}" t="inlineStr"><is><t xml:space="preserve">${xmlEsc(String(o.v).slice(0, 32000))}</t></is></c>`); });
        rowsXml.push(`<row r="${ri + 1}"${(s.hiddenRows || []).includes(ri + 1) ? ' hidden="1"' : ''}>${cells.join('')}</row>`); });
      const ncol = Math.max(1, ...s.rows.map((r) => r.length)); const nrow = Math.max(1, s.rows.length);
      const cols = s.cols ? `<cols>${s.cols.map((w, i) => `<col min="${i + 1}" max="${i + 1}" width="${w}" customWidth="1"/>`).join('')}</cols>` : '';
      const views = s.freeze ? `<sheetViews><sheetView workbookViewId="0"${si === 1 ? ' tabSelected="1"' : ''}><pane xSplit="${s.freeze.c}" ySplit="${s.freeze.r}" topLeftCell="${colName(s.freeze.c)}${s.freeze.r + 1}" activePane="bottomRight" state="frozen"/></sheetView></sheetViews>` : `<sheetViews><sheetView workbookViewId="0"${si === 1 ? ' tabSelected="1"' : ''}/></sheetViews>`;
      const prot = s.protect ? `<sheetProtection password="${xlsxPass(password)}" sheet="1" objects="1" scenarios="1" formatCells="0" formatColumns="0" formatRows="0" insertColumns="1" insertRows="1" insertHyperlinks="1" deleteColumns="1" deleteRows="1" selectLockedCells="0" sort="0" autoFilter="0" pivotTables="1" selectUnlockedCells="0"/>` : '';
      const af = s.autoFilter ? `<autoFilter ref="A1:${colName(ncol - 1)}${nrow}"/>` : '';
      const dv = (s.validations || []).length ? `<dataValidations count="${s.validations.length}">${s.validations.map((v) => `<dataValidation type="list" allowBlank="1" showInputMessage="1" showErrorMessage="1" errorTitle="Not an option" error="Choose one of the options the portal offers (or clear the cell for the script's default)." sqref="${colName(v.col)}${v.r1}:${colName(v.col)}${v.r2}"><formula1>${v.list ? '"' + xmlEsc(v.list.join(',')) + '"' : xmlEsc(v.ref)}</formula1></dataValidation>`).join('')}</dataValidations>` : '';
      const hls = hl.length ? `<hyperlinks>${hl.join('')}</hyperlinks>` : '';
      add(`xl/worksheets/sheet${si + 1}.xml`, `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><dimension ref="A1:${colName(ncol - 1)}${nrow}"/>${views}<sheetFormatPr defaultRowHeight="15"/>${cols}<sheetData>${rowsXml.join('')}</sheetData>${prot}${af}${dv}${hls}<pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/></worksheet>`);
      if (rels.length) add(`xl/worksheets/_rels/sheet${si + 1}.xml.rels`, `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">${rels.map((u, i) => `<Relationship Id="rId${i + 1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink" Target="${xmlEsc(u)}" TargetMode="External"/>`).join('')}</Relationships>`);
    });
    return zipDeflate(files, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  }
  async function zipDeflate(files, type) {    // zip with deflate (CompressionStream) – falls back to "store"
    const out = [], cen = []; let off = 0; const enc8 = new TextEncoder();
    const u16 = (v) => [v & 255, (v >>> 8) & 255], u32 = (v) => [v & 255, (v >>> 8) & 255, (v >>> 16) & 255, (v >>> 24) & 255];
    for (const f of files) { const data = f.data; const name = enc8.encode(f.name); const crc = CRC(data); let comp = data, method = 0;
      try { if (typeof CompressionStream === 'function') { comp = new Uint8Array(await new Response(new Blob([data]).stream().pipeThrough(new CompressionStream('deflate-raw'))).arrayBuffer()); method = 8; } } catch (e) { comp = data; method = 0; }
      const head = new Uint8Array([...u32(0x04034b50), ...u16(20), ...u16(0x0800), ...u16(method), ...u16(0), ...u16(0x21), ...u32(crc), ...u32(comp.length), ...u32(data.length), ...u16(name.length), ...u16(0)]);
      out.push(head, name, comp); cen.push(new Uint8Array([...u32(0x02014b50), ...u16(20), ...u16(20), ...u16(0x0800), ...u16(method), ...u16(0), ...u16(0x21), ...u32(crc), ...u32(comp.length), ...u32(data.length), ...u16(name.length), ...u16(0), ...u16(0), ...u16(0), ...u16(0), ...u32(0), ...u32(off)]), name);
      off += head.length + name.length + comp.length; }
    const cenLen = cen.reduce((s, b) => s + b.length, 0);
    return new Blob([...out, ...cen, new Uint8Array([...u32(0x06054b50), ...u16(0), ...u16(0), ...u16(files.length), ...u16(files.length), ...u32(cenLen), ...u32(off), ...u16(0)])], { type });
  }
  const dl = (blob, fn) => { const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = fn; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 30000); };

  // ---- reading a workbook back (the per-LOB layout above, the v5.13 "Fields" list, or a CSV of it) ----
  const HDR = { env: /^env/i, mode: /journey ?type|^mode|^type$/i, lob: /^lob/i, category: /^categ/i, product: /^product$|^plan$|^product name/i, code: /^code|product ?code/i, page: /^page|^route/i, field: /^field|^label|^question/i, key: /^key$/i, type: /^type$|field ?type|control/i, options: /^option/i, value: /^value|^fill|^answer/i, required: /^req/i, person: /^person/i, auto: /^auto/i };
  const fmtCell = (v) => v instanceof Date ? `${pad(v.getDate())}-${pad(v.getMonth() + 1)}-${v.getFullYear()}` : v == null ? '' : String(v).trim();
  function rowsFrom(aoa, want) {   // header row → objects (column names matched loosely, Excel dates → dd-mm-yyyy)
    if (!aoa.length) return []; const head = aoa[0].map((h) => String(h == null ? '' : h).trim()); const col = {};
    Object.entries(HDR).forEach(([k, re]) => { const i = head.findIndex((h) => re.test(h)); if (i >= 0) col[k] = i; });
    if (want.some((k) => col[k] === undefined)) return [];
    return aoa.slice(1).filter((r) => r && r.some((x) => x != null && String(x).trim() !== '')).map((r) => { const o = {}; Object.keys(col).forEach((k) => (o[k] = fmtCell(r[col[k]]))); return o; });
  }
  function wideFrom(aoa, sheetName) {      // the per-LOB layout: row 1 labels, row 2 "type|key|page", identity columns, then one column per field
    if (aoa.length < 3) return null; const meta = aoa[1].map((x) => String(x == null ? '' : x)); if (!meta.some((m) => /^(text|date|select|radio|checkbox|file)\|/.test(m))) return null;
    const head = aoa[0].map((h) => String(h == null ? '' : h).trim()); const idx = (re) => head.findIndex((h) => re.test(h));
    const I = { env: idx(/^env/i), mode: idx(/journey ?type|^mode/i), lob: idx(/^lob/i), category: idx(/^categ/i), product: idx(/^product/i), code: idx(/^code/i), person: idx(/^person/i), auto: idx(/^auto/i) };
    const fcols = []; meta.forEach((m, ci) => { const mm = m.match(/^(text|date|select|radio|checkbox|file)\|([^|]*)\|?(.*)$/); if (mm) fcols.push({ ci, type: mm[1], key: mm[2], page: mm[3] || '', label: head[ci] || mm[2] }); });
    const rows = [], fields = [], cols = {};
    aoa.slice(2).forEach((r) => { if (!r || !r.length) return; const g = (i) => (i >= 0 ? fmtCell(r[i]) : ''); const env = g(I.env).toLowerCase(), product = g(I.product), lob = g(I.lob) || sheetName; if (!product && !env) return;
      const mode = /diy|non/i.test(g(I.mode)) ? 'diy' : 'assisted'; const category = g(I.category); const rowKey = [env, mode, lob, category, product].join('|'); const values = {};
      fcols.forEach((c) => { const v = fmtCell(r[c.ci]); values[c.key] = v; if (v !== '') fields.push({ env, mode, lob, category, product, page: '', field: c.label, key: c.key, type: c.type, value: v }); });
      rows.push({ rowKey, env, mode, lob, category, product, code: g(I.code), person: g(I.person) || 'P1', auto: g(I.auto) || 'yes', values }); });
    fcols.forEach((c) => { const k = c.type + '|' + c.key; cols[k] = { key: c.key, type: c.type, label: c.label, page: c.page, lob: sheetName, options: [] }; });
    return { rows, fields, cols };
  }
  function parseWorkbook(buf, fname) {
    let fields = [], persons = {}, wide = [], cols = {}, lists = {};
    if (/\.csv$/i.test(fname || '') || typeof XLSX === 'undefined') {
      const txt = typeof buf === 'string' ? buf : new TextDecoder().decode(buf); const aoa = csvParse(txt); const w = wideFrom(aoa, 'CSV'); if (w) { wide = w.rows; fields = w.fields; cols = w.cols; } else fields = rowsFrom(aoa, ['field', 'value']);
    } else {
      const wb = XLSX.read(buf, { type: 'array', cellDates: true });
      for (const n of wb.SheetNames) { const aoa = XLSX.utils.sheet_to_json(wb.Sheets[n], { header: 1, defval: '' });
        if (/^lists$/i.test(n)) { (aoa[0] || []).forEach((h, ci) => { if (h) lists[String(h)] = aoa.slice(1).map((r) => fmtCell(r[ci])).filter(Boolean); }); continue; }
        if (/^persons?$/i.test(n)) { persons = personsFrom(aoa); continue; }
        if (/^readme$/i.test(n)) continue;
        const w = wideFrom(aoa, n); if (w) { wide = wide.concat(w.rows); fields = fields.concat(w.fields); Object.assign(cols, w.cols); continue; }
        if (/field/i.test(n) || (!fields.length && rowsFrom(aoa, ['field', 'value']).length)) fields = fields.concat(rowsFrom(aoa, ['field', 'value']));
      }
      Object.values(cols).forEach((c) => { if (lists[c.label]) c.options = lists[c.label]; });
    }
    fields = fields.map((r) => Object.assign(r, { env: String(r.env || '').toLowerCase(), mode: /diy|non/i.test(r.mode || '') ? 'diy' : r.mode ? 'assisted' : '', type: String(r.type || '').toLowerCase() }));
    return { fields, persons, wide, cols };
  }
  function personsFrom(aoa) {   // Persons sheet: Id + first / middle / last / gender / age / phone / email / income / pin (any order, loose header names)
    const out = {}; if (!aoa.length) return out; const head = aoa[0].map((h) => String(h == null ? '' : h).toLowerCase().trim()); const iId = head.findIndex((h) => /^id$|^person/.test(h));
    const col = {}; PERSON_COLS.forEach((k) => { col[k] = head.findIndex((h) => h === k || h.startsWith(k) || (k === 'phone' && /mobile|phone/.test(h)) || (k === 'pin' && /pin|zip/.test(h)) || (k === 'income' && /income/.test(h))); });
    aoa.slice(1).forEach((row, i) => { if (!row || col.first < 0 || !String(row[col.first] || '').trim()) return; const id = String((iId >= 0 && row[iId]) || 'P' + (i + 1)).trim(); const o = { id }; PERSON_COLS.forEach((k) => { if (col[k] >= 0) o[k] = fmtCell(row[col[k]]); }); out[id] = o; });
    return out;
  }
  function csvParse(t) { const rows = []; let row = [], cur = '', q = false; for (let i = 0; i < t.length; i++) { const ch = t[i]; if (q) { if (ch === '"') { if (t[i + 1] === '"') { cur += '"'; i++; } else q = false; } else cur += ch; } else if (ch === '"') q = true; else if (ch === ',') { row.push(cur); cur = ''; } else if (ch === '\n' || ch === '\r') { if (ch === '\r' && t[i + 1] === '\n') i++; row.push(cur); rows.push(row); row = []; cur = ''; } else cur += ch; } if (cur !== '' || row.length) { row.push(cur); rows.push(row); } return rows; }
  function storeWorkbook(parsed, name, url) {
    const sh = { name: name || '', url: url || (sheetDb() || {}).url || '', at: new Date().toISOString().slice(0, 16), rows: parsed.fields, persons: parsed.persons, wide: parsed.wide || [], cols: parsed.cols || {} };
    S.set('sheet', sh); SHEET_IDX = { ctx: '', map: null };
    banner('Workbook loaded', `${name || url}: ${sh.wide.length ? sh.wide.length + ' product row(s), ' : ''}${sh.rows.length} field value(s), ${Object.keys(sh.persons).length} person(s)${sh.rows.length ? '' : ' – no journey sheet found (row 1 field names, hidden row 2 keys) and no "Fields" list'}`);
    return sh;
  }
  async function loadWorkbookFile(file) { const buf = await file.arrayBuffer(); return storeWorkbook(parseWorkbook(buf, file.name), file.name, ''); }
  async function loadWorkbookUrl(url) {
    let u = String(url || '').trim(); if (!u) return null;
    const g = u.match(/docs\.google\.com\/spreadsheets\/d\/([\w-]+)/); if (g && !/export\?/.test(u)) u = `https://docs.google.com/spreadsheets/d/${g[1]}/export?format=xlsx`;   // a shared Google Sheet link → its xlsx export
    const buf = await new Promise((res, rej) => {
      if (typeof GM_xmlhttpRequest === 'function') GM_xmlhttpRequest({ method: 'GET', url: u, responseType: 'arraybuffer', onload: (x) => (x.status < 400 ? res(x.response) : rej(new Error('HTTP ' + x.status))), onerror: () => rej(new Error('network error')), ontimeout: () => rej(new Error('timeout')), timeout: 30000 });
      else fetch(u, { credentials: 'include' }).then((r) => (r.ok ? r.arrayBuffer() : Promise.reject(new Error('HTTP ' + r.status)))).then(res, rej);
    });
    return storeWorkbook(parseWorkbook(buf, u.replace(/[?#].*/, '')), '', url);
  }
  async function refreshWorkbook(why) {   // the shared file is fetched again before a journey starts (when a URL is stored)
    const sh = sheetDb(); if (!sh || !sh.url || !S.get('sheetAuto', true)) return false;
    try { await loadWorkbookUrl(sh.url); return true; } catch (e) { banner('Workbook', `Could not refresh ${sh.url.slice(0, 60)}… (${e.message}) – using the copy loaded ${sh.at}`); return false; }
  }
  // ---- the workbook's rows for this portal (quick dialog: product dropdown + the row's values as dropdowns) ----
  function sheetRowsHere() { const sh = sheetDb(); if (!sh || !sh.wide) return []; const m = modeHere(); return sh.wide.filter((r) => r.env === HERE.env && r.lob === HERE.lob && r.mode === m); }
  function sheetColsFor(lob) { const sh = sheetDb(); if (!sh || !sh.cols) return []; return Object.values(sh.cols).filter((c) => c.lob === lob); }
  function sheetEditsFor(rowKey) { return (S.get('sheetEdits', {}) || {})[rowKey] || {}; }
  function sheetEdit(rowKey, key, v) { const E = S.get('sheetEdits', {}) || {}; E[rowKey] = E[rowKey] || {}; if (v === undefined || v === null) delete E[rowKey][key]; else E[rowKey][key] = v; if (!Object.keys(E[rowKey]).length) delete E[rowKey]; S.set('sheetEdits', E); SHEET_IDX = { ctx: '', map: null }; }
  function renderSheetPanel(host, onRow) {     // inside the ▶ Start dialog: a separate, collapsed section – closed = the journey runs exactly as before (script defaults)
    const rows = sheetRowsHere(); onRow(null);
    if (!rows.length) {                         // nothing to choose from yet: say why, with a link to the Workbook dialog (export / load)
      const sh = sheetDb(); host.innerHTML = `<div style="margin-top:10px;border:1px dashed #cbd5e1;border-radius:10px;font-size:12px;padding:8px 10px;background:#f8fafc;color:#64748b"><b style="color:#334155">📗 Use values from the workbook</b> – ${sh && sh.rows ? `the loaded workbook (${escH(sh.name || sh.url)}) has no row for ${escH(HERE.lob)} · ${escH(HERE.env)} · ${modeHere() === 'diy' ? 'DIY' : 'Assisted'}` : 'no workbook loaded'}. <a href="#" id="sb-wbopen" style="color:#2563eb">Open 📗 Workbook</a> to export the Excel or load an edited one – then this becomes a tick box here.</div>`;
      host.querySelector('#sb-wbopen').onclick = (ev) => { ev.preventDefault(); const d = document.getElementById('sb-dialog'); if (d) d.remove(); showWorkbookDialog(); }; return; }
    let open = false; onRow(null);
    host.innerHTML = `<div style="margin-top:10px;border:1px solid #cbd5e1;border-radius:10px;font-size:12px;overflow:hidden"><label id="sb-wbtog" style="display:flex;gap:8px;align-items:center;padding:8px 10px;cursor:pointer;background:#f8fafc"><input type="checkbox" id="sb-wbon"><b>📗 Use values from the workbook</b><span style="color:#64748b">(optional – ${rows.length} row(s) for this portal; off = the script fills the way it always did)</span></label><div id="sb-wbbody" style="display:none;padding:8px 10px;border-top:1px solid #e2e8f0;background:#f0fdf4"><div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap"><b>Row</b><select id="sb-wbrow" style="flex:1;min-width:220px;padding:5px;border:1px solid #cbd5e1;border-radius:6px;font-size:12px">${rows.map((r) => `<option value="${escH(r.rowKey)}">${escH(r.category ? r.category + ' › ' : '')}${escH(r.product || '(any product)')}${Object.keys(sheetEditsFor(r.rowKey)).length ? ' ✎' : ''}</option>`).join('')}</select></div><div id="sb-wbvals" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:6px;margin-top:8px;max-height:200px;overflow:auto"></div><div style="color:#64748b;margin-top:4px">The row's product and values are used on every page. A value changed here is kept in the script (✎) and wins over the file for that row; the file itself is only changed in Excel.</div></div></div>`;
    const tog = host.querySelector('#sb-wbon'), body = host.querySelector('#sb-wbbody'), sel = host.querySelector('#sb-wbrow'), vals = host.querySelector('#sb-wbvals');
    const c = cfg(); const cur = rows.find((r) => nkey(r.product) === nkey(c.product) && r.category === (c.category || '')); if (cur) sel.value = cur.rowKey;
    const show = () => { const r = open ? rows.find((x) => x.rowKey === sel.value) : null; vals.innerHTML = ''; onRow(r || null); if (!r) return;
      const cols = sheetColsFor(r.lob); const ed = sheetEditsFor(r.rowKey);
      cols.forEach((col) => { const v = ed[col.key] !== undefined ? ed[col.key] : (r.values[col.key] || ''); const opts = col.options || []; const lab = document.createElement('label'); lab.style.cssText = 'display:flex;flex-direction:column;gap:2px;font-size:11px;color:#334155';
        lab.innerHTML = `<span title="${escH(col.type + ' · ' + col.page)}">${escH(col.label)}${ed[col.key] !== undefined ? ' <b style="color:#b45309">✎</b>' : ''}</span>`;
        let inp; if (opts.length) { inp = document.createElement('select'); inp.innerHTML = `<option value="">(default)</option>` + opts.map((o) => `<option ${o === v ? 'selected' : ''}>${escH(o)}</option>`).join('') + (v && !opts.includes(v) ? `<option selected>${escH(v)}</option>` : ''); } else { inp = document.createElement('input'); inp.value = v; inp.placeholder = '(default)'; inp.title = /\{\{/.test(v) ? v + ' = taken from the person' : ''; }
        inp.style.cssText = 'padding:4px;border:1px solid #cbd5e1;border-radius:6px;font-size:12px;background:#fff'; inp.onchange = () => { const nv = inp.value; if (nv === (r.values[col.key] || '')) sheetEdit(r.rowKey, col.key, undefined); else sheetEdit(r.rowKey, col.key, nv); lab.querySelector('span').innerHTML = escH(col.label) + (nv !== (r.values[col.key] || '') ? ' <b style="color:#b45309">✎</b>' : ''); };
        lab.appendChild(inp); vals.appendChild(lab); }); };
    tog.onchange = () => { open = tog.checked; body.style.display = open ? 'block' : 'none'; show(); };
    sel.onchange = show;
  }
  function showWorkbookDialog() {
    const old = document.getElementById('sb-dialog'); if (old) old.remove();
    const ov = document.createElement('div'); ov.id = 'sb-dialog'; ov.style.cssText = CSSOV;
    const card = document.createElement('div'); card.style.cssText = CARD + ';width:min(640px,96vw)'; ov.appendChild(card); document.body.appendChild(ov);
    const render = () => {
      const sh = sheetDb(); const L = S.get('fieldlog', {}); const nf = Object.values(L).reduce((n, e) => n + Object.keys(e.fields || {}).length, 0); const ne = Object.keys(S.get('sheetEdits', {}) || {}).length;
      card.innerHTML = `<div style="display:flex;justify-content:space-between;align-items:flex-start"><div><div style="font-size:17px;font-weight:700">📗 Workbook (Excel / Google Sheet)</div><div style="color:#64748b;font-size:12px">One sheet per line of business: a row per product with every form value prefilled – change the yellow cells (dropdowns), save, click ▶ Run in the row.</div></div><button id="sb-close" style="background:none;border:0;font-size:20px;cursor:pointer">×</button></div>
      <div style="margin-top:12px;padding:10px;border:1px solid #e2e8f0;border-radius:10px"><b>1. Export</b> <span style="color:#64748b;font-size:12px">– ${nf} value(s) captured in ${Object.keys(L).length} journey(s)${ne ? ', ' + ne + ' row(s) edited here' : ''}; products never run are prefilled from the other plans of the same portal</span>
        <div style="margin-top:6px;display:flex;gap:8px;align-items:center;flex-wrap:wrap"><button id="sb-wbx" style="${BTN};background:#0f766e">⬇ Export workbook (.xlsx)</button> <label style="font-size:12px">Lock password <input id="sb-wbpass" value="${escH(SHEET_PASS())}" style="width:90px;padding:4px;border:1px solid #cbd5e1;border-radius:6px;font-size:12px" title="Sheets are protected with it: nobody can add or delete columns / rows without it – only the yellow value cells can be changed"></label> <button id="sb-wbclr" style="${BTN};background:#64748b" title="Forget the captured field values (the loaded workbook stays)">Clear captured</button></div></div>
      <div style="margin-top:10px;padding:10px;border:1px solid #e2e8f0;border-radius:10px"><b>2. Load</b> <span style="color:#64748b;font-size:12px">– the edited file (.xlsx / .csv)</span>
        <div style="margin-top:6px;display:flex;gap:8px;align-items:center;flex-wrap:wrap"><input type="file" id="sb-wbf" accept=".xlsx,.xls,.csv" style="font-size:12px"></div>
        <div style="margin-top:8px;font-size:12px">…or the <b>shared link</b> everyone uses (OneDrive / SharePoint direct-download link or a Google Sheets link) – fetched again before every run, so the team edits one file</div>
        <div style="display:flex;gap:6px;margin-top:4px"><input id="sb-wbu" placeholder="https://docs.google.com/spreadsheets/d/… or https://…/journeys.xlsx" value="${escH((sh && sh.url) || '')}" style="flex:1;padding:6px;border:1px solid #cbd5e1;border-radius:6px;font-size:12px"><button id="sb-wbfetch" style="${BTN};background:#2563eb">Fetch</button></div>
        <label style="font-size:12px;display:block;margin-top:6px"><input type="checkbox" id="sb-wbauto" ${S.get('sheetAuto', true) ? 'checked' : ''}> refresh from the link before every journey</label>
        <div style="margin-top:8px;font-size:12px;color:${sh && sh.rows ? '#166534' : '#64748b'}">${sh && sh.rows ? `Loaded: <b>${escH(sh.name || sh.url)}</b> (${sh.at.replace('T', ' ')}) – ${(sh.wide || []).length} product row(s), ${sh.rows.length} value(s), ${Object.keys(sh.persons || {}).length} person(s) <button id="sb-wbdrop" style="${BTN};background:#b91c1c;padding:2px 8px;font-size:11px">Unload</button>` : 'No workbook loaded – the script uses its own values.'}</div></div>
      <div style="margin-top:10px;font-size:12px;color:#64748b"><b>3. Run</b> – ▶ Run in a row opens the portal with <code>…&sb4=run…</code> and starts that product's journey with the row's values; on a portal page the ▶ Start dialog also lists the rows of the loaded workbook with their values as dropdowns.</div>`;
      card.querySelector('#sb-close').onclick = () => ov.remove();
      card.querySelector('#sb-wbpass').onchange = (ev) => S.set('sheetPass', ev.target.value.trim() || '1sb');
      card.querySelector('#sb-wbx').onclick = () => { S.set('sheetPass', card.querySelector('#sb-wbpass').value.trim() || '1sb'); try { exportWorkbook(); } catch (e) { banner('Workbook', 'Export failed: ' + e.message); } };
      card.querySelector('#sb-wbclr').onclick = () => { if (confirm('Forget all captured field values and the edits made here?')) { S.set('fieldlog', {}); S.set('sheetEdits', {}); render(); } };
      card.querySelector('#sb-wbf').onchange = async (ev) => { const f = ev.target.files[0]; if (!f) return; try { await loadWorkbookFile(f); } catch (e) { banner('Workbook', 'Could not read ' + f.name + ': ' + e.message); } render(); };
      card.querySelector('#sb-wbfetch').onclick = async () => { const u = card.querySelector('#sb-wbu').value.trim(); if (!u) return; try { await loadWorkbookUrl(u); } catch (e) { banner('Workbook', 'Could not fetch: ' + e.message); } render(); };
      card.querySelector('#sb-wbauto').onchange = (ev) => S.set('sheetAuto', !!ev.target.checked);
      const dr = card.querySelector('#sb-wbdrop'); if (dr) dr.onclick = () => { S.set('sheet', null); SHEET_IDX = { ctx: '', map: null }; render(); };
    };
    render();
  }

  // ---- ▶ Run links: …/?sb4=run&env=demo&mode=assisted&lob=Health&category=Retail&product=Medicare%20Select&code=…&person=P1&auto=yes#/?id=… ----
  /* ---------------- Google Sheet dashboard (v5.29): one row per test combination, ▶ Run in the row, results written back ---------------- */
  // The sheet is read through its CSV export (share: anyone with the link → viewer). Row = the sheet row number. The "Config" tab carries the write-back URL (Apps Script web app) so nothing has to be typed into the script.
  const GS = { id: '', row: 0, tab: 'Runs' };
  const gsCsvUrl = (id, tab) => `https://docs.google.com/spreadsheets/d/${id}/gviz/tq?tqx=out:csv&headers=1&sheet=${enc(tab)}`;   // headers=1: the hidden key row 2 of a Fields tab is data, not a second header
  function gsFetch(url, opts) { return new Promise((res, rej) => { const o = Object.assign({ method: 'GET' }, opts || {});
    if (typeof GM_xmlhttpRequest === 'function') GM_xmlhttpRequest({ method: o.method, url, data: o.body, headers: o.headers, timeout: o.timeout || 30000, onload: (x) => (x.status < 400 ? res(x.responseText) : rej(new Error('HTTP ' + x.status))), onerror: () => rej(new Error('network error')), ontimeout: () => rej(new Error('timeout')) });
    else fetch(url, { method: o.method, body: o.body, headers: o.headers }).then((r) => (r.ok ? r.text() : Promise.reject(new Error('HTTP ' + r.status)))).then(res, rej); }); }
  async function gsTable(id, tab) { const txt = await gsFetch(gsCsvUrl(id, tab)); const aoa = csvParse(txt); const head = (aoa[0] || []).map((h) => String(h || '').trim()); return { head, aoa }; }
  function gsRowObj(table, rowNo) {          // sheet row number (1 = header) → { header: value }
    const r = table.aoa[rowNo - 1]; if (!r) return null; const o = {}; table.head.forEach((h, i) => { if (h) o[h] = String(r[i] == null ? '' : r[i]).trim(); }); return o;
  }
  const gsCol = (o, re) => { const k = Object.keys(o).find((h) => re.test(h)); return k ? o[k] : ''; };
  const GS_FIELDS = [[/^sum assured|^life cover$|^cover amount/i, ['Sum Assured', 'Life Cover', 'Cover Amount', 'Sum Assured (₹)']], [/^premium|^investment/i, ['Premium', 'Investment Amount', 'Premium Amount', 'Annual Premium', 'Investment']], [/premium payment term|^ppt/i, ['Premium Payment Term', 'Pay for', 'PPT', 'Premium Paying Term']], [/^policy term|^pt$/i, ['Policy Term', 'Life Cover For', 'Cover till age', 'Cover Till']], [/frequency|mode for payment/i, ['Premium Frequency', 'Payment Frequency', 'Mode for Payment', 'Frequency', 'Premium Payment Frequency']]];
  async function gsConfig(id) { try { const t = await gsTable(id, 'Config'); const o = {}; t.aoa.forEach((r) => { if (r[0]) o[String(r[0]).trim()] = String(r[1] == null ? '' : r[1]).trim(); }); return o; } catch (e) { return {}; } }
  async function gsLoadRow(id, rowNo, tab) {   // the row → person + journey + field overrides; stored as the loaded "workbook" so the ordinary fill uses the values
    const table = await gsTable(id, tab || GS.tab); const o = gsRowObj(table, rowNo); if (!o) throw new Error('row ' + rowNo + ' is empty');
    if (o['Portal URL'] !== undefined) return gsPortalRow(o, rowNo);   /* a Portals row (v5.35): one distributor / portal link → every plan of that portal, start to end */
    const env = (gsCol(o, /^env/i) || 'demo').toLowerCase(); const mode = /diy|non/i.test(gsCol(o, /journey ?type|^mode/i)) ? 'diy' : 'assisted'; const lob = gsCol(o, /^lob|line of business/i) || 'Life Term'; const category = gsCol(o, /^categ/i); let product = gsCol(o, /^product$|^product name|^plan$/i); const code = gsCol(o, /^code|product ?code|prod ?id/i);
    if (!product && code) { const r = Object.values(RULES).find((x) => x.id === code || (x.m + '|' + x.id) === code); if (r) product = r.mname || r.name; }
    const person = {}; const pm = { first: /^first/i, middle: /^middle/i, last: /^last|surname/i, gender: /^gender/i, age: /^age/i, phone: /mobile|phone/i, email: /e-?mail/i, income: /income/i, pin: /^pin|zip/i, nomRel: /nominee/i, pan: /^pan$/i, aadhaar: /aadha/i, ckyc: /ckyc/i, account: /account/i, ifsc: /ifsc/i, bankName: /bank name/i };
    Object.entries(pm).forEach(([k, re]) => { const v = gsCol(o, re); if (v !== '') person[k] = v; });
    const fields = []; const add = (labels, v, type, page, spec, key) => labels.forEach((l) => fields.push({ env: '', mode: '', lob: '', category: '', product: spec ? product : '', page: page || '', field: l, key: key || l, type: type || '', value: v }));
    { const meta = (table.aoa[1] || []).map((x) => String(x == null ? '' : x).trim()); if (meta.some((m) => /^(text|date|select|radio|checkbox|file)\|/.test(m))) {   // a "Fields – <LOB>" tab: every column with a type|key|page meta is a form field of that product
        const raw = table.aoa[rowNo - 1] || []; meta.forEach((m, ci) => { const mm = m.match(/^(text|date|select|radio|checkbox|file)\|([^|]*)\|?(.*)$/); if (!mm) return; const v = String(raw[ci] == null ? '' : raw[ci]).trim(); if (v === '') return; add([table.head[ci] || mm[2]], v, mm[1], mm[3] || '', true, mm[2]); }); } }
    GS_FIELDS.forEach(([re, labels]) => { const v = gsCol(o, re); if (v !== '') add(labels, v, '', '', true); });
    const other = gsCol(o, /^other|^more fields|^overrides?/i); if (other) other.split(/;\s*|\n/).forEach((kv) => { const i = kv.indexOf('='); if (i > 0) add([kv.slice(0, i).trim()], kv.slice(i + 1).trim()); });
    if (!/^fields/i.test(tab || GS.tab) && lob) {   // a Runs row also takes the product's captured form values from the "Fields – <LOB>" tab (the Runs columns win)
      try { const ft = await gsTable(id, 'Fields – ' + lob); const meta = (ft.aoa[1] || []).map((x) => String(x == null ? '' : x).trim()); const hi = (re) => ft.head.findIndex((h) => re.test(h));
        const I = { env: hi(/^env/i), mode: hi(/journey ?type|^mode/i), category: hi(/^categ/i), product: hi(/^product/i) }; const g = (r, i) => (i >= 0 ? String(r[i] == null ? '' : r[i]).trim() : '');
        const cand = ft.aoa.slice(2).filter((r) => nkey(g(r, I.product)) === nkey(product) && (!g(r, I.env) || g(r, I.env).toLowerCase() === env) && (!g(r, I.category) || !category || g(r, I.category) === category));
        const fr = cand.find((r) => /diy|non/i.test(g(r, I.mode)) === (mode === 'diy')) || cand[0];
        if (fr) { let n = 0; meta.forEach((m, ci) => { const mm = m.match(/^(text|date|select|radio|checkbox|file)\|([^|]*)\|?(.*)$/); if (!mm) return; const v = String(fr[ci] == null ? '' : fr[ci]).trim(); if (v === '') return; add([ft.head[ci] || mm[2]], v, mm[1], mm[3] || '', false, mm[2]); n++; }); console.log('[SB4] sheet: ' + n + ' field value(s) from "Fields – ' + lob + '"'); } } catch (e) { /* no Fields tab yet */ }
    }
    if (o['Insurer TC ID'] !== undefined || o['productCode'] !== undefined) return gsTestCase(id, rowNo, tab || GS.tab, o, person, fields);   // a test-case sheet (insurer test cases in 1SB request terms – v5.33)
    return { env, mode, lob, category, product, code, person, fields, raw: o };
  }
  function gsPortalRow(o, rowNo) {           /* Portals tab (v5.35): # | ▶ Run | Portal URL | Name | LOB | Mode | Product | First name | Last name | Age | Gender | Status | Journeys | Pass | Fail | Last run | Last product | Last reason | Journey ID | Note */
    const url = String(gsCol(o, /^portal url/i) || '').trim(); if (!/^https?:\/\//i.test(url)) throw new Error('row ' + rowNo + ' has no portal URL');
    const mode = /diy|non|b2c/i.test(gsCol(o, /^mode|journey ?type/i)) ? 'diy' : 'assisted'; const lob = gsCol(o, /^lob|line of business/i) || ''; const product = gsCol(o, /^product|^plan/i) || '';
    const person = {}; const pm = { first: /^first/i, last: /^last|surname/i, age: /^age/i, gender: /^gender/i, phone: /mobile|phone/i, email: /e-?mail/i, pin: /^pin|zip/i, pan: /^pan$/i };
    Object.entries(pm).forEach(([k, re]) => { const v = gsCol(o, re); if (v !== '') person[k] = v; });
    return { portal: true, url, name: gsCol(o, /^name|^distributor/i) || url.replace(/^https?:\/\//, '').split('/')[0], env: 'custom', mode, lob, category: '', product: /^(all|\*|every|)$/i.test(product) ? '*' : product, code: '', person, fields: [], raw: o };
  }
  const gsSep = (u) => { const h = u.indexOf('#'); const tail = h < 0 ? u : u.slice(h); return tail.includes('?') ? '&' : '?'; };   /* run parameters go into the hash query of a "#/?id=…" portal, else the query string */
  // ---- test-case sheets (v5.33): one row = one insurer test case in 1SB request terms (gender, age, quoteAmount, PPT, PT, PPF, optionSelected …); the journey quotes that product with exactly these values and stops at the quote ----
  const TC_PPF = { Y: 'Y', YEARLY: 'Y', ANNUAL: 'Y', A: 'Y', HY: 'HY', H: 'HY', SEMI: 'HY', Q: 'Q', M: 'M', S: 'S', SINGLE: 'S', O: 'S' };
  async function gsTestCase(id, rowNo, tab, o, person, fields) {
    const cf = await gsConfig(id); const rowEnv = String(o.env || o.Env || o.environment || '').trim(); const env = (rowEnv || cf.TCEnv || cf.Env || cf.env || 'dev').toLowerCase(); const lob = cf.TCLOB || cf.LOB || cf.lob || 'Investment'; const mode = /diy/i.test(String(o.mode || o.Mode || cf.TCMode || cf.Mode || '')) ? 'diy' : 'assisted';   // test-case tabs may live in the dashboard (v5.33.3): their own Config keys TCEnv / TCLOB / TCMode / TCStopAt, or an env column in the row
    const g = (k) => String(o[k] == null ? '' : o[k]).trim(); const num = (k) => { const v = parseFloat(g(k).replace(/[,₹\s]/g, '')); return isFinite(v) ? v : null; };
    const manu = (g('insuranceCompanyCode') || cf.Insurer || '').toUpperCase(); const pid = g('productCode'); const code = manu && pid ? manu + '|' + pid : '';
    let products = {}; try { const pt = await gsTable(id, 'Products'); pt.aoa.slice(1).forEach((r) => { const k = String(r[0] || '').trim(); if (k) products[k] = { manu: String(r[1] || '').trim().toUpperCase(), name: String(r[2] || '').trim(), category: String(r[3] || '').trim(), type: String(r[4] || '').trim() }; }); } catch (e) {}
    let options = {}; try { const ot = await gsTable(id, 'Options'); ot.aoa.slice(1).forEach((r) => { const k = String(r[0] || '').trim(); if (k) options[k] = { label: String(r[1] || '').trim(), field: String(r[2] || '').trim() }; }); } catch (e) {}
    const pr = products[pid] || {}; const codes = S.get('codes', {}); const type = (pr.type || g('savingsProductType') || '').toLowerCase();
    const product = pr.name || codes[code] || (manu + ' ' + pid); const category = pr.category || ({ ulip: 'Market Linked Returns', participating: 'Non-Guaranteed Plans', nonparticipating: 'Guaranteed Plans' })[type.replace(/[^a-z]/g, '')] || '';
    if (code && !RULES[code]) { const ex = S.get('extraRules', {}); ex[code] = { m: manu, id: pid, name: product, mname: product, lob, grp: type, a: { type, ppf: 'M,Q,HY,Y,S' }, virtual: true }; S.set('extraRules', ex); RULES[code] = ex[code]; }   // a product the rules master does not know: a virtual rule so the quote solver can ask for it by code
    else if (code && RULES[code] && RULES[code].virtual && pr.name && RULES[code].name !== pr.name) { RULES[code].name = RULES[code].mname = pr.name; const ex = S.get('extraRules', {}); ex[code] = RULES[code]; S.set('extraRules', ex); }
    if (g('gender')) person.gender = /^f/i.test(g('gender')) ? 'Female' : 'Male'; if (g('firstName')) person.first = g('firstName'); if (o.middleName !== undefined) person.middle = g('middleName'); if (g('lastName')) person.last = g('lastName');
    if (num('age') != null) person.age = Math.round(num('age')); if (g('zipCode')) person.pin = g('zipCode'); if (num('annualIncome') != null) person.income = num('annualIncome');
    const ppf = TC_PPF[g('PPF').toUpperCase()] || (num('PPT') === 1 ? 'S' : 'Y'); const want = { ppf, ppt: num('PPT') || (ppf === 'S' ? 1 : 10), amount: num('quoteAmount') || 10000, pt: num('PT') ? String(Math.round(num('PT'))) : 'Any' };
    const add = (label, v, type) => fields.push({ env: '', mode: '', lob: '', category: '', product: '', page: '', field: label, key: label, type: type || '', value: String(v), spec: 99 });
    const rel = g('proposerRelation'); add('Relation with Life Assured', rel && !/self/i.test(rel) ? rel : 'Self');
    if (rel && !/self/i.test(rel)) { if (g('proposerFirstName')) add('Proposer First Name', g('proposerFirstName')); if (g('proposerDOB')) { const d = g('proposerDOB').match(/^(\d{4})-(\d{2})-(\d{2})/); if (d) add('Proposer Date of Birth', d[3] + '-' + d[2] + '-' + d[1], 'date'); } if (g('proposerGender')) add('Proposer Gender', /^f/i.test(g('proposerGender')) ? 'Female' : 'Male'); }
    const opt = options[g('optionSelected')]; if (opt && opt.label) add(opt.field || '1. Plan Options', opt.label);   // the label is also used to pick the variant's card on the quote page (tcOpt)
    if (num('multipleNo') != null) ['Death Benefit Multiple', 'Life Cover Multiple', 'Sum Assured Multiple', 'Multiple'].forEach((l) => add(l, String(num('multipleNo'))));
    if (g('fundStrategy')) add('Fund Strategy', g('fundStrategy')); if (g('incomeFrequency')) add('Income Payout Frequency', g('incomeFrequency'));
    Object.keys(o).forEach((h) => { if (/ fund$/i.test(h) && g(h)) add(h, g(h)); });   // fund allocation columns: "<Fund name>" = percentage
    const tcid = g('Insurer TC ID') || ('row ' + rowNo); const negative = /^neg/i.test(g('Type')) || /fail|error|reject|invalid/i.test(g('Expected Result')) && !/success/i.test(g('Expected Result'));
    return { env, mode, lob, category, product, code, person, fields, raw: o, tc: { id: tcid, expected: g('Expected Result'), validation: g('validation'), note: g('1SB Mapping Note') }, tcOpt: opt && opt.label ? opt.label : '', quoteWant: want, expectFail: negative, stopAt: (cf.TCStopAt || cf.StopAt || 'full').toLowerCase() };
  }
  // ---- captured form fields → the sheet ("Fields – <LOB>" tabs, one row per product, one column per field; the Apps Script web app creates / extends the tab) ----
  function gsFieldRows(onlyKey, all) {      // rows to send – [{env, mode, lob, category, product, code, from, fields:[{label,key,type,page,value,options,req}]}]
    const L = S.get('fieldlog', {}); const out = [];   // from: 'run' = captured in a real run of that product; 'tpl' = prefilled from the other plans of the LOB (v5.31: every product of every category, so the sheet is complete before anything ran)
    const results = S.get('results', []);
    Object.entries(L).forEach(([k, e]) => { const c = e.ctx || {}; if (!c.lob || c.lob === 'Form' || !c.product) return; if (onlyKey && k !== onlyKey) return; if (all && c.env !== all) return; const r = rulesFor(c.lob, c.product); const last = results.slice().reverse().find((x) => x.env === c.env && x.lob === c.lob && nkey(x.product) === nkey(c.product));
      out.push({ env: c.env, mode: c.mode, lob: c.lob, category: c.category || '', product: c.product, code: r ? r.m + '|' + r.id : '', from: 'run', status: last ? last.status : '', at: e.at || '', fields: Object.values(e.fields).map((f) => ({ label: f.label, key: f.key, type: f.type, page: f.page, value: f.value, options: f.options || '', req: !!f.req })) }); });
    if (all) {                                // every product of every category / LOB on that environment, prefilled from the LOB's captured fields (the sheet fills only EMPTY cells with these)
      const seen = new Set(out.map((r) => [r.env, r.mode, r.lob, r.category, r.product].join('|'))); const M = wbModel();
      Object.entries(M.byLob).forEach(([lob, B]) => { if (!B.order.length) return; const best = {}; B.rows.forEach((r) => { if (r.env !== all || !r.name || /\n/.test(r.name)) return; const k = [r.mode, r.category, r.code || r.name.toLowerCase()].join('|'); if (!best[k] || r.name.length > best[k].name.length) best[k] = r; });   // one row per product code (the rules-master name and a seen variant are the same product)
        Object.values(best).forEach((r) => { if (seen.has(r.rowKey)) return;
        out.push({ env: r.env, mode: r.mode, lob, category: r.category, product: r.name, code: r.code ? r.m + '|' + r.code : '', from: 'tpl', status: r.status || '', at: '', fields: B.order.map((k) => { const c = B.cols[k]; return { label: c.label, key: c.key, type: c.type, page: c.page, value: r.values[c.key] || '', options: [...c.options].join(' | '), req: false }; }) }); }); });
    }
    return out;
  }
  const gsLink = () => { const g = S.get('gsRun', null); return g && g.id && g.writeUrl ? g : null; };
  async function gsSendFields(onlyKey, say, all) {   // POST {action:'fields', rows:[…]} to the Apps Script web app; all = an env name → every product of every LOB on it, prefilled
    const g = gsLink(); if (!g) { if (say) say('No Google Sheet with a WriteURL is known – run one ▶ Run row from the sheet first (Config!B4 must hold the web-app URL)'); return false; }
    const rows = gsFieldRows(onlyKey, all); if (!rows.length) { if (say) say('No captured fields yet'); return false; }
    let ok = 0, cols = 0; const tabs = new Set(); const N = all ? 12 : 1;              // captured runs: one product per request (a row with ~100 fields takes a few seconds in Apps Script); prefilled rows: 12 per request
    for (let i = 0; i < rows.length; i += N) { const batch = rows.slice(i, i + N); if (say && rows.length > 1) say(`Sending ${Math.min(i + N, rows.length)}/${rows.length}: ${batch[0].lob} · ${batch[0].product}${batch.length > 1 ? ' …' : ''}`);
      try { const txt = await gsFetch(g.writeUrl, { method: 'POST', body: JSON.stringify({ action: 'fields', rows: batch, version: SB_VERSION }), headers: { 'Content-Type': 'text/plain;charset=utf-8' }, timeout: 240000 }); let r = {}; try { r = JSON.parse(txt); } catch (e) {} if (r.ok) { ok += batch.length; cols += r.cols || 0; (r.tabs || []).forEach((t) => tabs.add(t)); } else if (say) say(`${batch[0].product}: sheet answered ${r.error || txt.slice(0, 100)}`); }
      catch (e) { if (say) say(`${batch[0].product}: not sent (${e.message})`); } }
    if (say) say(`Fields sent: ${ok}/${rows.length} product row(s) → ${[...tabs].join(', ') || 'Fields tabs'} (${cols} new column(s))`); return ok > 0;
  }
  // ---- scenarios (v5.32): "Scenarios – <LOB>" tab – one row per branch of a form (a Yes/No question answered the other way + the fields that appear then) ----
  async function gsScenarios(id, lob) {       // → [{row, name, enabled, page, question, answer, fields:[{label,value}]}]
    try { const t = await gsTable(id, 'Scenarios – ' + lob); const hi = (re) => t.head.findIndex((h) => re.test(h)); const I = { on: hi(/^enabled/i), name: hi(/^scenario/i), page: hi(/^page/i), q: hi(/^question/i), a: hi(/^answer/i), f: hi(/then fill|^fields/i) };
      const g = (r, i) => (i >= 0 ? String(r[i] == null ? '' : r[i]).trim() : ''); const out = [];
      t.aoa.forEach((r, i) => { if (i < 2) return; const q = g(r, I.q); if (!q) return; const fields = []; g(r, I.f).split(/;\s*|\n/).forEach((kv) => { const j = kv.indexOf('='); if (j > 0) fields.push({ label: kv.slice(0, j).trim(), value: kv.slice(j + 1).trim() }); });
        out.push({ row: i + 1, name: g(r, I.name) || q + ' = ' + g(r, I.a), enabled: !/^(no|n|0|false|off)$/i.test(g(r, I.on) || 'yes'), page: g(r, I.page), question: q, answer: g(r, I.a) || 'Yes', fields }); });
      return out; } catch (e) { return []; }
  }
  const gsQueueItem = (row, sc) => String(row) + (sc ? '@' + sc : '');
  const gsScSpec = (spec) => { spec = String(spec || '').trim(); if (!spec) return null; if (/^all$/i.test(spec)) return 'all'; return gsRows(spec).length ? gsRows(spec) : null; };   // scenarios=all | 4-9 | 4,6 (row numbers of the Scenarios tab)
  async function gsExpandQueue(id, lob, rows, scSpec) {   // rows × (base + enabled scenarios) → ['4', '4@5', '4@6', '5', …]
    if (!scSpec) return rows.map((r) => gsQueueItem(r));
    const all = await gsScenarios(id, lob); const pick = all.filter((s) => s.enabled && (scSpec === 'all' || scSpec.includes(s.row)));
    const out = []; rows.forEach((r) => { out.push(gsQueueItem(r)); pick.forEach((s) => out.push(gsQueueItem(r, s.row))); }); return out.slice(0, 5000);
  }
  // conditional fields: while a page is being filled, every Yes/No question that stands on No is switched to Yes for a moment to see which fields appear, then put back – once per portal / page / question (S 'condmap'); the result feeds the Scenarios tab
  async function probeConditionals(log) {
    try {
      if (!cfg().running || (A().noProbe && A().noProbe())) return; const page = flPage(); if (!/proposal|gate|criteria|detail|form|question|health|kyc|nominee/i.test(page) || /quote|payment|checkout|review/i.test(page)) return;
      const M = S.get('condmap', {}); const radios = Q('input[type="radio"]').filter((r) => (vis(r) || vis(r.closest('label')) || vis(r.parentElement)) && !ours(r) && !r.disabled);
      const snap = () => { const set = new Set(); Q('input:not([type="hidden"]):not([type="radio"]), select, textarea').concat(customSelects()).forEach((el) => { if (vis(el)) set.add(LKEY(labelOf(el)) + '|' + (el.type || el.tagName)); }); radios.forEach((r) => set.add('r|' + radioKey(r))); return set; };
      let n = 0;
      for (const k of [...new Set(radios.map((r) => radioKey(r)))]) {
        if (n >= 6) break; const grp = radios.filter((r) => radioKey(r) === k); if (grp.length < 2) continue;
        const on = grp.find((r) => r.checked); if (!on || !/^(0|n|no|false)$/i.test(on.value || '') && !/^\s*no\s*$/i.test(labelOf(on))) continue;
        const yes = grp.find((r) => /^(1|y|yes|true)$/i.test(r.value || '') || /^\s*yes\s*$/i.test(labelOf(r))); if (!yes) continue;
        const ql = radioLabel(grp[0], k, grp); if (!ql || DECL_Q.test(ql.slice(0, 260)) || /gender|same as|proposer same/i.test(ql)) continue;
        const key = [HERE.env, HERE.lob, page, LKEY(ql).slice(0, 80)].join('|'); if (M[key]) continue;
        const before = snap(); (yes.closest('label') || yes).click(); if (!yes.checked) yes.click(); await sleep(700); const after = snap();
        const fields = []; Q('input:not([type="hidden"]):not([type="radio"]), select, textarea').concat(customSelects()).forEach((el) => { if (!vis(el)) return; const lb = labelOf(el); const kk = LKEY(lb) + '|' + (el.type || el.tagName); if (before.has(kk) || !lb || fields.some((f) => f.label === lb)) return; fields.push({ label: lb.replace(/\*/g, '').trim(), type: el.tagName === 'SELECT' || customSelects().includes(el) ? 'select' : el.type === 'checkbox' ? 'checkbox' : 'text', options: el.tagName === 'SELECT' ? [...el.options].map((o) => o.text.trim()).filter((t) => t && !/^select/i.test(t)).slice(0, 30).join(' | ') : '' }); });
        Q('input[type="radio"]').forEach((r) => { if (!vis(r) && !vis(r.closest('label'))) return; const rk2 = radioKey(r); if (before.has('r|' + rk2) || !rk2) return; const grp2 = Q('input[type="radio"]').filter((x) => radioKey(x) === rk2); const lb = radioLabel(grp2[0], rk2, grp2); if (lb && !fields.some((f) => f.label === lb)) fields.push({ label: lb, type: 'radio', options: grp2.map((x) => labelOf(x) || x.value).join(' | ') }); });
        (on.closest('label') || on).click(); if (!on.checked) on.click(); await sleep(400);
        M[key] = { env: HERE.env, lob: HERE.lob, page, question: ql, answer: labelOf(yes) || 'Yes', fields, at: new Date().toISOString().slice(0, 16) }; n++;
        log.push(`probe "${ql.slice(0, 50)}" = Yes → ${fields.length} field(s)`);
      }
      if (n) { const keys = Object.keys(M); if (keys.length > 300) keys.slice(0, keys.length - 300).forEach((x) => delete M[x]); S.set('condmap', M); }
    } catch (e) { console.log('[SB4] probe', e.message); }
  }
  function gsScenarioRows(lob) {            // from the probes (+ every Yes/No question captured in the field log) → scenario rows for the sheet
    const M = S.get('condmap', {}); const out = []; const seen = new Set();
    Object.values(M).forEach((m) => { if (m.lob !== lob || m.env !== HERE.env) return; const k = LKEY(m.question).slice(0, 80); if (seen.has(k)) return; seen.add(k);
      out.push({ lob, page: m.page, question: m.question, key: k, answer: m.answer || 'Yes', name: m.question.replace(/\s*\*\s*$/, '') + ' = ' + (m.answer || 'Yes'), fields: m.fields.map((f) => f.label + '=').join('; '), fieldList: m.fields }); });
    return out;
  }
  async function gsSendScenarios(say) {
    const g = gsLink(); if (!g) return false; const rows = gsScenarioRows(HERE.lob); if (!rows.length) return false;
    try { const txt = await gsFetch(g.writeUrl, { method: 'POST', body: JSON.stringify({ action: 'scenarios', rows, version: SB_VERSION }), headers: { 'Content-Type': 'text/plain;charset=utf-8' }, timeout: 120000 }); let r = {}; try { r = JSON.parse(txt); } catch (e) {} if (say) say(r.ok ? `Scenarios: ${r.added || 0} new row(s) in "Scenarios – ${HERE.lob}"` : 'Scenarios: ' + (r.error || txt.slice(0, 80))); return !!r.ok; }
    catch (e) { if (say) say('Scenarios not sent: ' + e.message); return false; }
  }
  async function gsWriteBack(entry) {        // after a result: Status / Reason / Jira / Journey ID / Last run into the row (needs the Apps Script web app URL in Config!WriteURL)
    const g = S.get('gsRun', null); if (!g || !g.id || !(entry.gsRow || g.row)) return false; const url = g.writeUrl; if (!url) { console.log('[SB4] sheet: no WriteURL in the Config tab – result not written back'); return false; }
    const c = cfg(); const blocked = /BLOCKED/.test(entry.status); const verdict = c.tc ? ((/PASS/.test(entry.status) && !c.expectFail) || (blocked && c.expectFail) ? 'PASS' : /PAUSED/.test(entry.status) ? 'PAUSED' : 'FAIL') : '';   // a test case: expected outcome vs. what happened
    const body = JSON.stringify({ sheet: g.id, row: entry.gsRow || g.row, tab: g.tab || 'Runs', status: entry.status, verdict, reason: String(entry.msg || '').slice(0, 500), jira: entry.jira || '', jid: entry.ref || '', at: new Date().toISOString().slice(0, 16).replace('T', ' '), product: entry.product || '', premium: entry.premium || '', scenario: g.scName || '', scRow: g.sc || 0, lob: HERE.lob, env: HERE.env, portal: !!g.portal, portalName: g.portalName || '', url: location.origin });
    try { await gsFetch(url, { method: 'POST', body, headers: { 'Content-Type': 'text/plain;charset=utf-8' } }); console.log('[SB4] sheet: row', entry.gsRow || g.row, 'updated'); return true; } catch (e) { banner('Sheet', 'Result not written to the sheet: ' + e.message); return false; }
  }
  async function gsNext() {                  // a batch of rows (…&rows=2-9): after a result the next row runs on its own
    const g = S.get('gsRun', null); if (!g || !g.queue || !g.queue.length) return false; const next = String(g.queue[0]); g.queue = g.queue.slice(1); const [row, sc] = next.split('@'); g.row = +row; g.sc = +(sc || 0); g.scName = ''; S.set('gsRun', g);
    banner('Sheet', `Next: row ${row}${sc ? ' · scenario ' + sc : ''} (${g.queue.length} more after it)…`); await sleep(1500);
    if (g.portal) { try { const t = await gsTable(g.id, g.tab); const ci = t.head.findIndex((h) => /^portal url/i.test(h)); const u = String((t.aoa[row - 1] || [])[ci] || '').trim(); if (/^https?:/i.test(u)) { unblockUnload(); location.assign(u + gsSep(u) + 'sb4=run&sheet=' + enc(g.id) + '&tab=' + enc(g.tab) + '&row=' + row + (g.queue.length ? '&q=' + g.queue.join(',') : '')); return true; } } catch (e) { console.log('[SB4] portals', e.message); } }
    location.assign(gsLauncher(g) + '&row=' + row + (sc ? '&sc=' + sc : '') + (g.queue.length ? '&q=' + g.queue.join(',') : '')); return true;
  }
  const gsLauncher = (g) => `${g.launcher || 'https://login.demo.insurance.1silverbullet.tech/'}?sb4=run&sheet=${enc(g.id)}&tab=${enc(g.tab || 'Runs')}`;
  const gsRows = (spec) => { const out = []; String(spec || '').split(',').forEach((p) => { const m = p.trim().match(/^(\d+)\s*-\s*(\d+)$/); if (m) { for (let i = +m[1]; i <= +m[2] && out.length < 2000; i++) out.push(i); } else if (/^\d+$/.test(p.trim())) out.push(+p.trim()); }); return [...new Set(out)].filter((n) => n >= 2); };
  async function applyRunLink() {
    let q, inHash = false, bu; try { bu = new URL(String(BOOT_URL).replace(/([?&])\?/g, '$1')); /* a Launcher that already ends in "?id=…&" gets "?sb4=run" appended by the sheet formula: the stray "?" is dropped */ q = new URLSearchParams(bu.search); if (q.get('sb4') !== 'run') { const i = bu.hash.indexOf('?'); q = new URLSearchParams(i < 0 ? '' : bu.hash.slice(i + 1)); inHash = true; } } catch (e) { return; }
    if (q.get('sb4') !== 'run') return;
    try { window.__SB_BOOT_URL = bu.origin + bu.pathname + bu.hash.split('?')[0]; } catch (e) {}     // one run per page load – a re-injected copy must not start it again
    let env = q.get('env') || HERE.env, mode = /diy/i.test(q.get('mode') || '') ? 'diy' : 'assisted', lob = q.get('lob') || HERE.lob, category = q.get('category') || '', code = q.get('code') || '';
    let product = q.get('product') || ''; const auto = (q.get('auto') || 'yes').toLowerCase(); const person = q.get('person') || '';
    let gsRow = null; const gsId = q.get('sheet') || ''; const gsRowNo = +(q.get('row') || 0); const gsTab = q.get('tab') || 'Runs'; const gsMore = gsRows(q.get('rows') || ''); const gsSc = +(q.get('sc') || 0); const scSpec = gsScSpec(q.get('scenarios') || ''); let gsQ = (q.get('q') || '').split(',').filter(Boolean);   // sc = one scenario row; scenarios=all|rows = this row (and &rows=) × every enabled scenario; q = the remaining queue
    if (gsId && gsRowNo >= 2) {               // a ▶ Run from the Google Sheet dashboard: the row says what to run and with which values
      let scen = null; try { banner('Sheet', `Reading row ${gsRowNo}${gsSc ? ' + scenario ' + gsSc : ''}…`); gsRow = await gsLoadRow(gsId, gsRowNo, gsTab); if (gsSc) { scen = (await gsScenarios(gsId, gsRow.lob)).find((x) => x.row === gsSc) || null; if (scen) { gsRow.fields.push({ env: '', mode: '', lob: '', category: '', product: '', page: '', field: scen.question, key: scen.question, type: '', value: scen.answer, spec: 99 }); scen.fields.forEach((f) => gsRow.fields.push({ env: '', mode: '', lob: '', category: '', product: '', page: '', field: f.label, key: f.label, type: '', value: f.value, spec: 99 })); } } } catch (e) { banner('Sheet', `Row ${gsRowNo} could not be read (${e.message}) – is the sheet shared "anyone with the link"?`); return; }
      if (gsRow.portal && !samePortal(location.href, gsRow.url)) {   /* a Portals row clicked from a 1SB launcher, or the next portal of a batch: go to that portal with the same parameters – the run starts on arrival */
        location.assign(gsRow.url + gsSep(gsRow.url) + 'sb4=run&sheet=' + enc(gsId) + '&tab=' + enc(gsTab) + '&row=' + gsRowNo + (q.get('rows') ? '&rows=' + enc(q.get('rows')) : '') + (q.get('filter') ? '&filter=' + enc(q.get('filter')) : '') + (gsQ.length ? '&q=' + gsQ.join(',') : '')); return; }
      env = gsRow.env; mode = gsRow.mode; lob = gsRow.lob; category = /^all plans$|^other products/i.test(gsRow.category) ? '' : gsRow.category; product = gsRow.product; code = gsRow.code;
      if (gsRow.portal) {   /* on the portal itself: the environment is the distributor entry when the script knows the portal, else "custom" with this URL; the LOB comes from the row, the portal's address or its page */
        env = HERE.env !== '?' && HERE.env !== 'custom' && HERE.env !== 'Launcher' ? HERE.env : 'custom'; if (!lob) lob = (HERE.lob !== '?' && HERE.lob !== 'Launcher' ? HERE.lob : '') || lobFromUrl(gsRow.url) || lobFromPage() || ''; if (!lob) { banner('Portals', `Row ${gsRowNo}: the LOB of this portal is not known – fill the LOB column (Embedded / Life Term / Health / Investment / Motor Insurance)`); return; }
        HERE.env = env; HERE.lob = lob; }
      let rowsAll = gsMore; const flt = q.get('filter') || '';                                   // rows=all → every row of the tab; filter=Header:Value keeps only matching rows (Value empty = blank cell; !Value = not that value) – v5.33
      if (!gsQ.length && (/^all$/i.test(q.get('rows') || '') || flt)) { try { const t = await gsTable(gsId, gsTab); const idc = t.head.findIndex((h) => /insurer tc id|^portal url|^product$|^tc no/i.test(h)); const all = /^all$/i.test(q.get('rows') || '');
          let list = all ? t.aoa.map((r, i) => i + 1).filter((n) => n >= 2 && (idc < 0 || String(t.aoa[n - 1][idc] || '').trim())) : gsMore; if (!all && !list.includes(gsRowNo)) list = [gsRowNo].concat(list);
          if (flt) { const [hname, ...rest] = flt.split(':'); const val = rest.join(':'); const neg = val.startsWith('!'); const want = (neg ? val.slice(1) : val).trim().toLowerCase(); const ci = t.head.findIndex((h) => h.toLowerCase().startsWith(hname.trim().toLowerCase()));
            if (ci >= 0) list = list.filter((n) => { const v = String((t.aoa[n - 1] || [])[ci] == null ? '' : (t.aoa[n - 1] || [])[ci]).trim().toLowerCase(); const hit = want ? v === want || v.startsWith(want) : v === ''; return neg ? !hit : hit; }); }
          rowsAll = list.filter((n) => n !== gsRowNo); if (!list.includes(gsRowNo) && list.length) { location.assign(location.href.replace(/([?&])row=\d+/, '$1row=' + list[0]).replace(/&rows=[^&]*/, '').replace(/&filter=[^&]*/, '') + '&q=' + list.slice(1).map((n) => gsQueueItem(n)).join(',')); return; } } catch (e) { console.log('[SB4] sheet filter', e.message); } }
      if (scSpec && !gsQ.length) { const items = await gsExpandQueue(gsId, lob, [gsRowNo].concat(rowsAll), scSpec); gsQ = items.slice(1); }   // a scenarios link: build the whole queue once (row × scenarios), then run item by item
      else if (!gsQ.length) gsQ = rowsAll.map((n) => gsQueueItem(n));
      const cfgTab = await gsConfig(gsId); S.set('gsRun', { id: gsId, row: gsRowNo, sc: gsSc, scName: scen ? scen.name : '', tab: gsTab, queue: gsQ, writeUrl: cfgTab.WriteURL || cfgTab.writeUrl || '', launcher: cfgTab.Launcher || '', portal: !!gsRow.portal, portalName: gsRow.name || '' });
      if (!gsRow.portal && (HERE.lob === 'Launcher' || HERE.lob === '?' || (HERE.lob !== lob) || (HERE.env !== '?' && HERE.env !== env))) {   // not on that portal yet: go there with the same parameters – the run starts on arrival
        const base = runBase(env, lob, mode); if (!base) { banner('Sheet', `Row ${gsRowNo}: ${lob} is not available on ${env}`); return; }
        location.assign(base + '&sheet=' + enc(gsId) + '&tab=' + enc(gsTab) + '&row=' + gsRowNo + (gsSc ? '&sc=' + gsSc : '') + (gsQ.length ? '&q=' + gsQ.join(',') : '')); return; }
      if (scen) banner('Scenario', `${scen.name}${scen.fields.length ? ' → ' + scen.fields.map((f) => f.label + (f.value ? '=' + f.value : '')).join(', ') : ''}`);
      S.set('sheet', { name: 'Google Sheet row ' + gsRowNo, url: 'https://docs.google.com/spreadsheets/d/' + gsId, at: new Date().toISOString().slice(0, 16), rows: gsRow.fields, persons: {}, wide: [], cols: {} }); SHEET_IDX = { ctx: '', map: null };
      if (Object.keys(gsRow.person).length) { const v = Object.assign({}, personRow('P', P), gsRow.person); if (v.aadhaar) v.aadhaar = String(v.aadhaar).replace(/\D/g, ''); if (v.pan) v.pan = String(v.pan).toUpperCase(); const err = validatePerson(v); if (Object.keys(err).length) banner('Sheet', `Row ${gsRowNo} has invalid person values (${Object.entries(err).map(([k, m]) => k + ': ' + m).join('; ')}) – using the current person`); else applyPerson(v); }
    }
    try { ['sb4', 'env', 'mode', 'lob', 'category', 'product', 'code', 'person', 'auto', 'sheet', 'row', 'rows', 'tab', 'sc', 'scenarios', 'q', 'filter'].forEach((k) => q.delete(k)); const s = q.toString();
      if (!/sb4=run/.test(location.href)) { /* the portal already rewrote the address */ } else if (inHash) { const i = location.hash.indexOf('?'); history.replaceState(null, '', location.pathname + location.search + (i < 0 ? location.hash : location.hash.slice(0, i)) + (s ? '?' + s : '')); } else history.replaceState(null, '', location.pathname + (s ? '?' + s : '') + location.hash); } catch (e) {}
    if (!gsRow) await refreshWorkbook('run');
    if (!product && code) { const r = Object.values(RULES).find((x) => x.id === code || (x.m + '|' + x.id) === code); if (r) product = r.mname || r.name; }
    const sh = sheetDb(); if (person && sh && sh.persons && sh.persons[person]) { const p = sh.persons[person]; const v = Object.assign({}, personRow('P', P), p); const err = validatePerson(v); if (Object.keys(err).length) banner('Workbook', `Person ${person} has invalid values (${Object.entries(err).map(([k, m]) => k + ': ' + m).join('; ')}) – using the current person`); else applyPerson(v); }
    const f = Date.now(); S.set('off', false); S.set('off_' + TAB_ID, false); S.set(ADVK(), auto !== 'no' && auto !== '0' && auto !== 'false');
    S.set(CFGK(), { tab: TAB_ID, mode, env, lob, category, product: auto === 'quote' ? '' : product, queue: [], batch: false, batchAll: false, nextCats: [], retried: [], seen: null, variation: '', expectFail: false, ruleId: '', customUrl: '', running: true, fresh: f, startedAt: f, fromSheet: true });
    sessionStorage.removeItem('sb4_qset'); sessionStorage.removeItem('sb4_btnclicks'); sessionStorage.removeItem('sb4_picker_closed'); sessionStorage.removeItem('sb4_fresh'); capClear(); FL.fresh = null; FL.items = {};
    if (gsRow && gsRow.portal) { const c0 = S.get(CFGK(), {}); c0.gsPortal = true; c0.customUrl = env === 'custom' ? gsRow.url : ''; if (product === '*') { c0.product = '*'; c0.batch = true; c0.batchAll = true; c0.queue = []; c0.nextCats = []; c0.done = []; } S.set(CFGK(), c0); }
    if (gsRow) { const c0 = S.get(CFGK(), {}); c0.gsRow = gsRowNo; c0.scenario = (S.get('gsRun', {}) || {}).scName || ''; if (gsRow.tc) { c0.tc = gsRow.tc; c0.quoteWant = gsRow.quoteWant; c0.strictQuote = true; c0.stopAt = gsRow.stopAt; c0.tcOpt = gsRow.tcOpt || ''; c0.expectFail = !!gsRow.expectFail; c0.variation = gsRow.tc.id; c0.ruleId = gsRow.code; } S.set(CFGK(), c0); }
    banner(gsRow ? 'Run from sheet row ' + gsRowNo : 'Run from workbook', `${lob} · ${env} · ${mode === 'diy' ? 'DIY' : 'Assisted'}${category ? ' · ' + category : ''} → ${product === '*' ? 'every plan of the portal' : product || 'choose on the quote page'}${sheetHas() ? ' – values from the loaded workbook' : ' – no workbook loaded, using the script\'s own values'}`);
    refreshPanel();
  }
  /* ---------------- Validation sweep (v5.36): wrong values on every page, the error messages collected into one report ----------------
     Menu → 🧪 Validation sweep. While it is on, the journey stops on every form page before pressing Next, enters wrong values field by field
     (bad PAN / mobile / e-mail / PIN, a minor's or a future date of birth, age 5 / 150, income 0, name "123", nominee under 18, empty required fields …),
     reads the message the portal shows (under the field, in a toast, after Next), puts the right value back and moves on. The report is downloaded
     at the end of the journey (menu → 🧪 Validation report at any time) as HTML + Markdown. */
  const vsOn = () => !!S.get('vsweep', false);
  let vsBusy = false;
  const vsRoute = () => (location.hash || location.pathname).split('?')[0];
  const vsDoneHere = () => !!(S.get('vsDone', {}) || {})[vsRoute()];
  function vsReset() { S.set('vsDone', {}); S.set('vsReport', { pages: [], started: new Date().toISOString(), portal: location.host, url: location.href.split('?')[0] }); }
  function vsBadValues(el, label) {
    const l = (label + ' ' + (el.name || '') + ' ' + (el.id || '') + ' ' + (el.placeholder || '')).toLowerCase(); const t = el.type;
    const yr = new Date().getFullYear(); const dmy = !!(el.placeholder && /dd[-\/]mm/i.test(el.placeholder)) || /dob|date/.test(l) && t !== 'date';
    const dfmt = (y, m, d) => t === 'date' ? `${y}-${pad(m)}-${pad(d)}` : dmy ? `${pad(d)}-${pad(m)}-${y}` : `${y}-${pad(m)}-${pad(d)}`;
    if (/otp|captcha|search/.test(l)) return [];
    if (/\bpan\b|pan ?(no|number|card)/.test(l) && !/company|span|panel/.test(l)) return ['ABCDE123', 'AB12345CDE', 'abcde1234f', '1234567890'];
    if (/aadha/.test(l)) return ['1234', '000000000000', 'ABCDEFGHIJKL'];
    if (/mobile|phone|contact ?(no|number)|whatsapp/.test(l)) return ['12345', '0000000000', '1234567890', 'abcdefghij'];
    if (/e-?mail/.test(l)) return ['abc', 'abc@', 'abc@xyz', '@xyz.com'];
    if (/pin ?code|pincode|zip|postal/.test(l)) return ['12', '000000', 'ABCDEF'];
    if (/ifsc/.test(l)) return ['1234', 'ABCD012345'];
    if (/account ?(no|number)/.test(l)) return ['12', 'ABCD'];
    if (/gst/.test(l)) return ['1234', 'ABCDEFGHIJKLMNO'];
    if (/passport/.test(l)) return ['12', 'ABCDEFGH'];
    if (/voter|driving|licen|ckyc|kyc ?(no|number)/.test(l)) return ['12', 'ABC'];
    if (/nominee|appointee/.test(l) && (/dob|date of birth|birth/.test(l) || t === 'date')) return [dfmt(yr - 10, 1, 1), dfmt(yr + 1, 1, 1), dfmt(yr - 120, 1, 1)];
    if (/dob|date of birth|birth/.test(l) || t === 'date') return [dfmt(yr - 10, 1, 1), dfmt(yr - 100, 1, 1), dfmt(yr + 1, 1, 1)];
    if (/expiry|valid (till|upto)/.test(l)) return [dfmt(yr - 2, 1, 1)];
    if (/\bage\b/.test(l)) return ['5', '150', '0', 'ab'];
    if (/height/.test(l)) return ['0', '999', 'ab'];
    if (/weight/.test(l)) return ['0', '999', 'ab'];
    if (/share|percent|%/.test(l)) return ['0', '150', '-5'];
    if (/income|salary|amount|sum ?assured|premium|loan|cover|emi|tenure/.test(l)) return ['0', '-100', 'abc', '1'];
    if (/name/.test(l)) return ['123', '@#$', 'A', 'Test  123'];
    if (/address|city|area|landmark|street|village|district/.test(l)) return ['@@', '1'];
    if (/year|tenure|term|duration/.test(l)) return ['0', '999', 'ab'];
    if (t === 'number' || el.inputMode === 'numeric' || t === 'tel') return ['-1', '0', 'ab', '99999999999'];
    return ['@@@', '1'];
  }
  function vsToasts() { return Q('[role="alert"], .toast, .toast-message, .p-toast-message, .swal2-container, .Toastify__toast, .el-message, .v-snack, .snackbar, .alert-danger, .MuiAlert-message, .ant-message, .notification').filter((x) => vis(x) && !ours(x)).map((x) => x.innerText.trim().replace(/\s+/g, ' ').slice(0, 200)).filter(Boolean); }
  async function vsSweepPage() {
    const route = vsRoute(); const d = S.get('vsDone', {}) || {}; d[route] = true; S.set('vsDone', d);   /* marked first: one sweep per page, even if it throws */
    const FLD = 'input:not([type=radio]):not([type=checkbox]):not([type=hidden]):not([type=file]):not([type=submit]):not([type=button]):not([type=password]), textarea';
    const pick = () => Q(FLD).filter((el) => usable(el) && !ours(el) && !isOtp(el) && !isFilterBox(el) && !el.closest('.p-select, .p-dropdown, .react-select__control, .vs__dropdown-toggle, .ng-select-container, .multiselect, .p-calendar, .p-datepicker') && !/captcha|search/i.test(labelOf(el) + (el.name || '')));
    const fields = pick(); if (!fields.length) return 0;
    banner('Validation', `Trying wrong values in ${fields.length} field(s) on this page…`);
    const page = { route, title: pageTitle(), at: new Date().toISOString(), cases: [] };
    const put = async (el, v) => { el.focus(); if (el.type === 'date') setNative(el, String(v)); else if (el.type === 'tel' || el.inputMode === 'numeric' || /mob|phone|pin|date|dob|aadha|pan/i.test(labelOf(el) + ' ' + (el.name || ''))) await typeInto(el, String(v)); else setNative(el, String(v)); el.dispatchEvent(new Event('blur', { bubbles: true })); el.dispatchEvent(new FocusEvent('focusout', { bubbles: true })); };
    const errsNow = () => errorList().concat(vsToasts());
    const own = (el) => Q(ERRSEL).filter((x) => vis(x) && x.innerText.trim() && !ours(x) && fieldForError(x) === el).map((x) => x.innerText.trim().slice(0, 200)).join(' | ');   /* the message that belongs to THIS field (a stale message of another field in the same block is not it) */
    const errOf = (el, prev, mine) => { const o = own(el); if (o) return o; const c = fieldError(el); return c && (c !== prev || (mine && c === mine)) ? c : ''; };   /* a message that was already there before typing counts only when this field produced it earlier in the sweep */
    const t0 = Date.now(); let n = 0;
    for (const el of fields) {
      if (Date.now() - t0 > 170000 || vsRoute() !== route) break; if (!el.isConnected || !usable(el)) continue;
      const label = (labelOf(el) || '').replace(/\s*\*\s*$/, '').trim() || el.name || el.placeholder || 'field'; const orig = el.value; let mine = '';
      for (const v of vsBadValues(el, label)) {
        if (vsRoute() !== route) break; const before = new Set(errsNow()); const prev = fieldError(el);
        try { await put(el, v); } catch (e) { continue; }
        await sleep(450); let err = errOf(el, prev, mine); let how = 'on typing';
        if (!err) { const b = primaryButton(); if (b && !pageBusy() && !netBusy()) { b.click(); how = 'after Next'; await sleep(1400); if (vsRoute() === route) err = errOf(el, prev, mine); } }
        const extra = vsRoute() === route ? errsNow().filter((x) => !before.has(x)) : [];
        if (!err && extra.length) err = extra.join(' | ');
        n++; if (err) mine = err; page.cases.push({ field: label, value: v === '' ? '(empty)' : String(v), error: err || '', how: err ? how : '', shown: !!err, moved: vsRoute() !== route });
        if (vsRoute() !== route) { page.note = `The page moved on with "${label}" = "${v}" – no validation stopped it.`; break; }
      }
      if (vsRoute() !== route) break;
      try { await put(el, orig); } catch (e) {} await sleep(150);
    }
    if (vsRoute() === route) {   /* every required field empty at once: the mandatory-field messages */
      const req = pick().filter((el) => /\*/.test(labelOf(el)) || el.required); const origs = req.map((el) => el.value);
      if (req.length) { for (const el of req) { try { await put(el, ''); } catch (e) {} } await sleep(300); const b = primaryButton(); if (b && !pageBusy() && !netBusy()) { b.click(); await sleep(1500); } const errs = vsRoute() === route ? errsNow() : [];
        page.cases.push({ field: '(all required fields empty)', value: `(empty) × ${req.length}: ${req.map((el) => (labelOf(el) || el.name || '').replace(/\s*\*\s*$/, '')).join(', ').slice(0, 300)}`, error: errs.join(' | '), how: errs.length ? 'after Next' : '', shown: !!errs.length, moved: vsRoute() !== route });
        if (vsRoute() === route) for (let i = 0; i < req.length; i++) { try { if (req[i].isConnected) await put(req[i], origs[i]); } catch (e) {} } }
    }
    const R = S.get('vsReport', { pages: [] }) || { pages: [] }; R.portal = R.portal || location.host; R.product = cfg().product || R.product || ''; R.lob = HERE.lob; R.env = HERE.env; R.pages.push(page); S.set('vsReport', R);
    try { sessionStorage.removeItem('sb4_btnclicks'); } catch (e) {}   /* the Next presses of the sweep must not count against the button */
    lastFill = { sig: '', at: 0, clean: false };                         /* the ordinary filler checks the page once more before the real Next */
    banner('Validation', `${page.cases.length} wrong value(s) tried – ${page.cases.filter((c) => c.shown).length} showed a message, ${page.cases.filter((c) => !c.shown).length} did not`);
    return n;
  }
  function vsReportHtml() {
    const R = S.get('vsReport', { pages: [] }) || { pages: [] }; const all = R.pages.flatMap((p) => p.cases); const shown = all.filter((c) => c.shown).length;
    const row = (c) => `<tr class="${c.shown ? 'ok' : 'miss'}"><td>${escH(c.field)}</td><td><code>${escH(c.value)}</code></td><td>${c.shown ? escH(c.error) : '<b>NO MESSAGE SHOWN</b>' + (c.moved ? ' – page moved on' : '')}</td><td>${escH(c.how || '')}</td></tr>`;
    const pages = R.pages.map((p, i) => `<h2>${i + 1}. ${escH(p.title || p.route)} <small>${escH(p.route)}</small></h2>${p.note ? `<p class="note">${escH(p.note)}</p>` : ''}<table><thead><tr><th>Field</th><th>Wrong value entered</th><th>Message shown by the portal</th><th>When</th></tr></thead><tbody>${p.cases.map(row).join('')}</tbody></table>`).join('');
    return `<!doctype html><html><head><meta charset="utf-8"><title>Validation report – ${escH(R.portal || '')}</title><style>body{font:14px/1.45 system-ui,Segoe UI,Arial;margin:28px;color:#0f172a}h1{font-size:22px;margin:0 0 4px}h2{font-size:16px;margin:26px 0 8px}h2 small{color:#64748b;font-weight:normal;font-size:12px}table{border-collapse:collapse;width:100%}th,td{border:1px solid #cbd5e1;padding:6px 8px;text-align:left;vertical-align:top;font-size:13px}th{background:#1f3a8a;color:#fff}tr.miss td{background:#fef2f2}tr.ok td:nth-child(3){background:#f0fdf4}code{background:#f1f5f9;padding:1px 4px;border-radius:3px}.sum{background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:10px 14px;margin:12px 0}.note{color:#b91c1c}</style></head><body>
<h1>Validation report – ${escH(R.portal || '')}</h1><div>${escH(R.url || '')} · ${escH(R.lob || '')} · ${escH(R.product || '')} · ${escH((R.started || '').slice(0, 16).replace('T', ' '))} · script v${SB_VERSION}</div>
<div class="sum"><b>${all.length}</b> wrong values tried on <b>${R.pages.length}</b> page(s) – <b>${shown}</b> showed a validation message, <b>${all.length - shown}</b> showed none (red rows = the portal accepted a wrong value or showed no message).</div>${pages || '<p>No form page was swept yet.</p>'}</body></html>`;
  }
  function vsReportMd() {
    const R = S.get('vsReport', { pages: [] }) || { pages: [] }; const all = R.pages.flatMap((p) => p.cases); const shown = all.filter((c) => c.shown).length;
    const esc = (s) => String(s || '').replace(/\|/g, '\\|').replace(/\n/g, ' ');
    return `# Validation report – ${R.portal || ''}\n\n${R.url || ''} · ${R.lob || ''} · ${R.product || ''} · ${(R.started || '').slice(0, 16).replace('T', ' ')}\n\n**${all.length}** wrong values tried on **${R.pages.length}** page(s) – **${shown}** showed a validation message, **${all.length - shown}** showed none.\n\n` +
      R.pages.map((p, i) => `## ${i + 1}. ${p.title || p.route} (${p.route})\n\n${p.note ? '> ' + p.note + '\n\n' : ''}| Field | Wrong value entered | Message shown by the portal | When |\n|---|---|---|---|\n` + p.cases.map((c) => `| ${esc(c.field)} | \`${esc(c.value)}\` | ${c.shown ? esc(c.error) : '**NO MESSAGE SHOWN**' + (c.moved ? ' – page moved on' : '')} | ${esc(c.how)} |`).join('\n') + '\n').join('\n');
  }
  function vsDownload() {
    const R = S.get('vsReport', { pages: [] }) || { pages: [] }; const stem = `validation-${String(R.portal || location.host).replace(/[^a-z0-9]+/gi, '-')}-${new Date().toISOString().slice(0, 16).replace(/[:T]/g, '-')}`;
    saveBlob(new Blob([vsReportHtml()], { type: 'text/html' }), stem + '.html'); setTimeout(() => saveBlob(new Blob([vsReportMd()], { type: 'text/markdown' }), stem + '.md'), 600);
    banner('Validation', `Report downloaded (${stem}.html + .md) – ${R.pages.flatMap((p) => p.cases).length} cases on ${R.pages.length} page(s)`);
  }
  /* ---------------- Console API logs → document (v5.37) ----------------
     Request IDs in → one Word document out: per request ID the 1SB request / response and the insurer (manufacturer) request / response, as the console's API Logs hold them,
     with a summary table (timestamp, what differs in the request, 1SB response, insurer response, premium). Runs on the 1SB console (demo.console.1silverbullet.tech …).
     The console's own API is not hard-wired: the script reads the calls the console page makes (the same capture the Postman export uses). The first time it types the ID into
     the console's search box and opens the entries itself – or you do it by hand once – and remembers which calls carried the request ID; after that every ID is fetched directly.
     Never in the document: the insurer token call (oauth / jwt), authorization headers / passwords / tokens; encrypted payload strings are replaced by a length marker unless asked for. */
  const onConsole = () => /console/i.test(location.host) && /silverbullet|9platforms/i.test(location.host);
  const CON = { calls: [], dom: [], busy: false, log: [] };
  const CON_ID = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/ig;
  const conIds = (txt) => { const full = String(txt || '').match(CON_ID) || []; const rest = String(txt || '').replace(CON_ID, ' ').split(/[\s,;]+/).filter((x) => /^[A-Za-z0-9_-]{6,}$/.test(x)); return [...new Set(full.map((x) => x.toLowerCase()).concat(rest))]; };
  const conMine = (el) => !!(el && el.closest && el.closest('#sb-con, #sb-conbtn, #sb-panel, #sb-menu, #sb-dialog, #sb-banner'));
  const conJ = (s) => { if (s && typeof s === 'object') return s; const t = String(s == null ? '' : s).trim(); if (!/^[\[{]/.test(t)) return undefined; try { return JSON.parse(t); } catch (e) { return undefined; } };
  const conAllCalls = () => { const seen = new Map(); capLoad().concat(CON.calls).forEach((c) => { if (!c || !c.url) return; seen.set(c.method + ' ' + c.url + ' ' + String(c.reqBody || '').slice(0, 400), c); }); return [...seen.values()].sort((a, b) => (a.t || 0) - (b.t || 0)); };
  const conReqSide = (c) => { let u = c.url || ''; try { u = decodeURIComponent(u); } catch (e) {} return u + ' ' + (c.reqBody || ''); };
  /* ---- which console calls carry a request ID: learned from what the page itself did, replayed for the next ID ---- */
  const CON_SECRET = /^(authorization|x-auth-token|x-api-key|x-access-token|x-csrf-token|x-xsrf-token|token|apikey|api-key)$/i;
  const CON_DROP = /^(content-length|host|connection|accept-encoding|origin|referer|cookie|user-agent|sec-|pragma|cache-control)/i;
  function conLearn(id) {
    const tpls = S.get('conTpl', []) || []; let n = 0;
    conAllCalls().filter((c) => c.status >= 200 && c.status < 400 && conReqSide(c).toLowerCase().includes(String(id).toLowerCase()) && conJ(c.resBody) !== undefined).forEach((c) => {
      let path = c.url; try { const u = new URL(c.url); path = u.origin + u.pathname; } catch (e) {}
      const hdr = {}; Object.entries(c.reqHeaders || {}).forEach(([k, v]) => { if (!CON_SECRET.test(k) && !CON_DROP.test(k)) hdr[k] = v; });
      const key = c.method + ' ' + path.split(id).join('{id}'); const t = { key, method: c.method, url: c.url, body: c.reqBody || '', headers: hdr, sample: id, at: Date.now() };
      const i = tpls.findIndex((x) => x.key === key); if (i >= 0) tpls[i] = t; else { tpls.push(t); n++; } });
    S.set('conTpl', tpls.slice(-12)); return n;
  }
  function conAuth(url) {              /* the freshest authorization-type headers the console page itself sent to that host */
    let origin = ''; try { origin = new URL(url).origin; } catch (e) {} const out = {};
    const cs = capLoad().filter((c) => c.reqHeaders && Object.keys(c.reqHeaders).some((k) => CON_SECRET.test(k))); const same = cs.filter((c) => String(c.url).startsWith(origin)); const src = (same.length ? same : cs).slice(-1)[0];
    if (src) Object.entries(src.reqHeaders).forEach(([k, v]) => { if (CON_SECRET.test(k)) out[k] = v; }); return out;
  }
  async function conFetch(method, url, body, headers, id) {
    const h = Object.assign({}, headers || {}, conAuth(url)); const opt = { method, headers: h }; if (!/^(GET|HEAD)$/i.test(method) && body) opt.body = body;
    const r = await PW.fetch(url, opt); const text = await r.text(); const rec = { t: Date.now(), method, url, reqBody: body || '', reqHeaders: {}, status: r.status, resBody: text, forId: id }; CON.calls.push(rec); return rec;
  }
  async function conReplay(id, say) {
    const tpls = S.get('conTpl', []) || []; let ok = 0;
    for (const t of tpls) { const rep = (s) => String(s || '').split(t.sample).join(id).split(encodeURIComponent(t.sample)).join(encodeURIComponent(id));
      try { const r = await conFetch(t.method, rep(t.url), rep(t.body), t.headers, id); if (r.status === 401 || r.status === 403) { say('  the console answered ' + r.status + ' – sign in to the console again (reload the page) and retry'); continue; } if (r.status < 400) ok++; } catch (e) { say('  direct call failed (' + e.message + ')'); } }
    return ok;
  }
  /* ---- first time: drive the console page itself (type the ID into its search box, open the entries) ---- */
  async function conDrive(id, say) {
    if (!/log/i.test(location.href + ' ' + ((document.querySelector('h1,h2,h3,.page-title') || {}).innerText || ''))) { const nav = Q('a, button, [role="menuitem"], li, span').filter((e) => vis(e) && !conMine(e) && /^\s*api\s*logs?\s*$/i.test(e.innerText || '')).pop(); if (nav) { say('  opening "API Logs"…'); nav.click(); await sleep(2500); } }
    const inputs = Q('input:not([type=hidden]):not([type=checkbox]):not([type=radio]):not([type=file]):not([type=password]), textarea').filter((e) => vis(e) && !e.disabled && !e.readOnly && !conMine(e));
    const lab = (e) => ((e.placeholder || '') + ' ' + (e.name || '') + ' ' + (e.id || '') + ' ' + (e.getAttribute('aria-label') || '') + ' ' + labelOf(e)).toLowerCase();
    const inp = inputs.find((e) => /req(uest)?[\s_-]*id/.test(lab(e))) || inputs.find((e) => /search|filter|find/.test(lab(e))) || inputs.find((e) => /\bid\b/.test(lab(e)));
    if (!inp) { say('  no search box found on this page – open API Logs, search the ID yourself once, then press "Build from what the page loaded"'); return false; }
    await sleep(600);   /* the script's own direct calls of a moment ago are in the capture by now – from here on only the page's calls count */
    const n0 = capLoad().length; inp.focus(); await typeInto(inp, id); await sleep(300);
    ['keydown', 'keypress', 'keyup'].forEach((t) => inp.dispatchEvent(new KeyboardEvent(t, { key: 'Enter', code: 'Enter', keyCode: 13, which: 13, bubbles: true })));
    await sleep(700);
    if (capLoad().length === n0) { const scope = inp.closest('form, .filters, .filter, .toolbar, .card, section, div[class*="filter"], div[class*="search"]') || document.body; const btn = Q('button, [role="button"], input[type=submit]', scope).concat(Q('button, [role="button"]')).find((b) => vis(b) && !b.disabled && !conMine(b) && /^\s*(search|apply|filter|go|submit|find|fetch|get logs?)\s*$/i.test(b.innerText || b.value || b.getAttribute('aria-label') || '')); if (btn) btn.click(); }
    for (let i = 0; i < 16; i++) { await sleep(500); if (capLoad().slice(n0).some((c) => conReqSide(c).toLowerCase().includes(id.toLowerCase())) && !(PW.__sbNet && PW.__sbNet.n)) break; }
    await sleep(600); return true;
  }
  const conBlocks = (root) => Q('pre, code, textarea, .json-viewer, .jv-container, [class*="json-view"], [class*="jsonview"], [class*="code-block"], .monaco-editor .view-lines', root || document).filter((e) => vis(e) && !conMine(e) && !Q('pre, code', e).length).map((e) => ({ el: e, text: (e.value != null && e.tagName === 'TEXTAREA' ? e.value : e.innerText || '').trim() })).filter((b) => b.text.length > 12 && /[{\[<]/.test(b.text.slice(0, 3)));
  function conBlockLabel(el) {
    let n = el; for (let i = 0; i < 6 && n && n !== document.body; i++) { let p = n.previousElementSibling; for (let k = 0; k < 3 && p; k++, p = p.previousElementSibling) { const t = (p.innerText || '').trim(); if (t && t.length < 70 && /request|response|payload|header|manufacturer|insurer|body/i.test(t)) return t.replace(/\s+/g, ' '); } n = n.parentElement; }
    const tab = Q('[role="tab"][aria-selected="true"], .p-highlight[role="presentation"], .nav-link.active, .tab.active').filter(vis).map((e) => (e.innerText || '').trim()).filter(Boolean).pop(); return tab || '';
  }
  async function conOpenRows(id, say) {
    const short = id.slice(0, 8).toLowerCase(); let rows = Q('tbody tr, [role="row"], .log-row, .list-group-item').filter((r) => vis(r) && !conMine(r) && !r.querySelector('th'));
    const hit = rows.filter((r) => (r.innerText || '').toLowerCase().includes(short)); if (hit.length) rows = hit; rows = rows.slice(0, 8); if (!rows.length) return 0; let opened = 0;
    const scrape = (tag) => conBlocks().forEach((b) => { const label = conBlockLabel(b.el); if (!CON.dom.some((d) => d.id === id && d.text === b.text)) CON.dom.push({ id, row: tag, label, text: b.text }); });
    const closeTop = async () => { const x = Q('button, [role="button"], .p-dialog-header-close, .close, .btn-close').filter((b) => vis(b) && !conMine(b) && (/^\s*(close|×|x|cancel)\s*$/i.test(b.innerText || '') || /close/i.test((b.getAttribute('aria-label') || '') + ' ' + b.className))).pop(); if (x && x.closest('[role="dialog"], .modal, .p-dialog, .drawer, .offcanvas, .MuiDialog-root, .MuiDrawer-root')) { x.click(); await sleep(350); } else { document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', keyCode: 27, bubbles: true })); await sleep(250); } };
    for (let i = 0; i < rows.length; i++) { const r = rows[i]; if (!r.isConnected) continue; const n0 = capLoad().length; const b0 = conBlocks().length;
      const opener = Q('button, a, [role="button"], svg, i', r).find((e) => vis(e) && /view|detail|expand|payload|eye|open|more|chevron|arrow|info/i.test((e.getAttribute('title') || '') + ' ' + (e.getAttribute('aria-label') || '') + ' ' + (e.className && e.className.baseVal != null ? e.className.baseVal : e.className || '') + ' ' + (e.innerText || '')));
      (opener && opener.dispatchEvent ? opener : r).dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: PW })); if (opener) await sleep(150);
      for (let k = 0; k < 6; k++) { await sleep(400); if (capLoad().length > n0 || conBlocks().length > b0) break; }
      if (capLoad().length === n0 && conBlocks().length === b0 && opener) { r.click(); await sleep(900); }
      await sleep(500); scrape(i);
      const dlg = Q('[role="dialog"], .modal.show, .p-dialog, .drawer, .offcanvas.show, .MuiDialog-root, .MuiDrawer-root').filter((d) => vis(d) && !conMine(d)).pop();
      const tabs = Q('[role="tab"], .p-tabview-nav li a, .nav-tabs .nav-link, .tab', dlg || r.parentElement || document).filter((t) => vis(t) && !conMine(t)).slice(0, 8);
      for (const t of tabs) { t.click(); await sleep(450); scrape(i); }
      if (capLoad().length > n0 || conBlocks().length > b0) opened++;
      if (dlg) await closeTop(); }
    if (opened) say(`  opened ${opened} log entr${opened === 1 ? 'y' : 'ies'} on the page`); return opened;
  }
  /* ---- from the collected console answers: the log records (API path, request, response …) that belong to one request ID ---- */
  const CK = { path: /^(api_?path|api_?url|url|uri|endpoint|path|request_?url|api_?name|api)$/i, req: /^(request|req)(_?(payload|body|data|json|params))?$|^payload$/i, resp: /^(response|res|resp)(_?(payload|body|data|json))?$/i, reqH: /^(request|req)_?headers?$/i, respH: /^(response|res|resp)_?headers?$/i, ts: /time|created|logged|^date$|_at$/i, status: /^(http_?)?(status|response)(_?code)?$/i, method: /^(http_?|request_?)?method$/i, consumer: /^(consumer|distributor|org(ani[sz]ation)?)(_?(id|name|code))?$/i, manu: /^(manufacturer|insurer|provider|insurance_?company)(_?(id|name|code))?$/i, type: /(^|_)(type|direction|category|source|kind)$|Type$/ };
  const conKey = (o, re, prefer) => { const ks = Object.keys(o).filter((k) => re.test(k)); if (!ks.length) return ''; return (prefer && ks.find((k) => prefer.test(k))) || ks[0]; };
  const conIsRec = (o) => { if (!o || typeof o !== 'object' || Array.isArray(o)) return false; const rq = conKey(o, CK.req), rs = conKey(o, CK.resp), p = conKey(o, CK.path); return !!((rq && rs) || ((rq || rs) && p)); };
  function conWalk(v, cb, d) { d = d || 0; if (d > 9 || v == null || typeof v !== 'object') return; if (Array.isArray(v)) { v.forEach((x) => conWalk(x, cb, d + 1)); return; } const isRec = cb(v) === true;   /* the payloads of a log record are not searched for further records */
    Object.keys(v).forEach((k) => { if (isRec && (CK.req.test(k) || CK.resp.test(k) || CK.reqH.test(k) || CK.respH.test(k))) return; let x = v[k]; if (typeof x === 'string' && x.length > 40) { const j = conJ(x); if (j) x = j; } conWalk(x, cb, d + 1); }); }
  function conRecord(o, call) {
    const pk = conKey(o, CK.path, /url|path/i); const rq = conKey(o, CK.req, /payload|body/i), rs = conKey(o, CK.resp, /payload|body/i); const val = (re, pref) => { const k = conKey(o, re, pref); const v = k ? o[k] : ''; return v != null && typeof v !== 'object' ? String(v) : ''; };
    const dec = (v) => { const j = conJ(v); return j !== undefined ? j : v; };
    const tsk = Object.keys(o).filter((k) => CK.ts.test(k) && o[k] != null && typeof o[k] !== 'object'); const tk = tsk.find((k) => /time|logged|created/i.test(k)) || tsk[0];
    return { raw: o, call, path: pk && typeof o[pk] === 'string' ? o[pk] : '', method: val(CK.method).toUpperCase(), status: val(CK.status), ts: tk ? o[tk] : '', req: rq ? dec(o[rq]) : undefined, resp: rs ? dec(o[rs]) : undefined, reqH: (() => { const k = conKey(o, CK.reqH); return k ? dec(o[k]) : undefined; })(), respH: (() => { const k = conKey(o, CK.respH); return k ? dec(o[k]) : undefined; })(), consumer: val(CK.consumer, /name|code|id/i), manu: val(CK.manu, /name|code|id/i), type: Object.keys(o).filter((k) => CK.type.test(k) && typeof o[k] === 'string').map((k) => o[k]).join(' ') };
  }
  const conSeg = (url) => { try { const u = new URL(url, location.href); return u.pathname.split('/').concat([...u.searchParams.values()]).filter(Boolean); } catch (e) { return []; } };
  function conRecords(id) {
    const lid = String(id).toLowerCase(); const calls = conAllCalls(); const mine = new Set(calls.filter((c) => c.forId === id || (conReqSide(c) + ' ' + (c.resBody || '')).toLowerCase().includes(lid)));
    const recs = []; const sig = new Set(); const take = (c, onlyWithId) => { const j = conJ(c.resBody); if (j === undefined) return; conWalk(j, (o) => { if (!conIsRec(o)) return false; let s; try { s = JSON.stringify(o); } catch (e) { return true; } if (onlyWithId && !s.toLowerCase().includes(lid)) return true; const k = s.length + ':' + s.slice(0, 300) + s.slice(-200); if (sig.has(k)) return true; sig.add(k); recs.push(conRecord(o, c)); return true; }); };
    /* a list answer may hold other request IDs too: from such an answer only the records that name this ID; an answer fetched for this ID alone is taken whole */
    mine.forEach((c) => { const other = (String(c.resBody || '').match(CON_ID) || []).map((x) => x.toLowerCase()).filter((x) => x !== lid); const reqHasId = c.forId === id || conReqSide(c).toLowerCase().includes(lid); take(c, !(reqHasId && new Set(other).size < 3)); });
    for (let round = 0; round < 2; round++) {   /* detail calls opened for one of those records (their URL carries the record's own id) */
      const ids = new Set(); recs.map((r) => r.raw).concat(round ? [] : conRows(id)).forEach((raw) => Object.entries(raw).forEach(([k, v]) => { if (/(^|_)id$|Id$|uuid|key$/i.test(k) && v != null && typeof v !== 'object' && String(v).length >= 3 && String(v).toLowerCase() !== lid) ids.add(String(v)); }));
      calls.filter((c) => !mine.has(c) && conSeg(c.url).some((s) => ids.has(s))).forEach((c) => { mine.add(c); take(c, false); }); }
    const byId = new Map(); const out = []; recs.forEach((r) => { const idk = Object.keys(r.raw).find((k) => /^(_?id|log_?id|uuid)$/i.test(k) && r.raw[k] != null && typeof r.raw[k] !== 'object'); if (!idk) { out.push(r); return; } const key = String(r.raw[idk]); const have = byId.get(key); const rich = (x) => (x.req !== undefined ? 1 : 0) + (x.resp !== undefined ? 1 : 0); if (!have) { byId.set(key, r); out.push(r); } else if (rich(r) > rich(have)) { out[out.indexOf(have)] = r; byId.set(key, r); } });
    return { recs: out, calls: [...mine] };
  }
  function conRows(id) {               /* every entry of a console answer that names this request ID – with or without payloads (a list row is opened through its own id) */
    const lid = String(id).toLowerCase(); const rows = []; const seen = new Set();
    conAllCalls().filter((c) => c.forId === id || (conReqSide(c) + ' ' + (c.resBody || '')).toLowerCase().includes(lid)).forEach((c) => { const j = conJ(c.resBody); if (j === undefined) return; const reqHasId = c.forId === id || conReqSide(c).toLowerCase().includes(lid);
      conWalk(j, (o) => { const ks = Object.keys(o); if (ks.length < 3 || !ks.some((k) => /(^|_)id$|Id$|uuid/i.test(k) && o[k] != null && typeof o[k] !== 'object')) return false; if (ks.some((k) => Array.isArray(o[k]) && o[k].length && typeof o[k][0] === 'object' && !CK.req.test(k) && !CK.resp.test(k))) return false;   /* a wrapper around the list, not an entry */
        let s; try { s = JSON.stringify(o); } catch (e) { return false; } if (!reqHasId && !s.toLowerCase().includes(lid)) return false; if (reqHasId && !s.toLowerCase().includes(lid) && (s.match(CON_ID) || []).length) return false; const k = s.slice(0, 400); if (!seen.has(k)) { seen.add(k); rows.push(o); } return true; }); });
    return rows;
  }
  function conLearnDetail(id) {        /* a call whose URL carries a record's own id (and not the request ID) is the "open one entry" call */
    const { recs, calls } = conRecords(id); const raws = conRows(id).concat(recs.map((r) => r.raw)); const d = S.get('conDetail', []) || []; let n = 0;
    calls.forEach((c) => { if (conReqSide(c).toLowerCase().includes(id.toLowerCase()) || c.method !== 'GET' || c.status >= 400) return; const segs = conSeg(c.url);
      for (const raw of raws) for (const [k, v] of Object.entries(raw)) { if (!/(^|_)id$|Id$|uuid|key$/i.test(k) || v == null || typeof v === 'object' || String(v).length < 3 || !segs.includes(String(v))) continue; let path = c.url; try { const u = new URL(c.url); path = u.origin + u.pathname; } catch (e) {} const key = path.split(String(v)).join('{v}'); if (!d.some((x) => x.key === key)) { d.push({ key, url: c.url.split(String(v)).join('{v}'), field: k }); n++; } return; } });
    S.set('conDetail', d.slice(-8)); return n;
  }
  async function conDetails(id) {
    const d = S.get('conDetail', []) || []; if (!d.length) return 0; const raws = conRows(id).concat(conRecords(id).recs.map((r) => r.raw)); let n = 0; const done = new Set(conAllCalls().map((c) => c.url));
    for (const raw of raws.slice(0, 60)) for (const t of d) { const v = raw[t.field]; if (v == null || typeof v === 'object') continue; const url = t.url.split('{v}').join(encodeURIComponent(String(v))); if (done.has(url)) continue; done.add(url); try { const x = await conFetch('GET', url, '', {}, id); if (x.status < 400) n++; } catch (e) {} }
    return n;
  }
  /* ---- the 1SB console's own API (v5.38): three calls, no date window, no page clicking ----
     GET …/pfm/console/v1/apiLog?requestId=…            the 1SB (consumer) call logged under the request ID          (pageNumber is 0-based)
     GET …/pfm/console/v1/apiLog/events?awsrequestId=…  the downstream calls of that request: insurer API, insurer token, internal credential lookup
     GET …/pfm/console/v1/apiLog/requestResponse?apiUsageId=…  request / response payload of one of those entries */
  const conBase = () => { const c = capLoad().filter((x) => /\/pfm\/console\/v\d+\//.test(x.url)).pop(); if (c) return c.url.match(/^https?:\/\/[^/]+\/pfm\/console\/v\d+/)[0]; const m = location.host.match(/^([a-z0-9-]+)\.console\.(.+)$/i); return m ? `https://${m[1]}.api.console.${m[2]}/pfm/console/v1` : ''; };
  const conOrg = () => { const c = capLoad().filter((x) => /\/apiLog(\?|$)/.test(x.url) && x.status === 200).pop(); try { const u = new URL(c.url); return { id: u.searchParams.get('organizationId') || '1SB', type: u.searchParams.get('organizationType') || '1SB' }; } catch (e) { return { id: '1SB', type: '1SB' }; } };
  async function conGet(base, path, q) { const u = new URL(base + path); Object.entries(q).forEach(([k, v]) => u.searchParams.set(k, v)); (PW.__sbSkipCap = PW.__sbSkipCap || new Set()).add(u.href);   /* the script's own calls stay out of the page capture */
    const r = await PW.fetch(u.href, { headers: Object.assign({ Accept: 'application/json, text/plain, */*' }, conAuth(u.href)) }); let j = null; try { j = await r.json(); } catch (e) {} if (r.status === 401 || r.status === 403) { const e = new Error('AUTH'); e.auth = true; throw e; } return { st: r.status, j }; }
  async function conNativeOne(base, org, id) {
    const end = new Date(Date.now() + 2 * 864e5).toISOString().slice(0, 10) + ' 23:59:59'; const dec = (v) => { const j = conJ(v); return j !== undefined ? j : v; };
    const [L, E] = await Promise.all([conGet(base, '/apiLog', { organizationId: org.id, organizationType: org.type, startDate: '2020-01-01 00:00:00', endDate: end, pageSize: 50, pageNumber: 0, requestId: id }), conGet(base, '/apiLog/events', { awsrequestId: id })]);
    const rows = ((L.j && L.j.data && L.j.data.apiusageList) || []).filter((r) => String(r.requestId || '').toLowerCase() === id.toLowerCase()); const evs = Array.isArray(E.j && E.j.data) ? E.j.data : [];
    const kindOf = (r) => /token/i.test(r.APIName || '') || /oauth|jwt|\/token(\/|$|\?)/i.test(r.apiPath || '') ? 'token' : /internalapi\.|1silverbullet|9platforms|insCredentials/i.test(r.apiPath || '') ? 'internal' : 'ins';
    const mk = async (r, kind) => { const d = await conGet(base, '/apiLog/requestResponse', { apiUsageId: r.id }); const p = (d.j && d.j.data) || {}; const has = (v) => v !== undefined && v !== null && !(typeof v === 'object' && !Array.isArray(v) && !Object.keys(v).length && kind === 'sb' && /^GET$/i.test(r.apiMethod || ''));
      return { raw: r, kind, path: r.apiPath || '', method: r.apiMethod || (kind === 'ins' ? 'POST' : ''), status: r.responseCode != null ? String(r.responseCode) : '', ts: r.timestamp, req: has(p.requestPayload) ? dec(p.requestPayload) : undefined, resp: has(p.responsePayload) ? dec(p.responsePayload) : undefined, consumer: r.consumerId || '', manu: r.manufacturerId && !/^na$/i.test(r.manufacturerId) ? String(r.manufacturerId) : '', apiName: String(r.APIName || '').trim(), latency: r.latency }; };
    const insEv = evs.filter((r) => kindOf(r) === 'ins').sort((a, b) => String(a.timestamp).localeCompare(String(b.timestamp)));
    const [sb, ins] = await Promise.all([Promise.all(rows.map((r) => mk(r, 'sb'))), Promise.all(insEv.map((r) => mk(r, 'ins')))]);
    return { id, native: true, sb, ins, tok: evs.filter((r) => kindOf(r) === 'token').length, internal: evs.filter((r) => kindOf(r) === 'internal').length };
  }
  async function conNative(ids, say) {     /* every ID at once, six at a time */
    const base = conBase(); if (!base || !Object.keys(conAuth(base)).length) return false; const org = conOrg(); CON.native = CON.native || {}; let i = 0, done = 0, fail = ''; const t0 = Date.now();
    const worker = async () => { while (i < ids.length && !fail) { const id = ids[i++]; try { CON.native[id] = await conNativeOne(base, org, id); } catch (e) { if (e.auth) { fail = 'auth'; return; } CON.native[id] = { id, native: true, sb: [], ins: [], tok: 0, internal: 0, err: e.message }; } done++; if (done % 10 === 0 || done === ids.length) say(`  ${done} / ${ids.length} request IDs read…`); } };
    await Promise.all(Array.from({ length: Math.min(6, ids.length) }, worker));
    if (fail) { say('The console session has expired (the API answered 401 / 403) – reload the console page, sign in and press the button again.'); return 'auth'; }
    const hit = ids.filter((id) => CON.native[id].sb.length || CON.native[id].ins.length).length; say(`Read ${ids.length} request ID(s) in ${((Date.now() - t0) / 1000).toFixed(1)} s – ${hit} with log data.`); return true;
  }
  /* ---- the document model ---- */
  const conKind = (r) => { const p = String(r.path || ''); const t = String(r.type || '');
    if (/oauth|\/token|jwt|authenticate|\/auth(\/|$|\?)|\/login/i.test(p)) return 'token';
    if (/1silverbullet|9platforms/i.test(p) || /^\/?(insurance|wealth|utility|platform)\//i.test(p) || /consumer|inbound|incoming|gateway|distributor|1sb/i.test(t)) return 'sb';
    if (/^https?:/i.test(p) || /manufacturer|insurer|outbound|outgoing|external|vendor|third/i.test(t)) return 'ins';
    return r.resp && typeof r.resp === 'object' && ('reqId' in r.resp || 'errors' in r.resp) ? 'sb' : 'ins'; };
  const conDate = (v) => { if (v == null || v === '') return null; let d = null; if (typeof v === 'number' || /^\d{10,13}$/.test(String(v))) { const n = +v; d = new Date(n < 1e11 ? n * 1000 : n); } else { const t = String(v).trim(); d = new Date(/^\d{4}-\d{2}-\d{2}[T ]\d{2}:\d{2}/.test(t) && !/(Z|[+-]\d{2}:?\d{2})$/i.test(t) ? t.replace(' ', 'T').replace(/(\.\d{3})\d+$/, '$1') + 'Z' : t); } return isNaN(d) ? null : d; };   /* the console logs UTC without a zone mark */
  const conIST = (v, timeOnly) => { const d = conDate(v); if (!d) return String(v || ''); try { const f = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Kolkata', weekday: 'short', year: 'numeric', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }).formatToParts(d).reduce((a, x) => (a[x.type] = x.value, a), {}); const ms = String(d.getMilliseconds()).padStart(3, '0'); return timeOnly ? `${f.hour}:${f.minute}:${f.second}.${ms}` : `${f.weekday} ${f.month} ${f.day} ${f.year} ${f.hour}:${f.minute}:${f.second}.${ms} IST`; } catch (e) { return d.toISOString(); } };
  const CON_SECKEY = /authori[sz]ation|password|passwd|secret|(^|_|-)token$|access_?token|refresh_?token|api[-_]?key|client_?secret|cookie/i;
  function conClean(v, full, key) {     /* secrets out, encrypted blobs to a length marker */
    if (v == null) return v; if (typeof v === 'string') { if (key && CON_SECKEY.test(key) && v) return '<redacted>'; const s = v.replace(/(Bearer\s+)[A-Za-z0-9._-]{20,}/g, '$1<redacted>'); if (!full && ((key && /encrypt|cipher/i.test(key) && s.length > 120) || (s.length > 1500 && !/\s/.test(s.slice(0, 1500))))) return `[encrypted string – ${s.length} characters, left out]`; return s; }
    if (typeof v !== 'object') return v; if (Array.isArray(v)) return v.map((x) => conClean(x, full, key)); const o = {}; Object.keys(v).forEach((k) => { o[k] = conClean(v[k], full, k); }); return o;
  }
  const conPretty = (v, full) => { if (v === undefined) return ''; if (v === null) return 'null'; if (typeof v === 'string') { const j = conJ(v); if (j !== undefined) return JSON.stringify(conClean(j, full), null, 2); return String(conClean(v, full)); } try { return JSON.stringify(conClean(v, full), null, 2); } catch (e) { return String(v); } };
  function conDeep(v, re, test, d) { d = d || 0; if (d > 10 || v == null || typeof v !== 'object') return undefined; if (Array.isArray(v)) { for (const x of v) { const r = conDeep(x, re, test, d + 1); if (r !== undefined) return r; } return undefined; }
    for (const k of Object.keys(v)) { if (re.test(k) && v[k] != null && typeof v[k] !== 'object' && String(v[k]) !== '' && (!test || test(v[k]))) return v[k]; } for (const k of Object.keys(v)) { let x = v[k]; if (typeof x === 'string' && x.length > 30) { const j = conJ(x); if (j) x = j; } const r = conDeep(x, re, test, d + 1); if (r !== undefined) return r; } return undefined; }
  function conSbVerdict(r) { if (!r) return 'Not found in the console'; const j = r.resp && typeof r.resp === 'object' ? r.resp : null; const st = +r.status || 0; if (!j) return st ? 'HTTP ' + st : 'Response logged (not JSON)';
    let e = j.errors || j.error || (j.data && (j.data.errors || j.data.error)); if (e && !Array.isArray(e)) e = [e]; e = (e || []).filter((x) => x != null && x !== '' && !(typeof x === 'object' && !Object.keys(x).length));
    if (e.length) { const m = e.map((x) => typeof x === 'string' ? x : [x.field || x.path || x.errorCode || x.code || '', x.message || x.errorMessage || x.description || x.msg || ''].filter(Boolean).join(': ') || JSON.stringify(x)).join('; ').slice(0, 220); return (st >= 400 ? 'HTTP ' + st + ' – ' : '') + 'Error: ' + m; }
    return st >= 400 ? 'HTTP ' + st : 'Accepted, no errors'; }
  function conInsVerdict(r) { if (!r) return 'No insurer call logged'; const j = r.resp && typeof r.resp === 'object' ? r.resp : conJ(r.resp); const st = +r.status || 0; if (!j) return st ? 'HTTP ' + st : (r.resp ? 'Response logged' : 'No response logged');
    const code = conDeep(j, /^(response|error|status|result|return)?_?(code|cd)$|^status$/i); const msg = conDeep(j, /^(response|error|status|result|return)?_?(message|msg|description|desc|remarks?)$/i, (x) => typeof x === 'string');
    const t = [code, msg].filter((x) => x !== undefined && x !== '').join(' ').slice(0, 160); return t || (st ? 'HTTP ' + st : 'Response received'); }
  const conPremium = (r) => { if (!r) return ''; const j = r.resp && typeof r.resp === 'object' ? r.resp : conJ(r.resp); if (!j) return ''; const num = (x) => /^\d[\d,]*(\.\d+)?$/.test(String(x)) && +String(x).replace(/,/g, '') > 0;
    for (const re of [/premium.*(incl|with|inc).*(tax|gst)|(tax|gst).*(incl|inclusive).*premium|total_?premium(_?(amount|payable))?$|premium_?payable|final_?premium|gross_?premium/i, /premium/i]) { const v = conDeep(j, re, num); if (v !== undefined) return String(v); } return ''; };
  function conFlat(v, pre, out) { out = out || {}; pre = pre || ''; if (v == null || typeof v !== 'object') { out[pre] = JSON.stringify(v); return out; } if (Array.isArray(v) && !v.length) { out[pre] = '[]'; return out; } Object.keys(v).forEach((k) => conFlat(v[k], pre ? pre + '.' + k : k, out)); return out; }
  function conModel(ids, full, scope) {
    scope = scope || 'both';
    const items = ids.map((id) => { const nat = (CON.native || {})[id]; if (nat) { const main = nat.sb.find((r) => r.req !== undefined) || nat.sb[0]; const any = nat.sb.concat(nat.ins);
        return { id, sb: nat.sb, ins: nat.ins, tok: nat.tok, internal: nat.internal, main, dom: [], rawCalls: [], ts: main ? main.ts : (nat.ins[0] || {}).ts, consumer: (any.find((r) => r.consumer) || {}).consumer || '', manu: (nat.ins.find((r) => r.manu) || any.find((r) => r.manu) || {}).manu || (main && main.req && conDeep(main.req, /^insuranceCompanyCode$/i)) || '' }; }
      const { recs, calls } = conRecords(id); const sorted = recs.slice().sort((a, b) => ((conDate(a.ts) || 0) - (conDate(b.ts) || 0))); const k = sorted.map((r) => Object.assign(r, { kind: conKind(r) }));
      const sb = k.filter((r) => r.kind === 'sb'), ins = k.filter((r) => r.kind === 'ins'), tok = k.filter((r) => r.kind === 'token'); const main = sb.find((r) => r.req !== undefined) || sb[0];
      const dom = CON.dom.filter((d) => d.id === id); const rawCalls = !k.length ? calls.filter((c) => conJ(c.resBody) !== undefined).slice(-4) : [];
      return { id, sb, ins, tok: tok.length, main, dom, rawCalls, ts: main ? main.ts : (ins[0] || {}).ts, consumer: (k.find((r) => r.consumer) || {}).consumer || (main && main.req && conDeep(main.req, /^distributorID$|^consumer_?id$/i)) || '', manu: (k.find((r) => r.manu) || {}).manu || (main && main.req && conDeep(main.req, /^insuranceCompanyCode$|^manufacturer_?(id|code)$/i)) || '' }; });
    /* what differs in the 1SB request: against the value most of the requests use */
    const diffRec = (it) => (scope === 'ins' ? it.ins.find((r) => r.req && typeof r.req === 'object') : it.main); const flats = items.map((it) => { const r = diffRec(it); return r && r.req && typeof r.req === 'object' ? conFlat(r.req) : null; }); const paths = new Set(); flats.forEach((f) => f && Object.keys(f).forEach((p) => paths.add(p))); const base = {}; const differing = [];
    paths.forEach((p) => { if (/(^|\.)(reqId|req_id|journey_?id|requestId|timestamp)$/i.test(p) || /encrypt|cipher|checksum|signature|nonce/i.test(p)) return; const vals = flats.filter(Boolean).map((f) => (p in f ? f[p] : '(not sent)')); const cnt = {}; vals.forEach((v) => (cnt[v] = (cnt[v] || 0) + 1)); const top = Object.keys(cnt).sort((a, b) => cnt[b] - cnt[a])[0]; base[p] = top; if (Object.keys(cnt).length > 1) differing.push(p); });
    const leaf = (p) => p.split('.').filter((s) => !/^\d+$/.test(s)).pop(); const show = (v) => { try { const x = JSON.parse(v); return typeof x === 'string' ? (/^[\w.\-/: ]+$/.test(x) && x !== '' ? x : JSON.stringify(x)) : String(x); } catch (e) { return v; } };
    items.forEach((it, i) => { const f = flats[i]; if (!f) { it.diff = diffRec(it) ? '–' : ''; return; } const d = differing.filter((p) => (p in f ? f[p] : '(not sent)') !== base[p]); const names = [...new Set(d.map((p) => `${leaf(p)} ${p in f ? show(f[p]) : '(not sent)'}`))]; it.diff = flats.filter(Boolean).length < 2 ? '–' : names.length ? names.slice(0, 4).join(', ') + (names.length > 4 ? ` … (+${names.length - 4})` : '') : 'no difference'; });
    const baseNote = flats.filter(Boolean).length > 1 && differing.length ? 'Unless noted, each request uses ' + [...new Set(differing.map((p) => `${leaf(p)} ${show(base[p])}`))].slice(0, 8).join(', ') + '.' : '';
    const first = (items.find((it) => it.main) || {}).main; const prod = first && first.req ? (() => { let v; conWalk(first.req, (o) => { if (v !== undefined) return; const k = Object.keys(o).find((x) => /^product_?code$/i.test(x)); if (k) v = Array.isArray(o[k]) ? o[k].filter((x) => typeof x !== 'object').join(', ') : typeof o[k] !== 'object' ? o[k] : undefined; }); return v || ''; })() : ''; const manu = (items.find((it) => it.manu) || {}).manu || ''; const consumer = (items.find((it) => it.consumer) || {}).consumer || '';
    let api = first ? first.path : ''; let op = ''; try { const segs = new URL(api, 'https://x').pathname.split('/').filter(Boolean).filter((s) => !/^v\d+$/i.test(s) && !/^insurance$/i.test(s)); op = segs.slice(-2).map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join(' '); } catch (e) {}
    const okN = items.filter((it) => /^Accepted/.test(conSbVerdict(it.main))).length; const env = (location.host.match(/^(demo|dev|test|uat|prod)/i) || [''])[0] || location.host;
    const insName = ((items.find((it) => it.ins.length) || { ins: [{}] }).ins[0].apiName || '').replace(/\s+/g, ' ').trim();
    return { items, baseNote, full, scope, insName, title: `${[manu, prod, op].filter(Boolean).join(' ') || 'API logs'} – ${scope === 'ins' ? 'Insurer ' : scope === 'sb' ? '1SB ' : ''}Request & Response by Request ID`, env, api, method: first ? first.method || 'POST' : '', prod, manu, consumer, okN, at: new Date() };
  }
  /* ---- one description of the document, written out as Word (.docx) and as HTML ---- */
  function conBlocksOf(M) {
    const B = []; const H1 = (t) => B.push({ k: 'h1', t }), H2 = (t) => B.push({ k: 'h2', t }), H3 = (t) => B.push({ k: 'h3', t }), P = (t) => B.push({ k: 'p', t }), BOLD = (t) => B.push({ k: 'b', t }), CODE = (t) => B.push({ k: 'code', t });
    const wantSb = M.scope !== 'ins', wantIns = M.scope !== 'sb'; const n = M.items.length; const insOf = (it) => it.ins.find((r) => r.resp !== undefined) || it.ins[0]; const prem = (it) => conPremium(it.ins.slice().reverse().find((r) => conPremium(r)) || null) || (wantSb ? conPremium(it.sb.slice().reverse().find((r) => conPremium(r)) || null) : '');
    const insCell = (it) => it.ins.length ? conInsVerdict(insOf(it)) : it.main ? (/^Accepted/.test(conSbVerdict(it.main)) ? 'No insurer call logged' : 'No insurer call – 1SB: ' + conSbVerdict(it.main).replace(/^Error: /, '')) : 'Not found in the console';
    const bad = M.items.filter((it) => !/^Accepted/.test(conSbVerdict(it.main))); const insN = M.items.filter((it) => it.ins.length).length;
    H1(M.title); P(`${M.at.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })} · ${M.env} console API Logs · 1SB Journey Runner v${SB_VERSION}`);
    if (wantSb) P(`${M.okN} of the ${n} request${n === 1 ? '' : 's'} ${M.okN === 1 ? 'was' : 'were'} accepted by 1SB with no errors` + (bad.length ? '; ' + bad.slice(0, 4).map((it) => `${it.id.slice(0, 8)}: ${conSbVerdict(it.main)}`).join('; ') + (bad.length > 4 ? ` … (${bad.length} in all)` : '') + '.' : '.'));
    if (wantIns) P(`${insN} of the ${n} request${n === 1 ? '' : 's'} ${insN === 1 ? 'has' : 'have'} an insurer call logged` + (M.insName ? ` (${M.insName})` : '') + (insN < n ? `; ${n - insN} ${n - insN === 1 ? 'has' : 'have'} none.` : '.'));
    if (M.api) P(`1SB call: ${M.method || 'POST'} ${M.api}${M.consumer ? ' · consumer ' + M.consumer : ''}${M.prod ? ' · product ' + M.prod : ''}${M.manu ? ' (' + M.manu + ')' : ''}. Taken from the ${M.env} console API Logs on ${M.at.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}.`);
    H2('Summary');
    if (M.scope === 'ins') B.push({ k: 'table', head: ['Request ID', 'Timestamp (IST)', 'What differs in the insurer request', 'Insurer response', 'Premium'], widths: [2700, 1450, 2750, 2000, 1078], rows: M.items.map((it) => [it.id, conIST((insOf(it) || {}).ts || it.ts, true), it.diff || '', insCell(it), prem(it)]) });
    else if (M.scope === 'sb') B.push({ k: 'table', head: ['Request ID', 'Timestamp (IST)', 'What differs in the request', '1SB response'], widths: [2900, 1500, 3000, 2578], rows: M.items.map((it) => [it.id, conIST(it.ts, true), it.diff || '', conSbVerdict(it.main)]) });
    else B.push({ k: 'table', head: ['Request ID', 'Timestamp (IST)', 'What differs in the request', '1SB response', 'Insurer response', 'Premium'], widths: [2500, 1450, 2150, 1500, 1400, 978], rows: M.items.map((it) => [it.id, conIST(it.ts, true), it.diff || '', conSbVerdict(it.main), it.ins.length ? conInsVerdict(insOf(it)) : (it.main ? 'No insurer call logged' : ''), prem(it)]) });
    if (M.baseNote) P(M.baseNote);
    const sec = (r, label) => { H3(`${label}${r.path ? ' – ' + (r.method ? r.method + ' ' : '') + r.path : ''}`); const meta = [r.ts ? 'Logged ' + conIST(r.ts) : '', r.apiName ? 'API ' + r.apiName : '', r.status ? 'status ' + r.status : '', r.latency != null && r.latency !== '' ? r.latency + ' ms' : ''].filter(Boolean).join(' · '); if (meta) P(meta + '.');
      BOLD('Request'); CODE(r.req === undefined ? '(not logged)' : conPretty(r.req, M.full)); BOLD('Response'); CODE(r.resp === undefined ? '(not logged)' : conPretty(r.resp, M.full)); };
    M.items.forEach((it, i) => { H2(`${i + 1}. ${it.id}`);
      const head = [it.ts ? 'Logged ' + conIST(it.ts) : '', it.consumer ? 'consumer ' + it.consumer : '', it.manu ? 'manufacturer ' + it.manu : ''].filter(Boolean).join(' · '); if (head) P(head + '.');
      if (!it.sb.length && !it.ins.length) { if (it.rawCalls.length || it.dom.length) { P('The console answered for this request ID, but not in a layout the script recognises – the data is shown as the console returned it.'); it.rawCalls.forEach((c) => { BOLD(`Console call – ${c.method} ${String(c.url).replace(/[?#].*/, '')}`); CODE(conPretty(c.resBody, M.full).slice(0, 60000)); }); it.dom.forEach((d) => { BOLD(d.label || 'Shown on the console page'); CODE(conPretty(d.text, M.full)); }); } else P('Nothing is logged in the console API Logs under this request ID.'); return; }
      if (wantSb) { it.sb.forEach((r, k) => sec(r, it.sb.length > 1 ? `1SB call ${k + 1}` : '1SB request & response')); if (!it.sb.length) P('No 1SB call was found for this request ID.'); }
      if (wantIns) { it.ins.forEach((r, k) => sec(r, it.ins.length > 1 ? `Insurer call ${k + 1}` : 'Insurer request & response'));
        if (!it.ins.length) P('No insurer (manufacturer) call is logged against this request ID' + (!it.main || /^Accepted/.test(conSbVerdict(it.main)) ? '.' : ` – the request did not pass 1SB validation (${conSbVerdict(it.main).replace(/^Error: /, '')}), so it never reached the insurer.`));
        if (it.tok) P(`${it.tok} insurer token call${it.tok === 1 ? '' : 's'} (oauth / jwt) logged under this request ${it.tok === 1 ? 'is' : 'are'} left out – ${it.tok === 1 ? 'it carries' : 'they carry'} credentials.`); }
      if (!it.native && !it.sb.some((r) => r.req !== undefined || r.resp !== undefined) && !it.ins.some((r) => r.req !== undefined || r.resp !== undefined) && it.dom.length) it.dom.forEach((d) => { BOLD(d.label || 'Shown on the console page'); CODE(conPretty(d.text, M.full)); }); });
    H2('Left out of this document'); P(M.full ? 'Encrypted payload strings are included in full.' : 'Encrypted payload strings (encryptedRequest / encryptedResponse and similar) are replaced by a marker giving their length.'); P('Insurer token calls (oauth / jwt), the internal credential lookup, request / response headers, passwords, tokens and API keys are never included.');
    if (M.scope === 'ins') P('The 1SB request and response are left out on request (insurer only).'); if (M.scope === 'sb') P('The insurer request and response are left out on request (1SB only).');
    return B;
  }
  const conXml = (s) => String(s == null ? '' : s).replace(/[^\x09\x0A\x0D\x20-퟿-�]/g, '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\x22/g, '&quot;');
  function conDocx(M) {
    const run = (t, rpr) => `<w:r>${rpr ? '<w:rPr>' + rpr + '</w:rPr>' : ''}<w:t xml:space="preserve">${conXml(t)}</w:t></w:r>`; const para = (inner, style) => `<w:p><w:pPr>${style ? `<w:pStyle w:val="${style}"/>` : ''}</w:pPr>${inner}</w:p>`;
    const code = (t) => `<w:p><w:pPr><w:pStyle w:val="Code"/></w:pPr><w:r>${String(t).split(/\r?\n/).map((l) => `<w:t xml:space="preserve">${conXml(l)}</w:t>`).join('<w:br/>')}</w:r></w:p>`;
    const cell = (t, w, head) => `<w:tc><w:tcPr><w:tcW w:w="${w}" w:type="dxa"/>${head ? '<w:shd w:val="clear" w:color="auto" w:fill="F2F2F2"/>' : ''}</w:tcPr>${para(run(t, head ? '<w:b/><w:bCs/>' : ''))}</w:tc>`;
    const table = (b) => `<w:tbl><w:tblPr><w:tblStyle w:val="TableGrid"/><w:tblW w:w="0" w:type="auto"/><w:tblBorders>${['top', 'left', 'bottom', 'right', 'insideH', 'insideV'].map((s) => `<w:${s} w:val="single" w:sz="4" w:space="0" w:color="BFBFBF"/>`).join('')}</w:tblBorders><w:tblLayout w:type="fixed"/></w:tblPr><w:tblGrid>${b.widths.map((w) => `<w:gridCol w:w="${w}"/>`).join('')}</w:tblGrid><w:tr><w:trPr><w:tblHeader/></w:trPr>${b.head.map((h, i) => cell(h, b.widths[i], true)).join('')}</w:tr>${b.rows.map((r) => `<w:tr>${r.map((c, i) => cell(c, b.widths[i])).join('')}</w:tr>`).join('')}</w:tbl>`;
    const body = conBlocksOf(M).map((b) => b.k === 'h1' ? para(run(b.t), 'Heading1') : b.k === 'h2' ? para(run(b.t), 'Heading2') : b.k === 'h3' ? para(run(b.t), 'Heading3') : b.k === 'b' ? para(run(b.t, '<w:b/><w:bCs/>')) : b.k === 'code' ? code(b.t) : b.k === 'table' ? table(b) + para('') : para(run(b.t))).join('');
    const NS = 'xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"'; const X = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>';
    const document = `${X}<w:document ${NS}><w:body>${body}<w:sectPr><w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="1134" w:right="964" w:bottom="1134" w:left="964" w:header="708" w:footer="708" w:gutter="0"/></w:sectPr></w:body></w:document>`;
    const st = (id, name, ppr, rpr, extra) => `<w:style w:type="paragraph" w:styleId="${id}"${id === 'Normal' ? ' w:default="1"' : ''}><w:name w:val="${name}"/>${id === 'Normal' ? '' : '<w:basedOn w:val="Normal"/>'}${extra || ''}<w:pPr>${ppr}</w:pPr><w:rPr>${rpr}</w:rPr></w:style>`;
    const styles = `${X}<w:styles ${NS}><w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:cs="Calibri"/><w:sz w:val="21"/><w:szCs w:val="21"/></w:rPr></w:rPrDefault><w:pPrDefault><w:pPr><w:spacing w:after="120" w:line="264" w:lineRule="auto"/></w:pPr></w:pPrDefault></w:docDefaults>`
      + st('Normal', 'Normal', '', '') + st('Heading1', 'heading 1', '<w:keepNext/><w:spacing w:before="240" w:after="120"/><w:outlineLvl w:val="0"/>', '<w:b/><w:sz w:val="36"/><w:szCs w:val="36"/>', '<w:next w:val="Normal"/>') + st('Heading2', 'heading 2', '<w:keepNext/><w:spacing w:before="320" w:after="100"/><w:outlineLvl w:val="1"/>', '<w:b/><w:sz w:val="27"/><w:szCs w:val="27"/>', '<w:next w:val="Normal"/>') + st('Heading3', 'heading 3', '<w:keepNext/><w:spacing w:before="220" w:after="80"/><w:outlineLvl w:val="2"/>', '<w:b/><w:color w:val="1F3A8A"/><w:sz w:val="23"/><w:szCs w:val="23"/>', '<w:next w:val="Normal"/>')
      + st('Code', 'Code', '<w:shd w:val="clear" w:color="auto" w:fill="F6F6F6"/><w:spacing w:after="160" w:line="240" w:lineRule="auto"/>', '<w:rFonts w:ascii="Consolas" w:hAnsi="Consolas" w:cs="Consolas"/><w:sz w:val="17"/><w:szCs w:val="17"/>') + `<w:style w:type="table" w:default="1" w:styleId="TableNormal"><w:name w:val="Normal Table"/><w:tblPr><w:tblCellMar><w:top w:w="40" w:type="dxa"/><w:left w:w="90" w:type="dxa"/><w:bottom w:w="40" w:type="dxa"/><w:right w:w="90" w:type="dxa"/></w:tblCellMar></w:tblPr></w:style><w:style w:type="table" w:styleId="TableGrid"><w:name w:val="Table Grid"/><w:basedOn w:val="TableNormal"/></w:style></w:styles>`;
    const files = { '[Content_Types].xml': `${X}<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/><Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/></Types>`,
      '_rels/.rels': `${X}<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>`,
      'word/_rels/document.xml.rels': `${X}<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>`, 'word/document.xml': document, 'word/styles.xml': styles };
    return conZip(files);
  }
  function conZip(files) {              /* a plain (stored) zip – all a .docx needs */
    const T = conZip.T || (conZip.T = (() => { const t = new Uint32Array(256); for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })());
    const crc = (u8) => { let c = 0xFFFFFFFF; for (let i = 0; i < u8.length; i++) c = T[(c ^ u8[i]) & 0xFF] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; }; const enc = new TextEncoder(); const parts = []; const cen = []; let off = 0;
    const u16 = (n) => [n & 255, (n >>> 8) & 255], u32 = (n) => [n & 255, (n >>> 8) & 255, (n >>> 16) & 255, (n >>> 24) & 255];
    Object.keys(files).forEach((name) => { const nm = enc.encode(name); const data = enc.encode(files[name]); const c = crc(data); const lh = new Uint8Array([0x50, 0x4b, 3, 4, 20, 0, 0, 8, 0, 0, 0, 0, 0x21, 0].concat(u32(c), u32(data.length), u32(data.length), u16(nm.length), [0, 0]));
      parts.push(lh, nm, data); cen.push(new Uint8Array([0x50, 0x4b, 1, 2, 20, 0, 20, 0, 0, 8, 0, 0, 0, 0, 0x21, 0].concat(u32(c), u32(data.length), u32(data.length), u16(nm.length), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], u32(off))), nm); off += lh.length + nm.length + data.length; });
    const cenLen = cen.reduce((a, x) => a + x.length, 0); const n = Object.keys(files).length; const end = new Uint8Array([0x50, 0x4b, 5, 6, 0, 0, 0, 0].concat(u16(n), u16(n), u32(cenLen), u32(off), [0, 0]));
    return new Blob(parts.concat(cen, [end]), { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
  }
  function conHtml(M) {
    const body = conBlocksOf(M).map((b) => b.k === 'h1' ? `<h1>${escH(b.t)}</h1>` : b.k === 'h2' ? `<h2>${escH(b.t)}</h2>` : b.k === 'h3' ? `<h3>${escH(b.t)}</h3>` : b.k === 'b' ? `<p><b>${escH(b.t)}</b></p>` : b.k === 'code' ? `<pre>${escH(b.t)}</pre>` : b.k === 'table' ? `<table><thead><tr>${b.head.map((h) => `<th>${escH(h)}</th>`).join('')}</tr></thead><tbody>${b.rows.map((r) => `<tr>${r.map((c) => `<td>${escH(c)}</td>`).join('')}</tr>`).join('')}</tbody></table>` : `<p>${escH(b.t)}</p>`).join('\n');
    return `<!doctype html><html><head><meta charset="utf-8"><title>${escH(M.title)}</title><style>body{font:14px/1.5 Calibri,system-ui,Arial;margin:32px auto;max-width:1000px;padding:0 20px;color:#111}h1{font-size:24px}h2{font-size:18px;margin-top:30px;border-bottom:1px solid #ddd;padding-bottom:4px}h3{font-size:15px;color:#1f3a8a;margin-top:20px}table{border-collapse:collapse;width:100%}th,td{border:1px solid #bfbfbf;padding:5px 8px;text-align:left;vertical-align:top;font-size:13px;word-break:break-word}th{background:#f2f2f2}pre{background:#f6f6f6;padding:10px 12px;font:12px/1.4 Consolas,Menlo,monospace;white-space:pre-wrap;word-break:break-word;border-radius:4px}</style></head><body>${body}</body></html>`;
  }
  /* ---- the run ---- */
  async function conRun(ids, opt, say) {
    if (CON.busy) return; CON.busy = true; opt = opt || {};
    try {
      let native = false; if (!opt.buildOnly && onConsole()) { try { native = await conNative(ids, say); } catch (e) { say('  direct read failed (' + e.message + ') – asking the console page instead'); native = false; } if (native === 'auth') return; }
      if (!native && !opt.buildOnly) CON.native = {};
      if (!opt.buildOnly && !native) for (const id of ids) { say(`${id} …`); let recs = []; let driven = false;
        if ((S.get('conTpl', []) || []).length) { const n = await conReplay(id, say); if (n) { const dn = await conDetails(id); if (dn) await conDetails(id); } recs = conRecords(id).recs; if (recs.length) say(`  ${recs.length} log record(s) fetched directly`); else if (conRows(id).length) say(`  ${conRows(id).length} log entr${conRows(id).length === 1 ? 'y' : 'ies'} listed – opening them for the payloads`); }
        if (!recs.length) { say('  asking the console page (search box)…'); const ok = await conDrive(id, say); driven = !!ok; if (ok) { const l = conLearn(id); if (l) say(`  learned ${l} console call(s) that take a request ID – the next IDs are fetched directly`); recs = conRecords(id).recs; } }
        const hasBody = (r) => r.req !== undefined || r.resp !== undefined; const sbRec = recs.find((r) => conKind(r) === 'sb' && r.resp !== undefined); const rejected = sbRec && !/^Accepted/.test(conSbVerdict(sbRec));
        const needOpen = !recs.length || !recs.some(hasBody) || (!recs.some((r) => conKind(r) === 'ins') && !rejected);   /* an accepted request without an insurer call in the answer: the page may hold it under the entry */
        if (needOpen && !opt.noClick) { if (!driven) { say('  looking on the console page for the rest…'); driven = await conDrive(id, say); if (driven) conLearn(id); } }
        if (needOpen && !opt.noClick && driven) { const before = conRecords(id).recs.length; await conOpenRows(id, say); const d = conLearnDetail(id); if (d) say(`  learned ${d} "open entry" call(s)`); await conDetails(id); const now = conRecords(id).recs.length; if (now > before) say(`  ${now} log record(s) now`); }
        const fin = conRecords(id).recs.map((r) => conKind(r)); say(fin.length ? `  → 1SB ${fin.filter((k) => k === 'sb').length} · insurer ${fin.filter((k) => k === 'ins').length} · token ${fin.filter((k) => k === 'token').length} (left out)` : '  → nothing found for this ID'); }
      else if (opt.buildOnly) { CON.native = {}; ids.forEach((id) => { conLearn(id); conLearnDetail(id); }); }
      const M = conModel(ids, !!opt.full, opt.scope); const stem = M.title.replace(/[^\w &–-]+/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 110) || 'API logs by request ID';
      saveBlob(conDocx(M), stem + '.docx'); if (opt.html !== false) setTimeout(() => saveBlob(new Blob([conHtml(M)], { type: 'text/html' }), stem + '.html'), 700);
      const found = M.items.filter((it) => it.sb.length || it.ins.length).length; say(`Document downloaded: "${stem}.docx" (+ .html) – ${found} of ${ids.length} request ID(s) with log data.`);
      if (found < ids.length && native) say(`${ids.length - found} request ID(s) have nothing logged under them in this console (check the environment – demo / dev / test – and the ID).`);
      if (found < ids.length && !native) say('For the IDs without data: search one of them in API Logs by hand, open its entries (1SB call and insurer call) so the page loads them, then press "Build from what the page loaded" – the script learns the calls from that and fetches the rest itself next time.');
      return M;
    } catch (e) { say('Stopped: ' + e.message); console.log('[SB4] console', e); } finally { CON.busy = false; }
  }
  function showConsoleDialog(prefill, autostart) {
    const old = document.getElementById('sb-con'); if (old) old.remove();
    const here = onConsole(); const d = document.createElement('div'); d.id = 'sb-con'; d.style.cssText = 'position:fixed;right:16px;bottom:60px;z-index:2147482500;width:440px;max-width:94vw;background:#fff;color:#0f172a;border-radius:12px;box-shadow:0 12px 40px rgba(0,0,0,.35);padding:14px 16px;font:13px system-ui,Segoe UI,Arial';
    const B = 'border:0;border-radius:7px;padding:8px 12px;color:#fff;cursor:pointer;font-size:13px';
    d.innerHTML = `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px"><b style="font-size:15px">📄 Request IDs → document</b><a href="#" id="sb-con-x" style="color:#64748b;text-decoration:none;font-size:18px">✕</a></div>
      <div style="color:#475569;margin-bottom:6px">Paste the request IDs (one per line). The 1SB request / response and the insurer request / response from the console API Logs go into one Word document with a summary table.</div>
      <textarea id="sb-con-ids" rows="6" placeholder="27fe5c0e-fabb-43bb-bd6f-5fbc66c5e9aa&#10;63059979-22c0-4a49-a26b-5b8a22104603" style="width:100%;box-sizing:border-box;border:1px solid #cbd5e1;border-radius:7px;padding:7px;font:12px Consolas,Menlo,monospace">${escH(prefill || S.get('conLast', '') || '')}</textarea>
      ${here ? '' : `<label style="display:block;margin-top:8px">Console <input id="sb-con-url" value="${escH(S.get('conUrl', 'https://demo.console.1silverbullet.tech/'))}" style="width:100%;box-sizing:border-box;border:1px solid #cbd5e1;border-radius:7px;padding:6px;margin-top:3px"></label>`}
      <label style="display:block;margin-top:8px">In the document <select id="sb-con-scope" style="border:1px solid #cbd5e1;border-radius:7px;padding:5px;margin-left:4px"><option value="both">1SB + insurer request &amp; response</option><option value="ins">insurer request &amp; response only</option><option value="sb">1SB request &amp; response only</option></select></label>
      <label style="display:block;margin:8px 0 2px"><input type="checkbox" id="sb-con-full"> include encrypted payload strings in full</label>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px"><button id="sb-con-go" style="${B};background:#1f3a8a">${here ? 'Pull & build document' : 'Open the console & pull'}</button>${here ? `<button id="sb-con-build" style="${B};background:#64748b" title="You searched the IDs and opened their entries on this page yourself – build the document from what the page loaded">Build from what the page loaded</button><button id="sb-con-forget" style="${B};background:#94a3b8" title="Forget the learned console calls (if the console changed)">Reset</button>` : ''}</div>
      <pre id="sb-con-log" style="margin:10px 0 0;max-height:190px;overflow:auto;background:#f8fafc;border:1px solid #e2e8f0;border-radius:7px;padding:8px;font:11.5px/1.45 Consolas,Menlo,monospace;white-space:pre-wrap;display:none"></pre>`;
    document.body.appendChild(d); const logEl = d.querySelector('#sb-con-log'); const say = (m) => { logEl.style.display = 'block'; logEl.textContent += m + '\n'; logEl.scrollTop = logEl.scrollHeight; console.log('[SB4] console', m); };
    d.querySelector('#sb-con-x').onclick = (e) => { e.preventDefault(); d.remove(); };
    const read = () => { const ids = conIds(d.querySelector('#sb-con-ids').value); S.set('conLast', ids.join('\n')); return ids; };
    const go = async (opt) => { const ids = read(); if (!ids.length) { say('Paste at least one request ID.'); return; } const full = d.querySelector('#sb-con-full').checked; const scope = d.querySelector('#sb-con-scope').value; S.set('conScope', scope);
      if (!here) { const url = (d.querySelector('#sb-con-url').value || '').trim(); if (!/^https?:\/\//i.test(url)) { say('Enter the console address.'); return; } S.set('conUrl', url); S.set('conJob', { ids, full, scope, at: Date.now() }); say('Opening the console – the document is built there (sign in first if it asks).'); if (typeof GM_openInTab === 'function') GM_openInTab(url, { active: true, insert: true }); else window.open(url, '_blank'); return; }
      logEl.textContent = ''; d.querySelectorAll('button').forEach((b) => (b.disabled = true)); await conRun(ids, Object.assign({ full, scope }, opt || {}), say); d.querySelectorAll('button').forEach((b) => (b.disabled = false)); };
    d.querySelector('#sb-con-scope').value = S.get('conScope', 'both');
    d.querySelector('#sb-con-go').onclick = () => go();
    if (here) { d.querySelector('#sb-con-build').onclick = () => go({ buildOnly: true }); d.querySelector('#sb-con-forget').onclick = () => { S.set('conTpl', []); S.set('conDetail', []); CON.calls = []; CON.dom = []; say('Learned console calls forgotten – the next run asks the page again.'); }; }
    if (autostart && here) setTimeout(() => go(), 1200);
  }
  function conTick() {                  /* on the console: a launcher button, and a job handed over from a portal tab */
    if (!onConsole() || !document.body) return false;
    if (!document.getElementById('sb-conbtn')) { const b = document.createElement('button'); b.id = 'sb-conbtn'; b.textContent = '📄 Request IDs → document'; b.title = '1SB Journey Runner: pull the 1SB and insurer request / response of request IDs from API Logs into a Word document'; b.style.cssText = 'position:fixed;right:16px;bottom:16px;z-index:2147482400;background:#1f3a8a;color:#fff;border:0;border-radius:999px;padding:9px 14px;font:13px system-ui,Segoe UI,Arial;cursor:pointer;box-shadow:0 4px 14px rgba(0,0,0,.3)'; b.onclick = () => (document.getElementById('sb-con') ? document.getElementById('sb-con').remove() : showConsoleDialog()); document.body.appendChild(b); }
    const job = S.get('conJob', null); if (job && job.ids && Date.now() - job.at < 600000 && !CON.busy && !document.getElementById('sb-con')) { if (Q('input[type=password]').some(vis)) return true;   /* sign-in page: wait */
      if (Date.now() - job.at < 4000) return true; S.set('conJob', null); showConsoleDialog(job.ids.join('\n'), true); const cb = document.getElementById('sb-con-full'); if (cb) cb.checked = !!job.full; const sc = document.getElementById('sb-con-scope'); if (sc && job.scope) sc.value = job.scope; }
    return true;
  }
  /* ---------------- Jira (v5.15): a failed journey → an INSB epic in the team's format, with the screenshot and the failing API call attached ---------------- */
  // Format (from INSB-53607 / INSB-53262): summary "AUSFB_ICICI PRU_ProdID_E38_GIFT Select"; description "Org ID - AUSFB / Insurer - … / ProdID - … / Product Name - …" + the error shown in the response;
  // Priority High, Team "Life Insurance Team", Labels [org, insurer], Distributor, Manufacturer, Line of Business, Assignee + Product Owner per insurer (ICICI Pratik Koku, HDFC Ujwala Pawar, SBI Pushkar Wad, BALIC Anushrita Lee), status Backlog after creation, Planned PI = PI#1, Environment = NA, Development Approach = Agent.
  const JIRA_DEF = { site: 'https://1silverbullet.atlassian.net', project: 'INSB', org: 'AUSFB', mode: 'ask', autoEnvs: 'nonprod', maxPerHour: 5, dedupeHours: 24, autoKinds: 'product', email: '', token: '', screenshot: true, apiFile: true, issueType: 'Bug', boardId: 42, sprint: 'active', envOpt: 'NA' };
  const JCFG = () => Object.assign({}, JIRA_DEF, S.get('jira', {}));
  const JF = { lob: 'customfield_10061', pi: 'customfield_10063', env: 'customfield_10370', manu: 'customfield_10371', dist: 'customfield_10470', distId: 'customfield_10471', manuId: 'customfield_10472', devApproach: 'customfield_10709', team: 'customfield_10001', owner: 'customfield_10056' };
  const J_TEAM = '86ce24c7-832b-4cf3-ab7d-5b4d0291d95f';                                    // "Life Insurance Team"
  const J_EPIC = '10000', J_BUG = '10027', J_PI1 = '10054', J_ENV_NA = '10301', J_AGENT = '10874', J_HIGH = '2';
  const J_ENVS = { NA: '10301', UAT: '10300', Production: '10299', Test: '10698', INSURER_UAT: '11049' };
  const J_RCA = { 'Insurer Issue': '10987', 'API Gateway Issue': '10980', 'AL Frontend Issue': '10978', 'AL Backend Issue': '10979', 'Configuration Issue': '10983', 'Data Missing/Misconfiguration': '10986', '1SB Infrastructure Issue': '10981', 'Distributor Issue': '10988', 'Distributor Infrastructure Issue': '10982', '1SB Database Issue': '10984', 'Distributor Database Issue': '10985', 'Human Error': '10989' };
  JF.sprint = 'customfield_10020'; JF.rca = 'customfield_10809';
  const J_LOB = { Term: '10046', Savings: '10047', Health: '10048', Pension: '10050', Annuity: '10051', Motor: '10049', Embedded: '10368', FD: '10052', PMS: '10053', NA: '10069' };
  const J_DIST = { '1SB': '10599', 'TATA Digital': '10469', NorthernArc: '10479', KVB: '10476', 'L&T': '10500', OneInsure: '10533', ARKA: '10467', AxisSecurity: '10468', PB: '10470', policyGuru: '10471', policyEra: '10472', Wealthright: '10473', Armor: '10474', assestPlus: '10475', InsurancePadosi: '10477', coverSure: '10478', Latin: '10566', HSL: '10632', Geojit: '10731', Onsurity: '10732', PolicyBoss: '10733', PayNearby: '10734', NYVO: '10767', 'Anand Rathi': '11046', 'ICICI Home finance': '11047', AUSFB: '11048' };
  const J_MANU = { MMFSL: '10302', Shriram: '10303', Bajaj: '10304', USFB: '10305', PNBHF: '10306', SIB: '10307', Unity: '10308', LICHF: '10309', SSFB: '10310', KVB: '10311', ICICIHF: '10312', Bandhan: '10313', NorthEastBank: '10314', Ujjivan: '10315', Shivalik: '10316', ABHI: '10317', NBHI: '10318', CARE: '10319', STAR: '10320', HDFCERGO: '10321', BAGIC: '10322', ICICILOMBARD: '10323', TAGIC: '10324', RGIC: '10325', MANIPALCIGNA: '10326', ROYALSUNDARAM: '10327', SBIGENERAL: '10328', CHOLA: '10329', KOTAKGENERAL: '10330', ICICILIFE: '10331', HDFCLIFE: '10332', TATALIFE: '10333', ABSLI: '10334', MAXLIFE: '10335', BALIC: '10336', SBILIFE: '10337', GODIGITGENERAL: '10338', GODIGITLIFE: '10339', AEGON: '10340', ICICILIFEGRP: '10341', HDFCLIFEGRP: '10342', STARGRP: '10343', MAXLIFEGRP: '10344', Other: '10345', 'BHARTI AXA': '11050', 'Kotak Life': '11051' };
  const J_PEOPLE = { 'Pratik Koku': '712020:9f846ffc-92ad-4021-8b6f-71631648d233', 'Ujwala Pawar': '712020:c354e30b-a34e-4438-8b72-6c60eabedbee', 'Anushrita Lee': '609137045c7212007183cd5b', 'Pushkar Wad': '712020:da2a0b35-993b-47e0-9144-5719495a42a9' };
  // manufacturer code (rules master / gateway manufacturerId) → how the team writes it: title in the summary, label, Manufacturer option, assignee + product owner
  const J_INSURER = {
    ICICI: { title: 'ICICI PRU', label: 'ICICI', manu: 'ICICILIFE', owner: 'Pratik Koku' }, HDFC: { title: 'HDFC LIFE', label: 'HDFC', manu: 'HDFCLIFE', owner: 'Ujwala Pawar' }, BALIC: { title: 'BALIC', label: 'BALIC', manu: 'BALIC', owner: 'Anushrita Lee' },
    TATA: { title: 'TATA AIA', label: 'TATAAIA', manu: 'TATALIFE' }, ABSLIFEI: { title: 'ABSLI', label: 'ABSLI', manu: 'ABSLI' }, MAXLIFE: { title: 'MAX LIFE', label: 'MAXLIFE', manu: 'MAXLIFE' }, SBI: { title: 'SBI LIFE', label: 'SBILIFE', manu: 'SBILIFE', owner: 'Pushkar Wad' }, AEGON: { title: 'AEGON', label: 'AEGON', manu: 'AEGON' }, PNB: { title: 'PNB METLIFE', label: 'PNBMETLIFE', manu: 'Other' }, IFLI: { title: 'INDIAFIRST', label: 'INDIAFIRST', manu: 'Other' }, SUDLIFE: { title: 'SUD LIFE', label: 'SUDLIFE', manu: 'Other' }, KOTAK: { title: 'KOTAK LIFE', label: 'KOTAKLIFE', manu: 'Kotak Life' }, BAXA: { title: 'BHARTI AXA', label: 'BAXA', manu: 'BHARTI AXA' },
    TAGIC: { title: 'TATA AIG', label: 'TAGIC', manu: 'TAGIC' }, STAR: { title: 'STAR HEALTH', label: 'STAR', manu: 'STAR' }, NBHI: { title: 'NIVA BUPA', label: 'NBHI', manu: 'NBHI' }, CARE: { title: 'CARE', label: 'CARE', manu: 'CARE' }, ABHI: { title: 'ABHI', label: 'ABHI', manu: 'ABHI' }, HDFCERGO: { title: 'HDFC ERGO', label: 'HDFCERGO', manu: 'HDFCERGO' }, MPLCIGNA: { title: 'MANIPAL CIGNA', label: 'MANIPALCIGNA', manu: 'MANIPALCIGNA' }, IL: { title: 'ICICI LOMBARD', label: 'ICICILOMBARD', manu: 'ICICILOMBARD' }, BAGIC: { title: 'BAJAJ ALLIANZ', label: 'BAGIC', manu: 'BAGIC' }, CHIL: { title: 'CHOLA', label: 'CHOLA', manu: 'CHOLA' }, RGIC: { title: 'RELIANCE', label: 'RGIC', manu: 'RGIC' }, SBIGENERAL: { title: 'SBI GENERAL', label: 'SBIGENERAL', manu: 'SBIGENERAL' }, GODIGIT: { title: 'GO DIGIT', label: 'GODIGIT', manu: 'GODIGITGENERAL' },
  };
  const J_SKIP_AUTO = /sign-?in|otp .*not accepted|stopped at payment|awaiting|approval|no progress|stuck on|insurer kyc opens|session/i;   // auto mode: not insurer / product problems – left to the tester

  function jShortError(err) {              // the error in short form for the summary: the insurer's / gateway's own words, without the wrappers, ids and JSON noise – at most 70 characters
    let t = String((err && (err.api || err.ui || err.msg)) || '');
    const args = [...t.matchAll(/'?args'?\s*[:=]\s*\[([^\]]*)\]/g)].map((m) => m[1].replace(/['"]/g, '').trim()).filter(Boolean); if (args.length) t = args.join(', ');
    t = t.replace(/\(Received bad response[^)]*\)/gi, ' ').replace(/Received (bad|error) response (during|from) [^:]*:\s*/gi, '').replace(/Following are errors? From Platform Service:?\s*/gi, '').replace(/Followings? are errors?:?\s*/gi, '')
      .replace(/\[?\{?'?errorIdentifier'?[^']*'([^']*)'.*$/i, '$1').replace(/SESReqErrorIdAndArgs\([^)]*\)/g, ' ').replace(/errorType\s*[:=]\s*'[^']*'|errorDisplayMessage\s*[:=]\s*'[^']*'/gi, ' ')
      .replace(/request id\s*[:#-]?\s*[A-Za-z0-9-]{8,}/gi, ' ').replace(/JID-[A-Z0-9-]+/g, ' ').replace(/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/gi, ' ').replace(/\{[^}]*\}|\[[^\]]*\]/g, ' ')
      .replace(/Product "[^"]*" is not (shown on the quote page|quoted|listed[^–]*)\s*[–-]\s*/i, '').replace(/Portal error page:\s*We are facing some issue while fetching [^.]*\.?\s*[–-]?\s*/i, '').replace(/^(the insurer|the gateway|insurer|gateway) answers?:?\s*/i, '').replace(/\s*\.\.+/g, '.').replace(/^\s*(error|validation error|internal server error)\s*[:\-–]\s*/i, '').replace(/[|;]/g, ', ').replace(/\s+/g, ' ').replace(/^[\s,.:–-]+|[\s,.:–-]+$/g, '').trim();
    if (!t) return '';
    if (t.length > 70) { const cut = t.slice(0, 70); t = (cut.lastIndexOf(' ') > 40 ? cut.slice(0, cut.lastIndexOf(' ')) : cut) + '…'; }
    return t.replace(/_/g, ' ');
  }
  // ---- what the failure is, in the team's terms ----
  function jiraLobOf(lob, category) {
    const c = String(category || '').toLowerCase();
    if (/life term|3-click/i.test(lob)) return 'Term';
    if (/investment/i.test(lob)) return /annuit/.test(c) ? 'Annuity' : /pension|retire/.test(c) ? 'Pension' : 'Savings';
    if (/health/i.test(lob)) return 'Health'; if (/motor/i.test(lob)) return 'Motor'; if (/embedded/i.test(lob)) return 'Embedded'; return 'NA';
  }
  const J_MANU_CODES = () => { const set = new Set(Object.keys(J_INSURER)); try { Object.values(RULES).forEach((r) => r.m && set.add(String(r.m).toUpperCase())); } catch (e) {} return set; };
  const jParse = (t) => { try { return JSON.parse(t); } catch (e) { return null; } };
  const jWalk = (o, fn, d = 0) => { if (!o || d > 8) return; if (Array.isArray(o)) return o.forEach((x) => jWalk(x, fn, d + 1)); if (typeof o !== 'object') return; fn(o); Object.values(o).forEach((v) => jWalk(v, fn, d + 1)); };
  const journeyCaps = (entry) => { const since = (entry && entry.startedAt) || 0; const live = CAP.filter((x) => x.t >= since - 5000 && (entry && entry.journey ? x.journey === entry.journey : true)); return live.length ? live : ((entry && entry.jsnap && entry.jsnap.calls) || []); };   // after the next journey started, the capture buffer is gone – the slim copy saved with the result is used
  const slimCall = (c) => ({ url: c.url, method: c.method, status: c.status, t: c.t, journey: c.journey, reqHeaders: c.reqHeaders || {}, resHeaders: c.resHeaders || {}, reqBody: String(c.reqBody || '').slice(0, 60000), resBody: String(c.resBody || '').slice(0, 60000) });
  function jiraSnapshot(entry) {           // called when a BLOCKED result is recorded: keep what the ticket will need (product ids, failing calls, request id) with the result itself
    try { const since = (entry && entry.startedAt) || 0; const live = CAP.filter((x) => x.t >= since - 5000 && (entry.journey ? x.journey === entry.journey : true));
      const bad = live.filter(isBadCall).slice(-3); const prodCalls = live.filter((c) => !bad.includes(c) && /quote|proposal|gateCriteria|product/i.test(c.url)).slice(-4);
      entry.jsnap = { calls: prodCalls.concat(bad).map(slimCall), at: Date.now() }; const prod = jiraProductOf(entry); const err = jiraErrorOf(entry, prod);
      entry.jsnap.pid = prod.pid; entry.jsnap.manu = prod.manu; entry.jsnap.name = prod.name; entry.jsnap.reqId = err.reqId; entry.jsnap.calls = bad.map(slimCall).concat(prodCalls.map(slimCall).slice(0, 2)); } catch (e) { console.log('[SB4] jira snapshot', e.message); }
  }
  const isBadCall = (x) => x.status >= 400 || /"(listOfErrors|errorMessage|errorDisplayMessage|responseRemarks|errorIdentifier)"/i.test(x.resBody || '') || /"errors"\s*:\s*\[\s*\{/.test(x.resBody || '') || /"errorCode"\s*:\s*"(?!0|00|200|S|SUCCESS)/i.test(x.resBody || '');
  function jiraProductOf(entry) {         // Prod ID / manufacturer / product name of the plan that failed – from the journey's own API traffic, then the rules master
    const caps = journeyCaps(entry); const codes = J_MANU_CODES(); const want = nkey(entry.product || ''); const found = [];
    const look = (o, src, t) => { const pid = o.productId || o.productID || o.productCode || (o.product && (o.product.productId || o.product.productCode)); if (!pid) return;
      const manu = String(o.manufacturerId || o.manufacturerCode || o.insurerCode || (o.product && o.product.manufacturerId) || '').toUpperCase(); const name = o.productName || o.planName || o.productDisplayName || (o.product && o.product.productName) || '';
      found.push({ pid: String(pid), manu: codes.has(manu) ? manu : '', name: String(name || ''), src, t }); };
    caps.forEach((c) => {
      try { const u = new URL(c.url); const q = u.searchParams; const pid = q.get('productId') || q.get('product_id') || q.get('productCode') || q.get('product_code'); const manu = q.get('manufacturerId') || q.get('manufacturer_id') || q.get('insurerCode'); if (pid && /gateCriteria|proposal|product|spDetails|quote|information|configration|configuration/i.test(u.pathname)) found.push({ pid: String(pid), manu: codes.has(String(manu || '').toUpperCase()) ? String(manu).toUpperCase() : '', name: '', src: 'url', t: c.t }); } catch (e) {}   // the product-scoped calls (gateCriteria?product_id=…&manufacturer_id=…, proposal?…, product/information) name the plan exactly – as seen in the Network tab
      const multi = /quote\/poll/i.test(c.url) || /"typeOfQuote"\s*:\s*"Multi/i.test(c.reqBody || '');
      const res = jParse(c.resBody); if (res) jWalk(res, (o) => look(o, isBadCall(c) ? (multi ? 'mqerror' : 'error') : 'response', c.t)); const req = jParse(c.reqBody); if (req && !multi) jWalk(req, (o) => look(o, /proposal|single|gateCriteria|quote\/(?!poll)/i.test(c.url) ? 'request' : 'req0', c.t)); });
    const score = (f) => (f.src === 'url' ? 100 : f.src === 'error' ? 40 : f.src === 'request' ? 30 : f.src === 'response' ? 10 : f.src === 'mqerror' ? 2 : 5) + (want && f.name && nkey(f.name) === want ? 50 : 0) + (f.manu ? 3 : 0) + f.t / 1e13;   // a multi-quote poll lists EVERY insurer's errors – never the source of this ticket's product unless the name matches
    found.sort((a, b) => score(b) - score(a)); const best = found[0] || null;
    const r = rulesFor(entry.lob, entry.product); const manuFromBest = best && best.manu; const manuFromRules = r ? String(r.m).toUpperCase() : ''; const sn = (entry.jsnap && entry.jsnap.pid && !best) ? entry.jsnap : null;
    const pidOut = (best && best.pid) || (sn && sn.pid) || (r ? r.id : '') || ''; const manuOut = manuFromBest || (found.find((f) => f.pid === pidOut && f.manu) || {}).manu || (sn && sn.manu) || manuFromRules || '';
    const nameOut = (want && entry.product !== '*' && entry.product) || (found.find((f) => f.pid === pidOut && f.name) || {}).name || (best && best.name) || (sn && sn.name) || (r && r.mname) || '';
    return { pid: pidOut, manu: manuOut, name: nameOut, byApi: !!best || !!sn };
  }
  const J_RID = /^(x-)?(request-?id|req-?id|requestid|correlation-?id|trace-?id|track-?id|amzn-requestid|amz-cf-id)$/i;
  function jReqIdFrom(c) {                // a request id of a captured call: body keys, then response / request headers
    let id = ''; const body = jParse(c.resBody); jWalk(body, (o) => { if (!id) id = String(o.reqId || o.requestId || o.request_id || o.requestID || o.trackId || o.trackingId || o.traceId || (o.trackInfo && (o.trackInfo.requestId || o.trackInfo.reqId || o.trackInfo.trackId)) || (o.meta && (o.meta.requestId || o.meta.reqId)) || ''); });
    if (!id) { const h = c.resHeaders || {}; const k = Object.keys(h).find((x) => J_RID.test(x)); if (k) id = String(h[k]); }
    if (!id) { const h = c.reqHeaders || {}; const k = Object.keys(h).find((x) => J_RID.test(x)); if (k) id = String(h[k]); }
    if (!id) { const req = jParse(c.reqBody); jWalk(req, (o) => { if (!id) id = String(o.requestId || o.reqId || o.request_id || ''); }); }
    return id && id !== 'undefined' && id !== 'null' ? id.slice(0, 80) : '';
  }
  function jiraErrorBlock(json, prod) {    // a multi-quote poll answers with every insurer's errors: only this product's block is the ticket's error
    if (!json || !prod || !(prod.pid || prod.manu)) return json; let hit = null;
    jWalk(json, (o) => { if (hit) return; const pid = String(o.productId || o.productID || o.productCode || ''); const manu = String(o.manufacturerId || o.manufacturerCode || o.insurerCode || '').toUpperCase(); if ((prod.pid && pid === String(prod.pid)) && (!prod.manu || !manu || manu === prod.manu) && (o.listOfErrors || o.errorMessage || o.errorDisplayMessage || o.errors)) hit = o; });
    return hit ? Object.assign({ reqId: json.reqId || json.requestId || undefined }, hit) : json;
  }
  const concernsProduct = (c, prod) => { if (!prod || !(prod.pid || prod.manu)) return true; if (c.status >= 400 && !/quote\/poll/i.test(c.url)) return true;
    try { const u = new URL(c.url); const q = u.searchParams; const pid = q.get('productId') || q.get('product_id'); if (pid && String(pid) === String(prod.pid)) return true; } catch (e) {}
    const body = (c.reqBody || '') + ' ' + (c.resBody || ''); if (prod.pid && new RegExp('"(productId|productID|productCode)"\\s*:\\s*"' + String(prod.pid).replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '"').test(body)) return true;
    return !/quote\/poll/i.test(c.url) && /"typeOfQuote"\s*:\s*"(?!Multi)/i.test(c.reqBody || ''); };   // a multi-quote poll that does not mention this product is another insurer's problem
  function jiraErrorOf(entry, prod) {     // two error messages: what the screen showed, what the API (1SB gateway / manufacturer) answered – for THIS product
    const caps = journeyCaps(entry); const all = caps.filter(isBadCall); let calls = all.filter((c) => concernsProduct(c, prod)); if (!calls.length) calls = all;
    { const seen = new Set(); calls = calls.slice().reverse().filter((c) => { const k = (c.method || '') + ' ' + String(c.url || '').replace(/[?#].*/, '').replace(/\/[0-9a-f-]{20,}/g, '/:id'); if (seen.has(k)) return false; seen.add(k); return true; }).reverse(); }   // one payload per failing API (the latest), not every poll
    const last = calls[calls.length - 1] || null;
    let api = '', json = null, reqId = '';
    if (last) { json = jiraErrorBlock(jParse(last.resBody), prod); const errs = [];
      jWalk(json, (o) => { ['errorDisplayMessage', 'errorMessage', 'responseRemarks', 'errorDescription', 'message', 'error', 'msg', 'reason'].forEach((k) => { if (typeof o[k] === 'string' && o[k].trim() && !errs.includes(o[k].trim())) errs.push(o[k].trim()); }); if (Array.isArray(o.args)) o.args.forEach((a) => typeof a === 'string' && a.trim() && !errs.includes(a) && errs.push(a)); if (!reqId) reqId = String(o.reqId || o.requestId || o.request_id || o.trackId || (o.trackInfo && (o.trackInfo.requestId || o.trackInfo.reqId)) || ''); });
      api = [...new Set(errs)].slice(0, 5).join(' | '); if (!api && last.status >= 400) api = `HTTP ${last.status} ${(last.resBody || '').slice(0, 400)}`;
      const prev = calls[calls.length - 2]; if (prev) { const pj = jiraErrorBlock(jParse(prev.resBody), prod); const more = []; jWalk(pj, (o) => { ['errorDisplayMessage', 'errorMessage', 'responseRemarks', 'errorDescription'].forEach((k) => { if (typeof o[k] === 'string' && o[k].trim() && !more.includes(o[k].trim()) && !errs.includes(o[k].trim())) more.push(o[k].trim()); }); }); if (more.length) api += ' || earlier: ' + more.slice(0, 2).join(' | '); }   // the step before (e.g. this product's block in the multi-quote poll) is kept too
      if (!reqId) reqId = jReqIdFrom(last); }
    if (!reqId) { for (const c of calls.slice().reverse()) { reqId = jReqIdFrom(c); if (reqId) break; } }
    if (!reqId) { const m = ((entry.uiErrors || []).join(' ') + ' ' + (entry.msg || '')).match(/(?:request|req|reference|track(?:ing)?)\s*-?\s*id\s*[:#-]?\s*([A-Za-z0-9-]{8,})/i); if (m) reqId = m[1]; }
    if (!api) { const n = NET.filter((x) => x.err && x.err !== 'isPollComplete=false').slice(-1)[0]; if (n) api = n.err.slice(0, 800); }
    const ui = [].concat(entry.uiErrors || [], entry.errors || []).filter(Boolean); const uiMsg = [...new Set(ui)].join(' | ') || (entry.msg || '');
    return { ui: uiMsg.slice(0, 1500), api: api.slice(0, 1500), json, call: last, calls, reqId, msg: (api || uiMsg).slice(0, 1500) };
  }
  function jiraJourneyId(entry) {          // the journey id (JID-DEMO-BCIBL-2026-11-00686): the result's reference, else the captured calls
    const m = String((entry && entry.ref) || '').match(/JID-[A-Z0-9]+-[A-Z0-9]+-\d{4}-\d{2}-\d+/i); if (m) return m[0].toUpperCase();
    for (const c of journeyCaps(entry).slice().reverse()) { const x = ((c.url || '') + ' ' + (c.reqBody || '') + ' ' + (c.resBody || '').slice(0, 4000)).match(/JID-[A-Z0-9]+-[A-Z0-9]+-\d{4}-\d{2}-\d+/i); if (x) return x[0].toUpperCase(); }
    return '';
  }
  function jiraEnvOf(entry) {              // Jira "Environment" from the portal address: production distributor portal → Production, UAT → UAT, demo → UAT (the distributor-facing environment), dev / test / qa → Test
    const envName = (entry && entry.env) || HERE.env; const d = DIST_ENVS[envName]; let host = ''; try { const u = d && d.lobs ? Object.values(d.lobs).map((x) => (x && (x.assisted || x.diy)) || (typeof x === 'string' ? x : '')).find(Boolean) : ''; host = u ? new URL(u).host : ''; } catch (e) {} host = (host || (envName === HERE.env ? location.host : '') || String(envName)).toLowerCase();
    if (d && d.env === 'prod') return 'Production'; if (/prod|production|\bwww\./.test(host) && !/uat|demo|dev|test|sit|qa/.test(host)) return 'Production';
    if (/uat/.test(host)) return 'UAT'; if (/demo/.test(host) || envName === 'demo') return 'UAT'; if (/dev|test|sit|\bqa\b|stag/.test(host) || /^(dev|test)$/.test(envName)) return 'Test';
    return JCFG().envOpt || 'NA';
  }
  function jiraOrgHere(entry) {           // Org ID: the journey id names it (JID-DEMO-<ORG>-…), then the distributor portal the journey ran on, then the setting
    const jid = jiraJourneyId(entry); const fromJid = jid ? (jid.split('-')[2] || '') : ''; if (fromJid && !/^\d+$/.test(fromJid)) { const k = Object.keys(J_DIST).find((x) => x.toLowerCase() === fromJid.toLowerCase()); return k || fromJid; }
    const envName = (entry && entry.env) || HERE.env; const d = DIST_ENVS[envName]; const nm = d ? String(d.name || envName) : '';
    const hit = nm && Object.keys(J_DIST).find((k) => nm.toLowerCase().includes(k.toLowerCase()) || k.toLowerCase().includes(nm.toLowerCase().split(/[\s(]/)[0]));
    return hit || JCFG().org || 'AUSFB';
  }
  function jiraDraft(entry) {             // everything the ticket needs, from a result entry – the tester can still change it in the dialog
    const prod = jiraProductOf(entry); const err = jiraErrorOf(entry, prod);
    const code = prod.manu || ''; const ins = J_INSURER[code] || J_INSURER[Object.keys(J_INSURER).find((k) => code && new RegExp('^' + k, 'i').test(code)) || ''] || { title: code || 'INSURER', label: (code || 'INSURER').replace(/\s+/g, ''), manu: 'Other' };
    const pid = prod.pid || 'NA'; const name = prod.name || entry.product || 'product';
    const org = jiraOrgHere(entry); const lob = jiraLobOf(entry.lob, entry.category);
    const rawErr = err.api + ' ' + (err.json ? JSON.stringify(err.json).slice(0, 4000) : '');
    const rca = /MANUFACTURER_ERROR|INSURER_CRASH|INSURER|responseRemarks|from insurer|sales channel|not available for/i.test(rawErr) ? 'Insurer Issue' : /INTERNAL|Unexceptional|HTTP 5\d\d|Server Caught|timeout|timed out/i.test(rawErr) ? 'API Gateway Issue' : /validation|required|invalid|minimum|maximum/i.test(err.api) && !err.call ? 'AL Frontend Issue' : err.api ? 'API Gateway Issue' : 'AL Frontend Issue';
    const c = JCFG(); const ownerName = ins.owner || '';   // product owner + assignee per insurer (ICICI → Pratik Koku, HDFC → Ujwala Pawar, SBI → Pushkar Wad, BALIC → Anushrita Lee); the dialog can still change them
    const envTag = jiraEnvOf(entry); const shortErr = jShortError(err);
    return { org, jid: jiraJourneyId(entry), insurerTitle: ins.title, insurerLabel: ins.label, manu: ins.manu, manuCode: code, pid, name, lob, owner: ownerName, assignee: ownerName, ownerId: J_PEOPLE[ownerName] || '', assigneeId: J_PEOPLE[ownerName] || '', priority: 'High', issueType: c.issueType || 'Bug', envOpt: jiraEnvOf(entry), rca, sprintId: '', sprintName: '', parentKey: '', parentName: '', summary: [org, envTag !== 'NA' ? envTag : '', ins.title, 'ProdID', pid, name, shortErr].filter(Boolean).join('_').slice(0, 250), error: err.msg, uiError: err.ui, apiError: err.api, reqId: err.reqId, json: err.json, call: err.call, calls: err.calls, byApi: prod.byApi, entry };
  }
  const adfP = (t) => ({ type: 'paragraph', content: t ? [{ type: 'text', text: String(t) }] : [] });
  const adfB = (label, t) => ({ type: 'paragraph', content: [{ type: 'text', text: label, marks: [{ type: 'strong' }] }].concat(t ? [{ type: 'text', text: ' ' + String(t) }] : []) });
  function jiraDescription(d) {
    const brk = { type: 'hardBreak' }; const T = (t) => ({ type: 'text', text: String(t) }); const e = d.entry || {};
    const content = [adfP(`Org ID - ${d.org}`), { type: 'paragraph', content: [T(`Insurer - ${d.insurerTitle}`), brk, T(`ProdID - ${d.pid}`), brk, T(`Product Name - ${d.name}`)].concat(d.jid ? [brk, T(`Journey ID - ${d.jid}`)] : []) }];
    content.push(adfB('Error shown on the screen (UI):', d.uiError || e.msg || '–'));
    content.push(adfB('Error in the response (console – 1SB API / manufacturer API):', d.apiError || '–'));
    if (d.call) content.push(adfP(`Failed API: ${d.call.method || ''} ${String(d.call.url || '').replace(/^https?:\/\/[^/]+/, '')} → HTTP ${d.call.status}${d.reqId ? ' · request id ' + d.reqId : ''}`));
    if (d.json) content.push({ type: 'codeBlock', attrs: { language: 'json' }, content: [T(JSON.stringify(d.json, null, 2).slice(0, 20000))] });
    // (v5.28.2) the console note, the related-ticket list and the journey line are no longer written – they only took space; the Journey ID is in the header block and the re-run link stays
    try { const u = runBase(e.env, e.lob, e.mode === 'diy' ? 'diy' : 'assisted'); if (u) content.push({ type: 'paragraph', content: [T('Re-run: '), { type: 'text', text: '▶ ' + d.name, marks: [{ type: 'link', attrs: { href: u + '&category=' + enc(e.category || '') + '&product=' + enc(e.product || '') + '&code=' + enc(d.pid) + '&person=P1&auto=yes' } }] }] }); } catch (x) {}
    return { type: 'doc', version: 1, content };
  }
  function jiraFields(d) {
    const f = { project: { key: JCFG().project }, issuetype: { id: d.issueType === 'Epic' ? J_EPIC : J_BUG }, summary: d.summary, description: jiraDescription(d), priority: { id: d.priority === 'High' ? J_HIGH : d.priority === 'Highest' ? '1' : d.priority === 'Medium' ? '3' : d.priority === 'Low' ? '4' : J_HIGH }, labels: [d.org, d.insurerLabel].filter(Boolean).map((x) => x.replace(/\s+/g, '')) };
    f[JF.lob] = { id: J_LOB[d.lob] || J_LOB.NA }; f[JF.pi] = [{ id: J_PI1 }]; f[JF.env] = { id: J_ENVS[d.envOpt] || J_ENV_NA }; f[JF.devApproach] = { id: J_AGENT }; f[JF.team] = J_TEAM;
    f[JF.manu] = { id: J_MANU[d.manu] || J_MANU.Other }; f[JF.dist] = { id: J_DIST[d.org] || J_DIST['1SB'] }; f[JF.distId] = d.org; f[JF.manuId] = d.manuCode || d.manu;
    if (d.rca && J_RCA[d.rca]) f[JF.rca] = { id: J_RCA[d.rca] };
    if (d.assigneeId) f.assignee = { accountId: d.assigneeId }; if (d.ownerId) f[JF.owner] = { accountId: d.ownerId };
    if (d.issueType !== 'Epic') { if (d.sprintId) f[JF.sprint] = +d.sprintId; if (d.parentKey) f.parent = { key: d.parentKey }; }
    return f;
  }
  // ---- Jira REST: the tester's own Jira session (GM request with the browser's cookies); if Jira refuses cross-site writes, the same calls run inside a Jira tab; an API token is the third way ----
  const jSite = () => JCFG().site.replace(/\/+$/, '');
  const onJiraSite = () => { try { return location.origin === new URL(jSite()).origin; } catch (e) { return false; } };
  function jreq(method, path, body, opts) {
    const c = JCFG(); const url = jSite() + path; const headers = { Accept: 'application/json', 'X-Atlassian-Token': 'no-check' };
    if (c.email && c.token) headers.Authorization = 'Basic ' + btoa(c.email + ':' + c.token);
    let data = body; if (body && !(opts && opts.form)) { headers['Content-Type'] = 'application/json'; data = JSON.stringify(body); }
    const useFetch = onJiraSite() || typeof GM_xmlhttpRequest !== 'function';
    return new Promise((res, rej) => {
      const done = (status, text) => { let j = null; try { j = text ? JSON.parse(text) : null; } catch (e) {} if (status >= 200 && status < 300) res(j || {}); else rej(Object.assign(new Error(`Jira ${status}: ${(j && (j.errorMessages || []).concat(Object.values(j.errors || {})).join('; ')) || String(text || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').slice(0, 300)}`), { status, body: j })); };
      if (useFetch) fetch(url, { method, headers, body: data, credentials: 'include' }).then((r) => r.text().then((t) => done(r.status, t))).catch((e) => rej(new Error('Jira: network error (' + e.message + ')')));
      else GM_xmlhttpRequest({ method, url, headers: Object.assign({ Origin: jSite(), Referer: jSite() + '/' }, headers), data, timeout: 60000, onload: (x) => done(x.status, x.responseText), onerror: (x) => rej(new Error('Jira: network error' + (x && x.error ? ' ' + x.error : ''))), ontimeout: () => rej(new Error('Jira: timeout')) });
    });
  }
  async function jiraMe() { return jreq('GET', '/rest/api/3/myself'); }
  async function jiraFind(d) {             // an existing epic / ticket for this Prod ID (any format) → update instead of a duplicate
    const c = JCFG(); const pid = String(d.pid || '').replace(/["\\]/g, ''); if (!pid || pid === 'NA') return null;
    const jql = `project = ${c.project} AND (summary ~ "${pid}" OR description ~ "${pid}") ORDER BY created DESC`;
    let r; try { r = await jreq('GET', '/rest/api/3/search/jql?jql=' + encodeURIComponent(jql) + '&fields=summary,description,issuetype,status&maxResults=50'); }
    catch (e1) { try { r = await jreq('POST', '/rest/api/3/search/jql', { jql, fields: ['summary', 'description', 'issuetype', 'status'], maxResults: 50 }); } catch (e2) { throw new Error('search failed – ' + e1.message + ' / ' + e2.message); } }
    const re = new RegExp('ProdID[ _-]*' + esc(pid) + '(?![A-Za-z0-9])', 'i'); const org = new RegExp('^' + esc(d.org) + '(?![A-Za-z0-9])', 'i');
    const hits = (r.issues || []).filter((i) => re.test(i.fields.summary || '') || re.test(JSON.stringify(i.fields.description || '')));
    const same = hits.filter((i) => org.test(i.fields.summary || '') || new RegExp('Org ID\\s*-\\s*' + esc(d.org) + '(?![A-Za-z0-9])', 'i').test(JSON.stringify(i.fields.description || '')));
    const isEpic = (i) => i.fields.issuetype && i.fields.issuetype.name === 'Epic'; const open = (i) => !/done|closed|resolved|not an issue|cancel/i.test((i.fields.status && i.fields.status.name) || '');
    const epic = same.find(isEpic) || null; const bug = same.find((i) => !isEpic(i) && open(i)) || null;
    d.productEpic = epic ? { key: epic.key, summary: epic.fields.summary } : null;
    const hit = d.issueType === 'Epic' ? epic : bug;                                           // a Bug updates the open bug of this Prod ID; the product epic becomes its parent
    d.related = hits.filter((i) => i !== hit && i !== epic).map((i) => i.key + ' (' + (i.fields.summary || '').slice(0, 60) + ')').slice(0, 5);   // the same Prod ID under another Org ID is mentioned, not renamed
    return hit;
  }
  async function jiraParentFor(d) {       // the epic a Bug goes under: the product epic (AUSFB_…_ProdID_…), else the insurer epic (AUSFB-HDFCLife …)
    if (d.issueType === 'Epic') return null; if (d.parentKey) return { key: d.parentKey, summary: d.parentName };
    if (d.productEpic) return d.productEpic;
    try { const c = JCFG(); const jql = `project = ${c.project} AND issuetype = Epic AND summary ~ "${String(d.org).replace(/["\\]/g, '')}" ORDER BY created DESC`;
      const r = await jreq('GET', '/rest/api/3/search/jql?jql=' + encodeURIComponent(jql) + '&fields=summary&maxResults=50'); const org = new RegExp('^' + esc(d.org) + '\\s*[-_ ]\\s*', 'i');
      const words = [d.manuCode, d.insurerTitle, d.manu, d.insurerLabel].filter(Boolean).map((w) => String(w).toLowerCase().replace(/\s+/g, ''));
      const hit = (r.issues || []).find((i) => { const sm = String(i.fields.summary || ''); if (!org.test(sm) || /prodid/i.test(sm)) return false; const rest = sm.replace(org, '').toLowerCase().replace(/\s+/g, ''); return words.some((w) => rest.startsWith(w) || rest.startsWith(w.replace(/life|pru|gic/g, ''))); });
      return hit ? { key: hit.key, summary: hit.fields.summary } : null; } catch (e) { return null; }
  }
  async function jiraUsers(q) {           // people to assign: the project's assignable users (Jira search as you type)
    const c = JCFG(); const r = await jreq('GET', `/rest/api/3/user/assignable/search?project=${encodeURIComponent(c.project)}&query=${encodeURIComponent(q || '')}&maxResults=200`);
    return (Array.isArray(r) ? r : []).filter((u) => u.active !== false && u.accountType !== 'app').map((u) => ({ id: u.accountId, name: u.displayName || u.emailAddress || u.accountId }));
  }
  async function jiraSprints() {           // active + future sprints of the team's board (INSURANCE board 42)
    const c = JCFG(); const out = []; for (const st of ['active', 'future']) { try { const r = await jreq('GET', `/rest/agile/1.0/board/${c.boardId || 42}/sprint?state=${st}&maxResults=20`); (r.values || []).forEach((sp) => out.push({ id: sp.id, name: sp.name, state: sp.state })); } catch (e) {} }
    return out;
  }
  let epicCache = { at: 0, list: [] };
  async function jiraEpics(q) {            // ALL epics of the project (paged, cached 10 min) – a typed query also asks Jira (summary match) so nothing is missed
    const c = JCFG(); const page = async (jql, max) => { const out = []; let token = ''; for (let i = 0; i < 8 && out.length < max; i++) { const r = await jreq('GET', '/rest/api/3/search/jql?jql=' + encodeURIComponent(jql) + '&fields=summary,status&maxResults=100' + (token ? '&nextPageToken=' + encodeURIComponent(token) : '')); (r.issues || []).forEach((i) => out.push({ id: i.key, name: i.key + ' – ' + (i.fields.summary || '') + ((i.fields.status || {}).name ? '  [' + i.fields.status.name + ']' : '') })); token = r.nextPageToken || ''; if (!token || r.isLast) break; } return out; };
    if (!q) { if (Date.now() - epicCache.at < 600000 && epicCache.list.length) return epicCache.list; const list = await page(`project = ${c.project} AND issuetype = Epic ORDER BY created DESC`, 800); epicCache = { at: Date.now(), list }; return list; }
    return page(`project = ${c.project} AND issuetype = Epic AND (summary ~ "${String(q).replace(/["\\]/g, '')}*" OR key = "${c.project}-${String(q).replace(/\D/g, '') || '0'}") ORDER BY created DESC`, 100);
  }
  async function jiraAttach(key, blob, filename) { const fd = new FormData(); fd.append('file', blob, filename); return jreq('POST', `/rest/api/3/issue/${key}/attachments`, fd, { form: true }); }
  async function jiraShot() { try { const c = await grabPage(true); if (!c) return null; return await toJpeg(c, 0.8); } catch (e) { return null; } }
  const J_REDACT = (t) => String(t || '').replace(/("?(authorization|cookie|set-cookie|x-api-key|api[-_]?key|password|token)"?\s*[:=]\s*)"[^"]*"/gi, '$1"<redacted>"').replace(/(Bearer\s+)[A-Za-z0-9._-]{20,}/g, '$1<redacted>');
  function jiraPayloadText(call, d) {     // the same layout as the API-log console's "download payload"
    const hdr = (h) => { try { return JSON.stringify(h || {}, null, 2); } catch (e) { return '{}'; } };
    const pretty = (t) => { const j = jParse(t); return j ? JSON.stringify(j, null, 2) : String(t || ''); };
    return J_REDACT(['API Log Payload Data', '========================================', '', `API Path: ${call.url}`, `Method: ${call.method || ''}`, `ID: ${d.reqId || 'N/A'}`, `Journey ID: ${(d.entry && d.entry.ref) || 'N/A'}`, `Status Code: ${call.status}`, `Time: ${new Date(call.t).toISOString()}`, '', 'Request Payload:', pretty(call.reqBody), '', 'Response Payload:', pretty(call.resBody), '', 'Request Header:', hdr(call.reqHeaders), '', 'Response Header:', hdr(call.resHeaders)].join('\n'));
  }
  function jiraPayloadFiles(d) {          // every failed 1SB call of the journey (latest first, max 3) as payload-*.txt
    const calls = (d.calls || (d.call ? [d.call] : [])).slice(-3).reverse(); const out = [];
    calls.forEach((c, i) => { const api = String(c.url || '').replace(/^https?:\/\/[^/]+/, '').replace(/[^A-Za-z0-9]+/g, '_').replace(/^_+|_+$/g, '').slice(0, 60); out.push({ name: `payload_1SB_${api || 'api'}_${c.status}${i ? '_' + i : ''}.txt`, blob: new Blob([jiraPayloadText(c, d)], { type: 'text/plain' }) }); });
    return out;
  }
  async function jiraConsolePayloads(d, say) {     // manufacturer payload from the API-log console, searched by request id (console URL templates in Jira settings)
    const c = JCFG(); const out = []; if (!d.reqId || !c.consoleSearch) { if (d.reqId && !c.consoleSearch) d.consoleNote = `Manufacturer payload: search request id ${d.reqId} in the API-log console (set the console URL in 🎫 Jira settings to attach it automatically).`; return out; }
    try { say && say('searching the API-log console for request id ' + d.reqId + '…');
      const u = c.consoleSearch.replace(/\{reqId\}|\{id\}/g, encodeURIComponent(d.reqId)); const txt = await jtext(u); const j = jParse(txt);
      const items = []; jWalk(j, (o) => { if ((o.requestPayload || o.request || o.requestBody) && (o.responsePayload || o.response || o.responseBody)) items.push(o); });
      if (!items.length && txt) { out.push({ name: `console_${d.reqId}.txt`, blob: new Blob([J_REDACT(txt)], { type: 'text/plain' }) }); return out; }
      for (const o of items.slice(0, 5)) { const id = o.id || o.logId || ''; let body = null;
        if (c.consoleDownload && id) { try { body = await jtext(c.consoleDownload.replace(/\{id\}/g, encodeURIComponent(id)).replace(/\{reqId\}/g, encodeURIComponent(d.reqId))); } catch (e) {} }
        if (!body) body = ['API Log Payload Data', '========================================', '', `API Path: ${o.apiPath || o.url || o.apiUrl || ''}`, `ID: ${id}`, `Status Code: ${o.statusCode || o.status || ''}`, '', 'Request Payload:', typeof (o.requestPayload || o.request || o.requestBody) === 'string' ? (o.requestPayload || o.request || o.requestBody) : JSON.stringify(o.requestPayload || o.request || o.requestBody, null, 2), '', 'Response Payload:', typeof (o.responsePayload || o.response || o.responseBody) === 'string' ? (o.responsePayload || o.response || o.responseBody) : JSON.stringify(o.responsePayload || o.response || o.responseBody, null, 2)].join('\n');
        const host = String(o.apiPath || o.url || o.apiUrl || 'manufacturer').replace(/^https?:\/\//, '').replace(/[^A-Za-z0-9]+/g, '_').slice(0, 50);
        out.push({ name: `payload_${host}_${id || d.reqId}.txt`, blob: new Blob([J_REDACT(body)], { type: 'text/plain' }) }); }
      if (!out.length) d.consoleNote = `No API-log entry found in the console for request id ${d.reqId}.`;
    } catch (e) { d.consoleNote = `API-log console lookup failed for request id ${d.reqId}: ${e.message}`; say && say(d.consoleNote); }
    return out;
  }
  function jtext(url) { return new Promise((res, rej) => { if (typeof GM_xmlhttpRequest === 'function') GM_xmlhttpRequest({ method: 'GET', url, timeout: 30000, onload: (x) => (x.status < 400 ? res(x.responseText) : rej(new Error('HTTP ' + x.status))), onerror: () => rej(new Error('network error')), ontimeout: () => rej(new Error('timeout')) }); else fetch(url, { credentials: 'include' }).then((r) => (r.ok ? r.text() : Promise.reject(new Error('HTTP ' + r.status)))).then(res, rej); }); }
  async function jiraWrite(d, log) {      // search → create or update → comment → attachments (runs with the current transport)
    const c = JCFG(); const say = (m) => { if (log) log(m); console.log('[SB4] jira', m); };
    say(`searching ${c.project} for Prod ID ${d.pid}…`); const found = await jiraFind(d);
    if (d.issueType !== 'Epic') say(d.parentKey ? 'epic: ' + d.parentKey : 'no epic chosen – the bug is created without a parent');
    if (d.issueType !== 'Epic' && !d.sprintId && (c.sprint || 'active') === 'active') { try { const sp = (await jiraSprints()).find((x) => x.state === 'active'); if (sp) { d.sprintId = sp.id; d.sprintName = sp.name; say('sprint: ' + sp.name); } } catch (e) {} }
    const consoleFiles = await jiraConsolePayloads(d, say);
    const fields = jiraFields(d); let key, action;
    if (found) { key = found.key; action = 'updated'; say(`found ${key} "${found.fields.summary}" – updating it to the format`);
      const upd = Object.assign({}, fields); delete upd.project; delete upd.issuetype; delete upd[JF.sprint]; try { await jreq('PUT', `/rest/api/3/issue/${key}`, { fields: upd }); } catch (e) { say('full update refused (' + e.message + ') – updating summary / description / labels only'); await jreq('PUT', `/rest/api/3/issue/${key}`, { fields: { summary: upd.summary, description: upd.description, labels: upd.labels } }); }
      await jreq('POST', `/rest/api/3/issue/${key}/comment`, { body: { type: 'doc', version: 1, content: [adfP(`Reproduced by the journey runner on ${new Date().toISOString().slice(0, 16).replace('T', ' ')} UTC (${d.entry.env || HERE.env} · ${d.entry.mode === 'diy' ? 'DIY' : 'Assisted'})`), adfB('UI:', d.uiError || '–'), adfB('API:', d.apiError || '–')] } }); }
    else { say('creating the ' + (d.issueType || 'Bug') + (d.parentKey ? ' under ' + d.parentKey : '') + '…'); let r; try { r = await jreq('POST', '/rest/api/3/issue', { fields }); } catch (e) { const bad = Object.keys((e.body && e.body.errors) || {}); if (!bad.length) throw e; say('Jira refused field(s) ' + bad.join(', ') + ' (' + Object.values(e.body.errors).join('; ').slice(0, 200) + ') – creating without them'); bad.forEach((k) => delete fields[k]); r = await jreq('POST', '/rest/api/3/issue', { fields }); } key = r.key; action = 'created'; }
    if (action === 'created') { const want = c.statusAfter || 'Backlog'; try { const t = await jiraTransition(key, want, say); say(t ? 'status → ' + t : 'status: no "' + want + '" transition available for this issue – left as created'); } catch (e) { say('status not changed: ' + e.message); } }
    const url = jSite() + '/browse/' + key; const attached = [];
    if (c.screenshot !== false) { say('attaching the screenshot…'); const blob = d.shotBlob || await jiraShot(); if (blob) { try { await jiraAttach(key, blob, `error-${(d.entry.env || HERE.env)}-${d.pid}-${Date.now()}.jpg`); attached.push('screenshot'); } catch (e) { say('screenshot not attached: ' + e.message); } } }
    if (c.apiFile !== false) { for (const f of jiraPayloadFiles(d).concat(consoleFiles)) { say('attaching ' + f.name + '…'); try { await jiraAttach(key, f.blob, f.name); attached.push(f.name); } catch (e) { say(f.name + ' not attached: ' + e.message); } } }
    return { at: new Date().toISOString(), key, url, action, type: d.issueType, parent: d.parentKey || '', sprint: d.sprintName || '', pid: d.pid, product: d.name, lob: d.lob, insurer: d.insurerTitle, org: d.org, env: d.entry.env, summary: d.summary, attached };
  }
  /* v5.33.4 – the INSB workflow has no direct Draft → Backlog transition: a new issue has to walk Draft → DRAFT REVIEW → business grooming → Tech Grooming → IN BACKLOG.
     jiraTransition() therefore takes the wanted status if it is reachable in one step, otherwise the next hop of the status path (Settings → "Status path"), and repeats until the wanted status is reached. */
  const J_STATUS_PATH = 'DRAFT REVIEW > business grooming > Tech Grooming > IN BACKLOG';
  const jNorm = (s) => String(s || '').toLowerCase().replace(/\s+/g, ' ').trim();
  async function jiraTransition(key, want, say) {
    const w = jNorm(want); if (!w || w === 'none' || w === '-') return '';
    const path = String(JCFG().statusPath || J_STATUS_PATH).split('>').map(jNorm).filter(Boolean); const walked = []; const name = (x) => jNorm((x.to && x.to.name) || x.name);
    for (let step = 0; step < 8; step++) {
      const r = await jreq('GET', `/rest/api/3/issue/${key}/transitions`); const list = (r.transitions || []).filter((x) => x.isAvailable !== false);
      let t = list.find((x) => name(x) === w) || list.find((x) => name(x).includes(w));
      if (!t) { for (const p of path) { const cand = list.find((x) => name(x) === p) || list.find((x) => name(x).includes(p)); if (cand && !walked.some((n) => jNorm(n) === name(cand))) { t = cand; break; } } }
      if (!t) { if (say) say('status: from "' + (walked[walked.length - 1] || 'the new issue') + '" the workflow offers only ' + (list.map((x) => (x.to && x.to.name) || x.name).join(', ') || 'nothing') + ' – no step towards "' + want + '"'); return walked.join(' → '); }
      try { await jreq('POST', `/rest/api/3/issue/${key}/transitions`, { transition: { id: t.id } }); } catch (e) { throw new Error((walked.length ? 'moved to ' + walked.join(' → ') + ', then ' : '') + '"' + t.name + '" refused: ' + e.message); }
      const to = (t.to && t.to.name) || t.name; walked.push(to);
      if (jNorm(to) === w || jNorm(to).includes(w)) return walked.join(' → ');
      await sleep(300);
    }
    return walked.join(' → ');
  }
  async function jiraSubmit(d, log) {     // the whole thing, with the transport fallbacks; returns { key, url, action }
    const say = (m) => { if (log) log(m); console.log('[SB4] jira', m); };
    say('checking the Jira session…'); let rec;
    try { const me = await jiraMe(); say(`signed in as ${me.displayName || me.emailAddress || 'ok'}`); rec = await jiraWrite(d, log); }
    catch (e) {
      const blocked = e.status === 401 || e.status === 403 || /xsrf|csrf|network error|timeout/i.test(e.message);
      if (!blocked || onJiraSite() || typeof GM_openInTab !== 'function') throw e;
      say(`direct call refused (${e.message}) – doing it from a Jira tab instead…`); rec = await jiraViaTab(d, log);
    }
    rec.t = rec.t || Date.now(); try { rec.jobKey = rec.jobKey || jiraPolicy(Object.assign({ status: 'BLOCKED' }, d.entry || {})).key; } catch (e) {} const L = S.get('jiraLog', []); L.push(rec); S.set('jiraLog', L.slice(-200));
    try { const R = S.get('results', []); const i = R.findIndex((x) => x.at === d.entry.at && x.product === d.entry.product); if (i >= 0) { R[i].jira = rec.key; R[i].jiraUrl = rec.url; S.set('results', R); if (R[i].gsRow) gsWriteBack(R[i]).catch(() => {}); } } catch (e) {}   // the sheet row gets the ticket key too
    say(`${rec.action}: ${rec.key}` + (rec.attached && rec.attached.length ? ' (attached: ' + rec.attached.join(', ') + ')' : '')); return rec;
  }
  // ---- fallback transport: the same steps executed by the script inside a Jira tab (same-origin, the tester's session, no cross-site rules) ----
  const blobToDataUrl = (b) => new Promise((res) => { const r = new FileReader(); r.onload = () => res(r.result); r.readAsDataURL(b); });
  const dataUrlToBlob = async (u) => (await fetch(u)).blob();
  async function jiraViaTab(d, log) {
    const say = (m) => { if (log) log(m); };
    const shot = JCFG().screenshot !== false ? await jiraShot() : null; const files = []; for (const f of jiraPayloadFiles(d)) files.push({ name: f.name, data: await blobToDataUrl(f.blob) });
    const job = { id: 'J' + Date.now(), at: Date.now(), d: Object.assign({}, d, { call: null, calls: null, json: d.json, entry: Object.assign({}, d.entry, { diag: undefined }) }), shot: shot ? await blobToDataUrl(shot) : null, files };
    S.set('jiraJob', job); S.set('jiraJobResult', null);
    const tab = GM_openInTab(jSite() + '/browse/' + JCFG().project + '?sb4jira=' + job.id, { active: false, insert: true, setParent: true }); say('Jira tab opened in the background – waiting for it…');
    const t0 = Date.now(); while (Date.now() - t0 < 180000) { await sleep(1000); const r = S.get('jiraJobResult', null); if (r && r.id === job.id) { try { if (tab && tab.close) tab.close(); } catch (e) {} if (r.error) throw new Error(r.error); (r.log || []).forEach(say); return r.rec; } }
    throw new Error('the Jira tab did not answer in 3 minutes – is ' + jSite() + ' signed in?');
  }
  async function jiraWorkerTick() {       // on the Jira site: run a pending job from another tab
    if (!onJiraSite()) return false; const job = S.get('jiraJob', null); if (!job || job.done || (S.get('jiraJobResult', null) || {}).id === job.id) return false;
    if (Date.now() - job.at > 600000) { S.set('jiraJob', null); return false; }
    job.done = true; S.set('jiraJob', job); const logs = []; const log = (m) => logs.push('[jira tab] ' + m);
    try { const d = job.d; d.calls = []; d.call = null; if (job.shot) d.shotBlob = await dataUrlToBlob(job.shot);
      const pre = []; for (const f of job.files || []) pre.push({ name: f.name, blob: await dataUrlToBlob(f.data) });
      const me = await jiraMe(); log('signed in as ' + (me.displayName || '')); const rec = await jiraWrite(d, log);
      for (const f of pre) { try { await jiraAttach(rec.key, f.blob, f.name); rec.attached.push(f.name); } catch (e) { log(f.name + ' not attached: ' + e.message); } }
      S.set('jiraJobResult', { id: job.id, rec, log: logs }); } catch (e) { S.set('jiraJobResult', { id: job.id, error: e.message, log: logs }); }
    setTimeout(() => { try { window.close(); } catch (e) {} }, 1500); return true;
  }
  // ---- after a BLOCKED result: the auto-ticket framework (v5.28) ----
  // Modes: ask (button on the banner, as before) · queue (the ticket is prepared and parked – created later with one click, or when auto is switched on) · auto (created at once, through the policy below) · off.
  // Every automatic decision goes through jiraPolicy(): only BLOCKED results, only insurer / product / gateway failures (never sign-in, OTP, payment, "no progress"), only on the environments allowed, never the same product + error twice within the dedupe window, never more than maxPerHour an hour.
  // Jobs live in a persistent queue (S 'jiraQueue') with retries – a Jira session that is not there yet does not lose the ticket; the queue is run again on the next page load and from Results → Tickets.
  const J_KIND = (entry) => { const m = String(entry.msg || ''); const api = String(entry.api || ''); if (J_SKIP_AUTO.test(m)) return 'tester'; if (/not enabled for this distributor|not part of this portal|NO_VALID_PRODUCT/i.test(m)) return 'config'; if (/insurer|manufacturer|MANUFACTURER_ERROR|INSURER|responseRemarks|not quoted|not listed|not shown on the quote page|quote data/i.test(m + ' ' + api)) return 'product'; if (/HTTP 5\d\d|INTERNAL|timeout|timed out|Server Caught|gateway/i.test(m + ' ' + api)) return 'gateway'; if (/no options|master data|dropdown|required|field/i.test(m)) return 'portal'; return 'other'; };
  const jErrSig = (entry) => String((entry.msg || '') + '|' + (entry.api || '')).toLowerCase().replace(/jid-[a-z0-9-]+|\d{2}:\d{2}:\d{2}|request id:? ?[a-f0-9-]+|[a-f0-9]{8}-[a-f0-9-]{27}/g, '').replace(/\s+/g, ' ').slice(0, 160);
  function jiraPolicy(entry) {            // { ok, reason, kind, key } – may this failure become a ticket without anyone looking at it?
    const c = JCFG(); const kind = J_KIND(entry); const snap = entry.jsnap || {}; const key = [entry.env, entry.lob, snap.manu || '', snap.pid || entry.product || '', jErrSig(entry)].join('|');
    if (!/BLOCKED/.test(entry.status || '')) return { ok: false, reason: 'not a BLOCKED result', kind, key };
    if (kind === 'tester') return { ok: false, reason: 'needs the tester (sign-in / OTP / payment / stalled page), not an insurer or product problem', kind, key };
    const kinds = String(c.autoKinds || 'product'); if (kinds !== 'all' && !kinds.split(',').includes(kind)) return { ok: false, reason: `failure kind "${kind}" is not in the automatic list (${kinds})`, kind, key };
    if (!(snap.pid || snap.manu || entry.product)) return { ok: false, reason: 'no product identified for this failure', kind, key };
    const prodEnv = entry.env !== 'demo' && entry.env !== 'dev' && entry.env !== 'test' && entry.env !== 'custom' && DIST_ENVS[entry.env] && DIST_ENVS[entry.env].env === 'prod';
    if ((c.autoEnvs || 'nonprod') === 'nonprod' && prodEnv) return { ok: false, reason: 'production portal – automatic tickets are limited to demo / dev / test / UAT', kind, key };
    if ((c.autoEnvs || 'nonprod') === '1sb' && !['demo', 'dev', 'test'].includes(entry.env)) return { ok: false, reason: 'automatic tickets are limited to the 1SB environments', kind, key };
    const h = +(c.dedupeHours || 24) * 3600000; const seen = S.get('jiraLog', []).map((x) => Object.assign({ ticket: x.key, jkey: x.jobKey, status: 'done' }, x)).concat(S.get('jiraQueue', []).map((x) => Object.assign({ jkey: x.key }, x))).find((x) => x.jkey === key && Date.now() - (x.t || x.at || 0) < h);
    if (seen) return { ok: false, reason: `same product + error already ${seen.status === 'pending' || seen.status === 'failed' ? 'queued' : 'ticketed'} ${seen.ticket || ''} within ${c.dedupeHours || 24} h`, kind, key, dup: seen };
    const hour = S.get('jiraLog', []).filter((x) => x.auto && Date.now() - (x.t || 0) < 3600000).length; if (hour >= +(c.maxPerHour || 5)) return { ok: false, reason: `${hour} automatic ticket(s) in the last hour – limit ${c.maxPerHour || 5}`, kind, key };
    return { ok: true, reason: 'insurer / product failure on an allowed environment', kind, key };
  }
  const jSlimEntry = (e) => { const o = Object.assign({}, e); delete o.diag; if (o.jsnap && o.jsnap.calls) o.jsnap = Object.assign({}, o.jsnap, { calls: o.jsnap.calls.slice(0, 4).map((c) => Object.assign({}, c, { reqBody: String(c.reqBody || '').slice(0, 60000), resBody: String(c.resBody || '').slice(0, 60000) })) }); return o; };
  function jiraEnqueue(entry, pol, why) {   // park a ticket job: { id, at, key, kind, status, tries, entry, draft summary }
    const Q = S.get('jiraQueue', []); const d = jiraDraft(entry); const job = { id: 'Q' + Date.now() + Math.random().toString(36).slice(2, 6), at: Date.now(), key: pol.key, kind: pol.kind, status: 'pending', tries: 0, why: why || pol.reason, summary: d.summary, product: d.name, pid: d.pid, manu: d.manuCode, env: entry.env, lob: entry.lob, error: String(d.error || '').slice(0, 300), entry: jSlimEntry(entry) };
    Q.push(job); S.set('jiraQueue', Q.slice(-100)); return job;
  }
  let jqBusy = false;
  async function jiraQueueRun(opts) {       // create the pending tickets, oldest first – each job up to 3 tries, 10 min apart; returns { done, failed, skipped }
    const o = Object.assign({ force: false, say: (m) => banner('Jira', m) }, opts || {}); if (jqBusy) return { done: 0, failed: 0, skipped: 0, busy: true }; jqBusy = true; const out = { done: 0, failed: 0, skipped: 0 };
    try { const Q = S.get('jiraQueue', []); for (const job of Q) { if (job.status !== 'pending' && !(job.status === 'failed' && o.force)) continue; if (!o.force && job.nextAt && Date.now() < job.nextAt) { out.skipped++; continue; }
        job.tries++; job.status = 'running'; S.set('jiraQueue', Q);
        try { const d = jiraDraft(job.entry); if (job.assigneeId) { d.assigneeId = job.assigneeId; d.assignee = job.assignee || ''; } const rec = await jiraSubmit(d, (m) => o.say(`${job.product}: ${m}`)); { const L = S.get('jiraLog', []); const last = L[L.length - 1]; if (last && last.key === rec.key) { last.auto = true; last.jobKey = job.key; S.set('jiraLog', L); } }
          job.status = 'done'; job.ticket = rec.key; job.url = rec.url; job.action = rec.action; job.doneAt = Date.now(); out.done++; o.say(`${rec.action}: ${rec.key} – ${job.summary}`); }
        catch (e) { job.lastError = e.message; job.status = job.tries >= 3 && !o.force ? 'failed' : 'pending'; job.nextAt = Date.now() + 600000; out.failed++; o.say(`${job.product}: not created (${e.message})${job.status === 'pending' ? ' – retried in 10 min / from Results → Tickets' : ' – gave up after 3 tries; use Results → Tickets'}`); if (/sign in|401|403|session|xsrf/i.test(e.message)) break; }
        S.set('jiraQueue', Q); } S.set('jiraQueue', Q); } finally { jqBusy = false; }
    return out;
  }
  function jiraOnResult(entry) {
    try { const c = JCFG(); if (c.mode === 'off' || !/BLOCKED/.test(entry.status || '')) return;
      if (c.mode === 'auto' || c.mode === 'queue') { const pol = jiraPolicy(entry); console.log('[SB4] jira policy', pol.ok ? 'OK' : 'skip', pol.reason, pol.key);
        if (!pol.ok) { banner('Jira', `No automatic ticket: ${pol.reason}` + (pol.dup && (pol.dup.ticket || pol.dup.jira) ? '' : '') ); jiraAskButton(entry); return; }
        const job = jiraEnqueue(entry, pol); if (c.mode === 'queue') { const n = S.get('jiraQueue', []).filter((x) => x.status === 'pending').length; banner('Jira', `Ticket prepared, not created: "${job.summary}" – ${n} pending (Results → Tickets → Create)`); return; }
        jiraQueueRun().then((r) => { if (r.failed && !r.done) jiraAskButton(entry); }); return; }
      jiraAskButton(entry);
    } catch (e) { console.log('[SB4] jira', e.message); }
  }
  function jiraAskButton(entry) { setTimeout(() => { const b = document.getElementById('sb-banner'); if (!b || document.getElementById('sb-jirabtn')) return; const btn = document.createElement('button'); btn.id = 'sb-jirabtn'; btn.textContent = '🎫 Create Jira ticket'; btn.style.cssText = BTN + ';background:#0052cc;margin-left:8px;padding:3px 9px;font-size:12px'; btn.onclick = () => showJiraDialog(entry); b.appendChild(btn); }, 300); }
  function jiraQueueHtml() {              // Results dialog: the prepared / pending / failed / created automatic tickets
    const Q = S.get('jiraQueue', []); if (!Q.length) return '';
    const col = { pending: '#92400e', running: '#1d4ed8', failed: '#991b1b', done: '#166534' };
    return `<div style="margin-top:12px;display:flex;gap:8px;align-items:center;flex-wrap:wrap"><span style="font-weight:700">Tickets prepared by the script (${Q.length})</span><span style="font-size:12px;color:#64748b">mode: <b>${escH(JCFG().mode)}</b></span><button id="sb-jq-run" style="${BTN};background:#0052cc;padding:3px 9px;font-size:12px">Create pending (${Q.filter((x) => x.status === 'pending').length})</button><button id="sb-jq-retry" style="${BTN};background:#64748b;padding:3px 9px;font-size:12px">Retry failed (${Q.filter((x) => x.status === 'failed').length})</button><button id="sb-jq-clear" style="${BTN};background:#94a3b8;padding:3px 9px;font-size:12px">Remove done / failed</button></div>
      <table style="width:100%;border-collapse:collapse;font-size:12px;margin-top:4px"><tr style="text-align:left;background:#f1f5f9"><th>When</th><th>Env</th><th>Product</th><th>Kind</th><th>Summary</th><th>Error</th><th>Status</th><th>Ticket</th><th></th></tr>
      ${Q.slice().reverse().map((j) => `<tr style="border-top:1px solid #e2e8f0;vertical-align:top"><td>${new Date(j.at).toISOString().slice(5, 16).replace('T', ' ')}</td><td>${escH(j.env)}</td><td>${escH(j.product)}<br><span style="color:#64748b">${escH((j.manu || '') + ' ' + (j.pid || ''))}</span></td><td>${escH(j.kind)}</td><td>${escH(j.summary)}</td><td style="max-width:260px">${escH(j.error)}</td><td style="color:${col[j.status] || '#333'};font-weight:700">${escH(j.status)}${j.tries ? ' (' + j.tries + '×)' : ''}${j.lastError ? '<br><span style="font-weight:400;color:#991b1b">' + escH(j.lastError.slice(0, 120)) + '</span>' : ''}</td><td>${j.ticket ? `<a href="${escH(j.url || '')}" target="_blank" style="color:#2563eb">${escH(j.ticket)}</a>` : ''}</td><td>${j.status !== 'done' ? `<button class="sb-jq-one" data-id="${escH(j.id)}" style="${BTN};background:#0052cc;padding:2px 7px;font-size:11px">Create</button> <button class="sb-jq-edit" data-id="${escH(j.id)}" style="${BTN};background:#475569;padding:2px 7px;font-size:11px">Review</button> <button class="sb-jq-del" data-id="${escH(j.id)}" style="${BTN};background:#94a3b8;padding:2px 7px;font-size:11px">✕</button>` : ''}</td></tr>`).join('')}</table>`;
  }
  function jiraQueueWire(card, rerender) {
    const run = async (opts) => { const r = await jiraQueueRun(opts); banner('Jira', `${r.done} created / updated, ${r.failed} failed${r.busy ? ' (already running)' : ''}`); rerender(); };
    const q = (sel) => card.querySelector(sel); if (q('#sb-jq-run')) q('#sb-jq-run').onclick = () => run({ force: false }); if (q('#sb-jq-retry')) q('#sb-jq-retry').onclick = () => run({ force: true });
    if (q('#sb-jq-clear')) q('#sb-jq-clear').onclick = () => { S.set('jiraQueue', S.get('jiraQueue', []).filter((x) => x.status === 'pending' || x.status === 'running')); rerender(); };
    card.querySelectorAll('.sb-jq-one').forEach((b) => (b.onclick = async () => { const Q = S.get('jiraQueue', []); Q.forEach((x) => { if (x.id === b.dataset.id) { x.status = 'pending'; x.nextAt = 0; } else if (x.status === 'pending') { x.hold = true; x.status = 'held'; } }); S.set('jiraQueue', Q); const r = await jiraQueueRun({ force: true }); const Q2 = S.get('jiraQueue', []); Q2.forEach((x) => { if (x.status === 'held') x.status = 'pending'; }); S.set('jiraQueue', Q2); banner('Jira', `${r.done} created / updated, ${r.failed} failed`); rerender(); }));
    card.querySelectorAll('.sb-jq-edit').forEach((b) => (b.onclick = () => { const j = S.get('jiraQueue', []).find((x) => x.id === b.dataset.id); if (!j) return; const ov = document.getElementById('sb-issues'); if (ov) ov.remove(); showJiraDialog(j.entry); }));
    card.querySelectorAll('.sb-jq-del').forEach((b) => (b.onclick = () => { S.set('jiraQueue', S.get('jiraQueue', []).filter((x) => x.id !== b.dataset.id)); rerender(); }));
  }
  async function jiraQueueOnLoad() {       // auto mode: pending jobs left over (no session, Jira down) are tried again on the next page load, at most once per 10 min
    try { const c = JCFG(); if (c.mode !== 'auto') return; const Q = S.get('jiraQueue', []); if (!Q.some((x) => x.status === 'pending' && (!x.nextAt || Date.now() >= x.nextAt))) return; if (Date.now() - +(S.get('jiraQueueAt', 0)) < 600000) return; S.set('jiraQueueAt', Date.now()); await jiraQueueRun(); } catch (e) { console.log('[SB4] jira queue', e.message); }
  }
  // ---- searchable picker: a text box that filters a list (and asks Jira as you type when a fetcher is given) ----
  function jPick(host, o) {               // o: { options:[{id,name}], value:id, text, onChange(id,name), fetch(q)=>Promise<options>, placeholder, allowFree }
    host.innerHTML = ''; host.style.position = 'relative'; let opts = o.options || []; let cur = { id: o.value || '', name: o.text || (opts.find((x) => x.id === o.value) || {}).name || (o.allowFree ? o.value || '' : '') };
    const inp = document.createElement('input'); inp.value = cur.name; inp.placeholder = o.placeholder || 'type to search…'; inp.style.cssText = SEL + ';margin:0'; inp.autocomplete = 'off';
    const list = document.createElement('div'); list.style.cssText = 'position:absolute;left:0;right:0;top:100%;z-index:5;background:#fff;border:1px solid #cbd5e1;border-radius:8px;box-shadow:0 8px 24px rgba(0,0,0,.18);max-height:200px;overflow:auto;display:none;font-size:12px';
    host.append(inp, list); let t = null, seq = 0;
    const show = (items) => { list.innerHTML = ''; if (!items.length) { list.style.display = 'none'; return; } items.slice(0, 60).forEach((it) => { const row = document.createElement('div'); row.textContent = it.name; row.title = it.id; row.style.cssText = 'padding:5px 8px;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis' + (it.id === cur.id ? ';background:#eef2ff' : ''); row.onmouseenter = () => (row.style.background = '#eef2ff'); row.onmouseleave = () => (row.style.background = it.id === cur.id ? '#eef2ff' : ''); row.onmousedown = (ev) => { ev.preventDefault(); pick(it); }; list.appendChild(row); }); list.style.display = 'block'; };
    const pick = (it) => { cur = it; inp.value = it.name; list.style.display = 'none'; inp.style.borderColor = '#cbd5e1'; o.onChange && o.onChange(it.id, it.name); };
    const filter = (q) => { const ql = q.toLowerCase().trim(); const m = opts.filter((x) => !ql || x.name.toLowerCase().includes(ql) || String(x.id).toLowerCase().includes(ql)); show(ql && o.allowFree && !m.some((x) => x.name.toLowerCase() === ql) ? [{ id: q.trim(), name: q.trim() + '  (use as typed)' }].concat(m) : m); };
    inp.oninput = () => { const q = inp.value; if (o.allowFree) { cur = { id: q.trim(), name: q.trim() }; o.onChange && o.onChange(cur.id, cur.name); } else inp.style.borderColor = '#f59e0b'; filter(q); if (o.fetch && q.trim().length >= 2) { clearTimeout(t); const my = ++seq; t = setTimeout(async () => { try { const r = await o.fetch(q.trim()); if (my !== seq) return; r.forEach((x) => { if (!opts.some((y) => y.id === x.id)) opts.push(x); }); filter(inp.value); } catch (e) {} }, 350); } };
    inp.onfocus = () => { try { inp.select(); } catch (e) {} filter(''); }; inp.onblur = () => setTimeout(() => { list.style.display = 'none'; if (!o.allowFree && inp.value.trim() !== cur.name) { inp.value = cur.name; inp.style.borderColor = '#cbd5e1'; } }, 150);
    inp.onkeydown = (ev) => { if (ev.key === 'Enter') { ev.preventDefault(); const first = list.querySelector('div'); if (first && list.style.display !== 'none') { const ql = inp.value.toLowerCase().trim(); const it = opts.find((x) => x.name.toLowerCase().includes(ql)) || null; if (it) pick(it); } } if (ev.key === 'Escape') list.style.display = 'none'; };
    return { get: () => cur, set: (it) => pick(it), setOptions: (arr) => { opts = arr; if (cur.id && !cur.name) { const f = opts.find((x) => x.id === cur.id); if (f) { cur = f; inp.value = f.name; } } }, add: (arr) => arr.forEach((x) => { if (!opts.some((y) => y.id === x.id)) opts.push(x); }) };
  }
  function showJiraDialog(entry) {
    const old = document.getElementById('sb-dialog'); if (old) old.remove();
    const d = jiraDraft(entry); const c0 = JCFG(); const ov = document.createElement('div'); ov.id = 'sb-dialog'; ov.style.cssText = CSSOV;
    const card = document.createElement('div'); card.style.cssText = CARD + ';width:min(860px,97vw);max-height:94vh;overflow:auto'; ov.appendChild(card); document.body.appendChild(ov);
    const L = (label, id, w) => `<label style="display:flex;flex-direction:column;gap:2px;font-size:11px;color:#334155${w ? ';grid-column:span ' + w : ''}">${label}<div id="${id}"></div></label>`;
    const inp = (id, v) => `<input id="${id}" value="${escH(v)}" style="${SEL};margin:0">`;
    card.innerHTML = `<div style="display:flex;justify-content:space-between;align-items:flex-start"><div><div style="font-size:17px;font-weight:700">🎫 Jira ticket for this failure</div><div style="color:#64748b;font-size:12px">${escH(c0.project)} <b>${escH(d.issueType)}</b> in the team's format. Every field can be changed – type in a box to search Jira (people, epics). The Epic is chosen by you, as in Jira. An open ticket for the same Prod ID is updated, not duplicated.</div></div><button id="sb-close" style="background:none;border:0;font-size:20px;cursor:pointer">×</button></div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-top:10px">
        ${L('Issue type', 'sb-jp-type')}${L('Org ID / Distributor', 'sb-jp-org')}${L('Manufacturer', 'sb-jp-manu')}${L('Line of Business', 'sb-jp-lob')}
        <label style="display:flex;flex-direction:column;gap:2px;font-size:11px;color:#334155">Insurer (title)${inp('sb-j-ins', d.insurerTitle)}</label>
        <label style="display:flex;flex-direction:column;gap:2px;font-size:11px;color:#334155">Insurer label${inp('sb-j-lab', d.insurerLabel)}</label>
        <label style="display:flex;flex-direction:column;gap:2px;font-size:11px;color:#334155">Prod ID${inp('sb-j-pid', d.pid)}</label>
        <label style="display:flex;flex-direction:column;gap:2px;font-size:11px;color:#334155">Product name${inp('sb-j-name', d.name)}</label>
        ${L('Assignee', 'sb-jp-asg')}${L('Product Owner', 'sb-jp-own')}${L('Sprint', 'sb-jp-sprint')}${L('Epic (optional – as in Jira)', 'sb-jp-parent')}
        ${L('Priority', 'sb-jp-pri')}${L('Environment', 'sb-jp-env')}${L('RCA category', 'sb-jp-rca')}
        <label style="display:flex;flex-direction:column;justify-content:flex-end;gap:3px;font-size:11px;color:#334155"><span><input type="checkbox" id="sb-j-shot" ${c0.screenshot !== false ? 'checked' : ''}> attach screenshot</span><span><input type="checkbox" id="sb-j-api" ${c0.apiFile !== false ? 'checked' : ''}> attach the failing API payload(s) (${(d.calls || []).length} with an error for this product${c0.consoleSearch ? ' + console' : ''})</span></label>
      </div>
      <label style="display:block;margin-top:8px;font-size:11px;color:#334155">Summary ${inp('sb-j-sum', d.summary)}</label>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:6px">
        <label style="font-size:11px;color:#334155">Error shown on the screen (UI)<textarea id="sb-j-uierr" style="${SEL};margin:0;height:64px">${escH(d.uiError)}</textarea></label>
        <label style="font-size:11px;color:#334155">Error in the response (console – 1SB / manufacturer API)<textarea id="sb-j-err" style="${SEL};margin:0;height:64px">${escH(d.apiError)}</textarea></label>
      </div>
      <div style="display:flex;gap:10px;align-items:center;margin-top:6px;font-size:11px"><span style="color:#334155">Request id</span><input id="sb-j-rid" value="${escH(d.reqId)}" placeholder="none found in the responses" style="${SEL};margin:0;width:260px"><span style="color:${d.byApi ? '#166534' : '#b45309'}">${d.jid ? 'Journey ' + escH(d.jid) + ' · ' : ''}Prod ID / insurer / name ${d.byApi ? 'from the journey\'s API traffic (Network tab)' : 'from the rules master – check them'} · Org ID from the journey id · Environment from the portal address · ${(d.calls || []).length} failing call(s) for this product</span></div>
      <div id="sb-j-dup" style="font-size:12px;color:#64748b;margin-top:6px">Checking Jira for an existing ticket and the epic…</div>
      <div style="font-size:11px;color:#64748b;margin-top:4px">Always: Team Life Insurance Team · Planned PI PI#1 · Development Approach Agent · Labels org + insurer label · Distributor Id / Manufacturer Id · <b>Assignee and Product Owner are yours to choose</b></div>
      <pre id="sb-j-log" style="margin-top:8px;font-size:11px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:8px;max-height:110px;overflow:auto;white-space:pre-wrap"></pre>
      <div style="display:flex;gap:8px;margin-top:8px;align-items:center"><button id="sb-j-go" style="${BTN};background:#0052cc">Search &amp; create / update</button><button id="sb-j-set" style="${BTN};background:#64748b">Jira settings</button><span id="sb-j-res" style="font-size:12px"></span></div>`;
    card.querySelector('#sb-close').onclick = () => ov.remove(); card.querySelector('#sb-j-set').onclick = () => { ov.remove(); showJiraSettings(() => showJiraDialog(entry)); };
    const P = {}; const byId = (id) => card.querySelector('#' + id);
    P.type = jPick(byId('sb-jp-type'), { options: [{ id: 'Bug', name: 'Bug' }, { id: 'Epic', name: 'Epic' }], value: d.issueType, onChange: (v) => { d.issueType = v; } });
    P.org = jPick(byId('sb-jp-org'), { options: [...new Set([d.org].concat(Object.keys(J_DIST)))].filter(Boolean).map((k) => ({ id: k, name: k })), value: d.org, allowFree: true, onChange: (v) => { d.org = v; reSum(); } });
    P.manu = jPick(byId('sb-jp-manu'), { options: Object.keys(J_MANU).map((k) => ({ id: k, name: k })), value: d.manu, onChange: (v) => { d.manu = v; } });
    P.lob = jPick(byId('sb-jp-lob'), { options: Object.keys(J_LOB).map((k) => ({ id: k, name: k })), value: d.lob, onChange: (v) => { d.lob = v; } });
    const people = Object.entries(J_PEOPLE).map(([n, id]) => ({ id, name: n }));
    P.asg = jPick(byId('sb-jp-asg'), { options: [{ id: '', name: '(unassigned)' }].concat(people), value: d.assigneeId, text: d.assignee || '', fetch: jiraUsers, placeholder: 'choose – type a name…', onChange: (id, n) => { d.assigneeId = id; d.assignee = id ? n : ''; } });
    P.own = jPick(byId('sb-jp-own'), { options: [{ id: '', name: '(none)' }].concat(people), value: d.ownerId, text: d.owner || '', fetch: jiraUsers, placeholder: 'choose – type a name…', onChange: (id, n) => { d.ownerId = id; d.owner = id ? n : ''; } });
    P.sprint = jPick(byId('sb-jp-sprint'), { options: [{ id: '', name: '(active sprint – resolved on create)' }], value: '', onChange: (id, n) => { d.sprintId = id; d.sprintName = id ? n : ''; } });
    P.parent = jPick(byId('sb-jp-parent'), { options: [{ id: '', name: '(none)' }], value: '', fetch: jiraEpics, placeholder: 'type to search epics…', onChange: (id, n) => { d.parentKey = id; d.parentName = n; } });
    (async () => { try { const ep = await jiraEpics(''); P.parent.add(ep); const l = byId('sb-jp-parent').parentElement; if (l && l.firstChild && l.firstChild.nodeType === 3) l.firstChild.textContent = `Epic (optional – ${ep.length} in ${JCFG().project})`; } catch (e) {} })();
    P.pri = jPick(byId('sb-jp-pri'), { options: ['Highest', 'High', 'Medium', 'Low'].map((k) => ({ id: k, name: k })), value: d.priority, onChange: (v) => { d.priority = v; } });
    P.env = jPick(byId('sb-jp-env'), { options: Object.keys(J_ENVS).map((k) => ({ id: k, name: k })), value: d.envOpt, onChange: (v) => { d.envOpt = v; } });
    P.rca = jPick(byId('sb-jp-rca'), { options: [{ id: '', name: '(none)' }].concat(Object.keys(J_RCA).map((k) => ({ id: k, name: k }))), value: d.rca, onChange: (v) => { d.rca = v; } });
    const reSum = () => { byId('sb-j-sum').value = `${d.org}_${byId('sb-j-ins').value.trim()}_ProdID_${byId('sb-j-pid').value.trim()}_${byId('sb-j-name').value.trim()}`; };
    ['sb-j-ins', 'sb-j-pid', 'sb-j-name'].forEach((id) => (byId(id).oninput = reSum));
    // live lookups: people list, sprints, duplicate / epic check
    (async () => { try { const u = await jiraUsers(''); P.asg.add(u); P.own.add(u); } catch (e) {} })();
    (async () => { try { const sp = await jiraSprints(); P.sprint.setOptions([{ id: '', name: '(none)' }].concat(sp.map((x) => ({ id: String(x.id), name: x.name + ' (' + x.state + ')' })))); const a = sp.find((x) => x.state === 'active'); if (a && (c0.sprint || 'active') === 'active') P.sprint.set({ id: String(a.id), name: a.name + ' (active)' }); } catch (e) {} })();
    (async () => { const el = byId('sb-j-dup'); try { const dd = Object.assign({}, d); const hit = await jiraFind(dd); const parts = [];
        if (hit) parts.push(`<b style="color:#b45309">${escH(hit.key)}</b> "${escH((hit.fields.summary || '').slice(0, 70))}" (${escH((hit.fields.status || {}).name || '')}) exists for this Prod ID – it will be <b>updated</b> (comment + attachments)`); else parts.push('no open ticket for this Prod ID under ' + escH(d.org) + ' – a new ' + escH(d.issueType) + ' will be created');
        if (dd.productEpic && d.issueType !== 'Epic') parts.push(`epic of this product: <b>${escH(dd.productEpic.key)}</b> ${escH((dd.productEpic.summary || '').slice(0, 60))} <a href="#" id="sb-j-useepic" style="color:#2563eb">use it</a>`);
        if (dd.related && dd.related.length) parts.push('related: ' + escH(dd.related.join(', ')));
        el.innerHTML = parts.join(' · '); const ue = el.querySelector('#sb-j-useepic'); if (ue) ue.onclick = (ev) => { ev.preventDefault(); P.parent.set({ id: dd.productEpic.key, name: dd.productEpic.key + ' – ' + (dd.productEpic.summary || '') }); }; } catch (e) { el.innerHTML = '<span style="color:#b91c1c">Jira check failed: ' + escH(e.message) + '</span> – sign in at ' + escH(JCFG().site) + ' (or set an API token in Jira settings)'; } })();
    card.querySelector('#sb-j-go').onclick = async () => {
      const g = (id) => byId(id).value; const logEl = byId('sb-j-log'); const log = (m) => { logEl.textContent += m + '\n'; logEl.scrollTop = 1e6; };
      Object.assign(d, { insurerTitle: g('sb-j-ins').trim(), insurerLabel: g('sb-j-lab').trim(), pid: g('sb-j-pid').trim(), name: g('sb-j-name').trim(), summary: g('sb-j-sum').trim(), apiError: g('sb-j-err'), uiError: g('sb-j-uierr'), reqId: g('sb-j-rid').trim(), error: g('sb-j-err') || g('sb-j-uierr') });
      S.set('jira', Object.assign(JCFG(), { screenshot: byId('sb-j-shot').checked, apiFile: byId('sb-j-api').checked, org: d.org, issueType: d.issueType }));
      byId('sb-j-go').disabled = true; logEl.textContent = '';
      try { const r = await jiraSubmit(d, log); byId('sb-j-res').innerHTML = `<b style="color:#166534">${r.action}</b> <a href="${escH(r.url)}" target="_blank" style="color:#2563eb">${escH(r.key)}</a>${r.parent ? ' under ' + escH(r.parent) : ''}`;
        logEl.textContent += `\nProd ID | Product | LOB | Ticket\n${r.pid} | ${r.product} | ${r.lob} | ${r.url}\n`; }
      catch (e) { byId('sb-j-res').innerHTML = `<b style="color:#b91c1c">${escH(e.message)}</b>`; if (e.status === 401 || e.status === 403 || /network|did not answer/.test(e.message)) log('Jira refused the call. Open ' + JCFG().site + ' in another tab and sign in, then press the button again – or create an API token at https://id.atlassian.com/manage-profile/security/api-tokens and put it in Jira settings (works everywhere).'); }
      finally { byId('sb-j-go').disabled = false; }
    };
  }
  function showJiraSettings(back) {
    const old = document.getElementById('sb-dialog'); if (old) old.remove();
    const c = JCFG(); const ov = document.createElement('div'); ov.id = 'sb-dialog'; ov.style.cssText = CSSOV;
    const card = document.createElement('div'); card.style.cssText = CARD + ';width:min(560px,96vw)'; ov.appendChild(card); document.body.appendChild(ov);
    card.innerHTML = `<div style="display:flex;justify-content:space-between;align-items:flex-start"><div><div style="font-size:17px;font-weight:700">🎫 Jira settings</div><div style="color:#64748b;font-size:12px">Tickets are created with <b>your</b> Jira login (the session of this browser); an API token is only needed when the session is not available.</div></div><button id="sb-close" style="background:none;border:0;font-size:20px;cursor:pointer">×</button></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:10px;font-size:12px">
        <label>Jira site <input id="sb-js-site" value="${escH(c.site)}" style="${SEL};margin:0"></label>
        <label>Project key <input id="sb-js-proj" value="${escH(c.project)}" style="${SEL};margin:0"></label>
        <label>Default Org ID / Distributor <select id="sb-js-org" style="${SEL};margin:0">${Object.keys(J_DIST).map((o) => `<option ${o === c.org ? 'selected' : ''}>${escH(o)}</option>`).join('')}</select></label>
        <label>Status after creation <input id="sb-js-status" value="${escH(c.statusAfter || 'Backlog')}" style="${SEL};margin:0"></label>
        <label style="grid-column:1/3">Status path – the workflow steps walked from Draft when the status is not reachable in one step (separate with &gt;) <input id="sb-js-path" value="${escH(c.statusPath || J_STATUS_PATH)}" style="${SEL};margin:0"></label>
        <label>Issue type <select id="sb-js-type" style="${SEL};margin:0"><option ${c.issueType !== 'Epic' ? 'selected' : ''}>Bug</option><option ${c.issueType === 'Epic' ? 'selected' : ''}>Epic</option></select></label>
        <label>Board id for the sprint (INSURANCE = 42) <input id="sb-js-board" value="${escH(c.boardId || 42)}" style="${SEL};margin:0"></label>
        <label>Sprint <select id="sb-js-sprint" style="${SEL};margin:0"><option value="active" ${(c.sprint || 'active') === 'active' ? 'selected' : ''}>active sprint of the board</option><option value="none" ${c.sprint === 'none' ? 'selected' : ''}>none</option></select></label>
        <label>Environment field default <select id="sb-js-env" style="${SEL};margin:0">${Object.keys(J_ENVS).map((k) => `<option ${(c.envOpt || 'NA') === k ? 'selected' : ''}>${k}</option>`).join('')}</select></label>
        <label>When a journey fails <select id="sb-js-mode" style="${SEL};margin:0"><option value="ask" ${c.mode === 'ask' ? 'selected' : ''}>ask – show a "Create Jira ticket" button</option><option value="queue" ${c.mode === 'queue' ? 'selected' : ''}>prepare – the ticket is written and parked; you create it from Results → Tickets</option><option value="auto" ${c.mode === 'auto' ? 'selected' : ''}>auto – create / update the ticket at once (through the policy below)</option><option value="off" ${c.mode === 'off' ? 'selected' : ''}>off</option></select></label>
        <label>Automatic tickets on <select id="sb-js-aenv" style="${SEL};margin:0"><option value="nonprod" ${(c.autoEnvs || 'nonprod') === 'nonprod' ? 'selected' : ''}>demo / dev / test / UAT portals (never production)</option><option value="1sb" ${c.autoEnvs === '1sb' ? 'selected' : ''}>1SB demo / dev / test only</option><option value="all" ${c.autoEnvs === 'all' ? 'selected' : ''}>every portal, production included</option></select></label>
        <label>Failure kinds filed automatically <select id="sb-js-akind" style="${SEL};margin:0"><option value="product" ${(c.autoKinds || 'product') === 'product' ? 'selected' : ''}>insurer / product failures only</option><option value="product,gateway" ${c.autoKinds === 'product,gateway' ? 'selected' : ''}>insurer / product + gateway errors</option><option value="product,gateway,portal" ${c.autoKinds === 'product,gateway,portal' ? 'selected' : ''}>+ portal / master-data problems</option><option value="all" ${c.autoKinds === 'all' ? 'selected' : ''}>everything except sign-in / OTP / payment</option></select></label>
        <label>Max automatic tickets per hour <input id="sb-js-max" type="number" min="1" max="50" value="${escH(c.maxPerHour || 5)}" style="${SEL};margin:0"></label>
        <label>Same product + error not filed again within (hours) <input id="sb-js-dedupe" type="number" min="1" max="720" value="${escH(c.dedupeHours || 24)}" style="${SEL};margin:0"></label>
        <label>Atlassian e-mail (token login, optional) <input id="sb-js-email" value="${escH(c.email)}" style="${SEL};margin:0"></label>
        <label>API token (optional, stays on this PC) <input id="sb-js-token" type="password" value="${escH(c.token)}" style="${SEL};margin:0"></label>
        <label style="grid-column:1/3">API-log console – search URL with {reqId} (optional; the manufacturer payload of the failing request is fetched and attached) <input id="sb-js-cs" value="${escH(c.consoleSearch || '')}" placeholder="https://console…/api/logs?requestId={reqId}" style="${SEL};margin:0"></label>
        <label style="grid-column:1/3">API-log console – payload download URL with {id} (optional) <input id="sb-js-cd" value="${escH(c.consoleDownload || '')}" placeholder="https://console…/api/logs/{id}/payload" style="${SEL};margin:0"></label>
      </div>
      <div style="display:flex;gap:8px;margin-top:10px;align-items:center"><button id="sb-js-save" style="${BTN};background:#0052cc">Save</button><button id="sb-js-test" style="${BTN};background:#64748b">Test connection</button><span id="sb-js-res" style="font-size:12px"></span></div>`;
    card.querySelector('#sb-close').onclick = () => ov.remove();
    const read = () => ({ site: card.querySelector('#sb-js-site').value.trim().replace(/\/+$/, ''), project: card.querySelector('#sb-js-proj').value.trim().toUpperCase(), org: card.querySelector('#sb-js-org').value, mode: card.querySelector('#sb-js-mode').value, statusAfter: card.querySelector('#sb-js-status').value.trim() || 'Backlog', statusPath: card.querySelector('#sb-js-path').value.trim() || J_STATUS_PATH, autoEnvs: card.querySelector('#sb-js-aenv').value, autoKinds: card.querySelector('#sb-js-akind').value, maxPerHour: Math.max(1, +card.querySelector('#sb-js-max').value || 5), dedupeHours: Math.max(1, +card.querySelector('#sb-js-dedupe').value || 24), email: card.querySelector('#sb-js-email').value.trim(), token: card.querySelector('#sb-js-token').value.trim(), consoleSearch: card.querySelector('#sb-js-cs').value.trim(), consoleDownload: card.querySelector('#sb-js-cd').value.trim(), issueType: card.querySelector('#sb-js-type').value, boardId: +card.querySelector('#sb-js-board').value || 42, sprint: card.querySelector('#sb-js-sprint').value, envOpt: card.querySelector('#sb-js-env').value });
    card.querySelector('#sb-js-save').onclick = () => { S.set('jira', Object.assign(JCFG(), read())); ov.remove(); if (back) back(); };
    card.querySelector('#sb-js-test').onclick = async () => { S.set('jira', Object.assign(JCFG(), read())); const r = card.querySelector('#sb-js-res'); r.textContent = 'checking…'; try { const me = await jiraMe(); r.innerHTML = `<b style="color:#166534">OK – ${escH(me.displayName || me.emailAddress || '')}</b>`; } catch (e) { r.innerHTML = `<b style="color:#b91c1c">${escH(e.message)}</b> – sign in at ${escH(JCFG().site)} in another tab, or enter an API token`; } };
  }
  function jiraTableHtml() {              // Prod ID | Product | LOB | Epic link (for the Results dialog)
    const L = S.get('jiraLog', []); if (!L.length) return '';
    return `<div style="margin-top:12px;font-weight:700">Jira tickets (${L.length})</div><table style="width:100%;border-collapse:collapse;font-size:12px;margin-top:4px"><tr style="text-align:left;background:#f1f5f9"><th>When</th><th>Prod ID</th><th>Product</th><th>LOB</th><th>Insurer</th><th>Ticket</th><th>Type / parent</th><th>Action</th></tr>${L.slice().reverse().map((r) => `<tr style="border-top:1px solid #e2e8f0"><td>${r.at.slice(5, 16).replace('T', ' ')}</td><td>${escH(r.pid)}</td><td>${escH(r.product)}</td><td>${escH(r.lob)}</td><td>${escH(r.insurer)}</td><td><a href="${escH(r.url)}" target="_blank" style="color:#2563eb">${escH(r.key)}</a></td><td>${escH(r.type || 'Epic')}${r.parent ? ' › ' + escH(r.parent) : ''}</td><td>${escH(r.action)}</td></tr>`).join('')}</table>`;
  }
  /* ---------------- UI: start dialog, product picker, panel, results ---------------- */
  const CSSOV = 'position:fixed;inset:0;z-index:2147483000;background:rgba(2,6,23,.55);display:flex;align-items:center;justify-content:center;font:14px/1.5 system-ui,sans-serif';
  const CARD = 'background:#fff;color:#0f172a;border-radius:14px;padding:20px 22px;width:min(560px,94vw);max-height:90vh;overflow:auto;box-shadow:0 20px 60px rgba(0,0,0,.35)';
  const BTN = 'background:#2563eb;color:#fff;border:0;border-radius:8px;padding:8px 13px;cursor:pointer;font-size:13px;font-weight:600';
  const SEL = 'width:100%;padding:7px;border:1px solid #cbd5e1;border-radius:8px;font-size:14px;margin:3px 0 10px;box-sizing:border-box';
  const CATS = () => S.get('catalog', {});          // learned per env/lob: { 'demo|Life Term': { categories:[], products:{cat:[...]}} }
  const LOBS_ASSISTED = ['Life Term', 'Health', 'Health V-2', 'Investment', 'Motor Insurance', 'Embedded', 'NBFC'];
  const LOBS_DIY = ['3-Click', 'Life Term', 'Health', 'Health V-2', 'Investment', 'Motor Insurance', 'Embedded'];

  /* ---------- built-in product catalogue (from the demo runs; merged with plans the script sees on quote pages) ---------- */
  const CATALOG = {
    'Life Term': { 'All plans': ['Tata AIA Maha Raksha Supreme Select', 'Tata AIA Sampoorna Raksha Promise', 'ICICI Pru iProtect Smart Plus', 'HDFC Life Click 2 Protect Supreme Plus', 'Bajaj Life eTouch II'] },
    Health: {
      Retail: ['Medicare Select Smart', 'Medicare Select', 'Medicare Select Elite', 'Medicare Premier', 'ReAssure 2.0 Bronze+', 'ReAssure 2.0 Platinum+', 'ReAssure 2.0 Titanium+',
        'Optima Secure', 'Optima Secure Plus', 'Care Supreme', 'Care Supreme Direct', 'Care Advantage (TD)', 'Ultimate Care', 'HealthGain (Power)', 'HealthGain (Prime)',
        'Health Infinity (More Time)', 'Health Infinity (More Cover)', 'Health Infinity (More Global)', 'Elevate', 'ACTIV ONE MAX', 'ACTIV ONE MAX+', 'Star Health Assure',
        'Super Star Flexi - Preferred', 'Super Star Flexi - Secure', 'Comprehensive', 'Prime Protect', 'Prime Advantage', 'Prime Active', 'Lifetime Health India', 'Lifetime Health Global'],
      Group: [], 'Top Up': [],
    },
    'Health V-2': { Retail: ['Prime Protect'], Group: [], 'Top Up': [] },
    Investment: {
      'Guaranteed Plans': ['GIFT Select', 'ICICI Pru GIFT Pro', 'ICICI PRU GIFT LONG TERM', 'ICICI Pru Assured Savings Insurance Plan', 'Guaranteed Income For Tomorrow', 'Nishchit Aayush',
        'Tata AIA Fortune Guarantee Plus', 'SBI Life Smart Platina Advantage', 'SBI Life Smart Platina Supreme', 'SBI Life Smart Platina Plus', 'SBI Life Smart Platina Assure', 'Sanchay Plus', 'Click 2 Achieve'],
      'Non-Guaranteed Plans': ['ICICI Pru Gold', 'Gold', 'Future Perfect', 'Savings Suraksha'], 'Market Linked Returns': ['Signature'], 'Retirement Plans': [],
    },
    'Motor Insurance': { 'Car (new)': ['IndusInd – BUNDLED', 'IndusInd – THIRD PARTY'], 'Car (renewal)': [], 'Bike (new)': [], 'Bike (renewal)': [] },
    Embedded: { 'Group Term': ['Super Protect Credit'], 'Group Health': ['Group Care 360', 'Infinity', "Women's Cancer Shield"] },
    NBFC: { 'All plans': [] }, '3-Click': { 'All plans': [] },
  };
  // what happened on demo (shown next to each product so testers know what to expect)
  const DEMO_NOTES = {
    'ICICI Pru iProtect Smart Plus': '✓ passed', 'Tata AIA Sampoorna Raksha Promise': '✓ passed', 'Tata AIA Maha Raksha Supreme Select': '✓ passed (income ≥ 15 L)',
    'Bajaj Life eTouch II': '✓ passed (OTP step uses the test OTP 234567)', 'HDFC Life Click 2 Protect Supreme Plus': '✗ "FLS Code of Agent" dropdown has no options on demo (agent hierarchy not configured)',
    'Medicare Select Smart': '✓ passed', 'Medicare Select': '✓ passed', 'Medicare Select Elite': '✓ passed', 'Medicare Premier': '✓ passed',
    'ReAssure 2.0 Bronze+': '✓ passed', 'ReAssure 2.0 Titanium+': '✓ passed', 'ReAssure 2.0 Platinum+': 'not always quoted', 'Optima Secure': '✗ server error at submit',
    'Prime Protect': '✗ insurer: invalid AgentId', 'Prime Advantage': '✗ insurer: invalid AgentId', 'Prime Active': '✗ insurer: invalid AgentId',
    'Lifetime Health India': '✗ insurer: invalid AgentId', 'Lifetime Health Global': '✗ insurer: invalid AgentId',
    'GIFT Select': '✓ passed', 'ICICI Pru GIFT Pro': '✓ passed', 'ICICI PRU GIFT LONG TERM': '✓ passed', 'ICICI Pru Assured Savings Insurance Plan': '✓ passed', 'Nishchit Aayush': '✓ passed',
    'Tata AIA Fortune Guarantee Plus': '✓ passed', 'SBI Life Smart Platina Advantage': '✗ proposal-fetch error', 'SBI Life Smart Platina Supreme': '✗ proposal-fetch error',
    'SBI Life Smart Platina Plus': '✗ proposal-fetch error', 'SBI Life Smart Platina Assure': '✗ proposal-fetch error', 'Guaranteed Income For Tomorrow': '✗ proposal-fetch error (HDFC)',
    'Sanchay Plus': '✗ proposal-fetch error', 'Click 2 Achieve': '✗ FLS code has no options', 'IndusInd – BUNDLED': 'CKYC step', 'Group Care 360': 'OTP step', 'SBI Life Smart Shield Premier': '✗ dev: "Unique plan not found"',
  };
  const LOB_HELP = {
    'Life Term': 'Term life cover. No category – pick a plan or let the quote page list them.',
    Health: 'Category = the Retail / Group / Top Up tab on the first page.',
    'Health V-2': 'New health app. Category = Retail / Group / Top Up.',
    Investment: 'Savings plans. Category = the plan-type card shown after the first page.',
    'Motor Insurance': 'Car or Bike; "new" uses the new-vehicle wizard (no registration lookup), "renewal" uses a test registration number.',
    Embedded: 'Loan-protection bundles. Category = the section on the plans page.',
    NBFC: 'Requires you to sign in first – the script waits on the login page.',
    '3-Click': 'DIY quick-buy app.',
  };
  const RULE_CAT = { nonparticipating: 'Guaranteed Plans', participating: 'Non-Guaranteed Plans', ulip: 'Market Linked Returns' };
  function ruleCategory(r, lob) {       // the category (plan-type card / tab / section) a product of the rules master belongs to, per line of business
    if (!r) return ''; const g = String(r.grp || '').toLowerCase(); const t = (String(r.name || '') + ' ' + String(r.mname || '') + ' ' + String(r.id || '')).toLowerCase(); lob = lob || r.lob;
    if (r.lob === 'Investment') { if (g === 'annuity') return 'Retirement Plans – Annuity'; if (g === 'pension') return 'Retirement Plans – Pension'; return RULE_CAT[String((r.a && r.a.type) || '').toLowerCase()] || ''; }
    if (r.lob === 'Health') return /top\s*-?\s*up|tpup|topup|super top/.test(t) ? 'Top Up' : /\bgroup\b|\bgmc\b|\bgm\b/.test(t) ? 'Group' : 'Retail';
    if (r.lob === 'Embedded') return /term/i.test(g) ? 'Group Term' : /h/i.test(g) ? 'Group Health' : '';
    if (r.lob === 'Motor Insurance') { const pt = String((r.a && r.a.policyType) || '').toLowerCase(); const bike = /2w/i.test(String(r.id || '')); return (bike ? 'Bike' : 'Car') + (pt === 'new' ? ' (new)' : ' (renewal)'); }
    if (r.lob === 'Life Term') return 'All plans';      // Life Term / NBFC / 3-Click have no category on the portal: the plan list is the whole catalog
    return '';
  }
  function catalogFor(env, lob) {
    const base = CATALOG[lob] || { 'All plans': [] }; const learned = Object.assign({}, (env !== 'demo' && (CATS()['demo|' + lob] || {}).products) || {}, (CATS()[env + '|' + lob] || {}).products || {});
    const out = {}; Object.keys(base).forEach((k) => (out[k] = base[k].slice()));
    Object.entries(learned).forEach(([k, list]) => { const key = k === 'All' ? (Object.keys(out)[0] || 'All plans') : k; out[key] = [...new Set((out[key] || []).concat(list.map((n) => n.replace(/\s*\(.*?\)\s*₹.*$/, '').trim())))]; });
    // products from the rules master that no quote page has shown yet
    const want = RULE_LOB[lob] || lob; const extra = Object.values(RULES).filter((r) => r.lob === want && !/^(new|comprehensive|own damage|third party)/i.test(r.name)).map((r) => r.mname || r.name);
    if (extra.length) { const known = new Set(Object.values(out).flat().map((n) => nkey(n))); const miss = [...new Set(extra)].filter((n) => !known.has(nkey(n))).sort(); const rest = [];
      miss.forEach((n) => { const r = Object.values(RULES).find((x) => x.lob === want && (x.mname || x.name) === n); let cat = r ? ruleCategory(r, lob) : ''; if (cat && !out[cat] && Object.keys(out).length === 1 && /^all plans$/i.test(Object.keys(out)[0])) cat = Object.keys(out)[0]; if (cat) { out[cat] = (out[cat] || []).concat(n); } else rest.push(n); });   // the rules master knows the plan type: the product sits under its real category even before a quote page showed it
      if (lob === 'Investment' && out['Retirement Plans'] && !out['Retirement Plans'].length && (out['Retirement Plans – Pension'] || out['Retirement Plans – Annuity'])) delete out['Retirement Plans'];
      if (rest.length) out['Other products (from rules master – not yet seen on a quote page)'] = rest; }
    return out;
  }

  /* ---------- product rules (from the product-rules master export; embedded at build time) ---------- */
  const RULES = {"ABHI|4226":{"m":"ABHI","id":"4226","name":"Aditya Birla - Activ Assure","mname":"Activ Assure","lob":"Health","grp":"health","a":{"pt":"1,2,3","ppf":"S","ppo":1,"waiting":"Standard Waiting period of 30 Days and Upto a maximum of 48 months for Pre-Existing Diseases and Specific Illnesses."},"plans":{"10015":{"d":"To cater to your ever changing health and protection needs,","pt":1,"si":200000},"10016":{"d":"To cater to your ever changing health and protection needs","pt":1,"si":200000}},"v":["maxAdultInsuredAllowed: maximum adult insured allowed is 2","maxChildInsuredAllowed: maximum child insured allowed is 4","policyTerm: allowed policyTerm is 1, 2 or 3","sumInsured: quoteAmount allowed is 200000 or 300000 or 400000 or 500000 or 700000 or 1000000 or 1500000 or 2000000 or 2500000","sumInsured: quoteAmount allowed is 200000 or 300000 or 400000, 500000 or 1000000 or 1500000 or 2000000 or 2500000"]},"ABHI|5211":{"m":"ABHI","id":"5211","name":"Group Activ Health","mname":"Group Activ Health","lob":"Embedded","grp":"grphlth","a":{"maxAdult":2,"maxChild":2,"pt":1,"ptUnit":"S","ppf":"S","ppo":1,"waiting":"Standard Waiting period of 30 Days and Upto a maximum of 36 months for Pre-Existing Diseases and Specific Illnesses."},"plans":{"20007":{"d":"Sum Insured available for this plan is 5L, 7L and 10L","pt":1,"si":500000}},"v":["maxAdultInsuredAllowed: maximum adult insured allowed is 2","maxChildInsuredAllowed: maximum child insured allowed is 2","policyTerm: Allowed PolicyTerm is 1 Year Only","sumInsured: quoteAmount allowed is 500000 or 700000 or 1000000"]},"ABHI|5211_BND":{"m":"ABHI","id":"5211_BND","name":"Group Activ Health","mname":"Group Activ Health","lob":"Embedded","grp":"grphlth","a":{"maxAdult":1,"maxChild":1,"pt":1,"ptUnit":"S","ppf":"S","ppo":1,"waiting":"Standard Waiting period of 30 Days and Upto a maximum of 36 months for Pre-Existing Diseases and Specific Illnesses."},"plans":{"20027":{"d":"Sum Insured available in this plan will be decided by ARKA","pt":1,"ppo":1,"si":"expressionValue = 500000\"\""},"20028":{"d":"Sum Insured available in this plan will be decided by ARKA","pt":1,"ppo":1,"si":"expressionValue = 500000\"\""}},"v":["maxAdultInsuredAllowed: maximum adult insured allowed is 1","policyTerm: allowed policyTerm is 1, 2, 3, 4 or 5","sumInsured: quoteAmount range allowed in 500,000 to 50,00,000 for age 18 to 65"]},"ABHI|5211TPUP":{"m":"ABHI","id":"5211TPUP","name":"Group Top Up Activ Health","mname":"Group Top Up Activ Health","lob":"Health","grp":"health","a":{"maxAdult":2,"maxChild":2,"pt":1,"ptUnit":"S","ppf":"S","ppo":1,"waiting":"Standard Waiting period of 30 Days and Upto a maximum of 36 months for Pre-Existing Diseases and Specific Illnesses."},"plans":{"20008":{"d":"Sum Insured available for this plan is 10L, 40L, 50L, 90L and 95L","pt":1,"si":1000000}},"v":["maxAdultInsuredAllowed: maximum adult insured allowed is 2","maxChildInsuredAllowed: maximum child insured allowed is 2","policyTerm: Allowed PolicyTerm is 1 Year Only","sumInsured: quoteAmount allowed is 1000000 or 4000000 or 5000000 or 9000000 or 9500000"]},"ABHI|6212":{"m":"ABHI","id":"6212","name":"Aditya Birla - Activ Health Platinum","mname":"Activ Health Platinum","lob":"Health","grp":"health","a":{"maxSIposp":500000,"pt":"1,2,3","ppf":"S","ppo":1,"waiting":"Standard Waiting period of 30 Days and Upto a maximum of 48 months for Pre-Existing Diseases and Specific Illnesses."},"plans":{"10006":{"d":"Activ Health Platinum ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€","pt":1,"si":5000000}},"v":["maxAdultInsuredAllowed: maximum adult insured allowed is 6","maxChildInsuredAllowed: maximum child insured allowed is 3","policyTerm: allowed policyTerm is 1, 2 or 3","sumInsured: quoteAmount allowed is 5000000 or 10000000 or 15000000 or 20000000"]},"ABHI|6212NSTP":{"m":"ABHI","id":"6212NSTP","name":"Aditya Birla - Activ Health Platinum","mname":"Activ Health Platinum","lob":"Health","grp":"health","a":{"maxSIposp":500000,"pt":"1,2,3","ppf":"S","ppo":1,"waiting":"Standard Waiting period of 30 Days and Upto a maximum of 48 months for Pre-Existing Diseases and Specific Illnesses."},"plans":{"10047":{"d":"Activ Health Platinum Enhanced","pt":1,"si":500000},"10048":{"d":"Activ Health Platinum Essential","pt":1,"si":50000}},"v":["maxAdultInsuredAllowed: maximum adult insured allowed is 6","maxChildInsuredAllowed: maximum child insured allowed is 3","policyTerm: allowed policyTerm is 1, 2 or 3"]},"ABHI|7200":{"m":"ABHI","id":"7200","name":"Aditya Birla - Active One","mname":"Activ One","lob":"Health","grp":"health","a":{"maxAdult":2,"maxChild":4,"maxSIposp":500000,"pt":"1,2,3","ppf":"S","ppo":1,"si":1000000,"waiting":"Standard Waiting period of 30 Days and Upto a maximum of 48 months for Pre-Existing Diseases and Specific Illnesses."},"plans":{"10051":{"d":"In a world where our well-being matters most, having a health insurance plan that truly aligns with your health & wellness goals is essential. Introducing the A","pt":1,"si":500000},"10052":{"d":"Step into a world where your well-being takes center stage. Introducing the Activ One MAX+ Health Insurance plan by Aditya Birla Health Insurance, a meticulousl","pt":1,"si":500000},"10056":{"d":"Your health and its care is vital, even more so if you have a lifestyle condition. With the Activ One VYTL Health Insurance plan from Aditya Birla Health Insura","pt":1,"si":500000}},"v":["maxAdultInsuredAllowed: maximum adult insured allowed is 2","maxChildInsuredAllowed: maximum child insured allowed is 4","policyTerm: allowed policyTerm is 1, 2 or 3"]},"ABSLIFEI|ABDGSHLD":{"m":"ABSLIFEI","id":"ABDGSHLD","name":"ABSLI DigiShield Plan","mname":"Aditya Birla Sun Life Insurance DigiShield Plan","lob":"Life Term","grp":"LifeTerm","a":{"group":0,"whole":1,"joint":1,"maxAge":65,"maxMatAge":100,"maxPT":55,"maxIns":1,"maxSA":200000000,"minAge":18,"minMatAge":23,"minPT":5,"minSA":3000000,"ptUnit":"Years","ppf":"Y,HY,M,S,Q","qInc":0,"qMB":0,"qPrem":0,"qSA":1,"retail":1,"riders":1,"wholeAge":100},"plans":{},"v":[]},"ABSLIFEI|ABSASINP":{"m":"ABSLIFEI","id":"ABSASINP","name":"Assured Income Plus","mname":"ABSLI ASSURED INCOME PLUS","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":0,"joint":0,"maxAge":60,"maxMatAge":77,"maxPT":17,"maxPPT":{"rule":"depends on premiumPaymentOption","options":[["5","6","8","10","12"]]},"maxIns":1,"minAge":1,"minMatAge":18,"minPT":5,"minPPT":{"rule":"depends on premiumPaymentOption","options":[["5","6","8","10","12"]]},"minPrem":4167,"minSA":550000,"pt":"if int(request.get(product\").get(\"premiumPaymentTerm\")) in [5","ptUnit":"Years","ppf":"Y,HY,Q,M","ppo":3,"uin":"109N127V19","qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"type":"nonParticipating"},"plans":{},"v":[]},"ABSLIFEI|ABSNIAYU":{"m":"ABSLIFEI","id":"ABSNIAYU","name":"Nishchit Aayush","mname":"ABSLI NISHCHIT AAYUSH PLAN","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":1,"joint":0,"maxAge":65,"maxMatAge":100,"maxPT":40,"maxPPT":{"rule":"depends on premiumPaymentOption","options":[["6","8","10","12"]]},"maxIns":1,"minAge":18,"minMatAge":18,"minPT":15,"minPPT":{"rule":"depends on premiumPaymentOption","options":[["6","8","10","12"]]},"minPrem":2499,"minSA":210000,"pt":"expressionValue = None           \nif request.get(product\").get(\"planOption\").get","ptUnit":"Years","ppf":"Y,HY,Q,M","ppo":3,"uin":"109N137V14","qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"type":"nonParticipating","wholeAge":100},"plans":{},"v":[]},"AEGON|ITermCf":{"m":"AEGON","id":"ITermCf","name":"Aegon Life iTerm Comfort","mname":"NULL","lob":"Life Term","grp":"LifeTerm","a":{"group":0,"whole":0,"maxAge":65,"maxMatAge":70,"maxPT":52,"maxPPT":{"rule":"depends on premiumPaymentOption","options":[]},"maxIns":1,"maxSA":12500000,"medical":0,"minAge":18,"minMatAge":23,"minPT":5,"minPPT":{"rule":"depends on premiumPaymentOption","options":[]},"minSA":2500000,"ptUnit":"Years","ppf":"Y,HY,M","qInc":0,"qMB":0,"qPrem":0,"qSA":1,"riders":1},"plans":{},"v":[]},"AEGON|ITermPr":{"m":"AEGON","id":"ITermPr","name":"Aegon Life iTerm Prime","mname":"NULL","lob":"Life Term","grp":"LifeTerm","a":{"group":0,"whole":0,"maxAge":65,"maxMatAge":70,"maxPT":52,"minSA":2500000,"ptUnit":"Years","ppf":"Y,HY,M","qInc":0,"qMB":0,"qPrem":0,"qSA":1,"riders":1},"plans":{},"v":[]},"BAGIC|BG2WBD":{"m":"BAGIC","id":"BG2WBD","name":"New","mname":"New","lob":"Motor Insurance","grp":"motor","a":{"group":0,"whole":0,"joint":0,"motorType":"2W Private","pt":1,"ptUnit":"Years","policyType":"New","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":0,"retail":1,"wholeAge":0},"plans":{},"v":[]},"BAGIC|BG2WCI":{"m":"BAGIC","id":"BG2WCI","name":"Comprehensive","mname":"Comprehensive","lob":"Motor Insurance","grp":"motor","a":{"group":0,"whole":0,"joint":0,"motorType":"2W-Pvt","pt":1,"ptUnit":"Years","policyType":"Comprehensive","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":0,"retail":1,"wholeAge":0},"plans":{},"v":[]},"BAGIC|BG2WOD":{"m":"BAGIC","id":"BG2WOD","name":"Own Damage","mname":"Own Damage","lob":"Motor Insurance","grp":"motor","a":{"group":0,"whole":0,"joint":0,"motorType":"2W-Pvt","pt":1,"ptUnit":"Years","policyType":"Own Damage","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":0,"retail":1,"wholeAge":0},"plans":{},"v":[]},"BAGIC|BG2WTP":{"m":"BAGIC","id":"BG2WTP","name":"Third Party","mname":"Third Party","lob":"Motor Insurance","grp":"motor","a":{"group":0,"whole":0,"joint":0,"motorType":"2W-Pvt","pt":1,"ptUnit":"Years","policyType":"Third Party","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":0,"retail":1,"wholeAge":0},"plans":{},"v":[]},"BAGIC|BG2WTP5":{"m":"BAGIC","id":"BG2WTP5","name":"Third Party","mname":"Third Party","lob":"Motor Insurance","grp":"motor","a":{"group":0,"whole":0,"joint":0,"motorType":"2W-Pvt","pt":5,"ptUnit":"Years","policyType":"Third Party 5 Year","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":0,"retail":1,"wholeAge":0},"plans":{},"v":[]},"BAGIC|BG4WBD":{"m":"BAGIC","id":"BG4WBD","name":"New","mname":"New","lob":"Motor Insurance","grp":"motor","a":{"group":0,"whole":0,"joint":0,"motorType":"4W-Pvt","pt":1,"ptUnit":"Years","policyType":"New","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":0,"retail":1,"wholeAge":0},"plans":{},"v":[]},"BAGIC|BG4WCI":{"m":"BAGIC","id":"BG4WCI","name":"Comprehensive","mname":"Comprehensive","lob":"Motor Insurance","grp":"motor","a":{"group":0,"whole":0,"joint":0,"motorType":"4W-Pvt","pt":1,"ptUnit":"Years","policyType":"Comprehensive","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":0,"retail":1,"wholeAge":0},"plans":{},"v":[]},"BAGIC|BG4WOD":{"m":"BAGIC","id":"BG4WOD","name":"Own Damage","mname":"Own Damage","lob":"Motor Insurance","grp":"motor","a":{"group":0,"whole":0,"joint":0,"motorType":"4W-Pvt","pt":1,"ptUnit":"Years","policyType":"Own Damage","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":0,"retail":1,"wholeAge":0},"plans":{},"v":[]},"BAGIC|BG4WTP":{"m":"BAGIC","id":"BG4WTP","name":"Third Party","mname":"Third Party","lob":"Motor Insurance","grp":"motor","a":{"group":0,"whole":0,"joint":0,"motorType":"4W-Pvt","pt":1,"ptUnit":"Years","policyType":"Third Party","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":0,"retail":1,"wholeAge":0},"plans":{},"v":[]},"BAGIC|BG4WTP3":{"m":"BAGIC","id":"BG4WTP3","name":"Third Party","mname":"Third Party","lob":"Motor Insurance","grp":"motor","a":{"group":0,"whole":0,"joint":0,"motorType":"4W-Pvt","pt":3,"ptUnit":"Years","policyType":"Third Party 3 Year","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":0,"retail":1,"wholeAge":0},"plans":{},"v":[]},"BAGIC|HealthG":{"m":"BAGIC","id":"HealthG","name":"Bajaj - Health Guard","mname":"Health Guard","lob":"Health","grp":"health","a":{"maxAdult":2,"maxChild":4,"maxSIposp":500000,"pt":"1,2,3","ptUnit":"Year","ppf":"S","ppo":1,"waiting":"Standard Waiting period of 30 Days and Upto a maximum of 36 months for Pre-Existing Diseases and Specific Illnesses."},"plans":{},"v":[]},"BAGIC|MyHealth":{"m":"BAGIC","id":"MyHealth","name":"Bajaj - My Health Care","mname":"My Health Care","lob":"Health","grp":"health","a":{"maxAdult":2,"maxChild":4,"maxSIposp":500000,"pt":"1,2,3","ptUnit":"Year","ppf":"S","ppo":1,"waiting":"Standard Waiting period of 30 Days and Upto a maximum of 36 months for Pre-Existing Diseases and Specific Illnesses."},"plans":{"10033":{"d":"Sum Insured Available are  3/4/5/7.5/10/15/20/25/30/35/40/45/50/75 lacs and 1/2/3/4/5 Crore","pt":1,"si":300000}},"v":["maxAdultInsuredAllowed: maximum adult insured allowed is 2","maxChildInsuredAllowed: maximum child insured allowed is 4","policyTerm: allowed policyTerm is 1, 2 or 3"]},"BALIC|301":{"m":"BALIC","id":"301","name":"Bajaj Life Future Wealth Gain IV","mname":"Bajaj Allianz Life Future Wealth Plus","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":0,"joint":0,"maxAge":60,"maxMatAge":75,"maxPT":25,"maxIns":1,"maxPrem":50000,"minAge":0,"minAgeUnit":"Days","minMatAge":18,"minPT":10,"minPrem":5000,"pt":20,"ptUnit":"Years","ppf":"Y,HY,Q,M","ppo":3,"qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"type":"ULIP","wholeAge":0},"plans":{},"v":[]},"BALIC|309":{"m":"BALIC","id":"309","name":"Bajaj Life Goal Suraksha","mname":"Bajaj Allianz Life Goal Suraksha","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":1,"joint":0,"maxAge":55,"maxMatAge":65,"maxPT":20,"maxIns":1,"maxSA":2500000,"minAge":0,"minAgeUnit":"Years","minMatAge":28,"minPT":10,"minPrem":450,"minSA":30000,"pt":"expressionValue = None\nage = None\nif request.get(product\").get(\"premiumPaymentOp","ptUnit":"Years","ppf":"Y,HY,Q,M","ppo":3,"qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"type":"nonParticipating","wholeAge":0},"plans":{},"v":[]},"BALIC|316":{"m":"BALIC","id":"316","name":"Bajaj Life LongLife Goal III","mname":"Bajaj Allianz Life LongLife Goal III","lob":"Investment","grp":"pension","a":{"group":0,"whole":1,"joint":0,"maxAge":65,"maxMatAge":99,"maxPT":99,"maxPPT":25,"maxIns":1,"minAge":0,"minMatAge":20,"minPT":20,"minPPT":10,"minPrem":2500,"pt":"expressionValue = None\nage = 0\nfor individualInfo in request.get(personalInforma","ptUnit":"Years","ppf":"Y,HY,Q,M","ppo":3,"qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"type":"ULIP","wholeAge":1},"plans":{},"v":[]},"BALIC|331":{"m":"BALIC","id":"331","name":"Bajaj Life Smart Wealth Goal VII","mname":"Bajaj Allianz Life Smart Wealth Goal VI","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":0,"joint":0,"maxAge":70,"maxMatAge":99,"maxPT":60,"maxIns":1,"maxPrem":48000,"minAge":0,"minAgeUnit":"Days","minMatAge":18,"minPT":10,"minPrem":1000,"pt":20,"ptUnit":"Years","ppf":"S,Y,HY,Q,M","ppo":3,"qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"type":"ULIP","wholeAge":1},"plans":{},"v":[]},"BALIC|335":{"m":"BALIC","id":"335","name":"Bajaj Life Guaranteed Pension Goal II","mname":"Bajaj Allianz Life Guaranteed Pension Goal II","lob":"Investment","grp":"annuity","a":{"group":1,"whole":1,"joint":1,"maxAge":"plan_option_selected = request.get(product\"","maxMatAge":111,"maxPT":81,"maxPPT":{"rule":"depends on premiumPaymentOption","options":[["12"],["1"]]},"maxIns":1,"minAge":"plan_option_selected = request.get(product\"","minMatAge":0,"minPT":0,"minPPT":{"rule":"depends on premiumPaymentOption","options":[["2"],["1"]]},"minPrem":2926,"ptUnit":"Years","ppf":"S,Y,HY,Q,M","qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"type":"nonParticipating","wholeAge":1},"plans":{},"v":[]},"BALIC|345":{"m":"BALIC","id":"345","name":"Bajaj Life eTouch II","mname":"Bajaj Allianz Life eTouch II","lob":"Life Term","grp":"LifeTerm","a":{"group":0,"whole":1,"joint":0,"maxAge":65,"maxMatAge":99,"maxPT":85,"maxIns":1,"maxSA":200000000,"minAge":18,"minAgeUnit":"Years","minMatAge":28,"minPT":10,"minSA":5000000,"ptUnit":"Years","ppf":"Y,HY,Q,M","qInc":0,"qMB":0,"qPrem":0,"qSA":1,"retail":1,"wholeAge":99},"plans":{},"v":[]},"BALIC|351":{"m":"BALIC","id":"351","name":"Bajaj Life Invest Protect Goal Plus","mname":"Bajaj Allianz Life Invest Protect Goal Plus","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":0,"joint":0,"maxAge":60,"maxMatAge":100,"maxPT":40,"maxIns":1,"maxPrem":48000,"minAge":18,"minAgeUnit":"Years","minMatAge":38,"minPT":20,"minPPT":5,"minPrem":1500,"pt":"age = None\nfor individualInfo in request.get(personalInformation\").get(\"individu","ptUnit":"Years","ppf":"Y,HY,Q,M","ppo":3,"qInc":1,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"type":"ULIP","wholeAge":0},"plans":{},"v":[]},"BALIC|353":{"m":"BALIC","id":"353","name":"Bajaj Life Magnum Fortune Plus III","mname":"Bajaj Allianz Life Magnum Fortune Plus III","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":0,"joint":0,"maxAge":65,"maxMatAge":75,"maxPT":30,"maxIns":1,"maxPrem":48000,"minAge":0,"minAgeUnit":"Days","minMatAge":18,"minPT":10,"minPrem":4000,"pt":20,"ptUnit":"Years","ppf":"Y,HY,Q,M","ppo":3,"qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"type":"ULIP","wholeAge":0},"plans":{},"v":[]},"BALIC|359":{"m":"BALIC","id":"359","name":"Bajaj Life ACE","mname":"Bajaj Allianz Life ACE","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":1,"joint":0,"maxAge":60,"maxMatAge":100,"maxPT":100,"maxPPT":{"rule":"depends on premiumPaymentOption","options":[["5","6","7","8","9","10","12"]]},"maxIns":1,"minAge":0,"minAgeUnit":"Years","minMatAge":18,"minPT":10,"minPPT":{"rule":"depends on premiumPaymentOption","options":[["5","6","7","8","9","10","12"]]},"minPrem":2500,"pt":20,"ptUnit":"Years","ppf":"Y,HY,Q,M","ppo":3,"qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"type":"Participating","wholeAge":1},"plans":{},"v":[]},"BALIC|365":{"m":"BALIC","id":"365","name":"Bajaj Life Assured Wealth Goal Platinum","mname":"Bajaj Life Assured Wealth Goal Platinum","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":0,"joint":0,"maxAge":60,"maxMatAge":77,"maxPT":17,"maxIns":1,"minAge":1,"minAgeUnit":"Days","minMatAge":18,"minPT":5,"minPrem":30000,"pt":15,"ptUnit":"Years","ppf":"Y,M","ppo":3,"qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"type":"nonParticipating","wholeAge":0},"plans":{},"v":[]},"BALIC|375":{"m":"BALIC","id":"375","name":"Bajaj Life Guaranteed Wealth Goal","mname":"Bajaj Allianz Life Guaranteed Wealth Goal","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":0,"joint":0,"maxAge":60,"maxMatAge":100,"maxPPT":12,"maxIns":1,"minAge":0,"minAgeUnit":"Days","minMatAge":18,"minPT":5,"minPrem":1031,"pt":"expressionValue = None\nif request.get(product\").get(\"planOption\").get(\"OptionSel","ptUnit":"Years","ppf":"Y,HY,Q,M","ppo":3,"qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"type":"nonParticipating","wholeAge":99},"plans":{},"v":[]},"CHIL|80002176":{"m":"CHIL","id":"80002176","name":"Group Care 360(Arka Fincap)-CI+PA","mname":"Group Care 360","lob":"Embedded","grp":"grphlth","a":{"maxAdult":"Only one adult is allowed in this policy","maxChild":0,"pt":"1,2,3,4,5","ptUnit":"Year","ppf":"S","ppo":1,"waiting":"Standard Waiting period of 30 Days and Upto a maximum of 36 months for Pre-Existing Diseases and Specific Illnesses."},"plans":{"10009":{"d":"Group Health for Arka for Individual coverage from 1L to 3 Cr","pt":1,"si":200000}},"v":["maxAdultInsuredAllowed: maximum adult insured allowed is 1","policyTerm: allowed policyTerm is 1, 2, 3, 4 or 5","sumInsured: quoteAmount range allowed in 100,000 to 10,000,000 for age 56 to 65","sumInsured: quoteAmount range allowed in 100,000 to 30,000,000 for age 18 to 55"]},"CHIL|80002177":{"m":"CHIL","id":"80002177","name":"Group Care 360(Arka Fincap)-CI+PA","mname":"Group Care 360","lob":"Embedded","grp":"grphlth","a":{"maxAdult":"Only one adult is allowed in this policy","maxChild":0,"pt":"1,2,3,4,5","ptUnit":"Year","ppf":"S","ppo":1,"waiting":"Standard Waiting period of 30 Days and Upto a maximum of 36 months for Pre-Existing Diseases and Specific Illnesses."},"plans":{"10076":{"d":"Group Health for Arka for Individual coverage from 1L to 3 Cr","pt":1,"si":200000}},"v":["maxAdultInsuredAllowed: maximum adult insured allowed is 1","policyTerm: allowed policyTerm is 1, 2, 3, 4 or 5","sumInsured: quoteAmount range allowed in 100,000 to 10,000,000 for age 56 to 65","sumInsured: quoteAmount range allowed in 100,000 to 30,000,000 for age 18 to 55"]},"CHIL|80002760":{"m":"CHIL","id":"80002760","name":"Group Care 360(Scheme for Arka)-CI+PA","mname":"Group Care 360(Scheme for Arka)-CI+PA","lob":"Embedded","grp":"grphlth","a":{"maxAdult":1,"maxChild":0,"pt":"1,2,3,4,5","ptUnit":"Years","ppf":"S","ppo":1,"waiting":"Standard Waiting period of 30 Days and Upto a maximum of 36 months for Pre-Existing Diseases and Specific Illnesses."},"plans":{"10049":{"d":"Group Health for Arka for Individual coverage with Business loan from 1L to 1 Cr","pt":1,"si":500000}},"v":["maxAdultInsuredAllowed: maximum adult insured allowed is 1","policyTerm: allowed policyTerm is 1, 2, 3, 4 or 5","sumInsured: quoteAmount range allowed in 100,000 to 10,000,000"]},"CHIL|80002761":{"m":"CHIL","id":"80002761","name":"Group Care 360(Scheme for Arka)-CI+PA","mname":"Group Care 360(Scheme for Arka)-CI+PA","lob":"Embedded","grp":"grphlth","a":{"maxAdult":1,"maxChild":0,"pt":"1,2,3,4,5","ptUnit":"Years","ppf":"S","ppo":1,"waiting":"Standard Waiting period of 30 Days and Upto a maximum of 36 months for Pre-Existing Diseases and Specific Illnesses."},"plans":{"10077":{"d":"Group Health for Arka for Individual coverage with Business loan from 1L to 1 Cr","pt":1,"si":500000}},"v":["maxAdultInsuredAllowed: maximum adult insured allowed is 1","policyTerm: allowed policyTerm is 1, 2, 3, 4 or 5","sumInsured: quoteAmount range allowed in 100,000 to 10,000,000 for age 56 to 65","sumInsured: quoteAmount range allowed in 100,000 to 30,000,000 for age 18 to 55"]},"CHIL|80005092":{"m":"CHIL","id":"80005092","name":"Group Care 360(Sch for Arka 2)-CI+PA","mname":"Group Care 360","lob":"Embedded","grp":"grphlth","a":{"maxAdult":1,"maxChild":0,"pt":"1,2,3,4,5","ptUnit":"Years","ppf":"S","ppo":1,"waiting":"Standard Waiting period of 30 Days and Upto a maximum of 36 months for Pre-Existing Diseases and Specific Illnesses."},"plans":{"20024":{"d":"Group Health for Arka for Individual coverage with Business loan from 1L to 1 Cr","pt":1,"si":500000}},"v":["maxAdultInsuredAllowed: maximum adult insured allowed is 1","policyTerm: allowed policyTerm is 1, 2, 3, 4 or 5","sumInsured: quoteAmount range allowed in 100,000 to 10,000,000 for age 56 to 65","sumInsured: quoteAmount range allowed in 100,000 to 30,000,000 for age 18 to 55"]},"CHIL|80006004":{"m":"CHIL","id":"80006004","name":"Group Care 360(Sch for Arka 2 Plan 2)-CI+PA","mname":"GC360(Sch for Arka 2 PL2)-CI+PA","lob":"Embedded","grp":"grphlth","a":{"maxAdult":1,"maxChild":0,"pt":"2,3,4,5","ptUnit":"Years","ppf":"S","ppo":1,"waiting":"Standard Waiting period of 30 Days and Upto a maximum of 36 months for Pre-Existing Diseases and Specific Illnesses."},"plans":{"20029":{"d":"Group Health for Arka for Individual coverage with Business loan from 1L to 1 Cr","pt":2,"si":500000}},"v":["maxAdultInsuredAllowed: maximum adult insured allowed is 1","policyTerm: allowed policyTerm is 2, 3, 4 or 5","sumInsured: quoteAmount range allowed in 100,000 to 10,000,000 for age 56 to 65","sumInsured: quoteAmount range allowed in 100,000 to 30,000,000 for age 18 to 55"]},"CHIL|CARADV":{"m":"CHIL","id":"CARADV","name":"Care - Advantage","mname":"Care Advantage","lob":"Health","grp":"health","a":{"maxAdult":2,"maxChild":4,"maxSIposp":500000,"pt":"1,2,3","ptUnit":"Year","ppf":"S","ppo":1,"waiting":"Standard Waiting period of 30 Days and Upto a maximum of 36 months for Pre-Existing Diseases and Specific Illnesses."},"plans":{"10028":{"d":"When it comes to health, it's always good to have an advantage","pt":1,"si":"cc = 0\nca = 0\nindividualDetails = consumerRequest.get('personalInformation').get"}},"v":["maxAdultInsuredAllowed: maximum adult insured allowed is 2","maxChildInsuredAllowed: maximum child insured allowed is 4","policyTerm: allowed policyTerm for age 96 is 1, 2 or 3","policyTerm: allowed policyTerm for age 97 is 1 or 2","policyTerm: allowed policyTerm for age age greater than 97 is 1","sumInsured: quoteAmount allowed is 2,500,000 or 5,000,000 or 10,000,000 or 20,000,000 or 30,000,000 or 60,000,000"]},"CHIL|CARE":{"m":"CHIL","id":"CARE","name":"Care","mname":"Care","lob":"Health","grp":"health","a":{"maxAdult":2,"maxChild":4,"pt":"1,2,3","ptUnit":"Year","ppf":"S","ppo":1,"si":700000,"waiting":"Standard Waiting period of 30 Days and Upto a maximum of 36 months for Pre-Existing Diseases and Specific Illnesses."},"plans":{"10070":{"d":"Sum Insured available in this plan is 5,7,10,15,20,25,30,40,50,60,75 Lacs","pt":1,"si":500000}},"v":["maxAdultInsuredAllowed: maximum adult insured allowed is 2","maxChildInsuredAllowed: maximum child insured allowed is 4","policyTerm: For age greater than 96, allowed policyTerm is 1","policyTerm: Allowed policyTerm is 1, 2, 3","sumInsured: quoteAmount allowed is 500000 or 700000 or 1000000 or 1500000 or 2000000 or 2500000 or 3000000 or 4000000 or 5000000 or 6000000 or 7500000"]},"CHIL|CARSUP":{"m":"CHIL","id":"CARSUP","name":"Care - Supreme","mname":"Care Supreme","lob":"Health","grp":"health","a":{"maxAdult":2,"maxChild":2,"maxSIposp":1500000,"pt":"1,2,3","ptUnit":"Year","ppf":"S,M","ppo":"1,3","waiting":"Standard Waiting period of 30 Days and Upto a maximum of 36 months for Pre-Existing Diseases and Specific Illnesses."},"plans":{"10020":{"d":"Redefining the value that you get from your Health Insurance","pt":1,"si":500000}},"v":["maxAdultInsuredAllowed: maximum adult insured allowed is 2","maxChildInsuredAllowed: maximum child insured allowed is 2","policyTerm: allowed policyTerm is 1, 2 or 3","sumInsured: quoteAmount allowed is 500,000 or 700,000 or 1,000,000 or 1,500,000 or 2,500,000 or 5,000,000 or 10,000,000"]},"CHIL|HLEMBD01":{"m":"CHIL","id":"HLEMBD01","name":"Group Care 360(Arka Fincap)-CI+PA","mname":"Group Care 360","lob":"Embedded","grp":"grphlth","a":{"maxAdult":"Only one adult is allowed in this policy","maxChild":0,"pt":"1,2,3,4,5","ptUnit":"Year","ppf":"S","ppo":1,"waiting":"Standard Waiting period of 30 Days and Upto a maximum of 36 months for Pre-Existing Diseases and Specific Illnesses."},"plans":{"10149":{"d":"Group Health for Arka for Individual coverage from 1L to 3 Cr","pt":1,"si":200000}},"v":["maxAdultInsuredAllowed: maximum adult insured allowed is 1","policyTerm: allowed policyTerm is 1, 2, 3, 4 or 5","sumInsured: quoteAmount range allowed in 100,000 to 10,000,000 for age 56 to 65","sumInsured: quoteAmount range allowed in 100,000 to 30,000,000 for age 18 to 55"]},"CHIL|SENIOR":{"m":"CHIL","id":"SENIOR","name":"Care - Senior","mname":"Care Senior","lob":"Health","grp":"health","a":{"maxAdult":2,"maxChild":0,"pt":"1,2,3","ptUnit":"Year","ppf":"S","ppo":1,"si":500000,"waiting":"Standard Waiting period of 30 Days and Upto a maximum of 36 months for Pre-Existing Diseases and Specific Illnesses."},"plans":{"10069":{"d":"Sum Insured available in this plan is 3,5,7,10 Lacs","pt":1,"si":300000}},"v":["maxAdultInsuredAllowed: maximum adult insured allowed is 2","maxChildInsuredAllowed: child is not allowed for this product","policyTerm: For age greater than 96, allowed policyTerm is 1","policyTerm: Allowed policyTerm is 1, 2, 3","sumInsured: quoteAmount allowed is 300000 or 500000 or 700000 or 1000000"]},"CHIL|TDCARADV":{"m":"CHIL","id":"TDCARADV","name":"Care - Advantage","mname":"Care Advantage","lob":"Health","grp":"health","a":{"maxAdult":2,"maxChild":4,"maxSIposp":500000,"pt":"1,2,3","ptUnit":"Year","ppf":"S","ppo":1,"waiting":"Standard Waiting period of 30 Days and Upto a maximum of 36 months for Pre-Existing Diseases and Specific Illnesses."},"plans":{"10072":{"d":"When it comes to health, it's always good to have an advantage","pt":1,"si":2500000}},"v":["maxAdultInsuredAllowed: maximum adult insured allowed is 2","maxChildInsuredAllowed: maximum child insured allowed is 4","policyTerm: allowed policyTerm is 1, 2 or 3","sumInsured: quoteAmount allowed is 2,500,000 or 5,000,000 or 10,000,000 or 20,000,000 or 30,000,000 or 60,000,000"]},"CHIL|TDCARSUP":{"m":"CHIL","id":"TDCARSUP","name":"Care - Supreme","mname":"Care Supreme","lob":"Health","grp":"health","a":{"maxAdult":2,"maxChild":2,"maxSIposp":500000,"pt":"1,2,3","ptUnit":"Year","ppf":"S","ppo":1,"waiting":"Standard Waiting period of 30 Days and Upto a maximum of 36 months for Pre-Existing Diseases and Specific Illnesses."},"plans":{"10071":{"d":"Redefining the value that you get from your Health Insurance","pt":1,"si":500000}},"v":["maxAdultInsuredAllowed: maximum adult insured allowed is 2","maxChildInsuredAllowed: maximum child insured allowed is 2","policyTerm: allowed policyTerm is 1, 2 or 3","sumInsured: quoteAmount allowed is 500,000 or 700,000 or 1,000,000 or 1,500,000 or 2,500,000 or 5,000,000 or 10,000,000"]},"CHIL|ULTMCARE":{"m":"CHIL","id":"ULTMCARE","name":"Ultimate Care","mname":"Ultimate Care","lob":"Health","grp":"health","a":{"maxAdult":2,"maxChild":4,"maxSIposp":500000,"pt":"1,2,3,4,5","ptUnit":"Year","ppf":"S,M","ppo":"1,3","waiting":"Standard Waiting period of 30 Days and Upto a maximum of 36 months for Pre-Existing Diseases and Specific Illnesses."},"plans":{"10088":{"d":"Sum Insured available in this plan is 5, 7, 10, 15, 20, 25, 50, 100 Lacs","pt":1,"si":500000}},"v":["maxAdultInsuredAllowed: maximum adult insured allowed is 2","maxChildInsuredAllowed: maximum child insured allowed is 2","policyTerm: allowed policyTerm for age 94 is 1, 2 or 3","policyTerm: allowed policyTerm for age 95 is 1, 2 or 3","policyTerm: allowed policyTerm for age 96 is 1, 2 or 3","policyTerm: allowed policyTerm for age 97 is 1, 2","policyTerm: allowed policyTerm for age greater than 97 is 1","sumInsured: quoteAmount allowed is 500,000 or 700,000 or 1,000,000 or 1,500,000 or 2,000,000 or 2,500,000 or 5,000,000 or 10,000,000 or 999,999,999"]},"GLBAS|WALLET":{"m":"GLBAS","id":"WALLET","name":"Wallet Protection Plan","mname":"Wallet Protection Plan","lob":"Embedded","grp":"grphlth","a":{},"plans":{},"v":[]},"GODIGIT|GO2WCI":{"m":"GODIGIT","id":"GO2WCI","name":"Comprehensive","mname":"Comprehensive","lob":"Motor Insurance","grp":"motor","a":{"group":0,"whole":0,"joint":0,"motorType":"2W-Pvt","pt":1,"ptUnit":"Years","policyType":"Comprehensive","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":0,"retail":1,"wholeAge":0},"plans":{},"v":[]},"GODIGIT|GO2WOD":{"m":"GODIGIT","id":"GO2WOD","name":"Own Damage","mname":"Own Damage","lob":"Motor Insurance","grp":"motor","a":{"group":0,"whole":0,"joint":0,"motorType":"2W-Pvt","pt":1,"ptUnit":"Years","policyType":"Own Damage","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":0,"retail":1,"wholeAge":0},"plans":{},"v":[]},"GODIGIT|GO2WTP":{"m":"GODIGIT","id":"GO2WTP","name":"Third Party","mname":"Third Party","lob":"Motor Insurance","grp":"motor","a":{"group":0,"whole":0,"joint":0,"motorType":"2W-Pvt","pt":1,"ptUnit":"Years","policyType":"Third Party","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":0,"retail":1,"wholeAge":0},"plans":{},"v":[]},"GODIGIT|GO4WCI":{"m":"GODIGIT","id":"GO4WCI","name":"Comprehensive","mname":"Comprehensive","lob":"Motor Insurance","grp":"motor","a":{"group":0,"whole":0,"joint":0,"motorType":"4W-Pvt","pt":1,"ptUnit":"Years","policyType":"Comprehensive","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":0,"retail":1,"wholeAge":0},"plans":{},"v":[]},"GODIGIT|GO4WOD":{"m":"GODIGIT","id":"GO4WOD","name":"Own Damage","mname":"Own Damage","lob":"Motor Insurance","grp":"motor","a":{"group":0,"whole":0,"joint":0,"motorType":"4W-Pvt","pt":1,"ptUnit":"Years","policyType":"Own Damage","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":0,"retail":1,"wholeAge":0},"plans":{},"v":[]},"GODIGIT|GO4WTP":{"m":"GODIGIT","id":"GO4WTP","name":"Third Party","mname":"Third Party","lob":"Motor Insurance","grp":"motor","a":{"group":0,"whole":0,"joint":0,"motorType":"4W-Pvt","pt":1,"ptUnit":"Years","policyType":"Third Party","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":0,"retail":1,"wholeAge":0},"plans":{},"v":[]},"GODIGIT|GODIHLTH":{"m":"GODIGIT","id":"GODIHLTH","name":"GoDigit Health","mname":"GoDigit Health","lob":"Health","grp":"health","a":{"pt":"1,2,3","ptUnit":"Year","ppf":"S","ppo":1,"waiting":"Standard Waiting period of 30 Days and Upto a maximum of 36 months for Pre-Existing Diseases and Specific Illnesses."},"plans":{"10073":{"d":"Sum Insured available in this plan is 5, 10, 15, 20, 25, 50, 100 Lacs","pt":1,"si":500000},"10074":{"d":"Sum Insured available in this plan is 5, 10, 15, 20, 25, 50, 100 Lacs","pt":1,"si":500000},"10075":{"d":"Sum Insured available in this plan is 5, 10, 15, 20, 25, 50, 100 Lacs","pt":1,"si":500000}},"v":["maxAdultInsuredAllowed: maximum adult insured allowed is 2","maxChildInsuredAllowed: maximum child insured allowed is 4","policyTerm: allowed policyTerm is 1, 2 or 3","sumInsured: quoteAmount allowed is 500000 or 1000000 or 1500000 or 2000000 or 2500000 or 5000000 or 10000000"]},"HDFC|C2ACH":{"m":"HDFC","id":"C2ACH","name":"Click 2 Achieve","mname":"HDFC Life Click 2 Achieve","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":0,"joint":0,"maxAge":65,"maxMatAge":99,"maxPT":"term=40","maxPPT":35,"maxIns":1,"maxSA":50000000,"minAge":30,"minAgeUnit":"Days","minMatAge":18,"minPT":10,"minPPT":5,"minSA":50000,"pt":"if request.get(product\").get(\"planOption\").get(\"OptionSelected\") in \"156\":","ptUnit":"Years","ppf":"Y,HY,Q,M","ppo":3,"qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":0,"riders":1,"type":"nonParticipating"},"plans":{},"v":[]},"HDFC|EGII":{"m":"HDFC","id":"EGII","name":"Guaranteed income insurance plan","mname":"HDFC Life Guaranteed income insurance plan","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":0,"joint":0,"maxAge":65,"maxMatAge":99,"maxPT":"term=60","maxPPT":{"rule":"depends on premiumPaymentOption","options":[["3","5","6","7","8","10","12","15"]]},"maxIns":1,"minAge":18,"minAgeUnit":"Years","minMatAge":34,"minPT":10,"minPPT":{"rule":"depends on premiumPaymentOption","options":[["3","5","6","7","8","10","12","15"]]},"minPrem":1000,"pt":"expressionValue = None\nif request.get(product\").get(\"planOption\").get(\"OptionSel","ptUnit":"Years","ppf":"Y,HY,Q,M","ppo":3,"qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"riders":1,"type":"nonParticipating","wholeAge":1},"plans":{},"v":[]},"HDFC|EGWP":{"m":"HDFC","id":"EGWP","name":"Guaranteed Wealth Plus","mname":"HDFC Life Guaranteed Wealth Plus","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":0,"joint":0,"maxAge":60,"maxMatAge":103,"maxPT":"term=43","maxPPT":12,"maxIns":1,"minAge":30,"minAgeUnit":"Days","minMatAge":18,"minPT":12,"minPPT":1,"minPrem":2500,"pt":"if request.get(product\").get(\"planOption\").get(\"OptionSelected\")==\"256\":","ptUnit":"Years","ppf":"Y,HY,M,S","ppo":3,"qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"type":"nonParticipating","wholeAge":0},"plans":{},"v":[]},"HDFC|ESJ":{"m":"HDFC","id":"ESJ","name":"Sampoorna Jeevan","mname":"HDFC Life Sampoorna Jeevan","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":1,"joint":0,"maxAge":60,"maxMatAge":100,"maxPT":"age = None\nterm = None\nfor individualDetail in request.get(personalInformation\")","maxPPT":15,"maxIns":1,"minAge":3,"minAgeUnit":"Years","minMatAge":28,"minPT":15,"minPPT":6,"minPrem":1000,"pt":"expressionValue = None\nage = None\nfor individualInfo in request.get(personalInfo","ptUnit":"Years","ppf":"Y,HY,M","ppo":3,"qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"riders":1,"type":"Participating","wholeAge":100},"plans":{},"v":[]},"HDFC|ESPP":{"m":"HDFC","id":"ESPP","name":"Smart Pension Plan","mname":"HDFC Life Smart Pension Plan","lob":"Investment","grp":"pension","a":{"group":0,"whole":0,"joint":0,"maxAge":70,"maxMatAge":80,"maxPT":"term=55","maxPPT":30,"maxIns":1,"minAge":18,"minMatAge":40,"minPT":5,"minPPT":1,"pt":20,"ptUnit":"Years","ppf":"Y,HY,M,S","ppo":3,"qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"type":"ULIP","wholeAge":0},"plans":{},"v":[]},"HDFC|GCPP":{"m":"HDFC","id":"GCPP","name":"HDFC Life Group Credit Protect Plus Insurance Plan","mname":"HDFC Life Group Credit Protect Plus Insurance Plan","lob":"Embedded","grp":"GrpTerm","a":{"group":0,"whole":0,"joint":1,"maxAge":60,"maxMatAge":80,"maxPT":20,"maxIns":2,"maxSA":30000000,"minAge":18,"minPT":2,"minSA":5000,"ptUnit":"Years","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":1,"retail":0,"riders":0},"plans":{},"v":[]},"HDFC|GCPP_LAP":{"m":"HDFC","id":"GCPP_LAP","name":"HDFC Life Group Credit Protect Plus Insurance Plan","mname":"HDFC Life Group Credit Protect Plus Insurance Plan","lob":"Embedded","grp":"GrpTerm","a":{"group":0,"whole":0,"joint":1,"maxAge":60,"maxMatAge":80,"maxPT":20,"maxIns":2,"maxSA":30000000,"minAge":18,"minPT":2,"minSA":5000,"ptUnit":"Years","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":1,"retail":0,"riders":0},"plans":{},"v":[]},"HDFC|GCPPLAP":{"m":"HDFC","id":"GCPPLAP","name":"HDFC Life Group Credit Protect Plus Insurance Plan","mname":"HDFC Life Group Credit Protect Plus Insurance Plan","lob":"Embedded","grp":"GrpTerm","a":{"group":0,"whole":0,"joint":1,"maxAge":60,"maxMatAge":80,"maxPT":20,"maxIns":2,"maxSA":30000000,"minAge":18,"minPT":2,"minSA":5000,"ptUnit":"Years","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":1,"retail":0,"riders":0},"plans":{},"v":[]},"HDFC|GPPV9":{"m":"HDFC","id":"GPPV9","name":"Guaranteed Pension Plan","mname":"HDFC Life Guaranteed Pension Plan","lob":"Investment","grp":"pension","a":{"group":0,"whole":0,"joint":0,"maxAge":70,"maxMatAge":80,"maxPT":"term=40","maxPPT":12,"maxIns":1,"minAge":18,"minMatAge":40,"minPT":8,"minPPT":1,"minPrem":2000,"pt":12,"ptUnit":"Years","ppf":"Y,HY,Q,M,S","ppo":3,"qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"type":"ULIP","wholeAge":0},"plans":{},"v":[]},"HDFC|GUCVL":{"m":"HDFC","id":"GUCVL","name":"HDFC Group Used Commercial Vehicle Loan","mname":"Group Used Commercial Vehicle Loan","lob":"Embedded","grp":"GrpTerm","a":{"group":0,"whole":0,"joint":1,"maxAge":60,"maxMatAge":80,"maxPT":20,"maxIns":2,"maxSA":30000000,"minAge":18,"minPT":2,"minSA":5000,"ptUnit":"Years","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":1,"retail":0,"riders":0},"plans":{},"v":[]},"HDFC|P1C2PS":{"m":"HDFC","id":"P1C2PS","name":"HDFC Life Click 2 Protect Supreme","mname":"HDFC Life Click 2 Protect Supreme","lob":"Life Term","grp":"LifeTerm","a":{"group":0,"whole":0,"joint":0,"maxAge":84,"maxMatAge":85,"maxPT":67,"maxPPT":{"rule":"depends on premiumPaymentOption","options":[["1"]]},"maxIns":2,"maxSA":1000000000,"minAge":18,"minMatAge":18,"minPT":5,"minPPT":{"rule":"depends on premiumPaymentOption","options":[["1"]]},"minSA":1000000,"ptUnit":"Years","ppf":"Y,HY,Q,M,S","qInc":0,"qMB":0,"qPrem":0,"qSA":1,"retail":1,"riders":1,"wholeAge":0},"plans":{},"v":[]},"HDFC|P1C2PSP":{"m":"HDFC","id":"P1C2PSP","name":"HDFC Life Click 2 Protect Supreme Plus","mname":"HDFC Life Click 2 Protect Supreme Plus","lob":"Life Term","grp":"LifeTerm","a":{"group":0,"whole":0,"joint":0,"maxAge":84,"maxMatAge":85,"maxPT":67,"maxPPT":{"rule":"depends on premiumPaymentOption","options":[["1"]]},"maxIns":2,"maxSA":1000000000,"minAge":18,"minMatAge":18,"minPT":5,"minPPT":{"rule":"depends on premiumPaymentOption","options":[["1"]]},"minSA":1000000,"ptUnit":"Years","ppf":"Y,HY,Q,M,S","qInc":0,"qMB":0,"qPrem":0,"qSA":1,"retail":1,"riders":1,"wholeAge":0},"plans":{},"v":[]},"HDFC|PGNP12":{"m":"HDFC","id":"PGNP12","name":"Pension Guaranteed Plan","mname":"HDFC Life Pension Guaranteed Plan","lob":"Investment","grp":"annuity","a":{"group":0,"whole":0,"joint":1,"maxAge":85,"maxMatAge":99,"maxPPT":1,"maxIns":1,"minAge":30,"minAgeUnit":"Days","minMatAge":18,"minPPT":1,"minPrem":42076,"ptUnit":"Years","ppf":"S","ppo":1,"qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"riders":1,"type":"Participating"},"plans":{},"v":[]},"HDFC|SANCHP_P":{"m":"HDFC","id":"SANCHP_P","name":"Sanchay Plus","mname":"HDFC Life Sanchay Plus","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":0,"joint":0,"maxAge":50,"maxMatAge":60,"maxPT":"term=20","maxPPT":{"rule":"depends on premiumPaymentOption","options":[["5","6","7","8","9","10","11","12"]]},"maxIns":1,"maxSA":2500000,"minAge":18,"minAgeUnit":"Days","minMatAge":23,"minPT":5,"minPPT":{"rule":"depends on premiumPaymentOption","options":[["5","6","7","8","9","10","11","12"]]},"minPrem":15000,"pt":"if request.get(product\").get(\"planOption\").get(\"OptionSelected\")==\"131\":","ptUnit":"Years","ppf":"Y,S","ppo":3,"qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"riders":0,"type":"nonParticipating"},"plans":{},"v":[]},"HDFC|SANCHPV9":{"m":"HDFC","id":"SANCHPV9","name":"Sanchay Plus","mname":"HDFC Life Sanchay Plus","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":0,"joint":0,"maxAge":65,"maxMatAge":85,"maxPT":"term=30","maxIns":1,"maxSA":50000000,"minAge":30,"minAgeUnit":"Days","minMatAge":18,"minPT":5,"minPrem":2500,"minSA":372000,"pt":"if request.get(product\").get(\"planOption\").get(\"OptionSelected\")==\"53\":","ptUnit":"Years","ppf":"Y,HY,Q,M,S","ppo":3,"qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"riders":1,"type":"nonParticipating"},"plans":{"53":{"d":"This option offers a guaranteed maturity benefit payable as lump sum at the end of policy term. The maturity benefit is equal to Guaranteed Sum Assured on Matur","maxPT":15,"minPT":5,"ppf":"M,Y"}},"v":[]},"HDFC|SANPAR":{"m":"HDFC","id":"SANPAR","name":"Sanchay Par Advantage","mname":"HDFC Life Sanchay Par Advantage","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":1,"joint":0,"maxAge":65,"maxMatAge":100,"maxPT":"age = None\nterm = None\nfor individualDetail in request.get(personalInformation\")","maxPPT":{"rule":"depends on premiumPaymentOption","options":[["5","6","7","8","9","10","12"]]},"maxIns":1,"minAge":30,"minAgeUnit":"Days","minMatAge":25,"minPT":20,"minPPT":{"rule":"depends on premiumPaymentOption","options":[["5","6","7","8","9","10","12"]]},"minPrem":2188,"minSA":300000,"ptUnit":"Years","ppf":"Y,HY,Q,M","ppo":3,"qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"riders":1,"type":"Participating","wholeAge":100},"plans":{},"v":[]},"HDFC|SMPP4":{"m":"HDFC","id":"SMPP4","name":"Smart Pension Plus","mname":"HDFC Life Smart Pension Plus","lob":"Investment","grp":"annuity","a":{"group":1,"whole":0,"joint":0,"maxAge":100,"maxMatAge":100,"maxPPT":1,"maxIns":1,"minAge":18,"minMatAge":18,"minPPT":1,"minPrem":50000,"ptUnit":"Years","ppf":"S","ppo":1,"qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"type":"nonParticipating","wholeAge":100},"plans":{},"v":[]},"HDFC|SUPHX":{"m":"HDFC","id":"SUPHX","name":"Sanchay Fixed Maturity Plan","mname":"HDFC Life Sanchay Fixed Maturity Plan","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":0,"joint":0,"maxAge":70,"maxMatAge":90,"maxPT":"term=40","maxPPT":{"rule":"depends on premiumPaymentOption","options":[["1"]]},"maxIns":1,"minAge":90,"minAgeUnit":"Days","minMatAge":18,"minPT":5,"minPPT":{"rule":"depends on premiumPaymentOption","options":[["1"]]},"minPrem":875,"minSA":300000,"pt":"expressionValue = None\nif request.get(product\").get(\"planOption\").get(\"OptionSel","ptUnit":"Years","ppf":"S","ppo":1,"qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"riders":1,"type":"nonParticipating","wholeAge":0},"plans":{},"v":[]},"HDFC|SUPHX_P":{"m":"HDFC","id":"SUPHX_P","name":"Sanchay Fixed Maturity Plan","mname":"HDFC Life Sanchay Fixed Maturity Plan","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":0,"joint":0,"maxAge":50,"maxMatAge":60,"maxPT":"term=20","maxPPT":{"rule":"depends on premiumPaymentOption","options":[["1"]]},"maxIns":1,"maxSA":2500000,"minAge":18,"minAgeUnit":"Years","minMatAge":23,"minPT":5,"minPPT":{"rule":"depends on premiumPaymentOption","options":[["1"]]},"minPrem":10000,"pt":"expressionValue = None\nif request.get(product\").get(\"planOption\").get(\"OptionSel","ptUnit":"Years","ppf":"S,Y","ppo":3,"qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"riders":0,"type":"nonParticipating","wholeAge":0},"plans":{},"v":[]},"HDFC|SUPHY":{"m":"HDFC","id":"SUPHY","name":"Sanchay Fixed Maturity Plan","mname":"HDFC Life Sanchay Fixed Maturity Plan","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":0,"joint":1,"maxAge":60,"maxMatAge":80,"maxPT":"term=40","maxPPT":{"rule":"rule-based","options":[["1"]]},"minAge":0,"minAgeUnit":"Years","minMatAge":18,"minPT":5,"minPPT":{"rule":"rule-based","options":[["1"]]},"minPrem":10000,"minSA":300000,"pt":"expressionValue = None\nif request.get(product\").get(\"planOption\").get(\"OptionSel","ptUnit":"Years","ppf":"S","ppo":1,"qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"riders":1,"type":"nonParticipating"},"plans":{},"v":[]},"HDFC|UL9CIP":{"m":"HDFC","id":"UL9CIP","name":"Click 2 Wealth","mname":"HDFC Life Click 2 Wealth","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":0,"joint":0,"maxAge":65,"maxMatAge":99,"maxPT":"term = 99","maxIns":1,"minAge":30,"minAgeUnit":"Days","minMatAge":18,"minPT":10,"minPrem":1000,"pt":"expressionValue = None\nage = None\nif request.get(product\").get(\"premiumPaymentOp","ptUnit":"Years","ppf":"Y,HY,Q,M,S","ppo":3,"qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"riders":1,"type":"ULIP"},"plans":{},"v":[]},"HDFC|ULC2IPS":{"m":"HDFC","id":"ULC2IPS","name":"Click 2 Invest Plus","mname":"HDFC Life Click 2 Invest Plus","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":0,"joint":0,"maxAge":65,"maxMatAge":99,"maxPT":"term=81","maxPPT":{"rule":"depends on premiumPaymentOption","options":[]},"maxIns":1,"minAge":0,"minAgeUnit":"Days","minMatAge":18,"minPT":5,"minPPT":{"rule":"depends on premiumPaymentOption","options":[["5"]]},"minPrem":1000,"pt":15,"ptUnit":"Years","ppf":"Y,HY,Q,M,S","ppo":3,"qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"riders":1,"type":"ULIP"},"plans":{},"v":[]},"HDFC|ULSNIVPR":{"m":"HDFC","id":"ULSNIVPR","name":"Sampoorn Nivesh Plus","mname":"HDFC Life Sampoorn Nivesh Plus","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":0,"joint":0,"maxAge":65,"maxMatAge":85,"maxPT":"age = None\nterm = None\nfor individualDetail in request.get(personalInformation\")","maxIns":1,"minAge":30,"minAgeUnit":"Days","minMatAge":18,"minPT":10,"minPrem":1000,"pt":20,"ptUnit":"Years","ppf":"Y,HY,Q,M,S","ppo":3,"qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"riders":1,"type":"ULIP"},"plans":{},"v":[]},"HDFC|ULSPRO":{"m":"HDFC","id":"ULSPRO","name":"Smart Protect Plus","mname":"HDFC Life Smart Protect Plus","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":1,"joint":0,"maxAge":60,"maxMatAge":99,"maxPT":"term=99","maxIns":1,"minAge":30,"minAgeUnit":"Days","minMatAge":25,"minPT":25,"minPrem":3000,"pt":30,"ptUnit":"Years","ppf":"Y,HY,Q,M","ppo":3,"qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"type":"ULIP","wholeAge":1},"plans":{},"v":[]},"HDFCERGO|2825":{"m":"HDFCERGO","id":"2825","name":"HDFC ERGO - Family Health Suraksha","mname":"Family Health Suraksha Insurance Policy","lob":"Health","grp":"health","a":{"pt":"1,2,3","ptUnit":"Year","ppf":"S","ppo":1,"si":500000,"waiting":"Standard Waiting period of 30 Days and Upto a maximum of 48 months for Pre-Existing Diseases and Specific Illnesses."},"plans":{"10001":{"d":"Sum Insured available in this plan is 5, 7.5,10,15,20 Lacs","pt":1,"si":500000},"10002":{"d":"Sum Insured available in this plan is 5 Lacs","pt":1,"si":"expressionValue=500000\"\""},"10003":{"d":"Sum Insured available in this plan is 7.5,10,15,20 Lacs","pt":1,"si":750000},"10004":{"d":"Sum Insured available in this plan is 20 Lacs","pt":1,"si":"expressionValue=2000000\"\""}},"v":["maxAdultInsuredAllowed: maximum adult insured allowed is 4","maxChildInsuredAllowed: maximum child insured allowed is 3","policyTerm: allowed policyTerm is 1, 2 or 3","sumInsured: quoteAmount allowed is 500000 or 750000 or 1000000 or 1500000 or 2000000","sumInsured: quoteAmount allowed is 500000","sumInsured: quoteAmount allowed is 750000 or 1000000 or 1500000","sumInsured: quoteAmount allowed is 2000000"]},"HDFCERGO|2828":{"m":"HDFCERGO","id":"2828","name":"HDFC ERGO - Individual Health Suraksha","mname":"Individual Health Suraksha","lob":"Health","grp":"health","a":{"pt":"1,2,3","ptUnit":"Year","ppf":"S","ppo":1,"si":500000,"waiting":"Standard Waiting period of 30 Days and Upto a maximum of 48 months for Pre-Existing Diseases and Specific Illnesses."},"plans":{"10012":{"d":"Sum Insured available in this plan is 5 Lacs","pt":1,"si":"expressionValue=500000\"\""},"10013":{"d":"Sum Insured available in this plan is 7.5,10,15,20 Lacs","pt":1,"si":750000},"10014":{"d":"Sum Insured available in this plan is 20 Lacs","pt":1,"si":"expressionValue=2000000\"\""}},"v":["maxAdultInsuredAllowed: maximum adult insured allowed is 1","maxChildInsuredAllowed: maximum child insured allowed is 1","policyTerm: allowed policyTerm is 1, 2 or 3","sumInsured: quoteAmount allowed is 500000","sumInsured: quoteAmount allowed is 750000 or 1000000 or 1500000","sumInsured: quoteAmount allowed is 2000000"]},"HDFCERGO|OPTMASC2":{"m":"HDFCERGO","id":"OPTMASC2","name":"Optima Secure","mname":"my: Optima Secure","lob":"Health","grp":"health","a":{"maxSIposp":500000,"pt":"1,2,3","ptUnit":"Year","ppf":"S","ppo":1,"si":500000,"waiting":"Standard Waiting period of 30 Days and Upto a maximum of 48 months for Pre-Existing Diseases and Specific Illnesses."},"plans":{"10106":{"d":"A feature-rich plan that instantly doubles your base sum insured and offers up to 4X coverage over time, along with benefits like Protect and Restore.","pt":1,"si":500000}},"v":["maxAdultInsuredAllowed: maximum adult insured allowed is 4","maxChildInsuredAllowed: maximum child insured allowed is 4","policyTerm: allowed policyTerm is 1, 2 or 3","sumInsured: quoteAmount allowed is 500000 or 1000000 or 1500000 or 2000000 or 2500000 or 5000000 or 10000000 or 20000000"]},"HDFCERGO|OPTMASCP":{"m":"HDFCERGO","id":"OPTMASCP","name":"Optima Secure Plus","mname":"Optima Secure Plus","lob":"Health","grp":"health","a":{"maxSIposp":500000,"pt":"1,2,3","ptUnit":"Year","ppf":"S","ppo":1,"si":500000,"waiting":"Standard Waiting period of 30 Days and Upto a maximum of 48 months for Pre-Existing Diseases and Specific Illnesses."},"plans":{"30035":{"d":"Optima Secure+ Ã¢â‚¬â€ Individual and Family Floater Plan","pt":1,"ppf":"S","ppo":1,"si":1000000}},"v":["maxAdultInsuredAllowed: maximum adult insured allowed is 4","maxChildInsuredAllowed: maximum child insured allowed is 4","policyTerm: allowed policyTerm is 1, 2 or 3","sumInsured: quoteAmount allowed is 1000000 or 1500000 or 2000000 or 2500000 or 5000000 or 10000000 or 20000000"]},"HDFCERGO|OPTMRSTR":{"m":"HDFCERGO","id":"OPTMRSTR","name":"Optima Restore","mname":"Optima Restore","lob":"Health","grp":"health","a":{"maxSIposp":500000,"pt":"1,2,3","ptUnit":"Year","ppf":"S","ppo":1,"si":500000,"waiting":"Standard Waiting period of 30 Days and Upto a maximum of 48 months for Pre-Existing Diseases and Specific Illnesses."},"plans":{"10104":{"d":"A comprehensive health plan offering 100% sum insured restoration after each claim, ensuring uninterrupted coverage throughout the policy year","maxChild":"6 (son, daughter)","pt":"1,2,3","ptUnit":"Years","ppf":"Single","ppo":"Single","si":"Sum Insured available in this plan is 5,10,15,20,25,100,200 Lacs"}},"v":[]},"ICICI|E11":{"m":"ICICI","id":"E11","name":"ICICI Pru Savings Suraksha","mname":"SavingSuraksha","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":1,"joint":0,"maxAge":60,"maxMatAge":70,"maxPT":30,"maxPPT":30,"maxIns":2,"minAge":0,"minAgeUnit":"Years","minMatAge":18,"minPT":10,"minPPT":1,"minPrem":2500,"pt":30,"ptUnit":"Years","ppf":"Y,M,HY,S","ppo":"if request.get(''product'').get(''premiumPaymentOption'') == ''3'':","qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"riders":0,"type":"Participating"},"plans":{},"v":[]},"ICICI|E18":{"m":"ICICI","id":"E18","name":"ICICI Pru Assured Savings Insurance Plan","mname":"ICICI PRU ASIP","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":0,"joint":0,"maxAge":50,"maxMatAge":70,"maxPT":20,"maxPPT":{"rule":"depends on premiumPaymentOption","options":[["5","7","10","15","20"]]},"maxIns":1,"maxPrem":100000000,"minAge":18,"minAgeUnit":"Days","minMatAge":18,"minPT":10,"minPPT":{"rule":"rule-based","options":[["5","7","10","15","20"]]},"minPrem":4167,"pt":"expressionValue = None           \nif request.get(product\").get(\"planOption\").get","ptUnit":"Years","ppf":"Y,HY,M","ppo":3,"qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"riders":0,"type":"nonParticipating"},"plans":{},"v":[]},"ICICI|E21":{"m":"ICICI","id":"E21","name":"Future Perfect","mname":"FuturePerfect","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":0,"joint":0,"maxAge":60,"maxMatAge":75,"maxPT":30,"maxPPT":{"rule":"depends on premiumPaymentOption","options":[["5","7","10","15","20"]]},"maxIns":1,"maxPrem":100000000,"minAge":91,"minAgeUnit":"Days","minMatAge":18,"minPT":10,"minPPT":{"rule":"depends on premiumPaymentOption","options":[["5","7","10","15","20"]]},"minPrem":2613,"pt":"expressionValue = None           \nif request.get(product\").get(\"planOption\").get","ptUnit":"Years","ppf":"Y,HY,M","ppo":3,"qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"riders":0,"type":"Participating"},"plans":{},"v":[]},"ICICI|E28":{"m":"ICICI","id":"E28","name":"Guaranteed Income For Tomorrow","mname":"ICICI Pru Guaranteed Income For Tomorrow","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":0,"joint":0,"maxAge":60,"maxMatAge":80,"maxPT":20,"maxPPT":{"rule":"depends on premiumPaymentOption","options":[["5","6","7","8","10","12"],["1"]]},"maxIns":1,"maxPrem":100000001,"minAge":18,"minAgeUnit":"Days","minMatAge":18,"minPT":5,"minPPT":{"rule":"depends on premiumPaymentOption","options":[["5","6","7","8","10","12"],["1"]]},"minPrem":1500,"pt":"expressionValue = None\nif request.get(product\").get(\"planOption\").get(\"OptionSel","ptUnit":"Years","ppf":"Y,HY,M,S","ppo":3,"qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"riders":0,"type":"nonParticipating"},"plans":{},"v":[]},"ICICI|E29":{"m":"ICICI","id":"E29","name":"Guaranteed Income For Tomorrow","mname":"ICICI Pru Guaranteed Income For Tomorrow","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":0,"joint":0,"maxAge":60,"maxMatAge":80,"maxPT":20,"maxPPT":{"rule":"depends on premiumPaymentOption","options":[["1"]]},"maxIns":1,"maxPrem":100000000,"minAge":18,"minMatAge":18,"minPT":5,"minPPT":{"rule":"depends on premiumPaymentOption","options":[["1"]]},"minPrem":6000,"pt":"if request.get(product\").get(\"planOption\").get(\"OptionSelected\")==\"71\":","ptUnit":"Years","ppf":"Y,HY,M,S","ppo":1,"qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"riders":0,"type":"nonParticipating"},"plans":{},"v":[]},"ICICI|E30":{"m":"ICICI","id":"E30","name":"ICICI Pru POS GIFT","mname":"ICICI Pru POS Guaranteed Income For Tomorrow","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":0,"joint":0,"maxAge":60,"maxMatAge":65,"maxPT":20,"maxPPT":{"rule":"depends on premiumPaymentOption","options":[["5","6","7","8","10","12"],["1"]]},"maxIns":1,"maxPrem":250000,"minAge":1,"minAgeUnit":"Years","minMatAge":18,"minPT":5,"minPPT":{"rule":"depends on premiumPaymentOption","options":[["5","6","7","8","10","12"],["1"]]},"minPrem":1500,"pt":"expressionValue = None\nif request.get(product\").get(\"planOption\").get(\"OptionSel","ptUnit":"Years","ppf":"Y,HY,M,S","ppo":3,"qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"riders":0,"type":"nonParticipating"},"plans":{},"v":[]},"ICICI|E32":{"m":"ICICI","id":"E32","name":"ICICI PRU GIFT LONG TERM","mname":"ICICI PRU GIFT LONG TERM","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":0,"joint":0,"maxAge":60,"maxMatAge":101,"maxPT":41,"maxPPT":{"rule":"depends on premiumPaymentOption","options":[["7","10","12"],["1"]]},"maxIns":1,"maxPrem":100000001,"maxSA":1000000000,"minAge":0,"minAgeUnit":"Years","minMatAge":18,"minPT":8,"minPPT":{"rule":"depends on premiumPaymentOption","options":[["7","10","12"],["1"]]},"minPrem":2500,"minSA":300000,"pt":"expressionValue = None\nif request.get(product\").get(\"planOption\").get(\"OptionSel","ptUnit":"Years","ppf":"Y,HY,M","ppo":3,"qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"riders":0,"type":"nonParticipating"},"plans":{},"v":[]},"ICICI|E33":{"m":"ICICI","id":"E33","name":"ICICI Pru POS GIFT Long Term","mname":"ICICI PRU POS GIFT LONG TERM","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":0,"joint":0,"maxAge":57,"maxMatAge":65,"maxPT":14,"maxPPT":{"rule":"depends on premiumPaymentOption","options":[["7","10","12"],["1"]]},"maxIns":1,"maxPrem":250000,"maxSA":2500000,"minAge":4,"minAgeUnit":"Years","minMatAge":18,"minPT":8,"minPPT":{"rule":"depends on premiumPaymentOption","options":[["7","10","12"],["1"]]},"minPrem":2500,"minSA":300000,"pt":"expressionValue = None\nif request.get(product\").get(\"planOption\").get(\"OptionSel","ptUnit":"Years","ppf":"Y,HY,M","ppo":3,"qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"riders":0,"type":"nonParticipating"},"plans":{},"v":[]},"ICICI|E35":{"m":"ICICI","id":"E35","name":"ICICI Pru Gold","mname":"ICICI Pru Gold","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":0,"joint":0,"maxAge":60,"maxMatAge":99,"maxPT":99,"maxPPT":{"rule":"rule-based","options":[["7","10","12"]]},"maxIns":1,"maxPrem":100000000,"maxSA":1000000000,"minAge":0,"minAgeUnit":"Years","minMatAge":30,"minPT":30,"minPPT":{"rule":"rule-based","options":[["7","10","12"]]},"minPrem":4355,"minSA":500000,"pt":30,"ptUnit":"Years","ppf":"Y,HY,M","ppo":"if request.get(''product'').get(''premiumPaymentOption'') == ''3'':\n   expressio","qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"riders":0,"type":"Participating"},"plans":{},"v":[]},"ICICI|E36":{"m":"ICICI","id":"E36","name":"ICICI Pru GIFT Pro","mname":"ICICI Pru GIFT Pro","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":0,"joint":0,"maxAge":60,"maxMatAge":75,"maxPT":17,"maxPPT":{"rule":"depends on premiumPaymentOption","options":[["5","6","7","8","9","10","11","12"],["1"]]},"maxIns":1,"maxPrem":100000001,"minAge":18,"minAgeUnit":"Days","minMatAge":18,"minPT":5,"minPPT":{"rule":"depends on premiumPaymentOption","options":[["5","6","7","8","9","10","11","12"],["1"]]},"minPrem":4200,"pt":"expressionValue = None\nif request.get(product\").get(\"planOption\").get(\"OptionSel","ptUnit":"Years","ppf":"Y,HY,M","ppo":3,"qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"riders":0,"type":"nonParticipating"},"plans":{},"v":[]},"ICICI|E37":{"m":"ICICI","id":"E37","name":"ICICI Pru GIFT Pro POS","mname":"ICICI Pru GIFT Pro POS","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":0,"joint":0,"maxAge":57,"maxMatAge":65,"maxPT":17,"maxPPT":{"rule":"depends on premiumPaymentOption","options":[["5","6","7","8","9","10","11","12"],["1"]]},"maxIns":1,"maxPrem":250000,"maxSA":2500000,"minAge":1,"minAgeUnit":"Days","minMatAge":18,"minPT":8,"minPPT":{"rule":"depends on premiumPaymentOption","options":[["5","6","7","8","9","10","11","12"],["1"]]},"minPrem":4200,"minSA":350000,"pt":"expressionValue = None\nif request.get(product\").get(\"planOption\").get(\"OptionSel","ptUnit":"Years","ppf":"Y,HY,M","ppo":3,"qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"riders":0,"type":"nonParticipating"},"plans":{},"v":[]},"ICICI|E38":{"m":"ICICI","id":"E38","name":"GIFT Select","mname":"ICICI Pru GIFT Select","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":0,"joint":0,"maxAge":60,"maxMatAge":99,"maxPT":50,"maxIns":1,"maxPrem":100000000,"minAge":0,"minAgeUnit":"Days","minMatAge":18,"minPT":17,"minPrem":4167,"minSA":350000,"pt":25,"ptUnit":"Years","ppf":"Y,HY,M","ppo":3,"qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"riders":0,"type":"nonParticipating"},"plans":{},"v":[]},"ICICI|GOLD2":{"m":"ICICI","id":"GOLD2","name":"Gold","mname":"ICICI Pru Gold","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":0,"joint":0,"maxAge":60,"maxMatAge":99,"maxPT":99,"maxPPT":{"rule":"depends on premiumPaymentOption","options":[["5","6","7","8","9","10","11","12"],["1"]]},"maxIns":1,"maxPrem":100000000,"maxSA":1000000000,"minAge":0,"minAgeUnit":"Years","minMatAge":30,"minPT":30,"minPPT":{"rule":"depends on premiumPaymentOption","options":[["5","6","7","9","10","11","12"],["1"]]},"minPrem":4200,"minSA":500000,"pt":30,"ptUnit":"Years","ppf":"Y,HY,M","ppo":3,"qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"riders":0,"type":"Participating"},"plans":{},"v":[]},"ICICI|GP1":{"m":"ICICI","id":"GP1","name":"ICICI Pru Super Protect Credit","mname":"ICICI PRU SUPER PROTECT CREDIT","lob":"Embedded","grp":"GrpTerm","a":{"group":0,"whole":0,"joint":1,"maxAge":60,"maxMatAge":80,"maxPT":20,"maxPPT":{"rule":"depends on premiumPaymentOption","options":[["1"]]},"maxIns":2,"maxSA":30000000,"minAge":18,"minMatAge":20,"minPT":2,"minPPT":{"rule":"depends on premiumPaymentOption","options":[["1"]]},"minSA":5000,"ptUnit":"Years","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":1,"retail":0,"riders":0},"plans":{},"v":[]},"ICICI|I13":{"m":"ICICI","id":"I13","name":"ICICI Pru Guaranteed Pension Plan","mname":"GUARANTEEDPENSIONPLAN","lob":"Investment","grp":"annuity","a":{"group":0,"whole":0,"joint":0,"maxAge":100,"maxPPT":1,"maxIns":1,"minAge":30,"minPPT":1,"ptUnit":"Years","ppf":"S","ppo":1,"qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"wholeAge":0},"plans":{},"v":[]},"ICICI|I16":{"m":"ICICI","id":"I16","name":"ICICI Pru Saral Pension","mname":"SARALPENSION","lob":"Investment","grp":"annuity","a":{"group":0,"whole":1,"joint":0,"maxAge":80,"maxPPT":1,"maxIns":2,"minAge":40,"minPPT":["1"],"minPrem":2500000,"ptUnit":"Years","ppf":"S","qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"riders":0},"plans":{},"v":[]},"ICICI|I19":{"m":"ICICI","id":"I19","name":"Guaranteed Pension Plan Flexi","mname":"GUARANTEEDPENSIONPLANFLEXI","lob":"Investment","grp":"annuity","a":{"group":0,"whole":0,"joint":0,"maxAge":70,"maxMatAge":99,"maxPT":99,"maxPPT":15,"maxIns":1,"maxPrem":100000000,"maxSA":1000000000,"minAge":40,"minAgeUnit":"Years","minMatAge":85,"minPT":85,"minPPT":2,"minPrem":900,"minSA":500000,"pt":15,"ptUnit":"Years","ppf":"Y,HY,M","qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"riders":0,"type":"nonParticipating"},"plans":{},"v":[]},"ICICI|SC1":{"m":"ICICI","id":"SC1","name":"ICICI Pru Shubh Raksha Credit","mname":"SC1","lob":"Embedded","grp":"GrpTerm","a":{"group":0,"maxAge":65,"maxMatAge":80,"maxPT":9,"maxSA":10000000,"minAge":18,"minMatAge":20,"minPT":2,"minSA":5000,"ppf":"S","riders":0},"plans":{},"v":[]},"ICICI|SPC":{"m":"ICICI","id":"SPC","name":"ICICI Pru Super Protect Credit","mname":"ICICI PRU SUPER PROTECT CREDIT","lob":"Embedded","grp":"GrpTerm","a":{"group":0,"whole":0,"joint":1,"maxAge":60,"maxMatAge":75,"maxPT":15,"maxPPT":{"rule":"depends on premiumPaymentOption","options":[["1"]]},"maxIns":2,"maxSA":15000000,"minAge":18,"minMatAge":20,"minPT":2,"minPPT":{"rule":"depends on premiumPaymentOption","options":[["1"]]},"minSA":5000,"ptUnit":"Years","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":1,"retail":0,"riders":0},"plans":{},"v":[]},"ICICI|SPC_HCF":{"m":"ICICI","id":"SPC_HCF","name":"ICICI Pru Super Protect Credit","mname":"GP1","lob":"Embedded","grp":"GrpTerm","a":{"group":0,"whole":0,"joint":1,"maxAge":70,"maxMatAge":80,"maxPT":30,"maxIns":2,"maxSA":50000000,"minAge":18,"minMatAge":20,"minPT":2,"minSA":10000,"ptUnit":"Years","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":1,"retail":0,"riders":0},"plans":{},"v":[]},"ICICI|T50":{"m":"ICICI","id":"T50","name":"ICICI Pru iProtectSmart","mname":"iProtectSmart","lob":"Life Term","grp":"LifeTerm","a":{"group":0,"whole":0,"joint":0,"maxAge":65,"maxMatAge":75,"maxPT":20,"maxPPT":{"rule":"depends on premiumPaymentOption","options":[["1"]]},"maxIns":1,"minAge":18,"minMatAge":23,"minPT":5,"minPPT":{"rule":"depends on premiumPaymentOption","options":[["1"]]},"ptUnit":"Years","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":1,"retail":1,"riders":1},"plans":{},"v":[]},"ICICI|T74":{"m":"ICICI","id":"T74","name":"ICICI Pru iProtect Smart Plus","mname":"ICICI Pru iProtect Smart Plus","lob":"Life Term","grp":"LifeTerm","a":{"group":0,"whole":1,"joint":0,"maxAge":60,"maxMatAge":99,"maxPT":81,"maxPPT":{"rule":"depends on premiumPaymentOption","options":[]},"maxIns":1,"maxSA":200000000,"minAge":18,"minMatAge":23,"minPT":5,"minPPT":{"rule":"depends on premiumPaymentOption","options":[]},"minSA":5000000,"ptUnit":"Years","ppf":"Y,HY,M,S","qInc":0,"qMB":0,"qPrem":0,"qSA":1,"retail":1,"riders":1,"wholeAge":99},"plans":{},"v":[]},"ICICI|T75":{"m":"ICICI","id":"T75","name":"ICICI Pru iProtect- Smart Plus","mname":"ICICI Pru iProtect Smart Plus","lob":"Life Term","grp":"LifeTerm","a":{"group":0,"whole":0,"joint":0,"maxAge":65,"maxMatAge":75,"maxPT":20,"maxPPT":{"rule":"depends on premiumPaymentOption","options":[["1"]]},"maxIns":1,"minAge":18,"minMatAge":23,"minPT":5,"minPPT":{"rule":"depends on premiumPaymentOption","options":[["1"]]},"ptUnit":"Years","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":1,"retail":1,"riders":1},"plans":{},"v":[]},"ICICI|UB6":{"m":"ICICI","id":"UB6","name":"ICICI Pru Life Time Classic","mname":"LifeTimeClassic","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":0,"joint":0,"maxAge":75,"maxMatAge":80,"maxPT":70,"maxPPT":30,"maxIns":1,"minAge":0,"minAgeUnit":"Years","minMatAge":18,"minPT":5,"minPrem":2500,"pt":"expressionValue = None\nage = None\nquoteAmount = None\n\nfor individualInfo in requ","ptUnit":"Years","ppf":"Y,HY,Q,M,S","ppo":2,"qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"riders":0,"type":"ULIP"},"plans":{},"v":[]},"ICICI|UB9":{"m":"ICICI","id":"UB9","name":"Signature Assure","mname":"ICICI Pru Signature Assure","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":0,"joint":0,"maxAge":50,"maxMatAge":65,"maxPT":25,"maxPPT":15,"maxIns":1,"minAge":18,"minAgeUnit":"Years","minMatAge":33,"minPT":15,"minPPT":5,"minPrem":2500,"pt":"expressionValue = None\nage = None\n\nfor individualInfo in request.get(personalInf","ptUnit":"Years","ppf":"Y,HY,M","ppo":2,"qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"riders":0,"type":"ULIP"},"plans":{},"v":[]},"ICICI|UW3":{"m":"ICICI","id":"UW3","name":"ICICI Pru Signature","mname":"ICICI Pru Signature","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":1,"joint":0,"maxAge":60,"maxMatAge":99,"maxPT":81,"maxPPT":15,"maxIns":1,"minAge":0,"minMatAge":18,"minPT":15,"minPPT":5,"pt":"age = None\nfor individualInfo in request.get(personalInformation\").get(\"individu","ptUnit":"Years","ppf":"Y,Q,HY,M,S","ppo":3,"qInc":0,"qMB":0,"qPrem":1,"qSA":0,"type":"ULIP","wholeAge":1},"plans":{},"v":[]},"ICICI|UW5":{"m":"ICICI","id":"UW5","name":"ICICI Pru Protect N Gain","mname":"ICICI Pru Protect N Gain","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":0,"joint":0,"maxAge":60,"maxMatAge":85,"maxPT":40,"maxIns":1,"minAge":18,"minAgeUnit":"Years","minMatAge":48,"minPT":30,"pt":30,"ptUnit":"Years","ppf":"Y,HY,Q,M","ppo":3,"qInc":0,"qMB":0,"qPrem":1,"qSA":1,"retail":1,"type":"ULIP","wholeAge":0},"plans":{},"v":[]},"ICICI|UW6":{"m":"ICICI","id":"UW6","name":"ICICI Pru PLATINUM","mname":"ICICI Pru PLATINUM","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":1,"joint":0,"maxAge":60,"maxMatAge":75,"maxPT":75,"maxPPT":30,"maxIns":1,"minAge":0,"minPT":15,"minPPT":{"rule":"depends on premiumPaymentOption","options":[]},"minPrem":6000,"pt":"age = None\nfor individualDetail in request.get(personalInformation\").get(\"indivi","ptUnit":"Years","ppf":"Y,HY,M,S","ppo":3,"qInc":0,"qMB":0,"qPrem":1,"qSA":0,"type":"ULIP","wholeAge":1},"plans":{},"v":[]},"IL|4151":{"m":"IL","id":"4151","name":"Income Protect","mname":"Income Protect","lob":"Embedded","grp":"grphlth","a":{"maxAdult":1,"maxChild":0,"pt":1,"ptUnit":"Year","ppf":"S","ppo":1,"waiting":"Standard Waiting period of 30 Days and Upto a maximum of 36 months for Pre-Existing Diseases and Specific Illnesses."},"plans":{"266":{"d":"Group Income Protect","pt":1,"si":100000}},"v":["maxAdultInsuredAllowed: maximum adult insured allowed is 1","maxChildInsuredAllowed: Child is not allowed for this plan","policyTerm: allowed policyTerm is 1, 2, 3, 4 or 5"]},"IL|4200":{"m":"IL","id":"4200","name":"Hospi Shield Plus","mname":"Hospi Shield Plus","lob":"Embedded","grp":"grphlth","a":{"maxAdult":1,"maxChild":0,"pt":1,"ptUnit":"Year","ppf":"S","ppo":1,"waiting":"Standard Waiting period of 30 Days and Upto a maximum of 36 months for Pre-Existing Diseases and Specific Illnesses."},"plans":{"267":{"d":"Hospi Shield Plus","pt":1,"si":100000}},"v":["maxAdultInsuredAllowed: maximum adult insured allowed is 1","maxChildInsuredAllowed: Child is not allowed for this plan","policyTerm: allowed policyTerm is 1, 2, 3, 4 or 5"]},"IL|ARWMNCR":{"m":"IL","id":"ARWMNCR","name":"Women's Cancer Shield","mname":"Women's Cancer Shield","lob":"Embedded","grp":"grphlth","a":{"maxAdult":1,"maxChild":0,"maxSIposp":500000,"pt":1,"ptUnit":"Year","ppf":"S","ppo":1,"waiting":"Standard Waiting period of 30 Days and Upto a maximum of 36 months for Pre-Existing Diseases and Specific Illnesses."},"plans":{"20030":{"d":"Sum Insured available in this plan is 20L,  25L, 30L","pt":1,"si":2000000}},"v":["maxAdultInsuredAllowed: Maximum adult insured allowed is 1","maxChildInsuredAllowed: Women cancer product does not allow child insured members","policyTerm: Allowed Policy Term is 1 Year Only","sumInsured: quoteAmount allowed is 2000000 or 2500000 or 3000000"]},"IL|EELEVATE":{"m":"IL","id":"EELEVATE","name":"ICICI Lombard - Elevate","mname":"Elevate","lob":"Health","grp":"health","a":{"maxAdult":2,"maxChild":3,"maxSIposp":500000,"pt":"1,2,3,4,5","ptUnit":"Year","ppf":"S","ppo":1,"waiting":"Standard Waiting period of 30 Days and Upto a maximum of 36 months for Pre-Existing Diseases and Specific Illnesses."},"plans":{"10094":{"d":"Sum Insured available in this plan is 5L,7.5L,10L,15L,20L,25L,50L,1Cr, 3Cr","pt":1,"si":1000000}},"v":["maxAdultInsuredAllowed: maximum adult insured allowed is 2","maxChildInsuredAllowed: maximum child insured allowed is 3","policyTerm: allowed policyTerm is 1, 2 , 3 , 4 or 5","sumInsured: quoteAmount allowed is 500000 or 750000 or 1000000 or 1500000 or 2000000 or 2500000 or 5000000 or 10000000 or 30000000"]},"IL|EHAP":{"m":"IL","id":"EHAP","name":"ICICI Lombard - AdvantEdge","mname":"Health AdvantEdge (EHAP)","lob":"Health","grp":"health","a":{"maxAdult":2,"maxChild":3,"maxSIposp":500000,"pt":"1,2,3","ptUnit":"Year","ppf":"S","ppo":1,"waiting":"Standard Waiting period of 30 Days and Upto a maximum of 36 months for Pre-Existing Diseases and Specific Illnesses."},"plans":{"10034":{"d":"Sum Insured available in this plan is 5L,10L,15L,20L,25L,50L,1Cr, 2Cr","pt":1,"si":500000}},"v":["maxAdultInsuredAllowed: maximum adult insured allowed is 2","maxChildInsuredAllowed: maximum child insured allowed is 3","policyTerm: allowed policyTerm is 1, 2 or 3","sumInsured: quoteAmount allowed is 500000 or 750000 or 1000000 or 1500000 or 2000000 or 2500000 or 5000000 or 7500000 or 10000000 or 20000000 and 30000000"]},"IL|ELEVATE":{"m":"IL","id":"ELEVATE","name":"ICICI Lombard - Elevate","mname":"Elevate","lob":"Health","grp":"health","a":{"maxAdult":2,"maxChild":3,"maxSIposp":500000,"pt":"1,2,3","ptUnit":"Year","ppf":"S,M","ppo":"1,3","waiting":"Standard Waiting period of 30 Days and Upto a maximum of 36 months for Pre-Existing Diseases and Specific Illnesses."},"plans":{},"v":[]},"IL|HAP":{"m":"IL","id":"HAP","name":"ICICI Lombard - AdvantEdge","mname":"Health AdvantEdge (HAP)","lob":"Health","grp":"health","a":{"maxAdult":2,"maxChild":3,"maxSIposp":500000,"pt":"1,2,3","ptUnit":"Year","ppf":"S","ppo":1,"waiting":"Standard Waiting period of 30 Days and Upto a maximum of 36 months for Pre-Existing Diseases and Specific Illnesses."},"plans":{"10018":{"d":"This is a family floater plan which provides a wide range of covers inclusing maternity and claim protector.","pt":1,"si":300000}},"v":["maxAdultInsuredAllowed: maximum adult insured allowed is 2","maxChildInsuredAllowed: maximum child insured allowed is 3","policyTerm: allowed policyTerm is 1, 2 or 3"]},"IL|IL2WBD":{"m":"IL","id":"IL2WBD","name":"New","mname":"New","lob":"Motor Insurance","grp":"motor","a":{"group":0,"whole":0,"joint":0,"motorType":"2W-Pvt","pt":"1+3\"\"","ptUnit":"Years","policyType":"New","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":0,"retail":1,"wholeAge":0},"plans":{},"v":[]},"IL|IL2WCI":{"m":"IL","id":"IL2WCI","name":"Comprehensive","mname":"Comprehensive","lob":"Motor Insurance","grp":"motor","a":{"group":0,"whole":0,"joint":0,"motorType":"2W-Pvt","pt":1,"ptUnit":"Years","policyType":"Comprehensive","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":0,"retail":1,"wholeAge":0},"plans":{},"v":[]},"IL|IL2WOD":{"m":"IL","id":"IL2WOD","name":"Own Damage","mname":"Own Damage","lob":"Motor Insurance","grp":"motor","a":{"group":0,"whole":0,"joint":0,"motorType":"2W-Pvt","pt":1,"ptUnit":"Years","policyType":"Own Damage","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":0,"retail":1,"wholeAge":0},"plans":{},"v":[]},"IL|IL2WTP":{"m":"IL","id":"IL2WTP","name":"Third Party","mname":"Third Party","lob":"Motor Insurance","grp":"motor","a":{"group":0,"whole":0,"joint":0,"motorType":"2W-Pvt","pt":1,"ptUnit":"Years","policyType":"Third Party","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":0,"retail":1,"wholeAge":0},"plans":{},"v":[]},"IL|IL4WBD":{"m":"IL","id":"IL4WBD","name":"New","mname":"New","lob":"Motor Insurance","grp":"motor","a":{"group":0,"whole":0,"joint":0,"motorType":"4W-Pvt","pt":"1+3\"\"","ptUnit":"Years","policyType":"New","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":0,"retail":1,"wholeAge":0},"plans":{},"v":[]},"IL|IL4WCI":{"m":"IL","id":"IL4WCI","name":"Comprehensive","mname":"Comprehensive","lob":"Motor Insurance","grp":"motor","a":{"group":0,"whole":0,"joint":0,"motorType":"4W-Pvt","pt":1,"ptUnit":"Years","policyType":"Comprehensive","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":0,"retail":1,"wholeAge":0},"plans":{},"v":[]},"IL|IL4WOD":{"m":"IL","id":"IL4WOD","name":"Own Damage","mname":"Own Damage","lob":"Motor Insurance","grp":"motor","a":{"group":0,"whole":0,"joint":0,"motorType":"4W-Pvt","pt":1,"ptUnit":"Years","policyType":"Own Damage","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":0,"retail":1,"wholeAge":0},"plans":{},"v":[]},"IL|IL4WTP":{"m":"IL","id":"IL4WTP","name":"Third Party","mname":"Third Party","lob":"Motor Insurance","grp":"motor","a":{"group":0,"whole":0,"joint":0,"motorType":"4W-Pvt","pt":1,"ptUnit":"Years","policyType":"Third Party","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":0,"retail":1,"wholeAge":0},"plans":{},"v":[]},"IL|LTHS360":{"m":"IL","id":"LTHS360","name":"Health Shield 360","mname":"Health Shield 360","lob":"Embedded","grp":"grphlth","a":{"maxAdult":2,"maxChild":3,"maxSIposp":500000,"pt":1,"ptUnit":"Year","ppf":"S,M","ppo":1,"waiting":"Standard Waiting period of 30 Days and Upto a maximum of 36 months for Pre-Existing Diseases and Specific Illnesses."},"plans":{"20001":{"d":"Sum Insured available in this plan is 3L, 5L, 7L,  10L,  15L,  20L,  25L,  50L","pt":1,"si":300000},"20002":{"d":"Sum Insured available in this plan is 3L, 5L, 7L,  10L,  15L,  20L,  25L,  50L","pt":1,"si":300000},"20003":{"d":"Sum Insured available in this plan is 3L, 5L, 7L,  10L,  15L,  20L,  25L,  50L","pt":1,"si":300000}},"v":["maxAdultInsuredAllowed: maximum adult insured allowed is 2","maxChildInsuredAllowed: maximum child insured allowed is 3","policyTerm: Allowed PolicyTerm is 1 Year Only","sumInsured: quoteAmount allowed is 300000 or 500000 or 700000 or 1000000 or 1500000 or 2000000 or 2500000 or 5000000"]},"IL|LTHS360T":{"m":"IL","id":"LTHS360T","name":"Health Shield 360 Top Up","mname":"Health Shield 360 Top Up","lob":"Health","grp":"health","a":{"maxAdult":2,"maxChild":2,"maxSIposp":500000,"pt":1,"ptUnit":"Year","ppf":"S,M","ppo":1,"waiting":"Standard Waiting period of 30 Days and Upto a maximum of 36 months for Pre-Existing Diseases and Specific Illnesses."},"plans":{"20004":{"d":"Sum Insured available in this plan is 10L,  15L,  20L,  25L","pt":1,"si":1000000},"20005":{"d":"Sum Insured available in this plan is 15L,  20L,  25L,  50L","pt":1,"si":1500000},"20006":{"d":"Sum Insured available in this plan is 20L,  25L,  50L,  100L","pt":1,"si":2000000}},"v":["maxAdultInsuredAllowed: maximum adult insured allowed is 2","maxChildInsuredAllowed: maximum child insured allowed is 2","policyTerm: Allowed PolicyTerm is 1 Year Only","sumInsured: quoteAmount allowed is 1000000 or 1500000 or 2000000 or 2500000","sumInsured: quoteAmount allowed is 1500000 or 2000000 or 2500000 or 5000000","sumInsured: quoteAmount allowed is 2000000 or 2500000 or 5000000 or 10000000"]},"MAXLIFE|100":{"m":"MAXLIFE","id":"100","name":"Online Savings Plan","mname":"Axis Max\nLife Online Savings Plan","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":0,"joint":0,"maxAge":"plan_option= request.get(product\"","maxMatAge":"plan_option = request.get(product\"","maxPT":"plan_option= request.get(product\"","maxPPT":"{}).get(\"OptionSelected\")","maxIns":1,"minAge":18,"minAgeUnit":"Years","minMatAge":23,"minPT":"plan_option= request.get(product\"","minPrem":1000,"minSA":60000,"pt":15,"ptUnit":"Years","ppf":"Y,HY,Q,M,S","ppo":3,"uin":"104L098V06","qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"riders":1,"type":"ULIP"},"plans":{},"v":[]},"MAXLIFE|133":{"m":"MAXLIFE","id":"133","name":"Smart Wealth Plan","mname":"Axis Max Life Smart Wealth Plan","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":0,"joint":0,"maxAge":"ppt = int(request.get(product\"","maxMatAge":"plan_option = request.get(product\"","maxPT":"if request.get(product\").get(\"planOption\").get(\"OptionSelected\") == \"411\":","maxPPT":"{}).get(\"OptionSelected\")","maxIns":1,"maxPrem":100000000,"minAge":"plan_option_selected = request.get(product\"","minAgeUnit":"Years","minMatAge":18,"minPT":"if request.get(product\").get(\"planOption\").get(\"OptionSelected\") == \"411\":","minPPT":"{}).get(\"OptionSelected\")","minPrem":429,"minSA":550000,"pt":"if request.get(product\").get(\"planOption\").get(\"OptionSelected\") == \"711\":","ptUnit":"Years","ppf":"Y,HY,Q,M","ppo":3,"qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"riders":0,"type":"nonParticipating"},"plans":{},"v":[]},"MAXLIFE|154":{"m":"MAXLIFE","id":"154","name":"Axis Max Life Smart Secure Plus Plan","mname":"Max Life Smart Secure Plus Plan","lob":"Life Term","grp":"LifeTerm","a":{"group":0,"whole":0,"joint":1,"maxAge":65,"maxMatAge":85,"maxPT":67,"maxPPT":{"rule":"depends on premiumPaymentOption","options":[["1"]]},"maxIns":1,"maxSA":200000000,"minAge":18,"minMatAge":28,"minPT":10,"minPPT":{"rule":"depends on premiumPaymentOption","options":[["1"]]},"minSA":2500000,"ptUnit":"Years","ppf":"S,Y,M,HY,Q","qInc":0,"qMB":0,"qPrem":0,"qSA":1,"retail":1,"riders":1},"plans":{},"v":[]},"MAXLIFE|186":{"m":"MAXLIFE","id":"186","name":"Smart Wealth Advantage Guarantee Plan","mname":"Smart Wealth Advantage Guarantee Plan","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":0,"joint":0,"maxAge":"AddOns = request.get(product\"","maxMatAge":"AddOns = request.get(product\"","maxPT":"age = None\nfor individualDetail in request.get(personalInformation\").get(\"indivi","maxPPT":"{}).get(\"OptionSelected\")","maxIns":1,"maxPrem":100000000,"minAge":"AddOns = request.get(product\"","minAgeUnit":"Days","minMatAge":18,"minPT":"if request.get(product\").get(\"planOption\").get(\"OptionSelected\") == \"274\":","minPPT":"{}).get(\"OptionSelected\")","minPrem":429,"minSA":5500000,"pt":"age = None\nfor individualDetail in request.get(personalInformation\").get(\"indivi","ptUnit":"Years","ppf":"Y,HY,Q,M,S","ppo":3,"qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"riders":0,"type":"nonParticipating"},"plans":{},"v":[]},"MAXLIFE|501":{"m":"MAXLIFE","id":"501","name":"Axis Max Life Smart Term Plan Plus","mname":"Axis Max Life Smart Term Plan Plus","lob":"Life Term","grp":"LifeTerm","a":{"maxMatAge":85,"maxPT":"if request.get(product\").get(\"planOption\").get(\"OptionSelected\") == \"801\":","maxSA":850000000,"minAge":18,"minAgeUnit":"Years","minMatAge":"plan_option = request.get(product\"","minPT":"if request.get(product\").get(\"planOption\").get(\"OptionSelected\") in [ \"801\"","minSA":500000,"pt":"if request.get(product\").get(\"planOption\").get(\"OptionSelected\") == \"801\":","ppf":"Y,HY,Q,M,S","qInc":0,"qMB":0,"qPrem":0,"qSA":1},"plans":{},"v":[]},"MAXLIFE|505":{"m":"MAXLIFE","id":"505","name":"Online Savings Plan Plus","mname":"Axis Max Life Online Savings Plan","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":0,"joint":0,"maxAge":"plan_option= request.get(product\"","maxMatAge":"plan_option_selected = request.get(product\"","maxPT":"plan_option_selected = request.get(product\"","maxPPT":"{}).get(\"OptionSelected\")","maxIns":1,"minAge":0,"minAgeUnit":"Years","minMatAge":18,"minPT":"plan_option= request.get(product\"","minPPT":"plan_option_selected = request.get(product\"","minPrem":1000,"minSA":60000,"pt":15,"ptUnit":"Years","ppf":"Y,HY,Q,M,S","ppo":3,"uin":"104L098V06","qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"riders":1,"type":"ULIP"},"plans":{},"v":[]},"MAXLIFE|AHMAD":{"m":"MAXLIFE","id":"AHMAD","name":"Smart Wealth Plan","mname":"Axis Max Life Smart Wealth Plan","lob":"Investment","grp":"LifeSave","a":{},"plans":{},"v":[]},"MAXLIFE|Claim":{"m":"MAXLIFE","id":"Claim","name":"Axis Max Life Claim","mname":"Max Life Claim","lob":"Life Term","grp":"LifeTerm","a":{},"plans":{},"v":[]},"MAXLIFE|GP7":{"m":"MAXLIFE","id":"GP7","name":"Axis Max Life Group Term Life","mname":"Max Life Group Term Life","lob":"Embedded","grp":"GrpTerm","a":{"group":0,"whole":0,"joint":0,"maxAge":45,"maxMatAge":99,"maxPT":99,"maxPPT":{"rule":"depends on premiumPaymentOption","options":[["1"]]},"maxIns":1,"maxPrem":1000,"maxSA":50000,"minAge":18,"minAgeUnit":"Years","minMatAge":18,"minPT":1,"minPPT":{"rule":"depends on premiumPaymentOption","options":[["1"]]},"minPrem":100,"minSA":50000,"ptUnit":"Years","ppf":"S,Y","qInc":0,"qMB":0,"qPrem":0,"qSA":1,"retail":1,"riders":0,"type":"Participating"},"plans":{},"v":[]},"MPLCIGNA|LIFETIME":{"m":"MPLCIGNA","id":"LIFETIME","name":"Manipal Cigna - Lifetime","mname":"Lifetime","lob":"Health","grp":"health","a":{"pt":"1,2,3","ptUnit":"Year","ppf":"S","ppo":1,"waiting":"Standard Waiting period of 30 Days and Upto a maximum of 24 months for Pre-Existing Diseases and Specific Illnesses."},"plans":{"20025":{"d":"Sum Insured available in this plan is 50,75,100,150,200,300 Lacs","pt":1,"si":5000000},"20026":{"d":"Sum Insured available in this plan is 50,75,100,150,200,300 Lacs","pt":1,"si":5000000}},"v":["maxAdultInsuredAllowed: maximum adult insured allowed is 2","maxChildInsuredAllowed: maximum child insured allowed is 3","policyTerm: allowed policyTerm is 1, 2 or 3","sumInsured: quoteAmount allowed is 5000000 or 7500000 or 10000000 or 15000000 or 20000000 or 30000000"]},"MPLCIGNA|PROHLTH":{"m":"MPLCIGNA","id":"PROHLTH","name":"Manipal Cigna - ProHealth Prime","mname":"ProHealth Prime","lob":"Health","grp":"health","a":{"pt":"1,2,3","ptUnit":"Year","ppf":"S","ppo":1,"waiting":"Standard Waiting period of 30 Days and Upto a maximum of 36 months for Pre-Existing Diseases and Specific Illnesses."},"plans":{"10021":{"d":"Sum Insured available in this plan is 3,4,5,7,.5,10,12.5, 15,20,25,30,40,50,100 Lacs","pt":1,"si":300000},"10022":{"d":"Sum Insured available in this plan is 5, 7.5, 10, 12.5, 15, 20, 25, 30, 40, 50,100 Lacs","pt":1,"si":500000},"10023":{"d":"Sum Insured available in this plan is 3,5,7.5,10,12.5,15 Lacs","pt":1,"si":300000}},"v":["maxAdultInsuredAllowed: maximum adult insured allowed is 2","maxChildInsuredAllowed: maximum child insured allowed is 3","policyTerm: allowed policyTerm is 1, 2 or 3","sumInsured: quoteAmount allowed is 500000 or 750000 or 1000000 or 1250000 or 1500000 or 2000000 or 2500000 or 3000000 or 4000000 or 5000000 or 10000000","maxAdultInsuredAllowed: maximum adult insured allowed is 1","maxChildInsuredAllowed: maximum child insured allowed is 1","sumInsured: quoteAmount allowed is 300000 or 500000 or 750000 or 1000000 or 1250000 or 1500000"]},"MPLCIGNA|SARVAH":{"m":"MPLCIGNA","id":"SARVAH","name":"Manipal Cigna - Sarvah","mname":"Sarvah","lob":"Health","grp":"health","a":{"pt":"1,2,3","ptUnit":"Year","ppf":"S","ppo":1,"waiting":"Standard Waiting period of 30 Days and Upto a maximum of 36 months for Pre-Existing Diseases and Specific Illnesses."},"plans":{"10078":{"d":"Sum Insured available in this plan is 5,7.5,10,15,20,25,50,100,200,300 Lacs","pt":1,"si":500000},"10079":{"d":"Sum Insured available in this plan is 5,7.5,10,15,20,25,50,100,200,300 Lacs","pt":1,"si":500000}},"v":["maxAdultInsuredAllowed: maximum adult insured allowed is 2","maxChildInsuredAllowed: maximum child insured allowed is 3","policyTerm: allowed policyTerm is 1, 2 or 3","sumInsured: quoteAmount allowed is 500000 or 750000 or 1000000 or 1500000 or 2000000 or 2500000 or 5000000 or 10000000 or 20000000 or 300000000"]},"NBHI|ASPIRE":{"m":"NBHI","id":"ASPIRE","name":"Niva Bupa - Aspire","mname":"Aspire","lob":"Health","grp":"health","a":{"maxSIposp":500000,"pt":"1,2,3","ptUnit":"Year","ppf":"S","ppo":1,"si":500000,"waiting":"Standard Waiting period of 30 Days and Upto a maximum of 48 months for Pre-Existing Diseases and Specific Illnesses."},"plans":{"10081":{"d":"","pt":1,"si":500000},"10082":{"d":"","pt":1,"si":500000},"10083":{"d":"","pt":1,"si":500000},"10084":{"d":"","pt":1,"si":500000}},"v":["maxAdultInsuredAllowed: maximum adult insured allowed is 2","maxChildInsuredAllowed: maximum child insured allowed is 4","policyTerm: allowed policyTerm is 1, 2 or 3","sumInsured: quoteAmount allowed is 500,000 or 750,000 or1,000,000 or  1,500,000 or 2,000,000 or 2,500,000 or 5,000,000 or 10,000,000"]},"NBHI|LTGHPLUS":{"m":"NBHI","id":"LTGHPLUS","name":"Group Health Plus","mname":"Group Health Plus","lob":"Embedded","grp":"grphlth","a":{"maxAdult":2,"maxChild":2,"maxSIposp":500000,"pt":1,"ptUnit":"Year","ppf":"S","ppo":1,"si":500000,"waiting":"Standard Waiting period of 30 Days and Upto a maximum of 48 months for Pre-Existing Diseases and Specific Illnesses."},"plans":{"20031":{"d":"Sum Insured available in this plan is 3L, 4L, 5L","pt":1,"si":300000}},"v":["maxAdultInsuredAllowed: maximum adult insured allowed is 2","maxChildInsuredAllowed: maximum child insured allowed is 2","policyTerm: Allowed PolicyTerm is 1 Year Only","sumInsured: quoteAmount allowed is 300000 or 400000 or 500000"]},"NBHI|RASSURE3":{"m":"NBHI","id":"RASSURE3","name":"Niva Bupa - ReAssure 3.0","mname":"ReAssure 3.0","lob":"Health","grp":"health","a":{"maxAdult":2,"maxChild":4,"maxSIposp":500000,"pt":"1,2,3,4,5","ptUnit":"Year","ppf":"S","ppo":1,"si":1000000,"waiting":"Standard Waiting period of 30 Days and Upto a maximum of 48 months for Pre-Existing Diseases and Specific Illnesses."},"plans":{"20012":{"d":"Sum Insured available for this plan is 5L, 10L and Unlimited","pt":1,"si":500000},"20013":{"d":"Sum Insured available for this plan is 5L, 10L and Unlimited","pt":1,"si":500000},"20014":{"d":"Sum Insured available for this plan is 5L, 10L and Unlimited","pt":1,"si":500000},"20015":{"d":"Sum Insured available for this plan is 5L, 10L and Unlimited","pt":1,"si":500000}},"v":["maxAdultInsuredAllowed: maximum adult insured allowed is 2","maxChildInsuredAllowed: maximum child insured allowed is 4","policyTerm: allowed policyTerm is 1, 2, 3, 4 or 5","sumInsured: quoteAmount allowed is 500,000 or 750,000 or Unlimited"]},"NBHI|Reassure":{"m":"NBHI","id":"Reassure","name":"Niva Bupa - ReAssure 2.0","mname":"ReAssure 2.0","lob":"Health","grp":"health","a":{"maxSIposp":500000,"pt":"1,2,3","ptUnit":"Year","ppf":"S","ppo":1,"si":500000,"waiting":"Standard Waiting period of 30 Days and Upto a maximum of 48 months for Pre-Existing Diseases and Specific Illnesses."},"plans":{"10005":{"d":"Sum Insured available in this plan are 5, 7.5, 10,15,20,25,50,100 lacs","pt":1,"si":500000},"10010":{"d":"Sum Insured available in this plan are 5, 7.5, 10,15,20,25,50,100 lacs","pt":1,"si":500000},"10019":{"d":"Sum Insured available in this plan are 5, 7.5, 10,15,20,25,50,100 lacs","pt":1,"si":500000}},"v":["maxAdultInsuredAllowed: maximum adult insured allowed is 2","maxChildInsuredAllowed: maximum child insured allowed is 4","policyTerm: allowed policyTerm is 1, 2 or 3","sumInsured: quoteAmount allowed is 500,000 or 750,000 or1,000,000 or  1,500,000 or 2,000,000 or 2,500,000 or 5,000,000 or 10,000,000","sumInsured: quoteAmount allowed is 500,000 or 750,000 or 1,000,000 or  1,500,000 or 2,000,000 or 2,500,000 or 5,000,000 or 10,000,000"]},"NBHI|RECHARGE":{"m":"NBHI","id":"RECHARGE","name":"Niva Bupa - Recharge","mname":"Health Recharge","lob":"Health","grp":"health","a":{"pt":"1,2,3","ptUnit":"Year","ppf":"S","ppo":1,"waiting":"Standard Waiting period of 30 Days and Upto a maximum of 36 months for Pre-Existing Diseases and Specific Illnesses."},"plans":{"10067":{"d":"Sum Insured available in this plan is 7.5L,10L,15L,25L,40L,45L,65L,70L,90L,95L","pt":1,"si":750000}},"v":["maxAdultInsuredAllowed: maximum adult insured allowed is 2","maxChildInsuredAllowed: maximum child insured allowed is 4","policyTerm: allowed policyTerm is 1, 2 or 3","sumInsured: quoteAmount allowed is 750000 or 1000000 or 1500000 or 2500000 or 4000000 or 4500000 or 6500000 or 7000000 or 9000000 or 9500000"]},"RGI|GMC":{"m":"RGI","id":"GMC","name":"Group Mediclaim Policy","mname":"Group Mediclaim Policy","lob":"Embedded","grp":"grphlth","a":{"pt":1,"ptUnit":"Year","ppf":"S","ppo":1,"waiting":"Standard Waiting period of 30 Days and up to a maximum of 36 months for Pre-Existing Diseases and Specific Illnesses."},"plans":{"20009":{"d":"Sum Insured available for this plan is 1L, 2L, 3L, 4L and 5L","pt":1,"si":"cc = 0\nca = 0\nindividualDetails = consumerRequest.get('personalInformation').get"},"20010":{"d":"Sum Insured available for this plan is 1L, 2L, 3L, 4L and 5L","pt":1,"si":300000},"20011":{"d":"Sum Insured available for this plan is 1L, 2L, 3L, 4L and 5L","pt":1,"si":"cc = 0\nca = 0\nindividualDetails = consumerRequest.get('personalInformation').get"}},"v":["maxAdultInsuredAllowed: maximum adult insured allowed is 2","maxChildInsuredAllowed: maximum child insured allowed is 2","policyTerm: Allowed PolicyTerm is 1 Year Only","sumInsured: quoteAmount allowed is 300000 or 400000 or 500000"]},"RGI|GMCT":{"m":"RGI","id":"GMCT","name":"Group Mediclaim Policy Super Top Up","mname":"Group Mediclaim Policy Super Top Up","lob":"Health","grp":"health","a":{"pt":1,"ptUnit":"Year","ppf":"S","ppo":1,"waiting":"Standard Waiting period of 30 Days and up to a maximum of 36 months for Pre-Existing Diseases and Specific Illnesses."},"plans":{"20018":{"d":"Sum Insured available for this plan is 10L, 15L, 20L, 25L,40L ,45L and 47L","pt":1,"si":1000000},"20019":{"d":"Sum Insured available for this plan is 10L, 15L, 20L, 25L,40L ,45L and 47L","pt":1,"si":1000000},"20020":{"d":"Sum Insured available for this plan is 10L, 15L, 20L, 25L,40L ,45L and 47L","pt":1,"si":1000000}},"v":["maxAdultInsuredAllowed: maximum adult insured allowed is 2","maxChildInsuredAllowed: maximum child insured allowed is 2","policyTerm: Allowed PolicyTerm is 1 Year Only","sumInsured: quoteAmount allowed is 1000000 or 1500000 or 2000000 or 2500000 or 4000000 or 4500000 or 4700000"]},"RGI|HLTHGN":{"m":"RGI","id":"HLTHGN","name":"HealthGain","mname":"HealthGain","lob":"Health","grp":"health","a":{"pt":"1,2,3,4,5","ptUnit":"Year","ppf":"S","ppo":1,"waiting":"Standard Waiting period of 30 Days and Upto a maximum of 36 months for Pre-Existing Diseases and Specific Illnesses."},"plans":{"10122":{"d":"Sum Insured available in this plan is 10L,15L,20L","pt":1,"ppf":"S","ppo":1,"si":1000000},"10123":{"d":"Sum Insured available in this plan is 25L,30L,50L,100L","pt":1,"ppf":"S","ppo":1,"si":2500000}},"v":["maxAdultInsuredAllowed: maximum adult insured allowed is 4","maxChildInsuredAllowed: maximum child insured allowed is 6","policyTerm: allowed policyTerm is 1, 2, 3, 4 or 5","sumInsured: quoteAmount allowed is 1000000 or 1500000 or 2000000","sumInsured: quoteAmount allowed is 2500000 or 3000000 or 5000000 or 10000000 or 30000000 or 50000000"]},"RGI|HLTHINFI":{"m":"RGI","id":"HLTHINFI","name":"Health Infinity","mname":"Health Infinity","lob":"Health","grp":"health","a":{"pt":"1,2,3","ptUnit":"Year","ppf":"S","ppo":1,"waiting":"Standard Waiting period of 30 Days and up to a maximum of 36 months for Pre-Existing Diseases and Specific Illnesses."},"plans":{"10101":{"d":"Sum Insured available in this plan is 10L,15L,25L,50L,1Cr,2Cr,3Cr,5Cr","pt":1,"ppf":"S","ppo":1,"si":1000000},"10102":{"d":"Sum Insured available in this plan is 10L,15L,25L,50L,1Cr,2Cr,3Cr,5Cr","pt":1,"ppf":"S","ppo":1,"si":1000000},"10103":{"d":"Sum Insured available in this plan is 10L,15L,25L,50L,1Cr,2Cr,3Cr,5Cr","pt":1,"ppf":"S","ppo":1,"si":1000000}},"v":["maxAdultInsuredAllowed: maximum adult insured allowed is 2","maxChildInsuredAllowed: maximum child insured allowed is 6","policyTerm: allowed policyTerm is 1, 2 or 3","sumInsured: quoteAmount allowed is 1000000 or 1500000 or 2500000 or 5000000 or 10000000 or 20000000 or 30000000 or 40000000 or 50000000"]},"RGI|RGI2WBD":{"m":"RGI","id":"RGI2WBD","name":"New","mname":"New","lob":"Motor Insurance","grp":"motor","a":{"group":0,"whole":0,"joint":0,"motorType":"2W-Pvt","pt":1,"ptUnit":"Years","policyType":"New","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":0,"retail":1,"wholeAge":0},"plans":{},"v":[]},"RGI|RGI2WCI":{"m":"RGI","id":"RGI2WCI","name":"Comprehensive","mname":"Comprehensive","lob":"Motor Insurance","grp":"motor","a":{"group":0,"whole":0,"joint":0,"motorType":"2W-Pvt","pt":1,"ptUnit":"Years","policyType":"Comprehensive","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":0,"retail":1,"wholeAge":0},"plans":{},"v":[]},"RGI|RGI2WOD":{"m":"RGI","id":"RGI2WOD","name":"Own Damage","mname":"Own Damage","lob":"Motor Insurance","grp":"motor","a":{"group":0,"whole":0,"joint":0,"motorType":"2W-Pvt","pt":1,"ptUnit":"Years","policyType":"Own Damage","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":0,"retail":1,"wholeAge":0},"plans":{},"v":[]},"RGI|RGI2WTP":{"m":"RGI","id":"RGI2WTP","name":"Third Party","mname":"Third Party","lob":"Motor Insurance","grp":"motor","a":{"group":0,"whole":0,"joint":0,"motorType":"2W-Pvt","pt":1,"ptUnit":"Years","policyType":"Third Party","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":0,"retail":1,"wholeAge":0},"plans":{},"v":[]},"RGI|RGI2WTP5":{"m":"RGI","id":"RGI2WTP5","name":"Third Party 5 Year","mname":"Third Party 5 Year","lob":"Motor Insurance","grp":"motor","a":{"group":0,"whole":0,"joint":0,"motorType":"2W-Pvt","pt":3,"ptUnit":"Years","policyType":"Third Party 5 Year","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":0,"retail":1,"wholeAge":0},"plans":{},"v":[]},"RGI|RGI4WBD":{"m":"RGI","id":"RGI4WBD","name":"New","mname":"New","lob":"Motor Insurance","grp":"motor","a":{"group":0,"whole":0,"joint":0,"motorType":"4W-Pvt","pt":1,"ptUnit":"Years","policyType":"New","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":0,"retail":1,"wholeAge":0},"plans":{},"v":[]},"RGI|RGI4WCI":{"m":"RGI","id":"RGI4WCI","name":"Comprehensive","mname":"Comprehensive","lob":"Motor Insurance","grp":"motor","a":{"group":0,"whole":0,"joint":0,"motorType":"4W-Pvt","pt":1,"ptUnit":"Years","policyType":"Comprehensive","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":0,"retail":1,"wholeAge":0},"plans":{},"v":[]},"RGI|RGI4WOD":{"m":"RGI","id":"RGI4WOD","name":"Own Damage","mname":"Own Damage","lob":"Motor Insurance","grp":"motor","a":{"group":0,"whole":0,"joint":0,"motorType":"4W-Pvt","pt":1,"ptUnit":"Years","policyType":"Own Damage","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":0,"retail":1,"wholeAge":0},"plans":{},"v":[]},"RGI|RGI4WTP":{"m":"RGI","id":"RGI4WTP","name":"Third Party","mname":"Third Party","lob":"Motor Insurance","grp":"motor","a":{"group":0,"whole":0,"joint":0,"motorType":"4W-Pvt","pt":1,"ptUnit":"Years","policyType":"Third Party","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":0,"retail":1,"wholeAge":0},"plans":{},"v":[]},"RGI|RGI4WTP3":{"m":"RGI","id":"RGI4WTP3","name":"Third Party 3 Year","mname":"Third Party 3 Year","lob":"Motor Insurance","grp":"motor","a":{"group":0,"whole":0,"joint":0,"motorType":"4W-Pvt","pt":3,"ptUnit":"Years","policyType":"Third Party 3 Year","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":0,"retail":1,"wholeAge":0},"plans":{},"v":[]},"RSGI|RS2WBD":{"m":"RSGI","id":"RS2WBD","name":"New","mname":"New","lob":"Motor Insurance","grp":"motor","a":{"group":0,"whole":0,"joint":0,"motorType":"2W Private","pt":1,"ptUnit":"Years","policyType":"New","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":0,"retail":1,"wholeAge":0},"plans":{},"v":[]},"RSGI|RS2WCI":{"m":"RSGI","id":"RS2WCI","name":"Comprehensive","mname":"Comprehensive","lob":"Motor Insurance","grp":"motor","a":{"group":0,"whole":0,"joint":0,"motorType":"2W-Pvt","pt":1,"ptUnit":"Years","policyType":"Comprehensive","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":0,"retail":1,"wholeAge":0},"plans":{},"v":[]},"RSGI|RS2WOD":{"m":"RSGI","id":"RS2WOD","name":"Own Damage","mname":"Own Damage","lob":"Motor Insurance","grp":"motor","a":{"group":0,"whole":0,"joint":0,"motorType":"2W-Pvt","pt":1,"ptUnit":"Years","policyType":"Own Damage","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":0,"retail":1,"wholeAge":0},"plans":{},"v":[]},"RSGI|RS2WTP":{"m":"RSGI","id":"RS2WTP","name":"Third Party","mname":"Third Party","lob":"Motor Insurance","grp":"motor","a":{"group":0,"whole":0,"joint":0,"motorType":"2W-Pvt","pt":1,"ptUnit":"Years","policyType":"Third Party","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":0,"retail":1,"wholeAge":0},"plans":{},"v":[]},"RSGI|RS2WTP5":{"m":"RSGI","id":"RS2WTP5","name":"Third Party 5 Year","mname":"Third Party 5 Year","lob":"Motor Insurance","grp":"motor","a":{"group":0,"whole":0,"joint":0,"motorType":"2W-Pvt","pt":5,"ptUnit":"Years","policyType":"Third Party 5 Year","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":0,"retail":1,"wholeAge":0},"plans":{},"v":[]},"RSGI|RS4WBD":{"m":"RSGI","id":"RS4WBD","name":"New","mname":"New","lob":"Motor Insurance","grp":"motor","a":{"group":0,"whole":0,"joint":0,"motorType":"4W-Pvt","pt":1,"ptUnit":"Years","policyType":"New","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":0,"retail":1,"wholeAge":0},"plans":{},"v":[]},"RSGI|RS4WCI":{"m":"RSGI","id":"RS4WCI","name":"Comprehensive","mname":"Comprehensive","lob":"Motor Insurance","grp":"motor","a":{"group":0,"whole":0,"joint":0,"motorType":"4W-Pvt","pt":1,"ptUnit":"Years","policyType":"Comprehensive","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":0,"retail":1,"wholeAge":0},"plans":{},"v":[]},"RSGI|RS4WOD":{"m":"RSGI","id":"RS4WOD","name":"Own Damage","mname":"Own Damage","lob":"Motor Insurance","grp":"motor","a":{"group":0,"whole":0,"joint":0,"motorType":"4W-Pvt","pt":1,"ptUnit":"Years","policyType":"Own Damage","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":0,"retail":1,"wholeAge":0},"plans":{},"v":[]},"RSGI|RS4WTP":{"m":"RSGI","id":"RS4WTP","name":"Third Party","mname":"Third Party","lob":"Motor Insurance","grp":"motor","a":{"group":0,"whole":0,"joint":0,"motorType":"4W-Pvt","pt":1,"ptUnit":"Years","policyType":"Third Party","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":0,"retail":1,"wholeAge":0},"plans":{},"v":[]},"RSGI|RS4WTP3":{"m":"RSGI","id":"RS4WTP3","name":"Third Party 3 Year","mname":"Third Party 3 Year","lob":"Motor Insurance","grp":"motor","a":{"group":0,"whole":0,"joint":0,"motorType":"4W-Pvt","pt":3,"ptUnit":"Years","policyType":"Third Party 3 Year","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":0,"retail":1,"wholeAge":0},"plans":{},"v":[]},"SBI|2K":{"m":"SBI","id":"2K","name":"SBI Life Smart Platina Assure","mname":"Smart Platina Assure","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":0,"joint":0,"maxAge":60,"maxMatAge":75,"maxPT":20,"maxPPT":10,"maxIns":1,"minAge":0,"minMatAge":15,"minPT":15,"minPPT":7,"minSA":315000,"pt":{"rule":"depends on ppt","options":[]},"ptUnit":"Years","ppf":"M,Y","ppo":3,"qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"type":"nonParticipating","wholeAge":0},"plans":{},"v":[]},"SBI|2Q":{"m":"SBI","id":"2Q","name":"SBI Life Saral Jeevan Bima","mname":"SBI Life Saral Jeevan Bima","lob":"Life Term","grp":"LifeTerm","a":{"group":0,"whole":0,"joint":0,"maxAge":65,"maxMatAge":70,"maxPT":40,"maxPPT":40,"maxIns":1,"maxSA":2500000,"minAge":18,"minMatAge":23,"minPT":5,"minPPT":1,"minSA":500000,"ptUnit":"Years","ppf":"Y,HY,M,S","qInc":0,"qMB":0,"qPrem":0,"qSA":1,"retail":1,"riders":0,"wholeAge":0},"plans":{},"v":[]},"SBI|2X":{"m":"SBI","id":"2X","name":"SBI Life Smart Platina Plus","mname":"SBI Life Smart Platina Plus","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":0,"joint":0,"maxAge":60,"maxMatAge":99,"maxPT":39,"maxPPT":10,"maxIns":1,"minAge":18,"minMatAge":41,"minPT":23,"minPPT":7,"minSA":50000,"pt":"expressionValue = None\nif request.get(product\").get(\"premiumPaymentOption\") ==\"3","ptUnit":"Years","ppf":"M,HY,Y","ppo":3,"qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"type":"nonParticipating","wholeAge":0},"plans":{},"v":[]},"SBI|2Z":{"m":"SBI","id":"2Z","name":"SBI Life Smart Lifetime Saver","mname":"Smart Lifetime Saver","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":1,"joint":0,"maxAge":55,"maxMatAge":100,"maxPT":100,"maxPPT":15,"maxIns":1,"minAge":0,"minMatAge":25,"minPT":45,"minPPT":10,"minSA":300000,"pt":"expressionValue = None\nage = None\n\nfor individualInfo in request.get(personalInf","ptUnit":"Years","ppf":"M,HY,Y","ppo":3,"qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"type":"Participating","wholeAge":100},"plans":{},"v":[]},"SBI|3D":{"m":"SBI","id":"3D","name":"SBI Life Smart Swadhan Supreme","mname":"Smart Swadhan Supreme","lob":"Life Term","grp":"LifeTerm","a":{"group":0,"whole":0,"joint":0,"maxAge":60,"maxMatAge":75,"maxPT":30,"maxPPT":15,"maxIns":1,"maxSA":null,"minAge":18,"minMatAge":25,"minPT":10,"minPPT":7,"minSA":2500000,"ptUnit":"Years","ppf":"Y,HY,M","uin":"111N140V02","qInc":0,"qMB":0,"qPrem":0,"qSA":1,"retail":1,"wholeAge":100},"plans":{},"v":[]},"SBI|3G":{"m":"SBI","id":"3G","name":"SBI Life Smart Platina Supreme","mname":"Smart Platina Supreme","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":0,"joint":0,"maxAge":60,"maxMatAge":75,"maxPT":15,"maxPPT":10,"maxIns":1,"minAge":3,"minMatAge":18,"minPT":8,"minPPT":7,"minPrem":4167,"minSA":550000,"ptUnit":"Years","ppf":"M,HY,Y","ppo":3,"uin":"111N171V04","qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"type":"nonParticipating","wholeAge":0},"plans":{},"v":[]},"SBI|3K":{"m":"SBI","id":"3K","name":"SBI Life Smart Shield Premier","mname":"Smart Shield Premier","lob":"Life Term","grp":"LifeTerm","a":{"group":0,"whole":0,"joint":0,"maxAge":60,"maxMatAge":85,"maxPT":67,"maxPPT":25,"maxIns":1,"maxSA":200000000,"minAge":18,"minMatAge":28,"minPT":10,"minPPT":5,"minSA":20000000,"ptUnit":"Years","ppf":"Y,HY,M","uin":"111N145V01","qInc":0,"qMB":0,"qPrem":0,"qSA":1,"retail":1,"wholeAge":100},"plans":{},"v":[]},"SBI|3Y":{"m":"SBI","id":"3Y","name":"SBI Life Smart Platina Young Achiever","mname":"Smart Platina Young Achiever","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":0,"joint":0,"maxAge":15,"maxMatAge":35,"maxPT":25,"maxPPT":10,"maxIns":1,"minAge":0,"minMatAge":18,"minPT":15,"minPPT":7,"minPrem":4250,"minSA":350000,"pt":20,"ptUnit":"Years","ppf":"M,Y,HY","ppo":3,"uin":"111N173V03","qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"type":"nonParticipating","wholeAge":0},"plans":{},"v":[]},"SBI|4B":{"m":"SBI","id":"4B","name":"SBI Life Smart Money Back Plus","mname":"Smart Money Back Plus","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":0,"joint":0,"maxAge":50,"maxMatAge":70,"maxPT":25,"maxPPT":12,"maxIns":1,"minAge":0,"minMatAge":20,"minPT":20,"minPPT":7,"minPrem":500000,"minSA":200000,"pt":"expressionValue = None\npolicy_term = request.get(product\"","ptUnit":"Years","ppf":"M,HY,Y","ppo":3,"qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"type":"Participating"},"plans":{},"v":[]},"SBI|4E":{"m":"SBI","id":"4E","name":"SBI Life Smart Platina Advantage","mname":"Smart Platina Advantage","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":0,"joint":0,"maxAge":60,"maxMatAge":75,"maxPT":30,"maxPPT":10,"maxIns":1,"minAge":0,"minMatAge":18,"minPT":15,"minPPT":7,"minPrem":5000,"minSA":169855,"pt":20,"ptUnit":"Years","ppf":"M,Y,HY","ppo":3,"uin":"111N175V02","qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"type":"nonParticipating","wholeAge":0},"plans":{},"v":[]},"SBIG|SPHLTH":{"m":"SBIG","id":"SPHLTH","name":"Super Health","mname":"Super Health","lob":"Health","grp":"health","a":{"pt":"1,2,3","ptUnit":"Year","ppf":"S","ppo":1,"waiting":"Standard Waiting period of 30 Days and Upto a maximum of 36 months for Pre-Existing Diseases and Specific Illnesses."},"plans":{"10112":{"d":"Sum Insured available in this plan is 3L,5L,7L,10L,15L,20L,25L","pt":1,"ppf":"S","ppo":1,"si":300000},"10113":{"d":"Sum Insured available in this plan is 3L,5L,7L,10L","pt":1,"ppf":"S","ppo":1,"si":300000},"10114":{"d":"Sum Insured available in this plan is 10L,15L,20L,25L,30L,40L,50L","pt":1,"ppf":"S","ppo":1,"si":1000000},"10115":{"d":"Sum Insured available in this plan is 50L,75L,1Cr,2Cr","pt":1,"ppf":"S","ppo":1,"si":5000000}},"v":["maxAdultInsuredAllowed: maximum adult insured allowed is 4","maxChildInsuredAllowed: maximum child insured allowed is 3","policyTerm: allowed policyTerm is 1, 2 or 3","sumInsured: quoteAmount allowed is 300000 or 500000 or 700000 or 1000000 or 1500000 or 2000000 or 2500000","sumInsured: quoteAmount allowed is 300000 or 500000 or 700000 or 1000000","sumInsured: quoteAmount allowed is 1000000 or 1500000 or 2000000 or 2500000 or 3000000 or 4000000 or 5000000","sumInsured: quoteAmount allowed is 5000000 or 7500000 or 10000000 or 20000000"]},"STAR|RUSO":{"m":"STAR","id":"RUSO","name":"Star Health RUSO","mname":"Star Health RUSO","lob":"Embedded","grp":"GrpTerm","a":{"group":0,"whole":0,"joint":0,"maxAge":65,"maxMatAge":99,"maxPT":99,"maxPPT":{"rule":"depends on premiumPaymentOption","options":[["1"]]},"maxIns":1,"maxPrem":1000,"maxSA":200000,"minAge":18,"minAgeUnit":"Years","minMatAge":18,"minPT":1,"minPPT":{"rule":"depends on premiumPaymentOption","options":[["1"]]},"minPrem":151,"minSA":200000,"ptUnit":"Years","ppf":"S,Y","qInc":0,"qMB":0,"qPrem":0,"qSA":1,"retail":1,"riders":0,"type":"Participating"},"plans":{"271":{"d":"RUSO Personal Accident Insurance Plan","pt":1,"si":"expressionValue=200000\"\""}},"v":["maxAdultInsuredAllowed: maximum adult insured allowed is 1","maxChildInsuredAllowed: Child not Allowed for this plan","policyTerm: allowed policyTerm is 1","sumInsured: quoteAmount allowed is 200000"]},"STAR|STARAS":{"m":"STAR","id":"STARAS","name":"Star - Health Assure","mname":"Star Health Assure Insurance Policy","lob":"Health","grp":"health","a":{"pt":"1,2,3","ptUnit":"Year","ppf":"S","ppo":1,"waiting":"Standard Waiting period of 30 Days and up to a maximum of 36 months for Pre-Existing Diseases and Specific Illnesses."},"plans":{"30043":{"d":"Star Health Assure Insurance Policy","pt":1,"ppf":"S","ppo":1,"si":500000}},"v":["maxAdultInsuredAllowed: maximum adult insured allowed is 6","maxChildInsuredAllowed: maximum child insured allowed is 3","policyTerm: allowed policyTerm is 1, 2, or 3"]},"STAR|STARCIP":{"m":"STAR","id":"STARCIP","name":"Star - Comprehensive","mname":"Star Comprehensive","lob":"Health","grp":"health","a":{"maxAdult":2,"maxChild":3,"maxSIposp":500000,"pt":"1,2,3","ptUnit":"expressionValue = Year\"\"","ppf":"S","ppo":1,"si":1000000},"plans":{"10045":{"d":"Star Comprehensive Health Insurance policy provides the necessary financial assistance that a person requires during a medical emergency. The policy comes with ","pt":1,"si":500000}},"v":["maxAdultInsuredAllowed: maximum adult insured allowed is 2","maxChildInsuredAllowed: maximum child insured allowed is 3","policyTerm: allowed policyTerm is 1, 2, 3","sumInsured: quoteAmount allowed is 500000 or 750000 or 1000000 or 1500000 or 2000000 or 2500000 or 5000000 or 7500000 or 10000000"]},"STAR|STARFHO":{"m":"STAR","id":"STARFHO","name":"Star - Family Health Optima","mname":"Family Health Optima","lob":"Health","grp":"health","a":{"maxAdult":2,"maxChild":3,"maxSIposp":500000,"pt":"1,2","ptUnit":"expressionValue = Year\"\"","ppf":"S","ppo":1,"si":500000},"plans":{},"v":[]},"STAR|STARSCRC":{"m":"STAR","id":"STARSCRC","name":"Star - Senior Citizens Red Carpet","mname":"Senior Citizens Red Carpet","lob":"Health","grp":"health","a":{"maxAdult":2,"maxChild":0,"maxSIposp":500000,"pt":"1,2,3","ptUnit":"expressionValue = Year\"\"","ppf":"S","ppo":1,"si":1000000},"plans":{},"v":[]},"STAR|STRSF":{"m":"STAR","id":"STRSF","name":"Star - Super Flexi","mname":"Super Star Flexi","lob":"Health","grp":"health","a":{"pt":"1,2,3","ptUnit":"Year","ppf":"S","ppo":1,"waiting":"Standard Waiting period of 30 Days and up to a maximum of 36 months for Pre-Existing Diseases and Specific Illnesses."},"plans":{"20021":{"d":"Sum Insured available for this plan is 5L, 7.5L and 10L","pt":1,"ppf":"S","ppo":1,"si":500000},"20022":{"d":"Sum Insured available for this plan is 7.5L, 10L, 15L, 20L, 25L, 50L and 100L","pt":1,"ppf":"S","ppo":1,"si":750000},"20023":{"d":"Sum Insured available for this plan is 7.5L, 10L, 15L, 20L, 25L, 50L and 100L","pt":1,"ppf":"S","ppo":1,"si":750000}},"v":["maxAdultInsuredAllowed: maximum adult insured allowed is 2","maxChildInsuredAllowed: maximum child insured allowed is 4","policyTerm: allowed policyTerm is 1, 2 or 3","sumInsured: quoteAmount allowed is 500000 or 750000 or 1000000","policyTerm: allowed policyTerm is 1, 2, or 3","sumInsured: quoteAmount allowed is 750000 or 1500000 or 2000000 or 2500000 or 5000000 or 10000000 or 999999999"]},"STAR|YSTAR":{"m":"STAR","id":"YSTAR","name":"Star - Young Star","mname":"Young Star","lob":"Health","grp":"health","a":{"maxAdult":2,"maxChild":3,"maxSIposp":500000,"pt":"1,2,3","ptUnit":"expressionValue = Year\"\"","ppf":"S","ppo":1,"si":500000},"plans":{"10064":{"d":"The Young Star Policy is available to people between 18 years and 40 years It is available on floater and individual basis The sum insured starts from 3 lakhs a","pt":1,"si":300000},"10065":{"d":"The Young Star Policy is available to people between 18 years and 40 years It is available on floater and individual basis The sum insured starts from 3 lakhs a","pt":1,"si":300000}},"v":["maxAdultInsuredAllowed: maximum adult insured allowed is 2","maxChildInsuredAllowed: maximum child insured allowed is 3","policyTerm: allowed policyTerm is 1, 2, 3","sumInsured: quoteAmount allowed is 300000 or 500000 or 1000000 or 1500000 or 2000000 or 2500000 or 5000000 or 7500000 or 10000000"]},"TAGIC|MEDICV2":{"m":"TAGIC","id":"MEDICV2","name":"Tata AIG - Medicare V2","mname":"Tata AIG Medicare V2","lob":"Health","grp":"health","a":{"maxSIposp":500000,"pt":"1,2,3","ptUnit":"Year","ppf":"S","ppo":1,"si":500000,"waiting":"Standard Waiting period of 30 Days and Upto a maximum of 48 months for Pre-Existing Diseases and Specific Illnesses."},"plans":{"10091":{"d":"Sum Insured available in this plan is 5,10,15,20,25,50,75Lacs 1,2,3 Cr","pt":1,"si":500000},"10116":{"d":"Sum Insured available in this plan is 5,10,15,20,25,50,75Lacs 1,2,3 Cr","pt":1,"si":500000},"20016":{"d":"Sum Insured available in this plan is 25,50,75Lacs 1,2,3 Cr","pt":1,"si":2500000},"20017":{"d":"Sum Insured available in this plan is 5,10,15,20 Lakhs","pt":1,"si":500000}},"v":["maxAdultInsuredAllowed: maximum adult insured allowed is 4","maxChildInsuredAllowed: maximum child insured allowed is 3","policyTerm: allowed policyTerm is 1, 2 or 3","sumInsured: quoteAmount allowed is 500000 or 1000000 or 1500000 or 2000000 or 2500000 or 5000000 or 7500000 or 10000000 or 20000000 or 30000000","sumInsured: quoteAmount allowed is 500000 or 750000 or 1000000 or 1500000 or 2000000 or 2500000 or 5000000 or 7500000 or 10000000 or 20000000 or 30000000","sumInsured: quoteAmount allowed is 2500000 or 5000000 or 7500000 or 10000000 or 20000000 or 30000000","sumInsured: quoteAmount allowed is 500000 or 750000 or 1000000 or 1500000 or 2000000"]},"TAGIC|TG4WBD":{"m":"TAGIC","id":"TG4WBD","name":"New","mname":"New","lob":"Motor Insurance","grp":"motor","a":{"group":0,"whole":0,"joint":0,"motorType":"4W-Pvt","pt":1,"ptUnit":"Years","policyType":"New","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":0,"retail":1,"wholeAge":0},"plans":{},"v":[]},"TAGIC|TG4WCI":{"m":"TAGIC","id":"TG4WCI","name":"Comprehensive","mname":"Comprehensive","lob":"Motor Insurance","grp":"motor","a":{"group":0,"whole":0,"joint":0,"motorType":"4W-Pvt","pt":1,"ptUnit":"Years","policyType":"Comprehensive","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":0,"retail":1,"wholeAge":0},"plans":{},"v":[]},"TAGIC|TG4WOD":{"m":"TAGIC","id":"TG4WOD","name":"Own Damage","mname":"Own Damage","lob":"Motor Insurance","grp":"motor","a":{"group":0,"whole":0,"joint":0,"motorType":"4W-Pvt","pt":1,"ptUnit":"Years","policyType":"Own Damage","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":0,"retail":1,"wholeAge":0},"plans":{},"v":[]},"TAGIC|TG4WTP":{"m":"TAGIC","id":"TG4WTP","name":"Third Party","mname":"Third Party","lob":"Motor Insurance","grp":"motor","a":{"group":0,"whole":0,"joint":0,"motorType":"4W-Pvt","pt":1,"ptUnit":"Years","policyType":"Third Party","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":0,"retail":1,"wholeAge":0},"plans":{},"v":[]},"TAGIC|TG4WTP3":{"m":"TAGIC","id":"TG4WTP3","name":"Third Party 3 Year","mname":"Third Party 3 Year","lob":"Motor Insurance","grp":"motor","a":{"group":0,"whole":0,"joint":0,"motorType":"4W-Pvt","pt":3,"ptUnit":"Years","policyType":"Third Party 3 Year","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":0,"retail":1,"wholeAge":0},"plans":{},"v":[]},"TATA|FGPlus":{"m":"TATA","id":"FGPlus","name":"Tata AIA Fortune Guarantee Plus","mname":"TATA AIA Fortune Guarantee Plus","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":0,"joint":1,"maxAge":60,"maxMatAge":77,"maxPT":17,"maxPPT":{"rule":"depends on premiumPaymentOption","options":[["5","6","7","8","9","10","11","12"]]},"maxIns":1,"maxSA":200000000,"medical":0,"minAge":1,"minMatAge":18,"minPT":5,"minPPT":{"rule":"depends on premiumPaymentOption","options":[["5","6","7","8","9","10","11","12"]]},"minSA":50000,"pt":"expressionValue = None\nif request.get(product\").get(\"planOption\").get(\"OptionSel","ptUnit":"Years","ppf":"S,Y,HY,Q,M","ppo":"expressionValue=None\nif request.get('product').get('planOption').get('OptionSele","uin":"110N158V14","qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"riders":1,"type":"nonParticipating","wholeAge":100},"plans":{},"v":[]},"TATA|FGPlus_P":{"m":"TATA","id":"FGPlus_P","name":"Tata AIA Fortune Guarantee Plus - POS","mname":"TATA AIA Fortune Guarantee Plus","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":0,"joint":0,"maxAge":60,"maxMatAge":77,"maxPT":17,"maxPPT":{"rule":"depends on premiumPaymentOption","options":[["5","6","7","8","9","10","11","12"]]},"maxIns":1,"maxSA":2500000,"medical":0,"minAge":1,"minMatAge":18,"minPT":5,"minPPT":{"rule":"depends on premiumPaymentOption","options":[["5","6","7","8","9","10","11","12"]]},"minPrem":2120,"minSA":50000,"pt":"expressionValue = None\nif request.get(product\").get(\"planOption\").get(\"OptionSel","ptUnit":"Years","ppf":"S,Y,HY,Q,M","ppo":3,"uin":"110N158V13","qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"riders":0,"type":"nonParticipating","wholeAge":100},"plans":{},"v":[]},"TATA|FGPnsion":{"m":"TATA","id":"FGPnsion","name":"Tata AIA Fortune Guarantee Pension","mname":"Tata AIA Life Insurance Fortune Guarantee Pension","lob":"Investment","grp":"annuity","a":{"group":0,"whole":1,"joint":1,"maxAge":80,"maxPPT":12,"maxIns":2,"minAge":35,"minPPT":1,"ptUnit":"Years","ppf":"S,Y,HY,Q,M","uin":"110N161V13","qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"riders":0,"type":"nonParticipating"},"plans":{},"v":[]},"TATA|FGPnsn_P":{"m":"TATA","id":"FGPnsn_P","name":"Tata AIA Fortune Guarantee Pension (POS)","mname":"Tata AIA Life Insurance Fortune Guarantee Pension","lob":"Investment","grp":"annuity","a":{"whole":1,"joint":0,"maxAge":70,"maxPPT":1,"maxIns":1,"minAge":40,"minPPT":1,"ptUnit":"Years","ppf":"S,Y,HY,Q,M","uin":"110N161V13","qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"riders":0,"type":"nonParticipating"},"plans":{},"v":[]},"TATA|Fro3":{"m":"TATA","id":"Fro3","name":"Tata AIA Fortune Pro","mname":"Tata AIA Life Insurance Fortune Pro","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":0,"joint":0,"maxAge":65,"maxMatAge":80,"maxPT":40,"maxIns":1,"minAge":30,"minAgeUnit":"Days","minMatAge":18,"minPT":6,"minPPT":{"rule":"depends on premiumPaymentOption","options":[["5"],["12"]]},"minPrem":1000,"pt":15,"ptUnit":"Years","ppf":"Y,HY,Q,M,S","ppo":3,"uin":"110L112V06","qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"riders":1,"type":"ULIP"},"plans":{},"v":[]},"TATA|FroPro":{"m":"TATA","id":"FroPro","name":"Tata AIA Fortune Pro","mname":"Tata AIA Life Insurance Fortune Pro","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":0,"joint":0,"maxAge":65,"maxMatAge":80,"maxPT":40,"maxIns":1,"minAge":30,"minAgeUnit":"Days","minMatAge":18,"minPT":6,"minPPT":{"rule":"depends on premiumPaymentOption","options":[["5"],["12"]]},"minPrem":1000,"pt":15,"ptUnit":"Years","ppf":"Y,HY,Q,M,S","ppo":3,"uin":"110L112V06","qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"riders":1,"type":"ULIP"},"plans":{},"v":[]},"TATA|FutGuaSp":{"m":"TATA","id":"FutGuaSp","name":"Tata AIA Fortune Guarantee Supreme","mname":"TATA AIA Fortune Guarantee Supreme","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":0,"joint":1,"maxAge":65,"maxMatAge":100,"maxPT":50,"maxPPT":{"rule":"depends on premiumPaymentOption","options":[["12"]]},"maxIns":2,"maxSA":200000000,"minAge":1,"minMatAge":18,"minPT":20,"minPPT":{"rule":"depends on premiumPaymentOption","options":[["5"]]},"minSA":50000,"pt":20,"ptUnit":"Years","ppf":"S,Y,HY,Q,M","ppo":3,"uin":"110N163V02","qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"riders":1,"type":"nonParticipating","wholeAge":100},"plans":{},"v":[]},"TATA|GRIP":{"m":"TATA","id":"GRIP","name":"Tata AIA Guaranteed Return Insurance Plan","mname":"Tata AIA Life Insurance Guaranteed Return Insuranc","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":0,"joint":0,"maxAge":65,"maxMatAge":85,"maxPT":40,"maxPPT":12,"maxIns":1,"medical":0,"minAge":1,"minMatAge":18,"minPT":5,"minPPT":5,"minPrem":"expressionValue = 2120\"\"","pt":"expressionValue = None\nif request.get(product\").get(\"planOption\").get(\"OptionSel","ptUnit":"Years","ppf":"S,Y,HY,Q,M","uin":"110N152V12","qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"riders":1,"type":"nonParticipating"},"plans":{},"v":[]},"TATA|MahRakSp":{"m":"TATA","id":"MahRakSp","name":"Tata AIA Maha Raksha Supreme Select","mname":"Tata AIA Life Insurance Maha Raksha Supreme Select","lob":"Life Term","grp":"LifeTerm","a":{"group":0,"whole":1,"joint":0,"maxAge":65,"maxMatAge":100,"maxPT":82,"maxPPT":{"rule":"depends on premiumPaymentOption","options":[["81"]]},"maxIns":1,"maxSA":200000000,"minAge":18,"minMatAge":19,"minPT":4,"minPPT":{"rule":"depends on premiumPaymentOption","options":[["1"]]},"minSA":20000000,"ptUnit":"Years","ppf":"S,Y,HY,Q,M","uin":"110N171V09","qInc":0,"qMB":0,"qPrem":0,"qSA":1,"retail":1,"wholeAge":100},"plans":{},"v":[]},"TATA|SamRakPr":{"m":"TATA","id":"SamRakPr","name":"Tata AIA Sampoorna Raksha Promise","mname":"Tata AIA Life Insurance Sampoorna Raksha Promise","lob":"Life Term","grp":"LifeTerm","a":{"group":0,"whole":1,"joint":0,"maxAge":65,"maxMatAge":100,"maxPT":82,"maxPPT":{"rule":"depends on premiumPaymentOption","options":[]},"maxIns":1,"maxSA":200000000,"minAge":18,"minMatAge":18,"minPT":4,"minPPT":2,"minSA":5000000,"ptUnit":"Years","ppf":"S,Y,HY,Q,M","uin":"110N176V13","qInc":0,"qMB":0,"qPrem":0,"qSA":1,"retail":1,"wholeAge":100},"plans":{},"v":[]},"TATA|SamRakSp":{"m":"TATA","id":"SamRakSp","name":"Tata AIA Sampoorna Raksha Supreme","mname":"Tata AIA Life Insurance Sampoorna Raksha Supreme","lob":"Life Term","grp":"LifeTerm","a":{"group":0,"whole":1,"joint":0,"maxAge":65,"maxMatAge":100,"maxPT":82,"maxPPT":{"rule":"depends on premiumPaymentOption","options":[["82"]]},"maxIns":1,"maxSA":200000000,"minAge":18,"minMatAge":28,"minPT":10,"minPPT":{"rule":"depends on premiumPaymentOption","options":[["5"]]},"minSA":5000000,"ptUnit":"Years","ppf":"S,Y,HY,Q,M","uin":"110N160V05","qInc":0,"qMB":0,"qPrem":0,"qSA":1,"retail":1,"wholeAge":100},"plans":{},"v":[]},"TATA|SAP":{"m":"TATA","id":"SAP","name":"Tata AIA Smart Annuity Plan","mname":"Tata AIA Life Insurance Smart Annuity Plan","lob":"Investment","grp":"annuity","a":{"group":0,"whole":1,"joint":1,"maxAge":85,"maxPPT":1,"maxIns":2,"minAge":45,"minPPT":1,"ptUnit":"Years","ppf":"S","qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"riders":0},"plans":{},"v":[]},"TATA|SmtVIP":{"m":"TATA","id":"SmtVIP","name":"Tata AIA Life Insurance Smart Value Income Plan","mname":"TATA AIA Smart Value Income Plan","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":1,"joint":1,"maxAge":65,"maxMatAge":100,"maxPT":82,"maxPPT":{"rule":"depends on ppo","options":[["5","6","7","8","9","10","11","12"]]},"maxIns":1,"maxSA":200000000,"medical":0,"minAge":1,"minMatAge":18,"minPT":10,"minPPT":{"rule":"depends on ppo","options":[["5","6","7","8","9","10","11","12"]]},"minPrem":2000,"minSA":50000,"pt":"expressionValue = None\nppo = request.get('product').get('premiumPaymentOption')\n","ptUnit":"Years","ppf":"S,Y,HY,Q,M","ppo":{"rule":"depends on opt","options":[]},"uin":"110N162V03","qInc":1,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"riders":1,"type":"Participating","wholeAge":100},"plans":{},"v":[]},"TATA|SRPnsion":{"m":"TATA","id":"SRPnsion","name":"Tata AIA Saral Pension","mname":"Tata AIA Life Insurance Saral Pension","lob":"Investment","grp":"annuity","a":{"group":0,"whole":1,"joint":0,"maxAge":80,"maxPPT":1,"maxIns":2,"minAge":40,"minPPT":1,"ptUnit":"Years","ppf":"S","qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"riders":0},"plans":{},"v":[]},"TATA|SRS_P":{"m":"TATA","id":"SRS_P","name":"Tata AIA Sampoorna Raksha Supreme - POS","mname":"Tata AIA Life Insurance Sampoorna Raksha Supreme","lob":"Life Term","grp":"LifeTerm","a":{"group":0,"whole":1,"joint":0,"maxAge":60,"maxMatAge":65,"maxPT":47,"maxIns":1,"maxSA":200000000,"medical":0,"minAge":18,"minMatAge":23,"minPT":5,"minSA":5000000,"ptUnit":"Years","ppf":"S,Y,HY,Q,M","uin":"110N160V03","qInc":0,"qMB":0,"qPrem":0,"qSA":1,"retail":1,"riders":0,"wholeAge":100},"plans":{},"v":[]},"TATA|SSIP":{"m":"TATA","id":"SSIP","name":"Tata AIA Smart SIP","mname":"Smart SIP","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":1,"joint":0,"maxAge":65,"maxMatAge":100,"maxPT":100,"maxIns":1,"minAge":30,"minAgeUnit":"Days","minMatAge":18,"minPT":5,"minPPT":{"rule":"depends on premiumPaymentOption","options":[["10"],["5"]]},"minPrem":83.33,"pt":15,"ptUnit":"Years","ppf":"Y,HY,Q,M,S","ppo":3,"uin":"110L174V02","qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"riders":1,"type":"ULIP"},"plans":{"30065":{"d":"Wealth Secure","maxMatAge":100},"30066":{"d":"Future Secure","maxMatAge":85,"minAge":18,"minAgeUnit":"Years","minMatAge":28},"30067":{"d":"Goal Secure","maxMatAge":85},"30068":{"d":"Family Secure","maxMatAge":85,"minAge":18,"minAgeUnit":"Years","minMatAge":28}},"v":[]},"TATA|SSRMP":{"m":"TATA","id":"SSRMP","name":"Tata AIA Life Insurance Smart Sampoorna Raksha Maxima Plus","mname":"Tata AIA Life Insurance Sampoorna Maxima Plus","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":0,"joint":0,"maxAge":65,"maxMatAge":100,"maxPT":82,"maxPPT":82,"maxIns":1,"minAge":18,"minAgeUnit":"Years","minMatAge":48,"minPT":30,"minPPT":5,"minPrem":1250,"minSA":5000000,"pt":35,"ptUnit":"Years","ppf":"Y,HY,Q,M","ppo":3,"qInc":0,"qMB":0,"qPrem":0,"qSA":1,"retail":1,"riders":1,"type":"ULIP"},"plans":{},"v":[]},"TATA|SSRPR":{"m":"TATA","id":"SSRPR","name":"Tata AIA Smart Sampoorna Raksha","mname":"Tata AIA Life Insurance Smart Sampoorna Raksha","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":0,"joint":0,"maxAge":65,"maxMatAge":100,"maxPT":82,"maxPPT":82,"maxIns":1,"minAge":18,"minAgeUnit":"Years","minMatAge":48,"minPT":30,"minPPT":5,"minPrem":1250,"minSA":6000000,"pt":35,"ptUnit":"Years","ppf":"Y,HY,Q,M","ppo":3,"qInc":0,"qMB":0,"qPrem":0,"qSA":1,"retail":1,"riders":1,"type":"ULIP"},"plans":{},"v":[]},"TATA|WalthPro":{"m":"TATA","id":"WalthPro","name":"Tata AIA Wealth Pro","mname":"Tata AIA Life Insurance Wealth Pro","lob":"Investment","grp":"LifeSave","a":{"group":0,"whole":0,"joint":0,"maxAge":60,"maxMatAge":75,"maxPT":40,"maxIns":1,"minAge":30,"minAgeUnit":"Days","minMatAge":18,"minPT":15,"minPPT":"if request.get(product\").get(\"premiumPaymentOption\") == \"3\":","minPrem":20834,"pt":15,"ptUnit":"Years","ppf":"Y,HY,Q,M,S","ppo":3,"uin":"110L111V04","qInc":0,"qMB":0,"qPrem":1,"qSA":0,"retail":1,"riders":1,"type":"ULIP"},"plans":{},"v":[]},"UNIVSOMP|APLUS":{"m":"UNIVSOMP","id":"APLUS","name":"Universal Sompo - A Plus","mname":"A Plus","lob":"Health","grp":"health","a":{"pt":"1,2,3","ptUnit":"Year","ppf":"S","ppo":1,"si":500000,"waiting":"Standard Waiting period of 30 Days and Upto a maximum of 36 months for Pre-Existing Diseases and Specific Illnesses."},"plans":{"10085":{"d":"Sum Insured available in this plan is 3, 5, 7.5, 10, 12.5, 15, 20, 25, 50, 75, 100 Lacs","pt":1,"si":300000},"10086":{"d":"Sum Insured available in this plan is 3, 5, 7.5, 10, 12.5, 15, 20, 25, 50, 75, 100 Lacs","pt":1,"si":300000},"10087":{"d":"Sum Insured available in this plan is 3, 5, 7.5, 10, 12.5, 15, 20, 25, 50, 75, 100 Lacs","pt":1,"si":300000}},"v":["maxAdultInsuredAllowed: maximum adult insured allowed is 4","maxChildInsuredAllowed: maximum child insured allowed is 4","policyTerm: allowed policyTerm is 1, 2 or 3","sumInsured: quoteAmount allowed is 300000 or 500000 or 750000 or 1000000 or 1250000 or 1500000 or 2000000 or 2500000 or 5000000 or 7500000 or 10000000"]},"ZURKOTAK|ZK2WBD":{"m":"ZURKOTAK","id":"ZK2WBD","name":"New","mname":"New","lob":"Motor Insurance","grp":"motor","a":{"group":0,"whole":0,"joint":0,"motorType":"2W Private","pt":1,"ptUnit":"Years","policyType":"New","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":0,"retail":1,"wholeAge":0},"plans":{},"v":[]},"ZURKOTAK|ZK2WCI":{"m":"ZURKOTAK","id":"ZK2WCI","name":"Comprehensive","mname":"Comprehensive","lob":"Motor Insurance","grp":"motor","a":{"group":0,"whole":0,"joint":0,"motorType":"2W-Pvt","pt":1,"ptUnit":"Years","policyType":"Comprehensive","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":0,"retail":1,"wholeAge":0},"plans":{},"v":[]},"ZURKOTAK|ZK2WOD":{"m":"ZURKOTAK","id":"ZK2WOD","name":"Own Damage","mname":"Own Damage","lob":"Motor Insurance","grp":"motor","a":{"group":0,"whole":0,"joint":0,"motorType":"2W-Pvt","pt":1,"ptUnit":"Years","policyType":"Own Damage","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":0,"retail":1,"wholeAge":0},"plans":{},"v":[]},"ZURKOTAK|ZK4WBD":{"m":"ZURKOTAK","id":"ZK4WBD","name":"New","mname":"New","lob":"Motor Insurance","grp":"motor","a":{"group":0,"whole":0,"joint":0,"motorType":"4W Private","pt":1,"ptUnit":"Years","policyType":"New","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":0,"retail":1,"wholeAge":0},"plans":{},"v":[]},"ZURKOTAK|ZK4WCI":{"m":"ZURKOTAK","id":"ZK4WCI","name":"Comprehensive","mname":"Comprehensive","lob":"Motor Insurance","grp":"motor","a":{"group":0,"whole":0,"joint":0,"motorType":"4W-Pvt","pt":1,"ptUnit":"Years","policyType":"Comprehensive","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":0,"retail":1,"wholeAge":0},"plans":{},"v":[]},"ZURKOTAK|ZK4WOD":{"m":"ZURKOTAK","id":"ZK4WOD","name":"Own Damage","mname":"Own Damage","lob":"Motor Insurance","grp":"motor","a":{"group":0,"whole":0,"joint":0,"motorType":"4W-Pvt","pt":1,"ptUnit":"Years","policyType":"Own Damage","ppf":"S","qInc":0,"qMB":0,"qPrem":0,"qSA":0,"retail":1,"wholeAge":0},"plans":{},"v":[]}};
  try { Object.entries(S.get('extraRules', {}) || {}).forEach(([k, r]) => { if (!RULES[k]) RULES[k] = r; }); } catch (e) {}   // virtual rules for products a test-case sheet names by code (v5.33)
  const RULE_LOB = { 'Health V-2': 'Health', '3-Click': 'Life Term' };
  const nkey = (x) => String(x || '').toLowerCase().replace(/\b(icici|pru|hdfc|life|tata|aia|sbi|bajaj|allianz|niva|bupa|care|health|insurance|plan|the)\b/g, ' ').replace(/[^a-z0-9]+/g, ' ').trim();
  const RULE_ALIAS = { 'medicare': 'TAGIC|MEDICV2', 'prime protect': 'MPLCIGNA|PROHLTH', 'prime advantage': 'MPLCIGNA|PROHLTH', 'prime active': 'MPLCIGNA|PROHLTH', 'lifetime health': 'MPLCIGNA|LIFETIME', 'super star flexi': 'STAR|STRSF', 'comprehensive': 'STAR|STARCIP', 'star health assure': 'STAR|STARAS' };
  function rulesFor(lob, name) {
    if (!name || name === '*' || name === '__ALL__') return null;
    const low = String(name).toLowerCase(); for (const [k, id] of Object.entries(RULE_ALIAS)) if (low.includes(k) && RULES[id]) return RULES[id];
    const want = RULE_LOB[lob] || lob; const n = nkey(name); const full = String(name).toLowerCase();
    const cands = Object.values(RULES).filter((r) => r.lob === want || !want);
    const score = (r) => { const a = nkey(r.name), b = nkey(r.mname); if (!a && !b) return 0;
      if (a === n || b === n) return 100; if (full.includes(String(r.name).toLowerCase()) || full.includes(String(r.mname).toLowerCase())) return 80 + Math.min(19, r.name.length / 2);
      if (n.includes(a) || n.includes(b)) return 60 + Math.min(19, Math.max(a.length, b.length) / 2);
      const nw = n.split(' ').filter((w) => w.length > 2); const hit = nw.filter((w) => a.includes(w) || b.includes(w)).length; return hit >= 2 && hit >= nw.length - 1 ? 40 + hit : 0; };
    let best = null, bs = 0; cands.forEach((r) => { const sc = score(r); if (sc > bs) { bs = sc; best = r; } });
    return bs >= 40 ? best : null;
  }
  const fmtMoney = (v) => typeof v === 'number' ? (v >= 1e7 ? `₹${+(v / 1e7).toFixed(2)} Cr` : v >= 1e5 ? `₹${+(v / 1e5).toFixed(2)} L` : `₹${v}`) : fmtVal(v);
  const fmtVal = (v) => v == null ? '–' : Array.isArray(v) ? v.join(', ') : typeof v === 'object' ? (v.rule + (v.options && v.options.length ? ': ' + v.options.map((o) => o.join('/')).join(' | ') : '')) : String(v);
  const PPF = { Y: 'Yearly', HY: 'Half-yearly', S: 'Half-yearly', Q: 'Quarterly', M: 'Monthly', SP: 'Single' };
  const PPO = { 1: 'Single pay', 2: 'Regular pay', 3: 'Limited pay', '1': 'Single pay', '2': 'Regular pay', '3': 'Limited pay' };
  function ruleRows(r) {
    const a = r.a || {}; const rows = [];
    const age = (v, u) => v == null ? null : (typeof v === 'number' && (u === 'Days' || v > 100) ? (v >= 365 ? `${Math.round(v / 365)} yrs` : `${v} days`) : fmtVal(v) + (typeof v === 'number' ? ' yrs' : ''));
    if (a.minAge != null || a.maxAge != null) rows.push(['Entry age', `${age(a.minAge, a.minAgeUnit) || '–'} to ${age(a.maxAge) || '–'}`]);
    if (a.minMatAge != null || a.maxMatAge != null) rows.push(['Maturity age', `${age(a.minMatAge) || '–'} to ${age(a.maxMatAge) || '–'}`]);
    if (a.minPT != null || a.maxPT != null || a.pt != null) rows.push(['Policy term', (a.minPT != null || a.maxPT != null ? `${fmtVal(a.minPT)} – ${fmtVal(a.maxPT)} ${a.ptUnit || 'yrs'}` : '') + (a.pt != null && typeof a.pt !== 'object' ? ` (default ${fmtVal(a.pt)})` : a.pt && a.pt.rule ? ` (${fmtVal(a.pt)})` : '')]);
    if (a.minPPT != null || a.maxPPT != null) rows.push(['Premium paying term', typeof a.minPPT === 'object' || typeof a.maxPPT === 'object' ? fmtVal(a.minPPT || a.maxPPT) : `${fmtVal(a.minPPT)} – ${fmtVal(a.maxPPT)} yrs`]);
    if (a.ppo != null) rows.push(['Pay option', fmtVal(a.ppo).split(',').map((x) => PPO[x.trim()] || x.trim()).join(', ')]);
    if (a.ppf != null) rows.push(['Pay frequency', fmtVal(a.ppf).split(',').map((x) => PPF[x.trim()] || x.trim()).join(', ')]);
    if (a.minSA != null || a.maxSA != null) rows.push(['Sum assured', `${fmtMoney(a.minSA)} – ${fmtMoney(a.maxSA)}`]);
    if (a.minPrem != null || a.maxPrem != null) rows.push(['Premium', `${fmtMoney(a.minPrem)} – ${fmtMoney(a.maxPrem)}`]);
    if (a.si != null) rows.push(['Sum insured options', fmtVal(a.si)]);
    if (a.maxAdult != null || a.maxChild != null) rows.push(['Members', `max ${fmtVal(a.maxAdult)} adults, ${fmtVal(a.maxChild)} children`]);
    if (a.type) rows.push(['Plan type', fmtVal(a.type)]); if (a.policyType) rows.push(['Policy type', fmtVal(a.policyType)]);
    const q = ['qPrem', 'qSA', 'qInc', 'qMB'].filter((k) => +a[k] === 1).map((k) => ({ qPrem: 'Premium', qSA: 'Sum assured', qInc: 'Income', qMB: 'Maturity benefit' })[k]); if (q.length) rows.push(['Quote by', q.join(', ')]);
    const flags = [['riders', 'riders'], ['joint', 'joint life'], ['whole', 'whole life'], ['medical', 'medicals']].filter(([k]) => +a[k] === 1).map(([, t]) => t); if (flags.length) rows.push(['Allows', flags.join(', ')]);
    if (a.uin) rows.push(['UIN', fmtVal(a.uin)]);
    return rows;
  }
  // test variations derived from the product's rules – each sets the test person's age (and a note) before the run
  function variationsFor(r) {
    const a = (r && r.a) || {}; const num = (v) => (typeof v === 'number' ? v : null);
    const minA = num(a.minAge) != null ? (a.minAgeUnit === 'Days' || a.minAge > 100 ? Math.max(18, Math.ceil(a.minAge / 365)) : Math.max(18, a.minAge)) : 18;
    const maxA = num(a.maxAge) != null && a.maxAge <= 100 ? a.maxAge : 65;
    const v = [{ id: 'normal', label: 'Normal (as entered)', age: null }, { id: 'minAge', label: `Minimum entry age (${minA})`, age: minA }, { id: 'maxAge', label: `Maximum entry age (${maxA})`, age: maxA }];
    if (minA > 18) v.push({ id: 'belowMin', label: `Below minimum age (${minA - 1}) – should be rejected`, age: minA - 1, expectFail: true });
    if (maxA < 90) v.push({ id: 'aboveMax', label: `Above maximum age (${maxA + 1}) – should be rejected`, age: maxA + 1, expectFail: true });
    return v;
  }
  window.__SB_RULES = { RULES, rulesFor, ruleRows, variationsFor };
  window.__SB_PM = { postmanCollection, downloadPostman, gatewayCollection, downloadGateway, capLoad, capClear };
  window.__SB_CTL = { switchOff, switchOn, isOff, showMenu };
  window.__SB_EV = { grabPage, journeyShot, screenshotNow, buildPdf, buildZip, exportEvidence, finishEvidence, startRecording, stopRecording, idbGet, EVD, searchProducts };
  window.__SB_DOC = { learnedDb, learnPut, learnedValue, learnedButton, diagnose, exportDoctor, importLearned, routeKey, confirmPendingButton, pendingBtn };

  // product search across every LOB of the chosen journey type/portal: matches name, product ID, insurer code, UIN, LOB and category
  function searchProducts(q, st) {
    const words = String(q || '').toLowerCase().split(/\s+/).filter(Boolean); if (!words.length) return [];
    const lobs = st.env === 'custom' ? [...new Set(LOBS_ASSISTED.concat(LOBS_DIY))] : (st.mode === 'diy' ? LOBS_DIY : LOBS_ASSISTED).filter((l) => URLS[st.env] && URLS[st.env][l]);
    const out = []; const seen = new Set();
    lobs.forEach((lob) => Object.entries(catalogFor(st.env, lob)).forEach(([cat, names]) => names.forEach((name) => {
      const r = rulesFor(lob, name); const pid = r ? `${r.m}|${r.id}` : ''; const uin = (r && r.a && r.a.uin) || '';
      const hay = `${name} ${pid} ${r ? r.id + ' ' + r.m + ' ' + (r.mname || '') + ' ' + (r.name || '') : ''} ${uin} ${lob} ${cat}`.toLowerCase();
      if (!words.every((w) => hay.includes(w))) return; const key = lob + '|' + name; if (seen.has(key)) return; seen.add(key);
      const exact = words.some((w) => r && (String(r.id).toLowerCase() === w || pid.toLowerCase() === w)) ? 0 : name.toLowerCase().startsWith(words[0]) ? 1 : 2;
      out.push({ lob, cat, name, pid, uin, exact });
    })));
    // the same product reached through several LOBs / the "Other products" list: keep the entry from a real category (3-Click only if it is the sole one)
    const other = (h) => /^other products/i.test(h.cat) ? 1 : 0; const best = {};
    out.forEach((h) => { const k = (h.pid || h.name).toLowerCase(); const cur = best[k]; if (!cur || other(h) < other(cur) || (other(h) === other(cur) && cur.lob === '3-Click' && h.lob !== '3-Click')) best[k] = h; });
    return Object.values(best).sort((a, b) => a.exact - b.exact || other(a) - other(b) || a.name.localeCompare(b.name)).slice(0, 25);
  }
  // Pre-flight: everything already known that would stop this journey – shown in the dialog before the person starts it
  function preflight(st) {
    const out = []; const prod = st.product && !['*', '__ALL__', ''].includes(st.product) ? st.product : '';
    if (prod && st.env === 'demo' && DEMO_NOTES[prod] && /^✗/.test(DEMO_NOTES[prod])) out.push({ kind: 'known', msg: DEMO_NOTES[prod].replace(/^✗\s*/, '') });
    { const rr = prod ? rulesFor(st.lob, prod) : null; const mq = prod ? mqReasonFor(st.env, st.lob, prod, rr && rr.id, rr && rr.m) : null;
      if (!mq && rr && rr.id && rr.m && Object.keys(S.get('mqErrors', {})).some((k) => k.startsWith(st.env + '|' + st.lob + '|')) && !S.get('codes', {})[String(rr.m).toUpperCase() + '|' + rr.id] && !Object.values((CATS()[st.env + '|' + st.lob] || {}).products || {}).flat().some((n) => nkey(n) === nkey(prod))) out.push({ kind: 'mq', msg: `${rr.m} ${rr.id} has never appeared in a multi-quote on ${st.env} (neither quoted nor rejected) – it is probably not enabled for this distributor; the journey will report that right after the quote page loads` });
      if (mq) out.push({ kind: 'mq', msg: `Not shown on the quote page on ${mq.at.slice(0, 10)} – ${mq.manu ? mq.manu + ' ' : ''}${mq.code ? mq.code + ': ' : ''}${mq.msg}${mq.fix ? ' → the script will ' + mq.fix.hint + ' and quote again' : ''}` }); }
    const hist = S.get('results', []).filter((r) => r.env === st.env && r.lob === st.lob && (!prod || r.product === prod)).slice(-8).reverse();
    const last = hist[0];
    if (last && /BLOCKED|PAUSED/.test(last.status)) out.push({ kind: 'last', msg: `${last.status} on ${new Date(last.at).toLocaleString()} at ${last.step || '?'}: ${last.msg || ''}`.slice(0, 260), api: last.api });
    if (prod) { const r = rulesFor(st.lob, prod); const a = r && r.a; const age = st.age || P.age;
      if (a && typeof a.minAge === 'number' && a.minAge <= 100 && age < a.minAge) out.push({ kind: 'rule', msg: `Test person is ${age}; the product's minimum entry age is ${a.minAge} – the quote will be rejected (change the age in step 6 or pick a variation)` });
      if (a && typeof a.maxAge === 'number' && a.maxAge <= 100 && age > a.maxAge) out.push({ kind: 'rule', msg: `Test person is ${age}; the product's maximum entry age is ${a.maxAge} – the quote will be rejected` }); }
    if (st.env !== 'demo' && st.env !== 'dev' && st.env !== 'test' && st.env !== 'custom' && DIST_ENVS[st.env] && DIST_ENVS[st.env].env === 'prod') out.push({ kind: 'prod', msg: 'Production portal – real insurer APIs (the script never pays, but proposals are real)' });
    return out;
  }
  async function portalReachable(url) {
    try { const c = new AbortController(); const tm = setTimeout(() => c.abort(), 6000); await fetch(url, { mode: 'no-cors', cache: 'no-store', signal: c.signal }); clearTimeout(tm); return true; } catch (e) { return false; }
  }
  /* ---------------- simple start: person details + "Fill this form" / "Fill & auto-click Next" (v5.11) ---------------- */
  const modeHere = () => /0010(?=$|[^0-9])/.test((location.href.match(/[?&]id=([^&#]+)/) || [])[1] || '') ? 'diy' : (cfg().lob === HERE.lob && cfg().mode) || 'assisted';
  function showQuickDialog() {
    if (document.getElementById('sb-dialog')) return;
    if (!isPortal() || HERE.lob === 'Launcher' || HERE.lob === '?') { showStartDialog(); return; }         // not on a portal page: the full dialog chooses the portal
    const ov = document.createElement('div'); ov.id = 'sb-dialog'; ov.style.cssText = CSSOV;
    const card = document.createElement('div'); card.style.cssText = CARD + ';width:min(560px,96vw)'; ov.appendChild(card); document.body.appendChild(ov);
    let draft = null;
    const render = () => {
      const c = cfg(); const sameJourney = c.lob === HERE.lob && c.running;
      card.innerHTML = `<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px"><div><div style="font-size:17px;font-weight:700">${HERE.lob === 'Form' ? 'Form on ' + escH(location.host) : escH(HERE.lob) + ' · ' + escH(HERE.env) + ' · ' + (modeHere() === 'diy' ? 'DIY' : 'Assisted')}</div><div style="color:#64748b;font-size:12px">Fill this page with the test person below – with or without the script pressing Next for you.</div></div><button id="sb-close" style="background:none;border:0;font-size:20px;cursor:pointer;color:#64748b" title="Close">✕</button></div>
      <div style="font-weight:700;margin-top:10px">Person details <span style="font-weight:400;color:#64748b;font-size:12px">(used on every page)</span></div>
      <div id="sb-person" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:8px;margin-top:6px;font-size:12px">
        ${[['first', 'First name', P.first], ['middle', 'Middle name (optional)', P.middle], ['last', 'Last name', P.last], ['age', 'Age (years)', P.age], ['phone', 'Mobile number', P.phone], ['email', 'Email ID', P.email], ['income', 'Annual income (₹ lakh)', Math.round(+P.income / 100000)]]
          .map(([k, l, v]) => `<label style="display:flex;flex-direction:column;gap:2px">${l}<input data-p="${k}" value="${String(draft && draft[k] !== undefined ? draft[k] : v ?? '').replace(/"/g, '&quot;')}" ${k === 'age' || k === 'income' ? 'type="number"' : k === 'email' ? 'type="email"' : k === 'phone' ? 'inputmode="numeric" maxlength="10"' : ''} style="padding:6px;border:1px solid #cbd5e1;border-radius:6px;font-size:13px"><span data-err="${k}" style="color:#b91c1c;font-size:11px;min-height:12px"></span></label>`).join('')}
        <label style="display:flex;flex-direction:column;gap:2px">Gender<select data-p="gender" style="padding:6px;border:1px solid #cbd5e1;border-radius:6px;font-size:13px">${['Male', 'Female'].map((g) => `<option ${g === ((draft && draft.gender) || P.gender) ? 'selected' : ''}>${g}</option>`).join('')}</select><span></span></label>
        <label style="display:flex;flex-direction:column;gap:2px">PIN code / city<select data-p="pin" style="padding:6px;border:1px solid #cbd5e1;border-radius:6px;font-size:13px">${PINS.map((x) => `<option value="${x[0]}" ${x[0] === ((draft && draft.pin) || P.pin) ? 'selected' : ''}>${x[0]} – ${x[1]}</option>`).join('')}${PINS.some((x) => x[0] === P.pin) ? '' : `<option value="${P.pin}" selected>${P.pin} – ${escH(P.city)}</option>`}</select><span></span></label>
      </div>
      <div id="sb-wbhost"></div>
      <div style="margin-top:4px;font-size:12px;color:#64748b">DOB used: <b id="sb-dob">${P.dobDMY}</b> · PAN: ${P.pan} · OTP: ${OTP()} <button id="sb-newp" style="${BTN};background:#475569;padding:3px 8px;font-size:12px;margin-left:6px">New person</button></div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:14px">
        <button id="sb-qfill" style="${BTN};background:#2563eb;font-size:14px;padding:9px 16px" title="Every page is filled for you – you press Next / Continue yourself">✎ Fill this form</button>
        <button id="sb-qauto" style="${BTN};background:#16a34a;font-size:14px;padding:9px 16px" title="Fills every page and presses Next until the quote page, where you choose the plan">▶ Fill this form &amp; auto-click Next</button>
      </div>
      <div style="font-size:12px;color:#64748b;margin-top:8px">Auto-click runs to the quote page and shows the plan list there (pick a plan, "Auto" or "Fill only"). The script never pays and never types passwords.</div>
      <div style="display:flex;justify-content:space-between;gap:8px;margin-top:12px;font-size:12px"><a href="#" id="sb-adv" style="color:#2563eb">Advanced: choose portal / plan / batch…</a><span><a href="#" id="sb-wb" style="color:#2563eb" title="Export all form values to Excel / load an edited workbook">📗 Workbook${sheetHas() ? ' (loaded)' : ''}</a> · <a href="#" id="sb-res" style="color:#2563eb">Results</a></span></div>
      ${sameJourney ? `<div style="margin-top:8px;font-size:12px;color:#166534">A journey is already running here (${escH(c.product || 'choose on quote page')}) – pressing a button restarts it from this page.</div>` : ''}`;
      card.querySelector('#sb-close').onclick = () => ov.remove();
      card.querySelector('#sb-adv').onclick = (ev) => { ev.preventDefault(); ov.remove(); showStartDialog(); };
      card.querySelector('#sb-res').onclick = (ev) => { ev.preventDefault(); showResults(); };
      card.querySelector('#sb-wb').onclick = (ev) => { ev.preventDefault(); ov.remove(); showWorkbookDialog(); };
      card.querySelector('#sb-newp').onclick = () => { draft = null; P = generateProfile(); S.set('profile', P); render(); refreshPanel(); };
      let wbRow = null; try { renderSheetPanel(card.querySelector('#sb-wbhost'), (r) => { wbRow = r; }); } catch (e) { console.log('[SB4] workbook panel', e.message); }
      const readPerson = () => { const v = {}; card.querySelectorAll('[data-p]').forEach((e) => (v[e.dataset.p] = e.value.trim())); return v; };
      const showErr = (e) => { card.querySelectorAll('[data-err]').forEach((x) => (x.textContent = e[x.dataset.err] || '')); return !Object.keys(e).length; };
      { const pinSel = card.querySelector('[data-p=pin]'), adSel = card.querySelector('[data-p=address]'), gSel = card.querySelector('[data-p=gender]'), nrSel = card.querySelector('[data-p=nomRel]');
        if (pinSel && adSel) { pinSel.addEventListener('change', () => { adSel.value = pinSel.value; }); adSel.addEventListener('change', () => { pinSel.value = adSel.value; pinSel.dispatchEvent(new Event('change')); }); }
        if (nrSel && gSel) nrSel.addEventListener('change', () => { if (/^Brother –/.test(nrSel.value)) gSel.value = 'Male'; if (/^Sister –/.test(nrSel.value)) gSel.value = 'Female'; gSel.dispatchEvent(new Event('change')); }); }
      card.querySelectorAll('[data-p=age]').forEach((inp) => inp.addEventListener('change', () => { draft = readPerson(); const o = DO(); card.querySelectorAll('details[data-d]').forEach((d) => (o[d.dataset.d] = d.open)); S.set('dlgOpen', o); render(); }));   // the CKYC-identity note under the DOB follows the typed age
      card.querySelectorAll('[data-p]').forEach((inp) => inp.addEventListener(inp.tagName === 'SELECT' ? 'change' : 'input', () => { const v = readPerson(); draft = v; showErr(validatePerson(v)); if (+v.age >= 18 && +v.age <= 90) { const d = dobForAge(+v.age, P.dobISO).split('-'); card.querySelector('#sb-dob').textContent = `${d[2]}-${d[1]}-${d[0]}`; } }));
      const go = async (advance) => {
        const v = readPerson(); if (!showErr(validatePerson(v))) return;
        const changed = ['first', 'middle', 'last', 'gender', 'phone', 'email', 'pin', 'pan', 'aadhaar', 'ckyc'].some((k) => v[k] !== undefined && String(v[k] || '') !== String(P[k] || (k === 'aadhaar' ? '999941057058' : '') || '')) || +v.age !== +P.age || Math.round(+P.income / 100000) !== +v.income || (v.account !== undefined && v.account !== P.bank.account) || (v.ifsc !== undefined && v.ifsc !== P.bank.ifsc) || (v.bankName !== undefined && v.bankName !== P.bank.name) || (v.nomRel !== undefined && v.nomRel !== (P.nomRel || 'Mother'));
        if (changed) applyPerson(v);
        const keep = cfg(); const same = keep.lob === HERE.lob; const f = Date.now();
        S.set('off', false); S.set(OFFK(), false); S.set(ADVK(), advance);
        S.set(CFGK(), { tab: TAB_ID, mode: modeHere(), env: HERE.env, lob: HERE.lob, category: wbRow ? wbRow.category : same ? keep.category || '' : '', product: wbRow ? wbRow.product : '', fromSheet: !!wbRow, queue: [], batch: false, batchAll: false, nextCats: [], retried: [], seen: null, variation: '', expectFail: false, ruleId: '', customUrl: same ? keep.customUrl || '' : '', running: true, fresh: f, startedAt: f });
        sessionStorage.removeItem('sb4_qset'); sessionStorage.removeItem('sb4_btnclicks'); sessionStorage.removeItem('sb4_picker_closed'); sessionStorage.setItem('sb4_fresh', String(f)); capClear();
        ov.remove(); refreshPanel(); keepAwake(true);
        if (wbRow && wbRow.person && wbRow.person !== 'P1') { const sh = sheetDb(); const pp = sh && sh.persons && sh.persons[wbRow.person]; if (pp) { const pv = Object.assign({}, v, pp); if (!Object.keys(validatePerson(pv)).length) applyPerson(pv); } }
        banner(advance ? 'Auto-click ON' : 'Fill only', advance ? 'Filling this page and pressing Next until the quote page – choose the plan there' : 'This page is filled for you – press Next / Continue yourself; every next page is filled the same way');
        try { await fillPage(); } catch (e) {}
      };
      card.querySelector('#sb-qfill').onclick = () => go(false);
      card.querySelector('#sb-qauto').onclick = () => go(true);
    };
    render();
  }

  function showStartDialog() {
    if (document.getElementById('sb-dialog')) return;
    const c = cfg(); const ov = document.createElement('div'); ov.id = 'sb-dialog'; ov.style.cssText = CSSOV;
    const card = document.createElement('div'); card.style.cssText = CARD + ';width:min(620px,96vw)'; ov.appendChild(card); document.body.appendChild(ov);
    const st = { mode: c.mode || 'assisted', env: (HERE.env !== '?' ? HERE.env : c.env) || 'demo', lob: (HERE.lob !== 'Launcher' && HERE.lob !== '?' ? HERE.lob : c.lob) || 'Life Term', category: c.category || '', product: c.product && c.product !== '*' ? c.product : '', customUrl: c.customUrl || (HERE.env === 'custom' ? location.href : '') };
    if (st.env === 'custom' && !st.customUrl) st.env = 'demo';
    st.ev = EVD(); st.q = '';
    let draft = null;                       // person fields typed but not yet applied – survive re-renders
    const H = (n, t, help) => `<div style="display:flex;gap:8px;align-items:baseline;margin-top:12px"><span style="background:#2563eb;color:#fff;border-radius:50%;width:22px;height:22px;display:inline-flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;flex:none">${n}</span><b>${t}</b></div>${help ? `<div style="color:#64748b;font-size:12px;margin:2px 0 0 30px">${help}</div>` : ''}`;
    const DO = () => S.get('dlgOpen', {}); const D = (key, title, hint, inner, force) => `<details data-d="${key}" ${force || DO()[key] ? 'open' : ''} style="margin:10px 0 0 0;border:1px solid #e2e8f0;border-radius:10px;background:#fff"><summary style="cursor:pointer;padding:9px 12px;font-weight:600;color:#1e293b;list-style:none;display:flex;gap:8px;align-items:center"><span style="color:#2563eb;font-size:11px">▶</span>${title}<span style="font-weight:400;color:#64748b;font-size:12px;margin-left:auto;text-align:right">${hint || ''}</span></summary><div style="padding:4px 12px 12px 12px;border-top:1px solid #f1f5f9">${inner}</div></details>`;
    const render = () => {
      const lobs = st.env === 'custom' ? [...new Set(LOBS_ASSISTED.concat(LOBS_DIY))] : (st.mode === 'diy' ? LOBS_DIY : LOBS_ASSISTED).filter((l) => URLS[st.env] && URLS[st.env][l] && (typeof URLS[st.env][l] !== 'object' || (st.mode === 'diy' ? URLS[st.env][l].diy || URLS[st.env][l].assisted : URLS[st.env][l].assisted || URLS[st.env][l].diy)));
      const dist = DIST_ENVS[st.env];
      if (!lobs.includes(st.lob)) st.lob = lobs[0];
      const catMap = catalogFor(st.env, st.lob); const cats = Object.keys(catMap);
      if (!cats.includes(st.category)) st.category = cats[0] || '';
      const prods = catMap[st.category] || [];
      if (st.product && !['', '*', '__ALL__'].includes(st.product) && !prods.includes(st.product)) st.product = '';
      const url = st.env === 'custom' ? st.customUrl : (startUrl(st.env, st.lob, st.mode) || '');
      card.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px">
        <div><div style="font-size:19px;font-weight:700">Start a test journey</div><div style="color:#64748b;font-size:12px">1SB Universal Journey Runner v${SB_VERSION} – choose portal → line of business → product, press <b>▶ Start</b>. Everything else has defaults (sections below).</div></div>
        <button id="sb-close" title="Close" style="${BTN};background:#e2e8f0;color:#0f172a;padding:4px 10px">✕</button>
      </div>
      <div style="margin-top:10px;position:relative"><input id="sb-q" autocomplete="off" placeholder="🔍 Search any product by name, product ID, insurer code or UIN – e.g. T58, iProtect, ICICI, 105N…" value="${escH(st.q || '')}" style="width:100%;box-sizing:border-box;padding:8px 10px;border:1px solid #93c5fd;border-radius:8px;font-size:13px">
        <div id="sb-qres" style="display:none;position:absolute;left:0;right:0;top:100%;z-index:5;background:#fff;border:1px solid #cbd5e1;border-radius:8px;box-shadow:0 8px 24px rgba(0,0,0,.18);max-height:300px;overflow:auto"></div></div>
      ${H(1, 'Journey type', 'Assisted = agent/RM journey · DIY = customer self-service journey')}
      <div style="display:flex;gap:8px;margin:6px 0 0 30px">${['assisted', 'diy'].map((m) => `<button data-mode="${m}" style="${BTN};${st.mode === m ? '' : 'background:#e2e8f0;color:#0f172a'}">${m === 'assisted' ? 'Assisted' : 'DIY (Non Assisted)'}</button>`).join('')}</div>
      ${H(2, 'Environment / portal', '1SB environments, or a distributor portal (white-label URLs from Confluence → Distributers), or any other portal URL')}
      <div style="display:flex;gap:8px;margin:6px 0 0 30px;flex-wrap:wrap">${['demo', 'dev', 'test'].map((e) => `<button data-env="${e}" style="${BTN};${st.env === e ? '' : 'background:#e2e8f0;color:#0f172a'}">${e[0].toUpperCase() + e.slice(1)}</button>`).join('')}
        <input id="sb-df" placeholder="🔍 filter portals" style="padding:6px;border:1px solid #cbd5e1;border-radius:6px;font-size:12px;width:120px">
        <select id="sb-dist" style="${SEL};flex:1;min-width:220px"><option value="">Distributor portal…</option>
          ${['uat', 'prod'].map((ev) => `<optgroup label="${ev === 'uat' ? 'UAT' : 'Production (real insurer APIs – the script still stops at payment)'}">${Object.keys(DIST_ENVS).filter((k) => DIST_ENVS[k].env === ev).sort().map((k) => `<option value="${escH(k)}" ${st.env === k ? 'selected' : ''}>${escH(k.replace(/ · .*$/, ''))} (${Object.keys(DIST_ENVS[k].lobs).join(', ')})</option>`).join('')}</optgroup>`).join('')}
          <option value="custom" ${st.env === 'custom' ? 'selected' : ''}>Other portal URL…</option></select></div>
      ${st.env === 'custom' ? `<div style="margin:6px 0 0 30px;font-size:12px"><input id="sb-url" placeholder="https://uat-terminsurance.example.com/#/?id=00000000-0000-0000-0000-000000000000" value="${escH(st.customUrl)}" style="width:100%;padding:6px;border:1px solid #cbd5e1;border-radius:6px;font-size:13px"><div style="color:#64748b;margin-top:2px">Paste the portal's landing URL (with its ?id=). The LOB is guessed from the URL – correct it below if needed. If the panel does not appear on that site, add the site under Tampermonkey → this script → Settings → "User includes".</div></div>` : ''}
      ${dist ? `<div style="margin:4px 0 0 30px;font-size:12px;color:#64748b">${escH(dist.name)} – ${dist.env === 'prod' ? 'PRODUCTION' : 'UAT'} portal${dist.env === 'prod' ? ' <b style="color:#b91c1c">(real insurer APIs; use only with insurer approval – the script never pays)</b>' : ''}</div>` : ''}
      ${H(3, 'Line of business', LOB_HELP[st.lob] || '')}
      <select id="sb-lob" style="${SEL};margin-left:30px;width:calc(100% - 30px)">${lobs.map((l) => `<option ${l === st.lob ? 'selected' : ''}>${l}</option>`).join('')}</select>
      ${H(4, 'Category')}
      <select id="sb-cat" style="${SEL};margin-left:30px;width:calc(100% - 30px)">${cats.map((x) => `<option ${x === st.category ? 'selected' : ''}>${x}</option>`).join('')}</select>
      ${H(5, 'Product', (prods.length ? `${prods.length} known plan(s). Notes show what happened on demo.` : 'No plans known yet for this category – choose one on the quote page, or run them all.') + (st.env !== 'demo' ? ` <b>${st.env[0].toUpperCase() + st.env.slice(1)}</b> may list different plans than demo – if a plan is not offered there the run is recorded as "not listed" and the live list is remembered for next time.` : ''))}
      <input id="sb-pf" placeholder="🔍 filter these plans by name or product ID" style="margin:4px 0 4px 30px;width:calc(100% - 30px);box-sizing:border-box;padding:6px;border:1px solid #cbd5e1;border-radius:6px;font-size:12px">
      <select id="sb-prod" style="${SEL};margin-left:30px;width:calc(100% - 30px)">
        <option value="" ${st.product === '' ? 'selected' : ''}>Choose on the quote page (shows the live list)</option>
        <option value="__ALL__" ${st.product === '__ALL__' ? 'selected' : ''}>Run ALL plans of this category one after another</option>
        ${cats.length > 1 ? `<option value="__ALLCATS__" ${st.product === '__ALLCATS__' ? 'selected' : ''}>Run ALL plans of EVERY category (${cats.length} categories, one after another)</option>` : ''}
        <option value="*" ${st.product === '*' ? 'selected' : ''}>First plan offered</option>
        ${prods.length ? `<optgroup label="Plans">${prods.map((x) => { const r = rulesFor(st.lob, x); const pid = r ? `${r.m}|${r.id}` : ''; return `<option value="${x.replace(/"/g, '&quot;')}" data-k="${escH((x + ' ' + pid + ' ' + ((r && r.a && r.a.uin) || '')).toLowerCase())}" ${x === st.product ? 'selected' : ''}>${escH(x)}${pid ? '  ·  ' + escH(pid) : ''}${st.env === 'demo' && DEMO_NOTES[x] ? '  —  ' + DEMO_NOTES[x] : ''}</option>`; }).join('')}</optgroup>` : ''}
      </select>
      ${(() => { const r = rulesFor(st.lob, st.product); const want = st.product && !['*', '__ALL__', '__ALLCATS__', ''].includes(st.product); if (!want) return ''; const body = `
      ${(() => { const r = rulesFor(st.lob, st.product); if (!r) return st.product && !['*', '__ALL__'].includes(st.product) ? `<div style="margin:6px 0 0 0;font-size:12px;color:#64748b">No product rules found in the rules master for this plan.</div>` : ''; const rows = ruleRows(r); const vars = variationsFor(r);
        return `<div id="sb-rules" style="margin:8px 0 0 0;border:1px solid #c7d2fe;background:#eef2ff;border-radius:8px;padding:8px 10px;font-size:12px">
          <div style="font-weight:700;margin-bottom:4px">Product rules – ${escH(r.mname || r.name)} <span style="color:#64748b;font-weight:400">(${escH(r.m)} · ${escH(r.id)})</span></div>
          <table style="border-collapse:collapse;width:100%">${rows.map(([k, v]) => `<tr><td style="color:#475569;padding:1px 8px 1px 0;white-space:nowrap;vertical-align:top">${k}</td><td style="padding:1px 0">${escH(v)}</td></tr>`).join('')}</table>
          ${r.v && r.v.length ? `<details style="margin-top:4px"><summary style="cursor:pointer;color:#2563eb">${r.v.length} validation rule(s)</summary><ul style="margin:4px 0 0 16px;padding:0">${r.v.map((x) => `<li>${escH(x)}</li>`).join('')}</ul></details>` : ''}
          ${Object.keys(r.plans || {}).length ? `<details style="margin-top:4px"><summary style="cursor:pointer;color:#2563eb">${Object.keys(r.plans).length} plan option(s)</summary><ul style="margin:4px 0 0 16px;padding:0">${Object.entries(r.plans).map(([id, pl]) => `<li><b>${escH(id)}</b> ${escH(pl.d || '')}${pl.si ? ' · SI: ' + escH(fmtVal(pl.si)) : ''}${pl.pt ? ' · PT: ' + escH(fmtVal(pl.pt)) : ''}</li>`).join('')}</ul></details>` : ''}
          <div style="margin-top:6px;display:flex;gap:8px;align-items:center;flex-wrap:wrap"><b>Test variation</b><select id="sb-var" style="padding:4px;border:1px solid #cbd5e1;border-radius:6px">${vars.map((v) => `<option value="${v.id}" ${st.variation === v.id ? 'selected' : ''}>${escH(v.label)}</option>`).join('')}</select><span style="color:#64748b">sets the test person's age before the run; "should be rejected" runs are expected to be BLOCKED</span></div>
        </div>`; })()}`; return D('rules', 'Product rules &amp; test variation', r ? escH(r.m + ' · ' + r.id) + (st.variation && st.variation !== 'normal' ? ' · variation: ' + escH(st.variation) : '') : 'no rules in the master', body, st.variation && st.variation !== 'normal'); })()}
      ${D('person', 'Test person &amp; identity documents', escH(`${P.first} ${P.last}, ${P.age} · ${P.phone} · PAN ${P.pan}`), `
      
      <div id="sb-person" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:8px;margin:6px 0 0 0;font-size:12px">
        ${[['first', 'First name', P.first], ['middle', 'Middle name (optional)', P.middle], ['last', 'Last name', P.last], ['age', 'Age (years)', P.age], ['phone', 'Mobile number', P.phone], ['email', 'Email ID', P.email], ['income', 'Annual income (₹ lakh)', Math.round(+P.income / 100000)]]
          .map(([k, l, v]) => `<label style="display:flex;flex-direction:column;gap:2px">${l}<input data-p="${k}" value="${String(draft && draft[k] !== undefined ? draft[k] : v ?? '').replace(/"/g, '&quot;')}" ${k === 'age' || k === 'income' ? 'type="number"' : k === 'email' ? 'type="email"' : k === 'phone' ? 'inputmode="numeric" maxlength="10"' : ''} style="padding:6px;border:1px solid #cbd5e1;border-radius:6px;font-size:13px"><span data-err="${k}" style="color:#b91c1c;min-height:14px"></span></label>`).join('')}
        <label style="display:flex;flex-direction:column;gap:2px">Gender<select data-p="gender" style="padding:6px;border:1px solid #cbd5e1;border-radius:6px;font-size:13px">${['Male', 'Female'].map((g) => `<option ${g === ((draft && draft.gender) || P.gender) ? 'selected' : ''}>${g}</option>`).join('')}</select><span></span></label>
        <label style="display:flex;flex-direction:column;gap:2px">PIN code / city<select data-p="pin" style="padding:6px;border:1px solid #cbd5e1;border-radius:6px;font-size:13px">${PINS.map((x) => `<option value="${x[0]}" ${x[0] === ((draft && draft.pin) || P.pin) ? 'selected' : ''}>${x[0]} – ${x[1]}</option>`).join('')}${PINS.some((x) => x[0] === P.pin) ? '' : `<option value="${P.pin}" selected>${P.pin} – ${P.city}</option>`}</select><span data-err="pin" style="color:#b91c1c;min-height:14px"></span></label>
        <label style="display:flex;flex-direction:column;gap:2px;grid-column:1/-1">Address (follows the PIN code / city)<select data-p="address" style="padding:6px;border:1px solid #cbd5e1;border-radius:6px;font-size:13px">${PINS.map((x) => `<option value="${x[0]}" ${x[0] === ((draft && draft.pin) || P.pin) ? 'selected' : ''}>${(ADDR[x[0]] || []).join(', ')} – ${x[1]}, ${x[2]} ${x[0]}</option>`).join('')}${PINS.some((x) => x[0] === P.pin) ? '' : `<option value="${P.pin}" selected>${escH([P.address1, P.address2, P.landmark].filter(Boolean).join(', '))} – ${escH(P.city)} ${P.pin}</option>`}</select></label>
        <label style="display:flex;flex-direction:column;gap:2px;grid-column:1/-1">Life assured – nominee<select data-p="nomRel" style="padding:6px;border:1px solid #cbd5e1;border-radius:6px;font-size:13px">${NOM_COMBOS.map(([v, t]) => `<option value="${v}" ${v === ((draft && draft.nomRel) || P.nomRel || 'Mother') ? 'selected' : ''}>${t}</option>`).join('')}</select><span style="font-size:11px;color:#64748b">Nominee now: ${escH(P.nominee.first + ' ' + P.nominee.last)} · ${escH(P.nominee.relation)} · ${escH(P.nominee.gender)}</span></label>
      </div>
      <div style="margin:2px 0 0 0;font-size:12px;color:#64748b">DOB used: <b id="sb-dob">${(() => { const a = draft && +draft.age; if (a >= 18 && a <= 100) { const d = dobForAge(a, P.dobISO).split('-'); return `${d[2]}-${d[1]}-${d[0]}`; } return P.dobDMY; })()}</b> · PAN: ${P.pan} ${P.custom ? '· <span style="color:#166534">your details – kept for every plan in a batch</span>' : '· random test person'}
        <button id="sb-newp" style="${BTN};background:#475569;padding:3px 8px;font-size:12px;margin-left:6px">New person</button></div>${(() => { const k = kycIdentity(); const a = draft && +draft.age ? +draft.age : P.age; if (!k || !k.dob) return ''; const [d, m, y] = k.dob.split('-'); const ia = Math.floor((Date.now() - new Date(+y, +m - 1, +d)) / 31557600000); return a !== ia ? `<div style="margin-top:4px;font-size:12px;color:#92400e">The CKYC test identity on ${escH(HERE.env !== '?' ? HERE.env : st.env)} is PAN ${escH(k.pan)} with DOB ${escH(k.dob)} (age ${ia}). Your age ${a} is used as typed; if the CKYC lookup does not match, the script falls back to document upload / "customer completes KYC".</div>` : ''; })()}
      <div style="margin-top:10px;font-weight:600;font-size:12px;color:#334155">Identity documents &amp; bank (test values – used on KYC / proposal pages and printed on the test documents)</div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:8px;margin:6px 0 0 0;font-size:12px">
        ${[['pan', 'PAN', P.pan], ['aadhaar', 'Aadhaar number', (P.aadhaar || '999941057058')], ['ckyc', 'CKYC number (optional)', P.ckyc || ''], ['account', 'Bank account number', P.bank.account], ['ifsc', 'IFSC', P.bank.ifsc], ['bankName', 'Bank name', P.bank.name]]
          .map(([k, l, v]) => `<label style="display:flex;flex-direction:column;gap:2px">${l}<input data-p="${k}" value="${String(draft && draft[k] !== undefined ? draft[k] : v ?? '').replace(/"/g, '&quot;')}" ${/aadhaar|account|ckyc/.test(k) ? 'inputmode="numeric"' : ''} style="padding:6px;border:1px solid #cbd5e1;border-radius:6px;font-size:13px;font-family:monospace"><span data-err="${k}" style="color:#b91c1c;min-height:14px"></span></label>`).join('')}
      </div>
      <div style="margin-top:4px;font-size:12px;color:#64748b">These are synthetic test identities (the Aadhaar number is the UIDAI test number). Never enter a real person's PAN or Aadhaar here.</div>`)}
      ${D('evidence', 'Evidence (PDF, screenshots, video)', [st.ev.pdf ? '📄 PDF' : '', st.ev.shots ? '📷 screenshots' : '', st.ev.video ? '🎥 video' : ''].filter(Boolean).join(' · ') || 'off', `
      
      <div style="display:flex;gap:16px;flex-wrap:wrap;margin:6px 0 0 0;font-size:13px">
        <label style="display:flex;gap:6px;align-items:center"><input type="checkbox" data-ev="pdf" ${st.ev.pdf ? 'checked' : ''}> 📄 One PDF of all journey pages</label>
        <label style="display:flex;gap:6px;align-items:center"><input type="checkbox" data-ev="shots" ${st.ev.shots ? 'checked' : ''}> 📷 Screenshot of every page (ZIP)</label>
        <label style="display:flex;gap:6px;align-items:center"><input type="checkbox" data-ev="video" ${st.ev.video ? 'checked' : ''}> 🎥 Video of the journey</label>
      </div>
      ${st.ev.video ? '<div style="margin:2px 0 0 0;font-size:12px;color:#64748b">When the portal opens, press "⏺ Start recording" and choose <b>This tab</b> – browsers only allow recording after a click. The video is saved when the journey ends.</div>' : ''}`)}
      ${D('more', 'OTP, KYC &amp; waiting time', `OTP ${escH(OTP())} · KYC ${S.get('kycMode', 'fill') === 'fill' ? 'fill + upload' : 'customer completes'} · stuck page ${Math.round(STALL_MS() / 1000)} s`, `
      
        <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:10px;margin-top:6px;font-size:13px">
          <div style="display:flex;gap:12px;flex-wrap:wrap">
            <label>Test OTP <input id="sb-otp" value="${OTP()}" style="width:90px;padding:3px"></label>
            <label>KYC <select id="sb-kyc" style="padding:3px"><option value="fill" ${S.get('kycMode', 'fill') === 'fill' ? 'selected' : ''}>Fill details + upload test documents</option><option value="defer" ${S.get('kycMode', 'fill') === 'defer' ? 'selected' : ''}>Let customer complete KYC</option></select></label>
            <label>Skip a stuck page after <input id="sb-stall" type="number" min="20" value="${Math.round(STALL_MS() / 1000)}" style="width:60px;padding:3px"> s</label>
          </div>
          <div style="color:#64748b;margin-top:6px">The script never pays, never types passwords and never ticks optional paid add-ons.</div>
        </div>`)}
      ${(() => { const pf = preflight(Object.assign({}, st, { age: draft && +draft.age ? +draft.age : P.age })); if (!pf.length) return ''; const bad = pf.some((x) => x.kind !== 'prod');
        const tag = (x) => x.kind === 'last' ? 'Last run: ' : x.kind === 'known' ? 'Known on demo: ' : x.kind === 'rule' ? 'Product rule: ' : x.kind === 'mq' ? 'Quote page: ' : ''; const short = (m) => { const t = String(m).replace(/\s+/g, ' ').replace(/^(BLOCKED|PAUSED) on [^:]*:\d\d(:\d\d)?( [AP]M)? at /, '$1 at ').replace(/\s*[–-]\s*insurer error:.*$/i, '').trim(); return t.length > 110 ? t.slice(0, 108) + '…' : t; };
        return `<details id="sb-preflight" style="margin:10px 0 0 0;font-size:12px;border-radius:8px;border:1px solid ${bad ? '#fca5a5' : '#fcd34d'};background:${bad ? '#fef2f2' : '#fffbeb'};color:#7f1d1d"><summary style="cursor:pointer;padding:6px 10px;list-style:none"><b>${bad ? '⚠ Expected to fail' : 'ℹ Note'}</b> – ${escH(tag(pf[0]) + short(pf[0].msg))}${pf.length > 1 ? ` <span style="color:#991b1b">(+${pf.length - 1} more)</span>` : ''} <span style="color:#2563eb;font-weight:400">details ▾</span></summary><ul style="margin:0 0 6px 24px;padding:0">${pf.map((x) => `<li>${tag(x)}${escH(x.msg)}${x.api ? `<div style="color:#991b1b;font-size:11px;word-break:break-all">${escH(String(x.api).slice(0, 220))}</div>` : ''}</li>`).join('')}</ul>${bad ? '<div style="margin:0 10px 6px;color:#334155">You can still start it – the run is recorded with the reason it stops.</div>' : ''}</details>`; })()}
      <div style="margin:10px 0 0 0;font-size:12px;color:#334155;background:#eff6ff;border-radius:8px;padding:6px 10px">Will open <b>${st.lob}</b> (${st.mode === 'diy' ? 'DIY' : 'Assisted'}, ${escH(st.env === 'custom' ? 'other URL' : st.env)}) → <b>${st.category || 'any category'}</b> → <b>${st.product === '__ALL__' ? 'all plans, one by one' : st.product === '*' ? 'first plan' : st.product || 'you choose on the quote page'}</b><span style="color:#64748b;font-size:11px"> · ${escH(url.replace(/^https?:\/\//, '').replace(/[/#?].*$/, ''))}</span></div>
      <div style="display:flex;gap:8px;justify-content:space-between;flex-wrap:wrap;margin-top:14px">
        <button id="sb-res" style="${BTN};background:#0f766e">Results</button>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          <button id="sb-fill" title="Open the portal and only fill pages – you click Next yourself" style="${BTN};background:#64748b">Fill only</button>
          <button id="sb-go" title="Fill every page and click through to Thank You" style="${BTN};font-size:14px;padding:9px 18px">${preflight(st).some((x) => x.kind !== 'prod') ? '▶ Start anyway' : '▶ Start journey'}</button>
        </div>
      </div>`;
      card.querySelectorAll('details[data-d]').forEach((d) => d.addEventListener('toggle', () => { const o = DO(); o[d.dataset.d] = d.open; S.set('dlgOpen', o); }));
      card.querySelectorAll('[data-mode]').forEach((b) => (b.onclick = () => { st.mode = b.dataset.mode; render(); }));
      card.querySelectorAll('[data-env]').forEach((b) => (b.onclick = () => { st.env = b.dataset.env; render(); }));
      card.querySelector('#sb-dist').onchange = (e) => { if (e.target.value) { st.env = e.target.value; if (st.env === 'custom' && !st.customUrl) st.customUrl = ''; render(); } };
      const urlIn = card.querySelector('#sb-url'); if (urlIn) urlIn.oninput = () => { st.customUrl = urlIn.value.trim(); const l = lobFromUrl(st.customUrl); if (l && l !== st.lob) { st.lob = l; st.category = ''; st.product = ''; card.querySelector('#sb-lob').value = l; } }; if (urlIn) urlIn.onchange = () => { st.customUrl = urlIn.value.trim(); render(); };
      card.querySelector('#sb-lob').onchange = (e) => { st.lob = e.target.value; st.category = ''; st.product = ''; render(); };
      card.querySelector('#sb-cat').onchange = (e) => { st.category = e.target.value; st.product = ''; render(); };
      card.querySelector('#sb-prod').onchange = (e) => { st.product = e.target.value; st.variation = 'normal'; render(); };
      card.querySelectorAll('[data-ev]').forEach((x) => (x.onchange = () => { st.ev[x.dataset.ev] = x.checked; if (x.dataset.ev === 'video') render(); }));
      const filt = (inp, sel) => { const q = inp.value.trim().toLowerCase(); let first = null; [...sel.options].forEach((o) => { if (!o.value || /^(custom|__ALL__|\*)$/.test(o.value)) { o.hidden = false; return; } const hit = !q || (o.dataset.k || o.textContent.toLowerCase()).includes(q) || o.textContent.toLowerCase().includes(q); o.hidden = !hit; if (hit && !first) first = o; }); return first; };
      const pf = card.querySelector('#sb-pf'); pf.oninput = () => filt(pf, card.querySelector('#sb-prod')); pf.onkeydown = (ev) => { if (ev.key === 'Enter') { const o = filt(pf, card.querySelector('#sb-prod')); if (o) { st.product = o.value; st.variation = 'normal'; render(); } } };
      const df = card.querySelector('#sb-df'); df.oninput = () => filt(df, card.querySelector('#sb-dist')); df.onkeydown = (ev) => { if (ev.key === 'Enter') { const o = filt(df, card.querySelector('#sb-dist')); if (o) { st.env = o.value; render(); } } };
      const qi = card.querySelector('#sb-q'), qr = card.querySelector('#sb-qres');
      const showQ = () => { const hits = searchProducts(qi.value, st); st.q = qi.value;
        if (!qi.value.trim()) { qr.style.display = 'none'; return; }
        qr.innerHTML = hits.length ? hits.map((h, i) => `<div data-i="${i}" style="padding:7px 10px;cursor:pointer;border-bottom:1px solid #f1f5f9"><b>${escH(h.name)}</b>${h.pid ? ` <span style="color:#7c3aed">${escH(h.pid)}</span>` : ''}<div style="font-size:11px;color:#64748b">${escH(h.lob)} › ${escH(h.cat)}${h.uin ? ' · UIN ' + escH(h.uin) : ''}</div></div>`).join('') : '<div style="padding:8px;color:#64748b">No product matches – try part of the name, the product ID or the insurer code</div>';
        qr.style.display = 'block';
        qr.querySelectorAll('[data-i]').forEach((d) => { d.onmouseenter = () => (d.style.background = '#eef2ff'); d.onmouseleave = () => (d.style.background = ''); d.onclick = () => { const h = hits[+d.dataset.i]; st.lob = h.lob; st.category = h.cat; st.product = h.name; st.variation = 'normal'; st.q = ''; render(); }; }); };
      qi.oninput = showQ; qi.onfocus = showQ; qi.onkeydown = (ev) => { if (ev.key === 'Enter') { const f = qr.querySelector('[data-i]'); if (f) f.click(); } if (ev.key === 'Escape') { qi.value = ''; showQ(); } };
      const varSel = card.querySelector('#sb-var'); if (varSel) varSel.onchange = (e) => { st.variation = e.target.value; const r = rulesFor(st.lob, st.product); const v = variationsFor(r).find((x) => x.id === st.variation); draft = Object.assign(readPerson(), { age: v && v.age ? v.age : P.age }); render(); };
      card.querySelector('#sb-close').onclick = () => ov.remove();
      card.querySelector('#sb-res').onclick = () => showResults();
      card.querySelector('#sb-newp').onclick = () => { draft = null; P = generateProfile(); S.set('profile', P); render(); refreshPanel(); };
      const readPerson = () => { const v = {}; card.querySelectorAll('[data-p]').forEach((e) => (v[e.dataset.p] = e.value.trim())); return v; };
      const showErr = (e) => { card.querySelectorAll('[data-err]').forEach((x) => (x.textContent = e[x.dataset.err] || '')); return !Object.keys(e).length; };
      { const pinSel = card.querySelector('[data-p=pin]'), adSel = card.querySelector('[data-p=address]'), gSel = card.querySelector('[data-p=gender]'), nrSel = card.querySelector('[data-p=nomRel]');
        if (pinSel && adSel) { pinSel.addEventListener('change', () => { adSel.value = pinSel.value; }); adSel.addEventListener('change', () => { pinSel.value = adSel.value; pinSel.dispatchEvent(new Event('change')); }); }
        if (nrSel && gSel) nrSel.addEventListener('change', () => { if (/^Brother –/.test(nrSel.value)) gSel.value = 'Male'; if (/^Sister –/.test(nrSel.value)) gSel.value = 'Female'; gSel.dispatchEvent(new Event('change')); }); }
      card.querySelectorAll('[data-p=age]').forEach((inp) => inp.addEventListener('change', () => { draft = readPerson(); const o = DO(); card.querySelectorAll('details[data-d]').forEach((d) => (o[d.dataset.d] = d.open)); S.set('dlgOpen', o); render(); }));   // the CKYC-identity note under the DOB follows the typed age
      card.querySelectorAll('[data-p]').forEach((inp) => inp.addEventListener(inp.tagName === 'SELECT' ? 'change' : 'input', () => { const v = readPerson(); draft = v; showErr(validatePerson(v)); if (+v.age >= 18 && +v.age <= 90) { const d = dobForAge(+v.age, P.dobISO).split('-'); card.querySelector('#sb-dob').textContent = `${d[2]}-${d[1]}-${d[0]}`; } }));
      const go = (advance) => {
        const v = readPerson(); if (!showErr(validatePerson(v))) { const d = card.querySelector('details[data-d=person]'); if (d) d.open = true; card.querySelector('#sb-person').scrollIntoView({ block: 'center' }); return; }
        [['pan', P.pan], ['aadhaar', P.aadhaar || '999941057058'], ['ckyc', P.ckyc || ''], ['account', P.bank.account], ['ifsc', P.bank.ifsc], ['bankName', P.bank.name]].forEach(([k, cur]) => { if (v[k] !== undefined && String(v[k]).replace(/\s/g, '').toUpperCase() === String(cur || '').replace(/\s/g, '').toUpperCase()) delete v[k]; });   // untouched identity fields stay as they are (the environment's own KYC identity keeps applying)
        const changed = ['first', 'middle', 'last', 'gender', 'phone', 'email', 'pin', 'pan', 'aadhaar', 'ckyc'].some((k) => v[k] !== undefined && String(v[k] || '') !== String(P[k] || (k === 'aadhaar' ? '999941057058' : '') || '')) || +v.age !== +P.age || Math.round(+P.income / 100000) !== +v.income || (v.account !== undefined && v.account !== P.bank.account) || (v.ifsc !== undefined && v.ifsc !== P.bank.ifsc) || (v.bankName !== undefined && v.bankName !== P.bank.name) || (v.nomRel !== undefined && v.nomRel !== (P.nomRel || 'Mother'));
        if (changed) applyPerson(v);
        S.set('stallMs', Math.max(20, +card.querySelector('#sb-stall').value || 90) * 1000); S.set(ADVK(), advance);
        S.set('otp', (card.querySelector('#sb-otp').value || '234567').trim()); S.set('kycMode', card.querySelector('#sb-kyc').value); S.set('evidence', st.ev);
        if (st.env === 'custom') { st.customUrl = (card.querySelector('#sb-url') || {}).value || st.customUrl; if (!/^https?:\/\//i.test(st.customUrl || '')) { card.querySelector('#sb-url').style.borderColor = '#b91c1c'; card.querySelector('#sb-url').focus(); return; } }
        const allCats = st.product === '__ALLCATS__'; const all = st.product === '__ALL__' || allCats;
        // "category" sent to the portal adapters (Life Term / NBFC / 3-Click have none)
        const catList = allCats ? cats.filter((x) => !/^all plans$|^other products/i.test(x)) : [];
        const category = allCats ? catList[0] || '' : /^all plans$|^other products/i.test(st.category) ? '' : st.category;
        const rr = rulesFor(st.lob, st.product); const vv = (st.variation && st.variation !== 'normal') ? variationsFor(rr).find((x) => x.id === st.variation) : null;
        S.set(CFGK(), { quoteFix: null, quoteFixTried: 0, mode: st.mode, env: st.env, lob: st.lob, category, product: all ? '*' : st.product, queue: [], batch: all, batchAll: all, nextCats: allCats ? catList.slice(1) : [], done: [], variation: vv ? vv.label : '', expectFail: !!(vv && vv.expectFail), ruleId: rr ? rr.m + '|' + rr.id : '', customUrl: st.env === 'custom' ? st.customUrl : '' });
        const target = st.env === 'custom' ? st.customUrl : startUrl(st.env, st.lob, st.mode);
        const goBtn = card.querySelector('#sb-go'); goBtn.textContent = 'Checking the portal…'; goBtn.disabled = true;
        portalReachable(target).then((ok) => { if (!ok) { goBtn.disabled = false; goBtn.textContent = '▶ Start anyway'; const box = document.createElement('div'); box.style.cssText = 'margin:8px 0 0 30px;font-size:12px;border:1px solid #fca5a5;background:#fef2f2;color:#7f1d1d;border-radius:8px;padding:8px'; box.innerHTML = `<b>⚠ This journey cannot be performed right now:</b> the portal <span style="word-break:break-all">${escH(String(target).replace(/\?id=.*/, ''))}</span> does not answer (host not found / offline / blocked). Press Start anyway to try, or choose another portal.`; card.querySelector('#sb-preflight') ? card.querySelector('#sb-preflight').replaceWith(box) : goBtn.parentElement.parentElement.before(box); goBtn.onclick = () => { S.set('off', false); ov.remove(); startJourney(st.env, st.lob, st.mode); }; record('BLOCKED', 'Portal not reachable: ' + String(target).replace(/\?id=.*/, '')); return; }
          S.set('off', false); S.set(OFFK(), false); ov.remove(); startJourney(st.env, st.lob, st.mode); });
      };
      card.querySelector('#sb-go').onclick = () => go(true);
      card.querySelector('#sb-fill').onclick = () => go(false);
    };
    render();
  }

  function showPicker(title, items, onPick, hint) {
    let ov = document.getElementById('sb-picker'); if (ov) ov.remove();
    ov = document.createElement('div'); ov.id = 'sb-picker'; ov.style.cssText = CSSOV; ov.dataset.count = items.length;
    const card = document.createElement('div'); card.style.cssText = CARD;
    card.innerHTML = `<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px"><div><div style="font-size:17px;font-weight:700">${title}</div><div style="color:#64748b;margin-bottom:8px">${hint || ''}</div></div><button id="sb-pclose" title="Close – choose a plan yourself on the page (the script keeps filling the next pages)" style="${BTN};background:#e2e8f0;color:#0f172a;padding:4px 10px">✕</button></div>
      <input id="sb-pq" placeholder="🔍 search by plan name or product ID" style="width:100%;box-sizing:border-box;padding:7px;border:1px solid #93c5fd;border-radius:8px;margin-bottom:8px;font-size:13px"><div id="sb-pl" style="display:grid;gap:6px"></div>
      <div id="sb-pconfirm" style="display:none;margin-top:10px;border:1px solid #c7d2fe;background:#eef2ff;border-radius:8px;padding:10px"></div>
      <div id="sb-pfoot" style="display:flex;justify-content:space-between;gap:8px;margin-top:10px;flex-wrap:wrap"><button id="sb-pmanual" style="${BTN};background:#64748b" title="Close this list and pick a plan on the page yourself">I will pick on the page</button><div style="display:flex;gap:8px"><button id="sb-pall" style="${BTN};background:#0f766e">Run ALL of these one by one</button><button id="sb-pfirst" style="${BTN};background:#475569">First one</button></div></div>`;
    ov.appendChild(card); document.body.appendChild(ov);
    const close = (manual) => { ov.remove(); sessionStorage.setItem('sb4_picker_closed', '1'); if (manual) banner('Your turn', 'Pick a plan on the page – the script fills the next pages by itself (auto-click ' + (advanceOn() ? 'ON' : 'OFF') + ')'); };
    // chosen plan → ask how to continue (auto-click on = runs to Thank You; off = fills each page, you press Next)
    const confirm = (it, i, all, rest) => {
      card.querySelector('#sb-pl').style.display = 'none'; card.querySelector('#sb-pq').style.display = 'none'; card.querySelector('#sb-pfoot').style.display = 'none';
      const box = card.querySelector('#sb-pconfirm'); box.style.display = 'block';
      box.innerHTML = `<div style="font-weight:700;margin-bottom:6px">${all ? `Run all ${items.length} plans, starting with` : 'Selected plan'}: <span style="color:#1d4ed8">${escH(it)}</span></div>
        <div style="font-size:13px;margin-bottom:8px">How should the journey continue?</div>
        <div style="display:flex;gap:8px;flex-wrap:wrap"><button id="sb-pauto" style="${BTN};background:#16a34a">▶ Auto – fill and click through to Thank You</button><button id="sb-pfill" style="${BTN};background:#2563eb">✎ Fill only – I press Next myself</button><button id="sb-pback" style="${BTN};background:#e2e8f0;color:#0f172a">← Back to the list</button></div>`;
      box.querySelector('#sb-pauto').onclick = () => { S.set(ADVK(), true); ov.remove(); onPick(it, i, all, rest); refreshPanel(); };
      box.querySelector('#sb-pfill').onclick = () => { S.set(ADVK(), false); ov.remove(); onPick(it, i, all, rest); refreshPanel(); banner('Fill only', 'Every page is filled for you – press Next / Continue yourself (menu → Resume auto-click lets the script click)'); };
      box.querySelector('#sb-pback').onclick = () => { box.style.display = 'none'; card.querySelector('#sb-pl').style.display = 'grid'; card.querySelector('#sb-pq').style.display = ''; card.querySelector('#sb-pfoot').style.display = 'flex'; };
    };
    items.forEach((it, i) => { const b = document.createElement('button'); const r = rulesFor(HERE.lob, it); b.dataset.k = (it + ' ' + (r ? r.m + '|' + r.id + ' ' + ((r.a && r.a.uin) || '') : '')).toLowerCase(); b.textContent = it + (r ? '  ·  ' + r.m + '|' + r.id : ''); b.style.cssText = BTN + ';background:#eef2ff;color:#1e293b;text-align:left;font-weight:500'; b.onclick = () => confirm(it, i, false); card.querySelector('#sb-pl').appendChild(b); });
    card.querySelector('#sb-pfirst').onclick = () => confirm(items[0], 0, false);
    card.querySelector('#sb-pall').onclick = () => confirm(items[0], 0, true, items.slice(1));
    card.querySelector('#sb-pclose').onclick = () => close(true); card.querySelector('#sb-pmanual').onclick = () => close(true);
    ov.addEventListener('keydown', (ev) => { if (ev.key === 'Escape') close(true); });
    const pq = card.querySelector('#sb-pq'); pq.oninput = () => { const q = pq.value.trim().toLowerCase().split(/\s+/).filter(Boolean); card.querySelectorAll('#sb-pl button').forEach((b) => (b.style.display = !q.length || q.every((w) => b.dataset.k.includes(w)) ? '' : 'none')); };
    pq.onkeydown = (ev) => { if (ev.key === 'Enter') { const b = [...card.querySelectorAll('#sb-pl button')].find((x) => x.style.display !== 'none'); if (b) b.click(); } }; setTimeout(() => pq.focus(), 50);
  }

  const escH = (x) => String(x == null ? '' : x).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  function showResults() {
    let ov = document.getElementById('sb-issues'); if (ov) ov.remove();
    const list = S.get('results', []);
    ov = document.createElement('div'); ov.id = 'sb-issues'; ov.style.cssText = CSSOV;
    const card = document.createElement('div'); card.style.cssText = CARD + ';width:min(1000px,96vw)';
    const color = (s) => /^PASS/.test(s) ? '#166534' : /PAUSED/.test(s) ? '#92400e' : '#991b1b';
    card.innerHTML = `<div style="display:flex;justify-content:space-between;align-items:center"><div style="font-size:17px;font-weight:700">Journey results (${list.length})</div>
      <div style="display:flex;gap:6px"><button id="sb-csv" style="${BTN};background:#0f766e">Download CSV</button><button id="sb-gsf" style="${BTN};background:#0f766e" title="Send the form fields captured in real runs to the Google Sheet dashboard (Fields – <LOB> tabs)">📗 Fields → Google Sheet</button><button id="sb-gsall" style="${BTN};background:#115e59" title="Every product of every category and LOB on this environment, prefilled from the fields captured so far – the sheet fills only its empty cells, your edits stay">📗 All products → Sheet</button><button id="sb-wbx" style="${BTN};background:#15803d" title="Products / Fields / Persons with ▶ Run links">Workbook (.xlsx)</button><button id="sb-pm" style="${BTN};background:#ea580c" title="Multi Quote → Poll → Criteria → Single Quote → Poll → Proposal, in the team's gateway-collection layout">Postman (gateway)</button><button id="sb-pmraw" style="${BTN};background:#c2410c" title="Every API call of this journey, grouped by page">Postman (raw)</button><button id="sb-doc" style="${BTN};background:#7c3aed" title="Issues (with page diagnostics) + everything the script learned – send to Claude for the next version">Export for Claude</button><label style="${BTN};background:#475569;cursor:pointer" title="Merge learned data exported by a teammate">Import learned<input id="sb-imp" type="file" accept=".json,application/json" style="display:none"></label><button id="sb-clr" style="${BTN};background:#b91c1c">Clear</button><button id="sb-x" style="${BTN};background:#94a3b8">Close</button></div></div>
      <table style="width:100%;border-collapse:collapse;font-size:12px;margin-top:10px"><tr style="text-align:left;background:#f1f5f9"><th>When</th><th>Env</th><th>Type</th><th>LOB</th><th>Category</th><th>Product</th><th>Status</th><th>Step</th><th>Issue / note</th><th>Ref</th><th>Jira</th></tr>
      ${list.slice().reverse().map((r) => `<tr style="border-top:1px solid #e2e8f0;vertical-align:top"><td>${r.at.slice(5, 16).replace('T', ' ')}</td><td>${escH(r.env)}</td><td>${escH(r.mode)}</td><td>${escH(r.lob)}</td><td>${escH(r.category)}</td><td>${escH(r.product)}</td><td style="color:${color(r.status)};font-weight:700">${escH(r.status)}${r.variation ? '<br><span style="font-weight:400;color:#475569">' + escH(r.variation) + '</span><br><span style="font-weight:400;color:' + (/UNEXPECTED/.test(r.expected) ? '#b91c1c' : '#166534') + '">' + escH(r.expected) + '</span>' : ''}</td><td>${escH(r.page || r.step)}</td><td>${escH(r.msg)}${r.errors && r.errors.length ? '<br><i>' + escH(r.errors.join(' | ')) + '</i>' : ''}${r.api ? '<br><code style=font-size:11px>' + escH(r.api) + '</code>' : ''}</td><td>${escH(r.ref)}</td><td>${r.jira ? `<a href="${escH(r.jiraUrl || '')}" target="_blank" style="color:#2563eb">${escH(r.jira)}</a>` : /BLOCKED/.test(r.status) ? `<button class="sb-jira" data-at="${escH(r.at)}" style="${BTN};background:#0052cc;padding:2px 7px;font-size:11px">🎫 Jira</button>` : ''}</td></tr>`).join('')}</table>${jiraQueueHtml()}${jiraTableHtml()}`;
    ov.appendChild(card); document.body.appendChild(ov);
    card.querySelector('#sb-x').onclick = () => ov.remove();
    card.querySelectorAll('.sb-jira').forEach((b) => (b.onclick = () => { const e = list.find((x) => x.at === b.dataset.at); if (e) { ov.remove(); showJiraDialog(e); } }));
    try { jiraQueueWire(card, showResults); } catch (e) {}
    card.querySelector('#sb-clr').onclick = () => { if (confirm('Clear all recorded results?')) { S.set('results', []); ov.remove(); } };
    card.querySelector('#sb-pm').onclick = () => downloadGateway(); card.querySelector('#sb-pmraw').onclick = () => downloadPostman(true);
    card.querySelector('#sb-doc').onclick = () => exportDoctor();
    card.querySelector('#sb-gsf').onclick = async () => { const b = card.querySelector('#sb-gsf'); b.disabled = true; b.textContent = 'Sending…'; await gsSendFields(null, (m) => banner('Sheet', m)); b.disabled = false; b.textContent = '📗 Fields → Google Sheet'; };
    card.querySelector('#sb-gsall').onclick = async () => { const b = card.querySelector('#sb-gsall'); const env = HERE.env && HERE.env !== '?' ? HERE.env : 'demo'; if (!confirm(`Send every product of every LOB on "${env}" (prefilled from the captured fields) to the Google Sheet? Empty cells only – nothing you typed in the sheet is changed. This takes a few minutes.`)) return; b.disabled = true; b.textContent = 'Sending…'; await gsSendFields(null, (m) => banner('Sheet', m), env); b.disabled = false; b.textContent = '📗 All products → Sheet'; };
    card.querySelector('#sb-wbx').onclick = () => { try { exportWorkbook(); } catch (e) { banner('Workbook', 'Export failed: ' + e.message); } };
    card.querySelector('#sb-imp').onchange = (ev) => { if (ev.target.files[0]) importLearned(ev.target.files[0]); };
    card.querySelector('#sb-csv').onclick = () => {
      const cols = ['at', 'env', 'mode', 'lob', 'category', 'product', 'variation', 'expected', 'status', 'step', 'page', 'msg', 'errors', 'api', 'ref', 'profile', 'rule'];
      const csv = [cols.join(',')].concat(list.map((r) => cols.map((k) => '"' + String(Array.isArray(r[k]) ? r[k].join(' | ') : r[k] || '').replace(/"/g, '""') + '"').join(','))).join('\n');
      const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' })); a.download = '1sb-journey-results.csv'; a.click();
    };
  }

  function banner(status, msg) {
    let d = document.getElementById('sb-banner'); if (d) d.remove();
    d = document.createElement('div'); d.id = 'sb-banner';
    const ok = /^PASS|DONE/.test(status);
    d.style.cssText = `position:fixed;top:70px;left:50%;transform:translateX(-50%);z-index:2147483001;background:${ok ? '#dcfce7' : '#fee2e2'};color:${ok ? '#14532d' : '#7f1d1d'};border:1px solid ${ok ? '#86efac' : '#fca5a5'};border-radius:10px;padding:10px 14px;font:14px system-ui,sans-serif;max-width:90vw`;
    const prod = cfg().product && cfg().product !== '*' ? cfg().product : '';
    d.innerHTML = `<b>${escH(status)}</b>${prod ? ' – ' + escH(prod) : ''} · ${escH(msg)}${cfg().batch && (cfg().queue || []).length ? ' <i>(next product starts in 4 s)</i>' : ''}`;
    document.body.appendChild(d); setTimeout(() => d && d.remove(), 15000);
  }

  let refreshPanel = () => {};
  function showRules() {
    const c = cfg(); const r = rulesFor(c.lob || HERE.lob, c.product) ; let ov = document.getElementById('sb-picker'); if (ov) ov.remove();
    ov = document.createElement('div'); ov.id = 'sb-picker'; ov.style.cssText = CSSOV;
    const body = r ? `<table style="border-collapse:collapse;width:100%;font-size:13px">${ruleRows(r).map(([k, v]) => `<tr><td style="color:#475569;padding:2px 10px 2px 0;white-space:nowrap;vertical-align:top">${k}</td><td>${escH(v)}</td></tr>`).join('')}</table>
      ${r.v && r.v.length ? `<div style="margin-top:8px"><b>Validation rules</b><ul style="margin:4px 0 0 16px">${r.v.map((x) => `<li>${escH(x)}</li>`).join('')}</ul></div>` : ''}` : `<div style="color:#64748b">No rules found for "${escH(c.product || '')}" – pick a product in Start journey to see its rules.</div>`;
    ov.innerHTML = `<div style="${CARD}"><div style="font-size:17px;font-weight:700;margin-bottom:6px">Product rules${r ? ' – ' + escH(r.mname || r.name) + ' <span style="color:#64748b;font-weight:400;font-size:12px">(' + escH(r.m) + ' · ' + escH(r.id) + ')</span>' : ''}</div>${body}
      <div style="text-align:right;margin-top:10px"><button id="sb-rx" style="${BTN}">Close</button></div></div>`;
    document.body.appendChild(ov); ov.querySelector('#sb-rx').onclick = () => ov.remove();
  }
  function showHelp() {
    let ov = document.getElementById('sb-picker'); if (ov) ov.remove();
    ov = document.createElement('div'); ov.id = 'sb-picker'; ov.style.cssText = CSSOV;
    ov.innerHTML = `<div style="${CARD}"><div style="font-size:17px;font-weight:700;margin-bottom:6px">How the runner works <span style="font-weight:400;color:#64748b;font-size:12px">v${SB_VERSION}</span></div>
      <details style="margin-bottom:8px;font-size:12px"><summary style="cursor:pointer;color:#2563eb">What changed in the last versions</summary><div style="max-height:160px;overflow:auto;margin-top:4px">${Object.entries(CHANGELOG).slice(0, 8).map(([v, t]) => `<div style="margin:3px 0"><b>${escH(v)}</b> – ${escH(t)}</div>`).join('')}</div></details>
      <ol style="margin:0 0 8px 18px;padding:0;line-height:1.6">
        <li><b>Start journey</b> – choose Assisted/DIY, environment, LOB, category and plan, then press Start.</li>
        <li>The script opens the portal, fills each page with the test person and clicks Next / Continue / Proceed.</li>
        <li>OTP fields get the test OTP (default 234567); KYC gets test numbers and generated test documents.</li>
        <li>It stops on the Thank You page (PASS) or at payment. If a page errors, loops or stays stuck it records the issue (BLOCKED) and, when running all plans, moves on to the next one.</li>
        <li>The panel has one button: <b>■ STOP</b> stops the journey in this tab only – other tabs keep running (menu → ⏹ Stop on ALL tabs switches every tab off). Click the status text next to it for the menu (start journey, fill this page, results, rules, Postman, screenshot, PDF, recording). Keyboard: <b>Alt+S</b> opens the start dialog, <b>Alt+X</b> stops.</li>
        <li><b>Results</b> shows every journey with the reason and the failing API – <b>Download CSV</b> to share it.</li>
        <li><b>Self-learning</b>: when a page gets stuck the panel says <b>TEACH ME</b> – fill the missing field or press the right button yourself; the script remembers it (🎓 in the panel) and does it alone next time. Results → <b>Export for Claude</b> sends the issues and learned data for the next release; <b>Import learned</b> merges a teammate's file.</li>
        <li><b>Postman</b> downloads every API call the portal made during the current journey (request headers, body, response) as a Postman v2.1 collection – File → Import in Postman. Auth headers become <code>{{token}}</code>.</li>
      </ol>
      <div style="font-size:13px;color:#334155"><b>Panel buttons:</b> Start journey · Fill this page (fills only, no clicking) · Auto-click ON/OFF (pause/resume the clicking) · Results · Stop</div>
      <div style="font-size:13px;color:#334155;margin-top:4px"><b>Status colours:</b> <span style="color:#166534">PASS</span> reached the end · <span style="color:#92400e">PAUSED</span> waiting for you (e.g. sign-in) · <span style="color:#991b1b">BLOCKED</span> portal/insurer issue recorded</div>
      <div style="text-align:right;margin-top:10px"><button id="sb-hx" style="${BTN}">Got it</button></div></div>`;
    document.body.appendChild(ov); ov.querySelector('#sb-hx').onclick = () => ov.remove();
  }
  function mountPanel() {
    if (document.getElementById('sb-panel') || !document.body) return;
    const box = document.createElement('div'); box.id = 'sb-panel'; box.__sbMine = MINE;
    box.style.cssText = 'position:fixed;left:10px;bottom:10px;z-index:2147482000;font:12px/1.4 system-ui,sans-serif;background:#0f172a;color:#fff;border-radius:999px;padding:5px 6px 5px 10px;box-shadow:0 4px 16px rgba(0,0,0,.3);display:flex;gap:8px;align-items:center;opacity:.93;max-width:min(520px,92vw)';
    const dot = document.createElement('span'); dot.style.cssText = 'width:9px;height:9px;border-radius:50%;display:inline-block;flex:none';
    const who = document.createElement('span'); who.style.cssText = 'max-width:300px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;cursor:pointer'; who.title = 'Click for the menu (start journey, results, Postman, PDF, screenshot, recording…)';
    who.onclick = () => showMenu();
    const main = document.createElement('button'); main.style.cssText = 'border:0;border-radius:999px;padding:5px 12px;cursor:pointer;font-size:12px;font-weight:700;color:#fff;flex:none';
    main.onclick = () => { if (isOff()) { switchOn(); showQuickDialog(); } else { switchOff(); banner('STOPPED', 'Journey in this tab stopped – other tabs keep running; press ▶ Start to use it again here'); } };
    const ln = document.createElement('span'); ln.id = 'sb-learn'; ln.style.cssText = 'display:none;color:#fde68a;max-width:220px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap';
    refreshPanel = () => {
      const c = cfg(); const off = isOff(); const on = !off && !!c.running;
      dot.style.background = off ? '#ef4444' : on ? (advanceOn() ? '#22c55e' : '#f59e0b') : '#64748b';
      const prod = c.product === '*' ? 'first plan' : c.product || 'choose on quote page';
      who.textContent = off ? 'OFF' : otherTab() ? `Journey running in another tab (${c.lob})` : on ? `${c.lob || HERE.lob}${c.category ? ' › ' + c.category : ''} › ${prod}${c.batch ? ` (${(c.queue || []).length} left)` : ''}${rec ? ' ⏺' : ''}` : `Idle · ${HERE.lob} (${HERE.env})${rec ? ' ⏺' : ''}`;
      main.textContent = off ? '▶ Start' : '■ STOP'; main.style.background = off ? '#16a34a' : '#dc2626';
      who.title = on ? (HEALTH.wait ? 'Waiting: ' + HEALTH.wait : 'Working') + ` · last tick ${HEALTH.lastMs} ms · ${HEALTH.ticks} ticks, ${HEALTH.hung} cut off` : 'Click for the menu';   // hover the panel: what the script is waiting for right now
    };
    box.append(dot, who, ln, main); document.body.appendChild(box); refreshPanel();
  }
  function showMenu() {                   // everything that is not STOP lives here, so the panel itself stays out of the way
    const old = document.getElementById('sb-menu'); if (old) { old.remove(); return; }
    const m = document.createElement('div'); m.id = 'sb-menu'; m.style.cssText = 'position:fixed;left:10px;bottom:46px;z-index:2147482001;background:#fff;color:#0f172a;border-radius:10px;box-shadow:0 8px 28px rgba(0,0,0,.3);padding:6px;font:13px system-ui;display:grid;gap:2px;min-width:250px';
    const item = (label, fn, tip) => { const b = document.createElement('button'); b.textContent = label; b.title = tip || ''; b.style.cssText = 'text-align:left;background:none;border:0;padding:7px 10px;border-radius:6px;cursor:pointer;font-size:13px;color:#0f172a'; b.onmouseenter = () => (b.style.background = '#eef2ff'); b.onmouseleave = () => (b.style.background = ''); b.onclick = () => { m.remove(); fn(); }; m.appendChild(b); };
    item('▶ Fill this form & auto-click Next…', () => { switchOn(); showQuickDialog(); }, 'Person details, then fill every page and press Next up to the quote page');
    item('✎ Fill this form (no clicking)…', () => { switchOn(); showQuickDialog(); }, 'Person details, then fill this page – you press Next yourself');
    item('⚙ Advanced: start a journey…', () => { switchOn(); showStartDialog(); }, 'Choose journey type, portal, LOB, product, batch of plans');
    item(advanceOn() ? '⏸ Pause auto-click' : '▶ Resume auto-click', () => { S.set(ADVK(), !advanceOn()); refreshPanel(); });
    item(S.get('speed', 'fast') === 'normal' ? '🐢 Speed: normal (switch to ⚡ fast)' : '⚡ Speed: fast (switch to normal)', () => { S.set('speed', S.get('speed', 'fast') === 'normal' ? 'fast' : 'normal'); banner('Speed', S.get('speed') === 'normal' ? 'normal – the original waits (use when a portal is slow to render)' : 'fast – waits cut to 40 %, pages polled more often'); }, 'fast = every internal wait at 40 %, page polled every 1.2 s');
    item((S.get('keepAwake', true) === false ? '🔇 Keep tab awake: off' : '🔈 Keep tab awake: on') + ' (background journeys)', () => { S.set('keepAwake', S.get('keepAwake', true) === false); keepAwake(false); banner('Keep awake', S.get('keepAwake', true) === false ? 'off – a hidden tab may slow the journey down' : 'on – a near-silent sound keeps the tab running while you are elsewhere'); }, 'Chrome slows hidden tabs down; a silent looping sound keeps this tab running at full speed');
    item(vsOn() ? '🧪 Validation sweep: ON (click to switch off)' : '🧪 Validation sweep: off (click to switch on)', () => { const on = !vsOn(); S.set('vsweep', on); if (on) vsReset(); banner('Validation sweep', on ? 'ON – every form page gets wrong values first (bad PAN / mobile / e-mail / dates, minor nominee, empty required…); the messages are collected and the report is downloaded at the end of the journey' : 'off'); refreshPanel(); }, 'Negative test of every page: wrong values, the error messages collected into one report');
    item('🧪 Validation report (download HTML + Markdown)', () => vsDownload(), 'The messages collected so far');
    item('📄 Request IDs → document (console API logs)…', () => showConsoleDialog(), 'The 1SB and insurer request / response of request IDs, pulled from the console API Logs into one Word document');
    item('📋 Results', () => showResults());
    item('🎫 Jira settings (tickets for failed journeys)…', () => showJiraSettings(), 'Ask / auto / off, Org ID, API token');
    item('📗 Workbook (Excel): export / load…', () => showWorkbookDialog(), 'All form values per product, category and environment – edit in Excel, load back, click ▶ Run in the sheet');
    item('📑 Product rules', () => showRules());
    item('🧾 Postman – gateway collection', () => downloadGateway(), 'Runs on the 1SB gateway with the 1SB <env> environment (baseUrl, authUser, authPass): MQ → Poll → Gate criteria → Proposal form → SQ → Poll → Proposal → Poll – press Run collection');
    item('🧾 Postman – every call (raw)', () => downloadPostman(true));
    item('📷 Screenshot now', () => screenshotNow());
    item('📄 PDF of this journey', () => exportEvidence('pdf'));
    item(rec ? '⏹ Stop recording' : '⏺ Record this tab', () => (rec ? stopRecording() : startRecording()));
    item('⏹ Stop on ALL tabs', () => { switchOff(true); banner('STOPPED', 'Script switched off on every portal tab – press ▶ Start in a tab to use it there again'); });
    item('? Help', () => showHelp());
    document.body.appendChild(m);
    setTimeout(() => document.addEventListener('click', function h(ev) { if (!m.contains(ev.target) && !document.getElementById('sb-panel').contains(ev.target)) { m.remove(); document.removeEventListener('click', h, true); } }, true), 0);
  }

  /* ---------------- main loop ---------------- */
  let busy = false, tickAt = 0, busyOwner = -1; const TICK_MAX = 60000;
  let lastFill = { sig: '', at: 0, clean: false };
  const fillSig = () => { try { return (location.hash || location.pathname).split('?')[0] + '|' + Q('input, select, textarea, .p-select, .p-dropdown, [role="combobox"], .multiselect').filter((e) => vis(e) && !ours(e)).map((e) => (e.name || e.id || labelOf(e) || e.tagName).slice(0, 30) + '=' + (e.type === 'checkbox' || e.type === 'radio' ? (e.checked ? 1 : 0) : String(e.value !== undefined ? e.value : e.textContent || '').trim().slice(0, 20))).join(';') + '|' + Q('.invalid-feedback, .error, .text-danger, [class*="error"]').filter(vis).length; } catch (e) { return String(Math.random()); } };
  function releaseTick(why) {                        // a step hung (a dropdown that never rendered, a renderer that never answered…): drop it, let a fresh tick run – the stale one may not click any more
    HEALTH.hung++; HEALTH.gen++; HEALTH.note('tick cut off in "' + HEALTH.stage + '": ' + why); busy = false; tickAt = 0; busyOwner = -1; filling = false; advancing = false;
  }
  async function tick() {
    if (busy) { if (tickAt && Date.now() - tickAt > TICK_MAX) releaseTick('no answer for ' + Math.round((Date.now() - tickAt) / 1000) + ' s'); else return; }
    if (vsBusy) { HEALTH.wait = 'validation sweep running'; return; }   /* v5.36: wrong values are being tried on this page – the loop must not press Next meanwhile */
    busy = true; tickAt = Date.now(); const my = HEALTH.gen; busyOwner = my; const t0 = Date.now(); HEALTH.ticks++;
    try {
      HEALTH.stage = 'jira'; if (await withTimeout(jiraWorkerTick(), 20000, 'jira worker')) return; if (!window.__sbJq) { window.__sbJq = 1; jiraQueueOnLoad(); }                             // a Jira tab opened by another tab's "Create Jira ticket": do that job and close
      HEALTH.stage = 'page'; refreshHere(); try { conTick(); } catch (e) { console.log('[SB4] console', e.message); } if (!isPortal()) return;
      if (INSTALLED) { const pnl = document.getElementById('sb-panel'); const foreign = (PW.__SB && PW.__SB !== window.__SB) || (pnl && pnl.__sbMine !== MINE);   // an older copy (without the duplicate check) took the page or the panel: the newer version takes over, the older is stopped
        if (foreign) { const otherV = PW.__SB_VERSION && PW.__SB_VERSION !== SB_VERSION ? PW.__SB_VERSION : (PW.__SB && PW.__SB.version) || 'older';
          if (otherV !== 'older' && vnum(otherV) > vnum(SB_VERSION)) { dupNote(SB_VERSION, otherV); window.__SB.kill('sb4-takeover'); return; }
          try { if (PW.__SB && PW.__SB !== window.__SB && PW.__SB.kill) PW.__SB.kill('sb4-takeover'); } catch (e) {}
          ['sb-panel', 'sb-menu', 'sb-dialog', 'sb-picker', 'sb-banner', 'sb-recask'].forEach((id) => { const e = document.getElementById(id); if (e && e.__sbMine !== MINE) e.remove(); });
          PW.__SB = window.__SB; PW.__SB_VERSION = SB_VERSION; PW.__SB_INSTALLED = { version: SB_VERSION, kill: () => { try { window.__SB.kill('sb4-takeover'); } catch (e) {} } }; dupNote(otherV, SB_VERSION); } }
      mountPanel(); refreshPanel();
      if (isOff()) { if (cfg().running) setCfg({ running: false, batch: false, batchAll: false, queue: [], nextCats: [] }); refreshPanel(); return; }   // ■ STOP pressed (this tab, or Stop on ALL tabs): the journey here ends; nothing is filled until ▶ Start
      if (otherTab()) return;                                          // a journey is running in another tab – this tab stays passive (STOP still works here)
      watchTeacher(); announceVersion(); evidenceOnLoad();
      if (running() && EVD().video && !rec) askRecording();
      if (HERE.lob === 'Launcher') { HEALTH.stage = 'launcher'; if (A().launcher) await withTimeout(A().launcher(), 20000, 'launcher'); return; }
      if (ending && endedFresh !== (cfg().fresh || null)) ending = false;        // a new journey (new fresh id) started after the last result – finishing is allowed again
      if (!running()) { amendPassIfError(); keepAwake(false); return; }
      keepAwake(true);
      { const c = cfg(); if (HERE.env !== '?' && !['?', 'Launcher', 'Form'].includes(HERE.lob) && c.lob && (c.lob !== HERE.lob || (c.env && c.env !== 'custom' && c.env !== HERE.env))) {   // a journey started from a pasted URL ('custom') runs on whatever portal that URL opens – a known distributor's name for the same page is not another portal   // this tab moved to another portal: the old journey does not follow – the page starts idle
          setCfg({ running: false, batch: false, batchAll: false, queue: [], nextCats: [] }); banner('Idle', `The ${c.lob} (${c.env}) journey stays on its own page – this is ${HERE.lob} (${HERE.env}). Press ▶ Start to run a journey here.`); refreshPanel(); return; } }
      if (freshen()) { if (hasGM || !window.__SB_DEVNORELOAD) { location.reload(); return; } }
      if (Q('input[type="password"]').some((i) => vis(i) && !ours(i))) {           // login page: the user signs in, the script never types credentials
        if (!document.getElementById('sb-banner')) banner('PAUSED (sign-in)', `${HERE.lob} (${cfg().mode === 'diy' ? 'DIY' : 'Assisted'}) needs a sign-in – enter the credentials; the journey continues by itself afterwards`);
        progress.since = Date.now(); progress.routeSince = Date.now(); return;
      }
      detectEnd(); if (!running()) return;
      keepSessionAlive();
      HEALTH.stage = 'fill';
      { const sig = fillSig();                                           // a page already filled and unchanged since (same fields, same values, no new errors) is not filled again for 12 s – the click comes at once
        if (!(lastFill.clean && lastFill.sig === sig && Date.now() - lastFill.at < 12000)) { const log = await withTimeout(fillPage(), 45000, 'fill'); if (my !== HEALTH.gen) return; lastFill = { sig: fillSig(), at: Date.now(), clean: !(log && log.length) }; } }
      if (isLanding() && running()) sessionStorage.setItem('sb4_landing', String(cfg().fresh || ''));
      HEALTH.stage = 'advance'; await withTimeout(maybeAdvance(my), 30000, 'advance'); if (my !== HEALTH.gen) return;
      HEALTH.stage = 'check'; progress.check();
    } catch (e) { HEALTH.note((e && e.message) || e); if (/^timeout/.test((e && e.message) || '')) { HEALTH.hung++; HEALTH.gen++; filling = false; advancing = false; } }
    finally { if (busyOwner === my) { busy = false; tickAt = 0; busyOwner = -1; } HEALTH.lastMs = Date.now() - t0; if (HEALTH.lastMs > HEALTH.maxMs) HEALTH.maxMs = HEALTH.lastMs; if (HEALTH.lastMs > 4000) HEALTH.slow++; HEALTH.stage = ''; }
  }

  window.__SB = { alive: true, version: SB_VERSION, preflight, showConsoleDialog, conRun, conModel, conRecords, conDocx, conHtml, conIds, conLearn, CON, vsSweepPage, vsBadValues, vsReportHtml, vsReportMd, vsDownload, vsReset, gsLoadRow, gsSendFields, gsFieldRows, gsNext, gsScenarios, gsScenarioRows, gsSendScenarios, probeConditionals, gsExpandQueue, gsWriteBack, gsRows, applyRunLink, isLanding, quoteRule, quoteSolve, health: HEALTH, nkey, quoteHint, quoteNext, quoteGuess, ruleCategory, catalogFor, searchProducts, rulesFor, onPollSeen, pollLookup, mqReasonFor, quoteFixFor, gatewayCollection, downloadGateway, capLoad, __lastFill: () => lastFill, isOtp, fillOtp, makePdf, makeJpg, docKind, OTP, startJourney, showQuickDialog, __cap: capPush, __wt: WT, selfHeal, __adv: maybeAdvance, __emptyState: () => emptyState, __heal: healState, __rtc: () => rtc && { ice: rtc.a.iceConnectionState, dc: rtc.dc && rtc.dc.readyState }, showJiraDialog, showJiraSettings, jiraPolicy, jiraEnqueue, jiraQueueRun, jiraQueueHtml, jiraMe, jiraFind, jiraParentFor, jiraUsers, jiraSprints, jiraEpics, jiraDraft, jiraSubmit, jiraFields, jiraOnResult, showWorkbookDialog, exportWorkbook, loadWorkbookFile, loadWorkbookUrl, sheetValue, sheetEdit, wbModel, flNote, flFlush, freshen, NET, netSummary, S, P: () => P, fillPage, tick, record, cfg, setCfg, ADAPTERS, HERE, labelOf, customSelects, pickCustom, isEmptyCustom, emptyRequired, primaryButton, showStartDialog, showResults, showPicker, startUrl, URLS, IDS, sleep, Q, vis, setNative, typeInto, esc, norm, matchText, liveOpts, closeOverlays, finishJourney, onBlocked, running, banner, CATS, progress, lastClick: () => lastClickAt, markClick: () => { lastClickAt = Date.now(); } };
  try { if (PW !== window) PW.__SB = window.__SB; } catch (e) {}     // the page can reach the API too (console / dev tools), the functions still run inside the sandbox
  /* ===================== LOB ADAPTERS ===================== */
  (function (SB) {
    const { Q, vis, sleep, labelOf, customSelects, pickCustom, cfg } = SB;
    const txt = (e) => (e && e.innerText || '').replace(/\s+/g, ' ').trim();

    /* ---------- Life Term (demo/dev/test .term.) ---------- */
    SB.ADAPTERS['Life Term'] = {
      skipFill: () => /policy-quote/i.test(location.hash),
      quoteCards() {
        if (!/policy-quote/i.test(location.hash)) return null;
        return Q('.plan1').filter(vis).map((c) => ({ name: txt(c.querySelector('h2,h3,h4')) || txt(c).slice(0, 50), click: async () => { const b = c.querySelector('.policy-price-amt') || c.querySelector('[class*=policy-price]') || c.querySelector('button'); if (!b) return; (b.closest('[class*=policy-pric]') || b).scrollIntoView({ block: 'center' }); b.click(); } }));
      },
      noQuoteReason: () => txt(Q('*').find((e) => e.children.length === 0 && /no products found/i.test(e.textContent || ''))),
    };

    /* ---------- generic helper: click a tab / pill / card whose text equals the chosen category ---------- */
    SB.pickCategoryTab = async function (names) {
      const want = (cfg().category || '').trim(); if (!want) return false;
      const els = Q('button, a, li, [role=tab], .nav-link, .tab, label, .btn').filter((e) => vis(e) && !e.closest('#sb-panel, #sb-dialog, #sb-picker') && (!names || names.some((n) => new RegExp('^\\s*' + SB.esc(n) + '\\s*$', 'i').test(txt(e)))));
      const el = els.find((e) => new RegExp('^\\s*' + SB.esc(want) + '\\s*$', 'i').test(txt(e)));
      if (!el) return false;
      if (/(^|\s)(active|selected|checked|p-highlight)(\s|$)/.test(el.className) || el.getAttribute('aria-selected') === 'true') return false;
      el.click(); await sleep(600); return true;
    };

    /* ---------- Health (demo/dev/test .health.) ---------- */
    SB.ADAPTERS['Health'] = {
      categories: ['Retail', 'Group', 'Top Up'],
      async beforeFill(log) { if (/^#\/?(\?|$)/.test(location.hash) && await SB.pickCategoryTab(['Retail', 'Group', 'Top Up'])) log.push('category ' + cfg().category); },
      quotesLoading: () => Q('.loading_block_outer, .spinner-border, .loader').some(vis),
      quoteCards() {
        if (!/multi-?quote/i.test(location.hash)) return null;
        Q('a,button,span,div').filter((e) => e.children.length < 2 && /^\d+\s+More Plans?$/i.test(txt(e)) && vis(e) && !e.dataset.sbOpen).forEach((t) => { t.dataset.sbOpen = '1'; t.click(); });
        return Q('.btn.text-white').filter((b) => vis(b) && /year|month/i.test(txt(b))).map((b) => {
          let p = b, t = null; for (let i = 0; i < 10 && p && !t; i++) { p = p.parentElement; t = p && Q('.title', p).find(vis); }
          return { name: t ? txt(t) : txt(b), click: async () => { b.scrollIntoView({ block: 'center' }); b.click(); } };
        });
      },
    };

    /* ---------- Health V-2 (amplify al-ui) ---------- */
    SB.ADAPTERS['Health V-2'] = {
      categories: ['Retail', 'Group', 'Top Up'],
      async beforeFill(log) {
        if (/\/info/.test(location.pathname) && await SB.pickCategoryTab(['Retail', 'Group', 'Top Up'])) log.push('category ' + cfg().category);
        const chip = Q('button.annual-income-slider__step').find((b) => txt(b) === '15L');
        if (chip && !chip.dataset.sb) { chip.dataset.sb = '1'; chip.click(); log.push('income chip 15L'); await sleep(300); }
      },
      skipFill: () => /multi-quote/i.test(location.pathname),                 // filters (sum insured / insurer / sort) on the quote page are never touched
      quotesLoading: () => /fetching your quotes|loading insurers/i.test(document.body.innerText),
      quoteCards() {
        if (!/multi-quote/i.test(location.pathname + location.hash)) return null;
        return Q('article.multi-quote-plan-card').filter(vis).map((a) => {
          const lines = (a.innerText || '').split('\n').map((x) => x.trim()).filter(Boolean).filter((l) => !/discount|% off/i.test(l));
          const h = Q('h3, h2, h4', a).find((e) => txt(e)); const plan = h ? txt(h) : lines[1] || '';
          const ins = lines.find((l) => l !== plan && !/^₹|sum insured|claim settlement|^\d/i.test(l)) || '';
          const btn = Q('button', a).filter(vis).find((b) => /get this plan|buy|select plan|proceed/i.test(txt(b)));
          return btn ? { name: `${plan} (${ins})`.trim(), click: async () => { btn.scrollIntoView({ block: 'center' }); btn.click(); } } : null;
        }).filter(Boolean);
      },
    };

    /* ---------- Motor (demo/dev/test .motor.) – Car/Bike × New/Renewal ---------- */
    const motorStep = () => { const h = Q('.activestepheader').find(vis); if (h && txt(h)) return txt(h);
      const s = Q('input[type="search"]').find(vis); if (s && s.placeholder) return 'Choose ' + s.placeholder.replace(/^search\s*/i, '');          // dev layout: no header, only "Search State" etc.
      if (Q('div[class*="select"]').some((e) => vis(e) && txt(e).length < 80 && !e.querySelector('input'))) return 'Choose option';
      return ''; };
    SB.ADAPTERS['Motor Insurance'] = {
      categories: ['Car (new)', 'Car (renewal)', 'Bike (new)', 'Bike (renewal)'],
      skipFill: () => /^choose/i.test(motorStep()),
      async chooseCard() {
        const cat = (cfg().category || 'Car (new)').toLowerCase(); const P = SB.P();
        if (/^#\/?(\?|$)/.test(location.hash)) {                 // landing: Car / Bike card
          const want = /bike|two/.test(cat) ? /bike/i : /car/i;
          const h = Q('h1,h2,h3,h4,h5,div,span,a').filter(vis).find((e) => e.children.length === 0 && want.test(txt(e)) && /insurance/i.test(txt(e)) && txt(e).length < 40);
          const card = h && (h.closest('a, .card, [class*="card"], [role=button]') || h);
          if (card) { SB.markClick(); card.click(); return true; }
        }
        if (/new-journey/i.test(location.hash) && /\(new\)/.test(cat)) {
          const l = Q('a, span, button').find((e) => vis(e) && /^click here$/i.test(txt(e))); if (l) { l.click(); return true; }
        }
        const step = motorStep();
        if (/^choose/i.test(step)) {
          const P2 = P, v = P2.vehicle;
          const tilesTxt = Q('div[class*="select"]').filter((e) => vis(e) && txt(e).length < 80 && !e.querySelector('input')).map(txt);
          const guess = /option/i.test(step) ? (tilesTxt.some((x) => /^(PETROL|DIESEL|CNG|ELECTRIC)$/i.test(x)) ? 'fuel' : tilesTxt.some((x) => /^[A-Z]{2}\s?-?\d{1,2}\b/.test(x)) ? 'rto' : tilesTxt.some((x) => /^(MARUTI|HYUNDAI|TATA|HONDA|HERO|BAJAJ|TVS|TOYOTA|KIA|MAHINDRA)/i.test(x)) ? 'make' : '') : '';
          const stepKey = (step + ' ' + guess);
          const wants = /state/i.test(stepKey) ? [P2.state] : /city/i.test(stepKey) ? [P2.city.toUpperCase(), P2.city] : /rto/i.test(stepKey) ? [v.reg.slice(0, 4), v.reg.slice(0, 2) + '-' + v.reg.slice(2, 4)]
            : /make|brand/i.test(stepKey) ? (/bike/.test(cat) ? ['HONDA', 'HERO', 'BAJAJ', 'TVS'] : ['MARUTI', 'HYUNDAI', 'TATA', 'HONDA']) : /fuel/i.test(stepKey) ? ['PETROL'] : [];
          const tilesNow = () => Q('div[class*="select"]').filter((e) => vis(e) && txt(e).length < 80 && !e.querySelector('input') && !e.closest('#sb-panel'));
          const search = Q('input[type="search"]').find(vis);
          if (search && wants[0] && search.value !== wants[0]) { await SB.typeInto(search, wants[0]); await sleep(700); }
          let tiles = tilesNow(); let hit = null;
          for (const w of wants) { hit = tiles.find((t) => txt(t).toUpperCase() === String(w).toUpperCase()) || tiles.find((t) => txt(t).toUpperCase().includes(String(w).toUpperCase())); if (hit) break; }
          if (!hit && search && search.value) { SB.setNative(search, ''); await sleep(600); tiles = tilesNow(); }
          hit = hit || tiles[0];
          if (hit) { SB.markClick(); hit.click(); return true; }
        }
        return false;
      },
      valueFor(el, name, label) {               // a brand-new vehicle is registered today; a renewal two years ago
        if (/registration date|date of registration/i.test(label)) { const d = new Date(); if (!/\(new\)/.test(cfg().category || '')) { d.setFullYear(d.getFullYear() - 2); d.setMonth(5, 15); }
          const p = (n) => String(n).padStart(2, '0'); return el.type === 'date' ? `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}` : /\//.test(el.placeholder || '') ? `${p(d.getDate())}/${p(d.getMonth() + 1)}/${d.getFullYear()}` : `${p(d.getDate())}-${p(d.getMonth() + 1)}-${d.getFullYear()}`; }
        return null;
      },
      quotesLoading: () => Q('.spinner-border, .loader, [class*="loading"]').some(vis) || /fetching|loading/i.test(document.body.innerText.slice(0, 2500)),
      async onQuotePage() {                    // comprehensive (Bundled) unless the product asks for Third Party; "all plans" sweeps every tab (Bundled, Third Party, Own Damage…)
        await sleep(2000);
        const tabs = () => Q('button').filter((b) => vis(b) && /^(bundled|third party|comprehensive|own damage|standalone)/i.test(txt(b)));
        for (let i = 0; i < 40 && tabs().length < 2 && !/third party|own damage/i.test(document.body.innerText); i++) await sleep(1500);   // the tabs appear with the first quotes
        sessionStorage.removeItem('sb4_motor_tabs');
        const tp = /third/i.test(cfg().product || ''), od = /own damage/i.test(cfg().product || '');
        const tab = tabs().find((b) => (tp ? /^third party/i : od ? /^own damage/i : /^bundled|^comprehensive/i).test(txt(b)));
        if (tab) { tab.click(); await sleep(2500); }
      },
      async sweep() {                          // "all plans": once the list is final, read every tab (Bundled / Third Party / Own Damage) so the batch covers them all
        const tabs = Q('button').filter((b) => vis(b) && /^(bundled|third party|comprehensive|own damage|standalone)/i.test(txt(b)));
        const found = {}; for (const tb of tabs) { const nm = txt(tb).replace(/\s*\[\d+\]/, '').trim(); tb.click(); await sleep(3500); found[nm] = (this.quoteCards() || []).filter((c) => !c.virtual).map((c) => c.name); }
        sessionStorage.setItem('sb4_motor_tabs', JSON.stringify(found));
        const first = tabs.find((b) => /^bundled|^comprehensive/i.test(txt(b))) || tabs[0]; if (first) { first.click(); await sleep(3000); }
      },
      quoteCards() {
        if (!/policy-quote|multi-?quote/i.test(location.hash)) return null;
        const INS = ['IndusInd', 'Reliance', 'ICICI', 'HDFC', 'Bajaj', 'Tata', 'Digit', 'Acko', 'SBI', 'Kotak', 'Chola', 'Future', 'Royal', 'Iffco', 'Liberty', 'Magma', 'National', 'New India', 'Oriental', 'United', 'Shriram', 'Universal', 'Zuno', 'Navi', 'Raheja', 'Generali'];
        const tabName = txt(Q('button').filter(vis).find((b) => /^(bundled|third party|comprehensive|own damage)/i.test(txt(b)) && /active|selected|btn-primary/.test(b.className)) || {}) .replace(/\s*\[\d+\]/, '') || 'Bundled';
        const here = Q('button').filter((b) => vis(b) && /^₹\s?[\d,]+$/.test(txt(b))).map((b) => {
          let card = b.parentElement; for (let i = 0; i < 10 && card && card !== document.body; i++) { const p = card.parentElement; const n = Q('button', p).filter((x) => vis(x) && /^₹\s?[\d,]+$/.test(txt(x))).length; if (n !== 1) break; card = p; }   // the smallest block that holds exactly this price button (the logo lives in it)
          const src = Q('img', card).map((i) => { try { return decodeURIComponent((i.alt || '') + ' ' + i.src.split('/').pop().replace(/\+/g, ' ')); } catch (e) { return (i.alt || '') + ' ' + i.src.split('/').pop(); } }).join(' ');
          const CODES = { RGI: 'Reliance', IGI: 'IndusInd', IGICL: 'IndusInd', BAGIC: 'Bajaj', TAGIC: 'Tata', GODIGIT: 'Digit', DIGIT: 'Digit', SBIG: 'SBI', CHOLA: 'Chola', FGI: 'Future Generali', RSA: 'Royal Sundaram', NIC: 'National', NIA: 'New India', OIC: 'Oriental', UIIC: 'United', SGI: 'Shriram', USGI: 'Universal Sompo', KGI: 'Kotak', ICICI: 'ICICI', HDFC: 'HDFC', ZUNO: 'Zuno', NAVI: 'Navi', ACKO: 'Acko', LIBERTY: 'Liberty', MAGMA: 'Magma', IFFCO: 'Iffco' };
          const own = txt(card).replace(/\s+/g, ' ');                                   // the card's own text first (plan name "RGI-2W …"), then logo alt/filename
          const code = (own.match(/\b([A-Z]{3,7})-(?:2W|4W|PC|TW|CV|GCV|PCV|MISC)/) || [])[1] || ((src.toUpperCase().match(/\b(RGI|IGI|IGICL|BAGIC|TAGIC|GODIGIT|DIGIT|SBIG|CHOLA|FGI|RSA|NIC|NIA|OIC|UIIC|SGI|USGI|KGI|ICICI|HDFC|ZUNO|NAVI)\b/) || [])[1]);
          const ins = (code && CODES[code]) || INS.find((n) => new RegExp(n, 'i').test(own)) || INS.find((n) => new RegExp(n, 'i').test(src)) || 'Insurer';
          return { name: `${ins} – ${tabName}`, click: async () => { b.scrollIntoView({ block: 'center' }); b.click(); } };
        });
        let other = [];                                                                   // plans of the other tabs (swept by onQuotePage) – clicking one switches the tab first
        try { const m = JSON.parse(sessionStorage.getItem('sb4_motor_tabs') || '{}');
          for (const [tb, names] of Object.entries(m)) { if (tb.toLowerCase() === tabName.toLowerCase()) continue;
            names.forEach((nm, i) => other.push({ name: nm, virtual: true, click: async () => { const t = Q('button').find((b) => vis(b) && txt(b).replace(/\s*\[\d+\]/, '').trim().toLowerCase() === tb.toLowerCase()); if (t) { t.click(); await sleep(3000); }
              const now = (SB.ADAPTERS['Motor Insurance'].quoteCards() || []).filter((c) => !c.virtual); const hit = now.find((c) => c.name === nm) || now[i]; if (hit) await hit.click(); } })); } } catch (e) {}
        return here.concat(other);
      },
    };

    /* ---------- Embedded (amplify al-ui, loan protection) ---------- */
    function sectionOf(el) { let p = el; for (let i = 0; i < 12 && p; i++) { p = p.parentElement; if (p && /\n\s*\d+\s+Plans?\s*\n/i.test('\n' + (p.innerText || ''))) { const lines = p.innerText.split('\n').map((x) => x.trim()).filter(Boolean); const k = lines.findIndex((l) => /^\d+\s+Plans?$/i.test(l)); return k > 0 ? lines[0] : ''; } } return ''; }
    SB.ADAPTERS['Embedded'] = {
      quoteCards() {
        if (!/embedded|plans|quote/i.test(location.hash)) return null;
        const btns = Q('button').filter((b) => vis(b) && /^select plan/i.test(txt(b)));
        if (!btns.length) return null;
        if (Q('input[type=checkbox]').some((c) => c.checked && c.closest('button'))) return null;          // a plan is selected – let the page proceed
        const cat = (cfg().category || '').toLowerCase();
        return btns.map((b) => {
          let card = b; for (let i = 0; i < 8 && card && !/Sum Assured/.test(card.innerText || ''); i++) card = card.parentElement;
          const lines = ((card && card.innerText) || '').split('\n').map((x) => x.trim()).filter(Boolean);
          const code = (b.querySelector('input[type=checkbox]') || {}).name || '';
          const price = (txt(b).match(/₹[\d,.]+/) || [''])[0];
          const sec = sectionOf(b);
          const cb = b.querySelector('input[type=checkbox]');
          return { section: sec, name: `${lines[0] || 'Plan'} (${code}) ${price}`.trim(), click: async () => { b.scrollIntoView({ block: 'center' }); (cb || b).click(); } };
        }).filter((c) => !cat || c.section.toLowerCase().includes(cat));
      },
    };

    /* ---------- Investment / Savings (demo.savings / dev.saving / test.saving) – ported from v3.4 ---------- */
    const SAV_CATS = ['Guaranteed Plans', 'Non-Guaranteed Plans', 'Market Linked Returns', 'Retirement Plans – Pension', 'Retirement Plans – Annuity'];
    async function setFrequency(wants, re, log) {        // the premium-frequency filter on the savings quote page (custom select or native <select>)
      const freq = SB.customSelects().concat(Q('select')).find((c) => vis(c) && /^(monthly|quarterly|half-?yearly|yearly|one.?time|single)$/i.test((c.tagName === 'SELECT' ? (c.options[c.selectedIndex] || {}).text || '' : txt(c)).trim()));
      if (!freq) return null; const cur = (freq.tagName === 'SELECT' ? (freq.options[freq.selectedIndex] || {}).text || '' : txt(freq)).trim(); if (re.test(cur)) return null; const k = 'sbFreq' + wants[0].replace(/\W/g, ''); if (freq.dataset[k]) return null; freq.dataset[k] = '1';
      let got = null;
      if (freq.tagName === 'SELECT') { const o = [...freq.options].find((x) => re.test(x.text.trim())); if (o) { freq.value = o.value; freq.dispatchEvent(new Event('change', { bubbles: true })); got = o.text; } }
      else got = await SB.pickCustom(freq, wants);
      if (got) { log.push('premium frequency -> ' + got); await sleep(1500); } return got;
    }
    const SAV_TYPE = { nonparticipating: 'Guaranteed Plans', participating: 'Non-Guaranteed Plans', ulip: 'Market Linked Returns', pension: 'Retirement Plans – Pension', annuity: 'Retirement Plans – Annuity' };
    SB.ADAPTERS['Investment'] = {
      categories: SAV_CATS,
      pollCategory(q) {                                // which tab a quoted plan belongs to – from the plan's own savingsProductType / productType in the multi-quote poll
        const ip = (q && q.insuranceAndProducts) || {}; const t = String(ip.savingsProductType || '').toLowerCase(); const pt = String(ip.productType || '').toLowerCase();
        return SAV_TYPE[t] || (/annuit/.test(pt) ? SAV_TYPE.annuity : /pension|retire/.test(pt) ? SAV_TYPE.pension : '') || (/^#\/multiQuote/i.test(location.hash) ? cfg().category || '' : '');
      },
      async goCategory(cat) {                          // switch the quote-page tab (Guaranteed / Non-Guaranteed / Market Linked / Retirement) – or go back to the category cards
        const want = String(cat || '').replace(/\s*–.*$/, '').toLowerCase(); const tab = Q('button, a, li, span, div').filter((e) => vis(e) && e.children.length <= 2 && txt(e).length < 40 && txt(e).toLowerCase().includes(want.split(' ')[0]) && /plans?|returns?|retire/i.test(txt(e))).find((e) => !/active|selected|p-highlight/.test(e.className) && e.getAttribute('aria-selected') !== 'true');
        if (tab) { tab.click(); await sleep(1200); return true; }
        const back = Q('a, button').find((e) => vis(e) && /back|categor/i.test(txt(e))); if (back) { back.click(); await sleep(800); } return false;
      },
      /* ---- v5.26: the chosen product is quoted alone and with the filters it needs (the portal's own deep-link + filter memory) ---- */
      store() { try { const app = PW.document.querySelector('#app'); return (app && app.__vue_app__ && app.__vue_app__.config.globalProperties.$store) || null; } catch (e) { return null; } },
      deepLinkOn() { try { const st = this.store(); if (st && st.state && st.state.deepLinkParams) return !!st.state.deepLinkParams.productId; const vx = JSON.parse(sessionStorage.getItem('vuex') || 'null'); return !!(vx && vx.deepLinkParams && vx.deepLinkParams.productId); } catch (e) { return false; } },
      setDeepLink(m, id) {                              // the portal's deep link (productId + manufacturerId): its multi-quote then asks for this one product only – the answer comes in seconds and is about this product
        let ch = false; m = String(m || ''); id = String(id || '');
        try { const st = this.store(); const cur = st && st.state && st.state.deepLinkParams; if (cur && (String(cur.productId || '') !== id || String(cur.manufacturerId || '') !== m)) { st.commit('setDeepLinkParams', Object.assign({}, cur, { productId: id, manufacturerId: m })); ch = true; } } catch (e) {}
        try { const vx = JSON.parse(sessionStorage.getItem('vuex') || 'null'); if (vx && vx.deepLinkParams && (String(vx.deepLinkParams.productId || '') !== id || String(vx.deepLinkParams.manufacturerId || '') !== m)) { vx.deepLinkParams.productId = id; vx.deepLinkParams.manufacturerId = m; sessionStorage.setItem('vuex', JSON.stringify(vx)); ch = true; } } catch (e) {}
        return ch;
      },
      clearDeepLink() { return this.setDeepLink('', ''); },
      wantedParams(rr) {                               // what this product is quoted with: a test case's own values first (v5.33), else what worked last time, else what its rules ask for, else the portal defaults (retirement plans keep the portal's own)
        { const cw = cfg().quoteWant; if (cw && cw.ppf) return { ppf: cw.ppf, ppt: +cw.ppt, amount: +cw.amount, pt: cw.pt || 'Any' }; }
        const sol = S.get('quoteSol', {})[quoteSolKey(rr)]; if (sol && sol.ppf) return { ppf: sol.ppf, ppt: +sol.ppt, amount: +sol.amount, pt: sol.pt || 'Any' };
        if (/annuity|pension/i.test(rr.grp || '') || /retire|pension|annuit/i.test(cfg().category || '')) return null;
        return quoteGuess(rr) || { ppf: 'M', ppt: 10, amount: 10000, pt: 'Any' };
      },
      quoteParams(strict) {                            // the filters the last multi-quote was asked with (strict: only a request this page load really sent)
        const d = { ppf: 'M', ppt: 10, amount: 10000, pt: 'Any' };
        try { const t0 = (typeof performance !== 'undefined' && performance.timeOrigin) || 0; const rec = SB.capLoad().filter((x) => x.method === 'POST' && /\/quote$/i.test(String(x.url).split('?')[0]) && x.t >= t0 - 500 && /"typeOfQuote"\s*:\s*"Multi/i.test(x.reqBody || '')).slice(-1)[0];
          if (rec) { const q = JSON.parse(rec.reqBody); const p = q.product || {}; const am = (rec.reqBody.match(/"quoteAmount":"?(\d+)/) || [])[1]; return { ppf: p.premiumPaymentFrequency || d.ppf, ppt: +p.premiumPaymentTerm || d.ppt, amount: +am || d.amount, pt: p.policyTerm ? String(p.policyTerm) : 'Any' }; } } catch (e) {}
        if (strict) return null;
        try { const q = JSON.parse(sessionStorage.getItem('quote_request') || 'null'); const p = q && q.product; if (p && p.premiumPaymentFrequency) { const am = (JSON.stringify(q).match(/"quoteAmount":"?(\d+)/) || [])[1]; return { ppf: p.premiumPaymentFrequency, ppt: +p.premiumPaymentTerm || d.ppt, amount: +am || d.amount, pt: p.policyTerm ? String(p.policyTerm) : 'Any' }; } } catch (e) {}
        try { const r = JSON.parse(sessionStorage.getItem('investReturnData') || 'null'); if (r && r.ppf) return { ppf: r.ppf, ppt: +r.ppt || d.ppt, amount: +r.quoteAmount || d.amount, pt: r.policyTerm ? String(r.policyTerm) : 'Any' }; } catch (e) {}
        return d;
      },
      writeFilters(p) { sessionStorage.setItem('investReturnData', JSON.stringify({ policyTerm: p.pt && p.pt !== 'Any' ? String(p.pt) : 'Any', ppf: p.ppf, quoteAmount: +p.amount, ppt: +p.ppt })); sessionStorage.setItem('sb4_ird', '1'); },
      async applyQuoteParams(p, cat) {                 // filters (and tab) are written where the quote page restores them from, the old quote request is dropped and the page is loaded again: the portal quotes with exactly these values
        if (p) this.writeFilters(p);
        const c = String(cat || cfg().category || ''); const tab = /non-?guaranteed/i.test(c) ? 'non-guaranteed' : /guaranteed/i.test(c) ? 'guaranteed' : /market/i.test(c) ? 'market-linked' : /retire|pension|annuit/i.test(c) ? 'retirement' : (sessionStorage.getItem('multiQuoteActiveTab') || 'guaranteed');
        sessionStorage.setItem('multiQuoteActiveTab', tab); if (tab === 'retirement') sessionStorage.setItem('multiQuoteRetirementType', /annuit/i.test(c) ? 'annuity' : 'pension');
        sessionStorage.removeItem('reqId'); sessionStorage.removeItem('reqIdTimestamp'); sessionStorage.removeItem('sb4_qset');
        const h = '#/multiQuote?category=' + tab; if (location.hash !== h) { try { history.replaceState(null, '', location.pathname + location.search + h); } catch (e) { location.hash = h; } }
        try { PW.__sbApplied = { p: p || null, tab }; } catch (e) {}
        if (!hasGM && window.__SB_DEVNORELOAD) return true;                               // test pages
        await sleep(150); location.reload(); await sleep(4000); return true;
      },
      async prepareQuote(log) {                        // once per journey, before the first quote: single-product deep link, the filters the product is known to need, its real category
        const c = cfg(); const want = c.product || ''; const jk = String(c.fresh || '') + '|' + want; const key = jk + '|' + (c.deepOff === jk ? 'off' : 'on');
        if (sessionStorage.getItem('sb4_qprep') === key) return false; sessionStorage.setItem('sb4_qprep', key);
        const qr = want && want !== '*' && !c.batchAll ? quoteRule(c, want) : null; const rr = qr && qr.r; let ch = false;
                if (!rr || !qr.sure || c.deepOff === jk) { if (this.deepLinkOn()) { this.clearDeepLink(); log.push('quote the full list'); ch = true; } }
        else if (this.setDeepLink(rr.m, rr.id)) { log.push('quote only ' + rr.m + ' ' + rr.id); ch = true; }
        { const w = rr && qr.sure && c.deepOff !== jk ? this.wantedParams(rr) : null;
          if (w) this.writeFilters(w);                                                     // also enforced on the quote page itself
          else if (sessionStorage.getItem('sb4_ird')) { sessionStorage.removeItem('sb4_ird'); sessionStorage.removeItem('investReturnData'); log.push('filters back to the portal defaults'); ch = true; } }   // filters this script set for another product do not leak into this journey (retirement plans / the full list use the portal's own)
        if (rr && /^other products|^$/i.test(c.category || '')) { const cat = ruleCategory(rr); if (cat) { setCfg({ category: cat }); log.push('category ' + cat); } }
        if (ch) { sessionStorage.removeItem('reqId'); sessionStorage.removeItem('reqIdTimestamp'); }
        return ch;
      },
      async applyQuoteFix(log) {                       // the multi-quote poll said what the plan needs (amount / frequency / term): the quote page's own filter panel (Edit → Investment Amount / frequency / term) is changed and the portal quotes again
        const fx = cfg().quoteFix; if (!fx) return false; let done = false;
        const amountInput = () => Q('input').find((i) => vis(i) && i.type !== 'checkbox' && /investmentamount|invest|premium amount|^amount/i.test(i.name + ' ' + i.id + ' ' + SB.labelOf(i)) && !/term|year|age|income|compare/i.test(SB.labelOf(i) + ' ' + i.name));
        if (!amountInput() && /multiQuote/i.test(location.hash)) { const ed = Q('button, a, span, div').find((e) => vis(e) && e.children.length <= 1 && /^edit$/i.test(txt(e))); if (ed) { ed.click(); await sleep(1200); } }   // narrow layout: the filters sit behind "Edit"
        if (fx.amount) { const inp = amountInput(); if (inp && String(inp.value).replace(/\D/g, '') !== String(fx.amount)) {
          const want = String(fx.amount); const quotesBefore = NET.filter((n) => n.m === 'POST' && /\/quote$/.test(n.u)).length;
          inp.focus(); inp.select(); await SB.typeInto(inp, want);                                   // typed like a person: the amount box (PrimeVue InputNumber) only updates its model from key events
          inp.dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab', code: 'Tab', keyCode: 9, bubbles: true })); inp.dispatchEvent(new Event('change', { bubbles: true })); inp.blur(); inp.dispatchEvent(new Event('blur', { bubbles: true })); await sleep(800);
          if (String(inp.value).replace(/\D/g, '') !== want) { inp.focus(); inp.select(); document.execCommand && document.execCommand('insertText', false, want); inp.dispatchEvent(new Event('change', { bubbles: true })); inp.blur(); await sleep(800); }
          for (let i = 0; i < 16 && NET.filter((n) => n.m === 'POST' && /\/quote$/.test(n.u)).length === quotesBefore; i++) await sleep(500);   // the portal quotes again by itself on a desktop layout; a narrow layout has an Apply Filters button
          done = String(inp.value).replace(/\D/g, '') === want; log.push('investment amount -> ' + inp.value + ' (quote fix, wanted ' + want + (NET.filter((n) => n.m === 'POST' && /\/quote$/.test(n.u)).length > quotesBefore ? ', portal re-quoted' : '') + ')'); } }
        if (fx.freq) { const got = await setFrequency([fx.freq, fx.freq.replace(/-/g, ' ')], new RegExp(fx.freq.replace(/[- ]/g, '.?'), 'i'), log); if (got) done = true; }
        if (fx.ppt) { const ppt = SB.customSelects().concat(Q('select')).find((c) => vis(c) && /premium payment term|pay for|ppt/i.test(SB.labelOf(c))); if (ppt && !ppt.dataset.sbFix) { ppt.dataset.sbFix = '1'; const got = await SB.pickCustom(ppt, [fx.ppt + ' Years', fx.ppt + ' Year', String(fx.ppt)]); if (got) { log.push('premium payment term -> ' + got + ' (quote fix)'); done = true; } } }
        if (done) { const apply = Q('button, a').find((b) => vis(b) && /^(apply( filters?)?|update( filters?)?|get quotes?|search|done|save|submit)$/i.test(txt(b))); if (apply) { apply.click(); log.push('apply filters'); await sleep(1500); } }
        return done;
      },
      async beforeFill(log) {                         // Retirement: Pension / Annuity are sub-tabs of the quote page
        if (!/categoryselection|multiquote/i.test(location.hash) && !SB.isLanding() && this.deepLinkOn() && sessionStorage.getItem('sb4_qprep')) { this.clearDeepLink(); }   // the plan is chosen: the portal's quote list is whole again for whoever opens it next
        if (/categoryselection/i.test(location.hash)) { try { const l = []; await this.prepareQuote(l); if (l.length) { log.push(...l); console.log('[SB4] quote prepare', l); } } catch (e) {} }
        const solving = this.deepLinkOn();   // the quote solver owns the filters: the "empty list" repairs below would undo them
        if (/categoryselection/i.test(location.hash) && cfg().product && cfg().product !== '*' && /^other products|^$/i.test(cfg().category || '')) {   // a plan picked from the rules master: the catalog learned from the polls knows its tab
          const cats = SB.CATS()[HERE.env + '|' + HERE.lob] || {}; const pk = SB.nkey ? SB.nkey(cfg().product) : cfg().product.toLowerCase(); const hit = Object.entries(cats.products || {}).find(([k, list]) => list.some((n) => (SB.nkey ? SB.nkey(n) : n.toLowerCase()) === pk));
          if (hit && hit[0] !== 'All') { setCfg({ category: hit[0] }); log.push('category from the catalog: ' + hit[0]); } }
        if (/multiQuote/i.test(location.hash) && /retire/i.test(cfg().category || '')) {
          const sub = /annuity/i.test(cfg().category) ? /^annuity$/i : /^pension$/i;
          const tab = Q('button, a, li, span, div').filter((e) => vis(e) && e.children.length <= 1 && sub.test(txt(e))).find((e) => !/active|selected|p-highlight/.test(e.className) && e.getAttribute('aria-selected') !== 'true');
          if (tab && !tab.dataset.sbTab) { tab.dataset.sbTab = '1'; tab.click(); log.push('sub-tab ' + txt(tab)); await sleep(800); }
          // DIY retirement quotes: "Monthly" premium frequency makes every insurer answer "quoteCategory Premium is not supported" (0 plans) – a one-time purchase price is what annuities / pensions quote on
          if (!solving && /no retirement plans available/i.test(document.body.innerText)) await setFrequency(['One Time', 'Single', 'Onetime', 'One-time', 'Lumpsum'], /one.?time|single|lump/i, log); }
        // the quote filters are sticky across journeys (a one-time purchase chosen for annuity empties the savings lists): back to Monthly / 10 years when a savings category shows no plans
        if (!solving && /multiQuote/i.test(location.hash) && !/retire/i.test(cfg().category || '') && /no (non-)?guaranteed plans available|no market linked returns available|no plans available/i.test(document.body.innerText)) {
          await setFrequency(['Monthly'], /^monthly$/i, log);
          const ppt = SB.customSelects().concat(Q('select')).find((c) => vis(c) && /^1 year$/i.test((c.tagName === 'SELECT' ? (c.options[c.selectedIndex] || {}).text || '' : txt(c)).trim()) && !c.dataset.sbPpt);
          if (ppt) { ppt.dataset.sbPpt = '1'; const got = ppt.tagName === 'SELECT' ? null : await SB.pickCustom(ppt, ['10 Years', '10 Year', '10']); if (got) { log.push('premium payment term -> ' + got); await sleep(1500); } } }
        if (!solving && /multiQuote/i.test(location.hash) && /market/i.test(cfg().category || '') && /no market linked returns available/i.test(document.body.innerText)) {   // ULIP / TULIP sub-tabs: when one is empty try the other
          const other = Q('button, a, li, span, div').filter((e) => vis(e) && e.children.length <= 1 && /^t?ulip$/i.test(txt(e))).find((e) => !/active|selected|p-highlight/.test(e.className) && e.getAttribute('aria-selected') !== 'true' && !e.dataset.sbTab);
          if (other) { other.dataset.sbTab = '1'; other.click(); log.push('sub-tab ' + txt(other)); await sleep(800); } }
      },
      async chooseCard() {
        if (/categoryselection/i.test(location.hash)) {
          const want = new RegExp('(^|[^\\w-])' + SB.esc((cfg().category || 'Guaranteed Plans').replace(/\s*–.*$/, '')), 'i');
          const card = Q('.plan-card, .p-card').filter(vis).find((c) => want.test(txt(c))) || Q('.plan-card').filter(vis)[0];
          if (card) { card.click(); return true; }
        }
        return false;
      },
      quotesLoading: () => /fetching your quotes/i.test(document.body.innerText),
      quoteCards() {
        if (!/multiQuote/i.test(location.hash)) return null;
        Q('span, a, button, div').filter((e) => e.children.length < 2 && /^\d+ more plans?$/i.test(txt(e)) && vis(e) && !e.dataset.sbOpen).forEach((t) => { t.dataset.sbOpen = '1'; t.click(); });   // "2 more plans" expanders hide variants
        const btns = Q('button').filter((b) => vis(b) && /get details/i.test(txt(b)));
        const cardOf = (b) => b.closest('.multi-quote-card') || (() => { let e = b; for (let i = 0; i < 10 && e; i++) { e = e.parentElement; if (e && /You (Give|Get|Pay|Invest)/i.test(e.innerText) && e.innerText.length < 1200) return e; } return null; })();
        return btns.map((btn) => { const c = cardOf(btn); const t = c ? txt(c) : ''; const m = t.match(/(?:Life Cover:\s*\S+\s*)?(?:--\s*)?(.+?)\s*You (?:Give|Get|Pay|Invest|Receive)\b/i);
          let name = m ? m[1] : t.slice(0, 80); name = name.replace(/^(?:\s*--\s*|\s*Life Cover:\s*[\d.]+\s*[LCr]*\s*)+/i, '').replace(/\s*Life Cover:.*$/i, '').replace(/\s*You (Get|Give|Pay).*$/i, '').trim() || 'plan';
          return { name, click: async () => { btn.scrollIntoView({ block: 'center' }); btn.click(); } }; });
      },
    };
    /* ---------- 3-Click (demo/dev/test .life.) – React-Native-Web app: no names/ids, tabindex=0 tiles as buttons ---------- */
    (function () {
      const tiles = () => Q('[tabindex="0"]').filter((e) => vis(e) && !e.closest('#sb-panel, #sb-dialog, #sb-picker') && (e.innerText || '').trim());
      const tileText = (e) => (e.innerText || '').replace(/[\u{E000}-\u{F8FF}\u{F0000}-\u{FFFFF}]/gu, '').replace(/\s+/g, ' ').trim();   // strip icon-font glyphs
      const labelBefore = (el) => { let p = el; for (let i = 0; i < 6 && p; i++, p = p.parentElement) { let s = p.previousElementSibling; while (s) { const t = (s.innerText || '').trim(); if (t && t.length < 90 && !s.querySelector('input,[tabindex="0"]')) return t.replace(/\s+/g, ' '); s = s.previousElementSibling; } } return ''; };
      const P = () => SB.P();
      const VAL = () => [[/mobile/i, P().phone], [/e-?mail/i, P().email], [/father.*first|spouse.*first/i, P().father.split(' ')[0]], [/father.*last|spouse.*last/i, P().last], [/first name/i, P().first], [/middle name/i, P().middle], [/last name|surname/i, P().last],
        [/\bpan\b/i, P().pan], [/aadha?a?r/i, String(P().aadhaar || '999941057058')], [/ckyc/i, P().ckyc || '10001234567890'], [/pin\s*code|pincode/i, P().pin], [/income/i, P().income], [/address.*1|house|flat/i, P().address1], [/address.*2|street|road/i, P().address2], [/address.*3|landmark/i, P().landmark],
        [/city/i, P().city], [/height.*cm|height/i, String(P().heightCm)], [/weight/i, String(P().weightKg)], [/ifsc/i, P().bank.ifsc], [/account.*number/i, P().bank.account], [/bank.*name/i, P().bank.name], [/branch/i, 'MG Road Branch'], [/eia|e-insurance.*number/i, '1000000000001'],
        [/age at death|age of/i, '70'], [/percentage|share/i, '100'], [/nominee.*first/i, P().nominee.first], [/nominee.*last/i, P().nominee.last], [/company|employer|organi/i, 'Acme Technologies Pvt Ltd'], [/designation|nature of work/i, 'Software Engineer'], [/remark|detail|describ|specify|reason/i, 'NA']];
      const SEL = () => [[/title/i, P().gender === 'Male' ? 'Mr' : 'Ms'], [/marital/i, 'Married'], [/resident/i, 'Resident'], [/nationality|country/i, 'India'], [/relation/i, 'Mother'], [/gender/i, P().gender], [/qualification|education/i, 'Graduate'], [/occupation/i, 'Salaried'], [/company name/i, ''], [/organi[sz]ation/i, 'Private'], [/industry/i, 'Information Technology'],
        [/identity proof|id proof/i, 'Aadhaar'], [/address proof/i, 'Aadhaar'], [/age proof/i, 'Aadhaar'], [/income proof/i, 'Salary'], [/account type/i, 'Saving'], [/repository|insurance repository/i, 'CAMS'], [/state/i, P().state], [/income/i, '']];
      SB.ADAPTERS['3-Click'] = {
        buttonOrder: [/^get offer now/i],
        async chooseCard() {
          const path = location.pathname;
          if (path === '/' || path === '') {           // home: Savings / Term / ULIP cards  (category = card name)
            const cat = (cfg().category || 'Term').toLowerCase(); const card = tiles().find((e) => tileText(e).toLowerCase() === cat || tileText(e).toLowerCase().includes(cat));
            if (card) { card.click(); return true; }
          }
          return false;
        },
        quotesLoading: () => /loading|fetching/i.test(document.body.innerText.slice(0, 2000)),
        quoteCards() {
          if (!/screen$/i.test(location.pathname)) return null;
          const prem = Q('div').filter((e) => vis(e) && e.children.length === 0 && /^premium per year$/i.test((e.innerText || '').trim()));
          return prem.map((e) => { let q = e; for (let i = 0; i < 9 && q; i++) { q = q.parentElement; if (q && /policy cover/i.test(q.innerText) && q.innerText.length < 900) break; }
            const name = q ? (q.innerText.split('\n').map((x) => x.trim()).filter(Boolean)[0] || 'plan') : 'plan'; const btn = e.parentElement.parentElement;
            return { name, click: async () => { btn.scrollIntoView({ block: 'center' }); btn.click(); } }; });
        },
        skipFill: () => /screen$/i.test(location.pathname),
        async beforeFill(log) {
          // 1. "Select an option" pickers → open, pick wanted option from the modal list
          for (const dd of tiles().filter((e) => /^select an option/i.test(tileText(e)))) {
            const lab = labelBefore(dd); const want = (SEL().find(([re]) => re.test(lab)) || [])[1];
            const before = new Set(tiles()); dd.click(); await sleep(500);
            const fresh = tiles().filter((t) => !before.has(t) && t !== dd);          // only the tiles that appeared with the modal
            const modalOpts = fresh.filter((t) => tileText(t) && !/select an option/i.test(tileText(t))).map((t) => ({ innerText: tileText(t), closest: () => t }));
            if (!modalOpts.length) { document.body.click(); await sleep(200); continue; }
            let pick = want ? modalOpts.find((x) => x.innerText.trim().toLowerCase().startsWith(String(want).toLowerCase())) || modalOpts.find((x) => x.innerText.trim().toLowerCase().includes(String(want).toLowerCase())) : null;
            if (!pick) pick = modalOpts.find((x) => !/^(select|choose|cancel|close)/i.test(x.innerText.trim()));
            if (pick) { (pick.closest('[tabindex="0"]') || pick).click(); log.push(`${lab} -> ${pick.innerText.trim()}`); await sleep(400); } else { document.body.click(); }
          }
          // 2. text inputs (no names): value by the label text before the input
          for (const inp of Q('input[type="text"], input:not([type])').filter((e) => vis(e) && !e.value && !e.readOnly && !e.closest('#sb-panel'))) {
            const lab = labelBefore(inp); if (SB.isOtp(inp) || /otp/i.test(lab)) continue;
            if (/date|dob|birth/i.test(lab)) { await SB.typeInto(inp, P().dobDMY.replace(/-/g, '/')); log.push(lab + ' dob'); continue; }
            const v = (VAL().find(([re]) => re.test(lab)) || [])[1]; if (v) { await SB.typeInto(inp, String(v)); log.push(`${lab} <- ${v}`); }
          }
          // 3. Yes / No tiles: No by default, Yes for "alive", "aadhar card", "agree"
          for (const grp of tiles().filter((e) => /^(yes|no)$/i.test(tileText(e)))) { /* handled below per question */ }
          const yesQ = /alive|aadha?r card|agree|same as|physical/i;
          const seenQ = new Set();
          for (const t of tiles().filter((e) => /^yes$/i.test(tileText(e)) && !e.dataset.sbq)) {
            const q = labelBefore(t.parentElement) || labelBefore(t); if (seenQ.has(q)) continue; seenQ.add(q);
            const row = t.parentElement.parentElement || t.parentElement; const no = [...row.querySelectorAll('[tabindex="0"]')].find((e) => /^no$/i.test(tileText(e)));
            if (!no && !yesQ.test(q)) continue;
            const pick = yesQ.test(q) ? t : no; t.dataset.sbq = '1'; if (no) no.dataset.sbq = '1'; pick.click(); log.push(`${q} -> ${tileText(pick)}`); await sleep(150);
          }
          // 4. checkboxes ("✓" tiles) – declarations
          for (const c of tiles().filter((e) => /^✓$/.test(tileText(e)) || /^☐|^□/.test(tileText(e)))) { if (!c.dataset.sb) { c.dataset.sb = '1'; c.click(); log.push('tick'); await sleep(100); } }
        },
        productName: () => (document.body.innerText.match(/(Tata AIA[^\n]{3,60}|ICICI Pru[^\n]{3,60}|HDFC Life[^\n]{3,60}|Bajaj[^\n]{3,60})/) || [''])[0].trim(),
      };
      // buttons on 3-Click are tabindex=0 tiles, not <button>: expose them to primaryButton via a proxy list
      SB.ADAPTERS['3-Click'].extraButtons = () => tiles().filter((e) => /^(get offer now|next|continue|proceed|submit|save|confirm|review|pay now|get quote|apply)/i.test(tileText(e)) && !/pay/i.test(tileText(e))).map((e) => ({ el: e, text: tileText(e) }));
    })();

    /* ---------- Launcher (login.<env>.insurance) ---------- */
    SB.ADAPTERS['Launcher'] = {
      async launcher() {
        const c = SB.cfg();
        if (c.running && c.lob && c.lob !== 'Launcher' && !sessionStorage.getItem('sb4_relaunched')) {   // journey was bounced to the launcher (dev/test session) – pick env and go straight back to the portal
          sessionStorage.setItem('sb4_relaunched', '1');
          const sel = Q('select').find((s) => [...s.options].some((o) => /^(dev|test|demo)$/i.test(o.value)));
          if (sel && sel.value !== c.env) { SB.setNative(sel, c.env); await SB.sleep(800); }
          const u = SB.startUrl(c.env, c.lob, c.mode); if (u) { SB.banner('RUN', `Back to ${c.lob} (${c.env})`); location.assign(u); return; }
        }
        if (c.running && c.lob && c.lob !== 'Launcher' && sessionStorage.getItem('sb4_relaunched')) {               // bounced twice → the launcher session is not valid for that env
          SB.setCfg({ running: false });
          if (/^(demo|dev|test)$/.test(c.env)) SB.banner('PAUSED (sign-in)', `${c.lob} (${c.env}) sent you back here – sign in to the launcher for "${c.env}", then press ▶ Start journey again`);
          else { SB.record('BLOCKED', `Portal redirects to the 1SB launcher (${location.host}) – the distributor portal is not configured / not reachable`); SB.banner('BLOCKED', `${c.lob} (${c.env}) redirects to the 1SB launcher – that portal is not configured; recorded in Results`); }
        }
        if (document.getElementById('sb-dialog') || sessionStorage.getItem('sb4_launcher_shown')) return;
        sessionStorage.setItem('sb4_launcher_shown', '1'); SB.showStartDialog();
      },
    };
  })(window.__SB);

  if (!hasGM && !document.getElementById('sb-loader') && document.body) {       // dev hot-reload hook (not used under Tampermonkey)
    const i = document.createElement('input'); i.type = 'file'; i.id = 'sb-loader'; i.style.cssText = 'position:fixed;top:0;left:0;width:10px;height:10px;opacity:0.01;z-index:2147483647';
    i.onchange = async () => { const txt = await i.files[0].text(); localStorage.setItem('sb4_src', txt); try { sessionStorage.setItem('sb4_src', txt); } catch (e) {} try { PW.__SB_RELOAD = true; } catch (e) {} i.value = ''; if (window.__SB && window.__SB.kill) window.__SB.kill('sb4-reload'); i.remove(); new Function(txt)(); };
    document.body.appendChild(i);
  }
  let t = null; const schedule = () => { WT.clear(t); t = WT.set(tick, Math.round(700 * SPEED())); };
  window.addEventListener('hashchange', schedule); window.addEventListener('popstate', schedule);
  const keyH = (ev) => { if (!ev.altKey || ev.ctrlKey || ev.metaKey) return; const k = (ev.key || '').toLowerCase(); if (k === 'x') { ev.preventDefault(); switchOff(); banner('STOPPED', 'Journey in this tab stopped (Alt+X) – switched off – Alt+S or ▶ Start to use it again'); } else if (k === 's') { ev.preventDefault(); switchOn(); showStartDialog(); } };
  window.addEventListener('keydown', keyH, true);
  const mo = new MutationObserver((m) => { if (m.some((x) => [...x.addedNodes].some((n) => n.nodeType === 1 && !ours(n) && (n.matches?.('form,input,select,button,.p-select,.modal,[role=dialog]') || n.querySelector?.('form,input,select,.p-select'))))) schedule(); });
  mo.observe(document.documentElement, { childList: true, subtree: true });
  let iv = null, loopAt = Date.now(), loopStop = false; const loop = () => { if (loopStop) return; loopAt = Date.now(); try { if (busy && tickAt && Date.now() - tickAt > TICK_MAX) releaseTick('no answer for ' + Math.round((Date.now() - tickAt) / 1000) + ' s'); if (!filling && !advancing) tick(); else if (!busy && Date.now() - flagAt > TICK_MAX) { HEALTH.note('stale ' + (filling ? 'filling' : 'advancing') + ' flag dropped'); filling = false; advancing = false; } } catch (e) { HEALTH.note('loop: ' + e.message); } iv = WT.set(loop, Math.round(3000 * SPEED())); }; iv = WT.set(loop, Math.round(3000 * SPEED()));
  const dog = setInterval(() => { if (!loopStop && Date.now() - loopAt > 12000) { loopAt = Date.now(); loop(); } }, 5000);   // if the worker timer ever stops, the page clock restarts the loop (slow in a hidden tab, but never dead)
  window.__SB.kill = (tok) => { if (INSTALLED && tok !== 'sb4-takeover' && tok !== 'sb4-reload') return;   // an older copy's blind kill() (it kills whatever it finds on the page) is ignored – the newer copy decides who runs
    try { if (capDbP) capDbP.then((d) => d.close()).catch(() => {}); if (dbp) dbp.then((d) => d.close()).catch(() => {}); } catch (e) {} loopStop = true; WT.clear(iv); clearInterval(dog); WT.clear(t); keepAwake(false); mo.disconnect(); window.removeEventListener('hashchange', schedule); window.removeEventListener('popstate', schedule); window.removeEventListener('keydown', keyH, true); ['sb-panel', 'sb-menu', 'sb-recask', 'sb-dialog', 'sb-picker', 'sb-issues', 'sb-banner', 'sb-loader'].forEach((id) => { const e = document.getElementById(id); if (e) e.remove(); }); window.__SB.alive = false; };
  applyRunLink().catch((e) => console.log('[SB4] run link', e.message)).finally(schedule);
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => setTimeout(sbMain, 0)); else sbMain();
})();
