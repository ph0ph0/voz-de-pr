/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
export const onCreatePost = `subscription OnCreatePost($owner: String!) {
  onCreatePost(owner: $owner) {
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
export const onUpdatePost = `subscription OnUpdatePost($owner: String!) {
  onUpdatePost(owner: $owner) {
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
export const onDeletePost = `subscription OnDeletePost($owner: String!) {
  onDeletePost(owner: $owner) {
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
export const onCreateCommentOnPost = `subscription OnCreateCommentOnPost($owner: String!) {
  onCreateCommentOnPost(owner: $owner) {
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
export const onUpdateCommentOnPost = `subscription OnUpdateCommentOnPost($owner: String!) {
  onUpdateCommentOnPost(owner: $owner) {
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
export const onDeleteCommentOnPost = `subscription OnDeleteCommentOnPost($owner: String!) {
  onDeleteCommentOnPost(owner: $owner) {
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
export const onCreateCause = `subscription OnCreateCause($owner: String!) {
  onCreateCause(owner: $owner) {
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
export const onUpdateCause = `subscription OnUpdateCause($owner: String!) {
  onUpdateCause(owner: $owner) {
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
export const onDeleteCause = `subscription OnDeleteCause($owner: String!) {
  onDeleteCause(owner: $owner) {
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
export const onCreateCommentOnCause = `subscription OnCreateCommentOnCause($owner: String!) {
  onCreateCommentOnCause(owner: $owner) {
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
export const onUpdateCommentOnCause = `subscription OnUpdateCommentOnCause($owner: String!) {
  onUpdateCommentOnCause(owner: $owner) {
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
export const onDeleteCommentOnCause = `subscription OnDeleteCommentOnCause($owner: String!) {
  onDeleteCommentOnCause(owner: $owner) {
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
export const onCreateVote = `subscription OnCreateVote($owner: String!) {
  onCreateVote(owner: $owner) {
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
export const onUpdateVote = `subscription OnUpdateVote($owner: String!) {
  onUpdateVote(owner: $owner) {
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
export const onDeleteVote = `subscription OnDeleteVote($owner: String!) {
  onDeleteVote(owner: $owner) {
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
