import React from 'react';
import Stars from './Stars';

const Sidebar = ({ review, user }) => (
  <div className="spaceOut">
    <div>
      Play Experience
      <div className="headingBG flexRating">
        <Stars
          stars={review.play}
        />
        {review.play}
      </div>
    </div>

    <div>
      Level of Difficulty
      <div className="headingBG flexRating">
        <Stars
          stars={review.difficulty}
        />
        {review.difficulty}
      </div>
    </div>

    <div>
      Value for Money
      <div className="headingBG flexRating">
        <Stars
          stars={review.value}
        />
        {review.value}
      </div>
    </div>

    <div>
      <b>Build Time: </b>
      {review.time}
      {' '}
      hours
    </div>

    <div>
      <b>Building Experience: </b>
      {user.experience}
    </div>

  </div>
);

export default Sidebar;
