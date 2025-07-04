import {IndexType, Permission} from "node-appwrite"

import {db , commentCollection} from "@/models/name";
import {databases} from "@/models/server/config";


const createCommentCollection = async () =>{
    // create collection
    await databases.createCollection(db,commentCollection, commentCollection, [
        Permission.read("any"),
        Permission.read("users"),
        Permission.write("users"),
        Permission.update("users"),
        Permission.delete("users"),
    ]);
    console.log("Question collection created successfully");

    //creating attributes and indexes

    await Promise.all([

        databases.createStringAttribute(db, commentCollection, "content", 10024, true),
        databases.createEnumAttribute(db, commentCollection, "type", ["answer" , "question"], true),
        databases.createStringAttribute(db, commentCollection, "typeId", 50, true),
        databases.createStringAttribute(db, commentCollection, "authorId", 50, true)
    ]);
    console.log("Question collection attributes created successfully");
}

export default createCommentCollection;