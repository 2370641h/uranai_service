const init= async()=> {
    const body=document.body;

    const div=document.createElement("div");//星の画像を挿入するためにdivタブを作成
    div.setAttribute("id","star-image-wrapper");//divのid属性をstar-image-wrapperにする
    
    for(let i=0;i<3;i++){
    const starImage=document.createElement("img")//img要素を作成
    starImage.src=chrome.runtime.getURL("images/lighting.gif");//chromeの拡張のリソースフォルダから画像を取得
    starImage.classList.add("star-image")//cssクラスとして追加

    div.appendChild(starImage);//画像をdivに追加して
    }
    body.appendChild(div);//divをページbodyに追加
}

init();