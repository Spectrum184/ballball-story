import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

export const register = createAsyncThunk(
    "user/register",
    async ({ username, password, email, rememberMe }) => {
        const res = await axios.post("/register", {
            username,
            password,
            email,
        });

        return { ...res.data, rememberMe };
    }
);

export const login = createAsyncThunk(
    "user/login",
    async ({ username, password, rememberMe }) => {
        const res = await axios.post("/login", {
            username,
            password,
        });

        return { ...res.data, rememberMe };
    }
);

export const refresh = createAsyncThunk("user/refresh", async () => {
    const res = await axios.post("/refresh");

    return { ...res.data };
});

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

            state = {
                username,
                avatar,
                accessToken,
                id: _id,
                createdAt,
                email,
            };
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
                    });
                }
                state.accessToken = accessToken;
                state.avatar = user.avatar;
                state.createdAt = user.createdAt;
                state.id = user._id;
                state.email = user.email;
                state.username = user.username;

                toast.success("????ng k?? ok r???i!");
            })
            .addCase(register.rejected, () => {
                toast.error("Kh??ng ????ng k?? ???????c");
            })
            .addCase(login.fulfilled, (state, action) => {
                const { user, accessToken, refreshToken, rememberMe } =
                    action.payload;

                if (rememberMe) {
                    Cookies.set("refresh", refreshToken, {
                        expires: 30,
                    });
                }
                state.accessToken = accessToken;
                state.avatar = user.avatar;
                state.createdAt = user.createdAt;
                state.id = user._id;
                state.email = user.email;
                state.username = user.username;

                toast.success("????ng nh???p ok r???i!");
            })
            .addCase(login.rejected, () => {
                toast.error("Kh??ng ????ng nh???p ???????c");
            })
            .addCase(refresh.fulfilled, (state, action) => {
                const { user, accessToken } = action.payload;

                state.accessToken = accessToken;
                state.avatar = user.avatar;
                state.createdAt = user.createdAt;
                state.id = user._id;
                state.email = user.email;
                state.username = user.username;
            })
            .addCase(refresh.rejected, () => {
                toast.error("Kh??ng ????ng nh???p ???????c");
                Cookies.remove("refresh");
            });
    },
});

export const { setUserInfo } = userSlice.actions;

export default userSlice.reducer;
