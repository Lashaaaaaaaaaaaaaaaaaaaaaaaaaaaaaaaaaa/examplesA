import { Component } from '@angular/core';
import { ToolsService } from '../tools-service';

@Component({
  selector: 'app-service',
  imports: [],
  templateUrl: './service.html',
  styleUrl: './service.css',
})
export class Service {
  constructor(private service: ToolsService) {
    this.allCards();
    this.allCategories();
  }

  public allProducts: any;
  public allCategory: any;

  allCards() {
    this.service.getAllProducts().subscribe((data: any) => (this.allProducts = data));
  }

  allCategories() {
    this.service.getAllCategories().subscribe((data: any) => (this.allCategory = data));
  }

  filter(id: any) {
    this.service.filterCategory(id).subscribe((data: any) => (this.allProducts = data.products));
  }

  all() {
    this.allCards();
  }
}
