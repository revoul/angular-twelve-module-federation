import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'mf-angular-twelve',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ngVersion = VERSION;
}
