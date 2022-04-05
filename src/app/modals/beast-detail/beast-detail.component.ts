import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BeastService } from 'src/app/services/data/beast.service';
@Component({
  selector: 'app-beast-detail',
  templateUrl: './beast-detail.component.html',
  styleUrls: ['./beast-detail.component.scss'],
})
export class BeastDetailComponent implements OnInit {
  @Input() beast: any;
  info: any;
  loading = true;
  constructor(
    private modal: NgbActiveModal,
    private beastService: BeastService
  ) {}

  ngOnInit(): void {
    this.loadBeastInfo();
  }

  loadBeastInfo() {
    this.beastService.getById(this.beast.id).subscribe(
      (res: any) => {
        this.loading = false;
        this.handleInfo(res);
      },
      (err) => {
        this.loading = false;
        console.error('Error when getting pokemon info: ', err.error.message);
      }
    );
  }
  handleInfo(data: any) {
    this.info = {
      abilities: data.abilities,
      baseExperience: data.base_experience,
      height: data.height,
      name: data.name,
      species: data.species,
      types: data.types,
      weight: data.weight,
    };
  }
  close() {
    this.modal.close(false);
  }
}
