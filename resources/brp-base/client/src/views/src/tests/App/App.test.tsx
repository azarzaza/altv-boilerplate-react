import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../../containers/App/App';
import { EventEmitter } from 'events'

describe('test app container', () => {
  test('test renders cancel button', () => {
    const { getByText } = render(<App />);
    expect(getByText("Close this page")).toBeInTheDocument();
  });
  test('click cancel button triggers alt event', () => {
    window.alt = new EventEmitter()
    spyOn(window.alt, 'emit')
    const { getByText } = render(<App />);
    getByText('Close this page').click()
    expect(window.alt.emit).toBeCalledTimes(1)
    expect(window.alt.emit).toBeCalledWith("close_greeting")
  })
  test('snapshot', () => {
    const view = render(<App />)
    expect(view).toMatchSnapshot()
  })
})

