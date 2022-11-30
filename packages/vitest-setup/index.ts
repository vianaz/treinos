import 'vitest-dom/extend-expect';

import * as matchers from 'vitest-dom/matchers';

import { expect } from 'vitest';

import 'jest-styled-components';

expect.extend(matchers);
