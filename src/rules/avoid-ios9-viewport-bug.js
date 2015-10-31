'use strict';
const message = {
  width: "Use document.documentElement.clientWidth instead of window.innerHeight",
  height: "Use document.documentElement.clientHeight instead of window.innerHeight"
};

const avoidIOS9ViewportBugs = context => {
  return {
    MemberExpression: node => {
      let {object, property} = node;
      if (object.name === 'window' && property.name.match(/^inner(Width|Height)$/)) {
        context.report(node, message[RegExp.$1.toLowerCase()]);
      }
    }
  };
};

avoidIOS9ViewportBugs.schema = [];

export default avoidIOS9ViewportBugs;
export { message };
