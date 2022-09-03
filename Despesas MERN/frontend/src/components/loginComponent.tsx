import React from "react";
import { useForm } from "react-hook-form";
import "./loginCSS.css";

//type Error = "invalide e-mail" | "invalid password";

type FormData = {
  email: string;
  password: string;
};

export default function LogIn() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>();
  const onSubmit = handleSubmit(({ email, password }) =>
    console.log(email, password)
  );

  /*
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmited, setIsSubmited] = useState(false);

  const database = [
    {
      email: "admin@admin.com",
      password: "admin1234",
    },
  ];

  const handleSubmit = (event: React.SyntheticEvent) => {
    let userEmail: string;
    let userPassword: string;
    
    userEmail = document.forms['login'];
    
    event.preventDefault();

    
  }*/

  const isValidEmail = (email: string): boolean => {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  };

  const handleEmailValidation = (email: string): boolean => {
    const isValid: boolean = isValidEmail(email);

    return isValid;
  };

  return (
    <div id="biggerContainer">
      <form id="loginContainer" name="login">
        <div id="nameField">
          <input
            {...register("email", {
              required: true,
              validate: handleEmailValidation,
            })}
            name="email"
            type="email"
            placeholder="Email"
          />
          {errors.email && <p>E-mail is required</p>}
        </div>
        <div id="passwordField">
          <input
            {...register("password", { required: true, minLength: 8 })}
            name="password"
            type="password"
            placeholder="Password"
          />
          {errors.password && <p>Password must be longger than 8 characters</p>}
        </div>
        <div id="loginButtonDiv">
          <button id="loginButton" type="button" onClick={onSubmit}>
            Log in
          </button>
        </div>
      </form>
    </div>
  );
}
