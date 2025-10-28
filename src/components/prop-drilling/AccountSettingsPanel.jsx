import SettingsContainer from './SettingsContainer';

// MIDDLE COMPONENT - Doesn't use the props, just passes them down
const AccountSettingsPanel = ({ user, setUser }) => {
  return (
    <div className="drilling-component">
      <h2>Account Settings Panel</h2>
      <SettingsContainer user={user} setUser={setUser} />
    </div>
  );
};

export default AccountSettingsPanel;
