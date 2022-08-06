import { Component, OnInit } from '@angular/core';
import { ColoresService } from '../../services/colores.service';
import { Color } from '../../models/Color';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ColorModalComponent } from '../color-modal/color-modal.component';
import { ColorEditModalComponent } from '../color-edit-modal/color-edit-modal.component';

@Component({
  selector: 'app-colores-list',
  templateUrl: './colores-list.component.html',
  styleUrls: ['./colores-list.component.css'],
})
export class ColoresListComponent implements OnInit {
  colores: Color[] = [];
  faTrashCan = faTrashCan;
  faPenToSquare = faPenToSquare;
  public page = 1;
  public pageSize = 5;
  public maxSize = 5;

  constructor(
    private coloresService: ColoresService,
    public modalService: NgbModal
  ) {}

  listar() {
    this.coloresService
      .getColores()
      .subscribe((response) => (this.colores = response));
  }

  eliminar(url: string) {
    this.coloresService.deleteColor(url).subscribe(() => this.listar());
  }

  openModal(url: string) {
    const modalRef = this.modalService.open(ColorModalComponent);
    modalRef.componentInstance.detallar(url);
  }

  editar(color: Color) {
    const modalRef = this.modalService.open(ColorEditModalComponent);
    modalRef.componentInstance.detallar(color);
    modalRef.closed.subscribe(() => {
      this.listar();
    });
  }

  ngOnInit(): void {
    this.listar();
  }
}
