import React from 'react';
import Button from './Button';

const Header = ({name} : {name:string}) => {
    return (
        <div className='header'>
            <h1>Welcome back {name}!</h1>
            <Button classe="edit-button" content='Edit Name' />
        </div>
    );
};

export default Header;