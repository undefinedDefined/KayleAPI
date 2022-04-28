enum MatchTypes{
    ranked = 'ranked',
    normal = 'normal',
    tourney = 'tourney',
    tutorial = 'tutorial'
}


export interface MatchsParams{
    startTime?: number
    endTime?: number
    queue?: number
    type?: MatchTypes
    start?: number
    count?: number
}