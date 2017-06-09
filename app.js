const fs = require('fs');
const config = require('./config');

const data_to_array = data => {
    return new Promise ((resolve, reject) =>  {
        resolve(data.split('\r\n'));
    });
}

const array_to_ArrObj = dataArr => {
    return new Promise ((resolve, reject) =>  {
        let arr_of_obj = [];
        dataArr.forEach(el => {
            let obj = {};
            let elArr = el.split(',');
            obj.time = parseInt(elArr[0]);
            obj.price = elArr[1];
            obj.index = elArr[2];
            arr_of_obj.push(obj);
        })
        resolve(arr_of_obj);
    });
}

const filtering_data = arrObj => {
    return new Promise ((resolve, reject) =>  {
        let startTime = arrObj[0].time;
        let filteredArr = [];
        let period = config.period;

        arrObj.forEach(el => {
            if (el.time >= startTime) {
                startTime += period;
                filteredArr.push(el);
            }
        })

        resolve(filteredArr);
    });
}

const returnCSV = dataArr => {
    return new Promise ((resolve, reject) =>  {
        let newArr = [];
        dataArr.forEach(el => {
            newArr.push(el.time + ',' + el.price + ',' + el.index);
        })
        resolve(newArr.join('\r\n'));
    });
}

var data = fs.readFileSync('./entry_data/' + config.file_name + '.csv', 'utf8');

data_to_array(data)
    .then(result => {
        array_to_ArrObj(result)
            .then(res => {
                filtering_data(res)
                    .then(res => {
                        returnCSV(res)
                            .then(res => fs.writeFileSync('./exit_data/' + config.file_name + '__period_' + config.period + '_sec__new__.csv', res, 'utf8'))
                    });
            });
    });