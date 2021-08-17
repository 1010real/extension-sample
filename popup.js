let color
const inputColorText = document.getElementById('colorText')
const changeColorButton = document.getElementById('changeColor')
const storageKey = '__sample_color'

window.addEventListener('load', () => {
  chrome.storage.sync.get([storageKey], (items) => {
    inputColorText.value = items[storageKey]
  })
})

changeColorButton.addEventListener('click', () => {
  chrome.storage.sync.set({ [storageKey]: inputColorText.value }, async () => {
    const queryOptions = { active: true, currentWindow: true }
    const [tab] = await chrome.tabs.query(queryOptions)
    chrome.tabs.sendMessage(tab.id, 'SET_BG')
  })
})
