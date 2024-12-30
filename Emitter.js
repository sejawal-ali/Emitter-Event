// Import EventEmiitter class
const EventEmiitter = require ('events');

// Create an Instance of eventEmitter
const emitter = new EventEmiitter();

//1. Define an event Listener (addListener)
 emitter.on("greet", () => {
    console.log('Hello Sejawal');
    
 })
//2. Trigger (emit) the "greet" event 
 emitter.emit("greet");


//! You can also pass arguements while emitting


 emitter.on("greet", (username, prof) => {
    console.log(`hello ${username}, You are a ${prof}`)
   })

 emitter.emit("greet", 'Sejawal Ali', 'Full stack dev ri8');


//! But its best idea to take a single arguement as an object


emitter.on("greet", (arg) => {
    console.log(`hello ${arg.username}, You are a ${arg.prof}`)
})

emitter.emit("greet", {username: 'Sejawal Ali', prof: 'Full stack dev ri8'} );

