import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Pagin from 'comps/Pagin';

const ArrayPage = () => {
    const [msgs, setMsgs] = useState([]);
    const [allmsgs, setAll] = useState([]);
    const item_per_page = 3; //3 items per page

    const GetMessages = async () => {
        var resp = await axios.get("https://advdyn2021.herokuapp.com/allmessages")
        // console.log("get message", resp)
        setAll(resp.data);
        var arr = resp.data.slice(0, 3)
        setMsgs(arr)
    }

    const ChangePage = (num) => {//the number that is passed over from the input will be here 
        setMsgs(
            allmsgs.slice(item_per_page * (num - 1), item_per_page * num)
        )
    }

    const FilterPage = (text) => {
        setMsgs(
            allmsgs.filter((o) => {
                return o.username.includes(text)
            })
        )
    }

    const FilterCheck = (checked) => {
        if (checked) {
            setMsgs(
                allmsgs.filter((o) => {
                    return o.username.length < 5;
                })
            )
        } else {
            setMsgs(
                allmsgs
            )
        }
    }
    const SortMsgs = () => {
        setMsgs(
            // allmsgs.sort(sortByUsername)
            allmsgs.sort((a, b) => {
                if (a.username > b.username) {
                    return 1
                } else if (a.username < b.username) {
                    return -1
                } else {
                    return 0
                }
            })
        )
    }
    const SortMsgsDate = () => {
        setMsgs(
            allmsgs.sort(sortByDate)
        )
    }

    useEffect(() => {
        GetMessages()
    }, [])

    return <div>
        Array Page
        {msgs.map(o => {
        var date = new Date(o.created);
        return <div>
            <div>{o.username}</div>
            <div>{date.getMonth() + 1} / {date.getDate()} - {date.getHours()} : {date.getMinutes()}</div>
        </div>
    })
        }



        <input type="number" defaultValue={1} onChange={(e) => {
            ChangePage(e.target.value)//pass the input value over to the num in the ChangePage function
        }} />
        <div>Filter</div>
        <input type="text" onChange={(e) => {
            FilterPage(e.target.value)
        }} />
        <input type="checkbox" onChange={(e) => {
            FilterCheck(e.target.checked)
        }} />
        <button onClick={SortMsgs}>Sort by Username</button>
        <button onClick={SortMsgsDate}>Sort by Date</button>
        <Pagin numpages={Math.ceil(allmsgs.length / 3)} 
        onClickPage={ChangePage}
        />{/* Math.ceil is used to round up page numbers */}
    </div>
}

export default ArrayPage;

/*
function sortByUsername(a, b) {
    if (a.username > b.username) {
        return 1
    } else if (a.username < b.username) {
        return -1
    } else {
        return 0
    }
}
*/

function sortByDate(a, b) {
    //parse the dates, and transfer them into seconds - the real dates for properly comparison
    var adate = new Date(a.created);
    var bdate = new Date(b.created);
    // console.log(adate)
    if (adate > bdate) {
        return 1
    } else if (adate < bdate) {
        return -1
    } else {
        return 0
    }
}

/*
PAGINATE
arr = arr.slice(0,3); //get the first 3 items on the page

page 1 - item 1, 2, 3 - slice(0,3) - input 1
page 2 - item 4, 5, 6 - slice(3,6) - input 2
page 3 - item 7, 8, 9 - slice(6,9) - input 3

3 items per page
slice(item_per_page*0,item_per_page*1) - page 1 - input 1
slice(item_per_page*1, item_per_page*2) - page 2 - input 2
slice(item_per_page*2, item_per_page*3) - page 2 - input 3

# of pages should be amount of items in the array divided by the number of items per page
e.g. 10 items in the array, 2 items per page = 5 page
*/

/*
FILTERS
check for true/false statement
if the username includes the letter -> return true

checked, filter for all username that is below 5 characters
*/

/*
SORTS

a.username > b.username 1
a.username < b.username -1
== 0
*/