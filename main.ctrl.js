// angular.module('app').controller("MainController", function(){
//   var vm = this;
//   vm.title = 'AngularJS Tutorial Example';
//   vm.searchInput = '';
//   vm.artists = [
//     {
//       name: 'Miles Davis',
//       genre: 'Jazz',
//       favourite: true
//     },
//     {
//       name: 'Tom Misch',
//       genre: 'New jazz',
//       favourite: true
//     },
//     {
//       name: 'J Dilla',
//       genre: 'Hip Hop',
//       favourite: false
//     },
//     {
//       name: 'Chet Faker',
//       genre: 'Hip Hop',
//       favourite: true
//     },
//     {
//       title: 'Snarky Puppy',
//       genre: 'Jazz/Neo Soul',
//       favourite:
//     }
//   ];
//
//   vm.orders = [
//     {
//       id: 1,
//       artist: 'Name Ascending',
//       key: 'name',
//       reverse: false
//     },
//     {
//       id: 2,
//       artist: 'Name Descending',
//       key: 'name',
//       reverse: true
//     }
//   ];
//   vm.order = vm.orders[0];
//   vm.new = {};
//   vm.addArtist = function() {
//     vm.artists.push(vm.new);
//     vm.new = {};
//   };
// });


angular.module('app').controller("MainController", function(){
    var vm = this;
    vm.title = 'AngularJS Tutorial Example';
    vm.searchInput = '';
    vm.shows = [
        {
            title: 'Game of Thrones',
            year: 2011,
            favorite: true
        },
        {
            title: 'Walking Dead',
            year: 2010,
            favorite: false
        },
        {
            title: 'Firefly',
            year: 2002,
            favorite: true
        },
        {
            title: 'Banshee',
            year: 2013,
            favorite: true
        },
        {
            title: 'Greys Anatomy',
            year: 2005,
            favorite: false
        }
    ];
    vm.orders = [
        {
            id: 1,
            title: 'Year Ascending',
            key: 'year',
            reverse: false
        },
        {
            id: 2,
            title: 'Year Descending',
            key: 'year',
            reverse: true
        },
        {
            id: 3,
            title: 'Title Ascending',
            key: 'title',
            reverse: false
        },
        {
            id: 4,
            title: 'Title Descending',
            key: 'title',
            reverse: true
        }
    ];
    vm.order = vm.orders[0];
    vm.new = {};
    vm.addShow = function() {
        vm.shows.push(vm.new);
        vm.new = {};
    };
});
