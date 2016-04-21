import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import {Meteor} from 'meteor/meteor';
import './socially.html';
import { name as partiesList } from '../partiesList/partiesList';
import { name as navigation } from '../navigation/navigation';
import { name as partyDetails } from '../partyDetails/partyDetails';
class Socially {}

const name = 'socially';

// create a module socially
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  partiesList,
  navigation,
  partyDetails,
  'accounts.ui'
]).component(name, {
  templateUrl: 'imports/ui/components/socially/socially.html',
  controllerAs: name,
  controller: Socially
})
  .config(config)
  .run(run);
//dinh nghia layout va set /parties la main layout
function config($locationProvider,$urlRouterProvider){
  'ngInject';
  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/parties');
}
//bắt lỗi trong định tuyến. nếu có lỗi nà AUTH_REQUIED thì nó sẽ định tuyến đến parties(trang home) của mình
function run($rootScope, $state) {
  'ngInject';

  $rootScope.$on('$stateChangeError',function
    (event, toState, toParams, fromState, fromParams, error){
      if (error === 'AUTH_REQUIRED') {
        $state.go('parties');
      }
    }
  );
}
