import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Modelo } from 'src/app/models/Modelo';
import { ModelosService } from 'src/app/services/modelos.service';

@Component({
  selector: 'app-modelos-modal',
  templateUrl: './modelos-modal.component.html',
  styleUrls: ['./modelos-modal.component.css']
})
export class ModelosModalComponent implements OnInit {

  modelo: Modelo = {};
  @Input() public url: any;

  constructor(
    private activeModal: NgbActiveModal,
    private modelosService: ModelosService,
  ) { }

    closeModal(){
      this.activeModal.close();
    }

    detallar(url: string) {
      this.modelosService
      .getModelo(url)
      .subscribe((response) => (this.modelo = response));
    }


  ngOnInit(): void {
  }

}
