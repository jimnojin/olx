import { KEY_TYPE } from './constants';

export default {
  isLoading: true,
  isEditing: false,
  data: [
    {
      name: 'user_id',
      description: 'descr',
      type: KEY_TYPE.INTEGER,
      isPrivite: false, // sensitivity
      values: [] // @todo array of allowed types
    }    
  ]  
}
