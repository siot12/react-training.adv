import { useSelector } from 'react-redux';

export const usePermission = (permission) => {
  debugger
  const userPermissions = useSelector((state) => state.permission);
  return userPermissions.includes(permission);
};