import { createContext, type Context } from "react";

import { users, type User } from "../data";

export const AuthContext: Context<User> = createContext(users[1]);
