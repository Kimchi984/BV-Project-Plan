example();

function example() {

var milestones = [
{"startDate":new Date("Sun Dec 09 01:36:45 EST 2012"),"endDate":new Date("Sun Dec 09 02:36:45 EST 2012"),"milestoneName":"Kick-off","phase":"one"},
{"startDate":new Date("Sun Dec 09 04:56:32 EST 2012"),"endDate":new Date("Sun Dec 09 06:35:47 EST 2012"),"milestoneName":"Configuration","phase":"two"},
{"startDate":new Date("Sun Dec 09 06:29:53 EST 2012"),"endDate":new Date("Sun Dec 09 06:34:04 EST 2012"),"milestoneName":"Code Integration","phase":"three"},


var taskStatus = {
    "SUCCEEDED" : "bar",
    "FAILED" : "bar-failed",
    "RUNNING" : "bar-running",
    "KILLED" : "bar-killed"
};

var milestoneNames = [ "Kick-off", "Configuration", "Code Integration"];

milestones.sort(function(a, b) {
    return a.endDate - b.endDate;
});
var maxDate = milestones[milestones.length - 1].endDate;
milestones.sort(function(a, b) {
    return a.startDate - b.startDate;
});
var minDate = milestones[0].startDate;

var format = "%H:%M";

var gantt = d3.gantt().milestoneTypes(milestoneNames).milestonePhase(milestonePhase).tickFormat(format);
gantt(milestones);

};
