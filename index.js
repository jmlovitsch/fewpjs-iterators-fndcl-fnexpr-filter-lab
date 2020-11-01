// Code your solution here

function findMatching(drivers, string) {
    const mDr = drivers.filter(d => d.toUpperCase() === string.toUpperCase() )
    return mDr
}

function fuzzyMatch(drivers, string) {
    const mDr = drivers.filter(d => d.slice(0, string.length ) === string )
    return mDr
}

function matchName(drivers, string) {
    const mDr = drivers.filter(d => d.name.toUpperCase() === string.toUpperCase() )
    return mDr

}
