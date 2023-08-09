import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button-component";

import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  UserData,
} from "../../utils/firebase/firebase.utils";

import { SignInContainer, ButtonsContainer } from "./sign-in-form.styles";
import { UserCredential } from "firebase/auth";
import { useUserHooks } from "../../hooks/user.hooks";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const { setCurrentUser, currentUser } = useUserHooks();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const data: UserCredential = await signInWithGooglePopup();
    const userData: UserData = {
      createdAt: new Date(),
      displayName: data.user.displayName || "",
      email: data.user.email || "",
    };
    setCurrentUser(userData);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const response: UserCredential | undefined =
        await signInAuthUserWithEmailAndPassword(email, password);
      console.log(response);
      resetFormFields();
    } catch (error: any) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
          break;
      }
    }
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required={true}
          onChange={handleChange}
          value={email}
          name="email"
        />
        <FormInput
          label="Password"
          type="password"
          required={true}
          onChange={handleChange}
          value={password}
          name="password"
        />
        <ButtonsContainer>
          <Button buttonType={BUTTON_TYPE_CLASSES.base} onClick={() => {}}>
            Sign In
          </Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
