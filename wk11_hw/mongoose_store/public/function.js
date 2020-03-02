let buyButton = document.querySelector('#buy')
      
const reduceQty = () => { 
      product.qty -= 1 
      } 
      
buyButton.on(click, reduceQty)