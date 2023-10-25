export const userSelectorfirstName = (state) => state.auth.firstName;
export const userSelectorlastName = (state) => state.auth.lastName;
export const userSelectorNumber = (state) => state.auth.number;
export const userSelectorEmail = (state) => state.auth.email;
export const loggedInSelector = (state) => state.auth.isLoggedIn;
export const refreshSelector = (state) => state.auth.isRefreshing;
export const isAdminSelector = (state) => state.auth.isAdmin;