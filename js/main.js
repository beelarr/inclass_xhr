/**
 * Created by beelarr on 7/24/17.
 */
let start_time = Date.now()
console.log(start_time)
for(var i = 0; i<2000000; i++) {
    varx = i + 1 / 1 * 6 - 4;

}
console.log(Date.now() - start_time)


let data_request = new XMLHttpRequest();
data_request.addEventListener('load', data_request_complete);
data_request.addEventListener('error', data_request_failed);


function data_request_complete(e) {
    console.log('colors loaded')
    let color_data = JSON.parse(e.target.responseText)
    console.log(color_data)
}


function data_request_failed(e) {
    console.log(e)

}

data_request.open('GET', 'color.json');

data_request.send();