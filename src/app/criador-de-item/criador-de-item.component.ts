import { Component, EventEmitter, Output } from '@angular/core';
import { Item } from '../item';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-criador-de-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './criador-de-item.component.html',
  styleUrl: './criador-de-item.component.css'
})
export class CriadorDeItemComponent {
  itemName: string = '';
  @Output() itemCreated = new EventEmitter<Item>();

  onSubmit() {
    if (this.itemName.trim()) {
      const newItem: Item = { nome: this.itemName, comprado: false };
      this.itemCreated.emit(newItem);
      this.itemName = '';
    }
  }
}
