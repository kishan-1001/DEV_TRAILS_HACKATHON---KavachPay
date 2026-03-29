
/**
 * Client
**/

import * as runtime from './runtime/client.js';
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
 * Model OtpVerification
 * 
 */
export type OtpVerification = $Result.DefaultSelection<Prisma.$OtpVerificationPayload>
/**
 * Model Policy
 * 
 */
export type Policy = $Result.DefaultSelection<Prisma.$PolicyPayload>
/**
 * Model WorkSession
 * 
 */
export type WorkSession = $Result.DefaultSelection<Prisma.$WorkSessionPayload>
/**
 * Model EnvironmentalEvent
 * 
 */
export type EnvironmentalEvent = $Result.DefaultSelection<Prisma.$EnvironmentalEventPayload>
/**
 * Model Claim
 * 
 */
export type Claim = $Result.DefaultSelection<Prisma.$ClaimPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  WORKER: 'WORKER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const PlanTier: {
  BASIC: 'BASIC',
  STANDARD: 'STANDARD',
  PREMIUM: 'PREMIUM'
};

export type PlanTier = (typeof PlanTier)[keyof typeof PlanTier]


export const PolicyStatus: {
  ACTIVE: 'ACTIVE',
  EXPIRED: 'EXPIRED',
  CANCELLED: 'CANCELLED'
};

export type PolicyStatus = (typeof PolicyStatus)[keyof typeof PolicyStatus]


export const ClaimStatus: {
  PENDING: 'PENDING',
  PAID: 'PAID',
  REVIEW: 'REVIEW',
  REJECTED: 'REJECTED',
  APPEALED: 'APPEALED'
};

export type ClaimStatus = (typeof ClaimStatus)[keyof typeof ClaimStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type PlanTier = $Enums.PlanTier

export const PlanTier: typeof $Enums.PlanTier

export type PolicyStatus = $Enums.PolicyStatus

export const PolicyStatus: typeof $Enums.PolicyStatus

export type ClaimStatus = $Enums.ClaimStatus

export const ClaimStatus: typeof $Enums.ClaimStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
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
   * `prisma.otpVerification`: Exposes CRUD operations for the **OtpVerification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OtpVerifications
    * const otpVerifications = await prisma.otpVerification.findMany()
    * ```
    */
  get otpVerification(): Prisma.OtpVerificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.policy`: Exposes CRUD operations for the **Policy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Policies
    * const policies = await prisma.policy.findMany()
    * ```
    */
  get policy(): Prisma.PolicyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workSession`: Exposes CRUD operations for the **WorkSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkSessions
    * const workSessions = await prisma.workSession.findMany()
    * ```
    */
  get workSession(): Prisma.WorkSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.environmentalEvent`: Exposes CRUD operations for the **EnvironmentalEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EnvironmentalEvents
    * const environmentalEvents = await prisma.environmentalEvent.findMany()
    * ```
    */
  get environmentalEvent(): Prisma.EnvironmentalEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.claim`: Exposes CRUD operations for the **Claim** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Claims
    * const claims = await prisma.claim.findMany()
    * ```
    */
  get claim(): Prisma.ClaimDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.6.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    OtpVerification: 'OtpVerification',
    Policy: 'Policy',
    WorkSession: 'WorkSession',
    EnvironmentalEvent: 'EnvironmentalEvent',
    Claim: 'Claim'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "otpVerification" | "policy" | "workSession" | "environmentalEvent" | "claim"
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
      OtpVerification: {
        payload: Prisma.$OtpVerificationPayload<ExtArgs>
        fields: Prisma.OtpVerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OtpVerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpVerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OtpVerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpVerificationPayload>
          }
          findFirst: {
            args: Prisma.OtpVerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpVerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OtpVerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpVerificationPayload>
          }
          findMany: {
            args: Prisma.OtpVerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpVerificationPayload>[]
          }
          create: {
            args: Prisma.OtpVerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpVerificationPayload>
          }
          createMany: {
            args: Prisma.OtpVerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OtpVerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpVerificationPayload>[]
          }
          delete: {
            args: Prisma.OtpVerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpVerificationPayload>
          }
          update: {
            args: Prisma.OtpVerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpVerificationPayload>
          }
          deleteMany: {
            args: Prisma.OtpVerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OtpVerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OtpVerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpVerificationPayload>[]
          }
          upsert: {
            args: Prisma.OtpVerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpVerificationPayload>
          }
          aggregate: {
            args: Prisma.OtpVerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOtpVerification>
          }
          groupBy: {
            args: Prisma.OtpVerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OtpVerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OtpVerificationCountArgs<ExtArgs>
            result: $Utils.Optional<OtpVerificationCountAggregateOutputType> | number
          }
        }
      }
      Policy: {
        payload: Prisma.$PolicyPayload<ExtArgs>
        fields: Prisma.PolicyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PolicyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PolicyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>
          }
          findFirst: {
            args: Prisma.PolicyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PolicyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>
          }
          findMany: {
            args: Prisma.PolicyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>[]
          }
          create: {
            args: Prisma.PolicyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>
          }
          createMany: {
            args: Prisma.PolicyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PolicyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>[]
          }
          delete: {
            args: Prisma.PolicyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>
          }
          update: {
            args: Prisma.PolicyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>
          }
          deleteMany: {
            args: Prisma.PolicyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PolicyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PolicyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>[]
          }
          upsert: {
            args: Prisma.PolicyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>
          }
          aggregate: {
            args: Prisma.PolicyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePolicy>
          }
          groupBy: {
            args: Prisma.PolicyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PolicyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PolicyCountArgs<ExtArgs>
            result: $Utils.Optional<PolicyCountAggregateOutputType> | number
          }
        }
      }
      WorkSession: {
        payload: Prisma.$WorkSessionPayload<ExtArgs>
        fields: Prisma.WorkSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSessionPayload>
          }
          findFirst: {
            args: Prisma.WorkSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSessionPayload>
          }
          findMany: {
            args: Prisma.WorkSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSessionPayload>[]
          }
          create: {
            args: Prisma.WorkSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSessionPayload>
          }
          createMany: {
            args: Prisma.WorkSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSessionPayload>[]
          }
          delete: {
            args: Prisma.WorkSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSessionPayload>
          }
          update: {
            args: Prisma.WorkSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSessionPayload>
          }
          deleteMany: {
            args: Prisma.WorkSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSessionPayload>[]
          }
          upsert: {
            args: Prisma.WorkSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSessionPayload>
          }
          aggregate: {
            args: Prisma.WorkSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkSession>
          }
          groupBy: {
            args: Prisma.WorkSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkSessionCountArgs<ExtArgs>
            result: $Utils.Optional<WorkSessionCountAggregateOutputType> | number
          }
        }
      }
      EnvironmentalEvent: {
        payload: Prisma.$EnvironmentalEventPayload<ExtArgs>
        fields: Prisma.EnvironmentalEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnvironmentalEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentalEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnvironmentalEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentalEventPayload>
          }
          findFirst: {
            args: Prisma.EnvironmentalEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentalEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnvironmentalEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentalEventPayload>
          }
          findMany: {
            args: Prisma.EnvironmentalEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentalEventPayload>[]
          }
          create: {
            args: Prisma.EnvironmentalEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentalEventPayload>
          }
          createMany: {
            args: Prisma.EnvironmentalEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnvironmentalEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentalEventPayload>[]
          }
          delete: {
            args: Prisma.EnvironmentalEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentalEventPayload>
          }
          update: {
            args: Prisma.EnvironmentalEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentalEventPayload>
          }
          deleteMany: {
            args: Prisma.EnvironmentalEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnvironmentalEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnvironmentalEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentalEventPayload>[]
          }
          upsert: {
            args: Prisma.EnvironmentalEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentalEventPayload>
          }
          aggregate: {
            args: Prisma.EnvironmentalEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnvironmentalEvent>
          }
          groupBy: {
            args: Prisma.EnvironmentalEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnvironmentalEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnvironmentalEventCountArgs<ExtArgs>
            result: $Utils.Optional<EnvironmentalEventCountAggregateOutputType> | number
          }
        }
      }
      Claim: {
        payload: Prisma.$ClaimPayload<ExtArgs>
        fields: Prisma.ClaimFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClaimFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClaimFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>
          }
          findFirst: {
            args: Prisma.ClaimFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClaimFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>
          }
          findMany: {
            args: Prisma.ClaimFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>[]
          }
          create: {
            args: Prisma.ClaimCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>
          }
          createMany: {
            args: Prisma.ClaimCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClaimCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>[]
          }
          delete: {
            args: Prisma.ClaimDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>
          }
          update: {
            args: Prisma.ClaimUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>
          }
          deleteMany: {
            args: Prisma.ClaimDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClaimUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClaimUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>[]
          }
          upsert: {
            args: Prisma.ClaimUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>
          }
          aggregate: {
            args: Prisma.ClaimAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClaim>
          }
          groupBy: {
            args: Prisma.ClaimGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClaimGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClaimCountArgs<ExtArgs>
            result: $Utils.Optional<ClaimCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    otpVerification?: OtpVerificationOmit
    policy?: PolicyOmit
    workSession?: WorkSessionOmit
    environmentalEvent?: EnvironmentalEventOmit
    claim?: ClaimOmit
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
    policies: number
    claims: number
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    policies?: boolean | UserCountOutputTypeCountPoliciesArgs
    claims?: boolean | UserCountOutputTypeCountClaimsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
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
  export type UserCountOutputTypeCountPoliciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PolicyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountClaimsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClaimWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkSessionWhereInput
  }


  /**
   * Count Type PolicyCountOutputType
   */

  export type PolicyCountOutputType = {
    claims: number
  }

  export type PolicyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    claims?: boolean | PolicyCountOutputTypeCountClaimsArgs
  }

  // Custom InputTypes
  /**
   * PolicyCountOutputType without action
   */
  export type PolicyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyCountOutputType
     */
    select?: PolicyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PolicyCountOutputType without action
   */
  export type PolicyCountOutputTypeCountClaimsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClaimWhereInput
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
    weeklyEarnings: number | null
    trustScore: number | null
  }

  export type UserSumAggregateOutputType = {
    weeklyEarnings: number | null
    trustScore: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    phoneNumber: string | null
    role: $Enums.Role | null
    city: string | null
    deliveryPlatform: string | null
    vehicleType: string | null
    weeklyEarnings: number | null
    upiId: string | null
    trustScore: number | null
    isVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    phoneNumber: string | null
    role: $Enums.Role | null
    city: string | null
    deliveryPlatform: string | null
    vehicleType: string | null
    weeklyEarnings: number | null
    upiId: string | null
    trustScore: number | null
    isVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fullName: number
    phoneNumber: number
    role: number
    city: number
    deliveryPlatform: number
    vehicleType: number
    weeklyEarnings: number
    upiId: number
    trustScore: number
    isVerified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    weeklyEarnings?: true
    trustScore?: true
  }

  export type UserSumAggregateInputType = {
    weeklyEarnings?: true
    trustScore?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    fullName?: true
    phoneNumber?: true
    role?: true
    city?: true
    deliveryPlatform?: true
    vehicleType?: true
    weeklyEarnings?: true
    upiId?: true
    trustScore?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fullName?: true
    phoneNumber?: true
    role?: true
    city?: true
    deliveryPlatform?: true
    vehicleType?: true
    weeklyEarnings?: true
    upiId?: true
    trustScore?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fullName?: true
    phoneNumber?: true
    role?: true
    city?: true
    deliveryPlatform?: true
    vehicleType?: true
    weeklyEarnings?: true
    upiId?: true
    trustScore?: true
    isVerified?: true
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
    fullName: string
    phoneNumber: string
    role: $Enums.Role
    city: string
    deliveryPlatform: string
    vehicleType: string
    weeklyEarnings: number
    upiId: string | null
    trustScore: number
    isVerified: boolean
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
    fullName?: boolean
    phoneNumber?: boolean
    role?: boolean
    city?: boolean
    deliveryPlatform?: boolean
    vehicleType?: boolean
    weeklyEarnings?: boolean
    upiId?: boolean
    trustScore?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    policies?: boolean | User$policiesArgs<ExtArgs>
    claims?: boolean | User$claimsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    phoneNumber?: boolean
    role?: boolean
    city?: boolean
    deliveryPlatform?: boolean
    vehicleType?: boolean
    weeklyEarnings?: boolean
    upiId?: boolean
    trustScore?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    phoneNumber?: boolean
    role?: boolean
    city?: boolean
    deliveryPlatform?: boolean
    vehicleType?: boolean
    weeklyEarnings?: boolean
    upiId?: boolean
    trustScore?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    fullName?: boolean
    phoneNumber?: boolean
    role?: boolean
    city?: boolean
    deliveryPlatform?: boolean
    vehicleType?: boolean
    weeklyEarnings?: boolean
    upiId?: boolean
    trustScore?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "phoneNumber" | "role" | "city" | "deliveryPlatform" | "vehicleType" | "weeklyEarnings" | "upiId" | "trustScore" | "isVerified" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    policies?: boolean | User$policiesArgs<ExtArgs>
    claims?: boolean | User$claimsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      policies: Prisma.$PolicyPayload<ExtArgs>[]
      claims: Prisma.$ClaimPayload<ExtArgs>[]
      sessions: Prisma.$WorkSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      phoneNumber: string
      role: $Enums.Role
      city: string
      deliveryPlatform: string
      vehicleType: string
      weeklyEarnings: number
      upiId: string | null
      trustScore: number
      isVerified: boolean
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
    policies<T extends User$policiesArgs<ExtArgs> = {}>(args?: Subset<T, User$policiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    claims<T extends User$claimsArgs<ExtArgs> = {}>(args?: Subset<T, User$claimsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly fullName: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly city: FieldRef<"User", 'String'>
    readonly deliveryPlatform: FieldRef<"User", 'String'>
    readonly vehicleType: FieldRef<"User", 'String'>
    readonly weeklyEarnings: FieldRef<"User", 'Int'>
    readonly upiId: FieldRef<"User", 'String'>
    readonly trustScore: FieldRef<"User", 'Float'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
   * User.policies
   */
  export type User$policiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    where?: PolicyWhereInput
    orderBy?: PolicyOrderByWithRelationInput | PolicyOrderByWithRelationInput[]
    cursor?: PolicyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PolicyScalarFieldEnum | PolicyScalarFieldEnum[]
  }

  /**
   * User.claims
   */
  export type User$claimsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    where?: ClaimWhereInput
    orderBy?: ClaimOrderByWithRelationInput | ClaimOrderByWithRelationInput[]
    cursor?: ClaimWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClaimScalarFieldEnum | ClaimScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSession
     */
    select?: WorkSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSession
     */
    omit?: WorkSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkSessionInclude<ExtArgs> | null
    where?: WorkSessionWhereInput
    orderBy?: WorkSessionOrderByWithRelationInput | WorkSessionOrderByWithRelationInput[]
    cursor?: WorkSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkSessionScalarFieldEnum | WorkSessionScalarFieldEnum[]
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
   * Model OtpVerification
   */

  export type AggregateOtpVerification = {
    _count: OtpVerificationCountAggregateOutputType | null
    _min: OtpVerificationMinAggregateOutputType | null
    _max: OtpVerificationMaxAggregateOutputType | null
  }

  export type OtpVerificationMinAggregateOutputType = {
    id: string | null
    phoneNumber: string | null
    otpCode: string | null
    expiresAt: Date | null
    verified: boolean | null
    createdAt: Date | null
  }

  export type OtpVerificationMaxAggregateOutputType = {
    id: string | null
    phoneNumber: string | null
    otpCode: string | null
    expiresAt: Date | null
    verified: boolean | null
    createdAt: Date | null
  }

  export type OtpVerificationCountAggregateOutputType = {
    id: number
    phoneNumber: number
    otpCode: number
    expiresAt: number
    verified: number
    createdAt: number
    _all: number
  }


  export type OtpVerificationMinAggregateInputType = {
    id?: true
    phoneNumber?: true
    otpCode?: true
    expiresAt?: true
    verified?: true
    createdAt?: true
  }

  export type OtpVerificationMaxAggregateInputType = {
    id?: true
    phoneNumber?: true
    otpCode?: true
    expiresAt?: true
    verified?: true
    createdAt?: true
  }

  export type OtpVerificationCountAggregateInputType = {
    id?: true
    phoneNumber?: true
    otpCode?: true
    expiresAt?: true
    verified?: true
    createdAt?: true
    _all?: true
  }

  export type OtpVerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OtpVerification to aggregate.
     */
    where?: OtpVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtpVerifications to fetch.
     */
    orderBy?: OtpVerificationOrderByWithRelationInput | OtpVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OtpVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtpVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtpVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OtpVerifications
    **/
    _count?: true | OtpVerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OtpVerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OtpVerificationMaxAggregateInputType
  }

  export type GetOtpVerificationAggregateType<T extends OtpVerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateOtpVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOtpVerification[P]>
      : GetScalarType<T[P], AggregateOtpVerification[P]>
  }




  export type OtpVerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtpVerificationWhereInput
    orderBy?: OtpVerificationOrderByWithAggregationInput | OtpVerificationOrderByWithAggregationInput[]
    by: OtpVerificationScalarFieldEnum[] | OtpVerificationScalarFieldEnum
    having?: OtpVerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OtpVerificationCountAggregateInputType | true
    _min?: OtpVerificationMinAggregateInputType
    _max?: OtpVerificationMaxAggregateInputType
  }

  export type OtpVerificationGroupByOutputType = {
    id: string
    phoneNumber: string
    otpCode: string
    expiresAt: Date
    verified: boolean
    createdAt: Date
    _count: OtpVerificationCountAggregateOutputType | null
    _min: OtpVerificationMinAggregateOutputType | null
    _max: OtpVerificationMaxAggregateOutputType | null
  }

  type GetOtpVerificationGroupByPayload<T extends OtpVerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OtpVerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OtpVerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OtpVerificationGroupByOutputType[P]>
            : GetScalarType<T[P], OtpVerificationGroupByOutputType[P]>
        }
      >
    >


  export type OtpVerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phoneNumber?: boolean
    otpCode?: boolean
    expiresAt?: boolean
    verified?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["otpVerification"]>

  export type OtpVerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phoneNumber?: boolean
    otpCode?: boolean
    expiresAt?: boolean
    verified?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["otpVerification"]>

  export type OtpVerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phoneNumber?: boolean
    otpCode?: boolean
    expiresAt?: boolean
    verified?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["otpVerification"]>

  export type OtpVerificationSelectScalar = {
    id?: boolean
    phoneNumber?: boolean
    otpCode?: boolean
    expiresAt?: boolean
    verified?: boolean
    createdAt?: boolean
  }

  export type OtpVerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "phoneNumber" | "otpCode" | "expiresAt" | "verified" | "createdAt", ExtArgs["result"]["otpVerification"]>

  export type $OtpVerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OtpVerification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      phoneNumber: string
      otpCode: string
      expiresAt: Date
      verified: boolean
      createdAt: Date
    }, ExtArgs["result"]["otpVerification"]>
    composites: {}
  }

  type OtpVerificationGetPayload<S extends boolean | null | undefined | OtpVerificationDefaultArgs> = $Result.GetResult<Prisma.$OtpVerificationPayload, S>

  type OtpVerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OtpVerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OtpVerificationCountAggregateInputType | true
    }

  export interface OtpVerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OtpVerification'], meta: { name: 'OtpVerification' } }
    /**
     * Find zero or one OtpVerification that matches the filter.
     * @param {OtpVerificationFindUniqueArgs} args - Arguments to find a OtpVerification
     * @example
     * // Get one OtpVerification
     * const otpVerification = await prisma.otpVerification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OtpVerificationFindUniqueArgs>(args: SelectSubset<T, OtpVerificationFindUniqueArgs<ExtArgs>>): Prisma__OtpVerificationClient<$Result.GetResult<Prisma.$OtpVerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OtpVerification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OtpVerificationFindUniqueOrThrowArgs} args - Arguments to find a OtpVerification
     * @example
     * // Get one OtpVerification
     * const otpVerification = await prisma.otpVerification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OtpVerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, OtpVerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OtpVerificationClient<$Result.GetResult<Prisma.$OtpVerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OtpVerification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpVerificationFindFirstArgs} args - Arguments to find a OtpVerification
     * @example
     * // Get one OtpVerification
     * const otpVerification = await prisma.otpVerification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OtpVerificationFindFirstArgs>(args?: SelectSubset<T, OtpVerificationFindFirstArgs<ExtArgs>>): Prisma__OtpVerificationClient<$Result.GetResult<Prisma.$OtpVerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OtpVerification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpVerificationFindFirstOrThrowArgs} args - Arguments to find a OtpVerification
     * @example
     * // Get one OtpVerification
     * const otpVerification = await prisma.otpVerification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OtpVerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, OtpVerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OtpVerificationClient<$Result.GetResult<Prisma.$OtpVerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OtpVerifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpVerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OtpVerifications
     * const otpVerifications = await prisma.otpVerification.findMany()
     * 
     * // Get first 10 OtpVerifications
     * const otpVerifications = await prisma.otpVerification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const otpVerificationWithIdOnly = await prisma.otpVerification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OtpVerificationFindManyArgs>(args?: SelectSubset<T, OtpVerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpVerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OtpVerification.
     * @param {OtpVerificationCreateArgs} args - Arguments to create a OtpVerification.
     * @example
     * // Create one OtpVerification
     * const OtpVerification = await prisma.otpVerification.create({
     *   data: {
     *     // ... data to create a OtpVerification
     *   }
     * })
     * 
     */
    create<T extends OtpVerificationCreateArgs>(args: SelectSubset<T, OtpVerificationCreateArgs<ExtArgs>>): Prisma__OtpVerificationClient<$Result.GetResult<Prisma.$OtpVerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OtpVerifications.
     * @param {OtpVerificationCreateManyArgs} args - Arguments to create many OtpVerifications.
     * @example
     * // Create many OtpVerifications
     * const otpVerification = await prisma.otpVerification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OtpVerificationCreateManyArgs>(args?: SelectSubset<T, OtpVerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OtpVerifications and returns the data saved in the database.
     * @param {OtpVerificationCreateManyAndReturnArgs} args - Arguments to create many OtpVerifications.
     * @example
     * // Create many OtpVerifications
     * const otpVerification = await prisma.otpVerification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OtpVerifications and only return the `id`
     * const otpVerificationWithIdOnly = await prisma.otpVerification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OtpVerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, OtpVerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpVerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OtpVerification.
     * @param {OtpVerificationDeleteArgs} args - Arguments to delete one OtpVerification.
     * @example
     * // Delete one OtpVerification
     * const OtpVerification = await prisma.otpVerification.delete({
     *   where: {
     *     // ... filter to delete one OtpVerification
     *   }
     * })
     * 
     */
    delete<T extends OtpVerificationDeleteArgs>(args: SelectSubset<T, OtpVerificationDeleteArgs<ExtArgs>>): Prisma__OtpVerificationClient<$Result.GetResult<Prisma.$OtpVerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OtpVerification.
     * @param {OtpVerificationUpdateArgs} args - Arguments to update one OtpVerification.
     * @example
     * // Update one OtpVerification
     * const otpVerification = await prisma.otpVerification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OtpVerificationUpdateArgs>(args: SelectSubset<T, OtpVerificationUpdateArgs<ExtArgs>>): Prisma__OtpVerificationClient<$Result.GetResult<Prisma.$OtpVerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OtpVerifications.
     * @param {OtpVerificationDeleteManyArgs} args - Arguments to filter OtpVerifications to delete.
     * @example
     * // Delete a few OtpVerifications
     * const { count } = await prisma.otpVerification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OtpVerificationDeleteManyArgs>(args?: SelectSubset<T, OtpVerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OtpVerifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpVerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OtpVerifications
     * const otpVerification = await prisma.otpVerification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OtpVerificationUpdateManyArgs>(args: SelectSubset<T, OtpVerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OtpVerifications and returns the data updated in the database.
     * @param {OtpVerificationUpdateManyAndReturnArgs} args - Arguments to update many OtpVerifications.
     * @example
     * // Update many OtpVerifications
     * const otpVerification = await prisma.otpVerification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OtpVerifications and only return the `id`
     * const otpVerificationWithIdOnly = await prisma.otpVerification.updateManyAndReturn({
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
    updateManyAndReturn<T extends OtpVerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, OtpVerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpVerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OtpVerification.
     * @param {OtpVerificationUpsertArgs} args - Arguments to update or create a OtpVerification.
     * @example
     * // Update or create a OtpVerification
     * const otpVerification = await prisma.otpVerification.upsert({
     *   create: {
     *     // ... data to create a OtpVerification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OtpVerification we want to update
     *   }
     * })
     */
    upsert<T extends OtpVerificationUpsertArgs>(args: SelectSubset<T, OtpVerificationUpsertArgs<ExtArgs>>): Prisma__OtpVerificationClient<$Result.GetResult<Prisma.$OtpVerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OtpVerifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpVerificationCountArgs} args - Arguments to filter OtpVerifications to count.
     * @example
     * // Count the number of OtpVerifications
     * const count = await prisma.otpVerification.count({
     *   where: {
     *     // ... the filter for the OtpVerifications we want to count
     *   }
     * })
    **/
    count<T extends OtpVerificationCountArgs>(
      args?: Subset<T, OtpVerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OtpVerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OtpVerification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpVerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OtpVerificationAggregateArgs>(args: Subset<T, OtpVerificationAggregateArgs>): Prisma.PrismaPromise<GetOtpVerificationAggregateType<T>>

    /**
     * Group by OtpVerification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpVerificationGroupByArgs} args - Group by arguments.
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
      T extends OtpVerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OtpVerificationGroupByArgs['orderBy'] }
        : { orderBy?: OtpVerificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OtpVerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtpVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OtpVerification model
   */
  readonly fields: OtpVerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OtpVerification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OtpVerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the OtpVerification model
   */
  interface OtpVerificationFieldRefs {
    readonly id: FieldRef<"OtpVerification", 'String'>
    readonly phoneNumber: FieldRef<"OtpVerification", 'String'>
    readonly otpCode: FieldRef<"OtpVerification", 'String'>
    readonly expiresAt: FieldRef<"OtpVerification", 'DateTime'>
    readonly verified: FieldRef<"OtpVerification", 'Boolean'>
    readonly createdAt: FieldRef<"OtpVerification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OtpVerification findUnique
   */
  export type OtpVerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpVerification
     */
    select?: OtpVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpVerification
     */
    omit?: OtpVerificationOmit<ExtArgs> | null
    /**
     * Filter, which OtpVerification to fetch.
     */
    where: OtpVerificationWhereUniqueInput
  }

  /**
   * OtpVerification findUniqueOrThrow
   */
  export type OtpVerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpVerification
     */
    select?: OtpVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpVerification
     */
    omit?: OtpVerificationOmit<ExtArgs> | null
    /**
     * Filter, which OtpVerification to fetch.
     */
    where: OtpVerificationWhereUniqueInput
  }

  /**
   * OtpVerification findFirst
   */
  export type OtpVerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpVerification
     */
    select?: OtpVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpVerification
     */
    omit?: OtpVerificationOmit<ExtArgs> | null
    /**
     * Filter, which OtpVerification to fetch.
     */
    where?: OtpVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtpVerifications to fetch.
     */
    orderBy?: OtpVerificationOrderByWithRelationInput | OtpVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OtpVerifications.
     */
    cursor?: OtpVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtpVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtpVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OtpVerifications.
     */
    distinct?: OtpVerificationScalarFieldEnum | OtpVerificationScalarFieldEnum[]
  }

  /**
   * OtpVerification findFirstOrThrow
   */
  export type OtpVerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpVerification
     */
    select?: OtpVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpVerification
     */
    omit?: OtpVerificationOmit<ExtArgs> | null
    /**
     * Filter, which OtpVerification to fetch.
     */
    where?: OtpVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtpVerifications to fetch.
     */
    orderBy?: OtpVerificationOrderByWithRelationInput | OtpVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OtpVerifications.
     */
    cursor?: OtpVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtpVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtpVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OtpVerifications.
     */
    distinct?: OtpVerificationScalarFieldEnum | OtpVerificationScalarFieldEnum[]
  }

  /**
   * OtpVerification findMany
   */
  export type OtpVerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpVerification
     */
    select?: OtpVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpVerification
     */
    omit?: OtpVerificationOmit<ExtArgs> | null
    /**
     * Filter, which OtpVerifications to fetch.
     */
    where?: OtpVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtpVerifications to fetch.
     */
    orderBy?: OtpVerificationOrderByWithRelationInput | OtpVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OtpVerifications.
     */
    cursor?: OtpVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtpVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtpVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OtpVerifications.
     */
    distinct?: OtpVerificationScalarFieldEnum | OtpVerificationScalarFieldEnum[]
  }

  /**
   * OtpVerification create
   */
  export type OtpVerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpVerification
     */
    select?: OtpVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpVerification
     */
    omit?: OtpVerificationOmit<ExtArgs> | null
    /**
     * The data needed to create a OtpVerification.
     */
    data: XOR<OtpVerificationCreateInput, OtpVerificationUncheckedCreateInput>
  }

  /**
   * OtpVerification createMany
   */
  export type OtpVerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OtpVerifications.
     */
    data: OtpVerificationCreateManyInput | OtpVerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OtpVerification createManyAndReturn
   */
  export type OtpVerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpVerification
     */
    select?: OtpVerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OtpVerification
     */
    omit?: OtpVerificationOmit<ExtArgs> | null
    /**
     * The data used to create many OtpVerifications.
     */
    data: OtpVerificationCreateManyInput | OtpVerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OtpVerification update
   */
  export type OtpVerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpVerification
     */
    select?: OtpVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpVerification
     */
    omit?: OtpVerificationOmit<ExtArgs> | null
    /**
     * The data needed to update a OtpVerification.
     */
    data: XOR<OtpVerificationUpdateInput, OtpVerificationUncheckedUpdateInput>
    /**
     * Choose, which OtpVerification to update.
     */
    where: OtpVerificationWhereUniqueInput
  }

  /**
   * OtpVerification updateMany
   */
  export type OtpVerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OtpVerifications.
     */
    data: XOR<OtpVerificationUpdateManyMutationInput, OtpVerificationUncheckedUpdateManyInput>
    /**
     * Filter which OtpVerifications to update
     */
    where?: OtpVerificationWhereInput
    /**
     * Limit how many OtpVerifications to update.
     */
    limit?: number
  }

  /**
   * OtpVerification updateManyAndReturn
   */
  export type OtpVerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpVerification
     */
    select?: OtpVerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OtpVerification
     */
    omit?: OtpVerificationOmit<ExtArgs> | null
    /**
     * The data used to update OtpVerifications.
     */
    data: XOR<OtpVerificationUpdateManyMutationInput, OtpVerificationUncheckedUpdateManyInput>
    /**
     * Filter which OtpVerifications to update
     */
    where?: OtpVerificationWhereInput
    /**
     * Limit how many OtpVerifications to update.
     */
    limit?: number
  }

  /**
   * OtpVerification upsert
   */
  export type OtpVerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpVerification
     */
    select?: OtpVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpVerification
     */
    omit?: OtpVerificationOmit<ExtArgs> | null
    /**
     * The filter to search for the OtpVerification to update in case it exists.
     */
    where: OtpVerificationWhereUniqueInput
    /**
     * In case the OtpVerification found by the `where` argument doesn't exist, create a new OtpVerification with this data.
     */
    create: XOR<OtpVerificationCreateInput, OtpVerificationUncheckedCreateInput>
    /**
     * In case the OtpVerification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OtpVerificationUpdateInput, OtpVerificationUncheckedUpdateInput>
  }

  /**
   * OtpVerification delete
   */
  export type OtpVerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpVerification
     */
    select?: OtpVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpVerification
     */
    omit?: OtpVerificationOmit<ExtArgs> | null
    /**
     * Filter which OtpVerification to delete.
     */
    where: OtpVerificationWhereUniqueInput
  }

  /**
   * OtpVerification deleteMany
   */
  export type OtpVerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OtpVerifications to delete
     */
    where?: OtpVerificationWhereInput
    /**
     * Limit how many OtpVerifications to delete.
     */
    limit?: number
  }

  /**
   * OtpVerification without action
   */
  export type OtpVerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpVerification
     */
    select?: OtpVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpVerification
     */
    omit?: OtpVerificationOmit<ExtArgs> | null
  }


  /**
   * Model Policy
   */

  export type AggregatePolicy = {
    _count: PolicyCountAggregateOutputType | null
    _avg: PolicyAvgAggregateOutputType | null
    _sum: PolicySumAggregateOutputType | null
    _min: PolicyMinAggregateOutputType | null
    _max: PolicyMaxAggregateOutputType | null
  }

  export type PolicyAvgAggregateOutputType = {
    coverageAmount: number | null
    premiumPaid: number | null
  }

  export type PolicySumAggregateOutputType = {
    coverageAmount: number | null
    premiumPaid: number | null
  }

  export type PolicyMinAggregateOutputType = {
    id: string | null
    userId: string | null
    planTier: $Enums.PlanTier | null
    status: $Enums.PolicyStatus | null
    coverageAmount: number | null
    premiumPaid: number | null
    razorpayOrderId: string | null
    razorpayPaymentId: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
  }

  export type PolicyMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    planTier: $Enums.PlanTier | null
    status: $Enums.PolicyStatus | null
    coverageAmount: number | null
    premiumPaid: number | null
    razorpayOrderId: string | null
    razorpayPaymentId: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
  }

  export type PolicyCountAggregateOutputType = {
    id: number
    userId: number
    planTier: number
    status: number
    coverageAmount: number
    premiumPaid: number
    razorpayOrderId: number
    razorpayPaymentId: number
    startDate: number
    endDate: number
    createdAt: number
    _all: number
  }


  export type PolicyAvgAggregateInputType = {
    coverageAmount?: true
    premiumPaid?: true
  }

  export type PolicySumAggregateInputType = {
    coverageAmount?: true
    premiumPaid?: true
  }

  export type PolicyMinAggregateInputType = {
    id?: true
    userId?: true
    planTier?: true
    status?: true
    coverageAmount?: true
    premiumPaid?: true
    razorpayOrderId?: true
    razorpayPaymentId?: true
    startDate?: true
    endDate?: true
    createdAt?: true
  }

  export type PolicyMaxAggregateInputType = {
    id?: true
    userId?: true
    planTier?: true
    status?: true
    coverageAmount?: true
    premiumPaid?: true
    razorpayOrderId?: true
    razorpayPaymentId?: true
    startDate?: true
    endDate?: true
    createdAt?: true
  }

  export type PolicyCountAggregateInputType = {
    id?: true
    userId?: true
    planTier?: true
    status?: true
    coverageAmount?: true
    premiumPaid?: true
    razorpayOrderId?: true
    razorpayPaymentId?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    _all?: true
  }

  export type PolicyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Policy to aggregate.
     */
    where?: PolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Policies to fetch.
     */
    orderBy?: PolicyOrderByWithRelationInput | PolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Policies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Policies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Policies
    **/
    _count?: true | PolicyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PolicyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PolicySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PolicyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PolicyMaxAggregateInputType
  }

  export type GetPolicyAggregateType<T extends PolicyAggregateArgs> = {
        [P in keyof T & keyof AggregatePolicy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePolicy[P]>
      : GetScalarType<T[P], AggregatePolicy[P]>
  }




  export type PolicyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PolicyWhereInput
    orderBy?: PolicyOrderByWithAggregationInput | PolicyOrderByWithAggregationInput[]
    by: PolicyScalarFieldEnum[] | PolicyScalarFieldEnum
    having?: PolicyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PolicyCountAggregateInputType | true
    _avg?: PolicyAvgAggregateInputType
    _sum?: PolicySumAggregateInputType
    _min?: PolicyMinAggregateInputType
    _max?: PolicyMaxAggregateInputType
  }

  export type PolicyGroupByOutputType = {
    id: string
    userId: string
    planTier: $Enums.PlanTier
    status: $Enums.PolicyStatus
    coverageAmount: number
    premiumPaid: number
    razorpayOrderId: string | null
    razorpayPaymentId: string | null
    startDate: Date
    endDate: Date
    createdAt: Date
    _count: PolicyCountAggregateOutputType | null
    _avg: PolicyAvgAggregateOutputType | null
    _sum: PolicySumAggregateOutputType | null
    _min: PolicyMinAggregateOutputType | null
    _max: PolicyMaxAggregateOutputType | null
  }

  type GetPolicyGroupByPayload<T extends PolicyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PolicyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PolicyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PolicyGroupByOutputType[P]>
            : GetScalarType<T[P], PolicyGroupByOutputType[P]>
        }
      >
    >


  export type PolicySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    planTier?: boolean
    status?: boolean
    coverageAmount?: boolean
    premiumPaid?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    claims?: boolean | Policy$claimsArgs<ExtArgs>
    _count?: boolean | PolicyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["policy"]>

  export type PolicySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    planTier?: boolean
    status?: boolean
    coverageAmount?: boolean
    premiumPaid?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["policy"]>

  export type PolicySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    planTier?: boolean
    status?: boolean
    coverageAmount?: boolean
    premiumPaid?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["policy"]>

  export type PolicySelectScalar = {
    id?: boolean
    userId?: boolean
    planTier?: boolean
    status?: boolean
    coverageAmount?: boolean
    premiumPaid?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
  }

  export type PolicyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "planTier" | "status" | "coverageAmount" | "premiumPaid" | "razorpayOrderId" | "razorpayPaymentId" | "startDate" | "endDate" | "createdAt", ExtArgs["result"]["policy"]>
  export type PolicyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    claims?: boolean | Policy$claimsArgs<ExtArgs>
    _count?: boolean | PolicyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PolicyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PolicyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PolicyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Policy"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      claims: Prisma.$ClaimPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      planTier: $Enums.PlanTier
      status: $Enums.PolicyStatus
      coverageAmount: number
      premiumPaid: number
      razorpayOrderId: string | null
      razorpayPaymentId: string | null
      startDate: Date
      endDate: Date
      createdAt: Date
    }, ExtArgs["result"]["policy"]>
    composites: {}
  }

  type PolicyGetPayload<S extends boolean | null | undefined | PolicyDefaultArgs> = $Result.GetResult<Prisma.$PolicyPayload, S>

  type PolicyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PolicyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PolicyCountAggregateInputType | true
    }

  export interface PolicyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Policy'], meta: { name: 'Policy' } }
    /**
     * Find zero or one Policy that matches the filter.
     * @param {PolicyFindUniqueArgs} args - Arguments to find a Policy
     * @example
     * // Get one Policy
     * const policy = await prisma.policy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PolicyFindUniqueArgs>(args: SelectSubset<T, PolicyFindUniqueArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Policy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PolicyFindUniqueOrThrowArgs} args - Arguments to find a Policy
     * @example
     * // Get one Policy
     * const policy = await prisma.policy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PolicyFindUniqueOrThrowArgs>(args: SelectSubset<T, PolicyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Policy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyFindFirstArgs} args - Arguments to find a Policy
     * @example
     * // Get one Policy
     * const policy = await prisma.policy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PolicyFindFirstArgs>(args?: SelectSubset<T, PolicyFindFirstArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Policy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyFindFirstOrThrowArgs} args - Arguments to find a Policy
     * @example
     * // Get one Policy
     * const policy = await prisma.policy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PolicyFindFirstOrThrowArgs>(args?: SelectSubset<T, PolicyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Policies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Policies
     * const policies = await prisma.policy.findMany()
     * 
     * // Get first 10 Policies
     * const policies = await prisma.policy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const policyWithIdOnly = await prisma.policy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PolicyFindManyArgs>(args?: SelectSubset<T, PolicyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Policy.
     * @param {PolicyCreateArgs} args - Arguments to create a Policy.
     * @example
     * // Create one Policy
     * const Policy = await prisma.policy.create({
     *   data: {
     *     // ... data to create a Policy
     *   }
     * })
     * 
     */
    create<T extends PolicyCreateArgs>(args: SelectSubset<T, PolicyCreateArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Policies.
     * @param {PolicyCreateManyArgs} args - Arguments to create many Policies.
     * @example
     * // Create many Policies
     * const policy = await prisma.policy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PolicyCreateManyArgs>(args?: SelectSubset<T, PolicyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Policies and returns the data saved in the database.
     * @param {PolicyCreateManyAndReturnArgs} args - Arguments to create many Policies.
     * @example
     * // Create many Policies
     * const policy = await prisma.policy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Policies and only return the `id`
     * const policyWithIdOnly = await prisma.policy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PolicyCreateManyAndReturnArgs>(args?: SelectSubset<T, PolicyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Policy.
     * @param {PolicyDeleteArgs} args - Arguments to delete one Policy.
     * @example
     * // Delete one Policy
     * const Policy = await prisma.policy.delete({
     *   where: {
     *     // ... filter to delete one Policy
     *   }
     * })
     * 
     */
    delete<T extends PolicyDeleteArgs>(args: SelectSubset<T, PolicyDeleteArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Policy.
     * @param {PolicyUpdateArgs} args - Arguments to update one Policy.
     * @example
     * // Update one Policy
     * const policy = await prisma.policy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PolicyUpdateArgs>(args: SelectSubset<T, PolicyUpdateArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Policies.
     * @param {PolicyDeleteManyArgs} args - Arguments to filter Policies to delete.
     * @example
     * // Delete a few Policies
     * const { count } = await prisma.policy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PolicyDeleteManyArgs>(args?: SelectSubset<T, PolicyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Policies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Policies
     * const policy = await prisma.policy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PolicyUpdateManyArgs>(args: SelectSubset<T, PolicyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Policies and returns the data updated in the database.
     * @param {PolicyUpdateManyAndReturnArgs} args - Arguments to update many Policies.
     * @example
     * // Update many Policies
     * const policy = await prisma.policy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Policies and only return the `id`
     * const policyWithIdOnly = await prisma.policy.updateManyAndReturn({
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
    updateManyAndReturn<T extends PolicyUpdateManyAndReturnArgs>(args: SelectSubset<T, PolicyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Policy.
     * @param {PolicyUpsertArgs} args - Arguments to update or create a Policy.
     * @example
     * // Update or create a Policy
     * const policy = await prisma.policy.upsert({
     *   create: {
     *     // ... data to create a Policy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Policy we want to update
     *   }
     * })
     */
    upsert<T extends PolicyUpsertArgs>(args: SelectSubset<T, PolicyUpsertArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Policies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyCountArgs} args - Arguments to filter Policies to count.
     * @example
     * // Count the number of Policies
     * const count = await prisma.policy.count({
     *   where: {
     *     // ... the filter for the Policies we want to count
     *   }
     * })
    **/
    count<T extends PolicyCountArgs>(
      args?: Subset<T, PolicyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PolicyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Policy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PolicyAggregateArgs>(args: Subset<T, PolicyAggregateArgs>): Prisma.PrismaPromise<GetPolicyAggregateType<T>>

    /**
     * Group by Policy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyGroupByArgs} args - Group by arguments.
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
      T extends PolicyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PolicyGroupByArgs['orderBy'] }
        : { orderBy?: PolicyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PolicyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPolicyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Policy model
   */
  readonly fields: PolicyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Policy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PolicyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    claims<T extends Policy$claimsArgs<ExtArgs> = {}>(args?: Subset<T, Policy$claimsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Policy model
   */
  interface PolicyFieldRefs {
    readonly id: FieldRef<"Policy", 'String'>
    readonly userId: FieldRef<"Policy", 'String'>
    readonly planTier: FieldRef<"Policy", 'PlanTier'>
    readonly status: FieldRef<"Policy", 'PolicyStatus'>
    readonly coverageAmount: FieldRef<"Policy", 'Int'>
    readonly premiumPaid: FieldRef<"Policy", 'Int'>
    readonly razorpayOrderId: FieldRef<"Policy", 'String'>
    readonly razorpayPaymentId: FieldRef<"Policy", 'String'>
    readonly startDate: FieldRef<"Policy", 'DateTime'>
    readonly endDate: FieldRef<"Policy", 'DateTime'>
    readonly createdAt: FieldRef<"Policy", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Policy findUnique
   */
  export type PolicyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * Filter, which Policy to fetch.
     */
    where: PolicyWhereUniqueInput
  }

  /**
   * Policy findUniqueOrThrow
   */
  export type PolicyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * Filter, which Policy to fetch.
     */
    where: PolicyWhereUniqueInput
  }

  /**
   * Policy findFirst
   */
  export type PolicyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * Filter, which Policy to fetch.
     */
    where?: PolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Policies to fetch.
     */
    orderBy?: PolicyOrderByWithRelationInput | PolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Policies.
     */
    cursor?: PolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Policies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Policies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Policies.
     */
    distinct?: PolicyScalarFieldEnum | PolicyScalarFieldEnum[]
  }

  /**
   * Policy findFirstOrThrow
   */
  export type PolicyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * Filter, which Policy to fetch.
     */
    where?: PolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Policies to fetch.
     */
    orderBy?: PolicyOrderByWithRelationInput | PolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Policies.
     */
    cursor?: PolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Policies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Policies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Policies.
     */
    distinct?: PolicyScalarFieldEnum | PolicyScalarFieldEnum[]
  }

  /**
   * Policy findMany
   */
  export type PolicyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * Filter, which Policies to fetch.
     */
    where?: PolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Policies to fetch.
     */
    orderBy?: PolicyOrderByWithRelationInput | PolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Policies.
     */
    cursor?: PolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Policies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Policies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Policies.
     */
    distinct?: PolicyScalarFieldEnum | PolicyScalarFieldEnum[]
  }

  /**
   * Policy create
   */
  export type PolicyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * The data needed to create a Policy.
     */
    data: XOR<PolicyCreateInput, PolicyUncheckedCreateInput>
  }

  /**
   * Policy createMany
   */
  export type PolicyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Policies.
     */
    data: PolicyCreateManyInput | PolicyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Policy createManyAndReturn
   */
  export type PolicyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * The data used to create many Policies.
     */
    data: PolicyCreateManyInput | PolicyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Policy update
   */
  export type PolicyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * The data needed to update a Policy.
     */
    data: XOR<PolicyUpdateInput, PolicyUncheckedUpdateInput>
    /**
     * Choose, which Policy to update.
     */
    where: PolicyWhereUniqueInput
  }

  /**
   * Policy updateMany
   */
  export type PolicyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Policies.
     */
    data: XOR<PolicyUpdateManyMutationInput, PolicyUncheckedUpdateManyInput>
    /**
     * Filter which Policies to update
     */
    where?: PolicyWhereInput
    /**
     * Limit how many Policies to update.
     */
    limit?: number
  }

  /**
   * Policy updateManyAndReturn
   */
  export type PolicyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * The data used to update Policies.
     */
    data: XOR<PolicyUpdateManyMutationInput, PolicyUncheckedUpdateManyInput>
    /**
     * Filter which Policies to update
     */
    where?: PolicyWhereInput
    /**
     * Limit how many Policies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Policy upsert
   */
  export type PolicyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * The filter to search for the Policy to update in case it exists.
     */
    where: PolicyWhereUniqueInput
    /**
     * In case the Policy found by the `where` argument doesn't exist, create a new Policy with this data.
     */
    create: XOR<PolicyCreateInput, PolicyUncheckedCreateInput>
    /**
     * In case the Policy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PolicyUpdateInput, PolicyUncheckedUpdateInput>
  }

  /**
   * Policy delete
   */
  export type PolicyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * Filter which Policy to delete.
     */
    where: PolicyWhereUniqueInput
  }

  /**
   * Policy deleteMany
   */
  export type PolicyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Policies to delete
     */
    where?: PolicyWhereInput
    /**
     * Limit how many Policies to delete.
     */
    limit?: number
  }

  /**
   * Policy.claims
   */
  export type Policy$claimsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    where?: ClaimWhereInput
    orderBy?: ClaimOrderByWithRelationInput | ClaimOrderByWithRelationInput[]
    cursor?: ClaimWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClaimScalarFieldEnum | ClaimScalarFieldEnum[]
  }

  /**
   * Policy without action
   */
  export type PolicyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
  }


  /**
   * Model WorkSession
   */

  export type AggregateWorkSession = {
    _count: WorkSessionCountAggregateOutputType | null
    _avg: WorkSessionAvgAggregateOutputType | null
    _sum: WorkSessionSumAggregateOutputType | null
    _min: WorkSessionMinAggregateOutputType | null
    _max: WorkSessionMaxAggregateOutputType | null
  }

  export type WorkSessionAvgAggregateOutputType = {
    activeMinutes: number | null
  }

  export type WorkSessionSumAggregateOutputType = {
    activeMinutes: number | null
  }

  export type WorkSessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    startTime: Date | null
    endTime: Date | null
    activeMinutes: number | null
    ipAddress: string | null
    ipCity: string | null
    platformActiveFlag: boolean | null
    sessionHash: string | null
    previousSessionHash: string | null
    createdAt: Date | null
  }

  export type WorkSessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    startTime: Date | null
    endTime: Date | null
    activeMinutes: number | null
    ipAddress: string | null
    ipCity: string | null
    platformActiveFlag: boolean | null
    sessionHash: string | null
    previousSessionHash: string | null
    createdAt: Date | null
  }

  export type WorkSessionCountAggregateOutputType = {
    id: number
    userId: number
    startTime: number
    endTime: number
    activeMinutes: number
    ipAddress: number
    ipCity: number
    platformActiveFlag: number
    sessionHash: number
    previousSessionHash: number
    createdAt: number
    _all: number
  }


  export type WorkSessionAvgAggregateInputType = {
    activeMinutes?: true
  }

  export type WorkSessionSumAggregateInputType = {
    activeMinutes?: true
  }

  export type WorkSessionMinAggregateInputType = {
    id?: true
    userId?: true
    startTime?: true
    endTime?: true
    activeMinutes?: true
    ipAddress?: true
    ipCity?: true
    platformActiveFlag?: true
    sessionHash?: true
    previousSessionHash?: true
    createdAt?: true
  }

  export type WorkSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    startTime?: true
    endTime?: true
    activeMinutes?: true
    ipAddress?: true
    ipCity?: true
    platformActiveFlag?: true
    sessionHash?: true
    previousSessionHash?: true
    createdAt?: true
  }

  export type WorkSessionCountAggregateInputType = {
    id?: true
    userId?: true
    startTime?: true
    endTime?: true
    activeMinutes?: true
    ipAddress?: true
    ipCity?: true
    platformActiveFlag?: true
    sessionHash?: true
    previousSessionHash?: true
    createdAt?: true
    _all?: true
  }

  export type WorkSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkSession to aggregate.
     */
    where?: WorkSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkSessions to fetch.
     */
    orderBy?: WorkSessionOrderByWithRelationInput | WorkSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkSessions
    **/
    _count?: true | WorkSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkSessionMaxAggregateInputType
  }

  export type GetWorkSessionAggregateType<T extends WorkSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkSession[P]>
      : GetScalarType<T[P], AggregateWorkSession[P]>
  }




  export type WorkSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkSessionWhereInput
    orderBy?: WorkSessionOrderByWithAggregationInput | WorkSessionOrderByWithAggregationInput[]
    by: WorkSessionScalarFieldEnum[] | WorkSessionScalarFieldEnum
    having?: WorkSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkSessionCountAggregateInputType | true
    _avg?: WorkSessionAvgAggregateInputType
    _sum?: WorkSessionSumAggregateInputType
    _min?: WorkSessionMinAggregateInputType
    _max?: WorkSessionMaxAggregateInputType
  }

  export type WorkSessionGroupByOutputType = {
    id: string
    userId: string
    startTime: Date
    endTime: Date | null
    activeMinutes: number
    ipAddress: string
    ipCity: string | null
    platformActiveFlag: boolean
    sessionHash: string
    previousSessionHash: string | null
    createdAt: Date
    _count: WorkSessionCountAggregateOutputType | null
    _avg: WorkSessionAvgAggregateOutputType | null
    _sum: WorkSessionSumAggregateOutputType | null
    _min: WorkSessionMinAggregateOutputType | null
    _max: WorkSessionMaxAggregateOutputType | null
  }

  type GetWorkSessionGroupByPayload<T extends WorkSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkSessionGroupByOutputType[P]>
            : GetScalarType<T[P], WorkSessionGroupByOutputType[P]>
        }
      >
    >


  export type WorkSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    startTime?: boolean
    endTime?: boolean
    activeMinutes?: boolean
    ipAddress?: boolean
    ipCity?: boolean
    platformActiveFlag?: boolean
    sessionHash?: boolean
    previousSessionHash?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workSession"]>

  export type WorkSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    startTime?: boolean
    endTime?: boolean
    activeMinutes?: boolean
    ipAddress?: boolean
    ipCity?: boolean
    platformActiveFlag?: boolean
    sessionHash?: boolean
    previousSessionHash?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workSession"]>

  export type WorkSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    startTime?: boolean
    endTime?: boolean
    activeMinutes?: boolean
    ipAddress?: boolean
    ipCity?: boolean
    platformActiveFlag?: boolean
    sessionHash?: boolean
    previousSessionHash?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workSession"]>

  export type WorkSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    startTime?: boolean
    endTime?: boolean
    activeMinutes?: boolean
    ipAddress?: boolean
    ipCity?: boolean
    platformActiveFlag?: boolean
    sessionHash?: boolean
    previousSessionHash?: boolean
    createdAt?: boolean
  }

  export type WorkSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "startTime" | "endTime" | "activeMinutes" | "ipAddress" | "ipCity" | "platformActiveFlag" | "sessionHash" | "previousSessionHash" | "createdAt", ExtArgs["result"]["workSession"]>
  export type WorkSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WorkSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WorkSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WorkSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkSession"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      startTime: Date
      endTime: Date | null
      activeMinutes: number
      ipAddress: string
      ipCity: string | null
      platformActiveFlag: boolean
      sessionHash: string
      previousSessionHash: string | null
      createdAt: Date
    }, ExtArgs["result"]["workSession"]>
    composites: {}
  }

  type WorkSessionGetPayload<S extends boolean | null | undefined | WorkSessionDefaultArgs> = $Result.GetResult<Prisma.$WorkSessionPayload, S>

  type WorkSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkSessionCountAggregateInputType | true
    }

  export interface WorkSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkSession'], meta: { name: 'WorkSession' } }
    /**
     * Find zero or one WorkSession that matches the filter.
     * @param {WorkSessionFindUniqueArgs} args - Arguments to find a WorkSession
     * @example
     * // Get one WorkSession
     * const workSession = await prisma.workSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkSessionFindUniqueArgs>(args: SelectSubset<T, WorkSessionFindUniqueArgs<ExtArgs>>): Prisma__WorkSessionClient<$Result.GetResult<Prisma.$WorkSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkSessionFindUniqueOrThrowArgs} args - Arguments to find a WorkSession
     * @example
     * // Get one WorkSession
     * const workSession = await prisma.workSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkSessionClient<$Result.GetResult<Prisma.$WorkSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkSessionFindFirstArgs} args - Arguments to find a WorkSession
     * @example
     * // Get one WorkSession
     * const workSession = await prisma.workSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkSessionFindFirstArgs>(args?: SelectSubset<T, WorkSessionFindFirstArgs<ExtArgs>>): Prisma__WorkSessionClient<$Result.GetResult<Prisma.$WorkSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkSessionFindFirstOrThrowArgs} args - Arguments to find a WorkSession
     * @example
     * // Get one WorkSession
     * const workSession = await prisma.workSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkSessionClient<$Result.GetResult<Prisma.$WorkSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkSessions
     * const workSessions = await prisma.workSession.findMany()
     * 
     * // Get first 10 WorkSessions
     * const workSessions = await prisma.workSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workSessionWithIdOnly = await prisma.workSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkSessionFindManyArgs>(args?: SelectSubset<T, WorkSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkSession.
     * @param {WorkSessionCreateArgs} args - Arguments to create a WorkSession.
     * @example
     * // Create one WorkSession
     * const WorkSession = await prisma.workSession.create({
     *   data: {
     *     // ... data to create a WorkSession
     *   }
     * })
     * 
     */
    create<T extends WorkSessionCreateArgs>(args: SelectSubset<T, WorkSessionCreateArgs<ExtArgs>>): Prisma__WorkSessionClient<$Result.GetResult<Prisma.$WorkSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkSessions.
     * @param {WorkSessionCreateManyArgs} args - Arguments to create many WorkSessions.
     * @example
     * // Create many WorkSessions
     * const workSession = await prisma.workSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkSessionCreateManyArgs>(args?: SelectSubset<T, WorkSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkSessions and returns the data saved in the database.
     * @param {WorkSessionCreateManyAndReturnArgs} args - Arguments to create many WorkSessions.
     * @example
     * // Create many WorkSessions
     * const workSession = await prisma.workSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkSessions and only return the `id`
     * const workSessionWithIdOnly = await prisma.workSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkSession.
     * @param {WorkSessionDeleteArgs} args - Arguments to delete one WorkSession.
     * @example
     * // Delete one WorkSession
     * const WorkSession = await prisma.workSession.delete({
     *   where: {
     *     // ... filter to delete one WorkSession
     *   }
     * })
     * 
     */
    delete<T extends WorkSessionDeleteArgs>(args: SelectSubset<T, WorkSessionDeleteArgs<ExtArgs>>): Prisma__WorkSessionClient<$Result.GetResult<Prisma.$WorkSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkSession.
     * @param {WorkSessionUpdateArgs} args - Arguments to update one WorkSession.
     * @example
     * // Update one WorkSession
     * const workSession = await prisma.workSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkSessionUpdateArgs>(args: SelectSubset<T, WorkSessionUpdateArgs<ExtArgs>>): Prisma__WorkSessionClient<$Result.GetResult<Prisma.$WorkSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkSessions.
     * @param {WorkSessionDeleteManyArgs} args - Arguments to filter WorkSessions to delete.
     * @example
     * // Delete a few WorkSessions
     * const { count } = await prisma.workSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkSessionDeleteManyArgs>(args?: SelectSubset<T, WorkSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkSessions
     * const workSession = await prisma.workSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkSessionUpdateManyArgs>(args: SelectSubset<T, WorkSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkSessions and returns the data updated in the database.
     * @param {WorkSessionUpdateManyAndReturnArgs} args - Arguments to update many WorkSessions.
     * @example
     * // Update many WorkSessions
     * const workSession = await prisma.workSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkSessions and only return the `id`
     * const workSessionWithIdOnly = await prisma.workSession.updateManyAndReturn({
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
    updateManyAndReturn<T extends WorkSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkSession.
     * @param {WorkSessionUpsertArgs} args - Arguments to update or create a WorkSession.
     * @example
     * // Update or create a WorkSession
     * const workSession = await prisma.workSession.upsert({
     *   create: {
     *     // ... data to create a WorkSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkSession we want to update
     *   }
     * })
     */
    upsert<T extends WorkSessionUpsertArgs>(args: SelectSubset<T, WorkSessionUpsertArgs<ExtArgs>>): Prisma__WorkSessionClient<$Result.GetResult<Prisma.$WorkSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkSessionCountArgs} args - Arguments to filter WorkSessions to count.
     * @example
     * // Count the number of WorkSessions
     * const count = await prisma.workSession.count({
     *   where: {
     *     // ... the filter for the WorkSessions we want to count
     *   }
     * })
    **/
    count<T extends WorkSessionCountArgs>(
      args?: Subset<T, WorkSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkSessionAggregateArgs>(args: Subset<T, WorkSessionAggregateArgs>): Prisma.PrismaPromise<GetWorkSessionAggregateType<T>>

    /**
     * Group by WorkSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkSessionGroupByArgs} args - Group by arguments.
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
      T extends WorkSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkSessionGroupByArgs['orderBy'] }
        : { orderBy?: WorkSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkSession model
   */
  readonly fields: WorkSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the WorkSession model
   */
  interface WorkSessionFieldRefs {
    readonly id: FieldRef<"WorkSession", 'String'>
    readonly userId: FieldRef<"WorkSession", 'String'>
    readonly startTime: FieldRef<"WorkSession", 'DateTime'>
    readonly endTime: FieldRef<"WorkSession", 'DateTime'>
    readonly activeMinutes: FieldRef<"WorkSession", 'Int'>
    readonly ipAddress: FieldRef<"WorkSession", 'String'>
    readonly ipCity: FieldRef<"WorkSession", 'String'>
    readonly platformActiveFlag: FieldRef<"WorkSession", 'Boolean'>
    readonly sessionHash: FieldRef<"WorkSession", 'String'>
    readonly previousSessionHash: FieldRef<"WorkSession", 'String'>
    readonly createdAt: FieldRef<"WorkSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkSession findUnique
   */
  export type WorkSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSession
     */
    select?: WorkSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSession
     */
    omit?: WorkSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkSessionInclude<ExtArgs> | null
    /**
     * Filter, which WorkSession to fetch.
     */
    where: WorkSessionWhereUniqueInput
  }

  /**
   * WorkSession findUniqueOrThrow
   */
  export type WorkSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSession
     */
    select?: WorkSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSession
     */
    omit?: WorkSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkSessionInclude<ExtArgs> | null
    /**
     * Filter, which WorkSession to fetch.
     */
    where: WorkSessionWhereUniqueInput
  }

  /**
   * WorkSession findFirst
   */
  export type WorkSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSession
     */
    select?: WorkSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSession
     */
    omit?: WorkSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkSessionInclude<ExtArgs> | null
    /**
     * Filter, which WorkSession to fetch.
     */
    where?: WorkSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkSessions to fetch.
     */
    orderBy?: WorkSessionOrderByWithRelationInput | WorkSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkSessions.
     */
    cursor?: WorkSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkSessions.
     */
    distinct?: WorkSessionScalarFieldEnum | WorkSessionScalarFieldEnum[]
  }

  /**
   * WorkSession findFirstOrThrow
   */
  export type WorkSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSession
     */
    select?: WorkSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSession
     */
    omit?: WorkSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkSessionInclude<ExtArgs> | null
    /**
     * Filter, which WorkSession to fetch.
     */
    where?: WorkSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkSessions to fetch.
     */
    orderBy?: WorkSessionOrderByWithRelationInput | WorkSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkSessions.
     */
    cursor?: WorkSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkSessions.
     */
    distinct?: WorkSessionScalarFieldEnum | WorkSessionScalarFieldEnum[]
  }

  /**
   * WorkSession findMany
   */
  export type WorkSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSession
     */
    select?: WorkSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSession
     */
    omit?: WorkSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkSessionInclude<ExtArgs> | null
    /**
     * Filter, which WorkSessions to fetch.
     */
    where?: WorkSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkSessions to fetch.
     */
    orderBy?: WorkSessionOrderByWithRelationInput | WorkSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkSessions.
     */
    cursor?: WorkSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkSessions.
     */
    distinct?: WorkSessionScalarFieldEnum | WorkSessionScalarFieldEnum[]
  }

  /**
   * WorkSession create
   */
  export type WorkSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSession
     */
    select?: WorkSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSession
     */
    omit?: WorkSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkSession.
     */
    data: XOR<WorkSessionCreateInput, WorkSessionUncheckedCreateInput>
  }

  /**
   * WorkSession createMany
   */
  export type WorkSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkSessions.
     */
    data: WorkSessionCreateManyInput | WorkSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkSession createManyAndReturn
   */
  export type WorkSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSession
     */
    select?: WorkSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSession
     */
    omit?: WorkSessionOmit<ExtArgs> | null
    /**
     * The data used to create many WorkSessions.
     */
    data: WorkSessionCreateManyInput | WorkSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkSession update
   */
  export type WorkSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSession
     */
    select?: WorkSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSession
     */
    omit?: WorkSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkSession.
     */
    data: XOR<WorkSessionUpdateInput, WorkSessionUncheckedUpdateInput>
    /**
     * Choose, which WorkSession to update.
     */
    where: WorkSessionWhereUniqueInput
  }

  /**
   * WorkSession updateMany
   */
  export type WorkSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkSessions.
     */
    data: XOR<WorkSessionUpdateManyMutationInput, WorkSessionUncheckedUpdateManyInput>
    /**
     * Filter which WorkSessions to update
     */
    where?: WorkSessionWhereInput
    /**
     * Limit how many WorkSessions to update.
     */
    limit?: number
  }

  /**
   * WorkSession updateManyAndReturn
   */
  export type WorkSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSession
     */
    select?: WorkSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSession
     */
    omit?: WorkSessionOmit<ExtArgs> | null
    /**
     * The data used to update WorkSessions.
     */
    data: XOR<WorkSessionUpdateManyMutationInput, WorkSessionUncheckedUpdateManyInput>
    /**
     * Filter which WorkSessions to update
     */
    where?: WorkSessionWhereInput
    /**
     * Limit how many WorkSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkSession upsert
   */
  export type WorkSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSession
     */
    select?: WorkSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSession
     */
    omit?: WorkSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkSession to update in case it exists.
     */
    where: WorkSessionWhereUniqueInput
    /**
     * In case the WorkSession found by the `where` argument doesn't exist, create a new WorkSession with this data.
     */
    create: XOR<WorkSessionCreateInput, WorkSessionUncheckedCreateInput>
    /**
     * In case the WorkSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkSessionUpdateInput, WorkSessionUncheckedUpdateInput>
  }

  /**
   * WorkSession delete
   */
  export type WorkSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSession
     */
    select?: WorkSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSession
     */
    omit?: WorkSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkSessionInclude<ExtArgs> | null
    /**
     * Filter which WorkSession to delete.
     */
    where: WorkSessionWhereUniqueInput
  }

  /**
   * WorkSession deleteMany
   */
  export type WorkSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkSessions to delete
     */
    where?: WorkSessionWhereInput
    /**
     * Limit how many WorkSessions to delete.
     */
    limit?: number
  }

  /**
   * WorkSession without action
   */
  export type WorkSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSession
     */
    select?: WorkSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSession
     */
    omit?: WorkSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkSessionInclude<ExtArgs> | null
  }


  /**
   * Model EnvironmentalEvent
   */

  export type AggregateEnvironmentalEvent = {
    _count: EnvironmentalEventCountAggregateOutputType | null
    _avg: EnvironmentalEventAvgAggregateOutputType | null
    _sum: EnvironmentalEventSumAggregateOutputType | null
    _min: EnvironmentalEventMinAggregateOutputType | null
    _max: EnvironmentalEventMaxAggregateOutputType | null
  }

  export type EnvironmentalEventAvgAggregateOutputType = {
    intensity: number | null
  }

  export type EnvironmentalEventSumAggregateOutputType = {
    intensity: number | null
  }

  export type EnvironmentalEventMinAggregateOutputType = {
    id: string | null
    city: string | null
    eventType: string | null
    alertLevel: string | null
    intensity: number | null
    source: string | null
    timestamp: Date | null
  }

  export type EnvironmentalEventMaxAggregateOutputType = {
    id: string | null
    city: string | null
    eventType: string | null
    alertLevel: string | null
    intensity: number | null
    source: string | null
    timestamp: Date | null
  }

  export type EnvironmentalEventCountAggregateOutputType = {
    id: number
    city: number
    eventType: number
    alertLevel: number
    intensity: number
    source: number
    timestamp: number
    _all: number
  }


  export type EnvironmentalEventAvgAggregateInputType = {
    intensity?: true
  }

  export type EnvironmentalEventSumAggregateInputType = {
    intensity?: true
  }

  export type EnvironmentalEventMinAggregateInputType = {
    id?: true
    city?: true
    eventType?: true
    alertLevel?: true
    intensity?: true
    source?: true
    timestamp?: true
  }

  export type EnvironmentalEventMaxAggregateInputType = {
    id?: true
    city?: true
    eventType?: true
    alertLevel?: true
    intensity?: true
    source?: true
    timestamp?: true
  }

  export type EnvironmentalEventCountAggregateInputType = {
    id?: true
    city?: true
    eventType?: true
    alertLevel?: true
    intensity?: true
    source?: true
    timestamp?: true
    _all?: true
  }

  export type EnvironmentalEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EnvironmentalEvent to aggregate.
     */
    where?: EnvironmentalEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnvironmentalEvents to fetch.
     */
    orderBy?: EnvironmentalEventOrderByWithRelationInput | EnvironmentalEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnvironmentalEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnvironmentalEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnvironmentalEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EnvironmentalEvents
    **/
    _count?: true | EnvironmentalEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnvironmentalEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnvironmentalEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnvironmentalEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnvironmentalEventMaxAggregateInputType
  }

  export type GetEnvironmentalEventAggregateType<T extends EnvironmentalEventAggregateArgs> = {
        [P in keyof T & keyof AggregateEnvironmentalEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnvironmentalEvent[P]>
      : GetScalarType<T[P], AggregateEnvironmentalEvent[P]>
  }




  export type EnvironmentalEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnvironmentalEventWhereInput
    orderBy?: EnvironmentalEventOrderByWithAggregationInput | EnvironmentalEventOrderByWithAggregationInput[]
    by: EnvironmentalEventScalarFieldEnum[] | EnvironmentalEventScalarFieldEnum
    having?: EnvironmentalEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnvironmentalEventCountAggregateInputType | true
    _avg?: EnvironmentalEventAvgAggregateInputType
    _sum?: EnvironmentalEventSumAggregateInputType
    _min?: EnvironmentalEventMinAggregateInputType
    _max?: EnvironmentalEventMaxAggregateInputType
  }

  export type EnvironmentalEventGroupByOutputType = {
    id: string
    city: string
    eventType: string
    alertLevel: string
    intensity: number
    source: string
    timestamp: Date
    _count: EnvironmentalEventCountAggregateOutputType | null
    _avg: EnvironmentalEventAvgAggregateOutputType | null
    _sum: EnvironmentalEventSumAggregateOutputType | null
    _min: EnvironmentalEventMinAggregateOutputType | null
    _max: EnvironmentalEventMaxAggregateOutputType | null
  }

  type GetEnvironmentalEventGroupByPayload<T extends EnvironmentalEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnvironmentalEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnvironmentalEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnvironmentalEventGroupByOutputType[P]>
            : GetScalarType<T[P], EnvironmentalEventGroupByOutputType[P]>
        }
      >
    >


  export type EnvironmentalEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    city?: boolean
    eventType?: boolean
    alertLevel?: boolean
    intensity?: boolean
    source?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["environmentalEvent"]>

  export type EnvironmentalEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    city?: boolean
    eventType?: boolean
    alertLevel?: boolean
    intensity?: boolean
    source?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["environmentalEvent"]>

  export type EnvironmentalEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    city?: boolean
    eventType?: boolean
    alertLevel?: boolean
    intensity?: boolean
    source?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["environmentalEvent"]>

  export type EnvironmentalEventSelectScalar = {
    id?: boolean
    city?: boolean
    eventType?: boolean
    alertLevel?: boolean
    intensity?: boolean
    source?: boolean
    timestamp?: boolean
  }

  export type EnvironmentalEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "city" | "eventType" | "alertLevel" | "intensity" | "source" | "timestamp", ExtArgs["result"]["environmentalEvent"]>

  export type $EnvironmentalEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EnvironmentalEvent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      city: string
      eventType: string
      alertLevel: string
      intensity: number
      source: string
      timestamp: Date
    }, ExtArgs["result"]["environmentalEvent"]>
    composites: {}
  }

  type EnvironmentalEventGetPayload<S extends boolean | null | undefined | EnvironmentalEventDefaultArgs> = $Result.GetResult<Prisma.$EnvironmentalEventPayload, S>

  type EnvironmentalEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnvironmentalEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnvironmentalEventCountAggregateInputType | true
    }

  export interface EnvironmentalEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EnvironmentalEvent'], meta: { name: 'EnvironmentalEvent' } }
    /**
     * Find zero or one EnvironmentalEvent that matches the filter.
     * @param {EnvironmentalEventFindUniqueArgs} args - Arguments to find a EnvironmentalEvent
     * @example
     * // Get one EnvironmentalEvent
     * const environmentalEvent = await prisma.environmentalEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnvironmentalEventFindUniqueArgs>(args: SelectSubset<T, EnvironmentalEventFindUniqueArgs<ExtArgs>>): Prisma__EnvironmentalEventClient<$Result.GetResult<Prisma.$EnvironmentalEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EnvironmentalEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnvironmentalEventFindUniqueOrThrowArgs} args - Arguments to find a EnvironmentalEvent
     * @example
     * // Get one EnvironmentalEvent
     * const environmentalEvent = await prisma.environmentalEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnvironmentalEventFindUniqueOrThrowArgs>(args: SelectSubset<T, EnvironmentalEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnvironmentalEventClient<$Result.GetResult<Prisma.$EnvironmentalEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EnvironmentalEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentalEventFindFirstArgs} args - Arguments to find a EnvironmentalEvent
     * @example
     * // Get one EnvironmentalEvent
     * const environmentalEvent = await prisma.environmentalEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnvironmentalEventFindFirstArgs>(args?: SelectSubset<T, EnvironmentalEventFindFirstArgs<ExtArgs>>): Prisma__EnvironmentalEventClient<$Result.GetResult<Prisma.$EnvironmentalEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EnvironmentalEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentalEventFindFirstOrThrowArgs} args - Arguments to find a EnvironmentalEvent
     * @example
     * // Get one EnvironmentalEvent
     * const environmentalEvent = await prisma.environmentalEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnvironmentalEventFindFirstOrThrowArgs>(args?: SelectSubset<T, EnvironmentalEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnvironmentalEventClient<$Result.GetResult<Prisma.$EnvironmentalEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EnvironmentalEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentalEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EnvironmentalEvents
     * const environmentalEvents = await prisma.environmentalEvent.findMany()
     * 
     * // Get first 10 EnvironmentalEvents
     * const environmentalEvents = await prisma.environmentalEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const environmentalEventWithIdOnly = await prisma.environmentalEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnvironmentalEventFindManyArgs>(args?: SelectSubset<T, EnvironmentalEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnvironmentalEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EnvironmentalEvent.
     * @param {EnvironmentalEventCreateArgs} args - Arguments to create a EnvironmentalEvent.
     * @example
     * // Create one EnvironmentalEvent
     * const EnvironmentalEvent = await prisma.environmentalEvent.create({
     *   data: {
     *     // ... data to create a EnvironmentalEvent
     *   }
     * })
     * 
     */
    create<T extends EnvironmentalEventCreateArgs>(args: SelectSubset<T, EnvironmentalEventCreateArgs<ExtArgs>>): Prisma__EnvironmentalEventClient<$Result.GetResult<Prisma.$EnvironmentalEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EnvironmentalEvents.
     * @param {EnvironmentalEventCreateManyArgs} args - Arguments to create many EnvironmentalEvents.
     * @example
     * // Create many EnvironmentalEvents
     * const environmentalEvent = await prisma.environmentalEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnvironmentalEventCreateManyArgs>(args?: SelectSubset<T, EnvironmentalEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EnvironmentalEvents and returns the data saved in the database.
     * @param {EnvironmentalEventCreateManyAndReturnArgs} args - Arguments to create many EnvironmentalEvents.
     * @example
     * // Create many EnvironmentalEvents
     * const environmentalEvent = await prisma.environmentalEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EnvironmentalEvents and only return the `id`
     * const environmentalEventWithIdOnly = await prisma.environmentalEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnvironmentalEventCreateManyAndReturnArgs>(args?: SelectSubset<T, EnvironmentalEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnvironmentalEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EnvironmentalEvent.
     * @param {EnvironmentalEventDeleteArgs} args - Arguments to delete one EnvironmentalEvent.
     * @example
     * // Delete one EnvironmentalEvent
     * const EnvironmentalEvent = await prisma.environmentalEvent.delete({
     *   where: {
     *     // ... filter to delete one EnvironmentalEvent
     *   }
     * })
     * 
     */
    delete<T extends EnvironmentalEventDeleteArgs>(args: SelectSubset<T, EnvironmentalEventDeleteArgs<ExtArgs>>): Prisma__EnvironmentalEventClient<$Result.GetResult<Prisma.$EnvironmentalEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EnvironmentalEvent.
     * @param {EnvironmentalEventUpdateArgs} args - Arguments to update one EnvironmentalEvent.
     * @example
     * // Update one EnvironmentalEvent
     * const environmentalEvent = await prisma.environmentalEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnvironmentalEventUpdateArgs>(args: SelectSubset<T, EnvironmentalEventUpdateArgs<ExtArgs>>): Prisma__EnvironmentalEventClient<$Result.GetResult<Prisma.$EnvironmentalEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EnvironmentalEvents.
     * @param {EnvironmentalEventDeleteManyArgs} args - Arguments to filter EnvironmentalEvents to delete.
     * @example
     * // Delete a few EnvironmentalEvents
     * const { count } = await prisma.environmentalEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnvironmentalEventDeleteManyArgs>(args?: SelectSubset<T, EnvironmentalEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EnvironmentalEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentalEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EnvironmentalEvents
     * const environmentalEvent = await prisma.environmentalEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnvironmentalEventUpdateManyArgs>(args: SelectSubset<T, EnvironmentalEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EnvironmentalEvents and returns the data updated in the database.
     * @param {EnvironmentalEventUpdateManyAndReturnArgs} args - Arguments to update many EnvironmentalEvents.
     * @example
     * // Update many EnvironmentalEvents
     * const environmentalEvent = await prisma.environmentalEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EnvironmentalEvents and only return the `id`
     * const environmentalEventWithIdOnly = await prisma.environmentalEvent.updateManyAndReturn({
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
    updateManyAndReturn<T extends EnvironmentalEventUpdateManyAndReturnArgs>(args: SelectSubset<T, EnvironmentalEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnvironmentalEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EnvironmentalEvent.
     * @param {EnvironmentalEventUpsertArgs} args - Arguments to update or create a EnvironmentalEvent.
     * @example
     * // Update or create a EnvironmentalEvent
     * const environmentalEvent = await prisma.environmentalEvent.upsert({
     *   create: {
     *     // ... data to create a EnvironmentalEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EnvironmentalEvent we want to update
     *   }
     * })
     */
    upsert<T extends EnvironmentalEventUpsertArgs>(args: SelectSubset<T, EnvironmentalEventUpsertArgs<ExtArgs>>): Prisma__EnvironmentalEventClient<$Result.GetResult<Prisma.$EnvironmentalEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EnvironmentalEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentalEventCountArgs} args - Arguments to filter EnvironmentalEvents to count.
     * @example
     * // Count the number of EnvironmentalEvents
     * const count = await prisma.environmentalEvent.count({
     *   where: {
     *     // ... the filter for the EnvironmentalEvents we want to count
     *   }
     * })
    **/
    count<T extends EnvironmentalEventCountArgs>(
      args?: Subset<T, EnvironmentalEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnvironmentalEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EnvironmentalEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentalEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnvironmentalEventAggregateArgs>(args: Subset<T, EnvironmentalEventAggregateArgs>): Prisma.PrismaPromise<GetEnvironmentalEventAggregateType<T>>

    /**
     * Group by EnvironmentalEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentalEventGroupByArgs} args - Group by arguments.
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
      T extends EnvironmentalEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnvironmentalEventGroupByArgs['orderBy'] }
        : { orderBy?: EnvironmentalEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EnvironmentalEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnvironmentalEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EnvironmentalEvent model
   */
  readonly fields: EnvironmentalEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EnvironmentalEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnvironmentalEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the EnvironmentalEvent model
   */
  interface EnvironmentalEventFieldRefs {
    readonly id: FieldRef<"EnvironmentalEvent", 'String'>
    readonly city: FieldRef<"EnvironmentalEvent", 'String'>
    readonly eventType: FieldRef<"EnvironmentalEvent", 'String'>
    readonly alertLevel: FieldRef<"EnvironmentalEvent", 'String'>
    readonly intensity: FieldRef<"EnvironmentalEvent", 'Float'>
    readonly source: FieldRef<"EnvironmentalEvent", 'String'>
    readonly timestamp: FieldRef<"EnvironmentalEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EnvironmentalEvent findUnique
   */
  export type EnvironmentalEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentalEvent
     */
    select?: EnvironmentalEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentalEvent
     */
    omit?: EnvironmentalEventOmit<ExtArgs> | null
    /**
     * Filter, which EnvironmentalEvent to fetch.
     */
    where: EnvironmentalEventWhereUniqueInput
  }

  /**
   * EnvironmentalEvent findUniqueOrThrow
   */
  export type EnvironmentalEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentalEvent
     */
    select?: EnvironmentalEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentalEvent
     */
    omit?: EnvironmentalEventOmit<ExtArgs> | null
    /**
     * Filter, which EnvironmentalEvent to fetch.
     */
    where: EnvironmentalEventWhereUniqueInput
  }

  /**
   * EnvironmentalEvent findFirst
   */
  export type EnvironmentalEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentalEvent
     */
    select?: EnvironmentalEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentalEvent
     */
    omit?: EnvironmentalEventOmit<ExtArgs> | null
    /**
     * Filter, which EnvironmentalEvent to fetch.
     */
    where?: EnvironmentalEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnvironmentalEvents to fetch.
     */
    orderBy?: EnvironmentalEventOrderByWithRelationInput | EnvironmentalEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EnvironmentalEvents.
     */
    cursor?: EnvironmentalEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnvironmentalEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnvironmentalEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnvironmentalEvents.
     */
    distinct?: EnvironmentalEventScalarFieldEnum | EnvironmentalEventScalarFieldEnum[]
  }

  /**
   * EnvironmentalEvent findFirstOrThrow
   */
  export type EnvironmentalEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentalEvent
     */
    select?: EnvironmentalEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentalEvent
     */
    omit?: EnvironmentalEventOmit<ExtArgs> | null
    /**
     * Filter, which EnvironmentalEvent to fetch.
     */
    where?: EnvironmentalEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnvironmentalEvents to fetch.
     */
    orderBy?: EnvironmentalEventOrderByWithRelationInput | EnvironmentalEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EnvironmentalEvents.
     */
    cursor?: EnvironmentalEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnvironmentalEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnvironmentalEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnvironmentalEvents.
     */
    distinct?: EnvironmentalEventScalarFieldEnum | EnvironmentalEventScalarFieldEnum[]
  }

  /**
   * EnvironmentalEvent findMany
   */
  export type EnvironmentalEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentalEvent
     */
    select?: EnvironmentalEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentalEvent
     */
    omit?: EnvironmentalEventOmit<ExtArgs> | null
    /**
     * Filter, which EnvironmentalEvents to fetch.
     */
    where?: EnvironmentalEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnvironmentalEvents to fetch.
     */
    orderBy?: EnvironmentalEventOrderByWithRelationInput | EnvironmentalEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EnvironmentalEvents.
     */
    cursor?: EnvironmentalEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnvironmentalEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnvironmentalEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnvironmentalEvents.
     */
    distinct?: EnvironmentalEventScalarFieldEnum | EnvironmentalEventScalarFieldEnum[]
  }

  /**
   * EnvironmentalEvent create
   */
  export type EnvironmentalEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentalEvent
     */
    select?: EnvironmentalEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentalEvent
     */
    omit?: EnvironmentalEventOmit<ExtArgs> | null
    /**
     * The data needed to create a EnvironmentalEvent.
     */
    data: XOR<EnvironmentalEventCreateInput, EnvironmentalEventUncheckedCreateInput>
  }

  /**
   * EnvironmentalEvent createMany
   */
  export type EnvironmentalEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EnvironmentalEvents.
     */
    data: EnvironmentalEventCreateManyInput | EnvironmentalEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EnvironmentalEvent createManyAndReturn
   */
  export type EnvironmentalEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentalEvent
     */
    select?: EnvironmentalEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentalEvent
     */
    omit?: EnvironmentalEventOmit<ExtArgs> | null
    /**
     * The data used to create many EnvironmentalEvents.
     */
    data: EnvironmentalEventCreateManyInput | EnvironmentalEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EnvironmentalEvent update
   */
  export type EnvironmentalEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentalEvent
     */
    select?: EnvironmentalEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentalEvent
     */
    omit?: EnvironmentalEventOmit<ExtArgs> | null
    /**
     * The data needed to update a EnvironmentalEvent.
     */
    data: XOR<EnvironmentalEventUpdateInput, EnvironmentalEventUncheckedUpdateInput>
    /**
     * Choose, which EnvironmentalEvent to update.
     */
    where: EnvironmentalEventWhereUniqueInput
  }

  /**
   * EnvironmentalEvent updateMany
   */
  export type EnvironmentalEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EnvironmentalEvents.
     */
    data: XOR<EnvironmentalEventUpdateManyMutationInput, EnvironmentalEventUncheckedUpdateManyInput>
    /**
     * Filter which EnvironmentalEvents to update
     */
    where?: EnvironmentalEventWhereInput
    /**
     * Limit how many EnvironmentalEvents to update.
     */
    limit?: number
  }

  /**
   * EnvironmentalEvent updateManyAndReturn
   */
  export type EnvironmentalEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentalEvent
     */
    select?: EnvironmentalEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentalEvent
     */
    omit?: EnvironmentalEventOmit<ExtArgs> | null
    /**
     * The data used to update EnvironmentalEvents.
     */
    data: XOR<EnvironmentalEventUpdateManyMutationInput, EnvironmentalEventUncheckedUpdateManyInput>
    /**
     * Filter which EnvironmentalEvents to update
     */
    where?: EnvironmentalEventWhereInput
    /**
     * Limit how many EnvironmentalEvents to update.
     */
    limit?: number
  }

  /**
   * EnvironmentalEvent upsert
   */
  export type EnvironmentalEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentalEvent
     */
    select?: EnvironmentalEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentalEvent
     */
    omit?: EnvironmentalEventOmit<ExtArgs> | null
    /**
     * The filter to search for the EnvironmentalEvent to update in case it exists.
     */
    where: EnvironmentalEventWhereUniqueInput
    /**
     * In case the EnvironmentalEvent found by the `where` argument doesn't exist, create a new EnvironmentalEvent with this data.
     */
    create: XOR<EnvironmentalEventCreateInput, EnvironmentalEventUncheckedCreateInput>
    /**
     * In case the EnvironmentalEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnvironmentalEventUpdateInput, EnvironmentalEventUncheckedUpdateInput>
  }

  /**
   * EnvironmentalEvent delete
   */
  export type EnvironmentalEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentalEvent
     */
    select?: EnvironmentalEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentalEvent
     */
    omit?: EnvironmentalEventOmit<ExtArgs> | null
    /**
     * Filter which EnvironmentalEvent to delete.
     */
    where: EnvironmentalEventWhereUniqueInput
  }

  /**
   * EnvironmentalEvent deleteMany
   */
  export type EnvironmentalEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EnvironmentalEvents to delete
     */
    where?: EnvironmentalEventWhereInput
    /**
     * Limit how many EnvironmentalEvents to delete.
     */
    limit?: number
  }

  /**
   * EnvironmentalEvent without action
   */
  export type EnvironmentalEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentalEvent
     */
    select?: EnvironmentalEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentalEvent
     */
    omit?: EnvironmentalEventOmit<ExtArgs> | null
  }


  /**
   * Model Claim
   */

  export type AggregateClaim = {
    _count: ClaimCountAggregateOutputType | null
    _avg: ClaimAvgAggregateOutputType | null
    _sum: ClaimSumAggregateOutputType | null
    _min: ClaimMinAggregateOutputType | null
    _max: ClaimMaxAggregateOutputType | null
  }

  export type ClaimAvgAggregateOutputType = {
    fraudScore: number | null
    workProofScore: number | null
    payoutAmount: number | null
  }

  export type ClaimSumAggregateOutputType = {
    fraudScore: number | null
    workProofScore: number | null
    payoutAmount: number | null
  }

  export type ClaimMinAggregateOutputType = {
    id: string | null
    userId: string | null
    policyId: string | null
    triggerEvent: string | null
    status: $Enums.ClaimStatus | null
    fraudScore: number | null
    workProofScore: number | null
    payoutAmount: number | null
    razorpayPayoutId: string | null
    reviewerNotes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClaimMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    policyId: string | null
    triggerEvent: string | null
    status: $Enums.ClaimStatus | null
    fraudScore: number | null
    workProofScore: number | null
    payoutAmount: number | null
    razorpayPayoutId: string | null
    reviewerNotes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClaimCountAggregateOutputType = {
    id: number
    userId: number
    policyId: number
    triggerEvent: number
    status: number
    fraudScore: number
    workProofScore: number
    payoutAmount: number
    razorpayPayoutId: number
    reviewerNotes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClaimAvgAggregateInputType = {
    fraudScore?: true
    workProofScore?: true
    payoutAmount?: true
  }

  export type ClaimSumAggregateInputType = {
    fraudScore?: true
    workProofScore?: true
    payoutAmount?: true
  }

  export type ClaimMinAggregateInputType = {
    id?: true
    userId?: true
    policyId?: true
    triggerEvent?: true
    status?: true
    fraudScore?: true
    workProofScore?: true
    payoutAmount?: true
    razorpayPayoutId?: true
    reviewerNotes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClaimMaxAggregateInputType = {
    id?: true
    userId?: true
    policyId?: true
    triggerEvent?: true
    status?: true
    fraudScore?: true
    workProofScore?: true
    payoutAmount?: true
    razorpayPayoutId?: true
    reviewerNotes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClaimCountAggregateInputType = {
    id?: true
    userId?: true
    policyId?: true
    triggerEvent?: true
    status?: true
    fraudScore?: true
    workProofScore?: true
    payoutAmount?: true
    razorpayPayoutId?: true
    reviewerNotes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClaimAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Claim to aggregate.
     */
    where?: ClaimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Claims to fetch.
     */
    orderBy?: ClaimOrderByWithRelationInput | ClaimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClaimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Claims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Claims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Claims
    **/
    _count?: true | ClaimCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClaimAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClaimSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClaimMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClaimMaxAggregateInputType
  }

  export type GetClaimAggregateType<T extends ClaimAggregateArgs> = {
        [P in keyof T & keyof AggregateClaim]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClaim[P]>
      : GetScalarType<T[P], AggregateClaim[P]>
  }




  export type ClaimGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClaimWhereInput
    orderBy?: ClaimOrderByWithAggregationInput | ClaimOrderByWithAggregationInput[]
    by: ClaimScalarFieldEnum[] | ClaimScalarFieldEnum
    having?: ClaimScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClaimCountAggregateInputType | true
    _avg?: ClaimAvgAggregateInputType
    _sum?: ClaimSumAggregateInputType
    _min?: ClaimMinAggregateInputType
    _max?: ClaimMaxAggregateInputType
  }

  export type ClaimGroupByOutputType = {
    id: string
    userId: string
    policyId: string
    triggerEvent: string
    status: $Enums.ClaimStatus
    fraudScore: number | null
    workProofScore: number | null
    payoutAmount: number | null
    razorpayPayoutId: string | null
    reviewerNotes: string | null
    createdAt: Date
    updatedAt: Date
    _count: ClaimCountAggregateOutputType | null
    _avg: ClaimAvgAggregateOutputType | null
    _sum: ClaimSumAggregateOutputType | null
    _min: ClaimMinAggregateOutputType | null
    _max: ClaimMaxAggregateOutputType | null
  }

  type GetClaimGroupByPayload<T extends ClaimGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClaimGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClaimGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClaimGroupByOutputType[P]>
            : GetScalarType<T[P], ClaimGroupByOutputType[P]>
        }
      >
    >


  export type ClaimSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    policyId?: boolean
    triggerEvent?: boolean
    status?: boolean
    fraudScore?: boolean
    workProofScore?: boolean
    payoutAmount?: boolean
    razorpayPayoutId?: boolean
    reviewerNotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    policy?: boolean | PolicyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["claim"]>

  export type ClaimSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    policyId?: boolean
    triggerEvent?: boolean
    status?: boolean
    fraudScore?: boolean
    workProofScore?: boolean
    payoutAmount?: boolean
    razorpayPayoutId?: boolean
    reviewerNotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    policy?: boolean | PolicyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["claim"]>

  export type ClaimSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    policyId?: boolean
    triggerEvent?: boolean
    status?: boolean
    fraudScore?: boolean
    workProofScore?: boolean
    payoutAmount?: boolean
    razorpayPayoutId?: boolean
    reviewerNotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    policy?: boolean | PolicyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["claim"]>

  export type ClaimSelectScalar = {
    id?: boolean
    userId?: boolean
    policyId?: boolean
    triggerEvent?: boolean
    status?: boolean
    fraudScore?: boolean
    workProofScore?: boolean
    payoutAmount?: boolean
    razorpayPayoutId?: boolean
    reviewerNotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClaimOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "policyId" | "triggerEvent" | "status" | "fraudScore" | "workProofScore" | "payoutAmount" | "razorpayPayoutId" | "reviewerNotes" | "createdAt" | "updatedAt", ExtArgs["result"]["claim"]>
  export type ClaimInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    policy?: boolean | PolicyDefaultArgs<ExtArgs>
  }
  export type ClaimIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    policy?: boolean | PolicyDefaultArgs<ExtArgs>
  }
  export type ClaimIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    policy?: boolean | PolicyDefaultArgs<ExtArgs>
  }

  export type $ClaimPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Claim"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      policy: Prisma.$PolicyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      policyId: string
      triggerEvent: string
      status: $Enums.ClaimStatus
      fraudScore: number | null
      workProofScore: number | null
      payoutAmount: number | null
      razorpayPayoutId: string | null
      reviewerNotes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["claim"]>
    composites: {}
  }

  type ClaimGetPayload<S extends boolean | null | undefined | ClaimDefaultArgs> = $Result.GetResult<Prisma.$ClaimPayload, S>

  type ClaimCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClaimFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClaimCountAggregateInputType | true
    }

  export interface ClaimDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Claim'], meta: { name: 'Claim' } }
    /**
     * Find zero or one Claim that matches the filter.
     * @param {ClaimFindUniqueArgs} args - Arguments to find a Claim
     * @example
     * // Get one Claim
     * const claim = await prisma.claim.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClaimFindUniqueArgs>(args: SelectSubset<T, ClaimFindUniqueArgs<ExtArgs>>): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Claim that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClaimFindUniqueOrThrowArgs} args - Arguments to find a Claim
     * @example
     * // Get one Claim
     * const claim = await prisma.claim.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClaimFindUniqueOrThrowArgs>(args: SelectSubset<T, ClaimFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Claim that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimFindFirstArgs} args - Arguments to find a Claim
     * @example
     * // Get one Claim
     * const claim = await prisma.claim.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClaimFindFirstArgs>(args?: SelectSubset<T, ClaimFindFirstArgs<ExtArgs>>): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Claim that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimFindFirstOrThrowArgs} args - Arguments to find a Claim
     * @example
     * // Get one Claim
     * const claim = await prisma.claim.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClaimFindFirstOrThrowArgs>(args?: SelectSubset<T, ClaimFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Claims that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Claims
     * const claims = await prisma.claim.findMany()
     * 
     * // Get first 10 Claims
     * const claims = await prisma.claim.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const claimWithIdOnly = await prisma.claim.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClaimFindManyArgs>(args?: SelectSubset<T, ClaimFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Claim.
     * @param {ClaimCreateArgs} args - Arguments to create a Claim.
     * @example
     * // Create one Claim
     * const Claim = await prisma.claim.create({
     *   data: {
     *     // ... data to create a Claim
     *   }
     * })
     * 
     */
    create<T extends ClaimCreateArgs>(args: SelectSubset<T, ClaimCreateArgs<ExtArgs>>): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Claims.
     * @param {ClaimCreateManyArgs} args - Arguments to create many Claims.
     * @example
     * // Create many Claims
     * const claim = await prisma.claim.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClaimCreateManyArgs>(args?: SelectSubset<T, ClaimCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Claims and returns the data saved in the database.
     * @param {ClaimCreateManyAndReturnArgs} args - Arguments to create many Claims.
     * @example
     * // Create many Claims
     * const claim = await prisma.claim.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Claims and only return the `id`
     * const claimWithIdOnly = await prisma.claim.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClaimCreateManyAndReturnArgs>(args?: SelectSubset<T, ClaimCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Claim.
     * @param {ClaimDeleteArgs} args - Arguments to delete one Claim.
     * @example
     * // Delete one Claim
     * const Claim = await prisma.claim.delete({
     *   where: {
     *     // ... filter to delete one Claim
     *   }
     * })
     * 
     */
    delete<T extends ClaimDeleteArgs>(args: SelectSubset<T, ClaimDeleteArgs<ExtArgs>>): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Claim.
     * @param {ClaimUpdateArgs} args - Arguments to update one Claim.
     * @example
     * // Update one Claim
     * const claim = await prisma.claim.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClaimUpdateArgs>(args: SelectSubset<T, ClaimUpdateArgs<ExtArgs>>): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Claims.
     * @param {ClaimDeleteManyArgs} args - Arguments to filter Claims to delete.
     * @example
     * // Delete a few Claims
     * const { count } = await prisma.claim.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClaimDeleteManyArgs>(args?: SelectSubset<T, ClaimDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Claims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Claims
     * const claim = await prisma.claim.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClaimUpdateManyArgs>(args: SelectSubset<T, ClaimUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Claims and returns the data updated in the database.
     * @param {ClaimUpdateManyAndReturnArgs} args - Arguments to update many Claims.
     * @example
     * // Update many Claims
     * const claim = await prisma.claim.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Claims and only return the `id`
     * const claimWithIdOnly = await prisma.claim.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClaimUpdateManyAndReturnArgs>(args: SelectSubset<T, ClaimUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Claim.
     * @param {ClaimUpsertArgs} args - Arguments to update or create a Claim.
     * @example
     * // Update or create a Claim
     * const claim = await prisma.claim.upsert({
     *   create: {
     *     // ... data to create a Claim
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Claim we want to update
     *   }
     * })
     */
    upsert<T extends ClaimUpsertArgs>(args: SelectSubset<T, ClaimUpsertArgs<ExtArgs>>): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Claims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimCountArgs} args - Arguments to filter Claims to count.
     * @example
     * // Count the number of Claims
     * const count = await prisma.claim.count({
     *   where: {
     *     // ... the filter for the Claims we want to count
     *   }
     * })
    **/
    count<T extends ClaimCountArgs>(
      args?: Subset<T, ClaimCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClaimCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Claim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClaimAggregateArgs>(args: Subset<T, ClaimAggregateArgs>): Prisma.PrismaPromise<GetClaimAggregateType<T>>

    /**
     * Group by Claim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimGroupByArgs} args - Group by arguments.
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
      T extends ClaimGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClaimGroupByArgs['orderBy'] }
        : { orderBy?: ClaimGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClaimGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClaimGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Claim model
   */
  readonly fields: ClaimFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Claim.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClaimClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    policy<T extends PolicyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PolicyDefaultArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Claim model
   */
  interface ClaimFieldRefs {
    readonly id: FieldRef<"Claim", 'String'>
    readonly userId: FieldRef<"Claim", 'String'>
    readonly policyId: FieldRef<"Claim", 'String'>
    readonly triggerEvent: FieldRef<"Claim", 'String'>
    readonly status: FieldRef<"Claim", 'ClaimStatus'>
    readonly fraudScore: FieldRef<"Claim", 'Float'>
    readonly workProofScore: FieldRef<"Claim", 'Float'>
    readonly payoutAmount: FieldRef<"Claim", 'Int'>
    readonly razorpayPayoutId: FieldRef<"Claim", 'String'>
    readonly reviewerNotes: FieldRef<"Claim", 'String'>
    readonly createdAt: FieldRef<"Claim", 'DateTime'>
    readonly updatedAt: FieldRef<"Claim", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Claim findUnique
   */
  export type ClaimFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * Filter, which Claim to fetch.
     */
    where: ClaimWhereUniqueInput
  }

  /**
   * Claim findUniqueOrThrow
   */
  export type ClaimFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * Filter, which Claim to fetch.
     */
    where: ClaimWhereUniqueInput
  }

  /**
   * Claim findFirst
   */
  export type ClaimFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * Filter, which Claim to fetch.
     */
    where?: ClaimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Claims to fetch.
     */
    orderBy?: ClaimOrderByWithRelationInput | ClaimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Claims.
     */
    cursor?: ClaimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Claims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Claims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Claims.
     */
    distinct?: ClaimScalarFieldEnum | ClaimScalarFieldEnum[]
  }

  /**
   * Claim findFirstOrThrow
   */
  export type ClaimFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * Filter, which Claim to fetch.
     */
    where?: ClaimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Claims to fetch.
     */
    orderBy?: ClaimOrderByWithRelationInput | ClaimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Claims.
     */
    cursor?: ClaimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Claims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Claims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Claims.
     */
    distinct?: ClaimScalarFieldEnum | ClaimScalarFieldEnum[]
  }

  /**
   * Claim findMany
   */
  export type ClaimFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * Filter, which Claims to fetch.
     */
    where?: ClaimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Claims to fetch.
     */
    orderBy?: ClaimOrderByWithRelationInput | ClaimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Claims.
     */
    cursor?: ClaimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Claims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Claims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Claims.
     */
    distinct?: ClaimScalarFieldEnum | ClaimScalarFieldEnum[]
  }

  /**
   * Claim create
   */
  export type ClaimCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * The data needed to create a Claim.
     */
    data: XOR<ClaimCreateInput, ClaimUncheckedCreateInput>
  }

  /**
   * Claim createMany
   */
  export type ClaimCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Claims.
     */
    data: ClaimCreateManyInput | ClaimCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Claim createManyAndReturn
   */
  export type ClaimCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * The data used to create many Claims.
     */
    data: ClaimCreateManyInput | ClaimCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Claim update
   */
  export type ClaimUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * The data needed to update a Claim.
     */
    data: XOR<ClaimUpdateInput, ClaimUncheckedUpdateInput>
    /**
     * Choose, which Claim to update.
     */
    where: ClaimWhereUniqueInput
  }

  /**
   * Claim updateMany
   */
  export type ClaimUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Claims.
     */
    data: XOR<ClaimUpdateManyMutationInput, ClaimUncheckedUpdateManyInput>
    /**
     * Filter which Claims to update
     */
    where?: ClaimWhereInput
    /**
     * Limit how many Claims to update.
     */
    limit?: number
  }

  /**
   * Claim updateManyAndReturn
   */
  export type ClaimUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * The data used to update Claims.
     */
    data: XOR<ClaimUpdateManyMutationInput, ClaimUncheckedUpdateManyInput>
    /**
     * Filter which Claims to update
     */
    where?: ClaimWhereInput
    /**
     * Limit how many Claims to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Claim upsert
   */
  export type ClaimUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * The filter to search for the Claim to update in case it exists.
     */
    where: ClaimWhereUniqueInput
    /**
     * In case the Claim found by the `where` argument doesn't exist, create a new Claim with this data.
     */
    create: XOR<ClaimCreateInput, ClaimUncheckedCreateInput>
    /**
     * In case the Claim was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClaimUpdateInput, ClaimUncheckedUpdateInput>
  }

  /**
   * Claim delete
   */
  export type ClaimDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * Filter which Claim to delete.
     */
    where: ClaimWhereUniqueInput
  }

  /**
   * Claim deleteMany
   */
  export type ClaimDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Claims to delete
     */
    where?: ClaimWhereInput
    /**
     * Limit how many Claims to delete.
     */
    limit?: number
  }

  /**
   * Claim without action
   */
  export type ClaimDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
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
    fullName: 'fullName',
    phoneNumber: 'phoneNumber',
    role: 'role',
    city: 'city',
    deliveryPlatform: 'deliveryPlatform',
    vehicleType: 'vehicleType',
    weeklyEarnings: 'weeklyEarnings',
    upiId: 'upiId',
    trustScore: 'trustScore',
    isVerified: 'isVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const OtpVerificationScalarFieldEnum: {
    id: 'id',
    phoneNumber: 'phoneNumber',
    otpCode: 'otpCode',
    expiresAt: 'expiresAt',
    verified: 'verified',
    createdAt: 'createdAt'
  };

  export type OtpVerificationScalarFieldEnum = (typeof OtpVerificationScalarFieldEnum)[keyof typeof OtpVerificationScalarFieldEnum]


  export const PolicyScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    planTier: 'planTier',
    status: 'status',
    coverageAmount: 'coverageAmount',
    premiumPaid: 'premiumPaid',
    razorpayOrderId: 'razorpayOrderId',
    razorpayPaymentId: 'razorpayPaymentId',
    startDate: 'startDate',
    endDate: 'endDate',
    createdAt: 'createdAt'
  };

  export type PolicyScalarFieldEnum = (typeof PolicyScalarFieldEnum)[keyof typeof PolicyScalarFieldEnum]


  export const WorkSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    startTime: 'startTime',
    endTime: 'endTime',
    activeMinutes: 'activeMinutes',
    ipAddress: 'ipAddress',
    ipCity: 'ipCity',
    platformActiveFlag: 'platformActiveFlag',
    sessionHash: 'sessionHash',
    previousSessionHash: 'previousSessionHash',
    createdAt: 'createdAt'
  };

  export type WorkSessionScalarFieldEnum = (typeof WorkSessionScalarFieldEnum)[keyof typeof WorkSessionScalarFieldEnum]


  export const EnvironmentalEventScalarFieldEnum: {
    id: 'id',
    city: 'city',
    eventType: 'eventType',
    alertLevel: 'alertLevel',
    intensity: 'intensity',
    source: 'source',
    timestamp: 'timestamp'
  };

  export type EnvironmentalEventScalarFieldEnum = (typeof EnvironmentalEventScalarFieldEnum)[keyof typeof EnvironmentalEventScalarFieldEnum]


  export const ClaimScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    policyId: 'policyId',
    triggerEvent: 'triggerEvent',
    status: 'status',
    fraudScore: 'fraudScore',
    workProofScore: 'workProofScore',
    payoutAmount: 'payoutAmount',
    razorpayPayoutId: 'razorpayPayoutId',
    reviewerNotes: 'reviewerNotes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClaimScalarFieldEnum = (typeof ClaimScalarFieldEnum)[keyof typeof ClaimScalarFieldEnum]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'PlanTier'
   */
  export type EnumPlanTierFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanTier'>
    


  /**
   * Reference to a field of type 'PlanTier[]'
   */
  export type ListEnumPlanTierFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanTier[]'>
    


  /**
   * Reference to a field of type 'PolicyStatus'
   */
  export type EnumPolicyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PolicyStatus'>
    


  /**
   * Reference to a field of type 'PolicyStatus[]'
   */
  export type ListEnumPolicyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PolicyStatus[]'>
    


  /**
   * Reference to a field of type 'ClaimStatus'
   */
  export type EnumClaimStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ClaimStatus'>
    


  /**
   * Reference to a field of type 'ClaimStatus[]'
   */
  export type ListEnumClaimStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ClaimStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    phoneNumber?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    city?: StringFilter<"User"> | string
    deliveryPlatform?: StringFilter<"User"> | string
    vehicleType?: StringFilter<"User"> | string
    weeklyEarnings?: IntFilter<"User"> | number
    upiId?: StringNullableFilter<"User"> | string | null
    trustScore?: FloatFilter<"User"> | number
    isVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    policies?: PolicyListRelationFilter
    claims?: ClaimListRelationFilter
    sessions?: WorkSessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    city?: SortOrder
    deliveryPlatform?: SortOrder
    vehicleType?: SortOrder
    weeklyEarnings?: SortOrder
    upiId?: SortOrderInput | SortOrder
    trustScore?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    policies?: PolicyOrderByRelationAggregateInput
    claims?: ClaimOrderByRelationAggregateInput
    sessions?: WorkSessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phoneNumber?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    city?: StringFilter<"User"> | string
    deliveryPlatform?: StringFilter<"User"> | string
    vehicleType?: StringFilter<"User"> | string
    weeklyEarnings?: IntFilter<"User"> | number
    upiId?: StringNullableFilter<"User"> | string | null
    trustScore?: FloatFilter<"User"> | number
    isVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    policies?: PolicyListRelationFilter
    claims?: ClaimListRelationFilter
    sessions?: WorkSessionListRelationFilter
  }, "id" | "phoneNumber">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    city?: SortOrder
    deliveryPlatform?: SortOrder
    vehicleType?: SortOrder
    weeklyEarnings?: SortOrder
    upiId?: SortOrderInput | SortOrder
    trustScore?: SortOrder
    isVerified?: SortOrder
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
    fullName?: StringWithAggregatesFilter<"User"> | string
    phoneNumber?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    city?: StringWithAggregatesFilter<"User"> | string
    deliveryPlatform?: StringWithAggregatesFilter<"User"> | string
    vehicleType?: StringWithAggregatesFilter<"User"> | string
    weeklyEarnings?: IntWithAggregatesFilter<"User"> | number
    upiId?: StringNullableWithAggregatesFilter<"User"> | string | null
    trustScore?: FloatWithAggregatesFilter<"User"> | number
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type OtpVerificationWhereInput = {
    AND?: OtpVerificationWhereInput | OtpVerificationWhereInput[]
    OR?: OtpVerificationWhereInput[]
    NOT?: OtpVerificationWhereInput | OtpVerificationWhereInput[]
    id?: StringFilter<"OtpVerification"> | string
    phoneNumber?: StringFilter<"OtpVerification"> | string
    otpCode?: StringFilter<"OtpVerification"> | string
    expiresAt?: DateTimeFilter<"OtpVerification"> | Date | string
    verified?: BoolFilter<"OtpVerification"> | boolean
    createdAt?: DateTimeFilter<"OtpVerification"> | Date | string
  }

  export type OtpVerificationOrderByWithRelationInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    otpCode?: SortOrder
    expiresAt?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
  }

  export type OtpVerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OtpVerificationWhereInput | OtpVerificationWhereInput[]
    OR?: OtpVerificationWhereInput[]
    NOT?: OtpVerificationWhereInput | OtpVerificationWhereInput[]
    phoneNumber?: StringFilter<"OtpVerification"> | string
    otpCode?: StringFilter<"OtpVerification"> | string
    expiresAt?: DateTimeFilter<"OtpVerification"> | Date | string
    verified?: BoolFilter<"OtpVerification"> | boolean
    createdAt?: DateTimeFilter<"OtpVerification"> | Date | string
  }, "id">

  export type OtpVerificationOrderByWithAggregationInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    otpCode?: SortOrder
    expiresAt?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    _count?: OtpVerificationCountOrderByAggregateInput
    _max?: OtpVerificationMaxOrderByAggregateInput
    _min?: OtpVerificationMinOrderByAggregateInput
  }

  export type OtpVerificationScalarWhereWithAggregatesInput = {
    AND?: OtpVerificationScalarWhereWithAggregatesInput | OtpVerificationScalarWhereWithAggregatesInput[]
    OR?: OtpVerificationScalarWhereWithAggregatesInput[]
    NOT?: OtpVerificationScalarWhereWithAggregatesInput | OtpVerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OtpVerification"> | string
    phoneNumber?: StringWithAggregatesFilter<"OtpVerification"> | string
    otpCode?: StringWithAggregatesFilter<"OtpVerification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"OtpVerification"> | Date | string
    verified?: BoolWithAggregatesFilter<"OtpVerification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"OtpVerification"> | Date | string
  }

  export type PolicyWhereInput = {
    AND?: PolicyWhereInput | PolicyWhereInput[]
    OR?: PolicyWhereInput[]
    NOT?: PolicyWhereInput | PolicyWhereInput[]
    id?: StringFilter<"Policy"> | string
    userId?: StringFilter<"Policy"> | string
    planTier?: EnumPlanTierFilter<"Policy"> | $Enums.PlanTier
    status?: EnumPolicyStatusFilter<"Policy"> | $Enums.PolicyStatus
    coverageAmount?: IntFilter<"Policy"> | number
    premiumPaid?: IntFilter<"Policy"> | number
    razorpayOrderId?: StringNullableFilter<"Policy"> | string | null
    razorpayPaymentId?: StringNullableFilter<"Policy"> | string | null
    startDate?: DateTimeFilter<"Policy"> | Date | string
    endDate?: DateTimeFilter<"Policy"> | Date | string
    createdAt?: DateTimeFilter<"Policy"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    claims?: ClaimListRelationFilter
  }

  export type PolicyOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    planTier?: SortOrder
    status?: SortOrder
    coverageAmount?: SortOrder
    premiumPaid?: SortOrder
    razorpayOrderId?: SortOrderInput | SortOrder
    razorpayPaymentId?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    claims?: ClaimOrderByRelationAggregateInput
  }

  export type PolicyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    razorpayOrderId?: string
    razorpayPaymentId?: string
    AND?: PolicyWhereInput | PolicyWhereInput[]
    OR?: PolicyWhereInput[]
    NOT?: PolicyWhereInput | PolicyWhereInput[]
    userId?: StringFilter<"Policy"> | string
    planTier?: EnumPlanTierFilter<"Policy"> | $Enums.PlanTier
    status?: EnumPolicyStatusFilter<"Policy"> | $Enums.PolicyStatus
    coverageAmount?: IntFilter<"Policy"> | number
    premiumPaid?: IntFilter<"Policy"> | number
    startDate?: DateTimeFilter<"Policy"> | Date | string
    endDate?: DateTimeFilter<"Policy"> | Date | string
    createdAt?: DateTimeFilter<"Policy"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    claims?: ClaimListRelationFilter
  }, "id" | "razorpayOrderId" | "razorpayPaymentId">

  export type PolicyOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    planTier?: SortOrder
    status?: SortOrder
    coverageAmount?: SortOrder
    premiumPaid?: SortOrder
    razorpayOrderId?: SortOrderInput | SortOrder
    razorpayPaymentId?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    _count?: PolicyCountOrderByAggregateInput
    _avg?: PolicyAvgOrderByAggregateInput
    _max?: PolicyMaxOrderByAggregateInput
    _min?: PolicyMinOrderByAggregateInput
    _sum?: PolicySumOrderByAggregateInput
  }

  export type PolicyScalarWhereWithAggregatesInput = {
    AND?: PolicyScalarWhereWithAggregatesInput | PolicyScalarWhereWithAggregatesInput[]
    OR?: PolicyScalarWhereWithAggregatesInput[]
    NOT?: PolicyScalarWhereWithAggregatesInput | PolicyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Policy"> | string
    userId?: StringWithAggregatesFilter<"Policy"> | string
    planTier?: EnumPlanTierWithAggregatesFilter<"Policy"> | $Enums.PlanTier
    status?: EnumPolicyStatusWithAggregatesFilter<"Policy"> | $Enums.PolicyStatus
    coverageAmount?: IntWithAggregatesFilter<"Policy"> | number
    premiumPaid?: IntWithAggregatesFilter<"Policy"> | number
    razorpayOrderId?: StringNullableWithAggregatesFilter<"Policy"> | string | null
    razorpayPaymentId?: StringNullableWithAggregatesFilter<"Policy"> | string | null
    startDate?: DateTimeWithAggregatesFilter<"Policy"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Policy"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Policy"> | Date | string
  }

  export type WorkSessionWhereInput = {
    AND?: WorkSessionWhereInput | WorkSessionWhereInput[]
    OR?: WorkSessionWhereInput[]
    NOT?: WorkSessionWhereInput | WorkSessionWhereInput[]
    id?: StringFilter<"WorkSession"> | string
    userId?: StringFilter<"WorkSession"> | string
    startTime?: DateTimeFilter<"WorkSession"> | Date | string
    endTime?: DateTimeNullableFilter<"WorkSession"> | Date | string | null
    activeMinutes?: IntFilter<"WorkSession"> | number
    ipAddress?: StringFilter<"WorkSession"> | string
    ipCity?: StringNullableFilter<"WorkSession"> | string | null
    platformActiveFlag?: BoolFilter<"WorkSession"> | boolean
    sessionHash?: StringFilter<"WorkSession"> | string
    previousSessionHash?: StringNullableFilter<"WorkSession"> | string | null
    createdAt?: DateTimeFilter<"WorkSession"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WorkSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    activeMinutes?: SortOrder
    ipAddress?: SortOrder
    ipCity?: SortOrderInput | SortOrder
    platformActiveFlag?: SortOrder
    sessionHash?: SortOrder
    previousSessionHash?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type WorkSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkSessionWhereInput | WorkSessionWhereInput[]
    OR?: WorkSessionWhereInput[]
    NOT?: WorkSessionWhereInput | WorkSessionWhereInput[]
    userId?: StringFilter<"WorkSession"> | string
    startTime?: DateTimeFilter<"WorkSession"> | Date | string
    endTime?: DateTimeNullableFilter<"WorkSession"> | Date | string | null
    activeMinutes?: IntFilter<"WorkSession"> | number
    ipAddress?: StringFilter<"WorkSession"> | string
    ipCity?: StringNullableFilter<"WorkSession"> | string | null
    platformActiveFlag?: BoolFilter<"WorkSession"> | boolean
    sessionHash?: StringFilter<"WorkSession"> | string
    previousSessionHash?: StringNullableFilter<"WorkSession"> | string | null
    createdAt?: DateTimeFilter<"WorkSession"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type WorkSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    activeMinutes?: SortOrder
    ipAddress?: SortOrder
    ipCity?: SortOrderInput | SortOrder
    platformActiveFlag?: SortOrder
    sessionHash?: SortOrder
    previousSessionHash?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: WorkSessionCountOrderByAggregateInput
    _avg?: WorkSessionAvgOrderByAggregateInput
    _max?: WorkSessionMaxOrderByAggregateInput
    _min?: WorkSessionMinOrderByAggregateInput
    _sum?: WorkSessionSumOrderByAggregateInput
  }

  export type WorkSessionScalarWhereWithAggregatesInput = {
    AND?: WorkSessionScalarWhereWithAggregatesInput | WorkSessionScalarWhereWithAggregatesInput[]
    OR?: WorkSessionScalarWhereWithAggregatesInput[]
    NOT?: WorkSessionScalarWhereWithAggregatesInput | WorkSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkSession"> | string
    userId?: StringWithAggregatesFilter<"WorkSession"> | string
    startTime?: DateTimeWithAggregatesFilter<"WorkSession"> | Date | string
    endTime?: DateTimeNullableWithAggregatesFilter<"WorkSession"> | Date | string | null
    activeMinutes?: IntWithAggregatesFilter<"WorkSession"> | number
    ipAddress?: StringWithAggregatesFilter<"WorkSession"> | string
    ipCity?: StringNullableWithAggregatesFilter<"WorkSession"> | string | null
    platformActiveFlag?: BoolWithAggregatesFilter<"WorkSession"> | boolean
    sessionHash?: StringWithAggregatesFilter<"WorkSession"> | string
    previousSessionHash?: StringNullableWithAggregatesFilter<"WorkSession"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WorkSession"> | Date | string
  }

  export type EnvironmentalEventWhereInput = {
    AND?: EnvironmentalEventWhereInput | EnvironmentalEventWhereInput[]
    OR?: EnvironmentalEventWhereInput[]
    NOT?: EnvironmentalEventWhereInput | EnvironmentalEventWhereInput[]
    id?: StringFilter<"EnvironmentalEvent"> | string
    city?: StringFilter<"EnvironmentalEvent"> | string
    eventType?: StringFilter<"EnvironmentalEvent"> | string
    alertLevel?: StringFilter<"EnvironmentalEvent"> | string
    intensity?: FloatFilter<"EnvironmentalEvent"> | number
    source?: StringFilter<"EnvironmentalEvent"> | string
    timestamp?: DateTimeFilter<"EnvironmentalEvent"> | Date | string
  }

  export type EnvironmentalEventOrderByWithRelationInput = {
    id?: SortOrder
    city?: SortOrder
    eventType?: SortOrder
    alertLevel?: SortOrder
    intensity?: SortOrder
    source?: SortOrder
    timestamp?: SortOrder
  }

  export type EnvironmentalEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EnvironmentalEventWhereInput | EnvironmentalEventWhereInput[]
    OR?: EnvironmentalEventWhereInput[]
    NOT?: EnvironmentalEventWhereInput | EnvironmentalEventWhereInput[]
    city?: StringFilter<"EnvironmentalEvent"> | string
    eventType?: StringFilter<"EnvironmentalEvent"> | string
    alertLevel?: StringFilter<"EnvironmentalEvent"> | string
    intensity?: FloatFilter<"EnvironmentalEvent"> | number
    source?: StringFilter<"EnvironmentalEvent"> | string
    timestamp?: DateTimeFilter<"EnvironmentalEvent"> | Date | string
  }, "id">

  export type EnvironmentalEventOrderByWithAggregationInput = {
    id?: SortOrder
    city?: SortOrder
    eventType?: SortOrder
    alertLevel?: SortOrder
    intensity?: SortOrder
    source?: SortOrder
    timestamp?: SortOrder
    _count?: EnvironmentalEventCountOrderByAggregateInput
    _avg?: EnvironmentalEventAvgOrderByAggregateInput
    _max?: EnvironmentalEventMaxOrderByAggregateInput
    _min?: EnvironmentalEventMinOrderByAggregateInput
    _sum?: EnvironmentalEventSumOrderByAggregateInput
  }

  export type EnvironmentalEventScalarWhereWithAggregatesInput = {
    AND?: EnvironmentalEventScalarWhereWithAggregatesInput | EnvironmentalEventScalarWhereWithAggregatesInput[]
    OR?: EnvironmentalEventScalarWhereWithAggregatesInput[]
    NOT?: EnvironmentalEventScalarWhereWithAggregatesInput | EnvironmentalEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EnvironmentalEvent"> | string
    city?: StringWithAggregatesFilter<"EnvironmentalEvent"> | string
    eventType?: StringWithAggregatesFilter<"EnvironmentalEvent"> | string
    alertLevel?: StringWithAggregatesFilter<"EnvironmentalEvent"> | string
    intensity?: FloatWithAggregatesFilter<"EnvironmentalEvent"> | number
    source?: StringWithAggregatesFilter<"EnvironmentalEvent"> | string
    timestamp?: DateTimeWithAggregatesFilter<"EnvironmentalEvent"> | Date | string
  }

  export type ClaimWhereInput = {
    AND?: ClaimWhereInput | ClaimWhereInput[]
    OR?: ClaimWhereInput[]
    NOT?: ClaimWhereInput | ClaimWhereInput[]
    id?: StringFilter<"Claim"> | string
    userId?: StringFilter<"Claim"> | string
    policyId?: StringFilter<"Claim"> | string
    triggerEvent?: StringFilter<"Claim"> | string
    status?: EnumClaimStatusFilter<"Claim"> | $Enums.ClaimStatus
    fraudScore?: FloatNullableFilter<"Claim"> | number | null
    workProofScore?: FloatNullableFilter<"Claim"> | number | null
    payoutAmount?: IntNullableFilter<"Claim"> | number | null
    razorpayPayoutId?: StringNullableFilter<"Claim"> | string | null
    reviewerNotes?: StringNullableFilter<"Claim"> | string | null
    createdAt?: DateTimeFilter<"Claim"> | Date | string
    updatedAt?: DateTimeFilter<"Claim"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    policy?: XOR<PolicyScalarRelationFilter, PolicyWhereInput>
  }

  export type ClaimOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    policyId?: SortOrder
    triggerEvent?: SortOrder
    status?: SortOrder
    fraudScore?: SortOrderInput | SortOrder
    workProofScore?: SortOrderInput | SortOrder
    payoutAmount?: SortOrderInput | SortOrder
    razorpayPayoutId?: SortOrderInput | SortOrder
    reviewerNotes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    policy?: PolicyOrderByWithRelationInput
  }

  export type ClaimWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    razorpayPayoutId?: string
    AND?: ClaimWhereInput | ClaimWhereInput[]
    OR?: ClaimWhereInput[]
    NOT?: ClaimWhereInput | ClaimWhereInput[]
    userId?: StringFilter<"Claim"> | string
    policyId?: StringFilter<"Claim"> | string
    triggerEvent?: StringFilter<"Claim"> | string
    status?: EnumClaimStatusFilter<"Claim"> | $Enums.ClaimStatus
    fraudScore?: FloatNullableFilter<"Claim"> | number | null
    workProofScore?: FloatNullableFilter<"Claim"> | number | null
    payoutAmount?: IntNullableFilter<"Claim"> | number | null
    reviewerNotes?: StringNullableFilter<"Claim"> | string | null
    createdAt?: DateTimeFilter<"Claim"> | Date | string
    updatedAt?: DateTimeFilter<"Claim"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    policy?: XOR<PolicyScalarRelationFilter, PolicyWhereInput>
  }, "id" | "razorpayPayoutId">

  export type ClaimOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    policyId?: SortOrder
    triggerEvent?: SortOrder
    status?: SortOrder
    fraudScore?: SortOrderInput | SortOrder
    workProofScore?: SortOrderInput | SortOrder
    payoutAmount?: SortOrderInput | SortOrder
    razorpayPayoutId?: SortOrderInput | SortOrder
    reviewerNotes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClaimCountOrderByAggregateInput
    _avg?: ClaimAvgOrderByAggregateInput
    _max?: ClaimMaxOrderByAggregateInput
    _min?: ClaimMinOrderByAggregateInput
    _sum?: ClaimSumOrderByAggregateInput
  }

  export type ClaimScalarWhereWithAggregatesInput = {
    AND?: ClaimScalarWhereWithAggregatesInput | ClaimScalarWhereWithAggregatesInput[]
    OR?: ClaimScalarWhereWithAggregatesInput[]
    NOT?: ClaimScalarWhereWithAggregatesInput | ClaimScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Claim"> | string
    userId?: StringWithAggregatesFilter<"Claim"> | string
    policyId?: StringWithAggregatesFilter<"Claim"> | string
    triggerEvent?: StringWithAggregatesFilter<"Claim"> | string
    status?: EnumClaimStatusWithAggregatesFilter<"Claim"> | $Enums.ClaimStatus
    fraudScore?: FloatNullableWithAggregatesFilter<"Claim"> | number | null
    workProofScore?: FloatNullableWithAggregatesFilter<"Claim"> | number | null
    payoutAmount?: IntNullableWithAggregatesFilter<"Claim"> | number | null
    razorpayPayoutId?: StringNullableWithAggregatesFilter<"Claim"> | string | null
    reviewerNotes?: StringNullableWithAggregatesFilter<"Claim"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Claim"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Claim"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    fullName: string
    phoneNumber: string
    role?: $Enums.Role
    city: string
    deliveryPlatform: string
    vehicleType: string
    weeklyEarnings: number
    upiId?: string | null
    trustScore?: number
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    policies?: PolicyCreateNestedManyWithoutUserInput
    claims?: ClaimCreateNestedManyWithoutUserInput
    sessions?: WorkSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    fullName: string
    phoneNumber: string
    role?: $Enums.Role
    city: string
    deliveryPlatform: string
    vehicleType: string
    weeklyEarnings: number
    upiId?: string | null
    trustScore?: number
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    policies?: PolicyUncheckedCreateNestedManyWithoutUserInput
    claims?: ClaimUncheckedCreateNestedManyWithoutUserInput
    sessions?: WorkSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    city?: StringFieldUpdateOperationsInput | string
    deliveryPlatform?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    weeklyEarnings?: IntFieldUpdateOperationsInput | number
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    trustScore?: FloatFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    policies?: PolicyUpdateManyWithoutUserNestedInput
    claims?: ClaimUpdateManyWithoutUserNestedInput
    sessions?: WorkSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    city?: StringFieldUpdateOperationsInput | string
    deliveryPlatform?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    weeklyEarnings?: IntFieldUpdateOperationsInput | number
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    trustScore?: FloatFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    policies?: PolicyUncheckedUpdateManyWithoutUserNestedInput
    claims?: ClaimUncheckedUpdateManyWithoutUserNestedInput
    sessions?: WorkSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    fullName: string
    phoneNumber: string
    role?: $Enums.Role
    city: string
    deliveryPlatform: string
    vehicleType: string
    weeklyEarnings: number
    upiId?: string | null
    trustScore?: number
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    city?: StringFieldUpdateOperationsInput | string
    deliveryPlatform?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    weeklyEarnings?: IntFieldUpdateOperationsInput | number
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    trustScore?: FloatFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    city?: StringFieldUpdateOperationsInput | string
    deliveryPlatform?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    weeklyEarnings?: IntFieldUpdateOperationsInput | number
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    trustScore?: FloatFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpVerificationCreateInput = {
    id?: string
    phoneNumber: string
    otpCode: string
    expiresAt: Date | string
    verified?: boolean
    createdAt?: Date | string
  }

  export type OtpVerificationUncheckedCreateInput = {
    id?: string
    phoneNumber: string
    otpCode: string
    expiresAt: Date | string
    verified?: boolean
    createdAt?: Date | string
  }

  export type OtpVerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    otpCode?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpVerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    otpCode?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpVerificationCreateManyInput = {
    id?: string
    phoneNumber: string
    otpCode: string
    expiresAt: Date | string
    verified?: boolean
    createdAt?: Date | string
  }

  export type OtpVerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    otpCode?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpVerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    otpCode?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PolicyCreateInput = {
    id?: string
    planTier: $Enums.PlanTier
    status: $Enums.PolicyStatus
    coverageAmount: number
    premiumPaid: number
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    startDate?: Date | string
    endDate: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPoliciesInput
    claims?: ClaimCreateNestedManyWithoutPolicyInput
  }

  export type PolicyUncheckedCreateInput = {
    id?: string
    userId: string
    planTier: $Enums.PlanTier
    status: $Enums.PolicyStatus
    coverageAmount: number
    premiumPaid: number
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    startDate?: Date | string
    endDate: Date | string
    createdAt?: Date | string
    claims?: ClaimUncheckedCreateNestedManyWithoutPolicyInput
  }

  export type PolicyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    planTier?: EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier
    status?: EnumPolicyStatusFieldUpdateOperationsInput | $Enums.PolicyStatus
    coverageAmount?: IntFieldUpdateOperationsInput | number
    premiumPaid?: IntFieldUpdateOperationsInput | number
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPoliciesNestedInput
    claims?: ClaimUpdateManyWithoutPolicyNestedInput
  }

  export type PolicyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    planTier?: EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier
    status?: EnumPolicyStatusFieldUpdateOperationsInput | $Enums.PolicyStatus
    coverageAmount?: IntFieldUpdateOperationsInput | number
    premiumPaid?: IntFieldUpdateOperationsInput | number
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    claims?: ClaimUncheckedUpdateManyWithoutPolicyNestedInput
  }

  export type PolicyCreateManyInput = {
    id?: string
    userId: string
    planTier: $Enums.PlanTier
    status: $Enums.PolicyStatus
    coverageAmount: number
    premiumPaid: number
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    startDate?: Date | string
    endDate: Date | string
    createdAt?: Date | string
  }

  export type PolicyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    planTier?: EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier
    status?: EnumPolicyStatusFieldUpdateOperationsInput | $Enums.PolicyStatus
    coverageAmount?: IntFieldUpdateOperationsInput | number
    premiumPaid?: IntFieldUpdateOperationsInput | number
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PolicyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    planTier?: EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier
    status?: EnumPolicyStatusFieldUpdateOperationsInput | $Enums.PolicyStatus
    coverageAmount?: IntFieldUpdateOperationsInput | number
    premiumPaid?: IntFieldUpdateOperationsInput | number
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkSessionCreateInput = {
    id?: string
    startTime?: Date | string
    endTime?: Date | string | null
    activeMinutes?: number
    ipAddress: string
    ipCity?: string | null
    platformActiveFlag?: boolean
    sessionHash: string
    previousSessionHash?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type WorkSessionUncheckedCreateInput = {
    id?: string
    userId: string
    startTime?: Date | string
    endTime?: Date | string | null
    activeMinutes?: number
    ipAddress: string
    ipCity?: string | null
    platformActiveFlag?: boolean
    sessionHash: string
    previousSessionHash?: string | null
    createdAt?: Date | string
  }

  export type WorkSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activeMinutes?: IntFieldUpdateOperationsInput | number
    ipAddress?: StringFieldUpdateOperationsInput | string
    ipCity?: NullableStringFieldUpdateOperationsInput | string | null
    platformActiveFlag?: BoolFieldUpdateOperationsInput | boolean
    sessionHash?: StringFieldUpdateOperationsInput | string
    previousSessionHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type WorkSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activeMinutes?: IntFieldUpdateOperationsInput | number
    ipAddress?: StringFieldUpdateOperationsInput | string
    ipCity?: NullableStringFieldUpdateOperationsInput | string | null
    platformActiveFlag?: BoolFieldUpdateOperationsInput | boolean
    sessionHash?: StringFieldUpdateOperationsInput | string
    previousSessionHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkSessionCreateManyInput = {
    id?: string
    userId: string
    startTime?: Date | string
    endTime?: Date | string | null
    activeMinutes?: number
    ipAddress: string
    ipCity?: string | null
    platformActiveFlag?: boolean
    sessionHash: string
    previousSessionHash?: string | null
    createdAt?: Date | string
  }

  export type WorkSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activeMinutes?: IntFieldUpdateOperationsInput | number
    ipAddress?: StringFieldUpdateOperationsInput | string
    ipCity?: NullableStringFieldUpdateOperationsInput | string | null
    platformActiveFlag?: BoolFieldUpdateOperationsInput | boolean
    sessionHash?: StringFieldUpdateOperationsInput | string
    previousSessionHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activeMinutes?: IntFieldUpdateOperationsInput | number
    ipAddress?: StringFieldUpdateOperationsInput | string
    ipCity?: NullableStringFieldUpdateOperationsInput | string | null
    platformActiveFlag?: BoolFieldUpdateOperationsInput | boolean
    sessionHash?: StringFieldUpdateOperationsInput | string
    previousSessionHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnvironmentalEventCreateInput = {
    id?: string
    city: string
    eventType: string
    alertLevel: string
    intensity: number
    source: string
    timestamp?: Date | string
  }

  export type EnvironmentalEventUncheckedCreateInput = {
    id?: string
    city: string
    eventType: string
    alertLevel: string
    intensity: number
    source: string
    timestamp?: Date | string
  }

  export type EnvironmentalEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    alertLevel?: StringFieldUpdateOperationsInput | string
    intensity?: FloatFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnvironmentalEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    alertLevel?: StringFieldUpdateOperationsInput | string
    intensity?: FloatFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnvironmentalEventCreateManyInput = {
    id?: string
    city: string
    eventType: string
    alertLevel: string
    intensity: number
    source: string
    timestamp?: Date | string
  }

  export type EnvironmentalEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    alertLevel?: StringFieldUpdateOperationsInput | string
    intensity?: FloatFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnvironmentalEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    alertLevel?: StringFieldUpdateOperationsInput | string
    intensity?: FloatFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaimCreateInput = {
    id?: string
    triggerEvent: string
    status: $Enums.ClaimStatus
    fraudScore?: number | null
    workProofScore?: number | null
    payoutAmount?: number | null
    razorpayPayoutId?: string | null
    reviewerNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutClaimsInput
    policy: PolicyCreateNestedOneWithoutClaimsInput
  }

  export type ClaimUncheckedCreateInput = {
    id?: string
    userId: string
    policyId: string
    triggerEvent: string
    status: $Enums.ClaimStatus
    fraudScore?: number | null
    workProofScore?: number | null
    payoutAmount?: number | null
    razorpayPayoutId?: string | null
    reviewerNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClaimUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerEvent?: StringFieldUpdateOperationsInput | string
    status?: EnumClaimStatusFieldUpdateOperationsInput | $Enums.ClaimStatus
    fraudScore?: NullableFloatFieldUpdateOperationsInput | number | null
    workProofScore?: NullableFloatFieldUpdateOperationsInput | number | null
    payoutAmount?: NullableIntFieldUpdateOperationsInput | number | null
    razorpayPayoutId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewerNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutClaimsNestedInput
    policy?: PolicyUpdateOneRequiredWithoutClaimsNestedInput
  }

  export type ClaimUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    policyId?: StringFieldUpdateOperationsInput | string
    triggerEvent?: StringFieldUpdateOperationsInput | string
    status?: EnumClaimStatusFieldUpdateOperationsInput | $Enums.ClaimStatus
    fraudScore?: NullableFloatFieldUpdateOperationsInput | number | null
    workProofScore?: NullableFloatFieldUpdateOperationsInput | number | null
    payoutAmount?: NullableIntFieldUpdateOperationsInput | number | null
    razorpayPayoutId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewerNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaimCreateManyInput = {
    id?: string
    userId: string
    policyId: string
    triggerEvent: string
    status: $Enums.ClaimStatus
    fraudScore?: number | null
    workProofScore?: number | null
    payoutAmount?: number | null
    razorpayPayoutId?: string | null
    reviewerNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClaimUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerEvent?: StringFieldUpdateOperationsInput | string
    status?: EnumClaimStatusFieldUpdateOperationsInput | $Enums.ClaimStatus
    fraudScore?: NullableFloatFieldUpdateOperationsInput | number | null
    workProofScore?: NullableFloatFieldUpdateOperationsInput | number | null
    payoutAmount?: NullableIntFieldUpdateOperationsInput | number | null
    razorpayPayoutId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewerNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaimUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    policyId?: StringFieldUpdateOperationsInput | string
    triggerEvent?: StringFieldUpdateOperationsInput | string
    status?: EnumClaimStatusFieldUpdateOperationsInput | $Enums.ClaimStatus
    fraudScore?: NullableFloatFieldUpdateOperationsInput | number | null
    workProofScore?: NullableFloatFieldUpdateOperationsInput | number | null
    payoutAmount?: NullableIntFieldUpdateOperationsInput | number | null
    razorpayPayoutId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewerNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type PolicyListRelationFilter = {
    every?: PolicyWhereInput
    some?: PolicyWhereInput
    none?: PolicyWhereInput
  }

  export type ClaimListRelationFilter = {
    every?: ClaimWhereInput
    some?: ClaimWhereInput
    none?: ClaimWhereInput
  }

  export type WorkSessionListRelationFilter = {
    every?: WorkSessionWhereInput
    some?: WorkSessionWhereInput
    none?: WorkSessionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PolicyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClaimOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    city?: SortOrder
    deliveryPlatform?: SortOrder
    vehicleType?: SortOrder
    weeklyEarnings?: SortOrder
    upiId?: SortOrder
    trustScore?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    weeklyEarnings?: SortOrder
    trustScore?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    city?: SortOrder
    deliveryPlatform?: SortOrder
    vehicleType?: SortOrder
    weeklyEarnings?: SortOrder
    upiId?: SortOrder
    trustScore?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    city?: SortOrder
    deliveryPlatform?: SortOrder
    vehicleType?: SortOrder
    weeklyEarnings?: SortOrder
    upiId?: SortOrder
    trustScore?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    weeklyEarnings?: SortOrder
    trustScore?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type OtpVerificationCountOrderByAggregateInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    otpCode?: SortOrder
    expiresAt?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
  }

  export type OtpVerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    otpCode?: SortOrder
    expiresAt?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
  }

  export type OtpVerificationMinOrderByAggregateInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    otpCode?: SortOrder
    expiresAt?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumPlanTierFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanTier | EnumPlanTierFieldRefInput<$PrismaModel>
    in?: $Enums.PlanTier[] | ListEnumPlanTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanTier[] | ListEnumPlanTierFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTierFilter<$PrismaModel> | $Enums.PlanTier
  }

  export type EnumPolicyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PolicyStatus | EnumPolicyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PolicyStatus[] | ListEnumPolicyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PolicyStatus[] | ListEnumPolicyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPolicyStatusFilter<$PrismaModel> | $Enums.PolicyStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PolicyCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planTier?: SortOrder
    status?: SortOrder
    coverageAmount?: SortOrder
    premiumPaid?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
  }

  export type PolicyAvgOrderByAggregateInput = {
    coverageAmount?: SortOrder
    premiumPaid?: SortOrder
  }

  export type PolicyMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planTier?: SortOrder
    status?: SortOrder
    coverageAmount?: SortOrder
    premiumPaid?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
  }

  export type PolicyMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planTier?: SortOrder
    status?: SortOrder
    coverageAmount?: SortOrder
    premiumPaid?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
  }

  export type PolicySumOrderByAggregateInput = {
    coverageAmount?: SortOrder
    premiumPaid?: SortOrder
  }

  export type EnumPlanTierWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanTier | EnumPlanTierFieldRefInput<$PrismaModel>
    in?: $Enums.PlanTier[] | ListEnumPlanTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanTier[] | ListEnumPlanTierFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTierWithAggregatesFilter<$PrismaModel> | $Enums.PlanTier
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanTierFilter<$PrismaModel>
    _max?: NestedEnumPlanTierFilter<$PrismaModel>
  }

  export type EnumPolicyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PolicyStatus | EnumPolicyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PolicyStatus[] | ListEnumPolicyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PolicyStatus[] | ListEnumPolicyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPolicyStatusWithAggregatesFilter<$PrismaModel> | $Enums.PolicyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPolicyStatusFilter<$PrismaModel>
    _max?: NestedEnumPolicyStatusFilter<$PrismaModel>
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

  export type WorkSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    activeMinutes?: SortOrder
    ipAddress?: SortOrder
    ipCity?: SortOrder
    platformActiveFlag?: SortOrder
    sessionHash?: SortOrder
    previousSessionHash?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkSessionAvgOrderByAggregateInput = {
    activeMinutes?: SortOrder
  }

  export type WorkSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    activeMinutes?: SortOrder
    ipAddress?: SortOrder
    ipCity?: SortOrder
    platformActiveFlag?: SortOrder
    sessionHash?: SortOrder
    previousSessionHash?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    activeMinutes?: SortOrder
    ipAddress?: SortOrder
    ipCity?: SortOrder
    platformActiveFlag?: SortOrder
    sessionHash?: SortOrder
    previousSessionHash?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkSessionSumOrderByAggregateInput = {
    activeMinutes?: SortOrder
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

  export type EnvironmentalEventCountOrderByAggregateInput = {
    id?: SortOrder
    city?: SortOrder
    eventType?: SortOrder
    alertLevel?: SortOrder
    intensity?: SortOrder
    source?: SortOrder
    timestamp?: SortOrder
  }

  export type EnvironmentalEventAvgOrderByAggregateInput = {
    intensity?: SortOrder
  }

  export type EnvironmentalEventMaxOrderByAggregateInput = {
    id?: SortOrder
    city?: SortOrder
    eventType?: SortOrder
    alertLevel?: SortOrder
    intensity?: SortOrder
    source?: SortOrder
    timestamp?: SortOrder
  }

  export type EnvironmentalEventMinOrderByAggregateInput = {
    id?: SortOrder
    city?: SortOrder
    eventType?: SortOrder
    alertLevel?: SortOrder
    intensity?: SortOrder
    source?: SortOrder
    timestamp?: SortOrder
  }

  export type EnvironmentalEventSumOrderByAggregateInput = {
    intensity?: SortOrder
  }

  export type EnumClaimStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ClaimStatus | EnumClaimStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ClaimStatus[] | ListEnumClaimStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClaimStatus[] | ListEnumClaimStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumClaimStatusFilter<$PrismaModel> | $Enums.ClaimStatus
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type PolicyScalarRelationFilter = {
    is?: PolicyWhereInput
    isNot?: PolicyWhereInput
  }

  export type ClaimCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    policyId?: SortOrder
    triggerEvent?: SortOrder
    status?: SortOrder
    fraudScore?: SortOrder
    workProofScore?: SortOrder
    payoutAmount?: SortOrder
    razorpayPayoutId?: SortOrder
    reviewerNotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClaimAvgOrderByAggregateInput = {
    fraudScore?: SortOrder
    workProofScore?: SortOrder
    payoutAmount?: SortOrder
  }

  export type ClaimMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    policyId?: SortOrder
    triggerEvent?: SortOrder
    status?: SortOrder
    fraudScore?: SortOrder
    workProofScore?: SortOrder
    payoutAmount?: SortOrder
    razorpayPayoutId?: SortOrder
    reviewerNotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClaimMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    policyId?: SortOrder
    triggerEvent?: SortOrder
    status?: SortOrder
    fraudScore?: SortOrder
    workProofScore?: SortOrder
    payoutAmount?: SortOrder
    razorpayPayoutId?: SortOrder
    reviewerNotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClaimSumOrderByAggregateInput = {
    fraudScore?: SortOrder
    workProofScore?: SortOrder
    payoutAmount?: SortOrder
  }

  export type EnumClaimStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClaimStatus | EnumClaimStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ClaimStatus[] | ListEnumClaimStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClaimStatus[] | ListEnumClaimStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumClaimStatusWithAggregatesFilter<$PrismaModel> | $Enums.ClaimStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumClaimStatusFilter<$PrismaModel>
    _max?: NestedEnumClaimStatusFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type PolicyCreateNestedManyWithoutUserInput = {
    create?: XOR<PolicyCreateWithoutUserInput, PolicyUncheckedCreateWithoutUserInput> | PolicyCreateWithoutUserInput[] | PolicyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PolicyCreateOrConnectWithoutUserInput | PolicyCreateOrConnectWithoutUserInput[]
    createMany?: PolicyCreateManyUserInputEnvelope
    connect?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
  }

  export type ClaimCreateNestedManyWithoutUserInput = {
    create?: XOR<ClaimCreateWithoutUserInput, ClaimUncheckedCreateWithoutUserInput> | ClaimCreateWithoutUserInput[] | ClaimUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutUserInput | ClaimCreateOrConnectWithoutUserInput[]
    createMany?: ClaimCreateManyUserInputEnvelope
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
  }

  export type WorkSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkSessionCreateWithoutUserInput, WorkSessionUncheckedCreateWithoutUserInput> | WorkSessionCreateWithoutUserInput[] | WorkSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkSessionCreateOrConnectWithoutUserInput | WorkSessionCreateOrConnectWithoutUserInput[]
    createMany?: WorkSessionCreateManyUserInputEnvelope
    connect?: WorkSessionWhereUniqueInput | WorkSessionWhereUniqueInput[]
  }

  export type PolicyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PolicyCreateWithoutUserInput, PolicyUncheckedCreateWithoutUserInput> | PolicyCreateWithoutUserInput[] | PolicyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PolicyCreateOrConnectWithoutUserInput | PolicyCreateOrConnectWithoutUserInput[]
    createMany?: PolicyCreateManyUserInputEnvelope
    connect?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
  }

  export type ClaimUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ClaimCreateWithoutUserInput, ClaimUncheckedCreateWithoutUserInput> | ClaimCreateWithoutUserInput[] | ClaimUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutUserInput | ClaimCreateOrConnectWithoutUserInput[]
    createMany?: ClaimCreateManyUserInputEnvelope
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
  }

  export type WorkSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkSessionCreateWithoutUserInput, WorkSessionUncheckedCreateWithoutUserInput> | WorkSessionCreateWithoutUserInput[] | WorkSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkSessionCreateOrConnectWithoutUserInput | WorkSessionCreateOrConnectWithoutUserInput[]
    createMany?: WorkSessionCreateManyUserInputEnvelope
    connect?: WorkSessionWhereUniqueInput | WorkSessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PolicyUpdateManyWithoutUserNestedInput = {
    create?: XOR<PolicyCreateWithoutUserInput, PolicyUncheckedCreateWithoutUserInput> | PolicyCreateWithoutUserInput[] | PolicyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PolicyCreateOrConnectWithoutUserInput | PolicyCreateOrConnectWithoutUserInput[]
    upsert?: PolicyUpsertWithWhereUniqueWithoutUserInput | PolicyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PolicyCreateManyUserInputEnvelope
    set?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
    disconnect?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
    delete?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
    connect?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
    update?: PolicyUpdateWithWhereUniqueWithoutUserInput | PolicyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PolicyUpdateManyWithWhereWithoutUserInput | PolicyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PolicyScalarWhereInput | PolicyScalarWhereInput[]
  }

  export type ClaimUpdateManyWithoutUserNestedInput = {
    create?: XOR<ClaimCreateWithoutUserInput, ClaimUncheckedCreateWithoutUserInput> | ClaimCreateWithoutUserInput[] | ClaimUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutUserInput | ClaimCreateOrConnectWithoutUserInput[]
    upsert?: ClaimUpsertWithWhereUniqueWithoutUserInput | ClaimUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ClaimCreateManyUserInputEnvelope
    set?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    disconnect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    delete?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    update?: ClaimUpdateWithWhereUniqueWithoutUserInput | ClaimUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ClaimUpdateManyWithWhereWithoutUserInput | ClaimUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ClaimScalarWhereInput | ClaimScalarWhereInput[]
  }

  export type WorkSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkSessionCreateWithoutUserInput, WorkSessionUncheckedCreateWithoutUserInput> | WorkSessionCreateWithoutUserInput[] | WorkSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkSessionCreateOrConnectWithoutUserInput | WorkSessionCreateOrConnectWithoutUserInput[]
    upsert?: WorkSessionUpsertWithWhereUniqueWithoutUserInput | WorkSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkSessionCreateManyUserInputEnvelope
    set?: WorkSessionWhereUniqueInput | WorkSessionWhereUniqueInput[]
    disconnect?: WorkSessionWhereUniqueInput | WorkSessionWhereUniqueInput[]
    delete?: WorkSessionWhereUniqueInput | WorkSessionWhereUniqueInput[]
    connect?: WorkSessionWhereUniqueInput | WorkSessionWhereUniqueInput[]
    update?: WorkSessionUpdateWithWhereUniqueWithoutUserInput | WorkSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkSessionUpdateManyWithWhereWithoutUserInput | WorkSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkSessionScalarWhereInput | WorkSessionScalarWhereInput[]
  }

  export type PolicyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PolicyCreateWithoutUserInput, PolicyUncheckedCreateWithoutUserInput> | PolicyCreateWithoutUserInput[] | PolicyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PolicyCreateOrConnectWithoutUserInput | PolicyCreateOrConnectWithoutUserInput[]
    upsert?: PolicyUpsertWithWhereUniqueWithoutUserInput | PolicyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PolicyCreateManyUserInputEnvelope
    set?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
    disconnect?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
    delete?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
    connect?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
    update?: PolicyUpdateWithWhereUniqueWithoutUserInput | PolicyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PolicyUpdateManyWithWhereWithoutUserInput | PolicyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PolicyScalarWhereInput | PolicyScalarWhereInput[]
  }

  export type ClaimUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ClaimCreateWithoutUserInput, ClaimUncheckedCreateWithoutUserInput> | ClaimCreateWithoutUserInput[] | ClaimUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutUserInput | ClaimCreateOrConnectWithoutUserInput[]
    upsert?: ClaimUpsertWithWhereUniqueWithoutUserInput | ClaimUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ClaimCreateManyUserInputEnvelope
    set?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    disconnect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    delete?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    update?: ClaimUpdateWithWhereUniqueWithoutUserInput | ClaimUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ClaimUpdateManyWithWhereWithoutUserInput | ClaimUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ClaimScalarWhereInput | ClaimScalarWhereInput[]
  }

  export type WorkSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkSessionCreateWithoutUserInput, WorkSessionUncheckedCreateWithoutUserInput> | WorkSessionCreateWithoutUserInput[] | WorkSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkSessionCreateOrConnectWithoutUserInput | WorkSessionCreateOrConnectWithoutUserInput[]
    upsert?: WorkSessionUpsertWithWhereUniqueWithoutUserInput | WorkSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkSessionCreateManyUserInputEnvelope
    set?: WorkSessionWhereUniqueInput | WorkSessionWhereUniqueInput[]
    disconnect?: WorkSessionWhereUniqueInput | WorkSessionWhereUniqueInput[]
    delete?: WorkSessionWhereUniqueInput | WorkSessionWhereUniqueInput[]
    connect?: WorkSessionWhereUniqueInput | WorkSessionWhereUniqueInput[]
    update?: WorkSessionUpdateWithWhereUniqueWithoutUserInput | WorkSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkSessionUpdateManyWithWhereWithoutUserInput | WorkSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkSessionScalarWhereInput | WorkSessionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPoliciesInput = {
    create?: XOR<UserCreateWithoutPoliciesInput, UserUncheckedCreateWithoutPoliciesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPoliciesInput
    connect?: UserWhereUniqueInput
  }

  export type ClaimCreateNestedManyWithoutPolicyInput = {
    create?: XOR<ClaimCreateWithoutPolicyInput, ClaimUncheckedCreateWithoutPolicyInput> | ClaimCreateWithoutPolicyInput[] | ClaimUncheckedCreateWithoutPolicyInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutPolicyInput | ClaimCreateOrConnectWithoutPolicyInput[]
    createMany?: ClaimCreateManyPolicyInputEnvelope
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
  }

  export type ClaimUncheckedCreateNestedManyWithoutPolicyInput = {
    create?: XOR<ClaimCreateWithoutPolicyInput, ClaimUncheckedCreateWithoutPolicyInput> | ClaimCreateWithoutPolicyInput[] | ClaimUncheckedCreateWithoutPolicyInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutPolicyInput | ClaimCreateOrConnectWithoutPolicyInput[]
    createMany?: ClaimCreateManyPolicyInputEnvelope
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
  }

  export type EnumPlanTierFieldUpdateOperationsInput = {
    set?: $Enums.PlanTier
  }

  export type EnumPolicyStatusFieldUpdateOperationsInput = {
    set?: $Enums.PolicyStatus
  }

  export type UserUpdateOneRequiredWithoutPoliciesNestedInput = {
    create?: XOR<UserCreateWithoutPoliciesInput, UserUncheckedCreateWithoutPoliciesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPoliciesInput
    upsert?: UserUpsertWithoutPoliciesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPoliciesInput, UserUpdateWithoutPoliciesInput>, UserUncheckedUpdateWithoutPoliciesInput>
  }

  export type ClaimUpdateManyWithoutPolicyNestedInput = {
    create?: XOR<ClaimCreateWithoutPolicyInput, ClaimUncheckedCreateWithoutPolicyInput> | ClaimCreateWithoutPolicyInput[] | ClaimUncheckedCreateWithoutPolicyInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutPolicyInput | ClaimCreateOrConnectWithoutPolicyInput[]
    upsert?: ClaimUpsertWithWhereUniqueWithoutPolicyInput | ClaimUpsertWithWhereUniqueWithoutPolicyInput[]
    createMany?: ClaimCreateManyPolicyInputEnvelope
    set?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    disconnect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    delete?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    update?: ClaimUpdateWithWhereUniqueWithoutPolicyInput | ClaimUpdateWithWhereUniqueWithoutPolicyInput[]
    updateMany?: ClaimUpdateManyWithWhereWithoutPolicyInput | ClaimUpdateManyWithWhereWithoutPolicyInput[]
    deleteMany?: ClaimScalarWhereInput | ClaimScalarWhereInput[]
  }

  export type ClaimUncheckedUpdateManyWithoutPolicyNestedInput = {
    create?: XOR<ClaimCreateWithoutPolicyInput, ClaimUncheckedCreateWithoutPolicyInput> | ClaimCreateWithoutPolicyInput[] | ClaimUncheckedCreateWithoutPolicyInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutPolicyInput | ClaimCreateOrConnectWithoutPolicyInput[]
    upsert?: ClaimUpsertWithWhereUniqueWithoutPolicyInput | ClaimUpsertWithWhereUniqueWithoutPolicyInput[]
    createMany?: ClaimCreateManyPolicyInputEnvelope
    set?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    disconnect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    delete?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    update?: ClaimUpdateWithWhereUniqueWithoutPolicyInput | ClaimUpdateWithWhereUniqueWithoutPolicyInput[]
    updateMany?: ClaimUpdateManyWithWhereWithoutPolicyInput | ClaimUpdateManyWithWhereWithoutPolicyInput[]
    deleteMany?: ClaimScalarWhereInput | ClaimScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutClaimsInput = {
    create?: XOR<UserCreateWithoutClaimsInput, UserUncheckedCreateWithoutClaimsInput>
    connectOrCreate?: UserCreateOrConnectWithoutClaimsInput
    connect?: UserWhereUniqueInput
  }

  export type PolicyCreateNestedOneWithoutClaimsInput = {
    create?: XOR<PolicyCreateWithoutClaimsInput, PolicyUncheckedCreateWithoutClaimsInput>
    connectOrCreate?: PolicyCreateOrConnectWithoutClaimsInput
    connect?: PolicyWhereUniqueInput
  }

  export type EnumClaimStatusFieldUpdateOperationsInput = {
    set?: $Enums.ClaimStatus
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutClaimsNestedInput = {
    create?: XOR<UserCreateWithoutClaimsInput, UserUncheckedCreateWithoutClaimsInput>
    connectOrCreate?: UserCreateOrConnectWithoutClaimsInput
    upsert?: UserUpsertWithoutClaimsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutClaimsInput, UserUpdateWithoutClaimsInput>, UserUncheckedUpdateWithoutClaimsInput>
  }

  export type PolicyUpdateOneRequiredWithoutClaimsNestedInput = {
    create?: XOR<PolicyCreateWithoutClaimsInput, PolicyUncheckedCreateWithoutClaimsInput>
    connectOrCreate?: PolicyCreateOrConnectWithoutClaimsInput
    upsert?: PolicyUpsertWithoutClaimsInput
    connect?: PolicyWhereUniqueInput
    update?: XOR<XOR<PolicyUpdateToOneWithWhereWithoutClaimsInput, PolicyUpdateWithoutClaimsInput>, PolicyUncheckedUpdateWithoutClaimsInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumPlanTierFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanTier | EnumPlanTierFieldRefInput<$PrismaModel>
    in?: $Enums.PlanTier[] | ListEnumPlanTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanTier[] | ListEnumPlanTierFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTierFilter<$PrismaModel> | $Enums.PlanTier
  }

  export type NestedEnumPolicyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PolicyStatus | EnumPolicyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PolicyStatus[] | ListEnumPolicyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PolicyStatus[] | ListEnumPolicyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPolicyStatusFilter<$PrismaModel> | $Enums.PolicyStatus
  }

  export type NestedEnumPlanTierWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanTier | EnumPlanTierFieldRefInput<$PrismaModel>
    in?: $Enums.PlanTier[] | ListEnumPlanTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanTier[] | ListEnumPlanTierFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTierWithAggregatesFilter<$PrismaModel> | $Enums.PlanTier
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanTierFilter<$PrismaModel>
    _max?: NestedEnumPlanTierFilter<$PrismaModel>
  }

  export type NestedEnumPolicyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PolicyStatus | EnumPolicyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PolicyStatus[] | ListEnumPolicyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PolicyStatus[] | ListEnumPolicyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPolicyStatusWithAggregatesFilter<$PrismaModel> | $Enums.PolicyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPolicyStatusFilter<$PrismaModel>
    _max?: NestedEnumPolicyStatusFilter<$PrismaModel>
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

  export type NestedEnumClaimStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ClaimStatus | EnumClaimStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ClaimStatus[] | ListEnumClaimStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClaimStatus[] | ListEnumClaimStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumClaimStatusFilter<$PrismaModel> | $Enums.ClaimStatus
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

  export type NestedEnumClaimStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClaimStatus | EnumClaimStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ClaimStatus[] | ListEnumClaimStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClaimStatus[] | ListEnumClaimStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumClaimStatusWithAggregatesFilter<$PrismaModel> | $Enums.ClaimStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumClaimStatusFilter<$PrismaModel>
    _max?: NestedEnumClaimStatusFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type PolicyCreateWithoutUserInput = {
    id?: string
    planTier: $Enums.PlanTier
    status: $Enums.PolicyStatus
    coverageAmount: number
    premiumPaid: number
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    startDate?: Date | string
    endDate: Date | string
    createdAt?: Date | string
    claims?: ClaimCreateNestedManyWithoutPolicyInput
  }

  export type PolicyUncheckedCreateWithoutUserInput = {
    id?: string
    planTier: $Enums.PlanTier
    status: $Enums.PolicyStatus
    coverageAmount: number
    premiumPaid: number
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    startDate?: Date | string
    endDate: Date | string
    createdAt?: Date | string
    claims?: ClaimUncheckedCreateNestedManyWithoutPolicyInput
  }

  export type PolicyCreateOrConnectWithoutUserInput = {
    where: PolicyWhereUniqueInput
    create: XOR<PolicyCreateWithoutUserInput, PolicyUncheckedCreateWithoutUserInput>
  }

  export type PolicyCreateManyUserInputEnvelope = {
    data: PolicyCreateManyUserInput | PolicyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ClaimCreateWithoutUserInput = {
    id?: string
    triggerEvent: string
    status: $Enums.ClaimStatus
    fraudScore?: number | null
    workProofScore?: number | null
    payoutAmount?: number | null
    razorpayPayoutId?: string | null
    reviewerNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    policy: PolicyCreateNestedOneWithoutClaimsInput
  }

  export type ClaimUncheckedCreateWithoutUserInput = {
    id?: string
    policyId: string
    triggerEvent: string
    status: $Enums.ClaimStatus
    fraudScore?: number | null
    workProofScore?: number | null
    payoutAmount?: number | null
    razorpayPayoutId?: string | null
    reviewerNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClaimCreateOrConnectWithoutUserInput = {
    where: ClaimWhereUniqueInput
    create: XOR<ClaimCreateWithoutUserInput, ClaimUncheckedCreateWithoutUserInput>
  }

  export type ClaimCreateManyUserInputEnvelope = {
    data: ClaimCreateManyUserInput | ClaimCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WorkSessionCreateWithoutUserInput = {
    id?: string
    startTime?: Date | string
    endTime?: Date | string | null
    activeMinutes?: number
    ipAddress: string
    ipCity?: string | null
    platformActiveFlag?: boolean
    sessionHash: string
    previousSessionHash?: string | null
    createdAt?: Date | string
  }

  export type WorkSessionUncheckedCreateWithoutUserInput = {
    id?: string
    startTime?: Date | string
    endTime?: Date | string | null
    activeMinutes?: number
    ipAddress: string
    ipCity?: string | null
    platformActiveFlag?: boolean
    sessionHash: string
    previousSessionHash?: string | null
    createdAt?: Date | string
  }

  export type WorkSessionCreateOrConnectWithoutUserInput = {
    where: WorkSessionWhereUniqueInput
    create: XOR<WorkSessionCreateWithoutUserInput, WorkSessionUncheckedCreateWithoutUserInput>
  }

  export type WorkSessionCreateManyUserInputEnvelope = {
    data: WorkSessionCreateManyUserInput | WorkSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PolicyUpsertWithWhereUniqueWithoutUserInput = {
    where: PolicyWhereUniqueInput
    update: XOR<PolicyUpdateWithoutUserInput, PolicyUncheckedUpdateWithoutUserInput>
    create: XOR<PolicyCreateWithoutUserInput, PolicyUncheckedCreateWithoutUserInput>
  }

  export type PolicyUpdateWithWhereUniqueWithoutUserInput = {
    where: PolicyWhereUniqueInput
    data: XOR<PolicyUpdateWithoutUserInput, PolicyUncheckedUpdateWithoutUserInput>
  }

  export type PolicyUpdateManyWithWhereWithoutUserInput = {
    where: PolicyScalarWhereInput
    data: XOR<PolicyUpdateManyMutationInput, PolicyUncheckedUpdateManyWithoutUserInput>
  }

  export type PolicyScalarWhereInput = {
    AND?: PolicyScalarWhereInput | PolicyScalarWhereInput[]
    OR?: PolicyScalarWhereInput[]
    NOT?: PolicyScalarWhereInput | PolicyScalarWhereInput[]
    id?: StringFilter<"Policy"> | string
    userId?: StringFilter<"Policy"> | string
    planTier?: EnumPlanTierFilter<"Policy"> | $Enums.PlanTier
    status?: EnumPolicyStatusFilter<"Policy"> | $Enums.PolicyStatus
    coverageAmount?: IntFilter<"Policy"> | number
    premiumPaid?: IntFilter<"Policy"> | number
    razorpayOrderId?: StringNullableFilter<"Policy"> | string | null
    razorpayPaymentId?: StringNullableFilter<"Policy"> | string | null
    startDate?: DateTimeFilter<"Policy"> | Date | string
    endDate?: DateTimeFilter<"Policy"> | Date | string
    createdAt?: DateTimeFilter<"Policy"> | Date | string
  }

  export type ClaimUpsertWithWhereUniqueWithoutUserInput = {
    where: ClaimWhereUniqueInput
    update: XOR<ClaimUpdateWithoutUserInput, ClaimUncheckedUpdateWithoutUserInput>
    create: XOR<ClaimCreateWithoutUserInput, ClaimUncheckedCreateWithoutUserInput>
  }

  export type ClaimUpdateWithWhereUniqueWithoutUserInput = {
    where: ClaimWhereUniqueInput
    data: XOR<ClaimUpdateWithoutUserInput, ClaimUncheckedUpdateWithoutUserInput>
  }

  export type ClaimUpdateManyWithWhereWithoutUserInput = {
    where: ClaimScalarWhereInput
    data: XOR<ClaimUpdateManyMutationInput, ClaimUncheckedUpdateManyWithoutUserInput>
  }

  export type ClaimScalarWhereInput = {
    AND?: ClaimScalarWhereInput | ClaimScalarWhereInput[]
    OR?: ClaimScalarWhereInput[]
    NOT?: ClaimScalarWhereInput | ClaimScalarWhereInput[]
    id?: StringFilter<"Claim"> | string
    userId?: StringFilter<"Claim"> | string
    policyId?: StringFilter<"Claim"> | string
    triggerEvent?: StringFilter<"Claim"> | string
    status?: EnumClaimStatusFilter<"Claim"> | $Enums.ClaimStatus
    fraudScore?: FloatNullableFilter<"Claim"> | number | null
    workProofScore?: FloatNullableFilter<"Claim"> | number | null
    payoutAmount?: IntNullableFilter<"Claim"> | number | null
    razorpayPayoutId?: StringNullableFilter<"Claim"> | string | null
    reviewerNotes?: StringNullableFilter<"Claim"> | string | null
    createdAt?: DateTimeFilter<"Claim"> | Date | string
    updatedAt?: DateTimeFilter<"Claim"> | Date | string
  }

  export type WorkSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: WorkSessionWhereUniqueInput
    update: XOR<WorkSessionUpdateWithoutUserInput, WorkSessionUncheckedUpdateWithoutUserInput>
    create: XOR<WorkSessionCreateWithoutUserInput, WorkSessionUncheckedCreateWithoutUserInput>
  }

  export type WorkSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: WorkSessionWhereUniqueInput
    data: XOR<WorkSessionUpdateWithoutUserInput, WorkSessionUncheckedUpdateWithoutUserInput>
  }

  export type WorkSessionUpdateManyWithWhereWithoutUserInput = {
    where: WorkSessionScalarWhereInput
    data: XOR<WorkSessionUpdateManyMutationInput, WorkSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type WorkSessionScalarWhereInput = {
    AND?: WorkSessionScalarWhereInput | WorkSessionScalarWhereInput[]
    OR?: WorkSessionScalarWhereInput[]
    NOT?: WorkSessionScalarWhereInput | WorkSessionScalarWhereInput[]
    id?: StringFilter<"WorkSession"> | string
    userId?: StringFilter<"WorkSession"> | string
    startTime?: DateTimeFilter<"WorkSession"> | Date | string
    endTime?: DateTimeNullableFilter<"WorkSession"> | Date | string | null
    activeMinutes?: IntFilter<"WorkSession"> | number
    ipAddress?: StringFilter<"WorkSession"> | string
    ipCity?: StringNullableFilter<"WorkSession"> | string | null
    platformActiveFlag?: BoolFilter<"WorkSession"> | boolean
    sessionHash?: StringFilter<"WorkSession"> | string
    previousSessionHash?: StringNullableFilter<"WorkSession"> | string | null
    createdAt?: DateTimeFilter<"WorkSession"> | Date | string
  }

  export type UserCreateWithoutPoliciesInput = {
    id?: string
    fullName: string
    phoneNumber: string
    role?: $Enums.Role
    city: string
    deliveryPlatform: string
    vehicleType: string
    weeklyEarnings: number
    upiId?: string | null
    trustScore?: number
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    claims?: ClaimCreateNestedManyWithoutUserInput
    sessions?: WorkSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPoliciesInput = {
    id?: string
    fullName: string
    phoneNumber: string
    role?: $Enums.Role
    city: string
    deliveryPlatform: string
    vehicleType: string
    weeklyEarnings: number
    upiId?: string | null
    trustScore?: number
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    claims?: ClaimUncheckedCreateNestedManyWithoutUserInput
    sessions?: WorkSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPoliciesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPoliciesInput, UserUncheckedCreateWithoutPoliciesInput>
  }

  export type ClaimCreateWithoutPolicyInput = {
    id?: string
    triggerEvent: string
    status: $Enums.ClaimStatus
    fraudScore?: number | null
    workProofScore?: number | null
    payoutAmount?: number | null
    razorpayPayoutId?: string | null
    reviewerNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutClaimsInput
  }

  export type ClaimUncheckedCreateWithoutPolicyInput = {
    id?: string
    userId: string
    triggerEvent: string
    status: $Enums.ClaimStatus
    fraudScore?: number | null
    workProofScore?: number | null
    payoutAmount?: number | null
    razorpayPayoutId?: string | null
    reviewerNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClaimCreateOrConnectWithoutPolicyInput = {
    where: ClaimWhereUniqueInput
    create: XOR<ClaimCreateWithoutPolicyInput, ClaimUncheckedCreateWithoutPolicyInput>
  }

  export type ClaimCreateManyPolicyInputEnvelope = {
    data: ClaimCreateManyPolicyInput | ClaimCreateManyPolicyInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPoliciesInput = {
    update: XOR<UserUpdateWithoutPoliciesInput, UserUncheckedUpdateWithoutPoliciesInput>
    create: XOR<UserCreateWithoutPoliciesInput, UserUncheckedCreateWithoutPoliciesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPoliciesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPoliciesInput, UserUncheckedUpdateWithoutPoliciesInput>
  }

  export type UserUpdateWithoutPoliciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    city?: StringFieldUpdateOperationsInput | string
    deliveryPlatform?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    weeklyEarnings?: IntFieldUpdateOperationsInput | number
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    trustScore?: FloatFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    claims?: ClaimUpdateManyWithoutUserNestedInput
    sessions?: WorkSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPoliciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    city?: StringFieldUpdateOperationsInput | string
    deliveryPlatform?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    weeklyEarnings?: IntFieldUpdateOperationsInput | number
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    trustScore?: FloatFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    claims?: ClaimUncheckedUpdateManyWithoutUserNestedInput
    sessions?: WorkSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ClaimUpsertWithWhereUniqueWithoutPolicyInput = {
    where: ClaimWhereUniqueInput
    update: XOR<ClaimUpdateWithoutPolicyInput, ClaimUncheckedUpdateWithoutPolicyInput>
    create: XOR<ClaimCreateWithoutPolicyInput, ClaimUncheckedCreateWithoutPolicyInput>
  }

  export type ClaimUpdateWithWhereUniqueWithoutPolicyInput = {
    where: ClaimWhereUniqueInput
    data: XOR<ClaimUpdateWithoutPolicyInput, ClaimUncheckedUpdateWithoutPolicyInput>
  }

  export type ClaimUpdateManyWithWhereWithoutPolicyInput = {
    where: ClaimScalarWhereInput
    data: XOR<ClaimUpdateManyMutationInput, ClaimUncheckedUpdateManyWithoutPolicyInput>
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    fullName: string
    phoneNumber: string
    role?: $Enums.Role
    city: string
    deliveryPlatform: string
    vehicleType: string
    weeklyEarnings: number
    upiId?: string | null
    trustScore?: number
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    policies?: PolicyCreateNestedManyWithoutUserInput
    claims?: ClaimCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    fullName: string
    phoneNumber: string
    role?: $Enums.Role
    city: string
    deliveryPlatform: string
    vehicleType: string
    weeklyEarnings: number
    upiId?: string | null
    trustScore?: number
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    policies?: PolicyUncheckedCreateNestedManyWithoutUserInput
    claims?: ClaimUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    city?: StringFieldUpdateOperationsInput | string
    deliveryPlatform?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    weeklyEarnings?: IntFieldUpdateOperationsInput | number
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    trustScore?: FloatFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    policies?: PolicyUpdateManyWithoutUserNestedInput
    claims?: ClaimUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    city?: StringFieldUpdateOperationsInput | string
    deliveryPlatform?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    weeklyEarnings?: IntFieldUpdateOperationsInput | number
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    trustScore?: FloatFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    policies?: PolicyUncheckedUpdateManyWithoutUserNestedInput
    claims?: ClaimUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutClaimsInput = {
    id?: string
    fullName: string
    phoneNumber: string
    role?: $Enums.Role
    city: string
    deliveryPlatform: string
    vehicleType: string
    weeklyEarnings: number
    upiId?: string | null
    trustScore?: number
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    policies?: PolicyCreateNestedManyWithoutUserInput
    sessions?: WorkSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutClaimsInput = {
    id?: string
    fullName: string
    phoneNumber: string
    role?: $Enums.Role
    city: string
    deliveryPlatform: string
    vehicleType: string
    weeklyEarnings: number
    upiId?: string | null
    trustScore?: number
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    policies?: PolicyUncheckedCreateNestedManyWithoutUserInput
    sessions?: WorkSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutClaimsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClaimsInput, UserUncheckedCreateWithoutClaimsInput>
  }

  export type PolicyCreateWithoutClaimsInput = {
    id?: string
    planTier: $Enums.PlanTier
    status: $Enums.PolicyStatus
    coverageAmount: number
    premiumPaid: number
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    startDate?: Date | string
    endDate: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPoliciesInput
  }

  export type PolicyUncheckedCreateWithoutClaimsInput = {
    id?: string
    userId: string
    planTier: $Enums.PlanTier
    status: $Enums.PolicyStatus
    coverageAmount: number
    premiumPaid: number
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    startDate?: Date | string
    endDate: Date | string
    createdAt?: Date | string
  }

  export type PolicyCreateOrConnectWithoutClaimsInput = {
    where: PolicyWhereUniqueInput
    create: XOR<PolicyCreateWithoutClaimsInput, PolicyUncheckedCreateWithoutClaimsInput>
  }

  export type UserUpsertWithoutClaimsInput = {
    update: XOR<UserUpdateWithoutClaimsInput, UserUncheckedUpdateWithoutClaimsInput>
    create: XOR<UserCreateWithoutClaimsInput, UserUncheckedCreateWithoutClaimsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutClaimsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutClaimsInput, UserUncheckedUpdateWithoutClaimsInput>
  }

  export type UserUpdateWithoutClaimsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    city?: StringFieldUpdateOperationsInput | string
    deliveryPlatform?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    weeklyEarnings?: IntFieldUpdateOperationsInput | number
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    trustScore?: FloatFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    policies?: PolicyUpdateManyWithoutUserNestedInput
    sessions?: WorkSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutClaimsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    city?: StringFieldUpdateOperationsInput | string
    deliveryPlatform?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    weeklyEarnings?: IntFieldUpdateOperationsInput | number
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    trustScore?: FloatFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    policies?: PolicyUncheckedUpdateManyWithoutUserNestedInput
    sessions?: WorkSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PolicyUpsertWithoutClaimsInput = {
    update: XOR<PolicyUpdateWithoutClaimsInput, PolicyUncheckedUpdateWithoutClaimsInput>
    create: XOR<PolicyCreateWithoutClaimsInput, PolicyUncheckedCreateWithoutClaimsInput>
    where?: PolicyWhereInput
  }

  export type PolicyUpdateToOneWithWhereWithoutClaimsInput = {
    where?: PolicyWhereInput
    data: XOR<PolicyUpdateWithoutClaimsInput, PolicyUncheckedUpdateWithoutClaimsInput>
  }

  export type PolicyUpdateWithoutClaimsInput = {
    id?: StringFieldUpdateOperationsInput | string
    planTier?: EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier
    status?: EnumPolicyStatusFieldUpdateOperationsInput | $Enums.PolicyStatus
    coverageAmount?: IntFieldUpdateOperationsInput | number
    premiumPaid?: IntFieldUpdateOperationsInput | number
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPoliciesNestedInput
  }

  export type PolicyUncheckedUpdateWithoutClaimsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    planTier?: EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier
    status?: EnumPolicyStatusFieldUpdateOperationsInput | $Enums.PolicyStatus
    coverageAmount?: IntFieldUpdateOperationsInput | number
    premiumPaid?: IntFieldUpdateOperationsInput | number
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PolicyCreateManyUserInput = {
    id?: string
    planTier: $Enums.PlanTier
    status: $Enums.PolicyStatus
    coverageAmount: number
    premiumPaid: number
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    startDate?: Date | string
    endDate: Date | string
    createdAt?: Date | string
  }

  export type ClaimCreateManyUserInput = {
    id?: string
    policyId: string
    triggerEvent: string
    status: $Enums.ClaimStatus
    fraudScore?: number | null
    workProofScore?: number | null
    payoutAmount?: number | null
    razorpayPayoutId?: string | null
    reviewerNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkSessionCreateManyUserInput = {
    id?: string
    startTime?: Date | string
    endTime?: Date | string | null
    activeMinutes?: number
    ipAddress: string
    ipCity?: string | null
    platformActiveFlag?: boolean
    sessionHash: string
    previousSessionHash?: string | null
    createdAt?: Date | string
  }

  export type PolicyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    planTier?: EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier
    status?: EnumPolicyStatusFieldUpdateOperationsInput | $Enums.PolicyStatus
    coverageAmount?: IntFieldUpdateOperationsInput | number
    premiumPaid?: IntFieldUpdateOperationsInput | number
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    claims?: ClaimUpdateManyWithoutPolicyNestedInput
  }

  export type PolicyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    planTier?: EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier
    status?: EnumPolicyStatusFieldUpdateOperationsInput | $Enums.PolicyStatus
    coverageAmount?: IntFieldUpdateOperationsInput | number
    premiumPaid?: IntFieldUpdateOperationsInput | number
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    claims?: ClaimUncheckedUpdateManyWithoutPolicyNestedInput
  }

  export type PolicyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    planTier?: EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier
    status?: EnumPolicyStatusFieldUpdateOperationsInput | $Enums.PolicyStatus
    coverageAmount?: IntFieldUpdateOperationsInput | number
    premiumPaid?: IntFieldUpdateOperationsInput | number
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaimUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerEvent?: StringFieldUpdateOperationsInput | string
    status?: EnumClaimStatusFieldUpdateOperationsInput | $Enums.ClaimStatus
    fraudScore?: NullableFloatFieldUpdateOperationsInput | number | null
    workProofScore?: NullableFloatFieldUpdateOperationsInput | number | null
    payoutAmount?: NullableIntFieldUpdateOperationsInput | number | null
    razorpayPayoutId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewerNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    policy?: PolicyUpdateOneRequiredWithoutClaimsNestedInput
  }

  export type ClaimUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    policyId?: StringFieldUpdateOperationsInput | string
    triggerEvent?: StringFieldUpdateOperationsInput | string
    status?: EnumClaimStatusFieldUpdateOperationsInput | $Enums.ClaimStatus
    fraudScore?: NullableFloatFieldUpdateOperationsInput | number | null
    workProofScore?: NullableFloatFieldUpdateOperationsInput | number | null
    payoutAmount?: NullableIntFieldUpdateOperationsInput | number | null
    razorpayPayoutId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewerNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaimUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    policyId?: StringFieldUpdateOperationsInput | string
    triggerEvent?: StringFieldUpdateOperationsInput | string
    status?: EnumClaimStatusFieldUpdateOperationsInput | $Enums.ClaimStatus
    fraudScore?: NullableFloatFieldUpdateOperationsInput | number | null
    workProofScore?: NullableFloatFieldUpdateOperationsInput | number | null
    payoutAmount?: NullableIntFieldUpdateOperationsInput | number | null
    razorpayPayoutId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewerNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activeMinutes?: IntFieldUpdateOperationsInput | number
    ipAddress?: StringFieldUpdateOperationsInput | string
    ipCity?: NullableStringFieldUpdateOperationsInput | string | null
    platformActiveFlag?: BoolFieldUpdateOperationsInput | boolean
    sessionHash?: StringFieldUpdateOperationsInput | string
    previousSessionHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activeMinutes?: IntFieldUpdateOperationsInput | number
    ipAddress?: StringFieldUpdateOperationsInput | string
    ipCity?: NullableStringFieldUpdateOperationsInput | string | null
    platformActiveFlag?: BoolFieldUpdateOperationsInput | boolean
    sessionHash?: StringFieldUpdateOperationsInput | string
    previousSessionHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkSessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activeMinutes?: IntFieldUpdateOperationsInput | number
    ipAddress?: StringFieldUpdateOperationsInput | string
    ipCity?: NullableStringFieldUpdateOperationsInput | string | null
    platformActiveFlag?: BoolFieldUpdateOperationsInput | boolean
    sessionHash?: StringFieldUpdateOperationsInput | string
    previousSessionHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaimCreateManyPolicyInput = {
    id?: string
    userId: string
    triggerEvent: string
    status: $Enums.ClaimStatus
    fraudScore?: number | null
    workProofScore?: number | null
    payoutAmount?: number | null
    razorpayPayoutId?: string | null
    reviewerNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClaimUpdateWithoutPolicyInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerEvent?: StringFieldUpdateOperationsInput | string
    status?: EnumClaimStatusFieldUpdateOperationsInput | $Enums.ClaimStatus
    fraudScore?: NullableFloatFieldUpdateOperationsInput | number | null
    workProofScore?: NullableFloatFieldUpdateOperationsInput | number | null
    payoutAmount?: NullableIntFieldUpdateOperationsInput | number | null
    razorpayPayoutId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewerNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutClaimsNestedInput
  }

  export type ClaimUncheckedUpdateWithoutPolicyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    triggerEvent?: StringFieldUpdateOperationsInput | string
    status?: EnumClaimStatusFieldUpdateOperationsInput | $Enums.ClaimStatus
    fraudScore?: NullableFloatFieldUpdateOperationsInput | number | null
    workProofScore?: NullableFloatFieldUpdateOperationsInput | number | null
    payoutAmount?: NullableIntFieldUpdateOperationsInput | number | null
    razorpayPayoutId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewerNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaimUncheckedUpdateManyWithoutPolicyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    triggerEvent?: StringFieldUpdateOperationsInput | string
    status?: EnumClaimStatusFieldUpdateOperationsInput | $Enums.ClaimStatus
    fraudScore?: NullableFloatFieldUpdateOperationsInput | number | null
    workProofScore?: NullableFloatFieldUpdateOperationsInput | number | null
    payoutAmount?: NullableIntFieldUpdateOperationsInput | number | null
    razorpayPayoutId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewerNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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