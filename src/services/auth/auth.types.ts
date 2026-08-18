export type RegisterUserPayload = {
    name: string;
    email: string;
    password: string;
};

export type RegisterDefaultUserPayload = RegisterUserPayload;

export type LoginUserPayload = {
    email: string;
    password: string;
};

export type LoginDefaultUserPayload = LoginUserPayload;

export type AuthTokens = {
    access_token: string;
    refresh_token: string;
    emailVerified: boolean;
};

export type RegisterUserErrorCode = "exists" | "failed" | "network";

export type RegisterUserResult =
    | {
          ok: true;
          tokens: AuthTokens;
      }
    | {
          ok: false;
          code: RegisterUserErrorCode;
          status?: number;
          message?: string;
      };

export type RegisterDefaultUserResult = RegisterUserResult;

export type LoginUserErrorCode =
    | "credentials"
    | "banned"
    | "failed"
    | "network";

export type LoginUserResult =
    | {
          ok: true;
          tokens: AuthTokens;
      }
    | {
          ok: false;
          code: LoginUserErrorCode;
          status?: number;
          message?: string;
      };

export type LoginDefaultUserResult = LoginUserResult;

export type RefreshAuthTokensErrorCode = "missing" | "failed" | "network";

export type RefreshAuthTokensResult =
    | {
          ok: true;
          tokens: AuthTokens;
      }
    | {
          ok: false;
          code: RefreshAuthTokensErrorCode;
          status?: number;
          message?: string;
      };

export type VerifyEmailPayload = {
    token: string;
};

export type RequestPasswordResetPayload = {
    email: string;
};

export type RequestPasswordResetErrorCode = "email" | "failed";

export type RequestPasswordResetResult =
    | {
          ok: true;
      }
    | {
          ok: false;
          code: RequestPasswordResetErrorCode;
          status?: number;
          message?: string;
      };

export type ConfirmPasswordResetPayload = {
    token: string;
    password: string;
};

export type ConfirmPasswordResetErrorCode = "token" | "failed";

export type ConfirmPasswordResetResult =
    | {
          ok: true;
      }
    | {
          ok: false;
          code: ConfirmPasswordResetErrorCode;
          status?: number;
          message?: string;
      };

export type VerifyEmailErrorCode = "token" | "failed" | "network";

export type VerifyEmailResult =
    | {
          ok: true;
      }
    | {
          ok: false;
          code: VerifyEmailErrorCode;
          status?: number;
          message?: string;
      };

export type ResendEmailVerificationErrorCode =
    | "unauthorized"
    | "failed"
    | "network";

export type ResendEmailVerificationResult =
    | {
          ok: true;
          alreadyVerified?: boolean;
      }
    | {
          ok: false;
          code: ResendEmailVerificationErrorCode;
          status?: number;
          message?: string;
      };
