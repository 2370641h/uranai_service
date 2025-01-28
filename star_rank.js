const init = async () => {
    const images = document.querySelectorAll(".seizaListImg");
  
    for (let i = 0; i < 3 && i < images.length; i++) {
      const targetImage = images[i];
      const imageRect = targetImage.getBoundingClientRect(); // 画像の位置とサイズを取得
  
      // エフェクト画像を作成
      const starImage = document.createElement("img");
      starImage.src = chrome.runtime.getURL("images/lighting.gif");
      starImage.classList.add("star-image");
  
      // エフェクト画像を元の画像の親要素に追加（レイアウトを崩さない）
      targetImage.parentNode.style.position = "relative";
      targetImage.parentNode.appendChild(starImage);
  
      // CSSで配置を調整
      starImage.style.position = "absolute";
      starImage.style.top = "0";
      starImage.style.left = "0";
      starImage.style.width = "200px";  // 元の画像と同じサイズ
      starImage.style.height = "auto"; // 元の画像と同じサイズ
      starImage.style.pointerEvents = "none"; // 操作を邪魔しない
      starImage.style.zIndex = "10"; // 元の画像の上に表示
    }
  };
  
  init();
  