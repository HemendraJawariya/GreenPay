
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model TrashDeposit
 * 
 */
export type TrashDeposit = $Result.DefaultSelection<Prisma.$TrashDepositPayload>
/**
 * Model TrashDepositItem
 * 
 */
export type TrashDepositItem = $Result.DefaultSelection<Prisma.$TrashDepositItemPayload>
/**
 * Model BalanceTransaction
 * 
 */
export type BalanceTransaction = $Result.DefaultSelection<Prisma.$BalanceTransactionPayload>
/**
 * Model WithdrawRequest
 * 
 */
export type WithdrawRequest = $Result.DefaultSelection<Prisma.$WithdrawRequestPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const BalanceRefType: {
  REWARD: 'REWARD',
  WITHDRAW: 'WITHDRAW',
  VOUCHER: 'VOUCHER',
  MANUAL: 'MANUAL'
};

export type BalanceRefType = (typeof BalanceRefType)[keyof typeof BalanceRefType]


export const WithdrawStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type WithdrawStatus = (typeof WithdrawStatus)[keyof typeof WithdrawStatus]


export const Role: {
  USER: 'USER',
  PETUGAS: 'PETUGAS',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const TrashType: {
  PLASTIC: 'PLASTIC',
  PAPER: 'PAPER',
  METAL: 'METAL',
  ORGANIC: 'ORGANIC',
  OTHER: 'OTHER'
};

export type TrashType = (typeof TrashType)[keyof typeof TrashType]


export const Status: {
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type BalanceRefType = $Enums.BalanceRefType

export const BalanceRefType: typeof $Enums.BalanceRefType

export type WithdrawStatus = $Enums.WithdrawStatus

export const WithdrawStatus: typeof $Enums.WithdrawStatus

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type TrashType = $Enums.TrashType

export const TrashType: typeof $Enums.TrashType

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trashDeposit`: Exposes CRUD operations for the **TrashDeposit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrashDeposits
    * const trashDeposits = await prisma.trashDeposit.findMany()
    * ```
    */
  get trashDeposit(): Prisma.TrashDepositDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trashDepositItem`: Exposes CRUD operations for the **TrashDepositItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrashDepositItems
    * const trashDepositItems = await prisma.trashDepositItem.findMany()
    * ```
    */
  get trashDepositItem(): Prisma.TrashDepositItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.balanceTransaction`: Exposes CRUD operations for the **BalanceTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BalanceTransactions
    * const balanceTransactions = await prisma.balanceTransaction.findMany()
    * ```
    */
  get balanceTransaction(): Prisma.BalanceTransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.withdrawRequest`: Exposes CRUD operations for the **WithdrawRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WithdrawRequests
    * const withdrawRequests = await prisma.withdrawRequest.findMany()
    * ```
    */
  get withdrawRequest(): Prisma.WithdrawRequestDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    TrashDeposit: 'TrashDeposit',
    TrashDepositItem: 'TrashDepositItem',
    BalanceTransaction: 'BalanceTransaction',
    WithdrawRequest: 'WithdrawRequest'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "trashDeposit" | "trashDepositItem" | "balanceTransaction" | "withdrawRequest"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      TrashDeposit: {
        payload: Prisma.$TrashDepositPayload<ExtArgs>
        fields: Prisma.TrashDepositFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrashDepositFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrashDepositPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrashDepositFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrashDepositPayload>
          }
          findFirst: {
            args: Prisma.TrashDepositFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrashDepositPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrashDepositFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrashDepositPayload>
          }
          findMany: {
            args: Prisma.TrashDepositFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrashDepositPayload>[]
          }
          create: {
            args: Prisma.TrashDepositCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrashDepositPayload>
          }
          createMany: {
            args: Prisma.TrashDepositCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrashDepositCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrashDepositPayload>[]
          }
          delete: {
            args: Prisma.TrashDepositDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrashDepositPayload>
          }
          update: {
            args: Prisma.TrashDepositUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrashDepositPayload>
          }
          deleteMany: {
            args: Prisma.TrashDepositDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrashDepositUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TrashDepositUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrashDepositPayload>[]
          }
          upsert: {
            args: Prisma.TrashDepositUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrashDepositPayload>
          }
          aggregate: {
            args: Prisma.TrashDepositAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrashDeposit>
          }
          groupBy: {
            args: Prisma.TrashDepositGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrashDepositGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrashDepositCountArgs<ExtArgs>
            result: $Utils.Optional<TrashDepositCountAggregateOutputType> | number
          }
        }
      }
      TrashDepositItem: {
        payload: Prisma.$TrashDepositItemPayload<ExtArgs>
        fields: Prisma.TrashDepositItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrashDepositItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrashDepositItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrashDepositItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrashDepositItemPayload>
          }
          findFirst: {
            args: Prisma.TrashDepositItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrashDepositItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrashDepositItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrashDepositItemPayload>
          }
          findMany: {
            args: Prisma.TrashDepositItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrashDepositItemPayload>[]
          }
          create: {
            args: Prisma.TrashDepositItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrashDepositItemPayload>
          }
          createMany: {
            args: Prisma.TrashDepositItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrashDepositItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrashDepositItemPayload>[]
          }
          delete: {
            args: Prisma.TrashDepositItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrashDepositItemPayload>
          }
          update: {
            args: Prisma.TrashDepositItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrashDepositItemPayload>
          }
          deleteMany: {
            args: Prisma.TrashDepositItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrashDepositItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TrashDepositItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrashDepositItemPayload>[]
          }
          upsert: {
            args: Prisma.TrashDepositItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrashDepositItemPayload>
          }
          aggregate: {
            args: Prisma.TrashDepositItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrashDepositItem>
          }
          groupBy: {
            args: Prisma.TrashDepositItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrashDepositItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrashDepositItemCountArgs<ExtArgs>
            result: $Utils.Optional<TrashDepositItemCountAggregateOutputType> | number
          }
        }
      }
      BalanceTransaction: {
        payload: Prisma.$BalanceTransactionPayload<ExtArgs>
        fields: Prisma.BalanceTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BalanceTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalanceTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BalanceTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalanceTransactionPayload>
          }
          findFirst: {
            args: Prisma.BalanceTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalanceTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BalanceTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalanceTransactionPayload>
          }
          findMany: {
            args: Prisma.BalanceTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalanceTransactionPayload>[]
          }
          create: {
            args: Prisma.BalanceTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalanceTransactionPayload>
          }
          createMany: {
            args: Prisma.BalanceTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BalanceTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalanceTransactionPayload>[]
          }
          delete: {
            args: Prisma.BalanceTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalanceTransactionPayload>
          }
          update: {
            args: Prisma.BalanceTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalanceTransactionPayload>
          }
          deleteMany: {
            args: Prisma.BalanceTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BalanceTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BalanceTransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalanceTransactionPayload>[]
          }
          upsert: {
            args: Prisma.BalanceTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalanceTransactionPayload>
          }
          aggregate: {
            args: Prisma.BalanceTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBalanceTransaction>
          }
          groupBy: {
            args: Prisma.BalanceTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<BalanceTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.BalanceTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<BalanceTransactionCountAggregateOutputType> | number
          }
        }
      }
      WithdrawRequest: {
        payload: Prisma.$WithdrawRequestPayload<ExtArgs>
        fields: Prisma.WithdrawRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WithdrawRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WithdrawRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawRequestPayload>
          }
          findFirst: {
            args: Prisma.WithdrawRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WithdrawRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawRequestPayload>
          }
          findMany: {
            args: Prisma.WithdrawRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawRequestPayload>[]
          }
          create: {
            args: Prisma.WithdrawRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawRequestPayload>
          }
          createMany: {
            args: Prisma.WithdrawRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WithdrawRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawRequestPayload>[]
          }
          delete: {
            args: Prisma.WithdrawRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawRequestPayload>
          }
          update: {
            args: Prisma.WithdrawRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawRequestPayload>
          }
          deleteMany: {
            args: Prisma.WithdrawRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WithdrawRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WithdrawRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawRequestPayload>[]
          }
          upsert: {
            args: Prisma.WithdrawRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawRequestPayload>
          }
          aggregate: {
            args: Prisma.WithdrawRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWithdrawRequest>
          }
          groupBy: {
            args: Prisma.WithdrawRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<WithdrawRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.WithdrawRequestCountArgs<ExtArgs>
            result: $Utils.Optional<WithdrawRequestCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    trashDeposit?: TrashDepositOmit
    trashDepositItem?: TrashDepositItemOmit
    balanceTransaction?: BalanceTransactionOmit
    withdrawRequest?: WithdrawRequestOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    balanceTxs: number
    handledSetor: number
    deposits: number
    withdraws: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    balanceTxs?: boolean | UserCountOutputTypeCountBalanceTxsArgs
    handledSetor?: boolean | UserCountOutputTypeCountHandledSetorArgs
    deposits?: boolean | UserCountOutputTypeCountDepositsArgs
    withdraws?: boolean | UserCountOutputTypeCountWithdrawsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBalanceTxsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BalanceTransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHandledSetorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrashDepositWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDepositsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrashDepositWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWithdrawsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WithdrawRequestWhereInput
  }


  /**
   * Count Type TrashDepositCountOutputType
   */

  export type TrashDepositCountOutputType = {
    items: number
  }

  export type TrashDepositCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | TrashDepositCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * TrashDepositCountOutputType without action
   */
  export type TrashDepositCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrashDepositCountOutputType
     */
    select?: TrashDepositCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TrashDepositCountOutputType without action
   */
  export type TrashDepositCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrashDepositItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    points: number | null
    balance: Decimal | null
    currentRank: number | null
    lastRank: number | null
  }

  export type UserSumAggregateOutputType = {
    points: number | null
    balance: Decimal | null
    currentRank: number | null
    lastRank: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    points: number | null
    balance: Decimal | null
    currentRank: number | null
    lastRank: number | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    points: number | null
    balance: Decimal | null
    currentRank: number | null
    lastRank: number | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    points: number
    balance: number
    currentRank: number
    lastRank: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    points?: true
    balance?: true
    currentRank?: true
    lastRank?: true
  }

  export type UserSumAggregateInputType = {
    points?: true
    balance?: true
    currentRank?: true
    lastRank?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    points?: true
    balance?: true
    currentRank?: true
    lastRank?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    points?: true
    balance?: true
    currentRank?: true
    lastRank?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    points?: true
    balance?: true
    currentRank?: true
    lastRank?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    points: number
    balance: Decimal
    currentRank: number | null
    lastRank: number | null
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    points?: boolean
    balance?: boolean
    currentRank?: boolean
    lastRank?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    balanceTxs?: boolean | User$balanceTxsArgs<ExtArgs>
    handledSetor?: boolean | User$handledSetorArgs<ExtArgs>
    deposits?: boolean | User$depositsArgs<ExtArgs>
    withdraws?: boolean | User$withdrawsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    points?: boolean
    balance?: boolean
    currentRank?: boolean
    lastRank?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    points?: boolean
    balance?: boolean
    currentRank?: boolean
    lastRank?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    points?: boolean
    balance?: boolean
    currentRank?: boolean
    lastRank?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "points" | "balance" | "currentRank" | "lastRank" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    balanceTxs?: boolean | User$balanceTxsArgs<ExtArgs>
    handledSetor?: boolean | User$handledSetorArgs<ExtArgs>
    deposits?: boolean | User$depositsArgs<ExtArgs>
    withdraws?: boolean | User$withdrawsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      balanceTxs: Prisma.$BalanceTransactionPayload<ExtArgs>[]
      handledSetor: Prisma.$TrashDepositPayload<ExtArgs>[]
      deposits: Prisma.$TrashDepositPayload<ExtArgs>[]
      withdraws: Prisma.$WithdrawRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      points: number
      balance: Prisma.Decimal
      currentRank: number | null
      lastRank: number | null
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    balanceTxs<T extends User$balanceTxsArgs<ExtArgs> = {}>(args?: Subset<T, User$balanceTxsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BalanceTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    handledSetor<T extends User$handledSetorArgs<ExtArgs> = {}>(args?: Subset<T, User$handledSetorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrashDepositPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    deposits<T extends User$depositsArgs<ExtArgs> = {}>(args?: Subset<T, User$depositsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrashDepositPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    withdraws<T extends User$withdrawsArgs<ExtArgs> = {}>(args?: Subset<T, User$withdrawsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WithdrawRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly points: FieldRef<"User", 'Int'>
    readonly balance: FieldRef<"User", 'Decimal'>
    readonly currentRank: FieldRef<"User", 'Int'>
    readonly lastRank: FieldRef<"User", 'Int'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.balanceTxs
   */
  export type User$balanceTxsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BalanceTransaction
     */
    select?: BalanceTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BalanceTransaction
     */
    omit?: BalanceTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceTransactionInclude<ExtArgs> | null
    where?: BalanceTransactionWhereInput
    orderBy?: BalanceTransactionOrderByWithRelationInput | BalanceTransactionOrderByWithRelationInput[]
    cursor?: BalanceTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BalanceTransactionScalarFieldEnum | BalanceTransactionScalarFieldEnum[]
  }

  /**
   * User.handledSetor
   */
  export type User$handledSetorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrashDeposit
     */
    select?: TrashDepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrashDeposit
     */
    omit?: TrashDepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrashDepositInclude<ExtArgs> | null
    where?: TrashDepositWhereInput
    orderBy?: TrashDepositOrderByWithRelationInput | TrashDepositOrderByWithRelationInput[]
    cursor?: TrashDepositWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrashDepositScalarFieldEnum | TrashDepositScalarFieldEnum[]
  }

  /**
   * User.deposits
   */
  export type User$depositsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrashDeposit
     */
    select?: TrashDepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrashDeposit
     */
    omit?: TrashDepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrashDepositInclude<ExtArgs> | null
    where?: TrashDepositWhereInput
    orderBy?: TrashDepositOrderByWithRelationInput | TrashDepositOrderByWithRelationInput[]
    cursor?: TrashDepositWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrashDepositScalarFieldEnum | TrashDepositScalarFieldEnum[]
  }

  /**
   * User.withdraws
   */
  export type User$withdrawsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawRequest
     */
    select?: WithdrawRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawRequest
     */
    omit?: WithdrawRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawRequestInclude<ExtArgs> | null
    where?: WithdrawRequestWhereInput
    orderBy?: WithdrawRequestOrderByWithRelationInput | WithdrawRequestOrderByWithRelationInput[]
    cursor?: WithdrawRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WithdrawRequestScalarFieldEnum | WithdrawRequestScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model TrashDeposit
   */

  export type AggregateTrashDeposit = {
    _count: TrashDepositCountAggregateOutputType | null
    _min: TrashDepositMinAggregateOutputType | null
    _max: TrashDepositMaxAggregateOutputType | null
  }

  export type TrashDepositMinAggregateOutputType = {
    id: string | null
    userId: string | null
    petugasId: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    signature: string | null
  }

  export type TrashDepositMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    petugasId: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    signature: string | null
  }

  export type TrashDepositCountAggregateOutputType = {
    id: number
    userId: number
    petugasId: number
    status: number
    createdAt: number
    signature: number
    _all: number
  }


  export type TrashDepositMinAggregateInputType = {
    id?: true
    userId?: true
    petugasId?: true
    status?: true
    createdAt?: true
    signature?: true
  }

  export type TrashDepositMaxAggregateInputType = {
    id?: true
    userId?: true
    petugasId?: true
    status?: true
    createdAt?: true
    signature?: true
  }

  export type TrashDepositCountAggregateInputType = {
    id?: true
    userId?: true
    petugasId?: true
    status?: true
    createdAt?: true
    signature?: true
    _all?: true
  }

  export type TrashDepositAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrashDeposit to aggregate.
     */
    where?: TrashDepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrashDeposits to fetch.
     */
    orderBy?: TrashDepositOrderByWithRelationInput | TrashDepositOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrashDepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrashDeposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrashDeposits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrashDeposits
    **/
    _count?: true | TrashDepositCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrashDepositMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrashDepositMaxAggregateInputType
  }

  export type GetTrashDepositAggregateType<T extends TrashDepositAggregateArgs> = {
        [P in keyof T & keyof AggregateTrashDeposit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrashDeposit[P]>
      : GetScalarType<T[P], AggregateTrashDeposit[P]>
  }




  export type TrashDepositGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrashDepositWhereInput
    orderBy?: TrashDepositOrderByWithAggregationInput | TrashDepositOrderByWithAggregationInput[]
    by: TrashDepositScalarFieldEnum[] | TrashDepositScalarFieldEnum
    having?: TrashDepositScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrashDepositCountAggregateInputType | true
    _min?: TrashDepositMinAggregateInputType
    _max?: TrashDepositMaxAggregateInputType
  }

  export type TrashDepositGroupByOutputType = {
    id: string
    userId: string
    petugasId: string | null
    status: $Enums.Status
    createdAt: Date
    signature: string
    _count: TrashDepositCountAggregateOutputType | null
    _min: TrashDepositMinAggregateOutputType | null
    _max: TrashDepositMaxAggregateOutputType | null
  }

  type GetTrashDepositGroupByPayload<T extends TrashDepositGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrashDepositGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrashDepositGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrashDepositGroupByOutputType[P]>
            : GetScalarType<T[P], TrashDepositGroupByOutputType[P]>
        }
      >
    >


  export type TrashDepositSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    petugasId?: boolean
    status?: boolean
    createdAt?: boolean
    signature?: boolean
    petugas?: boolean | TrashDeposit$petugasArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | TrashDeposit$itemsArgs<ExtArgs>
    _count?: boolean | TrashDepositCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trashDeposit"]>

  export type TrashDepositSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    petugasId?: boolean
    status?: boolean
    createdAt?: boolean
    signature?: boolean
    petugas?: boolean | TrashDeposit$petugasArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trashDeposit"]>

  export type TrashDepositSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    petugasId?: boolean
    status?: boolean
    createdAt?: boolean
    signature?: boolean
    petugas?: boolean | TrashDeposit$petugasArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trashDeposit"]>

  export type TrashDepositSelectScalar = {
    id?: boolean
    userId?: boolean
    petugasId?: boolean
    status?: boolean
    createdAt?: boolean
    signature?: boolean
  }

  export type TrashDepositOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "petugasId" | "status" | "createdAt" | "signature", ExtArgs["result"]["trashDeposit"]>
  export type TrashDepositInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    petugas?: boolean | TrashDeposit$petugasArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | TrashDeposit$itemsArgs<ExtArgs>
    _count?: boolean | TrashDepositCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TrashDepositIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    petugas?: boolean | TrashDeposit$petugasArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TrashDepositIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    petugas?: boolean | TrashDeposit$petugasArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TrashDepositPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrashDeposit"
    objects: {
      petugas: Prisma.$UserPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
      items: Prisma.$TrashDepositItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      petugasId: string | null
      status: $Enums.Status
      createdAt: Date
      signature: string
    }, ExtArgs["result"]["trashDeposit"]>
    composites: {}
  }

  type TrashDepositGetPayload<S extends boolean | null | undefined | TrashDepositDefaultArgs> = $Result.GetResult<Prisma.$TrashDepositPayload, S>

  type TrashDepositCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrashDepositFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrashDepositCountAggregateInputType | true
    }

  export interface TrashDepositDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrashDeposit'], meta: { name: 'TrashDeposit' } }
    /**
     * Find zero or one TrashDeposit that matches the filter.
     * @param {TrashDepositFindUniqueArgs} args - Arguments to find a TrashDeposit
     * @example
     * // Get one TrashDeposit
     * const trashDeposit = await prisma.trashDeposit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrashDepositFindUniqueArgs>(args: SelectSubset<T, TrashDepositFindUniqueArgs<ExtArgs>>): Prisma__TrashDepositClient<$Result.GetResult<Prisma.$TrashDepositPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TrashDeposit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrashDepositFindUniqueOrThrowArgs} args - Arguments to find a TrashDeposit
     * @example
     * // Get one TrashDeposit
     * const trashDeposit = await prisma.trashDeposit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrashDepositFindUniqueOrThrowArgs>(args: SelectSubset<T, TrashDepositFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrashDepositClient<$Result.GetResult<Prisma.$TrashDepositPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrashDeposit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrashDepositFindFirstArgs} args - Arguments to find a TrashDeposit
     * @example
     * // Get one TrashDeposit
     * const trashDeposit = await prisma.trashDeposit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrashDepositFindFirstArgs>(args?: SelectSubset<T, TrashDepositFindFirstArgs<ExtArgs>>): Prisma__TrashDepositClient<$Result.GetResult<Prisma.$TrashDepositPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrashDeposit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrashDepositFindFirstOrThrowArgs} args - Arguments to find a TrashDeposit
     * @example
     * // Get one TrashDeposit
     * const trashDeposit = await prisma.trashDeposit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrashDepositFindFirstOrThrowArgs>(args?: SelectSubset<T, TrashDepositFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrashDepositClient<$Result.GetResult<Prisma.$TrashDepositPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TrashDeposits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrashDepositFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrashDeposits
     * const trashDeposits = await prisma.trashDeposit.findMany()
     * 
     * // Get first 10 TrashDeposits
     * const trashDeposits = await prisma.trashDeposit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trashDepositWithIdOnly = await prisma.trashDeposit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrashDepositFindManyArgs>(args?: SelectSubset<T, TrashDepositFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrashDepositPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TrashDeposit.
     * @param {TrashDepositCreateArgs} args - Arguments to create a TrashDeposit.
     * @example
     * // Create one TrashDeposit
     * const TrashDeposit = await prisma.trashDeposit.create({
     *   data: {
     *     // ... data to create a TrashDeposit
     *   }
     * })
     * 
     */
    create<T extends TrashDepositCreateArgs>(args: SelectSubset<T, TrashDepositCreateArgs<ExtArgs>>): Prisma__TrashDepositClient<$Result.GetResult<Prisma.$TrashDepositPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TrashDeposits.
     * @param {TrashDepositCreateManyArgs} args - Arguments to create many TrashDeposits.
     * @example
     * // Create many TrashDeposits
     * const trashDeposit = await prisma.trashDeposit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrashDepositCreateManyArgs>(args?: SelectSubset<T, TrashDepositCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TrashDeposits and returns the data saved in the database.
     * @param {TrashDepositCreateManyAndReturnArgs} args - Arguments to create many TrashDeposits.
     * @example
     * // Create many TrashDeposits
     * const trashDeposit = await prisma.trashDeposit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TrashDeposits and only return the `id`
     * const trashDepositWithIdOnly = await prisma.trashDeposit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrashDepositCreateManyAndReturnArgs>(args?: SelectSubset<T, TrashDepositCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrashDepositPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TrashDeposit.
     * @param {TrashDepositDeleteArgs} args - Arguments to delete one TrashDeposit.
     * @example
     * // Delete one TrashDeposit
     * const TrashDeposit = await prisma.trashDeposit.delete({
     *   where: {
     *     // ... filter to delete one TrashDeposit
     *   }
     * })
     * 
     */
    delete<T extends TrashDepositDeleteArgs>(args: SelectSubset<T, TrashDepositDeleteArgs<ExtArgs>>): Prisma__TrashDepositClient<$Result.GetResult<Prisma.$TrashDepositPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TrashDeposit.
     * @param {TrashDepositUpdateArgs} args - Arguments to update one TrashDeposit.
     * @example
     * // Update one TrashDeposit
     * const trashDeposit = await prisma.trashDeposit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrashDepositUpdateArgs>(args: SelectSubset<T, TrashDepositUpdateArgs<ExtArgs>>): Prisma__TrashDepositClient<$Result.GetResult<Prisma.$TrashDepositPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TrashDeposits.
     * @param {TrashDepositDeleteManyArgs} args - Arguments to filter TrashDeposits to delete.
     * @example
     * // Delete a few TrashDeposits
     * const { count } = await prisma.trashDeposit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrashDepositDeleteManyArgs>(args?: SelectSubset<T, TrashDepositDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrashDeposits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrashDepositUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrashDeposits
     * const trashDeposit = await prisma.trashDeposit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrashDepositUpdateManyArgs>(args: SelectSubset<T, TrashDepositUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrashDeposits and returns the data updated in the database.
     * @param {TrashDepositUpdateManyAndReturnArgs} args - Arguments to update many TrashDeposits.
     * @example
     * // Update many TrashDeposits
     * const trashDeposit = await prisma.trashDeposit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TrashDeposits and only return the `id`
     * const trashDepositWithIdOnly = await prisma.trashDeposit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TrashDepositUpdateManyAndReturnArgs>(args: SelectSubset<T, TrashDepositUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrashDepositPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TrashDeposit.
     * @param {TrashDepositUpsertArgs} args - Arguments to update or create a TrashDeposit.
     * @example
     * // Update or create a TrashDeposit
     * const trashDeposit = await prisma.trashDeposit.upsert({
     *   create: {
     *     // ... data to create a TrashDeposit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrashDeposit we want to update
     *   }
     * })
     */
    upsert<T extends TrashDepositUpsertArgs>(args: SelectSubset<T, TrashDepositUpsertArgs<ExtArgs>>): Prisma__TrashDepositClient<$Result.GetResult<Prisma.$TrashDepositPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TrashDeposits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrashDepositCountArgs} args - Arguments to filter TrashDeposits to count.
     * @example
     * // Count the number of TrashDeposits
     * const count = await prisma.trashDeposit.count({
     *   where: {
     *     // ... the filter for the TrashDeposits we want to count
     *   }
     * })
    **/
    count<T extends TrashDepositCountArgs>(
      args?: Subset<T, TrashDepositCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrashDepositCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrashDeposit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrashDepositAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TrashDepositAggregateArgs>(args: Subset<T, TrashDepositAggregateArgs>): Prisma.PrismaPromise<GetTrashDepositAggregateType<T>>

    /**
     * Group by TrashDeposit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrashDepositGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TrashDepositGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrashDepositGroupByArgs['orderBy'] }
        : { orderBy?: TrashDepositGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TrashDepositGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrashDepositGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrashDeposit model
   */
  readonly fields: TrashDepositFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrashDeposit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrashDepositClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    petugas<T extends TrashDeposit$petugasArgs<ExtArgs> = {}>(args?: Subset<T, TrashDeposit$petugasArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends TrashDeposit$itemsArgs<ExtArgs> = {}>(args?: Subset<T, TrashDeposit$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrashDepositItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TrashDeposit model
   */
  interface TrashDepositFieldRefs {
    readonly id: FieldRef<"TrashDeposit", 'String'>
    readonly userId: FieldRef<"TrashDeposit", 'String'>
    readonly petugasId: FieldRef<"TrashDeposit", 'String'>
    readonly status: FieldRef<"TrashDeposit", 'Status'>
    readonly createdAt: FieldRef<"TrashDeposit", 'DateTime'>
    readonly signature: FieldRef<"TrashDeposit", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TrashDeposit findUnique
   */
  export type TrashDepositFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrashDeposit
     */
    select?: TrashDepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrashDeposit
     */
    omit?: TrashDepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrashDepositInclude<ExtArgs> | null
    /**
     * Filter, which TrashDeposit to fetch.
     */
    where: TrashDepositWhereUniqueInput
  }

  /**
   * TrashDeposit findUniqueOrThrow
   */
  export type TrashDepositFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrashDeposit
     */
    select?: TrashDepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrashDeposit
     */
    omit?: TrashDepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrashDepositInclude<ExtArgs> | null
    /**
     * Filter, which TrashDeposit to fetch.
     */
    where: TrashDepositWhereUniqueInput
  }

  /**
   * TrashDeposit findFirst
   */
  export type TrashDepositFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrashDeposit
     */
    select?: TrashDepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrashDeposit
     */
    omit?: TrashDepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrashDepositInclude<ExtArgs> | null
    /**
     * Filter, which TrashDeposit to fetch.
     */
    where?: TrashDepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrashDeposits to fetch.
     */
    orderBy?: TrashDepositOrderByWithRelationInput | TrashDepositOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrashDeposits.
     */
    cursor?: TrashDepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrashDeposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrashDeposits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrashDeposits.
     */
    distinct?: TrashDepositScalarFieldEnum | TrashDepositScalarFieldEnum[]
  }

  /**
   * TrashDeposit findFirstOrThrow
   */
  export type TrashDepositFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrashDeposit
     */
    select?: TrashDepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrashDeposit
     */
    omit?: TrashDepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrashDepositInclude<ExtArgs> | null
    /**
     * Filter, which TrashDeposit to fetch.
     */
    where?: TrashDepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrashDeposits to fetch.
     */
    orderBy?: TrashDepositOrderByWithRelationInput | TrashDepositOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrashDeposits.
     */
    cursor?: TrashDepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrashDeposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrashDeposits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrashDeposits.
     */
    distinct?: TrashDepositScalarFieldEnum | TrashDepositScalarFieldEnum[]
  }

  /**
   * TrashDeposit findMany
   */
  export type TrashDepositFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrashDeposit
     */
    select?: TrashDepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrashDeposit
     */
    omit?: TrashDepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrashDepositInclude<ExtArgs> | null
    /**
     * Filter, which TrashDeposits to fetch.
     */
    where?: TrashDepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrashDeposits to fetch.
     */
    orderBy?: TrashDepositOrderByWithRelationInput | TrashDepositOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrashDeposits.
     */
    cursor?: TrashDepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrashDeposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrashDeposits.
     */
    skip?: number
    distinct?: TrashDepositScalarFieldEnum | TrashDepositScalarFieldEnum[]
  }

  /**
   * TrashDeposit create
   */
  export type TrashDepositCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrashDeposit
     */
    select?: TrashDepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrashDeposit
     */
    omit?: TrashDepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrashDepositInclude<ExtArgs> | null
    /**
     * The data needed to create a TrashDeposit.
     */
    data: XOR<TrashDepositCreateInput, TrashDepositUncheckedCreateInput>
  }

  /**
   * TrashDeposit createMany
   */
  export type TrashDepositCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrashDeposits.
     */
    data: TrashDepositCreateManyInput | TrashDepositCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrashDeposit createManyAndReturn
   */
  export type TrashDepositCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrashDeposit
     */
    select?: TrashDepositSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrashDeposit
     */
    omit?: TrashDepositOmit<ExtArgs> | null
    /**
     * The data used to create many TrashDeposits.
     */
    data: TrashDepositCreateManyInput | TrashDepositCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrashDepositIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrashDeposit update
   */
  export type TrashDepositUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrashDeposit
     */
    select?: TrashDepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrashDeposit
     */
    omit?: TrashDepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrashDepositInclude<ExtArgs> | null
    /**
     * The data needed to update a TrashDeposit.
     */
    data: XOR<TrashDepositUpdateInput, TrashDepositUncheckedUpdateInput>
    /**
     * Choose, which TrashDeposit to update.
     */
    where: TrashDepositWhereUniqueInput
  }

  /**
   * TrashDeposit updateMany
   */
  export type TrashDepositUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrashDeposits.
     */
    data: XOR<TrashDepositUpdateManyMutationInput, TrashDepositUncheckedUpdateManyInput>
    /**
     * Filter which TrashDeposits to update
     */
    where?: TrashDepositWhereInput
    /**
     * Limit how many TrashDeposits to update.
     */
    limit?: number
  }

  /**
   * TrashDeposit updateManyAndReturn
   */
  export type TrashDepositUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrashDeposit
     */
    select?: TrashDepositSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrashDeposit
     */
    omit?: TrashDepositOmit<ExtArgs> | null
    /**
     * The data used to update TrashDeposits.
     */
    data: XOR<TrashDepositUpdateManyMutationInput, TrashDepositUncheckedUpdateManyInput>
    /**
     * Filter which TrashDeposits to update
     */
    where?: TrashDepositWhereInput
    /**
     * Limit how many TrashDeposits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrashDepositIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrashDeposit upsert
   */
  export type TrashDepositUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrashDeposit
     */
    select?: TrashDepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrashDeposit
     */
    omit?: TrashDepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrashDepositInclude<ExtArgs> | null
    /**
     * The filter to search for the TrashDeposit to update in case it exists.
     */
    where: TrashDepositWhereUniqueInput
    /**
     * In case the TrashDeposit found by the `where` argument doesn't exist, create a new TrashDeposit with this data.
     */
    create: XOR<TrashDepositCreateInput, TrashDepositUncheckedCreateInput>
    /**
     * In case the TrashDeposit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrashDepositUpdateInput, TrashDepositUncheckedUpdateInput>
  }

  /**
   * TrashDeposit delete
   */
  export type TrashDepositDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrashDeposit
     */
    select?: TrashDepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrashDeposit
     */
    omit?: TrashDepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrashDepositInclude<ExtArgs> | null
    /**
     * Filter which TrashDeposit to delete.
     */
    where: TrashDepositWhereUniqueInput
  }

  /**
   * TrashDeposit deleteMany
   */
  export type TrashDepositDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrashDeposits to delete
     */
    where?: TrashDepositWhereInput
    /**
     * Limit how many TrashDeposits to delete.
     */
    limit?: number
  }

  /**
   * TrashDeposit.petugas
   */
  export type TrashDeposit$petugasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * TrashDeposit.items
   */
  export type TrashDeposit$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrashDepositItem
     */
    select?: TrashDepositItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrashDepositItem
     */
    omit?: TrashDepositItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrashDepositItemInclude<ExtArgs> | null
    where?: TrashDepositItemWhereInput
    orderBy?: TrashDepositItemOrderByWithRelationInput | TrashDepositItemOrderByWithRelationInput[]
    cursor?: TrashDepositItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrashDepositItemScalarFieldEnum | TrashDepositItemScalarFieldEnum[]
  }

  /**
   * TrashDeposit without action
   */
  export type TrashDepositDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrashDeposit
     */
    select?: TrashDepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrashDeposit
     */
    omit?: TrashDepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrashDepositInclude<ExtArgs> | null
  }


  /**
   * Model TrashDepositItem
   */

  export type AggregateTrashDepositItem = {
    _count: TrashDepositItemCountAggregateOutputType | null
    _avg: TrashDepositItemAvgAggregateOutputType | null
    _sum: TrashDepositItemSumAggregateOutputType | null
    _min: TrashDepositItemMinAggregateOutputType | null
    _max: TrashDepositItemMaxAggregateOutputType | null
  }

  export type TrashDepositItemAvgAggregateOutputType = {
    weight: number | null
    points: number | null
  }

  export type TrashDepositItemSumAggregateOutputType = {
    weight: number | null
    points: number | null
  }

  export type TrashDepositItemMinAggregateOutputType = {
    id: string | null
    trashDepositId: string | null
    trashType: $Enums.TrashType | null
    weight: number | null
    points: number | null
  }

  export type TrashDepositItemMaxAggregateOutputType = {
    id: string | null
    trashDepositId: string | null
    trashType: $Enums.TrashType | null
    weight: number | null
    points: number | null
  }

  export type TrashDepositItemCountAggregateOutputType = {
    id: number
    trashDepositId: number
    trashType: number
    weight: number
    points: number
    _all: number
  }


  export type TrashDepositItemAvgAggregateInputType = {
    weight?: true
    points?: true
  }

  export type TrashDepositItemSumAggregateInputType = {
    weight?: true
    points?: true
  }

  export type TrashDepositItemMinAggregateInputType = {
    id?: true
    trashDepositId?: true
    trashType?: true
    weight?: true
    points?: true
  }

  export type TrashDepositItemMaxAggregateInputType = {
    id?: true
    trashDepositId?: true
    trashType?: true
    weight?: true
    points?: true
  }

  export type TrashDepositItemCountAggregateInputType = {
    id?: true
    trashDepositId?: true
    trashType?: true
    weight?: true
    points?: true
    _all?: true
  }

  export type TrashDepositItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrashDepositItem to aggregate.
     */
    where?: TrashDepositItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrashDepositItems to fetch.
     */
    orderBy?: TrashDepositItemOrderByWithRelationInput | TrashDepositItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrashDepositItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrashDepositItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrashDepositItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrashDepositItems
    **/
    _count?: true | TrashDepositItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrashDepositItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrashDepositItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrashDepositItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrashDepositItemMaxAggregateInputType
  }

  export type GetTrashDepositItemAggregateType<T extends TrashDepositItemAggregateArgs> = {
        [P in keyof T & keyof AggregateTrashDepositItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrashDepositItem[P]>
      : GetScalarType<T[P], AggregateTrashDepositItem[P]>
  }




  export type TrashDepositItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrashDepositItemWhereInput
    orderBy?: TrashDepositItemOrderByWithAggregationInput | TrashDepositItemOrderByWithAggregationInput[]
    by: TrashDepositItemScalarFieldEnum[] | TrashDepositItemScalarFieldEnum
    having?: TrashDepositItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrashDepositItemCountAggregateInputType | true
    _avg?: TrashDepositItemAvgAggregateInputType
    _sum?: TrashDepositItemSumAggregateInputType
    _min?: TrashDepositItemMinAggregateInputType
    _max?: TrashDepositItemMaxAggregateInputType
  }

  export type TrashDepositItemGroupByOutputType = {
    id: string
    trashDepositId: string
    trashType: $Enums.TrashType
    weight: number
    points: number
    _count: TrashDepositItemCountAggregateOutputType | null
    _avg: TrashDepositItemAvgAggregateOutputType | null
    _sum: TrashDepositItemSumAggregateOutputType | null
    _min: TrashDepositItemMinAggregateOutputType | null
    _max: TrashDepositItemMaxAggregateOutputType | null
  }

  type GetTrashDepositItemGroupByPayload<T extends TrashDepositItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrashDepositItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrashDepositItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrashDepositItemGroupByOutputType[P]>
            : GetScalarType<T[P], TrashDepositItemGroupByOutputType[P]>
        }
      >
    >


  export type TrashDepositItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trashDepositId?: boolean
    trashType?: boolean
    weight?: boolean
    points?: boolean
    trashDeposit?: boolean | TrashDepositDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trashDepositItem"]>

  export type TrashDepositItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trashDepositId?: boolean
    trashType?: boolean
    weight?: boolean
    points?: boolean
    trashDeposit?: boolean | TrashDepositDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trashDepositItem"]>

  export type TrashDepositItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trashDepositId?: boolean
    trashType?: boolean
    weight?: boolean
    points?: boolean
    trashDeposit?: boolean | TrashDepositDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trashDepositItem"]>

  export type TrashDepositItemSelectScalar = {
    id?: boolean
    trashDepositId?: boolean
    trashType?: boolean
    weight?: boolean
    points?: boolean
  }

  export type TrashDepositItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "trashDepositId" | "trashType" | "weight" | "points", ExtArgs["result"]["trashDepositItem"]>
  export type TrashDepositItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trashDeposit?: boolean | TrashDepositDefaultArgs<ExtArgs>
  }
  export type TrashDepositItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trashDeposit?: boolean | TrashDepositDefaultArgs<ExtArgs>
  }
  export type TrashDepositItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trashDeposit?: boolean | TrashDepositDefaultArgs<ExtArgs>
  }

  export type $TrashDepositItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrashDepositItem"
    objects: {
      trashDeposit: Prisma.$TrashDepositPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      trashDepositId: string
      trashType: $Enums.TrashType
      weight: number
      points: number
    }, ExtArgs["result"]["trashDepositItem"]>
    composites: {}
  }

  type TrashDepositItemGetPayload<S extends boolean | null | undefined | TrashDepositItemDefaultArgs> = $Result.GetResult<Prisma.$TrashDepositItemPayload, S>

  type TrashDepositItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrashDepositItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrashDepositItemCountAggregateInputType | true
    }

  export interface TrashDepositItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrashDepositItem'], meta: { name: 'TrashDepositItem' } }
    /**
     * Find zero or one TrashDepositItem that matches the filter.
     * @param {TrashDepositItemFindUniqueArgs} args - Arguments to find a TrashDepositItem
     * @example
     * // Get one TrashDepositItem
     * const trashDepositItem = await prisma.trashDepositItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrashDepositItemFindUniqueArgs>(args: SelectSubset<T, TrashDepositItemFindUniqueArgs<ExtArgs>>): Prisma__TrashDepositItemClient<$Result.GetResult<Prisma.$TrashDepositItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TrashDepositItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrashDepositItemFindUniqueOrThrowArgs} args - Arguments to find a TrashDepositItem
     * @example
     * // Get one TrashDepositItem
     * const trashDepositItem = await prisma.trashDepositItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrashDepositItemFindUniqueOrThrowArgs>(args: SelectSubset<T, TrashDepositItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrashDepositItemClient<$Result.GetResult<Prisma.$TrashDepositItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrashDepositItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrashDepositItemFindFirstArgs} args - Arguments to find a TrashDepositItem
     * @example
     * // Get one TrashDepositItem
     * const trashDepositItem = await prisma.trashDepositItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrashDepositItemFindFirstArgs>(args?: SelectSubset<T, TrashDepositItemFindFirstArgs<ExtArgs>>): Prisma__TrashDepositItemClient<$Result.GetResult<Prisma.$TrashDepositItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrashDepositItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrashDepositItemFindFirstOrThrowArgs} args - Arguments to find a TrashDepositItem
     * @example
     * // Get one TrashDepositItem
     * const trashDepositItem = await prisma.trashDepositItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrashDepositItemFindFirstOrThrowArgs>(args?: SelectSubset<T, TrashDepositItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrashDepositItemClient<$Result.GetResult<Prisma.$TrashDepositItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TrashDepositItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrashDepositItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrashDepositItems
     * const trashDepositItems = await prisma.trashDepositItem.findMany()
     * 
     * // Get first 10 TrashDepositItems
     * const trashDepositItems = await prisma.trashDepositItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trashDepositItemWithIdOnly = await prisma.trashDepositItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrashDepositItemFindManyArgs>(args?: SelectSubset<T, TrashDepositItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrashDepositItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TrashDepositItem.
     * @param {TrashDepositItemCreateArgs} args - Arguments to create a TrashDepositItem.
     * @example
     * // Create one TrashDepositItem
     * const TrashDepositItem = await prisma.trashDepositItem.create({
     *   data: {
     *     // ... data to create a TrashDepositItem
     *   }
     * })
     * 
     */
    create<T extends TrashDepositItemCreateArgs>(args: SelectSubset<T, TrashDepositItemCreateArgs<ExtArgs>>): Prisma__TrashDepositItemClient<$Result.GetResult<Prisma.$TrashDepositItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TrashDepositItems.
     * @param {TrashDepositItemCreateManyArgs} args - Arguments to create many TrashDepositItems.
     * @example
     * // Create many TrashDepositItems
     * const trashDepositItem = await prisma.trashDepositItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrashDepositItemCreateManyArgs>(args?: SelectSubset<T, TrashDepositItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TrashDepositItems and returns the data saved in the database.
     * @param {TrashDepositItemCreateManyAndReturnArgs} args - Arguments to create many TrashDepositItems.
     * @example
     * // Create many TrashDepositItems
     * const trashDepositItem = await prisma.trashDepositItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TrashDepositItems and only return the `id`
     * const trashDepositItemWithIdOnly = await prisma.trashDepositItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrashDepositItemCreateManyAndReturnArgs>(args?: SelectSubset<T, TrashDepositItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrashDepositItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TrashDepositItem.
     * @param {TrashDepositItemDeleteArgs} args - Arguments to delete one TrashDepositItem.
     * @example
     * // Delete one TrashDepositItem
     * const TrashDepositItem = await prisma.trashDepositItem.delete({
     *   where: {
     *     // ... filter to delete one TrashDepositItem
     *   }
     * })
     * 
     */
    delete<T extends TrashDepositItemDeleteArgs>(args: SelectSubset<T, TrashDepositItemDeleteArgs<ExtArgs>>): Prisma__TrashDepositItemClient<$Result.GetResult<Prisma.$TrashDepositItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TrashDepositItem.
     * @param {TrashDepositItemUpdateArgs} args - Arguments to update one TrashDepositItem.
     * @example
     * // Update one TrashDepositItem
     * const trashDepositItem = await prisma.trashDepositItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrashDepositItemUpdateArgs>(args: SelectSubset<T, TrashDepositItemUpdateArgs<ExtArgs>>): Prisma__TrashDepositItemClient<$Result.GetResult<Prisma.$TrashDepositItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TrashDepositItems.
     * @param {TrashDepositItemDeleteManyArgs} args - Arguments to filter TrashDepositItems to delete.
     * @example
     * // Delete a few TrashDepositItems
     * const { count } = await prisma.trashDepositItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrashDepositItemDeleteManyArgs>(args?: SelectSubset<T, TrashDepositItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrashDepositItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrashDepositItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrashDepositItems
     * const trashDepositItem = await prisma.trashDepositItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrashDepositItemUpdateManyArgs>(args: SelectSubset<T, TrashDepositItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrashDepositItems and returns the data updated in the database.
     * @param {TrashDepositItemUpdateManyAndReturnArgs} args - Arguments to update many TrashDepositItems.
     * @example
     * // Update many TrashDepositItems
     * const trashDepositItem = await prisma.trashDepositItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TrashDepositItems and only return the `id`
     * const trashDepositItemWithIdOnly = await prisma.trashDepositItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TrashDepositItemUpdateManyAndReturnArgs>(args: SelectSubset<T, TrashDepositItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrashDepositItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TrashDepositItem.
     * @param {TrashDepositItemUpsertArgs} args - Arguments to update or create a TrashDepositItem.
     * @example
     * // Update or create a TrashDepositItem
     * const trashDepositItem = await prisma.trashDepositItem.upsert({
     *   create: {
     *     // ... data to create a TrashDepositItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrashDepositItem we want to update
     *   }
     * })
     */
    upsert<T extends TrashDepositItemUpsertArgs>(args: SelectSubset<T, TrashDepositItemUpsertArgs<ExtArgs>>): Prisma__TrashDepositItemClient<$Result.GetResult<Prisma.$TrashDepositItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TrashDepositItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrashDepositItemCountArgs} args - Arguments to filter TrashDepositItems to count.
     * @example
     * // Count the number of TrashDepositItems
     * const count = await prisma.trashDepositItem.count({
     *   where: {
     *     // ... the filter for the TrashDepositItems we want to count
     *   }
     * })
    **/
    count<T extends TrashDepositItemCountArgs>(
      args?: Subset<T, TrashDepositItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrashDepositItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrashDepositItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrashDepositItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TrashDepositItemAggregateArgs>(args: Subset<T, TrashDepositItemAggregateArgs>): Prisma.PrismaPromise<GetTrashDepositItemAggregateType<T>>

    /**
     * Group by TrashDepositItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrashDepositItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TrashDepositItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrashDepositItemGroupByArgs['orderBy'] }
        : { orderBy?: TrashDepositItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TrashDepositItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrashDepositItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrashDepositItem model
   */
  readonly fields: TrashDepositItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrashDepositItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrashDepositItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trashDeposit<T extends TrashDepositDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TrashDepositDefaultArgs<ExtArgs>>): Prisma__TrashDepositClient<$Result.GetResult<Prisma.$TrashDepositPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TrashDepositItem model
   */
  interface TrashDepositItemFieldRefs {
    readonly id: FieldRef<"TrashDepositItem", 'String'>
    readonly trashDepositId: FieldRef<"TrashDepositItem", 'String'>
    readonly trashType: FieldRef<"TrashDepositItem", 'TrashType'>
    readonly weight: FieldRef<"TrashDepositItem", 'Float'>
    readonly points: FieldRef<"TrashDepositItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TrashDepositItem findUnique
   */
  export type TrashDepositItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrashDepositItem
     */
    select?: TrashDepositItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrashDepositItem
     */
    omit?: TrashDepositItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrashDepositItemInclude<ExtArgs> | null
    /**
     * Filter, which TrashDepositItem to fetch.
     */
    where: TrashDepositItemWhereUniqueInput
  }

  /**
   * TrashDepositItem findUniqueOrThrow
   */
  export type TrashDepositItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrashDepositItem
     */
    select?: TrashDepositItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrashDepositItem
     */
    omit?: TrashDepositItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrashDepositItemInclude<ExtArgs> | null
    /**
     * Filter, which TrashDepositItem to fetch.
     */
    where: TrashDepositItemWhereUniqueInput
  }

  /**
   * TrashDepositItem findFirst
   */
  export type TrashDepositItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrashDepositItem
     */
    select?: TrashDepositItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrashDepositItem
     */
    omit?: TrashDepositItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrashDepositItemInclude<ExtArgs> | null
    /**
     * Filter, which TrashDepositItem to fetch.
     */
    where?: TrashDepositItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrashDepositItems to fetch.
     */
    orderBy?: TrashDepositItemOrderByWithRelationInput | TrashDepositItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrashDepositItems.
     */
    cursor?: TrashDepositItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrashDepositItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrashDepositItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrashDepositItems.
     */
    distinct?: TrashDepositItemScalarFieldEnum | TrashDepositItemScalarFieldEnum[]
  }

  /**
   * TrashDepositItem findFirstOrThrow
   */
  export type TrashDepositItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrashDepositItem
     */
    select?: TrashDepositItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrashDepositItem
     */
    omit?: TrashDepositItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrashDepositItemInclude<ExtArgs> | null
    /**
     * Filter, which TrashDepositItem to fetch.
     */
    where?: TrashDepositItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrashDepositItems to fetch.
     */
    orderBy?: TrashDepositItemOrderByWithRelationInput | TrashDepositItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrashDepositItems.
     */
    cursor?: TrashDepositItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrashDepositItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrashDepositItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrashDepositItems.
     */
    distinct?: TrashDepositItemScalarFieldEnum | TrashDepositItemScalarFieldEnum[]
  }

  /**
   * TrashDepositItem findMany
   */
  export type TrashDepositItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrashDepositItem
     */
    select?: TrashDepositItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrashDepositItem
     */
    omit?: TrashDepositItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrashDepositItemInclude<ExtArgs> | null
    /**
     * Filter, which TrashDepositItems to fetch.
     */
    where?: TrashDepositItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrashDepositItems to fetch.
     */
    orderBy?: TrashDepositItemOrderByWithRelationInput | TrashDepositItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrashDepositItems.
     */
    cursor?: TrashDepositItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrashDepositItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrashDepositItems.
     */
    skip?: number
    distinct?: TrashDepositItemScalarFieldEnum | TrashDepositItemScalarFieldEnum[]
  }

  /**
   * TrashDepositItem create
   */
  export type TrashDepositItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrashDepositItem
     */
    select?: TrashDepositItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrashDepositItem
     */
    omit?: TrashDepositItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrashDepositItemInclude<ExtArgs> | null
    /**
     * The data needed to create a TrashDepositItem.
     */
    data: XOR<TrashDepositItemCreateInput, TrashDepositItemUncheckedCreateInput>
  }

  /**
   * TrashDepositItem createMany
   */
  export type TrashDepositItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrashDepositItems.
     */
    data: TrashDepositItemCreateManyInput | TrashDepositItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrashDepositItem createManyAndReturn
   */
  export type TrashDepositItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrashDepositItem
     */
    select?: TrashDepositItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrashDepositItem
     */
    omit?: TrashDepositItemOmit<ExtArgs> | null
    /**
     * The data used to create many TrashDepositItems.
     */
    data: TrashDepositItemCreateManyInput | TrashDepositItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrashDepositItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrashDepositItem update
   */
  export type TrashDepositItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrashDepositItem
     */
    select?: TrashDepositItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrashDepositItem
     */
    omit?: TrashDepositItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrashDepositItemInclude<ExtArgs> | null
    /**
     * The data needed to update a TrashDepositItem.
     */
    data: XOR<TrashDepositItemUpdateInput, TrashDepositItemUncheckedUpdateInput>
    /**
     * Choose, which TrashDepositItem to update.
     */
    where: TrashDepositItemWhereUniqueInput
  }

  /**
   * TrashDepositItem updateMany
   */
  export type TrashDepositItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrashDepositItems.
     */
    data: XOR<TrashDepositItemUpdateManyMutationInput, TrashDepositItemUncheckedUpdateManyInput>
    /**
     * Filter which TrashDepositItems to update
     */
    where?: TrashDepositItemWhereInput
    /**
     * Limit how many TrashDepositItems to update.
     */
    limit?: number
  }

  /**
   * TrashDepositItem updateManyAndReturn
   */
  export type TrashDepositItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrashDepositItem
     */
    select?: TrashDepositItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrashDepositItem
     */
    omit?: TrashDepositItemOmit<ExtArgs> | null
    /**
     * The data used to update TrashDepositItems.
     */
    data: XOR<TrashDepositItemUpdateManyMutationInput, TrashDepositItemUncheckedUpdateManyInput>
    /**
     * Filter which TrashDepositItems to update
     */
    where?: TrashDepositItemWhereInput
    /**
     * Limit how many TrashDepositItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrashDepositItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrashDepositItem upsert
   */
  export type TrashDepositItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrashDepositItem
     */
    select?: TrashDepositItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrashDepositItem
     */
    omit?: TrashDepositItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrashDepositItemInclude<ExtArgs> | null
    /**
     * The filter to search for the TrashDepositItem to update in case it exists.
     */
    where: TrashDepositItemWhereUniqueInput
    /**
     * In case the TrashDepositItem found by the `where` argument doesn't exist, create a new TrashDepositItem with this data.
     */
    create: XOR<TrashDepositItemCreateInput, TrashDepositItemUncheckedCreateInput>
    /**
     * In case the TrashDepositItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrashDepositItemUpdateInput, TrashDepositItemUncheckedUpdateInput>
  }

  /**
   * TrashDepositItem delete
   */
  export type TrashDepositItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrashDepositItem
     */
    select?: TrashDepositItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrashDepositItem
     */
    omit?: TrashDepositItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrashDepositItemInclude<ExtArgs> | null
    /**
     * Filter which TrashDepositItem to delete.
     */
    where: TrashDepositItemWhereUniqueInput
  }

  /**
   * TrashDepositItem deleteMany
   */
  export type TrashDepositItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrashDepositItems to delete
     */
    where?: TrashDepositItemWhereInput
    /**
     * Limit how many TrashDepositItems to delete.
     */
    limit?: number
  }

  /**
   * TrashDepositItem without action
   */
  export type TrashDepositItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrashDepositItem
     */
    select?: TrashDepositItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrashDepositItem
     */
    omit?: TrashDepositItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrashDepositItemInclude<ExtArgs> | null
  }


  /**
   * Model BalanceTransaction
   */

  export type AggregateBalanceTransaction = {
    _count: BalanceTransactionCountAggregateOutputType | null
    _avg: BalanceTransactionAvgAggregateOutputType | null
    _sum: BalanceTransactionSumAggregateOutputType | null
    _min: BalanceTransactionMinAggregateOutputType | null
    _max: BalanceTransactionMaxAggregateOutputType | null
  }

  export type BalanceTransactionAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type BalanceTransactionSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type BalanceTransactionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: Decimal | null
    reason: string | null
    refType: $Enums.BalanceRefType | null
    refId: string | null
    createdAt: Date | null
  }

  export type BalanceTransactionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: Decimal | null
    reason: string | null
    refType: $Enums.BalanceRefType | null
    refId: string | null
    createdAt: Date | null
  }

  export type BalanceTransactionCountAggregateOutputType = {
    id: number
    userId: number
    amount: number
    reason: number
    refType: number
    refId: number
    createdAt: number
    _all: number
  }


  export type BalanceTransactionAvgAggregateInputType = {
    amount?: true
  }

  export type BalanceTransactionSumAggregateInputType = {
    amount?: true
  }

  export type BalanceTransactionMinAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    reason?: true
    refType?: true
    refId?: true
    createdAt?: true
  }

  export type BalanceTransactionMaxAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    reason?: true
    refType?: true
    refId?: true
    createdAt?: true
  }

  export type BalanceTransactionCountAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    reason?: true
    refType?: true
    refId?: true
    createdAt?: true
    _all?: true
  }

  export type BalanceTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BalanceTransaction to aggregate.
     */
    where?: BalanceTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BalanceTransactions to fetch.
     */
    orderBy?: BalanceTransactionOrderByWithRelationInput | BalanceTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BalanceTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BalanceTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BalanceTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BalanceTransactions
    **/
    _count?: true | BalanceTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BalanceTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BalanceTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BalanceTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BalanceTransactionMaxAggregateInputType
  }

  export type GetBalanceTransactionAggregateType<T extends BalanceTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateBalanceTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBalanceTransaction[P]>
      : GetScalarType<T[P], AggregateBalanceTransaction[P]>
  }




  export type BalanceTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BalanceTransactionWhereInput
    orderBy?: BalanceTransactionOrderByWithAggregationInput | BalanceTransactionOrderByWithAggregationInput[]
    by: BalanceTransactionScalarFieldEnum[] | BalanceTransactionScalarFieldEnum
    having?: BalanceTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BalanceTransactionCountAggregateInputType | true
    _avg?: BalanceTransactionAvgAggregateInputType
    _sum?: BalanceTransactionSumAggregateInputType
    _min?: BalanceTransactionMinAggregateInputType
    _max?: BalanceTransactionMaxAggregateInputType
  }

  export type BalanceTransactionGroupByOutputType = {
    id: string
    userId: string
    amount: Decimal
    reason: string
    refType: $Enums.BalanceRefType
    refId: string | null
    createdAt: Date
    _count: BalanceTransactionCountAggregateOutputType | null
    _avg: BalanceTransactionAvgAggregateOutputType | null
    _sum: BalanceTransactionSumAggregateOutputType | null
    _min: BalanceTransactionMinAggregateOutputType | null
    _max: BalanceTransactionMaxAggregateOutputType | null
  }

  type GetBalanceTransactionGroupByPayload<T extends BalanceTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BalanceTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BalanceTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BalanceTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], BalanceTransactionGroupByOutputType[P]>
        }
      >
    >


  export type BalanceTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    reason?: boolean
    refType?: boolean
    refId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["balanceTransaction"]>

  export type BalanceTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    reason?: boolean
    refType?: boolean
    refId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["balanceTransaction"]>

  export type BalanceTransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    reason?: boolean
    refType?: boolean
    refId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["balanceTransaction"]>

  export type BalanceTransactionSelectScalar = {
    id?: boolean
    userId?: boolean
    amount?: boolean
    reason?: boolean
    refType?: boolean
    refId?: boolean
    createdAt?: boolean
  }

  export type BalanceTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "amount" | "reason" | "refType" | "refId" | "createdAt", ExtArgs["result"]["balanceTransaction"]>
  export type BalanceTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BalanceTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BalanceTransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BalanceTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BalanceTransaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      amount: Prisma.Decimal
      reason: string
      refType: $Enums.BalanceRefType
      refId: string | null
      createdAt: Date
    }, ExtArgs["result"]["balanceTransaction"]>
    composites: {}
  }

  type BalanceTransactionGetPayload<S extends boolean | null | undefined | BalanceTransactionDefaultArgs> = $Result.GetResult<Prisma.$BalanceTransactionPayload, S>

  type BalanceTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BalanceTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BalanceTransactionCountAggregateInputType | true
    }

  export interface BalanceTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BalanceTransaction'], meta: { name: 'BalanceTransaction' } }
    /**
     * Find zero or one BalanceTransaction that matches the filter.
     * @param {BalanceTransactionFindUniqueArgs} args - Arguments to find a BalanceTransaction
     * @example
     * // Get one BalanceTransaction
     * const balanceTransaction = await prisma.balanceTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BalanceTransactionFindUniqueArgs>(args: SelectSubset<T, BalanceTransactionFindUniqueArgs<ExtArgs>>): Prisma__BalanceTransactionClient<$Result.GetResult<Prisma.$BalanceTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BalanceTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BalanceTransactionFindUniqueOrThrowArgs} args - Arguments to find a BalanceTransaction
     * @example
     * // Get one BalanceTransaction
     * const balanceTransaction = await prisma.balanceTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BalanceTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, BalanceTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BalanceTransactionClient<$Result.GetResult<Prisma.$BalanceTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BalanceTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceTransactionFindFirstArgs} args - Arguments to find a BalanceTransaction
     * @example
     * // Get one BalanceTransaction
     * const balanceTransaction = await prisma.balanceTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BalanceTransactionFindFirstArgs>(args?: SelectSubset<T, BalanceTransactionFindFirstArgs<ExtArgs>>): Prisma__BalanceTransactionClient<$Result.GetResult<Prisma.$BalanceTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BalanceTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceTransactionFindFirstOrThrowArgs} args - Arguments to find a BalanceTransaction
     * @example
     * // Get one BalanceTransaction
     * const balanceTransaction = await prisma.balanceTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BalanceTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, BalanceTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__BalanceTransactionClient<$Result.GetResult<Prisma.$BalanceTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BalanceTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BalanceTransactions
     * const balanceTransactions = await prisma.balanceTransaction.findMany()
     * 
     * // Get first 10 BalanceTransactions
     * const balanceTransactions = await prisma.balanceTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const balanceTransactionWithIdOnly = await prisma.balanceTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BalanceTransactionFindManyArgs>(args?: SelectSubset<T, BalanceTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BalanceTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BalanceTransaction.
     * @param {BalanceTransactionCreateArgs} args - Arguments to create a BalanceTransaction.
     * @example
     * // Create one BalanceTransaction
     * const BalanceTransaction = await prisma.balanceTransaction.create({
     *   data: {
     *     // ... data to create a BalanceTransaction
     *   }
     * })
     * 
     */
    create<T extends BalanceTransactionCreateArgs>(args: SelectSubset<T, BalanceTransactionCreateArgs<ExtArgs>>): Prisma__BalanceTransactionClient<$Result.GetResult<Prisma.$BalanceTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BalanceTransactions.
     * @param {BalanceTransactionCreateManyArgs} args - Arguments to create many BalanceTransactions.
     * @example
     * // Create many BalanceTransactions
     * const balanceTransaction = await prisma.balanceTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BalanceTransactionCreateManyArgs>(args?: SelectSubset<T, BalanceTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BalanceTransactions and returns the data saved in the database.
     * @param {BalanceTransactionCreateManyAndReturnArgs} args - Arguments to create many BalanceTransactions.
     * @example
     * // Create many BalanceTransactions
     * const balanceTransaction = await prisma.balanceTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BalanceTransactions and only return the `id`
     * const balanceTransactionWithIdOnly = await prisma.balanceTransaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BalanceTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, BalanceTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BalanceTransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BalanceTransaction.
     * @param {BalanceTransactionDeleteArgs} args - Arguments to delete one BalanceTransaction.
     * @example
     * // Delete one BalanceTransaction
     * const BalanceTransaction = await prisma.balanceTransaction.delete({
     *   where: {
     *     // ... filter to delete one BalanceTransaction
     *   }
     * })
     * 
     */
    delete<T extends BalanceTransactionDeleteArgs>(args: SelectSubset<T, BalanceTransactionDeleteArgs<ExtArgs>>): Prisma__BalanceTransactionClient<$Result.GetResult<Prisma.$BalanceTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BalanceTransaction.
     * @param {BalanceTransactionUpdateArgs} args - Arguments to update one BalanceTransaction.
     * @example
     * // Update one BalanceTransaction
     * const balanceTransaction = await prisma.balanceTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BalanceTransactionUpdateArgs>(args: SelectSubset<T, BalanceTransactionUpdateArgs<ExtArgs>>): Prisma__BalanceTransactionClient<$Result.GetResult<Prisma.$BalanceTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BalanceTransactions.
     * @param {BalanceTransactionDeleteManyArgs} args - Arguments to filter BalanceTransactions to delete.
     * @example
     * // Delete a few BalanceTransactions
     * const { count } = await prisma.balanceTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BalanceTransactionDeleteManyArgs>(args?: SelectSubset<T, BalanceTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BalanceTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BalanceTransactions
     * const balanceTransaction = await prisma.balanceTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BalanceTransactionUpdateManyArgs>(args: SelectSubset<T, BalanceTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BalanceTransactions and returns the data updated in the database.
     * @param {BalanceTransactionUpdateManyAndReturnArgs} args - Arguments to update many BalanceTransactions.
     * @example
     * // Update many BalanceTransactions
     * const balanceTransaction = await prisma.balanceTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BalanceTransactions and only return the `id`
     * const balanceTransactionWithIdOnly = await prisma.balanceTransaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BalanceTransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, BalanceTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BalanceTransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BalanceTransaction.
     * @param {BalanceTransactionUpsertArgs} args - Arguments to update or create a BalanceTransaction.
     * @example
     * // Update or create a BalanceTransaction
     * const balanceTransaction = await prisma.balanceTransaction.upsert({
     *   create: {
     *     // ... data to create a BalanceTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BalanceTransaction we want to update
     *   }
     * })
     */
    upsert<T extends BalanceTransactionUpsertArgs>(args: SelectSubset<T, BalanceTransactionUpsertArgs<ExtArgs>>): Prisma__BalanceTransactionClient<$Result.GetResult<Prisma.$BalanceTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BalanceTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceTransactionCountArgs} args - Arguments to filter BalanceTransactions to count.
     * @example
     * // Count the number of BalanceTransactions
     * const count = await prisma.balanceTransaction.count({
     *   where: {
     *     // ... the filter for the BalanceTransactions we want to count
     *   }
     * })
    **/
    count<T extends BalanceTransactionCountArgs>(
      args?: Subset<T, BalanceTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BalanceTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BalanceTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BalanceTransactionAggregateArgs>(args: Subset<T, BalanceTransactionAggregateArgs>): Prisma.PrismaPromise<GetBalanceTransactionAggregateType<T>>

    /**
     * Group by BalanceTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceTransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BalanceTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BalanceTransactionGroupByArgs['orderBy'] }
        : { orderBy?: BalanceTransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BalanceTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBalanceTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BalanceTransaction model
   */
  readonly fields: BalanceTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BalanceTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BalanceTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BalanceTransaction model
   */
  interface BalanceTransactionFieldRefs {
    readonly id: FieldRef<"BalanceTransaction", 'String'>
    readonly userId: FieldRef<"BalanceTransaction", 'String'>
    readonly amount: FieldRef<"BalanceTransaction", 'Decimal'>
    readonly reason: FieldRef<"BalanceTransaction", 'String'>
    readonly refType: FieldRef<"BalanceTransaction", 'BalanceRefType'>
    readonly refId: FieldRef<"BalanceTransaction", 'String'>
    readonly createdAt: FieldRef<"BalanceTransaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BalanceTransaction findUnique
   */
  export type BalanceTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BalanceTransaction
     */
    select?: BalanceTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BalanceTransaction
     */
    omit?: BalanceTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceTransactionInclude<ExtArgs> | null
    /**
     * Filter, which BalanceTransaction to fetch.
     */
    where: BalanceTransactionWhereUniqueInput
  }

  /**
   * BalanceTransaction findUniqueOrThrow
   */
  export type BalanceTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BalanceTransaction
     */
    select?: BalanceTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BalanceTransaction
     */
    omit?: BalanceTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceTransactionInclude<ExtArgs> | null
    /**
     * Filter, which BalanceTransaction to fetch.
     */
    where: BalanceTransactionWhereUniqueInput
  }

  /**
   * BalanceTransaction findFirst
   */
  export type BalanceTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BalanceTransaction
     */
    select?: BalanceTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BalanceTransaction
     */
    omit?: BalanceTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceTransactionInclude<ExtArgs> | null
    /**
     * Filter, which BalanceTransaction to fetch.
     */
    where?: BalanceTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BalanceTransactions to fetch.
     */
    orderBy?: BalanceTransactionOrderByWithRelationInput | BalanceTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BalanceTransactions.
     */
    cursor?: BalanceTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BalanceTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BalanceTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BalanceTransactions.
     */
    distinct?: BalanceTransactionScalarFieldEnum | BalanceTransactionScalarFieldEnum[]
  }

  /**
   * BalanceTransaction findFirstOrThrow
   */
  export type BalanceTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BalanceTransaction
     */
    select?: BalanceTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BalanceTransaction
     */
    omit?: BalanceTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceTransactionInclude<ExtArgs> | null
    /**
     * Filter, which BalanceTransaction to fetch.
     */
    where?: BalanceTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BalanceTransactions to fetch.
     */
    orderBy?: BalanceTransactionOrderByWithRelationInput | BalanceTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BalanceTransactions.
     */
    cursor?: BalanceTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BalanceTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BalanceTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BalanceTransactions.
     */
    distinct?: BalanceTransactionScalarFieldEnum | BalanceTransactionScalarFieldEnum[]
  }

  /**
   * BalanceTransaction findMany
   */
  export type BalanceTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BalanceTransaction
     */
    select?: BalanceTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BalanceTransaction
     */
    omit?: BalanceTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceTransactionInclude<ExtArgs> | null
    /**
     * Filter, which BalanceTransactions to fetch.
     */
    where?: BalanceTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BalanceTransactions to fetch.
     */
    orderBy?: BalanceTransactionOrderByWithRelationInput | BalanceTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BalanceTransactions.
     */
    cursor?: BalanceTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BalanceTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BalanceTransactions.
     */
    skip?: number
    distinct?: BalanceTransactionScalarFieldEnum | BalanceTransactionScalarFieldEnum[]
  }

  /**
   * BalanceTransaction create
   */
  export type BalanceTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BalanceTransaction
     */
    select?: BalanceTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BalanceTransaction
     */
    omit?: BalanceTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a BalanceTransaction.
     */
    data: XOR<BalanceTransactionCreateInput, BalanceTransactionUncheckedCreateInput>
  }

  /**
   * BalanceTransaction createMany
   */
  export type BalanceTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BalanceTransactions.
     */
    data: BalanceTransactionCreateManyInput | BalanceTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BalanceTransaction createManyAndReturn
   */
  export type BalanceTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BalanceTransaction
     */
    select?: BalanceTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BalanceTransaction
     */
    omit?: BalanceTransactionOmit<ExtArgs> | null
    /**
     * The data used to create many BalanceTransactions.
     */
    data: BalanceTransactionCreateManyInput | BalanceTransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceTransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BalanceTransaction update
   */
  export type BalanceTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BalanceTransaction
     */
    select?: BalanceTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BalanceTransaction
     */
    omit?: BalanceTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a BalanceTransaction.
     */
    data: XOR<BalanceTransactionUpdateInput, BalanceTransactionUncheckedUpdateInput>
    /**
     * Choose, which BalanceTransaction to update.
     */
    where: BalanceTransactionWhereUniqueInput
  }

  /**
   * BalanceTransaction updateMany
   */
  export type BalanceTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BalanceTransactions.
     */
    data: XOR<BalanceTransactionUpdateManyMutationInput, BalanceTransactionUncheckedUpdateManyInput>
    /**
     * Filter which BalanceTransactions to update
     */
    where?: BalanceTransactionWhereInput
    /**
     * Limit how many BalanceTransactions to update.
     */
    limit?: number
  }

  /**
   * BalanceTransaction updateManyAndReturn
   */
  export type BalanceTransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BalanceTransaction
     */
    select?: BalanceTransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BalanceTransaction
     */
    omit?: BalanceTransactionOmit<ExtArgs> | null
    /**
     * The data used to update BalanceTransactions.
     */
    data: XOR<BalanceTransactionUpdateManyMutationInput, BalanceTransactionUncheckedUpdateManyInput>
    /**
     * Filter which BalanceTransactions to update
     */
    where?: BalanceTransactionWhereInput
    /**
     * Limit how many BalanceTransactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceTransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BalanceTransaction upsert
   */
  export type BalanceTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BalanceTransaction
     */
    select?: BalanceTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BalanceTransaction
     */
    omit?: BalanceTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the BalanceTransaction to update in case it exists.
     */
    where: BalanceTransactionWhereUniqueInput
    /**
     * In case the BalanceTransaction found by the `where` argument doesn't exist, create a new BalanceTransaction with this data.
     */
    create: XOR<BalanceTransactionCreateInput, BalanceTransactionUncheckedCreateInput>
    /**
     * In case the BalanceTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BalanceTransactionUpdateInput, BalanceTransactionUncheckedUpdateInput>
  }

  /**
   * BalanceTransaction delete
   */
  export type BalanceTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BalanceTransaction
     */
    select?: BalanceTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BalanceTransaction
     */
    omit?: BalanceTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceTransactionInclude<ExtArgs> | null
    /**
     * Filter which BalanceTransaction to delete.
     */
    where: BalanceTransactionWhereUniqueInput
  }

  /**
   * BalanceTransaction deleteMany
   */
  export type BalanceTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BalanceTransactions to delete
     */
    where?: BalanceTransactionWhereInput
    /**
     * Limit how many BalanceTransactions to delete.
     */
    limit?: number
  }

  /**
   * BalanceTransaction without action
   */
  export type BalanceTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BalanceTransaction
     */
    select?: BalanceTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BalanceTransaction
     */
    omit?: BalanceTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceTransactionInclude<ExtArgs> | null
  }


  /**
   * Model WithdrawRequest
   */

  export type AggregateWithdrawRequest = {
    _count: WithdrawRequestCountAggregateOutputType | null
    _avg: WithdrawRequestAvgAggregateOutputType | null
    _sum: WithdrawRequestSumAggregateOutputType | null
    _min: WithdrawRequestMinAggregateOutputType | null
    _max: WithdrawRequestMaxAggregateOutputType | null
  }

  export type WithdrawRequestAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type WithdrawRequestSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type WithdrawRequestMinAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: Decimal | null
    method: string | null
    destination: string | null
    status: $Enums.WithdrawStatus | null
    createdAt: Date | null
    approvedAt: Date | null
  }

  export type WithdrawRequestMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: Decimal | null
    method: string | null
    destination: string | null
    status: $Enums.WithdrawStatus | null
    createdAt: Date | null
    approvedAt: Date | null
  }

  export type WithdrawRequestCountAggregateOutputType = {
    id: number
    userId: number
    amount: number
    method: number
    destination: number
    status: number
    createdAt: number
    approvedAt: number
    _all: number
  }


  export type WithdrawRequestAvgAggregateInputType = {
    amount?: true
  }

  export type WithdrawRequestSumAggregateInputType = {
    amount?: true
  }

  export type WithdrawRequestMinAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    method?: true
    destination?: true
    status?: true
    createdAt?: true
    approvedAt?: true
  }

  export type WithdrawRequestMaxAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    method?: true
    destination?: true
    status?: true
    createdAt?: true
    approvedAt?: true
  }

  export type WithdrawRequestCountAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    method?: true
    destination?: true
    status?: true
    createdAt?: true
    approvedAt?: true
    _all?: true
  }

  export type WithdrawRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WithdrawRequest to aggregate.
     */
    where?: WithdrawRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WithdrawRequests to fetch.
     */
    orderBy?: WithdrawRequestOrderByWithRelationInput | WithdrawRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WithdrawRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WithdrawRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WithdrawRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WithdrawRequests
    **/
    _count?: true | WithdrawRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WithdrawRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WithdrawRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WithdrawRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WithdrawRequestMaxAggregateInputType
  }

  export type GetWithdrawRequestAggregateType<T extends WithdrawRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateWithdrawRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWithdrawRequest[P]>
      : GetScalarType<T[P], AggregateWithdrawRequest[P]>
  }




  export type WithdrawRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WithdrawRequestWhereInput
    orderBy?: WithdrawRequestOrderByWithAggregationInput | WithdrawRequestOrderByWithAggregationInput[]
    by: WithdrawRequestScalarFieldEnum[] | WithdrawRequestScalarFieldEnum
    having?: WithdrawRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WithdrawRequestCountAggregateInputType | true
    _avg?: WithdrawRequestAvgAggregateInputType
    _sum?: WithdrawRequestSumAggregateInputType
    _min?: WithdrawRequestMinAggregateInputType
    _max?: WithdrawRequestMaxAggregateInputType
  }

  export type WithdrawRequestGroupByOutputType = {
    id: string
    userId: string
    amount: Decimal
    method: string
    destination: string
    status: $Enums.WithdrawStatus
    createdAt: Date
    approvedAt: Date | null
    _count: WithdrawRequestCountAggregateOutputType | null
    _avg: WithdrawRequestAvgAggregateOutputType | null
    _sum: WithdrawRequestSumAggregateOutputType | null
    _min: WithdrawRequestMinAggregateOutputType | null
    _max: WithdrawRequestMaxAggregateOutputType | null
  }

  type GetWithdrawRequestGroupByPayload<T extends WithdrawRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WithdrawRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WithdrawRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WithdrawRequestGroupByOutputType[P]>
            : GetScalarType<T[P], WithdrawRequestGroupByOutputType[P]>
        }
      >
    >


  export type WithdrawRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    method?: boolean
    destination?: boolean
    status?: boolean
    createdAt?: boolean
    approvedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["withdrawRequest"]>

  export type WithdrawRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    method?: boolean
    destination?: boolean
    status?: boolean
    createdAt?: boolean
    approvedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["withdrawRequest"]>

  export type WithdrawRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    method?: boolean
    destination?: boolean
    status?: boolean
    createdAt?: boolean
    approvedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["withdrawRequest"]>

  export type WithdrawRequestSelectScalar = {
    id?: boolean
    userId?: boolean
    amount?: boolean
    method?: boolean
    destination?: boolean
    status?: boolean
    createdAt?: boolean
    approvedAt?: boolean
  }

  export type WithdrawRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "amount" | "method" | "destination" | "status" | "createdAt" | "approvedAt", ExtArgs["result"]["withdrawRequest"]>
  export type WithdrawRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WithdrawRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WithdrawRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WithdrawRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WithdrawRequest"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      amount: Prisma.Decimal
      method: string
      destination: string
      status: $Enums.WithdrawStatus
      createdAt: Date
      approvedAt: Date | null
    }, ExtArgs["result"]["withdrawRequest"]>
    composites: {}
  }

  type WithdrawRequestGetPayload<S extends boolean | null | undefined | WithdrawRequestDefaultArgs> = $Result.GetResult<Prisma.$WithdrawRequestPayload, S>

  type WithdrawRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WithdrawRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WithdrawRequestCountAggregateInputType | true
    }

  export interface WithdrawRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WithdrawRequest'], meta: { name: 'WithdrawRequest' } }
    /**
     * Find zero or one WithdrawRequest that matches the filter.
     * @param {WithdrawRequestFindUniqueArgs} args - Arguments to find a WithdrawRequest
     * @example
     * // Get one WithdrawRequest
     * const withdrawRequest = await prisma.withdrawRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WithdrawRequestFindUniqueArgs>(args: SelectSubset<T, WithdrawRequestFindUniqueArgs<ExtArgs>>): Prisma__WithdrawRequestClient<$Result.GetResult<Prisma.$WithdrawRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WithdrawRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WithdrawRequestFindUniqueOrThrowArgs} args - Arguments to find a WithdrawRequest
     * @example
     * // Get one WithdrawRequest
     * const withdrawRequest = await prisma.withdrawRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WithdrawRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, WithdrawRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WithdrawRequestClient<$Result.GetResult<Prisma.$WithdrawRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WithdrawRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawRequestFindFirstArgs} args - Arguments to find a WithdrawRequest
     * @example
     * // Get one WithdrawRequest
     * const withdrawRequest = await prisma.withdrawRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WithdrawRequestFindFirstArgs>(args?: SelectSubset<T, WithdrawRequestFindFirstArgs<ExtArgs>>): Prisma__WithdrawRequestClient<$Result.GetResult<Prisma.$WithdrawRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WithdrawRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawRequestFindFirstOrThrowArgs} args - Arguments to find a WithdrawRequest
     * @example
     * // Get one WithdrawRequest
     * const withdrawRequest = await prisma.withdrawRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WithdrawRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, WithdrawRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__WithdrawRequestClient<$Result.GetResult<Prisma.$WithdrawRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WithdrawRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WithdrawRequests
     * const withdrawRequests = await prisma.withdrawRequest.findMany()
     * 
     * // Get first 10 WithdrawRequests
     * const withdrawRequests = await prisma.withdrawRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const withdrawRequestWithIdOnly = await prisma.withdrawRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WithdrawRequestFindManyArgs>(args?: SelectSubset<T, WithdrawRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WithdrawRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WithdrawRequest.
     * @param {WithdrawRequestCreateArgs} args - Arguments to create a WithdrawRequest.
     * @example
     * // Create one WithdrawRequest
     * const WithdrawRequest = await prisma.withdrawRequest.create({
     *   data: {
     *     // ... data to create a WithdrawRequest
     *   }
     * })
     * 
     */
    create<T extends WithdrawRequestCreateArgs>(args: SelectSubset<T, WithdrawRequestCreateArgs<ExtArgs>>): Prisma__WithdrawRequestClient<$Result.GetResult<Prisma.$WithdrawRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WithdrawRequests.
     * @param {WithdrawRequestCreateManyArgs} args - Arguments to create many WithdrawRequests.
     * @example
     * // Create many WithdrawRequests
     * const withdrawRequest = await prisma.withdrawRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WithdrawRequestCreateManyArgs>(args?: SelectSubset<T, WithdrawRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WithdrawRequests and returns the data saved in the database.
     * @param {WithdrawRequestCreateManyAndReturnArgs} args - Arguments to create many WithdrawRequests.
     * @example
     * // Create many WithdrawRequests
     * const withdrawRequest = await prisma.withdrawRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WithdrawRequests and only return the `id`
     * const withdrawRequestWithIdOnly = await prisma.withdrawRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WithdrawRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, WithdrawRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WithdrawRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WithdrawRequest.
     * @param {WithdrawRequestDeleteArgs} args - Arguments to delete one WithdrawRequest.
     * @example
     * // Delete one WithdrawRequest
     * const WithdrawRequest = await prisma.withdrawRequest.delete({
     *   where: {
     *     // ... filter to delete one WithdrawRequest
     *   }
     * })
     * 
     */
    delete<T extends WithdrawRequestDeleteArgs>(args: SelectSubset<T, WithdrawRequestDeleteArgs<ExtArgs>>): Prisma__WithdrawRequestClient<$Result.GetResult<Prisma.$WithdrawRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WithdrawRequest.
     * @param {WithdrawRequestUpdateArgs} args - Arguments to update one WithdrawRequest.
     * @example
     * // Update one WithdrawRequest
     * const withdrawRequest = await prisma.withdrawRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WithdrawRequestUpdateArgs>(args: SelectSubset<T, WithdrawRequestUpdateArgs<ExtArgs>>): Prisma__WithdrawRequestClient<$Result.GetResult<Prisma.$WithdrawRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WithdrawRequests.
     * @param {WithdrawRequestDeleteManyArgs} args - Arguments to filter WithdrawRequests to delete.
     * @example
     * // Delete a few WithdrawRequests
     * const { count } = await prisma.withdrawRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WithdrawRequestDeleteManyArgs>(args?: SelectSubset<T, WithdrawRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WithdrawRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WithdrawRequests
     * const withdrawRequest = await prisma.withdrawRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WithdrawRequestUpdateManyArgs>(args: SelectSubset<T, WithdrawRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WithdrawRequests and returns the data updated in the database.
     * @param {WithdrawRequestUpdateManyAndReturnArgs} args - Arguments to update many WithdrawRequests.
     * @example
     * // Update many WithdrawRequests
     * const withdrawRequest = await prisma.withdrawRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WithdrawRequests and only return the `id`
     * const withdrawRequestWithIdOnly = await prisma.withdrawRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WithdrawRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, WithdrawRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WithdrawRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WithdrawRequest.
     * @param {WithdrawRequestUpsertArgs} args - Arguments to update or create a WithdrawRequest.
     * @example
     * // Update or create a WithdrawRequest
     * const withdrawRequest = await prisma.withdrawRequest.upsert({
     *   create: {
     *     // ... data to create a WithdrawRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WithdrawRequest we want to update
     *   }
     * })
     */
    upsert<T extends WithdrawRequestUpsertArgs>(args: SelectSubset<T, WithdrawRequestUpsertArgs<ExtArgs>>): Prisma__WithdrawRequestClient<$Result.GetResult<Prisma.$WithdrawRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WithdrawRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawRequestCountArgs} args - Arguments to filter WithdrawRequests to count.
     * @example
     * // Count the number of WithdrawRequests
     * const count = await prisma.withdrawRequest.count({
     *   where: {
     *     // ... the filter for the WithdrawRequests we want to count
     *   }
     * })
    **/
    count<T extends WithdrawRequestCountArgs>(
      args?: Subset<T, WithdrawRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WithdrawRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WithdrawRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WithdrawRequestAggregateArgs>(args: Subset<T, WithdrawRequestAggregateArgs>): Prisma.PrismaPromise<GetWithdrawRequestAggregateType<T>>

    /**
     * Group by WithdrawRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WithdrawRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WithdrawRequestGroupByArgs['orderBy'] }
        : { orderBy?: WithdrawRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WithdrawRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWithdrawRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WithdrawRequest model
   */
  readonly fields: WithdrawRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WithdrawRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WithdrawRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WithdrawRequest model
   */
  interface WithdrawRequestFieldRefs {
    readonly id: FieldRef<"WithdrawRequest", 'String'>
    readonly userId: FieldRef<"WithdrawRequest", 'String'>
    readonly amount: FieldRef<"WithdrawRequest", 'Decimal'>
    readonly method: FieldRef<"WithdrawRequest", 'String'>
    readonly destination: FieldRef<"WithdrawRequest", 'String'>
    readonly status: FieldRef<"WithdrawRequest", 'WithdrawStatus'>
    readonly createdAt: FieldRef<"WithdrawRequest", 'DateTime'>
    readonly approvedAt: FieldRef<"WithdrawRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WithdrawRequest findUnique
   */
  export type WithdrawRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawRequest
     */
    select?: WithdrawRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawRequest
     */
    omit?: WithdrawRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawRequestInclude<ExtArgs> | null
    /**
     * Filter, which WithdrawRequest to fetch.
     */
    where: WithdrawRequestWhereUniqueInput
  }

  /**
   * WithdrawRequest findUniqueOrThrow
   */
  export type WithdrawRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawRequest
     */
    select?: WithdrawRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawRequest
     */
    omit?: WithdrawRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawRequestInclude<ExtArgs> | null
    /**
     * Filter, which WithdrawRequest to fetch.
     */
    where: WithdrawRequestWhereUniqueInput
  }

  /**
   * WithdrawRequest findFirst
   */
  export type WithdrawRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawRequest
     */
    select?: WithdrawRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawRequest
     */
    omit?: WithdrawRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawRequestInclude<ExtArgs> | null
    /**
     * Filter, which WithdrawRequest to fetch.
     */
    where?: WithdrawRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WithdrawRequests to fetch.
     */
    orderBy?: WithdrawRequestOrderByWithRelationInput | WithdrawRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WithdrawRequests.
     */
    cursor?: WithdrawRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WithdrawRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WithdrawRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WithdrawRequests.
     */
    distinct?: WithdrawRequestScalarFieldEnum | WithdrawRequestScalarFieldEnum[]
  }

  /**
   * WithdrawRequest findFirstOrThrow
   */
  export type WithdrawRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawRequest
     */
    select?: WithdrawRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawRequest
     */
    omit?: WithdrawRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawRequestInclude<ExtArgs> | null
    /**
     * Filter, which WithdrawRequest to fetch.
     */
    where?: WithdrawRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WithdrawRequests to fetch.
     */
    orderBy?: WithdrawRequestOrderByWithRelationInput | WithdrawRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WithdrawRequests.
     */
    cursor?: WithdrawRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WithdrawRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WithdrawRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WithdrawRequests.
     */
    distinct?: WithdrawRequestScalarFieldEnum | WithdrawRequestScalarFieldEnum[]
  }

  /**
   * WithdrawRequest findMany
   */
  export type WithdrawRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawRequest
     */
    select?: WithdrawRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawRequest
     */
    omit?: WithdrawRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawRequestInclude<ExtArgs> | null
    /**
     * Filter, which WithdrawRequests to fetch.
     */
    where?: WithdrawRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WithdrawRequests to fetch.
     */
    orderBy?: WithdrawRequestOrderByWithRelationInput | WithdrawRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WithdrawRequests.
     */
    cursor?: WithdrawRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WithdrawRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WithdrawRequests.
     */
    skip?: number
    distinct?: WithdrawRequestScalarFieldEnum | WithdrawRequestScalarFieldEnum[]
  }

  /**
   * WithdrawRequest create
   */
  export type WithdrawRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawRequest
     */
    select?: WithdrawRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawRequest
     */
    omit?: WithdrawRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a WithdrawRequest.
     */
    data: XOR<WithdrawRequestCreateInput, WithdrawRequestUncheckedCreateInput>
  }

  /**
   * WithdrawRequest createMany
   */
  export type WithdrawRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WithdrawRequests.
     */
    data: WithdrawRequestCreateManyInput | WithdrawRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WithdrawRequest createManyAndReturn
   */
  export type WithdrawRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawRequest
     */
    select?: WithdrawRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawRequest
     */
    omit?: WithdrawRequestOmit<ExtArgs> | null
    /**
     * The data used to create many WithdrawRequests.
     */
    data: WithdrawRequestCreateManyInput | WithdrawRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WithdrawRequest update
   */
  export type WithdrawRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawRequest
     */
    select?: WithdrawRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawRequest
     */
    omit?: WithdrawRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a WithdrawRequest.
     */
    data: XOR<WithdrawRequestUpdateInput, WithdrawRequestUncheckedUpdateInput>
    /**
     * Choose, which WithdrawRequest to update.
     */
    where: WithdrawRequestWhereUniqueInput
  }

  /**
   * WithdrawRequest updateMany
   */
  export type WithdrawRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WithdrawRequests.
     */
    data: XOR<WithdrawRequestUpdateManyMutationInput, WithdrawRequestUncheckedUpdateManyInput>
    /**
     * Filter which WithdrawRequests to update
     */
    where?: WithdrawRequestWhereInput
    /**
     * Limit how many WithdrawRequests to update.
     */
    limit?: number
  }

  /**
   * WithdrawRequest updateManyAndReturn
   */
  export type WithdrawRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawRequest
     */
    select?: WithdrawRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawRequest
     */
    omit?: WithdrawRequestOmit<ExtArgs> | null
    /**
     * The data used to update WithdrawRequests.
     */
    data: XOR<WithdrawRequestUpdateManyMutationInput, WithdrawRequestUncheckedUpdateManyInput>
    /**
     * Filter which WithdrawRequests to update
     */
    where?: WithdrawRequestWhereInput
    /**
     * Limit how many WithdrawRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WithdrawRequest upsert
   */
  export type WithdrawRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawRequest
     */
    select?: WithdrawRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawRequest
     */
    omit?: WithdrawRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the WithdrawRequest to update in case it exists.
     */
    where: WithdrawRequestWhereUniqueInput
    /**
     * In case the WithdrawRequest found by the `where` argument doesn't exist, create a new WithdrawRequest with this data.
     */
    create: XOR<WithdrawRequestCreateInput, WithdrawRequestUncheckedCreateInput>
    /**
     * In case the WithdrawRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WithdrawRequestUpdateInput, WithdrawRequestUncheckedUpdateInput>
  }

  /**
   * WithdrawRequest delete
   */
  export type WithdrawRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawRequest
     */
    select?: WithdrawRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawRequest
     */
    omit?: WithdrawRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawRequestInclude<ExtArgs> | null
    /**
     * Filter which WithdrawRequest to delete.
     */
    where: WithdrawRequestWhereUniqueInput
  }

  /**
   * WithdrawRequest deleteMany
   */
  export type WithdrawRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WithdrawRequests to delete
     */
    where?: WithdrawRequestWhereInput
    /**
     * Limit how many WithdrawRequests to delete.
     */
    limit?: number
  }

  /**
   * WithdrawRequest without action
   */
  export type WithdrawRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawRequest
     */
    select?: WithdrawRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawRequest
     */
    omit?: WithdrawRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawRequestInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    points: 'points',
    balance: 'balance',
    currentRank: 'currentRank',
    lastRank: 'lastRank',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TrashDepositScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    petugasId: 'petugasId',
    status: 'status',
    createdAt: 'createdAt',
    signature: 'signature'
  };

  export type TrashDepositScalarFieldEnum = (typeof TrashDepositScalarFieldEnum)[keyof typeof TrashDepositScalarFieldEnum]


  export const TrashDepositItemScalarFieldEnum: {
    id: 'id',
    trashDepositId: 'trashDepositId',
    trashType: 'trashType',
    weight: 'weight',
    points: 'points'
  };

  export type TrashDepositItemScalarFieldEnum = (typeof TrashDepositItemScalarFieldEnum)[keyof typeof TrashDepositItemScalarFieldEnum]


  export const BalanceTransactionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    amount: 'amount',
    reason: 'reason',
    refType: 'refType',
    refId: 'refId',
    createdAt: 'createdAt'
  };

  export type BalanceTransactionScalarFieldEnum = (typeof BalanceTransactionScalarFieldEnum)[keyof typeof BalanceTransactionScalarFieldEnum]


  export const WithdrawRequestScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    amount: 'amount',
    method: 'method',
    destination: 'destination',
    status: 'status',
    createdAt: 'createdAt',
    approvedAt: 'approvedAt'
  };

  export type WithdrawRequestScalarFieldEnum = (typeof WithdrawRequestScalarFieldEnum)[keyof typeof WithdrawRequestScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'TrashType'
   */
  export type EnumTrashTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TrashType'>
    


  /**
   * Reference to a field of type 'TrashType[]'
   */
  export type ListEnumTrashTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TrashType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'BalanceRefType'
   */
  export type EnumBalanceRefTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BalanceRefType'>
    


  /**
   * Reference to a field of type 'BalanceRefType[]'
   */
  export type ListEnumBalanceRefTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BalanceRefType[]'>
    


  /**
   * Reference to a field of type 'WithdrawStatus'
   */
  export type EnumWithdrawStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WithdrawStatus'>
    


  /**
   * Reference to a field of type 'WithdrawStatus[]'
   */
  export type ListEnumWithdrawStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WithdrawStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    points?: IntFilter<"User"> | number
    balance?: DecimalFilter<"User"> | Decimal | DecimalJsLike | number | string
    currentRank?: IntNullableFilter<"User"> | number | null
    lastRank?: IntNullableFilter<"User"> | number | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    balanceTxs?: BalanceTransactionListRelationFilter
    handledSetor?: TrashDepositListRelationFilter
    deposits?: TrashDepositListRelationFilter
    withdraws?: WithdrawRequestListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    points?: SortOrder
    balance?: SortOrder
    currentRank?: SortOrderInput | SortOrder
    lastRank?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    balanceTxs?: BalanceTransactionOrderByRelationAggregateInput
    handledSetor?: TrashDepositOrderByRelationAggregateInput
    deposits?: TrashDepositOrderByRelationAggregateInput
    withdraws?: WithdrawRequestOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    points?: IntFilter<"User"> | number
    balance?: DecimalFilter<"User"> | Decimal | DecimalJsLike | number | string
    currentRank?: IntNullableFilter<"User"> | number | null
    lastRank?: IntNullableFilter<"User"> | number | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    balanceTxs?: BalanceTransactionListRelationFilter
    handledSetor?: TrashDepositListRelationFilter
    deposits?: TrashDepositListRelationFilter
    withdraws?: WithdrawRequestListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    points?: SortOrder
    balance?: SortOrder
    currentRank?: SortOrderInput | SortOrder
    lastRank?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    points?: IntWithAggregatesFilter<"User"> | number
    balance?: DecimalWithAggregatesFilter<"User"> | Decimal | DecimalJsLike | number | string
    currentRank?: IntNullableWithAggregatesFilter<"User"> | number | null
    lastRank?: IntNullableWithAggregatesFilter<"User"> | number | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TrashDepositWhereInput = {
    AND?: TrashDepositWhereInput | TrashDepositWhereInput[]
    OR?: TrashDepositWhereInput[]
    NOT?: TrashDepositWhereInput | TrashDepositWhereInput[]
    id?: StringFilter<"TrashDeposit"> | string
    userId?: StringFilter<"TrashDeposit"> | string
    petugasId?: StringNullableFilter<"TrashDeposit"> | string | null
    status?: EnumStatusFilter<"TrashDeposit"> | $Enums.Status
    createdAt?: DateTimeFilter<"TrashDeposit"> | Date | string
    signature?: StringFilter<"TrashDeposit"> | string
    petugas?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: TrashDepositItemListRelationFilter
  }

  export type TrashDepositOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    petugasId?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    signature?: SortOrder
    petugas?: UserOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    items?: TrashDepositItemOrderByRelationAggregateInput
  }

  export type TrashDepositWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TrashDepositWhereInput | TrashDepositWhereInput[]
    OR?: TrashDepositWhereInput[]
    NOT?: TrashDepositWhereInput | TrashDepositWhereInput[]
    userId?: StringFilter<"TrashDeposit"> | string
    petugasId?: StringNullableFilter<"TrashDeposit"> | string | null
    status?: EnumStatusFilter<"TrashDeposit"> | $Enums.Status
    createdAt?: DateTimeFilter<"TrashDeposit"> | Date | string
    signature?: StringFilter<"TrashDeposit"> | string
    petugas?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: TrashDepositItemListRelationFilter
  }, "id">

  export type TrashDepositOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    petugasId?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    signature?: SortOrder
    _count?: TrashDepositCountOrderByAggregateInput
    _max?: TrashDepositMaxOrderByAggregateInput
    _min?: TrashDepositMinOrderByAggregateInput
  }

  export type TrashDepositScalarWhereWithAggregatesInput = {
    AND?: TrashDepositScalarWhereWithAggregatesInput | TrashDepositScalarWhereWithAggregatesInput[]
    OR?: TrashDepositScalarWhereWithAggregatesInput[]
    NOT?: TrashDepositScalarWhereWithAggregatesInput | TrashDepositScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TrashDeposit"> | string
    userId?: StringWithAggregatesFilter<"TrashDeposit"> | string
    petugasId?: StringNullableWithAggregatesFilter<"TrashDeposit"> | string | null
    status?: EnumStatusWithAggregatesFilter<"TrashDeposit"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"TrashDeposit"> | Date | string
    signature?: StringWithAggregatesFilter<"TrashDeposit"> | string
  }

  export type TrashDepositItemWhereInput = {
    AND?: TrashDepositItemWhereInput | TrashDepositItemWhereInput[]
    OR?: TrashDepositItemWhereInput[]
    NOT?: TrashDepositItemWhereInput | TrashDepositItemWhereInput[]
    id?: StringFilter<"TrashDepositItem"> | string
    trashDepositId?: StringFilter<"TrashDepositItem"> | string
    trashType?: EnumTrashTypeFilter<"TrashDepositItem"> | $Enums.TrashType
    weight?: FloatFilter<"TrashDepositItem"> | number
    points?: IntFilter<"TrashDepositItem"> | number
    trashDeposit?: XOR<TrashDepositScalarRelationFilter, TrashDepositWhereInput>
  }

  export type TrashDepositItemOrderByWithRelationInput = {
    id?: SortOrder
    trashDepositId?: SortOrder
    trashType?: SortOrder
    weight?: SortOrder
    points?: SortOrder
    trashDeposit?: TrashDepositOrderByWithRelationInput
  }

  export type TrashDepositItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TrashDepositItemWhereInput | TrashDepositItemWhereInput[]
    OR?: TrashDepositItemWhereInput[]
    NOT?: TrashDepositItemWhereInput | TrashDepositItemWhereInput[]
    trashDepositId?: StringFilter<"TrashDepositItem"> | string
    trashType?: EnumTrashTypeFilter<"TrashDepositItem"> | $Enums.TrashType
    weight?: FloatFilter<"TrashDepositItem"> | number
    points?: IntFilter<"TrashDepositItem"> | number
    trashDeposit?: XOR<TrashDepositScalarRelationFilter, TrashDepositWhereInput>
  }, "id">

  export type TrashDepositItemOrderByWithAggregationInput = {
    id?: SortOrder
    trashDepositId?: SortOrder
    trashType?: SortOrder
    weight?: SortOrder
    points?: SortOrder
    _count?: TrashDepositItemCountOrderByAggregateInput
    _avg?: TrashDepositItemAvgOrderByAggregateInput
    _max?: TrashDepositItemMaxOrderByAggregateInput
    _min?: TrashDepositItemMinOrderByAggregateInput
    _sum?: TrashDepositItemSumOrderByAggregateInput
  }

  export type TrashDepositItemScalarWhereWithAggregatesInput = {
    AND?: TrashDepositItemScalarWhereWithAggregatesInput | TrashDepositItemScalarWhereWithAggregatesInput[]
    OR?: TrashDepositItemScalarWhereWithAggregatesInput[]
    NOT?: TrashDepositItemScalarWhereWithAggregatesInput | TrashDepositItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TrashDepositItem"> | string
    trashDepositId?: StringWithAggregatesFilter<"TrashDepositItem"> | string
    trashType?: EnumTrashTypeWithAggregatesFilter<"TrashDepositItem"> | $Enums.TrashType
    weight?: FloatWithAggregatesFilter<"TrashDepositItem"> | number
    points?: IntWithAggregatesFilter<"TrashDepositItem"> | number
  }

  export type BalanceTransactionWhereInput = {
    AND?: BalanceTransactionWhereInput | BalanceTransactionWhereInput[]
    OR?: BalanceTransactionWhereInput[]
    NOT?: BalanceTransactionWhereInput | BalanceTransactionWhereInput[]
    id?: StringFilter<"BalanceTransaction"> | string
    userId?: StringFilter<"BalanceTransaction"> | string
    amount?: DecimalFilter<"BalanceTransaction"> | Decimal | DecimalJsLike | number | string
    reason?: StringFilter<"BalanceTransaction"> | string
    refType?: EnumBalanceRefTypeFilter<"BalanceTransaction"> | $Enums.BalanceRefType
    refId?: StringNullableFilter<"BalanceTransaction"> | string | null
    createdAt?: DateTimeFilter<"BalanceTransaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BalanceTransactionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    reason?: SortOrder
    refType?: SortOrder
    refId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type BalanceTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BalanceTransactionWhereInput | BalanceTransactionWhereInput[]
    OR?: BalanceTransactionWhereInput[]
    NOT?: BalanceTransactionWhereInput | BalanceTransactionWhereInput[]
    userId?: StringFilter<"BalanceTransaction"> | string
    amount?: DecimalFilter<"BalanceTransaction"> | Decimal | DecimalJsLike | number | string
    reason?: StringFilter<"BalanceTransaction"> | string
    refType?: EnumBalanceRefTypeFilter<"BalanceTransaction"> | $Enums.BalanceRefType
    refId?: StringNullableFilter<"BalanceTransaction"> | string | null
    createdAt?: DateTimeFilter<"BalanceTransaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type BalanceTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    reason?: SortOrder
    refType?: SortOrder
    refId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: BalanceTransactionCountOrderByAggregateInput
    _avg?: BalanceTransactionAvgOrderByAggregateInput
    _max?: BalanceTransactionMaxOrderByAggregateInput
    _min?: BalanceTransactionMinOrderByAggregateInput
    _sum?: BalanceTransactionSumOrderByAggregateInput
  }

  export type BalanceTransactionScalarWhereWithAggregatesInput = {
    AND?: BalanceTransactionScalarWhereWithAggregatesInput | BalanceTransactionScalarWhereWithAggregatesInput[]
    OR?: BalanceTransactionScalarWhereWithAggregatesInput[]
    NOT?: BalanceTransactionScalarWhereWithAggregatesInput | BalanceTransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BalanceTransaction"> | string
    userId?: StringWithAggregatesFilter<"BalanceTransaction"> | string
    amount?: DecimalWithAggregatesFilter<"BalanceTransaction"> | Decimal | DecimalJsLike | number | string
    reason?: StringWithAggregatesFilter<"BalanceTransaction"> | string
    refType?: EnumBalanceRefTypeWithAggregatesFilter<"BalanceTransaction"> | $Enums.BalanceRefType
    refId?: StringNullableWithAggregatesFilter<"BalanceTransaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"BalanceTransaction"> | Date | string
  }

  export type WithdrawRequestWhereInput = {
    AND?: WithdrawRequestWhereInput | WithdrawRequestWhereInput[]
    OR?: WithdrawRequestWhereInput[]
    NOT?: WithdrawRequestWhereInput | WithdrawRequestWhereInput[]
    id?: StringFilter<"WithdrawRequest"> | string
    userId?: StringFilter<"WithdrawRequest"> | string
    amount?: DecimalFilter<"WithdrawRequest"> | Decimal | DecimalJsLike | number | string
    method?: StringFilter<"WithdrawRequest"> | string
    destination?: StringFilter<"WithdrawRequest"> | string
    status?: EnumWithdrawStatusFilter<"WithdrawRequest"> | $Enums.WithdrawStatus
    createdAt?: DateTimeFilter<"WithdrawRequest"> | Date | string
    approvedAt?: DateTimeNullableFilter<"WithdrawRequest"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WithdrawRequestOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    destination?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    approvedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type WithdrawRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WithdrawRequestWhereInput | WithdrawRequestWhereInput[]
    OR?: WithdrawRequestWhereInput[]
    NOT?: WithdrawRequestWhereInput | WithdrawRequestWhereInput[]
    userId?: StringFilter<"WithdrawRequest"> | string
    amount?: DecimalFilter<"WithdrawRequest"> | Decimal | DecimalJsLike | number | string
    method?: StringFilter<"WithdrawRequest"> | string
    destination?: StringFilter<"WithdrawRequest"> | string
    status?: EnumWithdrawStatusFilter<"WithdrawRequest"> | $Enums.WithdrawStatus
    createdAt?: DateTimeFilter<"WithdrawRequest"> | Date | string
    approvedAt?: DateTimeNullableFilter<"WithdrawRequest"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type WithdrawRequestOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    destination?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    approvedAt?: SortOrderInput | SortOrder
    _count?: WithdrawRequestCountOrderByAggregateInput
    _avg?: WithdrawRequestAvgOrderByAggregateInput
    _max?: WithdrawRequestMaxOrderByAggregateInput
    _min?: WithdrawRequestMinOrderByAggregateInput
    _sum?: WithdrawRequestSumOrderByAggregateInput
  }

  export type WithdrawRequestScalarWhereWithAggregatesInput = {
    AND?: WithdrawRequestScalarWhereWithAggregatesInput | WithdrawRequestScalarWhereWithAggregatesInput[]
    OR?: WithdrawRequestScalarWhereWithAggregatesInput[]
    NOT?: WithdrawRequestScalarWhereWithAggregatesInput | WithdrawRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WithdrawRequest"> | string
    userId?: StringWithAggregatesFilter<"WithdrawRequest"> | string
    amount?: DecimalWithAggregatesFilter<"WithdrawRequest"> | Decimal | DecimalJsLike | number | string
    method?: StringWithAggregatesFilter<"WithdrawRequest"> | string
    destination?: StringWithAggregatesFilter<"WithdrawRequest"> | string
    status?: EnumWithdrawStatusWithAggregatesFilter<"WithdrawRequest"> | $Enums.WithdrawStatus
    createdAt?: DateTimeWithAggregatesFilter<"WithdrawRequest"> | Date | string
    approvedAt?: DateTimeNullableWithAggregatesFilter<"WithdrawRequest"> | Date | string | null
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    points?: number
    balance?: Decimal | DecimalJsLike | number | string
    currentRank?: number | null
    lastRank?: number | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    balanceTxs?: BalanceTransactionCreateNestedManyWithoutUserInput
    handledSetor?: TrashDepositCreateNestedManyWithoutPetugasInput
    deposits?: TrashDepositCreateNestedManyWithoutUserInput
    withdraws?: WithdrawRequestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    points?: number
    balance?: Decimal | DecimalJsLike | number | string
    currentRank?: number | null
    lastRank?: number | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    balanceTxs?: BalanceTransactionUncheckedCreateNestedManyWithoutUserInput
    handledSetor?: TrashDepositUncheckedCreateNestedManyWithoutPetugasInput
    deposits?: TrashDepositUncheckedCreateNestedManyWithoutUserInput
    withdraws?: WithdrawRequestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentRank?: NullableIntFieldUpdateOperationsInput | number | null
    lastRank?: NullableIntFieldUpdateOperationsInput | number | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balanceTxs?: BalanceTransactionUpdateManyWithoutUserNestedInput
    handledSetor?: TrashDepositUpdateManyWithoutPetugasNestedInput
    deposits?: TrashDepositUpdateManyWithoutUserNestedInput
    withdraws?: WithdrawRequestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentRank?: NullableIntFieldUpdateOperationsInput | number | null
    lastRank?: NullableIntFieldUpdateOperationsInput | number | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balanceTxs?: BalanceTransactionUncheckedUpdateManyWithoutUserNestedInput
    handledSetor?: TrashDepositUncheckedUpdateManyWithoutPetugasNestedInput
    deposits?: TrashDepositUncheckedUpdateManyWithoutUserNestedInput
    withdraws?: WithdrawRequestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    points?: number
    balance?: Decimal | DecimalJsLike | number | string
    currentRank?: number | null
    lastRank?: number | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentRank?: NullableIntFieldUpdateOperationsInput | number | null
    lastRank?: NullableIntFieldUpdateOperationsInput | number | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentRank?: NullableIntFieldUpdateOperationsInput | number | null
    lastRank?: NullableIntFieldUpdateOperationsInput | number | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrashDepositCreateInput = {
    id?: string
    status: $Enums.Status
    createdAt?: Date | string
    signature: string
    petugas?: UserCreateNestedOneWithoutHandledSetorInput
    user: UserCreateNestedOneWithoutDepositsInput
    items?: TrashDepositItemCreateNestedManyWithoutTrashDepositInput
  }

  export type TrashDepositUncheckedCreateInput = {
    id?: string
    userId: string
    petugasId?: string | null
    status: $Enums.Status
    createdAt?: Date | string
    signature: string
    items?: TrashDepositItemUncheckedCreateNestedManyWithoutTrashDepositInput
  }

  export type TrashDepositUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signature?: StringFieldUpdateOperationsInput | string
    petugas?: UserUpdateOneWithoutHandledSetorNestedInput
    user?: UserUpdateOneRequiredWithoutDepositsNestedInput
    items?: TrashDepositItemUpdateManyWithoutTrashDepositNestedInput
  }

  export type TrashDepositUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    petugasId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signature?: StringFieldUpdateOperationsInput | string
    items?: TrashDepositItemUncheckedUpdateManyWithoutTrashDepositNestedInput
  }

  export type TrashDepositCreateManyInput = {
    id?: string
    userId: string
    petugasId?: string | null
    status: $Enums.Status
    createdAt?: Date | string
    signature: string
  }

  export type TrashDepositUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signature?: StringFieldUpdateOperationsInput | string
  }

  export type TrashDepositUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    petugasId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signature?: StringFieldUpdateOperationsInput | string
  }

  export type TrashDepositItemCreateInput = {
    id?: string
    trashType: $Enums.TrashType
    weight: number
    points: number
    trashDeposit: TrashDepositCreateNestedOneWithoutItemsInput
  }

  export type TrashDepositItemUncheckedCreateInput = {
    id?: string
    trashDepositId: string
    trashType: $Enums.TrashType
    weight: number
    points: number
  }

  export type TrashDepositItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    trashType?: EnumTrashTypeFieldUpdateOperationsInput | $Enums.TrashType
    weight?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    trashDeposit?: TrashDepositUpdateOneRequiredWithoutItemsNestedInput
  }

  export type TrashDepositItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    trashDepositId?: StringFieldUpdateOperationsInput | string
    trashType?: EnumTrashTypeFieldUpdateOperationsInput | $Enums.TrashType
    weight?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
  }

  export type TrashDepositItemCreateManyInput = {
    id?: string
    trashDepositId: string
    trashType: $Enums.TrashType
    weight: number
    points: number
  }

  export type TrashDepositItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    trashType?: EnumTrashTypeFieldUpdateOperationsInput | $Enums.TrashType
    weight?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
  }

  export type TrashDepositItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    trashDepositId?: StringFieldUpdateOperationsInput | string
    trashType?: EnumTrashTypeFieldUpdateOperationsInput | $Enums.TrashType
    weight?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
  }

  export type BalanceTransactionCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    reason: string
    refType: $Enums.BalanceRefType
    refId?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBalanceTxsInput
  }

  export type BalanceTransactionUncheckedCreateInput = {
    id?: string
    userId: string
    amount: Decimal | DecimalJsLike | number | string
    reason: string
    refType: $Enums.BalanceRefType
    refId?: string | null
    createdAt?: Date | string
  }

  export type BalanceTransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reason?: StringFieldUpdateOperationsInput | string
    refType?: EnumBalanceRefTypeFieldUpdateOperationsInput | $Enums.BalanceRefType
    refId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBalanceTxsNestedInput
  }

  export type BalanceTransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reason?: StringFieldUpdateOperationsInput | string
    refType?: EnumBalanceRefTypeFieldUpdateOperationsInput | $Enums.BalanceRefType
    refId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BalanceTransactionCreateManyInput = {
    id?: string
    userId: string
    amount: Decimal | DecimalJsLike | number | string
    reason: string
    refType: $Enums.BalanceRefType
    refId?: string | null
    createdAt?: Date | string
  }

  export type BalanceTransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reason?: StringFieldUpdateOperationsInput | string
    refType?: EnumBalanceRefTypeFieldUpdateOperationsInput | $Enums.BalanceRefType
    refId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BalanceTransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reason?: StringFieldUpdateOperationsInput | string
    refType?: EnumBalanceRefTypeFieldUpdateOperationsInput | $Enums.BalanceRefType
    refId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WithdrawRequestCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    method: string
    destination: string
    status: $Enums.WithdrawStatus
    createdAt?: Date | string
    approvedAt?: Date | string | null
    user: UserCreateNestedOneWithoutWithdrawsInput
  }

  export type WithdrawRequestUncheckedCreateInput = {
    id?: string
    userId: string
    amount: Decimal | DecimalJsLike | number | string
    method: string
    destination: string
    status: $Enums.WithdrawStatus
    createdAt?: Date | string
    approvedAt?: Date | string | null
  }

  export type WithdrawRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    status?: EnumWithdrawStatusFieldUpdateOperationsInput | $Enums.WithdrawStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutWithdrawsNestedInput
  }

  export type WithdrawRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    status?: EnumWithdrawStatusFieldUpdateOperationsInput | $Enums.WithdrawStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WithdrawRequestCreateManyInput = {
    id?: string
    userId: string
    amount: Decimal | DecimalJsLike | number | string
    method: string
    destination: string
    status: $Enums.WithdrawStatus
    createdAt?: Date | string
    approvedAt?: Date | string | null
  }

  export type WithdrawRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    status?: EnumWithdrawStatusFieldUpdateOperationsInput | $Enums.WithdrawStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WithdrawRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    status?: EnumWithdrawStatusFieldUpdateOperationsInput | $Enums.WithdrawStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BalanceTransactionListRelationFilter = {
    every?: BalanceTransactionWhereInput
    some?: BalanceTransactionWhereInput
    none?: BalanceTransactionWhereInput
  }

  export type TrashDepositListRelationFilter = {
    every?: TrashDepositWhereInput
    some?: TrashDepositWhereInput
    none?: TrashDepositWhereInput
  }

  export type WithdrawRequestListRelationFilter = {
    every?: WithdrawRequestWhereInput
    some?: WithdrawRequestWhereInput
    none?: WithdrawRequestWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BalanceTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TrashDepositOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WithdrawRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    points?: SortOrder
    balance?: SortOrder
    currentRank?: SortOrder
    lastRank?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    points?: SortOrder
    balance?: SortOrder
    currentRank?: SortOrder
    lastRank?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    points?: SortOrder
    balance?: SortOrder
    currentRank?: SortOrder
    lastRank?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    points?: SortOrder
    balance?: SortOrder
    currentRank?: SortOrder
    lastRank?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    points?: SortOrder
    balance?: SortOrder
    currentRank?: SortOrder
    lastRank?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TrashDepositItemListRelationFilter = {
    every?: TrashDepositItemWhereInput
    some?: TrashDepositItemWhereInput
    none?: TrashDepositItemWhereInput
  }

  export type TrashDepositItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TrashDepositCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    petugasId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    signature?: SortOrder
  }

  export type TrashDepositMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    petugasId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    signature?: SortOrder
  }

  export type TrashDepositMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    petugasId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    signature?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type EnumTrashTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TrashType | EnumTrashTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TrashType[] | ListEnumTrashTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TrashType[] | ListEnumTrashTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTrashTypeFilter<$PrismaModel> | $Enums.TrashType
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type TrashDepositScalarRelationFilter = {
    is?: TrashDepositWhereInput
    isNot?: TrashDepositWhereInput
  }

  export type TrashDepositItemCountOrderByAggregateInput = {
    id?: SortOrder
    trashDepositId?: SortOrder
    trashType?: SortOrder
    weight?: SortOrder
    points?: SortOrder
  }

  export type TrashDepositItemAvgOrderByAggregateInput = {
    weight?: SortOrder
    points?: SortOrder
  }

  export type TrashDepositItemMaxOrderByAggregateInput = {
    id?: SortOrder
    trashDepositId?: SortOrder
    trashType?: SortOrder
    weight?: SortOrder
    points?: SortOrder
  }

  export type TrashDepositItemMinOrderByAggregateInput = {
    id?: SortOrder
    trashDepositId?: SortOrder
    trashType?: SortOrder
    weight?: SortOrder
    points?: SortOrder
  }

  export type TrashDepositItemSumOrderByAggregateInput = {
    weight?: SortOrder
    points?: SortOrder
  }

  export type EnumTrashTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TrashType | EnumTrashTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TrashType[] | ListEnumTrashTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TrashType[] | ListEnumTrashTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTrashTypeWithAggregatesFilter<$PrismaModel> | $Enums.TrashType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTrashTypeFilter<$PrismaModel>
    _max?: NestedEnumTrashTypeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumBalanceRefTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BalanceRefType | EnumBalanceRefTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BalanceRefType[] | ListEnumBalanceRefTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BalanceRefType[] | ListEnumBalanceRefTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBalanceRefTypeFilter<$PrismaModel> | $Enums.BalanceRefType
  }

  export type BalanceTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    reason?: SortOrder
    refType?: SortOrder
    refId?: SortOrder
    createdAt?: SortOrder
  }

  export type BalanceTransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type BalanceTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    reason?: SortOrder
    refType?: SortOrder
    refId?: SortOrder
    createdAt?: SortOrder
  }

  export type BalanceTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    reason?: SortOrder
    refType?: SortOrder
    refId?: SortOrder
    createdAt?: SortOrder
  }

  export type BalanceTransactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumBalanceRefTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BalanceRefType | EnumBalanceRefTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BalanceRefType[] | ListEnumBalanceRefTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BalanceRefType[] | ListEnumBalanceRefTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBalanceRefTypeWithAggregatesFilter<$PrismaModel> | $Enums.BalanceRefType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBalanceRefTypeFilter<$PrismaModel>
    _max?: NestedEnumBalanceRefTypeFilter<$PrismaModel>
  }

  export type EnumWithdrawStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WithdrawStatus | EnumWithdrawStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WithdrawStatus[] | ListEnumWithdrawStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WithdrawStatus[] | ListEnumWithdrawStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWithdrawStatusFilter<$PrismaModel> | $Enums.WithdrawStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type WithdrawRequestCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    destination?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    approvedAt?: SortOrder
  }

  export type WithdrawRequestAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type WithdrawRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    destination?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    approvedAt?: SortOrder
  }

  export type WithdrawRequestMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    destination?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    approvedAt?: SortOrder
  }

  export type WithdrawRequestSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumWithdrawStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WithdrawStatus | EnumWithdrawStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WithdrawStatus[] | ListEnumWithdrawStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WithdrawStatus[] | ListEnumWithdrawStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWithdrawStatusWithAggregatesFilter<$PrismaModel> | $Enums.WithdrawStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWithdrawStatusFilter<$PrismaModel>
    _max?: NestedEnumWithdrawStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BalanceTransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<BalanceTransactionCreateWithoutUserInput, BalanceTransactionUncheckedCreateWithoutUserInput> | BalanceTransactionCreateWithoutUserInput[] | BalanceTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BalanceTransactionCreateOrConnectWithoutUserInput | BalanceTransactionCreateOrConnectWithoutUserInput[]
    createMany?: BalanceTransactionCreateManyUserInputEnvelope
    connect?: BalanceTransactionWhereUniqueInput | BalanceTransactionWhereUniqueInput[]
  }

  export type TrashDepositCreateNestedManyWithoutPetugasInput = {
    create?: XOR<TrashDepositCreateWithoutPetugasInput, TrashDepositUncheckedCreateWithoutPetugasInput> | TrashDepositCreateWithoutPetugasInput[] | TrashDepositUncheckedCreateWithoutPetugasInput[]
    connectOrCreate?: TrashDepositCreateOrConnectWithoutPetugasInput | TrashDepositCreateOrConnectWithoutPetugasInput[]
    createMany?: TrashDepositCreateManyPetugasInputEnvelope
    connect?: TrashDepositWhereUniqueInput | TrashDepositWhereUniqueInput[]
  }

  export type TrashDepositCreateNestedManyWithoutUserInput = {
    create?: XOR<TrashDepositCreateWithoutUserInput, TrashDepositUncheckedCreateWithoutUserInput> | TrashDepositCreateWithoutUserInput[] | TrashDepositUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TrashDepositCreateOrConnectWithoutUserInput | TrashDepositCreateOrConnectWithoutUserInput[]
    createMany?: TrashDepositCreateManyUserInputEnvelope
    connect?: TrashDepositWhereUniqueInput | TrashDepositWhereUniqueInput[]
  }

  export type WithdrawRequestCreateNestedManyWithoutUserInput = {
    create?: XOR<WithdrawRequestCreateWithoutUserInput, WithdrawRequestUncheckedCreateWithoutUserInput> | WithdrawRequestCreateWithoutUserInput[] | WithdrawRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WithdrawRequestCreateOrConnectWithoutUserInput | WithdrawRequestCreateOrConnectWithoutUserInput[]
    createMany?: WithdrawRequestCreateManyUserInputEnvelope
    connect?: WithdrawRequestWhereUniqueInput | WithdrawRequestWhereUniqueInput[]
  }

  export type BalanceTransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BalanceTransactionCreateWithoutUserInput, BalanceTransactionUncheckedCreateWithoutUserInput> | BalanceTransactionCreateWithoutUserInput[] | BalanceTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BalanceTransactionCreateOrConnectWithoutUserInput | BalanceTransactionCreateOrConnectWithoutUserInput[]
    createMany?: BalanceTransactionCreateManyUserInputEnvelope
    connect?: BalanceTransactionWhereUniqueInput | BalanceTransactionWhereUniqueInput[]
  }

  export type TrashDepositUncheckedCreateNestedManyWithoutPetugasInput = {
    create?: XOR<TrashDepositCreateWithoutPetugasInput, TrashDepositUncheckedCreateWithoutPetugasInput> | TrashDepositCreateWithoutPetugasInput[] | TrashDepositUncheckedCreateWithoutPetugasInput[]
    connectOrCreate?: TrashDepositCreateOrConnectWithoutPetugasInput | TrashDepositCreateOrConnectWithoutPetugasInput[]
    createMany?: TrashDepositCreateManyPetugasInputEnvelope
    connect?: TrashDepositWhereUniqueInput | TrashDepositWhereUniqueInput[]
  }

  export type TrashDepositUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TrashDepositCreateWithoutUserInput, TrashDepositUncheckedCreateWithoutUserInput> | TrashDepositCreateWithoutUserInput[] | TrashDepositUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TrashDepositCreateOrConnectWithoutUserInput | TrashDepositCreateOrConnectWithoutUserInput[]
    createMany?: TrashDepositCreateManyUserInputEnvelope
    connect?: TrashDepositWhereUniqueInput | TrashDepositWhereUniqueInput[]
  }

  export type WithdrawRequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WithdrawRequestCreateWithoutUserInput, WithdrawRequestUncheckedCreateWithoutUserInput> | WithdrawRequestCreateWithoutUserInput[] | WithdrawRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WithdrawRequestCreateOrConnectWithoutUserInput | WithdrawRequestCreateOrConnectWithoutUserInput[]
    createMany?: WithdrawRequestCreateManyUserInputEnvelope
    connect?: WithdrawRequestWhereUniqueInput | WithdrawRequestWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BalanceTransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<BalanceTransactionCreateWithoutUserInput, BalanceTransactionUncheckedCreateWithoutUserInput> | BalanceTransactionCreateWithoutUserInput[] | BalanceTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BalanceTransactionCreateOrConnectWithoutUserInput | BalanceTransactionCreateOrConnectWithoutUserInput[]
    upsert?: BalanceTransactionUpsertWithWhereUniqueWithoutUserInput | BalanceTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BalanceTransactionCreateManyUserInputEnvelope
    set?: BalanceTransactionWhereUniqueInput | BalanceTransactionWhereUniqueInput[]
    disconnect?: BalanceTransactionWhereUniqueInput | BalanceTransactionWhereUniqueInput[]
    delete?: BalanceTransactionWhereUniqueInput | BalanceTransactionWhereUniqueInput[]
    connect?: BalanceTransactionWhereUniqueInput | BalanceTransactionWhereUniqueInput[]
    update?: BalanceTransactionUpdateWithWhereUniqueWithoutUserInput | BalanceTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BalanceTransactionUpdateManyWithWhereWithoutUserInput | BalanceTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BalanceTransactionScalarWhereInput | BalanceTransactionScalarWhereInput[]
  }

  export type TrashDepositUpdateManyWithoutPetugasNestedInput = {
    create?: XOR<TrashDepositCreateWithoutPetugasInput, TrashDepositUncheckedCreateWithoutPetugasInput> | TrashDepositCreateWithoutPetugasInput[] | TrashDepositUncheckedCreateWithoutPetugasInput[]
    connectOrCreate?: TrashDepositCreateOrConnectWithoutPetugasInput | TrashDepositCreateOrConnectWithoutPetugasInput[]
    upsert?: TrashDepositUpsertWithWhereUniqueWithoutPetugasInput | TrashDepositUpsertWithWhereUniqueWithoutPetugasInput[]
    createMany?: TrashDepositCreateManyPetugasInputEnvelope
    set?: TrashDepositWhereUniqueInput | TrashDepositWhereUniqueInput[]
    disconnect?: TrashDepositWhereUniqueInput | TrashDepositWhereUniqueInput[]
    delete?: TrashDepositWhereUniqueInput | TrashDepositWhereUniqueInput[]
    connect?: TrashDepositWhereUniqueInput | TrashDepositWhereUniqueInput[]
    update?: TrashDepositUpdateWithWhereUniqueWithoutPetugasInput | TrashDepositUpdateWithWhereUniqueWithoutPetugasInput[]
    updateMany?: TrashDepositUpdateManyWithWhereWithoutPetugasInput | TrashDepositUpdateManyWithWhereWithoutPetugasInput[]
    deleteMany?: TrashDepositScalarWhereInput | TrashDepositScalarWhereInput[]
  }

  export type TrashDepositUpdateManyWithoutUserNestedInput = {
    create?: XOR<TrashDepositCreateWithoutUserInput, TrashDepositUncheckedCreateWithoutUserInput> | TrashDepositCreateWithoutUserInput[] | TrashDepositUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TrashDepositCreateOrConnectWithoutUserInput | TrashDepositCreateOrConnectWithoutUserInput[]
    upsert?: TrashDepositUpsertWithWhereUniqueWithoutUserInput | TrashDepositUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TrashDepositCreateManyUserInputEnvelope
    set?: TrashDepositWhereUniqueInput | TrashDepositWhereUniqueInput[]
    disconnect?: TrashDepositWhereUniqueInput | TrashDepositWhereUniqueInput[]
    delete?: TrashDepositWhereUniqueInput | TrashDepositWhereUniqueInput[]
    connect?: TrashDepositWhereUniqueInput | TrashDepositWhereUniqueInput[]
    update?: TrashDepositUpdateWithWhereUniqueWithoutUserInput | TrashDepositUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TrashDepositUpdateManyWithWhereWithoutUserInput | TrashDepositUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TrashDepositScalarWhereInput | TrashDepositScalarWhereInput[]
  }

  export type WithdrawRequestUpdateManyWithoutUserNestedInput = {
    create?: XOR<WithdrawRequestCreateWithoutUserInput, WithdrawRequestUncheckedCreateWithoutUserInput> | WithdrawRequestCreateWithoutUserInput[] | WithdrawRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WithdrawRequestCreateOrConnectWithoutUserInput | WithdrawRequestCreateOrConnectWithoutUserInput[]
    upsert?: WithdrawRequestUpsertWithWhereUniqueWithoutUserInput | WithdrawRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WithdrawRequestCreateManyUserInputEnvelope
    set?: WithdrawRequestWhereUniqueInput | WithdrawRequestWhereUniqueInput[]
    disconnect?: WithdrawRequestWhereUniqueInput | WithdrawRequestWhereUniqueInput[]
    delete?: WithdrawRequestWhereUniqueInput | WithdrawRequestWhereUniqueInput[]
    connect?: WithdrawRequestWhereUniqueInput | WithdrawRequestWhereUniqueInput[]
    update?: WithdrawRequestUpdateWithWhereUniqueWithoutUserInput | WithdrawRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WithdrawRequestUpdateManyWithWhereWithoutUserInput | WithdrawRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WithdrawRequestScalarWhereInput | WithdrawRequestScalarWhereInput[]
  }

  export type BalanceTransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BalanceTransactionCreateWithoutUserInput, BalanceTransactionUncheckedCreateWithoutUserInput> | BalanceTransactionCreateWithoutUserInput[] | BalanceTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BalanceTransactionCreateOrConnectWithoutUserInput | BalanceTransactionCreateOrConnectWithoutUserInput[]
    upsert?: BalanceTransactionUpsertWithWhereUniqueWithoutUserInput | BalanceTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BalanceTransactionCreateManyUserInputEnvelope
    set?: BalanceTransactionWhereUniqueInput | BalanceTransactionWhereUniqueInput[]
    disconnect?: BalanceTransactionWhereUniqueInput | BalanceTransactionWhereUniqueInput[]
    delete?: BalanceTransactionWhereUniqueInput | BalanceTransactionWhereUniqueInput[]
    connect?: BalanceTransactionWhereUniqueInput | BalanceTransactionWhereUniqueInput[]
    update?: BalanceTransactionUpdateWithWhereUniqueWithoutUserInput | BalanceTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BalanceTransactionUpdateManyWithWhereWithoutUserInput | BalanceTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BalanceTransactionScalarWhereInput | BalanceTransactionScalarWhereInput[]
  }

  export type TrashDepositUncheckedUpdateManyWithoutPetugasNestedInput = {
    create?: XOR<TrashDepositCreateWithoutPetugasInput, TrashDepositUncheckedCreateWithoutPetugasInput> | TrashDepositCreateWithoutPetugasInput[] | TrashDepositUncheckedCreateWithoutPetugasInput[]
    connectOrCreate?: TrashDepositCreateOrConnectWithoutPetugasInput | TrashDepositCreateOrConnectWithoutPetugasInput[]
    upsert?: TrashDepositUpsertWithWhereUniqueWithoutPetugasInput | TrashDepositUpsertWithWhereUniqueWithoutPetugasInput[]
    createMany?: TrashDepositCreateManyPetugasInputEnvelope
    set?: TrashDepositWhereUniqueInput | TrashDepositWhereUniqueInput[]
    disconnect?: TrashDepositWhereUniqueInput | TrashDepositWhereUniqueInput[]
    delete?: TrashDepositWhereUniqueInput | TrashDepositWhereUniqueInput[]
    connect?: TrashDepositWhereUniqueInput | TrashDepositWhereUniqueInput[]
    update?: TrashDepositUpdateWithWhereUniqueWithoutPetugasInput | TrashDepositUpdateWithWhereUniqueWithoutPetugasInput[]
    updateMany?: TrashDepositUpdateManyWithWhereWithoutPetugasInput | TrashDepositUpdateManyWithWhereWithoutPetugasInput[]
    deleteMany?: TrashDepositScalarWhereInput | TrashDepositScalarWhereInput[]
  }

  export type TrashDepositUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TrashDepositCreateWithoutUserInput, TrashDepositUncheckedCreateWithoutUserInput> | TrashDepositCreateWithoutUserInput[] | TrashDepositUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TrashDepositCreateOrConnectWithoutUserInput | TrashDepositCreateOrConnectWithoutUserInput[]
    upsert?: TrashDepositUpsertWithWhereUniqueWithoutUserInput | TrashDepositUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TrashDepositCreateManyUserInputEnvelope
    set?: TrashDepositWhereUniqueInput | TrashDepositWhereUniqueInput[]
    disconnect?: TrashDepositWhereUniqueInput | TrashDepositWhereUniqueInput[]
    delete?: TrashDepositWhereUniqueInput | TrashDepositWhereUniqueInput[]
    connect?: TrashDepositWhereUniqueInput | TrashDepositWhereUniqueInput[]
    update?: TrashDepositUpdateWithWhereUniqueWithoutUserInput | TrashDepositUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TrashDepositUpdateManyWithWhereWithoutUserInput | TrashDepositUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TrashDepositScalarWhereInput | TrashDepositScalarWhereInput[]
  }

  export type WithdrawRequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WithdrawRequestCreateWithoutUserInput, WithdrawRequestUncheckedCreateWithoutUserInput> | WithdrawRequestCreateWithoutUserInput[] | WithdrawRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WithdrawRequestCreateOrConnectWithoutUserInput | WithdrawRequestCreateOrConnectWithoutUserInput[]
    upsert?: WithdrawRequestUpsertWithWhereUniqueWithoutUserInput | WithdrawRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WithdrawRequestCreateManyUserInputEnvelope
    set?: WithdrawRequestWhereUniqueInput | WithdrawRequestWhereUniqueInput[]
    disconnect?: WithdrawRequestWhereUniqueInput | WithdrawRequestWhereUniqueInput[]
    delete?: WithdrawRequestWhereUniqueInput | WithdrawRequestWhereUniqueInput[]
    connect?: WithdrawRequestWhereUniqueInput | WithdrawRequestWhereUniqueInput[]
    update?: WithdrawRequestUpdateWithWhereUniqueWithoutUserInput | WithdrawRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WithdrawRequestUpdateManyWithWhereWithoutUserInput | WithdrawRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WithdrawRequestScalarWhereInput | WithdrawRequestScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutHandledSetorInput = {
    create?: XOR<UserCreateWithoutHandledSetorInput, UserUncheckedCreateWithoutHandledSetorInput>
    connectOrCreate?: UserCreateOrConnectWithoutHandledSetorInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDepositsInput = {
    create?: XOR<UserCreateWithoutDepositsInput, UserUncheckedCreateWithoutDepositsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDepositsInput
    connect?: UserWhereUniqueInput
  }

  export type TrashDepositItemCreateNestedManyWithoutTrashDepositInput = {
    create?: XOR<TrashDepositItemCreateWithoutTrashDepositInput, TrashDepositItemUncheckedCreateWithoutTrashDepositInput> | TrashDepositItemCreateWithoutTrashDepositInput[] | TrashDepositItemUncheckedCreateWithoutTrashDepositInput[]
    connectOrCreate?: TrashDepositItemCreateOrConnectWithoutTrashDepositInput | TrashDepositItemCreateOrConnectWithoutTrashDepositInput[]
    createMany?: TrashDepositItemCreateManyTrashDepositInputEnvelope
    connect?: TrashDepositItemWhereUniqueInput | TrashDepositItemWhereUniqueInput[]
  }

  export type TrashDepositItemUncheckedCreateNestedManyWithoutTrashDepositInput = {
    create?: XOR<TrashDepositItemCreateWithoutTrashDepositInput, TrashDepositItemUncheckedCreateWithoutTrashDepositInput> | TrashDepositItemCreateWithoutTrashDepositInput[] | TrashDepositItemUncheckedCreateWithoutTrashDepositInput[]
    connectOrCreate?: TrashDepositItemCreateOrConnectWithoutTrashDepositInput | TrashDepositItemCreateOrConnectWithoutTrashDepositInput[]
    createMany?: TrashDepositItemCreateManyTrashDepositInputEnvelope
    connect?: TrashDepositItemWhereUniqueInput | TrashDepositItemWhereUniqueInput[]
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type UserUpdateOneWithoutHandledSetorNestedInput = {
    create?: XOR<UserCreateWithoutHandledSetorInput, UserUncheckedCreateWithoutHandledSetorInput>
    connectOrCreate?: UserCreateOrConnectWithoutHandledSetorInput
    upsert?: UserUpsertWithoutHandledSetorInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHandledSetorInput, UserUpdateWithoutHandledSetorInput>, UserUncheckedUpdateWithoutHandledSetorInput>
  }

  export type UserUpdateOneRequiredWithoutDepositsNestedInput = {
    create?: XOR<UserCreateWithoutDepositsInput, UserUncheckedCreateWithoutDepositsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDepositsInput
    upsert?: UserUpsertWithoutDepositsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDepositsInput, UserUpdateWithoutDepositsInput>, UserUncheckedUpdateWithoutDepositsInput>
  }

  export type TrashDepositItemUpdateManyWithoutTrashDepositNestedInput = {
    create?: XOR<TrashDepositItemCreateWithoutTrashDepositInput, TrashDepositItemUncheckedCreateWithoutTrashDepositInput> | TrashDepositItemCreateWithoutTrashDepositInput[] | TrashDepositItemUncheckedCreateWithoutTrashDepositInput[]
    connectOrCreate?: TrashDepositItemCreateOrConnectWithoutTrashDepositInput | TrashDepositItemCreateOrConnectWithoutTrashDepositInput[]
    upsert?: TrashDepositItemUpsertWithWhereUniqueWithoutTrashDepositInput | TrashDepositItemUpsertWithWhereUniqueWithoutTrashDepositInput[]
    createMany?: TrashDepositItemCreateManyTrashDepositInputEnvelope
    set?: TrashDepositItemWhereUniqueInput | TrashDepositItemWhereUniqueInput[]
    disconnect?: TrashDepositItemWhereUniqueInput | TrashDepositItemWhereUniqueInput[]
    delete?: TrashDepositItemWhereUniqueInput | TrashDepositItemWhereUniqueInput[]
    connect?: TrashDepositItemWhereUniqueInput | TrashDepositItemWhereUniqueInput[]
    update?: TrashDepositItemUpdateWithWhereUniqueWithoutTrashDepositInput | TrashDepositItemUpdateWithWhereUniqueWithoutTrashDepositInput[]
    updateMany?: TrashDepositItemUpdateManyWithWhereWithoutTrashDepositInput | TrashDepositItemUpdateManyWithWhereWithoutTrashDepositInput[]
    deleteMany?: TrashDepositItemScalarWhereInput | TrashDepositItemScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TrashDepositItemUncheckedUpdateManyWithoutTrashDepositNestedInput = {
    create?: XOR<TrashDepositItemCreateWithoutTrashDepositInput, TrashDepositItemUncheckedCreateWithoutTrashDepositInput> | TrashDepositItemCreateWithoutTrashDepositInput[] | TrashDepositItemUncheckedCreateWithoutTrashDepositInput[]
    connectOrCreate?: TrashDepositItemCreateOrConnectWithoutTrashDepositInput | TrashDepositItemCreateOrConnectWithoutTrashDepositInput[]
    upsert?: TrashDepositItemUpsertWithWhereUniqueWithoutTrashDepositInput | TrashDepositItemUpsertWithWhereUniqueWithoutTrashDepositInput[]
    createMany?: TrashDepositItemCreateManyTrashDepositInputEnvelope
    set?: TrashDepositItemWhereUniqueInput | TrashDepositItemWhereUniqueInput[]
    disconnect?: TrashDepositItemWhereUniqueInput | TrashDepositItemWhereUniqueInput[]
    delete?: TrashDepositItemWhereUniqueInput | TrashDepositItemWhereUniqueInput[]
    connect?: TrashDepositItemWhereUniqueInput | TrashDepositItemWhereUniqueInput[]
    update?: TrashDepositItemUpdateWithWhereUniqueWithoutTrashDepositInput | TrashDepositItemUpdateWithWhereUniqueWithoutTrashDepositInput[]
    updateMany?: TrashDepositItemUpdateManyWithWhereWithoutTrashDepositInput | TrashDepositItemUpdateManyWithWhereWithoutTrashDepositInput[]
    deleteMany?: TrashDepositItemScalarWhereInput | TrashDepositItemScalarWhereInput[]
  }

  export type TrashDepositCreateNestedOneWithoutItemsInput = {
    create?: XOR<TrashDepositCreateWithoutItemsInput, TrashDepositUncheckedCreateWithoutItemsInput>
    connectOrCreate?: TrashDepositCreateOrConnectWithoutItemsInput
    connect?: TrashDepositWhereUniqueInput
  }

  export type EnumTrashTypeFieldUpdateOperationsInput = {
    set?: $Enums.TrashType
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TrashDepositUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<TrashDepositCreateWithoutItemsInput, TrashDepositUncheckedCreateWithoutItemsInput>
    connectOrCreate?: TrashDepositCreateOrConnectWithoutItemsInput
    upsert?: TrashDepositUpsertWithoutItemsInput
    connect?: TrashDepositWhereUniqueInput
    update?: XOR<XOR<TrashDepositUpdateToOneWithWhereWithoutItemsInput, TrashDepositUpdateWithoutItemsInput>, TrashDepositUncheckedUpdateWithoutItemsInput>
  }

  export type UserCreateNestedOneWithoutBalanceTxsInput = {
    create?: XOR<UserCreateWithoutBalanceTxsInput, UserUncheckedCreateWithoutBalanceTxsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBalanceTxsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumBalanceRefTypeFieldUpdateOperationsInput = {
    set?: $Enums.BalanceRefType
  }

  export type UserUpdateOneRequiredWithoutBalanceTxsNestedInput = {
    create?: XOR<UserCreateWithoutBalanceTxsInput, UserUncheckedCreateWithoutBalanceTxsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBalanceTxsInput
    upsert?: UserUpsertWithoutBalanceTxsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBalanceTxsInput, UserUpdateWithoutBalanceTxsInput>, UserUncheckedUpdateWithoutBalanceTxsInput>
  }

  export type UserCreateNestedOneWithoutWithdrawsInput = {
    create?: XOR<UserCreateWithoutWithdrawsInput, UserUncheckedCreateWithoutWithdrawsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWithdrawsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumWithdrawStatusFieldUpdateOperationsInput = {
    set?: $Enums.WithdrawStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutWithdrawsNestedInput = {
    create?: XOR<UserCreateWithoutWithdrawsInput, UserUncheckedCreateWithoutWithdrawsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWithdrawsInput
    upsert?: UserUpsertWithoutWithdrawsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWithdrawsInput, UserUpdateWithoutWithdrawsInput>, UserUncheckedUpdateWithoutWithdrawsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedEnumTrashTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TrashType | EnumTrashTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TrashType[] | ListEnumTrashTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TrashType[] | ListEnumTrashTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTrashTypeFilter<$PrismaModel> | $Enums.TrashType
  }

  export type NestedEnumTrashTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TrashType | EnumTrashTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TrashType[] | ListEnumTrashTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TrashType[] | ListEnumTrashTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTrashTypeWithAggregatesFilter<$PrismaModel> | $Enums.TrashType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTrashTypeFilter<$PrismaModel>
    _max?: NestedEnumTrashTypeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumBalanceRefTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BalanceRefType | EnumBalanceRefTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BalanceRefType[] | ListEnumBalanceRefTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BalanceRefType[] | ListEnumBalanceRefTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBalanceRefTypeFilter<$PrismaModel> | $Enums.BalanceRefType
  }

  export type NestedEnumBalanceRefTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BalanceRefType | EnumBalanceRefTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BalanceRefType[] | ListEnumBalanceRefTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BalanceRefType[] | ListEnumBalanceRefTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBalanceRefTypeWithAggregatesFilter<$PrismaModel> | $Enums.BalanceRefType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBalanceRefTypeFilter<$PrismaModel>
    _max?: NestedEnumBalanceRefTypeFilter<$PrismaModel>
  }

  export type NestedEnumWithdrawStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WithdrawStatus | EnumWithdrawStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WithdrawStatus[] | ListEnumWithdrawStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WithdrawStatus[] | ListEnumWithdrawStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWithdrawStatusFilter<$PrismaModel> | $Enums.WithdrawStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumWithdrawStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WithdrawStatus | EnumWithdrawStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WithdrawStatus[] | ListEnumWithdrawStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WithdrawStatus[] | ListEnumWithdrawStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWithdrawStatusWithAggregatesFilter<$PrismaModel> | $Enums.WithdrawStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWithdrawStatusFilter<$PrismaModel>
    _max?: NestedEnumWithdrawStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BalanceTransactionCreateWithoutUserInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    reason: string
    refType: $Enums.BalanceRefType
    refId?: string | null
    createdAt?: Date | string
  }

  export type BalanceTransactionUncheckedCreateWithoutUserInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    reason: string
    refType: $Enums.BalanceRefType
    refId?: string | null
    createdAt?: Date | string
  }

  export type BalanceTransactionCreateOrConnectWithoutUserInput = {
    where: BalanceTransactionWhereUniqueInput
    create: XOR<BalanceTransactionCreateWithoutUserInput, BalanceTransactionUncheckedCreateWithoutUserInput>
  }

  export type BalanceTransactionCreateManyUserInputEnvelope = {
    data: BalanceTransactionCreateManyUserInput | BalanceTransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TrashDepositCreateWithoutPetugasInput = {
    id?: string
    status: $Enums.Status
    createdAt?: Date | string
    signature: string
    user: UserCreateNestedOneWithoutDepositsInput
    items?: TrashDepositItemCreateNestedManyWithoutTrashDepositInput
  }

  export type TrashDepositUncheckedCreateWithoutPetugasInput = {
    id?: string
    userId: string
    status: $Enums.Status
    createdAt?: Date | string
    signature: string
    items?: TrashDepositItemUncheckedCreateNestedManyWithoutTrashDepositInput
  }

  export type TrashDepositCreateOrConnectWithoutPetugasInput = {
    where: TrashDepositWhereUniqueInput
    create: XOR<TrashDepositCreateWithoutPetugasInput, TrashDepositUncheckedCreateWithoutPetugasInput>
  }

  export type TrashDepositCreateManyPetugasInputEnvelope = {
    data: TrashDepositCreateManyPetugasInput | TrashDepositCreateManyPetugasInput[]
    skipDuplicates?: boolean
  }

  export type TrashDepositCreateWithoutUserInput = {
    id?: string
    status: $Enums.Status
    createdAt?: Date | string
    signature: string
    petugas?: UserCreateNestedOneWithoutHandledSetorInput
    items?: TrashDepositItemCreateNestedManyWithoutTrashDepositInput
  }

  export type TrashDepositUncheckedCreateWithoutUserInput = {
    id?: string
    petugasId?: string | null
    status: $Enums.Status
    createdAt?: Date | string
    signature: string
    items?: TrashDepositItemUncheckedCreateNestedManyWithoutTrashDepositInput
  }

  export type TrashDepositCreateOrConnectWithoutUserInput = {
    where: TrashDepositWhereUniqueInput
    create: XOR<TrashDepositCreateWithoutUserInput, TrashDepositUncheckedCreateWithoutUserInput>
  }

  export type TrashDepositCreateManyUserInputEnvelope = {
    data: TrashDepositCreateManyUserInput | TrashDepositCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WithdrawRequestCreateWithoutUserInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    method: string
    destination: string
    status: $Enums.WithdrawStatus
    createdAt?: Date | string
    approvedAt?: Date | string | null
  }

  export type WithdrawRequestUncheckedCreateWithoutUserInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    method: string
    destination: string
    status: $Enums.WithdrawStatus
    createdAt?: Date | string
    approvedAt?: Date | string | null
  }

  export type WithdrawRequestCreateOrConnectWithoutUserInput = {
    where: WithdrawRequestWhereUniqueInput
    create: XOR<WithdrawRequestCreateWithoutUserInput, WithdrawRequestUncheckedCreateWithoutUserInput>
  }

  export type WithdrawRequestCreateManyUserInputEnvelope = {
    data: WithdrawRequestCreateManyUserInput | WithdrawRequestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BalanceTransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: BalanceTransactionWhereUniqueInput
    update: XOR<BalanceTransactionUpdateWithoutUserInput, BalanceTransactionUncheckedUpdateWithoutUserInput>
    create: XOR<BalanceTransactionCreateWithoutUserInput, BalanceTransactionUncheckedCreateWithoutUserInput>
  }

  export type BalanceTransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: BalanceTransactionWhereUniqueInput
    data: XOR<BalanceTransactionUpdateWithoutUserInput, BalanceTransactionUncheckedUpdateWithoutUserInput>
  }

  export type BalanceTransactionUpdateManyWithWhereWithoutUserInput = {
    where: BalanceTransactionScalarWhereInput
    data: XOR<BalanceTransactionUpdateManyMutationInput, BalanceTransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type BalanceTransactionScalarWhereInput = {
    AND?: BalanceTransactionScalarWhereInput | BalanceTransactionScalarWhereInput[]
    OR?: BalanceTransactionScalarWhereInput[]
    NOT?: BalanceTransactionScalarWhereInput | BalanceTransactionScalarWhereInput[]
    id?: StringFilter<"BalanceTransaction"> | string
    userId?: StringFilter<"BalanceTransaction"> | string
    amount?: DecimalFilter<"BalanceTransaction"> | Decimal | DecimalJsLike | number | string
    reason?: StringFilter<"BalanceTransaction"> | string
    refType?: EnumBalanceRefTypeFilter<"BalanceTransaction"> | $Enums.BalanceRefType
    refId?: StringNullableFilter<"BalanceTransaction"> | string | null
    createdAt?: DateTimeFilter<"BalanceTransaction"> | Date | string
  }

  export type TrashDepositUpsertWithWhereUniqueWithoutPetugasInput = {
    where: TrashDepositWhereUniqueInput
    update: XOR<TrashDepositUpdateWithoutPetugasInput, TrashDepositUncheckedUpdateWithoutPetugasInput>
    create: XOR<TrashDepositCreateWithoutPetugasInput, TrashDepositUncheckedCreateWithoutPetugasInput>
  }

  export type TrashDepositUpdateWithWhereUniqueWithoutPetugasInput = {
    where: TrashDepositWhereUniqueInput
    data: XOR<TrashDepositUpdateWithoutPetugasInput, TrashDepositUncheckedUpdateWithoutPetugasInput>
  }

  export type TrashDepositUpdateManyWithWhereWithoutPetugasInput = {
    where: TrashDepositScalarWhereInput
    data: XOR<TrashDepositUpdateManyMutationInput, TrashDepositUncheckedUpdateManyWithoutPetugasInput>
  }

  export type TrashDepositScalarWhereInput = {
    AND?: TrashDepositScalarWhereInput | TrashDepositScalarWhereInput[]
    OR?: TrashDepositScalarWhereInput[]
    NOT?: TrashDepositScalarWhereInput | TrashDepositScalarWhereInput[]
    id?: StringFilter<"TrashDeposit"> | string
    userId?: StringFilter<"TrashDeposit"> | string
    petugasId?: StringNullableFilter<"TrashDeposit"> | string | null
    status?: EnumStatusFilter<"TrashDeposit"> | $Enums.Status
    createdAt?: DateTimeFilter<"TrashDeposit"> | Date | string
    signature?: StringFilter<"TrashDeposit"> | string
  }

  export type TrashDepositUpsertWithWhereUniqueWithoutUserInput = {
    where: TrashDepositWhereUniqueInput
    update: XOR<TrashDepositUpdateWithoutUserInput, TrashDepositUncheckedUpdateWithoutUserInput>
    create: XOR<TrashDepositCreateWithoutUserInput, TrashDepositUncheckedCreateWithoutUserInput>
  }

  export type TrashDepositUpdateWithWhereUniqueWithoutUserInput = {
    where: TrashDepositWhereUniqueInput
    data: XOR<TrashDepositUpdateWithoutUserInput, TrashDepositUncheckedUpdateWithoutUserInput>
  }

  export type TrashDepositUpdateManyWithWhereWithoutUserInput = {
    where: TrashDepositScalarWhereInput
    data: XOR<TrashDepositUpdateManyMutationInput, TrashDepositUncheckedUpdateManyWithoutUserInput>
  }

  export type WithdrawRequestUpsertWithWhereUniqueWithoutUserInput = {
    where: WithdrawRequestWhereUniqueInput
    update: XOR<WithdrawRequestUpdateWithoutUserInput, WithdrawRequestUncheckedUpdateWithoutUserInput>
    create: XOR<WithdrawRequestCreateWithoutUserInput, WithdrawRequestUncheckedCreateWithoutUserInput>
  }

  export type WithdrawRequestUpdateWithWhereUniqueWithoutUserInput = {
    where: WithdrawRequestWhereUniqueInput
    data: XOR<WithdrawRequestUpdateWithoutUserInput, WithdrawRequestUncheckedUpdateWithoutUserInput>
  }

  export type WithdrawRequestUpdateManyWithWhereWithoutUserInput = {
    where: WithdrawRequestScalarWhereInput
    data: XOR<WithdrawRequestUpdateManyMutationInput, WithdrawRequestUncheckedUpdateManyWithoutUserInput>
  }

  export type WithdrawRequestScalarWhereInput = {
    AND?: WithdrawRequestScalarWhereInput | WithdrawRequestScalarWhereInput[]
    OR?: WithdrawRequestScalarWhereInput[]
    NOT?: WithdrawRequestScalarWhereInput | WithdrawRequestScalarWhereInput[]
    id?: StringFilter<"WithdrawRequest"> | string
    userId?: StringFilter<"WithdrawRequest"> | string
    amount?: DecimalFilter<"WithdrawRequest"> | Decimal | DecimalJsLike | number | string
    method?: StringFilter<"WithdrawRequest"> | string
    destination?: StringFilter<"WithdrawRequest"> | string
    status?: EnumWithdrawStatusFilter<"WithdrawRequest"> | $Enums.WithdrawStatus
    createdAt?: DateTimeFilter<"WithdrawRequest"> | Date | string
    approvedAt?: DateTimeNullableFilter<"WithdrawRequest"> | Date | string | null
  }

  export type UserCreateWithoutHandledSetorInput = {
    id?: string
    name: string
    email: string
    password: string
    points?: number
    balance?: Decimal | DecimalJsLike | number | string
    currentRank?: number | null
    lastRank?: number | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    balanceTxs?: BalanceTransactionCreateNestedManyWithoutUserInput
    deposits?: TrashDepositCreateNestedManyWithoutUserInput
    withdraws?: WithdrawRequestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHandledSetorInput = {
    id?: string
    name: string
    email: string
    password: string
    points?: number
    balance?: Decimal | DecimalJsLike | number | string
    currentRank?: number | null
    lastRank?: number | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    balanceTxs?: BalanceTransactionUncheckedCreateNestedManyWithoutUserInput
    deposits?: TrashDepositUncheckedCreateNestedManyWithoutUserInput
    withdraws?: WithdrawRequestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHandledSetorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHandledSetorInput, UserUncheckedCreateWithoutHandledSetorInput>
  }

  export type UserCreateWithoutDepositsInput = {
    id?: string
    name: string
    email: string
    password: string
    points?: number
    balance?: Decimal | DecimalJsLike | number | string
    currentRank?: number | null
    lastRank?: number | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    balanceTxs?: BalanceTransactionCreateNestedManyWithoutUserInput
    handledSetor?: TrashDepositCreateNestedManyWithoutPetugasInput
    withdraws?: WithdrawRequestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDepositsInput = {
    id?: string
    name: string
    email: string
    password: string
    points?: number
    balance?: Decimal | DecimalJsLike | number | string
    currentRank?: number | null
    lastRank?: number | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    balanceTxs?: BalanceTransactionUncheckedCreateNestedManyWithoutUserInput
    handledSetor?: TrashDepositUncheckedCreateNestedManyWithoutPetugasInput
    withdraws?: WithdrawRequestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDepositsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDepositsInput, UserUncheckedCreateWithoutDepositsInput>
  }

  export type TrashDepositItemCreateWithoutTrashDepositInput = {
    id?: string
    trashType: $Enums.TrashType
    weight: number
    points: number
  }

  export type TrashDepositItemUncheckedCreateWithoutTrashDepositInput = {
    id?: string
    trashType: $Enums.TrashType
    weight: number
    points: number
  }

  export type TrashDepositItemCreateOrConnectWithoutTrashDepositInput = {
    where: TrashDepositItemWhereUniqueInput
    create: XOR<TrashDepositItemCreateWithoutTrashDepositInput, TrashDepositItemUncheckedCreateWithoutTrashDepositInput>
  }

  export type TrashDepositItemCreateManyTrashDepositInputEnvelope = {
    data: TrashDepositItemCreateManyTrashDepositInput | TrashDepositItemCreateManyTrashDepositInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutHandledSetorInput = {
    update: XOR<UserUpdateWithoutHandledSetorInput, UserUncheckedUpdateWithoutHandledSetorInput>
    create: XOR<UserCreateWithoutHandledSetorInput, UserUncheckedCreateWithoutHandledSetorInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHandledSetorInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHandledSetorInput, UserUncheckedUpdateWithoutHandledSetorInput>
  }

  export type UserUpdateWithoutHandledSetorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentRank?: NullableIntFieldUpdateOperationsInput | number | null
    lastRank?: NullableIntFieldUpdateOperationsInput | number | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balanceTxs?: BalanceTransactionUpdateManyWithoutUserNestedInput
    deposits?: TrashDepositUpdateManyWithoutUserNestedInput
    withdraws?: WithdrawRequestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHandledSetorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentRank?: NullableIntFieldUpdateOperationsInput | number | null
    lastRank?: NullableIntFieldUpdateOperationsInput | number | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balanceTxs?: BalanceTransactionUncheckedUpdateManyWithoutUserNestedInput
    deposits?: TrashDepositUncheckedUpdateManyWithoutUserNestedInput
    withdraws?: WithdrawRequestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutDepositsInput = {
    update: XOR<UserUpdateWithoutDepositsInput, UserUncheckedUpdateWithoutDepositsInput>
    create: XOR<UserCreateWithoutDepositsInput, UserUncheckedCreateWithoutDepositsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDepositsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDepositsInput, UserUncheckedUpdateWithoutDepositsInput>
  }

  export type UserUpdateWithoutDepositsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentRank?: NullableIntFieldUpdateOperationsInput | number | null
    lastRank?: NullableIntFieldUpdateOperationsInput | number | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balanceTxs?: BalanceTransactionUpdateManyWithoutUserNestedInput
    handledSetor?: TrashDepositUpdateManyWithoutPetugasNestedInput
    withdraws?: WithdrawRequestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDepositsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentRank?: NullableIntFieldUpdateOperationsInput | number | null
    lastRank?: NullableIntFieldUpdateOperationsInput | number | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balanceTxs?: BalanceTransactionUncheckedUpdateManyWithoutUserNestedInput
    handledSetor?: TrashDepositUncheckedUpdateManyWithoutPetugasNestedInput
    withdraws?: WithdrawRequestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TrashDepositItemUpsertWithWhereUniqueWithoutTrashDepositInput = {
    where: TrashDepositItemWhereUniqueInput
    update: XOR<TrashDepositItemUpdateWithoutTrashDepositInput, TrashDepositItemUncheckedUpdateWithoutTrashDepositInput>
    create: XOR<TrashDepositItemCreateWithoutTrashDepositInput, TrashDepositItemUncheckedCreateWithoutTrashDepositInput>
  }

  export type TrashDepositItemUpdateWithWhereUniqueWithoutTrashDepositInput = {
    where: TrashDepositItemWhereUniqueInput
    data: XOR<TrashDepositItemUpdateWithoutTrashDepositInput, TrashDepositItemUncheckedUpdateWithoutTrashDepositInput>
  }

  export type TrashDepositItemUpdateManyWithWhereWithoutTrashDepositInput = {
    where: TrashDepositItemScalarWhereInput
    data: XOR<TrashDepositItemUpdateManyMutationInput, TrashDepositItemUncheckedUpdateManyWithoutTrashDepositInput>
  }

  export type TrashDepositItemScalarWhereInput = {
    AND?: TrashDepositItemScalarWhereInput | TrashDepositItemScalarWhereInput[]
    OR?: TrashDepositItemScalarWhereInput[]
    NOT?: TrashDepositItemScalarWhereInput | TrashDepositItemScalarWhereInput[]
    id?: StringFilter<"TrashDepositItem"> | string
    trashDepositId?: StringFilter<"TrashDepositItem"> | string
    trashType?: EnumTrashTypeFilter<"TrashDepositItem"> | $Enums.TrashType
    weight?: FloatFilter<"TrashDepositItem"> | number
    points?: IntFilter<"TrashDepositItem"> | number
  }

  export type TrashDepositCreateWithoutItemsInput = {
    id?: string
    status: $Enums.Status
    createdAt?: Date | string
    signature: string
    petugas?: UserCreateNestedOneWithoutHandledSetorInput
    user: UserCreateNestedOneWithoutDepositsInput
  }

  export type TrashDepositUncheckedCreateWithoutItemsInput = {
    id?: string
    userId: string
    petugasId?: string | null
    status: $Enums.Status
    createdAt?: Date | string
    signature: string
  }

  export type TrashDepositCreateOrConnectWithoutItemsInput = {
    where: TrashDepositWhereUniqueInput
    create: XOR<TrashDepositCreateWithoutItemsInput, TrashDepositUncheckedCreateWithoutItemsInput>
  }

  export type TrashDepositUpsertWithoutItemsInput = {
    update: XOR<TrashDepositUpdateWithoutItemsInput, TrashDepositUncheckedUpdateWithoutItemsInput>
    create: XOR<TrashDepositCreateWithoutItemsInput, TrashDepositUncheckedCreateWithoutItemsInput>
    where?: TrashDepositWhereInput
  }

  export type TrashDepositUpdateToOneWithWhereWithoutItemsInput = {
    where?: TrashDepositWhereInput
    data: XOR<TrashDepositUpdateWithoutItemsInput, TrashDepositUncheckedUpdateWithoutItemsInput>
  }

  export type TrashDepositUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signature?: StringFieldUpdateOperationsInput | string
    petugas?: UserUpdateOneWithoutHandledSetorNestedInput
    user?: UserUpdateOneRequiredWithoutDepositsNestedInput
  }

  export type TrashDepositUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    petugasId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signature?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutBalanceTxsInput = {
    id?: string
    name: string
    email: string
    password: string
    points?: number
    balance?: Decimal | DecimalJsLike | number | string
    currentRank?: number | null
    lastRank?: number | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    handledSetor?: TrashDepositCreateNestedManyWithoutPetugasInput
    deposits?: TrashDepositCreateNestedManyWithoutUserInput
    withdraws?: WithdrawRequestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBalanceTxsInput = {
    id?: string
    name: string
    email: string
    password: string
    points?: number
    balance?: Decimal | DecimalJsLike | number | string
    currentRank?: number | null
    lastRank?: number | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    handledSetor?: TrashDepositUncheckedCreateNestedManyWithoutPetugasInput
    deposits?: TrashDepositUncheckedCreateNestedManyWithoutUserInput
    withdraws?: WithdrawRequestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBalanceTxsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBalanceTxsInput, UserUncheckedCreateWithoutBalanceTxsInput>
  }

  export type UserUpsertWithoutBalanceTxsInput = {
    update: XOR<UserUpdateWithoutBalanceTxsInput, UserUncheckedUpdateWithoutBalanceTxsInput>
    create: XOR<UserCreateWithoutBalanceTxsInput, UserUncheckedCreateWithoutBalanceTxsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBalanceTxsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBalanceTxsInput, UserUncheckedUpdateWithoutBalanceTxsInput>
  }

  export type UserUpdateWithoutBalanceTxsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentRank?: NullableIntFieldUpdateOperationsInput | number | null
    lastRank?: NullableIntFieldUpdateOperationsInput | number | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    handledSetor?: TrashDepositUpdateManyWithoutPetugasNestedInput
    deposits?: TrashDepositUpdateManyWithoutUserNestedInput
    withdraws?: WithdrawRequestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBalanceTxsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentRank?: NullableIntFieldUpdateOperationsInput | number | null
    lastRank?: NullableIntFieldUpdateOperationsInput | number | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    handledSetor?: TrashDepositUncheckedUpdateManyWithoutPetugasNestedInput
    deposits?: TrashDepositUncheckedUpdateManyWithoutUserNestedInput
    withdraws?: WithdrawRequestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutWithdrawsInput = {
    id?: string
    name: string
    email: string
    password: string
    points?: number
    balance?: Decimal | DecimalJsLike | number | string
    currentRank?: number | null
    lastRank?: number | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    balanceTxs?: BalanceTransactionCreateNestedManyWithoutUserInput
    handledSetor?: TrashDepositCreateNestedManyWithoutPetugasInput
    deposits?: TrashDepositCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWithdrawsInput = {
    id?: string
    name: string
    email: string
    password: string
    points?: number
    balance?: Decimal | DecimalJsLike | number | string
    currentRank?: number | null
    lastRank?: number | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    balanceTxs?: BalanceTransactionUncheckedCreateNestedManyWithoutUserInput
    handledSetor?: TrashDepositUncheckedCreateNestedManyWithoutPetugasInput
    deposits?: TrashDepositUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWithdrawsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWithdrawsInput, UserUncheckedCreateWithoutWithdrawsInput>
  }

  export type UserUpsertWithoutWithdrawsInput = {
    update: XOR<UserUpdateWithoutWithdrawsInput, UserUncheckedUpdateWithoutWithdrawsInput>
    create: XOR<UserCreateWithoutWithdrawsInput, UserUncheckedCreateWithoutWithdrawsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWithdrawsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWithdrawsInput, UserUncheckedUpdateWithoutWithdrawsInput>
  }

  export type UserUpdateWithoutWithdrawsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentRank?: NullableIntFieldUpdateOperationsInput | number | null
    lastRank?: NullableIntFieldUpdateOperationsInput | number | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balanceTxs?: BalanceTransactionUpdateManyWithoutUserNestedInput
    handledSetor?: TrashDepositUpdateManyWithoutPetugasNestedInput
    deposits?: TrashDepositUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWithdrawsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentRank?: NullableIntFieldUpdateOperationsInput | number | null
    lastRank?: NullableIntFieldUpdateOperationsInput | number | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balanceTxs?: BalanceTransactionUncheckedUpdateManyWithoutUserNestedInput
    handledSetor?: TrashDepositUncheckedUpdateManyWithoutPetugasNestedInput
    deposits?: TrashDepositUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BalanceTransactionCreateManyUserInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    reason: string
    refType: $Enums.BalanceRefType
    refId?: string | null
    createdAt?: Date | string
  }

  export type TrashDepositCreateManyPetugasInput = {
    id?: string
    userId: string
    status: $Enums.Status
    createdAt?: Date | string
    signature: string
  }

  export type TrashDepositCreateManyUserInput = {
    id?: string
    petugasId?: string | null
    status: $Enums.Status
    createdAt?: Date | string
    signature: string
  }

  export type WithdrawRequestCreateManyUserInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    method: string
    destination: string
    status: $Enums.WithdrawStatus
    createdAt?: Date | string
    approvedAt?: Date | string | null
  }

  export type BalanceTransactionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reason?: StringFieldUpdateOperationsInput | string
    refType?: EnumBalanceRefTypeFieldUpdateOperationsInput | $Enums.BalanceRefType
    refId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BalanceTransactionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reason?: StringFieldUpdateOperationsInput | string
    refType?: EnumBalanceRefTypeFieldUpdateOperationsInput | $Enums.BalanceRefType
    refId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BalanceTransactionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reason?: StringFieldUpdateOperationsInput | string
    refType?: EnumBalanceRefTypeFieldUpdateOperationsInput | $Enums.BalanceRefType
    refId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrashDepositUpdateWithoutPetugasInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signature?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutDepositsNestedInput
    items?: TrashDepositItemUpdateManyWithoutTrashDepositNestedInput
  }

  export type TrashDepositUncheckedUpdateWithoutPetugasInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signature?: StringFieldUpdateOperationsInput | string
    items?: TrashDepositItemUncheckedUpdateManyWithoutTrashDepositNestedInput
  }

  export type TrashDepositUncheckedUpdateManyWithoutPetugasInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signature?: StringFieldUpdateOperationsInput | string
  }

  export type TrashDepositUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signature?: StringFieldUpdateOperationsInput | string
    petugas?: UserUpdateOneWithoutHandledSetorNestedInput
    items?: TrashDepositItemUpdateManyWithoutTrashDepositNestedInput
  }

  export type TrashDepositUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    petugasId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signature?: StringFieldUpdateOperationsInput | string
    items?: TrashDepositItemUncheckedUpdateManyWithoutTrashDepositNestedInput
  }

  export type TrashDepositUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    petugasId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signature?: StringFieldUpdateOperationsInput | string
  }

  export type WithdrawRequestUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    status?: EnumWithdrawStatusFieldUpdateOperationsInput | $Enums.WithdrawStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WithdrawRequestUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    status?: EnumWithdrawStatusFieldUpdateOperationsInput | $Enums.WithdrawStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WithdrawRequestUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    status?: EnumWithdrawStatusFieldUpdateOperationsInput | $Enums.WithdrawStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TrashDepositItemCreateManyTrashDepositInput = {
    id?: string
    trashType: $Enums.TrashType
    weight: number
    points: number
  }

  export type TrashDepositItemUpdateWithoutTrashDepositInput = {
    id?: StringFieldUpdateOperationsInput | string
    trashType?: EnumTrashTypeFieldUpdateOperationsInput | $Enums.TrashType
    weight?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
  }

  export type TrashDepositItemUncheckedUpdateWithoutTrashDepositInput = {
    id?: StringFieldUpdateOperationsInput | string
    trashType?: EnumTrashTypeFieldUpdateOperationsInput | $Enums.TrashType
    weight?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
  }

  export type TrashDepositItemUncheckedUpdateManyWithoutTrashDepositInput = {
    id?: StringFieldUpdateOperationsInput | string
    trashType?: EnumTrashTypeFieldUpdateOperationsInput | $Enums.TrashType
    weight?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}