import {Initialize} from "./initializer";
import {Start} from "./entityManager";

// ゲーム要素準備
Initialize();
// 虫出現スタート
Start();
// GameOver判定
setInterval(()=>{
    const tds: HTMLCollectionOf<HTMLTableCellElement> = document.getElementsByTagName("td");
    for (let i = 0; i < tds.length; i++) {
        if (tds.item(i)!.innerHTML == "") {
            return;
        }
    }
    document.getElementById("main_div")!.innerHTML = "GAME OVER!";
}, 100);


