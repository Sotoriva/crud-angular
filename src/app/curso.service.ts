import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CursoService {
  apiURL: string = 'https://crud-crud2.herokuapp.com/crud/curso-19584942';

  constructor(public httpClient: HttpClient) {}

  obterCursoPorId(id: string) {
    return this.httpClient.get(this.apiURL + '/' + id);
  }

  obterTodosCursos(page: number, search: string) {
    return this.httpClient.get(
      this.apiURL + `?page=${page}&size=5&search=${search}`
    );
  }

  salvarCurso(curso: any) {
    return this.httpClient.post(this.apiURL, curso);
  }

  atualizarCurso(curso: any) {
    return this.httpClient.put(this.apiURL + '/' + curso.id, curso);
  }

  removerCurso(id: string) {
    return this.httpClient.delete(this.apiURL + '/' + id);
  }
}
