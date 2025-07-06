import {Permission} from "node-appwrite"

import {questionAttachmentBucket} from "@/models/name";
import { storage } from "./config";


const getOrCreateStorage = async () =>{

    try {
        await storage.getBucket(questionAttachmentBucket);
        console.log("storage connected");
    } catch (error) {
        try{
            await storage.createBucket(questionAttachmentBucket, questionAttachmentBucket,[
                Permission.read("any"),
                Permission.read("users"),
                Permission.write("users"),
                Permission.update("users"),
                Permission.delete("users"),
            ],
            false,
            undefined,
            undefined,
            ["jpeg", "png", "gif", "webp", "mp4", "mov", "avi", "mkv" , "heic"]
        );
        console.log("Storage created successfully");
        console.log("Storage connected");
        }catch (e) {
            console.error("Error creating storage:", e);
            throw new Error("Failed to create storage");
        } 
    }
}
export default getOrCreateStorage;
