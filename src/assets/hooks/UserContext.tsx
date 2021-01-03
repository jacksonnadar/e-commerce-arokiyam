import { createContext } from 'react';
import firebase from 'firebase/app';
const UserContext = createContext<null | firebase.User>(null);
export default UserContext;
