export default function Post(props) {
    console.log("Client", props);
    return <h1>login</h1>;
}

export async function getServerSideProps({ req, res, params }) {
    console.log(params);
    return {
        props: { user: "req.params" }, // will be passed to the page component as props
    };
}
