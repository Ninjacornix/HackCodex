import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from 'polotno';
import { Toolbar } from 'polotno/toolbar/toolbar';
import { ZoomButtons } from 'polotno/toolbar/zoom-buttons';
import { SidePanel } from 'polotno/side-panel';
import { Workspace } from 'polotno/canvas/workspace';

import { createStore } from 'polotno/model/store';

import { useEffect } from 'react';

import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/popover2/lib/css/blueprint-popover2.css';

import { setColorsPresetFunc } from 'polotno/config';

const Editor = () => {
  const store = createStore({
    key: 'nFA5H9elEytDyPyvKL7T'
  });

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

  return (
    <div className="bp4-dark">
      <PolotnoContainer style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
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
