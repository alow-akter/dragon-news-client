import React from 'react';
import { Link } from 'react-router-dom';

const ThramsAndCondition = () => {
    return (
        <div>
            <h3>Here is our
                Terms and conditions </h3>
            <p>Go back to  : <Link to='/singUp'>Sing Up</Link></p>
        </div>
    );
};

export default ThramsAndCondition;