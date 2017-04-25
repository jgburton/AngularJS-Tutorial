app.controller("MainController", function($scope){
  $scope.people = [
    { id: 0, name: 'Leon', age: 19, music: [ 'Rock', 'Metal', 'Dubstep', 'Electro' ], live: true },
    { id: 1, name: 'Chris', age: 20, music: [ 'Indie', 'Drumstep', 'Dubstep', 'Electro' ], live: true },
    { id: 2, name: 'Harry', age: 21, music: [ 'Rock', 'Metal', 'Thrash Metal', 'Heavy Metal' ], live: false },
    { id: 3, name: 'Allyce', age: 22, music: [ 'Pop', 'RnB', 'Hip Hop' ], live: true } ];
  $scope.newPerson = null;
  $scope.addNew = function() {
    if ($scope.newPerson != null && $scope.newPerson != "") {
      $scope.people.push({ id: $scope.people.length, name: $scope.newPerson, live: true, music: [] });
    }
  }
});
