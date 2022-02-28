import express from "express";

const app = express();

app.get("/test", (resquest, response) => {
    return response.send("Olá mundo!");
})

app.post("/test-post", (resquest, response) =>{
    return response.send("Olá mundo (POST)");
})

app.listen(3000, () => {console.log("Server is running!")});
