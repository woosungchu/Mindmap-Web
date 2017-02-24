import Mirage from 'ember-cli-mirage';

export default function() {

  //https://gist.github.com/code0100fun/f9b99b2a562702683602
  this.post('/api-token-auth', function(db, request){
    var params = JSON.parse(request.requestBody);

    if(params.username === "test" && params.password === "test") {
      return {
        "access_token":"PA$$WORD",
        "token_type":"JWT",
        "token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJvcmlnX2lhdCI6MTQ4NjIwMTQ1NiwiZXhwIjoxNDg2MjAxNzU2LCJlbWFpbCI6InRlc3RAZW1haWwuY29tIiwidXNlcl9pZCI6NDN9.iM3d3KmOD66wDj8hsJXRu_gFC2CxSRXWv63EISmVDU8"
      };
    }else{
      let body = { errors: 'Email or password is invalid' };
      return new Mirage.Response(401, {}, body);
    }
  });

  this.namespace = '/api';

  this.get('/maps',function(schema,request){
    return schema.db.maps;
  });

  this.get('/maps/:id',function(schema,request){
    return schema.db.maps.find(request.params.id);
  });

  this.post('/maps',function(schema,request){
    var attrs = JSON.parse(request.requestBody);//.maps;
    var map = schema.db.maps.insert(attrs);

    return map;
  });

  this.post('/users',function(schema,request){
    var attrs = JSON.parse(request.requestBody);//.maps;
    var user = schema.db.maps.insert(attrs);

    return user;
    //schema.db.users.insert(JSON.parse(request.requestBody).user)
  });



}
