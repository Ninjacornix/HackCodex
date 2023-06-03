import { useSelector, useDispatch } from 'react-redux';
import { SET_TOC } from 'store/actions';

export const useFetchTableOfContents = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return async (theme, title, context) => {
    console.log('fetch toc called!');

    const events = new EventSource(
      `${process.env.REACT_APP_API_URL}/make_toc?theme=${theme}&title=${title}&context=${context}&secret=${auth.access_token}`
    );

    events.onmessage = (event) => {
      dispatch({ type: SET_TOC, tableOfContents: { data: JSON.parse(event.data), isLoading: true } });
    };

    events.onerror = (error) => {
      dispatch({ type: SET_TOC, tableOfContents: { isLoading: false } });
      events.close();
    };
  };
};
