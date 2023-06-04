import React from 'react';
import './index.css';
import CreativeEngine, { supportsWasm, supportsVideo } from 'https://cdn.img.ly/packages/imgly/cesdk-engine/1.12.0/index.js';
import CreativeEditorSDK from '@cesdk/cesdk-js';

import { useRef, useEffect } from 'react';

const Component = (props = {}) => {
  const config = {
    baseURL: 'https://cdn.img.ly/packages/imgly/cesdk-engine/1.12.0/assets'
  };
  const [isInitialized, setIsInitialized] = React.useState(false);

  const cesdk_container = useRef(null);
  useEffect(() => {
    if (cesdk_container.current) {
        alert('CreativeEditorSDK.init');
      CreativeEditorSDK.init(cesdk_container.current, props.config).then();
      setIsInitialized(true);
    }
  }, [props, cesdk_container]);

  useEffect(() => {
    if (
      supportsWasm()
      // If you use video in your scene you can check if the browser supports it as well.
      // supportsVideo()
    ) {
      CreativeEngine.init(config).then(async (engine) => {
        document.getElementById('cesdk_container').append(engine.element);

        // Add default asset sources to the engine.
        await engine.addDefaultAssetSources();
        await engine.scene.loadFromURL('https://cdn.img.ly/packages/imgly/cesdk-js/latest/assets/templates/cesdk_postcard_1.scene');

        engine.block.findByType('//ly.img.ubq/text').forEach((id) => {
          engine.block.setOpacity(id, 0.5);
        });

        engine.element.remove();
        engine.dispose();
      });
    } else {
      alert('Unsupported browser detected');
    }
  }, [config, isInitialized]);

  return <div ref={cesdk_container} style={{ width: '', height: '100vh' }}></div>;
};

export default Component;
