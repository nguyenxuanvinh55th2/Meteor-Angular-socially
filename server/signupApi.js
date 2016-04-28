import {Parties} from '../imports/api/parties/index.js';
//Restivus to api khoi tao
var Api = new Restivus({
    useDefaultAuth: true,
    prettyJson: true
  });

  var Cryptr = require('cryptr'),
      cryptr = new Cryptr('ntuquiz123');

Api.addRoute('signup/:info', {authRequired: false}, {
    get: function () {
      var decryptedString = cryptr.decrypt(this.urlParams.info);
    //  console.log(decryptedString);
      var party = JSON.parse(decryptedString);

      Parties.insert(party);
        return {
          statusCode: 200,
          messages: decryptedString
        };
    }
  });
