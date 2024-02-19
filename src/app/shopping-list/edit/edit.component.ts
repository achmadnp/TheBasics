import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shoppingList.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent {
  // @Output() newRecipe = new EventEmitter<Ingredient>();

  @ViewChild('nameInput', { static: true }) nameInput: ElementRef;
  @ViewChild('amountInput', { static: true }) amountInput: ElementRef;

  constructor(private slService: ShoppingListService) {}

  onAddItem() {
    // this.newRecipe.emit(
    //   new Ingredient(
    //     this.nameInput.nativeElement.value,
    //     this.amountInput.nativeElement.value
    //   )
    // );

    // using service
    const ingName = this.nameInput.nativeElement.value;
    const ingAmount = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.slService.addIngredient(newIngredient);
  }
  onDeleteItem() {
    console.log('delete');
  }

  onClear() {
    console.log('clear');
  }
}
