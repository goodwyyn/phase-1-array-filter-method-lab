// Code your solution here
function findMatching(source, sought){
    return source.filter(
        (likeMatch) => likeMatch.toLowerCase() ===sought.toLowerCase()
    )

}
function fuzzyMatch(source, searchString){
    return source.filter(
        (likeMatch) =>
        likeMatch.toLowerCase().indexOf(searchString.toLowerCase()) ===0

    )
}

function matchName(source, orderName){
    return source.filter((record) => record.name === orderName)
}