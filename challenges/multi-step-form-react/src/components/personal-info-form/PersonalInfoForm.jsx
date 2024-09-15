import classes from "./PersonalInfoForm.module.css";
import Input from "../../UI/input/Input";

export default function PersonalInfoForm() {
  return (
    <>
      <h3 className="formHeading">Personal Information</h3>
      <p className="formDescription">
        Please provide your personal details so we can get to know you better.
      </p>
      <form className={classes.personalInfoForm}>
        <Input id="fullName" label="Full Name" type="text" />
        <Input id="email" label="Email Address" type="email" />
        <Input id="phoneNo" label="Phone Number" type="text" />
        <Input id="portfolio" label="Portfolio/Github Link" type="text" />
      </form>
    </>
  );
}
