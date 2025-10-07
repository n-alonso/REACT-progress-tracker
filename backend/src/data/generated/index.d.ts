
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
 * Model Show
 * 
 */
export type Show = $Result.DefaultSelection<Prisma.$ShowPayload>
/**
 * Model Episode
 * 
 */
export type Episode = $Result.DefaultSelection<Prisma.$EpisodePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Watched
 * 
 */
export type Watched = $Result.DefaultSelection<Prisma.$WatchedPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Shows
 * const shows = await prisma.show.findMany()
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
   * // Fetch zero or more Shows
   * const shows = await prisma.show.findMany()
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
   * `prisma.show`: Exposes CRUD operations for the **Show** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shows
    * const shows = await prisma.show.findMany()
    * ```
    */
  get show(): Prisma.ShowDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.episode`: Exposes CRUD operations for the **Episode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Episodes
    * const episodes = await prisma.episode.findMany()
    * ```
    */
  get episode(): Prisma.EpisodeDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.watched`: Exposes CRUD operations for the **Watched** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Watcheds
    * const watcheds = await prisma.watched.findMany()
    * ```
    */
  get watched(): Prisma.WatchedDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.3
   * Query Engine version: bb420e667c1820a8c05a38023385f6cc7ef8e83a
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
    Show: 'Show',
    Episode: 'Episode',
    User: 'User',
    Watched: 'Watched'
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
      modelProps: "show" | "episode" | "user" | "watched"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Show: {
        payload: Prisma.$ShowPayload<ExtArgs>
        fields: Prisma.ShowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowPayload>
          }
          findFirst: {
            args: Prisma.ShowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowPayload>
          }
          findMany: {
            args: Prisma.ShowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowPayload>[]
          }
          create: {
            args: Prisma.ShowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowPayload>
          }
          createMany: {
            args: Prisma.ShowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowPayload>[]
          }
          delete: {
            args: Prisma.ShowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowPayload>
          }
          update: {
            args: Prisma.ShowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowPayload>
          }
          deleteMany: {
            args: Prisma.ShowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShowUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowPayload>[]
          }
          upsert: {
            args: Prisma.ShowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowPayload>
          }
          aggregate: {
            args: Prisma.ShowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShow>
          }
          groupBy: {
            args: Prisma.ShowGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShowGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShowCountArgs<ExtArgs>
            result: $Utils.Optional<ShowCountAggregateOutputType> | number
          }
        }
      }
      Episode: {
        payload: Prisma.$EpisodePayload<ExtArgs>
        fields: Prisma.EpisodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EpisodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EpisodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          findFirst: {
            args: Prisma.EpisodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EpisodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          findMany: {
            args: Prisma.EpisodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>[]
          }
          create: {
            args: Prisma.EpisodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          createMany: {
            args: Prisma.EpisodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EpisodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>[]
          }
          delete: {
            args: Prisma.EpisodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          update: {
            args: Prisma.EpisodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          deleteMany: {
            args: Prisma.EpisodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EpisodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EpisodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>[]
          }
          upsert: {
            args: Prisma.EpisodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          aggregate: {
            args: Prisma.EpisodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEpisode>
          }
          groupBy: {
            args: Prisma.EpisodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EpisodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EpisodeCountArgs<ExtArgs>
            result: $Utils.Optional<EpisodeCountAggregateOutputType> | number
          }
        }
      }
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
      Watched: {
        payload: Prisma.$WatchedPayload<ExtArgs>
        fields: Prisma.WatchedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WatchedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WatchedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchedPayload>
          }
          findFirst: {
            args: Prisma.WatchedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WatchedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchedPayload>
          }
          findMany: {
            args: Prisma.WatchedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchedPayload>[]
          }
          create: {
            args: Prisma.WatchedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchedPayload>
          }
          createMany: {
            args: Prisma.WatchedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WatchedCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchedPayload>[]
          }
          delete: {
            args: Prisma.WatchedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchedPayload>
          }
          update: {
            args: Prisma.WatchedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchedPayload>
          }
          deleteMany: {
            args: Prisma.WatchedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WatchedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WatchedUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchedPayload>[]
          }
          upsert: {
            args: Prisma.WatchedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchedPayload>
          }
          aggregate: {
            args: Prisma.WatchedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWatched>
          }
          groupBy: {
            args: Prisma.WatchedGroupByArgs<ExtArgs>
            result: $Utils.Optional<WatchedGroupByOutputType>[]
          }
          count: {
            args: Prisma.WatchedCountArgs<ExtArgs>
            result: $Utils.Optional<WatchedCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    show?: ShowOmit
    episode?: EpisodeOmit
    user?: UserOmit
    watched?: WatchedOmit
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
   * Count Type ShowCountOutputType
   */

  export type ShowCountOutputType = {
    episodes: number
    watched: number
  }

  export type ShowCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    episodes?: boolean | ShowCountOutputTypeCountEpisodesArgs
    watched?: boolean | ShowCountOutputTypeCountWatchedArgs
  }

  // Custom InputTypes
  /**
   * ShowCountOutputType without action
   */
  export type ShowCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowCountOutputType
     */
    select?: ShowCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShowCountOutputType without action
   */
  export type ShowCountOutputTypeCountEpisodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EpisodeWhereInput
  }

  /**
   * ShowCountOutputType without action
   */
  export type ShowCountOutputTypeCountWatchedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchedWhereInput
  }


  /**
   * Count Type EpisodeCountOutputType
   */

  export type EpisodeCountOutputType = {
    watched: number
  }

  export type EpisodeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    watched?: boolean | EpisodeCountOutputTypeCountWatchedArgs
  }

  // Custom InputTypes
  /**
   * EpisodeCountOutputType without action
   */
  export type EpisodeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpisodeCountOutputType
     */
    select?: EpisodeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EpisodeCountOutputType without action
   */
  export type EpisodeCountOutputTypeCountWatchedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchedWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    watched: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    watched?: boolean | UserCountOutputTypeCountWatchedArgs
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
  export type UserCountOutputTypeCountWatchedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchedWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Show
   */

  export type AggregateShow = {
    _count: ShowCountAggregateOutputType | null
    _avg: ShowAvgAggregateOutputType | null
    _sum: ShowSumAggregateOutputType | null
    _min: ShowMinAggregateOutputType | null
    _max: ShowMaxAggregateOutputType | null
  }

  export type ShowAvgAggregateOutputType = {
    id: number | null
  }

  export type ShowSumAggregateOutputType = {
    id: number | null
  }

  export type ShowMinAggregateOutputType = {
    id: number | null
    title: string | null
  }

  export type ShowMaxAggregateOutputType = {
    id: number | null
    title: string | null
  }

  export type ShowCountAggregateOutputType = {
    id: number
    title: number
    _all: number
  }


  export type ShowAvgAggregateInputType = {
    id?: true
  }

  export type ShowSumAggregateInputType = {
    id?: true
  }

  export type ShowMinAggregateInputType = {
    id?: true
    title?: true
  }

  export type ShowMaxAggregateInputType = {
    id?: true
    title?: true
  }

  export type ShowCountAggregateInputType = {
    id?: true
    title?: true
    _all?: true
  }

  export type ShowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Show to aggregate.
     */
    where?: ShowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shows to fetch.
     */
    orderBy?: ShowOrderByWithRelationInput | ShowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shows
    **/
    _count?: true | ShowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShowAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShowSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShowMaxAggregateInputType
  }

  export type GetShowAggregateType<T extends ShowAggregateArgs> = {
        [P in keyof T & keyof AggregateShow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShow[P]>
      : GetScalarType<T[P], AggregateShow[P]>
  }




  export type ShowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShowWhereInput
    orderBy?: ShowOrderByWithAggregationInput | ShowOrderByWithAggregationInput[]
    by: ShowScalarFieldEnum[] | ShowScalarFieldEnum
    having?: ShowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShowCountAggregateInputType | true
    _avg?: ShowAvgAggregateInputType
    _sum?: ShowSumAggregateInputType
    _min?: ShowMinAggregateInputType
    _max?: ShowMaxAggregateInputType
  }

  export type ShowGroupByOutputType = {
    id: number
    title: string
    _count: ShowCountAggregateOutputType | null
    _avg: ShowAvgAggregateOutputType | null
    _sum: ShowSumAggregateOutputType | null
    _min: ShowMinAggregateOutputType | null
    _max: ShowMaxAggregateOutputType | null
  }

  type GetShowGroupByPayload<T extends ShowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShowGroupByOutputType[P]>
            : GetScalarType<T[P], ShowGroupByOutputType[P]>
        }
      >
    >


  export type ShowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    episodes?: boolean | Show$episodesArgs<ExtArgs>
    watched?: boolean | Show$watchedArgs<ExtArgs>
    _count?: boolean | ShowCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["show"]>

  export type ShowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
  }, ExtArgs["result"]["show"]>

  export type ShowSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
  }, ExtArgs["result"]["show"]>

  export type ShowSelectScalar = {
    id?: boolean
    title?: boolean
  }

  export type ShowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title", ExtArgs["result"]["show"]>
  export type ShowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    episodes?: boolean | Show$episodesArgs<ExtArgs>
    watched?: boolean | Show$watchedArgs<ExtArgs>
    _count?: boolean | ShowCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ShowIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ShowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Show"
    objects: {
      episodes: Prisma.$EpisodePayload<ExtArgs>[]
      watched: Prisma.$WatchedPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
    }, ExtArgs["result"]["show"]>
    composites: {}
  }

  type ShowGetPayload<S extends boolean | null | undefined | ShowDefaultArgs> = $Result.GetResult<Prisma.$ShowPayload, S>

  type ShowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShowCountAggregateInputType | true
    }

  export interface ShowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Show'], meta: { name: 'Show' } }
    /**
     * Find zero or one Show that matches the filter.
     * @param {ShowFindUniqueArgs} args - Arguments to find a Show
     * @example
     * // Get one Show
     * const show = await prisma.show.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShowFindUniqueArgs>(args: SelectSubset<T, ShowFindUniqueArgs<ExtArgs>>): Prisma__ShowClient<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Show that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShowFindUniqueOrThrowArgs} args - Arguments to find a Show
     * @example
     * // Get one Show
     * const show = await prisma.show.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShowFindUniqueOrThrowArgs>(args: SelectSubset<T, ShowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShowClient<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Show that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowFindFirstArgs} args - Arguments to find a Show
     * @example
     * // Get one Show
     * const show = await prisma.show.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShowFindFirstArgs>(args?: SelectSubset<T, ShowFindFirstArgs<ExtArgs>>): Prisma__ShowClient<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Show that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowFindFirstOrThrowArgs} args - Arguments to find a Show
     * @example
     * // Get one Show
     * const show = await prisma.show.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShowFindFirstOrThrowArgs>(args?: SelectSubset<T, ShowFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShowClient<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shows
     * const shows = await prisma.show.findMany()
     * 
     * // Get first 10 Shows
     * const shows = await prisma.show.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const showWithIdOnly = await prisma.show.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShowFindManyArgs>(args?: SelectSubset<T, ShowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Show.
     * @param {ShowCreateArgs} args - Arguments to create a Show.
     * @example
     * // Create one Show
     * const Show = await prisma.show.create({
     *   data: {
     *     // ... data to create a Show
     *   }
     * })
     * 
     */
    create<T extends ShowCreateArgs>(args: SelectSubset<T, ShowCreateArgs<ExtArgs>>): Prisma__ShowClient<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shows.
     * @param {ShowCreateManyArgs} args - Arguments to create many Shows.
     * @example
     * // Create many Shows
     * const show = await prisma.show.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShowCreateManyArgs>(args?: SelectSubset<T, ShowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shows and returns the data saved in the database.
     * @param {ShowCreateManyAndReturnArgs} args - Arguments to create many Shows.
     * @example
     * // Create many Shows
     * const show = await prisma.show.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shows and only return the `id`
     * const showWithIdOnly = await prisma.show.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShowCreateManyAndReturnArgs>(args?: SelectSubset<T, ShowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Show.
     * @param {ShowDeleteArgs} args - Arguments to delete one Show.
     * @example
     * // Delete one Show
     * const Show = await prisma.show.delete({
     *   where: {
     *     // ... filter to delete one Show
     *   }
     * })
     * 
     */
    delete<T extends ShowDeleteArgs>(args: SelectSubset<T, ShowDeleteArgs<ExtArgs>>): Prisma__ShowClient<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Show.
     * @param {ShowUpdateArgs} args - Arguments to update one Show.
     * @example
     * // Update one Show
     * const show = await prisma.show.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShowUpdateArgs>(args: SelectSubset<T, ShowUpdateArgs<ExtArgs>>): Prisma__ShowClient<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shows.
     * @param {ShowDeleteManyArgs} args - Arguments to filter Shows to delete.
     * @example
     * // Delete a few Shows
     * const { count } = await prisma.show.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShowDeleteManyArgs>(args?: SelectSubset<T, ShowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shows
     * const show = await prisma.show.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShowUpdateManyArgs>(args: SelectSubset<T, ShowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shows and returns the data updated in the database.
     * @param {ShowUpdateManyAndReturnArgs} args - Arguments to update many Shows.
     * @example
     * // Update many Shows
     * const show = await prisma.show.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shows and only return the `id`
     * const showWithIdOnly = await prisma.show.updateManyAndReturn({
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
    updateManyAndReturn<T extends ShowUpdateManyAndReturnArgs>(args: SelectSubset<T, ShowUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Show.
     * @param {ShowUpsertArgs} args - Arguments to update or create a Show.
     * @example
     * // Update or create a Show
     * const show = await prisma.show.upsert({
     *   create: {
     *     // ... data to create a Show
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Show we want to update
     *   }
     * })
     */
    upsert<T extends ShowUpsertArgs>(args: SelectSubset<T, ShowUpsertArgs<ExtArgs>>): Prisma__ShowClient<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowCountArgs} args - Arguments to filter Shows to count.
     * @example
     * // Count the number of Shows
     * const count = await prisma.show.count({
     *   where: {
     *     // ... the filter for the Shows we want to count
     *   }
     * })
    **/
    count<T extends ShowCountArgs>(
      args?: Subset<T, ShowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Show.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShowAggregateArgs>(args: Subset<T, ShowAggregateArgs>): Prisma.PrismaPromise<GetShowAggregateType<T>>

    /**
     * Group by Show.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowGroupByArgs} args - Group by arguments.
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
      T extends ShowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShowGroupByArgs['orderBy'] }
        : { orderBy?: ShowGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Show model
   */
  readonly fields: ShowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Show.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    episodes<T extends Show$episodesArgs<ExtArgs> = {}>(args?: Subset<T, Show$episodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    watched<T extends Show$watchedArgs<ExtArgs> = {}>(args?: Subset<T, Show$watchedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Show model
   */
  interface ShowFieldRefs {
    readonly id: FieldRef<"Show", 'Int'>
    readonly title: FieldRef<"Show", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Show findUnique
   */
  export type ShowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Show
     */
    omit?: ShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowInclude<ExtArgs> | null
    /**
     * Filter, which Show to fetch.
     */
    where: ShowWhereUniqueInput
  }

  /**
   * Show findUniqueOrThrow
   */
  export type ShowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Show
     */
    omit?: ShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowInclude<ExtArgs> | null
    /**
     * Filter, which Show to fetch.
     */
    where: ShowWhereUniqueInput
  }

  /**
   * Show findFirst
   */
  export type ShowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Show
     */
    omit?: ShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowInclude<ExtArgs> | null
    /**
     * Filter, which Show to fetch.
     */
    where?: ShowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shows to fetch.
     */
    orderBy?: ShowOrderByWithRelationInput | ShowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shows.
     */
    cursor?: ShowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shows.
     */
    distinct?: ShowScalarFieldEnum | ShowScalarFieldEnum[]
  }

  /**
   * Show findFirstOrThrow
   */
  export type ShowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Show
     */
    omit?: ShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowInclude<ExtArgs> | null
    /**
     * Filter, which Show to fetch.
     */
    where?: ShowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shows to fetch.
     */
    orderBy?: ShowOrderByWithRelationInput | ShowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shows.
     */
    cursor?: ShowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shows.
     */
    distinct?: ShowScalarFieldEnum | ShowScalarFieldEnum[]
  }

  /**
   * Show findMany
   */
  export type ShowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Show
     */
    omit?: ShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowInclude<ExtArgs> | null
    /**
     * Filter, which Shows to fetch.
     */
    where?: ShowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shows to fetch.
     */
    orderBy?: ShowOrderByWithRelationInput | ShowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shows.
     */
    cursor?: ShowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shows.
     */
    skip?: number
    distinct?: ShowScalarFieldEnum | ShowScalarFieldEnum[]
  }

  /**
   * Show create
   */
  export type ShowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Show
     */
    omit?: ShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowInclude<ExtArgs> | null
    /**
     * The data needed to create a Show.
     */
    data: XOR<ShowCreateInput, ShowUncheckedCreateInput>
  }

  /**
   * Show createMany
   */
  export type ShowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shows.
     */
    data: ShowCreateManyInput | ShowCreateManyInput[]
  }

  /**
   * Show createManyAndReturn
   */
  export type ShowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Show
     */
    omit?: ShowOmit<ExtArgs> | null
    /**
     * The data used to create many Shows.
     */
    data: ShowCreateManyInput | ShowCreateManyInput[]
  }

  /**
   * Show update
   */
  export type ShowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Show
     */
    omit?: ShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowInclude<ExtArgs> | null
    /**
     * The data needed to update a Show.
     */
    data: XOR<ShowUpdateInput, ShowUncheckedUpdateInput>
    /**
     * Choose, which Show to update.
     */
    where: ShowWhereUniqueInput
  }

  /**
   * Show updateMany
   */
  export type ShowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shows.
     */
    data: XOR<ShowUpdateManyMutationInput, ShowUncheckedUpdateManyInput>
    /**
     * Filter which Shows to update
     */
    where?: ShowWhereInput
    /**
     * Limit how many Shows to update.
     */
    limit?: number
  }

  /**
   * Show updateManyAndReturn
   */
  export type ShowUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Show
     */
    omit?: ShowOmit<ExtArgs> | null
    /**
     * The data used to update Shows.
     */
    data: XOR<ShowUpdateManyMutationInput, ShowUncheckedUpdateManyInput>
    /**
     * Filter which Shows to update
     */
    where?: ShowWhereInput
    /**
     * Limit how many Shows to update.
     */
    limit?: number
  }

  /**
   * Show upsert
   */
  export type ShowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Show
     */
    omit?: ShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowInclude<ExtArgs> | null
    /**
     * The filter to search for the Show to update in case it exists.
     */
    where: ShowWhereUniqueInput
    /**
     * In case the Show found by the `where` argument doesn't exist, create a new Show with this data.
     */
    create: XOR<ShowCreateInput, ShowUncheckedCreateInput>
    /**
     * In case the Show was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShowUpdateInput, ShowUncheckedUpdateInput>
  }

  /**
   * Show delete
   */
  export type ShowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Show
     */
    omit?: ShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowInclude<ExtArgs> | null
    /**
     * Filter which Show to delete.
     */
    where: ShowWhereUniqueInput
  }

  /**
   * Show deleteMany
   */
  export type ShowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shows to delete
     */
    where?: ShowWhereInput
    /**
     * Limit how many Shows to delete.
     */
    limit?: number
  }

  /**
   * Show.episodes
   */
  export type Show$episodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    where?: EpisodeWhereInput
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    cursor?: EpisodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }

  /**
   * Show.watched
   */
  export type Show$watchedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watched
     */
    select?: WatchedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watched
     */
    omit?: WatchedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchedInclude<ExtArgs> | null
    where?: WatchedWhereInput
    orderBy?: WatchedOrderByWithRelationInput | WatchedOrderByWithRelationInput[]
    cursor?: WatchedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WatchedScalarFieldEnum | WatchedScalarFieldEnum[]
  }

  /**
   * Show without action
   */
  export type ShowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Show
     */
    omit?: ShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowInclude<ExtArgs> | null
  }


  /**
   * Model Episode
   */

  export type AggregateEpisode = {
    _count: EpisodeCountAggregateOutputType | null
    _avg: EpisodeAvgAggregateOutputType | null
    _sum: EpisodeSumAggregateOutputType | null
    _min: EpisodeMinAggregateOutputType | null
    _max: EpisodeMaxAggregateOutputType | null
  }

  export type EpisodeAvgAggregateOutputType = {
    id: number | null
    showId: number | null
  }

  export type EpisodeSumAggregateOutputType = {
    id: number | null
    showId: number | null
  }

  export type EpisodeMinAggregateOutputType = {
    id: number | null
    showId: number | null
    title: string | null
  }

  export type EpisodeMaxAggregateOutputType = {
    id: number | null
    showId: number | null
    title: string | null
  }

  export type EpisodeCountAggregateOutputType = {
    id: number
    showId: number
    title: number
    _all: number
  }


  export type EpisodeAvgAggregateInputType = {
    id?: true
    showId?: true
  }

  export type EpisodeSumAggregateInputType = {
    id?: true
    showId?: true
  }

  export type EpisodeMinAggregateInputType = {
    id?: true
    showId?: true
    title?: true
  }

  export type EpisodeMaxAggregateInputType = {
    id?: true
    showId?: true
    title?: true
  }

  export type EpisodeCountAggregateInputType = {
    id?: true
    showId?: true
    title?: true
    _all?: true
  }

  export type EpisodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Episode to aggregate.
     */
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Episodes
    **/
    _count?: true | EpisodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EpisodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EpisodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EpisodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EpisodeMaxAggregateInputType
  }

  export type GetEpisodeAggregateType<T extends EpisodeAggregateArgs> = {
        [P in keyof T & keyof AggregateEpisode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEpisode[P]>
      : GetScalarType<T[P], AggregateEpisode[P]>
  }




  export type EpisodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EpisodeWhereInput
    orderBy?: EpisodeOrderByWithAggregationInput | EpisodeOrderByWithAggregationInput[]
    by: EpisodeScalarFieldEnum[] | EpisodeScalarFieldEnum
    having?: EpisodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EpisodeCountAggregateInputType | true
    _avg?: EpisodeAvgAggregateInputType
    _sum?: EpisodeSumAggregateInputType
    _min?: EpisodeMinAggregateInputType
    _max?: EpisodeMaxAggregateInputType
  }

  export type EpisodeGroupByOutputType = {
    id: number
    showId: number
    title: string
    _count: EpisodeCountAggregateOutputType | null
    _avg: EpisodeAvgAggregateOutputType | null
    _sum: EpisodeSumAggregateOutputType | null
    _min: EpisodeMinAggregateOutputType | null
    _max: EpisodeMaxAggregateOutputType | null
  }

  type GetEpisodeGroupByPayload<T extends EpisodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EpisodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EpisodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EpisodeGroupByOutputType[P]>
            : GetScalarType<T[P], EpisodeGroupByOutputType[P]>
        }
      >
    >


  export type EpisodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    showId?: boolean
    title?: boolean
    show?: boolean | ShowDefaultArgs<ExtArgs>
    watched?: boolean | Episode$watchedArgs<ExtArgs>
    _count?: boolean | EpisodeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["episode"]>

  export type EpisodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    showId?: boolean
    title?: boolean
    show?: boolean | ShowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["episode"]>

  export type EpisodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    showId?: boolean
    title?: boolean
    show?: boolean | ShowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["episode"]>

  export type EpisodeSelectScalar = {
    id?: boolean
    showId?: boolean
    title?: boolean
  }

  export type EpisodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "showId" | "title", ExtArgs["result"]["episode"]>
  export type EpisodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    show?: boolean | ShowDefaultArgs<ExtArgs>
    watched?: boolean | Episode$watchedArgs<ExtArgs>
    _count?: boolean | EpisodeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EpisodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    show?: boolean | ShowDefaultArgs<ExtArgs>
  }
  export type EpisodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    show?: boolean | ShowDefaultArgs<ExtArgs>
  }

  export type $EpisodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Episode"
    objects: {
      show: Prisma.$ShowPayload<ExtArgs>
      watched: Prisma.$WatchedPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      showId: number
      title: string
    }, ExtArgs["result"]["episode"]>
    composites: {}
  }

  type EpisodeGetPayload<S extends boolean | null | undefined | EpisodeDefaultArgs> = $Result.GetResult<Prisma.$EpisodePayload, S>

  type EpisodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EpisodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EpisodeCountAggregateInputType | true
    }

  export interface EpisodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Episode'], meta: { name: 'Episode' } }
    /**
     * Find zero or one Episode that matches the filter.
     * @param {EpisodeFindUniqueArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EpisodeFindUniqueArgs>(args: SelectSubset<T, EpisodeFindUniqueArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Episode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EpisodeFindUniqueOrThrowArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EpisodeFindUniqueOrThrowArgs>(args: SelectSubset<T, EpisodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Episode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeFindFirstArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EpisodeFindFirstArgs>(args?: SelectSubset<T, EpisodeFindFirstArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Episode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeFindFirstOrThrowArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EpisodeFindFirstOrThrowArgs>(args?: SelectSubset<T, EpisodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Episodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Episodes
     * const episodes = await prisma.episode.findMany()
     * 
     * // Get first 10 Episodes
     * const episodes = await prisma.episode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const episodeWithIdOnly = await prisma.episode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EpisodeFindManyArgs>(args?: SelectSubset<T, EpisodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Episode.
     * @param {EpisodeCreateArgs} args - Arguments to create a Episode.
     * @example
     * // Create one Episode
     * const Episode = await prisma.episode.create({
     *   data: {
     *     // ... data to create a Episode
     *   }
     * })
     * 
     */
    create<T extends EpisodeCreateArgs>(args: SelectSubset<T, EpisodeCreateArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Episodes.
     * @param {EpisodeCreateManyArgs} args - Arguments to create many Episodes.
     * @example
     * // Create many Episodes
     * const episode = await prisma.episode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EpisodeCreateManyArgs>(args?: SelectSubset<T, EpisodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Episodes and returns the data saved in the database.
     * @param {EpisodeCreateManyAndReturnArgs} args - Arguments to create many Episodes.
     * @example
     * // Create many Episodes
     * const episode = await prisma.episode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Episodes and only return the `id`
     * const episodeWithIdOnly = await prisma.episode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EpisodeCreateManyAndReturnArgs>(args?: SelectSubset<T, EpisodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Episode.
     * @param {EpisodeDeleteArgs} args - Arguments to delete one Episode.
     * @example
     * // Delete one Episode
     * const Episode = await prisma.episode.delete({
     *   where: {
     *     // ... filter to delete one Episode
     *   }
     * })
     * 
     */
    delete<T extends EpisodeDeleteArgs>(args: SelectSubset<T, EpisodeDeleteArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Episode.
     * @param {EpisodeUpdateArgs} args - Arguments to update one Episode.
     * @example
     * // Update one Episode
     * const episode = await prisma.episode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EpisodeUpdateArgs>(args: SelectSubset<T, EpisodeUpdateArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Episodes.
     * @param {EpisodeDeleteManyArgs} args - Arguments to filter Episodes to delete.
     * @example
     * // Delete a few Episodes
     * const { count } = await prisma.episode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EpisodeDeleteManyArgs>(args?: SelectSubset<T, EpisodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Episodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Episodes
     * const episode = await prisma.episode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EpisodeUpdateManyArgs>(args: SelectSubset<T, EpisodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Episodes and returns the data updated in the database.
     * @param {EpisodeUpdateManyAndReturnArgs} args - Arguments to update many Episodes.
     * @example
     * // Update many Episodes
     * const episode = await prisma.episode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Episodes and only return the `id`
     * const episodeWithIdOnly = await prisma.episode.updateManyAndReturn({
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
    updateManyAndReturn<T extends EpisodeUpdateManyAndReturnArgs>(args: SelectSubset<T, EpisodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Episode.
     * @param {EpisodeUpsertArgs} args - Arguments to update or create a Episode.
     * @example
     * // Update or create a Episode
     * const episode = await prisma.episode.upsert({
     *   create: {
     *     // ... data to create a Episode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Episode we want to update
     *   }
     * })
     */
    upsert<T extends EpisodeUpsertArgs>(args: SelectSubset<T, EpisodeUpsertArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Episodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeCountArgs} args - Arguments to filter Episodes to count.
     * @example
     * // Count the number of Episodes
     * const count = await prisma.episode.count({
     *   where: {
     *     // ... the filter for the Episodes we want to count
     *   }
     * })
    **/
    count<T extends EpisodeCountArgs>(
      args?: Subset<T, EpisodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EpisodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Episode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EpisodeAggregateArgs>(args: Subset<T, EpisodeAggregateArgs>): Prisma.PrismaPromise<GetEpisodeAggregateType<T>>

    /**
     * Group by Episode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeGroupByArgs} args - Group by arguments.
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
      T extends EpisodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EpisodeGroupByArgs['orderBy'] }
        : { orderBy?: EpisodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EpisodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEpisodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Episode model
   */
  readonly fields: EpisodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Episode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EpisodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    show<T extends ShowDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShowDefaultArgs<ExtArgs>>): Prisma__ShowClient<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    watched<T extends Episode$watchedArgs<ExtArgs> = {}>(args?: Subset<T, Episode$watchedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Episode model
   */
  interface EpisodeFieldRefs {
    readonly id: FieldRef<"Episode", 'Int'>
    readonly showId: FieldRef<"Episode", 'Int'>
    readonly title: FieldRef<"Episode", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Episode findUnique
   */
  export type EpisodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episode to fetch.
     */
    where: EpisodeWhereUniqueInput
  }

  /**
   * Episode findUniqueOrThrow
   */
  export type EpisodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episode to fetch.
     */
    where: EpisodeWhereUniqueInput
  }

  /**
   * Episode findFirst
   */
  export type EpisodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episode to fetch.
     */
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Episodes.
     */
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Episodes.
     */
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }

  /**
   * Episode findFirstOrThrow
   */
  export type EpisodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episode to fetch.
     */
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Episodes.
     */
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Episodes.
     */
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }

  /**
   * Episode findMany
   */
  export type EpisodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episodes to fetch.
     */
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Episodes.
     */
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }

  /**
   * Episode create
   */
  export type EpisodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * The data needed to create a Episode.
     */
    data: XOR<EpisodeCreateInput, EpisodeUncheckedCreateInput>
  }

  /**
   * Episode createMany
   */
  export type EpisodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Episodes.
     */
    data: EpisodeCreateManyInput | EpisodeCreateManyInput[]
  }

  /**
   * Episode createManyAndReturn
   */
  export type EpisodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * The data used to create many Episodes.
     */
    data: EpisodeCreateManyInput | EpisodeCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Episode update
   */
  export type EpisodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * The data needed to update a Episode.
     */
    data: XOR<EpisodeUpdateInput, EpisodeUncheckedUpdateInput>
    /**
     * Choose, which Episode to update.
     */
    where: EpisodeWhereUniqueInput
  }

  /**
   * Episode updateMany
   */
  export type EpisodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Episodes.
     */
    data: XOR<EpisodeUpdateManyMutationInput, EpisodeUncheckedUpdateManyInput>
    /**
     * Filter which Episodes to update
     */
    where?: EpisodeWhereInput
    /**
     * Limit how many Episodes to update.
     */
    limit?: number
  }

  /**
   * Episode updateManyAndReturn
   */
  export type EpisodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * The data used to update Episodes.
     */
    data: XOR<EpisodeUpdateManyMutationInput, EpisodeUncheckedUpdateManyInput>
    /**
     * Filter which Episodes to update
     */
    where?: EpisodeWhereInput
    /**
     * Limit how many Episodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Episode upsert
   */
  export type EpisodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * The filter to search for the Episode to update in case it exists.
     */
    where: EpisodeWhereUniqueInput
    /**
     * In case the Episode found by the `where` argument doesn't exist, create a new Episode with this data.
     */
    create: XOR<EpisodeCreateInput, EpisodeUncheckedCreateInput>
    /**
     * In case the Episode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EpisodeUpdateInput, EpisodeUncheckedUpdateInput>
  }

  /**
   * Episode delete
   */
  export type EpisodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter which Episode to delete.
     */
    where: EpisodeWhereUniqueInput
  }

  /**
   * Episode deleteMany
   */
  export type EpisodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Episodes to delete
     */
    where?: EpisodeWhereInput
    /**
     * Limit how many Episodes to delete.
     */
    limit?: number
  }

  /**
   * Episode.watched
   */
  export type Episode$watchedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watched
     */
    select?: WatchedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watched
     */
    omit?: WatchedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchedInclude<ExtArgs> | null
    where?: WatchedWhereInput
    orderBy?: WatchedOrderByWithRelationInput | WatchedOrderByWithRelationInput[]
    cursor?: WatchedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WatchedScalarFieldEnum | WatchedScalarFieldEnum[]
  }

  /**
   * Episode without action
   */
  export type EpisodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
  }


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
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
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
    id: number
    username: string
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
    username?: boolean
    watched?: boolean | User$watchedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    watched?: boolean | User$watchedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      watched: Prisma.$WatchedPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
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
    watched<T extends User$watchedArgs<ExtArgs> = {}>(args?: Subset<T, User$watchedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
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
   * User.watched
   */
  export type User$watchedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watched
     */
    select?: WatchedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watched
     */
    omit?: WatchedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchedInclude<ExtArgs> | null
    where?: WatchedWhereInput
    orderBy?: WatchedOrderByWithRelationInput | WatchedOrderByWithRelationInput[]
    cursor?: WatchedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WatchedScalarFieldEnum | WatchedScalarFieldEnum[]
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
   * Model Watched
   */

  export type AggregateWatched = {
    _count: WatchedCountAggregateOutputType | null
    _avg: WatchedAvgAggregateOutputType | null
    _sum: WatchedSumAggregateOutputType | null
    _min: WatchedMinAggregateOutputType | null
    _max: WatchedMaxAggregateOutputType | null
  }

  export type WatchedAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    showId: number | null
    episodeId: number | null
  }

  export type WatchedSumAggregateOutputType = {
    id: number | null
    userId: number | null
    showId: number | null
    episodeId: number | null
  }

  export type WatchedMinAggregateOutputType = {
    id: number | null
    userId: number | null
    showId: number | null
    episodeId: number | null
  }

  export type WatchedMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    showId: number | null
    episodeId: number | null
  }

  export type WatchedCountAggregateOutputType = {
    id: number
    userId: number
    showId: number
    episodeId: number
    _all: number
  }


  export type WatchedAvgAggregateInputType = {
    id?: true
    userId?: true
    showId?: true
    episodeId?: true
  }

  export type WatchedSumAggregateInputType = {
    id?: true
    userId?: true
    showId?: true
    episodeId?: true
  }

  export type WatchedMinAggregateInputType = {
    id?: true
    userId?: true
    showId?: true
    episodeId?: true
  }

  export type WatchedMaxAggregateInputType = {
    id?: true
    userId?: true
    showId?: true
    episodeId?: true
  }

  export type WatchedCountAggregateInputType = {
    id?: true
    userId?: true
    showId?: true
    episodeId?: true
    _all?: true
  }

  export type WatchedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Watched to aggregate.
     */
    where?: WatchedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watcheds to fetch.
     */
    orderBy?: WatchedOrderByWithRelationInput | WatchedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WatchedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watcheds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watcheds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Watcheds
    **/
    _count?: true | WatchedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WatchedAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WatchedSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WatchedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WatchedMaxAggregateInputType
  }

  export type GetWatchedAggregateType<T extends WatchedAggregateArgs> = {
        [P in keyof T & keyof AggregateWatched]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWatched[P]>
      : GetScalarType<T[P], AggregateWatched[P]>
  }




  export type WatchedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchedWhereInput
    orderBy?: WatchedOrderByWithAggregationInput | WatchedOrderByWithAggregationInput[]
    by: WatchedScalarFieldEnum[] | WatchedScalarFieldEnum
    having?: WatchedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WatchedCountAggregateInputType | true
    _avg?: WatchedAvgAggregateInputType
    _sum?: WatchedSumAggregateInputType
    _min?: WatchedMinAggregateInputType
    _max?: WatchedMaxAggregateInputType
  }

  export type WatchedGroupByOutputType = {
    id: number
    userId: number
    showId: number
    episodeId: number
    _count: WatchedCountAggregateOutputType | null
    _avg: WatchedAvgAggregateOutputType | null
    _sum: WatchedSumAggregateOutputType | null
    _min: WatchedMinAggregateOutputType | null
    _max: WatchedMaxAggregateOutputType | null
  }

  type GetWatchedGroupByPayload<T extends WatchedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WatchedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WatchedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WatchedGroupByOutputType[P]>
            : GetScalarType<T[P], WatchedGroupByOutputType[P]>
        }
      >
    >


  export type WatchedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    showId?: boolean
    episodeId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    show?: boolean | ShowDefaultArgs<ExtArgs>
    episode?: boolean | EpisodeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watched"]>

  export type WatchedSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    showId?: boolean
    episodeId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    show?: boolean | ShowDefaultArgs<ExtArgs>
    episode?: boolean | EpisodeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watched"]>

  export type WatchedSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    showId?: boolean
    episodeId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    show?: boolean | ShowDefaultArgs<ExtArgs>
    episode?: boolean | EpisodeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watched"]>

  export type WatchedSelectScalar = {
    id?: boolean
    userId?: boolean
    showId?: boolean
    episodeId?: boolean
  }

  export type WatchedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "showId" | "episodeId", ExtArgs["result"]["watched"]>
  export type WatchedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    show?: boolean | ShowDefaultArgs<ExtArgs>
    episode?: boolean | EpisodeDefaultArgs<ExtArgs>
  }
  export type WatchedIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    show?: boolean | ShowDefaultArgs<ExtArgs>
    episode?: boolean | EpisodeDefaultArgs<ExtArgs>
  }
  export type WatchedIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    show?: boolean | ShowDefaultArgs<ExtArgs>
    episode?: boolean | EpisodeDefaultArgs<ExtArgs>
  }

  export type $WatchedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Watched"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      show: Prisma.$ShowPayload<ExtArgs>
      episode: Prisma.$EpisodePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      showId: number
      episodeId: number
    }, ExtArgs["result"]["watched"]>
    composites: {}
  }

  type WatchedGetPayload<S extends boolean | null | undefined | WatchedDefaultArgs> = $Result.GetResult<Prisma.$WatchedPayload, S>

  type WatchedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WatchedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WatchedCountAggregateInputType | true
    }

  export interface WatchedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Watched'], meta: { name: 'Watched' } }
    /**
     * Find zero or one Watched that matches the filter.
     * @param {WatchedFindUniqueArgs} args - Arguments to find a Watched
     * @example
     * // Get one Watched
     * const watched = await prisma.watched.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WatchedFindUniqueArgs>(args: SelectSubset<T, WatchedFindUniqueArgs<ExtArgs>>): Prisma__WatchedClient<$Result.GetResult<Prisma.$WatchedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Watched that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WatchedFindUniqueOrThrowArgs} args - Arguments to find a Watched
     * @example
     * // Get one Watched
     * const watched = await prisma.watched.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WatchedFindUniqueOrThrowArgs>(args: SelectSubset<T, WatchedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WatchedClient<$Result.GetResult<Prisma.$WatchedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Watched that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchedFindFirstArgs} args - Arguments to find a Watched
     * @example
     * // Get one Watched
     * const watched = await prisma.watched.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WatchedFindFirstArgs>(args?: SelectSubset<T, WatchedFindFirstArgs<ExtArgs>>): Prisma__WatchedClient<$Result.GetResult<Prisma.$WatchedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Watched that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchedFindFirstOrThrowArgs} args - Arguments to find a Watched
     * @example
     * // Get one Watched
     * const watched = await prisma.watched.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WatchedFindFirstOrThrowArgs>(args?: SelectSubset<T, WatchedFindFirstOrThrowArgs<ExtArgs>>): Prisma__WatchedClient<$Result.GetResult<Prisma.$WatchedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Watcheds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Watcheds
     * const watcheds = await prisma.watched.findMany()
     * 
     * // Get first 10 Watcheds
     * const watcheds = await prisma.watched.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const watchedWithIdOnly = await prisma.watched.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WatchedFindManyArgs>(args?: SelectSubset<T, WatchedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Watched.
     * @param {WatchedCreateArgs} args - Arguments to create a Watched.
     * @example
     * // Create one Watched
     * const Watched = await prisma.watched.create({
     *   data: {
     *     // ... data to create a Watched
     *   }
     * })
     * 
     */
    create<T extends WatchedCreateArgs>(args: SelectSubset<T, WatchedCreateArgs<ExtArgs>>): Prisma__WatchedClient<$Result.GetResult<Prisma.$WatchedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Watcheds.
     * @param {WatchedCreateManyArgs} args - Arguments to create many Watcheds.
     * @example
     * // Create many Watcheds
     * const watched = await prisma.watched.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WatchedCreateManyArgs>(args?: SelectSubset<T, WatchedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Watcheds and returns the data saved in the database.
     * @param {WatchedCreateManyAndReturnArgs} args - Arguments to create many Watcheds.
     * @example
     * // Create many Watcheds
     * const watched = await prisma.watched.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Watcheds and only return the `id`
     * const watchedWithIdOnly = await prisma.watched.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WatchedCreateManyAndReturnArgs>(args?: SelectSubset<T, WatchedCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchedPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Watched.
     * @param {WatchedDeleteArgs} args - Arguments to delete one Watched.
     * @example
     * // Delete one Watched
     * const Watched = await prisma.watched.delete({
     *   where: {
     *     // ... filter to delete one Watched
     *   }
     * })
     * 
     */
    delete<T extends WatchedDeleteArgs>(args: SelectSubset<T, WatchedDeleteArgs<ExtArgs>>): Prisma__WatchedClient<$Result.GetResult<Prisma.$WatchedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Watched.
     * @param {WatchedUpdateArgs} args - Arguments to update one Watched.
     * @example
     * // Update one Watched
     * const watched = await prisma.watched.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WatchedUpdateArgs>(args: SelectSubset<T, WatchedUpdateArgs<ExtArgs>>): Prisma__WatchedClient<$Result.GetResult<Prisma.$WatchedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Watcheds.
     * @param {WatchedDeleteManyArgs} args - Arguments to filter Watcheds to delete.
     * @example
     * // Delete a few Watcheds
     * const { count } = await prisma.watched.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WatchedDeleteManyArgs>(args?: SelectSubset<T, WatchedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Watcheds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Watcheds
     * const watched = await prisma.watched.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WatchedUpdateManyArgs>(args: SelectSubset<T, WatchedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Watcheds and returns the data updated in the database.
     * @param {WatchedUpdateManyAndReturnArgs} args - Arguments to update many Watcheds.
     * @example
     * // Update many Watcheds
     * const watched = await prisma.watched.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Watcheds and only return the `id`
     * const watchedWithIdOnly = await prisma.watched.updateManyAndReturn({
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
    updateManyAndReturn<T extends WatchedUpdateManyAndReturnArgs>(args: SelectSubset<T, WatchedUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchedPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Watched.
     * @param {WatchedUpsertArgs} args - Arguments to update or create a Watched.
     * @example
     * // Update or create a Watched
     * const watched = await prisma.watched.upsert({
     *   create: {
     *     // ... data to create a Watched
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Watched we want to update
     *   }
     * })
     */
    upsert<T extends WatchedUpsertArgs>(args: SelectSubset<T, WatchedUpsertArgs<ExtArgs>>): Prisma__WatchedClient<$Result.GetResult<Prisma.$WatchedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Watcheds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchedCountArgs} args - Arguments to filter Watcheds to count.
     * @example
     * // Count the number of Watcheds
     * const count = await prisma.watched.count({
     *   where: {
     *     // ... the filter for the Watcheds we want to count
     *   }
     * })
    **/
    count<T extends WatchedCountArgs>(
      args?: Subset<T, WatchedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WatchedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Watched.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WatchedAggregateArgs>(args: Subset<T, WatchedAggregateArgs>): Prisma.PrismaPromise<GetWatchedAggregateType<T>>

    /**
     * Group by Watched.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchedGroupByArgs} args - Group by arguments.
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
      T extends WatchedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WatchedGroupByArgs['orderBy'] }
        : { orderBy?: WatchedGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WatchedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWatchedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Watched model
   */
  readonly fields: WatchedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Watched.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WatchedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    show<T extends ShowDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShowDefaultArgs<ExtArgs>>): Prisma__ShowClient<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    episode<T extends EpisodeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EpisodeDefaultArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Watched model
   */
  interface WatchedFieldRefs {
    readonly id: FieldRef<"Watched", 'Int'>
    readonly userId: FieldRef<"Watched", 'Int'>
    readonly showId: FieldRef<"Watched", 'Int'>
    readonly episodeId: FieldRef<"Watched", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Watched findUnique
   */
  export type WatchedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watched
     */
    select?: WatchedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watched
     */
    omit?: WatchedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchedInclude<ExtArgs> | null
    /**
     * Filter, which Watched to fetch.
     */
    where: WatchedWhereUniqueInput
  }

  /**
   * Watched findUniqueOrThrow
   */
  export type WatchedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watched
     */
    select?: WatchedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watched
     */
    omit?: WatchedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchedInclude<ExtArgs> | null
    /**
     * Filter, which Watched to fetch.
     */
    where: WatchedWhereUniqueInput
  }

  /**
   * Watched findFirst
   */
  export type WatchedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watched
     */
    select?: WatchedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watched
     */
    omit?: WatchedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchedInclude<ExtArgs> | null
    /**
     * Filter, which Watched to fetch.
     */
    where?: WatchedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watcheds to fetch.
     */
    orderBy?: WatchedOrderByWithRelationInput | WatchedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Watcheds.
     */
    cursor?: WatchedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watcheds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watcheds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Watcheds.
     */
    distinct?: WatchedScalarFieldEnum | WatchedScalarFieldEnum[]
  }

  /**
   * Watched findFirstOrThrow
   */
  export type WatchedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watched
     */
    select?: WatchedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watched
     */
    omit?: WatchedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchedInclude<ExtArgs> | null
    /**
     * Filter, which Watched to fetch.
     */
    where?: WatchedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watcheds to fetch.
     */
    orderBy?: WatchedOrderByWithRelationInput | WatchedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Watcheds.
     */
    cursor?: WatchedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watcheds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watcheds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Watcheds.
     */
    distinct?: WatchedScalarFieldEnum | WatchedScalarFieldEnum[]
  }

  /**
   * Watched findMany
   */
  export type WatchedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watched
     */
    select?: WatchedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watched
     */
    omit?: WatchedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchedInclude<ExtArgs> | null
    /**
     * Filter, which Watcheds to fetch.
     */
    where?: WatchedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watcheds to fetch.
     */
    orderBy?: WatchedOrderByWithRelationInput | WatchedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Watcheds.
     */
    cursor?: WatchedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watcheds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watcheds.
     */
    skip?: number
    distinct?: WatchedScalarFieldEnum | WatchedScalarFieldEnum[]
  }

  /**
   * Watched create
   */
  export type WatchedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watched
     */
    select?: WatchedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watched
     */
    omit?: WatchedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchedInclude<ExtArgs> | null
    /**
     * The data needed to create a Watched.
     */
    data: XOR<WatchedCreateInput, WatchedUncheckedCreateInput>
  }

  /**
   * Watched createMany
   */
  export type WatchedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Watcheds.
     */
    data: WatchedCreateManyInput | WatchedCreateManyInput[]
  }

  /**
   * Watched createManyAndReturn
   */
  export type WatchedCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watched
     */
    select?: WatchedSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Watched
     */
    omit?: WatchedOmit<ExtArgs> | null
    /**
     * The data used to create many Watcheds.
     */
    data: WatchedCreateManyInput | WatchedCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchedIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Watched update
   */
  export type WatchedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watched
     */
    select?: WatchedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watched
     */
    omit?: WatchedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchedInclude<ExtArgs> | null
    /**
     * The data needed to update a Watched.
     */
    data: XOR<WatchedUpdateInput, WatchedUncheckedUpdateInput>
    /**
     * Choose, which Watched to update.
     */
    where: WatchedWhereUniqueInput
  }

  /**
   * Watched updateMany
   */
  export type WatchedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Watcheds.
     */
    data: XOR<WatchedUpdateManyMutationInput, WatchedUncheckedUpdateManyInput>
    /**
     * Filter which Watcheds to update
     */
    where?: WatchedWhereInput
    /**
     * Limit how many Watcheds to update.
     */
    limit?: number
  }

  /**
   * Watched updateManyAndReturn
   */
  export type WatchedUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watched
     */
    select?: WatchedSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Watched
     */
    omit?: WatchedOmit<ExtArgs> | null
    /**
     * The data used to update Watcheds.
     */
    data: XOR<WatchedUpdateManyMutationInput, WatchedUncheckedUpdateManyInput>
    /**
     * Filter which Watcheds to update
     */
    where?: WatchedWhereInput
    /**
     * Limit how many Watcheds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchedIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Watched upsert
   */
  export type WatchedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watched
     */
    select?: WatchedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watched
     */
    omit?: WatchedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchedInclude<ExtArgs> | null
    /**
     * The filter to search for the Watched to update in case it exists.
     */
    where: WatchedWhereUniqueInput
    /**
     * In case the Watched found by the `where` argument doesn't exist, create a new Watched with this data.
     */
    create: XOR<WatchedCreateInput, WatchedUncheckedCreateInput>
    /**
     * In case the Watched was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WatchedUpdateInput, WatchedUncheckedUpdateInput>
  }

  /**
   * Watched delete
   */
  export type WatchedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watched
     */
    select?: WatchedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watched
     */
    omit?: WatchedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchedInclude<ExtArgs> | null
    /**
     * Filter which Watched to delete.
     */
    where: WatchedWhereUniqueInput
  }

  /**
   * Watched deleteMany
   */
  export type WatchedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Watcheds to delete
     */
    where?: WatchedWhereInput
    /**
     * Limit how many Watcheds to delete.
     */
    limit?: number
  }

  /**
   * Watched without action
   */
  export type WatchedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watched
     */
    select?: WatchedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watched
     */
    omit?: WatchedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchedInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ShowScalarFieldEnum: {
    id: 'id',
    title: 'title'
  };

  export type ShowScalarFieldEnum = (typeof ShowScalarFieldEnum)[keyof typeof ShowScalarFieldEnum]


  export const EpisodeScalarFieldEnum: {
    id: 'id',
    showId: 'showId',
    title: 'title'
  };

  export type EpisodeScalarFieldEnum = (typeof EpisodeScalarFieldEnum)[keyof typeof EpisodeScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WatchedScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    showId: 'showId',
    episodeId: 'episodeId'
  };

  export type WatchedScalarFieldEnum = (typeof WatchedScalarFieldEnum)[keyof typeof WatchedScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ShowWhereInput = {
    AND?: ShowWhereInput | ShowWhereInput[]
    OR?: ShowWhereInput[]
    NOT?: ShowWhereInput | ShowWhereInput[]
    id?: IntFilter<"Show"> | number
    title?: StringFilter<"Show"> | string
    episodes?: EpisodeListRelationFilter
    watched?: WatchedListRelationFilter
  }

  export type ShowOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    episodes?: EpisodeOrderByRelationAggregateInput
    watched?: WatchedOrderByRelationAggregateInput
  }

  export type ShowWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ShowWhereInput | ShowWhereInput[]
    OR?: ShowWhereInput[]
    NOT?: ShowWhereInput | ShowWhereInput[]
    title?: StringFilter<"Show"> | string
    episodes?: EpisodeListRelationFilter
    watched?: WatchedListRelationFilter
  }, "id">

  export type ShowOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    _count?: ShowCountOrderByAggregateInput
    _avg?: ShowAvgOrderByAggregateInput
    _max?: ShowMaxOrderByAggregateInput
    _min?: ShowMinOrderByAggregateInput
    _sum?: ShowSumOrderByAggregateInput
  }

  export type ShowScalarWhereWithAggregatesInput = {
    AND?: ShowScalarWhereWithAggregatesInput | ShowScalarWhereWithAggregatesInput[]
    OR?: ShowScalarWhereWithAggregatesInput[]
    NOT?: ShowScalarWhereWithAggregatesInput | ShowScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Show"> | number
    title?: StringWithAggregatesFilter<"Show"> | string
  }

  export type EpisodeWhereInput = {
    AND?: EpisodeWhereInput | EpisodeWhereInput[]
    OR?: EpisodeWhereInput[]
    NOT?: EpisodeWhereInput | EpisodeWhereInput[]
    id?: IntFilter<"Episode"> | number
    showId?: IntFilter<"Episode"> | number
    title?: StringFilter<"Episode"> | string
    show?: XOR<ShowScalarRelationFilter, ShowWhereInput>
    watched?: WatchedListRelationFilter
  }

  export type EpisodeOrderByWithRelationInput = {
    id?: SortOrder
    showId?: SortOrder
    title?: SortOrder
    show?: ShowOrderByWithRelationInput
    watched?: WatchedOrderByRelationAggregateInput
  }

  export type EpisodeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EpisodeWhereInput | EpisodeWhereInput[]
    OR?: EpisodeWhereInput[]
    NOT?: EpisodeWhereInput | EpisodeWhereInput[]
    showId?: IntFilter<"Episode"> | number
    title?: StringFilter<"Episode"> | string
    show?: XOR<ShowScalarRelationFilter, ShowWhereInput>
    watched?: WatchedListRelationFilter
  }, "id">

  export type EpisodeOrderByWithAggregationInput = {
    id?: SortOrder
    showId?: SortOrder
    title?: SortOrder
    _count?: EpisodeCountOrderByAggregateInput
    _avg?: EpisodeAvgOrderByAggregateInput
    _max?: EpisodeMaxOrderByAggregateInput
    _min?: EpisodeMinOrderByAggregateInput
    _sum?: EpisodeSumOrderByAggregateInput
  }

  export type EpisodeScalarWhereWithAggregatesInput = {
    AND?: EpisodeScalarWhereWithAggregatesInput | EpisodeScalarWhereWithAggregatesInput[]
    OR?: EpisodeScalarWhereWithAggregatesInput[]
    NOT?: EpisodeScalarWhereWithAggregatesInput | EpisodeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Episode"> | number
    showId?: IntWithAggregatesFilter<"Episode"> | number
    title?: StringWithAggregatesFilter<"Episode"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    watched?: WatchedListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    watched?: WatchedOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    watched?: WatchedListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
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
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
  }

  export type WatchedWhereInput = {
    AND?: WatchedWhereInput | WatchedWhereInput[]
    OR?: WatchedWhereInput[]
    NOT?: WatchedWhereInput | WatchedWhereInput[]
    id?: IntFilter<"Watched"> | number
    userId?: IntFilter<"Watched"> | number
    showId?: IntFilter<"Watched"> | number
    episodeId?: IntFilter<"Watched"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    show?: XOR<ShowScalarRelationFilter, ShowWhereInput>
    episode?: XOR<EpisodeScalarRelationFilter, EpisodeWhereInput>
  }

  export type WatchedOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    showId?: SortOrder
    episodeId?: SortOrder
    user?: UserOrderByWithRelationInput
    show?: ShowOrderByWithRelationInput
    episode?: EpisodeOrderByWithRelationInput
  }

  export type WatchedWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_episodeId?: WatchedUserIdEpisodeIdCompoundUniqueInput
    AND?: WatchedWhereInput | WatchedWhereInput[]
    OR?: WatchedWhereInput[]
    NOT?: WatchedWhereInput | WatchedWhereInput[]
    userId?: IntFilter<"Watched"> | number
    showId?: IntFilter<"Watched"> | number
    episodeId?: IntFilter<"Watched"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    show?: XOR<ShowScalarRelationFilter, ShowWhereInput>
    episode?: XOR<EpisodeScalarRelationFilter, EpisodeWhereInput>
  }, "id" | "userId_episodeId">

  export type WatchedOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    showId?: SortOrder
    episodeId?: SortOrder
    _count?: WatchedCountOrderByAggregateInput
    _avg?: WatchedAvgOrderByAggregateInput
    _max?: WatchedMaxOrderByAggregateInput
    _min?: WatchedMinOrderByAggregateInput
    _sum?: WatchedSumOrderByAggregateInput
  }

  export type WatchedScalarWhereWithAggregatesInput = {
    AND?: WatchedScalarWhereWithAggregatesInput | WatchedScalarWhereWithAggregatesInput[]
    OR?: WatchedScalarWhereWithAggregatesInput[]
    NOT?: WatchedScalarWhereWithAggregatesInput | WatchedScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Watched"> | number
    userId?: IntWithAggregatesFilter<"Watched"> | number
    showId?: IntWithAggregatesFilter<"Watched"> | number
    episodeId?: IntWithAggregatesFilter<"Watched"> | number
  }

  export type ShowCreateInput = {
    title: string
    episodes?: EpisodeCreateNestedManyWithoutShowInput
    watched?: WatchedCreateNestedManyWithoutShowInput
  }

  export type ShowUncheckedCreateInput = {
    id?: number
    title: string
    episodes?: EpisodeUncheckedCreateNestedManyWithoutShowInput
    watched?: WatchedUncheckedCreateNestedManyWithoutShowInput
  }

  export type ShowUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    episodes?: EpisodeUpdateManyWithoutShowNestedInput
    watched?: WatchedUpdateManyWithoutShowNestedInput
  }

  export type ShowUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    episodes?: EpisodeUncheckedUpdateManyWithoutShowNestedInput
    watched?: WatchedUncheckedUpdateManyWithoutShowNestedInput
  }

  export type ShowCreateManyInput = {
    id?: number
    title: string
  }

  export type ShowUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
  }

  export type ShowUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type EpisodeCreateInput = {
    title: string
    show: ShowCreateNestedOneWithoutEpisodesInput
    watched?: WatchedCreateNestedManyWithoutEpisodeInput
  }

  export type EpisodeUncheckedCreateInput = {
    id?: number
    showId: number
    title: string
    watched?: WatchedUncheckedCreateNestedManyWithoutEpisodeInput
  }

  export type EpisodeUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    show?: ShowUpdateOneRequiredWithoutEpisodesNestedInput
    watched?: WatchedUpdateManyWithoutEpisodeNestedInput
  }

  export type EpisodeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    showId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    watched?: WatchedUncheckedUpdateManyWithoutEpisodeNestedInput
  }

  export type EpisodeCreateManyInput = {
    id?: number
    showId: number
    title: string
  }

  export type EpisodeUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
  }

  export type EpisodeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    showId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    username: string
    watched?: WatchedCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    watched?: WatchedUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    watched?: WatchedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    watched?: WatchedUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
  }

  export type WatchedCreateInput = {
    user: UserCreateNestedOneWithoutWatchedInput
    show: ShowCreateNestedOneWithoutWatchedInput
    episode: EpisodeCreateNestedOneWithoutWatchedInput
  }

  export type WatchedUncheckedCreateInput = {
    id?: number
    userId: number
    showId: number
    episodeId: number
  }

  export type WatchedUpdateInput = {
    user?: UserUpdateOneRequiredWithoutWatchedNestedInput
    show?: ShowUpdateOneRequiredWithoutWatchedNestedInput
    episode?: EpisodeUpdateOneRequiredWithoutWatchedNestedInput
  }

  export type WatchedUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    showId?: IntFieldUpdateOperationsInput | number
    episodeId?: IntFieldUpdateOperationsInput | number
  }

  export type WatchedCreateManyInput = {
    id?: number
    userId: number
    showId: number
    episodeId: number
  }

  export type WatchedUpdateManyMutationInput = {

  }

  export type WatchedUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    showId?: IntFieldUpdateOperationsInput | number
    episodeId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EpisodeListRelationFilter = {
    every?: EpisodeWhereInput
    some?: EpisodeWhereInput
    none?: EpisodeWhereInput
  }

  export type WatchedListRelationFilter = {
    every?: WatchedWhereInput
    some?: WatchedWhereInput
    none?: WatchedWhereInput
  }

  export type EpisodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WatchedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShowCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type ShowAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ShowMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type ShowMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type ShowSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type ShowScalarRelationFilter = {
    is?: ShowWhereInput
    isNot?: ShowWhereInput
  }

  export type EpisodeCountOrderByAggregateInput = {
    id?: SortOrder
    showId?: SortOrder
    title?: SortOrder
  }

  export type EpisodeAvgOrderByAggregateInput = {
    id?: SortOrder
    showId?: SortOrder
  }

  export type EpisodeMaxOrderByAggregateInput = {
    id?: SortOrder
    showId?: SortOrder
    title?: SortOrder
  }

  export type EpisodeMinOrderByAggregateInput = {
    id?: SortOrder
    showId?: SortOrder
    title?: SortOrder
  }

  export type EpisodeSumOrderByAggregateInput = {
    id?: SortOrder
    showId?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type EpisodeScalarRelationFilter = {
    is?: EpisodeWhereInput
    isNot?: EpisodeWhereInput
  }

  export type WatchedUserIdEpisodeIdCompoundUniqueInput = {
    userId: number
    episodeId: number
  }

  export type WatchedCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    showId?: SortOrder
    episodeId?: SortOrder
  }

  export type WatchedAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    showId?: SortOrder
    episodeId?: SortOrder
  }

  export type WatchedMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    showId?: SortOrder
    episodeId?: SortOrder
  }

  export type WatchedMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    showId?: SortOrder
    episodeId?: SortOrder
  }

  export type WatchedSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    showId?: SortOrder
    episodeId?: SortOrder
  }

  export type EpisodeCreateNestedManyWithoutShowInput = {
    create?: XOR<EpisodeCreateWithoutShowInput, EpisodeUncheckedCreateWithoutShowInput> | EpisodeCreateWithoutShowInput[] | EpisodeUncheckedCreateWithoutShowInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutShowInput | EpisodeCreateOrConnectWithoutShowInput[]
    createMany?: EpisodeCreateManyShowInputEnvelope
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
  }

  export type WatchedCreateNestedManyWithoutShowInput = {
    create?: XOR<WatchedCreateWithoutShowInput, WatchedUncheckedCreateWithoutShowInput> | WatchedCreateWithoutShowInput[] | WatchedUncheckedCreateWithoutShowInput[]
    connectOrCreate?: WatchedCreateOrConnectWithoutShowInput | WatchedCreateOrConnectWithoutShowInput[]
    createMany?: WatchedCreateManyShowInputEnvelope
    connect?: WatchedWhereUniqueInput | WatchedWhereUniqueInput[]
  }

  export type EpisodeUncheckedCreateNestedManyWithoutShowInput = {
    create?: XOR<EpisodeCreateWithoutShowInput, EpisodeUncheckedCreateWithoutShowInput> | EpisodeCreateWithoutShowInput[] | EpisodeUncheckedCreateWithoutShowInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutShowInput | EpisodeCreateOrConnectWithoutShowInput[]
    createMany?: EpisodeCreateManyShowInputEnvelope
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
  }

  export type WatchedUncheckedCreateNestedManyWithoutShowInput = {
    create?: XOR<WatchedCreateWithoutShowInput, WatchedUncheckedCreateWithoutShowInput> | WatchedCreateWithoutShowInput[] | WatchedUncheckedCreateWithoutShowInput[]
    connectOrCreate?: WatchedCreateOrConnectWithoutShowInput | WatchedCreateOrConnectWithoutShowInput[]
    createMany?: WatchedCreateManyShowInputEnvelope
    connect?: WatchedWhereUniqueInput | WatchedWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EpisodeUpdateManyWithoutShowNestedInput = {
    create?: XOR<EpisodeCreateWithoutShowInput, EpisodeUncheckedCreateWithoutShowInput> | EpisodeCreateWithoutShowInput[] | EpisodeUncheckedCreateWithoutShowInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutShowInput | EpisodeCreateOrConnectWithoutShowInput[]
    upsert?: EpisodeUpsertWithWhereUniqueWithoutShowInput | EpisodeUpsertWithWhereUniqueWithoutShowInput[]
    createMany?: EpisodeCreateManyShowInputEnvelope
    set?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    disconnect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    delete?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    update?: EpisodeUpdateWithWhereUniqueWithoutShowInput | EpisodeUpdateWithWhereUniqueWithoutShowInput[]
    updateMany?: EpisodeUpdateManyWithWhereWithoutShowInput | EpisodeUpdateManyWithWhereWithoutShowInput[]
    deleteMany?: EpisodeScalarWhereInput | EpisodeScalarWhereInput[]
  }

  export type WatchedUpdateManyWithoutShowNestedInput = {
    create?: XOR<WatchedCreateWithoutShowInput, WatchedUncheckedCreateWithoutShowInput> | WatchedCreateWithoutShowInput[] | WatchedUncheckedCreateWithoutShowInput[]
    connectOrCreate?: WatchedCreateOrConnectWithoutShowInput | WatchedCreateOrConnectWithoutShowInput[]
    upsert?: WatchedUpsertWithWhereUniqueWithoutShowInput | WatchedUpsertWithWhereUniqueWithoutShowInput[]
    createMany?: WatchedCreateManyShowInputEnvelope
    set?: WatchedWhereUniqueInput | WatchedWhereUniqueInput[]
    disconnect?: WatchedWhereUniqueInput | WatchedWhereUniqueInput[]
    delete?: WatchedWhereUniqueInput | WatchedWhereUniqueInput[]
    connect?: WatchedWhereUniqueInput | WatchedWhereUniqueInput[]
    update?: WatchedUpdateWithWhereUniqueWithoutShowInput | WatchedUpdateWithWhereUniqueWithoutShowInput[]
    updateMany?: WatchedUpdateManyWithWhereWithoutShowInput | WatchedUpdateManyWithWhereWithoutShowInput[]
    deleteMany?: WatchedScalarWhereInput | WatchedScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EpisodeUncheckedUpdateManyWithoutShowNestedInput = {
    create?: XOR<EpisodeCreateWithoutShowInput, EpisodeUncheckedCreateWithoutShowInput> | EpisodeCreateWithoutShowInput[] | EpisodeUncheckedCreateWithoutShowInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutShowInput | EpisodeCreateOrConnectWithoutShowInput[]
    upsert?: EpisodeUpsertWithWhereUniqueWithoutShowInput | EpisodeUpsertWithWhereUniqueWithoutShowInput[]
    createMany?: EpisodeCreateManyShowInputEnvelope
    set?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    disconnect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    delete?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    update?: EpisodeUpdateWithWhereUniqueWithoutShowInput | EpisodeUpdateWithWhereUniqueWithoutShowInput[]
    updateMany?: EpisodeUpdateManyWithWhereWithoutShowInput | EpisodeUpdateManyWithWhereWithoutShowInput[]
    deleteMany?: EpisodeScalarWhereInput | EpisodeScalarWhereInput[]
  }

  export type WatchedUncheckedUpdateManyWithoutShowNestedInput = {
    create?: XOR<WatchedCreateWithoutShowInput, WatchedUncheckedCreateWithoutShowInput> | WatchedCreateWithoutShowInput[] | WatchedUncheckedCreateWithoutShowInput[]
    connectOrCreate?: WatchedCreateOrConnectWithoutShowInput | WatchedCreateOrConnectWithoutShowInput[]
    upsert?: WatchedUpsertWithWhereUniqueWithoutShowInput | WatchedUpsertWithWhereUniqueWithoutShowInput[]
    createMany?: WatchedCreateManyShowInputEnvelope
    set?: WatchedWhereUniqueInput | WatchedWhereUniqueInput[]
    disconnect?: WatchedWhereUniqueInput | WatchedWhereUniqueInput[]
    delete?: WatchedWhereUniqueInput | WatchedWhereUniqueInput[]
    connect?: WatchedWhereUniqueInput | WatchedWhereUniqueInput[]
    update?: WatchedUpdateWithWhereUniqueWithoutShowInput | WatchedUpdateWithWhereUniqueWithoutShowInput[]
    updateMany?: WatchedUpdateManyWithWhereWithoutShowInput | WatchedUpdateManyWithWhereWithoutShowInput[]
    deleteMany?: WatchedScalarWhereInput | WatchedScalarWhereInput[]
  }

  export type ShowCreateNestedOneWithoutEpisodesInput = {
    create?: XOR<ShowCreateWithoutEpisodesInput, ShowUncheckedCreateWithoutEpisodesInput>
    connectOrCreate?: ShowCreateOrConnectWithoutEpisodesInput
    connect?: ShowWhereUniqueInput
  }

  export type WatchedCreateNestedManyWithoutEpisodeInput = {
    create?: XOR<WatchedCreateWithoutEpisodeInput, WatchedUncheckedCreateWithoutEpisodeInput> | WatchedCreateWithoutEpisodeInput[] | WatchedUncheckedCreateWithoutEpisodeInput[]
    connectOrCreate?: WatchedCreateOrConnectWithoutEpisodeInput | WatchedCreateOrConnectWithoutEpisodeInput[]
    createMany?: WatchedCreateManyEpisodeInputEnvelope
    connect?: WatchedWhereUniqueInput | WatchedWhereUniqueInput[]
  }

  export type WatchedUncheckedCreateNestedManyWithoutEpisodeInput = {
    create?: XOR<WatchedCreateWithoutEpisodeInput, WatchedUncheckedCreateWithoutEpisodeInput> | WatchedCreateWithoutEpisodeInput[] | WatchedUncheckedCreateWithoutEpisodeInput[]
    connectOrCreate?: WatchedCreateOrConnectWithoutEpisodeInput | WatchedCreateOrConnectWithoutEpisodeInput[]
    createMany?: WatchedCreateManyEpisodeInputEnvelope
    connect?: WatchedWhereUniqueInput | WatchedWhereUniqueInput[]
  }

  export type ShowUpdateOneRequiredWithoutEpisodesNestedInput = {
    create?: XOR<ShowCreateWithoutEpisodesInput, ShowUncheckedCreateWithoutEpisodesInput>
    connectOrCreate?: ShowCreateOrConnectWithoutEpisodesInput
    upsert?: ShowUpsertWithoutEpisodesInput
    connect?: ShowWhereUniqueInput
    update?: XOR<XOR<ShowUpdateToOneWithWhereWithoutEpisodesInput, ShowUpdateWithoutEpisodesInput>, ShowUncheckedUpdateWithoutEpisodesInput>
  }

  export type WatchedUpdateManyWithoutEpisodeNestedInput = {
    create?: XOR<WatchedCreateWithoutEpisodeInput, WatchedUncheckedCreateWithoutEpisodeInput> | WatchedCreateWithoutEpisodeInput[] | WatchedUncheckedCreateWithoutEpisodeInput[]
    connectOrCreate?: WatchedCreateOrConnectWithoutEpisodeInput | WatchedCreateOrConnectWithoutEpisodeInput[]
    upsert?: WatchedUpsertWithWhereUniqueWithoutEpisodeInput | WatchedUpsertWithWhereUniqueWithoutEpisodeInput[]
    createMany?: WatchedCreateManyEpisodeInputEnvelope
    set?: WatchedWhereUniqueInput | WatchedWhereUniqueInput[]
    disconnect?: WatchedWhereUniqueInput | WatchedWhereUniqueInput[]
    delete?: WatchedWhereUniqueInput | WatchedWhereUniqueInput[]
    connect?: WatchedWhereUniqueInput | WatchedWhereUniqueInput[]
    update?: WatchedUpdateWithWhereUniqueWithoutEpisodeInput | WatchedUpdateWithWhereUniqueWithoutEpisodeInput[]
    updateMany?: WatchedUpdateManyWithWhereWithoutEpisodeInput | WatchedUpdateManyWithWhereWithoutEpisodeInput[]
    deleteMany?: WatchedScalarWhereInput | WatchedScalarWhereInput[]
  }

  export type WatchedUncheckedUpdateManyWithoutEpisodeNestedInput = {
    create?: XOR<WatchedCreateWithoutEpisodeInput, WatchedUncheckedCreateWithoutEpisodeInput> | WatchedCreateWithoutEpisodeInput[] | WatchedUncheckedCreateWithoutEpisodeInput[]
    connectOrCreate?: WatchedCreateOrConnectWithoutEpisodeInput | WatchedCreateOrConnectWithoutEpisodeInput[]
    upsert?: WatchedUpsertWithWhereUniqueWithoutEpisodeInput | WatchedUpsertWithWhereUniqueWithoutEpisodeInput[]
    createMany?: WatchedCreateManyEpisodeInputEnvelope
    set?: WatchedWhereUniqueInput | WatchedWhereUniqueInput[]
    disconnect?: WatchedWhereUniqueInput | WatchedWhereUniqueInput[]
    delete?: WatchedWhereUniqueInput | WatchedWhereUniqueInput[]
    connect?: WatchedWhereUniqueInput | WatchedWhereUniqueInput[]
    update?: WatchedUpdateWithWhereUniqueWithoutEpisodeInput | WatchedUpdateWithWhereUniqueWithoutEpisodeInput[]
    updateMany?: WatchedUpdateManyWithWhereWithoutEpisodeInput | WatchedUpdateManyWithWhereWithoutEpisodeInput[]
    deleteMany?: WatchedScalarWhereInput | WatchedScalarWhereInput[]
  }

  export type WatchedCreateNestedManyWithoutUserInput = {
    create?: XOR<WatchedCreateWithoutUserInput, WatchedUncheckedCreateWithoutUserInput> | WatchedCreateWithoutUserInput[] | WatchedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchedCreateOrConnectWithoutUserInput | WatchedCreateOrConnectWithoutUserInput[]
    createMany?: WatchedCreateManyUserInputEnvelope
    connect?: WatchedWhereUniqueInput | WatchedWhereUniqueInput[]
  }

  export type WatchedUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WatchedCreateWithoutUserInput, WatchedUncheckedCreateWithoutUserInput> | WatchedCreateWithoutUserInput[] | WatchedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchedCreateOrConnectWithoutUserInput | WatchedCreateOrConnectWithoutUserInput[]
    createMany?: WatchedCreateManyUserInputEnvelope
    connect?: WatchedWhereUniqueInput | WatchedWhereUniqueInput[]
  }

  export type WatchedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WatchedCreateWithoutUserInput, WatchedUncheckedCreateWithoutUserInput> | WatchedCreateWithoutUserInput[] | WatchedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchedCreateOrConnectWithoutUserInput | WatchedCreateOrConnectWithoutUserInput[]
    upsert?: WatchedUpsertWithWhereUniqueWithoutUserInput | WatchedUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WatchedCreateManyUserInputEnvelope
    set?: WatchedWhereUniqueInput | WatchedWhereUniqueInput[]
    disconnect?: WatchedWhereUniqueInput | WatchedWhereUniqueInput[]
    delete?: WatchedWhereUniqueInput | WatchedWhereUniqueInput[]
    connect?: WatchedWhereUniqueInput | WatchedWhereUniqueInput[]
    update?: WatchedUpdateWithWhereUniqueWithoutUserInput | WatchedUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WatchedUpdateManyWithWhereWithoutUserInput | WatchedUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WatchedScalarWhereInput | WatchedScalarWhereInput[]
  }

  export type WatchedUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WatchedCreateWithoutUserInput, WatchedUncheckedCreateWithoutUserInput> | WatchedCreateWithoutUserInput[] | WatchedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchedCreateOrConnectWithoutUserInput | WatchedCreateOrConnectWithoutUserInput[]
    upsert?: WatchedUpsertWithWhereUniqueWithoutUserInput | WatchedUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WatchedCreateManyUserInputEnvelope
    set?: WatchedWhereUniqueInput | WatchedWhereUniqueInput[]
    disconnect?: WatchedWhereUniqueInput | WatchedWhereUniqueInput[]
    delete?: WatchedWhereUniqueInput | WatchedWhereUniqueInput[]
    connect?: WatchedWhereUniqueInput | WatchedWhereUniqueInput[]
    update?: WatchedUpdateWithWhereUniqueWithoutUserInput | WatchedUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WatchedUpdateManyWithWhereWithoutUserInput | WatchedUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WatchedScalarWhereInput | WatchedScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWatchedInput = {
    create?: XOR<UserCreateWithoutWatchedInput, UserUncheckedCreateWithoutWatchedInput>
    connectOrCreate?: UserCreateOrConnectWithoutWatchedInput
    connect?: UserWhereUniqueInput
  }

  export type ShowCreateNestedOneWithoutWatchedInput = {
    create?: XOR<ShowCreateWithoutWatchedInput, ShowUncheckedCreateWithoutWatchedInput>
    connectOrCreate?: ShowCreateOrConnectWithoutWatchedInput
    connect?: ShowWhereUniqueInput
  }

  export type EpisodeCreateNestedOneWithoutWatchedInput = {
    create?: XOR<EpisodeCreateWithoutWatchedInput, EpisodeUncheckedCreateWithoutWatchedInput>
    connectOrCreate?: EpisodeCreateOrConnectWithoutWatchedInput
    connect?: EpisodeWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWatchedNestedInput = {
    create?: XOR<UserCreateWithoutWatchedInput, UserUncheckedCreateWithoutWatchedInput>
    connectOrCreate?: UserCreateOrConnectWithoutWatchedInput
    upsert?: UserUpsertWithoutWatchedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWatchedInput, UserUpdateWithoutWatchedInput>, UserUncheckedUpdateWithoutWatchedInput>
  }

  export type ShowUpdateOneRequiredWithoutWatchedNestedInput = {
    create?: XOR<ShowCreateWithoutWatchedInput, ShowUncheckedCreateWithoutWatchedInput>
    connectOrCreate?: ShowCreateOrConnectWithoutWatchedInput
    upsert?: ShowUpsertWithoutWatchedInput
    connect?: ShowWhereUniqueInput
    update?: XOR<XOR<ShowUpdateToOneWithWhereWithoutWatchedInput, ShowUpdateWithoutWatchedInput>, ShowUncheckedUpdateWithoutWatchedInput>
  }

  export type EpisodeUpdateOneRequiredWithoutWatchedNestedInput = {
    create?: XOR<EpisodeCreateWithoutWatchedInput, EpisodeUncheckedCreateWithoutWatchedInput>
    connectOrCreate?: EpisodeCreateOrConnectWithoutWatchedInput
    upsert?: EpisodeUpsertWithoutWatchedInput
    connect?: EpisodeWhereUniqueInput
    update?: XOR<XOR<EpisodeUpdateToOneWithWhereWithoutWatchedInput, EpisodeUpdateWithoutWatchedInput>, EpisodeUncheckedUpdateWithoutWatchedInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type EpisodeCreateWithoutShowInput = {
    title: string
    watched?: WatchedCreateNestedManyWithoutEpisodeInput
  }

  export type EpisodeUncheckedCreateWithoutShowInput = {
    id?: number
    title: string
    watched?: WatchedUncheckedCreateNestedManyWithoutEpisodeInput
  }

  export type EpisodeCreateOrConnectWithoutShowInput = {
    where: EpisodeWhereUniqueInput
    create: XOR<EpisodeCreateWithoutShowInput, EpisodeUncheckedCreateWithoutShowInput>
  }

  export type EpisodeCreateManyShowInputEnvelope = {
    data: EpisodeCreateManyShowInput | EpisodeCreateManyShowInput[]
  }

  export type WatchedCreateWithoutShowInput = {
    user: UserCreateNestedOneWithoutWatchedInput
    episode: EpisodeCreateNestedOneWithoutWatchedInput
  }

  export type WatchedUncheckedCreateWithoutShowInput = {
    id?: number
    userId: number
    episodeId: number
  }

  export type WatchedCreateOrConnectWithoutShowInput = {
    where: WatchedWhereUniqueInput
    create: XOR<WatchedCreateWithoutShowInput, WatchedUncheckedCreateWithoutShowInput>
  }

  export type WatchedCreateManyShowInputEnvelope = {
    data: WatchedCreateManyShowInput | WatchedCreateManyShowInput[]
  }

  export type EpisodeUpsertWithWhereUniqueWithoutShowInput = {
    where: EpisodeWhereUniqueInput
    update: XOR<EpisodeUpdateWithoutShowInput, EpisodeUncheckedUpdateWithoutShowInput>
    create: XOR<EpisodeCreateWithoutShowInput, EpisodeUncheckedCreateWithoutShowInput>
  }

  export type EpisodeUpdateWithWhereUniqueWithoutShowInput = {
    where: EpisodeWhereUniqueInput
    data: XOR<EpisodeUpdateWithoutShowInput, EpisodeUncheckedUpdateWithoutShowInput>
  }

  export type EpisodeUpdateManyWithWhereWithoutShowInput = {
    where: EpisodeScalarWhereInput
    data: XOR<EpisodeUpdateManyMutationInput, EpisodeUncheckedUpdateManyWithoutShowInput>
  }

  export type EpisodeScalarWhereInput = {
    AND?: EpisodeScalarWhereInput | EpisodeScalarWhereInput[]
    OR?: EpisodeScalarWhereInput[]
    NOT?: EpisodeScalarWhereInput | EpisodeScalarWhereInput[]
    id?: IntFilter<"Episode"> | number
    showId?: IntFilter<"Episode"> | number
    title?: StringFilter<"Episode"> | string
  }

  export type WatchedUpsertWithWhereUniqueWithoutShowInput = {
    where: WatchedWhereUniqueInput
    update: XOR<WatchedUpdateWithoutShowInput, WatchedUncheckedUpdateWithoutShowInput>
    create: XOR<WatchedCreateWithoutShowInput, WatchedUncheckedCreateWithoutShowInput>
  }

  export type WatchedUpdateWithWhereUniqueWithoutShowInput = {
    where: WatchedWhereUniqueInput
    data: XOR<WatchedUpdateWithoutShowInput, WatchedUncheckedUpdateWithoutShowInput>
  }

  export type WatchedUpdateManyWithWhereWithoutShowInput = {
    where: WatchedScalarWhereInput
    data: XOR<WatchedUpdateManyMutationInput, WatchedUncheckedUpdateManyWithoutShowInput>
  }

  export type WatchedScalarWhereInput = {
    AND?: WatchedScalarWhereInput | WatchedScalarWhereInput[]
    OR?: WatchedScalarWhereInput[]
    NOT?: WatchedScalarWhereInput | WatchedScalarWhereInput[]
    id?: IntFilter<"Watched"> | number
    userId?: IntFilter<"Watched"> | number
    showId?: IntFilter<"Watched"> | number
    episodeId?: IntFilter<"Watched"> | number
  }

  export type ShowCreateWithoutEpisodesInput = {
    title: string
    watched?: WatchedCreateNestedManyWithoutShowInput
  }

  export type ShowUncheckedCreateWithoutEpisodesInput = {
    id?: number
    title: string
    watched?: WatchedUncheckedCreateNestedManyWithoutShowInput
  }

  export type ShowCreateOrConnectWithoutEpisodesInput = {
    where: ShowWhereUniqueInput
    create: XOR<ShowCreateWithoutEpisodesInput, ShowUncheckedCreateWithoutEpisodesInput>
  }

  export type WatchedCreateWithoutEpisodeInput = {
    user: UserCreateNestedOneWithoutWatchedInput
    show: ShowCreateNestedOneWithoutWatchedInput
  }

  export type WatchedUncheckedCreateWithoutEpisodeInput = {
    id?: number
    userId: number
    showId: number
  }

  export type WatchedCreateOrConnectWithoutEpisodeInput = {
    where: WatchedWhereUniqueInput
    create: XOR<WatchedCreateWithoutEpisodeInput, WatchedUncheckedCreateWithoutEpisodeInput>
  }

  export type WatchedCreateManyEpisodeInputEnvelope = {
    data: WatchedCreateManyEpisodeInput | WatchedCreateManyEpisodeInput[]
  }

  export type ShowUpsertWithoutEpisodesInput = {
    update: XOR<ShowUpdateWithoutEpisodesInput, ShowUncheckedUpdateWithoutEpisodesInput>
    create: XOR<ShowCreateWithoutEpisodesInput, ShowUncheckedCreateWithoutEpisodesInput>
    where?: ShowWhereInput
  }

  export type ShowUpdateToOneWithWhereWithoutEpisodesInput = {
    where?: ShowWhereInput
    data: XOR<ShowUpdateWithoutEpisodesInput, ShowUncheckedUpdateWithoutEpisodesInput>
  }

  export type ShowUpdateWithoutEpisodesInput = {
    title?: StringFieldUpdateOperationsInput | string
    watched?: WatchedUpdateManyWithoutShowNestedInput
  }

  export type ShowUncheckedUpdateWithoutEpisodesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    watched?: WatchedUncheckedUpdateManyWithoutShowNestedInput
  }

  export type WatchedUpsertWithWhereUniqueWithoutEpisodeInput = {
    where: WatchedWhereUniqueInput
    update: XOR<WatchedUpdateWithoutEpisodeInput, WatchedUncheckedUpdateWithoutEpisodeInput>
    create: XOR<WatchedCreateWithoutEpisodeInput, WatchedUncheckedCreateWithoutEpisodeInput>
  }

  export type WatchedUpdateWithWhereUniqueWithoutEpisodeInput = {
    where: WatchedWhereUniqueInput
    data: XOR<WatchedUpdateWithoutEpisodeInput, WatchedUncheckedUpdateWithoutEpisodeInput>
  }

  export type WatchedUpdateManyWithWhereWithoutEpisodeInput = {
    where: WatchedScalarWhereInput
    data: XOR<WatchedUpdateManyMutationInput, WatchedUncheckedUpdateManyWithoutEpisodeInput>
  }

  export type WatchedCreateWithoutUserInput = {
    show: ShowCreateNestedOneWithoutWatchedInput
    episode: EpisodeCreateNestedOneWithoutWatchedInput
  }

  export type WatchedUncheckedCreateWithoutUserInput = {
    id?: number
    showId: number
    episodeId: number
  }

  export type WatchedCreateOrConnectWithoutUserInput = {
    where: WatchedWhereUniqueInput
    create: XOR<WatchedCreateWithoutUserInput, WatchedUncheckedCreateWithoutUserInput>
  }

  export type WatchedCreateManyUserInputEnvelope = {
    data: WatchedCreateManyUserInput | WatchedCreateManyUserInput[]
  }

  export type WatchedUpsertWithWhereUniqueWithoutUserInput = {
    where: WatchedWhereUniqueInput
    update: XOR<WatchedUpdateWithoutUserInput, WatchedUncheckedUpdateWithoutUserInput>
    create: XOR<WatchedCreateWithoutUserInput, WatchedUncheckedCreateWithoutUserInput>
  }

  export type WatchedUpdateWithWhereUniqueWithoutUserInput = {
    where: WatchedWhereUniqueInput
    data: XOR<WatchedUpdateWithoutUserInput, WatchedUncheckedUpdateWithoutUserInput>
  }

  export type WatchedUpdateManyWithWhereWithoutUserInput = {
    where: WatchedScalarWhereInput
    data: XOR<WatchedUpdateManyMutationInput, WatchedUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCreateWithoutWatchedInput = {
    username: string
  }

  export type UserUncheckedCreateWithoutWatchedInput = {
    id?: number
    username: string
  }

  export type UserCreateOrConnectWithoutWatchedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWatchedInput, UserUncheckedCreateWithoutWatchedInput>
  }

  export type ShowCreateWithoutWatchedInput = {
    title: string
    episodes?: EpisodeCreateNestedManyWithoutShowInput
  }

  export type ShowUncheckedCreateWithoutWatchedInput = {
    id?: number
    title: string
    episodes?: EpisodeUncheckedCreateNestedManyWithoutShowInput
  }

  export type ShowCreateOrConnectWithoutWatchedInput = {
    where: ShowWhereUniqueInput
    create: XOR<ShowCreateWithoutWatchedInput, ShowUncheckedCreateWithoutWatchedInput>
  }

  export type EpisodeCreateWithoutWatchedInput = {
    title: string
    show: ShowCreateNestedOneWithoutEpisodesInput
  }

  export type EpisodeUncheckedCreateWithoutWatchedInput = {
    id?: number
    showId: number
    title: string
  }

  export type EpisodeCreateOrConnectWithoutWatchedInput = {
    where: EpisodeWhereUniqueInput
    create: XOR<EpisodeCreateWithoutWatchedInput, EpisodeUncheckedCreateWithoutWatchedInput>
  }

  export type UserUpsertWithoutWatchedInput = {
    update: XOR<UserUpdateWithoutWatchedInput, UserUncheckedUpdateWithoutWatchedInput>
    create: XOR<UserCreateWithoutWatchedInput, UserUncheckedCreateWithoutWatchedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWatchedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWatchedInput, UserUncheckedUpdateWithoutWatchedInput>
  }

  export type UserUpdateWithoutWatchedInput = {
    username?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutWatchedInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
  }

  export type ShowUpsertWithoutWatchedInput = {
    update: XOR<ShowUpdateWithoutWatchedInput, ShowUncheckedUpdateWithoutWatchedInput>
    create: XOR<ShowCreateWithoutWatchedInput, ShowUncheckedCreateWithoutWatchedInput>
    where?: ShowWhereInput
  }

  export type ShowUpdateToOneWithWhereWithoutWatchedInput = {
    where?: ShowWhereInput
    data: XOR<ShowUpdateWithoutWatchedInput, ShowUncheckedUpdateWithoutWatchedInput>
  }

  export type ShowUpdateWithoutWatchedInput = {
    title?: StringFieldUpdateOperationsInput | string
    episodes?: EpisodeUpdateManyWithoutShowNestedInput
  }

  export type ShowUncheckedUpdateWithoutWatchedInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    episodes?: EpisodeUncheckedUpdateManyWithoutShowNestedInput
  }

  export type EpisodeUpsertWithoutWatchedInput = {
    update: XOR<EpisodeUpdateWithoutWatchedInput, EpisodeUncheckedUpdateWithoutWatchedInput>
    create: XOR<EpisodeCreateWithoutWatchedInput, EpisodeUncheckedCreateWithoutWatchedInput>
    where?: EpisodeWhereInput
  }

  export type EpisodeUpdateToOneWithWhereWithoutWatchedInput = {
    where?: EpisodeWhereInput
    data: XOR<EpisodeUpdateWithoutWatchedInput, EpisodeUncheckedUpdateWithoutWatchedInput>
  }

  export type EpisodeUpdateWithoutWatchedInput = {
    title?: StringFieldUpdateOperationsInput | string
    show?: ShowUpdateOneRequiredWithoutEpisodesNestedInput
  }

  export type EpisodeUncheckedUpdateWithoutWatchedInput = {
    id?: IntFieldUpdateOperationsInput | number
    showId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type EpisodeCreateManyShowInput = {
    id?: number
    title: string
  }

  export type WatchedCreateManyShowInput = {
    id?: number
    userId: number
    episodeId: number
  }

  export type EpisodeUpdateWithoutShowInput = {
    title?: StringFieldUpdateOperationsInput | string
    watched?: WatchedUpdateManyWithoutEpisodeNestedInput
  }

  export type EpisodeUncheckedUpdateWithoutShowInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    watched?: WatchedUncheckedUpdateManyWithoutEpisodeNestedInput
  }

  export type EpisodeUncheckedUpdateManyWithoutShowInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type WatchedUpdateWithoutShowInput = {
    user?: UserUpdateOneRequiredWithoutWatchedNestedInput
    episode?: EpisodeUpdateOneRequiredWithoutWatchedNestedInput
  }

  export type WatchedUncheckedUpdateWithoutShowInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    episodeId?: IntFieldUpdateOperationsInput | number
  }

  export type WatchedUncheckedUpdateManyWithoutShowInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    episodeId?: IntFieldUpdateOperationsInput | number
  }

  export type WatchedCreateManyEpisodeInput = {
    id?: number
    userId: number
    showId: number
  }

  export type WatchedUpdateWithoutEpisodeInput = {
    user?: UserUpdateOneRequiredWithoutWatchedNestedInput
    show?: ShowUpdateOneRequiredWithoutWatchedNestedInput
  }

  export type WatchedUncheckedUpdateWithoutEpisodeInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    showId?: IntFieldUpdateOperationsInput | number
  }

  export type WatchedUncheckedUpdateManyWithoutEpisodeInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    showId?: IntFieldUpdateOperationsInput | number
  }

  export type WatchedCreateManyUserInput = {
    id?: number
    showId: number
    episodeId: number
  }

  export type WatchedUpdateWithoutUserInput = {
    show?: ShowUpdateOneRequiredWithoutWatchedNestedInput
    episode?: EpisodeUpdateOneRequiredWithoutWatchedNestedInput
  }

  export type WatchedUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    showId?: IntFieldUpdateOperationsInput | number
    episodeId?: IntFieldUpdateOperationsInput | number
  }

  export type WatchedUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    showId?: IntFieldUpdateOperationsInput | number
    episodeId?: IntFieldUpdateOperationsInput | number
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