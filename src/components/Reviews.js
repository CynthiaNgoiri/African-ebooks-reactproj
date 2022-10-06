import React from "react";

function Reviews() {
  return (
    <>
      <div className="main-review-container">
        <h1 style={{ textAlign: "center" }}>Reviews</h1>

        <h2>
          That's the thing with books, they let you travel without moving your
          feet
        </h2>
        <div className="review-container">
          <div className="form-container">
            <h3>Give Your Review</h3>
            <form>
              <input type="text" placeholder="FirstName" name="FirstName" />
              <input type="text" placeholder="LastName" name="LastName" />
              <textarea
              rows="10"
              columns ="60"
                type="text"
                placeholder="Wrtie Your Review"
                name="Review"
              />
              <br></br>
              <button id="submitButton" type="submit">
                Submit
              </button>
            </form>
          </div>
          <div className="review-image">
            <img src="https://i.pinimg.com/564x/7d/6c/28/7d6c288597c1d4b3fe872fde1282eec0.jpg"></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reviews;
