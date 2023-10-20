export const userSelector = (state) => state.auth.firstName;
export const loggedInSelector = (state) => state.auth.isLoggedIn;
export const refreshSelector = (state) => state.auth.isRefreshing;