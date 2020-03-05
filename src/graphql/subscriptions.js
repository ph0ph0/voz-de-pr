/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($id: String!) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($id: String!) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($id: String!) {
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
export const onCreateSubject = /* GraphQL */ `
  subscription OnCreateSubject($owner: String!) {
    onCreateSubject(owner: $owner) {
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
export const onUpdateSubject = /* GraphQL */ `
  subscription OnUpdateSubject($owner: String!) {
    onUpdateSubject(owner: $owner) {
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
export const onDeleteSubject = /* GraphQL */ `
  subscription OnDeleteSubject($owner: String!) {
    onDeleteSubject(owner: $owner) {
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
export const onCreatePicture = /* GraphQL */ `
  subscription OnCreatePicture($owner: String!) {
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
export const onUpdatePicture = /* GraphQL */ `
  subscription OnUpdatePicture($owner: String!) {
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
export const onDeletePicture = /* GraphQL */ `
  subscription OnDeletePicture($owner: String!) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($owner: String!) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($owner: String!) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($owner: String!) {
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
export const onCreateVote = /* GraphQL */ `
  subscription OnCreateVote($owner: String!) {
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
export const onUpdateVote = /* GraphQL */ `
  subscription OnUpdateVote($owner: String!) {
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
export const onDeleteVote = /* GraphQL */ `
  subscription OnDeleteVote($owner: String!) {
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
