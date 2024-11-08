const containers = document.querySelectorAll('.cnt');
const customCursor = document.getElementById('customCursor');

containers.forEach(container => {
  const img = container.querySelector('img');

  container.addEventListener('mouseenter', (e) => {
    img.style.opacity = '1';
    img.style.visibility = 'visible';
    customCursor.style.visibility = 'hidden';

    const containerRect = container.getBoundingClientRect();
    img.style.left = `${e.clientX - containerRect.left}px`;
    img.style.top = `${e.clientY - containerRect.top}px`;
  });

  container.addEventListener('mousemove', (e) => {
    const containerRect = container.getBoundingClientRect();
    img.style.left = `${e.clientX - containerRect.left}px`;
    img.style.top = `${e.clientY - containerRect.top}px`;
  });

  container.addEventListener('mouseleave', () => {
    img.style.opacity = '0';
    img.style.visibility = 'hidden';
    customCursor.style.visibility = 'visible';
  });
});

// Update custom cursor position in the main news section
const cntDiv = document.querySelector('.newssection');
cntDiv.addEventListener('mousemove', (e) => {
  const rect = cntDiv.getBoundingClientRect();
  customCursor.style.left = `${e.clientX - rect.left}px`;
  customCursor.style.top = `${e.clientY - rect.top}px`;
});
