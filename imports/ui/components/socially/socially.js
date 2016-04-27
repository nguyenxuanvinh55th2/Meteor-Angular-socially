import angular from 'angular';
import angularMeteor from 'angular-meteor';
import ngMaterial from 'angular-material';
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
  ngMaterial,
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
function config($locationProvider,$urlRouterProvider, $mdIconProvider){
  'ngInject';
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/parties');
  const iconPath =  '/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/';

 $mdIconProvider
   .iconSet('social',
     iconPath + 'svg-sprite-social.svg')
   .iconSet('action',
     iconPath + 'svg-sprite-action.svg')
   .iconSet('communication',
     iconPath + 'svg-sprite-communication.svg')
   .iconSet('content',
     iconPath + 'svg-sprite-content.svg')
   .iconSet('toggle',
     iconPath + 'svg-sprite-toggle.svg')
   .iconSet('navigation',
     iconPath + 'svg-sprite-navigation.svg')
   .iconSet('image',
     iconPath + 'svg-sprite-image.svg');
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
