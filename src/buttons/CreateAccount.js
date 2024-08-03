import React from 'react';
import { Link } from 'react-router-dom';

export function CreateAccount() {
  return (
    <Link
      to="/signup"
      className="inline-block bg-blue-500 hover:bg-blue-600 text-white text-center font-semibold py-2 px-5 rounded"
    >
      Create Account
    </Link>
  );
}
