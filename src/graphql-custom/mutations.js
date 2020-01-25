export const voteOnComment = `mutation VoteOnComment($input: VoteInput!) {
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
