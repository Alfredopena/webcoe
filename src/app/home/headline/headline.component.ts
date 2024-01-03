import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css']
})
export class HeadlineComponent implements OnInit, OnChanges {

  @Input() Spanish: any;
  public name: string = "Alfredo Peña";
  public titleEnglish: string = "LOOKING FORWARD TO MAKING A DIFFERENCE";
  public titleEspanol: string = 'EN BUSCA DE EXPERIENCIAS NUEVAS, Y HACER UNA DIFERENCIA';

  public title = this.titleEspanol;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (!this.Spanish) {
      this.title = this.titleEnglish;
    } else {
      this.title = this.titleEspanol;
    }
  }

}
