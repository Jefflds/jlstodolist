import PropTypes from 'prop-types';

const Todo = ({ todo }) => {
  return (
    <div>
      <div className="todo">
        <div className="content">
          <p>{todo.text}</p>
          <p className="category">({todo.category})</p>
          <div>
            <button className="complete">Completar</button>
            <button className="remove">X</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    text: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Todo;
