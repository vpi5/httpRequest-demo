

let theme = process.env.theme;
let theme_color = require(`./theme-${theme}-config`);
let styleConfig = () => {
    return theme_color;
};
module.exports = styleConfig;

module.styleConfig = styleConfig();