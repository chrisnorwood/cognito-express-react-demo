import React from 'react'

const PrivatePage = (props) => (
  <>
    <h1>Private Page</h1>
    <p>This page should only be accessible while logged in.</p>
    <p>
      And here will be a private, authenticated API call to my express server
    </p>
  </>
)

export default PrivatePage
