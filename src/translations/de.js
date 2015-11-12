module.exports = {
  emptyDoc: 'Schreibe etwas …',
  search:   'Suchen …',
  footer:   'write lite, open source',
  share:    'teilen',
  open:     'öffnen',
  modified: 'zuletzt bearbeitet',
  welcome:  require('./welcome-de.txt'),
  secondsAgo: function (x) {
    if (x === 1) return 'vor einer Sekunde';
    return 'vor ' + x + ' Sekunden';
  },
  minutesAgo: function (x) {
    if (x === 1) return 'vor einer Minute';
    return 'vor ' + x + ' Minuten';
  },
  hoursAgo: function (x) {
    if (x === 1) return 'vor einer Stunde';
    return 'vor ' + x + ' Stunden';
  },
  daysAgo: function (x) {
    if (x === 1) return 'vor einem Tag';
    return 'vor ' + x + ' Tagen';
  },
  monthsAgo: function (x) {
    if (x === 1) return 'vor einem Monat';
    return 'vor ' + x + ' Monaten';
  },
  yearsAgo: function (x) {
    if (x === 1) return 'vor einem Jahr';
    return 'vor ' + x + ' Jahren';
  }
};