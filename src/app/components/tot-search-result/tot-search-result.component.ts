import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faChevronUp, faChevronDown, IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface IShowModalEvent {
  id: number;
  show: boolean;
}


@Component({
  selector: 'tot-search-result',
  templateUrl: './tot-search-result.component.html',
  styleUrls: ['./tot-search-result.component.scss']
})
export class TotSearchResultComponent implements OnInit {
  @Input() idNumber: number = 0;
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() icon: string = '';
  @Output() onShowModal: EventEmitter<IShowModalEvent> = new EventEmitter<IShowModalEvent>();

  public open: boolean = false;
  public optionText: string = 'Ver';
  public optionIcon: IconDefinition = faChevronDown;

  constructor() { }

  ngOnInit(): void {
  }

  public showModal(): void {
    this.onShowModal.emit({
      id: this.idNumber,
      show: true,
    });
  }

  public toogle(): void {
    if (this.open) {
      this.optionText = 'Ver'; 
      this.open = false; 
      this.optionIcon = faChevronDown;

      return;
    }
    
    this.optionText = 'Ocultar'; 
    this.open = true; 
    this.optionIcon = faChevronUp;
  }
}
