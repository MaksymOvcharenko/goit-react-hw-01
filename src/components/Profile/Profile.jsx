import css from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => (
  <div className={css.place}>
    <div className={css.profile}>
      <img className={css.avatar} src={image} alt="User avatar" />
      <p className={css.title}>{name}</p>
      <p className={css.description}>{tag}</p>
      <p className={css.description}>{location}</p>
    </div>

    <ul className={css.stats}>
      <li className={css.statsItem}>
        <span className={css.statsItemTitle}>Followers</span>
        <span className={css.statsItemDescription}>{followers}</span>
      </li>
      <li className={css.statsItem}>
        <span className={css.statsItemTitle}>Views</span>
        <span className={css.statsItemDescription}>{views}</span>
      </li>
      <li className={css.statsItem}>
        <span className={css.statsItemTitle}>Likes</span>
        <span className={css.statsItemDescription}>{likes}</span>
      </li>
    </ul>
  </div>
);
export default Profile;
