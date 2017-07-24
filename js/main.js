/**
 * Created by beelarr on 7/24/17.
 */
let start_time = Date.now()
console.log(start_time)
for(var i = 0; i<2000000; i++) {
    varx = i + 1 / 1 * 6 - 4;

}
console.log(Date.now() - start_time)

let big_data_request = new XMLHttpRequest();
big_data_request.addEventListener('load', big_data_complete);
big_data_request.addEventListener('error', big_data_failed);

function big_data_complete(e) {
    console.log('Jepordy loaded')
    let big_data = JSON.parse(e.target.responseText);
    console.log('Time to load Jepordy', Date.now() - start_time)
    console.log(big_data)
}


big_data_request.open('GET', 'JEOPARDY_QUESTIONS1.json');
big_data_request.send();


function big_data_failed (e) {
    console.log('It broke')

}










let data_request = new XMLHttpRequest();
data_request.addEventListener('load', data_request_complete);
data_request.addEventListener('error', data_request_failed);


function data_request_complete(e) {
    console.log('colors loaded')
    let color_data = JSON.parse(e.target.responseText)
    console.log(color_data)
    show_data(color_data)
}

function show_data(e) {
    let color_div = document.querySelector('#all-my-colors')
    let color_data = '';
    for (item in e){
        let color_item = e[item]
        color_data += `<div> <h2>${color_item.color}: ${color_item.value}</h2></div>`
    }
    color_div.innerHTML = color_data
    console.log(Date.now() - start_time)

}

function data_request_failed(e) {
    console.log(e)

}

data_request.open('GET', 'color.json');

data_request.send();

