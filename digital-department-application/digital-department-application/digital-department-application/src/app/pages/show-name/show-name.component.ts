import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-name',
  templateUrl: './show-name.component.html',
  styleUrls: ['./show-name.component.css']
})
export class ShowNameComponent {

  name = "Имя по умолчанию";

  constructor(private activateRouter: ActivatedRoute,
              private router: Router) {
    this.name = activateRouter.snapshot.params['name'];
  }
// ПЕРЕХОД МЕЖДУ СТРАНИЦАМИ
  goMain1(): void {
    this.router.navigateByUrl('/');
  }
  goMain2(): void {
     this.router.navigateByUrl('/page2');
   }
   goMain3(): void {
     this.router.navigateByUrl('/page3');
   }
}
