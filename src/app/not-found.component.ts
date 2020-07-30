import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  template: `<h1>Page Introuvable.</h1>
  <a mat-list-item routerLink="/cars" class="link">Retour</a>`,
  styles: ['.link{padding: 0.5rem 1rem;color: #3f51b5;text-decoration: none;font-weight: 400}']
})
export class NotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
