/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (playerName, jerseyNum, jerseySize, position, team) {
    const NFT = {
        "PlayerName": playerName,
        "JerseyNumber": jerseyNum,
        "JerseySize": jerseySize,
        'Position': position,
        "Team" : team
    }
    NFTs.push(NFT)
    console.log("Player Added: " + playerName); 
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i = 0; i < NFTs.length; i++){
        console.log("\nID: " + (i + 1));
        console.log("Player Name: \t" + NFTs[i].PlayerName);
        console.log("Jersey Number:" +NFTs[i].JerseyNumber);
        console.log("Jersey Size: \t" +NFTs[i].JerseySize);
        console.log("Position: \t\t" +NFTs[i].Position);
        console.log("Team: \t\t\t\t" +NFTs[i].Team);
        console.log("=======================================");


    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\n Number of Players: " + NFTs.length);

}

// call your functions below this line
mintNFT("Lebron James", "23", "XL", "Small Forward", "Lakers");
mintNFT("Steph Curry", "30", "Large", "Point Guard", "Golden State");
mintNFT("Nikola Jokic", "15", "ZXL", "Center", "Denver Nuggets");
listNFTs();
getTotalSupply();
