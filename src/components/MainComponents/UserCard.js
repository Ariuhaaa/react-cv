import React from "react";

export default function UserCard({ user: { firstname, lastname } }) {
  //   console.log(user);

  return (
    <div>
      <img
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
        width={150}
        alt="user"
      />
      <p>
        {firstname} {lastname}
      </p>
    </div>
  );
}
