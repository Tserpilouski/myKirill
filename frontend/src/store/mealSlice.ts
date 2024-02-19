import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Meal = {
  id: string;
  day: string;
};

type MealState = {
  list: Meal[];
};

const initialState: MealState = {
  list: [],
};

const mealSlice = createSlice({
  name: "meal",
  initialState,
  reducers: {
    addMeal(state, action: PayloadAction<string>) {
      state.list.push({
        id: new Date().toISOString(),
        day: action.payload,
      });
    },
  },
});

export const { addMeal } = mealSlice.actions;

export default mealSlice.reducer;
