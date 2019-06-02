import Vue from 'vue';
import get from "lodash/get";

const targetClasses = [
    'ml-', 'mr-',
    'pl-', 'pr-',
    '-left', '-right',
    '-start', '-end',
];

let i18nHelper = {
    data: {
        key: 0,
        reversed: {
            rtl: [],
            ltr: []
        },
        replacement: undefined
    },
    hasTargetClass: function (name) {
        //Find targeted bootstrap classes @see: targetClasses
        let matched = false;

        targetClasses.map((value, key) => {
            if (name.includes(value)) {
                matched = true;
                let isPair = key % 2 === 0;
                let reverseKey = key === 0 ? 1 : key === 1 ? 0 : isPair ? key + 1 : key - 1;
                this.data.replacement = name.replace(value, targetClasses[reverseKey]);
            }
        });

        return matched;
    },
    reverseClass: function (el, node) {
        //Reverse for RTL language or Undo reverse
        if (this.isReversable(el, node)) {
            let classes = el.classList;
            for (let i = 0; i < classes.length; i++) {
                if (this.hasTargetClass(classes[i])) {
                    el.classList.replace(classes[i], this.data.replacement);

                    if (node.context.isRtl()) {
                        /*
                         * Save to Reversed RTL elements
                         */
                        this.data.reversed.rtl.push(el.key);
                    }
                    else if (i === classes.length - 1) {
                        /*
                         * Remove all Reversed RTL elements
                         */
                        this.data.reversed.rtl = [];
                    }
                }
            }
        }
    },
    isReversable(el, node) {
        return (node.context.isRtl() && !this.data.reversed.rtl.includes(el.key))
            || (!node.context.isRtl() && this.data.reversed.rtl.includes(el.key));
    },
    generateKey() {
        return this.data.key += 1;
    },
};

/*
 * i18n-k2r methods
 */
Vue.mixin({
    methods: {
        isRtl() {
            return this.$root.$language.current === 'en_AR';
        },
        toStrLang() {
            return this.getLang().replace('en_', '').toLowerCase();
        },
        isLang(name) {
            return this.toStrLang() === name;
        },
        getLang() {
            return get(localStorage, 'lang', 'en_EN');
        },
        changeLang(lang) {
            if (lang) {
                this.$root.$language.current = lang;
                localStorage.setItem('lang', lang);
                this.$root.$emit('change-lang');
            }
        }
    }
});

/*
 * i18n-k2r directive
 */
Vue.directive('i18nClass', {
    bind: function (el, binding, node) {
        //If element has no key assigned, assign new one
        if (!el.key) {
            el.key = i18nHelper.generateKey();
        }

        //Call this once Vue "el" is ready or updated
        Vue.nextTick(() => {
            i18nHelper.reverseClass(el, node);
        });
    }
});
