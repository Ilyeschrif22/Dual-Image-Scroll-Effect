const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const maxScroll = window.innerHeight * 0.5;

window.addEventListener('scroll', () => {
    let scrollVal = window.scrollY;

    if (scrollVal > maxScroll) scrollVal = maxScroll;
    if (scrollVal < 0) scrollVal = 0;

    const progress = scrollVal / maxScroll;

    img1.style.width = `${100 - progress * 60}%`;
    img1.style.height = `${100 - progress * 50}%`;
    img2.style.width = `${progress * 60}%`;
    img2.style.height = `${progress * 50}%`;
    
});
