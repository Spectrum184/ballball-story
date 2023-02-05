function sleep(ms) {
    return new Promise(() =>
        setTimeout(() => {
            console.log(`timeout ${ms}`);
        }, ms)
    );
}

const testPromise = async () => {
    const user = {
        username: "344334",
        email: "nvthanh1804@gmail.com",
        password:
            "$2b$12$WrsabTck7bn2kF7A7qyG4.l.O0kX3in6CtkUFLEsPfuNYOjQieKpe",
        avatar: "https://res.cloudinary.com/thanhtk/image/upload/v1667888214/fqhp3ifo52dbswrjmxta.jpg",
        _id: "63df5b802b4765bb64f83fda",
        createdAt: "2023-02-05T07:32:16.474Z",
        updatedAt: "2023-02-05T07:32:16.474Z",
        __v: 0,
    };

    const newUser = {
        ...user,
        password: "",
    };

    user.username = "thanh";

    console.log(user, newUser);
};

testPromise();
