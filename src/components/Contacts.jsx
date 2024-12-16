import { CONTACT } from "../constants";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Contacts = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h2 className="my-10 text-center text-4xl">
        <span className="">Impresed ?</span> Let&apos;s Talk
      </h2>
      <div className="text-center">
        <a
          className="flex items-center justify-center gap-4 text-2xl"
          href="mailto:amanbharti0897@gmail.com"
        >
          <MdOutlineEmail />
          <p className="my-4" style={{}}>
            {CONTACT.email}
          </p>
        </a>
        <p className="my-4 text-xl flex items-center justify-center gap-4">
          <FaPhoneAlt />

          {CONTACT.phoneNo}
        </p>
      </div>
    </div>
  );
};

export default Contacts;
