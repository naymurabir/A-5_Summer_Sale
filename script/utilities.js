// Get Input Field Value By Id:
function getInputFieldValueById(inputId) {
    const inputField = document.getElementById(inputId)
    const inputFieldValueString = inputField.value
    const inputFieldValue = parseFloat(inputFieldValueString)
    return inputFieldValue
}

// Get Text Element Value By Id:
function getTextElementValueById(elementId) {
    const textElement = document.getElementById(elementId)
    const textElementValueString = textElement.innerText
    const textElementValue = parseFloat(textElementValueString)
    return textElementValue
}

// Set Text Element Value By Id:
function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId)
    textElement.innerText = newValue
}