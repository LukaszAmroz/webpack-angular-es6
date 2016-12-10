const routes = ($routeProvider, $locationProvider) => {
  $locationProvider.html5Mode(true)
  $routeProvider
    .when('/home', {
      template: require('./templates/home.html'),
      controller: 'HomeCtrl'
    })
    .when('/contact', {
      template: require('./templates/contact.html'),
      controller: 'ContactCtrl'
    })
    .otherwise({
      redirectTo: '/home'
    })
}

export default routes
