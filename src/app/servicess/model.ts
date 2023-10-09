export interface iuser{
    username: string;
    status: ustatus;
    id: number;
    canReturn: number;
}

export type ustatus="inprogress"|"dicepatch"|"deliver"

export interface iproduct{
    pname: string;
    status: pstatus;
    id: number;
    canReturn: number;
}
export type pstatus="inprogress"|"dicepatch"|"deliver"
