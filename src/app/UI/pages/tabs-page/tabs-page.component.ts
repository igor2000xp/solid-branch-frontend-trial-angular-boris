import { Component, OnInit } from '@angular/core';
import { IDatum } from '../../../models';
import { dataMockChanged } from '../../../data/dataMockChanged';

export interface IContentPageElement {
  name: string;
  account: string;
}
export const activePageInit: Array<boolean> = [false, false, false, false];

@Component({
  selector: 'app-tabs-page',
  templateUrl: './tabs-page.component.html',
  styleUrls: ['./tabs-page.component.scss'],
})
export class TabsPageComponent implements OnInit {
  private isActiveTab: string = '0';

  public contentPage: IDatum[] = [];

  public activePage: Array<boolean> = [true, false, false, false];

  public dataFromDb: IDatum[] = dataMockChanged.data;

  public filterString: 'income' | 'outcome' | 'loan' | 'investment' = 'income';

  private switchPage(idPage: string) {
    this.activePage = activePageInit;
    switch (idPage) {
      case '0':
        this.contentPage = this.dataFromDb;
        this.activePage = [true, false, false, false];
        this.filterString = 'income';
        break;
      case '1':
        this.contentPage = this.dataFromDb;
        this.activePage = [false, true, false, false];
        this.filterString = 'outcome';
        break;
      case '2':
        this.contentPage = this.dataFromDb;
        this.activePage = [false, false, true, false];
        this.filterString = 'loan';
        break;
      case '3':
        this.contentPage = this.dataFromDb;
        this.activePage = [false, false, false, true];
        this.filterString = 'investment';
        break;
      default:
        this.contentPage = [];
    }
  }

  ngOnInit(): void {
    this.isActiveTab = document.location.search.split('=')[1];
    this.switchPage(this.isActiveTab);
  }
}
