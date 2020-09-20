# locusnine-poormanrediscluster
DOCKERFILE: It will be used to build the container and run it, It consist the installation of node and redis cluster and redis server using npm install command.
It also calls the redis-cluster.js file to connect the app and run the poorman cluster.

docker-compose.yml: the Dockerfile is embedded and also have added the redis image to install redis image and run on the port default : 6379.
Also, it will configure the redis-server by running command "redis-server"

Config: It consist of the redis.conf file, having configuration for the redis server.

redis-cluster.js: This javascript code consist of the poorManClusterClient function, calling the required cluster and linked to index.js file which will be generated after the container is build and redis-cluster is installed. 

As in PoorManClusterCLient, you can't supply a link of one node of the cluster (maybe because it's not a real cluster), I have supplied the links to all the nodes, which you can see in the redis-clusetr.js, under var cluster [] array defined.

You will notice, I have specified the interval of slots allocated to each node, as 16384 slots must be covered, otherwise we can run in some nasty errors.

For handling failures, have embedded the Pub/Sub code too in the redis-cluster.js file marked under #Pub/Sub, so that the subscribed channels are not lost.

Other notes

This is of course not intended for production and has probably stupid (not bad, stupid) code inside, but I just needed something that works because as per my understanding there are no modules to work with Redis Clusters yet.
