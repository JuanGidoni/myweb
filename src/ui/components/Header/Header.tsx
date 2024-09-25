type Props = {
  title?: string;
  type: "H1" | "H2" | "H3" | "H4" | "H5" | "H6";
  className?: string;
};

const Header = (props: Props) => {
  if (typeof props.title === "undefined") {
    return null;
  }
  if (props.type === "H2") {
    return <h2 className={props.className}>{props.title}</h2>;
  }
  if (props.type === "H3") {
    return <h3 className={props.className}>{props.title}</h3>;
  }
  if (props.type === "H4") {
    return <h4 className={props.className}>{props.title}</h4>;
  }
  if (props.type === "H5") {
    return <h5 className={props.className}>{props.title}</h5>;
  }
  if (props.type === "H6") {
    return <h6 className={props.className}>{props.title}</h6>;
  }
  return <h1 className={props.className}>{props.title}</h1>;
};
export default Header;
