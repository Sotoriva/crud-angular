import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormularioService } from '../../../formulario.service';

@Component({
  selector: 'app-formulario-view',
  templateUrl: './formulario-view.component.html',
  styleUrls: ['./formulario-view.component.css'],
})
export class FormularioViewComponent implements OnInit {
  formulario: any;

  formularioGroup: FormGroup = new FormGroup({});

  constructor(
    public activeRouter: ActivatedRoute,
    public router: Router,
    public formularioService: FormularioService
  ) {}

  ngOnInit() {
    this.formularioService
      .obterFormularioPorId(this.getRouterId())
      .subscribe((result) => {
        this.formulario = result;

        this.formulario.questoes.forEach((questao) => {
          const formControl = new FormControl(
            null,
            questao.requerido ? Validators.required : []
          );

          this.formularioGroup.addControl(questao.titulo, formControl);
        });
      });
  }

  salvarResposta() {
    this.formularioService
      .salvarResposta(this.getRouterId(), this.formularioGroup.value)
      .subscribe(() => {
        this.router.navigate(['/formulario']);
      });
  }

  getRouterId() {
    return this.activeRouter.snapshot.params['id'];
  }
}
