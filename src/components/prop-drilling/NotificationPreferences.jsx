import EmailToggle from './EmailToggle';

// YET ANOTHER MIDDLE COMPONENT - Still just passing props down
const NotificationPreferences = ({ user, setUser }) => {
  return (
    <div className="drilling-component">
      <h4>Notification Preferences</h4>
      <EmailToggle user={user} setUser={setUser} />
    </div>
  );
};

export default NotificationPreferences;
