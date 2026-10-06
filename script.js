/* =====================================================
   SETTINGS
===================================================== */


/*
   CHANGE THESE
*/


const friendName = "PAYEL";


// Birthday
// January = 0
// February = 1
// March = 2
// April = 3
// May = 4
// June = 5
// July = 6
// August = 7
// September = 8
// October = 9
// November = 10
// December = 11


const birthdayMonth = 9;

const birthdayDay = 6;



/*
   SECRET ANSWER

   Change this to something
   your friend knows.

   Example:

   "fast and furious"

*/

const secretAnswer = "jani na";



/* =====================================================
   SET NAME
===================================================== */

document.getElementById("friendName").innerText =
    friendName;

document.querySelectorAll(".name-placeholder")
    .forEach(element => {

        element.innerText =
            friendName;

    });



/* =====================================================
   SCREEN SWITCH
===================================================== */

function switchScreen(current, next) {

    document.getElementById(current)
        .classList.remove("active");

    setTimeout(() => {

        document.getElementById(next)
            .classList.add("active");

    }, 300);

}



/* =====================================================
   FIRST SCREEN
===================================================== */

function showQuestion() {

    switchScreen(
        "mysteryScreen",
        "questionScreen"
    );

}



/* =====================================================
   SECRET QUESTION
===================================================== */

function checkAnswer() {

    const input =
        document.getElementById("answerInput");

    const answer =
        input.value
            .trim()
            .toLowerCase();

    const correct =
        secretAnswer
            .trim()
            .toLowerCase();


    if (answer === correct) {

        document.getElementById(
            "wrongAnswer"
        ).innerHTML =
            "Access granted... ❤️";

        launchConfetti();


        setTimeout(() => {

            switchScreen(
                "questionScreen",
                "envelopeScreen"
            );

        }, 1200);


    } else {

        document.getElementById(
            "wrongAnswer"
        ).innerHTML =
            "Hmm... That's not it 😏 Try again.";

        input.value = "";

        input.focus();

    }

}



/* =====================================================
   ENTER KEY
===================================================== */

document.getElementById(
    "answerInput"
).addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            checkAnswer();

        }

    }
);



/* =====================================================
   ENVELOPE
===================================================== */

function openEnvelope() {

    const envelope =
        document.querySelector(".envelope");

    envelope.classList.add("open");

    launchConfetti();


    setTimeout(() => {

        document.getElementById(
            "envelopeScreen"
        ).classList.remove("active");

        document.getElementById(
            "mainWebsite"
        ).classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 1800);

}



/* =====================================================
   SCROLL TO MEMORIES
===================================================== */

function scrollToMemories() {

    document.getElementById(
        "memories"
    ).scrollIntoView({
        behavior: "smooth"
    });

}



/* =====================================================
   COUNTDOWN
===================================================== */

function updateCountdown() {

    const now =
        new Date();


    let year =
        now.getFullYear();


    let birthday =
        new Date(
            year,
            birthdayMonth,
            birthdayDay,
            0,
            0,
            0
        );


    if (now > birthday) {

        birthday =
            new Date(
                year + 1,
                birthdayMonth,
                birthdayDay,
                0,
                0,
                0
            );

    }


    const difference =
        birthday - now;


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference /
                (1000 * 60 * 60))
            % 24
        );


    const minutes =
        Math.floor(
            (difference /
                (1000 * 60))
            % 60
        );


    const seconds =
        Math.floor(
            (difference / 1000)
            % 60
        );


    document.getElementById("days")
        .innerText =
        String(days)
            .padStart(2, "0");


    document.getElementById("hours")
        .innerText =
        String(hours)
            .padStart(2, "0");


    document.getElementById("minutes")
        .innerText =
        String(minutes)
            .padStart(2, "0");


    document.getElementById("seconds")
        .innerText =
        String(seconds)
            .padStart(2, "0");

}


setInterval(
    updateCountdown,
    1000
);

updateCountdown();



/* =====================================================
   CAKE
===================================================== */

let blownCandles = 0;


function blowCandle(candle) {

    if (
        candle.classList.contains("blown")
    ) {

        return;

    }


    candle.classList.add("blown");

    blownCandles++;


    if (blownCandles === 3) {

        document.getElementById(
            "wishText"
        ).innerHTML =
            "✨ Your wish has been made. May it come true. ❤️";


        launchConfetti();

    }

}



/* =====================================================
   CONFETTI
===================================================== */

function launchConfetti() {

    const duration =
        2500;

    const end =
        Date.now() + duration;


    function frame() {

        confetti({

            particleCount: 5,

            spread: 80,

            startVelocity: 30,

            origin: {
                x: Math.random(),
                y: Math.random() * .5
            }

        });


        if (
            Date.now() < end
        ) {

            requestAnimationFrame(
                frame
            );

        }

    }


    frame();

}



/* =====================================================
   FINAL CELEBRATION
===================================================== */

function finalCelebration() {

    const duration =
        5000;

    const end =
        Date.now() + duration;


    function frame() {

        confetti({

            particleCount: 8,

            spread: 100,

            startVelocity: 40,

            origin: {
                x: Math.random(),
                y: Math.random() * .6
            }

        });


        if (
            Date.now() < end
        ) {

            requestAnimationFrame(
                frame
            );

        }

    }


    frame();

}



/* =====================================================
   FLOATING PARTICLES
===================================================== */

function createParticle() {

    const particle =
        document.createElement("div");


    particle.className =
        "particle";


    const symbols = [
        "♡",
        "✦",
        "·",
        "✧",
        "♡"
    ];


    particle.innerText =
        symbols[
            Math.floor(
                Math.random()
                * symbols.length
            )
        ];


    particle.style.left =
        Math.random() * 100 + "%";


    particle.style.fontSize =
        10 +
        Math.random() * 18 +
        "px";


    particle.style.color =
        Math.random() > .5
            ? "#ff7fa5"
            : "#b58cff";


    particle.style.animationDuration =
        6 +
        Math.random() * 8 +
        "s";


    document.getElementById(
        "particles"
    ).appendChild(
        particle
    );


    setTimeout(() => {

        particle.remove();

    }, 15000);

}


setInterval(
    createParticle,
    700
);