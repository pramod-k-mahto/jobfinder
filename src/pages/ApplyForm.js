import "./ApplyForm.css";
function ApplyForm() {
  function formSubmit() {
    alert(" Your Form is Submited");
  }
  return (
    <>
      <div className="ApplyForm">
        <form action="">
          Name:
          <br />
          <input type="text" />
          <br />
          Education:
          <br />
          <input type="text" />
          <br />
          <button
            className="Apply-btn"
            onClick={() => {
              formSubmit();
            }}
          >
            {" "}
            Submit Form
          </button>
        </form>
      </div>
    </>
  );
}

export default ApplyForm;
