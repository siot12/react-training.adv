export const authenticateUser = () => {
  console.log('SAGA: Checking authentication...');
  return new Promise((resolve) => setTimeout(() => resolve({ id: 'u1', name: 'John Doe' }), 500));
};


export const validateTransaction = ({ user, amount, from }) => {
  console.log(`SAGA: Validating $${amount} from ${from} for ${user.name}...`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (amount > 10000) {
        reject(new Error('Transfer limit exceeded ($10,000)'));
      } else {
        resolve({ valid: true });
      }
    }, 1000);
  });
};

export const executeTransfer = ({ from, to, amount }) => {
  console.log(`SAGA: Executing transfer of $${amount} from ${from} to ${to}...`);
  return new Promise((resolve) => {
    setTimeout(() => {
      const transaction = {
        id: `t_${Math.random().toString(36).substring(2, 9)}`,
        amount,
        from,
        to,
        timestamp: new Date().toISOString(),
      };
      resolve(transaction);
    }, 1500);
  });
};