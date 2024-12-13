// https://www.client.io/docs/orm/reference/client-client-reference#model-queries

import { Prisma } from '@prisma/client';
import { client } from './prisma.utils';

export class Like {
	private static client = client;

	static findUnique = async (args: Prisma.LikeFindUniqueArgs) => {
		return await this.client.like.findUnique(args);
	};

	static findUniqueOrThrow = async (
		args: Prisma.LikeFindUniqueOrThrowArgs,
	) => {
		return await this.client.like.findUniqueOrThrow(args);
	};

	static findFirst = async (args?: Prisma.LikeFindFirstArgs) => {
		return await this.client.like.findFirst(args);
	};

	static findFirstOrThrow = async (
		args?: Prisma.LikeFindFirstOrThrowArgs,
	) => {
		return await this.client.like.findFirstOrThrow(args);
	};

	static findMany = async (args?: Prisma.LikeFindManyArgs) => {
		return await this.client.like.findMany(args);
	};

	static create = async (args: Prisma.LikeCreateArgs) => {
		return await this.client.like.create(args);
	};

	static update = async (args: Prisma.LikeUpdateArgs) => {
		return await this.client.like.update(args);
	};

	static upsert = async (args: Prisma.LikeUpsertArgs) => {
		return await this.client.like.upsert(args);
	};

	static delete = async (args: Prisma.LikeDeleteArgs) => {
		return await this.client.like.delete(args);
	};

	static createMany = async (args: Prisma.LikeCreateManyArgs) => {
		return await this.client.like.createMany(args);
	};

	// createManyAndReturn is only available in Prisma ORM version 5.14.0 and up.
	// createManyAndReturn is only available for PostgreSQL, CockroachDB, and SQLite.
	// uncomment this code section if you want to use it.
	// static createManyAndReturn = async (args: Prisma.LikeCreateManyAndReturnArgs) => {
	//     return await this.client.like.createManyAndReturn(args);
	// };

	static updateMany = async (args: Prisma.LikeUpdateManyArgs) => {
		return await this.client.like.updateMany(args);
	};

	static deleteMany = async (args?: Prisma.LikeDeleteManyArgs) => {
		return await this.client.like.deleteMany(args);
	};

	static count = async (args?: Prisma.LikeCountArgs) => {
		return await this.client.like.count(args);
	};

	static aggregate = async (args: Prisma.LikeAggregateArgs) => {
		return await this.client.like.aggregate(args);
	};

	// BUG: Fix scheduled for the next version (release date TBD)
	// static groupBy = async (args?: Prisma.LikeGroupByArgs) => {
	//     return await this.client.like.groupBy(args);
	// };
}
