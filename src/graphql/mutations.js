/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const voteOnSubject = /* GraphQL */ `
  mutation VoteOnSubject($input: VoteInput!) {
    voteOnSubject(input: $input) {
      id
      createdBy
      createdAt
      author
      title
      subjectContent
      link
      searchField
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
export const voteOnComment = /* GraphQL */ `
  mutation VoteOnComment($input: VoteInput!) {
    voteOnComment(input: $input) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser($input: CreateUserInput!) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser($input: UpdateUserInput!) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser($input: DeleteUserInput!) {
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
export const createSubject = /* GraphQL */ `
  mutation CreateSubject($input: CreateSubjectInput!) {
    createSubject(input: $input) {
      id
      createdBy
      createdAt
      author
      title
      subjectContent
      link
      searchField
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
export const updateSubject = /* GraphQL */ `
  mutation UpdateSubject($input: UpdateSubjectInput!) {
    updateSubject(input: $input) {
      id
      createdBy
      createdAt
      author
      title
      subjectContent
      link
      searchField
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
export const deleteSubject = /* GraphQL */ `
  mutation DeleteSubject($input: DeleteSubjectInput!) {
    deleteSubject(input: $input) {
      id
      createdBy
      createdAt
      author
      title
      subjectContent
      link
      searchField
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
export const createPicture = /* GraphQL */ `
  mutation CreatePicture($input: CreatePictureInput!) {
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
export const updatePicture = /* GraphQL */ `
  mutation UpdatePicture($input: UpdatePictureInput!) {
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
export const deletePicture = /* GraphQL */ `
  mutation DeletePicture($input: DeletePictureInput!) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment($input: CreateCommentInput!) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment($input: UpdateCommentInput!) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment($input: DeleteCommentInput!) {
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
export const createVote = /* GraphQL */ `
  mutation CreateVote($input: CreateVoteInput!) {
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
export const updateVote = /* GraphQL */ `
  mutation UpdateVote($input: UpdateVoteInput!) {
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
export const deleteVote = /* GraphQL */ `
  mutation DeleteVote($input: DeleteVoteInput!) {
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
