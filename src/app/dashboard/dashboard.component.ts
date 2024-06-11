import { Component, OnInit } from '@angular/core';
import { NpsService } from '../nps/nps.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  responses: Array<{ score: number, reason: string }> = [];

  constructor(private npsService: NpsService) {}

  ngOnInit() {
    this.responses = this.npsService.getResponses();
  }
}
