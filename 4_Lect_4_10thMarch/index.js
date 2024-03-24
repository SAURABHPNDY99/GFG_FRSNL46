for(let i = 1; i <= 10; i++){
    if(i % 2 === 0)
        console.log(`${i} is even number`);
    else
        console.log(`${i} is odd number`)
}

// FOO BAR

for(let i = 0; i <= 50; i++){
    if(i % 3 == 0 && i %5 == 0)
        console.log(`${i} is foo bar`);
    else if(i % 5 == 0)
        console.log(`${i} is foo`);
    else if (i % 3 == 0)
        console.log(`${i} is bar`);
    else   
        console.log(i);

}