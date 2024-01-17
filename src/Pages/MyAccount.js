import React from 'react';
import CustomerMenu from '../components/Shared/CustomerMenu';

const MyAccount = () => {
    return (
        <div className='container mx-auto mt-10'>
            
            <CustomerMenu></CustomerMenu>
            <h2>My Account Page</h2>
        </div>
    );
};

export default MyAccount;