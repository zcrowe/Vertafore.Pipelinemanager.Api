var $ = require('jquery');
require('datajs');
var $data = require('jaydata');
require('/Users/zaidcrowe/Dropbox/node/deps/vertafore.js');

var oProviderConfig = {
    name: 'oData',
    oDataServiceHost: 'https://producer.services.alpha.vertafore.com/v1',
    enableJSONP: true
};

Vertafore = new Vertafore.Services.Producer.ProducerDataSourceContainer(oProviderConfig);

Vertafore.prepareRequest = function(r) {

    r[0].headers['VSAML'] = "<EncryptedAssertion xmlns=\"urn:oasis:names:tc:SAML:2.0:assertion\"><xenc:EncryptedData Type=\"http:\/\/www.w3.org\/2001\/04\/xmlenc#Element\" xmlns:xenc=\"http:\/\/www.w3.org\/2001\/04\/xmlenc#\"><xenc:EncryptionMethod Algorithm=\"http:\/\/www.w3.org\/2001\/04\/xmlenc#aes256-cbc\" \/><KeyInfo xmlns=\"http:\/\/www.w3.org\/2000\/09\/xmldsig#\"><e:EncryptedKey xmlns:e=\"http:\/\/www.w3.org\/2001\/04\/xmlenc#\"><e:EncryptionMethod Algorithm=\"http:\/\/www.w3.org\/2001\/04\/xmlenc#rsa-oaep-mgf1p\"><DigestMethod Algorithm=\"http:\/\/www.w3.org\/2000\/09\/xmldsig#sha1\" \/><\/e:EncryptionMethod><KeyInfo><o:SecurityTokenReference xmlns:o=\"http:\/\/docs.oasis-open.org\/wss\/2004\/01\/oasis-200401-wss-wssecurity-secext-1.0.xsd\"><X509Data><X509IssuerSerial><X509IssuerName>CN=VeriSign Class 3 International Server CA - G3, OU=Terms of use at https:\/\/www.verisign.com\/rpa (c)10, OU=VeriSign Trust Network, O=\"VeriSign, Inc.\", C=US<\/X509IssuerName><X509SerialNumber>99184928184165497985847374047442978212<\/X509SerialNumber><\/X509IssuerSerial><\/X509Data><\/o:SecurityTokenReference><\/KeyInfo><e:CipherData><e:CipherValue>npiwOOPEHj5iaGQ5knki4ak23fJTf4x5ki65xfYh41eg7B36Fvh+MfBMc+PWrGGdcbilK6YB3AfO+O0JP6\/xXMFHH9x1RWZeBxGFVHPs831x9MBkPlN\/w8ySieMKhe7qy6P63YFPVUMkEG+gwrjHPFiiJ3L\/Y8tDjXD3FK+OJHyzUOLgLxt9VWCo37+uGGJt\/7s9Q2sH5bxhW0+ACMNBci6g8f7MzGoC\/V6LzVkkzckOYEIPL4lRJ2GNWDkD9qbXPBTx3xuHRjuRUNPNeC0a\/au\/CCWgAb1C9ugL0GtXs\/raoFQFLK8r1hw\/WW9cFk0DroHwsJqcC\/UHQ6ZEJWQF0w==<\/e:CipherValue><\/e:CipherData><\/e:EncryptedKey><\/KeyInfo><xenc:CipherData><xenc:...K5cggmkko3udiw98OY2mOsxH+wJAH7xLyKlhZkHE1TYRKQ6lNQsnHu\/Ek5VR0fjdlWWrFOrK5MASMPaPONSZUd1GYFK\/Ma6qwUh1EtCkSHLh+Zx2ERIN4uXohtQewJTPKbMlD\/s6NIEJvf+Cg4\/0xGIw92BohmfQ0jJ3MznixdCZP1nqOFkjorlsZLcIMpmOMtkm2ds8eqPb8xEKxdmtpK2taxpz634q65yP1cLTVWgCwGxNMiseKwaH9LuerCxQTdO6V7T8glU9I8KZA9eZG6F\/J7B5O2kK\/JsidSLPm+QJrLp4e9Tvk6v9RommnWgALsM4CS+hBotn09QMpj0ziZhsZ5ouOmvD8MgpsavYXxElQq45HoyCOC4cS8xw60\/tAyCiT3uMfqo76nJZBII2J6Vu1\/edEnTPoo7yUMvEbhkO28pBEQoVbfYDr5cNiMl1MzWOzLf4hMgPwjRoDSpVoWh2\/97eogsSnkGRW5SsRYDimpZMUZqUByS26KvW5\/5klHFTQPDRZNrb1b3++o+eXFGFaQ3pXXLD9xvYtjZERGTW9fu6DtGn9nlJ+M010Tw7mq+n1ckQNDHBc+rFRbellPtDaZAoJ5D62M8ABmMF35R9XMmBGPGsnLNh7f9UX4E2yJxPq4TAuRwy7i2YY0Ns2PdjZ\/RgbrZZFZ91XyuUFmUxGNerIv0+W+Sg\/06ZPSNAnVDdPRmSfYQ0VU2LiFqUwR2A1IRGt2ysbNwfrkmVrHyj5Ozigza77sCh4xjm6fsEaqfMF4JcItmCA+1fFHuLIGsmhxi\/q59D0slnzOfRU1lDdtgrvqpW72kRg+w9sxBCHaoRqM+zJvgbzcRz+PvY6rGQ6aJw9Ya7BBU1\/MQgTySTfWT7PnZhrlLdlEtYOskocyjCd1BOFW7sjFbsxHwQJjyPtL+cluFTxU15RCQruajkTY8bjJxKZ9pK2wvuUW6oXxg86IUjPZkEYj8Zg\/nJob4UqDXPWDeTv3DA8Xn8smVr0tH6C2yH4avkAu\/3oTqg5WfXcAmrEgmWBTOhDkNifoZSmmSnn5ekTP0i7mv7tSSNLA\/LtxTOZ4pHux0B7EtFVFZQbz\/DU3pVVAB4S0c5vbEJSxHVQRDQhC9U10ehnWxvwQ5Fh4XzenqxTAY1+q\/fHlenX\/Pf7OTIY5HfrYJUgoJhI0d1WBCPTdqLDoih67QNn61CkPtMJ3GBGHDiAWaK\/S1SqnoOyVSZHM7QnFgyyyCXmqAjuebGfog\/gzcC11DF2Ki8F+iZsezEEmjBENthTDegg+LruKP0iLY2jeKB2zRaKcy2pk0e4KtHRwaxN2nQ==<\/xenc:CipherValue><\/xenc:CipherData><\/xenc:EncryptedData><\/EncryptedAssertion>",
    r[0].headers['DataServiceVersion'] = "2.0;NetFx",
    r[0].headers['MaxDataServiceVersion'] = "2.0;NetFx"

};

Vertafore.onReady(function () {

Vertafore.Users.map(function (user) {
    return {
        Name: user.FullName,
    }
});



    // Vertafore.Users.forEach(function (User) {
    //         console.log(user.FullName);        
    // });
        

    /*    
        var newUser = new Object();
        newUser.Id = "100";
        newUser.BranchId = "894";
        newUser.IsCurrent = true;
        newUser.HasAcceptedEULA = true;
        newUser.FullName = "Batman";
        
        data.Users.add(newUser);

        console.log(data.Users);
        
        data.Users.saveChanges(function(){
            console.log('Saved!')
        });
     */
    
});

