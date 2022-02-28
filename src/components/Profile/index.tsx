import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import type { userInfo } from '../../@types/authTypes';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  console.log(user);

  if (!user) {
    return null;
  }

  return (
    <div>
      {isAuthenticated && (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.nickname}</h2>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
