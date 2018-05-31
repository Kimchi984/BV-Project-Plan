$('.js-add-milestone').on('click', function(){
    $('.js-button-wrap').before($('#milestonefull').html())
});


$('form').on('click', '.js-add-task', function(event){
    $(event.target).closest('.form-row').after($('#new-task-row').html())
});


$('#submit').on('click', function(event){
    event.preventDefault()
});




var milestone = "Milestone"
var task = "Task/Deliverable"

console.log(`${milestone} ` + 1);

$('.js-add-milestone').on('click', function(){
    console.log(`${milestone} ` + 1);
});
