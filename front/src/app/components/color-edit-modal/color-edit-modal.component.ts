import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { ColoresService } from '../../services/colores.service'
import { Color } from '../../models/Color'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-color-edit-modal',
  templateUrl: './color-edit-modal.component.html',
  styleUrls: ['./color-edit-modal.component.css'],
})
export class ColorEditModalComponent implements OnInit {
  color: Color = {};
  @Input() public url: any;

  formdata!: FormGroup;

  constructor(
    private activeModal: NgbActiveModal,
    private coloresService: ColoresService
  ) {}

  closeModal() {
    this.activeModal.close();
  }

  detallar(color: Color) {
    this.color = color;
  }

  editar(url: string) {
    this.coloresService
      .putColor(url, this.color)
      .subscribe((response) => (this.color = response));
  }

  onClickSubmit(data: any) {
    this.color.nombre = data.nombre;
    this.coloresService.putColor(this.color.url!, this.color).subscribe(
      (response) => this.tinyAlert('Color modificado.'),
      (err) => this.tinyAlert('Error.')
    );
    this.closeModal();
  }

  tinyAlert(msg: string) {
    Swal.fire(msg);
  }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      nombre: new FormControl(this.color.nombre),
    });
  }
}
