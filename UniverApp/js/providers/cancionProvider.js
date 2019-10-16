function CancionProvider($http){

    console.log('cancion Provider');
    const ENDPOINT = "http://localhost:8080/cancion/";
  
    this.listar = function(){
      let url = ENDPOINT;
      console.log('CancionProvider listar' + ENDPOINT);
      return $http.get(url);
    } // listar
  
   
    this.detalle = function (idCancion){
      let url = ENDPOINT + idCancion;
      console.log('CancionProvider detalle');
      return $http.get(url);
    }
  
     
    this.eliminar = function (idCancion){
      let url = ENDPOINT + idCancion;
      console.log('CancionProvider eliminar');
      return $http.delete(url);
    }
  
  
    this.crear = function (nombreCancion){
      let data = {"nombre": nombreCancion};
      let url = ENDPOINT;
      console.log('CancionProvider crear');
      return $http.post(url, data);
    }
   
  
    this.modificar = function (cancion){
      let url = ENDPOINT + cancion.id;
      
      return $http.put(url, cancion);
    }
    
  
  
  }