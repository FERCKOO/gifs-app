import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifsCardComponent implements OnInit {
  @Input()
  public gif!: Gif;


  ngOnInit(): void {

    if (!this.gif)
      throw new Error('Esta propiedad es requerida.');
  }


}

