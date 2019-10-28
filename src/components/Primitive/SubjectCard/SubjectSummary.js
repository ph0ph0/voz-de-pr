
import styled from 'styled-components'

const Summary = styled.p`
    /* border: 1px solid purple; */
    width: 100%;
    height: 40px;

    //Setting margin to 0 is necessary as overflow adds a margin for some reason
    margin: 0px;
    margin-top: 8px;

    color: rgba(0, 0, 0, 0.54);
    text-align: left;
    font-size: 16px;
    vertical-align: center;

    /* This shit here is so that we can show an ellipsis after 2 lines*/
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
`

export default Summary