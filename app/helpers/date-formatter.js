import Ember from 'ember';

/*
https://www.w3schools.com/js/js_date_formats.asp

*/

export function dateFormatter(isodate/*, format*/) {
  // if (typeof(format) !== 'string') {
  //   format = 'MMMM DD, YYYY';
  // }
  // if (date !== null) {
  //   date = Date.now();
  // }
  let date = new Date(isodate),
      mm = date.getMonth() + 1, // getMonth() is zero-based
      dd = date.getDate();

  return [date.getFullYear(),
           (mm>9 ? '' : '0') + mm,
           (dd>9 ? '' : '0') + dd
         ].join('.');

}

export default Ember.Helper.helper(dateFormatter);
