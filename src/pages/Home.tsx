import { Box, Stack } from "@mui/material";
import moment from "jalali-moment";

// Image
import AdBannerImg from "../assets/banner-home.jpg";

// Custom Components
import BLogCard from "../components/BLogCard";
import GameCard from "../components/GameCard";
import Preloader from "../components/Preloader";
import SuperEvent from "../components/SuperEvent";
import Title from "../components/Title";
import Layout from "../layout/Layout";
import CCarousel from "../templates/CCarousel";
import CTabs from "../templates/Tabs";

//  Data
import { blog } from "../data/blog.json";
import { FarsiMonth } from "../utils/FarsiMonth";

// Import Slicer
import { useGetAllEventsQuery } from "../redux/events/EventsSlicer";

const Home = () => {
  const { data, isLoading } = useGetAllEventsQuery({});

  if (isLoading) return <Preloader />;

  if (!data) return null;

  // Ensure data is an array
  const eventData = Array.isArray(data) ? data : [];

  // Map event data to create GameCard components
  const gameCards = eventData.map((item) => {
    const jalaliDate = moment(item.date, "YYYY/MM/DD").locale("fa");
    const jalaliMonthName = FarsiMonth[jalaliDate.jMonth()];
    const formattedDate = `${jalaliDate.jDate()} ${jalaliMonthName} ${jalaliDate.jYear()}`;

    return {
      content: (
        <GameCard
          key={item.id}
          id={item.id}
          conductor={item.conductor}
          date={formattedDate} // Display date with Farsi month name
          address={item.address}
          title={item.title}
          image={item.image}
          avatar={item.avatar}
        />
      ),
    };
  });


  // Map blog data to create BLogCard components
  const blogCards = blog.map((item) => ({
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
        <CCarousel perSlider={1.7} spaceBetween={10} slides={blogCards} />
      </Box>
    </Layout>
  );
};

export default Home;
