// Q.1  .sort()

const sort = (list, type) => {
    try {
        const data = Array.isArray(list) ? list : list.split('');
        const typeOfData = Array.isArray(list) ? 'typearray' : 'typestring';
        let errorMessage = '';
        if (!Array.isArray(data)) {
            errorMessage = 'Only iterables are allowed.';
        } else if (data.length === 0) {
            errorMessage = 'Elements are not found.';
        };
        if (errorMessage) throw new Error(errorMessage);

        const convert = {
            typearray: {
                asc: function (data) {
                    let sortedData = [];
                    for (let i = Math.min(...data); i <= Math.max(...data); i++) {
                        sortedData.push(...data.filter(item => item === i));
                    };
                    return sortedData;
                },
                desc: function (data) {
                    let sortedData = [];
                    for (let i = Math.max(...data); i >= Math.min(...data); i--) {
                        sortedData.push(...data.filter(item => item === i));
                    };
                    return sortedData;
                },
            },
            typestring: {
                asc: function (data) {
                    let sortedData = [];
                    for (let i = 32; i <= 122; i++) {
                        const foundEle = String.fromCharCode(i);
                        sortedData.push(...data.filter(item => item === foundEle));
                    };
                    return sortedData.join('');
                },
                desc: function (data) {
                    let sortedData = [];
                    for (let i = 122; i >= 32; i--) {
                        const foundEle = String.fromCharCode(i);
                        sortedData.push(...data.filter(item => item === foundEle));
                    };
                    return sortedData.join('');
                },
            }
        };
        console.log('Result of .sort() :-> ', convert[typeOfData][type](data));
    } catch (error) {
        console.log(`Error of .sort() :-> ${error.message || error}`);
    };
}

sort([3, 5, 2, 10, 8, 8, 7], 'asc');
sort([3, 5, 2, 10, 8, 8, 7], 'desc');
sort('sdabaaabb', 'asc');
sort('AUIZYEamnb', 'asc');

/*  
Convert character to ASCII:  console.log('A'.charCodeAt(0)); // 65
Convert ASCII to character:  console.log(String.fromCharCode(65)); // 'A'
*/