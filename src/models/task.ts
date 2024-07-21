interface TaskBaseItem {
    id: string,
    name: string,
    iconEmoji?: string,
    bgColor?: string,
    reward: number
    isPaid: boolean
}

interface TaskResponse extends TaskBaseItem {
    // 追加プロパティ
    attachedChlidren: String[]
}

interface TaskListResponse {
    list: TaskBaseItem[]
}

export type {
    TaskBaseItem,
    TaskResponse,
    TaskListResponse
}
