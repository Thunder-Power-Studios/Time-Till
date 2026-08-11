function startCountdown(options) {
    if (!options.target || !options.element) {
        return;
    }

    let element;

    try {
        element = document.querySelector(options.element);
    } catch {
        return;
    }

    if (!element) {
        return;
    }

    const targetDate = new Date(options.target).getTime();

    if (isNaN(targetDate)) {
        return;
    }

    function updateCountdown() {
        const distance = targetDate - Date.now();

        if (distance <= 0) {
            clearInterval(timer);
            element.innerHTML = options.message || "Time's Up!";
            return;
        }

        const days = Math.floor(distance / 86400000);
        const hours = Math.floor((distance % 86400000) / 3600000);
        const minutes = Math.floor((distance % 3600000) / 60000);
        const seconds = Math.floor((distance % 60000) / 1000);

        element.innerHTML =
            days + "d " +
            hours + "h " +
            minutes + "m " +
            seconds + "s";
    }

    const timer = setInterval(updateCountdown, 1000);

    updateCountdown();
}