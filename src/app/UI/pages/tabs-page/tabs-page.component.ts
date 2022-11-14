import { Component, OnInit } from '@angular/core';

export interface IContentPageElement {
  name: string;
  account: number;
}
// export type IActivePage = 'active' || '';
export const activePageInit: Array<boolean> = [false, false, false, false];

@Component({
  selector: 'app-tabs-page',
  templateUrl: './tabs-page.component.html',
  styleUrls: ['./tabs-page.component.scss'],
})
export class TabsPageComponent implements OnInit {
  private isActiveTab: string = '0';

  public contentPage: IContentPageElement[] = [{ name: '', account: 0 }];

  public activePage: Array<boolean> = [true, false, false, false];

  // constructor() {}
  //
  private switchPage(idPage: string) {
    this.activePage = activePageInit;
    switch (idPage) {
      case '0':
        this.contentPage = [{ name: 'Zero Page', account: 0 }];
        this.activePage = [true, false, false, false];
        break;
      case '1':
        this.contentPage = [{ name: 'First Page', account: 1 }];
        this.activePage = [false, true, false, false];
        break;
      case '2':
        this.contentPage = [{ name: 'Second Page', account: 2 }];
        this.activePage = [false, false, true, false];
        break;
      case '3':
        this.contentPage = [{ name: 'Third Page', account: 3 }];
        this.activePage = [false, false, false, true];
        break;
      default:
        this.contentPage = [{ name: 'Something goes wrong', account: 100 }];
    }
  }

  ngOnInit(): void {
    this.isActiveTab = document.location.search.split('=')[1];
    this.switchPage(this.isActiveTab);
    // console.log(idPage);
  }
}
