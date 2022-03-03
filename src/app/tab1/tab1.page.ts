import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ImageListingModel } from '../utils/models/image-listing.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, OnDestroy {

  friends: ImageListingModel;
  posts: ImageListingModel;
  private subs: Subscription[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {}

  ngOnDestroy(): void {}
}
