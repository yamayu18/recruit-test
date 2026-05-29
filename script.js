const CTA_URL = "https://timerex.net/ここに実際のURLを入れる";

function handleCtaClick() {
  console.log("CTA clicked");

  // GA4などの計測を追加する場合は、この関数内にイベント送信処理を追記します。
}

function initializeFixedCta() {
  const cta = document.getElementById("fixed-cta");

  if (!cta) {
    return;
  }

  cta.href = CTA_URL;
  cta.addEventListener("click", handleCtaClick);
}

document.addEventListener("DOMContentLoaded", initializeFixedCta);
