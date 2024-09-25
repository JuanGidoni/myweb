type Props = {
  title?: string;
  type: "H1" | "H2" | "H3" | "H4" | "H5" | "H6";
  className?: string;
  id?: string;
};

const Header = ({ title, type, className, id }: Props) => {
  if (typeof title === "undefined") {
    return null;
  }
  if (type === "H2") {
    return (
      <h2 className={className} {...(id && { id })}>
        {title}
      </h2>
    );
  }
  if (type === "H3") {
    return (
      <h3 className={className} {...(id && { id })}>
        {title}
      </h3>
    );
  }
  if (type === "H4") {
    return (
      <h4 className={className} {...(id && { id })}>
        {title}
      </h4>
    );
  }
  if (type === "H5") {
    return (
      <h5 className={className} {...(id && { id })}>
        {title}
      </h5>
    );
  }
  if (type === "H6") {
    return (
      <h6 className={className} {...(id && { id })}>
        {title}
      </h6>
    );
  }
  return (
    <h1 className={className} {...(id && { id })}>
      {title}
    </h1>
  );
};
export default Header;
