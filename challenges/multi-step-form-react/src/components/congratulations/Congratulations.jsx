import { Checkmark } from "react-ionicons";

export default function Congratulations() {
  return (
    <>
      <p>
        <svg width="200" height="200" viewBox="0 0 200 200">
          <path
            d="M 50,50 C 75,25 125,25 150,50 S 175,75 200,100 Q 175,125 150,150 T 100,200 L 50,150 Z"
            fill="#FF6961"
          />
        </svg>
        <Checkmark color={"#000000"} height="150px" width="150px" />
      </p>
      <h3 className="formHeading">Congratulations!🎉</h3>
      <p className="formDescription">
        Your profile has been created and you are now ready to start
        participating in challenges that match your interest and coding
        experience level.
      </p>
    </>
  );
}
