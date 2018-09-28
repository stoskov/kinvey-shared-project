import { Component, OnInit } from '@angular/core';
import { KinveyService } from './kinvey.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [KinveyService]
})
export class HomeComponent implements OnInit {
  title = 'kinvey-sdk';
  public fleetlist;

  constructor(private kinveyService: KinveyService) { }

  async ngOnInit() {
    this.fleetlist = await this.kinveyService.getItems();
  }
}
