import { Component, inject, input } from '@angular/core';
import { Product } from '@app/models/products.model';
import { ButtonComponent } from "../../../components/button/button.component";
import { CartService } from '@app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  imports: [ButtonComponent],
  template: `
   <div class="bg-white shadow-md border rounded-xl p-4 flex gap-4 items-center">
  <img
    [src]="item().image"
    alt="{{ item().title }}"
    class="w-[50px] h-[50px] object-contain rounded-xl"
  />

  <div class="flex flex-col gap-2">
    <span class="text-md font-bold">{{ item().title }}</span>
    <span class="text-sm">{{ '$' + item().price }}</span>
  </div>

  <div class="flex-1"></div>
  <app-button label="Remove" (btnClicked)="carService.removeFromCart(item().id) " />
</div>

  `,
  styles: ``
})
export class CartItemComponent {
  carService = inject(CartService);
  item = input.required<Product>();

}
