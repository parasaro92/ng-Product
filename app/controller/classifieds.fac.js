myApp.factory("classifiedsFactory", function($http, $firebaseArray){

  var ref = new Firebase('https://product-display.firebaseio.com/');

  return {
    ref: $firebaseArray(ref)
  }
});


