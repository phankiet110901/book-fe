import { BookService } from "./../../../service/book.service.js";
import { BookAngularjsService } from "./../../../service/book-angularjs.service.js";

const bookService = new BookAngularjsService();
var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope, $http) {
  $scope.allBook = $http(bookService.getAllBook())
    .then((res) => {
      $scope.allBook = res.data;
    })
    .catch((err) => {
      console.log(err);
      alert("Something wrong");
    });

  $scope.allCate = $http(bookService.getAllCate())
    .then((res) => {
      $scope.allCate = res.data;
      console.log(res.data);
    })
    .catch((err) => {
      alert("Something wrong");
      console.log(err);
    });

  $scope.dataInput = {
    nameBook: "",
    priceBook: "",
    author: "",
    img: [],
    categoryID: "",
    review: "",
  };

  $scope.handleOnChange = function () {
    console.log($scope.dataInput);
  };

  $scope.handleAddBook = function () {
    console.log($scope.dataInput);
  };
});

app.filter("vnCurrency", () => (number) => {
  return new Intl.NumberFormat().format(number);
});

app.filter("validateRating", () => (rating) => {
  return rating ? rating : 0;
});

app.directive("fileModel", [
  "$parse",
  function ($parse) {
    return {
      restrict: "A",
      link: function (scope, element, attrs) {
        var model = $parse(attrs.fileModel);
        var modelSetter = model.assign;
        element.bind("change", function () {
          scope.$apply(function () {
            modelSetter(scope, element[0].files[0]);
          });
        });
      },
    };
  },
]);
