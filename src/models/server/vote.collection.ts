import { Permission} from "node-appwrite"

import {db ,voteCollection, answerCollection} from "@/models/name";
import {databases} from "@/models/server/config";


const createVoteCollection = async () =>{
    // create vote collection
    await databases.createCollection(db,voteCollection, voteCollection, [
        Permission.read("any"),
        Permission.read("users"),
        Permission.write("users"),
        Permission.update("users"),
        Permission.delete("users"),
    ]);
    console.log("Question collection created successfully");

    //creating attributes and indexes

    await Promise.all([

        databases.createEnumAttribute(db, voteCollection, "type", ["question" , "answer"], true),
        databases.createStringAttribute(db, voteCollection, "typeId", 256, true),
        databases.createEnumAttribute(db, voteCollection, "voteStatus", ["upvoted", "downvoted"], true),
        databases.createStringAttribute(db, voteCollection, "votedById", 50, true),
    ]);
    console.log("Vote collection attributes created successfully");
}

export default createVoteCollection;