// Select all containers and their respective images
const containers = document.querySelectorAll('.cnt');

// Loop through each container and set up event listeners for each
containers.forEach(container => {
  const img = container.querySelector('img');

  // When mouse enters the container, show the image
  container.addEventListener('mouseenter', () => {
    img.style.opacity = '1';
    img.style.visibility = 'visible';
  });

  // Track mouse movements inside the container
  container.addEventListener('mousemove', (e) => {
    const containerRect = container.getBoundingClientRect();
    const mouseX = e.clientX - containerRect.left;
    const mouseY = e.clientY - containerRect.top;

    // Adjust image position based on mouse position relative to the container
    img.style.transform = `translate(${mouseX - img.width / 2}px, ${mouseY - img.height / 2}px)`; // Adjust for image's center
  });

  // When mouse leaves, hide the image (but don't reset position)
  container.addEventListener('mouseleave', () => {
    img.style.opacity = '0';
    img.style.visibility = 'hidden';
  });
});

const cntDiv = document.querySelector('.newssection');
const customCursor = document.getElementById('customCursor');

// Update custom cursor position based on mouse movement
cntDiv.addEventListener('mousemove', (e) => {
    const rect = cntDiv.getBoundingClientRect();
    customCursor.style.left = `${e.clientX - rect.left}px`;
    customCursor.style.top = `${e.clientY - rect.top}px`;
});