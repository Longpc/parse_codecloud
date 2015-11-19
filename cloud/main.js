require('cloud/unique_control.js');
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});
// Use this function for create Test Table
Parse.Cloud.define("mkTestTable", function(request, response) {
    console.log("mkTestTableアクションを開始します。");
    var TestTable = Parse.Object.extend("TestTable");
    var testTable = new TestTable();
    testTable.set("teststring", "X");
    testTable.save(null, {
        success: function(testTable) {
        },
        error: function(testTable, error) {
        }
    });
    response.success("Create table finished !");
});

//This function was created for run insert query to TestTable.
Parse.Cloud.define("insertTestTable", function(request, response) {
    var TestTable = Parse.Object.extend("TestTable");
    var testTable = new TestTable();
    testTable.set("teststring", new Date().toISOString());
    testTable.save(null, {
        success: function(testTable) {
        },
        error: function(testTable, error) {
        }
    });
    response.success("Insert record finished !");
});

// This function was defined for create Typesrecordaction table for save system manager information
Parse.Cloud.define("mkTypesrecordaction", function(request, response) {
    var Typesrecordaction = Parse.Object.extend("Typesrecordaction");
    var typesrecordaction = new Typesrecordaction();
    typesrecordaction.set("seq", 0);
    typesrecordaction.set("name", "x");
    typesrecordaction.set("objectmaking", "x");
    typesrecordaction.set("typemaking", 1);
    typesrecordaction.set("objectmodifying", "x");
    typesrecordaction.set("typemodifying", 1);
    typesrecordaction.set("removing", new Date());
    typesrecordaction.set("objectremoving", "x");
    typesrecordaction.set("typeremoving", 1);
    typesrecordaction.set("removed", true);
    typesrecordaction.save(null, {
        success: function(typesrecordaction) {
        },
        error: function(typesrecordaction, error) {
        }
    });
    response.success("Create table finished !");
});

// This function was defined for create Tokens data class
Parse.Cloud.define("mkTokens", function(request, response) {/* 【改行】  */
    var Tokens = Parse.Object.extend("Tokens");
    var tokens = new Tokens();
    tokens.set("seq", 0);
    tokens.set("tokenaccess", "x");
    tokens.set("idfacebook", 1);
    tokens.set("picture", "x");
    tokens.set("objectmaking", "x");
    tokens.set("typemaking", 1);
    tokens.set("objectmodifying", "x");
    tokens.set("typemodifying", 1);
    tokens.set("removing", new Date());
    tokens.set("objectremoving", "x");
    tokens.set("typeremoving", 1);
    tokens.set("removed", true);
    tokens.save(null, {
        success: function(tokens) {
        },
        error: function(tokens, error) {
        }
    });
    response.success("Create table finished !");
});

// This function is not need to execute in code cloud
Parse.Cloud.define("mk_User", function(request, response) {
    var _User = Parse.Object.extend("_User");
    var _user = new _User();
    _user.set("seq", 0);
    _user.set("username", "x");
    _user.set("password", "x");
    _user.set("authData", "x");
    _user.set("email", "test@mail.com");
    _user.set("idfacebook", 1);
    _user.set("objectmaking", "x");
    _user.set("typemaking", 1);
    _user.set("objectmodifying", "x");
    _user.set("typemodifying", 1);
    _user.set("removing", new Date());
    _user.set("objectremoving", "x");
    _user.set("typeremoving", 1);
    _user.set("removed", true);
    _user.save(null, {
        success: function(_user) {
        },
        error: function(_user, error) {
        }
    });
    response.success("Create table finished !");
});

// This function was defined for remove default data in Typesrecordaction created by create table function
Parse.Cloud.define("rmTypesrecordaction", function(request, response) {
    var query = new Parse.Query("Typesrecordaction");
    query.equalTo("seq", 0);
    query.find({
        success: function(results) {
            for (var i = 0; i < results.length; i++) {
                results[i].destroy({});
            }
            response.success("++YES++++++++");
        },
        error: function() {
            response.error("record lookup failed");
         }
    });
});

// This function was defined for insert data into Typesrecordaction table
Parse.Cloud.define("insertTypesrecordaction", function(request, response) { 
    var Typesrecordaction = Parse.Object.extend("Typesrecordaction"); 
    var typeArray =[];
    var record1 = new Typesrecordaction(); record1.set("seq", 1); record1.set("name","FRONT-プログラム"); record1.set("objectmaking","kato.hiroshi@boi.jp"); record1.set("typemaking", 9); record1.set("objectmodifying", "kato.hiroshi@boi.jp"); record1.set("typemodifying", 9 );  record1.set("removed", false); typeArray.push(record1);
    var record2 = new Typesrecordaction(); record2.set("seq", 11); record2.set("name","FRONT-人物特定"); record2.set("objectmaking","kato.hiroshi@boi.jp"); record2.set("typemaking", 9); record2.set("objectmodifying", "kato.hiroshi@boi.jp"); record2.set("typemodifying", 9 );  record2.set("removed", false); typeArray.push(record2);
    var record3 = new Typesrecordaction(); record3.set("seq", 2); record3.set("name","API-プログラム"); record3.set("objectmaking","kato.hiroshi@boi.jp"); record3.set("typemaking", 9); record3.set("objectmodifying", "kato.hiroshi@boi.jp"); record3.set("typemodifying", 9 );  record3.set("removed", false); typeArray.push(record3);
    var record4 = new Typesrecordaction(); record4.set("seq", 22); record4.set("name","API-人物特定"); record4.set("objectmaking","kato.hiroshi@boi.jp"); record4.set("typemaking", 9); record4.set("objectmodifying", "kato.hiroshi@boi.jp"); record4.set("typemodifying", 9 );  record4.set("removed", false); typeArray.push(record4);
    var record5 = new Typesrecordaction(); record5.set("seq", 3); record5.set("name","ADMIN-プログラム"); record5.set("objectmaking","kato.hiroshi@boi.jp"); record5.set("typemaking", 9); record5.set("objectmodifying", "kato.hiroshi@boi.jp"); record5.set("typemodifying", 9 );  record5.set("removed", false); typeArray.push(record5);
    var record6 = new Typesrecordaction(); record6.set("seq", 33); record6.set("name","ADMIN-人物特定"); record6.set("objectmaking","kato.hiroshi@boi.jp"); record6.set("typemaking", 9); record6.set("objectmodifying", "kato.hiroshi@boi.jp"); record6.set("typemodifying", 9 );  record6.set("removed", false); typeArray.push(record6);
    var record7 = new Typesrecordaction(); record7.set("seq", 4); record7.set("name","BATCH-プログラム"); record7.set("objectmaking","kato.hiroshi@boi.jp"); record7.set("typemaking", 9); record7.set("objectmodifying", "kato.hiroshi@boi.jp"); record7.set("typemodifying", 9 );  record7.set("removed", false); typeArray.push(record7);
    var record8 = new Typesrecordaction(); record8.set("seq", 9); record8.set("name","種別対象なし"); record8.set("objectmaking","kato.hiroshi@boi.jp"); record8.set("typemaking", 9); record8.set("objectmodifying", "kato.hiroshi@boi.jp"); record8.set("typemodifying", 9 );  record8.set("removed", false); typeArray.push(record8);
    var record9 = new Typesrecordaction(); record9.set("seq", 55); record9.set("name","SELF-ADMIN-プログラム"); record9.set("objectmaking","kato.hiroshi@boi.jp"); record9.set("typemaking", 9); record9.set("objectmodifying", "kato.hiroshi@boi.jp"); record9.set("typemodifying", 9 );  record9.set("removed", false); typeArray.push(record9);
    var record10 = new Typesrecordaction(); record10.set("seq",  55); record10.set("name","SELF-ADMIN-人物特定"); record10.set("objectmaking","kato.hiroshi@boi.jp"); record10.set("typemaking", 9); record10.set("objectmodifying", "kato.hiroshi@boi.jp"); record10.set("typemodifying", 9 );  record10.set("removed", false); typeArray.push(record10);
    
    Parse.Object.saveAll( typeArray, { 
        success: function(objs) {
            response.success("Save list records finished! " );
        }, 
        error: function(error) { 
            response.error("save list record error");
        } 
    }); 
});

Parse.Cloud.define("mkAttributesuser", function(request, response) {
    var Attributesuser = Parse.Object.extend("Attributesuser");
    var attributesuser = new Attributesuser();
    attributesuser.set("seq", 0);
    attributesuser.set("sequser", 1);
    attributesuser.set("seqattribute", 1);
    attributesuser.set("value", "x");
    attributesuser.set("objectmaking", "x");
    attributesuser.set("typemaking", 1);
 
    attributesuser.set("objectmodifying", "x");
    attributesuser.set("typemodifying", 1);
    attributesuser.set("removing", new Date());
    attributesuser.set("objectremoving", "x");
    attributesuser.set("typeremoving", 1);
    attributesuser.set("removed", true);
    attributesuser.save(null, {
        success: function(attributesuser) {
        },
        error: function(attributesuser, error) {
        }
    });
    response.success("Create table finished !");
});

Parse.Cloud.define("mkAttributes", function(request, response) {
    var Attributes = Parse.Object.extend("Attributes");
    var attributes = new Attributes();
    attributes.set("seq", 0);
    attributes.set("name", "x");
    attributes.set("objectmaking", "x");
    attributes.set("typemaking", 1);
    attributes.set("objectmodifying", "x");
    attributes.set("typemodifying", 1);
    attributes.set("removing", new Date());
    attributes.set("objectremoving", "x");
    attributes.set("typeremoving", 1);
    attributes.set("removed", true);
    attributes.save(null, {
        success: function(attributes) {
        },
        error: function(attributes, error) {
        }
    });
    response.success("Create table finished !");
});

/* Function to show data in input classname
   Param: {"classname" : "table name"}
   */
Parse.Cloud.define("showData", function(request, response) {
    var classname = request.params.classname;
    var query = new Parse.Query(classname);
    query.find({
        success: function(result) {
            response.success(result);
        },
        error: function() {
            response.error(classname + " lookup failed!");
        }
    });
});

/*
 * Function to insert a object to table
 */
Parse.Cloud.define("insertData", function(request, response) {
    var classname = request.params.classname;
    var Object = Parse.Object.extend(classname);
    var object = new Object();
    object = request.params.object;
    object.save(null, {
        success: function(reobject) {
            response.success("Insert to " + classname + " success");
        },
        error: function(reobject, error) {
            response.error("Insert to " + classname + " error: " + error);
        }
    });
});