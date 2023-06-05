import { useSelector, useDispatch } from 'react-redux';
import { SET_CURRENT_SLIDE_CONTENT } from '../store/actions';

export const useCreateSlideContent = () => {
    const dispatch = useDispatch();

    return async (title, theme, summary, slide_json) => {
        //console.log("text", slide_json);
        const _type = slide_json.type;
        //console.log(`${process.env.REACT_APP_API_URL}/make_slide?title=${title}&theme=${theme}&summary=${summary}&_type=${_type}`);
        const response = await fetch(`${process.env.REACT_APP_API_URL}/make_slide?title=${title}&theme=${theme}&summary=${summary}&_type=${_type}`);
        const data = await response.json();
        dispatch({ type: SET_CURRENT_SLIDE_CONTENT, currentSlideContent: data });
    }
}