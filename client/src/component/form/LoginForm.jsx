import React from "react";
// import { useForm } from 'react-hook-form'
import Text from "../input/Text";
import Password from "../input/Password";
import Card from "../Card";

export default function LoginForm() {
  return (
    <div className="container vh-100">
      <div className="row vh-100">
        <div className="col self-align-center">
          <Card title="Login">
            <form>
              <Text label="Email" id="standard-basic" name="email" />
              <Password label="Password" id="password" name="password" />
              <button className="btn btn-primary" type="submit"> Login </button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
