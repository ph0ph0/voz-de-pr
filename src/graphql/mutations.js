/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    username
    email
    avatar {
      bucket
      region
      key
    }
    subjects {
      items {
        id
        createdBy
        createdAt
        author
        title
        subjectContent
        votes
        type
        owner
      }
      nextToken
    }
    createdAt
    updatedAt
  }
}
`;
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
    username
    email
    avatar {
      bucket
      region
      key
    }
    subjects {
      items {
        id
        createdBy
        createdAt
        author
        title
        subjectContent
        votes
        type
        owner
      }
      nextToken
    }
    createdAt
    updatedAt
  }
}
`;
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
    id
    username
    email
    avatar {
      bucket
      region
      key
    }
    subjects {
      items {
        id
        createdBy
        createdAt
        author
        title
        subjectContent
        votes
        type
        owner
      }
      nextToken
    }
    createdAt
    updatedAt
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
    subjectImage {
      bucket
      region
      key
    }
    comments {
      items {
        id
        createdBy
        author
        createdAt
        text
        votes
        owner
      }
      nextToken
    }
    votes
    type
    owner
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
    subjectImage {
      bucket
      region
      key
    }
    comments {
      items {
        id
        createdBy
        author
        createdAt
        text
        votes
        owner
      }
      nextToken
    }
    votes
    type
    owner
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
    subjectImage {
      bucket
      region
      key
    }
    comments {
      items {
        id
        createdBy
        author
        createdAt
        text
        votes
        owner
      }
      nextToken
    }
    votes
    type
    owner
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
    subject {
      id
      createdBy
      createdAt
      author
      title
      subjectContent
      subjectImage {
        bucket
        region
        key
      }
      comments {
        nextToken
      }
      votes
      type
      owner
    }
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
    subject {
      id
      createdBy
      createdAt
      author
      title
      subjectContent
      subjectImage {
        bucket
        region
        key
      }
      comments {
        nextToken
      }
      votes
      type
      owner
    }
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
    subject {
      id
      createdBy
      createdAt
      author
      title
      subjectContent
      subjectImage {
        bucket
        region
        key
      }
      comments {
        nextToken
      }
      votes
      type
      owner
    }
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
