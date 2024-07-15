let saveEl = document.getElementById("save-entries")
let countEl = document.getElementById("count")
let t = 0

console.log(saveEl)

function incr() {
    t += 1
    countEl.textContent = t
}

function save() {
    saveEl.textContent += t + " , "
    console.log(t)
}

function clearit() {
    t = 0
    countEl.textContent = t
    saveEl.textContent = "Previous entries: "
}
