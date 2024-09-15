import classes from "./ChallengePreferencesForm.module.css";

export default function ChallengePreferencesForm() {
  return (
    <>
      <h3 className="formHeading">Challenge Preferenes</h3>
      <p className="formDescription">
        Please tell us which frontend skill you want to participate in.
      </p>
      <ul className={classes.preferences}>
        <li className={classes.preference}>
          <input type="checkbox" className={classes.checkbox} />
          <span className={classes.label}>HTML/CSS/JS</span>
        </li>
        <li className={classes.preference}>
          <input type="checkbox" className={classes.checkbox} />
          <span className={classes.label}>ReactJs</span>
        </li>
        <li className={classes.preference}>
          <input type="checkbox" className={classes.checkbox} />
          <span className={classes.label}>AngularJs</span>
        </li>
        <li className={classes.preference}>
          <input type="checkbox" className={classes.checkbox} />
          <span className={classes.label}>Vue.js</span>
        </li>
      </ul>
    </>
  );
}
