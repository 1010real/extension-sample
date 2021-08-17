document.body.style.backgroundColor = 'orange'

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request !== 'SET_BG') return
  const storageKey = '__sample_color'
  chrome.storage.sync.get([storageKey], (items) => {
    document.body.style.backgroundColor = items[storageKey]
  })
})
