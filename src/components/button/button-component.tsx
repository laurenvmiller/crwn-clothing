import { ReactNode } from "react";
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

export interface buttonType {
  children?: ReactNode;
  buttonType: string;
  otherProps?: any;
  onClick: () => void;
}

const Button = ({ children, buttonType, otherProps, onClick }: buttonType) => {
  // switch (buttonType) {
  //   case BUTTON_TYPE_CLASSES.inverted:
  //    return <InvertedButton {...otherProps}>{children}</InvertedButton>;
  //   case BUTTON_TYPE_CLASSES.google:
  //     return <GoogleSignInButton {...otherProps}>{children}</GoogleSignInButton>
  //   default:
  //     return <BaseButton {...otherProps}>{children}</BaseButton>;
  // }

  if (buttonType === BUTTON_TYPE_CLASSES.inverted) {
    return (
      <InvertedButton {...otherProps} onClick={onClick}>
        {children}
      </InvertedButton>
    );
  } else if (buttonType === BUTTON_TYPE_CLASSES.google) {
    return (
      <GoogleSignInButton {...otherProps} onClick={onClick}>
        {children}
      </GoogleSignInButton>
    );
  } else {
    return (
      <BaseButton {...otherProps} onClick={onClick}>
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
