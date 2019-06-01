import Vue from 'vue';

const targetClasses = [
    'mr-', 'ml-',
    'text-right', 'text-left',
    'justify-content-end', 'justify-content-start',
    'text-lg-left', 'text-lg-right',
    'float-left', 'float-right',
    'pr-', 'pl-'
];

let replacement = undefined;

String.prototype.i18nContains = function () {
    let name = this;
    let matched = false;

    targetClasses.map((value, key) => {
        if (name.includes(value)) {
            matched = true;
            let isPair = key % 2 === 0;
            let reverseKey = key === 0 ? 1 : key === 1 ? 0 : isPair ? key + 1 : key - 1;
            replacement = name.replace(value, targetClasses[reverseKey]);
        }
    });

    return matched;
};

Vue.directive('i18nClass', {
    bind: function (el, binding, node) {
        setTimeout(() => {
            if (node.context.$language.current === 'en_AR') {
                let classes = el.classList;
                for (let i = 0; i < classes.length; i++) {
                    if (classes[i].i18nContains()) {
                        classes.replace(classes[i], replacement)
                    }
                }
            }
        }, 250);
    }
});
