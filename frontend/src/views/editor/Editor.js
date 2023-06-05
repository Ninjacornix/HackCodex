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

import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/popover2/lib/css/blueprint-popover2.css';
import './editorOverride.scss';

import { setColorsPresetFunc } from 'polotno/config';
import { Button } from '@mui/material';

import { store } from 'App';

const Editor = () => {

  const tableOfContents = useSelector((state) => state.presentation.tableOfContents);
  const currentSlide = useSelector((state) => state.slides.selectedSlide);
  const pageIds = useSelector((state) => state.slides.pageIds);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('table of contents', pageIds);
    if (tableOfContents.data && tableOfContents.isLoading == false && tableOfContents.data.sections.length) {
      const id = pageIds[currentSlide];
      store.selectPage(id.toString());
    }
  }, [currentSlide, pageIds]);

  useEffect(() => {
    if (tableOfContents.data && tableOfContents.isLoading == false && tableOfContents.data.sections.length) {
      let array = [];
      let indexArray = [];
      for (let i = 0; i < tableOfContents.data.sections.length; i++) {
        for (let j = 0; j < tableOfContents.data.sections[i].slides.length; j++) {
          array.push(tableOfContents.data.sections[i].slides[j].title);
          const page = store.addPage();
          page.addElement({
            type: 'text',
            text: tableOfContents.data.sections[i].slides[j].title,
            x: 100,
            y: 100,
            width: 500,
            height: 100,
            fontSize: 40,
            fill: '#000'
          });
          indexArray.push(page.id);
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
  }, [tableOfContents]);

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
