import React from 'react';
import './index.css';
import CreativeEditorSDK from '@cesdk/cesdk-js';
import CreativeEngine from '@cesdk/engine';
import { useRef, useEffect } from 'react';

const Editor = () => {
  let config = {
    // The ID of the container element where the editor will be inserted.
    theme: 'dark',
  };
  const configEngine = {
    baseURL: 'https://cdn.img.ly/packages/imgly/cesdk-engine/1.12.0/assets'
  };
  const [isInitialized, setIsInitialized] = React.useState(false);
  const cesdk_container = useRef(null);
  useEffect(() => {
    if (cesdk_container.current) {
      CreativeEditorSDK.init(cesdk_container.current, config).then(
      );
      console.log(cesdk_container.current);
      setIsInitialized(true);
    }
  }, [config, cesdk_container]);

  useEffect(() => {
    let data = document.getElementsByClassName('ubq-dark');
    //console.log(data);
    CreativeEngine.init(configEngine).then(async (engine) => {
      data[0].append(engine.element);
      //document.getElementById('cesdk_container').append(engine.element);

      // Add default asset sources to the engine.
      await engine.addDefaultAssetSources();
      await engine.scene.loadFromURL('https://cdn.img.ly/packages/imgly/cesdk-js/latest/assets/templates/cesdk_postcard_1.scene');

      engine.block.findByType('//ly.img.ubq/text').forEach((id) => {
        engine.block.setOpacity(id, 0.5);
      });

      engine.element.remove();
      engine.dispose();
    });
  }, [configEngine, isInitialized]);

  return (
    <div
      ref={cesdk_container}
      style={{ width: '', height: '100vh' }}
    ></div>
  );
};

export default Editor;