import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Modelo } from 'src/app/models/Modelo';
import { ModelosService } from 'src/app/services/modelos.service';
import { Marca } from '../../models/Marca';
import Swal from 'sweetalert2';
import { MarcasService } from 'src/app/services/marcas.service';

@Component({
  selector: 'app-modelos-form',
  templateUrl: './modelos-form.component.html',
  styleUrls: ['./modelos-form.component.css'],
})
export class ModelosFormComponent implements OnInit {
  modelo: Modelo = {};

  marcas: Marca[] = [];

  formdata!: FormGroup;

  constructor(
    private modelosService: ModelosService,
    private marcasService: MarcasService
  ) {}

  obtenerMarcas() {
    this.marcasService
      .getMarcas()
      .subscribe((response) => (this.marcas = response));
  }

  onClickSubmit(data: any) {
    this.modelo.nombre = data.nombre;
    this.modelo.marca_pk = data.marca_pk;
    this.modelosService.postModelo(this.modelo).subscribe(
      (response) => this.tinyAlert('Modelo registrado.'),
      (err) => this.tinyAlert('Error.')
    );
    this.formdata.reset();
  }

  tinyAlert(msg: string) {
    Swal.fire(msg);
  }

  ngOnInit(): void {
    this.obtenerMarcas();
    this.formdata = new FormGroup({
      nombre: new FormControl(''),
      marca_pk: new FormControl(''),
    });
  }
}
