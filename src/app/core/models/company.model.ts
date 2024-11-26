export interface Empresa {
    nombre: string;
    departamentos: string[];
    fechaCreacion: string; // formato "YYYY-MM-DD"
    direccion: DireccionEmpresa;
    telefonos: TelefonosEmpresa;
    sitioWeb: string;
  }
  
  export interface DireccionEmpresa {
    calle: string;
    edificio: string;
    distrito: string;
    piso: number;
    ciudad: string;
    pais: string;
  }
  
  export interface TelefonosEmpresa {
    fijo: string;
    fax: string;
  }
  