import { BugEntity } from "./bug"

let interval = 1000;
export const Start = () => {
    setInterval(() => {
        interval *= 0.9;
    }, 1000)

    const update = () => {
        const entity = new BugEntity();
        entity.Spawn();
        setTimeout(update, interval)
    }
    update()
}