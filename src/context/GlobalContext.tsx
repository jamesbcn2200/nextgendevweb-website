import React, { createContext, useContext, useReducer, Dispatch } from 'react';

// Define the shape of the global state
interface GlobalState {
  theme: 'light' | 'dark';
  user: {
    isAuthenticated: boolean;
    userData: any | null;
  };
  notifications: any[];
}

// Initial state
const initialState: GlobalState = {
  theme: 'light',
  user: {
    isAuthenticated: false,
    userData: null
  },
  notifications: []
};

// Action types
type ActionType = 
  | { type: 'TOGGLE_THEME' }
  | { type: 'LOGIN', payload: any }
  | { type: 'LOGOUT' }
  | { type: 'ADD_NOTIFICATION', payload: any }
  | { type: 'REMOVE_NOTIFICATION', payload: string };

// Reducer function
function globalReducer(state: GlobalState, action: ActionType): GlobalState {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    case 'LOGIN':
      return { ...state, user: { isAuthenticated: true, userData: action.payload } };
    case 'LOGOUT':
      return { ...state, user: { isAuthenticated: false, userData: null } };
    case 'ADD_NOTIFICATION':
      return { ...state, notifications: [...state.notifications, action.payload] };
    case 'REMOVE_NOTIFICATION':
      return { 
        ...state, 
        notifications: state.notifications.filter(n => n.id !== action.payload) 
      };
    default:
      return state;
  }
}

// Create context
const GlobalContext = createContext<{
  state: GlobalState;
  dispatch: Dispatch<ActionType>;
} | undefined>(undefined);

// Provider component
export const GlobalProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook to use the global context
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};