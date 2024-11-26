import { Component } from '@angular/core';
import { map } from 'rxjs';
import { InformacionContacto } from 'src/app/core/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {

  informacionContacto: InformacionContacto = 
    { 
      direccion: {
        principal: { calle: 'Carrera 52 # 91-66', ciudad: 'Medellín', pais: 'Colombia' },
        correspondencia: { calle: 'Carrera 52 # 91-66', ciudad: 'Envigado', pais: 'Colombia' }
      },
      correoElectronico: 'usuarioapellido@hotmail.com',
      sitioWeb: 'www.usuarioapellido.com',
      redesSociales: { instagram: 'www.instagram.com/usuarioapellido', linkedin: 'www.linkeind.com/usuarioapellido' },
      telefonos: { fijo: '+57 (4) 313-70-00', celular: '(312) 313-44-7' }
    }
  ;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.cargarInformacionContacto();
  }

  cargarInformacionContacto(): void {
    this.contactService.obtenerInformacionContacto().subscribe({
      next: (data) => {
        this.informacionContacto = data[0];
          
        console.log('infocontact', this.informacionContacto)
      },
      error: (err) => {
        console.error('Error al cargar la información de contacto:', err);
      },
    });
  }

}
