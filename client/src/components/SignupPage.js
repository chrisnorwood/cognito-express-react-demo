import React from 'react'

const SignupPage = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault()
    const values = {
      email: event.target.email.value,
      password: event.target.password.value,
    }

    console.log('Form submitted with: ', values)
  }

  return (
    <>
      <h1>Signup using Cognito</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>email:</label>
          <input type="text" name="email" placeholder="Email" />
        </div>
        <div>
          <label>password:</label>
          <input type="text" name="password" placeholder="Password" />
        </div>
        <div>
          <input type="submit" value="Signup" />
        </div>
      </form>
    </>
  )
}

export default SignupPage
