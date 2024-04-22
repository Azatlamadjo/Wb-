const valueInputNode = document.querySelector ('.js-value-input');
const valueSelectorNode = document.querySelector ('.js-value-selector');
const outputNode= document.querySelector('.js-output');

valueInputNode.addEventListener('input', function()
{
    const rub = Number(valueInputNode.value);
    const currency = valueSelectorNode.value;
    const result = convert(rub, currency);

    outputNode.innerText = result; 
});
