import { answerCollection } from "@/models/name";
import { databases, users } from "@/models/server/config";
import { NextRequest , NextResponse } from "next/server";
import { db } from "@/models/name";
import{ ID } from "appwrite";
import { UserPrefs } from "@/store/Auth";
import next from "next";

export async function POST(request : NextRequest){
    try {
        const {questionId , answer , authorId} = await request.json();
        const response = await databases.createDocument(db , answerCollection,ID.unique(),{
            content: answer,
            authorId : authorId,
            questionId: questionId
        })
        // increase author reputation
        const prefs = await users.getPrefs<UserPrefs>(authorId)
        await users.updatePrefs(authorId , {
            reputation : Number(prefs.reputation) + 1
        })
        return NextResponse.json({
            message: "Answer submitted successfully",
            answerId: response.$id
        }, {
            status: 201
        })
        }
        catch (error) {
        return NextResponse.json({
            error: "An error occurred while processing your request."
        }, {
            status: 500
        })
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const {answerId} = await request.json();
        const answer = await databases.getDocument(db, answerCollection , answerId);

        const response = await databases.deleteDocument(db , 
            answerCollection , answerId
        );
        const prefs = await users.getPrefs<UserPrefs>(answer.authorId);
        await users.updatePrefs<UserPrefs>(answer.authorId, {
            reputation: Number(prefs.reputation) - 1
        });

        return NextResponse.json({
            message: "Answer deleted successfully"      
        }, {
            status: 200 
        });
        
    } catch (error : any) {
        return NextResponse.json({
            error: "An error occurred while deleting the answer."
        }, {
            status: 500
        });
    }
}