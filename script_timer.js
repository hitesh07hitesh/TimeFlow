const endDate = "15 September 2023 11:59 PM"

document.getElementById('end_date').innerText = endDate

const inputs = document.querySelectorAll('input')

const reverseTimer = () => {
    const end = new Date(endDate)
    const now = new Date
    const diff = (end - now) / 1000
    if (diff > 0) {
        inputs[0].value = Math.floor(diff / 3600 / 24)
        inputs[1].value = Math.floor(diff / 3600) % 24
        inputs[2].value = Math.floor(diff / 60) % 60
        inputs[3].value = Math.floor(diff % 60)
    }
}

reverseTimer()

setInterval(
    () => (
        reverseTimer()
    ), 1000
)
