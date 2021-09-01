import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tot-results-modal',
  templateUrl: './tot-results-modal.component.html',
  styleUrls: ['./tot-results-modal.component.scss']
})
export class TotResultsModalComponent implements OnInit {
  @Input() open: boolean = false;
  @Input() destination: string = '';

  constructor(
    protected router: Router,
  ) { }

  ngOnInit(): void {
  }

  public closeModal(): void {
    this.open = false;
  }
  
  public goToItem(): void {
    this.router.navigate(['/', 'item-screen']);
  }

}
