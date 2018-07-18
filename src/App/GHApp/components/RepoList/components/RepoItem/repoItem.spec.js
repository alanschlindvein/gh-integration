import React from 'react';

import { render, cleanup } from 'react-testing-library';

import { RepoItem } from '.';

import styles from './styles';

describe('test', () => {
    afterEach(cleanup);

    const classes = Object.keys(styles).reduce((o, key) => ({...o, [key]: key}), {});
    
    const props = {name: 'to', description: 'ta', forks: 1, stargazers_count: 2};

    it('toto', () => {
        const { queryByText } = render(<RepoItem classes={classes} {...props} />);
        const name = queryByText(props.name);

        expect(name.innerHTML).toBe(props.name);
    });
});