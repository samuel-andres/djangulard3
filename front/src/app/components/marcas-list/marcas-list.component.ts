import { Component, OnInit } from '@angular/core';
import { MarcasService } from '../../services/marcas.service';
import { Marca } from '../../models/Marca';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MarcaModalComponent } from '../marca-modal/marca-modal.component';
import { MarcaEditModalComponent } from '../marca-edit-modal/marca-edit-modal.component';
@Component({
  selector: 'app-marcas-list',
  templateUrl: './marcas-list.component.html',
  styleUrls: ['./marcas-list.component.css'],
})
export class MarcasListComponent implements OnInit {
  marcas: Marca[] = [];
  faTrashCan = faTrashCan;
  faPenToSquare = faPenToSquare;
  public page = 1;
  public pageSize = 5;
  public maxSize = 5;

  constructor(
    private marcasService: MarcasService,
    public modalService: NgbModal
  ) {}

  listar() {
    this.marcasService
      .getMarcas()
      .subscribe((response) => (this.marcas = response));
  }

  eliminar(url: string) {
    this.marcasService.deleteMarca(url).subscribe(() => this.listar());
  }

  openModal(url: string) {
    const modalRef = this.modalService.open(MarcaModalComponent);
    modalRef.componentInstance.detallar(url);
  }

  editar(marca: Marca) {
    const modalRef = this.modalService.open(MarcaEditModalComponent);
    modalRef.componentInstance.detallar(marca);
    modalRef.closed.subscribe(() => {
      this.listar();
    });
  }

  ngOnInit(): void {
    this.listar();
  }
}
