// UNIQUE Control

// Add unique control to User table with column : idfacebook
Parse.Cloud.beforeSave("_User", function(request, response) {
    var namecolumn1 = "idfacebook";
    var namecolumn2 = "seq";
    var query1 = new Parse.Query("_User");  // QUERY 1
    query1.equalTo(namecolumn1, request.object.get(namecolumn1));
    var query2 = new Parse.Query("_User");  // QUERY 2
    query2.equalTo(namecolumn2, request.object.get(namecolumn2));
    var compoundQuery = Parse.Query.or(query1, query2);  // QUERY 1 OR QUERY 2
    compoundQuery.first({
        success: function(object) {
            if (object) {
                response.error("Object already exists. ");
            } else {
                response.success();
            }
        },
        error: function(error) {
            response.error(error.message);
        }
    });
});

// Add unique control to Tokens tables with column: seq
Parse.Cloud.beforeSave("Tokens", function(request, response) {
    var namecolumn = "seq";
    var query = new Parse.Query("Tokens");
    query.equalTo(namecolumn, request.object.get(namecolumn));
    query.first({
        success: function(object) {
            if (object) {
                response.error(namecolumn + " already exists");
            } else {
                response.success();
            }
        },
        error: function(error) {
            response.error("Could not validate unique for this Object");
        }
    });
});

// Add unique control to Tokens tables with column: seq
Parse.Cloud.beforeSave("Typesrecordaction", function(request, response) {
    var namecolumn = "seq";
    var query = new Parse.Query("Typesrecordaction");
    query.equalTo(namecolumn, request.object.get(namecolumn));
    query.first({
        success: function(object) {
            if (object) {
                response.error(namecolumn + " already exists");
            } else {
                response.success();
            }
        },
        error: function(error) {
            response.error("Could not validate unique for this Object");
        }
    });
});

Parse.Cloud.beforeSave("Attributesuser", function(request, response) {
    var namecolumn = "seq";
    var query = new Parse.Query("Attributesuser");
    query.equalTo(namecolumn, request.object.get(namecolumn));
    query.first({
        success: function(object) {
            if (object) {
                response.error(namecolumn + " already exists");
            } else {
                response.success();
            }
        },
        error: function(error) {
            response.error("Could not validate unique for this Object");
        }
    });
});

Parse.Cloud.beforeSave("Attributes", function(request, response) {
    var namecolumn = "seq";
    var query = new Parse.Query("Attributes");
    query.equalTo(namecolumn, request.object.get(namecolumn));
    query.first({
        success: function(object) {
            if (object) {
                response.error(namecolumn + " already exists");
            } else {
                response.success();
            }
        },
        error: function(error) {
            response.error("Could not validate unique for this Object");
        }
    });
});
