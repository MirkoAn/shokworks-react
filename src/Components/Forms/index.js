import React, { useState } from 'react'

import { Form, FormButton, Row } from './styles'

export const Forms = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  function handleNameChange (e) {
    setName(e.target.value)
  }

  function handleEmailChange (e) {
    setEmail(e.target.value)
  }

  console.log(name)
  return (
    <Form action=''>
      <Row>
        <label>
          First Name <br />
          <input value={name} onChange={handleNameChange} type='text' name='name' placeholder='Robert Lee' />
        </label>
        <label>
          Last Name <br />
          <input type='text' name='name' placeholder='Anderson' />
        </label>
      </Row>
      <label>
        Your Email Adress <br />
        <input value={email} onChange={handleEmailChange} type='email' name='email' placeholder='kevin.jones@gmail.com' />
      </label>
      <label>
        Which Related Problem You Are Facing? <br />
        <select>
          <option value=''>Select One</option>
          <option value=''>Option 1</option>
          <option value=''>Option 2</option>
          <option value=''>Option 3</option>
        </select>
      </label>
      <label>
        Type Your Message <br />
        <input className='message' type='text' name='message' placeholder='Here goes your message' />
      </label>
      <FormButton>
        <a href='#' />
      </FormButton>
    </Form>
  )
}
