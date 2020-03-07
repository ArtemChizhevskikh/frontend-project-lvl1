#!/usr/bin/env node

import evenGame from '../src/even.js';
import greeting from '../src/index.js';

const name = greeting();
evenGame(name);
