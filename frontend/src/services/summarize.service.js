import { useSelector, useDispatch } from 'react-redux';
import { SET_SUMMARY } from 'store/actions';

export const useFetchSummary = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return async (text, urls) => {
    console.log('fetch summary called!');

    const events = new EventSource(
      `${process.env.REACT_APP_API_URL}/get_summarised?text=${text}&urls=${urls.join('|')}&secret=${auth.access_token}`
    );

    events.onmessage = (event) => {
      dispatch({ type: SET_SUMMARY, summary: { data: event.data, isLoading: true } });
    };

    events.onerror = (error) => {
      dispatch({ type: SET_SUMMARY, summary: { isLoading: false } });
      events.close();
    };
  };
};
