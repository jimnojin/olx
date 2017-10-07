/** Initial state for Requests page */
export default {
  /**
   * Wether data is loading
   * @type Boolean
   */
  isLoading: true,
  
  /**
   * All requests
   * @type Array<Object>
   */
  data: [],
  
  /** 
   * Currently chosen filter
   * @type REQUEST_STATUS|null
   */
  filterBy: null 
};