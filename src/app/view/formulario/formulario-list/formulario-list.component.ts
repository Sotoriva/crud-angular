import { Component, OnInit } from '@angular/core';
import { FormularioService } from '../../../formulario.service';

@Component({
  selector: 'app-formulario-list',
  templateUrl: './formulario-list.component.html',
  styleUrls: ['./formulario-list.component.css'],
})
export class FormularioListComponent implements OnInit {
  formularios: any[] = [];

  constructor(public formularioService: FormularioService) {}

  ngOnInit() {
    this.carregarFormulario();
  }

  carregarFormulario(page: number = 1) {
    this.formularioService.obterTodosFormularios().subscribe((result: any) => {
      this.formularios = result.content;
    });
  }

  remover(id: string) {
    this.formularioService
      .removerFormulario(id)
      .subscribe(() => this.carregarFormulario());
  }
}
