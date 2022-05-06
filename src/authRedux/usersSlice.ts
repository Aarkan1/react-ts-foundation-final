import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { IUser } from "../interfaces";
import { fetchUsers } from "./utils";

interface IUsersState {
	users: IUser[] | null;
	status: "loading" | "idle" | "error";
}

const initialState: IUsersState = {
	users: null,
	status: "idle",
};

/*
 * The function below is called a thunk and allows us to perform async logic. It
 * can be dispatched like a regular action: `dispatch(fetchUsersAsync())`. This
 * will call the thunk with the `dispatch` function as the first argument. Async
 * code can then be executed and other actions can be dispatched. Thunks are
 * typically used to make async requests. Another good thing about the createAsyncThunk
 * is that it gives us the possibility to inject code into the different states of the
 * asynchronous process. See the extraReducers part of the slice below a code example.
 */
export const fetchUsersAsync = createAsyncThunk(
	"users/fetchUsers",
	async () => {
		// The value we return becomes the "fulfilled" action payload
		return await fetchUsers();
	}
);

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUsersAsync.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchUsersAsync.rejected, (state) => {
				state.status = "error";
			})
			.addCase(
				fetchUsersAsync.fulfilled,
				(state, action: PayloadAction<IUser[]>) => {
					state.status = "idle";
					state.users = action.payload;
				}
			);
	},
});

export const selectUsers = (state: RootState) => state.users.users;
export const selectStatus = (state: RootState) => state.users.status;

export default usersSlice.reducer;
