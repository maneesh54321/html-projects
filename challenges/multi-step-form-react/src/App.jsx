import "./App.css";
import MultiStepForm from "./components/MultiStepForm";

function App() {
  return (
    <>
      <div className="container">
        <h1 className="primary-heading">Join Our Community of Developers</h1>
        <p className="motivation-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
          impedit iusto libero error aut mollitia deserunt consequatur quo unde,
          est animi quidem quam? Libero illum assumenda aspernatur tempore vel
          quibusdam.
        </p>
        <div className="multi-step-form-box">
          <MultiStepForm />
        </div>
      </div>
    </>
  );
}

export default App;
