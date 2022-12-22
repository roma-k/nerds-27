let hiddenProdInf = document.querySelectorAll('.hidden-prod-inf');
let storeItem = document.querySelectorAll('.product-store-item');
let buttonPost = document.querySelector('.contact-red-button');
let postWindow = document.querySelector('.post-window');
buttonPost.onclick = function () {
  postWindow.classList.remove('visually-hidden');
};

let close = document.querySelector('.close');
close.onclick = function() {
  postWindow.classList.add('visually-hidden');
};

for(var i = 0; i < storeItem.length; i++) {
  storeItem[i].onmouseover = function(){
    this.children[2].classList.remove('visually-hidden');
  }
  storeItem[i].onmouseout = function(){
    this.children[2].classList.add('visually-hidden');
  }
}



