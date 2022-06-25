import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormularioService } from '../../../formulario.service';

@Component({
  selector: 'app-formulario-view-resposta',
  templateUrl: './formulario-view-resposta.component.html',
  styleUrls: ['./formulario-view-resposta.component.css'],
})
export class FormularioViewRespostaComponent implements OnInit {
  resposta: any;

  page: number = 0;

  total: number = 0;

  constructor(
    public activeRouter: ActivatedRoute,
    public formularioService: FormularioService
  ) {}

  ngOnInit() {
    this.carregarResposta();
  }

  carregarResposta() {
    this.formularioService
      .obterResposta(this.getRouterId(), this.page)
      .subscribe((response: any) => {
        console.log(response);
        this.total = response.totalElements;
        this.resposta = response.content[0];
      });
  }

  getRouterId() {
    return this.activeRouter.snapshot.params['id'];
  }
}
