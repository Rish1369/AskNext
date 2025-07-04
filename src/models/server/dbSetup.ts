import {db} from "@/models/name";
import createAnswerCollection from "./answer.collection";
import createCommentCollection from "./comment.collection";
import createQuestionCollection from "./question.collection";
import createVoteCollection from "./vote.collection";
import {databases} from "@/models/server/config";

export default async function getOrCreateDB(){
    try{
        await databases.get(db);
        console.log("Database already connected");
    }
    catch(error){
        try{
            await databases.create(db, db);
            console.log("Database created successfully");
            //creating collection in the database
            await Promise.all(
                [
                    createQuestionCollection(),
                    createAnswerCollection(),
                    createCommentCollection(),
                    createVoteCollection()
                ]
            );
            console.log("Collections created successfully");
        }
        catch(error){
            console.error("Error creating database or collections:", error);
            throw new Error("Failed to create database or collections");
        }
    }
    return databases;
}
