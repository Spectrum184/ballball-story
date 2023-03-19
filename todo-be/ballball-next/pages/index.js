import Layout from "@/components/Layout";
import Head from "next/head";

export default function Home(props) {
    console.log("Client", props);
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <Layout />
            <div className="container">
                <div className="container-header"></div>
            </div>
            <styles>
                {`
                    .container{
                        background: black;
                    }
                `}
                {/* styled component */}
            </styles>
        </>
    );
}

export async function getServerSideProps({ req, res }) {
    const dataUser = {
        name: "thanh",
        pass: "111",
    };
    console.log("Server", req.cookies);
    return {
        props: { dataUser }, // will be passed to the page component as props
    };
}
