import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MarcasService } from 'src/app/services/marcas.service';
import { Marca } from '../../models/Marca';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-marca-edit-modal',
  templateUrl: './marca-edit-modal.component.html',
  styleUrls: ['./marca-edit-modal.component.css'],
})
export class MarcaEditModalComponent implements OnInit {
  marca: Marca = {};
  @Input() public url: any;

  formdata!: FormGroup;

  constructor(
    private activeModal: NgbActiveModal,
    private marcasService: MarcasService
  ) {}

  closeModal() {
    this.activeModal.close();
  }

  detallar(marca: Marca) {
    this.marca = marca;
  }

  editar(url: string) {
    this.marcasService
      .putMarca(url, this.marca)
      .subscribe((response) => (this.marca = response));
  }

  onClickSubmit(data: any) {
    this.marca.nombre = data.nombre;
    this.marcasService.putMarca(this.marca.url!, this.marca).subscribe(
      (response) => this.tinyAlert('Marca modificada.'),
      (err) => this.tinyAlert('Error.')
    );
    this.closeModal();
  }

  tinyAlert(msg: string) {
    Swal.fire(msg);
  }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      nombre: new FormControl(this.marca.nombre),
    });
  }
}
