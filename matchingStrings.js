// 4
// aba
// baba
// aba
// xzxb
// 3
// aba
// xzxb
// ab

// In this input, we have 4 input strings:

// "aba"
// "baba"
// "aba"
// "xzxb"
// And we have 3 query strings:

// "aba"
// "xzxb"
// "ab"
// We need to determine the frequency of occurrence of each query string in the input strings.

// For the first query string "aba":

// It occurs twice in the input strings.
// For the second query string "xzxb":

// It occurs once in the input strings.
// For the third query string "ab":

// It does not occur in the input strings at all.
// So, the output array would be:


// 2
// 1
// 0


let strings = ["aba", "baba", "aba", "xzxb"];
let queries = ["aba", "xzxb", "ab"];

function matchingStrings(strings, queries) {
    
    let return_list = [];
    for (let i = 0; i < queries.length; i++){
        let counter= 0
        for (let j =0 ; j < strings.length; j++){
            if (queries[i] == strings[j]){
                counter +=1
            }   
        }
        return_list.push(counter)
    }
    return return_list
}

console.log(matchingStrings(strings,queries));