import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Produto} from "../modelo/Produto";

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private url:string = 'http://localhost:8080';

  constructor(private http:HttpClient) { }

  listarTodosProdutos():Observable<Produto[]>{
    return this.http.get<Produto[]>(this.url);
  }

  cadastrar(obj:Produto):Observable<Produto> {
    return this.http.post<Produto>(this.url, obj);
  }

  editar(obj:Produto):Observable<Produto> {
    return this.http.put<Produto>(this.url, obj);
  }

  remover(id:number):Observable<void>{
    return this.http.delete<void>(this.url + '/' + id);
  }



}
