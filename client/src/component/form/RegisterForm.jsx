import React from 'react'
import Text from '../input/Text'
import Password from '../input/Password'
import Card from '../Card'

export default function RegisterForm() {
  return (
    <div className="container vh-100">
      <div className="row vh-100">
        <div className="col self-align-center">
          <Card title="Register">
            <form>
              <Text label="Email" id="email" name="email" />
              <Password label="Password" id="password" name="password" />
              <button className="btn btn-primary" type="submit"> Register </button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  )
}