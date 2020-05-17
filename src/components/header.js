import React, { useEffect, useState } from "react";
import { getAllEpisodes, pagination, filterByName } from "../helper";
import Form from "./form";

const Header = () => {
  const [values, setValues] = useState({
    episodes: [],
    nextPage: "",
    prevPage: "",
  });

  const { episodes, nextPage, prevPage } = values;
  const preLoad = () => {
    getAllEpisodes()
      .then((data) => {
        setValues({
          ...values,
          nextPage: data.info.next,
          episodes: data.results,
          prevPage: data.info.prev,
        });
        console.log(values);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    preLoad();
  }, []);

  const onPage = (url) => {
    pagination(url)
      .then((data) => {
        if (data === undefined) {
          return;
        } else {
          setValues({
            ...values,
            episodes: data.results,
            nextPage: data.info.next,
            prevPage: data.info.prev,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onFilter = (name) => {
    console.log(name);
    filterByName(name)
      .then((data) => {
        console.log(data);

        if (data) {
          console.log(data.results.episode);
          setValues({
            ...values,
            nextPage: data.info.next,
            episodes: data.results,
            prevPage: data.info.prev,
          });
        } else {
          return;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="row">
      <div className=" header col-md-12">
        <h1>The Rick and Morty API</h1>
        <div className="pagination">
          <li className="page-item">
            <a
              onClick={() => {
                onPage(prevPage);
              }}
              className={
                prevPage ? "page-link" : "page-link text-danger disabled"
              }
            >
              prev
            </a>
          </li>
          <li className="page-item">
            <a
              onClick={() => {
                onPage(nextPage);
              }}
              className={
                nextPage ? "page-link" : "page-link text-danger disabled"
              }
            >
              Next
            </a>
          </li>
        </div>
        <Form onFilter={onFilter} />
      </div>
      <div className="col-md-12">
        {
          <ul className="list-group">
            {episodes.map((episode, index) => (
              <li key={index} className="list-group-item">
                {episode.name} {episode.episode} {episode.air_date}
              </li>
            ))}
          </ul>
        }
      </div>
    </div>
  );
};

export default Header;
