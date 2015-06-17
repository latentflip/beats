import React from 'react'
import App from './components/app'

const data = {
  notes: []
};

let currentNotes = {};

document.addEventListener('keydown', (e) => {
  e.preventDefault();
  if (!currentNotes[e.keyCode]) {
    currentNotes[e.keyCode] = { on: Date.now(), index: e.keyCode };
    data.notes.push(currentNotes[e.keyCode]);
  }
});

document.addEventListener('keyup', (e) => {
  e.preventDefault();
  if (currentNotes[e.keyCode]) {
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
