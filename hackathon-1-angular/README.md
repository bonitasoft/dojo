# Hackathon 1 - AngularJS

Bonitasoft R&amp;D first Hackathon on AngularJS

## AngularJS (tested with 1.3.0-beta)
[Website](https://angularjs.org/)

[API Reference](https://docs.angularjs.org/api)

## Webstorm 8
[Download Page](http://www.jetbrains.com/webstorm/download/)

## Maven 3 (tested with Maven 3.0.4)
[Download Page](http://maven.apache.org/download.cgi)

## Bonita BPM REST API (tested with 6.3.0)
[API Reference](http://documentation.bonitasoft.com/product-bos-sp/web-rest-api-1)

## Getting Started

### Starting development servers
While this Angular applications is purely client-side code, it is better to serve it from a HTTP server.
It avoids security restrictions from modern browsers (such as AJAX calls considered as Cross-Site-Scripting attacks).

In this application we will need 2 servers:
#### Jetty
This server will serve the Angular JS application itself. HTML, Javascript, CSS and images.
Jetty is also configured as a proxy for Bonita BPM API calls.

```
 mvn jetty:run
```

If the command is successful you should get a message on your console stating that the server is started on port 8081:

```
2014-05-11 11:48:33.672:INFO:oejs.AbstractConnector:Started SocketConnector@0.0.0.0:8081
[INFO] Started Jetty Server
```

#### Bonita BPM Tomcat Bundle
This server contains the bonita.war web application with existing features. It hosts the Web Rest APIs.
This bundle is downloaded from local network and unzipped under target/bundle directory. It requires a valid license for
 your computer to be started. The bundle comes with a set of license for most of the R&amp;D developers.

```
 catalina.(sh | bat) run
```

If the command is successful you should get a message on your console stating that the server is started on port 8080:

```
Infos: Démarrage de Coyote HTTP/1.1 sur http-8080
[...]
Infos: Server startup in 21920 ms
```

### Login to the application
Once both servers are started you can connect to the application using the following URL and walter.bates:bpm.
[http://localhost:8081/](http://localhost:8081/)

Once logged in, if you can list [Users](http://localhost:8081/#/admin/users) and [Groups](http://localhost:8081/#/admin/groups) then you are ready to **_Hack_**!

### Probably most useful keywords you will need
#### Inside views (templates)
* [ng-app] (https://docs.angularjs.org/api/ng/directive/ngApp)
* [ng-controller](https://docs.angularjs.org/api/ng/directive/ngController)
* [ng-include](https://docs.angularjs.org/api/ng/directive/ngInclude)
* [ng-repeat](https://docs.angularjs.org/api/ng/directive/ngRepeat)
* [ng-if] (https://docs.angularjs.org/api/ng/directive/ngIf)
* [ng-show](https://docs.angularjs.org/api/ng/directive/ngShow), [ng-hide](https://docs.angularjs.org/api/ng/directive/ngHide)
* [|filter](https://docs.angularjs.org/api/ng/filter/filter)

#### Inside controllers (Javascript)
* [$http](https://docs.angularjs.org/api/ng/service/$http)
* [$routeProvider](https://docs.angularjs.org/api/ngRoute/provider/$routeProvider)
