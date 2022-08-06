import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Marca } from '../../models/Marca';
import Swal from 'sweetalert2';
import { MarcasService } from 'src/app/services/marcas.service';

@Component({
  selector: 'app-marcas-form',
  templateUrl: './marcas-form.component.html',
  styleUrls: ['./marcas-form.component.css'],
})
export class MarcasFormComponent implements OnInit {
  marca: Marca = {};

  formdata!: FormGroup;

  constructor(private marcasService: MarcasService) {}

  onClickSubmit(data: any) {
    this.marca.nombre = data.nombre;
    this.marcasService.postMarca(this.marca).subscribe(
      (response) => this.tinyAlert('Marca registrado.'),
      (err) => this.tinyAlert('Error.')
    );
    this.formdata.reset();
  }

  tinyAlert(msg: string) {
    Swal.fire(msg);
  }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      nombre: new FormControl(''),
    });
  }
}
