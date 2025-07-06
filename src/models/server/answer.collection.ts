import {IndexType, Permission} from "node-appwrite"

import {db , answerCollection} from "@/models/name";
import {databases} from "@/models/server/config";


const createAnswerCollection = async () =>{
    // create collection
    await databases.createCollection(db,answerCollection, answerCollection, [
        Permission.read("any"),
        Permission.read("users"),
        Permission.write("users"),
        Permission.update("users"),
        Permission.delete("users"),
    ]);
    console.log("Question collection created successfully");

    //creating attributes and indexes

    await Promise.all([
        databases.createStringAttribute(db, answerCollection, "content", 10024, true),
        databases.createStringAttribute(db, answerCollection, "questionId", 256, true),
        databases.createStringAttribute(db, answerCollection, "authorId", 50, true),
    ]);
    console.log("Question collection attributes created successfully");
}

export default createAnswerCollection;