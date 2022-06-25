import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PessoaService {
  apiURL: string = 'https://crud-crud2.herokuapp.com/crud/pessoa';

  constructor(public httpClient: HttpClient) {}

  obterPessoaPorId(id: string) {
    return this.httpClient.get(this.apiURL + '/' + id);
  }

  obterTodasPessoas(page: number, search: string) {
    return this.httpClient.get(
      this.apiURL + `?page=${page}&size=5&search=${search}`
    );
  }

  salvarPessoa(pessoa: any) {
    return this.httpClient.post(this.apiURL, pessoa);
  }

  atualizarPessoa(pessoa: any) {
    return this.httpClient.put(this.apiURL + '/' + pessoa.id, pessoa);
  }

  removerPessoa(id: string) {
    return this.httpClient.delete(this.apiURL + '/' + id);
  }
}
