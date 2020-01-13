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
