import isEqual from '../../utils/isEqual.ts';
import render from '../../utils/render.ts';

/**
 * Route хранит URL и соответствующий ему блок, умеет показывать, скрывать и создавать блоки.
 */
export default class Route {
  constructor(pathname, view, props) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  navigate(pathname) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block.hide();
    }
  }

  match(pathname) {
    return isEqual(pathname, this._pathname);
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass();
      render(this._block);
      return;
    }

    this._block.show();
  }
}
