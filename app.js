import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
const projects = JSON.parse(fs.readFileSync("./data/projects.json", "utf-8"));



const app=express();
const port=5000;

const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/projects",(req,res)=>{
    res.render("projects",{projects});
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});