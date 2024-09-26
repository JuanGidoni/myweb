import Parragraph from "../Parragraph/Parragraph";

type Props = {
  text: string;
};

const Footer = ({ text }: Props) => {
  return (
    <footer>
      <Parragraph
        className="text-grey text-small pt-2 pl-1"
        isBold
        text={`Copyright © ${new Date().getFullYear()} - ${text}`}
      />
    </footer>
  );
};

export default Footer;
