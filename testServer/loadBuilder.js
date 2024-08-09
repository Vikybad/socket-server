// const { getContext } = require("./requestContext");



async function startLoadBuilderForPartyOrders(
    regionName
) {
    let loadCapacityConfiguration = null

    async function wait(secs) {
        // logger.info_loadBuilder_party(`Will wait for ${secs / 1000} secs...`)
        await new Promise(resolve => {
            setTimeout(() => {
                resolve()
            }, secs);
        })
    }


    function fun1(loadCapacityConfiguration) {
        // DO SMOMETING
        return fun2(loadCapacityConfiguration)
    }

    function fun2(loadCapacityConfiguration) {
        // DO SMOMETING
        // return something
    }

    let closureCallback =  async () => {
        loadCapacityConfiguration = regionName
        console.log(`Before : regionName: ${loadCapacityConfiguration}`)
        await wait(3000)
        fun1(loadCapacityConfiguration)
        console.log(`After : regionName: ${loadCapacityConfiguration}`)

        return loadCapacityConfiguration
    }
    return await closureCallback()


    // console.log(`Before : regionName: ${getContext('loadCapacityConfiguration')}`)
    // await wait(3000)
    // fun1(loadCapacityConfiguration)
    // console.log(`After : regionName: ${getContext('loadCapacityConfiguration')}`)

    // return getContext('loadCapacityConfiguration')
}


module.exports = {
    startLoadBuilderForPartyOrders
}