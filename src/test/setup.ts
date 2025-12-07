import '@testing-library/jest-dom';

import { cleanup } from '@testing-library/react';
import { afterEach,beforeEach,vi } from 'vitest';

afterEach(()=>{
    cleanup();
});

beforeEach(()=>{
    localStorage.clear();
});

window.matchMedia = window.matchMedia || function (query) {
    return {
        matches:false,
        addListener:vi.fn(),
        removeListener:vi.fn(),
        addEventListener:vi.fn(),
        removeEventListener:vi.fn(),
        dispatchEvent:vi.fn(),
        media:query,
        onchange:null
    }
}