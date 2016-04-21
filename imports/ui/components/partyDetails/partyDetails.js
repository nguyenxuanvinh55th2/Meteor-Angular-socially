import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import { Meteor } from 'meteor/meteor';
import {Parties} from '../../../api/parties/index.js';
import './partyDetails.html';

class PartyDetails {
  constructor($stateParams,$scope,$reactive) {
    'ngInject';
    $reactive(this).attach($scope);
    this.subscribe('parties');
    this.subscribe('users');
    this.helpers({
      party() {
        return Parties.findOne({
          _id: $stateParams.partyId
        });
      },
      users() {
        return Meteor.users.find({});
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
        description: this.party.description,
        public: this.party.public
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
   template: '<party-details></party-details>',
   //kiem tra xem nguoi dung da đăng nhập chưa nếu chưa đăng nhập thì trả về lối là AUTH_REQUIRED để sử lý
   resolve: {
     currentUser($q){
       if (Meteor.userId() === null) {
          return $q.reject('AUTH_REQUIRED');
        } else {
          return $q.resolve();
        }
     }
   }
 });
}
