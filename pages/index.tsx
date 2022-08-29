import React from 'react';
import Layout from "../components/Layout";
import Card from "../components/Card";
import questions from "./questions.json";

const IndexPage: React.FC = () : JSX.Element => {
  const defaultPossible = (questions).map((question) => question.id);

  const [possibleQuestions, setPossibleQuestions] = React.useState<number[]>(defaultPossible);
  const [currentQuestion, setCurrentQuestion] = React.useState<number>(Math.floor(Math.random() * questions.length));

  const selectQuestion = (possibleQuestions: number[]) => {
    return Math.floor(Math.random() * possibleQuestions.length);
  };

  function handleOnCorrect(id: number) {
    // const index = possibleQuestions.findIndex(question => id === question.id);
    const questionsCleaned = possibleQuestions.filter((questionId) => id !== questionId);

    setPossibleQuestions(questionsCleaned);
    setCurrentQuestion(selectQuestion(questionsCleaned));
  }

  function handleOnWrong(id: number) {
    setCurrentQuestion(selectQuestion(possibleQuestions));
  }

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <ul>
          {questions
            .filter((question) => question.id === currentQuestion)
            .map((question) => {
              const { id } = question;
              return (
                <li key={id}>
                  <Card
                    question={question}
                    onCorrect={() => handleOnCorrect(id)}
                    onWrong={() => handleOnWrong(id)}
                  />
                </li>
              );
            })}
        </ul>
      </div>
    </Layout>
  );
}

export default IndexPage;
