export interface IApiError {
  message: string;
}

export interface IApiServiceResponse<T> {
  data?: T;
  error?: IApiError;
}

