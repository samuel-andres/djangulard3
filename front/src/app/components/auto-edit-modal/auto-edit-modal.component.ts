import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Auto } from 'src/app/models/Auto';
import { AutosService } from 'src/app/services/autos.service';
import { ModelosService } from 'src/app/services/modelos.service';
import { Color } from '../../models/Color'
import { Modelo } from '../../models/Modelo'
import { ColoresService } from '../../services/colores.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-auto-edit-modal',
  templateUrl: './auto-edit-modal.component.html',
  styleUrls: ['./auto-edit-modal.component.css'],
})
export class AutoEditModalComponent implements OnInit {

  auto: Auto = {};
  @Input() public url: any;

  colores: Color[] = []
  modelos: Modelo[] = []

  formdata!: FormGroup;


  constructor(
    private activeModal: NgbActiveModal,
    private autosService: AutosService,
    private coloresService: ColoresService,
    private modelosService: ModelosService,
  ) {}

  closeModal() {
    this.activeModal.close();
  }


  detallar(auto: Auto) {
    this.auto = auto;
  }


  editar(url: string) {
    this.autosService
    .putAuto(url, this.auto)
    .subscribe((response) => (this.auto = response));
    console.log(this.auto);
  }


  obtenerColores(){
    this.coloresService
    .getColores()
    .subscribe((response) => (this.colores = response));
  }

  obtenerModelos(){
    this.modelosService
    .getModelos()
    .subscribe((response) => (this.modelos = response));
  }

  onClickSubmit(data: any) {
    this.auto.patente = data.patente;
    this.auto.color_pk = data.color_pk;
    this.auto.modelo_pk = data.modelo_pk;
    console.log(this.auto)
    this.autosService
    .putAuto(this.auto.url!, this.auto)
    .subscribe(
      (response) => this.tinyAlert('Auto modificado.'),
      (err) => this.tinyAlert('Error.'))
    this.closeModal()
  }

  tinyAlert(msg: string) {
    Swal.fire(msg)
  }


  ngOnInit(): void {
    this.obtenerColores();
    this.obtenerModelos();
    this.formdata = new FormGroup({
      patente: new FormControl(this.auto.patente),
      color_pk: new FormControl(this.auto.color_pk),
      modelo_pk: new FormControl(this.auto.modelo_pk),
   });
  }
}

