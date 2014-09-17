
print("********************************");
print("Welcome to Mongo Alarm Cleaner.");
print("********************************\n\n");

print ("The following alarms will be removed : \n");
var alarms = [ "o541996eadb248d177f000000"
             , "o541996f5db248d177f000001"
             , "o54199744db248d177f000002"];

for (var i = 0; i < alarms.length; i++) {
alarmId = alarms[i].slice(1);
alarms = db.alarm.find({"_id" : ObjectId(alarmId)});
alarm_joins = db.alarm_joins.find({"alarm_id" : ObjectId(alarmId)});

alarms.forEach(printjson);
alarms_joins.forEachf(printjson);

// db.alarm.remove({"_id" : ObjectId(alarmId)});
// db.alarm_joins.remove({"alarm_id" : ObjectId(alarmId)});

};
