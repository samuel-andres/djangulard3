import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Color } from '../../models/Color';
import Swal from 'sweetalert2';
import { ColoresService } from 'src/app/services/colores.service';

@Component({
  selector: 'app-colores-form',
  templateUrl: './colores-form.component.html',
  styleUrls: ['./colores-form.component.css'],
})
export class ColoresFormComponent implements OnInit {
  color: Color = {};

  formdata!: FormGroup;

  constructor(private coloresService: ColoresService) {}

  onClickSubmit(data: any) {
    this.color.nombre = data.nombre;
    this.coloresService.postColor(this.color).subscribe(
      (response) => this.tinyAlert('Color registrado.'),
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
