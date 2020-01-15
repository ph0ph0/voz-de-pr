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
            items {
                  key
              id
              region
              bucket
              subjectId
              description
              owner
            }
          }
          comments {
            items {
              id
              createdBy
              createdAt
              author
              text
              subjectId
              votes
              owner
            }
          }
      }
      nextToken
    }
  }
  `;

export const getSubjectsByCreatedAt = `query GetSubjectsByCreatedAt(
    $staticKey: Int
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSubjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getSubjectsByCreatedAt(
      staticKey: $staticKey
      createdAt: $createdAt
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
        staticKey
        type
        owner
        pictures {
            items {
                  key
              id
              region
              bucket
              subjectId
              description
              owner
            }
          }
          comments {
            items {
              id
              createdBy
              createdAt
              author
              text
              subjectId
              votes
              owner
            }
          }
      }
      nextToken
    }
  }
  `;

export const getSubjectsByNoOfVotes = `query GetSubjectsByNoOfVotes(
    $staticKey: Int
    $votes: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSubjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getSubjectsByNoOfVotes(
      staticKey: $staticKey
      votes: $votes
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
        staticKey
        type
        owner
        pictures {
            items {
                  key
              id
              region
              bucket
              subjectId
              description
              owner
            }
          }
          comments {
            items {
              id
              createdBy
              createdAt
              author
              text
              subjectId
              votes
              owner
            }
          }
      }
      nextToken
    }
  }
  `;

export const getSubjectsByNoOfComments = `query GetSubjectsByNoOfComments(
    $staticKey: Int
    $numberOfComments: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSubjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getSubjectsByNoOfComments(
      staticKey: $staticKey
      numberOfComments: $numberOfComments
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
        staticKey
        type
        owner
        pictures {
            items {
                  key
              id
              region
              bucket
              subjectId
              description
              owner
            }
          }
          comments {
            items {
              id
              createdBy
              createdAt
              author
              text
              subjectId
              votes
              owner
            }
          }
      }
      nextToken
    }
  }
  `;
