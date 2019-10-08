/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
    createdAt
    updatedAt
    posts {
      items {
        id
        createdBy
        createdAt
        author
        title
        postContent
        votes
        owner
      }
      nextToken
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
      email
      avatar {
        bucket
        region
        key
      }
      createdAt
      updatedAt
      posts {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const listPosts = `query ListPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdBy
      createdAt
      author
      title
      postContent
      postImage {
        bucket
        region
        key
      }
      votes
      owner
      comments {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getPost = `query GetPost($id: ID!) {
  getPost(id: $id) {
    id
    createdBy
    createdAt
    author
    title
    postContent
    postImage {
      bucket
      region
      key
    }
    votes
    owner
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
  }
}
`;
export const postsByUser = `query PostsByUser(
  $createdBy: ID
  $sortDirection: ModelSortDirection
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  postsByUser(
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
      postContent
      postImage {
        bucket
        region
        key
      }
      votes
      owner
      comments {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getCommentOnPost = `query GetCommentOnPost($id: ID!) {
  getCommentOnPost(id: $id) {
    id
    createdBy
    author
    createdAt
    text
    votes
    post {
      id
      createdBy
      createdAt
      author
      title
      postContent
      postImage {
        bucket
        region
        key
      }
      votes
      owner
      comments {
        nextToken
      }
    }
    owner
  }
}
`;
export const listCommentOnPosts = `query ListCommentOnPosts(
  $filter: ModelCommentOnPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listCommentOnPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdBy
      author
      createdAt
      text
      votes
      post {
        id
        createdBy
        createdAt
        author
        title
        postContent
        votes
        owner
      }
      owner
    }
    nextToken
  }
}
`;
export const listCauses = `query ListCauses(
  $filter: ModelCauseFilterInput
  $limit: Int
  $nextToken: String
) {
  listCauses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdBy
      createdAt
      author
      title
      causeContent
      location
      causeImage {
        bucket
        region
        key
      }
      votes
      owner
      comments {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getCause = `query GetCause($id: ID!) {
  getCause(id: $id) {
    id
    createdBy
    createdAt
    author
    title
    causeContent
    location
    causeImage {
      bucket
      region
      key
    }
    votes
    owner
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
  }
}
`;
export const causesByUser = `query CausesByUser(
  $createdBy: ID
  $sortDirection: ModelSortDirection
  $filter: ModelCauseFilterInput
  $limit: Int
  $nextToken: String
) {
  causesByUser(
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
      causeContent
      location
      causeImage {
        bucket
        region
        key
      }
      votes
      owner
      comments {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getCommentOnCause = `query GetCommentOnCause($id: ID!) {
  getCommentOnCause(id: $id) {
    id
    createdBy
    author
    createdAt
    text
    votes
    cause {
      id
      createdBy
      createdAt
      author
      title
      causeContent
      location
      causeImage {
        bucket
        region
        key
      }
      votes
      owner
      comments {
        nextToken
      }
    }
    owner
  }
}
`;
export const listCommentOnCauses = `query ListCommentOnCauses(
  $filter: ModelCommentOnCauseFilterInput
  $limit: Int
  $nextToken: String
) {
  listCommentOnCauses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdBy
      author
      createdAt
      text
      votes
      cause {
        id
        createdBy
        createdAt
        author
        title
        causeContent
        location
        votes
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
    objectVotedOnId
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
      objectVotedOnId
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
export const votesOnObjectByUser = `query VotesOnObjectByUser(
  $objectVotedOnId: ID
  $voteCreatedBy: ModelVoteVotesOnAnObjectByUserCompositeKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelVoteFilterInput
  $limit: Int
  $nextToken: String
) {
  votesOnObjectByUser(
    objectVotedOnId: $objectVotedOnId
    voteCreatedBy: $voteCreatedBy
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      objectVotedOnId
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
