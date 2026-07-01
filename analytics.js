(function () {
  const cfg = window.WDPC_ANALYTICS || {};
  const ga4Id = (cfg.ga4MeasurementId || '').trim();
  const clarityId = (cfg.clarityProjectId || '').trim();
  const host = window.location.hostname;
  const isLocal = host === 'localhost' || host === '127.0.0.1';

  if (isLocal) return;

  function trackEvent(name, params) {
    if (typeof window.gtag === 'function') {
      window.gtag('event', name, params || {});
    }
  }

  window.wdpcTrack = trackEvent;

  if (ga4Id) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', ga4Id, {
      anonymize_ip: true,
      send_page_view: true,
    });

    const gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(ga4Id);
    document.head.appendChild(gaScript);
  }

  if (clarityId) {
    (function (c, l, a, r, i, t, y) {
      c[a] = c[a] || function () {
        (c[a].q = c[a].q || []).push(arguments);
      };
      t = l.createElement(r);
      t.async = 1;
      t.src = 'https://www.clarity.ms/tag/' + i;
      y = l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t, y);
    })(window, document, 'clarity', 'script', clarityId);
  }
})();
