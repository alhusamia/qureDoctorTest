import { ADD, DELETE } from "../actions/types";

const initialState = {
  medicinList: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD:
      const newMedicin = payload;
      const newitems = [newMedicin, ...state.medicinList];
      return {
        ...state,
        medicinList: newitems,
      };

    case DELETE:
      return {
        ...state,
        medicinList: state.medicinList.filter(
          (item) => item.type !== payload.type
        ),
      };

    default:
      return state;
  }
};
