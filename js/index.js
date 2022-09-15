const ALLIMGS = document.querySelectorAll('img')
ALLIMGS.forEach(IMG => {
  IMG.setAttribute('draggable', false)
});


let buttonOpenNav = document.querySelector('.open-nav-btn')
let nav = document.querySelector('nav')
let blackBackgroundAtOpeningNav = document.querySelector('#black-background')

let carouselButtons = document.querySelectorAll('carousel-btn')

buttonOpenNav.addEventListener('click', ()=>{

    if(buttonOpenNav.dataset.navBtn === "false"){

        nav.dataset.navActive = "true"
        blackBackgroundAtOpeningNav.dataset.blackBackgroundActive = "true"
        buttonOpenNav.dataset.navBtn = "true"

    }
    else{

        nav.dataset.navActive = "false"
        blackBackgroundAtOpeningNav.dataset.blackBackgroundActive = "false"
        buttonOpenNav.dataset.navBtn = "false"

    }

})

const carouselContainer1 = document.querySelector('.carousel-container1')

blackBackgroundAtOpeningNav.addEventListener('click', ()=>{

  let screenSize = window.innerWidth

  if(screenSize >= 1100){

    blackBackgroundAtOpeningNav.dataset.blackBackgroundActive = "false"
    carouselContainer1.style.cssText = "display: none"
  }
  else{

    nav.dataset.navActive = "false"
    blackBackgroundAtOpeningNav.dataset.blackBackgroundActive = "false"
    buttonOpenNav.dataset.navBtn = "false"
  }

})


const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {

  button.addEventListener("click", () => {

    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")
    const activeSlide = slides.querySelector("[data-active]")

    const carouselImgButtons1Div = document.querySelector('.carousel-images--1')
    const activeImgButton1 = carouselImgButtons1Div.querySelector('[data-active-img-select]')

    let newIndex = [...slides.children].indexOf(activeSlide) + offset

    if (newIndex < 0){ 
      newIndex = slides.children.length - 1
    }
    else if (newIndex >= slides.children.length) {
      newIndex = 0
    }

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active

    delete activeImgButton1.dataset.activeImgSelect
    carouselImgButtons1Div.children[newIndex].dataset.activeImgSelect = true
  })
})

const openCartListButton = document.querySelector('.cart-icon')
const cartWindow = document.querySelector('.cart')
const cartNotification = document.querySelector('.get-cart-icon-pseudoelement')


openCartListButton.addEventListener('click', () => {

  if(openCartListButton.dataset.cartActive === "true"){

    cartWindow.dataset.cartListActive = "false"
    cartWindow.setAttribute('aria-hidden', 'true')
    delete openCartListButton.dataset.cartActive
    delete cartNotification.dataset.cartIconNotify
  }
  else{ 

    cartWindow.dataset.cartListActive = "true"
    cartWindow.ariaHidden = "true"
    cartWindow.setAttribute('aria-hidden', 'false')
    openCartListButton.dataset.cartActive = "true"
    delete cartNotification.dataset.cartIconNotify
  }

})

const carouselImgButtons2 = document.querySelectorAll('.carousel-images__img--2')

carouselImgButtons2.forEach(imgButton => {
  
  imgButton.addEventListener('click', () => {

    const carouselImgButtons2Div = document.querySelector('.carousel-images--2')
    const activeImgButton2 = carouselImgButtons2Div.querySelector('[data-active-img-select]')

    const slidesUl = document.querySelector('[data-slides-2]')
    const slides = document.querySelectorAll('.slide--2')
    const activeSlide = slidesUl.querySelector('[data-active]')

    switch(imgButton.dataset.img){

      case "1": 

      delete activeSlide.dataset.active
      slides[0].dataset.active = true

      delete activeImgButton2.dataset.activeImgSelect
      carouselImgButtons2[0].dataset.activeImgSelect = true

      break;

      case "2": 
      
      delete activeSlide.dataset.active
      slides[1].dataset.active = true

      delete activeImgButton2.dataset.activeImgSelect
      carouselImgButtons2[1].dataset.activeImgSelect = true

      break;

      case "3": 

      delete activeSlide.dataset.active
      slides[2].dataset.active = true

      delete activeImgButton2.dataset.activeImgSelect
      carouselImgButtons2[2].dataset.activeImgSelect = true

      break;

      case "4": 
      
      delete activeSlide.dataset.active
      slides[3].dataset.active = true

      delete activeImgButton2.dataset.activeImgSelect
      carouselImgButtons2[3].dataset.activeImgSelect = true

      break;
    }
    

  })

});

const carouselImgButtons1 = document.querySelectorAll('.carousel-images__img--1')

carouselImgButtons1.forEach(imgButton => {
  
  imgButton.addEventListener('click', () => {

    const carouselImgButtons1Div = document.querySelector('.carousel-images--1')
    const activeImgButton1 = carouselImgButtons1Div.querySelector('[data-active-img-select]')

    const slidesUl = document.querySelector('[data-slides-1]')
    const slides = document.querySelectorAll('.slide--1')
    const activeSlide = slidesUl.querySelector('[data-active]')

    switch(imgButton.dataset.img){

      case "1": 

      delete activeSlide.dataset.active
      slides[0].dataset.active = true
      
      delete activeImgButton1.dataset.activeImgSelect
      carouselImgButtons1[0].dataset.activeImgSelect = true

      break;

      case "2": 
      
      delete activeSlide.dataset.active
      slides[1].dataset.active = true

      delete activeImgButton1.dataset.activeImgSelect
      carouselImgButtons1[1].dataset.activeImgSelect = true

      break;

      case "3": 

      delete activeSlide.dataset.active
      slides[2].dataset.active = true

      delete activeImgButton1.dataset.activeImgSelect
      carouselImgButtons1[2].dataset.activeImgSelect = true

      break;

      case "4": 
      
      delete activeSlide.dataset.active
      slides[3].dataset.active = true

      delete activeImgButton1.dataset.activeImgSelect
      carouselImgButtons1[3].dataset.activeImgSelect = true

      break;
    }
    

  })

});

const slideImgs2 = document.querySelectorAll('.slide__img--2')

slideImgs2.forEach(slideImg2 => {
  slideImg2.addEventListener('click', () => {

    carouselContainer1.style.cssText = "display: flex"
  
    blackBackgroundAtOpeningNav.dataset.blackBackgroundActive = "true"

  })
});

const closeSlideImgs2Button = document.querySelector('.close-carousel-btn')

closeSlideImgs2Button.addEventListener('click', () => {

  blackBackgroundAtOpeningNav.dataset.blackBackgroundActive = "false"
  carouselContainer1.style.cssText = "display: none"

})

const cartList = document.querySelector('.cart__list')

const shoes = {
  id: 'id33555',
  name: 'Fall Limited Edition Sneakers',
  price: 125.00,
  quantity: 0,
  endPrice: 0,
}



const buyBtnsAddOrLess = document.querySelectorAll('[data-buy-btns]')

let numOfProducts = document.querySelector('.num-of-products')
let count = 0
numOfProducts.textContent = count

buyBtnsAddOrLess.forEach(btn => {

  btn.addEventListener('click', (e) => {

    if(e.target === buyBtnsAddOrLess[0]){
      let isZero = count === 0 ? 0 : -1
      count += isZero
      numOfProducts.textContent = count
    } else{
      count++
      numOfProducts.textContent = count
    }
  
  })
});



let trashBtns = document.querySelectorAll('.cart-item__trash-img')
let trashBtnsArr = Array.from(trashBtns)

let verifyThereIsCartItems = document.querySelectorAll('.cart-item')
const addToCartBtn = document.querySelector('.buy-btns__add-cart')

let cartEmptyPara = document.querySelector('.cart-empty')

if(verifyThereIsCartItems.length === 0){

  cartEmptyPara.style.cssText = 'display: block;'
}


addToCartBtn.addEventListener('click', () => {
  let verifyThereIsCartItems = document.querySelectorAll('.cart-item')

  if (verifyThereIsCartItems.length === 0){
    if(count === 0){}
    else{
      cartEmptyPara.style.cssText = 'display: none;'

      shoes.quantity = count
      shoes.endPrice = shoes.price * count
  
      let cartItem = document.createElement('li')
      cartItem.classList.add('cart-item')
      cartItem.setAttribute('id', shoes.id)
      
      cartList.appendChild(cartItem)
      
      let cartItemProductImg = document.createElement('img')
      cartItemProductImg.classList.add('cart-item__product-img')
      cartItemProductImg.src = 'images/image-product-1.jpg'
      
      cartItem.appendChild(cartItemProductImg)
      
      
      let cartItemText = document.createElement('div')
      cartItemText.classList.add('cart-item__text')
      
      cartItem.appendChild(cartItemText)
      
      let cartItemTextTitle = document.createElement('h4')
      cartItemTextTitle.classList.add('cart-item-text__title')
      cartItemTextTitle.innerText = shoes.name
      
      cartItemText.appendChild(cartItemTextTitle)
      
      let cartItemTextPrices = document.createElement('p')
      cartItemTextPrices.classList.add('cart-item-text__prices')
      cartItemTextPrices.innerText = '$ ' + shoes.price + ' x ' + shoes.quantity + ' = $' + shoes.endPrice
      
      cartItemText.appendChild(cartItemTextPrices)
      
      
      let cartItemTrashImg = document.createElement('img')
      cartItemTrashImg.classList.add('cart-item__trash-img')
      cartItemTrashImg.src = 'images/icon-delete.svg'
      
      cartItem.appendChild(cartItemTrashImg)
      
      let checkoutBtn = document.createElement('button')
      checkoutBtn.classList.add('buy-btns__add-cart', 'buy-btns__add-cart--cart-list')
      
      let checkoutBtnAnchorTag = document.createElement('a')
      checkoutBtnAnchorTag.classList.add('cart-list__checkout-btn')
      checkoutBtnAnchorTag.innerText = 'Checkout'
      
      checkoutBtn.appendChild(checkoutBtnAnchorTag)
      
      cartList.appendChild(checkoutBtn)

      cartNotification.dataset.cartIconNotify = true

      count = 0
      numOfProducts.textContent = count

      trashBtns = document.querySelectorAll('.cart-item__trash-img')
      trashBtns.forEach(trashButton => {

        trashButton.addEventListener('click', () => {

          trashButton.closest('.cart-item').remove()
          trashBtns = document.querySelectorAll('.cart-item__trash-img')

          if(trashBtns.length === 0){
            cartList.querySelector('button').remove()
            cartEmptyPara.style.cssText = "display:block"
          }else{

          }

        })

      })
    }
  }
  else{
    let increaseShoesQuantity = shoes.quantity
    let increaseShoesEndPrice = shoes.endPrice

    increaseShoesQuantity = shoes.quantity + count
    increaseShoesEndPrice = shoes.endPrice + count

    shoes.quantity += count
    shoes.endPrice = shoes.price * shoes.quantity
    
    cartList.querySelector('#id33555').querySelector('.cart-item__text').querySelector('.cart-item-text__prices').innerText = '$ ' + shoes.price + ' x ' + shoes.quantity + ' = $' + shoes.endPrice

    cartNotification.dataset.cartIconNotify = true

    count = 0
    numOfProducts.textContent = count
  }
})


trashBtns.forEach(trashButton => {

  trashButton.addEventListener('click', () => {
    
    trashButton.closest('.cart-item').remove()
    trashBtns = document.querySelectorAll('.cart-item__trash-img')

    if(trashBtns.length === 0){
      cartList.querySelector('button').remove()
      cartEmptyPara.style.cssText = "display:block"
    }else{

    }

  })

})