const myClock = () => {
    let realTime = new Date();
    document.querySelector('.demo-for-clock').innerHTML = realTime.getHours() + ":" + realTime.getMinutes() + ":" + realTime.getSeconds();
}

window.setInterval(myClock, 1000);