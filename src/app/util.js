import superagent from 'superagent'

// Nativ JavaScript promise wrapper.
// It requires the use of $scope.apply
export const promiseWrapper = (address) => (
  new Promise(function (resolve, reject) {
    superagent
      .get(address)
      .end((error, response) => error ? reject(error) : resolve(response))
  })
)

// Angular promise wrapper
export const qWrapper = (http, address) => (
  http.get(address)
    .then((response, error) => response || error)
)
