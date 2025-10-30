// Finally a component that actually uses the props
import { useDispatch, useSelector } from 'react-redux';
import { toggleEmailNotifications } from '../user/userSlice.js';
import { transferRequested } from '../saga-example/bank/bankSlice.js';

const EmailToggle = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { isLoading, notification } = useSelector((state) => state.bank);

  const handleToggle = () => {
    dispatch(toggleEmailNotifications());
  };

  const handleTransfer = () => {
    if (isLoading) return;
    dispatch(
      transferRequested({
        amount: 100, // Sample amount
        from: 'savings',
        to: 'checking',
      })
    );
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

      <hr style={{ margin: '20px 0' }} />
      <h5>Demo Bank Transfer (Saga)</h5>
      <button onClick={handleTransfer} disabled={isLoading} className="btn">
        {isLoading ? 'Processing...' : 'Transfer $100 '}
      </button>

      {notification.message && (
        <p
          style={{
            marginTop: '10px',
            color: notification.type === 'error' ? '#D8000C' : '#4F8A10',
            background: notification.type === 'error' ? '#FFD2D2' : '#DFF2BF',
            padding: '8px',
            borderRadius: '4px',
          }}
        >
          {notification.message}
        </p>
      )}
    </div>
  );
};

export default EmailToggle;
