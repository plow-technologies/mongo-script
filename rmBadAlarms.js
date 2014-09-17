
print("********************************");
print("Welcome to Mongo Alarm Cleaner.");
print("********************************\n\n");

print ("The following alarms will be removed : \n");
var alarmIds = [ "o541996eadb248d177f000000"
             , "o541996f5db248d177f000001"
             , "o54199744db248d177f000002"];

for (var i = 0; i < alarmIds.length; i++) {
alarmId = alarmIds[i].slice(1);
alarms = db.alarm.find({"_id" : ObjectId(alarmId)});
alarm_joins = db.alarm_joins.find({"alarm_id" : ObjectId(alarmId)});

alarms.forEach(printjson);
alarm_joins.forEach(printjson);

db.alarm.remove({"_id" : ObjectId(alarmId)});
db.alarm_joins.remove({"alarm_id" : ObjectId(alarmId)});

};
