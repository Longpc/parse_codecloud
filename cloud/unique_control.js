// UNIQUE Control
Parse.Cloud.beforeSave("Typesrecordaction", function(request, response) {
    var column = "seq";
    var query = new Parse.Query("Typesrecordaction");
    query.equalTo(column, request.object.get(column));
    query.find({
        success: function(objects) {
            if(request.object.isNew() == false) {
                if(objects.length < 1) {
                    response.success();
                    return;
                }
                if(objects.length == 1) {
                    if (objects[0].id == request.object.id) {
                        response.success();
                        return;
                    } else {
                        response.error(column + " already exists 1");
                    }
                } else {
                    response.error(column + " already exists 2");
                }
            } else {
                if( objects.length > 0) {
                    response.error(column + " already exists 3");
                }else {
                    response.success();
                }
            }
        },
        error: function(error) {
            response.error("Could not validate unique for this Object");
        }
    });
});

// Add unique control to User table with column : idfacebook
Parse.Cloud.beforeSave("_User", function(request, response) {
    var column1 = "seq";
    var column2 = "idfacebook";
    var errorMsg = column1 + " or "+ column2 + " already exists. ";
    var reqcolumn1 = request.object.get(column1);
    var reqcolumn2 = request.object.get(column2);
    var query1 = new Parse.Query("_User");  // QUERY 1
    query1.equalTo(column1, reqcolumn1);
    var query2 = new Parse.Query("_User");  // QUERY 2
    query2.equalTo(column2, reqcolumn2);
    var compoundQuery;
    if(!reqcolumn2) {
        compoundQuery = query1;  // seq only
    } else {
        compoundQuery = Parse.Query.or(query1, query2);  // QUERY 1 OR QUERY 2
    }
    compoundQuery.find({
        success: function(objects) {
            if(request.object.isNew() == false) {
                if(objects.length < 1) {
                    response.success();
                    return;
                }
                if(objects.length == 1) {
                    if (objects[0].id == request.object.id) {
                        response.success();
                        return;
                    } else {
                        response.error(errorMsg);
                    }
                } else {
                    response.error(errorMsg);
                }
            } else {
                if( objects.length > 0) {
                    response.error(errorMsg);
                }else {
                    response.success();
                }
            }
        },
        error: function(error) {
            response.error("Could not validate unique for this Object");
        }
    });
});

// Add unique control to Tokens tables with column: seq
Parse.Cloud.beforeSave("Tokens", function(request, response) {
    var column = "seq";
    var query = new Parse.Query("Tokens");
    query.equalTo(column, request.object.get(column));
    query.find({
        success: function(objects) {
            if(request.object.isNew() == false) {
                if(objects.length < 1) {
                    response.success();
                    return;
                }
                if(objects.length == 1) {
                    if (objects[0].id == request.object.id) {
                        response.success();
                        return;
                    } else {
                        response.error(column + " already exists 1");
                    }
                } else {
                    response.error(column + " already exists 2");
                }
            } else {
                if( objects.length > 0) {
                    response.error(column + " already exists 3");
                }else {
                    response.success();
                }
            }
        },
        error: function(error) {
            response.error("Could not validate unique for this Object");
        }
    });
});

Parse.Cloud.beforeSave("Attributesuser", function(request, response) {
    var column = "seq";
    var query = new Parse.Query("Attributesuser");
    query.equalTo(column, request.object.get(column));
    query.find({
        success: function(objects) {
            if(request.object.isNew() == false) {
                if(objects.length < 1) {
                    response.success();
                    return;
                }
                if(objects.length == 1) {
                    if (objects[0].id == request.object.id) {
                        response.success();
                        return;
                    } else {
                        response.error(column + " already exists 1");
                    }
                } else {
                    response.error(column + " already exists 2");
                }
            } else {
                if( objects.length > 0) {
                    response.error(column + " already exists 3");
                }else {
                    response.success();
                }
            }
        },
        error: function(error) {
            response.error("Could not validate unique for this Object");
        }
    });
});

Parse.Cloud.beforeSave("Attributes", function(request, response) {
    var column = "seq";
    var query = new Parse.Query("Attributes");
    query.equalTo(column, request.object.get(column));
    query.find({
        success: function(objects) {
            if(request.object.isNew() == false) {
                if(objects.length < 1) {
                    response.success();
                    return;
                }
                if(objects.length == 1) {
                    if (objects[0].id == request.object.id) {
                        response.success();
                        return;
                    } else {
                        response.error(column + " already exists 1");
                    }
                } else {
                    response.error(column + " already exists 2");
                }
            } else {
                if( objects.length > 0) {
                    response.error(column + " already exists 3");
                }else {
                    response.success();
                }
            }
        },
        error: function(error) {
            response.error("Could not validate unique for this Object");
        }
    });
});

Parse.Cloud.beforeSave("Companies", function(request, response) {
    var column = "seq";
    var query = new Parse.Query("Companies");
    query.equalTo(column, request.object.get(column));
    query.find({
        success: function(objects) {
            if(request.object.isNew() == false) {
                if(objects.length < 1) {
                    response.success();
                    return;
                }
                if(objects.length == 1) {
                    if (objects[0].id == request.object.id) {
                        response.success();
                        return;
                    } else {
                        response.error(column + " already exists 1");
                    }
                } else {
                    response.error(column + " already exists 2");
                }
            } else {
                if( objects.length > 0) {
                    response.error(column + " already exists 3");
                }else {
                    response.success();
                }
            }
        },
        error: function(error) {
            response.error("Could not validate unique for this Object");
        }
    });
});

Parse.Cloud.beforeSave("Attributescompany", function(request, response) {
    var column = "seq";
    var query = new Parse.Query("Attributescompany");
    query.equalTo(column, request.object.get(column));
    query.find({
        success: function(objects) {
            if(request.object.isNew() == false) {
                if(objects.length < 1) {
                    response.success();
                    return;
                }
                if(objects.length == 1) {
                    if (objects[0].id == request.object.id) {
                        response.success();
                        return;
                    } else {
                        response.error(column + " already exists 1");
                    }
                } else {
                    response.error(column + " already exists 2");
                }
            } else {
                if( objects.length > 0) {
                    response.error(column + " already exists 3");
                }else {
                    response.success();
                }
            }
        },
        error: function(error) {
            response.error("Could not validate unique for this Object");
        }
    });
});

Parse.Cloud.beforeSave("Attributessecond", function(request, response) {
    var column = "seq";
    var query = new Parse.Query("Attributessecond");
    query.equalTo(column, request.object.get(column));
    query.find({
        success: function(objects) {
            if(request.object.isNew() == false) {
                if(objects.length < 1) {
                    response.success();
                    return;
                }
                if(objects.length == 1) {
                    if (objects[0].id == request.object.id) {
                        response.success();
                        return;
                    } else {
                        response.error(column + " already exists 1");
                    }
                } else {
                    response.error(column + " already exists 2");
                }
            } else {
                if( objects.length > 0) {
                    response.error(column + " already exists 3");
                }else {
                    response.success();
                }
            }
        },
        error: function(error) {
            response.error("Could not validate unique for this Object");
        }
    });
});

Parse.Cloud.beforeSave("Rooms", function(request, response) {
    var column = "seq";
    var query = new Parse.Query("Rooms");
    query.equalTo(column, request.object.get(column));
    query.find({
        success: function(objects) {
            if(request.object.isNew() == false) {
                if(objects.length < 1) {
                    response.success();
                    return;
                }
                if(objects.length == 1) {
                    if (objects[0].id == request.object.id) {
                        response.success();
                        return;
                    } else {
                        response.error(column + " already exists 1");
                    }
                } else {
                    response.error(column + " already exists 2");
                }
            } else {
                if( objects.length > 0) {
                    response.error(column + " already exists 3");
                }else {
                    response.success();
                }
            }
        },
        error: function(error) {
            response.error("Could not validate unique for this Object");
        }
    });
});

Parse.Cloud.beforeSave("Messages", function(request, response) {
    var column = "seq";
    var query = new Parse.Query("Messages");
    query.equalTo(column, request.object.get(column));
    query.find({
        success: function(objects) {
            if(request.object.isNew() == false) {
                if(objects.length < 1) {
                    response.success();
                    return;
                }
                if(objects.length == 1) {
                    if (objects[0].id == request.object.id) {
                        response.success();
                        return;
                    } else {
                        response.error(column + " already exists 1");
                    }
                } else {
                    response.error(column + " already exists 2");
                }
            } else {
                if( objects.length > 0) {
                    response.error(column + " already exists 3");
                }else {
                    response.success();
                }
            }
        },
        error: function(error) {
            response.error("Could not validate unique for this Object");
        }
    });
});

Parse.Cloud.beforeSave("Typescontent", function(request, response) {
    var column = "seq";
    var query = new Parse.Query("Typescontent");
    query.equalTo(column, request.object.get(column));
    query.find({
        success: function(objects) {
            if(request.object.isNew() == false) {
                if(objects.length < 1) {
                    response.success();
                    return;
                }
                if(objects.length == 1) {
                    if (objects[0].id == request.object.id) {
                        response.success();
                        return;
                    } else {
                        response.error(column + " already exists 1");
                    }
                } else {
                    response.error(column + " already exists 2");
                }
            } else {
                if( objects.length > 0) {
                    response.error(column + " already exists 3");
                }else {
                    response.success();
                }
            }
        },
        error: function(error) {
            response.error("Could not validate unique for this Object");
        }
    });
});

Parse.Cloud.beforeSave("Groups", function(request, response) {
    var column = "seq";
    var query = new Parse.Query("Groups");
    query.equalTo(column, request.object.get(column));
    query.find({
        success: function(objects) {
            if(request.object.isNew() == false) {
                if(objects.length < 1) {
                    response.success();
                    return;
                }
                if(objects.length == 1) {
                    if (objects[0].id == request.object.id) {
                        response.success();
                        return;
                    } else {
                        response.error(column + " already exists 1");
                    }
                } else {
                    response.error(column + " already exists 2");
                }
            } else {
                if( objects.length > 0) {
                    response.error(column + " already exists 3");
                }else {
                    response.success();
                }
            }
        },
        error: function(error) {
            response.error("Could not validate unique for this Object");
        }
    });
});

Parse.Cloud.beforeSave("Usersgroup", function(request, response) {
    var column = "seq";
    var query = new Parse.Query("Usersgroup");
    query.equalTo(column, request.object.get(column));
    query.find({
        success: function(objects) {
            if(request.object.isNew() == false) {
                if(objects.length < 1) {
                    response.success();
                    return;
                }
                if(objects.length == 1) {
                    if (objects[0].id == request.object.id) {
                        response.success();
                        return;
                    } else {
                        response.error(column + " already exists 1");
                    }
                } else {
                    response.error(column + " already exists 2");
                }
            } else {
                if( objects.length > 0) {
                    response.error(column + " already exists 3");
                }else {
                    response.success();
                }
            }
        },
        error: function(error) {
            response.error("Could not validate unique for this Object");
        }
    });
});

