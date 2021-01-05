import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addItem } from '../../../store/modules/item/actions';

export default function TodoInput() {
  const [name, setName] = useState('');

  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem({ 
      title: name,
      id: new Date().getTime().toString(),
    }));

    setName('');
  }

  return(
    <div className="row col-12 p-0">
      <div className="col-11">
        <input 
          className="form-control"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div className="col-1 pl-0">
        <button 
          className="btn btn-primary"
          onClick={handleAddItem}
        >
          Adicionar
        </button>
      </div>
    </div>
  );
}