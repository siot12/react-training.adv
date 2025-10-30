import SettingsContainer from './SettingsContainer';

// MIDDLE COMPONENT - Doesn't use the props, just passes them down
const AccountSettingsPanel = () => {
  return (
    <div className="drilling-component">
      <h2>Account Settings Panel</h2>
      <SettingsContainer />
    </div>
  );
};

export default AccountSettingsPanel;
