import rules from './rules';
import flatten from './helpers/flatten';
import moduleFinder from './helpers/moduleFinder';

function reactMdTransformer(importName) {
    const libPath = 'react-md/lib';

    const allModules = flatten(rules.map((rule) => {
        const [name, ruleModules] = rule;

        return ruleModules.map((component) => {
            if (Array.isArray(component)) {
                const [originalCmp, cmp] = component;

                return {
                    component: cmp,
                    module: name,
                    originalComponent: originalCmp,
                };
            }

            return {
                component,
                module: name,
            };
        });
    }));

    const foundModule = allModules.find(moduleFinder(importName));

    if (foundModule) {
        return `${libPath}/${foundModule.module}/${foundModule.component}`;
    }

    return `${libPath}/${importName}s/${importName}`;
}

export default reactMdTransformer;
