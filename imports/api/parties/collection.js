import {Mongo} from 'meteor/mongo';
//export de truyen gia tri cua bien va su dung import de goi lai
export const Parties =new Mongo.Collection('parties');
Parties.allow({
  insert(userId, party) {
    return userId && party.owner === userId;
  },
  update(userId, party, fields, modifier) {
    return userId && party.owner === userId;
  },
  remove(userId, party) {
    return userId && party.owner === userId;
  }
});
