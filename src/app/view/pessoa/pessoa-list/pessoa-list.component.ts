import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../../../pessoa.service';

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.css'],
})
export class PessoaListComponent implements OnInit {
  searchValue: string = '';

  pessoas: any[] = [];

  totalElements: number = 0;

  totalPage: number = 0;

  constructor(public pessoaService: PessoaService) {}

  ngOnInit(): void {
    this.carregarPessoas();
  }

  carregarPessoas(page: number = 1) {
    this.pessoaService
      .obterTodasPessoas(page - 1, this.searchValue)
      .subscribe((result: any) => {
        this.pessoas = result.content;
        this.totalElements = result.totalElements;
        this.totalPage = result.pageable.pageSize;
      });
  }

  remover(id: string) {
    this.pessoaService.removerPessoa(id).subscribe({
      next: (body) => {
        this.carregarPessoas();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
