import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/serarch-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { SideBarComponent } from '../shared/components/sideBar/sideBar.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent
  ],
  imports: [
    CommonModule,
    SideBarComponent
  ],
  exports: [
    HomePageComponent,
    SideBarComponent
  ]
})
export class GifsModule { }