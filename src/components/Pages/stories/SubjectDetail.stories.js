// import React from 'react'
// import { storiesOf } from '@storybook/react'

// import { SubjectsMixed } from '../../../Constants/MockSubjectsData'

// import SubjectDetail from '../SubjectDetail'

// import { fetchSubject } from '../SubjectDetail'

//   //Allows us to ignore window . log calls
//   global.log = () => {}

// const defaultProps = {
//     match: { params: { subjectID: "1ABC" } },
//     location: { state: { subject: SubjectsMixed[0] } },
//     history: { state: { subject: SubjectsMixed[0] } }
// };

// const subject = SubjectsMixed[0]

// storiesOf('Pages|SubjectDetail/SubjectDetail', module)
//     .add('Cause', () => {
        
//         return (
//             <SubjectDetail {...defaultProps} />
//         )
        
//         })
//     // .add('Post', () => 
//     //     <MemoryRouter history = {history}>
//     //         <SubjectDetail secondary history = {history} location = {location} />
//     //     </MemoryRouter>)