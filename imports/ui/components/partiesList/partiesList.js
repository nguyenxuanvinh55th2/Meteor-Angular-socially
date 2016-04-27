import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './partiesList.html';
import {Parties} from '../../../api/parties/index.js';
import {name as partyAdd} from '../partyAdd/partyAdd';
import {name as partyRemove} from '../partyRemove/partyRemove';
import { name as PartyAddButton } from '../partyAddButton/partyAddButton';
import uiRouter from 'angular-ui-router';
class PartiesList {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);
    this.subscribe('parties');
    this.helpers({
      parties() {
        return Parties.find({});
      }
    });
  }
  //bat su kien xoa 1 party
  // remove(party){
  //   Parties.remove(party._id);
  // }
}

const name = 'partiesList';

// create a module
export default angular.module(name, [
  angularMeteor,
  partyAdd,
  partyRemove,
  PartyAddButton
]).component(name, {
  templateUrl: 'imports/ui/components/partiesList/partiesList.html',
  controllerAs: name,
  controller: PartiesList
})
.config(config);
function config($stateProvider){
  'ngInject';
  $stateProvider
    .state('parties', {
      url: '/parties',
      template: '<parties-list></parties-list>'
    });
}
