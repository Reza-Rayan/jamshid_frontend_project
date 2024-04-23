import Layout from "../layout/Layout";

// Custom Components
import SuperEvent from "../components/SuperEvent";
import Title from "../components/Title";
import { Box, Stack } from "@mui/material";
import CTabs from "../templates/Tabs";
import GameCard from "../components/GameCard";
import AdBannerImg from "../assets/banner-home.jpg";
import BLogCard from "../components/BLogCard";

// Fake Data
import { mafia } from "../data/mafia.json";
import { blog } from "../data/blog.json";

const Home = () => {
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
      <Box className="grid grid-cols-2 gap-4">
        {mafia.map((item) => (
          <GameCard
            key={item.id}
            conductor={item.conductor}
            date={item.date}
            location={item.location}
            title={item.title}
            image={item.image}
            avatar={item.avatar}
          />
        ))}
      </Box>
      <Stack sx={{ margin: "32px auto" }}>
        <img src={AdBannerImg} alt="جم‌شید" className="rounded-[20px]" />
      </Stack>

      <Box className="my-8">
        <Title title="جدیدترین مقالات" href="#" />
        <div className="grid grid-cols-2 gap-4 mt-5">
          {blog.map((item) => (
            <BLogCard
              key={item.id}
              title={item.title}
              author={item.author}
              comments={item.comments}
              date={item.date}
              image={item.image}
            />
          ))}
        </div>
      </Box>
    </Layout>
  );
};

export default Home;
