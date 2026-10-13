import {Component, signal} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatToolbar, MatToolbarRow} from '@angular/material/toolbar';
import {LanguageSwitcher} from '../language-switcher/language-switcher';

@Component({
  imports: [
    RouterOutlet,
    MatToolbarRow,
    MatToolbar,
    LanguageSwitcher,
    RouterLink
  ],
  selector: 'app-layout',
  styleUrl: './layout.css',
  templateUrl: './layout.html',
})
export class Layout {
  HertzLogoUrl: string = 'https://www.hertz.com';
  options = signal([
    {link: '/home', label: 'option.home'},
    {link: '/about', label: 'option.about'},
    {link: '/learning/categories', label: 'option.categories'},
    {link: '/learning/courses', label: 'option.courses'}
  ]);
}
