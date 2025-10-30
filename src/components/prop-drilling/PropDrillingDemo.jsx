import AccountDashboard from './AccountDashboard';
import { PropDrilling as Problem } from '../Problems';
import { Provider } from 'react-redux';
import { store } from '../../store.js';

const PropDrillingDemo = () => {
  return (
    <Provider store={store}>
    <div className="prop-drilling-demo">
      <div className="prop-drilling-container">
        <Problem />
        <AccountDashboard />
      </div>
    </div>
    </Provider>
  );
};

export default PropDrillingDemo;
