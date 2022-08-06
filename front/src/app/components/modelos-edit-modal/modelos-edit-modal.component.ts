import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { ModelosService } from 'src/app/services/modelos.service';
import { MarcasService } from 'src/app/services/marcas.service';
import { Modelo } from '../../models/Modelo';
import { Marca } from '../../models/Marca';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modelos-edit-modal',
  templateUrl: './modelos-edit-modal.component.html',
  styleUrls: ['./modelos-edit-modal.component.css'],
})
export class ModelosEditModalComponent implements OnInit {
  modelo: Modelo = {};
  @Input() public url: any;

  marcas: Marca[] = [];

  formdata!: FormGroup;

  constructor(
    private activeModal: NgbActiveModal,
    private modelosService: ModelosService,
    private marcasService: MarcasService
  ) {}

  closeModal() {
    this.activeModal.close();
  }

  detallar(modelo: Modelo) {
    this.modelo = modelo;
  }

  editar(url: string) {
    this.modelosService
      .putModelo(url, this.modelo)
      .subscribe((response) => (this.modelo = response));
  }

  obtenerMarcas() {
    this.marcasService
      .getMarcas()
      .subscribe((response) => (this.marcas = response));
  }

  onClickSubmit(data: any) {
    this.modelo.nombre = data.nombre;
    this.modelo.marca_pk = data.marca_pk;
    this.modelosService.putModelo(this.modelo.url!, this.modelo).subscribe(
      (response) => this.tinyAlert('Modelo modificado.'),
      (err) => this.tinyAlert('Error.')
    );
    this.closeModal();
  }

  tinyAlert(msg: string) {
    Swal.fire(msg);
  }

  ngOnInit(): void {
    this.obtenerMarcas();
    this.formdata = new FormGroup({
      nombre: new FormControl(this.modelo.nombre),
      marca_pk: new FormControl(this.modelo.marca_pk),
    });
  }
}
