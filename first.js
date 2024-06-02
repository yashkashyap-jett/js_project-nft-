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
let nft_arr = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, colour, description, owner, price) {
    let item_nft = {
      "Name": name,
      "Colour": colour,
      "Description": description,
      "Owner": owner,
      "Price": price
    };
    nft_arr.push(item_nft); // Fixed typo (NFT -> nft)
  }

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    for (let count = 0; count < nft_arr.length; count++) {
      console.log(`NAME : ${nft_arr[count].Name}`);
      console.log(`Colour : ${nft_arr[count].Colour}`);
      console.log(`Description : ${nft_arr[count].Description}`);
      console.log(`Owner : ${nft_arr[count].Owner}`);
      console.log(`Price : ${nft_arr[count].Price}\n\n`);
    }
  }

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log(`Total no. of NFTs are ${nft_arr.length}`);
  }

// call your functions below this line

mintNFT("CryptoPunk", "blue", "Alien punk", "unknown", "$23.7 million");
mintNFT("The Merge", "black/White", "Most expensive NFT", "pak", "$91.8 million");
mintNFT("Crossroads", "Pink", "Dynamic image", "Beeple","$6.6 million");
mintNFT("Ocean Front", "Green", "landscape painting", "CryptoPunk", "$6 million");
listNFTs();
getTotalSupply()//4