import React from "react";

const calculateTime = (birthDate: string) => {
  // Convert the birthdate string to a Date object
  const dob = new Date(birthDate);

  // Get the current date
  const currentDate = new Date();

  // Calculate the difference in years
  let age = currentDate.getFullYear() - dob.getFullYear();

  // Check if the birthday has occurred yet this year
  const monthDiff = currentDate.getMonth() - dob.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && currentDate.getDate() < dob.getDate())
  ) {
    age--;
  }

  return age + "ago";
};

export { calculateTime };
