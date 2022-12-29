const count = document.getElementById('timer')

const countTime = new Date(count.textContent * 1000);

const nIntervalID = setInterval(() => {

    h = String(countTime.getUTCHours()).padStart(2, '0');
    m = String(countTime.getUTCMinutes()).padStart(2, '0');
    s = String(countTime.getUTCSeconds()).padStart(2, '0');
    count.textContent = `${h}:${m}:${s}`

    countTime.setSeconds(countTime.getSeconds() - 1);

    if (countTime.getTime() < 0) {  
        alert("Вы победили в конкурсе!");
        clearInterval(nIntervalID);
    }
}, 1000)