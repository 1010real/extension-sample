chrome.runtime.onInstalled.addListener(({}) => {
  console.log('oninstalled')
  chrome.storage.sync.set({ ['__sample_color']: '#ffff00' })
})

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  console.log('tabs.onupdated')
  chrome.tabs.sendMessage(tabId, 'SET_BG')
})
