function updateClock() {
    const now = new Date();
    const second = now.getSeconds();
    const minute = now.getMinutes();
    const hour = now.getHours();

    const secondAngle = second * 6; // 360 degrees / 60 seconds
    const minuteAngle = minute * 6 + second * 0.1; // 360 degrees / 60 minutes
    const hourAngle = hour * 30 + minute * 0.5; // 360 degrees / 12 hours

    document.getElementById('second').setAttribute('transform', `rotate(${secondAngle}, 50, 50)`);
    document.getElementById('minute').setAttribute('transform', `rotate(${minuteAngle}, 50, 50)`);
    document.getElementById('hour').setAttribute('transform', `rotate(${hourAngle}, 50, 50)`);

    // Update digital time
    const digitalTime = now.toLocaleTimeString();
    document.getElementById('digital').textContent = digitalTime;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call to set the clock immediately
