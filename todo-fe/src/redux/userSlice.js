import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

export const register = createAsyncThunk(
    "user/register",
    async ({ username, password, email, rememberMe }, action) => {
        const res = await axios.post("/register", {
            username,
            password,
            email,
        });

        return { ...res.data, rememberMe };
    }
);

const initialState = {
    username: "",
    email: "",
    accessToken: "",
    id: "",
    avatar: "",
    createdAt: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserInfo: (state, action) => {
            const { username, email, accessToken, _id, createdAt, avatar } =
                action.payload;
            state.username = username;
            state.avatar = avatar;
            state.accessToken = accessToken;
            state.id = _id;
            state.createdAt = createdAt;
            state.email = email;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.fulfilled, (state, action) => {
                const { user, accessToken, refreshToken, rememberMe } =
                    action.payload;

                if (rememberMe) {
                    Cookies.set("refresh", refreshToken, {
                        expires: 30,
                        path: "/refresh",
                    });
                }

                state.accessToken = accessToken;
                state.avatar = user.avatar;
                state.username = user.username;
                state.createdAt = user.createdAt;
                state.id = user._id;
                state.email = user.email;
                toast.success("Đăng ký ok rồi!");
            })
            .addCase(register.rejected, (state, action) => {
                toast.error("Không đăng ký được");
            });
    },
});

export const { setUserInfo } = userSlice.actions;

export default userSlice.reducer;
