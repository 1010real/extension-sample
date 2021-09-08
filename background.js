const storageKey = '__sample_color'

chrome.runtime.onInstalled.addListener(({}) => {
  chrome.storage.sync.set({ [storageKey]: '#888888' })
})

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  chrome.tabs.sendMessage(tabId, 'SET_BG')
})

chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  if (request !== 'INITIALIZE') return
  const queryOptions = { active: true, currentWindow: true }
  const [tab] = await chrome.tabs.query(queryOptions)
  await chrome.scripting.executeScript({
    target: { tabId: tab.id, allFrames: true },
    files: ['content-script.js'],
  })
  chrome.tabs.sendMessage(tab.id, 'SET_BG')
})
