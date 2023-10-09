const buttons = document.querySelectorAll('.button');
const resetButton = document.querySelector('.main__restart-button');

const win = document.querySelector('.main__win');
const tie = document.querySelector('.main__tie');

const playerX = '&#10005;';
const playerO = '&#9711;';

let state = 1; // 1 - крестик; 0 - нолик

const checkWin = () => {
  if (buttons[0].innerHTML.trim() === buttons[1].innerHTML.trim() && buttons[0].innerHTML.trim() === buttons[2].innerHTML.trim() && buttons[0].innerHTML.trim() !== '') {
    win.classList.add('active');
    win.querySelector('span').innerHTML = buttons[0].innerHTML.trim();
    // XXX
    // ---
    // ---
  } else if (buttons[3].innerHTML.trim() === buttons[4].innerHTML.trim() && buttons[3].innerHTML.trim() === buttons[5].innerHTML.trim() && buttons[3].innerHTML.trim() !== '') {
    win.classList.add('active');
    win.querySelector('span').innerHTML = buttons[3].innerHTML.trim();
    // ---
    // XXX
    // ---
  } else if (buttons[6].innerHTML.trim() === buttons[7].innerHTML.trim() && buttons[6].innerHTML.trim() === buttons[8].innerHTML.trim() && buttons[6].innerHTML.trim() !== '') {
    win.classList.add('active');
    win.querySelector('span').innerHTML = buttons[6].innerHTML.trim();
    // ---
    // ---
    // XXX
  } else if (buttons[0].innerHTML.trim() === buttons[3].innerHTML.trim() && buttons[0].innerHTML.trim() === buttons[6].innerHTML.trim() && buttons[0].innerHTML.trim() !== '') {
    win.classList.add('active');
    win.querySelector('span').innerHTML = buttons[0].innerHTML.trim();
    // X--
    // X--
    // X--
  } else if (buttons[1].innerHTML.trim() === buttons[4].innerHTML.trim() && buttons[1].innerHTML.trim() === buttons[7].innerHTML.trim() && buttons[1].innerHTML.trim() !== '') {
    win.classList.add('active');
    win.querySelector('span').innerHTML = buttons[1].innerHTML.trim();
    // -X-
    // -X-
    // -X-
  } else if (buttons[2].innerHTML.trim() === buttons[5].innerHTML.trim() && buttons[2].innerHTML.trim() === buttons[8].innerHTML.trim() && buttons[2].innerHTML.trim() !== '') {
    win.classList.add('active');
    win.querySelector('span').innerHTML = buttons[2].innerHTML.trim();
    // --X
    // --X
    // --X
  } else if (buttons[0].innerHTML.trim() === buttons[4].innerHTML.trim() && buttons[0].innerHTML.trim() === buttons[8].innerHTML.trim() && buttons[0].innerHTML.trim() !== '') {
    win.classList.add('active');
    win.querySelector('span').innerHTML = buttons[0].innerHTML.trim();
    // X--
    // -X-
    // --X
  } else if (buttons[2].innerHTML.trim() === buttons[4].innerHTML.trim() && buttons[2].innerHTML.trim() === buttons[6].innerHTML.trim() && buttons[2].innerHTML.trim() !== '') {
    win.classList.add('active');
    win.querySelector('span').innerHTML = buttons[2].innerHTML.trim();
    // --X
    // -X-
    // X--
  } else {
    checkTie();
  }
};

const checkTie = () => {
  const condition =  Array.from(buttons).every((button) => {
    return button.innerHTML !== ''
  })
  if (condition) {
    tie.classList.add('active');
  }
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.innerHTML == '') {
      if (state === 1) {
        button.innerHTML = playerX;
        state = 0;
      } else if (state === 0) {
        button.innerHTML = playerO;
        state = 1;
      }
      checkWin();
    }
  })
});

resetButton.addEventListener('click', () => location.reload());

