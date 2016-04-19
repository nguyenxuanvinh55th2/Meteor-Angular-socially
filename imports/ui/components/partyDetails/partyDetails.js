import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import {Parties} from '../../../api/parties.js';
import './partyDetails.html';

class PartyDetails {
  constructor($stateParams,$scope,$reactive) {
    'ngInject';
    $reactive(this).attach($scope);
    this.helpers({
      party() {
        return Parties.findOne({
          _id: $stateParams.partyId
        });
      }
    });
  }
  //thuc hien viec update party 
  save() {
    Parties.update({
      _id: this.party._id
    }, {
      $set: {
        name: this.party.name,
        description: this.party.description
      }
    });
  }
}

const name = 'partyDetails';

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter
]).component(name, {
  templateUrl: 'imports/ui/components/partyDetails/partyDetails.html',
  controllerAs: name,
  controller: PartyDetails
})
//khai bao dinh tuyen neu duong dan la /parties/partyid thi no se dinh huong toi day
.config(config);

function config($stateProvider) {
 'ngInject';

 $stateProvider.state('partyDetails', {
   url: '/parties/:partyId',
   templateUrl: 'imports/ui/components/partyDetails/partyDetails.html',
   controllerAs: name,
   controller: PartyDetails
 });
}
