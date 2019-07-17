import { $ } from '../helpers/Alias';
import { ProductsView } from '../views/ProductsView';

export class Controller {
  constructor() {
    this.container = $('.container');
    this.productsView = new ProductsView('.display');
    this.productsView.update();
  }

  hamburgerMenuClick() {
    this.container.classList.toggle('open-cart');
  }
}