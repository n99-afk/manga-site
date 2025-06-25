const percent = document.querySelector('.percent');
const loader = document.getElementById('loader');
const content = document.getElementById('content');

let count = 0;
const duration = 2000; // 2秒
const intervalTime = 20;
const step = 100 / (duration / intervalTime);

const interval = setInterval(() => {
  count += step;
  if (count >= 100) {
    count = 100;
    clearInterval(interval);

    // アニメーションスタート
    loader.classList.add('loader-finish');

    // 完全に晴れた後にローダーを非表示＆本コンテンツ表示
    setTimeout(() => {
      loader.style.display = 'none';
      content.style.display = 'block';
      document.body.style.overflow = 'auto';
    }, 1000); // エフェクト用に1秒
  }
  percent.textContent = `${Math.floor(count)}%`;
}, intervalTime);
