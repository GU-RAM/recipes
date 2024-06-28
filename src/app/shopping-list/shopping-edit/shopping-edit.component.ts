import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from '../inredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef | undefined;
  @ViewChild('amountInput') amountInputRef: ElementRef | undefined;
  @Output() newIngredient = new EventEmitter<Ingredient>();

  onAddItem() {
    const name = this.nameInputRef?.nativeElement.value;
    const amount = parseInt(this.amountInputRef?.nativeElement.value, 10);

    if (name.trim() && amount > 0) {
      this.newIngredient.emit({ name, amount });
    }
  }

  ngOnInit() {}
}
