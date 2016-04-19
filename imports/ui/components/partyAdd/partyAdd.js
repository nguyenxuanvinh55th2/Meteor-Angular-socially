import angular from 'angular';
import angularMeteor from 'angular-meteor';
import './partyAdd.html';
import {Parties} from '../../../api/parties.js';
class  PartyAdd {
  constructor() {
    this.party={}
  }
  submit(){
    //console.log('submit',this.party);
    Parties.insert(this.party);
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
  controllerAs:name,
  controller: PartyAdd
});
