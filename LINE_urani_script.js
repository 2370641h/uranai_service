const rankings = document.querySelectorAll(".zodiac-item_name__c4Ypu"); // サイトに応じてクラス名を調整
const imgs = document.querySelectorAll(".zodiac-item_zodiac__jAEEI");

if (rankings.length > 0 && imgs.length > 0) {
  let piscesIndex = -1;

  // 「うお座」を探す
  rankings.forEach((item, index) => {
    if (item.textContent.includes("うお座")) {
      piscesIndex = index;
    }
  });

  if (piscesIndex !== -1 && piscesIndex > 2) {
    // ランダムで1～3位のインデックスを選択
    const randomIndex = Math.floor(Math.random() * 3);

    // ランダムに選ばれた星座と「うお座」を入れ替え（ランキング名）
    const selectedRanking = rankings[randomIndex];
    const pisces = rankings[piscesIndex];

    const tempHTML = selectedRanking.innerHTML;
    selectedRanking.innerHTML = pisces.innerHTML;
    pisces.innerHTML = tempHTML;

    // 対応する画像を入れ替え
    const selectedImg = imgs[randomIndex];
    const piscesImg = imgs[piscesIndex];

    const tempImgHTML = selectedImg.outerHTML;
    selectedImg.outerHTML = piscesImg.outerHTML;
    piscesImg.outerHTML = tempImgHTML;


  }
}