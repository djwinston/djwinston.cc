import type { TurnstileObject } from "turnstile-types";

declare const turnstile: TurnstileObject;

const isProd = import.meta.env.PROD;

if (isProd) {
  window.onloadTurnstileCallback = function () {
    turnstile.render('#cloudflare-container', {
      sitekey: `${import.meta.env.CF_SITE_KEY}`,
      callback: function (token) {
        console.log(`Challenge Success ${token}`);
      },
    });
  };
} else {
  console.info('DEVELOPMENT')
}