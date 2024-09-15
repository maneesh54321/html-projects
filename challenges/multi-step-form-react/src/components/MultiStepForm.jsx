import { useState } from "react";
import PersonalInfoForm from "./personal-info-form/PersonalInfoForm";
import Stepper from "./stepper/Stepper";
import SkillLevelForm from "./skill-level-form/SkillLevelForm";
import ChallengePreferencesForm from "./challenge-preferences-form/ChallengePreferencesForm";
import ReviewDetails from "./review-details/ReviewDetails";
import Congratulations from "./congratulations/Congratulations";

const TOTAL_STEPS = 4;

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);

  const [submitted, setSubmitted] = useState(false);

  function handleOnBack() {
    setCurrentStep((prevCurrentStep) =>
      prevCurrentStep > 1 ? prevCurrentStep - 1 : prevCurrentStep
    );
  }

  function handleOnNext() {
    setCurrentStep((prevCurrentStep) =>
      prevCurrentStep === TOTAL_STEPS ? prevCurrentStep : prevCurrentStep + 1
    );
  }

  function handleSubmit() {
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <article>
        <Congratulations />
      </article>
    );
  }

  return (
    <>
      <article>
        <header className="form-header">
          <Stepper steps={TOTAL_STEPS} activeStep={currentStep} />
        </header>
        <section className="form-body">
          {currentStep === 1 && <PersonalInfoForm />}
          {currentStep === 2 && <SkillLevelForm />}
          {currentStep === 3 && <ChallengePreferencesForm />}
          {currentStep === 4 && <ReviewDetails />}
        </section>
        <footer className="form-footer">
          {currentStep > 1 && (
            <button className="btn btn-outline" onClick={handleOnBack}>
              Go Back
            </button>
          )}
          {currentStep < TOTAL_STEPS && (
            <button className="btn btn-full next-btn" onClick={handleOnNext}>
              Next Step
            </button>
          )}
          {currentStep === TOTAL_STEPS && (
            <button className="btn btn-full next-btn" onClick={handleSubmit}>
              Submit
            </button>
          )}
        </footer>
      </article>
    </>
  );
}
