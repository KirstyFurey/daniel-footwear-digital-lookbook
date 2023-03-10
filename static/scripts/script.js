// JavaScript Document

const btns = document.getElementsByClassName('btn'); // GET ANY ELEMENT WITH A CLASS OF BTN FOR MODAL
const close = document.getElementsByClassName('close'); // GET ANY ELEMENT WITH CLASS OF CLOSE
const modals = document.getElementsByClassName('modal'); // GET ANY ELEMENT WITH CLASS OF MODAL
const body = document.querySelector("body"); //GET THE BODY ELEMENT

//OPEN AND CLOSE MULTIPLE MODALS
//WORKS BY INDEXING THE MODAL AND BTN CLASSES SO CLICKING ON THE 3RD ELEMENT WITH A BTN CLASS OPENS THE 3RD ELEMENT WITH THE MODAL CLASS
[...btns].forEach((btn, ind) => {
    btn.onclick = () => (modals[ind].style.display = 'block');
});

[...close].forEach((close, ind) => {
    close.onclick = () => (modals[ind].style.display = 'none');
});


// CLOSE MODAL ON CLICK OUTSIDE MODAL CONTENT. WORKS BY ADDING THE CLASS 'MODAL' TO THE CONTAINER ELEMENT (THAT HOLDS THE MODAL CONTENT), AND SETTING THIS TO THE FULL SIZE OF THE PAGE, SO CLICKING ANYWHERE OUTSIDE OF THE ELEMENT WITH THE MODAL CONTENT IS CLICKING ON THE ELEMENT WITH THE CLASS OF MODAL
window.onclick = (e) => {
    [...modals].forEach((modals) => {
        if (e.target == modals) {
            modals.style.display = 'none';
        }
    });
};
/*
const scroll = () => {
    if (modals.style.display === 'block') {
        body.style.overflow = 'hidden';
    }
}

setTimeout(scroll(1000));
/*
const createStyle = () => {
    styles.forEach(style => {
        const styleDiv = createElem('div', 'img-container');
        const getStyleContainer = document.getElementById('style-container');
        getStyleContainer.appendChild(styleDiv);
        const styleImage = createElem('img', 'btn');
        styleImage.classList.add('btn', 'img-style');
        styleImage.src = style.img;
        styleDiv.appendChild(styleImage);
    })
}

// for creating an element
const createElem = (tagName, className) => {
    const element = document.createElement(tagName);
    element.setAttribute('class', className);
    return element;
}

window.onload = () => {
    createStyle();
}

*/












