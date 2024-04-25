import { Box, Stack } from "@mui/material";
import AdBannerImg from "../assets/banner-home.jpg";
import BLogCard from "../components/BLogCard";
import GameCard from "../components/GameCard";
import SuperEvent from "../components/SuperEvent";
import Title from "../components/Title";
import Layout from "../layout/Layout";
import CCarousel from "../templates/CCarousel";
import CTabs from "../templates/Tabs";

// Fake Data
import { blog } from "../data/blog.json";
import { mafia } from "../data/mafia.json";

const Home = () => {
  // Map mafia data to create GameCard components
  const gameCards = mafia.map((item) => ({
    content: (
      <GameCard
        key={item.id}
        conductor={item.conductor}
        date={item.date}
        location={item.location}
        title={item.title}
        image={item.image}
        avatar={item.avatar}
        id={item.id}
      />
    ),
  }));
  // Map blog data to create BLogCard components
  const blogs = blog.map((item) => ({
    content: (
      <BLogCard
        key={item.id}
        title={item.title}
        author={item.author}
        comments={item.comments}
        date={item.date}
        image={item.image}
      />
    ),
  }));

  return (
    <Layout>
      <SuperEvent />
      <Box className="my-6">
        <Title
          title="ایونت های فعال"
          description="نزدیک ترین کافه ها به موقعیت مکانی شما"
          href="#"
        />
      </Box>
      <CTabs title="بازی ها: " />
      {/* Use CCarousel to display GameCard components */}
      <CCarousel perSlider={1.7} spaceBetween={10} slides={gameCards} />
      <Stack sx={{ margin: "32px auto" }}>
        <img src={AdBannerImg} alt="جم‌شید" className="rounded-[20px]" />
      </Stack>
      <Box className="my-8">
        {/* Use CCarousel to display BlogCard components */}
        <Title title="جدیدترین مقالات" href="#" />
        <CCarousel perSlider={1.7} spaceBetween={10} slides={blogs} />
      </Box>
    </Layout>
  );
};

export default Home;
