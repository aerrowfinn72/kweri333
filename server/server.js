/***** Meteor Server File *****************************************************/
/* Code to be run server side */

Meteor.startup(function () {
  /* Server publishes subsets of collections to be accessed by the client */

  Meteor.publish('classes', function(isProf, id){
    if (isProf) return Classes.find({profs: id});
    else return Classes.find({students: id});
  });
  Meteor.publish('lectures', function(class_id){
    return Lectures.find({class_id: class_id});
  });
  Meteor.publish('questions', function(lecture_id){
    return Questions.find({lecture_id: lecture_id});
  });
});
