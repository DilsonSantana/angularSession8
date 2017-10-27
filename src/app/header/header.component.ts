import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() navigation = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  navegar(feature: string){
    this.navigation.emit(feature);
  }


}
