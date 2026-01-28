/**
=========================================================
* Material Dashboard 3 PRO React - v2.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "App";
import "./i18n";

// Material Dashboard 3 PRO React Context Provider
import { MaterialUIControllerProvider } from "context";

// Nuclear option: completely suppress ResizeObserver errors
// Override console.error to filter out ResizeObserver messages
const originalConsoleError = console.error;
console.error = (...args) => {
  const errorString = args.join(' ');
  if (errorString.includes('ResizeObserver')) {
    return; // Completely ignore ResizeObserver errors
  }
  originalConsoleError.apply(console, args);
};

// Debounce helper
const debounce = (callback, delay) => {
  let tid;
  return function (...args) {
    const ctx = self;
    tid && clearTimeout(tid);
    tid = setTimeout(() => {
      callback.apply(ctx, args);
    }, delay);
  };
};

// Wrap ResizeObserver constructor to debounce callbacks
const _ResizeObserver = window.ResizeObserver;
window.ResizeObserver = class ResizeObserver extends _ResizeObserver {
  constructor(callback) {
    super(debounce(callback, 20));
  }
};

// Capture and suppress all error events
const suppressResizeObserverError = (event) => {
  const message = event.message || event.reason?.message || '';
  if (message.includes('ResizeObserver')) {
    event.stopImmediatePropagation();
    event.stopPropagation();
    event.preventDefault();
    return false;
  }
};

// Add multiple layers of error suppression
window.addEventListener('error', suppressResizeObserverError, true);
window.addEventListener('unhandledrejection', suppressResizeObserverError, true);

// Override the error handler used by webpack dev server
if (typeof window.__webpack_dev_server_client__ !== 'undefined') {
  const originalHandler = window.__webpack_dev_server_client__.handleErrors;
  if (originalHandler) {
    window.__webpack_dev_server_client__.handleErrors = function(errors) {
      const filteredErrors = errors.filter(error => {
        const errorString = String(error);
        return !errorString.includes('ResizeObserver');
      });
      if (filteredErrors.length > 0) {
        originalHandler.call(this, filteredErrors);
      }
    };
  }
}

// Patch react-error-overlay to filter ResizeObserver errors
const patchErrorOverlay = () => {
  if (window.__REACT_ERROR_OVERLAY_GLOBAL_HOOK__) {
    const originalOnError = window.__REACT_ERROR_OVERLAY_GLOBAL_HOOK__.onError;
    if (originalOnError) {
      window.__REACT_ERROR_OVERLAY_GLOBAL_HOOK__.onError = function(error) {
        if (error && error.message && error.message.includes('ResizeObserver')) {
          return; // Suppress ResizeObserver errors
        }
        originalOnError.apply(this, arguments);
      };
    }
  }
};

// Try to patch immediately and also after a delay
patchErrorOverlay();
setTimeout(patchErrorOverlay, 100);
setTimeout(patchErrorOverlay, 1000);

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <HashRouter>
    <MaterialUIControllerProvider>
      <App />
    </MaterialUIControllerProvider>
  </HashRouter>
);
