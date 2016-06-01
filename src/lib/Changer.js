import debounce from 'debounce';

const doSetZoom = (leafletMap, zoom) => {
  if (leafletMap.getZoom() === zoom) {
    return;
  }
  leafletMap.setZoom(zoom);
};

const doSetCenter = (leafletMap, center) => {
  const curCenter = leafletMap.getCenter();
  const targetCenter = [center.get('x'), center.get('y')];
  if (curCenter.lat === targetCenter[0] &&
      curCenter.lng === targetCenter[1]) {
    return;
  }
  leafletMap.setView(targetCenter, leafletMap.getZoom());
};

const doSetView = (leafletMap, center, zoom) => {
  const curCenter = leafletMap.getCenter();
  const targetCenter = [center.get('x'), center.get('y')];
  if (curCenter.lat === targetCenter[0] &&
      curCenter.lng === targetCenter[1] &&
      leafletMap.getZoom() === zoom) {
    return;
  }
  leafletMap.setView([center.get('x'), center.get('y')], zoom);
};

const OP_DEBOUNCE_DELAY = 5; // ms

export default class Changer {
  constructor(leafletMap) {
    this.leafletMap = leafletMap;
    this.targetZoom = undefined;
    this.targetCenter = undefined;
    this.runOps = debounce(this.runOpsOriginal, OP_DEBOUNCE_DELAY);
  }

  enqueue(operations) {
    operations.forEach(operation => {
      if (operation) {
        switch (operation.type) {
          case 'do':
            return operation.do(this.leafletMap);

          case 'op':
            if (operation.op.targetZoom !== undefined) {
              this.targetZoom = operation.op.targetZoom;
            }
            if (operation.op.targetCenter !== undefined) {
              this.targetCenter = operation.op.targetCenter;
            }
            return this;

          default:
            return this;
        }
      }
      return this;
    });
    if (this.targetZoom !== undefined || this.targetCenter !== undefined) {
      this.runOps();
    }
  }

  runOpsOriginal() {
    if (this.targetZoom !== undefined && this.targetCenter !== undefined) {
      const { targetCenter, targetZoom } = this;
      this.targetCenter = undefined;
      this.targetZoom = undefined;
      return doSetView(this.leafletMap, targetCenter, targetZoom);
    }

    if (this.targetZoom !== undefined) {
      const { targetZoom } = this;
      this.targetZoom = undefined;
      return doSetZoom(this.leafletMap, targetZoom);
    }

    if (this.targetCenter !== undefined) {
      const { targetCenter } = this;
      this.targetCenter = undefined;
      return doSetCenter(this.leafletMap, targetCenter);
    }
    return this;
  }
}
