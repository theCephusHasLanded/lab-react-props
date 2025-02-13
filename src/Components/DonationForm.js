import React from "react"
export default function DonationForm(props) {
  //create new variables to accumulate through the 
  //start at 1
  let num = 1
  let donations = props.donations
  // each element in array will add 1 to num -- accumulate 
  donations.forEach(el =>num += 1)


  return (

    
    <section className="donation">
  <h3>You could be donation <span className="secondary">#{num}!</span></h3>
  <form>
    <label htmlFor="name"
      >Name<input
        id="name"
        name="name"
        type="text"
        placeholder="Your name..." /></label
    ><label htmlFor="caption"
      >Caption<input
        id="caption"
        name="caption"
        type="text"
        placeholder="Add a brief message..." /></label
    ><label htmlFor="amount"
      >Amount<input
        id="amount"
        name="amount"
        type="number"
        placeholder="0" /></label
    ><button>Donate!</button>
  </form>
</section>

  )
}
