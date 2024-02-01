import { ButtonProps } from "../../../../domain/models/common/button";


export default function Button(props: ButtonProps) {
    return (
        <button {...props}>{props.children}</button>
    )
}
