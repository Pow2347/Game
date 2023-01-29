export class BugEntity {
    td: HTMLTableCellElement | null = null

    Spawn = () => {
        const tds: HTMLCollectionOf<HTMLTableCellElement> = document.getElementsByTagName("td");
        do {
            const p = Math.floor(Math.random() * tds.length);
            this.td = tds.item(p);
            if (this.td != null && this.td!.innerHTML == "") {
                this.td!.innerHTML = p % 2 == 0 ? "🐞" : "🐛"
                this.td!.addEventListener("click", this.OnMouseClicked)
            }
        } while(this.td!.innerHTML == "");
    }

    OnMouseClicked = () => {
        this.td!.innerHTML = ""
        this.td!.removeEventListener("click", this.OnMouseClicked)

        const el_point: HTMLElement | null = document.getElementById("point");
        if (el_point != null) {
            el_point.innerHTML = (parseInt(el_point?.innerHTML) + 10).toString();
        }
    }
}