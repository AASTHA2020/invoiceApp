import React from 'react';
import { Link } from 'react-router-dom';

export function LogOut() {
  return (
    <Link
      to="/logout"
      className="inline-block bg-red-500 hover:bg-red-600 text-white text-center font-semibold py-2 px-5 rounded"
    >
      Log Out
    </Link>
  );
}
