import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Marca } from 'src/app/models/Marca';
import { MarcasService } from '../../services/marcas.service';

@Component({
  selector: 'app-marca-modal',
  templateUrl: './marca-modal.component.html',
  styleUrls: ['./marca-modal.component.css'],
})
export class MarcaModalComponent implements OnInit {
  marca: Marca = {};
  @Input() public url: any;

  constructor(
    private activeModal: NgbActiveModal,
    private marcasService: MarcasService
  ) {}

  closeModal() {
    this.activeModal.close();
  }

  detallar(url: string) {
    this.marcasService
      .getMarca(url)
      .subscribe((response) => (this.marca = response));
  }

  ngOnInit(): void {}
}
