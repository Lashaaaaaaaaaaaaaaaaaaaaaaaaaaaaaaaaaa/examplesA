import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RestaurantService } from '../../services/restaurant-service';

@Component({
  selector: 'app-all',
  imports: [FormsModule],
  templateUrl: './all.html',
  styleUrl: './all.css',
})
export class All {
  constructor(
    // SERVICES
    private restaurantService: RestaurantService,
  ) {
    this.getAllCategoriess();
    this.getAllProductss();
  }

  // BINDING

  public flacko: string = 'Flacko';

  public typeText: string = '';

  public some: boolean = false;

  public click: boolean = false;

  public btnChangeColor = true;

  public someShit: string = 'some shit';

  changeColor() {
    this.click = !this.click;
  }

  btnClick() {
    this.btnChangeColor = !this.btnChangeColor;
    this.someShit = 'Giving girls cocaine';
  }

  public images: string[] = [
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/62ac6294-a949-47b1-bd6e-117623945d4a/dgbuoti-3ed5325b-b1d5-4644-a95a-33d3c3334036.png/v1/fill/w_1280,h_1600,q_80,strp/jhin_league_of_legends_portrait_art_by_bili24681012_dgbuoti-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYwMCIsInBhdGgiOiJcL2ZcLzYyYWM2Mjk0LWE5NDktNDdiMS1iZDZlLTExNzYyMzk0NWQ0YVwvZGdidW90aS0zZWQ1MzI1Yi1iMWQ1LTQ2NDQtYTk1YS0zM2QzYzMzMzQwMzYucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.FvjNPM1mgaxy6UvoY3vT5l_Y5vdgmvS2Rdckw9g-4ig',
    'https://images8.alphacoders.com/133/1332612.jpeg',
    'https://rare-gallery.com/mocahbig/394959-blood-moon-diana-lol-wild-rift-skin-splash-art-4k.jpg',
  ];

  public i: number = 0;

  previous() {
    if (this.i == 0) {
      this.i = this.images.length - 1;
    } else {
      this.i--;
    }
  }

  next() {
    if (this.i == this.images.length - 1) {
      this.i = 0;
    } else {
      this.i++;
    }
  }

  // SERVICES

  public allProducts: any;

  public allCategory: any;

  getAllProductss() {
    this.restaurantService.getAllProducts().subscribe((data: any) => (this.allProducts = data));
  }

  getAllCategoriess() {
    this.restaurantService.getAllCategories().subscribe((data: any) => (this.allCategory = data));
  }

  filter(id: any) {
    this.restaurantService
      .filterCategory(id)
      .subscribe((data: any) => (this.allProducts = data.products));
  }

  all() {
    this.getAllProductss();
  }
}
