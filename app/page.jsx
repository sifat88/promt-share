import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        AI powered prompts
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI powered prompts</span>
        <p className="desc text-center">
          Promtopia is an open-source AI prompting tool for modern world to
          discover, create and share creative prompts
        </p>
      </h1>
      <Feed />
    </section>
  );
};

export default Home;
