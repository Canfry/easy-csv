function isLoggedIn(f) {
  function wrapper(...args) {
    if (Astro.cookies.get('userId')) {
      f(args);
    } else {
      alert('Please log in');
    }
  }
  return wrapper;
}
