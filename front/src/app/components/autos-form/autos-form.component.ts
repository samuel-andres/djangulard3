import { Component, OnInit } from '@angular/core';
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
  selector: 'app-autos-form',
  templateUrl: './autos-form.component.html',
  styleUrls: ['./autos-form.component.css'],
})
export class AutosFormComponent implements OnInit {
  
  auto: Auto = {};

  colores: Color[] = []
  modelos: Modelo[] = []

  formdata!: FormGroup;

  constructor(
    private coloresService: ColoresService,
    private modelosService: ModelosService,
    private autosService: AutosService,
  ) {}

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
    .postAuto(this.auto)
    .subscribe(
      (response) => this.tinyAlert('Auto registrado.'),
      (err) => this.tinyAlert('Error.'))
    this.formdata.reset()
  }

  tinyAlert(msg: string) {
    Swal.fire(msg)
  }


  ngOnInit(): void {
    this.obtenerColores();
    this.obtenerModelos();
    this.formdata = new FormGroup({
      patente: new FormControl(""),
      color_pk: new FormControl(""),
      modelo_pk: new FormControl(""),
   });
  }
}
