export default function(server) {
  var user3 = server.create('user',{id:3,username:'test',password:'test1234'}),
      user1 = server.create('user',{id:1}),
      user2 = server.create('user',{id:2}),
      user4 = server.create('user',{id:4});

  server.createList('map',1,{author:user1,created:new Date()});
  server.createList('map',2,{author:user2,created:new Date()});
  server.createList('map',3,{author:user3,created:new Date()});
  server.createList('map',4,{author:user4,created:new Date()});
  server.loadFixtures('nodes');
  server.create('node', {map:1});
}
