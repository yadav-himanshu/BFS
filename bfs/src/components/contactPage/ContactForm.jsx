import FeedbackForm from "./FeedbackFrom";
import Modal from "../utilities/Modal";

const ContactForm = () => {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-center my-5">
        Have something to say? Reach out to us!
      </h2>
      <div className="flex flex-col md:flex-row justify-center md:justify-between max-w-[1200px] mx-auto py-2 items-center">
        <div className="flex flex-col gap-3 max-w-[600px] md:max-w-[400px] min-w-[250px] p-2">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-xl">Address</h3>
            <p>
              <b>Office: </b>Jai Ambe Soc. MG Cross, Road No.3, Kandivali West,
              Mumbai-67.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-xl">Phone</h3>
            <p>+91-1234567890</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-xl">Email</h3>
            <p>info@bfs.com</p>
          </div>
          <Modal />
        </div>
        <FeedbackForm />
      </div>
    </div>
  );
};

export default ContactForm;
