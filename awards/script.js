const container = document.querySelector('.container');
const cards = document.querySelectorAll('.card');

// Initialize card positions with spacing
function positionCards() {
    const spacing = 20; // Space between cards
    const startX = 50;  // Starting X position
    const startY = 50;  // Starting Y position
    cards.forEach((card, index) => {
        card.style.left = `${startX + (index * (card.clientWidth + spacing))}px`;
        card.style.top = `${startY}px`;
    });
}

// Function to handle the initial drop with bounce effect
function dropWithBounce() {
    cards.forEach((card) => {
        let velocityY = 2; // Initial fall speed
        const gravity = 0.4; // Gravity for fall
        let bounceCount = 0;

        const animation = setInterval(() => {
            const cardTop = parseFloat(card.style.top);
            velocityY += gravity;
            card.style.top = `${Math.min(container.clientHeight - card.clientHeight, cardTop + velocityY)}px`;

            // Check if card hits bottom and apply bounce
            if (cardTop + card.clientHeight >= container.clientHeight) {
                if (bounceCount < 2) { // Allow two bounces
                    velocityY *= -0.5; // Medium bounce effect
                    bounceCount++;
                } else {
                    clearInterval(animation);
                }
            }
        }, 16);
    });
}

// Initial positioning of cards
positionCards();

// Start initial drop after 2 seconds
setTimeout(dropWithBounce, 2000);

// Draggable functionality with throw and bounce effect
cards.forEach((card) => {
    let isDragging = false;
    let offsetX, offsetY;
    let lastMouseX, lastMouseY;
    let velocityX = 0;
    let velocityY = 0;

    card.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - card.getBoundingClientRect().left;
        offsetY = e.clientY - card.getBoundingClientRect().top;
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
        card.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const x = e.clientX - offsetX;
            const y = e.clientY - offsetY;

            // Update card position with gradual changes for smoother movement
            card.style.left = `${Math.min(container.clientWidth - card.clientWidth, Math.max(0, x))}px`;
            card.style.top = `${Math.min(container.clientHeight - card.clientHeight, Math.max(0, y))}px`;

            // Calculate velocity with reduced influence for slower movement
            velocityX = (e.clientX - lastMouseX) * 0.3;
            velocityY = (e.clientY - lastMouseY) * 0.3;
            lastMouseX = e.clientX;
            lastMouseY = e.clientY;
        }
    });

    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            card.style.cursor = 'grab';
            throwCard(card, velocityX, velocityY); // Pass velocityX and velocityY to determine throw direction
        }
    });
});

// Function to handle the throw and bounce effect
function throwCard(card, initialVelocityX, initialVelocityY) {
    let velocityX = initialVelocityX;
    let velocityY = initialVelocityY;
    const gravity = 0.4;
    const bounceDamping = 0.6;
    let bounceCount = 0;

    function moveCard() {
        velocityY += gravity; // Apply gravity to vertical velocity
        const cardLeft = parseFloat(card.style.left) || 0;
        const cardTop = parseFloat(card.style.top) || 0;

        // Update position using velocity
        card.style.left = `${Math.min(container.clientWidth - card.clientWidth, Math.max(0, cardLeft + velocityX))}px`;
        card.style.top = `${Math.min(container.clientHeight - card.clientHeight, Math.max(0, cardTop + velocityY))}px`;

        // Bounce off the right and left container edges
        if (cardLeft <= 0 || cardLeft + card.clientWidth >= container.clientWidth) {
            velocityX *= -bounceDamping; // Reverse horizontal velocity
        }

        // Bounce off the top and bottom container edges
        if (cardTop <= 0 || cardTop + card.clientHeight >= container.clientHeight) {
            velocityY *= -bounceDamping; // Reverse vertical velocity
            bounceCount++;
        }

        // Apply slight friction for a more natural slowing effect
        velocityX *= 0.98;
        velocityY *= 0.98;

        // Stop movement if velocity is very low to avoid endless small bounces
        if (Math.abs(velocityX) < 0.1 && Math.abs(velocityY) < 0.1) {
            clearInterval(animation);
        }
    }

    const animation = setInterval(moveCard, 16);
}

// Initial positioning of cards
positionCards();
