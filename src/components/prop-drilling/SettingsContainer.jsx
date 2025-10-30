import NotificationPreferences from './NotificationPreferences';

// ANOTHER MIDDLE COMPONENT - Still just passing props down
const SettingsContainer = () => {
  return (
    <div className="drilling-component">
      <h3>Settings Container</h3>
      <NotificationPreferences  />
    </div>
  );
};

export default SettingsContainer;
