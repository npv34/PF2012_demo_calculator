function setInput(number) {
    document.getElementById('input').value += number;
}

function calculator() {
    let input = document.getElementById('input').value;
    result = eval(input);
    document.getElementById('input').value = result;
}

function clearInput() {
    let input = document.getElementById('input').value;
    result = input.slice(0, -1);
    document.getElementById('input').value = result
}