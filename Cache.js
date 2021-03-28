var redis = require('redis');
var client = redis.createClient();

client.on('connect', function() {
    console.log('connected');
});

client.set('pri1', 'Java');
client.set('pri2', 'Mule ESB');
client.set('pri3', 'Apache Kafka');
client.set('pri4', 'AgularJs');
client.set('pri5', 'Nodejs');
client.set('pri6', 'AWS');



client.get('pri2', function(err, reply) {
    console.log(reply);
});

client.get('pri4', function(err, reply) {
    console.log(reply);
});

client.get('pri6', function(err, reply) {
    console.log(reply);
});