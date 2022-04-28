interface RiotRequest{
    riotKey: string,
    url: string,
    params?: string[]
}

interface DragonRequest{
    url: string,
    language: string,
    [key: string]: string
}

export { RiotRequest, DragonRequest };