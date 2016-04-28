import {Meteor} from 'meteor/meteor';
import {Parties} from '../imports/api/parties/index.js';
import '../imports/api/users';

import {Email} from 'meteor/email';

var Cryptr = require('cryptr'),
    cryptr = new Cryptr('ntuquiz123');

//ma hoa thong tin nguoi dung
var encryptedString = cryptr.encrypt('{"name":"nguyen van a","email":"abc@gmail.com", "password":"123123123"}'),
    decryptedString = cryptr.decrypt(encryptedString);//giai ma thong tin
console.log(encryptedString);
console.log(decryptedString);
//? asmostphere tai khoan nguoi dung va cong mac dinh
process.env.MAIL_URL = 'smtp://nguyenxuanvinhict@gmail.com:7955132350@smtp.gmail.com:465/';

//chuyen huong den template
SSR.compileTemplate('emailText',Assets.getText("hello.html"));
//chuyen html
var html = SSR.render("emailText",{text:encryptedString});
console.log(html);
//cach gui email
Email.send({
  to: 'nguyenxuanvinh55th2@gmail.com',
  from: 'nguyenxuanvinhict@gmail.com',
  subject: 'test Email template with link',
  html:html
});
