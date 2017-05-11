var should = require("should");
var YF = require("yf-fpm-client-nodejs").default;

YF.init({appkey: '123123', endpoint: 'http://localhost:9999/api'});

describe('Proxy', function(){
  it('forword function', function(done){
    var func = new YF.Func('proxy.forward');
    func.invoke({url: 'http://xuzhihui.imwork.net:80/cgi-bin/process.cgi', 
      params: {
        method: 'POST',
        mode: 'no-cors', //fix 405
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({"code":3112,"args":{"username":"abc","password":"d6ced3644c9ce0a898d9a311d2a4187b"},"user":"abc","id":5})
      }})
      .then(function(data){
        console.log(data);
        done();
      }).catch(function(err){
        done(err);
      });
  });
})
