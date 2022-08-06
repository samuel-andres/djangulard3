import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Color } from 'src/app/models/Color';
import { ColoresService } from '../../services/colores.service';
import stc from 'string-to-color';

@Component({
  selector: 'app-color-modal',
  templateUrl: './color-modal.component.html',
  styleUrls: ['./color-modal.component.css'],
})
export class ColorModalComponent implements OnInit {
  colorfs: any;
  color: Color = {};
  @Input() public url: any;

  constructor(
    private activeModal: NgbActiveModal,
    private coloresService: ColoresService
  ) {}

  closeModal() {
    this.activeModal.close();
  }

  detallar(url: string) {
    this.coloresService
      .getColor(url)
      .subscribe((response) => (this.color = response));
    this.colorfs = stc(this.color.nombre);
  }

  ngOnInit(): void {}
}
