/**
 *  Log page load (for testing)
 *
 */
export default function pageReady(){
  let _root = document.getElementById('js-completion');

  _root.textContent = 'App loaded successfully';
}
