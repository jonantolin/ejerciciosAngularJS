angular.
  module('componentesApp'). // Nombre App
  component('saludoUsuario', { // nombre componente => para usarlo <saludo-usuario></saludo-usuario>
    template: 'Hello, {{$ctrl.user}}!',
    controller: function SaludoUsuarioController() {
      this.user = 'world';
    }
  });