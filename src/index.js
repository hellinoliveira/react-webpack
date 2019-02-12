'use strict'

import Title from './app'
import { render } from 'react-dom'
import React from 'react'

render(
    React.createElement(Title),
    document.querySelector('[data-js="app"]')
)