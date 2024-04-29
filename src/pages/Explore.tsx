import { Typography } from "@mui/material";
import Layout from "../layout/Layout";

// Custom Componens
import SuperEvent from "../components/SuperEvent";
import GameCard from "../components/GameCard";

// Game Data
import { mafia } from "../data/mafia.json";

const Explore = () => {
  return (
    <Layout>
      <div className="flex items-center  gap-1  title-container mb-6">
        <Typography
          variant="h2"
          fontSize={14}
          fontWeight={800}
          color={"#ffffff"}
        >
          ایونت های فعال{" "}
        </Typography>
      </div>
      {/* Super Event Action */}
      <SuperEvent />
      {/* All Game Cards */}
      <section className="grid grid-cols-2 gap-2 my-4">
        {mafia.map((item: any) => (
          <GameCard
            key={item.id}
            conductor={item.conductor}
            title={item.title}
            date={item.date}
            address={item.location}
            avatar={item.avatar}
            image={item.image}
          />
        ))}
      </section>
    </Layout>
  );
};

export default Explore;
