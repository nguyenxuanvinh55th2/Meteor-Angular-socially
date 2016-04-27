import angular from 'angular';
import angularMeteor from 'angular-meteor';
import {Meteor} from 'meteor/meteor';
import './partyAdd.html';
import {Parties} from '../../../api/parties/index.js';
class  PartyAdd {
  constructor() {
    this.party={}
  }
  submit(){
    //console.log('submit',this.party);
    this.party.owner = Meteor.user()._id;
    Parties.insert(this.party);
    if(this.done) {
      this.done();
    }
    this.reset();
  }
  reset() {
    this.party = {};
  }
}
const name='partyAdd';
export default angular.module(name,[
  angularMeteor
]).component(name,{
  templateUrl:'imports/ui/components/partyAdd/partyAdd.html',
  bindings: {
   done: '&?'
  },
  controllerAs:name,
  controller: PartyAdd
});
