import React, { useEffect, useState } from "react";

export type Kwizz = {
    name: string;
    id: number
}



function Jouez() {
    const [kwizz, setKwizz] = useState<Array<Kwizz>>([]);
    const [nbQuestion, setNbQuestion] = useState<Array<any>>([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/kwizz')
            
            .then(response => response.json())
            .then(data => {
                loadQuestions(data);
                setKwizz(data);
            });
    }, []);

    function loadQuestions(data: any) {
        data.forEach((element: any) => {
            console.log(element.id);
            fetch('http://localhost:8080/api/question/kwizz/'+element.id)
                
                .then(response => response.json())
                .then(data => {
                    console.log(nbQuestion)
                    setNbQuestion(value => [...value, data]);
                });
        });
    }

    function getNbQuestionByQuiz(quizId : number) {
        console.log(quizId,nbQuestion);
        return nbQuestion?.find(value => value.quizzId === quizId)?.questions?.length;
    }
    

    return (
        <div>
            {kwizz.map (
                kwizz => <div> {kwizz.name} -- {getNbQuestionByQuiz(kwizz.id)}</div>
            )}
        </div>
    );

    
}




export default Jouez;