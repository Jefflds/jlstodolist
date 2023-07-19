import PropTypes from 'prop-types';

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div>
      <div className="todo" style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
        <div className="content">
          <p>{todo.text}</p>
          <p className="category">({todo.category})</p>
          <div>
            <button className="complete" onClick={()=> completeTodo(todo.id)}>Completar</button>
            <button className="remove" onClick={() => removeTodo(todo.id)}>X</button>
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
    id: PropTypes.number.isRequired,
    isCompleted: PropTypes.bool.isRequired,
  }).isRequired,
  removeTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired,
};

export default Todo;
