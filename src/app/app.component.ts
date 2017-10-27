import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public pagina: string = 'recipe';

  carregarPagina(feature: string){
    this.pagina = feature;
  }
}
