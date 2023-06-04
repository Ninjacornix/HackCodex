import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from 'polotno';
import { Toolbar } from 'polotno/toolbar/toolbar';
import { ZoomButtons } from 'polotno/toolbar/zoom-buttons';
import { SidePanel } from 'polotno/side-panel';
import { Workspace } from 'polotno/canvas/workspace';

import { createStore } from 'polotno/model/store';

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

  setInterval(() => {
    console.log(JSON.stringify(store.toJSON()));
  }, 1000);

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
