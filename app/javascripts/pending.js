// specify the columns
var columnDefs = [
    {headerName: "AccountNumber", field: "accountnumber"},
    {headerName: "AccountHolderName", field: "accountholdername"},
    {headerName: "Bank", field: "bank"},
    {headerName: "Amount", field: "amount"},
    {headerName: "IssuedDate", field: "issueddate"},
    {headerName: "Status", field:"status"}
];

// specify the data
var rowData = [
    {accountnumber: "24567654", accountholdername: "manoj", bank:"SBI",amount:"10000",issueddate:"11/11/2017",status:"validation in progress"},
    {accountnumber: "24534355", accountholdername: "rakesh", bank:"ICICI",amount:"1500",issueddate:"12/11/2017",status:"validation in progress"},
    {accountnumber: "24546467", accountholdername: "sathyan", bank:"YES",amount:"2000",issueddate:"13/11/2017",status:"validation in progress"},
];

// let the grid know which columns and what data to use
var gridOptions = {
        columnDefs: columnDefs,
        rowData: rowData,
        enableSorting: true,
        // enable filtering 
        enableFilter: true
    }
    exports.send = (test) => {
        var storedata = test;
        console.log("pending",storedata);
    }
   

// wait for the document to be loaded, otherwise
// ag-Grid will not find the div in the document.
document.addEventListener("DOMContentLoaded", function() {

    // lookup the container we want the Grid to use
    var eGridDiv = document.querySelector('#myTable');

    // create the grid passing in the div to use together with the columns & data we want to use
    new agGrid.Grid(eGridDiv, gridOptions);
});