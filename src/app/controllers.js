import toastr from 'toastr'

const MainCtrl = ($scope, layout) => {
  $scope.layout = layout
}

MainCtrl.$inject = ['$scope', 'layout']

const HomeCtrl = ($scope, postHandler, layout) => {
  $scope.message = layout.message

  $scope.posts = null
  postHandler.getPosts() // Via JavaScript promise
    .then(response => {
      $scope.posts = response.body
      $scope.$apply()
    })
    .catch(error => toastr.error(error))

  $scope.post = null
  $scope.fetchPost = (id) => {
    postHandler.getPost(id) // Via Angular promise
      .then(response => ($scope.post = response.data))
      .then(() => ($scope.postId = ''))
      .catch(error => toastr.error(error.statusText))
  }

  $scope.deletePost = () => {
    $scope.post = null
    !$scope.post ? toastr.success('Post has been deleted') : null
  }
}

HomeCtrl.$inject = ['$scope', 'postHandler', 'layout']

const ContactCtrl = ($scope, info) => {
  $scope.info = info
}

ContactCtrl.$inject = ['$scope', 'info']

export default {
  MainCtrl,
  HomeCtrl,
  ContactCtrl
}
