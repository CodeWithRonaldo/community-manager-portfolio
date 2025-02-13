import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xbldaqno");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form
      action="https://formspree.io/f/xbldaqno"
      method="POST"
      onSubmit={handleSubmit}
    >
      <label htmlFor="project-name">Project Name</label>
      <input
        id="name"
        placeholder="Enter you project name"
        type="text"
        name="name"
      />
      <ValidationError prefix="Project" field="name" errors={state.errors} />
      <label htmlFor="Project-website">Project Website</label>
      <input
        placeholder="Enter you website"
        id="website"
        type="text"
        name="website"
      />
      <ValidationError
        prefix="Project Name"
        field="website"
        errors={state.errors}
      />
      <label htmlFor="email">Email to contact you</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="call">Convenient time for a call or chat(WAT)</label>
      <input id="call" type="number" name="call" />
      <ValidationError prefix="Call" field="call" errors={state.errors} />
      <label htmlFor="service">What service are you opting for?</label>
      <input id="service" type="text" name="service" />
      <ValidationError field="service" errors={state.errors} />
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
      
    </form>

    
  );
}

export default ContactForm;
