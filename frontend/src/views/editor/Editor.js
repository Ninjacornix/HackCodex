import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from 'polotno';
import { Toolbar } from 'polotno/toolbar/toolbar';
import { ZoomButtons } from 'polotno/toolbar/zoom-buttons';
import { SidePanel } from 'polotno/side-panel';
import { Workspace } from 'polotno/canvas/workspace';
import {SET_ALL_SLIDES, SET_PAGES_INDEX} from 'store/actions';

import { createStore } from 'polotno/model/store';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useCreateSlideContent } from 'services/slideCreator.service';

import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/popover2/lib/css/blueprint-popover2.css';
import './editorOverride.scss';

import { setColorsPresetFunc } from 'polotno/config';

import { store } from 'App';

const Editor = () => {

  const tableOfContents = useSelector((state) => state.presentation.tableOfContents);
  const currentSlide = useSelector((state) => state.slides.selectedSlide);
  const pageIds = useSelector((state) => state.slides.pageIds);
  const theme = useSelector((state) => state.presentation.theme);
  const title = useSelector((state) => state.presentation.title);
  const summary = useSelector((state) => state.presentation.summary.data);
  const dispatch = useDispatch();
  const slideData = useSelector((state) => state.currentSlide.currentSlideContent);
  const [prev, setPrev] = useState(null);

  const crateSlideContent = useCreateSlideContent();

  useEffect(() => {
    console.log('table of contents', pageIds);
    if (tableOfContents.data && tableOfContents.isLoading == false && tableOfContents.data.sections.length && pageIds.length && currentSlide != null) {
      if(currentSlide == -1) {
        return;
      } else {
        const id = pageIds[currentSlide];
        store.selectPage(id.toString());
      }
    }
  }, [currentSlide, pageIds]);

  useEffect(() => {
    if (tableOfContents.data && tableOfContents.isLoading == false && tableOfContents.data.sections.length) {
      let array = [];
      let indexArray = [];
      for (let i = 0; i < tableOfContents.data.sections.length; i++) {
        for (let j = 0; j < tableOfContents.data.sections[i].slides.length; j++) {
          array.push(tableOfContents.data.sections[i].slides[j].title);
          const slide_json = tableOfContents.data.sections[i].slides[j];
          crateSlideContent(title, theme, summary, slide_json);
          
          if (slideData && prev != JSON.parse(slideData).pages[0].children) {
            const slideChildrenData = JSON.parse(slideData).pages[0].children;
            console.log(JSON.parse(slideData).pages[0].children);
            const page = store.addPage();
            for (let k = 0; k < slideChildrenData.length; k++) {
              page.addElement(slideChildrenData[k]);
            }
            indexArray.push(page.id);
          }

          setPrev(JSON.parse(slideData).pages[0].children);
        }
      }

      console.log('array', indexArray);
      
      dispatch({ type: SET_PAGES_INDEX, pageIds: indexArray });
      dispatch({ type: SET_ALL_SLIDES, allSlides: array });

      let arr = [];
      for (let i = 0; i < store.pages.length; i++) {
        arr.push(i);
      }
    }
  }, [tableOfContents, slideData]);

  // define your own function
  setColorsPresetFunc((store) => {
    // return array of colors
    return ['#000', '#fff'];
  });

  // setInterval(() => {
  //   console.log(JSON.stringify(store.toJSON()));
  // }, 1000);

  // useEffect to hide icon with duplicate functionality
  const hideIcon = () => {
    // findd by class name bp4-icon-duplicate

    // get all elements with class name bp4-icon-duplicate
    const duplicateIcon = document.getElementsByClassName('bp4-icon-duplicate');

    const icons = document.getElementsByClassName('bp4-icon-insert');

    // console.log('aaaaaaaaaaaaaaaaaa');

    for (let i = 0; i < duplicateIcon.length; i++) {
      // set display to none
      duplicateIcon[i].style.display = 'none';

      // console.log(duplicateIcon[i]);
    }

    for (let i = 0; i < icons.length; i++) {
      // set display to none
      icons[i].style.display = 'none';

      // console.log(duplicateIcon[i]);
    }
  };

  // call useEffect
  setInterval(() => {
    hideIcon();
  }, 100);

  // setInterval(() => {
  //   console.log(JSON.stringify(store.toJSON()));
  // }, 5000);

  function handleAiMagic() {
    // console.log('ai magic called!');
    // console.log(JSON.stringify(store.toJSON()));
  }

  return (
    <div className="bp4-dark">
      {/* <Button onClick={() => handleAiMagic()}>Ejajifaj</Button> */}
      <PolotnoContainer style={{ height: '75vh', overflow: 'hidden' }}>
        <SidePanelWrap>
          <SidePanel store={store} />
        </SidePanelWrap>
        <WorkspaceWrap>
          <Toolbar store={store} downloadButtonEnabled />
          <Workspace store={store} />
          <ZoomButtons store={store} />
        </WorkspaceWrap>
      </PolotnoContainer>
    </div>
  );
};

export default Editor;
