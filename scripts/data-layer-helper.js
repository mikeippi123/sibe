/* eslint-disable import/prefer-default-export */
export function loadDataLayerHelper() {
  let dataLayerEnabled;
  let dataLayerName;
  let dataLayer;

  function getComponentData(element) {
    const dataLayerJson = element.dataset.blockDataLayer;
    if (dataLayerJson) return JSON.parse(dataLayerJson);
    return undefined;
  }

  function getComponentObject(element) {
    const component = getComponentData(element);
    const componentID = Object.keys(component)[0];
    if (component && component[componentID] && !component[componentID].parentId) {
      const parentElement = element.parentNode.closest('[data-block-data-layer], body');
      if (parentElement) component[componentID].parentId = parentElement.id;
    }
    return component;
  }

  function addComponentToDataLayer(component) {
    dataLayer.push({
      component: getComponentObject(component),
    });
  }

  function getClickId(element) {
    // eslint-disable-next-line max-len
    if (element.dataset.blockDataLayer) return Object.keys(JSON.parse(element.dataset.blockDataLayer))[0];

    const componentElement = element.closest('[data-block-data-layer]');
    return Object.keys(JSON.parse(componentElement.dataset.blockDataLayer))[0];
  }

  function addClickToDataLayer(event) {
    const element = event.currentTarget;
    const componentId = getClickId(element);
    dataLayer.push({
      event: 'cmp:click',
      eventInfo: {
        path: `component.${componentId}`,
      },
    });
  }

  function attachClickEventListener(element) {
    element.addEventListener('click', addClickToDataLayer);
  }

  function onDocumentReady() {
    dataLayerEnabled = true;
    if (dataLayerEnabled) {
      dataLayerName = document.body.getAttribute('data-block-data-layer-name') || 'adobeDataLayer';
      // eslint-disable-next-line no-multi-assign
      dataLayer = window[dataLayerName] = window[dataLayerName] || [];
      const components = document.querySelectorAll('[data-block-data-layer]');
      const clickableElements = document.querySelectorAll('[data-block-clickable]');
      components.forEach((component) => {
        addComponentToDataLayer(component);
      });
      clickableElements.forEach((element) => {
        attachClickEventListener(element);
      });
      dataLayer.push({
        event: 'cmp:loaded',
      });
    }
  }

  onDocumentReady();
}
