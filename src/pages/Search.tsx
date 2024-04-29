//Custom Components
import { Icon, Typography } from "@mui/material";
import { useState } from "react";
import BLogCard from "../components/BLogCard";
import GameCard from "../components/GameCard";
import SearchBox from "../components/SearchBox";
import CCarousel from "../templates/CCarousel";
// Fake Data
import { blog } from "../data/blog.json";

import { useGetAllEventsQuery } from "../redux/events/EventsSlicer";

const Search = () => {
  const [search, setSearch] = useState<string>("");

  const {data} = useGetAllEventsQuery({})
  // Search Handle Function By Writing
  const searchHandle = (event: any) => {
    setSearch(event.target.value);
  };

  const filterData = (datas: any) => {
    return datas?.filter((item: any) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredGames = filterData(data);
  const filteredBlogs = filterData(blog);

  // Map mafia data to create GameCard components
  const gameCards = filteredGames?.map((item: any) => ({
    content: (
      <GameCard
        key={item.id}
        conductor={item.conductor}
        date={item.date}
        address={item.address}
        title={item.title}
        image={item.image}
        avatar={item.avatar}
      />
    ),
  }));
  // Map blog data to create BLogCard components
  const blogs = filteredBlogs.map((item: any) => ({
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
    <div className="py-4">
      <SearchBox searchHandle={searchHandle} />
      {/* Events */}
      <section className="mb-6 my-10 px-6 space-y-4">
        <div className="flex items-center gap-1  title-container">
          <Icon>
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0833 17.5C14.4555 17.5 18 13.9555 18 9.58329C18 5.21104 14.4555 1.66663 10.0833 1.66663C5.71104 1.66663 2.16663 5.21104 2.16663 9.58329C2.16663 13.9555 5.71104 17.5 10.0833 17.5Z"
                stroke="#A6A6CB"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="#A6A6CB20"
              />
              <path
                d="M18.8333 18.3333L17.1666 16.6666"
                stroke="#A6A6CB"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Icon>
          <Typography
            variant="h2"
            fontSize={16}
            fontWeight={800}
            color={"#ffffff"}
          >
            ایونت ها
          </Typography>
        </div>
        {gameCards?.length > 0 ? (
          <CCarousel slides={gameCards} perSlider={1.7} spaceBetween={10} />
        ) : (
          <Typography variant="body1" color={"#4C4C72"} textAlign={"center"}>
            ایونت مورد نظر یافت نشد!
          </Typography>
        )}
      </section>
      {/* Blogs */}
      <section className="mb-6 my-10 px-6 space-y-4">
        <div className="flex items-center justify-between gap-1  title-container">
          <Icon>
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0833 17.5C14.4555 17.5 18 13.9555 18 9.58329C18 5.21104 14.4555 1.66663 10.0833 1.66663C5.71104 1.66663 2.16663 5.21104 2.16663 9.58329C2.16663 13.9555 5.71104 17.5 10.0833 17.5Z"
                stroke="#A6A6CB"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="#A6A6CB20"
              />
              <path
                d="M18.8333 18.3333L17.1666 16.6666"
                stroke="#A6A6CB"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Icon>
          <Typography
            variant="h2"
            fontSize={16}
            fontWeight={800}
            color={"#ffffff"}
          >
            مقالات
          </Typography>
        </div>
        {blogs.length > 0 ? (
          <CCarousel perSlider={1.7} spaceBetween={10} slides={blogs} />
        ) : (
          <Typography variant="body1" color={"#4C4C72"} textAlign={"center"}>
            مقاله مورد نظر یافت نشد!
          </Typography>
        )}
      </section>
    </div>
  );
};

export default Search;
