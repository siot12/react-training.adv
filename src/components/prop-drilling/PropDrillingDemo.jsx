import AccountDashboard from './AccountDashboard';
import { PropDrilling as Problem } from '../Problems';

const PropDrillingDemo = () => {
  return (
    <div className="prop-drilling-demo">
      <div className="prop-drilling-container">
        <Problem />
        <AccountDashboard />
      </div>
    </div>
  );
};

export default PropDrillingDemo;
