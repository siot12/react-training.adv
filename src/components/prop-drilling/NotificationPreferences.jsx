import EmailToggle from './EmailToggle';

// YET ANOTHER MIDDLE COMPONENT - Still just passing props down
const NotificationPreferences = () => {
  return (
    <div className="drilling-component">
      <h4>Notification Preferences</h4>
      <EmailToggle />
    </div>
  );
};

export default NotificationPreferences;
