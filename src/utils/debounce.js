export function debounce(callee, timeoutMs) {
  let lastCallTimer;

  return function perform(...args) {
    clearTimeout(lastCallTimer);
    lastCallTimer = setTimeout(() => callee(...args), timeoutMs);
  };
}

