const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
 if ( typeof sampleActivity !== 'string') return false;
 let sampleactivity = parseFloat(sampleActivity);
 if (isNaN(sampleactivity) || sampleactivity <= 0 || sampleactivity > 15) return false;
 let a = Math.LN2.toFixed(3) / HALF_LIFE_PERIOD;
 let result = Math.ceil(Math.log(MODERN_ACTIVITY / sampleactivity) / a);
 return result;
};
