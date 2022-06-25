import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from '../../../curso.service';
import { MyValidators } from '../../../utils/myvalidators';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.css'],
})
export class CursoFormComponent implements OnInit {
  constructor(
    public formBuilder: FormBuilder,
    public activeRouter: ActivatedRoute,
    public cursoService: CursoService,
    public router: Router
  ) {}

  ngOnInit() {}

  grades: grade[] = [];

  editando: boolean;

  buttonLoading: boolean;

  cursoFormGroup = this.formBuilder.group({
    id: [],
    nome: ['', [Validators.required]],
    cargaHoraria: [
      '',
      [Validators.required, Validators.min(40), Validators.max(999)],
    ],
    dataInicio: ['', [Validators.required]],
    dataFim: ['', [Validators.required]],
    grade: [[]],
  });

  gradeGroup = this.formBuilder.group({
    materia: ['', [Validators.required]],
    resumo: [null, [Validators.max(250)]],
  });

  getRouterId() {
    return this.activeRouter.snapshot.params['id'];
  }

  adicionar() {
    this.cursoService
      .salvarCurso(this.cursoFormGroup.value)
      .subscribe((result) => {
        this.router.navigate(['/curso']);
      });
  }

  atualizar() {
    this.cursoService
      .atualizarCurso(this.cursoFormGroup.value)
      .subscribe((result) => {
        this.router.navigate(['/curso']);
      });
  }

  adicionarGrade() {
    if (this.gradeGroup.valid) {
      this.cursoFormGroup.get('grade').value.push(this.gradeGroup.value);
      this.gradeGroup.reset();
    }
  }

  removerGrade() {}
}

interface grade {
  materia: String;
  resumo: String;
}
