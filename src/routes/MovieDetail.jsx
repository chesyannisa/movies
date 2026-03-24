import { getMoviesDetail } from "../services/apiCall";
import styles from "../styles/MovieDetail.module.css";
import { useLoaderData } from "react-router-dom";
// eslint-disable-next-line react-refresh/only-export-components
export const loader = async ({ params }) => {
  const data = await getMoviesDetail(params.id);
  return { data };
};

const MovieDetail = () => {
  const { data } = useLoaderData();
  const {
    title,
    poster_path,
    overview,
    vote_average,
    vote_count,
    release_date,
  } = data;

  const IMG_API = "https://image.tmdb.org/t/p/w1280";
  return (
    <div className={styles.detailWrapper}>
      <div className={styles.container}>
        <div className={styles.posterWrapper}>
          <img src={IMG_API + poster_path} alt="img" />
        </div>

        <div className={styles.infoWrapper}>
          <h1 className={styles.title}>{title}</h1>

          <div className={styles.meta}>
            <span className={styles.rating}>{vote_average}</span>
            <span>{vote_count} votes</span>
            <span>{release_date}</span>
          </div>

          <p className={styles.overview}>{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
