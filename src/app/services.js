import { promiseWrapper, qWrapper } from './util'

function postHandler ($http) {
  const getPosts = () => promiseWrapper('http://jsonplaceholder.typicode.com/posts')
  const getPost = (id) => qWrapper($http, `http://jsonplaceholder.typicode.com/posts/${id}`)

  return {
    getPosts,
    getPost
  }
}

postHandler.$inject = ['$http']

export default {
  postHandler
}
