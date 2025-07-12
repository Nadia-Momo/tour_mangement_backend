import {Server} from "http";
import mongoose from "mongoose";
import app from "./app";
import { envVars } from "./app/config/env";
let server:Server;

const startServer=async()=>{
try{
console.log(envVars.NODE_ENV);
await mongoose.connect("mongodb+srv://momo:Zal7PJcqbwMBrC4R@cluster0.ztncy8c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
server=app.listen(envVars.PORT,()=>{
    console.log(`Server is listening to port ${envVars.PORT}`);
});
}
catch(error){
console.log("server is listening to port 5000",error);
} 

}
startServer();
process.on("unhandledRejection",(err)=>{
    // eslint-disable-next-line no-console
    console.log("unhandled rejection detected.....server shutting down",err);
    if(server){
        server.close(()=>{
        process.exit(1)    
        });
        process.exit(1)
    }
})
process.on("SIGTERM",()=>{
    console.log("SIGTERM signal received.....server shutting down");
    if(server){
        server.close(()=>{
        process.exit(1)    
        });
        process.exit(1)
    }
})
process.on("SIGINT",()=>{
    console.log("SIGINT signal received.....server shutting down");
    if(server){
        server.close(()=>{
        process.exit(1)    
        });
        process.exit(1)
    }
})
process.on("unCaughtException",(err)=>{
    console.log("unCaught exception detected.....server shutting down",err);
    if(server){
        server.close(()=>{
        process.exit(1)    
        });
        process.exit(1)
    }
})
//Promise.reject(new Error("i forgot to catch this promise"))
// throw new Error("I forgot to handle this local error")

// unhandle rejection error
//uncought rejection error
//uncaught exception error
//signal termination sigterm
