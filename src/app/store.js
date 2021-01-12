import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../features/appSlice';
import cameraReduce from '../features/cameraSlice';

export default configureStore({
  reducer: {
    app: appReducer,
    camera: cameraReduce
  }
});
