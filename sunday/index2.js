

function drawArrowLine(numberOfLines, isRight) {
    const line = '-'.repeat(numberOfLines);
    console.log(isRight ? `${line}>` : `<${line}`);
}

drawArrowLine(5, true);  
drawArrowLine(3, false); 


//////////////////////////////////////////////////
function processNumbers() {
    let numbers = [];
    let input;

    while (true) {
        input = parseFloat(prompt("Enter a number (0 to finish):"));
        if (input === 0) break;
        numbers.push(input);
    }

    if (numbers.length === 0) {
        console.log("No numbers were entered.");
        return;
    }

    const maxNumber = Math.max(...numbers);
    const count = numbers.length;
    const sum = numbers.reduce((a, b) => a + b, 0);
    const average = sum / count;
    const fourthNumber = numbers.length >= 4 ? numbers[3] : numbers[numbers.length - 1];

    console.log(`Maximum number: ${maxNumber}`);
    console.log(`Count of numbers: ${count}`);
    console.log(`Sum of numbers: ${sum}`);
    console.log(`Average of numbers: ${average}`);
    console.log(`Fourth number (or last if fewer than four): ${fourthNumber}`);
}

// processNumbers();




//////////////////////////////////////////////////////////////////////////////////////////
function Triangle(baseLength) {
    if (baseLength <= 0) {
        console.log('The base length must be a positive number.');
        return;
    }

    for (let i = 1; i <= baseLength; i++) {
        console.log('*'.repeat(i));
    }
}


// Triangle(9);
//////////////////////////////////////////////////////////////////////////////////////////

function Triangle2(baseLength) {
    if (baseLength <= 0) {
        console.log('The base length must be a positive number.');
        return;
    }

    for (let i = baseLength; i > 0; i--) {
        console.log('*'.repeat(i));
    }
}

// Triangle2(3);

//////////////////////////////////////////////////////////////////////////////
function MultiplicationTable(number) {
    if (number <= 0) {
        console.log('The number must be a positive integer.');
        return;
    }

    for (let i = 1; i <= number; i++) {
        let row = '';
        for (let j = 1; j <= number; j++) {
            row += (i * j).toString().padStart(4, ' ') + ' ';
        }
        console.log(row.trim());
    }
}

MultiplicationTable(5);


////////////////////////////////////////////////
function ReverseNumber(number) {
  
    const numberString = number.toString();
    
  
    const reversedString = numberString.split('').reverse().join('');
    

    console.log(reversedString);
}


ReverseNumber(12345);  
ReverseNumber(987654321); 

//////////////////////////////////////////////////////////////////
function processString(str) {
   
    if (str === '') {
        return '';
    }

   
    if (str.trim() === '') {
        return ' ';
    }

   
    return str.trim();
}


console.log(processString(''));          
console.log(processString('     '));     
console.log(processString(' elad hello ')); 

/////////////////////////////////////////////////////////////////////////
function createList3(list1, list2) {
    const sumList2 = list2.reduce((sum, num) => sum + num, 0); 
    const list3 = list1.map((_, i) => {
        const productExceptI = list1.reduce((product, num, index) => {
            return index !== i ? product * num : product;
        }, 1);
        
        return productExceptI * sumList2;
    });

    return list3;
}

const list1 = [1, 2, 3, 4];
const list2 = [5, 6, 7, 8];

const list3 = createList3(list1, list2);
console.log(list3);
