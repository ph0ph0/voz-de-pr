//PropTypes for these components should be a subject
import PropTypes from "prop-types";

export const SubjectPropTypes = {
  subject: PropTypes.exact({
    id: PropTypes.string.isRequired,
    createdBy: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subjectContent: PropTypes.string.isRequired,
    link: PropTypes.string,
    searchField: PropTypes.string.isRequired,
    numberOfComments: PropTypes.number.isRequired,
    votes: PropTypes.number.isRequired,
    staticKey: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    pictures: PropTypes.shape({
      items: PropTypes.array,
      nextToken: PropTypes.string
    }),
    comments: PropTypes.shape({
      items: PropTypes.array,
      nextToken: PropTypes.string
    })
  }).isRequired
};
