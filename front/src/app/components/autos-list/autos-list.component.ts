import { Component, OnInit } from '@angular/core';
import { AutosService } from '../../services/autos.service';
import { Auto } from '../../models/Auto';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AutoModalComponent } from '../auto-modal/auto-modal.component';
import { AutoEditModalComponent } from '../auto-edit-modal/auto-edit-modal.component';

@Component({
  selector: 'app-autos-list',
  templateUrl: './autos-list.component.html',
  styleUrls: ['./autos-list.component.css'],
})
export class AutosListComponent implements OnInit {
  autos: Auto[] = [];
  faTrashCan = faTrashCan;
  faPenToSquare = faPenToSquare;

  constructor(
    private autosService: AutosService,
    public modalService: NgbModal
  ) {}

  listar() {
    this.autosService
      .getAutos()
      .subscribe((response) => (this.autos = response));
  }

  eliminar(url: string) {
    this.autosService.deleteAuto(url).subscribe(() => this.listar());
  }

  editar(auto: Auto) {
    const modalRef = this.modalService.open(AutoEditModalComponent);
    modalRef.componentInstance.detallar(auto);
    modalRef.closed.subscribe(() => {
      this.listar()
    })
  }

  openModal(url: string) {
    const modalRef = this.modalService.open(AutoModalComponent);
    modalRef.componentInstance.detallar(url);
  }

  ngOnInit(): void {
    this.listar();
  }
}
