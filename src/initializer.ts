export const Initialize = () => {
    const el_table: HTMLTableElement = document.createElement("table");
    el_table.className = "design11";
    
    for (let i = 0; i < 5; i++) {
        const el_tr: HTMLTableRowElement = document.createElement("tr");
    
        for (let j = 0; j < 5; j++) {
            const el_td: HTMLTableCellElement = document.createElement("td");
            el_tr.append(el_td);
        }
        el_table.append(el_tr);
    }

    const el_main_div: HTMLElement | null = document.getElementById("main_div");
    el_main_div?.append(el_table);

    return;
}
