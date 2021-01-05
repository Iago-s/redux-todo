export function addItem(item) {
  return {
    type: '@item/ADD_ITEM',
    payload: item
  };
}

export function deleteItem(itemId) {
  return {
    type: '@item/DELETE_ITEM',
    payload: itemId
  };
}

export function updateItem(item) {
  return {
    type: '@item/UPDATE_ITEM',
    payload: item
  };
}
