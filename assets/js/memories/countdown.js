export class Countdown {
    static start() {
        const
            countDownDate = new Date("Aug 17, 2021 16:51:00").getTime();

        const
            countdown = setInterval(function () {

                const distance = countDownDate - new Date().getTime();

                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                document.getElementById("countdown").innerHTML = "Countdown: " + days + "d " + hours + "h "
                    + minutes + "m " + seconds + "s ";

                if (distance < 0) {
                    clearInterval(countdown);
                    document.getElementById("countdown").innerHTML = "I'm here!";
                }
            }, 1000);
    }

    static getHTML() {
        return "<h2 id=\"countdown\">Countdown: --</h2>\n";
    }
}