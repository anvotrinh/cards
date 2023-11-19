import React, { useState, useEffect, useRef, useCallback } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { listCards } from "./utils";
import Card from "./Card";
import { debounce } from "lodash";

const ListCards = ({ search }) => {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const curPage = useRef(1);
  const curSearch = useRef("");

  const fetchMoreData = useCallback(
    debounce(async () => {
      const searchParam = curSearch.current;
      const cards = await listCards(curPage.current, searchParam);
      if (searchParam !== curSearch.current) return;
      if (cards.length === 0) {
        setHasMore(false);
        return;
      }
      setItems((cItems) => [...cItems, ...cards]);
      curPage.current += 1;
    }, 500),
    []
  );

  useEffect(() => {
    setItems([]);
    setHasMore(true);
    curPage.current = 1;
    curSearch.current = search;
    fetchMoreData();
  }, [search, fetchMoreData]);

  console.log(hasMore, items);

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
      className="d-flex flex-wrap"
    >
      {items.map(({ imageUrl, name, text, type, rarity }, index) => (
        <Card
          key={index}
          imageUrl={imageUrl}
          name={name}
          text={text}
          type={type}
          rarity={rarity}
        />
      ))}
    </InfiniteScroll>
  );
};

export default ListCards;
