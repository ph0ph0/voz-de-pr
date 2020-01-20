import React from "react";
import styled from "styled-components";

import SubjectCard from "../SubjectCard/SubjectCard";

import { useHistory } from "react-router-dom";

const SubjectCardsWrapper = ({
  staticContext,
  arrayOfSubjectCardData,
  ...props
}) => {
  let history = useHistory();

  const onClick = index => {
    const subject = arrayOfSubjectCardData[index];
    const subjectID = subject.id;

    window.log(`clicked on card with index (id): ${subjectID}`);
    window.log(`clicked on subject: ${JSON.stringify(subject)}`);

    history.push({
      pathname: `/${subjectID}`,
      state: { subject: subject }
    });
  };

  return (
    <div {...props}>
      {arrayOfSubjectCardData.map((subject, index) => (
        <SubjectCard
          key={subject.id}
          author={subject.author}
          createdBy={subject.createdBy}
          createdAt={subject.createdAt}
          owner={subject.owner}
          title={subject.title}
          subjectContent={subject.subjectContent}
          numberOfComments={subject.numberOfComments}
          numberOfVotes={subject.votes}
          secondary={subject.type === "post" ? true : false}
          pictures={subject.pictures}
          onClick={() => onClick(index)}
        />
      ))}
    </div>
  );
};

const SubjectCards = styled(SubjectCardsWrapper)`
  /* border: 1px solid turquoise; */
  display: flex;
  flex-direction: column;
`;

export default SubjectCards;
