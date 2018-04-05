pragma solidity ^0.4.6;
contract SmartCurrency {

  


 // This is a Type
 struct DocumentStruct{
   // Not possible to pass strings between contracts at this time
   string file;
   string ack;
  

  
 }
   

 // This is a namespace where we will store docs of Type DocumentStruct
  mapping(bytes32 => DocumentStruct) public documentStructs;


 // Set values in storage
 function StoreDocument( bytes32 key,  string file) returns (bool success) {
  documentStructs[key].file  = file;
 
 
 

  return true;
 }
  function StoreAck( bytes32 Key,  string ack) returns (bool success) {
  documentStructs[Key].ack  = ack;
   return true;
}
}