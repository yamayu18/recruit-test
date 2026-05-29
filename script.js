const CTA_URL = "https://timerex.net/s/ihr.jimu_adf4/a38ae946";

function handleCtaClick() {
  console.log("CTA clicked");

  // GA4などの計測を追加する場合は、この関数内にイベント送信処理を追記します。
}

function initializeCtaLinks() {
  const ctaLinks = document.querySelectorAll(".js-cta-link");

  if (!ctaLinks.length) {
    return;
  }

  ctaLinks.forEach((cta) => {
    cta.href = CTA_URL;
    cta.addEventListener("click", handleCtaClick);
  });
}

document.addEventListener("DOMContentLoaded", initializeCtaLinks);
