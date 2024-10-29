const container = document.querySelector('.container');
const cards = document.querySelectorAll('.card');
let gravity = 2;
let bounceFactor = 0.6;
let cardPositions = [];
let interval;

cards.forEach((card, index) => {
  // Position cards in a row initially
  card.style.left = `${index * 110}px`;
  card.style.top = `10px`;

  // Track card positions
  cardPositions[index] = { x: index * 110, y: 10, vy: 0, moving: false };

  // Set drag events
  card.addEventListener('mousedown', (e) => dragStart(e, index));
  document.addEventListener('mouseup', dragEnd);
});

// Gravity effect after 2 seconds
setTimeout(() => {
  interval = setInterval(applyGravity, 20);
}, 2000);

function applyGravity() {
  cards.forEach((card, index) => {
    const pos = cardPositions[index];

    // Apply gravity if not dragging
    if (!pos.moving) {
      pos.vy += gravity;
      pos.y += pos.vy;

      // Detect collision with the bottom of the container
      if (pos.y + card.clientHeight >= container.clientHeight) {
        pos.y = container.clientHeight - card.clientHeight;
        pos.vy *= -bounceFactor; // Bounce effect
      }

      // Update card position
      card.style.top = `${pos.y}px`;
    }
  });
}

function dragStart(e, index) {
  const pos = cardPositions[index];
  pos.moving = true;

  let offsetX = e.offsetX;
  let offsetY = e.offsetY;

  function onMouseMove(event) {
    pos.x = event.pageX - container.offsetLeft - offsetX;
    pos.y = event.pageY - container.offsetTop - offsetY;
    cardPositions[index] = pos;

    cards[index].style.left = `${pos.x}px`;
    cards[index].style.top = `${pos.y}px`;
  }

  document.addEventListener('mousemove', onMouseMove);

  function stopDrag() {
    pos.moving = false;
    pos.vy = 0;  // Reset velocity after drag
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', stopDrag);
  }

  document.addEventListener('mouseup', stopDrag);
}

function dragEnd() {
  // Re-enable gravity effect after dragging
  cards.forEach((card, index) => {
    const pos = cardPositions[index];
    pos.moving = false;
  });
}
