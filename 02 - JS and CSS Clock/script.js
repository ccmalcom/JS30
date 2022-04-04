const ss = document.querySelector('.second-hand');
const mm = document.querySelector('.min-hand');
const hh = document.querySelector('.hour-hand');
const ticker = document.querySelector('#ticker');
const concertDate = new Date('2022-06-19T19:30:00');


const setDate = () => {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    ss.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    mm.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hh.style.transform = `rotate(${hoursDegrees}deg)`;
};

const daysUntil = () => {
    const now = new Date();
    const diff = concertDate - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
};

const textUpdater = () => {
    const { days, hours, minutes, seconds } = daysUntil();
    ticker.innerHTML = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
};

setInterval(setDate, 1000);
setInterval(textUpdater, 1000);

//! cannot get flipdown to line up with clock
// const flip = () => {
//     var flipdown = new FlipDown((concertDate.getTime() / 1000))
//         .start()
//         .ifEnded(() => {
//             console.log('The countdown has ended!');
//         });
// };

// addEventListener('DOMContentLoaded', () => {
//     setInterval(setDate, 1000);
//     setInterval(textUpdater, 1000);
//     flip();
// });

