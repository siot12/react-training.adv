// Finally a component that actually uses the props
const EmailToggle = ({ user, setUser }) => {
  const handleToggle = () => {
    setUser({
      ...user,
      notifications: {
        ...user.notifications,
        email: !user.notifications.email,
      },
    });
  };

  return (
    <div className="drilling-component">
      <h5>Email Toggle</h5>
      <p>
        Current email notifications: {user.notifications.email ? 'ON' : 'OFF'}
      </p>

      <button
        onClick={handleToggle}
        className={`btn ${
          user.notifications.email ? 'btn--secondary' : 'btn--success'
        }`}
      >
        Turn Email Notifications {user.notifications.email ? 'OFF' : 'ON'}
      </button>
    </div>
  );
};

export default EmailToggle;
