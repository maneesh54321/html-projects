import classes from "./Input.module.css";

/* eslint-disable react/prop-types */
export default function Input({ id, label, ...props }) {
  return (
    <div className={classes.formInput}>
      <label htmlFor={id} className={classes.label}>
        {label}
      </label>
      <input id={id} {...props} />
    </div>
  );
}
