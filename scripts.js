// Select all buttons on the page
var buttons = document.querySelectorAll('.cta-btn');

// Loop through each button
for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];

    // Modify the button's style
    button.style.position = 'relative';
    button.style.padding = '9px';
    button.style.backgroundColor = '#e62429';
    button.style.border = 'none';
    button.style.borderRadius = '50px';
    button.style.color = 'white';
    button.style.cursor = 'pointer';

    button.onmouseover = function() {
        this.style.backgroundColor = '#9e0113'; // Darker red
    };
    button.onmouseout = function() {
        this.style.backgroundColor = '#e62429'; // Original red
    };
}


// Changing the Marvel Logo at the top of the page
var oldSvg = document.querySelector('.mvl-animated-logo');

var img = document.createElement('img');

img.src =  chrome.runtime.getURL("images/old_marvel.png");

oldSvg.parentNode.replaceChild(img, oldSvg);


// Changing the background color of the page to beige
function toggleBeigeBackgroundColor() {
    var elements = document.querySelectorAll('.tabs__btns, .tabs__component, .tabs__component:before, .tabs__container, .sets__slider__container, .feed, .mvl-card--feed, .rail-featured, .section__color__light, body');
    elements.forEach(function(element) {
        if (!element.dataset.originalBackgroundBeige) {
            element.dataset.originalBackgroundBeige = element.style.background;
            element.style.background = '#f5f5dc';
        } else {
            element.style.background = element.dataset.originalBackgroundBeige;
            delete element.dataset.originalBackgroundBeige;
        }
    });
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'toggleBeige') {
        toggleBeigeBackgroundColor();
    }
});

// Changing the background color of the page to dark red
function toggleDarkRedBackgroundColor() {
    var elements = document.querySelectorAll('.tabs__btns, .tabs__component, .tabs__component:before, .tabs__container, .sets__slider__container, .feed, .mvl-card--feed, .rail-featured, .section__color__light, body');
    elements.forEach(function(element) {
        if (!element.dataset.originalBackgroundDarkRed) {
            element.dataset.originalBackgroundDarkRed = element.style.background;
            element.style.background = '#8b0000'; // Dark red
        } else {
            element.style.background = element.dataset.originalBackgroundDarkRed;
            delete element.dataset.originalBackgroundDarkRed;
        }
    });
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'toggleDarkRed') {
        toggleDarkRedBackgroundColor();
    }
});

// Changing the background color of the page to yellow
function toggleYellowBackgroundColor() {
    var elements = document.querySelectorAll('.tabs__btns, .tabs__component, .tabs__component:before, .tabs__container, .sets__slider__container, .feed, .mvl-card--feed, .rail-featured, .section__color__light, body');
    elements.forEach(function(element) {
        if (!element.dataset.originalBackgroundYellow) {
            element.dataset.originalBackgroundYellow = element.style.background;
            element.style.background = '#f6db35'; // Yellow
        } else {
            element.style.background = element.dataset.originalBackgroundYellow;
            delete element.dataset.originalBackgroundYellow;
        }
    });
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'toggleYellow') {
        toggleYellowBackgroundColor();
    }
});

// Changing the background color of the page to blue
function toggleBlueBackgroundColor() {
    var elements = document.querySelectorAll('.tabs__btns, .tabs__component, .tabs__component:before, .tabs__container, .sets__slider__container, .feed, .mvl-card--feed, .rail-featured, .section__color__light, body');
    elements.forEach(function(element) {
        if (!element.dataset.originalBackgroundBlue) {
            element.dataset.originalBackgroundBlue = element.style.background;
            element.style.background = '#4c94f6'; // Blue
        } else {
            element.style.background = element.dataset.originalBackgroundBlue;
            delete element.dataset.originalBackgroundBlue;
        }
    });
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'toggleBlue') {
        toggleBlueBackgroundColor();
    }
});

// Changing the background color of the page to red
function toggleRedBackgroundColor() {
    var elements = document.querySelectorAll('.tabs__btns, .tabs__component, .tabs__component:before, .tabs__container, .sets__slider__container, .feed, .mvl-card--feed, .rail-featured, .section__color__light, body');
    elements.forEach(function(element) {
        if (!element.dataset.originalBackgroundRed) {
            element.dataset.originalBackgroundRed = element.style.background;
            element.style.background = '#ee5454'; // Red
        } else {
            element.style.background = element.dataset.originalBackgroundRed;
            delete element.dataset.originalBackgroundRed;
        }
    });
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'toggleRed') {
        toggleRedBackgroundColor();
    }
});