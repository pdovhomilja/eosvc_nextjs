import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getSessionAsync = createAsyncThunk(
  "session/getSessionAsync",
  async (userEmail) => {
    try {
      const response = await fetch(`/api/user/userEmail/${userEmail}`);
      const session = await response.json();
      //console.log(session, "session response");
      if (session === null) {
        try {
          (async () => {
            const options = {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              //how to specify the json to body?
              body: JSON.stringify({
                name: "neznam",
                username: "neznam",
                email: userEmail,
                password: process.env.NEXT_PUBLIC_USER_DEFAULT_PASS,
              }),
            };

            await fetch("/api/auth/signup", options)
              .then((res) => res.json())
              .then((data) => {
                //if (data) router.push(process.env.NEXT_PUBLIC_APP_URL);
              });
          })();
          const response = await fetch(`/api/user/userEmail/${userEmail}`);
          const session = await response.json();
          return { session };
        } catch (error) {
          console.log(error);
        }
      } else {
        return { session };
      }
    } catch (error) {
      return error;
    }
  }
);

const initialState = {
  initialState: [],
};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    updateSession: (state, action) => {
      state = action.payload;
    },
  },
  extraReducers: {
    [getSessionAsync.fulfilled]: (state, action) => {
      return action.payload.session;
    },
  },
});

export const { updateSession } = sessionSlice.actions;
export default sessionSlice.reducer;
