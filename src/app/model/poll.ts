export interface Poll {
    poll_id: string,
    question: string,
    options: Options[],
    creator_email: string,
    recipient_email:string,
    selectMultiple: boolean,

}


export interface Options {
    option_id: string,
    content: string,
    poll_id: string,
}