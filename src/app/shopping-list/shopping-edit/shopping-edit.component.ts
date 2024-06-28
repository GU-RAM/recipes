import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef | undefined;
  @ViewChild('amountInput') amountInput: ElementRef | undefined;
  @Output() newIngredient = new EventEmitter<any>();

  addIngredient() {
    const name = this.nameInput?.nativeElement.value;
    const amount = parseInt(this.amountInput?.nativeElement.value, 10);

    if (name.trim() && amount > 0) {
      this.newIngredient.emit({ name, amount });
      // this.nameInput.nativeElement.value = '';
      // this.amountInput.nativeElement.value = '';
    }
  }

  ngOnInit() {
    console.log(this.nameInput?.nativeElement.value);
  }
}
