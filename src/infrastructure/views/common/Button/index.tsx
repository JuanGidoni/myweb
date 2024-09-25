import { ButtonProps } from "../../../../domain/models/Button";

export default function Button(props: ButtonProps) {
  return <button {...props}>{props.children}</button>;
}
