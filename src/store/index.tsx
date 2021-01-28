import { createContext, useCallback, useMemo, useReducer } from 'react';

export interface Trip {
  [key: string]: any;
}

export interface Country {
  [key: string]: any;
}

export interface AppContextInterface {
  trips: Trip[];
  countries: Country[];
}

export interface ActionInterface {
  type: string;
  payload: any;
}

interface AppContextInitial {
  trips: Trip[];
  countries: Country[];
  setTrips: (a0: any) => any;
  setCountries: (a0: any) => any;
}

const initialState: AppContextInitial = {
  trips: [],
  countries: [],
  setTrips: () => console.log('what'),
  setCountries: () => console.log('the fuck'),
};

export const AppContext = createContext(initialState);

const init = () => {
  return {
    trips: [],
    countries: [],
  };
};

function reducer(state: AppContextInterface, action: ActionInterface) {
  const { type, payload } = action;

  switch (type) {
    case 'INIT':
      return init();
    case 'SET_COUNTRIES':
      return {
        ...state,
        countries: payload,
      };
    case 'SET_TRIPS':
      return {
        ...state,
        trips: payload,
      };
    default:
      return state;
  }
}

function AppContextProvider({ children }: any) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setCountries = useCallback((payload) => {
    dispatch({ type: 'SET_COUNTRIES', payload });
  }, []);

  const setTrips = useCallback((payload) => {
    dispatch({ type: 'SET_TRIPS', payload });
  }, []);

  const countries = useMemo(() => {
    return state.countries;
  }, [state]);

  const trips = useMemo(() => {
    return state.trips;
  }, [state]);

  return (
    <AppContext.Provider value={{ setTrips, setCountries, trips, countries }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
