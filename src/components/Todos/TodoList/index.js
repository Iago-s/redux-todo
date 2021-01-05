import { useSelector } from 'react-redux';

import TodoItem from '../TodoItem';

export default function TodoList() {
  const items = useSelector(state => state.item);

  return(
    <div className="pr-3 mt-3 align-items-center">
      {
        items.map((item) => {
          return <TodoItem key={item.id} item={item}/>
        })
      }
    </div>
  );
}