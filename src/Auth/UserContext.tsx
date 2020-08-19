import { createContext } from "react";
import { User } from './AuthService';

const UserContext = createContext<[User, (user: User) => void]>([{} as User, () => {}])

export default UserContext