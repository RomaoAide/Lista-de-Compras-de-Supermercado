import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Item } from './item';
import { ItemCardComponent } from "./item-card/item-card.component";
import { CriadorDeItemComponent } from "./criador-de-item/criador-de-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ItemCardComponent, CriadorDeItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  itemsNaoComprados: Item[] = [];
  itemsComprados: Item[] = [];

  onItemCreated(newItem: Item) {
    this.itemsNaoComprados.push(newItem);
  }

  onCompradoToggled(item: Item) {
    item.comprado = !item.comprado;
    if (item.comprado) {
      this.itemsNaoComprados = this.itemsNaoComprados.filter(i => i !== item);
      this.itemsComprados.push(item);
    } else {
      this.itemsComprados = this.itemsComprados.filter(i => i !== item);
      this.itemsNaoComprados.push(item);
    }
  }

  onItemDeleted(item: Item) {
    if (item.comprado) {
      this.itemsComprados = this.itemsComprados.filter(i => i !== item);
    } else {
      this.itemsNaoComprados = this.itemsNaoComprados.filter(i => i !== item);
    }
  }
}
