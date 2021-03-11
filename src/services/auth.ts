export const isAuthenticated = () => localStorage.getItem('jwt') !== null;
export const getToken = () => localStorage.getItem('jwt');
export const login = (token: string) => {
  localStorage.setItem('jwt', token);
};
export const logout = () => {
  localStorage.removeItem('jwt');
};
