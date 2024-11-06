
const imageArrayForward = [
    { imagePath: './asset/ads/images/1.jpg', content: "NTUC FIRST CAMPUS", targetUrl: 'https://example.com/page1' },
    { imagePath: './asset/ads/images/2.jpg', content: "NTUC FIRST CAMPUS", targetUrl: 'https://example.com/page2' },
    { imagePath: './asset/ads/images/3.png', content: "NTUC FIRST CAMPUS", targetUrl: 'https://example.com/page3' },
    { imagePath: './asset/ads/images/4.jpg', content: "NTUC FIRST CAMPUS", targetUrl: 'https://example.com/page4' },
    { imagePath: './asset/ads/images/5.jpg', content: "NTUC FIRST CAMPUS", targetUrl: 'https://example.com/page5' },
    { imagePath: './asset/ads/images/6.jpg', content: "NTUC FIRST CAMPUS", targetUrl: 'https://example.com/page6' },
    { imagePath: './asset/ads/images/7.jpg', content: "NTUC FIRST CAMPUS", targetUrl: 'https://example.com/page7' },
    { imagePath: './asset/ads/images/8.jpg', content: "NTUC FIRST CAMPUS", targetUrl: 'https://example.com/page8' },
    { imagePath: './asset/ads/images/9.png', content: "NTUC FIRST CAMPUS", targetUrl: 'https://example.com/page9' },
    { imagePath: './asset/ads/images/10.png', content: "NTUC FIRST CAMPUS", targetUrl: 'https://example.com/page10' },
];

// Array with image paths and different URLs for right-to-left scrolling
const imageArrayBack = [
    { imagePath: './asset/ads/images/1.jpg', content: "NTUC FIRST CAMPUS", targetUrl: 'https://example.com/pageA' },
    { imagePath: './asset/ads/images/2.jpg', content: "NTUC FIRST CAMPUS", targetUrl: 'https://example.com/pageB' },
    { imagePath: './asset/ads/images/3.png', content: "NTUC FIRST CAMPUS", targetUrl: 'https://example.com/pageC' },
    { imagePath: './asset/ads/images/4.jpg', content: "NTUC FIRST CAMPUS", targetUrl: 'https://example.com/pageD' },
    { imagePath: './asset/ads/images/5.jpg', content: "NTUC FIRST CAMPUS", targetUrl: 'https://example.com/pageE' },
    { imagePath: './asset/ads/images/6.jpg', content: "NTUC FIRST CAMPUS", targetUrl: 'https://example.com/pageF' },
    { imagePath: './asset/ads/images/7.jpg', content: "NTUC FIRST CAMPUS", targetUrl: 'https://example.com/pageG' },
    { imagePath: './asset/ads/images/8.jpg', content: "NTUC FIRST CAMPUS", targetUrl: 'https://example.com/pageH' },
    { imagePath: './asset/ads/images/9.png', content: "NTUC FIRST CAMPUS", targetUrl: 'https://example.com/pageI' },
    { imagePath: './asset/ads/images/10.png', content: "NTUC FIRST CAMPUS", targetUrl: 'https://example.com/pageJ' },
];
const imageArrayForward1 = [
    { imagePath: './asset/ads/images/1.jpg', content: "NTUC FIRST CAMPUS", targetUrl: 'https://example.com/pageA' },
    { imagePath: './asset/ads/images/2.jpg', content: "NTUC FIRST CAMPUS", targetUrl: 'https://example.com/pageB' },
    { imagePath: './asset/ads/images/3.png', content: "NTUC FIRST CAMPUS", targetUrl: 'https://example.com/pageC' },
    { imagePath: './asset/ads/images/4.jpg', content: "NTUC FIRST CAMPUS", targetUrl: 'https://example.com/pageD' },
    { imagePath: './asset/ads/images/5.jpg', content: "NTUC FIRST CAMPUS", targetUrl: 'https://example.com/pageE' },
    { imagePath: './asset/ads/images/6.jpg', content: "NTUC FIRST CAMPUS", targetUrl: 'https://example.com/pageF' },
    { imagePath: './asset/ads/images/7.jpg', content: "NTUC FIRST CAMPUS", targetUrl: 'https://example.com/pageG' },
    { imagePath: './asset/ads/images/8.jpg', content: "NTUC FIRST CAMPUS", targetUrl: 'https://example.com/pageH' },
    { imagePath: './asset/ads/images/9.png', content: "NTUC FIRST CAMPUS", targetUrl: 'https://example.com/pageI' },
    { imagePath: './asset/ads/images/10.png', content: "NTUC FIRST CAMPUS", targetUrl: 'https://example.com/pageJ' },
];
const scrollingWrapperForward = document.querySelector('.scrolling-wrapper-forward');
const scrollingWrapperForward1 = document.querySelector('.scrolling-wrapper-forward-1');
const scrollingWrapperBack = document.querySelector('.scrolling-wrapper-back');

// Function to create and append images dynamically
function loadImages(wrapper, imageArray) {
    imageArray.forEach((item, index) => {
        const container = document.createElement('div');
        container.classList.add('image-container');

        const img = document.createElement('img');
        img.src = item.imagePath;
        img.alt = 'Running Image';

        const arrow = document.createElement('span');
        arrow.classList.add('arrow');
        arrow.innerHTML = item?.content || "";
        arrow.onclick = () => {
            window.open(item.targetUrl, '_blank');  // Open URL in a new tab
        };

        container.appendChild(img);
        container.appendChild(arrow);
        wrapper.appendChild(container);
    });
}

// here all function called twise to avoid the image cycle start and end with all images
loadImages(scrollingWrapperBack, imageArrayBack);
loadImages(scrollingWrapperForward, imageArrayForward);
loadImages(scrollingWrapperForward1, imageArrayForward1);

loadImages(scrollingWrapperBack, imageArrayBack);
loadImages(scrollingWrapperForward, imageArrayForward);
loadImages(scrollingWrapperForward1, imageArrayForward1);
