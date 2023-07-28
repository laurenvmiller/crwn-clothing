import { ReactNode } from "react";
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
  ButtonSpinner,
} from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

export interface buttonType {
  children?: ReactNode;
  buttonType: string;
  isLoading?: any;
  otherProps?: any;
  onClick: () => void;
}

const Button = ({
  children,
  buttonType,
  isLoading,
  otherProps,
  onClick,
}: buttonType) => {
  if (buttonType === BUTTON_TYPE_CLASSES.inverted) {
    return (
      <InvertedButton disabled={isLoading} {...otherProps} onClick={onClick}>
        {isLoading ? <ButtonSpinner /> : { children }}
      </InvertedButton>
    );
  } else if (buttonType === BUTTON_TYPE_CLASSES.google) {
    return (
      <GoogleSignInButton
        disabled={isLoading}
        {...otherProps}
        onClick={onClick}
      >
        {children}
      </GoogleSignInButton>
    );
  } else {
    return (
      <BaseButton disabled={isLoading} {...otherProps} onClick={onClick}>
        {children}
      </BaseButton>
    );
  }
};

// const Button2 = (input: whateverType) => {
//   const CustomButton = getButton(input.buttonType);
//   return <CustomButton {...input.otherProps}>{input.children}</CustomButton>;
// };

// const Button3 = (input: {
//   children: ReactNode;
//   buttonType: any;
//   otherProps: any;
// }) => {
//   const CustomButton = getButton(input.buttonType);
//   return <CustomButton {...input.otherProps}>{input.children}</CustomButton>;
// };

// const Button4 = ({
//   children,
//   buttonType,
//   otherProps,
// }: {
//   children: ReactNode;
//   buttonType: any;
//   otherProps: any;
// }) => {
//   const CustomButton = getButton(buttonType);
//   return <CustomButton {...otherProps}>{children}</CustomButton>;
// };

export default Button;
