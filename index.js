'use strict'
const Hapi = require('hapi');

const init = async () => {
    const server =  Hapi.server({
        host: 'localhost',
        port: 3000
    })

    server.route({
        method:'GET',
        path:'/',
        handler: (req, h) => {
            return 'HELLO JAM!!';
        }
    });

    server.route({
        method: 'GET',
        path:'/about',
        handler: (req, h) => {
            return "IM ABOUT PAGE";
        }
    })

    server.route({
        method: 'GET',
        path: '/user/{name}/{surname}',
        handler: (req, h) => {
            console.log(req.params);
            console.log("I DISPLAYED THE REQUEST")
            console.log("I DISPLAYED THE REQUEST")
            console.log("I DISPLAYED THE REQUEST")
            console.log("I DISPLAYED THE REQUEST")
            console.log("I DISPLAYED THE REQUEST")
            return "I did display the requestor " + req.params.name;
        }
    })

    await server.start();
    console.log('I was changed!!!');
    console.log('server is running on port %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err)
    process.exit(1);
})

init();