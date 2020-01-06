/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
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
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const findUsername = `query FindUsername(
  $username: String
  $sortDirection: ModelSortDirection
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  findUsername(
    username: $username
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
  }
}
`;
export const getSubject = `query GetSubject($id: ID!) {
  getSubject(id: $id) {
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
export const listSubjects = `query ListSubjects(
  $filter: ModelSubjectFilterInput
  $limit: Int
  $nextToken: String
) {
  listSubjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
        nextToken
      }
      comments {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const subjectsByUserByType = `query SubjectsByUserByType(
  $createdBy: ID
  $type: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelSubjectFilterInput
  $limit: Int
  $nextToken: String
) {
  subjectsByUserByType(
    createdBy: $createdBy
    type: $type
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
        nextToken
      }
      comments {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const subjectsByUser = `query SubjectsByUser(
  $createdBy: ID
  $sortDirection: ModelSortDirection
  $filter: ModelSubjectFilterInput
  $limit: Int
  $nextToken: String
) {
  subjectsByUser(
    createdBy: $createdBy
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
        nextToken
      }
      comments {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getPicture = `query GetPicture($id: ID!) {
  getPicture(id: $id) {
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
export const listPictures = `query ListPictures(
  $filter: ModelPictureFilterInput
  $limit: Int
  $nextToken: String
) {
  listPictures(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
}
`;
export const getComment = `query GetComment($id: ID!) {
  getComment(id: $id) {
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
export const listComments = `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
`;
export const getVote = `query GetVote($id: ID!) {
  getVote(id: $id) {
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
export const listVotes = `query ListVotes(
  $filter: ModelVoteFilterInput
  $limit: Int
  $nextToken: String
) {
  listVotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      subjectVotedOnId
      createdBy
      createdAt
      vote
      voteOn
      owner
    }
    nextToken
  }
}
`;
export const votesOnSubjectByUser = `query VotesOnSubjectByUser(
  $subjectVotedOnId: ID
  $createdBy: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelVoteFilterInput
  $limit: Int
  $nextToken: String
) {
  votesOnSubjectByUser(
    subjectVotedOnId: $subjectVotedOnId
    createdBy: $createdBy
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      subjectVotedOnId
      createdBy
      createdAt
      vote
      voteOn
      owner
    }
    nextToken
  }
}
`;
