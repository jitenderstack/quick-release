
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UsersRolesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  code: 'code',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.UsersScalarFieldEnum = {
  id: 'id',
  cuid: 'cuid',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  firstName: 'firstName',
  lastName: 'lastName',
  profilePicture: 'profilePicture',
  email: 'email',
  password: 'password',
  resetToken: 'resetToken',
  resetTokenExpiry: 'resetTokenExpiry',
  isActive: 'isActive',
  isVerified: 'isVerified',
  verificationToken: 'verificationToken',
  verificationTokenExpiry: 'verificationTokenExpiry'
};

exports.Prisma.OrganizationsScalarFieldEnum = {
  id: 'id',
  cuid: 'cuid',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  createdById: 'createdById',
  name: 'name'
};

exports.Prisma.OrganizationsUsersScalarFieldEnum = {
  organizationsId: 'organizationsId',
  usersId: 'usersId',
  isActive: 'isActive'
};

exports.Prisma.ProjectsScalarFieldEnum = {
  id: 'id',
  cuid: 'cuid',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  name: 'name',
  slug: 'slug',
  projectImgUrl: 'projectImgUrl',
  createdById: 'createdById',
  organizationsId: 'organizationsId'
};

exports.Prisma.ProjectsUsersScalarFieldEnum = {
  projectsId: 'projectsId',
  usersId: 'usersId',
  roleId: 'roleId',
  isActive: 'isActive'
};

exports.Prisma.ChangelogsScalarFieldEnum = {
  id: 'id',
  cuid: 'cuid',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  title: 'title',
  description: 'description',
  releaseVersion: 'releaseVersion',
  projectsId: 'projectsId',
  scheduledTime: 'scheduledTime',
  status: 'status',
  createdById: 'createdById',
  updatedById: 'updatedById',
  deletedAt: 'deletedAt',
  archivedAt: 'archivedAt'
};

exports.Prisma.ReleaseTagsScalarFieldEnum = {
  id: 'id',
  cuid: 'cuid',
  name: 'name',
  code: 'code',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  organizationsId: 'organizationsId'
};

exports.Prisma.ChangelogReleaseTagsScalarFieldEnum = {
  logId: 'logId',
  releaseTagId: 'releaseTagId'
};

exports.Prisma.ReleaseCategoriesScalarFieldEnum = {
  id: 'id',
  cuid: 'cuid',
  name: 'name',
  code: 'code',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  organizationsId: 'organizationsId'
};

exports.Prisma.ChangelogReleaseCategoriesScalarFieldEnum = {
  logId: 'logId',
  releaseCategoryId: 'releaseCategoryId'
};

exports.Prisma.FeedbackPostsScalarFieldEnum = {
  id: 'id',
  cuid: 'cuid',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  title: 'title',
  description: 'description',
  status: 'status',
  releaseETA: 'releaseETA',
  createdById: 'createdById',
  deletedAt: 'deletedAt',
  feedbackBoardsId: 'feedbackBoardsId',
  visibilityStatus: 'visibilityStatus'
};

exports.Prisma.FeedbackBoardsScalarFieldEnum = {
  id: 'id',
  cuid: 'cuid',
  name: 'name',
  isDefault: 'isDefault',
  projectsId: 'projectsId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.FeedbackPostReleaseTagsScalarFieldEnum = {
  feedbackPostId: 'feedbackPostId',
  releaseTagId: 'releaseTagId'
};

exports.Prisma.FeedbackPostVotesScalarFieldEnum = {
  feedbackPostId: 'feedbackPostId',
  userId: 'userId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.FeedbackStatus = exports.$Enums.FeedbackStatus = {
  IN_REVIEW: 'IN_REVIEW',
  PLANNED: 'PLANNED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CLOSED: 'CLOSED'
};

exports.VisibilityStatus = exports.$Enums.VisibilityStatus = {
  public: 'public',
  private: 'private'
};

exports.Prisma.ModelName = {
  UsersRoles: 'UsersRoles',
  Users: 'Users',
  Organizations: 'Organizations',
  OrganizationsUsers: 'OrganizationsUsers',
  Projects: 'Projects',
  ProjectsUsers: 'ProjectsUsers',
  Changelogs: 'Changelogs',
  ReleaseTags: 'ReleaseTags',
  ChangelogReleaseTags: 'ChangelogReleaseTags',
  ReleaseCategories: 'ReleaseCategories',
  ChangelogReleaseCategories: 'ChangelogReleaseCategories',
  FeedbackPosts: 'FeedbackPosts',
  FeedbackBoards: 'FeedbackBoards',
  FeedbackPostReleaseTags: 'FeedbackPostReleaseTags',
  FeedbackPostVotes: 'FeedbackPostVotes'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
