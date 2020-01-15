/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser($id: String!) {
  onCreateUser(id: $id) {
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
export const onUpdateUser = `subscription OnUpdateUser($id: String!) {
  onUpdateUser(id: $id) {
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
export const onDeleteUser = `subscription OnDeleteUser($id: String!) {
  onDeleteUser(id: $id) {
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
export const onCreateSubject = `subscription OnCreateSubject($owner: String!) {
  onCreateSubject(owner: $owner) {
    id
    createdBy
    createdAt
    author
    title
    subjectContent
    timePassedSinceCreation
    numberOfComments
    votes
    staticKey
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
export const onUpdateSubject = `subscription OnUpdateSubject($owner: String!) {
  onUpdateSubject(owner: $owner) {
    id
    createdBy
    createdAt
    author
    title
    subjectContent
    timePassedSinceCreation
    numberOfComments
    votes
    staticKey
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
export const onDeleteSubject = `subscription OnDeleteSubject($owner: String!) {
  onDeleteSubject(owner: $owner) {
    id
    createdBy
    createdAt
    author
    title
    subjectContent
    timePassedSinceCreation
    numberOfComments
    votes
    staticKey
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
export const onCreatePicture = `subscription OnCreatePicture($owner: String!) {
  onCreatePicture(owner: $owner) {
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
export const onUpdatePicture = `subscription OnUpdatePicture($owner: String!) {
  onUpdatePicture(owner: $owner) {
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
export const onDeletePicture = `subscription OnDeletePicture($owner: String!) {
  onDeletePicture(owner: $owner) {
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
export const onCreateComment = `subscription OnCreateComment($owner: String!) {
  onCreateComment(owner: $owner) {
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
export const onUpdateComment = `subscription OnUpdateComment($owner: String!) {
  onUpdateComment(owner: $owner) {
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
export const onDeleteComment = `subscription OnDeleteComment($owner: String!) {
  onDeleteComment(owner: $owner) {
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
export const onCreateVote = `subscription OnCreateVote($owner: String!) {
  onCreateVote(owner: $owner) {
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
export const onUpdateVote = `subscription OnUpdateVote($owner: String!) {
  onUpdateVote(owner: $owner) {
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
export const onDeleteVote = `subscription OnDeleteVote($owner: String!) {
  onDeleteVote(owner: $owner) {
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
