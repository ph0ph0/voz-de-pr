import { useUser } from "CustomHooks/user";
import { useSearch } from "CustomHooks/useSearch";
import { useSubject } from "CustomHooks/useSubject";

const FeedMainPageContentAPI = ({ state, setState }) => {
  const subjectCardData = state.subjectCardData;
  const nextToken = state.nextToken;
  const sortOrderState = state.sortOrderState;

  window.log("&&&&&&&&&Loading API");
  window.log(
    `&&&&&&&&&At start of API sCD, nT, sOS: ${subjectCardData}, ${nextToken}, ${sortOrderState}`
  );

  const { user } = useUser();
  const userId = user && user.id;

  const {
    listAllSubjectsOrderedByCreatedAt,
    listAllSubjectsOrderedByVotes,
    listAllSubjectsOrderedByComments,
    loading
  } = useSubject();

  const {
    shouldSearch,
    updateShouldSearch,
    searchTerm,
    updateSearchText
  } = useSearch();

  const updateSortOrderState = newValue => {
    window.log(`new filter state: ${newValue}`);
    if (newValue === sortOrderState) {
      window.log("sortOrderState was the same, aborting");
      return;
    }
    setState(prevState => {
      return {
        ...prevState,
        subjectCardData: [],
        nextToken: null,
        sortOrderState: newValue
      };
    });
    updateSearchText("");
  };

  const setSubjectResponse = (subjectCardData, nextToken) => {
    setState(prevState => {
      return {
        ...prevState,
        subjectCardData: subjectCardData,
        nextToken
      };
    });
  };
  const queryConstructor = async (pageFilter, limit) => {
    window.log(`Invoked queryConstuctor, pF, limit: ${pageFilter}, ${limit}`);
    const titleSearchObject = searchTerm
      ? { title: { contains: searchTerm } }
      : null;

    const mainFeedFilter = Object.assign(
      {},
      titleSearchObject ? titleSearchObject : null
    );

    const causeOnlyFilter = Object.assign(
      {},
      {
        type: { eq: "cause" },
        title: titleSearchObject
      }
    );

    const postOnlyFilter = Object.assign(
      {},
      {
        type: { eq: "post" },
        title: titleSearchObject
      }
    );

    const myAllFilter = Object.assign(
      {},
      {
        createdBy: { eq: userId },
        title: titleSearchObject
      }
    );

    const myCausesFilter = Object.assign(
      {},
      {
        createdBy: { eq: userId },
        type: { eq: "cause" },
        title: titleSearchObject
      }
    );

    const myPostsFilter = Object.assign(
      {},
      {
        createdBy: { eq: userId },
        type: { eq: "post" },
        title: titleSearchObject
      }
    );

    window.log(`nextToken passed to queryConstructor: ${nextToken}`);
    switch (true) {
      case sortOrderState === "all" && pageFilter === "CauseOnly":
        {
          window.log("sO=all, pF=cO");
          const data = listAllSubjectsOrderedByCreatedAt({
            filter: causeOnlyFilter,
            nextToken,
            limit
          });
          const subjects = data.subjects;
          const token = data.nextToken;
          setSubjectResponse(subjects, token);
          updateShouldSearch(false);
        }
        break;
      case sortOrderState === "all" && pageFilter === "PostOnly":
        {
          window.log("sO=all, pF=pO");
          const data = listAllSubjectsOrderedByCreatedAt({
            filter: postOnlyFilter,
            nextToken,
            limit
          });
          const subjects = data.subjects;
          const token = data.nextToken;
          setSubjectResponse(subjects, token);
          updateShouldSearch(false);
        }
        break;
      case sortOrderState === "all" && pageFilter === "Mixed":
        {
          window.log("sO=all, pF=m");
          const data = listAllSubjectsOrderedByCreatedAt({
            filter: mainFeedFilter,
            nextToken,
            limit
          });
          const subjects = data.subjects;
          const token = data.nextToken;
          setSubjectResponse(subjects, token);
          updateShouldSearch(false);
        }
        break;
      case sortOrderState === "mostVotes" && pageFilter === "CauseOnly":
        {
          window.log("sO=mV, pF=cO");
          const data = listAllSubjectsOrderedByVotes({
            filter: causeOnlyFilter,
            nextToken,
            limit
          });
          const subjects = data.subjects;
          const token = data.nextToken;
          setSubjectResponse(subjects, token);
          updateShouldSearch(false);
        }
        break;
      case sortOrderState === "mostVotes" && pageFilter === "PostOnly":
        {
          window.log("sO=mV, pF=pO");
          const data = listAllSubjectsOrderedByVotes({
            filter: postOnlyFilter,
            nextToken,
            limit
          });
          const subjects = data.subjects;
          const token = data.nextToken;
          setSubjectResponse(subjects, token);
          updateShouldSearch(false);
        }
        break;
      case sortOrderState === "mostVotes" && pageFilter === "Mixed":
        {
          window.log("sO=mV, pF=m");
          const data = listAllSubjectsOrderedByVotes({
            filter: mainFeedFilter,
            nextToken,
            limit
          });
          const subjects = data.subjects;
          const token = data.nextToken;
          setSubjectResponse(subjects, token);
          updateShouldSearch(false);
        }
        break;
      case sortOrderState === "mostComments" && pageFilter === "CauseOnly":
        {
          window.log("sO=mC, pF=cO");
          const data = listAllSubjectsOrderedByComments({
            filter: causeOnlyFilter,
            nextToken,
            limit
          });
          const subjects = data.subjects;
          const token = data.nextToken;
          setSubjectResponse(subjects, token);
          updateShouldSearch(false);
        }
        break;
      case sortOrderState === "mostComments" && pageFilter === "PostOnly":
        {
          window.log("sO=mC, pF=pO");
          const data = listAllSubjectsOrderedByComments({
            filter: postOnlyFilter,
            nextToken,
            limit
          });
          const subjects = data.subjects;
          const token = data.nextToken;
          setSubjectResponse(subjects, token);
          updateShouldSearch(false);
        }
        break;
      case sortOrderState === "mostComments" && pageFilter === "Mixed":
        {
          window.log("sO=mC, pF=m");
          const data = listAllSubjectsOrderedByComments({
            filter: mainFeedFilter,
            nextToken,
            limit
          });
          const subjects = data.subjects;
          const token = data.nextToken;
          setSubjectResponse(subjects, token);
          updateShouldSearch(false);
        }
        break;
      case sortOrderState === "all" && pageFilter === "Profile":
        {
          window.log("sO=all, pF=prof");
          const data = listAllSubjectsOrderedByCreatedAt({
            filter: myAllFilter,
            nextToken,
            limit
          });
          const subjects = data.subjects;
          const token = data.nextToken;
          setSubjectResponse(subjects, token);
          updateShouldSearch(false);
        }
        break;
      case sortOrderState === "myCauses" && pageFilter === "Profile":
        {
          window.log("sO=mC, pF=prof");
          const data = listAllSubjectsOrderedByCreatedAt({
            filter: myCausesFilter,
            nextToken,
            limit
          });
          const subjects = data.subjects;
          const token = data.nextToken;
          setSubjectResponse(subjects, token);
          updateShouldSearch(false);
        }
        break;
      case sortOrderState === "myPosts" && pageFilter === "Profile":
        {
          window.log("sO=mp, pF=prof");
          const data = listAllSubjectsOrderedByCreatedAt({
            filter: myPostsFilter,
            nextToken,
            limit
          });
          const subjects = data.subjects;
          const token = data.nextToken;
          setSubjectResponse(subjects, token);
          updateShouldSearch(false);
        }
        break;
      default:
        {
          window.log("sO=all, pF=m");
          const data = listAllSubjectsOrderedByCreatedAt({
            filter: mainFeedFilter,
            nextToken,
            limit
          });
          const subjects = data.subjects;
          const token = data.nextToken;
          setSubjectResponse(subjects, token);
          updateShouldSearch(false);
        }
        break;
    }
  };
  window.log(
    `&&&&&&At end of API sCD, nT, sOS: ${subjectCardData}, ${nextToken}, ${sortOrderState}`
  );
  return {
    subjectCardData,
    nextToken,
    queryConstructor,
    updateSortOrderState,
    setSubjectResponse,
    shouldSearch,
    updateShouldSearch,
    searchTerm,
    updateSearchText,
    loading
  };
};

export default FeedMainPageContentAPI;
