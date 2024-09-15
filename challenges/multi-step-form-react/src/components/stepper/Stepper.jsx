import classes from "./Stepper.module.css";

/* eslint-disable react/prop-types */
export default function Stepper({ steps, activeStep }) {
  return (
    <>
      <ul>
        {Array.from({ length: steps }).map((_, idx) => (
          <li key={idx} className={classes.listItem}>
            {idx !== 0 && (
              <span
                className={
                  classes.startLine +
                  (idx + 1 <= activeStep ? " " + classes.active : "")
                }
              ></span>
            )}
            <span
              className={
                classes.stepNum +
                (idx + 1 <= activeStep ? " " + classes.active : "")
              }
            >
              {idx + 1}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
