import { useSelector } from 'react-redux';

export const useMenuItems = () => {
  const pres = useSelector((state) => state.presentation);

  return {
    items: pres.tableOfContents.data ? [pres.tableOfContents.data] : []
  };
};
