import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-page-not-found',
  template: `<h2>Page Not Found.</h2><div>
               		 <button (click) = "goBack()">Go Back</button>
	           	</div>`,
  /*styleUrls: ['./page-not-found.component.css']*/
})
export class PageNotFoundComponent {
  constructor(private location: Location) { }

  goBack(): any {
    this.location.back();
  }
     
}

