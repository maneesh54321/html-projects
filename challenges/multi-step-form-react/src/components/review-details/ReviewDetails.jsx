import classes from "./ReviewDetails.module.css";

export default function ReviewDetails() {
  return (
    <>
      <h3 className="formHeading">Review and Confirm</h3>
      <p className="formDescription">
        Please review your information to make sure everything is accurate.
      </p>
      <div className={classes.details}>
        <div className={classes.field}>
          <p className={classes.fieldLabel}>Full Name</p>
          <p className={classes.fieldValue}>Maneesh Singh</p>
        </div>
        <div className={classes.field}>
          <p className={classes.fieldLabel}>Email Address</p>
          <p className={classes.fieldValue}>maneesh54321@gmail.com</p>
        </div>
        <div className={classes.field}>
          <p className={classes.fieldLabel}>Phone Number</p>
          <p className={classes.fieldValue}>+91 9199458746</p>
        </div>
        <div className={classes.field}>
          <p className={classes.fieldLabel}>Portfolio/Github Link</p>
          <p className={classes.fieldValue}>portfolio.link.com</p>
        </div>
        <div className={classes.field}>
          <p className={classes.fieldLabel}>Skill Level</p>
          <p className={classes.fieldValue}>Intermediate</p>
        </div>
        <div className={classes.field}>
          <p className={classes.fieldLabel}>Challenge Preferencek</p>
          <p className={classes.fieldValue}>ReactJs</p>
        </div>
      </div>
    </>
  );
}
