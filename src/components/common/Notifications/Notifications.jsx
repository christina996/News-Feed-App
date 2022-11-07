import { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';

//styles
import './Notifications.scss';

const Notifications = ({ contentMessage, state }) => {
  const [isHide, setIsHide] = useState(false);
  const [message, setMessage] = useState(contentMessage);

  useEffect(() => {
    const notificationTime = setTimeout(() => {
      setIsHide(true);
      setMessage(contentMessage);
    }, 3000);

    return () => {
      clearTimeout(notificationTime);
    };
  }, [contentMessage]);

  return (
    <div className={`toast ${!isHide ? 'toast--visible' : ''} toast--${state}`}>
      {message}
    </div>
  );
};

Notifications.propTypes = {
  contentMessage: PropTypes.string,
  state: PropTypes.string,
};

Notifications.defaultProps = {
  contentMessage: '',
  state: '',
};

export default Notifications;
