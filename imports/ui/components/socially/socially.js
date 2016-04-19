import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
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
  partyDetails
]).component(name, {
  templateUrl: 'imports/ui/components/socially/socially.html',
  controllerAs: name,
  controller: Socially
})
//dinh nghia layout va set /parties la main layout
.config(config);
function config($locationProvider,$urlRouterProvider){
  'ngInject';
  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/parties');
}
