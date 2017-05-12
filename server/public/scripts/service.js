myApp.service('HighFive', function(){

var counter = 0;


  this.counterGetter = function(){
    return counter;
  };

  this.counterSetter= function(){
    console.log('in counterSetter');
    counter++;
  };

  this.randGen = function(max,min){
    console.log('in randGen');
    return Math.floor(Math.random()*(max-min)) + min;
  };

  this.highFive = function(skill){
    console.log('in vmhighFive ');
    var quality = this.randGen(1,10);
      if(quality >= skill){
      return true;
        }else {
      return false;
    }
  };//end highFive
});







// this.counterGetter = function(){
//
//   return counter;
// };
//
// this.counterSetter = function(){
//   console.log('counterSetter running');
//   counter++;
// };
// this.getHighFives = function(){
//   console.log('in getHighFives');
//   return $http({
//     method:'GET',
//     url: '/info'
//   }).then(function success(response){
//     return response.data;
//   });
// };//end getHighFives


// });//end service
