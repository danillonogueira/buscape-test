import { View } from './View';

export class ProductsView extends View {
  template() {
    return `
      ${
        require('../mocks/data').items.map((item) => {
          return `
            <div class="product">
              <div class="product__pictures">
                <img src="${item.product.images[0]}">
                <img src="${item.product.images[1]}">
                <img src="${item.product.images[2]}">
                <img src="${item.product.images[3]}">
              </div>
              <div class="product__picture">
                <img src="${item.product.images[0]}">
              </div>         
              <div class="product__info">
                <div class="product__name">${item.product.name}</div>
                <div class="product__pricing">
                  <span>melhor preço</span>
                  <span>
                    ${item.product.price.installments}x R$${item.product.price.installmentValue}
                    <button>Adicionar ao carrinho</button>
                  </span>
                  <span>ou R$${item.product.price.value}</span>
                </div>
              </div>        
            </div>
          `
        })
        .join('')
      }
    `
  }
}