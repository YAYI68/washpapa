import fs from "fs/promises";
import path from "path";


export async function getAllService(){
    const filepath = path.join(process.cwd(), "data","wash.json");
    const jsonData = await fs.readFile(filepath)
    const data = JSON.parse(jsonData);
    return data;
}

export async function getServiceType(slug){
    const filepath = path.join(process.cwd(), "data","wash.json");
    const jsonData = await fs.readFile(filepath)
    const data = JSON.parse(jsonData);
    const washTypeData = data.filter((wash)=>wash.typeofWash===slug)
    return washTypeData
}

export async function getService (slug){
    const name = slug.replaceAll("_"," ")
    const data = await getAllService();
    const singleData = data.find((service)=>service.name === name)
    return singleData
}

