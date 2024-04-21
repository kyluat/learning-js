
// get contact id using react-router-dom
import {useParams} from "react-router-dom";

function Contact() {
    // get contact id using react-router-dom
    const { id } = useParams();
    console.log(id);

  return (
    <div>
      <h1>Contact is A children with {id}</h1>
    </div>
  );
}

export default Contact;