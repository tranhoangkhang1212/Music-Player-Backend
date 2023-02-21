export interface ClientRequest {
    id: string,
    handshake: HeaderShake,
}

export interface HeaderShake {
    headers: Header
}

export interface Header {
    host: string,
    connection:  boolean,
    token: string
    time: string,
    origin: string,
    referer: string
    'user-agent': string,
    'sec-ch-ua-platform': string
}