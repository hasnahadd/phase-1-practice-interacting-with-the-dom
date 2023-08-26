const timer = document.querySelector('#counter');
const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');
const pauseBtn = document.querySelector('#pause');
const heart = document.querySelector('#heart');
const form = document.querySelector('#comment-form');
let seconds = 0;
let Paused = false;

function updateTimer() {
  if (!Paused) {
    seconds++;
    timer.textContent = `${seconds} `;
  }
}

let timerInterval = setInterval(updateTimer, 1000);

function pause() {
  Paused = true;
  clearInterval(timerInterval);
  pauseBtn.textContent = 'resume';
  const timerPause = seconds;
  timeCapture(timerPause);
  minus.disabled = true;
  plus.disabled = true;
  heart.disabled = true;
}

function resume() {
  timerInterval = setInterval(updateTimer, 1000);
  pauseBtn.textContent = 'pause';
  Paused = false; 
  minus.disabled = false;
  plus.disabled = false;
  heart.disabled = false;

}

pauseBtn.addEventListener('click', () => {
  if (pauseBtn.textContent === 'pause') {
    pause();
  } else {
    resume();
  }
});

heart.addEventListener('click', () => {
  if (!Paused) {
    timeCapture(seconds);
  }
});

function timeCapture(seconds) {
  const li = document.createElement('li');
  li.textContent = `Paused time: ${seconds} seconds`;
  const likes = document.querySelector('.likes');
  likes.appendChild(li);
}

form.addEventListener('submit', (e) => {
  const input = document.querySelector('#comment-input');
  e.preventDefault();
  const div = document.querySelector('#list');
  const h3 = document.createElement('h3');
  h3.textContent = input.value;
  div.appendChild(h3);
  
  console.log(input.value);
});

minus.addEventListener('click',()=>{

    if ((!Paused) && seconds > 0){
        seconds--;
        timer.textContent = `${seconds} `;

    }

})
plus.addEventListener('click',()=>{
    if (!Paused){

        seconds++;
        timer.textContent=`${seconds} `;
    }


})
  