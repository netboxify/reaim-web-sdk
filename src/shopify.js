setTimeout(() => {
  window.REAIM_SW_PATH_GLOBAL = '/apps/reaim/sw.js';

  /* eslint-disable */
  var push = new window.ReAimSDK(function() {
    // executed on Allow
  }, function() {
    // executed on Block
  });

  push.init();
  /* eslint-enable */
}, 2000);
