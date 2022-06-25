import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CepService {
  constructor(public httpClient: HttpClient) {}

  getEnderecoPorCEP(cep: string) {
    return this.httpClient
      .get('https://ws.apicep.com/cep.json?code=' + cep)
      .pipe(
        map((result: any) => {
          return {
            status: result.status,
            message: result.message,
            cidade: result.city,
            logradouro: result.address,
            bairro: result.district,
            estado: result.state,
          };
        })
      );
  }
}
