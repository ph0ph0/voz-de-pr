// import { useUser } from "CustomHooks/user";
// import { useSearch } from "CustomHooks/useSearch";
// import { useSubject } from "CustomHooks/useSubject";

// const FeedMainPageContentAPI = ({state, setState}) => {

//     const { user } = useUser();
//   const userId = user && user.id;

//   const {
//     listAllSubjectsOrderedByCreatedAt,
//     listAllSubjectsOrderedByVotes,
//     listAllSubjectsOrderedByComments,
//     loading
//   } = useSubject();

//   const {
//     shouldSearch,
//     updateShouldSearch,
//     searchTerm,
//     updateSearchText
//   } = useSearch();

//   const updateSortOrderState = newValue => {
//     window.log(`new filter state: ${newValue}`);
//     if (newValue === sortOrderState) {
//       window.log("sortOrderState was the same, aborting");
//       return;
//     }
//     setSubjectCardData([]);
//     setNextToken(null);
//     updateSearchText("");
//     setSortOrderState(newValue);
//   };

//   const queryConstructor = () => {
//     const titleSearchObject = searchTerm
//       ? { title: { contains: searchTerm } }
//       : null;

//     const mainFeedFilter = Object.assign(
//       {},
//       titleSearchObject ? titleSearchObject : null
//     );

//     const causeOnlyFilter = Object.assign(
//       {},
//       {
//         type: { eq: "cause" },
//         title: titleSearchObject
//       }
//     );

//     const postOnlyFilter = Object.assign(
//       {},
//       {
//         type: { eq: "post" },
//         title: titleSearchObject
//       }
//     );

//     const myAllFilter = Object.assign(
//       {},
//       {
//         createdBy: { eq: userId },
//         title: titleSearchObject
//       }
//     );

//     const myCausesFilter = Object.assign(
//       {},
//       {
//         createdBy: { eq: userId },
//         type: { eq: "cause" },
//         title: titleSearchObject
//       }
//     );

//     const myPostsFilter = Object.assign(
//       {},
//       {
//         createdBy: { eq: userId },
//         type: { eq: "post" },
//         title: titleSearchObject
//       }
//     );

//     window.log(`nextToken passed to queryConstructor: ${nextToken}`);

//     switch (true) {
//       case sortOrder === "all" && pageFilter === "CauseOnly":
//         window.log("sO=all, pF=cO");
//         return listAllSubjectsOrderedByCreatedAt({
//           filter: causeOnlyFilter,
//           nextToken,
//           limit
//         });
//       case sortOrder === "all" && pageFilter === "PostOnly":
//         window.log("sO=all, pF=pO");
//         return listAllSubjectsOrderedByCreatedAt({
//           filter: postOnlyFilter,
//           nextToken: nextToken,
//           limit
//         });
//       case sortOrder === "all" && pageFilter === "Mixed":
//         window.log("sO=all, pF=M");
//         return listAllSubjectsOrderedByCreatedAt({
//           nextToken: nextToken,
//           filter: mainFeedFilter,
//           limit
//         });
//       case sortOrder === "mostVotes" && pageFilter === "CauseOnly":
//         window.log("sO=mostVotes, pF=cO");
//         return listAllSubjectsOrderedByVotes({
//           filter: causeOnlyFilter,
//           nextToken: nextToken,
//           limit
//         });
//       case sortOrder === "mostVotes" && pageFilter === "PostOnly":
//         window.log("sO=mostVotes, pF=pO");
//         return listAllSubjectsOrderedByVotes({
//           filter: postOnlyFilter,
//           nextToken: nextToken,
//           limit
//         });
//       case sortOrder === "mostVotes" && pageFilter === "Mixed":
//         window.log("sO=mostVotes, pF=M");
//         return listAllSubjectsOrderedByVotes({
//           nextToken: nextToken,
//           filter: mainFeedFilter,
//           limit
//         });
//       case sortOrder === "mostComments" && pageFilter === "CauseOnly":
//         window.log("sO=mostComments, pF=cO");
//         return listAllSubjectsOrderedByComments({
//           filter: causeOnlyFilter,
//           nextToken: nextToken,
//           limit
//         });
//       case sortOrder === "mostComments" && pageFilter === "PostOnly":
//         window.log("sO=mostComments, pF=pO");
//         return listAllSubjectsOrderedByComments({
//           filter: postOnlyFilter,
//           nextToken: nextToken,
//           limit
//         });
//       case sortOrder === "mostComments" && pageFilter === "Mixed":
//         window.log("sO=mostComments, pF=M");
//         return listAllSubjectsOrderedByComments({
//           nextToken: nextToken,
//           filter: mainFeedFilter,
//           limit
//         });
//       case sortOrder === "all" && pageFilter === "Profile":
//         window.log("sO=myAll, pF=Prof");
//         return listAllSubjectsOrderedByCreatedAt({
//           filter: myAllFilter,
//           nextToken: nextToken,
//           limit
//         });
//       case sortOrder === "myCauses" && pageFilter === "Profile":
//         window.log("sO=myCauses, pF=Prof");
//         return listAllSubjectsOrderedByCreatedAt({
//           filter: myCausesFilter,
//           nextToken: nextToken,
//           limit
//         });
//       case sortOrder === "myPosts" && pageFilter === "Profile":
//         window.log("sO=myPosts, pF=Prof");
//         return listAllSubjectsOrderedByCreatedAt({
//           filter: myPostsFilter,
//           nextToken: nextToken,
//           limit
//         });
//       default:
//         window.log("default sO=all, pF=M");
//         return listAllSubjectsOrderedByCreatedAt({ nextToken: nextToken });
//     }
//   };

//   return {
//       queryConstructor,
//       updateSortOrderState,
//       loading
//   }
// };

// export default FeedMainPageContentAPI;
