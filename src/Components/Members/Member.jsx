import React from 'react';
import './Member.css';

const Member = ({ member }) => {
    return (
        <div className="slide">
            <div className="member-info">
            <img src={`./src/assets/images/${member.avatarImg}`} alt={`${member.name}`} />
                <div>
                    <h3>{member.name}</h3>
                    <h4>Gym Membership <span>{member.membership}</span></h4>
                </div>
            </div>
            <p>{member.review}</p>
        </div>
    );
};

export default Member;


