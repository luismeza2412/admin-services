export interface InformacionContacto {
    direccion: {
      principal: Direccion;
      correspondencia: Direccion;
    };
    correoElectronico: string;
    sitioWeb: string;
    redesSociales: RedesSociales;
    telefonos: Telefonos;
  }
  
  export interface Direccion {
    calle: string;
    ciudad: string;
    pais: string;
  }
  
  export interface RedesSociales {
    instagram: string;
    linkedin: string;
  }
  
  export interface Telefonos {
    fijo: string;
    celular: string;
  }
  