//Libs
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

//Components
import Notifications from 'components/common/Notifications/Notifications';
import Accordion from 'components/common/Accordion/Accordion';
import Spinner from 'components/common/Spinner/Spinner';
import NavBar from 'components/navBar/NavBar';

//Styles
import styles from './Posts.module.scss';

//Utils
import { getPostsByUserId } from 'utils/Api';

//Enums
import { statuses } from 'constants/Enums';

function usePost(userId) {
  return useQuery({
    queryKey: ['posts', userId],
    queryFn: () => getPostsByUserId(userId),
  });
}

const Posts = () => {
  const { id } = useParams();
  const { status, data, error } = usePost(id);
  return (
    <>
      <NavBar />
      <main>
        <h2>{'Posts'}</h2>
        {status === statuses.LOADING ? (
          <Spinner />
        ) : status === statuses.ERROR ? (
          <Notifications
            contentMessage={error.message}
            state={statuses.ERROR}
          />
        ) : (
          <div className={styles['posts-container']}>
            {data?.map((post) => (
              <Accordion key={post.id} header={post.title} body={post.body} />
            ))}
          </div>
        )}
      </main>
    </>
  );
};

export default Posts;
