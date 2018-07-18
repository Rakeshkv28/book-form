import { Component } from '@angular/core';

@Component({/* component decorator */
  selector: 'app-root',/* custom tag declare in the html */
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
