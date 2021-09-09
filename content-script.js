if (!window.___checkInit) {
  window.___checkInit = true
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request !== 'SET_BG') return
    const storageKey = '__sample_color'
    chrome.storage.sync.get([storageKey], (items) => {
      document.body.style.backgroundColor = items[storageKey]
    })
  })
}
