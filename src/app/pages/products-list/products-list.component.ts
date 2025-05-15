import { Component, signal} from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductCardComponent } from "./product-card/product-card.component";
@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  template: `
     
     <div class="p-8 grid grid-cols-2 gap-4">
      @for (product of products(); track product.id){
        <app-product-card [product]="product" />
      }
     </div>
  `,
  styles: ``
})
export class ProductsListComponent {

  // async ngOnInit()
  // {
  //   const res = await fetch("https://fakestoreapi.in/api/products/category?type=mobile");
  //   const data = await res.json();
  //   this.products.set(data);
  // }
  products = signal<Product[]>([
  {
    id: 1,
    title: 'Premium Leather Handbag',
    image: 'https://m.media-amazon.com/images/I/81MSoF9+JfL._SY695_.jpg',
    price: 249.15,
    stock: 10
  },
  {
    id: 2,
    title: 'Pink Over-Ear Headphones',
    image: 'https://m.media-amazon.com/images/I/413zsOzL4-L._SX300_SY300_QL70_FMwebp_.jpg',
    price: 185,
    stock: 5
  },
  {
    id: 3,
    title: 'Smart Watch',
    image: 'https://m.media-amazon.com/images/I/61PBOgIkzDL._SX679_.jpg',
    price: 295.99,
    stock: 0
  },
  {
    id: 4,
    title: 'Bloom Lip Gloss',
    image: 'https://m.media-amazon.com/images/I/41z80vs1NSL._SX300_SY300_QL70_FMwebp_.jpg',
    price: 4.99,
    stock: 2
  }
]);
;

}
