var RedisCluster = require('redis-cluster').poorMansClusterClient();
var assert = require('assert');

//var cluster = [ ]
//cluster.push({name: 'redis01', link: '127.0.0.1:6379', slots: [   0, 5462], options: {max_attempts: 5}});
//cluster.push({name: 'redis02', link: '127.0.0.1:7379', slots: [5463, 12742], options: {max_attempts: 5}});
//cluster.push({name: 'redis03', link: '127.0.0.1:8379', slots: [12743, 16384], options: {max_attempts: 5}});
var cluster = [
  {name: 'redis01', link: '127.0.0.1:6379', slots: [   0, 5462]},
  {name: 'redis02', link: '127.0.0.1:7379', slots: [5463, 12742]},
  {name: 'redis03', link: '127.0.0.1:8379', slots: [12743, 16384]}
];

var r = poorMansClusterClient(cluster);

r.set('foo', 'bar', function (err, reply) {
  if (err) throw err;
  assert.equal(reply,'OK');

  r.get('foo', function (err, reply) {
    if (err) throw err;
    assert.equal(reply, 'bar');
  });
});

//Pub_Sub 
new redisPubSub.clusterInstance(firstLink, function (err, r) {
  r.subscribe('channel');

  for( var link in redisPubSub.redisLinks )
  {
    redisPubSub.redisLinks[link].link.on('message', function (channel, message) {
        // New message in a channel, necessarily 'channel' here because it's the only one we're subscribed to.
    });
  }
});

