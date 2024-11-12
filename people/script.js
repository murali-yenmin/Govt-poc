const scrollContainer = document.getElementById('peoplecard');
const nextSection = document.getElementById('next-section');
const prevSection = document.getElementById('prev-section');

let scrollPosition = 0; // Track the current horizontal scroll position
const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

// Function to snap the "people" section to fully fit the viewport
function snapPeopleSectionIntoView() {
    const rect = scrollContainer.getBoundingClientRect();

    // Check if any part of the "people" section is visible but not fully aligned
    if (rect.top < window.innerHeight && rect.bottom > 0) {
        gsap.to(window, {
            scrollTo: scrollContainer,
            duration: 0.8,
            ease: "power2.out"
        });
    }
}

// Function to update horizontal scroll position within the "people" section
function updateScrollPosition() {
    gsap.to(scrollContainer, {
        scrollLeft: scrollPosition,
        duration: 0.6,
        ease: "power2.out"
    });

    // Check if horizontal scroll reaches the end or beginning
    if (scrollPosition === maxScroll && isElementInViewport(scrollContainer)) {
        moveToNextSection();
    } else if (scrollPosition === 0 && isElementInViewport(scrollContainer)) {
        moveToPrevSection();
    }
}

// Function to scroll to the next section
function moveToNextSection() {
    gsap.to(window, {
        scrollTo: nextSection,
        duration: 1,
        ease: "power2.out"
    });
}

// Function to scroll to the previous section
function moveToPrevSection() {
    gsap.to(window, {
        scrollTo: prevSection,
        duration: 1,
        ease: "power2.out"
    });
}

// Check if element is fully visible in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// Event listener to convert vertical scroll to horizontal scroll within "people" section
scrollContainer.addEventListener('wheel', (e) => {
    const isAtStart = scrollPosition === 0;
    const isAtEnd = scrollPosition === maxScroll;

    if (!(isAtStart && e.deltaY < 0) && !(isAtEnd && e.deltaY > 0)) {
        e.preventDefault();

        // Adjust scroll position based on wheel direction
        scrollPosition += e.deltaY > 0 ? 50 : -50;

        // Ensure scroll position stays within bounds
        scrollPosition = Math.max(0, Math.min(scrollPosition, maxScroll));

        // Update the scroll position smoothly
        updateScrollPosition();
    }
});

// Window scroll event listener to snap "people" section into view if partially visible
window.addEventListener('scroll', () => {
    snapPeopleSectionIntoView();
});