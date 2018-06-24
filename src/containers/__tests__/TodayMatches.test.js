import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { teams_response } from '../__mocks__/teams_response';
import { success_response } from '../__mocks__/today_matches_response';
import TodayMatches from '../TodayMatches';

beforeAll(() => {
    window.fetch = jest.fn().mockImplementation((url) => {
        switch (url) {
         case 'https://worldcup.sfg.io/teams/':
            return Promise.resolve(new Response(JSON.stringify(teams_response)));
            break
         case 'https://worldcup.sfg.io/matches/today':
            return Promise.resolve(new Response(JSON.stringify(success_response)));   
            break   
        }
    } );
});

it('give response should populate matches in state', () => {
    const todayMatches = renderer.create(<TodayMatches/>);
    const todayMatchesInstance = todayMatches.getInstance();
    todayMatchesInstance.componentDidMount().then(()=> {
        expect(todayMatchesInstance.state.matches.length).not.toEqual(0);
    });
});