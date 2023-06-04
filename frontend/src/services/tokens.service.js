import { useSelector, useDispatch } from 'react-redux';
import { SET_TOKENS } from 'store/actions';

export const useFetchUserTokens = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/get_usage?id=${auth.id}&secret=${auth.access_token}`);
    const data = await response.json();
    dispatch({ type: SET_TOKENS, tokens: data.usage });
  };
};
