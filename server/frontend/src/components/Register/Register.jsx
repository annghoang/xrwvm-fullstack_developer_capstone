import React from 'react';

const Register = () => {
    return (
        <form>
            <input type="text" name="Username" placeholder="Username" />
            <input type="text" name="FirstName" placeholder="First Name" />
            <input type="text" name="LastName" placeholder="Last Name" />
            <input type="email" name="Email" placeholder="Email" />
            <input type="password" name="Password" placeholder="Password" />
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;