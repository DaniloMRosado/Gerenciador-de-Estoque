import { Component } from '@angular/core';
import {JsonPipe, NgForOf, NgIf} from "@angular/common";
import {Produto} from "../modelo/Produto";
import {ProdutoService} from "../servico/produto.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    JsonPipe,
    FormsModule
  ],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

  produto = new Produto();

  btnCadastro:boolean = true;

  tabela:boolean = true;

  produtos:Produto[] = [];

  constructor(private servico:ProdutoService) {
  }

  listarTodosProdutos():void{
    this.servico.listarTodosProdutos()
      .subscribe(retorno => this.produtos = retorno);
  }

  cadastrar():void{
    this.servico.cadastrar(this.produto)
      .subscribe(retorno => {

        this.produtos.push(retorno);

        this.produto = new Produto();

        alert('Produto cadastrado com sucesso!');

      });
  }

  selecionarProduto(posicao:number):void{

    this.produto = this.produtos[posicao];

    this.btnCadastro = false;

    this.tabela = false;

  }

  editar():void{

    this.servico.editar(this.produto)
      .subscribe(retorno => {

        let posicao = this.produtos.findIndex(obj => {
          return obj.id == retorno.id;
        });

        this.produtos[posicao] = retorno;

        this.produto = new Produto();

        this.btnCadastro = true;

        this.tabela = true;

        alert('Produto alterado com sucesso!');

      })

  }

  remover():void{

    this.servico.remover(this.produto.id)
      .subscribe(retorno => {

        let posicao = this.produtos.findIndex(obj => {
          return obj.id == this.produto.id;
        });

        this.produtos.splice(posicao, 1);

        this.produto = new Produto();

        this.btnCadastro = true;

        this.tabela = true;

        alert('Produto removido com sucesso!');

      })

  }

  cancelar():void {

    this.produto = new Produto();

    this.btnCadastro = true;

    this.tabela = true;

  }

  ngOnInit() {
    this.listarTodosProdutos();
  }
}
