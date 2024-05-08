import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/sideBar/sideBar.component';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';



@NgModule({
  declarations: [
    SideBarComponent,
  ],
  imports: [
    CommonModule,
    LazyImageComponent
  ],
  exports:[
    SideBarComponent,
    LazyImageComponent
  ]
})
export class SharedModule { }
