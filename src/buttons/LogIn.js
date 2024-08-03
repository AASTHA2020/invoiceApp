import React from 'react';
import { Link } from 'react-router-dom';

export function LogIn() {
  return (
    <Link
      to="/login"
      className="inline-block bg-gray-300 hover:bg-gray-400 text-slate-800 text-center font-semibold py-2 px-5 rounded"
    >
      Log In
    </Link>
  );
}
