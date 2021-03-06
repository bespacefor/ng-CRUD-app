import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  showFiller = false;

  title = 'myapp';

  date: Date = new Date();

  constructor(private router: Router) { }

  goToBlogPage() {
    this.router.navigate(['/blog'])
  }

  goToCrudPage() {
    this.router.navigate(['/crud'])
  }

  goToFormsPage() {
    this.router.navigate(['/forms'])
  }

  goToAboutPage() {
    this.router.navigate(['/about'])
  }

  goToCDKPage() {
    this.router.navigate(['/cdk'])
  }

  ngOnInit(): void {
  }

}
