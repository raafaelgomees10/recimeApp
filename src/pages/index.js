import { promises as fs } from "fs";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Meta from "@/components/meta/meta";
import { useEffect, useState } from "react";
import Loading from "@/components/loading/loading";
import SandwichesList from "@/components/sandwichesList";

export async function getStaticProps() {
  const file = await fs.readFile(
    process.cwd() + "/src/data/recipes.json",
    "utf8"
  );
  const data = JSON.parse(file);
  return {
    props: {
      recipes: data,
    },
  };
}

export default function Home({ recipes }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Meta
        title="ReciMe App"
        description="Find quick and easy recipes for everyday meals. From main dishes to delicious desserts, we have something for everyone."
        canonical={`https://recime-rafael.netlify.app`}
        ogimage="/ogimage.webp"
      />

      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <main className="mainContainer">
            <SandwichesList recipes={recipes} />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
