import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-page-not-found',
  template: `<h2>Page Not Found.</h2><div>
               		 <button (click) = "goBack()">Go Back</button>
	           	</div>`,
})
export class PageNotFoundComponent {
  constructor(private location: Location) { }

  goBack(): any {
    this.location.back();
  }
}

