import { Component, Input } from '@angular/core';
import { NAVIGATION_STRING } from '../../../constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() activePage: Array<boolean> = [true, false, false, false];

  public navString = NAVIGATION_STRING;
}
