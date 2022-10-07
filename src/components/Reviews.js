import React, { useEffect, useState } from "react";

function Reviews() {
  //Here I initialized states for the review section inputs
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [review, setReview] = useState("")

  // Fetch posted reviews from input
  const [getReviews, setGetReviews] = useState([])

  // submit handler and post request
  function submitForm(event) {
    event.preventDefault();
    const formData = { firstName, lastName, review }

    fetch(`https://ebooks-lib-api.herokuapp.com/reviews`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
      .then((resp) => resp.json())
      .then(() => {
        setFirstName("")
        setLastName("")
        setReview("")
      })
  }

  //Here we perform a get request using useEffect :)
  useEffect(() => {
    fetch(`https://ebooks-lib-api.herokuapp.com/reviews`)
      .then((resp) => resp.json())
      .then((reviews) => {
        console.log(reviews)
        setGetReviews(reviews)
      })
  }, [])

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
            <form onSubmit={submitForm}>
              <input type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} placeholder="FirstName" aria-required /><br></br>
              <input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} placeholder="LastName" aria-required /><br></br>
              <textarea
                rows="10"
                columns="60"
                type="text"
                value={review} onChange={(event) => setReview(event.target.value)} aria-required
                placeholder="Wrtie Your Review"
              />
              <br></br>
              <button id="submitButton" type="submit">
                Submit
              </button>
            </form>
          </div>
          <div className="review-image">
            <img src="https://i.pinimg.com/564x/7d/6c/28/7d6c288597c1d4b3fe872fde1282eec0.jpg" width={300}></img>
          </div>
        </div>
        <div className="reviews">
            {getReviews.map((review) => {
              return (
                // display every user review after mapping
                <div>
                <p key={review.id}>Name: {review.firstName} {review.lastName}</p>
                <p>Review: {review.review}</p>
                </div>
              )
            })}
          </div>
      </div>
    </>
  );
}

export default Reviews;
