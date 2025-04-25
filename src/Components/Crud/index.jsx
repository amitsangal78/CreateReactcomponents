import React, { useEffect, useRef, useState, useTransition } from "react";
import styles from "./crud.module.css";

export const List = () => {
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();
  const [totalItems, setTotalItems] = useState(0);
  const [page, setPage] = useState(null);

  const totalPages = Math.ceil(totalItems / 10);

  useEffect(() => {
    if (page === null) return;
    startTransition(() => {
      fetch(`https://dummyjson.com/products?limit=10&skip=${page * 10}`)
        .then((res) => res.json())
        .then((data) => {
          setTotalItems(data["total"]);
          setList(data["products"]);
        })
        .catch((err) => {
          console.log(err);
          setPage(page);
        });
    });
  }, [page]);

  useEffect(() => {
    setPage(0);
  }, []);

  return (
    <div>
      {isPending ? (
        <div>Loading...</div>
      ) : (
        <div>
          {list.map((item) => (
            <div key={item.id}>{item.title}</div>
          ))}
        </div>
      )}
      {totalPages > 1 && (
        <div>
          <button onClick={() => setPage(page - 1)} disabled={page === 0}>
            Previous
          </button>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setPage(index)}
              disabled={index === page}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages - 1}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};
