import { Component } from '@angular/core';
import { CyclistService } from './services/cyclist.service';

@Component({
  selector: 'cm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CyclistService]
})
export class AppComponent {
  title = 'cm works!';
}
