export interface Poll {
    pollid: string,
    name: string,
    pollItems: PollItem[],
    selectMultiple: boolean,

}

export interface PollItem {
    pollItemid: string,
    name: string,
}