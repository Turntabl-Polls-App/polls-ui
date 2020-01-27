export interface Poll {
    creator_id: string,
    poll_id: string,
    question: string,
    options: Options[],
    selectMultiple: boolean,

}


export interface Options {
    option_id: string,
    content: string,
    poll_id: string,
}