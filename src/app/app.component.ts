import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre:string = 'Capitan America';
  nombre2:string = 'pAuL mEjIa MenDozA';

  arreglo = [1,2,3,4,5,6,7,8,9,10];

  personajes  :string[] = ['Ironman', 'Spiderman', 'Thor', 'Loki', 'Groot'];
  PI          :number   = Math.PI;
  porcentaje  :number   = 0.235;
  salario     :number   = 1234.5;
  fecha       :Date     = new Date();
  activar     :boolean  = true;
  idioma      :string   = 'en';
  videoUrl    :string   = 'https://www.youtube.com/embed/z5svoighsdk';
  
  valorPromesa = new Promise<string>( (resolve) => {

    setTimeout(() => {
      resolve('llego la data');
    }, 4500);
  })

  heroe = {
    nombre: 'Logan',
    clave: 'wolverine',
    edad: 500,
    direccion: {
      calle: 'primera',
      casa: 20
    }
  }

}
