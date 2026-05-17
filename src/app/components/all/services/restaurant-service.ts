import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  public http = inject(HttpClient);

  getAllProducts() {
    return this.http.get('https://restaurant.stepprojects.ge/api/Products/GetAll');
  }

  getAllCategories() {
    return this.http.get('https://restaurant.stepprojects.ge/api/Categories/GetAll');
  }

  filterCategory(id: any) {
    return this.http.get(`https://restaurant.stepprojects.ge/api/Categories/GetCategory/${id}`);
  }
}
