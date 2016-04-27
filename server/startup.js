import {Meteor} from 'meteor/meteor';
import {Parties} from '../imports/api/parties/index.js';
import '../imports/api/users';

import {Email} from 'meteor/email';

var Cryptr = require('cryptr'),
    cryptr = new Cryptr('ntuquiz123');


var encryptedString = cryptr.encrypt('{"name":"nguyen van a","email":"abc@gmail.com", "password":"123123123"}'),
    decryptedString = cryptr.decrypt(encryptedString);
console.log(encryptedString);
process.env.MAIL_URL = 'smtp://nguyenxuanvinhict@gmail.com:7955132350@smtp.gmail.com:465/';

// Email.send({
//   to: 'duong@s2corp.vn',
//   from: 'nguyenxuanvinhict@gmail.com',
//   subject: 'test Email',
//   text: encryptedString
// });
