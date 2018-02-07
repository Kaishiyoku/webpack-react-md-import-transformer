import rules from './rules';
import flatten from './flatten';
import moduleFinder from './moduleFinder';

function reactMdTransformer(importName) {
    const libPath = 'react-md/lib';

    const modules = flatten(rules.map((rule) => rule[1].map((component) => {
        if (Array.isArray(component)) {
            return {
                component: component[1],
                module: rule[0],
                originalComponent: component[0],
            };
        }

        return {
            component,
            module: rule[0],
        };
    })));

    const foundModule = modules.find(moduleFinder(importName));

    if (foundModule) {
        return `${libPath}/${foundModule.module}/${foundModule.component}`;
    }

    return `${libPath}/${importName}s/${importName}`;
}

export default reactMdTransformer;