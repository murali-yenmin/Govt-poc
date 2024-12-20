const boxData = [
    { title: 'SG Independent AOTY', year: '2023' },
    { title: 'SEA Experiential AOTY', year: '2024' },
    { title: 'Independent AOTY & Grand Prix', year: '2025' },
    { title: 'SG Independent AOTY & SEA Experiential AOTY', year: '2026' },
    { title: 'World’s Leading Independent Agency', year: '2027' },
    { title: 'World’s Leading Independent Agency', year: '2028' }
];

if (boxData) {
    const { Engine, Render, Runner, Bodies, World, Mouse, MouseConstraint, Events } = Matter;

    const engine = Engine.create();
    const world = engine.world;
    world.gravity.y = 0.5;

    const render = Render.create({
        element: document.getElementById('awardcontainer'),
        engine: engine,
        options: {
            width: window.innerWidth,
            height: window.innerHeight,
            wireframes: false,
            background: null
        }
    });
    Render.run(render);

    const runner = Runner.create();
    Runner.run(runner, engine);

    const wallThickness = 50;
    const width = window.innerWidth;
    const height = window.innerHeight;

    const walls = [
        Bodies.rectangle(width / 2, -wallThickness / 2, width, wallThickness, { isStatic: true }),
        Bodies.rectangle(width / 2, height + wallThickness / 2, width, wallThickness, { isStatic: true }),
        Bodies.rectangle(-wallThickness / 2, height / 2, wallThickness, height, { isStatic: true }),
        Bodies.rectangle(width + wallThickness / 2, height / 2, wallThickness, height, { isStatic: true })
    ];
    World.add(world, walls);

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

    let boxWidth = 294;
    let fontTitle = '700 22px Lora';
    let fontYear = '700 59px Oswald';
    let padding = 60;
    let lineHeight = 30;

    function setResponsiveSizes() {
        const screenWidth = window.innerWidth;

        if (screenWidth < 420) {
            boxWidth = 140;
            fontTitle = '700 14px Lora';
            fontYear = '700 30px Oswald';
            padding = 20;
            lineHeight = 18;
        } else if (screenWidth < 560) {
            boxWidth = 150;
            fontTitle = '700 16px Lora';
            fontYear = '700 35px Oswald';
            padding = 20;
            lineHeight = 20;
        } else if (screenWidth < 768) {
            boxWidth = 220;
            fontTitle = '700 18px Lora';
            fontYear = '700 24px Oswald';
            padding = 40;
            lineHeight = 24;
        } else if (screenWidth < 1024) {
            boxWidth = 240;
            fontTitle = '700 22px Lora';
            fontYear = '700 59px Oswald';
            padding = 40;
            lineHeight = 30;
        } else if (screenWidth < 1560) {
            boxWidth = 260;
            fontTitle = '700 22px Lora';
            fontYear = '700 59px Oswald';
            padding = 40;
            lineHeight = 30;
        } else {
            boxWidth = 294;
            fontTitle = '700 22px Lora';
            fontYear = '700 59px Oswald';
            padding = 60;
            lineHeight = 30;
        }
    }

    setResponsiveSizes();
    window.addEventListener('resize', setResponsiveSizes);

    const numBoxes = boxData.length;
    const startX = window.innerWidth / 2 - (numBoxes * boxWidth) / 2;
    let startFalling = false;

    const section = document.getElementById('awardcontainer');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.7 && !startFalling) {
                startFalling = true;
                createBoxes();
            }
        });
    }, { threshold: 0.7 });

    observer.observe(section);

    const centerX = window.innerWidth / 2;
    const startY = -boxWidth / 2; // Start position above the screen

    // Function to create boxes that fall from the center
    function createBoxes() {
        for (let i = 0; i < numBoxes; i++) {
            const x = centerX;
            const y = startY;

            const angle = Math.random() * 2 * Math.PI;
            const angularVelocity = Math.random() * 0.02 * (Math.random() < 0.5 ? -1 : 1);

            const boxBody = Bodies.rectangle(x, y, boxWidth, boxWidth, {
                restitution: 0.5,
                angle: angle
            });
            boxBody.angularVelocity = angularVelocity;

            const horizontalForce = (Math.random() - 0.5) * 0.02;
            Matter.Body.applyForce(boxBody, { x: boxBody.position.x, y: boxBody.position.y }, { x: horizontalForce, y: 0.005 });
            World.add(world, boxBody);

            setTimeout(() => {
                Matter.Body.applyForce(boxBody, { x: boxBody.position.x, y: boxBody.position.y }, { x: 0, y: 0.02 });
            }, i * 200);
        }
    }

    Matter.Events.on(engine, 'beforeUpdate', () => {
        world.bodies.forEach(body => {
            if (!body.isStatic && body.velocity.y === 0) {
                Matter.Body.setVelocity(body, { x: 0, y: 0.1 });
            }
        });
    });

    const canvas = render.canvas;
    const ctx = canvas.getContext('2d');

    Events.on(engine, 'afterUpdate', () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < numBoxes; i++) {
            const boxBody = world.bodies[i + 4];
            const boxHeight = boxWidth;
            if (!boxBody) {
                break;
            }

            if (boxBody.angularVelocity !== 0) {
                boxBody.angularVelocity *= 0.99;
            }

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

            ctx.save();
            ctx.translate(boxBody.position.x, boxBody.position.y);
            ctx.rotate(boxBody.angle);

            ctx.fillStyle = '#ff5000';
            ctx.fillRect(-boxWidth / 2, -boxHeight / 2, boxWidth, boxHeight);

            ctx.font = fontTitle;
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

            ctx.font = fontYear;
            const yearX = -boxWidth / 2 + padding;
            const yearY = boxHeight / 2 - padding;
            ctx.fillText(`${boxData[i].year}`, yearX, yearY);

            ctx.restore();
        }
    });

    // Touch and mouse scroll handling
    let touchStartY = 0;
    let activeBox = null;

    // Handle touch start (for mobile devices)
    canvas.addEventListener('touchstart', (event) => {
        const touchPos = getTouchPosition(event);
        activeBox = getTouchedBox(touchPos);

        if (!activeBox) {
            touchStartY = touchPos.y;
        }
    });

    // Handle touch move (for mobile devices)
    canvas.addEventListener('touchmove', (event) => {
        const touchPos = getTouchPosition(event);

        if (activeBox) {
            // Apply force to the touched box (simulate throwing)
            const forceX = (touchPos.x - activeBox.position.x) * 0.05;
            const forceY = (touchPos.y - activeBox.position.y) * 0.05;
            Matter.Body.applyForce(activeBox, activeBox.position, { x: forceX, y: forceY });
            event.preventDefault(); // Prevent scrolling if a box is touched
        } else {
            const scrollDistance = touchStartY - touchPos.y;
            if (Math.abs(scrollDistance) > 10) {
                window.scrollBy(0, scrollDistance);
                touchStartY = touchPos.y;
                event.preventDefault();
            }
        }
    });

    // Function to get the position of the touch event
    function getTouchPosition(event) {
        return {
            x: event.touches[0].clientX,
            y: event.touches[0].clientY
        };
    }

    // Function to check if the touch position intersects with a box
    function getTouchedBox(touchPos) {
        for (let i = 0; i < numBoxes; i++) {
            const boxBody = world.bodies[i + 4];
            const distance = Math.sqrt(
                Math.pow(touchPos.x - boxBody.position.x, 2) +
                Math.pow(touchPos.y - boxBody.position.y, 2)
            );

            if (distance < boxWidth / 2) {
                return boxBody;
            }
        }
        return null;
    }
    render.canvas.addEventListener('wheel', (event) => {
        event.stopPropagation(); // Stops propagation but allows scroll
        // Do NOT call preventDefault to allow scroll
    }, { passive: true });
}
