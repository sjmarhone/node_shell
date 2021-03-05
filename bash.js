process.stdout.write('prompt > ');

//event listener for data
process.stdin.on('data', (data) => {
    const pwd = process.cwd();



    process.stdout.write(pwd);
    process.stdout.write(' \n prompt > ');

})

// Made changes for Sj
