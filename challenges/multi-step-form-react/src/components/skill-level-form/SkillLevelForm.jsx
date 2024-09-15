import { useState } from "react";
import classes from "./SkillLevelForm.module.css";
import {
  CompassOutline,
  LeafOutline,
  RocketOutline,
  TrophyOutline,
} from "react-ionicons";

export default function SkillLevelForm() {
  const [level, setLevel] = useState("");

  function onSelect(level) {
    setLevel(level);
  }

  return (
    <>
      <h3 className="formHeading">Skill Level</h3>
      <p className="formDescription">
        Please tell us about your skill level in frontend development.
      </p>
      <ul className={classes.levels}>
        <li
          className={
            classes.level + (level === "beginner" ? " " + classes.active : "")
          }
          onClick={() => onSelect("beginner")}
        >
          <LeafOutline
            className={classes.levelIcon}
            width="1.6rem"
            height="1.6rem"
            color={"#fff"}
          />
          <span className={classes.levelText}>Beginner</span>
        </li>
        <li
          className={
            classes.level +
            (level === "intermediate" ? " " + classes.active : "")
          }
          onClick={() => onSelect("intermediate")}
        >
          <CompassOutline
            className={classes.levelIcon}
            width="1.6rem"
            height="1.6rem"
            color={"#fff"}
          />
          <span className={classes.levelText}>Intermediate</span>
        </li>
        <li
          className={
            classes.level + (level === "advanced" ? " " + classes.active : "")
          }
          onClick={() => onSelect("advanced")}
        >
          <RocketOutline
            className={classes.levelIcon}
            width="1.6rem"
            height="1.6rem"
            color={"#fff"}
          />
          <span className={classes.levelText}>Advanced</span>
        </li>
        <li
          className={
            classes.level + (level === "expert" ? " " + classes.active : "")
          }
          onClick={() => onSelect("expert")}
        >
          <TrophyOutline
            className={classes.levelIcon}
            width="1.6rem"
            height="1.6rem"
            color={"#fff"}
          />
          <span className={classes.levelText}>Expert</span>
        </li>
      </ul>
    </>
  );
}
