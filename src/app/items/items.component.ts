import { Component, OnInit } from '@angular/core';
import { Item } from '../_infra/_model/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  itemArray: Item[] = [
    {id: 1, name: 'Teste', categoria: 'Categoria para Teste'},
  ];

  selectedName: Item = new Item();

  addOrEdit() {
    if(this.selectedName.id == 0) {
      this.selectedName.id = this.itemArray.length + 1;
      this.itemArray.push(this.selectedName);
    }
    this.selectedName = new Item();
  }

  editar(item: Item) {
    this.selectedName = item;
  }

  excluir() {
   if(confirm('Tem certeza que deseja excluir o item ?')) {
    this.itemArray = this.itemArray.filter(item => item !== this.selectedName)
    this.selectedName = new Item();
   }
  }


  constructor() { }


  ngOnInit() {
  }



}
