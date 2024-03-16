import { createContext,useContext, useEffect, useRef } from "react";
import reducer from "./reducer";
import { useReducer } from "react";

const initialState = {
    currentUser :null,
    openLogin: false,
    loading: false,
    alert: { open: false, severity: 'info', message: '' },
    profile:{open:false , file:null,photoURL:''},
    images:[],
    details:{title:'',desription:'',price:0},
    location:{lng:0 , lat:0},
    coachings:[],
    priceFilter : 0,
    addressFilter:null,
    filterCoachings:[],
    coaching:null,
};

const Context=createContext(initialState);
export const useValue = ()=>{
    return useContext(Context)
}

const ContextProvider = ({children}) => {
  const[state,dispatch]=useReducer(reducer,initialState);
  const mapRef=useRef();
  const containerRef = useRef();
  
  // useEffect(() => {
  // const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  //   if (currentUser) {
  //     dispatch({ type: 'UPDATE_USER', payload: currentUser });
  //   }
  // }, []);
    return (
   <Context.Provider value ={{state,dispatch,mapRef,containerRef}}>
   {children}

   </Context.Provider>
  );
};

export default ContextProvider