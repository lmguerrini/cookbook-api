import type { NextPage } from "next";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Ingredients from "./ingredients/ingredients";

const Home: NextPage<{}> = () => {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section>
                <Ingredients />
            </section>
        </Layout>
    );
};

export default Home;
