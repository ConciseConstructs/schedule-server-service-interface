export interface IScheduleUpdateRequest {
  item: {
    saas:string
    id:string
    createdAt:number
    modifiedAt:number
    dueAt:number
    status:string
    details:any
  }
}