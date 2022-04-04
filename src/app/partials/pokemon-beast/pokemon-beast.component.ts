import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BeastDetailComponent } from 'src/app/modals/beast-detail/beast-detail.component';

@Component({
  selector: 'app-pokemon-beast',
  templateUrl: './pokemon-beast.component.html',
  styleUrls: ['./pokemon-beast.component.scss'],
})
export class PokemonBeastComponent implements OnInit {
  @Input() beast: any;
  constructor(private modal: NgbModal) {}

  ngOnInit(): void {}
  openDetail() {
    let modalRef = this.modal.open(BeastDetailComponent, {
      size: 'md',
      backdrop: 'static',
    });
    modalRef.componentInstance.beast = this.beast;
  }
}
