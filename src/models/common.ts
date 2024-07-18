
// Token
interface TokenBaseItem {
    accessToken: string,
}

interface TokenResponse extends TokenBaseItem {
    // 追加プロパティ
}

interface LoginWithCodeRequest {
    code: string,
}

export type {
    TokenBaseItem,
    TokenResponse,
    LoginWithCodeRequest
}
