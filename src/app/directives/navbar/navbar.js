const navbar = () => {
  return {
    restrict: 'AE',
    template: require('./navbar.html'),
    scope: {
      data: '=data'
    }
  }
}

export default navbar
