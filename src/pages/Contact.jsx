import { useLocation } from "react-router-dom";

const Contact = () => {
  const queryString = useLocation().search;

  const queryParams = new URLSearchParams(queryString);

  const name = queryParams.get("name");

  return (
    <div>
      <h2>Hey {name}, Contact us here...</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
        dicta iusto explicabo quibusdam neque? Adipisci doloribus dignissimos
        temporibus accusantium inventore fuga, necessitatibus, perspiciatis id
        ratione itaque eos natus atque repellendus.
      </p>
    </div>
  );
};

export default Contact;
