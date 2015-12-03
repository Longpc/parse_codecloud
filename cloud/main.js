require('cloud/unique_control.js');
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:

Parse.Cloud.define("mkCompanies", function(request, response) {
    var Companies = Parse.Object.extend("Companies");
    var companies = new Companies();
    companies.set("seq", 0);
    companies.set("name", "x");
    companies.set("making", new Date());
    companies.set("objectmaking", "x");
    companies.set("typemaking", 1);
    companies.set("modifying", new Date());
    companies.set("objectmodifying", "x");
    companies.set("typemodifying", 1);
    companies.set("removing", new Date());
    companies.set("objectremoving", "x");
    companies.set("typeremoving", 1);
    companies.set("removed", false);
    companies.save(null, {
        success: function(companies) {
            Parse.Cloud.run("rmDataInTable", {"classname":"Companies"});
            response.success("Create table Companies finished !");
        },
        error: function(companies, error) {
            response.error("Error in create table: " + error);
        }
    });
});

Parse.Cloud.define("mkTypesrecordaction", function(request, response) {
    var Typesrecordaction = Parse.Object.extend("Typesrecordaction");
    var typesrecordaction = new Typesrecordaction();
    typesrecordaction.set("seq", 0);
    typesrecordaction.set("name", "x");
    typesrecordaction.set("making", new Date());
    typesrecordaction.set("objectmaking", "x");
    typesrecordaction.set("typemaking", 1);
    typesrecordaction.set("modifying", new Date());
    typesrecordaction.set("objectmodifying", "x");
    typesrecordaction.set("typemodifying", 1);
    typesrecordaction.set("removing", new Date());
    typesrecordaction.set("objectremoving", "x");
    typesrecordaction.set("typeremoving", 1);
    typesrecordaction.set("removed", true);
    typesrecordaction.save(null, {
        success: function(typesrecordaction) {
            Parse.Cloud.run("rmDataInTable", {"classname":"Typesrecordaction"});
            response.success("Create table Typesrecordaction finished !");
        },
        error: function(typesrecordaction, error) {
            response.error("Error in create table: " + error);
        }
    });
});

Parse.Cloud.define("mkTokens", function(request, response) {
    var Tokens = Parse.Object.extend("Tokens");
    var tokens = new Tokens();
    tokens.set("seq", 0);
    tokens.set("tokenaccess", "x");
    tokens.set("idfacebook", 1);
    tokens.set("picture", "x");
    tokens.set("making", new Date());
    tokens.set("objectmaking", "x");
    tokens.set("typemaking", 1);
    tokens.set("modifying", new Date());
    tokens.set("objectmodifying", "x");
    tokens.set("typemodifying", 1);
    tokens.set("removing", new Date());
    tokens.set("objectremoving", "x");
    tokens.set("typeremoving", 1);
    tokens.set("removed", true);
    tokens.save(null, {
        success: function(tokens) {
            Parse.Cloud.run("rmDataInTable", {"classname":"Tokens"});
            response.success("Create table Tokens finished !");
        },
        error: function(tokens, error) {
            response.error("Error in create table: " + error);
        }
    });
});

Parse.Cloud.define("mk_User", function(request, response) {
    var _User = Parse.Object.extend("_User");
    var _user = new _User();
    _user.set("seq", 0);
    _user.set("username", "x");
    _user.set("password", "x");
    _user.set("authData", "x");
    _user.set("email", "test@mail.com");
    _user.set("emailVerified", true);
    _user.set("idfacebook", 1);
    _user.set("seqcompany", 1);
    _user.set("making", new Date());
    _user.set("objectmaking", "x");
    _user.set("typemaking", 1);
    _user.set("modifying", new Date());
    _user.set("objectmodifying", "x");
    _user.set("typemodifying", 1);
    _user.set("removing", new Date());
    _user.set("objectremoving", "x");
    _user.set("typeremoving", 1);
    _user.set("removed", true);
    _user.save(null, {
        success: function(_user) {
            response.success("Create table _User finished !");
        },
        error: function(_user, error) {
            response.error("Error in create table: " + error);
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
    attributesuser.set("nametable", "x");
    attributesuser.set("seqsomething", 1);
    attributesuser.set("making", new Date());
    attributesuser.set("objectmaking", "x");
    attributesuser.set("typemaking", 1);
    attributesuser.set("modifying", new Date());
    attributesuser.set("objectmodifying", "x");
    attributesuser.set("typemodifying", 1);
    attributesuser.set("removing", new Date());
    attributesuser.set("objectremoving", "x");
    attributesuser.set("typeremoving", 1);
    attributesuser.set("removed", true);
    attributesuser.save(null, {
        success: function(attributesuser) {
            Parse.Cloud.run("rmDataInTable", {"classname":"Attributesuser"});
            response.success("Create table Attributesuser finished !");
        },
        error: function(attributesuser, error) {
            response.error("Error in create table: " + error);
        }
    });
});

Parse.Cloud.define("mkAttributes", function(request, response) {
    var Attributes = Parse.Object.extend("Attributes");
    var attributes = new Attributes();
    attributes.set("seq", 0);
    attributes.set("name", "x");
    attributes.set("making", new Date());
    attributes.set("objectmaking", "x");
    attributes.set("typemaking", 1);
    attributes.set("modifying", new Date());
    attributes.set("objectmodifying", "x");
    attributes.set("typemodifying", 1);
    attributes.set("removing", new Date());
    attributes.set("objectremoving", "x");
    attributes.set("typeremoving", 1);
    attributes.set("removed", true);
    attributes.save(null, {
        success: function(attributes) {
            Parse.Cloud.run("rmDataInTable", {"classname":"Attributes"});
            response.success("Create table Attributes finished !");
        },
        error: function(attributes, error) {
            response.error("Error in create table: " + error);
        }
    });
});

Parse.Cloud.define("mkAttributescompany", function(request, response) {
    var Attributescompany = Parse.Object.extend("Attributescompany");
    var attributescompany = new Attributescompany();
    attributescompany.set("seq", 0);
    attributescompany.set("seqcompany", 1);
    attributescompany.set("seqattribute", 1);
    attributescompany.set("value", "x");
    attributescompany.set("making", new Date());
    attributescompany.set("objectmaking", "x");
    attributescompany.set("typemaking", 1);
    attributescompany.set("modifying", new Date());
    attributescompany.set("objectmodifying", "x");
    attributescompany.set("typemodifying", 1);
    attributescompany.set("removing", new Date());
    attributescompany.set("objectremoving", "x");
    attributescompany.set("typeremoving", 1);
    attributescompany.set("removed", false);
    attributescompany.save(null, {
        success: function(attributescompany) {
            Parse.Cloud.run("rmDataInTable", {"classname":"Attributescompany"});
            response.success("Create table Attributescompany finished !");
        },
        error: function(attributescompany, error) {
            response.error("Error in create table: " + error);
        }
    });
});

Parse.Cloud.define("mkAttributessecond", function(request, response) {
    var Attributessecond = Parse.Object.extend("Attributessecond");
    var attributessecond = new Attributessecond();
    attributessecond.set("seq", 0);
    attributessecond.set("name", "x");
    attributessecond.set("making", new Date());
    attributessecond.set("objectmaking", "x");
    attributessecond.set("typemaking", 1);
    attributessecond.set("modifying", new Date());
    attributessecond.set("objectmodifying", "x");
    attributessecond.set("typemodifying", 1);
    attributessecond.set("removing", new Date());
    attributessecond.set("objectremoving", "x");
    attributessecond.set("typeremoving", 1);
    attributessecond.set("removed", false);
    attributessecond.save(null, {
        success: function(attributessecond) {
            Parse.Cloud.run("rmDataInTable", {"classname":"Attributessecond"});
            response.success("Create table Attributessecond finished !");
        },
        error: function(attributessecond, error) {
            response.error("Error in create table: " + error);
        }
    });
});

Parse.Cloud.define("mkRooms", function(request, response) {
    var Rooms = Parse.Object.extend("Rooms");
    var rooms = new Rooms();
    rooms.set("seq", 0);
    rooms.set("seqgroup", 1);
    rooms.set("making", new Date());
    rooms.set("objectmaking", "x");
    rooms.set("typemaking", 1);
    rooms.set("modifying", new Date());
    rooms.set("objectmodifying", "x");
    rooms.set("typemodifying", 1);
    rooms.set("removing", new Date());
    rooms.set("objectremoving", "x");
    rooms.set("typeremoving", 1);
    rooms.set("removed", false);
    rooms.save(null, {
        success: function(rooms) {
            Parse.Cloud.run("rmDataInTable", {"classname":"Rooms"});
            response.success("Create table Rooms finished !");
        },
        error: function(rooms, error) {
            response.error("Error in create table: " + error);
        }
    });
});

Parse.Cloud.define("mkMessages", function(request, response) {
    var Messages = Parse.Object.extend("Messages");
    var messages = new Messages();
    messages.set("seq", 0);
    messages.set("seqroom", 1);
    messages.set("sequser", 1);
    messages.set("sequsertarget", 1);
    messages.set("typecontent", 1);
    messages.set("content", "x");
    messages.set("seqmessage", 1);
    messages.set("making", new Date());
    messages.set("objectmaking", "x");
    messages.set("typemaking", 1);
    messages.set("modifying", new Date());
    messages.set("objectmodifying", "x");
    messages.set("typemodifying", 1);
    messages.set("removing", new Date());
    messages.set("objectremoving", "x");
    messages.set("typeremoving", 1);
    messages.set("removed", false);
    messages.save(null, {
        success: function(messages) {
            Parse.Cloud.run("rmDataInTable", {"classname":"Messages"});
            response.success("Create table Messages finished !");
        },
        error: function(messages, error) {
            response.error("Error in create table: " + error);
        }
    });
});

Parse.Cloud.define("mkTypescontent", function(request, response) {
    var Typescontent = Parse.Object.extend("Typescontent");
    var typescontent = new Typescontent();
    typescontent.set("seq", 0);
    typescontent.set("name", "x");
    typescontent.set("making", new Date());
    typescontent.set("objectmaking", "x");
    typescontent.set("typemaking", 1);
    typescontent.set("modifying", new Date());
    typescontent.set("objectmodifying", "x");
    typescontent.set("typemodifying", 1);
    typescontent.set("removing", new Date());
    typescontent.set("objectremoving", "x");
    typescontent.set("typeremoving", 1);
    typescontent.set("removed", false);
    typescontent.save(null, {
        success: function(typescontent) {
            Parse.Cloud.run("rmDataInTable", {"classname":"Typescontent"});
            response.success("Create table Typescontent finished !");
        },
        error: function(typescontent, error) {
            response.error("Error in create table: " + error);
        }
    });
});

Parse.Cloud.define("mkGroups", function(request, response) {
    var Groups = Parse.Object.extend("Groups");
    var groups = new Groups();
    groups.set("seq", 0);
    groups.set("making", new Date());
    groups.set("objectmaking", "x");
    groups.set("typemaking", 1);
    groups.set("modifying", new Date());
    groups.set("objectmodifying", "x");
    groups.set("typemodifying", 1);
    groups.set("removing", new Date());
    groups.set("objectremoving", "x");
    groups.set("typeremoving", 1);
    groups.set("removed", false);
    groups.save(null, {
        success: function(groups) {
            Parse.Cloud.run("rmDataInTable", {"classname":"Groups"});
            response.success("Create table Groups finished !");
        },
        error: function(groups, error) {
            response.error("Error in create table: " + error);
        }
    });
});

Parse.Cloud.define("mkUsersgroup", function(request, response) {
    var Usersgroup = Parse.Object.extend("Usersgroup");
    var usersgroup = new Usersgroup();
    usersgroup.set("seq", 0);
    usersgroup.set("seqgroup", 1);
    usersgroup.set("sequser", 1);
    usersgroup.set("making", new Date());
    usersgroup.set("objectmaking", "x");
    usersgroup.set("typemaking", 1);
    usersgroup.set("modifying", new Date());
    usersgroup.set("objectmodifying", "x");
    usersgroup.set("typemodifying", 1);
    usersgroup.set("removing", new Date());
    usersgroup.set("objectremoving", "x");
    usersgroup.set("typeremoving", 1);
    usersgroup.set("removed", false);
    usersgroup.save(null, {
        success: function(usersgroup) {
            Parse.Cloud.run("rmDataInTable", {"classname":"Groups"});
            response.success("Create table Usersgroup finished !");
        },
        error: function(usersgroup, error) {
            response.error("Error in create table: " + error);
        }
    });
});

/*
 * Function to init data
 */
Parse.Cloud.define("insertTypesrecordaction", function(request, response) {
    var Typesrecordaction = Parse.Object.extend("Typesrecordaction");
    var tempArray =[];
    var record1 = new Typesrecordaction(); record1.set("seq", 1); record1.set("name", 'FRONT-プログラム'); record1.set("making", new Date()); record1.set("objectmaking", 'kato.hiroshi@boi.jp'); record1.set("typemaking", 9); record1.set("modifying", new Date()); record1.set("objectmodifying", 'kato.hiroshi@boi.jp'); record1.set("typemodifying", 9); record1.set("removed", false ); tempArray.push(record1);
    var record2 = new Typesrecordaction(); record2.set("seq", 11); record2.set("name", 'FRONT-人物特定'); record2.set("making", new Date()); record2.set("objectmaking", 'kato.hiroshi@boi.jp'); record2.set("typemaking", 9); record2.set("modifying", new Date()); record2.set("objectmodifying", 'kato.hiroshi@boi.jp'); record2.set("typemodifying", 9); record2.set("removed", false ); tempArray.push(record2);
    var record3 = new Typesrecordaction(); record3.set("seq", 2); record3.set("name", 'API-プログラム'); record3.set("making", new Date()); record3.set("objectmaking", 'kato.hiroshi@boi.jp'); record3.set("typemaking", 9); record3.set("modifying", new Date()); record3.set("objectmodifying", 'kato.hiroshi@boi.jp'); record3.set("typemodifying", 9); record3.set("removed", false ); tempArray.push(record3);
    var record4 = new Typesrecordaction(); record4.set("seq", 22); record4.set("name", 'API-人物特定'); record4.set("making", new Date()); record4.set("objectmaking", 'kato.hiroshi@boi.jp'); record4.set("typemaking", 9); record4.set("modifying", new Date()); record4.set("objectmodifying", 'kato.hiroshi@boi.jp'); record4.set("typemodifying", 9); record4.set("removed", false ); tempArray.push(record4);
    var record5 = new Typesrecordaction(); record5.set("seq", 3); record5.set("name", 'ADMIN-プログラム'); record5.set("making", new Date()); record5.set("objectmaking", 'kato.hiroshi@boi.jp'); record5.set("typemaking", 9); record5.set("modifying", new Date()); record5.set("objectmodifying", 'kato.hiroshi@boi.jp'); record5.set("typemodifying", 9); record5.set("removed", false ); tempArray.push(record5);
    var record6 = new Typesrecordaction(); record6.set("seq", 33); record6.set("name", 'ADMIN-人物特定'); record6.set("making", new Date()); record6.set("objectmaking", 'kato.hiroshi@boi.jp'); record6.set("typemaking", 9); record6.set("modifying", new Date()); record6.set("objectmodifying", 'kato.hiroshi@boi.jp'); record6.set("typemodifying", 9); record6.set("removed", false ); tempArray.push(record6);
    var record7 = new Typesrecordaction(); record7.set("seq", 4); record7.set("name", 'BATCH-プログラム'); record7.set("making", new Date()); record7.set("objectmaking", 'kato.hiroshi@boi.jp'); record7.set("typemaking", 9); record7.set("modifying", new Date()); record7.set("objectmodifying", 'kato.hiroshi@boi.jp'); record7.set("typemodifying", 9); record7.set("removed", false ); tempArray.push(record7);
    var record8 = new Typesrecordaction(); record8.set("seq", 9); record8.set("name", '種別対象なし'); record8.set("making", new Date()); record8.set("objectmaking", 'kato.hiroshi@boi.jp'); record8.set("typemaking", 9); record8.set("modifying", new Date()); record8.set("objectmodifying", 'kato.hiroshi@boi.jp'); record8.set("typemodifying", 9); record8.set("removed", false ); tempArray.push(record8);
    var record9 = new Typesrecordaction(); record9.set("seq", 5); record9.set("name", 'SELF-ADMIN-プログラム'); record9.set("making", new Date()); record9.set("objectmaking", 'kato.hiroshi@boi.jp'); record9.set("typemaking", 9); record9.set("modifying", new Date()); record9.set("objectmodifying", 'kato.hiroshi@boi.jp'); record9.set("typemodifying", 9); record9.set("removed", false ); tempArray.push(record9);
    var record10 = new Typesrecordaction(); record10.set("seq", 55); record10.set("name", 'SELF-ADMIN-人物特定'); record10.set("making", new Date()); record10.set("objectmaking", 'kato.hiroshi@boi.jp'); record10.set("typemaking", 9); record10.set("modifying", new Date()); record10.set("objectmodifying", 'kato.hiroshi@boi.jp'); record10.set("typemodifying", 9); record10.set("removed", false ); tempArray.push(record10);
    Parse.Object.saveAll( tempArray, {
        success: function(objs) {
            response.success("Save list records finished!");
        },
        error: function(error) {
            response.error("save list record error");
        }
    });
});

Parse.Cloud.define("insertAttributessecond", function(request, response) {
    var Attributessecond = Parse.Object.extend("Attributessecond");
    var tempArray =[];
    var record1 = new Attributessecond(); record1.set("seq", 1); record1.set("name", '面接'); record1.set("making", new Date()); record1.set("objectmaking", 'kato.hiroshi@boi.jp'); record1.set("typemaking", 9); record1.set("modifying", new Date()); record1.set("objectmodifying", 'kato.hiroshi@boi.jp'); record1.set("typemodifying", 9); record1.set("removed", false ); tempArray.push(record1);
    var record2 = new Attributessecond(); record2.set("seq", 2); record2.set("name", 'インターン'); record2.set("making", new Date()); record2.set("objectmaking", 'kato.hiroshi@boi.jp'); record2.set("typemaking", 9); record2.set("modifying", new Date()); record2.set("objectmodifying", 'kato.hiroshi@boi.jp'); record2.set("typemodifying", 9); record2.set("removed", false ); tempArray.push(record2);
    var record3 = new Attributessecond(); record3.set("seq", 3); record3.set("name", 'OB訪問'); record3.set("making", new Date()); record3.set("objectmaking", 'kato.hiroshi@boi.jp'); record3.set("typemaking", 9); record3.set("modifying", new Date()); record3.set("objectmodifying", 'kato.hiroshi@boi.jp'); record3.set("typemodifying", 9); record3.set("removed", false ); tempArray.push(record3);
    Parse.Object.saveAll( tempArray, {
        success: function(objs) {
            response.success("Save list records finished!");
        },
        error: function(error) {
            response.error("save list record error");
        }
    });
});


/* Function to show data in input classname
   Param: {"classname" : "table name"}
   */
Parse.Cloud.define("backupData", function(request, response) {
    var classname = request.params.classname;
    var query = new Parse.Query(classname);
    query.ascending("createdAd");
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
Parse.Cloud.define("restoreData", function(request, response) {
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

Parse.Cloud.define("rmValueOnRecordBySeq", function(request, response) {
    Parse.Cloud.useMasterKey();
    var classname = request.params.classname;
    var seq = request.params.seq;
    var columnname = request.params.column;
    if(!classname || !columnname || !seq) return;
    var query = new Parse.Query(classname);
    query.equalTo("seq", seq);
    query.first({
        success: function(data) {
            data.unset(columnname);
            data.save(null, {
                success: function(dt) {
                    console.log("update record success");
                    response.success("unset value success");
                },
                error: function(dt, error) {
                    console.log(error);
                    response.error("Update record failed!");
                }
            });
        },
        error: function() {
            response.error("Record not found!" + seq);
        }
    });
});
/*
 * Functions was defined for remove all Data in request table
 * @param: {"classname" : "table name"}
 */
Parse.Cloud.define("rmDataInTable", function(request, response) {
    var classname = request.params.classname;
    var query = new Parse.Query(classname);
    query.find({
        success: function(results) {
            console.log("Data length in rmDataInTable:" + results.length);
            Parse.Object.destroyAll(results, {
                success: function() {
                    response.success("Destroy all data in " +classname);
                },
                error: function(error) {
                    console.log("Error when delete all data: " + error.code + "; " + error.message);
                }
            });
        },
        error: function(error) {
            response.error(error);
        }
    });
});