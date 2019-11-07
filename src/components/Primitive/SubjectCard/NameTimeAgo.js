import React from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'

const C = ({children, isTimeAgo, ...props}) => {
    //If the text is to show the duration since the post, we need to include a bullet point (isTimeAgo)

    function convertUnicode(input) {
        return input.replace(/\\u(\w\w\w\w)/g, function(a, b) {
          var charcode = parseInt(b, 16);
          return String.fromCharCode(charcode);
        });
      }

      return (
          <div {...props}>
              {isTimeAgo ? convertUnicode("\u00B7") : ""} {children}
          </div>
      )
}

const NameTimeAgo = styled(C)`
    /* border: 1px solid firebrick;   */
  width: auto;
  height: 24px;
  padding-left: 8px;

  color: rgba(0, 0, 0, 0.54);
  text-align: left;
  font-size: 12px;
  vertical-align: center;
  /* Setting the line-height to 2em centres the text */
  line-height: 2em;
`

NameTimeAgo.propType = {
  isTimeAgo: PropTypes.bool.isRequired
}

export default NameTimeAgo