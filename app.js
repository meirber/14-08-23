const fs = require('fs');

fs.readFile('data.txt', 'utf-8', function (err, data) {
    if (err) throw err;
    console.log(data);

    const len = data.length;
    console.log(len);

    let count = 1;
    for (let i = 0; i < data.length; i++) {
        if (data[i] === " ") count += 1;
    }
    console.log(count);


    const lodash = require('lodash');
    const myAray = data.split('');
    const revArr = lodash.reverse(myAray);
    console.log(revArr.join(''));

    const myAray2 = data.split(' ');
    const noDup = lodash.uniq(myAray2);
    console.log(noDup.join(' '));

    console.log(myAray2[4]);
    let dup = false;
    for (let i = 0; i < myAray2.length; i++) {
        if (myAray2[i] === myAray2[4] && i !== 4) dup = true;
    }
    console.log dup?
});