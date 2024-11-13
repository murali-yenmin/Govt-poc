// Import Matter.js components
const { Engine, Render, Runner, Bodies, World, Mouse, MouseConstraint, Events } = Matter;

// Create the engine and world
const engine = Engine.create();
const world = engine.world;
world.gravity.y = 0.5; // Base gravity (full effect is applied gradually)

// Create a renderer with full-page dimensions
const render = Render.create({
    element: document.getElementById('container'),
    engine: engine,
    options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: null
    }
});
Render.run(render);

// Create runner to update the engine
const runner = Runner.create();
Runner.run(runner, engine);

// Add walls to create closed boundaries
const wallThickness = 50;
const width = window.innerWidth;
const height = window.innerHeight;

const walls = [
    Bodies.rectangle(width / 2, -wallThickness / 2, width, wallThickness, { isStatic: true }), // Top
    Bodies.rectangle(width / 2, height + wallThickness / 2, width, wallThickness, { isStatic: true }), // Bottom
    Bodies.rectangle(-wallThickness / 2, height / 2, wallThickness, height, { isStatic: true }), // Left
    Bodies.rectangle(width + wallThickness / 2, height / 2, wallThickness, height, { isStatic: true }) // Right
];
World.add(world, walls);

// Set up mouse for dragging
const mouse = Mouse.create(render.canvas);
const mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
        stiffness: 0.9,
        render: { visible: false }
    }
});
World.add(world, mouseConstraint);
render.mouse = mouse;

// Define an array of titles, years, and additional text for each box
const boxData = [
    { title: 'SG Independent AOTY', year: '2023' },
    { title: 'SEA Experiential AOTY', year: '2024' },
    { title: 'Independent AOTY & Grand Prix', year: '2025' },
    { title: 'SG Independent AOTY & SEA Experiential AOTY', year: '2026' },
    { title: 'World’s Leading Independent Agency', year: '2027' },
    { title: 'World’s Leading Independent Agency', year: '2028' }
];

const numBoxes = boxData.length;
const boxWidth = 264;
// const startX = window.innerWidth / 2 - (numBoxes * boxWidth) / 2;

// Flag to track whether boxes should start falling
let startFalling = false;

// Create Intersection Observer to detect when section is 70% visible
const section = document.getElementById('container');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.1 && !startFalling) {
            startFalling = true;
            createBoxes(); // Create the falling boxes when the section is 70% visible
        }
    });
}, {
    threshold: 0.7 // 70% visibility
});

observer.observe(section);

const centerX = window.innerWidth / 2;
const startY = -boxWidth / 2; // Start position above the screen

// Function to create boxes that fall from the center
function createBoxes() {
    for (let i = 0; i < numBoxes; i++) {
        // All boxes start from the center of the screen
        const x = centerX;
        const y = startY;

        // Set a random initial angle for rotation and random angular velocity
        const angle = Math.random() * 2 * Math.PI;
        const angularVelocity = Math.random() * 0.02 * (Math.random() < 0.5 ? -1 : 1);

        // Create the box body
        const boxBody = Bodies.rectangle(x, y, boxWidth, boxWidth, { 
            restitution: 0.5,
            angle: angle
        });
        boxBody.angularVelocity = angularVelocity;

        // Apply a slight horizontal force to spread boxes from the center as they fall
        const horizontalForce = (Math.random() - 0.5) * 0.02; // Small random force left or right
        Matter.Body.applyForce(boxBody, { x: boxBody.position.x, y: boxBody.position.y }, { x: horizontalForce, y: 0.005 });
        World.add(world, boxBody);

        // Gradually increase gravity effect after a slight delay for staggered descent
        setTimeout(() => {
            Matter.Body.applyForce(boxBody, { x: boxBody.position.x, y: boxBody.position.y }, { x: 0, y: 0.02 });
        }, i * 200); // Offset delay for each box
    }
}




// Ensures all boxes fall without sticking by providing small forces and ensuring no zero velocity
Matter.Events.on(engine, 'beforeUpdate', () => {
    world.bodies.forEach(body => {
        if (!body.isStatic && body.velocity.y === 0) {
            Matter.Body.setVelocity(body, { x: 0, y: 0.1 });
        }
    });
});


// Get the canvas context for rendering text
const canvas = render.canvas;
const ctx = canvas.getContext('2d');

// Define padding for text inside the box
const padding = 40;
const lineHeight = 30;

// Render loop to update the canvas with text
Events.on(engine, 'afterUpdate', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < numBoxes; i++) {
        const boxBody = world.bodies[i + 4]; // Adjust the body index
        const boxHeight = boxWidth;
        if (!boxBody) {
            break;
        }

        // Smoothly reduce angular velocity over time to simulate deceleration
        if (boxBody.angularVelocity !== 0) {
            boxBody.angularVelocity *= 0.99; // Slow down by 1% each frame
        }

        // Check boundaries and reposition if outside
        const boundaryOffset = boxWidth / 2;
        if (boxBody.position.x < boundaryOffset) {
            Matter.Body.setPosition(boxBody, { x: boundaryOffset, y: boxBody.position.y });
        } else if (boxBody.position.x > width - boundaryOffset) {
            Matter.Body.setPosition(boxBody, { x: width - boundaryOffset, y: boxBody.position.y });
        }
        
        if (boxBody.position.y < boundaryOffset) {
            Matter.Body.setPosition(boxBody, { x: boxBody.position.x, y: boundaryOffset });
        } else if (boxBody.position.y > height - boundaryOffset) {
            Matter.Body.setPosition(boxBody, { x: boxBody.position.x, y: height - boundaryOffset });
        }

        // Draw the rotating box background
        ctx.save(); // Save the current canvas state
        ctx.translate(boxBody.position.x, boxBody.position.y); // Move canvas to box position
        ctx.rotate(boxBody.angle); // Rotate canvas to match box angle

        // Draw the box with rotation
        ctx.fillStyle = '#ff5000';
        ctx.fillRect(-boxWidth / 2, -boxHeight / 2, boxWidth, boxHeight);

        // Title
        ctx.font = '700 18px Lora';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'left';

        const titleX = -boxWidth / 2 + padding;
        const titleY = -boxHeight / 2 + padding;

        const titleWidth = boxWidth * 0.7;
        const titleTextWidth = ctx.measureText(boxData[i].title).width;

        if (titleTextWidth > titleWidth) {
            const words = boxData[i].title.split(' ');
            let currentLine = '';
            let lines = [];
            for (const word of words) {
                const testLine = currentLine + word + ' ';
                const testWidth = ctx.measureText(testLine).width;
                if (testWidth > titleWidth && currentLine.length > 0) {
                    lines.push(currentLine);
                    currentLine = word + ' ';
                } else {
                    currentLine = testLine;
                }
            }
            lines.push(currentLine);

            lines.forEach((line, index) => {
                ctx.fillText(line, titleX, titleY + index * lineHeight);
            });
        } else {
            ctx.fillText(boxData[i].title, titleX, titleY);
        }

        // Year
        ctx.font = '700 49.19px Oswald';
        const yearX = -boxWidth / 2 + padding;
        const yearY = boxHeight / 2 - padding;
        ctx.fillText(`${boxData[i].year}`, yearX, yearY);

        ctx.restore(); // Restore the canvas state
    }
});
// Allow scrolling on the canvas area
// Allow scrolling in the canvas area by stopping the event from interfering with page scrolling
// Allow scrolling on the canvas area for mouse wheel and touch events

// Mouse wheel scroll handling
// Allow scrolling on the canvas area for mouse wheel, mobile touch, and laptop touchpad

// Mouse wheel scroll handling
render.canvas.addEventListener('wheel', (event) => {
    event.stopPropagation(); // Prevent the default behavior to allow page scrolling
}, { passive: true });

// Mobile touch scroll handling
render.canvas.addEventListener('touchstart', (event) => {
    event.stopPropagation(); // Prevent touch event from blocking scrolling
}, { passive: true });

render.canvas.addEventListener('touchmove', (event) => {
    event.stopPropagation(); // Prevent touchmove from blocking scroll
}, { passive: true });

// Laptop touchpad and other pointer devices (e.g., stylus, touchscreen)
render.canvas.addEventListener('pointerdown', (event) => {
    event.stopPropagation(); // Prevent pointer down event from blocking scrolling
}, { passive: true });

render.canvas.addEventListener('pointermove', (event) => {
    event.stopPropagation(); // Prevent pointer move event from blocking scrolling
}, { passive: true });

render.canvas.addEventListener('pointerup', (event) => {
    event.stopPropagation(); // Prevent pointer up event from blocking scrolling
}, { passive: true });
