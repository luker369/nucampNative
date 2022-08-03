import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';

export const fetchComments = createAsyncThunk(
    'comments/fetchComments',
    async () => {
        const response = await fetch(baseUrl + 'comments');
        return response.json();
    }
);

const commentsSlice = createSlice({
    name: 'comments',
    initialState: { isLoading: true, errMess: null, commentsArray: [] },
    reducers: {
      addComment: (state, action) => {
        if (state.includes(action.payload)) {
            return state.filter(
                (comment) => comment !== action.payload
            );
        } else {
            state.push(action.payload);
        }
    }
    },
    extraReducers: {
        [fetchComments.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchComments.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMess = null;
            state.commentsArray = action.payload;
        },
        [fetchComments.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMess = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

createAsyncThunk(
  'comments/postComment',
  async (payload, { dispatch, getState }) => {
    setTimeout(() => {
      const { comments } = getState();
    }, 2000);
  }
)

export const commentsReducer = commentsSlice.reducer;
export const { addComment } = commentsSlice.actions;
