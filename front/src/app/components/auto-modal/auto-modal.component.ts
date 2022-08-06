import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AutosService } from '../../services/autos.service';
import { Auto } from '../../models/Auto';

@Component({
  selector: 'app-auto-modal',
  templateUrl: './auto-modal.component.html',
  styleUrls: ['./auto-modal.component.css'],
})
export class AutoModalComponent implements OnInit {
  auto: Auto = {};
  @Input() public url: any;

  constructor(
    private activeModal: NgbActiveModal,
    private autosService: AutosService
  ) {}

  closeModal() {
    this.activeModal.close();
  }

  detallar(url: string) {
    this.autosService
      .getAuto(url)
      .subscribe((response) => (this.auto = response));
  }

  ngOnInit(): void {}
}
