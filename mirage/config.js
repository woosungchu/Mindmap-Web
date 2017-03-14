import Mirage from 'ember-cli-mirage';

export default function() {

  //https://gist.github.com/code0100fun/f9b99b2a562702683602
  this.post('/api-token-auth', function(db, request){
    var params = JSON.parse(request.requestBody);

    if(params.username === "test" && params.password === "test1234") {
      return {
        "token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozLCJlbWFpbCI6IiIsInVzZXJuYW1lIjoidGVzdCIsImV4cCI6MTQ4OTE2MTk1Niwib3JpZ19pYXQiOjE0ODkxNjE2NTZ9.75zVE9KAovvgjInPL0XqiD7hiR0IaoMcKx0sRoWZ2IQ"
      };
    }else{
      let body = { errors: 'Email or password is invalid' };
      return new Mirage.Response(401, {}, body);
    }
  });

  this.post('/api-token-refresh', function(db, request){
    var params = JSON.parse(request.requestBody);

    return {
      "token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozLCJlbWFpbCI6IiIsInVzZXJuYW1lIjoidGVzdCIsImV4cCI6MTQ4OTE2MTk1Niwib3JpZ19pYXQiOjE0ODkxNjE2NTZ9.75zVE9KAovvgjInPL0XqiD7hiR0IaoMcKx0sRoWZ2IQ"
    };
  });

  this.namespace = '/api';

  this.get('/users',function(schema,request){
    return schema.db.users;
  });
  this.get('/users/:id',function(schema,request){
    return schema.db.users.find(request.params.id);
  });
  this.post('/users',function(schema,request){
    var attrs = JSON.parse(request.requestBody);//.maps;
    var user = schema.db.users.insert(attrs);
    return user;
  });


  this.get('/maps',function(schema,request){
    var author = request.queryParams.author;

    if(author){
      return schema.db.maps.where({'authorId':author});
    }else{
      return schema.db.maps;
    }
  });
  this.get('/maps/:id',function(schema,request){
    return schema.db.maps.find(request.params.id);
  });
  this.put('/maps/:id',function(schema,request){
    var attrs = JSON.parse(request.requestBody);
    var map = schema.db.maps.update(request.params.id,attrs);
    return map;
  });
  this.post('/maps',function(schema,request){
    var attrs = JSON.parse(request.requestBody);//.maps;
    var map = schema.db.maps.insert(attrs);
    return map;
  });

  this.post('/nodes',function(schema,request){
    var attrs = JSON.parse(request.requestBody);//.maps;
    var node = schema.db.nodes.insert(attrs);
    return node;
  });





}
