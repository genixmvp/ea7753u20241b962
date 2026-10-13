import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatToolbar, MatToolbarRow} from '@angular/material/toolbar';

@Component({
  imports: [
    RouterOutlet,
    MatToolbarRow,
    MatToolbar
  ],
  selector: 'app-layout',
  styleUrl: './layout.css',
  templateUrl: './layout.html',
})
export class Layout {
  HertzLogoUrl: string = 'https://www.hertz.com';

}
