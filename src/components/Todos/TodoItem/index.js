import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { deleteItem, updateItem } from '../../../store/modules/item/actions';

export default function TodoItem(props) {
  const [editable, setEditable] = useState(false);
  const [name, setName] = useState(props.item.title);

  const dispatch = useDispatch();

  return(
    <div className="row m-0 p-2 align-items-center">
      <div className="col-10 p-0">
        <p className="m-0">
          {
            editable ? 
              <input
                type="text" 
                className="form-control"
                placeholder={props.item.title}
                value={name}
                onChange={(e) => setName(e.target.value)}
              /> : 
              <h4>{props.item.title}</h4>
          }
        </p>
      </div>
      <div className="row col-2 p-0 mx-0 justify-content-center">
        <button 
          className="btn btn-primary col-5 mr-1"
          onClick={() => {
            dispatch(updateItem({
              ...props.item,
              title: name,
              itemId: props.item.id,
            }));

            if(editable) {
              setName(props.item.title);
            }

            setEditable(!editable);
          }}
        >
          {editable ? "Atualizar" : "Editar"}
        </button>
        <button 
          className="btn btn-danger col-5 mr-1"
          onClick={() => dispatch(deleteItem({ itemId: props.item.id }))}
        >
          Apagar
        </button>
      </div>
    </div>
  );
}