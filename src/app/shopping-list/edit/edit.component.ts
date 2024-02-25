import {
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shoppingList.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent implements OnInit, OnDestroy {
  @ViewChild('editForm', { static: false }) slForm: NgForm;
  slSub: Subscription;
  editMode = false;
  editItemIndex: number;
  edtittedItem: Ingredient;
  // @Output() newRecipe = new EventEmitter<Ingredient>();

  // no longer needed with reactive form
  // @ViewChild('nameInput', { static: true }) nameInput: ElementRef;
  // @ViewChild('amountInput', { static: true }) amountInput: ElementRef;

  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {
    this.slSub = this.slService.startedEditing.subscribe((index: number) => {
      this.editMode = true;
      this.editItemIndex = index;
      this.edtittedItem = this.slService.getIngredient(index);
      this.slForm.setValue({
        name: this.edtittedItem.name,
        amount: this.edtittedItem.amount,
      });
    });
  }

  ngOnDestroy(): void {
    this.slSub.unsubscribe();
  }

  onItemSubmit(form: NgForm) {
    // this.newRecipe.emit(
    //   new Ingredient(
    //     this.nameInput.nativeElement.value,
    //     this.amountInput.nativeElement.value
    //   )
    // );

    // no longer needed with reactive form
    // // using service
    // const ingName = this.nameInput.nativeElement.value;
    // const ingAmount = this.amountInput.nativeElement.value;

    const value = form.value;

    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.slService.updateIngredient(this.editItemIndex, newIngredient);
      this.editMode = false;
    } else {
      this.slService.addIngredient(newIngredient);
    }
    this.slForm.reset();
  }
  onDeleteItem() {
    this.slService.deleteIngredient(this.editItemIndex);
    this.onClear();
  }

  onClear() {
    this.editMode = false;
    this.slForm.reset();
  }
}
