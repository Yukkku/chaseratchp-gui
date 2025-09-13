import sharedMessages from '../shared-messages';

// use the default message if a translation function is not passed
const defaultTranslator = msgObj => msgObj.defaultMessage;

/**
 * Generate a localized version of the default project
 * @param {function} translateFunction a function to use for translating the default names
 * @return {object} the project data json for the default project
 */
const projectData = translateFunction => {
    const translator = translateFunction || defaultTranslator;
    return ({
        targets: [
            {
                isStage: true,
                name: 'Stage',
                variables: {},
                blocks: {},
                costumes: [{
                    assetId: 'cd21514d0531fdffb22204e0ec5ed84a',
                    name: translator(sharedMessages.backdrop, {index: 1}),
                    md5ext: 'cd21514d0531fdffb22204e0ec5ed84a.svg',
                    dataFormat: 'svg',
                    rotationCenterX: 240,
                    rotationCenterY: 180
                }],
                sounds: [],
            },
            {
                isStage: false,
                name: translator(sharedMessages.sprite, {index: 1}),
                variables: {},
                blocks: {},
                costumes: [{
                    assetId: '3826a4091a33e4d26f87a2fac7cf796b',
                    name: 'apple',
                    bitmapResolution: 1,
                    md5ext: '3826a4091a33e4d26f87a2fac7cf796b.svg',
                    dataFormat: 'svg',
                    rotationCenterX: 31,
                    rotationCenterY: 31
                }],
                sounds: [],
            }
        ],
        meta: {
            semver: '3.0.0',
            vm: '0.1.0',
            agent: '',
        },
    });
};


export default projectData;
