import numeral from 'numeral'

//mutate english abbreviations
numeral.locales.en.abbreviations = {
    thousand: ' thousands',
    million: 'millions'
};

// add french local
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

// add arabic
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
