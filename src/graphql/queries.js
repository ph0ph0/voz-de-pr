/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSubject = `query GetSubject($id: ID!) {
  getSubject(id: $id) {
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
      subject {
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
export const subjectsByUser = `query SubjectsByUser(
  $createdBy: ID
  $type: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelSubjectFilterInput
  $limit: Int
  $nextToken: String
) {
  subjectsByUser(
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
    nextToken
  }
}
`;
export const votesOnSubjectByUser = `query VotesOnSubjectByUser(
  $subjectVotedOnId: ID
  $voteCreatedBy: ModelVoteVotesOnAnSubjectsByUserCompositeKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelVoteFilterInput
  $limit: Int
  $nextToken: String
) {
  votesOnSubjectByUser(
    subjectVotedOnId: $subjectVotedOnId
    voteCreatedBy: $voteCreatedBy
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
export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
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
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      username
      email
      avatar {
        bucket
        region
        key
      }
      subjects {
        nextToken
      }
      createdAt
      updatedAt
    }
    nextToken
  }
}
`;
