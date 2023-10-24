import { AfterViewInit, Component, OnInit } from '@angular/core';
import { PrintLetterByLetterService } from 'src/app/services/print-letter-by-letter.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit, AfterViewInit {
  //
  private firstTimeOut: any;
  private secondTimeOut: any;
  private thirdTimeOut: any;

  constructor(private servicePrintLetter: PrintLetterByLetterService) {}

  ngOnInit() {
    // console.log(description, listLibraries);
  }

  ngAfterViewInit(): void {
    this.printDescription();
  }

  ngOnDestroy() {
    clearTimeout(this.firstTimeOut);
    clearTimeout(this.secondTimeOut);
    clearTimeout(this.thirdTimeOut);
  }

  printDescription() {
    this.servicePrintLetter.currentIndex = 0;
    this.firstTimeOut = setTimeout(() => {
      this.servicePrintLetter.printLetterByLetter(
        'description',
        this.servicePrintLetter.descriptions.description
      );
    }, 0);
    this.secondTimeOut = setTimeout(() => {
      this.servicePrintLetter.currentIndex = 0;
      this.servicePrintLetter.printLetterByLetter(
        'listLibraries',
        this.servicePrintLetter.descriptions.listLibraries
      );
    }, 12000);
    this.thirdTimeOut = setTimeout(() => {
      this.servicePrintLetter.currentIndex = 0;
      this.servicePrintLetter.printLetterByLetter(
        'languages',
        this.servicePrintLetter.descriptions.languages
      );
    }, 18000);
  }
}
