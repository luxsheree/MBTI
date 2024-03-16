function initTimer() {
    const startTimerBtn = document.getElementById('startTimer');
    const timerDisplay = document.getElementById('timerDisplay');

    let timerDuration = 1500; // default to 25 minutes (1500 seconds)
    let countdown;

    startTimerBtn.addEventListener('click', () => {
        startTimer(timerDuration);
    });

    function startTimer(duration) {
        clearInterval(countdown);
        const startTime = Date.now();
        const endTime = startTime + duration * 1000;

        countdown = setInterval(() => {
            const secondsLeft = Math.round((endTime - Date.now()) / 1000);

            if (secondsLeft < 0) {
                clearInterval(countdown);
                return;
            }

            updateDisplay(secondsLeft);
        }, 1000);
    }

    function updateDisplay(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        timerDisplay.textContent = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }
}
