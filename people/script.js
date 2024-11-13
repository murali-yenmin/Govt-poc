// const scrollContainer = document.getElementById('peoplecard');
// const scrollIndicator = document.getElementById('scroll-indicator');
// const scrollBarTrack = document.querySelector('.scroll-bar-track');
// const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
// const nextSection = document.getElementById('next-section');
// const prevSection = document.getElementById('prev-section');

// let scrollPosition = 0; // Track the current horizontal scroll position

// // Function to update the scroll position and apply smooth animation using GSAP
// function updateScrollPosition() {
//     // Apply smooth horizontal scroll to the container using GSAP
//     gsap.to(scrollContainer, {
//         scrollLeft: scrollPosition,
//         duration: 0.6,  // Adjust duration for smoother effect if desired
//         ease: "power2.out"
//     });
    
//     // Calculate the position of the scroll indicator based on the scroll position
//     const maxIndicatorPosition = scrollBarTrack.offsetWidth - scrollIndicator.offsetWidth;
//     const indicatorPosition = (scrollPosition / maxScroll) * maxIndicatorPosition;

//     // Update the scroll indicator's position
//     scrollIndicator.style.transform = `translateX(${indicatorPosition}px)`;

//     // Check if the scroll has reached the end (max scroll position)
//     if (scrollPosition === maxScroll) {
//         // Move to the next section smoothly
//         moveToNextSection();
//     }

//     // Check if the scroll has reached the beginning (scroll position 0)
//     if (scrollPosition === 0) {
//         // Move to the previous section smoothly
//         moveToPrevSection();
//     }
// }

// // Function to scroll to the next section
// function moveToNextSection() {
//     gsap.to(window, {
//         scrollTo: nextSection,
//         duration: 1,  // Duration for the scroll transition
//         ease: "power2.out"
//     });
// }

// // Function to scroll to the previous section
// function moveToPrevSection() {
//     gsap.to(window, {
//         scrollTo: prevSection,
//         duration: 1,  // Duration for the scroll transition
//         ease: "power2.out"
//     });
// }

// // Event listener to convert vertical scroll to horizontal scroll for cards
// scrollContainer.addEventListener('wheel', (e) => {
//     const isAtStart = scrollPosition === 0;
//     const isAtEnd = scrollPosition === maxScroll;

//     if (!(isAtStart && e.deltaY < 0) && !(isAtEnd && e.deltaY > 0)) {
//         e.preventDefault(); // Prevent default vertical scrolling behavior only within bounds

//         // Adjust scroll position based on wheel direction (up or down)
//         scrollPosition += e.deltaY > 0 ? 50 : -50;

//         // Ensure scroll position stays within bounds
//         scrollPosition = Math.max(0, Math.min(scrollPosition, maxScroll));

//         // Update the scroll position and scroll indicator smoothly
//         updateScrollPosition();
//     }
// });
