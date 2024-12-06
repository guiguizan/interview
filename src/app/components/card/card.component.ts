import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges{

  @Input() infoCard: any;
  titleCard: string = '';
  content: string = '';
  svgContent: SafeHtml = '';


  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.infoCard)
    this.titleCard = this.infoCard.value.titleCard.toUpperCase();
    this.content = this.infoCard.value.text.toUpperCase();
    let svgPath = this.infoCard.value.img; 
    this.svgContent = this.sanitizer.bypassSecurityTrustHtml(svgPath);
  }

}
