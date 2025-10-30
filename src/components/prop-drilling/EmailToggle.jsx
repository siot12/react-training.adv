// Finally a component that actually uses the props
import { useDispatch, useSelector } from 'react-redux';
import { toggleEmailNotifications } from '../user/userSlice.js';

const EmailToggle = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const handleToggle = () => {
    dispatch(toggleEmailNotifications());
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
