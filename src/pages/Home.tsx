import Layout from "../layout/Layout";

// Custom Components
import SuperEvent from "../components/SuperEvent";
import Title from "../templates/Title";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Layout>
      <SuperEvent />
    <Box className="my-6">
      <Title title="ایونت های فعال"
        description="نزدیک ترین کافه ها به موقعیت مکانی شما"
        href="#"
      />
    </Box>
    </Layout>
  );
};

export default Home;
