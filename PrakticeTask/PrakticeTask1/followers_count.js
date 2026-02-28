(function(){
  const COUNT_KEY = 'followersCount';
  const countEl = document.getElementById('followers-count');
  const resetBtn = document.getElementById('reset-btn');
  const addBtn = document.getElementById('add-btn');

  function getCount(){
    const v = localStorage.getItem(COUNT_KEY);
    return v ? parseInt(v,10) : 0;
  }

  function setCount(n){
    localStorage.setItem(COUNT_KEY, String(n));
    countEl.textContent = String(n);
  }

  function resetCount(){
    setCount(0);
    alert('Followers count has been reset.');
  }

  function addFollower(){
    const c = getCount() + 1;
    setCount(c);
  }

  // initialize
  setCount(getCount());

  // expose function in case other scripts want to call it
  window.resetCount = resetCount;

  resetBtn.addEventListener('click', resetCount);
  addBtn.addEventListener('click', addFollower);
})();
