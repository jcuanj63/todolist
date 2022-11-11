// External MODULE "date" with MODULE.EXPORTS OBJECT
// (You can also only use EXPORTS)
// It has two functions:
// + getDate returns date (Thursday, November 10)
// + getDay  returns day of the week

// *********************************************************
// Module getDate (With Function Declaration technique)
// *********************************************************
// module.exports.getDate = getDate;
exports.getDate = getDate;

function getDate() {
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  const today = new Date();

  return today.toLocaleDateString("en-US", options);
}

// *********************************************************
// Module getDay (With Function Expression Technique)
// *********************************************************
exports.getDay = function () {
  const options = {
    weekday: "long",
  };

  const today = new Date();

  return today.toLocaleDateString("en-US", options);
};
