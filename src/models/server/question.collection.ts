import {IndexType, Permission} from "node-appwrite"

import {db , questionCollection} from "@/models/name";
import {databases} from "@/models/server/config";


const createQuestionCollection = async () =>{
    // create collection
    await databases.createCollection(db,questionCollection, questionCollection, [
        Permission.read("any"),
        Permission.read("users"),
        Permission.write("users"),
        Permission.update("users"),
        Permission.delete("users"),
    ]);
    console.log("Question collection created successfully");

    //creating attributes and indexes

    await Promise.all([
        databases.createStringAttribute(db, questionCollection, "title", 256, true),
        databases.createStringAttribute(db, questionCollection, "content", 10024, true),
        databases.createStringAttribute(db, questionCollection, "authorId", 256, true),
        databases.createStringAttribute(db, questionCollection, "tags", 256, true , undefined , true), 
        databases.createStringAttribute(db, questionCollection, "attachmentId", 256, false),
    ]);
    console.log("Question collection attributes created successfully");
}  

export default createQuestionCollection;