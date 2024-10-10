# Project Title

Creating a Token
## Description

this project is all about creating a token. it's purpose is to add and remove tokens from the system.

## Getting Started

### Installing

you need to have a development environment. Use Remix
check the compiler version

### Executing program

open your environment
create a file
copy paste the code to the file
deploy the contract


Mint Function
```
 // mint function
    function mint (address _Address, uint _Value) public{
        totalSupply += _Value;
        balances[_Address] += _Value;
        checkBalance = "Token has been added Succesfully";

}
```


Burn Function
```
 // burn function
    function burn (address _Address, uint _Value) public{
        if (balances[_Address] >= _Value){
            totalSupply -= _Value;
            balances[_Address] -= _Value;
            checkBalance = "Token burned Succesfully";

        }
```
## Help

if you have issues on burning, check the checkBalance variable if you have succesfully burned it or not.


## Authors

Sean Archer Cruz
202110263@fit.edu.ph


## License

This project is licensed under the [NAME HERE] License - see the LICENSE.md file for details
