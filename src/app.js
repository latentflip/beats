import React from 'react'
import App from './components/app'
import teoria from 'teoria'

const data = {
  notes: []
};

let keysToNotes = {
  65: 'a3',
  83: 'b3',
  68: 'c4',
  70: 'd4',

  74: 'e4',
  75: 'f4',
  76: 'g4',
  186: 'a4',
};

let currentNotes = {};

document.addEventListener('keydown', (e) => {
  if (!currentNotes[e.keyCode] && keysToNotes[e.keyCode]) {
    e.preventDefault();
    currentNotes[e.keyCode] = {
      on: Date.now(),
      note: keysToNotes[e.keyCode],
      frequency: teoria.note(keysToNotes[e.keyCode]).fq()
    };
    data.notes.push(currentNotes[e.keyCode]);
  }
});

document.addEventListener('keyup', (e) => {
  if (currentNotes[e.keyCode]) {
    e.preventDefault();
    currentNotes[e.keyCode].off = Date.now();
    delete currentNotes[e.keyCode];
  }
});

window.addEventListener('blur', (e) => {
  Object.keys(currentNotes).forEach(note => {
    currentNotes[note].off = Date.now();
  });
  currentNotes = {};
});


requestAnimationFrame(function loop() {
  data.time = Date.now();
  React.render(<App data={data} />, document.body);
  requestAnimationFrame(loop);
});
