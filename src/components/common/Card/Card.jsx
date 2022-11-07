import PropTypes from 'prop-types';

//Styles
import './Card.scss';
import defaultPerson from 'style/images/defaultPerson.png';

const Card = ({
  showHeader,
  className,
  avatarSrcImg,
  primaryHeaderTitle,
  secondaryHeaderTitle,
  cardContent,
  cardActions,
}) => {
  return (
    <div className={`card ${className}`}>
      {showHeader && (
        <div className="card__header">
          <div className="card__header__thumbnail">
            <img src={avatarSrcImg} alt="user image" />
          </div>
          <div className="card__header__title">
            <div className="card__header__title--primary">
              {primaryHeaderTitle}
            </div>
            <div className="card__header__title--secondary">
              {secondaryHeaderTitle}
            </div>
          </div>
        </div>
      )}
      <div className="card__body">{cardContent}</div>
      <div className="card__actions">{cardActions}</div>
    </div>
  );
};

Card.propTypes = {
  showHeader: PropTypes.bool,
  className: PropTypes.string,
  avatarSrcImg: PropTypes.string,
  primaryHeaderTitle: PropTypes.string,
  secondaryHeaderTitle: PropTypes.string,
  cardContent: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  cardActions: PropTypes.element,
};

Card.defaultProps = {
  showHeader: true,
  className: '',
  avatarSrcImg: defaultPerson,
  primaryHeaderTitle: '',
  secondaryHeaderTitle: '',
  cardContent: '',
};

export default Card;
