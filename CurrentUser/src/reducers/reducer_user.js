import { FETCH_USER,FETCH_ERROR } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_USER:
      return [...state, action.payload.data ];
  }
  return state;
}