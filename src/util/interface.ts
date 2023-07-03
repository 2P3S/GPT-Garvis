// request

interface RoomRequest {
    roomName : string
}

interface MemberRequest {
    memberName : string
}

// response

interface Room {
    name : string,
    members : Array<Member>,
    created_at : Date,
    updated_at : Date,
    id : string
}

interface Member {
    name : string,
    status : Boolean,
    room : string,
    socketId : string,
    created_at : Date,
    updated_at : Date,
    id : string
}

export type {
    RoomRequest,
    MemberRequest,
    Room,
    Member,
}