/**
 * Returns a function that will not be triggered after right after a call, waiting ${wait} seconds
 * to be able to invoke it again. If ${immediate}, it will call again in the leading edge, instead of trailing.
 * It's a adapted version of {@link http://underscorejs.org/#debounce}
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} [immediate=false]
 * @returns {Function} denounced
 */
export default function debounce(func, wait, immediate = false) {
  let timeout, timestamp, context, args, result;

  const later = () => {
    const last = Date.now() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        if (!timeout) {
          context = args = null;
        }
      }
    }
  };

  return function(..._args) {
    const callNow = immediate && !timeout;

    context = this;
    args = _args;
    timestamp = Date.now();

    if (!timeout) {
      timeout = setTimeout(later, wait);
    }

    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };
}
