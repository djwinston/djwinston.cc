import type { TurnstileObject } from "turnstile-types";

declare const turnstile: TurnstileObject;

const site_key = import.meta.env.PUBLIC_CF_SITE_KEY;

  window.onloadTurnstileCallback = function () {
    turnstile.render('#captcha', {
      sitekey: site_key,
      callback: function (token) {
        console.debug(`Challenge Success ${token}`)
        setTimeout(() => turnstile.remove(), 3000)
      },
    })
  }
