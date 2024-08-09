const { startLoadBuilderForPartyOrders } = require("./loadBuilder")
const { setContext, runWithContext } = require("./requestContext");

async function runLoadBuilder(regionName) {

    return await runWithContext(async () => {
        setContext('loadCapacityConfiguration', regionName);
        let res = await startLoadBuilderForPartyOrders(regionName)
        return res
    });
}

module.exports = {
    runLoadBuilder
};