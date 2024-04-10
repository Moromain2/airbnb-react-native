  import { AntDesign } from '@expo/vector-icons';
  
  // Diplaying the correct number of stars based on the user rating
  const setRatings = (rating) => { // Takes the rating as an parameter
    let offerRating = []; // Empty array to collect all the stars
    for (let i = 0; i < rating; i++) {
      // As long as the rating is not reached we push 'plain' stars in the array
      offerRating.push((
        <AntDesign name="star" size={16} color="orange" />
      ))
    }
    for (let j = rating; j < 5; j++) {
      // As long as the rating is smaller than 5 we push 'empty' stars in the array
      offerRating.push((
        <AntDesign name="star" size={16} color="lightgray" />
      ))
    }
    return offerRating;
  }

  export default setRatings;