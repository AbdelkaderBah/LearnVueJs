import numeral from 'numeral'

// load a locale
numeral.register('locale', 'fr', {
    delimiters: {
        thousands: '',
        decimal: ','
    },
    abbreviations: {
        thousand: ' miles',
        million: 'million'
    },
});

// load a locale
numeral.register('locale', 'ar', {
    delimiters: {
        thousands: '',
        decimal: ','
    },
    abbreviations: {
        thousand: ' الف',
        million: 'مليون'
    },
});


export default numeral;
