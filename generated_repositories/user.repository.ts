// https://www.client.io/docs/orm/reference/client-client-reference#model-queries

import { Prisma } from '@prisma/client';
import { client } from './prisma.utils';

export class User {
	private static client = client;

	static findUnique = async (args: Prisma.UserFindUniqueArgs) => {
		return await this.client.user.findUnique(args);
	};

	static findUniqueOrThrow = async (
		args: Prisma.UserFindUniqueOrThrowArgs,
	) => {
		return await this.client.user.findUniqueOrThrow(args);
	};

	static findFirst = async (args?: Prisma.UserFindFirstArgs) => {
		return await this.client.user.findFirst(args);
	};

	static findFirstOrThrow = async (
		args?: Prisma.UserFindFirstOrThrowArgs,
	) => {
		return await this.client.user.findFirstOrThrow(args);
	};

	static findMany = async (args?: Prisma.UserFindManyArgs) => {
		return await this.client.user.findMany(args);
	};

	static create = async (args: Prisma.UserCreateArgs) => {
		return await this.client.user.create(args);
	};

	static update = async (args: Prisma.UserUpdateArgs) => {
		return await this.client.user.update(args);
	};

	static upsert = async (args: Prisma.UserUpsertArgs) => {
		return await this.client.user.upsert(args);
	};

	static delete = async (args: Prisma.UserDeleteArgs) => {
		return await this.client.user.delete(args);
	};

	static createMany = async (args: Prisma.UserCreateManyArgs) => {
		return await this.client.user.createMany(args);
	};

	// createManyAndReturn is only available in Prisma ORM version 5.14.0 and up.
	// createManyAndReturn is only available for PostgreSQL, CockroachDB, and SQLite.
	// uncomment this code section if you want to use it.
	// static createManyAndReturn = async (args: Prisma.UserCreateManyAndReturnArgs) => {
	//     return await this.client.user.createManyAndReturn(args);
	// };

	static updateMany = async (args: Prisma.UserUpdateManyArgs) => {
		return await this.client.user.updateMany(args);
	};

	static deleteMany = async (args?: Prisma.UserDeleteManyArgs) => {
		return await this.client.user.deleteMany(args);
	};

	static count = async (args?: Prisma.UserCountArgs) => {
		return await this.client.user.count(args);
	};

	static aggregate = async (args: Prisma.UserAggregateArgs) => {
		return await this.client.user.aggregate(args);
	};

	// BUG: Fix scheduled for the next version (release date TBD)
	// static groupBy = async (args?: Prisma.UserGroupByArgs) => {
	//     return await this.client.user.groupBy(args);
	// };
}
