let hiddenProdInf = document.querySelectorAll('.hidden-prod-inf');
let storeItem = document.querySelectorAll('.product-store-item');
let buttonPost = document.querySelector('.contact-red-button');
let postWindow = document.querySelector('.post-window');
buttonPost.onclick = function () {
    postWindow
        .classList
        .remove('visually-hidden');
};

let close = document.querySelector('.close');
close.onclick = function () {
    postWindow
        .classList
        .add('visually-hidden');
};

for (var i = 0; i < storeItem.length; i++) {
    storeItem[i].onmouseover = function () {
        this
            .children[2]
            .classList
            .remove('visually-hidden');
    }
    storeItem[i].onmouseout = function () {
        this
            .children[2]
            .classList
            .add('visually-hidden');
    }
}

let slider = {
    margin: [
        '-1160px', '-2320px', '0'
    ],
    count: 0,
    set: function (margin) {
        console.log(document.getElementsByClassName('slide1'))
        document
            .querySelector('.slide1')
            .style
            .marginLeft = this
            .margin[this.count];
    },
    init: function () {
        this.set(this.margin[this.count]);
    },
    right: function () {
        this.count++;
        if (this.count == this.margin.length) 
            this.count = 0;
        this.init();
    }
};

window.onload = function () {
    setInterval(function () {
        slider.right();
    }, 5000);
}
