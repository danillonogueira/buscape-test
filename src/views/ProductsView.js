import { View } from './View';

export class ProductsView extends View {
  template() {
    return `
      ${
        require('../mocks/data').items.map((item) => {
          return `
            <div class="product">
              <div class="product__pictures">
                ${
                  item.product.images
                    .map(pic => `<img src="${pic}">`)
                    .join('')
                }         
              </div>
              <div class="product__picture">
                <img src="${item.product.images[0]}">
              </div>         
              <div class="product__info">
                <span class="product__name">${item.product.name}</span>
                <div class="product__pricing">
                  <span>melhor preço</span>
                  <span>${item.product.price.installments}x R$${item.product.price.installmentValue}</span>
                  <button>Adicionar ao carrinho</button>
                  <span>ou R$${item.product.price.value} à vista</span>
                </div>
              </div>        
            </div>
          `
        })
        .join('')
      }
    `;
  }
}