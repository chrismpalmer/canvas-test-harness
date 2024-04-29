import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import  { PropertyNode } from './types';

export interface PropertiesState {
  propNode?: PropertyNode | null;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: PropertiesState = {
  propNode: null,
  status: 'idle',
};

export const propertiesSlice = createSlice({
  name: 'properties',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setProperties: (state,action: PayloadAction<PropertyNode>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.propNode = action.payload;
    },
  }
});

export const { setProperties } = propertiesSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectProperties = (state: RootState) => state.properties.propNode;

export default propertiesSlice.reducer;
