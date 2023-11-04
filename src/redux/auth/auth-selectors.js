const getIsAuthenticated = state => state.auth.isAuthenticated;

const getUserName = state => state.auth.user.name;

const getErrorMessage = state => state.auth.error;

const getErrorStatus = state => state.auth.errorStatus;

const selectors = {
  getIsAuthenticated,
  getUserName,
  getErrorMessage,
  getErrorStatus,
};

export default selectors;
