var myApp = angular.module('myApp', []);

myApp.controller('HighFiveController', function( HighFive){
console.log('in controller');

var vm = this;

vm.newHighFive = function(){
  console.log('in new high Five');
  vm.count = HighFive.counterGetter();
  vm.skill = HighFive.randGen(1,10);
  }; //end HighFive


vm.highFive = function(skill){
  console.log('in highFive function');
var success = HighFive.highFive(skill);
if(success){
  HighFive.counterSetter();
}
  vm.count = HighFive.counterGetter();

};

});// end controller


// vm.getHighFives = function(){
//   GetHighFives.getHighFives().then(function(data){
//     console.log('in vm.counting getHighFives function');
//     vm.fives= data;
//   });
// };
