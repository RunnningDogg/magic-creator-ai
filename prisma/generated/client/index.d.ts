
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Posts
 * 
 */
export type Posts = $Result.DefaultSelection<Prisma.$PostsPayload>
/**
 * Model Gpts
 * 
 */
export type Gpts = $Result.DefaultSelection<Prisma.$GptsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Posts
 * const posts = await prisma.posts.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Posts
   * const posts = await prisma.posts.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.posts`: Exposes CRUD operations for the **Posts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.posts.findMany()
    * ```
    */
  get posts(): Prisma.PostsDelegate<ExtArgs>;

  /**
   * `prisma.gpts`: Exposes CRUD operations for the **Gpts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gpts
    * const gpts = await prisma.gpts.findMany()
    * ```
    */
  get gpts(): Prisma.GptsDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Posts: 'Posts',
    Gpts: 'Gpts'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'posts' | 'gpts'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Posts: {
        payload: Prisma.$PostsPayload<ExtArgs>
        fields: Prisma.PostsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          findFirst: {
            args: Prisma.PostsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          findMany: {
            args: Prisma.PostsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>[]
          }
          create: {
            args: Prisma.PostsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          createMany: {
            args: Prisma.PostsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PostsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          update: {
            args: Prisma.PostsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          deleteMany: {
            args: Prisma.PostsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PostsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PostsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          aggregate: {
            args: Prisma.PostsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePosts>
          }
          groupBy: {
            args: Prisma.PostsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PostsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostsCountArgs<ExtArgs>,
            result: $Utils.Optional<PostsCountAggregateOutputType> | number
          }
        }
      }
      Gpts: {
        payload: Prisma.$GptsPayload<ExtArgs>
        fields: Prisma.GptsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GptsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GptsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GptsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GptsPayload>
          }
          findFirst: {
            args: Prisma.GptsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GptsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GptsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GptsPayload>
          }
          findMany: {
            args: Prisma.GptsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GptsPayload>[]
          }
          create: {
            args: Prisma.GptsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GptsPayload>
          }
          createMany: {
            args: Prisma.GptsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GptsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GptsPayload>
          }
          update: {
            args: Prisma.GptsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GptsPayload>
          }
          deleteMany: {
            args: Prisma.GptsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GptsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GptsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GptsPayload>
          }
          aggregate: {
            args: Prisma.GptsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGpts>
          }
          groupBy: {
            args: Prisma.GptsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GptsGroupByOutputType>[]
          }
          count: {
            args: Prisma.GptsCountArgs<ExtArgs>,
            result: $Utils.Optional<GptsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'update'
    | 'updateMany'
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
   * Models
   */

  /**
   * Model Posts
   */

  export type AggregatePosts = {
    _count: PostsCountAggregateOutputType | null
    _avg: PostsAvgAggregateOutputType | null
    _sum: PostsSumAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  export type PostsAvgAggregateOutputType = {
    id: number | null
  }

  export type PostsSumAggregateOutputType = {
    id: number | null
  }

  export type PostsMinAggregateOutputType = {
    id: number | null
    url: string | null
    createdAt: Date | null
  }

  export type PostsMaxAggregateOutputType = {
    id: number | null
    url: string | null
    createdAt: Date | null
  }

  export type PostsCountAggregateOutputType = {
    id: number
    url: number
    createdAt: number
    _all: number
  }


  export type PostsAvgAggregateInputType = {
    id?: true
  }

  export type PostsSumAggregateInputType = {
    id?: true
  }

  export type PostsMinAggregateInputType = {
    id?: true
    url?: true
    createdAt?: true
  }

  export type PostsMaxAggregateInputType = {
    id?: true
    url?: true
    createdAt?: true
  }

  export type PostsCountAggregateInputType = {
    id?: true
    url?: true
    createdAt?: true
    _all?: true
  }

  export type PostsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to aggregate.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostsMaxAggregateInputType
  }

  export type GetPostsAggregateType<T extends PostsAggregateArgs> = {
        [P in keyof T & keyof AggregatePosts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosts[P]>
      : GetScalarType<T[P], AggregatePosts[P]>
  }




  export type PostsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostsWhereInput
    orderBy?: PostsOrderByWithAggregationInput | PostsOrderByWithAggregationInput[]
    by: PostsScalarFieldEnum[] | PostsScalarFieldEnum
    having?: PostsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostsCountAggregateInputType | true
    _avg?: PostsAvgAggregateInputType
    _sum?: PostsSumAggregateInputType
    _min?: PostsMinAggregateInputType
    _max?: PostsMaxAggregateInputType
  }

  export type PostsGroupByOutputType = {
    id: number
    url: string | null
    createdAt: Date
    _count: PostsCountAggregateOutputType | null
    _avg: PostsAvgAggregateOutputType | null
    _sum: PostsSumAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  type GetPostsGroupByPayload<T extends PostsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostsGroupByOutputType[P]>
            : GetScalarType<T[P], PostsGroupByOutputType[P]>
        }
      >
    >


  export type PostsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["posts"]>

  export type PostsSelectScalar = {
    id?: boolean
    url?: boolean
    createdAt?: boolean
  }


  export type $PostsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Posts"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string | null
      createdAt: Date
    }, ExtArgs["result"]["posts"]>
    composites: {}
  }


  type PostsGetPayload<S extends boolean | null | undefined | PostsDefaultArgs> = $Result.GetResult<Prisma.$PostsPayload, S>

  type PostsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PostsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: PostsCountAggregateInputType | true
    }

  export interface PostsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Posts'], meta: { name: 'Posts' } }
    /**
     * Find zero or one Posts that matches the filter.
     * @param {PostsFindUniqueArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PostsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PostsFindUniqueArgs<ExtArgs>>
    ): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Posts that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PostsFindUniqueOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PostsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PostsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsFindFirstArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PostsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PostsFindFirstArgs<ExtArgs>>
    ): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Posts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsFindFirstOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PostsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PostsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.posts.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.posts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postsWithIdOnly = await prisma.posts.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PostsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Posts.
     * @param {PostsCreateArgs} args - Arguments to create a Posts.
     * @example
     * // Create one Posts
     * const Posts = await prisma.posts.create({
     *   data: {
     *     // ... data to create a Posts
     *   }
     * })
     * 
    **/
    create<T extends PostsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PostsCreateArgs<ExtArgs>>
    ): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Posts.
     *     @param {PostsCreateManyArgs} args - Arguments to create many Posts.
     *     @example
     *     // Create many Posts
     *     const posts = await prisma.posts.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PostsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Posts.
     * @param {PostsDeleteArgs} args - Arguments to delete one Posts.
     * @example
     * // Delete one Posts
     * const Posts = await prisma.posts.delete({
     *   where: {
     *     // ... filter to delete one Posts
     *   }
     * })
     * 
    **/
    delete<T extends PostsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PostsDeleteArgs<ExtArgs>>
    ): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Posts.
     * @param {PostsUpdateArgs} args - Arguments to update one Posts.
     * @example
     * // Update one Posts
     * const posts = await prisma.posts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PostsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PostsUpdateArgs<ExtArgs>>
    ): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Posts.
     * @param {PostsDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.posts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PostsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const posts = await prisma.posts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PostsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PostsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Posts.
     * @param {PostsUpsertArgs} args - Arguments to update or create a Posts.
     * @example
     * // Update or create a Posts
     * const posts = await prisma.posts.upsert({
     *   create: {
     *     // ... data to create a Posts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Posts we want to update
     *   }
     * })
    **/
    upsert<T extends PostsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PostsUpsertArgs<ExtArgs>>
    ): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.posts.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostsCountArgs>(
      args?: Subset<T, PostsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostsAggregateArgs>(args: Subset<T, PostsAggregateArgs>): Prisma.PrismaPromise<GetPostsAggregateType<T>>

    /**
     * Group by Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsGroupByArgs} args - Group by arguments.
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
      T extends PostsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostsGroupByArgs['orderBy'] }
        : { orderBy?: PostsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Posts model
   */
  readonly fields: PostsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Posts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Posts model
   */ 
  interface PostsFieldRefs {
    readonly id: FieldRef<"Posts", 'Int'>
    readonly url: FieldRef<"Posts", 'String'>
    readonly createdAt: FieldRef<"Posts", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Posts findUnique
   */
  export type PostsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where: PostsWhereUniqueInput
  }


  /**
   * Posts findUniqueOrThrow
   */
  export type PostsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where: PostsWhereUniqueInput
  }


  /**
   * Posts findFirst
   */
  export type PostsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }


  /**
   * Posts findFirstOrThrow
   */
  export type PostsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }


  /**
   * Posts findMany
   */
  export type PostsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }


  /**
   * Posts create
   */
  export type PostsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * The data needed to create a Posts.
     */
    data?: XOR<PostsCreateInput, PostsUncheckedCreateInput>
  }


  /**
   * Posts createMany
   */
  export type PostsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostsCreateManyInput | PostsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Posts update
   */
  export type PostsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * The data needed to update a Posts.
     */
    data: XOR<PostsUpdateInput, PostsUncheckedUpdateInput>
    /**
     * Choose, which Posts to update.
     */
    where: PostsWhereUniqueInput
  }


  /**
   * Posts updateMany
   */
  export type PostsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostsUpdateManyMutationInput, PostsUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostsWhereInput
  }


  /**
   * Posts upsert
   */
  export type PostsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * The filter to search for the Posts to update in case it exists.
     */
    where: PostsWhereUniqueInput
    /**
     * In case the Posts found by the `where` argument doesn't exist, create a new Posts with this data.
     */
    create: XOR<PostsCreateInput, PostsUncheckedCreateInput>
    /**
     * In case the Posts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostsUpdateInput, PostsUncheckedUpdateInput>
  }


  /**
   * Posts delete
   */
  export type PostsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Filter which Posts to delete.
     */
    where: PostsWhereUniqueInput
  }


  /**
   * Posts deleteMany
   */
  export type PostsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostsWhereInput
  }


  /**
   * Posts without action
   */
  export type PostsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
  }



  /**
   * Model Gpts
   */

  export type AggregateGpts = {
    _count: GptsCountAggregateOutputType | null
    _avg: GptsAvgAggregateOutputType | null
    _sum: GptsSumAggregateOutputType | null
    _min: GptsMinAggregateOutputType | null
    _max: GptsMaxAggregateOutputType | null
  }

  export type GptsAvgAggregateOutputType = {
    id: number | null
  }

  export type GptsSumAggregateOutputType = {
    id: number | null
  }

  export type GptsMinAggregateOutputType = {
    id: number | null
    post_id: string | null
    short_url: string | null
    author: string | null
    show_name: string | null
    show_desc: string | null
    show_welcome: string | null
    show_image: string | null
  }

  export type GptsMaxAggregateOutputType = {
    id: number | null
    post_id: string | null
    short_url: string | null
    author: string | null
    show_name: string | null
    show_desc: string | null
    show_welcome: string | null
    show_image: string | null
  }

  export type GptsCountAggregateOutputType = {
    id: number
    post_id: number
    short_url: number
    author: number
    show_name: number
    show_desc: number
    show_welcome: number
    show_image: number
    _all: number
  }


  export type GptsAvgAggregateInputType = {
    id?: true
  }

  export type GptsSumAggregateInputType = {
    id?: true
  }

  export type GptsMinAggregateInputType = {
    id?: true
    post_id?: true
    short_url?: true
    author?: true
    show_name?: true
    show_desc?: true
    show_welcome?: true
    show_image?: true
  }

  export type GptsMaxAggregateInputType = {
    id?: true
    post_id?: true
    short_url?: true
    author?: true
    show_name?: true
    show_desc?: true
    show_welcome?: true
    show_image?: true
  }

  export type GptsCountAggregateInputType = {
    id?: true
    post_id?: true
    short_url?: true
    author?: true
    show_name?: true
    show_desc?: true
    show_welcome?: true
    show_image?: true
    _all?: true
  }

  export type GptsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gpts to aggregate.
     */
    where?: GptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gpts to fetch.
     */
    orderBy?: GptsOrderByWithRelationInput | GptsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gpts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gpts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Gpts
    **/
    _count?: true | GptsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GptsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GptsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GptsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GptsMaxAggregateInputType
  }

  export type GetGptsAggregateType<T extends GptsAggregateArgs> = {
        [P in keyof T & keyof AggregateGpts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGpts[P]>
      : GetScalarType<T[P], AggregateGpts[P]>
  }




  export type GptsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GptsWhereInput
    orderBy?: GptsOrderByWithAggregationInput | GptsOrderByWithAggregationInput[]
    by: GptsScalarFieldEnum[] | GptsScalarFieldEnum
    having?: GptsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GptsCountAggregateInputType | true
    _avg?: GptsAvgAggregateInputType
    _sum?: GptsSumAggregateInputType
    _min?: GptsMinAggregateInputType
    _max?: GptsMaxAggregateInputType
  }

  export type GptsGroupByOutputType = {
    id: number
    post_id: string
    short_url: string | null
    author: string | null
    show_name: string | null
    show_desc: string | null
    show_welcome: string | null
    show_image: string | null
    _count: GptsCountAggregateOutputType | null
    _avg: GptsAvgAggregateOutputType | null
    _sum: GptsSumAggregateOutputType | null
    _min: GptsMinAggregateOutputType | null
    _max: GptsMaxAggregateOutputType | null
  }

  type GetGptsGroupByPayload<T extends GptsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GptsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GptsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GptsGroupByOutputType[P]>
            : GetScalarType<T[P], GptsGroupByOutputType[P]>
        }
      >
    >


  export type GptsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    post_id?: boolean
    short_url?: boolean
    author?: boolean
    show_name?: boolean
    show_desc?: boolean
    show_welcome?: boolean
    show_image?: boolean
  }, ExtArgs["result"]["gpts"]>

  export type GptsSelectScalar = {
    id?: boolean
    post_id?: boolean
    short_url?: boolean
    author?: boolean
    show_name?: boolean
    show_desc?: boolean
    show_welcome?: boolean
    show_image?: boolean
  }


  export type $GptsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Gpts"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      post_id: string
      short_url: string | null
      author: string | null
      show_name: string | null
      show_desc: string | null
      show_welcome: string | null
      show_image: string | null
    }, ExtArgs["result"]["gpts"]>
    composites: {}
  }


  type GptsGetPayload<S extends boolean | null | undefined | GptsDefaultArgs> = $Result.GetResult<Prisma.$GptsPayload, S>

  type GptsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GptsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: GptsCountAggregateInputType | true
    }

  export interface GptsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Gpts'], meta: { name: 'Gpts' } }
    /**
     * Find zero or one Gpts that matches the filter.
     * @param {GptsFindUniqueArgs} args - Arguments to find a Gpts
     * @example
     * // Get one Gpts
     * const gpts = await prisma.gpts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GptsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GptsFindUniqueArgs<ExtArgs>>
    ): Prisma__GptsClient<$Result.GetResult<Prisma.$GptsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Gpts that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GptsFindUniqueOrThrowArgs} args - Arguments to find a Gpts
     * @example
     * // Get one Gpts
     * const gpts = await prisma.gpts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GptsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GptsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GptsClient<$Result.GetResult<Prisma.$GptsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Gpts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GptsFindFirstArgs} args - Arguments to find a Gpts
     * @example
     * // Get one Gpts
     * const gpts = await prisma.gpts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GptsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GptsFindFirstArgs<ExtArgs>>
    ): Prisma__GptsClient<$Result.GetResult<Prisma.$GptsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Gpts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GptsFindFirstOrThrowArgs} args - Arguments to find a Gpts
     * @example
     * // Get one Gpts
     * const gpts = await prisma.gpts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GptsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GptsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GptsClient<$Result.GetResult<Prisma.$GptsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Gpts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GptsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gpts
     * const gpts = await prisma.gpts.findMany()
     * 
     * // Get first 10 Gpts
     * const gpts = await prisma.gpts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gptsWithIdOnly = await prisma.gpts.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GptsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GptsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GptsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Gpts.
     * @param {GptsCreateArgs} args - Arguments to create a Gpts.
     * @example
     * // Create one Gpts
     * const Gpts = await prisma.gpts.create({
     *   data: {
     *     // ... data to create a Gpts
     *   }
     * })
     * 
    **/
    create<T extends GptsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GptsCreateArgs<ExtArgs>>
    ): Prisma__GptsClient<$Result.GetResult<Prisma.$GptsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Gpts.
     *     @param {GptsCreateManyArgs} args - Arguments to create many Gpts.
     *     @example
     *     // Create many Gpts
     *     const gpts = await prisma.gpts.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GptsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GptsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Gpts.
     * @param {GptsDeleteArgs} args - Arguments to delete one Gpts.
     * @example
     * // Delete one Gpts
     * const Gpts = await prisma.gpts.delete({
     *   where: {
     *     // ... filter to delete one Gpts
     *   }
     * })
     * 
    **/
    delete<T extends GptsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GptsDeleteArgs<ExtArgs>>
    ): Prisma__GptsClient<$Result.GetResult<Prisma.$GptsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Gpts.
     * @param {GptsUpdateArgs} args - Arguments to update one Gpts.
     * @example
     * // Update one Gpts
     * const gpts = await prisma.gpts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GptsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GptsUpdateArgs<ExtArgs>>
    ): Prisma__GptsClient<$Result.GetResult<Prisma.$GptsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Gpts.
     * @param {GptsDeleteManyArgs} args - Arguments to filter Gpts to delete.
     * @example
     * // Delete a few Gpts
     * const { count } = await prisma.gpts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GptsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GptsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gpts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GptsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gpts
     * const gpts = await prisma.gpts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GptsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GptsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Gpts.
     * @param {GptsUpsertArgs} args - Arguments to update or create a Gpts.
     * @example
     * // Update or create a Gpts
     * const gpts = await prisma.gpts.upsert({
     *   create: {
     *     // ... data to create a Gpts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gpts we want to update
     *   }
     * })
    **/
    upsert<T extends GptsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GptsUpsertArgs<ExtArgs>>
    ): Prisma__GptsClient<$Result.GetResult<Prisma.$GptsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Gpts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GptsCountArgs} args - Arguments to filter Gpts to count.
     * @example
     * // Count the number of Gpts
     * const count = await prisma.gpts.count({
     *   where: {
     *     // ... the filter for the Gpts we want to count
     *   }
     * })
    **/
    count<T extends GptsCountArgs>(
      args?: Subset<T, GptsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GptsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gpts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GptsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GptsAggregateArgs>(args: Subset<T, GptsAggregateArgs>): Prisma.PrismaPromise<GetGptsAggregateType<T>>

    /**
     * Group by Gpts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GptsGroupByArgs} args - Group by arguments.
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
      T extends GptsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GptsGroupByArgs['orderBy'] }
        : { orderBy?: GptsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GptsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGptsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Gpts model
   */
  readonly fields: GptsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Gpts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GptsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Gpts model
   */ 
  interface GptsFieldRefs {
    readonly id: FieldRef<"Gpts", 'Int'>
    readonly post_id: FieldRef<"Gpts", 'String'>
    readonly short_url: FieldRef<"Gpts", 'String'>
    readonly author: FieldRef<"Gpts", 'String'>
    readonly show_name: FieldRef<"Gpts", 'String'>
    readonly show_desc: FieldRef<"Gpts", 'String'>
    readonly show_welcome: FieldRef<"Gpts", 'String'>
    readonly show_image: FieldRef<"Gpts", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Gpts findUnique
   */
  export type GptsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gpts
     */
    select?: GptsSelect<ExtArgs> | null
    /**
     * Filter, which Gpts to fetch.
     */
    where: GptsWhereUniqueInput
  }


  /**
   * Gpts findUniqueOrThrow
   */
  export type GptsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gpts
     */
    select?: GptsSelect<ExtArgs> | null
    /**
     * Filter, which Gpts to fetch.
     */
    where: GptsWhereUniqueInput
  }


  /**
   * Gpts findFirst
   */
  export type GptsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gpts
     */
    select?: GptsSelect<ExtArgs> | null
    /**
     * Filter, which Gpts to fetch.
     */
    where?: GptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gpts to fetch.
     */
    orderBy?: GptsOrderByWithRelationInput | GptsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gpts.
     */
    cursor?: GptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gpts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gpts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gpts.
     */
    distinct?: GptsScalarFieldEnum | GptsScalarFieldEnum[]
  }


  /**
   * Gpts findFirstOrThrow
   */
  export type GptsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gpts
     */
    select?: GptsSelect<ExtArgs> | null
    /**
     * Filter, which Gpts to fetch.
     */
    where?: GptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gpts to fetch.
     */
    orderBy?: GptsOrderByWithRelationInput | GptsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gpts.
     */
    cursor?: GptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gpts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gpts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gpts.
     */
    distinct?: GptsScalarFieldEnum | GptsScalarFieldEnum[]
  }


  /**
   * Gpts findMany
   */
  export type GptsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gpts
     */
    select?: GptsSelect<ExtArgs> | null
    /**
     * Filter, which Gpts to fetch.
     */
    where?: GptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gpts to fetch.
     */
    orderBy?: GptsOrderByWithRelationInput | GptsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Gpts.
     */
    cursor?: GptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gpts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gpts.
     */
    skip?: number
    distinct?: GptsScalarFieldEnum | GptsScalarFieldEnum[]
  }


  /**
   * Gpts create
   */
  export type GptsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gpts
     */
    select?: GptsSelect<ExtArgs> | null
    /**
     * The data needed to create a Gpts.
     */
    data: XOR<GptsCreateInput, GptsUncheckedCreateInput>
  }


  /**
   * Gpts createMany
   */
  export type GptsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Gpts.
     */
    data: GptsCreateManyInput | GptsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Gpts update
   */
  export type GptsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gpts
     */
    select?: GptsSelect<ExtArgs> | null
    /**
     * The data needed to update a Gpts.
     */
    data: XOR<GptsUpdateInput, GptsUncheckedUpdateInput>
    /**
     * Choose, which Gpts to update.
     */
    where: GptsWhereUniqueInput
  }


  /**
   * Gpts updateMany
   */
  export type GptsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Gpts.
     */
    data: XOR<GptsUpdateManyMutationInput, GptsUncheckedUpdateManyInput>
    /**
     * Filter which Gpts to update
     */
    where?: GptsWhereInput
  }


  /**
   * Gpts upsert
   */
  export type GptsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gpts
     */
    select?: GptsSelect<ExtArgs> | null
    /**
     * The filter to search for the Gpts to update in case it exists.
     */
    where: GptsWhereUniqueInput
    /**
     * In case the Gpts found by the `where` argument doesn't exist, create a new Gpts with this data.
     */
    create: XOR<GptsCreateInput, GptsUncheckedCreateInput>
    /**
     * In case the Gpts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GptsUpdateInput, GptsUncheckedUpdateInput>
  }


  /**
   * Gpts delete
   */
  export type GptsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gpts
     */
    select?: GptsSelect<ExtArgs> | null
    /**
     * Filter which Gpts to delete.
     */
    where: GptsWhereUniqueInput
  }


  /**
   * Gpts deleteMany
   */
  export type GptsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gpts to delete
     */
    where?: GptsWhereInput
  }


  /**
   * Gpts without action
   */
  export type GptsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gpts
     */
    select?: GptsSelect<ExtArgs> | null
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


  export const PostsScalarFieldEnum: {
    id: 'id',
    url: 'url',
    createdAt: 'createdAt'
  };

  export type PostsScalarFieldEnum = (typeof PostsScalarFieldEnum)[keyof typeof PostsScalarFieldEnum]


  export const GptsScalarFieldEnum: {
    id: 'id',
    post_id: 'post_id',
    short_url: 'short_url',
    author: 'author',
    show_name: 'show_name',
    show_desc: 'show_desc',
    show_welcome: 'show_welcome',
    show_image: 'show_image'
  };

  export type GptsScalarFieldEnum = (typeof GptsScalarFieldEnum)[keyof typeof GptsScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PostsWhereInput = {
    AND?: PostsWhereInput | PostsWhereInput[]
    OR?: PostsWhereInput[]
    NOT?: PostsWhereInput | PostsWhereInput[]
    id?: IntFilter<"Posts"> | number
    url?: StringNullableFilter<"Posts"> | string | null
    createdAt?: DateTimeFilter<"Posts"> | Date | string
  }

  export type PostsOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type PostsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    url?: string
    AND?: PostsWhereInput | PostsWhereInput[]
    OR?: PostsWhereInput[]
    NOT?: PostsWhereInput | PostsWhereInput[]
    createdAt?: DateTimeFilter<"Posts"> | Date | string
  }, "id" | "url">

  export type PostsOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PostsCountOrderByAggregateInput
    _avg?: PostsAvgOrderByAggregateInput
    _max?: PostsMaxOrderByAggregateInput
    _min?: PostsMinOrderByAggregateInput
    _sum?: PostsSumOrderByAggregateInput
  }

  export type PostsScalarWhereWithAggregatesInput = {
    AND?: PostsScalarWhereWithAggregatesInput | PostsScalarWhereWithAggregatesInput[]
    OR?: PostsScalarWhereWithAggregatesInput[]
    NOT?: PostsScalarWhereWithAggregatesInput | PostsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Posts"> | number
    url?: StringNullableWithAggregatesFilter<"Posts"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Posts"> | Date | string
  }

  export type GptsWhereInput = {
    AND?: GptsWhereInput | GptsWhereInput[]
    OR?: GptsWhereInput[]
    NOT?: GptsWhereInput | GptsWhereInput[]
    id?: IntFilter<"Gpts"> | number
    post_id?: StringFilter<"Gpts"> | string
    short_url?: StringNullableFilter<"Gpts"> | string | null
    author?: StringNullableFilter<"Gpts"> | string | null
    show_name?: StringNullableFilter<"Gpts"> | string | null
    show_desc?: StringNullableFilter<"Gpts"> | string | null
    show_welcome?: StringNullableFilter<"Gpts"> | string | null
    show_image?: StringNullableFilter<"Gpts"> | string | null
  }

  export type GptsOrderByWithRelationInput = {
    id?: SortOrder
    post_id?: SortOrder
    short_url?: SortOrderInput | SortOrder
    author?: SortOrderInput | SortOrder
    show_name?: SortOrderInput | SortOrder
    show_desc?: SortOrderInput | SortOrder
    show_welcome?: SortOrderInput | SortOrder
    show_image?: SortOrderInput | SortOrder
  }

  export type GptsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    post_id?: string
    AND?: GptsWhereInput | GptsWhereInput[]
    OR?: GptsWhereInput[]
    NOT?: GptsWhereInput | GptsWhereInput[]
    short_url?: StringNullableFilter<"Gpts"> | string | null
    author?: StringNullableFilter<"Gpts"> | string | null
    show_name?: StringNullableFilter<"Gpts"> | string | null
    show_desc?: StringNullableFilter<"Gpts"> | string | null
    show_welcome?: StringNullableFilter<"Gpts"> | string | null
    show_image?: StringNullableFilter<"Gpts"> | string | null
  }, "id" | "post_id">

  export type GptsOrderByWithAggregationInput = {
    id?: SortOrder
    post_id?: SortOrder
    short_url?: SortOrderInput | SortOrder
    author?: SortOrderInput | SortOrder
    show_name?: SortOrderInput | SortOrder
    show_desc?: SortOrderInput | SortOrder
    show_welcome?: SortOrderInput | SortOrder
    show_image?: SortOrderInput | SortOrder
    _count?: GptsCountOrderByAggregateInput
    _avg?: GptsAvgOrderByAggregateInput
    _max?: GptsMaxOrderByAggregateInput
    _min?: GptsMinOrderByAggregateInput
    _sum?: GptsSumOrderByAggregateInput
  }

  export type GptsScalarWhereWithAggregatesInput = {
    AND?: GptsScalarWhereWithAggregatesInput | GptsScalarWhereWithAggregatesInput[]
    OR?: GptsScalarWhereWithAggregatesInput[]
    NOT?: GptsScalarWhereWithAggregatesInput | GptsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Gpts"> | number
    post_id?: StringWithAggregatesFilter<"Gpts"> | string
    short_url?: StringNullableWithAggregatesFilter<"Gpts"> | string | null
    author?: StringNullableWithAggregatesFilter<"Gpts"> | string | null
    show_name?: StringNullableWithAggregatesFilter<"Gpts"> | string | null
    show_desc?: StringNullableWithAggregatesFilter<"Gpts"> | string | null
    show_welcome?: StringNullableWithAggregatesFilter<"Gpts"> | string | null
    show_image?: StringNullableWithAggregatesFilter<"Gpts"> | string | null
  }

  export type PostsCreateInput = {
    url?: string | null
    createdAt?: Date | string
  }

  export type PostsUncheckedCreateInput = {
    id?: number
    url?: string | null
    createdAt?: Date | string
  }

  export type PostsUpdateInput = {
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostsCreateManyInput = {
    id?: number
    url?: string | null
    createdAt?: Date | string
  }

  export type PostsUpdateManyMutationInput = {
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GptsCreateInput = {
    post_id: string
    short_url?: string | null
    author?: string | null
    show_name?: string | null
    show_desc?: string | null
    show_welcome?: string | null
    show_image?: string | null
  }

  export type GptsUncheckedCreateInput = {
    id?: number
    post_id: string
    short_url?: string | null
    author?: string | null
    show_name?: string | null
    show_desc?: string | null
    show_welcome?: string | null
    show_image?: string | null
  }

  export type GptsUpdateInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    short_url?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    show_name?: NullableStringFieldUpdateOperationsInput | string | null
    show_desc?: NullableStringFieldUpdateOperationsInput | string | null
    show_welcome?: NullableStringFieldUpdateOperationsInput | string | null
    show_image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GptsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    post_id?: StringFieldUpdateOperationsInput | string
    short_url?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    show_name?: NullableStringFieldUpdateOperationsInput | string | null
    show_desc?: NullableStringFieldUpdateOperationsInput | string | null
    show_welcome?: NullableStringFieldUpdateOperationsInput | string | null
    show_image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GptsCreateManyInput = {
    id?: number
    post_id: string
    short_url?: string | null
    author?: string | null
    show_name?: string | null
    show_desc?: string | null
    show_welcome?: string | null
    show_image?: string | null
  }

  export type GptsUpdateManyMutationInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    short_url?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    show_name?: NullableStringFieldUpdateOperationsInput | string | null
    show_desc?: NullableStringFieldUpdateOperationsInput | string | null
    show_welcome?: NullableStringFieldUpdateOperationsInput | string | null
    show_image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GptsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    post_id?: StringFieldUpdateOperationsInput | string
    short_url?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    show_name?: NullableStringFieldUpdateOperationsInput | string | null
    show_desc?: NullableStringFieldUpdateOperationsInput | string | null
    show_welcome?: NullableStringFieldUpdateOperationsInput | string | null
    show_image?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PostsCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
  }

  export type PostsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PostsMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
  }

  export type PostsMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
  }

  export type PostsSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type GptsCountOrderByAggregateInput = {
    id?: SortOrder
    post_id?: SortOrder
    short_url?: SortOrder
    author?: SortOrder
    show_name?: SortOrder
    show_desc?: SortOrder
    show_welcome?: SortOrder
    show_image?: SortOrder
  }

  export type GptsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GptsMaxOrderByAggregateInput = {
    id?: SortOrder
    post_id?: SortOrder
    short_url?: SortOrder
    author?: SortOrder
    show_name?: SortOrder
    show_desc?: SortOrder
    show_welcome?: SortOrder
    show_image?: SortOrder
  }

  export type GptsMinOrderByAggregateInput = {
    id?: SortOrder
    post_id?: SortOrder
    short_url?: SortOrder
    author?: SortOrder
    show_name?: SortOrder
    show_desc?: SortOrder
    show_welcome?: SortOrder
    show_image?: SortOrder
  }

  export type GptsSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
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



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use PostsDefaultArgs instead
     */
    export type PostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PostsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GptsDefaultArgs instead
     */
    export type GptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GptsDefaultArgs<ExtArgs>

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