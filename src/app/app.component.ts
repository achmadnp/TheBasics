import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TheBasics';
  optSelected: string;

  // onNavigate(opt: string) {
  //   this.optSelected = opt;
  // }
}
