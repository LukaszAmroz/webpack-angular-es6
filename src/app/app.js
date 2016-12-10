// Angular modules
import angular from 'angular'
import ngRoute from 'angular-route'
// App dependencies
import routes from './routes'
import controllers from './controllers'
import directives from './directives'
import services from './services'
import values from './values'
// Styles
import 'bootstrap/dist/css/bootstrap.css'
import 'toastr/build/toastr.css'

angular.module('app', [ngRoute])
  .config(function ($routeProvider, $locationProvider) {
    routes($routeProvider, $locationProvider)
  })
  .constant({routes})
  .value({...values})
  .controller({...controllers})
  .directive({...directives})
  .service({...services})
