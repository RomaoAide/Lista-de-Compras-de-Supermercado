import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css'
})

export class ItemCardComponent {
  @Input() item!: Item;
  @Output() compradoToggled = new EventEmitter<Item>();
  @Output() itemDeleted = new EventEmitter<Item>();

  toggleComprado() {
    this.compradoToggled.emit(this.item);
  }

  deleteItem() {
    this.itemDeleted.emit(this.item);
  }
}
