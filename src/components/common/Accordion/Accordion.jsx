import { PropTypes } from 'prop-types';

//Styles
import './Accordion.scss';
const Accordion = ({ header, body }) => {
  return (
    <>
      <label className="task-collapse">
        <input type="checkbox" className="toggle-collapse" />
        <div className={`heading`}>{header}</div>
        <div className="collapse">
          <div className="content">{body}</div>
        </div>
      </label>
    </>
  );
};

Accordion.propTypes = {
  header: PropTypes.string,
  body: PropTypes.string,
};

Accordion.defaultProps = {
  header: '',
  body: '',
};
export default Accordion;
