//Libs
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBuilding,
  faEnvelope,
  faLink,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

//Components
import Notifications from 'components/common/Notifications/Notifications';
import Spinner from 'components/common/Spinner/Spinner';
import Card from 'components/common/Card/Card';
import NavBar from 'components/navBar/NavBar';

//Styles
import styles from './Home.module.scss';
import backgroundImg from 'style/images/homeBackground.jpg';

//Utils
import { getUsers } from 'utils/Api';

//Enums
import { statuses } from 'constants/Enums';

const Home = () => {
  const { data, error, status } = useQuery(['users'], getUsers);

  const cardContent = (user) => {
    return (
      <>
        <div className={styles['home__cards__social-media-container']}>
          <FontAwesomeIcon icon={faPhone} />
          <span>{user.phone}</span>
        </div>
        <div className={styles['home__cards__social-media-container']}>
          <FontAwesomeIcon icon={faEnvelope} />
          <span>{user.email}</span>
        </div>
        <div className={styles['home__cards__social-media-container']}>
          <FontAwesomeIcon icon={faLocationDot} />
          <span>{`${user.address.street} Street ${user.address.city} City`}</span>
        </div>
        <div className={styles['home__cards__social-media-container']}>
          <FontAwesomeIcon icon={faBuilding} />
          <span>{user.company.name}</span>
        </div>
        <div className={styles['home__cards__social-media-container']}>
          <FontAwesomeIcon icon={faLink} />
          <a href={user.website} rel="noopener noreferrer" target="_blank">
            {user.website}
          </a>
        </div>
      </>
    );
  };

  return (
    <>
      <NavBar />
      <main className={styles.home}>
        <div className={styles['home__main']}>
          <div className={styles['home__main__left-section']}>
            <h1>{'Welcome'}</h1>
            <p>
              {
                "Publish your passions your way. Whether you'd like to share your knowledge, experiences or the latest news."
              }
            </p>
            <button>{'Get Started'}</button>
          </div>
          <img
            className={styles['home__main__right-section']}
            src={backgroundImg}
            alt=""
          />
        </div>
        {status === statuses.LOADING ? (
          <Spinner />
        ) : status === statuses.ERROR ? (
          <Notifications
            contentMessage={error.message}
            state={statuses.ERROR}
          />
        ) : (
          <>
            <h2>{'Discover our users'}</h2>
            <div className={styles['home__cards']}>
              {data?.map((user) => (
                <Card
                  key={user.id}
                  primaryHeaderTitle={user.name}
                  secondaryHeaderTitle={user.username}
                  cardContent={cardContent(user)}
                  cardActions={
                    <div className={styles['home__cards__btn-container']}>
                      <Link to={`${user.id}/posts`}>{'Posts'}</Link>
                    </div>
                  }
                />
              ))}
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default Home;
