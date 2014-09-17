mongo-script
============

A collection of Useful mongo utilities scripts

Usage   : mongo <ip>:<portNumber>/<db_name> <scriptPath>
Example : mongo 127.0.0.1:27017/onping_production ./rmBadAlarms.js

To Backup Remove Data :  mongo 127.0.0.1:27017/onping_production ./rmBadAlarms.js > backupAlarm.txt
