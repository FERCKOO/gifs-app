import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sideBar',
  templateUrl: './sideBar.component.html',
  styleUrl: './sideBar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

})

export class SideBarComponent {

  constructor(private gifsService: GifsService) {}

  get tags(){
    return this.gifsService.tagHistory;
  }

  searchGifs(tag: string): void{
    this.gifsService.searchTag(tag);
  }

}
