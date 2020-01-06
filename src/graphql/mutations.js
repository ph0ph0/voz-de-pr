/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    username
    firstName
    lastName
    voiceNumber
    email
    location
    createdAt
    updatedAt
    avatar {
      id
      subjectId
      description
      owner
      bucket
      region
      key
    }
  }
}
`;
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
    username
    firstName
    lastName
    voiceNumber
    email
    location
    createdAt
    updatedAt
    avatar {
      id
      subjectId
      description
      owner
      bucket
      region
      key
    }
  }
}
`;
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
    id
    username
    firstName
    lastName
    voiceNumber
    email
    location
    createdAt
    updatedAt
    avatar {
      id
      subjectId
      description
      owner
      bucket
      region
      key
    }
  }
}
`;
export const createSubject = `mutation CreateSubject($input: CreateSubjectInput!) {
  createSubject(input: $input) {
    id
    createdBy
    createdAt
    author
    title
    subjectContent
    timePassedSinceCreation
    numberOfComments
    votes
    type
    owner
    pictures {
      items {
        id
        subjectId
        description
        owner
        bucket
        region
        key
      }
      nextToken
    }
    comments {
      items {
        id
        createdBy
        author
        createdAt
        text
        votes
        subjectId
        owner
      }
      nextToken
    }
  }
}
`;
export const updateSubject = `mutation UpdateSubject($input: UpdateSubjectInput!) {
  updateSubject(input: $input) {
    id
    createdBy
    createdAt
    author
    title
    subjectContent
    timePassedSinceCreation
    numberOfComments
    votes
    type
    owner
    pictures {
      items {
        id
        subjectId
        description
        owner
        bucket
        region
        key
      }
      nextToken
    }
    comments {
      items {
        id
        createdBy
        author
        createdAt
        text
        votes
        subjectId
        owner
      }
      nextToken
    }
  }
}
`;
export const deleteSubject = `mutation DeleteSubject($input: DeleteSubjectInput!) {
  deleteSubject(input: $input) {
    id
    createdBy
    createdAt
    author
    title
    subjectContent
    timePassedSinceCreation
    numberOfComments
    votes
    type
    owner
    pictures {
      items {
        id
        subjectId
        description
        owner
        bucket
        region
        key
      }
      nextToken
    }
    comments {
      items {
        id
        createdBy
        author
        createdAt
        text
        votes
        subjectId
        owner
      }
      nextToken
    }
  }
}
`;
export const createPicture = `mutation CreatePicture($input: CreatePictureInput!) {
  createPicture(input: $input) {
    id
    subjectId
    description
    owner
    bucket
    region
    key
  }
}
`;
export const updatePicture = `mutation UpdatePicture($input: UpdatePictureInput!) {
  updatePicture(input: $input) {
    id
    subjectId
    description
    owner
    bucket
    region
    key
  }
}
`;
export const deletePicture = `mutation DeletePicture($input: DeletePictureInput!) {
  deletePicture(input: $input) {
    id
    subjectId
    description
    owner
    bucket
    region
    key
  }
}
`;
export const createComment = `mutation CreateComment($input: CreateCommentInput!) {
  createComment(input: $input) {
    id
    createdBy
    author
    createdAt
    text
    votes
    subjectId
    owner
  }
}
`;
export const updateComment = `mutation UpdateComment($input: UpdateCommentInput!) {
  updateComment(input: $input) {
    id
    createdBy
    author
    createdAt
    text
    votes
    subjectId
    owner
  }
}
`;
export const deleteComment = `mutation DeleteComment($input: DeleteCommentInput!) {
  deleteComment(input: $input) {
    id
    createdBy
    author
    createdAt
    text
    votes
    subjectId
    owner
  }
}
`;
export const createVote = `mutation CreateVote($input: CreateVoteInput!) {
  createVote(input: $input) {
    id
    subjectVotedOnId
    createdBy
    createdAt
    vote
    voteOn
    owner
  }
}
`;
export const updateVote = `mutation UpdateVote($input: UpdateVoteInput!) {
  updateVote(input: $input) {
    id
    subjectVotedOnId
    createdBy
    createdAt
    vote
    voteOn
    owner
  }
}
`;
export const deleteVote = `mutation DeleteVote($input: DeleteVoteInput!) {
  deleteVote(input: $input) {
    id
    subjectVotedOnId
    createdBy
    createdAt
    vote
    voteOn
    owner
  }
}
`;
