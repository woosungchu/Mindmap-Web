export default function(server) {
  var user1 = server.create('user'),
      user2 = server.create('user'),
      user3 = server.create('user'),
      user4 = server.create('user');

  server.createList('map',10);
  server.loadFixtures('nodes');
  server.create('node', {map:1});
}
