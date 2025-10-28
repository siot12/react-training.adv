import { useState } from 'react';
import AccountSettingsPanel from './AccountSettingsPanel';

const AccountDashboard = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@bank.com',
    notifications: {
      email: true,
      sms: false,
    },
  });

  return (
    <div className="drilling-component">
      <h1>Account Dashboard</h1>
      <AccountSettingsPanel user={user} setUser={setUser} />
    </div>
  );
};

export default AccountDashboard;
