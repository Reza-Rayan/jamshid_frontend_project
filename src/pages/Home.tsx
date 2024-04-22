import Layout from "../layout/Layout";

// Custom Components
import SuperEvent from "../components/SuperEvent";
import Title from "../templates/Title";
import { Box, Stack } from "@mui/material";
import CTabs from "../templates/Tabs";
import GameCard from "../templates/GameCard";
import AdBannerImg from "../assets/banner-home.jpg";
import BLogCard from "../templates/BLogCard";

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
        <GameCard />
        <GameCard />
      </Box>
      <Stack sx={{ margin: "32px auto" }}>
        <img src={AdBannerImg} alt="جم‌شید" className="rounded-[20px]" />
      </Stack>

      <Box className="my-8">
        <Title title="جدیدترین مقالات" href="#" />
        <div className="grid grid-cols-2 gap-4 mt-5">
          <BLogCard />
          <BLogCard />
        </div>
      </Box>
    </Layout>
  );
};

export default Home;
