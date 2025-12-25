
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
 * Model School
 * 
 */
export type School = $Result.DefaultSelection<Prisma.$SchoolPayload>
/**
 * Model TeacherSchool
 * 
 */
export type TeacherSchool = $Result.DefaultSelection<Prisma.$TeacherSchoolPayload>
/**
 * Model StudentProfile
 * 
 */
export type StudentProfile = $Result.DefaultSelection<Prisma.$StudentProfilePayload>
/**
 * Model Topic
 * 
 */
export type Topic = $Result.DefaultSelection<Prisma.$TopicPayload>
/**
 * Model SchoolTopic
 * 
 */
export type SchoolTopic = $Result.DefaultSelection<Prisma.$SchoolTopicPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  TEACHER: 'TEACHER',
  STUDENT: 'STUDENT'
};

export type Role = (typeof Role)[keyof typeof Role]


export const QuestionType: {
  MULTIPLE_CHOICE: 'MULTIPLE_CHOICE',
  NUMERIC: 'NUMERIC'
};

export type QuestionType = (typeof QuestionType)[keyof typeof QuestionType]


export const Difficulty: {
  EASY: 'EASY',
  MEDIUM: 'MEDIUM',
  HARD: 'HARD'
};

export type Difficulty = (typeof Difficulty)[keyof typeof Difficulty]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type QuestionType = $Enums.QuestionType

export const QuestionType: typeof $Enums.QuestionType

export type Difficulty = $Enums.Difficulty

export const Difficulty: typeof $Enums.Difficulty

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
   * `prisma.school`: Exposes CRUD operations for the **School** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schools
    * const schools = await prisma.school.findMany()
    * ```
    */
  get school(): Prisma.SchoolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teacherSchool`: Exposes CRUD operations for the **TeacherSchool** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeacherSchools
    * const teacherSchools = await prisma.teacherSchool.findMany()
    * ```
    */
  get teacherSchool(): Prisma.TeacherSchoolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studentProfile`: Exposes CRUD operations for the **StudentProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentProfiles
    * const studentProfiles = await prisma.studentProfile.findMany()
    * ```
    */
  get studentProfile(): Prisma.StudentProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.topic`: Exposes CRUD operations for the **Topic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Topics
    * const topics = await prisma.topic.findMany()
    * ```
    */
  get topic(): Prisma.TopicDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.schoolTopic`: Exposes CRUD operations for the **SchoolTopic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SchoolTopics
    * const schoolTopics = await prisma.schoolTopic.findMany()
    * ```
    */
  get schoolTopic(): Prisma.SchoolTopicDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.1
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
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
    School: 'School',
    TeacherSchool: 'TeacherSchool',
    StudentProfile: 'StudentProfile',
    Topic: 'Topic',
    SchoolTopic: 'SchoolTopic',
    Question: 'Question'
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
      modelProps: "user" | "school" | "teacherSchool" | "studentProfile" | "topic" | "schoolTopic" | "question"
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
      School: {
        payload: Prisma.$SchoolPayload<ExtArgs>
        fields: Prisma.SchoolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SchoolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SchoolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          findFirst: {
            args: Prisma.SchoolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SchoolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          findMany: {
            args: Prisma.SchoolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          create: {
            args: Prisma.SchoolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          createMany: {
            args: Prisma.SchoolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SchoolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          delete: {
            args: Prisma.SchoolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          update: {
            args: Prisma.SchoolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          deleteMany: {
            args: Prisma.SchoolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SchoolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SchoolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          upsert: {
            args: Prisma.SchoolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          aggregate: {
            args: Prisma.SchoolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchool>
          }
          groupBy: {
            args: Prisma.SchoolGroupByArgs<ExtArgs>
            result: $Utils.Optional<SchoolGroupByOutputType>[]
          }
          count: {
            args: Prisma.SchoolCountArgs<ExtArgs>
            result: $Utils.Optional<SchoolCountAggregateOutputType> | number
          }
        }
      }
      TeacherSchool: {
        payload: Prisma.$TeacherSchoolPayload<ExtArgs>
        fields: Prisma.TeacherSchoolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeacherSchoolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSchoolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeacherSchoolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSchoolPayload>
          }
          findFirst: {
            args: Prisma.TeacherSchoolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSchoolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeacherSchoolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSchoolPayload>
          }
          findMany: {
            args: Prisma.TeacherSchoolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSchoolPayload>[]
          }
          create: {
            args: Prisma.TeacherSchoolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSchoolPayload>
          }
          createMany: {
            args: Prisma.TeacherSchoolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeacherSchoolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSchoolPayload>[]
          }
          delete: {
            args: Prisma.TeacherSchoolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSchoolPayload>
          }
          update: {
            args: Prisma.TeacherSchoolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSchoolPayload>
          }
          deleteMany: {
            args: Prisma.TeacherSchoolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeacherSchoolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeacherSchoolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSchoolPayload>[]
          }
          upsert: {
            args: Prisma.TeacherSchoolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSchoolPayload>
          }
          aggregate: {
            args: Prisma.TeacherSchoolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacherSchool>
          }
          groupBy: {
            args: Prisma.TeacherSchoolGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeacherSchoolGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeacherSchoolCountArgs<ExtArgs>
            result: $Utils.Optional<TeacherSchoolCountAggregateOutputType> | number
          }
        }
      }
      StudentProfile: {
        payload: Prisma.$StudentProfilePayload<ExtArgs>
        fields: Prisma.StudentProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          findFirst: {
            args: Prisma.StudentProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          findMany: {
            args: Prisma.StudentProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>[]
          }
          create: {
            args: Prisma.StudentProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          createMany: {
            args: Prisma.StudentProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>[]
          }
          delete: {
            args: Prisma.StudentProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          update: {
            args: Prisma.StudentProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          deleteMany: {
            args: Prisma.StudentProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>[]
          }
          upsert: {
            args: Prisma.StudentProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          aggregate: {
            args: Prisma.StudentProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentProfile>
          }
          groupBy: {
            args: Prisma.StudentProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentProfileCountArgs<ExtArgs>
            result: $Utils.Optional<StudentProfileCountAggregateOutputType> | number
          }
        }
      }
      Topic: {
        payload: Prisma.$TopicPayload<ExtArgs>
        fields: Prisma.TopicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TopicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TopicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          findFirst: {
            args: Prisma.TopicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TopicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          findMany: {
            args: Prisma.TopicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>[]
          }
          create: {
            args: Prisma.TopicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          createMany: {
            args: Prisma.TopicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TopicCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>[]
          }
          delete: {
            args: Prisma.TopicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          update: {
            args: Prisma.TopicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          deleteMany: {
            args: Prisma.TopicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TopicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TopicUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>[]
          }
          upsert: {
            args: Prisma.TopicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          aggregate: {
            args: Prisma.TopicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTopic>
          }
          groupBy: {
            args: Prisma.TopicGroupByArgs<ExtArgs>
            result: $Utils.Optional<TopicGroupByOutputType>[]
          }
          count: {
            args: Prisma.TopicCountArgs<ExtArgs>
            result: $Utils.Optional<TopicCountAggregateOutputType> | number
          }
        }
      }
      SchoolTopic: {
        payload: Prisma.$SchoolTopicPayload<ExtArgs>
        fields: Prisma.SchoolTopicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SchoolTopicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolTopicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SchoolTopicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolTopicPayload>
          }
          findFirst: {
            args: Prisma.SchoolTopicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolTopicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SchoolTopicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolTopicPayload>
          }
          findMany: {
            args: Prisma.SchoolTopicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolTopicPayload>[]
          }
          create: {
            args: Prisma.SchoolTopicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolTopicPayload>
          }
          createMany: {
            args: Prisma.SchoolTopicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SchoolTopicCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolTopicPayload>[]
          }
          delete: {
            args: Prisma.SchoolTopicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolTopicPayload>
          }
          update: {
            args: Prisma.SchoolTopicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolTopicPayload>
          }
          deleteMany: {
            args: Prisma.SchoolTopicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SchoolTopicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SchoolTopicUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolTopicPayload>[]
          }
          upsert: {
            args: Prisma.SchoolTopicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolTopicPayload>
          }
          aggregate: {
            args: Prisma.SchoolTopicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchoolTopic>
          }
          groupBy: {
            args: Prisma.SchoolTopicGroupByArgs<ExtArgs>
            result: $Utils.Optional<SchoolTopicGroupByOutputType>[]
          }
          count: {
            args: Prisma.SchoolTopicCountArgs<ExtArgs>
            result: $Utils.Optional<SchoolTopicCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
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
    user?: UserOmit
    school?: SchoolOmit
    teacherSchool?: TeacherSchoolOmit
    studentProfile?: StudentProfileOmit
    topic?: TopicOmit
    schoolTopic?: SchoolTopicOmit
    question?: QuestionOmit
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
    teacherSchools: number
    createdTopics: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacherSchools?: boolean | UserCountOutputTypeCountTeacherSchoolsArgs
    createdTopics?: boolean | UserCountOutputTypeCountCreatedTopicsArgs
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
  export type UserCountOutputTypeCountTeacherSchoolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherSchoolWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedTopicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TopicWhereInput
  }


  /**
   * Count Type SchoolCountOutputType
   */

  export type SchoolCountOutputType = {
    teacherSchools: number
    students: number
    schoolTopics: number
  }

  export type SchoolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacherSchools?: boolean | SchoolCountOutputTypeCountTeacherSchoolsArgs
    students?: boolean | SchoolCountOutputTypeCountStudentsArgs
    schoolTopics?: boolean | SchoolCountOutputTypeCountSchoolTopicsArgs
  }

  // Custom InputTypes
  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolCountOutputType
     */
    select?: SchoolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountTeacherSchoolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherSchoolWhereInput
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentProfileWhereInput
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountSchoolTopicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchoolTopicWhereInput
  }


  /**
   * Count Type TopicCountOutputType
   */

  export type TopicCountOutputType = {
    schoolTopics: number
    questions: number
  }

  export type TopicCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schoolTopics?: boolean | TopicCountOutputTypeCountSchoolTopicsArgs
    questions?: boolean | TopicCountOutputTypeCountQuestionsArgs
  }

  // Custom InputTypes
  /**
   * TopicCountOutputType without action
   */
  export type TopicCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicCountOutputType
     */
    select?: TopicCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TopicCountOutputType without action
   */
  export type TopicCountOutputTypeCountSchoolTopicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchoolTopicWhereInput
  }

  /**
   * TopicCountOutputType without action
   */
  export type TopicCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    role: $Enums.Role
    createdAt: Date
    _count: UserCountAggregateOutputType | null
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
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    teacherSchools?: boolean | User$teacherSchoolsArgs<ExtArgs>
    studentProfile?: boolean | User$studentProfileArgs<ExtArgs>
    createdTopics?: boolean | User$createdTopicsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "role" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacherSchools?: boolean | User$teacherSchoolsArgs<ExtArgs>
    studentProfile?: boolean | User$studentProfileArgs<ExtArgs>
    createdTopics?: boolean | User$createdTopicsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      teacherSchools: Prisma.$TeacherSchoolPayload<ExtArgs>[]
      studentProfile: Prisma.$StudentProfilePayload<ExtArgs> | null
      createdTopics: Prisma.$TopicPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      role: $Enums.Role
      createdAt: Date
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
    teacherSchools<T extends User$teacherSchoolsArgs<ExtArgs> = {}>(args?: Subset<T, User$teacherSchoolsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherSchoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    studentProfile<T extends User$studentProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$studentProfileArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    createdTopics<T extends User$createdTopicsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdTopicsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
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
   * User.teacherSchools
   */
  export type User$teacherSchoolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSchool
     */
    select?: TeacherSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSchool
     */
    omit?: TeacherSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSchoolInclude<ExtArgs> | null
    where?: TeacherSchoolWhereInput
    orderBy?: TeacherSchoolOrderByWithRelationInput | TeacherSchoolOrderByWithRelationInput[]
    cursor?: TeacherSchoolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeacherSchoolScalarFieldEnum | TeacherSchoolScalarFieldEnum[]
  }

  /**
   * User.studentProfile
   */
  export type User$studentProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    where?: StudentProfileWhereInput
  }

  /**
   * User.createdTopics
   */
  export type User$createdTopicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    where?: TopicWhereInput
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    cursor?: TopicWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
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
   * Model School
   */

  export type AggregateSchool = {
    _count: SchoolCountAggregateOutputType | null
    _min: SchoolMinAggregateOutputType | null
    _max: SchoolMaxAggregateOutputType | null
  }

  export type SchoolMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type SchoolMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type SchoolCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type SchoolMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type SchoolMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type SchoolCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type SchoolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which School to aggregate.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schools
    **/
    _count?: true | SchoolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchoolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchoolMaxAggregateInputType
  }

  export type GetSchoolAggregateType<T extends SchoolAggregateArgs> = {
        [P in keyof T & keyof AggregateSchool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchool[P]>
      : GetScalarType<T[P], AggregateSchool[P]>
  }




  export type SchoolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchoolWhereInput
    orderBy?: SchoolOrderByWithAggregationInput | SchoolOrderByWithAggregationInput[]
    by: SchoolScalarFieldEnum[] | SchoolScalarFieldEnum
    having?: SchoolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchoolCountAggregateInputType | true
    _min?: SchoolMinAggregateInputType
    _max?: SchoolMaxAggregateInputType
  }

  export type SchoolGroupByOutputType = {
    id: string
    name: string
    _count: SchoolCountAggregateOutputType | null
    _min: SchoolMinAggregateOutputType | null
    _max: SchoolMaxAggregateOutputType | null
  }

  type GetSchoolGroupByPayload<T extends SchoolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchoolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchoolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchoolGroupByOutputType[P]>
            : GetScalarType<T[P], SchoolGroupByOutputType[P]>
        }
      >
    >


  export type SchoolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    teacherSchools?: boolean | School$teacherSchoolsArgs<ExtArgs>
    students?: boolean | School$studentsArgs<ExtArgs>
    schoolTopics?: boolean | School$schoolTopicsArgs<ExtArgs>
    _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type SchoolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["school"]>
  export type SchoolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacherSchools?: boolean | School$teacherSchoolsArgs<ExtArgs>
    students?: boolean | School$studentsArgs<ExtArgs>
    schoolTopics?: boolean | School$schoolTopicsArgs<ExtArgs>
    _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SchoolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SchoolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SchoolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "School"
    objects: {
      teacherSchools: Prisma.$TeacherSchoolPayload<ExtArgs>[]
      students: Prisma.$StudentProfilePayload<ExtArgs>[]
      schoolTopics: Prisma.$SchoolTopicPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["school"]>
    composites: {}
  }

  type SchoolGetPayload<S extends boolean | null | undefined | SchoolDefaultArgs> = $Result.GetResult<Prisma.$SchoolPayload, S>

  type SchoolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SchoolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SchoolCountAggregateInputType | true
    }

  export interface SchoolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['School'], meta: { name: 'School' } }
    /**
     * Find zero or one School that matches the filter.
     * @param {SchoolFindUniqueArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SchoolFindUniqueArgs>(args: SelectSubset<T, SchoolFindUniqueArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one School that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SchoolFindUniqueOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SchoolFindUniqueOrThrowArgs>(args: SelectSubset<T, SchoolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first School that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindFirstArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SchoolFindFirstArgs>(args?: SelectSubset<T, SchoolFindFirstArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first School that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindFirstOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SchoolFindFirstOrThrowArgs>(args?: SelectSubset<T, SchoolFindFirstOrThrowArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schools
     * const schools = await prisma.school.findMany()
     * 
     * // Get first 10 Schools
     * const schools = await prisma.school.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const schoolWithIdOnly = await prisma.school.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SchoolFindManyArgs>(args?: SelectSubset<T, SchoolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a School.
     * @param {SchoolCreateArgs} args - Arguments to create a School.
     * @example
     * // Create one School
     * const School = await prisma.school.create({
     *   data: {
     *     // ... data to create a School
     *   }
     * })
     * 
     */
    create<T extends SchoolCreateArgs>(args: SelectSubset<T, SchoolCreateArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schools.
     * @param {SchoolCreateManyArgs} args - Arguments to create many Schools.
     * @example
     * // Create many Schools
     * const school = await prisma.school.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SchoolCreateManyArgs>(args?: SelectSubset<T, SchoolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schools and returns the data saved in the database.
     * @param {SchoolCreateManyAndReturnArgs} args - Arguments to create many Schools.
     * @example
     * // Create many Schools
     * const school = await prisma.school.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schools and only return the `id`
     * const schoolWithIdOnly = await prisma.school.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SchoolCreateManyAndReturnArgs>(args?: SelectSubset<T, SchoolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a School.
     * @param {SchoolDeleteArgs} args - Arguments to delete one School.
     * @example
     * // Delete one School
     * const School = await prisma.school.delete({
     *   where: {
     *     // ... filter to delete one School
     *   }
     * })
     * 
     */
    delete<T extends SchoolDeleteArgs>(args: SelectSubset<T, SchoolDeleteArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one School.
     * @param {SchoolUpdateArgs} args - Arguments to update one School.
     * @example
     * // Update one School
     * const school = await prisma.school.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SchoolUpdateArgs>(args: SelectSubset<T, SchoolUpdateArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schools.
     * @param {SchoolDeleteManyArgs} args - Arguments to filter Schools to delete.
     * @example
     * // Delete a few Schools
     * const { count } = await prisma.school.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SchoolDeleteManyArgs>(args?: SelectSubset<T, SchoolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schools
     * const school = await prisma.school.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SchoolUpdateManyArgs>(args: SelectSubset<T, SchoolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schools and returns the data updated in the database.
     * @param {SchoolUpdateManyAndReturnArgs} args - Arguments to update many Schools.
     * @example
     * // Update many Schools
     * const school = await prisma.school.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schools and only return the `id`
     * const schoolWithIdOnly = await prisma.school.updateManyAndReturn({
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
    updateManyAndReturn<T extends SchoolUpdateManyAndReturnArgs>(args: SelectSubset<T, SchoolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one School.
     * @param {SchoolUpsertArgs} args - Arguments to update or create a School.
     * @example
     * // Update or create a School
     * const school = await prisma.school.upsert({
     *   create: {
     *     // ... data to create a School
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the School we want to update
     *   }
     * })
     */
    upsert<T extends SchoolUpsertArgs>(args: SelectSubset<T, SchoolUpsertArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolCountArgs} args - Arguments to filter Schools to count.
     * @example
     * // Count the number of Schools
     * const count = await prisma.school.count({
     *   where: {
     *     // ... the filter for the Schools we want to count
     *   }
     * })
    **/
    count<T extends SchoolCountArgs>(
      args?: Subset<T, SchoolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchoolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SchoolAggregateArgs>(args: Subset<T, SchoolAggregateArgs>): Prisma.PrismaPromise<GetSchoolAggregateType<T>>

    /**
     * Group by School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolGroupByArgs} args - Group by arguments.
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
      T extends SchoolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SchoolGroupByArgs['orderBy'] }
        : { orderBy?: SchoolGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SchoolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchoolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the School model
   */
  readonly fields: SchoolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for School.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SchoolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacherSchools<T extends School$teacherSchoolsArgs<ExtArgs> = {}>(args?: Subset<T, School$teacherSchoolsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherSchoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    students<T extends School$studentsArgs<ExtArgs> = {}>(args?: Subset<T, School$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    schoolTopics<T extends School$schoolTopicsArgs<ExtArgs> = {}>(args?: Subset<T, School$schoolTopicsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolTopicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the School model
   */
  interface SchoolFieldRefs {
    readonly id: FieldRef<"School", 'String'>
    readonly name: FieldRef<"School", 'String'>
  }
    

  // Custom InputTypes
  /**
   * School findUnique
   */
  export type SchoolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School findUniqueOrThrow
   */
  export type SchoolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School findFirst
   */
  export type SchoolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School findFirstOrThrow
   */
  export type SchoolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School findMany
   */
  export type SchoolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which Schools to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School create
   */
  export type SchoolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The data needed to create a School.
     */
    data: XOR<SchoolCreateInput, SchoolUncheckedCreateInput>
  }

  /**
   * School createMany
   */
  export type SchoolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schools.
     */
    data: SchoolCreateManyInput | SchoolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * School createManyAndReturn
   */
  export type SchoolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * The data used to create many Schools.
     */
    data: SchoolCreateManyInput | SchoolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * School update
   */
  export type SchoolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The data needed to update a School.
     */
    data: XOR<SchoolUpdateInput, SchoolUncheckedUpdateInput>
    /**
     * Choose, which School to update.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School updateMany
   */
  export type SchoolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schools.
     */
    data: XOR<SchoolUpdateManyMutationInput, SchoolUncheckedUpdateManyInput>
    /**
     * Filter which Schools to update
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to update.
     */
    limit?: number
  }

  /**
   * School updateManyAndReturn
   */
  export type SchoolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * The data used to update Schools.
     */
    data: XOR<SchoolUpdateManyMutationInput, SchoolUncheckedUpdateManyInput>
    /**
     * Filter which Schools to update
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to update.
     */
    limit?: number
  }

  /**
   * School upsert
   */
  export type SchoolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The filter to search for the School to update in case it exists.
     */
    where: SchoolWhereUniqueInput
    /**
     * In case the School found by the `where` argument doesn't exist, create a new School with this data.
     */
    create: XOR<SchoolCreateInput, SchoolUncheckedCreateInput>
    /**
     * In case the School was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SchoolUpdateInput, SchoolUncheckedUpdateInput>
  }

  /**
   * School delete
   */
  export type SchoolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter which School to delete.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School deleteMany
   */
  export type SchoolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schools to delete
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to delete.
     */
    limit?: number
  }

  /**
   * School.teacherSchools
   */
  export type School$teacherSchoolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSchool
     */
    select?: TeacherSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSchool
     */
    omit?: TeacherSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSchoolInclude<ExtArgs> | null
    where?: TeacherSchoolWhereInput
    orderBy?: TeacherSchoolOrderByWithRelationInput | TeacherSchoolOrderByWithRelationInput[]
    cursor?: TeacherSchoolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeacherSchoolScalarFieldEnum | TeacherSchoolScalarFieldEnum[]
  }

  /**
   * School.students
   */
  export type School$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    where?: StudentProfileWhereInput
    orderBy?: StudentProfileOrderByWithRelationInput | StudentProfileOrderByWithRelationInput[]
    cursor?: StudentProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentProfileScalarFieldEnum | StudentProfileScalarFieldEnum[]
  }

  /**
   * School.schoolTopics
   */
  export type School$schoolTopicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolTopic
     */
    select?: SchoolTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolTopic
     */
    omit?: SchoolTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolTopicInclude<ExtArgs> | null
    where?: SchoolTopicWhereInput
    orderBy?: SchoolTopicOrderByWithRelationInput | SchoolTopicOrderByWithRelationInput[]
    cursor?: SchoolTopicWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SchoolTopicScalarFieldEnum | SchoolTopicScalarFieldEnum[]
  }

  /**
   * School without action
   */
  export type SchoolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
  }


  /**
   * Model TeacherSchool
   */

  export type AggregateTeacherSchool = {
    _count: TeacherSchoolCountAggregateOutputType | null
    _min: TeacherSchoolMinAggregateOutputType | null
    _max: TeacherSchoolMaxAggregateOutputType | null
  }

  export type TeacherSchoolMinAggregateOutputType = {
    id: string | null
    teacherId: string | null
    schoolId: string | null
  }

  export type TeacherSchoolMaxAggregateOutputType = {
    id: string | null
    teacherId: string | null
    schoolId: string | null
  }

  export type TeacherSchoolCountAggregateOutputType = {
    id: number
    teacherId: number
    schoolId: number
    _all: number
  }


  export type TeacherSchoolMinAggregateInputType = {
    id?: true
    teacherId?: true
    schoolId?: true
  }

  export type TeacherSchoolMaxAggregateInputType = {
    id?: true
    teacherId?: true
    schoolId?: true
  }

  export type TeacherSchoolCountAggregateInputType = {
    id?: true
    teacherId?: true
    schoolId?: true
    _all?: true
  }

  export type TeacherSchoolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeacherSchool to aggregate.
     */
    where?: TeacherSchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherSchools to fetch.
     */
    orderBy?: TeacherSchoolOrderByWithRelationInput | TeacherSchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeacherSchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherSchools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherSchools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeacherSchools
    **/
    _count?: true | TeacherSchoolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherSchoolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherSchoolMaxAggregateInputType
  }

  export type GetTeacherSchoolAggregateType<T extends TeacherSchoolAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacherSchool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacherSchool[P]>
      : GetScalarType<T[P], AggregateTeacherSchool[P]>
  }




  export type TeacherSchoolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherSchoolWhereInput
    orderBy?: TeacherSchoolOrderByWithAggregationInput | TeacherSchoolOrderByWithAggregationInput[]
    by: TeacherSchoolScalarFieldEnum[] | TeacherSchoolScalarFieldEnum
    having?: TeacherSchoolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherSchoolCountAggregateInputType | true
    _min?: TeacherSchoolMinAggregateInputType
    _max?: TeacherSchoolMaxAggregateInputType
  }

  export type TeacherSchoolGroupByOutputType = {
    id: string
    teacherId: string
    schoolId: string
    _count: TeacherSchoolCountAggregateOutputType | null
    _min: TeacherSchoolMinAggregateOutputType | null
    _max: TeacherSchoolMaxAggregateOutputType | null
  }

  type GetTeacherSchoolGroupByPayload<T extends TeacherSchoolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherSchoolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherSchoolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherSchoolGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherSchoolGroupByOutputType[P]>
        }
      >
    >


  export type TeacherSchoolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacherId?: boolean
    schoolId?: boolean
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacherSchool"]>

  export type TeacherSchoolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacherId?: boolean
    schoolId?: boolean
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacherSchool"]>

  export type TeacherSchoolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacherId?: boolean
    schoolId?: boolean
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacherSchool"]>

  export type TeacherSchoolSelectScalar = {
    id?: boolean
    teacherId?: boolean
    schoolId?: boolean
  }

  export type TeacherSchoolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teacherId" | "schoolId", ExtArgs["result"]["teacherSchool"]>
  export type TeacherSchoolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }
  export type TeacherSchoolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }
  export type TeacherSchoolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }

  export type $TeacherSchoolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeacherSchool"
    objects: {
      teacher: Prisma.$UserPayload<ExtArgs>
      school: Prisma.$SchoolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      teacherId: string
      schoolId: string
    }, ExtArgs["result"]["teacherSchool"]>
    composites: {}
  }

  type TeacherSchoolGetPayload<S extends boolean | null | undefined | TeacherSchoolDefaultArgs> = $Result.GetResult<Prisma.$TeacherSchoolPayload, S>

  type TeacherSchoolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeacherSchoolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeacherSchoolCountAggregateInputType | true
    }

  export interface TeacherSchoolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeacherSchool'], meta: { name: 'TeacherSchool' } }
    /**
     * Find zero or one TeacherSchool that matches the filter.
     * @param {TeacherSchoolFindUniqueArgs} args - Arguments to find a TeacherSchool
     * @example
     * // Get one TeacherSchool
     * const teacherSchool = await prisma.teacherSchool.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeacherSchoolFindUniqueArgs>(args: SelectSubset<T, TeacherSchoolFindUniqueArgs<ExtArgs>>): Prisma__TeacherSchoolClient<$Result.GetResult<Prisma.$TeacherSchoolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeacherSchool that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeacherSchoolFindUniqueOrThrowArgs} args - Arguments to find a TeacherSchool
     * @example
     * // Get one TeacherSchool
     * const teacherSchool = await prisma.teacherSchool.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeacherSchoolFindUniqueOrThrowArgs>(args: SelectSubset<T, TeacherSchoolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeacherSchoolClient<$Result.GetResult<Prisma.$TeacherSchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeacherSchool that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherSchoolFindFirstArgs} args - Arguments to find a TeacherSchool
     * @example
     * // Get one TeacherSchool
     * const teacherSchool = await prisma.teacherSchool.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeacherSchoolFindFirstArgs>(args?: SelectSubset<T, TeacherSchoolFindFirstArgs<ExtArgs>>): Prisma__TeacherSchoolClient<$Result.GetResult<Prisma.$TeacherSchoolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeacherSchool that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherSchoolFindFirstOrThrowArgs} args - Arguments to find a TeacherSchool
     * @example
     * // Get one TeacherSchool
     * const teacherSchool = await prisma.teacherSchool.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeacherSchoolFindFirstOrThrowArgs>(args?: SelectSubset<T, TeacherSchoolFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeacherSchoolClient<$Result.GetResult<Prisma.$TeacherSchoolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeacherSchools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherSchoolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeacherSchools
     * const teacherSchools = await prisma.teacherSchool.findMany()
     * 
     * // Get first 10 TeacherSchools
     * const teacherSchools = await prisma.teacherSchool.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teacherSchoolWithIdOnly = await prisma.teacherSchool.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeacherSchoolFindManyArgs>(args?: SelectSubset<T, TeacherSchoolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherSchoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeacherSchool.
     * @param {TeacherSchoolCreateArgs} args - Arguments to create a TeacherSchool.
     * @example
     * // Create one TeacherSchool
     * const TeacherSchool = await prisma.teacherSchool.create({
     *   data: {
     *     // ... data to create a TeacherSchool
     *   }
     * })
     * 
     */
    create<T extends TeacherSchoolCreateArgs>(args: SelectSubset<T, TeacherSchoolCreateArgs<ExtArgs>>): Prisma__TeacherSchoolClient<$Result.GetResult<Prisma.$TeacherSchoolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeacherSchools.
     * @param {TeacherSchoolCreateManyArgs} args - Arguments to create many TeacherSchools.
     * @example
     * // Create many TeacherSchools
     * const teacherSchool = await prisma.teacherSchool.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeacherSchoolCreateManyArgs>(args?: SelectSubset<T, TeacherSchoolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeacherSchools and returns the data saved in the database.
     * @param {TeacherSchoolCreateManyAndReturnArgs} args - Arguments to create many TeacherSchools.
     * @example
     * // Create many TeacherSchools
     * const teacherSchool = await prisma.teacherSchool.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeacherSchools and only return the `id`
     * const teacherSchoolWithIdOnly = await prisma.teacherSchool.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeacherSchoolCreateManyAndReturnArgs>(args?: SelectSubset<T, TeacherSchoolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherSchoolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeacherSchool.
     * @param {TeacherSchoolDeleteArgs} args - Arguments to delete one TeacherSchool.
     * @example
     * // Delete one TeacherSchool
     * const TeacherSchool = await prisma.teacherSchool.delete({
     *   where: {
     *     // ... filter to delete one TeacherSchool
     *   }
     * })
     * 
     */
    delete<T extends TeacherSchoolDeleteArgs>(args: SelectSubset<T, TeacherSchoolDeleteArgs<ExtArgs>>): Prisma__TeacherSchoolClient<$Result.GetResult<Prisma.$TeacherSchoolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeacherSchool.
     * @param {TeacherSchoolUpdateArgs} args - Arguments to update one TeacherSchool.
     * @example
     * // Update one TeacherSchool
     * const teacherSchool = await prisma.teacherSchool.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeacherSchoolUpdateArgs>(args: SelectSubset<T, TeacherSchoolUpdateArgs<ExtArgs>>): Prisma__TeacherSchoolClient<$Result.GetResult<Prisma.$TeacherSchoolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeacherSchools.
     * @param {TeacherSchoolDeleteManyArgs} args - Arguments to filter TeacherSchools to delete.
     * @example
     * // Delete a few TeacherSchools
     * const { count } = await prisma.teacherSchool.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeacherSchoolDeleteManyArgs>(args?: SelectSubset<T, TeacherSchoolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeacherSchools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherSchoolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeacherSchools
     * const teacherSchool = await prisma.teacherSchool.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeacherSchoolUpdateManyArgs>(args: SelectSubset<T, TeacherSchoolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeacherSchools and returns the data updated in the database.
     * @param {TeacherSchoolUpdateManyAndReturnArgs} args - Arguments to update many TeacherSchools.
     * @example
     * // Update many TeacherSchools
     * const teacherSchool = await prisma.teacherSchool.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeacherSchools and only return the `id`
     * const teacherSchoolWithIdOnly = await prisma.teacherSchool.updateManyAndReturn({
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
    updateManyAndReturn<T extends TeacherSchoolUpdateManyAndReturnArgs>(args: SelectSubset<T, TeacherSchoolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherSchoolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeacherSchool.
     * @param {TeacherSchoolUpsertArgs} args - Arguments to update or create a TeacherSchool.
     * @example
     * // Update or create a TeacherSchool
     * const teacherSchool = await prisma.teacherSchool.upsert({
     *   create: {
     *     // ... data to create a TeacherSchool
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeacherSchool we want to update
     *   }
     * })
     */
    upsert<T extends TeacherSchoolUpsertArgs>(args: SelectSubset<T, TeacherSchoolUpsertArgs<ExtArgs>>): Prisma__TeacherSchoolClient<$Result.GetResult<Prisma.$TeacherSchoolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeacherSchools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherSchoolCountArgs} args - Arguments to filter TeacherSchools to count.
     * @example
     * // Count the number of TeacherSchools
     * const count = await prisma.teacherSchool.count({
     *   where: {
     *     // ... the filter for the TeacherSchools we want to count
     *   }
     * })
    **/
    count<T extends TeacherSchoolCountArgs>(
      args?: Subset<T, TeacherSchoolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherSchoolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeacherSchool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherSchoolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeacherSchoolAggregateArgs>(args: Subset<T, TeacherSchoolAggregateArgs>): Prisma.PrismaPromise<GetTeacherSchoolAggregateType<T>>

    /**
     * Group by TeacherSchool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherSchoolGroupByArgs} args - Group by arguments.
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
      T extends TeacherSchoolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeacherSchoolGroupByArgs['orderBy'] }
        : { orderBy?: TeacherSchoolGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeacherSchoolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherSchoolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeacherSchool model
   */
  readonly fields: TeacherSchoolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeacherSchool.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeacherSchoolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacher<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    school<T extends SchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchoolDefaultArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TeacherSchool model
   */
  interface TeacherSchoolFieldRefs {
    readonly id: FieldRef<"TeacherSchool", 'String'>
    readonly teacherId: FieldRef<"TeacherSchool", 'String'>
    readonly schoolId: FieldRef<"TeacherSchool", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TeacherSchool findUnique
   */
  export type TeacherSchoolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSchool
     */
    select?: TeacherSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSchool
     */
    omit?: TeacherSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSchoolInclude<ExtArgs> | null
    /**
     * Filter, which TeacherSchool to fetch.
     */
    where: TeacherSchoolWhereUniqueInput
  }

  /**
   * TeacherSchool findUniqueOrThrow
   */
  export type TeacherSchoolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSchool
     */
    select?: TeacherSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSchool
     */
    omit?: TeacherSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSchoolInclude<ExtArgs> | null
    /**
     * Filter, which TeacherSchool to fetch.
     */
    where: TeacherSchoolWhereUniqueInput
  }

  /**
   * TeacherSchool findFirst
   */
  export type TeacherSchoolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSchool
     */
    select?: TeacherSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSchool
     */
    omit?: TeacherSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSchoolInclude<ExtArgs> | null
    /**
     * Filter, which TeacherSchool to fetch.
     */
    where?: TeacherSchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherSchools to fetch.
     */
    orderBy?: TeacherSchoolOrderByWithRelationInput | TeacherSchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeacherSchools.
     */
    cursor?: TeacherSchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherSchools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherSchools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeacherSchools.
     */
    distinct?: TeacherSchoolScalarFieldEnum | TeacherSchoolScalarFieldEnum[]
  }

  /**
   * TeacherSchool findFirstOrThrow
   */
  export type TeacherSchoolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSchool
     */
    select?: TeacherSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSchool
     */
    omit?: TeacherSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSchoolInclude<ExtArgs> | null
    /**
     * Filter, which TeacherSchool to fetch.
     */
    where?: TeacherSchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherSchools to fetch.
     */
    orderBy?: TeacherSchoolOrderByWithRelationInput | TeacherSchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeacherSchools.
     */
    cursor?: TeacherSchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherSchools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherSchools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeacherSchools.
     */
    distinct?: TeacherSchoolScalarFieldEnum | TeacherSchoolScalarFieldEnum[]
  }

  /**
   * TeacherSchool findMany
   */
  export type TeacherSchoolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSchool
     */
    select?: TeacherSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSchool
     */
    omit?: TeacherSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSchoolInclude<ExtArgs> | null
    /**
     * Filter, which TeacherSchools to fetch.
     */
    where?: TeacherSchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherSchools to fetch.
     */
    orderBy?: TeacherSchoolOrderByWithRelationInput | TeacherSchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeacherSchools.
     */
    cursor?: TeacherSchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherSchools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherSchools.
     */
    skip?: number
    distinct?: TeacherSchoolScalarFieldEnum | TeacherSchoolScalarFieldEnum[]
  }

  /**
   * TeacherSchool create
   */
  export type TeacherSchoolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSchool
     */
    select?: TeacherSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSchool
     */
    omit?: TeacherSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSchoolInclude<ExtArgs> | null
    /**
     * The data needed to create a TeacherSchool.
     */
    data: XOR<TeacherSchoolCreateInput, TeacherSchoolUncheckedCreateInput>
  }

  /**
   * TeacherSchool createMany
   */
  export type TeacherSchoolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeacherSchools.
     */
    data: TeacherSchoolCreateManyInput | TeacherSchoolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeacherSchool createManyAndReturn
   */
  export type TeacherSchoolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSchool
     */
    select?: TeacherSchoolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSchool
     */
    omit?: TeacherSchoolOmit<ExtArgs> | null
    /**
     * The data used to create many TeacherSchools.
     */
    data: TeacherSchoolCreateManyInput | TeacherSchoolCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSchoolIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeacherSchool update
   */
  export type TeacherSchoolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSchool
     */
    select?: TeacherSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSchool
     */
    omit?: TeacherSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSchoolInclude<ExtArgs> | null
    /**
     * The data needed to update a TeacherSchool.
     */
    data: XOR<TeacherSchoolUpdateInput, TeacherSchoolUncheckedUpdateInput>
    /**
     * Choose, which TeacherSchool to update.
     */
    where: TeacherSchoolWhereUniqueInput
  }

  /**
   * TeacherSchool updateMany
   */
  export type TeacherSchoolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeacherSchools.
     */
    data: XOR<TeacherSchoolUpdateManyMutationInput, TeacherSchoolUncheckedUpdateManyInput>
    /**
     * Filter which TeacherSchools to update
     */
    where?: TeacherSchoolWhereInput
    /**
     * Limit how many TeacherSchools to update.
     */
    limit?: number
  }

  /**
   * TeacherSchool updateManyAndReturn
   */
  export type TeacherSchoolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSchool
     */
    select?: TeacherSchoolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSchool
     */
    omit?: TeacherSchoolOmit<ExtArgs> | null
    /**
     * The data used to update TeacherSchools.
     */
    data: XOR<TeacherSchoolUpdateManyMutationInput, TeacherSchoolUncheckedUpdateManyInput>
    /**
     * Filter which TeacherSchools to update
     */
    where?: TeacherSchoolWhereInput
    /**
     * Limit how many TeacherSchools to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSchoolIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeacherSchool upsert
   */
  export type TeacherSchoolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSchool
     */
    select?: TeacherSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSchool
     */
    omit?: TeacherSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSchoolInclude<ExtArgs> | null
    /**
     * The filter to search for the TeacherSchool to update in case it exists.
     */
    where: TeacherSchoolWhereUniqueInput
    /**
     * In case the TeacherSchool found by the `where` argument doesn't exist, create a new TeacherSchool with this data.
     */
    create: XOR<TeacherSchoolCreateInput, TeacherSchoolUncheckedCreateInput>
    /**
     * In case the TeacherSchool was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeacherSchoolUpdateInput, TeacherSchoolUncheckedUpdateInput>
  }

  /**
   * TeacherSchool delete
   */
  export type TeacherSchoolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSchool
     */
    select?: TeacherSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSchool
     */
    omit?: TeacherSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSchoolInclude<ExtArgs> | null
    /**
     * Filter which TeacherSchool to delete.
     */
    where: TeacherSchoolWhereUniqueInput
  }

  /**
   * TeacherSchool deleteMany
   */
  export type TeacherSchoolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeacherSchools to delete
     */
    where?: TeacherSchoolWhereInput
    /**
     * Limit how many TeacherSchools to delete.
     */
    limit?: number
  }

  /**
   * TeacherSchool without action
   */
  export type TeacherSchoolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSchool
     */
    select?: TeacherSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSchool
     */
    omit?: TeacherSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSchoolInclude<ExtArgs> | null
  }


  /**
   * Model StudentProfile
   */

  export type AggregateStudentProfile = {
    _count: StudentProfileCountAggregateOutputType | null
    _avg: StudentProfileAvgAggregateOutputType | null
    _sum: StudentProfileSumAggregateOutputType | null
    _min: StudentProfileMinAggregateOutputType | null
    _max: StudentProfileMaxAggregateOutputType | null
  }

  export type StudentProfileAvgAggregateOutputType = {
    grade: number | null
  }

  export type StudentProfileSumAggregateOutputType = {
    grade: number | null
  }

  export type StudentProfileMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    schoolId: string | null
    firstName: string | null
    lastName: string | null
    grade: number | null
    city: string | null
  }

  export type StudentProfileMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    schoolId: string | null
    firstName: string | null
    lastName: string | null
    grade: number | null
    city: string | null
  }

  export type StudentProfileCountAggregateOutputType = {
    id: number
    studentId: number
    schoolId: number
    firstName: number
    lastName: number
    grade: number
    city: number
    _all: number
  }


  export type StudentProfileAvgAggregateInputType = {
    grade?: true
  }

  export type StudentProfileSumAggregateInputType = {
    grade?: true
  }

  export type StudentProfileMinAggregateInputType = {
    id?: true
    studentId?: true
    schoolId?: true
    firstName?: true
    lastName?: true
    grade?: true
    city?: true
  }

  export type StudentProfileMaxAggregateInputType = {
    id?: true
    studentId?: true
    schoolId?: true
    firstName?: true
    lastName?: true
    grade?: true
    city?: true
  }

  export type StudentProfileCountAggregateInputType = {
    id?: true
    studentId?: true
    schoolId?: true
    firstName?: true
    lastName?: true
    grade?: true
    city?: true
    _all?: true
  }

  export type StudentProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentProfile to aggregate.
     */
    where?: StudentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentProfiles to fetch.
     */
    orderBy?: StudentProfileOrderByWithRelationInput | StudentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentProfiles
    **/
    _count?: true | StudentProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentProfileMaxAggregateInputType
  }

  export type GetStudentProfileAggregateType<T extends StudentProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentProfile[P]>
      : GetScalarType<T[P], AggregateStudentProfile[P]>
  }




  export type StudentProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentProfileWhereInput
    orderBy?: StudentProfileOrderByWithAggregationInput | StudentProfileOrderByWithAggregationInput[]
    by: StudentProfileScalarFieldEnum[] | StudentProfileScalarFieldEnum
    having?: StudentProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentProfileCountAggregateInputType | true
    _avg?: StudentProfileAvgAggregateInputType
    _sum?: StudentProfileSumAggregateInputType
    _min?: StudentProfileMinAggregateInputType
    _max?: StudentProfileMaxAggregateInputType
  }

  export type StudentProfileGroupByOutputType = {
    id: string
    studentId: string
    schoolId: string
    firstName: string | null
    lastName: string | null
    grade: number | null
    city: string | null
    _count: StudentProfileCountAggregateOutputType | null
    _avg: StudentProfileAvgAggregateOutputType | null
    _sum: StudentProfileSumAggregateOutputType | null
    _min: StudentProfileMinAggregateOutputType | null
    _max: StudentProfileMaxAggregateOutputType | null
  }

  type GetStudentProfileGroupByPayload<T extends StudentProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentProfileGroupByOutputType[P]>
            : GetScalarType<T[P], StudentProfileGroupByOutputType[P]>
        }
      >
    >


  export type StudentProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    schoolId?: boolean
    firstName?: boolean
    lastName?: boolean
    grade?: boolean
    city?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentProfile"]>

  export type StudentProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    schoolId?: boolean
    firstName?: boolean
    lastName?: boolean
    grade?: boolean
    city?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentProfile"]>

  export type StudentProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    schoolId?: boolean
    firstName?: boolean
    lastName?: boolean
    grade?: boolean
    city?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentProfile"]>

  export type StudentProfileSelectScalar = {
    id?: boolean
    studentId?: boolean
    schoolId?: boolean
    firstName?: boolean
    lastName?: boolean
    grade?: boolean
    city?: boolean
  }

  export type StudentProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "schoolId" | "firstName" | "lastName" | "grade" | "city", ExtArgs["result"]["studentProfile"]>
  export type StudentProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }
  export type StudentProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }
  export type StudentProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }

  export type $StudentProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentProfile"
    objects: {
      student: Prisma.$UserPayload<ExtArgs>
      school: Prisma.$SchoolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      schoolId: string
      firstName: string | null
      lastName: string | null
      grade: number | null
      city: string | null
    }, ExtArgs["result"]["studentProfile"]>
    composites: {}
  }

  type StudentProfileGetPayload<S extends boolean | null | undefined | StudentProfileDefaultArgs> = $Result.GetResult<Prisma.$StudentProfilePayload, S>

  type StudentProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentProfileCountAggregateInputType | true
    }

  export interface StudentProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentProfile'], meta: { name: 'StudentProfile' } }
    /**
     * Find zero or one StudentProfile that matches the filter.
     * @param {StudentProfileFindUniqueArgs} args - Arguments to find a StudentProfile
     * @example
     * // Get one StudentProfile
     * const studentProfile = await prisma.studentProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentProfileFindUniqueArgs>(args: SelectSubset<T, StudentProfileFindUniqueArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentProfileFindUniqueOrThrowArgs} args - Arguments to find a StudentProfile
     * @example
     * // Get one StudentProfile
     * const studentProfile = await prisma.studentProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileFindFirstArgs} args - Arguments to find a StudentProfile
     * @example
     * // Get one StudentProfile
     * const studentProfile = await prisma.studentProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentProfileFindFirstArgs>(args?: SelectSubset<T, StudentProfileFindFirstArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileFindFirstOrThrowArgs} args - Arguments to find a StudentProfile
     * @example
     * // Get one StudentProfile
     * const studentProfile = await prisma.studentProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentProfiles
     * const studentProfiles = await prisma.studentProfile.findMany()
     * 
     * // Get first 10 StudentProfiles
     * const studentProfiles = await prisma.studentProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentProfileWithIdOnly = await prisma.studentProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentProfileFindManyArgs>(args?: SelectSubset<T, StudentProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentProfile.
     * @param {StudentProfileCreateArgs} args - Arguments to create a StudentProfile.
     * @example
     * // Create one StudentProfile
     * const StudentProfile = await prisma.studentProfile.create({
     *   data: {
     *     // ... data to create a StudentProfile
     *   }
     * })
     * 
     */
    create<T extends StudentProfileCreateArgs>(args: SelectSubset<T, StudentProfileCreateArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentProfiles.
     * @param {StudentProfileCreateManyArgs} args - Arguments to create many StudentProfiles.
     * @example
     * // Create many StudentProfiles
     * const studentProfile = await prisma.studentProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentProfileCreateManyArgs>(args?: SelectSubset<T, StudentProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudentProfiles and returns the data saved in the database.
     * @param {StudentProfileCreateManyAndReturnArgs} args - Arguments to create many StudentProfiles.
     * @example
     * // Create many StudentProfiles
     * const studentProfile = await prisma.studentProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudentProfiles and only return the `id`
     * const studentProfileWithIdOnly = await prisma.studentProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudentProfile.
     * @param {StudentProfileDeleteArgs} args - Arguments to delete one StudentProfile.
     * @example
     * // Delete one StudentProfile
     * const StudentProfile = await prisma.studentProfile.delete({
     *   where: {
     *     // ... filter to delete one StudentProfile
     *   }
     * })
     * 
     */
    delete<T extends StudentProfileDeleteArgs>(args: SelectSubset<T, StudentProfileDeleteArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentProfile.
     * @param {StudentProfileUpdateArgs} args - Arguments to update one StudentProfile.
     * @example
     * // Update one StudentProfile
     * const studentProfile = await prisma.studentProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentProfileUpdateArgs>(args: SelectSubset<T, StudentProfileUpdateArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentProfiles.
     * @param {StudentProfileDeleteManyArgs} args - Arguments to filter StudentProfiles to delete.
     * @example
     * // Delete a few StudentProfiles
     * const { count } = await prisma.studentProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentProfileDeleteManyArgs>(args?: SelectSubset<T, StudentProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentProfiles
     * const studentProfile = await prisma.studentProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentProfileUpdateManyArgs>(args: SelectSubset<T, StudentProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentProfiles and returns the data updated in the database.
     * @param {StudentProfileUpdateManyAndReturnArgs} args - Arguments to update many StudentProfiles.
     * @example
     * // Update many StudentProfiles
     * const studentProfile = await prisma.studentProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudentProfiles and only return the `id`
     * const studentProfileWithIdOnly = await prisma.studentProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends StudentProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudentProfile.
     * @param {StudentProfileUpsertArgs} args - Arguments to update or create a StudentProfile.
     * @example
     * // Update or create a StudentProfile
     * const studentProfile = await prisma.studentProfile.upsert({
     *   create: {
     *     // ... data to create a StudentProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentProfile we want to update
     *   }
     * })
     */
    upsert<T extends StudentProfileUpsertArgs>(args: SelectSubset<T, StudentProfileUpsertArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileCountArgs} args - Arguments to filter StudentProfiles to count.
     * @example
     * // Count the number of StudentProfiles
     * const count = await prisma.studentProfile.count({
     *   where: {
     *     // ... the filter for the StudentProfiles we want to count
     *   }
     * })
    **/
    count<T extends StudentProfileCountArgs>(
      args?: Subset<T, StudentProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentProfileAggregateArgs>(args: Subset<T, StudentProfileAggregateArgs>): Prisma.PrismaPromise<GetStudentProfileAggregateType<T>>

    /**
     * Group by StudentProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileGroupByArgs} args - Group by arguments.
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
      T extends StudentProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentProfileGroupByArgs['orderBy'] }
        : { orderBy?: StudentProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentProfile model
   */
  readonly fields: StudentProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    school<T extends SchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchoolDefaultArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StudentProfile model
   */
  interface StudentProfileFieldRefs {
    readonly id: FieldRef<"StudentProfile", 'String'>
    readonly studentId: FieldRef<"StudentProfile", 'String'>
    readonly schoolId: FieldRef<"StudentProfile", 'String'>
    readonly firstName: FieldRef<"StudentProfile", 'String'>
    readonly lastName: FieldRef<"StudentProfile", 'String'>
    readonly grade: FieldRef<"StudentProfile", 'Int'>
    readonly city: FieldRef<"StudentProfile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StudentProfile findUnique
   */
  export type StudentProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * Filter, which StudentProfile to fetch.
     */
    where: StudentProfileWhereUniqueInput
  }

  /**
   * StudentProfile findUniqueOrThrow
   */
  export type StudentProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * Filter, which StudentProfile to fetch.
     */
    where: StudentProfileWhereUniqueInput
  }

  /**
   * StudentProfile findFirst
   */
  export type StudentProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * Filter, which StudentProfile to fetch.
     */
    where?: StudentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentProfiles to fetch.
     */
    orderBy?: StudentProfileOrderByWithRelationInput | StudentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentProfiles.
     */
    cursor?: StudentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentProfiles.
     */
    distinct?: StudentProfileScalarFieldEnum | StudentProfileScalarFieldEnum[]
  }

  /**
   * StudentProfile findFirstOrThrow
   */
  export type StudentProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * Filter, which StudentProfile to fetch.
     */
    where?: StudentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentProfiles to fetch.
     */
    orderBy?: StudentProfileOrderByWithRelationInput | StudentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentProfiles.
     */
    cursor?: StudentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentProfiles.
     */
    distinct?: StudentProfileScalarFieldEnum | StudentProfileScalarFieldEnum[]
  }

  /**
   * StudentProfile findMany
   */
  export type StudentProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * Filter, which StudentProfiles to fetch.
     */
    where?: StudentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentProfiles to fetch.
     */
    orderBy?: StudentProfileOrderByWithRelationInput | StudentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentProfiles.
     */
    cursor?: StudentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentProfiles.
     */
    skip?: number
    distinct?: StudentProfileScalarFieldEnum | StudentProfileScalarFieldEnum[]
  }

  /**
   * StudentProfile create
   */
  export type StudentProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentProfile.
     */
    data: XOR<StudentProfileCreateInput, StudentProfileUncheckedCreateInput>
  }

  /**
   * StudentProfile createMany
   */
  export type StudentProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentProfiles.
     */
    data: StudentProfileCreateManyInput | StudentProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentProfile createManyAndReturn
   */
  export type StudentProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * The data used to create many StudentProfiles.
     */
    data: StudentProfileCreateManyInput | StudentProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentProfile update
   */
  export type StudentProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentProfile.
     */
    data: XOR<StudentProfileUpdateInput, StudentProfileUncheckedUpdateInput>
    /**
     * Choose, which StudentProfile to update.
     */
    where: StudentProfileWhereUniqueInput
  }

  /**
   * StudentProfile updateMany
   */
  export type StudentProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentProfiles.
     */
    data: XOR<StudentProfileUpdateManyMutationInput, StudentProfileUncheckedUpdateManyInput>
    /**
     * Filter which StudentProfiles to update
     */
    where?: StudentProfileWhereInput
    /**
     * Limit how many StudentProfiles to update.
     */
    limit?: number
  }

  /**
   * StudentProfile updateManyAndReturn
   */
  export type StudentProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * The data used to update StudentProfiles.
     */
    data: XOR<StudentProfileUpdateManyMutationInput, StudentProfileUncheckedUpdateManyInput>
    /**
     * Filter which StudentProfiles to update
     */
    where?: StudentProfileWhereInput
    /**
     * Limit how many StudentProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentProfile upsert
   */
  export type StudentProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentProfile to update in case it exists.
     */
    where: StudentProfileWhereUniqueInput
    /**
     * In case the StudentProfile found by the `where` argument doesn't exist, create a new StudentProfile with this data.
     */
    create: XOR<StudentProfileCreateInput, StudentProfileUncheckedCreateInput>
    /**
     * In case the StudentProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentProfileUpdateInput, StudentProfileUncheckedUpdateInput>
  }

  /**
   * StudentProfile delete
   */
  export type StudentProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * Filter which StudentProfile to delete.
     */
    where: StudentProfileWhereUniqueInput
  }

  /**
   * StudentProfile deleteMany
   */
  export type StudentProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentProfiles to delete
     */
    where?: StudentProfileWhereInput
    /**
     * Limit how many StudentProfiles to delete.
     */
    limit?: number
  }

  /**
   * StudentProfile without action
   */
  export type StudentProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
  }


  /**
   * Model Topic
   */

  export type AggregateTopic = {
    _count: TopicCountAggregateOutputType | null
    _avg: TopicAvgAggregateOutputType | null
    _sum: TopicSumAggregateOutputType | null
    _min: TopicMinAggregateOutputType | null
    _max: TopicMaxAggregateOutputType | null
  }

  export type TopicAvgAggregateOutputType = {
    orderIndex: number | null
  }

  export type TopicSumAggregateOutputType = {
    orderIndex: number | null
  }

  export type TopicMinAggregateOutputType = {
    id: string | null
    title: string | null
    orderIndex: number | null
    isActive: boolean | null
    createdAt: Date | null
    createdById: string | null
  }

  export type TopicMaxAggregateOutputType = {
    id: string | null
    title: string | null
    orderIndex: number | null
    isActive: boolean | null
    createdAt: Date | null
    createdById: string | null
  }

  export type TopicCountAggregateOutputType = {
    id: number
    title: number
    orderIndex: number
    isActive: number
    createdAt: number
    createdById: number
    _all: number
  }


  export type TopicAvgAggregateInputType = {
    orderIndex?: true
  }

  export type TopicSumAggregateInputType = {
    orderIndex?: true
  }

  export type TopicMinAggregateInputType = {
    id?: true
    title?: true
    orderIndex?: true
    isActive?: true
    createdAt?: true
    createdById?: true
  }

  export type TopicMaxAggregateInputType = {
    id?: true
    title?: true
    orderIndex?: true
    isActive?: true
    createdAt?: true
    createdById?: true
  }

  export type TopicCountAggregateInputType = {
    id?: true
    title?: true
    orderIndex?: true
    isActive?: true
    createdAt?: true
    createdById?: true
    _all?: true
  }

  export type TopicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Topic to aggregate.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Topics
    **/
    _count?: true | TopicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TopicAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TopicSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TopicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TopicMaxAggregateInputType
  }

  export type GetTopicAggregateType<T extends TopicAggregateArgs> = {
        [P in keyof T & keyof AggregateTopic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTopic[P]>
      : GetScalarType<T[P], AggregateTopic[P]>
  }




  export type TopicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TopicWhereInput
    orderBy?: TopicOrderByWithAggregationInput | TopicOrderByWithAggregationInput[]
    by: TopicScalarFieldEnum[] | TopicScalarFieldEnum
    having?: TopicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TopicCountAggregateInputType | true
    _avg?: TopicAvgAggregateInputType
    _sum?: TopicSumAggregateInputType
    _min?: TopicMinAggregateInputType
    _max?: TopicMaxAggregateInputType
  }

  export type TopicGroupByOutputType = {
    id: string
    title: string
    orderIndex: number
    isActive: boolean
    createdAt: Date
    createdById: string | null
    _count: TopicCountAggregateOutputType | null
    _avg: TopicAvgAggregateOutputType | null
    _sum: TopicSumAggregateOutputType | null
    _min: TopicMinAggregateOutputType | null
    _max: TopicMaxAggregateOutputType | null
  }

  type GetTopicGroupByPayload<T extends TopicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TopicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TopicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TopicGroupByOutputType[P]>
            : GetScalarType<T[P], TopicGroupByOutputType[P]>
        }
      >
    >


  export type TopicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    orderIndex?: boolean
    isActive?: boolean
    createdAt?: boolean
    createdById?: boolean
    createdBy?: boolean | Topic$createdByArgs<ExtArgs>
    schoolTopics?: boolean | Topic$schoolTopicsArgs<ExtArgs>
    questions?: boolean | Topic$questionsArgs<ExtArgs>
    _count?: boolean | TopicCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["topic"]>

  export type TopicSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    orderIndex?: boolean
    isActive?: boolean
    createdAt?: boolean
    createdById?: boolean
    createdBy?: boolean | Topic$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["topic"]>

  export type TopicSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    orderIndex?: boolean
    isActive?: boolean
    createdAt?: boolean
    createdById?: boolean
    createdBy?: boolean | Topic$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["topic"]>

  export type TopicSelectScalar = {
    id?: boolean
    title?: boolean
    orderIndex?: boolean
    isActive?: boolean
    createdAt?: boolean
    createdById?: boolean
  }

  export type TopicOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "orderIndex" | "isActive" | "createdAt" | "createdById", ExtArgs["result"]["topic"]>
  export type TopicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | Topic$createdByArgs<ExtArgs>
    schoolTopics?: boolean | Topic$schoolTopicsArgs<ExtArgs>
    questions?: boolean | Topic$questionsArgs<ExtArgs>
    _count?: boolean | TopicCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TopicIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | Topic$createdByArgs<ExtArgs>
  }
  export type TopicIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | Topic$createdByArgs<ExtArgs>
  }

  export type $TopicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Topic"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs> | null
      schoolTopics: Prisma.$SchoolTopicPayload<ExtArgs>[]
      questions: Prisma.$QuestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      orderIndex: number
      isActive: boolean
      createdAt: Date
      createdById: string | null
    }, ExtArgs["result"]["topic"]>
    composites: {}
  }

  type TopicGetPayload<S extends boolean | null | undefined | TopicDefaultArgs> = $Result.GetResult<Prisma.$TopicPayload, S>

  type TopicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TopicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TopicCountAggregateInputType | true
    }

  export interface TopicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Topic'], meta: { name: 'Topic' } }
    /**
     * Find zero or one Topic that matches the filter.
     * @param {TopicFindUniqueArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TopicFindUniqueArgs>(args: SelectSubset<T, TopicFindUniqueArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Topic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TopicFindUniqueOrThrowArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TopicFindUniqueOrThrowArgs>(args: SelectSubset<T, TopicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Topic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicFindFirstArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TopicFindFirstArgs>(args?: SelectSubset<T, TopicFindFirstArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Topic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicFindFirstOrThrowArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TopicFindFirstOrThrowArgs>(args?: SelectSubset<T, TopicFindFirstOrThrowArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Topics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Topics
     * const topics = await prisma.topic.findMany()
     * 
     * // Get first 10 Topics
     * const topics = await prisma.topic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const topicWithIdOnly = await prisma.topic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TopicFindManyArgs>(args?: SelectSubset<T, TopicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Topic.
     * @param {TopicCreateArgs} args - Arguments to create a Topic.
     * @example
     * // Create one Topic
     * const Topic = await prisma.topic.create({
     *   data: {
     *     // ... data to create a Topic
     *   }
     * })
     * 
     */
    create<T extends TopicCreateArgs>(args: SelectSubset<T, TopicCreateArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Topics.
     * @param {TopicCreateManyArgs} args - Arguments to create many Topics.
     * @example
     * // Create many Topics
     * const topic = await prisma.topic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TopicCreateManyArgs>(args?: SelectSubset<T, TopicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Topics and returns the data saved in the database.
     * @param {TopicCreateManyAndReturnArgs} args - Arguments to create many Topics.
     * @example
     * // Create many Topics
     * const topic = await prisma.topic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Topics and only return the `id`
     * const topicWithIdOnly = await prisma.topic.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TopicCreateManyAndReturnArgs>(args?: SelectSubset<T, TopicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Topic.
     * @param {TopicDeleteArgs} args - Arguments to delete one Topic.
     * @example
     * // Delete one Topic
     * const Topic = await prisma.topic.delete({
     *   where: {
     *     // ... filter to delete one Topic
     *   }
     * })
     * 
     */
    delete<T extends TopicDeleteArgs>(args: SelectSubset<T, TopicDeleteArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Topic.
     * @param {TopicUpdateArgs} args - Arguments to update one Topic.
     * @example
     * // Update one Topic
     * const topic = await prisma.topic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TopicUpdateArgs>(args: SelectSubset<T, TopicUpdateArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Topics.
     * @param {TopicDeleteManyArgs} args - Arguments to filter Topics to delete.
     * @example
     * // Delete a few Topics
     * const { count } = await prisma.topic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TopicDeleteManyArgs>(args?: SelectSubset<T, TopicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Topics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Topics
     * const topic = await prisma.topic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TopicUpdateManyArgs>(args: SelectSubset<T, TopicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Topics and returns the data updated in the database.
     * @param {TopicUpdateManyAndReturnArgs} args - Arguments to update many Topics.
     * @example
     * // Update many Topics
     * const topic = await prisma.topic.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Topics and only return the `id`
     * const topicWithIdOnly = await prisma.topic.updateManyAndReturn({
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
    updateManyAndReturn<T extends TopicUpdateManyAndReturnArgs>(args: SelectSubset<T, TopicUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Topic.
     * @param {TopicUpsertArgs} args - Arguments to update or create a Topic.
     * @example
     * // Update or create a Topic
     * const topic = await prisma.topic.upsert({
     *   create: {
     *     // ... data to create a Topic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Topic we want to update
     *   }
     * })
     */
    upsert<T extends TopicUpsertArgs>(args: SelectSubset<T, TopicUpsertArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Topics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicCountArgs} args - Arguments to filter Topics to count.
     * @example
     * // Count the number of Topics
     * const count = await prisma.topic.count({
     *   where: {
     *     // ... the filter for the Topics we want to count
     *   }
     * })
    **/
    count<T extends TopicCountArgs>(
      args?: Subset<T, TopicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TopicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Topic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TopicAggregateArgs>(args: Subset<T, TopicAggregateArgs>): Prisma.PrismaPromise<GetTopicAggregateType<T>>

    /**
     * Group by Topic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicGroupByArgs} args - Group by arguments.
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
      T extends TopicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TopicGroupByArgs['orderBy'] }
        : { orderBy?: TopicGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TopicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTopicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Topic model
   */
  readonly fields: TopicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Topic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TopicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends Topic$createdByArgs<ExtArgs> = {}>(args?: Subset<T, Topic$createdByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    schoolTopics<T extends Topic$schoolTopicsArgs<ExtArgs> = {}>(args?: Subset<T, Topic$schoolTopicsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolTopicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    questions<T extends Topic$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Topic$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Topic model
   */
  interface TopicFieldRefs {
    readonly id: FieldRef<"Topic", 'String'>
    readonly title: FieldRef<"Topic", 'String'>
    readonly orderIndex: FieldRef<"Topic", 'Int'>
    readonly isActive: FieldRef<"Topic", 'Boolean'>
    readonly createdAt: FieldRef<"Topic", 'DateTime'>
    readonly createdById: FieldRef<"Topic", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Topic findUnique
   */
  export type TopicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where: TopicWhereUniqueInput
  }

  /**
   * Topic findUniqueOrThrow
   */
  export type TopicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where: TopicWhereUniqueInput
  }

  /**
   * Topic findFirst
   */
  export type TopicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Topics.
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Topics.
     */
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }

  /**
   * Topic findFirstOrThrow
   */
  export type TopicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Topics.
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Topics.
     */
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }

  /**
   * Topic findMany
   */
  export type TopicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topics to fetch.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Topics.
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }

  /**
   * Topic create
   */
  export type TopicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * The data needed to create a Topic.
     */
    data: XOR<TopicCreateInput, TopicUncheckedCreateInput>
  }

  /**
   * Topic createMany
   */
  export type TopicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Topics.
     */
    data: TopicCreateManyInput | TopicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Topic createManyAndReturn
   */
  export type TopicCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * The data used to create many Topics.
     */
    data: TopicCreateManyInput | TopicCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Topic update
   */
  export type TopicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * The data needed to update a Topic.
     */
    data: XOR<TopicUpdateInput, TopicUncheckedUpdateInput>
    /**
     * Choose, which Topic to update.
     */
    where: TopicWhereUniqueInput
  }

  /**
   * Topic updateMany
   */
  export type TopicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Topics.
     */
    data: XOR<TopicUpdateManyMutationInput, TopicUncheckedUpdateManyInput>
    /**
     * Filter which Topics to update
     */
    where?: TopicWhereInput
    /**
     * Limit how many Topics to update.
     */
    limit?: number
  }

  /**
   * Topic updateManyAndReturn
   */
  export type TopicUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * The data used to update Topics.
     */
    data: XOR<TopicUpdateManyMutationInput, TopicUncheckedUpdateManyInput>
    /**
     * Filter which Topics to update
     */
    where?: TopicWhereInput
    /**
     * Limit how many Topics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Topic upsert
   */
  export type TopicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * The filter to search for the Topic to update in case it exists.
     */
    where: TopicWhereUniqueInput
    /**
     * In case the Topic found by the `where` argument doesn't exist, create a new Topic with this data.
     */
    create: XOR<TopicCreateInput, TopicUncheckedCreateInput>
    /**
     * In case the Topic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TopicUpdateInput, TopicUncheckedUpdateInput>
  }

  /**
   * Topic delete
   */
  export type TopicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter which Topic to delete.
     */
    where: TopicWhereUniqueInput
  }

  /**
   * Topic deleteMany
   */
  export type TopicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Topics to delete
     */
    where?: TopicWhereInput
    /**
     * Limit how many Topics to delete.
     */
    limit?: number
  }

  /**
   * Topic.createdBy
   */
  export type Topic$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Topic.schoolTopics
   */
  export type Topic$schoolTopicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolTopic
     */
    select?: SchoolTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolTopic
     */
    omit?: SchoolTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolTopicInclude<ExtArgs> | null
    where?: SchoolTopicWhereInput
    orderBy?: SchoolTopicOrderByWithRelationInput | SchoolTopicOrderByWithRelationInput[]
    cursor?: SchoolTopicWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SchoolTopicScalarFieldEnum | SchoolTopicScalarFieldEnum[]
  }

  /**
   * Topic.questions
   */
  export type Topic$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Topic without action
   */
  export type TopicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
  }


  /**
   * Model SchoolTopic
   */

  export type AggregateSchoolTopic = {
    _count: SchoolTopicCountAggregateOutputType | null
    _min: SchoolTopicMinAggregateOutputType | null
    _max: SchoolTopicMaxAggregateOutputType | null
  }

  export type SchoolTopicMinAggregateOutputType = {
    id: string | null
    schoolId: string | null
    topicId: string | null
  }

  export type SchoolTopicMaxAggregateOutputType = {
    id: string | null
    schoolId: string | null
    topicId: string | null
  }

  export type SchoolTopicCountAggregateOutputType = {
    id: number
    schoolId: number
    topicId: number
    _all: number
  }


  export type SchoolTopicMinAggregateInputType = {
    id?: true
    schoolId?: true
    topicId?: true
  }

  export type SchoolTopicMaxAggregateInputType = {
    id?: true
    schoolId?: true
    topicId?: true
  }

  export type SchoolTopicCountAggregateInputType = {
    id?: true
    schoolId?: true
    topicId?: true
    _all?: true
  }

  export type SchoolTopicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SchoolTopic to aggregate.
     */
    where?: SchoolTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchoolTopics to fetch.
     */
    orderBy?: SchoolTopicOrderByWithRelationInput | SchoolTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SchoolTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchoolTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchoolTopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SchoolTopics
    **/
    _count?: true | SchoolTopicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchoolTopicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchoolTopicMaxAggregateInputType
  }

  export type GetSchoolTopicAggregateType<T extends SchoolTopicAggregateArgs> = {
        [P in keyof T & keyof AggregateSchoolTopic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchoolTopic[P]>
      : GetScalarType<T[P], AggregateSchoolTopic[P]>
  }




  export type SchoolTopicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchoolTopicWhereInput
    orderBy?: SchoolTopicOrderByWithAggregationInput | SchoolTopicOrderByWithAggregationInput[]
    by: SchoolTopicScalarFieldEnum[] | SchoolTopicScalarFieldEnum
    having?: SchoolTopicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchoolTopicCountAggregateInputType | true
    _min?: SchoolTopicMinAggregateInputType
    _max?: SchoolTopicMaxAggregateInputType
  }

  export type SchoolTopicGroupByOutputType = {
    id: string
    schoolId: string
    topicId: string
    _count: SchoolTopicCountAggregateOutputType | null
    _min: SchoolTopicMinAggregateOutputType | null
    _max: SchoolTopicMaxAggregateOutputType | null
  }

  type GetSchoolTopicGroupByPayload<T extends SchoolTopicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchoolTopicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchoolTopicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchoolTopicGroupByOutputType[P]>
            : GetScalarType<T[P], SchoolTopicGroupByOutputType[P]>
        }
      >
    >


  export type SchoolTopicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    topicId?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schoolTopic"]>

  export type SchoolTopicSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    topicId?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schoolTopic"]>

  export type SchoolTopicSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    topicId?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schoolTopic"]>

  export type SchoolTopicSelectScalar = {
    id?: boolean
    schoolId?: boolean
    topicId?: boolean
  }

  export type SchoolTopicOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "schoolId" | "topicId", ExtArgs["result"]["schoolTopic"]>
  export type SchoolTopicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }
  export type SchoolTopicIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }
  export type SchoolTopicIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }

  export type $SchoolTopicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SchoolTopic"
    objects: {
      school: Prisma.$SchoolPayload<ExtArgs>
      topic: Prisma.$TopicPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      schoolId: string
      topicId: string
    }, ExtArgs["result"]["schoolTopic"]>
    composites: {}
  }

  type SchoolTopicGetPayload<S extends boolean | null | undefined | SchoolTopicDefaultArgs> = $Result.GetResult<Prisma.$SchoolTopicPayload, S>

  type SchoolTopicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SchoolTopicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SchoolTopicCountAggregateInputType | true
    }

  export interface SchoolTopicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SchoolTopic'], meta: { name: 'SchoolTopic' } }
    /**
     * Find zero or one SchoolTopic that matches the filter.
     * @param {SchoolTopicFindUniqueArgs} args - Arguments to find a SchoolTopic
     * @example
     * // Get one SchoolTopic
     * const schoolTopic = await prisma.schoolTopic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SchoolTopicFindUniqueArgs>(args: SelectSubset<T, SchoolTopicFindUniqueArgs<ExtArgs>>): Prisma__SchoolTopicClient<$Result.GetResult<Prisma.$SchoolTopicPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SchoolTopic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SchoolTopicFindUniqueOrThrowArgs} args - Arguments to find a SchoolTopic
     * @example
     * // Get one SchoolTopic
     * const schoolTopic = await prisma.schoolTopic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SchoolTopicFindUniqueOrThrowArgs>(args: SelectSubset<T, SchoolTopicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SchoolTopicClient<$Result.GetResult<Prisma.$SchoolTopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SchoolTopic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolTopicFindFirstArgs} args - Arguments to find a SchoolTopic
     * @example
     * // Get one SchoolTopic
     * const schoolTopic = await prisma.schoolTopic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SchoolTopicFindFirstArgs>(args?: SelectSubset<T, SchoolTopicFindFirstArgs<ExtArgs>>): Prisma__SchoolTopicClient<$Result.GetResult<Prisma.$SchoolTopicPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SchoolTopic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolTopicFindFirstOrThrowArgs} args - Arguments to find a SchoolTopic
     * @example
     * // Get one SchoolTopic
     * const schoolTopic = await prisma.schoolTopic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SchoolTopicFindFirstOrThrowArgs>(args?: SelectSubset<T, SchoolTopicFindFirstOrThrowArgs<ExtArgs>>): Prisma__SchoolTopicClient<$Result.GetResult<Prisma.$SchoolTopicPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SchoolTopics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolTopicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SchoolTopics
     * const schoolTopics = await prisma.schoolTopic.findMany()
     * 
     * // Get first 10 SchoolTopics
     * const schoolTopics = await prisma.schoolTopic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const schoolTopicWithIdOnly = await prisma.schoolTopic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SchoolTopicFindManyArgs>(args?: SelectSubset<T, SchoolTopicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolTopicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SchoolTopic.
     * @param {SchoolTopicCreateArgs} args - Arguments to create a SchoolTopic.
     * @example
     * // Create one SchoolTopic
     * const SchoolTopic = await prisma.schoolTopic.create({
     *   data: {
     *     // ... data to create a SchoolTopic
     *   }
     * })
     * 
     */
    create<T extends SchoolTopicCreateArgs>(args: SelectSubset<T, SchoolTopicCreateArgs<ExtArgs>>): Prisma__SchoolTopicClient<$Result.GetResult<Prisma.$SchoolTopicPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SchoolTopics.
     * @param {SchoolTopicCreateManyArgs} args - Arguments to create many SchoolTopics.
     * @example
     * // Create many SchoolTopics
     * const schoolTopic = await prisma.schoolTopic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SchoolTopicCreateManyArgs>(args?: SelectSubset<T, SchoolTopicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SchoolTopics and returns the data saved in the database.
     * @param {SchoolTopicCreateManyAndReturnArgs} args - Arguments to create many SchoolTopics.
     * @example
     * // Create many SchoolTopics
     * const schoolTopic = await prisma.schoolTopic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SchoolTopics and only return the `id`
     * const schoolTopicWithIdOnly = await prisma.schoolTopic.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SchoolTopicCreateManyAndReturnArgs>(args?: SelectSubset<T, SchoolTopicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolTopicPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SchoolTopic.
     * @param {SchoolTopicDeleteArgs} args - Arguments to delete one SchoolTopic.
     * @example
     * // Delete one SchoolTopic
     * const SchoolTopic = await prisma.schoolTopic.delete({
     *   where: {
     *     // ... filter to delete one SchoolTopic
     *   }
     * })
     * 
     */
    delete<T extends SchoolTopicDeleteArgs>(args: SelectSubset<T, SchoolTopicDeleteArgs<ExtArgs>>): Prisma__SchoolTopicClient<$Result.GetResult<Prisma.$SchoolTopicPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SchoolTopic.
     * @param {SchoolTopicUpdateArgs} args - Arguments to update one SchoolTopic.
     * @example
     * // Update one SchoolTopic
     * const schoolTopic = await prisma.schoolTopic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SchoolTopicUpdateArgs>(args: SelectSubset<T, SchoolTopicUpdateArgs<ExtArgs>>): Prisma__SchoolTopicClient<$Result.GetResult<Prisma.$SchoolTopicPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SchoolTopics.
     * @param {SchoolTopicDeleteManyArgs} args - Arguments to filter SchoolTopics to delete.
     * @example
     * // Delete a few SchoolTopics
     * const { count } = await prisma.schoolTopic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SchoolTopicDeleteManyArgs>(args?: SelectSubset<T, SchoolTopicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SchoolTopics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolTopicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SchoolTopics
     * const schoolTopic = await prisma.schoolTopic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SchoolTopicUpdateManyArgs>(args: SelectSubset<T, SchoolTopicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SchoolTopics and returns the data updated in the database.
     * @param {SchoolTopicUpdateManyAndReturnArgs} args - Arguments to update many SchoolTopics.
     * @example
     * // Update many SchoolTopics
     * const schoolTopic = await prisma.schoolTopic.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SchoolTopics and only return the `id`
     * const schoolTopicWithIdOnly = await prisma.schoolTopic.updateManyAndReturn({
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
    updateManyAndReturn<T extends SchoolTopicUpdateManyAndReturnArgs>(args: SelectSubset<T, SchoolTopicUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolTopicPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SchoolTopic.
     * @param {SchoolTopicUpsertArgs} args - Arguments to update or create a SchoolTopic.
     * @example
     * // Update or create a SchoolTopic
     * const schoolTopic = await prisma.schoolTopic.upsert({
     *   create: {
     *     // ... data to create a SchoolTopic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SchoolTopic we want to update
     *   }
     * })
     */
    upsert<T extends SchoolTopicUpsertArgs>(args: SelectSubset<T, SchoolTopicUpsertArgs<ExtArgs>>): Prisma__SchoolTopicClient<$Result.GetResult<Prisma.$SchoolTopicPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SchoolTopics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolTopicCountArgs} args - Arguments to filter SchoolTopics to count.
     * @example
     * // Count the number of SchoolTopics
     * const count = await prisma.schoolTopic.count({
     *   where: {
     *     // ... the filter for the SchoolTopics we want to count
     *   }
     * })
    **/
    count<T extends SchoolTopicCountArgs>(
      args?: Subset<T, SchoolTopicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchoolTopicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SchoolTopic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolTopicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SchoolTopicAggregateArgs>(args: Subset<T, SchoolTopicAggregateArgs>): Prisma.PrismaPromise<GetSchoolTopicAggregateType<T>>

    /**
     * Group by SchoolTopic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolTopicGroupByArgs} args - Group by arguments.
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
      T extends SchoolTopicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SchoolTopicGroupByArgs['orderBy'] }
        : { orderBy?: SchoolTopicGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SchoolTopicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchoolTopicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SchoolTopic model
   */
  readonly fields: SchoolTopicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SchoolTopic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SchoolTopicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    school<T extends SchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchoolDefaultArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    topic<T extends TopicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TopicDefaultArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SchoolTopic model
   */
  interface SchoolTopicFieldRefs {
    readonly id: FieldRef<"SchoolTopic", 'String'>
    readonly schoolId: FieldRef<"SchoolTopic", 'String'>
    readonly topicId: FieldRef<"SchoolTopic", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SchoolTopic findUnique
   */
  export type SchoolTopicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolTopic
     */
    select?: SchoolTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolTopic
     */
    omit?: SchoolTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolTopicInclude<ExtArgs> | null
    /**
     * Filter, which SchoolTopic to fetch.
     */
    where: SchoolTopicWhereUniqueInput
  }

  /**
   * SchoolTopic findUniqueOrThrow
   */
  export type SchoolTopicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolTopic
     */
    select?: SchoolTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolTopic
     */
    omit?: SchoolTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolTopicInclude<ExtArgs> | null
    /**
     * Filter, which SchoolTopic to fetch.
     */
    where: SchoolTopicWhereUniqueInput
  }

  /**
   * SchoolTopic findFirst
   */
  export type SchoolTopicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolTopic
     */
    select?: SchoolTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolTopic
     */
    omit?: SchoolTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolTopicInclude<ExtArgs> | null
    /**
     * Filter, which SchoolTopic to fetch.
     */
    where?: SchoolTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchoolTopics to fetch.
     */
    orderBy?: SchoolTopicOrderByWithRelationInput | SchoolTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SchoolTopics.
     */
    cursor?: SchoolTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchoolTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchoolTopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SchoolTopics.
     */
    distinct?: SchoolTopicScalarFieldEnum | SchoolTopicScalarFieldEnum[]
  }

  /**
   * SchoolTopic findFirstOrThrow
   */
  export type SchoolTopicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolTopic
     */
    select?: SchoolTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolTopic
     */
    omit?: SchoolTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolTopicInclude<ExtArgs> | null
    /**
     * Filter, which SchoolTopic to fetch.
     */
    where?: SchoolTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchoolTopics to fetch.
     */
    orderBy?: SchoolTopicOrderByWithRelationInput | SchoolTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SchoolTopics.
     */
    cursor?: SchoolTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchoolTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchoolTopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SchoolTopics.
     */
    distinct?: SchoolTopicScalarFieldEnum | SchoolTopicScalarFieldEnum[]
  }

  /**
   * SchoolTopic findMany
   */
  export type SchoolTopicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolTopic
     */
    select?: SchoolTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolTopic
     */
    omit?: SchoolTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolTopicInclude<ExtArgs> | null
    /**
     * Filter, which SchoolTopics to fetch.
     */
    where?: SchoolTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchoolTopics to fetch.
     */
    orderBy?: SchoolTopicOrderByWithRelationInput | SchoolTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SchoolTopics.
     */
    cursor?: SchoolTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchoolTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchoolTopics.
     */
    skip?: number
    distinct?: SchoolTopicScalarFieldEnum | SchoolTopicScalarFieldEnum[]
  }

  /**
   * SchoolTopic create
   */
  export type SchoolTopicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolTopic
     */
    select?: SchoolTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolTopic
     */
    omit?: SchoolTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolTopicInclude<ExtArgs> | null
    /**
     * The data needed to create a SchoolTopic.
     */
    data: XOR<SchoolTopicCreateInput, SchoolTopicUncheckedCreateInput>
  }

  /**
   * SchoolTopic createMany
   */
  export type SchoolTopicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SchoolTopics.
     */
    data: SchoolTopicCreateManyInput | SchoolTopicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SchoolTopic createManyAndReturn
   */
  export type SchoolTopicCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolTopic
     */
    select?: SchoolTopicSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolTopic
     */
    omit?: SchoolTopicOmit<ExtArgs> | null
    /**
     * The data used to create many SchoolTopics.
     */
    data: SchoolTopicCreateManyInput | SchoolTopicCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolTopicIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SchoolTopic update
   */
  export type SchoolTopicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolTopic
     */
    select?: SchoolTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolTopic
     */
    omit?: SchoolTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolTopicInclude<ExtArgs> | null
    /**
     * The data needed to update a SchoolTopic.
     */
    data: XOR<SchoolTopicUpdateInput, SchoolTopicUncheckedUpdateInput>
    /**
     * Choose, which SchoolTopic to update.
     */
    where: SchoolTopicWhereUniqueInput
  }

  /**
   * SchoolTopic updateMany
   */
  export type SchoolTopicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SchoolTopics.
     */
    data: XOR<SchoolTopicUpdateManyMutationInput, SchoolTopicUncheckedUpdateManyInput>
    /**
     * Filter which SchoolTopics to update
     */
    where?: SchoolTopicWhereInput
    /**
     * Limit how many SchoolTopics to update.
     */
    limit?: number
  }

  /**
   * SchoolTopic updateManyAndReturn
   */
  export type SchoolTopicUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolTopic
     */
    select?: SchoolTopicSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolTopic
     */
    omit?: SchoolTopicOmit<ExtArgs> | null
    /**
     * The data used to update SchoolTopics.
     */
    data: XOR<SchoolTopicUpdateManyMutationInput, SchoolTopicUncheckedUpdateManyInput>
    /**
     * Filter which SchoolTopics to update
     */
    where?: SchoolTopicWhereInput
    /**
     * Limit how many SchoolTopics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolTopicIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SchoolTopic upsert
   */
  export type SchoolTopicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolTopic
     */
    select?: SchoolTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolTopic
     */
    omit?: SchoolTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolTopicInclude<ExtArgs> | null
    /**
     * The filter to search for the SchoolTopic to update in case it exists.
     */
    where: SchoolTopicWhereUniqueInput
    /**
     * In case the SchoolTopic found by the `where` argument doesn't exist, create a new SchoolTopic with this data.
     */
    create: XOR<SchoolTopicCreateInput, SchoolTopicUncheckedCreateInput>
    /**
     * In case the SchoolTopic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SchoolTopicUpdateInput, SchoolTopicUncheckedUpdateInput>
  }

  /**
   * SchoolTopic delete
   */
  export type SchoolTopicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolTopic
     */
    select?: SchoolTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolTopic
     */
    omit?: SchoolTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolTopicInclude<ExtArgs> | null
    /**
     * Filter which SchoolTopic to delete.
     */
    where: SchoolTopicWhereUniqueInput
  }

  /**
   * SchoolTopic deleteMany
   */
  export type SchoolTopicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SchoolTopics to delete
     */
    where?: SchoolTopicWhereInput
    /**
     * Limit how many SchoolTopics to delete.
     */
    limit?: number
  }

  /**
   * SchoolTopic without action
   */
  export type SchoolTopicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolTopic
     */
    select?: SchoolTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolTopic
     */
    omit?: SchoolTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolTopicInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionMinAggregateOutputType = {
    id: string | null
    topicId: string | null
    type: $Enums.QuestionType | null
    difficulty: $Enums.Difficulty | null
    prompt: string | null
    correctKey: string | null
    correctNum: string | null
    createdAt: Date | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: string | null
    topicId: string | null
    type: $Enums.QuestionType | null
    difficulty: $Enums.Difficulty | null
    prompt: string | null
    correctKey: string | null
    correctNum: string | null
    createdAt: Date | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    topicId: number
    type: number
    difficulty: number
    prompt: number
    options: number
    correctKey: number
    correctNum: number
    createdAt: number
    _all: number
  }


  export type QuestionMinAggregateInputType = {
    id?: true
    topicId?: true
    type?: true
    difficulty?: true
    prompt?: true
    correctKey?: true
    correctNum?: true
    createdAt?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    topicId?: true
    type?: true
    difficulty?: true
    prompt?: true
    correctKey?: true
    correctNum?: true
    createdAt?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    topicId?: true
    type?: true
    difficulty?: true
    prompt?: true
    options?: true
    correctKey?: true
    correctNum?: true
    createdAt?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: string
    topicId: string
    type: $Enums.QuestionType
    difficulty: $Enums.Difficulty
    prompt: string
    options: JsonValue | null
    correctKey: string | null
    correctNum: string | null
    createdAt: Date
    _count: QuestionCountAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    topicId?: boolean
    type?: boolean
    difficulty?: boolean
    prompt?: boolean
    options?: boolean
    correctKey?: boolean
    correctNum?: boolean
    createdAt?: boolean
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    topicId?: boolean
    type?: boolean
    difficulty?: boolean
    prompt?: boolean
    options?: boolean
    correctKey?: boolean
    correctNum?: boolean
    createdAt?: boolean
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    topicId?: boolean
    type?: boolean
    difficulty?: boolean
    prompt?: boolean
    options?: boolean
    correctKey?: boolean
    correctNum?: boolean
    createdAt?: boolean
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    id?: boolean
    topicId?: boolean
    type?: boolean
    difficulty?: boolean
    prompt?: boolean
    options?: boolean
    correctKey?: boolean
    correctNum?: boolean
    createdAt?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "topicId" | "type" | "difficulty" | "prompt" | "options" | "correctKey" | "correctNum" | "createdAt", ExtArgs["result"]["question"]>
  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      topic: Prisma.$TopicPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      topicId: string
      type: $Enums.QuestionType
      difficulty: $Enums.Difficulty
      prompt: string
      options: Prisma.JsonValue | null
      correctKey: string | null
      correctNum: string | null
      createdAt: Date
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions and returns the data updated in the database.
     * @param {QuestionUpdateManyAndReturnArgs} args - Arguments to update many Questions.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
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
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    topic<T extends TopicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TopicDefaultArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'String'>
    readonly topicId: FieldRef<"Question", 'String'>
    readonly type: FieldRef<"Question", 'QuestionType'>
    readonly difficulty: FieldRef<"Question", 'Difficulty'>
    readonly prompt: FieldRef<"Question", 'String'>
    readonly options: FieldRef<"Question", 'Json'>
    readonly correctKey: FieldRef<"Question", 'String'>
    readonly correctNum: FieldRef<"Question", 'String'>
    readonly createdAt: FieldRef<"Question", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question createManyAndReturn
   */
  export type QuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question updateManyAndReturn
   */
  export type QuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
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
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SchoolScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type SchoolScalarFieldEnum = (typeof SchoolScalarFieldEnum)[keyof typeof SchoolScalarFieldEnum]


  export const TeacherSchoolScalarFieldEnum: {
    id: 'id',
    teacherId: 'teacherId',
    schoolId: 'schoolId'
  };

  export type TeacherSchoolScalarFieldEnum = (typeof TeacherSchoolScalarFieldEnum)[keyof typeof TeacherSchoolScalarFieldEnum]


  export const StudentProfileScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    schoolId: 'schoolId',
    firstName: 'firstName',
    lastName: 'lastName',
    grade: 'grade',
    city: 'city'
  };

  export type StudentProfileScalarFieldEnum = (typeof StudentProfileScalarFieldEnum)[keyof typeof StudentProfileScalarFieldEnum]


  export const TopicScalarFieldEnum: {
    id: 'id',
    title: 'title',
    orderIndex: 'orderIndex',
    isActive: 'isActive',
    createdAt: 'createdAt',
    createdById: 'createdById'
  };

  export type TopicScalarFieldEnum = (typeof TopicScalarFieldEnum)[keyof typeof TopicScalarFieldEnum]


  export const SchoolTopicScalarFieldEnum: {
    id: 'id',
    schoolId: 'schoolId',
    topicId: 'topicId'
  };

  export type SchoolTopicScalarFieldEnum = (typeof SchoolTopicScalarFieldEnum)[keyof typeof SchoolTopicScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    topicId: 'topicId',
    type: 'type',
    difficulty: 'difficulty',
    prompt: 'prompt',
    options: 'options',
    correctKey: 'correctKey',
    correctNum: 'correctNum',
    createdAt: 'createdAt'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'QuestionType'
   */
  export type EnumQuestionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionType'>
    


  /**
   * Reference to a field of type 'QuestionType[]'
   */
  export type ListEnumQuestionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionType[]'>
    


  /**
   * Reference to a field of type 'Difficulty'
   */
  export type EnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficulty'>
    


  /**
   * Reference to a field of type 'Difficulty[]'
   */
  export type ListEnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficulty[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    teacherSchools?: TeacherSchoolListRelationFilter
    studentProfile?: XOR<StudentProfileNullableScalarRelationFilter, StudentProfileWhereInput> | null
    createdTopics?: TopicListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    teacherSchools?: TeacherSchoolOrderByRelationAggregateInput
    studentProfile?: StudentProfileOrderByWithRelationInput
    createdTopics?: TopicOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    teacherSchools?: TeacherSchoolListRelationFilter
    studentProfile?: XOR<StudentProfileNullableScalarRelationFilter, StudentProfileWhereInput> | null
    createdTopics?: TopicListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SchoolWhereInput = {
    AND?: SchoolWhereInput | SchoolWhereInput[]
    OR?: SchoolWhereInput[]
    NOT?: SchoolWhereInput | SchoolWhereInput[]
    id?: StringFilter<"School"> | string
    name?: StringFilter<"School"> | string
    teacherSchools?: TeacherSchoolListRelationFilter
    students?: StudentProfileListRelationFilter
    schoolTopics?: SchoolTopicListRelationFilter
  }

  export type SchoolOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    teacherSchools?: TeacherSchoolOrderByRelationAggregateInput
    students?: StudentProfileOrderByRelationAggregateInput
    schoolTopics?: SchoolTopicOrderByRelationAggregateInput
  }

  export type SchoolWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SchoolWhereInput | SchoolWhereInput[]
    OR?: SchoolWhereInput[]
    NOT?: SchoolWhereInput | SchoolWhereInput[]
    name?: StringFilter<"School"> | string
    teacherSchools?: TeacherSchoolListRelationFilter
    students?: StudentProfileListRelationFilter
    schoolTopics?: SchoolTopicListRelationFilter
  }, "id">

  export type SchoolOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: SchoolCountOrderByAggregateInput
    _max?: SchoolMaxOrderByAggregateInput
    _min?: SchoolMinOrderByAggregateInput
  }

  export type SchoolScalarWhereWithAggregatesInput = {
    AND?: SchoolScalarWhereWithAggregatesInput | SchoolScalarWhereWithAggregatesInput[]
    OR?: SchoolScalarWhereWithAggregatesInput[]
    NOT?: SchoolScalarWhereWithAggregatesInput | SchoolScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"School"> | string
    name?: StringWithAggregatesFilter<"School"> | string
  }

  export type TeacherSchoolWhereInput = {
    AND?: TeacherSchoolWhereInput | TeacherSchoolWhereInput[]
    OR?: TeacherSchoolWhereInput[]
    NOT?: TeacherSchoolWhereInput | TeacherSchoolWhereInput[]
    id?: StringFilter<"TeacherSchool"> | string
    teacherId?: StringFilter<"TeacherSchool"> | string
    schoolId?: StringFilter<"TeacherSchool"> | string
    teacher?: XOR<UserScalarRelationFilter, UserWhereInput>
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }

  export type TeacherSchoolOrderByWithRelationInput = {
    id?: SortOrder
    teacherId?: SortOrder
    schoolId?: SortOrder
    teacher?: UserOrderByWithRelationInput
    school?: SchoolOrderByWithRelationInput
  }

  export type TeacherSchoolWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    teacherId_schoolId?: TeacherSchoolTeacherIdSchoolIdCompoundUniqueInput
    AND?: TeacherSchoolWhereInput | TeacherSchoolWhereInput[]
    OR?: TeacherSchoolWhereInput[]
    NOT?: TeacherSchoolWhereInput | TeacherSchoolWhereInput[]
    teacherId?: StringFilter<"TeacherSchool"> | string
    schoolId?: StringFilter<"TeacherSchool"> | string
    teacher?: XOR<UserScalarRelationFilter, UserWhereInput>
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }, "id" | "teacherId_schoolId">

  export type TeacherSchoolOrderByWithAggregationInput = {
    id?: SortOrder
    teacherId?: SortOrder
    schoolId?: SortOrder
    _count?: TeacherSchoolCountOrderByAggregateInput
    _max?: TeacherSchoolMaxOrderByAggregateInput
    _min?: TeacherSchoolMinOrderByAggregateInput
  }

  export type TeacherSchoolScalarWhereWithAggregatesInput = {
    AND?: TeacherSchoolScalarWhereWithAggregatesInput | TeacherSchoolScalarWhereWithAggregatesInput[]
    OR?: TeacherSchoolScalarWhereWithAggregatesInput[]
    NOT?: TeacherSchoolScalarWhereWithAggregatesInput | TeacherSchoolScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TeacherSchool"> | string
    teacherId?: StringWithAggregatesFilter<"TeacherSchool"> | string
    schoolId?: StringWithAggregatesFilter<"TeacherSchool"> | string
  }

  export type StudentProfileWhereInput = {
    AND?: StudentProfileWhereInput | StudentProfileWhereInput[]
    OR?: StudentProfileWhereInput[]
    NOT?: StudentProfileWhereInput | StudentProfileWhereInput[]
    id?: StringFilter<"StudentProfile"> | string
    studentId?: StringFilter<"StudentProfile"> | string
    schoolId?: StringFilter<"StudentProfile"> | string
    firstName?: StringNullableFilter<"StudentProfile"> | string | null
    lastName?: StringNullableFilter<"StudentProfile"> | string | null
    grade?: IntNullableFilter<"StudentProfile"> | number | null
    city?: StringNullableFilter<"StudentProfile"> | string | null
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }

  export type StudentProfileOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    schoolId?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    grade?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    student?: UserOrderByWithRelationInput
    school?: SchoolOrderByWithRelationInput
  }

  export type StudentProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    studentId?: string
    AND?: StudentProfileWhereInput | StudentProfileWhereInput[]
    OR?: StudentProfileWhereInput[]
    NOT?: StudentProfileWhereInput | StudentProfileWhereInput[]
    schoolId?: StringFilter<"StudentProfile"> | string
    firstName?: StringNullableFilter<"StudentProfile"> | string | null
    lastName?: StringNullableFilter<"StudentProfile"> | string | null
    grade?: IntNullableFilter<"StudentProfile"> | number | null
    city?: StringNullableFilter<"StudentProfile"> | string | null
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }, "id" | "studentId">

  export type StudentProfileOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    schoolId?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    grade?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    _count?: StudentProfileCountOrderByAggregateInput
    _avg?: StudentProfileAvgOrderByAggregateInput
    _max?: StudentProfileMaxOrderByAggregateInput
    _min?: StudentProfileMinOrderByAggregateInput
    _sum?: StudentProfileSumOrderByAggregateInput
  }

  export type StudentProfileScalarWhereWithAggregatesInput = {
    AND?: StudentProfileScalarWhereWithAggregatesInput | StudentProfileScalarWhereWithAggregatesInput[]
    OR?: StudentProfileScalarWhereWithAggregatesInput[]
    NOT?: StudentProfileScalarWhereWithAggregatesInput | StudentProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudentProfile"> | string
    studentId?: StringWithAggregatesFilter<"StudentProfile"> | string
    schoolId?: StringWithAggregatesFilter<"StudentProfile"> | string
    firstName?: StringNullableWithAggregatesFilter<"StudentProfile"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"StudentProfile"> | string | null
    grade?: IntNullableWithAggregatesFilter<"StudentProfile"> | number | null
    city?: StringNullableWithAggregatesFilter<"StudentProfile"> | string | null
  }

  export type TopicWhereInput = {
    AND?: TopicWhereInput | TopicWhereInput[]
    OR?: TopicWhereInput[]
    NOT?: TopicWhereInput | TopicWhereInput[]
    id?: StringFilter<"Topic"> | string
    title?: StringFilter<"Topic"> | string
    orderIndex?: IntFilter<"Topic"> | number
    isActive?: BoolFilter<"Topic"> | boolean
    createdAt?: DateTimeFilter<"Topic"> | Date | string
    createdById?: StringNullableFilter<"Topic"> | string | null
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    schoolTopics?: SchoolTopicListRelationFilter
    questions?: QuestionListRelationFilter
  }

  export type TopicOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    orderIndex?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrderInput | SortOrder
    createdBy?: UserOrderByWithRelationInput
    schoolTopics?: SchoolTopicOrderByRelationAggregateInput
    questions?: QuestionOrderByRelationAggregateInput
  }

  export type TopicWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orderIndex?: number
    AND?: TopicWhereInput | TopicWhereInput[]
    OR?: TopicWhereInput[]
    NOT?: TopicWhereInput | TopicWhereInput[]
    title?: StringFilter<"Topic"> | string
    isActive?: BoolFilter<"Topic"> | boolean
    createdAt?: DateTimeFilter<"Topic"> | Date | string
    createdById?: StringNullableFilter<"Topic"> | string | null
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    schoolTopics?: SchoolTopicListRelationFilter
    questions?: QuestionListRelationFilter
  }, "id" | "orderIndex">

  export type TopicOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    orderIndex?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrderInput | SortOrder
    _count?: TopicCountOrderByAggregateInput
    _avg?: TopicAvgOrderByAggregateInput
    _max?: TopicMaxOrderByAggregateInput
    _min?: TopicMinOrderByAggregateInput
    _sum?: TopicSumOrderByAggregateInput
  }

  export type TopicScalarWhereWithAggregatesInput = {
    AND?: TopicScalarWhereWithAggregatesInput | TopicScalarWhereWithAggregatesInput[]
    OR?: TopicScalarWhereWithAggregatesInput[]
    NOT?: TopicScalarWhereWithAggregatesInput | TopicScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Topic"> | string
    title?: StringWithAggregatesFilter<"Topic"> | string
    orderIndex?: IntWithAggregatesFilter<"Topic"> | number
    isActive?: BoolWithAggregatesFilter<"Topic"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Topic"> | Date | string
    createdById?: StringNullableWithAggregatesFilter<"Topic"> | string | null
  }

  export type SchoolTopicWhereInput = {
    AND?: SchoolTopicWhereInput | SchoolTopicWhereInput[]
    OR?: SchoolTopicWhereInput[]
    NOT?: SchoolTopicWhereInput | SchoolTopicWhereInput[]
    id?: StringFilter<"SchoolTopic"> | string
    schoolId?: StringFilter<"SchoolTopic"> | string
    topicId?: StringFilter<"SchoolTopic"> | string
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
    topic?: XOR<TopicScalarRelationFilter, TopicWhereInput>
  }

  export type SchoolTopicOrderByWithRelationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    topicId?: SortOrder
    school?: SchoolOrderByWithRelationInput
    topic?: TopicOrderByWithRelationInput
  }

  export type SchoolTopicWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    schoolId_topicId?: SchoolTopicSchoolIdTopicIdCompoundUniqueInput
    AND?: SchoolTopicWhereInput | SchoolTopicWhereInput[]
    OR?: SchoolTopicWhereInput[]
    NOT?: SchoolTopicWhereInput | SchoolTopicWhereInput[]
    schoolId?: StringFilter<"SchoolTopic"> | string
    topicId?: StringFilter<"SchoolTopic"> | string
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
    topic?: XOR<TopicScalarRelationFilter, TopicWhereInput>
  }, "id" | "schoolId_topicId">

  export type SchoolTopicOrderByWithAggregationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    topicId?: SortOrder
    _count?: SchoolTopicCountOrderByAggregateInput
    _max?: SchoolTopicMaxOrderByAggregateInput
    _min?: SchoolTopicMinOrderByAggregateInput
  }

  export type SchoolTopicScalarWhereWithAggregatesInput = {
    AND?: SchoolTopicScalarWhereWithAggregatesInput | SchoolTopicScalarWhereWithAggregatesInput[]
    OR?: SchoolTopicScalarWhereWithAggregatesInput[]
    NOT?: SchoolTopicScalarWhereWithAggregatesInput | SchoolTopicScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SchoolTopic"> | string
    schoolId?: StringWithAggregatesFilter<"SchoolTopic"> | string
    topicId?: StringWithAggregatesFilter<"SchoolTopic"> | string
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: StringFilter<"Question"> | string
    topicId?: StringFilter<"Question"> | string
    type?: EnumQuestionTypeFilter<"Question"> | $Enums.QuestionType
    difficulty?: EnumDifficultyFilter<"Question"> | $Enums.Difficulty
    prompt?: StringFilter<"Question"> | string
    options?: JsonNullableFilter<"Question">
    correctKey?: StringNullableFilter<"Question"> | string | null
    correctNum?: StringNullableFilter<"Question"> | string | null
    createdAt?: DateTimeFilter<"Question"> | Date | string
    topic?: XOR<TopicScalarRelationFilter, TopicWhereInput>
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    topicId?: SortOrder
    type?: SortOrder
    difficulty?: SortOrder
    prompt?: SortOrder
    options?: SortOrderInput | SortOrder
    correctKey?: SortOrderInput | SortOrder
    correctNum?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    topic?: TopicOrderByWithRelationInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    topicId?: StringFilter<"Question"> | string
    type?: EnumQuestionTypeFilter<"Question"> | $Enums.QuestionType
    difficulty?: EnumDifficultyFilter<"Question"> | $Enums.Difficulty
    prompt?: StringFilter<"Question"> | string
    options?: JsonNullableFilter<"Question">
    correctKey?: StringNullableFilter<"Question"> | string | null
    correctNum?: StringNullableFilter<"Question"> | string | null
    createdAt?: DateTimeFilter<"Question"> | Date | string
    topic?: XOR<TopicScalarRelationFilter, TopicWhereInput>
  }, "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    topicId?: SortOrder
    type?: SortOrder
    difficulty?: SortOrder
    prompt?: SortOrder
    options?: SortOrderInput | SortOrder
    correctKey?: SortOrderInput | SortOrder
    correctNum?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Question"> | string
    topicId?: StringWithAggregatesFilter<"Question"> | string
    type?: EnumQuestionTypeWithAggregatesFilter<"Question"> | $Enums.QuestionType
    difficulty?: EnumDifficultyWithAggregatesFilter<"Question"> | $Enums.Difficulty
    prompt?: StringWithAggregatesFilter<"Question"> | string
    options?: JsonNullableWithAggregatesFilter<"Question">
    correctKey?: StringNullableWithAggregatesFilter<"Question"> | string | null
    correctNum?: StringNullableWithAggregatesFilter<"Question"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    teacherSchools?: TeacherSchoolCreateNestedManyWithoutTeacherInput
    studentProfile?: StudentProfileCreateNestedOneWithoutStudentInput
    createdTopics?: TopicCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    teacherSchools?: TeacherSchoolUncheckedCreateNestedManyWithoutTeacherInput
    studentProfile?: StudentProfileUncheckedCreateNestedOneWithoutStudentInput
    createdTopics?: TopicUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherSchools?: TeacherSchoolUpdateManyWithoutTeacherNestedInput
    studentProfile?: StudentProfileUpdateOneWithoutStudentNestedInput
    createdTopics?: TopicUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherSchools?: TeacherSchoolUncheckedUpdateManyWithoutTeacherNestedInput
    studentProfile?: StudentProfileUncheckedUpdateOneWithoutStudentNestedInput
    createdTopics?: TopicUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolCreateInput = {
    id?: string
    name: string
    teacherSchools?: TeacherSchoolCreateNestedManyWithoutSchoolInput
    students?: StudentProfileCreateNestedManyWithoutSchoolInput
    schoolTopics?: SchoolTopicCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateInput = {
    id?: string
    name: string
    teacherSchools?: TeacherSchoolUncheckedCreateNestedManyWithoutSchoolInput
    students?: StudentProfileUncheckedCreateNestedManyWithoutSchoolInput
    schoolTopics?: SchoolTopicUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    teacherSchools?: TeacherSchoolUpdateManyWithoutSchoolNestedInput
    students?: StudentProfileUpdateManyWithoutSchoolNestedInput
    schoolTopics?: SchoolTopicUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    teacherSchools?: TeacherSchoolUncheckedUpdateManyWithoutSchoolNestedInput
    students?: StudentProfileUncheckedUpdateManyWithoutSchoolNestedInput
    schoolTopics?: SchoolTopicUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolCreateManyInput = {
    id?: string
    name: string
  }

  export type SchoolUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SchoolUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TeacherSchoolCreateInput = {
    id?: string
    teacher: UserCreateNestedOneWithoutTeacherSchoolsInput
    school: SchoolCreateNestedOneWithoutTeacherSchoolsInput
  }

  export type TeacherSchoolUncheckedCreateInput = {
    id?: string
    teacherId: string
    schoolId: string
  }

  export type TeacherSchoolUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacher?: UserUpdateOneRequiredWithoutTeacherSchoolsNestedInput
    school?: SchoolUpdateOneRequiredWithoutTeacherSchoolsNestedInput
  }

  export type TeacherSchoolUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
  }

  export type TeacherSchoolCreateManyInput = {
    id?: string
    teacherId: string
    schoolId: string
  }

  export type TeacherSchoolUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type TeacherSchoolUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentProfileCreateInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    grade?: number | null
    city?: string | null
    student: UserCreateNestedOneWithoutStudentProfileInput
    school: SchoolCreateNestedOneWithoutStudentsInput
  }

  export type StudentProfileUncheckedCreateInput = {
    id?: string
    studentId: string
    schoolId: string
    firstName?: string | null
    lastName?: string | null
    grade?: number | null
    city?: string | null
  }

  export type StudentProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableIntFieldUpdateOperationsInput | number | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    student?: UserUpdateOneRequiredWithoutStudentProfileNestedInput
    school?: SchoolUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type StudentProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableIntFieldUpdateOperationsInput | number | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentProfileCreateManyInput = {
    id?: string
    studentId: string
    schoolId: string
    firstName?: string | null
    lastName?: string | null
    grade?: number | null
    city?: string | null
  }

  export type StudentProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableIntFieldUpdateOperationsInput | number | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableIntFieldUpdateOperationsInput | number | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TopicCreateInput = {
    id?: string
    title: string
    orderIndex: number
    isActive?: boolean
    createdAt?: Date | string
    createdBy?: UserCreateNestedOneWithoutCreatedTopicsInput
    schoolTopics?: SchoolTopicCreateNestedManyWithoutTopicInput
    questions?: QuestionCreateNestedManyWithoutTopicInput
  }

  export type TopicUncheckedCreateInput = {
    id?: string
    title: string
    orderIndex: number
    isActive?: boolean
    createdAt?: Date | string
    createdById?: string | null
    schoolTopics?: SchoolTopicUncheckedCreateNestedManyWithoutTopicInput
    questions?: QuestionUncheckedCreateNestedManyWithoutTopicInput
  }

  export type TopicUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneWithoutCreatedTopicsNestedInput
    schoolTopics?: SchoolTopicUpdateManyWithoutTopicNestedInput
    questions?: QuestionUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    schoolTopics?: SchoolTopicUncheckedUpdateManyWithoutTopicNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type TopicCreateManyInput = {
    id?: string
    title: string
    orderIndex: number
    isActive?: boolean
    createdAt?: Date | string
    createdById?: string | null
  }

  export type TopicUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopicUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SchoolTopicCreateInput = {
    id?: string
    school: SchoolCreateNestedOneWithoutSchoolTopicsInput
    topic: TopicCreateNestedOneWithoutSchoolTopicsInput
  }

  export type SchoolTopicUncheckedCreateInput = {
    id?: string
    schoolId: string
    topicId: string
  }

  export type SchoolTopicUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    school?: SchoolUpdateOneRequiredWithoutSchoolTopicsNestedInput
    topic?: TopicUpdateOneRequiredWithoutSchoolTopicsNestedInput
  }

  export type SchoolTopicUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
  }

  export type SchoolTopicCreateManyInput = {
    id?: string
    schoolId: string
    topicId: string
  }

  export type SchoolTopicUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type SchoolTopicUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionCreateInput = {
    id?: string
    type: $Enums.QuestionType
    difficulty: $Enums.Difficulty
    prompt: string
    options?: NullableJsonNullValueInput | InputJsonValue
    correctKey?: string | null
    correctNum?: string | null
    createdAt?: Date | string
    topic: TopicCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: string
    topicId: string
    type: $Enums.QuestionType
    difficulty: $Enums.Difficulty
    prompt: string
    options?: NullableJsonNullValueInput | InputJsonValue
    correctKey?: string | null
    correctNum?: string | null
    createdAt?: Date | string
  }

  export type QuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    prompt?: StringFieldUpdateOperationsInput | string
    options?: NullableJsonNullValueInput | InputJsonValue
    correctKey?: NullableStringFieldUpdateOperationsInput | string | null
    correctNum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topic?: TopicUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    prompt?: StringFieldUpdateOperationsInput | string
    options?: NullableJsonNullValueInput | InputJsonValue
    correctKey?: NullableStringFieldUpdateOperationsInput | string | null
    correctNum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateManyInput = {
    id?: string
    topicId: string
    type: $Enums.QuestionType
    difficulty: $Enums.Difficulty
    prompt: string
    options?: NullableJsonNullValueInput | InputJsonValue
    correctKey?: string | null
    correctNum?: string | null
    createdAt?: Date | string
  }

  export type QuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    prompt?: StringFieldUpdateOperationsInput | string
    options?: NullableJsonNullValueInput | InputJsonValue
    correctKey?: NullableStringFieldUpdateOperationsInput | string | null
    correctNum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    prompt?: StringFieldUpdateOperationsInput | string
    options?: NullableJsonNullValueInput | InputJsonValue
    correctKey?: NullableStringFieldUpdateOperationsInput | string | null
    correctNum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type TeacherSchoolListRelationFilter = {
    every?: TeacherSchoolWhereInput
    some?: TeacherSchoolWhereInput
    none?: TeacherSchoolWhereInput
  }

  export type StudentProfileNullableScalarRelationFilter = {
    is?: StudentProfileWhereInput | null
    isNot?: StudentProfileWhereInput | null
  }

  export type TopicListRelationFilter = {
    every?: TopicWhereInput
    some?: TopicWhereInput
    none?: TopicWhereInput
  }

  export type TeacherSchoolOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TopicOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
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

  export type StudentProfileListRelationFilter = {
    every?: StudentProfileWhereInput
    some?: StudentProfileWhereInput
    none?: StudentProfileWhereInput
  }

  export type SchoolTopicListRelationFilter = {
    every?: SchoolTopicWhereInput
    some?: SchoolTopicWhereInput
    none?: SchoolTopicWhereInput
  }

  export type StudentProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SchoolTopicOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SchoolCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SchoolMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SchoolMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SchoolScalarRelationFilter = {
    is?: SchoolWhereInput
    isNot?: SchoolWhereInput
  }

  export type TeacherSchoolTeacherIdSchoolIdCompoundUniqueInput = {
    teacherId: string
    schoolId: string
  }

  export type TeacherSchoolCountOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    schoolId?: SortOrder
  }

  export type TeacherSchoolMaxOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    schoolId?: SortOrder
  }

  export type TeacherSchoolMinOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    schoolId?: SortOrder
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type StudentProfileCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    schoolId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    grade?: SortOrder
    city?: SortOrder
  }

  export type StudentProfileAvgOrderByAggregateInput = {
    grade?: SortOrder
  }

  export type StudentProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    schoolId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    grade?: SortOrder
    city?: SortOrder
  }

  export type StudentProfileMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    schoolId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    grade?: SortOrder
    city?: SortOrder
  }

  export type StudentProfileSumOrderByAggregateInput = {
    grade?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TopicCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    orderIndex?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
  }

  export type TopicAvgOrderByAggregateInput = {
    orderIndex?: SortOrder
  }

  export type TopicMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    orderIndex?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
  }

  export type TopicMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    orderIndex?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
  }

  export type TopicSumOrderByAggregateInput = {
    orderIndex?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TopicScalarRelationFilter = {
    is?: TopicWhereInput
    isNot?: TopicWhereInput
  }

  export type SchoolTopicSchoolIdTopicIdCompoundUniqueInput = {
    schoolId: string
    topicId: string
  }

  export type SchoolTopicCountOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    topicId?: SortOrder
  }

  export type SchoolTopicMaxOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    topicId?: SortOrder
  }

  export type SchoolTopicMinOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    topicId?: SortOrder
  }

  export type EnumQuestionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionTypeFilter<$PrismaModel> | $Enums.QuestionType
  }

  export type EnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    topicId?: SortOrder
    type?: SortOrder
    difficulty?: SortOrder
    prompt?: SortOrder
    options?: SortOrder
    correctKey?: SortOrder
    correctNum?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    topicId?: SortOrder
    type?: SortOrder
    difficulty?: SortOrder
    prompt?: SortOrder
    correctKey?: SortOrder
    correctNum?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    topicId?: SortOrder
    type?: SortOrder
    difficulty?: SortOrder
    prompt?: SortOrder
    correctKey?: SortOrder
    correctNum?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumQuestionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionTypeWithAggregatesFilter<$PrismaModel> | $Enums.QuestionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuestionTypeFilter<$PrismaModel>
    _max?: NestedEnumQuestionTypeFilter<$PrismaModel>
  }

  export type EnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type TeacherSchoolCreateNestedManyWithoutTeacherInput = {
    create?: XOR<TeacherSchoolCreateWithoutTeacherInput, TeacherSchoolUncheckedCreateWithoutTeacherInput> | TeacherSchoolCreateWithoutTeacherInput[] | TeacherSchoolUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherSchoolCreateOrConnectWithoutTeacherInput | TeacherSchoolCreateOrConnectWithoutTeacherInput[]
    createMany?: TeacherSchoolCreateManyTeacherInputEnvelope
    connect?: TeacherSchoolWhereUniqueInput | TeacherSchoolWhereUniqueInput[]
  }

  export type StudentProfileCreateNestedOneWithoutStudentInput = {
    create?: XOR<StudentProfileCreateWithoutStudentInput, StudentProfileUncheckedCreateWithoutStudentInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutStudentInput
    connect?: StudentProfileWhereUniqueInput
  }

  export type TopicCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<TopicCreateWithoutCreatedByInput, TopicUncheckedCreateWithoutCreatedByInput> | TopicCreateWithoutCreatedByInput[] | TopicUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TopicCreateOrConnectWithoutCreatedByInput | TopicCreateOrConnectWithoutCreatedByInput[]
    createMany?: TopicCreateManyCreatedByInputEnvelope
    connect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
  }

  export type TeacherSchoolUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<TeacherSchoolCreateWithoutTeacherInput, TeacherSchoolUncheckedCreateWithoutTeacherInput> | TeacherSchoolCreateWithoutTeacherInput[] | TeacherSchoolUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherSchoolCreateOrConnectWithoutTeacherInput | TeacherSchoolCreateOrConnectWithoutTeacherInput[]
    createMany?: TeacherSchoolCreateManyTeacherInputEnvelope
    connect?: TeacherSchoolWhereUniqueInput | TeacherSchoolWhereUniqueInput[]
  }

  export type StudentProfileUncheckedCreateNestedOneWithoutStudentInput = {
    create?: XOR<StudentProfileCreateWithoutStudentInput, StudentProfileUncheckedCreateWithoutStudentInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutStudentInput
    connect?: StudentProfileWhereUniqueInput
  }

  export type TopicUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<TopicCreateWithoutCreatedByInput, TopicUncheckedCreateWithoutCreatedByInput> | TopicCreateWithoutCreatedByInput[] | TopicUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TopicCreateOrConnectWithoutCreatedByInput | TopicCreateOrConnectWithoutCreatedByInput[]
    createMany?: TopicCreateManyCreatedByInputEnvelope
    connect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TeacherSchoolUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<TeacherSchoolCreateWithoutTeacherInput, TeacherSchoolUncheckedCreateWithoutTeacherInput> | TeacherSchoolCreateWithoutTeacherInput[] | TeacherSchoolUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherSchoolCreateOrConnectWithoutTeacherInput | TeacherSchoolCreateOrConnectWithoutTeacherInput[]
    upsert?: TeacherSchoolUpsertWithWhereUniqueWithoutTeacherInput | TeacherSchoolUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: TeacherSchoolCreateManyTeacherInputEnvelope
    set?: TeacherSchoolWhereUniqueInput | TeacherSchoolWhereUniqueInput[]
    disconnect?: TeacherSchoolWhereUniqueInput | TeacherSchoolWhereUniqueInput[]
    delete?: TeacherSchoolWhereUniqueInput | TeacherSchoolWhereUniqueInput[]
    connect?: TeacherSchoolWhereUniqueInput | TeacherSchoolWhereUniqueInput[]
    update?: TeacherSchoolUpdateWithWhereUniqueWithoutTeacherInput | TeacherSchoolUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: TeacherSchoolUpdateManyWithWhereWithoutTeacherInput | TeacherSchoolUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: TeacherSchoolScalarWhereInput | TeacherSchoolScalarWhereInput[]
  }

  export type StudentProfileUpdateOneWithoutStudentNestedInput = {
    create?: XOR<StudentProfileCreateWithoutStudentInput, StudentProfileUncheckedCreateWithoutStudentInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutStudentInput
    upsert?: StudentProfileUpsertWithoutStudentInput
    disconnect?: StudentProfileWhereInput | boolean
    delete?: StudentProfileWhereInput | boolean
    connect?: StudentProfileWhereUniqueInput
    update?: XOR<XOR<StudentProfileUpdateToOneWithWhereWithoutStudentInput, StudentProfileUpdateWithoutStudentInput>, StudentProfileUncheckedUpdateWithoutStudentInput>
  }

  export type TopicUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<TopicCreateWithoutCreatedByInput, TopicUncheckedCreateWithoutCreatedByInput> | TopicCreateWithoutCreatedByInput[] | TopicUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TopicCreateOrConnectWithoutCreatedByInput | TopicCreateOrConnectWithoutCreatedByInput[]
    upsert?: TopicUpsertWithWhereUniqueWithoutCreatedByInput | TopicUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: TopicCreateManyCreatedByInputEnvelope
    set?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    disconnect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    delete?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    connect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    update?: TopicUpdateWithWhereUniqueWithoutCreatedByInput | TopicUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: TopicUpdateManyWithWhereWithoutCreatedByInput | TopicUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: TopicScalarWhereInput | TopicScalarWhereInput[]
  }

  export type TeacherSchoolUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<TeacherSchoolCreateWithoutTeacherInput, TeacherSchoolUncheckedCreateWithoutTeacherInput> | TeacherSchoolCreateWithoutTeacherInput[] | TeacherSchoolUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherSchoolCreateOrConnectWithoutTeacherInput | TeacherSchoolCreateOrConnectWithoutTeacherInput[]
    upsert?: TeacherSchoolUpsertWithWhereUniqueWithoutTeacherInput | TeacherSchoolUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: TeacherSchoolCreateManyTeacherInputEnvelope
    set?: TeacherSchoolWhereUniqueInput | TeacherSchoolWhereUniqueInput[]
    disconnect?: TeacherSchoolWhereUniqueInput | TeacherSchoolWhereUniqueInput[]
    delete?: TeacherSchoolWhereUniqueInput | TeacherSchoolWhereUniqueInput[]
    connect?: TeacherSchoolWhereUniqueInput | TeacherSchoolWhereUniqueInput[]
    update?: TeacherSchoolUpdateWithWhereUniqueWithoutTeacherInput | TeacherSchoolUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: TeacherSchoolUpdateManyWithWhereWithoutTeacherInput | TeacherSchoolUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: TeacherSchoolScalarWhereInput | TeacherSchoolScalarWhereInput[]
  }

  export type StudentProfileUncheckedUpdateOneWithoutStudentNestedInput = {
    create?: XOR<StudentProfileCreateWithoutStudentInput, StudentProfileUncheckedCreateWithoutStudentInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutStudentInput
    upsert?: StudentProfileUpsertWithoutStudentInput
    disconnect?: StudentProfileWhereInput | boolean
    delete?: StudentProfileWhereInput | boolean
    connect?: StudentProfileWhereUniqueInput
    update?: XOR<XOR<StudentProfileUpdateToOneWithWhereWithoutStudentInput, StudentProfileUpdateWithoutStudentInput>, StudentProfileUncheckedUpdateWithoutStudentInput>
  }

  export type TopicUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<TopicCreateWithoutCreatedByInput, TopicUncheckedCreateWithoutCreatedByInput> | TopicCreateWithoutCreatedByInput[] | TopicUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TopicCreateOrConnectWithoutCreatedByInput | TopicCreateOrConnectWithoutCreatedByInput[]
    upsert?: TopicUpsertWithWhereUniqueWithoutCreatedByInput | TopicUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: TopicCreateManyCreatedByInputEnvelope
    set?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    disconnect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    delete?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    connect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    update?: TopicUpdateWithWhereUniqueWithoutCreatedByInput | TopicUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: TopicUpdateManyWithWhereWithoutCreatedByInput | TopicUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: TopicScalarWhereInput | TopicScalarWhereInput[]
  }

  export type TeacherSchoolCreateNestedManyWithoutSchoolInput = {
    create?: XOR<TeacherSchoolCreateWithoutSchoolInput, TeacherSchoolUncheckedCreateWithoutSchoolInput> | TeacherSchoolCreateWithoutSchoolInput[] | TeacherSchoolUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: TeacherSchoolCreateOrConnectWithoutSchoolInput | TeacherSchoolCreateOrConnectWithoutSchoolInput[]
    createMany?: TeacherSchoolCreateManySchoolInputEnvelope
    connect?: TeacherSchoolWhereUniqueInput | TeacherSchoolWhereUniqueInput[]
  }

  export type StudentProfileCreateNestedManyWithoutSchoolInput = {
    create?: XOR<StudentProfileCreateWithoutSchoolInput, StudentProfileUncheckedCreateWithoutSchoolInput> | StudentProfileCreateWithoutSchoolInput[] | StudentProfileUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: StudentProfileCreateOrConnectWithoutSchoolInput | StudentProfileCreateOrConnectWithoutSchoolInput[]
    createMany?: StudentProfileCreateManySchoolInputEnvelope
    connect?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
  }

  export type SchoolTopicCreateNestedManyWithoutSchoolInput = {
    create?: XOR<SchoolTopicCreateWithoutSchoolInput, SchoolTopicUncheckedCreateWithoutSchoolInput> | SchoolTopicCreateWithoutSchoolInput[] | SchoolTopicUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: SchoolTopicCreateOrConnectWithoutSchoolInput | SchoolTopicCreateOrConnectWithoutSchoolInput[]
    createMany?: SchoolTopicCreateManySchoolInputEnvelope
    connect?: SchoolTopicWhereUniqueInput | SchoolTopicWhereUniqueInput[]
  }

  export type TeacherSchoolUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<TeacherSchoolCreateWithoutSchoolInput, TeacherSchoolUncheckedCreateWithoutSchoolInput> | TeacherSchoolCreateWithoutSchoolInput[] | TeacherSchoolUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: TeacherSchoolCreateOrConnectWithoutSchoolInput | TeacherSchoolCreateOrConnectWithoutSchoolInput[]
    createMany?: TeacherSchoolCreateManySchoolInputEnvelope
    connect?: TeacherSchoolWhereUniqueInput | TeacherSchoolWhereUniqueInput[]
  }

  export type StudentProfileUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<StudentProfileCreateWithoutSchoolInput, StudentProfileUncheckedCreateWithoutSchoolInput> | StudentProfileCreateWithoutSchoolInput[] | StudentProfileUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: StudentProfileCreateOrConnectWithoutSchoolInput | StudentProfileCreateOrConnectWithoutSchoolInput[]
    createMany?: StudentProfileCreateManySchoolInputEnvelope
    connect?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
  }

  export type SchoolTopicUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<SchoolTopicCreateWithoutSchoolInput, SchoolTopicUncheckedCreateWithoutSchoolInput> | SchoolTopicCreateWithoutSchoolInput[] | SchoolTopicUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: SchoolTopicCreateOrConnectWithoutSchoolInput | SchoolTopicCreateOrConnectWithoutSchoolInput[]
    createMany?: SchoolTopicCreateManySchoolInputEnvelope
    connect?: SchoolTopicWhereUniqueInput | SchoolTopicWhereUniqueInput[]
  }

  export type TeacherSchoolUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<TeacherSchoolCreateWithoutSchoolInput, TeacherSchoolUncheckedCreateWithoutSchoolInput> | TeacherSchoolCreateWithoutSchoolInput[] | TeacherSchoolUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: TeacherSchoolCreateOrConnectWithoutSchoolInput | TeacherSchoolCreateOrConnectWithoutSchoolInput[]
    upsert?: TeacherSchoolUpsertWithWhereUniqueWithoutSchoolInput | TeacherSchoolUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: TeacherSchoolCreateManySchoolInputEnvelope
    set?: TeacherSchoolWhereUniqueInput | TeacherSchoolWhereUniqueInput[]
    disconnect?: TeacherSchoolWhereUniqueInput | TeacherSchoolWhereUniqueInput[]
    delete?: TeacherSchoolWhereUniqueInput | TeacherSchoolWhereUniqueInput[]
    connect?: TeacherSchoolWhereUniqueInput | TeacherSchoolWhereUniqueInput[]
    update?: TeacherSchoolUpdateWithWhereUniqueWithoutSchoolInput | TeacherSchoolUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: TeacherSchoolUpdateManyWithWhereWithoutSchoolInput | TeacherSchoolUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: TeacherSchoolScalarWhereInput | TeacherSchoolScalarWhereInput[]
  }

  export type StudentProfileUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<StudentProfileCreateWithoutSchoolInput, StudentProfileUncheckedCreateWithoutSchoolInput> | StudentProfileCreateWithoutSchoolInput[] | StudentProfileUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: StudentProfileCreateOrConnectWithoutSchoolInput | StudentProfileCreateOrConnectWithoutSchoolInput[]
    upsert?: StudentProfileUpsertWithWhereUniqueWithoutSchoolInput | StudentProfileUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: StudentProfileCreateManySchoolInputEnvelope
    set?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    disconnect?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    delete?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    connect?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    update?: StudentProfileUpdateWithWhereUniqueWithoutSchoolInput | StudentProfileUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: StudentProfileUpdateManyWithWhereWithoutSchoolInput | StudentProfileUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: StudentProfileScalarWhereInput | StudentProfileScalarWhereInput[]
  }

  export type SchoolTopicUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<SchoolTopicCreateWithoutSchoolInput, SchoolTopicUncheckedCreateWithoutSchoolInput> | SchoolTopicCreateWithoutSchoolInput[] | SchoolTopicUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: SchoolTopicCreateOrConnectWithoutSchoolInput | SchoolTopicCreateOrConnectWithoutSchoolInput[]
    upsert?: SchoolTopicUpsertWithWhereUniqueWithoutSchoolInput | SchoolTopicUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: SchoolTopicCreateManySchoolInputEnvelope
    set?: SchoolTopicWhereUniqueInput | SchoolTopicWhereUniqueInput[]
    disconnect?: SchoolTopicWhereUniqueInput | SchoolTopicWhereUniqueInput[]
    delete?: SchoolTopicWhereUniqueInput | SchoolTopicWhereUniqueInput[]
    connect?: SchoolTopicWhereUniqueInput | SchoolTopicWhereUniqueInput[]
    update?: SchoolTopicUpdateWithWhereUniqueWithoutSchoolInput | SchoolTopicUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: SchoolTopicUpdateManyWithWhereWithoutSchoolInput | SchoolTopicUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: SchoolTopicScalarWhereInput | SchoolTopicScalarWhereInput[]
  }

  export type TeacherSchoolUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<TeacherSchoolCreateWithoutSchoolInput, TeacherSchoolUncheckedCreateWithoutSchoolInput> | TeacherSchoolCreateWithoutSchoolInput[] | TeacherSchoolUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: TeacherSchoolCreateOrConnectWithoutSchoolInput | TeacherSchoolCreateOrConnectWithoutSchoolInput[]
    upsert?: TeacherSchoolUpsertWithWhereUniqueWithoutSchoolInput | TeacherSchoolUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: TeacherSchoolCreateManySchoolInputEnvelope
    set?: TeacherSchoolWhereUniqueInput | TeacherSchoolWhereUniqueInput[]
    disconnect?: TeacherSchoolWhereUniqueInput | TeacherSchoolWhereUniqueInput[]
    delete?: TeacherSchoolWhereUniqueInput | TeacherSchoolWhereUniqueInput[]
    connect?: TeacherSchoolWhereUniqueInput | TeacherSchoolWhereUniqueInput[]
    update?: TeacherSchoolUpdateWithWhereUniqueWithoutSchoolInput | TeacherSchoolUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: TeacherSchoolUpdateManyWithWhereWithoutSchoolInput | TeacherSchoolUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: TeacherSchoolScalarWhereInput | TeacherSchoolScalarWhereInput[]
  }

  export type StudentProfileUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<StudentProfileCreateWithoutSchoolInput, StudentProfileUncheckedCreateWithoutSchoolInput> | StudentProfileCreateWithoutSchoolInput[] | StudentProfileUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: StudentProfileCreateOrConnectWithoutSchoolInput | StudentProfileCreateOrConnectWithoutSchoolInput[]
    upsert?: StudentProfileUpsertWithWhereUniqueWithoutSchoolInput | StudentProfileUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: StudentProfileCreateManySchoolInputEnvelope
    set?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    disconnect?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    delete?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    connect?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    update?: StudentProfileUpdateWithWhereUniqueWithoutSchoolInput | StudentProfileUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: StudentProfileUpdateManyWithWhereWithoutSchoolInput | StudentProfileUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: StudentProfileScalarWhereInput | StudentProfileScalarWhereInput[]
  }

  export type SchoolTopicUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<SchoolTopicCreateWithoutSchoolInput, SchoolTopicUncheckedCreateWithoutSchoolInput> | SchoolTopicCreateWithoutSchoolInput[] | SchoolTopicUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: SchoolTopicCreateOrConnectWithoutSchoolInput | SchoolTopicCreateOrConnectWithoutSchoolInput[]
    upsert?: SchoolTopicUpsertWithWhereUniqueWithoutSchoolInput | SchoolTopicUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: SchoolTopicCreateManySchoolInputEnvelope
    set?: SchoolTopicWhereUniqueInput | SchoolTopicWhereUniqueInput[]
    disconnect?: SchoolTopicWhereUniqueInput | SchoolTopicWhereUniqueInput[]
    delete?: SchoolTopicWhereUniqueInput | SchoolTopicWhereUniqueInput[]
    connect?: SchoolTopicWhereUniqueInput | SchoolTopicWhereUniqueInput[]
    update?: SchoolTopicUpdateWithWhereUniqueWithoutSchoolInput | SchoolTopicUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: SchoolTopicUpdateManyWithWhereWithoutSchoolInput | SchoolTopicUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: SchoolTopicScalarWhereInput | SchoolTopicScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTeacherSchoolsInput = {
    create?: XOR<UserCreateWithoutTeacherSchoolsInput, UserUncheckedCreateWithoutTeacherSchoolsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeacherSchoolsInput
    connect?: UserWhereUniqueInput
  }

  export type SchoolCreateNestedOneWithoutTeacherSchoolsInput = {
    create?: XOR<SchoolCreateWithoutTeacherSchoolsInput, SchoolUncheckedCreateWithoutTeacherSchoolsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutTeacherSchoolsInput
    connect?: SchoolWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTeacherSchoolsNestedInput = {
    create?: XOR<UserCreateWithoutTeacherSchoolsInput, UserUncheckedCreateWithoutTeacherSchoolsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeacherSchoolsInput
    upsert?: UserUpsertWithoutTeacherSchoolsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTeacherSchoolsInput, UserUpdateWithoutTeacherSchoolsInput>, UserUncheckedUpdateWithoutTeacherSchoolsInput>
  }

  export type SchoolUpdateOneRequiredWithoutTeacherSchoolsNestedInput = {
    create?: XOR<SchoolCreateWithoutTeacherSchoolsInput, SchoolUncheckedCreateWithoutTeacherSchoolsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutTeacherSchoolsInput
    upsert?: SchoolUpsertWithoutTeacherSchoolsInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutTeacherSchoolsInput, SchoolUpdateWithoutTeacherSchoolsInput>, SchoolUncheckedUpdateWithoutTeacherSchoolsInput>
  }

  export type UserCreateNestedOneWithoutStudentProfileInput = {
    create?: XOR<UserCreateWithoutStudentProfileInput, UserUncheckedCreateWithoutStudentProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentProfileInput
    connect?: UserWhereUniqueInput
  }

  export type SchoolCreateNestedOneWithoutStudentsInput = {
    create?: XOR<SchoolCreateWithoutStudentsInput, SchoolUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutStudentsInput
    connect?: SchoolWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutStudentProfileNestedInput = {
    create?: XOR<UserCreateWithoutStudentProfileInput, UserUncheckedCreateWithoutStudentProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentProfileInput
    upsert?: UserUpsertWithoutStudentProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudentProfileInput, UserUpdateWithoutStudentProfileInput>, UserUncheckedUpdateWithoutStudentProfileInput>
  }

  export type SchoolUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: XOR<SchoolCreateWithoutStudentsInput, SchoolUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutStudentsInput
    upsert?: SchoolUpsertWithoutStudentsInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutStudentsInput, SchoolUpdateWithoutStudentsInput>, SchoolUncheckedUpdateWithoutStudentsInput>
  }

  export type UserCreateNestedOneWithoutCreatedTopicsInput = {
    create?: XOR<UserCreateWithoutCreatedTopicsInput, UserUncheckedCreateWithoutCreatedTopicsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedTopicsInput
    connect?: UserWhereUniqueInput
  }

  export type SchoolTopicCreateNestedManyWithoutTopicInput = {
    create?: XOR<SchoolTopicCreateWithoutTopicInput, SchoolTopicUncheckedCreateWithoutTopicInput> | SchoolTopicCreateWithoutTopicInput[] | SchoolTopicUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: SchoolTopicCreateOrConnectWithoutTopicInput | SchoolTopicCreateOrConnectWithoutTopicInput[]
    createMany?: SchoolTopicCreateManyTopicInputEnvelope
    connect?: SchoolTopicWhereUniqueInput | SchoolTopicWhereUniqueInput[]
  }

  export type QuestionCreateNestedManyWithoutTopicInput = {
    create?: XOR<QuestionCreateWithoutTopicInput, QuestionUncheckedCreateWithoutTopicInput> | QuestionCreateWithoutTopicInput[] | QuestionUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutTopicInput | QuestionCreateOrConnectWithoutTopicInput[]
    createMany?: QuestionCreateManyTopicInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type SchoolTopicUncheckedCreateNestedManyWithoutTopicInput = {
    create?: XOR<SchoolTopicCreateWithoutTopicInput, SchoolTopicUncheckedCreateWithoutTopicInput> | SchoolTopicCreateWithoutTopicInput[] | SchoolTopicUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: SchoolTopicCreateOrConnectWithoutTopicInput | SchoolTopicCreateOrConnectWithoutTopicInput[]
    createMany?: SchoolTopicCreateManyTopicInputEnvelope
    connect?: SchoolTopicWhereUniqueInput | SchoolTopicWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutTopicInput = {
    create?: XOR<QuestionCreateWithoutTopicInput, QuestionUncheckedCreateWithoutTopicInput> | QuestionCreateWithoutTopicInput[] | QuestionUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutTopicInput | QuestionCreateOrConnectWithoutTopicInput[]
    createMany?: QuestionCreateManyTopicInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneWithoutCreatedTopicsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedTopicsInput, UserUncheckedCreateWithoutCreatedTopicsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedTopicsInput
    upsert?: UserUpsertWithoutCreatedTopicsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedTopicsInput, UserUpdateWithoutCreatedTopicsInput>, UserUncheckedUpdateWithoutCreatedTopicsInput>
  }

  export type SchoolTopicUpdateManyWithoutTopicNestedInput = {
    create?: XOR<SchoolTopicCreateWithoutTopicInput, SchoolTopicUncheckedCreateWithoutTopicInput> | SchoolTopicCreateWithoutTopicInput[] | SchoolTopicUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: SchoolTopicCreateOrConnectWithoutTopicInput | SchoolTopicCreateOrConnectWithoutTopicInput[]
    upsert?: SchoolTopicUpsertWithWhereUniqueWithoutTopicInput | SchoolTopicUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: SchoolTopicCreateManyTopicInputEnvelope
    set?: SchoolTopicWhereUniqueInput | SchoolTopicWhereUniqueInput[]
    disconnect?: SchoolTopicWhereUniqueInput | SchoolTopicWhereUniqueInput[]
    delete?: SchoolTopicWhereUniqueInput | SchoolTopicWhereUniqueInput[]
    connect?: SchoolTopicWhereUniqueInput | SchoolTopicWhereUniqueInput[]
    update?: SchoolTopicUpdateWithWhereUniqueWithoutTopicInput | SchoolTopicUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: SchoolTopicUpdateManyWithWhereWithoutTopicInput | SchoolTopicUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: SchoolTopicScalarWhereInput | SchoolTopicScalarWhereInput[]
  }

  export type QuestionUpdateManyWithoutTopicNestedInput = {
    create?: XOR<QuestionCreateWithoutTopicInput, QuestionUncheckedCreateWithoutTopicInput> | QuestionCreateWithoutTopicInput[] | QuestionUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutTopicInput | QuestionCreateOrConnectWithoutTopicInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutTopicInput | QuestionUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: QuestionCreateManyTopicInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutTopicInput | QuestionUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutTopicInput | QuestionUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type SchoolTopicUncheckedUpdateManyWithoutTopicNestedInput = {
    create?: XOR<SchoolTopicCreateWithoutTopicInput, SchoolTopicUncheckedCreateWithoutTopicInput> | SchoolTopicCreateWithoutTopicInput[] | SchoolTopicUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: SchoolTopicCreateOrConnectWithoutTopicInput | SchoolTopicCreateOrConnectWithoutTopicInput[]
    upsert?: SchoolTopicUpsertWithWhereUniqueWithoutTopicInput | SchoolTopicUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: SchoolTopicCreateManyTopicInputEnvelope
    set?: SchoolTopicWhereUniqueInput | SchoolTopicWhereUniqueInput[]
    disconnect?: SchoolTopicWhereUniqueInput | SchoolTopicWhereUniqueInput[]
    delete?: SchoolTopicWhereUniqueInput | SchoolTopicWhereUniqueInput[]
    connect?: SchoolTopicWhereUniqueInput | SchoolTopicWhereUniqueInput[]
    update?: SchoolTopicUpdateWithWhereUniqueWithoutTopicInput | SchoolTopicUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: SchoolTopicUpdateManyWithWhereWithoutTopicInput | SchoolTopicUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: SchoolTopicScalarWhereInput | SchoolTopicScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutTopicNestedInput = {
    create?: XOR<QuestionCreateWithoutTopicInput, QuestionUncheckedCreateWithoutTopicInput> | QuestionCreateWithoutTopicInput[] | QuestionUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutTopicInput | QuestionCreateOrConnectWithoutTopicInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutTopicInput | QuestionUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: QuestionCreateManyTopicInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutTopicInput | QuestionUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutTopicInput | QuestionUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type SchoolCreateNestedOneWithoutSchoolTopicsInput = {
    create?: XOR<SchoolCreateWithoutSchoolTopicsInput, SchoolUncheckedCreateWithoutSchoolTopicsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutSchoolTopicsInput
    connect?: SchoolWhereUniqueInput
  }

  export type TopicCreateNestedOneWithoutSchoolTopicsInput = {
    create?: XOR<TopicCreateWithoutSchoolTopicsInput, TopicUncheckedCreateWithoutSchoolTopicsInput>
    connectOrCreate?: TopicCreateOrConnectWithoutSchoolTopicsInput
    connect?: TopicWhereUniqueInput
  }

  export type SchoolUpdateOneRequiredWithoutSchoolTopicsNestedInput = {
    create?: XOR<SchoolCreateWithoutSchoolTopicsInput, SchoolUncheckedCreateWithoutSchoolTopicsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutSchoolTopicsInput
    upsert?: SchoolUpsertWithoutSchoolTopicsInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutSchoolTopicsInput, SchoolUpdateWithoutSchoolTopicsInput>, SchoolUncheckedUpdateWithoutSchoolTopicsInput>
  }

  export type TopicUpdateOneRequiredWithoutSchoolTopicsNestedInput = {
    create?: XOR<TopicCreateWithoutSchoolTopicsInput, TopicUncheckedCreateWithoutSchoolTopicsInput>
    connectOrCreate?: TopicCreateOrConnectWithoutSchoolTopicsInput
    upsert?: TopicUpsertWithoutSchoolTopicsInput
    connect?: TopicWhereUniqueInput
    update?: XOR<XOR<TopicUpdateToOneWithWhereWithoutSchoolTopicsInput, TopicUpdateWithoutSchoolTopicsInput>, TopicUncheckedUpdateWithoutSchoolTopicsInput>
  }

  export type TopicCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<TopicCreateWithoutQuestionsInput, TopicUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: TopicCreateOrConnectWithoutQuestionsInput
    connect?: TopicWhereUniqueInput
  }

  export type EnumQuestionTypeFieldUpdateOperationsInput = {
    set?: $Enums.QuestionType
  }

  export type EnumDifficultyFieldUpdateOperationsInput = {
    set?: $Enums.Difficulty
  }

  export type TopicUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<TopicCreateWithoutQuestionsInput, TopicUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: TopicCreateOrConnectWithoutQuestionsInput
    upsert?: TopicUpsertWithoutQuestionsInput
    connect?: TopicWhereUniqueInput
    update?: XOR<XOR<TopicUpdateToOneWithWhereWithoutQuestionsInput, TopicUpdateWithoutQuestionsInput>, TopicUncheckedUpdateWithoutQuestionsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumQuestionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionTypeFilter<$PrismaModel> | $Enums.QuestionType
  }

  export type NestedEnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
  }

  export type NestedEnumQuestionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionTypeWithAggregatesFilter<$PrismaModel> | $Enums.QuestionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuestionTypeFilter<$PrismaModel>
    _max?: NestedEnumQuestionTypeFilter<$PrismaModel>
  }

  export type NestedEnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type TeacherSchoolCreateWithoutTeacherInput = {
    id?: string
    school: SchoolCreateNestedOneWithoutTeacherSchoolsInput
  }

  export type TeacherSchoolUncheckedCreateWithoutTeacherInput = {
    id?: string
    schoolId: string
  }

  export type TeacherSchoolCreateOrConnectWithoutTeacherInput = {
    where: TeacherSchoolWhereUniqueInput
    create: XOR<TeacherSchoolCreateWithoutTeacherInput, TeacherSchoolUncheckedCreateWithoutTeacherInput>
  }

  export type TeacherSchoolCreateManyTeacherInputEnvelope = {
    data: TeacherSchoolCreateManyTeacherInput | TeacherSchoolCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type StudentProfileCreateWithoutStudentInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    grade?: number | null
    city?: string | null
    school: SchoolCreateNestedOneWithoutStudentsInput
  }

  export type StudentProfileUncheckedCreateWithoutStudentInput = {
    id?: string
    schoolId: string
    firstName?: string | null
    lastName?: string | null
    grade?: number | null
    city?: string | null
  }

  export type StudentProfileCreateOrConnectWithoutStudentInput = {
    where: StudentProfileWhereUniqueInput
    create: XOR<StudentProfileCreateWithoutStudentInput, StudentProfileUncheckedCreateWithoutStudentInput>
  }

  export type TopicCreateWithoutCreatedByInput = {
    id?: string
    title: string
    orderIndex: number
    isActive?: boolean
    createdAt?: Date | string
    schoolTopics?: SchoolTopicCreateNestedManyWithoutTopicInput
    questions?: QuestionCreateNestedManyWithoutTopicInput
  }

  export type TopicUncheckedCreateWithoutCreatedByInput = {
    id?: string
    title: string
    orderIndex: number
    isActive?: boolean
    createdAt?: Date | string
    schoolTopics?: SchoolTopicUncheckedCreateNestedManyWithoutTopicInput
    questions?: QuestionUncheckedCreateNestedManyWithoutTopicInput
  }

  export type TopicCreateOrConnectWithoutCreatedByInput = {
    where: TopicWhereUniqueInput
    create: XOR<TopicCreateWithoutCreatedByInput, TopicUncheckedCreateWithoutCreatedByInput>
  }

  export type TopicCreateManyCreatedByInputEnvelope = {
    data: TopicCreateManyCreatedByInput | TopicCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type TeacherSchoolUpsertWithWhereUniqueWithoutTeacherInput = {
    where: TeacherSchoolWhereUniqueInput
    update: XOR<TeacherSchoolUpdateWithoutTeacherInput, TeacherSchoolUncheckedUpdateWithoutTeacherInput>
    create: XOR<TeacherSchoolCreateWithoutTeacherInput, TeacherSchoolUncheckedCreateWithoutTeacherInput>
  }

  export type TeacherSchoolUpdateWithWhereUniqueWithoutTeacherInput = {
    where: TeacherSchoolWhereUniqueInput
    data: XOR<TeacherSchoolUpdateWithoutTeacherInput, TeacherSchoolUncheckedUpdateWithoutTeacherInput>
  }

  export type TeacherSchoolUpdateManyWithWhereWithoutTeacherInput = {
    where: TeacherSchoolScalarWhereInput
    data: XOR<TeacherSchoolUpdateManyMutationInput, TeacherSchoolUncheckedUpdateManyWithoutTeacherInput>
  }

  export type TeacherSchoolScalarWhereInput = {
    AND?: TeacherSchoolScalarWhereInput | TeacherSchoolScalarWhereInput[]
    OR?: TeacherSchoolScalarWhereInput[]
    NOT?: TeacherSchoolScalarWhereInput | TeacherSchoolScalarWhereInput[]
    id?: StringFilter<"TeacherSchool"> | string
    teacherId?: StringFilter<"TeacherSchool"> | string
    schoolId?: StringFilter<"TeacherSchool"> | string
  }

  export type StudentProfileUpsertWithoutStudentInput = {
    update: XOR<StudentProfileUpdateWithoutStudentInput, StudentProfileUncheckedUpdateWithoutStudentInput>
    create: XOR<StudentProfileCreateWithoutStudentInput, StudentProfileUncheckedCreateWithoutStudentInput>
    where?: StudentProfileWhereInput
  }

  export type StudentProfileUpdateToOneWithWhereWithoutStudentInput = {
    where?: StudentProfileWhereInput
    data: XOR<StudentProfileUpdateWithoutStudentInput, StudentProfileUncheckedUpdateWithoutStudentInput>
  }

  export type StudentProfileUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableIntFieldUpdateOperationsInput | number | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    school?: SchoolUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type StudentProfileUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableIntFieldUpdateOperationsInput | number | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TopicUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: TopicWhereUniqueInput
    update: XOR<TopicUpdateWithoutCreatedByInput, TopicUncheckedUpdateWithoutCreatedByInput>
    create: XOR<TopicCreateWithoutCreatedByInput, TopicUncheckedCreateWithoutCreatedByInput>
  }

  export type TopicUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: TopicWhereUniqueInput
    data: XOR<TopicUpdateWithoutCreatedByInput, TopicUncheckedUpdateWithoutCreatedByInput>
  }

  export type TopicUpdateManyWithWhereWithoutCreatedByInput = {
    where: TopicScalarWhereInput
    data: XOR<TopicUpdateManyMutationInput, TopicUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type TopicScalarWhereInput = {
    AND?: TopicScalarWhereInput | TopicScalarWhereInput[]
    OR?: TopicScalarWhereInput[]
    NOT?: TopicScalarWhereInput | TopicScalarWhereInput[]
    id?: StringFilter<"Topic"> | string
    title?: StringFilter<"Topic"> | string
    orderIndex?: IntFilter<"Topic"> | number
    isActive?: BoolFilter<"Topic"> | boolean
    createdAt?: DateTimeFilter<"Topic"> | Date | string
    createdById?: StringNullableFilter<"Topic"> | string | null
  }

  export type TeacherSchoolCreateWithoutSchoolInput = {
    id?: string
    teacher: UserCreateNestedOneWithoutTeacherSchoolsInput
  }

  export type TeacherSchoolUncheckedCreateWithoutSchoolInput = {
    id?: string
    teacherId: string
  }

  export type TeacherSchoolCreateOrConnectWithoutSchoolInput = {
    where: TeacherSchoolWhereUniqueInput
    create: XOR<TeacherSchoolCreateWithoutSchoolInput, TeacherSchoolUncheckedCreateWithoutSchoolInput>
  }

  export type TeacherSchoolCreateManySchoolInputEnvelope = {
    data: TeacherSchoolCreateManySchoolInput | TeacherSchoolCreateManySchoolInput[]
    skipDuplicates?: boolean
  }

  export type StudentProfileCreateWithoutSchoolInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    grade?: number | null
    city?: string | null
    student: UserCreateNestedOneWithoutStudentProfileInput
  }

  export type StudentProfileUncheckedCreateWithoutSchoolInput = {
    id?: string
    studentId: string
    firstName?: string | null
    lastName?: string | null
    grade?: number | null
    city?: string | null
  }

  export type StudentProfileCreateOrConnectWithoutSchoolInput = {
    where: StudentProfileWhereUniqueInput
    create: XOR<StudentProfileCreateWithoutSchoolInput, StudentProfileUncheckedCreateWithoutSchoolInput>
  }

  export type StudentProfileCreateManySchoolInputEnvelope = {
    data: StudentProfileCreateManySchoolInput | StudentProfileCreateManySchoolInput[]
    skipDuplicates?: boolean
  }

  export type SchoolTopicCreateWithoutSchoolInput = {
    id?: string
    topic: TopicCreateNestedOneWithoutSchoolTopicsInput
  }

  export type SchoolTopicUncheckedCreateWithoutSchoolInput = {
    id?: string
    topicId: string
  }

  export type SchoolTopicCreateOrConnectWithoutSchoolInput = {
    where: SchoolTopicWhereUniqueInput
    create: XOR<SchoolTopicCreateWithoutSchoolInput, SchoolTopicUncheckedCreateWithoutSchoolInput>
  }

  export type SchoolTopicCreateManySchoolInputEnvelope = {
    data: SchoolTopicCreateManySchoolInput | SchoolTopicCreateManySchoolInput[]
    skipDuplicates?: boolean
  }

  export type TeacherSchoolUpsertWithWhereUniqueWithoutSchoolInput = {
    where: TeacherSchoolWhereUniqueInput
    update: XOR<TeacherSchoolUpdateWithoutSchoolInput, TeacherSchoolUncheckedUpdateWithoutSchoolInput>
    create: XOR<TeacherSchoolCreateWithoutSchoolInput, TeacherSchoolUncheckedCreateWithoutSchoolInput>
  }

  export type TeacherSchoolUpdateWithWhereUniqueWithoutSchoolInput = {
    where: TeacherSchoolWhereUniqueInput
    data: XOR<TeacherSchoolUpdateWithoutSchoolInput, TeacherSchoolUncheckedUpdateWithoutSchoolInput>
  }

  export type TeacherSchoolUpdateManyWithWhereWithoutSchoolInput = {
    where: TeacherSchoolScalarWhereInput
    data: XOR<TeacherSchoolUpdateManyMutationInput, TeacherSchoolUncheckedUpdateManyWithoutSchoolInput>
  }

  export type StudentProfileUpsertWithWhereUniqueWithoutSchoolInput = {
    where: StudentProfileWhereUniqueInput
    update: XOR<StudentProfileUpdateWithoutSchoolInput, StudentProfileUncheckedUpdateWithoutSchoolInput>
    create: XOR<StudentProfileCreateWithoutSchoolInput, StudentProfileUncheckedCreateWithoutSchoolInput>
  }

  export type StudentProfileUpdateWithWhereUniqueWithoutSchoolInput = {
    where: StudentProfileWhereUniqueInput
    data: XOR<StudentProfileUpdateWithoutSchoolInput, StudentProfileUncheckedUpdateWithoutSchoolInput>
  }

  export type StudentProfileUpdateManyWithWhereWithoutSchoolInput = {
    where: StudentProfileScalarWhereInput
    data: XOR<StudentProfileUpdateManyMutationInput, StudentProfileUncheckedUpdateManyWithoutSchoolInput>
  }

  export type StudentProfileScalarWhereInput = {
    AND?: StudentProfileScalarWhereInput | StudentProfileScalarWhereInput[]
    OR?: StudentProfileScalarWhereInput[]
    NOT?: StudentProfileScalarWhereInput | StudentProfileScalarWhereInput[]
    id?: StringFilter<"StudentProfile"> | string
    studentId?: StringFilter<"StudentProfile"> | string
    schoolId?: StringFilter<"StudentProfile"> | string
    firstName?: StringNullableFilter<"StudentProfile"> | string | null
    lastName?: StringNullableFilter<"StudentProfile"> | string | null
    grade?: IntNullableFilter<"StudentProfile"> | number | null
    city?: StringNullableFilter<"StudentProfile"> | string | null
  }

  export type SchoolTopicUpsertWithWhereUniqueWithoutSchoolInput = {
    where: SchoolTopicWhereUniqueInput
    update: XOR<SchoolTopicUpdateWithoutSchoolInput, SchoolTopicUncheckedUpdateWithoutSchoolInput>
    create: XOR<SchoolTopicCreateWithoutSchoolInput, SchoolTopicUncheckedCreateWithoutSchoolInput>
  }

  export type SchoolTopicUpdateWithWhereUniqueWithoutSchoolInput = {
    where: SchoolTopicWhereUniqueInput
    data: XOR<SchoolTopicUpdateWithoutSchoolInput, SchoolTopicUncheckedUpdateWithoutSchoolInput>
  }

  export type SchoolTopicUpdateManyWithWhereWithoutSchoolInput = {
    where: SchoolTopicScalarWhereInput
    data: XOR<SchoolTopicUpdateManyMutationInput, SchoolTopicUncheckedUpdateManyWithoutSchoolInput>
  }

  export type SchoolTopicScalarWhereInput = {
    AND?: SchoolTopicScalarWhereInput | SchoolTopicScalarWhereInput[]
    OR?: SchoolTopicScalarWhereInput[]
    NOT?: SchoolTopicScalarWhereInput | SchoolTopicScalarWhereInput[]
    id?: StringFilter<"SchoolTopic"> | string
    schoolId?: StringFilter<"SchoolTopic"> | string
    topicId?: StringFilter<"SchoolTopic"> | string
  }

  export type UserCreateWithoutTeacherSchoolsInput = {
    id?: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    studentProfile?: StudentProfileCreateNestedOneWithoutStudentInput
    createdTopics?: TopicCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutTeacherSchoolsInput = {
    id?: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    studentProfile?: StudentProfileUncheckedCreateNestedOneWithoutStudentInput
    createdTopics?: TopicUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutTeacherSchoolsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeacherSchoolsInput, UserUncheckedCreateWithoutTeacherSchoolsInput>
  }

  export type SchoolCreateWithoutTeacherSchoolsInput = {
    id?: string
    name: string
    students?: StudentProfileCreateNestedManyWithoutSchoolInput
    schoolTopics?: SchoolTopicCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutTeacherSchoolsInput = {
    id?: string
    name: string
    students?: StudentProfileUncheckedCreateNestedManyWithoutSchoolInput
    schoolTopics?: SchoolTopicUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutTeacherSchoolsInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutTeacherSchoolsInput, SchoolUncheckedCreateWithoutTeacherSchoolsInput>
  }

  export type UserUpsertWithoutTeacherSchoolsInput = {
    update: XOR<UserUpdateWithoutTeacherSchoolsInput, UserUncheckedUpdateWithoutTeacherSchoolsInput>
    create: XOR<UserCreateWithoutTeacherSchoolsInput, UserUncheckedCreateWithoutTeacherSchoolsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTeacherSchoolsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTeacherSchoolsInput, UserUncheckedUpdateWithoutTeacherSchoolsInput>
  }

  export type UserUpdateWithoutTeacherSchoolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentProfile?: StudentProfileUpdateOneWithoutStudentNestedInput
    createdTopics?: TopicUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutTeacherSchoolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentProfile?: StudentProfileUncheckedUpdateOneWithoutStudentNestedInput
    createdTopics?: TopicUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type SchoolUpsertWithoutTeacherSchoolsInput = {
    update: XOR<SchoolUpdateWithoutTeacherSchoolsInput, SchoolUncheckedUpdateWithoutTeacherSchoolsInput>
    create: XOR<SchoolCreateWithoutTeacherSchoolsInput, SchoolUncheckedCreateWithoutTeacherSchoolsInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutTeacherSchoolsInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutTeacherSchoolsInput, SchoolUncheckedUpdateWithoutTeacherSchoolsInput>
  }

  export type SchoolUpdateWithoutTeacherSchoolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    students?: StudentProfileUpdateManyWithoutSchoolNestedInput
    schoolTopics?: SchoolTopicUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutTeacherSchoolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    students?: StudentProfileUncheckedUpdateManyWithoutSchoolNestedInput
    schoolTopics?: SchoolTopicUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type UserCreateWithoutStudentProfileInput = {
    id?: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    teacherSchools?: TeacherSchoolCreateNestedManyWithoutTeacherInput
    createdTopics?: TopicCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutStudentProfileInput = {
    id?: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    teacherSchools?: TeacherSchoolUncheckedCreateNestedManyWithoutTeacherInput
    createdTopics?: TopicUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutStudentProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudentProfileInput, UserUncheckedCreateWithoutStudentProfileInput>
  }

  export type SchoolCreateWithoutStudentsInput = {
    id?: string
    name: string
    teacherSchools?: TeacherSchoolCreateNestedManyWithoutSchoolInput
    schoolTopics?: SchoolTopicCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutStudentsInput = {
    id?: string
    name: string
    teacherSchools?: TeacherSchoolUncheckedCreateNestedManyWithoutSchoolInput
    schoolTopics?: SchoolTopicUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutStudentsInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutStudentsInput, SchoolUncheckedCreateWithoutStudentsInput>
  }

  export type UserUpsertWithoutStudentProfileInput = {
    update: XOR<UserUpdateWithoutStudentProfileInput, UserUncheckedUpdateWithoutStudentProfileInput>
    create: XOR<UserCreateWithoutStudentProfileInput, UserUncheckedCreateWithoutStudentProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudentProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudentProfileInput, UserUncheckedUpdateWithoutStudentProfileInput>
  }

  export type UserUpdateWithoutStudentProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherSchools?: TeacherSchoolUpdateManyWithoutTeacherNestedInput
    createdTopics?: TopicUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutStudentProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherSchools?: TeacherSchoolUncheckedUpdateManyWithoutTeacherNestedInput
    createdTopics?: TopicUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type SchoolUpsertWithoutStudentsInput = {
    update: XOR<SchoolUpdateWithoutStudentsInput, SchoolUncheckedUpdateWithoutStudentsInput>
    create: XOR<SchoolCreateWithoutStudentsInput, SchoolUncheckedCreateWithoutStudentsInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutStudentsInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutStudentsInput, SchoolUncheckedUpdateWithoutStudentsInput>
  }

  export type SchoolUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    teacherSchools?: TeacherSchoolUpdateManyWithoutSchoolNestedInput
    schoolTopics?: SchoolTopicUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    teacherSchools?: TeacherSchoolUncheckedUpdateManyWithoutSchoolNestedInput
    schoolTopics?: SchoolTopicUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type UserCreateWithoutCreatedTopicsInput = {
    id?: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    teacherSchools?: TeacherSchoolCreateNestedManyWithoutTeacherInput
    studentProfile?: StudentProfileCreateNestedOneWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutCreatedTopicsInput = {
    id?: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    teacherSchools?: TeacherSchoolUncheckedCreateNestedManyWithoutTeacherInput
    studentProfile?: StudentProfileUncheckedCreateNestedOneWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutCreatedTopicsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedTopicsInput, UserUncheckedCreateWithoutCreatedTopicsInput>
  }

  export type SchoolTopicCreateWithoutTopicInput = {
    id?: string
    school: SchoolCreateNestedOneWithoutSchoolTopicsInput
  }

  export type SchoolTopicUncheckedCreateWithoutTopicInput = {
    id?: string
    schoolId: string
  }

  export type SchoolTopicCreateOrConnectWithoutTopicInput = {
    where: SchoolTopicWhereUniqueInput
    create: XOR<SchoolTopicCreateWithoutTopicInput, SchoolTopicUncheckedCreateWithoutTopicInput>
  }

  export type SchoolTopicCreateManyTopicInputEnvelope = {
    data: SchoolTopicCreateManyTopicInput | SchoolTopicCreateManyTopicInput[]
    skipDuplicates?: boolean
  }

  export type QuestionCreateWithoutTopicInput = {
    id?: string
    type: $Enums.QuestionType
    difficulty: $Enums.Difficulty
    prompt: string
    options?: NullableJsonNullValueInput | InputJsonValue
    correctKey?: string | null
    correctNum?: string | null
    createdAt?: Date | string
  }

  export type QuestionUncheckedCreateWithoutTopicInput = {
    id?: string
    type: $Enums.QuestionType
    difficulty: $Enums.Difficulty
    prompt: string
    options?: NullableJsonNullValueInput | InputJsonValue
    correctKey?: string | null
    correctNum?: string | null
    createdAt?: Date | string
  }

  export type QuestionCreateOrConnectWithoutTopicInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutTopicInput, QuestionUncheckedCreateWithoutTopicInput>
  }

  export type QuestionCreateManyTopicInputEnvelope = {
    data: QuestionCreateManyTopicInput | QuestionCreateManyTopicInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreatedTopicsInput = {
    update: XOR<UserUpdateWithoutCreatedTopicsInput, UserUncheckedUpdateWithoutCreatedTopicsInput>
    create: XOR<UserCreateWithoutCreatedTopicsInput, UserUncheckedCreateWithoutCreatedTopicsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedTopicsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedTopicsInput, UserUncheckedUpdateWithoutCreatedTopicsInput>
  }

  export type UserUpdateWithoutCreatedTopicsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherSchools?: TeacherSchoolUpdateManyWithoutTeacherNestedInput
    studentProfile?: StudentProfileUpdateOneWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedTopicsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherSchools?: TeacherSchoolUncheckedUpdateManyWithoutTeacherNestedInput
    studentProfile?: StudentProfileUncheckedUpdateOneWithoutStudentNestedInput
  }

  export type SchoolTopicUpsertWithWhereUniqueWithoutTopicInput = {
    where: SchoolTopicWhereUniqueInput
    update: XOR<SchoolTopicUpdateWithoutTopicInput, SchoolTopicUncheckedUpdateWithoutTopicInput>
    create: XOR<SchoolTopicCreateWithoutTopicInput, SchoolTopicUncheckedCreateWithoutTopicInput>
  }

  export type SchoolTopicUpdateWithWhereUniqueWithoutTopicInput = {
    where: SchoolTopicWhereUniqueInput
    data: XOR<SchoolTopicUpdateWithoutTopicInput, SchoolTopicUncheckedUpdateWithoutTopicInput>
  }

  export type SchoolTopicUpdateManyWithWhereWithoutTopicInput = {
    where: SchoolTopicScalarWhereInput
    data: XOR<SchoolTopicUpdateManyMutationInput, SchoolTopicUncheckedUpdateManyWithoutTopicInput>
  }

  export type QuestionUpsertWithWhereUniqueWithoutTopicInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutTopicInput, QuestionUncheckedUpdateWithoutTopicInput>
    create: XOR<QuestionCreateWithoutTopicInput, QuestionUncheckedCreateWithoutTopicInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutTopicInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutTopicInput, QuestionUncheckedUpdateWithoutTopicInput>
  }

  export type QuestionUpdateManyWithWhereWithoutTopicInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutTopicInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    OR?: QuestionScalarWhereInput[]
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    id?: StringFilter<"Question"> | string
    topicId?: StringFilter<"Question"> | string
    type?: EnumQuestionTypeFilter<"Question"> | $Enums.QuestionType
    difficulty?: EnumDifficultyFilter<"Question"> | $Enums.Difficulty
    prompt?: StringFilter<"Question"> | string
    options?: JsonNullableFilter<"Question">
    correctKey?: StringNullableFilter<"Question"> | string | null
    correctNum?: StringNullableFilter<"Question"> | string | null
    createdAt?: DateTimeFilter<"Question"> | Date | string
  }

  export type SchoolCreateWithoutSchoolTopicsInput = {
    id?: string
    name: string
    teacherSchools?: TeacherSchoolCreateNestedManyWithoutSchoolInput
    students?: StudentProfileCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutSchoolTopicsInput = {
    id?: string
    name: string
    teacherSchools?: TeacherSchoolUncheckedCreateNestedManyWithoutSchoolInput
    students?: StudentProfileUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutSchoolTopicsInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutSchoolTopicsInput, SchoolUncheckedCreateWithoutSchoolTopicsInput>
  }

  export type TopicCreateWithoutSchoolTopicsInput = {
    id?: string
    title: string
    orderIndex: number
    isActive?: boolean
    createdAt?: Date | string
    createdBy?: UserCreateNestedOneWithoutCreatedTopicsInput
    questions?: QuestionCreateNestedManyWithoutTopicInput
  }

  export type TopicUncheckedCreateWithoutSchoolTopicsInput = {
    id?: string
    title: string
    orderIndex: number
    isActive?: boolean
    createdAt?: Date | string
    createdById?: string | null
    questions?: QuestionUncheckedCreateNestedManyWithoutTopicInput
  }

  export type TopicCreateOrConnectWithoutSchoolTopicsInput = {
    where: TopicWhereUniqueInput
    create: XOR<TopicCreateWithoutSchoolTopicsInput, TopicUncheckedCreateWithoutSchoolTopicsInput>
  }

  export type SchoolUpsertWithoutSchoolTopicsInput = {
    update: XOR<SchoolUpdateWithoutSchoolTopicsInput, SchoolUncheckedUpdateWithoutSchoolTopicsInput>
    create: XOR<SchoolCreateWithoutSchoolTopicsInput, SchoolUncheckedCreateWithoutSchoolTopicsInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutSchoolTopicsInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutSchoolTopicsInput, SchoolUncheckedUpdateWithoutSchoolTopicsInput>
  }

  export type SchoolUpdateWithoutSchoolTopicsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    teacherSchools?: TeacherSchoolUpdateManyWithoutSchoolNestedInput
    students?: StudentProfileUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutSchoolTopicsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    teacherSchools?: TeacherSchoolUncheckedUpdateManyWithoutSchoolNestedInput
    students?: StudentProfileUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type TopicUpsertWithoutSchoolTopicsInput = {
    update: XOR<TopicUpdateWithoutSchoolTopicsInput, TopicUncheckedUpdateWithoutSchoolTopicsInput>
    create: XOR<TopicCreateWithoutSchoolTopicsInput, TopicUncheckedCreateWithoutSchoolTopicsInput>
    where?: TopicWhereInput
  }

  export type TopicUpdateToOneWithWhereWithoutSchoolTopicsInput = {
    where?: TopicWhereInput
    data: XOR<TopicUpdateWithoutSchoolTopicsInput, TopicUncheckedUpdateWithoutSchoolTopicsInput>
  }

  export type TopicUpdateWithoutSchoolTopicsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneWithoutCreatedTopicsNestedInput
    questions?: QuestionUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateWithoutSchoolTopicsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: QuestionUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type TopicCreateWithoutQuestionsInput = {
    id?: string
    title: string
    orderIndex: number
    isActive?: boolean
    createdAt?: Date | string
    createdBy?: UserCreateNestedOneWithoutCreatedTopicsInput
    schoolTopics?: SchoolTopicCreateNestedManyWithoutTopicInput
  }

  export type TopicUncheckedCreateWithoutQuestionsInput = {
    id?: string
    title: string
    orderIndex: number
    isActive?: boolean
    createdAt?: Date | string
    createdById?: string | null
    schoolTopics?: SchoolTopicUncheckedCreateNestedManyWithoutTopicInput
  }

  export type TopicCreateOrConnectWithoutQuestionsInput = {
    where: TopicWhereUniqueInput
    create: XOR<TopicCreateWithoutQuestionsInput, TopicUncheckedCreateWithoutQuestionsInput>
  }

  export type TopicUpsertWithoutQuestionsInput = {
    update: XOR<TopicUpdateWithoutQuestionsInput, TopicUncheckedUpdateWithoutQuestionsInput>
    create: XOR<TopicCreateWithoutQuestionsInput, TopicUncheckedCreateWithoutQuestionsInput>
    where?: TopicWhereInput
  }

  export type TopicUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: TopicWhereInput
    data: XOR<TopicUpdateWithoutQuestionsInput, TopicUncheckedUpdateWithoutQuestionsInput>
  }

  export type TopicUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneWithoutCreatedTopicsNestedInput
    schoolTopics?: SchoolTopicUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    schoolTopics?: SchoolTopicUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type TeacherSchoolCreateManyTeacherInput = {
    id?: string
    schoolId: string
  }

  export type TopicCreateManyCreatedByInput = {
    id?: string
    title: string
    orderIndex: number
    isActive?: boolean
    createdAt?: Date | string
  }

  export type TeacherSchoolUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    school?: SchoolUpdateOneRequiredWithoutTeacherSchoolsNestedInput
  }

  export type TeacherSchoolUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
  }

  export type TeacherSchoolUncheckedUpdateManyWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
  }

  export type TopicUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolTopics?: SchoolTopicUpdateManyWithoutTopicNestedInput
    questions?: QuestionUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolTopics?: SchoolTopicUncheckedUpdateManyWithoutTopicNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherSchoolCreateManySchoolInput = {
    id?: string
    teacherId: string
  }

  export type StudentProfileCreateManySchoolInput = {
    id?: string
    studentId: string
    firstName?: string | null
    lastName?: string | null
    grade?: number | null
    city?: string | null
  }

  export type SchoolTopicCreateManySchoolInput = {
    id?: string
    topicId: string
  }

  export type TeacherSchoolUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacher?: UserUpdateOneRequiredWithoutTeacherSchoolsNestedInput
  }

  export type TeacherSchoolUncheckedUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
  }

  export type TeacherSchoolUncheckedUpdateManyWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentProfileUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableIntFieldUpdateOperationsInput | number | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    student?: UserUpdateOneRequiredWithoutStudentProfileNestedInput
  }

  export type StudentProfileUncheckedUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableIntFieldUpdateOperationsInput | number | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentProfileUncheckedUpdateManyWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableIntFieldUpdateOperationsInput | number | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SchoolTopicUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    topic?: TopicUpdateOneRequiredWithoutSchoolTopicsNestedInput
  }

  export type SchoolTopicUncheckedUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
  }

  export type SchoolTopicUncheckedUpdateManyWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
  }

  export type SchoolTopicCreateManyTopicInput = {
    id?: string
    schoolId: string
  }

  export type QuestionCreateManyTopicInput = {
    id?: string
    type: $Enums.QuestionType
    difficulty: $Enums.Difficulty
    prompt: string
    options?: NullableJsonNullValueInput | InputJsonValue
    correctKey?: string | null
    correctNum?: string | null
    createdAt?: Date | string
  }

  export type SchoolTopicUpdateWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    school?: SchoolUpdateOneRequiredWithoutSchoolTopicsNestedInput
  }

  export type SchoolTopicUncheckedUpdateWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
  }

  export type SchoolTopicUncheckedUpdateManyWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionUpdateWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    prompt?: StringFieldUpdateOperationsInput | string
    options?: NullableJsonNullValueInput | InputJsonValue
    correctKey?: NullableStringFieldUpdateOperationsInput | string | null
    correctNum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    prompt?: StringFieldUpdateOperationsInput | string
    options?: NullableJsonNullValueInput | InputJsonValue
    correctKey?: NullableStringFieldUpdateOperationsInput | string | null
    correctNum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    prompt?: StringFieldUpdateOperationsInput | string
    options?: NullableJsonNullValueInput | InputJsonValue
    correctKey?: NullableStringFieldUpdateOperationsInput | string | null
    correctNum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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