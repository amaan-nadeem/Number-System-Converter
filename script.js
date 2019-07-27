function binary(){
    let checking = document.getElementById('value').value.toString();
    var binary = 0, hexadecimal= 0, decimal= 0, octal= 0;
    for(let i = 0; i<checking.length; i++){
    if(parseInt(checking[i])<0 || parseInt(checking[i]) >1 || checking[i] >="a" || checking[i] >= "A"){
        binary = parseInt(checking[i]);
    }
    if(parseInt(checking[i])<0 || parseInt(checking[i]) >7 || checking[i] >="a" || checking[i] >= "A"){
        octal = parseInt(checking[i]);
        console.log(octal)
    }
    if(parseInt(checking[i])<0 || parseInt(checking[i]) >9 || checking[i] >="a" || checking[i] >= "A"){
        decimal = parseInt(checking[i]);
    }
    }
if(document.getElementById('selected').value==="Binary Number System"&&document.getElementById('secondselected').value==="Hexadecimal Number System"){
        let value = document.getElementById('value').value.toString();
        let sum = 0, total = "", modulus, reverse = "";
        if(binary === 0){
            for(let i = value.length-1; i>=0; i--)
            {
                sum += Math.pow(2, i)* parseInt(value[(value.length-1)-i]);
            }
            for(let i = 0; sum>=1 ; i++)
            {
            modulus = sum % 16;
            sum = Math.floor(sum / 16);
            if(modulus === 10) modulus = "A";
            else if(modulus === 11) modulus = "B";
            else if(modulus === 12) modulus = "C";
            else if(modulus === 13) modulus = "D";
            else if(modulus === 14) modulus = "E";
            else if(modulus === 15) modulus = "F";
            total += modulus;
            }
            for(let i = total.length-1; i>=0; i--)
            {
                reverse += total[i];
            }
        document.getElementById('answer').value = reverse;
        }
else document.getElementById('answer').value = "Entered Binary Number is invalid";
    }
else if(document.getElementById('selected').value==="Binary Number System"&&document.getElementById('secondselected').value==="Octal Number System"){
    let value = document.getElementById('value').value.toString();
    let sum = 0, total = "", modulus, reverse = "";
    if(binary === 0){
        for(let i = value.length-1; i>=0; i--)
        {
            sum += Math.pow(2, i)* parseInt(value[(value.length-1)-i]);
        }
        for(let i = 0; sum>=1 ; i++)
        {
        modulus = sum % 8;
        sum = Math.floor(sum / 8);
        total += modulus;
        }
        for(let i = total.length-1; i>=0; i--)
        {
            reverse += total[i];
        }
    document.getElementById('answer').value = reverse;
    }
    else document.getElementById('answer').value = "Entered Binary Number is invalid";
}
else if(document.getElementById('selected').value==="Binary Number System"&&document.getElementById('secondselected').value==="Decimal Number System"){
let sum = 0;
let value = document.getElementById('value').value.toString();
if(binary === 0){
    for(let i = value.length-1; i>=0; i--)
        {
            sum += Math.pow(2, i)* parseInt(value[(value.length-1)-i]);
        }
        document.getElementById('answer').value = sum;
    }
        else document.getElementById('answer').value = "Entered Binary Number is invalid";
}
else if(document.getElementById('selected').value==="Decimal Number System"&&document.getElementById('secondselected').value==="Hexadecimal Number System"){
    let value = document.getElementById('value').value;
    let total = "", modulus, reverse = "";
    if(decimal === 0){
        for(let i = 0; value>=1 ; i++)
        {
        modulus = value % 16;
        value = Math.floor(value / 16);
        
        if(modulus === 10) modulus = "A";
        else if(modulus === 11) modulus = "B";
        else if(modulus === 12) modulus = "C";
        else if(modulus === 13) modulus = "D";
        else if(modulus === 14) modulus = "E";
        else if(modulus === 15) modulus = "F";
        total += modulus;
        }
        for(let i = total.length-1; i>=0; i--)
        {
            reverse += total[i];
        }
    document.getElementById('answer').value = reverse;
    }
    else document.getElementById('answer').value = "Entered Decimal Number is invalid";
}
else if(document.getElementById('selected').value==="Decimal Number System"&&document.getElementById('secondselected').value==="Octal Number System"){
    let value = document.getElementById('value').value;
    let total = "", modulus, reverse = "";
    if(decimal ===0){
        for(let i = 0; value>=1 ; i++)
        {
        modulus = value % 8;
        value = Math.floor(value / 8);
        total += modulus;
        }
        for(let i = total.length-1; i>=0; i--)
        {
            reverse += total[i];
        }
    document.getElementById('answer').value = reverse;
    }
    else document.getElementById('answer').value = "Entered Decimal Number is invalid";
}
else if(document.getElementById('selected').value==="Decimal Number System"&&document.getElementById('secondselected').value==="Binary Number System"){
    let value = document.getElementById('value').value;
    let total = "", modulus, reverse = "";
    if(decimal===0){
        for(let i = 0; value>=1 ; i++)
        {
        modulus = value % 2;
        value = Math.floor(value / 2);
        total += modulus;
        }
        for(let i = total.length-1; i>=0; i--)
        {
            reverse += total[i];
        }
    document.getElementById('answer').value = reverse;
    } 
    else document.getElementById('answer').value = "Entered Decimal Number is invalid";
}
else if(document.getElementById('selected').value==="Octal Number System"&&document.getElementById('secondselected').value==="Hexadecimal Number System"){
    let value = document.getElementById('value').value.toString();
    let sum = 0, total = "", modulus, reverse = "";
    if(octal===0){
    for(let i = value.length-1; i>=0; i--)
        {
            sum += Math.pow(8, i)* parseInt(value[(value.length-1)-i]);
        }
        for(let i = 0; sum>=1 ; i++)
        {
        modulus = sum % 16;
        sum = Math.floor(sum / 16);
        if(modulus === 10) modulus = "A";
        else if(modulus === 11) modulus = "B";
        else if(modulus === 12) modulus = "C";
        else if(modulus === 13) modulus = "D";
        else if(modulus === 14) modulus = "E";
        else if(modulus === 15) modulus = "F";
        total += modulus;
        }
        for(let i = total.length-1; i>=0; i--)
        {
            reverse += total[i];
        }
    document.getElementById('answer').value = reverse;
    }
    else document.getElementById('answer').value = "Entered Octal Number is invalid";
}
else if(document.getElementById('selected').value==="Octal Number System"&&document.getElementById('secondselected').value==="Decimal Number System"){
    let value = document.getElementById('value').value.toString();
    let sum = 0;
    if(octal===0){
        for(let i = value.length-1; i>=0; i--)
        {
            sum += Math.pow(8, i)* parseInt(value[(value.length-1)-i]);
        }
    document.getElementById('answer').value = sum;
    }
    else document.getElementById('answer').value = "Entered Decimal Number is invalid";
}
else if(document.getElementById('selected').value==="Octal Number System"&&document.getElementById('secondselected').value==="Binary Number System"){
    let value = document.getElementById('value').value.toString();
    let sum = 0, total = "", modulus, reverse = "";
    if(octal=== 0){
        for(let i = value.length-1; i>=0; i--)
        {
            sum += Math.pow(8, i)* parseInt(value[(value.length-1)-i]);
        }
        for(let i = 0; sum>=1 ; i++)
        {
        modulus = sum % 2;
        sum = Math.floor(sum / 2);
        total += modulus;
        }
        for(let i = total.length-1; i>=0; i--)
        {
            reverse += total[i];
        }
    document.getElementById('answer').value = reverse;
    }
    else document.getElementById('answer').value = "Entered Octal Number is invalid";
}
else if(document.getElementById('selected').value==="Hexadecimal Number System"&&document.getElementById('secondselected').value==="Octal Number System"){
    let value = document.getElementById('value').value.toString();
    let array = {};
    let sum = 0, total = "", modulus, reverse = "";
        for(let i=0; i<value.length; i++)
        {
            array[i] = value[i];;
        }
        for(let i = value.length-1, j=0; i>=0; i--, j++)
        {
            if(array[i] === "A" || array[i] === "a") {
                array[i] = 10;
                sum += Math.pow(16, j)*(array[i]);
            }
            else if(value[i] === "B" || value[i] === "b") {
                array[i] = 11;
                sum += Math.pow(16, j)* (array[i]);
            }
            else if(value[i] === "C" || value[i] === "c"){
                array[i] = 12;
                sum += Math.pow(16, j)*(array[i]);
            } 
            else if(value[i] === "D" || value[i] === "d") {
                array[i] = 13;
                sum += Math.pow(16, j)*(array[i]);
            }
            else if(value[i] === "E" || value[i] === "e") {
                array[i] = 14;
                sum += Math.pow(16, j)*(array[i]);
            }
            else if(value[i] === "F" || value[i] === "f") {
                array[i] = 15;
                sum += Math.pow(16, j)*(array[i]);
            }
            else sum += Math.pow(16, j)*(array[i]);
        }
        for(let i = 0; sum>=1 ; i++)
        {
        modulus = sum % 8;
        sum = Math.floor(sum / 8);
        total += modulus;
        }
        for(let i = total.length-1; i>=0; i--)
        {
            reverse += total[i];
        }
    document.getElementById('answer').value = reverse;
}
else if(document.getElementById('selected').value==="Hexadecimal Number System"&&document.getElementById('secondselected').value==="Decimal Number System"){
    let value = document.getElementById('value').value.toString();
    let array = {};
    let sum = 0;
        for(let i=0; i<value.length; i++)
        {
            array[i] = value[i];;
        }
        for(let i = value.length-1, j=0; i>=0; i--, j++)
        {
            if(array[i] === "A" || array[i] === "a") {
                array[i] = 10;
                sum += Math.pow(16, j)*(array[i]);
            }
            else if(value[i] === "B" || value[i] === "b") {
                array[i] = 11;
                sum += Math.pow(16, j)* (array[i]);
            }
            else if(value[i] === "C" || value[i] === "c"){
                array[i] = 12;
                sum += Math.pow(16, j)*(array[i]);
            } 
            else if(value[i] === "D" || value[i] === "d") {
                array[i] = 13;
                sum += Math.pow(16, j)*(array[i]);
            }
            else if(value[i] === "E" || value[i] === "e") {
                array[i] = 14;
                sum += Math.pow(16, j)*(array[i]);
            }
            else if(value[i] === "F" || value[i] === "f") {
                array[i] = 15;
                sum += Math.pow(16, j)*(array[i]);
            }
            else sum += Math.pow(16, j)*(array[i]);
        }
        document.getElementById('answer').value = sum;
}
else if(document.getElementById('selected').value==="Hexadecimal Number System"&&document.getElementById('secondselected').value==="Binary Number System"){
    let value = document.getElementById('value').value.toString();
    let array = {};
    let sum = 0, total = "", modulus, reverse = "", check;
        for(let i=0; i<value.length; i++)
        {
            array[i] = value[i];
        }
        for(let i = value.length-1, j=0; i>=0; i--, j++)
        {
            if(array[i] === "A" || array[i] === "a") {
                array[i] = 10;
                sum += Math.pow(16, j)*(array[i]);
            }
            else if(value[i] === "B" || value[i] === "b") {
                array[i] = 11;
                sum += Math.pow(16, j)* (array[i]);
            }
            else if(value[i] === "C" || value[i] === "c"){
                array[i] = 12;
                sum += Math.pow(16, j)*(array[i]);
            } 
            else if(value[i] === "D" || value[i] === "d") {
                array[i] = 13;
                sum += Math.pow(16, j)*(array[i]);
            }
            else if(value[i] === "E" || value[i] === "e") {
                array[i] = 14;
                sum += Math.pow(16, j)*(array[i]);
            }
            else if(value[i] === "F" || value[i] === "f") {
                array[i] = 15;
                sum += Math.pow(16, j)*(array[i]);
            }
            else sum += Math.pow(16, j)*(array[i]);
        }
        for(let i = 0; sum>=1 ; i++)
        {
        modulus = sum % 2;
        sum = Math.floor(sum / 2);
        total += modulus;
        }
        for(let i = total.length-1; i>=0; i--)
        {
            reverse += total[i];
        }
    document.getElementById('answer').value = reverse;
}


    
if(document.getElementById('secondselected').value==="Octal Number System") document.getElementById('answered').innerHTML = "Obtained Octal Number:";
else if(document.getElementById('secondselected').value==="Binary Number System") document.getElementById('answered').innerHTML = "Obtained Binary Number:";
else if(document.getElementById('secondselected').value==="Decimal Number System") document.getElementById('answered').innerHTML = "Obtained Decimal Number:";
else if(document.getElementById('secondselected').value==="Hexadecimal Number System") document.getElementById('answered').innerHTML = "Obtained Hexadecimal Number:";
}

function Entered_number(){
    if(document.getElementById('selected').value==="Binary Number System")document.getElementById('h1').innerHTML = "Enter a Binary Number:";
    else if(document.getElementById('selected').value==="Octal Number System") document.getElementById('h1').innerHTML = "Enter an Octal Number:";
    else if(document.getElementById('selected').value==="Decimal Number System") document.getElementById('h1').innerHTML = "Enter a Decimal Number:";
    else if(document.getElementById('selected').value==="Hexadecimal Number System") document.getElementById('h1').innerHTML = "Enter a Hexadecimal Number:";
}
function erase(){
    if(document.getElementById('value').value==="Enter a Number"){
        document.getElementById('value').value = "";
    }
    }
