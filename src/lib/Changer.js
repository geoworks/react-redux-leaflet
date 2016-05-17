import debounce from 'debounce';

const doSetZoom = (leafletMap, zoom) =>
  leafletMap.setZoom(zoom)
;
const doSetCenter = (leafletMap, center) =>
  leafletMap.setView([center.get('x'), center.get('y')], leafletMap.getZoom())
;
const doSetView = (leafletMap, center, zoom) =>
  leafletMap.setView([center.get('x'), center.get('y')], zoom)
;

const OP_DEBOUNCE_DELAY = 75; // ms

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
            if (operation.op.targetZoom) { this.targetZoom = operation.op.targetZoom; }
            if (operation.op.targetCenter) { this.targetCenter = operation.op.targetCenter; }
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
    if (this.targetZoom && this.targetCenter) {
      return doSetView(this.leafletMap, this.targetCenter, this.targetZoom);
    }
    if (this.targetZoom) {
      return doSetZoom(this.leafletMap, this.targetZoom);
    }
    if (this.targetCenter) {
      return doSetCenter(this.leafletMap, this.targetCenter);
    }
    return this;
  }
}
