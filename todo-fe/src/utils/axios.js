// import axios from "axios";

export const getDataApi = async (url, accessToken) => {
    const res = await fetch(`/${url}`, {
        method: "GET",
        headers: {
            Authorization: accessToken,
        },
    });

    return res.json();
};

export const postDataApi = async (url, accessToken) => {
    const res = await fetch(`/${url}`, {
        method: "POST",
        headers: {
            Authorization: accessToken,
        },
    });

    return res.json();
};

export const patchDataApi = (url, accessToken) =>
    fetch(`/${url}`, {
        method: "PATCH",
        headers: {
            Authorization: accessToken,
        },
    }).then((res) => res.json());
