import React from "react";
import QuestionForm from "@/components/QuestionForm";

const AskPage = () => {
    return (
        <div className="max-w-2xl mx-auto py-8">
            <h1 className="text-3xl font-bold mb-6">Ask a public question</h1>
            <QuestionForm />
        </div>
    );
};

export default AskPage; 