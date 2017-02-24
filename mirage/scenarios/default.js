export default function(server) {
  var user1 = server.create('user'),
      user2 = server.create('user'),
      user3 = server.create('user'),
      user4 = server.create('user');

  server.createList('map',5, { author : user1 , title:'Title1'});
  server.createList('map',5, { author : user2 , title:'Title2'});
  server.createList('map',5, { author : user3 , title:'Title3'});
  server.createList('map',5, { author : user4 , title:'Title4'});
}
