export type Maybe<T> = T | null | undefined;

export type ActionWithoutPayload<T> = {
    type: T;
};

export type ActionWithPayload<T, P> = {
    type: T;
    payload: P;
};
