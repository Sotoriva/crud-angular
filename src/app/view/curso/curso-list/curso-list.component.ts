import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../../curso.service';

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.css'],
})
export class CursoListComponent implements OnInit {
  constructor(public cursoService: CursoService) {}

  ngOnInit() {}

  searchValue: string = '';

  cursos: any[] = [];

  totalElements: number = 0;

  totalPage: number = 0;

  carregarCursos(page: number = 1) {
    this.cursoService
      .obterTodosCursos(page - 1, this.searchValue)
      .subscribe((result: any) => {
        this.cursos = result.content;
        this.totalElements = result.totalElements;
        this.totalPage = result.pageable.pageSize;
      });
  }
}
