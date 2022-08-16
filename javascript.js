function loginAttempt(){
    var a = document.forms["login"]["username"].value;
    var b = document.forms["login"]["password"].value;
    if(a == "" || b == "")
        alert("empty");
    
    else
        alert("logged in");
}

function signupAttempt(){
    var a = document.forms["signup"]["phNum"].value;
    var b = document.forms["signup"]["email"].value;
    var c = document.forms["signup"]["pw"].value;

    if(a == "" || b == "" || c == "")
        alert("Empty Field");
    
    else
        alert("Account Registered");
}

// ---------------------motherboard.xml-----------------//
//------------------------------------------------------//

function loadMBXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
      }
    };
    xmlhttp.open("GET", "motherboard.xml", true);
    xmlhttp.send();
  }
  
  function myFunction(xml) {
    var x, i, xmlDoc, txt;
    var count = 0;

    xmlDoc = xml.responseXML;
    txt = "";
    x = xmlDoc.getElementsByTagName("products");
    for(i = 0; i< x.length; i++) {

        if(count == 0 || count == 7)
            txt += "<tr class=\"mbPic_tr\" style=\"text-align: center;\">";

            txt += "<td><img src=\"" + 
            x[i].getElementsByTagName("picture")[0].childNodes[0].nodeValue + "\" width=\"200px\" ><br>" + 
            x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue + "</td>";

        if(count == 6){
            txt += "</tr>";
            count = 0;
        }
        else
            count++;
    }
    document.getElementById("MB_cat_ID").innerHTML = txt;
  }

//----------------------Processors.xml------------------------//
//------------------------------------------------------------//

  function loadcpuXML(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        writeCpuXml(this);
      }
    };
    xmlhttp.open("GET", "Processors.xml", true);
    xmlhttp.send();
  }

  function writeCpuXml(xml)
  {
    var x, i, xmlDoc, txt;
    var count = 0;

    xmlDoc = xml.responseXML;
    txt = "";
    x = xmlDoc.getElementsByTagName("products");
    for(i = 0; i< x.length; i++) {

        if(count == 0 || count == 7)
            txt += "<tr class=\"cpuPic_tr\" style=\"text-align: center;\">";

            txt += "<td><img src=\"" + 
            x[i].getElementsByTagName("picture")[0].childNodes[0].nodeValue + "\" width=\"200px\" ><br>" + 
            x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue + "</td>";

        if(count == 6){
            txt += "</tr>";
            count = 0;
        }
        else
            count++;
    }
    document.getElementById("cpuID").innerHTML = txt;
  }

  //-----------------------memBank.xml-------------------//
  //-----------------------------------------------------//

  function loadmemBankXML(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        writememBank(this);
      }
    };
    xmlhttp.open("GET", "memBank.xml", true);
    xmlhttp.send();
  }

  function writememBank(xml)
  {
    var x, i, xmlDoc, txt;
    var count = 0;

    xmlDoc = xml.responseXML;
    txt = "";
    x = xmlDoc.getElementsByTagName("products");
    for(i = 0; i< x.length; i++) {

        if(count == 0 || count == 7)
            txt += "<tr class=\"memPic_tr\" style=\"text-align: center;\">";

            txt += "<td><img src=\"" + 
            x[i].getElementsByTagName("picture")[0].childNodes[0].nodeValue + "\" width=\"200px\" ><br>" + 
            x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue + "</td>";

        if(count == 6){
            txt += "</tr>";
            count = 0;
        }
        else
            count++;
    }
    document.getElementById("memBankID").innerHTML = txt;
  }

  //----------------------------PC_Case.xml----------------//
  //-------------------------------------------------------//


  function loadpcCaseXML(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        writePcXML(this);
      }
    };
    xmlhttp.open("GET", "pc_Case.xml", true);
    xmlhttp.send();
  }

  function writePcXML(xml)
  {
    var x, i, xmlDoc, txt;
    var count = 0;

    xmlDoc = xml.responseXML;
    txt = "";
    x = xmlDoc.getElementsByTagName("products");
    for(i = 0; i< x.length; i++) {

        if(count == 0 || count == 7)
            txt += "<tr class=\"memPic_tr\" style=\"text-align: center;\">";

            txt += "<td><img src=\"" + 
            x[i].getElementsByTagName("picture")[0].childNodes[0].nodeValue + "\" width=\"200px\" ><br>" + 
            x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue + "</td>";

        if(count == 6){
            txt += "</tr>";
            count = 0;
        }
        else
            count++;
    }
    document.getElementById("pc_Case_ID").innerHTML = txt;
  }

  //--------------------------------Storage.xml-----------------//
  //------------------------------------------------------------//


function loadStorageXML(){
  var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        writeStorageXML(this);
      }
    };
    xmlhttp.open("GET", "storage.xml", true);
    xmlhttp.send();
  }

function writeStorageXML(xml){
  var x, i, xmlDoc, txt;
  var count = 0;

  xmlDoc = xml.responseXML;
  txt = "";
  x = xmlDoc.getElementsByTagName("products");
  for(i = 0; i< x.length; i++) {

    if(count == 0 || count == 7)
      txt += "<tr class=\"storagePic_tr\" style=\"text-align: center;\">";

    txt += "<td><img src=\"" + 
    x[i].getElementsByTagName("picture")[0].childNodes[0].nodeValue + "\" width=\"200px\" ><br>" + 
    x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue + "</td>";

    if(count == 6){
      txt += "</tr>";
        count = 0;
     }
    else
      count++;
    }
    document.getElementById("storageID").innerHTML = txt;
  }


//-------------------------Orders.xml-------------------//
//------------------------------------------------------//



function loadOrders(){
  var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        writeOrders(this);
      }
    };
    xmlhttp.open("GET", "Orders.xml", true);
    xmlhttp.send();
  }

function writeOrders(xml){
  var x, i, xmlDoc, txt;

  xmlDoc = xml.responseXML;
  txt = "";
  x = xmlDoc.getElementsByTagName("Customer");
  for(i = 0; i< x.length; i++) {

    txt += "<tr class=\"orderList_tr\">";

    txt += 
    "<td class=\"orderInfo\" style=\"width:90px\">" + x[i].getElementsByTagName("cid")[0].childNodes[0].nodeValue + "</td>" + 
    "<td class=\"orderInfo\" style=\"width:55px\">" + x[i].getElementsByTagName("pid")[0].childNodes[0].nodeValue + "</td>" + 
    "<td class=\"orderInfo\" style=\"width:110px\">" + x[i].getElementsByTagName("pcat")[0].childNodes[0].nodeValue + "</td>" + 
    "<td class=\"orderInfo\" style=\"width:100px\">" + x[i].getElementsByTagName("pname")[0].childNodes[0].nodeValue + "</td>" + 
    "<td class=\"orderInfo\" style=\"width:75px\">" + x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue + "</td>" + 
    "<td class=\"orderInfo\" style=\"width:60px\">" + x[i].getElementsByTagName("quantity")[0].childNodes[0].nodeValue + "</td>" + 
    "<td class=\"orderInfo\" style=\"width:90px\">" + x[i].getElementsByTagName("date")[0].childNodes[0].nodeValue + "</td>";

    txt += "</tr>";

    }
    document.getElementById("orderID").innerHTML = txt;
  }

//-----------------customerOrders.xml-------------------//
//------------------------------------------------------//


function readCustOrders(){
  var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        getCustInfo(this);
      }
    };
    xmlhttp.open("GET", "customerOrders.xml", true);
    xmlhttp.send();
  }

function getCustInfo(xml){
  var x, i, xmlDoc, txt;

  xmlDoc = xml.responseXML;
  txt = "";
  x = xmlDoc.getElementsByTagName("customers");
  for(i = 0; i< x.length; i++) {

    txt += "<tr class=\"Customer_tr\">";

    txt += 
    "<td class=\"Customer_info\" style=\"width:120px\">" + x[i].getElementsByTagName("cid")[0].childNodes[0].nodeValue + "</td>" +
    "<td class=\"Customer_info\" style=\"width:130px\">" + x[i].getElementsByTagName("email")[0].childNodes[0].nodeValue + "</td>" +
    "<td class=\"Customer_info\" style=\"width:120px\">" + x[i].getElementsByTagName("number")[0].childNodes[0].nodeValue + "</td>" +
    "<td class=\"Customer_info\" style=\"width:120px\">" + x[i].getElementsByTagName("date")[0].childNodes[0].nodeValue + "</td>";

    txt += "</tr>";

    }
    document.getElementById("CustID").innerHTML = txt;
  }


  //----------------------StockIn.xml-------------------//
//------------------------------------------------------//

function loadOrders(){
  var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        writeOrders(this);
      }
    };
    xmlhttp.open("GET", "Orders.xml", true);
    xmlhttp.send();
  }

function writeOrders(xml){
  var x, i, xmlDoc, txt;

  xmlDoc = xml.responseXML;
  txt = "";
  x = xmlDoc.getElementsByTagName("Customer");
  for(i = 0; i< x.length; i++) {

    txt += "<tr class=\"orderList_tr\">";

    txt += 
    "<td class=\"orderInfo\" style=\"width:90px\">" + x[i].getElementsByTagName("cid")[0].childNodes[0].nodeValue + "</td>" + 
    "<td class=\"orderInfo\" style=\"width:55px\">" + x[i].getElementsByTagName("pid")[0].childNodes[0].nodeValue + "</td>" + 
    "<td class=\"orderInfo\" style=\"width:110px\">" + x[i].getElementsByTagName("pcat")[0].childNodes[0].nodeValue + "</td>" + 
    "<td class=\"orderInfo\" style=\"width:100px\">" + x[i].getElementsByTagName("pname")[0].childNodes[0].nodeValue + "</td>" + 
    "<td class=\"orderInfo\" style=\"width:75px\">" + x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue + "</td>" + 
    "<td class=\"orderInfo\" style=\"width:60px\">" + x[i].getElementsByTagName("quantity")[0].childNodes[0].nodeValue + "</td>" + 
    "<td class=\"orderInfo\" style=\"width:90px\">" + x[i].getElementsByTagName("date")[0].childNodes[0].nodeValue + "</td>";

    txt += "</tr>";

    }
    document.getElementById("orderID").innerHTML = txt;
  }

//-----------------customerOrders.xml-------------------//
//------------------------------------------------------//


function readStockIn(){
  var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        getStockIns(this);
      }
    };
    xmlhttp.open("GET", "StockIn.xml", true);
    xmlhttp.send();
  }

function getStockIns(xml){
  var x, i, xmlDoc, txt;

  xmlDoc = xml.responseXML;
  txt = "";
  x = xmlDoc.getElementsByTagName("Products");
  for(i = 0; i< x.length; i++) {

    txt += "<tr class=\"list_tr\">";

    txt += 
    "<td class=\"catalog_info\" style=\"width:120px\">" + x[i].getElementsByTagName("pid")[0].childNodes[0].nodeValue + "</td>" +
    "<td class=\"catalog_info\" style=\"width:130px\">" + x[i].getElementsByTagName("pcat")[0].childNodes[0].nodeValue + "</td>" +
    "<td class=\"catalog_info\" style=\"width:120px\">" + x[i].getElementsByTagName("pname")[0].childNodes[0].nodeValue + "</td>" +
    "<td class=\"catalog_info\" style=\"width:120px\">" + x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue + "</td>" +
    "<td class=\"catalog_info\" style=\"width:120px\">" + x[i].getElementsByTagName("quantity")[0].childNodes[0].nodeValue + "</td>";

    txt += "</tr>";

    }
    document.getElementById("StockIn_ID").innerHTML = txt;
  }