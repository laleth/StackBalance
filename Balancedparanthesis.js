// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

  function areBracketsBalanced(expr)
{
      
    // Using ArrayDeque is faster
    // than using Stack class
    let stack = [];
  
    // Traversing the Expression
    for(let i = 0; i < expr.length; i++)
    {
        let x = expr[i];
  
        if (x == '(' || x == '[' || x == '{' || x == '<')
        {
              
            // Push the element in the stack
            stack.push(x);
            continue;
        }
  
        // If current character is not opening
        // bracket, then it must be closing. 
        // So stack cannot be empty at this point.
        if (stack.length == 0)
            return false;
              
        let check;
        switch (x){
        case ')':
            check = stack.pop();
            if (check == '{' || check == '[' || check == '<')
                return false;
            break;
  
        case '}':
            check = stack.pop();
            if (check == '(' || check == '[' || check == '<')
                return false;
            break;
  
        case ']':
            check = stack.pop();
            if (check == '(' || check == '{' || check == '<')
                return false;
            break;
        
        case '>':
            check = stack.pop();
            if (check == '(' || check == '{' || check == '[')
                return false;
            break;
        }
    }
  
    // Check Empty Stack
    return (stack.length == 0);
}
  
// Driver code

let expr = userInput[0];
  
// Function call
if (areBracketsBalanced(expr))
    console.log("Balanced ");
else
    console.log("Not Balanced ");
  

  //end-here
});