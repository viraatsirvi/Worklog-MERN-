import * as types from '../action/action-type';

export function getSearchResults(data) {
    return {
      type: types.GET_SEARCH_RES,
      data
    };
  }