// eslint-disable-next-line import/no-extraneous-dependencies
import { expect } from 'chai';
import { JSDOM } from 'jsdom';
// eslint-disable-next-line import/no-extraneous-dependencies
import sinon from 'sinon';
// eslint-disable-next-line import/no-named-as-default
import Router from './Router';

const DOM = new JSDOM('<html><head></head><body><div id="app"></div></body></html>', {
  url: 'http://localhost',
});
// @ts-ignore
describe('Router', () => {
  // @ts-ignore
  const originalWindow = global.window;
  // @ts-ignore
  const originalDocument = global.document;
  // @ts-ignore
  const originalHistory = global.history;
  // eslint-disable-next-line no-undef
  before(() => {
    // @ts-ignore
    global.window = DOM.window;
    // @ts-ignore
    global.document = DOM.window.document;
    // @ts-ignore
    global.history = DOM.window.History;
  });
  // eslint-disable-next-line no-undef
  after(() => {
    // @ts-ignore
    global.window = originalWindow;
    // @ts-ignore
    global.document = originalDocument;
    // @ts-ignore
    global.history = originalHistory;
  });

  it('It should change state of history after jump to another page', () => {
    // action
    // @ts-ignore
    window.history.pushState({ page: 'login' }, 'Login', '/login');
    // @ts-ignore
    window.history.pushState({ page: 'registration' }, 'Register', '/registration');
    // result
    // @ts-ignore
    expect(window.history.length).to.eq(3);
  });

  it('It should instance of Router', () => {
    // action
    const router = new Router({});
    // result
    expect(router).to.be.an.instanceof(Router);
  });

  it('It should perform start function', () => {
    // assert
    const router = new Router({});
    // action
    const routerSpy = sinon.spy(router, 'start');
    router.start();
    // result
    // eslint-disable-next-line no-unused-expressions
    expect(routerSpy.calledOnce).to.be.true;
    routerSpy.restore();
  });

  it('It should perform use function with true url', () => {
    // assert
    const router = new Router({});
    // action
    const routerSpy = sinon.spy(router, 'use');
    const block = () => {};
    const pathname = '/test';
    router.use(pathname, block);
    // result
    // @ts-ignore
    expect(routerSpy.calledOnceWithExactly(pathname, block));
    routerSpy.restore();
  });
});
