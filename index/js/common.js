const html = document.querySelector('html');

doCalculateFontSize();

window.addEventListener('resize', function () {
    doCalculateFontSize();
});

function doCalculateFontSize(){
    docWidth = window.outerWidth;
    docFontSize = docWidth * 0.032552084;
    docFontSize = docFontSize.toFixed(1);

    html.style.fontSize = docFontSize + '%';
};