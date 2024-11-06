// Import Matter.js components
const { Engine, Render, Runner, Bodies, World, Mouse, MouseConstraint, Events } = Matter;

// Create the engine and world
const engine = Engine.create();
const world = engine.world;
world.gravity.y = 0.5;

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
const boxWidth = 294;
const startX = window.innerWidth / 2 - (numBoxes * boxWidth) / 2;

for (let i = 0; i < numBoxes; i++) {
    const x = startX + i * boxWidth;
    const y = 0;

    // Set a random initial angle between 0 and 2π
    const angle = Math.random() * 2 * Math.PI;
    
    // Random angular velocity for clockwise or counterclockwise rotation
    const angularVelocity = Math.random() * 0.02 * (Math.random() < 0.5 ? -1 : 1);
    
    const boxBody = Bodies.rectangle(x, y, boxWidth, boxWidth, { 
        restitution: 0.5,
        angle: angle // Set the initial angle
    });
    boxBody.angularVelocity = angularVelocity; // Set initial angular velocity
    World.add(world, boxBody);
}

// Get the canvas context for rendering text
const canvas = render.canvas;
const ctx = canvas.getContext('2d');

// Define padding for text inside the box
const padding =60;
const lineHeight = 30;

// Render loop to update the canvas with text
Events.on(engine, 'afterUpdate', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < numBoxes; i++) {
        const boxBody = world.bodies[i + 4];
        const boxHeight = boxWidth;
        const backgroundX = boxBody.position.x - boxWidth / 2;
        const backgroundY = boxBody.position.y - boxHeight / 2;

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
        ctx.font = '700 23px Lora';
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
        ctx.font = '700 59.19px Oswald';
        const yearX = -boxWidth / 2 + padding;
        const yearY = boxHeight / 2 - padding;
        ctx.fillText(`${boxData[i].year}`, yearX, yearY);

        ctx.restore(); // Restore the canvas state
    }
});