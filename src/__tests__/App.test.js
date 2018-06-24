import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import App from '../App';
import AllMatches from '../containers/AllMatches';

jest.mock('../containers/TodayMatches', () => ()=><div id="today-matches"></div>);
jest.mock('../containers/AllMatches', () => ()=><div id="all-matches"></div>);

it('should have two tabs', () => {
  const routerApp = renderer.create(<MemoryRouter><App/></MemoryRouter>);
  expect(routerApp.toJSON().children[0].children[0].children.length).toEqual(2);
});
