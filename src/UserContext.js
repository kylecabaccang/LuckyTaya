import React from "react";

// Create a Context Object
const UserContext = React.createContext();

// The "Provider" component allows other components to consume/use the context
export const UserProvider = UserContext.Provider;

export default UserContext;