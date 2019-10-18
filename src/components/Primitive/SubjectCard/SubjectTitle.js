import PropTypes from 'prop-types'
import styled from 'styled-components'

const Title = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 20px;
    font-family: Avenir;

    margin-top: 16px;

    text-align: left;
    font-size: 18px;
`

Title.propTypes = {
    title: PropTypes.string.isRequired
}

export default Title