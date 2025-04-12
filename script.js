let count = 0
let countEl = document.getElementById("count")
let saveEl = document.getElementById("entries")
function increment() {
    count += 1
    countEl.textContent = count
}
function save() {
    saveEl.textContent += count + " - "
    count = 0
    countEl.textContent = count
}