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
    subjectImage {
      bucket
      region
      key
    }
    votes
    type
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
export const onUpdateSubject = `subscription OnUpdateSubject($owner: String!) {
  onUpdateSubject(owner: $owner) {
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
    votes
    type
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
export const onDeleteSubject = `subscription OnDeleteSubject($owner: String!) {
  onDeleteSubject(owner: $owner) {
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
    votes
    type
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
export const onCreateComment = `subscription OnCreateComment($owner: String!) {
  onCreateComment(owner: $owner) {
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
      votes
      type
      owner
      comments {
        nextToken
      }
    }
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
      votes
      type
      owner
      comments {
        nextToken
      }
    }
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
      votes
      type
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
