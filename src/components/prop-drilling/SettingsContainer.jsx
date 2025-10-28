import NotificationPreferences from './NotificationPreferences';

// ANOTHER MIDDLE COMPONENT - Still just passing props down
const SettingsContainer = ({ user, setUser }) => {
  return (
    <div className="drilling-component">
      <h3>Settings Container</h3>
      <NotificationPreferences user={user} setUser={setUser} />
    </div>
  );
};

export default SettingsContainer;
