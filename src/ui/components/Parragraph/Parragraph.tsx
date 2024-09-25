interface Props {
  text?: string;
  className?: string;
  isBold?: boolean;
}

const Parragraph = ({ text, className, isBold }: Props) => {
  if (isBold)
    return (
      <p className={className}>
        <strong>{text}</strong>
      </p>
    );
  return <p className={className}>{text}</p>;
};

export default Parragraph;
