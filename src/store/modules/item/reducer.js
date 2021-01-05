const INITIAL_STATE = [{
  id: '',
  title: '',
}];

export default function item(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@item/ADD_ITEM':
      let pushItems = [...state];
      pushItems.push(action.payload);

      return pushItems;

    case '@item/DELETE_ITEM':
      let newItems = [...state];
      newItems = newItems.filter(item => item.id !== action.payload.itemId);

      return newItems;

    case '@item/UPDATE_ITEM':
      let updatedItems = [...state];

      for(let i = 0; i < updatedItems.length; i++) {
        if(updatedItems[i].id === action.payload.itemId) {
          updatedItems[i].title = action.payload.title;
        }
      }
      return updatedItems; 
    
    default: 
      return state;
  }
}