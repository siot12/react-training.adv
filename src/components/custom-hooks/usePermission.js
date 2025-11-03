import { useSelector } from 'react-redux';

export const usePermission = (permission) => {
  const userPermissions = useSelector((state) => state.permission);
  return userPermissions.includes(permission);
};