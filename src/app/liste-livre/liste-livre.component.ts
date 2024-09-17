import { Component, OnInit } from '@angular/core';
import { Livre } from '../livre.interface';
import { BehaviorSubject, Observable, of, Subject, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-liste-livre',
  templateUrl: './liste-livre.component.html',
  styleUrls: ['./liste-livre.component.scss']
})
export class ListeLivreComponent implements OnInit {
  listeLivre:Livre[]=[];
  private databaseUrl = './assets/book.json';
  private fluxLivre$=new BehaviorSubject<any>(undefined);
  public requete$: Observable<any> = of(null);

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.requete$ =this.http.get<Livre>(this.databaseUrl).pipe(
      tap(value => this.fluxLivre$.next(value)));
    this.requete$.subscribe(tableau=> {
      tableau.forEach((instance:Livre)=> this.listeLivre.push(instance));
      });
  }


}
