import { Component, OnInit } from '@angular/core';
import { ModelosService } from '../../services/modelos.service';
import { Modelo } from '../../models/Modelo';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModelosModalComponent } from '../modelos-modal/modelos-modal.component';
import { ModelosEditModalComponent } from '../modelos-edit-modal/modelos-edit-modal.component';
// import { AutoModalComponent } from '../auto-modal/auto-modal.component';
// import { AutoEditModalComponent } from '../auto-edit-modal/auto-edit-modal.component';

@Component({
  selector: 'app-modelos-list',
  templateUrl: './modelos-list.component.html',
  styleUrls: ['./modelos-list.component.css']
})
export class ModelosListComponent implements OnInit {

  modelos: Modelo[] = [];
  faTrashCan = faTrashCan;
  faPenToSquare = faPenToSquare;
  public page = 1;
  public pageSize = 5;
  public maxSize = 5;


  constructor(
    private modelosService: ModelosService,
    public modalService: NgbModal
  ) { }

  listar() {
    this.modelosService
      .getModelos()
      .subscribe((response) => (this.modelos = response));
  }

  eliminar(url: string) {
    this.modelosService.deleteModelo(url).subscribe(() => this.listar());
  }


  openModal(url: string) {
    const modalRef = this.modalService.open(ModelosModalComponent);
    modalRef.componentInstance.detallar(url);
  }

  editar(modelo: Modelo) {
    const modalRef = this.modalService.open(ModelosEditModalComponent);
    modalRef.componentInstance.detallar(modelo);
    modalRef.closed.subscribe(() => {
      this.listar();
    })
  }


  ngOnInit(): void {
    this.listar();
  }

}
