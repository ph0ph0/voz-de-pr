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
export const createPost = `mutation CreatePost($input: CreatePostInput!) {
  createPost(input: $input) {
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
export const updatePost = `mutation UpdatePost($input: UpdatePostInput!) {
  updatePost(input: $input) {
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
export const deletePost = `mutation DeletePost($input: DeletePostInput!) {
  deletePost(input: $input) {
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
export const createCommentOnPost = `mutation CreateCommentOnPost($input: CreateCommentOnPostInput!) {
  createCommentOnPost(input: $input) {
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
export const updateCommentOnPost = `mutation UpdateCommentOnPost($input: UpdateCommentOnPostInput!) {
  updateCommentOnPost(input: $input) {
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
export const deleteCommentOnPost = `mutation DeleteCommentOnPost($input: DeleteCommentOnPostInput!) {
  deleteCommentOnPost(input: $input) {
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
export const createCause = `mutation CreateCause($input: CreateCauseInput!) {
  createCause(input: $input) {
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
export const updateCause = `mutation UpdateCause($input: UpdateCauseInput!) {
  updateCause(input: $input) {
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
export const deleteCause = `mutation DeleteCause($input: DeleteCauseInput!) {
  deleteCause(input: $input) {
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
export const createCommentOnCause = `mutation CreateCommentOnCause($input: CreateCommentOnCauseInput!) {
  createCommentOnCause(input: $input) {
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
export const updateCommentOnCause = `mutation UpdateCommentOnCause($input: UpdateCommentOnCauseInput!) {
  updateCommentOnCause(input: $input) {
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
export const deleteCommentOnCause = `mutation DeleteCommentOnCause($input: DeleteCommentOnCauseInput!) {
  deleteCommentOnCause(input: $input) {
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
export const createVote = `mutation CreateVote($input: CreateVoteInput!) {
  createVote(input: $input) {
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
export const updateVote = `mutation UpdateVote($input: UpdateVoteInput!) {
  updateVote(input: $input) {
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
export const deleteVote = `mutation DeleteVote($input: DeleteVoteInput!) {
  deleteVote(input: $input) {
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
