function superbowlWin(records){
    for (const record of records) {
        if (record.result === "W") {
            return record.year;
        }
    }
}
