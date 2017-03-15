define([
    'common/modules/experiments/tests/generic-email-variants'
], function (
    genericEmailTest
) {
    return new genericEmailTest(
        {
            id: 'FilmTodayEmailVariants',
            start: '2017-03-14',
            end: '2017-03-31',
            author: 'David Furey',
            audience: 0,
            audienceOffset: 0,
            signupPage: '???',
            canonicalListId: 1950,
            testIds: [
                { variantId: 'control', listId: 0 },
                { variantId: 'variant', listId: 0 }
            ]
        }
    );
});
